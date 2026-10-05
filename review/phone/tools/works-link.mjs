// Tries the link to the list of all the works, and the address #/works, at two widths. Numbers only.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const SITE = path.resolve(process.argv[2] || 'site');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.png': 'image/png', '.mp3': 'audio/mpeg' };
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
const look = (page) => page.evaluate(() => {
  const w = document.querySelector('.home-works'); const h = w && w.querySelector('h2');
  const cur = [...document.querySelectorAll('.top nav a[aria-current="page"]')].map((a) => a.getAttribute('href')).join(',');
  return { top: w ? Math.round(w.getBoundingClientRect().top) : null, y: Math.round(scrollY), hash: location.hash, focus: document.activeElement === h, cur, cards: document.querySelectorAll('.spec').length, started: document.querySelectorAll('.spec .plate svg .mk').length };
});
for (const width of [390, 1280]) {
  const ctx = await browser.newContext({ viewport: { width, height: width < 600 ? 844 : 900 } });
  const page = await ctx.newPage();
  const errs = []; page.on('pageerror', (e) => errs.push(String(e))); page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  await page.goto(base); await page.waitForTimeout(1500);
  const a = await look(page);
  await page.locator('.home-intro a').click(); await page.waitForTimeout(600);
  const b = await look(page);
  console.log(`${width}: before the tap: list ${a.top} px down, ${a.cards} cards; after: list at ${b.top} px from the window's top, page at ${b.y}, address "${b.hash}", heading has the focus: ${b.focus}, menu marks ${b.cur}`);
  await page.goBack().catch(() => {}); // (there is nothing to go back to on the site: the tap pushed no address)
  const p2 = await ctx.newPage();
  p2.on('pageerror', (e) => errs.push(String(e))); p2.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  await p2.goto(`${base}#/works`); await p2.waitForTimeout(2600);
  const c = await look(p2);
  console.log(`${width}: opened at #/works: list at ${c.top} px from the window's top, page at ${c.y}, menu marks ${c.cur}, cards ${c.cards}`);
  // the reader moves the page before the late calls: it must stay where the reader put it
  const p3 = await ctx.newPage();
  await p3.goto(`${base}#/works`); await p3.waitForTimeout(500);
  await p3.evaluate(() => window.scrollTo({ top: 300, behavior: 'instant' })); await p3.waitForTimeout(2400);
  const d = await look(p3);
  console.log(`${width}: opened at #/works and moved to 300 after half a second: page at ${d.y}`);
  // from another page of the site, by the address
  await p3.goto(`${base}#/about`); await p3.waitForTimeout(900);
  await p3.evaluate(() => { location.hash = '#/works'; }); await p3.waitForTimeout(2600);
  const e = await look(p3);
  console.log(`${width}: from the about page to #/works: list at ${e.top} px from the window's top, menu marks ${e.cur}`);
  console.log(`${width}: errors ${errs.length}${errs.length ? ': ' + errs.slice(0, 3).join(' | ').slice(0, 300) : ''}`);
  await ctx.close();
}
await browser.close(); server.close();
