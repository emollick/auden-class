// Mozart, Don Giovanni: the English of the Italian and English libretto
// published by Fred Rullman, New York, for the Metropolitan Opera House
// ("Don Giovanni (Don Juan), a grand opera in two acts"). The libretto
// names no translator and bears no date. Internet Archive,
// dongiovannidonju00moza: raw OCR text of a scan. The Italian stands on
// the left-hand pages and the English on the right-hand pages; only the
// English is taken. This printing ends with the Don's descent; it has no
// last scene. See notes/don-giovanni.md.

import { writeText, roman } from '../lib/gutenberg.mjs';
import { sourceLines, mend, leaveOut, englishPages, englishLines, reorder, joinLines, glue, tidy, lastChecks } from './orpheus-giovanni-flute.lib.mjs';

const ID = 'don-giovanni';
const FILE = 'ia_dongiovannidonju00moza_djvu.txt';
const URL = 'https://archive.org/download/dongiovannidonju00moza/dongiovannidonju00moza_djvu.txt';
const FROM = 181; // the head of the first Italian page
const TO = 7625; // 'THE END.'

// The running heads of the pages.
const HEAD = { it: /^DON GIOVANNI\.?$/, en: /^DON JUAN$/ };

// ---- the tables ---------------------------------------------------------
// All line numbers are lines of the source file.

// Words the machine misread, mended after the page images:
// [line, as the file has it, as the book prints it].
const FIXES = [
  // running heads
  [810, 'DON GIOVAN N I', 'DON GIOVANNI'],
  [980, 'DON J U A N', 'DON JUAN'],
  [1485, 'D OX G I O V A N N I', 'DON GIOVANNI'],
  [1859, 'DON CIO VA NNI', 'DON GIOVANNI'],
  [2020, 'DO X J U A X', 'DON JUAN'],
  [2562, 'DON GIOIA N NI', 'DON GIOVANNI'],
  [2934, 'D O N G I OV A N N I', 'DON GIOVANNI'],
  [3267, 'DON GIOVA ;Y Ar /', 'DON GIOVANNI'],
  [4994, 'DON GIOVA N N I', 'DON GIOVANNI'],
  // the text
  [353, 'to. change', 'to change'],
  [402, 'Lepo', 'Lepo-'],
  [419, 'tiy', 'try'],
  [428, '{They', '(They'],
  [428, 'falls),', 'falls).'],
  [450, 'lozv', 'low'],
  [654, '( Threatening h im ) .', '(Threatening him).'],
  [668, 'fly-', 'fly'],
  [765, 'mystery -', 'mystery—'],
  [1002, '( Threatening him) .', '(Threatening him).'],
  [1022, 'T have', 'I have'],
  [1141, 'her,', 'her.'],
  [1445, "ing' , • • ,", 'ing,'],
  [1476, 'JuaN', 'Juan'],
  [1784, 'and.', 'and,'],
  [1787, 'car-', 'can-'],
  [2080, '•Zerlina', 'Zerlina'],
  [2085, '"ove', 'love'],
  [2118, "'Why", 'Why'],
  [2173, '•me', 'me'],
  [2392, 'rind', 'find'],
  [2502, '1 shall', 'I shall'],
  [2524, 'Wrhat', 'What'],
  [2548, 'alt n -,', 'alone,'],
  [2741, 'OCTAVIO', 'Octavio'],
  [2756, 'OCTAVTO', 'Octavio'],
  [2788, 'foe, .', 'foe,'],
  [2799, 'Tis vengeance', "'Tis vengeance"],
  [2812, '{Exit', '(Exit'],
  [2843, '{Exit', '(Exit'],
  [2872, 'them —', 'them,—'],
  [2873, 'leadmg', 'leading'],
  [2892, 'well.', 'well,'],
  [3151, 'ihe', 'the'],
  [3495, 'J nd,', 'And,'],
  [3831, 'Palaee', 'Palace'],
  [3921, '(£o. Leporello)', '(to Leporello)'],
  [4171, "Zerlina '", 'Zerlina'],
  [4212, 'zvith Iiis Sivord', 'with his Sword'],
  [4221, 'Seining', 'Seizing'],
  [4475, '4 Scene', 'A Scene'],
  [4527, '{Gives', '(Gives'],
  [4539, "'to it", 'to it'],
  [4563, 'I eat-', 'I eat—'],
  [4868, '(aside) .', '(aside).'],
  [4988, '(Aside)', '(Aside).'],
  [5231, 'sight, _', 'sight,'],
  [5237, 'folìozved by a crozvd', 'followed by a crowd'],
  [5247, '«my', 'my'],
  [5313, 'there — ■', 'there—'],
  [5552, '{Giving', '(Giving'],
  [5555, '{Giving', '(Giving'],
  [5567, '{Beating', '(Beating'],
  [5577, '{Beating', '(Beating'],
  [5581, 'rufiian', 'ruffian'],
  [5584, '{Exit', '(Exit'],
  [5589, '{crying', '(crying'],
  [5685, '<top', 'stop'],
  [5701, '{Aside', '(Aside'],
  [5704, '{Aloud', '(Aloud'],
  [6037, 'zvall', 'wall'],
  [6237, 'Tis he', "'Tis he"],
  [6590, '{reads', '(reads'],
  [6594, 'azvaiting', 'awaiting'],
  [6741, 'JVTy', 'My'],
  [6940, 'OCTAVIO', 'Octavio'],
  [6951, '{Exit', '(Exit'],
  [6953, 'SCEN.E XUL', 'SCENE XIII.'],
  [7018, '4vell', 'well'],
  [7069, '(She kneels)', '(She kneels).'],
  [7330, 'Open', 'Open!'],
  [7336, '(going)', '(going).'],
  [7349, 'Leporello^', 'Leporello,'],
  [7378, 'Tis some', "'Tis some"],
  [7587, 'No. obstinate', 'No, obstinate'],
  [7593, '{Exit),', '(Exit).'],
  [7595, '{seised', '(seized'],
];
// The printer's own slips, which the page images show in the book itself,
// put right where the word meant is beyond doubt.
const MISPRINTS = [
  [664, 'Octavio. and', 'Octavio, and'],
  [754, 'on oath', 'an oath'],
  [1063, 'Do your hear', 'Do you hear'],
  [2430, 'not row depart', 'not now depart'],
  [2853, 'air be moves', 'air he moves'],
  [5961, 'gtntlemen', 'gentlemen'],
  [5967, 'dont', "don't"],
  [6607, "Heaven's!", 'Heavens!'],
];
// The words on the statue stand in single inverted commas, and the book
// repeats the opening comma at the head of their second line, as the old
// printers did. The repeated mark is dropped.
const REPEATED_MARKS = [
  [6594, "'Am now", 'Am now'],
];
// Lines left out: page numbers (some misread) and the stray marks x and X
// that the machine made of specks at the foot of a page.
const LEFT_OUT = [
  [469, 'x'], [804, 'X'], [807, 'X'], [1147, '10'], [1312, '11'], [1479, 'x'], [1482, '12'], [1681, '13'],
  [1856, '14'], [2023, '15'], [2196, '16'], [2382, '17'], [2559, '18'], [2738, '19'], [2931, '20'], [3095, '21'],
  [3261, 'x'], [3264, '22'], [3442, '23'], [3616, 'X'], [3619, '24'], [3792, '25'], [3965, '26'], [4136, '11'],
  [4296, '28'], [4467, '29'], [4644, '30'], [4812, '31'], [4991, '32'], [5176, '33'], [5355, '34'], [5544, '35'],
  [5720, '36'], [5890, '37'], [6066, '38'], [6232, '39'], [6409, '40'], [6584, '41'], [6765, '42'], [6937, '43'],
  [7117, '44'], [7297, '45'], [7465, '46'], [7552, '47'],
];
// Where the machine read the columns of a page in the wrong order: lines
// a to b are put back before line c. [a, b, c]
const MOVES = [
  [2776, 2776, 2773], [3568, 3568, 3565], [4988, 4988, 4982], [7024, 7024, 7021], [7327, 7330, 7392], [7336, 7336, 7333],
];
// Lines that belong to the end of the line before: verse too long for the
// column and turned over, and names or directions broken in two.
const JOINS = [
  1378, 1381, 1386, 1445, 2059, 2119, 2499, 2504, 2521, 2528, 2531, 2540, 2551, 2750, 2784, 2788,
  2795, 2798, 2801, 2804, 2807, 2810, 2834, 2838, 2841, 2892, 3115, 3119, 3175, 3186, 3198, 3201,
  3256, 3840, 3849, 4212, 4214, 4280, 4548, 4563, 4584, 4893, 4899, 4916, 4935, 4938, 5202, 5249,
  5274, 5276, 5297, 5301, 5307, 5313, 5316, 5319, 5322, 5582, 5623, 5642, 5648, 5654, 5687, 5932,
  6046, 6049, 6054, 6057, 6062, 6260, 6286, 6299, 6343, 6346, 6357, 6593, 6745, 6946, 6949, 7017,
];
// Of the lines joined, in verse or in prose, those joined to a hyphen that stays.
const KEEP_HYPHEN = [
  2101,
];
// Directions the book prints without brackets (the scene, the persons of
// a scene): [first line, last line] of each.
const DIRECTIONS = [
  [335, 337], [339, 340], [358, 358], [402, 403], [664, 665], [761, 761],
  [1043, 1044], [1409, 1410], [1412, 1413], [1457, 1457], [1803, 1803], [2072, 2072],
  [2139, 2140], [2847, 2847], [3151, 3152], [3154, 3154], [3228, 3229], [3571, 3572],
  [3598, 3598], [3831, 3831], [3832, 3836], [3904, 3905], [4475, 4477], [4479, 4479],
  [4627, 4627], [4921, 4921], [5237, 5238], [5331, 5331], [5587, 5587], [5677, 5677],
  [5679, 5679], [5904, 5904], [5929, 5929], [6034, 6035], [6037, 6038], [6703, 6703],
  [6704, 6704], [6955, 6956], [6958, 6958], [7060, 7060], [7411, 7411],
];
// The recitative set as prose in the book: [first line, last line] of
// each stretch. Everything else is verse, a printed line to a line.
const PROSE = [
  [451, 713], [765, 1039], [1063, 1351], [1397, 1404], [1460, 1796], [1805, 2030],
  [2075, 2114], [2143, 2182],
];
// Lines that begin a new block of verse, or a new paragraph, inside a
// speech (the book leaves a space above them).
const STANZAS = [
  1370, 1404, 1793, 5214, 5656, 6016, 6596, 6757,
];
// Brackets: the book prints directions in italic and asides (spoken) in
// roman, and the OCR text does not tell them apart. A bracketed phrase is
// taken as spoken when it has a word of the first or second person or
// ends with ! or ?, else as a direction; these tables name the lines on
// which brackets open that the rule gets wrong.
const SPOKEN = [
  369, 1039,
];
const DIRECTED = [
];
// How many bracketed phrases there are inside the speeches, and how many of
// them are spoken: every one was looked at on the page images.
const BRACKETS = { all: 77, spoken: 11 };
// Passages the book marks as left out in performance, with inverted
// commas down the margin: [first line, last line]. The marks are dropped.
const OMITTED = [
  [1784, 1796], [2108, 2114], [2815, 2826], [2830, 2841],
];

// The names over the speeches, and the words that stand in their place
// when several sing together.
const NAMES = ['Juan', 'Leporello', 'Elvira', 'Masetto', 'Zerlina', 'Anna', 'Octavio', 'Commandant', 'Chorus', 'All', 'Together'];
const NAME = `(?:${NAMES.join('|')})`;
// A name stands alone on its line, with no stop; a direction may follow it in brackets.
const SPEAKER = new RegExp(`^(${NAME}(?:, ${NAME})*(?:,? and ${NAME})?)(?: \\((.+)\\)\\.?)?$`);
// "A 2.", "A 3.", "A 4." (in italic in the book) stand over what two,
// three or four sing together: before the singers' names, or in their place.
const TOGETHER = /^A [234]\.$/;
// Lines of verse of one word, which the script would else take for a name it does not know.
const ONE_WORD = [2773];
// The titles the book sets over the musical numbers, in small capitals
// (which the machine read now as capitals, now as small letters).
const NUMBERS = { air: 'Air.', duet: 'Duet.', trio: 'Trio.', quartett: 'Quartett.', sestette: 'Sestette.', finale: 'Finale.', 'recitative and duet': 'Recitative and Duet.' };
const numberOf = (text) => NUMBERS[text.replace(/\.$/, '').toLowerCase()] || null;
// The scenes of the two acts as the book numbers them. The second act
// has no Scene XI, in the Italian as in the English: X is followed by XII.
const upTo = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const SCENES = [upTo(1, 17), [...upTo(1, 10), ...upTo(12, 15)]];
// Words that show a bracketed phrase to be spoken.
const FIRST_PERSON = /\b(I|I'm|I'll|I've|I'd|me|my|mine|we|us|our|you|your|thee|thou|thy|thine)\b/;

const ranges = (table, what) => {
  const set = new Set();
  for (const [a, b] of table) {
    if (!(a <= b)) throw new Error(`${ID}: ${what}: a range runs backwards, ${a} to ${b}`);
    for (let n = a; n <= b; n++) {
      if (set.has(n)) throw new Error(`${ID}: ${what}: line ${n} is in two ranges`);
      set.add(n);
    }
  }
  return set;
};

export function build() {
  const line = sourceLines(FILE, URL);
  if (line[FROM] !== 'DON GIOVANNI.' || line[TO] !== 'THE END.') throw new Error(`${ID}: the libretto does not lie where it did in the file`);
  mend(ID, line, FIXES);
  mend(ID, line, MISPRINTS, 'misprint');
  mend(ID, line, REPEATED_MARKS, 'repeated mark');
  leaveOut(ID, line, LEFT_OUT);
  const pages = englishPages(ID, line, { from: FROM, to: TO, head: HEAD });
  if (pages.length !== 22) throw new Error(`${ID}: ${pages.length} English pages, expected 22`);
  const stream = joinLines(ID, reorder(ID, englishLines(line, pages), MOVES), JOINS, KEEP_HYPHEN);

  const dirStart = new Map(DIRECTIONS.map(([a, b]) => [a, b]));
  const prose = ranges(PROSE, 'PROSE');
  ranges(OMITTED, 'OMITTED');
  const omitted = new Map(OMITTED.flatMap((r) => upTo(r[0], r[1]).map((n) => [n, r]))); // line -> its passage
  const oneWord = new Set(ONE_WORD);
  const keep = new Set(KEEP_HYPHEN.filter((n) => !JOINS.includes(n))); // the rest were used in joining
  const stanza = new Set(STANZAS);
  const spoken = new Set(SPOKEN);
  const directed = new Set(DIRECTED);
  const used = new Set();

  const parts = [];
  const src = new Map(); // block -> the source lines it came from
  const brackets = []; // every bracketed phrase and what it was taken for
  let part = null;
  let scenes = 0;
  let speaker = null;
  let ends = 0;
  const push = (b, ns) => { part.blocks.push(b); src.set(b, ns); return b; };
  const closeAct = () => {
    if (part && scenes !== SCENES[parts.length - 1].length) throw new Error(`${ID}: act ${parts.length} has ${scenes} scenes, expected ${SCENES[parts.length - 1].length}`);
  };
  // whole: a direction from the table DIRECTIONS, which may have a
  // bracketed phrase inside it, or stand in brackets altogether.
  const direction = (text, ns, whole = false) => {
    let t = tidy(text);
    if (whole) {
      const m = t.match(/^\((.*)\)$/);
      if (m && !/[()]/.test(m[1])) t = m[1];
    } else if (/[()]/.test(t)) t = '';
    if (!t) throw new Error(`${ID}: direction not understood, line ${ns[0]}: ${JSON.stringify(text)}`);
    push({ k: 'd', text: t }, ns);
  };
  // Is the bracketed phrase that opens on line n spoken (roman in the
  // book) or a direction (italic)?
  const isSpoken = (inside, n) => {
    let is = FIRST_PERSON.test(inside) || /[!?]$/.test(inside);
    let why = 'rule';
    if (spoken.has(n)) { is = true; why = 'table'; used.add(n); }
    if (directed.has(n)) { is = false; why = 'table'; used.add(n); }
    brackets.push({ n, inside, spoken: is, why });
    return is;
  };
  // The words of a run of lines under one speaker: [{ n, ns, text }].
  // Bracketed directions are taken out and stand between the pieces of
  // speech; asides keep their brackets.
  const MARK = /\u0003(\d+)\u0004/g;
  const unmark = (t) => t.split('\n').map((x) => x.replace(MARK, '')).reduce((x, y) => glue(x, y));
  const say = (run, asProse) => {
    if (!speaker) throw new Error(`${ID}: words with no speaker, line ${run[0].n}: ${run[0].text}`);
    const ns = run.flatMap((l) => l.ns);
    // the line on which each bracket opens
    const opens = [];
    for (const l of run) for (const c of l.text) if (c === '(') opens.push(l.n);
    // one string: prose glued, verse with each line marked by its number
    let whole;
    if (asProse) {
      whole = run[0].text;
      for (const l of run.slice(1)) { whole = glue(whole, l.text, keep.has(l.n)); keep.delete(l.n); }
    } else whole = run.map((l) => `\u0003${l.n}\u0004${l.text}`).join('\n');
    // cut at the brackets
    const pieces = [];
    let rest = whole;
    let held = '';
    let k = 0;
    for (;;) {
      const at = rest.indexOf('(');
      if (at < 0) break;
      const shut = rest.indexOf(')', at);
      const again = rest.indexOf('(', at + 1);
      const n = opens[k++];
      if (shut < 0 || (again >= 0 && again < shut)) throw new Error(`${ID}: the bracket opened at line ${n} is not shut`);
      const inside = unmark(rest.slice(at + 1, shut));
      if (isSpoken(inside, n)) {
        held += rest.slice(0, shut + 1).replace('(', '\u0001').replace(')', '\u0002');
        rest = rest.slice(shut + 1);
        continue;
      }
      let after = rest.slice(shut + 1);
      // the stop the book sets after the bracket belongs to the direction
      let stop = '';
      const m = after.match(/^ ?([.,])(?=$|\n| )/);
      if (m) { stop = /[.!?]$/.test(inside) || m[1] === ',' ? '' : '.'; after = after.slice(m[0].length); }
      pieces.push({ text: held + rest.slice(0, at) });
      pieces.push({ d: inside + stop });
      held = '';
      rest = after;
    }
    pieces.push({ text: held + rest });
    let block = null;
    let last = run[0].n;
    const begun = new Set();
    for (const p of pieces) {
      if (p.d !== undefined) { direction(p.d, ns); block = null; continue; }
      if (/\)/.test(p.text)) throw new Error(`${ID}: a bracket shut and never opened, lines ${ns[0]} to ${ns[ns.length - 1]}`);
      const text = p.text.replace(/\u0001/g, '(').replace(/\u0002/g, ')');
      if (asProse) {
        const t = tidy(text);
        if (t) push({ k: 'p', text: t }, ns);
        continue;
      }
      for (const sub of text.split('\n')) {
        const m = sub.match(/^\u0003(\d+)\u0004/);
        if (m) last = Number(m[1]);
        const t = tidy(sub.replace(MARK, ''));
        if (!t) continue;
        if (!block || (stanza.has(last) && !begun.has(last) && begun.size)) block = push({ k: 'v', lines: [] }, []);
        begun.add(last);
        block.lines.push(t);
        src.get(block).push(last);
      }
    }
    for (const l of run) stanza.delete(l.n);
  };

  let run = [];
  const flush = () => {
    if (!run.length) return;
    // prose and verse may follow each other under one name
    let from = 0;
    for (let i = 1; i <= run.length; i++) {
      if (i === run.length || prose.has(run[i].n) !== prose.has(run[from].n) || (prose.has(run[i].n) && stanza.has(run[i].n))) {
        say(run.slice(from, i), prose.has(run[from].n));
        from = i;
      }
    }
    run = [];
  };

  for (let i = 0; i < stream.length; i++) {
    const l = stream[i];
    const where = `line ${l.n}`;
    let text = l.text;
    let m;
    if ((m = text.match(/^ACT (I|II)\.$/))) {
      flush();
      closeAct();
      const n = roman(m[1]);
      if (n !== parts.length + 1) throw new Error(`${ID}: act ${n} out of order, ${where}`);
      part = { id: `act-${n}`, label: `Act ${n}`, blocks: [] };
      parts.push(part);
      scenes = 0; speaker = null;
      continue;
    }
    if (!part) throw new Error(`${ID}: text before the first act, ${where}: ${text}`);
    if ((m = text.match(/^SCENE ([IVX]+)\.$/))) {
      flush();
      const n = roman(m[1]);
      if (n !== SCENES[parts.length - 1][scenes]) throw new Error(`${ID}: ${part.label}, scene ${n} out of order, ${where}`);
      scenes++;
      push({ k: 'h', level: 3, text: `Scene ${n}` }, [l.n]);
      speaker = null;
      continue;
    }
    if (/^END OF ACT I\.$/i.test(text) || text === 'THE END.') { flush(); ends++; continue; }
    if (!scenes) throw new Error(`${ID}: text before the first scene of ${part.label}, ${where}`);
    if (dirStart.has(l.n)) {
      // a direction without brackets: it runs to the last line the table names
      flush();
      const last = dirStart.get(l.n);
      const ns = [...l.ns];
      while (ns[ns.length - 1] < last) {
        i++;
        if (!stream[i] || stream[i].n > last || dirStart.has(stream[i].n)) throw new Error(`${ID}: the direction at ${where} does not run to line ${last}`);
        text = glue(text, stream[i].text, keep.has(stream[i].n));
        keep.delete(stream[i].n);
        ns.push(...stream[i].ns);
      }
      if (ns[ns.length - 1] !== last) throw new Error(`${ID}: the direction at ${where} does not end at line ${last}`);
      dirStart.delete(l.n);
      direction(text, ns, true);
      continue;
    }
    if (numberOf(text)) { flush(); direction(numberOf(text), l.ns); continue; }
    if (TOGETHER.test(text)) {
      flush();
      const next = stream[i + 1];
      if (next && SPEAKER.test(next.text)) direction(text, l.ns); // the names follow
      else { speaker = text; push({ k: 's', text }, l.ns); } // it stands for the names
      continue;
    }
    if ((m = text.match(SPEAKER))) {
      flush();
      speaker = m[1].toUpperCase();
      push({ k: 's', text: speaker }, l.ns);
      if (m[2]) direction(m[2], l.ns);
      continue;
    }
    if (/^[A-Z][a-z]+(?: (?:and|[A-Z][a-z]+))*$/.test(text)) {
      if (!oneWord.delete(l.n)) throw new Error(`${ID}: this looks like a name that is not provided for, ${where}: ${text}`);
    }
    if (omitted.has(l.n)) {
      // The book's marks down the margin of a passage left out in
      // performance: one before each line (a line turned over has none),
      // and in some places one after the last word of the passage.
      if (!/^"/.test(text)) throw new Error(`${ID}: ${where} should begin with the mark of an omitted passage: ${text}`);
      text = text.slice(1);
      const range = omitted.get(l.n);
      const next = stream[i + 1];
      if (/"$/.test(text)) {
        if (next && omitted.get(next.n) === range) throw new Error(`${ID}: a closing mark inside the omitted passage, ${where}`);
        text = text.slice(0, -1);
      }
      if (/"/.test(text)) throw new Error(`${ID}: a mark inside a line of an omitted passage, ${where}: ${text}`);
      for (const n of l.ns) omitted.delete(n);
    }
    run.push({ n: l.n, ns: l.ns, text });
  }
  flush();
  closeAct();

  if (parts.length !== 2) throw new Error(`${ID}: expected 2 acts, found ${parts.length}`);
  if (ends !== 2) throw new Error(`${ID}: ${ends} act endings, expected 2`);
  if (dirStart.size) throw new Error(`${ID}: directions not found at lines ${[...dirStart.keys()].join(', ')}`);
  if (stanza.size) throw new Error(`${ID}: nothing begins at lines ${[...stanza].join(', ')} (STANZAS)`);
  if (keep.size) throw new Error(`${ID}: no hyphen was kept at lines ${[...keep].join(', ')} (KEEP_HYPHEN)`);
  const unmet = [...omitted.keys()].filter((n) => line[n]);
  if (unmet.length) throw new Error(`${ID}: lines of omitted passages not met: ${unmet.join(', ')}`);
  if (oneWord.size) throw new Error(`${ID}: no line of one word at lines ${[...oneWord].join(', ')} (ONE_WORD)`);
  for (const n of [...spoken, ...directed]) if (!used.has(n)) throw new Error(`${ID}: no bracket opens at line ${n} (SPOKEN or DIRECTED)`);
  lastChecks(ID, parts, { allow: /^[A-Za-z1234 ,.;:!?'"()—-]+$/ });
  // No inverted comma of the omitted passages may be left, and no line may end in a hyphen.
  for (const p of parts) for (const b of p.blocks) for (const t of b.k === 'v' ? b.lines : [b.text]) {
    if (/"/.test(t)) throw new Error(`${ID}: a double inverted comma left in the text: ${t}`);
    if (/-$/.test(t)) throw new Error(`${ID}: a line ends in a hyphen: ${t}`);
  }
  // The beginning and the end, and how many brackets were taken each way.
  const first = parts[0].blocks;
  const lastBlocks = parts[1].blocks;
  const last = lastBlocks[lastBlocks.length - 1];
  if (first[0].text !== 'Scene 1' || !first[1].text.startsWith('A Square.') || first[3].text !== 'LEPORELLO' || first[4].lines[0] !== "Thus I'm tortured night and day,") throw new Error(`${ID}: the libretto does not begin as expected`);
  if (parts[1].blocks[1].text.slice(0, 8) !== 'A Scene,' || last.k !== 'v' || last.lines[last.lines.length - 1] !== 'And dread is thy dark doom!' || lastBlocks[lastBlocks.length - 2].text !== 'CHORUS') throw new Error(`${ID}: the libretto does not end as expected`);
  const asides = brackets.filter((x) => x.spoken).length;
  if (brackets.length !== BRACKETS.all || asides !== BRACKETS.spoken) throw new Error(`${ID}: ${brackets.length} brackets, ${asides} of them spoken; expected ${BRACKETS.all} and ${BRACKETS.spoken}`);
  return { parts, src, brackets };
}

export function run() {
  return writeText(ID, {
    author: 'Wolfgang Amadeus Mozart',
    title: 'Don Giovanni',
    translator: null, // not named in the libretto
    year: null, // and it bears no date
    note: 'The English version from the Italian and English libretto that Fred Rullman of New York published for the Metropolitan Opera House. It calls the opera *Don Juan* and gives neither translator nor date. It stops when the Don goes down to hell and leaves out the scene that follows. This text was read by machine from a scan. It was then read through against the scan, but some misread words may remain.',
    verse: false,
    source: { name: 'Internet Archive', url: 'https://archive.org/details/dongiovannidonju00moza' },
  }, build().parts);
}
