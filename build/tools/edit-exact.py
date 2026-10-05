#!/usr/bin/env python3
# Exact edits of a file's raw text. Nothing is written unless every edit finds its place exactly once.
# usage: python3 build/tools/edit-exact.py <file> <edits.json> [backup path]
# edits.json: a list of {"old": "...", "new": "..."}  (old must occur exactly once), or
#             {"before": "anchor on one line", "line": "a new line to put before that line, with its indent"}, or
#             {"after": "anchor on one line", "line": "a new line to put after that line, with its indent"}.
# Prints, for each edit, the number of the line it changed and how many characters went and came: never the text.
import json, sys, os, shutil

path, edits_path = sys.argv[1], sys.argv[2]
backup = sys.argv[3] if len(sys.argv) > 3 else None
text = open(path, encoding='utf-8').read()
edits = json.load(open(edits_path, encoding='utf-8'))
out = text
report = []
for i, e in enumerate(edits):
    if 'old' in e:
        n = out.count(e['old'])
        if n != 1:
            sys.exit(f'edit {i}: the old string occurs {n} times; nothing written')
        at = out.index(e['old'])
        line = out.count('\n', 0, at) + 1
        out = out.replace(e['old'], e['new'])
        report.append(f'edit {i}: line {line}, {len(e["old"])} characters out, {len(e["new"])} in')
    else:
        key = 'before' if 'before' in e else 'after'
        anchor = e[key]
        n = out.count(anchor)
        if n != 1:
            sys.exit(f'edit {i}: the anchor occurs {n} times; nothing written')
        at = out.index(anchor)
        start = out.rfind('\n', 0, at) + 1
        end = out.find('\n', at)
        if end < 0:
            end = len(out)
        indent = out[start:at][:len(out[start:at]) - len(out[start:at].lstrip())]
        line = out.count('\n', 0, at) + 1
        if key == 'before':
            out = out[:start] + indent + e['line'] + '\n' + out[start:]
        else:
            out = out[:end] + '\n' + indent + e['line'] + out[end:]
        report.append(f'edit {i}: a line put {key} line {line}, {len(e["line"])} characters')
if path.endswith('.json'):
    json.loads(out)  # still JSON
if backup and not os.path.exists(backup):
    shutil.copyfile(path, backup)
    report.append(f'kept a copy at {backup}')
open(path, 'w', encoding='utf-8').write(out)
print('\n'.join(report))
