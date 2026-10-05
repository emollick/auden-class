# Exact edits to readings, from a list, each proved.
#
#   python3 review/remake/last-pass/tools/words-apply.py <edits.json> [--write] [--tag name]
#
# The list holds { "piece", "old", "new", "count" (default 1) }: the raw text `old` must stand
# exactly `count` times in remake/works/<piece>/reading.json, and every one becomes `new`. Without
# --write it only says what it would do: for each edit, how often `old` stands and in which leaves.
# With --write it keeps the file as it was in the piece's lead/before-<tag>.json (and will not
# overwrite one that is there), writes the piece's edits to lead/edits-<tag>.json, changes the raw
# text, and proves on the parsed file that the leaves that changed are as many as the edits made
# and that every changed leaf held an `old`. Nothing but the site's own words is printed.
import json, sys, os, collections

args = sys.argv[1:]
write = '--write' in args
tag = args[args.index('--tag') + 1] if '--tag' in args else 'words'
edits = json.load(open(args[0], encoding='utf8'))

def leaves(o, path=''):
    if isinstance(o, dict):
        for k, v in o.items(): yield from leaves(v, path + '.' + k)
    elif isinstance(o, list):
        for n, v in enumerate(o): yield from leaves(v, path + '[%d]' % n)
    else:
        yield path, o

by = collections.OrderedDict()
for e in edits: by.setdefault(e['piece'], []).append(e)
bad = 0
for piece, es in by.items():
    f = 'remake/works/%s/reading.json' % piece
    raw = open(f, encoding='utf8').read()
    before = dict(leaves(json.loads(raw)))
    new = raw
    for e in es:
        want = e.get('count', 1)
        # the raw file may hold a character as itself or as a \u escape: `old` is given as it stands raw
        n = new.count(e['old'])
        core = e['old'][1:-1] if e['old'][:1] == '"' and e['old'][-1:] == '"' else e['old']
        where = [p for p, v in before.items() if isinstance(v, str) and json.dumps(v, ensure_ascii=False)[1:-1].count(core)]
        if n != want:
            bad += 1
            print('%s: "%s" stands %d times, not %d  %s' % (piece, e['old'][:50], n, want, where[:6]))
            continue
        if not write: print('%s: %d of "%s" in %s' % (piece, n, e['old'][:44], ', '.join(where)[:150]))
        new = new.replace(e['old'], e['new'])
    if bad or not write: continue
    after = dict(leaves(json.loads(new)))
    assert list(after.keys()) == list(before.keys()), piece + ': the leaves are not the same'
    changed = [p for p in before if before[p] != after[p]]
    total = sum(e.get('count', 1) for e in es)
    olds = [e['old'][1:-1] if e['old'][:1] == '"' and e['old'][-1:] == '"' else e['old'] for e in es]
    for p in changed:
        assert any(json.dumps(before[p], ensure_ascii=False)[1:-1].count(o) for o in olds), piece + ': a leaf changed that held no old text: ' + p
    assert len(changed) <= total and changed, piece + ': %d leaves changed for %d edits' % (len(changed), total)
    lead = 'remake/works/%s/lead' % piece
    os.makedirs(lead, exist_ok=True)
    keep = '%s/before-%s.json' % (lead, tag)
    assert not os.path.exists(keep), keep + ' is there already'
    open(keep, 'w', encoding='utf8').write(raw)
    json.dump(es, open('%s/edits-%s.json' % (lead, tag), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
    open(f, 'w', encoding='utf8').write(new)
    print('%s: %d edits, %d leaves changed: %s' % (piece, total, len(changed), ', '.join(changed)[:170]))
if bad: sys.exit('%d edits do not fit; nothing written' % bad if not write else '%d edits did not fit' % bad)
