// Assemble the pieces: remake/works/<id>/reading.json + the hosted texts
// -> site/data/pieces/<id>.json and site/data/pieces/index.json
//
//   node build/pieces.mjs            every piece that has a reading
//   node build/pieces.mjs tempest    one piece
//
// A reading points at words by row and number. Here the words are cut
// from the hosted text and set into the piece, so that nobody types them.
import fs from 'node:fs';
import path from 'node:path';
import { tokens, syllables } from '../site/js/kit/syllables.js';
import { lensForSite } from './lib/printed.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const TEXTS = path.join(ROOT, 'site/data/texts');
const WORKS = path.join(ROOT, 'remake/works');
const OUT = path.join(ROOT, 'site/data/pieces');
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const problems = [];
const fail = (m) => problems.push(m);

const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'remake/pieces.json'), 'utf8'));
const records = (await import('../content/records.mjs')).default;

const parts = new Map();
function loadPart(src) {
  if (!parts.has(src)) {
    const [text, part] = src.split('/');
    const f = path.join(TEXTS, text, `${part}.json`);
    parts.set(src, fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null);
  }
  return parts.get(src);
}
const indexes = new Map();
function loadIndex(text) {
  if (!indexes.has(text)) {
    const f = path.join(TEXTS, text, 'index.json');
    indexes.set(text, fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null);
  }
  return indexes.get(text);
}

// The rows a plate shows, with the speakers and directions that stand among them.
function rowsOf(src, specs, what, stage) {
  const part = loadPart(src);
  if (!part) { fail(`${what}: no hosted text ${src}`); return []; }
  const out = [];
  out.gone = []; // rows that were nothing but a name or a direction, and so are not rows of the passage
  const staged = new Set();
  // An original cut from its source in several ranges (build/tools/original.mjs) may leave lines of the work
  // out between two of them. The text's index names the blocks before which that is so ("left"), and a sign
  // of omission stands there, as it does between two rows of a text that is hosted whole.
  const [textId, partId] = src.split('/');
  const left = new Set(((((loadIndex(textId) || {}).parts || []).find((p) => p.id === partId)) || {}).left || []);
  let lastBlock = -1;
  let lastRow = -1; // the last row shown of that block
  let gap = false; // text was left out since the last row shown
  const isText = (x) => ['v', 'p', 'q'].includes(x.k);
  const rowsIn = (x) => (x.k === 'v' ? x.lines.length : 1);
  // Some librettos are hosted with each speaker's name in capitals at the head of the speech. The name is the
  // edition's and no part of the speech: it is set over the row as its speaker, and the row begins after it.
  // (The words keep their numbers, so a mark still lands where the reading put it.)
  const capsWord = (t) => { const l = String(t || '').replace(/[^\p{L}]/gu, ''); return l.length > 1 && l === l.toUpperCase() && l !== l.toLowerCase(); };
  const nameAt = (toks) => { for (let k = 1; k <= 3 && k < toks.length; k++) { if (!capsWord(toks[k - 1])) return 0; if (/[.:]$/.test(toks[k - 1])) return k; } return 0; };
  const headOf = (x) => tokens((x.k === 'v' ? x.lines[0] : x.text) || '');
  const named = !part.blocks.some((x) => x.k === 's') && part.blocks.filter((x) => isText(x) && nameAt(headOf(x)) > 0).length >= 3;
  // A libretto may print over a number its kind and its first words ("Air." and then the opening words again).
  // That is the edition's heading and no stage direction, and it says nothing that the line under it does not:
  // it is left out. (Known by this alone: one word and a full stop, then the first words of the next text.)
  const plainWords = (t) => String(t || '').toLowerCase().replace(/[^\p{L}\p{N} ]+/gu, ' ').split(/\s+/).filter(Boolean);
  const numberHead = (x, b) => {
    const h = String(x.text || '').match(/^\p{L}+\.\s+(.+)$/u);
    const next = part.blocks[b];
    if (!h || !next) return false;
    const rest = plainWords(h[1]); const first = plainWords(next.k === 'v' ? next.lines[0] : next.text);
    return rest.length >= 2 && rest.every((w, i) => first[i] === w);
  };
  for (const spec of specs || []) {
    const m = String(spec).match(/^(\d+)\.(\d+)(?:-(\d+)\.(\d+))?(?:\[(\d+)-(\d+)\])?$/);
    if (!m) { fail(`${what}: cannot read the row "${spec}"`); continue; }
    const b1 = +m[1]; const r1 = +m[2];
    const b2 = m[3] === undefined ? b1 : +m[3]; const r2 = m[4] === undefined ? r1 : +m[4];
    // a row cut short already ends in points of omission, and one that begins late begins with them
    const cutHere = () => { if (m[5] !== undefined && +m[5] > 0) return true; for (let k = out.length - 1; k >= 0; k--) if (!out[k].aside) return !!out[k].cutEnd; return false; };
    for (let b = b1; b <= b2; b++) {
      const blk = part.blocks[b];
      if (!blk) { fail(`${what}: ${src} has no block ${b}`); break; }
      if (!['v', 'p', 'q'].includes(blk.k)) continue;
      // what stands between the last block shown and this one
      if (lastBlock !== b) {
        const from = lastBlock < 0 ? b - 1 : lastBlock + 1;
        if (lastBlock < 0) {
          // the speaker of the first speech, if a speaker's name stands just before it
          for (let k = b - 1; k >= Math.max(0, b - 3); k--) { const x = part.blocks[k]; if (x.k === 's') { out.push({ aside: 's', text: x.text, b: k }); break; } if (x.k !== 'd') break; }
        } else {
          // where text is left out between two rows shown, a sign of omission stands there, and of the
          // speakers and directions between them only those that follow the last of what is left out
          let start = from;
          if (lastRow < rowsIn(part.blocks[lastBlock]) - 1) gap = true;
          for (let k = from; k < b; k++) if (isText(part.blocks[k])) { gap = true; start = k + 1; }
          for (let k = from; k <= b; k++) if (left.has(k)) gap = true;
          if (b === b1 && r1 > 0) gap = true;
          if (gap && !cutHere()) out.push({ aside: 'gap', text: '' });
          // (a direction that stands before a block whose first rows are left out stands before lines that are
          // not shown, and is left out with them; the speaker's name still says who speaks the rows shown)
          const late = b === b1 && r1 > 0;
          for (let k = start; k < b; k++) { const x = part.blocks[k]; if (x.k === 's' || (x.k === 'd' && !late && !numberHead(x, b))) out.push({ aside: x.k, text: x.text, b: k }); }
        }
      } else if (b === b1 && r1 > lastRow + 1) { gap = true; if (!cutHere()) out.push({ aside: 'gap', text: '' }); }
      lastBlock = b;
      const rows = blk.k === 'v' ? blk.lines : [blk.text || ''];
      const from = b === b1 ? r1 : 0;
      const to = b === b2 ? r2 : rows.length - 1;
      for (let r = from; r <= to; r++) {
        if (rows[r] === undefined) { fail(`${what}: block ${b} of ${src} has no row ${r}`); break; }
        const toks = tokens(rows[r]);
        const row = { id: `${b}.${r}`, kind: blk.k, toks, first: 0, last: toks.length - 1 };
        if (m[5] !== undefined) { row.first = +m[5]; row.last = +m[6]; row.cutStart = row.first > 0; row.cutEnd = row.last < toks.length - 1; }
        // A reading may say which words of a row are a speaker's name or a stage direction, where the edition
        // prints them in the line: "stage": { "3.1": { "name": 1, "dir": [4, 6] } } (the first word is the name,
        // words 4 to 6 a direction). They are set as a name and a direction are set everywhere else, over the
        // line or after it, and the line keeps what is left; a row that was nothing else is no row of the
        // passage. "text" gives a name the edition prints higher up ("name": 0). (The words keep their numbers.)
        // With "inline": true the name and the directions stay where the edition prints them, in the line, and
        // the page sets them there as a name and a direction ("inline": "name" or "dir" keeps only those): a
        // direction may then stand in the middle of a line, a line shared out between speakers keeps their
        // names, and a row that is nothing else is still a row of the passage (a heading among the lines).
        const st = stage && stage[row.id];
        const after = [];
        let whole = false;
        if (st) {
          staged.add(row.id);
          const n = Math.max(0, Math.min(toks.length, +st.name || 0));
          const dirs = (Array.isArray(st.dir) ? (Array.isArray(st.dir[0]) ? st.dir : [st.dir]) : []).map((d) => [+d[0], +d[1]]).sort((x, y) => x[0] - y[0]);
          if (![undefined, false, true, 'name', 'dir'].includes(st.inline)) fail(`${what}: "stage" for row ${row.id}: "inline" is true, "name" or "dir"`);
          const inName = (st.inline === true || st.inline === 'name') && n > 0 && !st.text;
          const inDir = st.inline === true || st.inline === 'dir';
          const taken = new Array(toks.length).fill(false);
          const kept = new Array(toks.length).fill(false); // taken, and staying in the line
          for (let i = 0; i < n; i++) { taken[i] = true; kept[i] = inName; }
          for (const [a, z] of dirs) {
            if (!(a >= n && z >= a && z < toks.length)) { fail(`${what}: "stage" for row ${row.id}: cannot read the direction [${a}, ${z}] (the row has words 0 to ${toks.length - 1})`); continue; }
            for (let i = a; i <= z; i++) { taken[i] = true; kept[i] = inDir; }
          }
          const verse = [];
          for (let i = row.first; i <= row.last; i++) if (!taken[i]) verse.push(i);
          // (the words left to the line stand together, or are parted only by what stays in the line)
          let apart = false;
          if (verse.length) for (let i = verse[0]; i <= verse[verse.length - 1]; i++) if (taken[i] && !kept[i]) apart = true;
          if (apart) fail(`${what}: "stage" for row ${row.id}: the words left to the line do not stand together`);
          // what stays in the line, as far as the row is shown: [first word, last word, s (a name) or d (a direction)]
          const stay = (a, z, k) => { if (z >= row.first && a <= row.last) (row.stage = row.stage || []).push([Math.max(a, row.first), Math.min(z, row.last), k]); };
          const said = (a, z) => toks.slice(a, z + 1).join(' ');
          if (n || st.text) {
            // a name printed whole in capitals loses the point after it; a short form keeps its own
            const printed = said(0, n - 1);
            const caps = printed.replace(/[^\p{L}]/gu, '');
            const name = st.text ? String(st.text) : (caps.length > 1 && caps === caps.toUpperCase() ? printed.replace(/[.:]$/, '') : printed.replace(/:$/, ''));
            if (inName) stay(0, n - 1, 's'); else out.push({ aside: 's', text: name, b, from: n ? { row: row.id, a: 0, z: n - 1 } : undefined });
            row.speaker = name;
          }
          for (const [a, z] of dirs) {
            if (!(a >= n && z >= a && z < toks.length)) continue;
            if (inDir) { stay(a, z, 'd'); continue; }
            const d = { aside: 'd', text: said(a, z).replace(/^[([]/, '').replace(/[)\]]([.,;:]?)$/, '$1'), b, from: { row: row.id, a, z } };
            if (!verse.length || z < verse[0]) out.push(d); else after.push(d);
          }
          if (verse.length) {
            row.first = verse[0]; row.last = verse[verse.length - 1];
            row.cutStart = toks.some((_, i) => i < row.first && !taken[i]);
            row.cutEnd = toks.some((_, i) => i > row.last && !taken[i]);
          } else if (!(row.stage && row.stage.length)) { whole = true; out.gone.push(row.id); }
          if (row.stage) row.stage.sort((x, y) => x[0] - y[0]);
        }
        const nm = !st && named && r === 0 ? nameAt(toks) : 0;
        if (nm) {
          row.speaker = toks.slice(0, nm).join(' ').replace(/[.:]$/, '');
          row.name = nm;
          out.push({ aside: 's', text: row.speaker, b });
          if (row.first <= nm) { row.first = nm; row.cutStart = false; }
        }
        if (!whole) {
          if (gap) { row.gapBefore = true; gap = false; }
          out.push(row);
        }
        for (const d of after) out.push(d);
        lastRow = r;
      }
    }
  }
  if (stage) for (const id of Object.keys(stage)) if (!staged.has(id)) fail(`${what}: "stage" names row ${id}, which is not among the rows shown`);
  return out;
}

function buildPlate(plate, what) {
  // the working notes (each ground's source, where a fact was counted) stay in the reading
  const out = { id: plate.id, heading: plate.heading || '', label: plate.label || '', lenses: (plate.lenses || []).map(lensForSite) };
  if (plate.noText) { out.noText = true; out.noTextWhy = plate.noTextWhy || ''; out.rows = []; return out; }
  // every division of a word that a beat lens gives
  const divs = new Map();
  for (const lens of plate.lenses || []) {
    if (lens.kind !== 'beat') continue;
    for (const [rowId, s] of Object.entries(lens.scan || {})) for (const [w, d] of Object.entries(s.div || {})) divs.set(`${rowId}/${w}`, d.split('|'));
  }
  // a text's language decides how its words divide into syllables (Latin has its own rules)
  const langOf = (src) => { const [t, p] = src.split('/'); const idx = loadIndex(t); return (idx && idx.lang) || (idx && idx.parts && (idx.parts.find((x) => x.id === p) || {}).lang) || 'en'; };
  // A printer sets the first word of a chapter in capitals. That is the edition's doing, not the writer's:
  // where a part's first line begins so, the word is set here in ordinary case.
  const letters = (t) => String(t || '').replace(/[^\p{L}]/gu, '');
  const allCaps = (t) => letters(t).length > 1 && letters(t) === letters(t).toUpperCase() && letters(t) !== letters(t).toLowerCase();
  const plainCase = (t) => t.replace(/(\p{Lu})(\p{Lu}+)/u, (m, a, b) => a + b.toLowerCase());
  const finish = (rows, prefix, lang) => rows.map((r) => {
    if (r.aside) return r;
    const id = prefix + r.id;
    const opening = r.id === '0.0' && r.first === 0 && allCaps(r.toks[0]) && !allCaps(r.toks[1]) && !divs.has(`${id}/0`);
    const toks = opening ? [plainCase(r.toks[0]), ...r.toks.slice(1)] : r.toks;
    return {
      id, kind: r.kind, first: r.first, last: r.last, cutStart: r.cutStart || undefined, cutEnd: r.cutEnd || undefined, gapBefore: r.gapBefore || undefined,
      stage: r.stage && r.stage.length ? r.stage : undefined,
      words: toks.map((t, i) => ({ t, sy: divs.get(`${id}/${i}`) || syllables(t, lang) })),
    };
  });
  // (a row of the second passage is named p:<row> in "stage", as everywhere in a reading)
  const stageOf = (second) => {
    const o = {}; let any = false;
    for (const [k, v] of Object.entries((plate.stage && typeof plate.stage === 'object' && plate.stage) || {})) if (k.startsWith('p:') === second) { o[second ? k.slice(2) : k] = v; any = true; }
    return any ? o : null;
  };
  const rawMain = rowsOf(plate.text, plate.rows, what, stageOf(false));
  const rawPair = plate.pair ? rowsOf(plate.pair.text, plate.pair.rows, `${what} pair`, stageOf(true)) : [];
  if (plate.stage && !plate.pair && Object.keys(plate.stage).some((k) => k.startsWith('p:'))) fail(`${what}: "stage" names a row of a second passage, and the plate has none`);
  // A speaker's name taken off the head of a speech may have been given its English by a word tab ("the
  // Speaker" under the German). The English goes with the name over the row, the first time the name stands
  // in each passage, and the note leaves the tab, since its word is no longer in the line.
  const lifted = new Map();
  rawMain.forEach((r) => { if (r.name) lifted.set(r.id, r); });
  rawPair.forEach((r) => { if (r.name) lifted.set(`p:${r.id}`, r); });
  const english = new Map();
  if (lifted.size) {
    out.lenses.forEach((lens) => {
      if (!Array.isArray(lens.notes)) return;
      lens.notes = lens.notes.filter((n) => {
        const r = lifted.get(String(n.row));
        const last = Array.isArray(n.w) ? n.w[n.w.length - 1] : n.w;
        if (!r || !(last < r.name)) return true;
        if (n.gloss && !english.has(r.speaker)) english.set(r.speaker, n.gloss);
        return false;
      });
    });
  }
  // The same for a name or a direction that "stage" has taken out of its line: the English a word tab sets under
  // it goes after it, and the note leaves the tab. A note with words of its own cannot follow it there.
  const staged = [...rawMain.map((r) => [r, '']), ...rawPair.map((r) => [r, 'p:'])].filter(([r]) => r.aside && r.from);
  if (staged.length) {
    out.lenses.forEach((lens) => {
      if (!Array.isArray(lens.notes)) return;
      lens.notes = lens.notes.filter((n) => {
        const a = Array.isArray(n.w) ? n.w[0] : n.w; const z = Array.isArray(n.w) ? n.w[n.w.length - 1] : n.w;
        const hit = staged.find(([r, pre]) => String(n.row) === pre + r.from.row && a >= r.from.a && z <= r.from.z);
        if (!hit) return true;
        const r = hit[0];
        if (n.note) fail(`${what}: the tab "${lens.label || lens.kind}" has a note with words of its own on row ${n.row}, words ${a} to ${z}, which "stage" takes out of the line`);
        if (n.gloss) { if (r.aside === 's') { if (!english.has(r.text)) english.set(r.text, n.gloss); } else if (!r.gloss) r.gloss = n.gloss; }
        return false;
      });
    });
  }
  // no tab may mark a row that "stage" has taken out of the passage whole
  const gone = new Set([...(rawMain.gone || []), ...(rawPair.gone || []).map((id) => `p:${id}`)]);
  if (gone.size) {
    const marked = (lens) => [...Object.keys(lens.scan || {}), ...Object.keys(lens.ends || {}), ...(lens.parts || []).map((x) => x.row), ...(lens.notes || []).map((x) => x.row),
      ...(lens.spans || []).flatMap((x) => [x.from && x.from[0], x.to && x.to[0]]), ...(lens.ties || []).flatMap((x) => [x.a && x.a[0], x.b && x.b[0]]),
      ...(lens.points || []).map((x) => x.at && x.at[0]), ...(lens.threads || []).flatMap((t) => (t.at || []).map((x) => x[0]))].filter((x) => x !== undefined && x !== null).map(String);
    out.lenses.forEach((lens) => { for (const id of new Set(marked(lens))) if (gone.has(id)) fail(`${what}: the tab "${lens.label || lens.kind}" marks row ${id}, which "stage" takes out of the passage`); });
  }
  // A name or a direction that stays in the line is no word of the verse. A Word tab may gloss it where it
  // stands and a remark may point at it; no tab scans it, counts it, or sets any other mark on it.
  const keptIn = new Map();
  rawMain.forEach((r) => { if (!r.aside && r.stage) keptIn.set(r.id, r); });
  rawPair.forEach((r) => { if (!r.aside && r.stage) keptIn.set(`p:${r.id}`, r); });
  if (keptIn.size) {
    const hit = (id, a, z = a) => { const r = keptIn.get(String(id)); return !!r && r.stage.some((x) => Math.floor(a) <= x[1] && Math.floor(z) >= x[0]); };
    out.lenses.forEach((lens) => {
      const tab = `the tab "${lens.label || lens.kind}"`;
      const no = (id, a, z = a) => { if (hit(id, a, z)) fail(`${what}: ${tab} marks row ${id}, words ${a} to ${z}, where "stage" leaves a name or a direction in the line: only a note of a Word tab or a remark may stand on it`); };
      for (const id of Object.keys(lens.scan || {})) { const r = keptIn.get(id); if (r && hit(id, r.first, r.last)) fail(`${what}: ${tab} scans row ${id}, and "stage" leaves a name or a direction in the line among the words it scans: a scan cannot pass over it`); }
      for (const id of Object.keys(lens.ends || {})) { const r = keptIn.get(id); if (r && hit(id, r.last)) fail(`${what}: ${tab} gives row ${id} a rhyme, and the row ends in a name or a direction`); }
      (lens.parts || []).forEach((x) => { const w = Array.isArray(x.w) ? x.w : [x.w, x.w]; no(x.row, w[0], w[w.length - 1]); });
      (lens.spans || []).forEach((x) => { if (x.from) no(x.from[0], x.from[1]); if (x.to) no(x.to[0], x.to[1]); });
      (lens.ties || []).forEach((x) => ['a', 'b'].forEach((k) => { if (x[k]) no(x[k][0], x[k][1], x[k][2] === undefined ? x[k][1] : x[k][2]); }));
      (lens.threads || []).forEach((t) => (t.at || []).forEach((x) => no(x[0], x[1])));
    });
  }
  // a reading may also say it outright, for a name that stands over a speech: "speakers": { "1 AVOC": "the first judge" }
  if (plate.speakers && typeof plate.speakers === 'object') {
    for (const [name, gloss] of Object.entries(plate.speakers)) {
      if (![...rawMain, ...rawPair].some((r) => r.aside === 's' && r.text === name)) fail(`${what}: "speakers" names ${name}, and no speaker shown on this plate is printed so`);
      else if (gloss && !english.has(name)) english.set(name, String(gloss));
    }
  }
  const glossed = (rows) => { const seen = new Set(); rows.forEach((r) => { if (r.aside === 's' && english.has(r.text) && !seen.has(r.text)) { r.gloss = english.get(r.text); seen.add(r.text); } }); return rows; };
  out.rows = finish(glossed(rawMain), '', langOf(plate.text));
  out.src = plate.text;
  // speakers are shown only where more than one speaks
  const speakers = new Set(out.rows.filter((r) => r.aside === 's').map((r) => r.text));
  if (speakers.size < 2) out.rows = out.rows.filter((r) => r.aside !== 's');
  out.lang = langOf(plate.text);
  // two passages of equal standing are set as two blocks, each under its name, not line under line
  if (plate.pair && plate.beside) out.beside = true;
  // where a line of verse turns on a narrow plate, if its reading says: { rowId: the word it turns after }
  if (plate.turn && typeof plate.turn === 'object') out.turn = plate.turn;
  let lineUnder = false;
  if (plate.pair) {
    const plang = langOf(plate.pair.text);
    const prows = finish(glossed(rawPair), 'p:', plang);
    // who speaks in the second passage, where more than one does
    const pwho = new Set(prows.filter((r) => r.aside === 's').map((r) => r.text));
    let who = null; let lastWho = '';
    // A stage direction that stands just before a row of the second passage goes with that row, as in the first
    // passage. One that stands before the name of the row's speaker is printed before that name, where the
    // edition has it (`dirPre`): under the name it would read as the new speaker's.
    let dirs = []; let pre = [];
    for (const r of prows) {
      if (r.aside === 's') { who = r; pre = pre.concat(dirs); dirs = []; }
      else if (r.aside === 'd') dirs.push(r.text);
      else if (!r.aside) {
        const named = !!who && pwho.size > 1 && who.text !== lastWho;
        if (named) { r.who = who.text; if (who.gloss) r.whoGloss = who.gloss; }
        if (who) lastWho = who.text;
        who = null;
        if (named && pre.length) r.dirPre = pre.join(' ');
        const rest = named ? dirs : pre.concat(dirs);
        if (rest.length) r.dir = rest.join(' ');
        dirs = []; pre = [];
      }
    }
    out.pair = { label: plate.pair.label || '', src: plate.pair.text, lang: plang, rows: prows.filter((r) => !r.aside) };
    // A second passage with as many rows as the first is set line under line, unless the reading says that its
    // rows do not answer the first passage's one for one ("under": false).
    if (plate.under === false) out.under = false;
    // Set line under line, the second passage shows neither who speaks in it nor its stage directions (the page
    // sets those only beside a passage). They go over the lines here, where the passage names no speakers of
    // its own. A sign of omission is not carried over: it stands only where the first passage leaves lines out.
    const mains = out.rows.filter((r) => !r.aside);
    if (!plate.beside && plate.under !== false && out.pair.rows.length === mains.length) {
      lineUnder = true;
      const own = out.rows.some((r) => r.aside === 's');
      const rows = []; let k = 0;
      for (const r of out.rows) {
        if (!r.aside) {
          const p = out.pair.rows[k++];
          if (p.dirPre && p.who && !own) rows.push({ aside: 'd', text: p.dirPre });
          if (p.who && !own) rows.push({ aside: 's', text: p.who, gloss: p.whoGloss || undefined });
          if (p.dir || (p.dirPre && !(p.who && !own))) rows.push({ aside: 'd', text: [p.dirPre && !(p.who && !own) ? p.dirPre : '', p.dir || ''].filter(Boolean).join(' ') });
        }
        rows.push(r);
      }
      out.rows = rows;
    }
  }
  // Three things a reading may say of a plate's rows and of its head. A row of the second passage is p:<row>.
  const listOf = (id) => (String(id).startsWith('p:') ? (out.pair ? out.pair.rows : []) : out.rows);
  // "indent": rows set deeper in, as the edition sets them: a list of rows and of runs of rows, ["5.0-5.3", "p:270.3"]
  if (plate.indent !== undefined) {
    if (!Array.isArray(plate.indent)) fail(`${what}: "indent" is a list of rows and runs of rows: ["5.0-5.3"]`);
    else for (const spec of plate.indent) {
      const m = String(spec).match(/^(p:)?(\d+\.\d+)(?:-(\d+\.\d+))?$/);
      if (!m) { fail(`${what}: "indent": cannot read "${spec}" (a row, "5.0", or a run of rows, "5.0-5.3")`); continue; }
      const list = listOf(spec).filter((r) => !r.aside);
      const a = list.findIndex((r) => r.id === (m[1] || '') + m[2]); const z = m[3] === undefined ? a : list.findIndex((r) => r.id === (m[1] || '') + m[3]);
      if (a < 0 || z < a) { fail(`${what}: "indent" names ${spec}, and ${a < 0 || z < 0 ? 'a row it names is not among the rows shown' : 'its rows are not in order'}`); continue; }
      for (let k = a; k <= z; k++) list[k].indent = 1;
    }
  }
  // "stanza": { "10.4": true }: a stanza's space stands before the row, where the kit sees no stanza (it knows one
  // by a block of the hosted text that shows more than one row); { "2.0": false }: none stands where it would set one
  if (plate.stanza !== undefined) {
    if (!plate.stanza || typeof plate.stanza !== 'object' || Array.isArray(plate.stanza)) fail(`${what}: "stanza" is { rowId: true or false }`);
    else for (const [id, v] of Object.entries(plate.stanza)) {
      const list = listOf(id); const k = list.findIndex((r) => !r.aside && r.id === id); const r = list[k]; const prev = list[k - 1];
      const second = id.startsWith('p:');
      if (typeof v !== 'boolean') fail(`${what}: "stanza" for row ${id} is true or false`);
      else if (!r) fail(`${what}: "stanza" names row ${id}, which is not among the rows shown`);
      else if (!prev) fail(`${what}: "stanza": row ${id} is the first of its passage`);
      else if (second && lineUnder) fail(`${what}: "stanza": the second passage is set line under line, and its rows part where the first passage's do (name the row of the first passage)`);
      else if (v && (prev.aside || (second && r.gapBefore && !r.cutStart))) fail(`${what}: "stanza": a ${prev.aside === 's' ? 'speaker’s name' : prev.aside === 'd' ? 'stage direction' : 'sign of omission'} already stands before row ${id}`);
      else r.stanza = v;
    }
  }
  // "place": the place line at the head of the plate in the reading's own words, where the label of the hosted part
  // says the heading again or too little ("" for none; a title between asterisks stands upright in the italic line)
  if (plate.place !== undefined) {
    if (typeof plate.place !== 'string' || (plate.place.match(/\*/g) || []).length % 2) fail(`${what}: "place" is a line of words; a title in it stands between two asterisks`);
    else out.place = plate.place.trim();
  }
  return out;
}

// what Auden said, as the page prints it: where it was read stays in the reading
const said = (a) => (a ? { says: a.says, quote: a.quote || undefined, source: a.source || '' } : null);

function sourceOf(src) {
  const [text, partId] = src.split('/');
  const idx = loadIndex(text);
  if (!idx) return null;
  const part = (idx.parts || []).find((p) => p.id === partId) || {};
  return { text, part: partId, label: part.label || '', author: idx.author || '', title: idx.title || '', translator: idx.translator || null, original: !!idx.original, source: part.source || idx.source || null };
}

fs.mkdirSync(OUT, { recursive: true });
const index = [];
for (const entry of manifest) {
  const file = path.join(WORKS, entry.id, 'reading.json');
  if (!fs.existsSync(file)) continue;
  let reading;
  try { reading = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { fail(`${entry.id}: reading.json: ${e.message}`); continue; }
  const row = { id: entry.id, work: entry.work, author: entry.author, workTitle: entry.title, title: reading.title, where: reading.where, lenses: [...new Set((reading.plates || []).flatMap((p) => (p.lenses || []).map((l) => l.kind)))], why: ((reading.plates || [])[0] && ((reading.plates[0].lenses || [])[0] || {}).why) || '' };
  index.push(row);
  if (only.length && !only.includes(entry.id)) continue;
  const piece = {
    id: entry.id, work: entry.work, author: entry.author, workTitle: entry.title,
    title: reading.title, where: reading.where, about: reading.about, aboutHead: reading.aboutHead || undefined, view: said(reading.view), noView: reading.view === null && !!reading.viewWhy,
    plates: (reading.plates || []).map((p, i) => buildPlate(p, `${entry.id} plate ${p.id || i}`)),
    auden: (reading.auden || []).map(said), sources: reading.sources || [], caveats: reading.caveats || [],
  };
  piece.texts = [...new Set(piece.plates.flatMap((p) => [p.src, p.pair && p.pair.src]).filter(Boolean))].map(sourceOf).filter(Boolean);
  if (reading.next) {
    const m = String(reading.next).match(/^([a-z0-9-]+)\/([a-z0-9-]+)(?::(\d+))?$/);
    const src = m && sourceOf(`${m[1]}/${m[2]}`);
    if (src) piece.next = { text: m[1], part: m[2], block: m[3] ? +m[3] : 0, label: src.label, title: src.title }; else fail(`${entry.id}: "next" (${reading.next}) is not a hosted part`);
  } else if (reading.nextNote) {
    // a work that cannot be printed here: where it can be found, with links out, or into a book that is printed here
    piece.nextNote = reading.nextNote;
    piece.nextLinks = (reading.nextLinks || []).map((l) => {
      if (l && l.label && /^https:\/\//.test(l.url || '')) return { label: l.label, url: l.url };
      const m = String((l && l.text) || '').match(/^([a-z0-9-]+)\/([a-z0-9-]+)(?::(\d+))?$/);
      if (l && l.label && m && sourceOf(`${m[1]}/${m[2]}`)) return { label: l.label, text: m[1], part: m[2], block: m[3] ? +m[3] : 0 };
      fail(`${entry.id}: a link under "nextLinks" (${(l && (l.url || l.text)) || 'no address'}) has no label or goes nowhere`);
      return null;
    }).filter(Boolean);
  }
  const rec = records.find((r) => r.work === entry.work);
  if (rec) piece.record = { file: rec.file, title: rec.title, performers: rec.performers, credit: rec.credit };
  // a piece may bring its own drawings and its own rules of style
  if (fs.existsSync(path.join(ROOT, 'site/js/pieces', `${entry.id}.js`))) piece.module = true;
  if (fs.existsSync(path.join(ROOT, 'site/css/pieces', `${entry.id}.css`))) piece.style = true;
  fs.writeFileSync(path.join(OUT, `${entry.id}.json`), `${JSON.stringify(piece)}\n`);
}
fs.writeFileSync(path.join(OUT, 'index.json'), `${JSON.stringify(index, null, 1)}\n`);
console.log(`${index.length} piece${index.length === 1 ? '' : 's'} with a reading: ${index.map((p) => p.id).join(' ')}`);
if (!only.length) {
  // the front page's specimens are cut from the pieces just built
  problems.push(...(await import('./front.mjs')).buildFront());
  // the shelf says which pieces open each book, and where
  problems.push(...(await (await import('./shelf.mjs')).buildShelf()));
  // the class page opens passages of the pieces and counts the shelf
  problems.push(...(await (await import('./class.mjs')).buildClass()));
}
if (problems.length) { console.log(`PROBLEMS\n  ${problems.join('\n  ')}`); process.exit(2); }
