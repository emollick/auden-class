// On which tabs, and at which widths, the plate `dynamo` shows its second passage. For each tab it prints
// whether the second passage is shown, which labels over passages are in sight, and the plate's classes.
// Serves site/ as shoot.mjs does. Writes nothing.
//   node remake/works/adams/second.mjs 1280 1024 900 390
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const SITE = '/home/user/auden-course/site';
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
for (const width of process.argv.slice(2).map(Number)) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`${base}#/adams`);
  await page.waitForSelector('.plates > .plate');
  await page.waitForTimeout(1500);
  const tabs = await page.$$('.plates > .plate[data-plate="dynamo"] .plate-tabs button');
  for (let i = 0; i < tabs.length; i++) {
    await tabs[i].click(); await page.waitForTimeout(500);
    const got = await page.evaluate(() => {
      const root = document.querySelector('.plates > .plate[data-plate="dynamo"]');
      const b = root.querySelector('.beside');
      const labels = [...root.querySelectorAll('.beside-l')].filter((n) => n.getClientRects().length).map((n) => n.textContent);
      return { classes: root.className, second: b ? (b.getClientRects().length ? `shown, ${Math.round(b.getBoundingClientRect().height)} px high` : 'not shown') : 'no element', labels };
    });
    console.log(`${width}px tab ${i}: second passage ${got.second}; labels in sight: ${got.labels.join(' | ') || 'none'}; plate classes: ${got.classes}`);
  }
  await context.close();
}
await browser.close(); server.close();
