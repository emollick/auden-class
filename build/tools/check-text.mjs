// Check a text in site/data/texts against the contract in build/texts/README.md.
// usage: node build/tools/check-text.mjs <textId> [...more]
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve(import.meta.dirname, '../../site/data/texts');
const KINDS = new Set(['p', 'v', 'h', 's', 'd', 'q']);
const BAD = [
  [/Project Gutenberg|PROJECT GUTENBERG|gutenberg\.org/, 'licence or boilerplate text'],
  [/\[Illustration|\[Footnote|\[Transcriber|\[Sidenote|\[Pg ?\d|\{\d+\}/, 'editorial bracket'],
  [/(^|\s)_[A-Za-z]|[A-Za-z.,;:!?]_(\s|$)/, 'underscore italics left in'],
  [/\[\d+\]|\[[a-z]\]/, 'footnote marker'],
  [/ {2,}/, 'double space'],
  [/[\u0000-\u0008\u000b-\u001f�]/, 'control or replacement character'],
  [/\s+[,;:!?](\s|$)/, 'space before punctuation'],
  [/^\s|\s$/, 'leading or trailing space'],
  [/=[A-Za-z]|[A-Za-z]=/, 'equals-sign markup'],
  [/\*{2,}|^\* /, 'asterisk markup'],
];

let failed = false;
for (const id of process.argv.slice(2)) {
  const dir = path.join(OUT, id);
  const problems = [];
  const warn = [];
  let index;
  try {
    index = JSON.parse(fs.readFileSync(path.join(dir, 'index.json'), 'utf8'));
  } catch (e) {
    console.log(`${id}: no index.json`);
    failed = true;
    continue;
  }
  for (const k of ['id', 'author', 'title', 'source', 'parts']) if (index[k] === undefined) problems.push(`index: missing ${k}`);
  if (index.id !== id) problems.push('index: id does not match folder');
  if (!index.source || !/^https:\/\//.test(index.source.url || '') || !index.source.name) problems.push('index: source needs name and https url');
  if (!('translator' in index)) problems.push('index: translator missing (use null for an original)');
  if (typeof index.verse !== 'boolean') problems.push('index: verse must be true or false');
  const seen = new Set();
  let words = 0;
  for (const meta of index.parts || []) {
    if (!/^[a-z0-9-]+$/.test(meta.id)) problems.push(`part id ${meta.id}: use lower-case letters, digits and hyphens`);
    if (seen.has(meta.id)) problems.push(`part id ${meta.id}: duplicate`);
    seen.add(meta.id);
    if (!meta.label) problems.push(`${meta.id}: no label`);
    let part;
    try {
      part = JSON.parse(fs.readFileSync(path.join(dir, `${meta.id}.json`), 'utf8'));
    } catch (e) {
      problems.push(`${meta.id}: file missing`);
      continue;
    }
    if (!part.blocks || !part.blocks.length) { problems.push(`${meta.id}: no blocks`); continue; }
    words += meta.words;
    if (meta.words < 40) warn.push(`${meta.id}: only ${meta.words} words`);
    if (meta.words > 22000) warn.push(`${meta.id}: ${meta.words} words in one part; consider dividing`);
    part.blocks.forEach((b, i) => {
      const at = `${meta.id}[${i}]`;
      if (!KINDS.has(b.k)) { problems.push(`${at}: unknown kind ${b.k}`); return; }
      const texts = b.k === 'v' ? b.lines : [b.text];
      if (b.k === 'v' && (!Array.isArray(b.lines) || !b.lines.length)) { problems.push(`${at}: verse block with no lines`); return; }
      for (const t of texts) {
        if (typeof t !== 'string' || !t.length) { problems.push(`${at}: empty text`); continue; }
        for (const [re, what] of BAD) {
          // Square brackets that belong to the book itself are not note marks.
          if (what === 'footnote marker' && index.brackets) continue;
          if (re.test(t)) problems.push(`${at}: ${what}: ${JSON.stringify(t.slice(0, 70))}`);
        }
        if (b.k === 'v' && t.length > 110) warn.push(`${at}: verse line of ${t.length} characters`);
        if (b.k === 'p' && t.length > 9000) warn.push(`${at}: paragraph of ${t.length} characters`);
        if (b.k === 'p' && t.length < 3) warn.push(`${at}: paragraph ${JSON.stringify(t)}`);
      }
    });
  }
  const show = (list, n) => list.slice(0, n).map((x) => `    ${x}`).join('\n') + (list.length > n ? `\n    ... and ${list.length - n} more` : '');
  console.log(`${id}: ${index.parts?.length || 0} parts, ${words.toLocaleString('en')} words, ${index.pages} pages` + (index.translator ? `, tr. ${index.translator}` : ''));
  if (problems.length) { console.log(`  ${problems.length} PROBLEMS\n${show(problems, 40)}`); failed = true; }
  if (warn.length) console.log(`  ${warn.length} warnings\n${show(warn, 15)}`);
}
process.exit(failed ? 1 : 0);
