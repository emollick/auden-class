# One form for the books that many pages cite (the last pass, 3 October): the volumes of Auden's
# collected prose, The Enchafèd Flood, and two small ones. Only printed lines are touched: the
# line under an entry of what Auden said (`view.source`, `auden[].source`), the list of sources
# at the foot (`sources[]`), and what a caption stands on (`stands`). No page number, year or
# title is changed: the tool proves that the page numbers of every line are what they were.
#
#   python3 review/remake/last-pass/tools/cite-forms.py            say what would be done
#   python3 review/remake/last-pass/tools/cite-forms.py --write    do it
#
# The forms (why: review/remake/last-pass/RECORD.md, "One form for the books many pages cite"):
#   under an entry      in *Prose*, vol. II (2002), pp. 137–40
#   in a `stands` line  *Prose*, vol. II, p. 82
#   in the list         *Prose*, vol. II: 1939–1948, edited by Edward Mendelson (2002), the first
#                       time a list names the volume; after that as in a `stands` line
#   everywhere          *The Enchafèd Flood* (1950; Vintage Books edition, 1967), p. 107
#                       (every page number of that book on the site is the Vintage edition's:
#                       the one scan all the pieces were written from)
# A copy of each reading changed is kept at remake/works/<piece>/lead/before-cite-forms.json.
import glob, json, os, re, shutil, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..', '..'))
WRITE = '--write' in sys.argv[1:]
SHOW = '--quiet' not in sys.argv[1:]
SPAN = {'I': '1926–1938', 'II': '1939–1948', 'III': '1949–1955'}
YEAR = {'I': '1996', 'II': '2002', 'III': '2008'}


def scan(raw):
    """Every string VALUE of a JSON text, as (path, start, end) with the quotes."""
    out = []
    n = len(raw)

    def ws(i):
        while i < n and raw[i] in ' \t\r\n':
            i += 1
        return i

    def string(i):
        j = i + 1
        while True:
            c = raw[j]
            if c == '\\':
                j += 2
            elif c == '"':
                return j + 1
            else:
                j += 1

    def value(i, path):
        i = ws(i)
        c = raw[i]
        if c == '"':
            e = string(i)
            out.append((path, i, e))
            return e
        if c == '{':
            i = ws(i + 1)
            if raw[i] == '}':
                return i + 1
            while True:
                i = ws(i)
                e = string(i)
                key = json.loads(raw[i:e])
                i = ws(e)
                assert raw[i] == ':'
                i = ws(value(i + 1, path + (key,)))
                if raw[i] == ',':
                    i += 1
                    continue
                assert raw[i] == '}', raw[i - 20:i + 20]
                return i + 1
        if c == '[':
            i = ws(i + 1)
            if raw[i] == ']':
                return i + 1
            k = 0
            while True:
                i = ws(value(i, path + (k,)))
                k += 1
                if raw[i] == ',':
                    i += 1
                    continue
                assert raw[i] == ']', raw[i - 20:i + 20]
                return i + 1
        j = i
        while j < n and raw[j] not in ',}] \t\r\n':
            j += 1
        return j

    value(0, ())
    return out


def kind(path):
    if path[-1] == 'source' and path[0] in ('view', 'auden') and len(path) <= 3:
        return 'under'
    if path[0] == 'sources' and len(path) == 2:
        return 'list'
    if path[-1] == 'stands' and path[0] == 'plates':
        return 'stands'
    return None


def name_prose(s):
    """The volume named one way: *Prose*, vol. II."""
    s = s.replace('*The Complete Works of W. H. Auden: Prose, Volume II, 1939–1948*', '*Prose*, vol. II, 1939–1948')
    s = s.replace('*The Complete Works of W. H. Auden: Prose*', '*Prose*')
    s = s.replace('*Prose, Volume II*', '*Prose*, vol. II')
    s = re.sub(r'\*Prose\* (III|II|I)\b', r'*Prose*, vol. \1', s)
    s = re.sub(r'\*Prose\*, (?:vol\. 2|volume II|Volume II)\b', '*Prose*, vol. II', s)
    s = re.sub(r'\*Prose\*, (?:vol\. 3|volume III|Volume III)\b', '*Prose*, vol. III', s)
    return s


# what may follow the volume's name: its years, its editor, a place and its year
TAIL = r'(?:[:,] \d{4}–\d{4})?(?:, edited by Edward Mendelson)?(?: \((?:Princeton(?: University Press)?, )?\d{4}\)|, \d{4}(?=,))?'
EF = r'(\*The Enchafèd Flood(?:, or The Romantic Iconography of the Sea)?\*)'
EF_FORM = r' (1950; Vintage Books edition, 1967)'


def enchafed(s, k):
    s = s.replace('(1950; Vintage edition, 1967)', '(1950; Vintage Books edition, 1967)')
    s = s.replace('(1950; Vintage Books, 1967)', '(1950; Vintage Books edition, 1967)')
    s = s.replace('(New York: Random House, 1950), in the Vintage Books edition (1967)', '(1950; Vintage Books edition, 1967)')
    # "(1950), chapter 3, pp. 147–49 of the Vintage Books edition (1967)" and "(1950), pp. 49–50 in the Vintage edition of 1967"
    s = re.sub(EF + r' \(1950\), ((?:chapter \d+, )?pp?\. [\d–, and]+?) (?:in|of) the Vintage(?: Books)? edition(?: of 1967| \(1967\))', r'\1' + EF_FORM + r', \2', s)
    # no edition named at all, and a page number follows (in a `stands` line the title alone, as elsewhere)
    s = re.sub(EF + r' \(1950\)(?=, pp?\. )', r'\1' + ('' if k == 'stands' else EF_FORM), s)
    # the sentence that said it, now in the form itself
    s = re.sub(r'(Vintage Books edition, 1967\), pp?\. [\d–, and]+\.) The page numbers are those of the Vintage Books edition of 1967\.', r'\1', s)
    if k == 'stands':
        s = s.replace('*The Enchafèd Flood* (Vintage edition, 1967), pp.', '*The Enchafèd Flood*, pp.')
    return s


def change(s, k, seen):
    """s is the raw text of a string between its quotes; k its kind; seen the volumes a list has named."""
    s = name_prose(s)
    if k == 'under':
        def under(m):
            return '*Prose*, vol. %s (%s)' % (m.group(1), YEAR[m.group(1)])
        s = re.sub(r'\*Prose\*, vol\. (III|II|I)\b' + TAIL, under, s)
        s = s.replace('1941 (reprinted in *Prose*, vol. II (2002), pp. 110–13)', '1941; reprinted in *Prose*, vol. II (2002), pp. 110–13')
        s = s.replace('Edward Mendelson, *Early Auden, Later Auden* (2017)', 'Edward Mendelson, *Early Auden, Later Auden: A Critical Biography* (2017)')
        s = re.sub(r'(Alan Ansen, \*The Table Talk of W\. H\. Auden\*) \((199[01])\)', r'\1, edited by Nicholas Jenkins (\2)', s)
    elif k == 'stands':
        s = re.sub(r'(\*Prose\*, vol\. (?:III|II|I))\b' + TAIL, r'\1', s)
    elif k == 'list':
        def listed(m):
            v = m.group(1)
            if v in seen or v == 'I':  # the first volume's own title is longer and is left as the page has it
                seen.add(v)
                return m.group(0) if v == 'I' else '*Prose*, vol. %s' % v
            seen.add(v)
            return '*Prose*, vol. %s: %s, edited by Edward Mendelson (%s)' % (v, SPAN[v], YEAR[v])
        s = re.sub(r'\*Prose\*, vol\. (III|II|I)\b' + TAIL, listed, s)
    return enchafed(s, k)


def pages(s):
    """The page numbers a line gives, in order: what must not change."""
    return re.findall(r'(?<![\w.])pp?\. ([\divxlc–, and]+?)(?=[.;:)\]]|, (?!\d)| [a-zA-Z(“*]|$)', s)


total = 0
touched = 0
for path in sorted(glob.glob(os.path.join(ROOT, 'remake', 'works', '*', 'reading.json'))):
    piece = os.path.basename(os.path.dirname(path))
    raw = open(path, encoding='utf-8').read()
    spans = scan(raw)
    before = json.loads(raw)
    out, last, edits, seen = [], 0, [], set()
    for p, a, b in spans:
        k = kind(p)
        if not k:
            continue
        old = raw[a + 1:b - 1]
        new = change(old, k, seen)
        if new != old:
            assert pages(json.loads('"' + old + '"')) == pages(json.loads('"' + new + '"')), (piece, p, pages(old), pages(new))
            edits.append((p, k, old, new))
            out.append(raw[last:a + 1] + new)
            last = b - 1
    if not edits:
        continue
    out.append(raw[last:])
    text = ''.join(out)
    after = json.loads(text)

    # nothing but those strings has changed
    def leaves(v, p=()):
        if isinstance(v, dict):
            for key, x in v.items():
                yield from leaves(x, p + (key,))
        elif isinstance(v, list):
            for i, x in enumerate(v):
                yield from leaves(x, p + (i,))
        else:
            yield p, v
    la, lb = dict(leaves(before)), dict(leaves(after))
    assert la.keys() == lb.keys(), piece
    changed = sorted((p for p in la if la[p] != lb[p]), key=str)
    assert changed == sorted((p for p, _, _, _ in edits), key=str), (piece, changed)
    total += len(edits)
    touched += 1
    print('%s: %d lines' % (piece, len(edits)) + ('' if WRITE else ' (not written)'))
    if SHOW:
        for p, k, old, new in edits:
            # show the part that differs, with a little of what stands round it
            i = 0
            while i < min(len(old), len(new)) and old[i] == new[i]:
                i += 1
            j = 0
            while j < min(len(old), len(new)) - i and old[-1 - j] == new[-1 - j]:
                j += 1
            lo = max(0, i - 28)
            print('   %-8s %s' % (k, '.'.join(str(x) for x in p)))
            print('      - ' + old[lo:len(old) - j + 14])
            print('      + ' + new[lo:len(new) - j + 14])
    if WRITE:
        kept = os.path.join(os.path.dirname(path), 'lead', 'before-cite-forms.json')
        os.makedirs(os.path.dirname(kept), exist_ok=True)
        assert not os.path.exists(kept), kept
        shutil.copyfile(path, kept)
        open(path, 'w', encoding='utf-8').write(text)
print('%d lines in %d pieces' % (total, touched))
