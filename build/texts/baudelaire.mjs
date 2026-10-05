// Baudelaire, the intimate journals as Joseph T. Shipley translated them
// under the heading "Intimate Papers from the Unpublished Works of
// Baudelaire" in Baudelaire: His Prose and Poetry, edited by T. R. Smith
// (New York: Boni and Liveright, 1919), from Project Gutenberg no. 47032.
// Only those papers are taken: Rockets and My Heart Laid Bare. The
// translator's note that stands before them is left out.

import { fetchText, gutenbergBody, writeText, countWords, blockWords } from '../lib/gutenberg.mjs';

// The papers, and the numbers their notes carry in the book. The numbers
// are those of the leaves of the manuscript, and the book skips some.
const PAPERS = [
  {
    id: 'rockets',
    heading: 'ROCKETS',
    label: 'Rockets',
    numerals: 'I II III V VI VII VIII IX X XI XII XIII XV XVI XVII XVIII XIX XX XXI XXII XXIII XXIV XXV XXVI',
  },
  {
    id: 'my-heart-laid-bare',
    heading: 'MY HEART LAID BARE',
    label: 'My Heart Laid Bare',
    numerals: 'I II III IV V VI VII VIII IX X XI XII XIII XIV XV XVI XVII XVIII XIX XX XXII XXIII XXIV XXV XXVI XXVII XXVIII XXIX XXX XXXI XXXII XXXIII XXXV XXXVI XXXVII XXXIX XL XLII XLIV XLV XLVI XLVII XLVIII XLIX L LI LII LIII LIV LV LVI LVII LVIII LXI LXII LXIII LXIV LXV LXVI LXVII LXVIII LXIX LXX LXXI LXXII LXXIII LXXIV LXXV LXXVI LXXVII LXXVIII LXXIX LXXX',
  },
];
// Two headings in capitals stand inside numbered notes.
const INNER = { 'OF AIRS IN WOMAN': 'Of Airs in Woman', PRAYER: 'Prayer' };
// One slip of the Project Gutenberg copy, mended from the book. In the
// last entry of Rockets the e-text has a capital inside a sentence where
// the printing of 1919 has a small letter: so two scans at the Internet
// Archive read in their full text (baudelairehispro00baud and
// baudelairehispro00baudiala) and the search snippets of three more
// (remake/works/baudelaire/notes.md, the finisher's point 5). The place
// is given by block and word, counted as the pieces count them.
const SLIPS = [{ part: 'rockets', block: 126, word: 73 }];

const tidy = (s) => s.replace(/_/g, '').replace(/\[\d+\]/g, '').replace(/ {2,}/g, ' ').trim();

export function run() {
  const body = gutenbergBody(fetchText('pg47032_baudelaire.txt', 'https://www.gutenberg.org/cache/epub/47032/pg47032.txt'));

  // The section is the last thing in the book. Its heading names the
  // translator; then comes his note, then the papers under INTIMATE PAPERS.
  const head = body.findIndex((l) => l === 'INTIMATE PAPERS FROM THE UNPUBLISHED WORKS OF BAUDELAIRE');
  if (head < 0) throw new Error('baudelaire: cannot find the Intimate Papers');
  const byAt = body.findIndex((l, i) => i > head && l.trim() !== '');
  if (body[byAt] !== 'Translated by Joseph T. Shipley') throw new Error(`baudelaire: the section is signed ${JSON.stringify(body[byAt])}`);
  const start = body.findIndex((l, i) => i > head && l === 'INTIMATE PAPERS');
  if (start < 0) throw new Error('baudelaire: cannot find the papers after the translator\'s note');
  const note = body.slice(byAt + 1, start).filter((l) => l.trim() !== '');
  if (note[0] !== 'ROCKETS' || note[1] !== 'MY HEART LAID BARE' || !note[2].startsWith('The following pages')) throw new Error('baudelaire: the translator\'s note is not where it was');
  const lines = body.slice(start + 1);

  const parts = [];
  let cur = null;
  let para = [];
  const dropped = { footnotes: 0, rules: 0, words: 0 };
  let sourceWords = 0;
  const flush = () => {
    if (!para.length) return;
    if (!cur) throw new Error(`baudelaire: text before the first paper: ${JSON.stringify(para[0].slice(0, 40))}`);
    const text = para.map((l) => l.trim()).join(' ');
    if (/^\[Footnote \d+: .*\]$/.test(text)) {
      dropped.footnotes++;
      dropped.words += countWords(text);
    } else if (/^(\* *){3,}$/.test(text)) {
      dropped.rules++;
      dropped.words += countWords(text);
    } else if (para.every((l) => /^ {4,}\S/.test(l))) {
      // a short table, set line by line
      cur.blocks.push({ k: 'v', lines: para.map(tidy) });
    } else cur.blocks.push({ k: 'p', text: tidy(text) });
    para = [];
  };
  for (const line of lines) {
    const t = line.trim();
    sourceWords += countWords(line);
    if (t === '') {
      flush();
      continue;
    }
    const paper = PAPERS[parts.length];
    if (!para.length && paper && t === paper.heading) {
      cur = { id: paper.id, label: paper.label, blocks: [] };
      parts.push(cur);
      dropped.words += countWords(t);
    } else if (!para.length && /^[IVXLC]+$/.test(t)) {
      if (!cur) throw new Error(`baudelaire: numeral ${t} before the first paper`);
      cur.blocks.push({ k: 'h', level: 3, text: t });
    } else if (!para.length && Object.hasOwn(INNER, t)) {
      cur.blocks.push({ k: 'h', level: 3, text: INNER[t] });
    } else if (/^[A-Z][A-Z ]+$/.test(t)) {
      throw new Error(`baudelaire: unexpected heading ${JSON.stringify(t)}`);
    } else para.push(line);
  }
  flush();

  if (parts.length !== PAPERS.length) throw new Error(`baudelaire: expected ${PAPERS.length} papers, found ${parts.length}`);
  parts.forEach((p, i) => {
    const heads = p.blocks.filter((b) => b.k === 'h').map((b) => b.text);
    const numerals = heads.filter((t) => /^[IVXLC]+$/.test(t)).join(' ');
    if (numerals !== PAPERS[i].numerals) throw new Error(`baudelaire: ${p.label} is numbered ${numerals}`);
    if (p.blocks[0].k !== 'h') throw new Error(`baudelaire: ${p.label} does not open with a number`);
    // every heading is followed by text
    p.blocks.forEach((b, j) => {
      if (b.k === 'h' && (!p.blocks[j + 1] || p.blocks[j + 1].k === 'h')) throw new Error(`baudelaire: nothing under ${b.text} in ${p.label}`);
    });
    for (const b of p.blocks) {
      for (const t of b.k === 'v' ? b.lines : [b.text]) {
        if (/[_\[\]*=]/.test(t)) throw new Error(`baudelaire: markup left in ${p.id}: ${JSON.stringify(t.slice(0, 60))}`);
      }
    }
  });
  const inner = parts.flatMap((p) => p.blocks.filter((b) => b.k === 'h' && !/^[IVXLC]+$/.test(b.text)).map((b) => b.text));
  if (inner.join('|') !== Object.values(INNER).join('|')) throw new Error(`baudelaire: inner headings are ${inner.join(', ')}`);
  if (dropped.footnotes !== 1 || dropped.rules !== 1) throw new Error(`baudelaire: expected to drop 1 footnote and 1 row of asterisks, dropped ${dropped.footnotes} and ${dropped.rules}`);

  if (!parts[0].blocks[1].text.startsWith('Even if God did not exist')) throw new Error('baudelaire: Rockets does not open as expected');
  const last = parts[1].blocks;
  if (!last[last.length - 1].text.endsWith('whatever it may be.')) throw new Error('baudelaire: My Heart Laid Bare does not close as expected');

  // Nothing lost: the words of the blocks are the words of the lines,
  // less the two titles, the footnote and the row of asterisks. (The
  // inner headings and the numerals are kept as headings.)
  const words = parts.reduce((a, p) => a + blockWords(p.blocks), 0);
  if (words !== sourceWords - dropped.words) throw new Error(`baudelaire: ${words} words in the parts, ${sourceWords} in the source less ${dropped.words} dropped`);

  for (const s of SLIPS) {
    const blk = parts.find((p) => p.id === s.part).blocks[s.block];
    const ws = blk.text.split(' ');
    if (!/^[A-Z][a-z]+$/.test(ws[s.word]) || /[.!?:]["”’')]*$/.test(ws[s.word - 1])) throw new Error(`baudelaire: no capital inside a sentence at ${s.part} ${s.block}, word ${s.word}`);
    ws[s.word] = ws[s.word][0].toLowerCase() + ws[s.word].slice(1);
    blk.text = ws.join(' ');
  }

  const index = writeText('baudelaire', {
    author: 'Charles Baudelaire',
    title: 'Intimate Papers',
    translator: 'Joseph T. Shipley',
    year: 1919,
    verse: false,
    note: 'Inside each journal the entries carry Roman numerals, which are the page numbers of Baudelaire’s manuscript. Shipley leaves some of those pages out, so the numbering has gaps. In the last entry of *Rockets* one capital letter that the Project Gutenberg copy has inside a sentence is set small here, as the book of 1919 prints it.',
    source: { name: 'Project Gutenberg, no. 47032', url: 'https://www.gutenberg.org/ebooks/47032' },
  }, parts);
  return index;
}
