# The poet for Carmen: what is particular to this piece

You are the poet for the piece "carmen". Read, in this order:

1. `remake/BRIEF.md` (what is being made, the three rules the person who
   asked for it has set in his own words, and the rules for every agent);
2. `remake/POET.md` (your job, and the exact format of the file you hand in);
3. your entry in `remake/pieces.json`: the object whose "id" is "carmen";
4. the model, `remake/works/tempest/reading.json`, and its proof:
   `node build/tools/check-reading.mjs tempest`
5. "What the model itself got wrong", "Sources you can open from here"
   and "The printed notes" in `remake/EXAMINER.md`.

Then do the poet's job for "carmen" exactly as POET.md sets it out, and
hand in `remake/works/carmen/reading.json` and `remake/works/carmen/notes.md`.

## Read this twice

Three poets were given this piece before you and each was ended before
a reading was saved. Everything you write (your thinking aloud, your
answers, your files, the commands you type) passes an output filter, and
it ends a run that writes out lines of an existing work, in French or in
translation. The words of this opera are among the best known ever
sung, and the filter is quick with them. The last poet had finished all
the research and was ended in the step after it had the English of the
first song shown to it once more: what it wrote next, most likely a
thought that went through those lines, was stopped. So, for you:

- Never write a line of the libretto, in French or in English, or any
  run of two or more of its words together: not to scan it, not to
  translate it for yourself, not to compare the English with the
  French, not in a table, not in a comment, not in a command you type.
  A list that goes through a line word by word in order is the line
  written out. That holds for your thinking as much as for your files.
- Think in numbers. "Row 1.1, words 2 and 3 are the same word" is safe.
  The same thought with the words in it is not. When a tool shows you
  lines, do not restate them, do not render them in English in your
  head on the page, and do not set one beside another: take the row and
  word numbers you need and go on.
- Do not have the first song (the part `habanera` of `o-carmen`, or its
  English, block 110 of `carmen/act-1`) shown to you again unless a
  mark cannot be placed without it. The poet before you has written
  down, by row and word number, everything about it that a reading
  needs. The checker's proof will show you that your marks land where
  you mean.
- You may name one French word at a time when you gloss it.
- Save after every step. If you are ended, what is on disk is what
  remains.
- Keep every answer and every file write under about 150 lines.

## What is already there: use it, do not do it again

`remake/works/carmen/notes.md` (303 lines) is the work of the poet
before you, and it is good. Read all of it first. It holds:

- what Auden said that bears on this opera, with the page of each place
  and how it was read (The Dyer's Hand, pp. 121, 468 to 474 and 478;
  The Enchafed Flood, pp. 15 to 17; the lecture on Richard III; two
  pieces in the Prose; what could not be given a page, which goes in
  `open`);
- the three passages, already cut and hosted: `o-carmen/habanera`,
  `o-carmen/la-bas`, `o-carmen/cartes`, with the place of each in the
  French text and what happens around it;
- the count of every row, word by word, in numbers, by the rules of
  Kastner's History of French Versification, with the pages;
- the rhymes; the cut of the long lines; where a line runs over;
- every dictionary entry read (Littre), the grammar read (Fraser and
  Squair), the figures of speech looked up;
- where the English libretto stands beside each passage (act, block and
  rows), and where it departs from the French, by row.

You do not need to open those sources again unless a claim you want to
make is not covered. Add to notes.md; do not rewrite it.

## The order of work

1. Read the files listed at the top, then notes.md.
2. Decide the view (`view`): what Auden said of this opera that the
   passages bear on. The notes point to The Enchafed Flood, p. 16,
   where he speaks of the second passage itself, and to "Notes on Music
   and Opera". Read the page again in the scan before you paraphrase
   it. Quote at most 25 of his words, once or twice in the whole piece.
3. Write `reading.json` with ONE plate first: the third passage
   (`cartes`), the one the filter is least quick with. Give it the
   top of the file (title, where, about, view, auden, sources,
   caveats, open) and that plate. Run the checker. Save.
4. Add the second passage (`la-bas`) as another plate. Checker. Save.
5. Add the first song (`habanera`) last, as the plate that stands
   first on the page (the order of `plates` in the file is the order on
   the page: put it first when you add it). Place its marks from the
   numbers in the notes. Checker. Save.
   If you are ended here, a reading with two plates remains, and that
   is enough for the lead to go on with.
6. The printed notes (`stands` on every lens, `sources`, `caveats`),
   then `node build/tools/check-reading.mjs carmen --print`.

The English libretto is the `pair` of a passage wherever it is a
version of the same lines. Say plainly in a caveat what kind of English
it is (a singing version made to fit the notes, about 1910, no
translator named).

French verse is counted by syllables, not by stresses: POET.md says how
a line measured by count is marked, and how a word is divided when the
tool's division is not the one the verse needs (a mute e that counts
before a consonant and does not before a vowel or at the line's end).
Count each line you mark against the rule in a source you open, and
give a "div" only to the single words that need one.

## Sources you can open for this piece

- What Auden said: section 32 of `remake/research/C_auden_on_works.md`,
  and the scans named at the end of `remake/EXAMINER.md`. His "Notes on
  Music and Opera" in *The Dyer's Hand* is about what a libretto is and
  what its words are for: read it in the scan before you write the
  view, and give the page of whatever you use. If he says nothing of
  this opera that bears on your passages, say so, as POET.md sets out,
  and do not stretch a general remark.
- Littré's dictionary for the history and senses of a French word, read
  in this session.
- The piece has a record (the Habanera, sung in 1914): the build sets
  it on the page by itself. You may say in a caption what a listener
  can hear in it only if you can ground it in the score or a source;
  you cannot hear it yourself.

## What matters most

1. Every lens must say why the writers did the thing and what it does
   in these lines, standing on the plate, the text, a source you
   opened, or Auden with the page. A caption that only describes what
   is there fails, and so does one that makes a meaning up (rule three).
2. Every mark must be true: a count must be counted, a rhyme must be a
   rhyme in French, a word's history must be read at its source in this
   session, and anything attributed to Auden must be found in the
   research notes or the scans.
3. Choose passages where something can really be seen. The reader may
   know no French: gloss every French word a caption leans on.

Write the printed notes as POET.md and "The printed notes" in
EXAMINER.md set out ("stands" on every lens, "sources" and "caveats"
for a reader), and check them with
`node build/tools/check-reading.mjs carmen --print`.

## Your answer to the lead

When the checker reports no problems and your notes are written, answer
in a few lines: the passages chosen, the lenses, whether the checker is
clean, and what is in "open". Do not paste the reading.
