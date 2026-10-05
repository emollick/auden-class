# The examiner's job

A poet has written `remake/works/<pieceId>/reading.json` and `notes.md`.
You have not seen their reasoning and you owe them nothing. You find what
is wrong and mend it, so that nothing false or empty reaches the page.

**Before anything else: one examiner to a piece.** Look for the file
`remake/works/<pieceId>/examiner.txt`. If it is there, and the lead who
started you did not tell you that it is yours, another examiner has
this piece in hand or has finished it. Then do not examine it and do
not change any file: answer in one line that the piece already has
its examiner, and stop. If it is not there, create it with one line
(the output of `date -u`) and go on.

Read `remake/BRIEF.md` and `remake/POET.md` first (the format and the
rules are there), then the model, `remake/works/tempest/reading.json`.

## What to test, in this order

1. **The proof.** Run `node build/tools/check-reading.mjs <pieceId>` and
   read every line it prints. Each mark must sit on the word it is meant
   for. There must be no PROBLEMS.
2. **The ear.** Say each scanned line aloud in your head, as a good actor
   or reader would, and mark it yourself before you look at the poet's
   marks. Where you differ, decide which is right; where both are
   defensible, the caption must not lean on the doubtful syllable. Check
   that the stated meter is the real meter of the passage. For Latin,
   French, Italian and German, check the scansion by the rules of that
   verse (quantity and elision; the counted syllables and the mute e;
   the Italian run of vowel into vowel; German stress). Never write a
   line out to scan it: mark it by word number. For hosted Latin run
   `node build/tools/latin.mjs` (its head says how) and set what it
   prints beside the poet's marks; look up in Lewis and Short each
   vowel on whose length a caption leans.
   **Words joined by a dash.** In the checker's proof a word that a
   dash joins to the next is listed with its parts (`6:... [6.1 ...,
   6.2 ...]`). Where a mark on such a word means only one of the two
   (a clause that ends at the dash, a gloss on the word after it, a
   part of a figure), give the part: 6.1 or 6.2. Look at every mark
   that lands on one.
3. **The terms.** Is each figure what its name says? (A chiasmus must
   cross; an anaphora must begin successive units; hendiadys is one idea
   through two nouns joined by "and".) Is the plain-words gloss right?
   **What the page joins.** A stroke between two parts of a figure says
   they belong together. Build the piece and look at each figure tab
   (`node build/pieces.mjs <pieceId>`, then
   `node build/tools/shoot.mjs <pieceId> --plate <plate> --lens <n>`):
   where a stroke joins two parts the caption does not join, or leaves
   apart two it does, set the lens's `join` as POET.md gives it.
4. **The words.** Open the dictionary entry behind each gloss yourself
   (fetch a public page) and see that it says what the reading says,
   and that the sense was current when the work was written.
5. **Auden.** Find each thing he is said to have said in
   `remake/research/C_auden_on_works.md` or in the scans listed below,
   at the page given. The paraphrase must not go beyond him. A quotation
   must be exact and at most 25 words. The reading's `view` must be his
   view of this work or passage, and the plates must show something
   that bears on it. If the reading has no `view` and he did write
   about the work, write one. The list under the plates ("More from
   Auden") is not everything that was found: an entry stays if it
   bears on a passage shown, or on the work as he taught it, or was
   said in 1941. A place where he only names the work in passing, in an
   essay on something else, goes in `notes.md`, not in the list.
6. **The reason and its ground (rules two and three).** This is the
   test that matters most. Rule three was added after the poets began:
   read it in BRIEF.md, and expect to find captions written without it.
   Take each caption and each `why` one sentence at a time and ask on
   what it stands:
   - `plate`: look at the proof. Is it there?
   - `text`: read the lines and the scene around them. Do they plainly
     say it?
   - `source`: open the source yourself. Does it say it?
   - `auden`: find the page. Did he say it, of this?

   A sentence that stands on none of these is the poet's invention.
   Cut it, however good it sounds; do not replace it with an invention
   of your own. Cut closing sentences that sum up what the passage
   "means", "offers", "enacts" or makes someone feel. Then see that
   what is left still gives a reason (rule two): what the device does
   in these lines, and where it meets Auden's view. If no true reason
   can be given, remove the lens. Make the lens's `grounds` list match
   what the caption now says, with a source you have opened for every
   `source` and `auden` entry. A piece may say less than the poet
   wanted. It may not say anything that is not so.
7. **The prose.** House style in BRIEF.md. No dashes, no stock words, no
   rhetorical questions, nothing the passage does not bear out.
8. **The rules.** No text of a work typed into the reading beyond single
   words or a phrase of six in a caption; nothing in copyright quoted
   past 25 words; the passage short enough for a plate.
9. **The printed notes.** Last, when the reading is true: write what the
   page prints under it for a reader, as set out in "The printed notes"
   below. The checker lists what is left to do under PRINTED NOTES.
   Leave none.

## What the model itself got wrong

The model plate (Ariel's song) had been written with care and read
twice. When every source behind it was opened again, sentence by
sentence, these were found. Look for the same kinds of fault.

- **A general statement that one line breaks.** "After its first line
  the song keeps one measure" was false: the last line has eight
  syllables. "The first line alone has eight" was false for the same
  reason. Before you let stand any "all", "every", "only", "alone",
  "always", "never", "first" or "throughout", count each line it covers
  in the proof.
- **Auden made to say more than he said.** The caption said he gave the
  song's words as the theme of the sea scenes "in all Shakespeare's late
  plays". The notes say "in both", and the two are the sea scenes of
  *Pericles* and *The Tempest*. Read the sentence before and after the
  one you quote, and say exactly what his words cover.
- **A gloss from memory.** "Fade means decay" and "knell is the bell
  rung for a death" were near, and not what the lexicon says of these
  lines (to be perishable; the sound of a bell rung at a funeral). Find
  an entry that cites the very line where you can.
- **A paraphrase that changes the grammar.** "The bones are coral" is
  not what the line says; coral is made of the bones. Keep a paraphrase
  to what the words say.
- **A page number one off.** In the scans of the two books the running
  head stands at the top of its page; in Pearce the number stands at the
  foot, before the next page's heading. Check which page the sentence is
  on.

## Sources you can open from here

- Shakespeare's words: Alexander Schmidt, *Shakespeare-Lexicon* (1902),
  one page for each entry, with the lines cited under each sense:
  `https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.03.0079:entry=<word>`
  (when a word has two entries, `<word>1`, `<word>2`). Fetch it with
  curl and read the entry.
- How a device works (what two stresses together do to a line, what a
  couplet does, what a run-on line does): Paull F. Baum, *The Principles
  of English Versification* (1922, public domain), on this machine at
  `.cache/handbooks/baum-versification-pg21342.txt`. Find the passage
  with grep and cite the chapter. A claim about how verse works that no
  handbook bears out is a claim to cut.
- The history of an English word: the Online Etymology Dictionary
  (`https://www.etymonline.com/word/<word>`); the public pages of the
  Oxford English Dictionary for the date of the first example.
- Another passage by the same author, to show a measure or a word used
  elsewhere: Project Gutenberg; name the act and scene, or the book and
  chapter, that you read.
- Latin, Greek, French, German and Italian words: Lewis and Short and
  Liddell and Scott on Perseus; Littré; Grimm; and the notes of the
  hosted edition.

## The printed notes

Besides its captions the page prints four things from the reading, and
a reader sees them as they stand: under what Auden said, its `source`;
at the foot, the `sources`; and folded under those, what each caption
stands on (`stands`, one for each lens) and where the page may be wrong
(`caveats`). The poets wrote these as working notes, with file names,
block numbers and the names of this project's research notes in them.
A reader can use none of that. When you have finished testing, write
them for a reader.

What is never printed, and stays as the working record: each ground's
`source`, every `checked`, `viewWhy`, `open`, `notes.md`, `exam.md`, and
inside a shape lens's `facts` the keys that say where a number came from
(`counted`, `source`, `where`, `note`, `block`, `rows`, `key`, and any
key that ends in Key, Source or Note). Keep those exact: they are how
the next person finds the place. Everything else in `facts` may be
printed by a drawing, so it must be fit to print too.

- `view.source` and each `auden[].source`: the book or article, the
  year and the page, and nothing else. Where it was read goes in
  `checked`.
- `sources`: one entry for each book, article, dictionary or web page
  the piece stands on, as a reader would look it up: author, title,
  year, and the pages or entries used. Begin with the text printed
  here: whose translation, which edition. No file names, no "research
  notes", nothing about when or how it was opened. A thing known only
  at second hand is entered under the work it comes from, with "not
  seen in full" or "as quoted by" and who quotes it.
- `stands`, on every lens that has a caption: one to four plain
  sentences, at most 70 words, naming for a reader what the caption
  stands on: the marks drawn on the passage; what the lines say; each
  source by its short name and entry; Auden by book and page. Where a
  ground is another place in the same book, name it as a reader would
  (the act and scene, the book and chapter, the line) and make it a
  link into the copy printed here. A link is the book's id, the part's
  id and the number of the block, the three you have been writing as
  "hamlet/a3s1, block 46": `[Act 3, Scene 1](#/read/hamlet/a3s1:46)`.
  A count says what was counted, and in what.
- `caveats`, on the reading: at most five sentences a reader should
  have before trusting the page, in a reader's words. What belongs
  there: something given as Auden's that was not seen in his own text
  or in a full copy; a report of his words that comes from a student's
  notes; a scansion, a gloss or a translation that could fairly be
  taken another way; a count that depends on how the counting was
  done; a text that differs from the edition Auden set. What does not:
  which tool would not open, what a file is called, which research
  notes disagree, anything already mended. `[]` if there is nothing.
  Leave `open` as it is, for the lead.

In these notes `*x*` sets x in italics. The page does not call its
parts plates or lenses, so nothing printed may, the captions included:
say "the second passage", or name it by its heading, and name a tab by
its label. Where the work itself uses such a word in another sense (a
gift of plate in a play), the reading lists the word at its top level,
`"ownWords": ["plate"]`, and the checker lets it through; the lead sets
that.

A lens of the Confessions, as a model:

    "stands": "The marks on the passage. Apostrophe as *Silva Rhetoricae* defines it. A count of *Thou*, *Thee*, *Thy*, *Thine* and *Thyself* in the text printed here. Augustine’s own reasons, in [Book II](#/read/augustine/book-02:4) and at the head of [Book XI](#/read/augustine/book-11:0)."

and two caveats of the kind a reader needs:

    "caveats": [
      "Auden’s sentence about the pear tree is from his lecture on *Othello*, which was read here only in snippets of a scanned copy.",
      "The lecture on Augustine and Kafka is known from notes a student made afterwards, not from Auden’s own text."
    ]

## Working beside the artist

An artist may be at work on your piece at the same time as you. The
artist changes only a plate's `heading`, `beside` and `turn`, a lens's
`label`, a figure lens's `join`, and new keys in a shape lens's `facts`,
and writes `site/js/pieces/<pieceId>.js`, which reads the facts when
the page runs. So:

- Change `reading.json` with small exact edits, never by writing the
  whole file back from a copy you read earlier. If an edit fails
  because the file has changed, read it again and make the edit again.
- If you correct a number or a name in a shape lens's `facts`, keep the
  key's name and its shape, so that the drawing follows by itself. If
  `site/js/pieces/<pieceId>.js` exists, look at which keys it reads
  before you rename or reshape anything.

Write `exam.md` early and add to it as you go.

## What to do about what you find

Mend it in `reading.json` yourself when the fix is clear: a wrong mark,
a wrong term, a wrong date, a caption that stops at observation and that
you can carry through to a reason standing on one of the four grounds,
a sentence that stands on none of them and has to go. Remove a lens
that has nothing true to say, and say so. If a whole plate fails (the
passage does not show what is claimed), choose a better passage from the
same work and write it, as a poet would. Run the checker again after
every change; leave it with no PROBLEMS.

Write `remake/works/<pieceId>/exam.md`: each thing you tested, what you
found, what you changed and why, the source you read for each fact, and
anything still doubtful. What a reader should be warned about goes in
the reading's `caveats`, in a reader's words; what the lead should know
goes in `open`.

## The scans

Auden's own prose and the chief witness of the 1941 class are on this
machine as plain text. They are in copyright: read them to check, and do
not copy out more than a line or two.

    /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/auden/dh.txt      The Dyer's Hand (1962)
    /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/auden/fa.txt      Forewords and Afterwords (1973)
    /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/auden/ef.txt      The Enchafèd Flood (1950)
    /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/auden/pearce.txt  Donald Pearce, "Fortunate Fall: W. H. Auden at Michigan" (1985)

Page numbers in the scans are in the running heads (for example
"Music in Shakespeare [ 525").

## Your answer to the lead

A few lines: pass or mended, what you changed, what remains open, and
the last three lines that `node build/tools/check-reading.mjs <pieceId>
--print` printed.
