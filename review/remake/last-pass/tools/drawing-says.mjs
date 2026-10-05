// What a drawing says to the pointer, and its folded table, read out of the page.
//
//   node review/remake/last-pass/tools/drawing-says.mjs <piece> <plate> <tab number> [--shots dir]
//
// Prints each line the drawing speaks when a mark is pointed at (once each) and the
// text of every folded box under it; with --shots, photographs the plate with the
// folds open at 1280 and 390. It serves site/ itself.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const ROOT = path.resolve(import.meta.dirname, '../../../..');
const SITE = path.join(ROOT, 'site');
const args = process.argv.slice(2);
const si = args.indexOf('--shots'); const shots = si >= 0 ? args.splice(si, 2)[1] : null;
const [piece, plateId, lens] = args;
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
for (const width of [1280, 390]) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: width < 600 ? 2 : 1, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`${base}#/${piece}`);
  await page.waitForTimeout(1500);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(900);
  const plate = await page.$(`.plates > .plate[data-plate="${plateId}"]`);
  const tabs = await plate.$$('.plate-hd .plate-tabs button');
  if (tabs[+lens]) { await tabs[+lens].click(); await page.mouse.move(0, 0); await page.waitForTimeout(900); }
  if (width === 1280) {
    const said = await plate.evaluate((root) => {
      const out = [];
      const say = () => (root.querySelector('.dg-say') || {}).textContent || '';
      root.querySelectorAll('.dg-hot').forEach((n) => {
        n.dispatchEvent(new PointerEvent('pointerenter', { pointerType: 'mouse', bubbles: false }));
        const t = say(); if (t && !out.includes(t)) out.push(t);
        n.dispatchEvent(new PointerEvent('pointerleave', { pointerType: 'mouse', bubbles: false }));
      });
      return out;
    });
    console.log(`-- ${said.length} lines spoken to the pointer`);
    said.forEach((s) => console.log('  ' + s));
  }
  const folds = await plate.evaluate((root) => [...root.querySelectorAll('details')].map((d) => { d.open = true; return d.innerText.replace(/\s*\n\s*/g, ' | ').slice(0, 1800); }));
  if (width === 1280) { console.log(`-- ${folds.length} folded boxes`); folds.forEach((f) => console.log('  ' + f)); }
  if (shots) { fs.mkdirSync(shots, { recursive: true }); await page.waitForTimeout(400); await plate.screenshot({ path: path.join(shots, `${piece}-${plateId}-${lens}-open-${width}.png`) }); }
  await context.close();
}
await browser.close(); server.close();
