# The order of the front page's cards, so that the two columns of each kind end near each other.
#
#   node review/remake/last-pass/tools/front-cards.mjs <dir> 1280 <tag> none | python3 review/remake/last-pass/tools/front-order.py [--gap 22]
#
# Reads what front-cards.mjs prints (way, piece, place, size of every card as the page stands) and, for
# each kind of card, prints: the heights; where the two columns end now; and an order in which the first
# card stays first, the cards of each column keep the order of Auden's list, and the columns end near each
# other without moving more cards than the evenness is worth. The order goes into remake/front.json as "order": { "<kind>": [...] }, which
# build/front.mjs reads. Words are never printed: a card is named by its piece.
import itertools, json, re, sys

args = sys.argv[1:]
GAP = float(args[args.index('--gap') + 1]) if '--gap' in args else None
ways, order = {}, []
for line in sys.stdin:
    m = re.match(r'^(\w+)\s+(\S+)\s+x\s+(-?\d+)\s+y\s+(-?\d+)\s+(\d+) by (\d+)', line)
    if not m or m.group(1) == 'hero':
        continue
    way, piece, x, y, w, h = m.group(1), m.group(2), int(m.group(3)), int(m.group(4)), int(m.group(5)), int(m.group(6))
    if way not in ways:
        ways[way] = []
        order.append(way)
    ways[way].append({'id': piece, 'x': x, 'y': y, 'h': h})


def ends(cards, gap):
    """where two columns end if the cards run down the first and then the second: the split a browser
    that balances its columns takes is the one with the lower taller column"""
    best = None
    for k in range(1, len(cards) + 1):
        a = sum(c['h'] for c in cards[:k]) + gap * (k - 1)
        b = sum(c['h'] for c in cards[k:]) + gap * max(0, len(cards) - k - 1)
        if best is None or max(a, b) < max(best[0], best[1]):
            best = (a, b, k)
    return best


proposed = {}
for way in order:
    cards = ways[way]
    xs = sorted(set(c['x'] for c in cards))
    # the gap between two cards of a column, as the page has it
    gap = GAP
    if gap is None:
        gaps = []
        for x in xs:
            col = sorted((c for c in cards if c['x'] == x), key=lambda c: c['y'])
            gaps += [b['y'] - a['y'] - a['h'] for a, b in zip(col, col[1:])]
        gap = min(gaps) if gaps else 22
    now = [max(c['y'] + c['h'] for c in cards if c['x'] == x) for x in xs]
    print('%s: %d cards, %d column%s now, ending %s (apart by %d px); gap %d px' % (
        way, len(cards), len(xs), '' if len(xs) == 1 else 's', ' and '.join(str(n) for n in now),
        (max(now) - min(now)) if len(now) > 1 else 0, gap))
    print('   ' + '  '.join('%s %d' % (c['id'], c['h']) for c in cards))
    if len(cards) < 3:
        proposed[way] = [c['id'] for c in cards]
        print('   too few to order')
        continue
    best = None
    rest_ix = list(range(1, len(cards)))
    for n in range(0, len(rest_ix) + 1):
        for pick in itertools.combinations(rest_ix, n):
            first = [cards[0]] + [cards[i] for i in pick]
            second = [cards[i] for i in rest_ix if i not in pick]
            if not second:
                continue
            a = sum(c['h'] for c in first) + gap * (len(first) - 1)
            b = sum(c['h'] for c in second) + gap * (len(second) - 1)
            diff = abs(a - b)
            # a card that leaves its place in the order of Auden's list is worth 20 px of evenness: an order
            # that moves five cards to bring the columns 60 px nearer is not taken
            moved = sum(1 for j, c in enumerate(first + second) if c is not cards[j])
            key = (diff + 20 * moved, 0 if a >= b else 1)
            if best is None or key < best[0]:
                best = (key, first, second, a, b)
    _, first, second, a, b = best
    new = first + second
    e = ends(new, gap)
    proposed[way] = [c['id'] for c in new]
    print('   proposed: %s | %s' % (' '.join(c['id'] for c in first), ' '.join(c['id'] for c in second)))
    print('   columns of %d and %d px (apart by %d); a balancing browser would end them at %d and %d; %d cards leave their place' % (
        a, b, abs(a - b), e[0], e[1], sum(1 for j, c in enumerate(new) if c is not cards[j])))
print(json.dumps({'order': proposed}, indent=1))
