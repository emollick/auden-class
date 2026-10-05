// The counts behind the two drawings of the Augustine piece, made on the
// text printed on the site (site/data/texts/augustine) with the site's own
// word-splitter. It prints numbers only, never the words of the work: the
// phrases it looks for are read from the reading's own facts.
//
//   node remake/works/augustine/counts.mjs
//
// What it prints is recorded in art.md, and the numbers the drawings use
// stand in reading.json under the keys named there.

import fs from 'node:fs';
import path from 'node:path';
import { tokens } from '../../../site/js/kit/syllables.js';

const HERE = import.meta.dirname;
const DIR = path.resolve(HERE, '../../../site/data/texts/augustine');
const reading = JSON.parse(fs.readFileSync(path.join(HERE, 'reading.json'), 'utf8'));
const shape = (plateId) => reading.plates.find((p) => p.id === plateId).lenses.find((l) => l.kind === 'shape').facts;

const bare = (t) => t.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
const THOU = /^(Thou|Thee|Thy|Thine|Thyself)$/;
const toks = (b) => (b.k === 'v' ? b.lines.flatMap((l) => tokens(l)) : b.k === 'p' || b.k === 'q' ? tokens(b.text || '') : []);
const books = Array.from({ length: 13 }, (_, i) => JSON.parse(fs.readFileSync(path.join(DIR, `book-${String(i + 1).padStart(2, '0')}.json`), 'utf8')).blocks.map(toks));
const wordsOf = (book) => book.reduce((s, b) => s + b.length, 0);
const total = books.reduce((s, b) => s + wordsOf(b), 0);

// 1. the check: the poet's own counts come out the same
console.log('words in each book:      ', JSON.stringify(books.map(wordsOf)));
console.log('Thou-words in each book: ', JSON.stringify(books.map((book) => book.flat().filter((t) => THOU.test(bare(t))).length)));
console.log('words in the whole work: ', total);

// 2. the whole work: how many of its words stand before each phrase of the ring,
//    and before the one between its two ends.
//    The place of each is read from its "where" (book and paragraph, as the site numbers them).
const before = (bookNo, para) => books.slice(0, bookNo - 1).reduce((s, b) => s + wordsOf(b), 0) + books[bookNo - 1].slice(0, para).reduce((s, b) => s + b.length, 0);
const whole = shape('opening');
[...whole.ring.map((r, i) => [`ring ${i}`, r]), ...(whole.ringBetween || []).map((r, i) => [`between ${i}`, r])].forEach(([i, r]) => {
  const m = String(r.where).match(/augustine\/book-(\d+), block (\d+)/);
  if (!m) { console.log(`${i}: no place to look in`); return; }
  const [bookNo, para] = [+m[1], +m[2]];
  const t = books[bookNo - 1][para].map((x) => bare(x).toLowerCase());
  const want = r.pusey.toLowerCase().split(' ');
  const hits = [];
  for (let k = 0; k + want.length <= t.length; k++) if (want.every((w, j) => t[k + j] === w)) hits.push(k);
  const last = books[bookNo - 1].length - 1;
  console.log(`${i}: Book ${bookNo}, paragraph ${para} of 0 to ${last}: its ${want.length} words stand there ${hits.length} time(s); words of the whole work before them: ${hits.map((h) => before(bookNo, para) + h).join(', ')}; words from them to the end: ${hits.map((h) => total - before(bookNo, para) - h).join(', ')}${typeof r.wordsBefore === 'number' ? `; the facts say ${r.wordsBefore} before` : ''}`);
});

// 3. Book II: the words in each of its paragraphs, and the word that each question mark ends
const two = books[1];
console.log('Book II, words in each paragraph:', JSON.stringify(two.map((b) => b.length)), 'in all', wordsOf(two));
const marks = [];
let n = 0;
for (const b of two) { b.forEach((t, i) => { for (let k = (t.match(/\?/g) || []).length; k > 0; k--) marks.push(n + i + 1); }); n += b.length; }
console.log(`Book II, the word (counted from 1) that each of its ${marks.length} question marks ends:`, JSON.stringify(marks));
