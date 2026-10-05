# Turn the decisions taken at the contact sheets into rilke-fixes.json.
# usage: python3 makefixes.py collation.json decisions.txt [more decision files] > ../rilke-fixes.json
# A decision line is one of
#   <id> 1            scan 1 is right: nothing to do
#   <id> 2 | 3        take the reading of scan 2 or 3 (quotation marks made straight)
#   <id> =text        put text for the words the collation named
#   <id> L            the whole line is to be read from scan 2
#   <id> X            dealt with by another line of the file
#   @n.line.word+count wrong => right     an explicit correction (wrong may be several words)
#   !n.line.word+count wrong => right | page    the page itself has a misprint: it prints `page`, the word meant is `right`
#   *n.after          an asterisk at the foot of page n, below line `after`
#   -n.line word      the word broken at the end of this line keeps its hyphen
import json, re, sys
from ocrxml import parse, OFFSET

CANON = {'‘': "'", '’': "'", '“': '"', '”': '"'}
canon = lambda t: ''.join(CANON.get(c, c) for c in t)

def main():
    coll = json.load(open(sys.argv[1]))
    diffs, pairs = coll['diffs'], coll['pairs']
    S1 = parse(1)
    words, lines, asterisks, hyphens = {}, {}, [], []
    def raw(n, line, word, count):
        return ' '.join(w['t'] for w in S1[n]['lines'][line]['words'][word:word + count])
    def put(n, line, word, wrong, right, page=None):
        key = (n, line, word)
        if key in words and words[key]['right'] != right and page is None:
            raise SystemExit('two corrections at %r: %r and %r' % (key, words[key], right))
        f = {'n': n, 'line': line, 'word': word, 'wrong': wrong, 'right': right}
        if page is not None:
            f['page'] = page
        words[key] = f
    for path in sys.argv[2:]:
        for ln, text in enumerate(open(path, encoding='utf8'), 1):
            text = text.rstrip('\n')
            if not text.strip() or text.startswith('#'):
                continue
            where = '%s:%d' % (path, ln)
            if text.startswith('@'):
                m = re.match(r'@(\d+)\.(\d+)\.(\d+)\+(\d+) (.*?) => (.*)$', text)
                if not m:
                    m2 = re.match(r'@(\d+)\.(\d+)\.(\d+)\+(\d+) =(.*)$', text)
                    if not m2:
                        raise SystemExit('cannot read ' + where)
                    n, line, word, count = (int(x) for x in m2.groups()[:4])
                    put(n, line, word, raw(n, line, word, count), m2.group(5))
                    continue
                n, line, word, count = (int(x) for x in m.groups()[:4])
                wrong, right = m.group(5), m.group(6)
                if raw(n, line, word, count) != wrong:
                    raise SystemExit('%s: the OCR has %r there, not %r' % (where, raw(n, line, word, count), wrong))
                put(n, line, word, wrong, right)
            elif text.startswith('!'):
                m = re.match(r'!(\d+)\.(\d+)\.(\d+)\+(\d+) (.*?) => (.*?) \| (.*)$', text)
                if not m:
                    raise SystemExit('cannot read ' + where)
                n, line, word, count = (int(x) for x in m.groups()[:4])
                if raw(n, line, word, count) != m.group(5):
                    raise SystemExit('%s: the OCR has %r there, not %r' % (where, raw(n, line, word, count), m.group(5)))
                put(n, line, word, m.group(5), m.group(6), page=m.group(7))
            elif text.startswith('*'):
                n, after = (int(x) for x in text[1:].split('.'))
                asterisks.append({'n': n, 'after': after})
            elif text.startswith('-'):
                m = re.match(r'-(\d+)\.(\d+) (\S+)$', text)
                hyphens.append({'n': int(m.group(1)), 'line': int(m.group(2)), 'keep': m.group(3)})
            else:
                k, v = text.split(' ', 1)
                r = diffs[int(k)]
                if v in ('1', 'X'):
                    continue
                if v == 'L':
                    lines[(r['n'], r['line'])] = {'n': r['n'], 'line': r['line'], 'line2': pairs[str(r['n'])]['2'][str(r['line'])]}
                    continue
                if v in ('2', '3'):
                    right = canon(r['s' + v])
                elif v.startswith('='):
                    right = v[1:]
                else:
                    raise SystemExit('cannot read ' + where)
                wrong = raw(r['n'], r['line'], r['word'], r['count'])
                if wrong != r['s1']:
                    raise SystemExit('%s: collation and OCR disagree: %r, %r' % (where, wrong, r['s1']))
                put(r['n'], r['line'], r['word'], wrong, right)
    # a line read from scan 2 needs no word corrections of scan 1
    for key in list(words):
        if (key[0], key[1]) in lines:
            del words[key]
    out = {
        'about': [
            "Corrections to the OCR of the Internet Archive scan journalofmyother00rilk (Rilke, The Journal of My Other Self, Norton 1930), applied by build/texts/rilke.mjs.",
            "n is the page as the scan's _djvu.xml counts it from 0 (https://archive.org/details/journalofmyother00rilk/page/n<n> shows it; the printed page number is n - 3). line counts the OCR's lines on that page from 0, word the words of that line from 0.",
            "words: the OCR has `wrong` at that place (one word, or several divided by spaces); the page has `right` (empty where the OCR read a speck or a pencil mark as a word). Each was decided by looking at the page image.",
            "words that carry `page`: here the page itself has a misprint. `page` is what the edition prints, `right` the word plainly meant. Delete `page` and put its value for `right` to have the edition's reading back.",
            "lines: the line is underlined in pencil in this copy and its OCR is rubbish; the same line is read from the OCR of a second scan of the same edition (journalofmyother0000rain), line `line2` of the matching page.",
            "asterisks: an asterisk marking the end of an entry stands at the foot of the page, below line `after`, and the OCR did not read it.",
            "hyphens: the word broken at the end of this line keeps its hyphen when the lines are joined; `keep` is the whole word.",
        ],
        'lines': [lines[k] for k in sorted(lines)],
        'asterisks': sorted(asterisks, key=lambda a: a['n']),
        'hyphens': sorted(hyphens, key=lambda a: (a['n'], a['line'])),
        'words': [words[k] for k in sorted(words)],
    }
    # one entry to a line, so that the file can be read and compared
    def block(name, rows):
        return '  "%s": [\n%s\n  ]' % (name, ',\n'.join('    ' + json.dumps(r, ensure_ascii=False) for r in rows))
    parts = ['  "about": ' + json.dumps(out['about'], ensure_ascii=False, indent=4).replace('\n', '\n  ')]
    for name in ('lines', 'asterisks', 'hyphens', 'words'):
        parts.append(block(name, out[name]) if out[name] else '  "%s": []' % name)
    sys.stdout.write('{\n' + ',\n'.join(parts) + '\n}\n')
    sys.stderr.write('%d words (%d of them misprints of the edition), %d lines, %d asterisks, %d hyphens\n' % (len(out['words']), sum(1 for f in out['words'] if 'page' in f), len(out['lines']), len(asterisks), len(hyphens)))

if __name__ == '__main__':
    main()
