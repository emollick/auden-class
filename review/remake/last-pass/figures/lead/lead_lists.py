# The lead's lists for the Figure tabs (3 October). The proposer's wording stands for the figures in
# WORDING; for the figures in FITTED the lead keeps one sentence and fits its number and unit to
# the passage (the same word / words; line after line, clause after clause), as the captions of
# those tabs already do. Why: review/remake/last-pass/RECORD.md, "One wording for each figure".
#
#   python3 review/remake/last-pass/figures/lead/lead_lists.py          write lead/<piece>.json, print counts
#   python3 review/remake/last-pass/figures/lead/lead_lists.py table    every Figure tab after the lists, by figure
#   python3 review/remake/last-pass/figures/lead/lead_lists.py runs D   longest run of words each new line shares
#                                                                        with the source pages saved in D/*.txt
# It reads the readings as they stand and writes only in this folder. The Tempest is never changed.
import glob, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
WORKS = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..', '..', 'remake', 'works'))
LEADS = ('tempest',)
L, R = '“', '”'   # the readings' quotation marks

WORDING = {   # one line wherever the figure stands; a tail in the piece's own words follows after "; here"
    'antanaclasis': 'the same word said again with a different meaning',
    'antimetabole': 'the same words said again in the opposite order',
    'antithesis': 'two opposed things set side by side, often in phrases of the same build',
    'aposiopesis': 'a sentence broken off in the middle, with the rest left unsaid',
    'apostrophe': 'a turning away: the speaker turns from the hearers to speak to someone or something else',
    'chiasmus': 'a crossing: two things are named, then named again in the opposite order',
    'metaphor': 'one thing spoken of as another',
    'paradox': 'a statement that contradicts itself on the surface and is still meant as true',
    'periphrasis': 'the long way round: a description put in the place of a name',
    'polyptoton': 'one root repeated in different forms',
    'refrain': 'words that come back at a set place in a song or poem',
    'simile': 'a comparison that says one thing is like another',
    'stichomythia': 'two speakers answer each other a line at a time, often taking up each other’s words',
    'extended metaphor': 'one thing spoken of as another, with the likeness carried on part by part',
    'climax': 'a ladder: words or phrases set in rising order, each step greater than the one before',
}
FITTED = {   # (piece, plate, lens): the whole line
    # anaphora: the same word(s) at the head of U after U
    ('agamemnon', 0, 0): 'the same word at the head of clause after clause',
    ('augustine', 1, 1): 'the same words at the head of clause after clause',
    ('castle', 2, 1): 'the same word at the head of phrase after phrase',
    ('dante-inferno', 0, 1): 'the same words at the head of line after line',
    ('don-giovanni', 1, 1): 'the same words at the head of clause after clause',
    ('faust', 2, 1): 'the same word at the head of line after line',
    ('magic-flute', 2, 1): 'the same word at the head of line after line',
    ('moby-dick', 0, 1): 'the same word at the head of clause after clause',
    ('peer-gynt', 2, 0): 'the same words at the head of line after line, or of phrase after phrase',
    ('rimbaud', 2, 0): 'the same word at the head of sentence after sentence, or of phrase after phrase',
    # epistrophe: the same word(s) at the end of U after U
    ('fidelio', 2, 0): 'the same word at the end of phrase after phrase',
    # anadiplosis: a doubling back: the word(s) that end(s) one U begin(s) the next
    ('othello', 0, 0): 'a doubling back: the word that ends one sentence begins the next',
    ('hamlet', 1, 2): 'a doubling back: the words that end one clause begin the next',
    ('carmen', 0, 2): 'a doubling back: the words that end one clause begin the next; here after a second *si*',
    # parallelism: U of the same build, set side by side
    ('blake', 2, 0): 'sentences of the same build, set side by side',
    ('pascal', 2, 1): 'clauses of the same build, set side by side',
    # asyndeton: U set side by side with no joining word between them
    ('phedre', 1, 0): 'clauses set side by side with no joining word between them',
    ('rimbaud', 0, 1): 'phrases set side by side with no joining word between them',
    # three lines whose tail the lead words
    ('agamemnon', 2, 0): 'one thing spoken of as another; here a robe called a net, after a simile that says it is like one',
    ('antigone', 1, 1): 'one root repeated in different forms; here *knew* and *know* in one line, and the verb returns twice below',
    ('traviata', 2, 1): 'one line of verse divided between two or more speakers, and the pieces together keep the measure',
}
FRAME = {
    'anaphora': r'^the same words? at the head of (\w+) after \1(, or of (\w+) after \3)?$',
    'epistrophe': r'^the same words? at the end of (\w+) after \1$',
    'anadiplosis': r'^a doubling back: the words? that ends? one (\w+) begins? the next(; here .*)?$',
    'parallelism': r'^(sentences|clauses|phrases) of the same build, set side by side$',
    'asyndeton': r'^(clauses|phrases) set side by side with no joining word between them$',
}
PLAIN = re.compile(r'^[ \t]*("plain": "((?:[^"\\]|\\.)*)"),?[ \t]*$', re.M)


def walk(node, path, out):
    if isinstance(node, dict):
        for k, v in node.items():
            out.append((path + (k,), v)) if k == 'plain' and isinstance(v, str) else walk(v, path + (k,), out)
    elif isinstance(node, list):
        for i, v in enumerate(node):
            walk(v, path + (i,), out)


def tabs():
    """every Figure tab: piece, plate, lens, name, raw, span of its "plain" line, value now, value after"""
    used = set()
    for piece in sorted(d for d in os.listdir(WORKS) if os.path.exists(os.path.join(WORKS, d, 'reading.json'))):
        raw = open(os.path.join(WORKS, piece, 'reading.json'), encoding='utf-8').read()
        reading, found = json.loads(raw), []
        lines = [(m.start(1), m.end(1), m.group(2)) for m in PLAIN.finditer(raw)]
        walk(reading, (), found)
        assert len(found) == len(lines) and all(json.loads('"' + l[2] + '"') == f[1] for l, f in zip(lines, found)), piece
        at = {f[0]: l for l, f in zip(lines, found)}
        for pi, plate in enumerate(reading.get('plates', [])):
            for li, lens in enumerate(plate.get('lenses', [])):
                if lens.get('kind') != 'figure':
                    continue
                name = lens.get('name')
                start, end, value = at[('plates', pi, 'lenses', li, 'plain')]
                assert '\\' not in value, (piece, pi, li)
                key = (piece, pi, li)
                if key in FITTED:
                    new = FITTED[key]
                    used.add(key)
                elif name in WORDING:
                    m = re.search(r'[:;,] (here\b.*)$', value)
                    new = WORDING[name] + ('; ' + m.group(1) if m else '')
                else:
                    new = value
                if piece in LEADS:
                    assert new == value, 'the approved page would change: %s' % (key,)
                if name in FRAME:
                    assert re.match(FRAME[name], new), (key, name, new)
                yield piece, pi, li, name, raw, start, end, value, new, plate.get('id'), lens.get('label')
    assert used == set(FITTED), set(FITTED) - used


def edit(raw, start, end, new):
    s = start
    for _ in range(4):
        if raw.count(raw[s:end]) == 1:
            return {'old': raw[s:end], 'new': raw[s:start] + '"plain": "' + new + '"'}
        above = raw.rfind('\n', 0, raw.rfind('\n', 0, s)) + 1
        s = above + len(raw[above:]) - len(raw[above:].lstrip(' \t'))
        assert re.match(r'"(name|label|kind)": ', raw[s:]), 'the line above is not name, label or kind'
    raise SystemExit('not single even with name, label and kind')


def words(t):
    return re.findall(r"[a-zà-ÿ]+(?:'[a-zà-ÿ]+)*", t.lower().replace('’', "'"))


def main():
    rows = list(tabs())
    mode = sys.argv[1] if len(sys.argv) > 1 else ''
    if mode == 'table':
        by = {}
        for piece, pi, li, name, raw, start, end, value, new, pid, label in rows:
            by.setdefault(name, []).append((piece, pid, label, value, new))
        for name in sorted(by, key=lambda n: (-len(by[n]), n)):
            print('%s (%d)' % (name, len(by[name])))
            for piece, pid, label, value, new in by[name]:
                print('   %-34s %s%s' % ('%s / %s / %s' % (piece, pid, label), new, '' if new != value else '   (as it was)'))
        return
    if mode == 'runs':
        src = {os.path.basename(f)[:-4]: open(f, encoding='utf-8', errors='replace').read() for f in sorted(glob.glob(os.path.join(sys.argv[2], '*.txt')))}
        grams = {}
        for label, text in src.items():
            w = words(text)
            for n in range(4, 9):
                for i in range(len(w) - n + 1):
                    grams.setdefault(tuple(w[i:i + n]), set()).add(label)
        print('%d source texts, %d words' % (len(src), sum(len(words(t)) for t in src.values())))
        worst = 0
        for new in sorted({r[8] for r in rows if r[8] != r[7]}):
            w, best = words(new), (0, 0, [])
            for n in range(4, 9):
                for i in range(len(w) - n + 1):
                    if tuple(w[i:i + n]) in grams:
                        best = max(best, (n, i, sorted(grams[tuple(w[i:i + n])])[:4]))
            worst = max(worst, best[0])
            if best[0] >= 4:
                print('   %d words from word %d of the line beginning "%s": in %s' % (best[0], best[1] + 1, ' '.join(new.split()[:5]), ', '.join(best[2])))
        print('longest run that any new line shares with a saved source: %d words' % worst)
        return
    lists = {}
    for piece, pi, li, name, raw, start, end, value, new, pid, label in rows:
        if new != value:
            lists.setdefault(piece, []).append(edit(raw, start, end, new))
    for f in glob.glob(os.path.join(HERE, '*.json')):
        # only a list of a piece is cleared: nothing else is to be kept in this folder, and nothing else is removed
        if os.path.isdir(os.path.join(WORKS, os.path.basename(f)[:-5])):
            os.remove(f)
    for piece, edits in sorted(lists.items()):
        json.dump(edits, open(os.path.join(HERE, piece + '.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print('%d Figure tabs; %d edits in %d pieces' % (len(rows), sum(map(len, lists.values())), len(lists)))


if __name__ == '__main__':
    main()
