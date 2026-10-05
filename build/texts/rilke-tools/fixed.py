# The words of scan 1 as they stand after the corrections of rilke-fixes.json
# (the same steps as applyFixes in rilke.mjs), for comparing with the images.
import json, os
from ocrxml import parse, OFFSET

FIXES = os.path.abspath(os.path.join(os.path.dirname(__file__), '../rilke-fixes.json'))
CANON = {'‘': "'", '’': "'", '“': '"', '”': '"'}

def load():
    S1 = parse(1)
    fx = json.load(open(FIXES, encoding='utf8'))
    S2 = parse(2) if fx['lines'] else None
    lines = {}
    for n, page in enumerate(S1):
        for li, l in enumerate(page['lines']):
            lines[(n, li)] = [w['t'] for w in l['words']]
    for f in fx['lines']:
        src = S2[f['n'] + OFFSET[2]]['lines'][f['line2']]
        lines[(f['n'], f['line'])] = [''.join(CANON.get(c, c) for c in w['t']) for w in src['words']]
    by = {}
    for f in fx['words']:
        by.setdefault((f['n'], f['line']), []).append(f)
    for key, lst in by.items():
        if any(key == (f['n'], f['line']) for f in fx['lines']):
            continue
        toks = lines[key]
        for f in sorted(lst, key=lambda f: -f['word']):
            k = len(f['wrong'].split(' '))
            assert ' '.join(toks[f['word']:f['word'] + k]) == f['wrong'], (key, f)
            toks[f['word']:f['word'] + k] = f['right'].split(' ') if f['right'] else []
    return lines

if __name__ == '__main__':
    import sys
    L = load()
    for a in sys.argv[1:]:
        n, li = (int(x) for x in a.split('.'))
        print('n%d.%d | %s' % (n, li, ' '.join(L[(n, li)])))
