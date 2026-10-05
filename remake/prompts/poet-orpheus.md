# The poet for Orpheus and Eurydice: what is particular to this piece

You are the poet for the piece "orpheus". Read, in this order:

1. `remake/BRIEF.md` (what is being made, the three rules the person who
   asked for it has set in his own words, and the rules for every agent);
2. `remake/POET.md` (your job, and the exact format of the file you hand in);
3. your entry in `remake/pieces.json`: the object whose "id" is "orpheus";
4. the model, `remake/works/tempest/reading.json`, and its proof:
   `node build/tools/check-reading.mjs tempest`
5. "What the model itself got wrong", "Sources you can open from here"
   and "The printed notes" in `remake/EXAMINER.md`.

Then do the poet's job for "orpheus" exactly as POET.md sets it out, and
hand in `remake/works/orpheus/reading.json` and `remake/works/orpheus/notes.md`.

## Read this twice

A poet was given this piece before you and was ended before anything of
the reading was saved. Everything you write (your thinking aloud, your
answers, your files, the commands you type) passes an output filter, and
it ends a run that writes out lines of an existing work, in Italian or in
translation. A libretto invites exactly that, because its lines are
short and easy to carry in the head. So, for you:

- Never write a line of the libretto, in Italian or in English, or any
  run of two or more of its words together: not to scan it, not to
  translate it for yourself, not in a table, not in a comment, not in a
  command you type (search with a pattern of one word). A list that
  goes through a line word by word in order is the line written out, so
  do not make one. Read the lines only in the output of the tools,
  which is not your writing.
- Point at words by row and word number, always. You may name one
  Italian word at a time when you look it up or gloss it. The checker's
  proof prints the words your numbers land on, so you can see that they
  are right without typing them.
- Save early and often. Create `remake/works/orpheus/notes.md` in your
  first minutes and add to it as you go. Write `reading.json` one plate
  at a time, and run the checker after each. If you are ended, what is
  on disk is what remains.
- Keep every answer and every file write under about 150 lines. One
  response that is too long is cut off and the run is lost.

## What is already there

The poet before you cut four passages of the Italian original, and they
are hosted: `node build/tools/show.mjs o-orpheus` lists them (the first
strophe of Orpheus's song in Act 1; the end of Love's terms; Orpheus
before and after his aria in Act 3; the aria itself), and
`node build/tools/show.mjs o-orpheus <part>` shows one with its row
numbers. The English libretto is `orpheus` (`node build/tools/show.mjs
orpheus`, then a part). The Italian comes from raw OCR of a printed
score's libretto: check every line you use against the scan's own
neighbouring lines and against a second source you open, and name in
`open` any word you could not settle. You may use these cuts, or cut
others with `node build/tools/original.mjs` as POET.md sets out; you are
not bound to that poet's choice. Set the Italian as the passage and the
English beside it as the `pair` wherever the English is a version of
the same lines, and say plainly in a caveat what kind of English it is
(a singing translation is made to fit the notes, not to give the sense
word for word).

Italian verse is counted by syllables, with vowels that meet between
words run together and the count taken to the last stress: POET.md says
how a line measured by count is marked, and how a word is divided when
the tool's division is not the one the verse needs. Count each line you
mark against the rule in a source you open, and give a "div" only to
the single words that need one.

## Sources you can open for this piece

- What Auden said: section 25 of `remake/research/C_auden_on_works.md`.
  It finds nothing of his on this opera itself, only where he places
  Gluck in the history of opera. Say so, as POET.md sets out, and do
  not stretch a general remark into a reading of these lines.
- `remake/research/webfacts.md` no. 5: Hanslick's remark on the aria,
  with a correction to how it is usually told. Read the correction
  before you use the remark, and keep to what the note found.
- An Italian dictionary for the history and senses of a word (Treccani
  or the Tommaseo), read in this session.
- The piece has a record (the aria, sung about 1922): the build sets it
  on the page by itself. You may say in a caption what a listener can
  hear in it only if you can ground it in the score or a source; you
  cannot hear it yourself. That the aria is in a major key, and how its
  words come round, are facts about the score: ground them in a source.

## What matters most

1. Every lens must say why the writers did the thing and what it does
   in these lines, standing on the plate, the text, a source you
   opened, or Auden with the page. A caption that only describes what
   is there fails, and so does one that makes a meaning up (rule three).
2. Every mark must be true: a count must be counted, a rhyme must be a
   rhyme in Italian, a word's history must be read at its source in this
   session, and anything attributed to Auden must be found in the
   research notes or the scans.
3. Choose passages where something can really be seen. The reader may
   know no Italian: gloss every Italian word a caption leans on.

Write the printed notes as POET.md and "The printed notes" in
EXAMINER.md set out ("stands" on every lens, "sources" and "caveats"
for a reader), and check them with
`node build/tools/check-reading.mjs orpheus --print`.

## Your answer to the lead

When the checker reports no problems and your notes are written, answer
in a few lines: the passages chosen, the lenses, whether the checker is
clean, and what is in "open". Do not paste the reading.
