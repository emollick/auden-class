// The notes a piece prints besides its captions: its sources, what each
// caption stands on, and where the page may be wrong. They are written for
// a reader. A reading's working notes ("grounds", "checked", "open",
// "viewWhy") are never printed and never leave the reading.
//
// Used by build/tools/check-reading.mjs (to find working words in what is
// printed) and build/pieces.mjs (to keep the working notes off the site).

// Words that belong to how the work was done, and say nothing to a reader.
export const WORKING = [
  [/\bresearch notes?\b|\bnotes [A-H]\b|\bappendi(?:x|ces) H\d/, 'the working notes of this project mean nothing to a reader: name the book, article or web page itself, and if it was not seen in full say so in "caveats"'],
  [/\bthis session\b|\bfetched\b|\b(?:on )?this machine\b|\bon hand\b/i, 'says how the work was done; give only the source'],
  [/[\w./-]*\b[\w-]+\.(?:txt|json|mjs|js|md|py|sh)\b/, 'a file of this project; a reader cannot open it'],
  [/(?:^|[\s(])(?:site|remake|build|research|\.cache)\/[\w./-]+/, 'a path inside this project; a reader cannot open it'],
  [/\bhosted\b/i, 'say "the text printed here" or "the copy here"'],
  [/\bword-splitter\b|\bby (?:a )?scripts?\b|\bwith (?:a |the )?(?:scripts?|build tools?)\b|\bscripts? written\b|\bthe checker\b|\bgrep(?:ped)?\b|\bcurl\b/i, 'tool talk; say "counted on the text printed here", and what was counted as what'],
  [/\bblocks? \d+|\brows? \d+(?:\.\d+)?|\bwords? \d+ (?:to|and) \d+|\b[a-z]\d+[a-z]\d+:\d+/i, 'a block, row or word number of this project; give the act and scene, the book and chapter, or the line, and to send a reader to the place write a link: [Act 3, Scene 1](#/read/hamlet/a3s1:46)'],
  [/\bthe scans?\b/i, 'the scans are this project’s working copies; give the book and the page'],
  [/\b(?:plates?|lens(?:es)?)\b/i, 'the page does not call them plates or lenses: say "the passage above", "the second passage" or its heading, and name a tab by its label'],
];

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

// The links in a printed string: [words](#/read/text/part:block), [words](#/pieceId), [words](https://...)
export function linksOf(text) {
  return [...String(text).matchAll(LINK)].map((m) => ({ words: m[1], href: m[2] }));
}

// What is wrong with one printed string: [what was found, why it will not do].
// `textIds` are the ids of the books printed on the site (an address such as
// hamlet/a3s1 outside a link is a working word too).
export function faultsOf(text, textIds = []) {
  const bare = String(text).replace(LINK, '$1');
  const out = [];
  for (const [re, why] of WORKING) { const m = bare.match(re); if (m) out.push([m[0].trim(), why]); }
  const addr = bare.match(/\b([a-z][a-z0-9-]*)\/[a-z0-9-]+\b/g) || [];
  const hit = addr.find((a) => textIds.includes(a.split('/')[0]));
  if (hit) out.push([hit, 'an address inside this project; give the act and scene, the book and chapter, or the line, and to send a reader there write a link: [Book II](#/read/augustine/book-02:13)']);
  return out;
}

// In a shape lens's facts some keys are working notes: where a number was
// counted, how, and from what. They stay in the reading and are not sent
// to the site. Everything else in the facts may be printed by a drawing.
export const workingKey = (k) => /^(counted|sources?|from|where|at|blocks?|rows?|checked|notes?|method|key)$/i.test(k) || /(Key|Source|Sources|Note|Notes)$/.test(k);

// The facts as the site carries them: without the working notes.
export function factsForSite(v) {
  if (Array.isArray(v)) return v.map(factsForSite);
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).filter(([k]) => !workingKey(k)).map(([k, x]) => [k, factsForSite(x)]));
  return v;
}

const strings = (v, where, out) => {
  if (typeof v === 'string') out.push([where, v]);
  else if (Array.isArray(v)) v.forEach((x, i) => strings(x, `${where}[${i}]`, out));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (!workingKey(k)) strings(x, `${where}.${k}`, out); }
  return out;
};

// Every string of a reading that the page prints, as [where, text, kind]:
// kind 'note' for the printed notes, 'prose' for captions and the like.
export function printedOf(reading) {
  const out = [];
  const note = (where, text) => { if (typeof text === 'string' && text) out.push([where, text, 'note']); };
  const prose = (where, text) => { if (typeof text === 'string' && text) out.push([where, text, 'prose']); };
  prose('about', reading.about); prose('aboutHead', reading.aboutHead); prose('where', reading.where); prose('title', reading.title);
  if (reading.view) { prose('view.says', reading.view.says); note('view.source', reading.view.source); }
  (reading.auden || []).forEach((a, i) => { prose(`auden[${i}].says`, a.says); note(`auden[${i}].source`, a.source); });
  (reading.sources || []).forEach((s, i) => note(`sources[${i}]`, s));
  (reading.caveats || []).forEach((s, i) => note(`caveats[${i}]`, s));
  // under "Read on", for a work that cannot be printed here
  prose('nextNote', reading.nextNote);
  (reading.nextLinks || []).forEach((l, i) => prose(`nextLinks[${i}].label`, l && l.label));
  (reading.plates || []).forEach((p, pi) => {
    const pw = `plate ${p.id || pi}`;
    prose(`${pw} heading`, p.heading); prose(`${pw} noTextWhy`, p.noTextWhy);
    Object.entries(p.speakers || {}).forEach(([name, gloss]) => prose(`${pw} speakers.${name}`, gloss));
    if (p.pair) prose(`${pw} pair.label`, p.pair.label);
    (p.lenses || []).forEach((l, li) => {
      const lw = `${pw} lens ${li} (${l.kind})`;
      prose(`${lw} caption`, l.caption); prose(`${lw} why`, l.why); prose(`${lw} what`, l.what); prose(`${lw} plain`, l.plain);
      note(`${lw} stands`, l.stands);
      for (const key of ['parts', 'notes', 'points', 'ties', 'spans']) (l[key] || []).forEach((x, i) => { for (const f of ['note', 'gloss', 'say', 'tag', 'label']) if (x && typeof x[f] === 'string') prose(`${lw} ${key}[${i}].${f}`, x[f]); });
      // a place in a book printed here, for a drawing to link to: "read": "hamlet/a3s1:46"
      if (l.kind === 'shape' && l.facts !== undefined) strings(l.facts, `${lw} facts`, []).forEach(([w, t]) => out.push([w, t, /\.read(\[\d+\])?$/.test(w) ? 'read' : 'note']));
    });
  });
  return out;
}

// A lens as the site carries it: the working grounds stay behind; the page
// keeps only which kinds of ground the caption stands on. A gloss's `source`
// (the dictionary or edition where the sense was checked) is a working note
// too: the page prints the gloss and its note, never the source, so the
// source stays in the reading and is not sent where anyone can fetch it.
export function lensForSite(lens) {
  const { grounds, ...rest } = lens;
  if (Array.isArray(grounds) && grounds.length) rest.groundKinds = [...new Set(grounds.map((g) => g && g.kind).filter(Boolean))];
  if (rest.kind === 'shape' && rest.facts && typeof rest.facts === 'object') rest.facts = factsForSite(rest.facts);
  if (Array.isArray(rest.notes)) rest.notes = rest.notes.map((n) => { if (!n || typeof n !== 'object' || !('source' in n)) return n; const { source, ...kept } = n; return kept; });
  return rest;
}
