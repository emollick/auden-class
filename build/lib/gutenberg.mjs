// Fetching and cutting public-domain texts. The words of the books go
// from the source file into the site's data files and nowhere else.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { typeset, typesetBlocks, SINGLE } from './typeset.mjs';

export const CACHE = path.resolve(import.meta.dirname, '../../.cache/texts');
export const OUT = path.resolve(import.meta.dirname, '../../site/data/texts');

const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

export function fetchText(name, url) {
  fs.mkdirSync(CACHE, { recursive: true });
  const file = path.join(CACHE, name);
  if (!fs.existsSync(file) || fs.statSync(file).size < 1000) {
    execFileSync('curl', ['-sS', '-L', '--fail', '-A', UA, '--max-time', '120', '-o', file, url], { stdio: 'inherit' });
  }
  let text = fs.readFileSync(file, 'utf8');
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
  return text.replace(/\r\n/g, '\n');
}

// The body of a Project Gutenberg file, without its licence.
export function gutenbergBody(text) {
  const lines = text.split('\n');
  let start = lines.findIndex((l) => /^\*\*\* ?START OF (THE|THIS) PROJECT GUTENBERG/.test(l));
  let end = lines.findIndex((l) => /^\*\*\* ?END OF (THE|THIS) PROJECT GUTENBERG/.test(l));
  if (start < 0) start = -1;
  if (end < 0) end = lines.length;
  return lines.slice(start + 1, end);
}

export function countWords(s) {
  const t = s.trim();
  return t ? t.split(/\s+/).length : 0;
}

// Gutenberg marks italics _so_. Keep the words, drop the marks, and
// straighten nothing else.
export function clean(s) {
  return s
    .replace(/_([^_\n]+)_/g, '$1')
    .replace(/\[\d+\]/g, '')
    .replace(/ {2,}/g, ' ')
    .replace(/\s+$/g, '');
}

// Split a run of lines into blocks at blank lines.
export function stanzas(lines) {
  const out = [];
  let cur = [];
  for (const l of lines) {
    if (l.trim() === '') {
      if (cur.length) out.push(cur);
      cur = [];
    } else cur.push(l);
  }
  if (cur.length) out.push(cur);
  return out;
}

// Verse: every source line is a line of the poem.
export function verseBlocks(lines) {
  return stanzas(lines).map((st) => ({ k: 'v', lines: st.map((l) => clean(l).trim()) }));
}

// Prose: source lines are wrapped arbitrarily; a paragraph is a block.
export function proseBlocks(lines) {
  return stanzas(lines).map((st) => ({ k: 'p', text: clean(st.map((l) => l.trim()).join(' ')) }));
}

export function blockWords(blocks) {
  let n = 0;
  for (const b of blocks) {
    if (b.k === 'v') n += b.lines.reduce((a, l) => a + countWords(l), 0);
    else if (b.text) n += countWords(b.text);
  }
  return n;
}

export function blockLines(blocks) {
  return blocks.reduce((a, b) => a + (b.k === 'v' ? b.lines.length : 0), 0);
}

// The course's page: 350 words of prose or 35 lines of verse.
export const WORDS_PER_PAGE = 350;
export const LINES_PER_PAGE = 35;
export function blockPages(blocks) {
  let pages = 0;
  for (const b of blocks) {
    if (b.k === 'v') pages += b.lines.length / LINES_PER_PAGE;
    else if (b.k === 'p' || b.k === 'q') pages += countWords(b.text) / WORDS_PER_PAGE;
  }
  return Math.round(pages * 10) / 10;
}

export function writeText(id, meta, parts) {
  // Printers' quotation marks and dashes for typewriter ones (see typeset.mjs).
  for (const p of parts) {
    p.label = typeset(p.label, SINGLE[id]);
    if (p.group) p.group = typeset(p.group, SINGLE[id]);
    typesetBlocks(p.blocks, SINGLE[id]);
  }
  const dir = path.join(OUT, id);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const index = {
    id,
    ...meta,
    parts: parts.map((p) => ({
      id: p.id,
      label: p.label,
      group: p.group,
      words: blockWords(p.blocks),
      lines: blockLines(p.blocks) || undefined,
      pages: blockPages(p.blocks),
      ...(p.meta || {}),
    })),
  };
  index.words = index.parts.reduce((a, p) => a + p.words, 0);
  index.pages = Math.round(index.parts.reduce((a, p) => a + p.pages, 0));
  fs.writeFileSync(path.join(dir, 'index.json'), JSON.stringify(index));
  for (const p of parts) {
    fs.writeFileSync(path.join(dir, `${p.id}.json`), JSON.stringify({ id: p.id, label: p.label, group: p.group, blocks: p.blocks }));
  }
  return index;
}

const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100 };
export function toRoman(n) {
  let out = '';
  for (const [v, r] of [[100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]) while (n >= v) { out += r; n -= v; }
  return out;
}

export function roman(s) {
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    const v = ROMAN[s[i]];
    const next = ROMAN[s[i + 1]] || 0;
    n += v < next ? -v : v;
  }
  return n;
}

export function pad2(n) {
  return String(n).padStart(2, '0');
}
