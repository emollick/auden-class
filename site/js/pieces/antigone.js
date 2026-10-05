// Antigone: the two drawings of its own.
//
//   quarrel / Play: the play from its first line to its last, left to right,
//                   to scale. A row to each speaker, in the order the facts
//                   give them; every turn to speak is a mark as long as its
//                   lines, at its place in the play. The speaker whose last
//                   line the facts count from is red, a red rule stands at
//                   that line, and the lines after it are tinted.
//   elders / Song:  the song in the order it is sung, with what comes before
//                   it and after it: a stroke to each line as printed here,
//                   the part's name (it opens the play at that place), what
//                   it tells, and whatever else the facts say of it. The
//                   stanza of the passage is red.
//
// Both are drawn from the reading's own `facts`
// (remake/works/antigone/reading.json). The turns one by one stand under the
// key "turns in order", which remake/works/antigone/count-turns.mjs counts on
// the text printed here. No name, word or number of the play is typed here.

import { el, mk, RED, INK, QUIET, TINT } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

const TURNS = 'turns in order';
const count = (n, one, many = `${one}s`) => `${num(n)} ${n === 1 ? one : many}`;
const wide = (node) => (node.getComputedTextLength && node.getComputedTextLength()) || String(node.textContent).length * 5.8;

// The speakers as the facts give them; the row that is the whole play (it
// runs from line 1 to the last line and holds every line); the row for what
// follows one speaker's last line; and that speaker.
function castOf(facts) {
  if (!Array.isArray(facts) || !facts.length) throw new Error('facts: no speakers');
  const rows = facts.filter((r) => r && r.speaker && r.lines > 0 && r['first line'] >= 1 && r['last line'] >= r['first line']);
  const end = Math.max(...rows.map((r) => r['last line']));
  const whole = rows.find((r) => r['first line'] === 1 && r['last line'] === end && r.lines === end);
  if (!whole) throw new Error('facts: no row for the whole play');
  const rest = rows.find((r) => r !== whole && r['last line'] === end && r.lines === end - r['first line'] + 1
    && rows.some((s) => s !== whole && s !== r && s['last line'] === r['first line'] - 1));
  const people = rows.filter((r) => r !== whole && r !== rest);
  if (!people.length) throw new Error('facts: no speakers');
  const gone = rest ? people.find((r) => r['last line'] === rest['first line'] - 1) : null;
  return { people, whole, rest, gone };
}

// Where each speaker's lines fall, from the turns in order (a list; each item
// a speaker's name and the lines of the turn): [first line, last line] of
// every turn. Null if the list is missing or does not agree with the figures
// beside it (lines, first line, last line), which are then drawn alone.
function runsOf(facts, cast) {
  const held = facts.map((r) => r && r[TURNS]).find((v) => Array.isArray(v));
  if (!held) return null;
  const by = new Map(cast.people.map((p) => [p.speaker, []]));
  let n = 0;
  for (const turn of held) {
    const m = String(turn).match(/^(.*\S)\s+(\d+)$/);
    if (!m || !by.has(m[1]) || !+m[2]) return null;
    by.get(m[1]).push([n + 1, n + +m[2]]);
    n += +m[2];
  }
  if (n !== cast.whole.lines) return null;
  for (const p of cast.people) {
    const r = by.get(p.speaker);
    if (!r.length || r[0][0] !== p['first line'] || r[r.length - 1][1] !== p['last line']) return null;
    if (r.reduce((sum, [a, z]) => sum + z - a + 1, 0) !== p.lines) return null;
  }
  return by;
}

// What the pointer adds to the Play drawing, its key, and its figures folded away.
function afterPlay(d, o) {
  const { facts, rowsAt, gone, rest, runs, wasOpen, cut, A, ROW, x, total } = o;
  const greek = (r) => (r['Greek lines'] ? `; in the Greek, ${num(r['Greek lines'])}` : '');
  // a row answers the pointer along its whole length: its marks, name and count stay dark, the other rows go pale
  rowsAt.forEach(({ p, yc, marks, turns }) => {
    const hit = d.bar(0, yc - ROW / 2, d.w, ROW, { fill: 'transparent' });
    d.hot(hit, `${p.speaker}: ${count(p.lines, 'line')}${turns ? ` in ${count(turns, 'turn')}` : ''}, from line ${num(p['first line'])} to line ${num(p['last line'])}${greek(p)}`, marks);
  });
  // under the play's line, right of the red rule: what follows; every row stays dark
  if (cut !== null) {
    const hit = d.bar(cut, A - 4, x(total) - cut, 40, { fill: 'transparent' });
    d.hot(hit, `After line ${num(gone['last line'])}: ${count(rest.lines, 'line')}, to line ${num(rest['last line'])}${greek(rest)}`, rowsAt.flatMap((r) => r.marks));
  }

  d.keys([
    { mark: runs ? 'bar' : 'line', color: INK, text: runs ? 'a turn to speak, from its first line to its last' : 'from a speaker’s first line to the last' },
    gone && runs ? { mark: 'bar', color: RED, text: gone.speaker } : null,
    cut !== null ? { mark: 'line', color: RED, text: `${gone.speaker}’s last line` } : null,
  ].filter(Boolean));
  // the figures: the rows as the facts give them (the kit leaves a long list out of a table)
  const box = d.figures(facts);
  if (box) box.open = wasOpen;
}

// ----- Play: who speaks, where, and for how many lines -----
const play = {
  name: 'Play',
  stage: 'own',
  draw(ctx, lens, run) {
    const facts = lens.facts;
    const cast = castOf(facts);
    const { people, whole, rest, gone } = cast;
    const runs = runsOf(facts, cast);
    const total = whole.lines;
    const wasOpen = !!ctx.own.querySelector('details.dg-facts[open]'); // a redraw must not shut the figures

    const ROW = 19; const MH = 9; const TOP = 20;
    const A = TOP + people.length * ROW + 12;         // the line of the play, under the rows
    const d = sheet(ctx, lens, run, A + (rest && gone ? 38 : 22));
    const W = d.w;

    // the names at the left and the counts at the right, and the room they need
    const names = people.map((p) => d.text(0, 0, p.speaker, { fill: p === gone ? RED : null }));
    const playLabel = d.text(0, A + 4, 'the play');
    const G = Math.ceil(Math.max(...names.map(wide), wide(playLabel))) + 10;
    const counts = people.map((p) => d.text(W, 0, num(p.lines), { cls: 'dg-n', anchor: 'end', fill: p === gone ? RED : null }));
    const E = Math.ceil(Math.max(...counts.map(wide))) + 9;
    d.text(W, 9, 'lines', { cls: 'dg-lab', anchor: 'end' });
    const x = (line) => G + ((W - G - E) * line) / total; // line n lies between x(n - 1) and x(n)
    const when = (line) => 200 + (1500 * line) / total;

    // the lines after one speaker's last are tinted, under everything else
    const cut = rest && gone ? Math.round(x(gone['last line'])) + 0.5 : null;
    if (cut !== null) d.bar(cut, TOP - 4, x(total) - cut, A - TOP + 4, { fill: TINT, at: 1750 });

    const rowsAt = people.map((p, i) => {
      const yc = TOP + i * ROW + 9.5;
      const color = p === gone ? RED : INK;
      d.rule(x(0), yc, x(total), yc);
      const g = mk('g');
      d.svg.append(g);
      const mine = runs ? runs.get(p.speaker) : null;
      if (mine) mine.forEach(([a, z]) => g.append(d.bar(x(a - 1), yc - MH / 2, x(z) - x(a - 1), MH, { fill: color, at: when(a) })));
      // without the turns: a line from the speaker's first line to the last
      else g.append(d.path(`M${x(p['first line'] - 1)} ${yc - 3}v6M${x(p['first line'] - 1)} ${yc}H${x(p['last line'])}M${x(p['last line'])} ${yc - 3}v6`, { stroke: color, width: 1.4 }));
      names[i].setAttribute('y', yc + 4);
      counts[i].setAttribute('y', yc + 4);
      return { p, yc, marks: [g, names[i], counts[i]], turns: mine ? mine.length : 0 };
    });

    // the play itself: line 1, the last line, and the last line of the one who leaves
    d.rule(x(0), A + 0.5, x(total), A + 0.5, { stroke: INK });
    [0, total].forEach((n) => d.rule(Math.round(x(n)) + 0.5, A - 3, Math.round(x(n)) + 0.5, A + 5, { stroke: INK }));
    const from = d.text(x(0), A + 17, 'line 1', { cls: 'dg-n' });
    const to = d.text(x(total), A + 17, num(total), { cls: 'dg-n', anchor: 'end' });
    if (cut !== null) {
      d.rule(cut, TOP - 6, cut, A + 5, { stroke: RED, at: 1750 });
      // its figure stands under the rule, or beside it where it would run into the figure at either end
      const fig = d.text(cut, A + 17, num(gone['last line']), { cls: 'dg-n', anchor: 'middle', fill: RED, at: 1900 });
      const half = wide(fig) / 2 + 8;
      if (cut + half > x(total) - wide(to)) { fig.setAttribute('text-anchor', 'end'); fig.setAttribute('x', cut - 3); }
      else if (cut - half < x(0) + wide(from)) { fig.setAttribute('text-anchor', 'start'); fig.setAttribute('x', cut + 3); }
      d.text(x(total), A + 33, `${count(rest.lines, 'line')} after ${gone.speaker}’s last line`, { anchor: 'end', fill: RED, at: 2050 });
    }
    afterPlay(d, { facts, rowsAt, gone, rest, runs, wasOpen, cut, A, ROW, x, total });
  },
};

// ----- Song: the stanzas in order, with what comes before and after -----
const KNOWN = ['part', 'lines', 'Greek lines', 'tells', 'read'];
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
// "a, b: c, d" is two words of the Greek and what each means; anything else is left as it stands
const pairOf = (v) => { const m = String(v).match(/^([^,:]+),\s*([^,:]+):\s*([^,:]+),\s*([^,:]+)$/); return m ? m.slice(1).map((s) => s.trim()) : null; };

// Two words set side by side and joined under, each with its meaning below it.
// Returns the height it took.
function pairAt(d, x, y, [g1, g2, e1, e2], at) {
  const a = d.text(x, y + 11, g1, { fill: INK, at });
  const a2 = d.text(x, y + 42, e1, { at });
  const bx = Math.round(x + Math.max(wide(a), wide(a2)) + 18);
  const b = d.text(bx, y + 11, g2, { fill: INK, at });
  d.text(bx, y + 42, e2, { at });
  // each word ruled under, and the two rules joined, as the kit joins the parts of a figure
  const u = Math.round(y + 17) + 0.5; const j = u + 6;
  const c1 = Math.round(x + wide(a) / 2) + 0.5; const c2 = Math.round(bx + wide(b) / 2) + 0.5;
  d.path(`M${x} ${u}H${x + wide(a)}M${bx} ${u}H${bx + wide(b)}M${c1} ${u}V${j}H${c2}V${u}`, { stroke: QUIET, width: 1, dash: 'none', at });
  return 47;
}

// A heading in small capitals, turned over where it is longer than `width`.
// Returns the height it took.
function headAt(d, x, y, width, words, at) {
  let n = 0; let node = null;
  String(words).split(/\s+/).forEach((word) => {
    const was = node && node.textContent;
    if (node) node.textContent = `${was} ${word}`;
    if (!node || wide(node) > width) {
      if (node) node.textContent = was;
      node = d.text(x, y + n * 13, word, { cls: 'dg-lab', at });
      n += 1;
    }
  });
  return n * 13;
}

const song = {
  name: 'Song',
  stage: 'own',
  draw(ctx, lens, run) {
    const rows = lens.facts;
    if (!Array.isArray(rows) || !rows.length || rows.some((r) => !r || !r.part)) throw new Error('facts: no parts');
    const d = sheet(ctx, lens, run, 400);
    const W = d.w;
    const SW = 30; const X0 = SW + 14; const TW = W - X0;  // a stroke is one line of verse; the words stand right of the strokes
    // a part is of the song where its name says stanza; if no name does, every part but the first and the last
    const named = rows.map((r) => /stanza/i.test(r.part));
    const inSong = (r) => (named.some(Boolean) ? named[rows.indexOf(r)] : rows.indexOf(r) > 0 && rows.indexOf(r) < rows.length - 1);
    // the stanza of this passage: the one whose place in the play is where the passage begins
    const first = (ctx.plate.rows || []).find((r) => !r.aside && r.id);
    const place = first ? `${ctx.plate.src}:${parseInt(first.id, 10)}` : '';
    const here = rows.find((r) => r.read && r.read === place) || null;

    // the heading of the figures at the right: on the first part's line if that part has none, or else over it
    const head = rows.some((r) => r['Greek lines']) ? d.text(W, rows[0]['Greek lines'] ? 9 : 12.5, 'Greek lines', { cls: 'dg-lab', anchor: 'end' }) : null;
    let y = head && rows[0]['Greek lines'] ? 18 : 0;
    rows.forEach((r, i) => {
      // a hairline where the song begins, and another where it ends
      if (i && inSong(r) !== inSong(rows[i - 1])) { d.rule(0, y + 0.5, W, y + 0.5); y += 15; }
      const at = 120 + i * 270;
      const red = r === here;
      // the name of the part; where the play is printed here it opens at that place
      const name = d.note(X0, y, TW, '', { at });
      name.style.width = 'auto'; name.style.whiteSpace = 'nowrap'; name.style.fontStyle = 'normal'; name.style.color = red ? RED : INK;
      name.append(r.read && canRead() ? el('a', { href: `#/read/${r.read}`, text: r.part }) : r.part);
      const room = (mark) => X0 + name.getBoundingClientRect().width + 12 <= W - wide(mark);
      if (!i && head && !r['Greek lines'] && !room(head)) { y += 18; name.style.top = `${y}px`; }
      let h = 19;
      // its lines in the Greek, by number: on the name's line, or under it where the name leaves no room
      if (r['Greek lines']) {
        const fig = d.text(W, y + 12.5, r['Greek lines'], { cls: 'dg-n', anchor: 'end', fill: red ? RED : null, at });
        if (!room(fig)) { fig.setAttribute('y', y + 29.5); h += 17; }
      }
      // its lines as printed here, a stroke to each
      const color = red ? RED : inSong(r) ? INK : QUIET;
      for (let j = 0; j < (r.lines || 0); j++) d.rule(0, y + 6 + j * 5, SW, y + 6 + j * 5, { stroke: color, width: 1.6, at: at + j * 45 });
      // what it tells
      if (r.tells) { const tells = d.note(X0, y + h, TW, r.tells, { at: at + 80 }); h += Math.ceil(tells.getBoundingClientRect().height); }
      // whatever else the facts say of it: the key as a heading, and its two words joined, or its words
      Object.keys(r).filter((k) => !KNOWN.includes(k)).forEach((k) => {
        if (r[k] === null || typeof r[k] === 'object' || r[k] === '') return;
        h += 10 + headAt(d, X0, y + h + 17, TW, k, at + 200);
        const pair = pairOf(r[k]);
        if (pair) h += pairAt(d, X0, y + h, pair, at + 200);
        else { const more = d.note(X0, y + h, TW, r[k], { at: at + 200 }); h += Math.ceil(more.getBoundingClientRect().height); }
      });
      y += Math.max(h, 6 + (r.lines || 0) * 5) + 16;
    });
    const H = Math.ceil(y - 14);
    d.svg.setAttribute('height', H);
    d.svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

    const out = rows.filter((r) => !inSong(r) && r.lines);
    d.keys([
      rows.some((r) => inSong(r) && r.lines && r !== here) ? { mark: 'line', color: INK, text: 'a line of the song, as printed here' } : null,
      here && here.lines ? { mark: 'line', color: RED, text: `the ${num(here.lines)} lines of this passage` } : null,
      out.length ? { mark: 'line', color: QUIET, text: 'a line outside the song' } : null,
    ].filter(Boolean));
  },
};

export default { lenses: { 'quarrel:shape': play, 'elders:shape': song } };
