// The question. The student answers first; Auden's own view of the work
// is shown only after the paper is handed in.

import { h, p, clear, prose, num } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { today, medium } from '../lib/dates.js';
import { countWords } from '../lib/text.js';
import { unitByNumber } from '../lib/course.js';

export const MIN_WORDS = 150;

export function audenBlock(t, auden) {
  const box = h('section', { class: 'auden' });
  box.appendChild(h('h2', null, prose(auden.title || t('question.auden.title'))));
  for (const para of auden.paras) box.appendChild(p(para));
  if (auden.sources && auden.sources.length) {
    const src = h('div', { class: 'source' });
    src.appendChild(h('span', null, t('question.auden.sources') + ' '));
    auden.sources.forEach((sText, i) => {
      if (i > 0) src.appendChild(document.createTextNode(' '));
      src.appendChild(prose(sText));
    });
    box.appendChild(src);
  }
  return box;
}

function missing(t) {
  return { node: h('div', { class: 'col' }, h('h1', { tabindex: '-1' }, t('notfound.title')), p(t('notfound.body'))), title: t('notfound.title') };
}

export async function render(ctx, n, which) {
  const { t, course } = ctx;
  const unit = unitByNumber(course, n);
  const list = unit ? unit.questions || [] : [];
  if (!list.length) return missing(t);
  if (list.length > 1 && !which) return choose(ctx, unit, list);
  const q = list[which ? Number(which) - 1 : 0];
  if (!q) return missing(t);

  const box = h('div', { class: 'col' });
  const crumbs = h('p', { class: 'crumbs' }, h('a', { href: `#/unit/${unit.n}` }, t('unit.short', { n: unit.n })), h('span', { class: 'sep' }, '/'));
  if (list.length > 1) crumbs.appendChild(h('a', { href: `#/unit/${unit.n}/question` }, t('question.kicker')));
  else crumbs.appendChild(prose(unit.title));
  box.appendChild(crumbs);
  box.appendChild(h('p', { class: 'kicker' }, t('question.kicker')));
  box.appendChild(h('h1', { class: 'question', tabindex: '-1' }, prose(q.text)));
  for (const para of q.gloss || []) box.appendChild(p(para, 'lede'));
  const body = h('div');
  box.appendChild(body);

  const draw = () => {
    clear(body);
    const rec = store.get().answers[q.id] || { text: '', handedIn: null, reply: '' };
    if (!rec.handedIn) {
      for (const para of t.list('question.intro', { min: MIN_WORDS })) body.appendChild(p(para));
      const ta = h('textarea', { rows: '16', 'aria-label': t('question.field') });
      ta.value = rec.text || '';
      const count = h('div', { class: 'count', 'aria-live': 'polite' });
      const confirm = h('div', { class: 'row' });
      const hand = h('button', { type: 'button', class: 'primary' }, t('question.hand'));
      const setCount = () => {
        const n2 = countWords(ta.value);
        count.textContent = n2 < MIN_WORDS ? t('question.count.short', { n: n2, words: num(n2), min: MIN_WORDS }) : t('n.words', { n: n2, words: num(n2) });
        hand.disabled = n2 < MIN_WORDS;
      };
      ta.addEventListener('input', () => {
        // A paper handed in from another tab is not written over from this one.
        if (store.get().answers[q.id]?.handedIn) { draw(); return; }
        store.update((st) => {
          st.answers[q.id] = st.answers[q.id] || { text: '', handedIn: null, reply: '' };
          st.answers[q.id].text = ta.value;
        }, { quiet: true });
        setCount();
        clear(confirm);
        confirm.appendChild(hand);
      });
      setCount();
      hand.addEventListener('click', () => {
        clear(confirm);
        confirm.appendChild(h('span', null, t('question.confirm')));
        confirm.appendChild(h('button', { type: 'button', class: 'primary', onClick: () => {
          store.update((st) => {
            st.answers[q.id] = st.answers[q.id] || { text: '', handedIn: null, reply: '' };
            if (st.answers[q.id].handedIn) return;
            st.answers[q.id].text = ta.value;
            st.answers[q.id].handedIn = today();
          });
          draw();
          // What stands under the question is new, so the reader is put at its head.
          const first = body.firstElementChild;
          first.setAttribute('tabindex', '-1');
          first.focus({ preventScroll: true });
          body.scrollIntoView({ block: 'start' });
        } }, t('question.confirm.yes')));
        const no = h('button', { type: 'button', class: 'quiet', onClick: () => { clear(confirm); confirm.appendChild(hand); hand.focus(); } }, t('question.confirm.no'));
        confirm.appendChild(no);
        // The button that was pressed is gone; the answer that changes nothing takes its place.
        no.focus();
      });
      confirm.appendChild(hand);
      body.appendChild(ta);
      body.appendChild(count);
      body.appendChild(confirm);
      return;
    }
    body.appendChild(h('p', { class: 'muted' }, t('question.handed', { date: medium(rec.handedIn) })));
    body.appendChild(h('div', { class: 'handed' }, rec.text));
    body.appendChild(audenBlock(t, q.auden));
    body.appendChild(h('h3', null, t('question.reply.title')));
    // Where the paragraphs above say what the reply is to do, they are the
    // instruction, and the general one would only stand beside it.
    const own = q.auden.paras.some((x) => /your reply/i.test(x));
    body.appendChild(p(own ? t('question.reply.saved') : `${t('question.reply.intro')} ${t('question.reply.saved')}`));
    const ta = h('textarea', { rows: '8', 'aria-label': t('question.reply.title') });
    ta.value = rec.reply || '';
    ta.addEventListener('input', () => store.update((st) => { st.answers[q.id].reply = ta.value; }, { quiet: true }));
    body.appendChild(ta);
    body.appendChild(h('div', { class: 'row' }, h('a', { class: 'btn', href: `#/unit/${unit.n}` }, t('unit.back', { n: unit.n }))));
  };
  draw();
  // Of the record the page shows this paper and nothing else.
  ctx.follow((st) => st.answers[q.id]);
  return { node: box, title: `${t('question.kicker')} · ${unit.title}` };
}

// A week with more than one question: answer one.
function choose(ctx, unit, list) {
  const { t } = ctx;
  const s = store.get();
  const box = h('div', { class: 'col' });
  box.appendChild(h('p', { class: 'crumbs' }, h('a', { href: `#/unit/${unit.n}` }, t('unit.short', { n: unit.n })), h('span', { class: 'sep' }, '/'), prose(unit.title)));
  box.appendChild(h('p', { class: 'kicker' }, t('question.kicker')));
  box.appendChild(h('h1', { tabindex: '-1' }, t('question.choose.title')));
  for (const para of t.list('question.choose.intro', { min: MIN_WORDS })) box.appendChild(p(para));
  const ol = h('ol', { class: 'stations questions' });
  list.forEach((q, i) => {
    const rec = s.answers[q.id];
    const st = rec && rec.handedIn ? { text: t('state.handed'), cls: 'done' } : rec && rec.text ? { text: t('state.begun'), cls: '' } : { text: '', cls: '' };
    // The whole row opens the question. The words under it are set as a
    // link, so that the row is seen to be one.
    ol.appendChild(h('li', null, h('a', { href: `#/unit/${unit.n}/question/${i + 1}` },
      h('span', { class: 'st-n' }),
      h('span', { class: 'st-title' }, prose(q.text)),
      h('span', { class: 'st-state ' + st.cls }, st.text),
      h('span', { class: 'st-what' }, rec && rec.handedIn ? t('question.choose.read') : t('question.choose.open')),
    )));
  });
  box.appendChild(ol);
  box.appendChild(h('div', { class: 'row' }, h('a', { class: 'btn quiet', href: `#/unit/${unit.n}` }, t('unit.back', { n: unit.n }))));
  return { node: box, title: `${t('question.kicker')} · ${unit.title}` };
}
