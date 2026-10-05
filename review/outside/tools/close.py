#!/usr/bin/env python3
# Runs of words that the final wording of the letter correction (final.md, section 3) shares with
# the letter as the search extracts give it (two scans) and with the kept scan of Pearce.
# usage: python3 review/outside/tools/close.py <folder with fl_letter_<item>.txt> [least run, default 5]
# The letter's text is not in the project: the critic of facts chained it from search extracts into
# two scratch files, and they stay outside the project and the repository.
# Prints lengths and places only, never the words.
import re, sys, os
R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
S = sys.argv[1]
LEAST = int(sys.argv[2]) if len(sys.argv) > 2 else 5

def toks(s):
    s = s.replace('’', "'").replace('‘', "'")
    s = re.sub(r'(\w)[-¬]\s+(\w)', r'\1\2', s)
    s = s.lower().replace("'", '')
    return re.sub(r'[^a-z0-9]+', ' ', s).split()

def runs(W, L, least):
    J = ' ' + ' '.join(L) + ' '
    out, i = [], 0
    while i <= len(W) - least:
        if (' ' + ' '.join(W[i:i + least]) + ' ') in J:
            j = i + least
            while j < len(W) and (' ' + ' '.join(W[i:j + 1]) + ' ') in J:
                j += 1
            out.append((i, j - i)); i = j
        else:
            i += 1
    return out

md = open(os.path.join(R, 'review/outside/final.md'), encoding='utf-8').read()
sec = md[md.index('## 3. Auden'):]
paras = []
for part in re.split(r'(?m)^### ', sec)[1:]:
    key = part.split(' ', 1)[0]
    for k, q in enumerate(re.findall(r'(?m)^> (.*)$', part)):
        paras.append((f'{key} quote {k + 1}', q))

sources = {}
for item in ('rememberingreinh0000nieb', 'rememberingreinh00rein'):
    f = os.path.join(S, f'fl_letter_{item}.txt')
    sources['the letter, ' + item] = toks(open(f, encoding='utf-8', errors='replace').read())
sources['Pearce, kept scan'] = toks(open(os.path.join(R, '.cache/research/auden/pearce.txt'), encoding='utf-8', errors='replace').read())
for name, L in sources.items():
    print(f'{name}: {len(L)} words')

found = 0
for label, text in paras:
    sents = re.split(r'(?<=[.!?)])\s+', text)
    for si, st in enumerate(sents):
        W = toks(st)
        for name, L in sources.items():
            for (i, n) in runs(W, L, LEAST):
                found += 1
                print(f'  [{label}] sentence {si + 1}, words {i + 1} to {i + n}: a run of {n} shared with {name}')
print(f'{len(paras)} quoted paragraphs compared; runs of {LEAST} or more: {found}')
