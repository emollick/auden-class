// The artist's closer look at one tab of this piece: a picture at any width, with every folded
// part open, the pointer on a mark, or the drawing caught while it is drawing itself in.
// It serves site/ by itself and changes nothing on disk but the picture it writes.
//   node remake/works/karamazov/look.mjs <plate> <lens> <width> <out.png>
//        [--open] [--hover x,y | --hover <css>] [--tap <css>] [--motion] [--wait ms]
//        [--clip own|plate|page] [--scale n] [--eval "js with root"] [--touch] [--then width]
//        [--patch "js with piece"]
// --touch gives the page a finger in place of a pointer (--tap then taps); --then resizes the window before the picture.
// --hover x,y is measured from the corner of the drawing (the svg of class dg).
// --patch changes the piece's built data as it is served, for a trial; the file on disk is not touched.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const SITE = '/home/user/auden-course/site';
const PIECE = 'karamazov';
const args = process.argv.slice(2);
const flag = (name, takes = true) => { const i = args.indexOf(`--${name}`); if (i < 0) return null; return takes ? args.splice(i, 2)[1] : (args.splice(i, 1), true); };
const open = flag('open', false); const hover = flag('hover'); const tap = flag('tap'); const motion = flag('motion', false);
const wait = Number(flag('wait') || 900); const clip = flag('clip') || 'plate'; const scale = Number(flag('scale') || 2); const evalJs = flag('eval');
const touch = flag('touch', false); const then = flag('then'); const patch = flag('patch');
const [plateId, lensArg, widthArg, out] = args;
const lensN = Number(lensArg || 0); const width = Number(widthArg || 1280);

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  let body = fs.readFileSync(file);
  if (patch && rel.endsWith(`data/pieces/${PIECE}.json`)) { const piece = JSON.parse(body); new Function('piece', patch)(piece); body = Buffer.from(JSON.stringify(piece)); }
  res.end(body);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: scale, reducedMotion: motion ? 'no-preference' : 'reduce', hasTouch: !!touch, isMobile: !!touch });
const page = await context.newPage();
const errs = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(`${m.type()}: ${m.text()}`); });
page.on('pageerror', (e) => errs.push(`pageerror: ${String(e)}`));
await page.goto(`${base}#/${PIECE}`);
await page.waitForTimeout(1200);
const h = await page.evaluate(() => document.documentElement.scrollHeight);
await page.setViewportSize({ width, height: Math.min(h, 15000) });
await page.waitForTimeout(900);
const plate = await page.$(`.plates > .plate[data-plate="${plateId}"]`);
if (!plate) { console.log(`no plate ${plateId}`); await browser.close(); server.close(); process.exit(1); }
const tabs = await plate.$$('.plate-tabs button');
await tabs[lensN].click(); await page.mouse.move(0, 0);
await page.waitForTimeout(wait);
if (open) { await plate.evaluate((root) => root.querySelectorAll('details').forEach((x) => { x.open = true; })); await page.waitForTimeout(300); }
if (hover != null) {
  if (/^\d+(\.\d+)?,\d+(\.\d+)?$/.test(hover)) {
    const [x, y] = hover.split(',').map(Number);
    const b = await (await plate.$('.dg')).boundingBox();
    await page.mouse.move(b.x + x, b.y + y);
  } else {
    const node = await plate.$(hover);
    if (!node) console.log(`nothing matches ${hover}`); else { const b = await node.boundingBox(); await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2); }
  }
  await page.waitForTimeout(400);
}
if (tap != null) { const node = await plate.$(tap); if (!node) console.log(`nothing matches ${tap}`); else await (touch ? node.tap() : node.click()); await page.waitForTimeout(400); }
if (then) { await page.setViewportSize({ width: Number(then), height: 900 }); await page.waitForTimeout(900); const h2 = await page.evaluate(() => document.documentElement.scrollHeight); await page.setViewportSize({ width: Number(then), height: Math.min(h2, 15000) }); await page.waitForTimeout(600); }
if (evalJs) console.log(JSON.stringify(await plate.evaluate(new Function('root', evalJs)), null, 1));
if (out) {
  if (clip === 'page') await page.screenshot({ path: out, fullPage: true });
  else await (clip === 'own' ? await plate.$('.own') : plate).screenshot({ path: out });
  console.log('->', out);
}
if (errs.length) console.log('the browser reported\n  ' + [...new Set(errs)].join('\n  '));
await browser.close(); server.close();
