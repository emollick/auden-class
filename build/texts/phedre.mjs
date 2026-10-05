// Racine, Phaedra (Phèdre), translated by Robert Bruce Boswell.
// Project Gutenberg no. 1977 (the text of the Harvard Classics reprint).
// One part per act; the scene headings are h blocks inside the act.
import { fetchText, gutenbergBody, writeText, roman } from '../lib/gutenberg.mjs';

const SPEAKERS = new Set(['THESEUS', 'PHAEDRA', 'HIPPOLYTUS', 'ARICIA', 'OENONE', 'THERAMENES', 'ISMENE', 'PANOPE']);
const CAST = new Set([...SPEAKERS, 'GUARDS']);
const SCENES = [5, 6, 6, 6, 7];

// ---- mending the source file -------------------------------------------
// Faults of the file, not of the book. Each is found by the beginning of a
// line and must be found exactly once.

// A verse line wrapped at the wrong word: the last word of the line belongs
// at the head of the next, which begins in lower case.
// [how the line begins, the number of words to carry over]
const CARRY = [['Not that, attracted merely by the eye,', 1]];
// Slips of the file. Three scans of the printed translation at the
// Internet Archive (Bohn's Standard Library, vol. 2, dramaticworksje02boswgoog;
// the Harvard Classics, vol. 26, which the file follows,
// harvardclassics26eliouoft and continentaldram02moligoog) read alike
// against it; so do two more scans of the Harvard Classics volume
// (continentaldram00schigoog, continentaldram00moligoog). Two of the slips
// are American spellings, each found once, where the file elsewhere and
// every scan spell in the English way.
// [how the line begins in the file, the file's reading, the printed reading].
const MISPRINTS = [
  ['Little did his behavior correspond', 'behavior', 'behaviour'],
  ['Defend your honor from', 'honor', 'honour'],
  ['I wore a step--dame', 'step--dame', 'step-dame'],
  ['Ne\'er sees you more set foot', 'sees', 'see'],
  ['Madame! What business had my son', 'Madame', 'Madam'],
  ['Drag\'d by the horses', 'Drag\'d', 'Dragg\'d'],
  ['He opens his dying eyes', 'opens', 'opes'],
  ['Madame, you\'ve triumph\'d', 'Madame', 'Madam'],
  ['Forgotten! but not yet', '! but', '! But'],
];
// Stops (. , ; : ! ?) where the file stands alone: the five scans were
// compared, and each of these was then read in the page images of
// harvardclassics26eliouoft. None of the five has the file's reading.
const POINTING = [
  ['From words so bitter?', 'break silence', 'break silence,'],
  ['Prepare yourself to see', 'side.', 'side'],
  ['Ah, yes for Theseus', 'Ah, yes for', 'Ah, yes, for'],
  ['To thee, to thee,', 'I appeal', 'I appeal;'],
  ['If erst I clear\'d', 'assassins', 'assassins,'],
  ['Till at mine utmost', 'is come', 'is come,'],
  ['I see the odious', 'coldness', 'coldness:'],
  ['That they will fail.', 'yours to mine', 'yours to mine.'],
  ['Lie buried, stands a', 'temple,', 'temple'],
  ['She thrusts them from', 'horror,', 'horror.'],
  ['He silent in his', 'his guards', 'his guards,'],
  ['Might only serve to', 'unhappy,', 'unhappy.'],
];
// Stops that dropped out of the Harvard Classics plates. The first printing
// (continentaldram00moligoog) and Bohn's edition have all five in the page
// images; a later printing from the same plates (continentaldram00schigoog
// in the images, continentaldram02moligoog in its text) has none of them,
// and the reset edition (harvardclassics26eliouoft, differently paged),
// which shares the loss of three, has only the second and the last. The
// first ends a sentence.
const LOST_STOPS = [
  ['Has been allow\'d to bear', 'grief alone', 'grief alone.'],
  ['Of foam, that shoreward', 'it breaks', 'it breaks,'],
  ['Reproach the gods, she', 'and falls', 'and falls,'],
  ['My punishment; for, were', 'less known', 'less known,'],
  ['She dies my lord', 'dies my', 'dies, my'],
];

function mend(lines) {
  const one = (begins, what) => {
    const at = [];
    lines.forEach((l, i) => { if (l.trim().startsWith(begins)) at.push(i); });
    if (at.length !== 1) throw new Error(`Phaedra: ${what}: "${begins}" found ${at.length} times`);
    return at[0];
  };
  for (const [begins, n] of CARRY) {
    const i = one(begins, 'line to mend');
    const words = lines[i].trim().split(' ');
    const tail = words.splice(words.length - n, n);
    if (words.join(' ') !== begins || !/^[a-z]/.test(lines[i + 1].trim())) throw new Error(`Phaedra: the lines at "${begins}" are not as expected`);
    lines[i] = words.join(' ');
    lines[i + 1] = `${tail.join(' ')} ${lines[i + 1].trim()}`;
  }
  for (const [begins, wrong, right] of [...MISPRINTS, ...POINTING, ...LOST_STOPS]) {
    const i = one(begins, 'misprint');
    if (lines[i].split(wrong).length !== 2) throw new Error(`Phaedra: misprint "${wrong}" is not once in its line`);
    lines[i] = lines[i].replace(wrong, right);
  }
  return lines;
}

export function build() {
  const body = gutenbergBody(fetchText('pg1977_phaedra_boswell.txt', 'https://www.gutenberg.org/cache/epub/1977/pg1977.txt'));
  const first = body.findIndex((l) => l.trim() === 'ACT I');
  if (first < 0) throw new Error('Phaedra: ACT I not found');
  const sceneLine = body.slice(0, first).filter((l) => /^The scene is laid at /.test(l));
  if (sceneLine.length !== 1) throw new Error('Phaedra: the line that sets the scene was not found');
  let last = body.length;
  while (last > first && body[last - 1].trim() === '') last--;
  const lines = mend(body.slice(first, last).map((l) => l.replace(/\s+$/, '')));

  const parts = [];
  let part = null;
  let verse = null; // the lines of the speech being gathered
  let speaker = null; // the speaker of the speech being gathered
  let sceneCast = null; // the persons named under the scene heading
  let sceneNo = 0;
  let afterHeading = false;
  const closeVerse = () => { verse = null; };
  const push = (b) => { part.blocks.push(b); };

  for (const raw of lines) {
    const t = raw.trim();
    if (t === '') { closeVerse(); continue; }
    if (/[_\[\]=*{}]/.test(t) || /\d/.test(t)) throw new Error(`Phaedra: unexpected mark in line: ${t}`);
    let m;
    if ((m = /^ACT ([IVX]+)$/.exec(t))) {
      const n = roman(m[1]);
      if (n !== parts.length + 1) throw new Error(`Phaedra: act ${n} out of order`);
      if (part && sceneNo !== SCENES[parts.length - 1]) throw new Error(`Phaedra: act ${parts.length} has ${sceneNo} scenes, expected ${SCENES[parts.length - 1]}`);
      part = { id: `act-${n}`, label: `Act ${n}`, blocks: [] };
      parts.push(part);
      if (n === 1) push({ k: 'd', text: sceneLine[0].trim() });
      sceneNo = 0; speaker = null; sceneCast = null; closeVerse();
      continue;
    }
    if (!part) throw new Error(`Phaedra: text before the first act: ${t}`);
    if ((m = /^(?:SCENE|Scene) ([IVX]+)$/.exec(t))) {
      const n = roman(m[1]);
      if (n !== sceneNo + 1) throw new Error(`Phaedra: ${part.label}, scene ${n} out of order`);
      sceneNo = n; speaker = null; sceneCast = null; closeVerse();
      push({ k: 'h', text: `Scene ${n}`, level: 3 });
      afterHeading = true;
      continue;
    }
    // The persons of the scene, printed under its heading.
    if (afterHeading && /^[A-Z]+(, [A-Z]+)+$/.test(t)) {
      const names = t.split(', ');
      for (const n of names) if (!CAST.has(n)) throw new Error(`Phaedra: unknown person in scene list: ${n}`);
      sceneCast = new Set(names);
      push({ k: 'd', text: t });
      afterHeading = false;
      continue;
    }
    afterHeading = false;
    // A speaker, sometimes with a direction in parentheses after the name.
    if ((m = /^([A-Z]+)(?: \(([^()]+)\))?$/.exec(t)) && SPEAKERS.has(m[1])) {
      if (!sceneNo) throw new Error(`Phaedra: speaker before a scene heading: ${t}`);
      if (sceneCast && !sceneCast.has(m[1])) throw new Error(`Phaedra: ${part.label}, scene ${sceneNo}: ${m[1]} speaks but is not in the scene`);
      speaker = m[1];
      closeVerse();
      push({ k: 's', text: m[1] });
      if (m[2]) push({ k: 'd', text: m[2] });
      continue;
    }
    if (/^[A-Z ,()]+$/.test(t) && /[A-Z]{3}/.test(t)) throw new Error(`Phaedra: line in capitals not understood: ${t}`);
    // Everything else is a line of verse in the current speech.
    if (!speaker) throw new Error(`Phaedra: verse with no speaker: ${t}`);
    if (!/^["'(]*[A-Z]/.test(t)) throw new Error(`Phaedra: verse line does not begin with a capital: ${t}`);
    if (!verse) { verse = []; push({ k: 'v', lines: verse }); }
    verse.push(t.replace(/ {2,}/g, ' '));
  }
  if (sceneNo !== SCENES[parts.length - 1]) throw new Error(`Phaedra: act ${parts.length} has ${sceneNo} scenes, expected ${SCENES[parts.length - 1]}`);
  if (parts.length !== 5) throw new Error(`Phaedra: expected 5 acts, found ${parts.length}`);
  const scenes = parts.map((p) => p.blocks.filter((b) => b.k === 'h').length);
  if (scenes.join() !== SCENES.join()) throw new Error(`Phaedra: expected scenes ${SCENES.join()}, found ${scenes.join()}`);
  // Every speech must have its speaker: a v block follows an s block, a
  // direction under the speaker's name, or (after a break in a speech)
  // another v block.
  for (const p of parts) {
    p.blocks.forEach((b, i) => {
      if (b.k !== 'v') return;
      let j = i - 1;
      while (j >= 0 && (p.blocks[j].k === 'v' || (p.blocks[j].k === 'd' && p.blocks[j - 1]?.k === 's'))) j--;
      if (j < 0 || p.blocks[j].k !== 's') throw new Error(`Phaedra: ${p.id} block ${i} has no speaker`);
    });
  }
  return parts;
}

export function run() {
  return writeText('phedre', {
    author: 'Jean Racine',
    title: 'Phaedra',
    translator: 'Robert Bruce Boswell',
    year: 1890, // the collected Racine in Bohn's Standard Library; the source file gives no date
    verse: false,
    source: { name: 'Project Gutenberg, no. 1977', url: 'https://www.gutenberg.org/ebooks/1977' },
  }, build());
}
