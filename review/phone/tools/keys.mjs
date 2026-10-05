// Tries the key near its marks and the tabs at a plate's foot, on every plate of the given pieces (all, if none is named).
//   node review/phone/tools/keys.mjs [--site dir] [--wide 1280] [piece ids ...]
// --wide is the width of the wide window (1280 for a desk; 844 for a phone held sideways, where the key stands beside the caption).
// For each plate, at a desk's width it counts the rows of every tab's key; then at a phone's width, under every tab:
//   the rows of the tab's key are all there, in the key under the passage or in the key after the caption, none twice;
//   under the passage stand no numbered remarks and no notes on words; the other tabs' keys are whole;
//   a key left empty takes no room; the foot's tabs say the same as the head's.
// Then it presses a tab at the foot (the plate's head should come to the window's top) and, where there is one,
// "Draw it again" with the passage's head above the window (the passage should come to the window's top, and the
// marks be drawn). Last it widens the window again and counts once more. Prints numbers and ids only.
import fs from 'node:fs'; import path from 'node:path'; import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const args = process.argv.slice(2);
const i0 = args.indexOf('--site'); const SITE = path.resolve(i0 < 0 ? 'site' : args.splice(i0, 2)[1]);
const i1 = args.indexOf('--wide'); const WIDE = i1 < 0 ? 1280 : +args.splice(i1, 2)[1];
const ids = args.length ? args : fs.readdirSync(path.join(SITE, 'data/pieces')).filter((f) => f !== 'index.json').map((f) => f.replace('.json', '')).sort();
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.png': 'image/png', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => { const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html'); const file = path.join(SITE, rel); if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('no'); return; } res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' }); fs.createReadStream(file).pipe(res); });
await new Promise((d) => server.listen(0, '127.0.0.1', d));
const base = `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch();
let faults = 0; let plates = 0; let tabs = 0; let foots = 0; let agains = 0; let ups = 0;
const fault = (t) => { faults++; console.log(`FAULT ${t}`); };

// the rows of every tab's key on every plate, as they stand now
const count = (page) => page.evaluate(() => [...document.querySelectorAll('main .plate:not(.plate-spec)')].map((pl) => {
  const cur = +pl.dataset.lens;
  const panes = [...pl.querySelectorAll('.side > .pane')];
  const near = pl.querySelector('.near-key');
  const under = pl.querySelector('.under');
  const keys = panes.map((p, i) => {
    const a = p.querySelector(':scope > .aside') || (i === cur && under ? under.querySelector(':scope > .aside') : null);
    const box = a ? a.firstElementChild : null;
    return { has: !!a, hidden: a ? a.hidden : null, n: box ? box.children.length : 0, shown: a ? a.getClientRects().length > 0 : false };
  });
  const head = [...pl.querySelectorAll('.plate-hd .plate-tabs button')].map((b) => b.getAttribute('aria-pressed') === 'true');
  const foot = [...pl.querySelectorAll('.plate-tabs-foot button')].map((b) => b.getAttribute('aria-pressed') === 'true');
  const footEl = pl.querySelector('.plate-tabs-foot');
  return {
    id: pl.dataset.plate, cur, keys, w: Math.round(pl.clientWidth),
    near: near ? { hidden: near.hidden, n: near.children.length, bad: near.querySelectorAll(':scope > .wn, :scope > .points').length, after: near.previousElementSibling ? near.previousElementSibling.className.split(' ')[0] : '', again: !!near.querySelector('button.again') } : null,
    head, foot, footShown: footEl ? footEl.getClientRects().length > 0 : false, own: pl.classList.contains('own-stage'), bare: pl.classList.contains('plate-bare'),
  };
}));

for (const id of ids) {
  const page = await (await browser.newContext({ viewport: { width: WIDE, height: 900 }, reducedMotion: 'reduce' })).newPage();
  const errs = []; page.on('pageerror', (e) => errs.push(String(e).slice(0, 140)));
  await page.goto(`${base}#/${id}`); await page.waitForTimeout(1600);
  // at a desk's width: every key whole, nothing under the passage
  const wide = await count(page);
  const whole = new Map();
  for (const pl of wide) {
    if (pl.near && (!pl.near.hidden || pl.near.n)) fault(`${id} ${pl.id}: at ${WIDE} the key under the passage holds ${pl.near.n}`);
    if (pl.footShown) fault(`${id} ${pl.id}: at ${WIDE} the foot's tabs show`);
    // a desk shows one tab; the others are counted as each is opened
    whole.set(pl.id, pl.keys.map((k) => k.n));
  }
  await page.setViewportSize({ width: 390, height: 844 }); await page.waitForTimeout(700);
  const n = wide.length; plates += n;
  for (let k = 0; k < n; k++) {
    const sel = `main .plate:not(.plate-spec) >> nth=${k}`;
    const nTabs = wide[k].head.length || 1;
    for (let t = 0; t < nTabs; t++) {
      if (wide[k].head.length) { await page.locator(sel).locator('.plate-hd .plate-tabs button').nth(t).click(); await page.waitForTimeout(120); }
      tabs++;
      const now = (await count(page))[k]; const was = whole.get(now.id);
      const where = `${id} ${now.id} tab ${t}`;
      if (now.cur !== t && wide[k].head.length) fault(`${where}: tab ${now.cur} shows`);
      now.keys.forEach((key, i) => {
        const up = i === now.cur && now.near && !now.near.hidden ? now.near.n : 0;
        if (key.n + up !== was[i]) fault(`${where}: the key of tab ${i} has ${key.n} rows after the caption and ${up} under the passage; whole it has ${was[i]}`);
        if (key.has && key.hidden !== (key.n === 0)) fault(`${where}: the key of tab ${i} holds ${key.n} and is ${key.hidden ? 'hidden' : 'shown'}`);
      });
      if (now.near) {
        if (now.near.bad) fault(`${where}: ${now.near.bad} remarks or notes stand under the passage`);
        if (!now.near.hidden && !['poem', 'beside'].includes(now.near.after)) fault(`${where}: the key stands after ${now.near.after}`);
        if (!now.near.hidden && (now.own || now.bare)) fault(`${where}: a key stands under a drawing`);
        if (!now.near.hidden) ups++;
      }
      if (now.head.length > 1) {
        if (!now.footShown) fault(`${where}: no tabs at the foot`);
        if (now.foot.join() !== now.head.join()) fault(`${where}: the foot's tabs say ${now.foot.map(Number).join('')}, the head's ${now.head.map(Number).join('')}`);
      } else if (now.footShown) fault(`${where}: tabs at the foot of a plate with one way`);
    }
    // a tab at the foot: the way opens and the plate's head comes to the window's top
    if (wide[k].head.length > 1) {
      const want = wide[k].head.length - 1;
      const b = page.locator(sel).locator('.plate-tabs-foot button').nth(0);
      await b.scrollIntoViewIfNeeded(); await b.click(); await page.waitForTimeout(350);
      const r = await page.evaluate((k) => { const pl = [...document.querySelectorAll('main .plate:not(.plate-spec)')][k]; return { top: Math.round(pl.getBoundingClientRect().top), cur: +pl.dataset.lens }; }, k);
      foots++;
      if (r.cur !== 0) fault(`${id} ${wide[k].id}: the foot's first tab opened tab ${r.cur}`);
      if (r.top < -2 || r.top > 30) fault(`${id} ${wide[k].id}: after the foot's tab the plate's head stands ${r.top} px under the window's top`);
      void want;
    }
    // "Draw it again" with the passage's head above the window
    const again = page.locator(sel).locator('button.again');
    for (let t = 0; t < nTabs; t++) {
      if (wide[k].head.length) { await page.locator(sel).locator('.plate-hd .plate-tabs button').nth(t).click(); await page.waitForTimeout(150); }
      const vis = await page.evaluate((k) => { const pl = [...document.querySelectorAll('main .plate:not(.plate-spec)')][k]; const b = [...pl.querySelectorAll('button.again')].find((x) => x.getClientRects().length && x.checkVisibility({ visibilityProperty: true })); if (!b) return null; const st = pl.querySelector('.stage'); const y = b.getBoundingClientRect().bottom + scrollY - innerHeight + 40; window.scrollTo({ top: Math.max(0, y), behavior: 'instant' }); return { stageTop: Math.round(st.getBoundingClientRect().top), tall: Math.round(st.getBoundingClientRect().height) }; }, k);
      if (!vis) continue;
      await page.waitForTimeout(150);
      const before = await page.evaluate((k) => Math.round([...document.querySelectorAll('main .plate:not(.plate-spec)')][k].querySelector('.stage').getBoundingClientRect().top), k);
      await page.evaluate((k) => { const pl = [...document.querySelectorAll('main .plate:not(.plate-spec)')][k]; const b = [...pl.querySelectorAll('button.again')].find((x) => x.getClientRects().length && x.checkVisibility({ visibilityProperty: true })); b.click(); }, k);
      await page.waitForTimeout(900);
      const after = await page.evaluate((k) => { const pl = [...document.querySelectorAll('main .plate:not(.plate-spec)')][k]; const st = pl.querySelector('.stage'); return { top: Math.round(st.getBoundingClientRect().top), marks: pl.querySelector('.ov').childElementCount }; }, k);
      agains++;
      if (before < 0 && (after.top < 0 || after.top > 40)) fault(`${id} ${wide[k].id} tab ${t}: the passage stood ${before} px over the window's top; after "Draw it again" it stands at ${after.top}`);
      if (before >= 0 && Math.abs(after.top - before) > 2) fault(`${id} ${wide[k].id} tab ${t}: the passage was in the window at ${before} and moved to ${after.top}`);
      if (!after.marks) fault(`${id} ${wide[k].id} tab ${t}: no marks after "Draw it again"`);
      void again;
    }
  }
  // wide again: every key whole in its place, nothing under the passage
  await page.setViewportSize({ width: WIDE, height: 900 }); await page.waitForTimeout(700);
  for (const pl of await count(page)) {
    if (pl.near && (!pl.near.hidden || pl.near.n)) fault(`${id} ${pl.id}: back at ${WIDE} the key under the passage holds ${pl.near.n}`);
    const was = whole.get(pl.id);
    pl.keys.forEach((key, i) => { if (key.n !== was[i]) fault(`${id} ${pl.id}: back at ${WIDE} the key of tab ${i} has ${key.n} rows; it had ${was[i]}`); if (key.has && key.hidden) fault(`${id} ${pl.id}: back at ${WIDE} the key of tab ${i} is hidden`); });
  }
  if (errs.length) fault(`${id}: page errors: ${errs.slice(0, 2).join(' | ')}`);
  await page.close();
}
console.log(`${ids.length} pieces, ${plates} plates, ${tabs} tabs; a key stood under its passage on ${ups}; ${foots} tabs pressed at a foot; "Draw it again" pressed ${agains} times; ${faults ? `${faults} FAULTS` : 'no fault'}`);
await browser.close(); server.close();
process.exit(faults ? 1 : 0);
