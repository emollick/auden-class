import { fetchText, gutenbergBody, writeText } from '../lib/gutenberg.mjs';
import { squash, join, words, tokens, italics, runBlocks, newReport, sameWords, finish, expectShape } from './plays/speech.mjs';

// Project Gutenberg no. 4039. The file names no edition: the scenes are
// divided by place, as Gifford divided them, and the introduction before
// the play and the glossary after it look to be those of the Everyman's
// Library Jonson of 1910 (F. E. Schelling's). Everything in the play
// is set in five spaces; a speech begins "VOLP: " or "VOLP [ASIDE.]: ";
// stage directions are in capitals, most of them in square brackets.
// The speakers' names stay as the source prints them, short and in
// capitals; the directions are put into ordinary letters (see NAMES).

// Every speaker's label as the source prints it, without the colon.
const SPEAKERS = [
  '1 AVOC', '1 MER', '1 WOM', '1, 2 AVOC', '2 AVOC', '2 MER', '3 AVOC', '3 MER', '4 AVOC', 'ALL', 'AND', 'BON',
  'CAS', 'CEL', 'COM', 'COR', 'CORB', 'CORV', 'CORV, MOS', 'CORV, VOLT', 'LADY P', 'MOB', 'MOS', 'NAN', 'NANO',
  'NANO AND CASTRONE', 'NOT', 'PER', 'SERV', 'SIR P', 'VOLP', 'VOLPONE', 'VOLT', 'WOM',
];

// One speech of Mosca's is headed "B:" in the source, which is nobody.
const FIXES = [["     B: O, sir, 'tis past the scotomy; he now", "     MOS: O, sir, 'tis past the scotomy; he now"]];

// Square brackets that are the editor's marks in a line of verse, not
// stage directions. They stay in the line.
const IN_TEXT = ['re-', 'could'];

// Prose is wrapped at between 67 and 73 columns, five of them the margin.
const READ = { wrap: 61, capital: 'verse' };

const SCENES = [1, 3, 6, 2, 8];

// The source sets its stage directions in capitals (a plain-text file's
// way of showing the italics of the printed book), all but five, which it
// sets in small letters. They are given here in ordinary letters: a
// capital for the first word and for the names below, and no other
// change. The names are those of persons and places, as full or as short
// as the directions give them. ("Politick-Would" is for one direction
// that has the hyphen of "Politick Would-be" in the wrong place.)
const NAMES = [
  'Volpone', 'Volp.', 'Vol.', 'Mosca', 'Mos.', 'Voltore', 'Volt.', 'Corbaccio', 'Corb.', 'Corvino', 'Corv.',
  'Bonario', 'Bon.', 'Celia', 'Cel.', 'Nano', 'Androgyno', 'And.', 'Castrone', 'Cast.', 'Cas.', 'Peregrine', 'Per.',
  'Sir', 'Lady', 'Politick', 'Politick-Would', 'Pol.', 'P.', 'Would-be', 'Avocatori', 'Avocat.', 'Notario', 'Not.',
  'Commandadori', 'Saffi', "St. Mark's Place", 'Scrutineo', 'Senate-house',
];
const NAME_RES = [...NAMES]
  .sort((a, b) => b.length - a.length)
  .map((name) => [new RegExp(`(?<![A-Za-z])${name.toLowerCase().replace(/\./g, '\\.')}(?![A-Za-z])`, 'g'), name]);
const SHORT = new Set(NAMES.filter((name) => name.endsWith('.')));

function ordinary(text) {
  let s = text.toLowerCase();
  for (const [re, name] of NAME_RES) s = s.replace(re, name);
  s = s[0].toUpperCase() + s.slice(1);
  // a second sentence would want a capital too: there is none that does not begin with a name
  for (const m of s.matchAll(/(\S+) (?=[a-z])/g)) {
    if (/[.?!]$/.test(m[1]) && !SHORT.has(m[1])) throw new Error(`Volpone: a sentence without a capital in a direction: ${text}`);
  }
  if (/[.?!]--[a-z]/.test(s)) throw new Error(`Volpone: a sentence without a capital in a direction: ${text}`);
  if (s.toUpperCase() !== text.toUpperCase()) throw new Error(`Volpone: a direction changed in more than its capitals: ${text}`);
  return s;
}

function paragraphs(lines, from, to) {
  const out = [];
  let cur = null;
  for (let i = from; i < to; i++) {
    if (lines[i] === '') {
      cur = null;
      continue;
    }
    if (!cur) {
      cur = { at: i, lines: [] };
      out.push(cur);
    }
    cur.lines.push(lines[i]);
  }
  return out;
}

export function build(more = {}) {
  const body = gutenbergBody(fetchText('pg4039_volpone.txt', 'https://www.gutenberg.org/cache/epub/4039/pg4039.txt')).map((l) => l.replace(/\s+$/, ''));
  for (const [from, to] of FIXES) {
    const hits = body.reduce((a, l, i) => (l === from ? [...a, i] : a), []);
    if (hits.length !== 1) throw new Error(`Volpone: fix: expected one line ${JSON.stringify(from)}, found ${hits.length}`);
    body[hits[0]] = to;
  }
  const only = (line) => {
    const hits = body.reduce((a, l, i) => (l === line ? [...a, i] : a), []);
    if (hits.length !== 1) throw new Error(`Volpone: expected one line ${JSON.stringify(line)}, found ${hits.length}`);
    return hits[0];
  };
  const iEpistle = only('TO THE MOST NOBLE AND MOST EQUAL SISTERS,');
  const iPersons = only('DRAMATIS PERSONAE');
  const iArgument = only('THE ARGUMENT.');
  const iPrologue = only('     PROLOGUE.');
  const iAct = only('ACT 1. SCENE 1.1.');
  const iGlossary = only('GLOSSARY');
  if (!(iEpistle < iPersons && iPersons < iArgument && iArgument < iPrologue && iPrologue < iAct && iAct < iGlossary)) throw new Error('Volpone: the file is not in the order expected');

  const report = newReport();
  report.dropped = { introduction: iEpistle, persons: iArgument - iPersons, glossary: body.length - iGlossary };
  const parts = [];
  const srcWords = [];

  // The Epistle: prose, with one line of Horace set in from the margin.
  // The inscription over it and the place and date under it are printed a
  // phrase to a line, each phrase but the last ending in a comma; each is
  // one sentence, and is given as one paragraph.
  {
    const blocks = [];
    let open = null;
    for (const p of paragraphs(body, iEpistle, iPersons)) {
      for (const l of p.lines) srcWords.push(...words(l));
      const text = squash(p.lines.join(' '));
      if (p.lines.every((l) => /^\s/.test(l))) {
        if (open) throw new Error('Volpone: a quotation inside the inscription');
        blocks.push({ k: 'q', text });
        continue;
      }
      if (open) open.text += ` ${text}`;
      else blocks.push((open = { k: 'p', text, sure: true, weight: 9 }));
      if (p.lines.length > 1 || !text.endsWith(',')) open = null;
    }
    const kinds = blocks.map((b) => b.k).join('');
    if (kinds !== 'ppqppp' || !blocks[0].text.endsWith('DEDICATES BOTH IT AND HIMSELF.') || !blocks[5].text.startsWith('From my House')) throw new Error(`Volpone: the Epistle is not as expected (${kinds})`);
    parts.push({ id: 'epistle', label: 'The Epistle', blocks });
  }

  // The Argument: an acrostic on VOLPONE, printed with each first letter
  // set off from its word by a space. The space is closed.
  {
    const lines = [];
    for (const p of paragraphs(body, iArgument + 1, iPrologue)) {
      for (const l of p.lines) {
        const m = l.match(/^([A-Z]) (\S.*)$/);
        if (!m) throw new Error(`Volpone: a line of the Argument is not as expected: ${l}`);
        lines.push(m[1] + m[2]);
      }
    }
    if (lines.map((l) => l[0]).join('') !== 'VOLPONE') throw new Error('Volpone: the Argument does not spell VOLPONE');
    for (const l of lines) srcWords.push(...words(l));
    parts.push({ id: 'argument', label: 'The Argument', blocks: [{ k: 'v', lines, sure: true, weight: 7 }] });
  }

  // The Prologue: verse, with no speaker named.
  {
    const ps = paragraphs(body, iPrologue + 1, iAct);
    if (ps.length !== 1) throw new Error(`Volpone: the Prologue has ${ps.length} paragraphs`);
    const lines = ps[0].lines.map((l) => squash(l));
    for (const l of lines) srcWords.push(...words(l));
    if (lines.length !== 36) throw new Error(`Volpone: expected 36 lines of Prologue, found ${lines.length}`);
    parts.push({ id: 'prologue', label: 'Prologue', blocks: [{ k: 'v', lines, sure: true, weight: 36 }] });
  }

  // The play.
  const speakers = new Set(SPEAKERS);
  const kept = new Set();
  const keep = (inside) => IN_TEXT.includes(inside) && !!kept.add(inside);
  let part = null;
  let act = 0;
  let scene = 0;
  for (const p of paragraphs(body, iAct, iGlossary)) {
    let m;
    if ((m = p.lines[0].match(/^(?:ACT (\d)\. | {5})SCENE (\d)\.(\d)\.?$/))) {
      if (p.lines.length > 1) throw new Error(`Volpone, line ${p.at}: text under a heading`);
      const a = Number(m[2]);
      const s = Number(m[3]);
      if (m[1] ? Number(m[1]) !== a || a !== act + 1 || s !== 1 : a !== act || s !== scene + 1) throw new Error(`Volpone: scene ${a}.${s} after scene ${act}.${scene}`);
      act = a;
      scene = s;
      part = { id: `a${act}s${scene}`, label: `Act ${act}, Scene ${scene}`, group: `Act ${act}`, blocks: [] };
      parts.push(part);
      continue;
    }
    const lines = p.lines.map((l) => {
      if (!/^ {5}\S/.test(l)) throw new Error(`Volpone, line ${p.at}: a line not set in five spaces: ${l}`);
      return l.slice(5);
    });
    for (const l of lines) srcWords.push(...words(l.replace(/[[\]]/g, ' ')));
    const whole = lines.join(' ');
    if (/^\[[^\]]*\]$/.test(whole)) {
      part.blocks.push({ k: 'd', text: squash(join(lines).slice(1, -1)) });
      continue;
    }
    m = lines[0].match(/^([A-Z0-9][A-Z0-9 ,]*?)(?: \[([^\]]*)\])?:(?: (.*))?$/);
    if (!m || !speakers.has(m[1])) {
      // capitals without brackets: the place, or who is on the stage as the scene opens
      if (/[a-z[\]]/.test(whole)) throw new Error(`Volpone, line ${p.at}: neither a speech nor a direction: ${lines[0]}`);
      part.blocks.push({ k: 'd', text: squash(join(lines)) });
      continue;
    }
    for (const l of lines.slice(1)) {
      const n = l.match(/^([A-Z0-9][A-Z0-9 ,]*?)(?: \[[^\]]*\])?:(?: |$)/);
      if (n && speakers.has(n[1])) throw new Error(`Volpone, line ${p.at}: a speaker inside a speech: ${l}`);
    }
    report.speakers[m[1]] = (report.speakers[m[1]] || 0) + 1;
    part.blocks.push({ k: 's', text: m[1] });
    if (m[2] !== undefined) part.blocks.push({ k: 'd', text: squash(m[2]) });
    const items = tokens([{ text: m[3] || '', raw: lines[0] }, ...lines.slice(1)], p.at, keep);
    italics(items, p.at);
    for (const it of items) {
      if (it.dir !== undefined) {
        if (!it.dir) throw new Error(`Volpone, line ${p.at}: empty direction`);
        part.blocks.push({ k: 'd', text: it.dir });
      } else part.blocks.push(...runBlocks(it.frags, report, p.at, READ));
    }
  }
  if (kept.size !== IN_TEXT.length) throw new Error('Volpone: the bracketed words expected in the text were not all found');

  report.words = sameWords(srcWords, parts);
  // The play is in verse but for Volpone's patter as a mountebank (2.1): a
  // speech of one line is verse unless the speaker's own speeches near it
  // are prose. Jonson's lines run long, so length decides nothing.
  finish(parts, report, { unspoken: ['epistle', 'argument', 'prologue'], brackets: true, long: Infinity, own: 'v', keep: more.keep });
  // (take out the next line to have the directions in capitals, as the source prints them)
  for (const p of parts) for (const b of p.blocks) if (b.k === 'd') b.text = ordinary(b.text);
  expectShape('Volpone', parts, SCENES, ['epistle', 'argument', 'prologue']);
  return { parts, report };
}

export function run() {
  const { parts } = build();
  return writeText('volpone', {
    author: 'Ben Jonson',
    title: 'Volpone',
    translator: null,
    year: 1606, // first performed (printed 1607)
    verse: false,
    source: { name: 'Project Gutenberg, no. 4039', url: 'https://www.gutenberg.org/ebooks/4039' },
  }, parts);
}
