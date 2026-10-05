// Opens every piece (or those named) at one width, shows every tab of every plate, and prints what a
// probe function returns for it when that is not empty. Numbers and class names only: a probe must
// never return the words of a passage.
//   node build/tools/scan.mjs <width> <probe.js> [--site dir] [--fractional] [--first] [piece ...]
// --site: another copy of the site (default: the site/ beside this build). --first: only the tab each
// plate opens on. --fractional: letters placed by fractions of a pixel, as a phone or a Mac places them.
// Probes are in build/tools/probes/: each exports one function of a plate's root element.
// (Made by the eighth mender of the kit as remake/kit8/tools/scan.mjs; the lead moved it here.)
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const ROOT = path.resolve(import.meta.dirname, '../..');
const args = process.argv.slice(2);
const flag = (name, takes = true) => { const i = args.indexOf(`--${name}`); if (i < 0) return null; return takes ? args.splice(i, 2)[1] : (args.splice(i, 1), true); };
const siteDir = flag('site'); const fractional = flag('fractional', false); const first = flag('first', false);
const width = +args.shift(); const probe = args.shift();
const SITE = siteDir ? path.resolve(siteDir) : path.join(ROOT, 'site');
const all = fs.readdirSync(path.join(SITE, 'data/pieces')).filter((f) => f.endsWith('.json') && f !== 'index.json').map((f) => f.slice(0, -5));
const pieces = args.length ? args : all;
const fn = (await import(path.resolve(probe))).default;
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const browser = await chromium.launch(fractional ? { args: ['--font-render-hinting=none'] } : {});
const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: width < 600 ? 2 : 1, reducedMotion: 'reduce' });
for (const id of pieces) {
  const page = await context.newPage();
  page.on('pageerror', (e) => console.log(`${id}: pageerror: ${String(e)}`));
  await page.goto(`http://127.0.0.1:${server.address().port}/#/${id}`);
  await page.waitForTimeout(1500);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(900);
  for (const plate of await page.$$('.plates > .plate')) {
    const pid = await plate.getAttribute('data-plate');
    const tabs = await plate.$$('.plate-hd .plate-tabs button');
    for (let i = 0; i < (first ? 1 : Math.max(1, tabs.length)); i++) {
      if (tabs[i]) { await tabs[i].click(); await page.mouse.move(0, 0); await page.waitForTimeout(450); }
      const out = await plate.evaluate(fn);
      if (out) console.log(`${id} ${pid} ${i}: ${typeof out === 'string' ? out : JSON.stringify(out)}`);
    }
  }
  await page.close();
}
await browser.close(); server.close();
