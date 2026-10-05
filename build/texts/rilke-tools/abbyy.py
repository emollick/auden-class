# Read the ABBYY file of scan 1 (journalofmyother00rilk_abbyy.gz): every
# character with its box, and whether it is italic or small capitals.
# pages(): list indexed by n (the page index of the _djvu.xml); each page is a
# list of lines; each line {'base', 'l','t','r','b', 'chars': [{'c','l','t','r','b','it','sc','conf'}]}
import gzip, html, os, re
from ocrxml import CACHE

_LINE = re.compile(r'<line baseline="(\d+)" l="(\d+)" t="(\d+)" r="(\d+)" b="(\d+)">(.*?)</line>', re.S)
_FMT = re.compile(r'<formatting ([^>]*)>(.*?)</formatting>', re.S)
_CH = re.compile(r'<charParams l="(\d+)" t="(\d+)" r="(\d+)" b="(\d+)"([^>]*)>([^<]*)</charParams>')

def pages():
    s = gzip.open(os.path.join(CACHE, 'ia_rilke_linton_abbyy.gz'), 'rt', encoding='utf8').read()
    out = []
    for p in s.split('<page ')[2:]:      # the ABBYY file has one leaf more at the front than the _djvu.xml
        lines = []
        for m in _LINE.finditer(p):
            chars = []
            for f in _FMT.finditer(m.group(6)):
                it = 'italic="true"' in f.group(1)
                sc = 'smallcaps="true"' in f.group(1)
                for c in _CH.finditer(f.group(2)):
                    conf = re.search(r'charConfidence="(-?\d+)"', c.group(5))
                    chars.append({'c': html.unescape(c.group(6)) or ' ', 'l': int(c.group(1)), 't': int(c.group(2)), 'r': int(c.group(3)), 'b': int(c.group(4)),
                                  'it': it, 'sc': sc, 'conf': int(conf.group(1)) if conf else None})
            if any(ch['c'].strip() for ch in chars):
                lines.append({'base': int(m.group(1)), 'l': int(m.group(2)), 't': int(m.group(3)), 'r': int(m.group(4)), 'b': int(m.group(5)), 'chars': chars})
        out.append(lines)
    return out

def text(line):
    return ''.join(ch['c'] for ch in line['chars'])
