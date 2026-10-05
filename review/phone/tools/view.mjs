// Photographs a part of a page as a window of a given size shows it.
//   node view.mjs <route> --out <png prefix> [--site dir] [--width 390] [--height 844] [--at <css selector> | --y <px>] [--before 80]
//        [--screens 2] [--click <css selector>] [--stay] [--scale 2] [--touch]
// Scrolls so that the selector's top stands `before` px under the window's top, then takes `screens` pictures one window apart.
// With --stay the first picture is taken where the click left the page.
// Prints the page's height, the place it scrolled to, and whether the page is wider than its window. Numbers only.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const args = process.argv.slice(2);
const flag = (name, takes = true) => { const i = args.indexOf(`--${name}`); if (i < 0) return null; return takes ? args.splice(i, 2)[1] : (args.splice(i, 1), true); };
const SITE = path.resolve(flag('site') || 'site');
const out = flag('out') || 'view';
const width = +(flag('width') || 390); const height = +(flag('height') || 844);
const at = flag('at'); const y0 = flag('y'); const before = +(flag('before') || 80);
const screens = +(flag('screens') || 1); const click = flag('click'); const scale = +(flag('scale') || 2);
const touch = flag('touch', false);
const stay = flag('stay', false);
const route = args[0] || '';
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.png': 'image/png', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml' };
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
const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: scale, reducedMotion: 'reduce', hasTouch: !!touch, isMobile: !!touch });
const page = await context.newPage();
const errs = [];
page.on('pageerror', (e) => errs.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
await page.goto(`${base}#/${route === 'home' ? '' : route}`);
await page.waitForTimeout(1500);
if (click) { await page.locator(click).first().click(); await page.waitForTimeout(900); }
let y = y0 != null ? +y0 : 0;
if (stay) y = await page.evaluate(() => Math.round(scrollY));
if (at) {
  const top = await page.evaluate((s) => { const n = document.querySelector(s); return n ? n.getBoundingClientRect().top + scrollY : null; }, at);
  if (top == null) { console.log(`no element answers ${at}`); } else y = Math.max(0, Math.round(top - before));
}
fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
for (let i = 0; i < screens; i++) {
  await page.evaluate((to) => window.scrollTo({ top: to, behavior: 'instant' }), y + i * height);
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${out}-${i}.png` });
}
const m = await page.evaluate(() => ({ h: document.documentElement.scrollHeight, w: document.documentElement.scrollWidth, iw: innerWidth, y: Math.round(scrollY) }));
console.log(`page ${m.h} px tall; first picture from ${y}; last from ${m.y}; ${m.w > m.iw ? `WIDER THAN ITS WINDOW by ${m.w - m.iw}` : 'no wider than its window'}; errors ${errs.length}${errs.length ? ': ' + errs.slice(0, 2).join(' | ').slice(0, 200) : ''}`);
await browser.close();
server.close();
