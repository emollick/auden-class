// Pictures and records. Both are old enough to be in the public domain,
// and each carries a line saying where it comes from.

import { h, prose } from './dom.js';

export function plate(course, id) {
  return (course.plates || []).find((x) => x.id === id) || null;
}

export function record(course, id) {
  return (course.records || []).find((x) => x.id === id) || null;
}

// A picture with its caption. opts.small: beside a text; opts.bare: no credit line.
export function plateFigure(course, id, opts = {}) {
  const x = plate(course, id);
  if (!x) return null;
  const img = h('img', { src: `plates/${x.file}`, alt: x.alt, width: x.width, height: x.height, loading: opts.eager ? null : 'lazy', decoding: 'async' });
  const fig = h('figure', { class: 'plate' + (opts.small ? ' small' : '') + (x.height > x.width ? ' tall' : '') });
  fig.appendChild(img);
  const cap = h('figcaption');
  cap.appendChild(h('span', { class: 'cap' }, prose(x.caption)));
  if (!opts.bare && x.credit) cap.appendChild(h('span', { class: 'credit' }, ' ', prose(x.credit)));
  fig.appendChild(cap);
  return fig;
}

// A record to play on the page.
export function recordPlayer(course, id, t) {
  const x = record(course, id);
  if (!x) return null;
  const fig = h('figure', { class: 'record' });
  fig.appendChild(h('div', { class: 'disc', 'aria-hidden': 'true' }));
  const body = h('div', { class: 'record-body' });
  body.appendChild(h('p', { class: 'record-title' }, prose(x.title)));
  body.appendChild(h('p', { class: 'record-who' }, prose(x.performers)));
  const audio = h('audio', { controls: true, preload: 'none', src: `records/${x.file}` });
  audio.setAttribute('aria-label', t('record.play', { title: x.plain || x.title.replace(/\*/g, '') }));
  body.appendChild(audio);
  // The disc turns while the record plays.
  audio.addEventListener('play', () => fig.classList.add('playing'));
  for (const ev of ['pause', 'ended']) audio.addEventListener(ev, () => fig.classList.remove('playing'));
  if (x.credit) body.appendChild(h('p', { class: 'credit' }, prose(x.credit)));
  fig.appendChild(body);
  return fig;
}
