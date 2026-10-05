// Horace, Odes: the drawing of its own.
//
//   bee / Book: the odes, a square to each. First by measure: a row to each
//               measure, under the totals the caption names. Then the same
//               squares in their order in the books, so that a reader can
//               see where each measure falls and find an ode by its place.
//
// Drawn from the reading's own `facts` (remake/works/horace/reading.json):
// the totals whose names begin "in the", `odes in all`, `measures in all`,
// `books`, and `measures` with the odes of each in each book. If the facts
// also name an ode the caption speaks of (`spoken of`), it is ringed.

import { mk, RED, INK, HAIR, BLUE, OCHRE, GREEN, PLUM } from '../kit/draw.js';
import { sheet } from '../kit/diagram.js';

const low = (s) => String(s).toLowerCase();
const sum = (list) => list.reduce((n, x) => n + x, 0);
// "the first passage, from Odes I.14": its head, and the ode it names
const headOf = (s) => String(s).split(/[,;]/)[0].trim();
const odeOf = (s) => { const m = String(s).match(/\b([IVXLC]+)\.(\d+)\s*$/); return m ? { book: m[1], n: Number(m[2]) } : null; };
// a private preview of one piece has no book to open; a reader with a finger has no pointer to rest on a mark
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const finger = () => typeof matchMedia === 'function' && matchMedia('(hover: none)').matches;
// words that open a place in the book printed here, where the line that speaks is what a finger can reach
const way = (words, read) => (finger() && canRead() && read && !/[)\s]/.test(read) ? `[${words}](#/read/${read})` : words);

// ----- The facts, read by key. What does not add up is not drawn: the kit then shows the plain table. -----
function model(f, src) {
  if (!f || !Array.isArray(f.measures) || !f.measures.length) throw new Error('facts: no measures');
  if (!Array.isArray(f.books) || !f.books.length) throw new Error('facts: no books');
  const books = f.books.map((b) => ({ name: String(b.book), n: String(b.book).trim().split(/\s+/).pop(), odes: b.odes }));
  const measures = f.measures.map((m) => {
    const x = { name: String(m.measure), family: m.family || '', namedFor: m['named for'] || '', shown: m['shown here'] || '', read: m.read || '', odes: [] };
    books.forEach((b, bi) => ((m.in && m.in[b.n]) || []).forEach((n) => x.odes.push({ bi, n, m: x })));
    if (x.odes.length !== m.odes) throw new Error(`facts: ${x.name} does not add up`);
    const at = x.shown ? odeOf(x.shown) : null;
    const ode = at ? x.odes.find((o) => books[o.bi].n === at.book && o.n === at.n) : null;
    if (ode) ode.shown = headOf(x.shown);
    return x;
  });
  // every ode of every book stands in one measure and no more
  const all = measures.flatMap((m) => m.odes);
  books.forEach((b, bi) => {
    const mine = all.filter((o) => o.bi === bi).sort((x, y) => x.n - y.n);
    if (mine.length !== b.odes || mine.some((o, k) => o.n !== k + 1)) throw new Error(`facts: ${b.name} does not add up`);
    b.list = mine;
  });
  if (all.length !== f['odes in all'] || measures.length !== f['measures in all']) throw new Error('facts: the totals do not add up');
  // An ode the caption speaks of, where the facts name one: { ode: "III.30", as: what is said of it, read: its place }.
  const spoken = (Array.isArray(f['spoken of']) ? f['spoken of'] : []).map((x) => {
    const at = x && odeOf(x.ode);
    const b = at && books.find((y) => y.n === at.book);
    const o = b && b.list[at.n - 1];
    if (!o || !x.as) throw new Error('facts: an ode spoken of is not one of the odes');
    o.said = { as: String(x.as), read: x.read || '' };
    return o;
  });
  // The totals are the headings: a measure under its own name, a family under its name, and the rest.
  const taken = new Set();
  const groups = Object.entries(f).filter(([k, v]) => typeof v === 'number' && /^in the /.test(k)).map(([key, n]) => {
    let rows = measures.filter((m) => low(key) === `in the ${low(m.name)}`);
    if (!rows.length) rows = measures.filter((m) => m.family && low(key).includes(low(m.family)));
    rows.forEach((m) => taken.add(m));
    return { key, n, rows };
  });
  const rest = groups.filter((g) => !g.rows.length);
  if (!groups.length || rest.length > 1) throw new Error('facts: no totals to head the rows');
  if (rest.length) rest[0].rows = measures.filter((m) => !taken.has(m));
  if (groups.some((g) => !g.rows.length || sum(g.rows.map((m) => m.odes.length)) !== g.n) || sum(groups.map((g) => g.rows.length)) !== measures.length) throw new Error('facts: the totals do not add up');
  // red for the measure of the passage this plate shows; ink, then the other colors in order, for the rest
  const here = measures.find((m) => m.read && src && m.read.split(':')[0] === src) || null;
  const spare = [INK, BLUE, OCHRE, GREEN, PLUM];
  let c = 0;
  groups.forEach((g) => {
    g.color = g.rows.length === 1 && g.rows[0] === here ? RED : spare[c++ % spare.length];
    g.rows.forEach((m) => { m.group = g; m.color = m === here ? RED : g.color; });
  });
  return { books, measures, groups, here, spoken, total: all.length };
}

// How wide a line of words will stand, before the drawing is there to hold it.
function meter() {
  const svg = mk('svg', { class: 'dg', width: 1, height: 1, style: 'position:absolute;left:-99px;top:0;visibility:hidden' });
  document.body.append(svg);
  return {
    wide(words, cls = 'dg-it') {
      const t = mk('text', { class: cls }, String(words));
      svg.append(t);
      let n = 0;
      try { n = t.getComputedTextLength(); } catch (e) { n = 0; }
      t.remove();
      return n || String(words).length * 6.2;
    },
    done() { svg.remove(); },
  };
}

// "10 in Book I, 12 in II": how many of a set of odes stand in each of some parts (`name` is given the part, and its place among those named)
const shares = (odes, parts, has, name) => parts.map((p) => [odes.filter((o) => has(o, p)).length, p]).filter(([n]) => n).map(([n, p], k) => `${n} ${name(p, k)}`).join(', ');

// ----- Where everything stands in a drawing `w` px wide: the things to draw, in order, and the height they need. -----
function lay(M, w, wide) {
  const ops = [];
  const longest = Math.max(...M.measures.map((m) => m.odes.length), ...M.books.map((b) => b.odes));
  const gut = 26;                                    // the number of a book stands before its row
  const p = Math.max(4, Math.min(11, Math.floor((w - gut) / longest)));   // a square, and the space after it
  const s = p - (p >= 9 ? 2 : 1);
  const rp = Math.max(15, s + 6);                    // from row to row, where a row carries words (and a rule under them)
  const roomy = w >= 560;                            // room for the name of each stanza beside its row
  const fits = (x, words, cls, edge = w) => x + wide(words, cls) <= edge - 1;
  const xl = Math.ceil(Math.max(...M.groups.map((g) => wide(g.n, 'dg-name')))) + 8;   // where the words of a heading begin
  let row = 0;                                       // each row comes a little after the one before
  const squares = (m, x0, top, at) => m.odes.forEach((o, k) => {
    o.za = [x0 + k * p - (p - s) / 2, top - (rp - s) / 2, p, rp];
    ops.push((d) => { o.a = d.bar(x0 + k * p, top, s, s, { fill: m.color, at: at + k * 8 }); });
  });

  // 1. by measure
  const h1 = `${M.measures.length} measures, a square for each ode`;
  ops.push((d) => d.text(0, 9, fits(0, h1, 'dg-lab') ? h1 : `${M.measures.length} measures`, { cls: 'dg-lab' }));
  let y = 12;
  M.groups.forEach((g, gi) => {
    const lone = g.rows.length === 1;
    const yl = y + (gi ? 26 : 21);
    const at = 200 + row * 90;
    const named = lone && g.rows[0].namedFor ? `named for ${g.rows[0].namedFor}` : '';
    const inLine = named && fits(xl, `${g.key}, ${named}`);
    g.words = [];
    ops.push((d) => {
      g.words.push(d.text(xl - 8, yl, g.n, { cls: 'dg-name', anchor: 'end', at }), d.text(xl, yl, inLine ? `${g.key}, ${named}` : g.key, { at }));
      if (named && !inLine) g.words.push(d.text(xl, yl + 15, named, { at }));
    });
    let top = yl + (named && !inLine ? 15 : 0) + 9;
    if (lone) {
      const m = g.rows[0];
      squares(m, 0, top, at);
      const x = m.odes.length * p + 7;
      const flag = m.shown && (fits(x, m.shown) ? m.shown : fits(x, headOf(m.shown)) ? headOf(m.shown) : '');
      if (flag) ops.push((d) => { m.flag = d.text(x, top + s / 2 + 4, flag, { fill: m === M.here ? RED : null, at: at + 300 }); m.flagAt = at + 300; g.words.push(m.flag); });
      m.zone = [0, yl - 14, w, top + s + 4 - (yl - 14)]; m.words = g.words;
      y = top + s; row += 1;
      return;
    }
    const most = Math.max(...g.rows.map((m) => m.odes.length));
    const counted = most > 2;                        // a row of one or two squares needs no figure after it
    const xn = most * p + 7 + (counted ? Math.ceil(wide(most, 'dg-n')) + 9 : 0);   // where the names of its measures begin
    const two = !counted && g.rows.length > 3 && w < 480 && g.rows.every((m) => fits(xn, m.name, 'dg-it', w / 2 - 6));
    const per = two ? Math.ceil(g.rows.length / 2) : g.rows.length;
    const cw = two ? Math.round(w / 2) : w;
    g.zone = [0, yl - 14, w, 20];
    top += 1;
    g.rows.forEach((m, i) => {
      const x0 = Math.floor(i / per) * cw;
      const yc = top + (i % per) * rp + rp / 2;
      const rat = 200 + row * 90; row += 1;
      squares(m, x0, yc - s / 2, rat);
      m.zone = [x0, yc - rp / 2, cw, rp]; m.words = [];
      const put = (x, words, o = {}, flag = false) => ops.push((d) => { const n = d.text(x, yc + 4, words, { at: rat + 200, ...o }); m.words.push(n); if (flag) { m.flag = n; m.flagAt = rat + 200; } });
      const xc = x0 + m.odes.length * p + 6;
      if (counted) put(xc, m.odes.length, { cls: 'dg-n' });
      // the name of the measure stands in the row where there is room for it, and for what is shown of it here
      const name = (!counted || roomy) && fits(x0 + xn, m.name, 'dg-it', x0 + cw) && (!m.shown || x0 + xn + wide(m.name) + 16 + wide(m.shown) <= w);
      if (name) put(x0 + xn, m.name);
      if (!m.shown) return;
      const red = m === M.here ? { fill: RED } : {};
      // what is shown of it on this page: at the right-hand edge beside the name, or after the figure where no name stands
      if (name) { put(w, m.shown, { anchor: 'end', ...red }, true); return; }
      const xf = xc + (counted ? Math.ceil(wide(m.odes.length, 'dg-n')) + 9 : 0);
      const flag = fits(xf, m.shown) ? m.shown : fits(xf, headOf(m.shown)) ? headOf(m.shown) : '';
      if (flag) put(xf, flag, red, true);
    });
    y = top + per * rp;
  });

  // 2. the same odes, book by book
  const t2 = 200 + row * 90 + 200;
  const yh = y + 36;
  const h2 = `${M.books.length} books, the odes in their order`;
  ops.push((d) => d.text(0, yh, fits(0, h2, 'dg-lab') ? h2 : `${M.books.length} books`, { cls: 'dg-lab', at: t2 }));
  const pitch = s + 12;
  M.books.forEach((b, bi) => {
    const top = yh + 11 + bi * pitch;
    const at = t2 + 120 + bi * 140;
    b.zone = [0, top - 3, gut - 2, s + 6];
    ops.push((d) => { b.words = [d.text(0, top + s / 2 + 3.7, b.n, { cls: 'dg-lab', at })]; });
    b.list.forEach((o, k) => {
      o.zb = [gut + k * p - (p - s) / 2, top - 3, p, pitch - 2];
      ops.push((d) => {
        o.b = d.bar(gut + k * p, top, s, s, { fill: o.m.color, at: at + k * 7 });
        if (o.shown) o.dot = d.dot(gut + k * p + s / 2, top + s + 4.2, 1.8, { fill: INK, at: at + 500 });
        if (o.said) o.ring = d.dot(gut + k * p + s / 2, top + s + 4.4, 2.3, { fill: 'none', stroke: INK, width: 1, at: at + 500 });
      });
    });
  });
  y = yh + 11 + (M.books.length - 1) * pitch + s + 8;
  return { ops, h: y + 2, wideEnough: w >= 520 };
}

const book = {
  name: 'Book',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts;
    const M = model(f, ctx.plate && ctx.plate.src);
    const m = meter();
    let L;
    const d = sheet(ctx, lens, run, (w) => { L = lay(M, w, m.wide); return L.h; });
    m.done();
    L.ops.forEach((op) => op(d));

    // What the pointer adds. A heading or a row says where its odes stand, book by book, and lights them in
    // both drawings; the number of a book says what its odes are in; a square says which ode it is. Each
    // is said briefly: the line that speaks has room for one line on a wide plate and two on a narrow one.
    const clear = (z) => d.bar(z[0], z[1], z[2], z[3], { fill: 'transparent' });
    const both = (odes) => odes.flatMap((o) => [o.a, o.b, o.dot, o.ring]);
    const byBook = (odes) => shares(odes, M.books, (o, b) => M.books[o.bi] === b, (b, k) => `in ${k ? b.n : b.name}`);
    const rowSays = (x) => `${x.name}: ${byBook(x.odes)}`;
    // The words that say which passage of this page is in a measure open that ode in the book printed here,
    // at the stanza quoted: the place the facts give as `read`. Like the links of the page they are ruled
    // under with a hairline, and it goes pale and dark with its row.
    const links = M.measures.filter((x) => x.flag && x.read && canRead() && !/[)\s]/.test(x.read));
    links.forEach((x) => {
      x.box = x.flag.getBBox();
      const y = Math.floor(Number(x.flag.getAttribute('y')) + 3) + 0.5;   // on the screen's own dots, as far under the words as the page rules its links
      x.under = d.rule(x.box.x, y, x.box.x + x.box.width, y, { at: x.flagAt, dash: 'none' });
      x.words.push(x.under);
    });
    M.groups.forEach((g) => {
      if (g.zone) { const odes = g.rows.flatMap((x) => x.odes); d.hot(clear(g.zone), `${g.n} ${g.key}: ${byBook(odes)}`, both(odes).concat(g.words, ...g.rows.map((x) => x.words))); }
      g.rows.forEach((x) => d.hot(clear(x.zone), rowSays(x), both(x.odes).concat(x.words)));
    });
    // a book says it briefly, to keep to the room the line has: a stanza by its name without "stanza", a family by its name
    const brief = (g) => (g.rows.length === 1 ? g.rows[0].name.replace(/\s+stanzas?$/i, '') : g.rows[0].family && g.rows.every((x) => x.family === g.rows[0].family) ? g.rows[0].family : g.key);
    M.books.forEach((b) => d.hot(clear(b.zone), `${b.name}, ${b.odes} odes: ${shares(b.list, M.groups, (o, g) => o.m.group === g, brief)}`, both(b.list).concat(b.words)));
    M.books.forEach((b) => b.list.forEach((o) => {
      const say = `${b.name}, ode ${o.n}: ${o.m.name}${o.shown ? ` (${way(o.shown, o.m.read)})` : ''}`;
      [o.za, o.zb].forEach((z) => d.hot(clear(z), say, [o.a, o.b, o.dot, o.ring]));
    }));
    // Over its row, each of those labels is the link: it answers the pointer as its row does, its hairline
    // reddens as a link's does on the page, and a click or a tap opens the ode.
    links.forEach((x) => {
      // as wide as its words; as tall as its row, so that one label's rule is never part of the label under it
      const b = x.box;
      const band = x.group.rows.length > 1 ? [x.zone[1], x.zone[3]] : [b.y - 1, b.height + 3];
      const z = d.hot(clear([b.x - 3, band[0], b.width + 6, band[1]]), rowSays(x), both(x.odes).concat(x.words));
      const a = mk('a', { href: `#/read/${x.read}`, tabindex: -1 });
      z.replaceWith(a); a.append(z);
      z.style.cursor = 'pointer';
      z.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'touch') x.under.style.stroke = RED; });
      z.addEventListener('pointerleave', () => { x.under.style.stroke = HAIR; });
    });

    const keys = M.groups.map((g) => ({ mark: 'bar', color: g.color, text: g.key.replace(/^in the /, '') }));
    if (M.measures.some((x) => x.odes.some((o) => o.shown))) keys.push({ mark: 'dot', color: INK, text: 'an ode quoted on this page' });
    // the ring: what the facts say of that ode, and the way to it in the book printed here
    M.spoken.filter((o, k, all) => all.findIndex((x) => x.said.as === o.said.as) === k).forEach((o) => {
      const r = o.said.read;
      keys.push({ mark: 'ring', color: INK, text: r && canRead() && !/[)\s]/.test(r) ? `[${o.said.as}](#/read/${r})` : o.said.as });
    });
    d.keys(keys);

    // the numbers it is drawn from: wide, a column to each book; narrow, one column for them all
    const col = (b) => b.name.replace(/ /g, '\u00a0');
    const list = (x, bi) => x.odes.filter((o) => o.bi === bi).map((o) => o.n).join(', ');
    const rows = M.measures.map((x) => {
      const r = { measure: x.name, odes: x.odes.length };
      if (L.wideEnough) M.books.forEach((b, bi) => { r[col(b)] = list(x, bi); });
      // (a book's number is never left at the end of a line, away from its odes)
      else r['which odes'] = M.books.map((b, bi) => (list(x, bi) ? `${b.n}.\u00a0${list(x, bi)}` : '')).filter(Boolean).join('; ');
      return r;
    });
    // the last row counts the odes of each book, and says so, where the rows above it name them by number
    const all = { measure: 'odes in all', odes: M.total };
    if (L.wideEnough) M.books.forEach((b) => { all[col(b)] = `${b.odes} odes`; });
    else all['which odes'] = M.books.map((b) => `${b.n}.\u00a0${b.odes}\u00a0odes`).join('; ');
    d.figures(rows.concat([all]));
  },
};

export default { lenses: { 'bee:shape': book } };
