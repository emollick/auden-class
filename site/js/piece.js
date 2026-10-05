// A piece: one work on Auden's list, opened at a passage or two.
// What Auden said of it stands at the head; the plates show how the passage is made.

import { el, tie, keep } from './kit/draw.js';
import { mountPlate } from './kit/plate.js';
import { rich, para, tidy, verseQuote } from './rich.js';
import { player } from './kit/player.js';

const cache = new Map();
// a page may carry its data with it (window.AUDEN_DATA, keyed by address); otherwise it is fetched
const shipped = (typeof window !== 'undefined' && window.AUDEN_DATA) || {};
// a private preview keeps each book in one file: data/texts/<id>.pack.json holds { index, <part>, ... }
const packed = typeof window !== 'undefined' && !!window.AUDEN_PACKED;
export function getJSON(url) {
  if (!cache.has(url)) {
    const m = packed && !shipped[url] && url.match(/^data\/texts\/([\w-]+)\/([\w-]+)\.json$/);
    if (m) cache.set(url, getJSON(`data/texts/${m[1]}.pack.json`).then((pack) => { if (!pack[m[2]]) throw new Error(`${url}: not in the book`); return pack[m[2]]; }));
    else cache.set(url, shipped[url] ? Promise.resolve(shipped[url]) : fetch(url).then((r) => { if (!r.ok) throw new Error(`${url}: ${r.status}`); return r.json(); }));
    cache.get(url).catch(() => cache.delete(url));
  }
  return cache.get(url);
}

// the stroke that divides two lines of verse in a quotation stays with the word before it
const slashes = (s) => String(s).replace(/ \/ /g, '\u00a0/ ');
// A quotation is set between double marks. Where it is written with marks of its own, one pair round the
// whole of it, those come off first. A mark that only closes a phrase quoted inside it, at its very end (or
// opens one at its head), is not the quotation's own, and stays.
function quoted(s) {
  const t = String(s == null ? '' : s).trim();
  let wrapped = /^[“"]/.test(t) && /[”"]$/.test(t) && t.length > 1;
  // (wrapped: the mark that opens at the head is not closed before the last mark)
  for (let i = 0, depth = 0; wrapped && i < t.length - 1; i++) {
    if (t[i] === '“') depth++; else if (t[i] === '”') depth--; else if (t[i] === '"') depth = depth ? depth - 1 : 1;
    if (depth <= 0) wrapped = false;
  }
  return `“${wrapped ? t.slice(1, -1) : t}”`;
}

function said(a, cls = 'said') {
  return el('div', { class: cls }, [
    // (a short word is not left at the end of a line of the quotation: it keeps to the next, as in a heading;
    // a title named in it is marked *so*, and stands upright in the italic block)
    a.quote ? el('blockquote', {}, verseQuote(tie(quoted(a.quote)))) : null,
    para(slashes(a.says)),
    a.source ? para(a.source, { class: 'src' }) : null,
  ]);
}

const GROUND = { plate: 'the marks on the passage', text: 'the lines themselves', source: 'the sources named above', auden: 'Auden, as cited above' };
const NO_VIEW = 'Nothing that Auden wrote or said about this work was found for this site.';

export async function renderPiece(main, id, site = {}, at = null) {
  const piece = await getJSON(`data/pieces/${id}.json`);
  let mod = null;
  if (piece.module) { try { mod = (await import(`./pieces/${id}.js`)).default; } catch (e) { console.warn(e); } }
  if (piece.style && !document.querySelector(`link[data-piece="${id}"]`)) document.head.append(el('link', { rel: 'stylesheet', href: `css/pieces/${id}.css`, 'data-piece': id }));
  document.title = `${piece.title} · ${site.name || ''}`.replace(/ · $/, '');

  const page = el('article', { class: 'piece', 'data-piece': id });
  page.append(el('header', { class: 'piece-hd' }, [
    // the author and the work each keep together where the line must turn, and the point between them stays
    // with the author (it is set in the author's block): it never begins the second line
    el('p', { class: 'kicker' }, [el('span', { text: `${piece.author}\u00a0·` }), ' ', el('span', { text: piece.workTitle })]),
    // (the title is set as it is written: tied, it took a third line on a phone where it had two)
    el('h1', { text: piece.title }),
    piece.where ? para(piece.where, { class: 'where' }) : null,
  ]));

  // where we are, and what Auden said of it. The summary is headed by what it tells of: one passage, several,
  // or, where the piece prints no text, what the reading calls it ("aboutHead")
  const shown = piece.plates.filter((p) => !p.noText).length;
  const aboutHead = piece.aboutHead || (shown > 1 ? 'The passages' : shown === 1 ? 'The passage' : 'The work');
  const silent = !piece.view && piece.noView && !(piece.auden && piece.auden.length);
  page.append(el('div', { class: `lead${piece.view || silent ? '' : ' lead-one'}` }, [
    el('section', { class: 'lead-about' }, [el('h2', { class: 'lab', text: aboutHead }), para(piece.about)]),
    piece.view ? el('section', { class: 'lead-view' }, [el('h2', { class: 'lab', text: 'What Auden said' }), said(piece.view, 'said view')]) : null,
    silent ? el('section', { class: 'lead-view' }, [el('h2', { class: 'lab', text: 'What Auden said' }), el('p', { class: 'none', text: NO_VIEW })]) : null,
  ]));

  const plates = el('div', { class: 'plates' });
  page.append(plates);
  // The place of a passage, beside a plate's heading, is the label of its part in the hosted book (a chapter's
  // title). Where that label holds a range of figures typed with a hyphen ("1838-1848"), the page sets the
  // longer stroke, as running words have it everywhere: the plate is handed the place to print. The book's
  // data stays as it is, and a plate whose reading gives a place of its own is left alone.
  const placeSet = (plate) => {
    if (plate.place !== undefined) return undefined;
    const src = (piece.texts || []).find((t) => plate.src === `${t.text}/${t.part}`);
    const label = src && src.label && !(src.title && src.label.trim().toLowerCase() === src.title.trim().toLowerCase()) ? src.label : '';
    return /(?<![\d–-])\d+-\d+(?![\d–-])/.test(label) ? keep(label) : undefined;
  };
  const mounted = piece.plates.map((plate, i) => mountPlate(plates, plate, piece, {
    lenses: mod && mod.lenses,
    title: i === 0 ? piece.title : '',
    where: placeSet(plate),
    // the tab a card of the front page showed, where the page was opened from one
    lens: at && at.plate === plate.id && at.lens !== null && plate.lenses[at.lens] ? at.lens : 0,
  }));
  // Come to the plate and the tab a card of the front page showed. The router scrolls a new page to its top and
  // then asks for this (not when the reader is coming back to a place they left): the plate is come to, and
  // once more when the faces are in and the lines have their true heights.
  let after = null;
  if (at && at.plate) {
    const k = piece.plates.findIndex((p) => p.id === at.plate);
    if (k >= 0) {
      const come = () => { if (mounted[k].root.isConnected) mounted[k].root.scrollIntoView({ block: 'start' }); };
      after = () => { requestAnimationFrame(() => requestAnimationFrame(come)); setTimeout(come, 700); };
    }
  }

  if (piece.auden && piece.auden.length) page.append(el('section', { class: 'sec' }, [el('h2', { text: piece.view ? 'More from Auden' : 'What Auden said' }), ...piece.auden.map((a) => said(a))]));

  if (piece.record && site.records !== false) {
    const r = piece.record;
    page.append(el('section', { class: 'sec record' }, [
      el('h2', { text: 'A record' }),
      para(tie(r.title), { class: 'rec-title' }),
      player(r.file, 'the record'),
      para([r.performers, r.credit].filter(Boolean).join(' '), { class: 'src' }),
    ]));
  }

  if (piece.next) {
    // a book of one part is named once
    const nx = piece.next;
    // (a part the site has numbered itself, "1. The Watchman; the Elders", is named as a part of its book)
    const part = String(nx.label || '').replace(/^(\d+)\.\s+/, 'part\u00a0$1: ');
    const name = nx.title && nx.label && nx.label.trim().toLowerCase().startsWith(nx.title.trim().toLowerCase()) ? nx.label : [nx.title, part].filter(Boolean).join(', ');
    // (two names joined by "and" keep together where the title turns: it turns before the pair or after it)
    const paired = name.replace(/(\p{Lu}[\p{L}’'-]+) and (?=\p{Lu})/gu, '$1\u00a0and ');
    const link = site.reader === false ? null : el('a', { href: `#/read/${nx.text}/${nx.part}${nx.block ? `:${nx.block}` : ''}` }, [el('b', { text: tie(paired) }), el('span', { text: 'Read it here' })]);
    if (link) page.append(el('section', { class: 'sec readon' }, [el('h2', { text: 'Read on' }), link]));
  } else if (piece.nextNote) {
    // a work that cannot be printed here: where it can be found
    const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return ''; } };
    const links = (piece.nextLinks || []).map((l) => {
      if (l.url) return el('a', { href: l.url }, [el('b', { text: tie(l.label) }), el('span', { text: host(l.url) ? `At ${host(l.url)}` : 'Elsewhere' })]);
      return site.reader === false ? null : el('a', { href: `#/read/${l.text}/${l.part}${l.block ? `:${l.block}` : ''}` }, [el('b', { text: tie(l.label) }), el('span', { text: 'Read it here' })]);
    }).filter(Boolean);
    page.append(el('section', { class: 'sec readon readon-out' }, [el('h2', { text: 'Read on' }), para(piece.nextNote, { class: 'readon-note' }), ...links]));
  }

  // sources, what each caption stands on, and where the page may be wrong
  const stands = el('ul');
  const headOf = (plate, i) => (piece.plates.length > 1 ? plate.heading || (i === 0 ? piece.title : '') : '');
  const placeOf = (plate) => {
    if (plate.place !== undefined) return String(plate.place).replace(/\*/g, '');
    const src = (piece.texts || []).find((t) => plate.src === `${t.text}/${t.part}`);
    return src && src.label && !(src.title && src.label.trim().toLowerCase() === src.title.trim().toLowerCase()) ? src.label : '';
  };
  piece.plates.forEach((plate, i) => plate.lenses.forEach((lens) => {
    const words = lens.stands || (lens.groundKinds || []).map((k) => GROUND[k]).filter(Boolean).join('; ');
    if (!words) return;
    const of = headOf(plate, i);
    // (two passages under one heading are told apart by their place, as at the head of each plate)
    const where = of && piece.plates.some((q, k) => k !== i && headOf(q, k).trim().toLowerCase() === of.trim().toLowerCase()) ? placeOf(plate) : '';
    // (heading, place and tab are parted by a raised point, which no heading holds: a comma read as part of a heading that has one)
    stands.append(el('li', {}, [el('b', { text: tidy(`${[of, where, lens.label || lens.kind].filter(Boolean).join('\u00a0· ')}. `) }), ...rich(words)]));
  }));
  const doubts = (piece.caveats || []).filter(Boolean);
  page.append(el('section', { class: 'sec sources' }, [
    el('h2', { text: 'Sources' }),
    el('ul', {}, (piece.sources || []).map((s) => el('li', {}, rich(s)))),
    stands.childNodes.length ? el('details', {}, [el('summary', { text: 'What each caption stands on' }), stands]) : null,
    doubts.length ? el('details', {}, [el('summary', { text: 'Where this page may be wrong' }), el('ul', {}, doubts.map((c) => el('li', {}, rich(c))))]) : null,
  ]));

  if (mod && mod.after) mod.after(page, piece, mounted);
  main.replaceChildren(page);
  const leave = () => mounted.forEach((m) => m.destroy());
  if (after) leave.after = after;
  return leave;
}
