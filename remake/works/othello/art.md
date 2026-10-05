# Othello: the artist's notes

Begun on 3 October 2026, 05:58 UTC. An examiner is at work on this
piece at the same time (remake/works/othello/examiner.txt, 05:54 UTC),
so nothing in `reading.json` was written back whole.

## What the piece has

Three plates, ten lenses. One shape lens: plate `lie`, tab 4, "Play"
(how much Othello and Iago speak in verse and in prose, act by act).

## First look (before any drawing)

    node build/pieces.mjs othello
    node build/tools/shoot.mjs othello --out remake/works/othello/shots --page

Last line: "nothing reported; now look at the pictures".

Words of the play are pointed at by row and word number, as the proof
prints them (`node build/tools/check-reading.mjs othello`).

### Faults that are the kit's to mend, worst first

This is the list as it stood at the first look. After the second
mending (remake/KIT-CHANGES.md) every tab was photographed again. A
fault that is gone is struck through; what is left of the others is
under "Still there after the second mending", further down, with the
new pictures. The file names in this first list are of pictures since
taken again.

K1. **A word that cannot turn runs out of a small phone.** (In part
gone: see S1 below.) Plate `lie`,
every tab that shows the passage, 360 px and under
(the probe at 360: "the page is 2px wider than its window"; at 320:
42 px). Row 49.0 holds two tokens made of words joined by dashes with
no space: token 18 (three words, 38 characters, 334 px wide in the
phone's 20 px type) and token 65 (four words, 313 px). Neither can turn
at a dash. At 390 px token 18 is exactly as wide as the column (334
px); at 375 px it runs 15 px past the column; at 360 px it runs past
the window, and the whole page then scrolls sideways. The same two
tokens leave ragged lines at every width
(`othello-lie-0-word-390.png`, `-1280.png`): at 390 px tokens 16-17
stand alone on a line before token 18, token 64 stands alone on a line
before token 65, and token 66, the last, stands alone on the last
line; at 1280 px the second line of the speech (tokens 13-17) stops a
third short, like the end of a paragraph. Mend: in a prose row let the line
turn after a dash that joins two words (the kit already wraps each
half in `.wp`).

K2. **The chain does not draw the joins the figure is named for.**
Gone after the second mending: all five joins from speech to speech
were drawn then, and the two arcs, but the new strokes crossed the
speakers' names (N1 below). Back in part since the changes of 07:38
to 07:52: three of the five are left out again, four on a phone (N2
below).
~~Plate `echo`, tab Figure, both widths (`othello-echo-0-figure-1280.png`,
`-390.png`). The chain should run from the last word of one speech to
the first word of the next: rows 98.0 to 100.0, 100.1 to 102.0, 102.0
to 104.0, 108.0 to 110.0, 110.0 to 112.0. None of the five is drawn.
The only strokes are the two arcs inside rows 100.0 and 104.0, which
the poet's notes call the lesser joins. Counted in the page: ten
underlines and two arcs. Cause: `near()` in `lens-figure.js` allows a
gap of band + 8 px (50 px here), and a speaker's name between two rows
makes the gap about 64 px.~~

K3. ~~**Only one arc of the crossing is drawn on a desktop.**~~ Gone
after the second mending: both strokes were drawn and crossed, at 360
px and up (counted in the page, the last time at 08:16 UTC). Back in
another form with the fifth mending: at 1280 px neither stroke is
drawn now (N3 below).
~~Plate `lie`, tab Figure, 1280 px (`othello-lie-1-figure-1280.png`). Row 49.0
is prose and its four parts fall on three lines of type: word 20 ends
one line, words 22-23 and 29-30 stand on the next, word 34 begins the
third. The inner arc (tag B) is drawn; the outer (tag A, word 20 to
word 34) is not, so the picture shows a pair, not a crossing. At 390 px
the two halves happen to fall on two lines, one under the other, and
both strokes are drawn and do cross (`othello-lie-1-figure-390.png`).~~

K4. **On a phone the marks and their caption are never on screen
together.** (Left as it is by the lead's decision: see S4 below.)
At 390 px the passage of `echo` is 901 px tall and its
caption begins 1,020 px below the top of the plate; `lie`: 1,198 px
and 1,318 px; `light`: 661 px and 780 px (measured in the page). In
`lie` every line of the prose speech is given the room for marks, 61
px a line for twelve lines.

K5. ~~**A verse line that turns on a phone turns like prose.**~~ Gone:
row 39.0 stands whole at 390 and 360 px, and at 320 px it turns with
the hanging indent. ~~Plate
`lie`, every tab, 390 px. Row 39.0 is verse (nine tokens). Because the
plate also holds prose rows it is set as prose (`is-prose`): the line
turns after token 6 and its last two tokens stand flush left, 53 px
lower, with no hanging indent. On plate `echo` the same
case (row 112.2) turns with the indent.~~

K6. ~~**The place is said twice in the head of each plate on a
desktop.**~~ Gone, by my own change after the third mending: the
place now stands by the heading at every width, so I took it out of
the three headings. What that leaves for the lead is S2 below.
~~All three plates, 1280 px. The kit sets the part's name in italics
after the heading, and each heading already ends with it. Under 600 px
the italic name is hidden, so the heading must keep the act and scene:
I left the headings as they are. Mend: leave the italic name out when
the heading already holds it.~~ (The same doubling stands in
`henry-iv-2`, and `volpone` is close to it.)

K7. ~~**The number of a remark touches the next word.**~~ Gone: on the
Beat tab each number has a little room after it, and the other two
tabs no longer keep that room. ~~Plate `echo`,
tab Beat, 390 px (`othello-echo-1-beat-390.png`): remark 2 after word 1
of row 100.0 and remark 4 after word 2 of row 112.0 stand with no
space before the next word. At 1280 px there is a hair of room. On
the other two tabs the same two places show as a double word space.~~

K8. Small. (Still there: S3 below.) Plate `echo`, 390 px, row 112.2: the turned half of the
line stands as far below its first half as the next row would, so only
the indent says that it is one line.

## Still there after the second mending

Built and photographed again on 3 October 2026, 07:05 UTC, every tab
at 1280 and 390 px; at 07:17 UTC, after the third mending (07:10) and
my change of the headings (S2); at 07:58, 08:19 and 08:29 UTC, during
and after what the note of changes calls the fourth mending (07:40 to
08:25; "the changes of 07:38 to 07:52" below are its first part); at
09:00 and 09:15 UTC, after the fifth mending (08:35 to 08:55); and a
last time at 09:54 to 09:56 UTC, after the sixth mending (09:20 to
09:52) and after I had read the note of changes to its end. **The
pictures named here are those of 09:54 to 09:56 UTC.** Every number
given was measured in the page after the fifth mending, at 390, 360
and 320 px as well as 1280, and those of S1 and S4 once more at 09:40.

What the sixth mending did to this piece: the notes of the Word tab
and the remarks of the Beat tab are larger and darker at 1280 px; the
summary at the head of the page is headed "The passages"; on a phone
some rows stand one pixel lower. Of what is listed below only one
small thing came with it (a note at 1280 px that now ends with one
word alone on its last line), and nothing went.

What the fifth mending did to this piece:

- Plate `lie`, 1280 px: the paragraph of prose (row 49.0) and the short
  prose row 45.0 are set at 26 px, the verse at 35.3 px as before. The
  speech is eight lines, not twelve, and the plate 1,241 px tall, not
  1,639. Most of the ragged lines of S1 are gone at that width.
- A line of verse now turns after the stop nearest its middle. That is
  where eight of my ten `turn` settings turned it, so I took those
  eight out (see "What I changed in `reading.json`").
- A crossing is drawn whole or not at all. At 320 px that is honest
  (S5 is struck). At 1280 px it is "not at all": N3, new, and first in
  this list.

Worst first.

N3. New with the fifth mending. **On a desktop the Figure tab of plate
`lie` draws no figure.** Plate `lie`, tab Figure, 1280 px
(`othello-lie-1-figure-1280.png`): the six parts are underlined in
their three colors and no stroke joins any of them. The figure is a
crossing (`draw: cross`): word 20 of row 49.0 with word 34, words 22-23
with words 29-30. With the prose at 26 px the four fall on three lines
of type: word 20 ends one line, the two middle parts stand on the
next, word 34 begins the third. The outer pair is two lines apart and
can have no stroke, so the inner pair gets none either.

Counted in the page at each width (underlines 6; strokes that join):

- none: 320, 600, 640, 700, 1200, 1280, 1440 and 1920 px;
- two strokes that cross: 360, 375, 390, 414, 480, 560, 1024, 1100 px
  (`othello-lie-1-figure-390.png`);
- a stroke and an arc, both pairs joined: 768 and 900 px.

So a phone shows the crossing and every window of 1200 px or more
shows none. Before the fifth mending both strokes crossed at 1280 px.
Nothing I may set helps: `join` can only name the same two pairs, each
"whole or not at all", and one pair joined alone would show a pair
and not a crossing (which is what S5 was). Mend, one of: where a
crossing cannot be drawn, letter its parts in the order they are said
(a, b, b, a over the four says "the opposite order" on any number of
lines, as the items of a list are numbered); or, on a plate whose
figure is a crossing inside a paragraph of prose, try the size of the
prose at which its four parts fall on two lines of type (at 35.3 px,
the size it had until 08:35, they did).

N2. New with the changes of 07:38 to 07:52; it is K2 come back in
part. **The chain draws two of its five joins, and one on a phone.**
Plate `echo`, tab Figure, every width
(`othello-echo-0-figure-1280.png`, `othello-echo-0-figure-390.png`).
A stroke that would cross a speaker's name is now left out, and the
name stands between every two speeches.

- Left out at every width: the three joins where the word that begins
  a speech stands straight under the same word of the speech before:
  row 98.0 word 0 to row 100.0 word 0, row 102.0 word 0 to row 104.0
  word 0, row 110.0 word 0 to row 112.0 word 0.
- Left out at 414 px and under: row 108.0 word 3 to row 110.0 word 0.
- Drawn: row 100.1 word 3 to row 102.0 word 0 (every width), row
  108.0 word 3 to row 110.0 word 0 (480 px and up), and the two arcs
  inside rows 100.0 and 104.0, which the poet's notes call the lesser
  joins. (Counted in the page at 320, 360, 390, 414, 480, 560, 600,
  640, 700, 768, 1024 and 1280 px, the last time at 09:07 UTC, after
  the fifth mending: the same at every width.)

So the three words no longer look alike. At 1280 px the first has no
stroke from speech to speech and the second and third have one each;
at 390 px the third has none at all. The caption begins with exactly
the joins that are missing: a word ends one speech and begins the
next. Mend: break the stroke at the name (down to just over it, and on
from just under it); or carry it round the name in the left margin, as
the Rhyme tab carries a far rhyme; or, where a chain cannot have every
join from speech to speech, draw none of them, so that the three words
are told by color alone and alike. I have set no `join` on this lens:
no setting can draw the missing strokes, and "none" would take away
the two arcs and the good strokes as well.

The note of changes now gives this as the rule (a stroke keeps clear
of a speaker's name; where it has no way, color tells). I list it
still because of what the picture then says: three words that do the
same thing, drawn in three ways.

N1. ~~New with the mending. **The strokes of the chain run through the
speakers' names.**~~ Gone with the same changes: no stroke meets a
name now (measured at 1280 and 390 px). What it cost is N2. As it
was at 07:17: ~~plate `echo`, tab Figure, both widths.
The joins from speech to speech were all drawn, and each had to pass
the speaker's name that is printed between the two rows. The three
upright strokes (rows 98.0 to 100.0, 102.0 to 104.0, 110.0 to 112.0)
went straight through that name: at 1280 px 35 to 39 px from its left
edge, between its fourth and fifth letters; at 390 px 20 to 25 px
from it, through its third letter. The two slanting strokes (100.1 to
102.0, 108.0 to 110.0) ended at the height of the four-letter name
over rows 102.0 and 110.0: against its last letter at 1280 px, on its
last letters at 390 px.~~

S1. Was K1. **Row 49.0 of plate `lie`: its two long tokens still
cannot turn at a dash.** Gone: at 360, 375 and 390 px the type is now
fitted so that token 18 goes into the column, and the page no longer
scrolls sideways. Left:

- At 320 px (`othello-lie-0-word-320.png`) the type stops at its
  smallest, 16.5 px. Token 18 is then 282 px wide in a column of 264
  px: it ends 18 px outside the column and 6 px outside the plate (the
  plate ends at 304 px, the token at 310 px). Its last letter stands
  on the plate's border and the stop after it on the margin of the
  page: `othello-lie-0-word-320-edge.png`, a close picture of the
  place taken by my own script at three times the size, because the
  tool's picture is cut at the plate's edge. The picture tool says
  nothing, because it tests marks and labels, not words.
- Ragged lines on a phone. At 390 px (`othello-lie-0-word-390.png`)
  the third line of the speech holds token 17 alone (64 px of 334),
  the fourth token 18 alone, the twelfth and last token 66 alone. At
  360 px the third line holds token 17 alone (56 px of 304) and the
  fourth token 18 alone.
- At 1280 px (`othello-lie-0-word-1280.png`), in the smaller type the
  fifth mending gives the prose, one line is left: the second of the
  eight holds tokens 13 to 17 and stops at 344 px of 607, because
  token 18 will not go after them. It ends with a full stop, so it
  reads as the end of a paragraph, which it is not.
- At 320 px the verse row 39.0 has to turn, and turns after its token
  3, which is two words joined by a dash. The second of the two begins
  a new clause and is left at the end of the first line. The new rule
  (turn after the stop nearest the middle) does not help: it looks for
  a stop at the end of a token, and this line's only stop is the dash
  inside token 3. `turn` cannot help either: it turns between tokens.

Mend, as before: let a line turn after a dash that joins two words
(each half is already wrapped in `.wp`), and let the rule for verse
take such a dash for a stop.

S2. Was K6. **Two passages have the same name in "What each caption
stands on".** After the third mending the place of a passage stands by
its heading at every width: after it at 1280 px, under it on a phone.
Each of the three headings ended with the same act and scene, so every
plate said its place twice, at every width. A heading is mine to
change where it reads badly, and I cut the place from all three (see
"What I changed in `reading.json`"). The heads now say it once
(`othello-echo-0-figure-1280.png`, `othello-lie-0-word-390.png`,
`othello-light-0-figure-390.png`).

What is left is the kit's. The first two passages are now both headed
by the two men's names, and the folded list at the foot of the page
labels each entry with the plate's heading and the tab's label and
nothing else (`site/js/piece.js`, line 106). Open, it has "Othello and
Iago, Figure." twice (entries 1 and 5) and "Othello and Iago, Word."
twice (entries 3 and 4, one straight after the other):
`othello-stands-1280.png`. Mend: in that label put the place of the
passage after the heading, as the head of a plate does with the part's
`label` ("Othello and Iago, Act 3, Scene 3, Figure."), at least where
two plates of a piece share a heading. The other way round would do as
well: put the three old headings back (they are listed below) and
leave the italic place out of a plate's head when its heading already
holds it. That would mend `henry-iv-2` and `volpone` too.

Nothing else is touched by the change. The reading's own prose never
names a passage by its heading (searched by script: it says "the first
passage" and "the second passage").

S3. Was K8. **A turned line stands a whole row lower.** Plate `echo`,
390 px, row 112.2 (`othello-echo-2-word-390.png`): rows are 56 px
apart, and the turned part stands 56 px under the first part, so only
the 21 px indent says that the two are one line. At 360 px the same
happens to row 100.0 (`othello-echo-2-word-360.png`). At 320 px it is
most of what a reader sees: the last four rows of `echo` (100.0,
112.0, 112.1, 112.2) all turn, and so do eight of the thirteen rows of
`light` (there at 49 px, the pitch of its rows), so that line after
line stands at one pitch and every other one is indented. Measured
again at 09:05 UTC. Mend: do for a turned line of verse what the fifth
mending does for a paragraph of prose: on a tab that marks nothing
under its first part, let the two parts stand close.

S4. Was K4. Left as it is by the lead ("a long plate is long on a
phone"). For the record, at 390 px now, with the place under each
heading: `echo` passage 901 px, caption 1,013 px below the top of the
plate; `lie` 1,078 px and 1,220 px; `light` 661 px and 804 px.

S5. ~~Was K3, at 320 px only. **On the smallest phone the crossing is
one stroke.** Plate `lie`, tab Figure, 320 px: the inner pair was
joined and the outer pair, two lines apart, was not, so the picture
showed a pair and not a crossing.~~ Gone with the fifth mending: at
320 px no stroke is drawn now and color tells both pairs
(`othello-lie-1-figure-320.png`). The same rule is what leaves the
desktop with nothing: N3.

Smaller things seen at the last look, all the kit's own choices:

- The three passages stand in three sizes on one page: 27.6, 35.3 and
  32.9 px at 1280 px; 16.5, 19.3 and 18.0 px at 390 px. Each plate's
  type is fitted to its own longest line. On `echo` one row (112.2)
  puts the whole passage at the smallest size on a phone, and that row
  turns all the same.
- New with the fifth mending. Plate `lie`, every tab that shows the
  passage, 1280 px: row 45.0, a speech of two words that the edition
  sets as prose, stands at 26 px between rows of verse at 35.3 px, and
  its line is 34 px tall where theirs are 75. Row 41.0, two rows
  above, is also a speech of two words and stands a third larger. A
  reader cannot tell prose from verse in two words, so the smaller
  type reads as a lower voice (`othello-lie-0-word-1280.png`). Mend:
  a row of prose that is one line long among verse keeps the size of
  the verse; only a paragraph that runs on is set as prose.
- Plate `lie`, 390 and 360 px: word 35 of row 49.0, a word of one
  letter that begins a sentence, ends the sixth line of the speech. On
  the Sentence tab the rule of that sentence then begins as a stub 6
  px long at the end of the line (`othello-lie-2-sentence-390.png`).
  It did not at 08:19; the line breaks moved with the fifth mending
  (a held run in prose is shorter now). Mend: in a row of prose keep a
  word of one letter with the word after it.
- A drawing's notes and key (`.dg-note`, `.dg-k`) are not set as a
  caption is (`text-wrap: pretty`), so a last word could stand alone
  on a line. I have set that on the labels of my own lists and tied
  the last two words of my key; in the stylesheet it would serve
  every drawing.
- The same of the notes of a Word tab and the remarks of a Beat tab
  (`.aside .wn`, `.aside .points li`), which the sixth mending set
  larger. Counted in the page at 09:38 UTC, a note or remark ends
  with one word alone on its last line here: `echo`, Word, 1280 px,
  note 2 (`othello-echo-2-word-1280.png`); `echo`, Beat, 390 px,
  remark 1 (`othello-echo-1-beat-390.png`); `light`, Word, 390 px,
  notes 4 and 6 (`othello-light-2-word-390.png`); `lie`, Word, 320
  px, notes 1 and 3 (`othello-lie-0-word-320.png`); and at 320 px
  also remark 3 of `echo` and note 3 of `light`.
- ~~On a phone a drawing with a line that speaks keeps two lines of
  room for it under the key: 72 px of bare paper between the key and
  the folded numbers.~~ Gone since the changes of 07:38 to 07:52: while
  nothing is pointed at, the line now says how it is made to speak,
  and one line of room is left under it
  (`othello-lie-3-play-390.png`).

## The drawing: plate `lie`, tab "Play"

### A number the facts did not hold: the order

The lens's `what` is how much Othello and Iago speak in verse and in
prose, act by act. Its caption begins from an order ("Before ...
Othello has spoken 3,653 words, all of them verse. His prose begins
here"), and the facts held amounts by act but not the order inside an
act. I counted it and added it, touching no key that was there:

    node remake/works/othello/count-order.mjs

It reads the hosted text (`site/data/texts/othello/`) with the poet's
own rules (verse and prose as the text prints them; a word is what
stands between spaces or dashes) and prints numbers and block numbers
only. A run is an unbroken stretch of one man's verse, or of his
prose, inside one act; what other people say in between does not break
it. Othello's prose is divided at the four places that `othelloProse`
names. Result, on 3 October 2026, 06:22 UTC:

- 25 checks, all "ok": for each man and each act the runs add up to
  the numbers of `acts` (20 sums); Othello's verse before his first prose
  is 3,653, as `othelloBeforeThisPassage` has it; his four prose runs
  are 76, 72, 192 and 20, as `othelloProse` has them.
- "11 runs for Othello, 26 for Iago; every sum agrees with the reading".
- Othello, Act 4, in order: verse 97, prose 76, verse 69, prose 72,
  prose 192, verse 677, prose 20. Every other act is one run of verse.
- Iago: Act 1, verse 610, prose 81, verse 329, prose 577, verse 187;
  Act 2, fifteen runs, from verse 325 to verse 370, with prose of 118,
  579, 142, 3, 64, 18 and 358; Act 3, verse 1,712; Act 4, verse 641,
  prose 169, verse 231, prose 322; Act 5, verse 653.

Added to that lens's `facts` by one small edit, after
`iagoProseSpeeches`: `othelloInOrder` (11 entries), `iagoInOrder` (26
entries), each entry `act`, `kind`, `words` and a working note
`blocks`; and `inOrderNote`, a working note that says where they came
from. The build takes `blocks` and `inOrderNote` out. After the edit
`node build/tools/check-reading.mjs othello` still says "no problems",
the one old warning, and "the printed notes are fit to print".

The drawing takes only the order from these two lists. Every amount it
prints, and every length, comes from the keys the poet wrote (`acts`,
`othelloBeforeThisPassage`, `othelloProse`, `iagoProse`): a run's
length is its share of the act's number in `acts`, so a number
corrected there is corrected in the drawing.

### What I drew, and why that form

`site/js/pieces/othello.js`, lens `lie:shape`. No stylesheet of my own.

What a reader is meant to see at a glance (the poet's notes say it,
and the caption): Othello speaks nothing but verse until this passage,
and prose in Act 4 only; Iago has prose in Acts 1, 2 and 4 and none in
3 and 5.

The form is two lines of marks, one for each man, with the five acts
side by side in the same columns for both. Verse stands over the line
in the light color, prose under it in ink, in the order it is spoken,
and every mark is as long as its words. An act's column is as wide as
the more that either man says in it, so one scale holds for every mark
in the drawing and nothing is stretched. Verse over a line and prose
under it is the way the Hamlet piece already draws the two, so the two
plays read alike.

Bars for each act would show how much and not when. The caption begins
from an order ("Before ...", "begins here", "since the first scene"),
and only a line in the order of speaking shows that. The price was the
order inside an act, which had to be counted (above).

- The prose of this passage is the one red mark. Its label carries the
  caption's first number: "this passage: his first prose, after 3,653
  words of verse". Both halves are facts of
  `othelloBeforeThisPassage` (its prose words are 0; were they not,
  the label would give both numbers and drop "first").
- By each name stands all he says in the play, from the row "The play"
  of `acts`: the caption's 360 and 2,431.
- "verse" and "prose" are written once on the drawing itself, over and
  under Othello's line where he leaves most of an act bare (Act 2).
  The key says the same and adds that a mark is as long as its words.
- Under the two lines each man's prose is set out again, with bars on
  the same scale as the lines: Othello's by its four places
  (`othelloProse`), Iago's by the person he speaks to (`iagoProse`).
  The caption's "most of them to Roderigo and to Cassio" and "except
  once" cannot be read off a line of marks; they can be read off this
  list. A scene that has a `read` in the facts opens at that place in
  the book printed here (five links, each followed in a browser).
- The pointer adds, on one man's act, its numbers (words of verse,
  lines, words of prose); on a row of a list, where it is and how much
  of all his prose. The marks meant stay dark and the rest go pale; a
  row of Othello's list and its mark on the line stay dark together,
  and a row stays lit while the pointer is on its link. A tap lights
  an act or a row and a second tap lets go; a tap on a link opens the
  book (each tried in a browser, with a pointer at 1280 px and with
  taps at 390 px). Nothing needs the pointer.
- "The numbers", folded: both men's acts in one table of the same
  columns, with the play and "before this passage"; prose words and
  speeches (the examiner's 23 and 79 are read by key and show there);
  Iago's prose by person, with where. The fold was called "The
  figures" until 09:00 UTC; the lead asked for the new name, because
  on these pages a figure is a figure of speech and the name of a tab.
- The lead's two rules for numbers, checked against everything the
  drawing prints. It prints no number of a line, only counts, and a
  count keeps its comma (1,478 words; 153 lines). The sentences the
  pointer prints hold no small number: the smallest count in any of
  the nineteen is 20, and "Act 4, Scene 1" is a name.
- Where the words of a list turn on a phone, no word is left alone on
  the last line (`text-wrap: pretty`, as the kit sets a caption), and
  the last two words of the key keep together.

Every word the drawing prints is a name or a number of the facts, or
a plain label of what a mark or a column is: verse, prose, words,
lines, speeches, where, over the line, under it, this passage, his
first prose, before, after, to. No number or name is typed into the
script. If a key it needs is missing it throws, and the kit shows the
table.

Widths. It is laid out from the width it is given. The picture tool
was run on this tab in windows of 320, 360, 375, 390, 414, 600, 768,
900, 1024, 1280, 1440 and 1920 px, at 09:13 UTC with the script as it
is handed in and a last time at 09:50 UTC, after the sixth mending:
nothing reported at any, and the twelve pictures of 09:50 are, pixel
for pixel, those of 09:13. I looked at the picture of each at 08:02;
of those of 09:13 I looked again at 320, 375, 390 and 1280 px, and
the other eight differ from what I had looked at only in the name of
the fold (compared pixel by pixel). In a narrow drawing
the acts after the first are headed by their numbers where "Act 2"
would not fit, and the scenes of Iago's prose are left to the pointer
and to the folded numbers. The marks come in from left to right,
Othello's line, then Iago's, then the lists, and all is there in under
three seconds.

## What I changed in `reading.json`

Each by a small exact edit, never the whole file. After the last of
them `node build/tools/check-reading.mjs othello` says "no problems",
the one old warning (plate `echo`, lens 0, a word of the caption) and
"the printed notes are fit to print". No label of a lens was changed.

**1. New keys in the `facts` of the Play lens** (plate `lie`):
`othelloInOrder`, `iagoInOrder`, `inOrderNote`. Counted by
`count-order.mjs`; see "A number the facts did not hold" above. No key
that was there was touched. The examiner has since corrected two of
the poet's keys (`othelloProseSpeeches` 23, `iagoProseSpeeches` 79) and
left mine as they were (`exam.md`).

**2. The three headings.** They were "Othello and Iago, in Act 3,
Scene 3", "Othello and Iago, in Act 4, Scene 1" and "Othello, in Act
5, Scene 2: lines 1 to 13". They are now "Othello and Iago", "Othello
and Iago" and "Othello: lines 1 to 13": the place cut, no word added.
Why, and what it leaves for the lead: S2 above.

**3. `turn`: now on two rows only.** Plate `echo`, `{ "112.1": 3 }`;
plate `light`, `{ "4.11": 4 }`. Words are numbered as the proof
numbers them, from 0.

Until the fifth mending I had set ten, because the page balanced a
turned line and in ten rows the balance parted a word from its phrase.
The page now turns a line of verse after the stop or the comma nearest
its middle. At 08:56 UTC I served the built piece with every `turn`
taken out (in memory; no file was touched) and read where each row
then turned, at 390, 360 and 320 px. In eight of the ten the page's
own turn is now the one I had set, part for part to the pixel, so
those eight are out of the reading:

| plate | row | the page's own turn now | what I had set |
|---|---|---|---|
| `echo` | 100.0 | after word 2, a full stop | 2 |
| `echo` | 112.0 | after word 2, a question mark | 2 |
| `echo` | 112.2 | after word 4, a full stop | 4 |
| `light` | 4.1 | after word 6, a comma | 6 |
| `light` | 4.2 | after word 3, a full stop | 3 |
| `light` | 4.5 | after word 3, a comma | 3 |
| `light` | 4.6 | after word 3, a comma | 3 |
| `light` | 4.9 | after word 3, a full stop | 3 |

Two are kept. Neither row has a stop in its middle two fifths, so the
page still balances it, and the balance is a bad turn in both:

| plate | row | the page's own turn | `turn` | why |
|---|---|---|---|---|
| `echo` | 112.1 | after word 4 | 3 | the page parts word 4 from its noun (word 5, which the Word tab glosses); after word 3 the first part ends with the verb and the second is the noun and what is said of it |
| `light` | 4.11 | after word 3 | 4 | the page leaves the first word of the clause at the end of the first part; after word 4 the second part is words 5 to 7, which the Sentence tab rules as one span and whose middle word the Word tab glosses |

With two settings the page stands as it stood with ten (read again in
the page at 414, 390, 375, 360 and 320 px, 08:57 UTC, and no picture
changed by a pixel). Which rows turn at which width: at 414 px none;
at 390 px only row 112.2 of `echo`; at 375 and 360 px also row 100.0
of `echo`; at 360 px row 4.9 of `light`; at 320 px four rows of `echo`
and eight of `light`. Every part is narrower than the column (the
widest is 215 px in 264, its indent counted). Two more rows of `light`
turn at 320 px with no stop near the middle (4.3, after word 4, and
4.10, after word 2); the balance is good there, so they have no
`turn`. Plate `lie` has none: its one verse row that turns (39.0, at
320 px) would have to turn inside a token (S1).

**4. `join` on the Figure lens of plate `light`:** `[[0, 3]]`. The
figure is drawn as a `pair` with two tags of unequal number (three
parts "the flame", four "her life"), and for that the kit draws no
stroke at all. Part 0 is words 0 to 3 of row 4.6 and part 3 is words 6
to 9 of the same row: the same four words, said twice in one line. The
caption says exactly that of them, and that the later marks are the
word coming back in one sense or the other; the poet's notes say "Only
the two halves of row 4.6 are joined". So those two are joined and
nothing else is. The stroke is there at 1280, 390 and 320 px
(`othello-light-0-figure-1280.png`, `othello-light-0-figure-390.png`).
The other two Figure lenses have no `join`: their `draw` names the
right joins, and no setting would draw the ones that are missing (N2
on `echo`, N3 on `lie`).

## The reading

I found nothing in it that I think is wrong. Every number of the Play
caption agrees with the facts and with my own count of the order:
3,653 words of verse before the passage, 360 words of prose all in
Act 4, 2,431 for Iago, most of them to Roderigo and to Cassio (1,478
and 634), and to Othello once (120).

One thing for the poet or the examiner to look at, not a fault. Plate
`lie`, tab Sentence: the third color is labelled "pieces of one to
four words" and is one unbroken rule under words 59 to 66 of row
49.0, where each of the "three whole sentences" before it has a rule
of its own. By its stops the stretch is six pieces, of one, four, two,
one, one and two words, so the label is true. A rule for each piece
cannot be had: four of the six lie inside or across token 65, which is
four words joined by dashes, and a span begins and ends at a token. I
would leave it.

The examiner's two corrected numbers (23 and 79 speeches in prose) are
read by key and show in "The numbers".

## The last check

On 3 October 2026, 09:54:07 to 09:55:42 UTC: after the sixth mending
(the note of changes says 09:20 to 09:52), after I had read the note
to its end, and with my script and the reading as they are handed in.
The kit's newest code was of 09:46:08 (`site/js/kit/plate.js`,
`site/css/atlas.css`), and the note of changes and the kit's README
of 09:51:48, before the first picture and after the last:

    node build/tools/check-reading.mjs othello
    node build/pieces.mjs othello
    node build/tools/shoot.mjs othello --out remake/works/othello/shots --page
    node build/tools/shoot.mjs othello --out remake/works/othello/shots --widths 320 --plate lie --lens 0
    node build/tools/shoot.mjs othello --out remake/works/othello/shots --widths 320 --plate lie --lens 1
    node build/tools/shoot.mjs othello --out remake/works/othello/shots --widths 360 --plate echo --lens 2

The checker says "no problems", one warning that was there before I
began (plate `echo`, lens 0, a word of the caption under rule three)
and "the printed notes are fit to print". Each run of the picture tool
ended with the line

    nothing reported; now look at the pictures

The pictures, 38 in `remake/works/othello/shots/`: the ten tabs at
1280 and 390 px (20); the page in slices at 1280 px (6) and 390 px
(7); `othello-lie-0-word-320.png` and the close picture
`othello-lie-0-word-320-edge.png` (S1); `othello-lie-1-figure-320.png`
(S5, N3); `othello-echo-2-word-360.png` (S3); and
`othello-stands-1280.png`, the folded list "What each caption stands
on" opened (S2). The last two are taken by small scripts of my own
(one opens the list, the other photographs a place at three times its
size), because the picture tool leaves folded lists shut and cuts a
picture at the plate's edge; the scripts are not in the repository.

I looked at every one of the 38. The kit changed many times while I
was finishing (07:38 to 09:46), so the set of 37 was taken fourteen
times from 07:49 on and each new set compared with the one before,
pixel by pixel; a picture that had changed was looked at again.

- Across the fifth mending (the set of 09:15 against that of 08:29)
  sixteen pictures changed, all of plate `lie` or of the page under
  it: the eight of its Word, Figure and Sentence tabs (the prose in
  smaller type; the crossing gone at 1280 px), six slices of the page
  (the plate is shorter, so all below it stands higher), and its Play
  tab at both widths (the fold's new name; at 390 px one label of a
  list turns a word earlier). Taking out eight `turn` settings
  changed no picture.
- Across the sixth mending (the set of 09:34 against that of 09:15)
  twenty-four changed: the Word and Beat tabs (larger notes and
  remarks), the phone pictures in which rows stand a pixel lower, the
  slices of the page (its summary is headed "The passages"), and 23
  pixels at the edge of the key on the Sentence tab of `lie`.
- The set of 09:41 to 09:43 and the last set, of 09:54 to 09:56, are
  the set of 09:34 again: not one picture differs by a pixel. (The
  last change of the kit, at 09:46, is for plates with a rhyme tab;
  this piece has none.)

The phone widths. As the note of changes asks, I also took every tab
at 360 and 320 px (twenty pictures, 09:08 UTC, into a folder of my
own) and looked at each. Every turned line of `echo` and `light`
turns after a stop or at a good place (the tables under "What I
changed"), and no mark stands outside its plate. The faults seen are
the ones listed: S1 (row 39.0 and token 18 at 320 px), S3, N2, no
crossing at 320 px (N3), and the word of one letter at 360 px. I took
the twenty again at 09:57 UTC, after the sixth mending: every passage
is the same to the pixel on every tab, and what differs is under it
(the darker notes, and my own two changes on the Play tab).

Tried in a browser, 09:16 to 09:18 UTC and again 09:59 to 10:03 UTC
after the sixth mending, on the script as handed in: the drawing with
a pointer at 1280 px and with taps in a window of 390 by 700 px (each
of the nineteen marks that answer, each link, bare paper, a second
tap); the line that speaks, which the kit holds at the foot of a
phone's window while its own place is below it; "The numbers" opened
at 320, 360, 390 and 1280 px (no table wider than the drawing); and
the five links, each of which opens its scene with the place 162 px
under the top of the window. The drawing-in ends 2.65 seconds after
it begins by the script's own times; at 09:18 all of it was in 3.1
seconds after the click on the tab (the kit waits about a third of a
second before a drawing begins). At 09:47, with the machine busy with
many other jobs, the same test ran late by up to half a second.

## Proposed for the reading

Nothing. The sixth mending lets a reading gloss a speaker's name; the
two names over the speeches of this piece are the two men named in
the headings of its plates and in the first two sentences of the
page, and need none.
