# Proves the lists of this folder against the readings as they stand when it runs. It reads only.
#   python3 review/remake/last-pass/figures/check_lists.py
# Each <piece>.json is applied in memory the way build/tools/edit-exact.py applies it (an "old" must occur
# exactly once at its turn, then it is replaced). Then: the result parses; its shape is the shape before;
# the only values that differ are "plain" lines of Figure tabs; every "old" is made of kind, label, name
# and plain lines only, and only its plain line is changed; tails are the piece's own words; and across
# the site every figure that stands on more than one tab is said one way. It prints counts and places only.
import json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
WORKS = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..', 'remake', 'works'))
LEADS = ('tempest',)
KEY = re.compile(r'\s*"(\w+)": ')
LINT = [r'—|–', r'\b(delve|tapestry|testament to|underscore[sd]?|showcas\w+|pivotal|nuanced?|multifaceted|realm|landscape of|interplay|juxtapos\w+|resonat\w+|evocative|poignant|profound(ly)?|masterful(ly)?|seamless(ly)?|vivid(ly)?|striking(ly)?|rich tapestry|speaks to|invites us|reminds us|serves as|stands as|a sense of)\b',
        r'\bnot (just|only|merely)\b[^.]{0,80}\bbut\b', r'\b(it is worth noting|it\'s worth noting|in other words|at its core|in essence|ultimately|crucially|importantly|interestingly|notably)\b',
        r'\b(we see|we can see|we feel|we hear|the reader (feels|senses|is))\b',
        r'\b(enact(s|ed|ing)?|embod(y|ies|ied)|mirror(s|ed|ing)?|echo(es|ed|ing)?|captur(es|ed|ing)|evok(es|ed|ing)|convey(s|ed|ing)?|suggest(s|ed|ing)?|offer(s|ed|ing)?|as if|as though|a kind of)\b']   # the checker's own list, for a "plain" line

def leaves(node, path=()):
    """every place in the file: a leaf with its value, or a list or object with its length or its keys in order"""
    if isinstance(node, dict):
        yield path, ('object', tuple(node))
        for k, v in node.items():
            yield from leaves(v, path + (k,))
    elif isinstance(node, list):
        yield path, ('list', len(node))
        for i, v in enumerate(node):
            yield from leaves(v, path + (i,))
    else:
        yield path, node

def form(plain):
    """what is wrong with the form of a plain line, if anything"""
    wrong = [] if plain[:1].islower() else ['does not begin with a small letter']
    wrong += ['ends with a full stop'] * plain.endswith('.') + ['is over 30 words'] * (len(plain.split()) > 30)
    wrong += ['has a tail not joined by a semicolon'] * bool(re.search(r'[:,] here\b', plain)) + ['is more than one sentence'] * ('. ' in plain)
    return wrong + ['has a word the checker warns of'] * any(re.search(p, plain, re.I) for p in LINT)

def apply(piece, faults):
    """the reading before and after its list; faults are added to the list given"""
    raw = open(os.path.join(WORKS, piece, 'reading.json'), encoding='utf-8').read()
    listed = os.path.join(HERE, piece + '.json')
    edits = json.load(open(listed, encoding='utf-8')) if os.path.exists(listed) else []
    out = raw
    for i, e in enumerate(edits):
        at = f'{piece}.json, edit {i + 1}'
        if sorted(e) != ['new', 'old'] or raw.count(e['old']) != 1 or out.count(e['old']) != 1:
            faults.append(f'{at}: "old" occurs {raw.count(e.get("old", ""))} times in the reading and {out.count(e.get("old", ""))} at its turn, not once')
            continue
        old, new = e['old'].split('\n'), e['new'].split('\n')
        keys = [KEY.match(line).group(1) if KEY.match(line) else '?' for line in old]
        if keys[-1] != 'plain' or set(keys[:-1]) - {'kind', 'label', 'name'} or old[:-1] != new[:-1] or not new[-1].lstrip().startswith('"plain": "'):
            faults.append(f'{at}: takes in or changes a line that is not kind, label, name or plain')
        out = out.replace(e['old'], e['new'])
    before = json.loads(raw)
    try:
        after = json.loads(out)
    except ValueError as err:
        faults.append(f'{piece}: does not parse as JSON after its edits ({err})')
        return before, before, len(edits), 0
    a, b = list(leaves(before)), list(leaves(after))
    if [p for p, _ in a] != [p for p, _ in b]:
        faults.append(f'{piece}: the shape of the file changed')
    changed = [(p, v, w) for (p, v), (_, w) in zip(a, b) if v != w]
    for p, v, w in changed:
        if not (len(p) == 5 and p[0] == 'plates' and p[2] == 'lenses' and p[4] == 'plain' and isinstance(v, str) and isinstance(w, str)
                and before['plates'][p[1]]['lenses'][p[3]].get('kind') == 'figure'):
            faults.append(f'{piece}: something other than the plain line of a Figure tab changed, at {p}')
            continue
        had, has = re.search(r'[:;,] (here\b.*)$', v), re.search(r'; (here\b.*)$', w)
        if had and not w.endswith('; ' + had.group(1)):
            faults.append(f'{piece} plates[{p[1]}] lenses[{p[3]}]: the tail it had is not kept word for word')
        if has and has.group(1)[5:] not in v:
            faults.append(f'{piece} plates[{p[1]}] lenses[{p[3]}]: the tail is not in the piece\'s own words')
    if len(changed) != len(edits):
        faults.append(f'{piece}: {len(edits)} edits but {len(changed)} values changed')
    return before, after, len(edits), len(changed)

def main():
    faults, said, edits, lists, tabs = [], {}, 0, 0, 0
    pieces = sorted(d for d in os.listdir(WORKS) if os.path.exists(os.path.join(WORKS, d, 'reading.json')))
    for f in sorted(os.listdir(HERE)):
        if f.endswith('.json') and (f[:-5] not in pieces or f[:-5] in LEADS):
            faults.append(f'{f}: a list for the approved page, or for no piece')
    for piece in pieces:
        before, after, n, changed = apply(piece, faults)
        if n:
            lists, edits = lists + 1, edits + n
            print(f'{piece}.json: {n} edits, each "old" once; parses; {changed} plain lines of Figure tabs differ, nothing else')
        for pi, plate in enumerate(after.get('plates', [])):
            for li, lens in enumerate(plate.get('lenses', [])):
                if lens.get('kind') == 'figure':
                    tabs += 1
                    said.setdefault(lens.get('name'), []).append(re.sub(r'; here\b.*$', '', lens['plain']))
                    faults += [f'{piece} plates[{pi}] lenses[{li}]: the plain line {w}' for w in form(lens['plain'])]
    many = {n: v for n, v in said.items() if len(v) > 1}
    faults += [f'{n}: {len(set(v))} wordings on {len(v)} tabs' for n, v in sorted(many.items()) if len(set(v)) > 1]
    print(f'{edits} edits in {lists} lists; no list for {", ".join(LEADS)}')
    print(f'after the edits: {tabs} Figure tabs; {len(many)} figures stand on more than one tab ({sum(map(len, many.values()))} tabs), '
          f'{sum(1 for v in many.values() if len(set(v)) == 1)} of them said one way on all their tabs')
    print(f'every plain line begins small, ends without a stop, is one sentence of 30 words or fewer, joins its tail with a semicolon, and has no word the checker warns of: {"yes" if not any("the plain line" in f for f in faults) else "NO"}')
    print('\n'.join(['FAULTS:'] + faults) if faults else 'ALL SOUND: no faults')

if __name__ == '__main__':
    main()
