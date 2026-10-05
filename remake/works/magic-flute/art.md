# The Magic Flute: the artist's record

Piece `magic-flute`. Begun 2026-10-03 10:45 UTC, after the seventh
mending of the kit (10:40 UTC); its correction of 11:06 UTC is dealt
with near the end. When the last pictures were taken is at the foot.

Words of the libretto, of the English libretto and of the play are
pointed at by passage, row and word number (rows as the reading names
them, words counted from 0 as the checker's proof counts them). None is
typed out here.

## What I drew

Nothing. The piece has no shape lens. Its ten tabs are: first passage
(`trial`) Words, Answers, Wishes; second (`queen`) Beat, Rhyme, Threat,
English; third (`weddings`) Words, List, Caliban. So there is no
`site/js/pieces/magic-flute.js` and no stylesheet.

## What I changed

Nothing. I was told not to edit `reading.json`, `notes.md` or `exam.md`
and to propose instead. Every trial was served to the browser from a
copy of the built piece kept in a scratch folder outside the project (a
small script of mine opens the page as the picture tool does and hands
it the copy), so `site/data/pieces/magic-flute.json` was never altered
by me: it is what `node build/pieces.mjs magic-flute` writes.

The pictures are in `shots/`. A name beginning `magic-flute-` shows the
page as it stands. A name beginning `try-` shows a trial of something
proposed below: a page that does not exist yet.

## Proposed for the reading

Two settings. Nothing else that an artist may set needs setting (see
"Looked at and left" below).

Both were put into a copy of `reading.json` in my scratch folder and
the checker was run on that copy (`node build/tools/check-reading.mjs
<path to the copy>`): no problems, no warnings, the printed notes fit
to print, and its proof names the noun as the word row 3.0 turns
after. The reading itself was not touched.

### 1. `queen`, the Threat tab: letter the crossing

In the figure lens of the plate `queen` (lens 2, label "Threat") set

    "join": [[0, 4], [1, 2]]

in place of `"join": "none"`.

What it does. No stroke is drawn, at any width: the parts lie on four
lines, and since the seventh mending the kit letters such a crossing
and draws nothing. Under the first word of rows 2.0, 3.0, 4.0 and 6.0
stands a small letter in the part's own color: a, b, b, a. Row 5.0
takes none; it goes on in the color of the second b. Underlines, key
and caption are as they were.

Why. The caption counts "Condition, penalty, penalty, condition" and
the key says "said again in the opposite order". As the page stands,
three blue lines lie between two red ones, and the reader must work out
alone which of the three make the caption's two penalties. The letters
show it: the first b is row 3.0; the second begins at row 4.0 and runs
through 5.0, as the caption says of the fifth and sixth lines.

The reason given for "none" (notes.md; exam.md, section 3; the
reading's `open`) is that a cross drawn here would have joined two
lines of the penalty with a stroke. That was so before 10:40 UTC. Now
no stroke is drawn for this figure whatever is set, so the reason has
fallen away, and "none" only withholds the letters.

Pictures (Threat tab):
- as it stands: `magic-flute-queen-2-threat-1280.png`, `-390.png`
- as proposed: `try-queen-threat-join-pairs-1280.png`, `-390.png`,
  `-320.png`

Checked. Deleting `join` gives the same picture as the pairs, pixel for
pixel at 1280 and at 390 (ImageMagick `compare -metric AE`: 0). I
propose the pairs all the same. With nothing set, the kit crosses the
first two tags that have two parts or more, and this lens has three
such tags (A, B, and C for the same words), so the right crossing would
rest on the order of the tags. The pairs name it: parts 0 and 4 are the
two statements of the condition, parts 1 and 2 the heads of the two
statements of the penalty. The letters stand clear of the underline
and of the English line at 1280, 390 and 320, and at 320 with
fractional letter widths too, where row 4.0 stands whole (see the
caution under the faults): `try-queen-threat-join-pairs-320-fractional.png`.

If it is set, two things follow that are not mine:
- the item of `open` that begins "The chiasmus is drawn with underlines
  only (join none)" is no longer true and wants rewording;
- the Rhyme tab of the same passage letters its lines too (a b a b
  c d c d, at the line ends). The two sets are never on screen together
  and stand in different places, so I do not think a reader will mix
  them up; the lead may judge otherwise, and then "none" should stay.

### 2. `queen`: one turn, for the smallest phones

On the plate `queen` set

    "turn": { "3.0": 4 }

but only if the kit is left as it is (fault 4 below is the same thing
seen from the kit's side, and mending it there serves every German
piece).

Where. Under about 330 px only (seen at 320). At 390 and at 360 row 3.0
stands whole (x 12 to 271 of 346 at 390).

What is wrong. At 320 the page turns row 3.0 after word 3, a
possessive, and its noun (word 4) begins the second part. Turned after
word 4, the first part ends on the noun (x 12 to 177 of 276) and the
last word stands in the second part (x 33 to 123): three beats over
two. I tried the turn after word 2 as well: it leaves three short
words and one beat alone over four, which is worse.

Checked on all four tabs at 390, 360 and 320, in both renderings (see
the caution under the faults): with the turn set, the line still
stands whole at 390 and 360; at 320 it turns after word 4 on every
tab; and no tab changes its height.

Pictures (Beat tab, 320):
- `try-queen-turn-3-three-ways-320.png`: row 3.0 three times. Top, as
  the page turns it; middle, turned after word 2; bottom, turned after
  word 4, as proposed.
- `try-queen-beat-turn-3-320.png`: the whole tab with the turn set,
  against `magic-flute-queen-0-beat-320.png`.

A turn set in the reading wins over the kit's own choice, so setting it
and mending the kit together does no harm.

### Looked at and left

- Headings. All three stand on one line at every width tried (1280,
  1024, 768, 390, 360, 320) and read well. The comma in the first is
  dealt with under fault 10.
- Tab names. One word each. The tabs keep to one row down to 320, on
  the passage with four tabs too.
- `beside`. Right on `trial` and on `weddings`: in each, two passages
  of equal standing are each read whole, and at 1280 they stand side
  by side. Right to be absent on `queen`: the English tab and the Beat
  caption are about each English line under its German.
- `speakers`. Not needed. The build already lifts the speakers' names
  over their speeches and sets the English of two of them beside the
  name.
- `weddings`, the List tab. No `join` is set and none is wanted: the
  spine at the left joins the three lines that begin alike, the spine
  at the right the four names, one stroke the two words for little,
  as the caption says and as the examiner found.
- Other turns. At 390 two lines of the aria turn (2.0 before its last
  word, 7.0 after its second dash), at 360 four, at 320 seven of
  eight (with fractional letter widths six, and seven on the Beat
  tab: fault 12). In `weddings` no line turns at 390 or 360 (the type
  is fitted to the longest line); at 320 rows 6.0 and 7.0 and row
  200.1 of the play turn, in both renderings. Each turns at a stop or
  keeps its phrase whole, but for row 3.0 above.

## Faults that are the kit's (or the hosted text's), worst first

Measures are in px inside the plate (x from its left edge, y from its
top), taken in the browser at the width named. None of these is mine to
mend. Where a mend is named it is a suggestion only.

### First, a caution about the picture tool

The picture tool's browser gives every letter a width in whole px.
Started with `--font-render-hinting=none`, the same browser places
letters by fractions of a px, which is, as far as I know, what phones
do (and desktop browsers outside Linux). I found it by measuring one
gloss: in the tool a word space of the 12 px italic is 2.00 px where
the face asks 2.64, and the gloss is 63.0 px wide, not 62.2. Verse at
16.5 px and the place beside a heading come out 1 to 2.5 per cent
wider in the tool (row 4.0 of `queen`: 250 px against 245); a label
over a passage comes out about 2 per cent narrower.

`build/tools/shoot.mjs` starts the browser with nothing set (its
line `const browser = await chromium.launch();`). It is not mine to
edit. For the lead: with `args: ['--font-render-hinting=none']`
there, the tool's pictures would break lines where a phone does. As
it is, a line that is just too long in the tool may fit on a phone,
and now and then the other way about.

So I took the measures of faults 1 to 5, 7 to 9 and 11 a second time
with fractional widths (my own script; the same page and build).
Faults 6, 10 and 12 aside, every fault holds in both renderings: 6
and 10 do not turn on widths, and 12 shows with fractional widths
only. What differs on this piece:

- `weddings`, the heading row at 1024: three lines in the tool, two
  with fractional widths (fault 2).
- `queen` at 320: row 4.0 turns on every tab in the tool; with
  fractional widths it turns on the Beat tab only (faults 1 and 12).
- `weddings` at 320: the place under the heading takes four lines in
  the tool and three with fractional widths, and the verse begins at
  y 234 and at y 215.
- A label of 53 characters over a passage stands on one line at 1024
  in the tool and takes two with fractional widths (fault 3).
- Heights on a phone differ by 20 to 75 px where a line turns in one
  rendering and not in the other (`queen`, Rhyme, 320: 1,951 and
  1,876 px; `trial`, Words, 360: 2,909 and 2,890).

A picture whose name ends `-fractional.png` was taken with fractional
widths, by my script. All the others are as the picture tool renders.

### 1. Rhyme tab on a phone: the two parts of a turned line stand far apart

- Passage `queen`, tab Rhyme. At 390 rows 2.0 and 7.0; at 360 rows 1.0,
  2.0, 6.0, 7.0; at 320 every row but 5.0.
- At 390 the first part of row 2.0 stands at y 362 to 382 and the
  second at y 419 to 439: 37 px of empty room between them, more than
  between a German line and its English (31 px). Nothing is drawn in
  that room on this tab: the letter and the arc stand after the last
  word of the second part.
- So the first part reads as a line of its own that has no rhyme
  letter. At 390 the eye counts ten lines against the eight letters of
  the key; at 320 fifteen. On the one tab where counting lines is the
  point, the line count is the thing blurred.
- The seventh mending closes the two parts of a turned line that the
  tab showing does not mark (it works: on the Threat tab at 320 rows
  0.0, 1.0 and 7.0 are closed). On a Rhyme tab every line counts as
  marked, by its last word. Suggested: on a Rhyme tab treat the first
  part of a turned line as unmarked unless a thread marks a word in
  it. A closed line is about 35 px shorter (on the Threat tab at 390
  the parts of row 7.0 stand 2 px apart, on this tab 36), so that
  would also take some 70 px off this tab at 390, 140 at 360 and 245
  at 320 (it is 1,562, 1,719 and 1,951 px tall).
- With fractional letter widths (see the caution) 390 and 360 are the
  same, row for row. At 320 row 4.0 stands whole on this tab, so six
  rows are turned, the eye counts fourteen lines, and the tab is
  1,876 px tall.
- Pictures: `magic-flute-queen-1-rhyme-390.png`, `-360.png`,
  `-320.png`; for the closed parts, `magic-flute-queen-2-threat-320.png`;
  with fractional widths, `magic-flute-queen-1-rhyme-320-fractional.png`.

### 2. A long place pushes the tabs under the heading, to the left

- Passage `weddings`, every tab, 1280 and 1024.
- 1280: heading at x 61 to 204, place at x 213 to 951 on the same
  line, and the tabs alone on a second line at the left (x 61 to 258,
  y 59 to 81). On `trial` and `queen` the tabs stand at the right on
  the heading's own line (on `trial` at x 899 to 1119, y 30 to 52).
  So the third passage of the page does not look like the first two.
- 1024, as the picture tool renders: three lines. Heading (y 30 to
  45); the place alone on the second, 10 px in from the heading's
  left edge (x 61, heading x 51), because it keeps the left margin it
  has beside a heading; tabs on the third (y 75 to 97).
- 1024 with fractional letter widths (see the caution): the place
  just fits beside the heading (x 202 to 922, with 11 px to spare)
  and only the tabs drop, as at 1280. The three lines then come on
  windows a little narrower: seen at 1010, 1000 and 960 px. At 900
  the one-column layout has taken over and the place stands under
  the heading by design.
- Cause: the place is the label of the hosted part
  `o-magic-flute/weddings`, 123 characters (the other two parts: 83
  and 75). After act and scenes it says again which lines these are,
  which the label over the passage says too.
- Mend in the hosted text (the lead's; I may not write there): end
  that label at its colon, 53 characters. Tried in a copy, in both
  renderings: at 1280 and at 1024 the heading row is one line with
  the tabs at the right, and the plate is 29 and 45 px shorter in the
  tool (29 and 29 with fractional widths); at 390 the place takes one
  line where it took three and the verse begins 37 px higher.
- Mend in the kit, for every piece: tabs that must drop could keep to
  the right in the wide layout, and a place that has dropped to a
  line of its own should lose its left margin.
- Pictures: `magic-flute-weddings-0-words-1280.png`, `-1024.png`,
  `-390.png`; with fractional widths,
  `magic-flute-weddings-0-words-1024-fractional.png`; in the page,
  `magic-flute-page-1280-2.png` (the third heading) against `-1.png`
  (the second); tried: `try-weddings-words-short-place-1280.png`,
  `-1024.png`, `-390.png`.

### 3. Two passages side by side do not begin level

- Passage `weddings`, every tab, 1280 and 1024.
- The label over the first passage (76 characters) takes two lines,
  the label over the second (48) one. The first lines of type begin at
  y 179 and y 163 at 1280, at y 194 and y 178 at 1024: 16 px apart
  (and 16 px apart with fractional letter widths too).
  Two passages "of equal standing" start on different lines.
- Mend in the kit: give the two labels one height where the passages
  stand side by side.
- Or in the reading (a plate's `label`, not mine to set), a shorter
  first label; but that is a narrow way. Tried with one of 53
  characters beside the shorter place. In the picture tool both
  passages begin at y 134 at 1280 and at y 133 at 1024, where the
  label ends 2 px short of its column. With fractional letter widths
  the same label is 426 px wide: it stands on one line at 1280 and
  takes two at 1024, where the column is 421 px; and the columns
  narrow to about 400 px before the passages go one under the other.
  So a label is safe only at about 48 characters or fewer (the second
  label is 48, and 376 px wide), and the mend in the kit is the
  sound one.
- Pictures: `magic-flute-weddings-0-words-1280.png`; tried:
  `try-weddings-words-short-place-and-label-1280.png`, `-1024.png`,
  both as the picture tool renders (with fractional widths the second
  would show the label on two lines again). The wording of the label
  in the trial is only a stand-in of the right length; what it should
  say is the lead's.

### 4. German possessives are not among the words that lead to the next

- Passage `queen`, every tab, 320: row 3.0 turns after word 3.
- Since the seventh mending a turned line does not end its first part
  on a short word that leads to the next. The German list
  (`LEADS.de` in `site/js/kit/plate.js`) has articles, prepositions
  and two conjunctions; the English list has the possessives too. So
  a German line may still end a part on a possessive, as here.
- Mend: add the German possessives (the forms of mein, dein, sein,
  ihr, unser, euer) to that list. Until then, setting 2 under
  "Proposed for the reading" mends this one line.
- Picture: `magic-flute-queen-0-beat-320.png`; the top row of
  `try-queen-turn-3-three-ways-320.png` shows the line alone.

### 5. Glosses are 12 px on a phone

- Passages `trial` and `weddings`, tab Words, 390, 360, 320.
- A gloss is 12 px italic where the plate is under about 500 px wide
  and 13.5 px on a wide one; the small notes beside a passage are
  13 px on a phone. On `trial` the 35 glosses are all the English a
  reader gets of the scene (the English libretto leaves the scene
  out), so the smallest type on the page carries the most.
- This is a matter of size and of judgement; nothing is broken. Tried
  in the browser only (a style added to the page there; nothing in
  the project was changed), glosses at 13 px: on `trial` none touches
  another and none goes a level lower at 390, 360 or 320, in either
  rendering (see the caution above); at the worst the nearest two are
  10 px apart with the kit's hairline between them. On `weddings` the
  same at 390 and 320. No plate grows taller. Other pieces would want
  the same check before the floor is raised.
- Pictures: `magic-flute-trial-0-words-390.png`, `-360.png`,
  `-320.png`; tried: `try-trial-words-gloss-12-and-13-390-fractional.png`,
  the head of the first exchange with letters placed as a phone places
  them: as it stands at the left, glosses at 13 px at the right.
  `try-trial-words-gloss-12-and-13-390.png` is the same in the picture
  tool's browser, where a 12 px gloss looks tighter than it is.

### 6. A remark's number stands after a dash

- Passage `queen`, tab Beat, every width: row 7.0, remark 3.
- The remark is pinned to words 0 to 2. Word 2 carries the dash that
  follows it, so the small red 3 stands after the dash (at 1280 the
  word with its dash ends at x 302, the number stands at x 303 to 309,
  the next word begins at x 314). It reads as a number on the dash.
- Mend: where the last word of a remark ends in a hanging dash, set
  the number before the dash, after the word's last letter or stop.
- Picture: `magic-flute-queen-0-beat-1280.png` (the last line).

### 7. The ticks of a spine at the left all but touch the first letters

- Passage `weddings`, tab List, 1280 and 390.
- The red spine joining rows 1.0 to 3.0 stands 7 px left of the lines
  and its ticks are 5 px long, so each tick ends 2 px from the first
  letter (ticks to x 59.4, letters from x 61.4 at 1280; x 10.0 and
  12.0 at 390). The spine at the right stands 12 px out, and its ticks
  end 7 px from the longest line (x 395.7, line to x 388.7).
- At 1280 there are 61 px of margin at the left, so the left spine
  could stand as far out as the right one. At 390 the margin is 12 px
  and the 2 px are forced, unless the ticks there are shorter.
- Pictures: `magic-flute-weddings-1-list-1280.png`, `-390.png`.

### 8. A label over a passage may leave its last word alone

- Passage `weddings`, every tab, 390: the label over the second
  passage takes two lines, and the second holds one word (the lines
  end at x 310 and x 82 of 346).
- The heading has `text-wrap: balance`; the label over a passage
  (`.beside-l`) has not, and the seventh mending's rule for a last
  word alone was not carried to it.
- Picture: `magic-flute-weddings-0-words-390.png`.

### 9. Speakers' names sit 2 px closer to their speeches in a second passage

- Passage `trial`, every tab, 1280 (two columns).
- Both first names stand at y 135. The first speech begins at y 155
  in the first passage and at y 153 in the second, and from one
  speech to the next the lines step 78 px at the left and 75 at the
  right. The stylesheet gives a speaker's name `margin: 7px 0 5px` in
  a first passage and `.9em 0 .25em` in a second; for a plate of two
  equal passages it evens out the sign of omission but not the names.
- Seen only with a ruler. Picture: `magic-flute-trial-0-words-1280.png`.

### 10. "What each caption stands on" joins heading and tab with a comma

- The foot of the page, every width.
- Each entry is named by its passage's heading, a comma, and the
  tab's name. The first heading holds a comma itself, so its three
  entries read as lists of three things (the heading's two halves and
  the tab).
- Mend in `site/js/piece.js` (line 113): part the tab from the heading
  by something other than a comma. I would not change the heading for
  this: it is good as it is, and the third passage's Words tab quotes
  it in what it stands on.
- Picture: `magic-flute-foot-0-1280.png` (the folded list, opened).

### 11. A one-letter word ends a line under the record

- The page, under "A record of it", 1280, 1024 and 768 (the column is
  680 px wide at all three).
- The credit under the player takes two lines, and the first ends on
  the article that begins the next sentence. The seventh mending
  keeps a word of one letter with the word after it in a passage; the
  page's own prose does not yet, and this line has plain wrapping
  where the source lines of the Auden column have `text-wrap: pretty`.
- Picture: `magic-flute-page-1280-4.png` (the last two lines).

### 12. A line may turn on the Beat tab and stand whole on the others

- Passage `queen`, 320, with fractional letter widths only: so, as
  far as I can tell, on a phone of that width, and not in the picture
  tool, where the line turns on every tab.
- Row 4.0 is 245.0 px wide in plain letters and just fits. On the
  Beat tab its stressed syllables are bold, it is 250.7 px wide, no
  longer fits, and turns after word 1. So one line of the aria is in
  two parts on one tab and whole on the other three.
- When the kit sizes the type of a plate with a Beat tab it allows 4
  per cent for the bold. Once the type is at its floor and lines
  turn, nothing allows for it. Suggested: keep that allowance in the
  room a line has, so that a line turns on every tab or on none.
- Small, and last for that reason. Pictures:
  `magic-flute-queen-0-beat-320-fractional.png` against
  `magic-flute-queen-1-rhyme-320-fractional.png` (the fifth line).

### Seen, and not counted as faults

- `trial` on a phone is long: the Words tab is 2,668 px tall at 390,
  the first passage begins at y 139, the second at y 928, the caption
  at y 1,875. Passage and caption are never on one screen. The lead
  has ruled that a long plate is long on a phone, and nothing I may
  set shortens this one: its two passages must each be read whole.
- `queen`, tabs Rhyme, Threat and English, every width: each English
  line stands nearly midway between its German line and the next
  (at 1280 the boxes are 42 px apart above it and 56 below; at 390,
  31 and 42). On the Beat tab the marks fill the room above and the
  pairs are plain; on the other three they are weaker. I see no mend
  that keeps a line where it stood from tab to tab, which the kit
  rightly does.
- `trial`, tab Words: 35 phrases are underlined alike, and 8 of them
  have a note under the caption as well. Nothing in the passage marks
  those 8; the note names its phrase in bold, which is enough.
- `trial`, tab Words, 1280: the eight notes run in three columns the
  whole width of the plate, under a caption that keeps to the left
  half, so the room beside the caption stays empty (x 707 to 1119,
  y 987 to 1166). On the other two tabs the remarks or the key stand
  there. It does not look broken.

## In the reading, and not mine to set

Captions, marks, notes, sources and the Auden column are not an
artist's to change. These I only report; none is a matter of fact.

### a. Words named as words in the small notes are not marked

The kit sets a remark or a note beside a passage in italic, and a word
named as a word in it, marked `*word*` in the reading, then stands
upright. This reading marks such words in its sources, in its caveats
and in what each caption stands on, but in none of its small notes. So
in a note the German word is in the same italic as the English around
it, and where a note opens with the German word a reader with no
German takes it for English. The note on `trial` 7.0 words 5 to 8
opens with a word that is also an English word; the note on `weddings`
2.0 words 0 to 1 reads as if somebody of that name "says" something.

The places, each word given by where it stands in its note:
- `trial`, Words. Its first word: the notes on 4.0 words 1 to 6 (and
  there the English word before "here" as well), 7.0 words 5 to 8,
  7.0 words 9 to 10, and in the second exchange 12.0 word 40 and 16.0
  words 1 to 3. The note on 2.0 word 9: the verb after "defines" and
  the noun before "a victory". Second exchange, 12.0 words 14 to 18:
  the noun after "defines a"; 12.0 words 37 to 39: the noun after "In
  Adelung".
- `queen`, Beat. Remark 1: the word before "death". Remark 3: the
  words before "vengeance" and before "gods", and the compound before
  "gods of vengeance".
- `queen`, English. The remark on 5.0 words 2 to 4: its first three
  words, and the three after the colon. The remark on 6.0 word 6: its
  first word, and "dies", "now" and "vow".
- `weddings`, Words. The note on 0.0 word 0: the word after "notes
  that". Its first word: the notes on 2.0 words 0 to 1 and on 6.0
  words 6 to 7. The note on 6.0 words 0 to 3: its first word and the
  noun after "the verb of".
- `weddings`, Caliban. The remark on 1.0 word 3: its last word.

Picture: `try-trial-words-notes-upright-1280.png`, the eight notes of
the first passage as they stand (above) and with those words marked
(below).

### b. Titles are not marked in the Auden column or under the page title

A marked title stands upright in the italic line under the page title
and in the italic source lines of the Auden column; 24 of the 35
pieces built mark the work's title in the line under their title. Here
none is marked in those places: not the opera's name in the line under
the title; not the book in the source under "What Auden said"; not the
play's name in the first and fifth entries of "More from Auden" nor
the opera's in the seventh; not the nine book titles in the sources of
those seven entries. Fourteen in all. The same titles are marked in
the list of sources at the foot of the page and in the caveats.
Pictures: `magic-flute-page-1280-0.png` (the head of the page),
`-3.png` and `-4.png` (the entries).

### c. The label over the first passage of `weddings` says what the place has said

The label is 76 characters and the place beside the heading 123, and
both say which lines these are. At 390 the place takes three lines and
the label two, so with the heading that is six lines of small type,
and the row of tabs, over the first line of verse (it begins at
y 199); at 320 the place takes four and the label three (y 234; with
fractional letter widths three and three, y 215).
Faults 2 and 3 are the same thing at 1280 and 1024. With the place cut
at its colon the verse begins at y 162 at 390.

### d. A heading named in running words, unmarked

What the Words tab of `weddings` stands on names the first passage by
its heading, with no quotation marks, and the heading's own comma
makes the sentence stumble: it runs "in the first passage on this
page, The same question, twice; Auden:". Picture:
`magic-flute-foot-0-1280.png`, the eighth entry.

### e. If proposal 1 is taken

The item of `open` on "join none" wants rewording, as said there.

As far as looking can tell, every tab draws what its caption says. I
found nothing in the reading that I think wrong in substance.

## The fault mended at 11:06 UTC, and this piece

The lead's notice (and the last paragraph of KIT-CHANGES.md) says that
between 10:40 and 11:06 a line of verse holding two words joined by a
dash could turn wrongly, and a marked run could part after such a
dash. I counted by script over the built piece: no word of this piece
is two words joined by a dash. Seven words carry a dash that hangs
after them (`trial` 6.0 words 6 and 14; second exchange 12.0 words 5
and 26, 14.0 word 4; `queen` 7.0 words 1 and 2), and one marked run
holds such a dash (`queen`, English tab, 7.0 words 1 to 2). I
photographed `queen` at 11:12 UTC at 1280, 390, 360 and 320 and
compared each picture with the one taken before the mend (ImageMagick
`compare -metric AE`): all sixteen were the same, pixel for pixel, and
the sixteen last pictures are the same again. The pictures of `trial`
at 390 (three tabs) and at 320 (Words) are likewise the same before
and after. The fault did not touch this piece.

## Refused by the permission system

Nothing was refused. Four times between 11:30 and 12:25 UTC the
session answered that it could not judge a command just then, because
the model that checks commands had timed out, and said to wait and try
again; each time the same command ran at the second asking. I count
those as delays, not refusals, and tried no other way.

## The last pictures

Before them, at 11:26 UTC, I read the end of `remake/KIT-CHANGES.md`
again, from the seventh mending on (I had read the whole file after
its last change, at 11:07:44; it has 304 lines). Its last entry is
still the mend of 11:06, and the file was unchanged when I looked at
11:49 and at 11:57. `site/js/kit/plate.js` and `site/css/atlas.css`
last changed at 11:05:49; `reading.json` at 10:11:26.

Built again at 11:49:39 UTC (`node build/pieces.mjs magic-flute`): the
built piece came out byte for byte as before, since the reading had
not changed. `node build/tools/check-reading.mjs magic-flute`: no
problems, no warnings, the printed notes are fit to print.

Then, one passage at a time (times from `date -u` before and after):

    node build/tools/shoot.mjs magic-flute --plate trial \
      --widths 1280,390,360,320,1024,768 \
      --out remake/works/magic-flute/shots        11:49:47 to 11:50:32
    the same with --plate queen                   11:50:39 to 11:51:31
    the same with --plate weddings                11:51:31 to 11:52:14
    node build/tools/shoot.mjs magic-flute --plate none --page \
      --out remake/works/magic-flute/shots        11:52:24 to 11:52:37

Each of the four runs ended with the line

    nothing reported; now look at the pictures

The opened lists at the foot, the hover and the trials were then
photographed by my own script, from 11:53:27 to 11:57:45 UTC. Every
older picture was removed or written over, so the 92 files then in
`shots/` are of those eight minutes, taken with one build and one
state of the kit:

- 60 of the passages: ten tabs at 1280, 390, 360, 320, 1024 and 768,
  `magic-flute-<passage>-<n>-<tab>-<width>.png`;
- 15 of the whole page: `magic-flute-page-1280-0` to `-5`,
  `magic-flute-page-390-0` to `-8`;
- 4 of the two folded lists at the foot, opened:
  `magic-flute-foot-0-` and `-1-`, at 1280 and 390;
- 1 of a word of a caption lit where it stands:
  `magic-flute-trial-0-words-1280-hover-first-bold.png` (the first bold
  word of the caption lights its two places, one in each exchange);
- 12 trials, named `try-`, each cited above.

Five more were added afterwards, when I found how the picture tool
places letters (the caution under the faults). All five are with
fractional letter widths, by my own script, from the same build and
the same state of the kit:

- `try-trial-words-gloss-12-and-13-390-fractional.png`, 12:16:45 to
  12:16:58 UTC;
- `magic-flute-weddings-0-words-1024-fractional.png` and
  `magic-flute-queen-1-rhyme-320-fractional.png`, 12:21:23 to
  12:21:34 UTC;
- `magic-flute-queen-0-beat-320-fractional.png`, 12:30:48 to
  12:30:54 UTC;
- `try-queen-threat-join-pairs-320-fractional.png`, 12:40:47 to
  12:40:53 UTC.

So `shots/` holds 97 files: 80 of the page as the picture tool
renders it, 3 of the page with fractional widths, and 14 trials.

I looked at every tab at 1280 and at 390, at the tabs cited at the
other widths, at the page from head to foot at both widths, and at
each trial. The picture tool reported nothing, and I found nothing
drawn over a word, cut off, or outside its plate.

At 12:40:16 UTC, and again at 12:41:35 just before handing this in,
I looked once more. The kit's scripts (`site/js/kit/*.js`, last
changed 11:05:49), `site/css/atlas.css` (11:05:49),
`site/js/piece.js`, KIT-CHANGES.md (11:07:44, 304 lines, its last
entry still the mend of 11:06), the reading (10:11:26) and the built
piece (11:49:39, the same bytes) were all as they were when the
pictures were taken, and the checker again found no problems and no
warnings. So the pictures show the page as it stood at 12:41:35 UTC.

One thing had changed, and it is not the page:
`build/tools/shoot.mjs` was changed at 12:35:46 UTC, after my
pictures. It has a new option, `--site`; it still starts the browser
with nothing set, so the caution under the faults stands.
