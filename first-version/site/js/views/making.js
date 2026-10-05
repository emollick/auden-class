// The exercise: something made under rules. Five kinds:
//   text / verse   written in a box, with what a machine can count checked
//   table          a chart or a set of dictionary entries, cell by cell
//   translate      a poem in a language not studied, with a word-list
//   emend          a passage with wrong words in it, to be put right

import { h, p, clear, prose, plain, num } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { today, medium } from '../lib/dates.js';
import { runChecks, allOk, rhymeGroups, textLines, wordCount, holdsWord } from '../lib/checks.js';
import { countSyllables } from '../lib/text.js';
import { unitByNumber, examOver } from '../lib/course.js';
import { passageFor, versionSet, emendWork, emendAfter, emendCount, emendWritten, emendDone, emendFinish, emendReopen } from './emend.js';

export function exercises(unit) {
  if (!unit.making) return [];
  return Array.isArray(unit.making) ? unit.making : [unit.making];
}

function record(id) {
  return store.get().making[id] || { text: '', cells: {}, done: null };
}

function save(id, fn, quiet = true) {
  store.update((st) => {
    st.making[id] = st.making[id] || { text: '', cells: {}, done: null };
    if (!st.making[id].cells) st.making[id].cells = {};
    fn(st.making[id]);
  }, { quiet });
}

// What the student has written for an exercise, as plain text (for the papers page).
export function written(ex, rec) {
  if (!rec) return '';
  if (ex.kind === 'emend') return emendWritten(ex, rec, store.get());
  if (ex.kind !== 'table') return rec.text || '';
  const out = [];
  for (const row of tableRows(ex)) {
    let mine = false;
    const parts = [];
    for (const c of ex.table.columns) {
      const given = row.cells?.[c.id];
      const v = given !== undefined ? cellText(given) : (rec.cells?.[`${row.id}.${c.id}`] || '').trim();
      if (given === undefined && v) mine = true;
      if (v) parts.push(`${c.label}: ${v}`);
    }
    if (mine) out.push(parts.join('\n'));
  }
  return out.join('\n\n');
}

// A cell we give the student is a string, or a line or two cut from a book.
function cellText(given) {
  if (typeof given === 'string') return given;
  return (given.lines || given.paras || []).filter(Boolean).join(' / ');
}

function cellNode(given) {
  if (typeof given === 'string') return document.createTextNode(given);
  if (given.lines) return h('div', { class: 'verse cell-quote' }, given.lines.filter(Boolean).map((l) => h('div', { class: 'vl' }, l)));
  return h('div', { class: 'cell-quote' }, (given.paras || []).map((x) => h('p', null, x)));
}

function tableRows(ex) {
  if (ex.table.rows) return ex.table.rows;
  return Array.from({ length: ex.table.count }, (_, i) => ({ id: `r${i + 1}`, cells: {} }));
}

// A box counts once it holds a word, so that a stray mark does not open the key.
function filledCells(ex, rec) {
  let n = 0;
  for (const row of tableRows(ex)) {
    for (const c of ex.table.columns) {
      if (row.cells?.[c.id] !== undefined) continue;
      if (holdsWord(rec.cells?.[`${row.id}.${c.id}`])) n++;
    }
  }
  return n;
}

// The checks set for an exercise. A translation with none set is held to
// a number of lines.
function checkOf(ex) {
  if (ex.kind === 'translate' && !ex.check) return { lines: { min: translateMin(ex) } };
  return ex.check;
}

// `passage` is the passage of an emend exercise that is on the page.
export function isReady(ex, rec, passage) {
  if (ex.kind === 'emend') return emendCount(passage || passageFor(ex, store.get()), rec) >= ex.emend.min;
  if (ex.kind === 'table') return filledCells(ex, rec) >= ex.table.min;
  return allOk(rec.text || '', checkOf(ex));
}

// A range in words: "13", "250–400", "at least 12", "at most 15".
function rangeLabel(t, r) {
  if (r.exact !== undefined) return String(r.exact);
  if (r.min !== undefined && r.max !== undefined) return `${r.min}–${r.max}`;
  if (r.min !== undefined) return t('making.range.least', { n: r.min });
  return t('making.range.most', { n: r.max });
}

function poemLines(ex) {
  return ex.translate.lines.filter(Boolean).length;
}

// The fewest lines a translation may have where the exercise sets no
// number of its own: two fewer than the poem.
function translateMin(ex) {
  return Math.max(1, poemLines(ex) - 2);
}

// What the site checks, a tick or a cross to each line of it, and under
// the list the sentence that leaves the other rules to the student.
function checklist(t, items, { rest = true } = {}) {
  const frag = document.createDocumentFragment();
  if (!items.length) return frag;
  frag.appendChild(h('ul', { class: 'checklist' }, items.map(([ok, label]) => h('li', { class: ok ? 'ok' : 'no' }, label))));
  if (rest) frag.appendChild(p(t('making.check.rest'), 'small muted'));
  return frag;
}

export function checkPanel(t, text, ex) {
  const box = h('div', { class: 'checks', 'aria-live': 'polite' });
  const items = [];
  for (const c of runChecks(text, checkOf(ex))) {
    // Nothing written yet: a rule about each line has nothing to judge.
    if (!text.trim() && c.id !== 'lines' && c.id !== 'words') continue;
    // A translation is held against the poem, so its count names the poem's.
    if (c.id === 'lines') items.push([c.ok, ex.kind === 'translate' ? t('making.check.lines.poem', { have: c.have, n: poemLines(ex) }) : t('making.check.lines', { have: c.have, want: rangeLabel(t, c.range) })]);
    else if (c.id === 'words') items.push([c.ok, t('making.check.words', { have: c.have, want: rangeLabel(t, c.range) })]);
    else if (c.id === 'each') {
      // a line over the limit is named, with its count
      const over = c.over.map((o) => t('making.check.each.line', { n: o.words, line: o.line, words: o.words })).join(', ');
      items.push([c.ok, c.ok ? t('making.check.each', { have: c.have, want: c.want, limit: c.max }) : t('making.check.each.no', { limit: c.max, lines: over })]);
    } else if (c.id === 'endWords') items.push([c.ok, c.ok ? t('making.check.endWords.ok') : t('making.check.endWords.no')]);
    else if (c.id === 'forbid') items.push([c.ok, c.ok ? t('making.check.forbid.ok') : t('making.check.forbid.no', { words: c.found.join(', ') })]);
    else if (c.id === 'noPeriod') {
      // one line of the list for each line of the work, once that line is written
      for (const n of c.seen) items.push(c.found.includes(n) ? [false, t('making.check.noPeriod.no', { line: n })] : [true, t('making.check.noPeriod.ok', { line: n })]);
    } else if (c.id === 'runOn' && c.ready) {
      // the lines by number: "3, 6, 9 and 12"
      const lines = c.lines.length > 1 ? t('making.check.runOn.lines', { most: c.lines.slice(0, -1).join(', '), last: c.lines[c.lines.length - 1] }) : String(c.lines[0]);
      items.push([c.ok, c.ok ? t('making.check.runOn.ok', { lines }) : t('making.check.runOn.no', { lines })]);
    }
  }
  box.appendChild(checklist(t, items));
  if (ex.check && ex.check.syllables && text.trim()) {
    // A rough count, to help the ear. It does not decide anything.
    const lines = textLines(text);
    const tbl = h('table', { class: 'tight' }, h('thead', null, h('tr', null, h('th', null, t('making.syll.line')), h('th', null, t('making.syll.want')), h('th', null, t('making.syll.have')))));
    const tb = h('tbody');
    ex.check.syllables.forEach((want, i) => {
      if (lines[i] === undefined) return;
      tb.appendChild(h('tr', null, h('td', null, String(i + 1)), h('td', null, String(want)), h('td', null, String(countSyllables(lines[i])))));
    });
    tbl.appendChild(tb);
    box.appendChild(tbl);
    box.appendChild(p(t('making.syll.note'), 'small muted'));
  }
  if (ex.check && ex.check.scheme && text.trim()) {
    const groups = rhymeGroups(text, ex.check.scheme);
    const tbl = h('table', { class: 'tight' }, h('thead', null, h('tr', null, h('th', null, t('making.rhyme.letter')), h('th', null, t('making.rhyme.words')))));
    const tb = h('tbody');
    for (const g of groups) tb.appendChild(h('tr', null, h('td', null, g.letter), h('td', null, g.words.join(' · '))));
    tbl.appendChild(tb);
    box.appendChild(tbl);
    box.appendChild(p(t('making.rhyme.note'), 'small muted'));
  }
  return box;
}

function quoted(model) {
  const frag = document.createDocumentFragment();
  const m = h('div', { class: 'quoted', lang: model.lang || null });
  if (model.lines) {
    const v = h('div', { class: 'verse' });
    let n = 1;
    for (const l of model.lines) {
      if (l === '') v.appendChild(h('div', { class: 'gap' }));
      else if (typeof l === 'object') v.appendChild(h('div', { class: 'vl-note' }, l.gap));
      else { v.appendChild(h('div', { class: 'vl', 'data-n': model.numbers ? String(n) : null }, l)); n++; }
    }
    m.appendChild(v);
  } else for (const para of model.paras || []) m.appendChild(typeof para === 'object' ? h('p', { class: 'gap-note' }, para.gap) : h('p', null, para));
  frag.appendChild(m);
  if (model.cite) frag.appendChild(h('p', { class: 'source' }, prose(model.cite)));
  return frag;
}

function chartTable(ex, rec, { editable, onInput }) {
  const cols = ex.table.columns;
  const table = h('table', { class: 'chart' });
  table.appendChild(h('thead', null, h('tr', null, cols.map((c) => h('th', { scope: 'col', style: c.width ? { width: c.width } : null }, c.label)))));
  const tb = h('tbody');
  for (const row of tableRows(ex)) {
    const tr = h('tr');
    for (const c of cols) {
      const given = row.cells?.[c.id];
      if (given !== undefined) {
        tr.appendChild(h(c === cols[0] ? 'th' : 'td', { scope: c === cols[0] ? 'row' : null, 'data-label': c.label }, cellNode(given)));
        continue;
      }
      const key = `${row.id}.${c.id}`;
      if (!editable) {
        tr.appendChild(h('td', { 'data-label': c.label, class: 'mine' }, rec.cells?.[key] || ''));
        continue;
      }
      const first = row.cells?.[cols[0].id] !== undefined ? cellText(row.cells[cols[0].id]) : '';
      const ta = h('textarea', { rows: String(c.rows || 2), 'aria-label': first ? `${first}: ${c.label}` : c.label, spellcheck: c.plain ? 'false' : 'true' });
      ta.value = rec.cells?.[key] || '';
      ta.addEventListener('input', () => onInput(key, ta.value));
      tr.appendChild(h('td', { 'data-label': c.label }, ta));
    }
    tb.appendChild(tr);
  }
  table.appendChild(tb);
  return h('div', { class: 'scroll-x' }, table);
}

function keyTable(key, columns) {
  const table = h('table', { class: 'chart key' });
  table.appendChild(h('thead', null, h('tr', null, columns.map((c) => h('th', { scope: 'col', style: c.width ? { width: c.width } : null }, c.label)))));
  const tb = h('tbody');
  for (const row of key.rows) tb.appendChild(h('tr', null, columns.map((c, i) => h(i === 0 ? 'th' : 'td', { scope: i === 0 ? 'row' : null, 'data-label': c.label }, prose(row[c.id] || '')))));
  table.appendChild(tb);
  return h('div', { class: 'scroll-x' }, table);
}

export async function render(ctx, n, which) {
  const { t, course } = ctx;
  const unit = unitByNumber(course, n);
  const list = unit ? exercises(unit) : [];
  const ex = list[which ? Number(which) - 1 : 0];
  if (!ex) return { node: h('div', { class: 'col' }, h('h1', { tabindex: '-1' }, t('notfound.title')), p(t('notfound.body'))), title: t('notfound.title') };
  const wide = ex.kind === 'table' || ex.kind === 'translate';
  const reveals = (ex.kind === 'translate' && ex.translate.published) || ex.table?.key || ex.answer || ex.kind === 'emend';
  const box = h('div', { class: wide ? 'col-wide' : 'col' });
  const head = h('div', { class: 'col' });
  head.appendChild(h('p', { class: 'crumbs' }, h('a', { href: `#/unit/${unit.n}` }, t('unit.short', { n: unit.n })), h('span', { class: 'sep' }, '/'), prose(unit.title)));
  head.appendChild(h('p', { class: 'kicker' }, t('making.kicker')));
  head.appendChild(h('h1', { tabindex: '-1' }, prose(ex.title)));
  for (const para of ex.brief) head.appendChild(p(para));
  if (ex.rules && ex.rules.length) {
    const ul = h('ol', { class: 'rules' });
    for (const r of ex.rules) ul.appendChild(h('li', null, prose(r)));
    head.appendChild(ul);
  }
  // While the examination's clock runs, a passage of a canto stays shut
  // here as the cantos do on the By heart pages.
  const shut = !!store.get().final.sitting && (ex.kind === 'emend' || !!ex.model?.canto);
  if (ex.model && !shut) head.appendChild(quoted(ex.model));
  box.appendChild(head);
  if (shut) {
    head.appendChild(p(examOver(store.get()) ? t('exam.over.shut') : ex.kind === 'emend' ? t('heart.exam.running') : t('exam.shut')));
    return { node: box, title: `${ex.title} · ${unit.title}` };
  }

  // A passage to emend is kept version by version. The address may ask
  // for a version by name (?v=longfellow); otherwise it is the one set
  // for the cantos. Its marks and the day it was finished are its own.
  const here = `#/unit/${unit.n}/making${which ? `/${which}` : ''}`;
  const asked = new URLSearchParams(location.hash.split('?')[1] || '').get('v');
  const passage = ex.kind === 'emend' ? passageFor(ex, store.get(), asked) : null;
  const doneOn = (rec) => (passage ? emendDone(ex, rec, passage.id) : rec.done);

  const work = h('div');
  box.appendChild(work);
  const tail = h('div', { class: 'col' });
  box.appendChild(tail);
  const gate = h('div', { class: 'checks' });
  const bar = h('div', { class: 'row' });
  // Not in the narrow column: a chart shown for comparison is as wide as the student's own.
  const after = h('div');
  box.appendChild(after);

  const drawBar = () => {
    clear(gate);
    clear(bar);
    const rec = record(ex.id);
    const done = doneOn(rec);
    if (done) {
      bar.appendChild(h('span', null, t('making.done.on', { date: medium(done) })));
      bar.appendChild(h('button', { type: 'button', class: 'quiet', onClick: () => { save(ex.id, (r) => { if (passage) emendReopen(ex, r, passage.id); else r.done = null; }, false); drawAll(); } }, t('making.undo')));
    } else {
      // A chart and a passage have no box with a list under it, so what is counted is listed here.
      if (ex.kind === 'table') { const have = filledCells(ex, rec); gate.appendChild(checklist(t, [[have >= ex.table.min, t('making.check.boxes', { have, n: ex.table.min })]])); }
      // (the corrections themselves are checked once the passage is finished, so nothing is said of the rest)
      if (passage) { const have = emendCount(passage, rec); gate.appendChild(checklist(t, [[have >= ex.emend.min, t('making.check.marks', { have, n: ex.emend.min })]], { rest: false })); }
      const ok = isReady(ex, rec, passage);
      // Once finished, the line that says so goes to the head of the window, with what is now shown under it.
      bar.appendChild(h('button', { type: 'button', class: 'primary', disabled: !ok, onClick: () => { save(ex.id, (r) => { if (passage) emendFinish(ex, r, passage.id, today()); else r.done = today(); }, false); drawAll(); tail.scrollIntoView({ block: 'start' }); } }, reveals ? t('making.done.compare') : t('making.done')));
      // The reason stands beside the button from the start, before anything is written.
      if (!ok) {
        let why = t('making.notyet');
        // The box of a translation is a long way up the page, so the numbers are given again here.
        const short = ex.kind === 'translate' ? runChecks(rec.text || '', checkOf(ex)).find((c) => c.id === 'lines' && !c.ok) : null;
        if (short) why = t('making.notyet.translate', { n: poemLines(ex), have: short.have });
        bar.appendChild(h('span', { class: 'muted small' }, why));
      }
    }
    bar.appendChild(h('a', { class: 'btn quiet', href: `#/unit/${unit.n}` }, t('unit.back', { n: unit.n })));
  };

  // What is shown once the work is done: the key to a chart of fact, or
  // the published translation.
  const drawAfter = () => {
    clear(after);
    const rec = record(ex.id);
    if (!doneOn(rec)) return;
    // Words are set in the narrow column, a run of them to one box.
    let col = null;
    const add = (node) => { if (!col) { col = h('div', { class: 'col' }); after.appendChild(col); } col.appendChild(node); };
    if (ex.kind === 'table' && ex.table.key) {
      add(h('h2', null, prose(ex.table.key.title)));
      for (const para of ex.table.key.intro || []) add(p(para));
      // the chart for comparison, at the full width the student's own chart has
      after.appendChild(keyTable(ex.table.key, ex.table.key.columns || ex.table.columns));
      col = null;
      for (const para of ex.table.key.after || []) add(p(para));
    }
    // A chart with no key can still have a word said after it.
    if (ex.kind === 'table') for (const para of ex.table.after || []) add(p(para));
    if (ex.kind === 'translate') {
      if (ex.translate.published) {
        add(h('h2', null, t('making.translate.published')));
        add(quoted(ex.translate.published));
      }
      for (const para of ex.translate.after || []) add(p(para));
    }
    if (passage) add(emendAfter(t, ex, passage, rec));
    if (ex.answer) {
      add(h('h2', null, prose(ex.answer.title)));
      add(quoted(ex.answer));
      for (const para of ex.answer.after || []) add(p(para));
    }
    if (ex.reflect) {
      add(h('h3', null, prose(ex.reflect)));
      const ta = h('textarea', { rows: '6', 'aria-label': plain(ex.reflect) });
      ta.value = rec.note || '';
      ta.addEventListener('input', () => save(ex.id, (r) => { r.note = ta.value; }));
      add(ta);
      // the same sentence as stands by the note on Missing words
      add(p(t('making.reflect.saved'), 'small muted'));
    }
    // The bar with the way back is by now a long way up the page.
    if (after.childNodes.length) add(h('div', { class: 'row' }, h('a', { class: 'btn', href: `#/unit/${unit.n}` }, t('unit.back', { n: unit.n }))));
  };

  const drawWork = () => {
    clear(work);
    const rec = record(ex.id);
    if (passage) {
      const set = versionSet(ex, store.get());
      work.appendChild(emendWork(t, ex, passage, rec, store.get(), {
        editable: !doneOn(rec),
        // (work finished from another tab is not written over from this one)
        onChange: (key, value) => { save(ex.id, (r) => { if (doneOn(r)) return; if (value === undefined) delete r.cells[key]; else r.cells[key] = value; }); drawBar(); },
        link: (id) => (id === set ? here : `${here}?v=${id}`),
      }));
      return;
    }
    if (ex.kind === 'table') {
      work.appendChild(chartTable(ex, rec, {
        editable: !rec.done,
        onInput: (key, value) => { save(ex.id, (r) => { if (!r.done) r.cells[key] = value; }); drawBar(); },
      }));
      return;
    }
    const col = h('div', { class: ex.kind === 'translate' ? 'translate' : 'col' });
    if (ex.kind === 'translate') {
      const tr = ex.translate;
      const left = h('div', { class: 'tr-source' });
      left.appendChild(h('h2', null, prose(tr.heading)));
      left.appendChild(quoted({ lines: tr.lines, cite: tr.cite, lang: tr.lang, numbers: true }));
      const gl = h('div', { class: 'glossary' });
      gl.appendChild(h('h3', null, t('making.translate.words')));
      for (const para of tr.wordsIntro || []) gl.appendChild(p(para, 'small muted'));
      tr.glossary.forEach((entries, i) => {
        // the line's number stands over its list, and not inside it
        gl.appendChild(h('h4', { class: 'gl-line' }, t('making.translate.line', { n: i + 1 })));
        const dl = h('dl', null);
        for (const [w, d] of entries) dl.appendChild(h('div', { class: 'gl-entry' }, h('dt', { lang: tr.lang }, w), h('dd', null, d)));
        gl.appendChild(dl);
      });
      left.appendChild(gl);
      col.appendChild(left);
    }
    const right = h('div', { class: ex.kind === 'translate' ? 'tr-mine' : null });
    if (ex.kind === 'translate') right.appendChild(h('h2', null, t('making.translate.yours')));
    const verseLike = ex.kind === 'verse' || ex.kind === 'translate';
    const ta = h('textarea', { rows: verseLike ? '16' : '14', class: verseLike ? 'verse-in' : '', 'aria-label': t('making.field'), spellcheck: verseLike ? 'false' : 'true', readonly: rec.done ? true : null });
    ta.value = rec.text || '';
    const panel = h('div');
    const count = h('div', { class: 'count' });
    const check = checkOf(ex);
    const drawPanel = () => {
      clear(panel);
      if (check) panel.appendChild(checkPanel(t, ta.value, ex));
      // Lines are counted where the rule is about lines, and words where it is about words.
      const nWords = wordCount(ta.value);
      count.textContent = check && check.lines && !check.words ? t('n.lines', { n: textLines(ta.value).length }) : t('n.words', { n: nWords, words: num(nWords) });
    };
    let timer = null;
    ta.addEventListener('input', () => {
      save(ex.id, (r) => { if (!r.done) r.text = ta.value; });
      clearTimeout(timer);
      timer = setTimeout(() => { drawPanel(); drawBar(); }, 250);
    });
    right.appendChild(ta);
    right.appendChild(count);
    right.appendChild(panel);
    col.appendChild(right);
    work.appendChild(col);
    drawPanel();
  };

  const drawAll = () => { drawWork(); drawBar(); drawAfter(); };
  tail.appendChild(gate);
  tail.appendChild(bar);
  if (ex.source) box.appendChild(h('div', { class: 'col' }, h('div', { class: 'note' }, ex.source.map((x) => p(x)))));
  drawAll();
  // The exercise's own record, and the two things that can shut or change its passage.
  ctx.follow((st) => [st.making[ex.id], !!st.final.sitting, st.cantoVersion]);
  return { node: box, title: `${ex.title} · ${unit.title}` };
}
