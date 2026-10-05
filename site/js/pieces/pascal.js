// Pascal, Pensées: the drawing of its own.
//
//   heart / Page: one page of the manuscript, and where an editor sent what is
//                 written on it. At the head, the pages the wager is written
//                 on, with this one ringed. Under them two columns joined by
//                 lines. Left, the pieces written on the page, from top to
//                 bottom in the order the reading gives (a modern edition's),
//                 each under the place it stands in. Right, the sections of
//                 the edition printed here, in their order, a cell to each; a
//                 cell that prints something from the page is tinted and holds
//                 its numbers in the order the book has them. A line runs from
//                 each piece to its number: where two lines cross, the book
//                 has not kept that order. The fragments of the passage of
//                 this plate are red.
//
//                 The pointer on a piece, its line or its number: one sentence
//                 with both orders, and a click opens the fragment in the book
//                 printed here. On a section: its name and what it took. On a
//                 page of the wager: which it is. A finger gets the sentence,
//                 and the way into the book is a link in it.
//
// Drawn from the reading's own `facts` (remake/works/pascal/reading.json):
// page, wagerPages, otherSide, pieces, sections, sectionsFromThisPage,
// sectionsInAll. No name, number or count is typed here.

import { RED, INK, QUIET, TINT, mk } from '../kit/draw.js';
import { sheet } from '../kit/diagram.js';

// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const wideOf = (node) => { try { return node.getComputedTextLength(); } catch (e) { return String(node.textContent).length * 6; } };
const NTH = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
const NUM = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const count = (n) => NUM[n] || String(n);
const listed = (a) => (a.length < 2 ? a.join('') : `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}`);

// The facts, read by key. Where the list of pieces and the list of sections do
// not say the same thing, nothing is drawn: the kit then shows the plain table.
function model(f, ctx) {
  if (!Array.isArray(f.pieces) || !f.pieces.length) throw new Error('facts: no pieces');
  if (!Array.isArray(f.sections) || !f.sections.length) throw new Error('facts: no sections');
  const pieces = f.pieces.map((p) => ({ ...p, fragment: String(p.fragment == null ? '' : p.fragment), section: String(p.section == null ? '' : p.section) }));
  for (const p of pieces) if (!p.fragment || !p.section || !p.place || typeof p.order !== 'number') throw new Error('facts: a piece without its order, place, fragment or section');
  pieces.sort((a, b) => a.order - b.order);
  const sections = f.sections.map((s) => {
    const numeral = String(s.numeral == null ? '' : s.numeral);
    if (!numeral) throw new Error('facts: a section without its numeral');
    const from = (Array.isArray(s.fromThisPage) ? s.fromThisPage : []).map(String);
    const mine = pieces.filter((p) => p.section === numeral);
    if (from.length !== mine.length || mine.some((p) => !from.includes(p.fragment))) throw new Error(`facts: section ${numeral} and the pieces do not agree`);
    // in the order the book prints them
    return { numeral, name: s.name || '', slots: from.map((n) => mine.find((p) => p.fragment === n)) };
  });
  for (const p of pieces) { p.home = sections.find((s) => s.slots.includes(p)); if (!p.home) throw new Error(`facts: no section for fragment ${p.fragment}`); }
  const full = sections.filter((s) => s.slots.length);
  if (f.sectionsInAll != null && f.sectionsInAll !== sections.length) throw new Error('facts: sectionsInAll');
  if (f.sectionsFromThisPage != null && f.sectionsFromThisPage !== full.length) throw new Error('facts: sectionsFromThisPage');
  // Which pieces the passage of this plate shows. A piece says where its number stands in the book
  // printed here (`read`: book, part, block), and its words begin in the block after that.
  const src = ctx.plate && ctx.plate.src;
  const shown = new Set(((ctx.plate && ctx.plate.rows) || []).filter((r) => r && !r.aside && r.id != null).map((r) => parseInt(r.id, 10)));
  for (const p of pieces) { const at = String(p.read || '').match(/^(.+):(\d+)$/); p.here = !!at && at[1] === src && (shown.has(+at[2]) || shown.has(+at[2] + 1)); }
  // pieces that follow each other in one place stand under it, and it is named once
  const groups = [];
  for (const p of pieces) { const g = groups[groups.length - 1]; if (g && g.place === p.place) g.pieces.push(p); else groups.push({ place: p.place, pieces: [p] }); }
  const pages = (Array.isArray(f.wagerPages) ? f.wagerPages : []).map(Number).filter((n) => !Number.isNaN(n));
  const other = f.otherSide && f.otherSide.page != null ? f.otherSide : null;
  return { pieces, sections, full, groups, pages, page: f.page, other };
}

const NB = '\u00a0'; // a space at which no line turns
const LH = 16;      // from one line of words to the next
const S = 14;       // from one number to the next in a cell of the book

const page = {
  name: 'Page',
  stage: 'own',
  draw(ctx, lens, run) {
    const m = model(lens.facts || {}, ctx);
    const wasOpen = !run && !!ctx.own.querySelector('details.dg-facts[open]');   // a resize must not shut the table
    const d = sheet(ctx, lens, run, 300);
    d.wrap.classList.add('setup');                 // while the words are measured and set out, nothing moves
    const W = d.w;
    // a screen that is touched, whether or not a pointer hovers over it as well
    const finger = typeof matchMedia === 'function' && (matchMedia('(hover: none)').matches || matchMedia('(any-pointer: coarse)').matches);
    const reader = canRead();
    const widthOf = (text, cls) => { const t = d.text(0, -99, text, { cls }); const w = wideOf(t); t.remove(); return Math.ceil(w); };
    const over = (x, top, w, h) => d.bar(x, top, w, h, { fill: 'transparent' });

    // Words that may have to turn are set in the drawing itself, line by line, so that they answer the
    // pointer with their mark. The lines are made as equal as they can be: no word is left alone.
    const gap = widthOf('a a', 'dg-it') - widthOf('aa', 'dg-it');
    const turned = (text, width) => {
      const ws = String(text).split(/\s+/).filter(Boolean);
      const w = ws.map((x) => widthOf(x, 'dg-it'));
      const fill = (max) => {
        const out = []; let at = 0;
        ws.forEach((x, i) => { if (out.length && at + gap + w[i] <= max) { out[out.length - 1].push(x); at += gap + w[i]; } else { out.push([x]); at = w[i]; } });
        return out.map((line) => line.join(' '));
      };
      let best = fill(width);
      for (let max = width - 3; max > 20; max -= 3) { const next = fill(max); if (next.length > best.length) break; best = next; }
      return best;
    };
    const set = (x, base, lines, o) => lines.map((t, i) => d.text(x, base + i * LH, t, o));

    // A mark that opens its place in the book printed here. A pointer goes there; a finger only asks
    // what the mark is, and the line that answers it carries the way in.
    let touch = false;
    d.svg.addEventListener('pointerdown', (e) => { touch = e.pointerType === 'touch'; }, true);
    const opens = (read, nodes) => {
      const link = reader && read;
      const g = mk(link ? 'a' : 'g', link ? { href: `#/read/${read}`, tabindex: -1 } : {});
      // (words in a drawing are not underlined: an underline here would read as a mark)
      if (link) { g.style.cursor = 'pointer'; g.style.textDecoration = 'none'; g.addEventListener('click', (e) => { if (touch) e.preventDefault(); }); }
      d.svg.append(g);
      g.append(...nodes);
      return g;
    };
    const way = (words, read) => (finger && reader && read && !/[)\s]/.test(read) ? `[${words}](#/read/${read})` : words);

    // ----- the pages the wager is written on -----
    let y = 0;
    const marks = [];
    if (m.pages.length) {
      const lab = d.text(0, 15, 'The pages of the wager', { cls: 'dg-lab', at: 60 });
      const bw = 24; const bh = 22;
      let x = Math.ceil(wideOf(lab)) + 12; let top = 0;
      if (x + m.pages.length * bw > W) { x = 0; top = 24; }   // under their label where there is no room beside it
      m.pages.forEach((n, i) => {
        // the page set out here is ringed
        const mine = n === m.page; const at = 100 + i * 70;
        const ring = mine ? d.dot(x + bw / 2, top + bh / 2, 9.5, { fill: 'none', stroke: INK, at }) : null;
        const fig = d.text(x + bw / 2, top + bh / 2 + 4.3, n, { cls: 'dg-n', anchor: 'middle', fill: mine ? null : QUIET, at });
        marks.push({ n, mine, x, top, w: bw, h: bh, fig, ring });
        x += bw;
      });
      y = top + bh + 9;
      d.rule(0, y + 0.5, W, y + 0.5);
      y += 16;
    }

    // ----- the measures of the two columns -----
    const numW = Math.max(...m.pieces.map((p) => widthOf(p.fragment, 'dg-n')));
    const romW = Math.max(...m.sections.map((s) => widthOf(s.numeral, 'dg-n'))) + 2;   // (the serifs of a numeral reach a little past its measure)
    const names = Math.max(0, ...m.full.map((s) => (s.name ? widthOf(s.name, 'dg-it') : 0)));
    const sw = numW + 14;                                   // a cell of the book: a number and a little room
    const xa = 17;                                          // where the words of a piece begin
    const leftFixed = xa + 9 + numW + 8;                    // the figures of the left column and the room between
    // the names of the sections stand beside their cells where that leaves room for the lines
    const wide = names > 0 && W - leftFixed - (6 + sw + 8 + romW + 10 + names) >= 290;
    const RB = 6 + sw + 8 + romW + (wide ? 10 + names : 0); // the right-hand column, from where a line ends
    const room = W - leftFixed - RB;                        // what the words and the lines share
    const natAb = Math.max(1, ...m.pieces.map((p) => (p.about ? widthOf(p.about, 'dg-it') : 0)));
    // the lines take what the words leave, and never less than their share: long words turn onto a second line
    const Lw = Math.round(Math.max(wide ? 140 : room * 0.35, Math.min(150, room - natAb)));
    const Wab = Math.max(40, Math.min(natAb, room - Lw));
    const xf = xa + Wab + 9 + numW;                         // where the number of a piece ends
    const xL = xf + 8;                                      // where its line leaves
    const cx = W - RB + 6;                                  // the left edge of the cells
    const xR = cx - 4;                                      // where a line arrives

    // how tall each thing stands, so that the two columns end together
    m.groups.forEach((g) => { g.lines = turned(g.place, xf); g.pieces.forEach((p) => { p.lines = p.about ? turned(p.about, Wab) : []; p.h = Math.max(1, p.lines.length) * LH; }); });
    const HL = m.groups.reduce((s, g) => s + 6 + g.lines.length * LH + 3 + g.pieces.reduce((t, p) => t + p.h + 5, 0) + 3, 0);
    const most = Math.max(2, ...m.sections.map((s) => s.slots.length));
    const P = Math.max(S * most + 2, Math.ceil(HL / m.sections.length));   // a cell: room for its numbers
    const H = P * m.sections.length;
    const air = m.groups.length > 1 ? Math.max(0, (H - HL) / (m.groups.length - 1)) : 0;

    // ----- the two heads -----
    const pg = m.page != null ? `Page ${m.page}` : 'The page';
    // the fullest pair of heads that leaves a clear space between the two; the second stands over its cells where it can
    const heads = [[`${pg}, as written`, 'The book, as printed'], [`${pg}, written`, 'printed'], [pg, 'printed']]
      .map(([a, b]) => { const wb = widthOf(b, 'dg-lab'); const fits = cx + wb <= W; return { a, b, fits, clear: (fits ? cx : W - wb) - widthOf(a, 'dg-lab') }; });
    const head = heads.find((h) => h.clear >= 18) || heads[heads.length - 1];
    d.text(0, y + 8, head.a, { cls: 'dg-lab' });
    d.text(head.fits ? cx : W, y + 8, head.b, { cls: 'dg-lab', anchor: head.fits ? 'start' : 'end' });
    const top = y + 18;

    // ----- left: the pieces of the page, in the order given, each under its place -----
    let yy = top; let k = 0;
    m.groups.forEach((g, gi) => {
      if (gi) yy += air;
      const y0 = Math.round(yy);
      d.rule(0, y0 + 0.5, xf, y0 + 0.5);
      set(0, y0 + 17.5, g.lines, { at: 120 + k * 100 });
      let ry = y0 + 6 + g.lines.length * LH + 3;
      g.pieces.forEach((p) => {
        const at = 160 + k * 100; const base = ry + 11.5; const ink = p.here ? RED : INK;
        p.top = ry - 2; p.bottom = ry + p.h + 2; p.y1 = Math.round(base - 4.5) + 0.5;
        // its place in the order, what it is about, and its number in the book
        p.said = [d.text(0, base, p.order, { cls: 'dg-n', fill: QUIET, at }), ...set(xa, base, p.lines, { fill: ink, at }), d.text(xf, base, p.fragment, { cls: 'dg-n', anchor: 'end', fill: p.here ? RED : null, at })];
        p.at = 280 + k * 100;
        ry += p.h + 5; k++;
      });
      yy = ry + 3;
    });
    d.rule(0, top + H + 0.5, xf, top + H + 0.5);

    // ----- right: the sections of the book, a cell to each -----
    m.sections.forEach((s, i) => {
      const y0 = top + i * P; const mid = y0 + P / 2; const has = s.slots.length > 0;
      s.y0 = y0;
      if (has) d.bar(cx, y0, sw, P, { fill: TINT, at: 260 });
      s.fig = d.text(cx + sw + 8, mid + 4.3, s.numeral, { cls: 'dg-n', fill: has ? null : QUIET, at: 200 });
      s.label = wide && has && s.name ? d.text(cx + sw + 8 + romW + 10, mid + 4.3, s.name, { fill: INK, at: 320 }) : null;
      s.slots.forEach((p, j) => {
        p.y2 = Math.round(mid + (j - (s.slots.length - 1) / 2) * S) + 0.5;
        p.right = d.text(cx + sw / 2, p.y2 + 4, p.fragment, { cls: 'dg-n', anchor: 'middle', fill: p.here ? RED : null, at: p.at + 500 });
      });
    });
    d.rule(cx + 0.5, top, cx + 0.5, top + H + 1);
    d.rule(cx + sw + 0.5, top, cx + sw + 0.5, top + H + 1);
    for (let i = 0; i <= m.sections.length; i++) d.rule(cx, top + i * P + 0.5, cx + sw + 1, top + i * P + 0.5);

    // ----- the lines, drawn one after another in the order of the page; the red ones lie over the others -----
    m.pieces.filter((p) => !p.here).concat(m.pieces.filter((p) => p.here)).forEach((p) => {
      const c = p.here ? RED : INK;
      p.line = d.rule(xL, p.y1, xR, p.y2, { stroke: c, width: p.here ? 1.5 : 1, at: p.at });
      p.ends = [d.dot(xL, p.y1, 2, { fill: c, at: p.at }), d.dot(xR, p.y2, 2, { fill: c, at: p.at + 500 })];
    });

    // on a narrow sheet the names of the sections that take something stand under the columns
    y = top + H + 1;
    if (!wide) {
      y += 13;
      m.full.forEach((s) => {
        if (!s.name) return;
        const lines = turned(s.name, W - romW - 10);
        s.foot = [d.text(0, y + 11.5, s.numeral, { cls: 'dg-n', at: 320 }), ...set(romW + 10, y + 11.5, lines, { fill: INK, at: 320 })];
        s.footAt = [0, y - 1, W, lines.length * LH + 2];
        y += lines.length * LH + 3;
      });
    }

    // ----- what the pointer adds -----
    // on a piece, its line or its number in the book: the two orders in one sentence. (The order of the page
    // is the one the reading gives, a modern edition's: the sentence claims no more for it than `what` does.)
    const nth = (n) => (NTH[n - 1] ? NTH[n - 1].replace(/^./, (c) => c.toUpperCase()) : `No. ${n}`);
    const sayOf = (p) => `${nth(p.order)} in the order given; ${way(`fragment${NB}${p.fragment}`, p.read)} in section${NB}${p.home.numeral}${p.home.name ? `, *${p.home.name}*` : ''}.`;
    m.pieces.forEach((p) => {
      // the row opens the place of the piece in the book
      p.row = opens(p.read, [...p.said, over(0, p.top, xL + 4, p.bottom - p.top)]);
      // with it stay dark its line, its number in the book, and the numeral and name of the section it went to
      p.lit = [p.row, p.line, ...p.ends, p.right, p.home.fig, p.home.label].concat(p.home.foot || []).filter(Boolean);
      d.hot(p.row, sayOf(p), p.lit);
      d.hot(d.rule(xL, p.y1, xR, p.y2, { stroke: 'transparent', width: 9 }), sayOf(p), p.lit);
      d.hot(over(cx, p.y2 - S / 2, sw, S), sayOf(p), p.lit);
    });
    // on a section: its name, and what it prints from this page
    m.sections.forEach((s) => {
      const has = s.slots.length > 0;
      const holds = has ? `${s.slots.length > 1 ? 'fragments' : 'fragment'} ${listed(s.slots.map((p) => p.fragment))} from this page` : 'nothing from this page';
      const say = `Section${NB}${s.numeral}${s.name ? `, *${s.name}*` : ''}: ${holds}.`;
      const lit = [s.fig, s.label].concat(s.foot || [], s.slots.flatMap((p) => p.lit)).filter(Boolean);
      const x = has ? cx + sw + 2 : cx;
      d.hot(over(x, s.y0 + 1, W - x, P - 1), say, lit);
      if (s.footAt) d.hot(over(...s.footAt), say, lit);
    });
    // on a page of the wager: which it is
    marks.forEach((k2) => {
      const other = m.other && Number(m.other.page) === k2.n ? m.other : null;
      const say = k2.mine ? `Page${NB}${k2.n}: the page set out here, with ${count(m.pieces.length)} pieces written on it.`
        : other ? `${way(`Page${NB}${k2.n}`, other.read)}, overleaf${other.holds ? `: ${other.holds}` : ''}.`
          : `Page${NB}${k2.n}: one of the ${count(m.pages.length)} pages the wager is written on.`;
      const hit = opens(other && other.read, [k2.fig, over(k2.x, k2.top, k2.w, k2.h)]);
      d.hot(hit, say, [hit, k2.ring].filter(Boolean));
    });

    // the drawing is as tall as what was set in it
    d.svg.setAttribute('height', Math.ceil(y + 2));
    d.svg.setAttribute('viewBox', `0 0 ${W} ${Math.ceil(y + 2)}`);
    d.wrap.getBoundingClientRect();
    d.wrap.classList.remove('setup');

    // ----- the key, and the sections folded away -----
    const here = m.sections.flatMap((s) => s.slots).filter((p) => p.here).map((p) => p.fragment);
    d.keys([
      here.length ? { mark: 'line', color: RED, text: `${here.length > 1 ? 'fragments' : 'fragment'} ${listed(here)}: this passage` } : null,
      { mark: 'line', color: INK, text: here.length ? `the other ${count(m.pieces.length - here.length)} pieces on the page` : 'a piece written on the page' },
      { mark: 'bar', color: TINT, text: `a section that prints something from the page: ${[count(m.full.length), 'of', count(m.sections.length)].join(NB)}` },
    ].filter(Boolean));
    const fold = d.figures(m.sections.map((s) => ({ '': s.numeral, section: s.name, 'from this page': s.slots.map((p) => p.fragment).join(', ') })), `The ${count(m.sections.length)} sections`);
    if (fold && wasOpen) fold.open = true;
  },
};

export default { lenses: { 'heart:shape': page } };
