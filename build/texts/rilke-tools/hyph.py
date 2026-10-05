# Help settle the words broken at a line end that the book itself does not
# settle: for each, how often the joined form and the hyphened form stand in
# the proofread English books on this machine.
# usage: python3 hyph.py undecided.txt   (lines "n.line head|tail" as rilke.mjs reports them)
import collections, glob, os, re, sys
from ocrxml import CACHE
from wordlist import RESEARCH, FRENCH, GERMAN, OTHER

def corpus():
    solid, hyph = collections.Counter(), collections.Counter()
    seen = set()
    for folder in (CACHE, RESEARCH):
        for path in sorted(glob.glob(os.path.join(folder, '*.txt'))):
            base = os.path.basename(path)
            size = os.path.getsize(path)
            if any(o in base for o in OTHER + FRENCH + GERMAN) or size in seen:
                continue
            seen.add(size)
            text = open(path, encoding='utf8', errors='replace').read().replace('’', "'")
            # a hyphen at the end of a line in these files is not evidence
            text = re.sub(r'-\n', '-\n ', text)
            for w in re.findall(r"[A-Za-z]+(?:-[A-Za-z]+)+|[A-Za-z]+", text):
                if '-' in w:
                    hyph[w.lower()] += 1
                else:
                    solid[w.lower()] += 1
    return solid, hyph

def main():
    solid, hyph = corpus()
    for line in open(sys.argv[1], encoding='utf8'):
        line = line.strip()
        if not re.match(r'\d+\.\d+ ', line):
            continue
        where, word = line.split(' ', 1)
        head, tail = word.rsplit('|', 1)
        a = re.sub(r'[^a-zà-ÿ-]', '', head.lower())
        b = re.sub(r'[^a-zà-ÿ-]', '', tail.lower())
        last = a.split('-')[-1]
        j, h = solid[last + b] if '-' not in b else 0, hyph[last + '-' + b]
        pa, pb = solid[last], solid[b.split('-')[0]]
        if j and not h and (not pa or not pb or j >= 3):
            verdict = 'join'
        elif h and not j:
            verdict = 'KEEP'
        elif not j and not h and pa and pb:
            verdict = 'keep?'
        elif not j and not h:
            verdict = 'join?'
        else:
            verdict = '??'
        print('%-9s %-28s joined %5d  hyphened %4d  parts %6d %6d  %s' % (where, head + '|' + tail, j, h, pa, pb, verdict))

if __name__ == '__main__':
    main()
