// Cutting passages out of the books. The words go from the book's own
// files to the course; nobody retypes them.

import fs from 'node:fs';
import path from 'node:path';

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function cutter(TEXTS, fail) {
  const indexes = new Map();
  function textIndex(id) {
    if (!indexes.has(id)) {
      const file = path.join(TEXTS, id, 'index.json');
      if (!fs.existsSync(file)) throw new Error(`no such text: ${id}`);
      indexes.set(id, JSON.parse(fs.readFileSync(file, 'utf8')));
    }
    return indexes.get(id);
  }
  const partCache = new Map();
  function textPart(id, partId) {
    const key = `${id}/${partId}`;
    if (!partCache.has(key)) {
      const file = path.join(TEXTS, id, `${partId}.json`);
      if (!fs.existsSync(file)) throw new Error(`no such part: ${key}`);
      partCache.set(key, JSON.parse(fs.readFileSync(file, 'utf8')));
    }
    return partCache.get(key);
  }

  // Passages cut from the books are not ours to edit: the review document
  // leaves them out. Every object made by cut() is remembered here.
  const quoted = new WeakSet();

  // cut: [textId, partId, firstBlock, lastBlock?, { lines: [a, b] } | { from: 'words', to: 'words' }]
  // Returns { lines } for verse or { paras } for prose, and where it is from.
  // dropClose takes off a closing quotation mark whose opening mark is before the passage.
  function cut(spec, what) {
    const [textId, partId, a, b0, opt = {}] = spec;
    const b = b0 ?? a;
    const index = textIndex(textId);
    const meta = index.parts.find((x) => x.id === partId);
    if (!meta) throw new Error(`${what}: no part ${partId} in ${textId}`);
    const part = textPart(textId, partId);
    const blocks = part.blocks.slice(a, b + 1).filter((x) => x.k === 'v' || x.k === 'p' || x.k === 'q');
    if (!blocks.length) throw new Error(`${what}: nothing at ${textId}/${partId} ${a}-${b}`);
    const where = [meta.group && !meta.label.startsWith(meta.group) ? meta.group : null, meta.label].filter(Boolean).join(', ');
    const out = { where, text: textId, part: partId };
    if (blocks.every((x) => x.k === 'v')) {
      let lines = [];
      blocks.forEach((x, i) => { if (i) lines.push(''); lines.push(...x.lines); });
      if (opt.lines) {
        const [la, lb] = opt.lines;
        let n = -1;
        lines = lines.filter((l) => { if (l === '') return n >= la && n < lb; n++; return n >= la && n <= lb; });
        while (lines[0] === '') lines.shift();
        while (lines[lines.length - 1] === '') lines.pop();
        if (!lines.length) throw new Error(`${what}: line range ${la}-${lb} is empty`);
      }
      if (opt.dropClose) lines[lines.length - 1] = lines[lines.length - 1].replace(/[’”]+$/, '');
      out.lines = lines;
    } else if (blocks.every((x) => x.k !== 'v')) {
      let text = blocks.map((x) => x.text).join('\n\n');
      if (opt.from || opt.to) {
        const i = opt.from ? text.indexOf(opt.from) : 0;
        if (i < 0) throw new Error(`${what}: cannot find "${opt.from}"`);
        const j = opt.to ? text.indexOf(opt.to, i) : -1;
        if (opt.to && j < 0) throw new Error(`${what}: cannot find "${opt.to}"`);
        text = text.slice(i, opt.to ? j + opt.to.length : undefined);
      }
      out.paras = text.split('\n\n');
    } else {
      // verse and prose together (a speech that changes from one to the other)
      out.paras = blocks.map((x) => (x.k === 'v' ? x.lines.join(' / ') : x.text));
    }
    quoted.add(out);
    if (out.lines) quoted.add(out.lines);
    if (out.paras) quoted.add(out.paras);
    return out;
  }

  // blank: [[row, word, nth?], ...] where row counts the lines (or paragraphs) of the passage from 0
  function cloze(spec, what) {
    const passage = cut(spec.cut, what);
    const rows = passage.lines || passage.paras;
    const verse = !!passage.lines;
    const byRow = new Map();
    let rowNo = -1;
    const rowIndex = rows.map((r) => (r === '' ? -1 : ++rowNo));
    for (const [row, word, nth = 1] of spec.blank) {
      if (!byRow.has(row)) byRow.set(row, []);
      byRow.get(row).push({ word, nth });
    }
    const lines = [];
    const blanks = [];
    rows.forEach((text, i) => {
      if (text === '') { lines.push([]); return; }
      const wants = byRow.get(rowIndex[i]) || [];
      const found = [];
      for (const { word, nth } of wants) {
        const re = new RegExp(`(?<![\\p{L}\\p{N}'’-])${escapeRe(word)}(?![\\p{L}\\p{N}'’-])`, 'gu');
        let m;
        let k = 0;
        let hit = null;
        while ((m = re.exec(text))) { k++; if (k === nth) { hit = m.index; break; } }
        if (hit === null) { fail(`${what}: "${word}" (no. ${nth}) is not in row ${rowIndex[i]}`); continue; }
        found.push({ at: hit, word });
      }
      found.sort((x, y) => x.at - y.at);
      const segs = [];
      let pos = 0;
      for (const f of found) {
        if (f.at < pos) { fail(`${what}: overlapping blanks in row ${rowIndex[i]}`); continue; }
        if (f.at > pos) segs.push(text.slice(pos, f.at));
        segs.push(blanks.length);
        blanks.push(f.word);
        pos = f.at + f.word.length;
      }
      if (pos < text.length) segs.push(text.slice(pos));
      lines.push(segs);
    });
    for (const [row] of spec.blank) if (row > rowNo) fail(`${what}: row ${row} is beyond the passage (${rowNo + 1} rows)`);
    quoted.add(lines);
    quoted.add(blanks);
    const out = { id: spec.id, verse, lines, blanks, cite: spec.cite, where: passage.where };
    if (spec.setting) out.setting = spec.setting;
    if (spec.after) out.after = spec.after;
    return out;
  }

  // A passage with some of its words changed for others, to be put right.
  // swap: [[row, 'word in the book', 'word put in its place', nth?], ...]
  function emend(spec, what) {
    const c = cloze({ cut: spec.cut, blank: spec.swap.map(([row, right, , nth]) => [row, right, nth || 1]) }, what);
    const want = spec.swap.map(([row, right, wrong, nth]) => ({ row, right, wrong, nth: nth || 1 }));
    // cloze numbers the words in the order they stand in the passage
    const order = want.map((w, i) => ({ ...w, i })).sort((x, y) => x.row - y.row);
    const wrong = [];
    let rowNo = -1;
    c.lines.forEach((segs) => {
      if (!segs.length) return;
      rowNo++;
      const here = order.filter((w) => w.row === rowNo);
      for (const seg of segs) {
        if (typeof seg !== 'number') continue;
        const word = c.blanks[seg];
        const k = here.findIndex((w) => w.right === word && !w.used);
        if (k < 0) { fail(`${what}: cannot place the change for "${word}" in row ${rowNo}`); wrong[seg] = word; continue; }
        here[k].used = true;
        wrong[seg] = here[k].wrong;
      }
    });
    for (const w of want) {
      if (!w.wrong || /\s/.test(w.wrong)) fail(`${what}: the changed word for "${w.right}" must be one word`);
      if (w.wrong.toLowerCase() === w.right.toLowerCase()) fail(`${what}: "${w.right}" is changed to itself`);
    }
    quoted.add(c.lines);
    quoted.add(c.blanks);
    return { verse: c.verse, lines: c.lines, right: c.blanks, wrong, where: c.where };
  }

  return { textIndex, textPart, cut, cloze, emend, quoted };
}
