# The lead's application of the measure wording (3 October). It puts together, for each piece,
# the proposer's list, the list in outside/, and the lead's own amendments and additions, writes
# the whole as remake/works/<piece>/lead/edits-measure.json, and applies it with
# build/tools/edit-exact.py, which keeps a copy at lead/before-measure.json.
#
#   python3 review/remake/last-pass/measure/lead-apply.py            say what would be done
#   python3 review/remake/last-pass/measure/lead-apply.py --write    do it
#
# The lead's amendments (why: review/remake/last-pass/RECORD.md, "The measure of a line"):
#   - dante-purgatorio: "as a rule" before the fourth or the sixth, as on the Paradiso page;
#   - the three Dante beat tabs are named Measure and the Don Giovanni one Count;
#   - dante-purgatorio `garden` and rimbaud `stanza`: the count is written with "." where it was
#     written with "x", which changes the words of the key and no mark;
#   - half-line with a hyphen (henry-iv-2, peer-gynt); traviata's fact on the line of eight;
#     horace's caveat, "foot" for a "measure" that meant a foot.
import json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..'))
WORKS = os.path.join(ROOT, 'remake', 'works')
WRITE = '--write' in sys.argv[1:]


def load(path):
    return json.load(open(path, encoding='utf-8')) if os.path.exists(path) else []


# a proposer's "new" replaced by the lead's
AMEND = {
    'dante-purgatorio': {
        'eleven syllables: the last accent always on the tenth, another on the fourth or the sixth':
            'eleven syllables: the last accent always on the tenth and, as a rule, another on the fourth or the sixth',
        'eleven syllables, the last accent always on the tenth and another on the fourth or the sixth.':
            'eleven syllables, the last accent always on the tenth and, as a rule, another on the fourth or the sixth.',
    },
}

# the lead's own edits, in the raw text of the reading
EXTRA = {
    'dante-inferno': [{'old': '"label": "Beat"', 'new': '"label": "Measure"'}],
    'dante-paradiso': [{'old': '"label": "Beat"', 'new': '"label": "Measure"'}],
    'dante-purgatorio': [{'old': '"label": "Beat"', 'new': '"label": "Measure"'}],
    'don-giovanni': [{'old': '"label": "Beat"', 'new': '"label": "Count"'}],
    'henry-iv-2': [{'old': 'The voice gives the middle beat of this half line no stress. Said quickly, the half line can be heard',
                    'new': 'The voice gives the middle beat of this half-line no stress. Said quickly, the half-line can be heard'}],
    'peer-gynt': [{'old': 'rhyming with the last word of Peer’s half line.', 'new': 'rhyming with the last word of Peer’s half-line.'}],
    'traviata': [{'old': '"measure": "lines of eight syllables, stressed on the third and the seventh"',
                  'new': '"measure": "lines of eight syllables, with an accent on the third and on the seventh"'}],
    'horace': [{'old': 'a beat of the voice within each measure, which is not drawn here', 'new': 'a beat of the voice within each foot, which is not drawn here'}],
}

# rows whose count is written with x and is to be written with "."
DOTS = {'dante-purgatorio': ['12.0', '12.1', '12.2', '13.0', '13.1', '13.2', '16.0', '16.1', '16.2'],
        'rimbaud': ['38.0', '38.1', '38.2', '38.3']}


def dots(raw, rows):
    out = []
    for row in rows:
        m = re.findall(r'"%s": \{\s*"meter": "[x/]+"' % re.escape(row), raw)
        assert len(m) == 1, (row, len(m))
        old = m[0]
        head, marks = old.rsplit('"meter": "', 1)
        out.append({'old': old, 'new': head + '"meter": "' + marks.replace('x', '.')})
    return out


pieces = sorted(set(os.path.basename(f)[:-5] for f in os.listdir(HERE) if f.endswith('.json'))
                | set(os.path.basename(f)[:-5] for f in os.listdir(os.path.join(HERE, 'outside')) if f.endswith('.json'))
                | set(EXTRA) | set(DOTS))
total = 0
for piece in pieces:
    path = os.path.join(WORKS, piece, 'reading.json')
    raw = open(path, encoding='utf-8').read()
    edits = []
    for e in load(os.path.join(HERE, piece + '.json')) + load(os.path.join(HERE, 'outside', piece + '.json')):
        new = AMEND.get(piece, {}).get(e['new'], e['new'])
        edits.append({'old': e['old'], 'new': new})
    for old in AMEND.get(piece, {}):
        assert any(e['new'] == AMEND[piece][old] for e in edits), (piece, 'an amendment found nothing to amend')
    edits += EXTRA.get(piece, [])
    edits += dots(raw, DOTS.get(piece, []))
    out = raw
    for i, e in enumerate(edits):
        assert out.count(e['old']) == 1, (piece, i, out.count(e['old']))
        out = out.replace(e['old'], e['new'])
    json.loads(out)
    total += len(edits)
    lead = os.path.join(WORKS, piece, 'lead')
    print(f'{piece}: {len(edits)} edits' + ('' if WRITE else ' (not written)'))
    if not WRITE:
        continue
    os.makedirs(lead, exist_ok=True)
    listed = os.path.join(lead, 'edits-measure.json')
    kept = os.path.join(lead, 'before-measure.json')
    assert not os.path.exists(listed) and not os.path.exists(kept), (piece, 'a list or a copy of this name is there already')
    json.dump(edits, open(listed, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'build', 'tools', 'edit-exact.py'), path, listed, kept], capture_output=True, text=True)
    assert r.returncode == 0, (piece, r.stdout, r.stderr)
    assert open(path, encoding='utf-8').read() == out, piece
print(f'{total} edits in {len(pieces)} pieces')
