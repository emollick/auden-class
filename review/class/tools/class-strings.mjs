// Walks content/class.mjs and prints every string of the page with its path, as JSON lines.
//   node review/class/tools/class-strings.mjs > <scratch>/class-strings.jsonl
import page from '../../../content/class.mjs';
const out = [];
const walk = (v, path) => {
  if (typeof v === 'string') { out.push({ path, text: v }); return; }
  if (Array.isArray(v)) { v.forEach((x, i) => walk(x, `${path}[${i}]`)); return; }
  if (v && typeof v === 'object') for (const k of Object.keys(v)) walk(v[k], path ? `${path}.${k}` : k);
};
walk(page, '');
for (const o of out) console.log(JSON.stringify(o));
