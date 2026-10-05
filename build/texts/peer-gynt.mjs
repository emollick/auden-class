// Ibsen, Peer Gynt, translated by William and Charles Archer (1892).
// Project Gutenberg no. 66239: The Collected Works of Henrik Ibsen, vol. 4
// (Heinemann, 1907), which holds only this play, with William Archer's
// introduction before it, his footnotes after each act and an appendix
// after it. Only the play is taken. One part per scene.
import { fetchText, gutenbergBody, writeText } from '../lib/gutenberg.mjs';

const ORDINALS = ['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH', 'SEVENTH', 'EIGHTH', 'NINTH', 'TENTH', 'ELEVENTH', 'TWELFTH', 'THIRTEENTH'];
const SCENES = [3, 8, 4, 13, 10];

const CAPS = 'A-ZÆØÅÄÖÜË';
const isName = (t) => new RegExp(`^[${CAPS}][${CAPS}’' .\\-]*$`).test(t) && new RegExp(`[${CAPS}]{2}`).test(t);
const underscores = (s) => (s.match(/_/g) || []).length;
const plain = (s) => s.replace(/_/g, '').replace(/\s+/g, ' ').trim();

// The marks of the translators' footnotes: [22]. One is printed with two
// opening brackets.
let marks = 0;
const unmark = (s) => s.replace(/\[+\d+\]/g, () => { marks++; return ''; });

// ---- mending the source file -------------------------------------------
// Faults of the file, not of the book: each was found by comparing the file
// word for word with scans of the printed translation at the Internet
// Archive (New York: Scribner, 1907, peergyntadramat02ibsegoog, which is
// this edition; London: Walter Scott, 1892, peergyntdramatic00ibse) and is
// put right as both print it. Each is found by the beginning of a line and
// must be found exactly once.

// A verse line that has lost its first word, or the first letter of it:
// [how the line begins in the file, what is put before it].
const RESTORE = [
  ['as bound it around my head!', 'H'],
  ['and accursed stuff!', 'Lies '],
  ['but still and serve as manure.', 'Lie '],
];
// A wrong word: [how the line begins in the file, the file's reading, the printed reading].
// The third is a misprint of the 1907 book itself, which the file keeps
// and its transcriber marks "sic"; the edition of 1892 has the right word.
const MISPRINTS = [
  ['Though fate to the find may be never so biting', ' find ', ' end '],
  ['[_Clings to her end hides his face', ' end ', ' and '],
  ['Since though art so', 'though art', 'thou art'],
];
// ---- stops and hyphens ---------------------------------------------------
// The book of 1907 was printed from plates in which many exclamation marks
// at the ends of lines, and some other stops and hyphens, printed badly or
// not at all, and worse in later printings. The Gutenberg transcriber
// supplied about thirty of the lost stops by conjecture (his note lists
// them), read others from what was left of them, and left some lines with
// no stop. The lists below give each of these places as the translators
// printed it: every reading was checked in the page images of the Scribner
// scan and of the first edition (1892), whose lines are the same here, and
// against two Heinemann printings (collectedworkso04ibseuoft,
// ibsen04ibseuoft). Nothing is put in that is not in print.

// Stops that the file has wrong: an exclamation mark of which only the dot
// printed (so that the file has a full stop), a stop that the transcriber
// supplied where the first edition has another, and a few plain slips.
const POINTING = [
  ['Ah! Indeed.', 'Indeed.', 'Indeed!'],
  ['Would the black earth', 'sleeping.', 'sleeping!'],
  ['Something—something really grand.', 'grand.', 'grand!'],
  ['Who knows what may', 'one?', 'one!'],
  ['Oh, let them chatter.', 'chatter.', 'chatter!'],
  ['Up with you, Peer,', 'my lad.', 'my lad!'],
  ['With the bride.', 'bride.', 'bride!'],
  ['Heaven! I think his', 'going.', 'going!'],
  ['Troll-pack! To-night would you sleep in our arms!', 'arms!', 'arms?'],
  ['But oh, Mother Åse,', 'a sin.', 'a sin!'],
  ['God help me in', 'mercy;', 'mercy!'],
  ['Yes, that you are', 'my lad!', 'my lad;'],
  ['Those noble-trolls.', 'noble-trolls.', 'noble-trolls!'],
  ['Have brought me tidings', 'importance——.', 'importance——!'],
  ['Than, my life over', 'Than, my', 'Than my'],
  ['What would I? Play', 'dove.', 'dove!'],
  ['Where can rescue be', 'found?', 'found!'],
  ['He lived and he', 'pen.', 'pen!'],
  ['I’ll be damned if I do.', 'I do.', 'I do!'],
  ['What the devil, if', 'ducking.', 'ducking!'],
  ['And you carry on', 'quicker.', 'quicker!'],
  ['With the switch from', 'cupboard.', 'cupboard!'],
  ['A song from braying', 'precentor-mouths:', 'precentor-mouths;'],
  ['Set my house in', 'Away.', 'Away!'],
  ['It were too small,', 'my sins.', 'my sins!'],
  ['Well, to the third', 'then——.', 'then——!'],
  ['When, behold! the brute', 'wildly.', 'wildly,'],
  ['Spare your pains,', 'pains,', 'pains.'],
  ['Fought the other day', 'Lundë;', 'Lundë,'],
  ['Quick: lower the stern', 'Quick:', 'Quick!'],
  ['Hanged! Ay, ay!', 'Hanged!', 'Hanged?'],
];
// Lines that end a sentence with no stop at all in the file: the stop is
// given as the first edition prints it (four of them are also plain in the
// Scribner scan).
const LOST_STOPS = [
  ['Oh, hold your tongue', 'your tongue', 'your tongue!'],
  ['Keep your temper, Peer', 'temper, Peer', 'temper, Peer!'],
  ['So quickly! Who could', 'foreseen', 'foreseen!'],
  ['Oh, mercy, how hollow', 'rumbling', 'rumbling!'],
  ['I’ve slaved much too', 'my cash', 'my cash!'],
  ['Think of my little', 'at home', 'at home!'],
  ['Hu, you’ve upset me', 'upset me', 'upset me!'],
  ['So that’s it, Peer;', 'to harbour', 'to harbour!'],
  ['He hasn’t got over', 'spree yet', 'spree yet.'],
  ['Why see now, the', 'old pussy', 'old pussy;'],
  ['It won’t be much', 'be much', 'be much.'],
  ['Sea’s running high as', 'as houses', 'as houses.'],
  ['You forget that at', 'storehouse door', 'storehouse door.'],
  ['Patience; I’ll be back', 'ere long', 'ere long.'],
  ['Fill the trump of', 'with their', 'with their:'],
  ['MR COTTON.', 'MR COTTON', 'MR. COTTON'], // a speaker's name, so printed 17 times in the file
];
// Hyphens that did not print in the transcriber's copy (the Scribner scan
// and the first edition have them), and one that the file has where the
// book has none (the tail of an italic f).
const HYPHENS = [
  ['Salt strewn is the', 'Salt strewn', 'Salt-strewn'],
  ['Soon, God help me,', 'heaven high.', 'heaven-high!'],
  ['H’m!—Here’s a sheep path', 'sheep path', 'sheep-path'],
  ['In the key hole.', 'key hole', 'key-hole'],
  ['[_Hurries off-along the wood path', 'off-along', 'off along'],
  ['THE GREEN CLAD ONE.', 'GREEN CLAD', 'GREEN-CLAD'], // a speaker's name: so printed 22 times in the file
];
// A compound that the file breaks at the end of a line without its hyphen:
// [how the line begins, its last word, the word that begins the next line].
const BROKEN_COMPOUND = [['_A hill-side seamed by the dry bed of a torrent.', 'mill', 'house']];
// A verse line that the file has broken in two: [how it begins, its tail on the next line].
const TAIL = [['Their soul has no wings and their deeds no', 'weight;——']];
// The only verse line that rightly begins in lower case, after a dash: it
// finishes a sentence broken off four lines before.
const LOWER_OK = new Set(['——for a gale to-night.']);

function mend(lines) {
  const one = (begins, what) => {
    const at = [];
    lines.forEach((l, i) => { if (l.trim().startsWith(begins)) at.push(i); });
    if (at.length !== 1) throw new Error(`Peer Gynt: ${what}: "${begins}" found ${at.length} times`);
    return at[0];
  };
  for (const [begins, word] of RESTORE) {
    const i = one(begins, 'line to restore');
    lines[i] = lines[i].replace(/^(\s*)/, `$1${word}`);
  }
  for (const [begins, wrong, right] of [...MISPRINTS, ...POINTING, ...LOST_STOPS, ...HYPHENS]) {
    const i = one(begins, 'misprint');
    if (lines[i].split(wrong).length !== 2) throw new Error(`Peer Gynt: misprint "${wrong}" is not once in the line "${begins}"`);
    if (!right.includes(wrong) && !wrong.includes(right) && wrong.replace(/[^A-Za-zÀ-ÿ]/g, '') !== right.replace(/[^A-Za-zÀ-ÿ]/g, '') && !MISPRINTS.some((m) => m[1] === wrong)) throw new Error(`Peer Gynt: "${wrong}" to "${right}" changes more than a stop`);
    lines[i] = lines[i].replace(wrong, right);
  }
  for (const [begins, last, next] of BROKEN_COMPOUND) {
    const i = one(begins, 'broken compound');
    if (!lines[i].endsWith(` ${last}`) || !lines[i + 1].trim().startsWith(`${next} `)) throw new Error(`Peer Gynt: the compound at "${begins}" is not as expected`);
    lines[i] = `${lines[i]}-${next}`;
    lines[i + 1] = lines[i + 1].replace(`${next} `, '');
  }
  for (const [begins, tail] of TAIL) {
    const i = one(begins, 'broken line');
    if (lines[i + 1].trim() !== tail) throw new Error(`Peer Gynt: the tail of "${begins}" is not as expected`);
    lines[i] = `${lines[i]} ${tail}`;
    lines.splice(i + 1, 1);
  }
  return lines;
}

export function build() {
  const body = gutenbergBody(fetchText('pg66239_ibsen_peer_gynt.txt', 'https://www.gutenberg.org/cache/epub/66239/pg66239.txt'));
  const only = (test, what) => {
    const at = body.map((l, i) => (test(l.trim()) ? i : -1)).filter((i) => i >= 0);
    if (at.length !== 1) throw new Error(`Peer Gynt: ${what} found ${at.length} times`);
    return at[0];
  };
  const start = only((t) => t === 'ACT FIRST.', '"ACT FIRST."');
  const end = only((t) => t === 'THE END.', '"THE END."');
  if (end < start) throw new Error('Peer Gynt: the end comes before the beginning');

  // Ibsen's note on the time and place of the action stands under the list
  // of characters. It is kept, at the head of the first scene, without the
  // two glosses the translators put into it in square brackets.
  const noteAt = only((t) => t.startsWith('(_The action, which opens'), 'the note on the action');
  if (noteAt > start) throw new Error('Peer Gynt: the note on the action is not before the play');
  let note = body[noteAt].trim();
  for (let i = noteAt + 1; !/_\)$/.test(note); i++) {
    if (body[i].trim() === '') throw new Error('Peer Gynt: the note on the action is not closed');
    note += ` ${body[i].trim()}`;
  }
  const glosses = [' [that is the nineteenth]', ' [1867]'];
  for (const g of glosses) {
    if (note.split(g).length !== 2) throw new Error(`Peer Gynt: gloss "${g}" not found once in the note on the action`);
    note = note.replace(g, '');
  }
  note = plain(note).replace(/^\(/, '').replace(/\)$/, '');
  if (/[\[\]()\d]/.test(note)) throw new Error(`Peer Gynt: the note on the action is not as expected: ${note}`);

  // The play, without the footnotes that follow each act. A block of
  // footnotes is fenced by three rules: one before the word "Footnotes:",
  // one after it, one at the end.
  const lines = [];
  let notes = 0;
  marks = 0;
  for (let i = start; i < end; i++) {
    if (body[i].trim() === '-----') {
      let j = i + 1;
      while (body[j].trim() === '') j++;
      if (body[j].trim() !== 'Footnotes:') throw new Error(`Peer Gynt: a rule that does not begin footnotes (line ${i})`);
      let rules = 1;
      while (rules < 3) {
        i++;
        if (i >= end) throw new Error('Peer Gynt: footnotes not closed');
        if (body[i].trim() === '-----') rules++;
        else if (/^(ACT|SCENE) /.test(body[i].trim())) throw new Error('Peer Gynt: a heading inside the footnotes');
      }
      notes++;
      lines.push('');
      continue;
    }
    lines.push(unmark(body[i]).replace(/\s+$/, ''));
  }
  if (notes !== 5) throw new Error(`Peer Gynt: expected 5 blocks of footnotes (one an act), found ${notes}`);
  mend(lines);

  const parts = [];
  let part = null;
  let verse = null;
  let speaker = null;
  let act = 0;
  let scene = 0;
  let inline = 0;
  const scenesFound = [];
  const speakers = new Map();
  const push = (b) => { part.blocks.push(b); verse = null; };
  const direction = (raw) => {
    const text = plain(raw).replace(/^\[/, '').replace(/\]$/, '').trim();
    if (!text || /[\[\]]/.test(text)) throw new Error(`Peer Gynt: direction not understood: ${raw}`);
    push({ k: 'd', text });
  };
  const say = (raw) => {
    if (!speaker) throw new Error(`Peer Gynt: act ${act}, scene ${scene}: verse with no speaker: ${raw}`);
    if (/[\[\]{}=*]/.test(raw)) throw new Error(`Peer Gynt: unexpected mark in a line: ${raw}`);
    const text = plain(raw);
    if (!text) throw new Error(`Peer Gynt: empty line of verse from: ${raw}`);
    if (!verse) { verse = { k: 'v', lines: [] }; part.blocks.push(verse); }
    verse.lines.push(text);
  };

  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t === '') { verse = null; continue; }
    const indent = lines[i].length - lines[i].trimStart().length;
    const newParagraph = i === 0 || lines[i - 1].trim() === '';
    let m;

    if ((m = /^ACT ([A-Z]+)\.?$/.exec(t))) {
      const n = ORDINALS.indexOf(m[1]) + 1;
      if (n !== act + 1) throw new Error(`Peer Gynt: ${t} follows act ${act}`);
      if (act) scenesFound.push(scene);
      act = n; scene = 0; part = null; speaker = null;
      continue;
    }
    if ((m = /^SCENE ([A-Z]+)\.?$/.exec(t))) {
      const n = ORDINALS.indexOf(m[1]) + 1;
      if (!act || n !== scene + 1) throw new Error(`Peer Gynt: act ${act}: ${t} follows scene ${scene}`);
      scene = n;
      part = { id: `a${act}s${scene}`, label: `Act ${act}, Scene ${scene}`, group: `Act ${act}`, blocks: [] };
      parts.push(part);
      verse = null; speaker = null;
      if (act === 1 && scene === 1) push({ k: 'd', text: note });
      continue;
    }
    if (!part) throw new Error(`Peer Gynt: text outside a scene: ${t}`);

    // A direction in square brackets on its own line or lines. The closing
    // bracket is often not printed; once the opening one is missing.
    if (/^(\[_|_\[)/.test(t) || /^_[^_]*_\]$/.test(t)) {
      let text = t;
      while (underscores(text) % 2 === 1) {
        const more = lines[++i].trim();
        if (more === '') throw new Error(`Peer Gynt: direction not closed: ${text}`);
        text += ` ${more}`;
      }
      if (underscores(text) !== 2) throw new Error(`Peer Gynt: direction not understood: ${text}`);
      direction(text);
      continue;
    }

    // A direction printed as a paragraph in italics: the scene, an entrance.
    if (newParagraph && /^_[^_\[]/.test(t)) {
      let j = i;
      let text = t;
      while (lines[j + 1] !== undefined && lines[j + 1].trim() !== '') text += ` ${lines[++j].trim()}`;
      if (new RegExp(`^_[${CAPS}]`).test(text) && /\._$/.test(text) && underscores(text) % 2 === 0 && !/[\[\]]/.test(text)) {
        direction(text);
        speaker = null;
        i = j;
        continue;
      }
    }

    // A speaker: a name in capitals, centred.
    if (indent >= 20 && isName(t.replace(/\.$/, ''))) {
      speaker = t.replace(/\.$/, '');
      speakers.set(speaker, (speakers.get(speaker) || 0) + 1);
      push({ k: 's', text: speaker });
      continue;
    }
    if (isName(t.replace(/\.$/, ''))) throw new Error(`Peer Gynt: line in capitals not understood: ${t}`);

    // A line of verse; twice a direction stands in the middle of the line.
    if ((m = /^(.*\S)\s*\[_([^_\[\]]+)_\]\s*(\S.*)$/.exec(t))) {
      say(m[1]);
      direction(m[2]);
      say(m[3]);
      inline++;
      continue;
    }
    say(t);
  }
  scenesFound.push(scene);

  // ---- checks --------------------------------------------------------------
  if (scenesFound.length !== 5) throw new Error(`Peer Gynt: expected 5 acts, found ${scenesFound.length}`);
  if (scenesFound.join() !== SCENES.join()) throw new Error(`Peer Gynt: expected scenes ${SCENES.join()} in the five acts, found ${scenesFound.join()}`);
  if (inline !== 2) throw new Error(`Peer Gynt: expected 2 directions in the middle of a line, found ${inline}`);
  const faults = [];
  for (const p of parts) {
    if (p.blocks[0].k !== 'd') faults.push(`${p.id}: does not begin with a direction`);
    let open = null;
    let any = false;
    p.blocks.forEach((b, i) => {
      if (b.k === 's') {
        if (open) faults.push(`${p.id} block ${i}: ${open} has no speech`);
        open = b.text; any = true;
      } else if (b.k === 'v') {
        if (!any) faults.push(`${p.id} block ${i}: verse before any speaker`);
        open = null;
        for (const l of b.lines) {
          if (/\d/.test(l)) faults.push(`${p.id} block ${i}: digit in a line: ${l}`);
          if (/^[^A-Za-zÆØÅ]*[a-zæøå]/.test(l) && !LOWER_OK.has(l)) faults.push(`${p.id} block ${i}: line begins in lower case: ${l}`);
        }
      }
    });
    if (open) faults.push(`${p.id}: ${open} has no speech at the end`);
  }
  if (faults.length) throw new Error(`Peer Gynt: ${faults.length} faults:\n  ${faults.join('\n  ')}`);
  return { parts, speakers, marks };
}

export function run() {
  return writeText('peer-gynt', {
    author: 'Henrik Ibsen',
    title: 'Peer Gynt',
    translator: 'William and Charles Archer',
    year: 1892,
    note: 'The translation was first published in 1892. The text printed here is the one the translators revised for the collected edition of 1907.',
    verse: false,
    source: { name: 'Project Gutenberg, no. 66239', url: 'https://www.gutenberg.org/ebooks/66239' },
  }, build().parts);
}
