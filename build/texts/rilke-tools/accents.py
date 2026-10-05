# Look in the page images of scan 1 for marks over and under letters that the
# OCR left out (umlauts, accents, cedillas): for every letter that can bear
# one, count the dark dots of the image just above its box (below, for c).
# usage: python3 accents.py out.json [first last]
# Writes items for sheet.py and prints one line per place found.
import json, statistics, subprocess, sys, os
import abbyy, ocrxml
from ocrxml import FIRST, LAST, CACHE

PAGES = os.path.join(CACHE, 'rilke-pages', 's1j')
XLETTERS = set('acemnorsuvwxz')
ASC = set('bdfhkl')

def pgm(n):
    data = subprocess.run(['convert', os.path.join(PAGES, 'n%03d.jpg' % n), '-colorspace', 'Gray', '-depth', '8', 'pgm:-'], check=True, capture_output=True).stdout
    # P5\nW H\n255\n
    parts = data.split(b'\n', 3)
    assert parts[0] == b'P5', parts[0]
    w, h = (int(x) for x in parts[1].split())
    return w, h, parts[3]

def main():
    out = sys.argv[1]
    first, last = (int(sys.argv[2]), int(sys.argv[3])) if len(sys.argv) > 3 else (FIRST, LAST)
    P = abbyy.pages()
    S1 = ocrxml.parse(1)
    items = []
    for n in range(first, last + 1):
        w, h, px = pgm(n)
        # dark is anything nearer the ink than the paper
        sample = sorted(px[::997])
        ink, paper = sample[len(sample) // 100], sample[len(sample) // 2]
        cut = (ink * 2 + paper) // 3
        def dark(x0, y0, x1, y1):
            k = 0
            xs = []
            for y in range(max(0, y0), min(h, y1 + 1)):
                row = px[y * w + max(0, x0): y * w + min(w, x1 + 1)]
                for i, v in enumerate(row):
                    if v < cut:
                        k += 1
                        xs.append(i)
            return k, (max(xs) - min(xs) + 1 if xs else 0)
        for li, line in enumerate(P[n]):
            chars = line['chars']
            xs = [c['t'] for c in chars if c['c'] in XLETTERS and not c['sc']]
            if len(xs) < 3:
                continue
            xtop = int(statistics.median(xs))
            base = line['base']
            toks = [w_['t'] for w_ in S1[n]['lines'][li]['words']]
            wi = 0
            prev_space = True
            for ci, c in enumerate(chars):
                if not c['c'].strip():
                    prev_space = True
                    continue
                if prev_space and ci > 0 and any(x['c'].strip() for x in chars[:ci]):
                    wi += 1
                prev_space = False
                ch = c['c']
                found = None
                if ch in 'aceonuy' and not c['sc'] and c['t'] > xtop - 6:
                    k, ext = dark(c['l'] + 1, xtop - 22, c['r'] - 1, min(c['t'], xtop) - 4)
                    if k >= 8:
                        found = ('over', k)
                elif ch in 'i' and not c['sc'] and not (ci > 0 and chars[ci - 1]['c'] == 'f'):
                    # the dot of an i is narrow; two dots or a circumflex are wide (fi is one piece of type)
                    k, ext = dark(c['l'] - 1, c['t'] - 3, c['r'] + 1, xtop - 6)
                    if ext >= 12:
                        found = ('wide', ext)
                elif ch in 'AEIOUC' or (c['sc'] and ch.isalpha()):
                    k, ext = dark(c['l'] + 2, c['t'] - 17, c['r'] - 2, c['t'] - 4)
                    if k >= 8:
                        found = ('overcap', k)
                if ch in 'cC':
                    k, ext = dark(c['l'] + 1, base + 4, c['r'] - 1, base + 16)
                    if k >= 8:
                        found = ('under', k)
                if found:
                    tok = toks[wi] if wi < len(toks) else '?'
                    items.append({'id': len(items), 'n': n, 'line': li, 'word': wi, 'count': 1, 'win': 0,
                                  'label': '%d n%d.%d.%d %s [%s %s %d]%s' % (len(items), n, li, wi, tok, ch, found[0], found[1], ' it' if c['it'] else ''),
                                  'ch': ch, 'kind': found[0], 'k': found[1], 'tok': tok, 'it': c['it']})
                    print(items[-1]['label'])
    json.dump(items, open(out, 'w'), ensure_ascii=False)
    print(len(items), 'places')

if __name__ == '__main__':
    main()
