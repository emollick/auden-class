#!/usr/bin/env python3
# What `sync.sh` cannot do. It only adds and replaces, so a file that was moved or removed in
# the source stays at its old place in the shared copy. This tool finds those files: the ones
# that stand in the shared copy at a path the source has left.
#
#   python3 build/tools/sync-moved.py              counts by folder; nothing is changed
#   python3 build/tools/sync-moved.py --list F     also write the two lists to F-moved.txt, F-left.txt
#   python3 build/tools/sync-moved.py --manifest   write build/tools/shared-stale.txt in the source
#                                                  (`sync.sh` does this before it copies, so the
#                                                  list always travels with the shared copy)
#   python3 build/tools/sync-moved.py --restored D D is a working copy just made from the shared
#                                                  folder: take out of D (never out of the shared
#                                                  folder) every path of D/build/tools/shared-stale.txt
#   python3 build/tools/sync-moved.py --remove     take the moved ones out of the shared copy itself.
#       REFUSED by the session's permission system on 3 October 2026 (it changes a shared
#       folder). Not to be run without the owner's own word. Until then the shared copy keeps
#       the old files, and a working copy made from it is cleaned with --restored.
#
# "Moved" means: the same content is kept in the shared copy at a path the source still has.
# The shared folder adds a segment (APP11) to every JPEG written to it, so two copies of one
# picture differ in bytes there. Pictures are compared with those segments left out.
import hashlib, os, sys
from collections import Counter

SRC = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
DST = '/mnt/project-files/auden-course'
MANIFEST = os.path.join('build', 'tools', 'shared-stale.txt')
# not copied by sync.sh from the tree, or kept only in the shared copy
SKIP_TOP = {'.cache', '.git', 'node_modules', 'deploy', 'research-notes'}
args = sys.argv[1:]
REMOVE = '--remove' in args
LIST = args[args.index('--list') + 1] if '--list' in args else None

if '--restored' in args:
    d = os.path.abspath(args[args.index('--restored') + 1])
    assert not (d + os.sep).startswith('/mnt/project-files/'), 'the shared folder itself is not a working copy'
    assert os.path.isfile(os.path.join(d, MANIFEST)), 'no %s in %s' % (MANIFEST, d)
    n = 0
    for line in open(os.path.join(d, MANIFEST), encoding='utf-8'):
        r = line.rstrip('\n').split('\t')[0]
        if not r or r.startswith('#'):
            continue
        p = os.path.normpath(os.path.join(d, r))
        assert p.startswith(d + os.sep), r
        if os.path.isfile(p):
            os.remove(p)
            n += 1
    for top, dirs, files in os.walk(d, topdown=False):
        if top != d and not os.listdir(top):
            os.rmdir(top)
    print('took %d files the source had left out of %s' % (n, d))
    sys.exit(0)


def data(p):
    b = open(p, 'rb').read()
    if b[:2] != b'\xff\xd8':
        return b
    # a JPEG: its segments up to the scan, without APP11 (0xFFEB); then the rest as it is
    out, i = [b[:2]], 2
    while i + 4 <= len(b) and b[i] == 0xFF:
        m = b[i + 1]
        if m == 0xDA:  # start of scan: the image data follows to the end
            break
        n = int.from_bytes(b[i + 2:i + 4], 'big')
        if m != 0xEB:
            out.append(b[i:i + 2 + n])
        i += 2 + n
    out.append(b[i:])
    return b''.join(out)


def sha(p):
    return hashlib.sha1(data(p)).hexdigest()


stale, live_by_name = [], {}
for d, dirs, files in os.walk(DST):
    rel = os.path.relpath(d, DST)
    if rel.split(os.sep)[0] in SKIP_TOP:
        dirs[:] = []
        continue
    for f in files:
        r = os.path.normpath(os.path.join(rel, f))
        if os.path.lexists(os.path.join(SRC, r)):
            live_by_name.setdefault(f, []).append(r)
        else:
            stale.append(r)

moved, left = [], []
for r in sorted(stale):
    a = os.path.join(DST, r)
    first = os.path.join('first-version', r)
    cands = ([first] if os.path.isfile(os.path.join(DST, first)) and os.path.lexists(os.path.join(SRC, first)) else [])
    cands += [c for c in live_by_name.get(os.path.basename(r), []) if c != first]
    h, found = None, None
    for c in cands:
        if c == r:
            continue
        h = h or sha(a)
        if sha(os.path.join(DST, c)) == h:
            found = c
            break
    (moved if found else left).append((r, found))

if '--manifest' in args:
    with open(os.path.join(SRC, MANIFEST), 'w', encoding='utf-8') as f:
        f.write('# Paths that stand in the shared copy and no longer in the source: files moved or removed in the\n')
        f.write('# source, which `sync.sh` cannot take out. Written by build/tools/sync-moved.py --manifest at\n')
        f.write('# every sync. A working copy made from the shared folder is cleaned of them with\n')
        f.write('#   python3 build/tools/sync-moved.py --restored <the working copy>\n')
        f.write('# A second column names where the same content is kept (a move); none means it was removed.\n')
        for r, found in moved:
            f.write('%s\t%s\n' % (r, found))
        for r, _ in left:
            f.write('%s\n' % r)
    print('%s: %d paths (%d moved, %d removed in the source)' % (MANIFEST, len(stale), len(moved), len(left)))
    sys.exit(0)

print('%d files of the shared copy stand at a path the source has left' % len(stale))
print('%d of them are kept in the shared copy at a path the source still has; %d are not' % (len(moved), len(left)))
for name, rows in (('kept elsewhere (a move)', moved), ('kept nowhere else', left)):
    c = Counter('/'.join(r.split(os.sep)[:3]) if r.count(os.sep) >= 3 else os.path.dirname(r) or '(root)' for r, _ in rows)
    print('--', name)
    for k, n in sorted(c.items(), key=lambda x: (-x[1], x[0]))[:40]:
        print('  %5d  %s' % (n, k))
if LIST:
    open(LIST + '-moved.txt', 'w').write(''.join('%s\t%s\n' % x for x in moved))
    open(LIST + '-left.txt', 'w').write(''.join('%s\n' % x[0] for x in left))
if REMOVE:
    n = 0
    for r, found in moved:
        # the copy must still be there at the moment of removing
        assert os.path.isfile(os.path.join(DST, found)), found
        os.remove(os.path.join(DST, r))
        n += 1
    # folders the source does not have and that are now empty
    gone = 0
    for d, dirs, files in os.walk(DST, topdown=False):
        rel = os.path.relpath(d, DST)
        if rel == '.' or rel.split(os.sep)[0] in SKIP_TOP or os.path.isdir(os.path.join(SRC, rel)):
            continue
        if not os.listdir(d):
            os.rmdir(d)
            gone += 1
    print('removed %d files and %d empty folders from the shared copy' % (n, gone))
