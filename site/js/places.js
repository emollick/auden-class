// The reader's place. Every page here is drawn by script, so the browser cannot bring a reader who presses Back to
// the place they left: this does. Each step of the history carries a number in its state, and the place the
// reader stood at that step is kept under the number for as long as the page stays open: how far down the page,
// and what stood at the window's top, so that the place is found again where the page above it has since grown
// (a list opened) or has not yet settled.
//
//   arriving()    the router is about to draw the page of the step the history stands at; gives back the place
//                 the reader left there, or null where there is none (a new step, the top of a page)
//   arrived()     the page is drawn: it is brought to that place, or to its top
//   stepTo(href)  a move within a page, or a link followed in a frame: a new step, which Back undoes
//   moved()       whether the history stands somewhere new (a browser may tell one arrival twice)

const places = new Map();
let step = 0;          // the number of the step now showing
let steps = 0;         // the last number given out
let settling = false;  // a page is being drawn: its moving is not the reader's
let holding = null;    // { at } while a page is kept at a place as it settles
let stood = null;      // the step and the address at the last arrival or step

try { history.scrollRestoration = 'manual'; } catch (e) { /* the browser tries first, and this comes after it */ }

const numbered = () => { try { const s = history.state; return s && typeof s.k === 'number' ? s.k : null; } catch (e) { return null; } };
const stand = () => { const k = numbered(); stood = k === null ? null : `${k}|${location.hash}`; };

addEventListener('scroll', () => {
  if (settling) return;
  // while the page is being kept at a place, only a move of the reader's own counts
  if (holding) { if (Math.abs(window.scrollY - holding.at) <= 8) return; holding = null; }
  places.set(step, { y: window.scrollY });
}, { passive: true });

// What stands at the window's top: the first thing found down the middle of the window that is part of the page
// and no taller than the window, with how far under the window's top it begins.
function mark() {
  try {
    const main = document.querySelector('main');
    for (const y of [2, 24, 60, 120, 240, 400]) for (const x of [innerWidth / 2, innerWidth / 3]) {
      const el = document.elementFromPoint(Math.round(x), y);
      if (!el || el === main || !main || !main.contains(el)) continue;
      const b = el.getBoundingClientRect();
      if (b.height > innerHeight || b.height === 0) continue;
      return { el, dy: b.top };
    }
  } catch (e) { /* a browser that cannot say */ }
  return null;
}
// the place the reader is leaving
const leave = () => { places.set(step, { y: window.scrollY, ...mark() }); };
// how far down a kept place now is
const down = (place) => {
  const { el, dy, y } = place;
  if (el && el.isConnected && el.getClientRects().length) return Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - dy));
  return y;
};

export function moved() {
  const k = numbered();
  return k === null || `${k}|${location.hash}` !== stood;
}

export function arriving(fresh = false) {
  // (the page of the step being left still stands as the reader left it, unless it was itself still being drawn)
  if (!fresh && !settling) leave();
  settling = true; holding = null;
  if (fresh) return null;   // stepTo() has just made this step
  const k = numbered();
  if (k === null) {
    // a step the browser made (a link followed, an address typed): it gets its number
    steps += 1; step = steps;
    try { history.replaceState({ k: step }, ''); } catch (e) { /* no history to write in */ }
    stand();
    return null;
  }
  // (a place at the very top is a place too: the page is not then sent to a plate or a scene named in its address)
  const back = k !== step && places.has(k) ? places.get(k) : null;
  step = k; if (k > steps) steps = k;
  stand();
  return back || null;
}

// The page is kept at the place while it settles (its cards are laid out, its faces come in), unless the reader moves.
function hold(place) {
  const mine = { at: 0 };
  holding = mine;
  places.set(step, place);
  const put = () => { if (holding !== mine) return; const y = down(place); try { window.scrollTo({ top: y, behavior: 'instant' }); } catch (e) { window.scrollTo(0, y); } mine.at = window.scrollY; };
  put();
  requestAnimationFrame(() => requestAnimationFrame(put));
  [300, 700, 1300, 2000].forEach((ms) => setTimeout(put, ms));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => requestAnimationFrame(put));
  setTimeout(() => { if (holding === mine) { holding = null; places.set(step, { y: window.scrollY }); } }, 2200);
}

export function arrived(back, top) {
  if (back) hold(back); else if (top) top();
  settling = false;
}

export function stepTo(href) {
  leave();
  holding = null;
  steps += 1;
  try { history.pushState({ k: steps }, '', href); } catch (e) { /* a frame that keeps no history of its own */ }
  step = steps;
  stand();
}
