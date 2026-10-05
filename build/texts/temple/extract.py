#!/usr/bin/env python3
"""Rebuild the Temple Classics prose Dante (Carlyle / Okey / Wicksteed) from
the Internet Archive OCR of the printed books.

    python3 build/texts/temple/extract.py

reads the cached <id>_djvu.xml files in .cache/temple/, lays every page out
again from the word coordinates, keeps only the English prose of the poem
(no running heads, page numbers, signature marks, marginal glosses, arguments
or notes), cuts it into one paragraph per tercet from the hanging indent,
applies the corrections in patches.json and writes cantos.json and REPORT.md
next to this file.

Python 3 standard library only.  No canto text is typed in here or in
patches.json beyond word- or phrase-level corrections of the OCR.
"""
import json
import os
import re
import statistics
import sys
import unicodedata
import xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
CACHE = os.path.join(ROOT, '.cache', 'temple')
PARSED = os.path.join(CACHE, 'parsed')
ITALIAN_INDEX = os.path.join(ROOT, 'site', 'data', 'texts', 'dante-italian', 'index.json')

CANTICHE = [('inf', 34), ('pur', 33), ('par', 33)]

# Every scan we know of, by cantica.  The first is the one named as primary
# in the brief; BASE says which scan the text is actually taken from.
SCANS = {
    'inf': ['infernoofdanteal00dantrich', 'infernoofdanteal00dant',
            'inferno00dant_3', 'infernoofdanteal00dant_0', 'infernoofdanteal0000dant'],
    'pur': ['purgatorio00aliguoft', 'purgatorioofdant00dant_0', 'purgatorio0000unse'],
    'par': ['paradisoofdantea00dant', 'paradisoofdantea00dantuoft',
            'paradisoofdantea00dantrich', 'paradisoofdante00dant'],
}
# The scan the text is taken from.  For the Inferno and the Purgatorio this
# is not the scan named as primary in the brief: both of those (the "rich"
# and "aliguoft" items) were photographed with the inner margin cropped, so
# that the first letters of many full-out lines are simply not in the image,
# and the Inferno one was OCRed as Italian.  The Getty copies of the 1904
# printings are complete and read cleanly; the named primaries are still
# used as witnesses in collate.py.
BASE = {
    'inf': 'inferno00dant_3',
    'pur': 'purgatorioofdant00dant_0',
    'par': 'paradisoofdantea00dant',
}
# Per-canto exceptions to BASE, e.g. {'inf-07': 'infernoofdanteal00dant'}.
BASE_OVERRIDE = {}

# ---------------------------------------------------------------- parsing


def parse_scan(scan_id):
    """Pages of a scan: [{'w':, 'h':, 'lines': [[ [l, t, r, b, text], ...], ...]}].

    The djvu.xml gives each WORD coords="left,bottom,right,top"."""
    src = os.path.join(CACHE, scan_id + '_djvu.xml')
    cached = os.path.join(PARSED, scan_id + '.json')
    if os.path.exists(cached) and os.path.getmtime(cached) >= os.path.getmtime(src):
        with open(cached, encoding='utf-8') as fh:
            return json.load(fh)
    pages = []
    for _ev, el in ET.iterparse(src, events=('end',)):
        if el.tag != 'OBJECT':
            continue
        lines = []
        for ln in el.iter('LINE'):
            toks = []
            for wd in ln.iter('WORD'):
                c = wd.get('coords').split(',')
                left, bottom, right, top = int(c[0]), int(c[1]), int(c[2]), int(c[3])
                text = (wd.text or '').strip()
                if text:
                    toks.append([left, top, right, bottom, text])
            if toks:
                lines.append(toks)
        pages.append({'w': int(el.get('width')), 'h': int(el.get('height')), 'lines': lines})
        el.clear()
    os.makedirs(PARSED, exist_ok=True)
    with open(cached, 'w', encoding='utf-8') as fh:
        json.dump(pages, fh, ensure_ascii=False)
    return pages


# ---------------------------------------------------------------- geometry

ASC_CH = set('bdfhkl') | set('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
DESC_CH = set('gjpqy,;()[]{}/\\QJ_')
QUOTE_CH = set('"\'“”‘’„‚*«»`´^')
OPEN_CH = set('[(')
DASHES = ('—', '–', '--', '——')


def has_alnum(s):
    return any(ch.isalnum() for ch in s)


def is_quote_tok(s):
    return bool(s) and all(ch in QUOTE_CH for ch in s) and any(ch in '"\'“”‘’*«»' for ch in s)


def med(xs):
    return statistics.median(xs) if xs else None


class Row:
    __slots__ = ('toks', 'base', 'top', 'asc', 'xh', 'left', 'right', 'first_sig',
                 'x_alnum', 'kind', 'nchar', 'pitch_prev', 'pitch_next', 'small', 'start',
                 'warn', 'leaf', 'right_ok', 'base_ok')

    def __init__(self, toks, right_ok=True):
        self.toks = sorted(toks, key=lambda t: t[0])
        self.right_ok = right_ok
        self.measure()
        self.kind = None
        self.small = 0.0
        self.start = None
        self.warn = None
        self.pitch_prev = self.pitch_next = None

    def measure(self):
        toks = self.toks
        nodesc = [t[3] for t in toks if has_alnum(t[4]) and not (set(t[4]) & DESC_CH)]
        self.base_ok = bool(nodesc)
        if nodesc:
            self.base = med(nodesc)
        else:
            self.base = med([t[3] for t in toks])
        asc = [t[1] for t in toks if set(t[4]) & ASC_CH and len(t[4]) >= 2]
        self.asc = (self.base - med(asc)) if len(asc) >= 2 else None
        xo = [t[1] for t in toks if has_alnum(t[4]) and len(t[4]) >= 2
              and all(ch in 'acemnorsuvwxzgpqy.,;:' for ch in t[4])]
        self.xh = (self.base - med(xo)) if len(xo) >= 2 else None
        self.top = min(t[1] for t in toks)
        self.left = toks[0][0]
        self.right = max(t[2] for t in toks)
        self.nchar = sum(len(t[4]) for t in toks) + len(toks) - 1

    def text(self):
        return ' '.join(t[4] for t in self.toks)


def build_rows(page):
    """OCR lines -> rows sorted top to bottom, lines on one baseline merged.

    In most of these files a word's box runs on to the start of the next
    word, so only the last word of a row has a true right edge; when specks
    at the very edge of the page are dropped the row's end is unknown."""
    w = page['w']
    rows = []
    for toks in page['lines']:
        keep = [t for t in toks if not (t[0] > 0.975 * w and sum(ch.isalnum() for ch in t[4]) <= 2)]
        if not keep or not any(has_alnum(t[4]) for t in keep):
            continue
        rows.append(Row(keep, right_ok=len(keep) == len(toks)))
    rows.sort(key=lambda r: r.base)
    out = []
    for r in rows:
        if out:
            p = out[-1]
            height = max(20, (p.base - p.top))
            overlap_x = min(p.right, r.right) - max(p.left, r.left)
            if abs(r.base - p.base) < 0.45 * height and overlap_x < 0.02 * w:
                first, second = (p, r) if p.left <= r.left else (r, p)
                out[-1] = Row(p.toks + r.toks, right_ok=second.right_ok)
                continue
        out.append(r)
    return out


class Ref:
    """Book-level reference sizes of the main text type."""

    def __init__(self, pages_rows, widths):
        ascs, pitches, xhs = [], [], []
        for rows in pages_rows:
            body = [r for r in rows if len(r.toks) >= 5]
            for r in body:
                if r.asc:
                    ascs.append(r.asc)
                if r.xh:
                    xhs.append(r.xh)
            for a, b in zip(rows, rows[1:]):
                if len(a.toks) >= 4 and len(b.toks) >= 2:
                    pitches.append(b.base - a.base)
        self.asc = med(ascs)
        self.xh = med(xhs)
        p0 = med(pitches)
        self.pitch = med([p for p in pitches if 0.7 * p0 < p < 1.3 * p0])
        # characters per pixel of full-width lines in the main type
        dens = []
        for rows in pages_rows:
            if not rows:
                continue
            wmax = max(r.right for r in rows) - min(r.left for r in rows)
            for r in rows:
                if len(r.toks) >= 6 and r.asc and abs(r.asc / self.asc - 1) < 0.06 \
                        and (r.right - r.left) > 0.7 * wmax:
                    dens.append(r.nchar / (r.right - r.left))
        self.dens = med(dens)
        self.ind, self.colw = scan_constants(pages_rows, widths)


def cluster_mode(values, tol):
    """Members of the densest window of half-width tol."""
    best, best_n = [], -1
    vs = sorted(values)
    for v in vs:
        members = [u for u in vs if abs(u - v) <= tol]
        if len(members) > best_n:
            best_n, best = len(members), members
    return best


class PageGeom:
    """Edges of the text column on one page, as straight lines in y:
    x0(y) is where a paragraph's first line starts, xr(y) where full lines
    end; ind is the hanging indent, colw the measure."""

    def __init__(self, a0, b0, ar, br, ind, colw):
        self.a0, self.b0, self.ar, self.br = a0, b0, ar, br
        self.ind, self.colw = ind, colw

    def x0(self, y):
        return self.a0 + self.b0 * y

    def xr(self, y):
        return self.ar + self.br * y


def row_lead(r):
    """First token of a row that can be text."""
    for t in r.toks:
        if has_alnum(t[4]) or is_quote_tok(t[4]) or t[4][0] in OPEN_CH:
            return t
    return r.toks[0]


SLOPES = [i * 0.002 for i in range(-30, 31)]


def fit_left(rows, ind):
    """Two parallel lines one indent apart through the rows' first tokens."""
    pts = [(r.base, row_lead(r)[0]) for r in rows if len(r.toks) >= 2]
    if len(pts) < 3:
        return None
    best = None
    for b in SLOPES:
        us = sorted(x - b * y for y, x in pts)
        for a in us:
            n0 = sum(1 for u in us if abs(u - a) <= 0.16 * ind)
            n1 = sum(1 for u in us if abs(u - a - ind) <= 0.16 * ind)
            nl = sum(1 for u in us if u < a - 0.3 * ind)
            score = n0 + n1 - 2 * nl - 20 * abs(b)
            if n0 >= 1 and (best is None or score > best[0] + 1e-9):
                best = (score, a, b, n0, n1)
    if best is None:
        return None
    _, a, b, n0, n1 = best
    # least squares on the inliers
    inl = []
    for y, x in pts:
        u = x - b * y
        if abs(u - a) <= 0.2 * ind:
            inl.append((y, x))
        elif abs(u - a - ind) <= 0.2 * ind:
            inl.append((y, x - ind))
    n = len(inl)
    my = sum(p[0] for p in inl) / n
    mx = sum(p[1] for p in inl) / n
    syy = sum((p[0] - my) ** 2 for p in inl)
    if n >= 6 and syy > 0:
        b2 = sum((p[0] - my) * (p[1] - mx) for p in inl) / syy
        if abs(b2 - b) <= 0.004:
            b = b2
    a = mx - b * my
    return a, b, n0, n1


def fit_right(rows, b, tol):
    """Cluster of full-line ends, along the slope of the left edge."""
    us = [r.right - b * r.base for r in rows if r.right_ok and len(r.toks) >= 3]
    if not us:
        return None, 0
    mem = cluster_mode(us, tol)
    return med(mem), len(mem)


def scan_constants(pages_rows, widths):
    """Hanging indent and measure of a scan, in pixels."""
    diffs = []
    for rows, w in zip(pages_rows, widths):
        en, it = lang_counts(rows)
        if en < 30 or it > en / 3:
            continue
        body = [r for r in rows if len(r.toks) >= 4]
        for p, q in zip(body, body[1:]):
            d = abs(row_lead(q)[0] - row_lead(p)[0])
            if 0.02 * w < d < 0.07 * w:
                diffs.append(d)
    ind = med(cluster_mode(diffs, 0.1 * med(diffs)))
    colws = []
    for rows, w in zip(pages_rows, widths):
        en, it = lang_counts(rows)
        if en < 30 or it > en / 3:
            continue
        body = [r for r in rows if len(r.toks) >= 4]
        f = fit_left(body, ind)
        if f is None or f[2] + f[3] < 12:
            continue
        a, b = f[0], f[1]
        ar, n = fit_right(body, b, 0.006 * w)
        if n >= 8:
            colws.append(ar - a)
    colw = med(cluster_mode(colws, 0.01 * med(colws)))
    return ind, colw


def page_geometry(rows, page, ref):
    body = [r for r in rows if len(r.toks) >= 3]
    if len(body) < 3:
        return None
    f = fit_left(body, ref.ind)
    if f is None:
        return None
    a, b, n0, n1 = f
    ar, n = fit_right(body, b, 0.006 * page['w'])
    if ar is None or n < 3 or abs((ar - a) - ref.colw) > 0.015 * ref.colw:
        ar = a + ref.colw
    g = PageGeom(a, b, ar, b, ref.ind, ref.colw)
    g.nleft, g.nright = n0 + n1, n
    g.pitch = ref.pitch
    return g


RUNHEAD = re.compile(r'C\W?A\W?N\W?T\W?[O0]|INFERN|PURGAT|PARADIS|NOTES?\b|[CG]ANT[O0]', re.I)


def roman_guess(s):
    """Canto number from the running head, forgiving the OCR."""
    s = s.strip()
    m = re.search(r'[CGcVv]?\W?[AaÀ]\W?[NnMm]\W?[Tt]\W?[Oo0]\W*(.*)$', s)
    if not m:
        return None
    rest = m.group(1).strip().split()
    if not rest:
        return None
    tok = rest[0]
    tok = tok.replace('ll', 'II').replace('U', 'II').replace('u', 'II').replace('n', 'II').replace('H', 'II')
    tok = re.sub(r'[il1!|ìí\]\[JjT]', 'I', tok)
    tok = tok.upper().replace('Y', 'V').replace('K', 'X')
    tok = re.sub(r'[^IVX]', '', tok)
    if not tok:
        return None
    vals = {'I': 1, 'V': 5, 'X': 10}
    total = 0
    for i, ch in enumerate(tok):
        v = vals[ch]
        if i + 1 < len(tok) and vals[tok[i + 1]] > v:
            total -= v
        else:
            total += v
    return total if 1 <= total <= 34 else None


EN_STOP = set('the and of to that which was with for not his from had thou thee they their who when this me my is it as so by he on all have were we him but then are our she her your'.split())
IT_STOP = set('che di la il per non si le con del lo ed io mi gli da al mia più come suo quel ne nel sì fu era chi dei della se suoi poi così e un una ch'.split())


def lang_counts(rows):
    en = it = 0
    for r in rows:
        for t in r.toks:
            wd = t[4].lower().strip('.,;:!?"\'()[]')
            if wd in EN_STOP:
                en += 1
            elif wd in IT_STOP:
                it += 1
    return en, it


class PageInfo:
    pass


def headish(text):
    """Running heads are set in capitals; a row of the text that happens to
    hold the word 'notes' or 'canto' is not one."""
    letters = [ch for ch in text if ch.isalpha()]
    if not letters:
        return True
    return sum(1 for ch in letters if ch.isupper()) >= 0.6 * len(letters)


def analyse_page(page, leaf, ref):
    """Rows of one page with header, footer, noise and glosses removed, and a
    small-type score on every row."""
    info = PageInfo()
    info.leaf = leaf
    info.w, info.h = page['w'], page['h']
    rows = build_rows(page)
    info.all_rows = rows
    info.head = ''
    info.rows = []
    info.geom = None
    if not rows:
        return info
    # running head: one of the first rows, short, and either worded as one
    # or set well apart from the body
    body = list(rows)
    head = []
    cut = 0
    for i in range(min(4, len(body) - 1)):
        r = body[i]
        short = len([t for t in r.toks if has_alnum(t[4])]) <= 5
        if short and RUNHEAD.search(r.text()) and headish(r.text()) and r.base < 0.2 * info.h:
            cut = i + 1
    if cut == 0 and len(body) >= 2:
        r = body[0]
        gap = body[1].base - r.base
        short = len([t for t in r.toks if has_alnum(t[4])]) <= 5
        if short and (gap > 1.25 * ref.pitch or gap < 0.4 * ref.pitch) and r.base < 0.2 * info.h:
            cut = 1
            # a page number read as a separate line beside the head
            if len(body) >= 3 and gap < 0.4 * ref.pitch and len(body[1].toks) <= 3 \
                    and body[2].base - body[1].base > 1.25 * ref.pitch:
                cut = 2
    head, body = body[:cut], body[cut:]
    info.head = ' '.join(r.text() for r in head)
    info.en, info.it = lang_counts(body)
    g = page_geometry(body, page, ref)
    info.geom = g
    if g is None:
        info.rows = body
        return info
    # drop glosses (right of the column) and gutter noise (left of it)
    clean = []
    info.gloss = []
    for r in body:
        y = r.base
        xr, x0 = g.xr(y), g.x0(y)
        keep = []
        ok = r.right_ok
        for t in r.toks:
            if t[0] >= xr + GLOSS_GAP * g.colw:
                info.gloss.append(t[4])
                ok = False
                continue
            if t[0] < x0 - 0.35 * g.ind and (len(t[4]) <= 2 or not has_alnum(t[4])):
                continue
            keep.append(t)
        if keep and any(has_alnum(t[4]) for t in keep):
            nr = Row(keep, right_ok=ok)
            clean.append(nr)
    body = clean
    # footer: signature marks and page numbers under the text
    while body:
        r = body[-1]
        alnum = sum(1 for t in r.toks for ch in t[4] if ch.isalnum())
        sig = [t for t in r.toks if has_alnum(t[4])]
        if alnum <= 4 and sig and sig[0][0] > g.x0(r.base) + g.ind + 0.08 * g.colw:
            body.pop()
        else:
            break
    # specks between the lines (pencil marks, show-through) read as stray letters
    changed = True
    while changed:
        changed = False
        for i, r in enumerate(body):
            runs = [len(m) for t in r.toks for m in re.findall(r'[^\W\d_]+', t[4])]
            if runs and max(runs) >= 4:
                continue
            up = (r.base - body[i - 1].base) if i > 0 else None
            down = (body[i + 1].base - r.base) if i + 1 < len(body) else None
            squeezed = (up is not None and down is not None and up < 0.75 * ref.pitch and down < 0.75 * ref.pitch) \
                or (up is None and down is not None and down < 0.6 * ref.pitch) \
                or (down is None and up is not None and up < 0.6 * ref.pitch)
            if squeezed:
                del body[i]
                changed = True
                break
    for a, b in zip(body, body[1:]):
        a.pitch_next = b.base - a.base
        b.pitch_prev = b.base - a.base
    for r in body:
        r.small = small_score(r, g, ref)
        r.leaf = leaf
    info.rows = body
    return info


def small_score(r, g, ref):
    """> 0: looks like the small type of arguments and notes; < 0: main type."""
    s = 0.0
    if r.asc is not None:
        q = r.asc / ref.asc
        nasc = sum(1 for t in r.toks if set(t[4]) & ASC_CH and len(t[4]) >= 2)
        s += (1.5 if nasc >= 4 else 1.0) * max(-1.0, min(1.0, (0.915 - q) / 0.05))
    width = r.right - r.left
    if width > 0.6 * g.colw and len(r.toks) >= 5:
        q = (r.nchar / width) / ref.dens
        s += 0.8 * max(-1.0, min(1.0, (q - 1.11) / 0.07))
    # leading: only where the rows on both sides are close.  The last row of
    # the text stands close to the first row of the notes, and a short last
    # row ("argument.") has little else to be judged by.
    pm = [p for p in (r.pitch_prev, r.pitch_next) if p]
    if pm and max(pm) < 0.87 * ref.pitch:
        s += 0.8
    if any(ch.isdigit() for t in r.toks for ch in t[4]):
        s += 0.4
    return s


ZONE_COST = 1.5
GLOSS_GAP = 0.005      # a gloss starts at least this far (in measures) right of the column


def zones(rows):
    """Best split of a page's rows into small* main* small*: (start, end).
    Opening a small-type zone costs ZONE_COST, so that one doubtful short
    line cannot make one."""
    n = len(rows)
    pre = [0.0]
    for r in rows:
        pre.append(pre[-1] + r.small)
    total = pre[-1]
    best = (None, 0, 0)
    for s in range(n + 1):
        for e in range(s, n + 1):
            # small rows score +, main rows score -
            val = pre[s] - (pre[e] - pre[s]) + (total - pre[e])
            if s > 0:
                val -= ZONE_COST
            if e < n:
                val -= ZONE_COST
            if e == s:
                val -= ZONE_COST if 0 < s < n else 0.0
                if s not in (0, n):
                    continue
            if best[0] is None or val > best[0] + 1e-9 or (abs(val - best[0]) <= 1e-9 and (e - s) > (best[2] - best[1])):
                best = (val, s, e)
    return best[1], best[2]


# ---------------------------------------------------------------- cantos

SPECK = re.compile(r'^[\W_]+$')


def row_end(r, g):
    """Right end of a row; estimated from the last word's length when the
    box of that word ran on into a dropped gloss or speck."""
    if r.right_ok:
        return r.right
    t = r.toks[-1]
    return min(r.right, t[0] + (len(t[4]) + 0.5) * g.colw / 46.0)


def mark_starts(rows, g):
    """Paragraph starts from the hanging indent: a tercet's first line is set
    full out, its other lines are indented one em.

    dx is the distance of a token from the column edge, in ems.  A quotation
    mark before the first word is part of the text; other marks at the edge
    are specks from the gutter.  The OCR misplaces the first word of a row
    that completes a hyphenated word (it reports it far in), so where a row
    seems to open far in, the row before decides: a short row ends a
    paragraph."""
    prev = None
    for r in rows:
        y = r.base
        x0 = g.x0(y)
        toks = r.toks
        k = 0
        while k < len(toks) and not has_alnum(toks[k][4]) and toks[k][4][0] not in OPEN_CH:
            k += 1
        if k == len(toks):
            k = 0
        word = toks[k]
        dxw = (word[0] - x0) / g.ind                 # first word
        lead = toks[0] if k > 0 else None
        dxl = ((lead[0] - x0) / g.ind) if lead is not None else None
        prev_short = prev is not None and row_end(prev, g) < g.xr(prev.base) - 0.07 * g.colw
        prev_hyph = prev is not None and prev.toks[-1][4].endswith('-')
        warn = None
        quoteish = lead is not None and (is_quote_tok(lead[4]) or lead[4] in DASHES or lead[4] in ('^', '*', '^^'))
        if dxw < 0.45:
            start = True
        elif lead is not None and abs(dxl) < 0.3 and dxw < 0.92 and (quoteish or not prev_hyph):
            start = True                             # quotation mark, then the word
            if not quoteish:
                warn = 'mark %r before the first word' % lead[4]
        elif lead is not None and 0.7 < dxl < 1.3:
            start = False                            # quotation mark at the indent
        elif dxw < 0.80 and not prev_hyph:
            start = True                             # as if after a quotation mark that was not read
            warn = 'opens %.2f em in: quotation mark or first letter not read?' % dxw
        elif dxw < 0.92:
            # between a quotation mark's width and a full indent: go by the
            # row before, the extra leading, and a capital letter
            lead_gap = r.pitch_prev is not None and r.pitch_prev > 1.09 * g.pitch \
                and r.base_ok and prev is not None and prev.base_ok
            start = (prev_short or lead_gap) and not prev_hyph
            if start or dxw < 0.86 or word[4][:1].isupper():
                warn = 'opens %.2f em in' % dxw
        elif dxw > 1.5:
            start = prev_short                       # the row's opening was not read where it stands
            if not prev_hyph:
                warn = 'row opens far in (%.1f em)' % dxw
        else:
            start = False
            if prev_short:
                warn = 'indented row after a short row'
            elif dxw > 1.3:
                warn = 'odd indent %.2f em' % dxw
        if start and prev_hyph:
            warn = 'paragraph start after a hyphen'
        r.start = start
        r.warn = warn
        prev = r
    return rows


def italian_tercets(info, ind):
    """Number of tercets on a page of the Italian: verse lines set full out.
    (The glosses there stand in the left margin, before the line.)"""
    s, e = info.zone
    rows = info.rows[s:e]
    if not rows:
        rows = info.rows
    best = (0, 0, None)
    cands = sorted({t[0] for r in rows for t in r.toks[:3]})
    for c in cands:
        n0 = n1 = 0
        for r in rows:
            ts = [t for t in r.toks if t[0] >= c - 0.3 * ind]
            if not ts:
                continue
            d = (ts[0][0] - c) / ind
            if abs(d) <= 0.25:
                n0 += 1
            elif abs(d - 1) <= 0.25:
                n1 += 1
        if n0 >= 1 and n0 + n1 > best[0] + best[1]:
            best = (n0, n1, c)
    return best[0], best[1]


class Scan:
    pass


def analyse_scan(scan_id, cantica, overrides=()):
    """All the layout work for one scan: pages -> cantos -> paragraphs of rows.

    overrides: layout decisions from patches.json, {'op': 'start'|'cont'|
    'drop', 'leaf': n, 'row': 'opening words of the row as the OCR has
    them'}: the row begins a paragraph, continues one, or is no part of the
    text."""
    sc = Scan()
    sc.id = scan_id
    pages = parse_scan(scan_id)
    pr = [build_rows(p) for p in pages]
    ref = Ref(pr, [p['w'] for p in pages])
    sc.ref = ref
    infos = [analyse_page(p, i, ref) for i, p in enumerate(pages)]
    sc.infos = infos
    for info in infos:
        info.zone = zones(info.rows) if info.geom is not None else (0, 0)
        s, e = info.zone
        top, main, bot = info.rows[:s], info.rows[s:e], info.rows[e:]
        info.top_en, info.top_it = lang_counts(top)
        info.main_en, info.main_it = lang_counts(main)
        info.ntop, info.nmain, info.nbot = len(top), len(main), len(bot)
    inds = [info.geom.ind for info in infos if info.geom is not None and info.main_en > 20 and info.main_it < 8]
    sc.ind = med(inds)
    # A canto opens on a left-hand page: the argument in small type, then the Italian.
    # (A long argument can fill that whole page and run on to the next; then
    # the page has the cantica's name for a running head and no page number.)
    starts = []
    for info in infos:
        if info.geom is None:
            continue
        if not (info.ntop >= 2 and info.top_en >= 3 and info.top_en > 2 * info.top_it):
            continue
        if starts and info.leaf - starts[-1] < 8:
            continue
        italian_follows = info.main_it >= 6 and info.main_it > info.main_en
        bare_head = not re.search(r'\d|NOTE', info.head, re.I) and info.ntop >= 10 \
            and info.main_en <= info.main_it
        if italian_follows or bare_head:
            starts.append(info.leaf)
    sc.starts = starts
    want = dict(CANTICHE)[cantica]
    sc.cantos = {}
    sc.problems = []
    if len(starts) > want:
        sc.extra_openings = starts[want:]      # an appendix laid out like a canto opening
        starts = starts[:want]
        sc.starts = starts
    if len(starts) != want:
        sc.problems.append('%s: found %d canto openings, expected %d' % (scan_id, len(starts), want))
    for n, leaf in enumerate(starts, 1):
        end = starts[n] if n < len(starts) else min(len(infos), leaf + 14)
        cid = '%s-%02d' % (cantica, n)
        canto = {'id': cid, 'paras': [], 'leaves': [], 'warn': [], 'heads': [], 'pages': []}
        ended = False
        first = True
        for lf in range(leaf + 1, end):
            info = infos[lf]
            if info.geom is None:
                continue
            is_en = info.main_en > 2 * info.main_it and info.main_en >= 3
            if not is_en:
                continue
            s, e = info.zone
            if ended:
                if e - s >= 3 and s == 0:
                    canto['warn'].append('leaf %d: main type after the text ended' % lf)
                continue
            if not first and s > 0:
                # small type at the head of a later page: the notes have begun
                if e - s >= 3:
                    canto['warn'].append('leaf %d: page opens in small type, then main type' % lf)
                ended = True
                continue
            if e == s:
                ended = True
                continue
            num = roman_guess(info.head)
            canto['heads'].append(num)
            rows = mark_starts(info.rows[s:e], info.geom)
            kept = []
            for r in rows:
                dropped = False
                for ov in overrides:
                    if ov['leaf'] == lf and r.text().startswith(ov['row']):
                        ov['used'] = ov.get('used', 0) + 1
                        if ov['op'] == 'drop':
                            dropped = True          # a row of the argument or notes taken for text
                        else:
                            r.start = ov['op'] == 'start'
                            r.warn = None
                if dropped:
                    continue
                if r.warn:
                    canto['warn'].append('leaf %d: %s: %s' % (lf, r.warn, r.text()[:40]))
                kept.append(r)
            rows = kept
            if not rows:
                continue
            if first and not rows[0].start:
                canto['warn'].append('leaf %d: text does not open on a paragraph start' % lf)
                rows[0].start = True
            for r in rows:
                if r.start or not canto['paras']:
                    canto['paras'].append([r])
                else:
                    if r is rows[0]:
                        canto['warn'].append('leaf %d: paragraph runs on from the page before' % lf)
                    canto['paras'][-1].append(r)
            canto['leaves'].append(lf)
            nst = sum(1 for r in rows if r.start)
            it0, it1 = italian_tercets(infos[lf - 1], sc.ind) if infos[lf - 1].geom is not None else (0, 0)
            canto['pages'].append({'leaf': lf, 'starts': nst, 'rows': len(rows), 'it_tercets': it0, 'it_rows': it0 + it1})
            first = False
            if e < len(info.rows):
                ended = True
        if canto['paras']:
            tail = canto['paras'][-1][-1].text().rstrip(' "\'”’*^')
            if not tail.endswith(('.', '!', '?')):
                canto['warn'].append('leaf %d: the text does not end with a full stop: %s' % (
                    canto['leaves'][-1], canto['paras'][-1][-1].text()[-40:]))
        for pg in canto['pages']:
            if abs(pg['starts'] * 3 - pg['it_rows']) > 2 and pg['starts'] != pg['it_tercets']:
                canto['warn'].append('leaf %d: page check: %d paragraph starts but %d verse rows opposite' % (
                    pg['leaf'], pg['starts'], pg['it_rows']))
        seen = [h for h in canto['heads'] if h]
        if seen and sum(1 for h in seen if h == n) * 2 < len(seen):
            canto['warn'].append('running heads read %s, expected canto %d' % (canto['heads'], n))
        sc.cantos[cid] = canto
    return sc


# ---------------------------------------------------------------- text

LEXICON_SOURCES = [
    os.path.join(ROOT, '.cache', 'texts', 'dante_longfellow.txt'),
    os.path.join(ROOT, '.cache', 'texts', 'dante_cary.txt'),
]
WORD_RE = re.compile(r"[^\W\d_]+(?:['’-][^\W\d_]+)*")


def split_tokens(row):
    """A row's words; the OCR sometimes puts two words in one WORD."""
    out = []
    for t in row.toks:
        out.extend(t[4].split())
    return out


def row_words(sc):
    """All text rows of a scan's cantos, as lists of words."""
    for canto in sc.cantos.values():
        for para in canto['paras']:
            for r in para:
                yield split_tokens(r)


class Hyphens:
    """Decides whether a word broken at a line end keeps its hyphen.

    The evidence is the book itself: how often the joined form and the
    hyphened form occur inside lines, where no line break interferes."""

    def __init__(self, rows_of_words):
        self.solid = {}
        self.hyph = {}
        for words in rows_of_words:
            for w in words[:-1] if words else []:
                for m in WORD_RE.finditer(w):
                    wd = m.group(0).lower().replace('’', "'")
                    if '-' in wd:
                        self.hyph[wd] = self.hyph.get(wd, 0) + 1
                        for part in wd.split('-'):
                            self.solid[part] = self.solid.get(part, 0) + 1
                    else:
                        self.solid[wd] = self.solid.get(wd, 0) + 1
            if words:
                # the last word of a row counts too unless it ends in a hyphen
                w = words[-1]
                if not w.endswith('-'):
                    for m in WORD_RE.finditer(w):
                        wd = m.group(0).lower()
                        if '-' not in wd:
                            self.solid[wd] = self.solid.get(wd, 0) + 1
        self.extra = set()
        self.forced = {}

    def add_lexicon(self, words):
        self.extra |= set(words)

    def join(self, left, right):
        """left ends with '-'; returns (joined text, how sure)."""
        a = left[:-1]
        ma = re.search(r"[^\W\d_]+$", a)
        mb = re.match(r"[^\W\d_]+(?:'[^\W\d_]+)?", right)
        if not ma or not mb:
            return a + '-' + right, 'kept: not letters on both sides'
        wa, wb = ma.group(0).lower(), mb.group(0).lower()
        if (wa + wb) in self.forced:
            return a + ('-' if self.forced[wa + wb] else '') + right, None
        solid = self.solid.get(wa + wb, 0)
        hyph = self.hyph.get(wa + '-' + wb, 0)
        if hyph > solid:
            return a + '-' + right, None
        if solid > 0:
            return a + right, None
        if (wa + wb) in self.extra:
            return a + right, None
        # never seen whole: a compound of two words each seen on its own?
        if self.solid.get(wa, 0) >= 3 and self.solid.get(wb, 0) >= 3 and len(wa) >= 3 and len(wb) >= 3:
            return a + '-' + right, 'kept hyphen: %s-%s not seen elsewhere' % (wa, wb)
        return a + right, 'joined: %s%s not seen elsewhere' % (wa, wb)


CHAR_MAP = {
    '“': '"', '”': '"', '„': '"', '‟': '"', '«': '"', '»': '"',
    '‘': "'", '’': "'", '‚': "'", '‛': "'", 'ʼ': "'", '´': "'", '`': "'",
    '′': "'", '″': '"',
    '–': '—', '―': '—', '‒': '—',
    ' ': ' ', ' ': ' ', ' ': ' ', ' ': ' ',
    'ﬁ': 'fi', 'ﬂ': 'fl', 'ﬀ': 'ff', 'ﬃ': 'ffi', 'ﬄ': 'ffl',
    # the books print Sichæus, Cæsar, Phœnix; the scans read the ligatures
    # now one way, now the other: always two letters here
    'æ': 'ae', 'Æ': 'Ae', 'œ': 'oe', 'Œ': 'Oe',
}


PSEUDO_QUOTE = re.compile(r"(?:\*\*|\*'|'\*|''|,,)")


def straighten(tok):
    """One OCR word with its quotation marks made straight.  The older OCR
    often gives a double quotation mark as two marks: '' or ** or *' or '*."""
    tok = ''.join(CHAR_MAP.get(ch, ch) for ch in tok)
    if "'" in tok or '*' in tok or ',,' in tok:
        if tok == ',,':
            return '"'
        tok = re.sub(r"\*\*|\*'|'\*|''", '"', tok)
    return tok


def para_tokens(para, hy, notes):
    """Words of one paragraph in order, line-end hyphens resolved."""
    out = []
    pending = None
    for r in para:
        words = [straighten(w) for w in split_tokens(r)]
        words = [w for w in words if w]
        if not words:
            continue
        if pending is not None:
            joined, doubt = hy.join(pending, words[0])
            if doubt:
                notes.append('hyphen: %s|%s -> %s (%s)' % (pending, words[0], joined, doubt))
            out.append(joined)
            words = words[1:]
            pending = None
        if words and len(words[-1]) > 1 and words[-1].endswith('-') and r is not para[-1]:
            pending = words[-1]
            words = words[:-1]
        out.extend(words)
    if pending is not None:
        out.append(pending)
    return out


CLOSERS = '.,;:?!)]'
OPENERS = '(['


def tidy(tokens, state, notes):
    """Tokens of a paragraph -> one string with ordinary spacing.

    The books set a thin space before ; : ? ! and inside quotation marks,
    which the OCR gives as full spaces; they are closed up here.  Whether a
    free-standing double quotation mark opens or closes is decided from what
    it touches and, failing that, from whether a quotation is open
    (state['open'], carried through the canto)."""
    text = ' '.join(tokens)
    text = re.sub(r'\s+', ' ', text).strip()
    # a double mark read as two single ones, also when the OCR split them
    text = re.sub(r"''", '"', text)
    text = re.sub(r"' '$", '"', text)
    # ellipses are set with spaced points: protect them
    text = re.sub(r'(?:\. ?){2,}\.', lambda m: ' …' * 1 + ' ', text)
    # close up before closing punctuation and after opening brackets
    text = re.sub(r' +([.,;:?!\)\]])', r'\1', text)
    text = re.sub(r'([\(\[]) +', r'\1', text)
    # the OCR sometimes runs two words together across a comma ("Rome,and")
    text = re.sub(r'([,;:])(?=[^\W\d_])', r'\1 ', text)
    # dashes: no spaces round an em dash
    text = re.sub(r' ?— ?', '—', text)
    # double quotation marks
    out = []
    i = 0
    n = len(text)
    while i < n:
        ch = text[i]
        if ch != '"':
            out.append(ch)
            i += 1
            continue
        before = text[i - 1] if i > 0 else ''
        after = text[i + 1] if i + 1 < n else ''
        sp_before = before in ('', ' ')
        sp_after = after in ('', ' ')
        # what stands before the mark, ignoring spaces
        j = i - 1
        while j >= 0 and text[j] == ' ':
            j -= 1
        prev_ch = text[j] if j >= 0 else ''
        k = i + 1
        while k < n and text[k] == ' ':
            k += 1
        next_ch = text[k] if k < n else ''
        if prev_ch == '':
            opening = True
        elif next_ch == '':
            opening = False
        elif sp_before and not sp_after:
            opening = True
        elif not sp_before and sp_after:
            opening = False
        elif prev_ch in ':([' or prev_ch == '—' and not state['open']:
            opening = True
        elif next_ch in '.,;:?!)]':
            opening = False
        else:
            opening = not state['open']
        if opening == state['open']:
            notes.append('quotes: %s mark while a quotation is %s, near "%s"' % (
                'opening' if opening else 'closing', 'open' if state['open'] else 'closed',
                text[max(0, i - 18):i + 18]))
        state['open'] = opening
        if opening:
            # drop the space after, keep one before
            while out and out[-1] == ' ':
                out.pop()
            if out and out[-1] not in '([—':
                out.append(' ')
            out.append('"')
            i += 1
            while i < n and text[i] == ' ':
                i += 1
        else:
            while out and out[-1] == ' ':
                out.pop()
            out.append('"')
            i += 1
            if i < n and text[i] not in ' .,;:?!)]—':
                out.append(' ')
    text = ''.join(out)
    text = text.replace(' … ', ' . . . ').replace('…', '. . .')
    text = re.sub(r'\s+', ' ', text).strip()
    return text


ELIDED = set("t tis twas twere twill twould twixt gainst mid midst neath mongst scaped gan bove tween".split())


def requote(paras, notes=None, resets=None):
    """Second pass over a whole canto: every quotation mark is attached again
    from the text alone, so that the result does not depend on how the OCR
    happened to space the marks and so that a mark restored by a patch puts
    the ones after it right as well.

    Double marks alternate, opening and closing, through the canto (a
    quotation that runs over several paragraphs does not repeat its opening
    mark); what stands next to a mark overrides the count: the beginning of a
    paragraph, a colon or an opening bracket before it make it an opening
    mark, the end of the paragraph or a point after it a closing one.  Where
    the two disagree a note is recorded.  Single marks (quotations within
    quotations) are treated the same way, apart from apostrophes.  `resets`
    maps a paragraph index to the state (quotation open or not) to assume at
    its beginning."""
    out_paras = []
    dopen = False
    sopen = False
    topen = False
    for pi, text in enumerate(paras):
        if resets and pi in resets:
            dopen = bool(resets[pi])
            if not dopen:
                sopen = topen = False
        n = len(text)
        out = []
        i = 0
        last_open_double = False

        def note(msg, at):
            if notes is not None:
                notes.append('quotes: para %d: %s near "%s"' % (pi, msg, text[max(0, at - 16):at + 16]))

        while i < n:
            ch = text[i]
            if ch not in '"\'':
                out.append(ch)
                i += 1
                continue
            before = text[i - 1] if i > 0 else ''
            after = text[i + 1] if i + 1 < n else ''
            j = i - 1
            while j >= 0 and text[j] == ' ':
                j -= 1
            prev_ch = text[j] if j >= 0 else ''
            k = i + 1
            while k < n and text[k] == ' ':
                k += 1
            next_ch = text[k] if k < n else ''
            if ch == "'":
                if before.isalpha() and after.isalpha():
                    out.append(ch)
                    i += 1
                    continue
                if topen:
                    out.append(ch)          # inside words quoted at the third level: an apostrophe
                    i += 1
                    continue
                if after.isalpha() and not before.isalpha():
                    m = re.match(r"[^\W\d_]+", text[i + 1:])
                    if m and m.group(0).lower() in ELIDED:
                        out.append(ch)      # 'tis, 'gainst
                        i += 1
                        continue
                elif before.isalpha() and not sopen:
                    out.append(ch)          # tho', Ganges': an apostrophe
                    if notes is not None:
                        notes.append('lint: para %d: apostrophe after a word near "%s"' % (
                            pi, text[max(0, i - 16):i + 17]))
                    i += 1
                    continue
                # a quotation mark: like the double marks it is placed by
                # what stands round it and by the count, never by the side
                # on which the OCR happened to leave a space
                if before.isalpha():
                    opening = False
                elif prev_ch == '':
                    opening = True
                elif next_ch == '':
                    opening = False
                elif prev_ch in ':([' or (prev_ch == '"' and last_open_double):
                    opening = True
                elif next_ch in '.,;:?!)]' or (next_ch == '"' and sopen):
                    opening = False
                else:
                    opening = not sopen
                if opening == sopen:
                    note('%s single mark while a quotation within a quotation is %s' % (
                        'opening' if opening else 'closing', 'open' if sopen else 'not open'), i)
                sopen = opening
            elif sopen and dopen:
                # a double mark inside a quotation within a quotation: words
                # quoted by the inner speaker (Inferno ii: Virgil reports
                # Beatrice, who reports the Lady's words to Lucia)
                if topen:
                    opening = False
                    topen = False
                elif prev_ch == '' or prev_ch in ':([':
                    opening = True
                    topen = True
                elif next_ch == '' or next_ch in '.,;:?!)]':
                    opening = False
                    note('quotation closed while a quotation within it is open', i)
                    dopen = False
                    sopen = False
                else:
                    opening = True
                    topen = True
                last_open_double = opening
            else:
                if prev_ch == '':
                    opening = True
                elif next_ch == '':
                    opening = False
                elif prev_ch in ':([':
                    opening = True
                elif next_ch in '.,;:?!)]':
                    opening = False
                else:
                    opening = not dopen
                if opening == dopen:
                    note('%s mark while a quotation is %s' % (
                        'opening' if opening else 'closing', 'open' if dopen else 'closed'), i)
                dopen = opening
                last_open_double = opening
                if not opening and sopen:
                    note('quotation closed while a quotation within it is open', i)
                    sopen = False
                topen = False
            if opening:
                while out and out[-1] == ' ':
                    out.pop()
                if out and out[-1] not in '([—"\'':
                    out.append(' ')
                elif out and out[-1] in '"\'' and (not last_open_double or (ch == '"' and out[-1] == '"')):
                    # after a closing mark; two double marks together are
                    # always the end of one speech and the start of the next
                    out.append(' ')
                elif out and out[-1] == "'" and ch == '"':
                    out.append(' ')
                out.append(ch)
                i += 1
                while i < n and text[i] == ' ':
                    i += 1
            else:
                while out and out[-1] == ' ':
                    out.pop()
                out.append(ch)
                i += 1
                if i < n and text[i] not in ' .,;:?!)]—"\'':
                    out.append(' ')
        out_paras.append(re.sub(r'\s+', ' ', ''.join(out)).strip())
    if dopen and notes is not None:
        notes.append('quotes: a quotation is still open at the end of the canto')
    return out_paras


def check_brackets(paras, notes):
    """Carlyle's [ ] must pair.  An insertion may run from the end of one
    tercet into the beginning of the next (Inferno i: '[caused me to have
    good hope' / 'of that animal with the gay skin];'), so a bracket left
    open is carried into the following paragraph and only reported if it
    is not closed there."""
    depth = 0
    opened = None
    for pi, text in enumerate(paras):
        if depth and opened is not None and opened < pi - 1:
            notes.append('brackets: para %d: [ without ]' % opened)
            depth = 0
        for ch in text:
            if ch == '[':
                depth += 1
                if depth > 1:
                    notes.append('brackets: para %d: [ inside [' % pi)
                    depth = 1
                opened = pi
            elif ch == ']':
                depth -= 1
                if depth < 0:
                    notes.append('brackets: para %d: ] without [' % pi)
                    depth = 0
    if depth:
        notes.append('brackets: para %d: [ without ]' % opened)


SUFFIXES = set('d ed s st est eth n en th er ly es t ing'.split())
FUNC_WORDS = set(('the and but then when if for so now thus he she it we they this that these those there '
                  'here what who which where why how not no nor as at by in on of to with from his her '
                  'their my thy our your ye thou a an').split())
DOUBLED_OK = set('had that so'.split())


def lint(paras, notes):
    """Places that are possible in print but more often OCR damage; each
    is a flag until the page image has been looked at (checked.json)."""
    def near(t, a, b):
        return t[max(0, a - 16):b + 16]

    for i, t in enumerate(paras):
        # (an apostrophe closing a word -- a possessive plural, or a misread
        # ! or quotation mark -- is noted by requote, which knows whether a
        # quotation within a quotation is open)
        # Carlyle's brackets inside a word: raise[d], [down]wards
        for m in re.finditer(r'\[([^\]]*)\]', t):
            inner = m.group(1)
            before = t[m.start() - 1] if m.start() else ' '
            after = t[m.end()] if m.end() < len(t) else ' '
            if (inner.lower() in SUFFIXES and before == ' ') or before == '-' or after == '-' \
                    or (before.isalpha() and inner.lower() not in SUFFIXES) or not inner.strip():
                notes.append('lint: para %d: bracket and word near "%s"' % (i, near(t, m.start(), m.end())))
        if t.count('(') != t.count(')'):
            notes.append('lint: para %d: ( and ) do not pair' % i)
        # sentence shape
        for m in re.finditer(r'\. [a-z]', t):
            notes.append('lint: para %d: small letter after a full stop near "%s"' % (i, near(t, m.start(), m.end())))
        for m in re.finditer(r'[,;:] ([A-Z][a-z]*)\b', t):
            if m.group(1).lower() in FUNC_WORDS:
                notes.append('lint: para %d: capital after %s near "%s"' % (i, t[m.start()], near(t, m.start(), m.end())))
        for m in re.finditer(r"\b([^\W\d_]+) \1\b", t):
            if m.group(1).lower() not in DOUBLED_OK:
                notes.append('lint: para %d: word twice near "%s"' % (i, near(t, m.start(), m.end())))
        for m in re.finditer(r'[a-z][A-Z]', t):
            notes.append('lint: para %d: capital inside a word near "%s"' % (i, near(t, m.start(), m.end())))
        for m in re.finditer(r"(?<![^\W\d_])(?<!['-])[b-hj-np-zB-HJ-NP-Z](?![^\W\d_])(?!['-])", t):
            if t[m.end():m.end() + 1] != ']' and t[max(0, m.start() - 1):m.start()] != '[':
                notes.append('lint: para %d: single letter near "%s"' % (i, near(t, m.start(), m.end())))
        # from one tercet to the next
        core = t.rstrip('"\')] ')
        if i + 1 < len(paras) and core:
            nxt = paras[i + 1]
            w = re.match(r"[^\W\d_]+", nxt)
            if w:
                w0 = w.group(0)
                if core[-1] in ',;:' and w0[0].isupper() and w0.lower() in FUNC_WORDS and core == t:
                    notes.append('lint: para %d: ends with %s but the next tercet begins "%s" near "%s"' % (
                        i, core[-1], w0, t[-24:]))
                if core[-1] == '.' and w0[0].islower():
                    notes.append('lint: para %d: ends with a full stop but the next tercet begins "%s" near "%s"' % (
                        i, w0, t[-24:]))
        if i + 1 == len(paras) and core and core[-1] not in '.?!':
            notes.append('lint: para %d: the canto does not end with a stop near "%s"' % (i, t[-24:]))


def build_text(sc, forced=None):
    """Paragraph strings for every canto of a scan (before patches).
    forced: line-end hyphens decided in patches.json, {'selfsame': False,
    'reedbed': True}: the two halves joined -> keep the hyphen or not."""
    hy = Hyphens(row_words(sc))
    hy.forced = dict(forced or {})
    extra = set()
    for path in LEXICON_SOURCES:
        if os.path.exists(path):
            with open(path, encoding='utf-8') as fh:
                for m in WORD_RE.finditer(fh.read()):
                    extra.add(m.group(0).lower())
    hy.add_lexicon(extra)
    out = {}
    for cid, canto in sc.cantos.items():
        notes = []
        state = {'open': False}
        paras = []
        for para in canto['paras']:
            toks = para_tokens(para, hy, notes)
            paras.append(tidy(toks, state, notes))
        if state['open']:
            notes.append('quotes: a quotation is still open at the end of the canto')
        out[cid] = {'paras': paras, 'notes': notes}
    return out


def expected_paras():
    with open(ITALIAN_INDEX, encoding='utf-8') as fh:
        idx = json.load(fh)
    return {p['id']: (p['lines'] - 1) // 3 for p in idx['parts']}


# ---------------------------------------------------------------- build

PATCHES = os.path.join(HERE, 'patches.json')
VERIFIED = os.path.join(HERE, 'verified.json')
OUT_JSON = os.path.join(HERE, 'cantos.json')
OUT_REPORT = os.path.join(HERE, 'REPORT.md')


def load_json(path, default):
    if not os.path.exists(path):
        return default
    with open(path, encoding='utf-8') as fh:
        return json.load(fh)


def _find_loose(text, needle):
    """Positions of `needle` in `text`, not minding how quotation marks are
    spaced (a patch earlier in the canto can change which way one faces)."""
    pat = ''
    for part in re.split(r'( ?["\'] ?)', needle):
        if part.strip() in ('"', "'") and part.strip():
            pat += r' ?' + re.escape(part.strip()) + r' ?'
        else:
            pat += re.escape(part)
    return [(m.start(), m.end()) for m in re.finditer(pat, text)]


def apply_patches(cid, paras, patches, problems):
    """Word- and phrase-level substitutions, in file order.  'para' is the
    0-based index of the paragraph in the canto as it stands in cantos.json;
    'from' must occur exactly once in it (or 'nth' says which occurrence).
    Quotation marks are attached afresh after every patch (see requote)."""
    count = 0
    resets = {pt['para']: pt['open'] for pt in patches if pt.get('canto') == cid and pt.get('op') == 'state'}
    paras[:] = requote(paras, None, resets)
    for pt in patches:
        if pt.get('canto') != cid or 'op' in pt:
            continue
        i = pt['para']
        if not 0 <= i < len(paras):
            problems.append('%s: patch for paragraph %d: no such paragraph' % (cid, i))
            continue
        text = paras[i]
        hits = [(m.start(), m.end()) for m in re.finditer(re.escape(pt['from']), text)]
        if not hits:
            hits = _find_loose(text, pt['from'])
        found = len(hits)
        nth = pt.get('nth')
        if found == 0 or (found > 1 and not nth) or (nth and nth > found):
            problems.append('%s para %d: patch %r -> %r: found %d times' % (cid, i, pt['from'], pt['to'], found))
            continue
        a, b = hits[(nth or 1) - 1]
        lead = ' ' if text[a:b].startswith(' ') and not pt['from'].startswith(' ') else ''
        trail = ' ' if text[a:b].endswith(' ') and not pt['from'].endswith(' ') else ''
        text = text[:a] + lead + pt['to'] + trail + text[b:]
        paras[i] = re.sub(r'  +', ' ', text).strip()
        if '"' in pt['from'] or '"' in pt['to'] or "'" in pt['from'] or "'" in pt['to']:
            paras[:] = requote(paras, None, resets)
        count += 1
    return count, resets


ALLOWED = re.compile(r"^[A-Za-zÀ-ſ .,;:?!\"'()\[\]—-]*$")


def build(write=True):
    patches = load_json(PATCHES, [])
    verified = load_json(VERIFIED, {})
    expect = expected_paras()
    cantos = {}
    report = []
    problems = []
    layout = {}
    prepatch = {}
    for cantica, ncantos in CANTICHE:
        ids = ['%s-%02d' % (cantica, n) for n in range(1, ncantos + 1)]
        scans_needed = sorted({BASE_OVERRIDE.get(cid, BASE[cantica]) for cid in ids})
        built = {}
        for sid in scans_needed:
            ov = [dict(pt) for pt in patches if pt.get('op') in ('start', 'cont', 'drop')
                  and pt['canto'][:3] == cantica and BASE_OVERRIDE.get(pt['canto'], BASE[cantica]) == sid]
            sc = analyse_scan(sid, cantica, ov)
            problems.extend(sc.problems)
            for o in ov:
                if o.get('used', 0) != 1:
                    problems.append('%s: layout override on leaf %d (%r) matched %d rows' % (
                        o['canto'], o['leaf'], o['row'], o.get('used', 0)))
            forced = {}
            for pt in patches:
                if pt.get('op') == 'hyphen':
                    # {"op": "hyphen", "form": "reed-bed"} or {"op": "hyphen", "form": "selfsame"}:
                    # how a word broken at a line end is to be joined (at its last hyphen)
                    left, _, right = pt['form'].rpartition('-')
                    if left:
                        forced[re.sub(r'.*-', '', left).lower() + right.lower()] = True
                    forced.setdefault(pt['form'].replace('-', '').lower(), '-' in pt['form'])
            built[sid] = (sc, build_text(sc, forced))
        for cid in ids:
            sid = BASE_OVERRIDE.get(cid, BASE[cantica])
            sc, texts = built[sid]
            if cid not in sc.cantos:
                problems.append('%s: not found in %s' % (cid, sid))
                continue
            canto = sc.cantos[cid]
            paras = list(texts[cid]['paras'])
            prepatch[cid] = list(paras)
            npatch, resets = apply_patches(cid, paras, patches, problems)
            final_notes = []
            whole = '\n'.join(paras)
            for nt in texts[cid]['notes']:
                if nt.startswith('quotes:'):
                    continue
                m = re.match(r'hyphen: \S+ -> (\S+) \(', nt)
                if m and m.group(1) not in whole:
                    continue    # a patch has since replaced the doubtful form
                final_notes.append(nt)
            paras = requote(paras, final_notes, resets)
            check_brackets(paras, final_notes)
            lint(paras, final_notes)
            nlayout = sum(1 for pt in patches if pt.get('canto') == cid and pt.get('op') in ('start', 'cont', 'drop'))
            odd = []
            for i, ptxt in enumerate(paras):
                if not ALLOWED.match(ptxt):
                    bad = sorted({ch for ch in ptxt if not ALLOWED.match(ch)})
                    odd.append('para %d: unexpected characters %s' % (i, ' '.join(bad)))
            leaves = [canto['leaves'][0], canto['leaves'][-1]] if canto['leaves'] else [None, None]
            cantos[cid] = {'paras': paras, 'verified': bool(verified.get(cid)), 'source': sid, 'leaves': leaves}
            layout[cid] = [[{'leaf': r.leaf, 'y0': int(r.top), 'y1': int(max(t[3] for t in r.toks)),
                             'x0': int(r.left), 'x1': int(r.right), 'text': r.text()} for r in para]
                           for para in canto['paras']]
            warn = list(canto['warn'])
            if paras and paras[-1].rstrip('"\' ').endswith(('.', '!', '?')):
                # the OCR's last mark has been put right by a patch
                warn = [w for w in warn if 'does not end with a full stop' not in w]
            report.append({'id': cid, 'paras': len(paras), 'expected': expect[cid], 'verified': bool(verified.get(cid)),
                           'patches': npatch, 'layout': nlayout, 'source': sid, 'leaves': leaves,
                           'notes': final_notes, 'warn': warn, 'odd': odd})
    if write:
        with open(OUT_JSON, 'w', encoding='utf-8') as fh:
            json.dump(cantos, fh, ensure_ascii=False, indent=1)
            fh.write('\n')
        os.makedirs(CACHE, exist_ok=True)
        with open(os.path.join(CACHE, 'layout.json'), 'w', encoding='utf-8') as fh:
            json.dump(layout, fh, ensure_ascii=False)
        with open(os.path.join(CACHE, 'prepatch.json'), 'w', encoding='utf-8') as fh:
            json.dump(prepatch, fh, ensure_ascii=False)
        with open(os.path.join(CACHE, 'build_notes.json'), 'w', encoding='utf-8') as fh:
            json.dump({'report': report, 'problems': problems}, fh, ensure_ascii=False, indent=1)
        write_report(report, problems, patches, verified)
    return cantos, report, problems


# The prose of REPORT.md (method, state of the work, known doubts).  The
# lists and tables under it are generated from the data files.
REPORT_NOTES = r'''## What this is

The English prose of the Temple Classics Dante (J. M. Dent, London), one string per printed
paragraph (one paragraph per tercet): Inferno, J. A. Carlyle revised by H. Oelsner; Purgatorio,
T. Okey; Paradiso, P. H. Wicksteed. The text is taken from scans of the printed books on the
Internet Archive, through `extract.py`, and corrected only by the word- and phrase-level
substitutions in `patches.json`. No canto text is typed in anywhere.

## How to re-run

    cd /home/user/auden-course
    python3 build/texts/temple/extract.py     # about 40 s; writes cantos.json and REPORT.md
    python3 build/texts/temple/collate.py     # about 4 min; cross-check against the other scans,
                                              # writes flags.json and variants.json, then rebuilds

Python 3 standard library only, no network. `extract.py` needs the `_djvu.xml` of the three base
scans in `.cache/temple/` (a parsed copy is kept in `.cache/temple/parsed/`) and the Italian index
`site/data/texts/dante-italian/index.json` for the expected paragraph counts. `collate.py` needs the
`_djvu.xml` of all twelve scans and the word-list sources named in the brief.

## Scans and printings

| cantica | text taken from | other scans collated |
|---|---|---|
| Inferno | `inferno00dant_3` (fifth edition, November 1904) | `infernoofdanteal00dantrich` (1903), `infernoofdanteal00dant` (1903), `infernoofdanteal00dant_0` (1901), `infernoofdanteal0000dant` (1901) |
| Purgatorio | `purgatorioofdant00dant_0` (fourth edition, November 1904) | `purgatorio00aliguoft` (1903), `purgatorio0000unse` (1926) |
| Paradiso | `paradisoofdantea00dant` (reprint of November 1910; the catalogue date 1899 is wrong) | `paradisoofdante00dant` (1910), `paradisoofdantea00dantuoft` (1900), `paradisoofdantea00dantrich` (1904) |

The scans named as primary for the Inferno and the Purgatorio (`infernoofdanteal00dantrich`,
`purgatorio00aliguoft`) were photographed with the inner margin cropped, so the first letters of
many lines are not in the image at all, and the Inferno one was OCRed as Italian. They are used as
witnesses; the text comes from complete copies of the next printing. Years are from the title
versos.

## Method

1. **Layout.** Every page is laid out again from the word coordinates of the OCR. Running heads,
   page numbers, signature marks, the marginal glosses, the arguments and the notes (small type)
   are dropped; a row that starts at the hanging indent begins a paragraph. The number of
   paragraphs on a page is checked against the Italian tercets on the facing page.
2. **Text.** Words broken at a line end are rejoined (the hyphen is kept only where the word has
   one elsewhere in the book or in a word list; the doubtful ones are listed below), spaces are
   normalised, quotation marks are made straight and attached to the right word canto by canto.
3. **Patches.** `patches.json` is applied in file order: `from` must occur exactly once in the
   paragraph. A patch that no longer applies is reported under "Problems reported by the build".
4. **Checks in the build.** Paragraph count against (Italian lines - 1) / 3; quotation marks and
   brackets that do not pair; characters that cannot be right (digits and the like).
5. **Collation** (`collate.py`). Each canto is aligned word by word and mark by mark with the OCR
   of every other scan. A place where the other scans agree on a different ordinary reading, or
   where the text has a word that is in no word list and that no scan confirms, is a flag. Every
   flag was settled by looking at the page image (`pageview.py` cuts the line out of the page):
   either a patch (reason `image:`), or an entry in `checked.json` saying that the text stands.
   Where the text was plainly OCR damage and two or more scans agreed on an ordinary reading the
   patch has the reason `consensus:`.

Normalisations: straight `'` and `"`; no space before `; : ? !`; em dashes closed up; the four
ellipses of the book written as three spaced dots (`. . .`: inf-09, pur-06, pur-27, par-23); the
ligatures ae and oe of the print written as two letters (Ptolemaeus, Phoenix); printed accents
and diaereses kept (Caïna, Phaëton, Forlì); the square brackets of the Inferno (the editor's alterations to
Carlyle's translation, as its Editorial Note says) kept; italics not marked; archaic and inconsistent spellings kept as printed
(shew and show, naught and nought, mayst and mayest).

## What "verified" means

Twelve cantos have `"verified": true`: inf-01, 03, 05, 26, 33, 34; pur-01, 28, 30; par-01, 31, 33.
For these the whole English text was read against the page images (`pageview.py proof` puts every
printed row above the text made from it), not only the flagged places.

## The other 88 cantos

They come from the automatic pipeline with the collation, and every flag has been settled at the
page image (the totals below show how many are open). Beyond the flags:

- A leave-one-out test on the verified cantos (take one correction away, ask whether the place
  would have been flagged) found that 101 of the 109 corrections there would have been flagged.
  The 8 that only reading found: two diaereses, two digits read for the letter I (the build's
  character check catches these), a comma for a full stop at a tercet end, the placing of a
  quotation mark, a word run together in two scans, a full stop the printing lacks.
- So the same kinds were then looked for in the 88 cantos: 270 places where one scan has a
  different sentence mark (all looked at enlarged; the text was right in every one); every
  occurrence of some 65 proper names with adjacent vowels (diaeresis; right everywhere); 794
  places where a single scan reads a different real word (about 150 plausible ones looked at or
  judged from the context; one error, `boldest` for `holdest`, par-13).
- A misreading shared by every scan's OCR cannot be found by collation. A search for words that
  turn into other words under the letter confusions this OCR makes (b/h, c/e, i/l, t/f and so on),
  ranked by the neighbouring words, was read through (about 1,000 short contexts, 14 looked at on
  the page): a second `boldest` for `holdest` (par-13), and one misprint of the book. All verb
  forms next to `thou`, and the minority spellings of shew/show in each cantica, were also
  checked.

## Editions

The text follows the base printing. A reading is taken from another printing (reason `edition:`)
only where the base printing is mechanically defective (a dropped letter, word or stop), and each
case is listed below. Where printings differ in wording, the base is kept and the difference is
listed. Misprints that all printings share are kept as printed and listed, so that they can be
emended on purpose if that is wanted; nothing has been emended silently.

## Known doubts

- In the 88 cantos not read whole, a wrong but ordinary reading on which every scan's OCR agrees
  can remain: most likely a sentence mark, a quotation mark, or an archaic verb form read as a
  commoner word. Two of the last kind were found; the rate in the verified cantos suggests few
  are left, but not none.
- Words broken at a line end where the print cannot show whether a hyphen belongs to the word
  are joined or hyphenated by judgment (listed below).
- The base printings are those of 1904 (Inferno, Purgatorio) and 1910 (Paradiso), not the first
  editions; the places where the collated printings differ are listed below. The one-volume
  Modern Library "Carlyle-Wicksteed" reprints (`divinecomedyofdant00dant`, 1932;
  `divinecomedycarl00dant`, 1950) are not open on the Internet Archive and were not collated, so
  any change made for that reprint is not known here.
- Quotation marks that the print itself omits are not supplied (listed below).

## Files

- `extract.py`: the pipeline. `collate.py`: the cross-check.
- `patches.json`: corrections. `{"canto", "para", "from", "to", "why"}` is a substitution in
  paragraph `para` (counted from 0, as in `cantos.json`); `{"op": "start"|"cont", "canto", "leaf",
  "row"}` makes a row begin or continue a paragraph; `{"op": "hyphen", "form"}` fixes how a word
  broken at a line end is joined; `{"op": "state", "canto", "para", "open"}` says whether a speech
  is open at the start of a paragraph. `why` begins with `image:` (read from the page),
  `consensus:` (other scans agree, the text was OCR damage), `edition:` (reading of another
  printing) or `judgment:`.
- `checked.json`: places looked at on the page and left as they are. `verified.json`: cantos read
  whole. `flags.json`, `variants.json`: written by `collate.py`.
- `pageview.py`, `decide.py`, `rv.py`: helpers for looking at page images and recording decisions
  (they need the network, curl and ImageMagick; the build does not use them).
  `check_sweep.py`, `check_realword.py`, `check_recall.py`: the extra searches described above.
'''


def decisions_section(patches, checked):
    """The editorial decisions recorded in patches.json and checked.json, listed
    for the report: readings taken from another printing, variants where the
    base printing was kept, misprints kept, quotation marks the print omits,
    and judgments.  `para` counts from 0, as in cantos.json."""
    def where(e):
        return '%s:%s' % (e.get('canto', ''), e['para']) if e.get('para') is not None else e.get('canto', '')

    def why(e):
        return re.sub(r'^(image|edition|judgment|consensus):\s*', '', e.get('why', ''))

    taken, kept, misprints, quotes, judged, hyph = [], [], [], [], [], []
    for pt in patches:
        w = pt.get('why', '')
        if pt.get('op') == 'hyphen':
            hyph.append(pt['form'])
        elif pt.get('op') == 'state':
            quotes.append('- %s (quotation state set to %s before para %s): %s' % (
                pt.get('canto', ''), 'open' if pt.get('open') else 'closed', pt.get('para'), why(pt)))
        elif 'op' in pt:
            continue
        elif 'misprint' in w:
            misprints.append('- %s `%s`: %s' % (where(pt), pt['to'], why(pt)))
        elif w.startswith('edition:'):
            taken.append('- %s `%s` -> `%s`: %s' % (where(pt), pt['from'], pt['to'], why(pt)))
        elif w.startswith('judgment:') or 'judgment' in w:
            judged.append('- %s `%s` -> `%s`: %s' % (where(pt), pt['from'], pt['to'], why(pt)))
    for e in checked:
        w = e.get('why', '')
        if 'hyphen' in e:
            hyph.append(e['hyphen'].strip('.,;:!?"\''))
            continue
        if e.get('layout') is not None:
            if 'follows the print' in w:
                quotes.append('- %s: %s' % (e.get('canto', ''), why(e)))
            elif 'misprint' in w:
                misprints.append('- %s: %s' % (e.get('canto', ''), why(e)))
            continue
        if 'misprint' in w:
            misprints.append('- %s `%s`: %s' % (where(e), e.get('text', ''), why(e)))
        elif w.startswith('edition:') or 'kept as printed' in w or '(kept)' in w:
            kept.append('- %s `%s`: %s' % (where(e), e.get('text', ''), why(e)))
    out = ['## Decisions recorded', '',
           'Collected from `patches.json` and `checked.json` (the reason is the `why` of the entry;',
           'paragraph numbers count from 0, as in `cantos.json`).', '']
    for title, rows in (('Readings taken from another printing', taken),
                        ('Differences between printings and odd forms where the base printing is kept', kept),
                        ('Misprints of the book kept as printed', misprints),
                        ('Quotation marks the print itself omits (not supplied)', quotes),
                        ('Judgments', judged)):
        out += ['### %s' % title, ''] + (sorted(rows) or ['- none']) + ['']
    keep = sorted({h for h in hyph if '-' in h})
    join = sorted({h for h in hyph if '-' not in h})
    if keep:
        out += ['### Words broken at a line end: hyphen kept', '',
                'The book breaks these at the hyphen, so the print cannot show whether the hyphen belongs',
                'to the word; it is kept by judgment (a compound of two words, or the form the book uses elsewhere).',
                '', ', '.join('`%s`' % h for h in keep), '']
    if join:
        out += ['### Words broken at a line end: joined', '',
                'Line-end breaks that the automatic rule left in doubt, joined into one word after a look at the page.',
                '', ', '.join('`%s`' % h for h in join), '']
    return out


def variants_section():
    """The places where the printings differ, as found by collate.py
    (variants.json).  The text has the reading of the base printing at each."""
    variants = load_json(os.path.join(HERE, 'variants.json'), [])
    if not variants:
        return []
    out = ['### Differences between printings found by the collation', '',
           'Places where the scans of another printing agree on a reading that differs from the base',
           'printing (written by `collate.py` to `variants.json`). The text has the reading of the base',
           'printing at every one of them; `¶` is a paragraph break; years are those of the printings.', '']
    for v in variants:
        out.append('- %s:%s `%s`: %s `%s`; %s `%s`' % (
            v['canto'], v['para'], v.get('text', ''), v.get('base_printing') or 'base', v.get('base') or '(nothing)',
            ', '.join(str(y) for y in v.get('other_printings', [])) or 'other scans', v.get('other') or '(nothing)'))
    return out + ['']


def write_report(report, problems, patches, verified):
    flags = load_json(os.path.join(HERE, 'flags.json'), {})
    lines = ['# Temple Classics Dante: extraction report', '',
             'Generated by `python3 build/texts/temple/extract.py`. Do not edit by hand:',
             'the prose sections are the `REPORT_NOTES` text in `extract.py`, the lists and',
             'tables are made from `patches.json`, `checked.json`, `flags.json` and `variants.json`.', '']
    lines.append(REPORT_NOTES.rstrip())
    lines.append('')
    nver = sum(1 for r in report if r['verified'])
    off = [r for r in report if r['paras'] - r['expected'] not in (0, 1)]
    nsub = sum(1 for pt in patches if 'op' not in pt)
    nlay = sum(1 for pt in patches if pt.get('op') in ('start', 'cont', 'drop'))
    why = {}
    for pt in patches:
        if 'op' in pt:
            continue
        k = (pt.get('why') or 'unlabelled').split(':')[0]
        why[k] = why.get(k, 0) + 1
    lines += ['## Totals', '',
              '- cantos: %d (verified against the page images: %d)' % (len(report), nver),
              '- paragraphs: %d' % sum(r['paras'] for r in report),
              '- word- and phrase-level patches: %d (%s)' % (nsub, ', '.join('%s %d' % kv for kv in sorted(why.items())) or 'none'),
              '- layout overrides (paragraph breaks): %d' % nlay,
              '- cantos with the expected number of paragraphs: %d; with one more (closing line set on its own): %d' % (
                  sum(1 for r in report if r['paras'] == r['expected']),
                  sum(1 for r in report if r['paras'] == r['expected'] + 1)),
              '- cantos whose paragraph count is off by more than one: %s' % (', '.join(r['id'] for r in off) or 'none'),
              '- places where the scans disagree with the text and no page image has settled it (open flags): %s' % (
                  str(sum(flags.values())) if flags else 'not collated yet'),
              '- places looked at on the page image and left as they are (`checked.json`): %d' % len(
                  load_json(os.path.join(HERE, 'checked.json'), [])),
              '']
    if problems:
        lines += ['## Problems reported by the build', ''] + ['- ' + p for p in problems] + ['']
    lines += decisions_section(patches, load_json(os.path.join(HERE, 'checked.json'), []))
    lines += variants_section()
    lines += ['## Per canto', '',
              'Expected = (lines of the Italian - 1) / 3. A canto has that many paragraphs when its closing',
              'line shares the last tercet\'s paragraph, one more when the closing line is set on its own.',
              'Open flags = places where the other scans still disagree with this text and no page image',
              'has settled it (see `collate.py`).', '',
              '| canto | paragraphs | expected | verified | patches | open flags | source | leaves |',
              '|---|---|---|---|---|---|---|---|']
    for r in report:
        d = r['paras'] - r['expected']
        mark = '' if d in (0, 1) else ' **(off by %+d)**' % d
        nflag = flags.get(r['id'])
        lines.append('| %s | %d%s | %d | %s | %d | %s | %s | %s-%s |' % (
            r['id'], r['paras'], mark, r['expected'], 'yes' if r['verified'] else 'no',
            r['patches'] + r['layout'], '' if nflag is None else str(nflag), r['source'], r['leaves'][0], r['leaves'][1]))
    lines.append('')
    with open(OUT_REPORT, 'w', encoding='utf-8') as fh:
        fh.write('\n'.join(lines))


def _debug_scan(scan_id, cantica):
    sc = analyse_scan(scan_id, cantica)
    exp = expected_paras()
    print(scan_id, 'starts', len(sc.starts), sc.problems)
    for cid, c in sc.cantos.items():
        n = len(c['paras'])
        d = n - exp[cid]
        flag = '' if d in (0, 1) else '  <<<<<< off by %+d' % d
        print('%s leaves %s-%s (%d pages) paras %d expected %d%s' % (
            cid, c['leaves'][0] if c['leaves'] else None, c['leaves'][-1] if c['leaves'] else None,
            len(c['leaves']), n, exp[cid], flag))
        for wmsg in c['warn']:
            print('      !', wmsg)
        for i, pg in enumerate(c['pages']):
            last = i == len(c['pages']) - 1
            ok = pg['starts'] == pg['it_tercets'] or pg['starts'] * 3 == pg['it_rows']
            if last and (pg['starts'] + 1 == pg['it_tercets'] or pg['starts'] * 3 + 1 == pg['it_rows']):
                ok = True
            if not ok:
                print('      ? leaf %d: %d paragraph starts, %d Italian tercets (%d verse rows)' % (
                    pg['leaf'], pg['starts'], pg['it_tercets'], pg['it_rows']))


def _debug_pages(scan_id, a, b):
    pages = parse_scan(scan_id)
    pr = [build_rows(p) for p in pages]
    ref = Ref(pr, [p['w'] for p in pages])
    print('ref asc %.1f xh %.1f pitch %.1f dens %.4f' % (ref.asc, ref.xh, ref.pitch, ref.dens))
    for leaf in range(a, b + 1):
        info = analyse_page(pages[leaf], leaf, ref)
        g = info.geom
        print('=== leaf %d head=%r en=%s it=%s' % (leaf, info.head, getattr(info, 'en', None), getattr(info, 'it', None)))
        if g is None:
            continue
        s, e = zones(info.rows)
        mark_starts(info.rows, g)
        print('   colw %.0f ind %.0f zones %d:%d of %d gloss=%r' % (g.colw, g.ind, s, e, len(info.rows), info.gloss))
        for i, r in enumerate(info.rows):
            y = r.base
            sig = r.toks[0]
            print('%s%s %2d dx0=%5.0f dxr=%5.0f asc=%s pp=%s sm=%+.2f | %s' % (
                'M' if s <= i < e else '.', 'P' if r.start else ' ', i, sig[0] - g.x0(y), r.right - g.xr(y),
                ('%.2f' % (r.asc / ref.asc)) if r.asc else ' -- ',
                ('%.2f' % (r.pitch_prev / ref.pitch)) if r.pitch_prev else ' -- ', r.small, r.text()[:38]))


if __name__ == '__main__' and len(sys.argv) > 1 and sys.argv[1] == '--debug-pages':
    _debug_pages(sys.argv[2], int(sys.argv[3]), int(sys.argv[4]))
    sys.exit(0)
if __name__ == '__main__' and len(sys.argv) > 1 and sys.argv[1] == '--debug-scan':
    _debug_scan(sys.argv[2], sys.argv[3])
    sys.exit(0)
if __name__ == '__main__' and len(sys.argv) > 1 and sys.argv[1] == '--debug-const':
    for cantica in ('inf', 'pur', 'par'):
        for sid in SCANS[cantica]:
            if not os.path.exists(os.path.join(CACHE, sid + '_djvu.xml')):
                continue
            pages = parse_scan(sid)
            pr = [build_rows(p) for p in pages]
            ref = Ref(pr, [p['w'] for p in pages])
            print('%-28s asc %.1f pitch %.1f dens %.4f ind %.1f colw %.1f ratio %.4f' % (
                sid, ref.asc, ref.pitch, ref.dens, ref.ind, ref.colw, ref.ind / ref.colw))
    sys.exit(0)

if __name__ == '__main__':
    _cantos, _report, _problems = build()
    _off = [r['id'] for r in _report if r['paras'] - r['expected'] not in (0, 1)]
    print('wrote %s: %d cantos, %d paragraphs' % (os.path.relpath(OUT_JSON, ROOT), len(_cantos), sum(len(c['paras']) for c in _cantos.values())))
    print('paragraph counts off by more than one: %s' % (', '.join(_off) or 'none'))
    for _p in _problems:
        print('PROBLEM:', _p)
    sys.exit(1 if _problems else 0)
