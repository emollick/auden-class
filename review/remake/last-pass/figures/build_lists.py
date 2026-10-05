# Builds one list of exact edits for each piece, <piece>.json, from the table below.
# It reads remake/works/<piece>/reading.json as it stands when run; it writes only in this folder.
#   python3 review/remake/last-pass/figures/build_lists.py          write the lists, print counts
#   python3 review/remake/last-pass/figures/build_lists.py table    print the table of tabs for the report
# Every "old" is the raw "plain" line of a Figure tab; the "name", "label" and "kind" lines above it are
# taken in only where the line is not single in the file. Tails are copied from the file, never retyped.
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
WORKS = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..', 'remake', 'works'))
LEADS = ('tempest',)                      # the approved page: nothing is proposed for it
SPECIAL_TAIL = {('agamemnon', 2, 0)}      # its tail has no "here" yet: the words from the colon to the first full stop

WORDING = {   # the name as printed -> the one definition (’ is the readings' apostrophe)
    'anadiplosis': 'a doubling back: the word or words at the end of one line, clause or phrase come back at the start of the next',
    'anaphora': 'a word or words come back at the start of one line, clause or phrase after another',
    'antanaclasis': 'the same word said again with a different meaning',
    'antimetabole': 'the same words said again in the opposite order',
    'antithesis': 'two opposed things set side by side, often in phrases of the same build',
    'aposiopesis': 'a sentence broken off in the middle, with the rest left unsaid',
    'apostrophe': 'a turning away: the speaker turns from the hearers to speak to someone or something else',
    'asyndeton': 'phrases or clauses set side by side with no joining word between them',
    'chiasmus': 'a crossing: two things are named, then named again in the opposite order',
    'metaphor': 'one thing spoken of as another',
    'paradox': 'a statement that contradicts itself on the surface and is still meant as true',
    'parallelism': 'phrases, clauses or sentences of the same build, set side by side',
    'periphrasis': 'the long way round: a description put in the place of a name',
    'polyptoton': 'one root repeated in different forms',
    'refrain': 'words that come back at a set place in a song or poem',
    'simile': 'a comparison that says one thing is like another',
    'stichomythia': 'two speakers answer each other a line at a time, often taking up each other’s words',
    # three figures that stand on one tab, changed to fit their families or the form
    'epistrophe': 'a word or words come back at the end of one line, clause or phrase after another',
    'extended metaphor': 'one thing spoken of as another, with the likeness carried on part by part',
    'climax': 'a ladder: words or phrases set in rising order, each step greater than the one before',
}
COUNT = {'anadiplosis': 3, 'anaphora': 10, 'antanaclasis': 2, 'antimetabole': 3, 'antithesis': 13, 'aposiopesis': 2,
         'apostrophe': 3, 'asyndeton': 2, 'chiasmus': 7, 'metaphor': 8, 'paradox': 2, 'parallelism': 2, 'periphrasis': 2,
         'polyptoton': 2, 'refrain': 2, 'simile': 4, 'stichomythia': 2, 'epistrophe': 1, 'extended metaphor': 1, 'climax': 1}
PLAIN = re.compile(r'^[ \t]*("plain": "((?:[^"\\]|\\.)*)"),?[ \t]*$', re.M)

def walk(node, path, out):
    """every string under a key "plain", in the order of the file"""
    if isinstance(node, dict):
        for k, v in node.items():
            out.append((path + (k,), v)) if k == 'plain' and isinstance(v, str) else walk(v, path + (k,), out)
    elif isinstance(node, list):
        for i, v in enumerate(node):
            walk(v, path + (i,), out)

def tail_of(value, key):
    if key in SPECIAL_TAIL:
        return 'here ' + re.match(r'^[^:]*: ([^.]*)\. ', value).group(1)
    m = re.search(r'[:;,] (here\b.*)$', value)
    return m.group(1) if m else ''

def tabs():
    """every tab of a figure in the table: piece, plate, lens, name, raw file, span of its "plain" line, value now, new value, tail"""
    seen = dict.fromkeys(WORDING, 0)
    for piece in sorted(d for d in os.listdir(WORKS) if os.path.exists(os.path.join(WORKS, d, 'reading.json'))):
        raw = open(os.path.join(WORKS, piece, 'reading.json'), encoding='utf-8').read()
        reading, found, lines = json.loads(raw), [], [(m.start(1), m.end(1), m.group(2)) for m in PLAIN.finditer(raw)]
        walk(reading, (), found)
        assert len(found) == len(lines) and all(json.loads('"' + l[2] + '"') == f[1] for l, f in zip(lines, found)), piece
        at = {f[0]: l for l, f in zip(lines, found)}
        for pi, plate in enumerate(reading.get('plates', [])):
            for li, lens in enumerate(plate.get('lenses', [])):
                if lens.get('kind') == 'figure' and lens.get('name') in WORDING:
                    name, (start, end, value) = lens['name'], at[('plates', pi, 'lenses', li, 'plain')]
                    assert '\\' not in value, (piece, pi, li)      # so the raw text and the words are the same
                    tail = tail_of(value, (piece, pi, li))
                    new = json.dumps(WORDING[name], ensure_ascii=False)[1:-1] + ('; ' + tail if tail else '')
                    seen[name] += 1
                    yield piece, pi, li, name, raw, start, end, value, new, tail
    assert seen == COUNT, {n: (seen[n], COUNT[n]) for n in seen if seen[n] != COUNT[n]}

def edit(raw, start, end, new):
    """the "plain" line, with the lines above it (name, label, kind) taken in only until it is single"""
    s = start
    for _ in range(4):
        if raw.count(raw[s:end]) == 1:
            return {'old': raw[s:end], 'new': raw[s:start] + '"plain": "' + new + '"'}
        above = raw.rfind('\n', 0, raw.rfind('\n', 0, s)) + 1
        s = above + len(raw[above:]) - len(raw[above:].lstrip(' \t'))
        assert re.match(r'"(name|label|kind)": ', raw[s:]), 'the line above is not name, label or kind'
    raise SystemExit('not single even with name, label and kind')

def main():
    rows, lists = list(tabs()), {}
    if sys.argv[1:] == ['table']:
        print('| tab | figure | wording now | wording proposed | tail kept |\n|---|---|---|---|---|')
        for piece, pi, li, name, raw, start, end, value, new, tail in rows:
            print(f'| {piece} plates[{pi}] lenses[{li}] | {name} | {value} | {"(no change)" if new == value else new} | {tail or "none"} |')
        return
    for piece, pi, li, name, raw, start, end, value, new, tail in rows:
        if new != value:
            assert piece not in LEADS, 'the approved page would change'
            lists.setdefault(piece, []).append(edit(raw, start, end, new))
    for f in os.listdir(HERE):                    # lists of an earlier run that are no longer wanted
        if f.endswith('.json') and f[:-5] not in lists and os.path.isdir(os.path.join(WORKS, f[:-5])):
            os.remove(os.path.join(HERE, f))
    for piece, edits in lists.items():
        json.dump(edits, open(os.path.join(HERE, piece + '.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        print(f'{piece}.json: {len(edits)} edits' + (', with lines above taken in' if any(not e['old'].startswith('"plain"') for e in edits) else ''))
    print(f'{len(rows)} tabs in the table; {sum(map(len, lists.values()))} edits in {len(lists)} pieces; '
          f'{len(rows) - sum(map(len, lists.values()))} tabs already as proposed; {sum(1 for r in rows if r[9])} tails kept')

if __name__ == '__main__':
    main()
