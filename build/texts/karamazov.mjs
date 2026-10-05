// Dostoevsky, The Brothers Karamazov, translated by Constance Garnett (1912).
// Project Gutenberg no. 28054. See notes/karamazov.md.

import { fetchText, gutenbergBody, clean, countWords, writeText, roman, pad2 } from '../lib/gutenberg.mjs';

const NAME = 'pg28054_karamazov.txt';
const URL = 'https://www.gutenberg.org/cache/epub/28054/pg28054.txt';

// The file is wrapped at 71 characters. A line that stops although the
// next word would have fitted was ended on purpose: a line of verse.
const WRAP = 71;
const len = (s) => [...s].length;
const endsEarly = (line, next) => len(line) + 1 + len(next.trim().split(/\s+/)[0]) <= WRAP;
const allEarly = (lines) => lines.slice(0, -1).every((l, j) => endsEarly(l, lines[j + 1]));

// What the book has, book by book, and in the epilogue.
const CHAPTERS = [5, 8, 11, 7, 7, 3, 4, 8, 9, 7, 10, 14];
const EPILOGUE = 3;
const PART_OF = ['I', 'I', 'I', 'II', 'II', 'II', 'III', 'III', 'III', 'IV', 'IV', 'IV'];

// The source gathers nine footnotes at the end of the book. Eight are the
// translator's glosses and are dropped. The sixth, on the canticles sung
// at a monk's burial, is Dostoevsky's own note: it is kept, set apart
// after the paragraph it belongs to.
const AUTHORS_NOTES = { 6: /^When a monk’s body is carried out/ };

// Runs of lines between blank lines, with the number of blank lines
// before and after each: the file sets things apart with two blank lines.
function paragraphs(lines) {
  const out = [];
  let cur = null;
  let blanks = 0;
  for (const l of lines) {
    if (l.trim() === '') {
      if (cur) out.push(cur);
      cur = null;
      blanks++;
    } else {
      if (!cur) {
        cur = { before: blanks, after: 0, lines: [] };
        blanks = 0;
      }
      cur.lines.push(l);
    }
  }
  if (cur) out.push(cur);
  out.forEach((p, i) => { p.after = i + 1 < out.length ? out[i + 1].before : 0; });
  return out;
}

// The source capitalises every word of its titles ("He Gets Rid Of His
// Eldest Son"). Put the small words back in lower case, except at the
// start of the title or of a sentence in it.
const SMALL = new Set(['A', 'An', 'The', 'And', 'Of', 'In', 'At', 'To', 'For', 'On', 'With']);
function title(s) {
  const words = clean(s).replace(/\.$/, '').split(' ');
  return words.map((w, i) => (i > 0 && !/[.!?]$/.test(words[i - 1]) && SMALL.has(w) ? w.toLowerCase() : w)).join(' ');
}

// The lines of a paragraph are joined with a space. In one place the file
// breaks a line inside a hyphened word ("non-" at the end of one line,
// "existence" at the start of the next); there the halves are joined
// without one.
const HYPHEN_BREAK = /[A-Za-z]-$/;
function prose(lines) {
  let out = '';
  lines.forEach((l, i) => {
    const t = l.trim();
    const close = i === 0 || (HYPHEN_BREAK.test(out) && /^[a-z]/.test(t));
    out += close ? t : ` ${t}`;
  });
  return clean(out);
}

// A signature under a letter: "K. HOHLAKOV.", "Your slave and enemy, / D. KARAMAZOV."
const isSignature = (p) => p.before === 2 && p.after === 2 && p.lines.length <= 2 && /^[A-Z]\. [A-Z]+\.$/.test(p.lines[p.lines.length - 1].trim());

// Headings inside Book VI, where Zossima's life is set out under letters.
function heading(p) {
  const t = prose(p.lines);
  if (/^Notes of the Life of the deceased Priest and Monk, the Elder Zossima,/.test(t) && p.lines.length <= 2) return { k: 'h', text: t, level: 2 };
  if (t === 'BIOGRAPHICAL NOTES') return { k: 'h', text: t, level: 2 };
  // "_(a)_ _Father Zossima's Brother_": a letter in brackets and a title, all in italics
  const bare = p.lines.join(' ').replace(/_[^_]*_/g, '').replace(/[\s()]/g, '');
  if (/^\([a-i]\) [A-Z]/.test(t) && bare === '') return { k: 'h', text: t, level: 3 };
  return null;
}

function chapterBlocks(paras, count, notes) {
  const kind = paras.map(() => null);
  const blocks = paras.map(() => null);
  paras.forEach((p, i) => {
    const h = heading(p);
    if (h) {
      kind[i] = 'h';
      blocks[i] = [h];
      count.headings++;
    } else if (isSignature(p)) {
      // a letter: the paragraph before the signature, set apart like it
      if (i === 0 || paras[i - 1].after !== 2) throw new Error(`Karamazov: signature without a letter: ${p.lines.join(' / ')}`);
      kind[i] = kind[i - 1] = 'q';
      blocks[i] = [{ k: 'q', text: prose(p.lines) }];
      // a postscript is indented under the letter; each P.S. begins a paragraph
      const body = [[]];
      for (const l of paras[i - 1].lines) {
        if (/^\s+P\.(P\.)*S\./.test(l)) body.push([]);
        body[body.length - 1].push(l);
      }
      blocks[i - 1] = body.map((ls) => ({ k: 'q', text: prose(ls) }));
      count.letters++;
    }
  });
  // Verse: every line ends early, and the last stanza is followed by two
  // blank lines. A single line set apart in the same way is a line of verse.
  for (let i = paras.length - 1; i >= 0; i--) {
    if (kind[i]) continue;
    const p = paras[i];
    const shaped = p.lines.length >= 2 ? allEarly(p.lines) : p.after === 2;
    const closed = p.after === 2 || (p.after === 1 && kind[i + 1] === 'v');
    if (shaped && closed) {
      kind[i] = 'v';
      blocks[i] = [{ k: 'v', lines: p.lines.map((l) => clean(l).trim()) }];
      count.stanzas++;
      count.verseLines += p.lines.length;
    }
  }
  paras.forEach((p, i) => {
    if (kind[i]) return;
    if (p.lines.some((l) => /^\s/.test(l))) throw new Error(`Karamazov: indented lines outside a letter: ${p.lines[0]}`);
    blocks[i] = [{ k: 'p', text: prose(p.lines) }];
  });
  // the author's own note follows the paragraph that carries its mark
  paras.forEach((p, i) => {
    for (const m of p.lines.join('\n').matchAll(/\[(\d+)\]/g)) {
      count.marks++;
      if (!AUTHORS_NOTES[m[1]]) continue;
      if (kind[i]) throw new Error(`Karamazov: note ${m[1]} is not marked in a paragraph of prose`);
      blocks[i].push({ k: 'q', text: notes[m[1]] });
      count.notesKept++;
    }
  });
  return blocks.flat();
}

// The footnotes after THE END: " [1] In Russian, ..." and so on.
function footnotes(lines) {
  const notes = {};
  for (const p of paragraphs(lines)) {
    const m = p.lines[0].match(/^ \[(\d+)\] /);
    if (m) notes[m[1]] = prose(p.lines).trim();
    else if (p.lines[0].trim() !== 'FOOTNOTES') throw new Error(`Karamazov: unexpected matter after THE END: ${p.lines[0]}`);
  }
  return notes;
}

// run(report) hands the figures of the checks to report, if one is given.
export function run(report = () => {}) {
  const body = gutenbergBody(fetchText(NAME, URL));
  // The work runs from the PART I heading after the contents to THE END;
  // the translator's footnotes follow that.
  const start = body.indexOf('PART I');
  const end = body.indexOf('THE END');
  if (start < 0 || end < start) throw new Error('Karamazov: cannot find PART I ... THE END');
  if (body.slice(end + 1).find((l) => l.trim()) !== 'FOOTNOTES') throw new Error('Karamazov: expected the footnotes after THE END');
  const lines = body.slice(start, end);
  const notes = footnotes(body.slice(end + 1));
  if (Object.keys(notes).join() !== '1,2,3,4,5,6,7,8,9') throw new Error(`Karamazov: expected footnotes 1 to 9, found ${Object.keys(notes).join()}`);
  for (const [n, re] of Object.entries(AUTHORS_NOTES)) {
    if (!re.test(notes[n])) throw new Error(`Karamazov: footnote ${n} is not the note expected`);
  }

  const parts = [];
  const count = { headings: 0, letters: 0, stanzas: 0, verseLines: 0, marks: 0, notesKept: 0 };
  let part = null; // 'I'..'IV'
  let book = null; // { n, roman, title }
  let epilogue = false;
  let cur = null; // { meta, paras }
  const perBook = [];
  let headingWords = 0;
  const close = () => {
    if (!cur) return;
    parts.push({ ...cur.meta, blocks: chapterBlocks(cur.paras, count, notes) });
    cur = null;
  };
  for (const p of paragraphs(lines)) {
    const first = p.lines[0];
    let m;
    if ((m = first.match(/^PART ([IV]+)$/)) && p.lines.length === 1) {
      close();
      part = m[1];
      headingWords += countWords(first);
    } else if ((m = first.match(/^Book ([IVX]+)\. (.+)$/)) && p.before === 4 && p.after === 4) {
      close();
      book = { n: roman(m[1]), roman: m[1], title: title([m[2], ...p.lines.slice(1)].join(' ')) };
      if (book.n !== perBook.length + 1) throw new Error(`Karamazov: Book ${m[1]} out of order`);
      if (PART_OF[book.n - 1] !== part) throw new Error(`Karamazov: Book ${m[1]} found in Part ${part}`);
      perBook.push(0);
      headingWords += countWords(p.lines.join(' '));
    } else if (first === 'EPILOGUE' && p.lines.length === 1) {
      close();
      epilogue = true;
      perBook.push(0);
      headingWords += 1;
    } else if ((m = first.match(/^Chapter ([IVX]+)\.$/)) && p.before === 4) {
      close();
      const n = roman(m[1]);
      if (n !== perBook[perBook.length - 1] + 1) throw new Error(`Karamazov: chapter ${m[1]} out of order in ${epilogue ? 'the epilogue' : `Book ${book.roman}`}`);
      perBook[perBook.length - 1] = n;
      if (p.lines.length < 2) throw new Error(`Karamazov: chapter ${m[1]} has no title`);
      const label = `Chapter ${n}: ${title(p.lines.slice(1).join(' '))}`;
      cur = {
        meta: epilogue
          ? { id: `epc${pad2(n)}`, label, group: 'Epilogue' }
          : { id: `b${pad2(book.n)}c${pad2(n)}`, label, group: `Part ${part}, Book ${book.roman}: ${book.title}` },
        paras: [],
      };
      headingWords += countWords(p.lines.join(' '));
    } else {
      if (!cur) throw new Error(`Karamazov: text outside a chapter: ${first}`);
      if (/^(PART|Book|Chapter|EPILOGUE)\b/.test(first) && p.before >= 4) throw new Error(`Karamazov: unrecognised heading: ${first}`);
      cur.paras.push(p);
    }
  }
  close();

  // The structure the work is known to have.
  const books = perBook.slice(0, 12);
  if (perBook.length !== 13 || !epilogue) throw new Error(`Karamazov: expected 12 books and an epilogue, found ${perBook.length - (epilogue ? 1 : 0)} books`);
  if (books.join() !== CHAPTERS.join()) throw new Error(`Karamazov: chapters per book ${books.join()}, expected ${CHAPTERS.join()}`);
  if (perBook[12] !== EPILOGUE) throw new Error(`Karamazov: epilogue has ${perBook[12]} chapters, expected ${EPILOGUE}`);
  if (parts.length !== 96) throw new Error(`Karamazov: expected 96 chapters, found ${parts.length}`);
  // What was set apart, as counted when the text was brought in: nine
  // lettered headings and two more in Book VI, two letters, 38 stanzas of verse in 137 lines.
  if (count.headings !== 11 || count.letters !== 2 || count.stanzas !== 38 || count.verseLines !== 137) {
    throw new Error(`Karamazov: set-apart matter has changed: ${JSON.stringify(count)}`);
  }
  if (count.marks !== 9 || count.notesKept !== 1) throw new Error(`Karamazov: expected 9 footnote marks and 1 note kept, found ${count.marks} and ${count.notesKept}`);
  // The one line that ends inside a hyphened word (see prose above).
  const hyphenBreaks = lines.filter((l, i) => HYPHEN_BREAK.test(l) && i + 1 < lines.length && /^[a-z]/.test(lines[i + 1])).length;
  const hyphenEnds = lines.filter((l) => HYPHEN_BREAK.test(l)).length;
  if (hyphenBreaks !== 1 || hyphenEnds !== 1) throw new Error(`Karamazov: expected one line broken inside a hyphened word, found ${hyphenEnds} lines ending in a hyphen`);

  const index = writeText('karamazov', {
    author: 'Fyodor Dostoevsky',
    title: 'The Brothers Karamazov',
    translator: 'Constance Garnett',
    year: 1912,
    verse: false,
    source: { name: 'Project Gutenberg, no. 28054', url: 'https://www.gutenberg.org/ebooks/28054' },
  }, parts);

  // Nothing lost: the words written out against the words of the source
  // between PART I and THE END, less the headings that went into labels,
  // plus the one note kept, less one for the word the file breaks in two.
  const sourceWords = countWords(lines.join('\n'));
  const noteWords = Object.keys(AUTHORS_NOTES).reduce((a, n) => a + countWords(notes[n]), 0);
  const expected = sourceWords - headingWords + noteWords - hyphenBreaks;
  if (Math.abs(index.words - expected) > 0.01 * expected) throw new Error(`Karamazov: ${index.words} words written, ${expected} in the source`);
  report({ words: index.words, sourceWords, headingWords, noteWords, hyphenBreaks, expected, perBook, count });
  return index;
}
