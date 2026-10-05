// Which runs of words a plate holds together (a run that a tab marks as one thing: the kit wraps it in a
// span of class "run"; an earlier kit joined its words with spaces that do not break), and which of those
// runs stand on two lines all the same. It prints the number of the run's first word and that word only.
//   node remake/works/adams/glue.mjs [--piece adams] [--plate dynamo] [--widths 1280,390,360,320]
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const arg = (name, fallback) => { const i = process.argv.indexOf(`--${name}`); return i > 0 ? process.argv[i + 1] : fallback; };
const piece = arg('piece', 'adams');
const only = arg('plate', '');
const widths = arg('widths', '1280,390,360,320').split(',').map(Number);

const SITE = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../site');
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
let parted = 0; let runsSeen = 0; let wide = 0;
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`${base}#/${piece}`);
  await page.waitForSelector('.plates > .plate');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1500);
  const got = await page.evaluate((onlyPlate) => {
    const out = [];
    document.querySelectorAll('.plates > .plate').forEach((root) => {
      const id = root.dataset.plate;
      if (onlyPlate && id !== onlyPlate) return;
      root.querySelectorAll('.tx, .pr').forEach((tx) => {
        const ws = [...tx.querySelectorAll('.w')];
        if (!ws.length || !tx.getClientRects().length) return;
        const box = tx.getBoundingClientRect();
        const lineOf = (w) => Math.round(w.getBoundingClientRect().top);
        const report = (run) => {
          if (run.length < 2) return;
          const lines = new Set(run.map((i) => lineOf(ws[i]))).size;
          const right = Math.max(...run.map((i) => ws[i].getBoundingClientRect().right));
          out.push({ id, first: run[0], n: run.length, word: ws[run[0]].textContent.trim().split(/\s/)[0], lines, over: Math.round((right - box.right) * 10) / 10 });
        };
        // runs the kit has wrapped
        tx.querySelectorAll('.run').forEach((r) => report([...r.querySelectorAll('.w')].map((w) => ws.indexOf(w))));
        // runs joined by spaces that do not break
        let run = [];
        ws.forEach((w, i) => {
          run.push(i);
          let n = w.nextSibling; let glued = false;
          while (n && n.nodeType === 3) { if (n.data.includes(' ')) glued = true; n = n.nextSibling; }
          if (!glued) { report(run); run = []; }
        });
        report(run);
      });
    });
    return out;
  }, only);
  console.log(`== window ${width} px`);
  if (!got.length) console.log('   no run of words is held together');
  for (const g of got) {
    runsSeen += 1; if (g.lines > 1) parted += 1; if (g.over > 0.5) wide += 1;
    console.log(`   ${g.id}: ${g.n} words from word ${g.first} (first word "${g.word}"): ${g.lines > 1 ? `PARTED, on ${g.lines} lines` : 'on one line'}${g.over > 0.5 ? `, RUNS ${g.over} px past the right edge of its passage` : ''}`);
  }
  await context.close();
}
await browser.close(); server.close();
if (wide) console.log(`${wide} of ${runsSeen} runs run past the right edge of their passage`);
console.log(parted ? `${parted} of ${runsSeen} runs that are held together stand on two lines all the same` : `every run that is held together (${runsSeen}) stands on one line`);
