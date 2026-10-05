# Every printed paragraph of every piece, held against the scans of Auden's prose and of Pearce's memoir.
#
#   node build/tools/prose.mjs                     (first: gathers what each page prints)
#   python3 build/tools/runs-sweep.py <scan> [<scan> ...] [--min 5] [--only id,id] [--show]
#
# --show prints the page's own words of each run (never the scan's) so that a run of small words can
# be told from a borrowed phrase.
#
# Prints, for each paragraph that shares a run of words with a scan, the piece, the place in its
# reading, the length of the run and which words of the paragraph they are. It never prints the scan's
# text. Words inside quotation marks and words in italics are left out of the test: a quotation has its
# own rule (25 words, two to a piece), and italics in a caption are the words of the work itself.
import sys, re, glob, os

args = sys.argv[1:]
def flag(name, default=None):
    if name in args:
        i = args.index(name); v = args[i + 1]; del args[i:i + 2]; return v
    return default
MIN = int(flag('--min', '5'))
only = flag('--only')
only = set(only.split(',')) if only else None
scans = [x for x in args if x != '--show']
if not scans:
    sys.exit('usage: python3 build/tools/runs-sweep.py <scan> [<scan> ...] [--min 5] [--only id,id]')

N = 4
def words_of(t):
    return re.sub(r'[^a-z\s]', ' ', t.lower().replace('’', "'")).split()

grams = {}
whole = {}
for s in scans:
    w = words_of(open(s, encoding='utf8', errors='ignore').read())
    grams[os.path.basename(s)] = set(' '.join(w[i:i + N]) for i in range(len(w) - N + 1))
    whole[os.path.basename(s)] = ' ' + ' '.join(w) + ' '

# the longest stretch of a chained run that stands whole in the scan
def longest(run, text):
    for n in range(len(run), N - 1, -1):
        for a in range(0, len(run) - n + 1):
            if ' ' + ' '.join(run[a:a + n]) + ' ' in text:
                return n, a
    return 0, 0
SHOW = '--show' in args
if SHOW: args.remove('--show')

# a quotation, or words in italics, become one word that no scan holds
MASK = ' zzqq '
def masked(t):
    t = re.sub(r'“[^”]*”', MASK, t)
    t = re.sub(r'<i>[^<]*</i>', MASK, t)
    t = re.sub(r'\*[^*]+\*', MASK, t)
    return t

SKIP = re.compile(r'(quote|source|sources\[\d+\]|label|heading|title|where|checked|name)$')
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'review', 'remake', 'prose')
found = 0
pieces = 0
for f in sorted(glob.glob(os.path.join(root, '*.md'))):
    pid = os.path.basename(f)[:-3]
    if only and pid not in only:
        continue
    pieces += 1
    blocks = re.split(r'\n\s*\n', open(f, encoding='utf8').read())
    for b in blocks:
        lines = b.strip().split('\n')
        m = re.match(r'^\[(.+?)\](?: \(|\s*$)', lines[0]) if lines and lines[0] else None
        if not m or len(lines) < 2:
            continue
        key = m.group(1)
        if SKIP.search(key):
            continue
        w = words_of(masked('\n'.join(lines[1:])))
        for scan, idx in grams.items():
            i = 0
            while i <= len(w) - N:
                if ' '.join(w[i:i + N]) in idx:
                    j = i + N
                    while j < len(w) and ' '.join(w[j - N + 1:j + 1]) in idx:
                        j += 1
                    n, off = longest(w[i:j], whole[scan]) if j - i >= MIN else (0, 0)
                    if n >= MIN:
                        found += 1
                        own = '  : ' + ' '.join(w[i + off:i + off + n]) if SHOW else ''
                        print(f'{pid}  [{key}]  {n} words, {i + off + 1} to {i + off + n} of {len(w)}  ({scan}){own}')
                    # go on from the last word but three of the chain, not from its end: a run that
                    # begins inside a chain of chance words was passed over until 3 October 2026, 16:57 UTC
                    i = j - N + 1
                else:
                    i += 1
print(f'{pieces} pieces; {found} run{"" if found == 1 else "s"} of {MIN} or more words shared with a scan' + ('' if found else ': none'))
