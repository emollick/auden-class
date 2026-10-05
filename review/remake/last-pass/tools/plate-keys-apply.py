# Keys set on plates of readings, from a list, each proved.
#
#   python3 review/remake/last-pass/tools/plate-keys-apply.py <edits.json> [--write] [--tag name] [--skip piece/plate/key ...]
#
# The list holds { "piece", "plate", "key", "value" } (and "was" where the key is there already, as
# with "rows"). A new key is written as one line after the plate's `"id"` line, in the raw text; a key
# that is there has its old value, written as the file writes it, replaced. The file before is kept
# in the piece's lead/before-<tag>.json and the piece's edits in lead/edits-<tag>.json. Proved on the
# parsed file: nothing differs but the keys named, and each holds the value given.
import json, sys, os, re, collections

args = sys.argv[1:]
write = '--write' in args
tag = args[args.index('--tag') + 1] if '--tag' in args else 'plate-keys'
skip = set()
if '--skip' in args:
    i = args.index('--skip') + 1
    while i < len(args) and not args[i].startswith('--'): skip.add(args[i]); i += 1
edits = [e for e in json.load(open(args[0], encoding='utf8')) if '%s/%s/%s' % (e['piece'], e['plate'], e['key']) not in skip]
by = collections.OrderedDict()
for e in edits: by.setdefault(e['piece'], []).append(e)
for piece, es in by.items():
    f = 'remake/works/%s/reading.json' % piece
    raw = open(f, encoding='utf8').read()
    before = json.loads(raw)
    new = raw
    for e in es:
        m = re.findall(r'^([ \t]*)"id": "%s",[ \t]*$' % re.escape(e['plate']), new, flags=re.M)
        assert len(m) == 1, '%s: the id line of plate %s stands %d times' % (piece, e['plate'], len(m))
        ind = m[0]
        n = [i for i, p in enumerate(before['plates']) if p['id'] == e['plate']]
        assert len(n) == 1, piece + ': plate ' + e['plate']
        plate = before['plates'][n[0]]
        if 'was' in e:
            assert plate.get(e['key']) == e['was'], '%s %s: "%s" is not as the edit says' % (piece, e['plate'], e['key'])
            # only the last entry of a list of rows is known to change this way
            assert isinstance(e['was'], list) and e['was'][:-1] == e['value'][:-1]
            old, neu = json.dumps(e['was'][-1], ensure_ascii=False), json.dumps(e['value'][-1], ensure_ascii=False)
            assert new.count(old) == 1, '%s: %s stands %d times' % (piece, old, new.count(old))
            new = new.replace(old, neu)
        else:
            assert e['key'] not in plate, '%s %s has "%s" already' % (piece, e['plate'], e['key'])
            line = '%s"%s": %s,' % (ind, e['key'], json.dumps(e['value'], ensure_ascii=False))
            new = re.sub(r'^([ \t]*"id": "%s",[ \t]*)$' % re.escape(e['plate']), lambda mm: mm.group(1) + '\n' + line, new, count=1, flags=re.M)
    after = json.loads(new)
    want = json.loads(json.dumps(before))
    for e in es:
        k = [i for i, p in enumerate(want['plates']) if p['id'] == e['plate']][0]
        want['plates'][k][e['key']] = e['value']
    assert after == want, piece + ': the file after is not the file before with the keys set'
    print('%s: %s' % (piece, ', '.join('%s.%s' % (e['plate'], e['key']) for e in es)))
    if not write: continue
    lead = 'remake/works/%s/lead' % piece
    os.makedirs(lead, exist_ok=True)
    keep = '%s/before-%s.json' % (lead, tag)
    assert not os.path.exists(keep), keep + ' is there already'
    open(keep, 'w', encoding='utf8').write(raw)
    json.dump(es, open('%s/edits-%s.json' % (lead, tag), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
    open(f, 'w', encoding='utf8').write(new)
print('written' if write else 'tried; nothing written')
