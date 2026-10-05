"""Real-word confusion sweep (helper; not part of the build).

The collation cannot see an OCR misreading that makes another English word
when every scan's OCR makes the same mistake (thou boldest / holdest).  This
lists, for the cantos not read whole, every word that turns into another
known word under one of the letter confusions the OCR is prone to, where the
neighbouring words speak for the other word: it counts how often the word
and its rival follow the word before and precede the word after in clean
English texts (Longfellow, Cary, the research texts) and in the Temple text
itself.

    python3 check_realword.py > realword.out      (candidates, best first)
"""
import collections
import glob
import json
import math
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import extract as X      # noqa: E402
import collate as C      # noqa: E402

WORD = re.compile(r"[^\W\d_]+(?:'[^\W\d_]+)?")
PAIRS = [('b', 'h'), ('c', 'e'), ('c', 'o'), ('e', 'o'), ('i', 'l'), ('l', 't'), ('t', 'f'), ('f', 's'),
         ('y', 'v'), ('a', 's'), ('a', 'o'), ('a', 'e'), ('n', 'u'), ('o', 'n'), ('i', 's'), ('r', 'n'),
         ('h', 'k'), ('m', 'n'), ('rn', 'm'), ('cl', 'd'), ('li', 'h'), ('ii', 'u'), ('in', 'm'), ('ri', 'n'),
         ('t', 'i'), ('t', 'r'), ('i', 'j'), ('u', 'v'), ('h', 'n'), ('e', 's'), ('d', 'b'), ('g', 'y'),
         ('w', 'v'), ('ll', 'il'), ('tl', 'd'), ('r', 'v'), ('t', 'c'), ('s', 'e'), ('th', 'tb'), ('I', 'l')]


THRESH = math.log(float(sys.argv[1])) if len(sys.argv) > 1 else math.log(8.0)
LOOSE = len(sys.argv) > 2


def variants(w):
    out = set()
    for a, b in PAIRS:
        for x, y in ((a, b), (b, a)):
            start = 0
            while True:
                k = w.find(x, start)
                if k < 0:
                    break
                out.add(w[:k] + y + w[k + len(x):])
                start = k + 1
    out.discard(w)
    return out


def corpus():
    uni = collections.Counter()
    bi = collections.Counter()
    paths = [os.path.join(X.ROOT, '.cache', 'texts', 'dante_longfellow.txt'),
             os.path.join(X.ROOT, '.cache', 'texts', 'dante_cary.txt')]
    paths += sorted(glob.glob(os.path.join(C.RESEARCH, '*.txt')))
    for path in paths:
        if 'ia_ocr' in os.path.basename(path):
            continue
        try:
            with open(path, encoding='utf-8', errors='replace') as fh:
                text = fh.read()
        except OSError:
            continue
        ws = [m.group(0).lower() for m in WORD.finditer(text)]
        uni.update(ws)
        bi.update(zip(ws, ws[1:]))
    return uni, bi


def main():
    uni, bi = corpus()
    cantos = X.load_json(X.OUT_JSON, {})
    tuni = collections.Counter()
    tbi = collections.Counter()
    toks = {}
    for cid, v in cantos.items():
        for i, p in enumerate(v['paras']):
            ms = list(WORD.finditer(p))
            ws = [m.group(0).lower() for m in ms]
            toks[(cid, i)] = (ms, ws)
            tuni.update(ws)
            tbi.update(zip(ws, ws[1:]))
    lex = C.lexicon()
    sys.stderr.write('reference words %d, bigrams %d; temple words %d\n' % (sum(uni.values()), len(bi), sum(tuni.values())))
    out = []
    for (cid, i), (ms, ws) in toks.items():
        if cantos[cid]['verified']:
            continue
        text = cantos[cid]['paras'][i]
        for k, w in enumerate(ws):
            if len(w) < 2:
                continue
            L = ws[k - 1] if k else None
            R = ws[k + 1] if k + 1 < len(ws) else None

            def ev(x, own):
                k0 = 1 if own else 0
                n = uni[x] + tuni[x] - k0
                a = (bi[(L, x)] + tbi[(L, x)] - k0) if L is not None else 0
                b = (bi[(x, R)] + tbi[(x, R)] - k0) if R is not None else 0
                return a, b, n, math.log((a + 0.1) / (n + 20.0)) + math.log((b + 0.1) / (n + 20.0))
            a1, b1, n1, s1 = ev(w, True)
            for v2 in variants(w):
                if v2 not in lex and tuni[v2] == 0:
                    continue
                if uni[v2] + tuni[v2] < 3:
                    continue
                a2, b2, n2, s2 = ev(v2, False)
                if a2 >= 1 and b2 >= 1 and (LOOSE or a1 == 0 or b1 == 0) and n2 >= 10 and s2 - s1 > THRESH:
                    m = ms[k]
                    ctx = text[max(0, m.start() - 28):m.end() + 28]
                    out.append((s2 - s1, cid, i, w, v2, '%d+%d/%d' % (a1, b1, n1), '%d+%d/%d' % (a2, b2, n2), ctx))
    out.sort(key=lambda t: (-t[0], t[1], t[2]))
    for sc, cid, i, w, v2, mine, theirs, ctx in out:
        print('%s:%d\t%s>%s\t%s|%s\t%s' % (cid, i, w, v2, mine, theirs, ctx))
    sys.stderr.write('%d candidates\n' % len(out))


if __name__ == '__main__':
    main()
