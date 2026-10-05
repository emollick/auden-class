// The Education of Henry Adams: the two drawings of its own.
//
//   dynamo / Force: how often the word force comes in each chapter, as bars
//   born / Book:    the years down the page, each chapter a bar against the
//                   years in its title, and the twenty years no chapter is
//                   given to; under it, what the storyteller calls himself
//
// Every count, name, title and date is read from the reading's `facts` when
// the page runs (remake/works/adams/reading.json). A key that is missing
// throws, and the kit then shows its plain table in the drawing's place.

import { RED, INK, HAIR, TINT, mk } from '../kit/draw.js';
import { sheet, lin, num } from '../kit/diagram.js';

// the years named in a string: "1838-1848" gives [1838, 1848], "1861" gives [1861]
const years = (s) => (String(s).match(/\d{4}/g) || []).map(Number);
const to = (s) => String(s).replace('-', ' to ');
// how long a line of words is, once it stands in the drawing
const long = (node) => node.getComputedTextLength();
// A label says as much as it has room for: the first of several wordings that
// passes `ok` is kept, or the last one if none does. Gives back which it was.
const fit = (node, wordings, ok) => {
  let k = 0;
  node.textContent = wordings[0];
  while (k < wordings.length - 1 && !ok(node)) { k += 1; node.textContent = wordings[k]; }
  return k;
};
// a line centered on cx, moved back inside the drawing if it would run out of it
const inside = (d, node, cx) => {
  const half = long(node) / 2;
  node.setAttribute('x', Math.max(half, Math.min(d.w - half, cx)));
};

// A label that sends the reader to its place in the book printed here: `read`
// is a fact such as "adams/c33:1" (kit/README.md, rule 2). The page underlines
// its links with a hairline that turns red under the pointer; in an svg that
// line takes the fill of the link, so the fill is set here. A page that shows
// one piece only (a private preview) has no book to open, and gets no link.
// A label of two lines is one link, not two.
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const link = (nodes, read) => {
  const lines = [].concat(nodes).filter((n) => n && n.parentNode);
  if (!read || !lines.length || !canRead()) return;
  const a = mk('a', { href: `#/read/${read}`, 'aria-label': lines.map((n) => n.textContent).join(', ') });
  a.style.fill = HAIR;
  a.addEventListener('pointerenter', () => { a.style.fill = RED; });
  a.addEventListener('pointerleave', () => { a.style.fill = HAIR; });
  lines[0].before(a);
  a.append(...lines);
};

// ----- Force: one bar to a chapter -----
const force = {
  name: 'Force',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const chapters = f.chapters; // each is [number, title, years in the title, words, times]
    const early = f.chapters1to20; const late = f.chapters21to35;
    if (!Array.isArray(chapters) || !chapters.length) throw new Error('facts: no chapters');
    if (!early || !late) throw new Error('facts: no chapters1to20 or chapters21to35');
    const here = f.thisChapter ? f.thisChapter.number : null;
    const mine = chapters.find((c) => c[0] === here);
    const theory = f.theTheory && typeof f.theTheory === 'object' ? f.theTheory : null; // { chapter, read }
    // the later stretch begins with the first chapter dated after the last year of the earlier one
    const until = Math.max(...years(early.years));
    let split = chapters.findIndex((c) => years(c[2])[0] > until);
    if (split < 1) split = chapters.length;
    const most = Math.max(...chapters.map((c) => c[4]));
    const peak = chapters.find((c) => c[4] === most);

    const H = 168; const T = 26; const B = 74; // the bars, the room over them and the room under the line
    const d = sheet(ctx, lens, run, T + H + B);
    const gap = split < chapters.length ? Math.min(34, d.w * 0.07) : 0;
    const slot = (d.w - gap) / chapters.length;
    const bw = Math.max(3, Math.min(13, slot - 2));
    const x = (i) => i * slot + (i >= split ? gap : 0) + (slot - bw) / 2;
    const y = lin(0, most, T + H, T);
    const base = T + H;
    const when = (i) => 200 + i * 38;

    // the line the bars stand on, broken where the years are
    d.rule(0, base + 0.5, x(split - 1) + bw + 3, base + 0.5, { stroke: INK });
    if (gap) d.rule(x(split) - 3, base + 0.5, d.w, base + 0.5, { stroke: INK });
    chapters.forEach((c, i) => {
      const n = c[4];
      const bar = d.bar(x(i), y(n), bw, Math.max(n ? 1.5 : 0, base - y(n)), { fill: c === mine ? RED : INK, at: when(i) });
      // a bar too thin to point at, or a chapter with none, has an unseen box as wide as its place to point at;
      // the bar stays dark with it while the others go pale
      const hit = d.bar(x(i) - 1, T, bw + 2, H + 4, { fill: 'transparent' });
      d.hot(hit, `Chapter ${c[0]}, ${c[1]} (${to(c[2])}): ${n === 0 ? 'not\u00a0once' : n === 1 ? 'once' : n === 2 ? 'twice' : `${n}\u00a0times`} in ${num(c[3])}\u00a0words`, bar);
    });

    // the numbers under the line: the chapter of the passage, the tallest bar, and the two ends of each stretch;
    // one that would stand within 8 px of a number already set is left out
    const numbered = [];
    const number = (i, fill) => {
      if (i < 0 || i >= chapters.length || numbered.some((b) => b.i === i)) return;
      const node = d.text(x(i) + bw / 2, base + 16, chapters[i][0], { cls: 'dg-n', anchor: 'middle', fill, at: when(i) });
      const half = long(node) / 2; const cx = x(i) + bw / 2;
      if (numbered.some((b) => cx - half < b.r + 8 && cx + half > b.l - 8)) { node.remove(); return; }
      numbered.push({ i, l: cx - half, r: cx + half });
    };
    number(chapters.indexOf(mine), RED);
    number(chapters.indexOf(peak));
    [0, chapters.length - 1, split - 1, split].forEach((i) => number(i));

    // under each stretch: its years, how often the word comes there, and in how many words
    const under = (o, a, z, at) => {
      const cx = (x(a) + x(z) + bw) / 2;
      const lines = [[o.years, 'dg-n']];
      if (typeof o.force === 'number') lines.push([`${num(o.force)} times`]);
      if (typeof o.words === 'number') lines.push([`in ${num(o.words)} words`]);
      lines.forEach(([words, cls], k) => inside(d, d.text(cx, base + 34 + k * 16, words, { cls, anchor: 'middle', at }), cx));
    };
    under(early, 0, split - 1, 500);
    if (gap) under(late, split, chapters.length - 1, 1400);

    // the chapter of the passage and the chapter with the most, each named at the top of its bar
    const flag = (c, at) => {
      if (!c) return;
      const i = chapters.indexOf(c);
      const room = x(i) - 7; const yb = y(c[4]) + 4;
      const node = d.text(room, yb, '', { anchor: 'end', fill: c === mine ? RED : null, at });
      // a bar to the left that reaches up into the words
      const crossed = () => chapters.some((o, j) => j < i && x(j) + bw > room - long(node) - 3 && y(o[4]) < yb + 3);
      const k = fit(node, [`${c[1]}, ${num(c[4])} times`, `${num(c[4])} times`, num(c[4])], () => long(node) <= room && !crossed());
      if (k === 2) node.classList.replace('dg-it', 'dg-n');
      // no room at its left even for the figure: the figure stands on the bar
      if (long(node) > room || crossed()) { node.setAttribute('text-anchor', 'middle'); node.setAttribute('x', x(i) + bw / 2); node.setAttribute('y', y(c[4]) - 6); }
      // the chapter the facts give a place in: its name leads there
      if (theory && theory.chapter === c[0]) link(node, theory.read);
    };
    flag(mine, mine ? when(chapters.indexOf(mine)) + 300 : 0);
    if (peak !== mine) flag(peak, when(chapters.indexOf(peak)) + 300);

    d.keys((mine ? [{ mark: 'bar', color: RED, text: `chapter ${here}, the chapter of this passage` }] : []).concat([{ mark: 'bar', color: INK, text: mine ? 'the other chapters' : 'a chapter' }]));
    d.figures(chapters.map((c) => ({ chapter: c[0], title: c[1], words: num(c[3]), times: c[4] })), 'The count, chapter by chapter');
  },
};

// ----- Book: the years down the page, and a chapter against its years -----
const book = {
  name: 'Book',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const gapOf = f.theGap || {};
    if (!Array.isArray(f.chapters) || !f.chapters.length) throw new Error('facts: no chapters');
    if (typeof gapOf.lastYearBefore !== 'number' || typeof gapOf.firstYearAfter !== 'number') throw new Error('facts: no theGap');
    // each chapter is [number, years in the title, words]
    const chapters = f.chapters.map((c) => { const [a, z] = years(c[1]); return { n: c[0], from: a, to: z || a, words: c[2], years: String(c[1]) }; });
    if (chapters.some((c) => !c.from)) throw new Error('facts: a chapter with no year');
    const first = Math.min(...chapters.map((c) => c.from)); const last = Math.max(...chapters.map((c) => c.to));
    const g0 = gapOf.lastYearBefore + 1; const g1 = gapOf.firstYearAfter; // the first year with no chapter, and the first with one again
    const events = (gapOf.outsideTheBook || []).map((line) => ({ year: parseInt(line, 10), words: String(line).replace(/^\d+:\s*/, '') })).filter((e) => e.year);
    const own = (f.firstPerson && f.firstPerson.inTheStorytellersOwnSentences) || null;
    const said = own ? ['I', 'me', 'my'].filter((w) => typeof own[w] === 'number').map((w) => [w, own[w]]) : [];
    const name = f.fullName ? Object.entries(f.fullName).find(([, v]) => typeof v === 'number') : null;

    const py = 4.6;                       // px to a year
    const T = 8; const H = (last + 1 - first) * py;
    const lower = said.length || name ? 84 : 0; // the room the second drawing takes
    const d = sheet(ctx, lens, run, T + H + 22 + lower);
    const Y = (yr) => T + (yr - first) * py;
    const gx = 36;                        // the years stand to the left of this line
    const col = (d.w - gx - 3) / chapters.length;
    const bw = Math.max(3, Math.min(9, col - 2.4));
    const X = (i) => gx + 3 + i * col + (col - bw) / 2;

    // the years no chapter is given to: a band across the page
    d.bar(0, Y(g0), d.w, Y(g1) - Y(g0), { fill: TINT, at: 900 });
    // the years, down the left
    d.rule(gx - 0.5, Y(first), gx - 0.5, Y(last + 1), { stroke: INK });
    [first, g0, g1, last + 1].forEach((yr) => d.rule(gx - 5, Y(yr), gx, Y(yr), { stroke: INK }));
    d.text(gx - 9, Y(first) + 10, first, { cls: 'dg-n', anchor: 'end' });
    d.text(gx - 9, Y(g0) - 4, gapOf.lastYearBefore, { cls: 'dg-n', anchor: 'end' });
    d.text(gx - 9, Y(g1) + 12, g1, { cls: 'dg-n', anchor: 'end' });
    d.text(gx - 9, Y(last + 1), last, { cls: 'dg-n', anchor: 'end' });

    // a chapter: a bar from the first year in its title to the last, in a column of its own
    chapters.forEach((c, i) => {
      const y1 = Y(c.from); const y2 = Math.max(Y(c.to + 1) - 1.2, y1 + 3);
      const bar = d.bar(X(i), y1, bw, y2 - y1, { fill: INK, at: 150 + i * 40 });
      // what answers the pointer is the whole column, and a little more above and below than the bar
      const hit = d.bar(gx + 3 + i * col, Math.max(T, y1 - 12), col, Math.min(T + H, y2 + 12) - Math.max(T, y1 - 12), { fill: 'transparent' });
      d.hot(hit, `Chapter ${c.n} (${to(c.years)}): ${num(c.words)}\u00a0words`, bar);
    });

    // the first and the last chapter by number; the two on either side of the band by number and title
    const before = chapters.filter((c) => c.to < g0); const after = chapters.filter((c) => c.from >= g1);
    const a = before[before.length - 1]; const z = after[0];
    const at = (c) => chapters.indexOf(c);
    d.text(X(0) + bw + 5, Y(first) + 10, `chapter ${chapters[0].n}`, { at: 300 });
    d.text(d.w - 1, Y(last + 1) + 14, `chapter ${chapters[chapters.length - 1].n}`, { anchor: 'end', at: 1600 });
    if (a && z) {
      const ta = (f.beforeTheGap && f.beforeTheGap.lastTitle) || ''; const tz = (f.afterTheGap && f.afterTheGap.firstTitle) || '';
      const xa = X(at(a)) + bw + 6; const ya = Y(g0) - 7;   // to the right of the last bar before the band, just over the band (a tail of its letters clear of it)
      const xz = X(at(z)) - 6; const yz = Y(g1) + 12;       // to the left of the first bar after it, just under the band
      const na = [d.text(xa, ya, '', { at: 1000 }), d.text(xa, ya, '', { at: 1000 })];
      const nz = [d.text(xz, yz, '', { anchor: 'end', at: 1200 }), d.text(xz, yz, '', { anchor: 'end', at: 1200 })];
      // A title is never set without its chapter's number: alone beside the band it would read as a remark on the years.
      // One line where there is room; on a phone the number and under it the title; then the number alone.
      const forms = [(c, t) => (t ? [`chapter ${c.n}, ${t}`] : null), (c, t) => (t ? [`chapter ${c.n}`, t] : null), (c) => [`chapter ${c.n}`], (c) => [`${c.n}`]];
      const pitch = 16;
      const two = ya - pitch - 11 >= T && yz + pitch + 4 <= T + H + 14; // room for a second line over the band and under it
      // over the band the lines are stacked upward, so that the last stands beside the bar; under it, downward
      const set = (nodes, lines, y0, up) => nodes.forEach((n, k) => { n.textContent = lines[k] || ''; n.setAttribute('y', up ? y0 - (lines.length - 1 - k) * pitch : y0 + k * pitch); });
      // the same wording on both sides of the band: the first that both have room for
      for (const form of forms) {
        const la = form(a, ta); const lz = form(z, tz);
        if (!la || !lz || (la.length > 1 && !two)) continue;
        set(na, la, ya, true); set(nz, lz, yz, false);
        if (na.every((n) => xa + long(n) <= d.w) && nz.every((n) => xz - long(n) >= gx + 6)) break;
      }
      na.concat(nz).forEach((n) => { if (!n.textContent) n.remove(); });
      // where the book itself speaks of those years: the name of that chapter leads there
      const told = gapOf.whatTheBookSays; // { chapter, read }
      if (told && typeof told === 'object') [[a, na], [z, nz]].forEach(([c, nodes]) => { if (told.chapter === c.n) link(nodes, told.read); });
    }

    // what happened in those years, outside the book: each set at its year, one under another if they would meet
    let floor = Y(g0);
    const taken = [];
    events.forEach((e, i) => {
      const top = Math.max(Y(e.year) + 1, floor);
      d.rule(gx - 0.5, Y(e.year), gx - 0.5, Y(e.year + 1), { stroke: RED, width: 3, at: 1400 + i * 250 });
      d.text(gx - 9, top + 12.5, e.year, { cls: 'dg-n', anchor: 'end', fill: RED, at: 1400 + i * 250 });
      const note = d.note(gx + 8, top, d.w - gx - 8, e.words, { cls: 'is-red', at: 1500 + i * 250 });
      floor = top + note.offsetHeight + 2;
      taken.push([top, floor]);
    });
    // the band is named where the notes leave it the most room, if they leave it any
    let from = Y(g0); let hole = null;
    taken.concat([[Y(g1), Y(g1)]]).forEach(([s, e]) => { if (s - from >= 36 && (!hole || s - from > hole[1] - hole[0])) hole = [from, s]; from = Math.max(from, e); });
    if (hole) {
      const cy = (hole[0] + hole[1]) / 2;
      d.text(d.w - 8, cy - 2, `${g0} to ${g1 - 1}`, { cls: 'dg-n', anchor: 'end', at: 1100 });
      d.text(d.w - 8, cy + 13, 'no chapter', { anchor: 'end', at: 1100 });
    }

    // the second drawing: the words the storyteller does not use of himself, and the name he does.
    // The facts count all of them in his own sentences, so one heading stands over them all.
    if (lower) {
      const top = T + H + 22;
      d.rule(0, top, d.w, top);
      d.text(0, top + 15, 'In the storyteller’s own sentences', { cls: 'dg-lab', at: 1900 });
      const pair = ([word, n], i) => [d.text(0, top + 56, num(n), { cls: 'dg-big', at: 1900 + i * 140 }), d.text(1, top + 75, word, { cls: 'dg-name', at: 1900 + i * 140 })];
      const all = said.concat(name ? [name] : []).map(pair);
      // equal columns, as wide as the words under the last figure allow
      const room = Math.max(...all[all.length - 1].map(long)) + 3;
      const colw = all.length > 1 ? Math.min(120, (d.w - room) / (all.length - 1)) : 0;
      all.forEach((nodes, i) => nodes.forEach((n, k) => n.setAttribute('x', i * colw + k)));
    }
    d.keys([{ mark: 'bar', color: INK, text: 'a chapter, set against the years in its title' }].concat(events.length ? [{ mark: 'line', color: RED, text: 'not in the book' }] : []));
    d.figures(chapters.map((c) => ({ chapter: c.n, years: to(c.years), words: num(c.words) })), 'The chapters and their years');
  },
};

export default { lenses: { 'dynamo:shape': force, 'born:shape': book } };
