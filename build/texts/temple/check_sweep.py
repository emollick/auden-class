"""Punctuation sweep (helper; not part of the build).

The collation does not flag a place where one scan alone differs from the
text: one OCR against several is usually the one that is wrong.  The
leave-one-out test on the verified cantos (check_recall.py) shows the
exception: a comma read for a full stop by most of the scans.  This lists
every such place in the cantos not read whole -- one or more clean OCR
readings that differ from the text only in a sentence mark (. , ; : ? !),
changed or present/absent -- so that each can be looked at in the page image.

    python3 check_sweep.py list              write sweep.json, print the counts
    python3 check_sweep.py show A B          zoomed crops of entries A..B-1 -> crops/sw_A.jpg

Decisions go through decide.py with sweep.json as the review file.
"""
import collections
import json
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import extract as X      # noqa: E402
import collate as C      # noqa: E402
import pageview as P     # noqa: E402

OUT = os.path.join(X.CACHE, 'sweep.json')
CLEAN = re.compile(r"^[A-Za-zÀ-ſ .,;:?!\"'()\[\]—¶-]*$")
MARK = re.compile(r"[.,;:?!]")


def norm(s):
    return re.sub(r'\s+', ' ', (s or '').replace('¶', ' ')).strip()


def shape(s):
    return MARK.sub('#', norm(s))


def bare(s):
    return re.sub(r'\s+', ' ', MARK.sub('', norm(s))).strip()


def make_list():
    with open(os.path.join(X.CACHE, 'collation.json'), encoding='utf-8') as fh:
        loci = json.load(fh)['loci']
    cantos = X.load_json(X.OUT_JSON, {})
    checked = C.load_checked()
    out = []
    kinds = collections.Counter()
    for l in loci:
        cid = l['canto']
        if l['class'] != 'ok' or cantos[cid]['verified'] or not l.get('span'):
            continue
        base = l.get('base') or ''
        wit = {s: r for s, r in (l.get('wit') or {}).items() if r is not None}
        diss = {}
        for s, r in wit.items():
            if norm(r) == norm(base) or not CLEAN.match(r):
                continue
            if shape(r) == shape(base):
                diss[s] = ('subst', r)
            elif bare(r) == bare(base):
                diss[s] = ('presence', r)
        if not diss:
            continue
        text = cantos[cid]['paras'][l['para']]
        st = l.get('span_text') or ''
        if st not in text:
            kinds['text changed since the collation'] += 1
            continue
        if C.is_checked(checked, cid, l['para'], text, l.get('inner')):
            kinds['already looked at'] += 1
            continue
        tops = collections.Counter(norm(r) for k, r in diss.values())
        top = tops.most_common(1)[0][0]
        kind = sorted({k for k, r in diss.values()})[0]
        ent = {'canto': cid, 'para': l['para'], 'class': 'punct', 'kind': kind, 'base': base,
               'wit': {s: r for s, (k, r) in diss.items()}, 'agree': sum(1 for r in wit.values() if norm(r) == norm(base)),
               'span': l['span'], 'inner': l.get('inner') or l['span'], 'span_text': st,
               'inner_text': l.get('inner_text') or st, 'top': top}
        b = norm(base)
        if b and st.count(b) == 1:
            ent['patch'] = {'canto': cid, 'para': l['para'], 'from': st, 'to': st.replace(b, top)}
        kinds[kind] += 1
        out.append(ent)
    order = sorted(cantos, key=lambda c: (['inf', 'pur', 'par'].index(c[:3]), c))
    ix = {c: k for k, c in enumerate(order)}
    out.sort(key=lambda e: (ix[e['canto']], e['para'], e['span'][0]))
    with open(OUT, 'w', encoding='utf-8') as fh:
        json.dump(out, fh, ensure_ascii=False, indent=0)
    print(len(out), 'places', dict(kinds))
    per = collections.Counter(e['canto'][:3] for e in out)
    print(dict(per))


def word_items(words):
    """Every occurrence of some words in cantos.json (all cantos), as items for show()."""
    cs = P.cantos()
    items = []
    for cid, v in cs.items():
        for i, text in enumerate(v['paras']):
            for w in words:
                for m in re.finditer(r'(?<![A-Za-zÀ-ſ])' + re.escape(w) + r'(?![A-Za-zÀ-ſ])', text):
                    items.append({'canto': cid, 'para': i, 'inner': [m.start(), m.end()], 'inner_text': m.group(0),
                                  'top': 'word', 'wit': {}, 'agree': 0, 'word': True})
    return items


def show(a, b, per_image=8, items=None, name='sw'):
    if items is None:
        items = X.load_json(OUT, [])
    lay, cs = P.layout(), P.cantos()
    parts = []
    for n in range(a, min(b, len(items))):
        it = items[n]
        cid, para = it['canto'], it['para']
        text = cs[cid]['paras'][para]
        rows = lay[cid][para]
        s0, s1 = it['inner']
        st = it['inner_text']
        if text[s0:s1] != st and st in text:
            s0 = text.find(st)
            s1 = s0 + len(st)
        amap = P.map_text_to_rows(text, rows)
        seg = text[s0:s1]
        m = MARK.search(seg)
        if it.get('word'):
            near = [(abs((s + e) / 2.0 - (s0 + s1) / 2.0), k, f) for s, e, k, f in amap if e > s0 and s < s1]
        elif m is None:
            # the text has no mark here: a mark would follow the word before the gap
            gap = s0 + (len(seg) - len(seg.lstrip())) if seg.strip() else s0
            near = [(gap - e, k, f) for s, e, k, f in amap if e <= gap + 1 and text[s:e].strip('"\'')]
            near = [x for x in near if x[0] >= -1]
        else:
            pos = s0 + m.start()
            near = [(abs((s + e) / 2.0 - pos), k, f) for s, e, k, f in amap if s <= pos < e]
        if not near:
            near = [(abs((s + e) / 2.0 - (s0 + s1) / 2.0), k, f) for s, e, k, f in amap]
        near.sort()
        _, k, f = near[0]
        r = rows[k]
        scan = cs[cid]['source']
        pw, ph = P.parsed_width(scan, r['leaf'])
        xc = r['x0'] + f * (r['x1'] - r['x0'])
        half = 0.19 * pw
        xa = max(0, min(xc - half, pw - 2 * half))
        hh = r['y1'] - r['y0']
        part = os.path.join(P.CROPS, 'sw_part_%d.png' % n)
        P.crop(scan, r['leaf'], int(xa), int(r['y0'] - 0.45 * hh), int(xa + 2 * half), int(r['y1'] + 0.45 * hh), part,
               width=900, xml_w=pw)
        c0 = max(0, s0 - 22)
        c1 = min(len(text), s1 + 22)
        shown = text[c0:s0] + '{' + text[s0:s1] + '}' + text[s1:c1]
        label = '%d  %s:%d  %s   => %s  (%d of %d scans; %d agree)' % (
            n, cid, para, shown, it['top'] or '(nothing)', len(it['wit']), len(it['wit']) + it['agree'], it['agree'])
        lab = os.path.join(P.CROPS, 'sw_part_%d_l.png' % n)
        subprocess.run(['convert', part, '-background', '#eeeeee', '-fill', '#aa0000', '-font', 'DejaVu-Sans',
                        '-pointsize', '17', '-gravity', 'NorthWest', '-splice', '0x24', '-annotate', '+4+2',
                        P._esc(label), lab], check=True)
        os.remove(part)
        parts.append(lab)
        print(label)
    outs = []
    for g in range(0, len(parts), per_image):
        o = os.path.join(P.CROPS, '%s_%d.jpg' % (name, a + g))
        subprocess.run(['convert'] + parts[g:g + per_image] + ['-append', '-quality', '88', o], check=True)
        outs.append(o)
        print(o)
    for p in parts:
        os.remove(p)


if __name__ == '__main__':
    if sys.argv[1] == 'list':
        make_list()
    elif sys.argv[1] == 'words':
        # python3 check_sweep.py words NAME WORD ... : every occurrence of the words, enlarged -> crops/NAME_0.jpg ...
        its = word_items(sys.argv[3:])
        show(0, len(its), items=its, name=sys.argv[2])
    else:
        show(int(sys.argv[2]), int(sys.argv[3]))
