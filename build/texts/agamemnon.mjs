// Aeschylus, Agamemnon, translated by E. D. A. Morshead (1881).
// Project Gutenberg no. 8604 ("The House of Atreus", the whole trilogy);
// only the Agamemnon is taken. Greek plays have no acts: the play is cut
// into six parts at the entrances that follow the choral odes.
import { fetchText, gutenbergBody, writeText } from '../lib/gutenberg.mjs';

const SPEAKERS = new Set([
  'CHORUS', 'CLYTEMNESTRA', 'HERALD', 'AGAMEMNON', 'CASSANDRA', 'AEGISTHUS',
  'VOICE OF AGAMEMNON', 'ONE OF THE CHORUS', 'ANOTHER', 'LEADER OF THE CHORUS',
]);

// A new part begins at each of these lines, in this order. `speaker` is set
// where the source goes on with the same speaker after the direction and
// prints no name: the name is then repeated at the head of the new part.
const PARTS = [
  { label: '1. The Watchman; the Elders' },
  { at: /^\[_They turn to Clytemnestra/, label: '2. Clytemnestra and the beacon-fires', speaker: 'CHORUS' },
  { at: /^_Enter_ HERALD$/, label: '3. The Herald from Troy' },
  { at: /^\[_Enter Agamemnon in a chariot/, label: '4. The return of Agamemnon' },
  { at: /^_Re-enter_ CLYTEMNESTRA$/, label: '5. Cassandra' },
  { at: /^\[_A loud cry from within\._$/, label: '6. The death of Agamemnon; Clytemnestra and Aegisthus' },
];

// Blank lines that fall in the middle of a sentence (page breaks of the
// printed book carried into the file). The two lines belong to one stanza:
// [how the line before begins, how the line after begins].
const JOIN = [
  ['Yet in the sight of gods shall rise', 'The great wrong of the slain'],
  ['And as he wills, the rod', 'Of vengeance smiteth sore.'],
  ['Or—but away, forebodings adverse', 'And on fair promise fair fulfilment'],
  ['And in hazard of their fortune', 'And forget the law of subjects'],
];

// A pair of long lines that the file has wrapped as if they were prose: the
// last words of the first belong at the head of the second (the rhyme shows
// where the line ends). [how the first line begins, words to carry over]
const CARRY = [['Up to action, O my comrades!', 2]];

// The file was taken from the Harvard Classics, vol. 8, in its first
// setting of 1909 (scanned at the Internet Archive as ninegreekdramas08aesc
// and ninegreekdramasb00aescuoft). It was compared with those scans, with
// the later, reset Harvard Classics volume (harvardclassics08eliouoft) and
// with Morshead's own editions of 1881, 1889 and 1904.
// A misprint of the 1909 book, which the file copies (the place-name is
// right in the reset volume and in Morshead's editions), and a slip of the
// file, where every printing has the word:
// [how the line begins in the file, the file's reading, the printed reading].
const MISPRINTS = [
  ['Looking across to Chalics', 'Chalics', 'Chalcis'],
  ['Rent flesh of tine', 'tine', 'kine'],
];

// Stops where the file is wrong: the reset Harvard Classics volume (read
// in its page images) and Morshead's editions of 1889 and 1904 agree
// against it in each. So does the 1909 setting in its page images, except
// at "true", where it prints the file's full stop in the middle of a
// sentence.
const POINTING = [
  ['The people’s wealth, that', 'wall.', 'wall,'],
  ['“Nay. if it must', 'Nay.', 'Nay,'],
  ['_Luck sway the scale,', 'poise.', 'poise,'],
  ['Woe for the home,', 'chieftains, woe', 'chieftains, woe!'],
  ['Whether, as well I', 'true.', 'true,'],
  ['Yea till my brooding', 'Yea till', 'Yea, till'],
  ['Spreading a shade what', 'shade what', 'shade, what'],
  ['So that he could', 'doom,', 'doom.'],
  ['To cornland, when the', 'grain,', 'grain.'],
  ['Thou shalt pay, be well', 'thy pride', 'thy pride.'],
];

function mend(lines) {
  for (const [a, b] of JOIN) {
    const at = [];
    lines.forEach((l, i) => {
      if (l.trim().startsWith(a) && lines[i + 1]?.trim() === '' && lines[i + 2]?.trim().startsWith(b)) at.push(i);
    });
    if (at.length !== 1) throw new Error(`Agamemnon: break to close found ${at.length} times: "${a}"`);
    lines.splice(at[0] + 1, 1);
  }
  for (const [a, n] of CARRY) {
    const at = [];
    lines.forEach((l, i) => { if (l.trim().startsWith(a)) at.push(i); });
    if (at.length !== 1) throw new Error(`Agamemnon: line to mend found ${at.length} times: "${a}"`);
    const i = at[0];
    const words = lines[i].trim().split(' ');
    const tail = words.splice(words.length - n, n);
    if (!/^[a-z]/.test(lines[i + 1]) || !/^[A-Z]/.test(tail[0]) || !/[.!?]$/.test(words[words.length - 1])) {
      throw new Error(`Agamemnon: the lines at "${a}" are not as expected`);
    }
    lines[i] = words.join(' ');
    lines[i + 1] = `${tail.join(' ')} ${lines[i + 1].trim()}`;
  }
  for (const [begins, wrong, right] of [...MISPRINTS, ...POINTING]) {
    const at = [];
    lines.forEach((l, i) => { if (l.trim().startsWith(begins)) at.push(i); });
    if (at.length !== 1) throw new Error(`Agamemnon: misprint: "${begins}" found ${at.length} times`);
    if (lines[at[0]].split(wrong).length !== 2) throw new Error(`Agamemnon: misprint "${wrong}" is not once in its line`);
    lines[at[0]] = lines[at[0]].replace(wrong, right);
  }
  return lines;
}

const plain = (s) => s.replace(/_/g, '').replace(/\s+/g, ' ').trim();

export function build() {
  const body = gutenbergBody(fetchText('pg8604_oresteia_morshead.txt', 'https://www.gutenberg.org/cache/epub/8604/pg8604.txt'));
  // The play begins with the direction that sets the scene, under the
  // title and the list of persons, and ends where the next play's title stands.
  const starts = body.map((l, i) => (/^_The Scene is the Palace of Atreus/.test(l) ? i : -1)).filter((i) => i >= 0);
  if (starts.length !== 1) throw new Error(`Agamemnon: opening direction found ${starts.length} times`);
  const start = starts[0];
  const above = body.slice(start - 14, start).map((l) => l.trim());
  if (!above.includes('AGAMEMNON') || !above.includes('DRAMATIS PERSONAE')) throw new Error('Agamemnon: title and list of persons not found above the opening direction');
  let end = body.findIndex((l, i) => i > start && l.trim() === 'THE LIBATION-BEARERS');
  if (end < 0) throw new Error('Agamemnon: the title of the next play was not found');
  while (body[end - 1].trim() === '') end--;
  if (body[end - 1].trim() !== '[_Exeunt_.') throw new Error('Agamemnon: the play does not end with the Exeunt');
  const lines = mend(body.slice(start, end));

  const parts = [];
  let part = null;
  let verse = null;
  let speaker = null;
  let next = 1;
  const count = {};
  const push = (b) => { part.blocks.push(b); };
  const say = (name) => {
    speaker = name;
    verse = null;
    count[name] = (count[name] || 0) + 1;
    push({ k: 's', text: name });
  };
  const newPart = () => {
    part = { id: `p${parts.length + 1}`, label: PARTS[parts.length].label, blocks: [] };
    parts.push(part);
    verse = null;
  };
  newPart();

  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t === '') { verse = null; continue; }
    if (/[=*{}\d]/.test(t)) throw new Error(`Agamemnon: unexpected mark: ${t}`);
    const breakHere = next < PARTS.length && PARTS[next].at.test(t);
    let carried = null;
    if (breakHere) {
      if (PARTS[next].speaker) {
        if (speaker !== PARTS[next].speaker) throw new Error(`Agamemnon: part ${next + 1}: expected ${PARTS[next].speaker} to be speaking, found ${speaker}`);
        carried = speaker;
      }
      next++;
      newPart();
      speaker = null;
    }
    let m;
    // The direction that sets the scene: an italic paragraph at the head.
    if (i === 0) {
      let text = t;
      while (lines[i + 1].trim() !== '') text += ` ${lines[++i].trim()}`;
      if (!/^_[^_]+_$/.test(text)) throw new Error('Agamemnon: opening direction not understood');
      push({ k: 'd', text: plain(text) });
      continue;
    }
    // A direction in square brackets (the closing bracket is often not
    // printed); it may run over several lines.
    if (t.startsWith('[_')) {
      let text = t;
      while ((text.match(/_/g) || []).length % 2 === 1) {
        const more = lines[++i].trim();
        if (more === '') throw new Error(`Agamemnon: direction not closed: ${text}`);
        text += ` ${more}`;
      }
      if (/_.*_.*_/.test(text)) throw new Error(`Agamemnon: direction not understood: ${text}`);
      verse = null;
      push({ k: 'd', text: plain(text.replace(/^\[/, '').replace(/\]$/, '')) });
      if (carried) say(carried);
      continue;
    }
    if (/[\[\]]/.test(t)) throw new Error(`Agamemnon: bracket not understood: ${t}`);
    // An entrance printed on one line with the name of the person who then speaks.
    if ((m = /^_(Enter|Re-enter)_ ([A-Z]+)$/.exec(t))) {
      if (!SPEAKERS.has(m[2])) throw new Error(`Agamemnon: unknown speaker: ${t}`);
      verse = null;
      push({ k: 'd', text: `${m[1]} ${m[2]}` });
      say(m[2]);
      continue;
    }
    if (breakHere) throw new Error(`Agamemnon: part ${next} does not begin with a direction: ${t}`);
    if (t === '_A Watchman_') { say('A Watchman'); continue; }
    if (/^[A-Z][A-Z ]+$/.test(t)) {
      if (!SPEAKERS.has(t)) throw new Error(`Agamemnon: line in capitals not understood: ${t}`);
      say(t);
      continue;
    }
    if (!speaker) throw new Error(`Agamemnon: verse with no speaker: ${t}`);
    const line = plain(t);
    if (!/^[^A-Za-z]*[A-Z]/.test(line)) throw new Error(`Agamemnon: verse line does not begin with a capital: ${line}`);
    if (!verse) { verse = []; push({ k: 'v', lines: verse }); }
    verse.push(line);
  }

  if (parts.length !== PARTS.length) throw new Error(`Agamemnon: expected ${PARTS.length} parts, found ${parts.length}`);
  for (const p of parts) {
    if (p.blocks[0].k !== 'd') throw new Error(`Agamemnon: ${p.id} does not begin with a direction`);
    const firstV = p.blocks.findIndex((b) => b.k === 'v');
    const firstS = p.blocks.findIndex((b) => b.k === 's');
    if (firstS < 0 || firstS > firstV) throw new Error(`Agamemnon: ${p.id} has verse before any speaker`);
  }
  const lastBlock = parts[5].blocks[parts[5].blocks.length - 1];
  if (lastBlock.k !== 'd' || lastBlock.text !== 'Exeunt.') throw new Error('Agamemnon: the last block is not the Exeunt');
  // The persons who speak, as a check that nothing was missed: the Watchman
  // once, the two cries of Agamemnon, and the twelve Elders one by one.
  if (count['A Watchman'] !== 1 || count['VOICE OF AGAMEMNON'] !== 2 || count['ONE OF THE CHORUS'] !== 1 || count.ANOTHER !== 10 || count['LEADER OF THE CHORUS'] !== 1) {
    throw new Error(`Agamemnon: speakers are not as expected: ${JSON.stringify(count)}`);
  }
  return parts;
}

export function run() {
  return writeText('agamemnon', {
    author: 'Aeschylus',
    title: 'Agamemnon',
    translator: 'E. D. A. Morshead',
    year: 1881,
    verse: false,
    note: 'The play has no acts, so this site divides it into six parts and supplies the headings.',
    source: { name: 'Project Gutenberg, no. 8604', url: 'https://www.gutenberg.org/ebooks/8604' },
  }, build());
}
