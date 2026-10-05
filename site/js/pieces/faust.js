// Faust: the two drawings of its own.
//
//   name / Names:      everything Mephistopheles is called and everything he comes as, one row
//                      each in the order of the play, with a lane for each mouth that says it;
//                      the name printed over his speeches stands first, and no lane has a dot for it
//   wheel / Measures:  the measures of Part I in the order of the play, each with one line of it
//                      drawn in the marks of the Beat tab: a stroke down for each beat, to one scale
//
// Both are drawn from the reading's own `facts` (remake/works/faust/reading.json) each time the
// page runs. No name, word or number of the play is typed here: the headings, the lane heads and
// the column heads are the facts' own values and the names of their keys.

import { RED, INK, QUIET } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

const str = (v) => String(v == null ? '' : v).trim();
// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const long = (node, guess) => { try { return node.getComputedTextLength() || guess; } catch (e) { return guess; } };
const tall = (node, guess) => node.getBoundingClientRect().height || guess;
const sized = (d, h) => { const H = Math.ceil(h); d.svg.setAttribute('height', H); d.svg.setAttribute('viewBox', `0 0 ${d.w} ${H}`); };
// the first number in a fact such as a single line, a run of lines or "before" a line: where its row stands in the play
const firstOf = (s) => { const m = /\d+/.exec(str(s)); return m ? Number(m[0]) : Infinity; };
// a place in the book printed here: its part, and the block of that part
const placeOf = (read) => { const m = /^(.+):(\d+)$/.exec(str(read)); return m ? { part: m[1], block: Number(m[2]) } : null; };

// Where this plate's passage stands in the book printed here: the part its English is taken from, and
// the blocks of that part its rows come from.
function here(ctx) {
  const pair = (ctx.plate && ctx.plate.pair) || {};
  const blocks = new Set();
  (pair.rows || []).forEach((r) => { const m = /(\d+)\.\d+$/.exec(str(r && r.id)); if (m) blocks.add(Number(m[1])); });
  return { part: str(pair.src), blocks };
}

// Words broken into lines no wider than `width`, measured as they will be set in class `cls`. The
// lines are then drawn in as far as they will go without becoming more, so that no word is left alone.
function broken(d, words, width, cls) {
  const probe = d.text(0, 0, '', { cls });
  probe.style.visibility = 'hidden';
  const list = str(words).split(/\s+/).filter(Boolean);
  const got = new Map();
  const fit = (s) => { if (!got.has(s)) { probe.textContent = s; got.set(s, long(probe, s.length * 7)); } return got.get(s); };
  const fill = (w) => {
    const out = [];
    let cur = '';
    list.forEach((x) => { const next = cur ? `${cur} ${x}` : x; if (cur && fit(next) > w) { out.push(cur); cur = x; } else cur = next; });
    if (cur) out.push(cur);
    return out;
  };
  let lines = fill(width);
  if (lines.length > 1) {
    for (let w = width - 8; w > width * 0.5; w -= 8) { const t = fill(w); if (t.length > lines.length) break; lines = t; }
  }
  const widths = lines.map(fit);
  probe.remove();
  return { lines, widths, wide: Math.max(0, ...widths) };
}

// the words of a link as rich() reads them: the place is opened only where there is a book to open
const linked = (words, read) => (canRead() && read && !/[)\s]/.test(read) ? `[${words}](#/read/${read})` : words);
// words of the reading set over the drawing may hold marks of their own; inside a link they are left out
const bare = (s) => str(s).replace(/<\/?i>/g, '').replace(/[*\[\]]/g, '');
// A note's first `n` marks are the drawing's own (a place that opens, a run of lines) and are set in
// ink. A mark the reading sets inside its own words (a title) keeps the note's colour, as in a remark.
const inked = (note, n = Infinity) => {
  [...note.children].slice(0, n).forEach((x) => [x, ...x.querySelectorAll('a, i')].forEach((y) => { y.style.color = INK; }));
  return note;
};

// ---------------------------------------------------------------- name / Names
//
// facts: a list of rows. Read from each: `kind` (the heading its row stands under), `German` (set
// as a name), `in English` (under it), `who says it` (its lane), `line` (where; a row with no line
// is said nowhere and gets no mark), `read` (the place the line opens in the book printed here).
// A row may also hold one number under a key of its own: it is drawn as that many strokes, with
// the number and the key's name beside them.
const NAMES = { kind: 'kind', name: 'German', gloss: 'in English', who: 'who says it', line: 'line' };

function namesRows(ctx, facts) {
  if (!Array.isArray(facts) || !facts.length) throw new Error('facts: no rows');
  Object.values(NAMES).forEach((k) => { if (!facts.some((r) => r && str(r[k]))) throw new Error(`facts: no ${k}`); });
  const mine = new Set([...Object.values(NAMES), 'read']);
  const at = here(ctx);
  const rows = facts.filter((r) => r && str(r[NAMES.name])).map((r) => {
    const place = placeOf(r.read);
    const line = str(r[NAMES.line]);
    const count = Object.keys(r).find((k) => !mine.has(k) && typeof r[k] === 'number' && Number.isFinite(r[k]) && r[k] > 0);
    return {
      kind: str(r[NAMES.kind]), name: str(r[NAMES.name]), gloss: str(r[NAMES.gloss]), who: str(r[NAMES.who]), line, read: str(r.read),
      n: firstOf(line), count: count ? { key: count, n: Math.round(r[count]) } : null,
      here: !!(line && place && place.part === at.part && at.blocks.has(place.block)),
    };
  });
  // a lane for each mouth, in the order in which they first speak
  const lanes = [...new Set(rows.filter((r) => r.line).sort((a, b) => a.n - b.n).map((r) => r.who))];
  rows.forEach((r) => { r.lane = r.line ? lanes.indexOf(r.who) : -1; });
  // the rows under their headings, each heading's rows in the order of the play
  const groups = [...new Set(rows.map((r) => r.kind))].map((kind) => ({ kind, rows: rows.filter((r) => r.kind === kind).sort((a, b) => a.n - b.n) }));
  return { rows, lanes, groups };
}

const names = {
  name: 'Names',
  stage: 'own',
  draw(ctx, lens, run) {
    const { rows, lanes, groups } = namesRows(ctx, lens.facts);
    const d = sheet(ctx, lens, run, 100);
    const W = d.w;
    const narrow = W < 460;
    const P = narrow ? 13 : 18;                                   // from lane to lane
    const lane = (k) => (narrow ? 4 : 6) + k * P + 0.5;
    const NL = 22; const HL = 16; const GAP = 10; const STEP = 4; const BAND = 10; const TEN = 5;
    const when = (i) => 300 + i * 90;
    const place = (r) => linked(`*${bare(r.line)}*`, r.read);
    let i = 0;
    groups.forEach((g) => g.rows.forEach((r) => { r.i = i++; }));

    // Where there is room the line stands in a column of its own, between the lanes and the words,
    // set to the right so that the numbers stand under one another; where there is not, it begins
    // the English.
    const NX = Math.round(lane(Math.max(0, lanes.length - 1)) + (narrow ? 13 : 20));
    let NW = 0;
    if (!narrow) {
      rows.filter((r) => r.line).forEach((r) => {
        r.where = inked(d.note(NX, 0, 10, place(r), { at: when(r.i) }));
        r.where.style.width = 'auto'; r.where.style.whiteSpace = 'nowrap';
        r.whereW = Math.ceil(r.where.getBoundingClientRect().width);
        NW = Math.max(NW, r.whereW);
      });
    }
    const TX = NW ? NX + NW + 14 : NX;                            // where the words begin
    const TW = W - TX;

    // ----- the words of each row, measured -----
    groups.forEach((g) => { g.label = broken(d, g.kind, TW, 'dg-lab'); });
    groups.forEach((g) => g.rows.forEach((r) => {
      r.label = broken(d, r.name, TW, 'dg-name');
      r.note = inked(d.note(TX, 0, TW, `${r.line && !r.where ? `${place(r)}\u2002` : ''}${r.gloss}`, { at: when(r.i) + 60 }), r.line && !r.where ? 1 : 0);
      r.note.style.textWrap = 'balance';
      r.noteH = tall(r.note, 17);
      // strokes stand in tens, as many tens to a row as the width holds
      if (r.count) { r.per = 10 * Math.max(1, Math.floor((TW + TEN) / (10 * STEP + TEN))); r.bandH = Math.ceil(r.count.n / r.per) * BAND; }
    }));

    // ----- where everything stands -----
    const top = 10;
    const headY = (k) => top + 18 + k * HL;
    let y = headY(Math.max(0, lanes.length - 1)) + 24;
    const colY = y;
    y += 13 + 9;
    groups.forEach((g) => {
      g.rule = y; g.head = y + 17; y += 17 + (g.label.lines.length - 1) * 13 + 8;
      g.rows.forEach((r) => {
        r.base = y + 15;
        r.noteTop = y + r.label.lines.length * NL;
        y = r.noteTop + r.noteH;
        if (r.count) { r.bandTop = y + 6; y = r.bandTop + r.bandH + 14; }
        y += GAP;
      });
      y += 4;
    });
    const foot = y - GAP - 4;
    sized(d, foot + 2);

    // ----- the lanes: a head for each mouth, and its line down the rows -----
    d.text(0, top, NAMES.who, { cls: 'dg-lab' });
    const marks = lanes.map(() => []);
    lanes.forEach((who, k) => {
      d.rule(lane(k), headY(k) + 5, lane(k), foot, { at: 60 * k });
      marks[k].push(d.text(lane(k) - 3, headY(k), who, { at: 60 * k }));
    });
    // what stands in each row, named by the facts' own keys
    d.text(TX, colY, NAMES.name, { cls: 'dg-lab' });
    d.text(TX, colY + 13, NW ? NAMES.gloss : `${NAMES.line} · ${NAMES.gloss}`, { cls: 'dg-lab' });
    if (NW) d.text(NX + NW, colY, NAMES.line, { cls: 'dg-lab', anchor: 'end' });

    // ----- the rows -----
    groups.forEach((g) => {
      d.rule(NX, g.rule + 0.5, W, g.rule + 0.5);
      g.label.lines.forEach((s, j) => d.text(TX, g.head + j * 13, s, { cls: 'dg-lab', fill: INK }));
      g.rows.forEach((r) => {
        const at = when(r.i);
        r.label.lines.forEach((s, j) => d.text(TX, r.base + j * NL, s, { cls: 'dg-name', at }));
        r.note.style.top = `${r.noteTop}px`;
        if (r.where) { r.where.style.left = `${NX + NW - r.whereW}px`; r.where.style.top = `${r.base - 13}px`; }
        if (r.lane >= 0) marks[r.lane].push(d.dot(lane(r.lane), r.base - 5, narrow ? 3.6 : 4, { fill: r.here ? RED : INK, at }));
        if (r.count) {
          // as many strokes as the number, row under row
          let p = '';
          for (let q = 0; q < r.count.n; q++) { const c = q % r.per; p += `M${TX + c * STEP + Math.floor(c / 10) * TEN + 0.5} ${r.bandTop + Math.floor(q / r.per) * BAND}v6`; }
          d.path(p, { stroke: INK, width: 1, at: at + 150 });
          d.text(TX, r.bandTop + r.bandH + 10, `${num(r.count.n)} ${r.count.key}`, { cls: 'dg-n', at: at + 150 });
        }
      });
    });

    if (rows.some((r) => r.here)) d.keys([{ mark: 'dot', color: RED, text: 'in the lines of this passage' }, { mark: 'dot', color: INK, text: 'elsewhere in the play' }]);

    // ----- a lane answers the pointer: how many of the rows under each heading are its own -----
    lanes.forEach((who, k) => {
      const parts = groups.map((g) => {
        const all = g.rows.filter((r) => r.lane >= 0).length;
        const n = g.rows.filter((r) => r.lane === k).length;
        return n ? `${g.kind}, ${n} of ${all}` : '';
      }).filter(Boolean);
      const words = `${who.charAt(0).toUpperCase()}${who.slice(1)}: ${parts.join('; ')}`;
      const hit = d.bar(lane(k) - P / 2, headY(k) + 5, P, foot - headY(k) - 5, { fill: 'transparent' });
      const all = marks[k].concat(hit);
      all.forEach((node) => d.hot(node, words, all.filter((x) => x !== node)));
    });
  },
};

// ------------------------------------------------------------ wheel / Measures
//
// facts: a list of rows. Read from each: `measure` (set as a name), `in plain words` (under it),
// `scene` (the place, which opens `read`), `lines`, `who speaks`. The beats of one line are read
// from `beats` where a row has it (a number, or a list where the line changes its length), and
// otherwise from the number set in words before "beat" in `in plain words` or in `measure`. A row
// from which no number of beats can be read has no line drawn: prose has none to draw.
// `break after` (a number of beats), or the words "break in the middle", sets the mark of a pause.
const MEAS = { name: 'measure', plain: 'in plain words', scene: 'scene', lines: 'lines', who: 'who speaks' };
const COUNT = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
const ONE = `(?:${COUNT.join('|')}|\\d+)`;
const AND = '(?:,\\s*and\\s+|,\\s*|\\s+and\\s+|\\s+or\\s+|\\s+to\\s+)';
const BEATS = new RegExp(`\\b(${ONE}(?:${AND}${ONE})*)[\\s-]+beats?\\b`, 'i');
const sane = (n) => Number.isFinite(n) && n > 0 && n <= 16;

function beatsOf(r) {
  if (r.beats != null) { const list = [].concat(r.beats).map(Number).filter(sane); if (list.length) return list; }
  for (const s of [r[MEAS.plain], r[MEAS.name]]) {
    const m = BEATS.exec(str(s));
    if (m) return m[1].split(new RegExp(AND, 'i')).map((x) => { const k = COUNT.indexOf(x.toLowerCase()); return k >= 0 ? k + 1 : Number(x); }).filter(sane);
  }
  return [];
}

function measureRows(ctx, facts) {
  if (!Array.isArray(facts) || !facts.length) throw new Error('facts: no rows');
  Object.values(MEAS).forEach((k) => { if (!facts.some((r) => r && str(r[k]))) throw new Error(`facts: no ${k}`); });
  const at = here(ctx);
  const rows = facts.filter((r) => r && str(r[MEAS.name])).map((r) => {
    const beats = beatsOf(r);
    const place = placeOf(r.read);
    const given = Number(r['break after']);
    const mid = beats.length === 1 && beats[0] % 2 === 0 && /\bbreak in the middle\b/i.test(str(r[MEAS.plain])) ? beats[0] / 2 : 0;
    return {
      name: str(r[MEAS.name]), plain: str(r[MEAS.plain]), scene: str(r[MEAS.scene]), lines: str(r[MEAS.lines]), who: str(r[MEAS.who]), read: str(r.read),
      n: firstOf(r[MEAS.lines]), beats, pause: sane(given) ? given : mid, here: !!(place && at.part && place.part === at.part),
    };
  }).sort((a, b) => a.n - b.n);
  if (!rows.some((r) => r.beats.length)) throw new Error('facts: no beats');
  return rows;
}

const measures = {
  name: 'Measures',
  stage: 'own',
  draw(ctx, lens, run) {
    const rows = measureRows(ctx, lens.facts);
    const d = sheet(ctx, lens, run, 100);
    const W = d.w;
    const narrow = W < 460;
    const most = Math.max(...rows.flatMap((r) => r.beats));
    const U = Math.max(8, Math.min(narrow ? 12 : W < 560 ? 15 : 22, Math.floor((W * 0.3 - 16) / most)));   // px to a beat
    const MW = most * U + 16;                                      // the longest line, and the number at its end
    const NL = 22; const HL = 13; const GAP = 16; const TICK = narrow ? 7 : 9; const STEP = TICK + 7;
    const when = (i) => 200 + i * 170;
    const loose = (note) => { note.style.width = 'auto'; note.style.whiteSpace = 'nowrap'; return Math.ceil(note.getBoundingClientRect().width); };
    rows.forEach((r, i) => { r.i = i; });
    // Short facts set on one line with a point between them. A line turns only between two of them,
    // and one of them alone is broken only where it is longer than the measure. A fact given with
    // `ink` is one mark of the drawing's own; such facts come first.
    const packed = (parts, x, width, at) => {
      const out = [];
      let cur = null;
      let words = '';
      let dark = 0;
      parts.filter((p) => p && p.s).forEach((p) => {
        const next = words ? `${words} · ${p.s}` : p.s;
        const k = p.ink ? 1 : 0;
        const n = inked(d.note(x, 0, width, next, { at }), dark + k);
        if (words && loose(n) > width) { n.remove(); out.push(cur); words = p.s; dark = k; cur = inked(d.note(x, 0, width, p.s, { at }), k); } else { if (cur) cur.remove(); cur = n; words = next; dark += k; }
      });
      if (cur) out.push(cur);
      out.forEach((n) => { n.style.whiteSpace = ''; n.style.width = `${width}px`; n.style.textWrap = 'balance'; });
      return out;
    };

    // Where there is room the place has a column of its own at the left: the scene, which opens it,
    // its lines, and who speaks. Where there is not, they stand in one line under the plain words.
    const sceneOf = (r) => (bare(r.scene) ? linked(`*${bare(r.scene)}*`, r.read) : '');
    const linesOf = (r) => (bare(r.lines) ? `*${bare(r.lines)}*` : '');
    let LW = 0;
    if (!narrow) {
      const cap = Math.round(W * 0.27);
      rows.forEach((r) => {
        const set = (words) => (words ? d.note(0, 0, 10, words, { align: 'right', at: when(r.i) }) : null);
        const place = [set(sceneOf(r)), set(linesOf(r))].filter(Boolean);
        if (sceneOf(r)) inked(place[0]);
        LW = Math.max(LW, ...place.map(loose));
        r.where = place.concat(set(r.who) || []);
      });
      LW = Math.min(LW, cap);
      rows.forEach((r) => r.where.forEach((n) => { n.style.whiteSpace = ''; n.style.width = `${LW}px`; n.style.textWrap = 'balance'; }));
    }
    const MX = LW ? LW + 18 : 0;                                    // where the drawn lines begin
    const TX = MX + MW + (narrow ? 8 : 14);                         // where the words begin
    const TW = W - TX;

    // ----- the words of each row, measured -----
    rows.forEach((r) => {
      r.label = broken(d, r.name, TW, 'dg-name');
      r.words = d.note(TX, 0, TW, r.plain, { at: when(r.i) + 80 });
      r.words.style.textWrap = 'balance';
      if (!r.where) r.cite = packed([{ s: sceneOf(r), ink: true }, { s: linesOf(r), ink: true }, { s: r.who }], TX, TW, when(r.i) + 80);
    });

    // ----- the heads of the columns: the names of the facts' keys, and one label for the drawn lines -----
    const heads = [
      { x: MX, lines: broken(d, 'beats in a line', MW - 4, 'dg-lab').lines },
      { x: TX, lines: [MEAS.name, MEAS.plain].concat(LW ? [] : broken(d, `${MEAS.scene} · ${MEAS.lines} · ${MEAS.who}`, TW, 'dg-lab').lines) },
    ];
    if (LW) heads.push({ x: LW, end: true, lines: [MEAS.scene, MEAS.lines, MEAS.who] });
    heads.forEach((h) => h.lines.forEach((s, j) => d.text(h.x, 10 + j * HL, s, { cls: 'dg-lab', anchor: h.end ? 'end' : 'start' })));
    let y = 10 + (Math.max(...heads.map((h) => h.lines.length)) - 1) * HL + 9;
    d.rule(0, y + 0.5, W, y + 0.5);
    y += 12;

    // ----- the rows, in the order of the play -----
    rows.forEach((r) => {
      const at = when(r.i);
      const base = y + 15;
      const color = r.here ? RED : INK;
      r.label.lines.forEach((s, j) => d.text(TX, base + j * NL, s, { cls: 'dg-name', at }));
      let ty = y + r.label.lines.length * NL;
      [r.words].concat(r.cite || []).forEach((n, j) => { ty += j === 1 ? 3 : 0; n.style.top = `${ty}px`; ty += tall(n, 17); });
      let ly = base - 13;
      (r.where || []).forEach((n) => { n.style.top = `${ly}px`; ly += tall(n, 17); });
      // one line of the measure for each number of beats: a rule as long as its beats, a stroke down for each
      r.beats.forEach((b, j) => {
        const yy = base - TICK - 2 + j * STEP;
        d.rule(MX, yy + 0.5, MX + b * U, yy + 0.5, { stroke: color, at });
        let p = '';
        for (let q = 0; q < b; q++) p += `M${MX + (q + 0.5) * U} ${yy}v${TICK}`;
        d.path(p, { stroke: color, width: 1.5, at: at + 120 });
        if (r.pause && r.pause < b) { const x = MX + r.pause * U; d.path(`M${x - 1.5} ${yy - 3}v${TICK + 6}M${x + 1.5} ${yy - 3}v${TICK + 6}`, { stroke: QUIET, width: 0.8, at: at + 200 }); }
        d.text(MX + b * U + 5, yy + TICK + 0.5, String(b), { cls: 'dg-n', fill: color, at: at + 120 });
      });
      y = Math.max(ty, ly, base - 2 + (r.beats.length - 1) * STEP) + GAP;
    });
    sized(d, y - GAP + 2);

    const keys = [{ mark: 'line', color: INK, text: 'one line of the measure, a stroke down for each\u00a0beat' }];
    if (rows.some((r) => r.here && r.beats.length)) keys.unshift({ mark: 'line', color: RED, text: 'the measure of this passage' });
    d.keys(keys);
  },
};

export default { lenses: { 'name:shape': names, 'wheel:shape': measures } };
