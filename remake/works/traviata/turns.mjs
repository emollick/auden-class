// Which lines turn, and where the tabs stand, at phone widths: one page load for each width, every tab of
// every plate opened in turn. Prints row numbers only; takes no picture.
//   node remake/works/traviata/turns.mjs [--widths 390,360,320] [--fractional]
// (--fractional: letters placed by fractions of a pixel, as a phone places them; the common picture tool has the same flag)
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const SITE = path.join(ROOT, 'site');
const i = process.argv.indexOf('--widths');
const widths = (i > 0 ? process.argv[i + 1] : '390,360,320').split(',').map(Number);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.mp3': 'audio/mpeg' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));

const fractional = process.argv.includes('--fractional');
const browser = await chromium.launch(fractional ? { args: ['--font-render-hinting=none'] } : {});
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:${server.address().port}/#/traviata`);
  await page.waitForTimeout(1500);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(1000);
  const plates = await page.$$('.plates > .plate');
  for (const plate of plates) {
    const id = await plate.getAttribute('data-plate');
    const tabs = await plate.$$('.plate-tabs button');
    const tabRows = await plate.evaluate((root) => new Set([...root.querySelectorAll('.plate-tabs button')].map((b) => Math.round(b.getBoundingClientRect().top))).size);
    const said = [];
    for (let n = 0; n < tabs.length; n++) {
      await tabs[n].click();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(500);
      const got = await plate.evaluate((root) => {
        const lines = (p) => new Set([...p.querySelectorAll('.w')].filter((w) => w.offsetParent).map((w) => Math.round(w.getBoundingClientRect().top / 6))).size;
        const turned = [...root.querySelectorAll('.poem .row')].filter((r) => r.offsetParent && lines(r.querySelector('.tx')) > 1).map((r) => r.dataset.row);
        const box = root.getBoundingClientRect();
        const out = [...root.querySelectorAll('.tx, .pr, .gl, .ov > *, .dg > *, .dg-note, .stage-d, .stage-s, .beside-l')].filter((n2) => { const q = n2.getBoundingClientRect(); return q.width > 0 && (q.right > box.right + 1 || q.left < box.left - 1); }).length;
        const fs2 = parseFloat(getComputedStyle(root.querySelector('.poem .tx') || root).fontSize);
        return { label: root.querySelector('.plate-tabs button[aria-pressed="true"]').textContent, turned, out, fs: Math.round(fs2 * 10) / 10, wide: document.documentElement.scrollWidth > innerWidth };
      });
      said.push(`${got.label}: ${got.turned.length ? `rows that turn ${got.turned.join(', ')}` : 'no line turns'}${got.out ? `; ${got.out} things outside the plate` : ''}${got.wide ? '; the page is wider than its window' : ''} (verse at ${got.fs}px)`);
    }
    console.log(`${width}px  ${id}: the tabs stand in ${tabRows} row${tabRows === 1 ? '' : 's'}`);
    said.forEach((s) => console.log(`      ${s}`));
  }
  await context.close();
}
await browser.close();
server.close();
