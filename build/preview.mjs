// A private preview: the site, or one piece of it, as a page a host can wrap.
//
//   node build/preview.mjs <pieceId> <outDir> [--plates song,noises] [--title "Ariel's song"] [--file name.html]
//       one piece as a single page that carries everything with it
//
//   node build/preview.mjs --site <outDir>
//       the whole site: one page (index.html) that carries its styles, type,
//       script, and the data of every piece, the class, the shelf and the about page;
//       and beside it what is too large to carry: each book in one file
//       (data/texts/<id>.pack.json) and the records. files.json lists them.
//
// Each writes the page alone (no <html> or <body> of its own, for a host
// that wraps it) and local.html, the same inside a plain wrapper, to open
// here. Run build/pieces.mjs first.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = path.join(ROOT, 'site');
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); return i < 0 ? null : args.splice(i, 2)[1]; };
const plates = flag('plates');
const titleArg = flag('title');
const fileArg = flag('file');
const siteDir = flag('site');
const [id, outArg] = args;
const outDir = siteDir || outArg;
if (!siteDir && (!id || !outDir)) { console.error('usage: node build/preview.mjs <pieceId> <outDir> [--plates a,b] [--title "..."] [--file name.html]\n       node build/preview.mjs --site <outDir>'); process.exit(1); }

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const read = (rel) => fs.readFileSync(path.join(SITE, rel), 'utf8');
const json = (rel) => JSON.parse(read(rel));

// ---- the styles, with the faces the page uses carried inside it (all of them if `text` is null)
function styles(text) {
  const used = new Set();
  if (text) for (const ch of text) used.add(ch.codePointAt(0));
  const inRange = (range) => !text || range.split(',').some((part) => {
    const m = part.trim().match(/^U\+([0-9A-F]+)(?:-([0-9A-F]+))?$/i);
    if (!m) return true;
    const a = parseInt(m[1], 16); const z = m[2] ? parseInt(m[2], 16) : a;
    for (const c of used) if (c >= a && c <= z) return true;
    return false;
  });
  let faces = 0; let bytes = 0;
  const css = read('css/atlas.css').replace(/@font-face\{[^}]*\}\n?/g, (rule) => {
    const range = (rule.match(/unicode-range:([^;}]+)/) || [])[1];
    if (range && !inRange(range)) return '';
    return rule.replace(/url\("\.\.\/fonts\/([^"]+)"\)/, (_, file) => {
      const buf = fs.readFileSync(path.join(SITE, 'fonts', file));
      faces++; bytes += buf.length;
      return `url("data:font/woff2;base64,${buf.toString('base64')}")`;
    });
  });
  if (/url\("\.\.\//.test(css)) { console.error('a file named in the stylesheet was not carried into the page'); process.exit(1); }
  return { css, faces, bytes };
}

// ---- the script: the site's modules, each in a scope of its own, made when first asked for.
// `also` names modules that are only ever asked for by name while the page runs.
function bundle(entry, also = []) {
  const mods = new Map();
  const at = (from, spec) => path.posix.normalize(path.posix.join(path.posix.dirname(from), spec));
  function load(file) {
    if (mods.has(file)) return;
    mods.set(file, '');
    const src = read(file);
    const deps = [];
    const names = [];
    let code = src.replace(/^import\s+([^;]+?)\s+from\s+['"]([^'"]+)['"];?[ \t]*$/gm, (_, clause, spec) => {
      const dep = at(file, spec);
      deps.push(dep);
      const out = [];
      const named = clause.match(/\{([^}]*)\}/);
      const def = clause.replace(/\{[^}]*\}/, '').replace(/,/g, '').trim();
      if (def) out.push(`const ${def} = __req(${JSON.stringify(dep)}).default;`);
      if (named) out.push(`const { ${named[1].split(',').map((s) => s.trim()).filter(Boolean).map((s) => s.replace(/\s+as\s+/, ': ')).join(', ')} } = __req(${JSON.stringify(dep)});`);
      return out.join(' ');
    });
    if (/^import\s/m.test(code)) throw new Error(`${file}: an import this tool does not know`);
    code = code.replace(/^export\s+default\s+/gm, 'const __default = ');
    code = code.replace(/^export\s+((?:async\s+)?function\*?|const|let|class)\s+([A-Za-z_$][\w$]*)/gm, (_, kind, name) => { names.push([name, name]); return `${kind} ${name}`; });
    code = code.replace(/^export\s*\{([^}]*)\};?[ \t]*$/gm, (_, list) => { list.split(',').map((s) => s.trim()).filter(Boolean).forEach((s) => { const [a, b] = s.split(/\s+as\s+/); names.push([b || a, a]); }); return ''; });
    if (/^export\s/m.test(code)) throw new Error(`${file}: an export this tool does not know`);
    // modules asked for while the page runs: import('./x.js')
    for (const m of src.matchAll(/\bimport\(\s*(['"])([^'"]+)\1\s*\)/g)) deps.push(at(file, m[2]));
    code = code.replace(/\bimport\(/g, `__dyn(${JSON.stringify(path.posix.dirname(file))}, `);
    for (const d of deps) load(d);
    mods.set(file, `__def[${JSON.stringify(file)}] = function () {\n${code}\nreturn { ${names.map(([as, name]) => (as === name ? name : `${as}: ${name}`)).join(', ')}${names.length ? ', ' : ''}default: typeof __default === 'undefined' ? undefined : __default };\n};`);
  }
  load(entry);
  also.forEach(load);
  const script = `(function () {
'use strict';
const __def = {};
const __mod = {};
const __req = (file) => {
  if (!(file in __mod)) {
    if (!__def[file]) throw new Error('This page does not hold ' + file);
    __mod[file] = {};
    Object.assign(__mod[file], __def[file]());
  }
  return __mod[file];
};
const __dyn = (dir, spec) => new Promise((done, fail) => {
  const parts = [];
  for (const p of (dir + '/' + spec).split('/')) { if (p === '..') parts.pop(); else if (p && p !== '.') parts.push(p); }
  try { done(__req(parts.join('/'))); } catch (e) { fail(e); }
});
${[...mods.values()].join('\n')}
__req(${JSON.stringify(entry)});
})();`;
  if (/<\/script/i.test(script)) { console.error('the script would close its own tag'); process.exit(1); }
  return { script, count: mods.size };
}

const inline = (data) => JSON.stringify(data).replace(/</g, '\\u003c').replace(new RegExp(String.fromCharCode(0x2028), 'g'), '\\u2028').replace(new RegExp(String.fromCharCode(0x2029), 'g'), '\\u2029');
const wrapper = (page) => `<!doctype html>\n<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><style>:root{color-scheme:light;padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui,sans-serif;background:#faf9f5}img{max-width:100%}[hidden]{display:none!important}</style></head><body>\n${page}</body></html>\n`;
const kb = (n) => `${Math.round(n / 1024)} KB`;
fs.mkdirSync(outDir, { recursive: true });

if (siteDir) {
  // ---- the whole site
  const index = json('data/pieces/index.json');
  const data = {};
  for (const f of ['data/front.json', 'data/shelf.json', 'data/about.json', 'data/class.json']) data[f] = json(f);
  const own = [];
  for (const row of index) {
    const piece = json(`data/pieces/${row.id}.json`);
    data[`data/pieces/${row.id}.json`] = piece;
    if (piece.module) own.push(`js/pieces/${row.id}.js`);
    if (piece.style) { console.error(`${row.id} brings a stylesheet of its own, which this tool does not carry yet`); process.exit(1); }
  }
  const { css, faces, bytes } = styles(null);
  const { script, count } = bundle('js/main.js', own);
  const shell = `<header class="top">
  <a class="name" href="#/">Fate and the Individual <i>Auden’s course of 1941</i></a>
  <nav aria-label="The site"><a href="#/class">The class</a><a href="#/">The works</a><a href="#/shelf">The shelf</a><a href="#/about">About</a></nav>
</header>
<main id="main" tabindex="-1"></main>
<footer class="foot" id="foot"></footer>`;
  const page = `<title>Fate and the Individual</title>
<style>
${css}</style>
${shell}
<script>document.documentElement.lang = 'en'; document.documentElement.dataset.frame = '1'; window.AUDEN_PACKED = true; window.AUDEN_DATA = ${inline(data)};</script>
<script>
${script}
</script>
`;
  fs.writeFileSync(path.join(outDir, 'index.html'), page);
  fs.writeFileSync(path.join(outDir, 'local.html'), wrapper(page));

  // beside the page: each book in one file, and the records
  const files = [];
  let textBytes = 0;
  const textsDir = path.join(SITE, 'data/texts');
  fs.mkdirSync(path.join(outDir, 'data/texts'), { recursive: true });
  for (const text of fs.readdirSync(textsDir).sort()) {
    const dir = path.join(textsDir, text);
    if (!fs.existsSync(path.join(dir, 'index.json'))) continue;
    const pack = {};
    for (const f of fs.readdirSync(dir).sort()) if (f.endsWith('.json')) pack[f.slice(0, -5)] = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    const rel = `data/texts/${text}.pack.json`;
    const body = JSON.stringify(pack);
    fs.writeFileSync(path.join(outDir, rel), body);
    textBytes += Buffer.byteLength(body);
    files.push(rel);
  }
  let recBytes = 0;
  fs.mkdirSync(path.join(outDir, 'records'), { recursive: true });
  const wanted = new Set(index.map((row) => (data[`data/pieces/${row.id}.json`].record || {}).file).filter(Boolean));
  for (const w of data['data/shelf.json'].works || []) if (w.record && w.record.file) wanted.add(w.record.file);
  // the records the class page plays
  for (const s of data['data/class.json'].scenes || []) for (const p of s.parts || []) if (p.record && p.record.file) wanted.add(p.record.file);
  for (const f of [...wanted].sort()) {
    const from = path.join(SITE, 'records', f);
    if (!fs.existsSync(from)) { console.error(`no record ${f}`); process.exit(1); }
    fs.copyFileSync(from, path.join(outDir, 'records', f));
    recBytes += fs.statSync(from).size;
    files.push(`records/${f}`);
  }
  fs.writeFileSync(path.join(outDir, 'files.json'), `${JSON.stringify(files, null, 1)}\n`);
  console.log(`the site: ${index.length} pieces, ${count} modules (${own.length} of a piece's own), ${faces} faces (${kb(bytes)}), page ${kb(Buffer.byteLength(page))}; beside it ${files.length} files: books ${kb(textBytes)}, records ${kb(recBytes)} -> ${path.join(outDir, 'index.html')}`);
} else {
  // ---- one piece, and of it only the plates asked for
  const piece = json(`data/pieces/${id}.json`);
  if (plates) {
    const want = plates.split(',');
    piece.plates = piece.plates.filter((p) => want.includes(p.id));
    if (!piece.plates.length) { console.error(`no plate of ${id} is named ${plates}`); process.exit(1); }
  }
  if (piece.style) { console.error(`${id} brings a stylesheet of its own, which this tool does not carry yet`); process.exit(1); }
  const own = piece.module ? [`js/pieces/${id}.js`] : [];
  const data = { [`data/pieces/${id}.json`]: piece };
  const dataText = inline(data);
  const title = titleArg || piece.title;
  const shell = `<header class="top"><span class="name">Fate and the Individual <i>Auden’s course of 1941</i></span></header>
<main id="main" tabindex="-1"></main>`;
  const { css, faces, bytes } = styles(JSON.stringify(data) + shell + title);
  const { script, count } = bundle('js/main.js', own);
  const page = `<title>${esc(title)}</title>
<style>
${css}</style>
${shell}
<script>document.documentElement.lang = 'en'; document.documentElement.dataset.only = ${JSON.stringify(id)}; window.AUDEN_DATA = ${dataText};</script>
<script>
${script}
</script>
`;
  const name = fileArg || 'page.html';
  fs.writeFileSync(path.join(outDir, name), page);
  fs.writeFileSync(path.join(outDir, 'local.html'), wrapper(page));
  console.log(`${id}: ${piece.plates.length} plate(s) [${piece.plates.map((p) => p.id).join(', ')}], ${count} modules, ${faces} faces (${kb(bytes)}), page ${kb(Buffer.byteLength(page))} -> ${path.join(outDir, name)}`);
}
