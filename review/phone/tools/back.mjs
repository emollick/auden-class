// Tries the reader's ways back: goes down a long page, follows a link or a move within the page, presses Back,
// and says whether the page stands where it stood (the same heading or link at the same height in the window).
// Also opens four addresses that come to a place of their own, to see that they still do.
//   node review/phone/tools/back.mjs [--site dir] [--width 390] [--page local.html]
// --page names the file to open in the folder, for the packed private page (build/preview.mjs writes local.html).
// Prints numbers and addresses only.
import fs from 'node:fs'; import path from 'node:path'; import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const args = process.argv.slice(2);
const flag = (name, takes = true) => { const i = args.indexOf(`--${name}`); if (i < 0) return null; return takes ? args.splice(i, 2)[1] : (args.splice(i, 1), true); };
const SITE = path.resolve(flag('site') || 'site'); const width = +(flag('width') || 390); const PAGE = flag('page') || '';
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.png': 'image/png', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/${PAGE}`;
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width, height: 844 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
const page = await context.newPage();
const errs = []; page.on('pageerror', (e) => errs.push(String(e).slice(0, 160)));
const wait = (ms) => page.waitForTimeout(ms);
const hash = () => page.evaluate(() => location.hash);
// where the page stands: how far down, and the first heading or link of the page at or under the window's top
const where = () => page.evaluate(() => {
  const sum = (s) => { let h = 0; for (const c of s) h = (h * 31 + c.codePointAt(0)) >>> 0; return h.toString(16); };
  let first = null;
  for (const n of document.querySelectorAll('main h1, main h2, main h3, main a[href], main summary')) {
    const b = n.getBoundingClientRect();
    if (b.height > 0 && b.top >= 0) { first = { sig: `${n.tagName.toLowerCase()}:${sum(n.textContent)}`, dy: Math.round(b.top) }; break; }
  }
  return { y: Math.round(scrollY), h: document.documentElement.scrollHeight, sig: first && first.sig, dy: first ? first.dy : null };
});
const same = (a, b) => a.sig === b.sig && Math.abs(a.dy - b.dy) <= 24;
const to = async (top) => { await page.evaluate((t) => window.scrollTo({ top: t, behavior: 'instant' }), top); await wait(300); };
const open = async (route, ms = 2200) => { await page.goto('about:blank'); await page.goto(`${base}#/${route}`); await wait(ms); };
const topOf = (sel) => page.evaluate((s) => { const n = document.querySelector(s); return n ? Math.round(n.getBoundingClientRect().top + scrollY) : null; }, sel);
let fails = 0; let tries = 0;
const say = (name, ok, text) => { tries++; if (!ok) fails++; console.log(`${ok ? 'ok  ' : 'FAIL'}  ${name}: ${text}`); };
const back = async (ms = 2600) => { await page.goBack(); await wait(ms); };
const forward = async (ms = 2600) => { await page.goForward(); await wait(ms); };

// 1. the front page: down to a card, into its piece, and back
await open('');
const card = await page.evaluate(() => { const all = [...document.querySelectorAll('main a[href^="#/"]')]; const k = all.findIndex((n) => n.getBoundingClientRect().top + scrollY > 6000 && /^#\/[\w-]+\/[\w-]+/.test(n.getAttribute('href'))); const a = all[k]; return a ? { k, href: a.getAttribute('href'), top: Math.round(a.getBoundingClientRect().top + scrollY) } : null; });
await to(card.top - 500); const w1 = await where();
await page.locator('main a[href^="#/"]').nth(card.k).click(); await wait(1800);
const p1 = await where();
say('a card opens its piece at the plate', p1.y > 200 && (await hash()) === card.href, `the piece stands at ${p1.y} at ${await hash()}`);
await back(); let now = await where();
say('front page, a card, Back', same(now, w1) && /^#\/?$/.test(await hash()), `was at ${w1.y}, Back came to ${now.y} (the mark ${now.dy} px down, it was ${w1.dy}) at ${await hash()}`);
await forward(); now = await where();
say('Forward to the piece', same(now, p1), `the piece stood at ${p1.y}, now ${now.y}`);
await back(); now = await where();
say('Back a second time', same(now, w1), `came to ${now.y}`);

// 2. the front page: the link to the list of all the works, back up, and forward again
await open('about', 900); await page.goto(`${base}#/`); await wait(2200);
const link = page.locator('.home-intro a[href="#/works"]');
await link.scrollIntoViewIfNeeded(); await wait(300); const w2 = await where();
await link.click(); await wait(900); const l2 = await where();
say('the link to the list', l2.y > w2.y + 3000 && (await hash()) === '#/works', `was at ${w2.y}, came to ${l2.y} at ${await hash()}`);
await back(1200); now = await where();
say('Back from the list', same(now, w2) && /^#\/?$/.test(await hash()), `came to ${now.y} (it was ${w2.y}) at ${await hash()}`);
await forward(1200); now = await where();
say('Forward to the list', same(now, l2) && (await hash()) === '#/works', `came to ${now.y} (it was ${l2.y}) at ${await hash()}`);
await back(1200); await back(1500);
say('Back again leaves the front page', (await hash()) === '#/about', `at ${await hash()}`);

// 3. the class page: into a scene, the way back to the contents, Back; a scene from the contents, Back
await open('class', 2800);
const upTop = await topOf('#scene-falstaff .scene-up');
await to(upTop - 300); const w3 = await where();
await page.locator('#scene-falstaff .scene-up').click(); await wait(1000); const c3 = await where();
say('the way back to the contents', c3.y < 3000 && (await hash()) === '#/class', `was at ${w3.y}, came to ${c3.y} at ${await hash()}`);
await back(1200); now = await where();
say('Back from the contents', same(now, w3) && (await hash()) === '#/class', `came to ${now.y} (it was ${w3.y}) at ${await hash()}`);
await forward(1200); now = await where();
say('Forward to the contents', same(now, c3), `came to ${now.y} (it was ${c3.y})`);
const a3 = page.locator('.class-toc a[href="#/class/tempest"]');
await a3.scrollIntoViewIfNeeded(); await wait(300); const t3 = await where();
await a3.click(); await wait(1300); const s3 = await where();
say('a scene from the contents', s3.y > t3.y + 3000 && (await hash()) === '#/class/tempest', `came to ${s3.y} at ${await hash()}`);
await back(1200); now = await where();
say('Back to the contents', same(now, t3) && (await hash()) === '#/class', `came to ${now.y} (it was ${t3.y}) at ${await hash()}`);

// 4. a piece: down the page, into the reader, and back
await open('hamlet', 2000);
const rl = await page.evaluate(() => { const all = [...document.querySelectorAll('main a[href^="#/read/"]')]; const k = all.findLastIndex((n) => n.getBoundingClientRect().height > 0 && n.checkVisibility({ visibilityProperty: true, opacityProperty: true })); const a = all[k]; return a ? { k, href: a.getAttribute('href'), top: Math.round(a.getBoundingClientRect().top + scrollY) } : null; });
await to(rl.top - 400); const w4 = await where();
await page.locator('main a[href^="#/read/"]').nth(rl.k).click(); await wait(1800);
const r4 = await where();
await back(); now = await where();
say('a piece, into the reader, Back', same(now, w4), `was at ${w4.y}, the reader opened at ${r4.y}, Back came to ${now.y} at ${await hash()}`);

// 5. the reader: down a page of a book, on to the next, and back
await open('read/tempest/a1s1', 1800);
const nx = await topOf('.read-turn a.turn-next, .read-turn .turn-next a');
await to(Math.max(0, nx - 500)); const w5 = await where();
await page.locator('.read-turn .turn-next').first().click(); await wait(1500);
const n5 = await where();
say('the next part opens at its top', n5.y < 40 && /a1s2/.test(await hash()), `stands at ${n5.y} at ${await hash()}`);
await back(); now = await where();
say('the reader, the next part, Back', same(now, w5), `was at ${w5.y}, Back came to ${now.y} at ${await hash()}`);

// 6. the shelf: down the page, a book's contents, and back
await open('shelf', 2000);
const bk = await page.evaluate(() => { const all = [...document.querySelectorAll('main a[href^="#/read/"]')]; const k = all.findIndex((n) => n.getBoundingClientRect().top + scrollY > 1500 && n.getBoundingClientRect().height > 0 && n.checkVisibility({ visibilityProperty: true, opacityProperty: true })); const a = all[k]; return a ? { k, href: a.getAttribute('href'), top: Math.round(a.getBoundingClientRect().top + scrollY) } : null; });
await to(bk.top - 400); const w6 = await where();
await page.locator('main a[href^="#/read/"]').nth(bk.k).click(); await wait(1500);
await back(); now = await where();
say('the shelf, a book, Back', same(now, w6), `was at ${w6.y}, Back came to ${now.y} at ${await hash()}`);

// 7. addresses that come to a place of their own still do
for (const [route, sel, name] of [['class/othello', '#scene-othello', 'a scene of the class'], ['works', '#works', 'the list of all the works'], [card.href.slice(2), '.plate', 'a plate of a piece'], ['read/tempest/a3s2:127', '[data-b="127"]', 'a passage in the reader']]) {
  await open(route, 3000);
  const r = await page.evaluate(([s, r]) => { const all = [...document.querySelectorAll(s)]; const plate = r.split('/')[1]; const n = s === '.plate' ? all.find((x) => x.getBoundingClientRect().top >= -4 && x.getBoundingClientRect().top < innerHeight) : all[0]; return n ? { top: Math.round(n.getBoundingClientRect().top), y: Math.round(scrollY) } : null; }, [sel, route]);
  say(`${name} opens at its place`, !!r && r.y > 100 && r.top >= -4 && r.top < 400, r ? `the page stands at ${r.y}, the place ${r.top} px under the window's top` : 'no such place in the window');
}

console.log(`${fails ? `${fails} of ${tries} FAILED` : `all ${tries} came to their place`}; page errors ${errs.length}${errs.length ? ': ' + errs.slice(0, 2).join(' | ') : ''}`);
await browser.close(); server.close();
process.exit(fails ? 1 : 0);
