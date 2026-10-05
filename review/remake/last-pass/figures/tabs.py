# Lists every Figure tab of the readings as they are now. It reads only; it writes nothing.
#
#   python3 review/remake/last-pass/figures/tabs.py              one line a tab: where, name, plain
#   python3 review/remake/last-pass/figures/tabs.py marks        the same, with the positions of what is marked
#   python3 review/remake/last-pass/figures/tabs.py against      holds the readings against TABS.md (name and plain of each tab)
#
# It prints the site's own words (names, plain-words lines, labels of marks) and positions (rows and
# word numbers). It never prints the words of a passage.
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..'))
WORKS = os.path.join(ROOT, 'remake', 'works')


def pieces():
    return sorted(d for d in os.listdir(WORKS) if os.path.exists(os.path.join(WORKS, d, 'reading.json')))


def tabs():
    """every figure lens: (piece, plate index, plate id, lens index, lens)"""
    for piece in pieces():
        reading = json.load(open(os.path.join(WORKS, piece, 'reading.json'), encoding='utf-8'))
        for pi, plate in enumerate(reading.get('plates', [])):
            for li, lens in enumerate(plate.get('lenses', [])):
                if lens.get('kind') == 'figure':
                    yield piece, pi, plate.get('id'), li, lens, plate


def where(piece, pi, pid, li):
    return f'{piece} plates[{pi}] ("{pid}") lenses[{li}]'


def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else ''
    all_tabs = list(tabs())
    if mode == 'against':
        listed = open(os.path.join(HERE, 'TABS.md'), encoding='utf-8').read()
        # the many-tab part: "- <where> (tab "X")\n  - name as printed: N\n  - plain: P\n"
        many = re.findall(r'^- (\S+ plates\[\d+\] \("[^"]+"\) lenses\[\d+\]) \(tab "[^"]*"\)\n  - name as printed: (.*)\n  - plain: (.*)\n', listed, re.M)
        one = re.findall(r'^- \*\*(.*?)\*\*: (\S+ plates\[\d+\] \("[^"]+"\) lenses\[\d+\]) \(tab "[^"]*"\)\n  - plain: (.*)\n', listed, re.M)
        book = {w: (n, p) for w, n, p in many}
        book.update({w: (n, p) for n, w, p in one})
        bad = 0
        for piece, pi, pid, li, lens, plate in all_tabs:
            w = where(piece, pi, pid, li)
            if w not in book:
                print('not in TABS.md:', w); bad += 1
            elif book[w] != (lens.get('name'), lens.get('plain')):
                print('differs from TABS.md:', w); bad += 1
        here = {where(piece, pi, pid, li) for piece, pi, pid, li, lens, plate in all_tabs}
        for w in book:
            if w not in here:
                print('in TABS.md, not in the readings:', w); bad += 1
        print(f'{len(all_tabs)} figure tabs in the readings, {len(book)} in TABS.md, {bad} differences')
        return
    for piece, pi, pid, li, lens, plate in all_tabs:
        print(f'{where(piece, pi, pid, li)}  tab "{lens.get("label")}"  [{lens.get("name")}]')
        print(f'    plain: {lens.get("plain")}')
        if mode == 'marks':
            print(f'    text: {plate.get("text")} rows {plate.get("rows")}' + (f'  beside it: {plate["pair"].get("text")} rows {plate["pair"].get("rows")}' if plate.get('pair') else ''))
            extra = {k: lens[k] for k in lens if k not in ('kind', 'label', 'name', 'plain', 'parts', 'caption', 'why', 'stands', 'grounds')}
            if extra:
                print(f'    other keys: {json.dumps(extra, ensure_ascii=False)}')
            for p in lens.get('parts', []):
                w = p.get('w')
                rest = {k: p[k] for k in p if k not in ('row', 'w', 'tag', 'label')}
                print(f'      {p.get("tag")!s:12} row {p.get("row")} w {w}  label: {p.get("label")}' + (f'  {json.dumps(rest, ensure_ascii=False)}' if rest else ''))
            print(f'    caption: {len(lens.get("caption", "").split())} words; grounds: ' + '; '.join(f'{g.get("kind")}' + (f' ({g.get("source")})' if g.get('source') else '') for g in lens.get('grounds', [])))


if __name__ == '__main__':
    main()
