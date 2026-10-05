// Rimbaud, Une saison en enfer, in French. Project Gutenberg no. 56668,
// a transcription of the first edition (Bruxelles: Alliance
// typographique, M.-J. Poot et compagnie, 1873). One part for each
// section of the book. See notes/rimbaud-fr.md.

import { fetchText, gutenbergBody, writeText, clean, countWords, blockWords } from '../lib/gutenberg.mjs';

// The headings as the file gives them, in the order of the book, and what
// each part is called here. A section may have more than one heading line;
// `under` is a heading line that is kept as a heading inside the part.
const SECTIONS = [
  { id: 's1', label: '« Jadis, si je me souviens bien… »', heads: ['* * * * *'] },
  { id: 's2', label: 'Mauvais sang', heads: ['MAUVAIS SANG'] },
  { id: 's3', label: "Nuit de l'enfer", heads: ["NUIT DE L'ENFER"] },
  { id: 's4', label: 'Délires I: Vierge folle', heads: ['DÉLIRES', 'I', 'VIERGE FOLLE', "L'ÉPOUX INFERNAL"], under: "L'Époux infernal" },
  { id: 's5', label: 'Délires II: Alchimie du verbe', heads: ['DÉLIRES', 'II', 'ALCHIMIE DU VERBE'] },
  { id: 's6', label: "L'impossible", heads: ["L'IMPOSSIBLE"] },
  { id: 's7', label: "L'éclair", heads: ["L'ÉCLAIR"] },
  { id: 's8', label: 'Matin', heads: ['MATIN'] },
  { id: 's9', label: 'Adieu', heads: ['ADIEU'] },
];

// Titles of two of the poems in Délires II, set in capitals above the verse.
const POEM_TITLES = { 'CHANSON DE LA PLUS HAUTE TOUR': 'Chanson de la plus haute tour', FAIM: 'Faim' };
// The last line of the first poem stands alone at the margin, not indented
// with the rest of the verse.
const LONE_LINE = /^Pleurant, je voyais de l'or--et ne pus boire\.--$/;
// The verse of Délires II, counted in the source: seven poems of
// 13, 20, 18, 12, 12, 24 and 14 lines, in 4, 5, 5, 3, 3, 6 and 8 stanzas
// (the lone line counts as one, and so does each one-line refrain).
const VERSE = { blocks: 34, lines: 113 };

export function build() {
  const body = gutenbergBody(fetchText('pg56668_rimbaud_saison.txt', 'https://www.gutenberg.org/cache/epub/56668/pg56668.txt'));
  const first = body.indexOf('* * * * *');
  const table = body.findIndex((l) => l.trim() === 'TABLE');
  if (first < 0 || table < first || body.indexOf('* * * * *', first + 1) >= 0) throw new Error('rimbaud-fr: cannot find the opening or the table at the end');
  // what stands before is the title page of 1873
  const front = body.slice(0, first).map((l) => l.trim()).filter(Boolean);
  for (const want of ['UNE SAISON EN ENFER', 'ARTUR RIMBAUD', 'BRUXELLES', '1873']) {
    if (!front.includes(want)) throw new Error(`rimbaud-fr: the title page lacks ${JSON.stringify(want)}`);
  }
  // and what stands after is only the table of contents: headings again
  const known = new Set(['TABLE', ...SECTIONS.flatMap((s) => s.heads)]);
  for (const l of body.slice(table)) {
    if (l.trim() && !known.has(l.trim())) throw new Error(`rimbaud-fr: unexpected line after the table: ${JSON.stringify(l)}`);
  }

  const lines = body.slice(first, table);
  // Paragraphs: runs of lines between blank lines.
  const paras = [];
  let cur = null;
  lines.forEach((l) => {
    if (l.trim() === '') cur = null;
    else {
      if (!cur) paras.push((cur = []));
      cur.push(l);
    }
  });

  const parts = [];
  let part = null;
  let section = -1;
  let pending = []; // heading lines still expected for the section being opened
  let sourceWords = 0;
  let headingWords = 0;
  const isHeading = (t) => /^[A-ZÉÈÀÔ' ]+$/.test(t) || t === '* * * * *';
  for (const para of paras) {
    const text = para.map((l) => l.trim()).join(' ');
    sourceWords += countWords(text.replace(/_/g, ''));
    const indented = para.every((l) => /^ {4,}\S/.test(l));
    const flush = para.every((l) => /^\S/.test(l));
    if (!indented && !flush) throw new Error(`rimbaud-fr: a paragraph partly indented: ${JSON.stringify(text.slice(0, 40))}`);

    if (flush && para.length === 1 && isHeading(text)) {
      if (!pending.length) {
        section++;
        const s = SECTIONS[section];
        if (!s) throw new Error(`rimbaud-fr: a heading after the last section: ${JSON.stringify(text)}`);
        pending = s.heads.slice();
        part = { id: s.id, label: s.label, blocks: [] };
        parts.push(part);
        if (s.under) part.blocks.push({ k: 'h', level: 3, text: s.under });
      }
      const want = pending.shift();
      if (text !== want) throw new Error(`rimbaud-fr: expected the heading ${JSON.stringify(want)}, found ${JSON.stringify(text)}`);
      // the last heading line of Délires I is kept inside the part; the rest go into labels
      if (!(SECTIONS[section].under && !pending.length)) headingWords += countWords(text);
      continue;
    }
    if (pending.length) throw new Error(`rimbaud-fr: text before the heading ${JSON.stringify(pending[0])}`);
    if (!part) throw new Error('rimbaud-fr: text before the opening');
    if (/[\[\]{}=*|]/.test(text)) throw new Error(`rimbaud-fr: unexpected mark in ${JSON.stringify(text.slice(0, 60))}`);

    if (indented) {
      if (part.id !== 's5') throw new Error(`rimbaud-fr: verse outside Délires II, in ${part.label}`);
      if (para.length === 1 && POEM_TITLES[text]) {
        part.blocks.push({ k: 'h', level: 3, text: POEM_TITLES[text] });
        headingWords += countWords(text) - countWords(POEM_TITLES[text]);
      } else if (isHeading(text)) throw new Error(`rimbaud-fr: unexpected title ${JSON.stringify(text)}`);
      else part.blocks.push({ k: 'v', lines: para.map((l) => clean(l).trim()) });
    } else if (para.length === 1 && LONE_LINE.test(text)) {
      if (part.id !== 's5' || part.blocks[part.blocks.length - 1].k !== 'v') throw new Error('rimbaud-fr: the lone verse line is not where it was');
      part.blocks.push({ k: 'v', lines: [clean(text)] });
    } else part.blocks.push({ k: 'p', text: clean(text) });
  }

  // The structure of the book.
  if (parts.length !== SECTIONS.length || pending.length) throw new Error(`rimbaud-fr: expected ${SECTIONS.length} sections, found ${parts.length}`);
  for (const p of parts) {
    const verse = p.blocks.filter((b) => b.k === 'v');
    if (p.id === 's5') {
      const n = verse.reduce((a, b) => a + b.lines.length, 0);
      if (verse.length !== VERSE.blocks || n !== VERSE.lines) throw new Error(`rimbaud-fr: Délires II has ${verse.length} stanzas and ${n} lines of verse, expected ${VERSE.blocks} and ${VERSE.lines}`);
      if (verse.filter((b) => b.lines.length === 1 && LONE_LINE.test(b.lines[0])).length !== 1) throw new Error('rimbaud-fr: the lone verse line was not found');
      const titles = p.blocks.filter((b) => b.k === 'h').map((b) => b.text);
      if (titles.join('|') !== Object.values(POEM_TITLES).join('|')) throw new Error(`rimbaud-fr: poem titles are ${titles.join(', ')}`);
    } else if (verse.length) throw new Error(`rimbaud-fr: verse in ${p.label}`);
    if (!p.blocks.some((b) => b.k === 'p')) throw new Error(`rimbaud-fr: no prose in ${p.label}`);
    for (const b of p.blocks) {
      for (const t of b.k === 'v' ? b.lines : [b.text]) {
        if (/_/.test(t) || / {2,}/.test(t) || t !== t.trim()) throw new Error(`rimbaud-fr: markup or spacing left in ${p.id}: ${JSON.stringify(t.slice(0, 60))}`);
      }
    }
  }
  const opening = parts[0].blocks[0];
  const close = parts[8].blocks[parts[8].blocks.length - 1];
  if (opening.k !== 'p' || !opening.text.startsWith('«Jadis, si je me souviens bien,')) throw new Error('rimbaud-fr: the book does not open as expected');
  if (close.k !== 'p' || close.text !== 'avril-août, 1873.') throw new Error('rimbaud-fr: the book does not close with its date');

  // Nothing lost: the words of the blocks are the words of the source
  // between the opening and the table, less the headings that went into
  // labels.
  const words = parts.reduce((a, p) => a + blockWords(p.blocks), 0);
  if (words !== sourceWords - headingWords) throw new Error(`rimbaud-fr: ${words} words in the parts, ${sourceWords} in the source less ${headingWords} in headings`);
  return parts;
}

export function run() {
  return writeText('rimbaud-fr', {
    author: 'Arthur Rimbaud',
    title: 'Une saison en enfer',
    translator: null,
    year: 1873,
    verse: false,
    lang: 'fr',
    source: { name: 'Project Gutenberg, no. 56668', url: 'https://www.gutenberg.org/ebooks/56668' },
  }, build());
}
