# The Word tab under one name (the site critic by word, labels, 5): "Word" on 36 passages and
# "Words" on 30; the front page and the approved page say "Word". This sets the label of every
# tab of the kind `word` that is named "Words" to "Word", in the raw text of the reading, and
# keeps a copy of each reading it changes at remake/works/<piece>/lead/before-word-label.json.
#
#   python3 review/remake/last-pass/tools/word-label.py            say what would be done
#   python3 review/remake/last-pass/tools/word-label.py --write    do it
#
# Nothing else may change: the parsed reading before and after must differ only in those labels.
import glob, json, os, shutil, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..', '..'))
WRITE = '--write' in sys.argv[1:]
OLD, NEW = '"label": "Words"', '"label": "Word"'
total = 0
for path in sorted(glob.glob(os.path.join(ROOT, 'remake', 'works', '*', 'reading.json'))):
    piece = os.path.basename(os.path.dirname(path))
    raw = open(path, encoding='utf-8').read()
    n = raw.count(OLD)
    if not n:
        continue
    before = json.loads(raw)
    out = raw.replace(OLD, NEW)
    after = json.loads(out)
    changed = 0
    for pa, pb in zip(before['plates'], after['plates']):
        for la, lb in zip(pa['lenses'], pb['lenses']):
            if la != lb:
                assert la.get('kind') == 'word' and la.get('label') == 'Words' and lb.get('label') == 'Word', (piece, pa['id'])
                assert {k: v for k, v in la.items() if k != 'label'} == {k: v for k, v in lb.items() if k != 'label'}, (piece, pa['id'])
                changed += 1
    assert changed == n, (piece, changed, n)
    assert {k: v for k, v in before.items() if k != 'plates'} == {k: v for k, v in after.items() if k != 'plates'}, piece
    assert [{k: v for k, v in p.items() if k != 'lenses'} for p in before['plates']] == [{k: v for k, v in p.items() if k != 'lenses'} for p in after['plates']], piece
    total += n
    print(f'{piece}: {n}' + ('' if WRITE else ' (not written)'))
    if WRITE:
        kept = os.path.join(os.path.dirname(path), 'lead', 'before-word-label.json')
        os.makedirs(os.path.dirname(kept), exist_ok=True)
        assert not os.path.exists(kept), kept
        shutil.copyfile(path, kept)
        open(path, 'w', encoding='utf-8').write(out)
print(f'{total} tabs')
