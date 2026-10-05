// Tries the three faults reported on 5 October 2026 in how the site loads its pages, and says of each check
// whether the site does the right thing:
//   1. a page asked for earlier, and slower to come, must not take the place of the page asked for after it;
//   2. an address that names no page shows a page that says so, never a blank and never the page before;
//   3. a page that failed to load says that, not that it does not exist, and offers to try again; trying works.
// With them, what two critics found in the first mend of these (review/router/code-review.md, words.md): a step
// within a page while another page is on its way, a try made after the reader has gone on, an address under the
// class that names no page, a file the server does not have, an address far too long, and what a reader with a
// keyboard or a screen reader is told.
// It serves the site itself and holds back, spoils or drops the answers to the requests a check names.
//   node review/router/tools/faults.mjs [--site dir] [--page local.html] [--only 2]
// --page names the file to open in the folder, for the packed private page (build/preview.mjs writes local.html):
// that page carries its pieces with it, so only the checks that fit it are run. --only runs one of the three.
// Prints addresses, ids and the site's own notices only. Exits 1 where a check fails.
import fs from 'node:fs'; import path from 'node:path'; import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); return i < 0 ? null : args.splice(i, 2)[1]; };
const SITE = path.resolve(flag('site') || 'site'); const PAGE = flag('page') || ''; const ONLY = flag('only');
const PACKED = !!PAGE;
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.png': 'image/png', '.mp3': 'audio/mpeg' };

// ---- the server, and what it is told to do with a request: wait, answer with a status or a body, or drop it
let rules = []; const hits = [];
const rule = (on, how) => { const r = { on: typeof on === 'string' ? (rel) => rel === on : on, times: Infinity, sent: 0, ...how }; rules.push(r); return r; };
const heal = () => { rules = []; };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html').replace(/^\//, '');
  hits.push(rel);
  const r = rules.find((x) => x.times > 0 && x.on(rel));
  if (r) r.times -= 1;
  const answer = () => {
    if (r) r.sent += 1;
    if (r && r.drop) { req.socket.destroy(); return; }
    const type = { 'content-type': TYPES[path.extname(rel)] || 'application/octet-stream', 'cache-control': 'no-store' };
    if (r && r.body !== undefined) { res.writeHead(r.status || 200, type); res.end(r.body); return; }
    if (r && r.status) { res.writeHead(r.status, { 'cache-control': 'no-store' }); res.end('spoiled'); return; }
    const file = path.join(SITE, rel);
    if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200, type);
    fs.createReadStream(file).pipe(res);
  };
  if (r && r.wait) setTimeout(answer, r.wait); else answer();
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/${PAGE}`;
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1100, height: 800 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
const page = await context.newPage();
let errs = []; page.on('pageerror', (e) => errs.push(String(e).slice(0, 120)));
const wait = (ms) => page.waitForTimeout(ms);

// a held answer has gone out; then the page is given time to do with it what it will
const SETTLE = 1000;
const gone = async (r, n = 1, ms = 12000) => { const end = Date.now() + ms; while (r.sent < n && Date.now() < end) await wait(60); const out = r.sent >= n; await wait(SETTLE); return out; };
const asks = (name) => hits.filter((h) => h === name).length;

// ---- what the page shows
const state = () => page.evaluate(() => {
  const main = document.querySelector('main');
  const first = main && main.firstElementChild;
  const piece = main && main.querySelector('article.piece');
  const notice = first && first.matches('div.sec') && main.children.length === 1 ? first : null;
  const text = (n) => (n ? n.textContent.replace(/\s+/g, ' ').trim() : null);
  return {
    hash: location.hash, title: document.title,
    kind: !first ? 'blank' : piece ? `piece:${piece.dataset.piece}` : notice ? 'notice' : String(first.className || first.tagName.toLowerCase()).split(' ')[0],
    head: notice ? text(notice.querySelector('h2')) : null,
    says: notice ? [...notice.querySelectorAll('p')].map(text).join(' ') : null,
    again: notice ? !!notice.querySelector('button') : false,
    button: notice && notice.querySelector('button') ? text(notice.querySelector('button')) : null,
    told: notice ? (notice.querySelector('p[role="alert"]') ? 'alert' : notice.querySelector('p[aria-live]') ? 'live' : 'none') : null,
    onButton: !!(document.activeElement && document.activeElement.matches('main div.sec button')),
    onMain: document.activeElement === main,
    busy: notice && notice.querySelector('button') ? notice.querySelector('button').getAttribute('aria-disabled') === 'true' : false,
    foot: document.getElementById('foot') ? document.getElementById('foot').children.length : -1,
    y: Math.round(window.scrollY),
    current: [...document.querySelectorAll('.top nav a[aria-current]')].map((a) => a.getAttribute('href')).join(','),
  };
});
const brief = (s) => `${s.kind}${s.kind === 'notice' ? ` “${s.head}: ${s.says}”${s.again ? ' [button]' : ''}` : ''} at ${s.hash || '(no hash)'}`;
// a new page of the browser's: nothing is kept from the one before
const fresh = async (route, ms = 1500) => { heal(); await page.goto('about:blank'); await page.goto(`${base}#/${route}`); await wait(ms); };
const to = (route) => page.evaluate((h) => { location.hash = h; }, `#/${route}`);
// (in a host's frame the site follows its own links; a typed address is given to the router as a link is)
const follow = async (route) => { await page.evaluate((h) => { const a = document.createElement('a'); a.href = h; a.textContent = '.'; document.querySelector('main').append(a); a.click(); }, `#/${route}`); };
const framed = await (async () => { await fresh(''); return page.evaluate(() => !!document.documentElement.dataset.frame); })();
const move = framed ? follow : to;
// the title each page has when nothing goes wrong
const titles = new Map();
const fairs = new Map();
const fairOf = async (route) => { if (!fairs.has(route)) { await fresh(route); fairs.set(route, await state()); } return fairs.get(route); };
const titleOf = async (route) => { if (!titles.has(route)) titles.set(route, (await fairOf(route)).title); return titles.get(route); };
const kindOf = async (route) => (await fairOf(route)).kind;
// a page come to by a link is the page of its address in every part the router sets: the page, the title, the
// mark in the menu, the foot; and it stands at its top
const like = (s, f) => s.kind === f.kind && s.title === f.title && s.current === f.current && s.foot === f.foot;
const parts = (s, f) => ['kind', 'title', 'current', 'foot'].filter((k) => s[k] !== f[k]).map((k) => `${k} is ${JSON.stringify(s[k])}, not ${JSON.stringify(f[k])}`).join('; ') || 'page, title, menu and foot are the second page’s';

let fails = 0; let tries = 0;
const say = (name, ok, text) => { tries++; if (!ok) fails++; console.log(`${ok ? 'ok  ' : 'FAIL'}  ${name}: ${text}`); };
const quiet = (name) => { const mine = errs; errs = []; say(`${name}, no error left uncaught`, mine.length === 0, mine.length ? mine.join(' | ') : 'none'); };

const shelf = PACKED ? null : JSON.parse(fs.readFileSync(path.join(SITE, 'data/shelf.json'), 'utf8'));
const packs = PACKED ? fs.readdirSync(path.join(SITE, 'data/texts')).filter((f) => f.endsWith('.pack.json')).map((f) => f.replace('.pack.json', '')).sort() : [];
const TEXT = PACKED ? packs[0] : Object.keys(shelf.texts)[0];
const PART = PACKED ? Object.keys(JSON.parse(fs.readFileSync(path.join(SITE, `data/texts/${TEXT}.pack.json`), 'utf8'))).filter((k) => k !== 'index')[0] : JSON.parse(fs.readFileSync(path.join(SITE, `data/texts/${TEXT}/index.json`), 'utf8')).parts[0].id;
const partFile = PACKED ? `data/texts/${TEXT}.pack.json` : `data/texts/${TEXT}/${PART}.json`;
const A = 'tempest'; const B = 'hamlet'; const C = 'phedre';
const SLOW = 1100; const AFTER = SLOW + 1100;
const is = (s, kind, title) => s.kind === kind && s.title === title;
console.log(`${PACKED ? `the packed page ${PAGE}` : 'the site'} in ${path.relative(process.cwd(), SITE) || '.'}${framed ? ' (it follows its own links, as in a frame)' : ''}`);

// ---------- 1. an older, slower page
if (!ONLY || ONLY === '1') {
  const tB = await titleOf(B); const tHome = await titleOf('');
  // two pages one after the other, the first held back: the second must be the one that stands
  const race = async (name, first, held, how, second) => {
    const f = await fairOf(second);
    await fresh('');
    const r = rule(held, { wait: SLOW, times: 1, ...how });
    await move(first); await wait(120); await move(second);
    const out = await gone(r);
    const s = await state();
    say(name, out && like(s, f) && s.hash === `#/${second}` && s.y <= 2, `asked for ${first}, then ${second}: ${brief(s)}; ${parts(s, f)}${s.y > 2 ? `; ${s.y} px down the page` : ''}${out ? '' : '; the held answer never went out'}`);
  };
  if (!PACKED) {
    await race('a slow piece, then a second piece', A, `data/pieces/${A}.json`, {}, B);
    await race('a slow piece, then the shelf', A, `data/pieces/${A}.json`, {}, 'shelf');
    await race('a slow piece that fails in the end, then a second piece', A, `data/pieces/${A}.json`, { status: 500 }, B);
    await race('a slow piece that is not there, then a second piece', 'no-such-piece', 'data/pieces/no-such-piece.json', {}, B);
    // (whether there is such a piece is settled by the list of the pieces: with the list held back, "Not found" comes late)
    await race('a piece that is not there, the list of the pieces slow, then the shelf', 'no-such-piece', 'data/pieces/index.json', {}, 'shelf');
    await race('a slow script (the shelf’s), then a piece', 'shelf', 'js/shelf.js', {}, B);
    await race('a slow script of a piece’s own, then a second piece', A, `js/pieces/${A}.js`, {}, B);
    // three in a row, each quicker than the one before
    const fB = await fairOf(B);
    await fresh('');
    let r1 = rule(`data/pieces/${A}.json`, { wait: SLOW + 500, times: 1 }); rule(`data/pieces/${C}.json`, { wait: SLOW, times: 1 });
    await move(A); await wait(80); await move(C); await wait(80); await move(B); await gone(r1);
    let s = await state();
    say('three pieces, the first two slow', like(s, fB) && s.hash === `#/${B}`, `asked for ${A}, ${C}, ${B}: ${brief(s)}; ${parts(s, fB)}`);
    // the older page comes while the newer is still on its way: the page before stands until the newer comes
    const fHome = await fairOf('');
    await fresh('');
    r1 = rule(`data/pieces/${A}.json`, { wait: 500, times: 1 }); const r2 = rule(`data/pieces/${B}.json`, { wait: 2600, times: 1 });
    await move(A); await wait(80); await move(B);
    await gone(r1); const mid = await state();
    await gone(r2); s = await state();
    say('the older page comes while the newer is still on its way', mid.kind === fHome.kind && mid.title === fHome.title && like(s, fB), `when ${A} had come and ${B} had not: ${brief(mid)}, titled as ${mid.title === fHome.title ? 'the page before' : 'another page'}; in the end: ${brief(s)}`);
    // The reader goes back before the slow page has come. (The step back draws the front page again, and here
    // that keeps the page busy for a second or two, while the held answer waits its turn. A look one second after
    // the answer went out came too early: the check passed on scripts that have the fault. A page that has read
    // a piece's data asks next for the piece's own script, so the look waits for that request, eight seconds at most.)
    await fresh('');
    r1 = rule(`data/pieces/${A}.json`, { wait: SLOW, times: 1 });
    const own = `js/pieces/${A}.js`; const had = asks(own);
    await move(A); await wait(150); await page.goBack();
    const out = await gone(r1);
    for (const end = Date.now() + 8000; asks(own) === had && Date.now() < end;) await wait(100);
    await wait(SETTLE);
    s = await state();
    say('a slow piece, then Back', out && like(s, fHome) && /^(#\/)?$/.test(s.hash), `asked for ${A}, then went back: ${brief(s)}; ${parts(s, fHome).replace('second', 'front')}${out ? '' : '; the held answer never went out'}${asks(own) === had ? '; the page did not ask for the piece’s own script' : ''}`);
  }
  // a page reached by a link stands as it does when opened at its address: its plates have started
  const sig = () => page.evaluate(() => { const m = document.querySelector('main'); return [document.documentElement.scrollHeight, m.querySelectorAll('svg *').length, m.querySelectorAll('[aria-pressed="true"]').length].join(' / '); });
  // (a piece only: the front page draws its cards as they come into view, and differs by a few marks either way)
  await fresh(B, 2600); const direct = await sig();
  await fresh('', 2600); await move(B); await wait(2600); const linked = await sig();
  say('a piece reached by a link stands as when opened at its address', direct === linked, `${direct} opened, ${linked} by a link (height / marks drawn / tabs pressed)`);
  await race('a slow part of a book, then a piece', `read/${TEXT}/${PART}`, partFile, {}, B);
  await race('a slow part of a book that fails in the end, then a piece', `read/${TEXT}/${PART}`, partFile, { status: 500 }, B);
  // A page that moves within itself (the front page to its list, the class among its afternoons) while another
  // page is on its way: the reader's last step is the one that stands, and the slow page does not come under it.
  const within = async (name, from, link, kind, title) => {
    await fresh(from);
    const r = rule(partFile, { wait: SLOW, times: 1 });
    await move(`read/${TEXT}/${PART}`); await wait(120);
    const href = await page.evaluate((sel) => { const a = document.querySelector(sel); if (a) a.click(); return a ? a.getAttribute('href') : null; }, link);
    await gone(r);
    const s = await state();
    say(name, !!href && is(s, kind, title) && (framed || s.hash === href), `asked for a part of a book, then followed ${href} on the page still standing: ${brief(s)}`);
  };
  await within('a slow page, then the front page’s own step to its list', '', 'main a[href="#/works"]', 'home', tHome);
  await within('a slow page, then the class page’s own step to an afternoon', 'class', 'main a[href^="#/class/"]', await kindOf('class'), await titleOf('class'));
  // A notice still stands while the page asked for after it is on its way: its button tries that page, not its own.
  {
    const second = PACKED ? `read/${packs[1]}` : B;
    const held = PACKED ? `data/texts/${packs[1]}.pack.json` : `data/pieces/${B}.json`;
    const want = PACKED ? ['book-page', await titleOf(second)] : [`piece:${B}`, tB];
    await fresh('');
    rule(partFile, { drop: true });
    await move(`read/${TEXT}/${PART}`); await wait(1200);
    let n = await state();
    const stood = n.again;
    if (stood) {
      const r = rule(held, { wait: SLOW, times: 1 });   // (the page of the notice still fails)
      await move(second); await wait(120);
      await page.evaluate(() => { const b = document.querySelector('main div.sec button'); if (b) b.click(); });
      await gone(r); n = await state();
    }
    say('a notice’s button, pressed after the reader has asked for another page', stood && is(n, want[0], want[1]), stood ? `a notice stood for a part of a book; asked for ${second}, then pressed its button: ${brief(n)}` : `no notice with a button to press: ${brief(n)}`);
  }
  quiet('1');
}

// ---------- 2. an address that names no page
if (!ONLY || ONLY === '2') {
  const tB = await titleOf(B);
  const none = (s) => s.kind === 'notice' && !s.again && s.current === '';
  for (const bad of ['%', 'not/a/real-page', '%E0%A4%A', `${B}/%`, 'a/b/c/d', 'read']) {
    await fresh(bad);
    let s = await state();
    say(`opened at #/${bad}`, none(s), brief(s));
    await fresh(B); await move(bad); await wait(900);
    s = await state();
    say(`from a piece to #/${bad}`, none(s) && s.title !== tB, `${brief(s)}; the title is ${s.title === tB ? 'still the piece’s' : 'no longer the piece’s'}`);
  }
  // Back from such an address, and on to it again
  await fresh(B); await move('not/a/real-page'); await wait(900); await page.goBack(); await wait(1500);
  let s = await state();
  say('Back from an address that names no page', is(s, `piece:${B}`, tB), brief(s));
  await page.goForward(); await wait(900); s = await state();
  say('Forward to it again', none(s), brief(s));
  // the notice's own link leads somewhere
  const link = await page.evaluate(() => { const a = document.querySelector('main div.sec a[href^="#/"]'); if (a) a.click(); return !!a; });
  await wait(1500); s = await state();
  say('the notice’s link', link && s.kind !== 'notice' && s.kind !== 'blank', brief(s));
  if (!PACKED) {
    await fresh('no-such-piece'); s = await state();
    say('a piece that is not there', none(s), brief(s));
    await fresh('read/no-such-book'); s = await state();
    say('a book that is not there', s.kind === 'notice' && !s.again, brief(s));
    await fresh(`read/${TEXT}/no-such-part`); s = await state();
    say('a part that is not in its book', s.kind === 'notice' && !s.again, brief(s));
    // an address that names a file of another kind: the list of the pieces is not a piece
    await fresh('index'); s = await state();
    say('the list of the pieces, asked for as a piece', none(s), brief(s));
  }
  // (nor is a book's list of contents one of its parts)
  await fresh(`read/${TEXT}/index`); s = await state();
  say('a book’s contents, asked for as a part', s.kind === 'notice' && !s.again, brief(s));
  // an address under the class that names no page, come back to while the class page stands
  await fresh('class/a/b'); s = await state();
  const first = none(s);
  await move('class'); await wait(1500); await page.goBack(); await wait(900); s = await state();
  say('Back from the class to an address under it that names no page', first && none(s), brief(s));
  // an address far too long to name a page is not sent to the server as the name of a file
  const long = 'a'.repeat(6000);
  hits.length = 0;
  await fresh(long); s = await state();
  const sent = hits.filter((h) => h.length > 1000).length;
  say('an address of 6,000 letters', none(s) && sent === 0, `${brief({ ...s, hash: `#/aaa… (${s.hash.length} letters)` })}; requests made with it as a name: ${sent}`);
  quiet('2');
}

// ---------- 3. a page that fails to load
if (!ONLY || ONLY === '3') {
  // the page is asked for while its request is spoiled; then the request is let through and the reader tries again
  const fail = async (name, route, held, how) => {
    const f = await fairOf(route);
    await fresh('');
    rule(held, how);
    await move(route); await wait(1200);
    let s = await state();
    const told = s.kind === 'notice' && s.again && !/no page at this address|no such book/i.test(s.says || '');
    say(`${name}: the reader is told`, told, brief(s));
    // (trying while it still fails asks the server again, and leaves a notice standing)
    if (s.again) {
      const before = asks(held);
      await page.locator('main div.sec button').click(); await wait(1200); s = await state();
      const more = asks(held) - before;
      say(`${name}: trying while it still fails`, s.kind === 'notice' && s.again && more >= 1, `${brief(s)}; asked the server for it again: ${more >= 1 ? 'yes' : 'no'}`);
    }
    heal();
    if (s.again) { await page.locator('main div.sec button').click(); await wait(1800); s = await state(); }
    say(`${name}: trying again brings the page`, like(s, f), `${brief(s)}; ${parts(s, f).replace('the second page’s', 'the page’s own')}`);
  };
  if (!PACKED) {
    await fail('a piece whose request is dropped', B, `data/pieces/${B}.json`, { drop: true });
    await fail('a piece the server cannot give (503)', B, `data/pieces/${B}.json`, { status: 503 });
    await fail('a piece whose data is spoiled', B, `data/pieces/${B}.json`, { body: '<!doctype html><title>x</title>' });
    await fail('a piece whose own script is dropped', A, `js/pieces/${A}.js`, { drop: true });
    await fail('the script of a page dropped (about)', 'about', 'js/about.js', { drop: true });
    await fail('the shelf’s list dropped', 'shelf', 'data/shelf.json', { drop: true });
    await fail('a book whose contents the server cannot give (500)', `read/${TEXT}`, `data/texts/${TEXT}/index.json`, { status: 500 });
    // a file whose name is not the address's own, and that the server says it does not have: the page is there
    await fail('a piece on the list whose file the server does not have (404)', B, `data/pieces/${B}.json`, { status: 404 });
    await fail('the list of the pieces dropped', B, 'data/pieces/index.json', { drop: true });
    await fail('the class page’s words, which the server does not have (404)', 'class', 'data/class.json', { status: 404 });
    await fail('a part its book lists, which the server does not have (404)', `read/${TEXT}/${PART}`, partFile, { status: 404 });
  }
  await fail('a part of a book whose request is dropped', `read/${TEXT}/${PART}`, partFile, { drop: true });
  if (!PACKED) {
    // the first page of all
    heal(); await page.goto('about:blank'); rule('data/front.json', { drop: true });
    await page.goto(`${base}#/`); await wait(1200);
    let s = await state();
    say('the front page’s data dropped as the site opens', s.kind === 'notice' && s.again, brief(s));
    heal();
    if (s.again) { await page.locator('main div.sec button').click(); await wait(1800); s = await state(); }
    say('trying again brings the front page', s.kind === 'home', brief(s));
    heal(); await page.goto('about:blank'); rule('data/front.json', { status: 404 });
    await page.goto(`${base}#/`); await wait(1200);
    s = await state();
    say('the front page’s data, which the server does not have (404), as the site opens', s.kind === 'notice' && s.again && !/no page at this address/i.test(s.says || ''), brief(s));
  }
  // What a reader who cannot see the page is told, and where a reader with a keyboard is left.
  {
    const route = `read/${TEXT}/${PART}`; const f = await fairOf(route);
    await fresh('');
    rule(partFile, { drop: true });
    await move(route); await wait(1200);
    let s = await state();
    say('the notice is told as it is put up (an alert)', s.kind === 'notice' && s.told === 'alert', `${brief(s)}; told: ${s.told}`);
    // the button is pressed from the keyboard while the page still fails: the reader is left on the new button
    if (s.again) {
      await page.locator('main div.sec button').focus(); await page.keyboard.press('Enter'); await wait(1200);
      s = await state();
      say('a try from the keyboard that fails leaves the reader on the button', s.kind === 'notice' && s.again && s.onButton && s.told === 'live' && /still/.test(s.says || ''), `${brief(s)}; focus on the button: ${s.onButton}; told: ${s.told}`);
      // while a try is out the button says so, and a second press asks for nothing more
      heal(); const r = rule(partFile, { wait: SLOW, times: 1 });
      const before = asks(partFile);
      await page.keyboard.press('Enter'); await wait(250); await page.keyboard.press('Enter'); await wait(100);
      s = await state();
      say('while a try is out the button says so', s.kind === 'notice' && s.button === 'Trying again' && s.busy, `the button reads “${s.button}”${s.busy ? ' and is marked as not to be pressed' : ''}`);
      await gone(r); s = await state();
      const more = asks(partFile) - before;
      say('the button pressed twice asks the server once', more === 1, `requests for the page’s file after the two presses: ${more}`);
      say('the page comes, and the reader goes on from it', like(s, f) && s.onMain, `${brief(s)}; focus on the page: ${s.onMain}`);
    } else for (const name of ['a try from the keyboard that fails leaves the reader on the button', 'while a try is out the button says so', 'the button pressed twice asks the server once', 'the page comes, and the reader goes on from it']) say(name, false, 'there is no button to press');
    // a link followed before a try has returned: the link's page is the one that stands
    const second = PACKED ? `read/${packs[1]}` : B; const f2 = await fairOf(second);
    await fresh('');
    rule(partFile, { drop: true });   // (every time: this browser asks once more by itself when a connection is cut)
    await move(route); await wait(1200);
    heal(); const r3 = rule(partFile, { wait: SLOW, times: 1 });
    const pressed = await page.evaluate(() => { const b = document.querySelector('main div.sec button'); if (b) b.click(); return !!b; });
    await wait(120); await move(second); const out = await gone(r3);
    s = await state();
    say('a link followed before a try has returned', pressed && out && like(s, f2) && (framed || s.hash === `#/${second}`), pressed ? `tried again, then asked for ${second}: ${brief(s)}; ${parts(s, f2)}${out ? '' : '; the try never asked the server'}` : `no notice with a button stood: ${brief(s)}`);
  }
  // an address that names no page is told the same way
  await fresh('not/a/real-page');
  { const s = await state(); say('“Not found” is told as it is put up (an alert)', s.kind === 'notice' && s.told === 'alert', `${brief(s)}; told: ${s.told}`); }
  quiet('3');
}

console.log(`${tries} checks, ${fails} failed`);
await browser.close(); server.close();
process.exit(fails ? 1 : 0);
