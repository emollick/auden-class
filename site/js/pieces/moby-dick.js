// Moby-Dick: the two drawings of its own.
//
//   rails / Play:    the chapters of the book as a row of marks, those that carry
//                    stage directions standing tall; then the five that stand
//                    together, a line to each, with its place, its speakers and
//                    whether the narrator speaks
//   rachel / Ships:  the ships the Pequod meets, down one line in the order of
//                    the meetings: what Ahab asks, what each tells him, and how
//                    Auden reads her
//
// Both are drawn from the reading's own `facts` (remake/works/moby-dick/reading.json)
// each time the page runs. Every name, word and number of the book that the page
// shows is read from them: none is typed here.

import { el, mk, RED, INK, QUIET, HAIR } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const long = (node, guess) => (node.getComputedTextLength && node.getComputedTextLength()) || guess;
const tall = (node, guess = 17) => node.getBoundingClientRect().height || guess;
// the first words of a fact, up to its first stop of the kind given: the name of a place, the speakers without their list
const head = (s, stops) => String(s == null ? '' : s).split(stops)[0].trim();
// "36 to 40, 108, 119 to 122, 127 and 129": numbers in order, those that follow each other as one run
function runs(list) {
  const out = [];
  [...list].sort((a, b) => a - b).forEach((n) => { const last = out[out.length - 1]; if (last && n === last[1] + 1) last[1] = n; else out.push([n, n]); });
  return out;
}
const told = (list) => { const p = runs(list).map(([a, z]) => (a === z ? `${a}` : z === a + 1 ? `${a}, ${z}` : `${a} to ${z}`)); return p.length > 1 ? `${p.slice(0, -1).join(', ')} and ${p[p.length - 1]}` : p.join(''); };
// the screen's own dots, so that thin marks fall on them and are sharp
const dots = () => Math.min(3, Math.max(1, Math.round((typeof window !== 'undefined' && window.devicePixelRatio) || 1)));
// a reader with a finger and no pointer
const finger = () => typeof matchMedia === 'function' && matchMedia('(hover: none)').matches;
// A name that opens its place in the book printed here. Where the line it stands in answers a touch (`asks`),
// a finger only asks what the line is, and the answer carries the way in.
function opens(node, read, asks) {
  if (!read || !canRead()) return node;
  const a = mk('a', { href: `#/read/${read}`, tabindex: -1 });
  node.replaceWith(a); a.append(node);
  a.style.cursor = 'pointer';
  a.style.textDecoration = 'none';   // a name in a drawing is not ruled under: the pointer's hand says it opens
  if (asks) {
    let touch = false;
    a.addEventListener('pointerdown', (e) => { touch = e.pointerType === 'touch'; });
    a.addEventListener('click', (e) => { if (touch) e.preventDefault(); });
  }
  return a;
}
// the same way in, for the line that speaks: words that are a link where a finger asked
const way = (words, read) => (finger() && canRead() && read && !/[)\s]/.test(read) ? `[${words}](#/read/${read})` : words);
const sized = (d, h) => { const H = Math.ceil(h); d.svg.setAttribute('height', H); d.svg.setAttribute('viewBox', `0 0 ${d.w} ${H}`); };

// While the pointer is on one line of a drawing, the kit turns its other marks pale. The words set over the
// drawing are not marks of the kit's: they are made to follow, each with the line it belongs to.
function follow(d, lines) {
  const sync = () => {
    const any = !!d.svg.querySelector('.dg-on');
    lines.forEach(({ hits, notes }) => { const on = hits.some((h) => h.classList.contains('dg-on')); notes.forEach((n) => { n.style.transition = 'opacity .2s'; n.style.opacity = any && !on ? '.45' : ''; }); });
  };
  new MutationObserver(sync).observe(d.svg, { attributes: true, attributeFilter: ['class'], subtree: true });
}
// Several short facts on one line, a point between them. A line turns after a point, and inside one of the
// facts only where that fact alone is longer than the measure.
const inParts = (list) => list.flatMap((s, i) => { const part = el('span', { text: s }); part.style.whiteSpace = 'nowrap'; return i ? ['\u00a0\u00b7 ', part] : [part]; });
const loosen = (note, width) => note.querySelectorAll('span').forEach((part) => { if (part.getBoundingClientRect().width > width) part.style.whiteSpace = ''; });
// the key shows a thin mark as a thin mark: `thin` is its width in px
const thin = (row, widths) => row.querySelectorAll('.dg-m').forEach((m, i) => { if (widths[i]) m.style.width = `${widths[i]}px`; });
// sentences of the facts, set under the table of numbers as the kit sets a list of facts
const sentences = (box, list) => { const said = list.filter((s) => typeof s === 'string' && s); if (said.length) box.append(el('ul', { class: 'facts' }, said.map((s) => el('li', { text: s })))); };

// ----- Play: the chapters that carry stage directions, and the five that stand together -----
const NARRATOR = { speaks: 'the narrator speaks', silent: 'the narrator is silent' };

const play = {
  name: 'Play',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const total = f.chapters;
    const sd = f.withStageDirections || {};
    const five = f.inARow;
    if (!Number.isFinite(total) || total < 1) throw new Error('facts: no chapters');
    if (!Array.isArray(sd.chapters) || !sd.chapters.length) throw new Error('facts: no withStageDirections');
    if (sd.count != null && sd.count !== sd.chapters.length) throw new Error('facts: withStageDirections counts one number and lists another');
    if (!Array.isArray(five) || !five.length) throw new Error('facts: no inARow');
    const here = f.thisPassage ? f.thisPassage.chapter : null;
    const d = sheet(ctx, lens, run, 240);
    const W = d.w;
    const k = dots();
    const snap = (v) => Math.round(v * k) / k;

    // ----- the first drawing: every chapter of the book a mark, in order -----
    const slot = Math.max(1, Math.floor((W * k) / total) / k);       // from one chapter to the next
    const comb = slot >= 3;                                          // room to give every chapter a mark of its own
    const tw = comb ? Math.min(3, slot - 1) : Math.max(1 / k, Math.floor((slot - 0.5) * k) / k);
    const x = (n) => (n - 1) * slot;
    const SW = x(total) + (comb ? 1 : slot);
    const marked = new Set(sd.chapters);
    // what is counted: one line of small capitals, or two where one is longer than the drawing is wide
    const counted = [`${num(total)} chapters`, `${num(sd.chapters.length)} with stage directions`];
    let top = 11;
    const head1 = d.text(0, top, counted.join(', '), { cls: 'dg-lab' });
    if (long(head1, 0) > W) { head1.textContent = `${counted[0]},`; top += 15; d.text(0, top, counted[1], { cls: 'dg-lab' }); }
    const listed = d.note(0, top + 6, W, `Chapters ${told(sd.chapters)}`, { at: 400 });
    const T = Math.round(top + 6 + tall(listed) + 12); const B = T + 22;   // the head and the foot of a tall mark
    if (comb) {
      let p = '';
      for (let n = 1; n <= total; n++) if (!marked.has(n)) p += `M${x(n) + 0.5} ${B - 6}V${B}`;
      d.path(p, { stroke: QUIET, width: 1 });
    } else d.bar(0, B - 5, SW, 5, { fill: HAIR });
    const ticks = new Map();
    [...marked].sort((a, b) => a - b).forEach((n, i) => ticks.set(n, d.bar(x(n), T, tw, B - T, { fill: n === here ? RED : INK, at: 150 + i * 50 })));
    d.rule(0, B + 0.5, SW, B + 0.5, { stroke: INK });
    d.text(0, B + 15, 1, { cls: 'dg-n' });
    d.text(SW, B + 15, num(total), { cls: 'dg-n', anchor: 'end' });

    // ----- the second drawing: the chapters that stand together, a line to each -----
    const first = five[0].chapter; const last = five[five.length - 1].chapter;
    const Y = B + 44;
    // the run opens out into the lines under it
    d.path(`M${x(first)} ${B + 4}L0 ${Y}M${x(last) + tw} ${B + 4}L${W} ${Y}`, { stroke: HAIR, width: 1, at: 700 });
    let y = Y + 16;
    d.text(0, y, `Chapters ${first} to ${last}`, { cls: 'dg-lab', at: 800 });
    // where each is set, if the facts say in what order the places lie along the ship
    const st = Array.isArray(f.sternToBow) ? f.sternToBow.filter((s) => s && Array.isArray(s.chapters)) : [];
    const stationOf = (ch) => st.findIndex((s) => s.chapters.includes(ch));
    const placed = st.length > 1 && five.every((c) => stationOf(c.chapter) >= 0);
    const L = 5; const R = W - 5;
    const sx = (i) => (placed ? snap(L + (i * (R - L)) / (st.length - 1)) : L);
    if (placed) {
      y += 20;
      d.text(0, y, st[0].name || '', { at: 900 });
      d.text(W, y, st[st.length - 1].name || '', { anchor: 'end', at: 900 });
      y += 7;
      d.path(`M${L} ${y + 0.5}H${R}${st.map((s, i) => `M${Math.min(R - 0.5, Math.max(L + 0.5, sx(i)))} ${y + 0.5}v5`).join('')}`, { stroke: QUIET, width: 1, at: 900 });
    }
    y += 9;
    const kinds = [...new Set(five.map((c) => c.narrator).filter(Boolean))];   // in the order they come
    const rows = five.map((c, i) => {
      const mine = c.chapter === here;
      const color = mine ? RED : INK;
      const at = 1000 + i * 170;
      const top = y;
      const no = d.text(0, y + 15, c.chapter, { cls: 'dg-n', fill: mine ? RED : null, at });
      const title = d.text(24, y + 15, c.title || '', { cls: 'dg-name', at });
      // the line of the chapter, and on it the mark of where it is set
      const s = placed ? stationOf(c.chapter) : 0;
      const cx = sx(s); const cy = y + 26.5;
      const a = placed ? L : 0; const z = placed ? R : W;
      if (cx - 7 > a) d.rule(a, cy, cx - 7, cy, { at });
      if (z > cx + 7) d.rule(cx + 7, cy, z, cy, { at });
      const ring = kinds.length > 1 && c.narrator === kinds[0];
      const dot = ring ? d.dot(cx, cy, 3.4, { fill: 'none', stroke: color, width: 1.4, at }) : d.dot(cx, cy, 4, { fill: color, at });
      // under it: the hour, the place by its name, and who speaks
      const words = [c.hour, head(c.place, /\s*[,;(]/), head(c.who, /\s*[;(]/)].filter(Boolean);
      const end = placed && s === st.length - 1; const mid = placed && s > 0 && !end;
      const half = mid ? Math.min(cx, W - cx) : 0;
      const measure = mid ? 2 * half : W;
      const note = d.note(mid ? cx - half : 0, y + 33, measure, inParts(words), { align: end ? 'right' : mid ? 'center' : null, at: at + 80 });
      loosen(note, measure);
      note.style.textWrap = 'balance';
      note.style.pointerEvents = 'none';   // the pointer goes through the words to the line's field
      const h = 33 + tall(note) + 13;
      y += h;
      return { c, top, h, note, title, marks: [dot, no, ticks.get(c.chapter)].filter(Boolean) };
    });
    // what comes after the last of them, in the reading's words
    if (typeof f.after === 'string' && f.after) {
      d.rule(0, y + 0.5, W, y + 0.5, { at: 1800 });
      const n = d.note(0, y + 8, W, f.after, { at: 2200 });
      n.style.textWrap = 'pretty';
      y += 8 + tall(n) + 2;
    } else y -= 8;
    sized(d, y);

    // what the pointer adds: the place in full, as the reading describes it
    const lines = rows.map((r) => {
      const hit = d.bar(0, r.top, W, r.h - 5, { fill: 'transparent' });
      const says = `${way(`Chapter ${r.c.chapter}`, r.c.read)}: ${r.c.place || r.c.title}`;
      // the title opens the chapter in the book printed here, and stands over the line's field so that it can be reached
      const link = opens(r.title, r.c.read, true);
      const linked = link !== r.title;
      if (linked) d.svg.append(link);
      d.hot(hit, says, [...r.marks, link]);
      if (linked) d.hot(link, says, r.marks);
      return { hits: linked ? [hit, link] : [hit], notes: [r.note], marks: [...r.marks, link], c: r.c };
    });
    // the tall marks answer the pointer too, a run of them at a time: which chapters they are
    const groups = runs(sd.chapters);
    groups.forEach(([a, z], g) => {
      const left = g ? Math.min(3, (x(a) - x(groups[g - 1][1]) - tw) / 2) : 3;
      const right = g < groups.length - 1 ? Math.min(3, (x(groups[g + 1][0]) - x(z) - tw) / 2) : 3;
      const hit = d.bar(x(a) - left, T - 3, x(z) + tw - x(a) + left + right, B - T + 6, { fill: 'transparent' });
      const own = lines.filter((l) => l.c.chapter >= a && l.c.chapter <= z);   // the lines drawn under for chapters of this run
      const marks = own.flatMap((l) => l.marks);
      for (let n = a; n <= z; n++) if (ticks.get(n) && !marks.includes(ticks.get(n))) marks.push(ticks.get(n));
      d.hot(hit, a === z ? `Chapter ${a}` : `Chapters ${a} to ${z}`, marks);
      own.forEach((l) => l.hits.push(hit));
    });
    follow(d, lines);

    const fine = Math.max(2, tw);
    const keys = [{ mark: 'bar', color: INK, text: 'a chapter with stage directions', thin: fine }];
    if (here != null) keys.push({ mark: 'bar', color: RED, text: `Chapter ${here}, the chapter of this passage`, thin: fine });
    kinds.forEach((v, i) => keys.push({ mark: kinds.length > 1 && i === 0 ? 'ring' : 'dot', color: INK, text: NARRATOR[v] || `narrator: ${v}` }));
    if (placed) keys.push({ mark: 'line', color: QUIET, text: 'the ship from end to end: the places in their order, not to scale' });
    thin(d.keys(keys), keys.map((key) => key.thin));

    // the figures, folded away: what the drawing gives in brief is here in full
    // (a table of six columns where there is room for one; where there is not, a fact to a line, chapter by chapter)
    // (a count of a thousand or more is set with its comma: the kit's table still takes it for a number and sets it to the right)
    const count = (n) => (Number.isFinite(n) && n >= 1000 ? num(n) : n);
    // (in the table a title is kept on one line: left to itself the column is so narrow that a title of two words takes three)
    const whole = (s) => String(s == null ? '' : s).replace(/ /g, '\u00a0');
    const box = d.figures(W >= 560
      ? five.map((c) => ({ chapter: c.chapter, title: whole(c.title), 'stage direction': c.direction, speakers: c.who, form: c.form, words: count(c.words) }))
      : five.flatMap((c) => [[`Chapter\u00a0${c.chapter}`, c.title], ['stage direction', c.direction], ['speakers', c.who], ['form', c.form], ['words', count(c.words)]]).filter(([, v]) => v != null && v !== '').map(([k, v]) => ({ '': k, ' ': v })));
    // (with them, the count of the lines the book sets apart as stage directions, and what else the reading says of the run)
    const apart = Number.isFinite(sd.linesSetApart) ? `${num(sd.linesSetApart)} lines set apart as stage directions, in ${num(sd.chapters.length)} chapters.` : null;
    if (box) sentences(box, [apart, f.otherRuns, f.ranks, f.epilogue, f.audenQuotes]);
  },
};

// ----- Ships: the meetings in order, what each ship tells Ahab, and how Auden reads her -----
const ships = {
  name: 'Ships',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const list = f.ships;
    if (!Array.isArray(list) || !list.length) throw new Error('facts: no ships');
    const here = f.thisPassage ? f.thisPassage.meeting : null;
    const d = sheet(ctx, lens, run, 240);
    const W = d.w;
    const two = W >= 480;                                        // the answer and Auden's reading side by side
    const SP = 5.5;                                              // the line the meetings stand on
    const X = 30;                                                // where the words begin
    const XR = two ? Math.round(X + (W - X) * 0.57) : X + 13;    // where Auden's reading begins
    const wide = two ? XR - X - 24 : W - X;                      // the measure of the question and the answer
    // whether the question is quoted, where the facts say so ship by ship
    const worded = list.some((s) => s.quoted);

    // what stands in each line: over the words, and over Auden's where his stand beside them
    const head0 = d.text(X, 11, 'question, answer', { cls: 'dg-lab' });
    if (two) d.text(XR, 11, 'Auden', { cls: 'dg-lab' });
    d.text(W, 11, 'chapter', { cls: 'dg-lab', anchor: 'end' });
    let y = 22;
    const rows = list.map((s, i) => {
      const mine = here != null && s.meeting === here;
      const color = mine ? RED : INK;
      const at = 150 + i * 170;
      const top = y;
      const ring = worded && !s.quoted;
      const dot = ring ? d.dot(SP, y + 10.5, 3.4, { fill: 'none', stroke: color, width: 1.4, at }) : d.dot(SP, y + 10.5, 4, { fill: color, at });
      d.text(15, y + 15, s.meeting == null ? i + 1 : s.meeting, { cls: 'dg-n', fill: mine ? RED : null, at });
      // the name, and after its comma the ship's other name or her port
      const name = head(s.ship, /,/);
      const line = d.text(X, y + 15, '', { at });
      const main = mk('tspan', { class: 'dg-name', 'font-style': 'normal' }, name);
      if (mine) main.style.fill = RED;
      line.append(main);
      const more = String(s.ship || '').slice(name.length);
      const rest = more ? mk('tspan', { class: 'dg-it' }, more) : null;
      if (rest) line.append(rest);
      const ch = d.text(W, y + 15, s.chapter == null ? '' : s.chapter, { cls: 'dg-n', anchor: 'end', at });
      opens(line, s.read, false);
      // what Ahab asks, and what she tells him
      let yl = y + 21;
      const asked = [s.question, s.quoted].filter(Boolean);
      if (asked.length) { const q = d.note(X, yl, wide, inParts(asked), { at: at + 80 }); loosen(q, wide); q.style.textWrap = 'pretty'; yl += tall(q); }
      if (s.answer) { const n = d.note(X, yl, wide, s.answer, { at: at + 80 }); n.style.color = INK; n.style.textWrap = 'pretty'; yl += tall(n); }
      // how Auden reads her: beside the answer where there is room, under it where there is not
      let yr = y + 21;
      if (s.Auden) {
        const ya = two ? yr : yl + 5;
        const n = d.note(XR, ya, W - XR, s.Auden, { at: at + 160 });
        n.style.textWrap = 'pretty';
        const h = tall(n);
        d.rule(XR - 9.5, ya + 4, XR - 9.5, ya + h - 3, { at: at + 160 });
        if (two) yr = ya + h; else yl = ya + h;
      }
      y = Math.max(yl, yr) + 15;
      return { s, top, at, dot, line, rest, ch };
    });
    // a second name is left out where any line lacks the room for it
    const room = (r) => X + long(r.line, 200) + 10 <= W - long(r.ch, 22);
    if (!rows.every(room)) rows.forEach((r) => { if (r.rest) r.rest.remove(); });

    // the line of the meetings, from each to the next; and what follows the last, in the reading's words
    let foot = y - 15;
    if (typeof f.after === 'string' && f.after) {
      const n = d.note(X, y - 4, W - X, f.after, { at: 2000 });
      n.style.textWrap = 'pretty';
      foot = y - 4 + tall(n);
    }
    rows.forEach((r, i) => {
      const next = rows[i + 1];
      const on = d.path(`M${SP} ${r.top + 17}V${next ? next.top + 4 : foot - 4}`, { stroke: INK, width: 1.2, at: r.at + 60 });
      d.svg.insertBefore(on, head0);
    });
    // The counts the caption gives. Where the facts do not say ship by ship whether the question is quoted, the
    // sentence that counts it stands on the drawing, under the line; where they do, the marks say it.
    const said = (v) => typeof v === 'string' && v;
    const open = !worded && said(f.sameWords);
    let end = foot + 2;
    if (open) {
      d.rule(0, foot + 8.5, W, foot + 8.5, { at: 1800 });
      const n = d.note(0, foot + 16, W, f.sameWords, { at: 2200 });
      n.style.textWrap = 'pretty';
      end = foot + 16 + tall(n) + 2;
    }
    sized(d, end);

    const keys = [];
    if (worded) keys.push({ mark: 'dot', color: INK, text: 'his words are given' }, { mark: 'ring', color: INK, text: 'they are not, or another asks for him' });
    else keys.push({ mark: 'dot', color: INK, text: 'a meeting, in the order of the book' });
    if (here != null && f.thisPassage.ship) keys.push({ mark: 'dot', color: RED, text: `${f.thisPassage.ship}, the ship of this passage` });
    if (!two && list.some((s) => s.Auden)) keys.push({ mark: 'bar', color: HAIR, text: 'beside this line, Auden’s reading of the ship', thin: 1 });
    thin(d.keys(keys), keys.map((key) => key.thin));
    // the other counts, folded away
    d.figures([open ? null : f.sameWords, f.asked].filter(said), 'The counts');
  },
};

export default { lenses: { 'rails:shape': play, 'rachel:shape': ships } };
