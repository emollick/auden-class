// Walk the site itself (the folder that is deployed, or a live address) as a reader would:
// every piece from the front page, every tab of every passage, the shelf, a book, the about page, a record.
//   node walk-site.mjs <dir | https://address/> <outDir> [--proxy]
// It prints one line for each piece, with a mark of the words on the page after every tab was pressed, so that
// two walks can be compared line by line (the same build must give the same marks).
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const [target, out, mode] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.mp3': 'audio/mpeg',
  '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png',
};
let base = target, server = null;
if (!/^https?:/.test(target)) {
  const dir = path.resolve(target);
  server = http.createServer((req, res) => {
    let rel = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (rel.endsWith('/')) rel += 'index.html';
    const file = path.join(dir, rel);
    if (!file.startsWith(dir) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
    fs.createReadStream(file).pipe(res);
  });
  await new Promise((done) => server.listen(0, '127.0.0.1', done));
  base = `http://127.0.0.1:${server.address().port}/`;
}
const launch = {};
if (mode === '--proxy' && process.env.HTTPS_PROXY) launch.proxy = { server: process.env.HTTPS_PROXY };
const browser = await chromium.launch(launch);
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();
const errs = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(`${m.type()}: ${m.text().slice(0, 300)}`); });
page.on('pageerror', (e) => errs.push(`pageerror: ${String(e).slice(0, 300)}`));
page.on('response', (r) => { if (r.status() >= 400) errs.push(`${r.status()}: ${r.url()}`); });
page.on('requestfailed', (r) => errs.push(`failed: ${r.url()} ${(r.failure() || {}).errorText || ''}`));
await page.goto(base, { waitUntil: 'load' });
await page.waitForTimeout(1800);
const f = page.mainFrame();
const where = async () => f.evaluate(() => `${location.hash || '(no hash)'} | h1: ${(document.querySelector('h1') || {}).textContent || ''} | main: ${document.getElementById('main').textContent.length} chars`);
const shot = (name) => page.screenshot({ path: path.join(out, `${name}.png`) });
const step = async (name, sel, nth = 0) => {
  const link = f.locator(sel).nth(nth);
  const n = await f.locator(sel).count();
  if (!n) { console.log(`${name}: no link ${sel}`); return false; }
  await link.scrollIntoViewIfNeeded();
  await link.click();
  await page.waitForTimeout(1300);
  console.log(`${name}: ${await where()} | scrollY ${await f.evaluate(() => Math.round(scrollY))}`);
  await shot(name);
  return true;
};
console.log(`home: ${await where()}`);
await shot('0-home');
const ids = await f.evaluate(() => [...new Set([...document.querySelectorAll('#main a[href^="#/"]')].map((a) => a.getAttribute('href').slice(2).split('/')[0]).filter((h) => h && !['shelf', 'about', 'read', 'class', 'works'].includes(h)))]);
console.log(`pieces linked from the front page: ${ids.length}: ${ids.join(' ')}`);
// the way from the opening of the front page to the list of all the works: it comes to the list and the page is not drawn again
const toWorks = await f.evaluate(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const root = document.querySelector('#main article');
  const a = document.querySelector('#main .home-intro a[href="#/works"]');
  if (!a) return 'NO LINK to the list of all the works';
  a.click(); await wait(700);
  const list = document.querySelector('#main .home-works');
  const top = list ? Math.round(list.getBoundingClientRect().top) : null;
  const ok = list && Math.abs(top) < 60 && document.querySelector('#main article') === root;
  window.scrollTo(0, 0);
  return `the way to the list of all the works: ${ok ? 'came to it' : 'MISSED'} (list ${top} px from the window's top, ${list ? list.querySelectorAll('a[href^="#/"]').length : 0} links in it)`;
});
console.log(toWorks);
const toCome = await f.evaluate(() => [...document.querySelectorAll('#main *')].filter((e) => e.children.length === 0 && /to come/i.test(e.textContent)).length);
console.log(`places that say "to come": ${toCome}`);
const cards = await f.evaluate(() => [...document.querySelectorAll('#main a[href^="#/"]')].map((a) => a.getAttribute('href')).filter((h) => h.split('/').length === 4).length);
console.log(`cards that open their own passage and tab: ${cards}`);
for (const id of ids) {
  await f.evaluate((h) => { location.hash = '#/' + h; }, id);
  await page.waitForTimeout(1300);
  const info = await f.evaluate(async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    // a mark of the words on the page: the same words in the same order give the same mark
    let h = 2166136261;
    const feed = (s) => { for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } };
    const main = document.getElementById('main');
    feed(main.textContent);
    const plates = [...document.querySelectorAll('.plate')];
    let tabs = 0;
    for (const p of plates) for (const b of p.querySelectorAll('.plate-hd .plate-tabs button')) { b.click(); tabs++; await wait(260); feed(p.textContent); }
    return `${(document.querySelector('h1') || {}).textContent || 'NO H1'} | plates ${plates.length}, tabs pressed ${tabs}, folds ${document.querySelectorAll('details').length}, links into the reader ${document.querySelectorAll('#main a[href^="#/read/"]').length}, words ${main.textContent.length}, mark ${h.toString(16)}`;
  });
  console.log(`  ${id}: ${info}`);
}
// the class page: come to from the menu; every fold opened, every name followed, every scene come to
// from the contents, the links that answer a question followed, a scene opened by its own address
const classWalk = async () => {
  if (!(await step('c1-class', '.top nav a[href="#/class"]'))) return;
  const info = await f.evaluate(async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let h = 2166136261;
    const feed = (s) => { for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } };
    const main = document.getElementById('main');
    feed(main.textContent);
    const folds = [...main.querySelectorAll('details')];
    folds.forEach((d) => { d.open = true; });
    let picks = 0; let silent = 0; let unlit = 0;
    for (const b of main.querySelectorAll('.sch-pick button')) {
      b.click(); picks++; await wait(120);
      const say = main.querySelector('.sch-say'); feed(say.textContent);
      if (say.querySelector('.is-none')) silent++;
      if (!main.querySelector('.sch .nm.is-on')) unlit++;
    }
    const last = main.querySelector('.sch-pick button[aria-pressed="true"]'); if (last) last.click();
    const bars = [...main.querySelectorAll('.load-w[tabindex]')]; let named = 0;
    for (const b of bars) { b.focus(); if (main.querySelector('.load-says').textContent.trim()) named++; }
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    const out = [...main.querySelectorAll('a[href^="#/"]')].map((a) => a.getAttribute('href'));
    return `scenes ${main.querySelectorAll('.scene').length}, cards ${main.querySelectorAll('.spec').length}, folds opened ${folds.length}, names followed ${picks} (${silent} with nothing recorded, ${unlit} that lit no name), bars named ${named} of ${bars.length}, figures ${main.querySelectorAll('.board').length}, records ${main.querySelectorAll('.rec-btn').length}, links inside the site ${out.length}, mark ${h.toString(16)}`;
  });
  console.log(`  class: ${info}`);
  // every line of the contents comes to its scene without the page being drawn again
  const toc = await f.evaluate(async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const root = document.querySelector('#main article');
    const links = [...document.querySelectorAll('#main .class-toc a')];
    let came = 0; const missed = [];
    for (const a of links) {
      a.click(); await wait(900);
      const node = document.getElementById(`scene-${a.getAttribute('href').split('/').pop()}`);
      const top = node ? Math.round(node.getBoundingClientRect().top) : null;
      // (the last scenes cannot reach the top of the window: the page ends first)
      const end = Math.abs(document.documentElement.scrollHeight - innerHeight - scrollY) < 4;
      if (node && (Math.abs(top) < 140 || end) && document.querySelector('#main article') === root) came++; else missed.push(`${a.getAttribute('href')} top ${top}`);
    }
    return `contents: ${came} of ${links.length} lines came to their scene${missed.length ? `; MISSED ${missed.join(', ')}` : ''}`;
  });
  console.log(`  class: ${toc}`);
  await shot('c2-class-end');
  const answers = await f.evaluate(async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const links = [...document.querySelectorAll('#main .answers a')]; let came = 0;
    for (const a of links) { a.click(); await wait(900); const node = document.getElementById(`scene-${a.getAttribute('href').split('/').pop()}`); if (node && Math.abs(node.getBoundingClientRect().top) < 140) came++; }
    return `answers: ${came} of ${links.length} came to the scene they name`;
  });
  console.log(`  class: ${answers}`);
  // the ways from the list of the work that was set: those that name an afternoon of this page come to it
  const setWays = await f.evaluate(async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const links = [...document.querySelectorAll('#main .set-ways a[href^="#/class/"]')]; let came = 0;
    for (const a of links) { a.click(); await wait(900); const node = document.getElementById(`scene-${a.getAttribute('href').split('/').pop()}`); if (node && Math.abs(node.getBoundingClientRect().top) < 140) came++; }
    const out = [...document.querySelectorAll('#main .set-ways a:not([href^="#/class/"])')].length;
    return `ways from the work that was set: ${came} of ${links.length} came to the scene they name; ${out} more lead to passages`;
  });
  console.log(`  class: ${setWays}`);
  // the way back over each afternoon: it opens the list and comes to it without the page being drawn again
  const ups = await f.evaluate(async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const root = document.querySelector('#main article');
    const nav = document.querySelector('#main .class-toc'); const fold = nav.querySelector('details');
    const links = [...document.querySelectorAll('#main .scene-up')]; let came = 0; const missed = [];
    for (const a of links) {
      const sec = a.closest('.scene'); fold.open = false;
      sec.scrollIntoView({ block: 'start', behavior: 'instant' }); await wait(120);
      a.click(); await wait(1100);
      const top = Math.round(nav.getBoundingClientRect().top);
      if (Math.abs(top) < 60 && fold.open && document.querySelector('#main article') === root) came++; else missed.push(`${sec.id} top ${top} open ${fold.open}`);
    }
    return `ways back to the list: ${came} of ${links.length} came to it and opened it, for ${document.querySelectorAll('#main .scene').length} scenes${missed.length ? `; MISSED ${missed.join(', ')}` : ''}`;
  });
  console.log(`  class: ${ups}`);
  await step('c3-card', '#main .scene .spec a[href^="#/"]');
  await step('c4-class', '.top nav a[href="#/class"]');
  await step('c5-shelf-from-class', '#main .class-on a[href="#/shelf"]');
  await step('c6-home', '.top a.name');
  await step('c7-door', '#main a.home-class-go');
};
await classWalk();
await f.evaluate(() => { location.hash = '#/'; });
await page.waitForTimeout(900);
// the list of all the works by its own address
await f.evaluate(() => { location.hash = '#/about'; });
await page.waitForTimeout(900);
await f.evaluate(() => { location.hash = '#/works'; });
await page.waitForTimeout(2600);
console.log(await f.evaluate(() => { const list = document.querySelector('#main .home-works'); const top = list ? Math.round(list.getBoundingClientRect().top) : null; const cur = [...document.querySelectorAll('.top nav a[aria-current="page"]')].map((a) => a.getAttribute('href')).join(','); return `the address #/works: ${list && Math.abs(top) < 60 ? 'opens the front page at the list' : 'MISSED'} (list ${top} px from the window's top; the menu marks ${cur || 'nothing'})`; }));
await f.evaluate(() => { location.hash = '#/'; });
await page.waitForTimeout(1200);
await step('1-piece', '#main a[href="#/tempest"]');
await step('2-shelf', '.top nav a[href="#/shelf"]');
await step('3-book', '#main a[href="#/read/tempest"]');
await step('4-part', '#main a[href^="#/read/tempest/"]', 3);
await step('5-about', '.top nav a[href="#/about"]');
await step('6-home', '.top a.name');
await step('7-shelf', '.top nav a[href="#/shelf"]');
const btn = f.locator('.rec-btn').first();
if (await btn.count()) {
  await btn.scrollIntoViewIfNeeded(); await btn.click(); await page.waitForTimeout(3000);
  console.log('record:', await f.evaluate(() => { const a = document.querySelector('.rec audio'); return a ? `paused ${a.paused}, time ${a.currentTime.toFixed(1)}, duration ${Math.round(a.duration)}` : 'no audio element'; }));
  await shot('8-record');
} else console.log('no record on the shelf');
console.log(errs.length ? `the browser reported\n  ${[...new Set(errs)].join('\n  ')}` : 'nothing reported');
await browser.close();
if (server) server.close();
