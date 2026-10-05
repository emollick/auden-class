# Brief for setting a week's test and missing words

This is a course web app that rebuilds W. H. Auden's 1941 course at the
University of Michigan, "Fate and the Individual in European Literature".
A student reads the set books in the app, week by week. For each week you
are given, you write one file, `content/units/parts/NN.mjs` (NN = the
week, two digits), holding two things:

1. `test`: passages to place and questions of fact, on that week's reading.
   Auden's own examinations "ran mostly to spot quotations and specific
   factual questions". One of his papers survives: numbered passages under
   the single instruction to say who is speaking, to whom, when and where.
2. `words`: one passage from the week's reading with words taken out, which
   the student fills in BEFORE reading the book. Auden gave classes poems
   they did not know with words removed. Some gaps tested the ear for rhyme
   and metre; others were adjectives, adverbs or verbs, and tested the
   student's feeling for the passage.

Look at `content/units/01.mjs` (week 1, finished) for the exact format of
`words` and `test`, and write the same shapes.

## The file

    // Week NN: tests and missing words.
    export default {
      words: { id: 'wNN', cut: [...], blank: [...], setting: '...', cite: '...' },
      test: { items: [ ... ] },
    };

## Passages are cut, never typed

The books are in `site/data/texts/<textId>/`. A passage is named by text,
part and block numbers, and the build cuts it out. You never type out the
passage itself.

    cut: [textId, partId, firstBlock, lastBlock]
    cut: [textId, partId, firstBlock, lastBlock, { lines: [a, b] }]          verse: keep lines a to b
    cut: [textId, partId, firstBlock, lastBlock, { from: 'first words', to: 'last words' }]   prose: trim

- Only `v` (verse), `p` (prose) and `q` blocks inside the range are taken;
  speaker names (`s`) and stage directions (`d`) are dropped, which is what
  you want: the student must say who speaks.
- `lines: [a, b]` counts the lines of verse from 0 across the whole range,
  both ends included.
- `from` and `to` are a few words copied exactly from the text, enough to
  be unique; the passage runs from the start of `from` to the end of `to`.
  Begin and end at sentence boundaries.

Find passages with

    node build/tools/show.mjs <textId>                    the parts
    node build/tools/show.mjs <textId> <partId> 40 60     blocks 40 to 60, numbered
    node build/tools/show.mjs <textId> --grep 'regex'     search every part

## The test: 7 passages and 7 questions of fact (6 to 8 of each)

A passage item:

    { id: 'tNN-1', kind: 'spot', work: '<work id>', cut: [...], ask: 'Who speaks?', speaker: ['Accepted answer', 'another form of it'] }

- `work` is the id in `content/works.mjs` (dante, augustine, othello ...).
- `ask` is the question under the passage. Use one of: `Who speaks?`
  `Who is he?` `Who is she?` `To whom is this said?` `Where are we?`
  `What is being described?` or another short plain question whose answer
  is a name or a word or two. Only one answer is collected.
- `speaker` is the list of accepted answers: every form a student who
  knows the answer might write (first name, surname, title, a common
  alternative spelling). The first is shown as the right answer unless you
  give `speakerShown`. Matching ignores case, accents, punctuation and the
  words the, a, an, of, st, saint; an accepted answer also matches inside a
  slightly longer reply.
- The passage must NOT contain the answer, and must not name the speaker.
- Choose passages a careful reader would place and a skimmer would not:
  turning points, a character's most characteristic speech, a famous
  crux. Not the first lines of the book. Not passages that could be placed
  by a proper name in them.
- Length: 2 to 12 lines of verse, or up to 130 words of prose. Trim.
- Spread the passages over the week's books roughly in proportion to their
  length, and over the whole of each book, not its first act.
- When the week's passages come from more than one book, the app also
  asks which book each is from. You need do nothing for this.

A question of fact:

    { id: 'tNN-2', kind: 'fact', q: 'Who ferries the dead across Acheron?', a: ['Charon'], where: 'Inferno III' }

- One plain sentence. The answer is a name, a number or a word or two,
  and there is only one right answer. `a` lists every acceptable form;
  `shown` (optional) is what to print as the answer.
- It must be answerable by anyone who read the book attentively and by
  nobody who did not: what happens, who does it, what object, what place.
  Nothing about the author's life, the date of the work or its criticism.
  Nothing that depends on a translator's choice of word.
- The question must not contain its answer.
- `where` says where in the book the answer is, as the app labels parts
  (`Book VIII`, `Act 3, Scene 3`, `Chapter 36`).
- Check every fact against the hosted text with `show.mjs --grep` before
  you write it down. Do not rely on memory of the book: translations and
  editions differ.

Alternate passages and facts (spot, fact, spot, fact ...). Number ids in
order: tNN-1, tNN-2 ...

Two books in week 2 are alternatives (the student reads Agamemnon or
Antigone). Items on such a book carry `ifChoice: ['greek', 'agamemnon']`
or `ifChoice: ['greek', 'antigone']`; the brief for that week says how
many of each.

## Missing words

    words: {
      id: 'wNN',
      cut: [textId, partId, firstBlock, lastBlock, {...}],
      blank: [[row, 'word'], [row, 'word', 2], ...],
      setting: 'One or two plain sentences: who speaks, when, to whom.',
      cite: 'Author, *Title*, where, in So-and-so\'s translation of 1867.',
    }

- Choose a passage of 14 to 40 lines of verse, or 150 to 280 words of
  prose, where the choice of word matters: strong verbs, exact adjectives,
  rhymes. It should make sense read alone.
- `blank` lists 8 to 10 words to take out. `row` counts the lines of the
  passage (or its paragraphs, for prose) from 0, skipping blank lines
  between stanzas. If the word occurs more than once in that row, add
  which occurrence (1, 2 ...) as a third value.
- Take out words that carry the sense or the rhyme: nouns, verbs,
  adjectives. Never a, the, and, of, pronouns, or names. One or two gaps
  at rhyme positions where the passage rhymes. No two gaps in the same
  line unless the line is long. Each gap must be a single word.
- `setting` must not use or hint at any of the missing words, and must
  not be a judgment of the passage.
- `cite`: author, title in *asterisks* for italics, the place, and the
  translator and year for a translation (take them from the text's
  index.json).

## Check your file

    node build/tools/check-part.mjs content/units/parts/NN.mjs

It cuts and prints every passage, and lists problems. Read the printout:
every passage must begin and end cleanly, say what you meant it to, and
be answerable as asked. Fix until it says `no problems`.

## The words you write

You write only short strings: `ask`, `q`, `setting`, `cite`, and the
accepted answers. Plain American English. Short sentences. No dashes used
as punctuation, no exclamation marks, no rhetorical flourishes, no words
like "famous", "powerful", "iconic". Titles of books in *asterisks*.
Curly apostrophes are not needed; write straight ones and escape them in
the JavaScript string.

## Rules

- Write only your own files `content/units/parts/NN.mjs`. Do not edit
  anything else. Do not run `build/build.mjs`.
- Do not call any tool whose name starts with `mcp__hearthbot__`.
- Do not paste passages of the books into your final message.
- Final reply, at most 120 words: for each week, the counts, and any item
  you are not sure of and why.
