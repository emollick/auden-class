// Two poems of Rilke in Jessie Lemont's English (textId `poems`). The first
// version of the site printed Gray's Elegy and Campion's "Rose-cheeked Laura"
// with them, as "Poems for the exercises"; since 3 October 2026 run() writes
// the two poems of Rilke only. Each poem is cut from a Project Gutenberg file;
// nothing is retyped.
//
//   gray-elegy     Select Poems of Thomas Gray, edited by William J. Rolfe
//                  (New York: Harper & Brothers, 1876; printing of 1883).
//                  Project Gutenberg no. 30357.
//   campion-laura  The Oxford Book of English Verse, 1250-1900, edited by
//                  Arthur Quiller-Couch (Oxford: Clarendon Press, 1900;
//                  impression of 1931), no. 169, "Laura".
//                  Project Gutenberg no. 66619.
//   herbsttag-en   Rainer Maria Rilke, Poems, translated by Jessie Lemont
//   panther-en     (New York: Tobias A. Wright, 1918).
//                  Project Gutenberg no. 38594.
//
// run() cuts the poems and is what the build calls. collate() reads each
// poem against other editions and prints the lines whose words differ; it
// is not part of the build:
//
//   node -e "import('./build/texts/poems.mjs').then(m => m.collate())"
//
// See notes/poems.md.

import { fetchText, gutenbergBody, clean, stanzas, writeText } from '../lib/gutenberg.mjs';

// ---------- finding things ----------

function all(body, test) {
  const at = [];
  body.forEach((l, i) => { if (test(l)) at.push(i); });
  return at;
}

function only(body, test, what) {
  const at = all(body, test);
  if (at.length !== 1) throw new Error(`poems: ${what} found ${at.length} times, expected once`);
  return at[0];
}

// The title page at the head of the file must name the edition we say it is.
function edition(body, what, wants) {
  const front = body.slice(0, 80).map((l) => l.trim());
  for (const want of wants) if (!front.includes(want)) throw new Error(`poems: ${what}: the title page lacks ${JSON.stringify(want)}`);
}

// ---------- checking what was cut ----------

// The stanzas of a poem and the lines in each, said shortly.
function stanzaCount(list) {
  const lines = list.reduce((a, n) => a + n, 0);
  const each = list.every((n) => n === list[0]) ? `${list[0]} lines each` : `${list.join(', ')} lines`;
  return `${list.length} stanzas of ${each} (${lines} lines)`;
}

function checkShape(what, blocks, want) {
  const got = blocks.filter((b) => b.k === 'v').map((b) => b.lines.length);
  if (got.length !== want.length || got.some((n, i) => n !== want[i])) {
    throw new Error(`poems: ${what}: expected ${stanzaCount(want)}, found ${stanzaCount(got)}`);
  }
}

function checkText(what, blocks) {
  for (const b of blocks) {
    for (const t of b.k === 'v' ? b.lines : [b.text]) {
      if (!t || t !== t.trim() || / {2,}/.test(t) || /[_\[\]{}=*|<>\d]/.test(t)) throw new Error(`poems: ${what}: unexpected mark or spacing in ${JSON.stringify(t)}`);
    }
  }
}

// A line of verse as it goes into a block. clean() takes out italic marks
// (and would take out a note mark or a run of spaces); `marks` counts the
// lines it changed, so that each poem can say how many it expects.
function tidy(raw, marks) {
  const t = raw.trim();
  const out = clean(t).trim();
  if (out !== t) marks.push(t);
  return out;
}

const verse = (lines, marks) => stanzas(lines).map((st) => ({ k: 'v', lines: st.map((l) => tidy(l, marks)) }));

// ---------- Gray ----------

// Headings inside the poem, as the file prints them and as they stand here.
const GRAY_HEADINGS = { 'THE EPITAPH.': 'The Epitaph' };
// Rolfe's book sets a picture between some of the stanzas.
const GRAY_PICTURES = 16;

function gray() {
  const what = 'Gray';
  const body = gutenbergBody(fetchText('pg30357_gray_rolfe.txt', 'https://www.gutenberg.org/cache/epub/30357/pg30357.txt'));
  edition(body, what, ['SELECT POEMS OF THOMAS GRAY.', 'WILLIAM J. ROLFE, A.M.,', 'HARPER & BROTHERS, PUBLISHERS,', '1883.']);
  // The title stands twice, on a half-title and over the poem. The poem
  // ends where the next division of the book begins.
  const titles = all(body, (l) => l === 'ELEGY WRITTEN IN A COUNTRY CHURCHYARD.');
  if (titles.length !== 2) throw new Error(`poems: ${what}: the title of the Elegy found ${titles.length} times, expected twice`);
  const end = only(body, (l) => l === 'MISCELLANEOUS POEMS.', `${what}: the heading that follows the Elegy`);
  if (end < titles[1]) throw new Error(`poems: ${what}: the Elegy does not stand before the miscellaneous poems`);

  const blocks = [];
  let cur = null; // the stanza being gathered
  let n = 0; // lines of the poem so far
  let numbers = 0;
  let pictures = 0;
  const marks = [];
  for (let i = titles[1] + 1; i < end; i++) {
    const raw = body[i];
    const where = `${what}, line ${i + 1} of the body`;
    const t = raw.trim();
    if (t === '') { cur = null; continue; }
    if (t === '[Illustration]') {
      if (cur) throw new Error(`poems: ${where}: a picture inside a stanza`);
      pictures++;
      continue;
    }
    if (Object.hasOwn(GRAY_HEADINGS, t)) {
      if (cur) throw new Error(`poems: ${where}: a heading inside a stanza`);
      blocks.push({ k: 'h', level: 3, text: GRAY_HEADINGS[t] });
      continue;
    }
    // A line of verse, with the number of the line in the margin of every fifth.
    const m = raw.match(/^( +)(\S.*?)(?: {2,}(\d+))?$/);
    if (!m) throw new Error(`poems: ${where}: line not understood: ${JSON.stringify(raw.slice(0, 50))}`);
    n++;
    if (m[3] !== undefined) {
      if (Number(m[3]) !== n || n % 5) throw new Error(`poems: ${where}: margin number ${m[3]} on line ${n}`);
      numbers++;
    } else if (n % 5 === 0) throw new Error(`poems: ${where}: no margin number on line ${n}`);
    if (!cur) {
      cur = { k: 'v', lines: [] };
      blocks.push(cur);
    }
    // The second and fourth lines of each stanza are set in.
    if (m[1].length !== (cur.lines.length % 2 ? 4 : 2)) throw new Error(`poems: ${where}: indented ${m[1].length} spaces as line ${cur.lines.length + 1} of its stanza`);
    cur.lines.push(tidy(m[2], marks));
  }

  checkShape(what, blocks, Array(32).fill(4));
  checkText(what, blocks);
  if (n !== 128 || numbers !== 25) throw new Error(`poems: ${what}: ${n} lines and ${numbers} margin numbers, expected 128 and 25`);
  if (pictures !== GRAY_PICTURES) throw new Error(`poems: ${what}: ${pictures} pictures passed over, expected ${GRAY_PICTURES}`);
  if (marks.length) throw new Error(`poems: ${what}: markup in ${JSON.stringify(marks[0])}`);
  // The Epitaph is the last three stanzas, under its heading.
  const heads = all(blocks, (b) => b.k === 'h');
  if (blocks.length !== 33 || heads.length !== 1 || heads[0] !== 29) throw new Error(`poems: ${what}: expected one heading, after the twenty-ninth stanza; found ${heads.length} at ${heads.join(', ')}`);
  const last = blocks[32].lines[3];
  if (!blocks[0].lines[0].startsWith('The curfew tolls') || !last.endsWith('his Father and his God.')) throw new Error(`poems: ${what}: the poem does not begin or end as expected`);
  return blocks;
}

// ---------- Campion ----------

function campion() {
  const what = 'Campion';
  const body = gutenbergBody(fetchText('pg66619_oxford_book_english_verse.txt', 'https://www.gutenberg.org/cache/epub/66619/pg66619.txt'));
  edition(body, what, ['Oxford Book', 'Of English Verse', '_Impression of 1931_', '_First edition, 1900_', 'Arthur Quiller-Couch']);
  const at = only(body, (l) => l === '_169._ _Laura_', `${what}: the heading of no. 169`);
  // A poet's name stands in capitals over his poems: the nearest above
  // no. 169 must be Campion's.
  let j = at - 1;
  while (j >= 0 && !/^[A-Z][A-Z .,'’-]+$/.test(body[j])) j--;
  if (body[j] !== 'THOMAS CAMPION') throw new Error(`poems: ${what}: no. 169 stands under ${JSON.stringify(body[j])}`);
  // Verse is set in from the margin; the next line at the margin is the
  // next heading.
  let end = at + 1;
  while (end < body.length && (body[end].trim() === '' || /^ +\S/.test(body[end]))) end++;
  if (!/^_.+_$/.test(body[end] || '')) throw new Error(`poems: ${what}: the poem is not followed by a heading`);
  const marks = [];
  const blocks = verse(body.slice(at + 1, end), marks);

  checkShape(what, blocks, [4, 4, 4, 4]);
  checkText(what, blocks);
  // The name in the first line is in italics; nothing else is marked.
  if (marks.length !== 1 || !/^Rose-cheek\S+ _Laura_, /.test(marks[0])) throw new Error(`poems: ${what}: expected italic marks in the first line only, found them in ${marks.length} lines`);
  // The poem's last word is divided between its last two lines.
  const last = blocks[3].lines;
  if (!blocks[0].lines[0].startsWith('Rose-cheek') || !last[2].endsWith('them-') || !last[3].startsWith('selves ')) throw new Error(`poems: ${what}: the poem does not begin or end as expected`);
  return blocks;
}

// ---------- Rilke in Jessie Lemont's English ----------

const LEMONT = [
  { id: 'herbsttag-en', title: 'Autumnal Day', shape: [3, 3, 6], first: 'Lord!', last: 'grove.' },
  { id: 'panther-en', title: 'The Panther', shape: [4, 4, 4], first: 'His ', last: 'heart.' },
];

function lemont() {
  const body = gutenbergBody(fetchText('pg38594_rilke_lemont.txt', 'https://www.gutenberg.org/cache/epub/38594/pg38594.txt'));
  edition(body, 'Lemont', ['RAINER MARIA RILKE', 'Translated by Jessie Lemont', 'New York', 'Tobias A. Wright', '1918']);
  return LEMONT.map((p) => {
    const what = `Lemont, ${p.title}`;
    // The title as the list of contents gives it, and in capitals over the poem.
    only(body, (l) => l.trim() === p.title, `${what}: the title in the contents`);
    const at = only(body, (l) => l.trim() === p.title.toUpperCase(), `${what}: the title over the poem`);
    // The poem runs to the wide space that stands before the next title.
    let i = at + 1;
    while (i < body.length && body[i].trim() === '') i++;
    const lines = [];
    for (; i < body.length && !(body[i].trim() === '' && (body[i + 1] || '').trim() === ''); i++) lines.push(body[i]);
    while (i < body.length && body[i].trim() === '') i++;
    if (!body[i] || /[a-z]/.test(body[i])) throw new Error(`poems: ${what}: the poem is not followed by the title of the next`);
    const marks = [];
    const blocks = verse(lines, marks);

    checkShape(what, blocks, p.shape);
    checkText(what, blocks);
    if (marks.length) throw new Error(`poems: ${what}: markup in ${JSON.stringify(marks[0])}`);
    const end = blocks[blocks.length - 1].lines;
    if (!blocks[0].lines[0].startsWith(p.first) || !end[end.length - 1].endsWith(p.last)) throw new Error(`poems: ${what}: the poem does not begin or end as expected`);
    return { id: p.id, label: `Rainer Maria Rilke: ${p.title}, translated by Jessie Lemont (1918)`, blocks };
  });
}

// ---------- the text ----------

export function build() {
  return [
    { id: 'gray-elegy', label: 'Thomas Gray: Elegy Written in a Country Churchyard', blocks: gray() },
    { id: 'campion-laura', label: 'Thomas Campion: Rose-cheeked Laura', blocks: campion() },
    ...lemont(),
  ];
}

export function run() {
  // Only the two poems of Rilke are printed now: the page for his book sets
  // one of them beside the German. Gray's and Campion's poems were printed
  // for the first version of the site and are no longer written out; they
  // are still cut above, because collate() reads them.
  const rilke = build().filter((p) => p.id.endsWith('-en')).map((p) => ({
    ...p,
    label: p.label.replace(/^Rainer Maria Rilke: /, '').replace(/, translated by Jessie Lemont \(1918\)$/, ''),
  }));
  if (rilke.length !== 2) throw new Error(`poems: expected the two poems of Rilke, found ${rilke.length}`);
  return writeText('poems', {
    author: 'Rainer Maria Rilke',
    title: 'Two Poems',
    translator: 'Jessie Lemont',
    year: 1918,
    verse: true,
    note: 'The two poems are printed from *Poems*, translated by Jessie Lemont (New York: Tobias A. Wright, 1918). The German of both is [printed here as well](#/read/rilke-de).',
    source: { name: 'Project Gutenberg, no. 38594', url: 'https://www.gutenberg.org/ebooks/38594' },
  }, rilke);
}

// ---------- reading the poems against other editions ----------

// The words of a line, for comparing: small letters, no accents, no
// punctuation. An apostrophe or hyphen inside a word is kept.
function words(s) {
  return s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()
    .replace(/[’‘`]/g, "'").replace(/--|[—–]/g, ' ')
    .replace(/[^\p{L}' -]+/gu, ' ')
    .replace(/(^|\s)['-]+|['-]+(?=\s|$)/g, '$1')
    .split(/\s+/).filter(Boolean);
}

// The words of each list that the other has not.
function unlike(a, b) {
  const left = b.slice();
  const mine = [];
  for (const w of a) {
    const k = left.indexOf(w);
    if (k >= 0) left.splice(k, 1); else mine.push(w);
  }
  return [mine, left];
}

// How many words must be changed, dropped or added to turn one line into the other.
function distance(a, b) {
  let row = b.map((_, j) => j + 1);
  for (let i = 0; i < a.length; i++) {
    const next = [];
    for (let j = 0; j < b.length; j++) {
      next.push(Math.min((j ? next[j - 1] : i + 1) + 1, row[j] + 1, (j ? row[j - 1] : i) + (a[i] === b[j] ? 0 : 1)));
    }
    row = next;
  }
  return b.length ? row[b.length - 1] : a.length;
}

// A text read by machine from the page has running heads and line numbers
// among its lines. For each of our lines, take the nearest line of the
// other text, reading forward from `from`.
function nearest(ours, theirs, from) {
  const out = [];
  let pos = from;
  for (const line of ours) {
    const want = words(line);
    let best = null;
    for (let i = pos; i < Math.min(theirs.length, pos + 14); i++) {
      const got = words(theirs[i]);
      if (!got.length) continue;
      const d = distance(want, got);
      if (!best || d < best.d) best = { i, d };
    }
    if (!best) throw new Error('poems: the other text ends before the poem does');
    out.push(theirs[best.i]);
    pos = best.i + 1;
  }
  return out;
}

function report(name, ours, theirs) {
  if (ours.length !== theirs.length) throw new Error(`poems: ${name}: ${theirs.length} lines to our ${ours.length}`);
  const rows = [];
  ours.forEach((line, i) => {
    const [a, b] = unlike(words(line), words(theirs[i]));
    if (a.length || b.length) rows.push(`    line ${i + 1}: ${a.join(' ') || '-'} | ${b.join(' ') || '-'}`);
  });
  console.log(`  ${name}: ${ours.length} lines read, ${rows.length} differ (ours | theirs)`);
  for (const r of rows) console.log(r);
  return rows.length;
}

const linesOf = (blocks) => blocks.filter((b) => b.k === 'v').flatMap((b) => b.lines);
const strip = (l) => l.replace(/_/g, '').trim();

export function collate() {
  const [elegy, laura, autumnal, panther] = build().map((p) => linesOf(p.blocks));

  console.log('Gray, Elegy (ours: Rolfe, 1876)');
  {
    // Poetical Works of Johnson, Parnell, Gray, and Smollett, ed. George
    // Gilfillan (Edinburgh, 1855). The stanzas are numbered.
    const body = gutenbergBody(fetchText('pg11254_gray_gilfillan.txt', 'https://www.gutenberg.org/cache/epub/11254/pg11254.txt'));
    const a = only(body, (l) => l === 'ELEGY WRITTEN IN A COUNTRY CHURCHYARD.', 'Gilfillan: the title of the Elegy');
    const b = body.findIndex((l, i) => i > a && l.startsWith('[Footnote 1:'));
    const theirs = body.slice(a + 1, b).filter((l) => l.trim() && l.trim() !== 'THE EPITAPH.').map((l) => strip(l.replace(/^\s*\d+ /, '').replace(/\[\d\]/, '')));
    report('Gilfillan, 1855 (Project Gutenberg no. 11254)', elegy, theirs);
  }
  {
    // The Oxford Book of English Verse, no. 453.
    const body = gutenbergBody(fetchText('pg66619_oxford_book_english_verse.txt', 'https://www.gutenberg.org/cache/epub/66619/pg66619.txt'));
    const a = only(body, (l) => l === '_453._ _Elegy written in a Country Churchyard_', 'Oxford Book: the heading of no. 453');
    const b = body.findIndex((l, i) => i > a && /^_\d+\._ /.test(l));
    const theirs = body.slice(a + 1, b).filter((l) => l.trim() && l.trim() !== '_THE EPITAPH._').map(strip);
    report('Oxford Book of English Verse, 1900 (Project Gutenberg no. 66619)', elegy, theirs);
  }
  {
    // The first edition: An Elegy Wrote in a Country Church Yard (London:
    // Dodsley, 1751), in the Augustan Reprint Society's facsimile.
    const body = gutenbergBody(fetchText('pg15409_gray_1751.txt', 'https://www.gutenberg.org/cache/epub/15409/pg15409.txt'));
    const a = only(body, (l) => l === 'ELEGY, _&c._', 'first edition: the head of the poem');
    const b = only(body, (l) => l === 'FINIS.', 'first edition: the end of the poem');
    const theirs = body.slice(a + 1, b).filter((l) => l.trim() && l.trim() !== 'The EPITAPH.').map(strip);
    report('first edition, 1751 (Project Gutenberg no. 15409)', elegy, theirs);
  }

  console.log('Campion, Rose-cheeked Laura (ours: Oxford Book of English Verse, 1900)');
  {
    // The Works of Dr. Thomas Campion, ed. A. H. Bullen (London, 1889),
    // p. 254; read by machine from the page.
    const text = fetchText('ia_worksofdrthomasc00camp_djvu.txt', 'https://archive.org/download/worksofdrthomasc00camp/worksofdrthomasc00camp_djvu.txt').split('\n');
    const a = text.findIndex((l) => /^Rose-cheeked\s+Laura/.test(l));
    if (a < 0) throw new Error('poems: Bullen: the poem was not found');
    report('Bullen, 1889 (archive.org, worksofdrthomasc00camp), read by machine', laura, nearest(laura, text, a));
  }
  {
    // Campion's Works, ed. Percival Vivian (Oxford: Clarendon Press, 1909),
    // pp. 50-51, in the spelling of 1602; read by machine from the page.
    const text = fetchText('ia_campionsworks00camp_djvu.txt', 'https://archive.org/download/campionsworks00camp/campionsworks00camp_djvu.txt').split('\n');
    const a = text.findIndex((l) => /^Rose-cheekt\s+Lawra/.test(l));
    if (a < 0) throw new Error('poems: Vivian: the poem was not found');
    report('Vivian, 1909 (archive.org, campionsworks00camp), read by machine, old spelling', laura, nearest(laura, text, a));
  }
  {
    // R. M. Alden, English Verse (New York, 1903), quotes the first two
    // stanzas in the spelling of 1602.
    const body = gutenbergBody(fetchText('pg32262_alden_english_verse.txt', 'https://www.gutenberg.org/cache/epub/32262/pg32262.txt'));
    const a = only(body, (l) => /^\s+Rose-cheekt Lawra come$/.test(l), 'Alden: the first line of the poem');
    const theirs = body.slice(a, a + 9).filter((l) => l.trim()).map(strip);
    report('Alden, 1903 (Project Gutenberg no. 32262), first two stanzas, old spelling', laura.slice(0, 8), theirs);
  }

  console.log('Rilke in Lemont\'s English (ours: Project Gutenberg no. 38594)');
  // Two copies of the book of 1918, read by machine from the page.
  const copies = [
    ['Cornell copy (archive.org, cu31924026255822)', fetchText('ia_cu31924026255822_djvu.txt', 'https://archive.org/download/cu31924026255822/cu31924026255822_djvu.txt')],
    ['Brigham Young copy (archive.org, poems00rilk)', fetchText('ia_poems00rilk_djvu.txt', 'https://archive.org/download/poems00rilk/poems00rilk_djvu.txt')],
  ];
  for (const [where, file] of copies) {
    const text = file.split('\n');
    for (const [title, ours] of [['AUTUMNAL DAY', autumnal], ['THE PANTHER', panther]]) {
      const a = text.findIndex((l) => l.replace(/\s+/g, ' ').startsWith(title));
      if (a < 0) throw new Error(`poems: Lemont, ${where}: ${title} was not found`);
      const theirs = nearest(ours, text, a + 1);
      report(`${title}, ${where}, read by machine`, ours, theirs);
      const stop = (l) => l.trim().slice(-1);
      console.log(`    the last line ends with ${JSON.stringify(stop(ours[ours.length - 1]))} in ours, ${JSON.stringify(stop(theirs[theirs.length - 1]))} in theirs`);
    }
  }
}
