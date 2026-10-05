// Follows each link of the proposed drawings and says where it leads, to see
// that a label sends the reader to its place in the book printed here.
// Serves site/ as shoot.mjs does, with adams-proposed.js standing in for
// site/js/pieces/adams.js.
//
//   node remake/works/adams/follow.mjs [--widths 1280,390]

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
  let file = path.join(SITE, rel);
  if (rel === '/js/pieces/adams.js') file = path.join(HERE, 'adams-proposed.js');
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch();
let trouble = 0;

for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: width < 700 ? 2 : 1, reducedMotion: 'reduce', hasTouch: width < 700 });
  const page = await context.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(String(e)));
  for (const [plateId, lens] of [['dynamo', 3], ['born', 2]]) {
    await page.goto(`${base}#/adams`);
    await page.waitForTimeout(1500);
    // locators find their nodes afresh each time: a plate draws itself again when it first comes into view
    const sel = `.plates > .plate[data-plate="${plateId}"]`;
    const open = async () => {
      await page.locator(sel).scrollIntoViewIfNeeded();
      await page.locator(`${sel} .plate-tabs button`).nth(lens).click();
      await page.waitForTimeout(1500);
    };
    await open();
    const count = await page.locator(`${sel} .own svg.dg a`).count();
    if (!count) { console.log(`${width}px  ${plateId}: no link in the drawing`); continue; }
    for (let k = 0; k < count; k++) {
      const link = page.locator(`${sel} .own svg.dg a`).nth(k);
      await link.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      const was = await link.evaluate((a) => ({ href: a.getAttribute('href'), words: a.textContent, line: getComputedStyle(a).textDecorationLine, fill: getComputedStyle(a).fill, box: a.getBoundingClientRect().toJSON() }));
      let under = '';
      if (width >= 700) { await link.hover(); await page.waitForTimeout(250); under = `; under the pointer its line is ${await link.evaluate((a) => getComputedStyle(a).fill)}`; }
      if (width < 700) await link.tap(); else await link.click();
      await page.waitForTimeout(1500);
      const now = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return { hash: location.hash, head: h1 ? h1.textContent.trim().slice(0, 60) : '' };
      });
      const ok = now.hash === was.href;
      if (!ok) trouble++;
      console.log(`${width}px  ${plateId}: the label that begins "${was.words.slice(0, 22)}" (${Math.round(was.box.width)} by ${Math.round(was.box.height)} px, underlined: ${was.line}, line ${was.fill}${under}) leads to ${was.href}`);
      console.log(`        ${ok ? 'the page is now' : '! the page is at'} ${now.hash}: heading "${now.head}"`);
      await page.goBack();
      await page.waitForTimeout(1500);
      const back = await page.evaluate(() => ({ hash: location.hash, plates: document.querySelectorAll('.plates > .plate').length }));
      if (back.hash !== '#/adams' || !back.plates) { trouble++; console.log(`        ! going back gives ${back.hash} with ${back.plates} plates`); } else console.log('        going back shows the piece again');
      // the plate opens on its first tab after going back: open the drawing again for the next link
      await open();
    }
  }
  if (errs.length) { trouble += errs.length; console.log(`${width}px: the browser reported\n  ${[...new Set(errs)].join('\n  ')}`); }
  await context.close();
}
await browser.close();
server.close();
console.log(trouble ? `${trouble} thing${trouble === 1 ? '' : 's'} to look at` : 'every link leads where it says');
