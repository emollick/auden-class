// Gluck, Orpheus and Eurydice (Orfeo ed Euridice): the English of the
// Italian and English libretto published by Fred Rullman, New York, for
// the Metropolitan Opera House, "edited and translated by Manfredo
// Maggioni". Internet Archive, orfeoeeuridicely00glucuoft: raw OCR text of
// a scan. The Italian stands on the left-hand pages and the English on
// the right-hand pages; only the English is taken.
// See notes/orpheus.md.

import { writeText } from '../lib/gutenberg.mjs';
import { sourceLines, mend, leaveOut, englishPages, englishLines, reorder, joinLines, glue, tidy, lastChecks, ordinal } from './orpheus-giovanni-flute.lib.mjs';

const ID = 'orpheus';
const FILE = 'ia_orfeoeeuridicely00glucuoft_djvu.txt';
const URL = 'https://archive.org/download/orfeoeeuridicely00glucuoft/orfeoeeuridicely00glucuoft_djvu.txt';
const FROM = 210; // the head of the first Italian page
const TO = 1890; // 'END.'

// The running heads of the pages.
const HEAD = { it: /^ORFEO E EURIDICE\.$/, en: /^ORPHEUS AND EURYDICE\.$/ };

// Words the machine misread, mended after the page images:
// [line, as the file has it, as the book prints it].
const FIXES = [
  [335, '0/~EURYDICE', 'of EURYDICE'],
  [336, '0/ ORPHEUS', 'of ORPHEUS'],
  [671, "Ne' er", "Ne'er"],
  [683, '0 merciful', 'O merciful'],
  [685, '1 truly', 'I truly'],
  [691, '0 favor', 'O favor'],
  [710, '1 must', 'I must'],
  [871, 'EURYD1CE', 'EURYDICE'], // a running head
  [883, "Furies ', ORPHEUS.", 'Furies, ORPHEUS.'],
  [982, 'Eu-', 'EU-'], // the name is in small capitals, broken at the line's end
  [1169, 'thy Voice', 'thy voice'],
  [1437, '0 happy', 'O happy'],
  [1493, '1 shall', 'I shall'],
  // Three lines sung by both, their two names joined by a brace in the margin:
  [1501, 'EURYDICE } Oh.', 'EURYDICE and ORPHEUS. Oh.'],
  [1502, 'and Behold', 'Behold'],
  [1504, 'ORPHEUS. ) Alas', 'Alas'],
  [1518, '0 barbarous', 'O barbarous'],
  [1524, '1 was', 'I was'],
  [1743, '0 my', 'O my'],
  [1755, '1 shall', 'I shall'],
  [1857, 'EURY«', 'EURY-'],
];
// The printer's own slips, which the page images show in the book itself,
// put right where the word meant is beyond doubt.
const MISPRINTS = [
  [599, 'From you dreadful', 'From your dreadful'],
  [975, 'different groups', 'different groups.'],
  [1501, 'Oh. gods', 'Oh, gods'],
];
// Page numbers.
const LEFT_OUT = [
  [1009, '10'],
  [1147, 'II'],
  [1273, '12'],
];
// On the page headed at line 1144 the machine read the foot of the first
// column (the heading of Scene IV and what stands under it) after the top
// of the second.
const MOVES = [[1224, 1229, 1204]];

// Lines that belong to the end of the line before: verse too long for the
// column and turned over, and one name with its direction broken in two.
const JOINS = [364, 637, 660, 679, 702, 893, 906, 907, 927, 987, 995, 1154, 1176, 1190, 1201, 1211, 1250, 1435, 1447, 1476, 1555, 1740, 1778];
// Stage directions, scene descriptions and the lists of persons under the
// scene headings (italic in the book): [first line, last line] of each.
const DIRECTIONS = [
  [323, 332], [334, 337], [339, 342], [371, 371], [672, 672], [712, 714],
  [879, 881], [883, 883], [885, 885], [887, 890], [946, 947], [958, 962],
  [972, 975], [977, 977], [979, 980], [982, 983], [1006, 1006],
  [1226, 1227], [1229, 1229], [1204, 1207], [1218, 1219],
  [1237, 1238], [1240, 1240], [1242, 1245], [1508, 1509], [1563, 1565], [1571, 1571],
  [1808, 1810], [1815, 1815], [1833, 1834], [1857, 1858], [1860, 1860],
];
// The book shows where an air begins, and where a new strophe of it, only
// by setting the lines further in or out; the OCR text has lost that. The
// lines that begin a new block of verse inside a speech, from the page images:
const STANZAS = [383, 388, 393, 406, 411, 575, 605, 661, 667, 722, 898, 992, 999, 1214, 1518, 1524, 1550, 1751, 1765, 1772, 1785, 1792, 1799];

// Four lines of verse printed in brackets, an aside: the first and the last of them.
const BRACKETED = [1459, 1462];

const SPEAKERS = ['CHORUS to EURYDICE', 'CHORUS OF DEMONS', 'EURYDICE and ORPHEUS', 'THE HAPPY SHADE', 'ORPHEUS', 'EURYDICE', 'CHORUS', 'LOVE', 'ALL'];
// At line 1188 the book sets the persons of the scene, "THE SHADES AND
// ORPHEUS.", where the speaker's name should stand (the Italian page has the
// persons and then the name ORFEO). It is given as the persons, as under the
// other scene headings, and the name ORPHEUS is supplied.
const EMENDED = { 1188: { was: 'THE SHADES AND ORPHEUS. ', persons: 'The Shades and ORPHEUS.', speaker: 'ORPHEUS' } };

const SCENES = [4, 1, 4, 3];

export function build() {
  const line = sourceLines(FILE, URL);
  if (line[FROM] !== 'ORFEO E EURIDICE.' || line[TO] !== 'END.') throw new Error(`${ID}: the libretto does not lie where it did in the file`);
  mend(ID, line, FIXES);
  mend(ID, line, MISPRINTS, 'misprint');
  leaveOut(ID, line, LEFT_OUT);
  const pages = englishPages(ID, line, { from: FROM, to: TO, head: HEAD });
  if (pages.length !== 6) throw new Error(`${ID}: ${pages.length} English pages, expected 6`);
  const stream = joinLines(ID, reorder(ID, englishLines(line, pages), MOVES), JOINS);

  const dirStart = new Map(DIRECTIONS.map(([a, b]) => [a, b]));
  const stanza = new Set(STANZAS);
  const label = new RegExp(`^(${SPEAKERS.join('|')})(?: \\(([^()]+)\\))?\\.(?: (.+))?$`);
  const parts = [];
  const src = new Map(); // block -> the source lines it came from
  let part = null;
  let scenes = 0;
  let speaker = null;
  let verse = null; // the verse block being gathered
  let ends = 0;
  const push = (b, n) => { part.blocks.push(b); src.set(b, n); return b; };
  const closeAct = () => {
    if (part && scenes !== SCENES[parts.length - 1]) throw new Error(`${ID}: act ${parts.length} has ${scenes} scenes, expected ${SCENES[parts.length - 1]}`);
  };
  for (let i = 0; i < stream.length; i++) {
    const l = stream[i];
    const where = `line ${l.n}`;
    let m;
    if ((m = l.text.match(/^Act (One|Two|Three|Four)\.$/))) {
      closeAct();
      const n = ordinal(m[1]);
      if (n !== parts.length + 1) throw new Error(`${ID}: act ${n} out of order, ${where}`);
      part = { id: `act-${n}`, label: `Act ${n}`, blocks: [] };
      parts.push(part);
      scenes = 0; speaker = null; verse = null;
      continue;
    }
    if (!part) throw new Error(`${ID}: text before the first act, ${where}: ${l.text}`);
    if ((m = l.text.match(/^SCENE (I|II|III|IV)\.$/))) {
      const n = ['I', 'II', 'III', 'IV'].indexOf(m[1]) + 1;
      if (n !== scenes + 1) throw new Error(`${ID}: ${part.label}, scene ${n} out of order, ${where}`);
      scenes = n;
      push({ k: 'h', level: 3, text: `Scene ${n}` }, [l.n]);
      speaker = null; verse = null;
      continue;
    }
    if (/^END OF THE (FIRST|SECOND|THIRD) ACT\.$/.test(l.text) || l.text === 'END.') { ends++; verse = null; continue; }
    if (!scenes) throw new Error(`${ID}: text before the first scene of ${part.label}, ${where}`);
    if (dirStart.has(l.n)) {
      // a direction: its lines run to the last line the table names
      const last = dirStart.get(l.n);
      let text = l.text;
      const ns = [...l.ns];
      while (stream[i].ns[stream[i].ns.length - 1] < last) {
        i++;
        if (stream[i].n > last || dirStart.has(stream[i].n)) throw new Error(`${ID}: the direction at ${where} does not run to line ${last}`);
        text = glue(text, stream[i].text);
        ns.push(...stream[i].ns);
      }
      if (ns[ns.length - 1] !== last) throw new Error(`${ID}: the direction at ${where} does not end at line ${last}`);
      dirStart.delete(l.n);
      text = tidy(text).replace(/^\(/, '').replace(/\)$/, '');
      if (/[()]/.test(text)) throw new Error(`${ID}: direction not understood, ${where}: ${text}`);
      push({ k: 'd', text }, ns);
      verse = null;
      continue;
    }
    let text = tidy(l.text);
    if (EMENDED[l.n]) {
      const e = EMENDED[l.n];
      if (!text.startsWith(e.was)) throw new Error(`${ID}: ${where} is not as it was when the emendation was made`);
      push({ k: 'd', text: e.persons }, [l.n]);
      text = `${e.speaker}. ${text.slice(e.was.length)}`;
    }
    if ((m = text.match(label))) {
      speaker = m[1];
      push({ k: 's', text: speaker }, [l.n]);
      if (m[2]) push({ k: 'd', text: m[2] }, [l.n]);
      verse = null;
      if (!m[3]) continue;
      text = m[3];
    } else if (/^[A-Z]{3,}[A-Za-z ]*\./.test(text) || (/^\(|\)$/.test(text) && !BRACKETED.includes(l.n))) {
      throw new Error(`${ID}: a name or a direction not provided for, ${where}: ${text}`);
    }
    if (!speaker) throw new Error(`${ID}: verse with no speaker, ${where}: ${text}`);
    if (!verse || stanza.has(l.n)) verse = push({ k: 'v', lines: [] }, []);
    stanza.delete(l.n);
    verse.lines.push(text);
    src.get(verse).push(l.n);
  }
  closeAct();

  if (parts.length !== 4) throw new Error(`${ID}: expected 4 acts, found ${parts.length}`);
  if (ends !== 4) throw new Error(`${ID}: ${ends} act endings, expected 4`);
  if (dirStart.size) throw new Error(`${ID}: directions not found at lines ${[...dirStart.keys()].join(', ')}`);
  if (stanza.size) throw new Error(`${ID}: no verse begins at lines ${[...stanza].join(', ')}`);
  lastChecks(ID, parts);
  const first = parts[0].blocks;
  const lastPart = parts[3].blocks;
  const last = lastPart[lastPart.length - 1];
  if (first[0].text !== 'Scene 1' || !first[1].text.startsWith('A beautiful but solitary grove') || first[4].text !== 'CHORUS') throw new Error(`${ID}: the libretto does not begin as expected`);
  if (last.k !== 'v' || last.lines[last.lines.length - 1] !== 'All losses to repair.') throw new Error(`${ID}: the libretto does not end as expected`);
  return { parts, src };
}

export function run() {
  return writeText(ID, {
    author: 'Christoph Willibald Gluck',
    title: 'Orpheus and Eurydice',
    translator: 'Manfredo Maggioni',
    year: null, // the libretto bears no date
    note: 'The English version from the Italian and English libretto that Fred Rullman of New York published for the Metropolitan Opera House. It names Manfredo Maggioni as editor and translator and gives no date. This text was read by machine from a scan. It was then read through against the scan, but some misread words may remain.',
    verse: false,
    source: { name: 'Internet Archive', url: 'https://archive.org/details/orfeoeeuridicely00glucuoft' },
  }, build().parts);
}
