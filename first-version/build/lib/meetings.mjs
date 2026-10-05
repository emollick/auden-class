// The meetings of a week. A meeting is a run of spreads; a spread is a
// passage (or a picture, or a record) with the steps that are taken on it.
// Each step asks the student for a move and then answers it.

const KINDS = new Set(['gaps', 'choose', 'mark', 'sort', 'order', 'match', 'write', 'turn', 'read', 'verdict', 'two', 'spot', 'make', 'next']);

export function meetingsOf(u, out, { cut, cloze, quoted, fail, works, plates, records }) {
  const list = u.meetings || [];
  const ids = new Set();
  const stepIds = new Set();
  const questions = new Map((out.questions || []).map((q) => [q.id, q]));
  const making = new Map((out.making || []).map((m) => [m.id, m]));
  const testItems = new Map((out.test ? out.test.items : []).map((x) => [x.id, x]));

  const passage = (spec, what) => {
    if (spec.gaps) {
      // The week's own passage with words taken out, or one set for this spread alone.
      if (spec.gaps === true) {
        if (!out.words) fail(`${what}: the week has no passage with missing words`);
        return { gaps: out.words ? out.words.id : null };
      }
      const c = cloze(spec.gaps, what);
      return { gaps: c.id, cloze: c };
    }
    const c = cut(spec.cut, what);
    const p = c.lines ? { lines: c.lines } : { paras: c.paras };
    p.where = c.where;
    p.text = c.text;
    p.part = c.part;
    for (const k of ['cite', 'first', 'lang', 'label', 'numbers', 'head']) if (spec[k] !== undefined) p[k] = spec[k];
    return p;
  };

  const rowsOf = (p) => {
    if (!p) return 0;
    if (p.lines) return p.lines.filter((l) => l !== '').length;
    if (p.paras) return p.paras.length;
    const c = p.cloze || out.words;
    return c ? c.lines.filter((l) => l.length).length : 0;
  };

  const step = (s, sp, what) => {
    const w = `${what} step ${s.id || '?'}`;
    if (!s.id || !/^[a-z][a-z0-9-]*$/.test(s.id)) fail(`${w}: a step needs an id in small letters`);
    if (!KINDS.has(s.kind)) { fail(`${w}: unknown kind ${s.kind}`); return s; }
    const o = { ...s };
    const need = (k) => { if (o[k] === undefined || o[k] === null || (Array.isArray(o[k]) && !o[k].length)) fail(`${w}: needs ${k}`); };
    // Lines of the book given back in the answer to a move.
    if (s.poem) {
      if (!['choose', 'write'].includes(s.kind)) fail(`${w}: only a question can give lines of the book back`);
      try {
        const pm = passage(s.poem, `${w} poem`);
        if (s.poem.say) pm.say = s.poem.say;
        o.poem = pm;
      } catch (err) { fail(`${w} poem: ${err.message}`); }
    }
    if (s.kind === 'gaps') {
      if (!sp.passage || !sp.passage.gaps) fail(`${w}: the spread has no passage with gaps`);
      const c = sp.passage && (sp.passage.cloze || out.words);
      if (c && s.notes) {
        for (const k of Object.keys(s.notes)) if (!(Number(k) >= 0 && Number(k) < c.blanks.length)) fail(`${w}: a note for gap ${k}, and the passage has ${c.blanks.length}`);
        if (Object.keys(s.notes).length !== c.blanks.length) fail(`${w}: ${Object.keys(s.notes).length} notes for ${c.blanks.length} gaps`);
      }
      // heard: what is said to a student who wrote one of the words the note was ready for
      const norm = (x) => String(x).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
      for (const [k, list] of Object.entries(s.heard || {})) {
        if (!c || !(Number(k) >= 0 && Number(k) < c.blanks.length)) { fail(`${w}: heard for gap ${k}, which the passage has not`); continue; }
        if (!Array.isArray(list)) { fail(`${w}: heard for gap ${k} is a list of [words, reply]`); continue; }
        const seen = new Set();
        for (const pair of list) {
          if (!Array.isArray(pair) || pair.length !== 2 || typeof pair[0] !== 'string' || typeof pair[1] !== 'string' || !pair[1].trim()) { fail(`${w}: heard for gap ${k} is a list of [words, reply]`); continue; }
          for (const word of pair[0].split('|')) {
            if (!norm(word)) fail(`${w}: heard for gap ${k} has an empty word`);
            if (norm(word) === norm(c.blanks[k])) fail(`${w}: heard for gap ${k} lists the writer's own word, ${word}`);
            if (seen.has(norm(word))) fail(`${w}: heard for gap ${k} lists ${word} twice`);
            seen.add(norm(word));
          }
        }
      }
    }
    if (s.kind === 'choose') {
      need('ask'); need('options');
      const seen = new Set();
      for (const op of s.options || []) {
        if (!op.id || seen.has(op.id) || !op.label || !op.reply) fail(`${w}: each option needs a fresh id, a label and a reply`);
        if (op.line !== undefined && (typeof op.line !== 'string' || !op.line.trim())) fail(`${w}: option ${op.id} has an empty line to add`);
        seen.add(op.id);
      }
    }
    if (s.kind === 'order') {
      need('ask'); need('items'); need('scale');
      const scale = new Set((s.scale || []).map((x) => x.id));
      if (scale.size !== (s.scale || []).length) fail(`${w}: a place of the scale is named twice`);
      for (const lv of s.scale || []) if (!lv.id || !lv.label) fail(`${w}: each place of the scale needs an id and a label`);
      const seen = new Set();
      const at = new Set();
      for (const it of s.items || []) {
        if (!it.id || seen.has(it.id) || !it.label) fail(`${w}: each name needs a fresh id and a label`);
        seen.add(it.id);
        if (!scale.has(it.at)) fail(`${w}: ${it.id} is put at an unknown place ${it.at}`);
        if (at.has(it.at)) fail(`${w}: two names share the place ${it.at}, so the order is not settled`);
        at.add(it.at);
      }
      if (s.ends && (!Array.isArray(s.ends) || s.ends.length !== 2)) fail(`${w}: ends names the two ends of the order`);
    }
    if (s.kind === 'mark') {
      need('ask'); need('key'); need('hit'); need('miss');
      const n = rowsOf(sp.passage);
      for (const r of s.key || []) if (!(r >= 0 && r < n)) fail(`${w}: key row ${r} is not in the passage (${n} rows)`);
      for (const r of s.near || []) if (!(r >= 0 && r < n)) fail(`${w}: near row ${r} is not in the passage (${n} rows)`);
      if (!sp.passage) fail(`${w}: nothing to mark on`);
    }
    if (s.kind === 'sort') {
      need('ask'); need('bins'); need('items');
      const bins = new Set((s.bins || []).map((b) => b.id));
      const seen = new Set();
      for (const it of s.items || []) {
        if (!it.id || seen.has(it.id) || !it.label) fail(`${w}: each card needs a fresh id and a label`);
        seen.add(it.id);
        for (const b of [].concat(it.bin || [])) if (!bins.has(b)) fail(`${w}: card ${it.id} is put in an unknown column ${b}`);
        if (it.bin === undefined) fail(`${w}: card ${it.id} has no place on the board`);
      }
    }
    if (s.kind === 'match') {
      need('ask'); need('rows'); need('pool');
      const pool = new Set((s.pool || []).map((x) => x.id));
      for (const r of s.rows || []) if (!r.id || !r.label || !pool.has(r.answer)) fail(`${w}: row ${r.id} needs a label and an answer from the pool`);
    }
    if (s.kind === 'write') {
      if (s.q) {
        const q = questions.get(s.q);
        if (!q) fail(`${w}: no question ${s.q} in this week`);
      } else { need('ask'); if (!s.turn || !s.turn.paras) fail(`${w}: needs a turn to show afterwards`); }
    }
    if (s.kind === 'turn' && s.opera) {
      // What Auden wrote about the week's opera is written once, in the
      // reading; a meeting that gives it takes it from there.
      const r = (out.reading || []).find((x) => x.work === s.opera);
      if (!r || !r.auden) fail(`${w}: the week's reading has nothing by Auden on ${s.opera}`);
      else {
        for (const k of ['title', 'paras', 'sources']) if (o[k] === undefined && r.auden[k] !== undefined) o[k] = r.auden[k];
        delete r.auden;
      }
      delete o.opera;
    }
    if (s.kind === 'turn') {
      need('paras');
      const n = rowsOf(sp.passage);
      for (const r of s.rows || []) if (!(r >= 0 && r < n)) fail(`${w}: row ${r} is not in the passage (${n} rows)`);
    }
    if (s.kind === 'read') { need('paras'); if (s.record && records && !records.has(s.record)) fail(`${w}: no record ${s.record}`); }
    if (s.kind === 'verdict') {
      if (!works.has(s.work)) fail(`${w}: unknown work ${s.work}`);
      if (s.replies && s.replies.length !== 5) fail(`${w}: there are five verdicts, and ${s.replies.length} replies`);
    }
    if (s.kind === 'two') { if (!works.has(s.work)) fail(`${w}: unknown work ${s.work}`); need('key'); }
    if (s.kind === 'spot') { for (const id of s.items || []) if (!testItems.has(id)) fail(`${w}: no test item ${id}`); need('items'); }
    if (s.kind === 'make') { if (!making.has(s.ex)) fail(`${w}: no exercise ${s.ex} in this week`); }
    if (s.kind === 'next') {
      need('paras');
      for (const op of s.open || []) if (!op.label || !/^#\//.test(op.href || '')) fail(`${w}: each way into the book needs a label and an address`);
      if (s.short && !s.short.from) fail(`${w}: short names the part of the book it leads into, as from`);
    }
    return o;
  };

  return list.map((m, mi) => {
    const what = `week ${u.n} meeting ${mi + 1}`;
    if (!m.id || ids.has(m.id)) fail(`${what}: missing or repeated id`);
    ids.add(m.id);
    if (!m.title || !m.blurb) fail(`${what}: needs a title and a blurb`);
    const o = { id: m.id, title: m.title, blurb: m.blurb };
    if (m.kicker) o.kicker = m.kicker;
    // after: true, or the name of what has been read by then ("the *Inferno*").
    if (m.after) o.after = m.after === true ? true : String(m.after);
    // at: the part of the book that ends where this meeting begins ("dante/inf-34").
    // The reading page for that part leads on to the meeting.
    if (m.at) {
      if (!/^[\w-]+\/[\w-]+$/.test(m.at)) fail(`${what}: at names a part of a book, as work/part`);
      o.at = m.at;
    }
    if (m.minutes) o.minutes = m.minutes;
    o.spreads = (m.spreads || []).map((sp, si) => {
      const w = `${what} spread ${si + 1}`;
      const so = {};
      try {
        if (sp.passage) so.passage = passage(sp.passage, w);
        if (sp.beside) so.beside = sp.beside.map((x, i) => passage(x, `${w} beside ${i + 1}`));
      } catch (err) { fail(`${w}: ${err.message}`); }
      if (sp.plate) { if (plates && !plates.has(sp.plate)) fail(`${w}: no plate ${sp.plate}`); so.plate = sp.plate; }
      if (sp.record) { if (records && !records.has(sp.record)) fail(`${w}: no record ${sp.record}`); so.record = sp.record; }
      if (sp.head) so.head = sp.head;
      so.steps = (sp.steps || []).map((s) => {
        if (stepIds.has(`${m.id}/${s.id}`)) fail(`${w}: step id ${s.id} is used twice in the meeting`);
        stepIds.add(`${m.id}/${s.id}`);
        return step(s, so, w);
      });
      if (!so.steps.length) fail(`${w}: no steps`);
      return so;
    });
    if (!o.spreads.length) fail(`${what}: no spreads`);
    return o;
  });
}
