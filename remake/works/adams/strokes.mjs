// Counts what a figure tab draws on the passage at each width: the rules under
// its parts, and the strokes that join one part to another (each stroke has a
// dot at either end). Serves site/ as shoot.mjs does. Writes nothing.
//
//   node remake/works/adams/strokes.mjs <plate> <lens> 1280 390 360 ...

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const HERE = import.meta.dirname;
const SITE = path.join(path.resolve(HERE, '../../..'), 'site');
const [plateId, lens, ...ws] = process.argv.slice(2);
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
for (const width of ws.map(Number)) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`${base}#/adams`);
  await page.waitForTimeout(1500);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(1000);
  const plate = page.locator(`.plates > .plate[data-plate="${plateId}"]`);
  await plate.locator('.plate-tabs button').nth(+lens).click();
  await page.waitForTimeout(900);
  const got = await plate.evaluate((root) => {
    const ov = root.querySelector('svg.ov');
    return { paths: ov.querySelectorAll('path').length, dots: ov.querySelectorAll('circle').length };
  });
  console.log(`${width}px: ${got.paths} lines drawn on the passage, ${got.dots / 2} of them a stroke from one part to another`);
  await context.close();
}
await browser.close();
server.close();
