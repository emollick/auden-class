// Every address the site links to, fetched once. Usage: node build/tools/check-links.mjs
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const urls = new Map();
const add = (u, where) => { const k = u.replace(/[).,;]+$/, ''); if (!urls.has(k)) urls.set(k, new Set()); urls.get(k).add(where); };
const scan = (file) => {
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(/https?:\/\/[^\s"'\\<>]+/g)) add(m[0], path.relative(ROOT, file));
};
scan(path.join(ROOT, 'site/data/course.json'));
scan(path.join(ROOT, 'site/data/ui.json'));
for (const id of fs.readdirSync(path.join(ROOT, 'site/data/texts'))) scan(path.join(ROOT, 'site/data/texts', id, 'index.json'));

let bad = 0;
for (const [u, where] of [...urls].sort()) {
  let code = '';
  try {
    code = execFileSync('curl', ['-sS', '-o', '/dev/null', '-L', '--max-time', '25', '-A', 'Mozilla/5.0 (link check)', '-w', '%{http_code}', u], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  } catch (e) { code = 'ERR ' + String(e.stderr || e.message).trim().split('\n').pop().slice(0, 80); }
  const ok = code === '200';
  if (!ok) bad++;
  console.log(`${ok ? 'ok  ' : 'LOOK'} ${code.padEnd(4)} ${u}   [${[...where].join(', ')}]`);
}
console.log(`${urls.size} addresses, ${bad} to look at`);
