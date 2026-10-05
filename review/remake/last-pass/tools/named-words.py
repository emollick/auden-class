# Words named in a key's label or in a Figure tab's line take the mark of a named word (*word*), which
# the kit sets upright in the italic line since its eighth mending (3c). Before that a named word stood
# in the same italic as the words about it, or in quotation marks.
#
#   python3 review/remake/last-pass/tools/named-words.py            say what would change
#   python3 review/remake/last-pass/tools/named-words.py --write    do it
#
# Each change is made in the raw text (every `"label": "old"` or `"plain": "old"` of the file), and it
# is proved before anything is written that the reading still parses and that the only leaves changed
# are the labels or the line named here, in the lens named here. A copy of the reading as it was is kept
# at remake/works/<piece>/lead/before-named-words.json.
import json, os, shutil, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..', '..'))
WRITE = '--write' in sys.argv[1:]
# piece: [(plate id, tab label, key, old, new)]
CHANGES = {
    'baudelaire': [
        ('evening', 'Likeness', 'label', 'now he', 'now *he*'),
        ('evening', 'Likeness', 'label', 'his me', 'his *me*'),
        ('evening', 'Likeness', 'plain', 'a comparison that says one thing is like another; here the word is “as”',
         'a comparison that says one thing is like another; here the word is *as*'),
    ],
    'antigone': [
        ('answer', 'Knowing', 'plain', 'one root repeated in different forms; here “knew” and “know” in one line, and the verb returns twice below',
         'one root repeated in different forms; here *knew* and *know* in one line, and the verb returns twice below'),
    ],
    'carmen': [
        ('habanera', 'Figure', 'plain', 'a doubling back: the words that end one clause begin the next; here after a second “si”',
         'a doubling back: the words that end one clause begin the next; here after a second *si*'),
    ],
    'hamlet': [
        ('seems', 'Sentence', 'label', 'nor, four times', '*nor*, four times'),
        ('to-be', 'Chain', 'label', 'die', '*die*'),
        ('to-be', 'Chain', 'label', 'sleep', '*sleep*'),
        ('to-be', 'Chain', 'label', 'sleep again', '*sleep* again'),
        ('readiness', 'Crossing', 'label', 'now', '*now*'),
        ('readiness', 'Crossing', 'label', 'not to come', '*not to come*'),
        ('readiness', 'Crossing', 'label', 'it, never named', '*it*, never named'),
    ],
    'tristan': [
        ('end', 'Sentence', 'label', 'a phrase that begins with in', 'a phrase that begins with *in*'),
        ('end', 'Sentence', 'label', 'shall I, and myself', '*shall I*, and *myself*'),
    ],
}


def leaves(v, p=()):
    if isinstance(v, dict):
        for k, x in v.items():
            yield from leaves(x, p + (k,))
    elif isinstance(v, list):
        for i, x in enumerate(v):
            yield from leaves(x, p + (i,))
    else:
        yield p, v


for piece, changes in CHANGES.items():
    path = os.path.join(ROOT, 'remake', 'works', piece, 'reading.json')
    raw = open(path, encoding='utf-8').read()
    out = raw
    for plate, tab, key, old, new in changes:
        a = '"%s": %s' % (key, json.dumps(old, ensure_ascii=False))
        b = '"%s": %s' % (key, json.dumps(new, ensure_ascii=False))
        assert out.count(a) >= 1, '%s: %s is not there' % (piece, a)
        out = out.replace(a, b)
    before, after = json.loads(raw), json.loads(out)
    la, lb = dict(leaves(before)), dict(leaves(after))
    assert la.keys() == lb.keys(), piece
    changed = [p for p in la if la[p] != lb[p]]
    want = {(plate, tab, key, old): new for plate, tab, key, old, new in changes}
    seen = set()
    for p in changed:
        assert p[0] == 'plates' and p[2] == 'lenses' and p[-1] in ('label', 'plain'), (piece, p)
        pl, lens = before['plates'][p[1]], before['plates'][p[1]]['lenses'][p[3]]
        k = (pl['id'], lens.get('label'), p[-1], la[p])
        assert want.get(k) == lb[p], '%s: a change reaches %s' % (piece, p)
        seen.add(k)
    assert seen == set(want), (piece, sorted(set(want) - seen))
    print('%s: %d leaves change (%s)' % (piece, len(changed), '; '.join('%s/%s %s' % (k[0], k[1], k[2]) for k in sorted(seen))) + ('' if WRITE else ' (not written)'))
    if WRITE:
        kept = os.path.join(os.path.dirname(path), 'lead', 'before-named-words.json')
        assert not os.path.exists(kept), kept
        shutil.copyfile(path, kept)
        open(path, 'w', encoding='utf-8').write(out)
