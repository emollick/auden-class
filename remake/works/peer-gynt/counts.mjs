// The counts behind the drawing of the Peer Gynt piece (plate "onion", the
// tab "Layers"), made on the text printed on the site
// (site/data/texts/peer-gynt). It prints numbers and places only, never the
// words of the work.
//
//   node remake/works/peer-gynt/counts.mjs
//
// It counts three things the drawing needs and the reading's table did not
// hold, and it checks them against reading.json if they are already there:
//
//   1. how many scenes each act of the play has;
//   2. how many lines of Peer's speech give each coat (the rows are read from
//      each entry's own "source" note), and how many of those lines stand in
//      the passage the plate shows;
//   3. that every place a coat's "read" sends the reader to is in the book.
//
// What it prints is recorded in art.md. It writes nothing.

import fs from 'node:fs';
import path from 'node:path';

const HERE = import.meta.dirname;
const TEXTS = path.resolve(HERE, '../../../site/data/texts');
const reading = JSON.parse(fs.readFileSync(path.join(HERE, 'reading.json'), 'utf8'));
const plate = reading.plates.find((p) => p.id === 'onion');
const lens = plate.lenses.find((l) => l.kind === 'shape');
const [book, partId] = plate.text.split('/');
const load = (b, p) => JSON.parse(fs.readFileSync(path.join(TEXTS, b, `${p}.json`), 'utf8'));
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// ----- 1. the scenes of each act -----
const index = load(book, 'index');
const acts = [];
for (const p of index.parts) { const m = p.id.match(/^a(\d+)s(\d+)$/); if (m) acts[+m[1] - 1] = Math.max(acts[+m[1] - 1] || 0, +m[2]); }
console.log(`scenes in each act: ${JSON.stringify(acts)} (${acts.reduce((s, n) => s + n, 0)} in all, ${index.parts.length} parts in the book)`);
const play = lens.facts.find((e) => Array.isArray(e['scenes in each act']));
console.log(play ? `  the reading has ${JSON.stringify(play['scenes in each act'])}: ${same(play['scenes in each act'], acts) ? 'the same' : 'NOT THE SAME'}` : '  the reading does not hold it yet');

// ----- 2. the lines of the speech that give each coat -----
// the rows the plate shows, as block.row
const shown = new Set();
for (const spec of plate.rows) {
  const m = String(spec).match(/^(\d+)\.(\d+)(?:-(\d+)\.(\d+))?$/);
  const b1 = +m[1]; const r1 = +m[2]; const b2 = m[3] === undefined ? b1 : +m[3]; const r2 = m[4] === undefined ? r1 : +m[4];
  if (b1 !== b2) throw new Error(`${spec}: a range over two blocks; count it by hand`);
  for (let r = r1; r <= r2; r++) shown.add(`${b1}.${r}`);
}
const scene = load(book, partId);
const blocksUsed = new Set();
const perCoat = [];
for (const e of lens.facts) {
  const m = String(e.source || '').match(new RegExp(`^${partId} (\\d+)\\.(\\d+)(?:-(\\d+)\\.(\\d+))?`));
  if (!m || !/^\d+$/.test(String(e.coat))) continue;
  const b = +m[1]; const r1 = +m[2]; const r2 = m[4] === undefined ? r1 : +m[4];
  const blk = scene.blocks[b];
  if (!blk || blk.k !== 'v' || r2 >= blk.lines.length) throw new Error(`coat ${e.coat}: rows ${b}.${r1} to ${b}.${r2} are not in ${partId}`);
  blocksUsed.add(b);
  let inPassage = 0;
  for (let r = r1; r <= r2; r++) if (shown.has(`${b}.${r}`)) inPassage++;
  perCoat.push({ coat: e.coat, block: b, from: r1, to: r2, lines: r2 - r1 + 1, inPassage, has: e.lines });
}
for (const c of perCoat) console.log(`coat ${c.coat}: rows ${c.from} to ${c.to} of block ${c.block}: ${c.lines} line${c.lines === 1 ? '' : 's'}, ${c.inPassage} of them in the passage${c.has === undefined ? '' : c.has === c.lines ? '; the reading has the same' : `; THE READING HAS ${c.has}`}`);
const total = perCoat.reduce((s, c) => s + c.lines, 0);
const inAll = perCoat.reduce((s, c) => s + c.inPassage, 0);
const blockNo = [...blocksUsed][0];
console.log(`the nine coats: ${total} lines in block ${[...blocksUsed].join(', ')} of ${partId}, which has ${scene.blocks[blockNo].lines.length} lines; the rows run on without a gap: ${perCoat.every((c, i) => c.from === (i ? perCoat[i - 1].to + 1 : 0))}`);
console.log(`in the passage: ${inAll} lines, giving ${perCoat.filter((c) => c.inPassage).length} coats; left out: ${total - inAll} lines, giving ${perCoat.filter((c) => !c.inPassage).length} coats`);
const speech = play && play['the speech'] && play['the speech'].read;
console.log(speech === undefined ? '  the reading does not say where the speech is yet' : `  the reading sends the reader to ${speech} for the speech: ${speech === `${book}/${partId}:${blockNo}` ? 'the same block' : 'NOT THE SAME BLOCK'}`);

// ----- 3. the places a coat's "read" names -----
for (const e of lens.facts) {
  for (const place of [].concat(e.read || [])) {
    const m = String(place).match(/^([a-z0-9-]+)\/([a-z0-9-]+):(\d+)$/);
    let found = 'NOT A PLACE';
    if (m) {
      const f = path.join(TEXTS, m[1], `${m[2]}.json`);
      const blk = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')).blocks[+m[3]] : null;
      const kinds = { d: 'a stage direction', s: 'a speaker’s name', v: 'verse', p: 'prose', h: 'a heading' };
      found = blk ? `in the book (${kinds[blk.k] || blk.k})` : 'NOT IN THE BOOK';
    }
    console.log(`coat ${e.coat}: "${e['seen or told in']}" -> ${place}: ${found}`);
  }
}
