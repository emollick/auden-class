// Spot passages and questions of fact. Auden's examinations at Swarthmore
// "ran mostly to spot quotations and specific factual questions"
// (Monroe K. Spears, 1962).

import { h, p, clear, prose } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { today, medium } from '../lib/dates.js';
import { answerMatches } from '../lib/text.js';
import { verse } from '../lib/render.js';
import { unitByNumber, cantoVersion, examOver } from '../lib/course.js';
import { testItems } from '../lib/schedule.js';

// A passage of Dante comes in the version the student reads the cantos in.
function passageNode(item) {
  const it = item.versions ? item.versions[cantoVersion(store.get())] : item;
  const box = h('div', { class: 'quoted', lang: it.lang || null });
  if (it.lines) box.appendChild(verse(it.lines, { numbers: false }));
  else for (const para of it.paras || []) box.appendChild(h('p', null, para));
  return box;
}

function workOptions(course, t) {
  const sel = h('select', null, h('option', { value: '' }, t('test.choose')));
  for (const w of course.works.filter((x) => x.kind === 'required')) {
    sel.appendChild(h('option', { value: w.id }, `${w.author}: ${w.title}`));
  }
  return sel;
}

// Draw a paper of items into `body`. onMarked(result) is called once.
export function paper(ctx, body, items, { draftKey, onMarked }) {
  const { t, course } = ctx;
  const drafts = store.get().drafts[draftKey] || {};
  const save = (id, field, value) => {
    store.update((st) => {
      st.drafts[draftKey] = st.drafts[draftKey] || {};
      st.drafts[draftKey][`${id}.${field}`] = value;
    }, { quiet: true });
  };
  // The work is asked for only when the passages come from more than one.
  const askWork = new Set(items.filter((x) => x.kind === 'spot').map((x) => x.work)).size > 1;
  const rows = [];
  items.forEach((item, i) => {
    const row = h('div', { class: 'item' });
    row.appendChild(h('div', { class: 'q-n' }, String(i + 1)));
    const fields = {};
    if (item.kind === 'spot') {
      row.appendChild(passageNode(item));
      const ar = h('div', { class: 'answer-row' });
      if (askWork) {
        const sel = workOptions(course, t);
        sel.value = drafts[`${item.id}.work`] || '';
        sel.addEventListener('change', () => save(item.id, 'work', sel.value));
        fields.work = sel;
        ar.appendChild(h('label', null, h('span', null, t('test.work')), sel));
      }
      if (item.speaker) {
        const inp = h('input', { type: 'text', autocomplete: 'off', spellcheck: 'false', size: '22' });
        inp.value = drafts[`${item.id}.speaker`] || '';
        inp.addEventListener('input', () => save(item.id, 'speaker', inp.value));
        fields.speaker = inp;
        ar.appendChild(h('label', null, h('span', null, item.ask || t('test.speaker')), inp));
      }
      row.appendChild(ar);
    } else {
      row.appendChild(p(item.q));
      const inp = h('input', { type: 'text', autocomplete: 'off', spellcheck: 'false', size: '30', 'aria-label': t('test.answer') });
      inp.value = drafts[`${item.id}.a`] || '';
      inp.addEventListener('input', () => save(item.id, 'a', inp.value));
      fields.a = inp;
      row.appendChild(h('div', { class: 'answer-row' }, inp));
    }
    const key = h('div', { class: 'key', 'aria-live': 'polite' });
    row.appendChild(key);
    rows.push({ item, fields, key });
    body.appendChild(row);
  });

  // What an item is marked. One that is missed with nothing wrong in it had
  // something left blank, and that is not the same as a wrong answer.
  const blank = (f) => !f.value.trim();
  const verdict = (ok, wrong) => (ok ? t('test.right') : wrong ? t('test.wrong') : t('test.none'));
  const submit = h('button', { type: 'button', class: 'primary' }, t('test.mark'));
  const bar = h('div', { class: 'row' }, submit);
  body.appendChild(bar);
  submit.addEventListener('click', () => {
    let right = 0;
    let total = 0;
    const missed = [];
    for (const { item, fields, key } of rows) {
      clear(key);
      let itemRight = true;
      let wrong = false; // something was entered, and it is not the answer
      if (item.kind === 'spot') {
        if (fields.work) {
          total++;
          if (fields.work.value === item.work) right++;
          else { itemRight = false; if (!blank(fields.work)) wrong = true; }
        }
        const w = course.works.find((x) => x.id === item.work);
        let okSpeaker = true;
        if (item.speaker) {
          total++;
          okSpeaker = answerMatches(fields.speaker.value, item.speaker);
          if (okSpeaker) right++;
          else { itemRight = false; if (!blank(fields.speaker)) wrong = true; }
        }
        const line = h('p', { class: itemRight ? 'right' : 'wrong' });
        line.appendChild(document.createTextNode(verdict(itemRight, wrong) + ' '));
        line.appendChild(document.createTextNode(`${w.author}, `));
        line.appendChild(h('em', null, w.title));
        if (item.where) { line.appendChild(document.createTextNode(', ')); line.appendChild(prose(item.where)); }
        line.appendChild(document.createTextNode('.'));
        if (item.speaker) line.appendChild(document.createTextNode(` ${item.speakerShown || item.speaker[0]}.`));
        key.appendChild(line);
        if (item.note) key.appendChild(p(item.note, 'muted'));
      } else {
        total++;
        const ok = answerMatches(fields.a.value, item.a);
        if (ok) right++;
        else { itemRight = false; wrong = !blank(fields.a); }
        const line = h('p', { class: ok ? 'right' : 'wrong' }, `${verdict(ok, wrong)} ${item.shown || item.a[0]}.`);
        if (item.where) { line.appendChild(document.createTextNode(' (')); line.appendChild(prose(item.where)); line.appendChild(document.createTextNode(')')); }
        key.appendChild(line);
      }
      if (!itemRight) missed.push(item.id);
      for (const f of Object.values(fields)) f.disabled = true;
    }
    store.update((st) => { delete st.drafts[draftKey]; });
    submit.remove();
    onMarked({ right, total, missed }, bar);
  });
}

export async function renderUnitTest(ctx, n) {
  const { t, course, reopen } = ctx;
  const unit = unitByNumber(course, n);
  if (!unit || !unit.test) return { node: h('div', { class: 'col' }, h('h1', { tabindex: '-1' }, t('notfound.title')), p(t('notfound.body'))), title: t('notfound.title') };
  const testId = `unit${unit.n}`;
  const s = store.get();
  // Where the week offers a choice of books, only the items on the book chosen.
  const items = testItems(unit, s.choices);
  const attempts = s.tests[testId]?.attempts || [];

  const box = h('div', { class: 'col' });
  box.appendChild(h('p', { class: 'crumbs' }, h('a', { href: `#/unit/${unit.n}` }, t('unit.short', { n: unit.n })), h('span', { class: 'sep' }, '/'), prose(unit.title)));
  box.appendChild(h('p', { class: 'kicker' }, t('test.kicker')));
  box.appendChild(h('h1', { tabindex: '-1' }, t('test.title')));
  // A test that prints passages of the cantos stays shut while the examination's clock runs.
  if (s.final.sitting && items.some((x) => x.versions)) {
    box.appendChild(p(examOver(s) ? t('exam.over.shut') : t('exam.shut')));
    return { node: box, title: `${t('test.title')} · ${unit.title}` };
  }
  for (const para of t.list('test.intro')) box.appendChild(p(para));
  if (attempts.length) {
    const last = attempts[attempts.length - 1];
    // The items missed last time, each by the number it has below and by
    // what it asks. The answers are not given.
    const missed = items.map((item, i) => ({ item, k: i + 1 })).filter((x) => (last.missed || []).includes(x.item.id));
    box.appendChild(h('p', { class: 'muted' }, t('test.last', { right: last.right, total: last.total, date: medium(last.date) }), missed.length ? ` ${t('test.last.missed', { n: missed.length })}` : null));
    if (missed.length) box.appendChild(h('ol', { class: 'plain missed muted' }, missed.map(({ item, k }) => h('li', { value: String(k) }, prose(item.kind === 'spot' ? item.ask || t('test.speaker') : item.q)))));
  }
  const body = h('div');
  box.appendChild(body);
  paper(ctx, body, items, {
    draftKey: `test:${testId}`,
    onMarked: (result, bar) => {
      // The marked paper is shown this once and is not kept, so it is not drawn again.
      ctx.follow(false);
      store.update((st) => {
        st.tests[testId] = st.tests[testId] || { attempts: [] };
        st.tests[testId].attempts.push({ date: today(), ...result });
      });
      const v = h('div', { class: 'verdict' }, h('p', { class: 'figure' }, t('test.result', { right: result.right, total: result.total })));
      if (result.missed.length) v.appendChild(p(t('test.result.missed')));
      bar.parentNode.insertBefore(v, bar);
      // A new sitting begins at the top of the test, with the heading in focus.
      bar.appendChild(h('button', { type: 'button', onClick: reopen }, t('test.again')));
      bar.appendChild(h('a', { class: 'btn quiet', href: `#/unit/${unit.n}` }, t('unit.back', { n: unit.n })));
      v.scrollIntoView({ block: 'center' });
    },
  });
  box.appendChild(p(t('test.source'), 'source'));
  // The answers are saved as they are written, so the paper follows the
  // record: its answers, its marks, the items the chosen books give it, and
  // whatever shuts it or changes its passages.
  ctx.follow((st) => [st.drafts[`test:${testId}`], st.tests[testId], testItems(unit, st.choices).map((x) => x.id), !!st.final.sitting, st.cantoVersion]);
  return { node: box, title: `${t('test.title')} · ${unit.title}` };
}
