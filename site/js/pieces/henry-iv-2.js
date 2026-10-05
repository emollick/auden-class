// Henry IV, Part 2: the drawing of its own.
//
//   charges / Play: the play part by part, left to right, a column to each of
//                   its parts and a small space between the acts. Over a line
//                   stands what is in verse, under it hangs what is in prose,
//                   on one scale for every row. The first row is the play;
//                   under it stands a row for each speaker the facts count,
//                   column under column. A part with no prose is tinted down
//                   through all the rows. The scene of this passage is named
//                   in red under its prose, and a red stroke stands in the
//                   scene where one speaker leaves prose for verse.
//
// Everything is read from the lens's `facts` when the page runs
// (remake/works/henry-iv-2/reading.json): no count and no name is typed here.

import { el, RED, INK, QUIET, HAIR, TINT } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

const VERSE = 'lines of verse';
const PROSE = 'words of prose';
const count = (n, one) => `${num(n)} ${one}${n === 1 ? '' : 's'}`;
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const long = (node, guess) => (node.getComputedTextLength && node.getComputedTextLength()) || guess;
// what a part or a speaker has of each kind, verse first as it stands over the line
const both = (vl, pw, brief) => `${vl ? count(vl, 'line') + (brief ? '' : ' of verse') : 'no verse'}, ${pw ? count(pw, 'word') + (brief ? '' : ' of prose') : 'no prose'}`;

// The facts, made ready: the parts in their groups (an act, or a part that stands alone),
// and a row for each speaker. Two entries for one person, such as a prince who is later
// a king, share their first words; they make one row, and the second is named where it begins.
function model(f, src) {
  const need = (key) => { if (f[key] == null) throw new Error(`facts: no ${key}`); return f[key]; };
  const whole = need('whole play');
  const list = need('parts');
  const said = need('speakers');
  if (!Array.isArray(list) || !list.length) throw new Error('facts: no parts');
  if (!whole[VERSE] || !whole['words of verse']) throw new Error('facts: no words of verse');
  const parts = list.map((p, i) => {
    const scene = /^\d+\.\d+$/.test(String(p.part));
    return { i, id: String(p.part), name: p.name || String(p.part), group: scene ? String(p.name).split(',')[0] : String(p.part), n: scene ? String(p.part).split('.')[1] : '', scene, vl: +p[VERSE] || 0, pw: +p[PROSE] || 0, read: p.read, here: !!src && p.read === src };
  });
  const groups = [];
  parts.forEach((p) => { const g = groups[groups.length - 1]; if (g && g.name === p.group) g.parts.push(p); else groups.push({ name: p.group, scene: p.scene, parts: [p] }); p.g = groups.length - 1; });
  const at = (id) => parts.find((p) => p.id === String(id));
  const rows = [];
  said.forEach((s) => {
    const cells = (s['by part'] || []).map((c) => ({ part: at(c.part), vl: +c[VERSE] || 0, pw: +c[PROSE] || 0, as: s.speaker })).filter((c) => c.part);
    const last = rows[rows.length - 1];
    const a = last ? last.first.split(/[\s,]+/) : []; const b = String(s.speaker).split(/[\s,]+/);
    let n = 0; while (n < a.length && n < b.length && a[n] === b[n]) n++;
    if (last && n >= 2) {
      // the same person under a second name
      const name = a.slice(0, n).join(' ');
      last.name = name;
      last.cells.forEach((c) => { c.as = name; });
      last.then = { label: String(s.speaker).slice(name.length).trim(), from: cells.length ? cells[0].part.i : -1 };
      last.cells.push(...cells); last.vl += +s[VERSE] || 0; last.pw += +s[PROSE] || 0;
    } else rows.push({ name: String(s.speaker), first: String(s.speaker), cells, vl: +s[VERSE] || 0, pw: +s[PROSE] || 0 });
  });
  // a change the facts name: a key that begins with a row's name and holds the part it falls in
  const turns = [];
  Object.keys(f).forEach((key) => {
    const v = f[key];
    if (!v || typeof v !== 'object' || Array.isArray(v) || !v.part || !at(v.part)) return;
    const row = rows.find((r) => key.startsWith(r.name));
    if (row) turns.push({ row, part: at(v.part), key, label: key.slice(row.name.length).trim(), read: v.read });
  });
  return { whole, parts, groups, rows, turns, perLine: whole['words of verse'] / whole[VERSE] };
}

const play = {
  name: 'Play',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const { whole, parts, groups, rows, turns, perLine } = model(f, ctx.plate && ctx.plate.src);
    const N = parts.length;
    const MIN = 2;      // the least a mark is drawn, px
    const BAND = 16;    // the room for the numbers of the scenes, between the play's verse and its prose
    const OFF = 2;      // a speaker's marks stand this far off the line, so that verse and prose in one column stay two marks
    const topV = Math.max(...parts.map((p) => p.vl)); const topP = Math.max(...parts.map((p) => p.pw));
    const here = parts.find((p) => p.here);

    // The sizes, for the width the plate has. One scale for every row: a word of prose is k px
    // tall, and a line of verse as tall as the words an average line of this play holds.
    let L = null;
    const lay = (w) => {
      const wide = w > 520;
      const gap = wide ? 10 : w > 300 ? 5 : 4;
      const cw = (w - (groups.length - 1) * gap) / N;
      const k = (wide ? 60 : 48) / Math.max(topV * perLine, topP, 1);
      const vh = (n) => (n ? Math.max(MIN, n * perLine * k) : 0);
      const ph = (n) => (n ? Math.max(MIN, n * k) : 0);
      const thin = (n) => n > 0 && n * perLine * k < MIN;
      const top = (groups.some((g) => !g.scene) ? 16 : 0) + 22;   // under the names of the parts and the acts
      const yT = top + Math.ceil(vh(topV)) + 2;
      const yB = yT + BAND;
      const playEnd = yB + Math.ceil(Math.max(ph(topP), here ? ph(here.pw) + 18 : 0));
      let y = playEnd + 20;
      const staves = rows.map((r) => {
        const up = Math.max(0, ...r.cells.map((c) => vh(c.vl) + (thin(c.vl) ? 13 : 0)));
        const later = r.then ? Math.max(0, ...r.cells.filter((c) => c.part.i >= r.then.from).map((c) => vh(c.vl))) + 16 : 0;
        const down = Math.max(5, ...r.cells.map((c) => ph(c.pw)), turns.some((t) => t.row === r) ? 18 : 0);
        const line = y + 24 + Math.ceil(Math.max(up, later)) + OFF;
        const s = { r, head: y + 14, top: y + 21, line, end: line + 1 + OFF + Math.ceil(down) };
        y = s.end + 18;
        return s;
      });
      L = { wide, gap, cw, vh, ph, thin, top, yT, yB, playEnd, staves, h: y - 18 + 3 };
      return L.h;
    };
    const d = sheet(ctx, lens, run, lay);

    const x0 = (i) => Math.round(i * L.cw + parts[i].g * L.gap);
    const wOf = (i) => (i + 1 < N && parts[i + 1].g === parts[i].g ? x0(i + 1) - x0(i) : Math.round(L.cw));
    let bw = Math.max(5, Math.min(17, Math.round(L.cw - (L.wide ? 9 : 3))));
    if (bw % 2 === 0) bw -= 1;   // an odd width, so that a stroke can stand in the middle of a column
    const bx = (i) => x0(i) + Math.round((wOf(i) - bw) / 2);
    const mid = (i) => bx(i) + bw / 2;
    const when = (i, row = 0) => 150 + i * 36 + row * 150;
    const hits = [];
    const col = parts.map(() => []);   // the marks of each column in every row: they stay dark together under the pointer

    // a part with no prose: tinted down through every row
    const spans = [[L.top - 3, L.playEnd + 3]].concat(L.staves.map((s) => [s.top, s.end + 3]));
    parts.forEach((p) => { if (!p.pw) spans.forEach(([a, z]) => d.bar(x0(p.i), a, wOf(p.i), z - a, { fill: TINT, at: 60 })); });

    // the names over the columns: a part that stands alone at its end of the row, an act over its scenes
    const probe = d.text(0, -40, groups.filter((g) => g.scene).map((g) => g.name).sort((a, b) => b.length - a.length)[0] || '', { cls: 'dg-lab' });
    const full = groups.filter((g) => g.scene).every((g) => x0(g.parts[g.parts.length - 1].i) + wOf(g.parts[g.parts.length - 1].i) - x0(g.parts[0].i) >= long(probe, 40) + 4);
    probe.remove();
    let named = false;
    groups.forEach((g, n) => {
      const a = x0(g.parts[0].i); const z = x0(g.parts[g.parts.length - 1].i) + wOf(g.parts[g.parts.length - 1].i);
      if (!g.scene) { d.text(n === 0 ? a : n === groups.length - 1 ? z : (a + z) / 2, 11, g.name, { anchor: n === 0 ? 'start' : n === groups.length - 1 ? 'end' : 'middle', at: when(g.parts[0].i) }); return; }
      d.text((a + z) / 2, L.top - 9, full || !named ? g.name : g.name.split(' ').pop(), { cls: 'dg-lab', anchor: 'middle', at: when(g.parts[0].i) });
      named = true;
    });

    // the play: verse stands on the band of scene numbers, prose hangs from it
    d.rule(0, L.yT + 0.5, d.w, L.yT + 0.5, { at: 100 });
    d.rule(0, L.yB - 0.5, d.w, L.yB - 0.5, { at: 100 });
    parts.forEach((p) => {
      const marks = col[p.i];
      if (p.vl) marks.push(d.bar(bx(p.i), L.yT - L.vh(p.vl), bw, L.vh(p.vl), { at: when(p.i) }));
      if (p.pw) marks.push(d.bar(bx(p.i), L.yB, bw, L.ph(p.pw), { at: when(p.i) }));
      if (p.n) marks.push(d.text(mid(p.i), L.yT + 12, p.n, { cls: 'dg-n', anchor: 'middle', fill: QUIET, at: when(p.i) }));
      hits.push({ x: x0(p.i), y: L.top - 3, w: wOf(p.i), h: L.playEnd - L.top + 3, marks, say: `${p.name}: ${both(p.vl, p.pw)}` });
    });
    // which side is which, at the end of the row and clear of the last marks
    const tail = parts.filter((p) => x0(p.i) + wOf(p.i) > d.w - 34);
    d.text(d.w, L.yT - 5 - Math.max(0, ...tail.map((p) => L.vh(p.vl))), 'verse', { anchor: 'end', at: 500 });
    d.text(d.w, L.yB + 12 + Math.max(0, ...tail.map((p) => L.ph(p.pw))), 'prose', { anchor: 'end', at: 500 });
    // the scene of this passage
    if (here) {
      const t = d.text(mid(here.i), L.yB + L.ph(here.pw) + 13, 'this exchange', { anchor: 'middle', fill: RED, at: 1700 });
      const half = long(t, 72) / 2;
      t.setAttribute('x', Math.max(half, Math.min(d.w - half, mid(here.i))));
    }

    // a row to each speaker, column under column
    const base = col.map((m) => m.slice());   // the play's own marks in each column
    L.staves.forEach((s, n) => {
      const r = s.r; const t0 = 420 + n * 150;
      const name = d.text(0, s.head, cap(r.name), { cls: 'dg-name', at: t0 });
      // what the speaker has in all, after the name: in full where there is room, briefly where not
      const from = long(name, r.name.length * 8.5) + 10;
      for (const brief of [false, true]) {
        const words = both(r.vl, r.pw, brief);
        const note = d.text(from, s.head, words, { at: t0 });
        if (from + long(note, words.length * 5.6) <= d.w) break;
        note.remove();
      }
      d.rule(0, s.line + 0.5, d.w, s.line + 0.5, { at: t0 });
      const turn = turns.find((t) => t.row === r);
      const hw = (bw - 3) / 2;   // half a column, on either side of a stroke
      let cutHit = null;         // the scene of the change, which says what the stroke says
      r.cells.forEach((c) => {
        const i = c.part.i; const marks = [];
        // in the scene of a change the prose stands before the stroke and the verse after it
        const cut = !!turn && turn.part === c.part && c.vl > 0 && c.pw > 0;
        const xv = cut ? bx(i) + hw + 3 : bx(i); const wv = cut ? hw : bw;
        if (c.vl) {
          const y = s.line - OFF - L.vh(c.vl);
          marks.push(d.bar(xv, y, wv, L.vh(c.vl), { at: when(i, n + 1) }));
          // a mark too thin to be drawn to scale carries its count
          if (L.thin(c.vl)) marks.push(d.text(cut ? xv : xv + wv / 2, y - 3, c.vl, { cls: 'dg-n', anchor: cut ? 'start' : 'middle', at: when(i, n + 1) }));
        }
        if (c.pw) marks.push(d.bar(bx(i), s.line + 1 + OFF, cut ? hw : bw, L.ph(c.pw), { at: when(i, n + 1) }));
        const has = cut ? `${count(c.pw, 'word')} of prose, then ${count(c.vl, 'line')} of verse` : both(c.vl, c.pw);
        const hit = { x: x0(i), y: s.top, w: wOf(i), h: s.end + 3 - s.top, marks: marks.concat(base[i]), say: `${cap(c.as)} in ${c.part.name}: ${has}`, has };
        hits.push(hit);
        if (cut) cutHit = hit;
        col[i].push(...marks);
      });
      // the second name, over the marks it begins with
      if (r.then && r.then.from >= 0) {
        const later = r.cells.filter((c) => c.part.i >= r.then.from);
        const y = s.line - OFF - Math.max(0, ...later.map((c) => L.vh(c.vl))) - 5;
        const t = d.text(x0(r.then.from), y, r.then.label, { at: when(r.then.from, n + 1) });
        if (x0(r.then.from) + long(t, r.then.label.length * 5.6) > d.w) { t.setAttribute('x', d.w); t.setAttribute('text-anchor', 'end'); }
      }
      // the change: a red stroke through the line, and what the facts call it
      if (turn) {
        const x = mid(turn.part.i);
        const stroke = d.rule(x, s.line - 5, x, s.line + 15, { stroke: RED, at: 2100 });
        const label = d.text(x + 5, s.line + 13, turn.label, { fill: RED, at: 2300 });
        if (x + 5 + long(label, turn.label.length * 5.6) > d.w) { label.setAttribute('x', x - 5); label.setAttribute('text-anchor', 'end'); }
        s.turn = { x, marks: [stroke, label], say: `${cap(turn.key)} in ${turn.part.name}`, label };
        col[turn.part.i].push(stroke, label);
        if (cutHit) {
          cutHit.say = `${s.turn.say}: ${cutHit.has}`; cutHit.marks = cutHit.marks.concat(s.turn.marks);
          s.turn.say = cutHit.say; s.turn.marks = cutHit.marks;
        }
      }
    });

    // what the pointer adds: the counts of a part, or of a speaker in it, while its marks stay dark
    hits.forEach((h) => d.hot(d.bar(h.x, h.y, h.w, h.h, { fill: 'transparent' }), h.say, h.marks));
    L.staves.forEach((s) => {
      if (!s.turn) return;
      const end = s.turn.label.getAttribute('text-anchor') === 'end';
      const len = long(s.turn.label, 90) + 9;
      d.hot(d.bar(end ? s.turn.x - len : s.turn.x + 3, s.line + 2, len - 3, 16, { fill: 'transparent' }), s.turn.say, s.turn.marks);
    });

    const none = parts.filter((p) => !p.pw);
    const lone = none.filter((p) => !p.scene).map((p) => `the ${p.name}`);
    const scenes = whole['scenes with no prose'] != null ? whole['scenes with no prose'] : none.filter((p) => p.scene).length;
    const total = whole.scenes != null ? whole.scenes : parts.filter((p) => p.scene).length;
    const few = rows.some((r) => r.cells.some((c) => L.thin(c.vl)));
    const key = d.keys([
      { mark: 'bar', color: INK, text: `verse over the line, prose under it; a line of verse is drawn as tall as ${perLine.toFixed(1)} words, its average length in this play` },
      few ? { mark: 'line', color: INK, text: 'under a number: lines of verse too few to draw to scale' } : null,
      { mark: 'bar', color: TINT, text: `no prose: ${scenes} of the ${total} scenes${lone.length ? `, and ${lone.join(' and ')}` : ''}` },
    ].filter(Boolean));
    key.style.textWrap = 'balance';   // where an entry takes two lines, no word is left alone on the second

    // the figures, folded away; where the play is printed here, a part opens at its place
    const reader = !document.documentElement.dataset.only;
    const open = (read, words) => (reader && read ? el('a', { href: `#/read/${read}`, text: words }) : words);
    const table = (head, body) => {
      const fig = head.map((h, c) => body.some((row) => typeof row[c] === 'number') && body.every((row) => typeof row[c] === 'number' || row[c] === ''));
      const cell = (tag, c, kid) => { const node = el(tag, {}, [typeof kid === 'number' ? num(kid) : kid]); if (fig[c]) node.classList.add('num'); return node; };
      return el('table', { class: 'facts' }, [el('tr', {}, head.map((h, c) => cell('th', c, h))), ...body.map((row) => el('tr', {}, row.map((v, c) => cell('td', c, v))))]);
    };
    const more = Object.keys(f.parts[0]).filter((key) => !['part', 'name', 'read', VERSE, PROSE].includes(key));
    const tables = [
      table(['', VERSE, PROSE, ...more], f.parts.map((p) => [open(p.read, p.name || p.part), p[VERSE], p[PROSE], ...more.map((key) => (p[key] == null ? '' : p[key]))]).concat([['in all', whole[VERSE], whole[PROSE], ...more.map(() => '')]])),
      table(['', VERSE, PROSE], f.speakers.map((s) => [cap(s.speaker), s[VERSE], s[PROSE]])),
    ];
    tables[1].style.marginTop = '18px';
    turns.forEach((t) => {
      const line = el('p', {}, [`${cap(t.key)}: `, open(t.read, t.part.name)]);
      line.style.cssText = 'margin:14px 0 0;font-size:13.5px;font-style:italic';
      tables.push(line);
    });
    ctx.own.append(el('details', { class: 'dg-facts' }, [el('summary', { text: 'The numbers' }), el('div', { class: 'facts-wrap' }, tables)]));
  },
};

export default { lenses: { 'charges:shape': play } };
