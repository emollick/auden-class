// Missing words. At Swarthmore Auden mimeographed unfamiliar poems with
// words left out and had the class fill the blanks.

import { h, p, clear, prose } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { today } from '../lib/dates.js';
import { normWord } from '../lib/text.js';
import { unitByNumber, examOver } from '../lib/course.js';

export async function render(ctx, n) {
  const { t, course } = ctx;
  const unit = unitByNumber(course, n);
  if (!unit || !unit.words) return { node: h('div', { class: 'col' }, h('h1', { tabindex: '-1' }, t('notfound.title')), p(t('notfound.body'))), title: t('notfound.title') };
  const ex = unit.words;
  const box = h('div', { class: 'col' });
  box.appendChild(h('p', { class: 'crumbs' }, h('a', { href: `#/unit/${unit.n}` }, t('unit.short', { n: unit.n })), h('span', { class: 'sep' }, '/'), prose(unit.title)));
  box.appendChild(h('p', { class: 'kicker' }, t('words.kicker')));
  box.appendChild(h('h1', { tabindex: '-1' }, t('words.title')));
  // A passage of a canto stays shut while the examination's clock runs.
  if (ex.canto && store.get().final.sitting) {
    box.appendChild(p(examOver(store.get()) ? t('exam.over.shut') : t('exam.shut')));
    return { node: box, title: `${t('words.title')} · ${unit.title}` };
  }
  const body = h('div');
  box.appendChild(body);

  const draw = () => {
    clear(body);
    const rec = store.get().words[ex.id] || { answers: [], shown: null, note: '' };
    const shown = !!rec.shown;
    if (!shown) for (const para of t.list('words.intro')) body.appendChild(p(para));
    if (ex.setting) body.appendChild(p(ex.setting, 'muted'));

    const passage = h('div', { class: 'cloze quoted' });
    const holder = ex.verse ? h('div', { class: 'verse' }) : h('div');
    const inputs = [];
    let same = 0;
    for (const line of ex.lines) {
      if (line.length === 0) { holder.appendChild(h('div', { class: 'gap' })); continue; }
      const row = ex.verse ? h('div', { class: 'vl' }) : h('p');
      for (const seg of line) {
        if (typeof seg === 'string') { row.appendChild(document.createTextNode(seg)); continue; }
        const mine = rec.answers[seg] || '';
        if (!shown) {
          const inp = h('input', { type: 'text', class: 'blank', autocomplete: 'off', spellcheck: 'false', autocapitalize: 'off', 'aria-label': t('words.blank', { n: seg + 1 }) });
          inp.value = mine;
          inp.addEventListener('input', () => store.update((st) => {
            st.words[ex.id] = st.words[ex.id] || { answers: [], shown: null, note: '' };
            // Words fixed from another tab are not written over from this one.
            if (st.words[ex.id].shown) return;
            st.words[ex.id].answers[seg] = inp.value;
          }, { quiet: true }));
          inputs.push(inp);
          row.appendChild(inp);
        } else {
          const theirs = ex.blanks[seg];
          const isSame = normWord(mine) === normWord(theirs);
          if (isSame) same++;
          const given = h('span', { class: 'given' });
          if (isSame) given.appendChild(h('span', { class: 'yours same' }, theirs));
          else {
            // A gap left blank has no word of the student's to strike through.
            given.appendChild(h('span', { class: mine.trim() ? 'yours differs' : 'yours' }, mine.trim() || t('words.empty')));
            given.appendChild(h('span', { class: 'theirs' }, theirs));
          }
          row.appendChild(given);
        }
      }
      holder.appendChild(row);
    }
    passage.appendChild(holder);
    body.appendChild(passage);

    if (!shown) {
      // Once the book's words are shown the student's are fixed for good. So
      // the button is off until a gap is filled, and it asks once before it
      // acts, as the paper does before it is handed in.
      const confirm = h('div', { class: 'row' });
      const show = h('button', { type: 'button', class: 'primary' }, t('words.show'));
      const offer = () => {
        clear(confirm);
        show.disabled = !inputs.some((x) => x.value.trim());
        confirm.appendChild(show);
        if (show.disabled) confirm.appendChild(h('span', { class: 'muted small' }, t('words.none', { n: ex.blanks.length })));
      };
      for (const inp of inputs) inp.addEventListener('input', offer);
      show.addEventListener('click', () => {
        clear(confirm);
        confirm.appendChild(h('span', null, t('words.confirm')));
        const yes = h('button', { type: 'button', class: 'primary', onClick: () => {
          store.update((st) => {
            st.words[ex.id] = st.words[ex.id] || { answers: [], shown: null, note: '' };
            if (st.words[ex.id].shown) return;
            st.words[ex.id].answers = inputs.map((x) => x.value);
            st.words[ex.id].shown = today();
          });
          draw();
          body.scrollIntoView({ block: 'start' });
        } }, t('words.show'));
        confirm.appendChild(yes);
        const no = h('button', { type: 'button', class: 'quiet', onClick: () => { offer(); show.focus(); } }, t('words.confirm.no'));
        confirm.appendChild(no);
        // The button that was pressed is gone; the answer that changes nothing takes its place.
        no.focus();
      });
      offer();
      body.appendChild(confirm);
      body.appendChild(p(t('words.source'), 'source'));
      return;
    }

    body.appendChild(h('div', { class: 'verdict' },
      h('p', { class: 'figure' }, t('words.result', { same, total: ex.blanks.length })),
      h('p', null, prose(ex.cite)),
    ));
    for (const para of t.list('words.after')) body.appendChild(p(para));
    const ta = h('textarea', { rows: '7', 'aria-label': t('words.note.label') });
    ta.value = rec.note || '';
    ta.addEventListener('input', () => store.update((st) => { st.words[ex.id].note = ta.value; }, { quiet: true }));
    body.appendChild(ta);
    if (ex.after) body.appendChild(h('div', { class: 'note' }, ex.after.map((x) => p(x))));
    body.appendChild(h('div', { class: 'row' }, h('a', { class: 'btn', href: `#/unit/${unit.n}` }, t('unit.back', { n: unit.n }))));
    body.appendChild(p(t('words.source'), 'source'));
  };
  draw();
  ctx.follow((st) => [st.words[ex.id], !!st.final.sitting]);
  return { node: box, title: `${t('words.title')} · ${unit.title}` };
}
