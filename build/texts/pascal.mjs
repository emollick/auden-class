// Pascal, Pensées, in W. F. Trotter's translation (1904), from Project
// Gutenberg no. 18269, which follows the 1958 Dutton paperback of the
// Everyman text. T. S. Eliot's introduction, the translator's notes and
// the index are left out. One part to a Section; every numbered fragment
// opens with a heading that is its number.

import { fetchText, gutenbergBody, writeText, roman, pad2, countWords, blockWords } from '../lib/gutenberg.mjs';

// The fourteen Sections as the book names them (it prints them in capitals).
const TITLES = [
  'Thoughts on Mind and on Style',
  'The Misery of Man Without God',
  'Of the Necessity of the Wager',
  'Of the Means of Belief',
  'Justice and the Reason of Effects',
  'The Philosophers',
  'Morality and Doctrine',
  'The Fundamentals of the Christian Religion',
  'Perpetuity',
  'Typology',
  'The Prophecies',
  'Proofs of Jesus Christ',
  'The Miracles',
  'Appendix: Polemical Fragments',
];

// Trotter moved fragment 514 of the French (Brunschvicg) edition into his
// notes and renumbered what follows, so his text has 923 fragments and
// not Brunschvicg's 924.
const FRAGMENTS = 923;

// Two fragments are small diagrams, drawn in the source with braces,
// rules and strokes. The words are kept, a row to a line; the drawn
// lines cannot be.
const DIAGRAMS = {
  571: {
    source: ['{1600 prophets.', '2000 {', '{ 400 scattered.'],
    lines: ['2000 {', '1600 prophets.', '400 scattered.'],
  },
  590: {
    source: ['J. C.', 'Heathens __|__ Mahomet', '\\ /', 'Ignorance', 'of God.'],
    lines: ['J. C.', 'Heathens | Mahomet', 'Ignorance of God.'],
  },
};

// Italics are marked _so_ (sometimes across several paragraphs), notes
// [12], transliterated Greek +so+.
const tidy = (s) => s
  .replace(/_/g, '')
  .replace(/\[\d+\]/g, '')
  .replace(/\+([^+]+)\+/g, '$1')
  .replace(/ {2,}/g, ' ')
  .trim();

const squeeze = (s) => s.trim().replace(/ {2,}/g, ' ');

// The source wraps prose at 72 characters. A paragraph in which a line
// stops though the next word would have fitted is a list, set line by line.
function setLineByLine(para) {
  for (let i = 0; i < para.length - 1; i++) {
    const next = para[i + 1].trim().split(/\s+/)[0];
    if (para[i].length + 1 + next.length <= 68) return true;
  }
  return false;
}

function fragmentBlocks(n, lines, tally) {
  const blocks = [{ k: 'h', level: 3, text: String(n) }];
  const paras = [];
  let cur = [];
  for (const l of lines) {
    if (l.trim() === '') {
      if (cur.length) paras.push(cur);
      cur = [];
    } else cur.push(l);
  }
  if (cur.length) paras.push(cur);
  if (!paras.length) throw new Error(`pascal: fragment ${n} is empty`);

  let drawn = false;
  for (const para of paras) {
    const d = DIAGRAMS[n];
    if (d && JSON.stringify(para.map(squeeze)) === JSON.stringify(d.source)) {
      blocks.push({ k: 'v', lines: d.lines });
      drawn = true;
      tally.diagrams++;
    } else if (setLineByLine(para)) {
      blocks.push({ k: 'v', lines: para.map(tidy) });
      tally.lists++;
    } else blocks.push({ k: 'p', text: tidy(para.map((l) => l.trim()).join(' ')) });
  }
  if (DIAGRAMS[n] && !drawn) throw new Error(`pascal: the diagram of fragment ${n} is not as expected`);
  return blocks;
}

export function run() {
  const body = gutenbergBody(fetchText('pg18269_pascal.txt', 'https://www.gutenberg.org/cache/epub/18269/pg18269.txt'));

  // The text runs from the heading of Section I to the translator's NOTES.
  const start = body.findIndex((l) => l === 'SECTION I');
  const end = body.findIndex((l, i) => i > start && l === 'NOTES');
  if (start < 0 || end < 0) throw new Error('pascal: cannot find SECTION I or NOTES');
  const lines = body.slice(start, end);

  const sections = [];
  let section = null;
  let fragment = null;
  let expected = 1;
  let headingWords = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const sm = line.match(/^SECTION ([IVXL]+)$/);
    if (sm) {
      // The title stands on the next line but one.
      const n = roman(sm[1]);
      const title = lines[i + 2];
      if (n !== sections.length + 1) throw new Error(`pascal: Section ${sm[1]} is out of order`);
      if (lines[i + 1].trim() !== '' || !title || title !== TITLES[n - 1].toUpperCase()) throw new Error(`pascal: Section ${sm[1]} is headed ${JSON.stringify(title)}, expected ${JSON.stringify(TITLES[n - 1].toUpperCase())}`);
      section = { n, numeral: sm[1], title: TITLES[n - 1], fragments: [] };
      sections.push(section);
      fragment = null;
      headingWords += countWords(line) + countWords(title);
      i += 2;
      continue;
    }
    const alone = /^\d+$/.test(line) && lines[i - 1].trim() === '' && (lines[i + 1] || '').trim() === '';
    if (alone) {
      const n = Number(line);
      if (n !== expected) throw new Error(`pascal: fragment ${expected} expected, found ${n}`);
      if (!section) throw new Error(`pascal: fragment ${n} stands outside any Section`);
      fragment = { n, lines: [] };
      section.fragments.push(fragment);
      expected++;
      continue;
    }
    if (line.trim() === '') {
      if (fragment) fragment.lines.push(line);
      continue;
    }
    if (!fragment) throw new Error(`pascal: text before the first fragment of Section ${section ? section.numeral : '?'}: ${JSON.stringify(line.slice(0, 40))}`);
    fragment.lines.push(line);
  }

  const found = expected - 1;
  if (sections.length !== 14) throw new Error(`pascal: expected 14 sections, found ${sections.length}`);
  if (found !== FRAGMENTS) throw new Error(`pascal: expected ${FRAGMENTS} fragments, found ${found}`);

  const tally = { diagrams: 0, lists: 0 };
  const parts = sections.map((s) => {
    if (!s.fragments.length) throw new Error(`pascal: Section ${s.numeral} has no fragments`);
    return {
      id: `s${pad2(s.n)}`,
      label: `Section ${s.numeral}: ${s.title}`,
      blocks: s.fragments.flatMap((f) => fragmentBlocks(f.n, f.lines, tally)),
    };
  });
  if (tally.diagrams !== 2 || tally.lists !== 1) throw new Error(`pascal: expected 2 diagrams and 1 list set line by line, found ${tally.diagrams} and ${tally.lists}`);

  // The headings are the numbers 1 to 923, each once and in order.
  const heads = parts.flatMap((p) => p.blocks.filter((b) => b.k === 'h').map((b) => Number(b.text)));
  heads.forEach((n, i) => {
    if (n !== i + 1) throw new Error(`pascal: heading ${i + 1} reads ${n}`);
  });
  if (heads.length !== FRAGMENTS) throw new Error(`pascal: ${heads.length} headings`);

  for (const p of parts) {
    for (const b of p.blocks) {
      for (const t of b.k === 'v' ? b.lines : [b.text]) {
        if (/[_+\\*=]|\[\d+\]/.test(t)) throw new Error(`pascal: markup left in ${p.id}: ${JSON.stringify(t.slice(0, 60))}`);
      }
    }
  }

  // Nothing lost: every word between SECTION I and NOTES is in a block,
  // save the Section headings and the three strokes of the two diagrams.
  const sourceWords = lines.reduce((a, l) => a + countWords(l), 0);
  const words = parts.reduce((a, p) => a + blockWords(p.blocks), 0);
  const strokes = Object.values(DIAGRAMS).reduce((a, d) => a + countWords(d.source.join(' ')) - countWords(d.lines.join(' ')), 0);
  if (words !== sourceWords - headingWords - strokes) throw new Error(`pascal: ${words} words in the parts; the source body has ${sourceWords}, less ${headingWords} in headings and ${strokes} strokes`);

  const first = parts[0].blocks[1];
  if (!first.text.startsWith('The difference between the mathematical and the intuitive mind.')) throw new Error('pascal: fragment 1 does not open as expected');
  const lastBlocks = parts[13].blocks;
  if (!lastBlocks[lastBlocks.length - 1].text.endsWith('they must confess themselves to you.')) throw new Error('pascal: fragment 923 does not close as expected');

  const index = writeText('pascal', {
    author: 'Blaise Pascal',
    title: 'Pensées',
    translator: 'W. F. Trotter',
    year: 1904,
    verse: false,
    source: { name: 'Project Gutenberg, no. 18269', url: 'https://www.gutenberg.org/ebooks/18269' },
  }, parts);
  return { ...index, sourceWords, headingWords, fragments: sections.map((s) => s.fragments.length) };
}
