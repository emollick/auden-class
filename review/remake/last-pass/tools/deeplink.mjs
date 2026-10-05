import fs from 'node:fs'; import path from 'node:path'; import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const dir = path.resolve('site'); const out = process.argv[2];
const T = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.woff2': 'font/woff2', '.mp3': 'audio/mpeg' };
const server = http.createServer((req, res) => { let rel = decodeURIComponent(new URL(req.url, 'http://x').pathname); if (rel === '/') rel = '/index.html'; const f = path.join(dir, rel);
  if (!f.startsWith(dir) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'content-type': T[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); });
await new Promise((d) => server.listen(0, '127.0.0.1', d));
const base = `http://127.0.0.1:${server.address().port}/`;
const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1280, height: 900 } });
await pg.goto(base); await pg.waitForSelector('a.spec-go'); await pg.waitForTimeout(800);
const hrefs = await pg.evaluate(() => [...document.querySelectorAll('a.spec-go')].map((a) => a.getAttribute('href')));
console.log(hrefs.length, 'cards; plain links:', hrefs.filter((h) => h.split('/').length < 4).length, '| first:', hrefs.slice(0, 3).join(' '), '| fidelio:', hrefs.find((h) => h.includes('fidelio')));
const legends = await pg.evaluate(() => [...document.querySelectorAll('.spec .legend')].map((p) => p.textContent));
console.log('legends on cards:', JSON.stringify(legends));
for (const h of [hrefs.find((x) => x.includes('fidelio')), hrefs.find((x) => x.includes('carmen'))]) {
  await pg.evaluate((x) => { location.hash = x; }, h); await pg.waitForTimeout(1800);
  const st = await pg.evaluate(() => ({ y: Math.round(scrollY), tabs: [...document.querySelectorAll("[aria-current],[aria-pressed=\"true\"],.is-on")].slice(0, 6).map((t) => (t.tagName + ":" + (t.textContent || "").slice(0, 12))), h1: (document.querySelector('h1') || {}).textContent }));
  console.log(h, JSON.stringify(st));
  await pg.screenshot({ path: path.join(out, h.replace(/[#/]+/g, '_') + '.png') });
}
await b.close(); server.close();
