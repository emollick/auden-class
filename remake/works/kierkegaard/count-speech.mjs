// The artist's count for the Speech drawing (plate "greater", tab "Speech").
// Over the hosted text of the speech it counts the words of each paragraph, how often each says the
// name, and how many words stand before the name is first said, counted from the head of the speech.
// The name is taken from the lens's own facts (the key "names <name>"), and the words are split as the
// page splits them. It changes nothing.
//   node remake/works/kierkegaard/count-speech.mjs
import fs from 'node:fs';
import { tokens } from '../../../site/js/kit/syllables.js';

const at = (rel) => new URL(rel, import.meta.url);
const reading = JSON.parse(fs.readFileSync(at('./reading.json'), 'utf8'));
const lens = reading.plates.find((p) => p.id === 'greater').lenses.find((l) => l.kind === 'shape');
const key = Object.keys(lens.facts[0]).find((k) => /^names\s+\S/.test(k));
const name = key.replace(/^names\s+/, '');
const [text] = String(lens.facts[0].read).split(':');            // "kierkegaard/p3"
const part = JSON.parse(fs.readFileSync(at(`../../../site/data/texts/${text}.json`), 'utf8'));

const NAME = new RegExp(`^[^\\p{L}]*${name}(?:[’']s)?[^\\p{L}]*$`, 'u');
let before = 0; const words = []; const said = []; const places = [];
part.blocks.forEach((b, i) => {
  const t = tokens(b.text);
  const hits = t.map((w, k) => (NAME.test(w) ? k : -1)).filter((k) => k >= 0);
  words.push(t.length); said.push(hits.length);
  hits.forEach((k) => places.push({ paragraph: i + 1, wordsBefore: before + k }));
  before += t.length;
});
const sum = (a) => a.reduce((x, y) => x + y, 0);
console.log(`the name counted: ${name} (from the key "${key}")`);
console.log(`paragraphs ${part.blocks.length}, words ${before}`);
console.log(`words in each paragraph: ${words.join(' ')}`);
console.log(`the name in each paragraph: ${said.join(' ')} (in all ${sum(said)})`);
console.log(`first said in paragraph ${places[0].paragraph}; words before it, from the head of the speech: ${places[0].wordsBefore}`);
const other = part.blocks.flatMap((b) => tokens(b.text).filter((w) => w.toLowerCase().includes(name.toLowerCase()) && !NAME.test(w)));
console.log(`other forms holding the name: ${other.length}`);
// against the facts as they stand
const bad = lens.facts.filter((r, i) => r.words !== words[i] || r[key] !== said[i]).map((r) => r.paragraph);
console.log(bad.length ? `the facts differ in paragraphs ${bad.join(', ')}` : 'the facts of the lens agree with this count, paragraph by paragraph');
