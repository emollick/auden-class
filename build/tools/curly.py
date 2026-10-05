#!/usr/bin/env python3
"""Make the apostrophes in the site's own prose typographic.

usage: curly.py [--dry]

The content files keep prose in single-quoted strings, where an apostrophe has
to be written with a backslash before it. Every such apostrophe becomes the
curly one, which needs no backslash. In the few strings written between
backticks, an apostrophe between two letters is changed in the same way.
Quotation marks that are part of the program are left alone.
"""
import glob, os, re, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
dry = '--dry' in sys.argv
files = sorted(glob.glob(os.path.join(ROOT, 'content', '*.mjs')) + glob.glob(os.path.join(ROOT, 'content', 'units', '*.mjs')) + glob.glob(os.path.join(ROOT, 'content', 'units', 'parts', '*.mjs')))
total = 0
for f in files:
    s = open(f, encoding='utf8').read()
    out, n1 = re.subn(r"\\'", '’', s)
    lines, n2 = [], 0
    for line in out.split('\n'):
        if '`' in line:
            line, k = re.subn(r"(?<=[A-Za-z])'(?=[a-z])", '’', line)
            n2 += k
        lines.append(line)
    out = '\n'.join(lines)
    if n1 + n2:
        total += n1 + n2
        print(f'{os.path.relpath(f, ROOT)}: {n1 + n2}')
        if not dry:
            open(f, 'w', encoding='utf8').write(out)
print(f'{total} apostrophes {"would be " if dry else ""}changed')
