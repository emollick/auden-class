# One wording for each figure of speech (the last pass, 3 October): applies the lists of exact
# edits in review/remake/last-pass/figures/<piece>.json to the readings. The lists were proposed
# by a reader and weighed by the lead; this tool only proves and writes.
#
#   python3 review/remake/last-pass/tools/figures-apply.py                  say what would be done
#   python3 review/remake/last-pass/tools/figures-apply.py --write          do it
#   python3 review/remake/last-pass/tools/figures-apply.py --only a,b       those pieces only
#   python3 review/remake/last-pass/tools/figures-apply.py --lists <dir>    lists from another folder
#
# Proved before anything is written, for every list: each `old` occurs exactly once in the raw
# text; the text still parses; and the only leaves of the reading that changed are the `name` or
# the `plain` of a lens whose kind is `figure`. The Tempest is never touched: the owner approved
# that page, and its wording leads.
# A copy of each reading changed is kept at remake/works/<piece>/lead/before-figure-wordings.json, and
# the list applied beside it as edits-figure-wordings.json.
import glob, json, os, shutil, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..', '..'))
args = sys.argv[1:]
WRITE = '--write' in args
ONLY = set(args[args.index('--only') + 1].split(',')) if '--only' in args else None
LISTS = args[args.index('--lists') + 1] if '--lists' in args else os.path.join(ROOT, 'review', 'remake', 'last-pass', 'figures')
SKIP = {'tempest'}


def leaves(v, p=()):
    if isinstance(v, dict):
        for k, x in v.items():
            yield from leaves(x, p + (k,))
    elif isinstance(v, list):
        for i, x in enumerate(v):
            yield from leaves(x, p + (i,))
    else:
        yield p, v


total = pieces = 0
for lst in sorted(glob.glob(os.path.join(LISTS, '*.json'))):
    piece = os.path.basename(lst)[:-5]
    path = os.path.join(ROOT, 'remake', 'works', piece, 'reading.json')
    if not os.path.exists(path):
        continue  # some other JSON file in the folder
    if ONLY and piece not in ONLY:
        continue
    assert piece not in SKIP, 'a list for %s: that page is not to be touched' % piece
    edits = json.load(open(lst, encoding='utf-8'))
    raw = open(path, encoding='utf-8').read()
    out = raw
    for i, e in enumerate(edits):
        assert set(e) == {'old', 'new'}, (piece, i, sorted(e))
        n = out.count(e['old'])
        assert n == 1, '%s edit %d: the old string occurs %d times' % (piece, i, n)
        out = out.replace(e['old'], e['new'])
    before, after = json.loads(raw), json.loads(out)
    la, lb = dict(leaves(before)), dict(leaves(after))
    assert la.keys() == lb.keys(), piece
    changed = sorted((p for p in la if la[p] != lb[p]), key=str)
    for p in changed:
        ok = len(p) == 5 and p[0] == 'plates' and p[2] == 'lenses' and p[4] in ('name', 'plain')
        ok = ok and before['plates'][p[1]]['lenses'][p[3]].get('kind') == 'figure'
        assert ok, '%s: an edit reaches %s' % (piece, '.'.join(str(x) for x in p))
    assert len(changed) <= len(edits), piece
    if not changed:
        print('%s: nothing changes' % piece)
        continue
    total += len(changed)
    pieces += 1
    print('%s: %d edits, %d lines change' % (piece, len(edits), len(changed)) + ('' if WRITE else ' (not written)'))
    for p in changed:
        plate = before['plates'][p[1]]
        lens = plate['lenses'][p[3]]
        print('   %s / %s (%s), %s' % (plate.get('id'), lens.get('label'), la[p[:4] + ('name',)], p[4]))
        print('      - ' + la[p])
        print('      + ' + lb[p])
    if WRITE:
        lead = os.path.join(os.path.dirname(path), 'lead')
        os.makedirs(lead, exist_ok=True)
        kept = os.path.join(lead, 'before-figure-wordings.json')
        assert not os.path.exists(kept), kept
        shutil.copyfile(path, kept)
        shutil.copyfile(lst, os.path.join(lead, 'edits-figure-wordings.json'))
        open(path, 'w', encoding='utf-8').write(out)
print('%d lines in %d pieces' % (total, pieces) + ('' if WRITE else ' (nothing written)'))
