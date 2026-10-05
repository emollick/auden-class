// Says, for the Word tab of one plate, how far each gloss stands under its
// own word and how near it comes to the line of the passage below it.
// Serves site/ as shoot.mjs does.
//
//   node remake/works/adams/gloss.mjs [--plate sister] [--lens 3] [--widths 1280,390,360]

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const HERE = import.meta.dirname;
const SITE = path.join(path.resolve(HERE, '../../..'), 'site');
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); return i < 0 ? null : args[i + 1]; };
const widths = (flag('widths') || '1280,390').split(',').map(Number);
const plateId = flag('plate') || 'sister';
const lens = +(flag('lens') || 3);

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
let near = 0;
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`${base}#/adams`);
  await page.waitForTimeout(1500);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(1200);
  const plate = page.locator(`.plates > .plate[data-plate="${plateId}"]`);
  await plate.locator('.plate-tabs button').nth(lens).click();
  await page.waitForTimeout(900);
  const got = await plate.evaluate((root) => {
    const words = [...root.querySelectorAll('.poem .w')].map((w) => ({ t: w.textContent, r: w.getBoundingClientRect() })).filter((x) => x.r.width > 0);
    const fs = parseFloat(getComputedStyle(root.querySelector('.poem .tx')).fontSize);
    // the tops of the tall letters of a line stand about 0.70 of the type size above its baseline,
    // and the baseline about 0.26 of the line box above its foot (measured on this face)
    const out = [];
    root.querySelectorAll('.gl').forEach((g) => {
      const r = g.getBoundingClientRect();
      if (!r.width) return;
      // the word this gloss is under: the nearest word above whose box it overlaps sideways
      const over = words.filter((x) => x.r.bottom <= r.top + 6 && Math.min(r.right, x.r.right) - Math.max(r.left, x.r.left) > -200).sort((a, b) => b.r.bottom - a.r.bottom)[0];
      const lineBottom = over ? over.r.bottom : null;
      const under = words.filter((x) => x.r.top >= (lineBottom ?? r.top) - 2 && Math.min(r.right, x.r.right) - Math.max(r.left, x.r.left) > 0).sort((a, b) => a.r.top - b.r.top)[0];
      out.push({ gloss: g.textContent.slice(0, 16), size: parseFloat(getComputedStyle(g).fontSize), top: Math.round(r.top * 10) / 10, bottom: Math.round(r.bottom * 10) / 10, height: Math.round(r.height * 10) / 10,
        belowItsLine: lineBottom == null ? null : Math.round((r.top - lineBottom) * 10) / 10,
        nextWord: under ? under.t.slice(0, 12) : null, nextTop: under ? Math.round(under.r.top * 10) / 10 : null, nextHeight: under ? Math.round(under.r.height * 10) / 10 : null, fs });
    });
    return out;
  });
  console.log(`\n===== ${width}px, ${plateId}, tab ${lens}`);
  for (const g of got) {
    let line = `  the gloss that begins "${g.gloss}" (${g.size}px, box ${g.height}px high)`;
    if (g.nextTop != null) {
      const gap = Math.round((g.nextTop - g.bottom) * 10) / 10;
      line += `: its box ends ${gap}px ${gap < 0 ? 'inside' : 'above'} the box of the next line (at "${g.nextWord}", box ${g.nextHeight}px for ${g.fs}px type)`;
      if (gap < 0) near += 1;
    } else line += ': no line of the passage under it';
    console.log(line);
  }
  await context.close();
}
await browser.close();
server.close();
console.log(near ? `${near} gloss${near === 1 ? ' reaches' : 'es reach'} into the box of the next line` : 'no gloss reaches into the box of the next line');
