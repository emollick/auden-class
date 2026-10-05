#!/usr/bin/env python3
"""Record decisions taken at the page images (helper; not part of the build).

    decide.py [REVIEW.json] < decisions

One decision per line (text after ' ## ' is the reason recorded):

    IDX y                    accept the reading the other scans propose
    IDX n                    the text stands as it is (-> checked.json)
    A-B n                    the same for every entry from A to B
    IDX start|cont           (layout entries) the row begins / continues a paragraph
    IDX = TEXT               put TEXT in place of the flagged words
    IDX s|FROM|TO|           substitution in that entry's paragraph
    CANTO PARA s|FROM|TO|    substitution in any paragraph
    CANTO PARA ok TEXT       TEXT in that paragraph was checked and stands
    L CANTO start|cont LEAF ROW-PREFIX     paragraph break override
    H FORM                   how a word broken at a line end is joined
    HC FORM                  the join the build made at a line end stands
    S CANTO PARA open|closed quotation state at the start of a paragraph
    X CANTO NOTE-TEXT        a layout warning looked at and found harmless

IDX is an index into review.json (as printed by rv.py / pageview.py review).
Every substitution is tried on the text as it stands with the patches so
far; nothing is written unless all lines are good."""
import json
import os
import re
import sys

import extract as X
import collate as C

args = [a for a in sys.argv[1:] if not a.startswith('-')]
rpath = args[0] if args else 'review.json'
if not os.path.isabs(rpath):
    rpath = os.path.join(X.CACHE, rpath)
review = X.load_json(rpath, [])
patches = X.load_json(X.PATCHES, [])
checked = X.load_json(C.CHECKED, [])
prepatch = X.load_json(os.path.join(X.CACHE, 'prepatch.json'), {})
current = {}


def text_of(cid):
    if cid not in current:
        paras = list(prepatch[cid])
        probs = []
        X.apply_patches(cid, paras, patches, probs)
        resets = {pt['para']: pt['open'] for pt in patches if pt.get('canto') == cid and pt.get('op') == 'state'}
        current[cid] = X.requote(paras, None, resets)
    return current[cid]


def add_patch(cid, para, frm, to, why, errors, line):
    paras = text_of(cid)
    if not 0 <= para < len(paras):
        errors.append('%s: no paragraph %d in %s' % (line, para, cid))
        return
    text = paras[para]
    hits = text.count(frm)
    if hits == 0:
        hits = len(X._find_loose(text, frm))
    if hits != 1:
        errors.append('%s: %r found %d times in %s para %d' % (line, frm, hits, cid, para))
        return
    if frm == to:
        errors.append('%s: nothing changes' % line)
        return
    pt = {'canto': cid, 'para': para, 'from': frm, 'to': to, 'why': why}
    patches.append(pt)
    current.pop(cid, None)


def expand(lines):
    """`A-B n ...` stands for the same decision on every entry from A to B."""
    for raw in lines:
        m = re.match(r'^(\d+)-(\d+)( .*)$', raw.rstrip('\n'))
        if m:
            for k in range(int(m.group(1)), int(m.group(2)) + 1):
                yield '%d%s' % (k, m.group(3))
        else:
            yield raw


errors = []
new_patches0 = len(patches)
new_checked0 = len(checked)
for raw in expand(sys.stdin):
    line = raw.rstrip('\n')
    if not line.strip() or line.lstrip().startswith('#'):
        continue
    why = 'image: read from the page image'
    if ' ## ' in line:
        line, why = line.split(' ## ', 1)
        why = why.strip()
        if not re.match(r'^(image|consensus|edition|judgment):', why):
            why = 'image: ' + why
    parts = line.split(' ', 2)
    head = parts[0]
    if head == 'L':
        _, cid, op, leaf, row = line.split(' ', 4)
        patches.append({'canto': cid, 'op': op, 'leaf': int(leaf), 'row': row, 'why': why})
        continue
    if head == 'H':
        patches.append({'op': 'hyphen', 'form': parts[1], 'why': why if ' ## ' in raw else 'judgment: line-end hyphen'})
        continue
    if head == 'HC':
        # HC JOINED-FORM: the join the build made at a line end was looked at and stands
        checked.append({'hyphen': parts[1], 'why': why if ' ## ' in raw else 'judgment: line-end hyphen'})
        continue
    if head == 'S':
        _, cid, para, st = line.split(' ')
        patches.append({'canto': cid, 'op': 'state', 'para': int(para), 'open': st == 'open', 'why': why})
        current.pop(cid, None)
        continue
    if head == 'X':
        _, cid, note = line.split(' ', 2)
        checked.append({'canto': cid, 'layout': note, 'why': why})
        continue
    if re.match(r'^(inf|pur|par)-\d\d$', head):
        cid, para, rest = head, int(parts[1]), parts[2]
        if rest.startswith('ok '):
            t = rest[3:]
            if t not in text_of(cid)[para]:
                errors.append('%s: text not in paragraph' % line)
            checked.append({'canto': cid, 'para': para, 'text': t, 'why': why})
            continue
        if rest == 'ok':
            checked.append({'canto': cid, 'para': para, 'text': '', 'why': why})
            continue
        if rest.startswith('s') and len(rest) > 2:
            d = rest[1]
            bits = rest.split(d)
            if len(bits) < 3:
                errors.append('%s: bad substitution' % line)
                continue
            add_patch(cid, para, bits[1], bits[2], why, errors, line)
            continue
        errors.append('%s: not understood' % line)
        continue
    if not head.isdigit():
        errors.append('%s: not understood' % line)
        continue
    idx = int(head)
    if idx >= len(review):
        errors.append('%s: no such entry' % line)
        continue
    it = review[idx]
    cid, para = it['canto'], it.get('para')
    act = parts[1] if len(parts) > 1 else ''
    rest = parts[2] if len(parts) > 2 else ''
    if act in ('start', 'cont'):
        import pageview as P
        lay = P.layout()
        hit = P.find_layout_row(lay, cid, it['base'])
        if not hit:
            errors.append('%s: row not found' % line)
            continue
        r = lay[cid][hit[0]][hit[1]]
        prefix = r['text'][:30]
        same = [x for rows in lay[cid] for x in rows if x['leaf'] == r['leaf'] and x['text'].startswith(prefix)]
        if len(same) != 1:
            errors.append('%s: row prefix %r matches %d rows' % (line, prefix, len(same)))
            continue
        patches.append({'canto': cid, 'op': act, 'leaf': r['leaf'], 'row': prefix, 'why': why})
        continue
    if act == 'y':
        if 'patch' not in it:
            errors.append('%s: entry has no proposal' % line)
            continue
        add_patch(cid, it['patch']['para'], it['patch']['from'], it['patch']['to'], why, errors, line)
    elif act == 'n':
        paras = text_of(cid)
        if it.get('span'):
            s0, s1 = it['span']
            # the entry's span refers to the text when review.json was written
            t = it.get('span_text')
            if t is None:
                errors.append('%s: entry has no span text; use CANTO PARA ok TEXT' % line)
                continue
            if t not in paras[para]:
                hits = X._find_loose(paras[para], t)
                if not hits:
                    print('WARNING %s: %r no longer in the paragraph; not recorded' % (line, t))
                    continue
                t = paras[para][hits[0][0]:hits[0][1]]
            checked.append({'canto': cid, 'para': para, 'text': t, 'why': why})
        elif it['class'] == 'layout':
            checked.append({'canto': cid, 'layout': it['base'], 'why': why})
        elif it['class'] == 'note' and it['base'].startswith('hyphen'):
            m = re.search(r'-> (\S+)', it['base'])
            checked.append({'hyphen': m.group(1), 'why': why})
        else:
            errors.append('%s: this kind of entry cannot simply be accepted' % line)
    elif act == '=':
        if not it.get('inner_text') and it.get('inner_text') != '':
            errors.append('%s: entry has no inner text' % line)
            continue
        span_t, inner_t = it['span_text'], it['inner_text']
        core = inner_t.strip()
        if core:
            new_inner = inner_t.replace(core, rest, 1)
        else:
            new_inner = ' ' + rest + ' ' if rest else inner_t
        k = it['inner'][0] - it['span'][0]
        to = span_t[:k] + new_inner + span_t[k + len(inner_t):]
        add_patch(cid, para, span_t, re.sub(r'  +', ' ', to), why, errors, line)
    elif act.startswith('s') and len(act) > 1:
        sub = line.split(' ', 1)[1]
        d = sub[1]
        bits = sub.split(d)
        if len(bits) < 3:
            errors.append('%s: bad substitution' % line)
            continue
        add_patch(cid, para, bits[1], bits[2], why, errors, line)
    else:
        errors.append('%s: not understood' % line)

if errors:
    for e in errors:
        print('ERROR', e)
    print('nothing written')
    sys.exit(1)
C.write_patches(patches)
with open(C.CHECKED, 'w', encoding='utf-8') as fh:
    fh.write('[\n' + ',\n'.join(json.dumps(c, ensure_ascii=False) for c in checked) + '\n]\n')
print('patches +%d (now %d), checked +%d (now %d)' % (len(patches) - new_patches0, len(patches),
                                                      len(checked) - new_checked0, len(checked)))
