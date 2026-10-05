// Comparing what a student wrote from memory with the text.
// The unit of comparison is the word. Case, punctuation and accents are
// ignored; everything else must match.

const LIGATURES = { 'æ': 'ae', 'œ': 'oe', 'ß': 'ss', 'ø': 'o', 'đ': 'd', 'ł': 'l' };

// The British and American spellings of a word are taken as the same word:
// colour and color, centre and center, recognise and recognize.
const SPELLINGS = [
  [/^(un|dis|mis|be|en)?(arb|ard|arm|behavi|cand|clam|clang|col|demean|dol|enam|endeav|fav|ferv|flav|harb|hon|hum|lab|neighb|od|parl|ranc|rig|rum|sav|savi|splend|succ|tum|val|vap|vig)our/, '$1$2or'],
  [/^(cent|theat|somb|lust|sepulch|spect|scept|sab|meag|fib|calib|lit|met|mit)re(s?)$/, '$1er$2'],
  [/^(cent|somb|sepulch|scept|sab|mit)red$/, '$1ered'],
  [/^(def|off|pret|lic)ence(s?)$/, '$1ense$2'],
  [/^(un)?(recogn|real|bapt|agon|sympath|scrutin|civil|tyrann|harmon|author|memor|apolog|organ|character|idol|moral|immortal|canon|symbol|critic|appet|philosoph|syllog|transhuman|bestial|subtil)is(e|ed|es|er|ers|ing|ation)$/, '$1$2iz$3'],
  [/^practis(e|ed|es|ing)$/, 'practic$1'],
  [/^(un|re|dis)?(trav|marv|couns|jew|quarr|canc|lev|mod|rev|shriv|grov|carol|lib|cudg|sniv|driv|tunn|chann|pan|imper|dishev|rav|embow|enam|tramm)ell(ed|ing|er|ers|est|ous|ously|or|ors|ery)$/, '$1$2el$3'],
  [/^(un)?(equ|sign|marsh|riv|tot)all(ed|ing)$/, '$1$2al$3'],
  [/^(worship|kidnap)p(ed|ing|er|ers)$/, '$1$2'],
  [/^grey/, 'gray'],
  [/^plough/, 'plow'],
  [/^(acknowledg|judg)ement/, '$1ment'],
  [/^(ful|in)fil(s?)$/, '$1fill$2'],
  [/^fulfilment/, 'fulfillment'],
  [/^(dist|inst)il(s?)$/, '$1ill$2'],
  [/^(enthral|appal|enrol)(s?)$/, '$1l$2'],
  [/^(skil|wil)ful/, '$1lful'],
  [/^shew/, 'show'],
  [/^burthen/, 'burden'],
  [/^ecstacy$/, 'ecstasy'],
  [/^connexion/, 'connection'],
  [/^waggon/, 'wagon'],
  [/^mould/, 'mold'],
  [/^smoulder/, 'smolder'],
  [/^moult/, 'molt'],
  [/^foet/, 'fet'],
  [/^nought(s?)$/, 'naught$1'],
  [/^behov/, 'behoov'],
  [/^draught/, 'draft'],
  [/^sulph/, 'sulf'],
  [/^enquir/, 'inquir'],
];

export function normWord(w) {
  let s = w.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  s = s.replace(/[æœßøđł]/g, (c) => LIGATURES[c]);
  s = s.replace(/[^a-z0-9]/g, '');
  for (const [re, to] of SPELLINGS) {
    if (re.test(s)) { s = s.replace(re, to); break; }
  }
  return s;
}

// A "chunk" is what stands between two spaces on the page; it is what we
// display. A chunk usually holds one word, but a dash can join two.
export function chunkLine(line) {
  return line.split(/\s+/).filter((c) => c.length > 0);
}

function wordsOfChunk(chunk) {
  return chunk
    .split(/—|–|--+/)
    .map(normWord)
    .filter((w) => w.length > 0);
}

// refLines: array of strings. Returns { chunks: [{raw, line}], words: [{norm, chunk}] }
export function tokenizeLines(lines) {
  const chunks = [];
  const words = [];
  lines.forEach((line, li) => {
    for (const raw of chunkLine(line)) {
      const ci = chunks.length;
      chunks.push({ raw, line: li });
      for (const norm of wordsOfChunk(raw)) words.push({ norm, chunk: ci });
    }
  });
  return { chunks, words };
}

export function tokenizeText(text) {
  return tokenizeLines(text.split(/\r?\n/));
}

// Word alignment by edit distance, with two free moves so that
// "mid-way" and "mid way", or "tomorrow" and "to-morrow", count as the same.
// This builds the table of costs and moves that the alignment is read from.
function table(ref, typed) {
  const n = ref.length;
  const m = typed.length;
  const W = m + 1;
  const cost = new Int32Array((n + 1) * W);
  const move = new Uint8Array((n + 1) * W);
  // moves: 1 eq/sub (diag), 2 del (ref only), 3 ins (typed only),
  //        4 two ref words = one typed, 5 one ref word = two typed
  for (let i = 1; i <= n; i++) { cost[i * W] = i; move[i * W] = 2; }
  for (let j = 1; j <= m; j++) { cost[j] = j; move[j] = 3; }
  for (let i = 1; i <= n; i++) {
    const a = ref[i - 1];
    for (let j = 1; j <= m; j++) {
      const b = typed[j - 1];
      const k = i * W + j;
      let best = cost[(i - 1) * W + (j - 1)] + (a === b ? 0 : 1);
      let mv = 1;
      const del = cost[(i - 1) * W + j] + 1;
      if (del < best) { best = del; mv = 2; }
      const ins = cost[i * W + (j - 1)] + 1;
      if (ins < best) { best = ins; mv = 3; }
      if (i >= 2 && ref[i - 2] + a === b) {
        const c = cost[(i - 2) * W + (j - 1)];
        if (c < best) { best = c; mv = 4; }
      }
      if (j >= 2 && typed[j - 2] + b === a) {
        const c = cost[(i - 1) * W + (j - 2)];
        if (c < best) { best = c; mv = 5; }
      }
      cost[k] = best;
      move[k] = mv;
    }
  }
  return { cost, move, W };
}

// Returns ops in order: {op:'eq'|'sub'|'del'|'ins', r:[refIdx...], t:[typedIdx...]}
export function align(ref, typed) {
  const n = ref.length;
  const m = typed.length;
  const { cost, move, W } = table(ref, typed);
  const ops = [];
  let i = n;
  let j = m;
  while (i > 0 || j > 0) {
    const mv = move[i * W + j];
    if (mv === 1) {
      ops.push({ op: ref[i - 1] === typed[j - 1] ? 'eq' : 'sub', r: [i - 1], t: [j - 1] });
      i--; j--;
    } else if (mv === 2) {
      ops.push({ op: 'del', r: [i - 1], t: [] });
      i--;
    } else if (mv === 3) {
      ops.push({ op: 'ins', r: [], t: [j - 1] });
      j--;
    } else if (mv === 4) {
      ops.push({ op: 'eq', r: [i - 2, i - 1], t: [j - 1] });
      i -= 2; j--;
    } else {
      ops.push({ op: 'eq', r: [i - 1], t: [j - 2, j - 1] });
      i--; j -= 2;
    }
  }
  ops.reverse();
  return { ops, distance: cost[n * W + m] };
}

// How far into the text a script reaches: the number of words of `ref`,
// counted from the first, that `typed` is nearest to. A script that breaks
// off reaches only the words it covers; a whole one reaches them all.
export function reach(ref, typed) {
  const n = ref.length;
  const m = typed.length;
  if (m === 0) return 0;
  const { cost, W } = table(ref, typed);
  let at = 0;
  for (let i = 1; i <= n; i++) if (cost[i * W + m] <= cost[at * W + m]) at = i;
  return at;
}

// The stretch of the text that a script covers: how many of refLines,
// counting to the end of the line where the script breaks off, and how
// many words of the text come after that and were not written.
export function written(refLines, typedText) {
  const ref = tokenizeLines(refLines);
  const typed = tokenizeText(typedText);
  const at = reach(ref.words.map((w) => w.norm), typed.words.map((w) => w.norm));
  if (at === 0) return { lines: 0, restWords: ref.words.length };
  const last = ref.chunks[ref.words[at - 1].chunk].line;
  const restWords = ref.words.filter((w) => ref.chunks[w.chunk].line > last).length;
  return { lines: restWords ? last + 1 : refLines.length, restWords };
}

// Compare typed text with the reference lines.
// Returns:
//   lines: [{ exact, parts: [{kind:'ok'|'missing'|'wrong'|'extra', text, typed?}] }]
//   slips: number of words wrong, missing or added
//   exactLines, totalLines, refWords
export function compare(refLines, typedText) {
  const ref = tokenizeLines(refLines);
  const typed = tokenizeText(typedText);
  const { ops, distance } = align(ref.words.map((w) => w.norm), typed.words.map((w) => w.norm));

  // State of each reference chunk: ok unless one of its words slipped.
  const chunkState = ref.chunks.map(() => ({ bad: false, missing: true, typedChunks: new Set() }));
  // Extra typed chunks, keyed by the reference chunk they come before.
  const extrasBefore = new Map();
  let nextRefWord = 0;
  for (const o of ops) {
    if (o.op === 'ins') {
      const before = nextRefWord < ref.words.length ? ref.words[nextRefWord].chunk : ref.chunks.length;
      const tc = typed.words[o.t[0]].chunk;
      if (!extrasBefore.has(before)) extrasBefore.set(before, new Set());
      extrasBefore.get(before).add(tc);
      continue;
    }
    for (const ri of o.r) {
      const st = chunkState[ref.words[ri].chunk];
      if (o.op === 'eq') st.missing = false;
      if (o.op === 'sub') { st.bad = true; st.missing = false; }
      if (o.op === 'del') st.bad = true;
      for (const ti of o.t) st.typedChunks.add(typed.words[ti].chunk);
    }
    nextRefWord = o.r[o.r.length - 1] + 1;
  }

  const lines = refLines.map(() => ({ exact: true, parts: [] }));
  const pushExtras = (key, lineIdx) => {
    const set = extrasBefore.get(key);
    if (!set || lineIdx < 0) return;
    const text = [...set].sort((a, b) => a - b).map((c) => typed.chunks[c].raw).join(' ');
    lines[lineIdx].parts.push({ kind: 'extra', text });
    lines[lineIdx].exact = false;
  };
  ref.chunks.forEach((chunk, ci) => {
    const line = lines[chunk.line];
    pushExtras(ci, chunk.line);
    const st = chunkState[ci];
    const hasWords = wordsOfChunk(chunk.raw).length > 0;
    if (!hasWords) {
      line.parts.push({ kind: 'ok', text: chunk.raw });
    } else if (!st.bad) {
      line.parts.push({ kind: 'ok', text: chunk.raw });
    } else if (st.missing && st.typedChunks.size === 0) {
      line.parts.push({ kind: 'missing', text: chunk.raw });
      line.exact = false;
    } else {
      const typedText2 = [...st.typedChunks].sort((a, b) => a - b).map((c) => typed.chunks[c].raw).join(' ');
      line.parts.push({ kind: 'wrong', text: chunk.raw, typed: typedText2 });
      line.exact = false;
    }
  });
  if (ref.chunks.length > 0) pushExtras(ref.chunks.length, ref.chunks[ref.chunks.length - 1].line);

  const totalLines = refLines.filter((l) => l.trim().length > 0).length;
  const exactLines = lines.filter((l, i) => refLines[i].trim().length > 0 && l.exact).length;
  return { lines, slips: distance, exactLines, totalLines, refWords: ref.words.length, typedWords: typed.words.length };
}

// The rule for calling a piece known: no more than one word in a hundred
// wrong, left out or put in.
export function allowedSlips(refWords) {
  return Math.floor(refWords / 100);
}

export function passes(result) {
  // An empty page is not a recital.
  if (result.typedWords < result.refWords * 0.5) return false;
  return result.slips <= allowedSlips(result.refWords);
}

// First letters: every word reduced to its initial, punctuation kept.
export function firstLetters(line) {
  return chunkLine(line)
    .map((chunk) => {
      const m = chunk.match(/^([^\p{L}\p{N}]*)([\p{L}\p{N}])(.*?)([^\p{L}\p{N}]*)$/u);
      if (!m) return chunk;
      return m[1] + m[2] + m[4];
    })
    .join(' ');
}

export function countWords(text) {
  const t = text.trim();
  return t ? t.split(/\s+/).length : 0;
}

// The words of a text learned by heart, counted as the comparison counts
// them: two words joined by a dash are two. Takes the lines or the text.
export function comparedWords(text) {
  return tokenizeLines(Array.isArray(text) ? text : text.split(/\r?\n/)).words.length;
}

// Loose matching for short factual answers: "The Rachel", "rachel." and
// "the ship Rachel" should all do for "Rachel".
export function normAnswer(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[æœ]/g, (c) => LIGATURES[c])
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\b(the|a|an|of|st|saint)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function answerMatches(given, accepted) {
  const g = normAnswer(given);
  if (!g) return false;
  return accepted.some((a) => {
    const n = normAnswer(a);
    if (!n) return false;
    if (g === n) return true;
    // the accepted answer appears as whole words inside a longer reply
    return (' ' + g + ' ').includes(' ' + n + ' ') && g.split(' ').length <= n.split(' ').length + 4;
  });
}

// Syllables in a line of English, counted roughly: groups of vowels, less
// the silent endings, plus the commoner pairs of vowels that are sounded
// apart. Good enough to help the ear, not to overrule it.
const SYLL_ODD = Object.fromEntries(`every 2,heaven 2,heavens 2,heavenly 3,flower 2,flowers 2,power 2,powers 2,tower 2,towers 2,bower 2,hour 1,hours 1,our 1,ours 1,fire 1,fires 1,being 2,poem 2,poems 2,poet 2,poets 2,poetry 3,idea 3,ideas 3,quiet 2,people 2,beauty 2,beautiful 3,one 1,once 1,evening 2,different 2,eye 1,eyes 1,lion 2,lions 2,cruel 2,create 2,created 3,creation 3,ruin 2,ruins 2,ruined 2,fluid 2,kindred 2,hundred 2,sacred 2,naked 2,wicked 2,rugged 2,ragged 2,crooked 2,wretched 2,aged 2,blessed 2,learned 2,beloved 3,business 2,science 2,violet 3,diamond 2,memory 3,history 3,mystery 3,misery 3,toward 1,towards 1,forever 3,whatever 3,however 3,whenever 3,wherever 3,somewhere 2,nowhere 2,everywhere 3,something 2,sometimes 2,someone 2,anyone 3,everyone 3,themselves 2,ourselves 2,because 2,machine 2,police 2,real 1,really 2,area 3,ocean 2,shoes 1,goes 1,does 1,doing 2,going 2,seeing 2,trying 2,dying 2,lying 2,flying 2,crying 2,saying 2,playing 2,staying 2`.split(',').map((x) => { const [w, k] = x.split(' '); return [w, Number(k)]; }));
const SYLL_TAIL = /(ful|fully|less|ness|ment|ments|ly|ward|wards|some|like|ship|hood|wife|work|land|time|thing|where|man|men|boy|born|built|fathers?|mothers?)$/;
export function countSyllables(line) {
  const words = line.toLowerCase().replace(/[’'](?=[a-zà-ÿ])/g, '').match(/[a-zà-ÿ]+/g) || [];
  let n = 0;
  for (const word of words) {
    if (SYLL_ODD[word] !== undefined) { n += SYLL_ODD[word]; continue; }
    let w = word.replace(/^fore(?=[^aeiouy])/, 'for');
    // a silent e before a common ending: home-ward, use-ful, noise-less
    const tail = w.match(SYLL_TAIL);
    if (tail && w.length - tail[0].length > 2) {
      const stem = w.slice(0, -tail[0].length);
      if (/[^aeiouy]e$/.test(stem) && !/[^aeiouy]le$/.test(stem)) w = stem.slice(0, -1) + tail[0];
    }
    let k = 0;
    if (w.length > 2 && /[^aeiouy]le$/.test(w)) { k += 1; w = w.slice(0, -2); }
    else if (w.length > 3 && /[^aeiouy]les$/.test(w)) { k += 1; w = w.slice(0, -3); }
    else if (w.length > 4 && /[^aeiouy]led$/.test(w)) { k += 1; w = w.slice(0, -3); }
    else if (w.length > 3 && /[^aeioutd]ed$/.test(w)) w = w.slice(0, -2);
    else if (w.length > 3 && /[^aeiousxzcg]es$/.test(w) && !/[sc]hes$/.test(w)) w = w.slice(0, -2);
    else if (w.length > 2 && /[^aeiouy]e$/.test(w)) w = w.slice(0, -1);
    w = w.replace(/y(?=[aeiou])/g, 'j').replace(/qu/g, 'q').replace(/gu(?=[aeiou])/g, 'g');
    const groups = w.match(/[aeiouyà-ÿ]+/g) || [];
    k += groups.length;
    // pairs of vowels that are usually sounded apart
    k += (w.match(/i[ao]|ua|uou|eing|oing|[^aeiou]ier$|iet|uity$|eous|eo(?!u)/g) || []).filter((m) => !(m === 'io' && /[tscxg]io/.test(w)) && !(m === 'ia' && /[tc]ia[ln]/.test(w))).length;
    n += k === 0 && /[aeiouyà-ÿ]/.test(word) ? 1 : k;
  }
  return n;
}
