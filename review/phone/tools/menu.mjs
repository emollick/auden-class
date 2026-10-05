// Measures the site's menu at given widths: how wide the row is, how much room it has, whether an entry is
// parted over two lines, and how many rows the entries take.
//   node review/phone/tools/menu.mjs [--site dir] [widths ...]
import fs from 'node:fs'; import path from 'node:path'; import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const args = process.argv.slice(2);
const i = args.indexOf('--site'); const SITE = path.resolve(i < 0 ? 'site' : args.splice(i, 2)[1]);
const widths = (args.length ? args : ['320', '340', '360', '375', '390', '412', '430']).map(Number);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.png': 'image/png', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => { const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html'); const file = path.join(SITE, rel); if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('no'); return; } res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' }); fs.createReadStream(file).pipe(res); });
await new Promise((d) => server.listen(0, '127.0.0.1', d));
const base = `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch();
for (const w of widths) {
  const page = await (await browser.newContext({ viewport: { width: w, height: 800 }, reducedMotion: 'reduce' })).newPage();
  await page.goto(`${base}#/about`); await page.waitForTimeout(900);
  const m = await page.evaluate(() => {
    const nav = document.querySelector('.top nav'); const as = [...nav.querySelectorAll('a')];
    const tops = [...new Set(as.map((a) => Math.round(a.getBoundingClientRect().top)))];
    const cs = getComputedStyle(nav);
    const one = (a) => { const r = document.createRange(); r.selectNodeContents(a); return r.getClientRects().length; };
    const last = as[as.length - 1].getBoundingClientRect();
    return { nav: Math.round(nav.getBoundingClientRect().width), room: document.documentElement.clientWidth - 2 * parseFloat(getComputedStyle(document.querySelector('.top')).paddingLeft), rows: tops.length, parted: as.filter((a) => one(a) > 1).length, gap: cs.columnGap, ls: cs.letterSpacing, over: Math.round(last.right - (document.documentElement.clientWidth - parseFloat(getComputedStyle(document.querySelector('.top')).paddingRight))), wide: document.documentElement.scrollWidth - document.documentElement.clientWidth };
  });
  console.log(`${w}: the menu ${m.nav} px in ${m.room} px of room; rows ${m.rows}; entries parted ${m.parted}; gap ${m.gap}; letters ${m.ls}; past the margin ${m.over}; page wider than window by ${m.wide}`);
  await page.close();
}
await browser.close(); server.close();
