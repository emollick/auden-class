#!/usr/bin/env python3
"""Helper for checking the text against the page images (not part of the
build: it needs the network, curl and ImageMagick's `convert`).

    pageview.py page  SCAN LEAF                 whole page, text column only
    pageview.py para  CANTO PARA [PARA_TO]      the rows of one or more paragraphs
    pageview.py rows  SCAN LEAF Y0 Y1           a horizontal band of a page
    pageview.py fetch CANTO ...                 download every English page of these cantos
    pageview.py proof CANTO ...                 every printed row with the text of cantos.json under it
    pageview.py find SCAN LEAF "words"          the line holding these words in any scan (other printings)
    pageview.py review REVIEW.json START COUNT  strips for the open flags listed by collate.py
    pageview.py review REVIEW.json I,J,K        the same for chosen entries
    pageview.py strips OUT.jpg CANTO:PARA[:WORD] ...   several paragraphs' rows (or the
                                                 row holding WORD) stacked in one image

Page images are fetched once from archive.org (full size) into
.cache/temple/pages/ and crops are written to .cache/temple/crops/.
"""
import difflib
import json
import os
import re
import subprocess
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
CACHE = os.path.join(ROOT, '.cache', 'temple')
PAGES = os.path.join(CACHE, 'pages')
CROPS = os.path.join(CACHE, 'crops')
UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'


def fetch(scan, leaf):
    os.makedirs(PAGES, exist_ok=True)
    out = os.path.join(PAGES, '%s_n%d.jpg' % (scan, leaf))
    if os.path.exists(out) and os.path.getsize(out) > 20000:
        return out
    url = 'https://archive.org/download/%s/page/n%d.jpg' % (scan, leaf)
    tmp = '%s.part%d' % (out, os.getpid())
    for attempt in range(5):
        code = subprocess.run(['curl', '-sS', '-L', '-A', UA, '--max-time', '180', '-o', tmp, '-w', '%{http_code}', url],
                              capture_output=True, text=True).stdout.strip()
        time.sleep(4)
        if code == '200' and os.path.getsize(tmp) > 20000:
            os.replace(tmp, out)
            return out
        sys.stderr.write('fetch %s n%d: HTTP %s\n' % (scan, leaf, code))
        time.sleep(15 * (attempt + 1))
    raise SystemExit('could not fetch %s leaf %d' % (scan, leaf))


def size(path):
    out = subprocess.run(['identify', '-format', '%w %h', path], capture_output=True, text=True).stdout.split()
    return int(out[0]), int(out[1])


def crop(scan, leaf, x0, y0, x1, y1, out, width=None, xml_w=None):
    """Crop in the coordinates of the OCR (the djvu.xml page size)."""
    src = fetch(scan, leaf)
    w, h = size(src)
    k = (w / xml_w) if xml_w else 1.0
    x0, y0, x1, y1 = [int(round(v * k)) for v in (x0, y0, x1, y1)]
    x0, y0 = max(0, x0), max(0, y0)
    x1, y1 = min(w, x1), min(h, y1)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    cmd = ['convert', src, '-crop', '%dx%d+%d+%d' % (x1 - x0, y1 - y0, x0, y0), '+repage']
    if width:
        cmd += ['-resize', '%dx' % width]
    cmd += ['-quality', '88', out]
    subprocess.run(cmd, check=True)
    return out


def layout():
    with open(os.path.join(CACHE, 'layout.json'), encoding='utf-8') as fh:
        return json.load(fh)


def cantos():
    with open(os.path.join(HERE, 'cantos.json'), encoding='utf-8') as fh:
        return json.load(fh)


def parsed_width(scan, leaf):
    with open(os.path.join(CACHE, 'parsed', scan + '.json'), encoding='utf-8') as fh:
        pages = json.load(fh)
    return pages[leaf]['w'], pages[leaf]['h']


def para_boxes(lay, cid, a, b):
    """[(leaf, x0, y0, x1, y1)] covering paragraphs a..b of a canto."""
    boxes = []
    for i in range(a, b + 1):
        for r in lay[cid][i]:
            if boxes and boxes[-1][0] == r['leaf']:
                lf, x0, y0, x1, y1 = boxes[-1]
                boxes[-1] = (lf, min(x0, r['x0']), min(y0, r['y0']), max(x1, r['x1']), max(y1, r['y1']))
            else:
                boxes.append((r['leaf'], r['x0'], r['y0'], r['x1'], r['y1']))
    return boxes


ATOM = re.compile(r"[^\W\d_]+(?:['-][^\W\d_]+)*|\d+|\S")
FONT = 'DejaVu-Serif'


def _key(a):
    return re.sub(r'[\W_]', '', a).lower() or a


def map_text_to_rows(text, rows):
    """For every atom of a paragraph's final text: (start, end, row index,
    place along the row from 0 to 1)."""
    A = [(m.group(0), m.start(), m.end()) for m in ATOM.finditer(text)]
    R = []
    for k, r in enumerate(rows):
        n = max(1, len(r['text']))
        for m in ATOM.finditer(r['text']):
            R.append((m.group(0), k, (m.start() + m.end()) / 2.0 / n))
    sm = difflib.SequenceMatcher(None, [_key(a[0]) for a in A], [_key(x[0]) for x in R], autojunk=False)
    got = {}
    for tag, i1, i2, j1, j2 in sm.get_opcodes():
        if tag == 'equal':
            for d in range(i2 - i1):
                got[i1 + d] = (R[j1 + d][1], R[j1 + d][2])
    out = []
    last = (0, 0.0)
    for i, (a, s, e) in enumerate(A):
        if i in got:
            last = got[i]
            if out and last[0] < out[-1][2]:
                last = (out[-1][2], out[-1][3])
        else:
            # between its matched neighbours
            nxt = None
            for j in range(i + 1, min(len(A), i + 8)):
                if j in got:
                    nxt = got[j]
                    break
            if nxt is not None and nxt[0] == last[0]:
                last = (last[0], (last[1] + nxt[1]) / 2.0)
            elif nxt is not None and nxt[0] > last[0] and last[1] > 0.93:
                last = (last[0], 1.0)
        out.append((s, e, last[0], last[1]))
    return out


def lines_for_rows(text, rows):
    """The final text of a paragraph cut where the printed rows break."""
    amap = map_text_to_rows(text, rows)
    cuts = [0] * len(rows)
    seen = set()
    for s, e, k, _ in amap:
        if k not in seen:
            seen.add(k)
            cuts[k] = s
    for k in range(len(rows)):
        if k not in seen:
            cuts[k] = None
    out = []
    for k in range(len(rows)):
        if cuts[k] is None:
            out.append('')
            continue
        nxt = len(text)
        for j in range(k + 1, len(rows)):
            if cuts[j] is not None:
                nxt = cuts[j]
                break
        out.append(text[cuts[k]:nxt].strip())
    if out:
        first = next((k for k in range(len(rows)) if cuts[k] is not None), None)
        if first is not None and cuts[first] > 0:
            out[first] = text[:cuts[first]] + out[first]
    return out


def _esc(t):
    t = t.replace('\\', '\\\\').replace('%', '%%')
    if t.startswith('@'):
        t = ' ' + t
    return t or ' '


def proof(cid, width=1000, pt=25, per=5):
    """Each printed row of a canto with the text of cantos.json under it."""
    lay, cs = layout(), cantos()
    scan = cs[cid]['source']
    paras = cs[cid]['paras']
    by_leaf = {}
    for i, rows in enumerate(lay[cid]):
        lines = lines_for_rows(paras[i], rows)
        for r, line in zip(rows, lines):
            by_leaf.setdefault(r['leaf'], []).append((i, r, line))
    outs = []
    for leaf in sorted(by_leaf):
        items = by_leaf[leaf]
        src = fetch(scan, leaf)
        w, h = size(src)
        pw, ph = parsed_width(scan, leaf)
        k = w / float(pw)
        x0 = max(0, int((min(r['x0'] for _, r, _ in items) - 40) * k))
        x1 = min(w, int((max(r['x1'] for _, r, _ in items) + 40) * k))
        # groups of paragraphs per image
        pids = sorted({i for i, _, _ in items})
        ngrp = max(1, -(-len(pids) // 6))
        per = -(-len(pids) // ngrp)
        for g in range(0, len(pids), per):
            grp = set(pids[g:g + per])
            cmd = ['convert', '-respect-parentheses', src, '-write', 'mpr:pg', '+delete']
            cmd += ['(', '-size', '%dx26' % width, 'xc:#dddddd', '-font', 'DejaVu-Sans', '-pointsize', '18', '-fill', '#aa0000',
                    '-gravity', 'West', '-annotate', '+6+0', '%s leaf %d paras %d-%d' % (cid, leaf, min(grp), max(grp)), ')']
            lastp = None
            for i, r, line in items:
                if i not in grp:
                    continue
                if i != lastp:
                    cmd += ['(', '-size', '%dx20' % width, 'xc:#eeeeee', '-font', 'DejaVu-Sans', '-pointsize', '15',
                            '-fill', '#aa0000', '-gravity', 'West', '-annotate', '+6+0', 'para %d' % i, ')']
                    lastp = i
                y0 = max(0, int((r['y0'] - 9) * k))
                y1 = min(h, int((r['y1'] + 11) * k))
                cmd += ['(', 'mpr:pg', '+gravity', '-crop', '%dx%d+%d+%d' % (x1 - x0, y1 - y0, x0, y0), '+repage',
                        '-resize', '%dx' % width, ')']
                cmd += ['(', '+size', '-background', 'white', '-fill', '#002a9a', '-font', FONT, '-pointsize', str(pt),
                        'label:' + _esc(line), '-gravity', 'West', '-background', 'white', '-extent', '%dx%d' % (width, pt + 12), ')']
            out = os.path.join(CROPS, 'proof_%s_n%d_%d.jpg' % (cid, leaf, g // per))
            os.makedirs(CROPS, exist_ok=True)
            subprocess.run(cmd + ['-append', '-quality', '85', out], check=True)
            outs.append(out)
    return outs


def find_layout_row(lay, cid, note):
    m = re.match(r'leaf (\d+):', note)
    if not m:
        return None
    leaf = int(m.group(1))
    for i, rows in enumerate(lay[cid]):
        for k, r in enumerate(rows):
            if r['leaf'] == leaf and r['text'][:40] and note.endswith(r['text'][:40]):
                return i, k
    return None


def review(path, which, out, width=1000, per_image=19):
    """Strips of the page images for entries of a review.json: every printed
    row that an entry touches, once, labelled with the entries on it."""
    with open(path, encoding='utf-8') as fh:
        items = json.load(fh)
    lay, cs = layout(), cantos()
    strips, index = [], {}
    for n in which:
        if n >= len(items):
            continue
        it = items[n]
        cid = it['canto']
        scan = cs[cid]['source']
        para = it.get('para')
        rows = []
        if it['class'] == 'layout':
            hit = find_layout_row(lay, cid, it['base'])
            if hit:
                i, kk = hit
                r = lay[cid][i][kk]
                flat = [x for rr in lay[cid] for x in rr]
                at = flat.index(r)
                rows = [x for x in flat[max(0, at - 1):at + 2] if x['leaf'] == r['leaf']]
        elif para is not None and para < len(lay[cid]) and it.get('span'):
            rows_p = lay[cid][para]
            text = cs[cid]['paras'][para]
            s0, s1 = it.get('inner') or it['span']
            st = (it.get('inner_text') or it.get('span_text') or '').strip()
            if st and text[s0:s1].strip() != st and st in text:
                s0 = text.find(st)                 # the text has changed since the list was made
                s1 = s0 + len(st)
            amap = map_text_to_rows(text, rows_p)
            ks = sorted({k for s, e, k, f in amap if e >= s0 and s <= s1})
            if not ks and amap:
                ks = [amap[0][2]]
            rows = [rows_p[k] for k in ks[:3]]
        elif para is not None and para < len(lay[cid]):
            rows = lay[cid][para][:4]
        for r in rows:
            key = (cid, r['leaf'], r['y0'])
            if key not in index:
                index[key] = len(strips)
                strips.append({'cid': cid, 'scan': scan, 'r': r, 'idx': [n], 'para': para})
            elif n not in strips[index[key]]['idx']:
                strips[index[key]]['idx'].append(n)
        if it['class'] in ('note', 'odd', 'layout'):
            shown = re.sub(r'^para \d+: ', '', re.sub(r'^(quotes|lint|brackets|hyphen): (para \d+: )?', r'\1: ', it['base']))[:110]
        elif it.get('span') and it.get('inner') and para is not None:
            text = cs[cid]['paras'][para]
            a0 = max(0, it['span'][0] - 10)
            b0 = min(len(text), it['span'][1] + 10)
            shown = text[a0:it['inner'][0]] + '{' + text[it['inner'][0]:it['inner'][1]] + '}' + text[it['inner'][1]:b0]
        else:
            shown = it['base'][:70]
        desc = '%d %s:%s %s | %s' % (n, cid[4:], para, it['class'][:5], shown.replace('\n', ' '))
        if it.get('top') is not None:
            desc += ' => ' + it['top'][:44]
        print(desc)
    return render_strips(strips, out, width, per_image)


def render_strips(strips, out, width=1000, per_image=19):
    """strips: [{'cid', 'scan', 'r' (a layout row), 'idx' (labels), 'para'}] -> images."""
    outs = []
    lay = layout()
    cols = {}
    for cid, paras in lay.items():
        for rows in paras:
            for r in rows:
                key = (cid, r['leaf'])
                c = cols.get(key)
                cols[key] = (min(c[0], r['x0']), max(c[1], r['x1'])) if c else (r['x0'], r['x1'])
    for g in range(0, len(strips), per_image):
        parts, tmp = [], []
        for bi, s in enumerate(strips[g:g + per_image]):
            r = s['r']
            pw, ph = parsed_width(s['scan'], r['leaf'])
            hh = r['y1'] - r['y0']
            part = os.path.join(CROPS, 'rv_%d_%d.png' % (os.getpid(), bi))
            cx0, cx1 = cols.get((s['cid'], r['leaf']), (r['x0'], r['x1']))
            crop(s['scan'], r['leaf'], max(0, cx0 - 40), int(r['y0'] - 0.28 * hh), min(pw, cx1 + 40),
                 int(r['y1'] + 0.28 * hh), part, width=width, xml_w=pw)
            lab = os.path.join(CROPS, 'rv_%d_%d_l.png' % (os.getpid(), bi))
            subprocess.run(['convert', part, '-background', '#eeeeee', '-fill', '#aa0000', '-font', 'DejaVu-Sans',
                            '-pointsize', '16', '-gravity', 'NorthWest', '-splice', '0x20', '-annotate', '+4+1',
                            _esc('%s   %s:%s  leaf %d' % (','.join(map(str, s['idx'])), s['cid'], s['para'], r['leaf'])), lab],
                           check=True)
            tmp += [part, lab]
            parts.append(lab)
        if parts:
            o = out if g == 0 else out.replace('.jpg', '_%d.jpg' % (g // per_image))
            subprocess.run(['convert'] + parts + ['-append', '-quality', '86', o], check=True)
            outs.append(o)
            print(o)
        for t in tmp:
            try:
                os.remove(t)
            except OSError:
                pass
    return outs


def word_strips(words, out, skip_verified=True):
    """The printed row of every occurrence of some words of cantos.json."""
    lay, cs = layout(), cantos()
    strips = []
    for cid in cs:
        if skip_verified and cs[cid].get('verified'):
            continue
        for i, text in enumerate(cs[cid]['paras']):
            for w in words:
                for m in re.finditer(r'(?<![^\W\d_])' + re.escape(w) + r'(?![^\W\d_])', text):
                    rows_p = lay[cid][i]
                    amap = map_text_to_rows(text, rows_p)
                    ks = sorted({k for s, e, k, f in amap if e >= m.start() and s <= m.end()})
                    for k in ks[:2]:
                        strips.append({'cid': cid, 'scan': cs[cid]['source'], 'r': rows_p[k], 'idx': [w], 'para': i})
    return render_strips(strips, out)


def main(argv):
    mode = argv[0]
    if mode == 'page':
        scan, leaf = argv[1], int(argv[2])
        w, h = parsed_width(scan, leaf)
        out = os.path.join(CROPS, '%s_n%d_page.jpg' % (scan, leaf))
        print(crop(scan, leaf, 0, 0, w, h, out, width=int(argv[3]) if len(argv) > 3 else 1100, xml_w=w))
    elif mode == 'rows':
        scan, leaf, y0, y1 = argv[1], int(argv[2]), int(argv[3]), int(argv[4])
        w, h = parsed_width(scan, leaf)
        out = os.path.join(CROPS, '%s_n%d_%d_%d.jpg' % (scan, leaf, y0, y1))
        print(crop(scan, leaf, 0, y0, w, y1, out, width=int(argv[5]) if len(argv) > 5 else 1400, xml_w=w))
    elif mode == 'find':
        # pageview.py find SCAN LEAF "words" [SPAN]: the OCR line of any scan holding these
        # words, looked for on LEAF and up to SPAN leaves either side; cropped with a little context
        scan, leaf, words = argv[1], int(argv[2]), argv[3]
        span = int(argv[4]) if len(argv) > 4 else 3
        with open(os.path.join(CACHE, 'parsed', scan + '.json'), encoding='utf-8') as fh:
            pages = json.load(fh)
        key = re.sub(r'\W+', '', words).lower()
        done = False
        for d in sorted(range(-span, span + 1), key=abs):
            lf = leaf + d
            if not 0 <= lf < len(pages):
                continue
            for toks in pages[lf]['lines']:
                text = ' '.join(t[4] for t in toks)
                if key in re.sub(r'\W+', '', text).lower():
                    y0 = min(t[1] for t in toks)
                    y1 = max(t[3] for t in toks)
                    hh = y1 - y0
                    out = os.path.join(CROPS, 'find_%s_n%d_%d.jpg' % (scan, lf, y0))
                    pw = pages[lf]['w']
                    print(crop(scan, lf, 0, y0 - int(0.9 * hh), pw, y1 + int(0.9 * hh), out, width=1100, xml_w=pw))
                    done = True
                    break
            if done:
                break
        if not done:
            print('not found')
    elif mode == 'ctx':
        # pageview.py ctx OUT.jpg CANTO:PARA:WORD ... : the row holding WORD with the rows around it (left part)
        out = argv[1]
        lay, cs = layout(), cantos()
        labs = []
        for n, spec in enumerate(argv[2:]):
            cid, para, word = spec.split(':', 2)
            scan = cs[cid]['source']
            flat = [x for rr in lay[cid] for x in rr]
            rows = lay[cid][int(para)]
            hit = [r for r in rows if word in r['text']] or rows[:1]
            r = hit[0]
            at = flat.index(r)
            near = [x for x in flat[max(0, at - 2):at + 3] if x['leaf'] == r['leaf']]
            pw, ph = parsed_width(scan, r['leaf'])
            part = os.path.join(CROPS, 'ctx_%d.png' % n)
            crop(scan, r['leaf'], 0, min(x['y0'] for x in near) - 8, int(pw * 0.7), max(x['y1'] for x in near) + 8,
                 part, width=800, xml_w=pw)
            lab = os.path.join(CROPS, 'ctx_%d_l.png' % n)
            subprocess.run(['convert', part, '-background', '#eeeeee', '-fill', '#aa0000', '-font', 'DejaVu-Sans',
                            '-pointsize', '16', '-gravity', 'NorthWest', '-splice', '0x20', '-annotate', '+4+1',
                            '%s leaf %d' % (spec, r['leaf']), lab], check=True)
            labs.append(lab)
        subprocess.run(['convert'] + labs + ['-append', '-quality', '86', out], check=True)
        print(out)
    elif mode == 'proof':
        for cid in argv[1:]:
            for o in proof(cid):
                print(o)
    elif mode == 'review':
        path = argv[1]
        if not os.path.isabs(path):
            path = os.path.join(CACHE, path)
        if ',' in argv[2] or len(argv) < 4:
            which = [int(x) for x in argv[2].split(',') if x]
            out = os.path.join(CROPS, 'review_%d_etc.jpg' % which[0])
        else:
            which = list(range(int(argv[2]), int(argv[2]) + int(argv[3])))
            out = os.path.join(CROPS, 'review_%s_%s.jpg' % (argv[2], argv[3]))
        review(path, which, out)
    elif mode == 'zoom':
        # pageview.py zoom OUT.jpg CANTO:PARA:WORD ... : the place of WORD in its printed row, enlarged
        out = argv[1]
        lay, cs = layout(), cantos()
        parts = []
        for k, spec in enumerate(argv[2:]):
            cid, a, word = spec.split(':', 2)
            scan = cs[cid]['source']
            rows = [r for r in lay[cid][int(a)] if word in r['text']] or lay[cid][int(a)][-1:]
            r = rows[0]
            n = max(1, len(r['text']))
            at = r['text'].find(word)
            f = ((at if at >= 0 else n) + len(word) / 2.0) / n
            pw, ph = parsed_width(scan, r['leaf'])
            xc = r['x0'] + f * (r['x1'] - r['x0'])
            half = 0.17 * pw
            xa = max(0, min(xc - half, pw - 2 * half))
            hh = r['y1'] - r['y0']
            part = os.path.join(CROPS, 'zoom_%d.jpg' % k)
            crop(scan, r['leaf'], int(xa), int(r['y0'] - 0.5 * hh), int(xa + 2 * half), int(r['y1'] + 0.5 * hh), part,
                 width=900, xml_w=pw)
            lab = os.path.join(CROPS, 'zoom_%d_l.jpg' % k)
            subprocess.run(['convert', part, '-background', 'white', '-fill', 'red', '-pointsize', '20',
                            '-gravity', 'NorthWest', '-splice', '0x24', '-annotate', '+4+2', _esc(spec), lab], check=True)
            parts.append(lab)
        subprocess.run(['convert'] + parts + ['-append', '-quality', '88', out], check=True)
        print(out)
    elif mode == 'reviewc':
        # pageview.py reviewc REVIEW.json CANTO ... : all open flags of these cantos
        path = argv[1]
        if not os.path.isabs(path):
            path = os.path.join(CACHE, path)
        with open(path, encoding='utf-8') as fh:
            items = json.load(fh)
        which = [n for n, it in enumerate(items) if it['canto'] in argv[2:]]
        review(path, which, os.path.join(CROPS, 'rc_%s.jpg' % argv[2]))
    elif mode == 'words':
        # pageview.py words OUT.jpg WORD ... : the printed row of every occurrence (unverified cantos)
        word_strips(argv[2:], argv[1])
    elif mode == 'fetch':
        # pageview.py fetch CANTO ... : all English pages of these cantos (base scan)
        lay, cs = layout(), cantos()
        for cid in argv[1:]:
            scan = cs[cid]['source']
            for lf in sorted({r['leaf'] for p in lay[cid] for r in p}):
                fetch(scan, lf)
            print(cid, 'fetched', flush=True)
    elif mode == 'para':
        cid, a = argv[1], int(argv[2])
        b = int(argv[3]) if len(argv) > 3 else a
        lay, cs = layout(), cantos()
        scan = cs[cid]['source']
        for lf, x0, y0, x1, y1 in para_boxes(lay, cid, a, b):
            w, h = parsed_width(scan, lf)
            out = os.path.join(CROPS, '%s_%d_%d_n%d.jpg' % (cid, a, b, lf))
            print(crop(scan, lf, 0, y0 - 25, w, y1 + 25, out, width=1400, xml_w=w))
    elif mode == 'strips':
        out = argv[1]
        lay, cs = layout(), cantos()
        parts = []
        for k, spec in enumerate(argv[2:]):
            # CANTO:PARA[:WORD[:L|M|R]] -- L, M, R: only the left, middle or right
            # half of the row, twice as large (for doubtful punctuation)
            bits = spec.split(':')
            cid, a = bits[0], int(bits[1])
            word = bits[2] if len(bits) > 2 else None
            half = bits[3] if len(bits) > 3 else None
            scan = cs[cid]['source']
            rows = lay[cid][a]
            if word:
                hit = [r for r in rows if word in r['text']]
                rows = hit or rows
            lf = rows[0]['leaf']
            rows = [r for r in rows if r['leaf'] == lf]
            y0 = min(r['y0'] for r in rows) - 22
            y1 = max(r['y1'] for r in rows) + 22
            w, h = parsed_width(scan, lf)
            part = os.path.join(CROPS, 'strip_%d.jpg' % k)
            xa, xb = 0, w
            if half:
                ra = min(r['x0'] for r in rows)
                rb = max(r['x1'] for r in rows)
                mid = (ra + rb) // 2
                span = (rb - ra) // 2 + 60
                xa, xb = {'L': (ra - 40, ra - 40 + span), 'R': (rb + 60 - span, rb + 60),
                          'M': (mid - span // 2, mid + span // 2)}[half]
                xa, xb = max(0, xa), min(w, xb)
            crop(scan, lf, xa, y0, xb, y1, part, width=1300, xml_w=w)
            lab = os.path.join(CROPS, 'strip_%d_l.jpg' % k)
            subprocess.run(['convert', part, '-background', 'white', '-fill', 'red', '-pointsize', '22',
                            '-gravity', 'NorthWest', '-splice', '0x26', '-annotate', '+4+2', spec, lab], check=True)
            parts.append(lab)
        subprocess.run(['convert'] + parts + ['-append', '-quality', '88', out], check=True)
        print(out)


if __name__ == '__main__':
    main(sys.argv[1:])
