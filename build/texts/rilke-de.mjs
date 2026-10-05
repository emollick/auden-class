// Rilke, two poems in German (textId `rilke-de`), for the translation
// exercise. Each is cut from a Project Gutenberg file; nothing is retyped.
//
//   herbsttag  Das Buch der Bilder (Leipzig: Insel-Verlag, 1920).
//              Project Gutenberg no. 34521.
//   panther    Neue Gedichte (Leipzig: Insel-Verlag, 1920).
//              Project Gutenberg no. 33863.
//
// run() cuts the poems and is what the build calls. collate() reads each
// poem against an earlier printing, as German Wikisource gives it, and
// prints the lines whose words differ; it is not part of the build:
//
//   node -e "import('./build/texts/rilke-de.mjs').then(m => m.collate())"
//
// See notes/rilke-de.md.

import { fetchText, gutenbergBody, stanzas, writeText } from '../lib/gutenberg.mjs';

function only(body, test, what) {
  const at = [];
  body.forEach((l, i) => { if (test(l)) at.push(i); });
  if (at.length !== 1) throw new Error(`rilke-de: ${what} found ${at.length} times, expected once`);
  return at[0];
}

const blank = (l) => l === undefined || l.trim() === '';

// The stanzas of a poem and the lines in each, said shortly.
function stanzaCount(list) {
  const lines = list.reduce((a, n) => a + n, 0);
  const each = list.every((n) => n === list[0]) ? `${list[0]} lines each` : `${list.join(', ')} lines`;
  return `${list.length} stanzas of ${each} (${lines} lines)`;
}

// A poem as these two books print it: the title in capitals at the margin,
// under it (for one of the two) a second line in capitals, then the
// stanzas, then a wide space and the title of the next poem. The list of
// contents at the end of each book gives the title in ordinary letters,
// with the second line after it in brackets.
function poem({ id, file, url, front, title, shape, first, last, marked }) {
  const what = title;
  const body = gutenbergBody(fetchText(file, url));
  const head = body.slice(0, 40).map((l) => l.trim());
  for (const want of front) if (!head.includes(want)) throw new Error(`rilke-de: ${what}: the title page lacks ${JSON.stringify(want)}`);

  const entry = body[only(body, (l) => l.trim() === title || l.trim().startsWith(`${title} (`), `${what}: the entry in the list of contents`)].trim();
  const at = only(body, (l) => l === title.toUpperCase(), `${what}: the title over the poem`);
  let i = at + 1;
  while (i < body.length && blank(body[i])) i++;

  const blocks = [];
  // The second line of the title: in capitals over the poem, in ordinary
  // letters and in brackets in the contents. It is kept as a heading.
  const under = entry.match(/^.+ \((.+)\)$/);
  if (under) {
    if (body[i] !== under[1].toUpperCase() || !blank(body[i + 1])) throw new Error(`rilke-de: ${what}: expected ${JSON.stringify(under[1].toUpperCase())} under the title, found ${JSON.stringify(body[i])}`);
    blocks.push({ k: 'h', level: 3, text: under[1] });
    i++;
    while (i < body.length && blank(body[i])) i++;
  }

  // The stanzas run to the wide space that stands before the next title.
  const lines = [];
  for (; i < body.length && !(blank(body[i]) && blank(body[i + 1])); i++) lines.push(body[i]);
  while (i < body.length && blank(body[i])) i++;
  if (blank(body[i]) || body[i] !== body[i].toUpperCase()) throw new Error(`rilke-de: ${what}: the poem is not followed by the title of the next`);
  // The lines go in as the file has them, letter for letter: nothing in
  // them needs taking out (the check below would stop at any mark).
  for (const st of stanzas(lines)) blocks.push({ k: 'v', lines: st.map((l) => l.trim()) });

  // The form the poem is known to have.
  const got = blocks.filter((b) => b.k === 'v').map((b) => b.lines.length);
  if (got.length !== shape.length || got.some((n, k) => n !== shape[k])) {
    throw new Error(`rilke-de: ${what}: expected ${stanzaCount(shape)}, found ${stanzaCount(got)}`);
  }
  const verse = blocks.filter((b) => b.k === 'v').flatMap((b) => b.lines);
  for (const t of [...verse, ...blocks.filter((b) => b.k === 'h').map((b) => b.text)]) {
    // letters (with their umlauts and ß), spaces, stops, and the file's two hyphens for a dash
    if (!t || t !== t.trim() || / {2,}/.test(t) || /[^\p{L} ,.;:!?-]/u.test(t)) throw new Error(`rilke-de: ${what}: unexpected mark or spacing in ${JSON.stringify(t)}`);
  }
  if (!verse[0].startsWith(first) || !verse[verse.length - 1].endsWith(last)) throw new Error(`rilke-de: ${what}: the poem does not begin or end as expected`);
  // The umlauts and ß are the file's own: so many, and written as single letters.
  const text = verse.join('\n');
  const found = { 'ä': 0, 'ö': 0, 'ü': 0, 'ß': 0 };
  for (const ch of text) if (ch in found) found[ch]++;
  if (text !== text.normalize('NFC') || JSON.stringify(found) !== JSON.stringify(marked)) throw new Error(`rilke-de: ${what}: umlauts and ß are ${JSON.stringify(found)}, expected ${JSON.stringify(marked)}`);
  return { id, label: title, blocks };
}

const POEMS = [
  {
    id: 'herbsttag',
    title: 'Herbsttag',
    book: 'Das Buch der Bilder',
    file: 'pg34521_rilke_buch_der_bilder.txt',
    url: 'https://www.gutenberg.org/cache/epub/34521/pg34521.txt',
    front: ['DAS BUCH DER BILDER', 'RAINER MARIA RILKE', 'IM INSEL-VERLAG', 'MCMXX'],
    shape: [3, 4, 5],
    first: 'Herr: ',
    last: ' treiben.',
    marked: { 'ä': 2, 'ö': 0, 'ü': 3, 'ß': 3 },
  },
  {
    id: 'panther',
    title: 'Der Panther',
    book: 'Neue Gedichte',
    file: 'pg33863_rilke_neue_gedichte.txt',
    url: 'https://www.gutenberg.org/cache/epub/33863/pg33863.txt',
    front: ['NEUE GEDICHTE', 'RAINER MARIA RILKE', 'IM INSEL-VERLAG', 'MCMXX'],
    shape: [4, 4, 4],
    first: 'Sein Blick ',
    last: ' zu sein.',
    marked: { 'ä': 6, 'ö': 1, 'ü': 2, 'ß': 2 },
  },
];

export function build() {
  return POEMS.map(poem);
}

export function run() {
  return writeText('rilke-de', {
    author: 'Rainer Maria Rilke',
    title: 'Zwei Gedichte',
    translator: null,
    verse: true,
    lang: 'de',
    note: '“Herbsttag” is printed from *Das Buch der Bilder* and “Der Panther” from *Neue Gedichte*, each in the printing of the Insel-Verlag, Leipzig, 1920.',
    source: { name: 'Project Gutenberg, nos. 34521 and 33863', url: 'https://www.gutenberg.org/ebooks/34521' },
  }, build());
}

// ---------- reading the poems against earlier printings ----------

// German Wikisource gives each poem from scans of an earlier printing:
// Herbsttag from Das Buch der Bilder, second edition (Berlin: Axel Juncker,
// 1906), p. 48; Der Panther from Neue Gedichte, first edition (Leipzig:
// Insel-Verlag, 1907), p. 37.
const WIKISOURCE = {
  herbsttag: ['dews_rilke_herbsttag.txt', 'https://de.wikisource.org/w/index.php?title=Herbsttag&action=raw'],
  panther: ['dews_rilke_der_panther.txt', 'https://de.wikisource.org/w/index.php?title=Der_Panther&action=raw'],
};

// The words of a line, for comparing: small letters, no punctuation.
const words = (s) => s.toLowerCase().replace(/[^\p{L}]+/gu, ' ').trim().split(' ').filter(Boolean);

export function collate() {
  for (const part of build()) {
    const [file, url] = WIKISOURCE[part.id];
    const page = fetchText(file, url);
    const field = (name) => ((page.match(new RegExp(`^\\|${name}=(.*)$`, 'm')) || [])[1] || '').replace(/[\[\]]|<br\/>/g, ' ').replace(/\s+/g, ' ').trim();
    const m = page.match(/<poem>([\s\S]*?)<\/poem>/);
    if (!m) throw new Error(`rilke-de: ${part.label}: no poem on the Wikisource page`);
    // Templates carry page and line numbers (and the second line of the
    // title); the title is in bold.
    const theirs = stanzas(m[1].split('\n').map((l) => l.replace(/\{\{[^{}]*\}\}/g, '').trim()).filter((l) => !/^'''.*'''$/.test(l)));
    const ours = part.blocks.filter((b) => b.k === 'v').map((b) => b.lines);
    console.log(`${part.label} (ours: ${POEMS.find((p) => p.id === part.id).book}, Insel-Verlag, 1920)`);
    console.log(`  Wikisource: ${field('HERKUNFT')}; ${field('AUFLAGE')}; ${field('VERLAG')}, ${field('ERSCHEINUNGSJAHR')}; ${field('BEARBEITUNGSSTAND')}`);
    const shape = (list) => list.map((st) => st.length).join(', ');
    if (shape(ours) !== shape(theirs)) throw new Error(`rilke-de: ${part.label}: stanzas of ${shape(theirs)} lines to our ${shape(ours)}`);
    const rows = [];
    const marks = []; // lines that are not the same, character for character
    ours.flat().forEach((line, i) => {
      const other = theirs.flat()[i];
      const a = words(line);
      const b = words(other);
      const mine = a.filter((w, k) => w !== b[k]);
      const yours = b.filter((w, k) => w !== a[k]);
      if (mine.length || yours.length) rows.push(`    line ${i + 1}: ${mine.join(' ') || '-'} | ${yours.join(' ') || '-'}`);
      if (line !== other) marks.push(i + 1);
    });
    console.log(`  stanzas of ${shape(theirs)} lines in both; ${rows.length} lines differ in a word (ours | theirs)`);
    for (const r of rows) console.log(r);
    console.log(`  lines that differ in any letter, capital, stop or dash: ${marks.join(', ') || 'none'}`);
    const head = part.blocks.find((b) => b.k === 'h');
    if (head) console.log(`  under the title: ${JSON.stringify(head.text)} | ${JSON.stringify(field('SUBTITEL'))}`);
  }
}
