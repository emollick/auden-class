// Rimbaud, A Season in Hell, in English: the unsigned translation printed
// in The Dial (New York), volume 69, July 1920, pages 1 to 26. The words
// come from the Internet Archive's machine reading of a microfilm of that
// issue (sim_dial_1920-07_69), which is raw: it has running heads, words
// broken at line ends, paragraphs cut in two and misread letters. Every
// repair is in the tables below, and each was decided by looking at the
// page image. See notes/rimbaud.md.

import { fetchText, writeText, countWords, blockWords } from '../lib/gutenberg.mjs';

const NAME = 'ia_sim_dial_1920-07_69_djvu.txt';
const URL = 'https://archive.org/download/sim_dial_1920-07_69/sim_dial_1920-07_69_djvu.txt';

// Lines are numbered as an editor numbers them, from 1 at the top of the
// file. The file opens with this piece; the translator's note comes
// first (lines 10 to 70) and is not taken.
const TOP = [[1, 'JULY 1920'], [4, 'A SEASON IN HELL'], [7, 'BY ARTHUR RIMBAUD']];
const NOTE = [[10, /^\[TransLator’s Nore: /], [70, / for his hell\.\]$/]];
const FIRST = 73; // the opening
const LAST = 1424; // the date at the end
const AFTER = [1427, 'A MEMORY OF THE PLAYERS IN A']; // the next piece

// The running head of each page: [line, what the file has, page of the magazine].
const HEADS = [
  [94, 'ARTHUR RIMBAUD 3', 3], [148, '4 A SEASON IN HELL', 4], [203, 'ARTHUR RIMBAUD 5', 5],
  [256, '6 A SEASON IN HELL', 6], [309, 'ARTHUR RIMBAUD 7', 7], [361, 'A SEASON IN HELL', 8],
  [420, 'ARTHUR RIMBAUD 9', 9], [474, '10 A SEASON IN HELL', 10], [534, 'ARTHUR RIMBAUD 11', 11],
  [597, '12 A SEASON IN HELL', 12], [648, 'ARTHUR RIMBAUD 13', 13], [697, '14 A SEASON IN HELL', 14],
  [749, 'ARTHUR RIMBAUD 15', 15], [803, 'A SEASON IN HELL', 16], [857, 'ARTHUR RIMBAUD 17', 17],
  [920, 'A SEASON IN HELL', 18], [976, 'ARTHUR RIMBAUD', 19], [1032, 'A SEASON IN HELL', 20],
  [1087, 'ARTHUR RIMBAUD', 21], [1144, '22 A SEASON IN HELL', 22], [1219, 'ARTHUR RIMBAUD 23', 23],
  [1276, '24 A SEASON IN HELL', 24], [1340, 'ARTHUR RIMBAUD', 25],
  // the last page of the piece carries the running head of the poem that follows it
  [1403, '26 A MEMORY OF THE PLAYERS', 26],
];

// Lines that are not print at all: the edge of the facing page, specks.
const JUNK = [
  [417, 'aj = ii@S Ou, Gauss fe «'],
  [1197, 'that jis'], [1198, 'laving'], [1199, 'dental'], [1200, 'inken,'], [1201, 'lesires'], [1202, 'spirit'], [1203, '; this,'],
  [1206, 'ithor-'], [1207, 'ake it'], [1210, 'e in-'], [1211, 'I re-'], [1212, '—lIt'], [1215, 'ping'], [1216, 'sdom'],
  [1325, '4 ft. ot Be?'],
];

// Misreadings: [line, what the file has, what the page has]. The string
// must stand exactly once in that line.
const FIXES = [
  // the opening word has a large initial, which the machine did not read
  [73, 'NCE on', 'Once on'],
  [113, '‘Earn', '“Earn'],
  [134, 'sensuality ;', 'sensuality;'],
  [188, 'science. ‘', 'science.'],
  [208, 'mysclf', 'myself'],
  [225, 'furious-eyed ;', 'furious-eyed;'],
  [235, 'Reénter', 'Reënter'],
  [268, 'am 1 a', 'am I a'],
  [274, '¢dea', 'idea'],
  [296, 'them !—', 'them!—'],
  [297, 'I ‘have', 'I have'],
  [303, 'shut te your', 'shut to your'],
  [313, 'You,. broker', 'You, broker'],
  [322, 'myself ?—', 'myself?—'],
  [352, 'divine—Two', 'divine.—Two'],
  [354, 'shipwrecked ; <hose', 'shipwrecked; those'],
  [396, 'saints.——The', 'saints.—The'],
  [406, 'limbs .', 'limbs . . .'],
  [411, 'time. .', 'time . . .'],
  [423, 'fireon', 'fire on'],
  [426, 'ms @ *', 'Ah! . . .'],
  [435, 'to me !—', 'to me!—'],
  [451, 'Iam.', 'I am.'],
  [452, 'J am the slave', 'I am the slave'],
  [461, '. . Of the', '. . . Of the'],
  [464, 'Pride——My', 'Pride.—My'],
  [479, '. Help . . . [havea pillow', '. . . Help . . . I have a pillow'],
  [487, 'principles. |', 'principles. I'],
  [503, 'nonexistence. |', 'nonexistence. I'],
  [506, 'Listen! ...', 'Listen! . . .'],
  [508, 'talents !—', 'talents!—'],
  [510, 'sorgs', 'songs'],
  [515, 'heart !—', 'heart!—'],
  [540, 'lassitude..', 'lassitude.'],
  [553, 'DELIRES', 'DÉLIRES'],
  [556, 'Foo.isH', 'FOOLISH'],
  [577, 'no, not my', '. . . no, not my'],
  [587, '“T am', '“I am'],
  [602, '“ITamawidow . . .—TI usedtobeawidow', '“I am a widow . . .—I used to be a widow'],
  [604, 'askeleton! . . . Hewasalmostachild.', 'a skeleton! . . . He was almost a child.'],
  [609, 'he és not', 'he is not'],
  [617, 'faggots .', 'faggots . . . !’'],
  [619, '“TI listen', '“I listen'],
  [630, 'death_—', 'death.—'],
  [653, '‘a different', 'a different'],
  [674, '“T understand', '“‘I understand'],
  [706, '“TI understand', '“‘I understand'],
  [709, 'acquaintances;,', 'acquaintances;'],
  [730, '“ *You', '“‘You'],
  [735, 'hearts . ’', 'hearts . . .’'],
  [753, 'jn some', 'in some'],
  [757, 'DELIRES', 'DÉLIRES'],
  [758, 'Worp', 'WORD'],
  [768, 'litera~', 'litera-'],
  [771, 'naive', 'naïve'],
  [790, '4 genoux', 'à genoux'],
  [790, 'bruyére', 'bruyère'],
  [793, 'd’aprés-midi tiéde', 'd’après-midi tiède'],
  [797, 'couvert !—', 'couvert!—'],
  [806, 'Boire a ces', 'Boire à ces'],
  [813, 'glagons', 'glaçons'],
  [816, ']’or', 'l’or'],
  [819, 'A quatre', 'À quatre'],
  [819, ']’été', 'l’été'],
  [824, 'fété', 'fêté'],
  [827, 'La-bas', 'Là-bas'],
  [830, 'Déja', 'Déjà'],
  [836, 'Oi la', 'Où la'],
  [845, ']’ame', 'l’âme'],
  [849, ']’eau-de-vie', 'l’eau-de-vie'],
  [851, 'mer a midi', 'mer à midi'],
  [881, 'PLus HAuTE Tour', 'PLUS HAUTE TOUR'],
  [908, 'trés', 'très'],
  [923, 'Qu’ il', 'Qu’il'],
  [935, 'rubies z', 'rubies . . .”'],
  [941, 'FaIM', 'FAIM'],
  [944, 'guére', 'guère'],
  [990, 'méle', 'mêle'],
  [1000, '1|’Eternité', 'l’Eternité'],
  [1003, 'mélée', 'mêlée'],
  [1007, 'Mon ame', 'Mon âme'],
  [1008, 'voeu', 'vœu'],
  [1016, 'selon.', 'selon. . . .'],
  [1021, 'd’ortetur', 'd’orietur'],
  [1023, 'est sur.', 'est sûr.'],
  [1043, '—Quoi ?—1’Eternité', '—Quoi?—l’Eternité'],
  [1045, 'mélée', 'mêlée'],
  [1080, '6 chateaux', 'ô châteaux'],
  [1081, 'Quelle ame', 'Quelle âme'],
  [1094, 'Salut 4 lui', 'Salut à lui'],
  [1095, 'cog gaulois', 'coq gaulois'],
  [1102, 'pris ame', 'pris âme'],
  [1106, '6 chateaux', 'ô châteaux'],
  [1113, '6 chateaux', 'ô châteaux'],
  [1156, 'spent !—TI see', 'spent!—I see'],
  [1164, 'gommon', 'common'],
  [1180, 'M: Prudhomme', 'M. Prudhomme'],
  [1229, 'yourself !—', 'yourself!—'],
  [1238, '. If it had', '. . . If it had'],
  [1239, 'wisdom! .. .', 'wisdom! . . .'],
  [1244, 'purity !—', 'purity!—'],
  [1259, 'them?... .', 'them? . . . .'],
  [1281, 'martyr...', 'martyr . . .'],
  [1290, 'Oh !—', 'Oh!—'],
  [1297, 'luck!’', 'luck!”'],
  [1313, 'superstition ;', 'superstition;'],
  [1313, 'first !—', 'first!—'],
  [1360, '. . Frightful', '. . . Frightful'],
  [1391, 'sorts—You', 'sorts.—You'],
  [1420, 'there ;—', 'there;—'],
  // the page has the short dash here
  [1424, 'April—August', 'April–August'],
];

// The file puts a blank line between paragraphs, but not reliably.
// GLUE: the line carries on the paragraph (or the stanza) before it,
// though blank lines or the turn of a page stand between them in the file.
const GLUE = [
  [88, 'beast.'],
  [259, 'suffocate.'], // page 6
  [312, 'I can be saved.'], // page 7
  [411, 'weapons'],
  [461, '. . . Of the errors'],
  [479, '. . . Help'], [481, 'me, they are phantoms.'], [483, 'them keep off.'],
  [567, 'am unclean.'],
  [577, '. . . no, not my friends.'],
  [600, 'I am afraid.'], // page 12
  [700, 'friend.’'], // page 14
  [752, 'be taken up again'], // page 15
  [793, 'Dans un brouillard'],
  [806, 'Boire à ces gourdes'], // page 16, in the middle of a stanza
  [821, 'Le sommeil d’amour'], [823, 'Sous les bocages'],
  [830, 'Déjà s’agitent'],
  [842, 'Sujets d’un roi'], [844, 'Vénus!'],
  [893, 'Aux cieux sont parties.'],
  [904, 'A l’oubli livrée'],
  [948, 'De roc,'],
  [954, 'Attirez le gai venin'],
  [960, 'Les vieilles pierres'], [962, 'Les galets'], [964, 'Pains semés'],
  [987, 'Aux autels de Salomon.'], [989, 'Le bouillon court'],
  [1003, 'C’est la mer mêlée'],
  [1021, 'Pas d’orietur.'],
  [1043, '—Quoi?—l’Eternité.'], [1045, 'C’est la mer mêlée'],
  [1147, 'other;'], // page 22
  [1238, '. . . If it had always'],
  [1279, 'priest!'], // page 24
  [1360, '. . . Frightful evocation!'],
  [1382, 'I am off.'],
  [1394, 'I were to avenge myself!'],
];
// BREAK: a new paragraph begins at the line, though the file has no blank
// line before it.
const BREAK = [
  [427, '—I shall get used to it.'],
  [428, 'This would be the French life'],
  [563, '“O heavenly Bridegroom'],
  [754, 'Amusing household!'],
  [1383, 'But not one friendly hand!'],
];

// Words broken at the end of a line, as 'left|right'. These are joined
// without the hyphen.
const BROKEN = [
  'geld|ings', 'amuse|ments', 'Geog|raphy', 'poli|tics', 'dis|gusts', 'per|haps', 'forbid|den', 'be|long',
  'in|spired', 'respect|able', 'bap|tism', 'ex|pected', 'para|dise', 'salva|tion', 'in|capable', 'my|self',
  'be|lieve', 'mis|fortune', 'child|ish', 'per|fection', 'Ferdi|nand', 'some|body', 'situa|tion', 'mar|riage',
  'hap|piness', 'Al|though', 'un|concerns', 'wo|man', 'play|things', 'paint|ing', 'litera|ture', 'flat|tered',
  'merchan|dise', 'remem|ber', 'an|other', 'author|ity', 'in|ventor’s', 're|turned', 'mon|strous', 'con|fessor',
  'pen|alty', 'pre|tend', 'fire-breath|ing',
];
// These are compounds that happen to break at their hyphen, which stays.
const COMPOUND = ['self|stultification', 'many|coloured'];

// The nine sections, as the French text (rimbaud-fr) has them. `heads` are
// the heading lines as they stand after the fixes; the last heading of
// Délires I is kept as a heading inside the part, like the French.
const SECTIONS = [
  { id: 's1', label: '“Once on a time, if I remember rightly…”', heads: [] },
  { id: 's2', label: 'Bad Blood', heads: [[123, 'BAD BLOOD']] },
  { id: 's3', label: 'Night in Hell', heads: [[431, 'NIGHT IN HELL']] },
  { id: 's4', label: 'Délires I: Foolish Virgin', heads: [[553, 'DÉLIRES I'], [556, 'FOOLISH VIRGIN'], [559, 'THE INFERNAL BRIDEGROOM']], under: 'The Infernal Bridegroom' },
  { id: 's5', label: 'Délires II: Alchemy of the Word', heads: [[757, 'DÉLIRES II'], [758, 'ALCHEMY OF THE WORD']] },
  { id: 's6', label: 'The Impossible', heads: [[1119, 'THE IMPOSSIBLE']] },
  { id: 's7', label: 'The Lightning', heads: [[1249, 'THE LIGHTNING']] },
  { id: 's8', label: 'Morning', heads: [[1293, 'MORNING']] },
  { id: 's9', label: 'Adieu', heads: [[1343, 'ADIEU']] },
];

// The poems of Délires II, which The Dial prints in French: the lines of
// the file that are verse, from and to.
const VERSE = [[789, 851], [884, 924], [944, 990], [999, 1046], [1080, 1113]];
// Two of the poems have titles, set in small capitals.
const TITLES = [[881, 'CHANSON DE LA PLUS HAUTE TOUR', 'Chanson de la plus haute tour'], [941, 'FAIM', 'Faim']];

// What the cutting must find. Blocks in each part, counted on the pages;
// the verse is seven poems of 13, 20, 18, 12, 12, 24 and 14 lines in
// 4, 5, 5, 3, 3, 6 and 8 stanzas, as in the French text.
const BLOCKS = { s1: 11, s2: 56, s3: 20, s4: 22, s5: 57, s6: 18, s7: 7, s8: 4, s9: 15 };
const VERSE_COUNT = { blocks: 34, lines: 113 };
const STANZAS = [4, 4, 4, 1, 4, 4, 4, 4, 4, 2, 6, 2, 6, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 1, 2, 1];

// Every character the text may hold.
const ALLOWED = /^[A-Za-z0-9 .,;:!?’‘“”—–\-àâçèéêëïôùûœÀÉ]+$/;

export function build(report) {
  const raw = fetchText(NAME, URL).split('\n').map((l) => l.replace(/\s+$/, ''));
  const at = (n) => raw[n - 1];
  const fail = (msg) => { throw new Error(`rimbaud: ${msg}`); };

  // The piece is where it was when the tables were made.
  for (const [n, want] of [...TOP, AFTER]) if (at(n) !== want) fail(`line ${n} is ${JSON.stringify(at(n))}, expected ${JSON.stringify(want)}`);
  for (const [n, re] of NOTE) if (!re.test(at(n))) fail(`the translator's note is not at line ${n}`);
  for (let n = AFTER[0] - 1; n > LAST; n--) if (at(n) !== '') fail(`text between the end of the piece and the next: line ${n}`);
  for (let n = FIRST - 1; n > NOTE[1][0]; n--) if (at(n) !== '') fail(`text between the translator's note and the opening: line ${n}`);

  const skip = new Map();
  let page = 2;
  const pageOf = new Map();
  HEADS.forEach(([n, want, p], i) => {
    if (at(n) !== want) fail(`running head at line ${n} is ${JSON.stringify(at(n))}`);
    if (p !== 3 + i) fail(`running heads out of order at line ${n}`);
    skip.set(n, 'head');
  });
  for (const [n, want] of JUNK) {
    if (at(n) !== want) fail(`line ${n} is ${JSON.stringify(at(n))}, expected the stray marks ${JSON.stringify(want)}`);
    skip.set(n, 'junk');
  }
  // no running head has been missed
  for (let n = FIRST; n <= LAST; n++) {
    if (!skip.has(n) && /^(\d+ )?(A SEASON IN HELL|ARTHUR RIMBAUD)( \d+)?$|A MEMORY OF/.test(at(n))) fail(`a running head left at line ${n}`);
  }

  // The fixes.
  const text = new Map();
  for (let n = FIRST; n <= LAST; n++) if (!skip.has(n)) text.set(n, at(n));
  for (const [n, wrong, right] of FIXES) {
    const s = text.get(n);
    if (s === undefined) fail(`fix at line ${n}: no such line of text`);
    const i = s.indexOf(wrong);
    if (i < 0 || s.indexOf(wrong, i + 1) >= 0) fail(`fix at line ${n}: ${JSON.stringify(wrong)} stands ${i < 0 ? 'nowhere' : 'more than once'} in ${JSON.stringify(s)}`);
    text.set(n, s.slice(0, i) + right + s.slice(i + wrong.length));
  }

  // Headings and verse.
  const headAt = new Map();
  SECTIONS.forEach((s, i) => s.heads.forEach(([n, want], j) => {
    if (text.get(n) !== want) fail(`heading at line ${n} is ${JSON.stringify(text.get(n))}, expected ${JSON.stringify(want)}`);
    headAt.set(n, { section: i, last: j === s.heads.length - 1 });
  }));
  const titleAt = new Map();
  for (const [n, want, label] of TITLES) {
    if (text.get(n) !== want) fail(`poem title at line ${n} is ${JSON.stringify(text.get(n))}`);
    titleAt.set(n, label);
  }
  const inVerse = (n) => VERSE.some(([a, b]) => n >= a && n <= b);
  for (const [a, b] of VERSE) if (!text.get(a) || !text.get(b)) fail(`verse ${a} to ${b} does not begin and end on a line of text`);

  // Paragraphs and stanzas.
  const glue = new Map(GLUE);
  const brk = new Map(BREAK);
  const units = [];
  let cur = null;
  let gap = true;
  for (let n = FIRST; n <= LAST; n++) {
    const s = text.get(n);
    if (HEADS.some(([h]) => h === n)) page++;
    if (s === undefined || s === '') { gap = true; continue; }
    pageOf.set(n, page);
    if (headAt.has(n) || titleAt.has(n)) {
      if (glue.has(n) || brk.has(n)) fail(`line ${n} is a heading`);
      units.push({ kind: headAt.has(n) ? 'head' : 'title', lines: [{ n, s }] });
      cur = null;
      gap = true;
      continue;
    }
    let fresh = gap || !cur;
    if (glue.has(n)) {
      if (!gap || !cur) fail(`line ${n} is to be glued to the line before, but nothing parts them`);
      if (!s.startsWith(glue.get(n))) fail(`line ${n} does not begin ${JSON.stringify(glue.get(n))}: ${JSON.stringify(s)}`);
      fresh = false;
      glue.delete(n);
    }
    if (brk.has(n)) {
      if (gap) fail(`line ${n} is to begin a paragraph, and already does`);
      if (!s.startsWith(brk.get(n))) fail(`line ${n} does not begin ${JSON.stringify(brk.get(n))}: ${JSON.stringify(s)}`);
      fresh = true;
      brk.delete(n);
    }
    const verse = inVerse(n);
    if (!fresh && cur.kind !== (verse ? 'verse' : 'prose')) fail(`line ${n}: verse and prose in one block`);
    if (fresh) units.push((cur = { kind: verse ? 'verse' : 'prose', lines: [] }));
    cur.lines.push({ n, s });
    gap = false;
  }
  if (glue.size || brk.size) fail(`unused: glue ${[...glue.keys()]}, break ${[...brk.keys()]}`);
  if (page !== 26) fail(`the piece ends on page ${page}, expected 26`);

  // Join the lines of a paragraph.
  const broken = new Set(BROKEN);
  const compound = new Set(COMPOUND);
  const seenBreaks = new Set();
  const undecided = [];
  let joins = 0; // two words of the file made one
  const dashes = [];
  const join = (lines) => {
    let out = lines[0].s;
    for (let i = 1; i < lines.length; i++) {
      const next = lines[i].s;
      const m = out.match(/([A-Za-zÀ-ÿ’]+(?:-[A-Za-zÀ-ÿ’]+)*)-$/);
      if (m) {
        const right = next.match(/^[A-Za-zÀ-ÿ’]+/);
        const key = `${m[1]}|${right ? right[0] : ''}`;
        seenBreaks.add(key);
        if (broken.has(key)) out = out.slice(0, -1) + next;
        else if (compound.has(key)) out += next;
        else { undecided.push(`${lines[i].n - 1}: ${key}`); out += next; }
        joins++;
      } else if (/-$/.test(out)) fail(`line ${lines[i - 1].n} ends with a hyphen after no word`);
      else if (/—$/.test(out) || /^—/.test(next)) { out += next; joins++; dashes.push(`${lines[i].n}: ${out.slice(-next.length - 12, out.length - next.length)}|${next.slice(0, 14)}`); } else out += ` ${next}`;
    }
    return out;
  };

  // The parts.
  const parts = [];
  let part = null;
  let section = 0;
  let pending = 0;
  let labelWords = 0;
  const open = (i) => {
    const s = SECTIONS[i];
    part = { id: s.id, label: s.label, blocks: [] };
    parts.push(part);
    if (s.under) part.blocks.push({ k: 'h', level: 3, text: s.under });
  };
  open(0);
  for (const u of units) {
    const first = u.lines[0];
    if (u.kind === 'head') {
      const h = headAt.get(first.n);
      if (!pending) {
        if (h.section !== section + 1) fail(`heading out of order at line ${first.n}`);
        section++;
        open(section);
        pending = SECTIONS[section].heads.length;
      } else if (h.section !== section) fail(`heading of another section at line ${first.n}`);
      pending--;
      if (!(SECTIONS[section].under && h.last)) labelWords += countWords(first.s);
      continue;
    }
    if (pending) fail(`text among the headings at line ${first.n}`);
    if (u.kind === 'title') part.blocks.push({ k: 'h', level: 3, text: titleAt.get(first.n) });
    else if (u.kind === 'verse') part.blocks.push({ k: 'v', lines: u.lines.map((l) => l.s) });
    else part.blocks.push({ k: 'p', text: join(u.lines) });
    part.blocks[part.blocks.length - 1].from = first.n;
  }

  // Every word broken at a line end has been decided, and the tables hold nothing else.
  if (undecided.length) fail(`words broken at a line end and not decided:\n  ${undecided.join('\n  ')}`);
  for (const k of [...broken, ...compound]) if (!seenBreaks.has(k)) fail(`no word breaks as ${k}`);
  for (const k of broken) if (compound.has(k)) fail(`${k} is in both tables`);

  // The structure.
  if (parts.length !== SECTIONS.length || pending) fail(`expected ${SECTIONS.length} sections, found ${parts.length}`);
  const stanzas = [];
  for (const p of parts) {
    if (p.blocks.length !== BLOCKS[p.id]) fail(`${p.id} has ${p.blocks.length} blocks, expected ${BLOCKS[p.id]}`);
    const verse = p.blocks.filter((b) => b.k === 'v');
    if (p.id === 's5') verse.forEach((b) => stanzas.push(b.lines.length));
    else if (verse.length) fail(`verse in ${p.id}`);
    const heads = p.blocks.filter((b) => b.k === 'h').map((b) => b.text).join('|');
    const want = p.id === 's4' ? 'The Infernal Bridegroom' : p.id === 's5' ? TITLES.map((t) => t[2]).join('|') : '';
    if (heads !== want) fail(`${p.id}: headings ${JSON.stringify(heads)}`);
    for (const b of p.blocks) {
      for (const t of b.k === 'v' ? b.lines : [b.text]) {
        if (!ALLOWED.test(t)) fail(`${p.id}, line ${b.from}: a character that should not be there: ${JSON.stringify(t.replace(/[A-Za-z0-9 .,;:!?’‘“”—–\-àâçèéêëïôùûœÀÉ]/g, ''))}`);
        if (/ {2,}|^ | $/.test(t)) fail(`${p.id}, line ${b.from}: spacing`);
        if (/ [,;:?]|[a-z] !|[^ .]\.\.|\.\.[^ ]| \.[A-Za-z]/.test(t)) fail(`${p.id}, line ${b.from}: a space before a stop, or dots run together: ${JSON.stringify(t.slice(0, 60))}`);
        if (/\d/.test(t) && t !== 'April–August, 1873.') fail(`${p.id}, line ${b.from}: a figure`);
        if (/-( |$)|(^| )-/.test(t)) fail(`${p.id}, line ${b.from}: a loose hyphen`);
      }
    }
  }
  const vlines = stanzas.reduce((a, b) => a + b, 0);
  if (stanzas.length !== VERSE_COUNT.blocks || vlines !== VERSE_COUNT.lines || stanzas.join() !== STANZAS.join()) fail(`the verse is ${stanzas.length} stanzas and ${vlines} lines: ${stanzas.join()}`);
  const opening = parts[0].blocks[0];
  const close = parts[8].blocks[parts[8].blocks.length - 1];
  if (opening.k !== 'p' || !opening.text.startsWith('Once on a time, if I remember rightly,')) fail('the piece does not open as expected');
  if (close.k !== 'p' || close.text !== 'April–August, 1873.') fail('the piece does not close with its date');

  // Quotation marks pair off within each paragraph, except where a
  // speech runs over several paragraphs and each opens with the mark.
  const quotes = [];
  for (const p of parts) p.blocks.forEach((b, i) => {
    if (b.k !== 'p') return;
    const o = (b.text.match(/“/g) || []).length;
    const c = (b.text.match(/”/g) || []).length;
    if (o !== c) quotes.push(`${p.id}[${i}] ${o} opened, ${c} closed`);
  });

  // Nothing lost: the words of the blocks are the words of the lines kept,
  // less the headings that went into labels, less one for each pair of
  // half-words (or words about a dash) joined at a line end.
  let lineWords = 0;
  for (const s of text.values()) lineWords += countWords(s);
  const words = parts.reduce((a, p) => a + blockWords(p.blocks), 0);
  if (words !== lineWords - labelWords - joins) fail(`${words} words in the parts; ${lineWords} in the lines, less ${labelWords} in headings and ${joins} joined`);

  if (report) Object.assign(report, { text, pageOf, units, dashes, quotes, joins, seenBreaks: [...seenBreaks], fixes: FIXES.length, glue: GLUE.length, breaks: BREAK.length, junk: JUNK.length, heads: HEADS.length });
  for (const p of parts) for (const b of p.blocks) delete b.from;
  return parts;
}

// The Dial prints no translator's name: the piece opens with a note headed
// "Translator's Note" and signed by no one, and the index of the volume
// names only Rimbaud. So `translator` is null, and the note says who is
// thought to have made it.
export function run() {
  return writeText('rimbaud', {
    author: 'Arthur Rimbaud',
    title: 'A Season in Hell',
    translator: null,
    year: 1920,
    verse: false,
    source: { name: 'Internet Archive', url: 'https://archive.org/details/sim_dial_1920-07_69' },
    note: 'This translation was first printed, unsigned, in *The Dial* (New York) in July 1920, and is attributed to J. S. Watson, Jr., one of the magazine’s owners. In the chapter “Alchemy of the Word” Rimbaud quotes seven of his own poems, and the translation leaves them in French. This text was read by machine from a scan of the magazine. It was then read through against the scan, but some misread words may remain.',
  }, build());
}
