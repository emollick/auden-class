// Putting verse, prose and corrections on the page.

import { h } from './dom.js';
import { firstLetters } from './text.js';
import { t } from './course.js';

// lines: strings, '' for a gap between stanzas.
// opts.first: the number of the first line; opts.every: number every nth line;
// opts.step: how much the number grows from one line to the next (3 for a
// prose version that gives a paragraph to each tercet);
// opts.veil: 'open' | 'letters' | 'covered'; opts.prose: set as paragraphs.
export function verse(lines, opts = {}) {
  const { first = 1, every = 3, step = 1, veil = 'open', numbers = true, prose = false } = opts;
  const box = h('div', { class: 'verse' + (prose ? ' prosed' : '') + (veil === 'letters' ? ' veiled' : '') + (veil === 'covered' ? ' covered' : '') });
  if (veil === 'covered') box.setAttribute('aria-hidden', 'true');
  let n = first;
  for (const l of lines) {
    if (l === '') {
      box.appendChild(h('div', { class: 'gap' }));
      continue;
    }
    const show = numbers && (prose || n === first || n % every === 0);
    const text = veil === 'letters' ? firstLetters(l) : l;
    box.appendChild(h('div', { class: 'vl', 'data-n': show ? String(n) : null }, text));
    n += step;
  }
  return box;
}

// The text with the student's slips marked on it.
export function marked(result, refLines, { prose = false } = {}) {
  const box = h('div', { class: 'marked' + (prose ? ' prosed' : '') });
  result.lines.forEach((line, i) => {
    if (refLines[i] === '') {
      box.appendChild(h('div', { class: 'gap' }));
      return;
    }
    const row = h('div', { class: 'ml' + (line.exact ? '' : ' slip') });
    line.parts.forEach((part, k) => {
      if (k > 0) row.appendChild(document.createTextNode(' '));
      if (part.kind === 'ok') row.appendChild(document.createTextNode(part.text));
      else if (part.kind === 'missing') row.appendChild(h('ins', { class: 'missing', title: t('marked.missing') }, part.text));
      else if (part.kind === 'extra') row.appendChild(h('del', { title: t('marked.extra') }, part.text));
      else {
        if (part.typed) {
          row.appendChild(h('del', { title: t('marked.yours') }, part.typed));
          row.appendChild(document.createTextNode(' '));
        }
        row.appendChild(h('ins', { title: t('marked.text') }, part.text));
      }
    });
    box.appendChild(row);
  });
  return box;
}

// A part of a book, for reading. opts.tercets: a prose version of Dante
// that gives a paragraph to each tercet; the margin shows the line of the
// poem each paragraph begins at.
export function reading(part, opts = {}) {
  const box = h('div', { class: 'reading' + (opts.tercets ? ' tercets' : ''), lang: opts.lang || null });
  let n = 1;
  let para = 0;
  for (const b of part.blocks) {
    if (b.k === 'p') {
      // A line of nothing but asterisks is the printer's break between sections.
      const attrs = opts.tercets ? { 'data-n': String(para * 3 + 1) } : /^[*\s]+$/.test(b.text) ? { class: 'break' } : null;
      box.appendChild(h('p', attrs, b.text));
      para++;
    } else if (b.k === 'h' && /^[*\s]+$/.test(b.text)) box.appendChild(h('p', { class: 'break' }, b.text));
    else if (b.k === 'h') box.appendChild(h(b.level === 3 ? 'h3' : 'h2', null, b.text));
    else if (b.k === 's') box.appendChild(h('p', { class: 'speaker' }, b.text));
    else if (b.k === 'd') box.appendChild(h('p', { class: 'stage' }, b.text));
    else if (b.k === 'q') box.appendChild(h('blockquote', null, b.text));
    else if (b.k === 'v') {
      const v = h('div', { class: 'verse' });
      for (const l of b.lines) {
        const show = opts.numbers && (n === 1 || n % (opts.every || 3) === 0);
        v.appendChild(h('div', { class: 'vl', 'data-n': show ? String(n) : null }, l));
        n++;
      }
      box.appendChild(v);
    }
  }
  return box;
}
