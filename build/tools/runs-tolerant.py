# A second sweep, for runs that runs-sweep.py cannot see because a scan misreads a letter
# ("m" for "in") or breaks a word at the end of a line ("be- come"). After the sweep that
# Tristan's finisher wrote (remake/works/tristan/finisher/sweep-tolerant.py), made to run
# over every piece at once.
#
#   node build/tools/prose.mjs                     (first: gathers what each page prints)
#   python3 build/tools/runs-tolerant.py <scan> [<scan> ...] [--only id,id] [--all]
#
# It reads the printed paragraphs as runs-sweep.py does (review/remake/prose/<piece>.md, the
# same fields left out, quotations and italics masked) and holds every five words of a page
# against each scan with the line-end hyphens joined:
#   exact  : the five stand in the scan once the broken words are joined;
#   garbled: four of the five stand, and the fifth place holds a token that is no common word
#            and is within two letters of the page's word.
# What the plain sweep already finds (the five standing in the scan as it is) is left out
# unless --all is given. Windows that follow one another are printed as one run. Prints the
# place, the page's OWN words, the scan's line number and, of the scan, only the garbled
# token. It changes nothing.
import glob, os, re, sys

args = sys.argv[1:]
def flag(name, takes=True):
    if name in args:
        i = args.index(name)
        if takes:
            v = args[i + 1]; del args[i:i + 2]; return v
        del args[i]; return True
    return None
only = flag('--only')
only = set(only.split(',')) if only else None
ALL = bool(flag('--all', False))
scans = args
if not scans:
    sys.exit('usage: python3 build/tools/runs-tolerant.py <scan> [<scan> ...] [--only id,id] [--all]')

COMMON = set('''the of in to a and is it that he as for with his be by on at or an this not are was but they from
which one all their no so we her she has have had if its him them who what when than then there can only more
other such any may out up into do does did each own same two both also even been were will would could should
must upon about after before over under between through where why how these those our your my me us you i s t
man men see say way new old now nor yet too very much many some most first last thing things life love time
'''.split())

def norm(t):
    return re.sub(r'[^a-z\s]', ' ', t.lower().replace('’', "'"))

def lev(a, b, cap=2):
    if abs(len(a) - len(b)) > cap:
        return cap + 1
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (ca != cb)))
        prev = cur
    return prev[-1]

MASK = ' zzqq '
def masked(t):
    t = re.sub(r'“[^”]*”', MASK, t)
    t = re.sub(r'<i>[^<]*</i>', MASK, t)
    return re.sub(r'\*[^*]+\*', MASK, t)
SKIP = re.compile(r'(quote|source|sources\[\d+\]|label|heading|title|where|checked|name)$')

root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'review', 'remake', 'prose')
paras = []   # (piece, key, words)
pieces = 0
for f in sorted(glob.glob(os.path.join(root, '*.md'))):
    pid = os.path.basename(f)[:-3]
    if only and pid not in only:
        continue
    pieces += 1
    for b in re.split(r'\n\s*\n', open(f, encoding='utf8').read()):
        lines = b.strip().split('\n')
        m = re.match(r'^\[(.+?)\](?: \(|\s*$)', lines[0]) if lines and lines[0] else None
        if m and len(lines) > 1 and not SKIP.search(m.group(1)):
            paras.append((pid, m.group(1), norm(masked('\n'.join(lines[1:]))).split()))

# the pages' five-word windows, each under five keys with one place left open
want = {}
for k, (pid, key, w) in enumerate(paras):
    for i in range(len(w) - 4):
        g = w[i:i + 5]
        if 'zzqq' in g:
            continue
        for p in range(5):
            want.setdefault(' '.join(g[:p] + ['*'] + g[p + 1:]), []).append((k, i, p))

total = 0
for s in scans:
    name = os.path.basename(s)
    raw = open(s, encoding='utf8', errors='ignore').read()
    # what the plain sweep sees: the scan as it is
    pw = norm(raw).split()
    plain = set(' '.join(pw[i:i + 5]) for i in range(len(pw) - 4))
    toks, line_of = [], []
    # a word broken at a line's end is made whole on its first line (the finisher's script moved one letter only)
    joined = re.sub(r'([A-Za-z]+)-[ \t]*\n[ \t]*([a-z]+)', lambda m: m.group(1) + m.group(2) + '\n', raw)
    for n, line in enumerate(joined.split('\n'), 1):
        for w in norm(line).split():
            toks.append(w); line_of.append(n)
    hits = {}   # (k, i) -> (kind, line, token)
    for at in range(len(toks) - 4):
        g = toks[at:at + 5]
        for p in range(5):
            for k, i, q in want.get(' '.join(g[:p] + ['*'] + g[p + 1:]), ()):
                if q != p:
                    continue
                w = paras[k][2]
                mine, other = w[i + p], g[p]
                if other == mine:
                    kind = 'exact'
                elif other not in COMMON and lev(other, mine) <= 2 and (len(mine) > 3 or len(other) <= 2):
                    kind = 'garbled'
                else:
                    continue
                if not ALL and ' '.join(w[i:i + 5]) in plain:
                    continue
                old = hits.get((k, i))
                if old is None or (old[0] == 'garbled' and kind == 'exact'):
                    hits[(k, i)] = (kind, line_of[at], '' if kind == 'exact' else f'"{other}" for "{mine}"')
    # windows that follow one another are one run
    for k in sorted(set(k for k, _ in hits)):
        starts = sorted(i for kk, i in hits if kk == k)
        pid, key, w = paras[k]
        a = 0
        while a < len(starts):
            b = a
            while b + 1 < len(starts) and starts[b + 1] == starts[b] + 1:
                b += 1
            first, last = starts[a], starts[b] + 4
            kinds = set(hits[(k, i)][0] for i in starts[a:b + 1])
            garbles = sorted(set(hits[(k, i)][2] for i in starts[a:b + 1] if hits[(k, i)][2]))
            total += 1
            print(f'{pid}  [{key}]  {last - first + 1} words, {first + 1} to {last + 1} of {len(w)}  ({name} line {hits[(k, starts[a])][1]}; {"/".join(sorted(kinds))})  : {" ".join(w[first:last + 1])}' + (f'  (the scan has {", ".join(garbles)})' if garbles else ''))
            a = b + 1
print(f'{pieces} pieces, {len(paras)} paragraphs, {len(scans)} scans; runs the plain sweep does not show: {total}' if not ALL else f'{pieces} pieces, {len(paras)} paragraphs, {len(scans)} scans; runs: {total}')
