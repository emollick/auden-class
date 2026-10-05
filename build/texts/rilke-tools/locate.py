# Find where given word forms stand in the OCR of scan 1 (page n, line, word),
# and write items for sheet.py so that each place can be looked at.
# usage: python3 locate.py items.json form [form ...] [--max K] [--file list.txt]
# A form matches a whole OCR word without its outer punctuation, or one of the
# pieces of a word divided at hyphens and dashes, or a word broken at a line
# end and joined (with or without its hyphen). Matching ignores case unless
# the form has a capital. Prints one line per place; never the context.
import json, re, sys
from ocrxml import parse, FIRST, LAST

EDGE = re.compile(r"^[^A-Za-zÀ-ÿŒœ0-9]+|[^A-Za-zÀ-ÿŒœ0-9]+$")

def pieces(tok):
    core = EDGE.sub('', tok)
    out = {core}
    for p in re.split(r'[-—]', core):
        out.add(EDGE.sub('', p))
    return {p for p in out if p}

def main():
    args = sys.argv[1:]
    out = args.pop(0)
    kmax = 99
    forms = []
    while args:
        a = args.pop(0)
        if a == '--max':
            kmax = int(args.pop(0))
        elif a == '--file':
            forms += [l.strip() for l in open(args.pop(0), encoding='utf8') if l.strip() and not l.startswith('#')]
        else:
            forms.append(a)
    S1 = parse(1)
    places = {f: [] for f in forms}
    def test(cands, n, li, wi, raw, count=1):
        for f in forms:
            want = f if f.lower() != f else None
            for c in cands:
                if (want is not None and c == want) or (want is None and c.lower() == f):
                    places[f].append({'n': n, 'line': li, 'word': wi, 'raw': raw, 'count': count})
                    break
    for n in range(FIRST, LAST + 1):
        lines = S1[n]['lines']
        for li, l in enumerate(lines):
            ws = l['words']
            for wi, w in enumerate(ws):
                test(pieces(w['t']), n, li, wi, w['t'])
            # a word broken at the line end
            if ws and re.search(r'[A-Za-zÀ-ÿ]-$', ws[-1]['t']) and li + 1 < len(lines):
                nxt = lines[li + 1]['words'][0]['t']
                head = ws[-1]['t']
                joined = EDGE.sub('', head[:-1] + nxt)
                hyph = EDGE.sub('', head + nxt)
                cands = pieces(joined) | pieces(hyph) | {hyph}
                cands -= pieces(head) | pieces(nxt)
                test(cands, n, li, len(ws) - 1, head + '|' + nxt)
    items = []
    for f in forms:
        if not places[f]:
            print('%-24s NOT FOUND' % f)
        for k, p in enumerate(places[f][:kmax]):
            broken = '|' in p['raw']
            items.append({'id': len(items), 'n': p['n'], 'line': p['line'], 'word': p['word'], 'count': 1,
                          'label': '%d %s  n%d.%d.%d %s' % (len(items), f, p['n'], p['line'], p['word'], p['raw'])})
            print('%4d %-24s n%d.%d.%d  %s' % (len(items) - 1, f, p['n'], p['line'], p['word'], p['raw']))
            if broken:   # the rest of the word, at the head of the next line
                items.append({'id': len(items), 'n': p['n'], 'line': p['line'] + 1, 'word': 0, 'count': 1,
                              'label': '%d   ...%s  n%d.%d.0' % (len(items), f, p['n'], p['line'] + 1)})
        if len(places[f]) > kmax:
            print('     %-24s ... %d places in all' % (f, len(places[f])))
    json.dump(items, open(out, 'w'), ensure_ascii=False)
    print(len(items), 'items')

if __name__ == '__main__':
    main()
