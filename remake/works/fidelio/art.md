# Fidelio: the artist's record

Begun 2026-10-03, 10:21 UTC. Nothing here is printed on the page.
Words of the libretto are pointed at by row and word number only.

Handed in: `site/js/pieces/fidelio.js` (one drawing, plate `name`, tab "Names"),
this file, and the pictures in `shots/`. No stylesheet of the piece's own was needed.
I did not edit reading.json, notes.md or exam.md. The built copy
`site/data/pieces/fidelio.json` was only ever written by `node build/pieces.mjs
fidelio`; my trials used copies of it in the scratchpad, served in its place.

## 0. State on arrival

- Read: BRIEF.md, ARTIST.md, the kit's README, KIT-CHANGES.md (six mendings then; the
  seventh, 10:13 to 10:40 UTC, and its correction of 11:06 UTC read since), adams.js,
  reading.json, notes.md, exam.md.
- No site/js/pieces/fidelio.js and no art.md before this one.
- The reading was last written at 10:06 UTC and has not changed since.

## 1. What I drew, and why that form

The reading's table of names (plate `name`, tab "Names") has four parts of the opera
and, for each, how often each of her two names is said and by whom. The plain table
was five columns wide and ran off a phone (the examiner's remark). It is now a
drawing: `shots/fidelio-name-3-names-1280.png`, `shots/fidelio-name-3-names-390.png`.

- The parts stand in the opera's order, down the page, each under a hairline.
- The speakers stand in one middle column between two upright hairlines. One mark
  for each time a speaker says the first name stands to the left of that speaker,
  one mark for each time they say the second name to the right. So the two names are
  two sides of one column of people, and a glance tells the story the caption tells:
  marks at the top left, then marks only at the right, and nothing at the left from
  the red part on.
- Marks are grouped in fives so that 8 and 6 can be counted. A row of more than the
  width holds turns after ten, or after five.
- The count of a part stands beside its rows, in the face of the two names at the
  head (`dg-name`): it is the name's count for that part, and the small figures
  (`dg-n`, 12.5 px) are the size of the speakers' names and would not stand out
  from them. Where it adds up several rows a hairline runs down those rows, so that
  15 is not read as the count of the middle row it happens to stand level with.
- Where the facts say that no one says a name, their own words ("no one") stand
  where the marks would.
- What the facts add about a count (part 2, second name: how Florestan's three are
  made up) stands in the facts' own words under its row.
- The part whose `read` place lies among the rows this plate shows is red, the
  site's color for "this, here": its name, its marks, its count.
- Each part's name opens the book at the place the facts give (`read`); tested, all
  four open the reader with the block near the top of the window.
- Pointing at a row (or touching it) says the whole of it in a line under the key,
  for example: "Act 1. *Fidelio*, 15 times: Marzelline 8, Rocco 6, Jaquino 1."
- From 520 px of drawing the parts' names stand in a column at the left and the
  rows end at the right edge; below that the name stands over its rows and the rows
  stand in the middle. Seen at windows of 1280, 1100, 940, 760, 600, 480, 390, 360
  and 320.

Why not a line of marks in the true order of the opera: the facts give counts by
part and by speaker, not the order of the sayings inside a part, and I may not make
that up. The four parts are the only order the facts hold, and the drawing keeps
it. Also tried and left: a horizontal lay-out with the parts side by side (the
speakers' names do not fit at 264 px), totals at the foot (the caption never adds
the parts together), the folded table of figures `d.figures` (every number is
already on the drawing).

## 2. How the script reads the facts

Nothing of the opera is typed in the script: no name, no count, no part.

- The two names are the two keys that hold a count in every part. If there are not
  exactly two, the script throws `facts: ...` and the kit shows its plain table.
- Who says each: the worded key that holds the name in its own name ("who says
  ..."), or else the key that follows the count.
- The part: the first other worded key that is not `read`.
- The speakers are read out of the facts' words for who says a name:
  "A 8, B 6, C 1" where the numbers come to the part's count; "A: how" (one
  speaker, and the rest set under the row); "A, then B" where there are as many as
  the count (one saying each; the facts' "then" is kept); "A" alone. Anything else
  is one row of marks with no name and the facts' whole words under it. So the
  marks of a part always number what the part counts, whatever the words are.
- The red part: the `read` of a part is compared with the places of the rows the
  plate shows (its own and its second passage's). No part is red if none matches.
- The key's second line takes the red part's own name from the facts.
- Words of my own in the script: the key's "each time the name is spoken or sung"
  (notes.md section 4 defines the counts so, with speakers' names and directions
  left out), and "once / twice / n times" in the line that speaks.

Tried against copies of the built piece with awkward facts (scratchpad only):
words that cannot be read as speakers, numbers that do not add up to the count, a
count of 23 (turns after ten), a part where no one says either name, a missing
`read`, long speakers' names, and facts that are not a table at all (the kit's
plain table appears, as it should).

## 3. Faults of my own drawing, found in the pictures and mended

- First draft: rows ran into each other (the tool reported two labels overlapping);
  a row's height was computed as none where a row did not turn. Mended.
- A count stood far from its single mark (one outer column for all parts). It now
  stands just beyond its own rows.
- The two upright lines were broken at every row. Now one line for each run of rows.
- The words under a row took the pointer away from the row. They now let it through.
- At 1280 the rows began at mid-width and left the right of the drawing bare. They
  now end at the right edge.
- The count of three rows stood level with the middle row and read as that row's.
  A hairline now runs down the rows it adds up.
- Still there, and left: my own stricter check finds each part's name, set at x = 0
  in small capitals, one pixel wider at the left than the drawing (the letter's own
  side bearing). It is inside the plate, other pieces set headings at 0 as well, and
  the picture tool does not report it.

## 4. Faults that are not mine to mend, worst first

Every tab of every plate was looked at at 1280 and 390 after the seventh mending
(pictures of 11:01 to 11:11 UTC, taken again at the end: section 8), three tabs
also at 320, and the places below were measured in the browser.

**K1. The build (or the cut of the German file). The German speakers' names, stage
directions and headings are rows of the passages, set at the size of the verse.**
- `name`, every tab, every width: rows 1.0, 3.0, 5.0, 7.0, 9.0 and 11.0, six of the
  thirteen rows, are a name in capitals (1.0, 7.0, 11.0 with a direction after it).
  They stand at 28.9 px at 1280 and 17.5 px at 390; the English beside them has its
  names in 11 px small capitals and its directions in 13.5 px italic. The eye meets
  the capitals first and the seven speeches second; on the Beat tab the three
  speeches that share one line of verse (rows 2.0, 4.0, 6.0) are held apart by two
  rows of capitals; at 320 row 1.0 turns like a line of verse.
  Pictures: `fidelio-name-0-figure-1280.png`, `fidelio-name-1-beat-1280.png`,
  `fidelio-name-0-figure-390.png`, `look-name-figure-320-top.png`.
- `answer`, every tab, every width: rows 6.0 (the heading of the number), 7.0, 10.0
  and 13.0, at 20.4 px at 1280, in the same column where the build has lifted the
  names of rows 4.0 and 5.0 and set them small: two ways of naming a speaker, one
  under the other. Picture: `fidelio-answer-0-versions-1280.png`.
- `scene`, every tab: rows 0.0 and 12.0, the two headings, at 27 px at 1280, where
  the English sets its heading as a small direction. Picture:
  `fidelio-scene-0-beat-1280.png`. (The least of the three: a heading is at least a
  line the libretto prints, and the reading's caption speaks of it.)
- Why: every line of the German file is a block of its own, and `nameAt` in
  build/pieces.mjs lifts a name only where words follow it in the same row. The
  reading cannot mark these rows (`speakers` glosses a name the build has already
  lifted), and leaving them out of the plate's rows would print three points
  between every two speeches. The poet asked the artist to look at this first
  (notes.md, section 5); the examiner asked for them small.
- A trial, on a copy of the built piece in which those rows become what the kit
  already sets as a speaker and a direction (`aside: s`, `aside: d`), the Word tab's
  English for a direction going after it as a speaker's gloss does:
  `trial-names-lifted-name-figure-1280.png`, `-390.png`,
  `trial-names-lifted-name-beat-1280.png`, `trial-names-lifted-answer-versions-1280.png`.
  The plates read as a play does, and `answer` ends level with its English.
- Three things the trial showed, for whoever mends it:
  1. `name` then has seven rows in each passage, and the kit sets a second passage
     with as many rows line under line. The English speeches do not answer the
     German rows one for one (row 4.0 is said by two men together and the English
     gives each his own speech, p:290.0 and p:292.0; rows 12.0 and 13.0 are one
     English speech, p:302.0), so the third to the sixth English lines stand under
     the wrong German lines: `trial-names-lifted-line-under-line-1280.png`. `beside`
     is not the cure (it sets both passages in one type and levels them row for
     row). A rule that would serve: a second passage whose rows carry speakers of
     their own (`who`) is never set line under line. In my trial pictures an empty
     last row in the copy's English kept the two blocks.
  2. On the Figure tab the two blue parts (2.0 word 2 and 4.0 word 0) come to stand
     on lines that follow each other, and the kit joins them with a stroke, broken
     behind the name; a stub of about 2 px is left below the name (at x 93, y 272
     in the 1280 trial picture). The reading may then want a `join`.
  3. The type of `name` grows from 28.9 to 38 px at 1280: there are fewer rows, and
     the longest of them, row 1.0 (a name and its direction), is gone. The notes of the Word tabs on rows 1.0, 7.0, 11.0 (`name`), 6.0 and 13.0
     (`answer`) and the remark of `scene` / Beat on row 12.0 would need a new home.

**K2. The kit. `answer` / Versions, 1280 and 390: a pair's number runs into the
speaker's name under it.** In the English, the number of pair 1 under row p:344.0
(words 0 to 1) and the name over p:346.0: at 1280 the number's box is 203.8 to
220.4 px down the plate and the name's 218.4 to 231.5; at 390, 1058.0 to 1071.8 and
1071.7 to 1084.9. Row p:344.0 is prose, whose line is 41.7 px (35.8 at 390) where a
marked row of verse has 57.6; the number hangs below the row's box into the 9.9 px
over the name. In the German column the same number stands 13 px clear.
Pictures: `fidelio-answer-0-versions-1280.png`, `fidelio-answer-0-versions-390.png`.

**K3. The kit. `answer`, every tab, every width: the third English speaker's name
stands 11 to 13 px further from its speech than the other two.** From the top of
the name to the top of the words under it, Verbs and Words tabs: 16.6, 17.2 and
27.8 px at 1280; 16.8, 16.8 and 25.4 px at 390. The space that parts two stanzas is
set on the row (class `stanza` on the row's own paragraph, 13.3 px at 1280, 11.2 at
390) and the name is put in before the row, so the space falls between a name and
its speech and not over the name (plate.js, where the second passage is built). On
the Versions tab the three distances are 14.6, 22.6 and 35.5 px at 1280: there the
name's negative margin pulls the row up under it, and a prose row's words stand
8 px higher in their line than a verse row's. Pictures:
`fidelio-answer-1-verbs-1280.png`, `fidelio-answer-0-versions-1280.png`.

**K4. The kit. `scene` / English, 1280 and 390: a turned line that the tab does not
mark keeps its two parts a whole row apart.** English row p:391.1: 73 px from its
first part to its second at 1280, 39 px at 390, the same as from row to row, and
only the indent says it is one line. The seventh mending's rule (two parts close,
the room after the second) reaches the first passage and a twin; in a second
passage that stands as a block the rows are never marked `plain`.
Pictures: `fidelio-scene-3-english-1280.png`, `fidelio-scene-3-english-390.png`.

**K5. The kit. `answer`, every tab, 390 and narrower: each of the two labels over
the passages leaves its last word alone on a second line.** Both labels are 30.8 px
tall, two lines. Captions and notes are kept from this; the labels (`.beside-l`)
are not. Picture: `fidelio-answer-0-versions-390.png`.

**K6. The cut. `scene`, every tab: the eight rows of the aria stand as one block.**
No space parts row 16.0 from 17.0, where the Beat caption has its second change
and the Rhyme caption says the last four lines close in again. The kit knows a
stanza by a block of more than one row, and here each line is a block. Small.
Picture: `fidelio-scene-1-rhyme-1280.png`.

**K7. The thing itself, made worse by K1: the plates are long on a phone.** At 390:
`answer` 1,930, 1,656 and 1,888 px (Versions, Verbs, Words); `scene` 2,180, 1,729,
2,206 and 1,932; `name` 1,837, 2,232 and 1,904, and 1,056 on Names. In `name` six of
the thirteen rows, about 343 of the passage's 767 px, are names.

Looked at and not faults: German row 5.0 of `answer` (a spoken speech of 23 words)
turns as prose at 1280 and with a hanging indent at 390, at its stops; on
`scene` / English at 1280 the English stands at the foot of its column and the two
ends of pair 1 are far apart, told by number and color; in English row p:393.3 two
underlines that meet inside one dash-joined token are set at two heights.

## 5. Proposed for the reading

One thing, small, and the lead may well leave it:

- Plate `name`: `"speakers": { "ROCQUO": "Rocco" }`.
  The English libretto prints the jailer's name so over row p:292.0, and the
  captions call him Rocco. With the gloss the name over that speech reads as the
  kit sets a speaker's gloss, the old spelling and then who that is. Picture, from
  a copy of the built piece with `whoGloss` set on that one row:
  `shots/trial-speakers-name-english-1280.png`. (The other English names differ
  from the captions' by a letter and need nothing.)

Nothing else is proposed, and why:

- `turn`: at 390 the two long German rows of `answer` (4.0 and 5.0) turn at their
  stops; at 320 rows 3.0 and 13.0 of `scene` turn after their comma; no turned line
  leaves a word alone. Nothing for a reading to say better.
- `beside`: the English of all three plates is a version, and the smaller type is
  right for it. It is also not the cure for K1 (section 4, K1, point 1).
- `heading`, the lenses' `label`s: they say what each plate and tab is. "Names" is
  right for the drawing.
- `join` (plate `name`, Figure): the two spines join the right parts as it stands.
  If K1 is mended, look at this tab again (section 4, K1, point 2).
- The facts of the Names tab: the drawing needs no new key. The red part is found
  from the part's `read`, which the reading already gives.

## 6. Anything in the reading I think is wrong

- Nothing wrong found in the facts or the caption of the Names tab. The counts
  agree with notes.md section 4 (15; 1; and 12 = 3 + 2 + 7, of which Florestan's
  8 = 3 + 1 + 4), and every number the caption names can be found in the drawing.
- Slight, for the lead to judge: the facts name the third part "the lines shown
  here" and the caption says "In the lines shown", but on the Names tab the drawing
  stands in the passage's place and no lines are shown. "the lines of this passage"
  would be true on every tab. The script prints whatever name the facts give, in
  the drawing and in the key.
- `answer` / Words gives an English gloss to row 13.0 (a speaker's label) and to
  row 6.0 (the number's heading) as if they were words of the speeches, and leaves
  the labels of rows 7.0 and 10.0 bare. This follows from K1 and goes with it.
- Nothing else.

## 7. What the permission system refused

Nothing was refused.

## 8. The final pictures

- remake/KIT-CHANGES.md read again at 11:11 UTC, after the lead's word of the
  correction made at 11:06, and checked once more at 11:31 UTC: last written
  11:07:44, seven mendings and that correction, nothing newer. The README's part on
  how a plate lays itself out read again (last written 11:08). The kit's files were
  last written at 11:05:49.
- Built again with `node build/pieces.mjs fidelio` at 11:31:36 UTC. The reading was
  last written at 10:06:58 UTC and did not change while I worked.
- Final pictures taken 2026-10-03 from 11:31:36 to 11:32:49 UTC (`date -u`), last of
  all and one plate at a time:
  `node build/tools/shoot.mjs fidelio --plate answer --page --out remake/works/fidelio/shots`,
  then `--plate scene`, then `--plate name`.
  Each of the three runs ended with the line
  "nothing reported; now look at the pictures".
- Looked at afterwards: every tab at 1280; the Names tab at 390; the head and the
  foot of the page at both widths. The other 390 pictures were compared, slice by
  slice, with those of the pass before, which I had read at full size: the same to
  the pixel (44 slices). K2 and K3 were measured again at 11:33 UTC: unchanged.
- In `shots/`: the 22 pictures of the tabs and the 14 slices of the page
  (`fidelio-...`), as the tool wrote them; six pictures named `trial-...`, which do
  not show the page as it is but copies of the built piece changed as section 4
  (K1) and section 5 say; and `look-name-figure-320-top.png`, the top of the Figure
  tab in a window of 320.
