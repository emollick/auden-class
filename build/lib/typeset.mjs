// Printers' marks for typewriter ones. The e-texts and the scans give
// " ' and -- where the printed books have “ ” ‘ ’ and —. Nothing else is
// changed, and a text that already has printers' marks comes out as it
// went in.

// Words that begin with an apostrophe. The last is a waiter's word for ham
// and eggs in The Education of Henry Adams.
const ELIDED = new Set(['tis', 'twas', 'twere', 'twill', 'twould', 'twixt', 'neath', 'gainst', 'mid', 'scape', 'scaped', 'scaping', 't', 'amhandheggsir']);

// How a text uses the single mark, by text id.
// 'apostrophes': it has no single quotation marks, so every ' is an apostrophe.
// 'quotes': a ' before a word always opens a quotation (the text has no 'tis).
// Any other text: a ' before a word opens a quotation unless the word is in ELIDED.
export const SINGLE = {
  volpone: 'apostrophes',
  tristan: 'apostrophes',
  phedre: 'apostrophes',
  'magic-flute': 'apostrophes',
  gotterdammerung: 'apostrophes',
  dutchman: 'apostrophes',
  orpheus: 'apostrophes',
  poems: 'apostrophes',
  blake: 'apostrophes',
  baudelaire: 'apostrophes',
  kierkegaard: 'apostrophes',
  'rimbaud-fr': 'apostrophes',
  rilke: 'quotes',
  // the passages cut in their own language (build/tools/original.mjs): German, Italian and French
  // printing has other marks for a quotation, so a single mark is always an apostrophe. Not so in
  // 'o-rilke', which is left out: its only two single marks stand around a play's title, and they
  // stay as the transcription gives them
  'o-baudelaire': 'apostrophes',
  'o-carmen': 'apostrophes',
  'o-don-giovanni': 'apostrophes',
  'o-dutchman': 'apostrophes',
  'o-faust': 'apostrophes',
  'o-fidelio': 'apostrophes',
  'o-gotterdammerung': 'apostrophes',
  'o-magic-flute': 'apostrophes',
  'o-orpheus': 'apostrophes',
  'o-phedre': 'apostrophes',
  'o-traviata': 'apostrophes',
  'o-tristan': 'apostrophes',
};

const SPACE = /\s/;
const WORDCHAR = /[\p{L}\p{N}]/u;
const LETTER = /\p{L}/u;
const OPENERS = '([{—–-‘“';
const STOPS = '.,;:!?…)]}’”';

// `single` is one of the modes above (or undefined). `odd`, if given, collects
// the places where only the count of marks could decide.
export function typeset(s, single, odd) {
  if (typeof s !== 'string' || !/["']|--/.test(s)) return s;
  let out = '';
  let dopen = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '-' && s[i + 1] === '-') {
      let j = i;
      while (s[j] === '-') j++;
      out += j - i >= 4 ? '——' : '—';
      i = j - 1;
      continue;
    }
    if (c !== '"' && c !== "'") {
      if (c === '“') dopen = true;
      if (c === '”') dopen = false;
      out += c;
      continue;
    }
    const p = out[out.length - 1];
    const n = s[i + 1];
    const pS = p === undefined || SPACE.test(p);
    const nS = n === undefined || SPACE.test(n);
    if (c === '"') {
      let open;
      if (pS && !nS) open = true;
      else if (!pS && nS) open = false;
      else if (pS && nS) { open = n === undefined ? false : !dopen; if (odd) odd.push(s.slice(Math.max(0, i - 30), i + 30)); }
      else if (WORDCHAR.test(p) || STOPS.includes(p)) open = false;
      else if (OPENERS.includes(p)) open = true;
      else { open = !dopen; if (odd) odd.push(s.slice(Math.max(0, i - 30), i + 30)); }
      dopen = open;
      out += open ? '“' : '”';
      continue;
    }
    // the single mark
    if (single === 'apostrophes') { out += '’'; continue; }
    const pW = p !== undefined && WORDCHAR.test(p);
    const nL = n !== undefined && LETTER.test(n);
    if (pW) { out += '’'; continue; } // don't, tho', the closing mark after a word
    if (nL) {
      const word = s.slice(i + 1).match(/^\p{L}+/u)[0].toLowerCase();
      out += single !== 'quotes' && ELIDED.has(word) ? '’' : '‘';
      continue;
    }
    if (n !== undefined && /\d/.test(n) && pS) { out += '’'; continue; } // '76
    if (!pS) { out += '’'; continue; } // after a stop or a closing mark
    if (n === '"' || n === '“') { out += '‘'; continue; }
    if (odd) odd.push(s.slice(Math.max(0, i - 30), i + 30));
    out += '’';
  }
  return out;
}

// The blocks of a part, set. Returns how many strings changed.
export function typesetBlocks(blocks, single, odd) {
  let changed = 0;
  for (const b of blocks) {
    if (Array.isArray(b.lines)) {
      b.lines = b.lines.map((l) => { const t = typeset(l, single, odd); if (t !== l) changed++; return t; });
    }
    if (typeof b.text === 'string') {
      const t = typeset(b.text, single, odd);
      if (t !== b.text) changed++;
      b.text = t;
    }
  }
  return changed;
}
