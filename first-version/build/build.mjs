// Assemble the course: content/*.mjs + the books in site/data/texts
// -> site/data/course.json, site/data/ui.json, review/all-prose.md
//
//   node build/build.mjs            assemble the course
//   node build/build.mjs --texts    first cut every book again from its source

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { cutter } from './lib/cut.mjs';
import { meetingsOf } from './lib/meetings.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const TEXTS = path.join(ROOT, 'site/data/texts');
const CONTENT = path.join(ROOT, 'content');
const args = new Set(process.argv.slice(2));

const problems = [];
const fail = (msg) => problems.push(msg);

// ---------- the books ----------

async function buildTexts() {
  const dir = path.join(ROOT, 'build/texts');
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.mjs')).sort()) {
    const mod = await import(pathToFileURL(path.join(dir, f)).href);
    if (typeof mod.run !== 'function') continue;
    try {
      const out = mod.run();
      for (const x of Array.isArray(out) ? out : [out]) if (x) console.log(`  ${x.id}: ${x.parts.length} parts, ${x.pages} pages`);
    } catch (err) {
      fail(`${f}: ${err.message}`);
    }
  }
}

const { textIndex, textPart, cut, cloze, emend, quoted } = cutter(TEXTS, fail);

// ---------- the reading list of a week ----------

function pagesOf(n) {
  return Math.max(1, Math.round(n));
}

function reading(spec, what) {
  const entry = { work: spec.work };
  for (const k of ['choice', 'omit', 'note', 'paras', 'auden']) if (spec[k] !== undefined) entry[k] = spec[k];
  if (spec.items) {
    entry.items = spec.items;
    for (const item of entry.items) {
      if (!item.key || !item.label || !(item.pages > 0)) fail(`${what}: a reading item needs key, label and pages`);
    }
    return entry;
  }
  const index = textIndex(spec.text);
  const alias = index.readAs || spec.text;
  let parts = index.parts;
  if (spec.from || spec.to) {
    const i = spec.from ? parts.findIndex((x) => x.id === spec.from) : 0;
    const j = spec.to ? parts.findIndex((x) => x.id === spec.to) : parts.length - 1;
    if (i < 0 || j < 0 || j < i) throw new Error(`${what}: bad range ${spec.from}..${spec.to} in ${spec.text}`);
    parts = parts.slice(i, j + 1);
  }
  if (spec.only) parts = parts.filter((x) => spec.only.includes(x.id));
  const key = (p) => `${alias}/${p.id}`;
  const group = (label, list) => {
    const pages = pagesOf(list.reduce((a, p) => a + p.pages, 0));
    if (list.length === 1) return { key: key(list[0]), label, pages, route: `read/${alias}/${list[0].id}` };
    return { label, pages, route: `read/${alias}/${list[0].id}`, parts: list.map((p) => [key(p), p.pages]) };
  };
  if (spec.ranges) {
    entry.items = spec.ranges.map(([from, to, label]) => {
      const i = parts.findIndex((x) => x.id === from);
      const j = parts.findIndex((x) => x.id === to);
      if (i < 0 || j < 0 || j < i) throw new Error(`${what}: bad range ${from}..${to}`);
      return group(label, parts.slice(i, j + 1));
    });
    const covered = entry.items.reduce((a, x) => a + (x.parts ? x.parts.length : 1), 0);
    if (covered !== parts.length) fail(`${what}: ranges cover ${covered} of ${parts.length} parts of ${spec.text}`);
  } else if (spec.by === 'group') {
    const groups = [];
    for (const p of parts) {
      const g = p.group || p.label;
      if (!groups.length || groups[groups.length - 1].g !== g) groups.push({ g, list: [] });
      groups[groups.length - 1].list.push(p);
    }
    entry.items = groups.map((x) => group(x.g, x.list));
  } else if (spec.by === 'whole') {
    entry.items = [group(spec.label, parts)];
  } else {
    entry.items = parts.map((p) => group(p.label, [p]));
  }
  return entry;
}

// ---------- a week ----------

function exercise(ex, what) {
  const out = { ...ex };
  if (ex.model && ex.model.cut) {
    const c = cut(ex.model.cut, `${what} model`);
    out.model = { ...ex.model, ...(c.lines ? { lines: c.lines } : { paras: c.paras }) };
    // Lines of the Comedy: the page stays shut while the examination's clock runs.
    if (/^dante-/.test(ex.model.cut[0])) out.model.canto = true;
    delete out.model.cut;
    quoted.add(out.model.lines || out.model.paras);
  }
  if (ex.model && ex.model.cuts) {
    // Several pieces of one work, with a note where something is left out.
    const pieces = ex.model.cuts.map((spec, i) => cut(spec, `${what} model ${i + 1}`));
    const verse = pieces.every((c) => c.lines);
    if (!verse && !pieces.every((c) => c.paras)) fail(`${what}: a model in pieces must be all verse or all prose`);
    const list = [];
    pieces.forEach((c, i) => {
      if (i) list.push(...(verse ? ['', { gap: ex.model.gap || '' }, ''] : [{ gap: ex.model.gap || '' }]));
      list.push(...(c.lines || c.paras || []));
    });
    out.model = { ...ex.model, ...(verse ? { lines: list } : { paras: list }) };
    delete out.model.cuts;
    quoted.add(list);
  }
  if (ex.answer && ex.answer.cut) {
    const c = cut(ex.answer.cut, `${what} answer`);
    out.answer = { ...ex.answer, ...(c.lines ? { lines: c.lines } : { paras: c.paras }) };
    delete out.answer.cut;
    quoted.add(out.answer.lines || out.answer.paras);
  }
  if (ex.check && ex.check.syllables && ex.check.lines && ex.check.lines.exact !== ex.check.syllables.length) fail(`${what}: ${ex.check.syllables.length} syllable counts for ${ex.check.lines.exact} lines`);
  if (ex.kind === 'translate') {
    const tr = { ...ex.translate };
    const src = cut(tr.source, `${what} source`);
    if (!src.lines) fail(`${what}: the source must be verse`);
    tr.lines = src.lines;
    delete tr.source;
    const n = (tr.lines || []).filter((l) => l !== '').length;
    if (tr.glossary.length !== n) fail(`${what}: ${tr.glossary.length} lines of word-list for ${n} lines of text`);
    if (tr.published && tr.published.cut) {
      const pub = cut(tr.published.cut, `${what} published`);
      tr.published = { ...tr.published, ...(pub.lines ? { lines: pub.lines } : { paras: pub.paras }) };
      delete tr.published.cut;
    }
    out.translate = tr;
  }
  if (ex.kind === 'emend') {
    // One passage, or one for each version of the cantos the student may be learning.
    const em = { ...ex.emend };
    const one = (spec, w) => {
      const e = emend(spec, w);
      if (!(em.min > 0) || em.min > e.right.length) fail(`${w}: min must be between 1 and the number of changes (${e.right.length})`);
      return { ...e, cite: spec.cite };
    };
    if (em.versions) {
      const versions = {};
      for (const [v, spec] of Object.entries(em.versions)) {
        try { versions[v] = one(spec, `${what} (${v})`); } catch (err) { fail(`${what} (${v}): ${err.message}`); }
      }
      em.versions = versions;
    } else {
      Object.assign(em, one(em, what));
      delete em.cut;
      delete em.swap;
    }
    out.emend = em;
  }
  if (ex.kind === 'table') {
    const tb = ex.table;
    if (!tb.columns || !(tb.rows || tb.count) || !(tb.min > 0)) fail(`${what}: a table needs columns, rows or count, and min`);
    if (tb.rows) {
      // A cell given as { cut: [...] } is a line of the book, cut like any other passage.
      const rows = tb.rows.map((row) => {
        const cells = {};
        for (const [k, v] of Object.entries(row.cells || {})) {
          if (v && typeof v === 'object' && v.cut) {
            const c = cut(v.cut, `${what} row ${row.id}`);
            cells[k] = c.lines ? { lines: c.lines } : { paras: c.paras };
            quoted.add(cells[k]);
          } else cells[k] = v;
        }
        return { ...row, cells };
      });
      out.table = { ...tb, rows };
    }
    const cols = new Set(tb.columns.map((c) => c.id));
    for (const row of tb.rows || []) for (const k of Object.keys(row.cells || {})) if (!cols.has(k)) fail(`${what}: row ${row.id} has a cell for an unknown column ${k}`);
    if (tb.key) {
      const kc = new Set((tb.key.columns || tb.columns).map((c) => c.id));
      tb.key.rows.forEach((row, i) => { for (const k of Object.keys(row)) if (!kc.has(k)) fail(`${what}: key row ${i + 1} has an unknown column ${k}`); });
    }
  }
  return out;
}

function unit(u, works, extras) {
  const what = `week ${u.n}`;
  const out = { n: u.n, title: u.title, sub: u.sub, intro: u.intro || [] };
  out.reading = u.reading.map((r, i) => {
    if (!works.has(r.work)) fail(`${what}: unknown work ${r.work}`);
    try {
      return reading(r, `${what} reading ${i + 1}`);
    } catch (err) {
      // A book that is not in yet: say so, and let the rest of the week build.
      fail(`${what}: ${err.message}`);
      const entry = { work: r.work, items: [{ key: `${r.text}/missing`, label: r.label || r.work, pages: 1 }] };
      for (const k of ['choice', 'omit', 'note', 'paras', 'auden']) if (r[k] !== undefined) entry[k] = r[k];
      return entry;
    }
  });
  if (u.words) out.words = cloze(u.words, `${what} missing words`);
  // A passage of the Comedy: the page stays shut while the examination's clock runs.
  if (u.words && /^dante-/.test(u.words.cut[0])) out.words.canto = true;
  if (u.test) {
    const ids = new Set();
    out.test = { items: u.test.items.map((item, i) => {
      const w = `${what} test ${i + 1}`;
      if (!item.id || ids.has(item.id)) fail(`${w}: missing or repeated id`);
      ids.add(item.id);
      if (item.kind === 'spot') {
        const c = cut(item.cut, w);
        // A canticle is a title, so it is marked as one.
        const o = { ...item, where: item.where || c.where.replace(/^(Inferno|Purgatorio|Paradiso)\b/, '*$1*') };
        delete o.cut;
        if (c.lines) o.lines = c.lines; else o.paras = c.paras;
        // A passage of Dante is given in each version the cantos can be read in:
        // the three texts are divided tercet by tercet, so the same blocks serve.
        if (/^dante-/.test(item.cut[0])) {
          o.versions = {};
          for (const v of ['temple', 'longfellow', 'italian']) {
            const cv = cut([`dante-${v}`, ...item.cut.slice(1)], `${w} (${v})`);
            o.versions[v] = cv.lines ? { lines: cv.lines } : { paras: cv.paras };
            if (v === 'italian') o.versions[v].lang = 'it';
          }
          delete o.lines;
          delete o.paras;
        }
        if (!works.has(item.work)) fail(`${w}: unknown work ${item.work}`);
        if (item.speaker && !Array.isArray(item.speaker)) fail(`${w}: speaker must be a list of accepted answers`);
        return o;
      }
      if (item.kind !== 'fact' || !item.q || !Array.isArray(item.a) || !item.a.length) fail(`${w}: a fact needs q and a list of accepted answers`);
      return item;
    }) };
  }
  if (u.questions) {
    out.questions = u.questions;
    const ids = new Set();
    u.questions.forEach((q, i) => {
      if (!q.id || ids.has(q.id) || !q.text || !q.auden?.paras?.length) fail(`${what} question ${i + 1}: needs a fresh id, text, and what Auden wrote`);
      ids.add(q.id);
    });
  }
  if (u.making) out.making = (Array.isArray(u.making) ? u.making : [u.making]).map((ex, i) => exercise(ex, `${what} exercise ${i + 1}`));
  // The week's meetings: a passage, the student's moves on it, and what answers them.
  if (u.meetings) out.meetings = meetingsOf(u, out, { cut, cloze, quoted, fail, works, ...extras });
  if (u.carry) out.carry = u.carry;
  if (u.carries) {
    // A key is a work, or a work and the beginning of the name of its parts: 'dante/pur'.
    for (const id of Object.keys(u.carries)) if (!works.has(id.split('/')[0])) fail(`${what}: a question to carry into an unknown work, ${id}`);
    out.carries = u.carries;
  }
  // The short way: each part is looked up, so that its name is the book's own.
  if (u.short) {
    if (!u.short.say || !Array.isArray(u.short.parts) || !u.short.parts.length) fail(`${what}: the short way needs say and parts`);
    // A bar between two parts is a place where the short way stops: a meeting comes there.
    const keys = (u.short.parts || []).filter((x) => x !== '|');
    const stops = new Set((u.short.parts || []).map((x, i, all) => (all[i + 1] === '|' ? x : null)).filter(Boolean));
    out.short = { say: u.short.say, parts: keys.map((key) => {
      const [tid, pid] = String(key).split('/');
      let index = null;
      try { index = textIndex(tid === 'dante' ? 'dante-longfellow' : tid); } catch { fail(`${what}: the short way names an unknown book, ${tid}`); }
      const part = index && index.parts.find((x) => x.id === pid);
      if (index && !part) fail(`${what}: the short way names ${key}, and the book has no such part`);
      // The name of a part is the book's, and is read with the book.
      const o = { key, label: part ? part.label : key };
      if (stops.has(key)) o.stop = true;
      quoted.add(o);
      return o;
    }) };
    if (u.short.time) out.short.time = u.short.time;
  }
  if (u.plate) { if (extras.plates && !extras.plates.has(u.plate)) fail(`${what}: no plate ${u.plate}`); out.plate = u.plate; }
  // What the week offers to learn by heart: a set piece, or a canto.
  if (u.heart) {
    if (!/^(inf|pur|par)-\d\d$/.test(u.heart) && !(extras.pieces && extras.pieces.has(u.heart))) fail(`${what}: nothing to learn by heart is called ${u.heart}`);
    out.heart = u.heart;
  }
  return out;
}

// ---------- the words on the page ----------

function sourceFiles(dir) {
  const out = [];
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) out.push(...sourceFiles(full));
    else if (f.name.endsWith('.js')) out.push(full);
  }
  return out;
}

function checkStrings(ui, course) {
  const used = new Set();
  const dynamic = new Set();
  for (const file of sourceFiles(path.join(ROOT, 'site/js'))) {
    const src = fs.readFileSync(file, 'utf8');
    for (const m of src.matchAll(/\bt(?:\.list|\.has)?\(\s*'([^']+)'/g)) used.add(m[1]);
    for (const m of src.matchAll(/\bt(?:\.list|\.has)?\(\s*`([^`$]+)\$\{[^}]+\}([^`]*)`/g)) dynamic.add(`${m[1]}*${m[2]}`);
    for (const m of src.matchAll(/\['[\w-]+',\s*'((?:nav)\.[\w.]+)'\]/g)) used.add(m[1]);
    // the heading of a step is named where the step is drawn
    for (const m of src.matchAll(/\blabel\(api,\s*'([^']+)'/g)) used.add(m[1]);
  }
  for (const key of used) if (ui[key] === undefined) fail(`ui: no string for ${key}`);
  const families = {
    'cantos.version.*': ['temple', 'longfellow', 'italian'],
    'cantos.version.*.note': ['temple', 'longfellow', 'italian'],
    'cantos.version.*.short': ['temple', 'longfellow', 'italian'],
    'cantos.cite.*': ['temple', 'longfellow', 'italian'],
    'heart.veil.*': ['open', 'letters', 'covered'],
    'enrol.pace.*': course.paces.map((x) => x.id),
    'enrol.pace.*.note': course.paces.map((x) => x.id),
    'meet.kind.*': ['gaps', 'choose', 'mark', 'sort', 'match', 'order', 'write', 'read', 'verdict', 'two', 'spot'],
  };
  for (const d of dynamic) {
    if (!families[d]) { fail(`ui: the build does not know the family ${d}`); continue; }
    for (const v of families[d]) {
      const key = d.replace('*', v);
      used.add(key);
      if (ui[key] === undefined) fail(`ui: no string for ${key}`);
    }
  }
  const unused = Object.keys(ui).filter((k) => !used.has(k));
  return { used: used.size, unused };
}

// ---------- the review document ----------

// Every string we wrote, with a path to cite it by. Passages cut from the
// books are skipped: they are the authors', and are checked by script.
function collect(node, at, out) {
  if (node === null || node === undefined) return;
  if (typeof node === 'string') {
    // a bare lower-case word is an identifier, except in a word list, where it is a word
    const bare = /^[a-z0-9]+([-/:.][a-z0-9]+)*$/.test(node) && !at.includes('.glossary.');
    if (node.trim() && !/^(https?:|#\/|read\/)/.test(node) && !bare) out.push([at, node]);
    return;
  }
  if (typeof node !== 'object') return;
  if (quoted.has(node)) return;
  if (Array.isArray(node)) { node.forEach((x, i) => collect(x, `${at}.${i + 1}`, out)); return; }
  for (const [k, v] of Object.entries(node)) {
    if (['id', 'key', 'route', 'url', 'work', 'kind', 'text', 'part', 'texts', 'parts', 'check', 'lang', 'a', 'speaker', 'blanks', 'default', 'option', 'only', 'pages', 'n', 'min', 'count', 'rows', 'columns', 'choice'].includes(k) && !(at.includes('question') && k === 'text') && !(k === 'key' && v && typeof v === 'object')) {
      // identifiers and settings, except the few of these keys that hold words
      if (k === 'a' || k === 'speaker') out.push([`${at}.${k}`, `(accepted answers) ${v.join(' | ')}`]);
      else if (k === 'columns') v.forEach((c, i) => out.push([`${at}.columns.${i + 1}`, c.label]));
      else if (k === 'rows' && Array.isArray(v)) {
        v.forEach((r, i) => {
          const cells = r.cells || r;
          // a row's cells are words whatever the columns are called
          if (cells && typeof cells === 'object' && !Array.isArray(cells)) for (const [ck, cv] of Object.entries(cells)) collect(cv, `${at}.rows.${i + 1}.${ck}`, out);
          else collect(cells, `${at}.rows.${i + 1}`, out);
        });
      }
      else if (k === 'choice' && v.label) out.push([`${at}.choice`, v.label]);
      continue;
    }
    collect(v, at ? `${at}.${k}` : k, out);
  }
}

function review(course, ui) {
  const lines = ['# Every word the course says', '',
    'Each entry is a path, then the text as it appears on the page. Marks in the text: *italic* and [link text](address).',
    'Passages cut from the set books are not here: they are the authors\' words.', ''];
  const section = (title, entries) => {
    lines.push(`## ${title}`, '');
    for (const [at, text] of entries) lines.push(`**${at}**`, '', text, '');
  };
  const uiEntries = Object.entries(ui).flatMap(([k, v]) => (Array.isArray(v) ? v.map((x, i) => [`ui:${k}.${i + 1}`, x]) : [[`ui:${k}`, v]]));
  section('The app\'s own words (buttons, labels, instructions)', uiEntries);
  for (const [name, page] of Object.entries(course.pages)) {
    const out = [];
    collect(page, `page:${name}`, out);
    section(`Page: ${name}`, out);
  }
  {
    const out = [];
    course.works.forEach((w) => collect({ author: w.author, title: w.title, copy: w.copy, find: w.find, textNote: w.textNote, set: w.set, textLabels: w.textLabels }, `work:${w.id}`, out));
    section('The books: names, editions, where to find them', out);
  }
  {
    // What stands at the head of each book in the reader. The headings of
    // most books are the book's own; the few written here are listed.
    const ours = new Set(['agamemnon', 'antigone', 'poems']);
    const out = [];
    for (const id of fs.readdirSync(TEXTS).sort()) {
      let x;
      try { x = textIndex(id); } catch { continue; }
      out.push([`text:${id}`, `${x.title}. ${x.author}.` + (x.translator ? ` Translated by ${x.translator}.` : '') + ` Text: ${x.source.name}.`]);
      if (x.note) out.push([`text:${id}.note`, x.note]);
      if (ours.has(id)) out.push([`text:${id}.headings`, x.parts.map((q) => q.label).join(' | ')]);
    }
    section('The books as printed here: what stands at the head of each', out);
  }
  {
    const out = [];
    collect(course.door, 'door', out);
    section('The door: the first page a visitor sees', out);
  }
  {
    const out = [];
    collect(course.plates, 'plates', out);
    collect(course.records, 'records', out);
    section('Pictures and records: captions and credits', out);
  }
  for (const u of course.units) {
    const out = [];
    collect(u, `week${u.n}`, out);
    section(`Week ${u.n}: ${u.title}`, out);
  }
  {
    const out = [];
    collect(course.pieces, 'pieces', out);
    if (out.length) section('Pieces by heart', out);
  }
  const html = fs.readFileSync(path.join(ROOT, 'site/index.html'), 'utf8');
  const statics = [];
  for (const m of html.matchAll(/<title>([^<]+)<\/title>|content="([^"]{20,})"|<noscript>([\s\S]*?)<\/noscript>/g)) statics.push(['index.html', (m[1] || m[2] || m[3]).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()]);
  // the one sentence the scripts say themselves, when the wording cannot be loaded
  const app = fs.readFileSync(path.join(ROOT, 'site/js/app.js'), 'utf8');
  for (const m of app.matchAll(/h\('p', \{ class: 'col' \}, '([^']+)'\)/g)) statics.push(['js/app.js', m[1]]);
  section('The page shell', statics);
  // Every string of words in the course data must be in the file, unless it
  // was cut from a book.
  const all = lines.join('\n');
  const missing = [];
  const walk = (node, at) => {
    if (typeof node === 'string') {
      if (/\S\s+\S/.test(node) && !/^(https?:|#\/|read\/)/.test(node) && !all.includes(node)) missing.push(`${at}: ${node.slice(0, 70)}`);
      return;
    }
    if (!node || typeof node !== 'object' || quoted.has(node)) return;
    if (Array.isArray(node)) node.forEach((x, i) => walk(x, `${at}.${i + 1}`));
    else for (const [k, v] of Object.entries(node)) walk(v, at ? `${at}.${k}` : k);
  };
  walk({ pages: course.pages, works: course.works, units: course.units, pieces: course.pieces, door: course.door, plates: course.plates, records: course.records }, '');
  if (missing.length) {
    console.log(`${missing.length} strings are shown on the site and are not in review/all-prose.md:`);
    for (const x of missing.slice(0, 40)) console.log(`  ${x}`);
  }
  const words = lines.join('\n').split(/\s+/).length;
  fs.mkdirSync(path.join(ROOT, 'review'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'review/all-prose.md'), lines.join('\n'));
  return words;
}

// ---------- assemble ----------

async function load(name) {
  const mod = await import(`${pathToFileURL(path.join(CONTENT, name)).href}?${Date.now()}`);
  return mod.default;
}

async function main() {
  if (args.has('--texts')) {
    console.log('Cutting the books…');
    await buildTexts();
  }
  const ui = await load('ui.mjs');
  const base = await load('course.mjs');
  const worksList = await load('works.mjs');
  const pages = await load('pages.mjs');
  const pieces = await load('pieces.mjs');
  const doorSpec = await load('door.mjs');
  const plateList = await load('plates.mjs');
  const recordList = await load('records.mjs');
  const extras = { plates: new Set(plateList.map((x) => x.id)), records: new Set(recordList.map((x) => x.id)), pieces: new Set(pieces.map((x) => x.id)) };
  for (const x of plateList) if (!fs.existsSync(path.join(ROOT, 'site/plates', x.file))) fail(`plate ${x.id}: no file site/plates/${x.file}`);
  for (const x of recordList) if (!fs.existsSync(path.join(ROOT, 'site/records', x.file))) fail(`record ${x.id}: no file site/records/${x.file}`);
  const works = new Map(worksList.map((w) => [w.id, w]));
  for (const w of worksList) for (const id of w.texts || []) { try { textIndex(id); } catch (e) { fail(`work ${w.id}: ${e.message}`); } }

  const units = [];
  const unitFiles = fs.readdirSync(path.join(CONTENT, 'units')).filter((x) => /^\d\d\.mjs$/.test(x)).sort();
  for (const f of unitFiles) {
    const u = { ...(await load(`units/${f}`)) };
    // The week's test and missing words are set in files of their own:
    // parts/NN.mjs ({ words, test }) and, where the missing words come from
    // somewhere else, parts/NN.words.mjs.
    const nn = f.slice(0, 2);
    const has = (name) => fs.existsSync(path.join(CONTENT, 'units/parts', name));
    const part = has(`${nn}.mjs`) ? await load(`units/parts/${nn}.mjs`) : {};
    const own = has(`${nn}.words.mjs`) ? await load(`units/parts/${nn}.words.mjs`) : null;
    if (!u.words) u.words = own || part.words;
    if (!u.test) u.test = part.test;
    if (!u.words) fail(`${f}: no missing words yet`);
    if (!u.test) fail(`${f}: no test yet`);
    // The week's meetings are set in a file of their own, meet/NN.mjs, with
    // what stands at the head of the week: { intro, carry, plate, meetings }.
    // carries: { workId: question } gives a book a question of its own.
    // short: { say, parts: ['dante/inf-01', ...] } is a short way through
    // the week's book for a reader with one evening.
    // operas: { workId: { paras } } gives an opera's entry new words.
    if (has(`../meet/${nn}.mjs`)) {
      const meet = await load(`units/meet/${nn}.mjs`);
      for (const k of ['title', 'sub', 'intro', 'carry', 'carries', 'short', 'plate', 'meetings', 'heart']) if (meet[k] !== undefined) u[k] = meet[k];
      if (meet.operas) u.reading = u.reading.map((r) => (meet.operas[r.work] ? { ...r, ...meet.operas[r.work] } : r));
    }
    try { units.push(unit(u, works, extras)); } catch (err) { fail(`${f}: ${err.message}`); }
  }
  units.forEach((u, i) => { if (u.n !== i + 1) fail(`units out of order at ${i + 1}`); });

  const italian = textIndex('dante-italian');
  const cantoLines = Object.fromEntries(italian.parts.map((p) => [p.id, p.lines]));
  let cantosVerified = [];
  try { cantosVerified = textIndex('dante-temple').parts.filter((p) => !p.unverified).map((p) => p.id); } catch { fail('the prose Dante (dante-temple) is not built yet'); }

  const course = {
    ...base,
    works: worksList,
    units,
    pieces: pieces.map((x) => {
      const part = textPart(x.text, x.part);
      const n = part.blocks.reduce((a, b) => a + (b.k === 'v' ? b.lines.length : 0), 0);
      return { ...x, lineCount: x.from ? x.to - x.from + 1 : n };
    }),
    cantoLines,
    cantosVerified,
    pages,
    plates: plateList,
    records: recordList,
  };
  // The door: the first passage a visitor is given, before anything is explained.
  // It has the shape of a meeting and is built as one.
  try {
    course.door = meetingsOf({ n: 0, meetings: [doorSpec] }, {}, { cut, cloze, quoted, fail, works, ...extras })[0];
  } catch (err) { fail(`the door: ${err.message}`); }
  // Agamemnon or Antigone: two titles, one place on the list.
  const required = worksList.filter((w) => w.kind === 'required' && !w.or).length;
  const operas = worksList.filter((w) => w.kind === 'opera').length;
  course.figures = { ...base.figures, required, operas, works: required + operas, critical: worksList.filter((w) => w.kind === 'critical').length };

  const strings = checkStrings(ui, course);
  const sum = (u, pred) => u.reading.filter((r) => (!r.choice || r.choice.option === r.choice.default) && pred(r)).reduce((a, r) => a + r.items.reduce((b, x) => b + x.pages, 0), 0);
  const isOpera = (r) => works.get(r.work).kind === 'opera';
  const totals = units.map((u) => sum(u, (r) => !r.omit && !isOpera(r)));
  const totalsTyped = units.map((u) => sum(u, (r) => !isOpera(r)));
  const add = (a, b) => a + b;
  course.figures.pagesMarked = totals.reduce(add, 0);
  course.figures.pagesTyped = totalsTyped.reduce(add, 0);
  course.figures.pagesOperas = units.map((u) => sum(u, isOpera)).reduce(add, 0);
  // The sources page quotes the count of pages, to the nearest hundred.
  const about = (Math.round(course.figures.pagesTyped / 100) * 100).toLocaleString('en');
  const set = (course.figures.pagesMarked + course.figures.pagesOperas).toLocaleString('en');
  // What a week comes to, to the nearest ten pages.
  const perWeek = String(Math.round((course.figures.pagesMarked + course.figures.pagesOperas) / units.length / 10) * 10);
  // Everything on the list: both Greek plays, the two books marked Omit, and the libretti.
  const other = units.map((u) => u.reading.filter((r) => r.choice && r.choice.option !== r.choice.default).reduce((a, r) => a + r.items.reduce((b, x) => b + x.pages, 0), 0)).reduce(add, 0);
  const all = (Math.round((course.figures.pagesTyped + other + course.figures.pagesOperas) / 100) * 100).toLocaleString('en');
  const fill = (x) => (typeof x === 'string' ? x.replaceAll('{pagesSet}', set).replaceAll('{pagesAll}', all).replaceAll('{pages}', about).replaceAll('{perWeek}', perWeek)
    : Array.isArray(x) ? x.map(fill)
      : x && typeof x === 'object' ? Object.fromEntries(Object.entries(x).map(([k, v]) => [k, fill(v)])) : x);
  course.pages = fill(course.pages);
  const words = review(course, ui);

  fs.mkdirSync(path.join(ROOT, 'site/data'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'site/data/course.json'), JSON.stringify(course));
  fs.writeFileSync(path.join(ROOT, 'site/data/ui.json'), JSON.stringify(ui));

  console.log(`${units.length} weeks; pages by week: ${totals.join(', ')}; ${course.figures.pagesMarked} as marked, ${course.figures.pagesTyped} as typed, libretti ${course.figures.pagesOperas}`);
  console.log(`${strings.used} strings used` + (strings.unused.length ? `; ${strings.unused.length} not used: ${strings.unused.slice(0, 12).join(', ')}${strings.unused.length > 12 ? '…' : ''}` : ''));
  console.log(`review/all-prose.md: about ${words} words`);
  if (problems.length) {
    console.log(`\n${problems.length} PROBLEMS`);
    for (const x of problems) console.log(`  ${x}`);
    process.exit(1);
  }
}

main();
