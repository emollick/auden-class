// Shared by fidelio.mjs, carmen.mjs and traviata.mjs. Not a book script.
//
// The three libretti come from the raw OCR text of Internet Archive scans
// (the *_djvu.txt files). In print the original language and the English
// stand side by side; in the OCR text they follow each other column by
// column. What is here: reading the file by line number, telling the
// English lines from the others, mending misread words from a table, and
// joining lines that the printer broke.
//
// Every table in the book scripts speaks of the lines of the source file
// by their numbers (the first line is 1), so that anybody can open the
// file and see what was done.

import { fetchText } from '../lib/gutenberg.mjs';

export const squash = (s) => s.replace(/\s+/g, ' ').trim();

// The lines of the file; lines[n - 1] is line n.
export function sourceLines(name, url) {
  return fetchText(name, url).split('\n');
}

// ---- which language a piece of text is in -------------------------------

const list = (s) => new Set(s.trim().split(/\s+/));
const WORDS = {
  en: list(`the and of to a in is that it you i my he his her with for not be this have as but me are at on
    what so we him all will no she thy thee from by your our they do was shall who if there them their now
    here then let would more can come see how may must one when oh yes am an or us which were has had did
    thou art hast go know say well love heart yet where too should could again never ever only away still
    than these those upon into out up down very good dear give take make made been being little great old
    new first last long much such any every each both own same other another without before after over
    under through while till until because why whose whom though whether either neither nor nothing
    something nobody none soon once always often already alone together about above against among around
    between during toward towards since behind beside beyond its himself herself myself yourself does done
    doing don't won't can't i'll i'm i've i'd it's he's she's that's there's what's you'll we'll they'll
    you're we're 'tis 'twas o'er e'er ne'er ye mine thine`),
  de: list(`der die das und ich du er sie es ist nicht ein eine einen einem einer eines den dem des zu mit
    mir mich dir dich wir ihr ihn ihm ihnen ihre ihrem ihren euch euer uns unser auf für von so wie was ja
    nein nur noch schon hat habe hast haben bin bist sind seid wird werde werden wirst kann kannst muss
    musst soll sollst will willst wenn dass aber auch doch mein meine meinem meinen meiner dein deine
    deinem deinen sein seine seinem seinen hier nun da im am an in um aus bei nach vor über unter sich wo
    wer wen wem dann denn weil ob als bis durch gegen ohne zum zur vom ins kein keine keinen nichts alles
    alle immer nie wieder mehr sehr gut jetzt heute dort oder weh ach gott herz liebe leben tod welch
    welche dieser diese dieses diesen ihr's ist's wär hab ich's`),
  fr: list(`le la les de des du un une et je tu il elle nous vous ils elles est sont suis es pas ne que qui
    quoi me te se ce cet cette ces mon ma mes ton ta tes son sa ses notre votre leur au aux en dans pour
    sur avec sans si mais ou où donc bien plus tout tous toute quand comme moi toi lui eux ah oui non ici
    là voilà ai as a avons avez ont étais était être avoir fait faire dit dire va vais vont peut veux veut
    faut y on très trop encore jamais toujours rien chez par vers entre après avant aussi alors car ni
    cela amour coeur cœur l d j n qu c s m t`),
  it: list(`il lo la i gli le di del dello della dei degli delle e è ed un uno una che non mi ti si ci vi io
    tu egli ella noi voi essi a al allo alla ai agli alle da dal dalla in nel nella con per su sul sulla
    tra fra ma se o ah oh sì no mio mia miei mie tuo tua tuoi suo sua suoi nostro vostro loro più piu qui
    qua or ora ne come quando chi cui tutto tutti tutta amor amore cor core cuore ciel cielo dio son sono
    sei siamo siete ho hai ha abbiamo hanno era fu questo questa quello quella qual quale dove perché
    perche già gia ancor ancora mai sempre solo sola ogni altro altra l d m t s v c un' dell all nell
    quell quest ch`),
};
const MARKS = { de: /[äöüß]/, fr: /[àâçéèêëîïôûùœ]/, it: /[àèéìòù]/ };

const tokens = (text) => text.toLowerCase().replace(/[’‘]/g, "'").split(/[^a-zäöüßàâçéèêëîïôûùœìòáíóú']+/).filter(Boolean);

// How many words of the text are common words of English, and how many of
// the other language. Words common to both count for neither.
export function score(text, foreign) {
  const EN = WORDS.en;
  const XX = WORDS[foreign];
  let en = 0;
  let xx = 0;
  for (const t of tokens(text)) {
    const bare = t.replace(/^'+|'+$/g, '');
    if (!bare) continue;
    const pieces = bare.includes("'") ? [bare, ...bare.split("'")] : [bare];
    let e = false;
    let x = false;
    for (const p of pieces) {
      if (EN.has(p) && XX.has(p)) continue;
      if (EN.has(p)) e = true;
      if (XX.has(p)) x = true;
    }
    if (MARKS[foreign].test(bare)) x = true;
    if (e && !x) en++;
    if (x && !e) xx++;
  }
  return { en, xx };
}

// 'en', the other language, or null when the words do not settle it.
export function verdict(text, foreign) {
  const { en, xx } = score(text, foreign);
  if ((en >= 2 && xx === 0) || (en >= 4 && en >= 3 * xx)) return 'en';
  if ((xx >= 2 && en === 0) || (xx >= 4 && xx >= 3 * en)) return foreign;
  return null;
}

// ---- the English lines of a two-language file ---------------------------

// lines: the file. opt:
//   id       for messages
//   from, to first and last line of the libretto
//   foreign  'de', 'fr' or 'it'
//   hardGap  so many blank lines (or more) always part two columns
//   head     a running head (matched against the squashed line): dropped, and parts two columns
//   drop     [[n, text, parts], ...] stray lines to leave out; text must be the line as it
//            stands; parts = true when the line is the wreck of a running head
//   assign   [[from, to, lang], ...] lines whose language the words do not settle, settled by hand
// Returns [{ n, text, gap, brk }]: the English lines in order, each with its
// number in the file, the count of blank lines just above it, and brk =
// true when something that is not English was left out just above it.
export function englishLines(lines, opt) {
  const { id, from, to, foreign, hardGap = Infinity, head = null, drop = [], assign = [] } = opt;
  const dropped = new Map(drop.map(([n, text, parts]) => [n, { text, parts: !!parts }]));
  const forced = new Map();
  for (const [a, b, lang] of assign) for (let n = a; n <= b; n++) forced.set(n, lang);
  for (const [n, { text }] of dropped) {
    if (squash(lines[n - 1] ?? '') !== text) throw new Error(`${id}: line ${n} to be dropped is ${JSON.stringify(squash(lines[n - 1] ?? ''))}, not ${JSON.stringify(text)}`);
  }

  // Chunks: runs of lines with no blank line between them, cut also where
  // the hand-made table changes its mind.
  const chunks = [];
  let cur = null;
  let gap = 0;
  let hard = true;
  for (let n = from; n <= to; n++) {
    const text = squash(lines[n - 1]);
    if (text === '') { gap++; cur = null; continue; }
    if (dropped.has(n)) {
      if (dropped.get(n).parts) { hard = true; cur = null; gap = 0; }
      continue;
    }
    if (head && head.test(text)) { hard = true; cur = null; gap = 0; continue; }
    if (gap >= hardGap) hard = true;
    const f = forced.get(n) ?? null;
    if (!cur || cur.forced !== f) {
      cur = { at: n, lines: [], gap, hard, forced: f, lang: f };
      chunks.push(cur);
    }
    cur.lines.push({ n, text, gap: cur.lines.length ? 0 : gap });
    gap = 0;
    hard = false;
  }

  for (const c of chunks) {
    if (c.lang) continue;
    c.lang = verdict(c.lines.map((l) => l.text).join(' '), foreign);
    // a chunk must not hold both languages
    const each = c.lines.map((l) => verdict(l.text, foreign)).filter(Boolean);
    if (new Set(each).size > 1) throw new Error(`${id}: lines ${c.at} to ${c.lines[c.lines.length - 1].n} hold both languages; part them in the table`);
  }

  // Chunks the words do not settle take the language of their neighbours
  // in the same column, when the neighbours agree.
  const settled = chunks.map((c) => c.lang);
  chunks.forEach((c, i) => {
    if (c.lang) return;
    let before = null;
    for (let j = i; j > 0 && !chunks[j].hard; j--) if (settled[j - 1]) { before = settled[j - 1]; break; }
    let after = null;
    for (let j = i + 1; j < chunks.length && !chunks[j].hard; j++) if (settled[j]) { after = settled[j]; break; }
    const say = `${id}: cannot tell the language of line ${c.at} (${JSON.stringify(c.lines[0].text.slice(0, 40))})`;
    if (before && after && before !== after) throw new Error(`${say}: ${before} above, ${after} below`);
    if (!before && !after) throw new Error(`${say}: nothing near it to go by`);
    c.lang = before || after;
  });

  const out = [];
  let brk = true;
  for (const c of chunks) {
    if (c.hard) brk = true;
    if (c.lang !== 'en') { brk = true; continue; }
    for (const l of c.lines) {
      out.push({ n: l.n, text: l.text, gap: l.gap, brk });
      brk = false;
    }
  }
  return out;
}

// ---- mending misread words ----------------------------------------------

// table: [[n, wrong, right], ...]. The wrong string must stand exactly once
// in line n as it is when its turn comes (rows for one line are applied in
// order). A line mended to nothing is left out.
export function mend(stream, table, id) {
  const at = new Map(stream.map((l) => [l.n, l]));
  for (const row of table) {
    const [n, wrong, right] = row;
    const l = at.get(n);
    if (!l) throw new Error(`${id}: correction for line ${n}, which is not an English line of the libretto`);
    const parts = l.text.split(wrong);
    if (wrong === '' || parts.length !== 2) throw new Error(`${id}: line ${n}: ${JSON.stringify(wrong)} stands ${parts.length - 1} times in ${JSON.stringify(l.text)}`);
    l.text = squash(parts[0] + right + parts[1]);
  }
  const out = [];
  let carryGap = 0;
  let carryBrk = false;
  for (const l of stream) {
    if (l.text === '') { carryGap += l.gap; carryBrk = carryBrk || l.brk; continue; }
    out.push({ ...l, gap: l.gap + carryGap, brk: l.brk || carryBrk });
    carryGap = 0;
    carryBrk = false;
  }
  return out;
}

// ---- joining what the printer broke -------------------------------------

// Join two pieces of a broken line. A hyphen at the break is the printer's
// and goes, unless keep says the word has a hyphen of its own.
export function glue(a, b, keep = false) {
  if (/[A-Za-zÀ-ÿ]-$/.test(a) && !keep) return a.slice(0, -1) + b;
  if (/-$/.test(a) && keep) return a + b;
  if (/—$/.test(a) || /^—/.test(b)) return a + b;
  return `${a} ${b}`;
}

// The old printers put a space before ; : ! ? and the scan keeps some of
// them. They are no part of the spelling.
export function tidy(s) {
  return squash(s)
    .replace(/\s+([,;:!?.])/g, '$1')
    .replace(/([(\[])\s+/g, '$1')
    .replace(/\s+([)\]])/g, '$1');
}

// ---- last look at what was built ----------------------------------------

// Throws if the parts are not fit to print: a name with no speech under
// it, a speech with no name over it, an empty block, or a mark that no
// English libretto prints (what is left of the other language, of a
// bracket, or of dirt on the page).
export function proof(id, parts) {
  const odd = /[^A-Za-z0-9 .,;:!?'’‘“”"()\-—&éèêàâôûçïñæœÉ]/;
  for (const p of parts) {
    p.blocks.forEach((b, i) => {
      const where = `${id}: ${p.id}, block ${i}`;
      const next = p.blocks[i + 1];
      const texts = b.k === 'v' ? b.lines : [b.text];
      if (!texts.length) throw new Error(`${where}: empty`);
      for (const t of texts) {
        if (typeof t !== 'string' || !t.trim()) throw new Error(`${where}: empty`);
        const m = t.match(odd);
        if (m) throw new Error(`${where}: the mark ${JSON.stringify(m[0])} in ${JSON.stringify(t)}`);
        if (t !== t.trim() || /  /.test(t)) throw new Error(`${where}: spaces in ${JSON.stringify(t)}`);
      }
      if (b.k === 's' && (!next || next.k === 's' || next.k === 'h')) throw new Error(`${where}: ${b.text} says nothing`);
      if (b.k === 'p' || b.k === 'v') {
        let j = i - 1;
        while (j >= 0 && p.blocks[j].k !== 's' && p.blocks[j].k !== 'h') j--;
        if (j < 0 || p.blocks[j].k !== 's') throw new Error(`${where}: words with no speaker: ${texts[0].slice(0, 40)}`);
      }
    });
  }
}
