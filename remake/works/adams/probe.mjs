// Measures things on the live page that a picture only shows: the size of
// small type, and marks that stand on words. Serves site/ as shoot.mjs does.
//
//   node remake/works/adams/probe.mjs [--widths 1280,390,360]

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const HERE = import.meta.dirname;
const ROOT = path.resolve(HERE, '../../..');
const SITE = path.join(ROOT, 'site');
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); return i < 0 ? null : args[i + 1]; };
const widths = (flag('widths') || '1280,390').split(',').map(Number);

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

for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`${base}#/adams`);
  await page.waitForTimeout(1500);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(1500);
  console.log(`\n===== ${width}px`);
  const plates = await page.$$('.plates > .plate');
  for (const plate of plates) {
    const id = await plate.getAttribute('data-plate');
    const tabs = await plate.$$('.plate-tabs button');
    for (let i = 0; i < tabs.length; i++) {
      const label = ((await tabs[i].textContent()) || '').trim();
      await tabs[i].click();
      await page.waitForTimeout(700);
      const got = await plate.evaluate((root) => {
        const px = (n) => parseFloat(getComputedStyle(n).fontSize);
        const sizes = {};
        const note = (name, sel) => { const n = root.querySelector(sel); if (n && n.getBoundingClientRect().width > 0) sizes[name] = px(n); };
        note('passage', '.poem .tx'); note('second passage', '.poem .pr, .beside .pr'); note('caption', '.pane.is-on .cap');
        note('key row', '.pane.is-on .aside .k'); note('key term', '.pane.is-on .aside .term'); note('word note', '.pane.is-on .aside .wn');
        note('tie list', '.pane.is-on .aside .points li'); note('gloss on the passage', '.gl:not(.num)'); note('numeral on the passage', '.gl.num');
        note('plate heading', '.plate-ttl'); note('tab', '.plate-tabs button');
        note('drawing heading', '.own:not([hidden]) .shape-what'); note('drawing italic', '.own:not([hidden]) .dg .dg-it'); note('drawing figures', '.own:not([hidden]) .dg .dg-n');
        note('drawing small capitals', '.own:not([hidden]) .dg .dg-lab'); note('drawing note', '.own:not([hidden]) .dg-note'); note('drawing key', '.own:not([hidden]) .dg-keys');
        // labels set on the passage that stand on a word
        const hits = [];
        const words = [...root.querySelectorAll('.poem .w')].map((w) => ({ w, r: w.getBoundingClientRect() })).filter((x) => x.r.width > 0);
        root.querySelectorAll('.gl').forEach((g) => {
          const r = g.getBoundingClientRect();
          if (!r.width) return;
          for (const x of words) {
            // the letters of a line stand in the middle 60% of its box
            const top = x.r.top + x.r.height * 0.22; const bottom = x.r.bottom - x.r.height * 0.18;
            const w = Math.min(r.right, x.r.right) - Math.max(r.left, x.r.left); const hh = Math.min(r.bottom, bottom) - Math.max(r.top, top);
            if (w > 1 && hh > 2) { hits.push(`"${g.textContent}" stands on "${x.w.textContent.slice(0, 14)}" (${Math.round(w)} by ${Math.round(hh)} px)`); break; }
          }
        });
        const stage = root.querySelector('.stage').getBoundingClientRect();
        const side = root.querySelector('.side').getBoundingClientRect();
        const box = root.getBoundingClientRect();
        return { sizes, hits, plate: Math.round(box.height), stage: Math.round(stage.height), capTop: Math.round(side.top - box.top), band: getComputedStyle(root).getPropertyValue('--band'), fs: getComputedStyle(root).getPropertyValue('--fs') };
      });
      console.log(`${id} ${i} ${label}: plate ${got.plate}px high, stage ${got.stage}px, caption begins ${got.capTop}px down; band ${got.band}, type ${got.fs}`);
      console.log(`   sizes: ${Object.entries(got.sizes).map(([k, v]) => `${k} ${v}px`).join('; ')}`);
      for (const hit of got.hits) console.log(`   ! ${hit}`);
    }
  }
  await context.close();
}
await browser.close();
server.close();
