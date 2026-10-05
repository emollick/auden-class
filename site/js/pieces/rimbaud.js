// A Season in Hell: the drawing of its own.
//
//   stanza / Chapter:  "Alchemy of the Word" in the order it is printed, a row
//                      to each run of prose with the poem or poems that follow
//                      it. The prose stands left of the stop it ends on and
//                      the poems right of it, so the stops stand in a column.
//                      A paragraph is a box in outline and a stanza a solid
//                      one, each as long as its words. What the passages of
//                      this page print is red. Over the rows, the words of
//                      prose and of verse in the whole chapter.
//
// Drawn from the reading's own `facts` (remake/works/rimbaud/reading.json).
// The words of each paragraph and stanza stand there under the keys "words in
// each paragraph" and "words in each stanza"; remake/works/rimbaud/chapter-count.mjs
// counts them in the text printed here and checks them against the facts.

import { RED, INK, mk, el } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

const PARAS = 'words in each paragraph';
const STANZAS = 'words in each stanza';
const PROSE = 'words of prose';          // the keys of the totals; the first two are printed as they stand
const VERSE = 'words of verse';
// what a run of prose ends on, as the facts name it, and the sign drawn for it
const STOP = { 'a full stop': '.', 'a colon': ':', 'an exclamation mark': '!', 'a question mark': '?', 'a semicolon': ';', 'a comma': ',', 'a dash': '\u2014' };
const NTH = ['first', 'second', 'third', 'fourth', 'fifth'];
// the book is printed on the site, and not on a page that shows this piece alone
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const count = (n, one, more = `${one}s`) => `${num(n)} ${n === 1 ? one : more}`;
const sum = (list, f = (x) => x) => list.reduce((n, x) => n + (f(x) || 0), 0);

// The parts as the facts give them, in order, and the totals. If the figures
// disagree with each other, nothing is drawn and the kit shows the plain table.
function chapter(facts) {
  if (!Array.isArray(facts) || !facts.length) throw new Error('facts: no parts');
  const whole = facts.find((f) => f && f[PROSE] != null && f[VERSE] != null);
  if (!whole) throw new Error('facts: no totals for the whole chapter');
  const parts = facts.filter((f) => f !== whole).map((f) => {
    const verse = Array.isArray(f[STANZAS]);
    const units = verse ? f[STANZAS] : f[PARAS];
    if (!Array.isArray(units) || !units.length) throw new Error(`facts: a part without "${PARAS}" or "${STANZAS}"`);
    if (sum(units) !== f.words) throw new Error('facts: the words of a part do not add up to its total');
    if (!verse && units.length !== f.paragraphs) throw new Error('facts: the paragraphs of a run of prose');
    return { f, verse, units, words: f.words };
  });
  const prose = parts.filter((p) => !p.verse);
  const poems = parts.filter((p) => p.verse);
  if (sum(prose, (p) => p.words) !== whole[PROSE]) throw new Error(`facts: ${PROSE}`);
  if (sum(poems, (p) => p.words) !== whole[VERSE]) throw new Error(`facts: ${VERSE}`);
  if (sum(prose, (p) => p.f.paragraphs) !== whole['paragraphs of prose']) throw new Error('facts: paragraphs of prose');
  if (sum(poems, (p) => p.f.lines) !== whole['lines of verse']) throw new Error('facts: lines of verse');
  if (poems.length !== whole.poems) throw new Error('facts: poems');
  // a row to each run of prose, with the poems that follow it
  const rows = [];
  for (const p of parts) {
    if (p.verse && rows.length) rows[rows.length - 1].poems.push(p);
    else rows.push(p.verse ? { prose: null, poems: [p] } : { prose: p, poems: [] });
  }
  return { whole, parts, rows };
}

// Which paragraphs and stanzas the passages of this page show. Each part says
// where it begins in the book printed here (`read`: book, part, block), and the
// rows of a passage say which blocks they are. A heading stands before the
// stanzas of a poem that has one, so the stanzas are the last blocks of a part.
function passages(ctx, parts) {
  const src = ctx.plate.src;
  const first = parts.map((p) => { const m = String(p.f.read || '').match(/^(.+):(\d+)$/); return m && m[1] === src ? +m[2] : null; });
  parts.forEach((p, i) => {
    const n = p.units.length;
    p.blocks = p.units.map((u, j) => (first[i] === null ? null : first[i + 1] != null ? first[i + 1] - n + j : first[i] + j));
    p.shown = p.units.map(() => null);
  });
  const plates = (ctx.piece && ctx.piece.plates) || [];
  plates.forEach((plate, nth) => {
    if (plate.src !== src) return;
    const name = plate.id === ctx.plate.id ? 'this passage' : `the ${NTH[nth] || 'other'} passage`;
    const blocks = new Set((plate.rows || []).filter((r) => r && !r.aside && r.id != null).map((r) => parseInt(r.id, 10)));
    parts.forEach((p) => p.blocks.forEach((b, j) => { if (b !== null && blocks.has(b)) p.shown[j] = name; }));
  });
  // the passages that stand in some of the parts, each named once
  return (list) => [...new Set(list.flatMap((p) => p.shown).filter(Boolean))];
}

const chapterLens = {
  name: 'Chapter',
  stage: 'own',
  draw(ctx, lens, run) {
    const { whole, parts, rows } = chapter(lens.facts);
    const namesOf = passages(ctx, parts);

    // ----- the measures -----
    const HEAD = 80; const P = 34; const H = 12;       // the head, a row, a mark
    const wasOpen = !run && !!ctx.own.querySelector('details.dg-facts[open]');   // a resize must not shut the figures
    const d = sheet(ctx, lens, run, HEAD + rows.length * P - 4);
    const narrow = d.w < 420;
    const A = narrow ? 14 : 18;                         // the room for the stop, between the prose and the poems
    const G = narrow ? 5 : 7;                           // between two poems that follow each other
    const most = Math.max(0, ...rows.map((r) => (r.prose ? r.prose.words : 0)));
    // one scale for every mark: so many px to a word that the longest row fills the width
    const s = Math.min(...rows.map((r) => (d.w - 4 - A - G * Math.max(0, r.poems.length - 1)) / (most + sum(r.poems, (p) => p.words))));
    const L = Math.ceil(most * s) + 2;                  // where the prose stops
    const R = L + A;                                    // where the poems begin

    // ----- the whole chapter, over the two sides -----
    d.text(L - 1, 30, num(whole[PROSE]), { cls: 'dg-big', anchor: 'end' });
    d.text(L - 1, 48, PROSE, { anchor: 'end' });
    d.text(L - 1, 64, count(whole['paragraphs of prose'], 'paragraph'), { anchor: 'end' });
    d.text(R, 30, num(whole[VERSE]), { cls: 'dg-big' });
    d.text(R, 48, VERSE);
    d.text(R, 64, `${count(whole.poems, 'poem')}, ${count(whole['lines of verse'], 'line')}`);

    // ----- a row to each run of prose and the poems after it -----
    let touch = false;
    d.svg.addEventListener('pointerdown', (e) => { touch = e.pointerType === 'touch'; }, true);
    // a part is one thing to the pointer: its marks and the room around them
    const group = (f) => {
      const link = f.read && canRead();
      const g = mk(link ? 'a' : 'g', link ? { href: `#/read/${f.read}`, tabindex: -1 } : {});
      d.svg.append(g);
      // a pointer may go to the place in the book; a finger only asks what the marks are
      if (link) { g.style.cursor = 'pointer'; g.addEventListener('click', (e) => { if (touch) e.preventDefault(); }); }
      return g;
    };

    rows.forEach((row, r) => {
      // a label stands close over its own marks and clear of the row above
      const top = HEAD + r * P; const y = top + 14; const at = 150 + r * 330;
      // the passages of this page that stand in the row are named over its prose
      const red = namesOf([row.prose, ...row.poems].filter(Boolean));
      const note = red.length ? d.text(L - 1, top + 9, red.join(', '), { anchor: 'end', fill: RED, at: at + 250 }) : null;

      if (row.prose) {
        const p = row.prose; const f = p.f; const g = group(f);
        // paragraph by paragraph, ending where the prose stops; no box under 3 px
        let before = 0;
        const e = p.units.map((u) => { const x = Math.round(L - 1 - (p.words - before) * s); before += u; return x; });
        e.push(L - 1);
        for (let j = e.length - 2; j >= 0; j--) e[j] = Math.min(e[j], e[j + 1] - 3);
        const box = (j) => d.bar(e[j] + 0.5, y + 0.5, e[j + 1] - e[j], H - 1, { fill: 'none', stroke: p.shown[j] ? RED : INK, at });
        const ink = p.units.map((u, j) => (p.shown[j] ? null : box(j))).filter(Boolean);
        const redOnes = p.units.map((u, j) => (p.shown[j] ? box(j) : null)).filter(Boolean);   // the red ones last, over the lines they share
        const sign = STOP[f['ends on']];
        // the stop stands outside the link, which would underline it, and leaves the pointer to the boxes
        const stop = sign ? d.text(L + A / 2, y + H - 1, sign, { cls: 'dg-name', anchor: 'middle', at: at + 120 }) : null;
        if (stop) stop.style.pointerEvents = 'none';
        g.append(...ink, ...redOnes, d.bar(e[0] - 2, y - 4, R - e[0] + 2, H + 8, { fill: 'transparent' }));
        // what the pointer adds: the figures of the run, and in a few words what it says
        d.hot(g, `${count(f.paragraphs, 'paragraph')}, ${count(f.words, 'word')}${f['ends on'] ? `, ending on ${f['ends on']}` : ''}.${f.says ? ` In it: ${f.says}.` : ''}`, [stop, namesOf([p]).length ? note : null]);
      }

      let x = R;
      row.poems.forEach((p) => {
        const f = p.f; const g = group(f);
        // stanza by stanza, a px of paper between two; no mark under 1 px
        let before = 0;
        const e = p.units.map((u) => { const v = Math.round(x + before * s); before += u; return v; });
        e.push(Math.round(x + p.words * s));
        for (let j = 1; j < e.length; j++) e[j] = Math.max(e[j], e[j - 1] + 2);
        const marks = p.units.map((u, j) => d.bar(e[j], y, e[j + 1] - e[j] - 1, H, { fill: p.shown[j] ? RED : INK, at: at + 240 }));
        const fig = f.number != null ? d.text(e[0], top + 9, f.number, { cls: 'dg-n', at: at + 240 }) : null;
        g.append(...marks, d.bar(e[0] - 1, y - 4, e[e.length - 1] - e[0] + 1, H + 8, { fill: 'transparent' }));
        d.hot(g, `${f.number != null ? `Poem ${f.number}` : 'A poem'}${f.title ? `, with ${f.title}` : ''}: ${count(f.lines, 'line')}, ${count(f.words, 'word')}.`, [fig, namesOf([p]).length ? note : null]);
        x = e[e.length - 1] + G;
      });
    });

    // ----- the key, and the figures folded away -----
    const signs = [...new Set(rows.map((r) => r.prose && STOP[r.prose.f['ends on']]).filter(Boolean))];
    const key = d.keys([
      { mark: 'open', color: INK, text: 'a paragraph of prose' },
      ...(signs.length ? [{ mark: 'dot', color: INK, text: 'what the prose ends on' }] : []),
      { mark: 'bar', color: INK, text: 'a stanza of a poem; the more words, the longer the box' },
    ]);
    // the sample of the second entry is the stops themselves, in the face they are drawn in
    // (the kit has no sample for a sign; if its key is ever built otherwise, a dot stands there)
    const sample = signs.length && key ? key.querySelectorAll('.dg-m')[1] : null;
    if (sample) {
      const stops = el('span', { text: signs.join(' ') });
      stops.style.cssText = 'font:normal 500 18px/1 var(--display);color:var(--ink)';
      sample.replaceWith(stops);
    }
    if (key) key.style.textWrap = 'balance';   // in the narrowest drawing the last entry turns: no word is left alone

    // part by part: its words, and the words of each paragraph or stanza the boxes are drawn from.
    // A wide drawing has room for two columns more: how many paragraphs or lines, and the stop.
    const wide = d.w >= 520;
    const EACH = 'words in each box';
    const unbroken = (t) => String(t).replace(/ /g, '\u00a0');   // a short name is not turned over
    const line = (name, words, size, each, stop) => ({ '': name, words, ...(wide ? { ' ': size } : {}), [EACH]: each, ...(wide ? { 'ends on': stop } : {}) });
    const fig = parts.map((p) => (p.verse
      ? line(unbroken(p.f.number != null ? `poem ${p.f.number}` : 'a poem'), p.words, `${count(p.f.lines, 'line')}${p.f.title ? `, ${p.f.title}` : ''}`, p.units.join(', '))
      : line('prose', p.words, count(p.f.paragraphs, 'paragraph'), p.units.join(', '), p.f['ends on'])));
    // the totals, under the names the facts give them
    fig.push(
      line(PROSE, whole[PROSE], count(whole['paragraphs of prose'], 'paragraph')),
      line(VERSE, whole[VERSE], `${count(whole.poems, 'poem')}, ${count(whole['lines of verse'], 'line')}`),
    );
    if (whole['words in titles'] != null) fig.push(line('words in titles', whole['words in titles'], whole.titles != null ? count(whole.titles, 'title') : ''));
    if (whole['words in all'] != null) fig.push(line('words in all', whole['words in all'], whole.part || ''));
    const fold = d.figures(fig);
    if (fold && wasOpen) fold.open = true;
  },
};

export default { lenses: { 'stanza:shape': chapterLens } };
