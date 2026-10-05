# List the words of the cleaned text that the word lists do not know, and
# forms that look like OCR accidents. usage: python3 unknown.py wordlist-dir [--all]
import collections, glob, json, os, re, sys

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../../site/data/texts/rilke'))

def load(path):
    d = {}
    for line in open(path, encoding='utf8'):
        w, k = line.rstrip('\n').split('\t')
        d[w.lower()] = d.get(w.lower(), 0) + int(k)
    return d

def blocks():
    index = json.load(open(os.path.join(OUT, 'index.json')))
    for p in index['parts']:
        part = json.load(open(os.path.join(OUT, p['id'] + '.json')))
        for i, b in enumerate(part['blocks']):
            for t in (b['lines'] if b['k'] == 'v' else [b['text']]):
                yield p['id'], i, b['k'], t

def main():
    wl = sys.argv[1]
    en, fr, de = (load(os.path.join(wl, x + '.txt')) for x in ('english', 'french', 'german'))
    unknown = collections.defaultdict(list)
    odd = []
    for pid, i, k, t in blocks():
        for m in re.finditer(r"[A-Za-zÀ-ÖØ-öø-ÿŒœ0-9]+(?:['-][A-Za-zÀ-ÖØ-öø-ÿŒœ0-9]+)*", t):
            w = m.group(0)
            for piece in re.split(r'-', w):
                p = piece.lower()
                p2 = re.sub(r"'s$|'$", '', p)
                if p in en or p2 in en or (p.endswith("s'") and p[:-1] in en):
                    continue
                if re.fullmatch(r'\d+', p):
                    odd.append((pid, i, 'number', w))
                    continue
                unknown[piece].append((pid, i, w))
        # shapes that look like accidents
        for name, rx in (
            ('digit in word', r"[A-Za-z]\d|\d[A-Za-z]"),
            ('lower case after full stop', r"[a-z]\. [a-z]"),
            ('doubled punctuation', r"[,;:!?]{2}|,\.|\.,|;\.|\.;"),
            ('stray symbol', r"[*^|~¬_<>{}\[\]\\/=+#@%&§£$■♦»«„°]"),
            ('space before closing quote', r"\s['\"](\s|$)"),
            ('quote after space before lowercase', r"[a-z] '[a-z]+ [a-z]"),
            ('capital inside word', r"[a-z][A-Z]"),
            ('letter-digit-like', r"\b[Il1]{2,}\b|\bO0|0O"),
            ('tbe/aud/bis/arid/modem etc', r"\b(tbe|aud|bis|arid|modem|tlie|tbat|wbich|bave|liis|tbis|tbey|ber|bim|bas|bad|wben|wliat|tliat|witli|wliich|iu|ou|aud|aiid|nnd|tne|tlio|hefore|heen|heing|sbe|bo|wo|mo|tho|tlie|ol|oi|ot|il|Tlie|Tbe|tbere|wlien|wbo|wliere|tbem|tbeir|tben|otber|motber|fatber|rnore|rne|rny|frorn|sorne|tirne|corne|horne|narne|sarne|roorn|thern|hirn|wornan|rnan|rnen|rnust|rnuch|rnade|rnake|rnay)\b"),
        ):
            for mm in re.finditer(rx, t):
                odd.append((pid, i, name, t[max(0, mm.start() - 12):mm.end() + 12]))
    rows = sorted(unknown.items(), key=lambda kv: (-len(kv[1]), kv[0].lower()))
    print(len(rows), 'unknown forms,', sum(len(v) for v in unknown.values()), 'occurrences')
    for w, occ in rows:
        tag = ('F' if w.lower() in fr else '') + ('G' if w.lower() in de else '')
        where = ' '.join('%s[%d]' % (o[0], o[1]) for o in occ[:4]) + (' ...' if len(occ) > 4 else '')
        print('%3d %-2s %-22s %s' % (len(occ), tag, w, where))
    print()
    print(len(odd), 'odd shapes')
    for o in odd:
        print('  %s[%d] %s: %r' % o)

if __name__ == '__main__':
    main()
