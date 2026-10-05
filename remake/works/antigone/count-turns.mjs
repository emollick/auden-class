// Counts who speaks, in order, through the Antigone printed here.
//
//   node remake/works/antigone/count-turns.mjs            the turns in order, and each speaker's sums
//   node remake/works/antigone/count-turns.mjs --check    compare with the Play lens of reading.json
//   node remake/works/antigone/count-turns.mjs --song     the stanzas of the song on man, in lines
//   node remake/works/antigone/count-turns.mjs --write    put the list under "turns in order" in the Play
//                                                         lens's row "all speakers" (one line of reading.json;
//                                                         nothing is written if anything else would change)
//
// The first three change nothing. The list is what the Play drawing
// (site/js/pieces/antigone.js) sets its marks from.
//
// Method, the same as the poet's (reading.json, plate "quarrel", lens "Play",
// first ground): a line is a row of a verse block; each verse block is given
// to the speaker named before it; the lines are numbered from 1 through the
// five parts. A turn is a run of lines with one speaker and no other speaker
// between. No word of the play is printed, only names and numbers.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const TEXT = path.join(ROOT, 'site/data/texts/antigone');
const reading = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, 'reading.json'), 'utf8'));
const lensOf = (plateId, label) => reading.plates.find((p) => p.id === plateId).lenses.find((l) => l.kind === 'shape' && l.label === label);
const play = lensOf('quarrel', 'Play');
// the speakers' names as the facts spell them
const names = play.facts.map((r) => r.speaker).filter((s) => !/^all speakers/.test(s));
const nameOf = (label) => names.find((n) => n.toLowerCase() === String(label).trim().toLowerCase()) || String(label).trim();

const index = JSON.parse(fs.readFileSync(path.join(TEXT, 'index.json'), 'utf8'));
const parts = (index.parts || []).map((p) => p.id);
const turns = []; // [speaker, lines]
const by = new Map(); // speaker -> { lines, first, last }
let speaker = null; let n = 0;
const blocksOf = {};
for (const id of parts) {
  const part = JSON.parse(fs.readFileSync(path.join(TEXT, `${id}.json`), 'utf8'));
  blocksOf[id] = part.blocks;
  for (const b of part.blocks) {
    if (b.k === 's') { speaker = nameOf(b.text); continue; }
    if (b.k !== 'v') continue;
    const k = b.lines.length;
    const last = turns[turns.length - 1];
    if (last && last[0] === speaker) last[1] += k; else turns.push([speaker, k]);
    const s = by.get(speaker) || { lines: 0, first: n + 1, last: 0 };
    s.lines += k; s.last = n + k; by.set(speaker, s);
    n += k;
  }
}

// the turns as the facts hold them: a list, each item a speaker's name and the lines of the turn
const list = turns.map(([s, k]) => `${s} ${k}`);
const inOrder = list.join(', ');
const sameList = (held) => Array.isArray(held) && held.length === list.length && held.every((t, i) => t === list[i]);
if (process.argv.includes('--song')) {
  // the verse blocks of part 2 from the first stanza's heading to the end of the part
  const b = blocksOf.p2;
  const at = b.findIndex((x) => x.k === 'd' && /^Str\. 1$/.test(x.text));
  for (let i = at; i < b.length; i++) console.log(i, b[i].k, b[i].k === 'v' ? `${b[i].lines.length} lines` : b[i].text);
} else if (process.argv.includes('--check')) {
  let ok = true;
  const say = (bad, words) => { if (bad) ok = false; console.log(`${bad ? 'DIFFERS' : 'agrees '}  ${words}`); };
  for (const row of play.facts) {
    if (/^all speakers/.test(row.speaker)) continue;
    const s = by.get(row.speaker) || { lines: 0, first: 0, last: 0 };
    say(s.lines !== row.lines || s.first !== row['first line'] || s.last !== row['last line'], `${row.speaker}: counted ${s.lines} lines, ${s.first} to ${s.last}; the facts have ${row.lines}, ${row['first line']} to ${row['last line']}`);
  }
  const all = play.facts.find((r) => r.speaker === 'all speakers');
  say(n !== all.lines, `all speakers: counted ${n}; the facts have ${all.lines}`);
  const held = play.facts.map((r) => r['turns in order']).find(Boolean);
  say(!sameList(held), held === undefined ? 'the facts hold no "turns in order" yet' : !Array.isArray(held) ? '"turns in order" is not held as a list (run --write)' : `"turns in order": ${turns.length} turns counted; the facts hold ${held.length}`);
  console.log(ok ? 'all agree' : 'something differs');
} else if (process.argv.includes('--write')) {
  // puts the one key "turns in order" in the row "all speakers" of the Play lens, and nothing else:
  // the file is read now; the key's one line is put in after that row's "Greek lines", or, if the
  // key is there already, that one line is replaced; and the result is written only if, with the
  // key left out, it is the same reading as before
  const KEY = '"turns in order":';
  const file = path.join(import.meta.dirname, 'reading.json');
  const text = fs.readFileSync(file, 'utf8');
  const stop = (why) => { console.log(`${why}; nothing written`); process.exit(1); };
  const row = text.indexOf('"speaker": "all speakers",');
  if (row < 0 || text.indexOf('"speaker": "all speakers",', row + 1) >= 0) stop('the row "all speakers" was not found once');
  const value = `[${list.map((x) => JSON.stringify(x)).join(', ')}]`;
  const had = text.indexOf(KEY);
  let next;
  if (had >= 0) {
    if (text.indexOf(KEY, had + 1) >= 0 || had < row) stop('"turns in order" was not found once, in that row');
    const eol = text.indexOf('\n', had);
    next = `${text.slice(0, had)}${KEY} ${value}${text.slice(had, eol).trimEnd().endsWith(',') ? ',' : ''}${text.slice(eol)}`;
  } else {
    const at = text.indexOf('"Greek lines":', row);
    const eol = at < 0 ? -1 : text.indexOf('\n', at);
    if (eol < 0) stop('the row "all speakers" has no "Greek lines" to put the key after');
    next = `${text.slice(0, eol)}\n${text.slice(text.lastIndexOf('\n', at) + 1, at)}${KEY} ${value},${text.slice(eol)}`;
  }
  if (next === text) { console.log('the reading already holds this count; nothing to write'); process.exit(0); }
  const holderOf = (r) => r.plates.find((p) => p.id === 'quarrel').lenses.find((l) => l.kind === 'shape' && l.label === 'Play').facts.find((x) => x.speaker === 'all speakers');
  let before; let after;
  try { before = JSON.parse(text); after = JSON.parse(next); } catch (e) { stop(`the edit would not leave a reading that can be read (${e.message})`); }
  if (!sameList(holderOf(after)['turns in order'])) stop('the key would not hold the count');
  delete holderOf(after)['turns in order']; delete holderOf(before)['turns in order'];
  if (JSON.stringify(after) !== JSON.stringify(before)) stop('the edit would change more than the one key');
  if (fs.readFileSync(file, 'utf8') !== text) stop('the reading changed while this ran; run it again');
  fs.writeFileSync(file, next);
  console.log(`${had >= 0 ? 'replaced' : 'added'} "turns in order" (${turns.length} turns, ${n} lines) in the row "all speakers" of the Play lens; nothing else changed`);
} else {
  console.log(inOrder);
  console.log(`\n${turns.length} turns, ${n} lines`);
  for (const [s, v] of by) console.log(`${s}: ${v.lines} lines in ${turns.filter((t) => t[0] === s).length} turns, first ${v.first}, last ${v.last}`);
}
