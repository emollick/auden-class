// Fidelio (Leonore's answer): the drawing of its own.
//
//   name / Names: the reading's table of who says which of her two names,
//                 with its two columns of numbers drawn. The parts of the
//                 opera stand in their order, down the page. The speakers
//                 stand in one column between the two names: a mark to the
//                 left of a speaker for each time that speaker says the first
//                 name, a mark to the right for each time they say the
//                 second. A part's count of a name stands beside the rows
//                 it adds up. Where the facts say that no one says a name,
//                 their words stand where the marks would. The part that
//                 holds the lines of this passage is red, and each part's
//                 name opens the book at the place the facts give.
//
// Everything is read from the lens's `facts`
// (remake/works/fidelio/reading.json) each time the page runs: the two names
// are the two columns that hold a number in every part, the speakers are read
// out of the facts' own words for who says each, and no name, word or number
// of the opera is typed here.

import { mk, RED, INK, HAIR } from '../kit/draw.js';
import { sheet } from '../kit/diagram.js';

const READ = 'read';
const NB = String.fromCharCode(160);
// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const str = (v) => (v === null || v === undefined ? '' : String(v).trim());
const isCount = (v) => typeof v === 'number' && Number.isFinite(v) && v >= 0;
const sum = (list, f) => list.reduce((t, x) => t + f(x), 0);
const times = (n) => (n === 1 ? 'once' : n === 2 ? 'twice' : `${n} times`);

// Who says a name in one part, as the facts put it, read into speakers:
//   "A 8, B 6, C 1"     each with a number, where the numbers come to the part's own count
//   "A: how and where"  one speaker, and what the facts add about the count
//   "A, then B"         one saying each, where there are as many as the count
//   "A"                 one speaker, the whole count
// Anything else is one group with no name of its own: its marks, with the
// facts' words set under them. The marks always number what the part counts.
function speakers(words, n) {
  const s = str(words);
  if (!n) return [];
  const pieces = s.split(/[,;]\s*/).map(str).filter(Boolean);
  const numbered = pieces.map((p) => p.match(/^(.*\S)\s+(\d+)$/));
  if (pieces.length && numbered.every(Boolean) && sum(numbered, (m) => Number(m[2])) === n) return numbered.map((m) => ({ label: m[1], n: Number(m[2]) }));
  const told = s.match(/^([^:,;]+):\s*(\S.*)$/);
  if (told) return [{ label: str(told[1]), n, note: str(told[2]) }];
  const short = (p) => !/\d/.test(p) && p.split(/\s+/).length <= 3;
  if (pieces.length === n && pieces.every(short)) return pieces.map((p) => ({ label: p, n: 1 }));
  if (pieces.length === 1 && short(s)) return [{ label: s, n }];
  return [{ label: '', n, note: s }];
}

// What the facts say: the two names, the parts in their order, and in each
// part who says each name. `plate` tells which part holds the lines shown.
function model(facts, plate) {
  const rows = Array.isArray(facts) ? facts.filter((r) => r && typeof r === 'object' && !Array.isArray(r)) : [];
  if (!rows.length) throw new Error('facts: no parts');
  const keys = [...new Set(rows.flatMap((r) => Object.keys(r)))];
  const worded = (k) => rows.every((r) => typeof r[k] === 'string');
  // the two names: the columns that hold a count in every part
  const names = keys.filter((k) => rows.every((r) => isCount(r[k])));
  if (names.length !== 2) throw new Error('facts: not two names with a count in every part');
  // who says each: the column of words named after the name, or else the column that follows its count
  const who = names.map((name) => keys.find((k) => k !== name && k.includes(name) && worded(k)) || [keys[keys.indexOf(name) + 1]].find((k) => k && k !== READ && worded(k)));
  if (who.some((k) => !k) || who[0] === who[1]) throw new Error('facts: no column that tells who says each name');
  // the part of the opera: the first column of words that is none of those
  const partKey = keys.find((k) => k !== READ && !names.includes(k) && !who.includes(k) && worded(k));
  if (!partKey) throw new Error('facts: no column that names the parts');
  // the places of the lines shown on this plate, as a `read` names a place: book/part:block
  const shown = new Set();
  for (const side of [plate, plate && plate.pair]) {
    if (!side || !side.src || !Array.isArray(side.rows)) continue;
    for (const r of side.rows) shown.add(`${side.src}:${str(r.id).replace(/^p:/, '').split('.')[0]}`);
  }
  const parts = rows.map((r) => ({
    name: str(r[partKey]),
    read: str(r[READ]),
    here: !!str(r[READ]) && shown.has(str(r[READ])),
    sides: names.map((name, i) => ({ name, n: r[name], words: str(r[who[i]]), groups: speakers(r[who[i]], r[name]) })),
  }));
  return { names, parts };
}

// Words broken into the fewest lines no wider than `width`; of the ways to
// do that, the one whose widest line is narrowest, turning after a comma
// rather than inside a phrase. A number keeps to the word before it.
function broken(fit, words, width) {
  const list = str(words).replace(/ (?=\d)/g, NB).split(' ').filter(Boolean);
  const got = new Map();
  const span = (a, z) => { const key = `${a}-${z}`; if (!got.has(key)) got.set(key, fit(list.slice(a, z).join(' '))); return got.get(key); };
  const first = [];
  for (let a = 0, z = 1; z <= list.length; z++) if (z - a > 1 && span(a, z) > width) { first.push(z - 1); a = z - 1; }
  const count = first.length + 1;
  const loose = (to) => (/[,;:.!?]$/.test(list[to - 1]) ? 0 : width * 0.2);
  let best = null;
  const lay = (from, left, wide, cost, cuts) => {
    if (left === 1) {
      const w = span(from, list.length);
      if (w > width && list.length - from > 1) return;
      if (!best || Math.max(wide, w) + cost < best.cost) best = { cost: Math.max(wide, w) + cost, cuts };
      return;
    }
    for (let to = from + 1; to <= list.length - left + 1; to++) {
      const w = span(from, to);
      if (w > width && to > from + 1) break;
      lay(to, left - 1, Math.max(wide, w), cost + loose(to), [...cuts, to]);
    }
  };
  if (count > 1 && count <= 4) lay(0, count, 0, 0, []);
  const ends = list.length ? [...(best ? best.cuts : first), list.length] : [];
  const lines = ends.map((z, i) => list.slice(i ? ends[i - 1] : 0, z).join(' '));
  return { lines, widths: lines.map(fit) };
}

// ----- Names: the two names, part by part -----
const names = {
  name: 'Names',
  stage: 'own',
  draw(ctx, lens, run) {
    const m = model(lens.facts, ctx.plate);
    const d = sheet(ctx, lens, run, 120);
    const W = d.w; const wide = W >= 520;

    // how wide words will stand, in the class they will be set in
    const probe = d.text(0, 0, '', {});
    probe.style.visibility = 'hidden';
    const fit = (cls) => (words) => { probe.setAttribute('class', cls); probe.textContent = words; return probe.getComputedTextLength(); };
    const fitIt = fit('dg-it'); const fitLab = fit('dg-lab'); const fitName = fit('dg-name');

    const R = wide ? 4 : W >= 300 ? 3.6 : 3.2;            // a mark
    const G = wide ? 13 : 11;                             // from the speakers to the marks
    const GF = wide ? 13 : 9;                             // from the marks to their count
    const rowH = wide ? 23 : 21;                          // from speaker to speaker
    const LL = 14;                                        // from line to line of a part's name
    const up = 2 * R + 4;                                 // from line to line of marks, where a row of them turns
    const five = (p) => p * 0.45;                         // a little more room after every fifth mark
    const runW = (n, p) => (n ? (n - 1) * p + 2 * R + Math.floor((n - 1) / 5) * five(p) : 0);

    // the speakers' column is as wide as its widest name; a name too long for it goes under its marks
    const all = m.parts.flatMap((part) => part.sides.flatMap((s) => s.groups));
    const cap = Math.round(W * (wide ? 0.2 : 0.36));
    for (const g of all) if (g.label && fitIt(g.label) > cap) { g.note = g.note ? `${g.label}: ${g.note}` : g.label; g.label = ''; }
    const labW = Math.ceil(Math.max(0, ...all.map((g) => (g.label ? fitIt(g.label) : 0))));
    // what each of the two fields must hold: its name at the head, its counts, the words of a part where no one says it
    const need = [0, 1].map((i) => ({
      head: fitName(m.names[i]),
      fig: Math.ceil(Math.max(0, ...m.parts.map((part) => (part.sides[i].n ? fitName(String(part.sides[i].n)) : 0)))),
      none: Math.max(0, ...m.parts.map((part) => (part.sides[i].n ? 0 : fitIt(part.sides[i].words)))),
      most: Math.max(0, ...m.parts.flatMap((part) => part.sides[i].groups.map((g) => g.n))),
    }));

    // the parts are named in a column of their own where there is room, and over their rows where there is not
    const avail = wide ? W - 150 - 28 : W;
    // the marks stand as far apart as the width allows; a long row of them turns after ten, or after five
    const lay = (p, per) => {
      const f = need.map((q) => Math.max(runW(Math.min(q.most, per), p) + (q.fig ? GF + q.fig : 0), q.head, q.none));
      return { p, per, f, natural: f[0] + G + labW + G + f[1] };
    };
    let L = null;
    search: for (const per of [Infinity, 10, 5]) for (let p = wide ? 14.5 : 13; p >= 2 * R + 1.5; p -= 0.25) { L = lay(p, per); if (L.natural <= avail) break search; }
    const { p, per } = L;
    // with the parts in their column the rows end at the right edge; under the parts' names they stand in the middle
    const x0 = Math.max(0, Math.floor(wide ? W - L.natural : (W - L.natural) / 2));
    const headW = wide ? Math.min(x0 - 28, 240) : W;
    const A = x0 + L.f[0] + G;                            // the speakers' column runs from A
    const B = A + labW;                                   // to B
    const edge = [A - G, B + G];                          // where the marks of each name begin
    const lane = [Math.round(A - G / 2) + 0.5, Math.round(B + G / 2) + 0.5];
    const dir = [-1, 1];
    const anchor = ['end', 'start'];
    const cap1 = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    // ----- the head: the two names -----
    const top = 15;
    m.names.forEach((name, i) => d.text(edge[i], top, name, { cls: 'dg-name', anchor: anchor[i] }));

    // ----- the parts, in their order -----
    let y = top + 11;
    m.parts.forEach((part, k) => {
      const t0 = 120 + k * 480;
      const ink = part.here ? RED : INK;
      d.rule(0, y + 0.5, W, y + 0.5, { at: t0 });
      const head = broken(fitLab, part.name, headW);
      const headBase = wide ? y + 25 : y + 19;
      const rowsTop = wide ? y + 10 : headBase + (head.lines.length - 1) * LL + 6;

      // the part's name; where the book is printed here, it opens the place
      const link = part.read && canRead() ? mk('a', { href: `#/read/${part.read}`, tabindex: -1 }) : null;
      const under = [];
      if (link) { link.style.textDecoration = 'none'; link.style.outline = 'none'; d.svg.append(link); }
      head.lines.forEach((words, j) => {
        const yy = headBase + j * LL;
        const t = d.text(0, yy, words, { cls: 'dg-lab', fill: part.here ? RED : null, at: t0 });
        if (!link) return;
        const u = d.rule(0, yy + 3.5, head.widths[j], yy + 3.5, { at: t0 });
        under.push(u);
        link.append(t, u);
      });
      if (link) {
        link.addEventListener('pointerenter', () => under.forEach((u) => { u.style.stroke = RED; }));
        link.addEventListener('pointerleave', () => under.forEach((u) => { u.style.stroke = HAIR; }));
      }

      // the rows: who says the first name, then who says the second
      let cy = rowsTop;
      const bases = []; const runs = [];
      const drawn = part.sides.map((side, i) => {
        const marks = []; const rows = [];
        let seen = 0;
        for (const g of side.groups) {
          const base = cy + 15; const my = base - 4.5;
          const lines = Math.max(1, Math.ceil(g.n / per));
          for (let j = 0; j < g.n; j++) {
            const col = j % per;
            const x = edge[i] + dir[i] * (R + col * p + Math.floor(col / 5) * five(p));
            marks.push(d.dot(x, my + Math.floor(j / per) * up, R, { fill: ink, at: t0 + 90 + (seen++) * 32 }));
          }
          if (g.label) marks.push(d.text(i ? B : A, base, g.label, { anchor: i ? 'end' : 'start', fill: INK, at: t0 + 60 }));
          const row = { top: cy, base, last: base + (lines - 1) * up };
          cy += rowH + (lines - 1) * up;
          // (rows that follow each other with nothing between them are one run)
          const before = runs[runs.length - 1];
          if (before && before.open) before.bottom = cy; else runs.push({ top: row.top, bottom: cy, open: true });
          if (g.note) runs[runs.length - 1].open = false;
          // what the facts add about a count stands under its row, from the speakers' column outward
          if (g.note) {
            const nx = i ? A : x0; const nw = i ? W - A : B - x0;
            const note = d.note(nx, cy - 3, nw, g.note, { align: i ? 'left' : 'right', at: t0 + 200 });
            note.style.textWrap = 'balance';
            note.style.pointerEvents = 'none';             // the pointer goes through the words to their row
            cy += Math.ceil(note.offsetHeight || 17) + 1;
          }
          row.bottom = cy;
          rows.push(row); bases.push(row.base, row.last);
        }
        return { side, i, marks, rows };
      });
      const mid = bases.length ? (Math.min(...bases) + Math.max(...bases)) / 2 : rowsTop + 15;
      // the two lines the marks stand against, on either side of the speakers
      for (const r of runs) for (const x of lane) d.rule(x, r.top + 1, x, r.bottom - 1, { at: t0 });
      if (!bases.length) cy = rowsTop + rowH;

      for (const s of drawn) {
        const { side, i, marks, rows } = s;
        const say = `${cap1(part.name)}. *${side.name}*${side.n ? `, ${times(side.n)}` : ''}${side.words.includes(':') ? `. ${cap1(side.words)}` : `: ${side.words}`}.`;
        if (rows.length) {
          // the count of the part, beside the rows it is the sum of
          const fy = (rows[0].base + rows[rows.length - 1].last) / 2 + 1.5;
          const fx = edge[i] + dir[i] * (runW(Math.min(per, Math.max(...side.groups.map((g) => g.n))), p) + GF);
          marks.push(d.text(fx, fy, side.n, { cls: 'dg-name', anchor: anchor[i], fill: part.here ? RED : null, at: t0 + 90 + side.n * 32 + 120 }));
          // (a count of several rows: a line down the rows it adds up)
          if (rows.length > 1) {
            const bx = Math.round(fx - dir[i] * GF * 0.45) + 0.5;
            marks.push(d.rule(bx, rows[0].base - 4.5 - R - 1.5, bx, rows[rows.length - 1].last - 4.5 + R + 1.5, { at: t0 + 90 + side.n * 32 + 120 }));
          }
          for (const r of rows) d.hot(d.bar(i ? A : x0, r.top, i ? x0 + L.natural - A : B - x0, r.bottom - r.top, { fill: 'transparent' }), say, marks);
        } else if (side.words) {
          // no one says it here: the facts' own words, where the marks would stand
          const t = d.text(edge[i], mid, side.words, { anchor: anchor[i], at: t0 + 120 });
          const w = fitIt(side.words);
          d.hot(d.bar(i ? edge[i] - 4 : edge[i] - w - 4, mid - 14, w + 8, 20, { fill: 'transparent' }), say, t);
        }
      }
      const headFoot = wide ? headBase + (head.lines.length - 1) * LL + 6 : 0;
      y = Math.ceil(Math.max(cy, headFoot) + 9);
    });

    probe.remove();
    d.svg.setAttribute('height', y);
    d.svg.setAttribute('viewBox', `0 0 ${W} ${y}`);

    const here = m.parts.find((part) => part.here);
    d.keys([
      { mark: 'dot', color: INK, text: 'each time one of the two names is spoken or sung' },
      here ? { mark: 'dot', color: RED, text: `in ${here.name}` } : null,
    ].filter(Boolean));
  },
};

export default { lenses: { 'name:shape': names } };
