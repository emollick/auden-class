// Photographs a piece as a reader sees it: every plate under every tab, at
// a desktop width and a phone width, with everything drawn.
//
//   node build/tools/shoot.mjs <pieceId> [--out dir] [--widths 1280,390] [--plate id] [--lens n] [--page] [--open] [--site dir] [--fractional]
//
// Writes <out>/<piece>-<plate>-<n>-<label>-<width>.png for each plate and
// tab (and, with --page, the whole page in slices; with --open as well, the
// folded notes at the foot are opened first, and the slices are named
// -page-open-), and prints what a
// browser complained of: errors, a page wider than its window, marks that
// stand outside their plate. It serves site/ itself, on a port of its own.
// Run `node build/pieces.mjs` first.

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const ROOT = path.resolve(import.meta.dirname, '../..');
const args = process.argv.slice(2);
const flag = (name, takes = true) => { const i = args.indexOf(`--${name}`); if (i < 0) return null; return takes ? args.splice(i, 2)[1] : (args.splice(i, 1), true); };
// (--site dir: another copy of the site, for trying a change to the kit before it goes into site/)
const SITE = path.resolve(flag('site') || path.join(ROOT, 'site'));
const out = path.resolve(flag('out') || path.join(ROOT, '.cache/shots'));
const widths = (flag('widths') || '1280,390').split(',').map(Number);
const onlyPlate = flag('plate');
const onlyLens = flag('lens');
const whole = flag('page', false);
const opened = flag('open', false);
// (--fractional: letters placed by fractions of a pixel, as a phone or a Mac places them; without it this
// browser gives every letter a whole number of pixels, and a line that just fits may turn differently)
const fractional = flag('fractional', false);
const hash = args[0] || '';
if (!hash) { console.error('usage: node build/tools/shoot.mjs <pieceId | shelf | about | ""> [--out dir] [--widths 1280,390] [--plate id] [--lens n] [--page]'); process.exit(1); }
fs.mkdirSync(out, { recursive: true });

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;

const slug = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 24);
const browser = await chromium.launch(fractional ? { args: ['--font-render-hinting=none'] } : {});
let trouble = 0;
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: width < 600 ? 2 : 1, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const errs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(`${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => errs.push(`pageerror: ${String(e)}`));
  page.on('response', (r) => { if (r.status() >= 400) errs.push(`${r.status()}: ${r.url()}`); });
  await page.goto(`${base}#/${hash === 'home' ? '' : hash}`);
  await page.waitForTimeout(1200);
  if (opened) await page.evaluate(() => document.querySelectorAll('details').forEach((d) => { d.open = true; }));
  let h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(1500);
  h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(900);
  const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  if (over > 0) { trouble++; console.log(`${width}px: the page is ${over}px wider than its window`); }

  if (whole) {
    const total = Math.min(h, 15000);
    for (let y = 0, i = 0; y < total; y += 1400, i++) await page.screenshot({ path: path.join(out, `${slug(hash)}-page${opened ? '-open' : ''}-${width}-${i}.png`), clip: { x: 0, y, width, height: Math.min(1400, total - y) } });
  }

  const plates = await page.$$('.plates > .plate');
  for (const plate of plates) {
    const id = await plate.getAttribute('data-plate');
    if (onlyPlate && id !== onlyPlate) continue;
    const tabs = await plate.$$('.plate-hd .plate-tabs button');   // (the head's tabs: a narrow plate has them again at its foot)
    const count = Math.max(1, tabs.length);
    for (let i = 0; i < count; i++) {
      if (onlyLens != null && String(i) !== String(onlyLens)) continue;
      let label = '';
      // the pointer is taken off the page after the click, so that nothing in the picture answers it
      if (tabs[i]) { label = (await tabs[i].textContent()) || ''; await tabs[i].click(); await page.mouse.move(0, 0); await page.waitForTimeout(700); }
      // marks that stand outside the plate, and words that run out of it
      const found = await plate.evaluate((root) => {
        const box = root.getBoundingClientRect();
        const out = [];
        const outside = (r) => r.width > 0 && (r.left < box.left - 1 || r.right > box.right + 1 || r.top < box.top - 1 || r.bottom > box.bottom + 1);
        root.querySelectorAll('.gl, .ov > *, .dg > *, .dg-note').forEach((n) => { const r = n.getBoundingClientRect(); if (outside(r)) out.push(`${n.tagName.toLowerCase()}.${n.getAttribute('class') || ''} "${(n.textContent || '').slice(0, 30)}" stands outside the plate`); });
        // labels of a drawing that run into each other
        const labs = [...root.querySelectorAll('.dg text, .gl, .dg-note')].filter((n) => (n.textContent || '').trim() && getComputedStyle(n).opacity !== '0').map((n) => ({ n, r: n.getBoundingClientRect() })).filter((x) => x.r.width > 0);
        for (let a = 0; a < labs.length; a++) for (let b = a + 1; b < labs.length; b++) {
          const p = labs[a].r; const q = labs[b].r;
          const w = Math.min(p.right, q.right) - Math.max(p.left, q.left); const hh = Math.min(p.bottom, q.bottom) - Math.max(p.top, q.top);
          if (w > 3 && hh > 0.45 * Math.min(p.height, q.height)) out.push(`"${labs[a].n.textContent.slice(0, 24)}" and "${labs[b].n.textContent.slice(0, 24)}" overlap`);
        }
        return out.slice(0, 12);
      });
      const file = path.join(out, `${slug(hash)}-${slug(id)}-${i}-${slug(label)}-${width}.png`);
      await plate.screenshot({ path: file });
      console.log(`${width}px  ${id}  ${i} ${label.trim() || '(one lens)'}  ->  ${path.relative(ROOT, file)}`);
      for (const f of found) { trouble++; console.log(`      ! ${f}`); }
    }
  }
  if (errs.length) { trouble += errs.length; console.log(`${width}px: the browser reported\n  ${[...new Set(errs)].join('\n  ')}`); }
  await context.close();
}
await browser.close();
server.close();
console.log(trouble ? `${trouble} thing${trouble === 1 ? '' : 's'} to look at` : 'nothing reported; now look at the pictures');
