// Photographs the foot of the piece page (the list of sources) with its
// folded parts opened, which the picture tool leaves shut.
//
//   node remake/works/adams/fold.mjs [--widths 1280,390]
//
// Writes shots/widths/live-sources-open-<width>.png. Serves site/ as shoot.mjs does.

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const HERE = import.meta.dirname;
const ROOT = path.resolve(HERE, '../../..');
const SITE = path.join(ROOT, 'site');
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); return i < 0 ? null : args[i + 1]; };
const widths = (flag('widths') || '1280,390').split(',').map(Number);
const out = path.join(HERE, 'shots/widths');
fs.mkdirSync(out, { recursive: true });

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch();

for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: width < 700 ? 2 : 1, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`${base}#/adams`);
  await page.waitForTimeout(1500);
  const sec = await page.$('section.sources');
  if (!sec) { console.log(`${width}px: no list of sources on the page`); await context.close(); continue; }
  const folds = await sec.evaluate((s) => { const all = [...s.querySelectorAll('details')]; all.forEach((d) => { d.open = true; }); return all.map((d) => d.querySelector('summary').textContent); });
  await page.waitForTimeout(300);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(400);
  const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  const file = path.join(out, `live-sources-open-${width}.png`);
  await sec.screenshot({ path: file });
  const box = await sec.boundingBox();
  console.log(`${width}px  ->  ${path.relative(ROOT, file)}  (${Math.round(box.width)} by ${Math.round(box.height)} px; folds: ${folds.join(' | ')}${over > 0 ? `; the page is ${over}px wider than its window` : ''})`);
  await context.close();
}
await browser.close();
server.close();
