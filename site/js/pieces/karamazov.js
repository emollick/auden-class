// The Brothers Karamazov, "The Grand Inquisitor": the two drawings of its own.
//
//   first / Voices: who speaks, and inside whose speech. First three bars from
//                   one zero: the chapter, what is said inside one speaker's
//                   telling (both sums, in outline), and the voice that says
//                   most (solid), with a hairline at half the chapter. Then
//                   the chapter in its order, left to right and to scale, a
//                   row to each voice: a mark for what a voice says in one
//                   paragraph. The paragraph of this passage is red; the run
//                   that no one breaks has a pale ground and a heavier stroke
//                   on the chapter's line.
//   cry / Plan:     the speech from its first word to its last, down the page
//                   and to scale, as a spine in its parts with each part named
//                   beside it. The parts that take up a temptation are solid;
//                   the words of this passage are red. Left of the spine, a
//                   dot wherever one verb returns and a ring wherever Auden
//                   quotes.
//
// Both are drawn from the reading's own `facts`
// (remake/works/karamazov/reading.json) each time the page runs. No count,
// name or word of the book is typed here.

import { mk, tie, RED, INK, QUIET, HAIR, TINT } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const wide = (node) => (node.getComputedTextLength && node.getComputedTextLength()) || String(node.textContent).length * 5.8;
const blockOf = (read) => { const m = String(read || '').match(/:(\d+)$/); return m ? +m[1] : null; };
const textOf = (read) => String(read || '').replace(/:\d+$/, '');
const series = (a) => (a.length < 2 ? a.join('') : `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}`);
const count = (n, one, many = `${one}s`) => `${num(n)} ${n === 1 ? one : many}`; // a figure keeps to its noun where a line turns
const same = (a, b) => String(a).toLowerCase() === String(b).toLowerCase();
// Words of a drawing that open their place in the book printed here. A link in a drawing is ruled
// under with a hairline of its own, as the page rules its links (the browser's rule would take the
// color of the letters and touch them).
function opens(d, node, read, at, drop = 3.5) {
  const nodes = [].concat(node || []).filter(Boolean);
  if (!nodes.length || !read || !canRead()) return null;
  const a = mk('a', { href: `#/read/${read}` });
  a.style.textDecoration = 'none';
  nodes[0].replaceWith(a);
  nodes.forEach((n) => {
    a.append(n);
    const w = wide(n); const x = +n.getAttribute('x'); const y = +n.getAttribute('y') + drop;
    const anchor = n.getAttribute('text-anchor');
    const x0 = anchor === 'end' ? x - w : anchor === 'middle' ? x - w / 2 : x;
    a.append(d.rule(x0, y, x0 + w, y, { at, dash: 'none' })); // it comes with its words, and is not drawn after them
  });
  return a;
}
const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);

// ----- Voices: the facts, checked against each other before anything is drawn -----
// The voices in the order the facts give them, each followed by those heard
// inside it; the paragraphs in order, each at its place by count of words.
function voicesOf(f) {
  if (!f || !f.chapter || !(f.chapter.words > 0)) throw new Error('facts: no chapter');
  if (!Array.isArray(f.voices) || !f.voices.length) throw new Error('facts: no voices');
  if (!Array.isArray(f.paragraphs) || !f.paragraphs.length) throw new Error('facts: no paragraphs');
  const by = new Map(f.voices.map((v) => [v.short, { ...v, kids: [], up: null, depth: 0 }]));
  for (const v of by.values()) {
    if (!v.inside) continue;
    v.up = by.get(v.inside);
    if (!v.up) throw new Error('facts: a voice inside no one');
    v.up.kids.push(v);
  }
  const rows = [];
  const walk = (v, depth) => { v.depth = depth; rows.push(v); v.kids.forEach((k) => walk(k, depth + 1)); };
  [...by.values()].filter((v) => !v.up).forEach((v) => walk(v, 0));
  const all = (v) => v.words + v.kids.reduce((n, k) => n + all(k), 0);
  rows.forEach((v) => { v.all = all(v); });
  let at = 0;
  const paras = f.paragraphs.map((p) => { const size = rows.reduce((n, v) => n + (p[v.short] || 0), 0); const o = { p, n: p.n, from: at, size }; at += size; return o; });
  if (at !== f.chapter.words) throw new Error('facts: the paragraphs do not add up to the chapter');
  rows.forEach((v) => { if (f.paragraphs.reduce((n, p) => n + (p[v.short] || 0), 0) !== v.words) throw new Error(`facts: ${v.short} does not add up`); });
  // what else the facts say of a voice, under its own name
  rows.forEach((v) => { const k = Object.keys(f).find((key) => same(key, v.voice)); v.more = k && f[k] && typeof f[k] === 'object' && !Array.isArray(f[k]) ? f[k] : null; });
  return { rows, paras, total: at };
}

// The three sums the first drawing sets side by side: the chapter, then each
// voice that the fullest voice is heard inside, with all it quotes, then that voice.
function sumsOf(f, rows, total) {
  const top = rows.reduce((a, v) => (v.words > a.words ? v : a));
  const sums = [{ label: 'The chapter', words: total, depth: 0, read: f.chapter.read }];
  const chain = [];
  for (let v = top.up; v; v = v.up) chain.unshift(v);
  chain.filter((v) => v.up).forEach((v) => {
    const key = `${v.short} with all he quotes`;
    if (f[key] !== v.all) throw new Error(`facts: no ${key}`);
    sums.push({ label: key, words: v.all, depth: v.depth });
  });
  sums.push({ label: top.voice, words: top.words, depth: top.depth });
  return { sums, top };
}

// What the facts name beside the counts: the paragraph of this plate's passage,
// the run no one breaks, and the times one voice breaks in before it.
function placesOf(ctx, f, rows, paras) {
  const u = f.unbroken || null;
  const byN = new Map(paras.map((p) => [p.n, p]));
  // a place in the book is a paragraph's number less a fixed step: found where the facts give both
  const step = u && blockOf(u.read) !== null && u['first paragraph'] ? u['first paragraph'] - blockOf(u.read) : null;
  const first = (ctx.plate.rows || []).find((r) => !r.aside && r.id);
  const here = step !== null && first && textOf(u.read) === ctx.plate.src ? byN.get(parseInt(first.id, 10) + step) || null : null;
  let run = null;
  if (u && byN.has(u['first paragraph']) && byN.has(u['last paragraph'])) {
    const a = byN.get(u['first paragraph']); const z = byN.get(u['last paragraph']);
    if (z.from + z.size - a.from === u.words) run = { from: a.from, to: z.from + z.size, words: u.words, first: a };
  }
  const breaks = [];
  rows.forEach((v) => {
    const b = f[`${v.short} breaks in`];
    if (!b || !run) return;
    const mine = paras.filter((p) => p.n < run.first.n && p.p[v.short]);
    const each = b['words each time'] || [];
    if (mine.length === b.times && mine.every((p, i) => p.p[v.short] === each[i])) breaks.push({ v, times: b.times, each, last: mine[mine.length - 1] });
  });
  return { here, run, breaks };
}

const voices = {
  name: 'Voices',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts;
    const { rows, paras, total } = voicesOf(f);
    const { sums } = sumsOf(f, rows, total);
    const { here, run: unbroken, breaks } = placesOf(ctx, f, rows, paras);
    const wasOpen = !!ctx.own.querySelector('details.dg-facts[open]'); // a redraw must not shut the figures
    const d = sheet(ctx, lens, run, 400);
    const W = d.w; const narrow = W < 480;
    const IND = 11; const MH = 9; const ROW = narrow ? 32 : 20;

    // the names at the left and the counts at the right, and the room they need;
    // on a narrow sheet a name stands over its row, and the row has the whole width
    const sumNames = sums.map((s) => d.text(s.depth * IND, 0, s.label));
    const names = rows.map((v) => d.text(v.depth * IND, 0, v.voice));
    const sumCounts = sums.map((s) => d.text(W, 0, num(s.words), { cls: 'dg-n', anchor: 'end' }));
    const counts = rows.map((v) => d.text(W, 0, num(v.words), { cls: 'dg-n', anchor: 'end' }));
    const reach = (nodes, list) => nodes.map((n, i) => wide(n) + list[i].depth * IND);
    const G = narrow ? 0 : Math.ceil(Math.max(...reach(sumNames, sums), ...reach(names, rows))) + 14;
    const E = narrow ? 0 : Math.ceil(Math.max(...sumCounts.map(wide), ...counts.map(wide))) + 10;
    const X0 = G; const X1 = W - E;
    const x = (w) => X0 + ((X1 - X0) * w) / total;
    const rowAt = (top, i) => ({ top: top + i * ROW, base: top + i * ROW + (narrow ? 11 : 14), yc: top + i * ROW + (narrow ? 23 : 10) });
    d.text(W, 9, 'words', { cls: 'dg-lab', anchor: 'end' });

    // ----- the three sums, from one zero -----
    const topA = 16.5; // on the half, so that a bar's edges and a hairline fall on whole points
    const a0 = rowAt(topA, 0); const aN = rowAt(topA, sums.length - 1);
    const xh = Math.round(x(total / 2)) + 0.5;
    const footA = aN.yc + MH / 2 + 6;
    // half the chapter: one hairline through the three bars, or on a narrow sheet a tick through each, clear of the names
    if (narrow) sums.forEach((s, i) => { const p = rowAt(topA, i); d.rule(xh, p.yc - MH / 2 - 3, xh, i === sums.length - 1 ? footA : p.yc + MH / 2 + 3, { stroke: QUIET, at: 700 }); });
    else d.rule(xh, a0.yc - MH / 2 - 5, xh, footA, { stroke: QUIET, at: 700 });
    sums.forEach((s, i) => {
      const p = rowAt(topA, i);
      sumNames[i].setAttribute('y', p.base); sumCounts[i].setAttribute('y', p.base);
      s.link = opens(d, sumNames[i], s.read);
      const bw = x(s.words) - X0; const when = 100 + i * 250;
      // one voice's own words are solid, as its marks are below; a sum of several voices is a box in outline
      const g = mk('g');
      d.svg.append(g);
      if (i === sums.length - 1) g.append(d.bar(X0, p.yc - MH / 2, bw, MH, { fill: INK, at: when }));
      else g.append(d.bar(X0 + 0.5, p.yc - MH / 2 + 0.5, bw - 1, MH - 1, { fill: 'none', stroke: INK, at: when }));
      s.at = p; s.nodes = [g, s.link || sumNames[i], sumCounts[i]]; // a name inside a link pales with its link, not twice
    });
    d.text(xh, footA + 12, 'half the chapter', { anchor: 'middle', at: 800 });

    // ----- the chapter in its order, a row to each voice -----
    const headB = footA + 42;
    d.text(0, headB, 'In the order of the chapter', { cls: 'dg-lab' });
    const topB = headB + 9.5;
    const bN = rowAt(topB, rows.length - 1);
    const axis = Math.round(bN.yc + MH / 2 + 9) + 0.5;
    // the run no one breaks: a pale ground behind each row, laid before the row's marks. On a wide sheet the
    // grounds of the rows meet and make one band down to the chapter's line; on a narrow one each keeps clear of the names.
    const bx0 = unbroken ? x(unbroken.from) : 0; const bx1 = unbroken ? x(unbroken.to) : 0;
    const ground = (p, i) => {
      if (!unbroken) return null;
      const top = narrow ? p.yc - 8 : Math.round(p.top);
      const bot = narrow ? p.yc + 8 : i === rows.length - 1 ? axis : Math.round(p.top) + ROW;
      return d.bar(bx0, top, bx1 - bx0, bot - top, { fill: TINT, at: 1500 });
    };

    // what each voice says in each paragraph: inside a paragraph the voices follow the order of the rows
    const marks = new Map(rows.map((v) => [v, []]));
    paras.forEach((pp) => { let w = pp.from; rows.forEach((v) => { const c = pp.p[v.short] || 0; if (!c) return; marks.get(v).push({ a: w, z: w + c, red: pp === here }); w += c; }); });
    // marks that touch are one mark, so that no seam shows between two paragraphs
    const joined = (list) => list.reduce((out, m) => { const last = out[out.length - 1]; if (last && last.z === m.a && last.red === m.red) last.z = m.z; else out.push({ ...m }); return out; }, []);
    // the whole drawing-in is over inside three seconds: a mark fades in over 0.6 s
    const when = (w) => 700 + (750 * w) / total; const LAST = 1550;

    const rowsAt = rows.map((v, i) => {
      const p = rowAt(topB, i);
      names[i].setAttribute('y', p.base); counts[i].setAttribute('y', p.base);
      const band = ground(p, i);
      const mine = marks.get(v);
      // a voice whose every word together would be thinner than a hairline: what the facts say of it stands beside its mark
      const thin = x(v.words) - x(0) < 2;
      // words set on the row itself: how often this voice breaks in; what the facts say of a voice that hardly speaks
      const br = breaks.find((b) => b.v === v);
      let tries = [];
      let nx = 0;
      if (br) { nx = x(br.last.from + br.last.size) + 8; tries = [`breaks in ${count(br.times, 'time')}`]; }
      else if (thin && mine.length) { nx = x(mine[0].z) + 7; tries = [[count(v.words, 'word'), v.more && v.more.spoken].filter(Boolean).join(', '), count(v.words, 'word')]; }
      const next = mine.find((m) => x(m.a) > nx);
      const room = (next ? x(next.a) : X1) - nx - 4;
      let note = null;
      for (const words of tries) {
        const n = d.text(nx, p.yc + 4, words, { at: LAST });
        if (wide(n) <= room) { note = n; break; }
        n.remove();
      }
      const link = note && thin && v.more ? opens(d, note, v.more.read, LAST) : null;
      // words that would stand across an edge of the pale ground have the row to themselves
      const nz = note ? nx + wide(note) : 0;
      if (band && note && ((nx < bx0 && nz > bx0) || (nx < bx1 && nz > bx1))) band.remove();
      // the row's hairline, broken where words stand on it
      const gap = note ? [nx - 4, nx + wide(note) + 4] : null;
      if (gap) { d.rule(X0, p.yc, gap[0], p.yc); d.rule(gap[1], p.yc, X1, p.yc); } else d.rule(X0, p.yc, X1, p.yc);
      const g = mk('g');
      d.svg.append(g);
      joined(mine).forEach((m) => {
        const xa = x(m.a); const w = x(m.z) - xa; const o = { fill: m.red ? RED : INK, at: when(m.a) };
        // to scale, but never thinner than a hairline: the key says so
        g.append(w < 1.5 ? d.bar(Math.round(xa + w / 2 - 0.5), p.yc - MH / 2, 1, MH, o) : d.bar(xa, p.yc - MH / 2, w, MH, o));
      });
      return { v, p, n: mine.length, br, thin, link, nodes: [g, names[i], counts[i], link || note].filter(Boolean) };
    });

    // the chapter itself: its first word and its last, and the length of the run no one breaks
    d.rule(X0, axis, X1, axis, { stroke: INK });
    if (unbroken) d.rule(bx0, axis, bx1, axis, { stroke: INK, width: 3, at: 1000 });
    [X0, X1].forEach((ex) => d.rule(Math.round(ex) + (ex === X0 ? 0.5 : -0.5), axis - 3.5, Math.round(ex) + (ex === X0 ? 0.5 : -0.5), axis + 4.5, { stroke: INK }));
    const from = d.text(X0, axis + 17, 'word 1', { cls: 'dg-n' });
    const to = d.text(X1, axis + 17, num(total), { cls: 'dg-n', anchor: 'end' });
    let foot = axis + 23;
    if (unbroken) {
      const mid = (x(unbroken.from) + x(unbroken.to)) / 2;
      const lab = d.text(mid, axis + 17, `${count(unbroken.words, 'word')} unbroken`, { anchor: 'middle', at: LAST });
      const half = wide(lab) / 2 + 8;
      if (mid - half < X0 + wide(from) || mid + half > X1 - wide(to)) { lab.setAttribute('y', axis + 33); foot += 16; }
      // whose words they are, where the facts say: a count under a voice's name
      const who = rows.map((v) => { const k = Object.keys(f.unbroken).find((key) => key === v.short || same(key, v.voice)); return k && typeof f.unbroken[k] === 'number' ? `${v.voice}, ${num(f.unbroken[k])}` : null; }).filter(Boolean);
      d.hot(opens(d, lab, f.unbroken.read, LAST) || lab, `Unbroken: ${count(unbroken.words, 'word')}${who.length ? ` (${who.join('; ')})` : ''}.`);
    }
    d.svg.setAttribute('height', Math.ceil(foot));
    d.svg.setAttribute('viewBox', `0 0 ${W} ${Math.ceil(foot)}`);

    // ----- what the pointer adds: a row answers along its whole length -----
    const more = (v) => (v.more ? Object.keys(v.more).filter((k) => k !== 'words' && k !== 'read' && v.more[k] !== v.words).map((k) => (typeof v.more[k] === 'number' ? `${k}, ${num(v.more[k])}` : `${k} ${v.more[k]}`)) : []);
    // what the facts hold under a voice's short name and some words more (one voice "on his plan"), as a sentence
    const said = (v) => Object.keys(f).filter((k) => k.startsWith(`${v.short} on `) && Array.isArray(f[k]) && f[k].every((o) => o && o.what)).map((k) => ` ${k}: ${f[k].map((o) => o.what).join('; ')}.`).join('');
    // a row answers along its whole length; words that open a place in the book stand over it, and answer as it does
    const answers = (top, says, nodes, link) => {
      const hit = d.bar(0, top, W, ROW, { fill: 'transparent' });
      d.hot(hit, says, nodes);
      if (link) { d.svg.append(link); d.hot(link, says, [hit, ...nodes]); }
    };
    rowsAt.forEach(({ v, p, n, br, link, nodes }) => {
      const sum = sums.find((s) => s.label === `${v.short} with all he quotes`);
      const bits = [`${v.voice}: ${count(v.words, 'word')} in ${count(n, 'paragraph')}`]
        .concat(sum ? [`with all he quotes, ${num(sum.words)}`] : [], more(v), br ? [`breaks in ${count(br.times, 'time')}, with ${series(br.each.map(num))} words`] : []);
      answers(p.top, `${bits.join('; ')}.${said(v)}`, nodes, link);
    });
    sums.forEach((s, i) => {
      const of = i ? ` of the chapter’s ${num(total)}` : '';
      const v = i === sums.length - 1 ? rows.find((r) => r.voice === s.label) : null;
      answers(s.at.top, `${[`${s.label}: ${count(s.words, 'word')}${of}`].concat(v ? more(v) : []).join('; ')}.`, s.nodes, s.link);
    });

    d.keys([
      here ? { mark: 'bar', color: RED, text: 'the paragraph of this passage' } : null,
      { mark: 'bar', color: INK, text: tie('a voice’s words in one paragraph, to scale; never thinner than a hairline') },
    ].filter(Boolean));
    // the figures: the voices as the facts give them, and whose speech each is heard inside
    const inside = (v) => (v.up ? (sums.some((s) => s.label === `${v.up.short} with all he quotes`) ? v.up.short : v.up.voice) : '');
    const box = d.figures(rows.map((v) => ({ voice: v.voice, words: num(v.words), 'heard inside': inside(v) })));
    if (box) box.open = wasOpen;
  },
};

// ----- Plan: the facts, checked against each other before anything is drawn -----
const MEANS = 'the last word means'; // the key the facts give the gloss of the last word under; the drawing prints it as its label
function planOf(f) {
  const N = f && f.speech && f.speech.words;
  if (!(N > 0)) throw new Error('facts: no speech');
  if (!Array.isArray(f.parts) || !f.parts.length) throw new Error('facts: no parts');
  let at = 1;
  const parts = f.parts.map((p) => {
    if (p.start !== at || !(p.words > 0)) throw new Error('facts: the parts do not follow each other');
    at += p.words;
    const pieces = Array.isArray(p.pieces) && p.pieces.reduce((n, c) => n + c, 0) === p.words ? p.pieces : null;
    return { ...p, pieces, from: p.start, to: p.start + p.words - 1 };
  });
  if (at - 1 !== N) throw new Error('facts: the parts do not add up to the speech');
  const inside = (w) => w >= 1 && w <= N;
  const partOf = (w) => parts.find((p) => w >= p.from && w <= p.to);
  // a part in which a temptation is taken up
  const temptations = (f.temptations || []).map((t) => ({ name: t.name, word: t['taken up at word'] })).filter((t) => t.name && inside(t.word)).sort((a, b) => a.word - b.word);
  temptations.forEach((t) => { partOf(t.word).temptation = t; });
  const g = f['the passage'];
  const passage = g && inside(g.start) && g.words > 0 && inside(g.start + g.words - 1) ? { name: g.name, words: g.words, from: g.start, to: g.start + g.words - 1 } : null;
  if (passage) partOf(passage.from).holds = passage;
  const verb = Object.keys(f).find((k) => Array.isArray(f[k]) && f[k].length && f[k].every((o) => o && inside(o.word) && o.as));
  const returns = verb ? f[verb].map((o) => ({ word: o.word, as: o.as })).sort((a, b) => a.word - b.word) : [];
  const quotes = (f['Auden quotes'] || []).filter((q) => q && inside(q.start) && q.what).map((q) => ({ word: q.start, what: q.what, how: q.how })).sort((a, b) => a.word - b.word);
  // the gospel whose order is the order the temptations are taken up in
  const order = f['order in the gospels'] && typeof f['order in the gospels'] === 'object' ? Object.entries(f['order in the gospels']).map(([name, list]) => {
    const items = String(list).split(/,\s*/);
    return { name, list, same: items.length === temptations.length && items.every((it, i) => temptations[i].name.toLowerCase().startsWith(it.toLowerCase())) };
  }) : [];
  return { N, parts, temptations, passage, verb, returns, quotes, order, last: f.speech['last word'], means: f.speech[MEANS] };
}

// The words of several names, measured: each name's words in order, the width of each word, and of a
// space. Every probe is set before any is read. A measure of svg text is slow when the page must be laid
// out again before it; this way the page is laid out once for all the names.
function sized(d, names) {
  const sets = names.map(({ words, cls }) => {
    // a short word (an article, a preposition) keeps to the word after it, as in the page's headings
    const list = tie(words).split(/ +/).filter(Boolean);
    return { list, probes: [...list, 'a a', 'aa'].map((w) => d.text(0, 0, w, { cls })) };
  });
  const out = sets.map(({ list, probes }) => { const w = probes.map(wide); const one = w.pop(); const gap = w.pop(); return { list, w, space: gap - one }; });
  sets.forEach(({ probes }) => probes.forEach((n) => n.remove()));
  return out;
}

// Words set as lines of svg text no wider than `width`: the nodes, one to a line. The lines are
// balanced as the page balances a heading: in the fewest lines that hold the words, the measure is
// drawn in until one more line would be needed, so that no word is left alone.
function linesOf(d, x, width, { list, w, space }, o) {
  // a run is as wide as its words and the spaces between them (a px is kept in hand for what that leaves out)
  const span = (a, z) => { let sum = (z - a - 1) * space + 1; for (let i = a; i < z; i++) sum += w[i]; return sum; };
  // where the lines end if each is filled up to `max`
  const fill = (max) => { const ends = []; let a = 0; for (let z = 2; z <= list.length; z++) if (z - a > 1 && span(a, z) > max) { ends.push(z - 1); a = z - 1; } return ends.concat(list.length); };
  let ends = fill(width);
  if (ends.length > 1) {
    let lo = width / ends.length; let hi = width;
    for (let i = 0; i < 10; i++) { const mid = (lo + hi) / 2; if (fill(mid).length === ends.length) hi = mid; else lo = mid; }
    ends = fill(hi);
  }
  return ends.map((z, i) => d.text(x, 0, list.slice(i ? ends[i - 1] : 0, z).join(' '), o));
}

// Marks in one column, each at its height; two that would touch stand side by side.
function slotsOf(items, y, min) {
  const last = [];
  return items.map((it) => {
    const at = y(it.word);
    let s = last.findIndex((ly) => at - ly >= min);
    if (s < 0) s = last.length;
    last[s] = at;
    return { ...it, at, slot: s };
  });
}

// a list of names turns only between two names: a name of a few words keeps to one line
const whole = (list) => String(list).split(/,\s*/).map((it) => (it.length <= 30 ? it.replace(/ /g, '\u00a0') : it)).join(', ');
const plan = {
  name: 'Plan',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts;
    const { N, parts, passage, verb, returns, quotes, order, last, means } = planOf(f);
    const wasOpen = !!ctx.own.querySelector('details.dg-facts[open]'); // a redraw must not shut the figures
    const d = sheet(ctx, lens, run, 600);
    const W = d.w; const narrow = W < 480;
    const T = 24; const H = narrow ? 430 : 400;
    const y = (w) => T + ((w - 1) / N) * H; // where word w begins, down the page; the speech ends at y(N + 1)
    const when = (w) => 100 + (1100 * (w - 1)) / N; // the whole drawing-in is over well inside three seconds

    // left of the spine, two columns of marks, each as wide as its marks need
    const P = 7; const R = 2.6;
    const rings = slotsOf(quotes, y, 2 * R + 1.3);
    const dots = slotsOf(returns, y, 2 * R + 1.3);
    const nA = Math.max(0, ...rings.map((m) => m.slot + 1)); const nH = Math.max(0, ...dots.map((m) => m.slot + 1));
    const colH = nA * P + (nA ? 4 : 0);
    const SX = colH + nH * P + (nH ? 5 : 0); const SW = 11; const LX = SX + SW + 13; const LW = W - LX;
    const ax = (m) => (nA - 1 - m.slot) * P + P / 2;
    const hx = (m) => colH + (nH - 1 - m.slot) * P + P / 2;
    d.text(0, T - 9, 'word 1', { cls: 'dg-n' });

    // ----- the spine, part by part, and each part's name beside it -----
    let floor = 0; // the foot of the name above
    const sizes = sized(d, parts.map((p) => ({ words: p.part, cls: p.temptation ? 'dg-name' : 'dg-it' })));
    parts.forEach((p, i) => {
      const top = Math.round(y(p.from)); const bot = Math.round(y(p.to + 1));
      const solid = !!p.temptation; const t = when(p.from);
      const g = mk('g');
      d.svg.append(g);
      // a part that takes up a temptation is solid; any other is a box in outline
      if (solid) g.append(d.bar(SX, top + 0.5, SW, bot - top - 1, { fill: INK, at: t }));
      else g.append(d.bar(SX + 0.5, top + 1, SW - 1, Math.max(1, bot - top - 2), { fill: 'none', stroke: INK, at: t }));
      // a part that comes in pieces: a stroke across it where each piece ends
      if (p.pieces) { let w = p.from; p.pieces.slice(0, -1).forEach((c) => { w += c; const yy = Math.round(y(w)) + 0.5; g.append(d.rule(SX, yy, SX + SW, yy, { stroke: INK, at: t })); }); }
      // the words of this plate's passage
      if (p.holds) {
        const a = Math.max(top + 0.5, Math.round(y(p.holds.from))); const z = p.holds.to >= p.to ? bot - 0.5 : Math.round(y(p.holds.to + 1));
        g.append(d.bar(SX, a, SW, z - a, { fill: RED, at: 1300 }));
      }
      // its name: beside its top where the part is tall enough, or else level with its middle; never on the name above
      const LH = solid ? 21 : 17; const rise = solid ? 12.5 : 9.5; const drop = solid ? 5 : 4;
      const nodes = linesOf(d, LX, LW, sizes[i], { cls: solid ? 'dg-name' : 'dg-it', fill: p.holds ? RED : null, at: t + 100 });
      const tall = (nodes.length - 1) * LH + rise + drop;
      const fits = bot - top >= tall;
      const lt = Math.max(fits ? top : (top + bot) / 2 - tall / 2, floor + 2);
      nodes.forEach((n, j) => n.setAttribute('y', lt + rise + j * LH));
      floor = lt + tall;
      // a short part is joined to its name
      if (!fits) g.append(d.path(`M${SX + SW + 3} ${(top + bot) / 2}L${LX - 4} ${lt + rise - (solid ? 5 : 3.5)}`, { stroke: HAIR, width: 1, dash: 'none', at: t + 100 }));
      const hit = d.bar(SX - 1, Math.min(top, lt), W - SX + 1, Math.max(bot, floor) - Math.min(top, lt), { fill: 'transparent' });
      const says = [`Words ${num(p.from)} to ${num(p.to)} of ${num(N)}${p.pieces ? `, in ${count(p.pieces.length, 'piece')} of ${series(p.pieces.map(num))} words` : ''}.`,
        `${p.part}.`,
        p.temptation ? `${p.temptation.name}: taken up at word ${num(p.temptation.word)}.` : '',
        p.holds ? `${p.holds.name}, this passage: words ${num(p.holds.from)} to ${num(p.holds.to)}.` : ''].filter(Boolean).join(' ');
      // a name that opens its place in the book stands over the part's hit, and answers the pointer as the part does
      const link = opens(d, nodes, p.read, t + 100, solid ? 4.5 : 3.5);
      if (link) d.svg.append(link);
      const lit = link ? [g, link] : [g, ...nodes]; // names inside a link pale with their link, not twice
      d.hot(hit, says, lit);
      if (link) d.hot(link, says, [hit, ...lit]);
    });

    // ----- the marks: a dot where the verb returns, a ring where Auden quotes -----
    dots.forEach((m) => {
      const node = d.dot(hx(m), m.at, R, { fill: INK, at: 1250 });
      d.hot(d.bar(hx(m) - P / 2, m.at - 4.5, P, 9, { fill: 'transparent' }), `Word ${num(m.word)} of ${num(N)}: *${verb}*, as ${m.as}.`, node);
    });
    rings.forEach((m) => {
      const node = d.dot(ax(m), m.at, R - 0.3, { fill: 'none', stroke: INK, width: 1.2, at: 1350 });
      d.hot(d.bar(ax(m) - P / 2, m.at - 4.5, P, 9, { fill: 'transparent' }), `Word ${num(m.word)} of ${num(N)}. Auden quotes: ${m.what}${m.how ? ` (${m.how})` : ''}.`, node);
    });

    // ----- the last word, and what the facts say it means -----
    const base = Math.max(T + H, floor) + 18;
    d.text(0, base, num(N), { cls: 'dg-n' });
    let foot = base + 6;
    if (last) {
      d.text(LX, base, last, { cls: 'dg-name', at: 1450 });
      if (means) { const note = d.note(LX, base + 5, LW, tie(`${cap(MEANS)} ${means}.`), { at: 1450 }); foot = base + 5 + Math.ceil(note.getBoundingClientRect().height); }
    }

    // ----- the order of the temptations in each gospel; the one the speech keeps is in ink -----
    if (order.length) {
      let gy = foot + 24;
      d.text(0, gy, 'order in the gospels', { cls: 'dg-lab', at: 1600 });
      gy += 7;
      const names = order.map((o) => { const n = d.note(0, 0, 10, o.name, { at: 1600 }); n.style.width = 'auto'; n.style.whiteSpace = 'nowrap'; n.style.fontStyle = 'normal'; if (o.same) n.style.color = INK; return n; });
      const NW = Math.ceil(Math.max(...names.map((n) => n.getBoundingClientRect().width))) + 12;
      order.forEach((o, i) => {
        names[i].style.top = `${gy}px`;
        const words = d.note(NW, gy, W - NW, whole(o.list), { at: 1600 });
        if (o.same) words.style.color = INK;
        gy += Math.ceil(words.getBoundingClientRect().height) + 3;
      });
      foot = gy;
    }
    d.svg.setAttribute('height', Math.ceil(foot + 2));
    d.svg.setAttribute('viewBox', `0 0 ${W} ${Math.ceil(foot + 2)}`);

    d.keys([
      passage ? { mark: 'bar', color: RED, text: `the ${num(passage.words)} words of this passage` } : null,
      parts.some((p) => p.temptation) ? { mark: 'bar', color: INK, text: 'a part that takes up a temptation' } : null,
      parts.some((p) => !p.temptation) ? { mark: 'open', color: INK, text: 'the other parts of the speech' } : null,
      dots.length ? { mark: 'dot', color: INK, text: `*${verb}*, ${count(dots.length, 'time')}` } : null,
      rings.length ? { mark: 'ring', color: INK, text: 'a place Auden quotes' } : null,
    ].filter(Boolean));

    // ----- the figures, folded away: every place the drawing marks, in the order of the speech -----
    const places = [].concat(
      parts.map((p) => ({ word: p.from, ' ': `${p.part} (${count(p.words, 'word')})` })),
      parts.filter((p) => p.temptation).map((p) => ({ word: p.temptation.word, ' ': `${p.temptation.name}: taken up` })),
      dots.map((m) => ({ word: m.word, ' ': `${verb}, as ${m.as}` })),
      rings.map((m) => ({ word: m.word, ' ': `Auden quotes: ${m.what}${m.how ? ` (${m.how})` : ''}` })),
      passage ? [{ word: passage.from, ' ': `${passage.name}: the ${num(passage.words)} words of this passage` }] : [],
      last ? [{ word: N, ' ': `${last}: the last word` }] : [],
    ).map((r, i) => ({ r, i })).sort((a, b) => a.r.word - b.r.word || a.i - b.i).map((o) => ({ ...o.r, word: num(o.r.word) }));
    const box = d.figures(places);
    if (box) box.open = wasOpen;
  },
};

export default { lenses: { 'first:shape': voices, 'cry:shape': plan } };
