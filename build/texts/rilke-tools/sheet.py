# Cut the printed line (or a window round a word) out of the page images and
# stack the cuttings on contact sheets, each with a label, for checking
# doubtful words by eye. Uses ImageMagick's convert, which the machine has.
# usage: python3 sheet.py items.json outdir [--cols 2] [--rows 15] [--win 760] [--full]
# items: [{"id": .., "n": page index in scan 1, "line": .., "word": .., "count": .., "label": "..", "scan": 1|2}]
import json, os, subprocess, sys, tempfile
from ocrxml import parse, OFFSET, CACHE

PAGES = os.path.join(CACHE, 'rilke-pages')

def run(args):
    subprocess.run(args, check=True)

def esc(s):
    return s.replace('\\', '\\\\').replace('%', '%%').replace('@', '\\@')

def main():
    items = json.load(open(sys.argv[1]))
    outdir = sys.argv[2]
    opt = {'--cols': 2, '--rows': 18, '--win': 1000, '--pad': 18, '--tw': 760}
    full = '--full' in sys.argv
    for k in list(opt):
        if k in sys.argv:
            opt[k] = int(sys.argv[sys.argv.index(k) + 1])
    cols, rows, win, pad = opt['--cols'], opt['--rows'], opt['--win'], opt['--pad']
    os.makedirs(outdir, exist_ok=True)
    S = {}
    tmp = tempfile.mkdtemp(prefix='rilke-sheet-')
    tiles = []
    for k, it in enumerate(items):
        scan = it.get('scan', 1)
        if scan not in S:
            S[scan] = parse(scan)
        n = it['n'] + OFFSET[scan]
        page = S[scan][n]
        line = page['lines'][it['line']]
        ws = line['words']
        ly0 = min(w['y0'] for w in ws); ly1 = max(w['y1'] for w in ws)
        lx0 = min(w['x0'] for w in ws); lx1 = max(w['x1'] for w in ws)
        # words that share a box with a neighbour (see ocrxml) give no place: show the line from its start
        w0 = ws[min(it.get('word', 0), len(ws) - 1)]
        w1 = ws[min(it.get('word', 0) + max(it.get('count', 1), 1) - 1, len(ws) - 1)]
        cx = (w0['x0'] + w1['x1']) // 2
        H = it.get('h', 0) or (ly1 - ly0 + 2 * pad)
        y = max(0, ly0 - pad - it.get('above', 0))
        H += it.get('above', 0) + it.get('below', 0)
        if full or it.get('full'):
            x = 0; W = page['w']
        else:
            W = win
            x = max(0, min(page['w'] - W, cx - W // 2))
        img = os.path.join(PAGES, 's%dj' % scan, 'n%03d.jpg' % n)
        tile = os.path.join(tmp, 't%05d.png' % k)
        draw = []
        if it.get('mark', True) and not (full or it.get('full')) or it.get('mark') is True:
            ux0, ux1 = w0['x0'] - x, w1['x1'] - x
            uy = min(H - 3, ly1 - y + 8)
            draw = ['-stroke', 'red', '-strokewidth', '3', '-draw', 'line %d,%d %d,%d' % (ux0, uy, ux1, uy)]
        tw = it.get('tw', opt['--tw'] if not (full or it.get('full')) else W)
        run(['convert', img, '-crop', '%dx%d+%d+%d' % (W, H, x, y), '+repage', '-colorspace', 'sRGB'] + draw +
            ['-resize', '%dx' % tw if tw != W else '100%',
             '(', '-background', '#ffffcc', '-stroke', 'none', '-fill', 'black', '-font', 'DejaVu-Sans-Mono', '-pointsize', '19', '-size', '%dx26' % tw,
             'caption:' + esc(it.get('label', str(it.get('id', k)))), ')', '+swap', '-append',
             '-background', 'white', '-gravity', 'northwest', '-extent', '%dx%d' % (tw, int(H * tw / W) + 30), tile])
        tiles.append(tile)
    per = cols * rows
    sheets = []
    for s in range(0, len(tiles), per):
        chunk = tiles[s:s + per]
        colfiles = []
        for c in range(cols):
            sub = chunk[c * rows:(c + 1) * rows]
            if not sub:
                continue
            cf = os.path.join(tmp, 'c%04d_%d.png' % (s, c))
            run(['convert'] + sub + ['-append', cf])
            colfiles.append(cf)
        out = os.path.join(outdir, 'sheet%03d.jpg' % (s // per))
        run(['convert'] + colfiles + ['-background', 'white', '-gravity', 'north', '+append', '-quality', '88', out])
        sheets.append(out)
    print(len(tiles), 'tiles on', len(sheets), 'sheets in', outdir)

if __name__ == '__main__':
    main()
