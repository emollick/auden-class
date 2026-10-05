# La Traviata: the artist's record

Begun 2026-10-03 11:36 UTC. Working record, not printed. Words of the
libretto are named by row and word number; none is written out here.

Read before starting: BRIEF.md, ARTIST.md, the kit's README, all seven
sections of KIT-CHANGES.md (the last paragraph is the mending of 11:06
UTC), adams.js, and this piece's reading.json, notes.md and exam.md.

The reading, notes.md and exam.md are not touched by me. What I would
set in the reading is in section 5, "Proposed for the reading". The kit
and the build are not touched either, and nothing in my script works
round a fault of theirs: the faults are in section 4.

## 1. The first look (built 11:37 UTC, photographed 11:38 to 11:50)

`node build/pieces.mjs traviata`, then each plate by itself with
`node build/tools/shoot.mjs traviata --plate <id> --out
remake/works/traviata/shots`. Each run ended "nothing reported; now
look at the pictures". Every picture was opened, the phone ones in
enlarged crops (kept in `look/`, which is working matter).

Eleven tabs on three plates, at 1280 and 390. What a stranger would
stumble on is listed in section 4, worst first. What is right as it
stands:

- Plate `refrain`: the spine of the six returning rows, the second
  spine at the right for the two nouns, the two strokes from the word
  for love to the line that hangs from it, and the carved words ruled
  alone, all stand clear of the words at both widths. No line turns at
  390. The remarks of the Measure tab and the notes of the Words tab
  are in the order of the passage.
- Plate `cabaletta`: no line turns at 390 (the two elevens fit because
  the plate is set smaller for its Rhyme tab; KIT-CHANGES says that is
  on purpose). The three brackets and two arcs of the Rhyme tab are
  clear of the words.
- Plate `end`: no line turns at 390; the four chains of the Shared tab
  are drawn whole at both widths and the arc of the last row passes
  under the bracketed word.

The Scene tab of plate `cabaletta` was then the kit's plain table of
four rows and five columns. At 1280 it stood well; at 390 it ran out of
the plate at the right (the examiner had noted it). The drawing takes
its place at every width, so the table is seen only if the script
fails, and KIT-CHANGES says that table is left plain on purpose.

## 2. What I drew: plate `cabaletta`, tab Scene

File: `site/js/pieces/traviata.js` (one lens, `cabaletta:shape`). No
stylesheet of the piece's own was needed.

**What the reader is meant to see at a glance.** The lens's `what` is
the scene alone, part by part, and its caption names four parts and
four counts of lines: eight, twenty-four, eight, eight. So: four
things, in the order they are sung, each as large as its count, and the
slow song three times the size of each of the others.

**The form.** The parts stand down the page in the order they are sung.
Each line of verse is one short stroke, and the strokes of a part are
stacked at one pitch, so a part is as tall as it has lines (heights in
proportion to the counts, from zero). The count stands in figures at
the left of its stack. At the right of the stack stand the part's name
in small capitals, its measure in italic (on the same line where there
is room, under the name on a phone), its first words in the display
face, and what she says in it. The lines that this plate shows under
its other tabs are red: the last two of the second recitative and the
eight of the fast song. The key says so in two entries: a line of
verse, and the ten lines of this passage.

Why this and not bars: a bar for each part along one line would show
the four counts, but the facts hold a sentence for each part, and four
sentences have no room beside four bars at 264 px. Read downward, the
parts are in the order of the libretto's own page, each line of verse
is a thing that can be counted, and the words stand beside what they
are about. It is the form the stacked lines of the Antigone piece's
song have, so the two belong to one book.

**Where every word and number comes from.** All from the lens's `facts`
when the page runs: `part`, `lines`, `measure`, `first words`, `what
she says`, `read`. Nothing of the opera is typed in the script. If a
part has no name or no whole count of lines the script throws, and the
kit's table stands in (tried: `look/traviata-cabaletta-3-try-broken-1280.png`).
A key the script does not know is printed under its part as a small
heading and its words, so a fact the lead adds is not lost.

**The red lines** need no new fact. The script looks among the rows of
the plate for one that begins with a part's `first words`; that row is
the part's first line, the rows after it are the next lines, and the
rows before it are the last lines of the part before. Here row 10.0
begins the fourth part, so rows 9.0 and 9.1 are lines 7 and 8 of the
third. If the lead shows other rows, the red lines follow; if no row
begins a part, nothing is red and the key drops its second entry.
(The same count, made over the hosted text, is in section 3.)

**The link.** A part's name is a link to that part in the libretto
printed here (`read`: the English one), under a hairline that reddens
under the pointer, as the names in the Dutchman and Fidelio drawings
do. The whole label answers a pointer or a finger, not only its
letters (tried: with the pointer on a corner of the label, off the
letters, the hairline is red and the pointer is a hand).

**Time.** The parts come in one after another, 0.42 seconds apart, and
the strokes of a part run down it. The last stroke begins 1.53 seconds
after the tab is opened and takes the kit's 1.1 seconds to draw: 2.63
seconds in all, inside the three the kit's README allows. Measured
with motion on (`look.mjs --motion`): at 0.7 seconds 52 lines and 20
words are still to come; at 3.0 seconds nothing is, at 1280 or at 390.
At 2.7 seconds one run found nothing undrawn and a later one, with the
machine more heavily loaded, seven strokes of the last part still
closing. With reduced motion everything is simply there.

**Widths.** Looked at in windows of 1280, 390, 360 and 320 (the drawing
is 607, 334, 304 and 264 px wide). At 520 px and more the strokes are
48 px long and 6 px apart, the measure stands beside the name and the
sentences keep to 450 px; below that the strokes are 32 px and 5 px
apart and the measure goes under the name. Nothing overlaps or leaves
the plate at any of the four.

**What it does not do.** No pointer is needed for anything: no line
that speaks, nothing folded away. In this state a stroke's length says
nothing (every stroke is one length, and the key calls it a line of
verse and no more). Section 5 proposes the one fact that would let the
length speak.

## 3. Counts and trials: the commands and what they printed

Four small tools of mine stand beside this file. None is part of the
site, and none types a word or a number of the opera.

**`count-scene.mjs`: where each part stands in the hosted Italian.**
`node remake/works/traviata/count-scene.mjs` reads the facts' `first
words` and `lines` and the hosted cut `site/data/texts/o-traviata/act-1.json`,
and prints (first run 11:48 UTC; run again before the last pictures,
section 7, with the same result):

| part | lines | rows of the cut | blocks (rows in each) | shown on `refrain` | shown on `cabaletta` |
| --- | --- | --- | --- | --- | --- |
| 1 Recitative | 8 | 3.0 to 3.7 | 3 (8) | lines 1, 2 | none |
| 2 Slow song | 24 | 4.0 to 7.3 | 4 (8), 5 (4), 6 (8), 7 (4) | lines 8 to 12 | none |
| 3 Recitative | 8 | 8.0 to 9.1 | 8 (6), 9 (2) | none | lines 7, 8 |
| 4 Fast song | 8 | 10.0 to 10.7 | 10 (8) | none | lines 1 to 8 |

So the four counts of the facts (8, 24, 8, 8) are the counts of rows in
the cut, each part begins on the row that begins with its first words,
and the ten red lines of the drawing are the ten rows of the plate.

It looks besides for a block that comes back from an earlier block of
the act (the same number of rows, and all its rows but one the same
words). It finds two, both in the slow song, and prints:

```
block 5, lines 9 to 12 of the part, comes back from block 1 of the act: rows 1 to 3 word for word, row 0 not
block 7, lines 21 to 24 of the part, comes back from block 1 of the act: rows 1 to 3 word for word, row 0 not
so its stanzas, each closed by the lines that come back: [[8,4],[8,4]]
```

Block 1 is Alfredo's four lines (rows 1.0 to 1.3 of plate `refrain`).
That is the count behind the second proposal of section 5. No other
part has a block that comes back. (The cut also parts the second
recitative into six rows and two; that is the cut's doing, nothing
comes back there, and the script makes no stanzas of it.)

**`trial.mjs`: what a proposal would look like.** It changes the
piece's built data only, never the reading, and reads every value it
sets from the reading or from the poet's notes. Its header lists the
trials. Two ways to use it: `look.mjs --try ...` patches the data on its
way to the browser and changes no file (so nobody else's picture is
disturbed); `node remake/works/traviata/trial.mjs syllables stanzas`
writes the built copy for the common picture tool, and `node
build/pieces.mjs traviata` undoes it; with `--dry` it prints and writes
nothing. For `syllables stanzas quatrains --dry` it prints:

```
part 1 (Recitative): "syllables": [7,7,11,11,11,11,7,11]
part 2 (Slow song): "syllables": 7
part 3 (Recitative): "syllables": [11,7,7,7,7,7,11,11]
part 4 (Fast song): "syllables": 8
part 2 (Slow song): "stanzas": [[8,4],[8,4]]
part 4 (Fast song): "stanzas": [4,4]
```

Where each comes from: the two lists are read from the `counted` notes
of parts 1 and 3 in the reading (which give a count for each line); 7
and 8 from the `counted` notes of parts 2 and 4 (which name the last
stressed syllable, the sixth and the seventh; the Italian count is that
number and one more); the stanzas of the slow song from
`count-scene.mjs`, above; the two fours of the fast song from the words
"printed as two quatrains" in the Rhyme caption of the same plate.
`stanzas-plain` sets `[12, 12]` instead, from the words "in two stanzas
of twelve" in part 2's `measure`.

**`look.mjs`: my looking-glass for one tab.** It serves `site/` as the
common picture tool does and photographs one tab of one plate at any
widths, with motion on if asked, with the pointer on a label if asked,
and with a trial patched in. It prints the drawing's size, the size of
the verse, the height of the plate and whatever
overlaps, leaves the plate or is not yet drawn in; with `--pairs`, on a
tab of pairs, how much lower the second passage's end of each pair
begins than the first's. Its pictures of the
page as it is go to `look/` (working matter); its pictures of trials go
to `shots/trial/`. The pictures in `shots/` itself are all from the
common tool, `build/tools/shoot.mjs`.

**`turns.mjs`: which lines turn on a phone.** One page load for each
width, every tab opened. `node remake/works/traviata/turns.mjs` prints
(about 12:38 UTC, and again at 12:48, section 7): at 390
no line turns on any tab; at 360 row 2.6 of plate
`end` turns; at 320 rows 1.0 and 2.6 of plate `end` and row 9.0 of
plate `cabaletta`. The verse stands at 28.8 px on plate `refrain` at
390, at 16.5 px on `cabaletta` and at 17.3 px on `end` (at 1280: 34,
26.3 and 28.6 px). The tabs of each plate keep to one row at 390 and
360; at 320 the four of plate `refrain` take two. The turns were then
looked at in pictures (`look/narrow/`): row 9.0 turns after its word 3,
at the question mark, and rows 1.0 and 2.6 turn before their stage
direction. Each is the right place, so I propose no `turn`. Run once
more at 13:04 UTC with `--fractional` (letters placed by fractions of a
pixel, as a phone places them: the flag the common picture tool gained
at 12:45): the same rows turn at the same widths and no others, with
the verse a few tenths of a pixel smaller on two plates (28.5 and 17.1
px at 390).

## 4. Faults, worst first

Mine: none left that I know of. Everything below is on the three
plates of text or on the page, where I may change nothing; for each I
say whose it is. Pictures are in `shots/` unless a folder is named.
Nothing here is in KIT-CHANGES.md's lists of what is left on purpose.

### The kit's and the build's

**K1. Plate `end`, every tab, every width: speakers' names and stage
directions stand in the lines of verse, in the type of the verse.**
Words: the names are word 0 of rows 1.0, 1.1, 1.2, 2.3, 2.4, 2.5, 2.6
and 2.7; the directions are words 3 to 4 of row 1.0, word 5 of row 2.1,
words 3 to 5 of row 2.2 and words 3 to 7 of row 2.6. Pictures:
`traviata-end-0-words-1280.png`, `traviata-end-1-shared-1280.png`,
`traviata-end-2-english-1280.png` and the three at 390. The reading
says so in its label and tells the lead in `open` (the entry that
begins "Plate 3 shows whole rows", which adds that the artist may want
to set them apart). The build lifts a name out of a row only where a
libretto prints it in capitals at the head of a speech; here the names
are in ordinary case and stand at the head of pieces of one line. What
follows from it on the page:

- A stranger reads the first row as five words of verse. On the Shared
  tab, whose point is that pieces of verse make one line, the pieces
  are the smaller part of what is printed in each row.
- The verse is set small, because the longest "line" is two words of
  verse between a name and a direction of five words (row 2.6): 28.6 px
  at 1280 and 17.3 px at 390, where plate `refrain` has 34 and 28.8.
- At 360 row 2.6 turns before its direction, and at 320 row 1.0 too.
  The direction then lies between two pieces of one line, and the
  Shared tab leaves out the stroke that joins them: the eighth line at
  360, the first and the eighth at 320 (`look/narrow/e1-360-b.png`,
  `look/narrow/e1-320-top.png`, `look/narrow/e1-320-b.png`). That the
  kit leaves a stroke out where it has no clear way is on purpose, and
  the color still tells the pieces; what is wrong is what lies in the
  way.
- On the English tab at 1280 the two ends of a pair do not stand
  level. The English sets its names and directions between its rows and
  the Italian has them inside its rows, so the English column runs
  longer: the English end of pairs 1 to 6 begins 23, 32, 83, 170, 187
  and 313 px lower than the Italian (`look.mjs --plate end --lens 2
  --widths 1280 --pairs`; `traviata-end-2-english-1280.png`). The kit
  levels the pairs of such a tab only where no row has to be moved
  farther than 2.4 times the size of the verse, so here it levels none.
- On plate `cabaletta` the reading had to cut row 10.7 after word 5 to
  keep a direction (words 6 to 8) out of the measure; the page then
  prints points of omission after the last line of the song, as if
  verse were left out (see K4).

I could not set them apart myself inside the rules: a stylesheet cannot
address one word of a row (the words carry no number on the page, and
the tabs wrap them differently), the reading has no key that says which
words they are, and doing it in my script would be working round the
build. Two trials, for the lead to judge a mend by (pictures in
`shots/trial/`, made by `look.mjs`, no file changed):

- `--try names`: the names set over their rows and the directions
  after them, as the build does for names in capitals (the built data
  can already say it: a row's `first` and `last`, and an aside before
  or after). `traviata-end-1-try-names-1280.png`, `-390.png`. The words
  keep their numbers and the marks of the Shared and English tabs land.
  It gains one thing: on the English tab the two versions then name
  their speakers alike and stand nearly level (the pairs within 5, 52,
  18, 9, 11 and 81 px; `traviata-end-2-try-names-1280.png`). It loses
  three. The plate grows the more of the two: on the Shared tab by 107
  px at 1280 and by 497 px at 390, with the verse at 34 px at both
  widths (the other trial: 100 and 216 px). On the Shared tab each
  stroke from piece to piece is broken where a name or a direction now
  stands between the rows. And on the Words tab four of the seventeen
  glosses go: the reading glosses each direction by itself (row 1.0
  words 3 to 4, row 2.1 word 5, row 2.2 words 3 to 5, row 2.6 words 3
  to 7) and twice glosses a name together with its speech (row 1.1
  words 0 to 1, row 2.3 words 0 to 3), so a direction lifted out of
  its row has no gloss under it and those two glosses still begin with
  the name's sense under the speech alone
  (`traviata-end-0-try-names-1280.png`). Not the mend I would choose.
- `--try inline`: the same words left where they stand and set in the
  type the page gives a speaker's name (small capitals) and a stage
  direction (small italic). `traviata-end-1-try-inline-1280.png`. The
  verse comes up to the size of the first plate (34 px at 1280 and 28
  px at 390, measured), the pieces of each
  divided line are plainly the verse, and no mark moves: the words
  stay words of their rows, so all seventeen glosses keep their places.
  (The pairs of the English tab stay as far apart as they are; their
  numbers and colors still tell them.) This is the
  one I would choose. It is a mock: it only restyles the words after
  the page is made, so at 390 (`-390.png`) the direction of row 2.6
  runs out of the plate, which a real mend would have to fit or turn.

What a mend needs is one thing: a way for a reading to say which words
of a row are a speaker's name and which a stage direction (the poet's
notes already list them by row and word), and for the plate to set
them so. Row 10.7 could then be shown whole, with no points of
omission.

**K2. Plate `end`, the English passage, every tab, both widths: each
stage direction stands under the name of the next speaker.** Known: the
examiner's entry in `open` (the one that begins "From the examiner: in
the third passage"). Still there: `traviata-end-2-english-1280.png`
(the direction of one word under the second speaker's name, the one
about the sofa under the fourth name, the one about her pulse under the
last but one) and `traviata-end-2-english-390.png`. I list it second
because it misleads: it reads as that speaker's own direction.

**K3. Plate `end`, tab English, 390 (and 360, 320): the number of a
pair stands on the name of the next speaker.** Where a marked English
row is followed at once by a speaker's name, the pair's number under
the row and the name have 2 to 3 px between them and read as one mark:
pairs 1, 3, 4 and 5 (the rows p:217.0, p:222.5, p:229.0, p:231.0).
`traviata-end-2-english-390.png`; enlarged in `look/e2-390-zoom.png`.
At 1280 there is room (`traviata-end-2-english-1280.png`). New.

**K4. Plate `cabaletta`, tab Rhyme, both widths: the letter of the
rhyme is drawn on top of the points of omission.** Row 10.7 is cut
after word 5, so the page sets three points after it; the Rhyme tab
then sets the line's letter (the fourth letter of the key) in the same
place, between the points. `traviata-cabaletta-1-rhyme-1280.png`,
`traviata-cabaletta-1-rhyme-390.png`; enlarged in
`look/c1-1280-last.png`. On the other tabs of the plate the same row
ends in a full stop and then three points (words 6 to 8, left out, are
a stage direction: see K1). New.

**K5. Plates `refrain` and `cabaletta`, the English passage: the
libretto's heading of each song is printed as a stage direction.**
Known: the examiner's entry in `open` (it begins "From the examiner: in
the first and second passages"). Still there:
`traviata-refrain-3-english-1280.png` (the small italic line after the
second sign of omission), `traviata-cabaletta-1-rhyme-1280.png` (the
small italic line before the fourth English row, which says the first
words of the row under it a second time).

**K6. Plate `end`, 1280 and 360: the label over the Italian leaves its
last word alone on a line.** The label takes two lines at 1280 and
three at 360 and 320, and the last holds one word
(`traviata-end-0-words-1280.png`, `look/narrow/e1-360-a.png`). At 390
it parts evenly. The words are the reading's and say what is needed;
the kit sets notes, remarks and keys so that a last word is not left
alone (seventh mending), and the labels over two passages are not yet
set so. Small.

**K7. Plate `refrain`, 320: the four tabs take two rows, the fourth
alone on the second.** `look/narrow/r0-320-a.png`. The seventh mending
set the tabs closer under 350 px "so that four keep to one row"; these
four (seven, seven, five and seven letters) are about 12 px too long
for it. The four of plate `cabaletta` keep to one row. I do not propose
shorter labels: each is the right word, and the second is used on two
plates and in their captions. Small.

**K8. The page, 390: the line under the title parts a pair of scene
numbers.** `traviata-page-390-0.png`: the first of its two lines ends
on the first of two scene numbers and the second begins with "and" and
the other. The kit keeps "Scene 3" together; a pair of numbers after
the plural is not kept. Small.

### The reading's and the hosted text's

None of these is mine to change, and none is in the list of what I may
propose, so they are here and not in section 5.

**R1. Plate `refrain`, tab English, 1280: the four lines that come
back stand a row apart in the two versions.** The first two groups of
rows are level, because pairs join them. The last group has no pair,
so the English four begin level with the Italian line before the four
(row 4.7, whose English counterpart is not among the rows shown), and
each English line of the return stands one row above the Italian line
it answers: `traviata-refrain-3-english-1280.png`. The caption of this
very tab says the English keeps the four lines that come back, so the
eye goes to them. Tried (`look.mjs --try level`, no file changed): one
more pair on this tab, from row 5.0 words 0 to 3 to row p:270.7 words 0
to 4, and the kit sets the two returns level:
`shots/trial/traviata-refrain-3-try-level-1280.png` (the pair shows
there as a ninth number with no remark, because a remark is the
poet's to write; nothing changes at 390). A pair is a mark of the
reading, so this is the lead's or the poet's to decide.

**R2. The hosted Italian, plate `refrain`, row 1.0 word 3: a straight
apostrophe.** It is the only one among the seventeen apostrophes in the
rows this piece shows (counted over the built copy; the other sixteen
are curled), and in the display face it shows as a straight tick beside
the curled one two words before it in the same line
(`traviata-refrain-0-refrain-1280.png`). The Measure tab's division of
that word in the reading holds the same character, so whoever mends the
text must mend that too.

**R3. The three Words tabs: Italian words named as words are not
marked.** About two dozen notes begin with, or name, an Italian word as
a word (the dictionary form of the word glossed). The notes are italic
and the kit sets a word marked with asterisks upright in them (sixth
mending); none is marked, so the word named does not stand out from
what is said of it (`traviata-refrain-2-words-1280.png`,
`traviata-cabaletta-2-words-1280.png`, `traviata-end-0-words-1280.png`).
KIT-CHANGES says the marking is the examiner's and the critic's.

**Answered, and may be struck from `open`.** The examiner's entry that
begins "From the examiner: at phone width the table of the Scene tab"
is met by the drawing: the table is on the page only if my script
fails, and the drawing keeps inside the plate at 390, 360 and 320
(`traviata-cabaletta-3-scene-390.png`, `-360.png`, `-320.png`).

## 5. Proposed for the reading

I have set nothing. Of the things an artist may set, I propose no
`heading`, no `label`, no `beside`, no `turn` and no `join`: the three
headings and eleven tab names read well and wrap well from 360 up (K7
is the one place at 320), no line turns badly at 390, 360 or 320
(section 3), and the strokes of the two figure tabs join what their
captions say (the examiner found the same). What I propose is two new
keys in the `facts` of one lens: plate `cabaletta`, the lens of kind
`shape` (tab "Scene"), whose `facts` is a list of four parts. No key
that is there is touched. The drawing already reads both keys, and
stands without them as in `shots/traviata-cabaletta-3-scene-1280.png`.

### 5.1 `syllables`: the measure of each line

Set exactly, one key in each of the four parts, in their order:

```
part 1 (Recitative, 8 lines):   "syllables": [7, 7, 11, 11, 11, 11, 7, 11]
part 2 (Slow song, 24 lines):   "syllables": 7
part 3 (Recitative, 8 lines):   "syllables": [11, 7, 7, 7, 7, 7, 11, 11]
part 4 (Fast song, 8 lines):    "syllables": 8
```

(A number stands for every line of its part; a list has a number for
each line and must be as long as `lines`. If any part lacks the key, or
a list is of the wrong length, the drawing falls back to strokes of one
length.)

*What it does.* Every stroke is as long as its line's measure, from
zero: 6 px to a syllable at 1280, 4 px on a phone. The key's first
entry then reads that a line is as long as its measure, 7, 8 or 11
syllables by the Italian count (the numbers from the facts; the words
"by the Italian count" are read, when the page runs, from the
`meterName` of this plate's own Measure tab, and are left out if it
stops saying them), and the measures stand in figures in a table
folded away under the key.

*Why.* It is the build of the scene made visible. The two recitatives
are ragged, sevens and elevens mixed; the two songs are even, and the
fast song's lines a little longer than the slow song's. That is what
the four `measure` sentences say in words, and the difference between
recitative and song is what the caption's four names turn on. It also
mends the one thing the plain drawing leaves unsaid (rule 5 of the
kit's README, lengths in proportion): there a stroke's length means
nothing. And the two red lines above the red song turn out to be the
two long ones, the elevens the Measure tab of this plate counts.

*Where the numbers come from, and the doubt.* Not from a script.
ARTIST.md says a number the facts do not hold is counted by a script
over the hosted text, and that if it cannot be so counted the drawing
does without. The Italian count cannot: it needs an ear for which
vowels run together and where the last stress falls. So I counted
nothing, and without the key the drawing does without. But the numbers
are in the reading already: each part's own `counted` note gives them
(parts 1 and 3 line by line, parts 2 and 4 by their last stress), the
`measure` of parts 2 and 4 says seven and eight in words, and the
examiner counted the same by ear (exam.md, section 2, the paragraph
"Around it" and the one on the second passage). `counted` is a working
note and never reaches the page; the proposal is to say the same
numbers under a key that does. `trial.mjs syllables --dry` prints them
as read from those notes (section 3). Whether numbers of the poet's
ear, tested by the examiner, may stand as a fact of the drawing is the
lead's to judge.

*Pictures.* `shots/trial/traviata-cabaletta-3-try-syllables-stanzas-1280.png`,
`-390.png`, `-320.png` (with 5.2 also set); the table opened:
`traviata-cabaletta-3-try-syllables-stanzas-open-1280.png`, `-390.png`.

### 5.2 `stanzas`: how the slow song is parted

Set exactly, one key in the second part:

```
part 2 (Slow song, 24 lines):   "stanzas": [[8, 4], [8, 4]]
```

*What it does.* The song's 24 strokes stand as two stanzas with one
line's room between them, and in each the last four strokes are set in
(by two syllables' width), as a printer sets lines in. A plain number
is a stanza with nothing set in, so the plainer form is `"stanzas":
[12, 12]`, which only parts the two.

*Why.* The part's own sentence says each stanza closes on Alfredo's
four lines, its `measure` says two stanzas of twelve, and the Refrain
caption of the first plate says the first printing sets the four
deeper in than her own lines. The drawing then shows all three at a
glance, and shows where the first plate's "four lines in her song"
stand in the scene.

*Where the numbers come from.* A script over the hosted text:
`count-scene.mjs` (section 3) finds that the cut sets the slow song in
blocks of 8, 4, 8 and 4 rows and that each block of four comes back
word for word, but for its first row, from Alfredo's four lines. That
the four are set in, and not only set apart, rests on the reading's
caption just quoted and on the poet's notes of the page images
(notes.md, "The first printing, read in page images", pp. 10 and 11).
The drawing does not show the other thing those notes report, that the
first line of each group hangs to the left.

*Pictures.* With 5.1: the files named there. Without 5.1 (strokes of
one length): `shots/trial/traviata-cabaletta-3-try-stanzas-1280.png`,
`-390.png`. The plainer form with 5.1:
`shots/trial/traviata-cabaletta-3-try-syllables-stanzas-plain-1280.png`.

### 5.3 Not proposed, but ready: the fast song in two fours

`"stanzas": [4, 4]` in the fourth part would part the fast song as the
Rhyme caption of the same plate says it is printed, "as two quatrains"
(the passage itself cannot show it: the cut has the eight rows as one
block). Picture: `shots/trial/traviata-cabaletta-3-try-syllables-stanzas-quatrains-1280.png`,
`-390.png`. I leave it out of the proposal because nothing in the facts
of this lens says it and no script can count it; if the lead wants the
Scene tab to agree with the Rhyme caption, that is the key.

## 6. What was refused

Nothing was refused by the permission system of my session. Three
times in the course of the work a command was not run because the
service that judges commands was for the moment not answering (a
timeout, said to be temporary; no judgment on the command). I did
nothing another way: I went on with reading, and ran the same command
when the service answered again.

What I did not touch: the reading, notes.md and exam.md; the kit, the
site's own scripts, the stylesheet and the build. The built copy
`site/data/pieces/traviata.json` as it stands was written by `node
build/pieces.mjs traviata` at 13:14:32 UTC and holds no trial (section
7). Every trial picture handed in was made by `look.mjs`, which
patches the data on its way to the browser and writes no file of the
site. I installed nothing, sent nothing anywhere and started no other
agent.

## 7. The last build and the last pictures

All times are UTC, Saturday 3 October 2026, from `date -u` and from
the files' own times.

**The round before the last.**

- 12:47:02: `site/js/pieces/traviata.js` last written (160 lines;
  `node --check` passes). Not changed since.
- 12:48:18: built; the checker printed "no problems", "no warnings",
  "the printed notes are fit to print". `count-scene.mjs` and
  `turns.mjs` again by 12:48:54, with the results of section 3.
- 12:49:08 to 12:50:30: the trial pictures in `shots/trial/`, by
  `look.mjs` (sixteen; two more of plate `end` at 13:00:23 and
  13:00:53: eighteen in all).
- 12:50:40 to 12:52:00: a whole set of pictures by the common tool, one
  plate at a time, as below. From 12:53 on every one of the
  thirty-nine was opened again, the phone ones in enlarged crops
  (`look/final/`; the last of the crops by 13:19, after the set had
  been taken again and found the same). They show what sections 1, 2
  and 4 say. Two things
  were added to K1 on that pass: how far apart the pairs of the
  English tab stand at 1280, and what each trial does to the glosses
  of the Words tab.
- 13:04:35: the Scene tab once more with letters placed by fractions of
  a pixel (`shoot.mjs traviata --plate cabaletta --lens 3 --widths
  1280,390,360,320 --fractional`, the flag the common tool gained at
  12:45:33; pictures in `look/fractional/`): the same drawing at all
  four widths, and "nothing reported; now look at the pictures".
- 13:06:57: the checker, which another hand had changed at 13:04:00,
  run again: the same three lines. 13:07:31: `count-scene.mjs` again:
  the same.

**The last.** Nothing of mine was changed after it but this record.

- 13:14:32: `node build/pieces.mjs traviata`. The reading is as the
  examiner left it at 09:24:33 and the kit as mended at 11:06 (its
  newest file is of 11:08:08, the stylesheet of 11:05:49). The built
  copy is byte for byte the one of 12:48:18. It says the piece has a
  script, and its Scene lens holds the reading's four parts with the
  keys part, first words, lines, measure, what she says and read, and
  the counts 8, 24, 8 and 8.
- 13:14:32: `node build/tools/check-reading.mjs traviata`: "no
  problems", "no warnings", "the printed notes are fit to print".
- The last pictures, by the common tool, one plate at a time, each run
  `node build/tools/shoot.mjs traviata --plate <id> --out
  remake/works/traviata/shots`:
  - plate `refrain`, 13:14:40 to 13:14:59: eight pictures;
  - plate `cabaletta`, 13:15:06 to 13:15:23: eight; then its Scene tab
    alone with `--lens 3 --widths 360,320`, done by 13:15:34: two;
  - plate `end` with `--page`, 13:15:40 to 13:15:59: six, and the page
    in fifteen slices (six at 1280, nine at 390).

  Thirty-nine pictures in `shots/`. The last line of every run, and so
  the last line the picture tool printed: "nothing reported; now look
  at the pictures".
- Looked at again by comparing them with the set of 12:50, which I had
  opened one by one (kept in `look/final-1250/`): thirty-eight are the
  same byte for byte. The thirty-ninth,
  `traviata-cabaletta-1-rhyme-1280.png`, differs in two pixels at the
  head of one stroke (`build/tools/pixdiff.mjs`; the place is in
  `look/diff/`), which I opened. So these show what I saw.
- 13:21:02, at hand-in: nothing the page
  is made from is newer than the build of 13:14:32: not the reading,
  the hosted text, `build/pieces.mjs`, the kit, the stylesheet or the
  site's own scripts. The pictures are of the page as it stands.

### What is handed in

- `site/js/pieces/traviata.js`: the drawing of plate `cabaletta`, tab
  Scene. No stylesheet of the piece's own.
- `remake/works/traviata/art.md`: this record.
- `remake/works/traviata/shots/`: the thirty-nine last pictures;
  `shots/trial/`: the eighteen pictures of what sections 4 and 5 try.
- `count-scene.mjs`, `trial.mjs`, `look.mjs`, `turns.mjs` beside this
  file: the tools of section 3, so that every count and every trial can
  be made again.
- `look/`: my working pictures. The ones this record names are kept
  there: the narrow widths (`look/narrow/`), the enlargements, the set
  of 12:50 (`look/final-1250/`) with the crops of its phone pictures
  (`look/final/`), and the Scene tab with fractional letters
  (`look/fractional/`).
