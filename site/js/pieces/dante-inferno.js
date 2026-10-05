// The Divine Comedy, Inferno: the one drawing of its own.
//
//   ulysses / Journeys: the cantos of the whole poem as one line, part after
//   part, with a mark at every place where the word comes. A place where it
//   is said of a journey is a dot on the line, and what the facts say of it
//   stands over the line on a stem of its own: where, who says it, and of
//   what. The flags step down in the order of the poem, and one too near
//   the end of the line sets its words to the left of its stem, so that no
//   stem runs through another flag's words. The other places are short
//   strokes on the line. All the places are listed in a table folded away
//   under the drawing.
//
// Everything shown is read from the lens's `facts` when the page runs
// (remake/works/dante-inferno/reading.json): `parts` (part, cantos) and
// `places` (place, canto of 100, said by, said of, a journey, in this
// passage, read). No count, name or word of the poem is typed here.

import { mk, el, RED, INK, QUIET } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

// (a page that shows one piece alone has no reader to open)
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const yes = (v) => v === true || /^(yes|true)$/i.test(String(v == null ? '' : v).trim());
// (a number keeps to the word it counts where a line turns)
const count = (n, one, many = `${one}s`) => `${num(n)}\u00a0${n === 1 ? one : many}`;
// (and a word such as "line" keeps to its number)
const tied = (s) => String(s == null ? '' : s).replace(/ (?=\d)/g, '\u00a0');
const wide = (node, guess) => (node.getComputedTextLength && node.getComputedTextLength()) || guess;
const tall = (node) => node.getBoundingClientRect().height;

// ----- what the facts say -----
function read(f) {
  const parts = (Array.isArray(f.parts) ? f.parts : [])
    .filter((p) => p && p.part && Number(p.cantos) > 0)
    .map((p) => ({ name: String(p.part), cantos: Number(p.cantos) }));
  if (!parts.length) throw new Error('facts: no parts');
  let total = 0;
  parts.forEach((p) => { p.from = total; total += p.cantos; });   // the cantos that stand before it
  // "Paradiso 27, lines 82 and 83": the part, the canto in it, and what follows the canto
  const named = (place) => {
    const s = String(place || '');
    const part = parts.find((p) => s.startsWith(`${p.name} `));
    const m = part ? s.slice(part.name.length).match(/^\s+(\d+)(.*)$/) : null;
    return m ? { part, n: Number(m[1]), head: `${part.name} ${m[1]}`, rest: m[2] } : { part: null, n: 0, head: s, rest: '' };
  };
  const places = (Array.isArray(f.places) ? f.places : []).filter(Boolean).map((r) => {
    const at = named(r.place);
    // its canto, counted through the whole poem: as the facts give it, or else from its place
    const given = Number(Object.entries(r).filter(([key]) => /^canto of \d+$/.test(key)).map(([, v]) => v)[0]);
    const canto = given >= 1 && given <= total ? given : at.part && at.n >= 1 && at.n <= at.part.cantos ? at.part.from + at.n : 0;
    return { place: String(r.place || ''), head: at.head, rest: at.rest, canto, by: r['said by'], of: r['said of'], journey: yes(r['a journey']), here: yes(r['in this passage']), read: r.read, row: r };
  }).sort((a, b) => a.canto - b.canto);
  if (!places.length) throw new Error('facts: no places');
  // (a place that cannot be set on the line, or facts that do not say which places are journeys: the
  // drawing would count or sort them wrongly, so the plain table stands instead)
  if (places.some((r) => !(r.canto > 0))) throw new Error('facts: a place with no canto');
  if (!places.some((r) => 'a journey' in r.row)) throw new Error('facts: no place says whether it is of a journey');
  // the first and the last of them, in the order of the poem
  if (places.length > 1) { places[0].rank = 'first'; places[places.length - 1].rank = 'last'; }
  const partOf = (canto) => parts.findIndex((p) => canto > p.from && canto <= p.from + p.cantos);
  return { parts, total, places, partOf, flags: places.filter((r) => r.journey) };
}

// what the facts say of one place, in a line
const told = (p, total) => `${p.place} (canto\u00a0${num(p.canto)} of ${num(total)})${p.by ? `: said by ${p.by}` : ''}${p.of ? `${p.by ? ',' : ':'} of ${p.of}` : ''}`;

// The words at the head of a flag open their place in the book printed here. Like the links of the
// page they are ruled under with a hairline.
function opens(d, nodes, read, x0, x1, y, at) {
  if (!read || !canRead() || /[\s)]/.test(String(read))) return null;
  const a = mk('a', { href: `#/read/${read}` });
  a.style.textDecoration = 'none';
  d.svg.append(a);
  nodes.filter(Boolean).forEach((n) => a.append(n));
  a.append(d.rule(x0, y, x1, y, { at }));
  return a;
}

// ===== Journeys =====
const journeys = {
  stage: 'own',
  draw(ctx, lens, run) {
    const k = read(lens.facts || {});
    const d = sheet(ctx, lens, run, 360);          // its true height is set at the end, when the notes have been measured
    const W = d.w;
    const R = 3.2;                                 // a dot on the line
    const TICK = 9;                                // a stroke on the line
    const PAD = 7;                                 // between a stem and its words
    const GAP = W >= 480 ? 10 : 6;                 // between two parts
    const L = R + 1;                               // room at each end, so that a dot there stands whole
    // one scale for the whole poem: every canto is as wide as every other
    const u = (W - 2 * L - GAP * (k.parts.length - 1)) / k.total;
    const start = (i) => L + k.parts[i].from * u + i * GAP;
    // the middle of a canto, set on the middle of a pixel so that a thin stroke there is sharp
    const x = (canto) => { const i = k.partOf(canto); return Math.round(start(i) + (canto - k.parts[i].from - 0.5) * u) + 0.5; };

    // where each place stands: at the middle of its canto (two in one canto, side by side)
    k.places.forEach((p) => {
      const same = k.places.filter((q) => q.canto === p.canto);
      p.x = x(p.canto) + (same.length > 1 ? same.indexOf(p) * 3 - Math.floor((same.length - 1) * 1.5) : 0);
    });

    // ----- the flags: one to each place where the word is said of a journey -----
    // The first `cut` of them set their words to the right of their stems and step down in the order of
    // the poem. The rest, too near the end of the line for that, set theirs to the left and step down
    // from the last to the first. So no stem runs through another flag's words. (`over` sets that second
    // group above the first.) Of all such ways the one that leaves its narrowest flag the most room is
    // taken, and among equals the one that keeps the most flags in the order of the poem.
    const flags = k.flags;
    const n = flags.length;
    const FAIR = Math.min(170, W / 2);             // room enough for the words of a flag
    let way = null;
    for (let cut = n; cut >= 0; cut--) {
      for (const over of cut > 0 && cut < n ? [false, true] : [false]) {
        const wall = cut > 0 && cut < n ? (over ? flags[cut].x - PAD : flags[cut - 1].x + PAD) : null;
        const rooms = flags.map((p, i) => (i < cut ? (over && wall != null ? wall : W) - p.x : p.x - (!over && wall != null ? wall : 0)) - PAD);
        const least = Math.min(FAIR, ...rooms);
        if (!way || least > way.least) way = { cut, over, rooms, least };
      }
    }
    flags.forEach((p, i) => {
      p.end = i >= way.cut;                        // its words end at its stem
      p.room = Math.max(40, way.rooms[i]);
      p.at = 450 + i * Math.min(360, 1200 / Math.max(1, n - 1));   // when its stem begins to rise
    });
    const down = flags.slice(0, way.cut); const back = flags.slice(way.cut).reverse();
    const order = way.over ? [...back, ...down] : [...down, ...back];   // from the top of the sheet down
    // The head of a flag is its canto ("Inferno 2"); what the place says after that (the line) follows
    // it where every flag has the room, and nowhere if one has not.
    const probe = (words, cls) => { const t = d.text(0, -60, words, { cls }); const w = wide(t, String(words).length * 7); t.remove(); return w; };
    flags.forEach((p) => { p.wHead = probe(p.head, 'dg-name'); p.wRest = p.rest ? probe(p.rest, 'dg-it') : 0; });
    const full = flags.every((p) => p.wHead + p.wRest <= p.room);

    let y = 0;
    order.forEach((p) => {
      // (in a crowd too close for any of those ways, the words still keep inside the sheet)
      const tx = p.end ? Math.max(p.x - PAD, Math.min(W, p.wHead)) : Math.min(p.x + PAD, Math.max(0, W - p.wHead));
      const hy = y + 15;                           // the baseline of the head
      const wRest = full ? p.wRest : 0;
      const at = p.at + 250;
      p.top = y;
      const head = d.text(p.end ? tx - wRest : tx, hy, p.head, { cls: 'dg-name', anchor: p.end ? 'end' : 'start', fill: p.here ? RED : null, at });
      const rest = wRest ? d.text(p.end ? tx : tx + p.wHead, hy, p.rest, { anchor: p.end ? 'end' : 'start', at }) : null;
      const x0 = p.end ? tx - wRest - p.wHead : tx;
      opens(d, [head, rest], p.read, x0, x0 + p.wHead + wRest, hy + 4.5, at);
      // whether it is the first or the last of all the places, who says it, and of what: each may turn
      // where the room is short
      let ny = hy + 7;
      for (const words of [p.rank ? `the ${p.rank} of the ${count(k.places.length, 'time')}` : '', p.by ? `said by ${p.by}` : '', p.of ? `of ${p.of}` : '']) {
        if (!words) continue;
        const note = d.note(p.end ? Math.max(0, tx - p.room) : Math.min(tx, W - p.room), ny, p.room, words, { align: p.end ? 'right' : null, at: at + 80 });
        note.style.textWrap = 'balance';           // lines of even length: a flag's words stand against its stem
        ny += tall(note);
      }
      y = ny + 9;
    });

    // ----- the line of the cantos -----
    const base = Math.round(y + TICK + 5) + 0.5;
    let low = base + 20;
    const inPart = (i) => k.places.filter((p) => k.partOf(p.canto) === i).length;
    k.parts.forEach((p, i) => {
      const a = start(i); const z = a + p.cantos * u;
      const at = 80 + i * 150;
      d.rule(a, base, z, base, { stroke: INK, at });
      // under it: the part, where its cantos stand in the count of the whole, and how often the word comes in them
      d.text(a, base + 36, p.name, { at: at + 100 });
      const note = d.note(a, base + 41, z - a, [`cantos ${num(p.from + 1)}\u00a0to\u00a0${num(p.from + p.cantos)}`, el('br'), count(inPart(i), 'time')], { at: at + 100 });
      low = Math.max(low, base + 41 + tall(note));
    });

    // ----- the marks, in the order of the poem -----
    const sweep = (canto) => 250 + (canto / k.total) * 900;    // the places come up from the first canto to the last
    k.places.forEach((p, i) => {
      const px = p.x;
      if (!p.journey) {
        // said of something else: a short stroke standing on the line
        const tick = d.rule(px, base, px, base - TICK, { stroke: p.here ? RED : INK, width: 1.3, at: sweep(p.canto) });
        // what answers the pointer is no wider than the room to the marks beside it
        const near = Math.min(...[k.places[i - 1], k.places[i + 1]].filter(Boolean).map((q) => Math.abs(q.x - px)), 12);
        const hw = Math.max(1.5, near / 2);
        d.hot(d.bar(px - hw, base - TICK - 8, hw * 2, TICK + 30, { fill: 'transparent' }), told(p, k.total), tick);
        return;
      }
      // said of a journey: a dot on the line, a stem up to its flag, and its canto under the line
      const color = p.here ? RED : INK;
      const stem = d.rule(px, base - R, px, p.top + 3, { stroke: p.here ? RED : QUIET, at: p.at });
      const dot = d.dot(px, base, R, { fill: color, at: sweep(p.canto) });
      const fig = d.text(px, base + 17, p.canto, { cls: 'dg-n', anchor: 'middle', fill: p.here ? RED : null, at: sweep(p.canto) });
      d.hot(d.bar(px - 6, p.top, 12, base - p.top + 22, { fill: 'transparent' }), told(p, k.total), [stem, dot, fig]);
    });

    // the sheet is as tall as what was set on it
    const H = Math.ceil(low + 2);
    d.svg.setAttribute('height', H);
    d.svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

    const all = k.places.length; const some = flags.length;
    d.keys([
      some ? { mark: 'dot', color: INK, text: `said of a journey: ${num(some)} of the ${count(all, 'time')}` } : null,
      k.places.some((p) => p.here) ? { mark: flags.some((p) => p.here) ? 'dot' : 'line', color: RED, text: 'the one in this passage' } : null,
      all > some ? { mark: 'line', color: INK, text: `said of something else: ${count(all - some, 'time')}` } : null,
    ].filter(Boolean));
    // Every place as the facts give it, folded away under the drawing, in the order of the poem. A narrow
    // sheet has no room for six columns: it keeps the place, who says it and of what, and leaves to the marks
    // what they show already.
    const keep = W >= 480 ? null : ['place', 'said by', 'said of'];
    d.figures(k.places.map((p) => Object.fromEntries(Object.entries(p.row)
      .filter(([key]) => !keep || keep.includes(key))
      .map(([key, v]) => [key, key === 'place' ? tied(v) : v]))), `The ${count(all, 'place')}`);
  },
};

export default { lenses: { 'ulysses:shape': journeys } };
