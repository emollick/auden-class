// Loading the books. Each text is a folder of parts; a part is a canto,
// a chapter, an act.

const cache = new Map();

// A file the site does not have, as against one that could not be fetched.
// Loading the page again will bring the second and never the first.
export class Missing extends Error {}

async function getJSON(url) {
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url).then((r) => {
        if (r.status === 404) throw new Missing(url);
        if (!r.ok) throw new Error(`${url}: ${r.status}`);
        return r.json();
      }),
    );
  }
  try {
    return await cache.get(url);
  } catch (e) {
    cache.delete(url);
    throw e;
  }
}

export function loadIndex(textId) {
  return getJSON(`data/texts/${textId}/index.json`);
}

export function loadPart(textId, partId) {
  return getJSON(`data/texts/${textId}/${partId}.json`);
}

export function loadData(name) {
  return getJSON(`data/${name}.json`);
}

// The lines of a part as they are learned and written out. In verse, one
// string per line with '' between stanzas. In a prose version each
// paragraph is a line.
export function partLines(part) {
  const lines = [];
  let lastVerse = false;
  for (const b of part.blocks) {
    if (b.k === 'v') {
      if (lines.length && lastVerse) lines.push('');
      for (const l of b.lines) lines.push(l);
      lastVerse = true;
    } else if (b.k === 'p') {
      lines.push(b.text);
      lastVerse = false;
    }
  }
  return lines;
}

// A piece to be learned is either a whole part or lines from..to of it
// (counting verse lines from 1, as editions number them).
export async function pieceLines(piece, textId) {
  if (piece.lines) return piece.lines;
  const part = await loadPart(textId || piece.text, piece.part);
  const all = partLines(part);
  if (!piece.from) return all;
  const out = [];
  let n = 0;
  for (const l of all) {
    if (l === '') {
      if (out.length && out[out.length - 1] !== '') out.push('');
      continue;
    }
    n++;
    if (n >= piece.from && n <= piece.to) out.push(l);
  }
  while (out.length && out[out.length - 1] === '') out.pop();
  return out;
}
