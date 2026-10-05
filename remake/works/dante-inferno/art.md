# Art notes for dante-inferno (the artist)

Begun 2026-10-03, 08:53 UTC. Section 8 says when the final pictures were
taken and what the picture tool printed last.

Rules this run works under (they override ARTIST.md): `reading.json`,
`notes.md` and `exam.md` are not edited by me. Anything I would set in the
reading stands in section 4, "Proposed for the reading". Kit faults are
reported, not worked round. Every fact the drawing shows is read from
`lens.facts` when the page runs.

Pictures named below are in `shots/`. Those the picture tool wrote are
named `dante-inferno-<plate>-<n>-<tab>-<width>.png`; those I took for a
closer look begin `zoom-`, `try-`, `tabs-` or `journeys-`.

## 1. What I drew

Plate `ulysses`, lens 3, tab "Journeys", in
`site/js/pieces/dante-inferno.js` (no stylesheet of my own was needed).

The lens says where one word comes in the hundred cantos, and which of
those places call a journey mad. So the form is a line of marks for where
something falls in a work:

- The cantos of the whole poem are one line, part after part, every canto
  as wide as every other (one scale, from the first canto to the last; a
  small break parts the three parts). Under each part: its name, where its
  cantos stand in the count of the whole ("cantos 68 to 100") and how often
  the word comes in it.
- Each of the fourteen places is a mark at its canto. A place said of
  something else is a short ink stroke standing on the line. A place said
  of a journey is a dot on the line with its canto under it (2, 8, 26, 94:
  the figures the caption names).
- From each dot a thin stem rises to a flag that says what the facts say
  of that place: where ("Paradiso 27, lines 82 and 83"), who says it, and
  of what. The first and the last of all the places say so ("the first of
  the 14 times"). The flags step down in the order of the poem, so they
  read as the poem goes and no stem runs through another flag's words. A
  flag too near the end of the line (canto 94) sets its words to the left
  of its stem.
- Red is the one place in this passage: its dot, stem, figure and name.
  Everything else is ink, with the stems in the quiet color of labels.
- Key: dot, "said of a journey: 4 of the 14 times"; red dot, "the one in
  this passage"; line, "said of something else: 10 times".
- Folded under the key, "The 14 places": every place as the facts give it,
  in the order of the poem. On a wide sheet it has all six columns. On a
  phone it has three (place, said by, said of), which fit 264 px without
  scrolling sideways; what it leaves out there the marks show.
- The pointer (or a tap) on any mark says its place, its canto in the
  count of the whole, who says it and of what. It is not needed for the
  four journeys, which are written out, and the table gives the other ten.
- The head of each flag opens its place in the Italian printed here (the
  facts' `read`), ruled under with a hairline as the page's links are
  (`journeys-link-opens-reader.png`: the third flag opens canto 26 at the
  lines of this passage).
- It draws itself in 2.9 s: the line, the marks from the first canto to
  the last, then the four flags in the order of the poem
  (`journeys-draw-in-1600ms.png`, `journeys-draw-in-3050ms.png`).

Every number, name and phrase is read from `lens.facts` when the page
runs: `parts` (part, cantos) and `places` (place, the "canto of ..." key,
said by, said of, a journey, in this passage, read). The counts in the key
and under the parts are counted from `places` as drawn, so the figures and
the marks cannot disagree. `wholePoem` and the `uses` of each part are not
read. Without `parts` or `places`, with a place whose canto cannot be
told, or with no place that says whether it is of a journey, the script
throws and the kit shows its plain table: better that than a drawing
that counts wrongly.

Forms weighed and set aside: a row of bars (there is nothing to measure,
only places); three rows, one to a part (the caption counts cantos through
the whole poem, "canto 94", which one line shows and three rows hide; it
is also the Paradiso piece's form); the four journeys as a table under the
line (correct, but the eye must carry a number from line to table; a stem
does that work); brackets joining the two places of each journey (a
bracket from canto 26 to canto 94 would say those cantos belong to it).

Widths looked at: 1440, 1280, 1024, 768, 390, 360 and 320 (the sheet is
607 px wide at 1280 and 264 at 320).

## 2. Every screen, tab by tab

Looked at four times: at 08:54 UTC, before any drawing; from 09:27 to
10:00, after the kit's fifth and sixth mendings and the examiner's mends;
from 10:46, after the seventh mending; and in the final pictures
(section 8). Every tab at 1280 and 390, and at 360 and 320 as the kit's
notes ask. K1 to K9 are the kit's faults, set out in section 3.

**gate, The writing over the gate**
- Rhyme. Right at 1280, 390 and 360: seven arcs in the four colors of the
  four rhymes, and the key's row of letters. The arcs cross, as rhymes
  that interlock must, and none runs along another. At 320, where two
  lines turn, the arcs become brackets: K2.
- Figure. The two spines and the three rules read at once. The left
  spine: K4.
- Word. Right. The notes beside the passage are larger and darker since
  the sixth mending and read well. Two notes are headed by the same word
  (rows 2.1 and 3.2); they stand in the order of the passage and their
  glosses differ, so they can be told. Not a fault.
- Compare. Right. At 320, where row 2.2 turns, pair 4 has no stroke and
  its number stands at both ends, which reads.

**francesca, Francesca's three sentences**
- Sentence. Right at every width. A span inside another is ruled lower.
- Figure. Right. The longer arc under row 34.0 comes within 9 px of the
  English line at 390 and does not touch it.
- Beat. Right at 1280, 390 and 360. The two dots side by side on the
  sixth and seventh syllables of row 33.0 show what the caption says of
  them. At 320 the line turns between those two syllables: P2 in
  section 4.
- Word. Right. Three glosses stand in a row under row 33.0 at 390, with
  the kit's hairline between the first two.

**ulysses, Ulysses to his crew**
- Antithesis. The parts are ruled in their colors and nothing joins the
  two that are set against each other: K1.
- Metaphor. First look: the stroke from row 41.1 word 1 to word 6 dipped
  onto the English line under it, and joined two things the caption does
  not join. ~~Fault.~~ Gone: the examiner set `join` to `[[0,1],[3,2]]`
  at about 09:16. The two arcs now stand 5 px clear of the English line
  at 1280 and at 390 (`zoom-ulysses-metaphor-1280.png`,
  `zoom-ulysses-metaphor-390.png`).
- Word. Right.
- Journeys. Mine: sections 1, 5 and 6.
- The row of tabs: K3.

**The page** (title, summary, what Auden said, more from Auden, read on,
sources): right at both widths, but for K5.

**Where a line turns.** Measured on every tab after the seventh mending.
At 390 and at 360 no line of any passage turns. At 320 five do, on every
tab: rows 2.2, 3.2, 33.2, 34.2 and 40.1, each after its comma or its
stop, and each leaves the phrase a tab marks whole on one line. A turned
line that the tab does not mark now keeps its two parts close, which
reads well. A sixth turns on one tab only: row 33.0 on the Beat tab at
320, where the room for a remark's number takes the line over the
measure (it stands on one line again from 330). For that one I propose a
`turn`: P2.

**How long the plates are on a phone.** With the English under every
line a passage of nine or twelve lines is 18 or 24 lines of type. At 390
the gate plate is 1,695 to 1,895 px tall, francesca 1,540 to 1,830,
ulysses 1,420 to 1,520 (Journeys 1,005). The caption begins about
1,300 px down on gate, 1,290 on francesca, 985 on ulysses. So the marks
of gate / Figure (rows 0.0 to 0.2, at 90 to 260 px) and of francesca /
Figure (row 34.0, at 475 to 525 px) are never on a phone's screen with
their caption or key. The kit's notes say a long plate is long on a
phone, so this is set down and not asked for. I tried `"beside": true`
in a copy changed in flight (`try-beside-francesca-figure-390.png`,
`try-beside-francesca-figure-1280.png`): on a phone the English block
then stands between the Italian and the caption, the plate is longer
(1,687 px against 1,561) and the reader loses the English under each
line. Not proposed.

## 3. The kit's faults, worst first

The numbers are names, kept from earlier states of this file. The order
is the order of harm as the page stands after the seventh mending and
its mend of 11:06 UTC. K8 is gone and K7 is answered; they stand last.

**K1. ulysses / Antithesis / 1280 (every wide plate): the stroke of the
figure is never drawn.** `draw` is `pair`, and part A (row 39.1, words 4
to 6) should be joined to part B (row 39.2, words 2 to 5). Only the rules
under the words show (`dante-inferno-ulysses-0-antithesis-1280.png`).
Cause: in `lens-figure.js`, `way()` returns nothing unless `near()`
passes, and `near()` allows a stroke over the wider gap only when
`q.rowAt - p.rowAt === 1`. `rowAt` is the place of a row in `ctx.rows`,
and on a plate with the English under each line `plate.js` puts the
English row there between two lines of the Italian. So the difference
is 2 and never 1. The gap between the two lines is 81 px at 1280 (band
32): over `band + 8`, under `band + 70`, so it is that one test that
refuses it. This holds for every plate whose version is set line under
line, which is why it stands first: one mend serves many pieces. Served
to my test browser with that test loosened to `<= 2` (nothing written
to the kit), the overlay has five strokes where it had four, and the
fifth runs clear of the English line:
`try-antithesis-1280-if-rows-are-neighbors.png`. At 390 there is no
clear way past the English line, so color alone tells the two there,
and should. Still so after the seventh mending: its rule for the pairs
of an antithesis draws a pair where a way is found, and none is looked
for here.

**K3. ulysses / the row of tabs / 320 to 375: the fourth tab stands
alone on a second row.** The four labels are 86.6, 80.6, 44.8 and
73.6 px wide. With their gaps they need 327.6 px (gap 14, windows from
352) or 315.6 (gap 10, windows to 351). The row has 264 px at 320, 304
at 360, 319 at 375 and 327.7 at 390, where it fits by a tenth of a pixel
(`try-tabs-360-as-it-is.png`, `tabs-320.png`, and every picture of this
plate at 360 and 320). 360 and 375 are the common widths of a phone.
These are the longest labels of any plate on the site (30 letters; the
next has 27); the tabs of the other two plates need 249 and 241 px and
keep to one row at 320. The seventh mending's closer tabs do not reach
it (K9). A shorter label mends every width from 340 up: P1 in section 4.

**K9. Every plate / the row of tabs / windows under 352: the letters
are not set closer, though the seventh mending means them to be.** In
`atlas.css` the rule `.plate-tabs button{letter-spacing:.14em}` (line
136, inside `@container (max-width:319.9px)`) is followed by
`.plate button{... letter-spacing:.17em ...}` (line 137). The two
selectors weigh the same and the later wins. At 320 the letter-spacing
of a tab is 1.955 px, as at 390, and each label is as wide as at 390;
only the gap of 10 px takes effect. Put after line 137, or given more
weight, the rule would work. On this plate it would still not be
enough: the four labels would need 305.4 px of 264 (274.0 with the
label of P1).

**K2. gate / Rhyme / 320: two brackets run together.** At 320 two lines
turn, so the rhymes are joined by brackets. The upright of the third
rhyme's second bracket (row 2.0 to row 2.2) stands at 258.8 px from the
plate's edge, and that of the fourth rhyme's first bracket (row 2.1 to
row 3.0) at 259.9 px. They are 1.1 px apart for 126 px, and with their
rounded ends they are one line in two colors for 142 px
(`zoom-gate-rhyme-320.png`, `dante-inferno-gate-0-rhyme-320.png`).
Cause, as far as I can see: in `lens-rhyme.js` each bracket is set out
from the longest line among its own rows
(`Math.max(...reach.slice(from, to + 1)) + pad`) and a lane adds 6 px.
Where the two longest lines differ by about that step the two lanes
fall together. It came with the mend of 09:46, which turns row 2.2
here; before it the fourth rhyme's bracket stood 3 px outside the plate,
and that fault is gone. At 1280, 390 and 360 the rhymes are arcs and no
two run along each other.

**K4. gate / Figure / every width: the left spine's ticks all but touch
the first letters** of rows 0.0, 0.1 and 0.2 (the opening quotation mark
of 0.0). The spine stands 7 px left of the lines and its ticks are 5 px,
so they end 2.0 px from the letters, measured at 1280, 390 and 320
(`zoom-gate-figure-1280.png`, `zoom-gate-figure-390.png`). The right
spine stands well clear. In `lens-figure.js` the room on the left is
measured from the stage's edge, where there is none, though the plate's
own margin is there (61 px at 1280, 12 at 390). A shorter tick on that
side, or the spine a few px further out, would clear it.

**K5. The page / "What Auden said" / every width: the quotation ends
its first line on a short word.** At 1280, 390 and 360 it is set in two
lines of eight words, and the first ends on the word of two letters
that opens the last clause (its word 8, counted from 1;
`dante-inferno-page-1280-0.png`, `dante-inferno-page-390-0.png`). At
320 it is three lines and the first ends on a word of one letter (its
word 5). A heading is passed through `tie()` so that such a word keeps
to the next. The quotation is balanced by the stylesheet and not tied
(`piece.js`, where the `blockquote` is made). Nothing in Auden's words
is to change: only where the line ends.

**K6. A folded table of many columns on a phone.** `d.figures` with the
six columns of the facts made a table wider than the 334 px sheet. It
scrolls sideways, with nothing to show that it does: the sixth column is
out of sight and the fifth head is cut at the edge
(`journeys-table-390-six-columns.png`, kept from 09:50 UTC). I give a
narrow sheet three columns, as `castle.js` and others drop columns
(section 5), so this is no longer seen here.

**K7. The plain table that stands in for a drawing whose script fails**
prints the key `wholePoem` as a row's name and a row named `places` with
nothing in it (`journeys-fallback-390.png`, made by taking `parts` out of
the facts in flight). The examiner notes the same in `exam.md`.
Answered: the seventh mending's notes say this table is seen only if a
script fails and is left plain. Nothing more is asked.

~~**K8. francesca / every tab / 320: the English under row 33.2 turns
after the conjunction that follows its comma,** not at the comma.~~
Gone with the seventh mending: it now turns at the comma on all four
tabs (`dante-inferno-francesca-0-sentence-320.png`).

## 4. Proposed for the reading

Two things. I have not touched `reading.json`.

**P1. The label of the Journeys tab.** In plate `ulysses`, lens 3 (kind
`shape`):

```
"label": "Journeys"   ->   "label": "Poem"
```

Why: K3. From 320 to 375 the four tabs of this plate do not fit one
row, and at 390 they fit by a tenth of a pixel, so a phone that sets its
type a hair wider will break the row there too. With "Poem" the row
needs 294.8 px (282.8 on windows to 351) and stands on one line from 340
up: at 360 with 9 px to spare, at 390 with 33. At 320 the fourth tab
still stands alone, whatever the label. Pictures, both at 360, the
second from a copy of the built piece changed in flight (nothing
written): `try-tabs-360-as-it-is.png` and
`try-tabs-360-label-poem.png`. "Whole", the Paradiso piece's word, is
3 px too wide at 360.
The cost: "Journeys" says more of what the tab holds. "Poem" says that
the tab looks at the whole poem, as the neighbors' tabs do ("Whole",
"Mountain"), and the line under the tabs says the rest at once. If the
kit comes to set a long row of tabs closer on every phone, keep
"Journeys". The script does not read the label: either word draws.

**P2. Where row 33.0 turns on the narrowest phones.** On plate
`francesca`:

```
"turn": { "33.0": 4 }
```

Why: on the Beat tab at 320 this line must turn, because the room for a
remark's number takes it over the measure. Left to itself it turns
after word 3, which is between its sixth and seventh syllables. Those
are the two accents that the caption and the first remark say stand
side by side: the one now ends a line and the other begins the next
(`zoom-francesca-beat-320.png`). Turned after word 4 (words are counted
from 0, as the checker's proof counts them, so the first part is words
0 to 4), the first part holds the run of accents to the sixth and the
seventh beside it, and ends on the word the caption says is brought out
(`try-francesca-beat-320-turn-after-word-4.png`, from a copy changed in
flight). It acts nowhere else: on the other three tabs, and on every tab
from 330 up, the line stands whole, with the `turn` or without it.
The cost: a second part of one word. I weighed a turn after word 2
(`try-francesca-beat-320-turn-after-word-2.png`): the two accents then
stand together in the second part, but the run to the sixth is broken,
and words 2 and 3, which the Word tab glosses as one phrase, are parted.
This is small: one line, one tab, the narrowest phones. To leave it is
no great harm.

Looked at and not proposed:
- `heading`: the three headings read well and each stands on one line
  down to 320.
- `turn`, elsewhere: the other five lines that turn at 320 turn at
  their comma or stop (section 2).
- `beside`: tried on a picture and worse on a phone (section 2).
- `join` on ulysses / Antithesis: no `join` can bring its stroke, because
  the stroke is refused in the kit before the join is looked at (K1).
  Tried in flight with `[["A","B"]]` and with `[[0,1]]`: four strokes, as
  before. When K1 is mended the plain `pair` joins the right two, A to B.
- `join` on ulysses / Metaphor: the examiner's `[[0,1],[3,2]]` draws
  well (section 2). I had meant to propose `[[0,1]]` and withdraw it.
- `speakers`: no speaker's name stands over a speech on these plates, so
  none needs a gloss.
- `facts`: the drawing needs no key that is not there.

## 5. Faults that were mine, and mended

- The words under the three parts broke badly at 320 ("34 cantos, 5" and
  then "times"). Now: the name, "cantos 1 to 34", "5 times", each on a
  line, with the number tied to its word.
- The stems were ink and read as a frame round the flags. Now the quiet
  color; red only for this passage.
- The drawing-in ran to 2.96 s and the strokes grew downward out of the
  air. Now 2.9 s at most, and each stroke rises from the line.
- With trial facts that put three journeys in the last cantos, a flag was
  squeezed to 48 px and ran off the sheet. Now the flags are laid out by
  one rule for any facts: the first ones set their words to the right
  and step down in the order of the poem, the rest set theirs to the
  left and step down from the last to the first, and the way that leaves
  the narrowest flag the most room is taken. The real facts lay out as
  before.
- The folded table: six columns on a phone (K6), and "line" parted from
  its number at the end of a cell's line. Now three columns on a narrow
  sheet, and a number tied to the word before it
  (`journeys-table-390.png`, `journeys-table-320.png`,
  `journeys-table-1280.png`).

## 6. Trials of the drawing

The facts were changed in flight, in the copy the test browser was
given. Nothing was written to the site.

- Journeys at cantos 2, 8, 12, 84, 89 and 94, the place in this passage
  not a journey, no `read`, one place with no speaker:
  `journeys-trial-crowd-390.png`, `journeys-trial-crowd-1280.png`. Six
  flags, none cut off, no stem through any words; a red stroke for this
  passage; the key says 6 of the 14; the heads are not links.
- A second place in canto 26 and a journey in canto 100:
  `journeys-trial-same-canto-390.png`. The second stroke stands beside
  the dot, and the dot in the last canto stands whole at the line's end.
- No journey at all, and no "canto of ..." key:
  `journeys-trial-none-390.png`. Strokes only; each canto is worked out
  from the place's own name; the key has no row for a dot.
- No `parts`: the script throws `facts: no parts` and the kit shows its
  plain table (`journeys-fallback-390.png`, K7). The same with a place
  that has no canto, and with the key "a journey" taken from every place.

Its limit: every flag is a few lines of words, so more than five or six
journeys make a tall sheet on a phone, and five within ten cantos at one
end of the line would leave the narrowest flag under 100 px.

## 7. The reading

I think nothing in the reading is wrong. What I checked, and what the
lead may want to know:

- **The facts of the Journeys lens agree with themselves and with the
  caption.** Checked by script on the built copy at the final build. The
  cantos of the three parts add to 100. There are 14 places: 5, 3 and 6
  in the three parts, which is each part's `uses`. Four are marked as of
  a journey, which is `wholePoem`'s count, and they stand in cantos 2,
  8, 26 and 94, the four the caption names. Every "canto of 100" is the
  canto that the place's own name gives. One place is marked as in this
  passage, and its line is the line of row 41.1, where the Word and the
  Metaphor tabs mark the word. (Whether the poem has the word in these
  fourteen places is the examiner's to say, and `exam.md` says it has.)
- **Every `read` points at the right place.** Each of the fourteen names
  the tercet that holds its line, and the four on the flags open the
  reader there (followed one by one; `journeys-link-opens-reader.png`
  shows the third). The other ten cannot be reached from the page: a
  folded table never shows `read`, and a stroke 1.3 px wide is no link
  for a finger. Not a fault. If the kit's table came to link a row to
  its `read`, they would be reachable.
- **`wholePoem` and each part's `uses` are not read by the script,**
  which counts the places it draws. They may be renamed or dropped
  without harm to the drawing. `wholePoem` shows only in the stand-in
  table (K7).
- **The `note` on the first and on the last place** is a working note
  and never reaches the page. The words "the first of the 14 times" and
  "the last of the 14 times" on the flags come from the order of the
  places in the poem, which the script sorts by canto. They agree with
  the notes.
- **ulysses / Metaphor.** With the examiner's `join` the tab has two
  arcs of one kind: from part 0 to part 1 (the thing and the name it is
  given) and from part 3 to part 2 (the word that qualifies the second
  name). One kind of stroke says two things. The caption tells them
  apart, and I would leave it.
- P1 and P2 change a tab's word and where one line turns. Neither
  changes what the reading says. K5 is about where a line of Auden's
  ends on the page, not about his words.

## 8. Refusals, the final pictures, and the tool's last line

**Refused:** nothing. The permission system refused no action of mine.
Once, at about 11:27 UTC, a write to this file was held back because the
checker of permissions could not be reached; its notice said to try the
same action again, and the same write then went through.

**The seventh mending (10:40 UTC) and its mend (11:06 UTC).** Read. No
line of the three plates, Italian or English, has a dash inside it, so
the fault of 10:40 to 11:06 could not show here. Every picture was taken
again after it all the same.

**The final pictures.** Built at 11:30:51 UTC on 3 October
(`node build/pieces.mjs dante-inferno`). The checker said "no problems"
and "no warnings". The pictures were taken from 11:30:58 to 11:35:07
UTC, the picture tool's last of all. No file of the kit changed between
11:08 and the end of the run (their times, read after it). `reading.json`
was last changed at 09:40:08.

- 91 pictures in `shots/`: 48 of the tabs (twelve tabs at 1280, 390, 360
  and 320), 17 slices of the page (1280 and 390), and 26 closer looks
  and trials.
- One is older and kept on purpose: `journeys-table-390-six-columns.png`,
  from 09:50 UTC, which shows K6 as it was before I gave a narrow sheet
  three columns.
- Set against the run before it (10:46 to 10:53 UTC, after the seventh
  mending), 88 pictures are the same byte for byte. The two of the
  drawing-in differ by their timing, and one is new (the trial of P2).
  I looked at every picture when it was first taken in its present
  state, and at these three in this run.

**The picture tool's last line,** for `--widths 360,320` and then for
the plain command with `--page` (1280 and 390), each time:

```
nothing reported; now look at the pictures
```

**The script:** `site/js/pieces/dante-inferno.js`, 214 lines,
`node --check` clean. Since 10:11 UTC only a comment in it has changed.
No stylesheet of its own.
