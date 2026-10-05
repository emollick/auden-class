#!/usr/bin/env python3
"""Cantos in Arabic figures on the Purgatorio page (last pass, item 5).

A scoped substitution over the raw text of the reading, so that the file's
own layout is kept: a canto with its lines ("XV, 67-72") becomes "15.67-72",
the form of the Inferno and Paradiso pages; a canto named after "canto",
"Canto(s)", "Purgatorio", "Inferno" or "Paradiso" becomes its number; the
drawing's facts (`cantos`, the seven keys) likewise. Other Roman figures
(volumes, parts, chapters, a publisher's initials, rhyme letters) stand.

    python3 dante-figures.py            # show what would change
    python3 dante-figures.py --write    # change the file (a copy is kept first)
"""
import json, re, shutil, sys, os

P = 'remake/works/dante-purgatorio/reading.json'
KEEP = 'remake/works/dante-purgatorio/lead/before-figures.json'
ROM = r'(?=[IVXL])(?:XC|XL|L?X{0,3})(?:IX|IV|V?I{0,3})'
VAL = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100}

def val(s):
    n = 0
    for i, ch in enumerate(s):
        v = VAL[ch]; nx = VAL[s[i + 1]] if i + 1 < len(s) else 0
        n += -v if v < nx else v
    return n

def each(s):
    return re.sub(r'\b' + ROM + r'\b', lambda m: str(val(m.group(0))), s)

raw = open(P, encoding='utf-8').read()
new = raw

# 0. the one caption that gives a line: the caption form of the Inferno page
old0 = '(<i>Inferno</i> I, 3)'
assert new.count(old0) == 1, new.count(old0)
new = new.replace(old0, '(<i>Inferno</i> 1, line 3)')

# 1. a canto with its lines
new = re.sub(r'\b(' + ROM + r'), (?=\d)', lambda m: f'{val(m.group(1))}.', new)

# 2. a canto, or a list or span of cantos, after its name
KEY = r'(?:[Cc]antos?|Purgatorio|Inferno|Paradiso)(?:\*|</i>)? '
new = re.sub(r'(' + KEY + r')(' + ROM + r'\b(?:, ' + ROM + r'\b)*(?:(?: and | to )' + ROM + r'\b)?)',
             lambda m: m.group(1) + each(m.group(2)), new)

# 3. the drawing's spans of cantos
new = re.sub(r'("cantos": ")(' + ROM + r') to (' + ROM + r')(")',
             lambda m: f'{m.group(1)}{val(m.group(2))} to {val(m.group(3))}{m.group(4)}', new)

# 4. the seven keys of the middle cantos
a = new.index('"linesInTheSevenMiddleCantos"'); b = new.index('}', a)
seg = re.sub(r'"(' + ROM + r')"(\s*:\s*\d)', lambda m: f'"{val(m.group(1))}"{m.group(2)}', new[a:b])
new = new[:a] + seg + new[b:]

# what changed, leaf by leaf
def leaves(o, path='', out=None):
    out = {} if out is None else out
    if isinstance(o, dict):
        for k, v in o.items(): leaves(v, f'{path}/{k}', out)
    elif isinstance(o, list):
        for i, v in enumerate(o): leaves(v, f'{path}/{i}', out)
    else: out[path] = o
    return out

A = leaves(json.loads(raw)); B = leaves(json.loads(new))
gone = [k for k in A if k not in B]; come = [k for k in B if k not in A]
print('keys gone:', gone); print('keys come:', come)
import difflib
n = 0
for k in A:
    if k in B and A[k] != B[k]:
        sa, sb = str(A[k]), str(B[k])
        sm = difflib.SequenceMatcher(None, sa, sb, autojunk=False)
        for tag, i1, i2, j1, j2 in sm.get_opcodes():
            if tag == 'equal': continue
            n += 1
            print(f'{k[:40]:40s} | {sa[max(0,i1-14):i1]}[{sa[i1:i2]}→{sb[j1:j2]}]{sa[i2:i2+12]}')
print(n, 'changes')
# what Roman figures are left
left = []
for k, v in B.items():
    if isinstance(v, str):
        for m in re.finditer(r'\b(?=[IVXLCDM]+\b)M{0,3}(?:CM|CD|D?C{0,3})(?:XC|XL|L?X{0,3})(?:IX|IV|V?I{0,3})\b', v):
            if m.group(0): left.append((k, v[max(0, m.start()-22):m.end()+12]))
print(len(left), 'Roman figures left:')
for k, w in left: print(f'  {k[:40]:40s} | {w}')

if '--write' in sys.argv:
    os.makedirs(os.path.dirname(KEEP), exist_ok=True)
    if not os.path.exists(KEEP): shutil.copyfile(P, KEEP)
    open(P, 'w', encoding='utf-8').write(new)
    print('written; the copy before is', KEEP)
