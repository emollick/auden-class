// Measures the head of each plate on the page as it stands: how many lines the
// heading takes and how long each is, whether the place of the passage stands
// beside it or under it, and whether the tabs fit in one row.
// Serves site/ as shoot.mjs does. Writes nothing.
//
//   node remake/works/adams/head.mjs 320 360 390 552 600 632 636

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const HERE = import.meta.dirname;
const SITE = path.join(path.resolve(HERE, '../../..'), 'site');
const widths = process.argv.slice(2).map(Number).filter(Boolean);
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
for (const width of widths.length ? widths : [1280, 390]) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`${base}#/adams`);
  await page.waitForTimeout(1800);
  const got = await page.evaluate(() => [...document.querySelectorAll('.plates > .plate')].map((p) => {
    const hd = p.querySelector('.plate-hd'); const ttl = p.querySelector('.plate-ttl'); const tabs = p.querySelector('.plate-tabs');
    const bs = [...tabs.querySelectorAll('button')].map((b) => ({ w: b.getBoundingClientRect().width, top: Math.round(b.getBoundingClientRect().top) }));
    const gap = parseFloat(getComputedStyle(tabs).columnGap) || 0;
    const place = ttl.querySelector('span');
    const r = document.createRange(); r.selectNodeContents(ttl.firstChild);
    const lines = [...r.getClientRects()].map((x) => Math.round(x.width));
    return { id: p.dataset.plate, head: Math.round(hd.getBoundingClientRect().width), lines, place: place ? `${getComputedStyle(place).display === 'block' ? 'under' : 'beside'} the heading, ${Math.round(place.getBoundingClientRect().width)} px wide, ${Math.round(place.getBoundingClientRect().height / 19)} line(s)` : 'none',
      need: Math.round((bs.reduce((s, b) => s + b.w, 0) + gap * (bs.length - 1)) * 10) / 10, rows: new Set(bs.map((b) => b.top)).size };
  }));
  console.log(`\n===== ${width}px`);
  for (const g of got) console.log(`${g.id}: head ${g.head} px wide; heading in ${g.lines.length} line(s) of ${g.lines.join(' and ')} px; place ${g.place}; tabs need ${g.need} px and stand in ${g.rows} row(s)`);
  await context.close();
}
await browser.close();
server.close();
