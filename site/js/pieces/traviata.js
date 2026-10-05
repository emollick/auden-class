// La Traviata (Violetta alone): the drawing of its own.
//
//   cabaletta / Scene: Violetta's scene alone, part by part, down the page in
//                      the order it is sung. Each line of verse is a stroke, so
//                      a part is as tall as it has lines. Its count stands at
//                      its left; its name, its first words, its measure and
//                      what she says stand at its right. The lines that this
//                      plate shows under its other tabs are red. A part's name
//                      opens the libretto printed here at that part.
//
// Everything is read when the page runs, from the lens's `facts`
// (remake/works/traviata/reading.json) and from the rows of the plate. No
// word, name or number of the opera is typed here.
//
// Two things the facts may say besides, and the drawing then shows (neither is
// needed): `syllables`, the measure of the lines of a part (one number for all
// of them, or a list with a number for each line), which makes every stroke as
// long as its line's measure (the measures then stand in figures too, folded
// away under the key); and `stanzas`, a list of how many lines each stanza of
// a part has, [12, 12], which parts its strokes. A stanza may itself be a list
// of the groups of lines it is printed in, [[8, 4], [8, 4]]: every group after
// a stanza's first is then set in, as a printer sets lines in.

import { mk, RED, INK, HAIR } from '../kit/draw.js';
import { sheet } from '../kit/diagram.js';

const KNOWN = ['part', 'first words', 'lines', 'measure', 'what she says', 'read', 'syllables', 'stanzas'];
// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const isNum = (v) => typeof v === 'number' && Number.isFinite(v) && v > 0;
const sum = (list) => list.reduce((t, n) => t + n, 0);
const wide = (node) => (node.getBBox ? node.getBBox().width : 0) || String(node.textContent).length * 6;
// words without their points, accents and capitals
const bare = (s) => String(s || '').normalize('NFD').toLowerCase().replace(/[^a-z]+/g, ' ').trim();

// Which line of which part each row of the plate is. A row that begins with a
// part's first words is that part's first line. The rows after it, with
// nothing left out between, are the lines that follow, on into the next part;
// the rows before it are the last lines of the part before. Where two rows of
// a run begin a part and the count of lines between them does not agree, no
// row of that run is placed. Returns the lines placed, as "part:line" counted
// from 0, and how many rows the plate shows.
function shownLines(plate, parts) {
  const runs = [[]];
  ((plate && plate.rows) || []).forEach((r) => {
    if (!r) return;
    if (r.aside === 'gap' || (!r.aside && r.gapBefore)) runs.push([]);
    if (!r.aside) runs[runs.length - 1].push(r);
  });
  const begins = (r, p) => { const want = bare(p['first words']); return !!want && `${bare((r.words || []).map((w) => w.t).join(' '))} `.startsWith(`${want} `); };
  const lines = new Set(); let rows = 0;
  runs.forEach((run) => {
    rows += run.length;
    const starts = [];
    run.forEach((r, i) => { const k = parts.findIndex((p) => begins(r, p)); if (k >= 0) starts.push([i, k]); });
    if (!starts.length) return;
    const [at, part] = starts[0];
    const placed = new Map();
    for (let i = at, k = part, n = 0; i < run.length && k < parts.length; i++) { placed.set(i, `${k}:${n}`); n += 1; if (n >= parts[k].lines) { k += 1; n = 0; } }
    for (let i = at - 1, k = part - 1, n = k >= 0 ? parts[k].lines - 1 : 0; i >= 0 && k >= 0; i--) { placed.set(i, `${k}:${n}`); n -= 1; if (n < 0) { k -= 1; n = k >= 0 ? parts[k].lines - 1 : 0; } }
    if (starts.every(([i, k]) => placed.get(i) === `${k}:0`)) placed.forEach((v) => lines.add(v));
  });
  return { lines, rows };
}

// How the lines of a part are grouped, where its `stanzas` say and their counts
// come to its count of lines: for each line, whether it opens a stanza after
// the first, and whether it stands in a group that is set in.
function grouping(p) {
  const whole = (n) => Number.isInteger(n) && n > 0;
  const said = Array.isArray(p.stanzas) && p.stanzas.every((s) => whole(s) || (Array.isArray(s) && s.length > 0 && s.every(whole)));
  const stanzas = said ? p.stanzas.map((s) => [].concat(s)) : [];
  if (!said || sum(stanzas.flat()) !== p.lines) return Array.from({ length: p.lines }, () => ({ opens: false, setIn: false }));
  return stanzas.flatMap((groups, s) => groups.flatMap((n, g) => Array.from({ length: n }, (_, k) => ({ opens: s > 0 && g === 0 && k === 0, setIn: g > 0 }))));
}

const scene = {
  name: 'Scene',
  stage: 'own',
  draw(ctx, lens, run) {
    const parts = Array.isArray(lens.facts) ? lens.facts.filter((p) => p && typeof p === 'object' && !Array.isArray(p)) : [];
    if (!parts.length || parts.some((p) => !p.part || !Number.isInteger(p.lines) || p.lines < 1)) throw new Error('facts: no parts with a name and a count of lines');
    const wasOpen = !!ctx.own.querySelector('details.dg-facts[open]');   // a redraw must not shut the numbers
    const d = sheet(ctx, lens, run, 400);
    const W = d.w; const roomy = W >= 520;
    // the measure of every line, where the facts give it for every part
    const measures = parts.map((p) => (isNum(p.syllables) ? Array(p.lines).fill(p.syllables) : Array.isArray(p.syllables) && p.syllables.length === p.lines && p.syllables.every(isNum) ? p.syllables : null));
    const scaled = measures.every(Boolean);
    const U = roomy ? 6 : 4;                                    // px to a syllable
    const IN = 2 * U;                                           // how far a group of lines is set in
    const long = (i, j) => (scaled ? measures[i][j] * U : roomy ? 48 : 32);
    const lay = parts.map(grouping);
    const REACH = Math.max(...lay.flatMap((lines, i) => lines.map((l, j) => (l.setIn ? IN : 0) + long(i, j))));
    const P = roomy ? 6 : 5; const GAP = roomy ? 24 : 20;       // from one line of verse to the next; between two parts
    const FW = Math.max(...parts.map((p) => String(p.lines).length)) * 7 + 2;
    const SX = FW + 8; const X0 = SX + REACH + (roomy ? 20 : 12); const TW = Math.min(W - X0, 450);
    const { lines: red, rows: shown } = shownLines(ctx.plate, parts);
    const note = (yy, words, at, ink) => { const n = d.note(X0, yy, TW, String(words), { at }); if (ink) { n.style.fontStyle = 'normal'; n.style.color = INK; } return Math.ceil(n.getBoundingClientRect().height); };

    let y = 0; let reds = 0;
    parts.forEach((p, i) => {
      const at = 120 + i * 420;
      d.text(FW, y + 10, p.lines, { cls: 'dg-n', anchor: 'end', at });
      // its lines, a stroke to each; a stanza after the first stands apart, and a group that is set in begins further in
      let yy = y + 4;
      lay[i].forEach((line, j) => {
        if (line.opens) yy += P;
        const mine = red.has(`${i}:${j}`);
        if (mine) reds += 1;
        const x = SX + (line.setIn ? IN : 0);
        d.rule(x, yy, x + long(i, j), yy, { stroke: mine ? RED : INK, width: 2, at: at + j * 22 });
        yy += P;
      });
      const stack = yy - P + 1 - y;
      // its name; where the libretto is printed here, the name opens it at this part
      const name = d.text(X0, y + 10, p.part, { cls: 'dg-lab', at });
      if (p.read && canRead()) {
        const a = mk('a', { href: `#/read/${p.read}`, tabindex: -1 });
        a.style.textDecoration = 'none'; a.style.outline = 'none';
        const under = d.rule(X0, y + 13.5, X0 + wide(name), y + 13.5, { at });
        // the whole of the label answers a pointer or a finger, not its letters only
        const zone = d.bar(X0 - 3, y - 3, wide(name) + 6, 20, { fill: 'transparent' });
        d.svg.append(a); a.append(zone, name, under);
        a.addEventListener('pointerenter', () => { under.style.stroke = RED; });
        a.addEventListener('pointerleave', () => { under.style.stroke = HAIR; });
      }
      let h = 16;
      // its measure: beside its name where one line holds both, or else under the name
      if (p.measure) {
        const beside = d.text(X0 + wide(name) + 14, y + 10, p.measure, { at: at + 120 });
        if (X0 + wide(name) + 14 + wide(beside) > W) { beside.remove(); h += 1 + note(y + h + 1, p.measure, at + 120); }
      }
      if (p['first words']) { d.text(X0, y + h + 17, p['first words'], { cls: 'dg-name', at: at + 60 }); h += 23; }
      if (p['what she says']) h += 3 + note(y + h + 3, p['what she says'], at + 180, true);
      // whatever else the facts say of a part: the key as a heading, and its words
      Object.keys(p).filter((k) => !KNOWN.includes(k) && ['string', 'number'].includes(typeof p[k]) && p[k] !== '').forEach((k) => {
        d.text(X0, y + h + 17, k, { cls: 'dg-lab', at: at + 240 });
        h += 21 + note(y + h + 21, p[k], at + 240);
      });
      y += Math.max(h, stack) + GAP;
    });
    const H = Math.ceil(y - GAP + 8);
    d.svg.setAttribute('height', H);
    d.svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

    const kinds = scaled ? [...new Set(measures.flat())].sort((a, b) => a - b) : [];
    const said = kinds.length > 1 ? `${kinds.slice(0, -1).join(', ')} or ${kinds[kinds.length - 1]}` : String(kinds[0]);
    // by what count, in the words of this plate's own tab of the measure, if it says ("by the ... count")
    const beat = ((ctx.plate && ctx.plate.lenses) || []).find((l) => l && l.kind === 'beat');
    const how = ((beat && String(beat.meterName || '').match(/\bby the [\w ]*?\b(?:count|rules?)\b/)) || [''])[0];
    d.keys([
      { mark: 'line', color: INK, text: scaled ? `a line of verse, drawn as long as its measure: ${said} syllables${how ? ` ${how}` : ''}` : 'a line of verse' },
      reds ? { mark: 'line', color: RED, text: `${reds === shown ? 'the ' : ''}${reds} ${reds === 1 ? 'line' : 'lines'} shown under the other tabs` } : null,
    ].filter(Boolean));
    // where the strokes are to measure, the measures in figures, folded away under the key
    if (scaled) { const fold = d.figures(parts.map((p) => ({ part: p.part, lines: p.lines, syllables: isNum(p.syllables) ? `${p.syllables} in every line` : p.syllables }))); if (fold && wasOpen) fold.open = true; }
  },
};

export default { lenses: { 'cabaletta:shape': scene } };
