// Shape: the build of a scene, a book or the whole work, drawn in place of
// the passage. Each piece draws its own (site/js/pieces/<pieceId>.js); this
// is what stands there until it does: the facts, set out plainly.
//
//   what:  the thing the diagram shows
//   facts: the names and numbers it is drawn from
//
// A word named in `what`, in a cell or a head of the table or in a sentence of the list is put between
// asterisks (*word*), as in a caption; `what` is tidied as a caption is.

import { el, clear, marked } from './draw.js';
import { rich } from '../rich.js';

// Working notes, and the places a mark links to, are not shown in a table.
const WORKING = /^(source|sources|from|where|checked|note|notes|read|counted|method|key|at|block|blocks|row|rows)$|(Key|Source|Note)$/;
const plain = (v) => v === null || v === undefined || ['string', 'number', 'boolean'].includes(typeof v);

// a table shows names and numbers, and short lists of them; anything larger is left to the drawing
function cell(v) {
  if (v === null || v === undefined) return '';
  if (plain(v)) return String(v);
  if (Array.isArray(v)) return v.every(plain) && v.length <= 8 ? v.map(cell).join(', ') : '';
  const keys = Object.keys(v).filter((k) => !WORKING.test(k));
  return keys.length <= 4 && keys.every((k) => plain(v[k])) ? keys.map((k) => `${k}: ${cell(v[k])}`).join('; ') : '';
}

export function table(facts) {
  const rows = Array.isArray(facts) ? facts : Object.entries(facts || {}).filter(([k]) => !WORKING.test(k)).map(([k, v]) => (v && typeof v === 'object' && !Array.isArray(v) ? { '': k, ...v } : { '': k, ' ': v }));
  if (!rows.length) return null;
  if (rows.every((r) => r && typeof r === 'object' && !Array.isArray(r))) {
    // a column with nothing to show in it is left out; a column of numbers is set to the right
    const cols = [...new Set(rows.flatMap((r) => Object.keys(r)))].filter((c) => !WORKING.test(c) && rows.some((r) => cell(r[c]) !== ''));
    if (!cols.length) return null;
    // (a count a script has already set as it is printed, "1,046" or "91", is a number too)
    const numeric = (v) => typeof v === 'number' || (typeof v === 'string' && /^\d{1,3}(,\d{3})*$/.test(v));
    const isNum = (c) => rows.every((r) => r[c] === undefined || r[c] === null || r[c] === '' || numeric(r[c])) && rows.some((r) => numeric(r[c]));
    const t = el('table', { class: 'facts' });
    if (cols.some((c) => c.trim())) t.append(el('tr', {}, cols.map((c) => el('th', { class: isNum(c) ? 'num' : null }, marked(c.trim())))));
    rows.forEach((r) => t.append(el('tr', {}, cols.map((c) => el('td', { class: isNum(c) ? 'num' : null }, marked(cell(r[c])))))));
    return t;
  }
  const items = rows.map(cell).filter(Boolean);
  return items.length ? el('ul', { class: 'facts' }, items.map((x) => el('li', {}, marked(x)))) : null;
}

function on(ctx, lens) {
  clear(ctx.own);
  ctx.own.append(el('p', { class: 'shape-what' }, rich(lens.what || '')));
  const t = typeof lens.facts === 'string' ? el('p', { class: 'shape-facts' }, marked(lens.facts)) : table(lens.facts);
  if (t) ctx.own.append(t.tagName === 'TABLE' ? el('div', { class: 'facts-wrap' }, [t]) : t);
}

export default { name: 'Shape', stage: 'own', on };
