"""Leave-one-out test of the flagging machinery on the verified cantos.

For every substitution in patches.json that belongs to a verified canto,
build the canto without it and ask: would the error have been flagged (by a
disagreement of the scans, a word in no word list, or a note of the build)?
The errors that would NOT have been flagged are the kind that only reading a
whole canto against the page finds; their number per canto estimates what is
left in the cantos that were not read whole.

    python3 build/texts/temple/check_recall.py > .cache/temple/recall_all.out
"""
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import extract as X      # noqa: E402
import collate as C      # noqa: E402

patches = X.load_json(X.PATCHES, [])
verified = {k for k, v in X.load_json(X.VERIFIED, {}).items() if v}
prepatch = X.load_json(X.CACHE + '/prepatch.json', {})


def notes_of(cid, plist):
    paras = list(prepatch[cid])
    probs = []
    X.apply_patches(cid, paras, plist, probs)
    resets = {pt['para']: pt['open'] for pt in plist if pt.get('canto') == cid and pt.get('op') == 'state'}
    notes = []
    paras = X.requote(paras, notes, resets)
    X.check_brackets(paras, notes)
    X.lint(paras, notes)
    return paras, notes, probs


out = []
for cid in sorted(verified):
    base_paras, base_notes, _ = notes_of(cid, patches)
    mine = [pt for pt in patches if pt.get('canto') == cid and 'op' not in pt]
    for pt in mine:
        rest = [q for q in patches if q is not pt]
        paras, notes, probs = notes_of(cid, rest)
        para = pt['para']
        text = paras[para]
        frm = pt['from']
        pos = text.find(frm)
        if pos < 0:
            hits = X._find_loose(text, frm)
            pos = hits[0][0] if hits else -1
        lo, hi = (pos, pos + len(frm)) if pos >= 0 else (0, len(text))
        res, cov, unk = C.collate_canto(cid, paras, X.BASE[cid[:3]], cid[:3])
        by = []
        for loc in res:
            if loc['class'] != 'ok' and loc['para'] == para and loc.get('inner') \
                    and loc['inner'][0] <= hi and lo <= loc['inner'][1]:
                by.append(loc['class'])
        for u in unk:
            if u['para'] == para and u['support'] < 2 and u['span'][0] <= hi and lo <= u['span'][1]:
                by.append('unknown-word')
        new_notes = [n for n in notes if n not in base_notes]
        if new_notes:
            by.append('note')
        rec = {'canto': cid, 'para': para, 'from': frm, 'to': pt['to'], 'why': pt.get('why', '').split(':')[0],
               'located': pos >= 0, 'by': sorted(set(by)), 'other_patches_failed': len(probs)}
        out.append(rec)
        print(json.dumps(rec, ensure_ascii=False), flush=True)

n = len(out)
caught = sum(1 for r in out if r['by'])
sys.stderr.write('%d patches in %d verified cantos: %d would have been flagged, %d not\n' % (
    n, len(verified), caught, n - caught))
