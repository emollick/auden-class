# Checks the edit lists in this folder against the readings as they are now. It writes nothing.
#
#   python3 review/remake/last-pass/measure/check_lists.py            the main lists
#   python3 review/remake/last-pass/measure/check_lists.py outside    the main lists, then outside/ on top of them
#
# For every piece: each "old" must occur exactly once in the raw reading.json; all the edits are
# applied to a copy in memory; the copy must still parse as JSON, keep its shape, and differ from
# the reading only in strings that are wording (no scan, ends, rows, at, kind, label, text or id).
import glob, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..'))
WORKS = os.path.join(ROOT, 'remake', 'works')


def walk(x, path=''):
    if isinstance(x, dict):
        for k, v in x.items():
            yield from walk(v, f'{path}.{k}' if path else k)
    elif isinstance(x, list):
        for i, v in enumerate(x):
            yield from walk(v, f'{path}[{i}]')
    else:
        yield path, x


def lists(folder):
    out = {}
    for f in sorted(glob.glob(os.path.join(folder, '*.json'))):
        out[os.path.basename(f)[:-5]] = json.load(open(f, encoding='utf-8'))
    return out


def main():
    edits = lists(HERE)
    if 'outside' in sys.argv[1:]:
        for piece, more in lists(os.path.join(HERE, 'outside')).items():
            edits[piece] = edits.get(piece, []) + more
    bad = 0
    total = 0
    for piece, items in edits.items():
        assert piece not in ('tempest', 'tristan'), piece
        raw = open(os.path.join(WORKS, piece, 'reading.json'), encoding='utf-8').read()
        faults = [f'"old" occurs {raw.count(e["old"])} times: {e["old"]!r}' for e in items if raw.count(e['old']) != 1]
        if not faults:
            out = raw
            for e in items:
                if out.count(e['old']) != 1:
                    faults.append(f'"old" no longer occurs once after earlier edits: {e["old"]!r}')
                    break
                out = out.replace(e['old'], e['new'])
        if not faults:
            try:
                before = dict(walk(json.loads(raw)))
                after = dict(walk(json.loads(out)))
            except ValueError as err:
                faults.append(f'the result does not parse as JSON: {err}')
        if not faults:
            if list(before) != list(after):
                faults.append('the shape of the reading changed')
            for k in before:
                if before[k] != after.get(k) and (not isinstance(before[k], str) or re.search(r'\.(scan|ends|tails|at|rows|kind|label|text|id)\b', k)):
                    faults.append(f'{k} is not wording')
        total += len(items)
        if faults:
            bad += 1
            print(f'{piece}: FAULT')
            for f in faults:
                print('   ', f)
        else:
            changed = sum(1 for k in before if before[k] != after[k])
            print(f'{piece}: {len(items)} edits, {changed} fields, ok')
    print(f'{total} edits in {len(edits)} pieces;', 'all ok' if not bad else f'{bad} pieces with faults')
    sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
