// An exercise of the "emend" kind: a passage in which some words have been
// changed for others. The student marks the words that are wrong and
// writes what should stand there. Where a passage is given for each
// version of the cantos, the work in each version is kept apart: its
// marks, and the day it was finished.

import { h, p, prose } from '../lib/dom.js';
import { normWord } from '../lib/text.js';
import { medium } from '../lib/dates.js';
// `t` is handed to the functions that draw; the one that only writes text out takes it from here.
import { cantoVersion, t } from '../lib/course.js';

const WORD = /[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu;

// Which passage belongs to the version now set for the cantos.
export function versionSet(ex, state) {
  const em = ex.emend;
  if (!em.versions) return 'x';
  const v = cantoVersion(state);
  return em.versions[v] ? v : Object.keys(em.versions)[0];
}

// The passage to show: the one asked for by name, if there is such a
// version, and otherwise the one for the version set for the cantos.
export function passageFor(ex, state, asked) {
  const em = ex.emend;
  if (!em.versions) return { id: 'x', ...em };
  const id = asked && em.versions[asked] ? asked : versionSet(ex, state);
  return { id, ...em.versions[id] };
}

// Rows of tokens: { word, key, swap } for a word, { text } for what lies between.
function rows(passage, { restored = false } = {}) {
  const out = [];
  let r = -1;
  for (const segs of passage.lines) {
    if (!segs.length) { out.push(null); continue; }
    r++;
    let k = 0;
    const row = [];
    for (const seg of segs) {
      if (typeof seg === 'number') {
        row.push({ word: restored ? passage.right[seg] : passage.wrong[seg], key: `${passage.id}:${r}.${k++}`, swap: seg });
        continue;
      }
      let pos = 0;
      for (const m of seg.matchAll(WORD)) {
        if (m.index > pos) row.push({ text: seg.slice(pos, m.index) });
        row.push({ word: m[0], key: `${passage.id}:${r}.${k++}`, swap: null });
        pos = m.index + m[0].length;
      }
      if (pos < seg.length) row.push({ text: seg.slice(pos) });
    }
    out.push(row);
  }
  return out;
}

function marked(passage, rec) {
  const prefix = `${passage.id}:`;
  return Object.entries(rec.cells || {}).filter(([k]) => k.startsWith(prefix));
}

// The corrections written in a passage: marks with a word to them.
function written(passage, rec) {
  return new Map(marked(passage, rec).filter(([, v]) => (v || '').trim()));
}

export function emendCount(passage, rec) {
  return written(passage, rec).size;
}

// The day the exercise was finished, for each version it was finished
// in: { temple: '2026-10-02' }. `done` is the older field and still
// governs: with no date there, the exercise is finished in no version.
// A record with a date there and no version named (as every record was
// before the versions were kept apart) is read as finished in each
// version that holds enough corrections to have been finished.
export function emendDates(ex, rec) {
  const em = ex.emend;
  if (!rec.done) return {};
  if (!em.versions) return { x: rec.done };
  if (rec.doneIn && typeof rec.doneIn === 'object' && Object.keys(rec.doneIn).length) return rec.doneIn;
  const out = {};
  for (const id of Object.keys(em.versions)) if (emendCount({ id }, rec) >= em.min) out[id] = rec.done;
  return out;
}

export function emendDone(ex, rec, id) {
  return emendDates(ex, rec)[id] || null;
}

// The rest of the site reads `done`, so it holds a date for as long as
// the exercise is finished in any version.
function setDates(ex, rec, dates) {
  if (ex.emend.versions) rec.doneIn = dates;
  rec.done = Object.values(dates).sort().pop() || null;
}

export function emendFinish(ex, rec, id, date) {
  setDates(ex, rec, { ...emendDates(ex, rec), [id]: date });
}

export function emendReopen(ex, rec, id) {
  const dates = { ...emendDates(ex, rec) };
  delete dates[id];
  setDates(ex, rec, dates);
}

// What the student changed, as plain text (for the papers page). Work in
// more than one version is given version by version, each under its name.
export function emendWritten(ex, rec, state) {
  const em = ex.emend;
  const set = versionSet(ex, state);
  const ids = em.versions ? [set, ...Object.keys(em.versions).filter((id) => id !== set)] : ['x'];
  const dates = emendDates(ex, rec);
  const blocks = [];
  for (const id of ids) {
    const passage = passageFor(ex, state, id);
    const mine = written(passage, rec);
    if (!mine.size) continue;
    const out = [];
    for (const row of rows(passage)) {
      if (!row) continue;
      for (const tok of row) if (tok.word && mine.has(tok.key)) out.push(`${tok.word} → ${mine.get(tok.key).trim()}`);
    }
    blocks.push({ id, text: out.join('\n') });
  }
  if (blocks.length < 2) return blocks.map((b) => b.text).join('');
  // the name of a version begins a line here, so it takes a capital
  const name = (id) => t(`cantos.version.${id}.short`).replace(/^\p{Ll}/u, (c) => c.toUpperCase());
  return blocks.map((b) => `${name(b.id)} · ${dates[b.id] ? t('making.done.on', { date: medium(dates[b.id]) }) : t('notebook.draft')}\n${b.text}`).join('\n\n');
}

function line(passage, row, cells) {
  const el = h(passage.verse ? 'div' : 'p', { class: passage.verse ? 'vl' : null });
  for (const cell of cells(row)) el.appendChild(cell);
  return el;
}

function body(passage, list, cells) {
  const box = h('div', { class: passage.verse ? 'quoted emend verse' : 'quoted emend' });
  for (const row of list) box.appendChild(row ? line(passage, row, cells) : h('div', { class: 'gap' }));
  return box;
}

// How a correction stands against the book: right, wrong, or made to a word that was sound.
function verdict(passage, tok, got) {
  if (tok.swap === null) return 'sound';
  return normWord(got) === normWord(passage.right[tok.swap]) ? 'right' : 'wrong';
}

// The verdict in a word, so that it does not rest on weight or color alone.
// The space before it is not drawn; it keeps the words apart when the page is read aloud or copied.
function tag(t, kind, word) {
  return h('span', { class: 'em-tag' }, ' ', kind === 'right' ? t('making.emend.tag.right') : kind === 'wrong' ? t('making.emend.tag.wrong') : t('making.emend.tag.sound', { word }));
}

// The passage to be worked on. onChange(key, value|undefined) saves a
// mark; link(id) is the address of the exercise in another version.
export function emendWork(t, ex, passage, rec, state, { editable, onChange, link }) {
  const mine = new Map(marked(passage, rec));
  const box = h('div', { class: 'col' });
  if (ex.emend.versions) {
    const name = (id) => t(`cantos.version.${id}.short`);
    const set = versionSet(ex, state);
    if (passage.id === set) {
      box.appendChild(p(t('making.emend.version', { version: name(set) })));
      // Finished in another version: say so, and leave this one untouched.
      for (const [id, date] of Object.entries(emendDates(ex, rec))) {
        if (id === set || !ex.emend.versions[id]) continue;
        box.appendChild(h('p', null, t('making.emend.elsewhere', { version: name(id), date: medium(date) }), ' ', h('a', { href: link(id) }, t('making.emend.elsewhere.see'))));
      }
    } else {
      box.appendChild(h('p', null, t('making.emend.version.other', { version: name(passage.id), now: name(set) }), ' ', h('a', { href: link(set) }, t('making.emend.version.back'))));
    }
  }
  if (editable) box.appendChild(p(t('making.emend.how'), 'small muted'));
  const cells = (row) => row.map((tok) => {
    if (!tok.word) return document.createTextNode(tok.text);
    const on = mine.has(tok.key);
    if (!editable) {
      // Finished: each correction stands beside the word it replaces, and is called right or wrong.
      // The verdict is set inside the correction, so that a line never breaks between the two.
      const got = (mine.get(tok.key) || '').trim();
      if (!got) return document.createTextNode(tok.word);
      const kind = verdict(passage, tok, got);
      return h('span', { class: 'em-word em-done' }, h('span', { class: 'em-struck' }, tok.word), ' ', h('span', { class: kind === 'right' ? 'em-mine right' : 'em-mine' }, got, tag(t, kind, tok.word)));
    }
    const wrap = h('span', { class: on ? 'em-word on' : 'em-word' });
    const btn = h('button', { type: 'button', class: 'em-btn', 'aria-pressed': on ? 'true' : 'false' }, tok.word);
    wrap.appendChild(btn);
    const addInput = (focus) => {
      const input = h('input', { type: 'text', class: 'em-in', 'aria-label': t('making.emend.field', { word: tok.word }), autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', size: String(Math.max(6, tok.word.length + 2)) });
      input.value = mine.get(tok.key) || '';
      input.addEventListener('input', () => { mine.set(tok.key, input.value); onChange(tok.key, input.value); });
      wrap.appendChild(input);
      if (focus) input.focus();
    };
    if (on) addInput(false);
    btn.addEventListener('click', () => {
      if (mine.has(tok.key)) {
        mine.delete(tok.key);
        onChange(tok.key, undefined);
        wrap.classList.remove('on');
        btn.setAttribute('aria-pressed', 'false');
        const input = wrap.querySelector('input');
        if (input) input.remove();
      } else {
        mine.set(tok.key, '');
        onChange(tok.key, '');
        wrap.classList.add('on');
        btn.setAttribute('aria-pressed', 'true');
        addInput(true);
      }
    });
    return wrap;
  });
  box.appendChild(body(passage, rows(passage), cells));
  if (passage.cite) box.appendChild(h('p', { class: 'source' }, prose(passage.cite)));
  return box;
}

// What is shown when the work is handed in: the count, the changes one by
// one, and the passage as the book has it.
export function emendAfter(t, ex, passage, rec) {
  const mine = written(passage, rec);
  const frag = document.createDocumentFragment();
  const list = rows(passage);
  let found = 0;
  let exact = 0;
  const sound = [];
  const changes = [];
  for (const row of list) {
    if (!row) continue;
    for (const tok of row) {
      if (!tok.word) continue;
      const got = (mine.get(tok.key) || '').trim();
      if (tok.swap === null) { if (got) sound.push(tok.word); continue; }
      const ok = !!got && verdict(passage, tok, got) === 'right';
      if (got) found++;
      if (ok) exact++;
      changes.push({ wrong: tok.word, right: passage.right[tok.swap], got, ok });
    }
  }
  frag.appendChild(h('h2', null, t('making.emend.result.title')));
  frag.appendChild(p(t('making.emend.result', { n: changes.length, found, exact })));
  // The sound words are the book's own, so they can be set in italics without being read as markup.
  if (sound.length) frag.appendChild(p(t('making.emend.result.sound', { n: sound.length, list: sound.map((w) => `*${w}*`).join(', ') })));
  const heads = [t('making.emend.col.wrong'), t('making.emend.col.right'), t('making.emend.col.yours')];
  const table = h('table', { class: 'chart key emend-key' });
  table.appendChild(h('thead', null, h('tr', null, heads.map((x) => h('th', { scope: 'col' }, x)))));
  const tb = h('tbody');
  for (const c of changes) {
    tb.appendChild(h('tr', null,
      h('td', { 'data-label': heads[0] }, c.wrong),
      h('th', { scope: 'row', 'data-label': heads[1] }, c.right),
      c.got
        ? h('td', { class: c.ok ? 'ok' : 'no', 'data-label': heads[2] }, c.got, tag(t, c.ok ? 'right' : 'wrong'))
        : h('td', { 'data-label': heads[2] }, t('making.emend.unmarked')),
    ));
  }
  table.appendChild(tb);
  frag.appendChild(h('div', { class: 'scroll-x' }, table));
  frag.appendChild(h('h2', null, t('making.emend.true')));
  const cells = (row) => row.map((tok) => (tok.word ? (tok.swap === null ? document.createTextNode(tok.word) : h('strong', null, tok.word)) : document.createTextNode(tok.text)));
  frag.appendChild(body(passage, rows(passage, { restored: true }), cells));
  // Under the passage as the book has it, the source alone: the canto and the version.
  const where = (passage.where || '').replace(/^(Inferno|Purgatorio|Paradiso)\b/, '*$1*');
  if (ex.emend.versions && where) frag.appendChild(h('p', { class: 'source' }, prose(t('making.emend.source', { where, version: t(`cantos.version.${passage.id}.short`) }))));
  for (const para of ex.emend.after || []) frag.appendChild(p(para));
  return frag;
}
