// Othello: the drawing of its own.
//
//   lie / Play: all that Othello and Iago say, act by act and in the order they
//               say it. Verse stands over the line and prose under it, every
//               mark as long as its words, on one scale for both men. The
//               prose of this passage, Othello's first, is red. Under the two
//               lines each man's prose is set out again on the same scale:
//               Othello's by its places, Iago's by the person he speaks to.
//
// Drawn from the reading's own `facts` (remake/works/othello/reading.json).
// The order comes from othelloInOrder and iagoInOrder; every amount from acts,
// othelloBeforeThisPassage, othelloProse and iagoProse.

import { el, RED, INK, HAIR } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

const sum = (list, f) => list.reduce((t, x) => t + f(x), 0);
const wideOf = (node) => { try { return node.getBBox().width; } catch (e) { return String(node.textContent).length * 5.6; } };
// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const inked = (text) => { const s = el('span', { text }); s.style.color = INK; return s; };
// the name of a place; where the line turns, an act or a scene is not parted from its number, nor a scene from its act
const NB = String.fromCharCode(160);
const tie = (text) => String(text).replace(/\b(Act|Scenes?) (?=\d)/g, `$1${NB}`).replace(new RegExp(`(\\bAct${NB}\\d+,) (?=Scenes?${NB}\\d)`, 'g'), `$1${NB}`);
const place = (text, read) => (read && canRead() ? el('a', { href: `#/read/${read}`, text: tie(text) }) : el('span', { text: tie(text) }));

// The facts, read by key. The two men are named in the keys of `acts`
// ("Othello verse words"), and each has his own keys: othelloInOrder,
// othelloProse, othelloProseSpeeches, othelloBeforeThisPassage.
function model(f) {
  const need = (key) => { if (f[key] == null) throw new Error(`facts: no ${key}`); return f[key]; };
  const rows = need('acts');
  if (!Array.isArray(rows) || !rows.length) throw new Error('facts: no acts');
  const names = [...new Set(Object.keys(rows[0]).map((k) => (k.match(/^(.+) (?:verse|prose) words$/) || [])[1]).filter(Boolean))];
  if (!names.length) throw new Error('facts: no speakers in acts');
  const orders = names.map((name) => need(`${name.toLowerCase()}InOrder`));
  // an act is a row that the order knows; the row it does not know holds the totals
  const acts = rows.filter((a) => orders.some((o) => o.some((r) => r.act === a.act)));
  if (!acts.length) throw new Error('facts: no acts in the order');
  const whole = rows.find((a) => !acts.includes(a)) || null;

  const men = names.map((name, n) => {
    const key = name.toLowerCase();
    const get = (row, what) => +row[`${name} ${what}`] || 0;
    const prose = Array.isArray(f[`${key}Prose`]) ? f[`${key}Prose`] : [];
    const runs = orders[n].map((r) => ({ act: r.act, kind: r.kind === 'prose' ? 'prose' : 'verse', words: +r.words || 0 }));
    // where the facts name every place of his prose, a run of prose is that place and has its words
    const spoken = runs.filter((r) => r.kind === 'prose');
    if (spoken.length === prose.length) spoken.forEach((r, j) => { r.place = prose[j]; if (prose[j].words != null) r.words = +prose[j].words || 0; });
    const cells = acts.map((a) => {
      const of = runs.filter((r) => r.act === a.act);
      const cell = { act: a, verse: get(a, 'verse words'), prose: get(a, 'prose words'), lines: get(a, 'verse lines'), runs: of };
      // the order is the runs'; the amounts are those of `acts`, shared out among the runs
      for (const kind of ['verse', 'prose']) {
        const same = of.filter((r) => r.kind === kind);
        const had = sum(same, (r) => r.words);
        if (!had && cell[kind]) of.push({ act: a.act, kind, words: cell[kind], len: cell[kind] });
        else same.forEach((r) => { r.len = had ? (r.words * cell[kind]) / had : 0; });
      }
      cell.words = cell.verse + cell.prose;
      return cell;
    });
    const all = whole
      ? { verse: get(whole, 'verse words'), prose: get(whole, 'prose words'), lines: get(whole, 'verse lines') }
      : { verse: sum(cells, (c) => c.verse), prose: sum(cells, (c) => c.prose), lines: sum(cells, (c) => c.lines) };
    const man = { name, key, cells, all, prose, speeches: f[`${key}ProseSpeeches`], before: f[`${key}BeforeThisPassage`] || null };
    // this passage: his first prose once he has said what the facts say he has said before it
    if (man.before) {
      const want = { verse: +man.before['verse words'] || 0, prose: +man.before['prose words'] || 0 };
      const said = { verse: 0, prose: 0 };
      for (const r of cells.flatMap((c) => c.runs)) {
        if (r.kind === 'prose' && said.verse >= want.verse - 0.5 && said.prose >= want.prose - 0.5) { r.here = true; break; }
        said[r.kind] += r.len;
      }
    }
    return man;
  });
  return { acts, whole, men };
}

// How far below the top of words set over the drawing the foot of their first line stands.
function footOf(d) {
  const p = d.note(0, 0, 100, 'x');
  const s = el('span');
  s.style.cssText = 'display:inline-block;width:0;height:0';
  p.prepend(s);
  const foot = s.getBoundingClientRect().bottom - p.getBoundingClientRect().top;
  p.remove();
  return foot || 13;
}

// One man's prose set out again: a figure, a bar as long as its words on the
// scale of the lines above, and the facts' own name for it. Returns the y
// under the last row.
function list(d, y, title, rows, o) {
  d.text(0, y + 12, title, { cls: 'dg-lab', at: o.at });
  y += 21;
  rows.forEach((r, i) => {
    const at = o.at + 60 + i * 45;
    const base = y + 13;
    const len = Math.max(1, Math.round(r.words * o.k));
    const own = [d.text(o.fig, base, num(r.words), { cls: 'dg-n', anchor: 'end', fill: r.here ? RED : null, at }), d.bar(o.fig + 8, base - 8, len, 8, { fill: r.here ? RED : INK, at })];
    // where the row is one of his marks on the line above, the two stay dark together
    if (r.run) r.run.row = own;
    const x = o.fig + 8 + len + 8;
    const p = d.note(x, base - o.foot, d.w - x, '', { at });
    p.append(...r.label);
    // where the words turn, no word is left alone on the last line (as the kit sets a caption)
    p.style.textWrap = 'pretty';
    // the pointer goes through the words to the row, except on a link
    p.style.pointerEvents = 'none';
    p.querySelectorAll('a').forEach((a) => { a.style.pointerEvents = 'auto'; });
    const h = p.getBoundingClientRect().height;
    const hit = r.say ? d.hot(d.bar(0, y, d.w, Math.max(19, h + 2), { fill: 'transparent' }), r.say, own.concat(r.run ? r.run.marks : [])) : null;
    // a link stands over its row: the pointer on the link is still on the row
    if (hit) p.querySelectorAll('a').forEach((a) => ['pointerenter', 'pointerleave'].forEach((type) => a.addEventListener(type, (e) => hit.dispatchEvent(new PointerEvent(type, { pointerType: e.pointerType })))));
    y += Math.max(19, Math.ceil(h) + 3);
  });
  return y;
}

const play = {
  name: 'Play',
  stage: 'own',
  draw(ctx, lens, run) {
    const m = model(lens.facts || {});
    const d = sheet(ctx, lens, run, 200);
    // while the marks are set out and measured, nothing moves
    d.wrap.classList.add('setup');
    const W = d.w; const wide = W > 520;
    const G = wide ? 10 : 6; const H = wide ? 14 : 12;

    // An act is as wide as the more that either man says in it, and each man's
    // marks begin at its left edge. One scale for every mark in the drawing.
    const span = m.acts.map((a, i) => Math.max(...m.men.map((man) => man.cells[i].words)));
    const k = (W - G * (span.length - 1)) / (sum(span, (s) => s) || 1);
    const x0 = [];
    span.reduce((x, s, i) => { x0[i] = Math.round(x); return x + s * k + G; }, 0);

    // the acts are named once, over both lines; where a name is wider than its act, its number stands for it
    const heads = m.acts.map((a, i) => d.text(x0[i], 9, a.act, { cls: 'dg-lab', at: 0 }));
    const tight = heads.map((h, i) => wideOf(h) > span[i] * k - 2);
    if (tight.some(Boolean)) heads.forEach((h, i) => { if (i || tight[i]) h.textContent = String(m.acts[i].act).split(' ').pop(); });

    let y = 18;
    const hits = [];
    m.men.forEach((man, n) => {
      const t0 = 100 + n * 700;
      // his name, and all he says in the play
      const name = d.text(0, y + 20, man.name, { cls: 'dg-name', at: t0 });
      const says = `${num(man.all.verse)} words of verse, ${man.all.prose ? `${num(man.all.prose)} of prose` : 'no prose'}`;
      const total = d.text(wideOf(name) + 10, y + 20, says, { at: t0 });
      if (wideOf(name) + 10 + wideOf(total) > W) total.textContent = says.replace(' words of', '');
      const top = y + 30; const base = top + H;
      let here = null;
      man.cells.forEach((cell, i) => {
        const px = (w) => Math.round(x0[i] + w * k);
        const at = (x) => t0 + 150 + (x / W) * 600;
        let w = 0; let last = null;
        const marks = [];
        cell.runs.forEach((r) => {
          if (!r.len) return;
          let a = px(w); const z = Math.max(px(w + r.len), a + 1);
          w += r.len;
          // two runs of one kind, side by side, are two places: they stand a hair apart
          if (last && last.kind === r.kind && z - a >= 3) a += 1;
          r.marks = [d.bar(a, r.kind === 'verse' ? top : base + 1, z - a, H, { fill: r.kind === 'verse' ? HAIR : r.here ? RED : INK, at: at(a) + (r.here ? 200 : 0) })];
          marks.push(r.marks);
          if (r.here) here = { x: Math.floor((a + z) / 2) + 0.5, at: at(a) + 200, marks: r.marks };
          last = r;
        });
        // the line of the act, and on it his thread: as long as all he says in the act
        d.rule(x0[i], base + 0.5, px(span[i]), base + 0.5);
        if (cell.words) marks.push([d.rule(x0[i], base + 0.5, px(cell.words), base + 0.5, { stroke: INK, at: at(x0[i]) })]);
        hits.push({ man, cell, marks, x: x0[i], y: top, w: Math.max(12, span[i] * k), h: 2 * H + 1 });
      });
      // which side of the line is which, said once, where the first man leaves most of an act bare
      if (!n) {
        const bare = man.cells.map((cell, i) => (span[i] - cell.words) * k);
        const i = bare.indexOf(Math.max(...bare));
        const over = d.text(x0[i] + span[i] * k - 1, base - 4, 'verse', { anchor: 'end', at: 500 });
        const under = d.text(x0[i] + span[i] * k - 1, base + 12, 'prose', { anchor: 'end', at: 500 });
        if (bare[i] < Math.max(wideOf(over), wideOf(under)) + 10) { over.remove(); under.remove(); }
      }
      y = base + 1 + H;
      if (here && man.before) {
        const v = +man.before['verse words'] || 0; const p = +man.before['prose words'] || 0;
        const lead = d.rule(here.x, y, here.x, y + 9, { stroke: RED, at: here.at + 150 });
        const words = p ? `this passage, after ${num(v)} words of verse and ${num(p)} of prose` : `this passage: his first prose, after ${num(v)} words of verse`;
        const lab = d.text(here.x, y + 22, words, { anchor: 'middle', fill: RED, at: here.at + 300 });
        const half = wideOf(lab) / 2;
        lab.setAttribute('x', Math.max(half, Math.min(W - half, here.x)));
        // the red mark's own label keeps with it
        here.marks.push(lead, lab);
        y += 27;
      }
      y += 14;
    });

    // each man's prose again, under the facts' own names for it
    const lists = m.men.filter((man) => man.prose.length);
    if (lists.length) {
      const probe = lists.flatMap((man) => man.prose.map((p) => d.text(0, -40, num(p.words), { cls: 'dg-n' })));
      const fig = Math.ceil(Math.max(...probe.map(wideOf)));
      probe.forEach((p) => p.remove());
      const foot = footOf(d);
      d.rule(0, y + 0.5, W, y + 0.5);
      y += 8;
      lists.forEach((man, n) => {
        const runs = man.cells.flatMap((c) => c.runs);
        const rows = man.prose.map((p) => {
          const label = [];
          const cut = p.to ? -1 : String(p.place).indexOf(': ');
          const where = String(cut > 0 ? p.place.slice(0, cut) : p.place || `to ${p.to}`);
          if (p.to) {
            // a person he speaks to and, where there is room, the scenes
            label.push(inked(`to ${p.to}`));
            if (wide && p.place) label.push(' · ', place(p.place, p.read));
          } else if (cut > 0) {
            // a place: its scene, which opens in the book printed here, and what the facts call it
            label.push(place(where, p.read), ': ', inked(p.place.slice(cut + 2)));
          } else label.push(place(where, p.read));
          const run = runs.find((r) => r.place === p && r.marks) || null;
          const words = +p.words || 0;
          // what the pointer adds: where, and how much of all his prose
          return { words, label, run, here: !!run && !!run.here, say: `${where}: ${num(words)} of ${man.name}’s ${num(man.all.prose)} words of prose` };
        });
        y = list(d, y, `${man.name}’s prose`, rows, { fig, foot, k, at: 1550 + n * 220 }) + (n < lists.length - 1 ? 8 : 0);
      });
    }

    // what the pointer adds on the two lines: the numbers of one man in one act
    const roomy = W >= 440;
    hits.forEach(({ man, cell, marks, x, y: top, w, h }) => {
      const verse = cell.verse ? `${num(cell.verse)} words of verse${roomy && cell.lines ? ` in ${num(cell.lines)} lines` : ''}` : 'no verse';
      const prose = cell.prose ? `${num(cell.prose)} ${cell.verse ? '' : 'words '}of prose` : 'no prose';
      const says = cell.words ? `${cell.act.act}, ${man.name}: ${verse}, ${prose}` : `${cell.act.act}, ${man.name}: nothing`;
      d.hot(d.bar(x, top, w, h, { fill: 'transparent' }), says, marks.flat().concat(cell.runs.flatMap((r) => r.row || [])));
    });

    // the drawing is as tall as what was set in it; from now on its lines may move
    d.svg.setAttribute('height', Math.ceil(y));
    d.svg.setAttribute('viewBox', `0 0 ${W} ${Math.ceil(y)}`);
    d.wrap.getBoundingClientRect();
    d.wrap.classList.remove('setup');

    d.keys([
      { mark: 'bar', color: HAIR, text: 'verse, over the line' },
      // (the last two words keep together, so that the last is not left alone where the key turns)
      { mark: 'bar', color: INK, text: `prose, under it; every mark is drawn as long as its${NB}words` },
    ]);

    // the numbers, folded away (on these pages a "figure" is a figure of speech, and the name of a tab)
    const cellOf = (c) => (typeof c === 'number' ? num(c) : c == null ? '' : c);
    // as the kit sets a table: a column of numbers stands to the right. A table
    // may have several parts, each under its own head, in the same columns.
    const table = (...parts) => {
      const t = el('table', { class: 'facts' });
      parts.forEach(([head, rows], n) => {
        const cls = head.map((h, c) => (rows.every((row) => typeof row[c] === 'number') ? 'num' : null));
        const heads = head.map((h, c) => el('th', { class: cls[c], text: h }));
        if (n) heads.forEach((th) => { th.style.paddingTop = '18px'; });
        t.append(el('tr', {}, heads), ...rows.map((row) => el('tr', {}, row.map((v, c) => el('td', { class: cls[c] }, [cellOf(v)])))));
      });
      // the last column ends at the table's edge, so that the table goes into the narrowest drawing
      t.querySelectorAll('tr > :last-child').forEach((c) => { c.style.paddingRight = '0'; });
      return t;
    };
    // the name of an act keeps to one line
    const whole = (text) => { const s = el('span', { text }); s.style.whiteSpace = 'nowrap'; return s; };
    const tables = [table(...m.men.map((man) => [[man.name, 'lines of verse', 'words of verse', 'words of prose'], [
      ...man.cells.map((c) => [whole(c.act.act), c.lines, c.verse, c.prose]),
      ...(m.whole ? [[whole(m.whole.act), man.all.lines, man.all.verse, man.all.prose]] : []),
      ...(man.before ? [['before this passage', +man.before['verse lines'] || 0, +man.before['verse words'] || 0, +man.before['prose words'] || 0]] : []),
    ]]))];
    if (m.men.some((man) => man.speeches != null)) tables.push(table([['prose', 'words', 'speeches'], m.men.map((man) => [man.name, man.all.prose, man.speeches])]));
    m.men.filter((man) => man.prose.some((p) => p.to)).forEach((man) => tables.push(table([[`${man.name}’s prose, to`, 'where', 'words'], man.prose.map((p) => [p.to, place(p.place || '', p.read), +p.words || 0])])));
    tables.slice(1).forEach((t) => { t.style.marginTop = '18px'; });
    ctx.own.append(el('details', { class: 'dg-facts' }, [el('summary', { text: 'The numbers' }), el('div', { class: 'facts-wrap' }, tables)]));
  },
};

export default { lenses: { 'lie:shape': play } };
