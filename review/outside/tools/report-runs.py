#!/usr/bin/env python3
# Before the reports of review/outside/ go into the repository: do any of them carry a long run of
# words from a book in copyright? Each report is held against the kept scans (Auden's three books of
# prose, Pearce's memoir, Mendelson's biography) and, if a folder is given, against the letter as
# the search extracts give it.
# usage: python3 review/outside/tools/report-runs.py [least run, default 8] [folder with fl_letter_<item>.txt]
# Prints the report, the line the run starts on, its length and the scan: never the words.
import re, sys, os, glob
R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
LEAST = int(sys.argv[1]) if len(sys.argv) > 1 else 8
S = sys.argv[2] if len(sys.argv) > 2 else None

def toks(s):
    s = s.replace('’', "'").replace('‘', "'")
    s = re.sub(r'(\w)[-¬]\s+(\w)', r'\1\2', s)
    s = s.lower().replace("'", '')
    return re.sub(r'[^a-z0-9]+', ' ', s).split()

scans = {}
for name in ('auden/fa.txt', 'auden/ef.txt', 'auden/dh.txt', 'auden/pearce.txt', 'F_work/mendelson2017.txt'):
    f = os.path.join(R, '.cache/research', name)
    if os.path.exists(f):
        scans[name] = toks(open(f, encoding='utf-8', errors='replace').read())
if S:
    for f in sorted(glob.glob(os.path.join(S, 'fl_letter_*.txt'))):
        scans['the letter, ' + os.path.basename(f)[10:-4]] = toks(open(f, encoding='utf-8', errors='replace').read())
grams = {n: set(tuple(L[i:i + LEAST]) for i in range(len(L) - LEAST + 1)) for n, L in scans.items()}
print(', '.join(f'{n}: {len(L)} words' for n, L in scans.items()))

total = 0
for f in sorted(glob.glob(os.path.join(R, 'review/outside/*.md'))):
    lines = open(f, encoding='utf-8').read().split('\n')
    W, at = [], []
    for ln, line in enumerate(lines, 1):
        for w in toks(line):
            W.append(w); at.append(ln)
    for n, G in grams.items():
        i = 0
        while i <= len(W) - LEAST:
            if tuple(W[i:i + LEAST]) in G:
                j = i + LEAST
                while j < len(W) and tuple(W[j - LEAST + 1:j + 1]) in G:
                    j += 1
                total += 1
                print(f'  {os.path.basename(f)} line {at[i]}: a run of {j - i} words shared with {n}')
                i = j
            else:
                i += 1
print(f'runs of {LEAST} or more: {total}')
