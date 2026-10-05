#!/usr/bin/env python3
"""Apply a list of wording changes to the content files.

usage: apply-edits.py edits.json [--dry]

edits.json is a list of {"file": "content/units/04.mjs", "old": "...", "new": "..."}.
"old" and "new" are the words as the reader sees them. The content files write
the apostrophe as the curly one, so a straight apostrophe in "old" is tried both
ways and a straight one in "new" is made curly. A change is made only if "old"
is found exactly once. Whatever cannot be placed is listed and left alone.
"""
import json, sys, os

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
dry = '--dry' in sys.argv
edits = json.load(open(sys.argv[1], encoding='utf8'))
texts, done, failed = {}, 0, []
for i, e in enumerate(edits):
    if e.get('skip'):
        continue
    f = os.path.join(ROOT, e['file'])
    if f not in texts:
        texts[f] = open(f, encoding='utf8').read()
    s = texts[f]
    old, new = e['old'], e['new']
    new = new.replace("'", "’")
    forms = [(old, new), (old.replace("'", "’"), new)]
    for o, n in forms:
        c = s.count(o)
        if c == 1:
            texts[f] = s.replace(o, n)
            done += 1
            break
    else:
        counts = [s.count(o) for o, _ in forms]
        failed.append((i, e.get('id', ''), e['file'], counts, old[:70]))
if not dry:
    for f, s in texts.items():
        open(f, 'w', encoding='utf8').write(s)
print(f'{done} changes {"would be " if dry else ""}made, {len(failed)} not placed')
for i, id_, f, counts, old in failed:
    print(f'  #{i} {id_} {f}: found {counts} times: {old!r}')
