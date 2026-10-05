# The ninth mending of the kit, the rows: record

Mender of the rows, in `remake/kit9a/`. Begun 3 October, 22:51 UTC; to hand in about 01:20 UTC.
Brief: `remake/kit9/BRIEF.md`, "The rows". Everything below is in this copy only.

## State

(kept as I go; the last lines of this part say where I stand)

- 22:54 The approved plate (tempest `song`) photographed from `orig`, every tab, 1280 and 390:
  `shots/song/before/`. The copy, unchanged, is the same to the byte (8 of 8). `tools/song.sh` takes it
  again from the copy and compares; a picture that differs is taken again, three times at most.
- 22:56 A probe of my own, `tools/probes/geom.js`: for each tab of each plate its layout classes, the
  height of the plate, the foot of the passage and of the caption, the size of type, and sums over the
  places of every row, name, direction, label, word and gloss (numbers only). `scans/orig-<width>.txt` is
  `orig` at 1280, 1024 and 390; the same scan of the copy after an item shows every plate that moved.
- `tools/rows.mjs <piece> <plate> [--marks] [--orig]`: the rows of a built plate by numbers only.
- 23:19 Items 1 and 2 done. 23:37 the approved plate the same (8 of 8) with items 3, 4 and 5 written.
- 23:54 Items 3, 4, 5 and 8 seen in pictures; 23:57 item 10 seen. The approved plate the same at 23:54.
- 00:11 The copy built and set aside (`snaps/final/site`); the approved plate the same to the byte, 8 of
  8, at 00:12, after the last change to the kit (`shots/song/last.txt`). The last sweep reads the copy
  set aside. Nothing of the kit was to change after that; one thing did:
- 00:50 The last sweep showed that item 10 had put three tabs out (see item 10). `arrange()` in
  `plate.js` was mended at 00:52, 01:03 and 01:10, nothing else. The kit as handed in is set aside in
  `snaps/final3/site`; the approved plate is the same to the byte, 8 of 8, at 01:11:40.
- **Where I stand at the end**: done and proved 1, 2, 3, 4, 5, 8, 10; found already mended and left
  alone 7 and the checker's part of 9; not done 6, the rest of 9, 11. See each item and "For the lead".

## Working notes

- The brief sends to `remake/LEAD-LIST.md`, "Names and directions set in the line", for the rows and
  words of item 1. The list has no such part now (it was written anew at 20:38). The rows and words are
  in the artist's K1 (`remake/works/traviata/art.md`, lines 231 to 316), and I took them from there.

## Items

(each item in the order of the brief; filled as each is done)

### 1. A name or a direction that the edition prints inside the line: DONE

**What a reading says.** `stage` takes one more key: `"inline": true` (the name and the directions stay
in the line), or `"inline": "name"` / `"inline": "dir"` (only those stay; the other is taken out as before).

    "stage": { "1.0": { "name": 1, "dir": [3, 4], "inline": true }, "2.1": { "dir": [5, 5], "inline": true } }

A direction may then stand in the middle of a line, and a row that is nothing but a direction is still a
row of the passage (a heading among the lines): `"0.0": { "dir": [0, 0], "inline": true }`.

**The build** (`build/pieces.mjs`, `rowsOf()`, the comment at "A reading may say which words", and
`buildPlate()` at "A name or a direction that stays in the line"): the row keeps `first` and `last` as the
first and last word of its verse and carries `stage: [[first word, last word, "s" | "d"]]`. The words keep
their numbers. A name given by `text` is not in the row and is still set over it. The build refuses a scan
that would have to pass over such words, a rhyme on a row that ends in them, and a part, a span, a pair or
a sound on them. A note of a Word tab and a numbered remark may stand on them: the brief asks that
"notes and remarks keep their places", and the Words tab of traviata `end` glosses its directions and
names one of them in its caption.

**The page** (`site/js/kit/plate.js`, `makeRow()` at "A name or a direction that the edition prints in the
line"; `fit()`, `widest()` and the loop after "a direction that stays in the line keeps whole"; the loop
before "captions" that keeps the verse of such a row together): the words are wrapped where they stand,
`.in-s.stage-s` (small capitals) and `.in-d.stage-d` (small italic), the sizes of a name and a direction
over a line. The edition's own brackets stay.
- The size of the verse is reckoned without a direction that follows the verse (it may turn). A name at
  the head of a line is reckoned with it: the name cannot leave its line, and a line that just fitted
  would otherwise run out by the width of its name. (The brief says "without them"; this is my choice,
  see "For the lead".)
- A direction keeps whole and the line turns before it (a `wbr`); the turned part stands in by 1.3em as
  the turned part of any line does, and on a tab that does not mark the row it stands close under its
  line. A direction longer than the plate turns in itself (`long`). Nothing runs out of the plate at 320.
- To a stroke from line to line a turned direction is what a direction over a line is: the stroke passes
  behind it, broken (its box is `stage-d` and its words are `wq`, not `w`, so `hurdles()` in `draw.js`,
  which is not mine and is unchanged, sees a direction and not a line of words). Without this two of the
  four strokes of the Shared tab were lost at 390.
- A row that is nothing else keeps its words as `w`, so a remark's number has its room after them.
- A word of a name or direction named in a caption still lights where it stands.

**The checker** (`build/tools/check-reading.mjs`, `checkStage()`, `checkStaged()`, `marksOfLens()`): it
knew nothing of `stage`. It now reads the key as the build does (the same refusals, by row and word
number), gives each row the first and last word of its verse (so a scan is asked only for those), prints
one line of proof for each row by numbers, and warns where a direction stays in the line after a line that
ends on a rhyme (the letter and its join would stand on it). Its verdict on the six pieces that use
`stage` is the same as the old checker's, line for line (`--quiet`, compared).

**Stylesheet**: new rules `.in-s,.in-d`, `.wq`, `.plate.has-lit .wq:not(.lit)`, `.in-s`, `.in-d`,
`.in-d.long`, `.tx.k-v.has-in`, `.tx.k-v.has-in.plain` (after `.stage-g`). No rule changed.

**Tried in the copy's readings** (the exact edits are under "For the lead"):
- traviata `end`: ten rows. Before `shots/before/traviata/traviata-end-*`, after
  `shots/after/traviata/traviata-end-*` (1280, 390, 360, 320); crops `shots/1/crop-end-*`. The verse is
  34 px at 1280 (28.6 before) and about 28 at 390 (17.3). The Words tab keeps all seventeen glosses.
- traviata `cabaletta`, row 10.7: shown whole with `"stage": { "10.7": { "dir": [6, 8] } }` and no
  `inline`, so the direction stands under the last line as a direction, and the row has no points of
  omission. This needed no new code: the eighth's `stage` already did it. I did not leave it in the line
  because the line ends on a rhyme, and the Rhyme tab sets the letter and its join where the direction
  would stand (`shots/after/traviata/traviata-cabaletta-1-rhyme-1280.png`). With the row whole, K4 (the
  letter on the points) is gone too.
- fidelio `scene`, rows 0.0 and 12.0: each a direction that is the whole row, in the line. They are set
  small and italic, as the English beside them sets its own heading; the gloss of each and the remark on
  12.0 keep their places, and no row moves (`shots/1/crop-scene-beat-1280-before.png`, `-after.png`,
  `crop-scene-word-1280-after.png`).

**What else it moved.** Without `inline` in a reading nothing: the built data of the 34 other pieces is
the same to the byte (`tools/datadiff.mjs`), and the scan of every tab shows no other plate (below).
On traviata `end`, English tab at 1280, the English column is taller (1,541 px to about 1,690): the
version keeps the pitch of the original there (item 10's rule), and the original's type grew.

### 2. A direction of the English printed under the wrong name: DONE

**What was wrong.** The build gave a row of the second passage every direction that stood between the
row before and it (`dir`), and the page printed the speaker's name first and that direction under it. In
the edition the direction stands before the name: it belongs to the speech above.

**The build** (`build/pieces.mjs`, `buildPlate()`, the loop "who speaks, and what the stage does"): a
direction that stands before a speaker's name goes to the row as `dirPre`; one that stands after the name
stays `dir`. A row with no new name keeps all of them in `dir`, as before. Line under line the same order
holds (`dirPre`, then the name, then `dir`).
- The edition's heading of a number is no direction and is left out (`numberHead()`): a block of kind `d`
  that is one word and a full stop, followed by a text block that begins with at least two words of the
  block's own first line... that is, the edition's way of heading an air or a scene. Counted by script,
  only La Traviata's English libretto has such blocks (9), and of the plates on the site only `refrain`
  and `cabaletta` showed one.
- A direction that stands before a block whose first rows the plate leaves out is not printed over the
  first row shown (`late`): it belongs to lines that are not there. (On `refrain` it stood over a row
  that follows a gap.)

**The page** (`site/js/kit/plate.js`, the loop over `pairRows`): `dirPre` is set as a direction before
the name; the name follows; `dir` under it.

**Seen.** traviata `end`, English tab, 1280 and 390 (`shots/before/traviata/traviata-end-2-english-*`,
`shots/after/...`): each of the five directions now stands under the speech it belongs to and over the
next name. `refrain` and `cabaletta`, English tab: the heading of the number is gone, and on `refrain`
the opening direction stands before the name.

**What else it moved.** `tools/datadiff.mjs` over the 35 pieces: only traviata's built data differs
(and fidelio's by the trial of item 1). No other plate has a direction before a name in its second
passage, so no other page can move; the scan after items 1 and 2 (`scans/i12-*.txt`) is read below.

**Stylesheet**: nothing.

**The scan after items 1 and 2** (`scans/i12-1280.txt`, `-1024.txt`, `-390.txt` against `scans/orig-*`,
every tab of every piece): only fidelio `scene` (4 tabs) and traviata `refrain`, `cabaletta`, `end` (11
tabs) differ, at each of the three widths. Those are the plates whose readings I changed in the copy.

### 3. A pair's number on the name of the next speaker: DONE

**What was wrong.** Beside a passage, a row that carries the number of a pair (or a gloss) under it is
followed at once by the next speaker's name, set 10 px under the row. The number hangs into those 10 px:
number and name read as one mark. And a stanza's space was given to the row, under the name lifted over
it, so the name stood nearer the speech before than its own (don-giovanni 4).

**The page** (`site/js/kit/plate.js`):
- `setLens()`, at "a name keeps clear of a mark above it": on the tab showing, each row of the second
  passage that carries one end of a pair with a number, or a note, is marked `hung`. The stylesheet gives
  the name, the direction or the points of a gap that follows such a row at once the room the mark takes.
- the loop over `pairRows`: what stands over a row is gathered first (`over`: a direction before the
  name, the name, a direction after it), and a stanza's space goes to the first of them, not to the row.
- the same loop and `level()`: where a row is moved down to stand level with the line it answers, the
  room went into the row, between the name and the speech (fidelio `answer`: the second name stood 30 px
  over its speech and the first 21). It now goes over whatever stands first over the row (`top`: the
  points of a gap, as before, or a direction, or the name), so a name moves with its speech.

**Stylesheet** (new rules, none changed; after `.beside .beside-l+.stage-s`):
`.beside .stage-s,.beside .stage-d` (padding-top from `--lv`),
`.is-beside:not(.is-twin) .beside .pr.hung+.stage-s:not(.stanza)` and the same for `.stage-d`,
`.is-beside:not(.is-twin) .beside .pr.hung+.stage-gap`, `.beside .stage-s.stanza`,
`.beside .stage-d.stanza`, `.is-twin .beside .stage-s.stanza`, `.is-twin .beside .stage-d.stanza`.

**Seen** (before from `orig`, after from the copy; crops in `shots/3/`):
- fidelio `answer`, Versions, 1280 (`crop-answer-versions-1280-before.png`, `-after.png`): number 1 stood
  on the second name; it now stands about 8 px clear of it. The third name, which stood far over its
  speech, stands close over it with the stanza's space above. 390 (`crop-answer-versions-390-*`): the
  same; number and name touched, and now have about 8 px between them.
- don-giovanni `duet`, English, 390 (`crop-duet-english-390-before.png`, `-after.png`): numbers 5 and 6
  stood on the names under them, and the name after 5 stood nearer the speech before; both names now
  stand clear of the number and close over their own speech. 1280: `shots/after/don-giovanni/
  don-giovanni-duet-3-english-1280.png`.

### 4. A gap shown twice: DONE

**What was wrong.** In the first passage the build sets no line of three points before a row that begins
late (`cutHere()` in `rowsOf()`): the row opens with points of omission, and they are the sign. A row of
the second passage carried `gapBefore` all the same, and the page set the line of points for it.

**The page** (`site/js/kit/plate.js`, the loop over `pairRows`, at "lines left out are shown once"): the
line of points is set only before a row that does not itself open with points:
`const gapped = r.gapBefore && prevPair && !r.cutStart;`. The built data is unchanged (`gapBefore` stays:
`lens-rhyme.js`, `pieces/traviata.js` and `build/front.mjs` read it).

**Where it shows** (found by script over the built data: second passages with a row that has
`gapBefore` and opens with points): kierkegaard `weaning` (rows p:9.0, p:13.0, p:17.0), karamazov `cry`
(p:12.0) and `kiss` (p:53.0). Nowhere else.

**Seen.** kierkegaard `weaning`, every tab, 1280 and 390 (`shots/before/kierkegaard/`,
`shots/after/kierkegaard/`; `kierkegaard-weaning-0-refrain-1280.png`): the three lines of points are gone
from the second block; its four paragraphs begin level with the four of the first block, as they did, and
now part as those do (each after the first set in by a paragraph's indent). The plate is 71 px shorter at
1280 (988 to 917). karamazov `cry` and `kiss`, the tab that shows the second passage ("Earlier",
"Again"): the same, 32 and 17 px shorter at 1280.

**Not changed, and why.** The first passage also sets no line of points after a row that is cut short at
its end. In a second passage that case occurs once on the site, orpheus `terms` (row p:1.0 after row
p:0.3): I tried it (`shots/4/orpheus-terms-1-return-1280.png`, before over after) and took it back. There
a whole aria is left out between the two rows (the label says so), the points at the end of the row
before say only that the line goes on, and the line of three points is the one sign that lines are
missing. The brief names only a row that opens with points. If the lead wants the two passages under one
rule, it is one more condition in that line: `&& !prevPair.cutEnd`.

**What else it moved.** The plates that follow a changed plate on their page (kierkegaard `greater` and
`window`, orpheus `song`) differ in `pixdiff` over their whole picture by a hair: the plate above them
is shorter by a fraction of a pixel, so they are painted a fraction lower and their height rounds 1 px
the other way. Nothing in them moved: the scan by numbers (`scans/`) shows no change in those plates.

**Stylesheet**: nothing.

**More seen for item 3** (after the last change to it):
- phedre `names`, English, 390 (`shots/3/phedre/phedre-names-2-english-390.png`, before over after):
  numbers 1 and 2 stood on the second speaker's name (0.4 px, the artist measured); the name now stands
  about 15 px under them and close over its speech. The plate is no taller: the stanza's space that
  stood under the name stands over it.
- traviata `end`, English, 390 (`shots/3/crop-end-english-390-after-a.png`, `-b.png`): numbers 1, 3, 4
  and 5 stand clear of the name or the direction under them.
- **A direction before a name** (item 2 made these): after a row with a number the direction stood as
  far from its own speech as from the next name, and read as the next speaker's. A name that follows a
  direction at once now stands 1.7em under it (`.beside .stage-d+.stage-s`, new; before item 2 no name
  followed a direction in a second passage, so the rule touches nothing else).

### 5. Three keys of a plate, new: DONE

**`indent`**: rows set deeper in, as the edition sets them. `"indent": ["5.0-5.3"]` on the plate: a list
of rows and of runs of rows (`"5.0"`, `"5.0-5.3"`; `p:<row>` in the second passage). Both ends of a run
must be rows shown, in order. The build sets `indent: 1` on each row (`buildPlate()`, at "Three things a
reading may say"); the page gives the row the class `in` (`plate.js`, the two loops over the rows); the
stylesheet sets it in by twice the size of the type (`.row.in`, `.beside .pr.in`, new). `fit()` reckons
such a row with the room it stands in by (`inOf()` in `widest()`), so the size of the type allows for it.

**`stanza`**: `"stanza": { "10.4": true }` sets a stanza's space before row 10.4 where the kit sees no
stanza (it knows one by a block of the hosted text that shows more than one row); `false` takes away one
that the kit would set. `p:<row>` in the second passage, where the space goes over the speaker's name if
the row has one (item 3). The build refuses the key on the first row of a passage, on a `p:` row of a
plate set line under line, and (`true`) where a name, a direction or a sign of omission already stands
before the row. No new rule of the stylesheet: the row gets the class `stanza` the kit already sets.

**`place`**: `"place": "..."` gives the place line at the head of the plate in the reading's own words;
`""` leaves it out. A title between asterisks stands upright in the italic line (item 8). The build
passes it on (`place`), `plate.js` takes it before the label of the hosted part (`sub`, in "head").
`piece.js` is not mine: its `placeOf()` (line 106) still tells two passages under one heading apart, in
the list "what each caption stands on", by the label of the hosted part. See "For the lead".

**The checker** knows the three: it refuses a wrong form, a row that is not shown, a run out of order, a
first row, a `p:` row under a line-under-line plate, an asterisk without its fellow; and prints a line
of proof for each (`indent: 4 rows set deeper in, 5.0 to 5.3`; `stanza: a stanza's space between rows
10.3 and 10.4`; `place: "..."` or `place: none`). What stands between two rows (a name, a gap) only the
build knows, and it refuses there. The verdicts of the five readings I changed are clean.

**README**: "Stanzas", "Rows set deeper in", "The place of a passage".

**Tried in the copy's readings** (exact edits under "For the lead"):
- traviata `refrain`: `indent` for rows 5.0 to 5.3 and a `place`. Seen at 1280 and 390
  (`shots/after/traviata/traviata-refrain-0-refrain-1280.png`, `-390.png`): the four lines that come
  back stand in by 68 px at 1280 and about 40 at 390; no line turns at 390; nothing runs out.
  The spine of the Refrain tab keeps to the left edge and its ticks no longer reach the rows set in
  (`lens-figure.js`, not mine): see "For the lead".
- traviata `cabaletta`: a stanza's space before row 10.4 and a `place`
  (`traviata-cabaletta-1-rhyme-1280.png`): the two groups of four are parted by half a line's room, and
  the joins of the rhymes cross the space as before.
- fidelio `scene`: a stanza's space before row 17.0.
- baudelaire `evening`, `warning`, `budget`: `"place": ""` (`shots/5/crop-warning-head-390-before.png`,
  `-after.png`): the journal's name no longer stands twice, and the head is a line shorter on a phone.
- carmen 5 needs no key now: the labels of its hosted parts no longer end on the words of the heading
  (the place stops at the scene). I set nothing there.
- The two forms that no reading uses, `"stanza": false` and rows of a second passage set in (a run is
  written `"p:270.7-270.10"`, with one `p:`): tried at the end on a copy of the built data and seen;
  the build and the checker read the `p:` form (run once, then undone). See "The last sweep".

### 6. The lighting of a caption's words: NOT DONE

Not begun, and passed over on purpose after item 5: its five parts hang on one function (`find()` and
the loop over `.cap b, .cap i` in `plate.js`), each must be proved with the pointer on a word (the
picture tool does not point), and an item half made is to be undone. With the hour I had left I took
the items after it that I could finish and prove. What I read while passing: a phrase of several words
already lights only where it stands whole in one row (`find()`); the false place in tristan `names`,
Grammar, is a title of one word that is also the hero's name, so "leave an italic word alone where the
tab marks none of its places" (the artist's first way) is the rule to try there.

### 7. The label over a passage leaves its last word alone: ALREADY MENDED, nothing changed

The eighth mending gave `.beside-l` `text-wrap:balance` (its record, 3e). The three reports are older
than that. Seen now, in the copy: traviata `end`, the label over the Italian, two even lines at 1280
(`shots/7/crop-end-english-1280-before.png`) and three even lines at 360 and 320
(`shots/7/crop-end-label-360.png`, `-320.png`: four, four and three words); fidelio `answer` at 390, both
labels in two even lines (`shots/after/fidelio/fidelio-answer-0-versions-390.png`); karamazov `cry`,
second passage at 390, one line (`shots/after/karamazov/karamazov-cry-1-earlier-390.png`). A probe
(`tools/probes/labels.js`) lists any label, legend or place line whose last line holds one word; its
scan over every piece was stopped in the last sweep, to make room for the mend of item 10: not done.

### 8. A title in a place line stands upright: DONE (it needs a `place` in the reading)

The place line is italic. `plate.js` (in "head") now sets what stands between two asterisks in it
upright (`<i>`, and `.plate-ttl span i{font-style:normal}`, new), whether the line comes from a `place`
of the reading or from the label of the hosted part. The kit cannot find a title by itself: of the 99
place lines on the site 30 hold the title of their work, and in six of those the same word is also a
person's name in the line (the name of a hero in four plates of two tragedies, of a heroine and a hero
in two opera plates). So the title is marked where the line is written. The labels of the hosted
parts are read by other pages too and are not mine; in the copy I gave tristan's three plates and
rilke's third a `place` with the title between asterisks.
Seen: `shots/8/crop-work-head-1280-before.png`, `-after.png`; `crop-names-head-390-after.png`: the
opera's title stands upright between the italic of the author and of the act. For rilke's third passage
the line is the poem's title alone, and it stands upright; the house rule may want quotation marks
there instead, which `place` can also give. Exact edits under "For the lead".

### 9. A turned line of a version: NOT DONE, but for the checker, which already takes the `turn`

- The checker: a `turn` on a row of a second passage is already taken (the comment at the check says
  so). Tried with phedre `slip` as the live reading now has it, `"p:91.1": 2, "p:91.4": 3`: both the
  original checker and the copy's print "turn: row p:91.1 turns after ..." and report no problem.
  Nothing to change.
- The turned line itself (two parts a row apart on a tab that does not mark the row; turning at a stop
  in a version set as a block or line under line): not begun. The eighth mender's reason stands ("A
  rule that works on every plate"), and I had no time to find and prove such a rule.

### 10. A compare tab in two columns: DONE

**What was wrong.** On a compare tab, side by side, a version in verse is set at the pitch of the lines
it answers, so that `level()` can set the rows that hold the two ends of a pair level. Where it can set
none (the pairs cross, or a row would have to move far) the version kept that pitch all the same: loose
rows that end far below the original (don-giovanni 10), or two columns at one pitch a third of a line
apart (phedre 2.2).

**The page** (`plate.js`, `arrange()`): the class `unlevel` is taken off, `level()` measures at one
pitch as before, and where it sets no pair level the plate is marked `unlevel` and measured again.
One case is kept apart, as the last sweep showed it must be (below): a short second passage that
stands at the foot of its column beside the last lines of the first (`pair-low`, found at one pitch as
ever) keeps the pitch if a row of it then stands within 10 px of the line it answers; if none does, it
too is marked `unlevel`.
**Stylesheet**: one rule changed, the only one: `.two-col.lens-compare:not(.is-twin):not(.pair-idle)
.beside .pr.k-v` is now `...:not(.pair-idle):not(.unlevel) .beside .pr.k-v` (and its comment). The
version then has the pitch it has below 940 px.

**Seen** (1280; before `shots/before/<piece>/`, after `shots/after/<piece>/`):
- don-giovanni `count`, English: the ten English rows took 75 px each and ended 154 px under the
  Italian; they take about 46 px each, every number has its room, and the block ends above the
  Italian's last line. The plate is 153 px shorter (1,227 to 1,074).
- phedre `slip`, English: eight French rows and ten English stood at one pitch, each English row 21 px
  under a French one. The English now runs at its own pitch and ends just above the French.
- phedre `names`, English: the same; 87 px shorter (851 to 764).
- Where pairs are set level nothing moves: don-giovanni `duet`, English
  (`don-giovanni-duet-3-english-1280.png`), rows level pair by pair as before.
**Found by the last sweep and mended (00:50 to 01:05).** As first written the item took the pitch from
every second passage that `level()` had not levelled. Three tabs at 1280 stand at the foot of their
column (`pair-low`), where the pitch itself is what sets the rows level:
- tempest `epilogue`, Pardon: the two rows of the second passage stood level with the two last lines
  (pairs 1 and 3) and no longer did, 47 and 17 px off. My fault, seen in `moved.txt`. Now the picture is
  the same to the byte as from `orig`.
- fidelio `scene`, English: the last English row stands level with the last German row; the pitch is
  kept, as before (`shots/after/fidelio/fidelio-scene-3-english-1280.png`, looked at).
- peer-gynt `two-sayings`, Return: names and lines of points stand between the rows and no row was
  level with its line at that pitch (seen in the picture from `orig`); it goes to its own pitch and
  is 103 px shorter (1,138 to 1,035), the block still at the foot beside the lines it answers.
The mend was made in two steps, each set aside and photographed: `snaps/final2` (pitch kept on all
three; the 25 pieces that have a second passage taken again at 1280) and `snaps/final3`, the kit as
handed in (tempest, peer-gynt, fidelio taken a third time). Logs: `tools/tmp/fix10-diff.txt`,
`fix10b-diff.txt`. The approved plate was checked after each step: 8 of 8 at 00:56:27, 01:04:35 and 01:11:40.
**Left as it is.** The first line of the version still stands about 10 px lower than the first line of
the original (the room for marks is half over the line, half under it; it was 21 px). The artist of
Phèdre asks for the room under the line; in a row that turns that would put a mark of its first part on
its second, so I did not try it.

### 11. Line under line at 1280, a line and its English as far apart as that English and the next line: NOT DONE

Not begun: no time for the trial on 22 plates that the item asks for. Nothing changed.

## The last sweep

**What was photographed.** Before: every piece and the front page from `orig`, 1280 and 390
(`shots/before/`). After: every piece and the front page from the copy set aside at 00:11
(`snaps/final`), 1280, 390 and 320 (`shots/after/`), done 00:46. Then item 10 was mended (above); the
25 pieces that have a second passage were taken again at 1280 from `snaps/final2`, and tempest,
peer-gynt and fidelio a third time from `snaps/final3`, the kit as handed in; those three pieces'
1280 pictures in `shots/after/` are the third ones. The ten pieces without a second passage cannot be
touched by the mend (`arrange()` leaves at its first line) and narrow plates take the same path as
before, so their pictures stand. The second set, compared with the first to the byte and by `pixdiff`,
differed only on the three tabs of item 10, on plates under them, and by noise (logs in `tools/tmp/`).
When the bound was set to 10 px (01:10) `snaps/final3` was made again and the three pieces taken a
fourth time: 33 of 35 pictures the same to the byte as those in `shots/after/`; the other two, both
Word tabs, differ by 2 pixels and by less than `pixdiff`'s threshold, and I left the earlier ones.
The second, third and fourth sets were removed after the comparison; `shots/after/` is what to read.
At 390 and 320 the mend cannot change a picture by the code's path (a plate under 940 px is not in
two columns). I took tempest, peer-gynt and fidelio again at both widths from the kit as handed in
(01:16): 70 of 70 the same to the byte as those in `shots/after/`. The other pieces were not taken
again at those widths, nor the 22 other pieces with a second passage at 1280 after the third step
(they have no second passage at the foot of its column, the only path the third step changed).

**Complaints of the picture tool** (`sweep.txt`): none before (36 of 36), none after (36 of 36 at
three widths; 25 of 25 and 3 of 3 for the pictures taken again).

**The approved plate**: the same to the byte, 8 of 8, at 00:12:18, 00:56:27, 01:04:35 and 01:11:40 (the kit as
handed in). All 24 pictures of the Tempest at 1280 and 390 are the same to the byte as from `orig`.
The front page: the same to the byte, 19 of 19.

**What moved** (`moved.txt`: before against after by `pixdiff`, crops in `shots/moved/`; by numbers:
`scans/orig-<w>.txt` against `scans/final-<w>.txt`, and `scans/final3-1280-three.txt` for the three
pieces). Nothing moved in adams, agamemnon, antigone, augustine, blake, castle, the three of Dante,
dutchman, family-reunion, faust, gotterdammerung, hamlet, henry-iv-2, horace, magic-flute, moby-dick,
orpheus, othello, pascal, rimbaud, tempest, volpone. Moved, and why (each looked at):
- baudelaire, all three plates: the place line is gone (item 5); at 390 the plates are 23 or 24 px
  shorter, at 1280 only the head differs.
- tristan (three plates), rilke `panther`: the title upright in the place line (item 8); nothing else.
- traviata, all three plates: items 1, 2, 3, 5 and the place lines.
- fidelio `scene`: headings in the line and the stanza's space (items 1, 5); `answer`: names and
  directions clear of the numbers, the name moving with its row (items 2, 3).
- don-giovanni `duet`, every tab: a direction before a name, names clear of marks (items 2, 3);
  `count`, English at 1280: item 10 (154 px shorter).
- phedre `names` (three tabs) and `slip`, English at 1280: items 3 and 10.
- carmen `la-bas`, English: the line of points and the name after a row with a number stand clear of
  it (item 3); the plate's height is the same at 1280, 5 px more at 390.
- karamazov `cry` and `kiss`, tab 1: a gap shown once (item 4); 32 and 17 px shorter at 1280, 23 at 390.
- kierkegaard `weaning`, tabs 0, 1, 3: the same (item 4), 71 px shorter at 1280, 95 at 390.
- peer-gynt `two-sayings`: Word, names clear of a gloss (item 3, 5 px); Return, item 10 (103 px
  shorter at 1280). `answer`, tab 3: two names clear of the underline above (item 3, 10 px).

**Painted differently, nothing moved by the numbers.** A plate that stands under a changed plate on
its page is painted a fraction differently (the letters' edges; at times the picture is 1 px taller):
carmen `cartes`, don-giovanni `close` (at 1280 the top 313 px, and the tab under the pointer is red in
the picture from `orig`), fidelio `name`, kierkegaard `greater` and `window`, peer-gynt `onion` and
`answer` tabs 0 to 2, phedre `sight` and `slip` tabs 0 to 2. For these the numbers of the scan are the
same but for the plate's place on the page. Carmen taken twice from `orig` is the same to the byte both
times, so it is the changed plate above that does it. Seven pictures differ by less than `pixdiff`'s
threshold (one each at 1280 in augustine, dante-paradiso, hamlet, volpone; three of fidelio `name` at
390).

**The two forms of the new keys that no reading uses** (trial on a copy of the built data,
`snaps/trial`, pictures `shots/5/trial/`): `"stanza": false` on traviata `end` row 2.0 takes the 17 px
away and moves nothing else in the passage (the caption then goes under both passages, by the kit's
rule of 200 px); rows of a second passage set in (`p:270.7` to `p:270.10` of traviata `refrain`) stand
2em in at 1280 and 390. The checker takes `"indent": ["p:270.7-270.10"]` on a scratch copy of the
reading (0 problems), and the build, run once on the copy with that key, sets the four rows in (the reading was then put back and the data built again: the same bytes as in `snaps/final3`).

**Not finished.** The scans for a label's last word and for names close under a mark at 390
(`tools/probes/labels.js`, `clear.js`) were stopped to make room for the mend of item 10; items 3 and
7 rest on the pictures named under them. No scan at 1024 after the last change.

**Mistakes of mine in the sweep.** I changed `tools/shoot-set.sh` while it ran, and the shell took
twelve pieces twice into wrong folders; I removed those folders (in my copy) and lost six minutes.
`crop.mjs` and `pixdiff.mjs`, which use the browser only to read pictures, ran a few times beside a
shoot or a scan. Two outputs of my tools showed words of a work (two proof lines of the checker caught
by a search, the start of a direction in `rows.mjs`); the tools were changed, nothing was written.

## Stylesheet: every selector added or changed (`site/css/atlas.css`)

Nothing moved, reordered or reformatted; `diff` against `orig` shows two lines taken out (the rule
below and its comment) and only additions otherwise.
- Changed (item 10): `.two-col.lens-compare:not(.is-twin):not(.pair-idle) .beside .pr.k-v` became
  `.two-col.lens-compare:not(.is-twin):not(.pair-idle):not(.unlevel) .beside .pr.k-v`.
- Added, item 1 (after `.stage-g`): `.in-s,.in-d`; `.wq`; `.plate.has-lit .wq:not(.lit)`; `.in-s`;
  `.in-d`; `.in-d.long`; `.tx.k-v.has-in`; `.tx.k-v.has-in.plain`.
- Added, items 2 and 3 (after `.beside .beside-l+.stage-s`): `.beside .stage-s,.beside .stage-d`;
  `.beside .stage-d+.stage-s`; `.is-beside:not(.is-twin) .beside .pr.hung+.stage-s:not(.stanza)` with
  the same for `.stage-d`; `.is-beside:not(.is-twin) .beside .pr.hung+.stage-gap`;
  `.beside .stage-s.stanza`; `.beside .stage-d.stanza`; `.is-twin .beside .stage-s.stanza`;
  `.is-twin .beside .stage-d.stanza`.
- Added, item 5: `.row.in` (after `.row.stanza`); `.beside .pr.in` (after `.beside .pr.stanza`).
- Added, item 8: `.plate-ttl span i` (after `.plate-ttl span`).
`.wq` is a word of a name or direction left in the line: it is to a lens what a word over the line is.
The lenses' mender shares this file; none of these selectors is a lens's.

## For the lead

**What to look at, because I chose.**
1. Item 1, traviata `end` (`shots/after/traviata/traviata-end-*`, 1280, 390, 320): names in small
   capitals and directions in small italic inside the line. A name at the head of a line is reckoned in
   the measure (the brief says "without them"): it cannot leave its line. A direction after the verse is
   not reckoned, and on a phone it turns under its line, set in. The edition's brackets stay.
2. Item 1, fidelio `scene` (`fidelio-scene-0-beat-1280.png`): the two headings are small and italic,
   each still a row of the passage with a row's full height, so that no row, gloss or remark moves.
   They could stand closer to the lines they head; that would move the plate, and I left it.
3. Item 1, traviata `cabaletta` row 10.7: shown whole with the old `stage` (no `inline`), because the
   line ends on a rhyme and the letter stands where the direction would.
4. Items 2 and 3, traviata `end`, English, 390 (`shots/3/crop-end-english-390-before-b.png`,
   `-after-b.png`): a direction now stands under its own speech and before the next name; after a row
   with a number it has to stand under the number, so I parted the next name from it by 1.7em. If the
   label of that passage ("each stage direction goes with the speech above it") is no longer wanted,
   that is the reading's.
5. Item 3: where the kit sets a row level with the line it answers, the name over the row now moves
   with it. This moves the names of every second passage that is set level at 1280 (fidelio `answer`,
   don-giovanni `duet`, traviata `end`, carmen and others: `moved.txt`).
6. Item 4, orpheus `terms`: left with its line of three points (the record of item 4 says why).
7. Item 5: an indent of twice the type's size. On traviata `refrain`, Refrain tab, the spine at the
   left keeps its place and its ticks do not reach the four rows set in
   (`traviata-refrain-0-refrain-1280.png`). The spine is `lens-figure.js`, not mine: its ticks could
   run to the first letter of a row that is set in.
8. Item 8: a title stands upright only where the line marks it. The exact `place` for tristan's three
   plates and rilke's third is below; 26 more place lines hold a title (carmen 3, don-giovanni 3, faust
   3, fidelio 3, gotterdammerung 3, orpheus 2, phedre 3, traviata 3, and the lines I did not find by
   the work's own title). The lead may prefer one way for all: asterisks in the labels of the hosted
   parts, which `plate.js` now honors too, if the other pages that print those labels drop or honor them.
9. Item 10: every compare tab in two columns where no pair stands level is shorter and set at the
   version's own pitch: don-giovanni `count`, phedre `slip` and `names`, peer-gynt `two-sayings`
   (Return). A second passage at the foot of its column keeps the pitch where a row of it stands
   within 10 px of its line. That number is mine: read off the pictures, the two plates that keep it
   are about 1 and about 5 px off (tempest `epilogue`, fidelio `scene`), and the one that loses it is
   66 px and more off. I did not measure them by script. I first set 6 px, saw that fidelio stood
   near that edge, and set 10; the three pieces were taken again and the pictures are the same.
10. The first form of item 10 put tempest `epilogue` out and I found it only in the last sweep
   (item 10 says how). The plate is the same to the byte as from `orig` now; please look at it once.

**Not mine, and wanted by what I did.**
- `site/js/piece.js`, `placeOf()` (line 106), the list "what each caption stands on": it still takes
  the place from the hosted part's label. One line at the head of the function would follow `place`:
  old `  const placeOf = (plate) => {`
  new `  const placeOf = (plate) => {` and under it
  `    if (plate.place !== undefined) return String(plate.place).replace(/\*/g, '');`
  It matters only where two plates of a piece share a heading.
- `lens-figure.js`: the spine's ticks beside rows set in (7 above).

**The exact edits the live readings need** (each is a key of the plate named; put it after the plate's
`"id"` line; `remake/kit9a/edits.json` has the same as data, made by script from the copy's readings):
- traviata `end`: `"stage": { "1.0": { "name": 1, "dir": [3, 4], "inline": true }, "1.1": { "name": 1,
  "inline": true }, "1.2": { "name": 1, "inline": true }, "2.1": { "dir": [5, 5], "inline": true },
  "2.2": { "dir": [3, 5], "inline": true }, "2.3": { "name": 1, "inline": true }, "2.4": { "name": 1,
  "inline": true }, "2.5": { "name": 1, "inline": true }, "2.6": { "name": 1, "dir": [3, 7], "inline":
  true }, "2.7": { "name": 1, "inline": true } }`
  and `"place": "Piave, *La Traviata*, Act 3: the last lines"`.
- traviata `cabaletta`: in `"rows"`, old `"10.7[0-5]"`, new `"10.7"` (occurs once);
  `"stage": { "10.7": { "dir": [6, 8] } }`; `"stanza": { "10.4": true }`;
  `"place": "Piave, *La Traviata*, Act 1: Violetta’s scene alone"`.
- traviata `refrain`: `"indent": ["5.0-5.3"]`;
  `"place": "Piave, *La Traviata*, Act 1: the duet, and Violetta’s scene alone"`.
  (The words of the two `place` lines of Act 1 are mine, cut from the hosted part's label; the poet or
  the lead may word them better.)
- fidelio `scene`: `"stage": { "0.0": { "dir": [0, 0], "inline": true }, "12.0": { "dir": [0, 0],
  "inline": true } }`; `"stanza": { "17.0": true }`.
- baudelaire `evening`, `warning`, `budget`: `"place": ""`.
- tristan `work`: `"place": "Wagner, *Tristan und Isolde*, Act 2, Scene 1: Isolde’s answer to Brangäne"`;
  `names`: `"place": "Wagner, *Tristan und Isolde*, Act 2, Scene 2: the last fourteen lines of the love
  duet"`; `end`: `"place": "Wagner, *Tristan und Isolde*, Act 3, Scene 3: Isolde’s last song"`.
- rilke `panther`: `"place": "*Der Panther*"` (or with quotation marks and no asterisks, if a poem's
  title is to be quoted there).
- carmen: nothing (item 5). phedre `slip`: its `turn` on two `p:` rows is already in the live reading
  and the checker takes it.
After the edits each of the five readings passes the copy's checker with no problem (run in the copy).
