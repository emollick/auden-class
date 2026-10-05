// Henry Adams, The Education of Henry Adams (privately printed 1907; published 1918).
// Project Gutenberg no. 2044. See notes/adams.md.

import { fetchText, gutenbergBody, clean, countWords, writeText, roman, pad2 } from '../lib/gutenberg.mjs';

const NAME = 'pg2044_adams.txt';
const URL = 'https://www.gutenberg.org/cache/epub/2044/pg2044.txt';

const indent = (l) => l.match(/^ */)[0].length;
const prose = (lines) => clean(lines.map((l) => l.trim()).join(' ')).trim();

function paragraphs(lines) {
  const out = [];
  let cur = null;
  for (const l of lines) {
    if (l.trim() === '') {
      if (cur) out.push(cur);
      cur = null;
    } else {
      if (!cur) cur = [];
      cur.push(l);
    }
  }
  if (cur) out.push(cur);
  return out;
}

// The source prints chapter titles in capitals: "THE BATTLE OF THE RAMS (1863)".
const SMALL = new Set(['a', 'and', 'of', 'or', 'the']);
function title(s) {
  const m = s.match(/^([A-Z ]+) (\(\d{4}(?:-\d{4})?\))$/);
  if (!m) throw new Error(`Adams: chapter title not understood: ${s}`);
  const words = m[1].toLowerCase().split(' ').map((w, i) => (i > 0 && SMALL.has(w) ? w : w[0].toUpperCase() + w.slice(1)));
  return `${words.join(' ')} ${m[2]}`;
}

const SALUTATION = /^MY DEAR [A-Z]+:--$/;

// What was found when the text was brought in: 14 passages of verse (one
// of them an epitaph in seven lines), 13 paragraphs quoted from letters
// and diaries, with two date lines and two salutations.
const EXPECTED = { stanzas: 14, verseLines: 51, quoted: 13, letterHeads: 4 };

// A paragraph begins two spaces in and runs on at the margin. Verse and
// quoted letters are indented in every line.
function blocksOf(paras, count) {
  const blocks = [];
  paras.forEach((lines, i) => {
    const text = prose(lines);
    const first = indent(lines[0]);
    const rest = lines.slice(1).map(indent);
    const next = paras[i + 1];
    if (lines.length === 1) {
      // a letter's date and "MY DEAR ...:--" stand on lines of their own
      if (SALUTATION.test(text) || (first === 0 && next && SALUTATION.test(next[next.length - 1].trim()))) {
        blocks.push({ k: 'q', text });
        count.letterHeads++;
      } else if (first === 2 && /^".*"$/.test(text) && i > 0 && /:--$/.test(paras[i - 1][paras[i - 1].length - 1])) {
        // one line of verse quoted by itself
        blocks.push({ k: 'v', lines: [text] });
        count.stanzas++;
        count.verseLines++;
      } else if (first > 2) throw new Error(`Adams: a line set apart and not understood: ${text.slice(0, 50)}`);
      else blocks.push({ k: 'p', text });
    } else if (SALUTATION.test(lines[lines.length - 1].trim())) {
      // the date and the salutation without a blank line between
      for (const l of lines) blocks.push({ k: 'q', text: prose([l]) });
      count.letterHeads += lines.length;
    } else if (lines.every((l) => l.trim().length <= 24 && l === l.toUpperCase())) {
      // an epitaph, centred line by line
      blocks.push({ k: 'v', lines: lines.map((l) => clean(l).trim()) });
      count.stanzas++;
      count.verseLines += lines.length;
    } else if (Math.min(...rest) >= 2) {
      if (rest.every((n) => n === 2) && first <= 4) {
        // prose quoted from a letter or a diary
        blocks.push({ k: 'q', text });
        count.quoted++;
      } else {
        blocks.push({ k: 'v', lines: lines.map((l) => clean(l).trim()) });
        count.stanzas++;
        count.verseLines += lines.length;
      }
    } else {
      if (first > 2 || Math.max(...rest) > 0) throw new Error(`Adams: a paragraph of a shape not understood: ${text.slice(0, 50)}`);
      blocks.push({ k: 'p', text });
    }
  });
  return blocks;
}

// run(report) hands the figures of the checks to report, if one is given.
export function run(report = () => {}) {
  const body = gutenbergBody(fetchText(NAME, URL));
  // From the heading of the Editor's Preface (the one at the margin; the
  // contents has it indented) to THE END.
  const start = body.indexOf("EDITOR'S PREFACE");
  const end = body.indexOf('THE END');
  if (start < 0 || end < start) throw new Error("Adams: cannot find EDITOR'S PREFACE ... THE END");
  const lines = body.slice(start, end);

  const parts = [];
  const count = Object.fromEntries(Object.keys(EXPECTED).map((k) => [k, 0]));
  let cur = null; // { meta, paras }
  let chapters = 0;
  let headingWords = 0;
  let wantTitle = false;
  const close = () => {
    if (!cur) return;
    parts.push({ ...cur.meta, blocks: blocksOf(cur.paras, count) });
    cur = null;
  };
  for (const p of paragraphs(lines)) {
    const one = p.length === 1 && indent(p[0]) === 0 ? p[0] : null;
    let m;
    if (wantTitle) {
      if (!one) throw new Error(`Adams: chapter ${chapters} has no title`);
      cur.meta.label = `Chapter ${chapters}: ${title(one)}`;
      wantTitle = false;
      headingWords += countWords(one);
    } else if (one === "EDITOR'S PREFACE" && !parts.length && !cur) {
      cur = { meta: { id: 'editors-preface', label: "Editor's Preface" }, paras: [] };
      headingWords += 2;
    } else if (one === 'PREFACE' && cur && cur.meta.id === 'editors-preface') {
      close();
      cur = { meta: { id: 'preface', label: 'Preface' }, paras: [] };
      headingWords += 1;
    } else if (one === 'THE EDUCATION OF HENRY ADAMS' && cur && cur.meta.id === 'preface') {
      // the half-title before Chapter I
      headingWords += 5;
    } else if (one && (m = one.match(/^CHAPTER ([IVXL]+)$/))) {
      close();
      if (roman(m[1]) !== ++chapters) throw new Error(`Adams: chapter ${m[1]} out of order`);
      cur = { meta: { id: `c${pad2(chapters)}`, label: null }, paras: [] };
      wantTitle = true;
      headingWords += 2;
    } else {
      if (!cur) throw new Error(`Adams: text outside a part: ${p[0]}`);
      if (one && /^(CHAPTER|PREFACE|EDITOR)/.test(one)) throw new Error(`Adams: unrecognised heading: ${one}`);
      cur.paras.push(p);
    }
  }
  close();

  if (chapters !== 35) throw new Error(`Adams: expected 35 chapters, found ${chapters}`);
  if (parts.length !== 37 || parts[0].id !== 'editors-preface' || parts[1].id !== 'preface') throw new Error(`Adams: expected two prefaces and 35 chapters, found ${parts.length} parts`);
  for (const k of Object.keys(EXPECTED)) {
    if (count[k] !== EXPECTED[k]) throw new Error(`Adams: set-apart matter has changed: ${JSON.stringify(count)}`);
  }

  const index = writeText('adams', {
    author: 'Henry Adams',
    title: 'The Education of Henry Adams',
    translator: null,
    year: 1918,
    verse: false,
    source: { name: 'Project Gutenberg, no. 2044', url: 'https://www.gutenberg.org/ebooks/2044' },
  }, parts);

  // Nothing lost: the words written out against the words of the source
  // between the two headings, less the headings that went into labels.
  const sourceWords = countWords(lines.join('\n'));
  const expected = sourceWords - headingWords;
  if (Math.abs(index.words - expected) > 0.01 * expected) throw new Error(`Adams: ${index.words} words written, ${expected} in the source`);
  report({ words: index.words, sourceWords, headingWords, expected, chapters, count });
  return index;
}
