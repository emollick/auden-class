// Hamlet: the drawing of its own.
//
//   readiness / Shape: all that Hamlet says, laid end to end in the order he
//                      says it, a row to each act and one scale for all five.
//                      Verse stands over the line and prose under it, each mark
//                      as long as its words. The seven speeches to himself are
//                      in ink, each with the number of its lines over it; this
//                      speech, the last of his prose, is red.
//
// Drawn from the reading's own `facts` (remake/works/hamlet/reading.json).

import { el, RED, INK, QUIET, HAIR } from '../kit/draw.js';
import { sheet, num } from '../kit/diagram.js';

// "Act 5" and "Scene 2" each keep together where a note turns onto a second line, as the kit sets them
// (\u00a0 is a space that does not break)
const place = (scene) => { const [a, s] = String(scene).split('.'); return `Act\u00a0${a}, Scene\u00a0${s}`; };
const sceneOf = (words) => { const m = String(words).match(/(\d+)\D+(\d+)/); return m ? `${m[1]}.${m[2]}` : ''; };
// on the drawing a count is in figures: 5 sentences, 31 lines
const count = (n, one) => `${num(n)} ${one}${n === 1 ? '' : 's'}`;
// in the line the pointer prints, a small number is written as a word: five sentences, seven times
const SMALL = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const small = (n) => (Number.isInteger(n) && n >= 0 && n < SMALL.length ? SMALL[n] : num(n));
const said = (n, one) => `${small(n)} ${one}${n === 1 ? '' : 's'}`;
const often = (n, what) => (n === 0 ? `never ${what}` : `${what} ${n === 1 ? 'once' : n === 2 ? 'twice' : `${small(n)}\u00a0times`}`);
// the three words he says of himself are named as words: between asterisks the kit sets them upright in the
// pointer's italic line. They are not parted where a note turns
const SELF = '*I*,\u00a0*me*\u00a0or\u00a0*my*';
// a note as the kit's line sets it, to measure it: a word between asterisks is an <i>
const set = (words) => String(words).split(/\*([^*]+)\*/).map((t, i) => (i % 2 ? el('i', { text: t }) : t));
const long = (node, guess) => (node.getComputedTextLength && node.getComputedTextLength()) || guess;

const part = {
  name: 'Shape',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const need = (key) => { if (f[key] == null) throw new Error(`facts: no ${key}`); return f[key]; };
    const order = need('inOrder');        // [{ scene, kind, words, toHimself, thisSpeech, read }], in the order he speaks
    const alone = need('soliloquies');    // [{ place, lines, words, iMeMy }]
    const here = need('thisSpeech');      // { words, sentences, saidTo }
    const scenes = need('hamletByScene'); // [scene, lines of verse, words of verse, words of prose]
    if (!Array.isArray(order) || !order.length) throw new Error('facts: no inOrder');

    // the acts, the scenes of each in which he speaks, and the runs of each scene
    const runs = order.map((r) => ({ ...r }));
    const marked = runs.filter((r) => r.toHimself);
    marked.forEach((r, j) => { r.solo = alone[j] && sceneOf(alone[j].place) === r.scene ? alone[j] : alone.find((s) => sceneOf(s.place) === r.scene); });
    const acts = [];
    for (const r of runs) {
      const n = String(r.scene).split('.')[0];
      let act = acts[acts.length - 1];
      if (!act || act.n !== n) { act = { n, scenes: [], words: 0 }; acts.push(act); }
      let sc = act.scenes[act.scenes.length - 1];
      if (!sc || sc.id !== r.scene) { sc = { id: r.scene, runs: [], words: 0 }; act.scenes.push(sc); }
      sc.runs.push(r);
    }
    // inOrder gives the order. The amounts are those of the other facts, so that a number
    // corrected there is corrected here: a speech to himself and this speech are as long as
    // their own words, and the rest of a scene's verse and of its prose is shared out among
    // its other runs as inOrder has them.
    const own = (r) => (r.thisSpeech ? +here.words : r.solo ? +r.solo.words : 0) || 0;
    acts.forEach((act) => act.scenes.forEach((sc) => {
      const row = scenes.find((s) => s[0] === sc.id);
      ['verse', 'prose'].forEach((kind, n) => {
        const of = sc.runs.filter((r) => r.kind === kind);
        const held = of.reduce((t, r) => t + own(r), 0);
        const loose = of.reduce((t, r) => t + (own(r) ? 0 : r.words), 0);
        const share = row && loose > 0 && row[2 + n] > held ? (row[2 + n] - held) / loose : 1;
        of.forEach((r) => { r.len = own(r) || r.words * share; });
      });
      sc.words = sc.runs.reduce((t, r) => t + r.len, 0);
      act.words += sc.words;
    }));

    // a row, from the top: the lines of a speech to himself, verse, the line, prose, the scenes
    const FIG = 15; const H = 11; const LAB = 17; const SKIP = 12;
    const ROW = FIG + H + 1 + H + LAB + SKIP;
    const TOP = 2; const TAIL = 22;
    const d = sheet(ctx, lens, run, TOP + acts.length * ROW - SKIP + TAIL);
    const wide = d.w > 520;
    const base = (i) => TOP + i * ROW + FIG + H;
    // when each row begins to draw. The last line, the red leader, begins 1.24 s in, after its mark, and the kit
    // draws a line in 1.1 s: the whole is there 2.34 s after the drawing starts
    const start = (i) => 60 + i * 170;

    // the acts are named in the margin
    const names = acts.map((a, i) => d.text(0, base(i) + 4, `Act ${a.n}`, { cls: 'dg-lab', at: start(i) }));
    const G = Math.ceil(Math.max(...names.map((n) => long(n, 34))) + (wide ? 12 : 8));

    // one scale for every row: the act in which he says most fills the width.
    // Scenes stand a little apart, and a short scene is given room for its number.
    const probe = d.text(0, -40, '0.0', { cls: 'dg-n' });
    const numw = long(probe, 16) + 5;
    probe.remove();
    const least = wide ? 10 : 6;
    let k = 0;
    for (let turn = 0; turn < 4; turn++) {
      acts.forEach((a) => a.scenes.forEach((sc, j) => { sc.gap = j === a.scenes.length - 1 ? 0 : Math.max(least, turn ? numw - sc.words * k : 0); }));
      k = Math.min(...acts.map((a) => (d.w - G - 1 - a.scenes.reduce((t, sc) => t + sc.gap, 0)) / a.words));
    }

    const hits = [];
    let red = null;
    let unit = true; // the first of the line counts says what it counts
    acts.forEach((act, i) => {
      const yb = base(i);
      const t0 = start(i);
      const at = (x) => t0 + 100 + ((x - G) / (d.w - G)) * 300;
      const figs = [];
      let x0 = G;
      d.rule(G, yb + 0.5, d.w, yb + 0.5, { at: t0 });
      act.scenes.forEach((sc) => {
        const px = (w) => Math.round(x0 + w * k);
        let w = 0;
        sc.marks = []; // all that belongs to the scene, which stays dark while the pointer is on it
        sc.runs.forEach((r) => {
          const a = px(w); const z = px(w + r.len); w += r.len;
          const y = r.kind === 'verse' ? yb - H : yb + 1;
          const late = r.toHimself || r.thisSpeech ? 150 : 0;
          const bar = d.bar(a, y, Math.max(1, z - a), H, { fill: r.thisSpeech ? RED : r.toHimself ? INK : HAIR, at: at(a) + late });
          sc.marks.push(bar);
          if (r.thisSpeech) red = { r, a, z, yb, sc, marks: [bar] };
          else if (r.solo) figs.push({ s: r.solo, sc, a, z, x: (a + z) / 2, marks: [bar] });
        });
        const end = px(sc.words);
        sc.marks.push(d.text(x0, yb + 1 + H + LAB - 4, sc.id, { cls: 'dg-n', fill: QUIET, at: at(x0) }));
        hits.push({ sc, marks: sc.marks, x: x0, w: Math.max(end - x0, numw - 5), y: yb - H, h: 2 * H + 1 + LAB });
        x0 = end + sc.gap;
      });
      // the thread of the act: as long as all he says in it
      d.rule(G, yb + 0.5, x0, yb + 0.5, { stroke: INK, at: t0 });
      // how many lines each speech to himself has; two that stand close are moved apart
      figs.forEach((g, j) => {
        const words = unit ? count(g.s.lines, 'line') : num(g.s.lines);
        unit = false;
        g.node = d.text(g.x, yb - H - 5, words, { cls: 'dg-n', anchor: 'middle', at: t0 + 560 });
        g.half = long(g.node, words.length * 6.5) / 2;
        g.x = Math.max(g.half, Math.min(d.w - g.half, g.x));
        g.node.setAttribute('x', g.x);
        const before = figs[j - 1];
        const lack = before ? before.x + before.half + 4 - (g.x - g.half) : 0;
        if (lack > 0) { before.x -= lack / 2; g.x += lack / 2; before.node.setAttribute('x', before.x); g.node.setAttribute('x', g.x); }
        g.marks.push(g.node);
        g.sc.marks.push(g.node);
        hits.push({ solo: g, marks: g.marks, x: g.a - 3, w: g.z - g.a + 6, y: yb - H - FIG, h: FIG + H });
      });
      if (!act.scenes.some((sc) => sc.runs.some((r) => r.toHimself))) d.text(G, yb - H - 5, 'no speech to himself', { at: t0 + 560 });
    });

    // which side of the line is which
    d.text(d.w - 1, base(0) - 5, 'verse', { anchor: 'end', at: 440 });
    d.text(d.w - 1, base(0) + 14, 'prose', { anchor: 'end', at: 440 });

    // this speech
    if (red) {
      const x = Math.floor((red.a + red.z) / 2) + 0.5;
      const y = red.yb + 1 + H + LAB;
      const t = start(acts.length - 1) + 500;
      const lead = d.rule(x, red.yb + 1 + H, x, y + 2, { stroke: RED, at: t });
      const words = `this speech: ${count(here.sentences, 'sentence')} of ${red.r.kind}, to ${here.saidTo}`;
      const node = d.text(x, y + 15, words, { anchor: 'middle', fill: RED, at: t + 200 });
      const half = long(node, words.length * 5.6) / 2;
      const mid = Math.max(half, Math.min(d.w - half, x));
      node.setAttribute('x', mid);
      red.marks.push(lead, node);
      red.sc.marks.push(lead, node);
      // the pointer finds it on the mark and its leader, and on its words
      hits.push({ here: red, marks: red.marks, x: red.a - 3, w: red.z - red.a + 6, y: red.yb + 1, h: H + LAB + 2 });
      hits.push({ here: red, marks: red.marks, x: mid - half, w: 2 * half, y: y + 3, h: 17 });
    }

    // what the pointer adds: the numbers of a scene, of a speech to himself, of this speech,
    // while the marks of that scene or speech stay dark and the others go pale.
    // A note must not move what stands under it. The notes are given in full where every
    // one of them fits the room the kit keeps under the drawing (measured here with a line
    // set as the kit sets it); where one does not, each names its scene by number, as under
    // the row, and gives the words alone (the rest is in the numbers folded under the key).
    const notes = hits.map((h) => {
      if (h.sc) {
        const s = scenes.find((row) => row[0] === h.sc.id);
        if (!s) return null;
        const prose = s[3] ? `${said(s[3], 'word')} of prose` : 'no prose';
        return { h, full: `${place(h.sc.id)}: ${s[2] ? `${said(s[1], 'line')} of verse (${said(s[2], 'word')})` : 'no verse'}, ${prose}`, brief: `${h.sc.id}: ${s[2] ? `${said(s[2], 'word')} of verse` : 'no verse'}, ${prose}` };
      }
      if (h.solo) {
        const { s, sc } = h.solo;
        const words = `to himself: ${said(s.lines, 'line')}, ${said(s.words, 'word')}`;
        return { h, full: `${place(sc.id)}, ${words}; ${often(s.iMeMy, SELF)}`, brief: `${sc.id}, ${words}` };
      }
      const words = `to ${here.saidTo}: ${said(here.words, 'word')} of ${h.here.r.kind} in ${said(here.sentences, 'sentence')}`;
      return { h, full: `${place(h.here.sc.id)}, ${words}`, brief: `${h.here.sc.id}, ${words}` };
    }).filter(Boolean);
    const meter = el('p', { class: 'dg-say' });
    d.wrap.after(meter);
    const room = meter.getBoundingClientRect().height;
    const whole = room ? notes.every((n) => { meter.replaceChildren(...set(n.full)); return meter.getBoundingClientRect().height <= room + 0.5; }) : d.w >= 440;
    meter.remove();
    notes.forEach(({ h, full, brief }) => d.hot(d.bar(h.x, h.y, h.w, h.h, { fill: 'transparent' }), whole ? full : brief, h.marks));

    const fewest = Math.min(...alone.map((s) => s.lines));
    const key = d.keys([
      { mark: 'bar', color: INK, text: `a speech to himself of ${count(fewest, 'line')} or more` },
      { mark: 'bar', color: HAIR, text: 'all else he says; every mark is drawn as long as its words' },
    ]);
    // in the narrowest drawing the second entry takes two lines: no word is left alone on the second
    key.style.textWrap = 'balance';

    // the numbers, folded away; where the play is printed here, a speech opens in its place
    const reader = !document.documentElement.dataset.only;
    const open = (r, words) => (reader && r && r.read ? el('a', { href: `#/read/${r.read}`, text: words }) : words);
    // a column of numbers is set to the right, as in the kit's own tables
    const table = (head, rows) => {
      const fig = head.map((h, c) => rows.every((row) => typeof row[c] === 'number'));
      const cell = (tag, c, kids) => { const n = el(tag, {}, kids); if (fig[c]) n.classList.add('num'); return n; };
      return el('table', { class: 'facts' }, [el('tr', {}, head.map((h, c) => cell('th', c, [h]))), ...rows.map((row) => el('tr', {}, row.map((v, c) => cell('td', c, [typeof v === 'number' ? num(v) : v]))))]);
    };
    const tables = [
      table(['to himself', 'lines', 'words', 'I, me, my'], alone.map((s) => [open(marked.find((r) => r.solo === s), s.place), s.lines, s.words, s.iMeMy])),
      table(['scene', 'lines of verse', 'words of verse', 'words of prose'], scenes.map((s) => [s[0], s[1], s[2], s[3]]).concat(f.totals ? [['in all', f.totals.verseLines, f.totals.verseWords, f.totals.proseWords]] : [])),
    ];
    // what he says to himself that is not among these and is not marked apart, in the reading's words
    if (typeof f.shorter === 'string' && f.shorter) {
      const rest = el('p', {}, set(f.shorter));
      rest.style.cssText = 'margin:8px 0 0;max-width:34em;font-size:13.5px;line-height:1.4;font-style:italic';
      tables.splice(1, 0, rest);
    }
    if (red) tables.unshift(table(['this speech', 'words', 'sentences', 'said to'], [[open(red.r, place(red.sc.id)), here.words, here.sentences, here.saidTo]]));
    tables.filter((t) => t.tagName === 'TABLE').slice(1).forEach((t) => { t.style.marginTop = '18px'; });
    ctx.own.append(el('details', { class: 'dg-facts' }, [el('summary', { text: 'The numbers' }), el('div', { class: 'facts-wrap' }, tables)]));
  },
};

export default { lenses: { 'readiness:shape': part } };
