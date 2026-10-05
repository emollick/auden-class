// Kafka, The Castle, translated by Willa and Edwin Muir (1930).
// The Standard Ebooks edition. See notes/castle.md.

import { fetchText, clean, countWords, writeText, roman, pad2 } from '../lib/gutenberg.mjs';

// Standard Ebooks publishes no plain-text file. The cached file is the
// text of the edition's single-page view, a paragraph to a line. If the
// cache is empty the page itself (XHTML) is fetched instead, and read
// below to the same result.
const NAME = 'se_kafka_castle_muir.txt';
const PAGE = 'https://standardebooks.org/ebooks/franz-kafka/the-castle/willa-muir_edwin-muir';
const URL = `${PAGE}/text/single-page`;

// Chapter XV is in five sections, four of them with titles. It is some
// 24,000 words, so each section is a part.
const SECTIONS = ['Amalia’s Secret', 'Amalia’s Punishment', 'Petitions', 'Olga’s Plans'];

// Standard Ebooks puts an invisible word joiner (U+2060) before each dash
// and around the hair space (U+200A) that it sets before an ellipsis and
// between quotation marks that meet, and a no-break space (U+00A0) after
// "Mr." None of these is in the book as printed: the first two come out
// and the third becomes an ordinary space. They are written here by
// number, so that no invisible character stands in this file.
const INVISIBLE = new RegExp(`[${String.fromCodePoint(0x2060, 0x200a)}]`, 'g');
const NO_BREAK = new RegExp(String.fromCodePoint(0xa0), 'g');
const tidy = (s) => clean(s.replace(INVISIBLE, '').replace(NO_BREAK, ' ')).trim();

// The novel as a list of headings and paragraphs, from the text file:
// after the edition's table of contents (which ends with "Uncopyright")
// come the translator's introductory note, the title, the chapters under
// roman numerals, Max Brod's additional note and one endnote to it.
function fromText(text) {
  const lines = text.split('\n');
  const toc = lines.indexOf('Uncopyright');
  const start = lines.findIndex((l, i) => i > toc && l === 'The Castle');
  const end = lines.findIndex((l, i) => i > start && l === 'Additional Note');
  if (toc < 0 || start < 0 || end < 0) throw new Error('Castle: cannot find the novel between the introductory note and the additional note');
  if (lines.find((l, i) => i > toc && l.trim()) !== 'Introductory Note') throw new Error('Castle: expected the introductory note after the table of contents');
  const items = lines.slice(start + 1, end).filter((l) => l.trim() !== '').map((l) => {
    if (/^[IVXL]+$/.test(l)) return { k: 'h2', text: l };
    if (SECTIONS.includes(l)) return { k: 'h3', text: l };
    // a heading is a short line with no stop at its end; any other line of that shape is a surprise
    if (l.length < 40 && !/[.?!”’…]$/.test(l)) throw new Error(`Castle: unrecognised heading: ${l}`);
    return { k: 'p', text: l };
  });
  // The edition sets Klamm's first letter apart. The text file cannot show
  // that, so the letter is found by its opening and by what follows it.
  items.forEach((it, i) => {
    const next = items[i + 1];
    if (it.k === 'p' && it.text.startsWith('“My dear Sir, As you know,') && next && next.text.startsWith('The signature was illegible')) it.quoted = true;
  });
  return items;
}

// The same list from the page. The chapters are the sections with ids
// chapter-1 to chapter-18, between the half-title and the afterword;
// a chapter number is an h2, a section title an h3, and what is set
// apart is in a blockquote.
function fromPage(html) {
  const first = html.indexOf(' id="chapter-1"');
  const after = html.indexOf(' id="afterword"');
  if (first < 0 || after < first) throw new Error('Castle: cannot find the chapters in the page');
  const seg = html.slice(html.lastIndexOf('<section', first), html.lastIndexOf('<section', after));
  const text = (s) => {
    const t = s.replace(/<[^>]+>/g, '');
    const entity = t.replace(/&(lt|gt|amp);/g, '').match(/&[#\w]+;/);
    if (entity) throw new Error(`Castle: a character written as ${entity[0]} in the page`);
    return t.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/[ \t\r\n]+/g, ' ').trim();
  };
  const items = [];
  let quoted = false;
  for (const m of seg.matchAll(/<(h2|h3|p)\b[^>]*>([\s\S]*?)<\/\1>|<(\/?)blockquote\b[^>]*>/g)) {
    if (m[1]) items.push({ k: m[1], text: text(m[2]), quoted: quoted && m[1] === 'p' });
    else quoted = m[3] !== '/';
  }
  return items;
}

// run(report) hands the figures of the checks to report, if one is given.
export function run(report = () => {}) {
  const source = fetchText(NAME, URL);
  const items = /^\s*<(\?xml|!doctype|html)/i.test(source) ? fromPage(source) : fromText(source);

  const parts = [];
  let chapters = 0;
  let sections = 0;
  let headingWords = 0;
  let letters = 0;
  let cur = null;
  for (const it of items) {
    if (it.k === 'h2') {
      if (!/^[IVXL]+$/.test(it.text) || roman(it.text) !== ++chapters) throw new Error(`Castle: chapter ${it.text} out of order`);
      cur = { id: `c${pad2(chapters)}`, label: `Chapter ${chapters}`, blocks: [] };
      parts.push(cur);
      sections = 0;
      headingWords += 1;
    } else if (it.k === 'h3') {
      if (chapters !== 15 || it.text !== SECTIONS[sections]) throw new Error(`Castle: unexpected heading: ${it.text}`);
      sections++;
      cur = { id: `c15-${sections + 1}`, label: `Chapter 15: ${tidy(it.text)}`, blocks: [] };
      parts.push(cur);
      headingWords += countWords(it.text);
    } else {
      if (!cur) throw new Error(`Castle: text before the first chapter: ${it.text.slice(0, 50)}`);
      if (it.quoted) letters++;
      cur.blocks.push({ k: it.quoted ? 'q' : 'p', text: tidy(it.text) });
    }
  }

  if (chapters !== 18) throw new Error(`Castle: expected 18 chapters, found ${chapters}`);
  if (parts.filter((p) => p.id.startsWith('c15')).length !== 5) throw new Error('Castle: expected chapter 15 in five sections');
  if (parts.length !== 22) throw new Error(`Castle: expected 22 parts, found ${parts.length}`);
  if (letters !== 1 || parts[1].blocks.filter((b) => b.k === 'q').length !== 1) throw new Error(`Castle: expected one letter set apart, in chapter 2; found ${letters}`);
  const paragraphs = items.filter((it) => it.k === 'p').length;
  if (paragraphs !== 303) throw new Error(`Castle: expected 303 paragraphs, found ${paragraphs}`);

  const index = writeText('castle', {
    author: 'Franz Kafka',
    title: 'The Castle',
    translator: 'Willa and Edwin Muir',
    year: 1930,
    verse: false,
    source: { name: 'Standard Ebooks', url: PAGE },
  }, parts);

  // Nothing lost: the words written out against the words of the source
  // between the title and the additional note, less the headings.
  const sourceWords = countWords(items.map((it) => it.text.replace(INVISIBLE, '')).join('\n'));
  const expected = sourceWords - headingWords;
  if (Math.abs(index.words - expected) > 0.01 * expected) throw new Error(`Castle: ${index.words} words written, ${expected} in the source`);
  report({ words: index.words, sourceWords, headingWords, expected, chapters, parts: parts.length, paragraphs });
  return index;
}
