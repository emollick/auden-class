# Art notes for the piece "castle"

Artist's record, 3 October 2026 (times are UTC, by the machine's clock).
Nothing of the translation is copied out here: places are pointed at by
row and word number, and a word of the book is named only where the
facts hold it as a name.

## 1. What is on the page, and what I hand in

- Three plates, seven tabs: street (Clauses, Stop), letter (Reading,
  Words, Title), yard (Turn, Figure).
- One shape lens: plate letter, tab "Title". It is lens number 2, the
  third of the plate's three tabs (the lead's note calls it the fourth).
  When I came there was no `site/js/pieces/castle.js`, and the tab
  showed the kit's plain table: a row of totals, five rows with nothing
  in them, and at 390 px one sentence set a word to a line.
- Handed in: `site/js/pieces/castle.js` (new); this file; the pictures
  in `shots/`. No stylesheet was needed. I changed nothing in
  `reading.json`: no heading, label, `beside`, `turn` or `join`, and no
  new key in the facts.

## 2. The drawing: letter / Title

The lens: the letter K. and the title Land Surveyor through the
eighteen chapters. Its caption names 1,046 and 96, says the title comes
mostly from the people K. meets, names the Superintendent's answer, and
gives the ending Kafka told his editor.

What a reader should see at a glance: the letter stands everywhere and
the title seldom; where in the book each falls; and that the title is
mostly in other mouths than his.

The form I chose:

- **A square for each time.** One ink square for every time the letter
  is written, one red square for every time the title is said, both of
  one size. So 1,046 and 96 are counted against each other on one
  scale, and a chapter where the title is said once still shows. The
  key says what a square is: "K., once", "Land Surveyor, once". Red is
  the title, because the title is the thing the caption points at.
- **A column for each part of the book, in order.** The 22 parts the
  facts list stand left to right; the five parts of chapter 15 stand on
  one foot rule over one number. Ink squares rise from the line; the
  red squares of the same part hang under its number. Bars for counts
  along an order, as ARTIST.md says, but built of units.
- **The two names and their totals** (the kit's name and large-figure
  classes) stand in the open paper over the longest run of low columns.
  Where the drawing is too narrow for that they stand over it: on one
  line at 304 and 334 px, on two at 264 px.
- **Who says the title.** Under a small heading, which is the facts'
  own key, one row for each of the five kinds of speaker: the facts'
  label, then that kind's squares in a row, then its count. Lengths
  side by side for shares: 59 of the 96 is seen at once.
- **The turns.** Under the key, "Land Surveyor, turn by turn": the
  eleven turns of the facts as a table, the chapter linked to its place
  in the book by the facts' `read`, and last the ending that was to
  come after the text. It stands open where the caption is beside the
  drawing (a plate of 880 px or more; the caption stays on screen there
  as the reader goes down the list) and folded where the caption comes
  after the drawing (phone, tablet upright), so that drawing and
  caption stay together.
- **The figures**, folded: each part's words and both counts; and, where
  the drawing is 480 px or wider and a column can hold a phrase, who
  said the title in that part.
- **The pointer**, or a tap, on a column: the line under the key gives
  that part's figures, and the other columns go pale. A row of the turn
  list points at its column in the same way. Nothing the caption says
  needs it.

Why not another form:

- Bars drawn to one scale would leave the title's counts (1 to 7 in
  most chapters, against up to 160) too thin to see; two scales would
  not be honest. Unit squares keep one scale and still show a single
  use.
- My first drawing set the red squares in five lanes under the
  chapters, a lane to each kind of speaker. Ninety-six squares spread
  over that grid showed neither where nor who. I replaced it with the
  red field under the line and the five rows.

Sizes. The step from square to square is 3 to 6 px by the width (5 at
607 px, 4 at 334, 3 at 304 and 264); a column is four squares wide from
424 px and three below. Every chapter is numbered where the columns
stand 20 px apart or more; otherwise the first, the last and every
fifth.

Drawing-in: foot rules, numbers and names at 0.1 s, the ink columns
from 0.15 to 0.8 s, the red from 0.7 to 1.3 s, the heading at 1.5 s and
the five rows from 1.6 to 2.0 s, each fading in over 0.6 s. Measured
with motion on: every mark is whole by about 2.7 s; nothing moves
afterwards.

## 3. Where its numbers and words come from

Everything the drawing shows is read from `lens.facts` when the page
runs, by key:

- `totals`: the two things counted are its two numeric keys other than
  `words`, so the names "K." and "Land Surveyor" are the facts' own;
- `chapters`: each part's `chapter`, `words`, the two counts, and the
  key that holds who said the title there;
- `who says the title` (found as the list of `who` and `times`): the
  five rows and their labels; the key itself is the heading;
- `turns` (`chapter`, `what`, `read`) and `after the text` (`what`): the
  table under the key.

No count, name, chapter or sentence of the book is typed in the script.
The words of my own are the labels a figure needs: "Chapter", "once",
"times", "not once", "in ... words", "turn by turn". If `totals`,
`chapters` or the list of speakers is missing the script throws
`facts: ...` and the kit's plain table stands in its place.

Nothing had to be counted, and I added no key to the facts.

Two things the facts hold that the drawing does not use, on purpose:

- `passages` (this page's three passages and their chapters). Marking
  chapters 1, 2 and 8 would need a third kind of mark and a key of my
  own words, for something neither the lens nor its caption speaks of.
- each chapter's own `read`. The eleven turns already open the book at
  the places that matter; 22 more links on numbers two or three
  characters wide would not be seen as links, and on a phone only five
  of the numbers are printed.

## 4. How it was checked

- `node build/tools/shoot.mjs castle --plate letter --lens 2` at 300,
  320, 340, 360, 375, 390, 400, 414, 430, 460, 480, 500, 540, 580, 600,
  640, 700, 768, 800, 820, 879, 880, 900, 940, 960, 1024, 1100, 1200,
  1280, 1366, 1440, 1600 and 1920 px, with the script as handed in:
  "nothing reported" at every one, and I looked at the pictures. Four
  of them are in `shots/`: `castle-letter-2-title-1280.png`, `-1024`,
  `-390` and `-320`.
- The pointer on a column, on a row of the list and off again (1280),
  and taps on a column, on a row, on the same row again, on another and
  on bare paper (390): the line speaks and lets go as the kit means it
  to. Pictures: `...-title-pointer-1280.png`, `...-title-tap-390.png`.
- The list opened at 390 (`...-title-list-390.png`) and the figures
  opened at both widths (`...-title-figures-1280.png`, `-390.png`): the
  page does not grow wider than its window.
- Each of the eleven links names a part and a block that the hosted
  text has.
- The window made narrower and wider again while the tab is open (1280
  to 390 to 1000 to 1280): the drawing is built again for each width,
  once, and the list folds and opens as it should.
- Two faults of my own found this way and mended. (1) The figures at
  390 set who said the title two words to a line and made the table
  twice as long as it need be (about 1,400 px; now about 700): the
  phrase stands in the table only where there is room for it, and the
  pointer or a tap still gives it. (2) A row of the list given to
  `d.hot` kept its lit state after a tap, because the kit lets go only
  of marks inside the drawing, so a second tap did nothing: the rows
  now pass the pointer on to their column instead.

## 5. The two plates that set two passages side by side

Both plates carry `beside`, and must: each passage is a single row, so
without it the second would be set under the first as a version, small
and italic.

At 1280 px both stand well (`castle-street-0-clauses-1280.png`,
`castle-street-1-stop-1280.png`, `castle-letter-0-reading-1280.png`,
`castle-letter-1-words-1280.png`). The two passages begin level, in one
type, each under its label; a rule; then the caption at the left, under
the first passage, and the key or the numbered remarks at the right,
under the second. Every tab is one screen or a little more (797 to
1,014 px). On Stop and Reading the two ends of a pair carry one number
in one color and the eye finds them quickly. On Clauses and Words the
second passage carries no mark and simply stands beside the first; that
is right at this width.

At 390 px the two stand one under the other, then the caption, then the
key (`castle-street-1-stop-390.png`, `castle-letter-0-reading-390.png`).
On the two compare tabs that is the thing itself, as KIT-CHANGES.md
says: both passages are marked, and the reader goes down through both
to the caption (street 1,590 px in all, letter 2,147 px).

On the two tabs that mark only the first passage it is a fault, the
second in the list below. Measured from the top of the plate:

| tab, width | marked passage ends | unmarked passage | caption begins |
| --- | --- | --- | --- |
| street / Clauses, 390 | 679 px | 695 to 1,093 px | 1,131 px |
| letter / Words, 390 | 864 px | 880 to 1,623 px | 1,660 px |
| street / Clauses, 820 | 491 px | 514 to 791 px | 846 px |
| letter / Words, 820 | 599 px | 622 to 1,131 px | 1,185 px |

## 6. Faults

Pictures named here are in `shots/`, taken 07:55 after a fresh build,
with the kit as it stood after its last changes that I know of (07:44,
07:49 and 07:52; KIT-CHANGES.md does not yet speak of them).

### Mended, or gone

- ~~letter / Title, both widths: the plain table looked broken (empty
  rows; at 390 px a sentence set one word to a line).~~ Mine: drawn
  (section 2). `castle-letter-2-title-1280.png`, `-390.png`.

### Still there after the second mending

Still there after the third as well. All are the kit's. Worst first.

1. **letter / Reading, 1280 and 390: the fifth remark now says the
   opposite of the text.** `castle-letter-0-reading-1280.png`, `-390.png`.
   The kit numbers the pairs in the order of the first passage and
   moves the remarks to match. The reading lists them in the order of
   K.'s own reading (the second passage), and its second remark leans
   on its first: it begins "So too" (the pair of row 8.0 words 70 to 73
   with row p:10.0 words 28 to 32, the mention of his wishes). It was
   written to follow the remark that the address treats K. as a free
   man. It now stands fifth, after the remark that the promise treats
   him as a minor employee, and so says that the mention of his wishes
   does too; the caption beside it says the contrary. Either the kit
   keeps the reading's order on a compare tab, or the examiner rewords
   that remark to stand alone (section 7). The four remarks of street /
   Stop do not lean on each other and read rightly in the new order.

2. **street / Clauses and letter / Words, 390 (and every plate under
   880 px): the passage the tab does not mark stands between the marked
   passage and its caption and key.** `castle-street-0-clauses-390.png`,
   `castle-letter-1-words-390.png`; measures in section 5. On Words the
   reader leaves the last gloss, passes 743 px of text the tab says
   nothing of, set with the open leading that is there for marks it
   does not carry, and only then reaches the caption and the four notes
   that explain the glosses: more than a screen between a mark and its
   note. On Clauses it is 398 px. On Words, since 07:44, the unmarked
   passage is also broken into uneven lines, because the kit now keeps
   together the words of the pairs that only the Reading tab shows,
   and it ends in a line of one word. The kit already has the cure for
   other pairs (a second passage that is not `beside` shows only on the
   tabs that mark it; a version in another language goes after the
   caption and is set as plain prose), but both rules leave out a plate
   with `beside`, and these two plates must carry `beside` (section 5).
   This is narrower than what KIT-CHANGES.md rules out: where both
   passages are marked they should stand one under the other; where one
   is idle on a narrow plate it should step aside or go after the
   caption as plain prose.

3. **yard / Figure, 390: a stroke crosses an arc.**
   `castle-yard-1-figure-390.png`. The three parts of row 13.0 at words
   380, 382 and 384 are joined each to the next. At 390 px the first
   two stand on one line and the third has turned to the next. The arc
   under the first two is right; the join from the second to the third
   is a straight slanted line with a dot at each end, and it cuts
   through that arc. At 1280 all three are on one line and the two arcs
   are right (`castle-yard-1-figure-1280.png`). The strokes join the
   right parts, so `join` is not the cure and I left it unset: any form
   it offers would change the drawing at 1280 as well.

4. **yard / Turn, 390: a mark of two words is split into two stubs.**
   `castle-yard-0-turn-390.png`. The fourth hinge (row 13.0, words 365.2
   to 366) falls across a line turn: one short stub under the last
   word of a line, stacked under the beginning of the clause's own
   rule, which starts at the same word, and another under the first
   word of the next line. The other three hinges are whole. Small. The
   kit's new rule that keeps a short run of marked words on one line
   (07:44) covers the parts of a figure, a noted phrase and the ends
   of a pair, but not the spans of a sentence tab, and this hinge is a
   span of two words.

5. **letter / Words, 390: a gloss stands under one short word.**
   `castle-letter-1-words-390.png`. The mark of row 8.0, words 88 to 94,
   begins on the last word of a line; its gloss stands under that one
   word, at the right edge, and not under the six words on the next
   line. Small. (The kit's change of 07:44 keeps a short mark on one
   line: the mark of words 34 to 37, which was split, is whole now.
   This one is too long for that.)

### Seen, and right as it stands

- On a phone the plates are long (street 1,506 and 1,590 px, letter
  2,147 and 2,177, yard 1,309 and 1,393). Apart from fault 2 that is
  the thing itself.
- Under the Title drawing's key stands a line of the kit's own, "Point
  at a mark to read what it stands for" ("Touch a mark" on a phone),
  with room for two lines at 390 px: it is where the line that speaks
  stands, kept so that nothing moves when it does.

## 7. In the reading (not mine to change)

- **The remark that begins "So too"** (letter, lens 0, the second pair
  in the reading's list). If the kit's order stays, this remark must
  name what it means by itself, in the examiner's words: that the
  mention of his wishes is the other place K. counts as treating him
  as a free man.
- **The chapter is said twice at the head of two plates.** The kit now
  prints the place of a passage beside the plate's heading ("Chapter
  1", "Chapter 2"), and the labels over the first passages name the
  chapter again (street: label begins "Chapter 1:"; letter: label ends
  "in chapter 2"). A plate's `label` is not among the things an artist
  may set, so I left both.
- **Book titles stand in roman.** KIT-CHANGES.md says a title between
  asterisks is set in italics in "The passage", the line under the
  title and "What Auden said". The reading has no asterisks anywhere,
  so the novel's title in "What Auden said", and the titles of Auden's
  book and of several others in the paragraphs under "More from
  Auden", are in roman. The examiner's or the critic's to mark.
- **The Title tab is the third tab**, not the fourth.
- **`passages` in the Title lens's facts is not drawn** (section 3). It
  does no harm there.
- I found nothing wrong in the facts of the Title lens: the 22 parts
  add up to the totals (96,799 words; 1,046; 96), each part's speakers
  add up to its count, and the five kinds add up to 96.

## 8. Rounds of pictures

- 06:36, before the kit's second mending: not evidence. Faults 2, 3
  and 4 were first seen there.
- 06:47, after it: faults 2 to 5 there, and fault 1 new with that
  mending.
- 07:12, after the third mending had begun: the same five.
- 07:33, a full round after `node build/pieces.mjs castle`: at 390 the
  six tabs that are the kit's were the same, pixel for pixel, as at
  07:12; at 1280 I saw no change.
- 07:44: the kit changed again under me (a line of words under a
  drawing's key; a short run of marked words kept on one line; the
  setting of the table of figures).
  One run of the tool in that minute reported two errors from
  `piece.js`; the next run, seconds later, reported nothing.
- 07:46, a full round after `node build/pieces.mjs castle`: every tab
  at 1280 and 390 and the page in slices, all looked at. Changed since
  07:33: the two tabs of the letter plate at 390 (lines broken
  differently, the plate 51 px longer), the Title tab (the kit's line
  under the key) and the yard plate at 1280 (1 px).
- 07:50, and again at 07:53 and 08:00 with the same result: the Title
  tab alone at 320 and 1024 and in its pointer, tap, list and figures
  states (section 4). At 07:59 the 33 widths of section 4 once more.
- 07:52 and 07:55, two more full rounds, each after a fresh build,
  because the kit's stylesheet and plate changed again at 07:49 and at
  07:52: every picture the same, pixel for pixel, as at 07:46. The
  pictures in `shots/` are those of 07:55. Last line of the tool:
  "nothing reported; now look at the pictures".
