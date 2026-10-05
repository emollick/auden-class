// Götterdämmerung: the drawing of its own.
//
//   brand / Told:  the libretto as one line, running down the page, its lines
//                  of verse to scale. On one side of the line stands every
//                  place where the first end is told before it comes, on the
//                  other side every place where the second is told; each end
//                  stands in red where it comes. The three passages of the
//                  page are short bars on the line.
//
// Everything is read from the lens's `facts`
// (remake/works/gotterdammerung/reading.json) each time the page runs: no
// name, word or number of the opera is typed here.

import { mk, RED, INK, QUIET } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
// a reader with a finger and no pointer
const finger = () => typeof matchMedia === 'function' && matchMedia('(hover: none)').matches;
// A mark that opens its place in the book printed here. A finger only asks what the mark is; the line
// that answers carries the way in (`way`).
function opens(node, read) {
  if (!read || !canRead() || /[)\s]/.test(read)) return node;
  const a = mk('a', { href: `#/read/${read}`, tabindex: -1 });
  node.replaceWith(a); a.append(node);
  a.style.cursor = 'pointer';
  a.style.textDecoration = 'none';   // a name in a drawing is not ruled under: the pointer's hand says it opens
  let touch = false;
  a.addEventListener('pointerdown', (e) => { touch = e.pointerType === 'touch'; });
  a.addEventListener('click', (e) => { if (touch) e.preventDefault(); });
  return a;
}
const way = (words, read) => (finger() && canRead() && read && !/[)\s]/.test(read) ? `[${words}](#/read/${read})` : words);
const str = (v) => (v === null || v === undefined ? '' : String(v).trim());
const stop = (s) => (/[.!?]$/.test(s) ? s : `${s}.`);
const sized = (d, h) => { const H = Math.ceil(h); d.svg.setAttribute('height', H); d.svg.setAttribute('viewBox', `0 0 ${d.w} ${H}`); };

// What the facts say, tested before anything is drawn. If something is missing the kit shows its table.
function read(f) {
  if (!f || typeof f !== 'object') throw new Error('facts: none');
  const total = f.lines;
  if (!Number.isFinite(total) || total < 1) throw new Error('facts: no lines');
  const parts = Array.isArray(f.parts) ? f.parts : [];
  if (!parts.length || parts.some((p) => !p || !Number.isFinite(p.lines) || !str(p.name))) throw new Error('facts: no parts');
  if (parts.reduce((n, p) => n + p.lines, 0) !== total) throw new Error('facts: the parts do not add up to the lines');
  const ends = Array.isArray(f.ends) ? f.ends : [];
  if (ends.length !== 2) throw new Error('facts: the drawing has two sides, one for each of two ends');
  const inside = (n) => Number.isFinite(n) && n >= 1 && n <= total;
  for (const e of ends) {
    if (!e || !str(e.name)) throw new Error('facts: an end with no name');
    if (!e.comes || !inside(e.comes.line) || !str(e.comes.who)) throw new Error(`facts: no line at which ${e.name} comes`);
    if (!Array.isArray(e.told) || !e.told.length || e.told.some((t) => !t || !inside(t.line) || !str(t.who))) throw new Error(`facts: no tellings of ${e.name}`);
  }
  let from = 0;
  return {
    total,
    parts: parts.map((p) => { const part = { name: str(p.name), lines: p.lines, read: p.read, from }; from += p.lines; return part; }),
    ends: ends.map((e) => ({ name: str(e.name), comes: e.comes, told: [...e.told].sort((a, b) => a.line - b.line) })),
    passages: (Array.isArray(f.passages) ? f.passages : []).filter((p) => p && inside(p.first) && inside(p.last) && p.last >= p.first),
  };
}

// Labels keep to the height of their marks. Where two would touch, the group they make is set out evenly
// about the middle of its marks, and no label leaves the drawing. `ys` in order, from the top.
function spread(ys, gap, lo, hi) {
  const hold = (g) => { const half = ((g.to - g.from) * gap) / 2; g.mid = Math.min(Math.max(g.mid, lo + half), Math.max(lo + half, hi - half)); return g; };
  const top = (g) => g.mid - ((g.to - g.from) * gap) / 2;
  const foot = (g) => g.mid + ((g.to - g.from) * gap) / 2;
  const groups = ys.map((y, i) => hold({ from: i, to: i, mid: y }));
  for (let i = 0; i < groups.length - 1;) {
    const a = groups[i]; const b = groups[i + 1];
    if (top(b) - foot(a) >= gap) { i++; continue; }
    const all = ys.slice(a.from, b.to + 1);
    groups.splice(i, 2, hold({ from: a.from, to: b.to, mid: all.reduce((s, y) => s + y, 0) / all.length }));
    i = Math.max(0, i - 1);
  }
  const out = [];
  groups.forEach((g) => { for (let i = g.from; i <= g.to; i++) out[i] = top(g) + (i - g.from) * gap; });
  return out;
}

// The name of an end, on one line where there is room for it and on two where there is not.
function headed(words, width, fits) {
  if (fits(words) <= width) return [words];
  const list = words.split(' ');
  let best = [words];
  let wide = Infinity;
  for (let i = 1; i < list.length; i++) {
    const pair = [list.slice(0, i).join(' '), list.slice(i).join(' ')];
    const w = Math.max(...pair.map(fits));
    if (w < wide) { wide = w; best = pair; }
  }
  return best;
}

// A name with no room for all of it is cut short, with three points. (The whole name is in the line that
// speaks and in the table. With the facts as they stand no name is cut, at any width.)
function cut(words, room, fits) {
  if (fits(words) <= room) return words;
  let n = words.length - 1;
  while (n > 1 && fits(`${words.slice(0, n).trimEnd()}…`) > room) n--;
  return `${words.slice(0, n).trimEnd()}…`;
}

// ----- Told: the libretto down the page, and where each end is told -----
const told = {
  name: 'Told',
  stage: 'own',
  draw(ctx, lens, run) {
    const k = read(lens.facts);
    const d = sheet(ctx, lens, run, 100);
    const W = d.w;
    const fits = (cls) => (words) => { const t = d.text(0, 0, words, { cls }); const w = t.getComputedTextLength(); t.remove(); return w; };
    const P = 14.5;                                  // from one label to the next, at the least
    const GAP = 5; const NG = 6;                     // from a tick to its figure, from the figure to the name
    const BODY = W < 420 ? 410 : 460;                // the libretto, from its first line to its last

    // ----- the two sides: what each needs, and where the line stands between them -----
    const sides = k.ends.map((e, i) => {
      const marks = e.told.map((t) => ({ line: t.line, who: str(t.who), says: str(t.says), read: t.read, end: false }))
        .concat([{ line: e.comes.line, who: str(e.comes.who), says: str(e.comes.what), read: e.comes.read, end: true }])
        .sort((a, b) => a.line - b.line || a.end - b.end);
      return { name: e.name, dir: i ? 1 : -1, marks, numW: Math.max(...marks.map((m) => fits('dg-n')(num(m.line)))), nameW: Math.max(...marks.map((m) => fits('dg-it')(m.who))) };
    });
    const room = (s, tick) => tick + GAP + s.numW + NG + s.nameW;
    const over = room(sides[0], 12) + room(sides[1], 12) + 1 - W;
    const tick = over > 0 ? Math.max(5, 12 - Math.ceil(over / 2)) : 12;   // (a narrow drawing has shorter ticks)
    // (and if the names of the two sides still have no room between them, the longer give way: see `cut`)
    const spare = W - 1 - (room(sides[0], tick) - sides[0].nameW) - (room(sides[1], tick) - sides[1].nameW);
    if (sides[0].nameW + sides[1].nameW > spare) {
      const [a, b] = sides.map((s) => s.nameW);
      const caps = Math.min(a, b) <= spare / 2 ? (a <= b ? [a, spare - a] : [spare - b, b]) : [spare / 2, spare / 2];
      sides.forEach((s, i) => { s.nameW = Math.max(0, caps[i]); });
    }
    // the line stands half-way across where both sides have room for that, on a whole pixel, and no label leaves the drawing
    const lo = room(sides[0], tick); const hi = W - room(sides[1], tick);
    const mid = Math.min(Math.max(W / 2, lo), Math.max(lo, hi));
    const AX = [0.5, -0.5, 1.5].map((x) => Math.floor(mid) + x).find((x) => x >= lo && x <= hi) || mid;

    // ----- the heads: the name of each end over its side, a hairline between them -----
    const EDGE = 12;
    let heads = sides.map((s) => headed(s.name, (s.dir < 0 ? AX : W - AX) - EDGE, fits('dg-name')));
    // (where one name needs two lines the other takes two as well, so that the pair matches)
    if (heads.some((h) => h.length > 1)) heads = sides.map((s) => headed(s.name, 0, fits('dg-name')));
    const rows = Math.max(...heads.map((h) => h.length));
    const T = 14 + (rows - 1) * 20 + 16;             // the first line of the libretto
    heads.forEach((h, i) => h.forEach((words, j) => d.text(AX + sides[i].dir * EDGE, 14 + (rows - h.length + j) * 20, words, { cls: 'dg-name', anchor: sides[i].dir < 0 ? 'end' : 'start' })));
    d.rule(AX, 1, AX, T);
    const y = (line) => T + (line / k.total) * BODY;
    sized(d, T + BODY + 26);

    // ----- the parts: a hairline where each begins, and its name at the end of the hairline -----
    k.parts.forEach((p, i) => {
      p.y = Math.round(y(p.from)) + 0.5;
      const w = fits('dg-lab')(p.name);
      d.rule(0, p.y, W - w - 8, p.y);
      p.node = d.text(W, p.y + 3.5, p.name, { cls: 'dg-lab', anchor: 'end' });
      p.w = w;
      p.next = k.parts[i + 1];
    });

    // ----- where each label stands: at the height of its mark, or as near it as its neighbors allow, -----
    // ----- and inside its own part, clear of the hairlines -----
    const partOf = (line) => k.parts.find((p) => line > p.from && line <= p.from + p.lines) || k.parts[k.parts.length - 1];
    sides.forEach((s) => {
      k.parts.forEach((p) => {
        const own = s.marks.filter((m) => partOf(m.line) === p);
        const at = spread(own.map((m) => y(m.line)), P, p.y + 8, p.next ? Math.round(y(p.next.from)) - 8 : T + BODY + 2);
        own.forEach((m, i) => { m.yl = at[i]; });
      });
      s.marks.forEach((m) => {
        m.y = y(m.line);
        m.nx = AX + s.dir * (tick + GAP) + (s.dir > 0 ? s.numW : 0);            // the figure ends here
        m.tx = AX + s.dir * (tick + GAP + s.numW + NG);                         // the name begins (or, on the left, ends) here
        // (a name on the right that would run into the name of a part, at the end of its hairline, stops short of it)
        const beside = s.dir > 0 ? k.parts.filter((q) => m.yl > q.y - 12 && m.yl < q.y + 9) : [];
        m.label = cut(m.who, Math.min(s.nameW, ...beside.map((q) => W - q.w - 6 - m.tx)), fits('dg-it'));
        const far = m.tx + s.dir * fits('dg-it')(m.label);
        m.x1 = Math.min(far, AX + s.dir * 7); m.x2 = Math.max(far, AX + s.dir * 7);
      });
    });

    // ----- the libretto: one line -----
    d.rule(AX, T, AX, T + BODY, { stroke: INK, width: 1.4, at: 0 });

    // ----- the marks: a tick where an end is told, a heavier one in red where it comes; beside each, its line and who speaks -----
    const order = sides.flatMap((s) => s.marks).sort((a, b) => a.line - b.line);
    sides.forEach((s) => s.marks.forEach((m) => {
      const at = 300 + order.indexOf(m) * 130;
      const x1 = AX + s.dir * tick;
      const moved = Math.abs(m.yl - m.y) > 3;      // (a label a hair off its tick needs no bend in the tick)
      const path = !moved ? `M${AX} ${m.y}H${x1}` : tick >= 10 ? `M${AX} ${m.y}H${AX + s.dir * 4}L${AX + s.dir * (tick - 3)} ${m.yl}H${x1}` : `M${AX} ${m.y}L${x1} ${m.yl}`;
      const stroke = d.path(path, { stroke: m.end ? RED : INK, width: m.end ? 2.4 : 1.2, at });
      const n = d.text(m.nx, m.yl + 4, num(m.line), { cls: 'dg-n', anchor: 'end', fill: m.end ? RED : QUIET, at });
      const name = d.text(m.tx, m.yl + 4, m.label, { cls: 'dg-it', anchor: s.dir < 0 ? 'end' : 'start', fill: m.end ? RED : INK, at });
      m.nodes = [stroke, n, name];
    }));
    // the passages of this page: short bars on the line, over the marks that fall inside them
    const shown = k.passages.map((p) => {
      const h = Math.max(2.4, y(p.last) - y(p.first));
      const mid = (y(p.first) + y(p.last)) / 2;
      return { p, mid, node: d.bar(AX - 3.5, mid - h / 2, 7, h, { fill: INK, at: 200 }) };
    });

    // ----- the foot of the line: how many lines of verse it is -----
    const count = num(k.total); const unit = 'lines of verse';
    const cw = fits('dg-n')(count); const uw = fits('dg-it')(unit);
    const fx = Math.min(Math.max(AX - (cw + 5 + uw) / 2, 0), W - (cw + 5 + uw));
    d.text(fx, T + BODY + 20, count, { cls: 'dg-n', at: 900 });
    d.text(fx + cw + 5, T + BODY + 20, unit, { cls: 'dg-it', at: 900 });

    // ----- what the pointer adds: what is said at a mark, the other marks of the same speaker, and the way to its place in the book -----
    order.forEach((m) => {
      const hit = d.bar(m.x1 - 3, m.yl - P / 2, m.x2 - m.x1 + 6, P, { fill: 'transparent' });
      const same = order.filter((o) => o.who === m.who).flatMap((o) => o.nodes);
      d.hot(hit, stop(`${m.who}, ${way(`line ${num(m.line)}`, m.read)}${m.says ? `: ${m.says}` : ''}`), same);
      opens(hit, m.read);
    });
    shown.forEach(({ p, mid, node }) => {
      const hit = d.bar(AX - 6.5, mid - 6, 13, 12, { fill: 'transparent' });
      const lines = p.first === p.last ? `line ${num(p.first)}` : `lines ${num(p.first)} to ${num(p.last)}`;
      d.hot(hit, stop(`${str(p.name) ? `${way(str(p.name), p.read)}, ` : ''}${lines}, shown on this page`), node);
      opens(hit, p.read);
    });
    k.parts.forEach((p) => {
      d.hot(p.node, stop(`${way(p.name, p.read)}: ${num(p.lines)} lines of verse, ${num(p.from + 1)} to ${num(p.from + p.lines)}`));
      opens(p.node, p.read);
    });

    // ----- the key, and the same in words, folded away -----
    const keys = d.keys([
      { mark: 'line', color: INK, text: 'the end is told' },
      { mark: 'line', color: RED, text: 'the end comes' },
      shown.length ? { mark: 'bar', color: INK, text: shown.length > 1 ? 'the passages shown on this page' : 'the passage shown on this page' } : null,
    ].filter(Boolean));
    // (the key shows a thin mark as a thin mark, and a small bar as a small bar)
    const samples = keys.querySelectorAll('.dg-m');
    if (samples[0]) samples[0].style.borderTopWidth = '1.2px';
    if (samples[2]) { samples[2].style.width = '7px'; samples[2].style.height = '3px'; }
    // (a count is set with its comma, which the kit's table still takes for a number; a name is kept on one
    // line: left to itself the column is so narrow that a name of two words takes two)
    d.figures(order.map((m) => ({ line: num(m.line), ' ': m.who.replace(/ /g, '\u00a0'), '  ': m.says })), 'Line by line');
  },
};

export default { lenses: { 'brand:shape': told } };
