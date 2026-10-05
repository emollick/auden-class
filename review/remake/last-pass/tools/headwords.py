#!/usr/bin/env python3
"""A dictionary's headword after "under", in `stands` and in the sources at the foot
(last pass, item 2).

The rule: a headword is set in italics (`*word*`), as a word named. One case stands
bare: an English headword, or an article's title, written with a capital as its
dictionary or encyclopedia heads it (the page approved as the pattern has
"*A New English Dictionary*, under Sea"). A list is treated as one: if any of its
items is lower case, or the dictionary is of another language, every item is marked.

    python3 headwords.py                 # print every proposal
    python3 headwords.py --write         # write <piece>.json lists of exact edits here
"""
import json, re, glob, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(HERE), 'headwords')
SKIP_PIECES = {'tristan'}                      # an agent is at work on it
FOREIGN = re.compile(r'Deutsches Wörterbuch|Digitales Wörterbuch|DWDS|Meyers|Adelung|Grimm|German Wikipedia|Florio|New World of Words')
# where a list of headwords ends
END = re.compile(r'\.(?=\s|$)|;|:|\s\(|\)|, for |, which| which |, and | and under |, at |, where |, each |, with |, in |, as |, read (?:by|in|on|at) |, the |, its |, whose|, v\.|, n\.|, sense|, both | for the | in the | at the |, who |, dated |, defines|$')
NOT_A_HEAD = {'the', 'a', 'an', 'its', 'his', 'her', 'their', 'this', 'that', 'these', 'those', 'each', 'one', 'two',
              'three', 'both', 'which', 'what', 'it', 'them', 'him', 'another', 'line', 'way'}

def proposals(s):
    out = []
    for m in re.finditer(r'\bunder ', s):
        rest = s[m.end():]
        if not rest or rest[0] in '*<“"[': continue
        first = re.match(r"[\w’'-]+", rest)
        if not first or first.group(0).lower() in NOT_A_HEAD: continue
        e = END.search(rest)
        seg = rest[:e.start()] if e else rest
        if not seg.strip(): continue
        items = re.split(r'(, | and | or )', seg)
        # a list is closed by the item after its "and" or "or": what follows a later comma is another clause
        for i in range(1, len(items), 2):
            if items[i] in (' and ', ' or ') and i + 2 < len(items):
                seg = ''.join(items[:i + 2]); items = items[:i + 2]; break
        heads = items[0::2]
        if any((not h.strip()) for h in heads): continue
        # the dictionary is the one named since the last full stop, semicolon or colon
        before = re.split(r'[.;:] ', s[:m.start()])[-1]
        foreign = bool(FOREIGN.search(before))
        lower = any(h[0].islower() for h in heads if not h.startswith('*'))
        if not lower and not foreign: continue
        new = ''.join((x if i % 2 or x.startswith('*') else f'*{x}*') for i, x in enumerate(items))
        if new != seg: out.append((m.start(), 'under ' + seg, 'under ' + new))
    return out

def enc(t): return json.dumps(t, ensure_ascii=False)[1:-1]

total = 0
for f in sorted(glob.glob('remake/works/*/reading.json')):
    pid = f.split('/')[2]
    if pid in SKIP_PIECES: continue
    raw = open(f, encoding='utf-8').read()
    d = json.loads(raw)
    fields = [(f'sources[{i}]', s) for i, s in enumerate(d.get('sources') or []) if isinstance(s, str)]
    for pl in d.get('plates') or []:
        for li, l in enumerate(pl.get('lenses') or []):
            if isinstance(l.get('stands'), str): fields.append((f'{pl.get("id")}/{li}/stands', l['stands']))
    edits = []
    for name, s in fields:
        props = proposals(s)
        if not props: continue
        for at, old, new in props: print(f'{pid:15s} {name:20.20s} | {old}  ->  {new}')
        # one edit for a field: from its first change to its last, widened to the left until the raw text holds it once
        t = s; shift = 0
        for at, old, new in props:
            t = t[:at + shift] + new + t[at + shift + len(old):]; shift += len(new) - len(old)
        a0 = props[0][0]; z0 = props[-1][0] + len(props[-1][1])
        k = 0
        while True:
            o = enc(s[max(0, a0 - k):z0]); n = enc(t[max(0, a0 - k):z0 + shift])
            if raw.count(o) == 1 or a0 - k <= 0: break
            k += 8
        if raw.count(o) != 1: print(f'!! {pid} {name}: cannot place {o[:60]!r}'); continue
        edits.append({'old': o, 'new': n})
    total += len(edits)
    if edits and '--write' in sys.argv:
        # an edit whose text lies inside another's would collide: check by applying them all
        t = raw
        for e in edits:
            assert t.count(e['old']) == 1, (pid, e['old'])
            t = t.replace(e['old'], e['new'])
        json.loads(t)
        os.makedirs(OUT, exist_ok=True)
        json.dump(edits, open(os.path.join(OUT, f'{pid}.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(total, 'proposals')
