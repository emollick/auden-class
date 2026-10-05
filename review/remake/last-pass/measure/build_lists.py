# Makes the edit lists of this folder from edits_data.py (next to this file), and prints them
# piece by piece: the passage, the tab and the field, the rule, the wording now, the wording
# proposed, one line of reason, and the count of words before and after.
#
#   python3 review/remake/last-pass/measure/build_lists.py              print; write nothing
#   python3 review/remake/last-pass/measure/build_lists.py --write      also write <piece>.json into this folder
#   add --outside for the lists in outside/
#
# For each edit: "old" must occur exactly once in the raw reading.json. All the edits of a piece are
# applied to a copy in memory, in order and in reverse order, and both must give the same text.
# The copy must still parse as JSON, keep its shape, and differ only in strings that are wording.
# Nothing under remake/ is ever written.
import importlib.util, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..'))
NOT_WORDING = r'\.(scan|ends|tails|at|rows|kind|label|text|id)\b'
FIELD_ORDER = {'meterName': 0, 'caption': 1, 'points': 2, 'stands': 3}


def load(name):
    spec = importlib.util.spec_from_file_location('edits_data', os.path.join(HERE, 'edits_data.py'))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return getattr(mod, name)


def walk(x, path=''):
    if isinstance(x, dict):
        for k, v in x.items():
            yield from walk(v, f'{path}.{k}' if path else k)
    elif isinstance(x, list):
        for i, v in enumerate(x):
            yield from walk(v, f'{path}[{i}]')
    else:
        yield path, x


def words(s):
    return len(re.sub(r'<[^>]+>', '', s).strip().split())


def apply(raw, edits, piece):
    for i, (old, new) in enumerate(edits):
        n = raw.count(old)
        assert n == 1, f'{piece} edit {i}: old occurs {n} times in the raw file: {old!r}'
    out = raw
    for i, (old, new) in enumerate(edits):
        assert out.count(old) == 1, f'{piece} edit {i}: old does not occur once after earlier edits: {old!r}'
        out = out.replace(old, new)
    rev = raw
    for i, (old, new) in reversed(list(enumerate(edits))):
        assert rev.count(old) == 1, f'{piece} edit {i}: not independent of order'
        rev = rev.replace(old, new)
    assert rev == out, f'{piece}: the result depends on the order of the edits'
    json.loads(out)
    return out


def place(d, k):
    # where a changed field stands, in a reader's words, and a key to sort by
    m = re.match(r'plates\[(\d+)\]\.lenses\[(\d+)\]\.(.*)', k)
    if not m:
        n = re.search(r'\[(\d+)\]', k)
        return (1, 0, 0, 0, int(n.group(1)) if n else 0), k
    pi, li, rest = int(m.group(1)), int(m.group(2)), m.group(3)
    p = d['plates'][pi]
    lens = p['lenses'][li]
    f = rest.split('.')[0].split('[')[0]
    idx = int(re.search(r'\[(\d+)\]', rest).group(1)) if f == 'points' else 0
    name = f'remark {idx + 1}' if f == 'points' else (f if f in FIELD_ORDER else rest)
    kind = '' if lens.get('kind') == 'beat' else f' ({lens.get("kind")})'
    return (0, pi, li, FIELD_ORDER.get(f, 9), idx), f"`{p['id']}`, {lens.get('label')} tab{kind}, {name}"


def main(name, outdir, write):
    lists = load(name)
    total = 0
    fields = 0
    for piece in sorted(lists):
        items = lists[piece]
        assert piece not in ('tempest', 'tristan'), piece
        raw = open(os.path.join(ROOT, 'remake', 'works', piece, 'reading.json'), encoding='utf-8').read()
        edits = [(o, n) for (o, n, *_) in items]
        out = apply(raw, edits, piece)
        d = json.loads(raw)
        before = dict(walk(d))
        after = dict(walk(json.loads(out)))
        assert list(before) == list(after), f'{piece}: the shape of the reading changed'
        rows = []
        for old, new, rule, where, why in items:
            one = dict(walk(json.loads(raw.replace(old, new))))
            changed = [k for k in before if before[k] != one[k]]
            assert len(changed) == 1, f'{piece}: an edit must change one field: {old!r}'
            k = changed[0]
            assert isinstance(before[k], str) and not re.search(NOT_WORDING, k), f'{piece}: {k} is not wording'
            key, lab = place(d, k)
            rows.append((key, lab, k, old, new, rule, why))
        rows.sort(key=lambda r: r[0])
        nfields = len({r[2] for r in rows})
        total += len(edits)
        fields += nfields
        print(f'### {piece} ({len(edits)} edits in {nfields} fields)\n')
        for key, lab, k, old, new, rule, why in rows:
            whole = k.endswith('meterName')
            count = f' Words: {words(before[k])} to {words(after[k])}.' if not whole else ''
            print(f'- {lab} [{rule}]')
            print(f'  - now: "{before[k] if whole else old}"')
            print(f'  - proposed: "{after[k] if whole else new}"')
            print(f'  - why: {why}.{count}')
        print()
        if write:
            os.makedirs(outdir, exist_ok=True)
            with open(os.path.join(outdir, f'{piece}.json'), 'w', encoding='utf-8') as fh:
                json.dump([{'old': o, 'new': n} for o, n in edits], fh, ensure_ascii=False, indent=2)
                fh.write('\n')
    print(f'TOTAL {total} edits in {fields} fields of {len(lists)} pieces' + ('; lists written' if write else '; nothing written'))


if __name__ == '__main__':
    outside = '--outside' in sys.argv
    main('OUTSIDE' if outside else 'EDITS', os.path.join(HERE, 'outside') if outside else HERE, '--write' in sys.argv)
