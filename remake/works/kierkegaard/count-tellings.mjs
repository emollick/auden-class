// The artist's count for the Tellings drawing (plate "weaning", tab "Tellings").
// Over the hosted text it counts the words of each telling and of the paragraph on weaning that
// follows it, and how many words, from the first, all the tellings open with in common. The blocks
// are taken from the lens's own facts (the working note "where" of each telling), and the words are
// split as the page splits them. It prints numbers only, and changes nothing.
//   node remake/works/kierkegaard/count-tellings.mjs
import fs from 'node:fs';
import { tokens } from '../../../site/js/kit/syllables.js';

const at = (rel) => new URL(rel, import.meta.url);
const reading = JSON.parse(fs.readFileSync(at('./reading.json'), 'utf8'));
const lens = reading.plates.find((p) => p.id === 'weaning').lenses.find((l) => l.kind === 'shape');
const told = lens.facts.filter((r) => typeof r.words === 'number');
const [text] = String(told[0].read).split(':');                  // "kierkegaard/p2"
const part = JSON.parse(fs.readFileSync(at(`../../../site/data/texts/${text}.json`), 'utf8'));
const words = (i) => tokens(part.blocks[i].text);

// "…, blocks 11, 12 (59 + 132 words) and 13": the last block is the paragraph on weaning
const blocksOf = (r) => String(r.where).replace(/\([^)]*\)/g, '').split('blocks')[1].match(/\d+/g).map(Number);
const bare = (w) => w.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');

const rows = told.map((r) => {
  const b = blocksOf(r); const after = b[b.length - 1]; const own = b.slice(0, -1);
  return { name: r.story, own, after, words: own.reduce((n, i) => n + words(i).length, 0), weaning: words(after).length, facts: [r.words, r['words on weaning']], opening: words(own[0]).map(bare) };
});
rows.forEach((r) => console.log(`${r.name}: blocks ${r.own.join(', ')} and ${r.after}; words ${r.words}, then ${r.weaning} on weaning; the facts say ${r.facts[0]} and ${r.facts[1]}${r.words === r.facts[0] && r.weaning === r.facts[1] ? ' (agree)' : ' (DIFFER)'}`));
let same = 0;
while (rows.every((r) => r.opening[same] !== undefined && r.opening[same] === rows[0].opening[same])) same++;
console.log(`words, from the first, that all ${rows.length} tellings open with in common: ${same}`);
// the same, but letter for letter with the stops kept
let exact = 0;
const raw = rows.map((r) => words(r.own[0]));
while (raw.every((t) => t[exact] !== undefined && t[exact] === raw[0][exact])) exact++;
console.log(`of these, the same letter for letter and stop for stop: ${exact}`);
