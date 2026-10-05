// Agamemnon: the drawing of its own.
//
//   net / Play: the play from its first line of verse to its last, left to
//               right, to scale. A line for each speaker who names a net,
//               with a dot where it is named and the words used set by the
//               dot; under those, a line for each one the net catches, with
//               a dot at the same place; under those, the play itself in the
//               six parts it is printed in here, each named and linked. The
//               place of this passage is red. A place where the Greek has no
//               net is a ring. Two places too close to stand side by side
//               stand one under the other.
//
// Drawn from the reading's own `facts` (remake/works/agamemnon/reading.json):
// verseLines, places (line, speaker, words, caught, greek, read), thisPlate,
// parts (part, name, lines, read) and notCounted. No name, word or number of
// the play is typed here.

import { el, RED, INK } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

const need = (ok, what) => { if (!ok) throw new Error(`facts: no ${what}`); };
const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);
// a small number in a sentence is written as a word, as the captions write it
const SMALL = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const count = (n, one, many = `${one}s`) => `${SMALL[n] || num(n)} ${n === 1 ? one : many}`;
// the names in a list, each once, in the order they first come
const firstSeen = (list, key) => { const out = []; list.forEach((p) => { if (!out.includes(p[key])) out.push(p[key]); }); return out; };
// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const wide = (node) => (node.getComputedTextLength && node.getComputedTextLength()) || String(node.textContent).length * 5.6;
const put = (node, x, y) => { node.setAttribute('x', x); node.setAttribute('y', y); return node; };

// a word of three letters or fewer: an article, a preposition, "and"
const short = (word) => String(word).replace(/[^\p{L}\p{N}]/gu, '').length <= 3;

const PAPER = 'var(--paper)';
const R = 2.7;             // a dot
const HANG = 2 * R + 0.4;  // a dot that would touch the one before it hangs this far under it

// Dots along one line: one that would touch the dot before it hangs under it.
// `col` numbers the dots that stand on the line; those that hang share the
// number of the dot they hang from.
function hang(items) {
  items.forEach((it, i) => {
    const before = items[i - 1];
    const hung = !!before && it.x - before.x < HANG;
    it.depth = hung ? before.depth + 1 : 0;
    it.col = !before ? 0 : before.col + (hung ? 0 : 1);
  });
  return items;
}

// Where the words of each place stand on a speaker's line: over its own dot,
// or under the line where two would touch; never over or under a dot that
// stands elsewhere on the line. Words that fit nowhere are left to the pointer
// and the table.
//   items: [{ x, w, depth, col }] from left to right; lo, hi: the edges they keep inside
function setWords(items, lo, hi) {
  const GAP = 9; const PAD = 3; const CLEAR = 7;
  const n = items.length;
  // how far left and right the words of each place may stand
  const room = items.map((it) => {
    const left = items.filter((o) => o.col < it.col).map((o) => o.x + CLEAR);
    const right = items.filter((o) => o.col > it.col).map((o) => o.x - CLEAR);
    return { a: Math.max(lo, ...left, it.x + PAD - it.w), z: Math.min(Math.min(hi, ...right) - it.w, it.x - PAD), want: Math.min(Math.max(it.x - it.w / 2, lo), hi - it.w) };
  });
  // lv: for each place 0 (over the line), 1 (under it) or 2 (left out)
  const lay = (lv) => {
    const l = new Array(lv.length).fill(null);
    let cost = 0;
    for (const level of [0, 1]) {
      const on = lv.map((v, i) => i).filter((i) => lv[i] === level);
      if (on.some((i) => room[i].z < room[i].a - 0.01 || (level === 0 && items[i].depth > 0))) return null;
      on.forEach((i, k) => { const prev = on[k - 1]; l[i] = Math.min(room[i].z, Math.max(room[i].a, room[i].want, prev === undefined ? -Infinity : l[prev] + items[prev].w + GAP)); });
      for (let k = on.length - 2; k >= 0; k--) { const i = on[k]; l[i] = Math.max(room[i].a, Math.min(l[i], l[on[k + 1]] - GAP - items[i].w)); }
      for (let k = 0; k < on.length - 1; k++) if (l[on[k + 1]] - (l[on[k]] + items[on[k]].w) < GAP - 0.01) return null;
      on.forEach((i) => { cost += Math.abs(l[i] - room[i].want) / 100; });
    }
    return { lv, l, cost: cost + lv.reduce((sum, v) => sum + (v === 2 ? 1000 : v === 1 ? 10 : 0), 0) };
  };
  let best = null;
  if (n <= 6) {
    // few enough to try every way
    for (let s = 0; s < 3 ** n; s++) { const got = lay(items.map((it, i) => Math.floor(s / 3 ** i) % 3)); if (got && (!best || got.cost < best.cost)) best = got; }
  } else {
    // one after another, each in the first place that will do
    const lv = [];
    items.forEach(() => { lv.push([0, 1, 2].find((v) => lay([...lv, v]))); });
    best = lay(lv);
  }
  items.forEach((it, i) => { it.level = best ? best.lv[i] : 2; it.l = best ? best.l[i] : null; });
  return items;
}

const net = {
  name: 'Play',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const total = Number(f.verseLines);
    need(Array.isArray(f.places) && f.places.length, 'places');
    need(total > 0, 'verseLines');
    const places = f.places.filter((p) => p && p.line >= 1 && p.line <= total && p.speaker && p.caught).map((p) => ({ ...p })).sort((a, b) => a.line - b.line);
    need(places.length, 'places');
    const speakers = firstSeen(places, 'speaker');
    const caught = firstSeen(places, 'caught');
    // the lines of this passage, and the places that fall in them
    const told = String((f.thisPlate || {}).lines || '').replace(/(\d),(?=\d{3})/g, '$1');
    const pair = told.match(/(\d+)\s*(?:to|-|\u2013)\s*(\d+)/) || told.match(/^\D*(\d+)/);
    const span = pair ? [null, +pair[1], +(pair[2] || pair[1])] : null;
    places.forEach((p) => { p.here = !!span && p.line >= span[1] && p.line <= span[2]; });
    // a place where the Greek, as the facts give it, has none: a ring in place of a dot
    places.forEach((p) => { p.bare = typeof p.greek === 'string' && /^\s*no(ne)?\b/i.test(p.greek); });
    // the parts the play is printed in, if they add up to the play
    let parts = Array.isArray(f.parts) ? f.parts.filter((p) => p && p.lines > 0) : [];
    if (parts.reduce((sum, p) => sum + p.lines, 0) !== total) parts = [];
    let from = 0;
    parts = parts.map((p) => { const o = { ...p, from, to: from + p.lines }; from = o.to; return o; });
    parts.forEach((p) => { p.places = places.filter((q) => q.line > p.from && q.line <= p.to); });

    const wasOpen = !!ctx.own.querySelector('details.dg-facts[open]'); // a redraw must not shut the figures
    const d = sheet(ctx, lens, run, 300);
    const W = d.w;
    const t0 = 150; const step = Math.min(200, 1600 / places.length);
    const when = (p) => t0 + 300 + places.indexOf(p) * step;
    const mark = (p, cx, cy, at) => (p.bare ? d.dot(cx, cy, R - 0.6, { fill: PAPER, stroke: p.here ? RED : INK, at }) : d.dot(cx, cy, R, { fill: p.here ? RED : INK, at }));

    // the names at the left, and the room they need
    const lanes = [...speakers.map((name) => ({ name, key: 'speaker' })), ...caught.map((name) => ({ name, key: 'caught' }))];
    lanes.forEach((lane) => { lane.label = d.text(0, 0, lane.name, { at: t0 }); lane.places = places.filter((p) => p[lane.key] === lane.name); });
    const playLabel = d.text(0, 0, 'the play', { at: t0 });
    const linesLabel = d.text(0, 0, `${num(total)} lines`, { at: t0 });
    const G = Math.ceil(Math.max(...lanes.map((lane) => wide(lane.label)), wide(playLabel), wide(linesLabel))) + 10;
    // room at the right for how many places each line holds
    const figure = d.text(0, 0, places.length, { cls: 'dg-n' });
    const E = Math.ceil(wide(figure)) + 9;
    figure.remove();
    const x = (line) => G + ((W - E - G) * line) / total; // a line of verse lies between x(n - 1) and x(n)
    places.forEach((p) => { p.x = x(p.line - 0.5); });

    // ----- who names it, and in what words -----
    let y = 9;
    const heads = [d.text(0, y, 'who names it, and in what words', { cls: 'dg-lab', at: t0 })];
    y += 26;
    const top = y - 20;
    lanes.filter((lane) => lane.key === 'speaker').forEach((lane) => {
      const L = y;
      const items = hang(lane.places.map((p) => ({ p, x: p.x })));
      items.forEach((it) => { it.node = d.text(0, 0, it.p.words || '', { fill: it.p.here ? RED : null, at: when(it.p) + 100 }); it.w = it.p.words ? wide(it.node) : 0; });
      setWords(items, G, W - E - 2);
      const deep = Math.max(0, ...items.map((it) => it.depth));
      const under = items.some((it) => it.level === 1 && it.p.words);
      d.rule(G, L + 0.5, W - E, L + 0.5, { at: t0 });
      put(lane.label, 0, L + 4);
      d.text(W, L + 4, lane.places.length, { cls: 'dg-n', anchor: 'end', at: t0 + 300 });
      items.forEach((it) => {
        it.p.dots = [mark(it.p, it.x, L + 0.5 + it.depth * HANG, when(it.p))];
        if (!it.p.words) it.level = 2;
        if (it.level === 0) put(it.node, it.l, L - 8);
        else if (it.level === 1) put(it.node, it.l, L + 15 + deep * HANG);
        else it.node.remove();
        it.p.word = it.level === 2 ? null : it.node;
      });
      y = L + (under ? 15 + deep * HANG + 4 : 3 + deep * HANG) + 22;
    });

    // ----- who is caught -----
    y += 4;
    heads.push(d.text(0, y, 'who is caught', { cls: 'dg-lab', at: t0 }));
    y += 17;
    let foot = y;
    lanes.filter((lane) => lane.key === 'caught').forEach((lane) => {
      const L = y;
      const items = hang(lane.places.map((p) => ({ p, x: p.x })));
      const deep = Math.max(0, ...items.map((it) => it.depth));
      d.rule(G, L + 0.5, W - E, L + 0.5, { at: t0 });
      put(lane.label, 0, L + 4);
      d.text(W, L + 4, lane.places.length, { cls: 'dg-n', anchor: 'end', at: t0 + 300 });
      items.forEach((it) => { it.p.dots.push(mark(it.p, it.x, L + 0.5 + it.depth * HANG, when(it.p) + 220)); });
      foot = L + 7 + deep * HANG;
      y = L + 18 + deep * HANG;
    });

    // what the figures at the right count, said once: beside the first heading that leaves it room
    const unit = d.text(W, 0, 'places', { cls: 'dg-lab', anchor: 'end', at: t0 + 300 });
    const beside = heads.find((h) => wide(h) + 12 <= W - wide(unit));
    if (beside) unit.setAttribute('y', beside.getAttribute('y')); else unit.remove();

    // ----- the play, in the parts it is printed in here -----
    y += 12;
    const A = y;
    d.rule(x(0), A + 0.75, x(total), A + 0.75, { stroke: INK, width: 1.5, at: t0 }); // a little firmer than a hairline, as its mark in the key is
    put(playLabel, 0, A + 4);
    put(linesLabel, 0, A + 19);
    d.text(W, A + 4, places.length, { cls: 'dg-n', anchor: 'end', at: t0 + 300 });
    const cuts = parts.length ? [0, ...parts.map((p) => p.to)] : [0, total];
    cuts.forEach((c) => d.rule(Math.round(x(c)) + 0.5, A - 3, Math.round(x(c)) + 0.5, A + 5, { stroke: INK }));
    parts.forEach((p) => d.text((x(p.from) + x(p.to)) / 2, A + 19, p.part, { cls: 'dg-n', anchor: 'middle', at: t0 + 200 }));
    y = A + 24;
    // the names of the parts, in a run under the line; each opens in the play.
    // No line of the run ends badly: a number keeps to its name, a word of three
    // letters or fewer keeps to the word after it, the last two words of a name
    // keep together, and the point between two names stays with the first.
    if (parts.some((p) => p.name)) {
      const list = d.note(0, y + 6, W, '', { at: t0 + 300 });
      const named = parts.filter((p) => p.name);
      named.forEach((p, i) => {
        const n = el('span', { text: `${p.part}\u00a0` });
        n.style.fontStyle = 'normal'; n.style.color = INK; n.style.fontVariantNumeric = 'lining-nums';
        const w = String(p.name).split(/\s+/).filter(Boolean);
        const groups = [[]];
        w.forEach((word, k) => { groups[groups.length - 1].push(word); if (k < w.length - 2 && !short(word)) groups.push([]); });
        const words = groups.flatMap((g, k) => [k ? ' ' : '', el('span', { style: 'white-space:nowrap', text: g.join(' ') })]);
        list.append(n, p.read && canRead() ? el('a', { href: `#/read/${p.read}` }, words) : el('span', {}, words));
        if (i < named.length - 1) list.append('\u00a0· ');
      });
      y += 6 + list.getBoundingClientRect().height;
    }
    d.svg.setAttribute('height', Math.ceil(y + 2));
    d.svg.setAttribute('viewBox', `0 0 ${W} ${Math.ceil(y + 2)}`);

    // ----- what the pointer adds -----
    // the two dots of a place and its words stay dark together while the others go pale
    const marksOf = (p) => [...p.dots, p.word].filter(Boolean);
    // (the number of a line is a label and takes no comma; the lines are those of the translation printed here)
    const say = (p) => `Line ${p.line} of the translation’s ${num(total)}. ${cap(p.speaker)}${p.words ? `: ${p.words}` : ''}. ${cap(p.caught)} is caught.${p.bare ? ' The Greek names no net here.' : ''}`;
    places.forEach((p, i) => {
      const before = places[i - 1]; const after = places[i + 1];
      const a = before ? Math.max(p.x - 11, (before.x + p.x) / 2) : p.x - 11;
      const z = after ? Math.min(p.x + 11, (after.x + p.x) / 2) : p.x + 11;
      d.hot(d.bar(a, top, Math.max(1, z - a), foot - top, { fill: 'transparent' }), say(p), marksOf(p));
    });
    // the words stand over the columns, so that a word answers for its own place
    places.forEach((p) => { if (p.word) { d.svg.append(p.word); d.hot(p.word, say(p), marksOf(p)); } });
    parts.forEach((p) => {
      const hit = d.bar(x(p.from), A - 6, x(p.to) - x(p.from), 30, { fill: 'transparent' });
      d.hot(hit, `Part ${p.part}${p.name ? `, ${p.name}` : ''}: lines ${p.from + 1} to ${p.to}. ${p.places.length ? `A net is named at ${count(p.places.length, 'place')}` : 'No net is named'}.`, p.places.flatMap(marksOf));
    });

    const mine = places.filter((p) => p.here);
    d.keys([
      mine.length ? { mark: 'dot', color: RED, text: span[2] > span[1] ? `this passage, lines ${span[1]} to ${span[2]} of the translation` : `this passage, line ${span[1]} of the translation` } : null,
      { mark: 'dot', color: INK, text: mine.length ? 'the other places where a net is named' : 'a place where a net is named' },
      places.some((p) => p.bare) ? { mark: 'ring', color: INK, text: 'a place where the Greek names no net' } : null,
      { mark: 'line', color: INK, text: parts.length ? 'the play in this translation, divided as it is printed here' : 'the play in this translation, from its first line to its last' },
    ].filter(Boolean));

    // ----- the figures, folded away: each place and each part opens in the play -----
    const narrow = W < 440; // five columns will not stand side by side
    const open = (o, words) => (o.read && canRead() ? el('a', { href: `#/read/${o.read}`, text: words }) : words);
    const th = (words, o = {}) => el('th', { ...o, text: words });
    const td = (c, o = {}) => el('td', o, [c !== null && typeof c === 'object' ? c : String(c ?? '')]);
    const table = (rows) => el('table', { class: 'facts' }, rows.map((cells) => el('tr', {}, cells)));
    const greek = places.some((p) => p.greek);
    const NUM = { class: 'num' }; // a column of figures stands to the right, as the kit sets them
    const heads4 = ['line in the translation', 'who names it', 'the words', 'who is caught'];
    const headRow = (list) => list.map((h, i) => th(h, i ? {} : NUM));
    const four = (p) => [td(open(p, String(p.line)), NUM), td(p.speaker), td(p.words), td(p.caught)];
    // the Greek words in italics; their line numbers, and the words that say there is none, upright
    const greekOf = (p) => (p.bare ? String(p.greek) : el('span', {}, String(p.greek || '').split(/(\([^)]*\))/).map((bit) => (/^\(/.test(bit) ? bit : el('i', { text: bit })))));
    let rows;
    if (!greek) rows = [headRow(heads4), ...places.map(four)];
    else if (!narrow) rows = [headRow([...heads4, 'the Greek, and its line']), ...places.map((p) => [...four(p), td(greekOf(p))])];
    else {
      // on a narrow page the Greek stands under the words of its own place, so that no column is cut off
      const under = 'border-top:0;padding-top:0';
      rows = [headRow(heads4), [th('', { colspan: 2 }), th('the Greek, and its line', { colspan: 2 })]];
      places.forEach((p) => { rows.push(four(p)); if (p.greek) rows.push([td('', { colspan: 2, style: under }), td(greekOf(p), { colspan: 2, style: under })]); });
    }
    const tables = [table(rows)];
    if (parts.length) {
      tables.push(table([[th('part'), th('lines'), th('places', NUM)], ...parts.map((p) => [td(open(p, `${p.part}. ${p.name || ''}`)), td(`${p.from + 1} to ${p.to}`, { style: 'white-space:nowrap' }), td(p.places.length, NUM)])]));
      tables[1].style.marginTop = '18px';
    }
    const out = Array.isArray(f.notCounted) ? f.notCounted.filter((line) => typeof line === 'string' && line.trim()) : [];
    if (out.length) {
      tables.push(table([[th('not counted')], ...out.map((line) => [td(line)])]));
      tables[tables.length - 1].style.marginTop = '18px';
    }
    const figures = el('details', { class: 'dg-facts' }, [el('summary', { text: 'The numbers' }), el('div', { class: 'facts-wrap' }, tables)]);
    figures.open = true; // open while its columns are measured
    ctx.own.append(figures);
    // The columns stand as far apart as the kit sets them, or a little closer where that keeps every cell on
    // one line; the last column needs no room to its right. A cell or a heading that must turn over turns
    // into even lines, and a sentence in a table of one column turns as prose does.
    tables.forEach((t) => {
      const cells = [...t.querySelectorAll('th, td')];
      const cols = Math.max(...[...t.rows].map((r) => [...r.cells].reduce((n, c) => n + c.colSpan, 0)));
      cells.forEach((c) => { c.style.paddingRight = '0'; });
      t.style.whiteSpace = 'nowrap';
      const bare = t.getBoundingClientRect().width; // the columns with no room between them and nothing turned over
      t.style.whiteSpace = '';
      const gap = Math.max(12, Math.min(18, Math.floor((W - bare - 1) / Math.max(1, cols - 1))));
      cells.forEach((c) => {
        if (c.nextElementSibling) c.style.paddingRight = `${gap}px`;
        if (!c.style.whiteSpace) c.style.textWrap = cols > 1 ? 'balance' : 'pretty'; // not a cell that is kept on one line
      });
    });
    figures.open = wasOpen;
  },
};

export default { lenses: { 'net:shape': net } };
