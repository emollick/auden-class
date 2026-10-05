// Wagner, The Twilight of the Gods, translated by Margaret Armour
// (London: William Heinemann; New York: Doubleday, Page & Co., 1911,
// with Arthur Rackham's illustrations). Project Gutenberg no. 49507,
// which holds Siegfried and The Twilight of the Gods; only the second is
// taken. The book divides it into a Prelude and three acts, with no
// scenes marked. Where the file departs from the book it transcribes, the
// book's reading is restored; every such place is listed below.
// See notes/gotterdammerung.md.

import { fetchText, gutenbergBody, writeText, clean, countWords, blockWords } from '../lib/gutenberg.mjs';

const PARTS = {
  PRELUDE: { id: 'prelude', label: 'Prelude' },
  'THE FIRST ACT': { id: 'act-1', label: 'Act 1' },
  'THE SECOND ACT': { id: 'act-2', label: 'Act 2' },
  'THE THIRD ACT': { id: 'act-3', label: 'Act 3' },
};

// What stands between the title of the work and the Prelude: the list of
// persons and of scenes, and two ornaments. All of it is left out.
const FRONT = [
  'CHARACTERS', 'SIEGFRIED', 'GUNTHER', 'HAGEN', 'ALBERICH', 'BRÜNNHILDE', 'GUTRUNE', 'WALTRAUTE', 'THE THREE NORNS',
  'THE RHINE-MAIDENS', 'VASSALS', 'WOMEN', 'SCENES OF ACTION', "PRELUDE: ON THE VALKYRIES' ROCK",
  "ACT I. THE HALL OF GUNTHER'S DWELLING ON THE RHINE.", "THE VALKYRIES' ROCK", "ACT II. IN FRONT OF GUNTHER'S HALL",
  "ACT III. A WOODED REGION ON THE RHINE. GUNTHER'S HALL", '[Illustration]', '[Illustration]',
];

// The names over the speeches and how often each stands. The book prints
// them in black letter in the margin; the file gives them in capitals,
// with a small "and" between two names.
const SPEAKERS = {
  SIEGFRIED: 95, HAGEN: 94, 'BRÜNNHILDE': 55, GUNTHER: 53, GUTRUNE: 26, 'THE VASSALS': 17, WALTRAUTE: 10,
  'THE THREE RHINE-MAIDENS': 7, ALBERICH: 7, WOGLINDE: 6, WELLGUNDE: 6, 'THE SECOND NORN': 6, 'THE FIRST NORN': 5,
  FLOSSHILDE: 5, 'THE THIRD NORN': 4, 'VASSALS and WOMEN': 2, "WALTRAUTE'S VOICE": 1, "VASSALS' VOICES": 1,
  'THE VASSALS and WOMEN': 2, 'THE THREE NORNS': 1, 'THE THREE': 1, 'SIEGFRIED and GUNTHER': 1, "HAGEN'S VOICE": 1,
  'GUNTHER and VASSALS': 1, 'BRÜNNHILDE and GUNTHER': 1, BOTH: 1, 'ALL THREE': 1, 'A VASSAL': 1,
};
// Two names the file does not give in capitals throughout (the second
// once only): they are put like the rest.
const NAME_FORMS = { Hagen: ['HAGEN', 3], "WALTRAUTE'S voice": ["WALTRAUTE'S VOICE", 1] };

// Slips of the file, each checked against a scan of the 1911 book: a line
// that contains `from` (it must be found exactly once) is given `to`.
// The book prints the directions in an italic with the long s; six of
// the seven slips there are an f read for it, or an s put for an f.
const SLIPS = [
  // in the names
  ['GRUTUNE', 'GUTRUNE'],
  ['BRÜNNHILDE and HAGEN', 'BRÜNNHILDE and GUNTHER'],
  // in the stage directions
  ['while the oat was being', 'while the oath was being'],
  ['fits against one of the pillars', 'sits against one of the pillars'],
  ['who alone fits', 'who alone sits'],
  ['in a fitting posture', 'in a sitting posture'],
  ["off Siegfried's singer,", "off Siegfried's finger,"],
  ['alarmed by the fight', 'alarmed by the sight'],
  ['Gods and heroes fit', 'Gods and heroes sit'],
  ['more confidence._ #/', 'more confidence._'],
  // in the verse
  ['By giants up reared.', 'By giants upreared.'],
  ['Belike in his chase he will come,', 'Belike in his chase he will come'],
  ['Warding the hall from the foe:', 'Warding the hall from the foe;'],
  ["sake War-father's ban", "sake Warfather's ban"],
  ["Ha! dost thou know what 'twould mean", "Ha! dost thou know what 'twould mean?"],
  ['We come with our arms?', 'We come with our arms,'],
  ['Siegfried ... here? Gutrune....', 'Siegfried ... here? Gutrune ...?'],
  ['Light fades from mine eyes. ..', 'Light fades from mine eyes ...'],
  ['That when the childµ', 'That when the child'],
];

// On one page of the third act the file runs the lines of six short
// speeches together like prose. They are divided again as the book
// divides them: the opening words of each, and the number of words in
// each of its lines.
const RUN_TOGETHER = [
  ['It has been rumoured,', [5, 6, 5, 4]],
  ['I have not listened', [4, 5]],
  ['Drink, Gunther, drink!', [3, 5]],
  ['Thus mixed the wine', [6, 3, 6]],
  ['She speaks less plain', [6, 6]],
  ['Since I have heard', [6, 6]],
];

// One speech has no name over it in the book: Gutrune's, at the opening
// of the last scene, where the description of the scene has just said
// that she comes in. The name is supplied here so that the speech has its
// speaker; it is the one word in the text that the book does not print.
const UNNAMED = { after: 'It is night. The moonlight is mirrored in the Rhine.', name: 'GUTRUNE' };

// Two names that are right elsewhere but wrong in one place, each known by
// the words that follow it. Waltraute is named twice running in the first
// act, and the second speech is Brünnhilde's (so the book has it); and
// the last of the choruses of vassals and women in the second act has
// "The" before it in the book.
const MISNAMED = [
  { name: 'WALTRAUTE', opening: "For Brünnhild's sake", to: 'BRÜNNHILDE' },
  { name: 'VASSALS and WOMEN', opening: '[_Crowd together in violent indignation._', to: 'THE VASSALS and WOMEN' },
];

// At the end of the first act the book sets a long direction in the
// margin beside Siegfried's last speech; its last sentence runs on under
// the verse, below the direction that closes the act, and the file has
// taken it for the end of that one. It is put back where it belongs.
const MISPLACED = {
  closing: 'He follows Brünnhilde. The curtain falls.',
  sentence: 'In his natural voice.',
  belongsTo: 'Drives her on with a gesture of command.',
};

// What the work is expected to hold.
const EXPECT = {
  speeches: 411, // with a name in the file; one more has its name supplied
  directions: { alone: 223, besideName: 59 },
  illustrations: 20, // from the Prelude on; all dropped
  joinedAcrossIllustration: 5,
  turnovers: 1,
  stanzaBreaks: 9,
  verseLines: 2026,
};

export function build() {
  const body = gutenbergBody(fetchText('pg49507_siegfried_twilight.txt', 'https://www.gutenberg.org/cache/epub/49507/pg49507.txt'));
  const only = (line, from = 0) => {
    const at = [];
    for (let i = from; i < body.length; i++) if (body[i] === line) at.push(i);
    if (at.length !== 1) throw new Error(`gotterdammerung: ${JSON.stringify(line)} found ${at.length} times`);
    return at[0];
  };
  // The title page names the translator and the year.
  const title = body.slice(0, 40).map((l) => l.trim());
  for (const want of ['SIEGFRIED & THE TWILIGHT OF THE GODS', 'BY RICHARD WAGNER', 'TRANSLATED BY MARGARET ARMOUR', '1911']) {
    if (!title.includes(want)) throw new Error(`gotterdammerung: the title page lacks ${JSON.stringify(want)}`);
  }
  const start = only('THE TWILIGHT OF THE GODS');
  const prelude = only('PRELUDE', start);
  const front = body.slice(start + 1, prelude).map((l) => l.trim()).filter(Boolean);
  if (front.join('|') !== FRONT.join('|')) throw new Error('gotterdammerung: the list of persons and scenes is not as expected');

  // The slips are mended in the lines before anything is read from them.
  const lines = body.slice(prelude);
  for (const [from, to] of SLIPS) {
    const at = lines.map((l, i) => (l.includes(from) ? i : -1)).filter((i) => i >= 0);
    // "mean" without its question mark is found by its line end
    const hits = at.filter((i) => !to.startsWith(from) || lines[i].trimEnd().endsWith(from));
    if (hits.length !== 1) throw new Error(`gotterdammerung: ${JSON.stringify(from)} found ${hits.length} times, expected once`);
    lines[hits[0]] = lines[hits[0]].replace(from, to);
  }

  for (const mis of MISNAMED) {
    const at = lines.map((l, i) => (l === mis.name && lines[i + 1] === '' && lines[i + 2].trim().startsWith(mis.opening) ? i : -1)).filter((i) => i >= 0);
    if (at.length !== 1) throw new Error(`gotterdammerung: the speech misnamed ${mis.name} found ${at.length} times, expected once`);
    lines[at[0]] = mis.to;
  }

  // Paragraphs: runs of lines between blank lines.
  const paras = [];
  let cur = null;
  lines.forEach((l, i) => {
    if (l.trim() === '') { cur = null; return; }
    if (!cur) paras.push((cur = { at: prelude + i + 1, lines: [] }));
    cur.lines.push(l);
  });

  const parts = [];
  let part = null;
  let speaker = null; // whose speech the verse belongs to
  let afterIllustration = false; // an illustration has just been dropped
  let inIllustration = false;
  const seen = {};
  const forms = {};
  const count = { alone: 0, besideName: 0, illustrations: 0, joined: 0, turnovers: 0, stanzaBreaks: 0, rejoined: 0, supplied: 0 };
  let keptWords = 0; // words of the paragraphs kept, counted in the source
  const direction = (text, where) => {
    const m = text.match(/^\[?_ ?([^_\[\]]+)_$/);
    if (!m || !/[.:]$/.test(m[1])) throw new Error(`gotterdammerung: direction not understood, ${where}: ${text.slice(0, 50)}`);
    return clean(m[1]);
  };
  const last = () => part.blocks[part.blocks.length - 1];

  for (const p of paras) {
    const where = `line ${p.at} of the body`;
    const text = p.lines.map((l) => l.trim()).join(' ');
    const first = p.lines[0];
    const single = p.lines.length === 1;

    // Illustrations and their captions go, to the closing bracket.
    if (inIllustration || /^\[Illustration/.test(text)) {
      if (!inIllustration) count.illustrations++;
      inIllustration = !/\]$/.test(text);
      afterIllustration = true;
      continue;
    }
    if (/Illustration/.test(text)) throw new Error(`gotterdammerung: an illustration inside a paragraph, ${where}`);

    if (single && PARTS[first]) {
      if (Object.keys(PARTS)[parts.length] !== first) throw new Error(`gotterdammerung: ${first} out of order`);
      part = { ...PARTS[first], blocks: [] };
      parts.push(part);
      speaker = null;
      afterIllustration = false;
      continue;
    }
    if (!part) throw new Error(`gotterdammerung: text before the Prelude, ${where}`);

    // A name, alone on its line at the margin, with or without a direction beside it.
    let m;
    if (single && /^\S/.test(first) && (m = first.match(/^([A-ZÄÖÜ][A-Za-zÄÖÜ' -]*?)(?: (\[?_.+))?$/)) && (m[1] in SPEAKERS || m[1] in NAME_FORMS)) {
      let name = m[1];
      if (NAME_FORMS[name]) { forms[name] = (forms[name] || 0) + 1; name = NAME_FORMS[name][0]; }
      seen[name] = (seen[name] || 0) + 1;
      speaker = name;
      part.blocks.push({ k: 's', text: name });
      keptWords += countWords(name);
      if (m[2]) {
        const d = direction(m[2], where);
        part.blocks.push({ k: 'd', text: d });
        keptWords += countWords(d);
        count.besideName++;
      }
      afterIllustration = false;
      continue;
    }
    // Anything else that looks like a name is a name not in the table.
    if (single && /^\S/.test(first) && /^[A-ZÄÖÜ' -]+( and [A-ZÄÖÜ' -]+)?( \[?_.*)?$/.test(first) && /[A-ZÄÖÜ]{3}/.test(first) && !/[.!?,;]$/.test(first.replace(/ \[?_.*$/, ''))) {
      throw new Error(`gotterdammerung: a name not known, ${where}: ${first}`);
    }

    // A stage direction: in italic, opened by a bracket that is never
    // closed, or (the descriptions of the scene, and three entrances)
    // with no bracket at all.
    if (/^\[?_/.test(text)) {
      const indents = new Set(p.lines.map((l) => l.match(/^ */)[0].length));
      if (indents.size !== 1 || ![0, 4, 8].includes([...indents][0])) throw new Error(`gotterdammerung: direction oddly indented, ${where}`);
      const d = direction(text, where);
      part.blocks.push({ k: 'd', text: d });
      keptWords += countWords(d);
      count.alone++;
      // after a description of the scene somebody must be named before anything is sung
      if (!/^\[/.test(text) && [...indents][0] < 8) speaker = null;
      afterIllustration = false;
      continue;
    }

    // Verse. Lines stand at the margin or are indented four spaces; the
    // indenting is not kept.
    if (/[\[\]_{}=*|#\/µ\d]/.test(text)) throw new Error(`gotterdammerung: unexpected mark, ${where}: ${text.slice(0, 60)}`);
    if (!speaker && last() && last().k === 'd' && last().text.startsWith(UNNAMED.after)) {
      speaker = UNNAMED.name;
      part.blocks.push({ k: 's', text: speaker });
      count.supplied++;
    }
    if (!speaker) throw new Error(`gotterdammerung: verse with no speaker, ${where}: ${text.slice(0, 40)}`);
    let vlines = [];
    for (const l of p.lines) {
      const indent = l.match(/^ */)[0].length;
      const t = clean(l).trim();
      if (indent === 6) {
        // a word turned over at the end of a line too long for the measure
        if (!vlines.length) throw new Error(`gotterdammerung: a turned line with nothing before it, ${where}`);
        vlines[vlines.length - 1] += ' ' + t;
        count.turnovers++;
      } else if (indent === 0 || indent === 4) vlines.push(t);
      else throw new Error(`gotterdammerung: verse oddly indented, ${where}`);
    }
    keptWords += vlines.reduce((a, l) => a + countWords(l), 0);
    const run = RUN_TOGETHER.find(([open]) => vlines[0].startsWith(open));
    if (run) {
      const words = vlines.join(' ').split(' ');
      if (words.length !== run[1].reduce((a, b) => a + b, 0)) throw new Error(`gotterdammerung: the run-together speech has ${words.length} words, ${where}`);
      vlines = [];
      let at = 0;
      for (const n of run[1]) { vlines.push(words.slice(at, at + n).join(' ')); at += n; }
      count.rejoined++;
    }
    for (const t of vlines) {
      if (!/^(--)?["']?[A-ZÜ]/.test(t)) throw new Error(`gotterdammerung: a line of verse that does not begin with a capital, ${where}: ${JSON.stringify(t)}`);
      if (t.length > 46 || / {2,}/.test(t)) throw new Error(`gotterdammerung: a line of verse too long or badly spaced, ${where}: ${JSON.stringify(t)}`);
    }
    if (last() && last().k === 'v') {
      if (afterIllustration) {
        // the picture stood in the middle of a speech: the verse runs on
        last().lines.push(...vlines);
        count.joined++;
      } else {
        part.blocks.push({ k: 'v', lines: vlines });
        count.stanzaBreaks++;
      }
    } else part.blocks.push({ k: 'v', lines: vlines });
    afterIllustration = false;
  }

  // The misplaced sentence of the direction at the end of the first act.
  {
    const act = parts[1].blocks;
    const end = act[act.length - 1];
    const before = act.filter((b) => b.k === 'd' && b.text.startsWith(MISPLACED.belongsTo));
    if (end.k !== 'd' || end.text !== `${MISPLACED.closing} ${MISPLACED.sentence}` || before.length !== 1) throw new Error('gotterdammerung: the end of the first act is not as expected');
    end.text = MISPLACED.closing;
    before[0].text += ' ' + MISPLACED.sentence;
  }

  // The structure of the work.
  if (parts.length !== 4) throw new Error(`gotterdammerung: expected a prelude and three acts, found ${parts.length} parts`);
  const speeches = Object.values(seen).reduce((a, b) => a + b, 0);
  for (const [name, n] of Object.entries(SPEAKERS)) {
    if (seen[name] !== n) throw new Error(`gotterdammerung: ${name} speaks ${seen[name] || 0} times, expected ${n}`);
  }
  for (const [form, [, n]] of Object.entries(NAME_FORMS)) {
    if (forms[form] !== n) throw new Error(`gotterdammerung: the form ${form} found ${forms[form] || 0} times, expected ${n}`);
  }
  if (count.supplied !== 1) throw new Error(`gotterdammerung: ${count.supplied} names supplied, expected 1`);
  if (speeches !== EXPECT.speeches) throw new Error(`gotterdammerung: ${speeches} speeches, expected ${EXPECT.speeches}`);
  if (count.alone !== EXPECT.directions.alone || count.besideName !== EXPECT.directions.besideName) throw new Error(`gotterdammerung: ${count.alone} directions standing alone and ${count.besideName} beside names, expected ${EXPECT.directions.alone} and ${EXPECT.directions.besideName}`);
  if (count.illustrations !== EXPECT.illustrations || inIllustration) throw new Error(`gotterdammerung: ${count.illustrations} illustrations dropped, expected ${EXPECT.illustrations}`);
  if (count.joined !== EXPECT.joinedAcrossIllustration) throw new Error(`gotterdammerung: ${count.joined} speeches joined across an illustration, expected ${EXPECT.joinedAcrossIllustration}`);
  if (count.turnovers !== EXPECT.turnovers) throw new Error(`gotterdammerung: ${count.turnovers} turned lines, expected ${EXPECT.turnovers}`);
  if (count.rejoined !== RUN_TOGETHER.length) throw new Error(`gotterdammerung: ${count.rejoined} run-together speeches divided, expected ${RUN_TOGETHER.length}`);
  if (count.stanzaBreaks !== EXPECT.stanzaBreaks) throw new Error(`gotterdammerung: ${count.stanzaBreaks} breaks inside speeches, expected ${EXPECT.stanzaBreaks}`);
  let verseLines = 0;
  for (const p of parts) {
    let who = null;
    p.blocks.forEach((b, i) => {
      if (b.k === 's') {
        who = b.text;
        const next = p.blocks.slice(i + 1).find((x) => x.k !== 'd');
        if (!next || next.k !== 'v') throw new Error(`gotterdammerung: ${p.id}, block ${i}: ${b.text} says nothing`);
      }
      if (b.k === 'v') {
        if (!who) throw new Error(`gotterdammerung: ${p.id}, block ${i}: verse without a speaker`);
        verseLines += b.lines.length;
      }
      for (const t of b.k === 'v' ? b.lines : [b.text]) {
        if (/[\[\]_{}=*|#\/µ\d]/.test(t) || / {2,}/.test(t) || t !== t.trim() || !t) throw new Error(`gotterdammerung: markup or spacing left in ${p.id}: ${JSON.stringify(t.slice(0, 60))}`);
      }
    });
    if (p.blocks[0].k !== 'd') throw new Error(`gotterdammerung: ${p.label} does not open with its scene`);
  }
  if (verseLines !== EXPECT.verseLines) throw new Error(`gotterdammerung: ${verseLines} lines of verse, expected ${EXPECT.verseLines}`);
  const opening = parts[0].blocks[0];
  const close = parts[3].blocks[parts[3].blocks.length - 1];
  if (!opening.text.startsWith('The curtain rises slowly.') || parts[0].blocks[1].text !== 'THE FIRST NORN') throw new Error('gotterdammerung: the Prelude does not open as expected');
  if (close.k !== 'd' || !close.text.endsWith('the curtain falls.')) throw new Error('gotterdammerung: the work does not end with the fall of the curtain');
  // Nothing lost: the words of the blocks are the words of the paragraphs kept.
  const words = parts.reduce((a, p) => a + blockWords(p.blocks), 0);
  if (words !== keptWords + count.supplied) throw new Error(`gotterdammerung: ${words} words in the parts, ${keptWords} in the paragraphs kept`);
  return parts;
}

export function run() {
  return writeText('gotterdammerung', {
    author: 'Richard Wagner',
    title: 'The Twilight of the Gods',
    translator: 'Margaret Armour',
    year: 1911,
    verse: false,
    source: { name: 'Project Gutenberg, no. 49507', url: 'https://www.gutenberg.org/ebooks/49507' },
  }, build());
}
