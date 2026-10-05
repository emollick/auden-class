#!/usr/bin/env python3
"""List entries of .cache/temple/review.json:  rv.py [class=...] [canto=...] [para=N] [has=TEXT]
Prints index, canto:para, class, base reading and proposal (short)."""
import json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
path = os.path.join(HERE, '..', '..', '..', '.cache', 'temple', 'review.json')
items = json.load(open(path, encoding='utf-8'))
f = dict(a.split('=', 1) for a in sys.argv[1:] if '=' in a)
quiet = '-q' in sys.argv
idx = []
for i, it in enumerate(items):
    if 'class' in f and it['class'] not in f['class'].split(','):
        continue
    if 'canto' in f and not any(it['canto'].startswith(c) for c in f['canto'].split(',')):
        continue
    if 'para' in f and str(it.get('para')) != f['para']:
        continue
    if 'has' in f and f['has'] not in it['base'] and f['has'] not in (it.get('top') or ''):
        continue
    idx.append(i)
    if not quiet:
        print(i, '%s:%s' % (it['canto'], it.get('para')), it['class'], '|', it['base'][:70], '=>', (it.get('top') or '')[:50])
print(','.join(map(str, idx)))
print(len(idx), 'entries')
