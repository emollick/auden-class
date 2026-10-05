#!/usr/bin/env python3
"""Runs of words that the class page shares with a kept scan.

    node review/class/tools/class-strings.mjs > strings.jsonl
    python3 review/class/tools/class-runs.py strings.jsonl <scan> [<scan> ...] [--min 5] [--quotes]

Prints the page's own words only (never the scan's): path, length of the run, the run.
Words inside curly double quotes and in *italics* are left out of the test, unless --quotes is
given, which tests ONLY the quotations (each must stand whole in a scan to be EXACT).
"""
import sys, re, json, os

args = sys.argv[1:]
MIN = 5
if '--min' in args:
    i = args.index('--min'); MIN = int(args[i + 1]); del args[i:i + 2]
QUOTES = '--quotes' in args
if QUOTES: args.remove('--quotes')
strings, scans = args[0], args[1:]

def words_of(t):
    t = t.lower().replace('’', "'").replace('‘', "'")
    t = re.sub(r'-\s*\n\s*', '', t)            # a word broken at the end of a line
    return re.sub(r"[^a-z\s]", ' ', t).split()

whole = {}
for s in scans:
    w = words_of(open(s, encoding='utf8', errors='ignore').read())
    whole[os.path.basename(s)] = ' ' + ' '.join(w) + ' '

rows = [json.loads(l) for l in open(strings, encoding='utf8') if l.strip()]
for r in rows:
    t = r['text']
    if QUOTES:
        for q in re.findall(r'“([^”]*)”', t):
            w = words_of(q)
            if len(w) < 3: continue
            hit = [n for n, txt in whole.items() if ' ' + ' '.join(w) + ' ' in txt]
            print(('EXACT in ' + ','.join(hit)) if hit else 'not in these scans', '|', r['path'], '|', q)
        continue
    t = re.sub(r'“[^”]*”', ' zzqq ', t)
    t = re.sub(r'\*[^*]+\*', ' zzqq ', t)
    w = words_of(t)
    for name, txt in whole.items():
        i = 0
        while i <= len(w) - MIN:
            n = 0
            while i + n < len(w) and ' ' + ' '.join(w[i:i + n + 1]) + ' ' in txt:
                n += 1
            if n >= MIN:
                print(f'{name} | {r["path"]} | run of {n}: {" ".join(w[i:i + n])}')
                i += n
            else:
                i += 1
