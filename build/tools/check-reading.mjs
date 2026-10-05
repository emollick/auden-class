// Check a reading and print it back as a proof.
// usage: node build/tools/check-reading.mjs <pieceId | path/to/reading.json> [--quiet]
//
// A reading points at the words of a text by row and word number and never
// copies them out. This tool looks every pointer up in the hosted text and
// prints what it found, so that whoever wrote the reading can see that each
// mark sits on the word it was meant for. It ends with PROBLEMS (which must
// be mended) and WARNINGS (which must each be read), and then with the
// PRINTED NOTES: working words left in what the page prints for a reader
// (remake/EXAMINER.md, "The printed notes"). With --print these count too.
// The format is described in remake/POET.md.
import fs from 'node:fs';
import path from 'node:path';
import { tokens, syllables, wordParts, partOf } from '../../site/js/kit/syllables.js';
import { printedOf, faultsOf, linksOf } from '../lib/printed.mjs';

const ROOT = path.resolve(import.meta.dirname, '../..');
const TEXTS = path.join(ROOT, 'site/data/texts');
const arg = process.argv[2];
const quiet = process.argv.includes('--quiet');
const strict = process.argv.includes('--print');
if (!arg) { console.log('usage: node build/tools/check-reading.mjs <pieceId | path/to/reading.json> [--quiet]'); process.exit(1); }
const file = arg.endsWith('.json') ? path.resolve(arg) : path.join(ROOT, 'remake/works', arg, 'reading.json');

const problems = [];
const warnings = [];
const say = (...a) => { if (!quiet) console.log(...a); };
const bad = (where, msg) => problems.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

let reading;
try { reading = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) {
  console.log(`PROBLEMS\n  ${file}: cannot be read as JSON: ${e.message}`);
  process.exit(2);
}

// ----- the hosted texts -----
const partCache = new Map();
function loadPart(src) {
  if (partCache.has(src)) return partCache.get(src);
  const m = String(src || '').match(/^([a-z0-9-]+)\/([a-z0-9-]+)$/);
  let part = null;
  if (m) {
    const f = path.join(TEXTS, m[1], `${m[2]}.json`);
    if (fs.existsSync(f)) part = JSON.parse(fs.readFileSync(f, 'utf8'));
  }
  partCache.set(src, part);
  return part;
}
const rowsOfBlock = (blk) => (blk.k === 'v' ? blk.lines : [blk.text || '']);
// the language a text is in, which decides how its words divide into syllables
const langCache = new Map();
function langOf(src) {
  if (langCache.has(src)) return langCache.get(src);
  const [textId, partId] = String(src || '').split('/');
  let lang = 'en';
  const f = path.join(TEXTS, textId, 'index.json');
  if (fs.existsSync(f)) { const idx = JSON.parse(fs.readFileSync(f, 'utf8')); lang = idx.lang || ((idx.parts || []).find((x) => x.id === partId) || {}).lang || 'en'; }
  langCache.set(src, lang);
  return lang;
}

// "225.0-225.6", "227.1", "12.0[35-80]" (words 35 to 80 of that row)
export function expandRows(src, specs, where) {
  const part = loadPart(src);
  const out = [];
  if (!part) { bad(where, `no hosted text "${src}" (it is textId/partId, as show.mjs lists them)`); return out; }
  for (const spec of specs || []) {
    const m = String(spec).match(/^(\d+)\.(\d+)(?:-(\d+)\.(\d+))?(?:\[(\d+)-(\d+)\])?$/);
    if (!m) { bad(where, `cannot read the row "${spec}" (write 225.0, 225.0-225.6 or 12.0[35-80])`); continue; }
    const b1 = +m[1]; const r1 = +m[2];
    const b2 = m[3] === undefined ? b1 : +m[3]; const r2 = m[4] === undefined ? r1 : +m[4];
    if (m[5] !== undefined && (b1 !== b2 || r1 !== r2)) { bad(where, `"${spec}": a word range goes with a single row`); continue; }
    for (let b = b1; b <= b2; b++) {
      const blk = part.blocks[b];
      if (!blk) { bad(where, `"${spec}": ${src} has no block ${b}`); break; }
      if (!['v', 'p', 'q'].includes(blk.k)) { if (b === b1 || b === b2) bad(where, `"${spec}": block ${b} of ${src} is "${blk.k}" (a speaker, direction or heading), not text`); continue; }
      const rows = rowsOfBlock(blk);
      const from = b === b1 ? r1 : 0;
      const to = b === b2 ? r2 : rows.length - 1;
      for (let r = from; r <= to; r++) {
        if (rows[r] === undefined) { bad(where, `"${spec}": block ${b} of ${src} has no row ${r}`); break; }
        const toks = tokens(rows[r]);
        const row = { id: `${b}.${r}`, kind: blk.k, toks, first: 0, last: toks.length - 1, lang: langOf(src) };
        if (m[5] !== undefined) {
          row.first = +m[5]; row.last = +m[6];
          if (row.first > row.last || row.last >= toks.length) bad(where, `"${spec}": the row has words 0 to ${toks.length - 1}`);
        }
        out.push(row);
      }
    }
  }
  return out;
}

// ----- marks -----
// `~` and `<` are syllables that are not counted: `~` runs into the syllable after it, `<` into the one before
const MARKS = new Set(['/', 'x', '\\', '-', 'u', '~', '<', '.']);
const UNCOUNTED = new Set(['~', '<']);
const lettersOf = (tok) => tok.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');

// A word number is a whole number, or names one of two words that a dash joins
// with no space: 6.1 is what stands before the dash in word 6, 6.2 what stands after.
const isWordNo = (x) => typeof x === 'number' && x >= 0 && Math.abs(x * 10 - Math.round(x * 10)) < 1e-6;
// a token as the proof lists it: "6:said—nothing [6.1 said, 6.2 nothing]"
const listed = (t, i) => { const p = wordParts(t); return p.length > 1 ? `${i}:${t} [${p.map((x, k) => `${i}.${k + 1} ${t.slice(x.from, x.to)}`).join(', ')}]` : `${i}:${t}`; };

function checkWordRef(where, rowsById, rowId, a, b) {
  const row = rowsById.get(String(rowId));
  if (!row) { bad(where, `row ${rowId} is not on this plate`); return null; }
  const lo = a; const hi = b === undefined ? a : b;
  const wl = Math.floor(lo); const wh = Math.floor(hi);
  if (!isWordNo(lo) || !isWordNo(hi) || hi < lo || wh >= row.toks.length) { bad(where, `row ${rowId} has words 0 to ${row.toks.length - 1}; you gave ${lo}${hi !== lo ? `-${hi}` : ''}`); return null; }
  for (const x of [lo, hi]) {
    const h = partOf(x);
    if (!h) continue;
    const tok = row.toks[Math.floor(x)]; const n = wordParts(tok).length;
    if (n < 2) { bad(where, `word ${Math.floor(x)} of row ${rowId} ("${tok}") is not two words joined by a dash, so there is no ${x}; write ${Math.floor(x)}`); return null; }
    if (h > n) { bad(where, `word ${Math.floor(x)} of row ${rowId} ("${tok}") has ${n} parts; you gave ${x}`); return null; }
  }
  // (a word that "stage" sets apart as a name or a direction is outside the verse on purpose)
  const apart = (i) => !!row.set && row.set.has(i);
  let outside = false;
  for (let i = wl; i <= wh; i++) if ((i < row.first || i > row.last) && !apart(i)) outside = true;
  if (outside) warn(where, `words ${lo}-${hi} of row ${rowId} are outside the part of the row shown (${row.first}-${row.last})`);
  // the words the numbers land on, with only the named part of a joined word at either end
  const got = row.toks.slice(wl, wh + 1);
  const cut = (tok, from, to) => { const p = wordParts(tok); return tok.slice(from > 1 ? p[from - 1].from : 0, to < p.length ? p[to - 1].to : tok.length); };
  if (wl === wh) { if (partOf(lo) || partOf(hi)) got[0] = cut(got[0], partOf(lo) || 1, partOf(hi) || wordParts(got[0]).length); }
  else {
    if (partOf(lo)) got[0] = cut(got[0], partOf(lo), wordParts(got[0]).length);
    if (partOf(hi)) got[got.length - 1] = cut(got[got.length - 1], 1, partOf(hi));
  }
  return got.join(' ');
}

const LLM = [
  [/—|–/, 'a dash; write a comma, a colon or two sentences'],
  [/\b(delve|tapestry|testament to|underscore[sd]?|showcas\w+|pivotal|nuanced?|multifaceted|realm|landscape of|interplay|juxtapos\w+|resonat\w+|evocative|poignant|profound(ly)?|masterful(ly)?|seamless(ly)?|vivid(ly)?|striking(ly)?|rich tapestry|speaks to|invites us|reminds us|serves as|stands as|a sense of)\b/i, 'a stock word of machine prose'],
  [/\bnot (just|only|merely)\b[^.]{0,80}\bbut\b/i, '"not just ... but": say the thing itself'],
  [/\b(it is worth noting|it's worth noting|in other words|at its core|in essence|ultimately|crucially|importantly|interestingly|notably)\b/i, 'a filler phrase'],
  [/\b(we see|we can see|we feel|we hear|the reader (feels|senses|is))\b/i, 'tells the reader what they feel; say what the words do'],
  [/\b(enact(s|ed|ing)?|embod(y|ies|ied)|mirror(s|ed|ing)?|echo(es|ed|ing)?|captur(es|ed|ing)|evok(es|ed|ing)|convey(s|ed|ing)?|suggest(s|ed|ing)?|offer(s|ed|ing)?|as if|as though|a kind of)\b/i, 'RULE THREE: a claim about what the passage does to someone, or stands for. Keep it only if Auden, a source or the lines themselves say it'],
];
function lint(where, text, max) {
  if (typeof text !== 'string' || !text.trim()) { bad(where, 'is empty'); return; }
  const words = text.replace(/<[^>]+>/g, '').trim().split(/\s+/).length;
  if (max && words > max) warn(where, `${words} words; keep it under ${max}`);
  for (const [re, why] of LLM) { const m = text.match(re); if (m) warn(where, `"${m[0]}": ${why}`); }
}

function checkBeat(where, lens, rowsById) {
  const scan = lens.scan || {};
  if (!Object.keys(scan).length) bad(where, 'beat has no "scan"');
  for (const [rowId, s] of Object.entries(scan)) {
    const row = rowsById.get(rowId);
    const w = `${where} row ${rowId}`;
    if (!row) { bad(w, 'is not on this plate'); continue; }
    const groups = String(s.voice || '').trim().split(/\s+/).filter((g) => g && !/^\|+$/.test(g));
    const shown = row.toks.slice(row.first, row.last + 1);
    if (groups.length !== shown.length) { bad(w, `"voice" has ${groups.length} groups for ${shown.length} words (${shown.map((t, i) => `w${row.first + i}:${t}`).join(' ')})`); continue; }
    const out = [];
    let count = 0;
    let ok = true;
    groups.forEach((g0, i) => {
      // a pause at the dash inside two words joined by one is written | inside the group: it is no syllable
      const g = g0.replace(/\|/g, '');
      const k = row.first + i;
      const tok = row.toks[k];
      for (const c of g) if (!MARKS.has(c)) { bad(w, `the mark "${c}" in "${g}" is not one of / x \\ - u ~ < .`); ok = false; }
      let syl = syllables(tok, row.lang);
      const div = s.div && s.div[String(k)];
      if (div !== undefined) {
        if (typeof div !== 'string' || div.split('|').join('') !== tok) { bad(w, `div for w${k} must be the word itself with | between syllables: the word is "${tok}"`); ok = false; } else syl = div.split('|');
      }
      if (syl.length !== g.length) { bad(w, `w${k} "${tok}" has ${syl.length} syllable${syl.length === 1 ? '' : 's'} (${syl.join('·')}) and ${g.length} mark${g.length === 1 ? '' : 's'} ("${g}"). If the word divides otherwise, add "div": {"${k}": "${tok.length > 3 ? `${tok.slice(0, 2)}|${tok.slice(2)}` : tok}"} with the | where the syllables part.`); ok = false; return; }
      if (g[0] === '<' && i === 0) { bad(w, `the first syllable of the row is marked "<" (not counted, running into the syllable before it), and no syllable stands before it`); ok = false; }
      syl.forEach((sy, j) => { out.push(`${sy}${g[j]}`); if (!UNCOUNTED.has(g[j])) count++; });
    });
    if (!ok) continue;
    const meter = String(s.meter || lens.meter || '').replace(/[\s|]/g, '');
    for (const c of meter) if (!MARKS.has(c)) bad(w, `the mark "${c}" in the meter is not one of / x \\ - u ~ < .`);
    if (!meter) warn(w, 'has no "meter" (give the pattern the line is measured against, one mark a syllable)');
    else if (meter.length !== count) bad(w, `the meter has ${meter.length} places and the voice ${count} counted syllables`);
    say(`      ${rowId}  ${out.join(' ')}${meter ? `\n      ${' '.repeat(rowId.length)}  meter ${meter}` : ''}`);
  }
  if (lens.points) lens.points.forEach((p, i) => { if (p.at) checkWordRef(`${where} points[${i}]`, rowsById, p.at[0], p.at[1], p.at[2]); lint(`${where} points[${i}].say`, p.say, 60); });
  // the remarks are numbered in the order they are listed, and each number stands after its word: they
  // read in order down the plate only if they are listed in the order of the passage
  if (lens.points) {
    const order = [...rowsById.keys()].map(String);
    const place = (p) => [order.indexOf(String(p.at[0])), p.at[2] === undefined ? p.at[1] : p.at[2]];
    const pinned = lens.points.map((p, i) => ({ p, i })).filter((x) => x.p.at && order.includes(String(x.p.at[0])));
    for (let k = 1; k < pinned.length; k++) {
      const a = place(pinned[k - 1].p); const z = place(pinned[k].p);
      if (z[0] < a[0] || (z[0] === a[0] && z[1] < a[1])) warn(`${where} points[${pinned[k].i}]`, `stands earlier in the passage than points[${pinned[k - 1].i}]: list the remarks in the order of the passage, so that their numbers run in order on the plate`);
    }
  }
}

function checkRhyme(where, lens, rowsById) {
  const by = {};
  for (const [rowId, letter] of Object.entries(lens.ends || {})) {
    const row = rowsById.get(rowId);
    if (!row) { bad(`${where} ends`, `row ${rowId} is not on this plate`); continue; }
    const last = lettersOf(row.toks[row.last]);
    let tail = lens.tails && lens.tails[rowId];
    if (tail !== undefined && (!Number.isInteger(tail) || tail < 1 || tail > last.length)) { bad(`${where} tails`, `row ${rowId} ends in "${last}" (${last.length} letters); you gave ${tail}`); tail = undefined; }
    (by[letter] = by[letter] || []).push(tail ? `${last.slice(0, last.length - tail)}[${last.slice(-tail)}]` : last);
  }
  for (const [letter, list] of Object.entries(by)) say(`      ${letter}: ${list.join(', ')}`);
  (lens.threads || []).forEach((t, i) => {
    const got = [];
    for (const at of t.at || []) {
      const [rowId, w, from, n] = at;
      const row = rowsById.get(String(rowId));
      if (!row || !row.toks[w]) { bad(`${where} threads[${i}]`, `no word ${w} in row ${rowId}`); continue; }
      const tok = row.toks[w];
      if (!Number.isInteger(from) || !Number.isInteger(n) || from < 0 || n < 1 || from + n > tok.length) { bad(`${where} threads[${i}]`, `"${tok}" has ${tok.length} characters; you gave from ${from}, ${n}`); continue; }
      got.push(`${tok.slice(0, from)}[${tok.slice(from, from + n)}]${tok.slice(from + n)}`);
    }
    say(`      thread ${t.sound || i}: ${got.join(' ')}`);
  });
}

function checkParts(where, list, rowsById, label) {
  (list || []).forEach((p, i) => {
    const w = Array.isArray(p.w) ? p.w : [p.w, p.w];
    const got = checkWordRef(`${where} ${label}[${i}]`, rowsById, p.row, w[0], w[1]);
    if (got !== null) say(`      ${p.tag || p.gloss || p.label || i}: ${p.row} w${w[0]}${w[1] !== w[0] ? `-${w[1]}` : ''}  "${got}"`);
    if (p.gloss !== undefined) lint(`${where} ${label}[${i}].gloss`, p.gloss, 8);
    if (p.note !== undefined) lint(`${where} ${label}[${i}].note`, p.note, 45);
  });
}

function checkSpans(where, lens, rowsById) {
  (lens.spans || []).forEach((sp, i) => {
    const a = sp.from || []; const b = sp.to || [];
    const one = checkWordRef(`${where} spans[${i}].from`, rowsById, a[0], a[1]);
    const two = checkWordRef(`${where} spans[${i}].to`, rowsById, b[0], b[1]);
    if (one !== null && two !== null) say(`      ${sp.tag || sp.label || i}: from ${a[0]} w${a[1]} "${one}" to ${b[0]} w${b[1]} "${two}"`);
  });
}

// RULE THREE: nothing in a caption is made up. Each lens says what its caption stands on.
const RULE3 = 'RULE THREE is new (2026-10-03, 02:20 UTC): read remake/BRIEF.md again, and "Auden\'s view, the caption, the why and the grounds" in remake/POET.md.';
const GROUND_KINDS = ['plate', 'text', 'source', 'auden'];
let told = false;
function checkGrounds(where, lens) {
  if (typeof lens.caption !== 'string') return;
  const g = lens.grounds;
  if (!Array.isArray(g) || !g.length) {
    bad(where, told ? 'has no "grounds" (rule three, as above)' : `has no "grounds". ${RULE3} Nothing in a caption may be made up. Go through the caption and the why a sentence at a time, cut every sentence that stands on nothing, and list what the rest stands on: "grounds": [{ "claim": "...", "kind": "plate" | "text" | "source" | "auden", "source": "the dictionary entry, passage, or book and page" }]`);
    told = true;
    return;
  }
  g.forEach((x, i) => {
    const w = `${where} grounds[${i}]`;
    if (!x || typeof x !== 'object') { bad(w, 'must be { "claim", "kind", "source" }'); return; }
    if (!x.claim) bad(w, 'has no "claim": the claim in a few words');
    if (!GROUND_KINDS.includes(x.kind)) bad(w, `"kind" must be one of ${GROUND_KINDS.join(', ')}: seen in the marks, plainly said by the lines, a fact with a source you opened, or said by Auden at a page`);
    if ((x.kind === 'source' || x.kind === 'auden') && !x.source) bad(w, `a ground of kind "${x.kind}" needs its "source" (the entry, the passage, or the book and page)`);
  });
  say(`      stands on: ${g.map((x) => `${x.kind}${x.source ? ` (${x.source})` : ''}`).join('; ')}`);
}

// ----- the reading -----
say(`${path.relative(ROOT, file)}`);
for (const key of ['piece', 'title', 'where', 'about', 'plates', 'auden', 'sources']) if (reading[key] === undefined) bad('reading', `has no "${key}"`);
lint('about', reading.about, 90);
if (reading.view === undefined) bad('reading', `has no "view". ${RULE3} Auden's own view of the work or the passage leads the piece: "view": { "says": your paraphrase (at most 70 words), "quote": at most 25 of his words (optional), "source": book, year, page, "checked": where you read it }. If nothing he said about this work is on record: "view": null and "viewWhy": "..."`);
else if (reading.view === null) { if (!reading.viewWhy) bad('view', 'is null; say in "viewWhy" what you searched and did not find'); }
else {
  lint('view.says', reading.view.says, 75);
  if (!reading.view.source) bad('view', 'has no "source" (book, year, page)');
  if (!reading.view.checked) bad('view', 'has no "checked": where you read it yourself');
  if (reading.view.quote && reading.view.quote.split(/\s+/).length > 40) bad('view.quote', 'is over 40 words; his prose is in copyright, quote a line or two');
  say(`  view: ${reading.view.source || ''}`);
}
const KINDS = ['beat', 'rhyme', 'figure', 'word', 'sentence', 'compare', 'shape'];
// "stage": which words of a row are a speaker's name or a stage direction, where the edition prints them in
// the line (build/pieces.mjs sets them apart: over the line and after it, or, with "inline", where they stand).
// Each row is given the first and last word of its verse as the build gives them, so that a scan is asked for
// those words only. The proof names the words by number.
function checkStage(pw, plate, rowsById) {
  const st = plate.stage;
  if (st === undefined) return;
  if (!st || typeof st !== 'object' || Array.isArray(st)) { bad(pw, '"stage" must be { rowId: { "name": 1, "dir": [3, 4], "inline": true } }'); return; }
  for (const [id, v] of Object.entries(st)) {
    const w = `${pw} stage ${id}`;
    const row = rowsById.get(id);
    if (!row) { bad(w, 'is not among the rows shown (a row of the second passage is named p:<row>)'); continue; }
    if (!v || typeof v !== 'object' || Array.isArray(v)) { bad(w, 'must be { "name": how many words, "dir": [first, last], "text": a name printed higher up, "inline": true }'); continue; }
    for (const k of Object.keys(v)) if (!['name', 'dir', 'text', 'inline'].includes(k)) bad(w, `does not know "${k}": it takes "name", "dir", "text" and "inline"`);
    const n = v.name === undefined ? 0 : v.name;
    if (!Number.isInteger(n) || n < 0 || n > row.toks.length) { bad(w, `"name" says how many words at the head of the row are the name: 0 to ${row.toks.length}`); continue; }
    if (v.text !== undefined && (typeof v.text !== 'string' || !v.text.trim())) bad(w, '"text" is the name as the edition prints it higher up');
    if (![undefined, false, true, 'name', 'dir'].includes(v.inline)) bad(w, '"inline" is true (the name and the directions stay in the line), "name" or "dir"');
    if ((v.inline === true || v.inline === 'name') && v.text) warn(w, 'a name given in "text" is not in the row and cannot stay in the line: it is set over the row');
    const dirs = v.dir === undefined ? [] : (Array.isArray(v.dir) && Array.isArray(v.dir[0]) ? v.dir : [v.dir]);
    const inName = (v.inline === true || v.inline === 'name') && n > 0 && !v.text;
    const inDir = v.inline === true || v.inline === 'dir';
    const taken = new Array(row.toks.length).fill(false); const kept = new Array(row.toks.length).fill(false);
    for (let i = 0; i < n; i++) { taken[i] = true; kept[i] = inName; }
    let ok = true;
    for (const d of dirs) {
      if (!Array.isArray(d) || d.length !== 2 || !Number.isInteger(d[0]) || !Number.isInteger(d[1]) || !(d[0] >= n && d[1] >= d[0] && d[1] < row.toks.length)) { bad(w, `cannot read the direction ${JSON.stringify(d)}: write [first word, last word], after the name; the row has words 0 to ${row.toks.length - 1}`); ok = false; continue; }
      for (let i = d[0]; i <= d[1]; i++) { taken[i] = true; kept[i] = inDir; }
    }
    if (!ok) continue;
    const verse = [];
    for (let i = row.first; i <= row.last; i++) if (!taken[i]) verse.push(i);
    if (verse.length) for (let i = verse[0]; i <= verse[verse.length - 1]; i++) if (taken[i] && !kept[i]) { bad(w, 'the words left to the line do not stand together: a direction in the middle of a line can only stay in it ("inline": true)'); break; }
    row.set = new Set(taken.map((t, i) => (t ? i : -1)).filter((i) => i >= 0));
    row.stays = taken.map((t, i) => (kept[i] && i >= row.first && i <= row.last ? i : -1)).filter((i) => i >= 0);
    if (verse.length) { row.first = verse[0]; row.last = verse[verse.length - 1]; } else if (!row.stays.length) row.gone = true;
    const span = (a, z) => (a === z ? `w${a}` : `w${a}-${z}`);
    say(`    stage: row ${id}: ${[n ? `name ${span(0, n - 1)}` : v.text ? 'a name printed higher up' : '', dirs.length ? `direction ${dirs.map((d) => span(d[0], d[1])).join(', ')}` : ''].filter(Boolean).join('; ')}; ${inName || inDir ? `${inName && (inDir || !dirs.length) ? 'left' : inName ? 'the name left' : 'the direction left'} in the line` : 'set over the line or after it'}${row.gone ? '; the row is nothing else, and is no row of the passage' : verse.length ? `; the verse is ${span(row.first, row.last)}` : '; the row is nothing else, and is set small'}`);
  }
}
// what a lens marks, row by row: [row, first word, last word, kind of mark]
const marksOfLens = (lens) => [
  ...(lens.parts || []).map((x) => { const w = Array.isArray(x.w) ? x.w : [x.w, x.w]; return [x.row, w[0], w[w.length - 1], 'a part']; }),
  ...(lens.notes || []).map((x) => { const w = Array.isArray(x.w) ? x.w : [x.w, x.w]; return [x.row, w[0], w[w.length - 1], 'note', x]; }),
  ...(lens.spans || []).flatMap((x) => [x.from && [x.from[0], x.from[1], x.from[1], 'a span'], x.to && [x.to[0], x.to[1], x.to[1], 'a span']]),
  ...(lens.ties || []).flatMap((x) => ['a', 'b'].map((k) => x[k] && [x[k][0], x[k][1], x[k][2] === undefined ? x[k][1] : x[k][2], 'a pair'])),
  ...(lens.points || []).map((x) => x.at && [x.at[0], x.at[1], x.at[2] === undefined ? x.at[1] : x.at[2], 'remark']),
  ...(lens.threads || []).flatMap((t) => (t.at || []).map((x) => [x[0], x[1], x[1], 'a sound'])),
].filter(Boolean);
// A row that "stage" takes out whole carries no mark. A name or a direction left in the line is no word of the
// verse: a note of a Word tab or a remark may stand on it, and nothing else; no scan passes over it.
function checkStaged(lw, lens, rowsById) {
  const rowOf = (id) => rowsById.get(String(id));
  const stays = (r, a, z) => !!r && Array.isArray(r.stays) && r.stays.some((i) => i >= Math.floor(a) && i <= Math.floor(z));
  for (const [id, a, z, what, note] of marksOfLens(lens)) {
    const r = rowOf(id);
    // (a gloss on a name or a direction that "stage" takes out of the line goes with it, as its English: the
    // build moves it there. A note with words of its own cannot follow.)
    let lifted = what === 'note' && !!r && !!r.set && typeof a === 'number' && typeof z === 'number';
    if (lifted) for (let i = Math.floor(a); i <= Math.floor(z); i++) if (!r.set.has(i) || (r.stays || []).includes(i)) lifted = false;
    if (lifted) { if (note && note.note) bad(lw, `has a note with words of its own on row ${id}, words ${a} to ${z}, which "stage" takes out of the line: only a gloss can go with them`); continue; }
    if (r && r.gone) bad(lw, `marks row ${id}, which "stage" takes out of the passage`);
    else if (what !== 'note' && what !== 'remark' && typeof a === 'number' && typeof z === 'number' && stays(r, a, z)) bad(lw, `${what} stands on words ${a} to ${z} of row ${id}, where "stage" leaves a name or a direction in the line: only a note of a Word tab or a remark may stand on it`);
  }
  for (const id of Object.keys(lens.scan || {})) { const r = rowOf(id); if (r && r.gone) bad(lw, `scans row ${id}, which "stage" takes out of the passage`); else if (r && stays(r, r.first, r.last)) bad(lw, `scans row ${id}, and "stage" leaves a name or a direction in the line among its words: a scan cannot pass over it`); }
  for (const id of Object.keys(lens.ends || {})) { const r = rowOf(id); if (r && r.gone) bad(lw, `gives a rhyme to row ${id}, which "stage" takes out of the passage`); else if (r && stays(r, r.last, r.last)) bad(lw, `gives row ${id} a rhyme, and the row ends in a name or a direction`); else if (r && Array.isArray(r.stays) && r.stays.some((i) => i > r.last)) warn(lw, `row ${id} ends on a rhyme and a direction stays in the line after it: the letter of the rhyme and its join would stand on the direction. Take the direction out of the line (leave "inline" out for this row, or give "inline": "name")`); }
}
// which parts of a figure a stroke joins, where the reading says so (kit/lens-figure.js)
function checkJoin(lw, lens) {
  const j = lens.join;
  if (j === undefined || j === 'none' || j === 'within') return;
  const parts = Array.isArray(lens.parts) ? lens.parts : [];
  const tags = new Set(parts.map((p) => p.tag));
  if (!Array.isArray(j)) { bad(lw, '"join" must be "none", "within", or a list of pairs: [["tag", "tag"]] or [[part, part]]'); return; }
  j.forEach((x, i) => {
    if (!Array.isArray(x) || x.length !== 2) { bad(lw, `join[${i}] must be a pair`); return; }
    if (typeof x[0] === 'number' && typeof x[1] === 'number') {
      for (const n of x) if (!Number.isInteger(n) || n < 0 || n >= parts.length) bad(lw, `join[${i}]: there is no part ${n} (parts are counted from 0, in the order "parts" lists them)`);
    } else if (typeof x[0] === 'string' && typeof x[1] === 'string') {
      for (const t of x) if (!tags.has(t)) bad(lw, `join[${i}]: no part has the tag "${t}"`);
    } else bad(lw, `join[${i}] must be two tags or two part numbers`);
  });
}
(reading.plates || []).forEach((plate, pi) => {
  const pw = `plate ${plate.id || pi}`;
  say(`\n  ${pw}  ${plate.text || '(no hosted text)'}${plate.heading ? `  "${plate.heading}"` : ''}`);
  const rowsById = new Map();
  if (plate.text) {
    const rows = expandRows(plate.text, plate.rows, pw);
    rows.forEach((r) => rowsById.set(r.id, r));
    let words = 0;
    rows.forEach((r) => { words += r.last - r.first + 1; say(`    ${r.id.padEnd(8)} ${r.toks.slice(r.first, r.last + 1).map((t, i) => listed(t, r.first + i)).join(' ')}`); });
    const verse = rows.filter((r) => r.kind === 'v').length;
    if (verse > 16) warn(pw, `${verse} lines of verse; a plate holds 2 to 14`);
    if (!verse && words > 130) warn(pw, `${words} words of prose; a plate holds about 30 to 110`);
    if (!rows.length) bad(pw, 'shows no rows');
  } else if (!plate.noText) bad(pw, 'has no "text" (for a work with no hosted text, set "noText": true and say why)');
  if (plate.pair) {
    const rows = expandRows(plate.pair.text, plate.pair.rows, `${pw} pair`);
    say(`    beside it: ${plate.pair.label || ''} ${plate.pair.text}`);
    rows.forEach((r) => { rowsById.set(`p:${r.id}`, r); say(`    p:${r.id.padEnd(6)} ${r.toks.slice(r.first, r.last + 1).map((t, i) => listed(t, r.first + i)).join(' ')}`); });
  }
  checkStage(pw, plate, rowsById);
  // where a line of verse turns on a narrow plate, if the reading says: { rowId: the word it turns after }
  if (plate.turn !== undefined) {
    if (!plate.turn || typeof plate.turn !== 'object' || Array.isArray(plate.turn)) bad(pw, '"turn" must be { rowId: the number of the word the line turns after }');
    else for (const [id, w] of Object.entries(plate.turn)) {
      const r = rowsById.get(id);
      // (a row of the version set beside the passage is named p:<row>, as the proof lists it)
      if (!r) bad(pw, `turn: the ${id.startsWith('p:') ? 'version beside the passage' : 'passage'} has no row ${id}`);
      else if (r.kind !== 'v') bad(pw, `turn: row ${id} is not a line of verse`);
      else if (!Number.isInteger(w) || w < r.first || w >= r.last) bad(pw, `turn: row ${id} cannot turn after word ${w}; give a word from ${r.first} to ${r.last - 1}`);
      else say(`    turn: row ${id} turns after "${r.toks[w]}"`);
    }
  }
  // Three more keys of a plate (build/pieces.mjs, at "Three things a reading may say"). The rows of one passage
  // in the order shown, without those that "stage" takes out whole:
  const shownIds = (second) => [...rowsById.keys()].filter((k) => k.startsWith('p:') === second && !rowsById.get(k).gone);
  // rows set deeper in, as the edition sets them: a list of rows and runs of rows
  if (plate.indent !== undefined) {
    if (!Array.isArray(plate.indent)) bad(pw, '"indent" must be a list of rows and runs of rows: ["5.0-5.3"] (a row of the second passage is p:<row>)');
    else for (const spec of plate.indent) {
      const m = String(spec).match(/^(p:)?(\d+\.\d+)(?:-(\d+\.\d+))?$/);
      if (!m) { bad(pw, `indent: cannot read "${spec}" (a row, "5.0", or a run of rows, "5.0-5.3")`); continue; }
      const ids = shownIds(!!m[1]);
      const a = ids.indexOf((m[1] || '') + m[2]); const z = m[3] === undefined ? a : ids.indexOf((m[1] || '') + m[3]);
      if (a < 0 || z < 0) bad(pw, `indent: "${spec}" names a row that is not among the rows shown`);
      else if (z < a) bad(pw, `indent: the rows of "${spec}" are not in order`);
      else say(`    indent: ${z - a + 1} row${z > a ? 's' : ''} set deeper in, ${ids[a]}${z > a ? ` to ${ids[z]}` : ''}`);
    }
  }
  // a stanza's space before a row where the kit sees no stanza (true), or none where it would set one (false)
  if (plate.stanza !== undefined) {
    const under = !!plate.pair && !plate.beside && plate.under !== false && shownIds(true).length === shownIds(false).length;
    if (!plate.stanza || typeof plate.stanza !== 'object' || Array.isArray(plate.stanza)) bad(pw, '"stanza" must be { rowId: true or false }');
    else for (const [id, v] of Object.entries(plate.stanza)) {
      const ids = shownIds(id.startsWith('p:')); const k = ids.indexOf(id);
      if (typeof v !== 'boolean') bad(pw, `stanza: row ${id} takes true (a stanza's space stands before it) or false (none does)`);
      else if (k < 0) bad(pw, `stanza: row ${id} is not among the rows shown`);
      else if (k === 0) bad(pw, `stanza: row ${id} is the first of its passage`);
      else if (id.startsWith('p:') && under) bad(pw, `stanza: the second passage is set line under line, and its rows part where the first passage's do; name the row of the first passage`);
      else say(`    stanza: ${v ? 'a stanza’s space' : 'no stanza’s space'} between rows ${ids[k - 1]} and ${id}${v ? ' (the build refuses it where a name, a direction or a sign of omission already stands there)' : ''}`);
    }
  }
  // the place line at the head of the plate in the reading's own words ("" for none)
  if (plate.place !== undefined) {
    if (typeof plate.place !== 'string') bad(pw, '"place" must be a line of words ("" for no place line)');
    else if ((plate.place.match(/\*/g) || []).length % 2) bad(pw, 'place: a title stands between two asterisks, and one asterisk has no fellow');
    else { say(`    place: ${plate.place.trim() ? `"${plate.place.trim()}"` : 'none'}`); if (plate.place.trim()) lint(`${pw} place`, plate.place, 16); }
  }
  if (!Array.isArray(plate.lenses) || !plate.lenses.length) bad(pw, 'has no lenses');
  (plate.lenses || []).forEach((lens, li) => {
    const lw = `${pw} lens ${li} (${lens.kind})`;
    say(`    lens ${li}: ${lens.kind}${lens.label ? ` "${lens.label}"` : ''}${lens.name ? ` ${lens.name}` : ''}`);
    if (!KINDS.includes(lens.kind)) { bad(lw, `kind must be one of ${KINDS.join(', ')}`); return; }
    checkStaged(lw, lens, rowsById);
    if (lens.kind === 'beat') checkBeat(lw, lens, rowsById);
    if (lens.kind === 'rhyme') checkRhyme(lw, lens, rowsById);
    if (lens.kind === 'figure') { if (!lens.name) bad(lw, 'a figure needs its "name"'); if (!lens.plain) bad(lw, 'a figure needs "plain": the term said in plain words'); else lint(`${lw} plain`, lens.plain, 30); checkParts(lw, lens.parts, rowsById, 'parts'); checkJoin(lw, lens); }
    if (lens.kind === 'word') checkParts(lw, lens.notes, rowsById, 'notes');
    if (lens.kind === 'sentence') checkSpans(lw, lens, rowsById);
    if (lens.kind === 'sentence' || lens.kind === 'figure') {
      const kinds = new Set((lens.spans || lens.parts || []).map((x) => x.tag)).size;
      if (kinds > 8) bad(lw, `${kinds} kinds of mark (tags); the page has eight colors, and a reader can hold about four`);
      else if (kinds > 5) warn(lw, `${kinds} kinds of mark (tags) in one lens; a reader can hold about four. Join kinds that do the same work, or show fewer`);
    }
    if (lens.kind === 'compare') (lens.ties || []).forEach((t, i) => { const a = checkWordRef(`${lw} ties[${i}].a`, rowsById, t.a[0], t.a[1], t.a[2]); const b = checkWordRef(`${lw} ties[${i}].b`, rowsById, t.b[0], t.b[1], t.b[2]); if (a !== null && b !== null) say(`      "${a}" = "${b}"`); if (t.say) lint(`${lw} ties[${i}].say`, t.say, 40); });
    if (lens.kind === 'shape') { if (!lens.what) bad(lw, 'a shape needs "what": the thing the diagram shows'); if (!lens.facts) bad(lw, 'a shape needs "facts": the numbers and names the diagram is drawn from'); }
    lint(`${lw} caption`, lens.caption, 120);
    if (typeof lens.caption === 'string' && !lens.why) bad(lw, 'has no "why": one sentence, the reason the caption arrives at');
    if (lens.why) lint(`${lw} why`, lens.why, 40);
    checkGrounds(lw, lens);
  });
});
(reading.auden || []).forEach((a, i) => {
  lint(`auden[${i}].says`, a.says, 110);
  if (!a.source) bad(`auden[${i}]`, 'has no "source" (book, year, page)');
  if (!a.checked) bad(`auden[${i}]`, 'has no "checked": where you read it yourself');
  if (a.quote && a.quote.split(/\s+/).length > 40) bad(`auden[${i}].quote`, 'is over 40 words; his prose is in copyright, quote a line or two');
});
if (!Array.isArray(reading.auden) || !reading.auden.length) warn('auden', 'is empty; if nothing by him on this work is on record, say so in "open"');

// ----- the printed notes: what the page prints for a reader besides the captions -----
const printed = [];
const textIds = fs.existsSync(TEXTS) ? fs.readdirSync(TEXTS).filter((d) => fs.existsSync(path.join(TEXTS, d, 'index.json'))) : [];
let pieceIds = [];
try { pieceIds = JSON.parse(fs.readFileSync(path.join(ROOT, 'remake/pieces.json'), 'utf8')).map((p) => p.id); } catch (e) { /* no list of pieces to check links against */ }
function linkFault(href) {
  if (/^https?:\/\//.test(href)) return null;
  let m = href.match(/^#\/read\/([a-z0-9-]+)(?:\/([a-z0-9-]+)(?::(\d+))?)?$/);
  if (m) {
    if (!textIds.includes(m[1])) return `no book "${m[1]}" is printed here`;
    if (m[2] === undefined) return null;
    const part = loadPart(`${m[1]}/${m[2]}`);
    if (!part) return `the book "${m[1]}" has no part "${m[2]}"`;
    if (m[3] !== undefined && !part.blocks[+m[3]]) return `${m[1]}/${m[2]} has no block ${m[3]}`;
    return null;
  }
  m = href.match(/^#\/([a-z0-9-]+)$/);
  if (m) return pieceIds.includes(m[1]) || ['shelf', 'about'].includes(m[1]) ? null : `there is no piece "${m[1]}"`;
  return 'a link is [words](#/read/<book>/<part>:<block>), [words](#/<pieceId>) or [words](https://...)';
}
// a word of the work itself that happens to be one of this project's working words (the plate that a
// character of Volpone brings as a gift): a reading lists it in "ownWords", and it is let through
const ownWords = new Set((Array.isArray(reading.ownWords) ? reading.ownWords : []).map((w) => String(w).toLowerCase()));
for (const [where, text, kind] of printedOf(reading)) {
  if (kind === 'read') { const f = linkFault(`#/read/${text}`); if (f) printed.push(`${where}: "${text}": ${f} (a "read" is <book>/<part>:<block>, a place a drawing can send the reader to)`); continue; }
  for (const [found, why] of faultsOf(text, textIds)) if (!ownWords.has(found.toLowerCase())) printed.push(`${where}: "${found}": ${why}`);
  if (kind === 'note') for (const { href } of linksOf(text)) { const f = linkFault(href); if (f) printed.push(`${where}: the link (${href}): ${f}`); }
}
(reading.plates || []).forEach((plate, pi) => (plate.lenses || []).forEach((lens, li) => {
  const lw = `plate ${plate.id || pi} lens ${li} (${lens.kind})`;
  if (typeof lens.caption !== 'string') return;
  if (typeof lens.stands !== 'string' || !lens.stands.trim()) printed.push(`${lw}: has no "stands": one to three sentences for a reader, saying what the caption stands on`);
  else if (lens.stands.replace(/\]\([^)]*\)/g, ']').trim().split(/\s+/).length > 70) printed.push(`${lw} stands: over 70 words; name each ground once and briefly`);
}));
if (!Array.isArray(reading.caveats)) printed.push('caveats: there is no "caveats": what a reader should be warned about, in a reader’s words, at most five; [] if there is nothing');
else {
  if (reading.caveats.length > 5) printed.push(`caveats: ${reading.caveats.length} of them; keep the five a reader most needs`);
  reading.caveats.forEach((c, i) => { if (String(c).trim().split(/\s+/).length > 50) printed.push(`caveats[${i}]: over 50 words`); });
}

console.log(`\n${problems.length ? `PROBLEMS (${problems.length})\n  ${problems.join('\n  ')}` : 'no problems'}`);
console.log(warnings.length ? `WARNINGS (${warnings.length})\n  ${warnings.join('\n  ')}` : 'no warnings');
console.log(printed.length ? `PRINTED NOTES (${printed.length}): these fields are printed on the page for a reader, and working words in them will not do. See "The printed notes" in remake/EXAMINER.md. They are the examiner’s to mend; a poet who has the time may mend them too.\n  ${printed.join('\n  ')}` : 'the printed notes are fit to print');
process.exit(problems.length ? 2 : strict && printed.length ? 3 : 0);
