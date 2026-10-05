// Wagner, Tristan and Isolda: the English of the libretto published by the
// Oliver Ditson Company, Boston ("Grand Opera Librettos: German and English
// text and music of the leading motives"). Project Gutenberg no. 16250,
// which leaves the German out. The libretto names no translator and bears
// no date. Two passages that it prints only as music are not in the file;
// their words are taken from a second libretto of the same translation
// (see SUPPLIED and supply() below). See notes/tristan.md.

import { fetchText, gutenbergBody, writeText, roman, countWords, blockWords } from '../lib/gutenberg.mjs';

// What stands above the first act and is left out: the transcriber's
// note, the two title pages, the publisher's "story" of the opera, the
// list of persons. Each of these lines must be there.
const FRONT = [
  "[Transcriber's note: The German text is not included in this eBook.]",
  'GRAND OPERA', 'LIBRETTOS', 'AND MUSIC OF THE LEADING MOTIVES', 'OLIVER DITSON COMPANY',
  'THE STORY OF', '"TRISTAN AND ISOLDA"', 'DRAMATIS PERSONAE', 'TRISTAN AND ISOLDA.',
];

// The names over the speeches, as the file prints them, and how often
// each stands. (The libretto has the names in small capitals; the file
// gives them in capitals, and writes AE for the ligature.)
const SPEAKERS = {
  ISOLDA: 79, TRISTAN: 76, BRANGAENA: 47, KURVENAL: 46, MARK: 8, 'ALL THE MEN': 4, SHEPHERD: 4, BOTH: 3, MELOT: 3,
  'VOICES OF THE CREW': 2, "BRANGAENA'S VOICE": 2, 'THE VOICE OF A YOUNG SAILOR': 1, 'THE YOUNG SAILOR': 1,
  'KNIGHTS AND ATTENDANTS': 1, SAILORS: 1, "ISOLDA'S VOICE": 1, 'THE STEERSMAN': 1, "MELOT'S VOICE": 1,
};
const NAME = new RegExp('^(' + Object.keys(SPEAKERS).sort((a, b) => b.length - a.length).join('|') + ')(\\.| \\()');

// Scenes in each act, as this libretto numbers them.
const SCENES = [7, 3, 4];

// Plain slips of the file, each checked against a scan of the Ditson
// libretto: a line that contains `from` (found exactly once) is given `to`.
const SLIPS = [
  // in the stage directions: two words, a space, two commas that break a
  // phrase in two, and a full stop wanting at the end
  ['now quickly rousts', 'now quickly rouses'],
  ['at the side and hastens in the', 'at the side and hastens to the'],
  ['forced his way in_).O wild mistake!', 'forced his way in_). O wild mistake!'],
  ['turning her eyes with,', 'turning her eyes with'],
  ['(_turning, his dying eyes on_', '(_turning his dying eyes on_'],
  ['the entrance_]', 'the entrance_.]'],
  // in the verse: three misreadings, and a hyphen (a word divided between
  // two lines) that the file gives as a dash
  ['Buch a smart?', 'such a smart?'],
  ['Aha! Halla-halloa I', 'Aha! Halla-halloa!'],
  ["Isolda.'--ha!--", 'Isolda!--ha!--'],
  ['Heed to my all--', 'Heed to my all-'],
];
// Three lines that end a sentence and have no mark at the end in the file:
// the line (found exactly once) and the mark the libretto has there.
const UNCLOSED = [
  ['which in return I tender', '.--'],
  ['the faithfulest of friends, too', '!'],
  ['let not thine eye seek vainly', '.'],
];
// One line of the file is two lines of the libretto run together, with the
// last word of the first and the first word of the second lost.
const LOST = { line: 'foolish I see so well and plainly,', lines: ['foolish wight.', 'what I see so well and plainly,'] };

// The libretto begins a speech on the line of the speaker's name, and when
// the name and its stage direction leave too little room the end of the
// first line is turned over on to the next. The file keeps eight of these
// turned ends as lines of their own; they are joined to their lines again.
// (The first words, at the end of the line with the name; the turned end.)
const TURNED = [
  ['O horror!', 'Pity thy handmaid!'],
  ['O deepest', 'grief!'],
  ['If', 'thou so lovedst this lord,'],
  ['Where', 'are we?'],
  ['Hail to King Mark!', 'All hail!'],
  ['Envious', 'watcher!'],
  ["I'll ne'er", 'waken.'],
  ['Hast thou', 'preserved them?'],
];

// Two passages the libretto prints only as music, with the words under
// the notes: the young sailor's song that opens the first act, and the
// duet in the second scene of the second act. The file has neither the
// music nor the words. What the file has at those two places is checked
// in build(): the sailor's name with its direction and nothing after it,
// and two stage directions with nothing between them.
const AS_MUSIC = {
  song: 'THE VOICE OF A YOUNG SAILOR',
  duet: ['(TRISTAN _draws_ ISOLDA _gently aside to a flowery bank', '(TRISTAN _and_ ISOLDA _sink into oblivious ecstasy'],
};

// The words of those two passages come from another libretto that prints
// the same translation, and prints these passages as verse: the one
// published by Fred Rullman, Inc., New York (it too names no translator
// and bears no date), in the OCR text of the scan at archive.org,
// tristanisoldeope00wagn. supply() cuts the two passages out of that text
// and puts them in their places; build() alone gives the file as it is.
const SUPPLIED = {
  file: 'ia_tristanisoldeope00wagn_djvu.txt',
  url: 'https://archive.org/download/tristanisoldeope00wagn/tristanisoldeope00wagn_djvu.txt',
  // Each passage: its first and last line in the OCR text (each found
  // exactly once), the number of its lines, and what stands next before
  // and after it there (the same stage directions as in the file).
  song: { first: /^Westward$/, last: /^my winsome, marvellous maid !$/, lines: 14, before: /mast-head/, after: /starting up suddenly/ },
  duet: { first: / 0 night of rapture$/, last: /^be our undying dream\.$/, lines: 45, before: /head on her arm/, after: /^\(Tristan and Isolda sink/ },
  // The duet stands there under the name "Both." (in small capitals, like
  // the other names) and goes between these two directions.
  speaker: 'BOTH',
  between: ['TRISTAN draws ISOLDA gently aside to a flowery bank', 'TRISTAN and ISOLDA sink into oblivious ecstasy'],
  // Misreadings of the OCR, each line put as the page shows it (seen on
  // the page images of that scan and of a later impression of the same
  // setting, bwb_S0-AUM-168, where the faint marks are clearer).
  misread: [
    ['Waft us, wind stroDg and wild !', 'Waft us, wind strong and wild !'],
    ['O Iiish maid !', 'O Irish maid !'],
    ['rtoTH. 0 night of rapture', 'BOTH. O night of rapture'],
    ['lift our iiv2S', "lift our lives'"],
    ["oh set us free .'", 'oh set us free!'],
    ['Hid our heaits away', 'Hid our hearts away'],
    ['our eyes are binding-', 'our eyes are binding,'],
    ['with, radiance blinding;', 'with radiance blinding:'],
    ['which we defy', 'which we defy,'],
    ['thine am I', 'thine am I.'],
    ['cherished visions f.chieving,', 'cherished visions achieving,'],
  ],
  // One misprint of that libretto itself: the Ditson libretto has the right
  // word under the notes, and both libretti have it where the sailor sings
  // the lines again.
  misprint: [['Say, must our sails be weighed,', 'Say, must our sails be weighted,']],
  // The dash, written as the file writes dashes.
  dash: [['bid vain fears to cease, —', 'bid vain fears to cease,--']],
  // That libretto sets a space before ; ? and !, the file none: so many are closed up.
  closed: 7,
};

// Stage directions that stand without brackets, and one that the music of
// the shepherd's pipe divides, so that the bracket opened in its first
// paragraph is closed in its second.
const UNBRACKETED = ['ISOLDA _on a couch, her face buried in the cushions.', '_A Castle-Garden_.'];
const DIVIDED = ['[_In the foreground, in the garden, lies_ TRISTAN _sleeping', '_Presently the shepherd comes and looks in with interest, showing'];

// What the libretto is expected to hold.
const EXPECT = {
  speeches: 281,
  directions: { alone: 90, besideName: 108, inLine: 8 },
  continued: 29, // speeches taken up again after a direction, with no name repeated
  verseLines: 1850,
};

export function build() {
  const body = gutenbergBody(fetchText('pg16250_tristan.txt', 'https://www.gutenberg.org/cache/epub/16250/pg16250.txt'));
  const only = (line) => {
    const at = body.map((l, i) => (l === line ? i : -1)).filter((i) => i >= 0);
    if (at.length !== 1) throw new Error(`tristan: ${JSON.stringify(line)} found ${at.length} times`);
    return at[0];
  };
  const start = only('ACT I.');
  const front = body.slice(0, start).map((l) => l.trim());
  for (const want of FRONT) if (!front.includes(want)) throw new Error(`tristan: ${JSON.stringify(want)} not found above the first act`);
  // No translator and no date anywhere in the file: say so if that changes.
  if (body.some((l) => /translat|\b1[89]\d\d\b|copyright/i.test(l))) throw new Error('tristan: the file now names a translator or a date; look again');
  let end = body.length;
  while (end > start && body[end - 1].trim() === '') end--;
  if (!/Curtain_\.\)$/.test(body[end - 1])) throw new Error('tristan: the libretto does not end with the fall of the curtain');

  // The lines of the libretto, each with its number in the body.
  let lines = body.slice(start, end).map((t, i) => ({ n: start + i + 1, t }));
  const find = (test, what) => {
    const at = lines.map((l, i) => (test(l.t, i) ? i : -1)).filter((i) => i >= 0);
    if (at.length !== 1) throw new Error(`tristan: ${what} found ${at.length} times, expected once`);
    return at[0];
  };
  for (const [from, to] of SLIPS) {
    const i = find((t) => t.includes(from), JSON.stringify(from));
    lines[i].t = lines[i].t.replace(from, to);
  }
  for (const [line, mark] of UNCLOSED) {
    const i = find((t) => t === line, JSON.stringify(line));
    lines[i].t += mark;
  }
  {
    const i = find((t) => t === LOST.line, JSON.stringify(LOST.line));
    lines.splice(i, 1, ...LOST.lines.map((t) => ({ n: lines[i].n, t })));
  }
  for (const [first, turned] of TURNED) {
    const i = find((t, k) => t.endsWith('). ' + first) && lines[k + 1] && lines[k + 1].t === turned, `the turned line ${JSON.stringify(turned)}`);
    lines[i].t += ' ' + turned;
    lines.splice(i + 1, 1);
  }

  // Paragraphs: runs of lines between blank lines.
  const paras = [];
  let cur = null;
  for (const l of lines) {
    if (l.t.trim() === '') { cur = null; continue; }
    if (!cur) paras.push((cur = { at: l.n, lines: [] }));
    cur.lines.push(l.t);
  }

  const parts = [];
  let part = null;
  let scenes = 0;
  let speaker = null;
  let sourceWords = 0; // words of the paragraphs kept, counted in the file as mended
  let dividedOpen = false;
  const seen = {};
  const count = { alone: 0, besideName: 0, inLine: 0, continued: 0 };
  const strip = (s) => s.replace(/_/g, '').replace(/ {2,}/g, ' ').trim();
  const closeAct = () => {
    if (part && scenes !== SCENES[parts.length - 1]) throw new Error(`tristan: act ${parts.length} has ${scenes} scenes, expected ${SCENES[parts.length - 1]}`);
  };
  // A stage direction as it goes into a block: the brackets are already
  // off; no mark may be left in it.
  const direction = (text, where) => {
    const d = strip(text);
    if (!d || /[\[\]()_{}=*|#\/]/.test(d)) throw new Error(`tristan: direction not understood, ${where}: ${d.slice(0, 60)}`);
    return d;
  };
  // Lines of verse into blocks; a direction at the end of a line is put
  // after that line and divides the speech.
  const verse = (vlines, where) => {
    let block = null;
    for (const raw of vlines) {
      let line = raw.trim();
      let dir = null;
      const m = line.match(/^(.*\S) \((_[^()]*)\)$/);
      if (m) { line = m[1]; dir = m[2]; }
      if (/[()\[\]_{}=*|#\/\d]/.test(line) || / {2,}/.test(line) || !line) throw new Error(`tristan: unexpected mark in a line, ${where}: ${JSON.stringify(raw)}`);
      if (line.length > 60) throw new Error(`tristan: a line of ${line.length} characters, ${where}: ${JSON.stringify(line)}`);
      if (!block) part.blocks.push((block = { k: 'v', lines: [] }));
      block.lines.push(line);
      if (dir) {
        part.blocks.push({ k: 'd', text: direction(dir, where) });
        count.inLine++;
        block = null;
      }
    }
  };

  paras.forEach((p, pi) => {
    const where = `line ${p.at} of the body`;
    const first = p.lines[0];
    const single = p.lines.length === 1;
    const text = p.lines.map((l) => l.trim()).join(' ');
    let m;

    if (single && (m = first.match(/^ACT ([IVX]+)\.$/))) {
      closeAct();
      const n = roman(m[1]);
      if (n !== parts.length + 1) throw new Error(`tristan: act ${n} out of order`);
      part = { id: `act-${n}`, label: `Act ${n}`, blocks: [] };
      parts.push(part);
      scenes = 0;
      speaker = null;
      return;
    }
    if (!part) throw new Error(`tristan: text before the first act, ${where}`);
    sourceWords += countWords(text);
    if (single && (m = first.match(/^SCENE ([IVX]+)\.$/))) {
      const n = roman(m[1]);
      if (n !== scenes + 1) throw new Error(`tristan: ${part.label}, scene ${n} out of order`);
      scenes = n;
      part.blocks.push({ k: 'h', level: 3, text: `Scene ${n}` });
      speaker = null;
      return;
    }
    if (/^(ACT|SCENE)\b/.test(first)) throw new Error(`tristan: heading not understood, ${where}: ${first}`);

    // A stage direction standing alone.
    const bare = UNBRACKETED.some((u) => first.startsWith(u)) || first.startsWith(DIVIDED[1]);
    if (/^[\[(]/.test(first) || bare) {
      let inner;
      if (first.startsWith(DIVIDED[0])) {
        if (!/\.$/.test(text) || /[\])]/.test(text.slice(1))) throw new Error(`tristan: the divided direction is not as expected, ${where}`);
        inner = text.slice(1);
        dividedOpen = true;
      } else if (first.startsWith(DIVIDED[1])) {
        if (!dividedOpen || !/\]$/.test(text)) throw new Error(`tristan: the divided direction is not as expected, ${where}`);
        inner = text.slice(0, -1);
        dividedOpen = false;
      } else if (bare) inner = text;
      else if ((m = text.match(/^\[(.*)\]$/)) || (m = text.match(/^\((.*)\)\.?$/))) inner = m[1];
      else throw new Error(`tristan: direction not closed, ${where}: ${text.slice(0, 60)}`);
      if (dividedOpen && !first.startsWith(DIVIDED[0])) throw new Error(`tristan: a bracket left open before ${where}`);
      part.blocks.push({ k: 'd', text: direction(inner, where) });
      count.alone++;
      return;
    }

    // A speech: the name, perhaps a direction in brackets after it (which
    // may run over several lines), then the words.
    if ((m = first.match(NAME))) {
      const name = m[1];
      seen[name] = (seen[name] || 0) + 1;
      speaker = name;
      part.blocks.push({ k: 's', text: name });
      let rest;
      if (m[2] === '.') rest = [first.slice(m[0].length), ...p.lines.slice(1)];
      else {
        const all = p.lines.join('\n');
        const open = name.length + 1;
        const close = all.indexOf(')', open);
        const dir = all.slice(open + 1, close);
        if (close < 0 || /[(\[\]]/.test(dir)) throw new Error(`tristan: the direction beside ${name} is not understood, ${where}`);
        part.blocks.push({ k: 'd', text: direction(dir.replace(/\n/g, ' '), where) });
        count.besideName++;
        // after the bracket a full stop (twice it is inside the bracket or wanting), then the words
        let after = all.slice(close + 1);
        if (after.startsWith('.')) after = after.slice(1);
        if (after && !/^[ \n]/.test(after)) throw new Error(`tristan: words run on to the direction beside ${name}, ${where}`);
        rest = after.replace(/^ /, '').split('\n');
      }
      rest = rest.filter((l, i) => i > 0 || l.trim() !== '');
      if (rest.length) verse(rest, where);
      else if (name !== AS_MUSIC.song) throw new Error(`tristan: ${name} says nothing, ${where}`);
      return;
    }
    if (/^[A-Z][A-Z' ]{2,}(\.| \(|$)/.test(first)) throw new Error(`tristan: a name not known, ${where}: ${first.slice(0, 40)}`);

    // Otherwise the speech goes on after a direction.
    const last = part.blocks[part.blocks.length - 1];
    if (!speaker || !last || last.k !== 'd') throw new Error(`tristan: words with no speaker, ${where}: ${first.slice(0, 40)}`);
    verse(p.lines, where);
    count.continued++;
  });
  closeAct();

  // The structure of the libretto.
  if (parts.length !== 3) throw new Error(`tristan: expected 3 acts, found ${parts.length}`);
  if (dividedOpen) throw new Error('tristan: the divided direction was never closed');
  const speeches = Object.values(seen).reduce((a, b) => a + b, 0);
  for (const [name, n] of Object.entries(SPEAKERS)) {
    if (seen[name] !== n) throw new Error(`tristan: ${name} speaks ${seen[name] || 0} times, expected ${n}`);
  }
  if (speeches !== EXPECT.speeches) throw new Error(`tristan: ${speeches} speeches, expected ${EXPECT.speeches}`);
  for (const k of Object.keys(EXPECT.directions)) {
    if (count[k] !== EXPECT.directions[k]) throw new Error(`tristan: ${count[k]} directions of the kind "${k}", expected ${EXPECT.directions[k]}`);
  }
  if (count.continued !== EXPECT.continued) throw new Error(`tristan: ${count.continued} speeches continued after a direction, expected ${EXPECT.continued}`);
  let verseLines = 0;
  let silent = 0;
  for (const p of parts) {
    let who = null;
    p.blocks.forEach((b, i) => {
      if (b.k === 'h') who = null;
      if (b.k === 's') {
        who = b.text;
        const next = p.blocks.slice(i + 1).find((x) => x.k !== 'd');
        const says = next && next.k === 'v';
        if (!says && b.text !== AS_MUSIC.song) throw new Error(`tristan: ${p.id}, block ${i}: ${b.text} says nothing`);
        if (b.text === AS_MUSIC.song) {
          // the name, its direction, and then the next speaker at once
          if (p.blocks[i + 1].k !== 'd' || p.blocks[i + 2].k !== 's') throw new Error('tristan: the young sailor\'s first song is not as expected');
          silent++;
        }
      }
      if (b.k === 'v') {
        if (!who) throw new Error(`tristan: ${p.id}, block ${i}: verse without a speaker`);
        verseLines += b.lines.length;
      }
      for (const t of b.k === 'v' ? b.lines : [b.text]) {
        if (/[_\[\](){}=*|#\/]/.test(t) || / {2,}/.test(t) || t !== t.trim() || !t) throw new Error(`tristan: markup or spacing left in ${p.id}: ${JSON.stringify(t.slice(0, 60))}`);
      }
    });
    if (p.blocks[0].k !== 'd') throw new Error(`tristan: ${p.label} does not open with its scene`);
  }
  if (silent !== 1) throw new Error(`tristan: ${silent} speeches without words, expected the one song printed as music`);
  if (verseLines !== EXPECT.verseLines) throw new Error(`tristan: ${verseLines} lines of verse, expected ${EXPECT.verseLines}`);
  // The duet printed as music: its place is between two directions that follow one another.
  {
    const at = paras.findIndex((p) => p.lines[0].startsWith(AS_MUSIC.duet[0]));
    if (at < 0 || !paras[at + 1].lines[0].startsWith(AS_MUSIC.duet[1])) throw new Error('tristan: the place of the duet printed as music is not as expected');
  }
  const opening = parts[0].blocks[0];
  const close = parts[2].blocks[parts[2].blocks.length - 1];
  if (!opening.text.startsWith('A pavilion erected on the deck of a ship')) throw new Error('tristan: the first act does not open as expected');
  if (close.k !== 'd' || !close.text.endsWith('Curtain.')) throw new Error('tristan: the libretto does not end with the fall of the curtain');
  // Nothing lost: the words of the blocks are the words of the file from
  // the first act to the end, less the three lines that name the acts.
  const words = parts.reduce((a, p) => a + blockWords(p.blocks), 0);
  if (words !== sourceWords) throw new Error(`tristan: ${words} words in the parts, ${sourceWords} in the file`);
  return parts;
}

// The two passages printed as music, cut from the second libretto and put
// in their places among the parts that build() made.
export function supply(parts) {
  const S = SUPPLIED;
  const lines = fetchText(S.file, S.url).split('\n').map((l) => l.replace(/\s+/g, ' ').trim());
  const one = (re, what) => {
    const at = lines.map((l, i) => (re.test(l) ? i : -1)).filter((i) => i >= 0);
    if (at.length !== 1) throw new Error(`tristan: ${what} found ${at.length} times in the second libretto, expected once`);
    return at[0];
  };
  const next = (i, step) => {
    let k = i + step;
    while (lines[k] === '') k += step;
    return lines[k] || '';
  };
  const cut = (p, what) => {
    const a = one(p.first, `the first line of ${what}`);
    const b = one(p.last, `the last line of ${what}`);
    const got = lines.slice(a, b + 1).filter(Boolean);
    if (got.length !== p.lines) throw new Error(`tristan: ${what} has ${got.length} lines in the second libretto, expected ${p.lines}`);
    if (!p.before.test(next(a, -1)) || !p.after.test(next(b, 1))) throw new Error(`tristan: ${what} does not stand where expected in the second libretto`);
    return got;
  };
  let all = [...cut(S.song, 'the song'), ...cut(S.duet, 'the duet')];
  for (const [from, to] of [...S.misread, ...S.misprint, ...S.dash]) {
    const at = all.map((l, i) => (l === from ? i : -1)).filter((i) => i >= 0);
    if (at.length !== 1) throw new Error(`tristan: ${JSON.stringify(from)} found ${at.length} times in the passages supplied, expected once`);
    all[at[0]] = to;
  }
  let closed = 0;
  all = all.map((l) => l.replace(/ ([;?!])/g, (m, mark) => { closed++; return mark; }));
  if (closed !== S.closed) throw new Error(`tristan: ${closed} spaces before a mark closed up in the passages supplied, expected ${S.closed}`);
  const song = all.slice(0, S.song.lines);
  const duet = all.slice(S.song.lines);
  if (!duet[0].startsWith('BOTH. ')) throw new Error('tristan: the duet does not stand under the name of both');
  duet[0] = duet[0].slice('BOTH. '.length);
  for (const l of [...song, ...duet]) {
    if (!/^[A-Za-z][A-Za-z' ,;:.!?-]*$/.test(l) || / {2,}| [,;:.!?]/.test(l) || l.length > 60) throw new Error(`tristan: a line of the passages supplied is not understood: ${JSON.stringify(l)}`);
  }
  const before = parts.reduce((a, p) => a + blockWords(p.blocks), 0);
  const [act1, act2] = parts;

  // The song: after the sailor's name and its direction.
  const i = act1.blocks.findIndex((b) => b.k === 's' && b.text === AS_MUSIC.song);
  if (i < 0 || act1.blocks[i + 1].k !== 'd' || act1.blocks[i + 2].k !== 's') throw new Error('tristan: the place of the song is not as expected');
  // Eight of its lines the sailor sings again in the next scene, and those
  // the file has: they must be the same lines here (the libretti print
  // "homeward" the first time and "homewards" the second, and begin one
  // line with a capital the first time).
  const j = act1.blocks.findIndex((b) => b.k === 's' && b.text === 'THE YOUNG SAILOR');
  const again = j < 0 ? null : act1.blocks.slice(j + 1).find((b) => b.k !== 'd');
  const plain = (l) => l.toLowerCase().replace('homewards', 'homeward');
  if (!again || again.k !== 'v' || again.lines.length !== 8 || again.lines.some((l, k) => plain(l) !== plain(song[k + 4]))) {
    throw new Error('tristan: the lines of the song that are sung again are not the same in the two libretti');
  }
  act1.blocks.splice(i + 2, 0, { k: 'v', lines: song });

  // The duet: under its name, between the two directions.
  const d = act2.blocks.findIndex((b) => b.k === 'd' && b.text.startsWith(S.between[0]));
  if (d < 0 || act2.blocks[d + 1].k !== 'd' || !act2.blocks[d + 1].text.startsWith(S.between[1])) throw new Error('tristan: the place of the duet is not as expected');
  act2.blocks.splice(d + 1, 0, { k: 's', text: S.speaker }, { k: 'v', lines: duet });

  // Now every name has its words, and nothing else has changed.
  let speeches = 0;
  let verseLines = 0;
  for (const p of parts) {
    p.blocks.forEach((b, k) => {
      if (b.k === 's') {
        speeches++;
        const says = p.blocks.slice(k + 1).find((x) => x.k !== 'd');
        if (!says || says.k !== 'v') throw new Error(`tristan: ${p.id}, block ${k}: ${b.text} says nothing`);
      }
      if (b.k === 'v') verseLines += b.lines.length;
    });
  }
  const added = S.song.lines + S.duet.lines;
  if (speeches !== EXPECT.speeches + 1 || verseLines !== EXPECT.verseLines + added) throw new Error(`tristan: ${speeches} speeches and ${verseLines} lines of verse after the passages were supplied`);
  const words = parts.reduce((a, p) => a + blockWords(p.blocks), 0);
  if (words !== before + countWords([...song, ...duet].join(' ')) + 1) throw new Error(`tristan: ${words} words after the passages were supplied, ${before} before`);
  return parts;
}

export function run() {
  return writeText('tristan', {
    author: 'Richard Wagner',
    title: 'Tristan and Isolda',
    translator: null, // not named in the libretto; and it bears no date, so no year
    note: 'The English version from the libretto that the Oliver Ditson Company of Boston published, which gives neither translator nor date. The wording is that of the translation by H. and F. Corder. The Ditson libretto gives two passages in musical notation only: the young sailor’s first song and the duet “O night of rapture.” Those two are taken here from the libretto of the same translation that Fred Rullman of New York published.',
    verse: false,
    source: { name: 'Project Gutenberg, no. 16250', url: 'https://www.gutenberg.org/ebooks/16250' },
  }, supply(build()));
}
