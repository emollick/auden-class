// The Castle: the drawing of its own.
//
//   letter / Title: the letter and the title through the chapters. A column
//                   to each part of the book, in order. Over the line stands
//                   one ink square for every time the initial is written;
//                   under it hangs one red square for every time the title
//                   is said. One size of square for both, so the two can be
//                   counted against each other. Then the title's squares
//                   again, in one row for each kind of speaker. Under the
//                   drawing the reading's list of turns stands as a table,
//                   each row opening its place in the book.
//
// Everything is read from the lens's `facts` (remake/works/castle/reading.json)
// each time the page runs: the two names, every count, the kinds of speaker,
// the sentences of the list. No name, word or number of the book is typed here.

import { el, RED, INK } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const isObj = (v) => !!v && typeof v === 'object' && !Array.isArray(v);
const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);
const NB = String.fromCharCode(160); // a space that does not break
const times = (n) => (n === 0 ? 'not once' : n === 1 ? 'once' : n === 2 ? 'twice' : `${num(n)} times`);

// What the facts say: the two things counted, the parts of the book in order,
// the kinds of speaker, the turns, and what was to come after the text.
function read(f) {
  if (!isObj(f) || !isObj(f.totals)) throw new Error('facts: no totals');
  const [A, B] = Object.keys(f.totals).filter((k) => k !== 'words' && typeof f.totals[k] === 'number');
  if (!A || !B) throw new Error('facts: totals do not name two things');
  if (!Array.isArray(f.chapters) || !f.chapters.length) throw new Error('facts: no chapters');
  // the list of the kinds of speaker, and the key under which each chapter says which of them spoke there
  const WHO = Object.keys(f).find((k) => Array.isArray(f[k]) && f[k].length && f[k].every((x) => isObj(x) && typeof x.who === 'string' && typeof x.times === 'number'));
  if (!WHO) throw new Error('facts: no speakers');
  const BY = Object.keys(f.chapters[0]).find((k) => f.chapters.every((c) => isObj(c[k])));

  const parts = f.chapters.map((c) => ({ name: String(c.chapter), n: parseInt(c.chapter, 10), words: +c.words || 0, a: +c[A] || 0, b: +c[B] || 0, by: BY ? c[BY] : {} }));
  if (parts.some((p) => !Number.isFinite(p.n))) throw new Error('facts: a chapter without a number');
  // chapters, each with the parts it is printed in
  const chapters = [];
  parts.forEach((p, i) => { const last = chapters[chapters.length - 1]; if (last && last.n === p.n) last.to = i; else chapters.push({ n: p.n, from: i, to: i }); });

  const kinds = f[WHO].map((x) => ({ who: x.who, times: x.times }));
  const turns = (Array.isArray(f.turns) ? f.turns : []).filter((t) => isObj(t) && t.what);
  const AFTER = Object.keys(f).find((k) => isObj(f[k]) && k !== 'totals' && typeof f[k].what === 'string');
  return { A, B, BY, WHO, totals: f.totals, parts, chapters, kinds, turns, after: AFTER ? { name: AFTER, what: f[AFTER].what } : null };
}

// `count` squares in rows of `n`, as one path: rising from y (the foot of the first row) or hanging from y (its head)
function squares(x, y, count, n, p, s, rising) {
  let dstr = '';
  for (let k = 0; k < count; k++) {
    const row = Math.floor(k / n);
    dstr += `M${x + (k % n) * p} ${rising ? y - row * p - s : y + row * p}h${s}v${s}h${-s}z`;
  }
  return dstr;
}

// ----- Title: the letter and the title, chapter by chapter -----
const title = {
  name: 'Title',
  stage: 'own',
  draw(ctx, lens, run) {
    const k = read(lens.facts);
    const { A, B, parts, chapters } = k;
    const d = sheet(ctx, lens, run, 120);
    const w = d.w;
    const N = parts.length;
    const wide = (node) => node.getComputedTextLength();
    const put = (node, x, y, anchor) => { node.setAttribute('x', x); node.setAttribute('y', y); if (anchor) node.setAttribute('text-anchor', anchor); };

    // ----- the size of a square, and where each column stands -----
    const n = w >= 424 ? 4 : 3;                                      // squares in a row
    const p = Math.max(3, Math.min(6, Math.round(w / 30.25 / n)));   // from one square to the next
    const s = p - 1;                                                 // a square
    const c = n * p - 1;                                             // a column
    const g2 = Math.max(2, Math.round(p * 0.6));                     // between two parts of one chapter
    const g1 = Math.max(g2 + 1, Math.min(Math.round(c * 0.75), Math.floor((w - N * c - (N - chapters.length) * g2) / Math.max(1, chapters.length - 1))));
    const xs = [];
    let x = 0;
    parts.forEach((q, i) => { if (i) x += c + (parts[i - 1].n === q.n ? g2 : g1); xs.push(x); });
    const W = x + c;
    const tall = (q) => Math.ceil(q.a / n) * p;
    const HA = Math.max(...parts.map(tall));

    // ----- the two names and their totals -----
    // They stand in the open paper over the longest run of low columns; where that has no room, over the drawing.
    const t0 = 80;
    const nameA = d.text(0, 0, A, { cls: 'dg-name', at: t0 });
    const figA = d.text(0, 0, num(k.totals[A]), { cls: 'dg-big', at: t0 });
    const nameB = d.text(0, 0, B, { cls: 'dg-name', fill: RED, at: t0 });
    const figB = d.text(0, 0, num(k.totals[B]), { cls: 'dg-big', fill: RED, at: t0 });
    const blockW = Math.max(wide(nameA), wide(nameB)) + 16 + Math.max(wide(figA), wide(figB));
    const blockH = 72;
    let best = null;
    for (let i = 0; i < N; i++) {
      if (tall(parts[i]) > HA - blockH - 10) continue;
      let j = i;
      while (j + 1 < N && tall(parts[j + 1]) <= HA - blockH - 10) j++;
      if (!best || xs[j] + c - xs[i] > best.room) best = { x: xs[i], room: xs[j] + c - xs[i] };
      i = j;
    }
    let top = 4;                                                     // the head of the field of squares
    if (best && best.room >= blockW + 6) {
      put(nameA, best.x + 2, top + 27); put(figA, best.x + 2 + blockW, top + 27, 'end');
      put(nameB, best.x + 2, top + 63); put(figB, best.x + 2 + blockW, top + 63, 'end');
    } else if (wide(nameA) + wide(figA) + wide(nameB) + wide(figB) + 40 <= w) {
      let at = 0;
      [nameA, figA, nameB, figB].forEach((node, i) => { put(node, at, 28); at += wide(node) + (i === 1 ? 24 : 8); });
      top = 46;
    } else {
      put(nameA, 0, 28); put(figA, blockW, 28, 'end'); put(nameB, 0, 64); put(figB, blockW, 64, 'end');
      top = 82;
    }

    // ----- over the line: a square for every time the first is written -----
    const foot = top + HA;
    const line = foot + 2.5;
    const when = (i) => 150 + i * 30;
    const marks = parts.map((q, i) => (q.a ? [d.path(squares(xs[i], foot, q.a, n, p, s, true), { fill: INK, stroke: 'none', at: when(i) })] : []));
    // the line: a foot to each chapter, as long as the parts it is printed in; a few numbers under it
    const every = c + g1 >= 20;
    const ends = [chapters[0].n, chapters[chapters.length - 1].n];
    chapters.forEach((ch) => {
      d.rule(xs[ch.from], line, xs[ch.to] + c, line, { stroke: INK, at: 100 });
      if (!every && !ends.includes(ch.n) && ch.n % 5) return;
      const label = d.text((xs[ch.from] + xs[ch.to] + c) / 2, line + 15, ch.n, { cls: 'dg-n', anchor: 'middle', at: 100 });
      for (let i = ch.from; i <= ch.to; i++) marks[i].push(label);
    });

    // ----- under the line: a square for every time the second is said -----
    const head = line + 22;
    const HB = Math.max(...parts.map((q) => Math.ceil(q.b / n))) * p;
    parts.forEach((q, i) => { if (q.b) marks[i].push(d.path(squares(xs[i], head, q.b, n, p, s, false), { fill: RED, stroke: 'none', at: 550 + when(i) })); });

    // ----- who says it: the same squares again, in one row for each kind of speaker -----
    let y = head + HB + 28;
    d.text(0, y, k.WHO, { cls: 'dg-lab', at: 1500 });
    y += 8;
    const across = Math.max(1, Math.floor((w - 30) / p));           // the squares one row can hold
    k.kinds.forEach((kind, li) => {
      const at = 1600 + li * 100;
      const label = d.note(0, y, w, kind.who, { at });
      label.style.textWrap = 'balance';
      y += (label.getBoundingClientRect().height || 17) + 4;
      const rows = Math.ceil(kind.times / across);
      d.path(squares(0, y, kind.times, across, p, s, false), { fill: RED, stroke: 'none', at });
      d.text(Math.min(kind.times, across) * p + 5, y + s / 2 + 4.5, num(kind.times), { cls: 'dg-n', at });
      y += rows * p - 1 + 10;
    });
    const H = Math.ceil(y - 10 + 5);
    d.svg.setAttribute('height', H);
    d.svg.setAttribute('viewBox', `0 0 ${w} ${H}`);

    // ----- what the pointer adds: a column says its own figures -----
    const by = (q) => Object.entries(q.by).map(([who, count]) => `${who}${NB}${num(count)}`).join(', ');
    const says = (q) => `Chapter ${q.name}: ${A} ${times(q.a)}, ${B} ${times(q.b)}${by(q) ? ` (${by(q)})` : ''}, in ${num(q.words)} words.`;
    const hots = parts.map((q, i) => {
      const a = i ? (xs[i - 1] + c + xs[i]) / 2 : 0;
      const z = i < N - 1 ? (xs[i] + c + xs[i + 1]) / 2 : W;
      return d.hot(d.bar(a, top, z - a, head + HB - top, { fill: 'transparent' }), says(q), marks[i]);
    });
    // a row of the list points at its column, as the pointer on the column would; a tap on a row that is lit lets go
    const point = (row, hot) => {
      let touch = false;
      const pass = (type) => row.addEventListener(type, (e) => { if (e.pointerType !== 'touch') hot.dispatchEvent(new PointerEvent(type, { pointerType: e.pointerType })); });
      pass('pointerenter'); pass('pointerleave');
      row.addEventListener('pointerdown', (e) => { touch = e.pointerType === 'touch'; });
      row.addEventListener('click', (e) => { if (touch && !e.target.closest('a')) (hot.classList.contains('dg-on') ? d.wrap : hot).dispatchEvent(new MouseEvent('click')); });
    };

    d.keys([{ mark: 'bar', color: INK, text: `${A}, once` }, { mark: 'bar', color: RED, text: `${B}, once` }]);

    // ----- the turns, as the reading lists them: each row opens its place in the book and lights its column -----
    // The list stands open where the caption is beside the drawing; where the caption comes after it, the list is folded.
    const beside = ctx.root.clientWidth >= 880;
    if (k.turns.length) {
      const list = el('table', { class: 'facts' });
      const first = (name) => { const td = el('td', {}, [name]); td.style.minWidth = '5.4em'; return td; };
      const told = (what) => { const td = el('td', { text: what }); td.style.textWrap = 'pretty'; return td; };   // no word left alone on a last line
      k.turns.forEach((t) => {
        const name = `Chapter${NB}${t.chapter}`;
        const i = parts.findIndex((q) => q.name === String(t.chapter));
        const row = el('tr', {}, [first(t.read && canRead() ? el('a', { href: `#/read/${t.read}`, text: name }) : name), told(t.what)]);
        list.append(row);
        if (i >= 0) point(row, hots[i]);
      });
      if (k.after) list.append(el('tr', {}, [first(cap(k.after.name)), told(k.after.what)]));
      ctx.own.append(el('details', { class: 'dg-facts', open: beside ? '' : null }, [el('summary', { text: `${B}, chapter by chapter` }), el('div', { class: 'facts-wrap' }, [list])]));
    }

    // ----- the figures, folded away -----
    // Who said it in each chapter is a phrase, not a figure: it stands in the table where a column can hold a phrase.
    d.figures(parts.map((q) => ({ chapter: q.name, words: num(q.words), [A]: q.a, [B]: q.b, ...(k.BY && w >= 480 ? { [k.BY]: by(q) } : {}) })));
  },
};

export default { lenses: { 'letter:shape': title } };
