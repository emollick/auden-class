// What is said in a play, from the lines of a plain-text file into blocks.
// Not a book script: the play scripts in the folder above use it through
// pg-shakespeare.mjs or, for Volpone, directly.
//
// How the lines are read:
//  - [Brackets] inside a speech are stage directions and break the speech
//    into blocks.
//  - A line break in the source is either a wrap (the next word would not
//    have fitted in the width the file is wrapped to, or the next line
//    begins with a small letter) or a real break. Wrapped lines are
//    joined; real breaks are kept. What was joined and is too long for one
//    line is a paragraph of prose; everything else is a line of verse.
//  - A speech of one line is verse or prose as its neighbours are.

export const squash = (s) => s.replace(/\s+/g, ' ').trim();
// _italics_ are marks, not text
export const strip = (s) => squash(s.replace(/_/g, ''));
export const len = (s) => [...s].length;
// the words of a string, bare of punctuation, for comparing source and text
export const words = (s) => s.split(/[\s—]+|--/).map((w) => w.replace(/[^\p{L}\p{N}]/gu, '')).filter(Boolean);
// The sources never put a space after a dash, so none is put in where a
// line ends with one.
export const join = (lines) => lines.reduce((a, l) => (/(—|--)$/.test(a) ? a + l : `${a} ${l}`));

function startsLower(s) {
  const m = s.match(/\p{L}/u);
  return !!m && m[0] !== m[0].toUpperCase();
}

// ---- a speech into text and directions --------------------------------

// lines: the lines of a speech, each a string or { text, raw } where text
// is what to read and raw the whole source line (they differ when the
// speaker's name stands at the head of the line).
// keep(inside): true for a bracket that is part of the text, not a direction.
// Returns items: { dir } or { frags: [{ src, raw, li }] } where src is the
// fragment as the source has it and li the number of its line.
export function tokens(lines, at, keep = () => false) {
  const items = [];
  let cur = null;
  let inDir = false;
  let dir = '';
  lines.forEach((line, li) => {
    const raw = typeof line === 'string' ? line : line.raw;
    const src = typeof line === 'string' ? line : line.text;
    let pos = 0; // how far the line has been looked through
    let from = 0; // where the text not yet taken begins
    let lineFrag = null; // the last fragment taken from this line
    let pend = ''; // punctuation standing alone between two directions
    let afterDir = false;
    const text = (piece) => {
      if (afterDir && lineFrag) {
        // "fellow [_to the Page_]. Come" : the stop belongs to the sentence before
        const m = piece.match(/^([.,;:!?]+)(?=\s|$)/);
        if (m) {
          lineFrag.src = lineFrag.src.replace(/\s+$/, '') + m[1];
          piece = piece.slice(m[1].length);
        }
      }
      if (!/[\p{L}\p{N}]/u.test(piece)) {
        if (piece.trim()) pend += piece.trim();
        return;
      }
      if (!cur) {
        cur = { frags: [] };
        items.push(cur);
      }
      lineFrag = { src: pend ? pend + piece.trimStart() : piece, raw, li };
      pend = '';
      cur.frags.push(lineFrag);
    };
    while (pos <= src.length) {
      if (inDir) {
        const close = src.indexOf(']', pos);
        if (close < 0) {
          dir += src.slice(pos) + ' ';
          break;
        }
        dir += src.slice(pos, close);
        items.push({ dir: strip(dir) });
        cur = null;
        inDir = false;
        afterDir = true;
        pos = close + 1;
        from = pos;
        continue;
      }
      const open = src.indexOf('[', pos);
      if (open < 0) {
        text(src.slice(from));
        break;
      }
      const close = src.indexOf(']', open);
      if (close >= 0 && keep(src.slice(open + 1, close))) {
        pos = close + 1; // a bracket that belongs to the text
        continue;
      }
      text(src.slice(from, open));
      inDir = true;
      dir = '';
      pos = open + 1;
      from = pos;
    }
    if (pend) {
      // nothing followed it on its line: it closes what came before
      const last = [...items].reverse().find((it) => it.frags);
      if (!last) throw new Error(`line ${at + li}: punctuation with nothing to belong to: ${raw}`);
      last.frags[last.frags.length - 1].src += pend;
    }
  });
  if (inDir) throw new Error(`line ${at}: a bracket is not closed`);
  return items;
}

// Mark each fragment italic or not (a song or a letter is set in italics)
// and set in or not, and take the underscores out.
export function italics(items, at) {
  let on = false;
  for (const it of items) {
    if (!it.frags) continue;
    for (const f of it.frags) {
      let inside = 0;
      let outside = 0;
      for (const ch of f.src) {
        if (ch === '_') on = !on;
        else if (/[\p{L}\p{N}]/u.test(ch)) on ? inside++ : outside++;
      }
      f.ital = inside > 0 && outside === 0;
      f.text = strip(f.src);
      f.indent = /^\s{2,}\S/.test(f.raw);
    }
  }
  if (on) throw new Error(`line ${at}: italics are not closed`);
}

// ---- one run of text into blocks --------------------------------------

// opts.wrap: the width the source wraps prose to.
// opts.capital: what a full line followed by a capital is when nothing
// else in the run says: 'prose' where the width is kept strictly and no
// name stands at the head of a line, 'verse' otherwise.
export function runBlocks(frags, report, at, opts) {
  const n = frags.length;
  const pair = [];
  for (let i = 0; i < n - 1; i++) {
    const a = frags[i];
    const b = frags[i + 1];
    const full = len(a.raw) + 1 + len(b.raw.trim().split(/\s+/)[0]) > opts.wrap;
    if (a.indent || b.indent) pair.push('B'); // set-in lines are never wrapped
    else if (startsLower(b.text)) pair.push(full ? 'W' : 'T'); // a wrap, or a line turned over
    else pair.push(full ? 'A' : 'B');
  }
  const hasW = pair.includes('W');
  const hasB = pair.includes('B');
  for (let i = 0; i < pair.length; i++) {
    if (pair[i] !== 'A') continue;
    // A full line and then a capital: a long line of verse if it stands
    // among verse, prose that happens to wrap before a capital if it
    // stands among prose.
    if (hasW) pair[i] = 'W';
    else if (hasB || opts.capital === 'verse') pair[i] = 'B';
    else pair[i] = 'W';
    report.fullThenCapital.push({ at: at + frags[i].li, as: pair[i], inMixed: hasB, text: frags[i].text.slice(0, 40) });
  }
  if (hasW && hasB) report.mixed.push({ at: at + frags[0].li, pairs: pair.join(''), text: frags[0].text.slice(0, 40) });
  // what lies between two real breaks
  const chunks = [];
  let c = null;
  for (let i = 0; i < n; i++) {
    if (!c) {
      c = { frags: [], joined: '' };
      chunks.push(c);
    }
    c.frags.push(frags[i]);
    if (i < n - 1) {
      if (pair[i] === 'B') c = null;
      else c.joined += pair[i];
    }
  }
  const blocks = [];
  let verse = null;
  for (const ch of chunks) {
    const text = join(ch.frags.map((f) => f.text));
    const ital = ch.frags.every((f) => f.ital);
    const prose = ch.joined !== '' && len(text) > opts.wrap;
    if (ch.joined) report.joined.push({ at: at + ch.frags[0].li, as: prose ? 'prose' : 'line', how: ch.joined, text: text.slice(0, 40) });
    if (prose) {
      blocks.push({ k: 'p', text, sure: !ital, weight: ch.frags.length });
      verse = null;
      continue;
    }
    // a line; lines that follow one another make a block, but sung or read
    // matter (italic) is kept apart from what is spoken
    if (!verse || verse.ital !== ital) {
      verse = { k: 'v', lines: [], ital, set: false };
      blocks.push(verse);
    }
    verse.lines.push(text);
    if (ch.frags.some((f) => f.indent)) verse.set = true;
  }
  for (const b of blocks) {
    if (b.k !== 'v') continue;
    b.song = b.ital || b.set;
    b.weight = b.lines.length;
    if (b.lines.length > 1) b.sure = !b.song;
    else if (!b.song) {
      // one line by itself: its neighbours decide
      b.k = '?';
      b.text = b.lines[0];
      delete b.lines;
    }
  }
  return blocks;
}

// ---- verse or prose for the speeches of one line ---------------------

// A speech of one line looks the same as verse and as prose, and is read
// as what stands round it is. The speeches of more than one line are
// sure (songs and letters, italic or set in, apart: they say nothing of
// the talk round them). Each speech of one line is then drawn toward
//  - the speech before it and the speech after it (LINK.next), more
//    strongly where they are parts of one speech (LINK.inside);
//  - the same speaker's speech before and after (LINK.same, weaker as
//    more speeches lie between: LINK.reach);
//  - the same speaker's nearest sure speech either way (LINK.own, weaker
//    past LINK.ownReach);
// less across an entrance or an exit (LINK.door), where talk often
// changes from verse to prose or back, and less toward two lines of
// verse than toward three or more (LINK.lines). Every speech of one line
// ends as the weighted mean of what it is drawn toward (sure verse 1,
// sure prose -1), and is verse if that is above nought. Speakers keep to
// verse or to prose while they talk with the same people, and a passage
// keeps to one of them: the links say no more than that.
//
// The weights were tried on some two hundred speeches of one line read
// in their places, where verse and prose meet in the four plays of
// Shakespeare here. About one in thirteen of those still goes wrong,
// most of them at the very turn from one to the other, where editors
// differ too; in a scene that is all verse or all prose nothing can.
//
// opts.long: in a scene that has prose in it, a line of this many
// characters or more is prose whatever stands round it (of Shakespeare's
// lines known to be verse one in two thousand is as long as 60).
// opts.own: 'v' or 'p' for a play in which only the speaker's own sure
// speeches near by are to count (see settleByOwn), and the kind to fall
// back on when there are none.
const LINK = { next: 1, inside: 4, same: 2, reach: 3, own: 1, ownReach: 4, door: 0.5, lines: 3 };
const DOOR = /\b(Enter|Re-enter|Exit|Exeunt)\b/;

export function settle(blocks, report, partId, { long = 60, own = null } = {}) {
  const kinds = own ? settleByOwn(blocks, own) : settleByLinks(blocks, long);
  blocks.forEach((b, i) => {
    if (b.k !== '?') return;
    let k = kinds.get(i);
    if (!k) {
      report.unsettled.push(partId);
      k = 'p';
    }
    report.single[k] = (report.single[k] || 0) + 1;
    b.k = k;
    if (k === 'v') b.lines = [b.text];
  });
}

function settleByLinks(blocks, long) {
  const anyProse = blocks.some((b) => b.k === 'p' && b.sure);
  const nodes = [];
  let speech = -1;
  let name = '';
  let doors = 0;
  blocks.forEach((b, i) => {
    if (b.k === 's') {
      speech++;
      name = b.text;
    } else if (b.k === 'd') {
      if (DOOR.test(b.text)) doors++;
    } else if (b.k === '?') {
      const isLong = anyProse && len(b.text) >= long;
      nodes.push({ i, speech, name, doors, free: !isLong, x: isLong ? -1 : 0, hold: 1, pulls: [] });
    } else if (b.sure) {
      nodes.push({ i, speech, name, doors, free: false, x: b.k === 'v' ? 1 : -1, hold: b.k === 'v' ? Math.min(b.weight, LINK.lines) / LINK.lines : 1, pulls: [] });
    }
  });
  const link = (a, b, w) => {
    w *= Math.min(a.hold, b.hold) * (a.doors !== b.doors ? LINK.door : 1);
    a.pulls.push([b, w]);
    b.pulls.push([a, w]);
  };
  const last = new Map(); // each speaker's latest speech
  nodes.forEach((n, t) => {
    if (t > 0) link(nodes[t - 1], n, nodes[t - 1].speech === n.speech ? LINK.inside : LINK.next);
    const prev = last.get(n.name);
    if (prev !== undefined && nodes[prev].speech !== n.speech) link(nodes[prev], n, LINK.same * Math.min(1, LINK.reach / (t - prev)));
    last.set(n.name, t);
  });
  nodes.forEach((n, t) => {
    if (!n.free) return;
    for (const step of [-1, 1]) {
      for (let u = t + step; u >= 0 && u < nodes.length; u += step) {
        const o = nodes[u];
        if (o.free || o.name !== n.name) continue;
        n.pulls.push([o, LINK.own * Math.min(1, LINK.ownReach / Math.abs(u - t)) * o.hold * (o.doors !== n.doors ? LINK.door : 1)]);
        break;
      }
    }
  });
  // each to the mean of what draws it, over and over until nothing moves
  for (let round = 0; round < 10000; round++) {
    let moved = 0;
    for (const n of nodes) {
      if (!n.free) continue;
      let sum = 0;
      let weight = 0;
      for (const [o, w] of n.pulls) {
        sum += w * o.x;
        weight += w;
      }
      const x = weight ? sum / weight : 0;
      moved = Math.max(moved, Math.abs(x - n.x));
      n.x = x;
    }
    if (moved < 1e-9) break;
  }
  const kinds = new Map();
  for (const n of nodes) {
    if (blocks[n.i].k !== '?') continue;
    if (n.x > 0) kinds.set(n.i, 'v');
    else if (n.x < 0) kinds.set(n.i, 'p');
    // (nought: nothing sure in the whole part)
  }
  return kinds;
}

// Only the speaker's own sure speeches within sixteen either way count,
// the nearer the more; with none, the play's usual kind.
function settleByOwn(blocks, usual) {
  const text = []; // the blocks that are speech
  blocks.forEach((b, i) => {
    if (b.k === 'v' || b.k === 'p' || b.k === '?') text.push(i);
  });
  let name = '';
  const who = blocks.map((b) => (b.k === 's' ? (name = b.text) : name));
  const kinds = new Map();
  text.forEach((i, ti) => {
    if (blocks[i].k !== '?') return;
    let score = 0;
    for (let tj = Math.max(0, ti - 16); tj <= Math.min(text.length - 1, ti + 16); tj++) {
      const b = blocks[text[tj]];
      if (tj === ti || !b.sure || who[text[tj]] !== who[i]) continue;
      const w = Math.min(b.weight, 3) / Math.abs(tj - ti);
      score += b.k === 'v' ? w : -w;
    }
    kinds.set(i, score > 0 ? 'v' : score < 0 ? 'p' : usual);
  });
  return kinds;
}

// ---- checks -------------------------------------------------------------

export function newReport() {
  return { speakers: {}, carried: [], mixed: [], fullThenCapital: [], joined: [], single: {}, unsettled: [], dropped: [], noises: 0 };
}

// Every word of the source, in order, and nothing else.
export function sameWords(srcWords, parts) {
  const outWords = [];
  for (const pt of parts) {
    for (const b of pt.blocks) {
      if (b.k === 'v') for (const l of b.lines) outWords.push(...words(l));
      else outWords.push(...words(b.text));
    }
  }
  const nw = Math.max(srcWords.length, outWords.length);
  for (let i = 0; i < nw; i++) {
    if (srcWords[i] !== outWords[i]) throw new Error(`word ${i}: the source has "${srcWords.slice(i, i + 6).join(' ')}" where the text has "${outWords.slice(i, i + 6).join(' ')}"`);
  }
  return nw;
}

// Settle the speeches of one line, see that every part is sound, and
// leave in the blocks only what the site reads.
// opts.unspoken: part ids that may open with speech (no speaker's name over it)
// opts.keep: leave the cutting's own marks on the blocks (for looking into the cutting)
// opts.brackets: true if square brackets may stand in the text
// opts.long, opts.own: see settle()
export function finish(parts, report, opts = {}) {
  for (const pt of parts) {
    if (opts.keep) report.before = { ...(report.before || {}), [pt.id]: pt.blocks.map((b) => ({ ...b })) };
    settle(pt.blocks, report, pt.id, { long: opts.long, own: opts.own });
    if (!pt.blocks.length) throw new Error(`${pt.id}: empty`);
    const bad = opts.brackets ? /\s[.,;:!?](\s|$)|\s{2}|^\s|\s$|_/ : /\s[.,;:!?](\s|$)|\s{2}|^\s|\s$|[[\]_]/;
    pt.blocks.forEach((b, i) => {
      if (b.k === 's' && (i === pt.blocks.length - 1 || pt.blocks[i + 1].k === 's')) throw new Error(`${pt.id}: ${b.text} says nothing`);
      if ((b.k === 'v' || b.k === 'p') && i === 0 && !(opts.unspoken || []).includes(pt.id)) throw new Error(`${pt.id}: opens with speech`);
      for (const t of b.k === 'v' ? b.lines : [b.text]) if (!t || bad.test(t)) throw new Error(`${pt.id}: badly cut: ${JSON.stringify(t)}`);
    });
    if (!opts.keep) pt.blocks = pt.blocks.map((b) => (b.k === 'v' ? { k: 'v', lines: b.lines } : { k: b.k, text: b.text }));
  }
}

// The acts and scenes found, as [scenes in act 1, scenes in act 2, ...].
export function shape(parts) {
  const acts = [];
  for (const p of parts) {
    const m = p.id.match(/^a(\d+)s(\d+)$/);
    if (m) acts[m[1] - 1] = Number(m[2]);
  }
  return acts;
}

// want: scenes in each act; before, after: the ids of the parts that are not scenes.
export function expectShape(title, parts, want, before = [], after = []) {
  const got = shape(parts);
  const sum = (a) => a.reduce((x, y) => x + y, 0);
  if (got.join() !== want.join()) {
    throw new Error(`${title}: expected ${want.length} acts and ${sum(want)} scenes (${want.join(', ')}), found ${got.length} acts and ${sum(got)} scenes (${got.join(', ')})`);
  }
  const ids = parts.map((p) => p.id);
  const wantIds = [...before, ...want.flatMap((n, a) => Array.from({ length: n }, (_, s) => `a${a + 1}s${s + 1}`)), ...after];
  if (ids.join() !== wantIds.join()) throw new Error(`${title}: expected the parts ${wantIds.join(' ')}, found ${ids.join(' ')}`);
}

export function romanNumber(s) {
  const V = { I: 1, V: 5, X: 10 };
  let n = 0;
  for (let i = 0; i < s.length; i++) n += V[s[i]] < (V[s[i + 1]] || 0) ? -V[s[i]] : V[s[i]];
  return n;
}
