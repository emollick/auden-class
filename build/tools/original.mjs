// Bring a passage of a work in its own language onto the site without
// anyone retyping it. The source files are in .cache/originals; what is
// known about each (edition, address, why it is out of copyright) is in
// remake/research/D_texts.md under "Alternates and original-language texts".
//
//   node build/tools/original.mjs list
//   node build/tools/original.mjs fetch <name.txt> <https address of a plain-text file>
//   node build/tools/original.mjs grep  <name.txt> '<regular expression>'
//   node build/tools/original.mjs show  <name.txt> <firstLine> <lastLine>
//   node build/tools/original.mjs cut   <pieceId> <partId> <name.txt> <a-b[,c-d...]> \
//          --lang fr --label 'Racine, Phèdre, II.5' --source 'French Wikisource, from the Didot edition of 1854' \
//          --url 'https://...' [--prose]
//
// cut writes the lines a to b (numbered as show prints them) to
// site/data/texts/o-<pieceId>/<partId>.json, one block for each run of
// lines between blank lines, and adds the part to that text's index. A
// reading then points at it as "o-<pieceId>/<partId>". With --prose the
// lines of each block are joined into a paragraph.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(import.meta.dirname, '../..');
const DIR = path.join(ROOT, '.cache/originals');
const TEXTS = path.join(ROOT, 'site/data/texts');
const [cmd, ...rest] = process.argv.slice(2);
const flags = {};
const args = [];
for (let i = 0; i < rest.length; i++) {
  if (rest[i] === '--prose') flags.prose = true;
  else if (rest[i].startsWith('--')) { flags[rest[i].slice(2)] = rest[i + 1]; i++; } else args.push(rest[i]);
}
const die = (m) => { console.log(m); process.exit(1); };
const read = (name) => {
  const f = path.join(DIR, path.basename(name));
  if (!fs.existsSync(f)) die(`no file ${name} in .cache/originals (see "list")`);
  return fs.readFileSync(f, 'utf8').replace(/\r\n?/g, '\n').split('\n');
};

if (cmd === 'list') {
  for (const f of fs.readdirSync(DIR).sort()) console.log(`${String(read(f).length).padStart(7)} lines  ${f}`);
} else if (cmd === 'fetch') {
  const [name, url] = args;
  if (!name || !/^[a-z0-9_.-]+\.txt$/.test(name) || !/^https?:\/\//.test(url || '')) die('usage: fetch <name.txt> <address>');
  const host = new URL(url).hostname;
  if (!/(^|\.)(gutenberg\.org|wikisource\.org|archive\.org|zeno\.org|perseus\.tufts\.edu|kb\.dk)$/.test(host)) die(`fetch only from Project Gutenberg, Wikisource, the Internet Archive, zeno.org, Perseus or the Royal Danish Library; "${host}" is none of these`);
  const out = path.join(DIR, name);
  if (fs.existsSync(out)) die(`${name} is already there`);
  execFileSync('curl', ['-sS', '-L', '--fail', '--max-time', '120', '-o', out, url], { stdio: 'inherit' });
  console.log(`${read(name).length} lines  ${name}`);
} else if (cmd === 'grep') {
  const [name, re] = args;
  const rx = new RegExp(re, 'i');
  let n = 0;
  read(name).forEach((l, i) => { if (rx.test(l) && n++ < 200) console.log(`${String(i + 1).padStart(6)}  ${l}`); });
  if (n > 200) console.log(`... ${n - 200} more`);
} else if (cmd === 'show') {
  const [name, a, b] = args;
  const lines = read(name);
  for (let i = Math.max(1, +a); i <= Math.min(lines.length, +b); i++) console.log(`${String(i).padStart(6)}  ${lines[i - 1]}`);
} else if (cmd === 'cut') {
  const [piece, partId, name, ranges] = args;
  if (!piece || !partId || !name || !ranges) die('usage: cut <pieceId> <partId> <name.txt> <a-b[,c-d]> --lang .. --label .. --source .. --url ..');
  for (const need of ['lang', 'label', 'source', 'url']) if (!flags[need]) die(`cut needs --${need}`);
  if (!/^[a-z0-9-]+$/.test(piece) || !/^[a-z0-9-]+$/.test(partId)) die('ids are lower-case letters, digits and hyphens');
  const lines = read(name);
  const blocks = [];
  let cur = [];
  const flush = () => { if (cur.length) blocks.push(flags.prose ? { k: 'p', text: cur.join(' ') } : { k: 'v', lines: cur }); cur = []; };
  for (const r of ranges.split(',')) {
    const m = r.match(/^(\d+)-(\d+)$/);
    if (!m || +m[1] > +m[2] || +m[2] > lines.length) die(`cannot read the range "${r}" (the file has ${lines.length} lines)`);
    for (let i = +m[1]; i <= +m[2]; i++) {
      // a typewriter's double hyphen is set as a dash; the words keep their numbers
      const l = lines[i - 1].replace(/\s+/g, ' ').trim().replace(/-{2,3}/g, '—');
      if (!l) flush(); else cur.push(l);
    }
    flush();
  }
  if (!blocks.length) die('those lines are empty');
  const id = `o-${piece}`;
  const dir = path.join(TEXTS, id);
  fs.mkdirSync(dir, { recursive: true });
  const idxFile = path.join(dir, 'index.json');
  const idx = fs.existsSync(idxFile) ? JSON.parse(fs.readFileSync(idxFile, 'utf8')) : { id, original: true, lang: flags.lang, parts: [] };
  const words = blocks.reduce((n, b) => n + (b.lines ? b.lines.join(' ') : b.text).split(/\s+/).length, 0);
  const part = { id: partId, label: flags.label, lang: flags.lang, source: { name: flags.source, url: flags.url }, file: path.basename(name), lines: ranges, words };
  idx.parts = idx.parts.filter((p) => p.id !== partId).concat([part]);
  fs.writeFileSync(idxFile, `${JSON.stringify(idx, null, 1)}\n`);
  fs.writeFileSync(path.join(dir, `${partId}.json`), `${JSON.stringify({ id: partId, label: flags.label, blocks })}\n`);
  console.log(`wrote ${id}/${partId}: ${blocks.length} block${blocks.length === 1 ? '' : 's'}, ${words} words. Point at it as "${id}/${partId}"; see it with: node build/tools/words.mjs ${id} ${partId} 0 ${blocks.length - 1}`);
} else die('usage: node build/tools/original.mjs list | fetch | grep | show | cut   (see the head of this file)');
