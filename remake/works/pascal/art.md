# Pascal, *Pensées*: the artist's record

Piece `pascal`. Three plates (heart, reed, wager), eleven tabs, one shape lens: the tab
"Page" of the plate "heart". Words of the passages are pointed at by row and word number,
as the checker's proof numbers them.

Begun 2026-10-03, 08:05 UTC. First pictures 08:06 UTC. While I worked the kit was mended
three times (the fourth, fifth and sixth mendings) and the examiner rewrote much of the
reading (09:13 to 09:47 UTC). Every fault below was looked for again in the final pictures,
taken after the sixth mending. Their time is at the foot.

I did not edit `reading.json` or `notes.md`. What I would have set in the reading is under
"Proposed for the reading"; the examiner has since set both things. I wrote
`site/js/pieces/pascal.js`; no stylesheet was needed. Nothing was refused by the
permission system.

## What I drew: heart / Page

**The lens.** Its `what`: page 8 of the manuscript, the eight pieces written on it in the
order a modern edition gives, and the section in which each is printed here. Its caption
(the examiner's, since 09:18) says that both fragments stand on one of the four pages of
the wager, 278 in the margin and 277 upside down at the top; that modern editors judge
278 the earlier; and that the arrangement printed here is an earlier editor's, which
sorts the page's eight pieces into five of fourteen sections and sets 277 before 278.
Every number in that is in the drawing.

**The form: two columns joined by lines** (ARTIST.md: "two columns joined by lines for
what answers what"). What the reader is meant to see at a glance is that the page and the
book are two different orders of the same eight things, and that the two fragments of this
plate changed places between them.

- Head: a strip, "The pages of the wager", with the page numbers from `wagerPages`; the
  page set out (`page`) is in ink with a ring round it, the others quiet.
- Left column, "Page 8, as written": the `pieces`, top to bottom by `order` (the order
  the lens's `what` names, a modern edition's), each row its order, what it is about,
  and its fragment number. Pieces that follow each other in one `place` stand under that
  place, named once in quiet italic over a hairline (four places for eight pieces).
- Right column, "The book, as printed": the `sections`, a cell to each of the fourteen,
  all the same height. A cell that prints something from the page is tinted and holds its
  numbers in the order of `fromThisPage`; an empty cell is empty, its numeral quiet. At
  607 px the names of the five sections that take something stand beside their cells; on
  a narrow sheet they are listed under the columns.
- A line from each piece to its number in the book. Where two lines cross, the book has
  not kept the order of the page. The two red lines cross just before section IV: that
  is the caption's last clause (277 set before 278).
- Red is "this passage": a piece is red when its `read` points into the part of the book
  this plate shows (`pascal/s04`) at a block the plate shows or the one before it (the
  number of a fragment is a heading, and its words are the next block). So the color
  follows the reading if the plate's rows change; nothing is typed.
- Key: red line, ink line, tinted box ("a section that prints something from the page:
  five of fourteen"). Folded under it, "The fourteen sections": numeral, name, and what
  each takes from this page, since nine of the names are nowhere else in the drawing.

**Why not a plan of the page.** The facts hold the places in words only (no measures of
the sheet), so a plan would have been invented geometry, and "scenery". The four places
are kept as words, each over the pieces that stand in it.

**Scale.** Nothing here is a length. The fourteen cells are equal because they are an
order, not a measure; the left column is spaced so that the two columns end together.

**What the pointer adds** (nothing the reader needs in order to read the drawing):

- on a piece, its line or its number in the book: one sentence with both orders, e.g.
  for the sixth row "Sixth in the order given; fragment 278 in section IV," and the
  section's name. Its line, its number, and the numeral and name of its section stay
  dark; the rest go pale. A click opens the fragment in the book printed here (`read`);
- on a section: its name and which fragments it takes from this page, or "nothing from
  this page" (this is how the nine other names can be read without opening the table);
- on a page of the strip: which it is; page 7 says what `otherSide.holds` says, and
  opens `otherSide.read`;
- by touch, a tap lights the row and the line speaks; the way into the book is then a
  link in the sentence itself (the words "fragment 278", "Page 7"), because a tap on the
  row is kept for asking. Links are out of the tab order, as in the other drawings.

Every sentence takes one line at 607 px and two at 334, 304 and 264 px, so the plate
does not change height when the line speaks (measured, every mark, at 1280, 390, 360
and 320).

**Widths.** Laid out from `d.w`. Looked at in windows of 1280 (607 px), 1100 (545), 900
(774), 768 (659), 600 (509), 480 (424), 390 (334), 360 (304) and 320 (264): no label
past the edge, none on another. Words that must turn are set line by line in the svg,
made as equal as they can be so that no word stands alone. At 264 px the heads shorten
to "Page 8, written" and "printed", and the strip's figures go under their label.
(The drawing is asked for 264 to 610 px; in a window of 900 it gets 774, and holds.)

**Drawing-in.** Places and rows first, then the eight lines one after another in the
order of the page, each number in the book appearing as its line arrives. The drawing-in
takes 2.1 s from the moment the kit calls the script (timed in the page with motion
allowed: 2.0 to 2.3 s). The kit calls it about half a second after the tab is clicked, so
all is in place about 2.6 s after the click. In three runs at each width at 10:04 UTC,
with this machine heavily loaded by other work, that was 2.51 to 2.59 s at 390 and 2.79
to 3.02 s at 1280, where the kit's own half second took 0.5 to 0.8 s. With reduced
motion it is simply there.

**From the facts.** Keys read: `page`, `wagerPages`, `otherSide` (`page`, `holds`,
`read`), `pieces` (`order`, `place`, `fragment`, `about`, `section`, `read`), `sections`
(`numeral`, `name`, `fromThisPage`), `sectionsFromThisPage`, `sectionsInAll`. No number
or name is typed in the script, and I counted nothing myself. If a section's
`fromThisPage` and the pieces' `section` disagree, or either count is not what the lists
give, the script throws and the kit shows the plain table. No new key is needed. (At
about 09:30 the examiner shortened the fifth piece's `about` by a word. The drawing took
it with no change to the script, and I checked the nine widths and the 26 sentences
again after it.)

Pictures: `pascal-heart-3-page-1280.png`, `pascal-heart-3-page-390.png`; the states,
`page-hover-1280.png` (pointer on the eighth row), `page-tap-390.png` (a tap on the
sixth row), `page-stuck-390.png` (the same in a window 760 px tall: the line that
speaks stands at the window's foot), `page-360.png`, `page-320.png`, `page-900.png`.

**Mine, and mended on the way** (none of these is in the final pictures):

- the page numbers of the strip were boxes and read as buttons: now figures, one ringed;
- two numbers in one cell stood too close: the cell is as tall as its numbers need;
- the words of a row were `d.note` paragraphs, which do not go pale with their mark:
  now svg text;
- the sentence for a row ran to two lines at 607 px and three by touch at 264: shortened,
  and the link moved into the sentence;
- the last numbers arrived 3.2 s after the click: the lines now follow each other at a
  tenth of a second, each 0.12 s after its row (last changed 10:03 UTC, before the final
  pictures);
- "XIII" and "XIV" reached 1 px past the right edge: the column has 2 px more;
- the head and the sentences said "in the order written" and "written sixth", which is
  more than the words of the lens claim (see the end of "What in the reading I think is
  wrong"): now
  "as written" and "sixth in the order given".

## Proposed for the reading

**Nothing is left to set.** I proposed two settings, both a figure lens's `join`. The
examiner has put both into the reading (the first at 09:13 UTC, found independently; the
second at about 09:28 UTC, after looking at my pictures and at the examiner's own), so the
final pictures show them. For the record, what they are and what each mended:

**1. Plate `heart`, lens 0 ("Reasons", antanaclasis, `draw: pair`):**

```
"join": [[0, 1]]
```

Parts 0 and 1 are row 90.0 w4 (tag A) and row 90.0 w6 (tag B). The caption's first
sentence is about exactly these two: one word used twice in the first sentence, in two
senses. Without the setting the tab drew five underlines and no stroke at all, at either
width: with one A and four B, `pair` joins nothing. With it, one squared stroke joins w4
and w6 under the first line, and the three later B (90.0 w62, 92.0 w10, 92.0 w23) keep
their color only: `pascal-heart-0-reasons-1280.png`, `pascal-heart-0-reasons-390.png`.
The plate is no taller for it.

**2. Plate `reed`, lens 0 ("Reed", metaphor, `draw: map`):**

```
"join": [[0, 1]]
```

Parts 0 and 1 are row 17.0 w0 (A, what is meant) and row 17.0 w3-4 (B, what it is
called). Without the setting `map` joined the one A to each B, so a second stroke ran
from w0 to the later B (w14-16). At 1280 the two left w0 together and crossed at once;
at 390 the second was a long, nearly level stroke that cut across
the arc of the first and ran on under four more words to reach the second line. Those
are kept as `before-join-reed-0-reed-1280.png` and `before-join-reed-0-reed-390.png`
(taken 09:24 UTC from the reading of 09:18). The caption says w0 is called w3-4 and
that the reed then "returns with one word added"; it does not join w0 to w14-16. Now
there is one arc, w0 to w3-4, and the return is told by its color and by the green rule
under the added word: `pascal-reed-0-reed-1280.png`, `pascal-reed-0-reed-390.png`.

**I propose nothing else:** no `heading`, `label`, `beside` or `turn`, no new key in the
facts, and no `speakers` (the sixth mending). No speaker's name stands over a speech in
this piece: the third passage is one side of a dialogue that the book prints without
names, and its caption says so.

**Looked at and left alone.**

- `turn`: every row of the three plates is prose, so the fifth mending's rule for where
  a line of verse turns does not come into it. I looked at 360 and 320 as well as 390.
- `wager`, lens 1 ("Pairs") and lens 2 ("Scales"): the stroke that looks wrong is a
  different one at each width (see fault 1), so no list of joins mends it; `"none"`
  would lose the squared strokes that are right.
- `reed`, lens 2 ("Crossing"): two joins to a crossing would be drawn "whole or not at
  all" exactly as now (fault 2).
- Tab names and headings: all read well. On the heart plate the four tabs fit one row
  at 390 and 360 and miss it by 2 px at 320 (fault 4); a shorter label would be a worse
  word, so I leave them.

## Faults that are the kit's, worst first

All seen in the final pictures, after the sixth mending. Positions are px inside the
plate, measured in the browser between 09:56 and 09:58 UTC, on the reading and the kit
that the final pictures show.

**1. A `pair` stroke across a line end runs long and nearly level.** wager / Pairs and
wager / Scales, every width; a different pair each time, whichever one the line end
falls in.

- Pairs, 1280 (`pascal-wager-1-pairs-1280.png`): the stroke from row 144.0 w52-53 (end
  of a line) to w55-56 (start of the next) is 392 px wide and falls 26 px. It passes
  1.3 px from the lower right corner of the squared stroke under w47-48 and w50-51:
  the two touch.
- Pairs, 390 (`pascal-wager-1-pairs-390.png`): the stroke from w65 to w67 is 245 px
  wide in a column of 334 and falls 22 px. It passes 6 px under the right end of the
  rule of w61-64 and runs on under the whole of it, like a second underline gone
  crooked.
- Pairs, 360 and 320 (`pascal-wager-1-pairs-360.png`, `-320.png`): two such strokes,
  one under the other (w47-48 to w50-51, and w52-53 to w55-56): 171 and 116 px wide
  in a column of 304, 138 and 83 px in a column of 264.
- Scales, 390 (`pascal-wager-2-scales-390.png`): w99 to w102, 223 px wide; the same at
  360 (193 px) and 320 (160 px).

The fifth mending leaves such a stroke out of a chain when it is wider than about two
fifths of the plate, and lets color tell. The same rule for a pair would mend all of
these: the two colors and the squared strokes of the other pairs already say what a
pair is. A stroke that the reading names in `join` should still be drawn: on heart /
Reasons at 360 and 320 the one named stroke, w4 to w6, crosses a line end too (140 px
wide, falling 20), stands alone, and reads well (`pascal-heart-0-reasons-360.png`).

**2. reed / Crossing has no crossing on a phone.** 390, 360 and 320
(`pascal-reed-2-crossing-390.png`): six underlines and no stroke. The sentence of row
20.0 takes three lines at 390 (four at 360 and 320), with A w31-32 on the first, B w36
on the second, B w43 and A w45-46 on the last, so the A stroke has no way and the kit
draws neither ("whole or not at all"). That is better than half a cross, but the tab is
named for the figure and shows only colors: red, ochre, blue, then blue, ochre, red. At
1280 the cross is drawn and is good (`pascal-reed-2-crossing-1280.png`). A way that
needs no stroke: a small letter under each part where a crossing cannot be drawn
(a b b a), as a list is numbered.

**3. The gloss under a word takes no mark-up.** heart / French and wager / Game, both
widths. The sixth mending lets a note beside the passage mark a word and sets it upright
in the italic; that half of what I reported earlier is mended, and I tried it (see the
reading, 1, below). The gloss under the word is still plain text, italic from end to end
(`plate.js`, `label`). Five of the six glosses with French in them have one form
("French", the word, a colon, its sense) and can be read by it. The sixth, under row
144.0 w103-104, has a French word as its third word with English on both sides and
nothing to tell it by (`pascal-wager-3-game-1280.png`, `pascal-wager-3-game-390.png`).
Wanted: the gloss through `rich` as the note now is, a marked word upright.

**4. heart / tabs / 320: the fourth tab drops to a second row for want of 2 px.** The
four tabs need 266 px with their 14 px gaps and the row has 264
(`pascal-heart-2-against-320.png`). At 360 and 390 they fit. A gap of 13 px in a
window under 340 px would do it for every piece with four short tabs.

**5. Nothing on a plate shows where one fragment ends and the next begins.** heart shows
rows 90.0 and 92.0 under the heading "Fragments 277 and 278"; the numbers themselves are
headings of the hosted text (blocks 89 and 91) and are not rows. The examiner has since
made the caption of Against open with "The second fragment, 278," so no caption now
leans on what the plate does not show, and the fault is slight. On reed the heading
names 347 and 348 over three paragraphs. If a plate could show such a heading as a small
quiet figure at the head of its paragraph, captions and the drawing's red would have
something to point at.

**6. Long plates on a phone** (declared unchanged in KIT-CHANGES, so only for the
record): at 390 heart is 1,153 to 1,257 px tall, reed 1,333 to 1,421, wager 1,497 to
1,586. On reed / Crossing the marked sentence is the last of the passage and the
caption follows it directly, which is the best case; on wager / Voice the first marks
and the caption are about 1,000 px apart.

**For whoever mends `kit/diagram.js`** (none of this shows in my final pictures; I
worked round each):

- a `d.note` handed to `d.hot` as a mark does not go pale with the others, because the
  rule that pales is written for what is inside the svg. A call that sets words over
  several lines as svg text would save each artist writing a line-breaker;
- an svg `<a>` round text underlines it in the text's own color, which looks like a
  mark of the kit's. I switch the underline off on the link;
- the kit calls `draw` about half a second after the tab is clicked, so a drawing
  whose last `at` and fade end at 2.9 s is done 3.4 s after the click. The README's
  "under three seconds" could say from when.

## What in the reading I think is wrong

Not mine to change. One thing is left, and it is the critic's.

**1. The French in the notes of the two word lenses is not marked.** Since the sixth
mending a note beside the passage may mark a word named as a word (`*word*`), and the
page sets it upright in the italic. The notes of heart / French and wager / Game quote
Pascal's French in the middle of English, all in one italic: in the note for 90.0 w11
the quotation begins with a word spelled like an English one, and the eye runs on into
it (`pascal-heart-1-french-1280.png`). The marks I would
make, by note and by word of the note counted from 0, with the stop after a run left
outside the mark:

- heart, lens 1: the note for 90.0 w11, words 2 to 4; the note for 92.0 w5, word 3; the
  note for 92.0 w16, words 2 to 5;
- wager, lens 3: the note for 144.0 w11, word 3; the note for 144.0 w46, word 0; the
  note for 144.0 w103-104, words 2 to 4 and word 5; the note for 144.0 w113, words 2
  to 4.

I tried exactly these in the built copy, photographed the two tabs, and wrote the copy
again from the reading: `marked-notes-heart-1-french-1280.png`,
`marked-notes-heart-1-french-390.png`, `marked-notes-wager-3-game-1280.png`,
`marked-notes-wager-3-game-390.png` (10:15 UTC). The French can then be told at a
glance, and the plates keep their heights. The glosses under the words cannot be marked
yet (fault 3).

**Set right by the examiner while I worked** (seen in the final pictures):

- the two joins (above);
- titles not marked as titles in `where`, `about` and four entries of the list (3, 4, 7
  and 8, counted from 0): all marked now. In the line under the title the title stands
  upright in the italic; in the summary and the list it is italic
  (`pascal-page-1280-0.png`, `pascal-page-1280-3.png`, `pascal-page-1280-4.png`);
- which fragment a caption means: the caption of heart / Against now says (fault 5).

**Checked and found right** (because the drawing leans on them, or because a caption
gives a count): each `read` of the Page lens's seven numbered pieces points at a
heading of the hosted text that bears that fragment's number, and the eighth (order 1)
and `otherSide.read` at paragraphs of fragment 233; the fourteen section names are the
part labels of the hosted text's index, word for word; `sectionsFromThisPage` and
`sectionsInAll` are what the lists give; in wager / Voice the caption's eighteen for
the English (I count 11 and 7 in words 0 to 125 of row 144.0 as built, and no *I*) and
its "four invitations", and in wager / Pairs the three clauses built alike, agree with
the words of the row. The caption's count for the French is the examiner's; I did not
check it. `node build/tools/check-reading.mjs pascal` reports no problems and no
warnings.

One thing I held back on, for the lead to know. The working note `orderNote` says the
`order` of the pieces is the order of writing, as the editors of the electronic edition
judge it. The words that reach the page say less: the `what` calls it "the order a
modern edition gives", and the caption claims an order of writing for 277 and 278 only,
as the editors' judgment. So the drawing does not say "written sixth". Its head is "Page
8, as written" (the manuscript, against "The book, as printed"), and its sentences say
"Sixth in the order given". The examiner's record agrees that the order of the eight is
the editors' inference and leaves the words as they are. If the reading comes to say in
so many words that all eight are in the order of writing, the two places to change are
`heads` and `sayOf` in `site/js/pieces/pascal.js`.

## The final pictures

Taken 3 October 2026, 10:14:56 to 10:17:58 UTC: after reading the whole of the sixth
mending (KIT-CHANGES as written at 09:51:48 UTC, which asks for pictures later than
09:52), after my last change to `site/js/pieces/pascal.js` (10:03 UTC), and after
further changes to the kit at 10:13 and 10:14:38 UTC that KIT-CHANGES does not yet name
(`plate.js`, `draw.js`, `atlas.css` and two tab scripts; they are about two words joined
by a dash, and no row this piece shows has one).

- 10:14:56 to 10:15:25: the trial of marked notes (the built copy changed,
  photographed, and written again from the reading at once);
- 10:15:35 to 10:16:22: the states of the drawing (`page-*.png`);
- 10:16:32 to 10:17:00: the narrow pictures that go with faults 1 and 4;
- 10:17:01: a fresh `node build/pieces.mjs pascal`, from `reading.json` as written at
  09:46:39 UTC;
- 10:17:10 to 10:17:58: `node build/tools/shoot.mjs pascal --out
  remake/works/pascal/shots --page`: 22 pictures of tabs and 14 slices of the page. Its
  last line: `nothing reported; now look at the pictures`.

There are 52 pictures in `shots/`. All of them are byte for byte what the same round
gave at 10:08 UTC, before the kit's last changes, and 45 of them what I had at 09:36
UTC, so nothing in them has moved through the last part of the sixth mending. The two
`before-join-reed-0-reed-*.png` are the only older ones kept (09:24 UTC); they show what
a setting mended. The measures quoted under the faults were taken between 09:56 and
10:01 UTC.

If the reading or the kit is changed after 10:18 UTC, these pictures show the state
before it. Nothing was refused by the permission system.
