// Augustine, Confessions, in E. B. Pusey's translation (1838), from
// Project Gutenberg no. 3296. Thirteen books; the transcription has no
// chapter divisions, so each book is one part.

import { fetchText, gutenbergBody, writeText, roman, pad2, countWords, blockWords } from '../lib/gutenberg.mjs';

const BOOKS = 13;
// The transcription closes with a colophon in capitals, which is the
// printer's and not Augustine's.
const COLOPHON = 'GRATIAS TIBI DOMINE';

const tidy = (s) => s.replace(/_/g, '').replace(/\[\d+\]/g, '').replace(/ {2,}/g, ' ').trim();

// Paragraphs are separated by blank lines. A paragraph whose every line
// is set in by four spaces or more is a quotation in verse.
function blocksOf(lines) {
  const blocks = [];
  let cur = [];
  const flush = () => {
    if (!cur.length) return;
    if (cur.every((l) => /^ {4,}\S/.test(l))) blocks.push({ k: 'v', lines: cur.map(tidy) });
    else blocks.push({ k: 'p', text: tidy(cur.map((l) => l.trim()).join(' ')) });
    cur = [];
  };
  for (const l of lines) {
    if (l.trim() === '') flush();
    else cur.push(l);
  }
  flush();
  return blocks;
}

export function run() {
  const body = gutenbergBody(fetchText('pg3296_augustine.txt', 'https://www.gutenberg.org/cache/epub/3296/pg3296.txt'));

  const raw = [];
  let cur = null;
  for (const line of body) {
    const m = line.match(/^BOOK ([IVXL]+)\s*$/);
    if (m) {
      cur = { n: roman(m[1]), numeral: m[1], lines: [] };
      raw.push(cur);
    } else if (cur) cur.lines.push(line);
  }
  if (raw.length !== BOOKS) throw new Error(`augustine: expected ${BOOKS} books, found ${raw.length}`);
  raw.forEach((b, i) => {
    if (b.n !== i + 1) throw new Error(`augustine: book ${i + 1} is headed BOOK ${b.numeral}`);
  });

  const parts = raw.map((b) => ({ id: `book-${pad2(b.n)}`, label: `Book ${b.numeral}`, blocks: blocksOf(b.lines) }));

  // Drop the colophon, and be sure it was there to drop.
  const last = parts[parts.length - 1].blocks;
  const end = last[last.length - 1];
  const endText = end.k === 'v' ? end.lines.join(' ') : end.text;
  if (endText !== COLOPHON) throw new Error(`augustine: expected the colophon ${COLOPHON} at the end, found ${JSON.stringify(endText.slice(0, 40))}`);
  last.pop();

  // The work begins with the praise of God and ends on Amen.
  const first = parts[0].blocks[0];
  if (first.k !== 'p' || !first.text.startsWith('Great art Thou, O Lord')) throw new Error('augustine: Book I does not open as expected');
  const close = last[last.length - 1];
  if (close.k !== 'p' || !close.text.endsWith('so shall it be opened. Amen.')) throw new Error('augustine: Book XIII does not close as expected');

  // Nothing lost: every word of the source between BOOK I and the end
  // is in a block, save the thirteen headings and the colophon.
  const sourceWords = raw.reduce((a, b) => a + 2 + b.lines.reduce((x, l) => x + countWords(l), 0), 0);
  const words = parts.reduce((a, p) => a + blockWords(p.blocks), 0);
  const dropped = BOOKS * 2 + countWords(COLOPHON);
  if (words !== sourceWords - dropped) throw new Error(`augustine: ${words} words in the parts, ${sourceWords} in the source body less ${dropped} for headings and colophon`);
  for (const p of parts) {
    for (const b of p.blocks) {
      for (const t of b.k === 'v' ? b.lines : [b.text]) {
        if (/[_\[\]{}*=]/.test(t)) throw new Error(`augustine: markup left in ${p.id}: ${JSON.stringify(t.slice(0, 60))}`);
      }
    }
  }
  const verse = parts.reduce((a, p) => a + p.blocks.filter((b) => b.k === 'v').length, 0);
  if (verse !== 6) throw new Error(`augustine: expected 6 verse quotations, found ${verse}`);

  const index = writeText('augustine', {
    author: 'Augustine of Hippo',
    title: 'Confessions',
    translator: 'E. B. Pusey',
    year: 1838,
    verse: false,
    source: { name: 'Project Gutenberg, no. 3296', url: 'https://www.gutenberg.org/ebooks/3296' },
  }, parts);
  return { ...index, sourceWords };
}
