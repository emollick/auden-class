# The drawings and the held changes: second round (critic-draw-2)

Critic of part A, items 1 to 3, of `review/phone/BRIEF-2.md`. 4 October
2026. I edited nothing. My pictures are in `review/phone/draw2/`
(`f…` Force, `b…` Book, `bs…` Blake `sentence`, `bp…` Blake `proverbs`,
`ac…` Agamemnon `cloth`, `ay…` Agamemnon `yoke`; then the tab's number,
the width, `new` or `live`, and the part). The picture tool was run
eight times; nothing was refused. A line of a work is named here by its
row and the number of its word, counted from 0.

## In short

- The two Adams drawings are clear and clean at 1280, 390 and 320. No
  label touches a bar, a line or another label, nothing in either
  drawing is cut off, and no type is under 10.5 px. Both are better than
  the drawings they replace.
- Every number, year and name the drawings print agrees with the facts,
  with the captions and with the folded tables. I also counted the text
  again by script: all 35 rows of the count, the two sums, the 102 and
  the three zeros agree.
- One thing is cut off: the folded table under Force at 320 px loses its
  last column, the count itself.
- The four turns in Blake and the one in *Agamemnon* are right at 390
  and at 320, and nothing else on those plates is worse for them, with
  one small price on Blake's `sentence` (fault 4).

## The faults, worst first

**1. Force, the folded table at 320 px: the column "Times" is cut off.**
`draw2/fold-force-320-0.png` and `-1.png`, right edge. The head shows
"TIM" and not one count can be seen, because the counts are set to the
right of a column that runs about 14 px past the plate. The table can
be pushed sideways with a finger, but nothing says so, and the column
that is lost is the one the drawing is about. By my measure the table
needs about 278 px and the plate gives 264, so this holds for windows
narrower than about 334 px. At 390 the table fits
(`draw2/fold-force-390-0.png`).
*Mend:* give the table's cells less room between columns on a narrow
plate (the 18 px to the right of each cell could be 10 px there, which
saves 24 px), or head the first column more shortly, since "CHAPTER"
in spaced capitals makes a column 80 px wide for numbers of two figures.
Then look at it again at 320. The table under Book has three narrow
columns and by the same measure needs about 210 px, so it fits; I had
no run left to photograph it at 320.

**2. Agamemnon, the heading of `yoke`, on a browser that does not
balance a heading: the last word would stand alone.** Not seen; reasoned
from the stylesheet and the kit. In these pictures (Chromium) the
heading is right: one line at 390 (`plates/agamemnon-yoke-0-figure-390`,
7 px to spare), and at 375, 360 and 320 it turns after its comma
(`draw2/yoke-head-375-0.png`, `yoke-head-360-0.png`,
`ay0-320-new-head.png`). But the turn at the comma is the work of
`text-wrap: balance` alone (`.plate-ttl`, atlas.css line 150). `tie()`
in `kit/draw.js` keeps a short word with the word after it, and nothing
keeps the heading's last word, of two letters, with the word before.
The heading is 326 px long and about 307 px without its last word
(measured on `draw2/ay0-390-new-headz.png`). Where balance is not known
(Safari before 17.5, so an iPhone 8 or X, which stop at iOS 16, and any
phone not brought up to date), a window from about 364 to 384 px wide,
which takes in 375, would set seven words on the first line and the
last word alone on the second. At 360 the last two words would go down
together, which is no fault. This is
the one-word second line for which the artist first shortened the
heading (`remake/works/agamemnon/art.md`, R2). The live heading is short
enough never to turn.
*Mend:* a no-break space between the heading's last two words, in the
reading; or, for every heading at once, let `tie()` keep a last word of
three letters or fewer with the word before it.

**3. Agamemnon, `cloth`, row 25.0 at 320 px: the line turns inside its
verb.** `plates/agamemnon-cloth-0-figure-320`, the sixth speech
(`draw2/ac0-320-new-b.png`, middle). The row has no `turn`. It turns
after word 3, between an auxiliary and its participle. It does the same
on the live site, so this is not from the change; but the five rows
around it were given turns and this one was passed over.
*Mend:* `"25.0": 4`. The line then turns after the participle and
before the preposition, the verb whole in the first part and the phrase
the Word tab underlines whole in the second. By my measure both parts
fit at 320 (about 190 px and 127 px of 264).

**4. Blake, `sentence`: the type of the passage is a size smaller, and
at 320 two notes on the Word tab now meet.** The price of the new turn,
which holds seven words on one line. Measured on the same half-line
(row 32.1 to its comma, Question tab), the line is 514 px of picture
for 534 at 390 and 405 for 436 at 320: about 21 px of type for 22, and
at 320 about 16.5 px, the kit's floor, for 18. At 320 the passage is
now plainly smaller than the caption under it. On the Word tab at
320 the two notes under the last half-line now run together with a bar
between them (`draw2/bs2-320-new.png`, foot of the passage; live:
`bs2-320-live.png`). Both still read. I would keep the turn and mend
nothing; a shorter first note there would part them again.

**5. Book at 320 px: the two chapters beside the band lose their
titles.** `plates/adams-born-2-book-320` shows "chapter 20" and
"chapter 21" alone, where 390 has "Failure (1871)" and "Twenty Years
After (1892)" under them. The script uses one wording on both sides,
and the longer title misses its room by about 7 px. The pair of titles
is worth keeping on the narrowest phones. Also there, the tail of the p
in "chapter 20" comes within 1.5 px of the band (`draw2/b320-new-z1.png`).
*Mend:* one more wording between the two, the number and under it the
title without its year (the years stand on the axis beside them), and
lift the label over the band by 2 px.

**6. Smaller things, none of which should hold the update.**
- Force at 390 and 320: the last bar has no number. "35" gives way to
  "33" because the two would stand closer than 8 px. Right as it is:
  the caption speaks of chapter 33, and the head line says thirty-five.
- The tables: the row of chapter 25 is not marked in the table under
  Force, and neither table shows where the twenty years fall (between
  rows 20 and 21). A red number for chapter 25 and a rule between rows
  20 and 21 would tie each table to its drawing.
- The table under Book has a column "Words" that the drawing does not
  draw and its heading ("The chapters and their years") does not name.
  It agrees with what a touched bar says. Keep or cut; it is not wrong.
- Book's head line turns after a preposition at 390 and 320, and after
  an article at 1280. The same on the live site. `tie()` on the head
  line of a drawing would mend it.

## 1. The two Adams drawings, label by label

### Force (`plates/adams-dynamo-3-force-1280`, `-390`, `-320`)

*At a glance.* Yes, at all three widths. In a sentence: the word is
rare in the twenty chapters to 1871 and common in the fifteen from
1892; the chapter of the passage is the first tall bar and chapter 33
the tallest.

*Every label, enlarged* (`draw2/f1280-new-left`, `-right`, `-foot`;
`f390-new-top`, `-low`; `f320-new-top`, `-mid`, `-low`), with the gaps
measured in the pictures:

- "A Dynamic Theory of History, 71 times": at the top of the tallest
  bar, ending 8 px to its left. Clear at all three widths.
- "The Dynamo and the Virgin, 42 times" at 1280 and 390; "42 times" at
  320, where the title has no room. Ends 8 px left of the red bar. No
  bar of the early chapters comes near it.
- Under the line: 1, 20, 21, 25 in red, 33; and 35 at 1280 only. At 320
  "20" and "21" stand 15 px apart.
- Under each stretch three lines: the years, the times, the words. At
  320 the two blocks stand 61 px apart.
- The key, the line that speaks, the fold's heading: each on its own
  line, with room.

*Type.* 13 px italic and 12.5 px figures in the drawing; the fold's
heading is 10.5 px (its capitals measure 7 px, `draw2/f390-new-sum.png`).
Nothing is smaller.

*Edges.* The last bar ends on the plate's inner margin. Nothing passes
it, at any of the three widths.

*Touched* (`draw2/force-said-390-0.png`): the bar of chapter 33 stays
dark, the rest go pale, and the line says "Chapter 33, A Dynamic Theory
of History (1904): 71 times in 5,090 words", on two lines, in the room
kept for it, so nothing under it moves. Where the window is a phone's
the idle line says "Touch a mark to read what it stands for" (seen on
Book, `draw2/book-said-390-0.png`).

*The fold at 390* (`draw2/fold-force-390-0.png`, `-1.png`): Chapter,
Title, Words, Times; 35 rows; four long titles take two lines. It reads
well. It agrees with the bars: I read the bars against the column, the
tallest (33), then 25, 34, 29, 32, and the three chapters with none
(8, 13, 14), where no bar stands. At 320 it is cut (fault 1).

### Book (`plates/adams-born-2-book-1280`, `-390`, `-320`)

*At a glance.* Yes. In a sentence: the chapters step down the years
from 1838 to 1871, twenty years have no chapter, and in them he married
and his wife died; the chapters begin again in 1892; and in his own
sentences he never writes *I*.

*Every label, enlarged* (`draw2/b1280-new-a` to `-d`; `b390-new-a` to
`-c`; `b320-new-0`, `-a`, `-b`, `-c`; `b390-new-bars1`, `-bars2`;
`b320-new-z1`, `-z2`):

- Down the left: 1838, 1871, 1872 and 1885 in red, 1892, 1905. "1871"
  stands over the band's edge and "1872" under it, 17 px apart.
- "chapter 1" beside the first bar. "chapter 35" under the last, 4 px
  over the rule that closes the drawing.
- Beside the band: at 1280 one line each, "chapter 20, Failure (1871)"
  over it and "chapter 21, Twenty Years After (1892)" under it; at 390
  the number and under it the title; at 320 the number alone (fault 5).
  Each stands 6 px from its bar. The one over the band clears it by 2
  to 5 px, the one under it by 3 px.
- In the band: the two red notes at their years, on the left;
  "1872 to 1891" and "no chapter" on the right, where the notes leave
  room. At 320 the first note ends under the place where the band's
  name begins, 15 px above it. Clear.
- The bars. I read each against its years (`b390-new-bars1`,
  `-bars2`): chapters 2 and 3 end level; 9 and 10, 11 and 12, 26 and
  27, 28 and 29, 30 and 31, 33 and 34 stand in pairs; 23 is five years
  tall. The bar of chapter 21 begins where the band ends.
- "In the storyteller's own sentences", then 0 *I*, 0 *me*, 0 *my*,
  102 *Henry Adams*. At 320 the name ends 2 px inside the margin.

*Type.* 13 px and 12.5 px; the small heading and the fold's heading
10.5 px; the four names 18 px; the four figures 34 px.

*Edges.* The band runs from margin to margin, as it should. Nothing is
cut.

*Touched* (`draw2/book-pressed-390-0.png`): the bar of chapter 23 stays
dark and the line says "Chapter 23: 1894 to 1898, 5,435 words".

*The fold at 390* (`draw2/fold-book-390-0.png`, `-1.png`): Chapter,
Years, Words; 35 rows. It reads well and agrees with the bars.

(The numbers, the comparison with the live drawings, Blake and
Agamemnon follow below.)
