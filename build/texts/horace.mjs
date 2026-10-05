// Horace, The Odes and Carmen Saeculare, translated into English verse by
// John Conington. Project Gutenberg no. 5432, which is the third edition
// (London: Bell and Daldy, 1865; the file itself gives no date).
// One part for each ode he translated, and one for the hymn. His preface
// and his notes are left out. See notes/horace.md.

import { fetchText, gutenbergBody, writeText, roman } from '../lib/gutenberg.mjs';
import { ODE_LINES, HYMN_LINES, BOOKS, odeId, stanzaBlocks } from './horace-la.mjs';

// Conington left one ode out of each book (his preface says so), and
// three stanzas out of III.6. Everything else is line for line with the
// Latin.
const OMITTED = { 1: [25], 2: [5], 3: [20], 4: [10] };
const SHORT = { 'o3-06': 36 };

// Two long-lined odes are wrapped in the source file: the second half of
// such a line begins with a small letter, and is joined to the first.
const WRAPPED = { 'o1-11': 2, 'o1-18': 2 };

// Proper names in the Latin headings. The file gives the headings in
// capitals; the book prints them in italic with these names capitalised.
const NAMES = new Set(['Maecenas', 'Diva', 'Vario', 'Lydia', 'Mercuri', 'Vare', 'Cupidinum', 'Dianam', 'Musis', 'Icci', 'Venus', 'Albi', 'Persicos', 'Metello', 'Septimi', 'Gades', 'Bacchum', 'Asterie', 'Martiis', 'Tanain', 'Bandusiae', 'Herculis', 'Ibyci', 'Danaen', 'Aeli', 'Faune', 'Nympharum', 'Bacche', 'Tyrrhena', 'Pindarum', 'Melpomene', 'Lyce', 'Phoebus', 'Phoebe']);
// Two headings are mistyped in the file (the book has Quem and terrae).
const HEADING_SLIPS = { 'QUEMN VIRUM AUT HEROA': 'QUEM VIRUM AUT HEROA', 'TE MARIS ET TERRA': 'TE MARIS ET TERRAE' };

// Places where the file departs from the edition it was typed from. Each
// was checked against a scan of that edition (archive.org,
// odesandcarmensc00flacgoog) and of the printings of 1870 and 1872.
// [part, line, as the file has it, as the book has it]
const SLIPS = [
  ['o1-02', 37, 'weary--with', 'weary with'],
  ['o1-07', 9, "Mycenaes's", "Mycenae's"],
  ['o1-12', 26, 'for horses be,', 'for horses he,'],
  ['o1-14', 1, 'O LUCKLESS', 'O luckless'], // the opening words of an ode are in capitals in the book
  ['o1-19', 11, 'hold in flight', 'bold in flight'],
  ['o1-24', 9, 'wept. Quintilius', 'wept, Quintilius'],
  ['o1-35', 10, 'Koine', 'Rome'],
  ['o1-36', 6, 'On each, dear', 'On each dear'],
  ['o2-06', 3, 'by Home,', 'by Rome,'],
  ['o2-07', 1, 'O, Oft', 'O, oft'],
  ['o2-11', 1, 'O, Ask', 'O, ask'],
  ['o2-13', 22, 'AEacus', 'Aeacus'],
  ['o2-20', 15, 'Gastulian', 'Gaetulian'],
  ['o2-20', 24, 'of o grave', 'of a grave'],
  ['o3-08', 2, 'censer mean', 'censer mean?'],
  ['o3-11', 9, 'three year colt', 'three-year colt'],
  ['o3-27', 57, 'father--Worthless', "father--'Worthless"],
  ['o3-29', 7, 'AEsule', 'Aesule'],
  ['o4-07', 3, 'lessening run.', 'lessening run'],
  ['o4-11', 2, 'here grows', 'here grows for you'],
  ['o4-11', 5, 'you know)', 'you know):'],
  ['o4-11', 6, 'strewn', "strew'd"],
  ['cs', 42, 'AEneas', 'Aeneas'],
  ['cs', 43, 'greater gain.', 'greater gain'],
];

// Words the file gives in capitals where the book has italics. They are
// kept as the file has them.
const CAPITALS = ['THIS', 'SHE', 'THEM', 'THAT', 'HER', 'HER', 'YOU', 'HORACE', 'YOU'];

// III.9 is a dialogue: the file marks who speaks at the head of each stanza.
const SPEAKERS = ['HORACE', 'LYDIA', 'H', 'L', 'H', 'L'];

function label(heading) {
  let h = heading.replace(/\.$/, '');
  if (HEADING_SLIPS[h]) h = HEADING_SLIPS[h];
  if (!/^[A-Z]+(,? [A-Z]+)*$/.test(h)) throw new Error(`horace: heading not understood: ${JSON.stringify(heading)}`);
  const lower = h.toLowerCase().replace(/[a-z]+/g, (w) => {
    const name = w[0].toUpperCase() + w.slice(1);
    return NAMES.has(name) ? name : w;
  });
  return lower[0].toUpperCase() + lower.slice(1);
}

export function build() {
  const body = gutenbergBody(fetchText('pg5432_horace_odes_conington.txt', 'https://www.gutenberg.org/cache/epub/5432/pg5432.txt'));
  const only = (line) => {
    const at = body.map((l, i) => (l === line ? i : -1)).filter((i) => i >= 0);
    if (at.length !== 1) throw new Error(`horace: ${JSON.stringify(line)} found ${at.length} times`);
    return at[0];
  };
  const start = only('THE ODES OF HORACE.');
  const end = only('NOTES.');
  // what is being left out is what it should be
  const title = body.slice(0, start).filter((l) => l.trim());
  if (!title.includes('BY JOHN CONINGTON, M.A.') || !title.includes('THIRD EDITION.') || !title.includes('PREFACE.')) throw new Error('horace: the title page and preface are not as expected');
  if (!body.slice(end).some((l) => l.trim() === 'FINIS.')) throw new Error('horace: the notes do not run to the end of the book');

  // Cut into odes.
  const odes = [];
  let book = 0;
  let cur = null;
  for (let i = start + 1; i < end; i++) {
    const l = body[i];
    const where = `line ${i + 1} of the body`;
    let m;
    if (l.trim() === '') {
      if (cur && cur.raw.length) cur.raw.push('');
      continue;
    }
    if ((m = l.match(/^BOOK ([IV]+)\.$/))) {
      if (roman(m[1]) !== book + 1) throw new Error(`horace: book out of order, ${where}`);
      book++;
      cur = null;
      continue;
    }
    // The number of an ode. One heading stands on the same line as its number.
    if ((m = l.match(/^([IVXL]+)(?:\.(?: +(\S.*))?)?$/))) {
      if (!book) throw new Error(`horace: an ode before the first book, ${where}`);
      cur = { book, num: roman(m[1]), head: m[2] || null, raw: [] };
      odes.push(cur);
      continue;
    }
    if (l === 'CARMEN SAECULARE.') {
      if (book !== 4) throw new Error(`horace: the hymn does not follow the fourth book, ${where}`);
      cur = { book: 0, num: 0, head: null, raw: [] };
      odes.push(cur);
      continue;
    }
    if (!cur) throw new Error(`horace: line not understood, ${where}: ${JSON.stringify(l.slice(0, 50))}`);
    if (/^\S/.test(l)) {
      // the Latin opening words, flush left under the number
      if (cur.head || cur.raw.length) throw new Error(`horace: unexpected line at the margin, ${where}: ${JSON.stringify(l.slice(0, 50))}`);
      cur.head = l;
      continue;
    }
    if (!cur.head) throw new Error(`horace: verse before a heading, ${where}`);
    if (/[_\[\]{}*=|\d]/.test(l)) throw new Error(`horace: unexpected mark, ${where}: ${JSON.stringify(l)}`);
    cur.raw.push(l);
  }

  const joins = {};
  const parts = odes.map((o) => {
    const id = o.book ? odeId(o.book, o.num) : 'cs';
    const name = o.book ? `${BOOKS[o.book - 1]}.${o.num}` : 'the hymn';
    while (o.raw.length && o.raw[o.raw.length - 1] === '') o.raw.pop();
    // stanzas as the file divides them (only the dialogue is divided), wrapped lines joined
    const groups = [[]];
    for (const l of o.raw) {
      const g = groups[groups.length - 1];
      if (l === '') {
        if (g.length) groups.push([]);
      } else if (/^ +[a-z]/.test(l) && g.length) {
        g[g.length - 1] += ' ' + l.trim();
        joins[id] = (joins[id] || 0) + 1;
      } else g.push(l.trim().replace(/ {2,}/g, ' '));
    }
    let blocks;
    let lines;
    if (id === 'o3-09') {
      // each stanza opens with the speaker's name, alone on a line or before the first line
      if (groups.length !== SPEAKERS.length) throw new Error(`horace: III.9 has ${groups.length} stanzas, expected ${SPEAKERS.length}`);
      blocks = [];
      lines = [];
      groups.forEach((g, j) => {
        const m = g[0].match(/^([A-Z]+)\.(?: (.+))?$/);
        if (!m || m[1] !== SPEAKERS[j]) throw new Error(`horace: III.9, stanza ${j + 1}: expected ${SPEAKERS[j]} to speak, found ${JSON.stringify(g[0].slice(0, 20))}`);
        const verse = m[2] ? [m[2], ...g.slice(1)] : g.slice(1);
        if (verse.length !== 4) throw new Error(`horace: III.9, stanza ${j + 1} has ${verse.length} lines`);
        blocks.push({ k: 's', text: m[1] }, { k: 'v', lines: verse });
        lines.push(...verse);
      });
    } else {
      if (groups.length !== 1) throw new Error(`horace: a blank line inside ${name}`);
      lines = groups[0];
      blocks = null;
    }
    const want = SHORT[id] || (o.book ? ODE_LINES[o.book][o.num - 1] : HYMN_LINES);
    if (lines.length !== want) throw new Error(`horace: ${name} has ${lines.length} lines, expected ${want}`);
    return { id, name, book: o.book, num: o.num, head: o.head, lines, blocks };
  });

  // The structure established for this file.
  for (let b = 1; b <= 4; b++) {
    const got = parts.filter((p) => p.book === b).map((p) => p.num);
    const want = ODE_LINES[b].map((_, j) => j + 1).filter((n) => !OMITTED[b].includes(n));
    if (got.join() !== want.join()) throw new Error(`horace: book ${BOOKS[b - 1]} holds odes ${got.join()}, expected ${want.join()}`);
  }
  if (parts.length !== 100 || parts[99].id !== 'cs') throw new Error(`horace: expected 99 odes and then the hymn, found ${parts.length} pieces`);
  if (JSON.stringify(joins) !== JSON.stringify(WRAPPED)) throw new Error(`horace: wrapped lines joined ${JSON.stringify(joins)}, expected ${JSON.stringify(WRAPPED)}`);

  // Mend the slips of the file. A slip already mended in the file is passed over.
  const byId = new Map(parts.map((p) => [p.id, p]));
  for (const [id, n, from, to] of SLIPS) {
    const p = byId.get(id);
    const line = p.lines[n - 1];
    const mended = line.includes(to) && (to.includes(from) || !line.includes(from));
    if (mended) continue;
    if (line.split(from).length !== 2) throw new Error(`horace: ${p.name}, line ${n}: ${JSON.stringify(from)} is not there to mend`);
    const fixed = line.replace(from, to);
    p.lines[n - 1] = fixed;
    if (p.blocks) {
      // III.9 keeps its own blocks
      for (const b of p.blocks) if (b.k === 'v') b.lines = b.lines.map((x) => (x === line ? fixed : x));
    }
  }

  const capitals = parts.flatMap((p) => p.lines.flatMap((l) => l.match(/\b[A-Z]{2,}\b/g) || []));
  if (capitals.join() !== CAPITALS.join()) throw new Error(`horace: words in capitals are ${capitals.join()}, expected ${CAPITALS.join()}`);
  for (const p of parts) {
    for (const l of p.lines) {
      if (!/^["'(-]*[A-Z]/.test(l)) throw new Error(`horace: ${p.name}: a line does not begin with a capital: ${JSON.stringify(l)}`);
      if (/[^\x20-\x7e]/.test(l) || / {2,}/.test(l)) throw new Error(`horace: ${p.name}: unexpected character in ${JSON.stringify(l)}`);
    }
  }
  if (!parts[0].lines[0].startsWith('Maecenas, born of') || !parts[99].lines[HYMN_LINES - 1].endsWith('this our strain.')) throw new Error('horace: the first or last line is not the one expected');

  return parts.map((p) => (p.book
    ? { id: p.id, label: `${BOOKS[p.book - 1]}.${p.num} ${label(p.head)}`, group: `Book ${BOOKS[p.book - 1]}`, blocks: p.blocks || stanzaBlocks(p.lines, p.book, p.num) }
    : { id: 'cs', label: 'The Secular Hymn', blocks: checkHymnHeading(p.head) && stanzaBlocks(p.lines, 0, 0) }));
}

function checkHymnHeading(head) {
  if (head !== 'PHOEBE, SILVARUMQUE.') throw new Error(`horace: the hymn is headed ${JSON.stringify(head)}`);
  return true;
}

export function run() {
  return writeText('horace', {
    author: 'Horace',
    title: 'The Odes and Carmen Saeculare',
    translator: 'John Conington',
    year: 1863, // the translation; the file is the third edition, of 1865, and prints no date
    verse: true,
    note: 'The translation was first published in 1863. The text printed here is that of the third edition (London: Bell and Daldy, 1865). Conington left out four odes and three stanzas of III.6. The four (I.25, II.5, III.20 and IV.10) and the missing stanzas are printed only in the [Latin text](#/read/horace-la). The “Carmen Saeculare” of the title is the Secular Hymn, the last poem listed below.',
    source: { name: 'Project Gutenberg, no. 5432', url: 'https://www.gutenberg.org/ebooks/5432' },
  }, build());
}
