// Words and syllables of a line of verse, by rule of thumb: English, and
// Latin where a text is marked lang "la". The rules are only a first guess:
// wherever a reading gives its own division of a word, that is used instead.

const VOWELS = 'aeiouyàâäáãåèéêëìíîïòóôöõùúûüœæ';
const isVowel = (c) => VOWELS.includes(c);

// Two or three vowels that are usually one sound.
const TEAMS = ['eigh', 'augh', 'ough', 'igh', 'eau', 'ieu', 'iew', 'ai', 'au', 'ay', 'ea', 'ee', 'ei', 'eu', 'ey', 'ie', 'oa', 'oe', 'oi', 'oo', 'ou', 'oy', 'ue', 'ui', 'uy', 'ae', 'œ', 'æ'];
// Consonants that begin a syllable together.
const ONSETS = new Set(['bl', 'br', 'ch', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'kn', 'ph', 'pl', 'pr', 'qu', 'sc', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr', 'tw', 'wh', 'wr', 'sch', 'scr', 'shr', 'spl', 'spr', 'str', 'thr', 'squ', 'gh', 'gn', 'ck']);
// Never divided: they are one sound.
const DIGRAPHS = new Set(['ch', 'sh', 'th', 'ph', 'wh', 'gh', 'ck', 'ng', 'qu']);

// Words the rules get wrong, with their own division.
const KNOWN = {
  something: 'some thing', sometimes: 'some times', somewhere: 'some where', someone: 'some one', somewhat: 'some what',
  nothing: 'noth ing', everything: 'ev ery thing', every: 'ev ery', evening: 'eve ning', heaven: 'heav en', heavens: 'heav ens',
  being: 'be ing', seeing: 'see ing', doing: 'do ing', going: 'go ing', power: 'pow er', flower: 'flow er', flowers: 'flow ers',
  hour: 'hour', hours: 'hours', hourly: 'hour ly', fire: 'fire', fires: 'fires', our: 'our', ours: 'ours',
  people: 'peo ple', little: 'lit tle', beautiful: 'beau ti ful', beauty: 'beau ty', business: 'busi ness',
  poem: 'po em', poet: 'po et', poetry: 'po et ry', poets: 'po ets', quiet: 'qui et', diet: 'di et', science: 'sci ence',
  lion: 'li on', violent: 'vi o lent', violence: 'vi o lence', idea: 'i de a', real: 're al', create: 'cre ate', created: 'cre a ted',
  cruel: 'cru el', fuel: 'fu el', dial: 'di al', trial: 'tri al', giant: 'gi ant', riot: 'ri ot', chaos: 'cha os',
  ocean: 'o cean', creature: 'crea ture', creatures: 'crea tures', nature: 'na ture', eyes: 'eyes', eye: 'eye',
  lovely: 'love ly', lonely: 'lone ly', sometimes2: '', themselves: 'them selves', ourselves: 'our selves', himself: 'him self',
  toward: 'to ward', towards: 'to wards', spirit: 'spir it', spirits: 'spir its', many: 'man y', any: 'an y', very: 'ver y',
  only: 'on ly', over: 'o ver', ever: 'ev er', never: 'nev er', even: 'e ven', into: 'in to', unto: 'un to', upon: 'up on',
  coral: 'cor al', suffer: 'suf fer', father: 'fa ther', mother: 'moth er', other: 'oth er', brother: 'broth er', water: 'wa ter',
  fathom: 'fath om', nymphs: 'nymphs', 'sea-nymphs': 'sea- nymphs',
};
delete KNOWN.sometimes2;

// The letters of a token, with what stands before and after them.
function core(token) {
  const m = token.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u);
  return { lead: m[1], body: m[2], tail: m[3] };
}

function vowelGroups(w) {
  // Returns [start, end) of each sounded vowel group in the lowercased word.
  const groups = [];
  let i = 0;
  const n = w.length;
  while (i < n) {
    const c = w[i];
    const y = c === 'y';
    const vowel = isVowel(c) && !(y && i === 0 && n > 1 && isVowel(w[1]) && w[1] !== 'y') && !(y && i > 0 && isVowel(w[i - 1]) && i + 1 < n && isVowel(w[i + 1]));
    if (!vowel || (c === 'u' && i > 0 && w[i - 1] === 'q')) { i++; continue; }
    let j = i + 1;
    const team = TEAMS.find((t) => w.startsWith(t, i));
    if (team) j = i + team.length;
    // "-tion", "-cious", "-geous", "-tial": the i or e only softens the consonant before it
    const soft = i > 0 && 'tscgx'.includes(w[i - 1]) && w.slice(i).match(/^(io|iou|eou|ia|ie)(?=[nslt])/);
    if (soft && i > 1) j = i + soft[1].length;
    // a vowel on each side of an apostrophe is one sound: "o'er", "e'en", "ta'en"
    if (w[j] === '’' || w[j] === "'") { let k = j + 1; while (k < n && isVowel(w[k])) k++; if (k > j + 1) j = k; }
    groups.push([i, j]);
    i = j;
  }
  if (groups.length > 1) {
    const last = groups[groups.length - 1];
    const lone = last[1] - last[0] === 1;
    const end = w.slice(last[0]);
    // a silent e at the end: "made", "change", "lies"; but not "little", "the", "be"
    if (lone && end === 'e' && !(w.length > 2 && w.endsWith('le') && !isVowel(w[w.length - 3]))) groups.pop();
    else if (lone && end === 'es' && !/(ss|sh|ch|x|z|s|c|g)es$/.test(w)) groups.pop();
    else if (lone && end === 'ed' && !/(t|d)ed$/.test(w)) groups.pop();
  }
  return groups;
}

function splitWord(body) {
  const w = body.toLowerCase();
  if (Object.prototype.hasOwnProperty.call(KNOWN, w)) {
    const parts = KNOWN[w].split(' ');
    const out = [];
    let at = 0;
    for (const p of parts) { out.push(body.slice(at, at + p.length)); at += p.length; }
    if (at < body.length) out[out.length - 1] += body.slice(at);
    return out;
  }
  const groups = vowelGroups(w);
  if (groups.length <= 1) return [body];
  const cuts = [];
  for (let g = 0; g + 1 < groups.length; g++) {
    const a = groups[g][1];
    const b = groups[g + 1][0];
    const cons = w.slice(a, b);
    let at;
    if (cons.length === 0) at = a;
    else if (cons.length === 1) at = a;
    else if (cons.length === 2 && DIGRAPHS.has(cons)) at = a;
    else if (cons.length === 2 && cons[0] === cons[1]) at = a + 1;
    else if (ONSETS.has(cons.slice(-3))) at = b - 3 > a ? b - 3 : a + 1;
    else if (ONSETS.has(cons.slice(-2))) at = b - 2 > a ? b - 2 : a + 1;
    else at = b - 1;
    if (at <= (cuts[cuts.length - 1] || 0)) at = a;
    cuts.push(at);
  }
  const out = [];
  let from = 0;
  for (const c of cuts) { out.push(body.slice(from, c)); from = c; }
  out.push(body.slice(from));
  return out.filter((s) => s.length);
}

// ---- Latin. The hosted Latin spells the consonants j and v, so i and u are
// vowels, except u after q, after ng before a vowel (lingua, sanguis) and in
// suavis, suadeo, suesco. A vowel with two dots over it stands by itself.
const LATIN_VOWELS = 'aeiouyäëïöüæœ';
const isLatinVowel = (c) => LATIN_VOWELS.includes(c);

// [start, end) of each vowel or diphthong of a lowercased Latin word.
export function latinGroups(w) {
  const groups = [];
  const n = w.length;
  let i = 0;
  while (i < n) {
    const c = w[i];
    if (!isLatinVowel(c)) { i++; continue; }
    if (c === 'u' && i > 0 && i + 1 < n && isLatinVowel(w[i + 1])) {
      const p = w[i - 1];
      if (p === 'q' || (p === 'g' && w[i - 2] === 'n') || (i === 1 && p === 's' && /^su(av|ad|as|es|et)/.test(w))) { i++; continue; }
    }
    let j = i + 1;
    const two = w.slice(i, i + 2);
    if (two === 'ae' || two === 'au' || two === 'oe') j = i + 2;
    else if (two === 'eu' && !/^(s$|m$|nt|nd)/.test(w.slice(i + 2))) j = i + 2; // seu, heu, Eurus; but de-us, me-um, e-unt
    else if (two === 'ui' && /^(cui|huic|hui)$/.test(w)) j = i + 2;
    else if (two === 'ei' && /^(dein|deinde|hei|ei)$/.test(w)) j = i + 2;
    groups.push([i, j]);
    i = j;
  }
  return groups;
}

// The consonant sounds of a run of Latin consonants: ch, ph, th, rh, qu and
// (where its u is no vowel) gu are one sound each.
export function latinUnits(cons) {
  const out = [];
  let k = 0;
  while (k < cons.length) {
    const len = ['ch', 'ph', 'th', 'rh', 'qu', 'gu'].includes(cons.slice(k, k + 2)) ? 2 : 1;
    out.push({ at: k, s: cons.slice(k, k + len) });
    k += len;
  }
  return out;
}
export const latinMuteLiquid = (a, b) => /^[lr]$/.test(b) && /^(b|c|d|g|p|t|f|ch|ph|th)$/.test(a);

// Where each syllable of a Latin word begins: one consonant goes with the
// vowel after it, and so do a stop and the l or r after it (pa-tris).
export function latinCuts(w) {
  const groups = latinGroups(w);
  const cuts = [];
  for (let g = 0; g + 1 < groups.length; g++) {
    const a = groups[g][1];
    const u = latinUnits(w.slice(a, groups[g + 1][0]));
    let at = a;
    if (u.length > 1) at = a + u[u.length - (latinMuteLiquid(u[u.length - 2].s, u[u.length - 1].s) ? 2 : 1)].at;
    cuts.push(at);
  }
  return cuts;
}

function splitLatin(body) {
  const cuts = latinCuts(body.toLowerCase());
  const out = [];
  let from = 0;
  for (const c of cuts) { out.push(body.slice(from, c)); from = c; }
  out.push(body.slice(from));
  return out.filter((s) => s.length);
}

// The syllables of one token (a word with its punctuation). A hyphen or an
// apostrophe that joins two words divides them: "sea-change", "o'er" is left whole.
// lang "la" divides by the Latin rules; every other text by the English ones.
export function syllables(token, lang) {
  const { lead, body, tail } = core(token);
  if (!body) return [token];
  const pieces = body.split(/(?<=[-‐–—])/u);
  const out = [];
  for (const piece of pieces) {
    const m = piece.match(/^(.*?)([-‐–—]*)$/u);
    const syl = lang === 'la' ? splitLatin(m[1]) : splitWord(m[1]);
    if (!syl.length) { if (out.length) out[out.length - 1] += m[2]; else out.push(m[2]); continue; }
    syl[syl.length - 1] += m[2];
    out.push(...syl);
  }
  out[0] = lead + out[0];
  out[out.length - 1] += tail;
  return out;
}

// The tokens of a line: what stands between spaces. A dash standing alone goes with the word before it.
// A dash can join two words with no space between them ("said—nothing"),
// and a row then counts them as one word. wordParts gives the letters of
// each as { from, to } in the token: more than one only when a dash stands
// between letters inside it. A mark may then point at a part: word 6.1 is
// what stands before the dash, 6.2 what stands after it.
export function wordParts(tok) {
  const m = tok.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u);
  const end = tok.length - m[3].length;
  const parts = [];
  let from = m[1].length;
  const re = /[^\p{L}\p{N}]*[—–][^\p{L}\p{N}]*/gu;
  re.lastIndex = from;
  for (let x = re.exec(tok); x && x.index < end; x = re.exec(tok)) {
    if (x.index > from && x.index + x[0].length < end) { parts.push({ from, to: x.index }); from = x.index + x[0].length; }
  }
  parts.push({ from, to: end });
  return parts;
}
// the part a word number names: 0 for the whole word, 1 for 6.1, 2 for 6.2
export const partOf = (n) => Math.round((n - Math.floor(n)) * 10);

export function tokens(line) {
  const raw = line.trim().split(/\s+/).filter(Boolean);
  const out = [];
  for (const t of raw) {
    if (!/[\p{L}\p{N}]/u.test(t) && out.length) out[out.length - 1] += ' ' + t;
    else out.push(t);
  }
  return out;
}

// Divide a token by lengths given for it: [3, 3] makes "suf" "fer" of "suffer".
export function divide(token, lengths) {
  const out = [];
  let at = 0;
  for (const n of lengths) { out.push(token.slice(at, at + n)); at += n; }
  if (at < token.length) out[out.length - 1] += token.slice(at);
  if (out.join('') !== token || out.some((s) => !s.length)) throw new Error(`cannot divide "${token}" as ${lengths.join('+')}`);
  return out;
}
