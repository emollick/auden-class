// The artist's own looking-glass for the piece "blake". It changes nothing
// in the site: it serves site/ on a port of its own, as build/tools/shoot.mjs
// does, and opens the piece in the same headless browser.
//
//   node remake/works/blake/look.mjs measure   what lies on what, what comes near a comma or stop, heights, sizes of type
//   node remake/works/blake/look.mjs dots      each dot of a figure and the letter under it
//   node remake/works/blake/look.mjs spine     how far the ticks of a spine stand from the ends of their rows
//   node remake/works/blake/look.mjs page      whether anything is wider than the window; how far apart the ends of a tie stand
//   node remake/works/blake/look.mjs refs      which words each bold or italic word of a caption lights
//   node remake/works/blake/look.mjs letters   the step from letter to letter at each width and density
//   node remake/works/blake/look.mjs close     close-ups of every passage under every tab (3x), in shots/close/
//   node remake/works/blake/look.mjs zoom --plate <id> --lens <n> --width <w> --at x,y --tag <name>   one place, 6x, in shots/close/zoom/
//   node remake/works/blake/look.mjs phone     a 390 x 664 screen with the caption's last line at its foot, in shots/phone/
//   node remake/works/blake/look.mjs fold      the folded lists under Sources, opened
//   node remake/works/blake/look.mjs motion    each tab with and without reduced motion, in shots/motion/
//   node remake/works/blake/look.mjs ends      how far each end of a ruled line stands from the first and last letter over it
//   node remake/works/blake/look.mjs plates    whole plates, for a trial, in shots/try/ (with --tag <name>)
//   node remake/works/blake/look.mjs probe     with motion on: have the letters come to rest when the marks of a tab are placed (STALL, PRE, FROM, REST, KEEP)
//   node remake/works/blake/look.mjs ask '<expression>'   a question put to the page
//   node remake/works/blake/look.mjs screen --to <selector>   one screen of a window HEIGHT px tall, scrolled to a place of a plate, in shots/try/
//
// For a trial that touches nothing in the kit or the reading:
//   --css <file> [--early]   a style sheet added to the page (from the first load with --early)
//   --patch <file>           keys laid over plates of the built piece as this tool serves it
//   --mend                   plate.js as this tool serves it waits for the letters to rest before it places marks
// Also: --plate <id>, --lens <n>, --width <1280|390>; NEAR, POINT, STEP, MOVE_WAIT, MOTION, TAB_WAIT, SLOW, WIDTHS, CHROME_ARGS, DUMP in the environment.
// Words of the work are never printed: a word is named by row and number.

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const HERE = import.meta.dirname;
const ROOT = path.resolve(HERE, '../../..');
const SITE = path.join(ROOT, 'site');
const PIECE = 'blake';
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); if (i < 0) return null; return args.splice(i, 2)[1]; };
const early = (() => { const i = args.indexOf('--early'); if (i < 0) return false; args.splice(i, 1); return true; })();
const cssFile = flag('css');
// --patch <file>: keys laid over plates of the built piece as this tool serves it, { "<plate id>": { ... } }; nothing on disk changes
const patchFile = flag('patch');
const PATCH = patchFile ? JSON.parse(fs.readFileSync(path.resolve(patchFile), 'utf8')) : null;
// --mend: a trial of one mend for the kit. plate.js is served to this tool's browser with the line that places the
// marks of a newly opened tab changed, so that it waits while a letter is still changing weight. Nothing on disk changes.
const MEND = (() => { const i = args.indexOf('--mend'); if (i < 0) return false; args.splice(i, 1); return true; })();
const MEND_OLD = "timers.push(setTimeout(() => draw(run), same || still() ? 20 : 430));";
const MEND_NEW = "timers.push(setTimeout(function wait() { const busy = !!root.getAnimations && root.getAnimations({ subtree: true }).some((a) => a.transitionProperty === 'font-weight' && a.playState === 'running'); if (busy) timers.push(setTimeout(wait, 40)); else draw(run); }, same || still() ? 20 : 430));";
const tag = flag('tag') || '';
const onlyWidth = flag('width');
const onlyPlate = flag('plate');
const onlyLens = flag('lens');
const toPlace = flag('to');
const mode = args[0] || 'measure';
// WIDTHS=768,1024: other window widths than the two the picture tool takes
const WIDTHS = (process.env.WIDTHS || '1280,390').split(',').map(Number);
const extraCss = cssFile ? fs.readFileSync(path.resolve(cssFile), 'utf8') : '';

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  if (MEND && rel === '/js/kit/plate.js') {
    const src = fs.readFileSync(file, 'utf8');
    if (!src.includes(MEND_OLD)) { console.log('--mend: the line to change is not in plate.js any more'); process.exitCode = 1; }
    res.end(src.replace(MEND_OLD, MEND_NEW));
    return;
  }
  if (PATCH && rel === `/data/pieces/${PIECE}.json`) {
    const piece = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (const pl of piece.plates || []) if (PATCH[pl.id]) Object.assign(pl, PATCH[pl.id]);
    res.end(JSON.stringify(piece));
    return;
  }
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;
const slug = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 24);
// CHROME_ARGS: switches for the browser, e.g. --font-render-hinting=none to set letters by fractions of a pixel as a phone does
const browser = await chromium.launch({ args: (process.env.CHROME_ARGS || '').split(' ').filter(Boolean) });

async function open(width, height, scale, tall = true) {
  // MOTION=1: the browser does not ask for reduced motion, so the marks draw themselves as most readers see them
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: scale, reducedMotion: process.env.MOTION ? 'no-preference' : 'reduce' });
  // --early: the trial's style sheet is in place before the piece is first fitted, as it would be if the kit carried it
  if (extraCss && early) await context.addInitScript((css) => { const add = () => { const st = document.createElement('style'); st.textContent = css; document.head.append(st); }; if (document.head) add(); else document.addEventListener('DOMContentLoaded', add); }, extraCss);
  const page = await context.newPage();
  // SLOW=<n>: the browser's processor is slowed n times, as on a slow phone
  if (process.env.SLOW) { const cdp = await context.newCDPSession(page); await cdp.send('Emulation.setCPUThrottlingRate', { rate: Number(process.env.SLOW) }); }
  await page.goto(`${base}#/${PIECE}`);
  await page.waitForTimeout(1200);
  // the kit fits its type again only when the width changes: so the width is moved by a pixel and back
  if (extraCss && !early) { await page.addStyleTag({ content: extraCss }); await page.setViewportSize({ width: width + 1, height }); await page.waitForTimeout(450); await page.setViewportSize({ width, height }); await page.waitForTimeout(450); }
  if (tall) {
    let h = await page.evaluate(() => document.documentElement.scrollHeight);
    await page.setViewportSize({ width, height: Math.min(h, 15000) });
    await page.waitForTimeout(1500);
    h = await page.evaluate(() => document.documentElement.scrollHeight);
    await page.setViewportSize({ width, height: Math.min(h, 15000) });
    await page.waitForTimeout(900);
  }
  return { context, page };
}

// every plate and tab, in order
async function tabs(page, each) {
  const plates = await page.$$('.plates > .plate');
  for (const plate of plates) {
    const id = await plate.getAttribute('data-plate');
    if (onlyPlate && id !== onlyPlate) continue;
    const buttons = await plate.$$('.plate-tabs button');
    for (let i = 0; i < buttons.length; i++) {
      if (onlyLens != null && String(i) !== String(onlyLens)) continue;
      const label = ((await buttons[i].textContent()) || '').trim();
      await buttons[i].click();
      await page.waitForTimeout(Number(process.env.TAB_WAIT || 700));
      await each(plate, id, i, label);
    }
  }
}

// the row of the second version that stands under each row of the first, from the built piece
const PAIR_OF = {};
try {
  const built = JSON.parse(fs.readFileSync(path.join(SITE, 'data', 'pieces', `${PIECE}.json`), 'utf8'));
  for (const p of built.plates || []) {
    if (!p.pair) continue;
    const own = (p.rows || []).filter((r) => !r.aside);
    PAIR_OF[p.id] = Object.fromEntries(own.map((r, k) => [r.id, p.pair.rows[k] ? p.pair.rows[k].id : '']));
    PAIR_OF[p.id].__order = p.pair.rows.map((r) => r.id);
  }
} catch (e) { /* the piece is not built yet */ }

// ---------- measure ----------
// The ink of a word or a label: its letters, not the box the line gives it.
const MEASURE = (root, pairOf = {}) => {
  const cv = document.createElement('canvas').getContext('2d');
  const fontOf = (n) => { const cs = getComputedStyle(n); return `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`; };
  const inkOf = (node, lineNode) => {
    cv.font = fontOf(lineNode);
    const m = cv.measureText(node.textContent);
    const r = lineNode.getBoundingClientRect();
    const A = m.fontBoundingBoxAscent; const D = m.fontBoundingBoxDescent;
    const baseY = r.top + (r.height - (A + D)) / 2 + A;
    const w = node.getBoundingClientRect();
    return { l: w.left, r: w.right, t: baseY - m.actualBoundingBoxAscent, b: baseY + m.actualBoundingBoxDescent, base: baseY };
  };
  // each letter and each point of a word by itself, so that a stroke is tested against what is under it
  const charsOf = (w) => {
    const out = [];
    const walker = document.createTreeWalker(w, NodeFilter.SHOW_TEXT);
    let node; let k = 0;
    while ((node = walker.nextNode())) {
      cv.font = fontOf(node.parentElement);
      const fm = cv.measureText('x'); const A = fm.fontBoundingBoxAscent; const D = fm.fontBoundingBoxDescent;
      for (let i = 0; i < node.data.length; i++) {
        k++;
        const ch = node.data[i];
        if (!ch.trim()) continue;
        const r = document.createRange(); r.setStart(node, i); r.setEnd(node, i + 1);
        const q = r.getBoundingClientRect();
        if (!q.width) continue;
        const base = q.top + (q.height - (A + D)) / 2 + A;
        const m = cv.measureText(ch);
        // the box of the ink of this one letter or point
        out.push({ k, l: q.left - m.actualBoundingBoxLeft, r: q.left + m.actualBoundingBoxRight, t: base - m.actualBoundingBoxAscent, b: base + m.actualBoundingBoxDescent, point: !/[\p{L}\p{N}]/u.test(ch) });
      }
    }
    return out;
  };
  const stage = root.querySelector('.stage');
  const words = [];
  root.querySelectorAll('.row').forEach((row) => {
    const id = row.getAttribute('data-row');
    row.querySelectorAll(':scope > p').forEach((p) => {
      const pair = p.classList.contains('pr');
      [...p.querySelectorAll('.w')].forEach((w, n) => {
        const sy = w.querySelector('.sy');
        if (!sy) return;
        words.push({ name: `${pair ? (pairOf[id] || `under ${id}`) : id}/${n}`, pair, chars: charsOf(w), ...inkOf(w, sy) });
      });
    });
  });
  // a second version set beside the first: its rows are named in order
  root.querySelectorAll('.beside .pr').forEach((p, k) => {
    const id = (pairOf.__order || [])[k] || `beside ${k}`;
    [...p.querySelectorAll('.w')].forEach((w, n) => { const sy = w.querySelector('.sy'); if (sy) words.push({ name: `${id}/${n}`, pair: true, chars: charsOf(w), ...inkOf(w, sy) }); });
  });
  const hits = [];
  // labels on words
  const labels = [...stage.querySelectorAll('.gl')].filter((g) => getComputedStyle(g).opacity !== '0');
  const labInk = labels.map((g) => ({ g, cls: g.className, text: g.textContent, ...inkOf(g, g) }));
  for (const L of labInk) {
    const on = [];
    for (const w of words) {
      const dx = Math.min(L.r, w.r) - Math.max(L.l, w.l); const dy = Math.min(L.b, w.b) - Math.max(L.t, w.t);
      if (dx > 1 && dy > 0.5) on.push(`${w.name} (${dy.toFixed(1)}px deep)`);
    }
    if (on.length) hits.push(`label "${L.text}" [${L.cls.replace('gl', '').trim() || 'gloss'}] lies on ${on.join(', ')}`);
  }
  // a label that stands within 2px of the letters of the line under it, without touching them
  for (const L of labInk) {
    let least = 99; let who = '';
    for (const w of words) {
      const dx = Math.min(L.r, w.r) - Math.max(L.l, w.l);
      if (dx > 1 && w.t >= L.b - 0.5 && w.t - L.b < least) { least = w.t - L.b; who = w.name; }
    }
    if (least < (pairOf.__near || 2)) hits.push(`label "${L.text}" [${L.cls.replace('gl', '').trim() || 'gloss'}] stands ${least.toFixed(1)}px over ${who}`);
  }
  // strokes on words: every drawn line is walked in 1.5px steps
  const sb = stage.getBoundingClientRect();
  const paths = [...stage.querySelectorAll('.ov path, .ov circle')];
  for (const p of paths) {
    const cs = getComputedStyle(p);
    if (cs.opacity === '0' || p.classList.contains('ph')) continue;
    const pts = [];
    if (p.tagName === 'circle') { const cx = +p.getAttribute('cx'); const cy = +p.getAttribute('cy'); const r = +p.getAttribute('r'); for (let a = 0; a < 8; a++) pts.push({ x: cx + r * Math.cos(a * Math.PI / 4), y: cy + r * Math.sin(a * Math.PI / 4) }); pts.push({ x: cx, y: cy }); }
    else { const n = p.getTotalLength(); for (let s = 0; s <= n; s += 1.5) { const q = p.getPointAtLength(s); pts.push({ x: q.x, y: q.y }); } }
    const half = (parseFloat(cs.strokeWidth) || 1) / 2;
    const on = new Map(); const close = new Map();
    for (const q of pts) {
      const x = q.x + sb.left; const y = q.y + sb.top;
      for (const w of words) {
        if (!(x > w.l + 0.5 && x < w.r - 0.5 && y + half > w.t + 0.75 && y - half < w.b - 0.75)) continue;
        // inside the box of the word: is a letter or a point of it under the stroke here?
        const c = w.chars.find((ch) => x + half > ch.l + 0.2 && x - half < ch.r - 0.2 && y + half > ch.t + 0.2 && y - half < ch.b - 0.2);
        if (!c) continue;
        const name = `${w.name} ${c.point ? 'point' : 'letter'} ${c.k}`;
        on.set(name, (on.get(name) || 0) + 1);
      }
      // how near the stroke comes to a comma, a stop or another point without crossing it
      for (const w of words) {
        if (x < w.l - 6 || x > w.r + 6 || y < w.t - 6 || y > w.b + 8) continue;
        for (const ch of w.chars) {
          if (!ch.point) continue;
          const d = Math.hypot(Math.max(ch.l - (x + half), (x - half) - ch.r, 0), Math.max(ch.t - (y + half), (y - half) - ch.b, 0));
          const name = `${w.name} point ${ch.k}`;
          if (d < (pairOf.__point || 1.5) && !(d >= (close.get(name) ?? 99))) close.set(name, d);
        }
      }
    }
    if (on.size) {
      const col = (p.style.stroke || p.style.fill || p.getAttribute('stroke') || p.getAttribute('fill') || '').replace(/var\(--|\)/g, '');
      const bb = p.getBBox();
      hits.push(`${p.tagName} ${col} (${Math.round(bb.width)}x${Math.round(bb.height)} at ${Math.round(bb.x)},${Math.round(bb.y)}) crosses the ink of ${[...on].map(([k, v]) => `${k} x${v}`).join(', ')}`);
    }
    for (const [name, d] of close) {
      if ([...on.keys()].includes(name)) continue;
      const col = (p.style.stroke || p.style.fill || p.getAttribute('stroke') || p.getAttribute('fill') || '').replace(/var\(--|\)/g, '');
      const bb = p.getBBox();
      hits.push(`${p.tagName} ${col} (${Math.round(bb.width)}x${Math.round(bb.height)} at ${Math.round(bb.x)},${Math.round(bb.y)}) comes ${d.toFixed(1)}px from ${name}`);
    }
  }
  // a line that is wider than the column it stands in
  const poemBox = root.querySelector('.poem').getBoundingClientRect();
  root.querySelectorAll('.row').forEach((row) => {
    const tx = row.querySelector('.tx'); if (!tx || !poemBox.width) return;
    const range = document.createRange(); range.selectNodeContents(tx);
    const over = range.getBoundingClientRect().right - poemBox.right;
    if (over > 0.5) hits.push(`row ${row.getAttribute('data-row')} is ${over.toFixed(1)}px wider than its column`);
  });
  const h = (sel) => { const n = root.querySelector(sel); return n ? Math.round(n.getBoundingClientRect().height) : 0; };
  const pane = root.querySelector('.pane.is-on');
  const cap = pane ? pane.querySelector('.cap') : null; const aside = root.querySelector('.under:not([hidden]) .aside') || (pane ? pane.querySelector('.aside') : null);
  const low = root.classList.contains('low');
  const tx = root.querySelector('.tx'); const pr = root.querySelector('.pr'); const gl = stage.querySelector('.gl:not(.num)'); const num = stage.querySelector('.gl.num');
  const px = (n, prop) => (n ? getComputedStyle(n)[prop] : '');
  return {
    hits,
    low,
    sizes: { plate: Math.round(root.getBoundingClientRect().height), head: h('.plate-hd'), stage: h('.stage'), cap: cap ? Math.round(cap.getBoundingClientRect().height) : 0, aside: aside ? Math.round(aside.getBoundingClientRect().height) : 0 },
    type: { tx: px(tx, 'fontSize'), txLine: px(tx, 'lineHeight'), pr: px(pr, 'fontSize'), prLine: px(pr, 'lineHeight'), gloss: px(gl, 'fontSize'), num: px(num, 'fontSize'), cap: px(cap, 'fontSize'), aside: px(aside, 'fontSize'), band: getComputedStyle(root).getPropertyValue('--band'), turns: root.classList.contains('turns') },
  };
};

if (mode === 'measure') {
  for (const width of WIDTHS) {
    if (onlyWidth && String(width) !== onlyWidth) continue;
    const { context, page } = await open(width, 900, 1);
    await tabs(page, async (plate, id, i, label) => {
      const m = await plate.evaluate(MEASURE, { ...(PAIR_OF[id] || {}), __near: Number(process.env.NEAR || 2), __point: Number(process.env.POINT || 1.5) });
      console.log(`${width}px  ${id}  ${i} ${label}`);
      console.log(`      heights: plate ${m.sizes.plate}, head ${m.sizes.head}, passage ${m.sizes.stage}, caption ${m.sizes.cap}, key ${m.sizes.aside}${m.low ? ' (the key stands under the passage)' : ''}`);
      console.log(`      type: text ${m.type.tx} on ${m.type.txLine}${m.type.pr ? `, pair ${m.type.pr} on ${m.type.prLine}` : ''}${m.type.gloss ? `, gloss ${m.type.gloss}` : ''}${m.type.num ? `, number ${m.type.num}` : ''}, caption ${m.type.cap}, key ${m.type.aside}, band ${m.type.band}${m.type.turns ? ', lines turn over' : ''}`);
      for (const hline of m.hits) console.log(`      ! ${hline}`);
    });
    await context.close();
  }
}

// ---------- close-ups ----------
if (mode === 'close') {
  const out = path.join(HERE, 'shots', 'close');
  fs.mkdirSync(out, { recursive: true });
  for (const width of WIDTHS) {
    if (onlyWidth && String(width) !== onlyWidth) continue;
    const { context, page } = await open(width, 900, 3);
    await tabs(page, async (plate, id, i, label) => {
      // one close-up for each group of rows: a long prose plate is cut at each row, a short one is shown whole
      const boxes = await plate.evaluate((root) => {
        const stage = root.querySelector('.stage').getBoundingClientRect();
        let rows = [...root.querySelectorAll('.row, .beside .pr')].map((r, k) => ({ id: r.getAttribute('data-row') || `second-${k}`, own: r.classList.contains('row'), r: r.getBoundingClientRect() })).sort((p, q) => p.r.top - q.r.top);
        // two passages side by side with level rows: one close-up for each row of the first, with the row beside it
        const first = rows.filter((q) => q.own); const second = rows.filter((q) => !q.own);
        if (first.length && second.length && second[0].r.left > first[0].r.left + 100) rows = first;
        const whole = { name: 'all', x: stage.left - 10, y: stage.top - 14, w: stage.width + 20, h: stage.height + 28 };
        if (stage.height < 520) return [whole];
        return rows.map((q, k) => {
          const top = k === 0 ? stage.top - 14 : q.r.top - 26; const bottom = k === rows.length - 1 ? stage.bottom + 14 : rows[k + 1].r.top + 30;
          return { name: q.id.replace('.', '-'), x: stage.left - 10, y: top, w: stage.width + 20, h: bottom - top };
        });
      });
      for (const b of boxes) {
        const file = path.join(out, `${PIECE}-${slug(id)}-${i}-${slug(label)}-${width}-${b.name}${tag ? `-${tag}` : ''}.png`);
        await page.screenshot({ path: file, clip: { x: Math.max(0, b.x), y: Math.max(0, b.y), width: Math.min(b.w, width - Math.max(0, b.x)), height: b.h } });
        console.log(path.relative(ROOT, file));
      }
    });
    await context.close();
  }
}

// ---------- a phone's screen ----------
// 390 x 844 is the whole glass; a browser's bars leave about 664 of it. Each tab is
// photographed with the last line of its caption at the foot of the 664, which is how
// it stands when the caption has just been read: the picture shows how much of the passage is still in sight.
if (mode === 'phone') {
  const out = path.join(HERE, 'shots', 'phone');
  fs.mkdirSync(out, { recursive: true });
  const SEEN = 664;
  const { context, page } = await open(390, SEEN, 2, false);
  await tabs(page, async (plate, id, i, label) => {
    const m = await plate.evaluate((root) => {
      const y = scrollY;
      const stage = root.querySelector('.stage').getBoundingClientRect();
      const cap = root.querySelector('.pane.is-on .cap').getBoundingClientRect();
      const marks = [...root.querySelectorAll('.ov path, .ov circle, .gl')].map((n) => n.getBoundingClientRect()).filter((r) => r.width + r.height > 0);
      const lastMark = marks.length ? Math.max(...marks.map((r) => r.bottom)) : stage.bottom;
      const firstMark = marks.length ? Math.min(...marks.map((r) => r.top)) : stage.top;
      return { stageTop: stage.top + y, stageBottom: stage.bottom + y, capTop: cap.top + y, capBottom: cap.bottom + y, firstMark: firstMark + y, lastMark: lastMark + y };
    });
    const top = Math.max(0, Math.round(m.capBottom + 12 - SEEN));
    await page.evaluate((y) => scrollTo(0, y), top);
    await page.waitForTimeout(350);
    const file = path.join(out, `${PIECE}-phone-${slug(id)}-${i}-${slug(label)}${tag ? `-${tag}` : ''}.png`);
    await page.screenshot({ path: file });
    const stageH = m.stageBottom - m.stageTop;
    const inSight = Math.max(0, Math.min(m.stageBottom, top + SEEN) - Math.max(m.stageTop, top));
    const marksH = m.lastMark - m.firstMark;
    const marksIn = Math.max(0, Math.min(m.lastMark, top + SEEN) - Math.max(m.firstMark, top));
    console.log(`${id}  ${i} ${label}: passage ${Math.round(stageH)}px, caption ${Math.round(m.capBottom - m.capTop)}px; with the whole caption on a ${SEEN}px screen, ${Math.round(inSight)}px of the passage is in sight (${Math.round(100 * inSight / stageH)}%), and ${Math.round(100 * marksIn / Math.max(1, marksH))}% of the height its marks cover  ->  ${path.relative(ROOT, file)}`);
  });
  await context.close();
}

// ---------- whole plates, for a trial ----------
// As build/tools/shoot.mjs photographs them, but with the trial's style sheet (or its changed data) in place.
if (mode === 'plates') {
  const out = path.join(HERE, 'shots', 'try');
  fs.mkdirSync(out, { recursive: true });
  for (const width of WIDTHS) {
    if (onlyWidth && String(width) !== onlyWidth) continue;
    const { context, page } = await open(width, 900, width < 600 ? 2 : 1);
    await tabs(page, async (plate, id, i, label) => {
      const file = path.join(out, `${PIECE}-${slug(id)}-${i}-${slug(label)}-${width}${tag ? `-${tag}` : ''}.png`);
      await plate.screenshot({ path: file });
      console.log(path.relative(ROOT, file));
    });
    await context.close();
  }
}

// ---------- the words a caption lights ----------
// A word in bold or italic in a caption lights the words of the passage that match it.
// For each such word: how many words it lights, and which (row/number).
if (mode === 'refs') {
  const { context, page } = await open(1280, 900, 1);
  await tabs(page, async (plate, id, i, label) => {
    const marked = await plate.$$('.pane.is-on .cap b, .pane.is-on .cap i');
    const lines = [];
    for (const node of marked) {
      const isRef = await node.evaluate((n) => n.classList.contains('ref'));
      const text = (await node.textContent()) || '';
      if (!isRef) { lines.push(`"${text}": lights nothing`); continue; }
      await node.hover();
      await page.waitForTimeout(60);
      const lit = await plate.evaluate((root, order) => [...root.querySelectorAll('.w.lit')].map((w) => {
        const p = w.closest('p'); const row = w.closest('.row');
        const n = [...p.querySelectorAll('.w')].indexOf(w);
        if (!row) return `${order[[...root.querySelectorAll('.beside .pr')].indexOf(p)] || 'second'}/${n}`;
        return `${p.classList.contains('pr') ? 'under ' : ''}${row.getAttribute('data-row')}/${n}`;
      }), (PAIR_OF[id] || {}).__order || []);
      lines.push(`"${text}": lights ${lit.length}: ${lit.join(' ')}`);
      await page.mouse.move(2, 2);
    }
    console.log(`${id}  ${i} ${label}\n      ${lines.join('\n      ')}`);
  });
  await context.close();
}

// ---------- the ends of the rules ----------
// For every ruled line under the words: how far its left end stands from the first letter it
// underlines and its right end from the last. With MOTION=1 and TAB_WAIT this shows whether the
// marks were measured before the words had come to rest.
const ENDS = (root) => {
  const stage = root.querySelector('.stage'); const sb = stage.getBoundingClientRect();
  const words = []; const syl = [];
  const take = (w, name) => { const b = w.querySelector('.wb') || w; for (const q of b.getClientRects()) words.push({ name, l: q.left, r: q.right, t: q.top, b: q.bottom }); w.querySelectorAll('.sy').forEach((y) => { const q = y.getBoundingClientRect(); syl.push({ name, cx: (q.left + q.right) / 2, b: q.bottom }); }); };
  root.querySelectorAll('.row').forEach((row) => { const rid = row.getAttribute('data-row'); [...row.querySelectorAll(':scope > .tx .w, :scope > p:not(.pr) .w')].forEach((w, n) => take(w, `${rid}/${n}`)); });
  root.querySelectorAll('.beside .pr').forEach((p, k) => [...p.querySelectorAll('.w')].forEach((w, n) => take(w, `second ${k}/${n}`)));
  const out = [];
  for (const p of stage.querySelectorAll('.ov path, .ov circle')) {
    if (getComputedStyle(p).opacity === '0' || p.classList.contains('ph')) continue;
    const col = (p.style.stroke || p.style.fill || p.getAttribute('stroke') || p.getAttribute('fill') || '').replace(/var\(--|\)/g, '');
    if (p.tagName === 'circle') {
      // a dot of the Beat tab stands under the middle of its syllable (the dots of a figure are tested by the mode dots)
      if (!root.classList.contains('lens-beat')) continue;
      const x = +p.getAttribute('cx') + sb.left; const y = +p.getAttribute('cy') + sb.top;
      const near = syl.filter((s) => s.b <= y && s.b >= y - 40);
      if (!near.length) continue;
      const s = near.reduce((a, q) => (Math.abs(q.cx - x) < Math.abs(a.cx - x) ? q : a));
      out.push(`dot ${col} under ${s.name}: ${(x - s.cx).toFixed(1)}px from the middle of its syllable`);
      continue;
    }
    const bb = p.getBBox(); if (bb.width < 8 || bb.height > 6) continue;
    const l = bb.x + sb.left; const r = bb.x + bb.width + sb.left; const y = bb.y + sb.top;
    const line = words.filter((w) => w.b <= y + 6 && w.b >= y - 26 && w.r > l - 12 && w.l < r + 12);
    if (!line.length) continue;
    const first = line.reduce((a, w) => (Math.abs(w.l - l) < Math.abs(a.l - l) ? w : a));
    const last = line.reduce((a, w) => (Math.abs(w.r - r) < Math.abs(a.r - r) ? w : a));
    out.push(`${col} from ${first.name} to ${last.name}: left end ${(l - first.l).toFixed(1)}px from the first letter, right end ${(r - last.r).toFixed(1)}px from the last`);
  }
  return out;
};
const RESTS = (r) => /^ink /.test(r) || /left end -?0\.0px from the first letter, right end -?0\.0px/.test(r) || /: -?0\.0px from the middle/.test(r);
if (mode === 'ends') {
  for (const width of WIDTHS) {
    if (onlyWidth && String(width) !== onlyWidth) continue;
    const { context, page } = await open(width, 900, 1);
    await tabs(page, async (plate, id, i, label) => {
      const rows = await plate.evaluate(ENDS);
      console.log(`${width}px  ${id}  ${i} ${label}`);
      rows.forEach((r) => console.log(`      ${r}`));
    });
    await context.close();
  }
}

// ---------- when the marks are placed ----------
// With motion on, the kit places the marks of a newly opened tab 430 ms after the tap. This asks
// whether the letters have come to rest by then: the width of the first row just before the marks
// are placed, and its width at rest. PRE=1 opens the tabs of the plates before it first, REST is
// the wait after each tab (ms).
if (mode === 'probe') {
  const width = Number(onlyWidth || 1280); const id = onlyPlate || 'sentence'; const to = Number(onlyLens ?? 1);
  const rest = Number(process.env.REST || 3000);
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'no-preference' });
  const page = await context.newPage();
  await page.goto(`${base}#/${PIECE}`);
  await page.waitForTimeout(1500);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(rest);
  for (const plate of await page.$$('.plates > .plate')) {
    const pid = await plate.getAttribute('data-plate');
    const buttons = await plate.$$('.plate-tabs button');
    if (pid !== id) {
      if (process.env.PRE) for (const b of buttons) { await b.click(); await page.waitForTimeout(rest); if (process.env.SHOT) await (await plate.$('.stage')).screenshot(); }
      continue;
    }
    const from = process.env.FROM != null ? [Number(process.env.FROM)] : [...Array(to).keys()];
    for (const i of from) { await buttons[i].click(); await page.waitForTimeout(rest); if (process.env.SHOT) await (await plate.$('.stage')).screenshot(); }
    await plate.evaluate((root, stall) => {
      const row = root.querySelector('.row .tx');
      const wide = () => { const r = document.createRange(); r.selectNodeContents(row); return r.getBoundingClientRect().width; };
      window.__probe = { before: wide() };
      document.addEventListener('click', () => {
        const t0 = performance.now(); window.__probe.frames = [];
        const tick = () => { window.__probe.frames.push(Math.round(performance.now() - t0)); if (performance.now() - t0 < 700) requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
        // STALL=<ms>: the page is kept busy from 150 ms after the tap, as a slow device would be
        if (stall) setTimeout(() => { const t = performance.now(); while (performance.now() - t < stall) { /* busy */ } }, 150);
        for (const ms of [0, 100, 200, 300, 400, 428, 500, 700, 1500]) setTimeout(() => { window.__probe[`at ${ms}`] = `${wide().toFixed(2)} (after ${Math.round(performance.now() - t0)} ms)`; }, ms);
      }, { capture: true, once: true });
    }, Number(process.env.STALL || 0));
    await buttons[to].click();
    await page.waitForTimeout(3000);
    const seen = await page.evaluate(() => window.__probe);
    const fr = seen.frames || []; delete seen.frames;
    console.log(`${width}px ${id}, tab ${to} opened after tab ${from[from.length - 1]}: width of the first row`);
    for (const [k, v] of Object.entries(seen)) console.log(`      ${k}: ${typeof v === 'number' ? v.toFixed(2) : v}`);
    const gaps = fr.map((t, k) => (k ? t - fr[k - 1] : t));
    console.log(`      frames in the first 700 ms: ${fr.length}; longest wait between two: ${Math.max(...gaps)} ms; first at ${fr[0]} ms`);
    const off = (await plate.evaluate(ENDS)).filter((r) => !RESTS(r));
    console.log(off.length ? `      rules that do not end with their words:\n        ${off.join('\n        ')}` : '      every rule ends with its words');
    // KEEP=<name>: the stage is photographed as the run left it, in shots/motion/, named -off or -right
    if (process.env.KEEP) {
      const file = path.join(HERE, 'shots', 'motion', `blake-${id}-${to}-${width}-probe-${process.env.KEEP}${off.length ? '-off' : '-right'}.png`);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      await page.mouse.move(0, 0);
      await (await plate.$('.stage')).screenshot({ path: file });
      console.log(`      ${path.relative(ROOT, file)}`);
    }
  }
  await context.close();
}

// ---------- with motion ----------
// The picture tool asks the browser for reduced motion. A reader who has not asked for it sees
// the marks draw themselves. Each tab is photographed both ways, the moving one after it has come to rest.
if (mode === 'motion') {
  const out = path.join(HERE, 'shots', 'motion');
  fs.mkdirSync(out, { recursive: true });
  for (const width of WIDTHS) {
    if (onlyWidth && String(width) !== onlyWidth) continue;
    for (const moving of [false, true]) {
      const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1, reducedMotion: moving ? 'no-preference' : 'reduce' });
      const page = await context.newPage();
      await page.goto(`${base}#/${PIECE}`);
      await page.waitForTimeout(1500);
      const h = await page.evaluate(() => document.documentElement.scrollHeight);
      await page.setViewportSize({ width, height: Math.min(h, 15000) });
      await page.waitForTimeout(moving ? 9000 : 1500);
      const plates = await page.$$('.plates > .plate');
      for (const plate of plates) {
        const id = await plate.getAttribute('data-plate');
        if (onlyPlate && id !== onlyPlate) continue;
        const buttons = await plate.$$('.plate-tabs button');
        for (let i = 0; i < buttons.length; i++) {
          if (onlyLens != null && String(i) !== String(onlyLens)) continue;
          const label = ((await buttons[i].textContent()) || '').trim();
          await buttons[i].click();
          // the hairline of a Beat tab takes about 13 s to cross two lines of fourteen syllables
          await page.waitForTimeout(moving ? Number(process.env.MOVE_WAIT || 16000) : 700);
          await page.mouse.move(2, 2);
          const stage = await plate.$('.stage');
          await stage.screenshot({ path: path.join(out, `${PIECE}-${slug(id)}-${i}-${slug(label)}-${width}-${moving ? 'moved' : 'still'}.png`) });
          const off = (await plate.evaluate(ENDS)).filter((r) => !RESTS(r));
          if (off.length) { console.log(`${width}px ${id} ${i} ${label}, ${moving ? 'with motion' : 'still'}: rules that do not end with their words`); off.forEach((r) => console.log(`      ${r}`)); }
        }
      }
      await context.close();
    }
  }
  console.log(`pictures in ${path.relative(ROOT, out)}`);
}

// ---------- the folded lists ----------
if (mode === 'fold') {
  const out = path.join(HERE, 'shots', 'close');
  fs.mkdirSync(out, { recursive: true });
  for (const width of WIDTHS) {
    const { context, page } = await open(width, 900, width < 600 ? 2 : 1);
    await page.evaluate(() => document.querySelectorAll('.sources details').forEach((d) => { d.open = true; }));
    await page.waitForTimeout(300);
    const sec = await page.$('.sources');
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    await page.setViewportSize({ width, height: Math.min(h, 15000) });
    await page.waitForTimeout(400);
    const file = path.join(out, `${PIECE}-sources-open-${width}.png`);
    await sec.screenshot({ path: file });
    const n = await page.evaluate(() => [...document.querySelectorAll('.sources details')].map((d) => `${d.querySelector('summary').textContent}: ${d.querySelectorAll('li').length} entries`));
    console.log(`${width}px  ${n.join('; ')}  ->  ${path.relative(ROOT, file)}`);
    await context.close();
  }
}


// ---------- the dots at the ends of a figure's joins, letter by letter ----------
// For each dot that stands over a word: which letter of the word it stands over (counted from 1),
// and how far the foot of the dot is from the top of that letter's ink (a minus sign: the dot is in the letter).
if (mode === 'dots') {
  for (const width of WIDTHS) {
    if (onlyWidth && String(width) !== onlyWidth) continue;
    const { context, page } = await open(width, 900, 1);
    await tabs(page, async (plate, id, i, label) => {
      const rows = await plate.evaluate((root) => {
        const cv = document.createElement('canvas').getContext('2d');
        const out = [];
        const circles = [...root.querySelectorAll('.ov circle')];
        if (!circles.length) return out;
        root.querySelectorAll('.row').forEach((row) => {
          [...row.querySelectorAll('.tx .w')].forEach((w, n) => {
            const sy = w.querySelector('.sy'); if (!sy) return;
            const cs = getComputedStyle(sy); cv.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
            const fm = cv.measureText('x'); const box = sy.getBoundingClientRect();
            const base = box.top + (box.height - (fm.fontBoundingBoxAscent + fm.fontBoundingBoxDescent)) / 2 + fm.fontBoundingBoxAscent;
            const wr = w.getBoundingClientRect();
            for (const c of circles) {
              const r = c.getBoundingClientRect(); const cx = (r.left + r.right) / 2; const foot = r.bottom;
              if (cx < wr.left || cx > wr.right || r.top > wr.bottom || foot < wr.top - 3 || r.top > base) continue;
              // the letter under the middle of the dot
              const walker = document.createTreeWalker(w, NodeFilter.SHOW_TEXT); let k = 0; let node;
              while ((node = walker.nextNode())) {
                for (let j = 0; j < node.length; j++) {
                  k++;
                  const range = document.createRange(); range.setStart(node, j); range.setEnd(node, j + 1);
                  const q = range.getBoundingClientRect();
                  if (r.right < q.left + 0.3 || r.left > q.right - 0.3) continue;
                  const top = base - cv.measureText(node.data[j]).actualBoundingBoxAscent;
                  out.push(`${row.getAttribute('data-row')} w${n} letter ${k}: the foot of the dot is ${(top - foot).toFixed(1)}px above the letter`);
                }
              }
            }
          });
        });
        return out;
      });
      if (rows.length) console.log(`${width}px  ${id}  ${label}\n      ${rows.join('\n      ')}`);
    });
    await context.close();
  }
}

// ---------- the spine of the Frame tab ----------
// How far the ticks of the spine end from the end of each row they point at.
if (mode === 'spine') {
  for (const width of WIDTHS) {
    const { context, page } = await open(width, 900, 1);
    await tabs(page, async (plate, id, i, label) => {
      if (label !== 'Frame') return;
      const m = await plate.evaluate((root) => {
        const sb = root.querySelector('.stage').getBoundingClientRect();
        const paths = [...root.querySelectorAll('.ov path')].map((p) => ({ p, bb: p.getBBox() })).filter((q) => q.bb.height > 60);
        if (!paths.length) return 'no spine found';
        const sp = paths[0].bb;
        const rows = [...root.querySelectorAll('.row')].map((row) => { const range = document.createRange(); range.selectNodeContents(row.querySelector('.tx')); const q = range.getBoundingClientRect(); return { id: row.getAttribute('data-row'), right: q.right - sb.left, cy: (q.top + q.bottom) / 2 - sb.top }; });
        const near = rows.filter((r) => r.cy > sp.y - 4 && r.cy < sp.y + sp.height + 4);
        return `the spine stands at x ${Math.round(sp.x + sp.width)} and its ticks begin at x ${Math.round(sp.x)}; the stage is ${Math.round(sb.width)} wide; ` + near.map((r) => `${r.id} ends ${(sp.x - r.right).toFixed(1)}px before its tick`).join(', ');
      });
      console.log(`${width}px  ${id}  ${label}: ${m}`);
    });
    await context.close();
  }
}

// ---------- the page as a whole ----------
// Whether anything is wider than the screen, and how far apart the two ends of each tie stand.
if (mode === 'page') {
  for (const width of WIDTHS) {
    const { context, page } = await open(width, 900, 1);
    const m = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const wide = [...document.querySelectorAll('body *')].filter((n) => { const r = n.getBoundingClientRect(); return r.width > 0 && (r.right > vw + 0.5 || r.left < -0.5); }).map((n) => `${n.tagName.toLowerCase()}.${String(n.className && n.className.baseVal !== undefined ? n.className.baseVal : n.className).split(' ').join('.')}`);
      const out = { vw, scrollW: document.documentElement.scrollWidth, wide: [...new Set(wide)].slice(0, 12), ties: [], spans: [] };
      const plate = document.querySelector('.plate.is-beside, .plate.is-interlinear');
      if (plate) {
        const nums = [...plate.querySelectorAll('.gl.num')];
        const by = {};
        nums.forEach((g) => { (by[g.textContent] = by[g.textContent] || []).push(g.getBoundingClientRect().top); });
        out.ties = Object.entries(by).map(([k, v]) => `${k}: ${Math.round(Math.max(...v) - Math.min(...v))}px`);
        const st = plate.querySelector('.stage').getBoundingClientRect(); const cap = plate.querySelector('.pane.is-on .cap').getBoundingClientRect();
        const poem = plate.querySelector('.poem').getBoundingClientRect(); const bes = plate.querySelector('.beside'); const b2 = bes ? bes.getBoundingClientRect() : null;
        out.spans = [`passage top to caption bottom ${Math.round(cap.bottom - st.top)}px`, `first passage ${Math.round(poem.height)}px`, b2 ? `second passage ${Math.round(b2.height)}px` : '', `caption line ${Math.round(cap.width)}px wide at ${getComputedStyle(plate.querySelector('.pane.is-on .cap')).fontSize}`];
      }
      return out;
    });
    console.log(`${width}px: the page is ${m.scrollW}px wide in a window of ${m.vw}px${m.wide.length ? `; wider than the window: ${m.wide.join(', ')}` : '; nothing stands outside the window'}`);
    if (m.ties.length) console.log(`      creed, Answer: from one end of a tie down to the other: ${m.ties.join(', ')}`);
    if (m.spans.length) console.log(`      creed: ${m.spans.filter(Boolean).join('; ')}`);
    await context.close();
  }
}

// ---------- one small place, enlarged ----------
// node look.mjs zoom --plate creed --lens 1 --width 1280 --at 460,349 --tag name
// The place is given as measure prints it (x,y on the stage); 130 x 76 px of the page are shown six times enlarged.
if (mode === 'zoom') {
  const at = (flag('at') || '0,0').split(',').map(Number);
  const width = Number(onlyWidth || 1280);
  const { context, page } = await open(width, 900, 6);
  await tabs(page, async (plate, id, i) => {
    const sb = await plate.evaluate((root) => { const q = root.querySelector('.stage').getBoundingClientRect(); return { x: q.left + window.scrollX, y: q.top + window.scrollY }; });
    const file = path.join(HERE, 'shots', 'close', 'zoom', `${tag || `${id}-${i}-${width}`}.png`);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    await page.mouse.move(0, 0);
    await page.screenshot({ path: file, clip: { x: Math.max(0, sb.x + at[0] - 65), y: Math.max(0, sb.y + at[1] - 38), width: 130, height: 76 } });
    console.log(path.relative(ROOT, file));
  });
  await context.close();
}

// ---------- a question put to the page ----------
// node look.mjs ask '<an expression the page works out>' [--width 390]
if (mode === 'ask') {
  for (const width of WIDTHS) {
    if (onlyWidth && String(width) !== String(onlyWidth)) continue;
    const { context, page } = await open(width, 900, 1);
    // with --plate and --lens the question is put after that tab is opened
    if (onlyPlate && onlyLens != null) { const b = await page.$$(`.plate[data-plate="${onlyPlate}"] .plate-tabs button`); if (b[Number(onlyLens)]) { await b[Number(onlyLens)].click(); await page.waitForTimeout(900); } }
    console.log(`${width}px: ${JSON.stringify(await page.evaluate(args[1]))}`);
    await context.close();
  }
}

// ---------- the letters inside the words ----------
// Whether the letters of a word stand the same way at each width and each density of screen:
// the step from one letter to the next, as a part of the type size. Words are counted from 0 in their row.
if (mode === 'letters') {
  const seen = {};
  for (const [width, scale] of [[1280, 1], [1280, 2], [390, 1], [390, 2]]) {
    const { context, page } = await open(width, 900, scale);
    const name = `${width}px at ${scale}x`;
    seen[name] = {};
    for (const plate of await page.$$('.plates > .plate')) {
      const id = await plate.getAttribute('data-plate');
      if (onlyPlate && id !== onlyPlate) continue;
      const m = await plate.evaluate((root) => {
        const out = {};
        for (const row of root.querySelectorAll('.row')) {
          const rid = row.getAttribute('data-row');
          [...row.querySelectorAll('.w')].forEach((w, k) => {
            const size = parseFloat(getComputedStyle(w).fontSize);
            const walker = document.createTreeWalker(w, NodeFilter.SHOW_TEXT);
            const xs = [];
            let node;
            while ((node = walker.nextNode())) for (let i = 0; i < node.data.length; i++) { const r = document.createRange(); r.setStart(node, i); r.setEnd(node, i + 1); const q = r.getBoundingClientRect(); xs.push([q.left, q.top]); }
            out[`${rid} w${k}`] = { size, inside: w.children.length, steps: xs.slice(1).map((x, i) => (Math.abs(x[1] - xs[i][1]) < 2 ? (x[0] - xs[i][0]) / size : null)) };
          });
        }
        return out;
      });
      for (const [k, v] of Object.entries(m)) seen[name][`${id} ${k}`] = v;
    }
    await context.close();
  }
  const names = Object.keys(seen); const ref = seen[names[0]];
  const LIMIT = Number(process.env.STEP || 0.025);
  // DUMP=<file>: every step is written out, to be compared with another run (say, one with other CHROME_ARGS)
  if (process.env.DUMP) fs.writeFileSync(process.env.DUMP, JSON.stringify(seen));
  for (const k of names.slice(1)) {
    let n = 0;
    for (const [word, v] of Object.entries(seen[k])) {
      const r = ref[word]; if (!r) continue;
      v.steps.forEach((s, i) => { if (s != null && r.steps[i] != null && Math.abs(s - r.steps[i]) > LIMIT) { n++; console.log(`${k}  ${word}, letter ${i + 1} to letter ${i + 2}: a step of ${s.toFixed(3)} of the type size, where ${names[0]} has ${r.steps[i].toFixed(3)}${v.inside ? ` (${v.inside} parts inside the word)` : ''}`); } });
    }
    const one = Object.values(seen[k])[0]; const two = Object.values(ref)[0];
    console.log(`${k}: ${n} steps differ from ${names[0]} by more than ${LIMIT} of the type size (type ${one ? one.size : '?'}px against ${two ? two.size : '?'}px)`);
  }
}

// ---------- one screen of a window that is not a phone ----------
// The page scrolled until a place of a plate stands 20 px under the top of a window HEIGHT px tall (900), and that
// one screen photographed, in shots/try/. --to <selector inside the plate> names the place; without it, the plate's top.
// Says where the caption's column then stands in the window: on a wide plate the kit holds it in sight.
if (mode === 'screen') {
  const out = path.join(HERE, 'shots', 'try');
  fs.mkdirSync(out, { recursive: true });
  const H = Number(process.env.HEIGHT || 900);
  for (const width of WIDTHS) {
    if (onlyWidth && String(width) !== onlyWidth) continue;
    const { context, page } = await open(width, H, 1, false);
    await tabs(page, async (plate, id, i, label) => {
      const y = await plate.evaluate((root, sel) => { const n = (sel && root.querySelector(sel)) || root; return scrollY + n.getBoundingClientRect().top - 20; }, toPlace);
      await page.evaluate((v) => scrollTo(0, v), Math.max(0, Math.round(y)));
      await page.waitForTimeout(400);
      const said = await plate.evaluate((root) => {
        const s = root.querySelector('.side'); if (!s) return 'no caption column';
        const r = s.getBoundingClientRect(); const st = root.querySelector('.stage').getBoundingClientRect();
        return `the passage from ${Math.round(st.top)} to ${Math.round(st.bottom)} px, the caption's column from ${Math.round(r.top)} to ${Math.round(r.bottom)} px, of a window ${innerHeight} px tall (the column is ${getComputedStyle(s).position})`;
      });
      const file = path.join(out, `${PIECE}-${slug(id)}-${i}-${slug(label)}-${width}-screen${tag ? `-${tag}` : ''}.png`);
      await page.screenshot({ path: file });
      console.log(`${path.relative(ROOT, file)}: ${said}`);
    });
    await context.close();
  }
}

await browser.close();
server.close();
