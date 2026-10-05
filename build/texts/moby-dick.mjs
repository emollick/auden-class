// Melville, Moby-Dick; or, The Whale (1851).
// Project Gutenberg no. 2701. See notes/moby-dick.md.

import { fetchText, gutenbergBody, clean, countWords, writeText } from '../lib/gutenberg.mjs';

const NAME = 'pg2701_moby_dick.txt';
const URL = 'https://www.gutenberg.org/cache/epub/2701/pg2701.txt';
// No. 2701 runs the lines of the hymn and the songs together as if they
// were prose. Another transcription, no. 15, keeps them. The words are
// taken from no. 2701; no. 15 only says where each line ends.
const LINES_NAME = 'pg15_moby_dick.txt';
const LINES_URL = 'https://www.gutenberg.org/cache/epub/15/pg15.txt';

// The file puts two invisible marks of direction (U+200F, U+200E) round
// the Hebrew word in the Etymology. They are not in the book as printed
// and come out. (Written by number, so that neither stands in this file.)
const DIRECTION_MARKS = new RegExp(`[${String.fromCodePoint(0x200e, 0x200f)}]`, 'g');

const pad3 = (n) => String(n).padStart(3, '0');
const prose = (lines) => clean(lines.map((l) => l.trim()).join(' ')).trim();

// Runs of lines between blank lines, with the number of blank lines
// before and after each: the file sets verse apart with extra blank lines.
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

// Melville's own footnotes. The source marks each with an asterisk and
// prints it as a paragraph after the one it belongs to. Three of them run
// on into further paragraphs, which begin with these words.
const NOTE_RUNS_ON = {
  42: ['As for the white shark,', 'I assert, then,', 'But how had the mystic thing been caught?'],
  45: ['Here are his reflections some time after', 'In another place—p. 45,—'],
};

// Chapters written, or partly written, as scenes of a play. A paragraph
// that is all italics there is a stage direction. (Chapter 54 has a line
// of the same shape under its title, "As told at the Golden Inn", which
// is not one: see SUBTITLE below.)
const SCENES = new Set([36, 37, 38, 39, 40, 108, 119, 120, 121, 122, 127, 129]);

// Things the book displays as documents: a playbill, three tablets, a
// mark, a list of stores. The source gives each a paragraph of its own.
const DISPLAYED = {
  1: /^“Grand Contested Election for the Presidency/,
  7: /^SACRED TO THE MEMORY OF /,
  18: /^Quohog\. his X mark\.$/,
  101: /^400,000 lbs\. of beef\. /,
};
// Chapters that open with an epigraph (and the Epilogue does).
const EPIGRAPH = new Set([90, 91, 'epilogue']);
// A line that stands under a heading and belongs to it: who supplied the
// Etymology and the Extracts, where a scene is set or a story was told,
// the second half of a chapter's title. The source gives each a line to
// itself after the heading; here it is a heading inside the part.
const SUBTITLE = {
  etymology: /^\(Supplied by a Late Consumptive Usher to a Grammar School\.\)$/,
  extracts: /^\(Supplied by a Sub-Sub-Librarian\)\.$/,
  39: /^Fore-Top\.$/,
  40: /^HARPOONEERS AND SAILORS\.$/,
  54: /^\(As told at the Golden Inn\.\)$/,
  100: /^The Pequod, of Nantucket, Meets the Samuel Enderby, of London\.$/,
  108: /^The Deck—First Night Watch\.$/,
};
function subtitle(where, text, count) {
  if (!SUBTITLE[where].test(text)) throw new Error(`Moby-Dick: the line under the heading of ${where} is not the one expected: ${text.slice(0, 50)}`);
  count.subtitles++;
  return { k: 'h', text, level: 3 };
}

// What was found when the text was brought in. If the source changes
// these change, and the result has to be looked at again.
// (Chapter 24 marks its one note in two places: 23 marks, 22 notes.)
const EXPECTED = { marks: 23, notes: 22, noteParagraphs: 27, stanzas: 13, verseLines: 55, directions: 17, displayed: 6, epigraphs: 3, rules: 2, extracts: 82, subtitles: 7 };

// Where the lines of a stanza end, from the transcription that keeps them.
// The two transcriptions differ in a spelling here and there
// ("harpooner", "harpooneer"), so the words are aligned, not just matched.
function lineator(ref) {
  const bare = (w) => w.normalize('NFD').replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();
  const words = [];
  const lineOf = [];
  ref.forEach((l, i) => {
    for (const w of clean(l).split(/\s+/)) {
      const b = bare(w);
      if (b) {
        words.push(b);
        lineOf.push(i);
      }
    }
  });
  // Align a (all of it) with the words of no. 15 from pos on. Returns the
  // number of differences and, for each word of a, the line it falls on.
  const align = (a, pos) => {
    const b = words.slice(pos, pos + a.length + 4);
    const W = b.length + 1;
    const cost = new Int32Array((a.length + 1) * W);
    for (let j = 0; j <= b.length; j++) cost[j] = j;
    for (let i = 1; i <= a.length; i++) {
      cost[i * W] = i;
      for (let j = 1; j <= b.length; j++) {
        cost[i * W + j] = Math.min(cost[(i - 1) * W + j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1), cost[(i - 1) * W + j] + 1, cost[i * W + j - 1] + 1);
      }
    }
    let j = 0;
    for (let k = 1; k <= b.length; k++) if (cost[a.length * W + k] < cost[a.length * W + j]) j = k;
    const distance = cost[a.length * W + j];
    const lines = new Array(a.length);
    let i = a.length;
    while (i > 0) {
      const here = cost[i * W + j];
      if (j > 0 && here === cost[(i - 1) * W + j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)) {
        lines[--i] = lineOf[pos + --j];
      } else if (here === cost[(i - 1) * W + j] + 1) {
        lines[--i] = j > 0 ? lineOf[pos + j - 1] : lineOf[pos]; // a word no. 15 has not got
      } else j--;
    }
    return { distance, lines };
  };
  return (text) => {
    const chunks = text.split(/\s+/).filter(Boolean);
    const a = chunks.map(bare).filter(Boolean);
    const allowed = Math.max(1, Math.floor(a.length / 12)); // differences of spelling
    let best = null;
    for (let pos = 0; pos < words.length; pos++) {
      if (words[pos] !== a[0] || words[pos + 1] !== a[1]) continue;
      const r = align(a, pos);
      if (r.distance > allowed) continue;
      const shape = r.lines.map((l, i) => (i && l !== r.lines[i - 1] ? '/' : '')).join(',');
      if (best && shape !== best.shape) throw new Error(`Moby-Dick: verse found twice in no. 15, divided differently: ${text.slice(0, 40)}`);
      if (!best || r.distance < best.distance) best = { ...r, shape };
    }
    if (!best) throw new Error(`Moby-Dick: cannot find the lines of this verse in no. 15: ${text.slice(0, 40)}`);
    const lines = [];
    let k = 0;
    let last = null;
    for (const c of chunks) {
      const line = bare(c) ? best.lines[k++] : last; // a dash standing alone stays on its line
      if (line !== last || !lines.length) lines.push([]);
      lines[lines.length - 1].push(c);
      last = line;
    }
    return lines.map((l) => l.join(' '));
  };
}

function chapterBlocks(n, paras, lineate, count) {
  const blocks = [];
  const runsOn = (NOTE_RUNS_ON[n] || []).slice();
  let inNote = false;
  let setOff = false;
  paras.forEach((p, i) => {
    const text = prose(p.lines);
    const raw = p.lines.map((l) => l.trim()).join(' ');
    if (p.before === 2) setOff = true;
    const inSetOff = setOff;
    if (p.after >= 3) setOff = false;

    // a row of asterisks marks a break; there is nothing to print
    if (/^(\* ?)+$/.test(text)) {
      count.rules++;
      inNote = false;
      return;
    }
    if (i === 0 && SUBTITLE[n]) {
      blocks.push(subtitle(n, text, count));
      return;
    }
    if (/^\*[A-Z]/.test(text)) {
      blocks.push({ k: 'q', text });
      count.notes++;
      count.noteParagraphs++;
      inNote = true;
      return;
    }
    if (inNote && runsOn.length && text.startsWith(runsOn[0])) {
      runsOn.shift();
      blocks.push({ k: 'q', text });
      count.noteParagraphs++;
      return;
    }
    inNote = false;
    // an asterisk in the text is the mark of a note, unless it is one of
    // a row ("* * *") that Melville uses for words left out
    count.marks += (text.replace(/\*( \*)+/g, '').match(/\*/g) || []).length;

    if (inSetOff) {
      const lines = lineate(text);
      blocks.push({ k: 'v', lines });
      count.stanzas++;
      count.verseLines += lines.length;
      return;
    }
    if (p.lines.some((l) => /^\s/.test(l)) && !/^Thus ends BOOK II\./.test(text)) throw new Error(`Moby-Dick: indented lines not understood in chapter ${n}: ${text.slice(0, 50)}`);

    if (SCENES.has(n)) {
      const inner = raw.replace(/^\((.*)\)$/, '$1').replace(/^\[(.*)\]$/, '$1');
      if (/_/.test(inner) && inner.replace(/_[^_]*_/g, '').replace(/[\s.—]/g, '') === '') {
        blocks.push({ k: 'd', text: clean(inner) });
        count.directions++;
        return;
      }
    }
    if (i === 0 && EPIGRAPH.has(n)) {
      blocks.push({ k: 'q', text });
      count.epigraphs++;
      return;
    }
    if (DISPLAYED[n] && DISPLAYED[n].test(text)) {
      blocks.push({ k: 'q', text });
      count.displayed++;
      return;
    }
    blocks.push({ k: 'p', text });
  });
  if (setOff) throw new Error(`Moby-Dick: chapter ${n} ends inside a passage set apart`);
  if (runsOn.length) throw new Error(`Moby-Dick: chapter ${n}: a footnote does not run on as expected (${runsOn[0]})`);
  return blocks;
}

// run(report) hands the figures of the checks to report, if one is given.
export function run(report = () => {}) {
  const body = gutenbergBody(fetchText(NAME, URL).replace(DIRECTION_MARKS, ''));
  const lineate = lineator(gutenbergBody(fetchText(LINES_NAME, LINES_URL)));

  // The work begins at the Etymology, after the contents and a note by
  // the transcribers, and runs to the end of the file.
  const tn = body.indexOf('Original Transcriber’s Notes:');
  const start = body.findIndex((l, i) => i > tn && l.trim() === 'ETYMOLOGY.');
  if (tn < 0 || start < 0) throw new Error('Moby-Dick: cannot find the Etymology');
  const lines = body.slice(start);

  const parts = [];
  const count = Object.fromEntries(Object.keys(EXPECTED).map((k) => [k, 0]));
  let cur = null; // { kind, n, meta, paras, blocks }
  let chapters = 0;
  let headingWords = 0;
  const close = () => {
    if (!cur) return;
    if (cur.paras) cur.blocks = chapterBlocks(cur.n, cur.paras, lineate, count);
    parts.push({ ...cur.meta, blocks: cur.blocks });
    cur = null;
  };
  for (const p of paragraphs(lines)) {
    const text = prose(p.lines);
    let m;
    if (text === 'ETYMOLOGY.' && !parts.length && !cur) {
      cur = { kind: 'etymology', meta: { id: 'etymology', label: 'Etymology' }, blocks: [] };
      headingWords += 1;
    } else if ((m = text.match(/^EXTRACTS\. (\(Supplied by a Sub-Sub-Librarian\)\.)$/)) && cur && cur.kind === 'etymology') {
      close();
      cur = { kind: 'extracts', meta: { id: 'extracts', label: 'Extracts' }, blocks: [subtitle('extracts', m[1], count)], intro: true };
      headingWords += 1;
    } else if ((m = p.lines[0].match(/^CHAPTER (\d+)\. (.+)$/)) && p.before >= 2) {
      close();
      const n = Number(m[1]);
      if (n !== ++chapters) throw new Error(`Moby-Dick: chapter ${n} out of order`);
      const name = prose([m[2], ...p.lines.slice(1)]).replace(/\.$/, '');
      cur = { kind: 'chapter', n, meta: { id: `c${pad3(n)}`, label: `Chapter ${n}: ${name}` }, paras: [] };
      headingWords += countWords(text);
    } else if (text === 'Epilogue' && p.before === 2 && chapters === 135) {
      close();
      cur = { kind: 'epilogue', n: 'epilogue', meta: { id: 'epilogue', label: 'Epilogue' }, paras: [] };
      headingWords += 1;
    } else if (!cur) {
      throw new Error(`Moby-Dick: text before the Etymology: ${text.slice(0, 50)}`);
    } else if (cur.kind === 'etymology') {
      // the table of the word in thirteen languages: a line to each
      if (!cur.blocks.length) cur.blocks.push(subtitle('etymology', text, count));
      else if (p.lines.every((l) => /^\s*\S+,\s+_[A-Za-z-]+_\.$/.test(l))) cur.blocks.push({ k: 'v', lines: p.lines.map((l) => clean(l).trim()) });
      else cur.blocks.push({ k: 'p', text });
    } else if (cur.kind === 'extracts') {
      // the heading comes a second time, over the quotations themselves
      if (text === 'EXTRACTS.' && cur.intro) {
        cur.intro = false;
        headingWords += 1;
      } else {
        if (!cur.intro) count.extracts++;
        cur.blocks.push({ k: 'p', text });
      }
    } else {
      if (/^(CHAPTER \d|EPILOGUE|Epilogue$|ETYMOLOGY|EXTRACTS)/.test(text)) throw new Error(`Moby-Dick: unrecognised heading: ${text.slice(0, 50)}`);
      cur.paras.push(p);
    }
  }
  close();

  if (chapters !== 135) throw new Error(`Moby-Dick: expected 135 chapters, found ${chapters}`);
  const ids = parts.map((p) => p.id);
  if (parts.length !== 138 || ids[0] !== 'etymology' || ids[1] !== 'extracts' || ids[2] !== 'c001' || ids[136] !== 'c135' || ids[137] !== 'epilogue') {
    throw new Error(`Moby-Dick: expected Etymology, Extracts, 135 chapters and the Epilogue, found ${parts.length} parts`);
  }
  if (parts[0].blocks.filter((b) => b.k === 'v').length !== 1 || parts[0].blocks.find((b) => b.k === 'v').lines.length !== 13) throw new Error('Moby-Dick: the table of thirteen languages in the Etymology was not found');
  for (const k of Object.keys(EXPECTED)) {
    if (count[k] !== EXPECTED[k]) throw new Error(`Moby-Dick: set-apart matter has changed: ${JSON.stringify(count)}`);
  }

  const index = writeText('moby-dick', {
    author: 'Herman Melville',
    title: 'Moby-Dick; or, The Whale',
    translator: null,
    year: 1851,
    verse: false,
    source: { name: 'Project Gutenberg, no. 2701', url: 'https://www.gutenberg.org/ebooks/2701' },
  }, parts);

  // Nothing lost: the words written out against the words of the source
  // from the Etymology to the end, less the headings that went into
  // labels and the two rows of asterisks.
  const sourceWords = countWords(lines.join('\n'));
  const expected = sourceWords - headingWords - 12;
  if (Math.abs(index.words - expected) > 0.01 * expected) throw new Error(`Moby-Dick: ${index.words} words written, ${expected} in the source`);
  report({ words: index.words, sourceWords, headingWords, expected, chapters, count });
  return index;
}
