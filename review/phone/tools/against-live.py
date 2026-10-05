#!/usr/bin/env python3
"""Says which files of site/ differ from the site that is live, by the list of checksums written with its zip.

    python3 review/phone/tools/against-live.py [deploy/<live zip>.list]

Prints the paths that changed, the new ones and the ones gone (site/js/kit/README.md is not part of the site).
"""
import hashlib, os, sys
lst = sys.argv[1] if len(sys.argv) > 1 else 'deploy/fate-and-the-individual-site-2026-10-04-card.zip.list'
live = {}
for line in open(lst, encoding='utf-8'):
    h, p = line.rstrip('\n').split('  ', 1)
    live[p] = h
now = {}
for root, dirs, names in os.walk('site'):
    for n in names:
        p = os.path.join(root, n)
        if p == 'site/js/kit/README.md':
            continue
        now[p[len('site/'):]] = hashlib.sha1(open(p, 'rb').read()).hexdigest()
changed = sorted(p for p in now if p in live and now[p] != live[p])
new = sorted(p for p in now if p not in live)
gone = sorted(p for p in live if p not in now)
print(f'{len(now)} files now, {len(live)} live: {len(changed)} changed, {len(new)} new, {len(gone)} gone')
for name, group in (('changed', changed), ('new', new), ('gone', gone)):
    for p in group:
        print(f'  {name}  {p}')
