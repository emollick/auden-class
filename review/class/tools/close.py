#!/usr/bin/env python3
"""The class page held against the kept scan of Pearce (examiner's helper).

    python3 review/class/tools/close.py runs [--min 5]   runs of words the page's own prose shares with the scan
    python3 review/class/tools/close.py quotes           every quotation on the page: does it stand in the scan?
    python3 review/class/tools/close.py strings          the page's strings with their labels (the page's words only)

Only the page's OWN words are printed, never the scan's. Quotations (curly double quotes) and
italics are masked for the run test, as build/tools/runs-sweep.py does. The scan lacks pp. 129-130,
the first half of p. 131 and pp. 138-145, so a clean result says nothing about those pages.
"""
import json
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from pearce_pages import pages  # noqa: E402

page = json.loads(subprocess.run(
    ['node', '-e', "import('./content/class.mjs').then(m=>console.log(JSON.stringify(m.default)))"],
    capture_output=True, text=True, check=True).stdout)


def walk(x, path, out):
    if isinstance(x, str):
        out.append((path, x))
    elif isinstance(x, list):
        for i, y in enumerate(x):
            walk(y, f'{path}[{i}]', out)
    elif isinstance(x, dict):
        for k, y in x.items():
            if k in ('id', 'kind', 'figure', 'piece', 'plate', 'part', 'record', 'taught'):
                continue
            walk(y, f'{path}.{k}' if path else k, out)


strings = []
for k in ('lede', 'caveats'):
    walk(page[k], k, strings)
for sc in page['scenes']:
    walk({k: v for k, v in sc.items() if k != 'id'}, sc['id'], strings)


def words(t):
    t = t.lower().replace('’', "'").replace('‘', "'")
    t = re.sub(r"[^a-z0-9'\s]", ' ', t)
    return [w.strip("'") for w in t.split() if w.strip("'")]


scan = [(n, words(t)) for n, t in pages()]
N = int(sys.argv[sys.argv.index('--min') + 1]) if '--min' in sys.argv else 5
grams = {}
for n, w in scan:
    for i in range(len(w) - N + 1):
        grams.setdefault(' '.join(w[i:i + N]), n)

MASK = ' zzqq '


def masked(t):
    t = re.sub(r'“[^”]*”', MASK, t)
    return re.sub(r'\*[^*]+\*', MASK, t)


mode = sys.argv[1] if len(sys.argv) > 1 else 'runs'
if mode == 'strings':
    for path, s in strings:
        print(f'{path}\t{s}')
elif mode == 'runs':
    found = 0
    for path, s in strings:
        w = words(masked(s))
        i = 0
        while i <= len(w) - N:
            g = ' '.join(w[i:i + N])
            if g in grams:
                j = i + N
                while j < len(w) and ' '.join(w[j - N + 1:j + 1]) in grams:
                    j += 1
                print(f'{path}  p. {grams[g]}  run of {j - i}: {" ".join(w[i:j])}')
                found += 1
                i = j
            else:
                i += 1
    print(found, 'runs of', N, 'or more words')
elif mode == 'quotes':
    flat = [(n, ' ' + ' '.join(w) + ' ') for n, w in scan]
    for path, s in strings:
        for q in re.findall(r'“([^”]*)”', s):
            key = ' ' + ' '.join(words(q)) + ' '
            where = [n for n, t in flat if key in t]
            print(f'{path}\t{"p. " + ", ".join(where) if where else "not in the scan"}\t{q}')
