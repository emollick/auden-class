// For every plate that holds two passages: where the first passage, the second and the caption stand under each tab,
// at one or more widths. Prints numbers and labels only.
//   node pair-measure.mjs [--site dir] [--widths 390,700] [--only piece,piece]
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); return i < 0 ? null : args.splice(i, 2)[1]; };
const SITE = path.resolve(flag('site') || 'site');
const widths = (flag('widths') || '390').split(',').map(Number);
const only = (flag('only') || '').split(',').filter(Boolean);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.png': 'image/png', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;
const dir = path.join(SITE, 'data/pieces');
const todo = [];
for (const f of fs.readdirSync(dir).sort()) {
  if (f === 'index.json') continue;
  const piece = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  if (only.length && !only.includes(piece.id)) continue;
  const plates = (piece.plates || []).filter((p) => p.pair).map((p) => ({ id: p.id, lang: p.lang || 'en', pl: p.pair.lang || 'en', n: p.lenses.length, twin: !!p.beside }));
  if (plates.length) todo.push({ id: piece.id, plates });
}
const browser = await chromium.launch();
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 844 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(String(e)));
  for (const piece of todo) {
    await page.goto(`${base}#/${piece.id}`);
    await page.waitForTimeout(900);
    for (const pl of piece.plates) {
      const sel = `.plate[data-plate="${pl.id}"]`;
      await page.locator(sel).scrollIntoViewIfNeeded();
      await page.waitForTimeout(350);
      for (let i = 0; i < pl.n; i++) {
        const tabs = page.locator(`${sel} .plate-hd .plate-tabs button`);
        if (await tabs.count() > i) { await tabs.nth(i).click(); await page.waitForTimeout(650); }
        const m = await page.evaluate((s) => {
          const root = document.querySelector(s);
          const top = root.getBoundingClientRect().top;
          const box = (q) => { const n = root.querySelector(q); if (!n) return null; const r = n.getBoundingClientRect(); if (!r.height && !r.width) return null; return [Math.round(r.top - top), Math.round(r.bottom - top)]; };
          const tab = root.querySelector('.plate-tabs button[aria-pressed="true"]');
          const b = root.querySelector('.beside');
          return {
            tab: tab ? tab.textContent : '', cls: [...root.classList].filter((c) => /pair-|main-off|two-col|own-stage|side-|low|keys-/.test(c)).join(' '),
            poem: box('.poem'), beside: box('.beside'), cap: box('.pane.is-on .cap'), key: box('.pane.is-on .aside') || box('.under .aside'), h: Math.round(root.getBoundingClientRect().height),
            where: b ? b.parentNode.className : '', wide: document.documentElement.scrollWidth > innerWidth,
          };
        }, sel);
        const f = (x) => (x ? `${x[0]}-${x[1]}` : '-');
        const order = [['o', m.poem], ['e', m.beside], ['c', m.cap], ['k', m.key]].filter((x) => x[1]).sort((a, b) => a[1][0] - b[1][0]).map((x) => x[0]).join('');
        console.log(`${String(width).padEnd(5)}${piece.id.padEnd(17)}${String(pl.id).padEnd(12)}${(pl.lang + '>' + pl.pl).padEnd(6)}${m.tab.slice(0, 10).padEnd(11)}${order.padEnd(5)} orig ${f(m.poem).padEnd(10)} 2nd ${f(m.beside).padEnd(10)} cap ${f(m.cap).padEnd(10)} key ${f(m.key).padEnd(10)} h ${String(m.h).padEnd(5)} ${m.cls}${m.wide ? ' WIDER-THAN-WINDOW' : ''}`);
      }
    }
  }
  if (errs.length) console.log(`errors at ${width}: ${errs.length}: ${errs.slice(0, 3).join(' | ').slice(0, 300)}`);
  await context.close();
}
await browser.close();
server.close();
