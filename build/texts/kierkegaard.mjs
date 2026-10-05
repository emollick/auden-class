// Kierkegaard, Fear and Trembling: the selection L. M. Hollander
// translated in Selections from the Writings of Kierkegaard (University
// of Texas Bulletin no. 2326, 1923), from Project Gutenberg no. 60333.
// Only that selection is taken, without Hollander's footnotes. By his
// own account it is about a third of the book.

import { fetchText, gutenbergBody, writeText, blockWords } from '../lib/gutenberg.mjs';

// The headings of the selection, in order, as the file prints them. The
// first is Kierkegaard's preface; the Bulletin heads it INTRODUCTION,
// and the transcriber added the numeral to tell it from Hollander's own
// introduction to the volume (INTRODUCTION I).
const HEADINGS = [
  ['INTRODUCTION II', 'Introduction'],
  ['PREPARATION', 'Preparation'],
  ['A PANEGYRIC ON ABRAHAM', 'A Panegyric on Abraham'],
  ['PRELIMINARY EXPECTORATION', 'Preliminary Expectoration'],
];
const NOTES = 18;

const tidy = (s) => s.replace(/_/g, '').replace(/\[\d+\]/g, '').replace(/ {2,}/g, ' ').trim();

export function run() {
  const body = gutenbergBody(fetchText('pg60333_kierkegaard.txt', 'https://www.gutenberg.org/cache/epub/60333/pg60333.txt'));

  // In the table of contents both titles end in a full stop; as headings
  // they stand bare.
  const start = body.findIndex((l) => l === 'FEAR AND TREMBLING');
  const end = body.findIndex((l, i) => i > start && l === 'PREPARATION FOR A CHRISTIAN LIFE');
  if (start < 0 || end < 0) throw new Error('kierkegaard: cannot find the selection');
  const all = body.slice(start + 1, end);

  // Hollander's footnotes are gathered after the text.
  const fn = all.findIndex((l) => l.startsWith('[Footnote '));
  if (fn < 0) throw new Error('kierkegaard: no footnotes found after the selection');
  const lines = all.slice(0, fn);
  const footnotes = all.slice(fn).join('\n').split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
  footnotes.forEach((f, i) => {
    if (!f.startsWith(`[Footnote ${i + 1}: `) || !f.endsWith(']')) throw new Error(`kierkegaard: after the text, expected footnote ${i + 1}, found ${JSON.stringify(f.slice(0, 30))}`);
  });
  if (footnotes.length !== NOTES) throw new Error(`kierkegaard: expected ${NOTES} footnotes, found ${footnotes.length}`);
  const markers = (lines.join('\n').match(/\[\d+\]/g) || []).map((m) => Number(m.slice(1, -1)));
  if (markers.length !== NOTES || markers.some((n, i) => n !== i + 1)) throw new Error(`kierkegaard: note markers are ${markers.join(',')}`);

  const parts = [];
  let cur = null;
  let para = [];
  const flush = () => {
    if (!para.length) return;
    if (!cur) throw new Error(`kierkegaard: text before the first heading: ${JSON.stringify(para[0].slice(0, 40))}`);
    cur.blocks.push({ k: 'p', text: tidy(para.map((l) => l.trim()).join(' ')) });
    para = [];
  };
  for (const line of lines) {
    const t = line.trim();
    if (t === '') {
      flush();
      continue;
    }
    const next = HEADINGS[parts.length];
    if (next && t === next[0]) {
      flush();
      cur = { id: `p${parts.length + 1}`, label: next[1], blocks: [] };
      parts.push(cur);
    } else if (/^[IVX]+$/.test(t) && !para.length) {
      // the four tellings of the journey in the Preparation
      if (!cur) throw new Error(`kierkegaard: numeral ${t} before the first heading`);
      cur.blocks.push({ k: 'h', level: 3, text: t });
    } else if (/^[A-Z][A-Z ]+$/.test(t)) {
      throw new Error(`kierkegaard: unexpected heading ${JSON.stringify(t)}`);
    } else para.push(line);
  }
  flush();

  if (parts.length !== HEADINGS.length) throw new Error(`kierkegaard: expected ${HEADINGS.length} headed parts, found ${parts.length}`);
  const numerals = parts.map((p) => p.blocks.filter((b) => b.k === 'h').map((b) => b.text).join(' '));
  if (numerals.join('|') !== '|I II III IV||') throw new Error(`kierkegaard: numbered divisions are ${JSON.stringify(numerals)}`);
  for (const p of parts) {
    if (!p.blocks.length) throw new Error(`kierkegaard: ${p.label} is empty`);
    for (const b of p.blocks) if (/[_\[\]*=]/.test(b.text)) throw new Error(`kierkegaard: markup left in ${p.id}: ${JSON.stringify(b.text.slice(0, 60))}`);
  }
  if (!parts[0].blocks[0].text.startsWith('Not only in the world of commerce')) throw new Error('kierkegaard: the selection does not open as expected');
  const last = parts[3].blocks;
  if (!last[last.length - 1].text.endsWith('that I call ridiculous.')) throw new Error('kierkegaard: the selection does not close as expected');

  // Nothing lost: the words of the blocks are the words of the lines,
  // less the four headings (the numerals are kept as headings).
  const count = (s) => (s.trim() ? s.trim().split(/\s+/).length : 0);
  const sourceWords = lines.reduce((a, l) => a + count(l), 0);
  const headingWords = HEADINGS.reduce((a, h) => a + count(h[0]), 0);
  const words = parts.reduce((a, p) => a + blockWords(p.blocks), 0);
  if (words !== sourceWords - headingWords) throw new Error(`kierkegaard: ${words} words in the parts, ${sourceWords} in the selection less ${headingWords} in headings`);

  const index = writeText('kierkegaard', {
    author: 'Søren Kierkegaard',
    title: 'Fear and Trembling (selections)',
    translator: 'L. M. Hollander',
    year: 1923,
    verse: false,
    source: { name: 'Project Gutenberg, no. 60333', url: 'https://www.gutenberg.org/ebooks/60333' },
  }, parts);
  return index;
}
