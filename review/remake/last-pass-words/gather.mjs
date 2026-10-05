// Gathers the site's own lines for the critic by word: the name and the one
// line of every Figure tab, and the measure line of every Beat tab with the
// kind of key the kit prints under it. It prints no row of any work: only
// `label`, `name`, `plain`, `meterName` and the labels of a figure's parts,
// all of which the site's writers wrote. Run from the project's root:
//
//   node review/remake/last-pass-words/gather.mjs figures   (by figure)
//   node review/remake/last-pass-words/gather.mjs measures  (by wording)
//   node review/remake/last-pass-words/gather.mjs pieces    (by piece)
//   node review/remake/last-pass-words/gather.mjs parts <piece>  (labels of a figure's parts)

import fs from 'node:fs';

const mode = process.argv[2] || 'figures';
const only = process.argv[3] || null;
const pieces = JSON.parse(fs.readFileSync('remake/pieces.json', 'utf8'));
const figures = [];
const beats = [];
for (const pc of pieces) {
  const file = `remake/works/${pc.id}/reading.json`;
  if (!fs.existsSync(file)) { console.log(`no reading: ${pc.id}`); continue; }
  const r = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const pl of r.plates) {
    pl.lenses.forEach((l, i) => {
      const at = `${pc.id} / ${pl.id} / ${i} ${l.label}`;
      if (l.kind === 'figure') {
        const labels = [];
        for (const p of l.parts || []) if (p && typeof p === 'object' && typeof p.label === 'string') labels.push(p.label);
        figures.push({ piece: pc.id, plate: pl.id, n: i, label: l.label, name: l.name, plain: l.plain, draw: l.draw, join: l.join === undefined ? '' : JSON.stringify(l.join), labels, at });
      }
      if (l.kind === 'beat') {
        // which key the kit prints: read from the marks of the measure only
        let marks = '';
        for (const s of Object.values(l.scan || {})) marks += String((s && s.meter) || l.meter || '');
        const quant = /[-u]/.test(marks);
        const byCount = !quant && marks.includes('.');
        const key = quant ? 'long and short syllables' : byCount ? 'the count: one stroke a syllable, a long one where the measure has an accent' : marks.replace(/[\s|]/g, '') ? 'the measure: a long stroke is a beat, a short one an off-beat' : '(no rule drawn)';
        beats.push({ piece: pc.id, plate: pl.id, n: i, label: l.label, meterName: l.meterName, key, rows: Object.keys(l.scan || {}).length, at });
      }
    });
  }
}

if (mode === 'figures') {
  const by = new Map();
  for (const f of figures) { const k = String(f.name || '').toLowerCase(); if (!by.has(k)) by.set(k, []); by.get(k).push(f); }
  const names = [...by.keys()].sort((a, b) => by.get(b).length - by.get(a).length || a.localeCompare(b));
  console.log(`${figures.length} Figure tabs, ${names.length} names`);
  for (const k of names) {
    console.log(`\n== ${k} (${by.get(k).length})`);
    for (const f of by.get(k)) console.log(`  [${f.at}] (${f.draw}${f.join ? ', join ' + f.join : ''})\n      name: ${f.name}\n      plain: ${f.plain}`);
  }
} else if (mode === 'measures') {
  console.log(`${beats.length} tabs of kind beat`);
  const by = new Map();
  for (const b of beats) { const k = b.key; if (!by.has(k)) by.set(k, []); by.get(k).push(b); }
  for (const [k, list] of by) {
    console.log(`\n== key: ${k} (${list.length})`);
    list.sort((a, b) => String(a.meterName).localeCompare(String(b.meterName)));
    for (const b of list) console.log(`  [${b.at}] rows ${b.rows}\n      ${b.meterName}`);
  }
} else if (mode === 'pieces') {
  for (const pc of pieces) {
    const fs_ = figures.filter((f) => f.piece === pc.id); const bs = beats.filter((b) => b.piece === pc.id);
    console.log(`\n${pc.id}: ${fs_.length} figure, ${bs.length} beat`);
    for (const f of fs_) console.log(`  F ${f.plate} ${f.n} ${f.label}: ${f.name}`);
    for (const b of bs) console.log(`  B ${b.plate} ${b.n} ${b.label}`);
  }
} else if (mode === 'parts') {
  for (const f of figures.filter((x) => !only || x.piece === only)) console.log(`[${f.at}] ${f.name}\n    plain: ${f.plain}\n    key labels: ${f.labels.join(' · ') || '(none)'}`);
}

// before: the line of each Figure tab as it stood before the one wording, beside the line now
if (mode === 'before') {
  let changed = 0;
  for (const pc of pieces) {
    const old = `remake/works/${pc.id}/lead/before-figure-wordings.json`;
    if (!fs.existsSync(old)) continue;
    const r0 = JSON.parse(fs.readFileSync(old, 'utf8'));
    for (const pl of r0.plates) pl.lenses.forEach((l, i) => {
      if (l.kind !== 'figure') return;
      const now = figures.find((f) => f.piece === pc.id && f.plate === pl.id && f.n === i);
      if (!now) { console.log(`[${pc.id} / ${pl.id} / ${i}] not found now`); return; }
      if (now.plain !== l.plain || now.name !== l.name) { changed++; console.log(`[${now.at}] ${now.name}\n    was: ${l.plain}\n    now: ${now.plain}`); }
    });
  }
  console.log(`\n${changed} lines differ from the copy kept before the one wording`);
}

// measure-before: the measure line of each Beat tab as it stood before the one wording, beside the line now
if (mode === 'measure-before') {
  let changed = 0; let had = 0;
  for (const pc of pieces) {
    const old = `remake/works/${pc.id}/lead/before-measure.json`;
    if (!fs.existsSync(old)) continue;
    had++;
    const r0 = JSON.parse(fs.readFileSync(old, 'utf8'));
    for (const pl of r0.plates) pl.lenses.forEach((l, i) => {
      if (l.kind !== 'beat') return;
      const now = beats.find((b) => b.piece === pc.id && b.plate === pl.id && b.n === i);
      if (!now) { console.log(`[${pc.id} / ${pl.id} / ${i}] not found now`); return; }
      const lab = now.label !== l.label ? `   (the tab was named ${l.label})` : '';
      if (now.meterName !== l.meterName || lab) { changed++; console.log(`[${now.at}]${lab}\n    was: ${l.meterName}\n    now: ${now.meterName}`); }
      else console.log(`[${now.at}]\n    as it was: ${now.meterName}`);
    });
  }
  console.log(`\n${had} pieces keep a copy from before the measure pass; ${changed} measure lines or tab names differ`);
}

// marks: for one Beat tab, the marks of the measure and of the voice, row id by row id.
// The marks are the site's own; no word of the row is printed.
if (mode === 'marks') {
  const [, , , pid, plid, n] = process.argv;
  const r = JSON.parse(fs.readFileSync(`remake/works/${pid}/reading.json`, 'utf8'));
  const pl = r.plates.find((p) => p.id === plid);
  const l = pl.lenses[Number(n)];
  console.log(`${pid} / ${plid} / ${n} ${l.label}: ${l.meterName}`);
  console.log(`keys of the lens: ${Object.keys(l).join(', ')}`);
  for (const [row, s] of Object.entries(l.scan || {})) console.log(`  ${row}  measure ${JSON.stringify(s.meter ?? l.meter ?? '')}  voice ${JSON.stringify(s.voice ?? '')}`);
}

// dup: which clauses of a Figure tab's line or of a Beat tab's measure line stand
// word for word in the same tab's caption. Only the site's line is printed.
if (mode === 'dup') {
  const norm = (s) => String(s || '').toLowerCase().replace(/[*_]/g, '').replace(/[’']/g, "'").replace(/\s+/g, ' ');
  let n = 0; let all = 0;
  for (const pc of pieces) {
    const r = JSON.parse(fs.readFileSync(`remake/works/${pc.id}/reading.json`, 'utf8'));
    for (const pl of r.plates) pl.lenses.forEach((l, i) => {
      if (l.kind !== 'figure' && l.kind !== 'beat') return;
      const line = l.kind === 'figure' ? l.plain : l.meterName;
      if (!line) return;
      all++;
      const cap = norm(typeof l.caption === 'string' ? l.caption : JSON.stringify(l.caption || ''));
      const clauses = norm(line).split(/[;:]/).map((c) => c.trim()).filter((c) => c.split(' ').length >= 4);
      const hit = clauses.filter((c) => cap.includes(c));
      const whole = cap.includes(norm(line));
      if (hit.length) { n++; console.log(`[${pc.id} / ${pl.id} / ${i} ${l.label}] ${l.kind}${whole ? '  WHOLE LINE in caption' : ''}\n    in caption word for word: ${hit.map((h) => '"' + h + '"').join('  +  ')}`); }
    });
  }
  console.log(`\n${n} of ${all} tabs say a clause of their line again, word for word, in the caption`);
}

// retired: the words the measure pass retired, wherever a caption or a note still has them.
// Only the place, the field and the word found are printed.
if (mode === 'retired') {
  const terms = ['light syllable', 'weak ', 'the pattern', 'the meter', 'metre', 'scanned', 'scansion', 'iamb', 'troch', 'pentameter', 'tetrameter', 'hexameter', 'caesura', 'cesura', 'elision', 'elided', 'unaccented', 'strong syllable', 'heavy syllable', 'lift', 'upbeat', 'downbeat', 'feminine', 'masculine'];
  let n = 0;
  for (const pc of pieces) {
    const r = JSON.parse(fs.readFileSync(`remake/works/${pc.id}/reading.json`, 'utf8'));
    for (const pl of r.plates) pl.lenses.forEach((l, i) => {
      const fields = { caption: typeof l.caption === 'string' ? l.caption : JSON.stringify(l.caption || ''), points: JSON.stringify(l.points || ''), line: String(l.meterName || l.plain || '') };
      for (const [f, text] of Object.entries(fields)) for (const t of terms) {
        const low = text.toLowerCase(); let at = low.indexOf(t); let c = 0;
        while (at >= 0) { c++; at = low.indexOf(t, at + 1); }
        if (c) { n += c; console.log(`[${pc.id} / ${pl.id} / ${i} ${l.label}] (${l.kind}) ${f}: "${t.trim()}" x${c}`); }
      }
    });
  }
  console.log(`\n${n} places`);
}

// heads: the site's own labels over a plate's columns (who made each version), and the names of its tabs.
// No row is printed: only the plate's fields that are short strings, and those of its columns.
if (mode === 'heads') {
  const pid = process.argv[3];
  const r = JSON.parse(fs.readFileSync(`remake/works/${pid}/reading.json`, 'utf8'));
  for (const pl of r.plates) {
    const own = Object.entries(pl).filter(([k, v]) => typeof v === 'string' && k !== 'text' && v.length < 140).map(([k, v]) => `${k}=${JSON.stringify(v)}`);
    console.log(`${pid} / ${pl.id}: ${own.join('  ')}`);
    for (const k of ['columns', 'cols', 'versions', 'sides', 'heads', 'labels']) if (pl[k]) console.log(`    ${k}: ${JSON.stringify(pl[k]).slice(0, 400)}`);
    console.log(`    tabs: ${pl.lenses.map((l, i) => `${i} ${l.label} (${l.kind})`).join(', ')}`);
    console.log(`    other keys: ${Object.keys(pl).filter((k) => typeof pl[k] !== 'string').join(', ')}`);
  }
}
