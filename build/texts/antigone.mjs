// Sophocles, Antigone, translated by F. Storr (Loeb Classical Library, 1912).
// Project Gutenberg no. 31 (Storr's three Theban plays); only the Antigone
// is taken. Greek plays have no acts: the play is cut into five parts, each
// an episode with the choral ode that closes it.
import { fetchText, gutenbergBody, writeText } from '../lib/gutenberg.mjs';

const NAMES = ['ANTIGONE', 'ISMENE', 'CHORUS', 'CREON', 'GUARD', 'HAEMON', 'TEIRESIAS', 'MESSENGER', 'SECOND MESSENGER', 'EURYDICE'];
const SPEAKER = new RegExp(`^(${NAMES.join('|')})(?:\\.|| \\((to [A-Z]+)\\))$`);

// The first line of the play proper: the direction that sets the scene.
const OPENING = 'ANTIGONE and ISMENE before the Palace gates.';

// A new part begins at each of these entrances, in this order. Each comes
// straight after the Chorus has finished an ode and announced the entrance.
const PARTS = [
  { label: '1. Antigone and Ismene; the Elders of Thebes' },
  { at: '[Enter CREON]', label: '2. Creon’s edict; the Guard' },
  { at: '[Enter GUARD bringing ANTIGONE]', label: '3. Antigone before Creon' },
  { at: '[Enter HAEMON]', label: '4. Haemon; Antigone led to the tomb' },
  { at: '[Enter TEIRESIAS and BOY]', label: '5. Teiresias; the Messenger; Creon’s lament' },
];

// The source marks italics _so_, but in one passage it has put underscores
// for the spaces between the italic words as well. An underscore with a
// letter after it and no space before it stands for a space; the rest are
// dropped.
let innerUnderscores = 0;
function plain(s) {
  return s
    .replace(/(?<=\S)_(?=[A-Za-z])/g, () => { innerUnderscores++; return ' '; })
    .replace(/_/g, '')
    .replace(/ {2,}/g, ' ')
    .trim();
}

// ---- mending the source file -------------------------------------------
// The file has many wrong words. It was compared word for word with two
// scans of the printed book at the Internet Archive (Loeb Classical
// Library, Sophocles, vol. 1: the first printing of 1912,
// sophocleswitheng01soph, and a later one, sophoclesstor01sophuoft). Where
// both scans read alike against the file in a word, the printed reading is
// put back. The file's American spellings are not touched. Each line is
// found by its beginning and must be found exactly once:
// [how the line begins in the file, the file's reading, the printed reading].
const MISPRINTS = [
  ['I know ’twas so,', 'know', 'knew'],
  ['Sunbeam, of all that', 'dawn', 'dawned'],
  ['To earthy from earth', 'earthy', 'earth'],
  ['Here, there, great Area', 'Area', 'Ares'],
  ['Now let feast and', 'should', 'shout'],
  ['Elders, the gods have', 'one', 'once'],
  ['No! no! I have', 'have long', 'long have'],
  ['Passing the wildest flight', 'flight thought', 'flight of thought'],
  ['While each man kept', ' he ', ' his '],
  ['Does thou plead guilty', 'Does', 'Dost'],
  ['The wrath of Heaven.', 'knew', 'know'],
  ['Bring forth the older;', 'older', 'other'],
  ['Where they not gagged', 'Where', 'Were'],
  ['Surely, if good and', 'alive', 'alike'],
  ['Die then, and love', 'if thou', 'if love thou'],
  ['No woman shall be', 'be the master', 'be master'],
  ['Two plagues I nurtured', 'proved', 'proves'],
  ['Hope flits about never-wearying', 'about never', 'about on never'],
  ['Or her marriage-bed deceived,', 'Or', 'Of'],
  ['Learning may fixed decree', ' may ', ' my '],
  ['More precious than thy', 'goverance', 'governance'],
  ['To overrule his rulers,', 'such as one', 'such an one'],
  ['But small and great,', 'But', 'Both'],
  ['I warrant such a', 'such a one', 'such an one'],
  ['And yield to title', 'to title', 'no tittle'],
  ['To me, unless old', 'dulled wits', 'dulled my wits'],
  ['And deemed not thou', 'deemed', 'deem'],
  ['Vain fool to instruct', 'shall', 'shalt'],
  ['Chained upon Siphylus’ high', 'Siphylus', 'Sipylus'],
  ['And alien midst the', 'And', 'An'],
  ['Thou a father’s guild', 'guild', 'guilt'],
  ['Religion has her chains,', 'chains', 'claims'],
  ['Let rite be paid', 'rite ', 'rites '],
  ['The last of all,', 'more', 'most'],
  ['From with these hands,', 'From', 'For'],
  ['Why tidings, old Teiresias?', 'Why', 'What'],
  ['Find harborage, upon mine', 'Find', 'Finds'],
  ['Counsel’s most welcome if', 'if I', 'if it'],
  ['Like anchors at a', 'anchors', 'archers'],
  ['And yet thou say’st', 'prophesies', 'prophecies'],
  ['And all thy neighbor', 'leagues', 'leagued'],
  ['My liege, that man', 'that', 'the'],
  ['All hall to thee', 'hall', 'hail'],
  ['Or o’er the roaring', 'was', 'way'],
  ['We looked, and in', 'craven', 'cavern'],
  ['Does claim me too,', 'Does', 'Dost'],
  ['His past endure demand', 'His', 'Ills'],
  ['Whither to turn I', 'know now', 'know not'],
  ['And puff as some', 'light-footed', 'lightfooted'], // one word in the book
  ['Think of his mother-wife', 'ill sorted', 'ill-sorted'], // a hyphen in the book
];
// Stops (. , ; : ! ?) where both scans agree against the file. They are
// applied after the words above, so a line is found as those leave it.
const POINTING = [
  ['My brother, and, though', 'him, thine', 'him, thine.'],
  ['Done by a noose', 'to death', 'to death.'],
  ['God of Thebes, lead', 'round.', 'round,'],
  ['Let me premise a', 'myself?', 'myself.'],
  ['Many wonders there be,', 'man;', 'man:'],
  ['Were they not gagged', 'terror,', 'terror.'],
  ['Fear not; thou livest,', 'long ago', 'long ago,'],
  ['Appoints must be obeyed', 'Appoints must', 'Appoints, must'],
  ['A mother with the', 'borne,', 'borne;'],
  ['Are guiltless as concerns', 'blood,', 'blood.'],
  ['Of the Eleusinian Queen', 'Eleusinian Queen', 'Eleusinian Queen,'],
  ['There broke a wail', 'household woe', 'household woe.'],
  ['Talk not of rights;', 'of Heaven', 'of Heaven.'],
  ['No worse ills than', 'to me.', 'to me!'],
  ['No! no! I long have', 'malcontents', 'malcontents,'],
  ['I shudder with affright', 'affright', 'affright.'],
  ['Well said, if in', 'is well', 'is well:'],
  ['The vengeance by a jealous', 'ta’en', 'ta’en,'],
];
// Words that the file has lost from the ode to Love (the eye of the copyist
// went from "folds" to "holds"): one line of the file is the beginning of
// one line of the book and the end of the next.
// [the line in the file, its beginning, the lost end of that line, the lost beginning of the next]
const LOST = [['Over the upland holds. Shall mortals', 'Over the upland ', 'folds thou roam’st, and the trackless sea.', 'Love the gods captive ']];
// A mark of the antistrophe that the file has lost (the book prints it
// beside the first line of the stanza, as it does the others):
// [how the stanza begins, the mark].
const LOST_MARK = [['Religion has her', '(Ant. 3)']];

function mend(lines) {
  const one = (begins, what) => {
    const at = [];
    lines.forEach((l, i) => { if (l.trim().startsWith(begins)) at.push(i); });
    if (at.length !== 1) throw new Error(`Antigone: ${what}: "${begins}" found ${at.length} times`);
    return at[0];
  };
  for (const [begins, wrong, right] of [...MISPRINTS, ...POINTING]) {
    const i = one(begins, 'misprint');
    if (lines[i].split(wrong).length !== 2) throw new Error(`Antigone: misprint "${wrong}" is not once in the line "${begins}"`);
    lines[i] = lines[i].replace(wrong, right);
  }
  for (const [begins, head, lost, next] of LOST) {
    const i = one(begins, 'line with lost words');
    const t = lines[i].trim();
    if (!t.startsWith(head)) throw new Error(`Antigone: the line "${begins}" is not as expected`);
    lines.splice(i, 1, `${head}${lost}`, `${next}${t.slice(head.length)}`);
  }
  for (const [begins, mark] of LOST_MARK) {
    const i = one(begins, 'stanza with a lost mark');
    let j = i - 1;
    while (lines[j].trim() === '') j--;
    if (j !== i - 1 || !/^CHORUS\.?$/.test(lines[j].trim())) throw new Error(`Antigone: the stanza "${begins}" is not where it was expected`);
    lines.splice(i, 0, mark);
  }
  return lines;
}

export function build() {
  const body = gutenbergBody(fetchText('pg31_sophocles_storr.txt', 'https://www.gutenberg.org/cache/epub/31/pg31.txt'));
  const starts = body.map((l, i) => (l.trim() === OPENING ? i : -1)).filter((i) => i >= 0);
  if (starts.length !== 1) throw new Error(`Antigone: opening direction found ${starts.length} times`);
  const start = starts[0];
  // The title of the play stands just above; the Argument and the list of
  // persons stand above that and are not taken.
  if (!body.slice(start - 4, start).some((l) => l.trim() === 'ANTIGONE')) throw new Error('Antigone: title not found above the opening direction');
  let end = body.length;
  while (end > start && body[end - 1].trim() === '') end--;
  const lines = mend(body.slice(start, end));

  innerUnderscores = 0;
  const parts = [];
  let part = null;
  let verse = null;
  let speaker = null;
  let next = 1; // index in PARTS of the next break
  const speeches = [];
  const newPart = (n) => {
    part = { id: `p${n}`, label: PARTS[n - 1].label, blocks: [] };
    parts.push(part);
    verse = null;
  };
  const push = (b) => { part.blocks.push(b); };

  newPart(1);
  lines.forEach((raw, i) => {
    const t = raw.trim();
    if (i === 0) { push({ k: 'd', text: t }); return; }
    if (t === '') { verse = null; return; }
    if (/[=*{}\\]/.test(t)) throw new Error(`Antigone: unexpected mark: ${t}`);
    let m;
    // Entrances and exits, in square brackets on their own line.
    if ((m = /^\[([^\[\]]+)\]$/.exec(t))) {
      if (next < PARTS.length && t === PARTS[next].at) {
        if (!verse) throw new Error(`Antigone: part ${next + 1} would not begin straight after a speech`);
        newPart(++next);
        speaker = null;
      }
      verse = null;
      push({ k: 'd', text: plain(m[1]) });
      return;
    }
    if (/[\[\]]/.test(t)) throw new Error(`Antigone: bracket not understood: ${t}`);
    // The marks of strophe and antistrophe in the odes.
    if ((m = /^\(((?:Str|Ant)\.?(?: \d)?)\)(\.?)$/.exec(t))) {
      if (!speaker) throw new Error(`Antigone: strophe mark with no speaker: ${t}`);
      verse = null;
      const mark = m[1] + m[2];
      if (!/^(Str|Ant)\.( \d)?$/.test(mark)) throw new Error(`Antigone: strophe mark not understood: ${t}`);
      push({ k: 'd', text: mark });
      return;
    }
    // A direction inside a speech: the speaker turns to someone else.
    if ((m = /^\((To [A-Z]+)\)$/.exec(t))) {
      if (!speaker) throw new Error(`Antigone: direction with no speaker: ${t}`);
      verse = null;
      push({ k: 'd', text: m[1] });
      return;
    }
    if ((m = SPEAKER.exec(t))) {
      speaker = m[1];
      verse = null;
      const s = { k: 's', text: speaker };
      push(s);
      speeches.push(s);
      if (m[2]) push({ k: 'd', text: m[2] });
      return;
    }
    if (/^[A-Z .()]+$/.test(t) && /[A-Z]{3}/.test(t)) throw new Error(`Antigone: line in capitals not understood: ${t}`);
    if (/\d/.test(t)) throw new Error(`Antigone: digit in a line of verse: ${t}`);
    if (!speaker) throw new Error(`Antigone: verse with no speaker: ${t}`);
    const line = plain(t);
    if (!/^[(’‘“"']*[A-Z]/.test(line)) throw new Error(`Antigone: verse line does not begin with a capital: ${line}`);
    if (!verse) { verse = []; push({ k: 'v', lines: verse }); }
    verse.push(line);
  });

  if (parts.length !== PARTS.length) throw new Error(`Antigone: expected ${PARTS.length} parts, found ${parts.length}`);
  if (innerUnderscores !== 9) throw new Error(`Antigone: expected 9 underscores standing for spaces, found ${innerUnderscores}`);

  // The source gives one line of Creon's to the Chorus: three speeches
  // running are headed CHORUS, and the middle one (a single line, a question
  // put to the Chorus, which the Chorus then answers) is Creon's, as in the
  // Greek (line 1099) and in the printed book (both scans). The name is put
  // right here.
  const wrong = [];
  speeches.forEach((s, i) => {
    if (s.text === 'CHORUS' && speeches[i - 1]?.text === 'CHORUS' && speeches[i + 1]?.text === 'CHORUS') wrong.push(s);
  });
  if (wrong.length !== 1) throw new Error(`Antigone: expected one CHORUS between two others, found ${wrong.length}`);
  const p5 = parts[4].blocks;
  const at = p5.indexOf(wrong[0]);
  if (at < 0 || p5[at + 1].k !== 'v' || p5[at + 1].lines.length !== 1 || !/^What should I do\./.test(p5[at + 1].lines[0])) {
    throw new Error('Antigone: the misattributed line was not where it was expected');
  }
  wrong[0].text = 'CREON';
  for (let i = 1; i < speeches.length; i++) {
    if (speeches[i].text === speeches[i - 1].text) throw new Error(`Antigone: ${speeches[i].text} has two speeches running`);
  }

  for (const p of parts) {
    if (p.blocks[0].k !== 'd') throw new Error(`Antigone: ${p.id} does not begin with a direction`);
    const firstV = p.blocks.findIndex((b) => b.k === 'v');
    const firstS = p.blocks.findIndex((b) => b.k === 's');
    if (firstS < 0 || firstS > firstV) throw new Error(`Antigone: ${p.id} has verse before any speaker`);
    if (p.blocks[p.blocks.length - 1].k !== 'v') throw new Error(`Antigone: ${p.id} does not end with verse`);
  }
  const count = (name) => speeches.filter((s) => s.text === name).length;
  if (count('EURYDICE') !== 1 || count('TEIRESIAS') < 5 || count('ISMENE') < 10) throw new Error('Antigone: speakers are not as expected');
  return parts;
}

export function run() {
  return writeText('antigone', {
    author: 'Sophocles',
    title: 'Antigone',
    translator: 'F. Storr',
    year: 1912,
    verse: false,
    note: 'The play has no acts, so this site divides it into five parts and supplies the headings.',
    source: { name: 'Project Gutenberg, no. 31', url: 'https://www.gutenberg.org/ebooks/31' },
  }, build());
}
