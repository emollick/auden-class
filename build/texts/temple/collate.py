#!/usr/bin/env python3
"""Cross-check the extracted text against other scans of the same books.

    python3 build/texts/temple/collate.py            # all three cantiche
    python3 build/texts/temple/collate.py inf-03     # only some cantos
    python3 build/texts/temple/collate.py --apply    # also add the safe proposals to patches.json

For every canto the text in cantos.json (base scan, patches applied) is
aligned, word by word and mark by mark, with the OCR of every other scan of
that volume.  Each place where a witness reads differently is a "locus".
A locus is classed by what the witnesses make of it:

    auto       the base reading is not ordinary English (digits, stray marks,
               a word in no word list) and at least two other scans agree on
               a reading that is; proposed as a patch ("consensus: ...")
    probable   the same with only one other scan to go by
    junk       the base reading is not ordinary English and no scan offers
               anything better
    contested  the base reading is ordinary, but at least two scans agree on
               another ordinary reading and none supports the base
    variant    as contested, but a scan of the same printing as the base
               supports the base: a revision between printings
    single     the base reading is ordinary and the only scan with anything
               to say reads otherwise
    split      the base reading is ordinary and some scans support it, but at
               least two others agree on another ordinary reading
    tie        one scan supports the base, one reads otherwise
    accent     a scan has the same letters with an accent or diaeresis that
               the base lacks (Phaeton / Phaëton)
    quote-lack two scans lack a quotation mark that the base has
    missing-text  the scans have a dozen or more words between two neighbouring
               words of the base (a lost row?)
    ok         nothing to do (a lone scan differs against several, or the
               scans' readings are themselves OCR damage)

Everything but `ok` is a flag until a patch removes the disagreement or an
entry in checked.json records that the page image was looked at and the
text stands (a `variant` too: scans of one printing can share a misreading).  Besides the loci the flags include what the
build itself notes (quotation marks that do not pair, brackets, characters
that cannot be right, doubtful line-end hyphens, doubtful paragraph breaks)
and words in no word list that no witness confirms.

Outputs: .cache/temple/collation.json (all loci), .cache/temple/review.json
(open flags, for pageview.py review), .cache/temple/proposed.json (patches
of class auto), build/texts/temple/flags.json (open flags per canto, shown
in REPORT.md) and build/texts/temple/variants.json (the places where the
printings differ, listed in REPORT.md).

Python 3 standard library only.
"""
import bisect
import difflib
import glob
import json
import os
import re
import sys
import unicodedata

import extract as X

OUT = X.CACHE
RESEARCH = '/tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/texts'
CHECKED = os.path.join(X.HERE, 'checked.json')
FLAGS = os.path.join(X.HERE, 'flags.json')
VARIANTS = os.path.join(X.HERE, 'variants.json')

# Printing of each scan, from its title verso (the catalogue dates are not
# all right: the "1899" Paradiso is the reprint of November 1910).
PRINTING = {
    'inferno00dant_3': 1904, 'infernoofdanteal00dant': 1903, 'infernoofdanteal00dantrich': 1903,
    'infernoofdanteal00dant_0': 1901, 'infernoofdanteal0000dant': 1901,
    'purgatorioofdant00dant_0': 1904, 'purgatorio00aliguoft': 1903, 'purgatorio0000unse': 1926,
    'paradisoofdantea00dant': 1910, 'paradisoofdante00dant': 1910,
    'paradisoofdantea00dantuoft': 1900, 'paradisoofdantea00dantrich': 1904,
}

# scans cropped at the inner margin: they lose the first or last letters of
# many rows, so their lone dissent is no evidence
CROPPED = {'purgatorio00aliguoft', 'infernoofdanteal00dantrich'}

ATOM = re.compile(r"[^\W\d_]+(?:['-][^\W\d_]+)*|\d+|\S")
PARA = '¶'
MARKS = '.,;:?!"\'()[]—-'


def atoms(text):
    return ATOM.findall(text)


def norm(a):
    """Form under which two atoms count as the same reading."""
    return a.replace('-', '')


# ---------------------------------------------------------------- lexicon

_LEX = None


def lexicon():
    """Lower-cased words of clean public-domain English texts."""
    global _LEX
    if _LEX is not None:
        return _LEX
    cache = os.path.join(OUT, 'lexicon.json')
    if os.path.exists(cache):
        with open(cache, encoding='utf-8') as fh:
            _LEX = set(json.load(fh))
        return _LEX
    counts = {}
    dante = set()
    paths = [os.path.join(X.ROOT, '.cache', 'texts', 'dante_longfellow.txt'),
             os.path.join(X.ROOT, '.cache', 'texts', 'dante_cary.txt')]
    paths += sorted(glob.glob(os.path.join(RESEARCH, '*.txt')))
    stop = set('the and of to that which was with for not his from had they their who when this is it as by he on all have were we him but then are'.split())
    for path in paths:
        base = os.path.basename(path)
        if 'ia_ocr' in base:
            continue
        try:
            with open(path, encoding='utf-8', errors='replace') as fh:
                text = fh.read()
        except OSError:
            continue
        words = [m.group(0).lower() for m in re.finditer(r"[^\W\d_]+(?:'[^\W\d_]+)?", text)]
        if not words:
            continue
        english = sum(1 for w in words if w in stop) / len(words)
        if english < 0.2:
            continue
        seen = {}
        for w in words:
            seen[w] = seen.get(w, 0) + 1
        for w, c in seen.items():
            counts[w] = counts.get(w, 0) + c
        if base.startswith('dante_'):
            dante |= set(seen)
    lex = {w for w, c in counts.items() if c >= 2} | dante
    os.makedirs(OUT, exist_ok=True)
    with open(cache, 'w', encoding='utf-8') as fh:
        json.dump(sorted(lex), fh)
    _LEX = lex
    return lex


def known(word):
    """Is this atom an ordinary word (or pointing)?"""
    if not word:
        return True
    if word == PARA:
        return True
    if not any(ch.isalpha() for ch in word):
        return word in MARKS
    if len(word) == 1:
        return word in 'aAIO'
    lex = lexicon()
    w = word.lower()
    if w in lex:
        return True
    w2 = w.replace("'s", '')
    if w2 in lex:
        return True
    if '-' in w and all(p in lex for p in w.split('-') if p) and all(len(p) > 1 or p in 'ao' for p in w.split('-') if p):
        return True
    # archaic verb endings of the translators: -eth, -est, -edst
    for suf, rep in (('eth', ''), ('eth', 'e'), ('est', ''), ('est', 'e'), ('edst', 'ed'), ('edst', 'e'),
                     ('st', ''), ('ieth', 'y'), ('iest', 'y')):
        if w.endswith(suf) and len(w) > len(suf) + 2:
            stem = w[:-len(suf)] + rep
            if stem in lex:
                return True
            if len(stem) > 3 and stem[-1] == stem[-2] and stem[:-1] in lex:
                return True
    return False


def clean(alist):
    return all(known(a) for a in alist)


# ---------------------------------------------------------------- witnesses

_SCANS = {}
_HY = {}


def scan(scan_id, cantica):
    """Layout of a witness scan.  Where it does not find every canto opening
    (a badly read opening page), the openings are filled in from the base
    scan's, shifted by the usual difference in leaf numbers between the two
    copies; otherwise its cantos would be compared with the wrong ones."""
    if scan_id not in _SCANS:
        sc = X.analyse_scan(scan_id, cantica)
        base_id = X.BASE[cantica]
        if scan_id != base_id:
            base = scan(base_id, cantica)
            if len(sc.starts) != len(base.starts):
                fixed = []
                off = (sc.starts[0] - base.starts[0]) if sc.starts else 0
                for b in base.starts:
                    near = sorted((abs(st - (b + off)), st) for st in sc.starts if abs(st - (b + off)) <= 5)
                    if near:
                        off = near[0][1] - b
                        fixed.append(near[0][1])
                    else:
                        fixed.append(b + off)
                sys.stderr.write('%s: %d canto openings found, the rest filled in from the base scan\n' % (
                    scan_id, len(sc.starts)))
                sc.starts = fixed
        _SCANS[scan_id] = sc
    return _SCANS[scan_id]


def _hyphens(sc):
    if sc.id not in _HY:
        _HY[sc.id] = X.Hyphens(X.row_words(sc))
    return _HY[sc.id]


def witness_units(sc, n):
    """Everything on the English pages of canto n in a witness scan (text,
    argument and notes alike, in page order; the alignment with the base
    picks out the poem), cut into the stretches that the layout takes for
    paragraphs and tidied like the base text."""
    if n > len(sc.starts):
        return []
    leaf = sc.starts[n - 1]
    end = sc.starts[n] if n < len(sc.starts) else min(len(sc.infos), leaf + 14)
    chunks = []
    for lf in range(leaf + 1, end):
        info = sc.infos[lf]
        if info.geom is None or not info.rows:
            continue
        en, it = X.lang_counts(info.rows)
        if not (en > 2 * it and en >= 3):
            continue
        X.mark_starts(info.rows, info.geom)
        for r in info.rows:
            if r.start or not chunks:
                chunks.append([r])
            else:
                chunks[-1].append(r)
    hy = _hyphens(sc)
    state = {'open': False}
    units = []
    for ch in chunks:
        toks = X.para_tokens(ch, hy, [])
        units.append(X.tidy(toks, state, []))
    return units


def unit_atoms(units):
    """Atoms of a list of paragraphs with, for each, (unit, start, end)."""
    out, offs = [], []
    for u, text in enumerate(units):
        out.append(PARA)
        offs.append((u, 0, 0))
        for m in ATOM.finditer(text):
            out.append(m.group(0))
            offs.append((u, m.start(), m.end()))
    return out, offs


def gap_text(units, alist, offs, ia, ib):
    """The text between atom ia and atom ib (both exclusive)."""
    if not units:
        return ''
    if ia < 0:
        ua, ca = 0, 0
    else:
        ua, _, ca = offs[ia]
    if ib >= len(offs):
        ub, cb = len(units) - 1, len(units[-1])
    elif alist[ib] == PARA:
        ub = offs[ib][0] - 1
        if ub < 0:
            return ''
        cb = len(units[ub])
    else:
        ub, cb, _ = offs[ib]
    if (ub, cb) < (ua, ca):
        return ''
    if ua == ub:
        return units[ua][ca:cb]
    parts = [units[ua][ca:]] + units[ua + 1:ub] + [units[ub][:cb]]
    return (' %s ' % PARA).join(parts)


# ---------------------------------------------------------------- alignment

def align(base, wit):
    """Map base index -> witness index for atoms that match."""
    sm = difflib.SequenceMatcher(None, [norm(a) for a in base], [norm(a) for a in wit], autojunk=False)
    m = {}
    for tag, i1, i2, j1, j2 in sm.get_opcodes():
        if tag == 'equal':
            for d in range(i2 - i1):
                m[i1 + d] = j1 + d
    return m


def loci(base, maps):
    """Stretches of the base where some witness reads differently.

    Returns [(pa, pb, {scan: (ja, jb) or None})]: base atoms pa and pb are
    the anchors on either side (pa may be -1, pb may be len(base)), matched
    in every witness that covers the place at atoms ja and jb."""
    n = len(base)
    covered = {}
    for sid, m in maps.items():
        idx = sorted(m)
        cov = [False] * n
        for i in range(n):
            k = bisect.bisect_left(idx, i)
            left = idx[k - 1] if k > 0 else None
            right = idx[k] if k < len(idx) else None
            if right == i:
                cov[i] = True
            elif left is not None and right is not None and i - left <= 12 and right - i <= 12:
                cov[i] = True
        covered[sid] = cov
    bad = [False] * n
    spans = []
    for sid, m in maps.items():
        cov = covered[sid]
        for i in range(n):
            if cov[i] and i not in m:
                bad[i] = True
        idx = sorted(m)
        for p, q in zip(idx, idx[1:]):
            if q == p + 1 and 1 < m[q] - m[p] <= 12:
                spans.append([q, q])           # the witness has something more here
    i = 0
    while i < n:
        if bad[i]:
            j = i
            while j < n and bad[j]:
                j += 1
            spans.append([i, j])
            i = j
        else:
            i += 1
    spans.sort()
    merged = []
    for a, b in spans:
        if merged and a <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], b)
        else:
            merged.append([a, b])
    out = []
    for a, b in merged:
        present = [sid for sid in maps if (covered[sid][a] if a < n else True) or (a > 0 and covered[sid][a - 1])]
        pa = a - 1
        while pa >= 0 and not all(pa in maps[sid] for sid in present):
            pa -= 1
        pb = b
        while pb < n and not all(pb in maps[sid] for sid in present):
            pb += 1
        if pa < 0 or pb >= n or pb - pa > 40:
            pa, pb = a - 1, b
        readings = {}
        for sid in maps:
            m = maps[sid]
            if sid in present and pa in m and pb in m:
                readings[sid] = (m[pa], m[pb])
            else:
                readings[sid] = None
        if out and pa < out[-1][1]:
            continue
        out.append((pa, pb, readings))
    return out


# ---------------------------------------------------------------- judging

def unaccent(alist):
    """Atoms with accents and diaereses taken off (Phaëton -> Phaeton)."""
    out = []
    for a in alist:
        d = unicodedata.normalize('NFKD', a)
        out.append(''.join(ch for ch in d if not unicodedata.combining(ch)))
    return out


def fold_quotes(alist):
    return ['"' if a == "'" else a for a in alist]


def no_quotes(alist):
    return [a for a in alist if a not in ('"', "'")]


def judge(b_atoms, w_atoms, base_id):
    """Class of a locus and the reading proposed in place of the base's.

    w_atoms: {scan: atom list or None}."""
    nb = [norm(a) for a in b_atoms]
    b_clean = clean(b_atoms)
    agree, others, lack, accent = [], {}, [], []
    for sid, wa in w_atoms.items():
        if wa is None:
            continue
        nw = [norm(a) for a in wa]
        if nw == nb:
            agree.append(sid)
            continue
        fb, fw = fold_quotes(nb), fold_quotes(nw)
        if fw == fb and nb.count('"') >= nw.count('"'):
            agree.append(sid)                  # a double mark read as a single one
            continue
        if no_quotes(nw) == no_quotes(nb) and len(no_quotes(nw)) + sum(1 for a in nw if a in '"\'') < len(nb) + 0 \
                and sum(1 for a in nw if a in '"\'') < sum(1 for a in nb if a in '"\''):
            lack.append(sid)                   # the witness lacks a mark the base has
            continue
        if unaccent(nw) == unaccent(nb) and nw != nb and len(unaccent(nw)) == len(nw) \
                and sum(1 for a in nw for ch in a if ord(ch) > 127) > sum(1 for a in nb for ch in a if ord(ch) > 127):
            # the same letters with an accent or diaeresis the base lacks; a
            # name counts at once, anything else needs two scans (one of the
            # Inferno scans was read as Italian and has "wìth", "fìre")
            accent.append(sid)
            if any(x != y and x[:1].isupper() and len(x) > 2 for x, y in zip(nw, nb)):
                accent.append(sid)
            continue
        if not clean(wa):
            continue                           # the witness's own damage
        if nw and all(a in '"\'' for a in nw) and len(no_quotes(nb)) <= 1 and len(nb) > len(no_quotes(nb)) \
                and all(a in MARKS for a in nb):
            continue                           # a stop and its quotation mark read as a cluster of marks
        others.setdefault(tuple(nw), []).append(sid)
    top, tops = None, []
    for k, sids in others.items():
        if len(sids) > len(tops):
            top, tops = k, sids
    ntop = len(tops)
    year = PRINTING.get(base_id)
    if not b_clean:
        if ntop >= 2:
            return 'auto', tops
        if ntop == 1:
            return 'probable', tops
        return 'junk', []
    if ntop >= 2 and not agree:
        return 'contested', tops
    if ntop >= 2 and agree:
        if any(PRINTING.get(s) == year for s in agree) and all(PRINTING.get(s) != year for s in tops):
            return 'variant', tops
        if max(PRINTING.get(s, 0) for s in tops) < min([year or 0] + [PRINTING.get(s, 0) for s in agree]):
            return 'variant', tops             # every scan of the older printings against the newer ones
        if len(agree) >= ntop:
            return 'split', tops               # the scans are divided: look at the page
        return 'contested', tops
    if ntop == 1 and not agree:
        if any(PRINTING.get(s) == year for s in lack):
            return 'ok', []
        return 'single', tops
    if len(accent) >= 2:
        return 'accent', sorted(set(accent))
    if ntop == 1 and len(agree) == 1:
        if PRINTING.get(agree[0]) == year and PRINTING.get(tops[0]) != year:
            return 'ok', []
        if tops[0] in CROPPED:
            return 'ok', []                    # a scan that loses letters at the inner margin
        return 'tie', tops                     # one scan against one
    if not others and len(lack) >= 2 and not agree:
        return 'quote-lack', lack
    return 'ok', []


def similar(a, b):
    """Could b be what the OCR made a out of?"""
    a2 = re.sub(r'[\W_]', '', a).lower()
    b2 = re.sub(r'[\W_]', '', b).lower()
    if not a2 and not b2:
        return True
    return difflib.SequenceMatcher(None, a2, b2, autojunk=False).ratio() >= 0.6 or len(a2) <= 2 and len(b2) <= 2


def safe(b_text, w_text):
    """May the witnesses' reading replace the base's without a look at the
    page?  Only where the base reading is plainly the same words damaged:
    no quotation marks in play, no accented letters (the scans differ in
    reading them), nothing dropped but spaces, much the same letters."""
    if '"' in b_text or '"' in w_text or "'" in w_text or "'" in b_text:
        return False
    if any(ord(ch) > 127 and ch.isalpha() for ch in b_text + w_text):
        return False
    if not similar(b_text, w_text):
        return False
    a2 = re.sub(r'[\W_]', '', b_text)
    b2 = re.sub(r'[\W_]', '', w_text)
    if abs(len(a2) - len(b2)) > 1:
        return False
    if len(atoms(b_text)) > len(atoms(w_text)) and a2.lower() != b2.lower():
        return False                           # something would be dropped: a mark misread?
    return True


def collate_canto(cid, paras, base_id, cantica):
    n = int(cid[4:])
    base, boffs = unit_atoms(paras)
    wunits, watoms, woffs, maps = {}, {}, {}, {}
    for sid in X.SCANS[cantica]:
        if sid == base_id:
            continue
        if not os.path.exists(os.path.join(X.CACHE, sid + '_djvu.xml')):
            continue
        units = witness_units(scan(sid, cantica), n)
        if not units:
            continue
        wunits[sid] = units
        watoms[sid], woffs[sid] = unit_atoms(units)
        maps[sid] = align(base, watoms[sid])
    result = []
    for pa, pb, readings in loci(base, maps):
        b_atoms = base[pa + 1:pb]
        w_atoms, w_text = {}, {}
        for sid, r in readings.items():
            if r is None:
                w_atoms[sid] = None
                continue
            ja, jb = r
            w_atoms[sid] = watoms[sid][ja + 1:jb]
            w_text[sid] = gap_text(wunits[sid], watoms[sid], woffs[sid], ja, jb)
        if all(wa is None or [norm(a) for a in wa] == [norm(a) for a in b_atoms] for wa in w_atoms.values()):
            continue
        cls, tops = judge(b_atoms, w_atoms, base_id)
        b_text = gap_text(paras, base, boffs, pa, pb)
        para = boffs[pa + 1][0] if pa + 1 < len(boffs) else len(paras) - 1
        if b_atoms and b_atoms[0] == PARA and len(b_atoms) > 1:
            para = boffs[pa + 2][0]
        loc = {'canto': cid, 'para': para, 'class': cls, 'base': b_text,
               'wit': {sid: (None if w_atoms[sid] is None else w_text[sid]) for sid in w_atoms}}
        structural = PARA in b_atoms or any(wa and PARA in wa for wa in w_atoms.values())
        if cls == 'tie' and structural:
            cls, tops = 'ok', []
            loc['class'] = cls
        # where it stands in the paragraph, with its anchors
        same_para = pa >= 0 and pb < len(base) and base[pa] != PARA and base[pb] != PARA \
            and boffs[pa][0] == boffs[pb][0] and PARA not in b_atoms
        if same_para:
            u, s0, e0 = boffs[pa]
            _, s1, e1 = boffs[pb]
            loc['span'] = [s0, e1]
            loc['inner'] = [e0, s1]
        else:
            # at a paragraph's edge: take what lies in the paragraph
            u = para
            inside = [i for i in range(max(pa, 0), min(pb + 1, len(base))) if base[i] != PARA and boffs[i][0] == u]
            if inside:
                loc['span'] = [boffs[inside[0]][1], boffs[inside[-1]][2]]
                loc['inner'] = list(loc['span'])
        if 'span' in loc:
            loc['span_text'] = paras[u][loc['span'][0]:loc['span'][1]]
            loc['inner_text'] = paras[u][loc['inner'][0]:loc['inner'][1]]
        if tops:
            loc['top'] = w_text[tops[0]]
            loc['votes'] = len(tops)
            if not structural and same_para:
                text = paras[u]
                frm = text[s0:e1]
                to = text[s0:e0] + w_text[tops[0]] + text[s1:e1]
                # widen until the place is unique in its paragraph
                a_i, b_i = pa, pb
                while text.count(frm) > 1 and (a_i > 0 or b_i < len(base) - 1):
                    grown = False
                    if a_i - 1 >= 0 and base[a_i - 1] != PARA and boffs[a_i - 1][0] == u:
                        a_i -= 1
                        grown = True
                    if b_i + 1 < len(base) and base[b_i + 1] != PARA and boffs[b_i + 1][0] == u:
                        b_i += 1
                        grown = True
                    if not grown:
                        break
                    ns, ne = boffs[a_i][1], boffs[b_i][2]
                    frm = text[ns:ne]
                    to = text[ns:s0] + text[s0:e0] + w_text[tops[0]] + text[s1:e1] + text[e1:ne]
                if text.count(frm) == 1 and frm != to:
                    loc['patch'] = {'canto': cid, 'para': u, 'from': frm, 'to': re.sub(r'  +', ' ', to)}
            if cls == 'auto' and (structural or 'patch' not in loc or not safe(b_text, w_text[tops[0]])):
                loc['class'] = 'probable'
        if structural:
            loc['structural'] = True
        result.append(loc)
    # a row of the text lost altogether: the witnesses have a dozen or more
    # atoms between two neighbouring atoms of the base
    gaps = {}
    for sid, m in maps.items():
        idx = sorted(m)
        for p_, q_ in zip(idx, idx[1:]):
            if q_ == p_ + 1 and 12 < m[q_] - m[p_] - 1 <= 60:
                gaps.setdefault(q_, {})[sid] = watoms[sid][m[p_] + 1:m[q_]]
    for q_, by in gaps.items():
        good = {}
        for sid, wa in by.items():
            if sum(1 for a in wa if a.isdigit()) >= 2:
                continue
            words = [a for a in wa if a[0].isalpha()]
            if words and sum(1 for a in words if known(a)) >= 0.85 * len(words):
                good[sid] = wa
        if not good:
            continue
        sids = sorted(good)
        agreeing = 1
        for i in range(len(sids)):
            n_like = 1 + sum(1 for j in range(len(sids)) if j != i and difflib.SequenceMatcher(
                None, good[sids[i]], good[sids[j]], autojunk=False).ratio() >= 0.7)
            agreeing = max(agreeing, n_like)
        inside = base[q_] != PARA and base[q_ - 1] != PARA
        if agreeing >= 2 or inside:
            u, s1, e1 = boffs[q_]
            first = good[sids[0]]
            loc = {'canto': cid, 'para': u, 'class': 'missing-text', 'base': '',
                   'top': ' '.join(first[:14]) + (' ...' if len(first) > 14 else ''), 'votes': agreeing,
                   'wit': {sid: ' '.join(wa) for sid, wa in good.items()}}
            if base[q_] != PARA:
                loc['span'] = [max(0, s1 - 1), e1]
                loc['inner'] = [max(0, s1 - 1), e1]
                loc['span_text'] = paras[u][max(0, s1 - 1):e1]
                loc['inner_text'] = loc['span_text']
            result.append(loc)
    coverage = {sid: round(len(maps[sid]) / max(1, len(base)), 3) for sid in maps}
    # words in no word list that the witnesses do not dispute
    disputed = [False] * len(base)
    for pa, pb, _ in loci(base, maps):
        for i in range(max(pa, 0), min(pb + 1, len(base))):
            disputed[i] = True
    unknown = []
    for i, a in enumerate(base):
        if a == PARA or disputed[i] or known(a):
            continue
        support = sum(1 for sid in maps if i in maps[sid])
        u, s, e = boffs[i]
        unknown.append({'canto': cid, 'para': u, 'word': a, 'span': [s, e], 'support': support})
    return result, coverage, unknown


# ---------------------------------------------------------------- flags

def load_checked():
    return X.load_json(CHECKED, [])


def is_checked(checked, cid, para, text, span):
    """Has the page image been looked at for this place?  An entry of
    checked.json covers the place if its text occurs in the paragraph and
    overlaps it."""
    for ent in checked:
        if ent.get('canto') != cid or ent.get('para') != para:
            continue
        t = ent.get('text', '')
        if not t:
            return True                        # the whole paragraph
        pos = text.find(t)
        while pos >= 0:
            if span is None or (pos <= span[1] and pos + len(t) >= span[0]):
                return True
            pos = text.find(t, pos + 1)
    return False


def main(argv):
    apply = '--apply' in argv
    only = [a for a in argv if re.match(r'^(inf|pur|par)(-\d\d)?$', a)]
    cantos, report, problems = X.build(write=False)
    checked = load_checked()
    notes = {r['id']: r for r in report}
    all_loci, cov, unknown, review = [], {}, [], []
    flags = {}
    order = sorted(cantos, key=lambda c: (['inf', 'pur', 'par'].index(c[:3]), c))
    for cid in order:
        if only and not any(cid == o or cid.startswith(o + '-') for o in only):
            continue
        cantica = cid[:3]
        res, coverage, unk = collate_canto(cid, cantos[cid]['paras'], cantos[cid]['source'], cantica)
        cov[cid] = coverage
        verified = cantos[cid]['verified']
        nflag = 0
        for loc in res:
            if loc['class'] == 'ok':
                continue
            text = cantos[cid]['paras'][loc['para']]
            if verified or is_checked(checked, cid, loc['para'], text, loc.get('inner')):
                loc['settled'] = True
                continue
            nflag += 1
            review.append(loc)
        for u in unk:
            text = cantos[cid]['paras'][u['para']]
            u['settled'] = bool(verified or u['support'] >= 2 or is_checked(checked, cid, u['para'], text, u['span']))
            if not u['settled']:
                nflag += 1
                review.append({'canto': cid, 'para': u['para'], 'class': 'unknown-word', 'base': u['word'],
                               'span': u['span'], 'inner': u['span'], 'span_text': u['word'],
                               'inner_text': u['word'], 'wit': {}})
        r = notes[cid]
        for kind, items in (('note', r['notes']), ('odd', r['odd']), ('layout', r['warn'])):
            for it in items:
                if verified and kind != 'odd' and not it.startswith(('quotes', 'brackets')):
                    continue
                m = re.search(r'para (\d+)', it)
                para = int(m.group(1)) if m else None
                if para is not None and not it.startswith(('quotes', 'brackets')) and kind != 'odd' \
                        and is_checked(checked, cid, para, cantos[cid]['paras'][para], None):
                    continue
                if any(e.get('canto') == cid and e.get('layout') and e['layout'] in it for e in checked):
                    continue                   # this very note was looked at (decide.py: X CANTO NOTE-TEXT)
                if kind == 'note' and it.startswith('hyphen') and any(
                        e.get('hyphen') and ('-> ' + e['hyphen']) in it for e in checked):
                    continue
                ent = {'canto': cid, 'para': para, 'class': kind, 'base': it, 'wit': {}}
                if para is not None:
                    text = cantos[cid]['paras'][para]
                    pos, ln = -1, 0
                    m2 = re.search(r'near "(.*)"$', it)
                    if m2:
                        pos, ln = text.find(m2.group(1)), len(m2.group(1))
                    elif kind == 'odd':
                        bad = [k for k, ch in enumerate(text) if not X.ALLOWED.match(ch)]
                        if bad:
                            pos, ln = max(0, bad[0] - 12), 24 + bad[-1] - bad[0] if bad[-1] - bad[0] < 40 else 24
                    if pos >= 0:
                        ent['span'] = ent['inner'] = [pos, min(len(text), pos + ln)]
                        ent['span_text'] = ent['inner_text'] = text[pos:pos + ln]
                        # the same place as a disagreement of the scans already listed?
                        if any(o['canto'] == cid and o.get('para') == para and o.get('span') and o is not ent
                               and o['class'] not in ('note', 'odd', 'layout')
                               and o['span'][0] <= ent['span'][1] and ent['span'][0] <= o['span'][1] for o in review[-400:]):
                            continue
                nflag += 1
                review.append(ent)
        flags[cid] = nflag
        all_loci.extend(res)
        unknown.extend(unk)
        sys.stderr.write('%s: %d loci, %d flags (%s)\n' % (cid, len(res), nflag, ' '.join(
            '%s=%.2f' % (k[-8:], v) for k, v in coverage.items())))
    order_ix = {c: k for k, c in enumerate(order)}
    review.sort(key=lambda e: (order_ix[e['canto']], -1 if e.get('para') is None else e['para'],
                               (e.get('span') or [0])[0]))
    suffix = ('_' + '_'.join(only)) if only else ''
    with open(os.path.join(OUT, 'collation%s.json' % suffix), 'w', encoding='utf-8') as fh:
        json.dump({'coverage': cov, 'loci': all_loci, 'unknown': unknown}, fh, ensure_ascii=False, indent=0)
    with open(os.path.join(OUT, 'review%s.json' % suffix), 'w', encoding='utf-8') as fh:
        json.dump(review, fh, ensure_ascii=False, indent=0)
    proposed = []
    for loc in all_loci:
        if loc['class'] == 'auto' and 'patch' in loc and not loc.get('settled'):
            pt = dict(loc['patch'])
            pt['why'] = 'consensus: %d other scans read this; the base OCR reading is not a word' % loc['votes']
            proposed.append(pt)
    with open(os.path.join(OUT, 'proposed%s.json' % suffix), 'w', encoding='utf-8') as fh:
        json.dump(proposed, fh, ensure_ascii=False, indent=0)
    kinds = {}
    for loc in all_loci:
        k = loc['class'] + ('*' if loc.get('settled') else '')
        kinds[k] = kinds.get(k, 0) + 1
    print('loci', len(all_loci), ' '.join('%s=%d' % kv for kv in sorted(kinds.items())))
    print('words in no word list: %d (%d not confirmed by two scans)' % (
        len(unknown), sum(1 for u in unknown if not u['settled'])))
    print('open flags: %d; proposed patches: %d' % (sum(flags.values()), len(proposed)))
    if not only:
        with open(FLAGS, 'w', encoding='utf-8') as fh:
            json.dump(flags, fh, indent=0)
            fh.write('\n')
        # the places where the printings differ (class `variant`), for the report
        variants = []
        for loc in all_loci:
            if loc['class'] != 'variant':
                continue
            other = loc.get('top', '')
            scans = sorted(s for s, r in loc.get('wit', {}).items() if r == other)
            variants.append({'canto': loc['canto'], 'para': loc['para'], 'text': loc.get('span_text', ''),
                             'base': loc.get('base', '').strip(), 'other': other.strip(),
                             'base_printing': PRINTING.get(cantos[loc['canto']]['source']),
                             'other_printings': sorted({PRINTING.get(s) for s in scans if PRINTING.get(s)})})
        with open(VARIANTS, 'w', encoding='utf-8') as fh:
            fh.write('[\n' + ',\n'.join(json.dumps(v, ensure_ascii=False) for v in variants) + '\n]\n')
    if apply and proposed:
        patches = X.load_json(X.PATCHES, [])
        patches.extend(proposed)
        write_patches(patches)
        print('added %d patches to patches.json; run again to see what is left' % len(proposed))
    if not only:
        X.build()


def write_patches(patches):
    with open(X.PATCHES, 'w', encoding='utf-8') as fh:
        fh.write('[\n')
        fh.write(',\n'.join(json.dumps(pt, ensure_ascii=False) for pt in patches))
        fh.write('\n]\n')


if __name__ == '__main__':
    main(sys.argv[1:])
