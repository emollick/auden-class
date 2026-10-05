// Trials, for a picture only. Each changes the piece's BUILT data (never the reading) to show what the
// page would look like with something art.md proposes or suggests. Nothing of the libretto is typed here:
// every word and number is read from the reading, from the poet's notes or from the rows themselves.
//
//   syllables            the measure of every line of the scene (plate `cabaletta`, tab Scene), a new key
//                        proposed for its facts, from the reading's own notes of where each part was counted
//   stanzas              the stanzas of the slow song with the four returning lines set in, [[8, 4], [8, 4]],
//                        as count-scene.mjs counts them over the hosted cut (the other new key proposed)
//   stanzas-plain        the same key in its plainer form, [12, 12], from the words of the part's `measure`
//   quatrains            the fast song parted [4, 4], as the Rhyme caption of the same plate says it is printed
//   broken               one part of the Scene facts without its count of lines: the kit's table must show
//   names                plate `end` as it would stand if the page took the speakers' names and the stage
//                        directions out of the Italian rows (a suggestion for the kit, not for the reading)
//   level                plate `refrain`, tab English: one more pair, from the first of the four returning
//                        lines to the line that answers it, so that the two returns stand level
//
// Two ways to use it:
//   node remake/works/traviata/look.mjs --try syllables,stanzas ...   patches the data on its way to the
//                                                                     browser; no file is changed
//   node remake/works/traviata/trial.mjs syllables stanzas            writes the built copy
//       (site/data/pieces/traviata.json), for build/tools/shoot.mjs; afterwards
//       `node build/pieces.mjs traviata` writes the built copy again from the reading and undoes it
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { sceneParts } from './count-scene.mjs';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const BUILT = path.join(ROOT, 'site/data/pieces/traviata.json');
const here = (f) => path.join(import.meta.dirname, f);
const plateOf = (x, id) => x.plates.find((p) => p.id === id);
const sceneOf = (x) => plateOf(x, 'cabaletta').lenses.find((l) => l.kind === 'shape');

// What the reading's own working notes say of the measure of each part of the scene.
// "syllables 7, 7, 11, ..." is a count for each line; "the last stress on the sixth" names a line of seven.
export function measuresOf(reading) {
  const byStress = { sixth: 7, seventh: 8, tenth: 11 };
  return sceneOf(reading).facts.map((f) => {
    const note = String(f.counted || '');
    const each = note.match(/syllables ((?:\d+, )+\d+)/);
    const last = note.match(/last stress on the (sixth|seventh|tenth)/);
    const syllables = each ? each[1].split(', ').map(Number) : last ? byStress[last[1]] : undefined;
    // "in two stanzas of twelve": the stanzas are told in the part's own measure
    const plain = /in two stanzas of twelve/.test(String(f.measure || '')) && f.lines === 24 ? [12, 12] : undefined;
    return { part: f.part, syllables, plain };
  });
}

export function patch(piece, want, log = console.log) {
  const reading = JSON.parse(fs.readFileSync(here('reading.json'), 'utf8'));
  const facts = sceneOf(piece).facts;

  const set = (i, key, value) => { facts[i][key] = value; log(`part ${i + 1} (${facts[i].part}): "${key}": ${JSON.stringify(value)}`); };
  if (want.has('syllables') || want.has('stanzas-plain')) {
    measuresOf(reading).forEach((m, i) => {
      if (want.has('syllables') && m.syllables !== undefined) set(i, 'syllables', m.syllables);
      if (want.has('stanzas-plain') && m.plain) set(i, 'stanzas', m.plain);
    });
  }
  // the stanzas as the count over the hosted cut finds them: only where lines come back
  if (want.has('stanzas')) sceneParts().forEach((p, i) => { if (p.stanzas) set(i, 'stanzas', p.stanzas); });
  // the fast song in two groups of four, where the Rhyme tab's caption of the same plate says it is printed so
  if (want.has('quatrains')) {
    const rhyme = plateOf(reading, 'cabaletta').lenses.find((l) => l.kind === 'rhyme');
    const i = facts.length - 1;
    if (rhyme && /printed as two quatrains/.test(rhyme.caption || '') && facts[i].lines === 8) set(i, 'stanzas', [4, 4]);
    else log('the Rhyme caption does not say "printed as two quatrains", or the last part has not eight lines: nothing set');
  }

  if (want.has('broken')) { delete facts[1].lines; log('part 2 of the Scene facts has lost its count of lines'); }

  if (want.has('names')) {
    // Which first words are names is read from the poet's list in notes.md (the line that begins "In the
    // act-3 rows"): every row it gives as "word 0" or "w0". A direction is known by its form: the words
    // from one that opens a round bracket to the last word of the row, where that one closes it.
    const notes = fs.readFileSync(here('notes.md'), 'utf8');
    const list = (notes.match(/In the act-3 rows the speakers' names and the stage directions stand inside the row[^\n]*/) || [''])[0];
    const plate = plateOf(piece, 'end');
    const out = [];
    for (const r of plate.rows) {
      if (r.aside) { out.push(r); continue; }
      const toks = r.words.map((w) => w.t);
      const named = new RegExp(`(^|[ ,(:])${r.id.replace('.', '\\.')} (word 0|w0)\\b`).test(list);
      let from = -1;
      if (/\)\W*$/.test(toks[toks.length - 1])) for (let i = toks.length - 1; i >= 1; i--) if (/^\(/.test(toks[i])) { from = i; break; }
      if (named) { out.push({ aside: 's', text: toks[0] }); r.first = 1; }
      if (from > 0) r.last = from - 1;
      out.push(r);
      if (from > 0) out.push({ aside: 'd', text: toks.slice(from).join(' ').replace(/^\(|\)$/g, '') });
      log(`row ${r.id}: ${named ? 'word 0 set over it as its speaker' : 'no name'}${from > 0 ? `; words ${from} to ${toks.length - 1} set after it as a direction` : ''}`);
    }
    plate.rows = out;
  }

  if (want.has('level')) {
    // the first row of the last block of the Italian, and the first row of the last run of the English
    const plate = plateOf(piece, 'refrain');
    const rows = plate.rows.filter((r) => !r.aside);
    const blockOf = (id) => String(id).replace(/^p:/, '').split('.')[0];
    const a = rows.find((r) => blockOf(r.id) === blockOf(rows[rows.length - 1].id));
    const starts = plate.pair.rows.filter((r) => r.gapBefore);
    const b = starts[starts.length - 1];
    const lens = plate.lenses.find((l) => l.kind === 'compare');
    lens.ties.push({ a: [a.id, a.first, a.last], b: [b.id, b.first, b.last], say: '' });
    log(`one more pair on the English tab of plate refrain: row ${a.id} words ${a.first} to ${a.last}, with row ${b.id} words ${b.first} to ${b.last} (no remark)`);
  }
  return piece;
}

// `inline` (look.mjs only; a picture of a mend that is the kit's to make, and no part of this piece): plate
// `end` with each speaker's name set, where it stands in its row, in the type the page gives a speaker's name,
// and each stage direction in the type it gives a direction. Returns which words those are, as
// [{ row, nth, kind }] (nth: the word's place among the words the row shows); the data is not changed.
export const INLINE = {
  name: 'font-family:var(--text);font-size:11px;letter-spacing:.17em;text-transform:uppercase;font-weight:520;color:var(--quiet);margin-right:.35em',
  dir: 'font-family:var(--text);font-size:13.5px;font-style:italic;color:var(--quiet)',
};
export function inlineWords(piece) {
  const notes = fs.readFileSync(here('notes.md'), 'utf8');
  const list = (notes.match(/In the act-3 rows the speakers' names and the stage directions stand inside the row[^\n]*/) || [''])[0];
  const out = [];
  for (const r of plateOf(piece, 'end').rows) {
    if (r.aside) continue;
    const toks = r.words.map((w) => w.t);
    if (new RegExp(`(^|[ ,(:])${r.id.replace('.', '\\.')} (word 0|w0)\\b`).test(list)) out.push({ row: r.id, nth: 0 - r.first, kind: 'name' });
    let from = -1;
    if (/\)\W*$/.test(toks[toks.length - 1])) for (let i = toks.length - 1; i >= 1; i--) if (/^\(/.test(toks[i])) { from = i; break; }
    for (let i = from; from > 0 && i < toks.length; i++) out.push({ row: r.id, nth: i - r.first, kind: 'dir' });
  }
  return out;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dry = process.argv.includes('--dry');   // print what would be set, and write nothing
  const want = new Set(process.argv.slice(2).filter((a) => !a.startsWith('--')));
  const piece = JSON.parse(fs.readFileSync(BUILT, 'utf8'));
  patch(piece, want);
  if (want.size && !dry) fs.writeFileSync(BUILT, `${JSON.stringify(piece)}\n`);
  console.log(!want.size ? 'nothing asked for; nothing written' : dry ? 'nothing written (--dry)' : `written to the built copy only: ${[...want].join(', ')}. Undo with: node build/pieces.mjs traviata`);
}
