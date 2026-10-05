// A copy of the site that can be shown as one private page with its files
// beside it, where a deploy is not wanted. It differs from site/ in four
// ways: the page has no document shell of its own, the stylesheet is in the
// page, the fonts come from Google Fonts, and each book is one file.
//
//   node build/tools/preview.mjs <outdir>
//
// It prints the list of files written, as JSON, on the last line.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync, rmSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const site = join(root, 'site');
const out = process.argv[2];
if (!out) { console.error('usage: node build/tools/preview.mjs <outdir>'); process.exit(1); }

rmSync(out, { recursive: true, force: true });
const files = [];
const put = (rel, data) => {
  const to = join(out, rel);
  mkdirSync(dirname(to), { recursive: true });
  writeFileSync(to, data);
  files.push(rel);
};
const copy = (rel) => {
  const to = join(out, rel);
  mkdirSync(dirname(to), { recursive: true });
  copyFileSync(join(site, rel), to);
  files.push(rel);
};
const once = (s, old, neu, what) => {
  if (s.split(old).length !== 2) { console.error(`preview: ${what}: the text to replace was not found exactly once`); process.exit(1); }
  return s.replace(old, neu);
};

// ----- the scripts; the loader of the books is given its packed form
for (const dir of ['js', 'js/lib', 'js/views']) {
  for (const f of readdirSync(join(site, dir))) {
    if (!f.endsWith('.js')) continue;
    const rel = `${dir}/${f}`;
    if (rel !== 'js/lib/texts.js') { copy(rel); continue; }
    let s = readFileSync(join(site, rel), 'utf8');
    s = once(s,
      'export function loadIndex(textId) {\n  return getJSON(`data/texts/${textId}/index.json`);\n}',
      '// Here each book is one file.\nexport function loadIndex(textId) {\n  return getJSON(`data/packs/${textId}.json`).then((pack) => pack.index);\n}',
      'loadIndex');
    s = once(s,
      'export function loadPart(textId, partId) {\n  return getJSON(`data/texts/${textId}/${partId}.json`);\n}',
      'export function loadPart(textId, partId) {\n  return getJSON(`data/packs/${textId}.json`).then((pack) => {\n    if (!pack.parts[partId]) throw new Missing(`${textId}/${partId}`);\n    return pack.parts[partId];\n  });\n}',
      'loadPart');
    put(rel, s);
  }
}

// ----- the data
copy('data/course.json');
copy('data/ui.json');
const texts = join(site, 'data', 'texts');
for (const id of readdirSync(texts).sort()) {
  const dir = join(texts, id);
  if (!statSync(dir).isDirectory()) continue;
  const pack = { index: JSON.parse(readFileSync(join(dir, 'index.json'), 'utf8')), parts: {} };
  for (const f of readdirSync(dir)) {
    if (f === 'index.json' || !f.endsWith('.json')) continue;
    pack.parts[f.slice(0, -5)] = JSON.parse(readFileSync(join(dir, f), 'utf8'));
  }
  put(`data/packs/${id}.json`, JSON.stringify(pack));
}

// ----- pictures and records
for (const dir of ['plates', 'records']) {
  if (!existsSync(join(site, dir))) continue;
  for (const f of readdirSync(join(site, dir)).sort()) copy(`${dir}/${f}`);
}

// ----- the page
const css = readFileSync(join(site, 'css', 'main.css'), 'utf8');
if (/url\(/.test(css)) { console.error('preview: the stylesheet refers to a file; it cannot be put in the page as it stands'); process.exit(1); }
const fonts = 'https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Source+Serif+4:ital,wght@0,200..900;1,200..900&display=swap';
const page = `<title>English 135</title>
<link rel="stylesheet" href="${fonts}">
<style>
${css}
/* A page shown this way cannot hand the browser a file, so saving and restoring a copy are left out. */
.keep-copy { display: none; }
</style>
<header class="masthead"><div class="masthead-in" id="masthead"></div></header>
<main id="main"></main>
<footer class="colophon" id="colophon"></footer>
<script type="module" src="js/app.js"></script>
`;
writeFileSync(join(out, 'index.html'), page);

const size = (rel) => statSync(join(out, rel)).size;
const total = files.reduce((n, f) => n + size(f), 0) + size('index.html');
const big = files.map((f) => [f, size(f)]).sort((a, b) => b[1] - a[1]).slice(0, 5);
console.error(`preview: index.html and ${files.length} files, ${(total / 1048576).toFixed(1)} MB; largest: ${big.map(([f, n]) => `${f} ${(n / 1048576).toFixed(1)} MB`).join(', ')}`);
console.log(JSON.stringify(files));
