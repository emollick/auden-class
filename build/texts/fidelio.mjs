// Beethoven, Fidelio: the English of the German and English libretto
// published by F. Rullman, New York (Internet Archive, cu31924021639509).
// The book prints a page of German and then a page of English, each in
// two columns; the file is the raw OCR of the scan and gives the columns
// one after another. Only the English is taken. See notes/fidelio.md.
//
// All line numbers in the tables are lines of the source file.

import { writeText, roman } from '../lib/gutenberg.mjs';
import { sourceLines, englishLines, mend, glue, tidy, squash, proof } from './fidelio-carmen-traviata.lib.mjs';

const ID = 'fidelio';
const FILE = 'ia_cu31924021639509_djvu.txt';
const URL = 'https://archive.org/download/cu31924021639509/cu31924021639509_djvu.txt';
const FROM = 278; // 'ERSTER AKT.'
const TO = 6942; // 'THE END.'
export const RANGE = [FROM, TO];

// The running head of a page, with or without its number.
const HEAD = /^(\d+ )?FIDELIO( [\di]+[.,]?)?$/;

// Lines left out: what is left of running heads the scan broke, and stray marks.
const DROP = [
  [397, 'Fidelio', true], // the title over the first English page
  [3895, 'FID', true],
  [3962, 'ELIO 27', true],
  [4539, '8'],
  [5575, 'un'],
  [5976, '40 FLD', true],
  [6220, '41', true],
  [6527, '\\'],
];

// Short lines at the top or foot of a column that the words alone do not
// place: settled by looking at the page.
const ASSIGN = [
  [526, 526, 'de'],
  [809, 809, 'de'],
  [3887, 3892, 'de'],
  [5973, 5973, 'en'],
];

// Names the scan misread, wherever they stand as whole words. (The book
// sets them in small capitals, which the machine reads badly.)
const NAMES = {
  JAcQurino: 'JACQUINO', JacouInv: 'JACQUINO', JAcQUINO: 'JACQUINO', JAcQuINO: 'JACQUINO', QuINo: 'QUINO', Jacguıno: 'Jacquino',
  MARcELINE: 'MARCELINE',
  Rocaguo: 'Rocquo', Roceuo: 'Rocquo', Rocevo: 'Rocquo', Rocguo: 'Rocquo', Rocguvo: 'Rocquo', Rocgvo: 'Rocquo',
  Rocouo: 'Rocquo', Rocouvo: 'Rocquo', Rocovo: 'Rocquo', Rocqguo: 'Rocquo', Rocqua: 'Rocquo',
  LEONoRA: 'LEONORA', LEoNORA: 'LEONORA', LEoNnoRA: 'LEONORA',
  P1zZARRo: 'PIZZARRO', P1zzarro: 'Pizzarro', Pızzarro: 'Pizzarro', Pissarro: 'Pizzarro', Pigzarro: 'Pizzarro',
  Fiorestan: 'Florestan', Fernanpo: 'Fernando', Fernanvo: 'Fernando',
};

// Misread words: [line, as the scan has it, as the book has it].
const FIXES = [
  [422, 'tron', 'iron'], [449, "'MARCELINE", 'MARCELINE'], [459, 'say a.', 'say a'], [499, 'consent;', 'consent,'],
  [507, '‘ MARCELINE', 'MARCELINE'], [791, 'Ti take', 'I’ll take'], [1010, 'garden. J', 'garden.)'],
  [1085, 'door.}', 'door.)'], [1111, 'hanas', 'hangs'], [1338, 'ex_ct', 'exact'], [1354, '‘rogue', 'rogue'],
  [1402, 'tinwally', 'tinually'], [1411, 'shail', 'shall'], [1420, '. She', 'She'], [1653, 'much.', 'much'],
  [1676, 'Arr. Rocquo.', 'AIR. ROCQUO.'], [1683, 'fows.', 'lows.'], [1699, 'rem ins', 'remains'], [1724, 'Mr,', 'Mr.'],
  [1748, 'ee your', 'assist your'], [1752, "Rocquo. '", 'Rocquo.'], [1767, '‚yourself', 'yourself'],
  [1974, 'labör', 'labor'], [2348, 'T need', 'I need'], [2399, 'T.EONORA', 'LEONORA'], [2410, 'ıs', 'is'],
  [2437, 'officers.}', 'officers.)'], [2635, 'and.', 'and'], [2636, 'them.) ;', 'them.)'], [2650, '“T inform', '“I inform'],
  [2682, '.hour', 'hour'], [2685, 'ear—-', 'ear—'], [2691, 'amony themselves. ı', 'among themselves.)'],
  [2718, 'answer.', 'answer'], [2979, 'if.', 'if'], [3029, 'agitation.', 'agitation'], [3030, 'observes:', 'observes'],
  [3031, 'increasing:', 'increasing'], [3038, 'what.', 'what'], [3045, 'face J', 'face I'], [3050, 'happiness.', 'happiness'],
  [3057, 'lingering:', 'lingering'], [3060, 'sor-.', 'sor-'], [3065, 'vigor:', 'vigor'], [3075, 'Jac-', 'JAC-'],
  [3082, '“ But', 'But'], [3268, 'the.parcels', 'the parcels'], [3269, 'shon.', 'short,'], [3271, 'Fidelio —', 'Fidelio—'],
  [3308, '“from', 'from'], [3326, 'Leonora’.', 'Leonora).'], [3399, 'V’ll', 'I’ll'], [3409, 'Jac-', 'JAC-'],
  [3591, 'is 4', 'is a'], [3639, 'Welllvery', 'Well! very'], [3672, 'weeks.', 'weeks'], [3690, 'iu', 'in'],
  [3694, 'T.EONORA', 'LEONORA'], [3713, 'fear:', 'fear'], [3715, 'only:', 'only'], [3723, 'hor-.', 'hor-'],
  [3730, 'grave.', 'grave'], [3731, 'proceed to.', 'proceed to'], [3732, 'accompany:', 'accompany'],
  [3913, 'this, But', 'this. But'], [3914, 'much,', 'much.'], [3921, '‘aloud ).', '(aloud).'], [3932, 'BoTH', 'BOTH'],
  [3989, 'MARCEL’NE', 'MARCELINE'], [4002, 'LEONORA. r', 'LEONORA.'], [4006, 'tyrant.', 'tyrant'],
  [4201, 'takinc', 'taking'], [4202, 'birthday— we', 'birthday—we'], [4203, 'iu', 'in'], [4209, '_ PIZZARRO', 'PIZZARRO'],
  [4224, '‘the', 'the'], [4239, 'longer, !', 'longer, I'], [4253, 'prisoners', 'prisoners)'], [4291, 'sittiny', 'sitting'],
  [4316, '{n', 'In'], [4322, 'ant', 'and'], [4536, 'tind', 'find'], [4589, 'vou', 'you'], [4639, 'Tl help', 'I’ll help'],
  [4883, '‘raises', 'raises'], [5280, 'true —the', 'true—the'], [5525, '_ Rocquo', 'Rocquo'], [5546, 'very.', 'very'],
  [5546, 'witlı', 'with'], [5565, 'affected}', 'affected)'], [5582, 'thank yet', 'thank ye!'], [5585, 'reward,', 'reward'],
  [5588, '_Rocquo', 'Rocquo'], [5613, '_(after', '(after'], [5614, '~ to', 'to'], [5622, '= goes', 'goes'],
  [5647, 'impulse as', 'impulse).'], [5823, 'SCENE II.', 'SCENE III.'], [5857, '1 and', 'I and'],
  [5959, 'shiciding', 'shielding'], [6161, '_ What', 'What'], [6200, '_ tower', 'tower'], [6229, '„with', 'with'],
  [6479, 'LEONORA,', 'LEONORA.'], [6482, 'again— now', 'again—now'], [6530, 'Corus', 'CHORUS'], [6547, 'dowa', 'down'],
  [6564, 'there. —Help', 'there,—Help'], [6804, 'piesent', 'present'], [6838, '= Leonora', 'Leonora'], [6841, 'joia', 'join'],
  [6842, 'design. .', 'design.'], [6849, '“ Punishment', 'Punishment'], [6863, 'chains;— yet', 'chains;—yet'],
  [6906, '_ tue', 'tue'], [6913, 'knows:', 'knows'], [6934, 'embrace»', 'embrace.'], [6936, 'CHorvs', 'CHORUS'],
];

// Slips of the printer, not of the scan, set right: [line, as the book has it, as it should be].
const MISPRINTS = [
  [1006, 'here.', 'here,'], // a full stop in the middle of a clause
  [2388, 'MARCELLINE', 'MARCELINE'], // the German spelling of the name, once, over an English speech
  [6849, 'villian', 'villain'],
];

// Lines that end in a hyphen which belongs to the word.
export const HYPHEN_KEPT = new Set([428, 712, 2418]);

// The book sets the English of some sung numbers in lines, the long ones
// turned over and indented; these are verse. Everything else it sets as
// paragraphs. [first line, last line] of each stretch set in lines.
const VERSE = [[1027, 1056], [1408, 1440], [1679, 1718], [2100, 2404], [2666, 2687], [3038, 3066], [3588, 3624], [4300, 4345], [6464, 6482], [6849, 6852]];
// In verse a line of the file that begins with a capital begins a line of
// the book, and one that begins with a small letter is turned over from
// the line above. The exceptions:
const TURNED = new Set([3617, 4307, 4326]); // begins with a capital, yet turned over
const STARTS = new Set([]); // begins with a small letter, yet a new line
// In prose a new paragraph begins where the file has a blank line, the
// line above ends a sentence and the line begins with a capital. The exceptions:
const SAME_PARA = new Set([6161, 6500]);
const NEW_PARA = new Set([706, 714, 735, 749]);

// Lines that are stage directions or the names of musical numbers though
// they stand without brackets.
const DIRECTIONS = new Set([1676, 2410, 2427, 2665, 3054, 3582, 4297, 4313]);
// Lines that look like a speaker's name and are part of a speech.
const NOT_SPEAKER = new Set([2729, 6832]);
// Lines that belong to the line above (a name set in two lines).
const JOINED = new Set([6531]);
// A speech with no name over it in the book, and whose it is. (Act 2 opens
// on Florestan alone; the direction says so and the German names him.)
const UNNAMED = new Map([[4300, 'FLORESTAN']]);

const PEOPLE = ['JACQUINO', 'MARCELINE', 'ROCQUO', 'LEONORA', 'PIZZARRO', 'FLORESTAN', 'DON FERNANDO'];
const GROUPS = ['CHORUS of Prisoners and People', 'CHORUS', 'PRISONERS', 'A PRISONER', 'ONE', 'ALL', 'BOTH', 'GUARDS'];
const SCENES = [12, 8];

export const OPT = { id: ID, from: FROM, to: TO - 1, foreign: 'de', hardGap: 4, head: HEAD, drop: DROP, assign: ASSIGN };

// The English lines of the libretto, mended.
export function stream() {
  const lines = sourceLines(FILE, URL);
  if (squash(lines[FROM - 1]) !== 'ERSTER AKT.' || squash(lines[TO - 1]) !== 'THE END.') throw new Error(`${ID}: the libretto does not lie where it did in the file`);
  const en = englishLines(lines, OPT);
  const seen = new Set();
  for (const l of en) {
    l.text = l.text.replace(/[\p{L}\p{N}]+/gu, (w) => {
      if (!Object.hasOwn(NAMES, w)) return w;
      seen.add(w);
      return NAMES[w];
    });
  }
  for (const w of Object.keys(NAMES)) if (!seen.has(w)) throw new Error(`${ID}: the misread name ${w} is nowhere in the English`);
  return mend(mend(en, FIXES, ID), MISPRINTS, ID);
}

// A speaker's name at the head of a line: { name, rest } or null.
function speaker(text) {
  const up = text.toUpperCase();
  let name = null;
  // the persons' names are in capitals and small capitals, which the scan gives in either case
  for (const p of PEOPLE) if (up.startsWith(p)) name = p;
  // the groups are as the book has them
  if (!name) for (const g of GROUPS) if (!name && text.startsWith(g)) name = g.toUpperCase();
  if (!name) return null;
  let rest = text.slice(name.length);
  const and = rest.toUpperCase().match(/^ AND ([A-Z ]+?)(?=[.,]$| \()/);
  if (and && [...PEOPLE, ...GROUPS].includes(and[1])) {
    name += ` AND ${and[1]}`;
    rest = rest.slice(and[0].length);
  }
  if (rest === '.') return { name, rest: '' };
  if (/^ \(/.test(rest)) return { name, rest: rest.slice(1) };
  return null;
}

const startsSmall = (s) => /^[^A-Za-z]*[a-z]/.test(s);
const endsSentence = (s) => /[.!?—:”][)”]?$/.test(s);
// Names in small capitals inside a direction, and the names of the musical numbers, in ordinary letters.
const title = (s) => s.replace(/\b[A-Z]{2,}\b/g, (w) => (/^(AND|OF|THE)$/.test(w) ? w.toLowerCase() : w[0] + w.slice(1).toLowerCase()));

export function build(trace = null) {
  const st = stream();
  const inVerse = (n) => VERSE.some(([a, b]) => n >= a && n <= b);
  const note = (n, what) => { if (trace && !/^[sh]$/.test(trace.get(n) ?? '')) trace.set(n, what); };

  // lines set in two that are one
  const lines = [];
  for (const l of st) {
    if (JOINED.has(l.n)) {
      if (!lines.length) throw new Error(`${ID}: line ${l.n} has nothing above it to join`);
      lines[lines.length - 1].text += ` ${l.text}`;
    } else lines.push({ ...l });
  }
  for (const n of JOINED) if (!st.some((l) => l.n === n)) throw new Error(`${ID}: line ${n} to be joined is not an English line`);

  const parts = [];
  let part = null;
  let scenes = 0;
  let run = []; // the lines since the last name or heading
  let said = null; // the name the run stands under

  const closeAct = () => {
    if (part && scenes !== SCENES[parts.length - 1]) throw new Error(`${ID}: act ${parts.length} has ${scenes} scenes, expected ${SCENES[parts.length - 1]}`);
  };

  // What stands between two names: speech and directions.
  const flush = () => {
    if (!run.length) return;
    const segs = [];
    let dir = null;
    let depth = 0;
    let dirAt = 0;
    const text = (piece, l, lineStart) => {
      piece = piece.trim();
      if (!piece) return;
      let last = segs[segs.length - 1];
      // verse and prose are never one block
      if (!last || !last.frags || inVerse(last.frags[0].n) !== inVerse(l.n)) segs.push((last = { frags: [] }));
      last.frags.push({ n: l.n, text: piece, lineStart, gap: l.gap, brk: l.brk });
    };
    for (const l of run) {
      if (DIRECTIONS.has(l.n)) {
        if (dir) throw new Error(`${ID}: line ${l.n}: a direction inside a direction`);
        segs.push({ dir: l.text, at: l.n });
        note(l.n, 'd');
        continue;
      }
      let rest = l.text;
      let lineStart = true;
      note(l.n, dir ? 'd' : rest.startsWith('(') ? 'd' : 't');
      while (rest.length) {
        if (dir) {
          let i = 0;
          for (; i < rest.length; i++) {
            if (rest[i] === '(') depth++;
            else if (rest[i] === ')' && --depth === 0) break;
          }
          if (i === rest.length) {
            dir.push({ n: l.n, text: rest });
            rest = '';
          } else {
            dir.push({ n: l.n, text: rest.slice(0, i) });
            const pieces = dir.map((d) => ({ n: d.n, text: d.text.trim() })).filter((d) => d.text);
            segs.push({ dir: pieces.reduce((a, d, k) => (k === 0 ? d.text : glue(a, d.text, HYPHEN_KEPT.has(pieces[k - 1].n))), ''), at: dirAt });
            dir = null;
            rest = rest.slice(i + 1);
            lineStart = false;
          }
        } else {
          const open = rest.indexOf('(');
          if (rest.indexOf(')') >= 0 && (open < 0 || rest.indexOf(')') < open)) throw new Error(`${ID}: line ${l.n}: a bracket closes that was not opened`);
          if (open < 0) {
            text(rest, l, lineStart);
            rest = '';
          } else {
            text(rest.slice(0, open), l, lineStart);
            dir = [];
            depth = 1;
            dirAt = l.n;
            rest = rest.slice(open + 1);
            lineStart = false;
          }
        }
      }
    }
    if (dir) throw new Error(`${ID}: a bracket opened in line ${dirAt} is not closed`);

    const blocks = part.blocks;
    let spoke = false;
    for (const seg of segs) {
      if (seg.dir !== undefined) {
        const t = title(tidy(seg.dir));
        if (!t) throw new Error(`${ID}: an empty direction, line ${seg.at}`);
        blocks.push({ k: 'd', text: t });
        continue;
      }
      // a stop left behind by a direction belongs to the words before it
      const first = seg.frags[0];
      const stop = first.text.match(/^[.,;:!?]+/);
      if (stop && !first.lineStart) {
        const prev = [...blocks].reverse().find((b) => b.k === 'p' || b.k === 'v');
        const prevText = prev && spoke ? (prev.k === 'p' ? prev.text : prev.lines[prev.lines.length - 1]) : null;
        if (prevText && /[\p{L}\p{N}’]$/u.test(prevText)) {
          if (prev.k === 'p') prev.text += stop[0];
          else prev.lines[prev.lines.length - 1] += stop[0];
        }
        first.text = first.text.slice(stop[0].length).trim();
        if (!first.text) seg.frags.shift();
        if (!seg.frags.length) continue;
      }
      if (!said) throw new Error(`${ID}: line ${seg.frags[0].n}: words with no speaker: ${seg.frags[0].text.slice(0, 40)}`);
      spoke = true;
      const verse = inVerse(seg.frags[0].n);
      const out = [];
      seg.frags.forEach((f, i) => {
        const prev = seg.frags[i - 1];
        let fresh;
        if (i === 0) fresh = true;
        else if (!f.lineStart) fresh = false;
        else if (verse) fresh = STARTS.has(f.n) || (!startsSmall(f.text) && !TURNED.has(f.n) && !/-$/.test(prev.text));
        else fresh = NEW_PARA.has(f.n) || ((f.gap > 0 || f.brk) && !startsSmall(f.text) && endsSentence(prev.text) && !SAME_PARA.has(f.n));
        if (f.lineStart) note(f.n, `t${verse ? 'v' : 'p'}${fresh ? '+' : '.'}`);
        if (fresh) out.push(f.text);
        else out[out.length - 1] = glue(out[out.length - 1], f.text, HYPHEN_KEPT.has(prev.n));
      });
      if (verse) blocks.push({ k: 'v', lines: out.map(tidy) });
      else for (const t of out) blocks.push({ k: 'p', text: tidy(t) });
    }
    run = [];
  };

  for (const l of lines) {
    let m;
    if ((m = l.text.match(/^ACT ([IVX]+)\.$/))) {
      flush();
      closeAct();
      const n = roman(m[1]);
      if (n !== parts.length + 1) throw new Error(`${ID}: act ${n} out of order, line ${l.n}`);
      part = { id: `act-${n}`, label: `Act ${n}`, blocks: [] };
      parts.push(part);
      scenes = 0;
      said = null;
      note(l.n, 'h');
      continue;
    }
    if (!part) throw new Error(`${ID}: line ${l.n} stands before the first act`);
    if ((m = l.text.match(/^SCENE ([IVX]+)\.$/))) {
      flush();
      const n = roman(m[1]);
      if (n !== scenes + 1) throw new Error(`${ID}: ${part.label}, scene ${n} out of order, line ${l.n}`);
      scenes = n;
      said = null;
      part.blocks.push({ k: 'h', level: 3, text: `Scene ${n}` });
      note(l.n, 'h');
      continue;
    }
    if (UNNAMED.has(l.n)) {
      flush();
      said = UNNAMED.get(l.n);
      part.blocks.push({ k: 's', text: said });
    }
    // the name of a number with the singer's name after it: 'AIR. ROCQUO.'
    if (DIRECTIONS.has(l.n) && (m = l.text.match(/^([A-Z]+\.) (.+)$/)) && speaker(m[2])) {
      run.push({ ...l, text: m[1] });
      flush();
      said = speaker(m[2]).name;
      part.blocks.push({ k: 's', text: said });
      continue;
    }
    const sp = NOT_SPEAKER.has(l.n) || DIRECTIONS.has(l.n) ? null : speaker(l.text);
    if (sp) {
      flush();
      part.blocks.push({ k: 's', text: sp.name });
      said = sp.name;
      note(l.n, 's');
      // a direction after the name; the stop that ends the heading goes
      const rest = sp.rest.replace(/\)\.$/, ')');
      if (rest) run.push({ ...l, text: rest, gap: 0, brk: false, head: true });
      continue;
    }
    run.push(l);
  }
  flush();
  closeAct();
  if (parts.length !== 2) throw new Error(`${ID}: expected 2 acts, found ${parts.length}`);

  // the apostrophes are the printer's throughout
  const curl = (s) => s.replace(/'/g, '’');
  for (const p of parts) {
    for (const b of p.blocks) {
      if (b.k === 'v') b.lines = b.lines.map(curl);
      else b.text = curl(b.text);
    }
  }
  proof(ID, parts);
  const first = parts[0].blocks;
  const last = parts[1].blocks[parts[1].blocks.length - 1];
  if (first[0].text !== 'Scene 1' || !first[1].text.startsWith('The Court Yard of a State Prison.') || first[3].text !== 'JACQUINO' || last.k !== 'p' || !last.text.endsWith('etc.')) {
    throw new Error(`${ID}: the libretto does not begin or end as expected`);
  }
  return parts;
}

export function run() {
  return writeText(ID, {
    author: 'Ludwig van Beethoven',
    title: 'Fidelio',
    translator: null, // not named in the book
    year: null, // the book bears no date; 1903 is the library's
    note: 'The English version from the German and English libretto that Fred Rullman of New York published. It gives neither translator nor date, though the library that owns the scanned copy dates it 1903. This text was read by machine from a scan of that copy and corrected against the scan only where a word looked wrong, so some misread words may remain.',
    verse: false,
    source: { name: 'Internet Archive', url: 'https://archive.org/details/cu31924021639509' },
  }, build());
}

// Words that are not in the other English texts of the course and are right
// as they stand: names, old spellings, and plain words that happen to be
// new here. Each was looked at where it stands. (For the word check; not
// used by the build.)
export const KNOWN = ['jacquino', 'marceline', 'rocquo', 'leonora', 'pizzarro', 'florestan', 'fidelio', 'fernando', 'pizarro',
  'casper', 'eustach', 'turnkey', 'firepan', 'tinplate', 'ironing', 'heartfelt', 'alertly', 'deposits', 'gatekeeper', 'assists',
  'piastres', 'jingles', 'gossiped', 'terzetto', 'woefully', 'espy', 'intreat', 'drawbridge', 'dispatches', 'reprimands', 'arie',
  'trumpeter', 'aria', 'endearing', 'pats', 'goaler', "spar'd", 'criminally', 'hireling', 'vanishest', 'openings', 'recitative',
  'roseate', 'endeavoring', 'duett', 'tremblingly', 'winningly', 'wishedst', 'collectedly', 'thirstiness', 'shielding', 'unhoped',
  'loosens', 'triest'];
