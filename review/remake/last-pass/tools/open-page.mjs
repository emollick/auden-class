// A page photographed with every folded box open, in slices.
//
//   node review/remake/last-pass/tools/open-page.mjs <piece> <outDir> [width]
//
// It serves site/ itself. Prints where the sources at the foot begin (the slice number).
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const ROOT = path.resolve(import.meta.dirname, '../../../..');
const SITE = path.join(ROOT, 'site');
const [piece, outDir, w] = process.argv.slice(2);
const width = +(w || 1280);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg' };
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
await page.goto(`${base}#/${piece}`);
await page.waitForTimeout(1500);
await page.evaluate(() => document.querySelectorAll('details').forEach((d) => { d.open = true; }));
await page.waitForTimeout(500);
const h = await page.evaluate(() => document.documentElement.scrollHeight);
await page.setViewportSize({ width, height: Math.min(h, 15000) });
await page.waitForTimeout(900);
const marks = await page.evaluate(() => [...document.querySelectorAll('h2, h3, summary')].map((n) => ({ t: (n.textContent || '').trim().slice(0, 40), y: Math.round(n.getBoundingClientRect().top + scrollY) })));
fs.mkdirSync(outDir, { recursive: true });
const total = Math.min(await page.evaluate(() => document.documentElement.scrollHeight), 30000);
await page.setViewportSize({ width, height: Math.min(total, 15000) });
for (let y = 0, i = 0; y < total; y += 1400, i++) await page.screenshot({ path: path.join(outDir, `${piece}-open-${width}-${String(i).padStart(2, '0')}.png`), clip: { x: 0, y, width, height: Math.min(1400, total - y) }, fullPage: true });
for (const m of marks) console.log(`slice ${String(Math.floor(m.y / 1400)).padStart(2, '0')}  y ${m.y}  ${m.t}`);
await browser.close(); server.close();
