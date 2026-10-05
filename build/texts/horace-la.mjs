// Horace, the Odes and the Carmen Saeculare in Latin.
// Project Gutenberg no. 46938: The Works of Horace, with English Notes,
// by A. J. Macleane, revised and edited by Reginald H. Chase (Boston:
// Allyn and Bacon, 1895). The notes stand together at the end of that
// book, so the Latin of the Odes cuts clean: only the line numbers in
// the margin and one pair of italic marks come away. See notes/horace-la.md.

import { fetchText, gutenbergBody, writeText, roman, pad2 } from '../lib/gutenberg.mjs';

// The lines of each ode, as the editions count them.
export const ODE_LINES = {
  1: [36, 52, 40, 20, 16, 20, 32, 16, 24, 20, 8, 60, 20, 20, 36, 28, 28, 16, 16, 12, 16, 24, 12, 20, 20, 12, 24, 36, 16, 8, 20, 16, 16, 16, 40, 20, 32, 8],
  2: [40, 24, 28, 24, 24, 24, 28, 24, 24, 24, 24, 28, 40, 28, 20, 40, 32, 40, 32, 24],
  3: [48, 32, 72, 80, 56, 48, 32, 28, 24, 20, 52, 12, 16, 28, 16, 44, 16, 16, 28, 16, 24, 8, 20, 64, 20, 12, 76, 16, 64, 16],
  4: [40, 60, 24, 76, 40, 44, 28, 34, 52, 8, 36, 28, 28, 52, 32],
};
export const HYMN_LINES = 76;
export const BOOKS = ['I', 'II', 'III', 'IV'];
export const odeId = (book, num) => `o${book}-${pad2(num)}`;

// Neither this book nor Conington's leaves a space between stanzas: the
// stanza shows only in the indenting of its lines. Horace's odes go by
// fours (Meineke's rule), with two exceptions: III.12, which goes by
// threes, and IV.8, whose 34 lines leave a couplet over at the end.
export function stanzaBlocks(lines, book, num) {
  const size = book === 3 && num === 12 ? 3 : 4;
  const over = lines.length % size;
  if (over && !(book === 4 && num === 8 && over === 2)) throw new Error(`Horace ${BOOKS[book - 1] || 'hymn'}.${num}: ${lines.length} lines do not divide by ${size}`);
  const blocks = [];
  for (let i = 0; i < lines.length; i += size) blocks.push({ k: 'v', lines: lines.slice(i, i + size) });
  return blocks;
}

const ORDINAL = ['PRIMUS', 'SECUNDUS', 'TERTIUS', 'QUARTUS'];

export function build() {
  const body = gutenbergBody(fetchText('pg46938_horace_latin.txt', 'https://www.gutenberg.org/cache/epub/46938/pg46938.txt'));
  const only = (test, what) => {
    const at = body.map((l, i) => (test(l) ? i : -1)).filter((i) => i >= 0);
    if (at.length !== 1) throw new Error(`horace-la: ${what} found ${at.length} times`);
    return at[0];
  };
  const start = only((l) => l === 'CARMINUM LIBER PRIMUS.', 'the heading of the first book');
  const end = only((l) => l === 'EPODON LIBER', 'the heading of the Epodes');
  if (end < start) throw new Error('horace-la: the Epodes come before the Odes');

  const odes = [];
  let book = 0;
  let cur = null;
  let closed = false; // a blank line has followed the lines of the ode
  let numbers = 0;
  let italics = 0;
  for (let i = start; i < end; i++) {
    const raw = body[i];
    const where = `line ${i + 1} of the body`;
    let m;
    if (raw.trim() === '') {
      if (cur && cur.lines.length) closed = true;
      continue;
    }
    if ((m = raw.match(/^CARMINUM LIBER (PRIMUS|SECUNDUS|TERTIUS|QUARTUS)\.?$/))) {
      if (ORDINAL.indexOf(m[1]) !== book) throw new Error(`horace-la: book out of order, ${where}`);
      book++;
      cur = null;
      continue;
    }
    if ((m = raw.match(/^CARMEN ([IVXL]+)\.$/))) {
      const num = roman(m[1]);
      const prev = odes.filter((o) => o.book === book).length;
      if (!book || num !== prev + 1) throw new Error(`horace-la: ode ${m[1]} out of order, ${where}`);
      cur = { book, num, lines: [] };
      odes.push(cur);
      closed = false;
      continue;
    }
    if (raw === 'CARMEN SAECULARE.') {
      if (book !== 4) throw new Error(`horace-la: the hymn does not follow the fourth book, ${where}`);
      cur = { book: 0, num: 0, lines: [] };
      odes.push(cur);
      closed = false;
      continue;
    }
    if (!cur || !/^ {4,}\S/.test(raw)) throw new Error(`horace-la: line not understood, ${where}: ${JSON.stringify(raw.slice(0, 50))}`);
    if (closed) throw new Error(`horace-la: a blank line inside an ode, ${where}`);
    let line = raw;
    // the number in the margin, which must be the number of the line
    if ((m = line.match(/^(.*\S) {2,}(\d+)$/))) {
      if (Number(m[2]) !== cur.lines.length + 1 || Number(m[2]) % 5) throw new Error(`horace-la: margin number ${m[2]} on line ${cur.lines.length + 1}, ${where}`);
      line = m[1];
      numbers++;
    } else if ((cur.lines.length + 1) % 5 === 0) {
      // every fifth line is numbered in the margin, but for one
      if (!(cur.book === 1 && cur.num === 38 && cur.lines.length === 4)) throw new Error(`horace-la: no margin number on a fifth line, ${where}`);
    }
    if (/_/.test(line)) {
      const plain = line.replace(/_([^_]+)_/g, '$1');
      if (/_/.test(plain)) throw new Error(`horace-la: odd underscore, ${where}`);
      line = plain;
      italics++;
    }
    line = line.trim().replace(/ {2,}/g, ' '); // two spaces after a full stop, here and there
    if (/[^\p{L} ,.;:?!"()-]/u.test(line)) throw new Error(`horace-la: unexpected mark, ${where}: ${JSON.stringify(line)}`);
    cur.lines.push(line);
  }

  // The structure the work is known to have.
  const hymn = odes[odes.length - 1];
  if (hymn.book !== 0 || odes.filter((o) => o.book === 0).length !== 1) throw new Error('horace-la: the hymn is not the last piece');
  for (let b = 1; b <= 4; b++) {
    const got = odes.filter((o) => o.book === b).map((o) => o.lines.length);
    const want = ODE_LINES[b];
    if (got.length !== want.length) throw new Error(`horace-la: expected ${want.length} odes in book ${BOOKS[b - 1]}, found ${got.length}`);
    got.forEach((n, j) => {
      if (n !== want[j]) throw new Error(`horace-la: ${BOOKS[b - 1]}.${j + 1} has ${n} lines, expected ${want[j]}`);
    });
  }
  if (odes.length !== 104) throw new Error(`horace-la: expected 103 odes and the hymn, found ${odes.length} pieces`);
  if (hymn.lines.length !== HYMN_LINES) throw new Error(`horace-la: the hymn has ${hymn.lines.length} lines, expected ${HYMN_LINES}`);
  const total = odes.reduce((a, o) => a + o.lines.length, 0);
  if (numbers !== odes.reduce((a, o) => a + Math.floor(o.lines.length / 5), 0) - 1) throw new Error(`horace-la: ${numbers} margin numbers taken off, expected one for every fifth line but one`);
  if (italics !== 1) throw new Error(`horace-la: expected one line with italic marks, found ${italics}`);
  if (!odes[0].lines[0].startsWith('Maecenas atavis') || !hymn.lines[hymn.lines.length - 1].startsWith('Dicere laudes')) throw new Error('horace-la: the first or last line is not the one expected');

  const parts = odes.map((o) => (o.book
    ? { id: odeId(o.book, o.num), label: `${BOOKS[o.book - 1]}.${o.num}`, group: `Liber ${BOOKS[o.book - 1]}`, blocks: stanzaBlocks(o.lines, o.book, o.num) }
    : { id: 'cs', label: 'Carmen Saeculare', blocks: stanzaBlocks(o.lines, 0, 0) }));
  const lines = parts.reduce((a, p) => a + p.blocks.reduce((x, b) => x + b.lines.length, 0), 0);
  if (lines !== total) throw new Error(`horace-la: ${lines} lines in the parts, ${total} cut from the source`);
  return parts;
}

export function run() {
  return writeText('horace-la', {
    author: 'Horace',
    title: 'Carmina et Carmen Saeculare',
    translator: null,
    year: -23, // 23 BC, the first three books; the hymn is of 17 BC, the fourth book of about 13 BC. This edition: 1895.
    verse: true,
    lang: 'la',
    source: { name: 'Project Gutenberg, no. 46938', url: 'https://www.gutenberg.org/ebooks/46938' },
  }, build());
}
