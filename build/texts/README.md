# Bringing a book into the course

Each book the site prints is cut from a public-domain source file by a
script in this folder. The words go from the source file into
`site/data/texts/<textId>/` and nowhere else: nobody retypes them.

## One script per book

`build/texts/<textId>.mjs` exports `run()`. It uses `build/lib/gutenberg.mjs`:

- `fetchText(name, url)` reads `.cache/texts/<name>`, downloading it from
  `url` first if it is not there. Returns the text with `\n` line ends.
- `gutenbergBody(text)` returns the lines between the Gutenberg START and
  END markers.
- `clean(s)` drops `_italic_` marks, `[1]` note marks, runs of spaces.
- `stanzas(lines)`, `verseBlocks(lines)`, `proseBlocks(lines)`.
- `writeText(id, meta, parts)` writes the index and one file per part and
  works out words, lines and pages.

Run a script with

    node -e "import('./build/texts/<textId>.mjs').then(m => m.run())"

then check and look at the result:

    node build/tools/check-text.mjs <textId>
    node build/tools/show.mjs <textId>              # the parts
    node build/tools/show.mjs <textId> <partId> 0 30   # blocks 0 to 30
    node build/tools/show.mjs <textId> --grep 'handkerchief'

`check-text` must report no PROBLEMS. Read each warning and either fix
it or be able to say why it is right.

## meta

    {
      author: 'Fyodor Dostoevsky',
      title: 'The Brothers Karamazov',
      translator: 'Constance Garnett',   // null for a work in its own language
      year: 1912,                        // of this translation or edition
      verse: false,                      // true only for non-dramatic verse (line numbers are shown)
      lang: 'fr',                        // only when the text is not English
      source: { name: 'Project Gutenberg, no. 28054', url: 'https://www.gutenberg.org/ebooks/28054' },
    }

## parts

A part is what a student reads at a sitting and ticks off: a chapter, a
scene, a canto, an ode. `{ id, label, group, blocks }`.

- `id`: lower-case letters, digits, hyphens. Plays: `a1s1`, or `act-1`
  when the acts are not divided into scenes worth separating. Novels:
  `b01c01` (book, chapter) or `c001`. Keep ids in reading order when sorted
  as the array is ordered (the array order is what counts).
- `label`: what the book calls it, plainly: `Act 1, Scene 1`,
  `Chapter 1: Loomings`, `Book I`. No full stop at the end.
- `group`: the larger division, if the book has one: `Act 1`,
  `Book I: The History of a Family`. Omit otherwise.
- Aim for parts under about 8,000 words. Never split inside a paragraph
  or a speech.

## blocks

    { k: 'p', text }        a paragraph of prose (source line breaks joined)
    { k: 'v', lines: [] }   verse: one string per line of the poem, a block per stanza or speech
    { k: 'h', text, level } a heading inside a part (level 2 or 3)
    { k: 's', text }        a speaker in a play, as the source prints the name, without the full stop
    { k: 'd', text }        a stage direction, without brackets or underscores
    { k: 'q', text }        an epigraph or quoted block set off from the text

In a play each speech is an `s` block followed by a `v` block (verse:
keep the lines) or a `p` block (prose: join the lines). Decide verse or
prose by speech and check the decision on samples from each play.

## what to keep and what to drop

Keep the author's (or translator's) words exactly, with the source's
spelling and punctuation. Keep accents. `writeText` sets printers'
quotation marks and dashes where the source has typewriter ones (see
`build/lib/typeset.mjs`; a book that uses the single mark in its own way
is named in `SINGLE` there). To do the same to books already built, run
`node build/tools/typeset-texts.mjs`.

Drop: the Gutenberg header and licence, title pages, tables of contents,
introductions, prefaces and notes by editors or translators, footnotes and
their markers, glossaries, page numbers, running heads, illustrations and
their captions, transcriber's notes, `_` and `=` markup, line numbers
printed in the margin. Keep an author's own preface, dedication,
epigraph or argument when it belongs to the work.

Nothing may be lost from the work itself. Check the first and last
sentences of the book and the count of chapters, acts, scenes or poems
against what the work is known to have.
