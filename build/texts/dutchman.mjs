// Wagner, The Flying Dutchman: the English of the Metropolitan Opera
// libretto published by Fred Rullman, Inc., New York. Project Gutenberg
// no. 31963. The libretto names no translator and bears no date. The file
// sets the German and the English speech by speech, the German indented
// two spaces and the English six; only the English is taken.
// See notes/dutchman.md.

import { fetchText, gutenbergBody, writeText, clean, roman } from '../lib/gutenberg.mjs';

// The names over the speeches, German and English, as the file prints
// them. The English must answer the German speech for speech.
const SPEAKERS = {
  MATROSEN: 'SAILORS',
  DALAND: 'DALAND',
  STEUERMANN: 'MATE',
  HOLLAENDER: 'THE FLYING DUTCHMAN',
  CHOR: '(_Chorus._)',
  MAEDCHEN: 'GIRLS',
  MARY: 'MARY',
  SENTA: 'SENTA',
  'MARY UND DIE MAEDCHEN': 'MARY AND ALL THE GIRLS',
  ERIK: 'ERIK',
  'CHOR DER NORWEGISCHEN MATROSEN': '_Chorus of Norwegian Sailors._',
  'STEUERMANN UND MATROSEN': 'MATE AND SAILORS',
  'CHOR DER MANNSCHAFT DES FLIEGENDEN HOLLAENDERS': 'CHORUS OF THE CREW OF THE "FLYING DUTCHMAN."',
  'NORWEGISCHE MATROSEN': '_Chorus of the Norwegian Sailors._',
  'DIE MANNSCHAFT DES FLIEGENDEN HOLLAENDERS': 'CREW OF THE FLYING DUTCHMAN.',
  'MARY, ERIK, DALAND': 'MARY, ERIK, DALAND',
};
const ENGLISH = new Set(Object.values(SPEAKERS).map((s) => s.replace(/\.$/, '')));
// Three names are printed in italic, not capitals; the marks come off.
const plainName = (s) => s.replace(/^\(?_/, '').replace(/\._\)?$|\."$|\.$/, (m) => (m === '."' ? '"' : ''));

// Acts and scenes: the German headings and the English that follow them.
const HEADINGS = {
  'ERSTER AKT': 'ACT I', 'ZWEITER ACT': 'ACT II', 'DRITTER AKT': 'ACT III',
  'ERSTER AUFTRITT': 'SCENE I', 'ERSTE SCENE': 'SCENE I', 'ZWEITE SCENE': 'SCENE II', 'DRITTE SCENE': 'SCENE III',
};
const SCENES = [3, 3, 2];
// Lines too long for the column are turned over in the file; the turned
// part is indented and begins with a small letter.
const TURNOVERS = 4;
// The English has two stage directions, and the line that sets the scene
// (it stands under the list of persons).
const DIRECTIONS = 2;
const PLACE = 'SCENE: The Norwegian Coast';

export function build() {
  const body = gutenbergBody(fetchText('pg31963_flying_dutchman.txt', 'https://www.gutenberg.org/cache/epub/31963/pg31963.txt'));
  const only = (line) => {
    const at = body.map((l, i) => (l === line ? i : -1)).filter((i) => i >= 0);
    if (at.length !== 1) throw new Error(`dutchman: ${JSON.stringify(line)} found ${at.length} times`);
    return at[0];
  };
  const start = only('  ERSTER AKT.');
  const end = only('  ENDE.');
  // What is left out above: the publisher's pages, his argument, the list of persons.
  const front = body.slice(0, start).map((l) => l.trim());
  for (const want of ['FRED RULLMAN, Inc.', 'ARGUMENT', 'DRAMATIS PERSONAE', PLACE]) {
    if (!front.includes(want)) throw new Error(`dutchman: ${JSON.stringify(want)} not found above the first act`);
  }
  // and below: the German and English for "the end", then the transcriber's errata
  if (body[end + 2] !== '      THE END.' || only('ERRATA.') < end) throw new Error('dutchman: the end of the libretto is not as expected');

  // Paragraphs, each German or English by its indenting.
  const paras = [];
  let cur = null;
  for (let i = start; i < end; i++) {
    const l = body[i];
    if (l.trim() === '') { cur = null; continue; }
    const indent = l.match(/^ */)[0].length;
    const english = indent >= 6;
    if (indent < 2) throw new Error(`dutchman: a line at the margin, line ${i + 1} of the body`);
    if (!cur) paras.push((cur = { at: i + 1, english, lines: [] }));
    else if (cur.english !== english) throw new Error(`dutchman: German and English in one paragraph, line ${i + 1} of the body`);
    cur.lines.push(l);
  }

  const parts = [];
  let part = null;
  let scenes = 0;
  let speaker = null; // the English speaker of the speech being gathered
  let german = []; // German names and headings waiting for their English
  let turnovers = 0;
  let directions = 0;
  const pairs = [];
  const closeAct = () => {
    if (part && scenes !== SCENES[parts.length - 1]) throw new Error(`dutchman: act ${parts.length} has ${scenes} scenes, expected ${SCENES[parts.length - 1]}`);
  };
  for (const p of paras) {
    const first = p.lines[0].trim();
    const single = p.lines.length === 1;
    const where = `line ${p.at} of the body`;
    if (!p.english) {
      // Of the German only the names and headings are looked at.
      const name = first.replace(/\.$/, '');
      if (single && (SPEAKERS[name] || HEADINGS[name]) && /\.$/.test(first)) german.push(name);
      else if (single && /^[A-ZÄÖÜ][A-ZÄÖÜ ,]+\.$/.test(first)) throw new Error(`dutchman: German name not known, ${where}: ${first}`);
      continue;
    }
    if (/[äöüßÄÖÜ»«]/.test(p.lines.join(''))) throw new Error(`dutchman: German among the English, ${where}`);
    let m;
    if (single && (m = first.match(/^(ACT|SCENE) ([IVX]+)\.$/))) {
      const want = HEADINGS[german.shift()];
      if (want !== `${m[1]} ${m[2]}` || german.length) throw new Error(`dutchman: heading ${first} does not answer the German, ${where}`);
      const n = roman(m[2]);
      if (m[1] === 'ACT') {
        closeAct();
        if (n !== parts.length + 1) throw new Error(`dutchman: act ${n} out of order`);
        part = { id: `act-${n}`, label: `Act ${n}`, blocks: [] };
        parts.push(part);
        if (n === 1) part.blocks.push({ k: 'd', text: PLACE });
        scenes = 0;
      } else {
        if (n !== scenes + 1) throw new Error(`dutchman: ${part.label}, scene ${n} out of order`);
        scenes = n;
        part.blocks.push({ k: 'h', level: 3, text: `Scene ${n}` });
      }
      speaker = null;
      continue;
    }
    if (!part || !scenes) throw new Error(`dutchman: text before the first scene, ${where}`);
    if (single && ENGLISH.has(first.replace(/\.$/, ''))) {
      const de = german.shift();
      if (!de || SPEAKERS[de].replace(/\.$/, '') !== first.replace(/\.$/, '') || german.length) throw new Error(`dutchman: ${first} does not answer the German name ${de}, ${where}`);
      speaker = plainName(first);
      pairs.push([de, speaker]);
      part.blocks.push({ k: 's', text: speaker });
      continue;
    }
    if (single && /^[A-Z][A-Z ,."']+$/.test(first) && !/[a-z]/.test(first) && /[A-Z]{3}/.test(first) && /\.$/.test(first) && !/[!?,]/.test(first.replace(/, /g, ''))) {
      throw new Error(`dutchman: a name not known, ${where}: ${first}`);
    }
    if (german.length) throw new Error(`dutchman: the German name ${german[0]} has no English, ${where}`);
    const text = p.lines.map((l) => l.trim()).join(' ');
    if ((m = text.match(/^\(_(.+)_\)$/))) {
      if (/_/.test(m[1])) throw new Error(`dutchman: direction not understood, ${where}`);
      part.blocks.push({ k: 'd', text: clean(m[1]) });
      directions++;
      speaker = null;
      continue;
    }
    if (/^[(\[]/.test(first) || /^_.*_$/.test(text)) throw new Error(`dutchman: paragraph not understood, ${where}: ${first.slice(0, 40)}`);
    if (!speaker) throw new Error(`dutchman: verse with no speaker, ${where}: ${first.slice(0, 40)}`);
    const lines = [];
    for (const l of p.lines) {
      const indent = l.match(/^ */)[0].length;
      const t = clean(l).trim();
      if (indent > 6 && /^[a-z]/.test(t)) {
        if (!lines.length) throw new Error(`dutchman: a turned line with nothing before it, ${where}`);
        lines[lines.length - 1] += ' ' + t;
        turnovers++;
      } else lines.push(t);
    }
    for (const t of lines) if (/[_\[\]{}=*|]/.test(t) || / {2,}/.test(t)) throw new Error(`dutchman: unexpected mark, ${where}: ${JSON.stringify(t)}`);
    part.blocks.push({ k: 'v', lines });
  }
  closeAct();

  if (parts.length !== 3) throw new Error(`dutchman: expected 3 acts, found ${parts.length}`);
  if (german.length) throw new Error(`dutchman: German name ${german[0]} left without English at the end`);
  if (turnovers !== TURNOVERS) throw new Error(`dutchman: ${turnovers} turned lines joined, expected ${TURNOVERS}`);
  if (directions !== DIRECTIONS) throw new Error(`dutchman: ${directions} stage directions, expected ${DIRECTIONS}`);
  if (pairs.length !== 219) throw new Error(`dutchman: ${pairs.length} speeches, expected 219`);
  // Every speech has its speaker: verse follows a name, or more verse of the same speech.
  for (const p of parts) {
    p.blocks.forEach((b, i) => {
      const prev = p.blocks[i - 1];
      if (b.k === 'v' && (!prev || (prev.k !== 's' && prev.k !== 'v'))) throw new Error(`dutchman: ${p.id}, block ${i}: verse without a speaker`);
      if (b.k === 's' && (!p.blocks[i + 1] || p.blocks[i + 1].k !== 'v')) throw new Error(`dutchman: ${p.id}, block ${i}: ${b.text} says nothing`);
    });
  }
  const last = parts[2].blocks[parts[2].blocks.length - 1];
  if (parts[0].blocks[2].text !== 'SAILORS' || last.k !== 'd' || !last.text.startsWith('She casts herself into the sea.')) throw new Error('dutchman: the libretto does not begin or end as expected');
  return parts;
}

export function run() {
  return writeText('dutchman', {
    author: 'Richard Wagner',
    title: 'The Flying Dutchman',
    translator: null, // not named in the libretto; and it bears no date, so no year
    note: 'The English version from the German and English libretto that Fred Rullman of New York published for the Metropolitan Opera House. It gives neither translator nor date.',
    verse: false,
    source: { name: 'Project Gutenberg, no. 31963', url: 'https://www.gutenberg.org/ebooks/31963' },
  }, build());
}
