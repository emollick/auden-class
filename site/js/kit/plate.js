// A plate: a short passage set large, with lenses that draw on its words.
//
//   mountPlate(host, plate, piece, opts) -> { root, setLens(i), destroy() }
//
// opts: lenses (a piece's own drawings), title, where, lens (which to show
// first), max (the largest size of type, px), now (draw at once), narrowAt
// (the width, px, under which the marks are drawn small; 520 if not given), and
// bare (the passage and its marks alone: no heading, no tabs, no caption;
// the front page shows its specimens so).
//
// `plate` is one entry of a built piece (site/data/pieces/<id>.json): rows
// of words already divided into syllables, and the lenses of the reading.
// A lens is drawn by the module of its kind (lens-beat.js and the rest).
// A piece can replace or add to any of them with its own module in
// site/js/pieces/<pieceId>.js (see kit/README.md).

import { el, mk, clear, still, bare, tie, fontsReady, CLASSES, threadColor, NO_RHYME } from './draw.js';
import { wordParts, partOf } from './syllables.js';
import { rich, lean, kept } from '../rich.js';
import beat from './lens-beat.js';
import rhyme from './lens-rhyme.js';
import figure from './lens-figure.js';
import word from './lens-word.js';
import sentence from './lens-sentence.js';
import compare from './lens-compare.js';
import shape from './lens-shape.js';

export const KINDS = { beat, rhyme, figure, word, sentence, compare, shape };
// the room each kind of lens needs under a line of type, in px
const BAND = { beat: 42, word: 32, sentence: 34, figure: 30, compare: 26, rhyme: 20, shape: 10 };

// What is marked on single letters: the tail of a rhyme, a sound that returns.
function letterMarks(plate, allRows) {
  const marks = new Map(); // "rowId/word" -> array, one entry for each character
  const at = (rowId, w, len) => { const k = `${rowId}/${w}`; if (!marks.has(k)) marks.set(k, Array.from({ length: len }, () => null)); return marks.get(k); };
  const rowById = new Map(allRows.map((r) => [r.id, r]));
  const letters = [];
  let threads = 0;
  for (const lens of plate.lenses) {
    if (lens.kind !== 'rhyme') continue;
    for (const [rowId, letter] of Object.entries(lens.ends || {})) {
      if (NO_RHYME.has(letter)) continue;
      if (!letters.includes(letter)) letters.push(letter);
      const n = lens.tails && lens.tails[rowId];
      const row = rowById.get(rowId);
      if (!n || !row) continue;
      const tok = row.words[row.last].t;
      const b = bare(tok);
      const end = tok.length - b.tail;
      const arr = at(rowId, row.last, tok.length);
      for (let i = Math.max(b.lead, end - n); i < end; i++) arr[i] = { ...(arr[i] || {}), rt: letter };
    }
    (lens.threads || []).forEach((t) => {
      const ti = threads++;
      t.index = ti;
      for (const [rowId, w, from, n] of t.at || []) {
        const row = rowById.get(String(rowId));
        if (!row || !row.words[w]) continue;
        const arr = at(String(rowId), w, row.words[w].t.length);
        for (let i = from; i < from + n && i < arr.length; i++) arr[i] = { ...(arr[i] || {}), th: ti };
      }
    });
  }
  return { marks, letters };
}

const inPart = (P, i) => P.some((x) => i >= x.from && i < x.to);

function buildWord(wd, marks, letters, french) {
  const tok = wd.t;
  const b = bare(tok);
  // the letters stand between `start` and `end`; the points before and after them are kept apart,
  // so that a mark is centered on the letters and an underline stops where the word stops
  const start = b.body ? b.lead : 0;
  const end = b.body ? tok.length - b.tail : tok.length;
  const w = el('span', { class: 'w' });
  const body = el('span', { class: 'wb' });
  if (start) w.append(tok.slice(0, start));
  // two words that a dash joins are wrapped one by one, so that a mark can stand under either
  // (word 6.1, word 6.2); every syllable must then lie inside one of them
  let P = b.body ? wordParts(tok) : [];
  if (P.length > 1) {
    let at = 0;
    for (const s of wd.sy) {
      let i = Math.max(at, start); const to = Math.min(at + s.length, end);
      at += s.length;
      // a syllable may begin with the points that part the two words (a dash, a quotation mark): its letters come after them
      while (i < to && !inPart(P, i)) i++;
      if (i >= to) continue;
      const h = P.findIndex((x) => i >= x.from && i < x.to);
      if (h < 0 || /[\p{L}\p{N}]/u.test(tok.slice(Math.min(to, P[h].to), to))) { P = []; break; }
    }
  }
  const halves = P.length > 1 ? P.map(() => el('span', { class: 'wp' })) : null;
  const gaps = []; // the points that stand between part k and part k + 1
  const chunks = []; // each part with the points that go with it
  const sy = [];
  let pos = 0;
  for (const s of wd.sy) {
    const span = el('span', { class: 'sy' });
    const to = Math.min(pos + s.length, end);
    let i = Math.max(pos, start);
    if (halves) {
      const i0 = i;
      while (i < to && !inPart(P, i)) i++;
      if (i > i0) { const k = Math.max(0, P.findIndex((x) => x.from >= i0) - 1); gaps[k] = (gaps[k] || '') + tok.slice(i0, i); }
    }
    const h = halves ? (i < to ? P.findIndex((x) => i >= x.from && i < x.to) : Math.max(0, P.findIndex((x) => x.from >= i) - 1)) : -1;
    const stop = halves ? Math.min(to, P[h].to) : to;
    while (i < stop) {
      const m = marks ? marks[i] : null;
      let j = i + 1;
      while (j < stop && JSON.stringify(marks ? marks[j] : null) === JSON.stringify(m)) j++;
      const txt = tok.slice(i, j);
      if (m) {
        const seg = el('span', { class: `${m.rt ? 'rt' : ''}${m.th !== undefined ? ' th' : ''}`.trim(), text: txt });
        if (m.rt) { seg.dataset.r = m.rt; seg.style.setProperty('--c', CLASSES[letters.indexOf(m.rt) % CLASSES.length]); }
        if (m.th !== undefined) { seg.dataset.th = m.th; seg.style.setProperty('--tc', threadColor(m.th, letters.length)); }
        span.append(seg);
      } else span.append(txt);
      i = j;
    }
    pos += s.length;
    sy.push(span);
    if (halves) { halves[h].append(span); if (stop < to && i >= stop) gaps[h] = (gaps[h] || '') + tok.slice(Math.max(stop, i), to); } else body.append(span);
  }
  if (halves) {
    // each word keeps together with the dash after it; where lines turn, the two may part after the dash
    // (what stands before the dash stays with the first word, a quotation mark after it goes with the second)
    w.classList.add('wj');
    const cut = (x) => { const m = (x || '').match(/^(.*[—–])(.*)$/su); return m ? [m[1], m[2]] : [x || '', '']; };
    halves.forEach((part, k) => {
      const last = k === halves.length - 1;
      const chunk = el('span', { class: 'wk' }, [k ? cut(gaps[k - 1])[1] : '', part, last ? gaps[k] || '' : cut(gaps[k])[0]]);
      chunks.push(chunk);
      body.append(chunk);
      if (!last) body.append(el('wbr'));
    });
  }
  w.append(body);
  if (end < tok.length) w.append(setClose(tok.slice(end), french));
  return { el: w, body, sy, t: tok, parts: halves, chunks: halves ? chunks : null, ranges: halves ? P : null };
}

// A stop that the edition sets after a space ("word ;"): the build keeps it in the word before it, space and
// all, so word numbers do not count it. It is set close against that word: with no space, or in French with
// a narrow space that does not break (a comma is set close in French too). Only ! ? ; : and the comma, with
// the points and closing marks that follow them; a dash or points of omission after a space stay as the
// edition has them.
const STOP_APART = / ([!?;:,]+[.…!?;:,"'”’»)\]]*)(?= |$)/gu;
const setClose = (tail, french) => tail.replace(STOP_APART, (m, stop) => (french && stop[0] !== ',' ? '\u202f' : '') + stop);

const norm = (s) => s.toLowerCase().replace(/[’']/g, "'").replace(/[^\p{L}\p{N}'-]+/gu, ' ').trim();

export function mountPlate(host, plate, piece = {}, opts = {}) {
  const lone = !!opts.bare;
  const root = el(lone ? 'div' : 'section', { class: `plate${plate.noText ? ' plate-bare' : ''}${lone ? ' plate-spec' : ''}`, 'data-plate': plate.id || '' });
  const textRows = (plate.rows || []).filter((r) => !r.aside);
  const pairRows = plate.pair ? plate.pair.rows : [];
  const { marks, letters } = letterMarks(plate, textRows.concat(pairRows));
  // a passage is set as verse where most of its rows are verse; each row keeps its own kind
  const nVerse = textRows.filter((r) => r.kind === 'v').length;
  const verse = nVerse > 0 && nVerse * 2 >= textRows.length;
  // (a reading may say that the rows of the second passage do not answer the first's one for one: "under": false)
  const interlinear = !!plate.pair && !plate.beside && plate.under !== false && pairRows.length === textRows.length;
  root.classList.add(verse ? 'is-verse' : 'is-prose');
  if (plate.pair) root.classList.add(interlinear ? 'is-interlinear' : 'is-beside');
  // two passages of equal standing, each under its own label: one type for both
  const twin = !!plate.pair && !!plate.beside;
  if (twin) root.classList.add('is-twin');
  // a second version set line under line is small type with no room under it;
  // where any lens marks its words, it is given room, on every tab alike
  const second = (id) => String(id).startsWith('p:');
  const marksWhere = (lens, is, pins = true, ends = true) => Object.keys(lens.scan || {}).some(is) || (ends && Object.keys(lens.ends || {}).some(is))
    || (lens.parts || []).some((x) => is(x.row)) || (lens.notes || []).some((x) => is(x.row))
    || (lens.spans || []).some((x) => is(x.from[0]) || is(x.to[0]))
    || (lens.ties || []).some((x) => (x.a && is(x.a[0])) || (x.b && is(x.b[0])))
    || (pins && (lens.points || []).some((x) => x.at && is(x.at[0])))
    || (lens.threads || []).some((t) => (t.at || []).some((x) => is(x[0])));
  // does a lens set marks under this row? (a span of a sentence also marks the rows between its two ends;
  // the number of a remark stands after its word and needs no room under the line, and neither does the
  // letter of a rhyme, which stands after the line: on a Rhyme tab only a sound that returns marks a row)
  const marksRow = (lens, id) => {
    if (marksWhere(lens, (x) => String(x) === String(id), false, false)) return true;
    const order = [...rows.keys()]; const k = order.indexOf(String(id));
    return (lens.spans || []).some((x) => { const i = order.indexOf(String(x.from[0])); const j = order.indexOf(String(x.to[0])); return i >= 0 && k > i && k < j; });
  };
  const marksPair = (lens) => marksWhere(lens, second);
  const marksMain = (lens) => marksWhere(lens, (id) => !second(id));
  if (plate.pair && plate.lenses.some(marksPair)) root.classList.add('pair-marked');
  // a second passage that is not a version of the first (the same language, set beside it) is shown only on the
  // tabs that mark it; a version in another language stays, and on a narrow plate goes after the caption there
  const sameLang = !!plate.pair && (plate.pair.lang || 'en') === (plate.lang || 'en');
  const other = !!plate.pair && !interlinear && !twin && sameLang;
  // (the English of a passage in another language is what most readers read the passage by: on a narrow plate it
  // stays straight under the passage on every tab, and the caption follows both)
  const english = !!plate.pair && !sameLang && (plate.pair.lang || 'en') === 'en';
  // two passages of one work under their own labels: side by side both are always shown; on a narrow plate, where
  // they stand one under the other, the one that the tab showing does not mark gives way to the one it does
  const peers = twin && sameLang;

  // ----- head -----
  const tabs = el('div', { class: 'plate-tabs', role: 'group', 'aria-label': 'Ways of reading this passage' });
  const src = (piece.texts || []).find((t) => plate.src === `${t.text}/${t.part}`);
  // a book of one part is not named again over each passage
  const whole = src && src.label && src.title && src.label.trim().toLowerCase() === src.title.trim().toLowerCase();
  // "Scene 3" and the like keep together where the place turns onto a second line
  // (a reading may give the line in its own words, `place`; a title between asterisks stands upright in it)
  const bound = (t) => String(t || '').replace(/\b(Act|Scene|Book|Canto|Cantos|Chapter|Chapters|Part|Ode|Fragment|Fragments) (?=\d|[IVXLC]+\b)/g, '$1\u00a0');
  const sub = bound(opts.where !== undefined ? opts.where : plate.place !== undefined ? plate.place : (src && !whole && src.label) || '');
  const head = el('header', { class: 'plate-hd' }, [
    el('p', { class: 'plate-ttl' }, [tie(plate.heading || opts.title || piece.title || ''), sub ? el('span', {}, sub.split(/\*([^*]+)\*/).map((t, i) => (i % 2 ? el('i', { text: t }) : t)).filter(Boolean)) : null]),
    tabs,
  ]);

  // ----- the passage -----
  const ov = mk('svg', { class: 'ov', 'aria-hidden': 'true' });
  const poem = el('div', { class: 'poem' });
  const own = el('div', { class: 'own', hidden: '' });
  const rows = new Map();
  const rowList = [];
  const makeRow = (r, cls) => {
    const tx = el('p', { class: `${cls} ${r.kind === 'v' ? 'k-v' : 'k-p'}` });
    const words = [];
    // what a row leaves out at its head or its foot shows as points of omission; where that is only a dash
    // or another point, with no word in it, the point itself is printed
    const bare = (a, z) => { const left = r.words.slice(a, z); return left.length && left.every((w) => w.t && !/[\p{L}\p{N}]/u.test(w.t)) ? left.map((w) => w.t).join(' ') : ''; };
    const head = r.cutStart ? bare(0, r.first) : ''; const foot = r.cutEnd ? bare(r.last + 1, r.words.length) : '';
    if (r.cutStart) tx.append(head ? `${head} ` : el('span', { class: 'cut', text: '… ' }));
    // where a line of verse must turn on a narrow plate, a reading may say after which word (plate.turn)
    const turnAt = plate.turn && r.kind === 'v' ? plate.turn[r.id] : undefined;
    const keeps = turnAt === undefined || turnAt < r.first || turnAt >= r.last ? null : [el('span', { class: 'keep' }), el('span', { class: 'keep' })];
    let stays = null; // the directions that stay in the line
    // (a stop that the edition sets after a space is set close against its word: see setClose)
    const french = /^fr/i.test((second(r.id) ? plate.pair && plate.pair.lang : plate.lang) || '');
    // A name or a direction that the edition prints in the line, where the reading leaves it there (`stage`
    // with `inline`; the build lists them on the row: [first word, last word, s or d]). Its words stay words
    // of the row, with their numbers, and are set as a name and a direction are set over a line: small
    // capitals, small italic. The line may turn before a direction (a wbr, which a browser honors even in a
    // line kept whole), so that one too long for the plate goes under its line and not out of the plate.
    // (Each is also what a name or a direction over a line is to a stroke, `stage-s` and `stage-d`, and its
    // words are `wq`, not `w`: a stroke from one line to the next passes behind a direction that has turned
    // and is broken there, as behind any direction, where a line of words in its way would stop it.)
    const inl = r.stage || [];
    const tail = []; // what stays in the line after the last word of the verse
    let part = null; let box = null;
    r.words.forEach((wd, i) => {
      const built = buildWord(wd, marks.get(`${r.id}/${i}`), letters, french);
      words.push(built);
      const p = inl.find((x) => i >= x[0] && i <= x[1]);
      if (p) {
        if (p !== part) {
          part = p; box = el('span', { class: p[2] === 's' ? 'in-s stage-s' : 'in-d stage-d' });
          if (i < r.first) tx.append(box, ' ');
          else if (i > r.last) tail.push(box);
          else { const into = keeps ? keeps[i <= turnAt ? 0 : 1] : tx; if (keeps ? into.childNodes.length : i > r.first) into.append(' '); into.append(el('wbr'), box, el('wbr')); }
          if (p[2] === 'd') (stays = stays || []).push(box);
        }
        if (box.childNodes.length) box.append(' ');
        // (a row that is nothing else, a heading among the lines, cannot turn: its words stay `w`, so that a remark's number has its room after them)
        if (!(r.first >= p[0] && r.last <= p[1])) built.el.classList.replace('w', 'wq');
        box.append(built.el);
        return;
      }
      if (i < r.first || i > r.last) return;
      const into = keeps ? keeps[i <= turnAt ? 0 : 1] : tx;
      if (keeps ? into.childNodes.length : i > r.first) into.append(' ');
      into.append(built.el);
    });
    if (keeps) tx.append(keeps[0], ' ', keeps[1]);
    // (the kit's points keep to the last word shown; where that word ends in the edition's own points of
    // omission, the kit's are left off)
    const dotted = !foot && /(…|\.\s?\.\s?\.)$/.test((r.words[r.last] || {}).t || '');
    if (r.cutEnd && !dotted) tx.append(foot ? ` ${foot}` : el('span', { class: 'cut', text: '\u00a0…' }));
    // (`tailAt`: where the verse ends and what follows it in the line begins; fit() measures the line to there)
    let tailAt = null;
    for (const b of tail) { const sp = document.createTextNode(' '); if (!tailAt) tailAt = sp; tx.append(sp, el('wbr'), b); }
    if (inl.length) tx.classList.add('has-in');
    // a speech of a few words that its edition sets as prose, among lines of verse: it keeps the size of the verse
    if (r.kind !== 'v' && verse && r.last - r.first < 5 && r.words.slice(r.first, r.last + 1).reduce((n, w) => n + w.t.length + 1, 0) <= 34) tx.classList.add('brief');
    return { id: r.id, tx, words, data: r, first: r.first, last: r.last, keeps, stays, tailAt };
  };
  // where one stanza ends and the next begins with nothing between them, a little space parts them
  const blockOf = (id) => String(id).replace(/^p:/, '').split('.')[0];
  const shown = (list, id) => list.filter((x) => !x.aside && blockOf(x.id) === blockOf(id)).length;
  const newStanza = (list, r, prev) => !!prev && r.kind === 'v' && prev.kind === 'v' && blockOf(prev.id) !== blockOf(r.id) && (shown(list, r.id) > 1 || shown(list, prev.id) > 1);
  const gapSign = () => el('p', { class: 'stage-gap', 'aria-label': 'Some lines are left out here', text: '·  ·  ·' });
  let n = 0;
  let prevRow = null;
  for (const r of plate.rows || []) {
    // where lines of the work are left out between two that are shown: three points
    if (r.aside === 'gap') { poem.append(gapSign()); prevRow = null; continue; }
    // a speaker's name in another language may carry its English after it
    if (r.aside) { poem.append(el('p', { class: `stage-${r.aside}` }, [r.text, r.gloss ? el('span', { class: 'stage-g', text: r.gloss }) : null])); prevRow = null; continue; }
    const row = makeRow(r, 'tx');
    // (a reading may ask for a stanza's space the kit does not see, or take away one it would set: `stanza`;
    // and may set rows deeper in, as the edition does: `indent`)
    const parted = r.stanza === undefined ? newStanza(plate.rows || [], r, prevRow) : r.stanza;
    row.el = el('div', { class: `row${parted ? ' stanza' : ''}${r.indent ? ' in' : ''}`, 'data-row': r.id }, [row.tx]);
    prevRow = r;
    if (plate.lang && plate.lang !== 'en') row.tx.lang = plate.lang;
    // (a line stands in the order of rows before the version set under it)
    rows.set(row.id, row);
    if (interlinear) {
      const p = makeRow(pairRows[n], 'pr');
      if (plate.pair.lang && plate.pair.lang !== 'en') p.tx.lang = plate.pair.lang;
      row.el.append(p.tx);
      row.pair = p;
      rows.set(p.id, p);
    }
    poem.append(row.el);
    rowList.push(row);
    n++;
  }
  // A join from one rhyme to the next passes the ends of the lines between the two, and of the versions set
  // under them. The joins of rhymes that overlap stand in lanes, one outside the other (as kit/lens-rhyme.js
  // draws them); fit() keeps the versions they pass short of the edge by what those lanes need (`--pend`).
  let lanes = 0;
  if (interlinear) for (const lens of plate.lenses) {
    if (lens.kind !== 'rhyme') continue;
    const last = {}; const arcs = [];
    rowList.forEach((r, k) => {
      const letter = (lens.ends || {})[r.id];
      if (letter === undefined || NO_RHYME.has(letter)) return;
      const from = last[letter]; last[letter] = k;
      if (from === undefined) return;
      for (let i = from; i < k; i++) if (rowList[i].pair) rowList[i].pair.tx.classList.add('passed');
      let lane = 0;
      while (arcs.some((x) => x.lane === lane && x.from < k && from < x.to)) lane++;
      arcs.push({ from, to: k, lane }); lanes = Math.max(lanes, lane + 1);
    });
  }
  let beside = null;
  if (plate.pair && !interlinear) {
    beside = el('div', { class: 'beside' }, [el('p', { class: 'beside-l', text: bound(plate.pair.label) })]);
    let prevPair = null;
    for (const r of pairRows) {
      const p = makeRow(r, 'pr');
      // (lines left out are shown once: a row that begins late begins with points of omission, and they are the
      // sign; no line of three points is set before it, as none is in the first passage)
      const gapped = r.gapBefore && prevPair && !r.cutStart;
      if (gapped) { p.gap = gapSign(); beside.append(p.gap); }
      const over = []; // what stands over the row
      // (a direction that the edition prints before the speaker's name stands before it: it goes with the speech above)
      if (r.dirPre) over.push(el('p', { class: 'stage-d', text: r.dirPre }));
      // who speaks, where more than one speaks in the second passage
      if (r.who) over.push(el('p', { class: 'stage-s' }, [r.who, r.whoGloss ? el('span', { class: 'stage-g', text: r.whoGloss }) : null]));
      // and a stage direction that stands just before the line
      if (r.dir) over.push(el('p', { class: 'stage-d', text: r.dir }));
      // a stanza's space stands over the speaker's name, where the row has one, and not between the name and the speech
      if (!gapped && (r.stanza === undefined ? newStanza(pairRows, r, prevPair) : r.stanza)) (over[0] || p.tx).classList.add('stanza');
      if (r.indent) p.tx.classList.add('in');
      over.forEach((x) => beside.append(x));
      // (what stands first over the row, the points of a gap, a direction or the speaker's name, takes the room
      // that sets the row level with the line it answers: so it moves with its row, and a name stays by its speech)
      p.top = p.gap || over[0] || null;
      beside.append(p.tx); rows.set(p.id, p); prevPair = r;
    }
    if (plate.label) poem.prepend(el('p', { class: 'beside-l', text: bound(plate.label) }));
  }
  // where a version is set under each line, a legend of one line at the head of the passage names the two: the
  // first as the label of a passage is set, the second in the italic of the version's lines
  // (where the first has no label, as on a card of the front page, whose head names the author, the version's
  // label alone over a line of the original read as if the translator had written that line: it says where it stands)
  const versionL = plate.pair && plate.pair.label && !plate.label && !/under/i.test(plate.pair.label) ? `Under each line: ${plate.pair.label.replace(/^The /, 'the ')}` : plate.pair && plate.pair.label;
  if (interlinear && (plate.label || plate.pair.label)) poem.prepend(el('p', { class: 'beside-l legend' }, [plate.label ? el('span', { text: bound(plate.label) }) : null, versionL ? el('i', { text: bound(versionL) }) : null]));

  // A short run of words that a tab marks as one thing (a part of a figure, a noted phrase, one end of a
  // compare tab's pair, a short span of a sentence) is not parted where a line turns: the run is wrapped, and
  // what wraps it does not break. (A no-break space between the words would not do it: each syllable is a
  // block of its own, and a browser may break a line beside a block whatever stands next to it.) A run of
  // more than four words is left free, and so is one of more than 26 letters in a line of verse or 14 in
  // prose, where a longer run held whole would end the line before it far short of the measure; runs that
  // meet are held as one where the whole is short enough.
  const lettersOf = (r, a, z) => { let n = z - a; for (let i = a; i <= z; i++) n += r.words[i] ? r.words[i].t.length : 0; return n; };
  const glue = (rowId, from, to = from) => {
    const r = rows.get(String(rowId)); let a = Math.floor(from); let z = Math.floor(to);
    if (!r || !(z > a) || z - a > 3 || a < r.first || z > r.last) return;
    r.runs = r.runs || [];
    const met = r.runs.filter((x) => x.a <= z && x.z >= a);
    for (const x of met) { a = Math.min(a, x.a); z = Math.max(z, x.z); }
    if (met.some((x) => x.a <= a && x.z >= z) || lettersOf(r, a, z) > (r.data.kind === 'v' ? 26 : 14)) return;
    // (the two halves of a line whose turn the reading sets are not joined across it)
    const home = (i) => { const w = r.words[i]; if (!w) return null; const at = w.el.parentNode; return at.classList.contains('run') ? at.parentNode : at; };
    for (let i = a; i <= z; i++) if (!home(i) || home(i) !== home(a)) return;
    for (const x of met) { x.el.replaceWith(...x.el.childNodes); r.runs.splice(r.runs.indexOf(x), 1); }
    const wrap = el('span', { class: 'run' });
    let n = r.words[a].el; const end = r.words[z].el;
    n.before(wrap);
    for (;;) { const next = n.nextSibling; wrap.append(n); if (n === end || !next) break; n = next; }
    r.runs.push({ a, z, el: wrap });
  };
  const run = (w) => (Array.isArray(w) ? w : [w, w]);
  for (const lens of plate.lenses || []) {
    (lens.parts || []).forEach((x) => glue(x.row, ...run(x.w)));
    (lens.notes || []).forEach((x) => glue(x.row, ...run(x.w)));
    (lens.ties || []).forEach((x) => ['a', 'b'].forEach((k) => { if (x[k]) glue(x[k][0], x[k][1], x[k][2] === undefined ? x[k][1] : x[k][2]); }));
    (lens.spans || []).forEach((x) => { if (x.from && x.to && String(x.from[0]) === String(x.to[0])) glue(x.from[0], x.from[1], x.to[1]); });
  }

  // A word of one letter is not left at the end of a line: it keeps with the word after it. In a line of
  // verse, which turns at most once or twice, so does a short word that leads to the next (an article, a
  // preposition, "and"), in the language of the passage, unless a stop parts the two.
  const LEADS = {
    en: 'a an the of to in on at by for from with and or nor but as if my thy his her its our your their no this that these those',
    it: 'a e o di da in con su per tra fra il lo la i gli le un una che se non',
    fr: 'à de du des le la les un une et ou en au aux que qui ne se ce si mon ma mes ton ta tes son sa ses notre nos votre vos leur leurs',
    de: 'der die das den dem des ein eine und oder in im an am zu zum zur von vom mit auf für '
      + 'mein meine meinen meinem meiner meines dein deine deinen deinem deiner deines sein seine seinen seinem seiner seines '
      + 'ihr ihre ihren ihrem ihrer ihres unser unsere unseren unserem unserer unseres unsre unsren unsrem unsrer unsres euer eure euren eurem eurer eures',
    la: 'et in ad a ab e ex de non',
  };
  const leadsOf = (lang) => new Set((LEADS[(lang || 'en').slice(0, 2)] || '').split(' ').filter(Boolean));
  const endsClause = /[,;:.!?…—–][\"'”’)\]]*$/;
  const tieShort = (r, lang) => {
    const leads = r.data.kind === 'v' ? leadsOf(lang) : null;
    for (let i = r.first; i < r.last; i++) {
      const w = r.words[i];
      if (!w || !r.words[i + 1] || w.chunks || endsClause.test(w.t)) continue;
      const word = bare(w.t).body;
      if ([...word].length === 1 ? /\p{L}/u.test(word) : leads && leads.has(word.toLowerCase())) glue(r.id, i, i + 1);
    }
  };
  for (const r of rows.values()) tieShort(r, String(r.id).startsWith('p:') ? (plate.pair && plate.pair.lang) : plate.lang);

  // Where a line of verse must turn on a narrow plate and its reading does not say where (plate.turn), it
  // turns after the stop or the comma nearest its middle, if one stands in the middle two fifths of the line
  // and outside every held run, and it turns there on every tab. A line with none is left to the browser,
  // which balances its two parts.
  const stop = /[,;:.!?…—–][\"'”’)\]]*$/;
  for (const r of rowList) {
    if (r.keeps || r.data.kind !== 'v' || (plate.turn && plate.turn[r.id] !== undefined)) continue;
    const total = lettersOf(r, r.first, r.last);
    let best = -1; let off = 1; let part = -1;
    for (let i = r.first; i <= r.last; i++) {
      const w = r.words[i];
      if (!w) continue;
      // (a dash that joins two words is a stop too: the line may turn after it, inside the token)
      if (w.chunks && !(r.runs || []).some((x) => x.a <= i && x.z >= i)) {
        const before = i > r.first ? lettersOf(r, r.first, i - 1) + 1 : 0;
        for (let k = 0; k + 1 < w.chunks.length; k++) {
          const d = Math.abs((before + w.ranges[k + 1].from) / total - 0.5);
          if (d < off) { off = d; best = i; part = k; }
        }
      }
      if (i === r.last || !stop.test(w.t) || (r.runs || []).some((x) => x.a <= i && x.z > i)) continue;
      const d = Math.abs(lettersOf(r, r.first, i) / total - 0.5);
      if (d < off) { off = d; best = i; part = -1; }
    }
    if (best < 0 || off > 0.2) continue;
    // inside a token the two parts of the line cannot be wrapped apart: a break stands after the dash,
    // and fit() lets it work only while the line does not go into the measure
    if (part >= 0) { r.words[best].chunks[part].after(el('br', { class: 'tbr' })); r.dash = true; continue; }
    const holder = (i) => { const n = r.words[i].el; return n.parentNode.classList.contains('run') ? n.parentNode : n; };
    const a = holder(r.first); const m = holder(best); const z = holder(r.last);
    if (a.parentNode !== r.tx || m.parentNode !== r.tx || z.parentNode !== r.tx || !m.nextSibling || m.nextSibling.nodeType !== 3) continue;
    const halves = [el('span', { class: 'keep' }), el('span', { class: 'keep' })];
    const move = (from, to, into) => { for (let n = from; n;) { const next = n.nextSibling; into.append(n); if (n === to) break; n = next; } };
    const space = m.nextSibling; const start = space.nextSibling;
    a.before(halves[0]); move(a, m, halves[0]);
    space.after(halves[1]); move(start, z, halves[1]);
    r.keeps = halves; r.auto = true;
  }

  // A row with a name or a direction in the line: where lines turn, its verse keeps together, and the line
  // turns beside it (after the name, before the direction), unless the verse is itself too long for the plate
  // (fit() then lets it turn where it must). A row that already turns at a stop keeps its two parts.
  for (const r of rows.values()) {
    if (!r.data.stage || r.keeps || r.data.kind !== 'v') continue;
    const holder = (i) => { let n = r.words[i].el; while (n.parentNode && n.parentNode !== r.tx) n = n.parentNode; return n; };
    const a = holder(r.first); const z = holder(r.last);
    if (a.parentNode !== r.tx || z.parentNode !== r.tx || a.classList.contains('in-s') || a.classList.contains('in-d')) continue;
    const keep = el('span', { class: 'keep' });
    a.before(keep);
    for (let n = a; n;) { const next = n.nextSibling; keep.append(n); if (n === z) break; n = next; }
    r.keeps = [keep];
  }

  // ----- captions -----
  const side = el('div', { class: 'side' });
  const panes = lone ? [] : plate.lenses.map((lens) => el('div', { class: 'pane' }, [kept(lean(el('p', { class: 'cap', html: lens.caption || '' })))]));
  panes.forEach((p) => side.append(p));

  const stage = el('div', { class: 'stage' }, [ov, poem, beside, own]);
  // where the keys and numbered remarks of a short passage go: under it, and not beside it
  const under = el('div', { class: 'under', hidden: '' });
  const asides = [];
  const keyParts = [];
  // On a narrow plate, where the passage, the caption and the key stand one under another, the key to the marks
  // (what a stroke, a dot or a color is, the scheme of the rhymes, a figure's name, and the button that draws the
  // marks again) stands straight under the passage it marks. The numbered remarks and the notes on words, which
  // are running words, stay after the caption. See keyUp().
  const nearKey = lone ? null : el('div', { class: 'aside keys near-key', hidden: '' });
  if (nearKey) poem.after(nearKey);
  const body = el('div', { class: 'plate-body' }, [lone ? stage : el('div', { class: 'main' }, [stage, under]), lone ? null : side]);
  // a plate with no passage says why at its foot
  const bareWhy = !lone && plate.noText && plate.noTextWhy ? el('p', { class: 'plate-note' }, rich(plate.noTextWhy)) : null;
  // A narrow plate is read downward, and its tabs stand at its head, a window or more above its foot: there the
  // ways of reading stand again at the foot. A press opens the way and brings the plate's head to the window's top.
  const foot = lone || plate.lenses.length < 2 ? null : el('div', { class: 'plate-tabs plate-tabs-foot', role: 'group', 'aria-label': 'Ways of reading this passage' });
  root.append(el('div', { class: 'plate-in' }, [lone ? null : head, body, bareWhy, foot]));
  host.append(root);

  // ----- a word named in a caption shows where it stands in the passage -----
  const index = [];
  for (const row of rows.values()) row.words.forEach((w, i) => {
    // (the words of the verse, and a name or a direction that stays in the line beside them)
    if ((i < row.first || i > row.last) && !(row.data.stage || []).some((x) => i >= x[0] && i <= x[1])) return;
    if (w.parts) w.parts.forEach((node, k) => index.push({ row, i, node, key: norm(w.t.slice(w.ranges[k].from, w.ranges[k].to)) }));
    else index.push({ row, i, node: w.body, key: norm(bare(w.t).body) });
  });
  // every place the words stand in the passage: one list of words for each place
  function find(phrase) {
    const want = norm(phrase).split(' ').filter(Boolean);
    const hits = [];
    if (!want.length || (want.length === 1 && want[0].length < 2)) return hits;
    for (let k = 0; k + want.length <= index.length; k++) {
      let ok = true;
      for (let j = 0; j < want.length && ok; j++) ok = index[k + j].key === want[j] && index[k + j].row === index[k].row;
      if (ok) hits.push(want.map((_, j) => index[k + j].node));
    }
    // half of a joined word ("change" in "sea-change") finds the whole of it
    if (!hits.length && want.length === 1) for (const it of index) if (it.key.split('-').includes(want[0])) hits.push([it.node]);
    return hits;
  }
  let litTimer;
  const light = (nodes, on) => {
    clearTimeout(litTimer);
    root.querySelectorAll('.w.lit,.wq.lit').forEach((w) => w.classList.remove('lit'));
    root.classList.toggle('has-lit', !!on);
    if (on) nodes.forEach((n) => { const w = n.closest('.w,.wq'); if (w) w.classList.add('lit'); });
  };
  const refer = (node, nodes) => {
    if (!nodes.length) return;
    node.classList.add('ref');
    node.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'touch') light(nodes, true); });
    node.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'touch') light(nodes, false); });
    node.addEventListener('click', () => { light(nodes, true); litTimer = setTimeout(() => light(nodes, false), 2600); });
  };

  // ----- what a lens is given to work with -----
  let timers = [];
  let current = -1;
  const ctx = {
    root, stage, poem, ov, own, rows, rowList, plate, piece, verse, side, interlinear,
    box: () => stage.getBoundingClientRect(),
    narrow: () => root.clientWidth < (opts.narrowAt || 520),
    later(f, ms) { timers.push(setTimeout(f, still() ? 0 : ms)); },
    // the words a to b of a row: the letters of each, without the points around it (with `whole`, the
    // points too). A number may name one of two words joined by a dash: 6.1 before the dash, 6.2 after it.
    words(rowId, a, b = a, whole = false) {
      const r = rows.get(String(rowId));
      if (!r) return [];
      const out = [];
      for (let i = Math.floor(a); i <= Math.floor(b); i++) {
        const w = r.words[i];
        if (!w) continue;
        const n = w.parts ? w.parts.length : 0;
        const from = n && i === Math.floor(a) && partOf(a) ? Math.min(partOf(a), n) : 1;
        const to = n && i === Math.floor(b) && partOf(b) ? Math.min(partOf(b), n) : n;
        // (a whole word of two parts is given as its two parts, each with its points: where a line turns they may stand on two lines)
        if (n && (from > 1 || to < n)) out.push(...w.parts.slice(from - 1, to)); else if (n && !whole) out.push(...w.chunks); else out.push(whole ? w.el : w.body);
      }
      return out;
    },
    // the words as they stand in the text, without the points around them
    text(rowId, a, b = a) {
      const r = rows.get(String(rowId));
      if (!r) return '';
      const out = [];
      for (let i = Math.floor(a); i <= Math.floor(b); i++) {
        const w = r.words[i];
        if (!w) continue;
        const n = w.ranges ? w.ranges.length : 0;
        const from = n && i === Math.floor(a) && partOf(a) ? Math.min(partOf(a), n) : 1;
        const to = n && i === Math.floor(b) && partOf(b) ? Math.min(partOf(b), n) : n;
        out.push(n && (from > 1 || to < n) ? w.t.slice(from > 1 ? w.ranges[from - 1].from : 0, to < n ? w.ranges[to - 1].to : w.t.length) : w.t);
      }
      return out.join(' ').replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
    },
    // a small label set on the stage at x, y
    label(text, x, y, cls = 'gl') { const g = el('span', { class: cls, text }); stage.append(g); g.style.left = `${x}px`; g.style.top = `${y}px`; return g; },
    // something in the margin that lights its words while the pointer is on it
    refer,
    light,
    // the marks are drawn again where they can be watched: a passage whose head stands above the window is
    // brought to the window's top first
    replay: () => {
      const again = () => setLens(current, true);
      if (!stage.scrollIntoView || stage.getBoundingClientRect().top >= 0) { again(); return; }
      wipe();
      let done = false;
      const go = () => { if (done) return; done = true; removeEventListener('scrollend', go); if (root.isConnected) again(); };
      addEventListener('scrollend', go);
      stage.scrollIntoView({ block: 'start' });
      setTimeout(go, still() ? 30 : 700);
    },
    // a lens that has changed the height of a row asks for the two passages to be set level again
    settle: () => arrange(),
  };

  // A word named in a caption lights where it stands. Where the lens of that caption marks some of those
  // places at the head of a mark, a place that only falls inside another mark is left dark: the caption
  // means the ones it marks.
  const wordOf = (node) => (node ? node.closest('.w,.wq') : null);
  const marksOf = (lens) => {
    const heads = new Set(); const inside = new Set();
    const add = (row, a, z = a) => { const nodes = ctx.words(row, a, z); if (nodes.length) heads.add(wordOf(nodes[0])); nodes.forEach((x) => inside.add(wordOf(x))); };
    const pair = (w) => (Array.isArray(w) ? w : [w, w]);
    (lens.parts || []).forEach((x) => add(x.row, ...pair(x.w)));
    (lens.notes || []).forEach((x) => add(x.row, ...pair(x.w)));
    (lens.spans || []).forEach((x) => { if (String(x.from[0]) === String(x.to[0])) add(x.from[0], x.from[1], x.to[1]); else add(x.from[0], x.from[1]); });
    (lens.ties || []).forEach((x) => ['a', 'b'].forEach((k) => { if (x[k]) add(x[k][0], x[k][1], x[k][2] === undefined ? x[k][1] : x[k][2]); }));
    (lens.points || []).forEach((x) => { if (x.at) add(x.at[0], x.at[1], x.at[2] === undefined ? x.at[1] : x.at[2]); });
    return { heads, inside };
  };
  panes.forEach((p, i) => {
    const refs = p.querySelectorAll('.cap b, .cap i');
    if (!refs.length) return;
    const { heads, inside } = marksOf(plate.lenses[i]);
    refs.forEach((node) => {
      let places = find(node.textContent);
      if (places.some((g) => heads.has(wordOf(g[0])))) places = places.filter((g) => heads.has(wordOf(g[0])) || !inside.has(wordOf(g[0])));
      refer(node, places.flat());
    });
  });

  // a piece's own drawing stands in for the kit's; if it fails, the kit's is shown
  const guarded = (over, base) => {
    const safe = (name) => (over[name] ? (...a) => {
      try { return over[name](...a); } catch (e) {
        console.warn(e);
        if (name === 'draw' && over.stage === 'own' && base && base.on) base.on(a[0], a[1], a[3]);
        return base && base[name] && name !== 'draw' ? base[name](...a) : null;
      }
    } : undefined);
    return { ...over, setup: safe('setup'), on: safe('on'), off: safe('off'), draw: safe('draw'), aside: safe('aside') };
  };
  const mods = plate.lenses.map((lens, i) => {
    const over = opts.lenses && (opts.lenses[`${plate.id}:${i}`] || opts.lenses[`${plate.id}:${lens.kind}`] || opts.lenses[lens.kind]);
    return over ? guarded(over, KINDS[lens.kind] || null) : KINDS[lens.kind] || null;
  });
  plate.lenses.forEach((lens, i) => {
    const mod = mods[i];
    if (mod && mod.setup) mod.setup(ctx, lens, i);
    if (lone) return;
    const b = el('button', { type: 'button', 'aria-pressed': 'false', text: lens.label || (mod && mod.name) || lens.kind });
    b.addEventListener('click', () => setLens(i, true));
    tabs.append(b);
    if (foot) {
      const f = el('button', { type: 'button', 'aria-pressed': 'false', text: b.textContent });
      f.addEventListener('click', () => { setLens(i, true); root.scrollIntoView({ block: 'start' }); });
      foot.append(f);
    }
    const extra = mod && mod.aside ? mod.aside(ctx, lens, i) : null;
    if (extra) { asides[i] = el('div', { class: 'aside' }, [extra]); panes[i].append(asides[i]); keyParts[i] = [...extra.children]; }
  });
  // The key near its marks (a narrow plate): of the key of the tab that is showing, all but the numbered remarks
  // and the notes on words goes under the passage the tab marks (under the second, where it marks that one).
  // What is left stays in its place after the caption; a key with nothing left takes no room there.
  let nearOf = -1;
  function keyUp(may = true) {
    if (!nearKey) return;
    const lens = plate.lenses[current] || {};
    const up = (i) => (keyParts[i] || []).filter((n) => !n.matches('.wn, .points'));
    const want = may && current >= 0 && ctx.narrow() && !root.classList.contains('own-stage') && !plate.noText && up(current).length ? current : -1;
    if (want !== nearOf) {
      // (the rows go back into their key in the order they were made in)
      if (nearOf >= 0) { const box = asides[nearOf].firstChild; keyParts[nearOf].forEach((n) => box.append(n)); asides[nearOf].hidden = false; }
      if (want >= 0) { up(want).forEach((n) => nearKey.append(n)); asides[want].hidden = !asides[want].firstChild.children.length; }
      nearOf = want;
      nearKey.hidden = want < 0;
    }
    if (want < 0) { root.classList.remove('key-last'); return; }
    const paired = beside && beside.parentNode === stage && !root.classList.contains('pair-off');
    const at = paired && marksPair(lens) ? beside : poem;
    if (nearKey.previousSibling !== at) at.after(nearKey);
    // (a key that ends the stage keeps as much room over the rule that follows as a second passage would give it)
    root.classList.toggle('key-last', !(paired && at === poem));
  }
  // the keys of the lens that is showing stand under a short passage; the others wait in their panes
  function place() {
    // (`keys-under`: the same under two passages, where arrange() sends a long key there)
    const low = root.classList.contains('low') || root.classList.contains('keys-under');
    asides.forEach((a, i) => { if (!a) return; const home = low && i === current ? under : panes[i]; if (a.parentNode !== home) home.append(a); });
    under.hidden = !(low && asides[current]);
  }
  if (plate.lenses.length < 2) tabs.hidden = true;

  // ----- where the second passage and the caption stand -----
  // On a wide plate two passages stand in two columns. The caption goes under both, or, where one of the
  // two is much the shorter, under that one. A second passage that the tab showing does not mark steps
  // aside: another passage of the same work is not shown, and a version goes after the caption on a narrow plate.
  const baseOf = (node) => { const q = node.getBoundingClientRect(); return q.bottom - parseFloat(getComputedStyle(node).fontSize) * 0.28; };
  const firstWord = (r) => (r && r.words[r.first] ? r.words[r.first].el : null);
  function level() {
    // rows that answer each other begin level: line for line where two passages of equal standing have
    // as many rows as each other, stanza for paragraph where a prose version has a paragraph for each stanza.
    // Says whether any do.
    for (const r of rows.values()) { (r.el || r.tx).style.removeProperty('--lv'); if (r.top) r.top.style.removeProperty('--lv'); }
    if (!beside || !root.classList.contains('two-col') || root.classList.contains('pair-off')) return false;
    const mates = pairRows.map((r) => rows.get(r.id)).filter(Boolean);
    let pairs = [];
    if (twin && mates.length === rowList.length) pairs = rowList.map((r, i) => [r, mates[i]]);
    else {
      const heads = rowList.filter((r, i) => i === 0 || blockOf(r.id) !== blockOf(rowList[i - 1].id));
      if (heads.length === mates.length && heads.length > 1 && heads.length < rowList.length) pairs = heads.map((r, i) => [r, mates[i]]);
    }
    // On a compare tab two versions in verse are set at one pitch (in the stylesheet), and the rows that hold
    // the two ends of a pair begin level, where the pairs keep their order in both passages and no row has to
    // be moved far: a second passage that answers only the last lines of the first is left to `pair-low`.
    let byTies = false;
    const lens = plate.lenses[current >= 0 ? current : opts.lens || 0] || {};
    if (!pairs.length && !twin && (lens.ties || []).length) {
      const list = [];
      for (const t of lens.ties) {
        if (!t.a || !t.b || second(t.a[0]) || !second(t.b[0])) continue;
        const a = rows.get(String(t.a[0])); const z = rows.get(String(t.b[0]));
        if (a && z && rowList.includes(a) && mates.includes(z)) list.push([a, z]);
      }
      list.sort((x, y) => rowList.indexOf(x[0]) - rowList.indexOf(y[0]) || mates.indexOf(x[1]) - mates.indexOf(y[1]));
      let lastA = -1; let lastZ = -1;
      for (const [a, z] of list) { const ia = rowList.indexOf(a); const iz = mates.indexOf(z); if (ia > lastA && iz > lastZ) { pairs.push([a, z]); lastA = ia; lastZ = iz; } }
      byTies = pairs.length > 0;
    }
    const far = byTies ? (parseFloat(getComputedStyle(root).getPropertyValue('--fs')) || 30) * 2.4 : Infinity;
    for (const [a, z] of pairs) {
      const wa = firstWord(a); const wz = firstWord(z);
      if (!wa || !wz) continue;
      const d = baseOf(wa) - baseOf(wz);
      if (Math.abs(d) > far) { for (const r of rows.values()) { (r.el || r.tx).style.removeProperty('--lv'); if (r.top) r.top.style.removeProperty('--lv'); } return false; }
      // the room goes over the three points of a gap, a direction or a name, where the row has one over it, so that
      // they move with it
      if (d > 0.5) (z.top || z.tx).style.setProperty('--lv', `${d.toFixed(1)}px`); else if (d < -0.5) (a.el || a.tx).style.setProperty('--lv', `${(-d).toFixed(1)}px`);
    }
    return pairs.length > 0;
  }
  // On a plate of one column wide enough to set the key beside the caption (520 px to 879), the key has a
  // third of the width however long it is. There too a key much taller than its caption goes under the
  // caption, across the plate, in columns: the test and the look of `keys-wide` under two passages.
  function wideKey() {
    const pane = lone ? null : panes[current >= 0 ? current : opts.lens || 0];
    if (!pane || root.classList.contains('two-col')) return;
    pane.classList.remove('keys-wide');
    if (root.clientWidth < 520 || root.clientWidth >= 880) return;
    const cap = pane.querySelector('.cap'); const key = pane.querySelector('.aside');
    if (cap && key && key.offsetHeight > cap.offsetHeight * 1.5 + 40) pane.classList.add('keys-wide');
  }
  // does a Word tab set the sense under every line of the first passage, or under every line but one?
  const sensed = (lens) => {
    if (lens.kind !== 'word' || rowList.length < 2) return false;
    const got = new Set((lens.notes || []).filter((x) => x.gloss && !second(x.row)).map((x) => String(x.row)));
    return got.size >= rowList.length - 1;
  };
  function arrange() {
    if (lone || !beside) { wideKey(); keyUp(); return; }
    const takes = root.classList.contains('own-stage');
    const two = root.clientWidth >= 940 && !takes;
    const lens = plate.lenses[current >= 0 ? current : opts.lens || 0] || {};
    const idle = !marksPair(lens);
    const off = idle && (other || (peers && !two && !takes));
    // (two passages of equal standing in two languages too: the one the tab does not mark goes after the caption,
    // unless it is the English of the other. And on a Word tab that sets the sense under every line, the reader has
    // the sense already: there an English version that is not the passage's equal goes after the notes, so that
    // the glosses are not parted from the notes on the same words.)
    const after = idle && !off && !takes && (!english || (!twin && sensed(lens))) && root.clientWidth < 880;
    root.classList.toggle('two-col', two);
    root.classList.toggle('pair-off', off);
    root.classList.toggle('pair-after', after);
    // a version that the tab showing does not mark is set as plain prose, without the room for marks
    root.classList.toggle('pair-idle', idle);
    // and the other way about: on a narrow plate, where the two stand one under the other, a first passage
    // that the tab does not mark gives way to the second, which it does
    root.classList.toggle('main-off', (other || peers) && !idle && !two && !takes && !marksMain(lens));
    if (after) { if (beside.parentNode !== body) body.append(beside); } else if (beside.parentNode !== stage) stage.insertBefore(beside, own);
    // two passages in one type, side by side, begin level: where one label takes more lines than the other,
    // the shorter is given the height of the taller
    if (twin) {
      const la = poem.querySelector(':scope > .beside-l'); const lb = beside.querySelector(':scope > .beside-l');
      if (la && lb) {
        la.style.minHeight = ''; lb.style.minHeight = '';
        const ha = la.getBoundingClientRect().height; const hb = lb.getBoundingClientRect().height;
        if (two && !off && ha > 0 && hb > 0 && Math.abs(ha - hb) > 1) (ha < hb ? la : lb).style.minHeight = `${Math.max(ha, hb)}px`;
      }
    }
    // the caption under both passages first, so that each can be measured at its own height
    root.classList.remove('side-in', 'side-a', 'side-b', 'pair-low');
    if (root.classList.contains('keys-under')) { root.classList.remove('keys-under'); place(); }
    if (side.parentNode !== body) body.insertBefore(side, beside.parentNode === body ? beside : null);
    panes.forEach((x) => x.classList.remove('keys-wide'));
    // rows that answer each other are set level first, and the two blocks measured as they then stand
    // (they are measured at one pitch, as the stylesheet sets two versions in verse on a compare tab; where no
    // pair can then stand level, the version goes back to its own pitch: `unlevel`)
    root.classList.remove('unlevel');
    const levelled = level();
    let where = '';
    const measure = () => {
      where = '';
      if (!two) return;
      const hp = poem.offsetHeight; const hb = off ? 0 : beside.offsetHeight;
      if (off || hp - hb >= 200) where = 'b'; else if (hb - hp >= 200) where = 'a';
    };
    measure();
    // a short second passage whose marks answer the last lines of the first stands at the foot of its column, beside
    // them (`pair-low`), and keeps the pitch: its rows stand level with those lines. It is found at one pitch, as ever.
    const tied = (lens.ties || []).flatMap((x) => [x.a, x.b]).filter((e) => e && !second(e[0])).map((e) => rowList.findIndex((r) => r.id === String(e[0]))).filter((i) => i >= 0);
    const low = where === 'b' && !off && !levelled && tied.length > 0 && rowList.length > 3 && tied.reduce((m, i) => m + i, 0) / tied.length > (rowList.length - 1) * 0.6;
    // every other second passage of which no row stands level goes back to its own pitch, and is measured again
    if (!levelled && !low) { root.classList.add('unlevel'); measure(); }
    if (where) {
      root.classList.add('side-in', `side-${where}`);
      stage.insertBefore(side, own);
      if (low) {
        root.classList.add('pair-low');
        // there it keeps the pitch only if a row of it then stands level with the line it answers (within 10 px:
        // two types on one pitch stand a few px apart; rows parted by a name or a gap stand far more)
        const near = (lens.ties || []).some((t) => {
          if (!t.a || !t.b || second(t.a[0]) || !second(t.b[0])) return false;
          const wa = firstWord(rows.get(String(t.a[0]))); const wz = firstWord(rows.get(String(t.b[0])));
          return !!wa && !!wz && Math.abs(baseOf(wa) - baseOf(wz)) <= 10;
        });
        if (!near) root.classList.add('unlevel');
      }
      // The key stands under the caption, under the shorter passage. Where it runs on far below the longer
      // passage, paper is left bare under that one. The key then goes under both passages, across the plate,
      // as it does under a short passage that stands alone (`low`), if the plate is at least 120 px shorter
      // for it: the key stands nearer its marks and nothing is bare.
      const key = asides[current >= 0 ? current : opts.lens || 0];
      if (key && !off && !root.classList.contains('pair-low')) {
        const foot = (where === 'b' ? poem : beside).getBoundingClientRect().bottom;
        if (key.getBoundingClientRect().bottom - foot > 120) {
          const tall = root.offsetHeight;
          root.classList.add('keys-under'); place();
          if (tall - root.offsetHeight < 120) { root.classList.remove('keys-under'); place(); }
        }
      }
    } else if (two) {
      // under two passages: a key much taller than its caption goes under the caption, across the plate
      const pane = panes[current >= 0 ? current : opts.lens || 0];
      const cap = pane && pane.querySelector('.cap'); const key = pane && pane.querySelector('.aside');
      if (cap && key && key.offsetHeight > cap.offsetHeight * 1.5 + 40) pane.classList.add('keys-wide');
    }
    wideKey();
    keyUp();
  }

  // ----- size: verse is fitted to the width and keeps its lines whole where it can -----
  const kinds = new Set(plate.lenses.map((l) => l.kind));
  // a rhyme at a line's end has a letter after the line and a join from it: room is kept for them at the right.
  // (A Rhyme tab that shows only sounds coming back inside the lines has neither, and keeps none.)
  const ended = plate.lenses.some((l) => l.kind === 'rhyme' && Object.keys(l.ends || {}).length > 0);
  // (Of two passages in one type, the second keeps that room only where a line of its own ends on a rhyme.)
  const endedB = ended && plate.lenses.some((l) => l.kind === 'rhyme' && pairRows.some((r) => (l.ends || {})[r.id] != null));
  let poemH = 0;
  function fit() {
    // four tabs or more that would take a second row (a small phone) stand closer, so that they keep to one
    tabs.classList.remove('close', 'closer');
    if (foot) foot.classList.remove('close', 'closer');
    const broken = () => tabs.children.length > 3 && tabs.lastChild.offsetTop > tabs.firstChild.offsetTop + 4;
    if (broken()) tabs.classList.add('close');
    // (and a hair closer still where even that row breaks: four long names)
    if (broken()) tabs.classList.add('closer');
    root.classList.add('setup');
    // the passage is measured, so it must be there: a drawing that has taken its place steps back for a moment
    const drawing = root.classList.contains('own-stage');
    if (drawing) { root.classList.remove('own-stage'); own.hidden = true; }
    root.classList.remove('main-off');
    if (!lone && beside) root.classList.toggle('two-col', root.clientWidth >= 940);
    const narrow = ctx.narrow();
    const wide = root.clientWidth >= 880;
    let band = 10;
    for (const k of kinds) band = Math.max(band, BAND[k] || 10);
    root.style.setProperty('--band', `${Math.round(band * (narrow ? 0.88 : 1))}px`);
    root.classList.remove('turns');
    // (a line that turned after a dash inside a token is measured whole, like the others)
    for (const r of rows.values()) if (r.dash) r.tx.classList.remove('brk');
    if (verse) {
      const count = twin ? Math.max(textRows.length, pairRows.length) : textRows.length;
      const fitB = twin ? pairRows.map((r) => rows.get(r.id)).filter((r) => r && r.data.kind === 'v') : [];
      const fitRows = rowList.filter((r) => r.data.kind === 'v').concat(fitB);
      const max = opts.max || (count <= 3 ? 48 : count <= 6 ? 42 : count <= 10 ? 38 : 34);
      const min = Math.min(max, narrow ? 16.5 : 20);
      root.style.setProperty('--fs', `${max}px`);
      const reserve = ended ? (narrow ? 46 : 80) : 4;
      // (a direction that stays in the line after the verse is not reckoned: it may turn, and goes under its line;
      // a row set deeper in is reckoned with the room it stands in by)
      const inOf = (r) => (parseFloat(getComputedStyle(r.tx).marginLeft) || 0) + (r.el ? parseFloat(getComputedStyle(r.el).paddingLeft) || 0 : 0);
      const widest = (list) => { let w = 0; for (const r of list) { const range = document.createRange(); range.selectNodeContents(r.tx); if (r.tailAt) range.setEndBefore(r.tailAt); w = Math.max(w, range.getBoundingClientRect().width + (r.data.indent ? inOf(r) : 0)); } return kinds.has('beat') ? w * 1.04 : w; };
      // two passages in one type of which only the first has such lines: each is fitted to its own width
      const apart = twin && beside && ended && !endedB;
      const parts = apart ? [[fitRows.filter((r) => !fitB.includes(r)), poem.clientWidth - reserve], [fitB, beside.clientWidth - 4]]
        : [[fitRows, (twin && beside ? Math.min(poem.clientWidth, beside.clientWidth) : poem.clientWidth) - reserve]];
      let fs = max;
      for (const [list, avail] of parts) { const longest = widest(list); if (longest > avail && longest > 0) fs = Math.min(fs, (max * avail) / longest); }
      if (fs < min) { fs = min; root.classList.add('turns'); }
      root.style.setProperty('--fs', `${fs.toFixed(2)}px`);
      // where lines turn, a line that just fills the measure would leave no room at its end for the letter of
      // its rhyme and the arc from it: the lines of a plate that has a rhyme tab stop that much short of the edge
      const edge = twin && beside && root.classList.contains('two-col') ? beside.getBoundingClientRect().left : root.getBoundingClientRect().right;
      const end = ended ? Math.max(0, Math.ceil((narrow ? 30 : 42) - (edge - poem.getBoundingClientRect().right))) : 0;
      root.style.setProperty('--end', `${end}px`);
      if (apart) beside.style.setProperty('--end', '0px');
      // a version's line that the joins pass may run into the room at the plate's edge only so far that the joins,
      // closed up to six tenths of their room at the most, still stand between it and the edge
      const pend = lanes ? Math.max(0, Math.ceil(6 + 0.6 * ((narrow ? 7 : 12) + (lanes - 1) * (narrow ? 6 : 11)) - (edge - 3 - poem.getBoundingClientRect().right))) : 0;
      root.style.setProperty('--pend', `${pend}px`);
      // Where the lines must turn anyway, the type need not stay at its floor. It is set as large as it can be,
      // up to 22 px, while no line turns that does not turn at the floor on some tab, no line that turns at
      // its stop has a part too long for the measure, and no word runs out of it. The lines are counted at
      // the floor as the narrowest tab sets them (letters of one weight: `even`; no room for the number of a
      // remark) and at each larger size as the widest does (4 per cent wider where the plate has a Beat tab,
      // and with that room), whichever tab is showing: so the size does not hang on the tab.
      if (root.classList.contains('turns') && fs < 22) {
        const wider = kinds.has('beat') ? 1.04 : 1;
        const roomOf = (r) => { const cs = getComputedStyle(r.tx); return { left: parseFloat(cs.paddingLeft) || 0, right: parseFloat(cs.paddingRight) || 0 }; };
        const long = (r) => { const pad = roomOf(r); return r.keeps.some((k) => k.getBoundingClientRect().width > r.tx.clientWidth - pad.left - pad.right); };
        const taken = (r) => { let n = 0; let last = -1e9; for (let i = r.first; i <= r.last; i++) { const t = r.words[i].el.getBoundingClientRect().top; if (t > last + 4) { n++; last = t; } } return n; };
        const out = (r) => { const q = r.tx.getBoundingClientRect(); const edge = q.right - roomOf(r).right + 0.5; for (let i = r.first; i <= r.last; i++) if (r.words[i].el.getBoundingClientRect().right > edge) return true; return false; };
        const lines = () => fitRows.reduce((n, r) => n + taken(r), 0);
        const numbered = fitRows.flatMap((r) => [...r.tx.querySelectorAll('.numd')]);
        root.classList.add('even');
        // at the floor: which lines turn freely because a part is too long, and how many lines of the screen all take
        for (const r of fitRows) if (r.keeps) r.tx.classList.toggle('free', long(r));
        const held = fitRows.filter((r) => r.keeps && !r.tx.classList.contains('free'));
        numbered.forEach((w) => w.classList.remove('numd'));
        const base = lines();
        numbered.forEach((w) => w.classList.add('numd'));
        for (let s = Math.floor(fs * 2) / 2 + 0.5; s <= 22; s += 0.5) {
          root.style.setProperty('--fs', `${(s * wider).toFixed(2)}px`);
          if (held.some(long) || lines() > base || fitRows.some(out)) break;
          fs = s;
        }
        root.classList.remove('even');
        root.style.setProperty('--fs', `${fs.toFixed(2)}px`);
      }
    } else {
      root.style.setProperty('--fs', `${Math.min(opts.max || 99, narrow ? 20 : twin && root.clientWidth >= 940 ? 22 : wide ? 26 : 24)}px`);
    }
    // a line turns where its reading says, unless one of the two parts is itself too long for the plate
    for (const r of rows.values()) {
      if (!r.keeps) continue;
      r.tx.classList.remove('free');
      const cs = getComputedStyle(r.tx);
      const room = r.tx.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
      if (r.keeps.some((k) => k.getBoundingClientRect().width > room)) r.tx.classList.add('free');
    }
    // a direction that stays in the line keeps whole, unless it is itself too long for the plate
    for (const r of rows.values()) {
      if (!r.stays) continue;
      const cs = getComputedStyle(r.tx);
      const room = r.tx.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
      for (const b of r.stays) { b.classList.remove('long'); if (b.getBoundingClientRect().width > room) b.classList.add('long'); }
    }
    // and a line that turns after a dash inside a token: the break works only while the line does not fit
    for (const r of rows.values()) {
      if (!r.dash) continue;
      const a = r.words[r.first].el.getClientRects()[0]; const zs = r.words[r.last].el.getClientRects(); const z = zs[zs.length - 1];
      if (a && z && z.bottom > a.bottom + 4) r.tx.classList.add('brk');
    }
    // a short passage beside a long margin leaves bare paper under it: its keys go under it instead
    if (!lone) {
      keyUp(false);
      asides.forEach((a, i) => { if (a && a.parentNode !== panes[i]) panes[i].append(a); });
      under.hidden = true;
      root.classList.remove('low');
      poemH = stage.offsetHeight;
      const tallest = Math.max(0, ...panes.map((p) => p.offsetHeight));
      // (much shorter than the tallest caption with its key, or shorter by more than 200 px)
      if (wide && !root.classList.contains('is-beside') && asides.some(Boolean) && poemH > 0 && (poemH < tallest * 0.62 || (tallest - poemH > 200 && poemH < tallest * 0.75))) {
        // ... unless a tab would be much longer for it. A long key under a passage of middling height made the
        // plate longer on every tab and left the paper bare beside it, under the caption (moby-dick `rails`
        // after the eighth mending, when its key gained a row: 1,087 px for 945). So each tab that has a key is
        // measured both ways, and the key stays beside the passage where sending it under would make any tab
        // more than 140 px longer. (Of the six other plates that take their key under at 1280, the one that
        // grows most grows by 107 px, and reads well so.)
        const showing = current; const on = panes.map((x) => x.classList.contains('is-on'));
        let cost = -Infinity;
        asides.forEach((a, i) => {
          if (!a) return;
          panes.forEach((x, k) => x.classList.toggle('is-on', k === i));
          current = i;
          root.classList.remove('low'); place(); const beside = root.offsetHeight;
          root.classList.add('low'); place(); cost = Math.max(cost, root.offsetHeight - beside);
        });
        panes.forEach((x, k) => x.classList.toggle('is-on', on[k]));
        current = showing;
        root.classList.toggle('low', cost <= 140);
      }
      place();
    }
    if (drawing) { root.classList.add('own-stage'); own.hidden = false; }
    arrange();
    root.getBoundingClientRect();
    root.classList.remove('setup');
  }

  // ----- the lenses -----
  function wipe() {
    timers.forEach(clearTimeout); timers = [];
    clear(ov);
    stage.querySelectorAll('.gl').forEach((g) => g.remove());
    root.querySelectorAll('.sy.on').forEach((s) => s.classList.remove('on'));
  }
  function draw(run) {
    wipe();
    const lens = plate.lenses[current]; const mod = mods[current];
    if (!mod || !mod.draw) return;
    ov.setAttribute('class', 'ov setup');
    mod.draw(ctx, lens, run, current);
    ov.getBoundingClientRect();
    ov.setAttribute('class', 'ov');
  }
  function setLens(i, run) {
    const same = i === current;
    if (!same && current >= 0 && mods[current] && mods[current].off) mods[current].off(ctx, plate.lenses[current], current);
    current = i;
    const lens = plate.lenses[i]; const mod = mods[i];
    [...root.classList].filter((c) => c.startsWith('lens-')).forEach((c) => root.classList.remove(c));
    root.classList.add(`lens-${lens.kind}`);
    // a paragraph of prose among lines of verse keeps the room for marks under each of its lines only on a
    // tab that marks it; and so does a line of verse that has turned (the stylesheet: a line that has not
    // turned stands exactly where it did)
    if (verse) {
      for (const r of rowList) r.tx.classList.toggle('plain', !marksRow(lens, r.id));
      if (twin) for (const p of pairRows) { const r = rows.get(p.id); if (r) r.tx.classList.toggle('plain', !marksRow(lens, r.id)); }
    }
    // A row of a second passage that carries a pair's number or a gloss under it on this tab (`hung`): a name,
    // a direction or the points of a gap that follow it at once keep clear of that mark (the stylesheet).
    if (beside) {
      const hung = new Set();
      if ((lens.ties || []).length > 1) lens.ties.forEach((t) => ['a', 'b'].forEach((k) => { if (t[k] && second(t[k][0])) hung.add(String(t[k][0])); }));
      (lens.notes || []).forEach((x) => { if (second(x.row)) hung.add(String(x.row)); });
      for (const p of pairRows) { const r = rows.get(p.id); if (r) r.tx.classList.toggle('hung', hung.has(String(p.id))); }
    }
    root.dataset.lens = i;
    [...tabs.children].forEach((b, k) => b.setAttribute('aria-pressed', String(k === i)));
    if (foot) [...foot.children].forEach((b, k) => b.setAttribute('aria-pressed', String(k === i)));
    panes.forEach((p, k) => p.classList.toggle('is-on', k === i));
    place();
    const takes = !!(mod && mod.stage === 'own') || !!plate.noText;
    own.hidden = !takes; root.classList.toggle('own-stage', takes);
    arrange();
    light([], false);
    if (!same && mod && mod.on) mod.on(ctx, lens, i);
    // a lens may change the weight of letters, and so where prose turns: set the rows level again
    if (!takes) arrange();
    wipe();
    // letters change weight between lenses, so the marks are placed once they have settled: 430 ms after
    // the tap, and on a page too busy to have brought them to rest by then, as soon as none is still on its
    // way (looked at every 40 ms, for two seconds at most; with motion turned off nothing is ever on its way)
    let looks = 0;
    const settled = () => {
      const moving = looks++ < 50 && !!root.getAnimations && root.getAnimations({ subtree: true }).some((a) => a.transitionProperty === 'font-weight' && a.playState === 'running');
      if (moving) timers.push(setTimeout(settled, 40)); else draw(run);
    };
    timers.push(setTimeout(settled, same || still() ? 20 : 430));
  }

  let started = false;
  let io;
  function start() {
    if (started) return; started = true;
    if (io) io.disconnect();
    fit();
    setLens(current < 0 ? opts.lens || 0 : current, true);
  }
  let rs; let lastWidth = 0;
  const onResize = () => {
    clearTimeout(rs);
    rs = setTimeout(() => { if (current < 0 || root.clientWidth === lastWidth) return; lastWidth = root.clientWidth; fit(); draw(false); }, 160);
  };
  addEventListener('resize', onResize);
  // a face that arrives late changes the width of words: place the marks again
  const onFonts = () => { if (current >= 0 && root.isConnected) { fit(); draw(false); } };
  if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', onFonts);
  fontsReady().then(() => {
    if (!root.isConnected) return;
    lastWidth = root.clientWidth;
    fit();
    if (opts.now || typeof IntersectionObserver !== 'function') { start(); return; }
    // the marks are in place at once; they are drawn in when the plate comes into view
    setLens(opts.lens || 0, false);
    io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) start(); }, { threshold: 0.25 });
    io.observe(stage);
  });

  return {
    root, ctx,
    setLens: (i) => setLens(i, true),
    destroy() {
      removeEventListener('resize', onResize);
      if (document.fonts && document.fonts.removeEventListener) document.fonts.removeEventListener('loadingdone', onFonts);
      if (io) io.disconnect(); timers.forEach(clearTimeout); root.remove();
    },
  };
}
