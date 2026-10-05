# The eighth mending of the kit: record

Mender's working record. Written as the work goes, so that a run cut
short loses nothing. Times are UTC, 3 October.

## State

Finished, 22:40 UTC. What is where:

- **Changes** (below): every change with its file and lines, what and why, whose report, the pictures,
  and what else it moved. Sections 1 (1a to 1i) and 2 (2a to 2e) of the brief, the stop set after a
  space, section 3 (3a to 3e), the lead's messages (eight), and what was weighed and mended under 4.
- **The last sweep**: just before "Not changed". The tool's complaints are in `sweep.txt`, `pixdiff` of
  every pair in `moved.txt`, the pictures in `shots/sweep/<piece>/`. Its account says, change by change,
  what moved; what the sweep found wrong (the title of a page, put back); and the two plates that moved
  at 1280 without my meaning it (moby-dick `rails`, antigone `elders`).
- **Not changed, and why**, **For the lead**, **Refused by the permission system**: at the end. The
  points for the lead that are new since the lead read this record are numbered 28 to 33.
- The copy is `remake/kit8/site/`; the twelve files that differ from the live site are in `changed.txt`
  (paths as they are in the live site; the same path under `remake/kit8/` holds my file; checked file by
  file again at 22:33). `orig/` is the live kit as it stood at 12:37, when I took the copy; the live kit
  is still that at 22:33.
- The last changes of the copy: `plate.js` and `atlas.css` at 19:55 (the `closer` row); `piece.js` at
  22:12 (the title of a page put back as on the live site); the README of the kit at 22:14 (words only).
- `KIT-CHANGES-section.md` is the section for the artists; the README of the kit is changed in the copy.
- Tools are in `tools/` (none of them prints the words of a work). `tools/song.sh` checks the approved
  plate; `tools/sweep.sh` is the last sweep; `tools/explain.py`, `geom-compare.py`, `geom-plates.py`,
  `buckets.py`, `still.py` and `where-compare.py` read its results; `tools/titles.mjs` counts the lines
  of every page's title and quotation.
- The approved plate, tempest `song`: at 1280 and 390 six of its eight pictures are the same as the live
  site's to the byte, and the two Beat pictures differ in the one label of the key (last checked
  22:32:13, after the last change of any script or of the stylesheet, at the first try).
- A slip of mine, said for honesty: at 22:33 one command of mine wrote a list of file names to the
  session's scratch folder instead of to this folder. I removed the file at once. Nothing else of mine
  was written outside `remake/kit8/`.

## Added to the brief by the lead while I was reading (a message, about 12:47)

Three more reports to read (magic-flute, carmen, blake), and these:

- 1a also: carmen `habanera`, Figure (a named join not drawn, the
  English between).
- With 1b: carmen `cartes`, Rhyme: a thread with one dot on each of
  three rows reads as specks; the key says "from line to line" where
  no stroke runs so, and prints the sound's letters bare. The key is to
  say only what is drawn; the sound is set upright in the italic.
- magic-flute `queen`, Rhyme, phones: a turned line whose only mark is
  its rhyme at the line's end keeps its two parts close (`marksRow`).
- blake G (marks placed before the letters settle; weigh the artist's
  mend of `setLens`); blake C (a Sentence rule's closing tick meets the
  point after the last word; weigh, look at three levels of rules).
- 2: blake B: where lines turn anyway, type as large as can be up to
  22 px, with no more rows turning than at the floor and no part
  overflowing. Photograph blake `sentence`, tempest `song` and `noises`
  at 390 and 320 before and after. If `song` moves on a phone, keep,
  show both, say so under "For the lead".
- 2: blake 7: a long key in a one-third column at 552 to 916: weigh.
- 3: `LEADS`: German possessives; French "si" and possessives; English
  this, that, these, those (hamlet 4, horace 13, magic-flute 4,
  carmen 4).
- 3: `piece.js`, the foot of the page joins heading and tab name by a
  comma: weigh a join that cannot be misread.
- The picture tool takes `--fractional`: what is decided by a few
  pixels must hold in both renderings.

A second message (about 12:57): for section 3, weigh an italic
correction: a hair of room (.06em to .1em) after an italic run that
ends in ? or ! and is followed by a space (othello `lie`, Word, 1280,
the caption's second sentence; Play, the caption's first three words).
Prove it enlarged. If `song` holds such a run and would change at 1280,
do not apply it there silently: show both, "For the lead".

A third message (about 13:02): read the faults of
`remake/works/don-giovanni/art.md` and weigh its 2 (key and remarks
under the English with bare paper under the Italian), 3 (the block
beside the caption a third of the width between 600 and 900: blake 7),
5 (`close`: a rhyme letter's room kept on English lines that carry
none), 6 (`duet`: pair numbers on the next singer's name), 8 (the
Rhyme key's row of letters), 9 (a tie lost where a row turns: 1f),
10 (`count`: the English keeps the Italian's pitch), 11 (3d is now: a
semicolon wherever a label holds a comma or a colon). Its 1, 4 and 7
are the lead's. If the list is past what one mending carries well:
finish and prove sections 1 and 2 first, hand in, name what is left.

A fourth message (13:20), from the finishers, for section 3: (1) a
drawing's `what` is also the text of its svg `aria-label`
(`kit/diagram.js`): where `what`, `plain` and key labels come to read
the marks of a named word, the marks come off in the `aria-label` and
wherever else the same string serves as plain text (a title, a
pointer's line). (2) The sentences of a fold under a drawing
(`sentences`, `lens-shape.js`) and the cells and head of the plain
table (`table()`) are bare type too: let them read the marks if it is
the same small change, and let a table's head turn onto a second line
where it is long. And, to know: the data of some pieces changed under
me (wording in tempest, dante-paradiso, dutchman, family-reunion,
castle, volpone, peer-gynt, agamemnon, antigone, rimbaud; three
headings in dante-purgatorio; a tab's label in adams; two turns in the
English of phedre `slip`). Both sides of any comparison are to be
taken after 13:20, or at one moment. (My before and after are always
taken together, minutes apart, from the same data: the copy's `data`
is a link to the live one. The comparisons of 1a, 1c and 1d were so
taken; the sweep at the end is taken afresh on both sides.)

A fifth message (13:33): a stop that the edition sets after a space.
Three hosted originals (orpheus, phedre, carmen) set a space before
! ? ; : so a row holds tokens that are a stop alone, and the plate
prints a whole word space before each (orpheus `terms`, every tab).
Wanted in the row maker of `plate.js`: (1) such a token (no letter or
figure, only ! ? ; : and any closing mark after) stands close against
the word before it, with no space, and never parts from it where a
line turns; (2) in French the space is the convention: a narrow
no-break space (U+202F) in place of the word space, kept together
likewise; if that makes a line of phedre or carmen worse at 1280,
French stays as it is and I say so; (3) word numbers do not change.
Check orpheus `terms` (three tabs, 1280 and 390), phedre `slip` and
`sight` (1280, 390), tempest `song`. Its own heading here and in the
KIT-CHANGES section. To take in section 2 if it fits, else name it
for a second mending. (Also to know: the lead is curling the straight
apostrophes of the hosted German and Italian originals, so a picture
of dutchman, fidelio, tristan, magic-flute, gotterdammerung, rilke or
orpheus may differ by an apostrophe from an earlier one.)

A sixth message (14:15): one line of the live `site/js/kit/plate.js`
was changed by the lead, and I have made the same change in my copy:
the line that sets `interlinear` now also asks `plate.under !==
false`, with a comment line over it (a reading may say that the rows
of the second passage do not answer the first's one for one). Also to
know: the build now carries the speakers' names and stage directions
of a version set line under line up over the lines as asides, and
draws a sign of omission where an original leaves lines out, so the
built faust, dutchman, carmen, gotterdammerung and orpheus differ
from my earlier pictures by those; that is not a change of mine.

A seventh message (17:50), three small things for section 3, each to be
taken only if it is as small as it looks: (1) the Beat key's words
(`lens-beat.js`, `aside()`): "the meter: a long tick is a beat, a short
one an off-beat" becomes "the measure: a long stroke is a beat, a short
one an off-beat"; "the count: one mark a syllable, a long mark where
the accent must fall" becomes "the count: one stroke a syllable, a long
one where the measure has an accent"; "a stress in the voice, where the
accent must fall" becomes "a stress in the voice, on an accent of the
measure"; the other rows keep their words; the comment at the head of
the file may say "the measure". Proof: `song` Beat at 1280 and 390
differs from live in that one label only. (2) `piece.js`: the heading
"A record of it" becomes "A record". (3) A tie backward: one more voice
mark, `<`, for a syllable that is not counted and runs into the
syllable before it; parsed as `~` is (class `sx`), its arc drawn from
the syllable before to itself; where the line turns between the two,
the cheapest thing, said; the key's row stays as it is where a plate
holds only forward ties and reads "a syllable that is not counted: it
runs into the one beside it" where it holds a backward tie; the mark
added to the comment at the head of the file; no reading uses it yet,
so no picture should change; proof with a scratch copy of the data of
don-giovanni `count` (row 1.0, words 3 and 4) inside my folder. Also to
know: the lead has changed the live `home.js`, `main.js`, `shelf.js`
and `about.js` since my copy was taken; if I changed any of the four I
am to say which lines. (I changed none of the four.)

An eighth message (about 21:05, while I was accounting for the last
sweep): (1) moby-dick `rails` at 1280 has gone to `low`; the cause is
the Beat key's new row; I am not to mend it: the lead has a mend of
the rule ready and applies it to `plate.js` after the merge; a line
under "For the lead" is enough. (2) I am not to change `plate.js` in
the copy again, or to say so if I must. (I have not: its last change
is the `closer` row of 19:55.) (3) The lead has read this record and
decided its points; the 120 of 2d stays; what I listed for a second
mending is in a brief for a ninth. (4) When the account of what moved
is written and the open places are filled, hand in; the account may
go by change, naming any picture I could not account for.

## Working notes (kept as I go)

- 12:49 The originals of every kit file are kept in `remake/kit8/orig/`
  (a copy of the live files as they stood when I began), so that the
  changes can be listed line by line at the end.
- 12:50 tempest `song`, every tab, 1280 and 390, live against the
  untouched copy: 8 pictures of 8 the same to the byte. The picture
  tool is steady from run to run. `tools/song.sh` repeats this check.
- Helpers, all in `remake/kit8/tools/`: `info.mjs` (a piece's build,
  no words), `probe.mjs` (measures in the page, numbers only),
  `ba.sh` (before, after, difference), `song.sh`.
- Measured for 1a (dante-inferno `ulysses`, gotterdammerung `rhine`,
  horace `crossing`, 1280 and 390): from the foot of a line to the
  head of the next is 71 to 86 px; the English between is 19 to 22 px
  tall. A stroke through it would lose 0.26 to 0.30 of its length.

- 18:05. The browser does not always paint the approved plate's Rhyme
  tab the same to the byte, on the live site as on the copy. At 17:43
  two checks in a row showed 28 px of the arcs beside the rhyme
  letters changed at 1280; a third at 17:45 showed none. I then ran
  the picture tool's own sequence many times (`tools/trace.mjs`, which
  also reads the geometry of every mark, and `tools/exact.mjs`, which
  compares with no threshold). The paths, the labels and the type size
  were the same numbers in every run of both sites. The pictures came
  in four variants: the usual one; one with six pixels of the margin
  (x 734 to 788, y 407) off by 3 of 255; one with 226 pixels of the
  arcs off by up to 37 of 255, all left of x 512, where a tile of the
  browser's painting ends; and others like it (one more was seen on
  live, 376 pixels). Live gave an arcs variant in 2 of 59 runs, the
  copy in 4 of 38; the rest were the usual picture or the six-pixel
  one on both. One arcs variant of live and one of the copy are the
  same file to the byte (md5 0fabbcd9f2...). So it
  is the browser's painting on a loaded machine, not a change of the
  plate. `tools/song.sh` now photographs the copy again (three times at
  most) when a picture other than the two Beat ones differs, and
  reports every try. FOR THE LEAD: a check of `song` that shows a few
  pixels of the Rhyme arcs changed should be run again before it is
  believed.

## Changes

Pictures: `shots/<tag>/before` is the live site, `shots/<tag>/after`
my copy, `shots/<tag>/diff` the part that differs (before over after).

### 1a. Figure: a stroke between two lines of the original, the English between (done 13:05)

- `kit/draw.js`, `hurdles()`: a word of a version set under its line
  is marked `under`. New `breaks(a, z, boxes)`: where a stroke is
  hidden behind a name (as before) or behind such words, and how much
  of it that comes to.
- `kit/lens-figure.js`, `near()`: where a version is set under each
  line, the next line of the original is near (in the order of rows it
  is the next but one); the room allowed grows by the height of the
  version's line. `way()`: a clear way is tried first, as before; then
  a way behind names and behind the version's words, clear of every
  other word, and taken only if less than a third of the stroke is
  hidden. The break is the height of the version's letters, 3 px to
  either side.
- Whose: dante-inferno K1, gotterdammerung 2, horace 9, carmen 1.
- Seen (`shots/1a`, `shots/1a-more`): dante-inferno `ulysses`
  Antithesis: the stroke is drawn at 1280 (clear of the English) and
  at 390 (behind it, broken). gotterdammerung `rhine` Against: the
  three named joins are drawn at both widths (at 390 one clear and
  long, one broken, one upright). horace `crossing` Order: three of
  four joins (the fourth pair is two lines apart). carmen `habanera`
  Figure: the named join is drawn (broken at 390).
- Moved besides: horace `bee` Contrast gains two strokes at each
  width. Not moved: faust `name` Antithesis, dante-inferno `francesca`
  Figure and `ulysses` Metaphor.
- With one line of English between, 0.26 to 0.30 of a stroke is
  hidden; with two lines (a turned English line) more than a third,
  and then no stroke.

### 1c. Figure: `align` and `map`, all alike or none (done 13:10)

- `kit/lens-figure.js`: the joins of an `align` figure that are not a
  spine, and the joins of a `map` with no `join`, carry `loose`, the
  mark that already made the pairs of an antithesis "all alike or
  none" in `drawJoins()`.
- Whose: hamlet 2, adams A2.
- Seen (`shots/1c`): hamlet `seems` Naming: at 320 no stroke (it had
  two of four); 1280, 390 and 330 the same to the byte (four strokes).
  adams `sister` Nature: no stroke at 1280, 768, 390 (it had two, three
  smudged, one).
- Moved besides (`shots/1c-all`), each because it had some of its
  joins and not others, or an arc with a stroke: antigone `answer`
  Knowing, castle `yard` Figure, moby-dick `whenever` Figure, traviata
  `refrain` Refrain, dante-purgatorio `share` Simile, volpone `close`
  Figure, all at 1280 and 390: no strokes now, the colors tell.
  FOR THE LEAD: traviata's two strokes (a word that ends one line and
  begins the next) and purgatorio's two (one arc, one stroke) said
  something true; a `join` in the reading brings them back.
- Not moved: blake `proverbs` Frame, faust `heaven` and `wheel`,
  fidelio `name`, kierkegaard `weaning`, magic-flute `weddings`,
  peer-gynt (both), moby-dick `rails`, dante-inferno `gate`.

### 1d. Figure: a spine keeps clear of the English lines too (done 13:14)

- `kit/lens-figure.js`, the `align` branch: the spine's place is taken
  from every line it passes: the rows it spans and the version's line
  under each but the last.
- Whose: faust 4.
- Seen (`shots/1d`): faust `heaven` Parody at 360, 340, 320, 300: the
  spine stands right of the English lines. 1280 and 390 the same to
  the byte.

Approved plate after 1a, 1c, 1d (13:16): 8 of 8 the same to the byte.

### 1b. Threads of sound keep to one language (done 13:40)

- `kit/lens-rhyme.js`, the thread block of `draw()`: the places of a
  thread are taken passage by passage (the original, the version). A
  place is joined only to a place of its own passage. Where a version
  is set under each line, the next line of the original is the next
  line (the allowance grows by the height of the version's line), and
  the stroke runs clear where it can, or behind the version's words,
  broken where they stand, if less than a third of it is hidden (the
  rule of 1a, `breaks()` in `draw.js`). A speaker's name still stops a
  thread.
- With it (carmen 2, the lead's first message): a place that an arc or
  a stroke reaches has a dot; a place none reaches has three points,
  decided place by place and no longer for the whole thread. The key
  says only what is drawn: a row for the joined places ("coming back
  inside the line", "from line to line", or both, as the strokes run)
  and, where the plate has places joined to none, a second row with
  the three points: "the same sound, by itself". A thread with no join
  at all has the one row "the sound x, coming back". The key is written
  again each time the plate is drawn, since the joins change with the
  width.
- The sound in the key stands upright in the italic (`<i>`, and
  `.aside .k i{font-style:normal}` in `atlas.css`) in every key that
  names a sound of more than one letter; a sound told in words (one
  with a space in it) is left as it was.
- Whose: gotterdammerung 1, carmen 2, hamlet K3 (what was left).
- Seen (`shots/1b`, `shots/1b-norn`, `shots/1e-all`): gotterdammerung
  `rhine` English, 1280 and 390: German joins German through the
  English (four strokes broken behind it, one clear), the English
  staves are joined among themselves or stand with three points;
  `norn` Stave: four line-to-line joins where there were three points.
  carmen `cartes` Rhyme: rows 1.3, 1.4 and 1.5 are one thread, row 1.1
  has three points, the key has two rows (`crop-cartes-1280-foot.png`,
  `crop-cartes-1280-key.png`). Also joined now: orpheus `aria` Endings
  (two threads), tristan `work` and `end`, dante-paradiso `end` at 320.
- FOR THE LEAD: (1) the words "the same sound, by itself" and "the
  sound x, coming back" are mine; say if you want others. (2) A key
  all of whose sounds are single letters keeps them italic, because
  tempest `song` is such a key and must not move at 1280. To set every
  sound upright, in `aside()` of `lens-rhyme.js` make `upright` true
  for every key: the line `const upright = ...`. The two letters of
  `song`'s key would then stand upright.

### 1e. Rhyme (done 14:10)

- (a) `atlas.css`: `.lens-rhyme .rt.th{color:var(--c)}`: a letter that
  is both in a rhyme's tail and in a thread shows the rhyme's color.
  hamlet `seems` row 32.9 word 7: its last two letters are ochre, as
  its partner's are (`shots/1e/crop-seems-1280-foot.png`). carmen
  `cartes`: the same on rows 1.1 and 1.3.
- (b) `lens-rhyme.js`: two places of one line of verse that has turned
  are joined by the stroke as before, and the second place's dot now
  stands at the stroke's end, over the word, so that stroke and dot
  meet (`shots/1e/crop-seems-320-turn.png`; 360 the same). It counts as
  "inside the line" in the key. FOR THE LEAD: a stroke between two
  different lines still ends over the lower word, with that word's dot
  under it, as on every plate now; I left that, since it is the look
  of every line-to-line thread and was not reported.
- (c) Joins outside the plate. `lens-rhyme.js`: the joins of a plate
  close up, all by one measure, where the room to the plate's edge
  (3 px inside the paper) is short of what they ask; an arc that would
  swing outside the plate is drawn as a bracket (and then all the long
  joins are brackets, the rule there was); two brackets that pass the
  same lines no longer stand on one another (the outer moves out by a
  lane). `plate.js` and `atlas.css`: a version's line that a join
  passes (`.pr.passed`) stops short of the edge by what the joins need
  (`--pend`: 5 px for two lanes, 9 for three, on a phone; nothing on a
  wide plate), so that the joins never close up to less than six
  tenths.
- Whose: hamlet 6, faust 3, rilke 5, the brief (dante-paradiso 320).
- Seen (`shots/1e-out`, `shots/1e-all`): faust `heaven` Rhyme at 390,
  360, 340, 320, 300: seven complaints before, none after; the three
  brackets stand inside the paper. dante-paradiso `book` and `end` at
  320: one complaint each before, none after; their curves are
  brackets there now. dante-inferno `gate` 320: two brackets that lay
  on one another between rows 7 and 8 stand 6 px apart.
- Moved besides: at 360 and 300 on faust `heaven` one and four English
  lines turn that did not (they reached into the room the joins
  need).

### With 1e: a turned line on a Rhyme tab keeps its two parts close (done 14:00)

- `kit/plate.js`, `marksWhere()` and `marksRow()`: the letter of a
  rhyme stands after the line and needs no room under it, so on a
  Rhyme tab a row counts as marked under its words only where a thread
  has a place in it. A turned line with only its rhyme at the end then
  takes the class `plain`, as on any tab that does not mark it, and
  its two parts stand close.
- Whose: magic-flute 1 (the lead's first message).
- Seen (`shots/queen`, `shots/1e-all`): magic-flute `queen` Rhyme: at
  390 rows 2.0 and 7.0 are closed and the tab is 70 px shorter; at 360
  138 px; at 320 243 px, and the eye counts eight lines for the eight
  letters. The same on faust `heaven` (34 px at 390, 167 at 360, 278
  at 320), carmen `cartes`, dante-inferno `gate`, dante-paradiso
  `book`.
- Moved besides: on a Rhyme tab of a plate whose lines turn, the
  English under an unturned line may stand one pixel higher or lower
  than before (the rounding of `plain`, as on every tab that does not
  mark a row since the seventh mending). Nothing at 1280.

### 4, taken here because it is the same line of code: no room for a rhyme letter where no line ends on a rhyme (done 14:05)

- `kit/plate.js`, `fit()`: the room kept at the right of the lines
  (`reserve`, `--end`) is kept only where a Rhyme tab of the plate has
  a rhyme at a line's end (`ended`), not for a Rhyme tab that shows
  only sounds coming back inside the lines.
- Whose: gotterdammerung 4. Only its `norn` and `rhine` have such a
  tab.
- Seen (`shots/gott4`): the verse of `norn` is 27.3 px at 390 where it
  was 23.8, and 21.5 at 320 where it was 18.0; `rhine` 24.0 and 18.9
  where it was 21.0 and 16.5 (at 320 it no longer takes the class
  `turns`). 1280 is the same (the differences there are the threads of
  1b and the strokes of 1a). `brand` differs from before by a pixel
  here and there on a phone only because it stands lower on the page.

### 1f. Beat: a syllable that is not counted (done 14:25)

- `kit/lens-beat.js`, `draw()`: where the line turns after such a
  syllable its tie cannot reach the next one: the first half of the
  tie is drawn, a short hook that runs out past the end of the part.
  In verse measured by length the tie stops 3 px short of the next
  syllable's mark, which stands just under its end.
- Whose: orpheus (its artist's fault on `terms`), carmen 3,
  don-giovanni 9, horace 7.
- Seen (`shots/1f`, `shots/1g`): orpheus `terms` Measure at 320 (row
  1.0) and 360; don-giovanni `count` Beat at 320
  (`crop-terms-320-hook.png`, `crop-count-320-hook.png`). horace `bee`
  row 6.2: the tie ends 3 px before the short mark at 1280, 390 and
  320 (`crop-bee-390-rows.png`). carmen `cartes` Count at 360 and 320
  is the same before and after: its line no longer turns there.
- Stress verse is drawn exactly as before where no line turns after
  an uncounted syllable.

### 1g. Beat, verse measured by length (done 14:25)

- `kit/lens-beat.js`, `draw()`: every long mark of a plate is one
  length: about half an em (0.52 of the type size, between 8 and
  16 px), made shorter for the whole plate where two neighboring marks
  would stand closer than 3 px, or where a bar between two marks would
  have less than 3.5 px to either, and never under 7 px. The bar of a
  pause keeps 3.5 px clear of the marks on both sides (it stood midway
  between the letters, where a narrow syllable brought a mark up to
  it); a bar between feet stands midway between the two marks.
- Whose: horace 6 and 8. Only horace has verse measured by length.
- Seen (`shots/1g`), measured in the page: `bee` long marks 16.0 px at
  1280 (they were 11.5 to 16), 11.9 at 390 (7 to 16, thirteen
  lengths), 9.0 at 320 (seventeen lengths); a bar to the mark beside
  it at least 3.5 px (it was 3.0 at 390 and 1.5 at 320). `ship`: 16.0,
  11.1 and 7.0; bars at least 4.1.
- FOR THE LEAD: on `ship` at 320 two long syllables stand 10 px
  apart, so every long mark of that plate is 7 px there, as wide as a
  short mark (`crop-ship-320-rows.png`). One length is what the brief
  asks; if a longer mark matters more than the 3 px between two, the
  number is `3` in `barred(...) ? 10 : 3`.

### 1h and 1i. Beat: the key (done 14:25)

- `kit/lens-beat.js`, `aside()`: one row for each kind of dot the
  lines carry: large ink, large red, the red ring, small ink ("a light
  stress"), small red ("a light stress off the beat", or "a light
  stress somewhere else" in verse measured by count). The three rows
  that were there keep their words. The meter's label is "the meter: a
  long tick is a beat, a short one an off-beat"; in verse measured by
  length the dot is "the accent of the word".
- Whose: phedre, antigone, orpheus, don-giovanni; the labels are the
  lead's.
- Seen (`shots/1h`): phedre `slip` Ear: the key showed a large red dot
  and a small ink one that no line carries and now shows the small red
  one that sixteen syllables carry. The same kind of change, read off
  the built data with `tools/beatkinds.mjs`, on phedre `names` and
  `sight`, antigone `elders`, don-giovanni `count`, orpheus `aria`,
  dutchman `tale`, fidelio `name`, henry-iv-2 `sleep` and `rejection`,
  moby-dick `rails`, othello `echo`, tempest `noises`: thirteen keys
  that were wrong, none now.
- Approved plate (14:17): six of eight pictures the same to the byte;
  Beat at 1280 and at 390 differ in the one label only
  (`shots/song/diff`).

### 4, weighed for the lead: blake C, a Sentence rule 3 px lower (done 14:28)

- `kit/lens-sentence.js`, `draw()`, one number: a rule stands 6 px
  under the foot of its line where it stood 3 px (`const y = ln.b + 6 +
  s.level * 8`). The closing tick, 5 px tall, then ends 1 px under the
  line's foot and no longer runs into the tail of a comma or semicolon
  after the rule's last word, and the rule clears a descender.
- Whose: blake C (the lead's first message).
- Seen (`shots/blakeC`): blake `creed` Grammar, 1280 and 390
  (`crop-creed-1280-tick.png`, before over after, enlarged); tristan
  `work`, first tab, 390: the nested rule, 8 px lower again, is still
  clear of the English under the line.
- No plate of the site has three levels of rules (the deepest has
  two), so there was no third level to look at.
- FOR THE LEAD: this moves the rules of every Sentence tab on the site
  down 3 px, and nothing else. If you would rather not, the number is
  the `6` in that line (it was `3`).

### 4, weighed for the lead: blake G, the marks wait for the letters (done 14:38)

- `kit/plate.js`, the last lines of `setLens()`: 430 ms after a tab is
  opened the kit looks whether a letter is still changing weight and,
  while one is, looks again every 40 ms (for two seconds at most; the
  bound is mine) before it places the marks. The artist's mend, as
  tried by the artist. With motion turned off no letter is ever on its
  way, so nothing changes there, nor in any picture of the picture
  tool.
- Whose: blake G.
- It cannot be shown by the picture tool (reduced motion). Shown with
  `tools/probe.mjs ... --motion --stall 440 --at 0` (the page kept busy
  for the first 440 ms after the tap, as a slow phone is; the probe
  reads how far each rule's ends stand from the edges of its words 3
  seconds later). blake `sentence`, Question opened after Beat, 1280.
  Live: 9 runs; in 4 of them the letters were still changing weight
  when the marks were placed, and in 3 of those five rules of six
  ended 2 px from their words. Copy: 12 runs; in 5 the letters were
  still changing, and every rule ended with its words in all 12.
- Pictures: `shots/blakeG/crop-question-1280-busy.png`: a wrong run of
  the live site over a run of the copy in which the letters were also
  still moving at 429 ms (the lower one also shows blake C).
- Approved plate (14:38): as before, six of eight the same to the
  byte, the two Beat pictures differ in the one label.

### 2a. Two passages of equal standing in two languages, on a narrow plate (done 14:46)

- `kit/plate.js`, `arrange()`, the line that sets `after`: the
  condition `!twin` is gone. Under 880 px the passage that the tab
  showing does not mark goes after the caption, with `beside` or
  without. Two passages in one language (`peers`) are as they were:
  the unmarked one is not shown there.
- Whose: rilke 1, baudelaire (its artist's fault on `evening`).
- Seen (`shots/2a`, before and after at 1280, 768, 390): rilke `count`
  Sentence and Figure, `turn` all three tabs, `panther` Subjects, Beat
  and Rhyme, baudelaire `evening` Likeness, Delay and Words: the marked
  passage, then caption and key, then the other passage under its
  label. The tabs that mark both (`count` German, `panther` English,
  `evening` French) are the same. Each moved tab is 9 or 10 px taller
  (the gap of one more block). 1280 does not move (what differs there
  is the 3 px of blake C on Sentence tabs and the label of 1i).
- baudelaire `budget` is two passages in one language now and is the
  same on a phone; its pictures at 768 differ only because the plate
  stands a fraction of a pixel elsewhere on the page (measured with
  `tools/probes/boxes.js`: every box inside the plate is the same).
- FOR THE LEAD: the passage after the caption keeps its type and its
  leading, as a twin's two passages are one type. The rilke artist
  also asked that it be set close there; the brief asks for the order
  only, and I left the leading alone.
- Approved plate (14:46): as before.

### 2b. A legend at the head of a passage set line under line (done 14:52)

- `kit/plate.js`, after the block that builds a second passage: where
  a version is set under each line and the reading gives labels, the
  passage begins with one line, `p.beside-l.legend`: the first label
  in a `span`, the second in an `i`.
- `atlas.css`, after `.is-twin .beside-l`: `.legend` is a row that
  wraps (18 px between the two, 1 px between two lines); `.legend i`
  is 13.5 px, not spaced, not capitals, weight 400: the quiet italic
  of the English lines. Nothing else is added.
- Whose: the brief (faust, orpheus, rilke, gotterdammerung, horace,
  dante-inferno reports).
- Seen (`shots/2b`, first tab, before over after in the crops): faust
  `heaven` 1280 (`crop-heaven-1280-head.png`), horace `ship` 1280 and
  390 (one line at both: `crop-ship-1280-head.png`,
  `crop-ship-390-head.png`), magic-flute `queen` 1280, 390 and 320 (the
  long second label takes a second line on a phone:
  `crop-magic-flute-queen-0-beat-390-head.png`, `...-320-head.png`),
  orpheus `aria` 390, dante-inferno `gate` 390.
- Moved besides: every one of the 22 plates set line under line (all
  have both labels) begins 27 px lower at 1280 and on a phone (43 or
  44 px where the legend takes two lines: 27 and one line more;
  measured in the last sweep on carmen `habanera` and `cartes`,
  horace `bee` and magic-flute `queen` at 390; I first wrote 54
  here, which was wrong), on every tab. Where a speaker's name is
  the first row, the plate is 20 px taller, not 27 (faust `heaven`
  and `name`: the 7 px over a name and the 8 px under the legend
  fall together, as margins do). The caption beside
  the passage does not move, so the legend, not the first line, now
  stands level with the caption's first line.
- FOR THE LEAD, to look: faust `heaven` at 1280: the legend stands
  directly over a speaker's name with its gloss, which is also small
  capitals and italic (`crop-heaven-1280-head.png`). It is what the
  brief sets out; I added no room between them.
- Approved plate (14:52): as before (it has no second passage).

### 2c. Four tabs on one row on the smallest phones (done 15:12)

- `kit/plate.js`, the head of `fit()`: where a plate has four tabs or
  more and the last stands on a lower row than the first, the row of
  tabs takes the class `close` (measured afresh at every fit).
- `atlas.css`, line 138: `.plate-tabs.close{column-gap:7px}` and
  `.plate .plate-tabs.close button{letter-spacing:.12em}` (the second
  outweighs `.plate button`, which the old rule did not). The dead half
  of the old rule (`.plate-tabs button{letter-spacing:.14em}`, which
  never applied) is gone; `column-gap:10px` under 320 px of plate
  stays for every plate.
- Why measured, and not for every plate of a narrow window: tempest
  `song` has four tabs that fit at 320, and would have been set closer
  for nothing; so would 53 other plates (63 plates have four tabs).
  Only a row that would break is touched.
- Whose: the brief (hamlet, horace, faust, dante-inferno, karamazov,
  kierkegaard reports).
- Measured with `tools/tabs.mjs` (every plate of four tabs, the row's
  width against its room of 264 px at 320): live, nine plates take two
  rows (dante-inferno `ulysses`, faust `wheel`, hamlet `seems`, horace
  `bee`, karamazov `cry`, kierkegaard `greater`, rimbaud
  `hallucination`, traviata `refrain`, tristan `names`); in the copy
  none, in the hinted and the fractional rendering, and exactly those
  nine are closer. The widest, faust `wheel`, needs 261.3 px (262.3
  fractional). At 340 and 352 faust `wheel` broke too, and no longer
  does.
- Seen (`shots/2c`, 320, before over after: `crop-*-head.png`): the
  four plates the brief names; tempest `song`: its head is the same
  (its picture differs only at the foot, where the label of 1i takes a
  second line at 320).
- Approved plate (15:12): as before.

- Added at 19:56, after the last measure of every plate of four tabs at 320 (`shots/2c/tabs-final-320.txt`
  and `-fractional.txt`, 63 plates): one row broke that had not at 15:12, dante-purgatorio `garden`, whose
  built data is of 18:04 (four names of 28 letters; the row needs 266.7 px of 264 even when `close`; on the
  live site 291.8). `kit/plate.js`, the head of `fit()` (lines 708–712): a row that still breaks when
  `close` takes `closer` as well; `atlas.css` lines 140–141: `.plate-tabs.closer{column-gap:6px}` and
  letters at .11em. `garden` then needs 260.4 px (260.0 fractional) and stands on one row
  (`shots/2c/crop-garden-320-head.png`, before over after). No other plate takes `closer` at 320; the
  nine that are `close` and all the others measure as they did. Approved plate (19:56:04): six pictures
  the same to the byte, the two Beat pictures differ in the one label only. FOR THE LEAD: a look; a tab
  name one letter shorter would do the same without it.

### 2d. Remarks beside bare paper (done 16:00); with it don-giovanni 2

Two things went under one sentence of the brief, and they are two
layouts.

- (i) A short passage alone on a wide plate, its key under it (`low`):
  the key stands at the left and the remarks at the right, so remarks
  with no key leave the left bare (horace `crossing` as it was when
  the brief was written; it is two passages of equal standing now, and
  no plate of the site shows this today). `atlas.css`, after the three
  rules of `.under .keys:has(>.points)`: where the list of remarks is
  the only thing in the key, the key is a block of two columns and the
  list breaks between them (`.under .keys:has(>.points:only-child)`
  and two rules for the list and its items).
- (ii) Two passages side by side, the caption under the shorter
  (`side-in`): the key runs on under the caption, far below the longer
  passage, and the paper under that passage is bare (rilke `turn`,
  Word, 1280: 404 px; don-giovanni `count`, Beat: 586 px).
  `kit/plate.js`, `arrange()`, after `pair-low` is decided: where the
  key ends more than 120 px below the longer passage, the kit tries it
  under both passages, across the plate, in the block `low` uses
  (`.under`), and keeps it there if the plate is at least 120 px
  shorter for it (class `keys-under`; `place()` reads it as it reads
  `low`; `arrange()` sends the key home before it measures again).
  `atlas.css`: `.side-in .under .aside` has no rule of its own over it.
  Remarks alone then stand in two columns, which are the columns of
  the two passages; a key with marks stands at the left with its
  remarks at the right, as under a short passage.
- Whose: rilke 2, horace 4 (the brief's 2d), don-giovanni 2 (the
  lead's third message).
- Why 120: the gains at 1280 are 245 (don-giovanni `count` Beat), 168
  (rilke `turn` Word), 130 (dutchman `tale` Word), then 100 and less.
  At 120 the three that move are 10 px or more clear of the measure in
  both renderings; at 80 a tab of fidelio stood 1 px from it. A small
  key sent across the plate for 20 px looked lost (tried on phedre
  `slip` Rhyme).
- Seen (`shots/2d`, before and after): rilke `turn` Word 1280: the
  seven notes in two columns under the two passages, the plate 953 px
  for 1,121; don-giovanni `count` Beat 1280 and 1024: 1,129 for 1,374
  and 1,217 for 1,483; dutchman `tale` Word 1280: 923 for 1,053.
  Listed with `tools/scan.mjs` and `tools/probes/keysunder.js`: at 1280
  these three tabs and no other, hinted and fractional. At 1024, where
  the columns are narrower and the keys taller, twelve: carmen `la-bas`
  1, don-giovanni `count` 0 and 2, dutchman `tale` 0 and 2, fidelio
  `answer` 0 and `name` 1, phedre `slip` 0, rilke `turn` 1, traviata
  `cabaletta` 0 and 2, tristan `work` 2.
- (i) has no plate to show it today, so it is shown by a trial
  (`tools/probes/onlypoints.js` takes every row but the remarks out of
  the key of antigone `elders`, Beat, in the page, live and copy):
  `shots/2d/crop-trial-low-remarks-only.png`: the remarks stood in the
  right-hand 341 px, 246 px tall, the left 266 px bare; they stand in
  two columns across the 607 px, 149 px tall.
- Not moved at 1280: every other tab whose caption stands under the
  shorter passage (`tools/probes/sidein.js` lists them with what is
  bare).
- FOR THE LEAD, to look and to decide: (1) the number 120 in
  `arrange()` (`tall - root.offsetHeight < 120`). At 80, five more
  tabs move at 1280 (fidelio `answer` Versions and Words and `name`
  Beat, phedre `sight` Words and `slip` Ear); they looked right
  (three of them as they stood at 80 are in `shots/2d/at-80/`). Tabs
  that keep 200 px or more bare under the longer
  passage today, for a gain under 120: phedre `sight` Halves (350),
  dutchman `tale` Beat (363), fidelio `answer` (291, 245), traviata
  `cabaletta` (284, 280), rimbaud `stanza` (272). (2) Under two
  passages the remarks at the right of a key run in lines of about
  600 px (`don-giovanni-count-0-beat-1280.png`); it is the block `low`
  uses, wider. (3) Where the two passages are not of equal width, the
  two columns of remarks do not begin where the passages' columns
  begin (`dutchman-tale-2-word-1280.png`: 46 px apart at the right).
- Approved plate (16:05): as before.

### 2e. A gloss and the English line under it (done 16:12)

- `atlas.css`, after `.is-interlinear .row:last-child>.pr`: on a Word
  tab of a plate set line under line, the head of the English line
  stands at least 36 px under the foot of the line above (30 px on a
  narrow plate: one line in the block for plates under 520 px), and
  the same for a plate whose English carries marks (`pair-marked`).
  Written as a larger of two (`max()`): where the room under the lines
  is already as large, nothing moves.
- Whose: horace 5 (its `crossing` is no longer set line under line;
  the fault stands on every Word tab of such a plate without a Beat
  tab).
- Measured (`tools/probes/gloss.js`: the room over a gloss, to the foot
  of its word, and under it, to the head of the English): dante-inferno
  `gate` Word: over 6.0, under 4.4 at 1280 (5.0 and 5.0 at 390); now
  under 13.2 and 11.2. gotterdammerung `norn`: under 4.2, now 13.0 and
  10.5. faust `name` (a Beat tab on the plate): 19.7 and 11.8, as
  before.
- Seen (`shots/2e`): `crop-gate-1280-rows.png` (before over after,
  enlarged), `crop-norn-390-rows.png`.
- Moved: on the Word tab of dante-inferno `gate` and `ulysses`,
  dante-paradiso `book`, gotterdammerung `norn`, `rhine` and `brand`
  and rimbaud `hallucination` (two tabs), every row is 7 to 11 px
  taller, so the lines stand lower there than on the plate's other
  tabs. Not moved: carmen `habanera`, dante-inferno `francesca`, faust
  `name`.
- FOR THE LEAD, to decide: the room is given on every row of the tab,
  so that the lines keep one pitch; the price is that the lines move
  when that tab is opened. The other way (room only under a row that
  carries a gloss, as a second level of glosses already gets) keeps the
  lines where they are and makes the pitch uneven.
- Approved plate (16:11): the Rhyme picture at 1280 differed once from
  the first by less than the comparing tool can show (no pixel by more
  than 24 levels); taken again half a minute later all was as before
  (six the same to the byte, the two Beat pictures differing in the
  one label). Nothing between the two runs was changed.

### A stop that the edition sets after a space (the lead's fifth message; done 16:45)

- `kit/plate.js`: `STOP_APART` and `setClose()` (lines 145 to 151);
  `buildWord()` takes `french` (line 69) and prints the points after a
  word's letters through `setClose()` (line 141); the row maker says
  whether the row is French (line 229: `plate.lang`, or
  `plate.pair.lang` for a row whose id begins `p:`).
- What the data holds. The message speaks of a token that is only a
  stop. In the built data there is none: `tokens()` (kit/syllables.js,
  which the build uses) joins a token with no letter to the word before
  it, space and all, so the stop is the tail of that word and word
  numbers have never counted it. It could not part from its word either
  (a word does not wrap). So the mend is only in how the tail of a word
  is printed; word numbers, marks and the checker see what they saw.
- What it does: in the tail of a word, a space before ! ? ; : or a
  comma (and whatever points and closing marks follow at once) is
  dropped; in a French row a narrow no-break space (U+202F) stands
  there before ! ? ; : and nothing before a comma.
- 37 stops on nine plates: carmen `habanera` 5, `la-bas` 4, `cartes` 7;
  orpheus `aria` 2, `terms` 5, `song` 2; phedre `names` 1, `sight` 5,
  `slip` 6 (counted in the built data, 16:40).
- FOR THE LEAD, two places beyond the letter of the message, each one
  character in `STOP_APART`: a stop with points of omission straight
  after it (orpheus `aria` row 2.0 word 0) is set close too, or one row
  of the plate would be closed and the next not
  (`shots/stop/crop-aria-1280-after.png`); and a comma after a space
  (orpheus `song` row 0.0 word 4, the only one on the site) is set
  close (`shots/stop/crop-song-orpheus-1280.png`).
- Left as the edition has them: a dash after a space (dutchman `tale`,
  gotterdammerung `norn`, magic-flute `trial` and `queen`, tristan
  `work` and `end`, baudelaire `evening`), points of omission after a
  space (karamazov `kiss` row 31.0 word 108), and the guillemets with
  their spaces (carmen `cartes` row 1.3: the opening mark is the end of
  word 1, where `tokens()` puts it, so a line could turn between the
  mark and the word it opens; it does not at any width I photographed.
  For the lead, with the build: that is `tokens()`, and word numbers).
- Seen (`shots/stop`, before and after): orpheus `terms`, three tabs,
  1280 and 390 (`crop-terms-390-rows.png`); phedre `slip` and `sight`,
  first tab, 1280 and 390 (and `slip` at 320); carmen, first tab of the
  three plates, 1280 and 390 (`crop-cartes-1280-head.png`, and the row
  with the guillemets, `crop-cartes-1280-quote-before.png` and
  `crop-cartes-1280-quote.png`); orpheus `aria` and `song` at 1280.
  The narrow space reads as a hair of room at 1280 and on a phone. No
  line of phedre or carmen is worse at 1280: French stays in.
- What else moved, and is meant: a plate whose longest line lost its
  spaces is set a little larger (the type is fitted to the longest
  line). orpheus `terms` is 8 px taller at 1280 and 9 px at 390. On
  phedre `slip` at 390 row 7 is one line where it was two. The other
  differences in these pictures are 2b's legend, 1h's key and blake B.
- Approved plate (16:41): six of eight pictures the same to the byte;
  Beat at 1280 and 390 differ in the one label only.

### 1f, mended again: a pause at a turn stands clear of the hook (done 16:40)

- `kit/lens-beat.js`, `draw()` (lines 115, 153, 165 and 166): where a
  line turns at its pause and the syllable before the turn is not
  counted, the hook of 1f ran into the two bars of the pause, which
  stand 5 px after the part's end (7 px on a wide plate). The bars now
  stand that far after the hook's end.
- Whose: my own 1f; seen on phedre `slip` Ear at 390 (row 1, and row 6)
  while the stop was photographed (`shots/stop/crop-slip-390-turn.png`:
  live above, the fault below; `crop-slip-390-turn-after.png`: mended;
  `crop-slip-320-after.png`).
- Nothing else can move: the number is only used where a pause is drawn
  at the end of a part that ends in a hook.

### 2, from the lead: blake B, larger type where the lines turn anyway (done 17:10; the list of plates comes with the last scan)

- `kit/plate.js`, `fit()`, the block after `--pend` is set; and one
  rule in `css/atlas.css` (`.plate.even .sy...`, after `.sy.sx`).
- What it does: a plate whose verse is at its floor (16.5 px on a
  phone, 20 px wider) and so takes the class `turns` is tried at each
  half pixel up to 22 px. A size is taken while no line turns that
  does not turn at the floor, no line that turns at its stop
  (`plate.turn`, or the kit's own middle stop) has a part too long for
  the measure, and no word runs out of it.
- How the lines are counted, and why: on one plate the same line may
  turn on the Beat tab and stand whole on the others (heavier letters,
  and room after a word for the number of a remark). So the count at
  the floor is taken as the narrowest tab sets the lines (class `even`
  for the moment of measuring: every syllable in the weight of plain
  text; no room for a remark's number), and the count at each larger
  size as the widest does (4 per cent wider on a plate with a Beat
  tab, the kit's own allowance, and with that room). The size found
  does not hang on which tab is showing. Two earlier tries did:
  peer-gynt `answer` at 320 grew to 18 px and turned row 4 on the
  Figure and Word tabs, where it had stood whole; faust `name` at 320
  grew to 17.5 and turned one more row on two tabs. Both are as on the
  live site now (16.5 px, the same lines on every tab).
- Whose: blake B.
- Seen: blake `sentence` 22.0 px at 390 where it was 16.5 (four screen
  lines as before), 21.0 at 360, 18.0 at 320; tempest `noises` 17.0 at
  320 (16 lines as before). Pictures in `shots/blakeB` (taken with the
  first try: to be taken again in the last sweep).
- FOR THE LEAD: the approved plate at 320: `song` is 17.0 px where it
  was 16.5 (ten screen lines as before; one row turns, as before). At
  390 its lines are whole and nothing changes; at 1280 nothing changes.
  The brief says to keep this, show both, and say so.

- The last scan (19:25 to 19:44; `tools/probes/size.js` on every tab of every piece, live and copy, at 390
  and 320; `shots/blakeB/sizes-final.txt`, compared by `tools/sizes-compare.py`): 368 tabs at each width.
  No tab has more screen lines in the copy than on the live site, at 390 or at 320, and no tab is set
  smaller. No word stands past its measure at 320; at 390 the same eleven tabs as on the live site
  report one (dante-inferno `ulysses`, gotterdammerung `brand`, magic-flute `weddings`, othello `lie`:
  1 to 3 words each, not changed by anything here).
- Plates set larger by this rule at 390 (twelve): agamemnon `yoke` 17.0 px for 16.5, antigone `answer`
  18.0 and `elders` 19.0, blake `proverbs` 19.0 and `sentence` 22.0, dutchman `refrain` 17.0 and `tale`
  20.0, fidelio `answer` 17.5, hamlet `seems` 17.0, peer-gynt `answer` 17.5 and `onion` 17.0, traviata
  `cabaletta` 17.5.
- At 320 (thirty-one): agamemnon `net` 18.0; blake `proverbs` 17.0, `sentence` 18.0; carmen `cartes` 19.0,
  `la-bas` 17.0; dante-inferno `gate` and `ulysses` 17.5; dante-paradiso `book` and `prayer` 17.0;
  dante-purgatorio `love` 18.0; don-giovanni `count` 17.0; hamlet `seems` 17.0; henry-iv-2 `rejection`
  17.0, `sleep` 19.0; horace `crossing` 18.0; magic-flute `queen` and `weddings` 17.0; orpheus `terms`
  17.0; othello `echo` 17.5, `lie` 21.0; phedre `names` 19.0, `sight` 18.0, `slip` 17.5; tempest
  `epilogue`, `noises` and `song` 17.0; traviata `cabaletta` 18.0, `end` 17.5; tristan `work` 18.0;
  volpone `close` and `song` 17.0. (Larger for other reasons, each under its own heading:
  gotterdammerung `norn` and `rhine`, orpheus `aria` and `song`, don-giovanni `close`.)
- Fewer screen lines in the stage of the copy: where 2a sends the unmarked passage after the caption
  (don-giovanni `close`, horace `crossing`, magic-flute `weddings`, rilke `panther`), phedre `slip` (one
  line, the stop set close) and one line each on the English tabs of `close` and `panther` at 320.

### 3a. `tidy()` and `tie()`: the pairs a printer keeps together (done 17:30)

- Files: `site/js/kit/draw.js` lines 155–180 (new `keep()`, and `tie()` built on it); `site/js/rich.js`
  lines 3–7 (`tidy` is `keep`) and 31–33 (an italic title and the chapter and verse after it).
- What: one list of rules, `keep()`, now serves both `tidy()` (running words) and `tie()` (headings).
  Kept on one line: "Appendix" and its numeral; act, scene, book, canto, chapter, paragraph, section,
  line and page, in small letters or with a capital, singular or plural, and their number; a book and its
  chapter and verse (with the figure before the book, as in "2 Corinthians"); a month and its year; the two
  ends of a range in roman numerals (both must be true numerals in the same case, so "mid-life" and
  "civil-mix" are left alone). `tie()` also reads an opening quotation mark as the start of a word.
- Whose report: hamlet (Appendix; chapter, paragraph), adams A (chapter in a link), karamazov 1,
  baudelaire 5 (the range is no longer in that piece's sources; antigone and pascal hold the two on the
  site), kierkegaard K8 (day and month).
- Beyond the letter of the brief, each for the same reason and each one more pattern in the same list:
  a day and its month ("3 May"); plurals ("chapters 4"); "page" and "pages"; any word with a capital before
  a number of the form 3:16 or 3.16 (so a canticle of Dante and its canto and line); and in `rich()` the
  same pair where the title is in italic and the mark stands between (13 places on five pieces).
  The pronoun of one letter is tied to the next word in `tie()` as the article of one letter is
  (three quotations and one "Read on" title on the site hold it; no plate heading and no title does).
- Counted with `tools/broken.mjs` (it walks every paragraph and list item outside the plates and counts
  the pairs that a line end parts): live 16 at 1280 on 13 pages and 45 at 390 on 22 pages; the copy 0 and 0.
- Pictures: `shots/3a/crop-hamlet-more-1280.png` (Appendix and its numeral, before over after),
  `shots/3a/crop-karamazov-foot-1280.png` ("Chapter 1:" whole), `shots/3a/before|after/` (hamlet, adams,
  baudelaire, karamazov).
- What else moved: every plate title is passed through `tie()`, so a title that holds one of these pairs
  may turn elsewhere; `song` is the same (checked 17:25: six pictures the same to the byte, the two Beat
  pictures differ in the one label of 1i). The sweep lists the rest.

### 3b. The head of a page, "Read on", and the line over the title (done 17:35)

- File: `site/js/piece.js` lines 30–31 (the quotation), 49–51 (the line over the title). The title
  (line 53) is as on the live site again: see the end of this section.
- The quotation at the head, and each quotation of "More from Auden", goes through `tie()`; so did the
  title of the page until 22:12 (below). dante-inferno K5: `shots/3b/crop-dante-inferno-head-1280.png`, `…-390.png`,
  `…-320.png` (before over after; no line ends on the short word or on the pronoun). horace 11:
  `shots/3b/crop-horace-head-320-title.png`, `…-320-quote.png`. Also seen: kierkegaard at 320
  (`crop-kierkegaard-head-320-quote.png`: the lines now turn at the commas).
- "Read on" (karamazov 1) is mended by 3a: the title already went through `tie()`.
- The line over the title: the point is now set inside the author's block, after a no-break space, so it
  cannot begin the second line or stand alone. Where the line is one line, or turns after the point, the
  picture is the same as live to the pixel (adams at 1280 and 390, blake at 390, kierkegaard at 320:
  `shots/3b/crop-kicker-adams390-kierk320.png`, `crop-kicker-blake390-adams320.png`).
  FOR THE LEAD: I read "it stays with the item before it" as the rule, so where the line turns the point
  still ends the first line, as the three artists saw it. blake F asks for the point to be left out where
  the line turns; that needs a measurement in script after the page is laid out, and I did not make it.

- **The title put back (22:12, after the last sweep).** The brief does not name the title of the page; I
  had tied it for horace 11 (at 320 a line of the title ends on a word of one letter). The sweep showed
  the head of family-reunion 45 px taller at 390, and a count of every title and quotation at five
  widths, live and copy (`tools/titles.mjs`, `shots/3b/titles-all.txt`: 175 heads), showed why: tied, a
  title has fewer places to turn. 20 titles were set otherwise. Better: horace at 320, and rimbaud at 320
  (two lines for three). Worse: family-reunion, three lines for two at 390, 360 and 320 and uneven at
  1280 (215 and 722 px); agamemnon, three for two at 360 and uneven at the other widths; castle at 320, a
  first line of 38 px. Turned elsewhere, two lines as before: dante-purgatorio, pascal. Picture:
  `shots/sweep/crop-family-reunion-head-390.png` (live over the copy as it was). So `h1` takes the title
  as it is written again (`piece.js` line 53, a line of comment over it), every title is as on the live
  site at 1280, 768, 390, 360 and 320 (`shots/3b/titles-after.txt`), and horace 11's title is under "Not changed".
  Seen after: `shots/sweep/crop-family-reunion-head-390-after.png`; the first strip of that page at 390 is
  the same as the live site's to the pixel.
- **The quotation stays tied, as the brief says.** The same count: of 175, 79 quotations turn elsewhere.
  Nine take a line more on a small phone (augustine, faust, rimbaud and volpone at 360; carmen,
  dante-paradiso, henry-iv-2, moby-dick and othello at 320), none a line fewer, and some are less even
  (othello: lines of 196 and 319 px at 390 where they were 257 and 258;
  `shots/sweep/othello/diff/othello-page-390-0.png`). No line of a quotation ends on a short word now,
  which is what dante-inferno K5 and horace 11 asked. FOR THE LEAD, to look (new at 22:12).

### From the lead: the foot joins heading and tab with a raised point (done 17:35)

- File: `site/js/piece.js` lines 116–117. Heading, place and tab name of an entry under "What each caption
  stands on" were joined by commas, and a heading that holds a comma read as two items. They are now
  joined by a raised point with a no-break space before it, the mark the line over the title uses. No
  heading, place or tab name in the data holds one.
- Pictures: `shots/3a/crop-adams-foot-1280.png`, `crop-adams-foot-1280-b.png` (two headings with a comma
  and a year), `shots/3a/crop-hamlet-foot-390-before.png` and `-after.png`.
- FOR THE LEAD: a look, since the join is a choice: in bold the point is small.

### 3c. Bare type that names a word: `plain`, `what`, a key's label, the plain table (done 17:40)

- Files: `kit/draw.js` lines 182–200 (new `marked()` and `unmarked()`) and 206 (`key()`); `kit/lens-figure.js`
  329 (`plain`); `kit/lens-shape.js` 38, 39, 43 (head, cell, sentence of a list), 48 (`what`), 49 (facts given
  as one string); `kit/diagram.js` 28–29 (`what` in `sheet()`) and 34 (the `aria-label`); `css/atlas.css`
  347 and 355–356 (a named word stands upright in the italic `plain` line and in the italic head line).
- What: a word between asterisks (or in `<i>`) in any of these is set as a named word: upright where the
  line is italic (key, `plain`, `what`), italic where it is upright (the table). `marked()` returns the one
  string it was given where there is no mark, so a key, a `plain` line and a table without marks are the
  same nodes with the same text as before. `what` goes through `rich()` instead, in `sheet()` and in the
  stand-in alike, because the brief also wants it tidied (faust 7): its kept pairs are now kept.
- From the lead's fourth message: the marks come off in the drawing's `aria-label` (`unmarked()`, which
  also takes a link down to its words); nothing else in the kit uses these strings as plain text (the
  pointer's line and a drawing's key already went through `rich()`). The sentences of a fold and the cells
  and heads of `table()` read the marks. A head of the table already turns onto a second and third line
  where the table is squeezed (nothing forbade it; see the picture), so nothing was changed for that.
- No reading holds such a mark in `what`, `plain` or a label today (counted over all 35 pieces), so nothing
  on the site changes by this; eight `facts` hold asterisks that a piece's own drawing reads.
- Proved on trial data: the piece's data is changed as it is served (`tools/probe.mjs --patch`,
  `tools/patches/marks-figure.mjs`: the second word of karamazov's `plain`, of one label and of its `what`
  is put between asterisks; `tools/patches/standin.mjs`: the plate is renamed so that the stand-in table
  shows). Before is the live kit with the same trial data.
  `shots/3c/crop-first-0-1280-aside.png` (`plain` and a key label), `crop-first-1-1280-what.png` (`what`),
  `before|after/karamazov-standin-1280.png` (the stand-in: head line, and a cell that held asterisks).
  Counted in the page: the trial `what` has one `<i>` and no asterisk, and the `aria-label` no asterisk
  (the live kit: two and two).
- faust 7 itself no longer shows on live (its artist put a no-break space in the reading);
  `shots/3c/crop-faust-wheel-3-320-head.png` is the same head line before and after.
- FOR THE LEAD: (1) in the stand-in table a one-line head stands at mid-height beside a three-line head;
  `vertical-align:bottom` on `.facts th` would set them on one foot line: a choice of look, not made.
  (2) `lens.name` (the term over `plain`) is still bare type; the brief does not name it.

### 3d. A key row joins its names by semicolons where one holds a comma or a colon (done 17:38)

- `kit/lens-sentence.js` line 62 (it joined by commas whatever the names held) and `kit/lens-figure.js`
  line 350 (it looked for a comma only). The lead's third message adds the colon.
- Whose: don-giovanni 11; blake D in part.
- 17 rows of the site change: 15 on eight Sentence tabs (adams `born`; augustine `opening`; dante-paradiso
  `end`; dante-purgatorio `share`; don-giovanni `duet`; rimbaud `hallucination`, `adieu` twice) and two on a
  Figure tab (carmen `la-bas`, by the colon).
- Picture: `shots/3d/crop-duet-1-1280-key.png` (the second row, before over after).
- Not mended: the three rows of blake D hold neither comma nor colon, and stay joined by a comma (see
  "Not changed").

### 3e. Three small rules of the stylesheet (done 17:43)

- `css/atlas.css` line 266: `.beside-l` takes `text-wrap:balance`, as the plate's title has. karamazov 2:
  `shots/3e/crop-cry-0-390-label.png` (seven words and one become five and three). Every label over a
  passage that takes two lines now turns in two even lines; 62 plates carry such a label, and the sweep
  lists those that moved.
- Line 398: `.dg-keys` takes `text-wrap:pretty`, as a caption has. karamazov 5, proved as its artist did,
  with the words of the long row left free (`tools/probes/keysfree.js` turns the no-break spaces of the row
  into spaces): at 412 px the live kit leaves the last word alone, the copy takes two down
  (`shots/3e/crop-first-1-keysfree-412.png`).
- Line 386: `.dg a{text-decoration:none}`. karamazov 6: the page's underline fell on svg type at full
  weight. Proved with the script's own statement taken off (`tools/probes/linkbare.js`):
  `shots/3e/crop-plan-links-1280.png`, live over copy. Nine scripts turn the underline off by hand; with
  this rule those statements do nothing more, and nothing on the site changes (horace's link holds no
  type). The scripts are the pieces' own and I did not touch them.
- FOR THE LEAD: the kit now takes the underline off and gives a link in a drawing no look of its own
  (karamazov rules a hairline under linked words, the others nothing). One look for all, and a call for
  it (`d.link`), would be a new thing in the kit: not made.

### 3, from the lead: more words that lead to the next (`LEADS`; done 18:20)

- `kit/plate.js` lines 350–357: to the words a turned line of verse does not end a part on are added, in
  English, this, that, these, those; in French, si and the possessives (mon, ma, mes, ton, ta, tes, son,
  sa, ses, notre, nos, votre, vos, leur, leurs); in German, the forms of mein, dein, sein, ihr, unser and
  euer (with unsre, unsren, unsrem, unsrer, unsres).
- Whose: magic-flute 4, carmen 4, horace 13, hamlet 4 (b).
- The artists have since set a `turn` in their readings for the rows they named (magic-flute `queen` 3.0;
  carmen `cartes` 0.4 and `la-bas` 1.3; horace `crossing` p:5.3; hamlet `seems` and `to-be`), and where a
  reading says where a line turns the kit's choice is not asked. So those rows do not change on the site.
- Proved on trial data, with the reading's `turn` taken away as the data is served
  (`tools/patches/no-turn.mjs`), and read in the page with `tools/probes/where-turns.js`:
  magic-flute `queen`, 320, row 3.0: the live kit turns it after word 3 (the possessive), the copy after
  word 2 (`shots/leads/crop-queen-320-row3-live.png`, `-copy.png`). carmen `cartes`, 360, row 0.4: the live
  kit turns it after word 5, the copy after word 4, where its artist's `turn` now puts it
  (`crop-cartes-360-row04-live.png`, `-copy.png`).
- Not mended by this: carmen `la-bas` row 1.3, whose first part ends on a conjunction written as one token
  with its pronoun; that is not a word of the lead's list (it turns after word 4 in both, without the
  reading's `turn`).
- What else may move: 62 passages hold one of the new words before another word (counted in the data). A
  line of theirs that turned after such a word on a phone now turns before it. Approved plate: `song` holds
  three; its pictures at 1280 and 390 are the same (no line of it turns there). The sweep lists the rest.

### 3, from the lead: a hair of room after an italic run that ends in ? or ! (done 18:16)

- `site/js/rich.js` lines 9–16 (`lean()`) and 42 (in `rich()`); `kit/plate.js` lines 19 and 413 (the
  caption comes from the build as HTML, not through `rich()`, so its runs are marked there);
  `css/atlas.css` lines 331–332: `.cap i.lean, .cap em.lean, .sources i.lean { margin-right: .08em }`.
- What: an italic run that ends in ? or ! and is followed by a space is marked `lean`, and in a caption
  and in the sources it is given .08em after it (1.4 px at 17 px), inside the lead's .06em to .1em. The
  class is set wherever `rich()` meets such a run, but the stylesheet acts only in a caption and in the
  sources, where the run is in italic; in a key, a remark or a gloss, where a named word stands upright,
  nothing changes.
- Five runs on the site: othello `lie`, the captions of tabs 0, 2 and 3 (on tab 2 the run ends its line),
  othello's fourth "where this page may be wrong", rimbaud's fifth. `song` holds none; its pictures are the
  same (18:16).
- Proved enlarged five times, live over copy: `shots/lean/crop-lie-0-1280-lean.png`,
  `crop-lie-3-1280-lean.png`. Measured in the page: from the end of the run to the next letter 3.0 px on
  live, 4.36 px on the copy.
- FOR THE LEAD: a look at the enlargement; .1em is one number away if the gap still reads tight.

### From the lead's seventh message: the Beat key's words, "A record", a tie backward (done 18:12)

- The key's words, `kit/lens-beat.js`, `aside()`, lines 215 and 221, and line 1 of the comment at the head:
  the three rows read as the lead gives them ("the measure: a long stroke is a beat, a short one an
  off-beat"; "the count: one stroke a syllable, a long one where the measure has an accent"; "a stress in the
  voice, on an accent of the measure"). The other rows keep their words. Every Beat tab's key changes by
  one or two rows, and nothing else. Approved plate (18:05): six pictures the same to the byte (the Rhyme one
  on the second try: see the note of 18:05 under "Working notes"), the two Beat pictures differ in the one
  label, on one line at both widths: `shots/song/crop-beat-1280-key.png`, `crop-beat-390-key.png`.
- `site/js/piece.js` line 80: the heading "A record of it" is "A record".
- A tie backward, `kit/lens-beat.js`: the mark `<` in a row's `voice` (line 12 of the comment at the head)
  is a syllable that is not counted and runs into the syllable before it. `parseRow()` reads it as it
  reads `~` (lines 28 and 47: not counted, class `sx`). `draw()` (lines 140–148) draws the same arc from
  the syllable before to it; in verse measured by length it begins clear of that syllable's mark, as the
  forward tie ends clear of the next. Where the line turns between the two, the second half of the tie is
  drawn: a short hook that comes in from before the part and ends on the syllable, the mirror of the hook
  1f draws for a forward tie. That was the cheapest thing, and it stands inside the hanging indent.
  The key (line 226) says "it runs into the one beside it" where the tab holds a backward tie, and keeps
  "it runs into the next" where it holds none.
- No reading uses the mark, so no picture changes by it. Proved on trial data: the data of don-giovanni is
  changed as it is served (`tools/patches/back-tie.mjs`: in `count`, Beat, row 1.0, the mark of word 4 is
  `<` for `~`; only the string of marks is changed, and no copy of the passage is written anywhere).
  `shots/backtie/crop-count-0-1280-row.png`: the row as the data is, over the row with the mark set (the
  arc now joins the last syllable of word 3 and word 4). Read in the page at 1280 and 390: the second tie
  of the row runs from the syllable before to the uncounted one, and the key at 390 changes its words.
  `shots/backtie/crop-count-0-280-turn.png`: the same row made to turn after word 3 (a trial `turn`, at
  280 px, the only width at which it turns): the hook under the start of the second part.
- FOR THE LEAD: the hook at a turn is small (9 px); a look. The checker is not mine: if it reads the
  marks of `voice`, it must come to know `<`.

### 4, weighed for the lead: a long key beside a short caption on a plate of one column (blake 7, don-giovanni 3; done 18:31)

- The fault (blake, "windows from 552 to 916 px"; don-giovanni 3; adams A10): on a plate 520 to 879 px wide
  the caption has two thirds of the width and the key one third, however long the key is. A long key then
  runs far below its caption in a narrow column, and the paper under the caption is bare. The blake artist
  names the mend: the kit has it for a plate of two passages (`keys-wide` in `arrange()`).
- `kit/plate.js`, new `wideKey()` (lines 619–629), called from `arrange()` (lines 631 and 695): on a plate
  that is not `two-col`, 520 to 879 px wide, the tab that shows takes `keys-wide` where its key is taller
  than one and a half times its caption and 40 px (the test `arrange()` uses under two passages).
- `css/atlas.css`, a new block (lines 421–430: `@container (min-width:520px) and
  (max-width:879.9px)`): the look of `.two-col .pane.keys-wide`, but in two columns of at least 230 px,
  not three of 250 (three would set one column of 95 letters at 600 px). No new look: the caption across
  the plate, the key under it in columns, as under two passages at 1280.
- What it moves: nothing at 1280 (the plate is 880 px and more), nothing at 390 or 320 (under 520).
  At 768 (a plate of 736 px) 116 tabs of the 35 pieces take it: 51 Words, 35 Beat, 30 with remarks only
  (`shots/wide/scan-768.txt`: each with the heights of caption and key; nothing stands outside its
  pane). On blake they are the five tabs the artist names, and no other. A second probe
  (`tools/probes/widekey2.js`, on five pieces) finds no tab with such a key that did not take it.
- Pictures (before on the live site, after on the copy): `shots/wide/crop-blake-creed-2-768-before.png`
  and `-after.png` (Words: 319 px shorter, no bare field); `crop-blake-creed-0-768-after.png` (remarks
  only: six in two columns); `crop-blake-sentence-0-600-before.png`, `-after.png` (Beat at 600: 293 px
  shorter; the key and remark 1 in the first column, remarks 2 to 4 and "draw it again" in the second);
  `crop-count-600-before.png`, `-after.png` (don-giovanni `count`, Beat: 562 px shorter at 600, 451 at
  768, 331 at 900).
- Approved plate (18:31:31): six pictures the same to the byte at the first try, the two Beat pictures
  differ in the one label only. (The approved plate takes `keys-wide` on no tab at 768 either: it is
  not in the scan's list; of tempest, `noises` 2 and `epilogue` 0 and 2 are.)
- FOR THE LEAD: a look, since the sweep's widths (1280, 390, 320) do not show this at all, and it changes
  a third of the tabs on a tablet held upright. The key's rows and the remarks flow through the two
  columns as they do under two passages: a remark can stand under the key's rows in the first column.
  If it is not wanted, it is taken out by removing the two calls of `wideKey()`.
- Seen with it at 600: blake `proverbs` is 16 px taller on the copy than on the live site. That is
  blake B (the type is larger where a row turns anyway), which holds at every width, not only on a phone.

### 4, weighed for the lead: no room for a rhyme's letter on a second passage that has none (don-giovanni 5, rilke; done 18:44)

- The fault (don-giovanni 5; rilke, `panther`): on a plate of two passages in one type (`beside: true`) the
  room for a rhyme's letter (80 px, 46 on a phone, and `--end` where lines turn) was taken from the longest
  line of both passages, though only the first has letters. The English lines are the long ones on
  `close`: the type was smaller than it need be, and English lines turned for want of 18 px.
- `kit/plate.js`: `endedB` (line 704: does a line of the second passage end on a rhyme?); in `fit()`
  (lines 729–741) the two passages are fitted each to its own width where only the first has such lines
  (`apart`): the first keeps the room, the second keeps 4 px as verse without rhyme does; line 749: the
  rows of the second passage then keep no `--end` (it is set to 0 on `.beside`). Where `apart` is not
  true the sum is the one it was, figure for figure. Nothing in the stylesheet changes.
- What can move: only a plate with `beside: true`, a Rhyme tab with `ends`, and none of them in the second
  passage. There are two: don-giovanni `close` and rilke `panther` (counted over all the built data).
- Measured, copy before and after (`tools/probes/twinend.js`), `close`: at 1280 the type is 28.5 px for
  24.2 (the plate 45 px taller); at 1024 23.8 for 22.0; at 390 18.8 for 17.5; at 360 17.1 for 19.0 and no
  English line turns where two did (the plate 87 px shorter); at 320 17.0 as before and two English
  lines turn for three. `panther`: at 1280 22.07 px for 21.98 (the German line now sets the size; 1 px
  taller); at 1024, 390 and 360 nothing moves (four pictures at 360 the same); at 320 ten English lines
  turn for eleven (row p:1.1 is whole, as its artist reckoned).
- No word passes the edge of its column on any tab (`tools/probes/twinout.js`: on `close` the longest
  English line keeps 1.3 px at 1280, 5.1 at 1024, 6.5 at 390, 4.7 at 360; in the other rendering,
  `--fractional`, 4.2 to 4.4 px at each width, and 2.7 at 320).
- Pictures (the copy before this change, and after): `shots/twin/before|after/don-giovanni-close-2-rhyme-1280.png`
  (the English lines now reach the end of the rule over them; letters and arcs clear);
  `shots/twin/crop-close-3-360-before.png`, `-after.png`; `crop-panther-3-320-before.png`, `-after.png`.
- Approved plate (18:43:35): six pictures the same to the byte at the first try, the two Beat pictures
  differ in the one label only. (`song` has one passage: `apart` is never true on it.)
- FOR THE LEAD: a look at `close` at 1280: its verse is a fifth larger than it was. The don-giovanni
  artist asked for this ("24.2 px where 28.8 would fit"). A second passage with rhyme letters of its own
  and a first with none does not occur; such a plate would keep the room on both, as before.

### 4: the points of a row cut short (karamazov 4, kierkegaard K3; done 18:49)

- The faults: (karamazov 4) a paragraph cut short at its end leaves its last word alone on the last line
  with the kit's points of omission: the points stood after an ordinary space, so the browser counted
  two words there and saw nothing to mend. (kierkegaard K3) `window`, row 21.0, is shown as far as a word
  that ends in the edition's own three points, and the kit's points followed them: six points.
- `kit/plate.js`, `makeRow()`, lines 239–242: the kit's points at the end of a row stand after a no-break
  space, so they keep to the last word shown; and they are left off where that word itself ends in points
  of omission (the sign of one piece, or three full stops). The sixth mending did as much for a dash.
- What can move: only a row cut short at its end (28 in the built data: 23 of prose, 5 of verse), and of
  those only one whose last line held the points alone or one word with them; the kit's points go from
  one row in all (kierkegaard `window` 21.0: counted over the built data).
- Pictures, the copy before this change over the copy after: `shots/cut/crop-cry-1-390.png` (two
  paragraphs: each now ends on two words and the points), `crop-kiss-1-360.png` (the same),
  `crop-window-0-390.png` (the last word ends its line with the edition's points; the plate is 54 px
  shorter). At 1280 karamazov `cry` and `kiss` are the same to the pixel, and kierkegaard `window` differs
  by the three points alone (24 px in a box 16 by 3). `window`, tab Day, does not move at either width.
- Approved plate (18:48:53): six pictures the same to the byte (the Rhyme one at 1280 on the second try),
  the two Beat pictures differ in the one label only.
- FOR THE LEAD: on kierkegaard `window` nothing now says that row 21.0 goes on after word 160 but the
  edition's own points. Its artist asked for that; if the kit's sign is wanted there after all, it is
  the test `dotted` in line 241. Not done with it: K2 (a line of three points before rows that open
  with points): which of the two signs stays is a choice of look (under "Not changed").

### 4: a caption keeps a word with its number (orpheus 9; done 19:10)

- The fault (orpheus 9): a caption parts "Act" from its number at a line's end. A caption comes from the
  build as HTML and never passed `tidy()`, so the rules of 3a did not reach it.
- `site/js/rich.js`, new `kept(node)` (lines 18–29): the words of a caption that stand outside bold and
  italic pass `keep()`, run by run. `kit/plate.js` line 413: the caption is set through it
  (`kept(lean(...))`), and line 19 imports it.
- What can move: only a caption in which a line end parts such a pair. Counted before the change over
  every tab of the copy (`tools/probes/capbroken.js`, `shots/cap/parted-before.txt`): at 390 four
  captions (dante-inferno `ulysses` 3, gotterdammerung `brand` 2, orpheus `song` 1, peer-gynt `answer` 2),
  at 1280 one (dutchman `oath` 1, two pairs), at 320 two (peer-gynt `onion` 1, tempest `noises` 0). After:
  none on those six pieces at the three widths.
- Corrected by the last sweep (21:52): more captions are set anew than that count found. A caption is set
  with `text-wrap:pretty`, which will not leave one word alone on the last line; a kept pair counts as one
  word there, so a caption that ends on such a pair takes one more word down, and the lines over it may
  be set anew. And my probe did not know every pair that `keep()` keeps (a plural, a range). Measured on
  every tab, live and copy (`tools/probes/caplines.js`, `shots/cap/caplines-390-live.txt` and `-copy.txt`;
  at 1280 by the caption's lines in `geom.js`): at 390 six captions (the four above, augustine `late` 3,
  and dante-purgatorio `love` 3, which is a line longer, 12 for 11); at 1280 three (dutchman `oath` 1,
  gotterdammerung `brand` 2, peer-gynt `onion` 1). Every other caption has the same lines as on the live
  site, but for othello `lie` 0 and 3 (the hair of room after an italic ?). 320 was not measured again.
  Pictures, live over copy, in `shots/sweep/`: `crop-late-3-390-caption.png` (the last four lines set
  anew), `crop-love-3-390-caption.png` (the word with its number; a line more; two words on the last
  line), `crop-onion-1-1280-caption.png`, `crop-brand-2-1280-caption.png`.
- Pictures (live over copy): `shots/cap/crop-song-1-390-caption.png` (the last three lines of the
  caption are set anew), `crop-oath-1-1280-caption.png` (two pairs; two lines now stop short, the
  caption has nine lines as before).
- Approved plate (19:09:47): six pictures the same to the byte at the first try, the two Beat pictures
  differ in the one label only.
- Not covered: a pair inside a bold or italic run, or one that runs over the edge of such a run.

### 4: two passages side by side begin level under labels of unequal height (magic-flute 3; done 19:24)

- The fault (magic-flute 3): on `weddings` at 1280 and 1024 the label over the first passage took two
  lines and the label over the second one, so the two passages "of equal standing" began 16 px apart.
  The plate does not show it today: the first label is shorter now, and no plate of two passages in one
  type has labels of unequal height at 1280, 1024 or 960, in either rendering
  (`tools/probes/twinlabels.js`). A longer label would bring it back, so the kit's mend is made.
- `kit/plate.js`, `arrange()`, lines 648–657: on a plate of two passages in one type that stand side by
  side, where the two labels differ in height by more than a pixel, the shorter is given the height of
  the taller (`min-height`, taken off and measured again at each call).
- What can move: nothing on the site as it is (no such pair of labels). Shown on trial data
  (`tools/patches/long-label.mjs`: the first label of `weddings` set twice over as the data is served):
  live, labels 30.8 and 15.4 px tall, the first lines 15.4 px apart; copy, both 30.8 px, the first lines
  level. `shots/level/crop-trial-weddings-1280-head.png` (live over copy).
- Approved plate (19:24:07): six pictures the same to the byte at the first try, the two Beat pictures
  differ in the one label only.
- Seen with it: on magic-flute `trial` the first lines of the two passages begin 2.3 px apart under
  equal labels. That is magic-flute 9 (a speaker's name stands 2 px closer in a second passage), which
  is under "Not changed".

## The last sweep (19:57 to 20:55; its account, 21:00 to 22:35)

- What was run (`tools/sweep.sh`): each of the 35 pieces, the live site and then the copy, one command at a
  time: every tab of every plate and the whole page in strips, at 1280 and 390. The tool's complaints are in
  `sweep.txt`, `pixdiff` of each pair in `moved.txt` (918 lines), the pictures in `shots/sweep/<piece>/`
  (`before`, `after`, `diff`). Then the copy at 320, complaints only (the end of `sweep.txt`). No piece's
  built data changed between its two runs, and the live kit is still as it was when I took my copy.
- **The tool's complaints.** The live site: one, on faust `heaven`, Rhyme, at 390 (an arc of a rhyme stands
  outside the plate); nothing on the other 34 pieces. The copy: nothing on any of the 35 pieces at 1280 and
  390, and nothing on any at 320. (The one is mended by 1e.)
- **Pairs.** 1,202: 736 pictures of tabs and 466 strips of pages. 354 are the same under `pixdiff`; 847
  differ (485 pictures of tabs, 9 of them under its threshold, and 362 strips); one strip is new (the page
  of carmen at 1280 is a strip longer).
- **A second measure, to tell what moved from what is only painted otherwise.** `tools/probes/geom.js` on
  every tab, live and copy: the place and size of every word, line of a version, gloss, mark, line of the
  caption and line of the key, taken from the plate's own corner to half a pixel
  (`shots/sweep/geom-<width>-live.txt` and `-copy.txt`; `tools/geom-compare.py` writes
  `geom-<width>-moved.txt`). At 1280, 177 of the 368 tabs stand exactly as on the live site and 191 do not;
  at 390, 148 and 220. (Taken 20:56 to 21:18. The title of a page, put back since, is outside every plate.
  The measure does not see a line that turns elsewhere inside a box of the same size: the next list but
  one has those.)

**Every tab in which something stands elsewhere, by the change that moved it** (`tools/buckets.py` sorts
them by the kind of tab and by what moved; `tools/geom-plates.py` lists them plate by plate)

At 1280, 191 tabs:
- 36 Sentence tabs, the marks only: blake C (every rule 3 px lower).
- 18 Beat tabs, the key only: its words (1i and the lead's seventh message) and its rows (1h). Four more
  with the plate's height: dutchman `tale` 0 and fidelio `name` 1 (22 px taller: the key has a row more),
  don-giovanni `count` 0 (2d: 246 px shorter), moby-dick `rails` 0 (below).
- 6 Figure tabs, the marks only: 1c (the six plates named there).
- 4 Rhyme tabs, key and marks: dante-paradiso `prayer` 1, dutchman `tale` 1, hamlet `seems` 3, henry-iv-2
  `sleep` 1 (1b and 1e).
- 5 captions and nothing else: dutchman `oath` 1, gotterdammerung `brand` 2, peer-gynt `onion` 1 (a
  caption keeps a word with its number), othello `lie` 0 and 3 (the hair of room after an italic ?).
- 4 keys on other tabs: dutchman `tale` 2 and rilke `turn` 1 (2d), moby-dick `rails` 1 and 2 (below).
- 114 tabs of 35 plates on which the passage itself stands elsewhere. The 22 plates set line under line
  (2b: 27 px lower; 20 px on faust `heaven` and `name`; their Word tabs 48 to 132 px in all, with 2e). The stop
  set close: carmen `la-bas`, orpheus `terms`, phedre `names`, `sight`, `slip` (and four of the 22). Room
  for a rhyme's letter kept on one passage only: don-giovanni `close`, rilke `panther`. A row cut short:
  adams `sister`, castle `street`, kierkegaard `weaning` and `window`, moby-dick `rachel`. And antigone
  `elders` (below).

At 390, 220 tabs:
- 28 Sentence tabs, the marks only, and augustine `late` 3 with its caption (blake C; the caption keeps a
  word with its number).
- 16 Beat tabs, the key only; five of them 22 px taller (a row more).
- 6 Figure tabs, the marks only (1c). 1 Rhyme tab, the key only (dante-paradiso `prayer` 1).
- 5 captions and nothing else: dante-inferno `ulysses` 3, gotterdammerung `brand` 2, orpheus `song` 1
  (word and number), othello `lie` 0 and 3 (the hair of room).
- 163 tabs of 54 plates on which the passage itself stands elsewhere: the 22 plates set line under line
  (2b; 43 or 44 px where the legend takes two lines); the twelve set larger by blake B (listed there); 2a
  on seven (baudelaire `evening`, don-giovanni `close`, horace `crossing`, magic-flute `weddings`, rilke
  `count`, `turn`, `panther`); the stop set close on carmen `la-bas`, orpheus `terms` and the three of
  phedre; a row cut short on karamazov `first` and `cry`, kierkegaard `window`, pascal `reed` and
  `wager`; a turned line close on a Rhyme tab (henry-iv-2 `sleep` 1, volpone `close` 0, and tabs of
  plates already named); the Beat key's new row pushing the version down (fidelio `name` 1); a caption a
  line longer (dante-purgatorio `love` 3: a word kept with its number).

**Pictures that differ though nothing in them stands elsewhere** (74 pictures of tabs; `tools/still.py`
lists them, `tools/where-compare.py` sets them against the place of the plate on its page, taken to a
hundredth of a pixel by `tools/probes/where.js`: `shots/sweep/where-<width>-live.txt` and `-copy.txt`)
- 58 (41 at 390, 17 at 1280): the plate has the same height to a hundredth of a pixel and stands at another
  fraction of a pixel on its page, because a plate over it is taller by a broken number of pixels. Some
  or all of its lines are then painted a pixel row higher or lower, and the picture may be a pixel taller
  or shorter. At 390: agamemnon `cloth` and `net`, antigone `quarrel`, dante-paradiso `end`,
  dante-purgatorio `garden`, don-giovanni `duet`, dutchman `oath` and `refrain`, faust `name` and
  `wheel`, fidelio `name` and `scene`, hamlet `readiness` and `to-be`, horace `bee` and `crossing`,
  magic-flute `weddings`, the three plates of peer-gynt, rimbaud `stanza`. At 1280: dante-inferno
  `ulysses`, dante-paradiso `end`, don-giovanni `duet`, faust `name` and `wheel`, horace `bee` and
  `crossing`, magic-flute `weddings`, rimbaud `stanza`. Seen enlarged: horace `crossing`, Word, 1280
  (`shots/sweep/crop-horace-crossing-1-1280-band.png`: one line of the notes, in all three columns, a
  pixel off).
- 9: a label over a passage is balanced (3e) and its box is the same: traviata `end` 0, 1 and 2 at both
  widths, traviata `refrain` 2 and 3 at 390, peer-gynt `answer` 3 at 1280.
- 3: the key under a drawing no longer leaves one word alone on its last line (3e): karamazov `first` 1,
  kierkegaard `greater` 3, moby-dick `rails` 3, at 390.
- 4 under the threshold of `pixdiff`, the plate at the same place: rilke `panther` 3 at 390; agamemnon
  `yoke` 2 and 3 and tempest `song` 1 at 1280 (Rhyme tabs, which the browser does not always paint the
  same: "Working notes").

**The strips of pages** (362 differ): a strip differs where a plate in it does, or where a plate over it
is taller or shorter. Of the page's own parts, the quotation at the head (3b), the notes and sources (3a,
the hair of room) and the foot (the heading "A record", the raised point) are set anew. I did not go
through the strips one by one: the plates are accounted for above, and the page's own parts were seen
when they were changed (`shots/3a`, `shots/3b`). One thing the strips did show is the next line.

**What the sweep found wrong, and what was done**
- The title of a page, which I had tied as a heading for horace 11, took a third line on a phone on two
  pages. Put back at 22:12 (under 3b, with the count of every title at five widths). The four pieces
  whose title differed at 1280 or 390 (agamemnon, dante-purgatorio, family-reunion, pascal) were
  photographed again, live and copy, and the seven whose title differed at any width again at 320
  (22:13 to 22:18): `sweep.txt` and `moved.txt` hold the second run for them, the first run's two files
  are in `shots/sweep/first-run/`. The numbers of this section are the second run's. family-reunion: 13
  of its 16 pairs are now the same, its four tabs at 390 among them.
- Two plates moved at 1280 that I did not mean to move; both are left, and both are under "For the lead".
  moby-dick `rails`: on its three tabs with the passage the key and remarks stand under the passage
  (`low`) where they stood beside it: 1,087 px for 923 on Beat, 864 for 732 on Figure, 1,004 for 822 on
  Word, and the paper under the caption is bare. Cause: 1h gave its Beat key a row more (a small red dot
  that the lines carry), the tallest caption with its key is 22 px taller, and the kit's rule for a short
  passage (shorter by more than 200 px, and under three quarters) now holds (208 px by the lead's measure). The rule is the
  live kit's, not changed here. By the lead's word (the eighth message) I leave it: the lead mends it
  after the merge.
  antigone `elders`: its verse is set in 22 px for 20 and the plate is 14 px taller. Cause: blake B. It
  is the one plate at 1280 whose verse is at the floor: its six lines stand whole at 20 px, but not with
  the 80 px that `fit()` keeps for a rhyme's letter, so the kit marks them as turning (`turns`), and
  blake B then sets them as large as no line turns: 22 px, six lines whole, the longest 570 px of 607
  (`shots/blakeB/sizes-1280.txt`: of 103 plates seven are larger in the copy, the other six by the stop
  set close or by the room for a rhyme's letter; none has more or fewer lines). On the Rhyme tab the
  letters and arcs stand inside the column (`shots/sweep/antigone/after/antigone-elders-2-rhyme-1280.png`).
  The rule does what its words say, on a plate where no line turns, which the report did not have in
  mind. Wider than 1280 was not scanned.
- Three things written wrongly in this record, corrected in place: a legend of two lines makes a plate
  begin 43 or 44 px lower, not 54 (2b); more captions are set anew by the word kept with its number than
  I had counted, and one is a line longer (under that heading); the cited lines of `plate.js` and
  `atlas.css` that the `closer` row had shifted.
- Nothing is left that I could not account for.

## Not changed, and why

Every fault of the reports that is the kit's and is not under "Changes" above. (A report's number follows
its piece. What is the lead's own by the brief is listed last, so that nothing is missing.)

**The brief says these stay**
- A long plate on a phone: fidelio K7, gotterdammerung 7, faust 8, adams A6 (the caption far below the
  marks; 53 px a line on every tab), blake (a passage and its caption not seen together).
- The room between a line and the English under it: orpheus 5 (the Beat room under every line on tabs
  that do not use it), faust 6, rilke 4 (`panther` is `beside` now, so that plate no longer has it).
- The order of key and remarks on a phone (the caption first on every tab): horace 1.

**Settled sizes, colors and motion (the look is approved)**
- The rhyme's letter of 13.5 px: rilke 6, carmen. Umber beside ochre: rilke 6. Slate on a letter:
  gotterdammerung 6. Glosses of 12 px and notes of 13 on a phone: magic-flute 5, adams A9, baudelaire.
  `dg-lab` of 10.5 px: adams A8. The even pace of the hairline in Measure: horace 3 (a change of motion).
- The row of letters in a Rhyme key (don-giovanni 8: cramped at fifteen lines, no opening where a stanza
  ends): it is the key of the approved plate; opening it by stanza is a new look.

**A rule that works on every plate: the mend would move plates that do not have the fault**
- Where a line turns: of two stops equally near the middle the first wins (hamlet 4a); the stop nearest
  the middle is looked for in the rows of the first passage only, so a line of a second passage in one
  type turns where the browser balances it (rilke; and the checker, which is the lead's, refuses a
  `turn` there); longer prepositions and clause words are not among the leading words (hamlet 4b, rilke:
  `LEADS` has what the lead listed).
- A held run of words: a date in a passage parted before its year (baudelaire 3: the limit of 14 letters
  is the fifth mending's); a line left short at 320 and 360 (baudelaire 6, kierkegaard K4); a marked run
  longer than a held run parts (hamlet 8); the first word of a ruled phrase alone at a line's end (rilke 8).
- A line that turns on the Beat tab only, by a pixel or two (phedre 2.9, magic-flute 12, carmen 3, rilke 8):
  bold syllables and the room of a remark's number; it turns at its cut.
- A turned line that the tab does not mark, in a version set as a block or line under line, keeps its two
  parts a row apart (fidelio K4, faust 5, phedre 2.8): `plain` is given to rows of the first passage and of
  a twin; giving it to these rows changes the pitch of every such block.
- The upper part of a turned line keeps a mark's room when only the lower part is marked (orpheus 8,
  rilke 8, faust 9): the parts of a marked line keep one pitch.
- On a compare tab in two columns the version keeps the pitch of the original where no pair can stand
  level (don-giovanni 10), and the two stand out of register by half the band (phedre 2.2): one rule of
  the stylesheet (`.two-col.lens-compare … .pr.k-v`, line 249 of the live sheet). To give the pitch only
  where `level()` has set rows level is the mend I would try; it moves every such tab at 1280.
- A second level of sense 2 to 3 px above the next line at 320 (hamlet 7): the band of every Words tab.
- The ticks of a spine on the left end 2 px from the first letters (dante-inferno K4, magic-flute 7; faust
  9 on a phone): the place of every left spine.
- A key set across the plate breaks its columns inside a group of rows (orpheus 3, phedre 2.5): the
  stylesheet cannot tell which rows belong together; the key would need the groups marked.
- A first paragraph flush and the next indented in a refrain of prose (kierkegaard K1): every plate of prose.
- A gloss that runs on under the next word (kierkegaard K7); a remark's number after a hanging dash
  (magic-flute 6); speakers' names 2 px closer in a second passage (magic-flute 9); one long sweep in Rhyme
  where only the first line of a pair turns (phedre 2.10); uneven distances where rows are set level
  (carmen): small, and each touches a rule that every plate shares.
- A word of one letter at the end of a line of a caption or of the notes under the record (adams A10,
  magic-flute 11): `keep()` has no such rule for running words (a heading has it, in `tie()`); it would
  turn lines anew in every caption and note.
- Bare paper under a passage that is under the measure of `low` and of 2d (baudelaire 7: 191 and 228 px;
  carmen 7: the notes of `la-bas`, Word, still run 174 px below the longer passage at 1280).
- Names in a key row that hold neither comma nor colon stay joined by a comma (blake D, three rows; adams
  A1: a row of one name that itself holds a comma). What reads as one there is the reading's wording.
- A plate between 917 and 981 px wide goes to two columns before its lines fit (blake, found last): the
  threshold of 880 px is every plate's.

**A choice of look, of wording or of behavior that the brief does not make (each is also under "For the lead")**
- A pair's number stands on the name of the next speaker (don-giovanni 6, fidelio K2, phedre 2.3): how
  much room a name keeps above it where the row before carries a number. Three reports; the first thing
  for a second mending. It also touches the block of Fidelio, whose speaker rows are the lead's.
- A line of three points before rows that open with points of omission (kierkegaard K2): the gap is
  shown twice; which sign stays is a choice.
- A tie that meets the top of the two bars of a pause (phedre 2.6): where the bars begin under a tie.
- At 390 one of a reading's two joins is drawn (phedre 2.7): what is drawn is true; the reading can set
  `join`.
- A short phrase in bold broken between two lines of a caption (don-giovanni 12), or at its hyphen
  (phedre 2.11): bold words turn as other words do. To hold a phrase "of two or three short words" needs
  a measure of what is short, and would set lines anew in captions that have no fault.
- The place beside a plate's heading says the heading again (baudelaire 2, carmen 5): the wording of
  heading and place is the lead's.
- A word named in a caption of a compare tab lights only some of its places under the pointer (blake E):
  the rule is in KIT-CHANGES on purpose ("What is different"); an exception for compare tabs is a change of behavior, and
  a still picture cannot show it.
- A line of a page's title that ends on a word of one letter (horace 11, at 320): tied as a heading is,
  the titles of other pages were worse (family-reunion and agamemnon three lines for two on a phone,
  castle a first line of 38 px at 320). Tried, seen in the last sweep, put back (3b). A way that would
  not move the other titles needs a measure after the page is laid out, at every width.
- The point left out where the line over the title turns (blake F): 3b keeps the point with the author.
- A folded table of many columns scrolls sideways on a phone with nothing to show it (dante-inferno K6):
  a sign that it scrolls would be a new mark.
- A call for a link in a drawing, `d.link` (adams A8): a new call of the kit; scripts are the pieces' own.
- The tabs drop under a long place, at the left (magic-flute 2): the label is the lead's; tabs to the
  right when they drop is a choice.

**Mended elsewhere since the report**
- baudelaire 4 (a key row breaks after a numeral that begins a name): the built data now holds a no-break
  space after each numeral of those labels; the kit has no rule for it (one other tab has such labels with
  an ordinary space: moby-dick `whenever`, Sentence).
- faust 7: the reading holds a no-break space; and `what` passes through `rich()` now (3c).
- dante-inferno K7 (the stand-in table prints a working key): the seventh mending. rilke 5 (`panther`,
  Rhyme at 320): gone since the plate is `beside`.

**The lead's own by the brief, named so that the list is whole**
- fidelio K1, K3 and K6; faust 1; don-giovanni 1, 4 and 7; hamlet 1; blake A (a `turn` in the reading);
  adams A7 (a hyphen in a range of years, in the data); horace 2 beyond the Beat key's words; the checker.

## For the lead

Everything marked FOR THE LEAD above, in one place. "Look" means a choice of look I had to make where the
brief makes none (the plainest was taken); "decide" means a number or a wording that is yours.

**Look**
1. 2b, the legend: faust `heaven` at 1280, where it stands straight over a speaker's name with its gloss
   (`shots/2b/crop-heaven-1280-head.png`). Every plate set line under line begins 27 px lower.
2. 2d, a key under both passages: the remarks at the right of a key run in lines of about 600 px
   (`shots/2d/after/don-giovanni-count-0-beat-1280.png`); where the passages are of unequal width the
   two columns of remarks do not begin where the passages do (dutchman `tale`, Word).
3. The key under its caption on a plate of one column, 520 to 879 px (a tablet): a third of all tabs;
   none of the sweep's widths shows it (`shots/wide/`, and the list in `shots/wide/scan-768.txt`).
4. don-giovanni `close` at 1280: the verse is a fifth larger (`shots/twin/after/`), as its artist asked.
5. blake C: the rules of every Sentence tab stand 3 px lower (`shots/blakeC/`).
6. 1g: horace `ship` at 320, where every long mark is 7 px, as wide as a short one
   (`shots/1g/crop-ship-320-rows.png`).
7. 3b, the line over the title: the point keeps to the author, so where the line turns it still ends
   the first line. blake F (leave the point out there) is not made.
8. The foot: heading and tab joined by a raised point; in bold the point is small.
9. A hair of room after an italic ? or ! (.08em; `shots/lean/`).
10. The tie backward at a turn: a hook of 9 px (`shots/backtie/crop-count-0-280-turn.png`).
11. kierkegaard `window`: the kit's points are gone after the edition's own, so nothing but those says
    that row 21.0 goes on (`shots/cut/crop-window-0-390.png`).
12. blake B on the approved plate at 320: `song` is set in 17.0 px for 16.5 (ten screen lines as before);
    at 1280 and 390 nothing changes. The rule holds at every width where lines turn anyway (see 29).

**Decide**
13. 2d: the number 120 (px a plate must gain before its key goes under both passages). At 80 five more
    tabs move at 1280 and looked right (`shots/2d/at-80/`).
14. 2e: the room over the version's line is given on every row of a Word tab, so the lines stand a
    little further apart there than on the plate's other tabs. The other way keeps the lines in place
    and makes the pitch uneven.
15. 1b: the key's words "the same sound, by itself" and "the sound x, coming back" are mine. A key whose
    sounds are all single letters keeps them italic, because the approved plate has such a key.
16. 1c: traviata `refrain` and dante-purgatorio `share` each lost two strokes that said something true
    (some could be drawn and not others); a `join` in the reading brings them back.
17. 2a: the passage that goes after the caption keeps its type and leading; the rilke artist asked for
    it to be set close there.
18. The stop after a space: set close also before points of omission (orpheus `aria` 2.0) and before a
    comma (orpheus `song` 0.0, word 4). The guillemets are left; an opening one is the tail of the word
    before it in `tokens()`, which is the build's.
19. 3c: in the stand-in table a head of one line stands at mid-height beside a head of three; and
    `lens.name` (the term over `plain`) is still bare type.
20. 3e: a link in a drawing has no look of its own now; one look for all, and a call `d.link`, would be
    new.
21. The checker must come to know the mark `<` in `voice` before a reading uses it.
22. The README's table of kinds says "the measure" for "the meter" (one word), to agree with the key.
23. dante-purgatorio `garden` (built 18:04) has four tab names of 28 letters. They keep to one row at
    320 only by a second, closer setting (`closer`: 6 px between names, letters at .11em;
    `shots/2c/crop-garden-320-head.png`). A name one letter shorter would not need it.
24. carmen `la-bas`, Word, at 1280: the notes still run 174 px below the longer passage (carmen 7). The
    plate would be less than 120 px shorter with the key under both passages, so 2d leaves it.

**To know**
25. The approved plate's Rhyme tab is not always painted the same to the byte by the browser, on the live
    site as on the copy (a few pixels of the arcs, or six in the margin; "Working notes", 18:05). A check
    that shows that should be run again before it is believed; `tools/song.sh` does so by itself.
26. `home.js`, `main.js`, `shelf.js`, `about.js` and `index.html`: I changed none of them. At 19:05 I
    copied your present ones over my snapshot, so that the copy differs from the live site by my twelve
    files only (`changed.txt`; checked file by file at 19:30).
27. The no-break space after a numeral in the labels of baudelaire `evening` is in the built data now;
    moby-dick `whenever`, Sentence, has four such labels with an ordinary space.

**New since the lead read this record (from the last sweep; 21:00 to 22:35)**
28. moby-dick `rails` at 1280 goes to the key under the passage (`low`) on its three tabs with the
    passage: the sweep shows it (`shots/sweep/moby-dick/before` and `after`; numbers and cause under "The
    last sweep"). Left as it is, by your word.
29. Look: blake B at 1280. antigone `elders` is set in 22 px for 20 and is 14 px taller, though no line of
    it turns at either size (`shots/sweep/antigone/before` and `after`, `antigone-elders-*-1280.png`). It
    is the only plate so at 1280. If the rule is to hold only where a row really turns at the floor: in
    `fit()` of `plate.js`, run the loop of sizes (line 775) only `if (base > fitRows.length)`; `base`
    (line 773) is the count of screen lines at the floor. On phones that would also set back five plates
    that are larger now with no line turning: hamlet `seems` and traviata `cabaletta` at 390,
    dante-paradiso `prayer`, tristan `work` and volpone `song` at 320. I did not make it: you asked that
    `plate.js` stay as it is.
30. Look: the quotation at the head of a page, tied as 3b says. 79 of 175 turn elsewhere, nine take a line
    more at 360 or 320, some are less even (othello at 390: `shots/sweep/othello/diff/othello-page-390-0.png`;
    the list in `shots/3b/titles-after.txt`).
31. To know: `piece.js` changed once more at 22:12. The title of a page is no longer tied (line 53, as on
    the live site, with a line of comment over it); lines after it are one lower than before. Tied, the
    title of family-reunion and of agamemnon took a third line on a phone. horace 11's title is not mended.
32. To know: the word kept with its number sets nine captions anew at the sweep's widths, not five, and
    dante-purgatorio `love`, Mountain, at 390 is a line longer (`shots/sweep/crop-love-3-390-caption.png`).
33. To know: a legend of two lines is 43 or 44 px, not 54; 20 px where a speaker's name is the first row.
    The section for the artists says so now.

**Left for a second mending, in the order I would take them**
- A pair's number on the next speaker's name (don-giovanni 6, fidelio K2, phedre 2.3).
- The pitch of a version on a compare tab in two columns where rows are not set level (don-giovanni 10,
  phedre 2.2).
- A turned line of a block version, or of a version set line under line, that the tab does not mark
  (fidelio K4, faust 5, phedre 2.8); with it the stop nearest the middle for rows of a second passage
  (rilke), which also needs the checker to take a `turn` there.
- A tie over the two bars of a pause (phedre 2.6); the gap sign before rows that open with points
  (kierkegaard K2); a word named in a caption of a compare tab (blake E).
- The rest of "Not changed, and why" is there because the look is settled or the brief says it stays.

## Refused by the permission system

Nothing was refused.
