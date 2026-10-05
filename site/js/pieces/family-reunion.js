// The Family Reunion: the drawings of its one plate. The play is in copyright,
// so no passage is printed and each tab of the plate is a drawing of its own.
//
//   play / Line:   the rule for the line in its figures; the quoted lines set as
//                  verse, a dot under each stress and two strokes at the pause;
//                  the lines of one speech, each as long as its syllables
//   play / Chorus: the play page by page, a rule to each scene, a numbered stroke
//                  where the chorus begins to speak; then a row to each place,
//                  the words spoken together as a bar, the words each then
//                  speaks alone as boxes, all on one scale
//   play / Greek:  the Greek story and the play as two columns, a rung to each
//                  point: whole where the play keeps it, parted where it changes it
//   play / Sight:  the persons of the play in the lists the reading sorts them
//                  into, a mark to each; the word for the calling; what is said
//                  of the brother who is to have the house
//
// Everything is read from the reading's `facts` when the page runs
// (remake/works/family-reunion/reading.json). No word of the play, no name
// and no number is typed here: the lines shown are facts.lines[].quote.
//
// What the pointer says is kept short. Longer prose stands in the drawing
// where the page is wide, and is folded away under it where it is not.

import { el, RED, INK, QUIET, HAIR } from '../kit/draw.js';
import { sheet, lin, num } from '../kit/diagram.js';
import { syllables, tokens } from '../kit/syllables.js';

const PAPER = 'var(--paper)';
const need = (v, what) => { if (v == null || (Array.isArray(v) && !v.length)) throw new Error(`facts: no ${what}`); return v; };
const count = (n, one, many = `${one}s`) => `${num(n)} ${n === 1 ? one : many}`;
const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);
// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const wide = (node, guess = 40) => (node.getComputedTextLength && node.getComputedTextLength()) || guess;

// the drawing is as tall as what was set in it
function close(d, h) {
  d.svg.setAttribute('height', Math.ceil(h));
  d.svg.setAttribute('viewBox', `0 0 ${d.w} ${Math.ceil(h)}`);
}

// Words set over the drawing that may run to several lines; gives back how tall they stand.
function words(d, x, y, w, text, o = {}) {
  const p = d.note(x, y, w, text, { cls: o.cls, at: o.at, align: o.align });
  if (o.color) p.style.color = o.color;
  if (o.upright) p.style.fontStyle = 'normal';
  if (o.size) p.style.fontSize = `${o.size}px`;
  p.style.textWrap = o.wrap || 'pretty';
  p.style.pointerEvents = 'none';
  return { node: p, h: p.getBoundingClientRect().height };
}

// The name the play gives the pursuers, as the facts of this plate hold it
// (the tab that glosses the name has it under name.word). It is never typed here.
function themOf(ctx) {
  for (const l of (ctx.plate && ctx.plate.lenses) || []) { const w = l && l.facts && l.facts.name && l.facts.name.word; if (typeof w === 'string' && w.trim()) return `the ${w.trim()}`; }
  return 'they';
}

// a pointer (or a tap) on `hit` says `say` under the drawing, and `marks` stay dark with it
const point = (d, hit, say, marks = []) => d.hot(hit, say, marks);

// a heading inside a drawing that may turn over: small capitals, as the kit's dg-lab
function lab(d, x, y, w, text, o = {}) {
  const got = words(d, x, y, w, text, { at: o.at, upright: true, size: 10.5, wrap: 'balance' });
  got.node.style.cssText += ';letter-spacing:.14em;text-transform:uppercase;font-weight:560;line-height:1.5';
  if (o.color) got.node.style.color = o.color;
  got.h = got.node.getBoundingClientRect().height;
  return got;
}

// marks that let the pointer through to what answers it beneath them
const through = (...nodes) => nodes.forEach((x) => { if (x) x.style.pointerEvents = 'none'; });

// Prose a drawing has no room for beside its marks, folded away under it as the kit folds its figures:
// a row to each head, the head in small capitals. `items`: [{ head, body: [words or a node, ...] }]
const CAPS = 'font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;font-weight:560';
function folded(ctx, label, items, open) {
  const rows = items.filter((it) => it && it.body.some(Boolean)).map((it) => el('tr', {}, [el('td', {}, [
    el('div', { style: CAPS, text: it.head || '' }),
    ...it.body.filter(Boolean).map((b) => el('div', { style: 'margin-top:3px' }, [b])),
  ])]));
  if (!rows.length) return null;
  const fold = el('details', { class: 'dg-facts' }, [el('summary', { text: label }), el('div', { class: 'facts-wrap' }, [el('table', { class: 'facts' }, rows)])]);
  fold.open = !!open; // a redraw must not shut what the reader opened
  ctx.own.append(fold);
  return fold;
}
// whether the reader had this fold open before the stage was cleared (another tab's fold does not count)
const wasOpen = (ctx, label) => [...ctx.own.querySelectorAll('details.dg-facts[open] > summary')].some((x) => x.textContent === label);

// ----- Line -----
const marksOf = (voice) => String(voice || '').trim().split(/\s+/).filter(Boolean);
const isPause = (g) => /^\|+$/.test(g);

// One quoted line set as the kit sets verse, a span to each syllable. `voice`
// gives one group of marks to a word and one mark to a syllable; where the
// marks and the words do not agree, a word is marked whole from `stressed`.
function setLine(d, line) {
  const toks = tokens(String(need(line.quote, 'quote')));
  const groups = marksOf(line.voice); const voiced = groups.filter((g) => !isPause(g));
  const more = marksOf(line.voiceWithAFifth).filter((g) => !isPause(g));
  const ok = voiced.length === toks.length;
  const listed = (list, i) => (Array.isArray(list) ? list.some((s) => s && s.w === i) : false);
  const cut = groups.findIndex(isPause);
  const pause = ok && cut > 0 ? groups.slice(0, cut).filter((g) => !isPause(g)).length : Number.isInteger(line.pauseAfterWord) ? line.pauseAfterWord + 1 : -1;
  const p = el('p', { class: 'tx' });
  const sy = [];
  toks.forEach((tok, i) => {
    const w = el('span', { class: 'w' });
    const parts = syllables(tok);
    const g = ok ? voiced[i] : '';
    const each = ok && parts.length === g.length;
    (each ? parts : [tok]).forEach((part, j) => {
      const on = each ? g[j] === '/' : ok ? g.includes('/') : listed(line.stressed, i);
      const may = !on && (each && more.length === toks.length && more[i].length === g.length ? more[i][j] === '/' : listed(line.mayBeStressed, i));
      const node = el('span', { class: `sy ${on ? 's1' : may ? 's2' : 's0'}`, text: part });
      // a stress that can also be heard is set lighter than a sure one, so that the eye counts the sure ones
      if (may) node.style.fontWeight = '430';
      w.append(node);
      sy.push({ node, word: i, on, may, first: j === 0, n: each ? 1 : Math.max(1, g.length) });
    });
    if (i) p.append(' ');
    p.append(w);
  });
  d.wrap.append(p);
  return { p, sy, pause, line };
}

const lineLens = {
  name: 'Line',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const rule = need(f.rule, 'rule'); const lines = need(f.lines, 'lines');
    const FOLD = 'The lines in the play';
    const open = wasOpen(ctx, FOLD);
    const d = sheet(ctx, lens, run, 600);
    const W = d.w; const roomy = W >= 520;
    d.wrap.classList.add('setup');
    let y = 0;

    // the rule, in its two figures and in the words the reading gives for it
    y += lab(d, 0, y, W, 'The rule').h + 4;
    const figs = [[rule.stresses, 'stress', 'stresses'], [rule.pauses, 'pause', 'pauses']].filter((x) => Number.isFinite(x[0]));
    let fx = 0;
    figs.forEach(([n, one, many], i) => {
      const big = d.text(fx, y + 30, n, { cls: 'dg-big', at: 150 + i * 200 });
      const name = d.text(fx + wide(big, 16) + 6, y + 30, n === 1 ? one : many, { at: 150 + i * 200 });
      fx += wide(big, 16) + 6 + wide(name, 50) + 22;
    });
    if (rule.say) {
      const say = roomy ? words(d, fx + 6, y + 2, W - fx - 6, rule.say, { at: 500 }) : words(d, 0, y + 42, W, rule.say, { at: 500 });
      y += roomy ? Math.max(44, say.h + 6) : 42 + say.h + 4;
    } else y += 44;
    y += 12;

    // the quoted lines, in one size of type: as large as lets the longest stand whole
    const set = lines.map((line) => setLine(d, line));
    const max = roomy ? 34 : 24; const min = 17;
    set.forEach((s) => { s.p.style.cssText = `position:absolute;left:0;top:0;margin:0;white-space:nowrap;line-height:1.16;font-size:${max}px`; });
    const longest = Math.max(...set.map((s) => s.p.getBoundingClientRect().width));
    const fs = Math.max(min, Math.min(max, (max * (W - 2)) / (longest * 1.02)));
    const box = d.wrap.getBoundingClientRect();
    const R = roomy ? 3.4 : 2.9;
    const hits = []; const rings = [];
    const mayOf = (line, w) => (Array.isArray(line.mayBeStressed) ? line.mayBeStressed.find((m) => m && m.w === w) : null);
    set.forEach((s, k) => {
      const { line } = s; const t = 350 + k * 350;
      d.rule(0, y + 0.5, W, y + 0.5);
      y += 12;
      y += words(d, 0, y, W, `${line.speaker || ''}${line.scene ? `. ${line.scene}` : ''}${line.page ? `, page ${line.page}` : ''}`, { at: t }).h + 5;
      const top = y;
      s.p.style.cssText = `position:absolute;left:0;top:${y}px;margin:0;width:${W}px;line-height:1.16;font-size:${fs.toFixed(2)}px;white-space:normal;text-wrap:balance;pointer-events:none`;
      // each line of type the words stand on (a long line may turn over on a phone)
      const boxes = s.sy.map((x) => { const r = x.node.getBoundingClientRect(); return { ...x, l: r.left - box.left, r: r.right - box.left, b: r.bottom - box.top, cx: (r.left + r.right) / 2 - box.left, cy: (r.top + r.bottom) / 2 - box.top }; });
      const rows = [];
      boxes.forEach((b) => { const last = rows[rows.length - 1]; if (last && Math.abs(last[0].cy - b.cy) < fs * 0.6) last.push(b); else rows.push([b]); });
      const gaps = Math.max(0, rows.length - 1) * 24;
      // a line that turns is set as the kit sets a turned line of verse: the part after the turn hangs in
      // (the room for the marks under each part is leading, half of it above: the first part is moved up by that half)
      if (gaps) { s.p.style.lineHeight = `${(fs * 1.16 + 24).toFixed(1)}px`; s.p.style.top = `${y - 12}px`; s.p.style.paddingLeft = '1.3em'; s.p.style.textIndent = '-1.3em'; }
      const live = gaps ? s.sy.map((x, i) => { const r = x.node.getBoundingClientRect(); return { ...boxes[i], l: r.left - box.left, r: r.right - box.left, b: r.bottom - box.top, cx: (r.left + r.right) / 2 - box.left }; }) : boxes;
      const lineRows = [];
      live.forEach((b) => { const last = lineRows[lineRows.length - 1]; if (last && Math.abs(last[0].b - b.b) < fs * 0.6) last.push(b); else lineRows.push([b]); });
      const mine = [];
      let before = null; // the line of type before this one, where a long line has turned
      lineRows.forEach((row) => {
        const yb = Math.round(Math.max(...row.map((b) => b.b)) + 9) + 0.5;
        // the line itself as a hairline, broken where the pause falls
        const at = row.findIndex((b) => b.word === s.pause && b.first);
        const px = at > 0 ? (row[at - 1].r + row[at].l) / 2 : null;
        // a pause that falls where the line turns stands at the end of the part before the turn
        if (at === 0 && before) mine.push(d.path(`M${before.r + 6.5} ${before.yb - 7}V${before.yb + 7}M${before.r + 9.5} ${before.yb - 7}V${before.yb + 7}`, { stroke: INK, width: 0.9, dash: 'none', at: t + 300 }));
        before = { r: row[row.length - 1].r, yb };
        if (px === null) d.rule(row[0].l, yb, row[row.length - 1].r, yb, { stroke: QUIET, at: t });
        else {
          d.rule(row[0].l, yb, px - 5, yb, { stroke: QUIET, at: t });
          d.rule(px + 5, yb, row[row.length - 1].r, yb, { stroke: QUIET, at: t + 200 });
          mine.push(d.path(`M${px - 1.5} ${yb - 7}V${yb + 7}M${px + 1.5} ${yb - 7}V${yb + 7}`, { stroke: INK, width: 0.9, dash: 'none', at: t + 300 }));
        }
        row.forEach((b, i) => {
          if (b.on) mine.push(d.dot(b.cx, yb, R, { fill: INK, at: t + 250 + i * 60 }));
          else if (b.may) {
            const ring = d.dot(b.cx, yb, R - 0.4, { fill: PAPER, stroke: RED, width: 1.3, at: t + 700 });
            mine.push(ring);
            const m = mayOf(line, b.word);
            if (m && m.say) rings.push({ x: b.l - 3, y: b.b - fs, w: b.r - b.l + 6, h: yb + 9 - (b.b - fs), say: m.say, ring });
          }
        });
        y = yb + 8;
      });
      hits.push({ top, h: y - top, line, mine });
      y += 4;
      // what the marks come to, in the reading's own figures and words
      const fifth = Array.isArray(line.mayBeStressed) ? line.mayBeStressed.length : 0;
      const sum = [Number.isFinite(line.syllables) ? count(line.syllables, 'syllable') : '', Number.isFinite(line.stresses) ? `${count(line.stresses, 'stress', 'stresses')}${fifth ? ` or ${line.stresses + fifth}` : ''}` : ''].filter(Boolean).join(', ');
      const verdict = line.keepsTheRule === true ? 'That keeps the rule.' : line.keepsTheRule === false ? `The rule asks for ${line.stressesByTheRule ?? rule.stresses}.` : '';
      y += words(d, 0, y, W, `${cap(sum)}${line.sides ? `: ${line.sides}` : ''}. ${verdict}`.trim(), { at: t + 500 }).h + 14;
    });
    // the pointer adds where each line stands in the play
    hits.forEach((h) => { if (h.line.inThePlay) point(d, d.bar(0, h.top - 2, W, h.h + 4, { fill: 'transparent' }), h.line.inThePlay, h.mine); });
    // and on the ring, what the reading says of the stress that can also be heard
    rings.forEach((r) => point(d, d.bar(r.x, r.y, r.w, r.h, { fill: 'transparent' }), r.say, [r.ring]));

    // the lines of one speech, each as long as its syllables: a dash to a syllable
    const len = f.lengths;
    const counts = len && Array.isArray(len.syllables) ? len.syllables.filter((n) => n > 0) : [];
    if (counts.length) {
      const t = 350 + set.length * 350;
      d.rule(0, y + 0.5, W, y + 0.5);
      y += 12;
      y += lab(d, 0, y, W, `${len.what || ''}${len.speaker ? ` (${len.speaker}${len.page ? `, page ${len.page}` : ''})` : ''}`, { at: t }).h + 8;
      const top = Math.max(...counts); const low = Math.min(...counts);
      const probe = d.text(0, -40, counts.length, { cls: 'dg-n' });
      const x0 = Math.ceil(wide(probe, 14)) + 8; probe.remove();
      const u = Math.min(30, (W - x0 - 26) / top);
      const step = 9.5;
      counts.forEach((n, i) => {
        const yy = y + i * step + 4;
        const edge = n === top || n === low;
        const mark = d.rule(x0, yy, x0 + n * u - 2, yy, { stroke: edge ? RED : INK, width: 2, dash: `${(u - 2).toFixed(2)} 2`, at: t + 100 + i * 50 });
        const hit = d.bar(0, yy - step / 2, W, step, { fill: 'transparent' });
        point(d, hit, `Line ${i + 1} of ${counts.length}: ${count(n, 'syllable')}`, [mark]);
      });
      // the first and the last are numbered at the left; the shortest and the longest carry their figures
      d.text(x0 - 8, y + 8, 1, { cls: 'dg-n', anchor: 'end', fill: QUIET, at: t });
      d.text(x0 - 8, y + (counts.length - 1) * step + 8, counts.length, { cls: 'dg-n', anchor: 'end', fill: QUIET, at: t });
      [low, top].forEach((n) => { const i = counts.indexOf(n); d.text(x0 + n * u + 5, y + i * step + 8, n, { cls: 'dg-n', fill: RED, at: t + 100 + i * 50 + 150 }); });
      y += counts.length * step + 6;
    }
    close(d, y);
    d.wrap.getBoundingClientRect();
    d.wrap.classList.remove('setup');

    const all = set.flatMap((s) => s.sy);
    d.keys([
      all.some((s) => s.on) ? { mark: 'dot', color: INK, text: 'a stress of speech' } : null,
      all.some((s) => s.may) ? { mark: 'ring', color: RED, text: 'a stress that can also be heard' } : null,
      set.some((s) => s.pause > 0) ? { mark: 'line', color: QUIET, text: 'the line, broken at the pause' } : null,
      counts.length ? { mark: 'dash', color: INK, text: 'a line of the speech, a dash to a syllable; in red, the shortest and the longest' } : null,
    ].filter(Boolean));
    // on a narrow page what the pointer says of each line stands under the drawing too, folded away
    if (!roomy) {
      folded(ctx, FOLD, lines.map((line) => ({
        head: `${line.speaker || ''}${line.page ? `, page ${line.page}` : ''}`,
        body: [line.inThePlay, ...(Array.isArray(line.mayBeStressed) ? line.mayBeStressed.map((m) => m && m.say) : [])],
      })), open);
    }
  },
};

// ----- Chorus -----
const pagesOf = (s) => (s ? `page${/\D/.test(String(s)) ? 's' : ''} ${s}` : '');

const chorusLens = {
  name: 'Chorus',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const scenes = need(f.scenes, 'scenes').filter((s) => s.firstPage > 0 && s.lastPage >= s.firstPage);
    const places = need(f.choruses, 'choruses');
    need(scenes, 'scenes with pages');
    const members = Array.isArray(f.members) ? f.members : [];
    const FOLD = 'What they say, in paraphrase';
    const open = wasOpen(ctx, FOLD);
    const d = sheet(ctx, lens, run, 600);
    const W = d.w; const roomy = W >= 520;
    const them = themOf(ctx);
    d.wrap.classList.add('setup');
    let y = 0;

    // the members of the chorus, each with what the list of persons says of him or her
    if (members.length) {
      const col = W / members.length;
      let deep = 0;
      members.forEach((m, i) => {
        d.text(i * col, y + 15, m.name, { cls: 'dg-name', at: 100 + i * 120 });
        deep = Math.max(deep, words(d, i * col, y + 21, col - 10, m.who || '', { at: 100 + i * 120 }).h);
      });
      y += 21 + deep + 14;
      d.rule(0, y + 0.5, W, y + 0.5);
      y += 14;
    }

    // the play page by page, a rule to each scene; a stroke where the chorus begins to speak,
    // a ring where the stage directions show the pursuers
    const p0 = Math.min(...scenes.map((s) => s.firstPage)); const p1 = Math.max(...scenes.map((s) => s.lastPage)) + 1;
    const x = lin(p0, p1, 0, W);
    const A = y + 44; // the line of the play
    let part = null;
    scenes.forEach((s, i) => {
      const x1 = Math.round(x(s.firstPage)) + 0.5; const x2 = Math.round(x(s.lastPage + 1)) - 2.5;
      const t = 300 + i * 110;
      d.rule(x1, A, x2, A, { stroke: INK, at: t });
      d.rule(x1, A - 3, x1, A + 4, { stroke: INK });
      if (s.part && s.part !== part) { part = s.part; d.text(x1 - 0.5, y + 9, s.part, { cls: 'dg-lab', at: t }); }
      const id = d.text((x1 + x2) / 2, A + 17, roomy ? s.scene || s.id : s.id, { cls: roomy ? 'dg-it' : 'dg-n', anchor: 'middle', fill: QUIET, at: t });
      const marks = [id];
      if (s.eumenidesShown && s.eumenidesPage) marks.push(d.dot(x(s.eumenidesPage + 0.5), A, 3.3, { fill: PAPER, stroke: RED, width: 1.4, at: 1100 + i * 80 }));
      const hit = d.bar(x1, A - 8, x2 - x1, 30, { fill: 'transparent' });
      const shown = s.eumenidesShown ? ` ${cap(them)} are shown${s.eumenidesPage ? ` (page ${s.eumenidesPage})` : ''}.` : '';
      point(d, hit, `${[s.part, s.scene].filter(Boolean).join(', ')}, ${pagesOf(s.pages)}${s.place ? `, ${s.place}` : ''}${s.onStage ? `: ${s.onStage}` : ''}. ${s.choruses ? count(s.choruses, 'chorus', 'choruses') : 'No chorus'}.${shown}`, marks);
    });
    const end = Math.round(x(p1)) - 2.5;
    d.rule(end, A - 3, end, A + 4, { stroke: INK });
    const ticks = places.map((c, i) => {
      if (!(c.page >= p0 && c.page < p1)) return [];
      const cx = Math.round(x(c.page + 0.5));
      const t = 700 + i * 130;
      const tick = [d.bar(cx - 1.5, A - 13, 3, 13, { fill: INK, at: t }), d.text(cx, A - 18, c.n ?? i + 1, { cls: 'dg-n', anchor: 'middle', at: t })];
      through(...tick);
      tick.cx = cx;
      return tick;
    });
    y = A + 30;
    d.rule(0, y + 0.5, W, y + 0.5);
    y += 14;

    // a row to each place: the words spoken together as one bar, then the words each speaks alone,
    // a box to a speaker, all on one scale
    const most = Math.max(...places.map((c) => (c.wordsTogether || 0) + (c.wordsApart || 0)));
    const gap = 5;
    const most4 = Math.max(0, ...places.map((c) => (Array.isArray(c.apart) ? c.apart.length : 0)));
    const k = (W - gap - most4 * 2 - 1) / (most || 1);
    const sceneOf = (c) => scenes.find((s) => s.id === c.scene);
    places.forEach((c, i) => {
      const t = 750 + i * 170;
      // the whole row answers the pointer with its figures; it lies under the marks that answer for themselves
      const row = d.bar(0, y - 2, W, 34, { fill: 'transparent' });
      const n = d.text(0, y + 11, c.n ?? i + 1, { cls: 'dg-n', at: t });
      const s = sceneOf(c);
      const where = d.text(wide(n, 8) + 8, y + 11, `${s && roomy ? `${[s.part, s.scene].filter(Boolean).join(', ')}, ` : s ? `${s.id}, ` : ''}${pagesOf(c.pages)}`, { at: t });
      const sum = d.text(W, y + 11, `${num(c.wordsTogether || 0)} together, ${c.wordsApart ? num(c.wordsApart) : 'none'} alone`, { anchor: 'end', at: t });
      if (wide(n, 8) + 8 + wide(where, 150) + 10 > W - wide(sum, 120)) where.textContent = pagesOf(c.pages);
      through(n, where, sum);
      const by = y + 18; const H = 11;
      const all = [];
      const tw = Math.max(1, (c.wordsTogether || 0) * k);
      const solid = d.bar(0, by, tw, H, { fill: INK, at: t + 80 });
      through(solid);
      all.push(solid);
      let bx = tw + gap;
      (Array.isArray(c.apart) ? c.apart : []).forEach((a, j) => {
        const bw = Math.max(2, (a.words || 0) * k);
        const boxed = d.bar(bx + 0.5, by + 0.5, bw - 1, H - 1, { fill: 'none', stroke: INK, at: t + 200 + j * 70 });
        through(boxed);
        all.push(boxed);
        point(d, d.bar(bx, by - 3, bw + 2, H + 6, { fill: 'transparent' }), `${a.name}, alone, ${count(a.words || 0, 'word')}: ${a.about || ''}`, [boxed]);
        bx += bw + 2;
      });
      // where there is room for it under the key, the bar says what they say together (a phone has it in the fold)
      if (c.together && roomy) point(d, d.bar(0, by - 3, tw, H + 6, { fill: 'transparent' }), `Together, ${count(c.wordsTogether || 0, 'word')}: ${c.together}`, [solid]);
      // the order of the voices, as the reading lists it
      const order = Array.isArray(c.order) ? c.order.join(', ') : '';
      const said = words(d, 0, by + H + 3, W, order ? (c.order.length > 1 ? `In order: ${order}.` : `${cap(order)} only.`) : c.apartSay || '', { at: t + 300 });
      ticks[i].forEach((m) => all.push(m));
      // the figures of the place, with the words each member speaks alone
      const each = (Array.isArray(c.apart) ? c.apart : []).filter((a) => a && a.name).map((a) => `${a.name} ${num(a.words || 0)}`).join(', ');
      const brief = `${cap(pagesOf(c.pages))}: ${count(c.wordsTogether || 0, 'word')} together, ${c.wordsApart ? `${num(c.wordsApart)} alone${each ? ` (${each})` : ''}` : 'none alone'}.`;
      point(d, row, brief, all);
      if (ticks[i].length) point(d, d.bar(ticks[i].cx - 8, A - 31, 16, 23, { fill: 'transparent' }), brief, all);
      y = by + H + 3 + said.h + 12;
    });
    if (f.totals) {
      d.rule(0, y - 3.5, W, y - 3.5);
      const tt = f.totals;
      y += words(d, 0, y + 4, W, `In all, at ${count(tt.places ?? places.length, 'place')}: ${count(tt.wordsTogether || 0, 'word')} together, ${num(tt.wordsApart || 0)} alone.`, { at: 1800 }).h + 6;
    }
    close(d, y);
    d.wrap.getBoundingClientRect();
    d.wrap.classList.remove('setup');
    d.keys([
      { mark: 'line', color: INK, text: `the play, pages ${p0} to ${p1 - 1}, a rule to each scene; a numbered stroke where the chorus begins to speak` },
      { mark: 'bar', color: INK, text: 'words spoken together, as a chorus' },
      { mark: 'open', color: INK, text: 'words one of them then speaks alone; every mark is drawn as long as its words' },
      scenes.some((s) => s.eumenidesShown) ? { mark: 'ring', color: RED, text: `${them} are shown, by the stage directions` } : null,
    ].filter(Boolean));

    // what is said at each place, in the reading's paraphrase, folded away
    folded(ctx, FOLD, places.map((c, i) => {
      const alone = (Array.isArray(c.apart) ? c.apart : []).filter((x) => x && x.about).map((x) => `${x.name}${x.words ? `, ${count(x.words, 'word')}` : ''}: ${x.about}`).join('; ');
      return {
        head: `${c.n ?? i + 1}. ${cap(pagesOf(c.pages))}`,
        body: [c.together ? `Together: ${c.together}` : '', [c.apartSay, alone ? `${alone}.` : ''].filter(Boolean).join(' ')].map((x, k) => (k && x ? `Alone: ${x}` : x)),
      };
    }), open);
  },
};

// ----- Greek -----
const BODY = 'var(--body)';
const isKept = (p) => String(p.kind).toLowerCase() === 'kept';

// the rung between the two stories at one point: whole where the play keeps it,
// parted, the far half a step lower, where the play changes it
function rung(d, x1, x2, y, kept, at) {
  const m = (x1 + x2) / 2;
  if (kept) return [d.rule(x1, y, x2, y, { stroke: INK, width: 1.3, at }), d.dot(x1, y, 2.6, { fill: INK, at }), d.dot(x2, y, 2.6, { fill: INK, at: at + 250 })];
  return [d.rule(x1, y, m - 3, y, { stroke: RED, width: 1.3, at }), d.rule(m + 3, y + 7, x2, y + 7, { stroke: RED, width: 1.3, at: at + 150 }), d.dot(x1, y, 2.6, { fill: RED, at }), d.dot(x2, y + 7, 2.6, { fill: RED, at: at + 300 })];
}

const greekLens = {
  name: 'Greek',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const pairs = need(f.pairs, 'pairs').filter((p) => p && (p.greek || p.play));
    need(pairs, 'pairs');
    const FOLD = 'The two stories, point by point';
    const open = wasOpen(ctx, FOLD);
    const d = sheet(ctx, lens, run, 600);
    const W = d.w; const roomy = W >= 520;
    d.wrap.classList.add('setup');
    const G = roomy ? 62 : 0;                 // the gutter the rungs cross
    const cw = roomy ? (W - G) / 2 : W;       // a column of words
    const R0 = roomy ? cw + G : 0;            // where the play's column begins
    let y = 0;
    if (f.under) y += words(d, 0, y, W, f.under, {}).h + 12;
    const H1 = 'The Greek story'; const H2 = 'The play';
    if (roomy) {
      d.text(0, y + 10, H1, { cls: 'dg-lab', fill: INK });
      d.text(R0, y + 10, H2, { cls: 'dg-lab', fill: INK });
      y += 18;
    }
    d.rule(0, y + 0.5, W, y + 0.5);
    y += roomy ? 14 : 10;

    pairs.forEach((p, i) => {
      const t = 200 + i * 140;
      const kept = isKept(p);
      // the point, and in red the turn the play gives it
      const link = p.read && canRead();
      const head = lab(d, 0, y, roomy ? cw : W - 60, link ? '' : p.topic || '', { at: t, color: INK });
      if (link) { const a = el('a', { href: `#/read/${p.read}`, text: p.topic || '' }); a.style.pointerEvents = 'auto'; head.node.append(a); head.h = head.node.getBoundingClientRect().height; }
      if (roomy) {
        rung(d, cw + 10, R0 - 10, y + 7.5, kept, t + 150);
        const turn = lab(d, R0, y, cw, p.turn || (kept ? 'kept' : 'changed'), { at: t + 300, color: kept ? QUIET : RED });
        // each account stands close under its own head, though a head that turns over is the taller
        const ya = y + head.h + 3; const yb = y + turn.h + 3;
        const a = words(d, 0, ya, cw, p.greek || '', { at: t, upright: true, color: BODY });
        const b = words(d, R0, yb, cw, p.play || '', { at: t + 200, upright: true, color: BODY });
        y = Math.max(ya + a.h, yb + b.h) + 12;
      } else {
        // on a narrow page the row is the point, its rung and its turn; the two accounts are folded under the drawing
        rung(d, W - 46, W - 4, y + 7.5, kept, t + 150);
        y += head.h + 1;
        y += words(d, 0, y, W - 60, p.turn || (kept ? 'kept' : 'changed'), { at: t + 200, color: kept ? null : RED }).h + 9;
      }
      if (i < pairs.length - 1) { d.rule(0, y - 0.5, W, y - 0.5); y += roomy ? 12 : 8; }
    });

    // the name the play gives the pursuers: what it means, and how often it is spoken
    const nm = f.name;
    if (nm && nm.word) {
      y += 6;
      d.rule(0, y + 0.5, W, y + 0.5);
      y += 16;
      const t = 200 + pairs.length * 140;
      const word = d.text(0, y + 15, nm.word, { cls: 'dg-name', at: t });
      word.style.fontStyle = 'italic';
      const wx = wide(word, 80) + 12;
      // the word and its meaning at the left; the two counts at the right, or under them on a narrow page
      const means = roomy ? words(d, wx, y + 1, cw - wx, nm.means || '', { at: t }) : words(d, 0, y + 22, W, nm.means || '', { at: t });
      const leftH = roomy ? Math.max(24, means.h + 1) : 22 + means.h;
      const fy = roomy ? y : y + leftH + 8;
      let figH = 0;
      [[nm.timesSpoken, 'spoken in the play'], [nm.timesInStageDirections, 'in its stage directions']].filter((x) => Number.isFinite(x[0])).forEach(([n, where], k) => {
        const fx = R0 + k * (cw / 2);
        const big = d.text(fx, fy + 27, n, { cls: 'dg-big', at: t + 300 + k * 200 });
        const bw = wide(big, 16) + 7;
        const lbl = words(d, fx + bw, fy + 2, Math.max(60, cw / 2 - bw - 10), `${n === 1 ? 'time' : 'times'} ${where}`, { at: t + 300 + k * 200 });
        figH = Math.max(figH, 34, lbl.h + 4);
      });
      y = roomy ? y + Math.max(leftH, figH) : fy + figH;
      // where the name stands in the play: on a narrow page it goes with the stories, folded under the drawing,
      // so that what a tap says of a point is not pushed far from the point
      if (nm.inThePlay && roomy) y += words(d, 0, y + 6, W, nm.inThePlay, { at: t + 400 }).h + 8;
    }
    close(d, y + 2);
    d.wrap.getBoundingClientRect();
    d.wrap.classList.remove('setup');
    const kept = pairs.filter(isKept).length;
    d.keys([
      kept ? { mark: 'line', color: INK, text: `kept, at ${count(kept, 'point')}` } : null,
      pairs.length - kept ? { mark: 'line', color: RED, text: `changed, at ${count(pairs.length - kept, 'point')}` } : null,
    ].filter(Boolean));
    // on a narrow page the two stories stand point by point under the drawing, folded away
    if (!roomy) {
      const items = pairs.map((p) => ({
        head: `${p.topic || ''}${p.turn ? `: ${p.turn}` : ''}`,
        body: [p.greek ? `${H1}: ${p.greek}` : '', p.play ? `${H2}: ${p.play}` : '', p.read && canRead() ? el('a', { href: `#/read/${p.read}`, text: 'Read it here' }) : null],
      }));
      if (nm && nm.word && nm.inThePlay) items.push({ head: nm.word, body: [nm.inThePlay] });
      folded(ctx, FOLD, items, open);
    }
  },
};

// ----- Sight -----
// the four ways the reading sorts the persons of the play, by the key each list stands under
const GROUPS = [
  { key: 'sees', head: 'see them', mark: 'dot' },
  { key: 'doesNotSee', head: 'do not see them', mark: 'ring' },
  { key: 'notSaid', head: 'the play does not say', mark: 'none' },
  { key: 'neverArrive', head: 'never arrive', mark: 'dash' },
];

const sightLens = {
  name: 'Sight',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const groups = GROUPS.map((g) => ({ ...g, list: Array.isArray(f[g.key]) ? f[g.key].filter((p) => p && p.who) : [] })).filter((g) => g.list.length);
    need(groups, 'persons');
    const shown = Array.isArray(f.shown) ? f.shown : [];
    const FOLD = 'What the play shows of each';
    const open = wasOpen(ctx, FOLD);
    const d = sheet(ctx, lens, run, 600);
    const W = d.w; const roomy = W >= 520;
    d.wrap.classList.add('setup');
    const gut = roomy ? 40 : 12;   // between two lists side by side
    const IN = roomy ? 17 : 16;    // from a list's edge to its names
    // two lists stand side by side where the longest name, with its mark and its rings, has room in half the width;
    // on a very narrow page they stand one under the other
    const onStage = (who) => shown.filter((s) => Array.isArray(s.onStage) && s.onStage.includes(who)).length;
    const room = (who) => { const t = d.text(0, -60, who, { cls: 'dg-name' }); const w = wide(t, String(who).length * 9); t.remove(); const k = onStage(who); return IN + w + (k ? 6 + k * 9.5 : 0); };
    const cols = Math.max(...groups.flatMap((g) => g.list.map((p) => room(p.who)))) <= (W - gut) / 2 ? 2 : 1;
    const cw = cols === 2 ? (W - gut) / 2 : W;
    let y = 0;
    let n = 0;

    // two lists side by side, then the next two: a mark, a name, and what the list of persons says
    for (let g0 = 0; g0 < groups.length; g0 += cols) {
      const pair = groups.slice(g0, g0 + cols);
      const top = y;
      let deep = 0;
      // the heads of the two lists: a head too long for its column turns over, and both lists begin level
      const heads = pair.map((g, k) => {
        const x0 = k * (cw + gut);
        d.rule(x0, top + 0.5, x0 + cw, top + 0.5);
        d.text(x0 + cw, top + 18, g.list.length, { cls: 'dg-n', anchor: 'end' });
        return lab(d, x0, top + 7, cw - 22, g.head, { color: INK }).h;
      });
      const headH = 7 + Math.max(...heads) + 6;
      pair.forEach((g, k) => {
        const x0 = k * (cw + gut);
        let yy = top + headH;
        g.list.forEach((p) => {
          const t = 150 + (n++) * 70;
          const my = yy + 10;
          const marks = [];
          if (g.mark === 'dot') marks.push(d.dot(x0 + 4.5, my, 4, { fill: INK, at: t }));
          else if (g.mark === 'ring') marks.push(d.dot(x0 + 4.5, my, 3.4, { fill: PAPER, stroke: INK, width: 1.3, at: t }));
          else if (g.mark === 'dash') marks.push(d.rule(x0, my, x0 + 9, my, { stroke: INK, width: 1.3, dash: '2.5 2', at: t }));
          const name = d.text(x0 + IN, yy + 15, p.who, { cls: 'dg-name', at: t });
          marks.push(name);
          // a small red ring for each time they are shown while this person is on the stage
          let rx = x0 + IN + wide(name, 60) + 10;
          for (let k = onStage(p.who); k > 0; k--) { marks.push(d.dot(rx, my, 2.9, { fill: PAPER, stroke: RED, width: 1.3, at: t + 400 })); rx += 9.5; }
          const role = words(d, x0 + IN, yy + 19, cw - IN, p.role || '', { at: t });
          const said = roomy && p.say ? words(d, x0 + IN, yy + 19 + role.h + 2, cw - IN, p.say, { at: t + 150, upright: true, color: BODY }) : { h: -2 };
          const h = 19 + role.h + 2 + said.h + (roomy ? 12 : 9);
          const hit = d.bar(x0, yy - 2, cw, h - 2, { fill: 'transparent' });
          // the pointer adds the pages; on a narrow page, where it is not printed, also what the play shows
          point(d, hit, roomy || !p.say ? `${p.who}: ${p.pages ? pagesOf(p.pages) : g.head}.` : `${p.who} (${pagesOf(p.pages) || g.head}): ${p.say}`, marks);
          yy += h;
        });
        deep = Math.max(deep, yy - top);
      });
      y = top + deep + (roomy ? 8 : 6);
    }

    // who else sees them: the audience, as the reading has it (on a narrow page this goes into the fold)
    const seen = f.audience && typeof f.audience === 'object' ? Object.values(f.audience).filter((v) => typeof v === 'string' && v.trim()) : [];
    if (seen.length && roomy) {
      const t = 150 + n * 70 + 100;
      d.rule(0, y + 0.5, W, y + 0.5);
      y += 12;
      y += lab(d, 0, y, W, 'The audience', { at: t, color: INK }).h + 6;
      if (seen.length === 2 && cols === 2) {
        const a = words(d, 0, y, cw, seen[0], { at: t }); const b = words(d, cw + gut, y, cw, seen[1], { at: t + 150 });
        y += Math.max(a.h, b.h) + 14;
      } else { seen.forEach((line, i) => { y += words(d, 0, y, W, line, { at: t + i * 150 }).h + 4; }); y += 10; }
    }

    // the word for what has come to him, and what it means
    const e = f.election;
    if (e && e.word) {
      const t = 150 + n * 70 + 200;
      d.rule(0, y + 0.5, W, y + 0.5);
      y += 12;
      const word = d.text(0, y + 17, e.word, { cls: 'dg-name', at: t });
      word.style.fontStyle = 'italic';
      const wx = wide(word, 60);
      if (e.page) d.text(wx + 8, y + 17, `page ${e.page}`, { at: t });
      y += 24;
      const lines = [e.means, e.say].filter(Boolean);
      if (roomy && lines.length === 2) {
        const a = words(d, 0, y, cw, lines[0], { at: t + 150 }); const b = words(d, cw + gut, y, cw, lines[1], { at: t + 300 });
        y += Math.max(a.h, b.h) + 14;
      } else { lines.forEach((line, i) => { y += words(d, 0, y, W, line, { at: t + 150 + i * 150 }).h + 4; }); y += 10; }
    }

    // what is said of the brother who is to have the house: who says it, on what page, and what
    const j = f.john;
    const saidOf = j && Array.isArray(j.said) ? j.said.filter((s) => s && s.say) : [];
    if (saidOf.length) {
      const t = 150 + n * 70 + 300;
      d.rule(0, y + 0.5, W, y + 0.5);
      y += 12;
      if (j.heading) y += lab(d, 0, y, W, j.heading, { at: t, color: INK }).h + 6;
      const byw = roomy ? 150 : 0;
      saidOf.forEach((s, i) => {
        const who = `${s.by || ''}${s.page ? `, page ${s.page}` : ''}`;
        const a = words(d, 0, y, roomy ? byw - 12 : W, who, { at: t + 100 + i * 80 });
        const b = words(d, byw, roomy ? y : y + a.h, W - byw, s.say, { at: t + 100 + i * 80, upright: true, color: BODY });
        y += (roomy ? Math.max(a.h, b.h) : a.h + b.h) + (i < saidOf.length - 1 ? 7 : 2);
      });
      y += 4;
    }
    close(d, y);
    d.wrap.getBoundingClientRect();
    d.wrap.classList.remove('setup');
    const has = (mark) => groups.some((g) => g.mark === mark);
    const pages = shown.map((s) => s.page).filter(Boolean);
    const onPages = pages.length ? ` (${pages.length > 1 ? 'pages' : 'page'} ${pages.slice(0, -1).join(', ')}${pages.length > 1 ? ' and ' : ''}${pages[pages.length - 1]})` : '';
    d.keys([
      has('dot') ? { mark: 'dot', color: INK, text: `sees ${themOf(ctx)}` } : null,
      has('ring') ? { mark: 'ring', color: INK, text: 'does not see them' } : null,
      has('dash') ? { mark: 'dash', color: INK, text: 'never arrives' } : null,
      shown.length ? { mark: 'ring', color: RED, text: `on the stage when the stage directions show them${onPages}` } : null,
    ].filter(Boolean));
    // on a narrow page what the play shows of each person stands under the drawing, folded away
    if (!roomy) {
      folded(ctx, FOLD, groups.flatMap((g) => g.list.filter((p) => p.say).map((p) => ({
        head: `${p.who}${p.pages ? `, ${pagesOf(p.pages)}` : ''}`,
        body: [p.say],
      }))).concat(seen.length ? [{ head: 'The audience', body: seen }] : []), open);
    }
  },
};

// each tab of the plate "play", by its number from 0
export default { lenses: { 'play:0': lineLens, 'play:1': chorusLens, 'play:2': greekLens, 'play:3': sightLens } };
