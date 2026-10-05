// A closer look at the Layers drawing than the picture tool gives: at any
// width, with the pointer on one row, or with motion on. It serves site/
// itself, as build/tools/shoot.mjs does, and writes one picture.
//
//   node remake/works/peer-gynt/look.mjs <width> <out.png> [--row n] [--move ms] [--open] [--only] [--break]
//
//   --row n    put the pointer on the nth row (from 0) before the picture
//   --move ms  leave motion on, and take the picture ms after the tab opens
//   --open     open the fold under the drawing
//   --only     the private preview of one piece (no reader to link to)
//   --break    take the count of scenes out of the facts first, to see what
//              stands there when the drawing cannot be made
//   --follow n follow the nth link of the drawing (or `all`) and say where
//              the reader lands
//   --folds    open the folds at the foot of the page and photograph each
//
// It prints what it measured: the size of the drawing, and any words of it
// that stand outside it.

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const SITE = path.resolve(import.meta.dirname, '../../../site');
const args = process.argv.slice(2);
const flag = (name, takes = true) => { const i = args.indexOf(`--${name}`); if (i < 0) return null; return takes ? args.splice(i, 2)[1] : (args.splice(i, 1), true); };
const row = flag('row');
const move = flag('move');
const open = flag('open', false);
const only = flag('only', false);
const broken = flag('break', false);
const follow = flag('follow');
const folds = flag('folds', false);
const width = Number(args[0] || 1280);
const out = path.resolve(args[1] || 'look.png');

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png' };
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
const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: width < 600 ? 2 : 1, reducedMotion: move ? 'no-preference' : 'reduce' });
const page = await context.newPage();
const errs = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(`${m.type()}: ${m.text()}`); });
page.on('pageerror', (e) => errs.push(`pageerror: ${String(e)}`));
if (broken) {
  // the facts without the count of scenes, to see what stands there when the drawing cannot be made
  await page.route('**/data/pieces/peer-gynt.json', async (route) => {
    const res = await route.fetch();
    const piece = await res.json();
    for (const pl of piece.plates) for (const l of pl.lenses) if (l.kind === 'shape' && Array.isArray(l.facts)) l.facts = l.facts.filter((e) => !Array.isArray(e['scenes in each act']));
    await route.fulfill({ response: res, json: piece });
  });
}
await page.goto(`${base}#/peer-gynt`);
await page.waitForTimeout(1500);
const h = await page.evaluate(() => document.documentElement.scrollHeight);
await page.setViewportSize({ width, height: Math.min(h, 15000) });
await page.waitForTimeout(900);
const plate = await page.$('.plates > .plate[data-plate="onion"]');
if (only) await page.evaluate(() => { document.documentElement.dataset.only = 'peer-gynt'; });
const tabs = await plate.$$('.plate-tabs button');
await tabs[1].click();
await page.waitForTimeout(move ? Number(move) : 900);
if (row != null) {
  const hits = await plate.$$('.dg rect.dg-hot');
  if (hits[Number(row)]) { const b = await hits[Number(row)].boundingBox(); await page.mouse.move(b.x + 40, b.y + b.height / 2); await page.waitForTimeout(400); }
}
if (open) { const s = await plate.$('.dg-facts summary'); if (s) { await s.click(); await page.waitForTimeout(300); } }
const seen = await plate.evaluate((root) => {
  const svg = root.querySelector('.dg');
  if (!svg) return { drawing: 'none: the plain table is shown' };
  const box = svg.getBoundingClientRect();
  const outside = [...root.querySelectorAll('.dg text, .dg-note')].filter((n) => { const r = n.getBoundingClientRect(); return r.left < box.left - 0.5 || r.right > box.right + 0.5 || r.bottom > box.bottom + 0.5; }).map((n) => `${n.tagName} at ${Math.round(n.getBoundingClientRect().left - box.left)}..${Math.round(n.getBoundingClientRect().right - box.left)}`);
  const say = root.querySelector('.dg-say');
  return { drawing: `${Math.round(box.width)} by ${Math.round(box.height)}`, plate: `${Math.round(root.getBoundingClientRect().width)} by ${Math.round(root.getBoundingClientRect().height)}`, outside, links: root.querySelectorAll('.own a').length, sayLength: say ? say.textContent.length : null };
});
await plate.screenshot({ path: out });
console.log(JSON.stringify(seen));
if (folds) {
  // open the folds under the page (what each caption stands on; where the page may be wrong) and photograph each
  const boxes = await page.$$('details:not(.dg-facts)');
  for (const [i, box] of boxes.entries()) {
    await box.evaluate((n) => { n.open = true; });
    await page.waitForTimeout(200);
    const h2 = await page.evaluate(() => document.documentElement.scrollHeight);
    await page.setViewportSize({ width, height: Math.min(h2, 15000) });
    await page.waitForTimeout(300);
    const wide = await box.evaluate((n) => { const r = n.getBoundingClientRect(); return [...n.querySelectorAll('*')].filter((x) => x.getBoundingClientRect().right > Math.max(r.right, document.documentElement.clientWidth) + 1).length; });
    await box.screenshot({ path: out.replace(/\.png$/, `-fold${i}.png`) });
    console.log(`fold ${i}: ${wide} things run past its right edge`);
  }
}
if (follow != null) {
  // follow every link of the drawing in turn (or the nth), and say where the reader lands
  const hrefs = await plate.$$eval('.own a', (as) => as.map((a) => a.getAttribute('href')));
  await page.setViewportSize({ width, height: 900 });
  for (const [i, href] of hrefs.entries()) {
    if (follow !== 'all' && String(i) !== String(follow)) continue;
    await page.evaluate((h) => { location.hash = h; }, href);
    await page.waitForTimeout(900);
    const landed = await page.evaluate((h) => {
      const block = (h.match(/:(\d+)$/) || [])[1];
      const node = document.querySelector(`[data-b="${block}"]`);
      return { hash: location.hash, found: !!node, kind: node ? node.className : null, top: node ? Math.round(node.getBoundingClientRect().top) : null, head: (document.querySelector('h1, .read-hd') || {}).textContent ? document.querySelector('h1, .read-hd').textContent.replace(/\s+/g, ' ').slice(0, 60) : null };
    }, href);
    console.log(JSON.stringify(landed));
  }
}
if (errs.length) console.log(`the browser reported\n  ${[...new Set(errs)].join('\n  ')}`);
await context.close();
await browser.close();
server.close();
