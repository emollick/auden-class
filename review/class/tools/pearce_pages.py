#!/usr/bin/env python3
"""The kept scan of Pearce's essay, cut into printed pages (examiner's helper).

    python3 review/class/tools/pearce_pages.py            page labels and lengths only
    python3 review/class/tools/pearce_pages.py 153        that page's text, to the screen
    python3 review/class/tools/pearce_pages.py --find W   pages on which the word or phrase W stands
                                                          (prints the label and 60 letters either side)

The number at the foot of a printed page closes it, and the running head of the next page follows.
So the text standing before a number n is on page n. The scan jumps from the middle of p. 137 to
the first lines of p. 146: those two stretches are labelled 137 and 146 here. The cut falls before
"of London": the quoted words "the world" just before it still belong to the lecture on love (p. 137),
as the search text of the whole book shows.
Nothing is written to disk.
"""
import re
import sys

SCAN = '.cache/research/auden/pearce.txt'
HEAD = r'(?:Fortunate Fall: W[.,] H\. Auden at Michigan|W\. ?H\.? Auden ?: The Far Interior)'
FOOT = re.compile(r'\s(1[2-5]\d)\s+' + HEAD + r'\s*/?\s*')


def join(s):
    """Close up words the scan breaks at the end of a line."""
    s = s.replace('¬ ', '').replace('¬', '')
    return re.sub(r'(?<=[a-z])- (?=[a-z])', '', s)


def pages():
    lines = open(SCAN, encoding='utf-8').read().split('\n')
    long = [l for l in lines if len(l) > 1000]
    out = []
    # the first long line: the end of p. 131 and the whole of p. 132, then front matter (not used)
    head = long[0]
    m131 = FOOT.search(head)
    m132 = FOOT.search(head, m131.end())
    out.append(('131', head[:m131.start()]))
    out.append(('132', head[m131.end():m132.start()]))
    # the second long line: from the last words of p. 132 to the first part of p. 153
    body = long[1]
    feet = list(FOOT.finditer(body))
    start = feet[0].end()                       # skip the last words of p. 132 (already held)
    for m in feet[1:]:
        n = m.group(1)
        text = body[start:m.start()]
        if n == '146':
            cut = text.find('of London', text.find('unwelcome role of others'))
            out.append(('137', text[:cut]))
            out.append(('146', text[cut:]))
        else:
            out.append((n, text))
        start = m.end()
    tail153 = body[start:]
    # the third long line begins a few words before the second one ends
    last = long[2]
    feet = list(FOOT.finditer(last))
    key = 'he confided'
    a = tail153.rfind(key)
    b = last.find(key)
    p153 = tail153[:a] + last[b:feet[0].start()] if a >= 0 and b >= 0 else tail153 + ' ' + last[:feet[0].start()]
    out.append(('153', p153))
    start = feet[0].end()
    for m in feet[1:]:
        out.append((m.group(1), last[start:m.start()]))
        start = m.end()
    # p. 157 ends where the next essay's number and title begin
    end = re.search(r'\s157\s', last[start:])
    out.append(('157', last[start:start + end.start()] if end else last[start:start + 2600]))
    return [(n, join(t).strip()) for n, t in out]


if __name__ == '__main__':
    import textwrap
    pp = pages()
    if len(sys.argv) == 1:
        for n, t in pp:
            print(n, len(t), 'letters,', len(t.split()), 'words')
    elif sys.argv[1] == '--find':
        want = ' '.join(sys.argv[2:]).lower()
        for n, t in pp:
            low = t.lower()
            at = low.find(want)
            while at >= 0:
                print('p.', n, '|', t[max(0, at - 60):at + len(want) + 60].replace('\n', ' '))
                at = low.find(want, at + 1)
    else:
        for n, t in pp:
            if n == sys.argv[1]:
                print(textwrap.fill(t, 150))
