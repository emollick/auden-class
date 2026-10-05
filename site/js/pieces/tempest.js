// The Tempest: the drawing of its own.
//
//   noises / Scene:  Act 3, Scene 2 speech by speech. A row to each speaker,
//                    the speeches set along it in the order they are spoken:
//                    a speech in verse is a solid bar, a speech in prose an
//                    open one. Under the rows, how often each says "monster".
//
// Drawn from the reading's own `facts` (remake/works/tempest/reading.json).
// The speeches one by one stand under each speaker's key "speech by speech",
// which remake/works/tempest/scene-order.mjs makes from the count of the
// text printed here.

import { RED, INK, QUIET, mk, el } from '../kit/draw.js';
import { sheet } from '../kit/diagram.js';

const LIST = 'speech by speech';
const SAYS = 'says monster';            // the key of the second count; its last word is the word counted
const blank = (v) => v === '' || v === null || v === undefined;
const count = (n, one, more = `${one}s`) => `${n} ${n === 1 ? one : more}`;
const sum = (list, f) => list.reduce((n, x) => n + (f(x) || 0), 0);
const WORDS = ['', '', 'two ', 'three ', 'four ', 'five '];

// The speakers as the facts give them, each with his speeches in order and
// the runs they fall into (so many in prose, then so many in verse). If the
// figures and the list of speeches disagree, nothing is drawn and the kit
// shows the plain table.
function cast(facts) {
  if (!Array.isArray(facts) || !facts.length) throw new Error('facts: no speakers');
  return facts.map((f) => {
    const list = f[LIST];
    if (!f.speaker) throw new Error('facts: a speaker without a name');
    if (!Array.isArray(list)) throw new Error(`facts: no "${LIST}" for ${f.speaker}`);
    if (typeof f[SAYS] !== 'number') throw new Error(`facts: no "${SAYS}" for ${f.speaker}`);
    const of = (form) => list.filter((s) => s.form === form);
    const lines = sum(of('verse'), (s) => s.lines);
    const sung = sum(list, (s) => s['lines sung']);
    const stated = String(f['lines of verse']).match(/^\d+/);
    if (list.length !== f.speeches) throw new Error(`facts: ${f.speaker} has ${f.speeches} speeches, and ${list.length} are listed`);
    if (!blank(f['in prose']) && f['in prose'] !== of('prose').length) throw new Error(`facts: ${f.speaker}, in prose`);
    if (!blank(f['in verse']) && f['in verse'] !== of('verse').length) throw new Error(`facts: ${f.speaker}, in verse`);
    if (stated && +stated[0] !== lines + sung) throw new Error(`facts: ${f.speaker}, lines of verse`);
    const runs = [];
    for (const s of list) {
      const last = runs[runs.length - 1];
      if (last && last.form === s.form) { last.to = s.speech; last.count += 1; last.lines += s.lines || 0; } else runs.push({ form: s.form, from: s.speech, to: s.speech, count: 1, lines: s.lines || 0 });
    }
    // `one`: the form of a speaker who keeps to one form
    return { name: f.speaker, listed: f['listed as'] || '', speeches: f.speeches, says: f[SAYS], list, runs, sung, one: runs.length === 1 && !blank(runs[0].form) ? runs[0].form : null };
  });
}

const scene = {
  name: 'Scene',
  stage: 'own',
  draw(ctx, lens, run) {
    const people = cast(lens.facts);
    const total = sum(people, (p) => p.speeches);
    const all = people.flatMap((p) => p.list).sort((a, b) => a.speech - b.speech);
    if (all.some((s, i) => s.speech !== i + 1)) throw new Error('facts: the speeches are not numbered from 1 to the last, each once');

    // speakers who stand together and keep to one form are summed in one line under the last of them
    people.forEach((p, i) => {
      if (!p.one || (i && people[i - 1].one === p.one)) return;
      let z = i; while (people[z + 1] && people[z + 1].one === p.one) z++;
      const group = people.slice(i, z + 1);
      const sung = sum(group, (q) => q.sung);
      people[z].note = `${group.length > 1 ? `together ${sum(group, (q) => q.speeches)}, ` : ''}all in ${p.one}${sung ? `; ${count(sung, 'line')} sung` : ''}`;
    });

    // the speeches of the passage on this plate: those its rows stand in
    const src = ctx.plate.src;
    const block = (s) => { const m = String(s.read || '').match(/^(.+):(\d+)$/); return m && m[1] === src ? +m[2] : null; };
    const placed = all.filter((s) => block(s) !== null).sort((a, b) => block(a) - block(b));
    const here = new Set();
    for (const r of ctx.plate.rows || []) {
      if (r.aside || !r.id) continue;
      const b = parseInt(r.id, 10);
      let hit = null;
      for (const s of placed) if (block(s) <= b) hit = s;
      if (hit) here.add(hit.speech);
    }

    // ----- the measures -----
    const H = 16;                       // the height of a speech's mark
    const rowsAt = [];
    let y = 2;
    people.forEach((p) => { const name = y + 14; const top = name + 9; const base = top + H; rowsAt.push({ name, top, base }); y = base + (p.note || p.runs.length > 1 ? 25 : 0) + 15; });
    const axis = rowsAt[rowsAt.length - 1].base;
    const figs = axis + 17;
    const second = figs + 24;           // the rule over the second drawing
    const d = sheet(ctx, lens, run, second + 90);   // with room under the names, so that the key stands clear of them
    // every speech has the same room, a whole number of the screen's own dots, so that every mark is alike and sharp
    const k = Math.min(3, Math.max(1, Math.round(window.devicePixelRatio || 1)));
    const slot = Math.max(3, Math.min(11, Math.floor((d.w * k) / total) / k));
    const bw = Math.min(slot - 1, Math.round((3.2 + slot * 0.32) * k) / k);
    const x = (n) => (n - 1) * slot;
    const mid = (n) => x(n) + bw / 2;
    const sharp = (c) => Math.round((c - 0.5) * k) / k + 0.5;   // where a line 1 px wide falls on whole dots
    const right = x(total) + bw;
    const when = (n) => 150 + (n - 1) * 20;
    const done = when(total);

    // ----- a row to each speaker -----
    let touch = false;
    d.svg.addEventListener('pointerdown', (e) => { touch = e.pointerType === 'touch'; }, true);
    const heads = people.map((p, i) => {
      // the name, how the list of persons describes him, and how many speeches he has
      const line = d.text(0, rowsAt[i].name, '');
      line.append(mk('tspan', { class: 'dg-name', 'font-style': 'normal' }, p.name));
      const listed = p.listed ? mk('tspan', { class: 'dg-it', dx: 7 }, p.listed) : null;
      if (listed) line.append(listed);
      const n = d.text(right, rowsAt[i].name, count(p.speeches, 'speech', 'speeches'), { anchor: 'end' });
      const box = line.getBBox();
      return { listed, fits: box.x + box.width + 10 <= right - n.getComputedTextLength() };
    });
    if (heads.some((h) => !h.fits)) heads.forEach((h) => h.listed && h.listed.remove());

    people.forEach((p, i) => {
      const at = rowsAt[i];
      // the line the speeches stand on; the last is the scene's own, and is numbered
      d.rule(0, at.base + 0.5, right, at.base + 0.5, i === people.length - 1 ? { stroke: INK } : {});
      for (const s of p.list) {
        const mine = here.has(s.speech);
        const color = mine ? RED : INK;
        const g = mk(s.read ? 'a' : 'g', s.read ? { href: `#/read/${s.read}`, tabindex: -1 } : {});
        d.svg.append(g);
        let mark;
        if (s.form === 'verse') mark = d.bar(x(s.speech), at.top, bw, H, { fill: color, at: when(s.speech) });
        else if (s.form === 'prose') mark = d.bar(x(s.speech) + 0.5, at.top + 0.5, bw - 1, H - 1, { fill: 'none', stroke: color, at: when(s.speech) });
        else mark = d.dot(mid(s.speech), at.top + H / 2, Math.min(2.2, bw / 2), { fill: color, at: when(s.speech) });
        g.append(mark, d.bar(x(s.speech) - (slot - bw) / 2, at.top - 4, slot, H + 8, { fill: 'transparent' }));
        // a pointer may go to the speech in the book; a finger only asks what the mark is
        if (s.read) { g.style.cursor = 'pointer'; g.addEventListener('click', (e) => { if (touch) e.preventDefault(); }); }
        const form = blank(s.form) ? '' : `, in ${s.form}`;
        const length = s.lines ? `, ${count(s.lines, 'line')}` : s['lines sung'] ? `, with ${count(s['lines sung'], 'line')} sung` : '';
        d.hot(g, `Speech ${s.speech}: ${p.name}${form}${length}${mine ? ' (this passage)' : ''}`);
      }
      // under the row: the runs of a speaker who changes, or the sum of those who do not
      if (p.runs.length > 1) {
        const yb = at.base + 6.5;
        // a bracket draws itself under a run once the last mark of the run is there
        p.runs.forEach((r) => {
          const x1 = x(r.from) + 0.5; const x2 = x(r.to) + bw - 0.5;
          d.path(`M${x1} ${yb - 3}V${yb}H${x2}V${yb - 3}`, { stroke: QUIET, width: 1, at: when(r.to) + 100 });
          const words = `${r.count}${blank(r.form) ? '' : ` in ${r.form}`}${r.lines ? `, ${count(r.lines, 'line')}` : ''}`;
          const label = d.text((x1 + x2) / 2, yb + 15, words, { anchor: 'middle', at: when(r.to) + 100 });
          // a label wider than its run keeps inside the drawing
          const half = label.getComputedTextLength() / 2;
          label.setAttribute('x', Math.max(half, Math.min(right - half, (x1 + x2) / 2)));
        });
      } else if (p.note) d.text(right, at.base + 21.5, p.note, { anchor: 'end', at: done + 100 });
    });

    // ----- the speeches by number, under the last row -----
    const end = d.text(right, figs, count(total, 'speech', 'speeches'), { cls: 'dg-n', anchor: 'end' });
    const clear = right - end.getComputedTextLength() - 12;
    const tick = (n) => { const c = sharp(mid(n)); d.rule(c, axis, c, axis + 4, { stroke: INK }); };
    for (let n = 1; n <= total; n += n === 1 ? 9 : 10) {
      if (n > 1 && mid(n) + 8 > clear) break;
      tick(n);
      d.text(n === 1 ? 0 : mid(n), figs, n, { cls: 'dg-n', anchor: n === 1 ? 'start' : 'middle' });
    }
    tick(total);

    // ----- the second drawing: who says the word, and how often -----
    d.rule(0, second + 0.5, right, second + 0.5);
    const head = d.text(0, second + 17, '', { cls: 'dg-lab', at: done + 350 });
    const word = SAYS.slice(SAYS.lastIndexOf(' ') + 1);
    head.append(SAYS.slice(0, SAYS.length - word.length), mk('tspan', { 'font-style': 'italic' }, word), `, ${count(sum(people, (p) => p.says), 'time')} in all`);
    const names = people.map((p, i) => d.text(0, second + 73, p.name, { at: done + 450 + i * 110 }));
    // the columns stand as far apart as the last name leaves room for
    const col = Math.min(128, (right - names[names.length - 1].getComputedTextLength()) / Math.max(1, people.length - 1));
    people.forEach((p, i) => {
      names[i].setAttribute('x', i * col);
      d.text(i * col, second + 56, p.says, { cls: 'dg-big', at: done + 450 + i * 110 });
    });

    // ----- the key -----
    const formOf = (s) => (blank(s.form) ? '' : s.form);
    const has = (form) => all.some((s) => formOf(s) === form);
    const keys = [];
    if (has('prose')) keys.push({ color: INK, text: 'a speech in prose', forms: ['prose'] });
    if (has('verse')) keys.push({ color: INK, text: 'a speech in verse', forms: ['verse'] });
    if (has('')) keys.push({ color: INK, text: 'a speech not counted as either', forms: [''] });
    // the speeches of the passage stand in the key as they are marked, in the order of the scene
    if (here.size) keys.push({ color: RED, text: `the ${WORDS[here.size] || ''}speech${here.size === 1 ? '' : 'es'} of this passage`, forms: [...new Set(all.filter((s) => here.has(s.speech)).map(formOf))] });
    // the samples are cut to the size of the marks, and an entry for marks of two forms shows one of each
    const markOf = (form) => (form === 'prose' ? 'open' : form === '' ? 'dot' : 'bar');
    const cut = (m, form) => {
      const bar = form !== '';
      m.style.width = `${bar ? Math.max(4, Math.min(6, bw)) : 5}px`;
      m.style.height = `${bar ? 14 : 5}px`;
      if (form === 'prose') m.style.borderWidth = '1px';
      return m;
    };
    const samples = d.keys(keys.map((key) => ({ mark: markOf(key.forms[0]), color: key.color, text: key.text }))).querySelectorAll('.dg-m');
    if (samples.length === keys.length) keys.forEach((key, i) => {
      let last = cut(samples[i], key.forms[0]);
      for (const form of key.forms.slice(1)) {
        last.style.marginRight = '-3px';   // the samples of one entry stand close together
        const m = cut(el('i', { class: `dg-m dg-m-${markOf(form)}`, style: `--c:${key.color}` }), form);
        last.after(m);
        last = m;
      }
    });
  },
};

export default { lenses: { 'noises:shape': scene } };
