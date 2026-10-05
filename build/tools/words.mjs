// Print a passage with every row, word and syllable numbered, so that a
// reading can point at them without copying the words out.
// usage: node build/tools/words.mjs <textId> <partId> <firstBlock> [lastBlock]
// A row is named  text/part:block.row  (prose blocks have the single row 0).
import fs from 'node:fs';
import path from 'node:path';
import { tokens, syllables } from '../../site/js/kit/syllables.js';

const OUT = path.resolve(import.meta.dirname, '../../site/data/texts');
const [id, partId, a0, b0] = process.argv.slice(2);
if (!id || !partId || a0 === undefined) {
  console.log('usage: node build/tools/words.mjs <textId> <partId> <firstBlock> [lastBlock]');
  process.exit(1);
}
const part = JSON.parse(fs.readFileSync(path.join(OUT, id, `${partId}.json`), 'utf8'));
const index = JSON.parse(fs.readFileSync(path.join(OUT, id, 'index.json'), 'utf8'));
const lang = index.lang || ((index.parts || []).find((x) => x.id === partId) || {}).lang || 'en';
const a = Number(a0);
const b = b0 === undefined ? a : Number(b0);
for (let i = a; i <= b && i < part.blocks.length; i++) {
  const blk = part.blocks[i];
  const rows = blk.k === 'v' ? blk.lines : [blk.text];
  console.log(`--- ${id}/${partId}:${i}  (${blk.k === 'v' ? 'verse' : blk.k})`);
  rows.forEach((row, r) => {
    if (!row || !row.trim()) return;
    const toks = tokens(row);
    const syl = toks.map((t) => syllables(t, lang));
    const count = syl.reduce((n, s) => n + s.length, 0);
    console.log(`${id}/${partId}:${i}.${r}   ${toks.length} words, ${count} syllables by rule`);
    console.log('   ' + toks.map((t, k) => `w${k}:${syl[k].join('·')}`).join('  '));
  });
}
