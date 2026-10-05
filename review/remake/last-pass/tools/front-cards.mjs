// The front page's cards, photographed one by one.
//
//   node review/remake/last-pass/tools/front-cards.mjs <outDir> <width> <tag> id [id ...]
//   node review/remake/last-pass/tools/front-cards.mjs <outDir> <width> <tag> --all
//   (with --site <dir> anywhere among the arguments, that copy of the site is opened)
//
// It serves site/ itself and opens the front page. Each card is saved as
// <outDir>/<id>-<tag>-<width>.png; with --all every card is taken, and the
// hero as hero-<tag>-<width>.png. Prints each card's way, size and place,
// and never the words on it.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const ROOT = path.resolve(import.meta.dirname, '../../../..');
// (--site <dir>: another copy of the site, for trying a change before it goes into site/)
const argv = process.argv.slice(2);
const at = argv.indexOf('--site');
const SITE = at < 0 ? path.join(ROOT, 'site') : path.resolve(argv.splice(at, 2)[1]);
const [outDir, w, tag, ...ids] = argv;
const width = +(w || 1280);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: width < 600 ? 2 : 1, reducedMotion: 'reduce' });
const page = await context.newPage();
const said = [];
page.on('console', (m) => { if (m.type() === 'error') said.push(m.text().slice(0, 200)); });
page.on('pageerror', (e) => said.push(String(e).slice(0, 200)));
await page.goto(base);
await page.waitForTimeout(1500);
const h = await page.evaluate(() => document.documentElement.scrollHeight);
await page.setViewportSize({ width, height: Math.min(h, 16000) });
await page.waitForTimeout(1200);
fs.mkdirSync(outDir, { recursive: true });
const cards = await page.evaluate(() => [...document.querySelectorAll('article.spec')].map((c, i) => {
  const a = c.querySelector('a.spec-go'); const r = c.getBoundingClientRect();
  const way = (c.className.match(/spec-(beat|rhyme|figure|sentence|word|compare)/) || [])[1] || '';
  return { i, id: a ? a.getAttribute('href').replace('#/', '') : '', hero: c.classList.contains('spec-hero'), way, x: Math.round(r.left), y: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height) };
}));
const all = ids.includes('--all');
for (const c of cards) {
  const name = c.hero ? 'hero' : c.id;
  if (!all && !ids.includes(name)) continue;
  const loc = page.locator('article.spec').nth(c.i);
  await loc.screenshot({ path: path.join(outDir, `${name}-${tag}-${width}.png`) });
}
for (const c of cards) console.log(`${(c.hero ? 'hero' : c.way).padEnd(9)} ${c.id.padEnd(18)} x ${String(c.x).padStart(4)}  y ${String(c.y).padStart(6)}  ${c.w} by ${c.h}`);
console.log(said.length ? `the browser said:\n  ${said.join('\n  ')}` : 'nothing reported');
await browser.close(); server.close();
