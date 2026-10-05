# The artist's record for the piece `adams`

3 October 2026. Three plates, eleven tabs, two of them drawings of the
piece's own (`dynamo` tab 3, "Force"; `born` tab 2, "Book").

A place is named by plate, tab, width and the first word of the line. No
sentence of the book or of Auden is copied here.

**When the last pictures were taken.** I read the sixth mending in
`remake/KIT-CHANGES.md` at 09:42 UTC, the seventh at 10:40, when its
section was finished, and at 11:09 its last paragraph, on the fault of
that mending that was mended at 11:06 (the list was last written at
11:07:44). The kit's scripts and style sheet were last changed at
11:05:49. "How a plate lays itself out" in the kit's README I read at
10:45 and again, as it stands since 11:08:08, at 11:42. I took every
picture again, last of all, after that mend:

| what | begun | ended |
|---|---|---|
| the two commands of step 3 (build, check, every tab at 1280 and 390, the page) | 11:09:33 | 11:12:05 |
| the page as it stands at 320, 360, 600, 768, 900, 1024 (and 430 for one tab), the trials of `join`, the folds opened | 11:12:05 | 11:16:58 |
| the proposed drawings at nine widths, table open, motion on, a mark tapped | 11:19:29 | 11:23:00 |
| the pointer on a mark of each drawing, the links followed | 11:23:12 | 11:24:28 |
| the measurements (type, heights, heads, glosses, strokes, held runs, line ends, how notes end, labels of the drawings as they stand) | 11:24:28 | 11:35:06 |

Everything said below of the page as it stands was seen in those
pictures. Nothing in `site/js/` or `site/css/` changed while they were
taken. (The checker, `build/tools/check-reading.mjs`, was changed at
11:16:50, after my round had run it; I ran it again at 11:35, part 8.)

The pass before this one, 10:42 to 11:08, fell in the time the lead
named (10:40 to 11:06), in which a line holding two words joined by a
dash might be shown wrongly. Plate `dynamo` has three such words, none
of them in a line of verse and none inside a held run, and the fault did
not touch it: of the 146 pictures of that pass, all are the same to the
pixel in this one but two, and those two differ only in the grey at the
edge of letters (8 px at the left edge of a caption in
`kit-join-sister-1-pair-1280.png`; the last figure of
`proposed-born-2-book-1280-motion.png`, part 2). Every measurement came
out the same, number for number.

## In short

- **Looked at twenty-one times.** The kit and the reading were being
  mended while I worked, so the two commands were run at 04:42, 05:23,
  05:45, 06:03, 06:22, 06:37, 06:45, 06:58, 07:16, 07:48, 07:59, 08:06,
  08:22, 08:38, 08:56, 09:28, 09:29, 09:42, 10:15, 10:42 and 11:09 UTC,
  and after each round I opened every picture that differed from the
  round before. After the round of 10:42, the first under the seventh
  mending, I opened every picture again, changed or not; the round of
  11:09 is the same to the pixel. Every tab was also photographed at
  320, 360, 600, 768, 900 and 1024 px.
- **What the sixth and seventh mendings took off my list.** A word joined
  by a dash now turns at its dash (was A3). No numbered remark ends in a
  line of one word (was A5). A figure's key parts its names by semicolons
  where a name holds a comma (half of A1). A table sets a count to the
  right (part of A8). What is left is under "Still there after the second
  mending": the strokes of a figure in prose (A2), the key of the sentence
  lens (A1), the head of plate `dynamo` at 320, which is 2.8 px too narrow
  for its four tabs because one rule of the seventh mending is overruled
  by the line after it (A4), and smaller things.
- **The two drawings.** In both, the main thing is seen at a glance. Both
  leave the reader to find things the caption names: Force does not say
  which bar is chapter 33 on any phone and leaves out two of the caption's
  numbers; Book names no chapter and sets its two red sentences away from
  their marks. Force keeps its form. Book I would turn, so that the years
  run down the page. Both are drawn in `adams-proposed.js` (part 2).
- **`site/js/pieces/adams.js` is as it was.** The lead's message of 06:47
  said that if the proposed file is better I should make
  `site/js/pieces/adams.js` the better one myself. I judge it better and
  began to. This session's permission check refused the change, because
  that file is shared (other artists read it as their example), and I
  tried no other way. So the page still shows the old drawings, and
  `site/js/pieces/adams.js` was last changed at 03:56:01. The whole
  change is one copy: `remake/works/adams/adams-proposed.js` over
  `site/js/pieces/adams.js`. Its imports are already `../kit/draw.js` and
  `../kit/diagram.js`. It needs the lead, or the person the site is for,
  to make it or to allow it.
- **Two edits to `reading.json`, mine** (part 5): the heading of plate
  `dynamo`, and `"join": "none"` on `sister` tab 1 "Pair".
  `"beside": true` on plate `dynamo` is another session's, and right.
- **Step 3.** The checker: "no problems", "no warnings", "the printed
  notes are fit to print". The picture tool's last line: "nothing
  reported; now look at the pictures" (part 8).

## What is in this folder from me

- `art.md`, this record.
- `adams-proposed.js`, the two drawings as I would have them (the same
  export as `site/js/pieces/adams.js`).
- `shots/`, the last round from the picture tool: 22 tab pictures
  `adams-<plate>-<n>-<tab>-<width>.png` and the page in slices.
- `shots/crops/`, the phone pictures of the last round cut into pieces
  that can be read at full size (`…-part0.png` is the top of the plate;
  `adams-page-390-<n>-a.png` is the upper half of a page slice).
- `shots/widths/`, the page as it stands at other widths
  (`live-<plate>-<n>-<tab>-<width>.png`), the list of sources with its
  folds opened (`live-sources-open-<width>.png`), the pointer on a mark of
  each drawing as it stands (`live-…-pointer-on-…`), and three trials made
  by changing only what the browser was sent, never a file:
  `kit-join-sister-1-pair-<width>.png` (the Pair tab without my `join`),
  `no-join-sister-2-nature-<width>.png` (the Nature tab without strokes),
  `plain-dynamo-…` (plate `dynamo` without `beside`).
- `shots/proposed/`, the proposed drawings at 320, 360, 390, 600, 768,
  900, 1024, 1280 and 1500 px, with `-open` (table opened), `-motion`
  (drawn in with motion on), `-tap` (one mark tapped) and
  `…-pointer-on-…` (the pointer on one mark).
- Thirteen small tools. None writes outside this folder and none touches
  `site/`. Each serves `site/` by itself, as the picture tool does.
  - `try.mjs` answers the request for `js/pieces/adams.js` with
    `adams-proposed.js` (or, with `--live`, with the real file). It makes
    the picture tool's checks and two closer ones: a label that runs out
    of its drawing, and two labels nearer than 3 px.
  - `probe.mjs`: for every tab, the height of the plate, where the
    caption begins, the sizes of the small type.
  - `hover.mjs` puts the pointer on one mark of a drawing and says what
    the page does in answer.
  - `follow.mjs` follows each link of the proposed drawings.
  - `fold.mjs` photographs the list of sources with its folds opened.
  - `gloss.mjs`: how near each gloss of a Word tab comes to the next line.
  - `head.mjs`: the head of each plate (lines of the heading, where the
    place stands, rows of tabs).
  - `strokes.mjs` counts the strokes a figure tab draws from part to part.
  - `glue.mjs`: which runs of words a plate holds together, and whether
    any is parted all the same.
  - `rag.mjs`: how full each line of a prose passage is, and which lines
    are short because the run after them is held.
  - `second.mjs`: on which tabs plate `dynamo` shows its second passage.
  - `last.mjs`: how each numbered remark and each word note ends (the
    width it is set in, its lines, the words on its last line).
  - `tabs.mjs`: the tabs of one plate at small windows (the width they
    need, the width the head has, their rows), and the same with one
    more style rule sent to the browser.

---

## Still there after the second mending

Each of these was seen in a picture taken after 11:09 UTC, that is,
after the seventh mending and after the mend of its one fault at 11:06.
What is gone is struck: A3 and A5 at the end of this list, the rest in
parts 1, 3 and 4.

### A. The kit's to mend, worst first

Each fault keeps the number it had in my earlier lists, so that the other
parts can point at it. The order is the order of harm as it now stands.

**A2. In prose a figure's strokes are drawn for some of its pairs and not
for others, and which ones changes with the window.** The seventh mending
joins the pairs of a `pair` all alike or not at all. A `map` and an
`align` are not under that rule, and these two tabs are a `map` and an
`align`.

- `sister`, tab 2 "Nature" (`map`). Four pronouns answer the one noun.
  `strokes.mjs` at 11:27:
  - 1500, 1280, 1024, 900, 600 and 414 px: two of the four are joined. At
    1280 two short strokes fan from under the noun (the line that begins
    "surroundings.") to the two pronouns of the next line; the pronouns of
    the two lines after have none
    (`shots/adams-sister-2-nature-1280.png`).
  - **768 px, worse than it was.** The noun now begins a line (the
    seventh, "Nature"). Three lines leave it together: two arcs under the
    whole of that line to the two pronouns at its far end, some 500 and
    600 px away, and a stroke down to the pronoun in the next line. For
    the first 300 px the three run within a few pixels of one another,
    under the rules of two verbs, and read as one smudged line. The
    fourth pronoun (the line that begins "one") has none
    (`shots/widths/live-sister-2-nature-768.png`). The kit's README says
    that the strokes of one figure are of one kind and that a stroke is
    drawn only where its way is clear of other lines; here two arcs and
    a stroke leave one point together.
  - 390 px: one of the four. The stroke runs some 150 px from under the
    noun to the pronoun at the end of the next line
    (`shots/crops/adams-sister-2-nature-390-part1.png`).
  - 430, 375, 360 and 320 px: none
    (`shots/widths/live-sister-2-nature-360.png`).

  The four verbs are never joined. The same tab with no strokes, for the
  lead to compare: `shots/widths/no-join-sister-2-nature-1280.png`,
  `-1024`, `-390`.
- `sister`, tab 1 "Pair" (`align`), seen with my `"join": "none"` taken
  off in the browser only. Four short strokes at 1280 and now at 768 too,
  and both pictures are clean. Three at 1024 (the ochre pair, the verbs,
  has none). Three at 390 (the blue pair has none). Two at 360 (red and
  green have none). `shots/widths/kit-join-sister-1-pair-1280.png`,
  `-1024`, `-768`, `-390`, `-360`.

The mend: the rule the seventh mending gave a `pair`, for `map` and
`align` as well. All of a figure's strokes or none; and no stroke or arc
longer than, say, a third of the line.

**A1. A key row joins the names of one color with commas, and a name may
hold a comma itself.** Half mended. The seventh mending parts the names
of a row by semicolons when one of them holds a comma, in the key of a
figure only (`lens-figure.js`). `dynamo`, tab 0 "Likeness", row 1 now
reads as two names, at both widths
(`shots/adams-dynamo-0-likeness-1280.png`,
`shots/crops/adams-dynamo-0-likeness-390-part2.png`), and at 768 the row
no longer leaves one word alone
(`shots/widths/live-dynamo-0-likeness-768.png`). What is left:

- The key of the sentence lens still joins with commas only
  (`lens-sentence.js`, line 60, not changed since 06:11).
  - `born`, tab 0 "Order", both widths: in rows 1 to 3 a comma parts two
    or three names; row 4 ("by whom, in what creed") and row 5 ("his
    name, last") are one name each and read as two.
    `shots/adams-born-0-order-1280.png`,
    `shots/crops/adams-born-0-order-390-part2.png`.
  - `sister`, tab 0 "Who": in row 1 commas part three names; row 5 ("the
    sister, once") is one name.
    `shots/adams-sister-0-who-1280.png`,
    `shots/crops/adams-sister-0-who-390-part2.png`.
  - `dynamo`, tab 1 "Sentence", both widths: row 1 reads "the main
    clause, the main clause ends", a stutter.
    `shots/adams-dynamo-1-sentence-1280.png`,
    `shots/crops/adams-dynamo-1-sentence-390-part2.png`.
- In the key of a figure a row of one name that holds a comma still
  reads as two, beside a row whose comma does part two. `dynamo`, tab 0:
  row 3 ("one verb, twice") is one name and row 5 ("the act, the cause
  given") is two. `sister`, tab 1 "Pair": row 2 ("being, and an
  adjective") is one name.
  `shots/crops/adams-sister-1-pair-390-part2.png`.

The plain mend: one mark between the names of a row in every key,
whatever the names hold (the semicolon the figure's key now uses will
do), or each name on a line of its own under the one sample.

**A4. `dynamo`, every tab, 320 px: the head of the plate is five lines.**
The heading, the place of the passage on two lines, and the tabs on two
rows, with "Force" alone on the second. The seventh mending sets the tabs
closer on the smallest phones, and it falls 2.8 px short: the four tabs
now need 266.8 px (they needed 278.8) and the head is 264 px wide
(`head.mjs` at 11:26). `shots/widths/live-dynamo-0-likeness-320.png`,
`shots/widths/live-dynamo-3-force-320.png`.

The cause is one line of the style sheet. The mending's rule
(`atlas.css`, line 136) does two things: a gap of 10 px between the tabs,
and letters set closer (`letter-spacing:.14em` on `.plate-tabs button`).
The gap is applied. The letters are not: the rule for every button of a
plate (line 137, `.plate button`, `letter-spacing:.17em`) has the same
weight and stands after it, so it wins, and the tabs are still spaced at
1.955 px a letter. With the mending's own rule sent last, in the browser
only (`tabs.mjs --try` at 11:21), the tabs need 257.9 px and stand in one
row at 320. So the mend is to put the line that is now 136 after the
line that is now 137. From a window of 330 px the four tabs stand in one
row as it is. The list of changes says of the seventh mending that four
tabs keep to one row on the smallest phones; on this plate, at 320, they
do not yet.

**A6. On a phone the caption is far below the marks.** The lead has ruled
that a long plate is long on a phone, and the seventh mending says so
again. This is what it still costs here. The caption begins, in px down
the plate (`probe.mjs` at 11:25):

| | 390 | 360 | 320 |
|---|---|---|---|
| `dynamo`, tabs 0 and 1 | 1,062 | 1,115 | 1,323 |
| `dynamo`, tab 2 | 1,437 | 1,544 | 1,752 |
| `sister`, every tab | 928 | 981 | 1,141 |
| `born`, tabs 0 and 1 | 768 | 875 | 981 |

A phone shows about 700 px. (`dynamo` is one line of the passage, 53 px,
shorter at 360 and 320 than it was, now that a word turns at its dash.)
The one cause left that can be mended is the pitch: the lines of a
passage are 53 px apart for 20 px type on every tab, room for marks under
every line, also on a tab that marks one line in twelve (`born`, tab 1
"Tense", `shots/crops/adams-born-1-tense-390-part0.png`).

**A7. The page around the plates.** Three small things, all as they
were.

- A range of years has a hyphen where the rest of the page has an en
  dash: the place of the passage on every tab of `born`
  (`shots/adams-born-0-order-1280.png`,
  `shots/crops/adams-born-0-order-390-part0.png`) and "Read on"
  (`shots/adams-page-1280-3.png`, `shots/crops/adams-page-390-5-a.png`).
- `tidy` in `site/js/rich.js` keeps "Chapter 21" on one line only when
  the word has a capital. Fold "Where this page may be wrong", last
  entry, 1280: the link is parted after "chapter"
  (`shots/widths/live-sources-open-1280.png`).
- 390: the line over the title turns at the dot between author and
  work, and the dot is left at the end of the first line
  (`shots/crops/adams-page-390-0-a.png`).

**A8. The drawing kit.**

- There is no call for a link in a drawing, though the README's second
  rule tells a piece to link to `#/read/…`. Each piece must copy the
  test for a private preview and style its link by hand, and because
  the drawing is `role="img"` it must give the link a name itself
  (`aria-label`). One call, `d.link(nodes, read)`, would do it once
  for all. What I did by hand is at the head of `adams-proposed.js`.
- ~~`d.figures` sets a number to the right only when it is given as a
  number.~~ Gone with the sixth mending: a count set by `num()` is a
  number to the table, and the column "words" stands to the right
  (`shots/proposed/proposed-dynamo-3-force-1280-open.png`,
  `shots/proposed/proposed-born-2-book-390-open.png`).
- The small capitals of a drawing (`dg-lab`) are 10.5 px, the smallest
  type on the page.

**A9. Small type on a phone.** The numerals of the pairs on `dynamo`
tab 2 are 12 px (14.5 at 1280) and a gloss under a word on `sister` tab 3
is 12 px (13.5 at 1280). Both can be read. The numbered remarks and the
word notes are 13 px on a phone and, since the sixth mending, 14.5 px
and darker at 1280 and 1024.
`shots/crops/adams-dynamo-2-level-390-part2.png`,
`shots/crops/adams-sister-3-word-390-part1.png`.

**A10. Two lesser things, new to this list.**

- Between 600 and 900 px the numbered remarks and the word notes stand
  in a narrow column beside the caption: 157 px at 600, 208 at 768, 247
  at 900 for `dynamo` tab 2 "Level" (`last.mjs`). At 600 the five remarks
  make 31 short lines beside a caption of 12 lines, and some 360 px of
  paper under the caption is bare
  (`shots/widths/live-dynamo-2-level-600.png`). Under the caption, at
  the full width, they would make about ten lines.
- The seventh mending keeps a word of one letter off the end of a line
  in a passage. A caption is not treated so: `born`, tab 2 "Book", 390:
  the caption's line that begins "with" ends in the one-letter word
  before the italic phrase
  (`shots/crops/adams-born-2-book-390-part1.png`). A small thing.

**Gone since my last list, and struck.**

- ~~A3. A word never turns, not even at its own dash, so on a small
  phone the line before it ends early.~~ Gone at 10:14: two words joined
  by a dash part after the dash where a line turns. `dynamo` at 360: the
  line that begins "speed," ended at 44% of the measure and now ends at
  80% (`rag.mjs` at 11:30); the plate is one line shorter at 360 and
  at 320. `shots/widths/live-dynamo-0-likeness-360.png`,
  `shots/widths/live-dynamo-0-likeness-320.png`.
- ~~A5. A numbered remark ends in a line of one word.~~ Gone with the
  seventh mending. `last.mjs` at 11:32, eight widths from 1280 to 320:
  "no note of three lines or more ends in a line of one word (80 notes,
  each counted at each width)". Before it, 14 of the 80 did.
  `shots/crops/adams-dynamo-2-level-390-part3.png`,
  `shots/widths/live-dynamo-2-level-1024.png`.

### B. The two drawings as `site/js/pieces/adams.js` draws them

Mine to mend, and mended in `adams-proposed.js`, but not on the page (see
"In short"). The detail is in part 1; here is what a reader still meets.

- `dynamo`, tab 3 "Force": on every phone, at 600 and at 1024 the two
  flags are the bare figures "42" and "71"
  (`shots/crops/adams-dynamo-3-force-390-part0.png`,
  `shots/widths/live-dynamo-3-force-1024.png`); chapter 33 is not
  numbered at any width; the caption's two lengths in words are not in
  the drawing; "35" runs 1.6 px out of the drawing at 390, 2 px at 360
  and 2.5 px at 320, and at 320 the line under the second stretch runs
  5.4 px out (`shots/widths/live-dynamo-3-force-320.png`); the pointer
  changes nothing that can be seen in the drawing
  (`shots/widths/live-dynamo-3-pointer-on-32-1280.png`).
- `born`, tab 2 "Book": the two red sentences stand at the left edge, away
  from their marks; no chapter is numbered or named; a chapter of one year
  is a speck on a phone; at 320 "1892" and "1905" stand 1.7 px apart
  (`shots/widths/live-born-2-book-320.png`); the italic "I" hangs 1 px out
  of the drawing at every width; the pointer changes nothing that can be
  seen (`shots/widths/live-born-2-pointer-on-5-1280.png`).
  `shots/adams-born-2-book-1280.png`,
  `shots/crops/adams-born-2-book-390-part0.png`.

### C. The reading's (not mine to change)

- "More from Auden", entries 4 and 5 (`auden[3].says`, `auden[4].says`):
  the titles of books and of a poem stand in plain type
  (`shots/adams-page-1280-3.png`). The page now sets a title between
  asterisks in italics; no entry of this reading uses them.
- The labels that make what is left of fault A1: `dynamo` tab 1, spans 0
  and 2 ("the main clause", "the main clause ends"); and the labels with
  a comma in them that stand in a sentence lens's key or alone in a row
  of a figure's key: `born` tab 0 spans 7 and 8, `sister` tab 0 span 18,
  `dynamo` tab 0 parts 2 and 6 ("one verb, twice"), `sister` tab 1 parts
  2 and 3. (`dynamo` tab 0 parts 7 and 10 hold a comma too; the figure's
  key now parts that row by a semicolon.) If the kit keeps its commas
  there, these want other words.
- The rest is in part 4.

---

## 1. The two drawings as they stand: a hard look

`site/js/pieces/adams.js`, 115 lines, last changed 03:56:01. The line
numbers below are its lines.

### 1a. `dynamo`, tab 3, "Force"

Pictures: `shots/adams-dynamo-3-force-1280.png`,
`shots/adams-dynamo-3-force-390.png` (cut:
`shots/crops/adams-dynamo-3-force-390-part0.png`),
`shots/widths/live-dynamo-3-force-<width>.png`.

**Does a reader see at a glance what the caption says?** The main thing,
yes: thirty-five bars on one line, a break after the twentieth, low bars
before it and high ones after, one red bar, one that towers. The caption's
counts for the two stretches stand under them. What the caption says and
the drawing does not: which bar is chapter 33, and the length of each
stretch in words, without which 58 against 272 is not a fair comparison
(the later stretch is the shorter).

**Is every label readable at 390?** Yes: figures 12.5 px, italic 13 px,
key 13.5 px. But two of them are bare figures there (fault 1).

**Does anything collide, run out or look unfinished?** "35" and one line
run out of the drawing on small phones (fault 6). Nothing collides.

**Is there a plainer or more exact form?** Bars along an order are the
right form for counts by chapter and I would keep them. I thought about
drawing the rate (times in 10,000 words; the facts hold it for the two
stretches) and left it: the caption speaks in counts, and a drawing shows
what its caption says. The lengths in words do that work when they stand
under the counts.

Faults, worst first:

1. **The two flags are bare figures wherever the drawing is 520 px wide
   or less.** Line 50 gives the chapter's title only above 520 px. The
   drawing is 334 px on a phone of 390, 304 and 264 on smaller ones, 509
   at 600 and 506 at 1024. There "42" and "71" stand alone. (At 1280 the
   drawing is 607 px since the lead's mend, and the flags read "title,
   71": the count still has no word that says what is counted.) The
   caption names chapter 33. Nothing in the drawing says which bar that
   is: the numbers under the line are 1, 5, 10 … 35 (line 41), so 33 is
   never numbered, and 25 is numbered only because it is a multiple of
   five, in black under a red bar. There is room for words: both titles
   fit beside their bars at 304 px, and "42 times" fits at 264.
2. **Two numbers of the caption are not in the drawing.** The caption
   gives each stretch's count against its length in words. The drawing
   gives only the counts (lines 45, 46). The kit's first rule for a
   drawing is that a reader can find every number the caption names. The
   facts hold both (`chapters1to20.words`, `chapters21to35.words`).
3. **A number typed into the script.** Line 19 finds the break with
   `c[0] === 21`. The kit's second rule is that no count or number is
   typed. The break can be found from the facts: it comes before the
   first chapter dated later than the last year in `chapters1to20.years`.
4. **No table of the counts.** Thirty-three of the thirty-five counts can
   be read only by pointing at a bar 7 px wide (at 390). `d.figures` is
   made for this and is not used.
5. **The pointer changes nothing that can be seen in the drawing.** Line
   38 gives `d.hot` no mark to keep dark, and line 40 adds `dg-on` to the
   bar by hand. The kit dims only marks that answer the pointer, and
   those are the unseen boxes over the bars. `hover.mjs` at 11:23 with
   the pointer on the tallest bar: 34 marks dimmed, none of them one that
   can be seen (`shots/widths/live-dynamo-3-pointer-on-32-1280.png`). The
   line under the key does speak. ~~The class is never taken off the bar
   again.~~ (The kit now takes it off.) The kit has had what is needed
   since the second mending: the bar as the third argument of `d.hot`.
6. **Labels run out of the drawing on small phones.** `try.mjs --live` at
   11:33: "35" runs 1.6 px past the right edge at 390, 2 px at 360 and
   2.5 px at 320, and at 320 the line under the second stretch runs
   5.4 px out (`shots/widths/live-dynamo-3-force-320.png`). They stay
   inside the plate, so the picture tool does not report them.
7. **The key says "the other chapters, by number"** (line 55). "By
   number" describes the line under the bars, not the black bars.
8. **Nothing keeps a flag clear of the bars to its left.** It is clear
   today because chapters 21 to 24 and 30 to 32 are low. With other
   counts the words would run through a bar.
9. **The place the facts now give is not used.** `theTheory.read` (the
   examiner added it) leads to the chapter of the theory in the book
   printed here; the README's second rule says to link to it.

### 1b. `born`, tab 2, "Book"

Pictures: `shots/adams-born-2-book-1280.png`,
`shots/adams-born-2-book-390.png` (cut:
`shots/crops/adams-born-2-book-390-part0.png`),
`shots/widths/live-born-2-book-<width>.png`.

**Does a reader see at a glance what the caption says?** The gap, yes,
and that is the main thing: a run of short strokes going down from the
top left, a grey block with "1872 to 1891, no chapter" in it, a second
run after it. The four large figures under it are plain. What the caption
says and the drawing does not: that twenty chapters stand before the
block and that the next is the twenty-first; and the two things that fell
in those years stand as two red sentences at the far left, away from the
two red ticks they belong to.

**Is every label readable at 390?** All but one: the italic "I" under the
first zero is a thin slanted stroke at 13 px and does not read as a word.

**Does anything collide, run out or look unfinished?** At 320 "1892" and
"1905" stand 1.7 px apart and read as one number. The "I" hangs 1 px out
of the drawing at every width. On a phone the one-year chapters are
specks, and two of one year read as one mark.

**Is there a plainer or more exact form?** Yes: the same facts turned, so
that the years run down the page (part 2b).

Faults, worst first:

1. ~~**The heading over the four figures claims too much.**~~ Gone: the
   examiner's facts now count the name too in the storyteller's own
   sentences (102), so one heading over all four is true.
2. **The two red sentences stand apart from their marks.** The ticks are
   at 1872 and 1885 on the line. The sentences begin at the left edge
   48 px lower (line 97), under the years 1838 to 1860. At 390 the tick
   for 1885 is 230 px to the right of the sentence that belongs to it.
   The band is too narrow to hold them (177 px at 1280, 97 px at 390),
   and that is the reason to turn the drawing.
3. **No chapter is numbered or named.** The caption speaks of thirty-five
   chapters, of twenty that run to 1871, and of the next. The reader
   cannot find 20, 21 or 35 in the drawing. The facts hold the two titles
   on either side of the gap (`beforeTheGap.lastTitle`,
   `afterTheGap.firstTitle`), each with its year, and the drawing uses
   neither.
4. **A chapter of one year is a speck on a phone.** At 334 px a year is
   4.9 px, so a chapter dated to one year is a stroke 3.9 px long and
   2.4 px thick (line 83). Twenty-two of the thirty-five are that size.
   Two chapters dated to the same year stand one under the other 4.6 px
   apart and read as one mark. The box that answers the pointer is 4.6 px
   high (line 84), too small for a finger.
5. **The up and down direction is not labelled.** Each chapter is one
   step lower than the last (line 81). That is the usual way to keep
   overlapping spans apart, but nothing says so, and with strokes this
   fine the steps read as one falling line.
6. **Two year labels stand under the wrong years.** Line 78 ends "1871"
   and "1905" at the tick that begins that year, so the figures stand
   under the six or seven years before it. The chapters of those years
   are drawn to the right of the tick.
7. **Numbers that assume the facts.** Line 102 (`2 * 19`) and `B = 178`
   (line 67) allow for two sentences of one line each. A third sentence,
   or one that wraps, would stand on the figures below.
8. **Labels touch or run out.** At 320 "1892" and "1905" stand 1.7 px
   apart (`shots/widths/live-born-2-book-320.png`). The italic "I" hangs
   1 px out of the drawing's left edge at every width (`try.mjs --live`
   at 11:34, nine widths from 320 to 1500).
9. **The lone italic "I"** does not read as a word
   (`shots/crops/adams-born-2-book-390-part0.png`).
10. **The pointer changes nothing that can be seen**, as in Force (lines
    85, 86; `shots/widths/live-born-2-pointer-on-5-1280.png`).
11. **Line 74 types a color into the script** (`rgba(60,50,30,.07)`). The
    kit has exported `TINT` for this since the second mending.
12. ~~The key's samples are thin lines, and the red one reads as dark.~~
    Gone: the kit's line samples are thicker.
13. **The place the facts now give is not used.**
    `theGap.whatTheBookSays.read` leads to the head of the chapter that
    speaks of those years.

---

## 2. What I drew, and why that form

`adams-proposed.js`, 260 lines. Nothing in it adds a fact or a key to the
reading. Every figure, title, year and sentence is read from `lens.facts`
when the page runs. The words of my own are these: "times", "words",
"in", "chapter", "to", "no chapter", "In the storyteller's own
sentences" (kept from `adams.js`), the two keys and the names of the two
folded tables. A missing key throws a plain error, so the kit shows its
table in place of a broken drawing.

### 2a. Force: the same drawing, mended

Pictures: `shots/proposed/proposed-dynamo-3-force-<width>.png`.

| in adams.js | as it is | as I would have it |
|---|---|---|
| line 19 | `c[0] === 21` | the first chapter whose year is later than the last year in `chapters1to20.years`; if there is none, no break is drawn |
| line 41 | numbers under 1 and every fifth chapter | numbers under the red bar (in red), the tallest bar, and both ends of each stretch: 1, 20, 21, 25, 33, 35. A number that would stand within 8 px of one already set is left out (35 on a phone), so none can run out |
| lines 45, 46 | one line: years and count | three short lines under each stretch: the years; "58 times"; "in 108,876 words". Each is kept inside the drawing |
| lines 48 to 52 | title only above 520 px, and never the word "times" | the longest of three wordings that fits to the left of the bar and is crossed by no bar: "title, 42 times", "42 times", "42". If none fits it goes over the bar |
| lines 38, 40 | no mark given to `d.hot`; `dg-on` set by hand | `d.hot(hit, words, bar)`: the bar stays dark while the others go pale, and a tap lets go |
| line 55 | "the other chapters, by number" | "the other chapters" |
| not there | | the flag of the chapter of the theory is a link to its place in the book printed here (`theTheory.read`), with a name for a reader who cannot see it |
| not there | | `d.figures`: chapter, title, words, times, folded under the drawing |
| lines 17, 20 | read straight off `f` | a plain error if `chapters` or either sum is missing |

What a reader gains: at every width from 304 px both flags carry the
chapter's title and "times", the red bar is numbered 25 in red and the
tallest 33, and every number of the caption can be found in the drawing.
At 264 px (a phone of 320) the red flag falls back to "42 times" and the
key says which chapter the red bar is. Tapping a bar on a phone shows
which bar was tapped (`shots/proposed/proposed-dynamo-3-force-390-tap.png`).

What it costs: the drawing is 16 px taller (268 px, was 252) and the
folded table adds a line of 36 px, so the plate is 52 px taller at both
widths (the pictures are 584 px high against 532 at 1280, and 852 against
800 at 390).

### 2b. Book: the same facts, turned

Pictures: `shots/proposed/proposed-born-2-book-<width>.png`.

The form: the years run down the left edge at 4.6 px a year (the scale of
the present drawing, turned). Each chapter is a bar that begins at the
first year in its title and ends with the last, and each has a column of
its own, left to right in the book's order. The years with no chapter are
a band across the whole width, empty of bars, in the kit's `TINT`. The two
events stand inside the band at their own years, in red, each with a red
piece of the year line and its year in red in the margin. The last
chapter before the band and the first after it are named beside the band
with number and title; the first and last chapters are named "chapter 1"
and "chapter 35". Under a hairline, one small-capital heading stands over
the three zeros and the name's count, as in `adams.js`.

Why turn it. Both forms have a diagonal, and I do not claim the turned
one is free of it. The reason is the band. Across the page the band is 20
years wide, which is 97 px on a phone, and no sentence fits in it. Down
the page the band is as wide as the drawing at every width, so each event
stands at its year with its words beside it. The reader then sees what
the caption says: these years have no chapter, and this is what fell in
them. The second gain is that each chapter has its own column, so a
chapter of one year is a separate mark that a finger can find.

| in adams.js | fault | in the proposed drawing |
|---|---|---|
| lines 92 to 98 | sentences apart from their marks | each sentence begins at its year, beside its mark; notes are stacked by their measured height, so a third, or one that wraps, has room |
| not used | the two titles; no chapter numbered | "chapter 20, Failure (1871)" over the band and "chapter 21, Twenty Years After (1892)" under it, on one line from 466 px of drawing; on a phone the number and under it the title (334 and 304 px); "chapter 20" and "chapter 21" at 264. The same wording on both sides. A title is never set without its number |
| line 83 | one-year chapters are specks | every bar is 4 to 9 px wide and at least 3 px high, in its own column; the box that answers is the whole column and 12 px more above and below |
| line 81 | the fall is not labelled | down the page is time, and the margin says so in years |
| line 78 | "1871", "1905" under the wrong years | each year stands at its own height on the year line |
| lines 67, 102 | room for two one-line notes only | the band's own label ("1872 to 1891", "no chapter") goes in the largest space the notes leave, and is left out if none of 36 px is left |
| line 108 | lone italic "I" | the words under the figures are set in the 18 px display face (`dg-name`) |
| lines 85, 86 | pointer shows nothing | `d.hot(hit, words, bar)`, as in Force |
| line 74 | a typed color | `TINT` |
| line 110 | "laid along the years"; a line for a sample | "a chapter, set against the years in its title", with a bar for its sample |
| not there | | the name of the chapter that speaks of those years is a link to its place (`theGap.whatTheBookSays.read`); a label of two lines is one link, 128 by 33 px on a phone |
| not there | | `d.figures`: chapter, years, words, folded |

What it costs: the drawing is 427 px high (was 353) and the folded table
adds its line, so the plate is 110 px taller at both widths (the pictures
are 743 px high against 633 at 1280, and 1,055 against 945 at 390). Time
down the page is less usual than time across it.

What it does not do: `manikin.read`, a place the facts give for a word of
the caption, has no mark in the drawing to lead from (part 4).

### Checks on the proposed file, made at 11:19 to 11:24 UTC

Under the kit as it stood after the mend of 11:06. `adams-proposed.js`
itself was last changed at 07:36.

- `try.mjs` at 320, 360, 390, 600, 768, 900, 1024, 1280 and 1500 px, then
  with the table open, with motion on, and with one mark tapped: eight
  runs, each ending "nothing reported; now look at the pictures". No
  label runs out of a drawing and no two stand nearer than 3 px. I opened
  every one of the thirty pictures of this last set (the twenty-eight
  from `try.mjs` and the two with the pointer on a mark); but for one,
  named in the next line, they are the same to the pixel as those of
  10:51.
- With motion on, the last mark of Force begins to appear at 1.7 s and of
  Book at 2.3 s; a fade takes 0.6 s, so Force is drawn in 2.3 s and Book
  in 2.9 s, inside the three seconds the README allows. Three of the
  four pictures taken with motion on are the same, to the pixel, as the
  still ones. In the fourth (Book at 1280) the last figure had just come
  in when the picture was taken and is a shade greyer at the edge of its
  letters, 1,075 px in a patch 99 by 46 px; the marks are the same.
- `follow.mjs` at 1280, 390 and 360: "every link leads where it says".
  The Force link opens the chapter of the theory, the Book link the head
  of chapter 21, and going back shows the piece again. The link's line is
  the page's hairline and turns red under the pointer.
- `hover.mjs`: with the pointer on a bar the other 34 bars go pale and
  the bar pointed at stays dark
  (`shots/proposed/proposed-dynamo-3-pointer-on-65-1280.png`,
  `shots/proposed/proposed-born-2-pointer-on-11-1280.png`).

---

## 3. The kit's faults I reported earlier, struck where they are gone

The numbers are those of my earlier reports. What still stands is listed
under "Still there after the second mending", A.

1. ~~`dynamo`, tab 3 "Force", 940 px and wider: half the plate is bare.~~
   Gone: the drawing has 607 px beside its caption at 1280.
2. ~~`dynamo`, tabs 0 to 2, 940 px and wider: the caption is a screen
   away from the marks.~~ Gone: it stands under the shorter second
   passage and begins 461 px down.
3. ~~The figure lens joins two parts wrongly when one of them turns a
   line.~~ Gone.
4. ~~`sister`, tab 1 "Pair": the drawing does not show a pair; the key
   leaves out two colors; one label supposes a layout the plate has
   not.~~ Gone as it stood: the key has a row for each color and the
   labels are new. What is left is A2.
5. At 390 the caption is far from the marks. Less than it was (1,360 px
   down on `dynamo`, now 1,062) and ruled to belong to the thing itself.
   What is left is A6.
6. ~~`dynamo`, tab 2 "Level": two ties lie on top of each other.~~ Gone.
7. ~~The sentence lens rules on under the comma; its key gives one color
   several rows.~~ Gone. The one row a color now has is A1.
8. ~~Two words joined by a dash are one token to a mark.~~ Gone: a rule
   now stops at the dash (`dynamo`, tab 1, the line that begins "respect"
   at 1280). That such a token could not turn was A3, and that is gone
   too.
9. ~~The figure lens joins by the order in which the kinds first
   appear.~~ Gone: on `born` tab 1 the bracket joins the two verbs.
10. Small type at 390. Larger now (numerals 12 px, were 10.5; glosses 12,
    were 11; small capitals 10.5, were 10). What is left is A9.
11. ~~`born`: the first word of the passage is in capitals.~~ Gone.
12. ~~Between 520 and 880 px of plate the caption keeps to a narrow left
    column.~~ Gone (`shots/widths/live-dynamo-3-force-768.png`).
13. The head of the plate. ~~At 600 the place breaks before its year.~~
    Gone: under 880 px of plate the place stands under the heading. The
    two rows of tabs at 320 are A4.
14. The page around the plates. ~~The line over the title breaks inside
    the work's title~~ (it now turns at the dot; the dot left behind is
    A7). ~~The italic line of the header is set in.~~ ~~A source line
    breaks between "pp." and its numbers.~~ ~~A range of years breaks at
    its hyphen~~ (the hyphen itself is A7). ~~What Auden says cannot hold
    an italic title~~ (it can now; the reading does not use it: C).
    ~~The triangle of a fold stands 4 px from the edge.~~ ~~"Read on" has
    two hairlines together.~~ ~~A web address leaves a short line before
    it.~~
15. Smaller things in the drawing kit. ~~The README gives a drawing
    330 px.~~ ~~The heading over a drawing is a fixed 24 px~~ (19 px on a
    phone now). ~~No tint is exported.~~ ~~The line that speaks stands
    empty and makes the key jump~~ (it has a hint, stands under the key
    and keeps its room). ~~The key's line sample is thin.~~ ~~The table
    sets a count given by `num()` to the left.~~ What is left is A8.
16. ~~A drawing cannot show which mark the pointer is on.~~ Gone:
    `d.hot(node, words, mark)`.

Found after those reports, and gone:

- ~~The second mending's glue did not hold.~~ Every syllable is a block of
  its own, and a browser may break beside a block whatever space stands
  next to it: with the spaces that do not break, 22 of 102 held runs were
  parted at six widths; with word joiners on both sides, 38 of 153; with a
  wrapper that does not break, none. The kit now wraps each run
  (`.run`). `glue.mjs` at 11:29, twelve widths from 1500 to 320: "every
  run that is held together (192) stands on one line". (Sixteen runs to
  a width now, three more than before the seventh mending, which keeps a
  word of one letter with the word after it.)
- ~~Holding runs together made the prose ragged~~ (five of seventeen lines
  on `dynamo` at 390 ended at 57 to 73% of the measure). The fifth mending
  holds a run of at most 14 letters in prose. `rag.mjs` at 11:30, twelve
  widths: of 476 lines, 11 are short of 85% because the run after them is
  held, the shortest at 66% (`sister` at 320, the line that begins
  "being") and at 390 at 76% (`dynamo`, the line that begins "much";
  `sister`, the line that begins "surroundings."). I call that mended.
  The shortest line of all was A3, at 44%; it is gone, and the shortest
  is now 65% (`sister` at 390, the line that begins "knew", before a
  long word that no rule holds).
- ~~`born`, tab 1 "Tense", 1024 and 430: the two verbs parted over a line
  end, with a slanted stroke the whole width between them.~~ The three
  words are one held run now; `strokes.mjs born 1` finds no slanted stroke
  at twelve widths (`shots/widths/live-born-1-tense-430.png`).
- ~~`dynamo`, tabs 0 and 1, 390: the second passage stood between the
  marks and the caption, though neither tab marks it.~~ Under 940 px of
  plate those tabs now show the first passage only (`second.mjs`).
- ~~`sister`, tab 3 "Word": a gloss on the line below at 360; two glosses
  10 px apart on one line.~~ `gloss.mjs`: "no gloss reaches into the box
  of the next line" at ten widths, and two glosses on one line now have a
  hairline between them (`shots/crops/adams-sister-3-word-390-part1.png`,
  `shots/widths/live-sister-3-word-1024.png`).

---

## 4. The reading: things I think are wrong (not mine to change)

Struck where the examiner has mended them.

1. ~~`born`, tab 0: the last colored span takes in the conjunction before
   the name.~~
2. ~~`born`, tab 1: the kinds are listed so that the wrong two are
   joined.~~
3. ~~`born`, tab 2: the name's count has no word on where it was
   counted.~~ It is 102, in the storyteller's own sentences.
4. ~~Working strings in the facts.~~ They are places to read now (`read`).
5. ~~`dynamo`, tabs 0 and 1: more kinds of mark than a reader holds.~~
   The checker has no warning.
6. `dynamo`, tab 3: `chapters1to24` and `chapters25to35` are in the facts
   and nothing uses them. The caption and the drawing divide the book at
   chapter 21.
7. ~~The list of sources shows working words.~~
8. The tab "Level" does not tell a stranger what it will show. I left it:
   it does not wrap, and it names the lens's idea.
9. "More from Auden", entries 4 and 5: titles in plain type (C above).
10. The key labels that read as a stutter or as two names (C above).
11. `born`, tab 2: `manikin.read` gives a place for a word of the caption.
    No mark of the drawing stands for that word, so nothing can lead
    there. A link on the word in the caption itself would be the plain
    way; that is the examiner's to write.
12. `born`, every tab, 1024: the month and the day of the date stand on
    two lines (the line that begins "third" ends with the month,
    `shots/widths/live-born-0-order-1024.png`). A small thing, and of the
    line's width, not of the reading; noted in case the kit comes to keep
    a date together.

---

## 5. What I changed in `reading.json`

Two exact edits. `check-reading.mjs adams` after each: "no problems".

**The heading of plate `dynamo`** (about 05:35 UTC).

    was  "The dynamo and the Virgin, 1900"
    now  "At the Paris Exposition, 1900"

It read badly and it wrapped badly. It stood beside the chapter label,
which says the same six words and the same year again, under a page title
that says them a third time. At 320 it took two lines, with the year
alone on the second. The new one says where the passage happens, in the
words of the page's own first paragraph, and has the form of the other two
headings. It is one line of 238 px at every width (`head.mjs`).

**`"join": "none"` on `sister`, tab 1 "Pair"** (06:57 UTC).

The tab shows two short sentences built on one frame, in five colors.
When I set it, the kit's own strokes were a tangle that changed with the
width. With `none` the reader sees the five colors come again in one
order, at every width (`shots/adams-sister-1-pair-1280.png`,
`shots/crops/adams-sister-1-pair-390-part0.png`).

Under the kit as it stands the choice is closer than it was, and the lead
may judge otherwise. The kit's own strokes are in
`shots/widths/kit-join-sister-1-pair-<width>.png`: clean at 1280 and,
since the seventh mending, at 768 (four short strokes), and at the other
widths as fault A2 says: one pair without a stroke at 1024 and at 390,
two without at 360. I kept `none` because half the readers are on a
phone, and there a pair with no stroke reads as a pair that does not
belong. To undo it, delete that one key. When the kit draws an `align`
whole or not at all, as it now draws a `pair`, it should go.

**Left as the kit draws it: `sister`, tab 2 "Nature".** Its strokes join
what the caption says belongs together, only not all of it, and at 768
in a smudge of three long lines (A2). ARTIST.md lets me set `join` where
strokes join the wrong parts, and these do not; the fault is the kit's
to mend, not mine to work around. I tried a chain from the noun through
the four pronouns in the browser only: a tangle of arcs and long
strokes, and I dropped it. If the lead would sooner have no strokes on
this tab until the kit draws a `map` whole or not at all, the edit is
`"join": "none"` on that lens, and the pictures of it are
`shots/widths/no-join-sister-2-nature-<width>.png`.

**No `turn`.** The three passages are prose. The fifth mending's rule
for a line of verse touches nothing here; I looked at 390, 360 and 320.

**Nothing proposed for `speakers`.** The sixth mending lets a reading
gloss a speaker's name. No passage of this piece has a speaker's name
printed over it, so there is nothing to gloss.

**`"beside": true` on plate `dynamo`** is another session's. It is right:
both passages are named and set in one type, the words that answer each
other carry one number in one color, and under 940 px the tabs that do
not mark the second passage no longer show it. Without it:
`shots/widths/plain-dynamo-0-likeness-1280.png`,
`shots/widths/plain-dynamo-2-level-1280.png`.

No lens label was changed, and no key was added to any facts.

---

## 6. Measurements (11:24 to 11:35 UTC)

Every tool was run twice under the seventh mending, at 10:56 to 11:08
and, after the mend of 11:06, at 11:24 to 11:35. The two runs agree in
every number.

`probe.mjs`:

| | 1280 | 1024 | 390 | 360 | 320 |
|---|---|---|---|---|---|
| plate `dynamo`, tabs 0 / 1 / 2 / 3, px high | 938 / 899 / 1022 / 531 | 1066 / 1066 / 1127 / 523 | 1560 / 1495 / 2048 / 798 | 1635 / 1593 / 2195 / 843 | 1889 / 1847 / 2504 / 937 |
| plate `sister`, tabs 0 / 1 / 2 / 3 | 860 each | 916 each | 1339 / 1426 / 1381 / 1492 | 1414 / 1522 / 1457 / 1623 | 1596 / 1726 / 1681 / 1846 |
| plate `born`, tabs 0 / 1 / 2 | 732 / 732 / 632 | 852 / 852 / 624 | 1179 / 1241 / 944 | 1308 / 1370 / 989 | 1478 / 1522 / 1034 |
| caption begins, `dynamo` tabs 0 to 2 | 461 down | 459 | 1062, 1062, 1437 | 1115, 1115, 1544 | 1323, 1323, 1752 |
| caption begins, `sister` | beside the passage | beside | 928 | 981 | 1141 |
| caption begins, `born` tabs 0 and 1 | beside the passage | beside | 768 | 875 | 981 |
| a drawing's width | 607 | 506 | 334 | 304 | 264 |

Against my list of 09:16: `dynamo` tab 2 is 41 px taller at 1280 and
48 px at 1024 (its remarks are larger since the sixth mending), and the
three tabs of `dynamo` that show a passage are 53 or 54 px shorter at
360 and at 320 (a word turns at its dash). Nothing else moved.

Type, in px:

| | 1280 | phones |
|---|---|---|
| passage, `dynamo` (two blocks) | 22 | 20 |
| passage, `sister` and `born` | 26 | 20 |
| caption | 17 | 15 |
| key row | 13 | 13 |
| numbered remark, word note | 14.5 (also at 1024, 900 and 768; 13.9 at 600) | 13 |
| the term over a key (the figure's name) | 27 | 27 |
| plate heading, tabs | 11.5 | 11.5 |
| numeral of a pair on the passage | 14.5 | 12 |
| gloss under a word | 13.5 | 12 |
| heading over a drawing | 24 | 19 |
| in a drawing: italic 13, figures 12.5, small capitals 10.5, note 13, key 13.5 | the same | the same |
| the room under a line for marks | 34 | 30 |

`head.mjs`: at 320, plate `dynamo`: heading one line of 238 px, place two
lines, tabs two rows (they need 266.8 px of 264; A4). From 360 px every
plate has its heading on one line, its place on one line under it, and
its tabs in one row; from 1024 the place stands beside the heading.
`tabs.mjs`: from a window of 330 px the four tabs of `dynamo` stand in
one row.

`strokes.mjs`: `sister` tab 2, the pronouns joined to the noun, of four:
2, 2, 2, 2, 3, 2, 0, 2, 1, 0, 0, 0 at 1500, 1280, 1024, 900, 768, 600,
430, 414, 390, 375, 360, 320 (at 768 two of the three are arcs under the
whole line, A2). `sister` tab 1, with my `join`: none at any width.
`born` tab 1 and `dynamo` tab 0: no slanted stroke at any width (the
bracket under the two verbs of `born` tab 1 is squared and stands on one
line at every width).

`glue.mjs`: 16 runs held on the three plates; at twelve widths all 192
stand on one line.

`rag.mjs`: 59 of 476 lines end short of 85% of the measure, 11 of them
because the run after is held (the shortest of these 66%); the shortest
of all is 65%.

`last.mjs`: of the ten small notes (five numbered remarks on `dynamo`
tab 2, five word notes on `sister` tab 3) at eight widths, none of three
lines or more ends in a line of one word. They are set 489 / 405 / 247 /
208 / 157 px wide at 1280 / 1024 / 900 / 768 / 600 (the remarks) and
391 / 326 / 263 / 224 / 173 (the word notes), and at the full width of
the plate on a phone.

`gloss.mjs`, ten widths from 1500 to 320: "no gloss reaches into the box
of the next line".

`second.mjs`: plate `dynamo` shows its second passage on tabs 0, 1 and 2
at 1280 and 1024, and on tab 2 only at 900 and 390.

`hover.mjs` and `try.mjs --live`, the two drawings as they stand: with
the pointer on a mark, 34 marks go pale and none of them can be seen;
"35" runs 1.6, 2 and 2.5 px out of Force at 390, 360 and 320, and the
line under its second stretch 5.4 px at 320; in Book "I" hangs 1 px out
at all nine widths and "1892" and "1905" stand 1.7 px apart at 320.

---

## 7. Mended on the way, earlier (for the record)

Seen in the first rounds and gone long since: the numerals of the ties
stood on words of the second passage; the second passage was a small
italic paragraph with no name; the italic line of the site's header broke
before its last word; at 06:22 the plate `dynamo` at 1280 was broken (the
key one word to a line in a column 40 px wide); the brackets of `dynamo`
tab 0 joined each subject to its verb.

---

## 8. Step 3: the two commands again

Run at 11:09:33 UTC, after the seventh mending and the mend of its one
fault at 11:06, and after reading what they changed; ended 11:12:05.

    node build/pieces.mjs adams
    node build/tools/check-reading.mjs adams
        no problems
        no warnings
        the printed notes are fit to print
    node build/tools/shoot.mjs adams --out remake/works/adams/shots --page
        nothing reported; now look at the pictures

Against the round of 10:42 no picture differs by a pixel. That round I
had opened picture by picture: the eleven tabs at 1280, the eleven phone
pictures cut into 33 pieces, the page in 5 slices at 1280 and in 13
pieces at 390. Against the round of 10:15, taken before the seventh
mending was finished, five pictures differed: `dynamo` tab 0 at 1280 and
at 390 and the two page slices that show it (the semicolon in the key),
and `dynamo` tab 2 at 390 (remark 4 no longer ends in a line of one
word).

The checker itself was changed at 11:16:50, after this round had run it.
I ran it again as it then stood, at 11:35: "no problems", "no warnings",
"the printed notes are fit to print". The picture tool, the build and
the kit were not changed after 11:05:49.

Nothing is reported, so there is nothing to explain. What the picture
tool cannot see, and I did, is under "Still there after the second
mending".
