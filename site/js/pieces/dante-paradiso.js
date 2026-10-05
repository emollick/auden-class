// The Divine Comedy, Paradiso: the one drawing of its own.
//
//   end / Whole: two small drawings, one under the other.
//     The hundred cantos, a thin bar to each, as tall as its lines: a row to
//     each part and one scale for all three. The canto that opens the whole
//     stands apart, the rest stand in columns, and each row ends on the last
//     word of its part.
//     Then the canto of this passage, line by line: a small square to a line,
//     the lines of each group of three in a column, and the one line over.
//     Under it, the reading's own sentence that every canto is built so.
//
// It is drawn from the reading's own `facts` (remake/works/dante-paradiso/
// reading.json) when the page runs: no count, name or word is typed here.

import { RED, INK, QUIET } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

const sum = (a) => a.reduce((s, n) => s + n, 0);
const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);
const count = (n, one) => `${num(n)} ${one}${n === 1 ? '' : 's'}`;
const long = (node, guess) => (node.getComputedTextLength && node.getComputedTextLength()) || guess;

// the drawing is as tall as what was set in it
function close(d, h) {
  d.svg.setAttribute('height', Math.ceil(h));
  d.svg.setAttribute('viewBox', `0 0 ${d.w} ${Math.ceil(h)}`);
}

// A figure and what it counts, on one line from x: "4,720 lines".
function figure(d, x, y, n, unit, at) {
  const a = d.text(x, y, num(n), { cls: 'dg-n', at });
  d.text(x + long(a, String(n).length * 6.5) + 4, y, unit, { at });
}

// ----- what the facts say, read once for both drawings -----
function read(f) {
  const parts = (Array.isArray(f.parts) ? f.parts : []).filter((p) => p && p.name && Array.isArray(p.linesPerCanto) && p.linesPerCanto.length);
  if (!parts.length) throw new Error('facts: no parts');
  const n = (i) => parts[i].linesPerCanto.length;
  // "Inferno 6" -> the part and the number of the canto
  const place = (name) => {
    const m = String(name || '').match(/^(.*\S)\s+(\d+)$/);
    const p = m ? parts.findIndex((x) => x.name === m[1]) : -1;
    return p >= 0 && +m[2] >= 1 && +m[2] <= n(p) ? { p, c: +m[2] } : null;
  };
  // the plan as a sum ("1 + 33 + ...") and what it says after the colon, without its source
  const plan = String(f.plan || '');
  const head = (plan.match(/^\s*\d+(?:\s*\+\s*\d+)+/) || [''])[0].trim();
  const terms = head ? head.split('+').map(Number) : [];
  const says = plan.includes(':') ? plan.slice(plan.indexOf(':') + 1).replace(/\s*\([^)]*\)\s*$/, '').trim() : '';
  // the cantos that open the whole stand apart from the first part's run:
  // the first term of the sum, if the sum agrees with the parts
  const agrees = terms.length === parts.length + 1 && terms[0] + terms[1] === n(0) && parts.every((p, i) => i === 0 || terms[i + 1] === n(i));
  const apart = agrees ? terms[0] : 0;
  // the cantos that carry their figure: the shortest, the longest, and this one
  const flags = [];
  for (const k of ['shortest', 'longest']) for (const name of (f[k] && f[k].cantos) || []) { const at = place(name); if (at) flags.push(at); }
  const here = f.thisCanto || {};
  const mine = place(here.name);
  // how this canto is built: groups of so many lines, and the lines that close it
  const groups = here.groupsOfThree > 0 ? here.groupsOfThree : 0;
  const over = here.closingLine > 0 ? here.closingLine : 0;
  const size = groups ? (here.lines - over) / groups : 0;
  const per = Number.isInteger(size) && size >= 1 ? size : 0;
  const every = f.everyCantoIsTercetsPlusOne === true && per > 0 && over > 0;
  return { parts, n, plan: head, says, apart, flags, here, mine, every, groups: per ? groups : 0, over, per, top: Math.max(...parts.flatMap((p) => p.linesPerCanto)) };
}

// ----- how the sheet is laid out for the width it has -----
// Where there is room the sheet has three columns: the names, the marks, the last words.
// There everything stands on whole pixels, and the squares of the second drawing end
// where the bars of the first end. Otherwise the names stand over the bars and the last
// words under them, and both drawings fill the width.
function layout(d, k) {
  const { parts, n, apart, groups, over } = k;
  const W = d.w;
  const cols = Math.max(...parts.map((p, i) => n(i) + (i ? apart : 0))); // the cantos that stand apart, then the run
  const gcols = groups ? groups + (over ? 1 : 0) : 0;                    // a column to a group, and one for the lines over
  const WORDS = 126; const ROOM = 18;        // the least width of the column of last words, and the room before it
  if (gcols ? Math.floor((W - ROOM - WORDS + 3) / gcols) >= 9 : W >= 580) {
    // the column of names is as broad as the longest name
    const probe = parts.map((p) => d.text(0, -40, p.name, { cls: 'dg-name' }));
    const NAMES = Math.ceil(Math.max(...probe.map((t) => long(t, 80)))) + 10;
    probe.forEach((t) => t.remove());
    const gap = 3; const lead = apart ? 9 : 0; const pitch = gcols ? 9 : 0;
    const G = gcols ? gcols * pitch - gap : Math.min(W - ROOM - WORDS, NAMES + lead + (cols - 1) * 10 + 4);
    let slot = 11; let bw = 4;
    for (; slot > 3; slot--) { bw = slot >= 9 ? 4 : 3; if (G - lead - (cols - 1) * slot - bw >= NAMES) break; }
    return { three: true, cols, gcols, L: G - lead - (cols - 1) * slot - bw, lead, bw, slot, xEnd: G, gap, pitch, room: ROOM };
  }
  // On a screen whose pixels are coarse the squares keep to whole pixels, and the bars end
  // where the squares end; on a fine one both run to the edge.
  const coarse = (window.devicePixelRatio || 1) < 2 && gcols > 0;
  const gap = W >= 420 ? 3 : coarse ? 2 : 2.3;
  const pitch = !gcols ? 0 : coarse ? Math.floor((W + gap) / gcols) : (W + gap) / gcols;
  const xEnd = coarse ? gcols * pitch - gap : W;
  const bw = xEnd >= 520 ? 5 : xEnd >= 300 ? 4 : 3;
  const lead = apart ? (xEnd >= 420 ? 9 : 7) : 0;
  return { three: false, cols, gcols, L: 0, lead, bw, slot: (xEnd - lead - bw) / Math.max(1, cols - 1), xEnd, gap, pitch, room: 0 };
}

// ===== the hundred cantos, a bar to each =====
// Set from y0 down; gives back where it ends.
function drawCantos(d, f, k, g, y0) {
  const { parts, n, apart, flags, mine, top, per } = k;
  const { three, L, lead, slot, bw, xEnd } = g;
  const W = d.w;
  const dpr = window.devicePixelRatio || 1;
  const snap = (v) => Math.round(v * dpr) / dpr;
  const xOf = (col) => snap(L + col * slot + (col >= apart ? lead : 0));
  // one scale for every row, from zero: a group of lines is 1 px tall, so equal steps stay equal
  const u = per ? 1 / per : 54 / top;
  const H = Math.ceil(top * u); const HEAD = 14;

  let y = y0 + 10;
  const all = f.cantos || sum(parts.map((p, i) => n(i)));
  const h1 = d.text(0, y, `${count(all, 'canto')}${k.plan ? `: ${k.plan}` : ''}`, { cls: 'dg-lab' });
  if (f.lines) {
    const h2 = d.text(xEnd, y, `${num(f.lines)} lines`, { cls: 'dg-lab', anchor: 'end' });
    // where the two do not fit on one line, the second goes under the first
    if (long(h1, 215) + long(h2, 92) + 16 > xEnd) { y += 15; h2.setAttribute('x', 0); h2.setAttribute('y', y); h2.setAttribute('text-anchor', 'start'); }
  }
  y += three ? 8 : 14;

  parts.forEach((p, i) => {
    const t0 = 100 + i * 380;
    const first = i ? apart : 0;             // the column of its first canto
    const end = xOf(first + n(i) - 1) + bw;
    const base = y + (three ? 0 : 20) + HEAD + H;
    // its name and its lines
    if (three) {
      d.text(0, base - 27, p.name, { cls: 'dg-name', at: t0 });
      if (p.lines) figure(d, 0, base - 9, p.lines, 'lines', t0);
    } else {
      // on one line, so that the room over the bars is left to the figures of the bars
      const name = d.text(0, y + 14, p.name, { cls: 'dg-name', at: t0 });
      if (p.lines) figure(d, Math.ceil(long(name, p.name.length * 9)) + 10, y + 14, p.lines, 'lines', t0);
    }
    // the line the bars stand on, broken after the cantos that stand apart
    if (!i && apart) d.rule(xOf(0), base + 0.5, xOf(apart - 1) + bw, base + 0.5, { stroke: INK, at: t0 });
    d.rule(xOf(i ? first : apart), base + 0.5, end, base + 0.5, { stroke: INK, at: t0 });
    const said = [];                         // where a figure already stands over this row
    p.linesPerCanto.forEach((lines, c0) => {
      const c = c0 + 1; const col = first + c0; const x = xOf(col);
      const red = !!mine && mine.p === i && mine.c === c;
      const at = t0 + 60 + col * 26;         // the bars come up as the line under them is drawn
      const bar = d.bar(x, base - lines * u, bw, lines * u, { fill: red ? RED : INK, at });
      const last = c === p.lastCanto && lines === p.lastLine && p.lastWord;
      const opens = !i && c <= apart && k.says;
      const built = k.every && Number.isInteger((lines - k.over) / per) ? ` (${num((lines - k.over) / per)} × ${per} + ${k.over})` : '';
      const words = `${p.name} ${c}: ${count(lines, 'line')}${built}${last ? `; line ${p.lastLine} ends the ${p.name} on ${p.lastWord}` : ''}${opens ? `. ${cap(k.says)}` : ''}`;
      // the pointer on its slot says the canto, and its bar stays dark while the others go pale
      d.hot(d.bar(x - (slot - bw) / 2, base - H - HEAD, slot, H + HEAD + 3, { fill: 'transparent' }), words, bar);
      // The shortest, the longest and this canto carry their figure. It stands clear of
      // the taller bars beside it, and a hairline brings it down to its own bar.
      if (!red && !flags.some((q) => q.p === i && q.c === c)) return;
      if (said.some((sx) => Math.abs(sx - x) < 26)) return;
      said.push(x);
      const xc = x + bw / 2;
      const label = d.text(xc, 0, lines, { cls: 'dg-n', anchor: 'middle', fill: red ? RED : null, at: at + 200 });
      const reach = long(label, String(lines).length * 6.6);
      // at the edge of the sheet the figure ends where its bar ends
      const edge = xc + reach / 2 > (three ? xEnd + g.room - 6 : W);
      if (edge) { label.setAttribute('x', x + bw); label.setAttribute('text-anchor', 'end'); }
      const l0 = edge ? x + bw - reach : xc - reach / 2;
      const near = p.linesPerCanto.filter((v, j) => { const bx = xOf(first + j); return bx + bw > l0 - 3 && bx < l0 + reach + 3; });
      const yl = base - Math.max(...near) * u - 4;
      label.setAttribute('y', yl);
      if (base - lines * u - yl > 7) d.rule(snap(xc - 0.5) + 0.5, yl + 3, snap(xc - 0.5) + 0.5, base - lines * u - 2, { stroke: QUIET, at: at + 200 });
    });
    // the numbers of its first and last cantos
    const tn = t0 + 100;
    const te = t0 + 60 + (first + n(i)) * 26;   // when the last bar of the row is up
    if (!i && apart) d.text(xOf(0), base + 14, 1, { cls: 'dg-n', fill: QUIET, at: tn });
    d.text(xOf(i ? first : apart), base + 14, i ? 1 : apart + 1, { cls: 'dg-n', fill: QUIET, at: tn });
    d.text(end, base + 14, n(i), { cls: 'dg-n', anchor: 'end', fill: QUIET, at: te });
    // the last word of the part, at the end of its row, and what its last line says
    y = base + 18;
    if (p.lastWord && three) {
      const x = xEnd + g.room;
      d.text(x, base - 27, p.lastWord, { cls: 'dg-name', at: te });
      if (p.lastLineSays) {
        const note = d.note(x, base - 22, W - x, p.lastLineSays, { at: te });
        note.style.textWrap = 'balance';     // so that no word of it is left alone on a line
        y = Math.max(y, base - 22 + note.getBoundingClientRect().height + 2);
      }
    } else if (p.lastWord) {
      const word = d.text(end, base + 35, p.lastWord, { cls: 'dg-name', anchor: 'end', at: te });
      y = base + 40;
      const xs = end - long(word, 42) - 8;
      const s = p.lastLineSays ? d.text(xs, base + 35, p.lastLineSays, { anchor: 'end', at: te }) : null;
      // where there is no room before the word, what the line says goes under it
      if (s && long(s, p.lastLineSays.length * 5.4) > xs) { s.setAttribute('x', end); s.setAttribute('y', base + 52); y = base + 57; }
    }
    y += three ? 16 : 14;
  });
  return y - (three ? 16 : 14);
}

// ===== the canto of this passage, line by line =====
// A small square to a line of verse. The lines of a group stand one under another in a
// column, and the lines that close the canto stand in a last column by themselves.
function drawCanto(d, f, k, g, y0) {
  const { here, groups, over, per } = k;
  const { gcols, pitch, gap } = g;
  if (!gcols || !pitch) return y0;
  const dpr = window.devicePixelRatio || 1;
  const snap = (v) => Math.round(v * dpr) / dpr;
  // the room between two columns is wider than the room between two lines of a column,
  // so that a group reads as one mark
  const sq = snap(pitch - gap);                  // the side of a square
  const ROW = sq + 1;                            // how far one line stands under another
  const right = snap((gcols - 1) * pitch) + sq;  // where the last column ends
  const pass = f.passage && f.passage.firstLine <= f.passage.lastLine ? f.passage : null;
  const t0 = 1300;

  let y = y0 + 10;
  d.text(0, y, `${here.name ? `${here.name}, ` : ''}${count(here.lines, 'line')}: ${num(groups)} × ${per}${over ? ` + ${over}` : ''}`, { cls: 'dg-lab', at: t0 });
  y += 23;
  d.text(0, y, `${num(groups)} groups of ${per} lines`, { at: t0 + 100 });
  if (over) d.text(right, y, `${over} closing line${over === 1 ? '' : 's'}`, { anchor: 'end', at: t0 + 560 });
  y += 8;
  for (let j = 0; j < gcols; j++) {
    const from = j * per + 1; const n = j < groups ? per : over;
    const at = t0 + 120 + j * 9;
    const x = snap(j * pitch);
    const marks = [];
    for (let r = 0; r < n; r++) {
      const red = !!pass && from + r >= pass.firstLine && from + r <= pass.lastLine;
      marks.push(d.bar(x, y + r * ROW, sq, sq, { fill: red ? RED : INK, at: at + (red ? 150 : 0) }));
    }
    const words = n > 1 ? `Lines ${from} to ${from + n - 1}` : `Line ${from}${j >= groups ? ', the closing line' : ''}`;
    d.hot(d.bar(x - gap / 2, y - 3, pitch, per * ROW + 5, { fill: 'transparent' }), words, marks);
  }
  y += per * ROW - 1 + 15;
  d.text(0, y, 'line 1', { at: t0 + 120 });
  if (pass) d.text(right, y, `lines ${pass.firstLine} to ${pass.lastLine}`, { anchor: 'end', fill: RED, at: t0 + 700 });
  let end = y + 4;
  // how every canto is built, in the reading's own words, under the canto that shows it
  if (k.every && f.cantoShape) {
    const note = d.note(0, y + 9, Math.max(right, Math.min(d.w, 300)), f.cantoShape, { at: t0 + 700 });
    note.style.textWrap = 'balance';
    end = y + 9 + note.getBoundingClientRect().height + 2;
  }
  return end;
}

const whole = {
  name: 'Whole',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const k = read(f);
    const d = sheet(ctx, lens, run, 640);
    const g = layout(d, k);
    const ya = drawCantos(d, f, k, g, 0);
    const top = ya + 20;
    const yb = drawCanto(d, f, k, g, top);
    if (yb > top) d.rule(0, Math.round(top - 10) - 0.5, d.w, Math.round(top - 10) - 0.5);
    close(d, yb > top ? yb : ya + 4);

    const { parts, here, mine } = k;
    const pass = f.passage;
    d.keys([
      { mark: 'bar', color: INK, text: 'a canto: the more lines, the taller the bar' },
      mine ? { mark: 'bar', color: RED, text: `this passage: ${here.name}${pass && g.gcols ? `, lines ${pass.firstLine} to ${pass.lastLine}` : ''}` } : null,
    ].filter(Boolean));

    // the figures, folded away: every canto's lines, part beside part
    const most = Math.max(...parts.map((p) => p.linesPerCanto.length));
    const rows = [];
    for (let c = 0; c < most; c++) rows.push({ canto: c + 1, ...Object.fromEntries(parts.map((p) => [p.name, p.linesPerCanto[c] == null ? '' : p.linesPerCanto[c]])) });
    rows.push({ canto: 'in all', ...Object.fromEntries(parts.map((p) => [p.name, num(p.lines || sum(p.linesPerCanto))])) });
    d.figures(rows);
  },
};

export default { lenses: { 'end:shape': whole } };
