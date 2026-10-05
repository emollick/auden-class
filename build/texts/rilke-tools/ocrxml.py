# Shared helpers for the Rilke collation tools (Python 3 standard library only).
# Reads the Internet Archive DjVu XML files cached in .cache/texts.
import html, os, re

CACHE = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../../.cache/texts'))
SCANS = {
    1: 'ia_rilke_linton_djvu.xml',    # journalofmyother00rilk, ABBYY OCR (the base text)
    2: 'ia_rilke_linton2_djvu.xml',   # journalofmyother0000rain, Tesseract OCR, same Norton edition
    3: 'ia_rilke_hogarth_djvu.xml',   # notebookofmaltel0000rain, Tesseract OCR, Hogarth issue of the same setting
}
# Page index (0-based OBJECT number in the XML) of scan 1 is n; the same
# printed page is n + OFFSET[scan] in the other scans. Printed page = n - 3.
OFFSET = {1: 0, 2: 4, 3: 4}
FIRST, LAST = 6, 246   # scan-1 indices of the first and last page of the text

_TOKEN = re.compile(r'<(PARAGRAPH|LINE)(?: [^>]*)?>|<WORD coords="([\d,]+)"(?: x-confidence="(\d+)")?>([^<]*)</WORD>')

def parse(scan):
    s = open(os.path.join(CACHE, SCANS[scan]), encoding='utf8').read()
    pages = []
    for oi, o in enumerate(re.split(r'<OBJECT ', s)[1:]):
        m = re.match(r'[^>]*width="(\d+)" height="(\d+)"', o)
        page = {'i': oi, 'w': int(m.group(1)), 'h': int(m.group(2)), 'lines': []}
        first = False
        cur = None
        for t in _TOKEN.finditer(o):
            if t.group(1) == 'PARAGRAPH':
                first = True
            elif t.group(1) == 'LINE':
                cur = {'pstart': first, 'words': []}
                first = False
                page['lines'].append(cur)
            else:
                c = [int(x) for x in t.group(2).split(',')]
                # A WORD may hold two words (ABBYY joins the tail of a word broken
                # at a line end to the word after it): every word is a token, and
                # tokens of one WORD share its box.
                for part in html.unescape(t.group(4)).split():
                    cur['words'].append({'t': part, 'x0': c[0], 'y1': c[1], 'x1': c[2], 'y0': c[3],
                                         'c': int(t.group(3)) if t.group(3) else None})
        page['lines'] = [l for l in page['lines'] if l['words']]
        pages.append(page)
    return pages

def line_text(l):
    return ' '.join(w['t'] for w in l['words'])

def line_box(l):
    ws = l['words']
    return (min(w['x0'] for w in ws), min(w['y0'] for w in ws), max(w['x1'] for w in ws), max(w['y1'] for w in ws))
