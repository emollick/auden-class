# Tristan und Isolde: the artist's record

Begun 2026-10-03, 12:29 UTC, and added to as the work went. The section
"The final pictures" says when they were taken.

No line of the libretto is written out here. Words are pointed at by row
and word number, as the checker's proof prints them.

## In short

- **Drawn:** nothing. The piece has no shape lens. Nothing in the
  reading, the kit or the build was edited.
- **The join on Crossing** is right as set. All four strokes are drawn
  at 1280, 390, 360 and 320, and at twenty widths from 320 to 1920.
- **Who sings on `names`:** no singer's name is printed on any row, on
  any tab, at any width. From the plate a reader cannot tell who sings
  any row. The Crossing caption tells it for rows 0.0 to 5.0, the Rhyme
  caption for every row but 10.0 to 12.0, Grammar and Words for none.
- **The kit's known faults:** this piece shows (a), (c) in its Rhyme
  form, (e), (f), (g) and (h). It does not show (b) or (d).
- **Kit faults not on the lead's list,** worst first: an italic title
  in a caption lights a name in the passage (`names`, Grammar); the
  line under the page's title turns after "Scenes" (390, 320); on a
  phone a tap on a word named in a caption fades the rows in view
  while the lit words are off the screen; one small one to leave.
- **In the reading:** no note marks its German word; no singer is named
  on `names`, which needs the German part cut again with its three
  headings; the italic title; one straight apostrophe in the hosted
  German.
- **Proposed for the reading:** `"under": false` on the plate `work`,
  if the lead allows that new key for the look alone. It cures (a), (c)
  and (h) on that plate and brings the caption 580 px nearer on a
  phone. Second choice: `"beside": true` on `work`, once the kit sets
  the unmarked passage of a two-block plate after the caption on a
  phone.
- **The final pictures** were taken from 14:16:56 to 14:19:59 UTC,
  after a build at 14:16:45, on the kit of the seventh mending with the
  lead's one line of 14:08 in it. They are the same to the byte as the
  set of 13:40 to 13:44, which I had looked at. The picture tool's last
  line was "nothing reported; now look at the pictures". The eighth
  mending had not landed. A look at its unfinished copy is at the end.

## What I drew

Nothing. The piece has no shape lens, so there is no script
(`site/js/pieces/tristan.js` does not exist and none was written) and no
stylesheet. The work is the page as the kit sets it: three plates, eleven
tabs, at 1280, 390, 360 and 320 px.

## What I did not touch

`reading.json`, `notes.md` and `exam.md` were read and not edited. Nothing
in `site/js/kit/`, `site/js/`, `site/css/` or `build/` was edited.

## How I looked

Round one, on the kit as the seventh mending left it (kit files dated
11:05 to 11:08 UTC):

```
node build/pieces.mjs tristan                         12:29 UTC
node build/tools/check-reading.mjs tristan            no problems, no warnings
node build/tools/shoot.mjs tristan --plate work  --widths 1280,390,360,320 --out remake/works/tristan/shots   12:30
node build/tools/shoot.mjs tristan --plate names --widths 1280,390,360,320 --out remake/works/tristan/shots   12:38
node build/tools/shoot.mjs tristan --plate end   --widths 1280,390,360,320 --out remake/works/tristan/shots   12:43
node build/tools/shoot.mjs tristan --out remake/works/tristan/shots --page                                  12:50
```

Every run ended "nothing reported; now look at the pictures".

The pictures of round one are no longer in `shots/`. All were taken
again in the final round, on the same kit and the same reading (see
"The final pictures" at the end). Every file name in this record points
at a picture of the final round. A scan of all eleven tabs at the four
widths gave the same numbers in both rounds.

I opened every picture: the eleven tabs at four widths (44 pictures) and
the slices of the whole page at 1280, 390 and 320. I also measured the
page with a probe of my own, kept in the session's scratchpad and not in
the project. It opens the page as the picture tool does and prints the
boxes of rows, marks and captions. The numbers in this file come from
it. A few more pictures were taken with it and are named where used.

The picture tool gained two flags at 12:45 (`--site`, `--fractional`). I
tried `--fractional` at 390 and 320 on all three plates (pictures kept
in the scratchpad only). The layout is the same; only the word spaces
inside the small glosses open by a pixel or two.

No line of verse turns over at any of the four widths, on any plate.

The picture tool asks the page for no motion, so its pictures show each
tab already drawn. I also showed all eleven tabs at 1280 with motion
allowed, as most readers have it, and asked each mark whether it ends
whole. All do. A tab takes from two to six and a half seconds to draw
itself (`work`, Words, is the slowest, then `names`, Grammar).

## The join on the Crossing tab (`names`, the first of its four tabs)

The reading sets `"join": [[0, 3], [1, 2], [6, 9], [7, 8]]`. That asks
for four strokes: in rows 0.0 and 1.0 the pronoun to the pronoun and the
name to the name, and the same in rows 3.0 and 4.0. The caption speaks
of exactly these: pronoun and name change places from line to line, a
crossing, once in her three lines and once in his. It speaks of no
stroke to the third line of either speech (rows 2.0 and 5.0), and none
is set.

What is drawn, by width (pictures `tristan-names-0-crossing-<width>.png`,
checked against the list of marks the probe prints):

| width | underlines | slanted strokes | end dots | crossings |
|---|---|---|---|---|
| 1280 | 12 | 4 | 8 | rows 0.0 to 1.0, rows 3.0 to 4.0 |
| 390 | 12 | 4 | 8 | the same |
| 360 | 12 | 4 | 8 | the same |
| 320 | 12 | 4 | 8 | the same |

Every stroke the caption speaks of is drawn at every width. I also
counted the marks, without pictures, at twenty widths from 320 to 1920
px (320, 340, 360, 375, 390, 414, 430, 480, 520, 600, 700, 768, 820,
880, 940, 1024, 1100, 1280, 1440, 1920). The count is the same at each:
two strokes between rows 0.0 and 1.0, two between rows 3.0 and 4.0, and
no mark outside the plate. With motion allowed the 24 marks draw
themselves and all stand whole within five seconds (tried at 1280 and
390).

Each stroke runs from under its word in the upper row to over its word
in the lower row and touches no letter. The two strokes of a pair cross
in the white between the rows. Rows 2.0 and 5.0 carry their underlines
and no stroke, which is right: the caption says the name is dropped
there, not crossed. The join is right as set and I propose no change to
it.

One thing a reader may stumble on, which is not the join's fault: the
name-to-name stroke runs from a blue underline to an ochre one (her name
to his), while the pronoun-to-pronoun stroke runs from red to red. The
key beside the caption names the four colors, so it can be worked out.

## Who sings on `names`, by row

No singer's name is printed anywhere on this plate, at any width, on any
tab. The probe counts no speaker row; the only labels are the two over
the passages ("Wagner" over the German, "The English libretto" over
the English).

Row by row. "Printed" means a singer's name set on the plate. The last
column is what a reader can learn from the caption of the tab that is
showing.

| rows | printed | the text shown gives them to | what a caption tells |
|---|---|---|---|
| 0.0, 1.0, 2.0 | no name | Isolde (heading at line 3619 of the source file, not taken into the hosted part) | Crossing and Rhyme: hers. Crossing adds that in the score he answers each line as it ends. Grammar and Words: nothing. |
| 3.0, 4.0, 5.0 | no name | Tristan (heading at line 3627, not taken) | Crossing and Rhyme: his. Grammar and Words: nothing. |
| 6.0, 7.0, 8.0, 9.0 | no name | both (heading at line 3635, not taken) | Rhyme only: given to both, and in the score sung by her alone. Crossing, Grammar and Words: nothing. |
| 10.0, 11.0, 12.0 | no name | both | Rhyme only: given to both, and not sung together, since the voices join only in the last line. Who sings them in the score is not said. The other three tabs: nothing. |
| 13.0 | no name | both | Rhyme only: the one line the voices sing together. The other three tabs: nothing. |
| English p:122.28 to p:122.39 | no name | both, all twelve (one heading, in block 121) | No caption says who sings the English lines. |

So on the plate itself a reader cannot tell who sings any row. On the
Crossing tab the caption tells it for rows 0.0 to 5.0 only. On the
Rhyme tab the caption tells it for every row but 10.0 to 12.0, and the
reader has to count lines to place what it says, since no row is
headed. On the Grammar and Words tabs a reader cannot tell for any row.
The build shows a speaker only where more than one speaks in a passage,
so the English block would stay bare even with its heading.

Why it matters to the eye: rows 0.0 to 5.0 each hold a name as a word of
the verse. With no heading, a stranger cannot tell whether the name in
a line is the singer's own or the name of the one sung to. The point of
the Crossing caption, that each calls the other by the singer's own
name, shows only to a reader who knows who is singing. On the Grammar
and Words tabs nothing tells him.

A `speakers` gloss cannot help here. The build refuses one unless a
speaker's name is shown on the plate, and none is. The names would be
printed only if the German part `o-tristan/duet` were cut again with its
three headings as speaker blocks (the hosted English carries such
blocks; the three German parts carry none). That moves every row number
of this plate, so it is the lead's to decide, with the open question in
exam.md about which German text to show. If it is done, the third
heading is the German word for "both" in capitals, and the plate would
want `"speakers": { "BEIDE": "both" }` (the key as the hosted part then
prints the heading; the source has it with a full stop).

### The trial: the three headings set over the German rows

To show what the plate would gain, I made a trial on a copy of the site
in the scratchpad (read by the picture tool through `--site`; nothing in
the project was changed). In the copy of the built piece three speaker
rows were put in by hand: the two names over rows 0.0 and 3.0 and the
word for "both", with its English, over row 6.0. The reading cannot ask
for this as the hosted part stands. Pictures:
`trial-speakers-names-0-crossing-1280.png`, `-390`, `-320`, and
`trial-speakers-names-2-rhyme-1280.png`.

- Each group of rows is headed in small capitals, and the third heading
  carries "both" beside it. The picture tool reported nothing.
- The Crossing strokes are all still drawn (counted at 320, 360, 390,
  768 and 1280). No stroke runs from one speech to another, so no name
  stands in a stroke's way.
- With her name over the first three rows a reader sees at once that
  the first line holds the pronoun and the singer's own name. That is
  the caption's point, and the plate now shows it without the caption.
- On Rhyme the one long arc that joins a row of hers to a row of his
  (rows 1.0 and 4.0) is seen to do so.
- The cost is 57 px of height at both widths. The pictures are 1264 px
  high for 1206 at 1280 and 2029 for 1972 at 390; the rounding of the
  plate's border accounts for the odd pixel.

The headings would be the German text's own. The score's different
giving of the lines stays where it is, in the captions.

## The kit faults the lead already has, as this piece shows them

One line each, as asked. This is the kit as the seventh mending left
it. The eighth had not landed when I handed in (see the end of this
record). The numbers behind the lines follow the list.

- (a) Shows: `work` and `end`, every tab, every width; worst on `work`,
  where no caption says what the italic line is.
- (b) Does not show: no English row here carries a speaker's name or a
  mark of lines left out.
- (c) Shows in its Rhyme form: `work`, Rhyme, every width, no stroke
  from row 14.0 to row 15.0. No figure tab stands on such a plate.
- (d) Does not show: every arc and bracket stays inside the plate at
  390, 360 and 320.
- (e) Shows: `names` at 320, where Words falls to a second row. `end`
  keeps one row.
- (f) Shows, mildly: `work` and `end`, every tab but Beat, every width.
- (g) Shows: all three plates at phone widths, and `work` and `end` at
  1280 as well.
- (h) Shows: `work`, Words, every width. Not on `names`; `end` has no
  Words tab.

The numbers and pictures:

- (a) `tristan-work-0-verbs-1280.png`, `tristan-end-0-sentence-390.png`.
- (c) The caption of `work`, Rhyme, says one first sound joins row 14.0
  word 1 to row 15.0 words 0 and 1. The English line p:27.14 stands
  between, so no stroke is drawn from line to line. Row 14.0 keeps a
  lone dot under its letter, while the key reads "inside the line and
  from line to line" (`tristan-work-1-rhyme-1280.png`,
  `tristan-work-1-rhyme-390.png`). On `end`, Rhyme, the sound at rows
  47.0 and 48.0 takes three points under each place and no stroke. The
  key shows the same three points, so that one can be read.
- (e) At 320 the four tabs of `names` need 278 px and the row has 264,
  with 10 px between tabs (`tristan-names-0-crossing-320.png`). The
  four of `end` need 256 px.
- (f) From baseline to baseline, own line then next line: `work` 53 and
  72 px at 1280, 44 and 56 at 390, 43 and 52 at 320; `end` 68 and 92 at
  1280, 54 and 69 at 390, 53 and 63 at 320. Where a row's height goes
  on `work` at 1280: of 125 px, the German line with its room for marks
  takes 73 and the English line with the white after it 52. At 390 it
  is 55 and 45 of 100. On `end` at 1280 it is 81 and 79 of 160, since
  there the English keeps room for marks of its own on every tab.
- (g) Heights of the pictures at 390 px, tab by tab: `work` 1914, 2012,
  2496; `names` 1972, 1888, 1923, 2201; `end` 2011, 2024, 2138, 2156
  (my scan, which leaves out the plate's border, gives a pixel less).
  The caption begins 1538 px down on `work`, 1157 on `names` and 1612
  on `end`. On
  `names` that is because fourteen short lines are set in 34 px type on
  a phone (`tristan-window-names-0-crossing-390x844-top.png`: one phone
  screen holds ten rows and no word of the caption). At 1280 `work` is
  1884 px (125 px a row) and `end` 2042 px (160 px a row). There the
  caption stays in view beside the rows as the page moves
  (`tristan-window-work-0-verbs-1280x800-low.png`), so it does less
  harm. The fault is at its worst between phone and desktop widths,
  where the caption still stands under the passage and the type is at
  full size: at 768 px the caption begins 1855 px down on `work`, 1226
  on `names` and 2043 on `end` (measured without pictures at 600, 768
  and 1024; nothing else goes wrong at those widths).
- (h) The glosses (12 to 13.5 px italic) and the English line under
  them (14.5 to 17 px italic) are of one gray, about 22 px apart, and
  read as one text (`tristan-work-2-words-1280.png`,
  `tristan-work-2-words-390.png`). In several rows the two say different
  things, since the English was made to be sung.

At 320 the German of `work` is at the kit's smallest size (16.5 px) and
the English under it is 14.5 px, so line and version are nearly one
size. Only the italic tells them apart (`tristan-work-0-verbs-320.png`).

## Kit faults not on the lead's list, worst first

1. `names`, Grammar, every width. The caption sets the opera's short
   title in italic, in its last sentence. The kit takes any italic word
   of a caption for a word named from the passage. So the pointer on
   the title, or a tap, dims the plate and lights the hero's name in
   rows 1.0, 3.0 and 5.0 and in the English rows p:122.29 and p:122.30.
   The tab is about rows 6.0 to 13.0 and the sentence is about the
   opera, not the name
   (`tristan-names-1-grammar-1280-pointer-on-title.png`). It is the only
   false place of this kind in the piece: I ran the kit's own rule over
   every bold and italic word of the eleven captions. Either the kit
   leaves an italic word alone where the tab marks none of its places,
   or the reading sets this title without italics.
2. The page's head, 390 and 320. The line under the title turns after
   the word "Scenes", so the second line begins "1 and 2"
   (`tristan-page-390-0.png`, `tristan-page-320-0.png`). The page ties
   "Act" and "Scene" to their numbers but not the plural: the list of
   such words in `site/js/rich.js` has "lines" and "pages" and no
   "Scenes" or "Acts".
3. Every plate, phone widths. A tap on a word named in the caption
   lights its places in the passage for about two and a half seconds
   and makes every other word pale. On a phone the caption stands far
   below the marks (see (g)), so the lit words are off the screen and
   all the reader sees is the lines just above the caption going pale
   and coming back. On `names`, Crossing, at 390 by 844 px: a tap on the
   first bold word lights rows 0.0 and 3.0, neither on screen, and the
   five rows in view fade
   (`tristan-window-names-0-crossing-390x844-tap-on-bold.png`). The same
   on `work`, Verbs (rows 13.0 and 17.0 lit, none on screen). The kit
   could leave the passage alone when no lit word is in the window, or
   bring the first one into view. Nothing invites the tap (the word
   carries no sign that it answers one), so few readers will meet this.
4. `work`, Verbs, every width, small. The bold verb of row 13.0 in the
   caption lights row 13.0 word 0 and also row 17.0 word 0, which is the
   same word but Lady Love's verb, where the sentence speaks of Isolde's
   alone. Both places are marked by the tab, so the kit's rule keeps
   both. I would leave it: it shows the verb coming back.

Set against the brief of the eighth mending (`remake/kit8/BRIEF.md`,
read afterwards, as information): faults 1 and 2 are not in it. Fault 2
is one more word for the list its 3a already works on (the plural of
"Scene" and of "Act" before a number). Fault 3 goes with (g), which the
brief only weighs.

Seen and not counted as faults:

- The word spaces inside the small glosses close to about 2 px in the
  default pictures. With `--fractional` they open. It is the picture
  browser's whole-pixel letters and not the page.
- At 1280 the three far rhymes of `names` (rows 0.0 to 5.0) are drawn
  as long curves that cross each other, and at phone widths as square
  brackets. Both read well. On `work` the two far rhymes are square
  brackets at every width. On `end` every rhyme is a curve at every
  width.
- On `end`, Rhyme, at 1280, the tall curve of rhyme b from row 48.0 to
  row 50.0 passes to the right of row 49.0 and touches no letter.

## The page, plate by plate

What a stranger sees, apart from the faults listed above.

**`work`, "Whose work"** (Verbs, Rhyme, Words). Fourteen short German
lines with the English under each.

- Verbs. A colored rule under each line says whose clause it belongs to
  and a short green bracket marks each verb. The key names the four
  marks. It reads at once at every width. No mark touches a letter or
  the English under it.
- Rhyme. Letters and brackets at the line ends, all clear of the words.
  At 320 the longest row (13.0) and its letter and bracket still fit.
  The one thing that looks unfinished is the lone dot of fault (c).
- Words. Twenty-two glosses, none touching another; two glosses under
  one line stand side by side. The ten notes run beside the caption at
  1280 and under it on a phone (672 px of notes at 390). The fault here
  is (h).

**`names`, "Two names"** (Crossing, Grammar, Rhyme, Words). Fourteen
German lines; the English is a block of twelve smaller lines, beside
the German at 1280 and after the caption on a phone. Both labels show.

- Crossing. See the section on the join. Clean at every width.
- Grammar. Sixteen short brackets in four colors under rows 6.0 to
  13.0, one to a word, and a key of four lines. Clean. Rows 0.0 to 5.0
  are bare, as they should be.
- Rhyme. Letters at the line ends with near rhymes as small curves and
  far ones as long curves (1280) or brackets (phones). Clean. At 320 the
  three brackets of rows 0.0 to 5.0 stand 4 to 6 px apart; their three
  colors keep them apart (`tristan-names-2-rhyme-320.png`).
- Words. A gloss under each line and six notes. Clean. The glosses are
  small under lines of 34 px, but they can be read. At 320 the plate is
  2240 px.
- On a phone the German is set at 34 px at 390, 32 at 360 and 27 at
  320. The lines are two or three words long, so the kit gives them its
  largest size. That is why the caption stands 1157 px down at 390. A
  smaller size for a passage of very short lines would bring marks and
  caption nearer.

**`end`, "The last twelve lines"** (Sentence, Rhyme, Beat, English).
Twelve German lines with the English under each.

- Sentence. Brackets in five colors and a key of five lines. One
  bracket runs on from row 49.0 to row 50.0: it is open at the end of
  the first row and closed in the second. Clean at every width.
- Rhyme. Clean. See (c) for the three points at rows 47.0 and 48.0.
- Beat. A rule and dots under every line, two numbered remarks. Here
  the English sits close under its own line, as it should on every tab.
- English. Five numbered strokes from a German word to the English
  under it. None crosses a letter. The longest (tie 2, from row 47.0
  word 3 down to the left) stays clear of both lines at every width.
- The rows are 160 px apart at 1280, since the Beat tab's room for
  marks is kept on all four tabs. Twelve short lines take 2042 px.

**Head and foot of the page.** Title, summary, Auden's view, the entries
under "More from Auden", sources and the folded lists read well at 1280
and 390 (`tristan-page-1280-0.png` to `-8`, `tristan-page-390-0.png` to
`-10`, `tristan-folded-0-1280.png`, `tristan-folded-0-390.png`). The
one fault is the turn of the line under the title (fault 2 above).

The record under "A record of it" plays. I pressed its button at 390
and at 1280: the sign turns to a pause sign, the knob moves along the
rule and the time reads "0:02 / 4:09"; a second press stops it
(`tristan-record-390-playing.png`, `tristan-record-1280-playing.png`).
The credit says four minutes and the file runs 4:09. Its title sits in
two even lines at both widths. "Read on" leads to Act 1 of the English
libretto, as the reading sets it.

## In the reading, not mine to change

1. **The notes do not mark the German word they are about.** The kit
   sets these notes in italic and stands a word upright where the
   reading marks it `*word*`. No note of this reading uses the marking,
   so each German word is italic among italic English and only a capital
   letter shows it. Places: `work`, Words, all ten notes (rows 12.0;
   13.0 word 2; 13.0 words 3 to 4; 14.0; 15.0; 16.0; 17.0; 22.0; 24.0;
   25.0). `names`, Words, the six notes (rows 6.0, 7.0, 8.0, 9.0, 11.0,
   13.0). `end`, English, ties 1 to 5. Pictures:
   `tristan-work-2-words-1280.png`, `tristan-names-3-words-1280.png`,
   `tristan-end-3-english-1280.png`.
2. **No singer is named on `names`.** See the section above and its
   trial. It needs the German part cut again with its three headings.
   That is the change to this piece I would most like made. A smaller
   gap of the same kind: the Rhyme caption says who sings rows 6.0 to
   9.0 and row 13.0 in the score and is silent on rows 10.0 to 12.0.
   The examiner's record has it (both voices, one after the other).
3. **The italic title in the Grammar caption of `names`** lights the
   hero's name in the passage (kit fault 1 above). If the kit keeps its
   rule, the title would have to stand without italics there.
4. **Nothing on `work` says what the English line is** until fault (a)
   is mended. No caption of `work` speaks of it, and the Words tab's
   glosses differ from it in several rows. Once the label "The English
   libretto" shows over it, that is enough.
5. **`end` must stay line under line.** Its English caption begins by
   saying the English stands under each German line, and the grounds
   list says "line under line". So `"beside": true` is not open there.
6. **One straight apostrophe in the hosted German.** `work`, row 13.0,
   word 1, on every tab and at every width. It is the only one on the
   page: the English rows and the captions have curled ones (counted in
   the built rows by code point: one U+0027, four U+2019). It is in the
   hosted part `o-tristan/minne` and not in the reading. The record of
   the eighth mending says the lead is curling these in the hosted
   originals, so a later picture of `work` may differ from mine by that
   one mark.

## Proposed for the reading

One thing: `"under": false` on the plate `work`. It rests on a key that
the lead gave the kit and the build while I worked (14:05 to 14:08
UTC). The key is not among those my brief names, and its stated meaning
does not quite fit this plate, so it is the lead's to allow. The first
trial below shows it. If the key may not be used so, my second choice
is `"beside": true` on `work`, to be set once the kit puts the unmarked
passage of such a plate after the caption on a phone (the second trial
below). Each thing I was free to propose, in turn:

- **Headings.** "Whose work", "Two names" and "The last twelve lines"
  stand. Each sits on one line with its place at 1280 and over its
  place on a phone, and none wraps.
- **Tab labels.** All eleven stand. Each is one word and says what the
  tab marks. The second row of tabs on `names` at 320 is kit fault (e)
  and not a matter of the words: the row is 14 px short, and half the
  gap between tabs would hold all four.
- **`turn`.** None. No line of verse turns at 1280, 390, 360 or 320, in
  the default pictures or with `--fractional`.
- **`join` on Crossing.** Stands as set. See the section above.
- **`speakers`.** None can be set: no singer's name is shown on any
  plate. See "Who sings".
- **`beside`.** Not proposed on `end` (its caption needs line under
  line) and not needed on `names` (its two passages are of unlike
  length and already stand as two blocks). On `work` it is my second
  choice, after `"under": false`, and then only when the kit sets the
  unmarked passage of such a plate after the caption on a phone. The
  two trials below give the pictures, the costs and the condition.

### The first trial: `"under": false` on `work`

At 14:05 to 14:08 UTC the lead gave the build and the kit a new key for
a plate, `"under": false`. A second passage with as many rows as the
first is then not set line under line. It stands as a smaller block
under its own label, as the English of `names` does: beside the German
at 1280 with the caption under it, and after the caption on a phone.
The build's note gives the meaning of the key: the rows of the second
passage do not answer the first's one for one. On `work` they do answer
line for line. So here the key would be used for the look alone, and
that is the lead's to allow.

Made at 14:12 on a copy of the site in the scratchpad: the live kit,
and the built piece with that one key added to `work`. Pictures:
`trial-under-work-0-verbs-1280.png`, `-390`, `-320`, and the same three
widths for `1-rhyme` and `2-words`. The picture tool reported nothing.
My scan gives the same numbers as before for `names` and `end`.

| | as it is | `"beside": true` | `"under": false` |
|---|---|---|---|
| picture at 1280, Verbs and Rhyme | 1884 px high | 1396 | 1207 |
| picture at 1280, Words | 1884 | 1683 | 1502 |
| pictures at 390, the three tabs | 1914, 2012, 2496 | 2166, 2264, 2748 | 1734, 1832, 2316 |
| the caption begins, at 390 | 1538 px down | 1790 | 957 |
| the caption at 1280 | beside the rows | under both passages | beside the rows |
| the two labels | not shown | shown | shown |
| Rhyme, the stroke from row 14.0 to row 15.0 | not drawn | drawn | drawn at all four widths |
| Words, glosses and English | read as one text | apart | apart |
| the English | under each line | a block as large as the German | a smaller block |

What it gains over the page as it is: faults (a), (c) and (h) are gone
from this plate, and (g) is much less. On a phone the fourteen marked
lines take about 800 px and the caption comes straight after them, so
one screen holds nearly the whole pattern and the next holds the words
about it. At 1280 the whole speech, its marks, the English and the
caption are on one screen of 1207 px. The plate is then set as `names`
is, so two of the three plates look alike.

What it costs: the English no longer stands under its German line. At
1280 it is beside the passage, in smaller lines that do not keep step
with the German rows. On a phone it comes after the caption. A reader
with no German finds a line's English by counting, as on `names`. The
Verbs caption gives the sense of every verb, and the Words tab glosses
every line, so the loss is small. The English is a version made to be
sung and often says something else than its line.

It is the best of the three settings at every width, and it needs no
change to the kit. No caption or ground of `work` says the English
stands under the line (see the end of the second trial), so no word of
the reading has to change with it.

### The second trial: `"beside": true` on `work`

Made on a copy of the site in the scratchpad, read by the picture tool
through its `--site` flag. The built copy in `site/data/pieces/` was
not changed. Pictures (before the eighth mending):
`trial-beside-work-0-verbs-1280.png`, `-1-rhyme-1280`, `-2-words-1280`,
and the same three at 390. The picture tool reported nothing.

What it gains:

- Both labels show at every width, so fault (a) is gone from `work`.
- On Rhyme the dotted stroke from row 14.0 to row 15.0 is drawn, so the
  caption's sentence about the one first sound is shown (fault (c)).
- On Words the glosses stand alone under the German, and the English
  line is across the plate on the same row at 1280, where the two can
  be compared (fault (h)).
- The fourteen lines stand close. At 1280 the plate is 1396 px in place
  of 1884 (1683 on Words) and the rows take about 1000 px, so the whole
  pattern of the long rules and of the rhymes is on one screen. On a
  phone the marked German block is about 800 px on Verbs, also one
  screen, where line under line it is 1400.

What it costs:

- At 1280 the caption stands under the two passages and no longer
  beside the rows. In a window 800 px high the first rows and the
  caption are not on screen together.
- On a phone the English block (about 720 px) stands between the marked
  German and the caption, and the plate is taller: 2166, 2264 and 2748
  px at 390 for the three tabs, against 1914, 2012 and 2496.
- On a phone the English is no longer next to its German line. A reader
  with no German has to count lines to find it. On Verbs and Rhyme that
  English is the only help with the sense of a line.
- The English is set in the same large upright type as the German, so
  a passage that no tab marks looks as weighty as the one that all
  three mark. And the piece would then set its English three ways: two
  large blocks here, a small block on `names`, line under line on
  `end`.

My judgment, written before the key `under` existed. It now stands as
my second choice, for the case that `"under": false` may not be used on
this plate. Against the page as it is, the trial is the better plate at
1280 (`trial-beside-work-1-rhyme-1280.png` against
`tristan-work-1-rhyme-1280.png`). On a phone it is the worse one today,
and for one reason: the kit keeps the English of such a plate between
the marked lines and the caption (`trial-beside-work-0-verbs-390.png`).
If the unmarked passage stood after the caption, as the English block
of `names` does, the two-block setting would be the better one for
`work` at every width.

After writing that I read the brief of the eighth mending
(`remake/kit8/BRIEF.md`, as information). Its 2a asks for that very
change. Its 1b, 2b and 2e ask for the three faults that the trial cures
to be mended line under line as well. So what I would set depends on
what lands:

- If the unmarked passage goes after the caption on a phone: set
  `"beside": true` on the plate `work`. On a phone the marked lines
  then take about 800 px and the caption begins about 950 px down,
  where today it begins 1538 px down. At 1280 the whole speech and its
  rhymes stand on one screen. This holds even if the labels, the Rhyme
  stroke and the room for the English are all mended line under line.
- If it does not, and the stroke of the Rhyme tab from row 14.0 to row
  15.0 is drawn line under line: leave `work` as it is.
- If neither lands: set `"beside": true` all the same. A drawn stroke
  that the caption speaks of matters more than the costs on a phone.

No word of the reading stands against it. No caption or ground of
`work` says the English is under the line; the grounds say "the
English beside them". On `end` the caption and the grounds do say
"under each German line", which is why it is not open there.

## What the permission system refused

Nothing.

One thing was stopped, though not refused. I had left a wait running in
the background that watched `remake/KIT-CHANGES.md` for the section of
the eighth mending. The session ended it at its time limit, at about
13:39 UTC. I did not start it again and looked by hand after that.

## The final pictures

Taken on 2026-10-03 from 14:16:56 to 14:19:59 UTC (`date -u`), after a
build at 14:16:45. This was the second time. The first full set was
taken from 13:40:25 to 13:44:21 after a build at 13:39:58, and that is
the set I looked at. Then the build changed (14:05:49) and one line of
the live `plate.js` (14:08:58, the lead's new key `under`). So I built
and photographed again, with the same commands in the same order. The
built piece was the same file as before, and all 75 pictures of the
page came out the same to the byte as the first set. What I looked at
is what stands in `shots/`.

```
node build/pieces.mjs tristan                 14:16:45
node build/tools/check-reading.mjs tristan    no problems, no warnings,
                                              the printed notes are fit to print
node build/tools/shoot.mjs tristan --plate work  --widths 1280,390,360,320 --out <dir>   14:16:56 to 14:17:27
node build/tools/shoot.mjs tristan --plate names --widths 1280,390,360,320 --out <dir>   14:17:27 to 14:18:02
node build/tools/shoot.mjs tristan --plate end   --widths 1280,390,360,320 --out <dir>   14:18:02 to 14:18:36
node build/tools/shoot.mjs tristan --out <dir> --page                                  14:19:12 to 14:19:48
node build/tools/shoot.mjs tristan --page --widths 320 --plate work --out <dir>        14:19:48 to 14:19:59
```

`<dir>` was `remake/works/tristan/shots` the first time. The second
time it was a folder in the scratchpad, and the set was then copied
over the first, which it matched. The last line of every run, both
times, was "nothing reported; now look at the pictures". The build and
the fourth shoot command are the two commands of step 1 in ARTIST.md,
run again as its step 3 asks. The plates were photographed one at a
time.

One thing a critic who compares pictures should know. The whole-page
command writes the tab pictures at 1280 and 390 again. For `names` and
`end` at 390 its pictures are not the same to the byte as those of a
run with `--plate`. The size is the same, and the edges of the letters
and rules are smoothed a little differently (about one pixel in a
hundred differs by more than a tenth of full scale; an enlarged pair
shows nothing to the eye). I take the cause to be that the first plate
stands on its last tab, and so is taller, when the later plates are
photographed, which moves them by half a pixel. Nothing on the plates
differs. The pictures kept are those of the whole-page command.

What is in `shots/` (108 files):

- `tristan-<plate>-<n>-<tab>-<width>.png`: the eleven tabs at 1280,
  390, 360 and 320 (44 pictures).
- `tristan-page-1280-0.png` to `-8`, `tristan-page-390-0.png` to `-10`,
  `tristan-page-320-0.png` to `-10`: the whole page in slices.
- `tristan-folded-0-1280.png`, `-1-1280`, `-0-390`, `-1-390`: the two
  folded lists at the foot, opened.
- `tristan-names-1-grammar-1280-pointer-on-title.png` and three
  pictures named `tristan-window-…`: kit faults 1 and 3 and fault (g).
  These and the folded lists are of 13:43, taken with my probe.
- `tristan-record-390-playing.png`, `tristan-record-1280-playing.png`
  (13:55 and 13:56).
- Six named `trial-beside-work-…` and four named
  `trial-speakers-names-…`: the two trials, made from a copy of the
  site in the scratchpad (13:43:40 to 13:44:21). They do not show the
  page as it is.
- Nine named `trial-under-work-…`: the trial of `"under": false`, made
  the same way (14:11:53 to 14:12:15). They do not show the page as it
  is either.
- Four named `preview-kit8-…`: two Rhyme tabs under the mender's
  unfinished copy of the kit (14:02 to 14:06). They do not show the
  page as it is either. See "A look at the mender's copy" below.

The kit in the pictures of the page is the seventh mending's, with the
lead's one line of 14:08:58 in `plate.js` (`atlas.css` is dated
11:05:49, the kit's README 11:08:08). That line does nothing on a plate
without the key `under`, and no plate of this piece carries it. The
reading is the one dated 12:16:47. It did not change while I worked,
and neither did the hosted parts.

After the first set I ran my scan of all eleven tabs at the four widths
again. Its numbers (the size of each plate, the type size, where the
caption begins, the labels shown, the marks counted, the rows of tabs)
are the same as in round one, line for line. The Crossing tab again had
12 underlines, 4 slanted strokes and 8 end dots at each of the four
widths (13:45:36).

Then I looked at the pictures again: the 33 phone pictures of the tabs
set side by side by width, the eleven at 1280 whole, and the head and
foot of the page at 1280, 390 and 320. Nothing differs from what this
record says. The second set needed no third look, being the same to
the byte.

## The eighth mending

It had not landed when I handed in. `remake/KIT-CHANGES.md` ended with
the seventh mending at 13:39:47, 13:49:30, 13:51:39, 13:58:22 and
14:16:45 UTC (and at the time given in the last line of this record).
The live kit's files had not changed but for the lead's one line in
`plate.js`. So no picture of the page here shows the mending, and I
could not read its section.

The mending is being made in a copy of the kit, `remake/kit8/site`. Its
working record, `remake/kit8/RECORD.md`, and its brief were read as
information. From the brief, these pictures of mine will be out of date
when it lands:

- `work` and `end`, every tab and width, if the two labels are shown
  where the English stands line under line (fault (a); 2b in the
  brief).
- `work` and `end`, Rhyme, every width: the threads of sound (fault
  (c); 1b in the brief). See the look at the copy below.
- `work`, Words, every width, if the English line is given more room
  under the glosses (fault (h); 2e in the brief).
- `names`, every tab at 320, if the fourth tab stays on the first row
  (fault (e); 2c in the brief).
- `work`, every tab, by one apostrophe, when the lead curls the one in
  row 13.0.

The trial pictures named `trial-beside-work-…-390.png` will be out of
date too if the unmarked passage goes after the caption (2a in the
brief). That is the picture to take first, since the one thing I
propose turns on it.

Faults (f) and (g) are among those the brief only weighs, so I expect
them to stay. My fault 3 (the tap on a phone) stays with (g).

### A look at the mender's copy (14:02 to 14:06 UTC)

This is not the live kit and it was not finished: its `lens-rhyme.js`
was written at 13:44 and its `plate.js` and `atlas.css` at 13:59. I
changed nothing in it. The picture tool and my scan read it through
`--site remake/kit8/site`; its data is the live data. I looked because
the lead's question about the join and my one proposal both turn on
what the mending does.

- **The join holds.** `names`, Crossing, under the copy: 12 underlines,
  4 slanted strokes, 8 end dots at 1280, 390, 360 and 320, between the
  same rows as before (14:02).
- **My scan of all eleven tabs at the four widths** under the copy
  (14:04:52 to 14:05:42) differs from the live scan in two tabs only,
  the two Rhyme tabs of the plates set line under line.
- **`work`, Rhyme, every width.** One stroke more. A dotted stroke now
  runs from the point under row 14.0 word 1 to just over row 15.0 word
  1, with a gap where it passes behind the English line p:27.14. So the
  stroke the caption speaks of is drawn, and the key's words "inside
  the line and from line to line" are true
  (`preview-kit8-work-1-rhyme-1280.png`, `-390`). It reads well at both
  widths. Fault (c) is mended there.
- **`end`, Rhyme, every width.** The three points under each of the two
  places (rows 47.0 and 48.0, word 3 of each) have become one point
  under each and one dotted stroke from the first to just over the
  second. It runs to the right of the English line p:265.48 and touches
  nothing. The key's sample is now a dotted stroke with two end points
  (`preview-kit8-end-1-rhyme-1280.png`, `-390`). Better than the points.
- **One thing for the mender.** In the copy the key of `end`, Rhyme,
  sets the letters of the sound upright in its italic line. The key of
  `work`, Rhyme, still sets its one letter in italic. The two keys
  should be alike.
- **Not in the copy at that time:** the two labels on `work` and `end`
  (none shown), and four tabs on one row on `names` at 320 (still two
  rows). The plates' sizes and the places of the captions were the
  same as live, to the pixel but for one pixel on `work`, Rhyme, at
  320.
- The picture tool reported nothing on either Rhyme tab under the copy.

What this means for my second choice, `"beside": true` on `work`: the
stroke of the Rhyme tab is now drawn line under line, so the third case
of that judgment falls away. It turns on 2a alone. If the unmarked
passage of a two-block plate goes after the caption on a phone, set it.
If not, leave `work` as it is. My first choice, `"under": false`, does
not wait for the mending at all.

What a picture after the mending should be checked for on this piece:

1. `work`, Rhyme: the dotted stroke from row 14.0 to row 15.0, as in
   the copy, and the key's letter upright.
2. `work` and `end`: both labels at the head of the passage, at 1280
   and at 320.
3. `names` at 320: four tabs on one row.
4. `names`, Crossing: still 12 underlines, 4 slanted strokes and 8 end
   dots at every width. The mending changes how the strokes of Figure
   tabs find their way (its 1a, 1c and 1d), and this join must not lose
   a stroke by it.

Handed in on 2026-10-03 after a last check at 14:23:39 UTC. At that
time `remake/KIT-CHANGES.md` still ended with the seventh mending, the
reading was the one dated 12:16:47, the built piece was the one
photographed, and the live kit was as photographed.
