// The Flying Dutchman (Senta's ballad): the drawing of its own.
//
//   refrain / Scene: the rows of the reading's table in their order, one
//                    moment to a row. The column "who sings" is drawn: a
//                    lane to each voice, a dot where it sings, a ring where
//                    it joins in, a thread from each singer to the next.
//                    Beside each row stand who sings what, and what the
//                    stage direction says.
//
// It is the reading's table with one column drawn, not a picture of a
// stage. Everything is read from the lens's `facts`
// (remake/works/dutchman/reading.json) each time the page runs. The voices
// are found in the rows' own words; no name, word or number of the opera is
// typed here.

import { mk, RED, INK, HAIR } from '../kit/draw.js';
import { sheet } from '../kit/diagram.js';

const PAPER = 'var(--paper)';
// the columns of the reading's table, by the names the reading gives them
const WHEN = 'when';
const WHO = 'who sings';
const WHAT = 'what is sung';
const READ = 'read';

// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const str = (v) => (v === null || v === undefined ? '' : String(v).trim());

// What the facts say: the rows, the voices that sing in them, and the
// person the directions describe.
function read(facts) {
  const list = Array.isArray(facts) ? facts.filter((r) => r && typeof r === 'object' && !Array.isArray(r)) : [];
  if (!list.length) throw new Error('facts: no rows');
  for (const k of [WHEN, WHO]) if (!list.some((r) => str(r[k]))) throw new Error(`facts: no "${k}"`);
  // the column that is none of the four, nor the working record, holds the directions; its name begins with the person they describe
  const size = (k) => list.reduce((n, r) => n + str(r[k]).length, 0);
  const DIR = [...new Set(list.flatMap((r) => Object.keys(r)))].filter((k) => ![WHEN, WHO, WHAT, READ, 'source', 'note'].includes(k)).sort((a, b) => size(b) - size(a))[0];
  if (!DIR) throw new Error('facts: no column of directions');
  const subject = str(DIR.split(',')[0]);
  const rows = list.map((r) => {
    const clauses = str(r[WHO]).split(';').map(str).filter(Boolean);
    const sung = str(r[WHAT]) !== '';
    // the voice that leads: the words before the first comma, where something is sung
    return { when: str(r[WHEN]), who: str(r[WHO]), what: str(r[WHAT]), dir: str(r[DIR]), read: str(r[READ]), clauses, lead: sung && clauses.length ? str(clauses[0].split(',')[0]) : '', joins: [] };
  });
  const names = [];
  rows.forEach((r) => { if (r.lead && !names.includes(r.lead)) names.push(r.lead); });
  if (!names.length) throw new Error('facts: no one sings');
  // the person of the directions first, then whoever leads most often
  const led = (n) => rows.filter((r) => r.lead === n).length;
  names.sort((a, b) => (b === subject) - (a === subject) || led(b) - led(a));
  // a later clause that begins with a voice's name: that voice joins in
  const starts = (clause, n) => clause.toLowerCase().startsWith(n.toLowerCase()) && !/[\p{L}\p{N}]/u.test(clause.charAt(n.length));
  rows.forEach((r) => { if (r.lead) r.joins = [...new Set(r.clauses.slice(1).map((c) => names.find((n) => starts(c, n))).filter((n) => n && n !== r.lead))]; });
  return { rows, names, subject, dirName: DIR };
}

// Words broken into the fewest lines no wider than `width`, measured as they
// will be set in class `cls`. Of all the ways to fill that many lines it takes
// the one whose widest line is narrowest, so that no word stands alone; and it
// would rather turn after a comma or a colon than in the middle of a phrase.
// (More than four lines are simply filled.)
function broken(d, words, width, cls) {
  const probe = d.text(0, 0, '', { cls });
  probe.style.visibility = 'hidden';
  const fit = (s) => { probe.textContent = s; return probe.getComputedTextLength(); };
  const list = str(words).split(/\s+/).filter(Boolean);
  const got = new Map();
  const span = (a, z) => { const key = `${a}-${z}`; if (!got.has(key)) got.set(key, fit(list.slice(a, z).join(' '))); return got.get(key); };
  const first = [];                                // where the lines end if each is simply filled
  for (let a = 0, z = 1; z <= list.length; z++) if (z - a > 1 && span(a, z) > width) { first.push(z - 1); a = z - 1; }
  const count = first.length + 1;
  // a turn inside a phrase is counted as a quarter of the width added to the widest line
  const loose = (to) => (/[,;:.!?]$/.test(list[to - 1]) ? 0 : width * 0.25);
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
  const widths = lines.map(fit);
  probe.remove();
  return { lines, widths };
}

// ----- Scene: the table, with its singers drawn -----
const scene = {
  name: 'Scene',
  stage: 'own',
  draw(ctx, lens, run) {
    const k = read(lens.facts);
    const d = sheet(ctx, lens, run, 100);
    const n = k.names.length;
    const wide = d.w >= 520;                         // room for the moments in a column of their own
    const LH = 16;                                   // from line to line
    const LL = 13;                                   // from line to line of a label in small capitals
    const R = wide ? 4.5 : 4;                        // a dot
    const pitch = wide ? 30 : 22;                    // from lane to lane
    const whenW = wide ? Math.min(150, Math.round(d.w * 0.25)) : 0;
    const L0 = wide ? whenW + 22 : 7;
    const lane = (i) => L0 + i * pitch;
    const at = (name) => lane(k.names.indexOf(name));
    const TX = lane(n - 1) + (wide ? 26 : 20);       // where the words of a row begin
    const TW = Math.max(120, Math.min(d.w - TX, 540));
    const right = TX + TW;
    const color = (name) => (name === k.subject ? RED : INK);
    const when = (i) => 200 + i * 200;

    // ----- the head: each voice over its lane, and the kinds of line a row is made of -----
    const base = (i) => 11 + i * LH;
    const heads = k.names.map((name, i) => d.text(lane(i) - 3, base(i), name, { fill: color(name) }));
    const kinds = [wide ? null : { words: WHEN, cls: 'dg-lab' }, { words: `${WHO}: ${WHAT}`, cls: 'dg-n' }, { words: k.dirName, cls: 'dg-it' }].filter(Boolean);
    const legend = kinds.map((g) => d.text(right, 0, g.words, { cls: g.cls, anchor: 'end' }));
    // the legend stands beside the names where there is room, and under them where there is not
    let lines = Math.max(n, legend.length);
    const row = (j) => lines - legend.length + j;
    const clash = legend.some((t, j) => heads[row(j)] && lane(row(j)) - 3 + heads[row(j)].getComputedTextLength() + 14 > right - t.getComputedTextLength());
    if (clash) lines = n + legend.length;
    legend.forEach((t, j) => t.setAttribute('y', base(row(j))));
    if (wide) d.text(whenW, base(lines - 1), WHEN, { cls: 'dg-lab', anchor: 'end' });

    // ----- the rows: broken and measured first, then set -----
    const set = k.rows.map((r, i) => {
      const label = broken(d, r.when, wide ? whenW : TW, 'dg-lab');
      const sung = broken(d, r.what ? `${r.who}: ${r.what}` : r.who, TW, 'dg-n');
      const note = r.dir ? d.note(TX, 0, TW, r.dir, { at: when(i) + 120 }) : null;
      if (note) note.style.textWrap = 'balance';     // no word alone on a last line
      const noteH = note ? note.offsetHeight || Math.ceil((r.dir.length * 6.2) / TW) * 17 : 0;
      return { r, i, label, sung, note, noteH };
    });
    let y = base(lines - 1) + 20;
    for (const s of set) {
      s.b0 = y + 9;                                                          // the moment
      s.s0 = wide ? y + 9.5 : s.b0 + (s.label.lines.length - 1) * LL + 17;   // who sings what
      s.dot = wide ? y + 5.5 : s.b0 - 3.5;
      s.top = s.s0 + (s.sung.lines.length - 1) * LH + 6;                     // the direction
      s.foot = Math.max(s.top + s.noteH, s.b0 + (s.label.lines.length - 1) * LL + 4);
      y = s.foot + (wide ? 16 : 15);
    }
    const H = Math.ceil(set[set.length - 1].foot + 6);
    d.svg.setAttribute('height', H);
    d.svg.setAttribute('viewBox', `0 0 ${d.w} ${H}`);

    // ----- the lanes, and the thread from each singer to the next -----
    const end = set[set.length - 1].dot;
    k.names.forEach((name, i) => d.rule(lane(i) + 0.5, base(i) + 6, lane(i) + 0.5, end));
    set.forEach((s, i) => {
      const next = set[i + 1];
      if (!s.r.lead || !next || !next.r.lead) return;
      const xa = at(s.r.lead) + 0.5; const xb = at(next.r.lead) + 0.5; const ya = s.dot + R; const yb = next.dot - R; const ym = (ya + yb) / 2;
      d.path(xa === xb ? `M${xa} ${ya}V${yb}` : `M${xa} ${ya}C${xa} ${ym} ${xb} ${ym} ${xb} ${yb}`, { stroke: INK, width: 1.1, at: when(i) + 80 });
    });

    // ----- each row: its marks, the moment, who sings what, the direction -----
    for (const s of set) {
      const { r, i } = s;
      if (r.lead) {
        for (const name of r.joins) {
          const a = Math.min(at(r.lead), at(name)); const z = Math.max(at(r.lead), at(name));
          d.rule(a + 0.5, s.dot, z + 0.5, s.dot, { stroke: INK, at: when(i) + 100 });
          d.dot(at(name) + 0.5, s.dot, R - 0.5, { fill: PAPER, stroke: color(name), width: 1.4, at: when(i) + 160 });
        }
        d.dot(at(r.lead) + 0.5, s.dot, R, { fill: color(r.lead), at: when(i) });
      }
      // the moment; where the book is printed here, it opens the place
      // (a pointer or a finger may follow it; the drawing is one picture to a keyboard, as the kit makes it)
      const link = r.read && canRead() ? mk('a', { href: `#/read/${r.read}`, tabindex: -1 }) : null;
      const under = [];
      if (link) { link.style.textDecoration = 'none'; link.style.outline = 'none'; d.svg.append(link); }
      s.label.lines.forEach((words, j) => {
        const x = wide ? whenW : TX; const yy = s.b0 + j * LL; const w = s.label.widths[j];
        const t = d.text(x, yy, words, { cls: 'dg-lab', anchor: wide ? 'end' : 'start', at: when(i) });
        if (!link) return;
        const u = d.rule(wide ? x - w : x, yy + 3.5, wide ? x : x + w, yy + 3.5, { at: when(i) });
        under.push(u);
        link.append(t, u);
      });
      if (link) {
        link.addEventListener('pointerenter', () => under.forEach((u) => { u.style.stroke = RED; }));
        link.addEventListener('pointerleave', () => under.forEach((u) => { u.style.stroke = HAIR; }));
      }
      s.sung.lines.forEach((words, j) => d.text(TX, s.s0 + j * LH, words, { cls: 'dg-n', at: when(i) + 60 }));
      if (s.note) s.note.style.top = `${s.top}px`;
    }

    const sings = k.names.includes(k.subject);
    d.keys([
      sings ? { mark: 'dot', color: RED, text: `${k.subject} sings` } : null,
      n > (sings ? 1 : 0) ? { mark: 'dot', color: INK, text: sings ? 'another sings' : 'sings' } : null,
      k.rows.some((r) => r.joins.length) ? { mark: 'ring', color: INK, text: 'joins in' } : null,
      { mark: 'line', color: INK, text: 'from one singer to the next' },
    ].filter(Boolean));
  },
};

export default { lenses: { 'refrain:shape': scene } };
