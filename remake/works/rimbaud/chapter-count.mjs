// Counts, for the drawing under "Chapter" (plate "stanza", lens 3), how many
// words each paragraph of prose and each stanza of verse of the chapter has,
// part by part, and where the passages of the first two plates stand in them.
//
//   node remake/works/rimbaud/chapter-count.mjs            print the counts and check them
//   node remake/works/rimbaud/chapter-count.mjs --json     print the new keys, part by part
//
// It reads the hosted French text (site/data/texts/rimbaud-fr/s5.json) with
// the site's own word-splitter, and the reading's facts for where each part
// begins (the key `read`). It prints numbers only, never the words.

import fs from 'node:fs';
import path from 'node:path';
import { tokens } from '../../../site/js/kit/syllables.js';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const part = JSON.parse(fs.readFileSync(path.join(ROOT, 'site/data/texts/rimbaud-fr/s5.json'), 'utf8'));
const reading = JSON.parse(fs.readFileSync(path.join(ROOT, 'remake/works/rimbaud/reading.json'), 'utf8'));
const plate = (id) => reading.plates.find((p) => p.id === id);
const lens = plate('stanza').lenses.find((l) => l.kind === 'shape');
const facts = lens.facts.filter((f) => f.read);

const words = (s) => tokens(s).length;
const blocks = part.blocks.map((b, i) => ({
  i, k: b.k,
  words: b.k === 'v' ? b.lines.reduce((n, l) => n + words(l), 0) : words(b.text),
  lines: b.k === 'v' ? b.lines.filter((l) => l && l.trim()).length : 0,
}));
const first = facts.map((f) => Number(String(f.read).split(':')[1]));

// the blocks of a plate's rows: "16.0" is block 16, "38.0-38.3" block 38, "3.0[31-80]" block 3
const blocksOf = (p) => [...new Set(p.rows.map((r) => parseInt(r, 10)))];
const here = { first: blocksOf(plate('hallucination')), this: blocksOf(plate('stanza')) };

const out = facts.map((f, n) => {
  const from = first[n]; const to = n + 1 < first.length ? first[n + 1] : blocks.length;
  const mine = blocks.slice(from, to);
  const body = mine.filter((b) => b.k === (f.part === 'poem' ? 'v' : 'p'));
  const sum = body.reduce((s, b) => s + b.words, 0);
  const add = {};
  if (f.part === 'poem') {
    add['words in each stanza'] = body.map((b) => b.words);
    add['lines in each stanza'] = body.map((b) => b.lines);
  } else add['words in each paragraph'] = body.map((b) => b.words);
  // which of its paragraphs or stanzas a plate of this piece shows (numbered from 1)
  const at = (list) => body.map((b, j) => (list.includes(b.i) ? j + 1 : 0)).filter(Boolean);
  if (at(here.first).length) add['the first passage is its'] = at(here.first);
  if (at(here.this).length) add['this passage is its'] = at(here.this);
  const ok = sum === f.words && (f.part === 'poem' ? body.reduce((s, b) => s + b.lines, 0) === f.lines : body.length === f.paragraphs);
  // the keys the drawing reads: the same in the facts as counted here?
  const key = f.part === 'poem' ? 'words in each stanza' : 'words in each paragraph';
  const held = f[key] === undefined ? 'not in the facts yet' : JSON.stringify(f[key]) === JSON.stringify(add[key]) ? 'the facts hold the same' : 'THE FACTS HOLD SOMETHING ELSE';
  return { n, part: f.part, number: f.number, from, to: to - 1, sum, stated: f.words, ok: ok && !/ELSE/.test(held), held, add };
});

if (process.argv.includes('--json')) console.log(JSON.stringify(out.map((o) => o.add)));
else {
  for (const o of out) console.log(`${String(o.n).padStart(2)} ${o.part}${o.number ? ` ${o.number}` : ''}  blocks ${o.from} to ${o.to}  words ${o.sum} (facts: ${o.stated}) ${o.ok ? 'agrees' : 'DOES NOT AGREE'}; ${o.held}\n     ${JSON.stringify(o.add)}`);
  console.log(out.every((o) => o.ok) ? 'every part agrees with the facts' : 'SOME PART DOES NOT AGREE');
}
