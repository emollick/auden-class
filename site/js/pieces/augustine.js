// The Confessions of Augustine: the two drawings of its own.
//
//   opening / Whole: the thirteen books on one line of words, each as wide
//                    as it is long and as tall as a word for Thou is common
//                    in it; the rest named on the first page tied to its
//                    return near the end, with any place of the same verb
//                    between them; the three parts of the work
//   pears / Book:    Book II as one bar of its eighteen paragraphs: the words
//                    that tell the theft, the words before and after them,
//                    and a dot for every question mark where it stands
//
// Both are drawn from the reading's own `facts` (remake/works/augustine/reading.json).

import { el, RED, INK, QUIET, HAIR, TINT } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

const count = (n, one, many) => `${n === 0 ? 'no' : num(n)} ${n === 1 ? one : many}`;
const asks = (n) => count(n, 'question mark', 'question marks');
// a count as the folded table prints it: with its comma where it has one (the kit sets such a count to the right, as it does a number)
const comma = (n) => { const s = num(n); return s.includes(',') ? s : n; };
// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;

// A few short lines of words set over the drawing, one under another: their
// left edge at x, or (end) their right edge, or (mid) their middle. A line
// with `read` is a link to that place in the book printed here. The block
// that comes back knows where it stands (l, w, h) and can be folded, so that
// it is narrower and taller: first a line that has a comma breaks after it,
// then every line may break once more.
function lines(d, x, y, rows, o = {}) {
  const p = d.note(0, y, 10, '', { at: o.at });
  p.style.textAlign = o.end ? 'right' : o.mid ? 'center' : 'left';
  const kids = rows.map((r) => {
    const node = r.read && canRead() ? el('a', { href: `#/read/${r.read}`, text: r.text }) : el('span', { text: r.text });
    node.style.display = 'block';
    node.style.whiteSpace = 'pre-line';
    if (r.color) node.style.color = r.color;
    p.append(node);
    return node;
  });
  const b = { node: p, x, y, l: 0, w: 0, h: 0, folds: 0 };
  const seat = () => {
    const box = p.getBoundingClientRect();
    b.w = box.width; b.h = box.height;
    b.l = o.end ? b.x - b.w : o.mid ? b.x - b.w / 2 : b.x;
    p.style.left = `${b.l}px`; p.style.top = `${b.y}px`;
    return b;
  };
  const whole = () => { p.style.width = 'max-content'; p.style.whiteSpace = 'nowrap'; p.style.textWrap = ''; };
  b.move = (nx, ny) => { b.x = nx; b.y = ny; return seat(); };
  b.unfold = () => { kids.forEach((k, i) => { k.textContent = rows[i].text; }); whole(); b.folds = 0; return seat(); };
  b.fold = () => {
    if (b.folds === 0 && rows.some((r) => /, /.test(r.text))) {
      b.folds = 1;
      kids.forEach((k, i) => { k.textContent = rows[i].text.replace(/, /g, ',\n'); });
    } else if (b.folds < 2) {
      b.folds = 2;
      p.style.width = `${Math.max(60, Math.ceil(b.w * 0.62))}px`; p.style.whiteSpace = 'normal'; p.style.textWrap = 'balance';
      // no wider than its longest line
      const range = document.createRange();
      const marks = kids.flatMap((k) => { range.selectNodeContents(k); return [...range.getClientRects()]; }).filter((q) => q.width > 0);
      if (marks.length) p.style.width = `${Math.ceil(Math.max(...marks.map((q) => q.right)) - Math.min(...marks.map((q) => q.left))) + 1}px`;
    }
    return seat();
  };
  whole();
  return seat();
}

// Blocks of words in one row, from left to right, are kept from touching: the
// widest gives way first, by folding. True if they stand clear, and `also` holds.
function clearRow(row, gap, also = () => true) {
  const clear = () => row.every((b, i) => !i || row[i - 1].l + row[i - 1].w + gap <= b.l) && also();
  for (let turn = 0; turn < 2 && !clear(); turn++) {
    for (const b of [...row].sort((p, q) => q.w - p.w)) { if (clear()) break; b.fold(); }
  }
  return clear();
}

// a line that turns corners, its two ends cut square: nothing of it shows before it is drawn
function turned(d, path, o) {
  const n = d.path(path, o);
  n.style.strokeLinecap = 'butt';
  return n;
}

// the line at the head of a drawing, which says what is counted and gives the totals: how tall it stands.
// Where it must turn, on a narrow drawing, it turns evenly, so that no word is left alone.
function headed(d, words) {
  const n = d.note(0, 0, d.w, words);
  n.style.textWrap = 'balance';
  return n.getBoundingClientRect().height;
}

// the drawing is as tall as what was set in it
function close(d, h) {
  d.svg.setAttribute('height', Math.ceil(h));
  d.svg.setAttribute('viewBox', `0 0 ${d.w} ${Math.ceil(h)}`);
}

// ----- Whole: the thirteen books -----
const whole = {
  name: 'Whole',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const tot = f.totals;
    if (!Array.isArray(f.books) || !f.books.length || !tot) throw new Error('facts: no books');
    let from = 0;
    const books = f.books.map((b) => { const o = { ...b, from, to: from + b.words, rate: b.thou / b.words }; from = o.to; return o; });
    const all = from; // the words of the books together: the length of the line
    const top = Math.max(...books.map((b) => b.rate));
    const low = Math.min(...books.map((b) => b.rate));
    const mean = tot.thou / tot.words;
    // the places of the verb, each with the number of words that stand before it:
    // the first and the last, and any place between them
    const placed = (list) => (Array.isArray(list) ? list : []).filter((r) => typeof r.wordsBefore === 'number' && r.latinVerb);
    const ends = placed(f.ring);
    if (ends.length < 2) throw new Error('facts: no ring');
    const a = ends[0]; const z = ends[ends.length - 1];
    const between = placed(f.ringBetween).filter((r) => r.wordsBefore > a.wordsBefore && r.wordsBefore < z.wordsBefore).sort((p, q) => p.wordsBefore - q.wordsBefore);
    // the parts of the work, each from one book to another
    const spans = (f.parts || []).map((p) => {
      const [first, last] = String(p.books).split(' to ');
      const i = books.findIndex((b) => b.book === first); const j = last === undefined ? i : books.findIndex((b) => b.book === last);
      if (i < 0 || j < i) throw new Error('facts: a part names no book');
      return { ...p, i, j };
    });

    const d = sheet(ctx, lens, run, 320);
    const W = d.w; const wide = W >= 520;
    // what is counted, and the two totals
    const head = headed(d, `a word for *Thou*: ${num(tot.thou)} times in ${num(tot.words)} words`);
    const G = wide ? 52 : 46; // room at the side for the figures of the scale
    const T = Math.ceil(head) + 13; const H = wide ? 120 : 96; const base = T + H;
    const x = (w) => G + ((W - G) * w) / all;
    const y = (r) => base - (H * r) / top;
    const oneIn = (r) => `1 in ${Math.round(1 / r)}`;

    // a column to a book: as wide as its words, as tall as a word for Thou is common in it
    const columns = books.map((b, i) => {
      const x1 = x(b.from); const x2 = x(b.to) - 1; const at = 100 + i * 50;
      return [
        d.bar(x1, y(b.rate), x2 - x1, base - y(b.rate), { fill: TINT, at }),
        d.rule(x1, y(b.rate) + 0.8, x2, y(b.rate) + 0.8, { stroke: INK, width: 1.6, at }),
      ];
    });
    // the scale: the book where it is commonest, the whole work, the book where it is rarest
    const ym = y(mean);
    d.rule(G, ym, W, ym, { stroke: QUIET, dash: '2 3', at: 700 });
    const level = (yy, words) => { d.rule(G - 4, yy, G, yy, { stroke: INK }); d.text(G - 8, yy + 4, words, { cls: 'dg-n', anchor: 'end' }); };
    level(ym, `1 in ${tot.oneThouIn || Math.round(1 / mean)}`);
    if (ym - y(top) >= 14) level(y(top), oneIn(top));
    if (y(low) - ym >= 14) level(y(low), oneIn(low));
    d.rule(G, base + 0.5, W, base + 0.5, { stroke: INK });

    // the number of each book at the foot of its column; on a narrow drawing they stand on two levels
    const names = books.map((b) => d.text((x(b.from) + x(b.to) - 1) / 2, base - 6, b.book, { cls: 'dg-n', anchor: 'middle' }));
    const tight = names.some((n, i) => n.getComputedTextLength() > x(books[i].to) - x(books[i].from) - 7);
    if (tight) names.forEach((n, i) => { if (i % 2) n.setAttribute('y', base - 19); });
    // the whole height of a column answers the pointer with that book's own figures; the column and its number stay dark
    books.forEach((b, i) => {
      const hit = d.bar(x(b.from), T - 4, x(b.to) - x(b.from), H + 4, { fill: 'transparent' });
      d.hot(hit, `Book ${b.book}: ${num(b.words)} words, a word for *Thou* ${num(b.thou)} times (${oneIn(b.rate)}).`, [...columns[i], names[i]]);
    });
    let yy = base;

    // the rest named on the first page, and where the same verb returns: a red tie hung from the line of words,
    // with a drop to it from any place between
    const xa = x(a.wordsBefore); const xz = x(z.wordsBefore); const xb = between.map((m) => x(m.wordsBefore));
    const yr = base + 10;
    const when = (xx) => 900 + (800 * (xx - xa)) / (xz - xa); // the tie reaches each place as it is drawn
    turned(d, `M${xa} ${base + 4}V${yr - 4}Q${xa} ${yr} ${xa + 4} ${yr}H${xz - 4}Q${xz} ${yr} ${xz} ${yr - 4}V${base + 4}`, { stroke: RED, width: 1.2, at: 900 });
    xb.forEach((xx) => d.rule(xx, base + 4, xx, yr, { stroke: RED, width: 1.2, at: when(xx) }));
    [xa, ...xb, xz].forEach((xx) => d.dot(xx, base + 0.5, 3, { fill: RED, at: when(xx) }));
    // each place is named under the tie: Pusey's word, the Latin verb, where it stands
    const says = (r) => [{ text: r.puseyWord || r.pusey, color: RED }, { text: r.latinVerb }, r.place ? { text: r.place, read: r.read } : null].filter(Boolean);
    const left = lines(d, xa, yr + 5, says(a), { at: 1000 });
    const right = lines(d, xz, yr + 5, says(z), { end: true, at: 1800 });
    const mids = between.map((m, i) => lines(d, xb[i], yr + 5, says(m), { mid: true, at: when(xb[i]) + 100 }));
    if (clearRow([left, ...mids, right], 12)) yy = yr + 5 + Math.max(...[left, right, ...mids].map((b) => b.h));
    else {
      // no room for them in one row: a place between hangs lower, from a line that passes between the two ends
      [left, right, ...mids].forEach((b) => b.unfold());
      clearRow([left, right], 12, () => xb.every((xx) => left.l + left.w + 6 <= xx && xx + 6 <= right.l));
      yy = yr + 5 + Math.max(left.h, right.h);
      mids.forEach((m, i) => {
        if (m.w > W) m.fold();
        if (m.w > W) m.fold();
        m.move(Math.min(Math.max(xb[i], m.w / 2), W - m.w / 2), yy + 5);
        d.rule(xb[i], yr, xb[i], yy + 2, { stroke: RED, at: when(xb[i]) });
        yy += 5 + m.h;
      });
    }

    // the parts of the work
    const parts = spans.map((p) => ({ ...p, x1: x(books[p.i].from) + 1.5, x2: x(books[p.j].to) - 2.5 }));
    if (parts.length) {
      const yp = yy + 16;
      parts.forEach((p, i) => {
        turned(d, `M${p.x1} ${yp - 5}V${yp}H${p.x2}V${yp - 5}`, { stroke: QUIET, width: 1, at: 1500 + i * 150 });
        d.text((p.x1 + p.x2) / 2, yp + 14, p.books, { cls: 'dg-lab', anchor: 'middle', at: 1600 + i * 150 });
      });
      yy = yp + 20;
      if (parts.every((p) => p.x2 - p.x1 >= 64)) {
        // each part's matter under its own bracket, clear of its neighbours'
        const hs = parts.map((p, i) => {
          const n = d.note(p.x1 + 8, yy, p.x2 - p.x1 - 16, p.what, { align: 'center', at: 2000 + i * 100 });
          n.style.textWrap = 'balance';
          return n.getBoundingClientRect().height;
        });
        yy += Math.max(...hs);
      } else {
        parts.forEach((p, i) => { yy += d.note(0, yy, W, `${p.books}: ${p.what}`, { at: 2000 + i * 100 }).getBoundingClientRect().height + 1; });
      }
    }
    close(d, yy + 4);

    // (three short rows, each on one line at every width: the pale column, its ink top, the dotted line)
    d.keys([
      { mark: 'bar', color: TINT, text: 'a book, as wide as its words' },
      { mark: 'line', color: INK, text: 'how often it says *Thou*' },
      { mark: 'dash', color: QUIET, text: 'how often the whole work says it' },
    ]);
    // (the spaces in a figure do not break)
    d.figures(books.map((b) => ({ book: b.book, words: comma(b.words), 'a word for Thou': `${num(b.thou)} (${oneIn(b.rate)})`.replace(/ /g, '\u00a0'), 'what it tells': b.tells })));
  },
};

// ----- Book: Book II, the theft and what comes after it -----
const book = {
  name: 'Book',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const after = f.afterTheStory;
    if (!Array.isArray(f.sections) || !f.sections.length || !after) throw new Error('facts: no sections');
    let c = 0;
    const secs = f.sections.map((s) => { const o = { ...s, from: c, to: c + s.words }; c = o.to; return o; });
    const total = c;
    // the story of the theft is the section that the words "after the story" begin after
    const k = secs.findIndex((s) => total - s.to === after.words);
    if (k < 0) throw new Error('facts: no story');
    const story = secs[k];
    // the passage of this plate is the section after the story that has as many words as the plate shows
    const shown = ctx.rowList.reduce((n, r) => n + (r.last - r.first + 1), 0);
    const here = secs.find((s, i) => i > k && s.words === shown) || null;
    // the paragraphs, if they are counted; otherwise the sections stand for them
    const counted = Array.isArray(f.paragraphWords) && f.paragraphWords.reduce((s, n) => s + n, 0) === total;
    c = 0;
    const cells = (counted ? f.paragraphWords : secs.map((s) => s.words)).map((n) => { const o = { from: c, to: c + n }; c = o.to; return o; });
    // where the question marks stand: they are drawn only if they come to the counts the labels give
    const found = (Array.isArray(f.questionMarkWords) ? f.questionMarkWords : []).filter((m) => m >= 1 && m <= total);
    const marks = (f.questions == null || found.length === f.questions) && found.filter((m) => m > story.to).length === (after.questions || 0) ? found : [];
    const asked = (a, z) => marks.filter((m) => m > a && m <= z).length;

    const d = sheet(ctx, lens, run, 180);
    const W = d.w;
    const x = (w) => (W * w) / total;

    const head = headed(d, `${num(f.words || total)} words${f.paragraphs ? ` in ${f.paragraphs} paragraphs` : ''}${f.questions ? `, with ${asks(f.questions)}` : ''}`);

    // a dot to a question mark, at the word it ends; dots that would touch stand one on another
    const R = 2; const pitch = 5;
    const rows = [];
    const dots = marks.map((m) => {
      const cx = x(m - 0.5);
      let lv = 0;
      while ((rows[lv] || []).some((q) => Math.abs(q - cx) < pitch)) lv++;
      (rows[lv] = rows[lv] || []).push(cx);
      return { m, cx, lv };
    });
    const yl = Math.ceil(head) + 19; // the line the two labels stand on
    const yb = yl + 12 + (dots.length ? rows.length * pitch + 4 : 0); // the top of the bar
    const bh = 16;
    dots.forEach((q) => { q.node = d.dot(q.cx, yb - 5 - q.lv * pitch, R, { fill: INK, at: 400 + (q.cx / W) * 700 }); });

    // the bar: a cell to a paragraph, as wide as its words; pale before the theft, red for it, ink after it
    const fillOf = (s) => (s === story ? RED : s.to <= story.from ? HAIR : INK);
    const askedIn = (a, z, s) => (marks.length ? asked(a, z) : s && typeof s.questions === 'number' ? s.questions : null);
    // what answers the pointer: a paragraph that has a matter of its own, or else a whole stretch of the book
    const groups = new Map();
    let n = 0;
    cells.forEach((cell, i) => {
      const later = cell.from >= story.to;
      if (later) n++;
      const tale = (counted && later && Array.isArray(f.examination) && f.examination[n - 1]) || null;
      const within = secs.filter((s) => Math.min(cell.to, s.to) > Math.max(cell.from, s.from));
      within.forEach((s, j) => {
        const a = Math.max(cell.from, s.from); const z = Math.min(cell.to, s.to);
        // a paragraph ends in a gap; two stretches of one color inside it meet without a seam
        const x1 = x(a); const x2 = x(z) - (z === cell.to ? 1 : 0) + (within[j + 1] && fillOf(within[j + 1]) === fillOf(s) ? 0.5 : 0);
        const bar = d.bar(x1, yb, x2 - x1, bh, { fill: fillOf(s), at: 100 + (a / total) * 700 });
        const key = tale ? `${i}/${secs.indexOf(s)}` : secs.indexOf(s);
        if (!groups.has(key)) {
          groups.set(key, tale
            ? { a, z, bars: [], n, chapter: tale.chapter, name: tale.matter, asked: askedIn(a, z) }
            : {
              a: s.from, z: s.to, bars: [], name: s.what || (s === here ? 'this passage' : ''), asked: askedIn(s.from, s.to, s),
              title: s === story ? 'The theft' : s === here ? 'This passage' : '',
              sentences: s === story ? s.sentences : 0,
              paragraphs: counted ? cells.filter((q) => q.from >= s.from && q.to <= s.to).length : 0,
            });
        }
        groups.get(key).bars.push(bar);
      });
      // the paragraphs after the theft are numbered from it
      if (counted && later && x(cell.to) - x(cell.from) >= 6) {
        const figure = d.text((x(cell.from) + x(cell.to) - 1) / 2, yb + bh + 14, n, { cls: 'dg-n', anchor: 'middle', fill: QUIET, at: 900 + n * 30 });
        const own = tale && groups.get(`${i}/${secs.indexOf(within[0])}`);
        if (own) own.bars.push(figure); // its number stays dark with it
      }
    });

    // the two stretches the caption names, flagged above the bar
    const xs = (x(story.from) + x(story.to)) / 2;
    d.rule(xs, yb, xs, yl - 8, { stroke: RED, at: 1100 });
    lines(d, xs - 5, yl - 12.5, [{ text: `the theft: ${count(story.words, 'word', 'words')}`, color: RED, read: story.read }], { end: true, at: 1200 });
    if (here) {
      const p1 = x(here.from) + 0.5; const p2 = x(here.to) - 1.5; const xp = (p1 + p2) / 2;
      turned(d, `M${p1} ${yb - 1.5}v-2.5H${p2}v2.5`, { stroke: QUIET, width: 1, at: 1300 });
      d.rule(xp, yb - 4, xp, yl - 8, { stroke: QUIET, at: 1300 });
      lines(d, xp + 5, yl - 12.5, [{ text: 'this passage' }], { at: 1400 });
    }

    // before it and after it
    const yk = yb + bh + (counted ? 26 : 12);
    const span = (x1, x2, first, second, at) => {
      turned(d, `M${x1} ${yk - 5}V${yk}H${x2}V${yk - 5}`, { stroke: QUIET, width: 1, at });
      d.text((x1 + x2) / 2, yk + 15, first, { anchor: 'middle', at: at + 100 });
      if (second) d.text((x1 + x2) / 2, yk + 30, second, { anchor: 'middle', at: at + 100 });
    };
    if (story.from > 0) span(0.5, x(story.from) - 1.5, `${num(story.from)} words before it`, asks(secs.slice(0, k).reduce((s, v) => s + (v.questions || 0), 0)), 1500);
    span(x(story.to) + 0.5, W - 0.5, `${num(after.words)} words after it`, asks(after.questions || 0), 1700);
    // each answers the pointer over its whole height, from its question marks down to its number,
    // with its own figures (its matter is in the folded table), and stays dark with its question marks and its number
    const ht = dots.length ? yb - 7 - rows.length * pitch : yb - 3;
    groups.forEach((g) => {
      const hit = d.bar(x(g.a), ht, x(g.z) - x(g.a), yb + bh + 18 - ht, { fill: 'transparent' });
      const lead = g.n ? `Paragraph ${g.n} after the theft: ` : g.title ? `${g.title}: ` : '';
      const made = g.sentences ? ` in ${count(g.sentences, 'sentence', 'sentences')}` : g.paragraphs ? ` in ${count(g.paragraphs, 'paragraph', 'paragraphs')}` : '';
      const its = dots.filter((q) => q.m > g.a && q.m <= g.z).map((q) => q.node);
      d.hot(hit, `${lead}${count(g.z - g.a, 'word', 'words')}${made}${g.asked == null ? '' : `, ${asks(g.asked)}`}.`, [...g.bars, ...its]);
    });
    close(d, yk + 36);

    d.keys([
      marks.length ? { mark: 'dot', color: INK, text: 'a question mark, where it stands' } : null,
      { mark: 'bar', color: INK, text: counted ? 'a paragraph, as wide as its words' : 'a stretch of the book, as wide as its words' },
    ].filter(Boolean));
    // the figures: every stretch that answers the pointer, in the order of the book;
    // the paragraphs after the theft carry the numbers they have under the bar
    d.figures([...groups.values()].map((g) => {
      const row = { '': g.n ? `${g.n}. ${g.name || ''}${g.chapter ? ` (${g.chapter})` : ''}` : g.name, words: comma(g.z - g.a) };
      if (g.asked != null) row['question marks'] = g.asked;
      return row;
    }));
  },
};

export default { lenses: { 'opening:shape': whole, 'pears:shape': book } };
