// Cutting a play out of one of Project Gutenberg's current Shakespeare
// files (nos. 1500-1540 as re-edited: speaker's name in capitals on its
// own line, a blank line between speeches, prose wrapped at 71 columns,
// verse line for line, stage directions either as paragraphs of their
// own or in [_square brackets_]).
//
// Not a book script: the book scripts in the folder above call cutPlay().
//
// A paragraph that opens with a speaker's name is a speech. A paragraph
// that is nothing but a bracket, or opens with Enter / Re-enter, or is on
// the play's own list of directions, is a stage direction. Any other
// paragraph carries on the speech before it. What happens inside a speech
// is in speech.mjs.

import { strip, join, words, tokens, italics, runBlocks, newReport, sameWords, finish, romanNumber } from './speech.mjs';

export { expectShape } from './speech.mjs';

const READ = { wrap: 71, capital: 'prose' };

// cfg: {
//   body:        lines of the Gutenberg file between its markers
//   speakers:    every speaker's name as the source prints it, without the full stop
//   directions:  regexes for unbracketed directions that do not begin Enter / Re-enter
//   noises:      regexes for paragraphs of cries from off the stage that the source
//                gives to no speaker; each is kept whole as a stage direction
//   fixes:       [[line as it is, line as it should be read]] (each must be found once)
//   induction, epilogue: true if the play has one
//   unspoken:    part ids in which text may come before any speaker (an epilogue with no name over it)
//   keep:        true to leave in each block what the cutting knew about it (for looking into the cutting)
// }
export function cutPlay(cfg) {
  const report = newReport();
  const body = cfg.body.map((l) => l.replace(/\s+$/, ''));
  for (const [from, to] of cfg.fixes || []) {
    const hits = body.reduce((a, l, i) => (l === from ? [...a, i] : a), []);
    if (hits.length !== 1) throw new Error(`fix: expected one line ${JSON.stringify(from)}, found ${hits.length}`);
    body[hits[0]] = to;
  }
  const dp = body.findIndex((l) => /^\s*Dramatis Person/.test(l));
  if (dp < 0) throw new Error('no Dramatis Personæ');
  const first = cfg.induction ? /^INDUCTION$/ : /^ACT I$/;
  const start = body.findIndex((l, i) => i > dp && first.test(l));
  if (start < 0) throw new Error('the play does not begin where expected');
  report.dropped = body.slice(0, start).filter((l) => l.trim());

  const speakers = new Set(cfg.speakers);
  const speakerOf = (l) => {
    const name = l.replace(/\.$/, '');
    return speakers.has(name) ? name : null;
  };
  const dirRes = [/^(Enter|Re-enter)\b/, ...(cfg.directions || [])];
  const noiseRes = cfg.noises || [];
  const noiseHits = noiseRes.map(() => 0);

  // paragraphs
  const paras = [];
  let cur = null;
  for (let i = start; i < body.length; i++) {
    if (body[i] === '') {
      cur = null;
      continue;
    }
    if (!cur) {
      cur = { at: i, lines: [] };
      paras.push(cur);
    }
    cur.lines.push(body[i]);
  }

  const parts = [];
  let part = null;
  let act = 0;
  let scene = 0;
  let speaking = false; // a speaker has been named in this part
  let lastWasDir = false;
  const srcWords = [];
  const open = (id, label, group) => {
    part = { id, label, group, blocks: [] };
    parts.push(part);
    speaking = false;
    lastWasDir = true;
  };
  const speech = (lines, at) => {
    const items = tokens(lines, at);
    italics(items, at);
    for (const it of items) {
      if (it.dir !== undefined) {
        if (!it.dir) throw new Error(`line ${at}: empty direction`);
        part.blocks.push({ k: 'd', text: it.dir });
      } else part.blocks.push(...runBlocks(it.frags, report, at, READ));
    }
  };

  for (const p of paras) {
    const l0 = p.lines[0];
    const t0 = l0.trim();
    let m;
    if ((m = t0.match(/^ACT ([IVX]+)\.?$/))) {
      if (p.lines.length > 1) throw new Error(`line ${p.at}: text under an act heading`);
      const n = romanNumber(m[1]);
      if (n !== act + 1) throw new Error(`act ${m[1]} after act ${act}`);
      act = n;
      scene = 0;
      part = null;
      continue;
    }
    if ((m = t0.match(/^SCENE ([IVX]+)\.\s*(.*)$/))) {
      const n = romanNumber(m[1]);
      if (!act || n !== scene + 1) throw new Error(`line ${p.at}: scene ${m[1]} after scene ${scene} of act ${act}`);
      scene = n;
      open(`a${act}s${scene}`, `Act ${act}, Scene ${scene}`, `Act ${act}`);
      const place = strip([m[2], ...p.lines.slice(1)].join(' '));
      if (place) part.blocks.push({ k: 'd', text: place });
      srcWords.push(...words(place));
      continue;
    }
    if (cfg.induction && /^INDUCTION\.?$/.test(t0) && p.lines.length === 1 && !parts.length) {
      open('induction', 'Induction', undefined);
      continue;
    }
    if (cfg.epilogue && /^EPILOGUE\.?$/.test(t0) && p.lines.length === 1 && act) {
      open('epilogue', 'Epilogue', undefined);
      act = 0;
      continue;
    }
    if (!part) throw new Error(`line ${p.at}: text outside any scene: ${l0}`);
    for (const l of p.lines) srcWords.push(...words(l.replace(/_/g, '').replace(/[[\]]/g, ' ')));

    const name = speakerOf(l0);
    const joined = p.lines.join('\n');
    if (name) {
      report.speakers[name] = (report.speakers[name] || 0) + 1;
      part.blocks.push({ k: 's', text: name });
      speaking = true;
      lastWasDir = false;
      if (p.lines.length > 1) speech(p.lines.slice(1), p.at + 1);
      continue;
    }
    if (/^[A-Z][A-Z ’'&,.-]{2,}$/.test(l0)) throw new Error(`line ${p.at}: a name in capitals that is not on the list of speakers: ${l0}`);
    for (const l of p.lines.slice(1)) if (speakerOf(l) && /\.$/.test(l)) throw new Error(`line ${p.at}: a speaker's name inside a paragraph: ${l}`);
    if (/^\s*\[[^\]]*\]$/.test(joined)) {
      part.blocks.push({ k: 'd', text: strip(joined.replace(/^\s*\[/, '').replace(/\]$/, '')) });
      lastWasDir = true;
      continue;
    }
    const noise = noiseRes.findIndex((re) => re.test(t0));
    if (noise >= 0) {
      noiseHits[noise]++;
      report.noises++;
      part.blocks.push({ k: 'd', text: strip(join(p.lines.map((l) => l.replace(/[[\]]/g, '').trim()))) });
      lastWasDir = true;
      continue;
    }
    if (dirRes.some((re) => re.test(t0))) {
      if (/[[\]]/.test(joined)) throw new Error(`line ${p.at}: a bracket inside a direction: ${l0}`);
      part.blocks.push({ k: 'd', text: strip(joined) });
      lastWasDir = true;
      continue;
    }
    // the speech goes on
    if (!speaking && !(cfg.unspoken || []).includes(part.id)) throw new Error(`line ${p.at}: speech before any speaker in ${part.id}: ${l0}`);
    report.carried.push({ at: p.at, part: part.id, afterDir: lastWasDir, indent: /^\s{2,}/.test(l0), text: t0.slice(0, 40) });
    lastWasDir = false;
    speech(p.lines, p.at);
  }
  noiseHits.forEach((n, i) => {
    if (n !== 1) throw new Error(`noise ${noiseRes[i]}: expected one paragraph, found ${n}`);
  });

  report.words = sameWords(srcWords, parts);
  finish(parts, report, { unspoken: cfg.unspoken, keep: cfg.keep });
  return { parts, report };
}
