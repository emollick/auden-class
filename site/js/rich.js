// Running words with their italics and links: *x* (or <i>x</i>) is italic, [x](url) a link.

import { el, keep } from './kit/draw.js';

// Small things a printer sees to ("p." and its number on one line, the two ends of a range, a pair of
// initials): the rules are in kit/draw.js (`keep`), where a heading uses them too.
export const tidy = (s) => keep(s);

// An italic run that ends in ? or ! leans into the space after it. Where a space follows, the run is marked
// (`lean`) and the stylesheet gives it a hair of room in a caption and in the sources. `lean(node)` marks
// the runs of words that are already set (a caption comes from the build as HTML).
const leans = (text, after) => /[?!]$/.test(String(text)) && /^\s/.test(String(after || ''));
export function lean(node) {
  for (const i of node.querySelectorAll('i, em')) { const n = i.nextSibling; if (n && n.nodeType === 3 && leans(i.textContent, n.data)) i.classList.add('lean'); }
  return node;
}

// The words of a caption come from the build as HTML and never pass `rich`: the pairs a printer keeps on
// one line are kept in it run by run, in the words that stand outside bold and italic.
export function kept(node) {
  const tw = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
  for (let n = tw.nextNode(); n; n = tw.nextNode()) {
    if (n.parentNode !== node) continue;
    const t = keep(n.data);
    if (t !== n.data) n.data = t;
  }
  return node;
}

export function rich(text) {
  // an address is left as it is; only the words that are read are tidied
  // (a title in italic stays with the chapter and verse after it: `keep`'s rule for a book, where the mark stands between)
  const s = String(text == null ? '' : text).replace(/(\*|<\/i>) (?=\d{1,3}[:.]\d)/g, '$1\u00a0');
  const out = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*([^*]+)\*|<i>([^<]+)<\/i>/g;
  let at = 0;
  let m;
  while ((m = re.exec(s))) {
    if (m.index > at) out.push(tidy(s.slice(at, m.index)));
    out.push(m[2] ? el('a', { href: m[2] }, rich(m[1])) : el('i', { text: tidy(m[3] || m[4]) }));
    at = m.index + m[0].length;
    if (!m[2] && leans(m[3] || m[4], s.slice(at, at + 1))) out[out.length - 1].classList.add('lean');
  }
  if (at < s.length) out.push(tidy(s.slice(at)));
  return out;
}

export const para = (text, attrs = {}) => el('p', attrs, rich(text));

// A quotation of verse: each line keeps together, and a line ends with the stroke that divides it from the next.
// A quotation takes the marks of running words: a title named in it is put between asterisks (*x*) and set in
// italics, which the stylesheet turns upright where the quotation itself is italic.
export function verseQuote(text) {
  const lines = tidy(text).split(/\s+\/\s+/);
  if (lines.length < 2) return rich(lines[0]);
  return lines.flatMap((line, i) => [el('span', { class: 'ql' }, rich(i < lines.length - 1 ? `${line}\u00a0/` : line)), i < lines.length - 1 ? ' ' : null]).filter(Boolean);
}
