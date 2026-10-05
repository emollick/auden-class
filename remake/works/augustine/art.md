# Augustine: the artist's record

Piece `augustine` ("The restless heart"). Three plates of four tabs each;
two of the twelve lenses are shape lenses, and those two are drawn in
`site/js/pieces/augustine.js`. No stylesheet of my own was needed. This
record gives what was drawn and why, the counts behind it, what I changed
in the reading, every fault seen on the piece's screens, and what in the
reading I would look at again. The pictures are in
`remake/works/augustine/shots/`.

The kit went on being mended while I worked: the second mending at
06:45 UTC, the third at 07:10, the fourth from 07:40 to 08:25, the fifth
from 08:35 to 08:55 and the sixth from 09:20 to 09:52
(`remake/KIT-CHANGES.md`). I read each part of that file before the round
that followed it. After the sixth the kit's files changed once more, at
10:14, with no note in that file: two words joined by a dash may part
where a line turns. No passage of this piece has such a word.

Everything below is as the page stood in my last round, 3 October,
10:18 to 10:24 UTC (section 5). Every picture in `shots/` was taken in
that round, except those in `shots/example/`.

## 1. The two drawings

### opening / Whole: the thirteen books

What the caption says can be seen: how many words and how many books;
how often a word for Thou comes; ten books about himself and three on
Genesis; the rest named in the first paragraph coming back in the third
paragraph from the end, the same Latin verb; one place between, in
Book IX; Book X as the book on what he is now.

The form: one line of words, the whole work from its first word to its
last, because every one of those things is a place or a stretch on that
line.

- A column to each book. Its width is the book's length in words, its
  height how often the book has a word for Thou (the count divided by
  the words, from zero), so the area of a column is the count itself.
  The body is the kit's pale ground (`TINT`) and the top edge an ink
  line, so the heights read as thirteen ink strokes. The book's number
  stands at the foot of its column (on two levels where the columns are
  too narrow for one).
- A dotted line across at the rate of the whole work, with its figure in
  the left gutter ("1 in 39"), and two more figures there for the
  highest and the lowest column ("1 in 25", "1 in 65"). One quiet line
  above says what is counted and gives the two totals.
- Red is kept for the thing the caption points at: three red dots on the
  line of words where the verb stands (82, 55,540 and 111,507 words in),
  and a red tie hung under the line from the first to the last, with a
  short drop from the one between. Under the tie each place is named in
  three short lines: Pusey's word in red, the Latin verb, and the place,
  which is a link into the book printed on the site. So the eye sees the
  same verb three times in Latin, in three forms, at the two ends and
  once between.
- Three quiet brackets under that for the parts of the work as the facts
  give them (I to IX, X, XI to XIII). Each part's matter stands under
  its own bracket where every bracket has room for it (1280, 1600, 768);
  elsewhere the three are listed in three lines under the brackets.
- While the pointer is on a column (or it has been tapped), the line
  under the key gives that book's own figures; the column, its top edge
  and its number stay dark and the other twelve go pale. A second tap,
  or a tap on bare paper, lets go. While nothing is pointed at, the kit
  prints a hint of its own in that line.
- A key of three short rows (the pale column, its ink top, the dotted
  line), and the thirteen rows of figures folded away under it, with
  what each book tells.

Why not thirteen bars of equal width, or a table: the caption's first
fact is length (111,772 words), the ring is a matter of distance (the
first paragraph and the third from the end), and Book X's size against
its neighbours is plain only when width is words.

How the three labels under the tie keep clear of each other: in one row
at their natural width where the drawing is 500 px wide or more
(1280, 1600, 1024, 768); in one row with the long ones folded to four
lines (430, 390, 360); and where even that will not fit (320, 300) the
two ends keep the row and the place between hangs lower, from a red
line that passes between them. A label gives way by folding first at
its comma, then once more.

Read from `facts` when the page runs: `totals.words`, `totals.thou`,
`totals.oneThouIn`; for each of `books`: `book`, `words`, `thou`,
`tells`; for each of `parts`: `books`, `what`; for the first and last
entries of `ring` that have a count, and each entry of `ringBetween`:
`puseyWord`, `latinVerb`, `place`, `wordsBefore`, `read`. No number and
no name of the work is typed in the script. If the books, the totals or
the ring are missing, or a part names a book that is not there, the
script gives up and the kit shows its plain table instead.

Not drawn, because no caption says it: `ring[2]` (the last paragraph),
`plates`, `plan`, the word counts of the three parts, and the counts
behind the three dots as figures.

### pears / Book: Book II

What the caption says can be seen: 3,781 words; the theft takes 78; the
1,945 after it are over half the book and hold 33 question marks; an
answer five paragraphs on; the last paragraph.

The form: Book II as one bar, read from left to right, a cell to each of
its eighteen paragraphs, as wide as its words. "Lengths side by side
for shares" is the form the brief names for this, and one bar keeps the
order of the book as well.

- Pale cells before the theft, one red stretch for the 78 words that
  tell it, ink after it. The red is a sliver, and that is the point of
  the drawing.
- A dot over the bar for every question mark, at the word it ends; dots
  that would touch stand one on another. The thirteen before the theft
  are scattered; the thirty-three after it crowd.
- Two flags above the bar: "the theft: 78 words" in red (a link to that
  paragraph in the book), and "this passage" over the 72 words the plate
  shows. Two brackets under it: the words and question marks before the
  theft, and after it.
- The nine paragraphs after the theft are numbered 1 to 9 under the bar,
  because three captions of this plate count from the theft ("two
  paragraphs on", "five paragraphs on", "six paragraphs on") and the
  last one names the last paragraph. The pointer on a paragraph gives
  its chapter, its words and its question marks under the key; the
  paragraph stays dark with its own dots and its number, and the rest
  goes pale.
- A key of two rows, and the fourteen rows of figures folded away, each
  with its matter.

Read from `facts`: `words`, `paragraphs`, `questions`; `sections` (each
one's `words`, `questions`, `what`, and for the theft `sentences` and
`read`); `afterTheStory.words` and `.questions`; `examination` (each
`chapter` and `matter`); `paragraphWords`; `questionMarkWords`. The
theft is found as the section after which exactly `afterTheStory.words`
remain, and "this passage" as the later section with as many words as
the plate shows, so neither is named by position in the script. The dots
are drawn only if they come to the counts the labels give (46 in all,
33 after the theft); the paragraphs only if their words add up to the
book's. Without them the bar falls back to the six sections and says so
in its key. Without `sections` or `afterTheStory` the kit's table shows.

Not drawn, because no caption says it: `loveVerbs`,
`afterTheStory.share`.

### Words of my own on the page

Labels only, each stating a figure from the facts: "a word for Thou: …
times in … words", "1 in …", the two keys ("a book, as wide as its
words", "how often it says Thou", "the whole work"; "a question mark,
where it stands", "a paragraph, as wide as its words"), "the theft: …
words", "this passage", "… words before it", "… words after it",
"… question marks", the headings of the two folded tables ("book",
"words", "a word for Thou", "tells", "question marks"), and the lines
under the key: "Book …: … words, a word for Thou … times (1 in …).";
"… words in … paragraphs, … question marks."; "The theft: … words in …
sentences, … question marks."; "This passage: … words, … question
marks."; and "Paragraph … after the theft (chapter): … words, …
question marks." The one word of the work typed in the script is
"Thou", as the name of what is counted (the lens's `what` and its
caption name it so). The hint under the key and the name of the folded
table ("The numbers") are the kit's.

### What I changed in `reading.json`

Small exact edits only, the last at 07:17. After each, and again in the
last round, `node build/tools/check-reading.mjs augustine` printed
"no problems", "no warnings", "the printed notes are fit to print".

1. **New keys in the facts of the two shape lenses**, touching no key
   that was there. Whole, `ring[0]` and `ring[1]`: `puseyWord`,
   `latinVerb`, `place`, `wordsBefore`, `read` (the examiner later added
   `ringBetween` with the same five keys, and the drawing reads it).
   Book: `paragraphWords`, `questionMarkWords`, and `read` on the
   section of the theft. `puseyWord`, `latinVerb` and `place` restate,
   in a form fit to print, what `pusey`, `latin` and `where` already
   hold; if one of those is ever corrected, its short form must be
   corrected with it.

2. **`"join": "none"` on pears / Loved.** The kit's `align` chains the
   three repeats of the verb and also their three objects. Two chains
   that alternate along a line must cross. The caption says the repeated
   words head three clauses and the object changes each time; it does
   not say that the objects belong together. I tried joining the repeats
   only (`[[0,1],[1,2]]`: clean at 390, a long stroke across the column
   at 1280) and settled on "none": three red underlines and three blue,
   which is what the caption describes
   (`augustine-pears-1-loved-1280.png`, `-390.png`).
   The fifth mending leaves out a chain's stroke that runs far along
   between two lines, so I tested in the last round whether my join is
   still needed, with the join taken away on its way to the page (never
   on disk). It is. At 390 the kit lays four braided arcs under one
   line, red, blue, red, blue (`more/pears-loved-without-my-join-390.png`).
   At 1280 a straight red stroke 253 px long slants back from the end of
   line 3 to line 4, just inside the kit's limit of two fifths of the
   plate (255 px there), beside one red arc and one blue
   (`more/pears-loved-without-my-join-1280.png`). Those two pictures
   show a page that does not exist; they are there so the lead can see
   what the join saves.

3. **The three headings.** They were "Book I: the first words",
   "Book II: after the theft of the pears" and "Book X: too late"; they
   are "The first words", "After the theft of the pears" and "Too late".
   The kit prints the place of a passage beside its heading, and since
   the third mending under it on a phone, so each plate read "BOOK I:
   THE FIRST WORDS" and then "Book I" again. The shorter headings also
   fit one line at every width from 300 px up; the second had turned
   over at 360 and below. If the lead would rather keep the poet's
   headings, these are three lines to put back.

I set no `turn` (all three passages are prose, so the rule for where a
line of verse turns does not touch this piece) and no `beside`.

### The counts

```
node remake/works/augustine/counts.mjs
```

The script reads the text printed on the site with the site's own
word-splitter and prints numbers only. Its result, the same at every
run and again in the last round:

```
words in each book:       [7054,3781,5465,6973,6695,7838,8409,8123,8819,16315,9501,10205,12594]
Thou-words in each book:  [285,122,109,127,182,120,230,131,264,380,240,237,462]
words in the whole work:  111772
ring 0: Book 1, paragraph 0 of 0 to 37: its 3 words stand there 1 time(s); words of the whole work before them: 82; words from them to the end: 111690; the facts say 82 before
ring 1: Book 13, paragraph 49 of 0 to 51: its 3 words stand there 1 time(s); words of the whole work before them: 111507; words from them to the end: 265; the facts say 111507 before
ring 2: Book 13, paragraph 51 of 0 to 51: its 5 words stand there 1 time(s); words of the whole work before them: 111718; words from them to the end: 54
between 0: Book 9, paragraph 4 of 0 to 37: its 3 words stand there 1 time(s); words of the whole work before them: 55540; words from them to the end: 56232; the facts say 55540 before
Book II, words in each paragraph: [143,190,180,195,216,194,264,285,261,188,204,222,294,163,261,206,211,104] in all 3781
Book II, the word (counted from 1) that each of its 46 question marks ends: [157,425,570,680,771,802,834,864,1139,1148,1167,1324,1696,2180,2222,2226,2266,2344,2363,2564,2605,2613,2695,2709,2763,2772,2804,2812,2913,2924,2966,2999,3020,3097,3169,3278,3338,3368,3383,3398,3471,3491,3496,3536,3542,3685]
```

The first three lines agree with the poet's own counts. The examiner
counted the same figures separately (`exam.md`).

### How the drawings were tested

All of this was done again between 09:53 and 10:24, after the sixth
mending, with the script as it is handed in.

- Photographed at 1280 and 390 (the pictures of the plates), and at 300,
  320, 360, 430, 768, 1024 and 1600
  (`more/augustine-opening-3-whole-<width>.png`,
  `more/augustine-pears-3-book-<width>.png`). The picture tool reported
  nothing at any of them.
- The pointer drawn across each at 1280, 390, 360, 320 and 300: thirteen
  lines said for the books and fourteen for Book II. Their words add up
  to 111,772 and 3,781, the words for Thou to 2,889, the question marks
  to 46 (13 before the theft, 33 after it). Pictures:
  `more/whole-1280-pointer-on-book-vii.png`,
  `more/book-1280-pointer-on-paragraph-5.png`, and tapped on a phone
  `more/whole-390-tapped-book-i.png`, `more/book-390-tapped-the-theft.png`.
- Each of those 27 lines fits the room the kit keeps for it, so the
  plate keeps one height while the pointer moves: 606 and 441 px at
  1280, 930 and 756 at 390, 953 and 778 at 360, 1,047 and 868 at 320.
  In a window the size of a phone's (390 by 664) the line for a tapped
  column stands at the window's foot while the column is in sight
  (`more/whole-390-phone-window-line-at-foot.png`); that is the kit's
  doing.
- The folded figures opened: `more/whole-390-figures-open.png`,
  `more/book-390-figures-open.png`, and the same at 1280. Each table is
  as wide as its room (607, 334 and 264 px at 1280, 390 and 320) and
  none is drawn sideways; the counts stand to the right with their
  commas.
- The four links followed at both widths: each opens the book at its
  paragraph (Book I, the first; Book IX, the fifth; Book XIII, the third
  from the end; Book II, the paragraph of the theft), with no error.
- With motion allowed, every line that draws itself was watched from the
  click on the tab (18 lines in Whole, 5 in Book) at both widths: none
  shows before its time, and each drawing is whole between 2.7 and 2.9
  seconds after it appears, once, and then stays.
- The facts altered on their way to the page (never on disk), each case
  at 1280, 390 and 320: no place between; a place between with no count;
  two places between; longer names for the places; no links; no parts;
  the ring's counts gone; a part naming no book; no paragraph counts; no
  question-mark places; one question mark too many; no chapters and
  matters; paragraphs, marks and chapters all gone; no sections. Each
  time the drawing either does without the part or hands over to the
  kit's table.
- Two limits. With two places between the ends, on a screen of 320 px or
  less, the lower label's leader crosses the first block of words; the
  facts hold one such place and the examiner's search of the Latin found
  no other. And at 300 px, which is narrower than the kit undertakes
  (264 px of drawing in a window of 320), the numbers 8 and 9 under the
  Book bar stand about 4 px apart and the labels "X" and "XI to XIII"
  about 9 px apart; both still read
  (`more/augustine-pears-3-book-300.png`, `more/augustine-opening-3-whole-300.png`).

### Faults of my own that I found and mended

- A line under the drawing ran two colons together where a fact's own
  phrase holds a colon. (Those lines now give figures only.)
- The caption gained the place in Book IX after the drawing was made;
  the drawing now reads `ringBetween` (third dot, drop, label).
- On a 300 px screen the ninth paragraph lost its number; it has it now.
- The key said "the thirteen books together", a number typed in the
  script; it says "the whole work".
- After the second mending my own way of keeping a pointed-at column
  dark fought the kit's new second tap. It is gone; the script uses the
  kit's `d.hot(node, words, marks)`.
- The lines under the key were too long for the room the kit keeps. With
  each book's or paragraph's matter in them, 15 of the 27 took two lines
  at 1280 and the plate grew as the pointer moved. They now give figures
  only, and the matter is in the folded table.
- Work-rounds of the kit taken out, as the lead's rule requires: the
  `setup` class I had held on the sheet against the kit's old drawing-in
  fault; a height I had set on the kit's speaking line; a class I had
  put on table cells to set figures right; and a raw stylesheet color
  for the columns (now the kit's `TINT`).
- The line at the head of the Book drawing, where it turns on a narrow
  screen, left one word alone; it turns evenly now.
- The first row of the Whole key was one long sentence: two lines on a
  phone, and no sample for the ink line at a column's top. The key is
  three short rows now, each on one line at every width.
- The folded tables printed 16315 and 1667 beside a caption that reads
  111,772. Since the sixth mending a count goes to the table with its
  comma and still stands to the right.

## 2. Faults on the screens

"Kit" means it is not mine to mend. Lines of type are counted from the
top of the passage as that width sets it; x is measured in px from the
left edge of the passage.

### What the mendings after the third did to this piece

- Fourth: a short run of marked words is kept on one line, so the two
  glosses that stood under half a phrase are right. The line under a
  drawing's key carries a hint while nothing is pointed at.
- Fifth: a held run in prose is at most 14 letters. That took away the
  short lines the longer runs had caused for a while (at 390, a line of
  188 px in a column of 334), and it lets the three blue phrases of
  pears / Itself turn again (15, 16 and 17 letters), which brings back
  fault 1 below. Two glosses close together have a hairline between
  them. A crossing is drawn whole or not at all.
- Sixth: the notes beside a passage are larger and darker at 1280
  (pears / Word is 690 px tall there; it was 669). A count with its
  comma is a number to a drawing's table.
- All three passages are prose and no speaker is named, so the rule for
  turning a line of verse, `turn` and `speakers` do not touch this
  piece. At the lead's word I photographed all twelve tabs at 360 and
  320 as well (`more/augustine-<plate>-<n>-<tab>-360.png`, `-320.png`).
  No line runs past its column and the page is never wider than its
  window, from 300 to 1280.

### Still there after the second mending

Worst first. Each is in a picture of the last round.

1. **Kit, pears / Itself, on a phone: three pairs that the caption calls
   the same turn are joined in two ways, and which pair gets the odd
   stroke changes with the width.**
   - 390 (`augustine-pears-0-itself-390.png`): the first and third pairs
     have a squared bracket under the line (line 4, x 8 to 101; line 9,
     x 129 to 313); the second has a slanted grey stroke with a dot at
     each end, in the white between lines 6 and 7 (from x 204 down to
     x 87).
   - 360 (`more/augustine-pears-0-itself-360.png`): brackets under lines
     4 and 7, the slanted stroke for the third pair between lines 10
     and 11.
   - 320 (`more/augustine-pears-0-itself-320.png`): the slanted stroke
     for the first pair between lines 4 and 5, brackets under lines 8
     and 12.
   - A bracket ends under whatever piece of a phrase lies on its line,
     so several end under one small word: "the" at the end of line 9 at
     390, "my" at the end of line 7 at 360, "my" and "the" at 320, while
     the rest of each blue phrase is on the line below.
   - At 1280 all three are brackets under one line each and read well
     (`augustine-pears-0-itself-1280.png`).
   This follows from the limit of 14 letters on a held run in prose. I
   do not ask for the longer limit back: it cost short lines, and a
   plate one line longer. What would mend it: where the pairs of one
   `pair` figure cannot all take the same stroke, leave the strokes out
   and let color tell, as the kit already does for a crossing and for a
   chain's far stroke. I left `join` alone: the strokes join the right
   parts, and "none" would take the good brackets away at 1280 too.

2. **Kit, or the poet's label: opening / Build, every width**
   (`augustine-opening-1-build-1280.png`, `-390.png`,
   `more/augustine-opening-1-build-360.png`, `-320.png`). The ochre row
   of the key reads "small, mortal, a sinner, small, again". It joins
   four labels with commas, and the last of the four ("small, again")
   has a comma of its own, so four things read as five. A semicolon
   between labels in the kit would mend it for every piece; so would a
   label without a comma, which is the poet's to change, not mine.

3. **Kit, late / Crossing, 390** (`augustine-late-1-crossing-390.png`).
   The sentence turns after its first word, so the outer join is a red
   stroke 29 px long with a dot at each end, slanting from the end of
   line 6 to the end of line 7, and the inner one a blue arc under
   line 7 (x 92 to 149). Both joins are drawn, but in two forms, and
   neither a nest nor a cross can be seen. At 1280 the two arcs nest
   (`augustine-late-1-crossing-1280.png`); at 360 and 320 both joins
   run from one line to the next and the two strokes cross
   (`more/augustine-late-1-crossing-360.png`, `-320.png`). The rule
   proposed under 1 would cover this too: a crossing whose two joins
   cannot take the same form is left to color.

4. **Kit, the stand-in table for a shape lens** (seen only if a drawing
   gives up; `fallback-opening-3-whole-1280.png`, `-390.png`,
   `fallback-pears-3-book-1280.png`, `-390.png`, made by taking a fact
   away on its way to the page).
   - The headings are the facts' own key names, run together in capitals
     ("VERSEQUOTATIONS", "ONETHOUIN", "INTHEBOOK", "ONTHEPLATE"), and
     rows are named "afterTheStory", "ringBetween", "paragraphWords",
     "questionMarkWords".
   - Every fact that is a list of things (the books, the parts, the
     ring, the nine paragraphs, the two lists of counts) is a named row
     with nothing in it: five of the seven rows for Whole and three of
     the eight for Book.
   - The table is 695 px wide for Whole and 652 px for Book, in a stage
     of 607 px at 1280 and 334 px at 390, so it must be drawn sideways
     to be read. The one long cell of the row "plan" is in a narrow
     column at the far right, which makes that row 376 px tall and, on
     the screen, empty; "loveVerbs" in Book is 335 px tall the same way.
   - Numbers have no comma (111772, 3781).

5. **Kit's drawing tools, two small things.**
   - The sixth mending takes "1,667" for a number in a table, but not
     "91": the test wants at least one comma. A script that gives every
     count through `num()` therefore gets its column set to the left as
     soon as one count is under 1,000. My script gives the bare number
     where `num()` adds no comma (`comma` in `augustine.js`), which the
     table takes either way; with the test widened, `num()` alone would
     do.
   - In a key whose rows stand one under another (a phone), the words of
     the rows do not begin on one line, because each kind of mark has
     its own width: 15 and 19 px in Book, 19 and 27 px in Whole
     (`augustine-pears-3-book-390.png`, `augustine-opening-3-whole-390.png`).

6. **Kit, late / Senses, every width** (`augustine-late-2-senses-1280.png`,
   `-390.png`). The five sentences are one kind, so all five are ruled
   in red and set in red type, more than a third of the passage, and
   the key is five red rows. The figures 1 to 5 under the sentences are
   10.5 px on a phone (12.5 at 1280). Where a list has one kind only,
   ink rules with red figures would say the same. I have listed this
   twice and it stands, so I take it for the kit's choice and put it
   last.

### Gone since my record of 07:38

- ~~Kit, the two Word tabs, 390: a marked phrase that broke over two
  lines had its gloss under the first word alone.~~ The two phrases
  stand whole, each with its gloss under it, at 390, 360 and 320
  (`augustine-opening-2-word-390.png`, `augustine-late-0-word-390.png`).
- ~~Kit, the two Word tabs: two glosses on one line stood 10 px apart
  and read as one run of italic.~~ A hairline parts them
  (`augustine-late-0-word-1280.png`, `-390.png`,
  `augustine-opening-2-word-1280.png`).
- ~~Kit's drawing tools: the folded table printed counts without their
  commas.~~ (`more/whole-390-figures-open.png`,
  `more/book-1280-figures-open.png`.)
- ~~Kit's drawing tools: a mark that fades in and also answers the
  pointer faded in over 0.2 s, not 0.6 s.~~ Measured again: 0.6 s for
  all 13 such marks in Whole and all 76 in Book.
- ~~Kit's drawing tools: the room kept for the line that speaks was bare
  while nothing was pointed at.~~ It holds the kit's hint
  (`augustine-pears-3-book-390.png`).
- Two things came and went between records and are not in any picture
  here: a pale band behind the line that speaks (08:02 to 08:08), and
  short lines of prose before a long held run (08:15 to 08:37).

### My first list, struck where the fault is gone

The numbers are those of my record of 06:25.

1. ~~Kit, every piece's own drawing, motion on: a line with a time stood
   whole, shrank away, and only then drew itself.~~ Gone: mended in
   `kit/diagram.js`. Measured again in the last round: 0 of 18 lines
   and 0 of 5.
2. ~~Kit, pears / Loved, 1280 and 390: two chains braided, and a long
   stroke across the column.~~ Gone, by the `join` I set, and still
   needed (section 1).
3. ~~Kit, late / Crossing, 390: the outer join left out.~~ Gone; see 3
   above for what is left.
4. Kit, pears / Itself, 390: still there; see 1 above.
5. Kit, all three plates, 390: a plate is longer than a phone's screen.
   The lead's answer in `KIT-CHANGES.md` is that this belongs to the
   thing itself, so I do not list it again. As measured now: opening
   1,219 (Address), 1,134 (Build), 1,202 (Word) and 930 px (Whole);
   pears 1,092, 1,028, 1,157 and 756 px; late 1,415, 1,432, 1,479 and
   1,347 px.
6. ~~Kit, Word tabs, 390: the gloss of a broken phrase; the glosses are
   11 px.~~ Gone: 12 px on a phone, 13.5 at 1280.
7. Kit, late / Senses, all red: still there; see 6 above.
8. Kit, opening / Build, the merged key row: still there; see 2 above.
9. ~~Kit, every plate, 1280: the heading is followed by the place, which
   repeats its first words.~~ Gone, by the headings I changed
   (section 1).
10. ~~Kit, the page: a row of the folded list of what each caption
    stands on began with two colons.~~ Gone: the kit joins heading and
    tab with a comma (`more/sources-list-open-1280.png`, `-390.png`).
11. ~~Kit, the page, 390: the italic line of the masthead set in from
    the edge; the triangles of the folded lists in the margin.~~ Gone.
12. ~~Kit, pears, 360 px and below: the heading leaves its last word
    alone on a second line.~~ Gone.
13. ~~Kit's drawing tools: bare paper between a drawing and its key.~~
    Gone: the line that speaks stands under the key, with its hint.
14. Kit, the stand-in table: still there, and better; see 4 above.

Seen before that and mended by the lead or the examiner: two glosses
set on two levels; a join ending in a dot on top of a word; a join drawn
under the wrong line of a broken phrase; keys with several rows of one
color; the figures under late / Senses at 9.5 px; working names and the
word "plate" in the printed notes.

### Headings and tab names

The headings are changed as section 1 says; each stands on one line at
every width from 300 to 1600. The tab names are left as the poet wrote
them: one word each, and the four of a plate stand on one row at every
width from 320 up. At 300 px, narrower than the kit undertakes, the
fourth tab of the first and third plates drops to a row of its own
(`more/augustine-opening-3-whole-300.png`).

## 3. Things in the reading I would look at again

None of these is mine to change, and none makes a drawing wrong.

- **pears / Book, caption: "over half the book".** The 1,945 words after
  the theft are 51 in 100. They include the 20 words in which he shows
  his heart and the 72 of the passage shown; the facts' own list of
  sections gives the name "the examination" to the last 1,853 only,
  which is 49 in 100. The caption is right if the passage shown counts
  as examining, and it does read so; but the two figures sit one word
  either side of "half", and the caption's "examine what he loved in it"
  also covers a paragraph (the sixth after the theft) whose matter the
  facts give as thanks for pardon. The drawing labels the stretch
  "after it" and leaves "examine" to the caption.
- **opening / Whole, `what`.** It is printed as the drawing's title and
  speaks of where the rest "returns", one place. Since the caption
  gained the place in Book IX the drawing shows two later places. The
  title is not wrong, but it no longer names all that is drawn.
- **opening / Whole: what the columns show and no caption says.** A word
  for Thou is commonest in the first book and the last (1 in 25 and
  1 in 27), the two books the ring ties, and rarest in Books VI and VIII
  (1 in 65 and 1 in 62). The drawing shows it and does not say it. If
  the poet wants it said, the figures are in the facts.
- **The count of 2,889.** The examiner found it high by two at least
  (words with a capital that are not said to God) and the page says so
  under "Where this page may be wrong". The drawing prints the figure
  the facts hold.
- **Keys in the facts that no caption uses** (`plates`, `plan`,
  `ring[2]`, `loveVerbs`, `afterTheStory.share`): harmless, but they are
  what the stand-in table would print.

### Proposed for the reading

No speaker is named on this piece, so I propose no `speakers`. Three
things for the poet, the examiner or the critic:

- **opening / Build, the label "small, again"**: without its comma
  ("small again") the key's ochre row would read as the four things it
  is (fault 2 above).
- **Titles left in roman.** In the paragraphs under "What Auden said"
  and "More from Auden" the titles of books stand in ordinary type: the
  Confessions five times (`view.says`, and the `says` of `auden[3]`,
  `[4]`, `[6]` and `[7]`), New Year Letter (`auden[3]`), Christianity
  and Classical Culture (`auden[6]`) and the Divine Comedy (`auden[7]`)
  once each. The Sources list sets the same titles in italics
  (`augustine-page-1280-0.png`, `-2.png`, `-3.png`). A title between
  asterisks is set in italics there.
- **Words named as words in the notes of the three Word tabs.** Since
  the sixth mending such a word, marked with asterisks, stands upright
  in the italic note. None of the ten notes is marked. The words:
  in opening / Word, the Latin preposition in the note on "for Thyself",
  and the Latin noun and Pusey's two words in the note on "repose"; in
  pears / Word, the Latin chapter heading in the note on "temptation"
  and the English word and its three listed senses in the note on
  "fault"; in late / Word, the two words quoted in the note on "loved",
  the word and the two senses quoted in the note on "abroad", and the
  three Latin words in the note on "fair forms". The names of the two
  dictionaries in those notes are titles.

## 4. The kit's drawing tools

Two things I asked for are in the kit now: `d.hot` takes the marks that
stay dark with its target, and a line no longer shows before it is
drawn. What `augustine.js` still makes for itself, and another piece is
likely to need:

- a block of a few short lines set over a drawing, whose lines may each
  be a link or take a color, which knows its own size and can fold
  itself narrower (`lines` and `clearRow`);
- a sheet whose height is set after its contents are known, since a
  drawing with folding labels cannot say its height beforehand (`close`
  sets the height of `d.svg`).

And the two small things under fault 5 above.

## 5. Step 3

```
node build/pieces.mjs augustine
node build/tools/shoot.mjs augustine --out remake/works/augustine/shots --page
```

Last round: 3 October, after the kit's last change (10:14:38 UTC), with
the reading as section 1 leaves it.

- 10:18:41: `node --check site/js/pieces/augustine.js` passed;
  `node build/tools/check-reading.mjs augustine` printed "no problems",
  "no warnings", "the printed notes are fit to print"; the counts came
  out as above; the build ran.
- 10:18:42 to 10:19:23: the picture tool wrote the 24 pictures of the
  tabs and the 12 slices of the page. Its last line:

```
nothing reported; now look at the pictures
```

- 10:19:23 to 10:22:54: the other pictures in `more/` and the four
  `fallback-*.png`.
- 10:22:54 to 10:23:55: all twelve tabs at 360 and 320
  (`--out remake/works/augustine/shots/more --widths 360,320`), with the
  same last line.

No file of the kit changed while the round ran. I looked at every
picture: the 91 of this round are, byte for byte, the 91 of the round of
10:05 to 10:11, and 89 of them the 89 of the round of 09:44 to 09:50
(the other two are the test pictures of section 1), and those I went
through one by one at every width; the two drawings at 1280 and 390 I
looked at once more after the last round.

## 6. What is in `shots/`

- `augustine-<plate>-<n>-<tab>-<width>.png`: the twelve tabs at 1280 and
  390.
- `augustine-page-1280-0` to `-4`, `augustine-page-390-0` to `-6`: the
  whole page in slices.
- `fallback-*.png`: the kit's stand-in table for each of the two lenses
  at both widths (fault 4).
- `more/`: all twelve tabs at 360 and 320; the two drawings at 300, 430,
  768, 1024 and 1600 as well; with the pointer on a mark; tapped; in a
  window the size of a phone's; with their figures open; the two folded
  lists under the sources, opened, at both widths; and pears / Loved as
  the kit would draw it without my `join`, at both widths (a page that
  does not exist).
- `example/`: the worked example's two drawings, as I first saw them at
  04:00 (the only pictures here not taken in the last round).
