# Henry IV, Part 2: the artist's record

Begun 2026-10-03, 07:17 UTC. Words of the play are pointed at by part, row
and word number, never typed out. Pictures are in `shots/`; their names
begin `henry-iv-2-` and end with the width, and that is left off below
(`charges-0-cross-1280` is `shots/henry-iv-2-charges-0-cross-1280.png`).

Sections: 1 the first look; 2 the drawing; 3 what was set in the reading;
4 the last run; 5 what is the kit's to mend; 6 what may be wrong in the
reading.

## 1. First look, before anything was drawn

`node build/pieces.mjs henry-iv-2`, then
`node build/tools/shoot.mjs henry-iv-2 --out remake/works/henry-iv-2/shots --page`.
Last line: "nothing reported; now look at the pictures". All twenty-four
pictures of tabs and the fourteen slices of the page were opened.

What was wrong, plate by plate:

**All three plates, every tab, both widths: the heading says the place
twice.** Each heading ended "in Act 1, Scene 2" (or 3.1, or 5.5), and the
kit sets the place beside the heading in italic, so the head of the plate
read "... IN ACT 1, SCENE 2  Act 1, Scene 2". At 390 the heading took two
lines and the place a third. Mine to mend (section 3).

**charges, Cross, 1280 (`charges-0-cross-1280-kit-default`, taken again
later, the first picture being overwritten): half a cross.** The kit
joins the two parts of tag A and the two of tag B. Row 92.0 turns onto a
second line of type after its word 10, so the second B (92.0 w10) is on
the line after row 90.0 and the second A (92.0 w14) is two lines away. The
kit draws a stroke only between lines that follow each other, so one blue
stroke runs from 90.0 w9 to 92.0 w10 and nothing answers it. One stroke
does not show a crossing. At 390 (`charges-0-cross-390-kit-default`)
neither stroke
can be drawn and the tab shows underlines only. The second crossing (tags
C and D, rows 94.0 and 96.0) had no strokes at either width, as the
poet's `open` list says. See section 3 for what was set, and section 5
for what is the kit's.

**charges, Word, 390 (`charges-1-word-390-first-look`): a gloss runs
into a speaker's name.** Row 92.0 has two glosses on its last line of type
(under w13 and w14). The second cannot stand beside the first, so the kit
sets it a line lower, and there it stands on the top of the speaker's
name over row 94.0. The kit's: section 5. (Mended in the kit while I
worked: the last picture shows the gloss clear of the name.)

**charges, every tab with marks, 390: the passage is taller than a phone
screen.** Thirteen lines of prose type and six speakers' names take about
800 px (measured later: 808), because every line of type is given the
room for marks under it
whether it carries a mark or not. The caption starts below that. On a
phone the marks and the words about them are never on screen together.
The kit's: section 5.

**sleep, Beat, both widths (`sleep-0-beat-1280`, `sleep-0-beat-390`): the
numbers of the remarks stand out of order on one line.** In row 5.26 the
number 3 stands after word 3 and the number 2 after word 5, so the line
reads 3 before 2. The remarks are numbered in the order the reading lists
them, and the order of `points` is not mine to change. The kit's, or the
examiner's: section 5.

**sleep, every tab: the gap is now marked.** Three points stand on a line
of their own between rows 5.4 and 5.22. The reading's `open` list still
says that nothing on the plate marks the gap: section 6.

Looked at and found right: every tab of `sleep` and `rejection` at both
widths keeps each line of verse whole (no line turns at 390; on narrower
phones lines do turn, and badly: section 3); glosses, brackets and the
rhyme's arc stand clear of the words;
the dotted thread on `sleep`, Rhyme, runs between the last two rows and
crosses no word; the two squared strokes of `rejection`, Balance, join
the pairs the caption names.

## 2. The drawing: `charges`, tab Play (`site/js/pieces/henry-iv-2.js`)

**What the reader is meant to see at a glance.** Who speaks prose, who
speaks verse, and where one man goes from the one to the other. Falstaff's
marks all hang under his line. The old King's all stand over his. The
Prince's hang under the line in Act 2 and stand over it from then on, with
a red stroke where he changes.

**The form.** A column to each of the play's twenty-one parts, in order,
left to right, with a small space between the acts. Over a line stands
what is in verse; under it hangs what is in prose. The first row is the
whole play: its verse stands on a band that holds the scene numbers, its
prose hangs from that band. Under it stands a row for each speaker the
facts count, column under column, so that the eye can go down from a
scene to the people who speak in it. The two entries the facts give for
the Prince (before he is king, and as King Henry V) are one row: the
second name stands over the first marks it has.

Why this form and not another:

- Bars along an order, because the facts are counts scene by scene, and
  the caption's claims are about scenes ("nine of its nineteen scenes",
  "in none of them", "in Act 2").
- One row to a speaker, the columns shared, because the caption's second
  sentence joins two counts: the scenes with no prose, and the scenes
  Falstaff speaks in. A part with no prose is tinted in every row. No mark
  of Falstaff's stands on a tinted column; every mark of the old King's
  does.
- Verse over the line and prose under it is how the Hamlet and Othello
  pieces already set the two apart, and a reader who has seen either page
  can read this one at once. The form itself is not theirs. Those lay one
  man's words end to end, a mark as long as its words. This one counts
  the whole play and four speakers scene by scene, on shared columns, and
  the thing shown is on which side of the line each speaker's marks fall.
- Considered and not drawn: a column to each speaker with the parts
  running down the page and verse and prose to left and right of a spine.
  It names the parts easily, but four such columns do not fit a phone
  (72 px each at 390, with marks 8 px long), and the play reads less
  naturally downward than across.

**The scale.** One for every row. A word of prose is a fixed height
(the tallest prose of a scene is 60 px at 1280 and 48 px at 390). The
facts count verse in lines and prose in words, so a line of verse is
drawn as tall as the words an average line of this play holds: the
facts' own `words of verse` divided by `lines of verse` for the whole
play (12,503 / 1,640, which the key prints as 7.6). The key says so. No
new number was counted or added to the facts.

**Not to scale, and said in the key.** A mark is never thinner than 2 px.
In a speaker's row a mark of verse too thin to be drawn to scale carries
its number of lines over it (Falstaff's 2, 3, 3 and 3, which make the
caption's eleven; three of them in the last scene, as the third
passage's Beat caption says). The play's own row has two such marks
(1.2 and 5.1) and gives them no figure, because a figure there would
stand directly over the scene number in the band.

**Red, twice, each time with its words.** "this exchange" under the prose
of the scene this passage is from (found by matching the plate's source to
the part's `read`, not typed). And a short stroke through the Prince's
line in the scene the facts name under `the Prince changes to verse`,
with the rest of that key's own words beside it. In that one scene his
prose stands to the left of the stroke and his verse to the right, since
the facts say the change falls inside the scene: prose before it, verse
after.

**Words on the drawing.** The names of acts, parts and speakers are the
facts' own (`name`, `speaker`). Typed labels: verse, prose, this exchange,
"lines of verse", "words of prose", "no verse", "no prose", and the two
or three lines of the key.

**Every number the caption names is on the drawing.** 5,373 and eleven:
after Falstaff's name. Nine of nineteen: in the key, and countable as
tinted columns that carry a scene number. Act 2: over its columns.

**The pointer** (or a finger) adds the counts of a column, or of a
speaker in a scene. On a column of the play's row, the marks of that
scene stay dark in every row; on a speaker's mark, that mark and the
play's marks of the scene. Pointing at the red words gives the scene,
and the Prince's counts in it in their order. Under "The
figures" the facts stand as two tables, each part opening at its place in
the play printed here, and the change opening at Peto's entrance (the
facts' `read`).

**Widths.** Looked at 320, 360, 390, 768, 1024 and 1280. Where the names
of the acts do not all fit over their columns (a phone), the acts after
the first are named by number alone. Where a speaker's totals do not fit
after the name (the Chief Justice, on a phone), they are given briefly
("69 lines, 607 words").

## 3. What was set in the reading (`reading.json`), and nothing else

Small exact edits, the checker run after each: "no problems, no warnings,
the printed notes are fit to print".

**The three headings.** Each named the place, which the kit sets beside
it. The place was taken off: "The Chief Justice and Falstaff", "The King
alone: lines 1 to 5 and 23 to 28 of his speech", "The new King and
Falstaff". At 1280 heading and place stand on one line; at 390 the first
and third headings take one line and the second two, the place under them.

**`join` on `charges`, Cross: `[[4, 7], [5, 6]]`.** Parts 4 and 7 are the
two of tag C (94.0 w0 and 96.0 w5), parts 5 and 6 the two of tag D
(94.0 w3-5 and 96.0 w0-2). The labels and the caption say these belong
together: the caption's first sentence says the answer is crossed twice,
and its third gives this second crossing. With the kit's own way of
`draw: "cross"` this
crossing had no strokes, and the first had one stroke of its two at 1280
(`charges-0-cross-1280-kit-default`) and none at 390
(`charges-0-cross-390-kit-default`). Now the second crossing is a whole
X between rows 94.0 and 96.0 at every width looked at (1280, 1024, 768,
390, 360; `charges-0-cross-1280`, `charges-0-cross-390`), clear of the
speaker's name between the rows. The first crossing is told by its two
colors alone. Its pairs are left out of `join` on purpose: named there,
the lone stroke comes back wherever row 92.0 turns onto a second line of
type. If the kit learns to draw both strokes of that crossing or neither
(section 5), this `join` can be taken out again.

**`turn` on `sleep` and on `rejection`.** At 390 and wider no line of
verse turns, so the tool's pictures show nothing of this. On a narrower
phone the type is already at its least size and lines turn, and the
page's own choice (the two lines made as equal as they can be) often
parts a word from the word it belongs to. Each row below turned badly;
each now turns at a comma, a stop or the joint of two phrases. Words are
counted from 0, as the checker's proof counts them.

`sleep`: `{ "5.0": 2, "5.1": 4, "5.2": 2, "5.3": 3, "5.22": 4, "5.24": 3, "5.26": 4 }`

| row | turns after | the page's own choice, and what was wrong with it | windows |
|---|---|---|---|
| 5.0 | w2 | after w3: a preposition left at the end of the line | 320 to 350 |
| 5.1 | w4 | after w4 on Beat, but after w5 on the other three tabs: the first word of the address to Sleep left behind | 320 to 370 |
| 5.2 | w2 | after w3: the first word of the question left behind | 320 to 350 |
| 5.3 | w3 | after w4: an auxiliary parted from its verb | 320 to 360 |
| 5.22 | w4 | after w3: an adjective parted from its noun | 320, 330 |
| 5.24 | w3 | after w4: a conjunction left at the end of the line | 320, 330 |
| 5.26 | w4 | after w5: the first word of the next sentence left behind | 320 to 360 |

Rows 5.1 and 5.26 are the two long lines of the Beat caption, which says
each stops in the middle. Both now turn at that stop, the mark of the
pause at the end of the first line of type.

`rejection`: `{ "53.0": 3, "55.0": 3, "57.2": 3, "57.3": 1, "57.4": 2, "57.6": 1 }`

| row | turns after | the page's own choice, and what was wrong with it | windows |
|---|---|---|---|
| 53.0 | w3 | after w4: the first word of the second question left behind | 320 to 380 |
| 55.0 | w3 | after w5: a verb parted from the two words it governs | 320 to 340 |
| 57.2 | w3 | after w4: a preposition left at the end of the line | 320 |
| 57.3 | w1 | after w2: an adverb parted from its adjective | 320 |
| 57.4 | w2 | after w4: an auxiliary parted from its verb | 320, 330 |
| 57.6 | w1 | after w2: the verb that begins the second clause left behind | 320 to 360 |

Row 53.0 is the longest of its plate and turns in every window narrower
than 390, a 375 px phone among them (`rejection-0-beat-375`). Row 55.0
now turns at the second of the three stops its caption counts.

Left to the page, because its own choice is a good one on every tab in
every window from 320 to 390: 5.27 (after w3), 51.0 (after w3), 57.0
(after w5, at the stop the caption names), 57.1 (after w4, between the
verb and what it governs; after w3, between the subject and the verb,
since the kit was changed at 08:15, which is as good), 57.5 (after w4,
at the comma) and 57.7 (after w3). Rows 5.4, 5.23, 5.25 and 57.8 never
turn.

How this was checked: a script of mine opened the page in windows of 320,
330, 340, 350, 360, 370, 375, 380 and 390 px, and for each of the eight
tabs listed the word after which each row turns. After the change every
turn in all of them falls after the word given above (run again after
the kit's change of 08:15, at 320, 340, 360, 375 and 390: the same, but
for row 57.1). Pictures: before,
`sleep-0-beat-320-before`, `sleep-0-beat-360-before`,
`sleep-1-rhyme-320-before` (row 5.1 only; the other rows were already
set), `rejection-0-beat-320-before`, `rejection-0-beat-360-before`;
after, `sleep-0-beat-320`, `sleep-0-beat-360`, `rejection-0-beat-320`,
`rejection-0-beat-360`, `rejection-0-beat-375`.

Not set: `beside` (no plate has a second version); any `label` (Cross,
Word, Sentence, Play, Beat, Rhyme, Names, Balance each fit and read
well); any new key in `facts` (the drawing needed none).

## 4. The last run

```
node build/tools/check-reading.mjs henry-iv-2   ->  no problems / no warnings / the printed notes are fit to print
node build/pieces.mjs henry-iv-2
node build/tools/shoot.mjs henry-iv-2 --out remake/works/henry-iv-2/shots --page
```

Last line of the picture tool: **"nothing reported; now look at the
pictures"**. All thirty-eight pictures it wrote were opened again (twelve
tabs at 1280, twelve at 390, six slices of the page at 1280 and eight at
390). The three commands were run at 08:08 UTC and once more at 08:23,
because the kit was being mended meanwhile. Thirty of the pictures came
out the same to the last dot. The eight that differ are the four Beat
tabs and the four slices of the page that hold them, and the one
difference is the kit's: the words on the button under the key. A third
run at 08:29, after two more changes to the kit, gave the same last line
and the same pictures (one slice of the page differs by a few dots and
looks the same). What the pictures show:

- the three headings, each with its place once;
- `charges`, Cross: the X between rows 94.0 and 96.0 at both widths;
- `charges`, Play: the drawing of section 2 at both widths, its caption
  beside it at 1280 and under it at 390;
- `sleep` and `rejection`: every line of verse whole at both widths, as
  before;
- nothing of mine that sits on a word, runs out of the plate or is cut.

What is still wrong in them is the kit's (section 5) or the reading's
(section 6).

Beyond the tool's two widths:

- the drawing at 320 (`charges-3-play-320`), where it has 264 px, the
  least the kit's README asks a drawing to work at: every label fits,
  and the key runs to six lines;
- the drawing under a finger, on a touch screen 390 px by 700 px: a tap
  on the Prince's mark in Act 2, Scene 4 darkens that scene in every row
  and the line under the key says what the red words stand for; a second
  tap lets go. At that size the four speakers' rows, the key, the line
  that speaks and the first lines of the caption are on the screen
  together;
- the passages at 320, 360 and 375 (section 3).

Measured at 390: the drawing with its title, key, speaking line and
folded figures is 710 px tall, and its caption begins 853 px below the
top of the plate. The passage it stands in for is 808 px tall on the
other tabs (section 5).

In `shots/`, beside the tool's own pictures: the narrow pictures named
in section 3; `charges-0-cross-1280-kit-default` and
`charges-0-cross-390-kit-default` (the Cross tab as the kit joins it when
the reading sets no `join`; taken today by taking the `join` out for one
picture and putting it back); `charges-1-word-390-first-look` (a piece of
the first picture of that tab, since overwritten).

## 5. The kit's to mend, worst first

Nothing here was worked around in the script or in a stylesheet. Two were
met with the settings ARTIST.md gives me (`join`, `turn`); the fault
itself is still in the kit and will show in other pieces.

**5.1 A figure drawn as `cross` gets half a cross, and only its first
crossing.** `charges`, Cross, 1280, with no `join` in the reading:
`charges-0-cross-1280-kit-default`.

- One stroke runs from 90.0 w9 to 92.0 w10 (tag B). The stroke that
  should cross it, 90.0 w4 to 92.0 w14 (tag A), is not drawn, because
  row 92.0 turns after w10 and w14 stands two lines of type below row
  90.0. A lone stroke between two words of one color says nothing the
  color has not said, and does not look like a crossing. Wanted: the two
  strokes of a crossing are drawn together or not at all.
- The second crossing of the same lens (tags C and D: 94.0 w0 with
  96.0 w5, 94.0 w3-5 with 96.0 w0-2) gets no stroke at any width,
  because only the first two tags are crossed. Its rows follow each
  other and both strokes can be drawn (they are now, by `join`). Wanted:
  where a `cross` has four tags, the third and fourth are crossed as the
  first and second are.
- At 390 (`charges-0-cross-390-kit-default`) nothing is joined at all.

**5.2 On a phone narrower than 390 px, lines of verse turn, and the kit
turns them at the wrong word.** `sleep` and `rejection`, every tab, at
320 to 380: `sleep-0-beat-360-before`, `rejection-0-beat-360-before`,
`sleep-0-beat-320-before`, `rejection-0-beat-320-before`.

- The picture tool looks at 390, where these plates are just wide enough
  (the type is already at its least size, 16.5 px, and the longest line
  ends at the edge of the plate). At 375 one line of `rejection` turns,
  at 360 four of its twelve and three of the eleven of `sleep`, at 320
  nearly all. Other pieces with five-beat lines will be the same, and
  their pictures at 390 will not show it.
- Where a line must turn the kit makes the two halves as equal as it
  can. Of the nineteen rows that turn at 320, that parted a word from
  the word it belongs to in thirteen (section 3 lists them). Nine of the
  thirteen are mended by turning after the stop or comma nearest the
  middle of the line (5.1, 5.2, 5.22, 5.26, 53.0, 55.0, 57.3, 57.4,
  57.6). Wanted: the kit looks for such a point before it balances, so
  that a reading needs a `turn` only for a line with no stop in it.
- The same line can turn at one word on Beat and at another on the other
  tabs, because the heavy type of Beat is wider: row 5.1 at 320 turned
  after w4 on Beat and after w5 on Rhyme, Sentence and Word
  (`sleep-1-rhyme-320-before`). The passage should not be set anew from
  tab to tab.

**5.3 On a phone every passage is taller than the screen, and its
caption starts below the fold.** Measured at 390: `charges` 808 px of
passage on Cross and Sentence, 822 on Word, the caption 951 px below the
top of the plate (`charges-0-cross-390`, `charges-2-sentence-390`);
`rejection` 753 px, caption at 896; `sleep` 652 to 663 px, caption at
811 to 822. At 360, where lines turn: `rejection` 978 px, `sleep` 765 to
831.
Every line of type is given the full room for marks under it (30 px in
the prose passage, 37 px in the two in verse) on every tab, marked or
not: on `charges`, Sentence, seven of the thirteen lines of type carry
no mark. A reader of the Word tab sees the glosses of the first rows and
the caption that explains them a screen apart.

**5.4 The numbers of the remarks follow the order of the list, not of
the line.** `sleep`, Beat, both widths (`sleep-0-beat-1280`,
`sleep-0-beat-390`): on row 5.26 the number 3 stands after w3 and the
number 2 after w5, so the line reads 3, then 2. The reading lists the
remark on w4-5 before the one on w1-3. Wanted: remarks numbered by
where they stand in the passage; or the examiner changes the order of
the list (section 6).

**5.5 A gloss wider than its word runs under the next word's rule.**
`charges`, Word, 390 (`charges-1-word-390`): the gloss of 92.0 w13
reaches under the red rule of w14, whose own gloss is set a line lower.
The first gloss can be read as the second word's. Small.

**Mended in the kit while I worked** (for the record): the lower gloss
of 92.0 w14 stood on the speaker's name over row 94.0
(`charges-1-word-390-first-look`); in the last picture it is clear of it
(`charges-1-word-390`).

## 6. What may be wrong in the reading

Nothing that reaches the page. Every number the Play caption names
agrees with the facts and stands on the drawing; the parts add up to the
whole (1,640 lines of verse, 13,188 words of prose), each speaker's
`by part` adds up to that speaker's totals, and the tinted columns that
carry a scene number are nine of nineteen. Each caption was read against
its marks in the last pictures: four words of the first person marked on
`sleep`, Sentence; five orders and three names each way on `rejection`,
Names; three stops in row 55.0 on Beat; all as the captions say.

Three working notes no longer fit the page. None is printed, and none is
mine to change:

- **`open`, the second entry** says that nothing on the second plate
  marks the gap. The kit now sets three points on a line of their own
  between rows 5.4 and 5.22 (every picture of `sleep`). This also
  answers the item exam.md leaves "for the artist" (its section 11, the
  last entry): the gap is marked, and the heading says which lines are
  shown. Row 5.3 still ends on the word that ends row 5.26; with the
  points between them the plate reads as a cut, and the Rhyme tab gives
  row 5.3 the point of a line that rhymes with none, which is the
  reading's decision and a sound one.
- **`open`, the entry on the first tab of the first plate** says that
  only the first crossing is drawn with arcs and that the artist may
  want to draw the second. It is now the other way about: the second
  crossing has its two strokes, by `join`, and the first is told by
  color, because its two strokes cannot both be drawn where row 92.0
  turns (sections 3 and 5.1). notes.md, section 8, says the same as the
  old entry.
- **`sleep`, Beat, the order of `points`.** The second in the list
  stands on 5.26 w4-5 and the third on 5.26 w1-3, so on the plate the
  number 3 comes before the number 2 (section 5.4). If the kit keeps
  numbering by the list, the two entries want changing places.

One thing I could not settle and left alone: whether the `join` should
be `"none"`, so that both crossings of the first tab are told in the
same way, by color. I kept the X on the second crossing because the
caption's word is "crossed" and one true X shows what that means; a
reader then reads the first pair of colors in the same way. The lead may
think evenness worth more.
