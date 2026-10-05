#!/usr/bin/env python3
"""Where in Pearce's essay a phrase stands, by page.

    python3 review/class/tools/pearce-page.py --map
        the page breaks found in the kept scan: page number and offset only
    python3 review/class/tools/pearce-page.py phrases.txt
        one phrase a line (blank lines and lines beginning # are skipped): prints, for each,
        the page it stands on, or NOT FOUND. Nothing of the scan itself is printed.

The scan (.cache/research/auden/pearce.txt) runs the pages together. A page's number stands at its
foot, followed by the running head of the next page, so the words before a number n are on page n.
Matching ignores case, line-end hyphens, spaces and the kind of quotation mark; a phrase may hold
" ... " for words left out (the two halves must stand within 400 characters of each other).
"""
import re
import sys
import unicodedata

SCAN = '.cache/research/auden/pearce.txt'
raw = open(SCAN, encoding='utf-8').read()


def norm(s):
    s = unicodedata.normalize('NFKD', s)
    s = s.replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"').replace('—', '-').replace('–', '-')
    s = re.sub(r'-\s+', '', s)          # a word broken at the end of a line
    s = re.sub(r'[^A-Za-z0-9]+', ' ', s).lower()
    return re.sub(r'\s+', ' ', s).strip()


# The page breaks, in the raw text. The kept scan is three long lines: the second holds the foot of
# p. 131 to p. 152 and the third pp. 153 to 157; the first is a stitched working copy and is not used.
# Pages 129-130 and 137-144 are not in it (they were read in search snippets: remake/research/E_pd_pearce.md).
lines = raw.split('\n')
long = [i for i, l in enumerate(lines) if len(l) > 1000]
offset = {i: sum(len(x) + 1 for x in lines[:i]) for i in long}
breaks = []
for i in long[1:]:
    last = breaks[-1][0] if breaks else 130
    for m in re.finditer(r'(?<![\d])(1[2-5]\d)(?![\d])', lines[i]):
        n = int(m.group(1)); o = offset[i] + m.start()
        if n > last and n <= 157 and (not breaks or o - breaks[-1][1] > 1200):
            breaks.append((n, o)); last = n
body_from = offset[long[1]]
body_to = breaks[-1][1]
raw_body = raw[body_from:body_to]
cuts = [body_from] + [o for _, o in breaks]
chunks = []
for a, z in zip(cuts, cuts[1:]):
    page = next(p for p, o in breaks if o >= z)
    prev = max([p for p, o in breaks if o <= a] or [page - 1])
    label = str(page) if page - prev <= 1 else f'{prev + 1}-{page} (the scan has a gap here)'
    chunks.append((label, norm(raw[a:z])))
# the head of the first long line is the end of p. 131 and the whole of p. 132
head = lines[long[0]]
m131 = re.search(r'(?<![\d])131(?![\d])', head)
m132 = re.search(r'(?<![\d])132(?![\d])', head)
if m131 and m132 and m131.start() < m132.start():
    chunks = [('131', norm(head[:m131.start()])), ('132', norm(head[m131.end():m132.start()]))] + chunks

if '--map' in sys.argv:
    print('page breaks found (page, offset):', ', '.join(f'{p}@{o}' for p, o in breaks))
    seen = [p for p, _ in breaks]
    print('numbers missing between first and last:', [n for n in range(seen[0], seen[-1] + 1) if n not in seen])
    print('stretches:', ', '.join(f'{label}: {len(c)} letters' for label, c in chunks))
    sys.exit(0)

full = ' '.join(c for _, c in chunks)
starts = []
at = 0
for page, c in chunks:
    starts.append((at, page))
    at += len(c) + 1


def page_at(off):
    page = None
    for s, p in starts:
        if s <= off:
            page = p
        else:
            break
    return page


for line in open(sys.argv[1], encoding='utf-8'):
    line = line.rstrip('\n')
    if not line.strip() or line.lstrip().startswith('#'):
        continue
    label, _, phrase = line.partition('\t') if '\t' in line else ('', '', line)
    halves = [norm(h) for h in re.split(r'\s\.\.\.\s', phrase)]
    off = full.find(halves[0])
    ok = off >= 0
    end = off + len(halves[0]) if ok else -1
    for h in halves[1:]:
        if not ok:
            break
        nxt = full.find(h, end)
        ok = nxt >= 0 and nxt - end < 400
        end = nxt + len(h) if ok else -1
    count = full.count(halves[0]) if ok else 0
    if ok:
        p1, p2 = page_at(off), page_at(max(off, end - 1))
        where = f'p. {p1}' if p1 == p2 else f'pp. {p1} to {p2}'
        print(f'{where:12} {"(x%d) " % count if count > 1 else ""}{label or phrase[:60]}')
    else:
        print(f'NOT FOUND    {label or phrase[:60]}')
