// The Divine Comedy, Purgatorio: the one drawing of its own.
//
//   love / Mountain: two small drawings.
//     The levels of the mountain, lowest at the foot, each laid over the
//     cantos given to it and sorted under the three errors of love that
//     the passage names; and the poem by count of lines, with its middle
//     line found inside this canto and inside the speech.
//
// It is a diagram of an order and a division that the poem states: a table
// and two scales, with no outline of a mountain. It is drawn from the
// reading's own `facts` (remake/works/dante-purgatorio/reading.json) when
// the page runs: no count, name or line number is typed here, and the words
// of the passage that name the three errors are cut from the plate.

import { RED, INK, QUIET, HAIR } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

// ----- reading the facts -----
// a canto number as the facts write it, in figures, to a number, or 0
const cantoNo = (s) => { const t = String(s == null ? '' : s).trim(); return /^\d+$/.test(t) ? +t : 0; };
// the cantos a fact names: "2 to 4" -> [2, 4]; "9" -> [9, 9]; "Purgatorio 17" -> [17, 17]
function cantoSpan(s) {
  const got = (String(s || '').match(/\b\d+\b/g) || []).map(cantoNo).filter(Boolean);
  return got.length ? [got[0], got[got.length - 1]] : null;
}
// the canto a place begins with: "15.82-84" -> 15
const cantoOf = (s) => { const m = String(s || '').match(/\b(\d+)\.\d/); return m ? +m[1] : 0; };
// every "3 to 8" or "3-8" in a string -> [[3, 8], ...]
function lineSpans(s) {
  return [...String(s || '').matchAll(/(\d+)\s*(?:to|-|–)\s*(\d+)/g)].map((m) => [+m[1], +m[2]]).filter(([a, z]) => z >= a);
}
// the canto and lines a sentence ends on: "...: 9.10-20" -> { canto: 9, from: 10, to: 20 }
function placeOf(s) {
  const m = String(s || '').match(/\b(\d+)\.(\d+)(?:\s*[-–]\s*(\d+))?[\s).]*$/);
  const canto = m ? +m[1] : 0;
  return canto ? { canto, from: +m[2], to: m[3] ? +m[3] : +m[2] } : null;
}
const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);
// A place in the poem as a printer sets it: a dash, not a hyphen, between the two ends of a range of
// lines, and the range kept on one line; a canto stands with its lines unspaced ("17.76-78").
const cite = (s) => String(s).replace(/(\d)[-–](?=\d)/g, '$1\u2060–\u2060');
// a fact closed as a sentence
const stop = (s) => { const t = cite(String(s).trim()); return /[.!?]$/.test(t) ? t : `${t}.`; };
// a short last phrase of an entry of the key is kept on one line, so that no word is left alone when the entry turns
const hold = (s) => String(s).replace(/,\s+([^,]{1,24})$/, (m, tail) => `, ${tail.replace(/ /g, '\u00a0')}`);
const sum = (a) => a.reduce((s, n) => s + n, 0);

// the drawing is as tall as what was set in it
function close(d, h) {
  d.svg.setAttribute('height', Math.ceil(h));
  d.svg.setAttribute('viewBox', `0 0 ${d.w} ${Math.ceil(h)}`);
}
// A place for the pointer: the box x, y, w, h. While the pointer is on it the line under the
// drawing says `words`, the `marks` stay dark and the other marks that answer the pointer go pale.
const spot = (d, x, y, w, h, words, marks) => d.hot(d.bar(x, y, w, h, { fill: 'transparent' }), words, [].concat(marks || []).filter(Boolean));
// what a level says of a passage of this page that is spoken on it
const placeNote = (l) => l.plate || l.passage || '';

// What the facts say, read once for both drawings.
function read(f) {
  const levels = Array.isArray(f.levels) ? f.levels.map((l) => ({ ...l, span: cantoSpan(l.cantos) })).filter((l) => l.span) : [];
  if (!levels.length) throw new Error('facts: no levels');
  const here = f.thisCanto || {};
  const poem = f.poem || {};
  // the part of the poem this canto is in, as the facts name it, and the number of the canto
  const part = String(here.canto || '').replace(/\s*\b\d+\s*$/, '').trim();
  const cantosIn = (poem.cantos && poem.cantos[part]) || Math.max(...levels.map((l) => l.span[1]));
  const thisCanto = (cantoSpan(here.canto) || [0])[0];
  const errors = Array.isArray(f.errors) ? f.errors : [];
  const errorOf = (l) => (l.terrace == null ? null : errors.find((e) => (e.terraces || []).includes(l.terrace)) || (l.error ? { error: l.error } : null));
  // where each passage of the page is spoken, and the level this one is spoken on:
  // the terrace whose own note ends on this canto, or the one that is reached in it
  const places = levels.map((l) => placeOf(placeNote(l)));
  let own = levels.findIndex((l, i) => places[i] && places[i].canto === thisCanto && l.terrace != null);
  if (own < 0) own = levels.findIndex((l) => cantoOf(l.reached) === thisCanto);
  return { levels, here, poem, part, cantosIn, thisCanto, errors, errorOf, places, own };
}

// ===== the levels, each over the cantos given to it =====
// Set in the box that starts at x0, y0 and is w wide; gives back where it ends.
function drawLevels(d, ctx, k, x0, y0, w) {
  const { levels, here, cantosIn, thisCanto, errorOf, places, own } = k;
  const wide = w >= 480;
  const L = wide ? 168 : 96;            // the column of names
  const R = wide ? 10 : 4;              // room at the right for the last figure of the scale
  const slot = (w - L - R) / cantosIn;
  const cx = (n) => x0 + L + (n - 1) * slot; // the left edge of canto n
  const ROW = wide ? 23 : 21; const HEAD = wide ? 19 : 18;
  let y = y0 + 10;
  d.text(x0, y, 'The levels and their cantos', { cls: 'dg-lab' });
  y += 12;

  // from the top of the mountain down to its foot; a band of terraces is headed by its error
  const rows = [];
  let last;
  levels.map((l, i) => i).reverse().forEach((i) => {
    const l = levels[i]; const e = errorOf(l);
    const name = e ? e.error : null;
    if (!e || name !== last) {
      d.rule(x0, y + 0.5, x0 + w, y + 0.5);
      if (e) { rows.push({ head: e, y: y + HEAD - 6 }); y += HEAD; } else y += 3;
    }
    last = e ? name : undefined;
    rows.push({ level: l, i, y: y + ROW / 2 });
    y += ROW;
  });
  const base = y + 4;

  let heads = 0;
  const band = new Map();   // the marks of the terraces under each error
  rows.forEach((r) => {
    if (r.head) {
      const e = r.head;
      const at = 800 + (heads++) * 80;
      const t = d.text(x0, r.y, e.error, { cls: 'dg-lab', at });
      // the words of the passage that name this error
      const said = e.words && e.words.inRow && Array.isArray(e.words.w) ? ctx.text(e.words.inRow, e.words.w[0], e.words.w[1]) : '';
      if (said) d.text(x0 + t.getComputedTextLength() + 9, r.y, said, { at });
      return;
    }
    const l = r.level; const mine = r.i === own;
    const at = 120 + r.i * 70;
    const x1 = cx(l.span[0]); const x2 = cx(l.span[1] + 1);
    // its name
    let end = x0;
    if (l.terrace != null) {
      d.text(x0, r.y + 4.5, l.terrace, { cls: 'dg-n', fill: mine ? RED : null, at });
      const [first, ...rest] = String(l.sin || '').split(/,\s*/);
      const nm = d.text(x0 + 15, r.y + 5.5, first, { cls: 'dg-name', fill: mine ? RED : null, at });
      end = x0 + 15 + nm.getComputedTextLength();
      if (rest.length) {
        // the rest of a long name, where there is room for it before the mark
        const more = d.text(end + 6, r.y + 4.5, rest.join(', '), { at });
        if (end + 6 + more.getComputedTextLength() > x1 - 8) more.remove(); else end += 6 + more.getComputedTextLength();
      }
    } else {
      const nm = d.text(x0, r.y + 4.5, l.level || '', { at });
      end = x0 + nm.getComputedTextLength();
    }
    // a dotted line from the name to the mark, so the eye can follow the row
    if (x1 - end > 22) d.rule(end + 7, r.y + 0.5, x1 - 5, r.y + 0.5, { dash: '1 3' });
    // the level over its cantos; where a passage of this page is spoken, a dot (this one) or a ring
    // stands on the line at its canto, and the line gives way to it
    const p = places[r.i];
    const px = p && p.canto >= l.span[0] && p.canto <= l.span[1] ? cx(p.canto) + slot / 2 : null;
    const rad = mine ? 4.2 : 3.6;
    const gap = px == null ? 0 : mine ? 0 : rad + 0.7;   // a ring is hollow: the line stops at its edge
    // what shows of a run beside the dot or ring; a stub too short to read as a line is left out,
    // so that a dot or ring at the first or last canto of a level stands at the end of its line
    const seen = ([a, z]) => z - a - (mine ? rad : 0);
    const parts = px == null ? [[x1, x2 - 1.5]] : [[x1, px - gap], [px + gap, x2 - 1.5]];
    const longest = Math.max(...parts.map(seen));
    const runs = parts.filter((part) => seen(part) === longest || seen(part) > 2 * rad);
    const marks = runs.map(([a, z]) => d.rule(a, r.y, z, r.y, { stroke: mine ? RED : INK, width: 3, at }));
    if (px != null) marks.push(mine ? d.dot(px, r.y, rad, { fill: RED, at: at + 200 }) : d.dot(px, r.y, rad, { fill: 'none', stroke: INK, width: 1.4, at: at + 200 }));
    // The rest of what the facts hold of this level, for the pointer. Each part of the row speaks
    // of itself, in a note short enough for the line the page keeps: the name says where the poem
    // names what is purged (or what the level is), the rest of the row the cantos and where the
    // level is reached and left, and a dot or a ring which passage of the page is spoken there.
    const top = r.y - ROW / 2;
    const whole = l.terrace != null ? l.sin || '' : l.level || '';   // its name in full
    const brief = String(whole).split(/,\s*/)[0];                    // and as the row prints it
    const about = l.named ? `named ${l.named}` : l.terrace != null ? '' : l.what || '';
    const way = [l.reached ? `reached ${l.reached}` : '', l.left ? `left ${l.left}` : ''].filter(Boolean).join('; ');
    const split = about ? Math.min(end + 6, x1 - 6) : x0;
    if (about) spot(d, x0, top, split - x0, ROW, stop(cap(`${whole}: ${about}`)), marks);
    spot(d, split, top, x0 + w - split, ROW, [`${brief}: cantos ${l.cantos}`, way].filter(Boolean).map((s) => stop(cap(s))).join(' '), marks);
    if (px != null && placeNote(l)) spot(d, px - 11, top, 22, ROW, stop(cap(placeNote(l))), marks);
    const e = errorOf(l);
    if (e) band.set(e.error, (band.get(e.error) || []).concat(marks));
  });
  // on the heading of a band, for the pointer: where the poem says it (the error's own note, under
  // the speaker its key names), and the terraces of that band stay dark
  rows.filter((r) => r.head).forEach((r) => {
    const e = r.head;
    const who = ['virgil'].find((key) => typeof e[key] === 'string' && e[key]);
    if (who) spot(d, x0, r.y - 12, w, HEAD - 2, stop(`${cap(who)} at ${e[who]}`), band.get(e.error));
  });

  // the scale: the cantos of the Purgatorio, first, middle and last
  const xe = cx(cantosIn + 1);
  d.rule(cx(1), base + 0.5, xe, base + 0.5, { stroke: INK });
  for (let n = 1; n <= cantosIn + 1; n++) { const ends = n === 1 || n === cantosIn + 1; d.rule(cx(n), base, cx(n), base + (ends ? 5 : 3), { stroke: ends ? INK : QUIET }); }
  d.text(cx(1), base + 18, 1, { cls: 'dg-n', anchor: 'start' });
  d.text(xe, base + 18, cantosIn, { cls: 'dg-n', anchor: 'end' });
  d.text(wide ? cx(1) - 12 : x0, base + 18, 'canto', { anchor: wide ? 'end' : 'start' });
  y = base + 24;
  if (thisCanto) {
    const mx = cx(thisCanto) + slot / 2;
    d.rule(cx(thisCanto), base + 0.5, cx(thisCanto + 1), base + 0.5, { stroke: RED, width: 3 });
    d.text(mx, base + 18, thisCanto, { cls: 'dg-n', anchor: 'middle', fill: RED, at: 1000 });
    // where the canto stands in its part of the poem, as the facts say it
    const stands = here[`in${k.part}`];
    if (stands) {
      const nw = Math.min(w, wide ? 330 : 250);
      const nx = Math.max(x0, Math.min(x0 + w - nw, mx - nw / 2));
      const note = d.note(nx, base + 24, nw, stands, { cls: 'is-red', align: 'center', at: 1100 });
      y = base + 24 + note.getBoundingClientRect().height + 4;
    }
  }
  return y;
}

// ===== the poem by count of lines =====
function drawPoem(d, f, k, x0, y0, w) {
  const { here, poem, part, thisCanto } = k;
  const lines = poem.lines || {};
  const parts = Object.keys(lines).filter((n) => n !== 'all' && typeof lines[n] === 'number');
  const all = lines.all || sum(parts.map((n) => lines[n]));
  // the lines of each canto of this part of the poem, counted over the text printed on the site
  const each = Array.isArray(f[`linesInEachCantoOf${part}`]) ? f[`linesInEachCantoOf${part}`] : null;
  const pi = parts.indexOf(part);
  if (!parts.length || !all || !each || pi < 0 || !thisCanto || !each[thisCanto - 1]) return y0;
  const wide = w >= 520;
  let y = y0 + 10;
  d.text(x0, y, 'The poem by count of lines', { cls: 'dg-lab', at: 1100 });
  y += 40;
  const before = sum(parts.slice(0, pi).map((n) => lines[n])) + sum(each.slice(0, thisCanto - 1)); // lines of the poem before this canto
  const len = here.lines || each[thisCanto - 1];
  const middle = (all + 1) / 2;       // the middle line of the poem
  const inCanto = middle - before;    // and its number in this canto
  const X = (n) => x0 + (w * n) / all;
  const BH = 11;
  // the three parts, each as long as its lines
  let from = 0;
  parts.forEach((n, i) => {
    const x1 = X(from) + (i ? 1 : 0); const x2 = X(from + lines[n]) - (i < parts.length - 1 ? 1 : 0);
    const at = 1150 + i * 70;
    const cell = d.bar(x1, y, x2 - x1, BH, { fill: HAIR, at });
    d.text((x1 + x2) / 2, y - 21, n, { anchor: 'middle', at });
    d.text((x1 + x2) / 2, y - 6, num(lines[n]), { cls: 'dg-n', anchor: 'middle', at });
    spot(d, x1, y - 32, x2 - x1, BH + 34, stop(`${n}: ${num(lines[n])} lines${poem.cantos && poem.cantos[n] ? ` in ${poem.cantos[n]} cantos` : ''}`), cell);
    from += lines[n];
  });
  // this canto on that line
  const c1 = X(before); const c2 = Math.max(X(before + len), c1 + 2.5);
  d.bar(c1, y - 2, c2 - c1, BH + 4, { fill: RED, at: 1400 });
  // the canto, opened out: one line of verse to each step
  const CH = 13;
  const z1 = (n) => x0 + (w * (n - 1)) / len; const z2 = (n) => x0 + (w * n) / len;
  const cm = (c1 + c2) / 2;
  // its name and its count stand between the two lines that open it out; on a narrow drawing
  // those lines are made longer, so that they pass clear of both labels
  const name = d.text(cm, 0, here.canto || `canto ${thisCanto}`, { anchor: 'middle', fill: RED, at: 1500 });
  const count = d.text(cm, 0, `${here.inPoem ? `${here.inPoem} cantos, ` : ''}${num(len)} lines`, { anchor: 'middle', fill: RED, at: 1500 });
  const side = Math.max(1, Math.min(c1 - x0, x0 + w - c2));   // the narrower side of the opening
  // how tall the opening must be for a label whose top is `up` px above its foot
  const clear = (label, up) => { const share = (label.getComputedTextLength() / 2 + 8) / side; return share < 0.75 ? up / (1 - share) : up * 4; };
  const FAN = Math.ceil(Math.min(90, Math.max(47, clear(name, 33), clear(count, 18)))) + 3;
  const y2 = y + BH + 3 + FAN;
  name.setAttribute('y', y2 - 26); count.setAttribute('y', y2 - 11);
  d.path(`M${c1} ${y + BH + 3}L${x0 + 0.5} ${y2 - 3}M${c2} ${y + BH + 3}L${x0 + w - 0.5} ${y2 - 3}`, { stroke: QUIET, width: 0.8, at: 1450 });
  d.bar(x0, y2, w, CH, { fill: HAIR, at: 1550 });
  const speech = lineSpans(here.speechOnLove)[0];
  if (speech) d.bar(z1(speech[0]), y2, z2(speech[1]) - z1(speech[0]), CH, { fill: QUIET, at: 1600 });
  lineSpans(here.linesOnPlate).forEach(([a, z]) => d.bar(z1(a), y2, z2(z) - z1(a), CH, { fill: RED, at: 1680 }));
  d.text(x0, y2 + CH + 15, 1, { cls: 'dg-n', at: 1550 });
  d.text(x0 + w, y2 + CH + 15, len, { cls: 'dg-n', anchor: 'end', at: 1550 });
  if (speech) {
    d.rule(z1(speech[0]), y2 + CH, z1(speech[0]), y2 + CH + 5, { stroke: INK, at: 1600 });
    d.text(z1(speech[0]), y2 + CH + 15, speech[0], { cls: 'dg-n', anchor: 'middle', at: 1600 });
  }
  y = y2 + CH + 20;
  if (Number.isInteger(inCanto) && inCanto >= 1 && inCanto <= len) {
    // the middle line of the poem, where it falls in the canto
    const mx = (z1(inCanto) + z2(inCanto)) / 2;
    const tick = d.rule(mx, y2 - 4, mx, y2 + CH + 22, { stroke: INK, width: 1.2, at: 1750 });
    const bead = d.dot(mx, y2 - 4, 2.2, { fill: INK, at: 1750 });
    const lab = d.text(mx - 6, y2 + CH + 32, `line ${inCanto}: the middle line of the poem,`, { anchor: 'end', fill: INK, at: 1800 });
    d.text(mx - 6, y2 + CH + 47, `${num(middle)} of ${num(all)}`, { anchor: 'end', fill: INK, at: 1800 });
    if (here.middleLineOfPoem) {
      // what that line says, for the pointer: on the mark and on its label
      const says = stop(cap(here.middleLineOfPoem));
      const lw = lab.getComputedTextLength();
      spot(d, mx - 8, y2 - 8, 16, CH + 30, says, [tick, bead]);
      spot(d, mx - 6 - lw, y2 + CH + 20, lw + 6, 31, says, [tick, bead]);
    }
    y = y2 + CH + 52;
  }

  // the lines of the seven cantos about the middle
  const seven = f.linesInTheSevenMiddleCantos;
  const names = seven && typeof seven === 'object' ? Object.keys(seven).filter((n) => cantoNo(n) && typeof seven[n] === 'number') : [];
  if (names.length) {
    y += 22;
    d.text(x0, y, `lines in cantos ${names[0]} to ${names[names.length - 1]}`, { at: 1850 });
    const xa = wide ? x0 + 190 : x0; const ya = wide ? y : y + 24;
    const col = (x0 + w - xa) / names.length;
    names.forEach((n, i) => {
      const mine = cantoNo(n) === thisCanto;
      const xm = xa + col * (i + 0.5);
      d.text(xm, ya - 2, num(seven[n]), { cls: 'dg-name', anchor: 'middle', fill: mine ? RED : null, at: 1850 + i * 30 });
      d.text(xm, ya + 13, n, { cls: 'dg-n', anchor: 'middle', fill: mine ? RED : QUIET, at: 1850 + i * 30 });
    });
    y = ya + 18;
  }
  return y;
}

const mountain = {
  name: 'Mountain',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const k = read(f);
    const d = sheet(ctx, lens, run, 600);
    const W = d.w;
    let y;
    if (W >= 820) {
      // room for the two drawings side by side (a plate gives a drawing 788 px at the most
      // today, so they stand one under the other at every width; this waits for a wider plate)
      const gap = 64; const w1 = Math.round((W - gap) * 0.56);
      const ya = drawLevels(d, ctx, k, 0, 0, w1);
      const yb = drawPoem(d, f, k, w1 + gap, 0, W - w1 - gap);
      y = Math.max(ya, yb);
    } else {
      y = drawLevels(d, ctx, k, 0, 0, W);
      const top = y + 16;
      d.rule(0, top - 8.5, W, top - 8.5);
      const yb = drawPoem(d, f, k, 0, top, W);
      y = yb > top ? yb : y;
    }
    close(d, y + 4);

    const { levels, places, own, here } = k;
    const others = places.filter((p, i) => p && i !== own).length;
    d.keys([
      { mark: 'line', color: INK, text: 'a level, over the cantos given to it' },
      own >= 0 && places[own] ? { mark: 'dot', color: RED, text: 'this passage' } : null,
      others ? { mark: 'ring', color: INK, text: others > 1 ? 'the other passages on this page' : 'the other passage on this page' } : null,
      here.linesOnPlate ? { mark: 'bar', color: RED, text: hold(`the lines of this passage: ${here.linesOnPlate}`) } : null,
      here.speechOnLove ? { mark: 'bar', color: QUIET, text: hold(`the speech on love: ${here.speechOnLove}`) } : null,
    ].filter(Boolean));
    // the levels as a table, in the order of the drawing: what the first drawing is made from.
    // On a narrow drawing a level and what is purged on it share a column, and a span of cantos is
    // kept on one line where the other two columns can spare the room, so that fewer cells turn.
    const narrow = W < 570;
    const span = (s) => (W >= 300 ? String(s).replace(/ /g, '\u00a0') : s);
    d.figures(levels.map((l) => {
      const level = l.terrace != null ? `terrace\u00a0${l.terrace}` : l.level;
      const error = (k.errorOf(l) || {}).error || '';
      return narrow
        ? { level: l.sin ? `${level}: ${l.sin}` : level, 'error of love': error, cantos: span(l.cantos) }
        : { level, 'what is purged': l.sin || '', 'error of love': error, cantos: l.cantos };
    }).reverse());
  },
};

export default { lenses: { 'love:shape': mountain } };
