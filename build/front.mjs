// The front page's specimens: from each piece, a line or two of one passage
// with the marks of one lens, cut from the built piece so that the front
// page draws them with the same kit as the piece itself.
//
//   node build/front.mjs            writes site/data/front.json
//   node build/front.mjs --list     prints every specimen that could be cut
//
// build/pieces.mjs runs this after the pieces are built. What stands on the
// front page can be chosen by hand in remake/front.json (see `choices` below);
// where nothing is chosen, each piece shows the lens that fewest others show.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'site/data');
const PIECES = path.join(OUT, 'pieces');

// the order of the front page: Auden's three required subjects, two lenses to each
export const WAYS = ['beat', 'rhyme', 'figure', 'sentence', 'word', 'compare'];
const MAX_LINES = { beat: 2, rhyme: 4, figure: 3, sentence: 3, word: 2, compare: 2 };
const MAX_WORDS = 26;
const MIN_WORDS = 6; // fewer words of prose than this show nothing
const NO_RHYME = new Set(['x', 'X', '-', '_', '.', '0', '']);
const EMPTY = { t: '', sy: [] };
// a word number may name one of two words joined by a dash (6.1, 6.2); for what is shown, the whole word counts
const span = (w) => (Array.isArray(w) ? [Math.floor(w[0]), Math.floor(w[w.length - 1])] : [Math.floor(w), Math.floor(w)]);
const isPair = (id) => String(id).startsWith('p:');

// What a lens marks, as places: { row, a, z } (a whole row has no a and z).
function places(lens) {
  switch (lens.kind) {
    case 'beat': return Object.keys(lens.scan || {}).map((row) => ({ row, whole: true }));
    case 'rhyme': return Object.entries(lens.ends || {}).filter(([, l]) => !NO_RHYME.has(l)).map(([row, letter]) => ({ row, whole: true, letter }));
    case 'figure': return (lens.parts || []).map((p, i) => { const [a, z] = span(p.w); return { row: String(p.row), a, z, i }; });
    case 'word': return (lens.notes || []).map((n, i) => { const [a, z] = span(n.w); return { row: String(n.row), a, z, i }; });
    case 'sentence': return (lens.spans || []).map((s, i) => ({ row: String(s.from[0]), a: Math.floor(s.from[1]), row2: String(s.to[0]), z: Math.floor(s.to[1]), i }));
    case 'compare': return (lens.ties || []).filter((t) => t.a && t.b).map((t, i) => ({ row: String(t.a[0]), a: Math.floor(t.a[1]), z: Math.floor(t.a[2] === undefined ? t.a[1] : t.a[2]), b: { row: String(t.b[0]), a: Math.floor(t.b[1]), z: Math.floor(t.b[2] === undefined ? t.b[1] : t.b[2]) }, i }));
    default: return [];
  }
}

// how much of the lens a run of whole rows holds
function held(kind, marks, ids) {
  const inside = marks.filter((m) => ids.has(m.row) && (!m.row2 || ids.has(m.row2)));
  if (kind === 'rhyme') {
    const count = {};
    for (const m of inside) count[m.letter] = (count[m.letter] || 0) + 1;
    return Object.values(count).reduce((n, c) => n + Math.max(0, c - 1), 0);
  }
  return inside.length;
}

// widen a run of words to the points of the sentence around it, a few words at most
function toPoints(row, a, z, room) {
  const stop = /[.;:?!]["”’')\]]*$/; const pause = /[,.;:?!—]["”’')\]]*$/;
  let s = a; let e = z;
  for (let k = 0; k < room && s > row.first && !stop.test(row.words[s - 1].t); k++) s--;
  if (s > row.first && !pause.test(row.words[s - 1].t)) s = a; // found no point to begin from
  for (let k = 0; k < room && e < row.last && !pause.test(row.words[e].t); k++) e++;
  if (e < row.last && !pause.test(row.words[e].t)) e = z;
  return [s, e];
}

const cutRow = (row, a, z) => ({ ...row, first: a, last: z, cutStart: a > 0 || undefined, cutEnd: z < row.words.length - 1 || undefined, words: row.words.map((w, i) => (i >= a && i <= z ? w : EMPTY)) });

// Every way one lens of one plate could be shown small, best first.
function windows(plate, lens) {
  const kind = lens.kind;
  const marks = places(lens);
  const text = (plate.rows || []).filter((r) => !r.aside);
  const pair = plate.pair ? plate.pair.rows : [];
  // (under: false is a second version that does not follow line for line, though it may have as many rows)
  const interlinear = !!plate.pair && !plate.beside && plate.under !== false && pair.length === text.length;
  const out = [];
  const need = kind === 'figure' ? Math.min(2, marks.filter((m) => !isPair(m.row)).length) : 1;
  if (!marks.length || !need) return out;

  // runs of whole lines of verse
  const maxL = MAX_LINES[kind] || 2;
  for (let i = 0; i < text.length; i++) {
    for (let j = i; j < Math.min(text.length, i + maxL); j++) {
      const run = text.slice(i, j + 1);
      if (!run.every((r) => r.kind === 'v')) break;
      // lines that do not follow each other in the work are not shown as if they did
      if (run.slice(1).some((r) => r.gapBefore)) break;
      const ids = new Set(run.map((r) => r.id));
      if (interlinear) for (let k = i; k <= j; k++) ids.add(pair[k].id);
      // the first and last lines of a run must both carry a mark
      const edge = (r) => marks.some((m) => m.row === r.id || m.row2 === r.id);
      if (!edge(run[0]) || !edge(run[run.length - 1])) continue;
      const n = held(kind, marks, ids);
      if (n < need) continue;
      out.push({ score: n * 10 - (j - i) * 3 - i * 0.01, n, lines: j - i + 1, rows: run, ids, from: i, to: j });
    }
  }
  // a run of words inside one paragraph
  for (const row of text) {
    if (row.kind === 'v') continue;
    const mine = marks.filter((m) => m.row === row.id && !m.whole && (!m.row2 || m.row2 === row.id) && m.a >= row.first && m.z <= row.last);
    if (kind === 'beat') {
      // a scanned sentence of prose is shown whole or not at all
      if (marks.some((m) => m.row === row.id) && row.last - row.first < MAX_WORDS) out.push({ score: 10, n: 1, lines: 1, rows: [row], ids: new Set([row.id]) });
      continue;
    }
    for (const start of mine) {
      const inside = mine.filter((m) => m.a >= start.a && m.z < start.a + MAX_WORDS);
      if (inside.length < need) continue;
      const a0 = Math.min(...inside.map((m) => m.a)); const z0 = Math.max(...inside.map((m) => m.z));
      const [a, z] = toPoints(row, a0, z0, Math.max(3, Math.min(7, MAX_WORDS - (z0 - a0 + 1))));
      if (z - a + 1 < MIN_WORDS) continue;
      out.push({ score: inside.length * 10 - (z - a) / 10 - a * 0.001, n: inside.length, lines: 1, rows: [cutRow(row, a, z)], ids: new Set([row.id]), range: { [row.id]: [a, z] } });
    }
  }
  return out.sort((x, y) => y.score - x.score);
}

// A color that is shown must be named in the key: where the cut has left a
// tag with no label, its first kept mark takes the label the tag has elsewhere.
function keepLabels(kept, all) {
  const named = new Set(kept.filter((x) => x.label).map((x) => x.tag));
  const first = new Map();
  for (const x of all) if (x.label && !first.has(x.tag)) first.set(x.tag, x.label);
  const done = new Set();
  return kept.map((x) => {
    if (named.has(x.tag) || done.has(x.tag) || !first.has(x.tag)) return x;
    done.add(x.tag);
    return { ...x, label: first.get(x.tag) };
  });
}

// The lens with only the marks that fall inside what is shown.
function cutLens(lens, shown) {
  const has = (row, a, z) => { const r = shown.get(String(row)); return !!r && (a === undefined || (Math.floor(a) >= r.first && Math.floor(z) <= r.last)); };
  const out = { kind: lens.kind, label: lens.label || '' };
  switch (lens.kind) {
    case 'beat':
      out.meterName = lens.meterName; out.meter = lens.meter;
      out.scan = Object.fromEntries(Object.entries(lens.scan || {}).filter(([row]) => has(row)));
      break;
    case 'rhyme':
      out.ends = Object.fromEntries(Object.entries(lens.ends || {}).filter(([row]) => has(row)));
      out.tails = Object.fromEntries(Object.entries(lens.tails || {}).filter(([row]) => has(row)));
      out.threads = (lens.threads || []).map((t) => ({ sound: t.sound, at: (t.at || []).filter(([row, w]) => has(row, w, w)) })).filter((t) => t.at.length > 1);
      break;
    case 'figure':
      out.name = lens.name; out.plain = lens.plain; out.draw = lens.draw;
      out.parts = keepLabels((lens.parts || []).filter((p) => has(p.row, ...span(p.w))).map((p) => ({ row: p.row, w: p.w, tag: p.tag, label: p.label })), lens.parts || []);
      break;
    case 'word':
      out.notes = (lens.notes || []).filter((n) => has(n.row, ...span(n.w))).map((n) => ({ row: n.row, w: n.w, gloss: n.gloss }));
      break;
    case 'sentence':
      out.spans = keepLabels((lens.spans || []).filter((s) => has(s.from[0], s.from[1], s.from[1]) && has(s.to[0], s.to[1], s.to[1])).map((s) => ({ from: s.from, to: s.to, tag: s.tag, label: s.label })), lens.spans || []);
      break;
    case 'compare':
      out.ties = (lens.ties || []).filter((t) => t.a && t.b && has(t.a[0], t.a[1], t.a[2] === undefined ? t.a[1] : t.a[2]) && has(t.b[0], t.b[1], t.b[2] === undefined ? t.b[1] : t.b[2])).map((t) => ({ a: t.a, b: t.b }));
      break;
    default:
  }
  return out;
}

// One specimen: the rows, the second version if it is wanted, and the lens cut to them.
function specimen(piece, plate, li, win) {
  const lens = plate.lenses[li];
  const text = (plate.rows || []).filter((r) => !r.aside);
  const pairRows = plate.pair ? plate.pair.rows : [];
  const interlinear = !!plate.pair && !plate.beside && plate.under !== false && pairRows.length === text.length;
  const out = { id: `${piece.id}-${plate.id}-${li}`, src: plate.src, lang: plate.lang, heading: '', rows: [] };
  // the lines, with what stands between them
  const firstAt = plate.rows.findIndex((r) => r.id === win.rows[0].id);
  const lastAt = plate.rows.findIndex((r) => r.id === win.rows[win.rows.length - 1].id);
  const between = plate.rows.slice(firstAt, lastAt + 1).filter((r) => r.aside);
  if (between.some((r) => r.aside === 's')) {
    for (let k = firstAt - 1; k >= 0 && plate.rows[k].aside; k--) if (plate.rows[k].aside === 's') { out.rows.push(plate.rows[k]); break; }
  }
  for (const r of plate.rows.slice(firstAt, lastAt + 1)) {
    if (r.aside) { if (r.aside === 's') out.rows.push(r); continue; }
    out.rows.push(win.rows.find((x) => x.id === r.id) || r);
  }
  const shown = new Map(out.rows.filter((r) => !r.aside).map((r) => [r.id, r]));
  if (plate.pair) {
    if (interlinear && win.from !== undefined) {
      out.pair = { label: plate.pair.label, src: plate.pair.src, lang: plate.pair.lang, rows: pairRows.slice(win.from, win.to + 1) };
    } else if (lens.kind === 'compare') {
      // the words of the second version that the ties shown here reach
      const ties = places(lens).filter((m) => { const r = shown.get(m.row); return r && m.a >= r.first && m.z <= r.last; });
      const byRow = new Map();
      for (const t of ties) byRow.set(t.b.row, (byRow.get(t.b.row) || []).concat(t));
      const best = [...byRow.entries()].sort((x, y) => y[1].length - x[1].length)[0];
      if (!best) return null;
      const row = pairRows.find((r) => r.id === best[0]);
      if (!row) return null;
      let list = best[1].slice().sort((x, y) => x.b.a - y.b.a);
      const widthOf = (l) => Math.max(...l.map((t) => t.b.z)) - Math.min(...l.map((t) => t.b.a)) + 1;
      while (list.length > 1 && widthOf(list) > MAX_WORDS * 1.4) list = list.length > 2 && (list[1].b.a - list[0].b.a) > (list[list.length - 1].b.a - list[list.length - 2].b.a) ? list.slice(1) : list.slice(0, -1);
      if (row.kind === 'v') out.pair = { label: plate.pair.label, src: plate.pair.src, lang: plate.pair.lang, rows: [row] };
      else {
        const a0 = Math.min(...list.map((t) => t.b.a)); const z0 = Math.max(...list.map((t) => t.b.z));
        const [a, z] = toPoints(row, a0, z0, 5);
        out.pair = { label: plate.pair.label, src: plate.pair.src, lang: plate.pair.lang, rows: [cutRow(row, a, z)] };
      }
      out.beside = true; // one under the other, each under its own name
      out.label = plate.label;
    }
    if (out.pair) for (const r of out.pair.rows) shown.set(r.id, r);
  }
  const cut = cutLens(lens, shown);
  const count = (cut.parts || cut.notes || cut.spans || cut.ties || Object.keys(cut.scan || cut.ends || {})).length;
  if (!count) return null;
  out.lenses = [cut];
  const words = out.rows.filter((r) => !r.aside).reduce((n, r) => n + (r.last - r.first + 1), 0);
  return { piece: piece.id, kind: lens.kind, plate: plate.id, lens: li, n: win.n, lines: out.rows.filter((r) => !r.aside).length, words, spec: out };
}

// every specimen a piece could give, the best of each kind first
export function specimensOf(piece) {
  const out = [];
  for (const plate of piece.plates || []) {
    if (plate.noText) continue;
    (plate.lenses || []).forEach((lens, li) => {
      if (!WAYS.includes(lens.kind)) return;
      // on the front page "two versions" means an original and its English; two places of one work
      // set together are shown there only when chosen by hand
      if (lens.kind === 'compare' && (!plate.pair || (plate.lang || 'en') === (plate.pair.lang || 'en'))) return;
      const w = windows(plate, lens)[0];
      if (!w) return;
      const s = specimen(piece, plate, li, w);
      if (s) out.push({ ...s, score: w.score });
    });
  }
  return out;
}

// The small words of a card, set by hand where the piece's own were written for
// the whole passage and the card shows two lines of it:
//   say: { measure, plain, label, pairLabel, keys: { "the piece's label": "the card's" } }
// measure is the line after "The measure", plain the words under a figure's name,
// label and pairLabel stand over the two versions, keys renames a color's label.
// A word of `say` that finds nothing to replace is a problem, so that none goes stale.
function resay(s, say, id) {
  if (!s || !say) return s;
  const lens = s.spec.lenses[0];
  const miss = (what) => { throw new Error(`front.json: ${id} says "${what}" and its card has no such thing`); };
  for (const [k, v] of Object.entries(say)) {
    if (k === 'measure') { if (lens.kind !== 'beat') miss(k); lens.meterName = v; }
    else if (k === 'plain') { if (lens.kind !== 'figure') miss(k); lens.plain = v; }
    else if (k === 'label') { if (!s.spec.beside) miss(k); s.spec.label = v; }
    else if (k === 'pairLabel') { if (!s.spec.pair) miss(k); s.spec.pair = { ...s.spec.pair, label: v }; }
    else if (k === 'keys') {
      const items = lens.parts || lens.spans || [];
      for (const [from, to] of Object.entries(v)) {
        const hit = items.filter((it) => it.label === from);
        if (!hit.length) miss(`keys: ${from}`);
        for (const it of hit) it.label = to;
      }
    } else miss(k);
  }
  return s;
}

// A specimen chosen by hand: { piece, plate, lens, rows: ["225.0", "225.1"] } or
// { piece, plate, lens, row: "2.0", words: [111, 129] } for part of a paragraph.
export function chosen(piece, c) {
  const plate = (piece.plates || []).find((p) => p.id === c.plate);
  if (!plate) throw new Error(`front.json: ${piece.id} has no plate "${c.plate}"`);
  const li = typeof c.lens === 'number' ? c.lens : plate.lenses.findIndex((l) => l.kind === c.lens);
  if (!plate.lenses[li]) throw new Error(`front.json: plate ${c.plate} of ${piece.id} has no lens ${c.lens}`);
  const text = plate.rows.filter((r) => !r.aside);
  let win;
  if (c.rows) {
    const rows = c.rows.map((id) => text.find((r) => r.id === String(id)));
    if (rows.some((r) => !r)) throw new Error(`front.json: ${piece.id}/${c.plate} has no such rows as ${c.rows.join(', ')}`);
    win = { rows, n: 0, from: text.indexOf(rows[0]), to: text.indexOf(rows[rows.length - 1]) };
  } else if (c.row) {
    const row = text.find((r) => r.id === String(c.row));
    if (!row) throw new Error(`front.json: ${piece.id}/${c.plate} has no row ${c.row}`);
    win = { rows: [cutRow(row, c.words[0], c.words[1])], n: 0 };
  } else {
    win = windows(plate, plate.lenses[li])[0];
  }
  return win ? resay(specimen(piece, plate, li, win), c.say, piece.id) : null;
}

// A specimen as a card: whose it is, the lines, and where in the piece it opens.
// (The class page cuts its cards the same way: build/class.mjs.)
export function cardOf(p, s) {
  const src = (p.texts || []).find((t) => `${t.text}/${t.part}` === s.spec.src) || {};
  return { piece: s.piece, kind: s.kind, author: p.author, workTitle: p.workTitle, title: p.title, part: src.label || '', translator: src.translator || null, original: !!src.original, plate: s.spec, at: { plate: s.plate, lens: s.lens } };
}

export function buildFront({ list = false } = {}) {
  const index = JSON.parse(fs.readFileSync(path.join(PIECES, 'index.json'), 'utf8'));
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'remake/pieces.json'), 'utf8'));
  const cfgFile = path.join(ROOT, 'remake/front.json');
  const cfg = fs.existsSync(cfgFile) ? JSON.parse(fs.readFileSync(cfgFile, 'utf8')) : {};
  const pieces = new Map();
  for (const row of index) {
    const f = path.join(PIECES, `${row.id}.json`);
    if (fs.existsSync(f)) pieces.set(row.id, JSON.parse(fs.readFileSync(f, 'utf8')));
  }
  const all = new Map(); // piece -> specimens
  for (const [id, piece] of pieces) all.set(id, specimensOf(piece));
  if (list) {
    for (const [id, specs] of all) console.log(`${id}\n${specs.map((s) => `   ${s.kind.padEnd(9)} ${s.plate.padEnd(12)} marks ${String(s.n).padStart(2)}  lines ${s.lines}  words ${String(s.words).padStart(3)}  ${s.spec.rows.filter((r) => !r.aside).map((r) => r.words.slice(r.first, r.last + 1).map((w) => w.t).join(' ')).join(' / ').slice(0, 110)}`).join('\n')}`);
  }

  const problems = [];

  // the specimen at the head of the page
  let heroSpec = null;
  if (cfg.hero && pieces.get(cfg.hero.piece)) {
    try { heroSpec = chosen(pieces.get(cfg.hero.piece), cfg.hero); } catch (e) { problems.push(e.message); }
    // the piece it comes from shows another of its lenses further down
    if (heroSpec && all.get(heroSpec.piece).some((s) => s.kind !== heroSpec.kind)) all.set(heroSpec.piece, all.get(heroSpec.piece).filter((s) => s.kind !== heroSpec.kind));
  }

  // which lens each piece shows on the front page: the one chosen by hand, or else the kind fewest pieces show
  const choices = cfg.choices || {};
  const assigned = new Map();
  const tally = Object.fromEntries(WAYS.map((k) => [k, 0]));
  for (const [id, c] of Object.entries(choices)) {
    const piece = pieces.get(id);
    if (!piece) continue;
    try { const s = chosen(piece, c); if (s) { assigned.set(id, s); tally[s.kind]++; } else problems.push(`front.json: nothing to show for ${id}`); } catch (e) { problems.push(e.message); }
  }
  const have = (id) => [...new Set((all.get(id) || []).map((s) => s.kind))];
  const rest = [...pieces.keys()].filter((id) => !assigned.has(id) && have(id).length).sort((x, y) => have(x).length - have(y).length);
  const supply = Object.fromEntries(WAYS.map((k) => [k, rest.filter((id) => have(id).includes(k)).length]));
  for (const id of rest) {
    const kind = have(id).sort((x, y) => tally[x] - tally[y] || supply[x] - supply[y] || WAYS.indexOf(x) - WAYS.indexOf(y))[0];
    const best = all.get(id).filter((s) => s.kind === kind).sort((x, y) => y.score - x.score)[0];
    assigned.set(id, best); tally[kind]++;
  }

  const card = (s) => cardOf(pieces.get(s.piece), s);
  const hero = heroSpec ? { ...card(heroSpec), note: cfg.hero.note || '' } : null;
  // The cards of a way stand in the order of Auden's list, unless remake/front.json gives the way an order of its
  // own: "order": { "figure": ["henry-iv-2", ...] }. On a wide screen the cards of a way run down one column and
  // then down a second, so the order decides which cards share a column and how evenly the two end. An order
  // names every card of its way once and nothing else; a stale one is refused, and the list's order stands.
  const order = cfg.order || {};
  for (const k of Object.keys(order)) if (!WAYS.includes(k)) problems.push(`front.json: "order" names ${k}, which is not one of ${WAYS.join(', ')}`);
  const inWay = (kind) => {
    const ids = index.filter((row) => assigned.has(row.id) && assigned.get(row.id).kind === kind).map((row) => row.id);
    const want = order[kind];
    if (!want) return ids;
    const out = ids.filter((id) => !want.includes(id)); const extra = want.filter((id) => !ids.includes(id));
    const twice = new Set(want).size !== want.length;
    if (out.length || extra.length || twice) {
      problems.push(`front.json: the order for ${kind}${out.length ? ` leaves out ${out.join(', ')}` : ''}${out.length && extra.length ? ' and' : ''}${extra.length ? ` names ${extra.join(', ')}, not among its cards` : ''}${twice ? '; a card is named twice' : ''}`);
      return ids;
    }
    return want;
  };
  const front = {
    hero,
    ways: WAYS.map((kind) => ({ kind, specs: inWay(kind).map((id) => card(assigned.get(id))) })),
    // every work on the list, in its order; one whose piece is not made yet is named and has no page
    works: manifest.map((entry) => {
      const row = index.find((r) => r.id === entry.id);
      return row ? { id: row.id, work: row.work, author: row.author, workTitle: row.workTitle, title: row.title, where: row.where, lenses: row.lenses }
        : { id: entry.id, work: entry.work, author: entry.author, workTitle: entry.title, toCome: true };
    }),
  };
  // (the names of the afternoons of the class page, which build/class.mjs adds, are kept when the front page is built again)
  try { const was = JSON.parse(fs.readFileSync(path.join(OUT, 'front.json'), 'utf8')); if (was.klass) front.klass = was.klass; } catch (e) { /* no front page yet */ }
  fs.writeFileSync(path.join(OUT, 'front.json'), `${JSON.stringify(front)}\n`);
  const none = [...pieces.keys()].filter((id) => !assigned.has(id));
  console.log(`front page: ${WAYS.map((k) => `${k} ${tally[k]}`).join(', ')}${none.length ? `; no specimen: ${none.join(' ')}` : ''}; ${Math.round(fs.statSync(path.join(OUT, 'front.json')).size / 1024)} KB`);
  return problems;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  const problems = buildFront({ list: process.argv.includes('--list') });
  if (problems.length) { console.log(`PROBLEMS\n  ${problems.join('\n  ')}`); process.exit(2); }
}
