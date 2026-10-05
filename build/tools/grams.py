#!/usr/bin/env python3
# What build/tools/runs-sweep.py does for a scan on disk, done for a book
# the site has only as search snippets at archive.org: every run of N
# words of a printed sentence that reports such a book is searched as an
# exact phrase inside that book's item, through the public full-text
# search. A run that is found is printed in the page's own words with the
# number of hits; the scan's text is never printed.
#
#   python3 build/tools/grams.py plan [piece ...]
#       no network: for each piece, the printed fields that report a book
#       known only in snippets, the item each is searched in, and how many
#       searches that is
#   python3 build/tools/grams.py run [--jobs 4] [--n 5] [--out DIR] piece ...
#       the searches; one file per piece in DIR (default review/remake/grams)
#   python3 build/tools/grams.py field <piece> <item> <path> [--n 5]
#       one field against one item (path: view.says, auden.1.says,
#       plates.0.lenses.3.caption ...)
#
# Which fields: view.says with view.source; each auden[i].says with its
# source; each caption with the sources of its grounds of kind "auden".
# Of a caption only the sentences that name Auden, and the sentence after
# each, are searched: the rest is about the passage. A source is matched
# to an item by the book's title (BOOKS below). The four books that are
# on disk as scans are left to runs-sweep.py, and so is Mendelson's
# biography of 2017, whose text is on disk too (give it to runs-sweep.py
# as one more scan). Of the volumes of the prose in the Complete Works
# only the second has an item; a field whose source is another volume is
# listed as not searched.
#
# What has been searched is kept, a file for each passage of the page's
# prose and item, in DIR/cache, under a name made from the item, N and the
# words. "run" searches only what is not there, so a run that was cut
# short can be started again, and after a reading changes only the
# changed sentences are searched. A passage with a failed search is
# searched again on the next run.
#
# The windows are searched in groups of 24 joined by OR: a group with no
# hit is settled in one search, and a group with a hit is halved until
# the window is found. (One search takes 4 to 7 seconds whatever it asks.)
#
# The search service fails now and then for one phrase in one item (its
# backend answers 502). Such a window is then tried as its two runs of
# N-1 words: if either is not in the item, neither is the window. Only a
# window that cannot be settled so is printed as FAILED.
#
# What it cannot see: a run that the scan's text breaks with a running
# head, a hyphen at a line's end or a misread word.
#
# Made from remake/works/baudelaire/finisher/grams.py and
# remake/works/karamazov/finisher/pdruns.py (3 October 2026).
import json, sys, re, time, os, ssl, glob, hashlib, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..')

# title as the page prints it -> the item at archive.org
BOOKS = [
    ('Lectures on Shakespeare', 'lecturesonshakes00aude'),
    ('The Prolific and the Devourer', 'prolificdevourer00aude'),
    ('Intimate Journals', 'intimatejournals0000char_k2x1'),
    ('New Year Letter', 'newyearletter0000aude'),
    ('The Double Man', 'doubleman0000aude'),
    ('Secondary Worlds', 'secondaryworldse00aude'),
    ('Table Talk', 'tabletalkofwhaud0000anse'),
    ('The English Auden', 'englishaudenpoem0000aude'),
    ('Libretti', 'librettiotherdra00aude'),
    ('Collected Poems', 'collectedpoems0000aude_b8y3'),
    ('Collected Poetry', 'collectedpoetry0000aude'),
    ('An American Friendship', 'audenamericanfri00mill'),
    ('Poets at Work', 'poetsatwork0000char'),
    ('The Kafka Problem', 'kafkaproblem0000ange'),
    ('In Solitude, for Company', 'insolitudeforcom0000aude'),
]

# The prose of the Complete Works: the volume as a source names it
# ("Prose, vol. II", "Prose, Volume II", "Prose, vol. 2", "Prose II") ->
# the item. Volumes I and III are in no item the site knows.
PROSE = {'II': 'prosetravelbooks0000aude', 'III': 'trent_0116405823828'}
ROMAN = {'1': 'I', '2': 'II', '3': 'III', '4': 'IV', '5': 'V', '6': 'VI'}
PROSE_RE = re.compile(r'\bProse\b[,:]?\s*(?:[Vv]ol(?:ume|\.)?\s*)?(III|II|IV|VI|I|V|[1-6])\b')


def prose_volumes(source):
    s = re.sub(r'[*_]', '', source or '')
    return [ROMAN.get(v, v) for v in PROSE_RE.findall(s)]


def items_of(source):
    s = re.sub(r'[*_]', '', source or '')
    out = []
    for title, item in BOOKS:
        if title in s:
            out.append(item)
    for v in prose_volumes(source):
        if v in PROSE and PROSE[v] not in out:
            out.append(PROSE[v])
    return out


def unsearched(source):
    # the volumes of the prose a source names that are in no item
    return ['Prose, vol. ' + v for v in prose_volumes(source) if v not in PROSE]


def words_of(text):
    t = re.sub(r'<[^>]+>', ' ', text)
    t = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', t)
    t = t.replace('*', ' ').replace('’', "'").replace('‘', "'")
    w = [y.strip('.,;:()“”"!?—–-') for y in t.split()]
    return [y for y in w if y]


def auden_sentences(text):
    # the sentences that name Auden and the one after each, as chunks of
    # neighboring sentences
    sents = re.split(r'(?<=[.?!])["”’)]*\s+(?=[A-Z“‘<*\[])', text)
    keep = set()
    for i, x in enumerate(sents):
        if 'Auden' in x:
            keep.add(i)
            if i + 1 < len(sents):
                keep.add(i + 1)
    chunks, cur = [], []
    for i, x in enumerate(sents):
        if i in keep:
            cur.append(x)
        elif cur:
            chunks.append(' '.join(cur))
            cur = []
    if cur:
        chunks.append(' '.join(cur))
    return chunks


def fields_of(piece):
    d = json.load(open(os.path.join(ROOT, 'remake', 'works', piece, 'reading.json'), encoding='utf8'))
    out, miss = [], []
    v = d.get('view') or {}
    if v.get('says'):
        its = items_of(v.get('source'))
        if its:
            out.append(('view.says', [v['says']], its))
        for u in unsearched(v.get('source')):
            miss.append(('view.says', u))
    for i, e in enumerate(d.get('auden') or []):
        its = items_of(e.get('source'))
        if its and e.get('says'):
            out.append((f'auden.{i}.says', [e['says']], its))
        for u in unsearched(e.get('source')):
            miss.append((f'auden.{i}.says', u))
    for pi, p in enumerate(d.get('plates') or []):
        for li, L in enumerate(p.get('lenses') or []):
            its, un = [], []
            for g in L.get('grounds') or []:
                if g.get('kind') == 'auden':
                    for it in items_of(g.get('source')):
                        if it not in its:
                            its.append(it)
                    for u in unsearched(g.get('source')):
                        if u not in un:
                            un.append(u)
            if its and L.get('caption'):
                ch = auden_sentences(L['caption'])
                if ch:
                    out.append((f'plates.{pi}.lenses.{li}.caption', ch, its))
            for u in un:
                miss.append((f'plates.{pi}.lenses.{li}.caption', u))
    return out, miss


ca = os.environ.get('SSL_CERT_FILE') or os.environ.get('CURL_CA_BUNDLE')
ctx = ssl.create_default_context(cafile=ca) if ca else ssl.create_default_context()


def total(item, q):
    url = 'https://archive.org/services/search/beta/page_production/?' + urllib.parse.urlencode({
        'service_backend': 'fts', 'user_query': '"' + q + '" AND identifier:' + item,
        'hits_per_page': '1', 'page': '1'})
    err = ''
    for attempt in range(3):
        try:
            r = json.load(urllib.request.urlopen(url, timeout=60, context=ctx))
            return r.get('response', {}).get('body', {}).get('hits', {}).get('total')
        except Exception as e:
            err = str(e)[:80]
            time.sleep(2 + 3 * attempt)
    return 'ERR ' + err


def window(item, q):
    t = total(item, q)
    if not str(t).startswith('ERR'):
        return t
    w = q.split()
    if len(w) < 4:
        return t
    for sub in (' '.join(w[:-1]), ' '.join(w[1:])):
        u = total(item, sub)
        if u == 0:
            return 0
    return t


def batch_total(item, phrases):
    # several phrases in one search: the number of hits for any of them
    q = '(' + ' OR '.join('"' + p + '"' for p in phrases) + ') AND identifier:' + item
    url = 'https://archive.org/services/search/beta/page_production/?' + urllib.parse.urlencode({
        'service_backend': 'fts', 'user_query': q, 'hits_per_page': '1', 'page': '1'})
    err = ''
    for attempt in range(2):
        try:
            r = json.load(urllib.request.urlopen(url, timeout=90, context=ctx))
            return r.get('response', {}).get('body', {}).get('hits', {}).get('total')
        except Exception as e:
            err = str(e)[:80]
            time.sleep(2 + 3 * attempt)
    return 'ERR ' + err


def settle(item, wins):
    # wins: [(index, phrase)]. A group that has no hit is done in one
    # search; a group with a hit, or one the service fails on, is halved.
    if not wins:
        return []
    if len(wins) == 1:
        i, q = wins[0]
        return [(i, q, window(item, q))]
    t = batch_total(item, [q for _, q in wins])
    if t == 0:
        return [(i, q, 0) for i, q in wins]
    mid = len(wins) // 2
    return settle(item, wins[:mid]) + settle(item, wins[mid:])


GROUP = 24


def cache_file(cache, item, text, n):
    w = words_of(text)
    key = hashlib.sha1((item + '\n' + str(n) + '\n' + ' '.join(w)).encode('utf8')).hexdigest()[:24]
    return os.path.join(cache, key + '.json')


def search_field(item, text, n, pool, cache=None):
    # -> words, windows, found [(index, phrase, hits)], errs, searched now?
    w = words_of(text)
    wins = [(i, ' '.join(w[i:i + n])) for i in range(0, max(0, len(w) - n + 1))]
    f = cache_file(cache, item, text, n) if cache else None
    if f and os.path.exists(f):
        c = json.load(open(f, encoding='utf8'))
        if not c['errs']:
            return len(w), len(wins), [tuple(x) for x in c['found']], [], False
    groups = [wins[a:a + GROUP] for a in range(0, len(wins), GROUP)]
    res = [r for part in pool.map(lambda g: settle(item, g), groups) for r in part]
    found = [(i, q, t) for i, q, t in res if t and not str(t).startswith('ERR')]
    errs = [(i, q, t) for i, q, t in res if str(t).startswith('ERR')]
    if f:
        os.makedirs(cache, exist_ok=True)
        with open(f, 'w', encoding='utf8') as h:
            json.dump({'item': item, 'n': n, 'words': len(w), 'found': found, 'errs': errs}, h, ensure_ascii=False)
    return len(w), len(wins), found, errs, True


def merge(found, n):
    # neighboring windows that are found make one longer run
    runs = []
    for i, q, t in found:
        if runs and i == runs[-1][1] + 1:
            runs[-1][1] = i
            runs[-1][2].append(q.split()[-1])
        else:
            runs.append([i, i, q.split()])
    return [(a + 1, b + n, ' '.join(ws)) for a, b, ws in runs]


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__ or 'see the head of this file')
    mode, a = a[0], a[1:]
    n, jobs, out = 5, 4, os.path.join(ROOT, 'review', 'remake', 'grams')
    rest = []
    while a:
        x = a.pop(0)
        if x == '--n':
            n = int(a.pop(0))
        elif x == '--jobs':
            jobs = int(a.pop(0))
        elif x == '--out':
            out = a.pop(0)
        else:
            rest.append(x)
    if mode == 'field':
        piece, item, path = rest
        d = json.load(open(os.path.join(ROOT, 'remake', 'works', piece, 'reading.json'), encoding='utf8'))
        x = d
        for k in path.split('.'):
            x = x[int(k)] if k.isdigit() else x[k]
        with ThreadPoolExecutor(jobs) as pool:
            nw, nwin, found, errs, _ = search_field(item, x, n, pool)
        print(f'{piece}  [{path}]  {nw} words, {nwin} searches in {item}')
        for s, e, q in merge(found, n):
            print(f'  words {s} to {e}: {q}')
        print(f'  {len(found)} windows found, {len(errs)} searches failed')
        return
    pieces = rest or sorted(os.path.basename(os.path.dirname(f)) for f in glob.glob(os.path.join(ROOT, 'remake', 'works', '*', 'reading.json')))
    if mode == 'plan':
        grand = 0
        cache = os.path.join(out, 'cache')
        todo = 0
        for piece in pieces:
            fs, miss = fields_of(piece)
            tot, new = 0, 0
            lines = []
            for path, chunks, its in fs:
                nw = sum(len(words_of(t)) for t in chunks)
                tot += sum(max(0, len(words_of(t)) - n + 1) for t in chunks) * len(its)
                for it in its:
                    for t in chunks:
                        if not os.path.exists(cache_file(cache, it, t, n)):
                            new += max(0, len(words_of(t)) - n + 1)
                lines.append(f'    {path}  {nw} words  {", ".join(its)}')
            for path, u in miss:
                lines.append(f'    {path}  not searched: {u} is in no item')
            grand += tot
            todo += new
            print(f'{piece}: {len(fs)} fields, {tot} searches, {new} of them not yet made')
            for l in lines:
                print(l)
        print(f'{len(pieces)} pieces; {grand} searches, {todo} not yet made')
        return
    if mode == 'run':
        os.makedirs(out, exist_ok=True)
        cache = os.path.join(out, 'cache')
        with ThreadPoolExecutor(jobs) as pool:
            for piece in pieces:
                fs, miss = fields_of(piece)
                lines, nfound, nerr, nsearch, nnow = [], 0, 0, 0, 0
                for path, chunks, its in fs:
                    for item in its:
                        for text in chunks:
                            nw, nwin, found, errs, now = search_field(item, text, n, pool, cache)
                            nsearch += nwin
                            nnow += nwin if now else 0
                            nerr += len(errs)
                            for s, e, q in merge(found, n):
                                nfound += 1
                                lines.append(f'{piece}  [{path}]  ({item}): {q}')
                            for i, q, t in errs:
                                lines.append(f'{piece}  [{path}]  FAILED  ({item}): {q}: {t}')
                for path, u in miss:
                    lines.append(f'{piece}  [{path}]  not searched: {u} is in no item')
                head = f'{piece}: {len(fs)} fields, {nsearch} searches ({nnow} made now), {nfound} runs of {n} or more words found, {nerr} searches failed, {len(miss)} sources in no item'
                with open(os.path.join(out, piece + '.txt'), 'w', encoding='utf8') as f:
                    f.write(head + '\n' + '\n'.join(lines) + ('\n' if lines else ''))
                print(head, flush=True)
        return
    sys.exit('plan, run or field')


if __name__ == '__main__':
    main()
