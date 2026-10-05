// Blake, The Marriage of Heaven and Hell (c. 1790-93), from Project
// Gutenberg no. 45315, which follows the edition of John W. Luce
// (Boston, 1906): a reading text with modern spelling and pointing, no
// plate numbers and no account of the designs. One part.

import { fetchText, gutenbergBody, writeText, countWords, blockWords } from '../lib/gutenberg.mjs';

const HEADS = {
  'THE ARGUMENT': 'The Argument',
  'THE VOICE OF THE DEVIL': 'The Voice of the Devil',
  'A MEMORABLE FANCY': 'A Memorable Fancy',
  'PROVERBS OF HELL': 'Proverbs of Hell',
  'A SONG OF LIBERTY': 'A Song of Liberty',
  CHORUS: 'Chorus',
};
// Blake's headings in the order they come.
const ORDER = [
  'The Argument', 'The Voice of the Devil', 'A Memorable Fancy', 'Proverbs of Hell',
  'A Memorable Fancy', 'A Memorable Fancy', 'A Memorable Fancy', 'A Memorable Fancy',
  'A Song of Liberty', 'Chorus',
];
// Blake's plates have seventy proverbs. This edition runs two of them
// together ("Prayers plough not ..." and "... joys laugh not ..."), and so
// prints sixty-nine.
const PROVERBS = 69;

const tidy = (s) => s.replace(/_/g, '').replace(/ {2,}/g, ' ').trim();
const indent = (l) => l.match(/^ */)[0].length;

export function run() {
  const body = gutenbergBody(fetchText('pg45315_blake.txt', 'https://www.gutenberg.org/cache/epub/45315/pg45315.txt'));
  const start = body.findIndex((l) => l === 'THE ARGUMENT');
  if (start < 0) throw new Error('blake: cannot find THE ARGUMENT');
  let end = body.findIndex((l, i) => i > start && /^End of (the )?Project Gutenberg/i.test(l));
  if (end < 0) end = body.length;
  const lines = body.slice(start, end);

  // paragraphs
  const paras = [];
  let cur = [];
  for (const l of lines) {
    if (l.trim() === '') {
      if (cur.length) paras.push(cur);
      cur = [];
    } else cur.push(l);
  }
  if (cur.length) paras.push(cur);

  const blocks = [];
  let section = null;
  let proverbs = null; // the verse block the proverbs are gathered into
  let rules = 0;
  let turned = 0;
  for (const para of paras) {
    const text = para.map((l) => l.trim()).join(' ');
    if (para.length === 1 && Object.hasOwn(HEADS, text)) {
      section = HEADS[text];
      proverbs = null;
      blocks.push({ k: 'h', level: 3, text: section });
      if (section === 'Proverbs of Hell') {
        proverbs = { k: 'v', lines: [] };
        blocks.push(proverbs);
      }
    } else if (/^(\* *){3,}$/.test(text)) {
      // a row of asterisks where a new plate begins without a heading
      rules++;
      proverbs = null;
    } else if (/^[A-Z][A-Z ]+$/.test(text)) {
      throw new Error(`blake: unexpected heading ${JSON.stringify(text)}`);
    } else if (!section) {
      throw new Error(`blake: text before the first heading: ${JSON.stringify(text.slice(0, 40))}`);
    } else if (para.every((l) => /^ {4,}\S/.test(l))) {
      // Verse. A line set further in and begun without a capital is the
      // turned-over end of the long line before it.
      const base = indent(para[0]);
      const out = [];
      for (const l of para) {
        if (out.length && indent(l) > base && /^["']?[a-z]/.test(l.trim())) {
          out[out.length - 1] += ` ${tidy(l)}`;
          turned++;
        } else out.push(tidy(l));
      }
      blocks.push({ k: 'v', lines: out });
    } else if (proverbs) {
      proverbs.lines.push(tidy(text));
    } else blocks.push({ k: 'p', text: tidy(text) });
  }

  // The structure the work is known to have.
  const heads = blocks.filter((b) => b.k === 'h').map((b) => b.text);
  if (heads.join('|') !== ORDER.join('|')) throw new Error(`blake: headings are ${heads.join(', ')}`);
  const under = (name, nth = 0) => {
    let seen = -1;
    const out = [];
    let on = false;
    for (const b of blocks) {
      if (b.k === 'h') {
        if (b.text === name) seen++;
        on = b.text === name && seen === nth;
        continue;
      }
      if (on) out.push(b);
    }
    return out;
  };
  const argument = under('The Argument');
  const stanzas = argument.filter((b) => b.k === 'v').map((b) => b.lines.length).join(',');
  if (stanzas !== '2,6,8,4,2') throw new Error(`blake: the Argument's stanzas have ${stanzas} lines`);
  const prov = under('Proverbs of Hell');
  if (prov[0].k !== 'v' || prov[0].lines.length !== PROVERBS) throw new Error(`blake: expected ${PROVERBS} proverbs, found ${prov[0].lines ? prov[0].lines.length : 0}`);
  if (!prov[0].lines[0].startsWith('In seed-time learn') || prov[0].lines[PROVERBS - 1] !== 'Enough! or Too much.') throw new Error('blake: the proverbs do not begin and end as expected');
  if (prov.length !== 2 || prov[1].k !== 'p') throw new Error('blake: expected one paragraph after the proverbs');
  const fancy = under('A Memorable Fancy', 0);
  const couplet = fancy[fancy.length - 1];
  if (couplet.k !== 'v' || couplet.lines.length !== 2 || turned !== 2) throw new Error('blake: the Devil\'s sentence is not two long lines');
  const song = under('A Song of Liberty');
  if (song.length !== 20 || song.some((b, i) => b.k !== 'p' || !b.text.startsWith(`${i + 1}. `))) throw new Error('blake: A Song of Liberty has not its twenty numbered verses');
  const chorus = under('Chorus');
  if (chorus.length !== 2 || chorus[1].text !== 'For everything that lives is holy.') throw new Error('blake: the Chorus does not close as expected');
  if (rules !== 4) throw new Error(`blake: expected 4 rows of asterisks, found ${rules}`);
  for (const b of blocks) {
    for (const t of b.k === 'v' ? b.lines : [b.text]) {
      if (/[_*=]|\[Illustration/.test(t)) throw new Error(`blake: markup left in ${JSON.stringify(t.slice(0, 60))}`);
    }
  }

  // Nothing lost: the words of the blocks are the words of the lines,
  // less the four rows of five asterisks.
  const sourceWords = lines.reduce((a, l) => a + countWords(l), 0);
  const words = blockWords(blocks);
  if (words !== sourceWords - rules * 5) throw new Error(`blake: ${words} words in the part, ${sourceWords} in the source less ${rules * 5} asterisks`);

  const index = writeText('blake', {
    author: 'William Blake',
    title: 'The Marriage of Heaven and Hell',
    translator: null,
    year: 1790,
    verse: false,
    source: { name: 'Project Gutenberg, no. 45315', url: 'https://www.gutenberg.org/ebooks/45315' },
  }, [{ id: 'marriage', label: 'The Marriage of Heaven and Hell', blocks }]);
  return index;
}
