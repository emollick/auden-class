// For each way back: the things of the afternoon before that reach lower than its top. Names of elements and numbers only.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const SITE = path.resolve('site');
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
for (const width of [390, 1280]) {
  const ctx = await browser.newContext({ viewport: { width, height: width < 600 ? 844 : 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(`${base}#/class`); await page.waitForTimeout(2500);
  const out = await page.evaluate(() => [...document.querySelectorAll('.scene-up')].map((a) => {
    const sec = a.closest('.scene'); const prev = sec.previousElementSibling; const at = a.getBoundingClientRect();
    const hits = [];
    for (const k of prev.querySelectorAll('*')) {
      const r = k.getBoundingClientRect(); if (!r.width || !r.height) continue;
      if (r.bottom > at.top + 1) {
        const cs = getComputedStyle(k);
        hits.push(`${k.tagName.toLowerCase()}.${String(k.className && k.className.baseVal !== undefined ? k.className.baseVal : k.className).split(' ').slice(0, 2).join('.')} [${Math.round(r.left)},${Math.round(r.top - at.top)} ${Math.round(r.width)}x${Math.round(r.height)}] vis=${cs.visibility} op=${cs.opacity} pos=${cs.position} ov=${cs.overflow}`);
      }
    }
    return `${sec.id}: way back at x ${Math.round(at.left)} to ${Math.round(at.right)}; ${hits.length} things reach lower${hits.length ? ':\n      ' + hits.slice(0, 6).join('\n      ') : ''}`;
  }));
  console.log(`--- ${width}\n${out.join('\n')}`);
  await ctx.close();
}
await browser.close(); server.close();
