# Collate the OCR of scan 1 (the base) against scans 2 and 3, line by line.
# All three are the same typesetting, so pages and lines correspond.
# Writes a JSON list of places where the witnesses differ; nothing is decided here.
# usage: python3 collate.py out.json
import difflib, json, re, sys
from ocrxml import parse, OFFSET, FIRST, LAST, line_text

CANON = {'‘': "'", '’': "'", '“': '"', '”': '"', '–': '—', '―': '—'}

def canon(t):
    return ''.join(CANON.get(ch, ch) for ch in t)

def squash(tokens):
    chars, owner = [], []
    for wi, t in enumerate(tokens):
        for ch in canon(t):
            chars.append(ch)
            owner.append(wi)
    return ''.join(chars), owner

def key(l):
    return re.sub(r'[^a-z]', '', canon(line_text(l)).lower())

def align_lines(A, B):
    """Monotone alignment of two lists of lines by similarity. Returns list of (i|None, j|None)."""
    ka, kb = [key(l) for l in A], [key(l) for l in B]
    n, m = len(A), len(B)
    sim = [[0.0] * m for _ in range(n)]
    for i in range(n):
        for j in range(m):
            if abs(i - j) > 8:
                continue
            a, b = ka[i], kb[j]
            if not a and not b:
                ta, tb = canon(line_text(A[i])), canon(line_text(B[j]))
                sim[i][j] = 1.0 if ta == tb else 0.3
            elif a and b:
                r = difflib.SequenceMatcher(None, a, b, autojunk=False).ratio()
                sim[i][j] = r if r >= 0.5 else 0.0
    score = [[0.0] * (m + 1) for _ in range(n + 1)]
    for i in range(n - 1, -1, -1):
        for j in range(m - 1, -1, -1):
            best = max(score[i + 1][j], score[i][j + 1])
            if sim[i][j] > 0:
                best = max(best, sim[i][j] + score[i + 1][j + 1])
            score[i][j] = best
    out = []
    i = j = 0
    while i < n and j < m:
        if sim[i][j] > 0 and abs(score[i][j] - (sim[i][j] + score[i + 1][j + 1])) < 1e-9:
            out.append((i, j)); i += 1; j += 1
        elif score[i][j] == score[i + 1][j]:
            out.append((i, None)); i += 1
        else:
            out.append((None, j)); j += 1
    while i < n:
        out.append((i, None)); i += 1
    while j < m:
        out.append((None, j)); j += 1
    return out

SYSTEMATIC_BEFORE = set(';:?!,.)') | {'—'}

def compare(ta, tb):
    """Differences between two token lists of the same printed line.
    Returns list of (a_first, a_last, b_first, b_last, kind) over token indices (inclusive; last < first means empty)."""
    qa, oa = squash(ta)
    qb, ob = squash(tb)
    sm = difflib.SequenceMatcher(None, qa, qb, autojunk=False)
    ops = sm.get_opcodes()
    recs = []
    for op, a0, a1, b0, b1 in ops:
        if op == 'equal':
            # spacing: token boundaries inside an equal run
            for k in range(1, a1 - a0):
                a, b = a0 + k, b0 + k
                sa = oa[a] != oa[a - 1]
                sb = ob[b] != ob[b - 1]
                if sa != sb:
                    left, right = qa[a - 1], qa[a]
                    if right in SYSTEMATIC_BEFORE or left == '—' or left == '(':
                        continue
                    recs.append((oa[a - 1], oa[a], ob[b - 1], ob[b], 'space'))
            continue
        # token ranges touched
        if a1 > a0:
            af, al = oa[a0], oa[a1 - 1]
        else:
            # insertion in b: attach to the neighbouring a token
            af = al = oa[a0] if a0 < len(oa) else (oa[-1] if oa else 0)
            if a0 > 0 and a0 < len(oa) and oa[a0 - 1] != oa[a0]:
                # at a token boundary: decide by b's spacing
                if b0 > 0 and b1 <= len(ob) and ob[b0 - 1] == ob[b0]:
                    af = al = oa[a0 - 1]
        if b1 > b0:
            bf, bl = ob[b0], ob[b1 - 1]
        else:
            bf = ob[b0] if b0 < len(ob) else (ob[-1] if ob else 0)
            bl = bf - 1
            # the b token aligned with the a token, for showing
            if 0 < b0 < len(ob) and ob[b0 - 1] == ob[b0]:
                bl = bf
            elif b0 > 0 and a0 > 0 and oa[a0 - 1] == oa[a0] if a0 < len(oa) else False:
                bf = bl = ob[b0 - 1]
        recs.append((af, al, bf, bl, 'char'))
    # merge records touching or overlapping in a
    recs.sort()
    merged = []
    for r in recs:
        if merged and r[0] <= merged[-1][1]:
            p = merged[-1]
            nb0 = min(p[2], r[2]) if r[3] >= r[2] and p[3] >= p[2] else (r[2] if r[3] >= r[2] else p[2])
            nb1 = max(p[3], r[3])
            merged[-1] = (p[0], max(p[1], r[1]), nb0, nb1, 'char' if 'char' in (p[4], r[4]) else 'space')
        else:
            merged.append(r)
    return merged

def b_span(ta, tb, af, al):
    """Tokens of b that correspond to tokens af..al of a (by character alignment),
    with whatever b has beside them that a has not."""
    qa, oa = squash(ta)
    qb, ob = squash(tb)
    if not qb:
        return ''
    sm = difflib.SequenceMatcher(None, qa, qb, autojunk=False)
    amap = [None] * len(qb)          # for each b character, the a token it is matched with
    for op, a0, a1, b0, b1 in sm.get_opcodes():
        if op == 'equal':
            for k in range(a1 - a0):
                amap[b0 + k] = oa[a0 + k]
        elif op == 'replace':
            # spread the a tokens of the replaced stretch over the b stretch
            for k in range(b1 - b0):
                amap[b0 + k] = oa[min(a1 - 1, a0 + k * (a1 - a0) // max(1, b1 - b0))]
    hit = [k for k, o in enumerate(amap) if o is not None and af <= o <= al]
    if not hit:
        # nothing of a's tokens is in b: show what b has at that place
        before = [k for k, o in enumerate(amap) if o is not None and o < af]
        k0 = (before[-1] + 1) if before else 0
        k1 = k0
        while k1 < len(qb) and amap[k1] is None:
            k1 += 1
        if k1 == k0:
            return ''
        return ' '.join(tb[ob[k0]:ob[k1 - 1] + 1])
    k0, k1 = hit[0], hit[-1]
    while k0 > 0 and amap[k0 - 1] is None:
        k0 -= 1
    while k1 + 1 < len(qb) and amap[k1 + 1] is None:
        k1 += 1
    return ' '.join(tb[ob[k0]:ob[k1] + 1])

def main(out):
    S = {k: parse(k) for k in (1, 2, 3)}
    diffs, lineonly = [], []
    pairs = {}
    for n in range(FIRST, LAST + 1):
        A = S[1][n]['lines']
        al = {}
        for k in (2, 3):
            B = S[k][n + OFFSET[k]]['lines']
            al[k] = align_lines(A, B)
            for i, j in al[k]:
                if i is None:
                    lineonly.append({'n': n, 'scan': k, 'line': j, 'text': line_text(B[j])})
                elif j is None and k == 2:
                    lineonly.append({'n': n, 'scan': 1, 'line': i, 'text': line_text(A[i])})
        m2 = {i: j for i, j in al[2] if i is not None and j is not None}
        m3 = {i: j for i, j in al[3] if i is not None and j is not None}
        pairs[n] = {'2': m2, '3': m3}
        for i, la in enumerate(A):
            ta = [w['t'] for w in la['words']]
            spans = {}
            for k, mm in ((2, m2), (3, m3)):
                if i not in mm:
                    continue
                tb = [w['t'] for w in S[k][n + OFFSET[k]]['lines'][mm[i]]['words']]
                for af, al_, bf, bl, kind in compare(ta, tb):
                    spans.setdefault((af, al_), {})[k] = kind
            # merge overlapping spans across witnesses
            keys = sorted(spans)
            groups = []
            for ksp in keys:
                if groups and ksp[0] <= groups[-1][1]:
                    groups[-1] = (groups[-1][0], max(groups[-1][1], ksp[1]), groups[-1][2] | set(spans[ksp]))
                else:
                    groups.append((ksp[0], ksp[1], set(spans[ksp])))
            for af, al_, who in groups:
                rec = {'n': n, 'line': i, 'word': af, 'count': al_ - af + 1, 's1': ' '.join(ta[af:al_ + 1])}
                for k, mm in ((2, m2), (3, m3)):
                    if i in mm:
                        tb = [w['t'] for w in S[k][n + OFFSET[k]]['lines'][mm[i]]['words']]
                        rec['s%d' % k] = b_span(ta, tb, af, al_)
                        rec['l%d' % k] = mm[i]
                    else:
                        rec['s%d' % k] = None
                c1 = canon(rec['s1'])
                c2 = canon(rec['s2']) if rec['s2'] is not None else None
                c3 = canon(rec['s3']) if rec['s3'] is not None else None
                rec['cls'] = ('23' if c2 == c3 and c2 is not None else '13' if c1 == c3 else '12' if c1 == c2 else 'all')
                diffs.append(rec)
    json.dump({'diffs': diffs, 'lineonly': lineonly, 'pairs': {str(n): {k: {str(i): j for i, j in v.items()} for k, v in p.items()} for n, p in pairs.items()}}, open(out, 'w'), ensure_ascii=False, indent=0)
    import collections
    print(len(diffs), 'differences;', collections.Counter(d['cls'] for d in diffs))
    print(len(lineonly), 'unmatched lines;', collections.Counter(d['scan'] for d in lineonly))

if __name__ == '__main__':
    main(sys.argv[1])
