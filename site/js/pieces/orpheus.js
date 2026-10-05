// Orpheus and Eurydice: the two drawings of its own.
//
//   aria / Rondo:    the aria bar by bar, left to right and to scale. On one
//                    line stand the two opening lines, a red block each time
//                    the score has them; under the line, each in a row of its
//                    own, what comes between: solid, then in outline from the
//                    bar where the slower tempo is marked, with two strokes
//                    where it ends on a pause. At the foot, the bars where the
//                    orchestra plays alone. Where the facts give the groups of
//                    lines as the libretto prints them, those stand under
//                    the score on the same scale: a stroke to each printed
//                    line, under the bars that set it, so that a return the
//                    libretto does not print has nothing under it. The key
//                    gives the counts the reading has for the opening lines.
//   song / Strophes: the three strophes side by side, a stroke to each line,
//                    as long as its count of syllables. The verb that begins
//                    each and the word that ends each are set on their lines;
//                    under each strophe stands what answers in it, in red, and
//                    the recitative that follows. Then every place where the
//                    libretto has the verb, in order.
//
// Both are drawn from the reading's own `facts` (remake/works/orpheus/
// reading.json) each time the page runs: no count, bar number, name or word
// of the libretto is typed here. The labels are the facts' own values and the
// names of their keys.

import { mk, RED, INK, QUIET } from '../kit/draw.js';
import { sheet, lin } from '../kit/diagram.js';

const str = (v) => (v === null || v === undefined ? '' : String(v).trim());
const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
// A count keeps with its name and a run of bars keeps whole, so that no line of a key or of the line that speaks ends
// on a bare figure. A long one may still turn, after its first word.
const hold = (words) => (String(words).length <= 26 ? String(words).replace(/ /g, ' ') : String(words).replace(' ', ' '));
// "5 to 7" is lines 5, 6 and 7; "1 and 2" is lines 1 and 2
const linesOf = (words) => {
  const out = [];
  String(words).split(/,|\band\b/).forEach((part) => {
    const m = /(\d+)\s*to\s*(\d+)/.exec(part);
    if (m) { for (let n = +m[1]; n <= +m[2]; n++) out.push(n); } else { const one = /\d+/.exec(part); if (one) out.push(+one[0]); }
  });
  return out;
};

// how wide a line of words will be when it is set in class `cls`; the line it is measured on is taken away at the end
function ruler(d) {
  const probe = d.text(0, 0, '', {});
  probe.style.visibility = 'hidden';
  const wd = (words, cls = 'dg-it') => { probe.setAttribute('class', cls); probe.textContent = String(words); return probe.getComputedTextLength(); };
  wd.done = () => probe.remove();
  return wd;
}
// the drawing is made as tall as what stands in it
const tall = (d, h) => { const H = Math.ceil(h); d.svg.setAttribute('height', H); d.svg.setAttribute('viewBox', `0 0 ${d.w} ${H}`); };

// ----- Rondo: what the facts say of the score -----
function score(f) {
  const list = f && Array.isArray(f.sections) ? f.sections : [];
  if (!list.length) throw new Error('facts: no sections');
  let before = '';
  const secs = list.map((s, i) => {
    if (!s || !isNum(s.bars) || !isNum(s.to)) throw new Error('facts: a section without its bars');
    const from = s.to - s.bars + 1;
    const tempo = str(s.tempo) || (i ? '' : str(f['first tempo']));
    // a tempo is marked where it changes: at the first bar, and where a section's differs from the one before
    const marked = tempo && tempo !== before ? tempo : '';
    if (tempo) before = tempo;
    // "Adagio from bar 24": the word, and the bar it holds from, where that bar is inside the section
    const m = /(\p{L}+) from bar (\d+)/u.exec(tempo);
    const slow = m && +m[2] >= from && +m[2] <= s.to ? { word: m[1], bar: +m[2] } : null;
    const name = str(s.name); const lines = str(s.lines);
    return { name, lines, nums: linesOf(lines), label: lines ? `lines ${lines}: ${name}` : name, from, to: s.to, bars: s.bars, returns: s.returns === true, tempo, marked, ends: str(s.ends), flats: str(s.flats), slow };
  });
  // a row to each thing that is sung: what returns first, then the rest in their order; the bars with no lines last
  const rows = [];
  const rowOf = (s) => {
    const kind = s.returns ? 0 : s.lines ? 1 : 2;
    let r = rows.find((q) => q.kind === kind && (kind === 0 || q.name === s.name));
    if (!r) { r = { kind, name: s.name, label: s.label, items: [] }; rows.push(r); }
    r.items.push(s);
  };
  secs.forEach(rowOf);
  rows.sort((a, b) => a.kind - b.kind);
  return { secs, rows, first: Math.min(...secs.map((s) => s.from)), last: Math.max(...secs.map((s) => s.to)) };
}

// what the line under the drawing says of one section
const told = (s) => [`${hold(`Bars ${s.from} to ${s.to}`)} ${hold(`(${s.bars} bars),`)} ${s.label}`, [cap(s.tempo), s.ends ? `ends ${s.ends}` : ''].filter(Boolean).join('; '), s.flats].filter(Boolean).join('. ').concat('.');

const rondo = {
  name: 'Rondo',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const k = score(f);
    const d = sheet(ctx, lens, run, 300);
    const wd = ruler(d);
    const W = d.w;
    const x = lin(k.first - 1, k.last, 0, W);
    const left = (s) => x(s.from - 1); const right = (s) => x(s.to);
    const BH = 12;                                                    // how tall a block is
    const keep = (at, width) => Math.max(0, Math.min(at, W - width)); // a label keeps inside the drawing
    const when = (s) => 150 + k.secs.indexOf(s) * 190;
    // The groups of lines as the libretto prints them, in order, where the facts give them. Each printed line is set by
    // the next section of the score that has it, and a section with lines that this order leaves over is the score's own.
    const PRINT = 'the libretto prints';
    const groups = (Array.isArray(f[PRINT]) ? f[PRINT] : []).map((v) => ({ words: str(v), nums: linesOf(str(v)), sets: [] }));
    let reached = 0; let had = new Set();
    groups.forEach((g) => g.nums.forEach((n) => {
      const i = k.secs.findIndex((s, j) => j >= reached && s.nums.includes(n) && !(j === reached && had.has(n)));
      if (i < 0) return;
      if (i !== reached) { reached = i; had = new Set(); }
      had.add(n);
      let e = g.sets.find((q) => q.s === k.secs[i]);
      if (!e) { e = { s: k.secs[i], nums: [] }; g.sets.push(e); }
      e.nums.push(n);
    }));
    const printed = groups.filter((g) => g.sets.length);
    const inPrint = new Set(printed.flatMap((g) => g.sets.map((e) => e.s)));
    // A section answers the pointer over the whole of `box` (left, top, right, bottom): its mark and its words.
    // The boxes are laid last, so that the strokes of the lines the libretto prints for it stay dark with it.
    const marksOf = new Map(); const boxes = [];
    const hot = (s, box, nodes) => { marksOf.set(s, nodes.filter(Boolean)); boxes.push([s, box]); };

    // ----- the head: how long it is, and its key -----
    let y = 0;
    const head = [isNum(f.bars) ? `${f.bars} bars` : '', str(f.mode)].filter(Boolean).join(' · ');
    if (head) { d.text(0, 11, head, { cls: 'dg-n' }); y = 30; }

    // ----- the line: every bar from the first to the last, and on it what returns -----
    const back = k.rows.find((r) => r.kind === 0);
    const name = back ? d.text(keep(left(back.items[0]), wd(back.label)), y + 11, back.label, { fill: RED, at: 150 }) : null;
    if (back) y += 17;
    // over the line, as a score has them, the tempo marks of what stands on it: the first tempo, and each return to it
    const onLine = k.secs.filter((s) => (s.returns || !s.lines) && s.marked);
    if (onLine.length) y += 15;
    const top = y + 6; const base = top + BH;
    const tempi = new Map();
    let reach = -9;
    onLine.forEach((s) => {
      const w = wd(s.marked); const a = keep(Math.max(left(s), reach + 8), w);
      if (reach > 0 && a < reach + 8) return;          // no room left on the row: the line that speaks and the table still give it
      tempi.set(s, d.text(a, top - 7, s.marked, { at: when(s) }));
      reach = a + w;
    });
    // a section with no mark of its own goes on at the tempo last marked on the line, and that mark stays dark with it
    const holds = (s) => {
      if (!s.tempo) return null;
      for (let j = k.secs.indexOf(s); j >= 0; j--) { const q = k.secs[j]; if (q.tempo !== s.tempo) return null; if (tempi.has(q)) return tempi.get(q); }
      return null;
    };
    d.rule(0, base + 0.5, W, base + 0.5, { stroke: INK, at: 0 });
    // a tick where each section begins and one at the end, with the number of the bar
    const figs = k.secs.map((s) => ({ at: left(s), n: s.from })).concat([{ at: W, n: k.last, end: true }])
      .map((m, i) => { const w = wd(m.n, 'dg-n'); return { ...m, w, a: i === 0 ? 0 : m.end ? W - w : m.at - w / 2 }; });
    let edge = -9;
    figs.forEach((g) => {
      const tx = Math.min(Math.max(g.at, 0.5), W - 0.5);
      d.rule(tx, base, tx, base + 5, { stroke: INK });
      if (g.a < edge + 4 || (!g.end && g.a + g.w > figs[figs.length - 1].a - 4)) return;
      d.text(g.a, base + 18, g.n, { cls: 'dg-n' });
      edge = g.a + g.w;
    });
    if (back) back.items.forEach((s) => {
      const node = d.bar(left(s), top, right(s) - left(s), BH, { fill: RED, at: when(s) });
      hot(s, [left(s), top - (onLine.length ? 18 : 3), right(s), base + 5], [node, holds(s), name]);
    });
    y = base + 18 + 12;

    // ----- under the line, a row to each thing that comes between -----
    k.rows.filter((r) => r.kind === 1).forEach((r) => {
      const s0 = r.items[0];
      const tw = wd(r.label); const tx = keep(left(s0), tw);
      const title = d.text(tx, y + 11, r.label, { at: when(s0) });
      const bt = y + 18;
      let under = 0;
      r.items.forEach((s) => {
        const a = left(s); const z = right(s); const cut = s.slow ? x(s.slow.bar - 1) : z;
        const nodes = [title];
        const span = s === s0 ? [Math.min(a, tx), Math.max(z + 8, tx + tw)] : [a, z + 8];   // how far its marks and words reach
        if (cut > a) nodes.push(d.bar(a, bt, cut - a, BH, { fill: INK, at: when(s) }));
        if (cut < z) nodes.push(d.bar(cut + 0.6, bt + 0.6, z - cut - 1.2, BH - 1.2, { fill: 'none', stroke: INK, width: 1.2, at: when(s) + 150 }));
        if (/pause/i.test(s.ends)) nodes.push(d.path(`M${z + 3.5} ${bt - 2.5}V${bt + BH + 2.5}M${z + 6.5} ${bt - 2.5}V${bt + BH + 2.5}`, { stroke: INK, width: 1, at: when(s) + 300 }));
        // under it: the tempo it is marked with, and how it ends; on one line where there is room
        const parts = [s.marked, s.ends ? `ends ${s.ends}` : ''].filter(Boolean);
        const lines = parts.length > 1 && wd(parts.join('; ')) > W ? parts.map((p, i) => (i < parts.length - 1 ? `${p};` : p)) : [parts.join('; ')].filter(Boolean);
        lines.forEach((words, i) => {
          const w = wd(words); const at = keep(a, w);
          nodes.push(d.text(at, bt + BH + 15 + i * 15, words, { at: when(s) + 150 }));
          span[0] = Math.min(span[0], at); span[1] = Math.max(span[1], at + w);
        });
        under = Math.max(under, lines.length);
        hot(s, [span[0], s === s0 ? y : bt - 3, Math.min(W, span[1]), bt + BH + lines.length * 15 + 5], nodes);
      });
      y = bt + BH + under * 15 + 14;
    });

    // ----- at the foot, the bars where no line is sung -----
    k.rows.filter((r) => r.kind === 2).forEach((r) => {
      const ly = y + 8;
      const w = wd(r.label);
      // its name stands beside each stroke: after it where the row is bare there, before it where it is not
      let reach = -12;
      const set = r.items.map((s, i) => {
        const next = r.items[i + 1] ? left(r.items[i + 1]) : W;
        const after = right(s) + 7; const before = left(s) - 7 - w;
        const a = after + w <= next - 12 && after >= reach + 12 ? after : before >= reach + 12 ? before : null;
        if (a !== null) reach = Math.max(reach, a + w, right(s));
        return a;
      });
      const low = set.every((a) => a === null);          // with no room beside any stroke, once under the first
      r.items.forEach((s, i) => {
        const a = low && !i ? keep(left(s), w) : set[i];
        const node = d.rule(left(s), ly, right(s), ly, { stroke: INK, width: 2.4, at: when(s) });
        const lab = a === null ? null : d.text(a, low ? ly + 19 : ly + 4, r.label, { at: when(s) });
        hot(s, [Math.min(left(s), a === null ? W : a), ly - 9, Math.max(right(s), a === null ? 0 : a + w), ly + (low && !i ? 24 : 9)], [node, lab, holds(s)]);
      });
      y = ly + (low ? 28 : 14);
    });

    // ----- the same lines as the libretto prints them, a stroke to each line (drawn where the facts give that order) -----
    if (printed.length) {
      const T = 1400;
      y += 10;
      d.rule(0, y + 0.5, W, y + 0.5, { at: T });
      d.text(0, y + 20, PRINT, { cls: 'dg-lab', at: T });
      const st = y + 34;
      const most = Math.max(...printed.flatMap((g) => g.sets.map((e) => e.nums.length)));
      const by = st + (most - 1) * 5 + 8;                     // where the stroke that holds a group together runs
      const span = (g) => [left(g.sets[0].s), right(g.sets[g.sets.length - 1].s)];
      // under each group, its lines by number: with the word where every label has room, on the first alone where not
      const place = (full) => {
        let reach = -9;
        return printed.map((g, i) => { const words = full || !i ? `lines ${g.words}` : g.words; const w = wd(words, 'dg-n'); const a = Math.max(span(g)[0], reach + 9); reach = a + w; return { words, w, a }; });
      };
      let labs = place(true);
      if (labs.some((q, i) => q.a + q.w > W || q.a > span(printed[i])[1] - 12)) labs = place(false);
      printed.forEach((g, i) => {
        const at = T + 100 + i * 110; const [x0, x1] = span(g); const lab = labs[i];
        const nodes = [];
        // under each section of the score, a stroke to each line the libretto prints for it
        g.sets.forEach((e) => {
          const mine = e.nums.map((n, j) => d.rule(left(e.s) + 1.5, st + j * 5, right(e.s) - 1.5, st + j * 5, { stroke: e.s.returns ? RED : INK, width: 1.6, at }));
          nodes.push(...mine);
          if (marksOf.has(e.s)) marksOf.get(e.s).push(...mine);
        });
        nodes.push(d.path(`M${x0 + 2} ${by - 3}V${by}H${x1 - 2}V${by - 3}`, { stroke: QUIET, width: 1, at }));
        nodes.push(d.text(keep(lab.a, lab.w), by + 15, lab.words, { cls: 'dg-n', at }));
        // the bars that set the group: "7 to 29", or "7 to 17 and 30 to 39" where they do not follow each other
        const runs = [];
        g.sets.forEach((e) => { const r = runs[runs.length - 1]; if (r && r[1] + 1 === e.s.from) r[1] = e.s.to; else runs.push([e.s.from, e.s.to]); });
        // pointed at, a printed group keeps dark the sections of the score that set it
        const hit = d.bar(x0, st - 6, Math.max(x1, keep(lab.a, lab.w) + lab.w) - x0, by + 20 - (st - 6), { fill: 'transparent' });
        d.hot(hit, `Lines ${g.words}, as the libretto prints them: in the score, ${runs.map((r, j) => hold(`${j ? '' : 'bars '}${r[0]} to ${r[1]}`)).join(' and ')}.`, [...new Set(nodes.concat(g.sets.flatMap((e) => marksOf.get(e.s) || [])))]);
      });
      y = by + 15 + 8;
    }
    boxes.forEach(([s, box]) => {
      const own = printed.length && s.nums.length && !inPrint.has(s) ? ' The libretto does not print the lines here.' : '';
      d.hot(d.bar(box[0], box[1], box[2] - box[0], box[3] - box[1], { fill: 'transparent' }), told(s) + own, marksOf.get(s));
    });
    wd.done();
    tall(d, y);

    // ----- the key: the counts the reading gives for what returns; the outline -----
    const own = f['the opening lines'] && typeof f['the opening lines'] === 'object' ? Object.entries(f['the opening lines']).filter(([, v]) => isNum(v)) : [];
    const counts = own.map(([name, v]) => hold(name === 'bars' && isNum(f.bars) ? `${v} of the ${f.bars} bars` : `${v} ${name}`)).join(', ');
    const words = [...new Set(k.secs.filter((s) => s.slow).map((s) => s.slow.word))];
    d.keys([
      back ? { mark: 'bar', color: RED, text: counts ? `${back.name}: ${counts}` : back.name } : null,
      words.length ? { mark: 'open', color: INK, text: words.join(', ') } : null,
    ].filter(Boolean));
    d.figures(k.secs.map((s) => ({ '': s.name, lines: s.lines, 'from bar': s.from, 'to bar': s.to, bars: s.bars, ...(W >= 480 ? { tempo: s.tempo } : {}) })));
  },
};

// ----- Strophes: what the facts say of the song -----
// The list of places where the libretto has the verb is known by its shape, a list of { place, who }, and not by its
// name: its name is set over the list as its heading, so if the reading gives it a clearer name the heading follows.
const placesKey = (f) => Object.keys(f || {}).find((key) => Array.isArray(f[key]) && f[key].length && f[key].every((p) => p && typeof p === 'object' && typeof p.place === 'string'));
function song(f) {
  const list = f && Array.isArray(f.strophes) ? f.strophes.filter((s) => s && typeof s === 'object') : [];
  if (!list.length) throw new Error('facts: no strophes');
  const every = f['every strophe'] && typeof f['every strophe'] === 'object' ? f['every strophe'] : {};
  // the count of each line: the figures at the head of the entry, one to a line
  const figs = (str(every.syllables).match(/\d+/g) || []).map(Number);
  const n = isNum(every.lines) ? every.lines : figs.length;
  if (!n || figs.length < n) throw new Error('facts: no count of syllables for each line');
  const between = Array.isArray(f.between) ? f.between : [];
  const strophes = list.map((s) => ({
    n: s.n, verb: str(s.verb), english: str(s['in English']), setting: str(s.setting), answers: str(s.answers), says: str(s.says),
    last: str(s['last word']), rhymes: str(s.rhymes), shown: s.shown === true,
    then: str((between.find((b) => b && b.after === s.n) || {}).recitative),
  }));
  const heading = placesKey(f) || '';
  const places = (heading ? f[heading] : []).map((p) => ({ place: str(p.place), who: str(p.who) })).filter((p) => p.place || p.who);
  return { strophes, counts: figs.slice(0, n), every, places, heading };
}
// what the line under the drawing says of one strophe
const sung = (s) => [`Strophe ${s.n}: *${s.verb}*${s.english ? `, ${s.english}` : ''}`, s.setting ? `Setting: ${s.setting}` : '', s.says ? cap(s.says) : '', s.rhymes ? `Rhymes: ${s.rhymes}` : ''].filter(Boolean).join('. ').concat('.');

const strophes = {
  name: 'Strophes',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const k = song(f);
    const d = sheet(ctx, lens, run, 300);
    const wd = ruler(d);
    const W = d.w;
    const N = k.strophes.length;
    const wide = W >= 520;
    const gap = wide ? 28 : 12;
    const cw = (W - gap * (N - 1)) / N;                // a column to each strophe
    const roomy = cw >= 150;
    const face = roomy ? 'dg-name' : 'dg-it';          // the words of the libretto, in the display face where there is room
    const P = roomy ? 17 : 15;                         // from line to line
    const drop = roomy ? 4 : 3;                        // a stroke runs at the middle of the small letters
    const u = Math.min(roomy ? 24 : 18, (cw - (roomy ? 6 : 0)) / Math.max(...k.counts));   // the length of one syllable
    const y1 = 28 + (roomy ? 24 : 19);
    const last = k.counts.length - 1;
    const yA = y1 + last * P + (roomy ? 25 : 21);
    // what answers stands beside its label; where one of them has no room there, all stand under their labels,
    // and where one is longer than its column, each takes as many lines as it needs
    const one = k.strophes.every((s) => wd(`answers: ${s.answers}`) <= cw);
    const fit = one || k.strophes.every((s) => wd(s.answers) <= cw);
    let foot = one ? yA : yA + 15;
    const notes = [];
    const cols = [];

    k.strophes.forEach((s, i) => {
      const x = i * (cw + gap); const at = 150 + i * 400;
      const nodes = [];
      // its number, and whether it is the passage of this plate; then the verb in English, over the verb
      const head = d.text(x, 11, s.n, { cls: 'dg-n', at });
      if (s.shown) { const more = mk('tspan', { class: 'dg-it' }, ', shown here'); more.style.fill = QUIET; head.append(more); }
      nodes.push(head, d.text(x, 28, s.english, { at }));
      // a stroke to each line, as long as its count; the verb opens the first, the last word closes the last
      k.counts.forEach((c, j) => {
        const yy = y1 + j * P;
        let a = x; let z = x + c * u;
        if (j === 0 && s.verb) { nodes.push(d.text(x, yy + drop, s.verb, { cls: face, fill: INK, at })); a += wd(s.verb, face) + 6; }
        if (j === last && s.last) { nodes.push(d.text(z, yy + drop, s.last, { cls: face, fill: INK, anchor: 'end', at: at + 300 })); z -= wd(s.last, face) + 6; }
        if (z - a >= 5) nodes.push(d.rule(a, yy, z, yy, { stroke: INK, width: 1.4, at: at + j * 50 }));
      });
      // under it, what answers
      nodes.push(d.text(x, yA, 'answers:', { at: at + 350 }));
      if (fit) nodes.push(d.text(one ? x + wd('answers:') + 4 : x, one ? yA : yA + 15, s.answers, { fill: RED, at: at + 350 }));
      else { const p = d.note(x, yA + 3, cw, s.answers, { cls: 'is-red', at: at + 350 }); foot = Math.max(foot, yA + (p.offsetHeight || 34)); }
      cols.push([x, s, nodes]);
      if (s.then) notes.push({ s, x, at: at + 400 });
    });
    cols.forEach(([x, s, nodes]) => d.hot(d.bar(x, 0, cw, foot + 5, { fill: 'transparent' }), sung(s), nodes));

    // ----- the recitative after each: under its strophe where there is room, in a list where there is not -----
    let y = foot + 16;
    if (wide) {
      const set = notes.map((q) => d.note(q.x, y, cw, `recitative: ${q.s.then}`, { at: q.at }));
      y += Math.max(0, ...set.map((p) => p.offsetHeight || 51));
    } else {
      notes.forEach((q) => { const p = d.note(0, y, W, `after ${q.s.n}, recitative: ${q.s.then}`, { at: q.at }); y += (p.offsetHeight || 34) + 5; });
    }

    // ----- every place where the libretto has the verb, in order -----
    if (k.places.length) {
      const T = 1500;
      y += 14;
      d.rule(0, y + 0.5, W, y + 0.5, { at: T });
      // the heading is the list's own name; one too long for the plate takes two lines, parted at the space nearest its middle
      const heads = [k.heading];
      if (wd(k.heading, 'dg-lab') > W) {
        const at = [...k.heading.matchAll(/ /g)].map((m) => m.index).sort((a, b) => Math.abs(a - k.heading.length / 2) - Math.abs(b - k.heading.length / 2))[0];
        if (at) heads.splice(0, 1, k.heading.slice(0, at), k.heading.slice(at + 1));
      }
      heads.forEach((words, i) => d.text(0, y + 20 + i * 15, words, { cls: 'dg-lab', at: T }));
      y += (heads.length - 1) * 15;
      const pw = Math.max(...k.places.map((p) => wd(p.place)));
      const row = 22 + pw + 18 + Math.max(...k.places.map((p) => wd(p.who, 'dg-n'))) <= W;   // place and what is said on one line
      const step = row ? 19 : 36;
      const top = y + 42;
      d.rule(5.5, top - 4, 5.5, top - 4 + (k.places.length - 1) * step, { stroke: INK, at: T + 100 });
      k.places.forEach((p, i) => {
        const yy = top + i * step; const at = T + 150 + i * 110;
        d.dot(5.5, yy - 4, 3, { fill: INK, at });
        d.text(22, yy, p.place, { at });
        d.text(row ? 22 + pw + 18 : 22, row ? yy : yy + 15, p.who, { cls: 'dg-n', at });
      });
      y = top + (k.places.length - 1) * step + (row ? 8 : 23);
    }
    wd.done();
    tall(d, y);

    // the key gives the counts the strokes are drawn to and, where the facts say it, how those counts are made
    const HOW = 'how the sevens count';
    const how = str(k.every[HOW]);
    d.keys([{ mark: 'line', color: INK, text: `a line, drawn as long as its count of syllables${str(k.every.syllables) ? `: ${hold(str(k.every.syllables))}` : ''}${how ? `; ${HOW.replace(/^how /, '')} ${how}` : ''}` }]);
    // what the reading says of every strophe, folded away under the drawing
    d.figures(Object.entries(k.every).filter(([, v]) => str(v)).map(([name, v]) => ({ 'every strophe': name, ' ': str(v) })));
  },
};

export default { lenses: { 'aria:shape': rondo, 'song:shape': strophes } };
