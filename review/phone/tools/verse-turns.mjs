// In a few scenes, how many lines of verse turn at a phone's width at several sizes, with letters placed by
// fractions of a pixel (as a phone places them) and by whole pixels. Counts and line numbers only.
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
const SCENES = ['tempest/a3s1', 'tempest/a1s2', 'hamlet/a3s1', 'othello/a3s3', 'peer-gynt', 'dante-longfellow', 'faust'];
for (const [name, launch] of [['fractions', { args: ['--font-render-hinting=none'] }], ['whole pixels', {}]]) {
  const browser = await chromium.launch(launch);
  for (const width of [390, 375, 360, 412, 430]) {
    const ctx = await browser.newContext({ viewport: { width, height: 844 }, deviceScaleFactor: 2 });
    const page = await ctx.newPage();
    for (const sc of SCENES) {
      let route = sc;
      if (!sc.includes('/')) { const idx = JSON.parse(fs.readFileSync(path.join(SITE, 'data/texts', sc, 'index.json'), 'utf8')); route = `${sc}/${idx.parts[Math.min(2, idx.parts.length - 1)].id}`; }
      await page.goto(`${base}#/read/${route}`); await page.waitForTimeout(700);
      const out = await page.evaluate(async () => {
        await document.fonts.ready;
        const box = document.querySelector('.reading'); if (!box) return null;
        const count = () => [...box.querySelectorAll('.vl')].filter((l) => { const r = document.createRange(); r.selectNodeContents(l); return new Set([...r.getClientRects()].map((x) => Math.round(x.top))).size > 1; }).length;
        const all = box.querySelectorAll('.vl').length;
        const res = [];
        for (const [size, pad] of [[18.5, 20], [17.5, 16], [17.25, 16], [17, 16], [16.5, 16]]) { box.style.fontSize = `${size}px`; box.style.padding = `0 ${pad}px`; box.getBoundingClientRect(); res.push(count()); }
        box.style.fontSize = ''; box.style.padding = '';
        return { all, res, now: count() };
      });
      if (out) console.log(`${name.padEnd(13)}${String(width).padEnd(5)}${route.padEnd(24)} lines ${String(out.all).padStart(4)}   18.5/20: ${String(out.res[0]).padStart(3)}   17.5/16: ${String(out.res[1]).padStart(3)}   17.25/16: ${String(out.res[2]).padStart(3)}   17/16: ${String(out.res[3]).padStart(3)}   16.5/16: ${String(out.res[4]).padStart(3)}   as the stylesheet has it: ${out.now}`);
    }
    await ctx.close();
    if (name !== 'fractions') break;
  }
  await browser.close();
}
server.close();
