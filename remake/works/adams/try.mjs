// Photographs the piece with remake/works/adams/adams-proposed.js standing in
// for site/js/pieces/adams.js, without touching anything in site/.
//
//   node remake/works/adams/try.mjs [--widths 1280,390] [--plate id] [--lens n] [--out dir]
//                                   [--live] [--motion] [--tap 'css selector'] [--open] [--tag name] [--file other.js]
//
// It serves site/ itself, as build/tools/shoot.mjs does, but answers the
// request for js/pieces/adams.js with the proposed file (unless --live, which
// shows the page as it stands). It makes the same checks as shoot.mjs and a
// closer one: any two labels of a drawing nearer than 3 px.
//   --motion  lets the drawing draw itself in, and waits 3.4 s before the picture
//   --tap     clicks the first node that matches (or, given a number, that one of the
//             drawing's marks that answer to the pointer), before the picture
//   --open    opens the folded table of figures before the picture
//   --beside <plateId>           serves the built piece with "beside": true on that plate
//   --plain <plateId>            serves the built piece without "beside" on that plate
//   --heading '<plateId>=words'  serves the built piece with that plate's heading changed
//   --join '<plateId>:<n>=json'  serves the built piece with that figure lens's "join" set
//             (both change only what the browser is sent, never a file)

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const HERE = import.meta.dirname;
const ROOT = path.resolve(HERE, '../../..');
const SITE = path.join(ROOT, 'site');
const args = process.argv.slice(2);
const flag = (name, takes = true) => { const i = args.indexOf(`--${name}`); if (i < 0) return null; return takes ? args.splice(i, 2)[1] : (args.splice(i, 1), true); };
const out = path.resolve(flag('out') || path.join(HERE, 'shots/proposed'));
const widths = (flag('widths') || '1280,390').split(',').map(Number);
const onlyPlate = flag('plate');
const onlyLens = flag('lens');
const live = flag('live', false);
const motion = flag('motion', false);
const tap = flag('tap');
const open = flag('open', false);
const tag = flag('tag') || (live ? 'live' : 'proposed');
const proposed = path.resolve(flag('file') || path.join(HERE, 'adams-proposed.js'));
const besidePlate = flag('beside');
const newHeading = flag('heading');
const plainPlate = flag('plain');
const newJoin = flag('join');
fs.mkdirSync(out, { recursive: true });

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  let file = path.join(SITE, rel);
  if (!live && rel === '/js/pieces/adams.js') file = proposed;
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  if (rel === '/data/pieces/adams.json' && (besidePlate || newHeading || plainPlate || newJoin)) {
    const piece = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (const plate of piece.plates) {
      if (besidePlate && plate.id === besidePlate) plate.beside = true;
      if (plainPlate && plate.id === plainPlate) delete plate.beside;
      if (newJoin && newJoin.startsWith(`${plate.id}:`)) { const [n, json] = newJoin.slice(plate.id.length + 1).split('='); plate.lenses[+n].join = JSON.parse(json); }
      if (newHeading && newHeading.startsWith(`${plate.id}=`)) plate.heading = newHeading.slice(plate.id.length + 1);
    }
    res.end(JSON.stringify(piece));
    return;
  }
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;

const slug = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 24);
const browser = await chromium.launch();
let trouble = 0;
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: width < 700 ? 2 : 1, reducedMotion: motion ? 'no-preference' : 'reduce' });
  const page = await context.newPage();
  const errs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(`${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => errs.push(`pageerror: ${String(e)}`));
  page.on('response', (r) => { if (r.status() >= 400) errs.push(`${r.status()}: ${r.url()}`); });
  await page.goto(`${base}#/adams`);
  await page.waitForTimeout(1200);
  let h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(1500);
  h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(900);
  const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  if (over > 0) { trouble++; console.log(`${width}px: the page is ${over}px wider than its window`); }

  const plates = await page.$$('.plates > .plate');
  for (const plate of plates) {
    const id = await plate.getAttribute('data-plate');
    if (onlyPlate && id !== onlyPlate) continue;
    const tabs = await plate.$$('.plate-tabs button');
    for (let i = 0; i < Math.max(1, tabs.length); i++) {
      if (onlyLens != null && String(i) !== String(onlyLens)) continue;
      let label = '';
      if (tabs[i]) { label = (await tabs[i].textContent()) || ''; await tabs[i].click(); await page.waitForTimeout(motion ? 3400 : 700); }
      if (tap) { const node = /^\d+$/.test(tap) ? (await plate.$$('.own .dg .dg-hot'))[+tap] : await plate.$(tap); if (node) { await node.dispatchEvent('click'); await page.waitForTimeout(300); } else { trouble++; console.log(`      ! nothing matches ${tap}`); } }
      if (open) { const fold = await plate.$('.own details'); if (fold) { await fold.evaluate((d) => { d.open = true; }); await page.waitForTimeout(200); } }
      const found = await plate.evaluate((root) => {
        const box = root.getBoundingClientRect();
        const list = [];
        const outside = (r) => r.width > 0 && (r.left < box.left - 1 || r.right > box.right + 1 || r.top < box.top - 1 || r.bottom > box.bottom + 1);
        root.querySelectorAll('.gl, .ov > *, .dg > *, .dg-note').forEach((n) => { const r = n.getBoundingClientRect(); if (outside(r)) list.push(`${n.tagName.toLowerCase()}.${n.getAttribute('class') || ''} "${(n.textContent || '').slice(0, 30)}" stands outside the plate`); });
        const svg = root.querySelector('.own:not([hidden]) svg.dg');
        if (svg) {
          const s = svg.getBoundingClientRect();
          svg.querySelectorAll('text').forEach((n) => { const r = n.getBoundingClientRect(); if (r.width > 0 && (r.left < s.left - 0.5 || r.right > s.right + 0.5)) list.push(`"${n.textContent.slice(0, 30)}" runs ${Math.round(Math.max(s.left - r.left, r.right - s.right) * 10) / 10}px out of the drawing`); });
          list.push(`(the drawing is ${Math.round(s.width)} by ${Math.round(s.height)} px)`);
        }
        const labs = [...root.querySelectorAll('.dg text, .gl, .dg-note')].filter((n) => (n.textContent || '').trim() && getComputedStyle(n).opacity !== '0').map((n) => ({ n, r: n.getBoundingClientRect() })).filter((x) => x.r.width > 0);
        for (let a = 0; a < labs.length; a++) for (let b = a + 1; b < labs.length; b++) {
          const p = labs[a].r; const q = labs[b].r;
          const w = Math.min(p.right, q.right) - Math.max(p.left, q.left); const hh = Math.min(p.bottom, q.bottom) - Math.max(p.top, q.top);
          if (w > 3 && hh > 0.45 * Math.min(p.height, q.height)) list.push(`"${labs[a].n.textContent.slice(0, 24)}" and "${labs[b].n.textContent.slice(0, 24)}" overlap`);
          else if (w > -3 && hh > 0.45 * Math.min(p.height, q.height)) list.push(`"${labs[a].n.textContent.slice(0, 24)}" and "${labs[b].n.textContent.slice(0, 24)}" stand ${Math.round(-w * 10) / 10}px apart`);
        }
        return list.slice(0, 16);
      });
      const file = path.join(out, `${tag}-${slug(id)}-${i}-${slug(label)}-${width}${motion ? '-motion' : ''}${tap ? '-tap' : ''}${open ? '-open' : ''}.png`);
      await plate.screenshot({ path: file });
      console.log(`${width}px  ${id}  ${i} ${label.trim() || '(one lens)'}  ->  ${path.relative(ROOT, file)}`);
      for (const f of found) { if (!f.startsWith('(')) trouble++; console.log(`      ${f.startsWith('(') ? ' ' : '!'} ${f}`); }
    }
  }
  if (errs.length) { trouble += errs.length; console.log(`${width}px: the browser reported\n  ${[...new Set(errs)].join('\n  ')}`); }
  await context.close();
}
await browser.close();
server.close();
console.log(trouble ? `${trouble} thing${trouble === 1 ? '' : 's'} to look at` : 'nothing reported; now look at the pictures');
