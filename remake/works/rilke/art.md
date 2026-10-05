# Rilke: the artist's notes

3 October 2026, 08:33 to 11:37 UTC. Words of the works are pointed at
by row and word number, as `node build/tools/check-reading.mjs rilke`
prints them. No line of the novel, of the poem or of either English
version is written out here.

The piece has three plates (`count`, `turn`, `panther`), ten tabs and
no shape lens.

## What I drew

Nothing. No lens of the piece is of kind `shape`, so ARTIST.md gives me
no drawing to make. There is no `site/js/pieces/rilke.js` and no
`site/css/pieces/rilke.css`; neither is needed. My work was steps 1 and
3: to look at every screen and say what is wrong.

## What I did not touch

I did not edit `reading.json`, `notes.md` or `exam.md` (I read them),
nor anything in `site/js/kit/`, `site/js/*.js`, `site/css/atlas.css` or
`build/`. For a trial I changed only the built copy,
`site/data/pieces/rilke.json`, and wrote it again from the reading with
`node build/pieces.mjs rilke` straight after each set of pictures. The
built copy now on disk is the reading's own. What I would set in the
reading is under "Proposed for the reading".

The permission system refused nothing.

## The pictures

All in `remake/works/rilke/shots/`.

- `rilke-<plate>-<n>-<tab>-<width>.png`: every tab of every plate at
  1280, 390, 360 and 320 px (40 pictures), and
  `rilke-page-<width>-<n>.png`, the whole page in slices (31).
  **Taken last, 11:29:25 to 11:30:47 UTC (`date -u`)**, straight after
  `node build/pieces.mjs rilke` and the checker ("no problems", "no
  warnings", "the printed notes are fit to print"). No picture was
  taken after them, and the built copy on disk is the reading's own.
- `proposed/`: the page as it would be with what I propose. Taken
  11:10 to 11:23 UTC on the built copy, on the same kit. `panther` with
  `"beside": true` and three turns: its four tabs at 1280, 1000, 768,
  390, 360 and 320. In `turn-only/`, the three turns and nothing else,
  at 360 and 320. In `pair-turns/` and `remarks-marked/`, two smaller
  trials named below.
- `close/`: parts of the last pictures, cut out or enlarged. Named
  where they are used below.

The kit last changed at 11:05:49 UTC (`plate.js`, `atlas.css`). That
is the seventh mending (10:13 to 10:40) and the mending of its one
fault at 11:06, as KIT-CHANGES.md tells them. The reading last changed
at 09:41:40. Earlier rounds (08:34, 08:45, 08:56, 09:15, 09:38, 09:51,
10:04, 10:17, 10:26, 10:42 and 11:19 UTC) were looked at and written
over. The seventh mending changed 37 of the 71 pictures, and I looked
at each of those again. The rounds of 10:42 and 11:19 and the last one
are the same, picture for picture, to the pixel: the fault mended at
11:06 never showed on this piece. Every fault below was seen in the
last pictures.

The picture tool's last line: **"nothing reported; now look at the
pictures"**. (At 09:15 it reported four rhyme brackets outside the
plate. The sixth mending took them in; what is left of that is fault 5.)

Heights of the plates as now set, in CSS px:

| plate, tab | 1280 | 390 | 360 | 320 |
|---|---|---|---|---|
| `count` Sentence | 1,148 | 2,474 | 2,602 | 3,073 |
| `count` Figure | 1,192 | 2,581 | 2,709 | 3,180 |
| `count` German | 1,262 | 2,650 | 2,778 | 3,285 |
| `turn` Sentence | 852 | 1,583 | 1,659 | 1,963 |
| `turn` Word | 1,147 | 1,934 | 2,050 | 2,387 |
| `turn` Figure | 892 | 1,623 | 1,699 | 2,023 |
| `panther` Subjects | 1,976 | 1,835 | 2,026 | 2,250 |
| `panther` Beat | 1,976 | 2,029 | 2,294 | 2,636 |
| `panther` Rhyme | 1,976 | 1,896 | 2,087 | 2,499 |
| `panther` English | 1,976 | 2,026 | 2,165 | 2,532 |

Since the seventh mending a turned line that the tab does not mark
keeps its two parts close. That took 173 px from `panther` Subjects
and 174 from English at 320, and 69 from English at 360. Nothing else
in the table changed.

At 1280 the caption of `panther` keeps beside the lines as the reader
goes down (`.side` is sticky on a wide plate), so there the marks and
their caption are on screen together:
`close/panther-beat-1280-window.png`, a window 900 px high. I had first
written that they were not; that was wrong and is withdrawn.

## Proposed for the reading

Three things, of which the examiner has set the third already. I set
none of them in `reading.json`.

### 1. On the plate `panther`: `"beside": true`

```json
"beside": true
```

Why. The poem is twelve lines in three stanzas, and three of its four
tabs are about the poem as a made thing: Subjects marks the first
subject of each stanza, Beat sets eleven rules of five beats over one
of four, Rhyme joins a b a b three times. As now set, line under line
with its English, twelve lines of italic part the twelve lines.

- At 1280 and at 1000 the plate is 1,976 and 1,878 px on every tab, and
  a window 900 px high shows five or six of the twelve lines
  (`close/panther-beat-1280-window.png`). The three stanza heads are
  never in one view, nor the short last rule with the eleven long ones.
  With `beside` the plate is 1,207 / 1,318 / 1,207 / 1,351 px (Subjects
  / Beat / Rhyme / English; at 1000, 1,169 / 1,289 / 1,218 / 1,353),
  the poem stands whole at the left and the English level with it,
  line for line, at the right.
  `rilke-panther-1-beat-1280.png` against
  `proposed/rilke-panther-1-beat-1280.png`.
- Rhyme. Now each rhyme reaches over three lines of type, so it is a
  square bracket 300 px tall in the margin, and the two sounds that
  come back in rows 1.2 and 1.3 cannot be joined: three points stand
  under each place. With `beside` the six rhymes are arcs that
  interlock, and each sound is dotted from row 1.2 to row 1.3.
  `rilke-panther-2-rhyme-1280.png` against
  `proposed/rilke-panther-2-rhyme-1280.png`.
- The two labels of the plate ("Rilke, 1902 or 1903" and "Jessie
  Lemont, 1918") are shown nowhere while it is set line under line.
  With `beside` each stands over its poem.
- At 390 the German stands whole in 718 px, one screen; now a screen
  holds the first stanza and one line more
  (`rilke-panther-0-subjects-390.png`). On Beat the dots of the voice
  no longer stand right over a line of English
  (`close/panther-beat-390-dots.png` against
  `proposed/rilke-panther-1-beat-390.png`).
- At 320 all six rhyme brackets stand inside the plate and apart, which
  they do not now (fault 5): `proposed/rilke-panther-2-rhyme-320.png`.
- English, at 1280: each of the six pairs carries its number at both
  ends, level across the two columns
  (`proposed/rilke-panther-3-english-1280.png`).

What it costs, all of it below 940 px, where two passages stand one
under the other:

- English tab: the two ends of a pair, now joined by a stroke from a
  line to the line under it, are then a screen apart and tied by number
  and color only (`proposed/rilke-panther-3-english-390.png`). On a
  phone that one tab is better as it is now. The other three are better
  with `beside`.
- The plate is longer (Subjects / Beat / Rhyme / English):

  | width | now | with `beside` |
  |---|---|---|
  | 768 | 2,236 / 2,342 / 2,222 / 2,489 | 2,390 / 2,497 / 2,377 / 2,644 |
  | 390 | 1,835 / 2,029 / 1,896 / 2,026 | 1,961 / 2,156 / 2,023 / 2,152 |
  | 360 | 2,026 / 2,294 / 2,087 / 2,165 | 2,195 / 2,464 / 2,257 / 2,334 |
  | 320 | 2,250 / 2,636 / 2,499 / 2,532 | 2,612 / 2,998 / 2,861 / 3,033 |

- On Subjects, Beat and Rhyme the English, which those tabs do not
  mark, then stands between the marked poem and its caption: 976 px of
  it at 768, 695 at 390, 738 at 360, 931 at 320. That is fault 1
  below, which this plate does not have now. When the kit mends it,
  this cost goes.
- At 320 eleven of the twelve English lines turn, two of them badly
  (five before the seventh mending); at 360 two turn, both at a comma;
  at 390 none. See "If `beside` is set on the poem" below.

My judgment: set it, and most of all if fault 1 is mended. If the lead
holds that the phone's English tab matters more, leave the plate as it
is; faults 3 to 6 below are then the kit's to mend for it.

### 2. On the plate `panther`: three turns

```json
"turn": { "1.3": 3, "2.0": 2, "2.1": 1 }
```

Good with or without `beside`. The page's own turns now, after the
seventh mending (none at 390):

| width | rows that turn, and the word each turns after |
|---|---|
| 360 | 2.0 after 3; 3.0 after 1; 3.1 after 2 (its full stop); on Beat alone, 3.2 after 3 |
| 320 | 1.0 after 1; 1.1 after 2 (its comma); 1.3 after 2; 2.0 after 3; 2.1 after 3; 2.2 after 5; 3.0 after 1; 3.1 after 2 (its full stop); 3.2 after 3 |

- Row 1.3 (words 0 to 5): the page turns after word 2, a numeral, and
  parts it from its noun (word 3). After word 3 the first part is the
  whole phrase and the second is words 4 and 5, which the English tab
  marks as pair 4. Seen at 320.
- Row 2.0 (words 0 to 5): words 3 to 5 are one phrase in the genitive
  that hangs on the noun at word 2. The page turns after word 3, parts
  that phrase and leaves its first word at the end of the first part.
  After word 2 the line is noun phrase, then genitive phrase, and the
  first part is just the three words that Subjects marks. Seen at 360
  and 320.
- Row 2.1 (words 0 to 5): the page turns after word 3, an adjective,
  and parts it from its noun (word 4). After word 1 the second part is
  the whole phrase with its verb. Seen at 320. This is the least sure
  of the three: the first part is then two short words with one beat
  and ends at 62 px, where the page's own two parts end at 176 and
  118. Rows 1.0 and 3.0 open with two words in the same way.
- Row 2.2: withdrawn. I had asked for a turn after word 3, since the
  page left a preposition (word 4) at the end of the first part. The
  seventh mending keeps it with its noun (word 5), the line turns
  after word 5, and that is good.
- The other turns are good as the page makes them, two of them at the
  line's own stop. I leave them.

All fit. Measured on the trial at 320, where a line may run to 258 px
from the plate's edge, the two parts end at 186 and 107 (row 1.3), 124
and 223 (2.0), 62 and 232 (2.1); on Beat, where the beats are bold, a
pixel or two more. On Beat each part keeps its part of the rule. The
height of the plate does not change.

Pictures. The page's own: `rilke-panther-1-beat-320.png`,
`rilke-panther-0-subjects-320.png`, `rilke-panther-2-rhyme-360.png`.
Proposed: `proposed/turn-only/rilke-panther-1-beat-320.png`,
`proposed/turn-only/rilke-panther-0-subjects-320.png`,
`proposed/turn-only/rilke-panther-2-rhyme-360.png`, and with `beside`
`proposed/rilke-panther-2-rhyme-320.png`.

I could not run the checker on it, since I may not edit the reading.
All three are rows of verse on the plate and all three numbers are in
range, so it should print three `turn:` lines and no problem.

### 3. On `turn`, Figure: `"join": "none"` (set already)

The examiner set it in the reading at about 09:05 UTC (exam.md, "What
the page joins"), and I agree. The lens draws a map from one part
(word 392) to three (402, 406, 408). Before the change the page drew a
stroke to the first two at 1280 and none to the third, which stands two
lines lower, and at 390 it drew none at all. Now the four words are
ruled in their two colors, with the key, and look the same at every
width: `rilke-turn-2-figure-1280.png`, `rilke-turn-2-figure-390.png`.
Nothing more to set.

### Kept as the poet set them

- `"beside": true` on `count` and `turn`. I tried both without it on
  the built copy (08:50 UTC). The plates are shorter on a phone, but
  both labels vanish and Rilke's German becomes small gray italic under
  its translation. With it, at 1280, the two stand as equals under
  their labels and the compare tab numbers its pairs across. Keep it.
  What it costs on a phone is fault 1.
- The three headings and the ten tab names. Each reads well and none
  wraps badly. At 320 the heading of `panther` turns into two balanced
  lines and its four tabs still fit one row.
- No plate shows a speaker's name, so there is no `speakers` to
  propose.

## Faults that are the kit's, worst first

Still there after the seventh mending, which mended none of the eight
(what it did mend is under "Mended under me"). I mended none of them
and worked round none. Each was seen in the last pictures.

### 1. Phone: the passage a tab does not mark stands between the marks and their caption

- `count`, Sentence and Figure, at 390, 360 and 320. Neither tab marks
  the German. It is set in the same type and leading as the marked
  English and stands between the English and the caption with its key:
  983 px of it at 390, 1,036 at 360, 1,249 at 320. The key that says
  what the three colors are is a screen and a half below the last mark.
  `rilke-count-0-sentence-390.png`, `rilke-count-1-figure-390.png` and
  the same at 360 and 320.
- `turn`, Sentence, Word and Figure, at 390, 360 and 320. None marks
  the German: 398 px of it at 390 and 360, 466 at 320, between the
  English and the caption. `rilke-turn-0-sentence-390.png`,
  `rilke-turn-1-word-390.png`, `rilke-turn-2-figure-390.png`.
- The README promises otherwise: "A version in another language always
  shows; on a narrow plate it goes after the caption on the tabs that
  do not mark it (`pair-after`), and on those tabs it is set as plain
  prose." In `plate.js`, `arrange()` (line 587 as I write), `after` is
  `idle && !off && !twin && ...`, so a plate with `"beside": true`
  never gets it; and `.pair-idle:not(.is-twin)` in `atlas.css` leaves
  a twin in loose leading. Both plates carry `pair-idle` on these tabs
  and never `pair-after`.
- What I would expect: below 940 px, a second passage in another
  language that the tab does not mark goes after the caption and is set
  close, with `beside` or without. `count` would then show its 985 px
  of marked English and the caption straight after.
- The poem would have the same fault if `beside` is set on it (see
  proposal 1).

### 2. `turn`, Word, 1280: bare paper under the English

The caption stands under the shorter German in the right column
(`side-in`), and the seven notes run on under it to 1,100 px. The
English at the left ends at 671 px. Under it are 429 px of bare paper,
and the plate is 1,147 px where its other two tabs are 852 and 892.
(The sixth mending set the notes larger, so this grew by 52 px.) The
README sends a key much taller than its caption across the plate
(`keys-wide`), but only where the caption is under both passages. The
same is wanted here: the notes across the plate, under both columns.
`rilke-turn-1-word-1280.png`.

### 3. A plate set line under line shows neither of its labels

`panther` as now set, every tab, every width: "Rilke, 1902 or 1903"
and "Jessie Lemont, 1918" are in the reading and are shown nowhere on
the plate. The reader is told whose English it is only by the caption
of the fourth tab. Proposal 1 cures it for this plate; the kit has it
on every plate set line under line.

### 4. `panther`, Beat, 390 to 320, set line under line

The dots of the voice stand under the rule and right over the English
line: about 14 px above its letters and 25 px below the line they
belong to, so they read as marks on the English.
`close/panther-beat-390-dots.png`. On a phone the German is at its
smallest, 16.5 px, and the English under it is 14.5 px, so the two
differ in size by little. Proposal 1 cures both for this plate.

### 5. `panther`, Rhyme, 320: one bracket on the plate's edge, two on one another

What is left of the four reports of 09:15. At 360 and 390 all six
brackets now stand inside the plate.

- 320: the upright of d (rows 2.1 and 2.3) stands on the plate's right
  edge and cannot be seen; only its two strokes run out to the edge.
  `close/panther-rhyme-320-margin.png`. The tool no longer counts it.
- 320: the uprights of e (rows 3.0 and 3.2) and f (rows 3.1 and 3.3)
  lie on one another between rows 3.1 and 3.2, so the two rhymes read
  as one line there. `close/panther-rhyme-320-e-f.png`.
- With `beside` neither happens: `proposed/rilke-panther-2-rhyme-320.png`.

### 6. `panther`, Rhyme: the smallest marks carry the most

- The rhyme letter at each line's end is 13.5 px light italic beside
  verse of 27 px at 1280: `close/panther-rhyme-1280-letter.png` (true
  size). The numbers of a compare pair were made larger in the fourth
  mending; these want the same.
- Set line under line, the two sounds that come back are three points
  under each place, and the two samples in the key are three points
  each. Slate and umber cannot be told apart at that size, and the key
  says "coming back from line to line" where no line joins them.
  `close/panther-rhyme-1280-threads.png` and
  `close/panther-rhyme-1280-key.png` (both three times true size).
  With `beside` the strokes are drawn and the samples are clear.
- In row 1.2 the umber of the sound that comes back (word 6) stands
  next to the ochre of rhyme a (word 7). They are hard to tell apart
  at true size.

### 7. `turn`, 320: the label of the German

"Rilke's German: the last sentence" turns with its last word alone on
a second line (`close/turn-label-320.png`). A balanced label would
break after the colon. At 360 and 390 it fits one line.

### 8. Small things

- `count`, Sentence: the first word of a ruled phrase alone at the end
  of a line, with a stub of rule under it. At 390 words 183, 203, 232
  and 257; at 360 words 187 and 232; at 320 word 248.
  `rilke-count-0-sentence-390.png`.
- `count`, Figure: the key repeats one red sample five times, once for
  each numbered step. One sample would do.
  `rilke-count-1-figure-1280.png`.
- Head of the page, 320 only: the line over the title breaks after the
  dot between author and title, and the dot hangs at the end of the
  first line. `rilke-page-320-0.png`.
- `panther`, 360: row 3.2 turns on Beat and on no other tab. On the
  other three it just fits (it ends at 297 px, where a line may run
  to 298). On Beat the beats are bold, the line is a pixel or two
  wider, and it turns after word 3. So one line breaks and mends as
  the reader goes from tab to tab. `rilke-panther-1-beat-360.png`
  against `rilke-panther-2-rhyme-360.png`.
- New with the seventh mending. A turned line that the tab marks in
  one part only keeps the room for marks under both parts. `panther`,
  Subjects, 360 and 320, rows 3.0 and 3.1: the marks are all in the
  second part, and the first part stands 56 px over the second, where
  the parts of an unmarked turned line are 21 px apart. The same on
  English at 320 in rows 1.1 and 1.3. Wanted: room under a part only
  where that part carries a mark. `rilke-panther-0-subjects-320.png`,
  `rilke-panther-3-english-320.png`.

## If `beside` is set on the poem: two more for the kit

a. Fault 1 then holds for `panther` on Subjects, Beat and Rhyme, with
   the heights given under proposal 1.

b. The turns of the English lines. The seventh mending reaches the
   second passage in part: an article or a short preposition no longer
   ends the first part of a line there. Of the five English lines I
   had listed as turning badly at 320, three are good now: p:0.0 turns
   at its comma, and p:2.0 and p:2.2 no longer end their first part on
   an article. Still in the kit:

   - The room kept at a line's end for a rhyme's letter and its arc is
     taken from the English lines too, which carry no letter
     (`atlas.css`, `.is-twin.turns .beside .pr.k-v`). At 320 a line
     has 246 px for that reason and would have 264. p:1.1 is 253 px
     long: it turns only because of that room.
   - `plate.js` looks for the stop or comma nearest the middle only in
     the rows of the first passage (`for (const r of rowList)`), and
     the checker refuses a `turn` for a row of the second
     (`check-reading.mjs`, line 312: a row whose id begins `p:`),
     though `plate.js` takes one. So an English line turns where the
     browser balances it.
   - The kit's list of English words that lead to the next has the
     articles and the prepositions of up to four letters. It has no
     demonstrative and no longer preposition.

   At 390 no English line turns; at 360 two, both at a comma. At 320
   eleven turn, two of them badly:

   - p:0.3 after word 3, a demonstrative, parted from its noun
     (word 4);
   - p:1.1 after word 3, a preposition of six letters, left at the end
     of the first part.

   `proposed/rilke-panther-3-english-320.png`.

   Wanted: no room for a rhyme's letter where a row has none, and
   `turn` for the rows of a second passage set as a block. I would
   then set on the plate:

   ```json
   "turn": { "1.3": 3, "2.0": 2, "2.1": 1, "p:0.3": 4, "p:1.1": 2 }
   ```

   Tried on the built copy, where `plate.js` takes them:
   `proposed/pair-turns/rilke-panther-3-english-320.png`. All fit: no
   part ends more than 229 px from the plate's edge, where a line may
   run to 258.

## Mended under me, and so not reported

By the lead, in the kit:

- `count`, 390: in my first pictures (08:34 UTC) some lines of prose
  ended far short of the measure, because a long marked run was held
  whole. Gone since a held run in prose is at most 14 letters.
- `turn`, Word: the glosses of words 433 and 434 stand close on one
  line. They now have a hairline between them.
- `panther`, Rhyme, 360 and 320: at 09:15 UTC four brackets stood
  outside the plate. Lines now stop short of the edge and the tool
  reports nothing. What is left is fault 5.
- Remarks and notes were plain text, so a German word quoted in one
  could not be told from the sentence about it. `*word*` in a `say` or
  a `note` now stands upright in the italic, and the remarks are a size
  larger and darker on a wide plate. What is left is in the reading
  (below).
- The seventh mending, where it touches this piece:
  - `panther`, 320, row 2.2 ended its first part on a preposition
    (word 4). The preposition keeps with its noun now and the line
    turns after word 5. I have taken that row out of proposal 2.
  - `panther`, 360 and 320: a turned line that the tab does not mark
    keeps its two parts close. At 320 the plate is 173 px shorter on
    Subjects and 174 on English; at 360 it is 69 px shorter on
    English. `rilke-panther-0-subjects-320.png`.
  - `panther`, 320, row 1.0 now turns after word 1 (it was after
    word 2). Both are good.
  - `count`, 360: a word of one letter (word 227) stood at the end of
    a line of prose. It goes over with the word after it.
  - A remark or a note no longer leaves its last word alone on a
    line: `count` German remark 5, `turn` Word note 7.
  - 320: the tabs stand a little closer. The four of `panther` kept
    one row before and do now.
  - With `beside` on the poem, three of five English lines that turned
    badly at 320 are good (see "If `beside` is set on the poem").

By the examiner, in the reading:

- `turn`, Figure: `"join": "none"` (proposal 3).
- The titles in the line under the title and in the five source lines
  under "What Auden said" are marked and now stand upright in the
  italic (09:41 UTC). `rilke-page-1280-0.png`.
- The Beat caption of `panther` named a line by its number, and the
  page numbers no lines. It now says the second line of the last
  stanza (09:41 UTC).

## In the reading: not mine to change

1. Words quoted in the remarks and notes want marking. The kit now
   sets `*word*` upright in a remark or a note, and the reading marks
   none yet. The lead says the critic marks them. The places, as
   numbered on the page:

   - `count`, German. Remark 1: the German verb, the German word of
     two letters and the English one of two. Remark 2: the same two
     small words. Remark 3: its first word. Remark 4: the three German
     words after "says". Remark 5: its first word. Remark 6: the three
     German words after "is" and the two that end it.
   - `turn`, Word. Note 2: the five German words after "are". Note 3:
     its first word and the two German words after the colon. Note 4:
     the poem's title. Note 6: the four German words after "begins",
     the five after "ends on", the noun after "derives" and the Latin
     word.
   - `panther`, English. Remark 1: its first word and the three German
     words after "turn to". Remarks 4 and 5: the first two words of
     each.

   As it is now: `close/count-german-1280-remarks.png`,
   `close/turn-word-1280-notes.png`. With remarks 2 and 3 of `count`
   marked, tried on the built copy at 11:22 UTC:
   `proposed/remarks-marked/count-german-1280-remarks.png`.
2. The line under the title. The examiner marked its three titles, and
   they stand upright. The brackets round the second title are outside
   the marks, so they are italic and the first leans into the upright
   capital after it: `close/where-1280-bracket.png` (three times true
   size). If the brackets were inside the marks they would stand
   upright with what they hold.
3. `turn`, Word. Five of the seven notes (3 to 7, on words 396 to 397,
   406, 408, 433 and 434) gloss a German word that stands in the German
   sentence beside the English (German words 339 to 340, 346, 348, 373
   and 374, as exam.md gives them), and the tab marks nothing there.
   The reader finds each by eye in the other column, or a screen lower
   on a phone. The examiner leaves it to the lead as a choice of
   design. My view: leave it as it is. A second note on each German
   word would double the notes, and the page has no way yet for one
   note to rule two places. If the kit gave a note a second place,
   ruled and without a gloss, these five would be worth tying, and
   fault 1 would no longer touch this tab. `rilke-turn-1-word-1280.png`.
4. `turn`, Sentence. Colors go by the order in which the tags first
   come, so red falls on the three shorter sentences that lead up, and
   the point, which the caption is about, takes the fourth color,
   green. It is exact; I only note where the eye goes first.
   `rilke-turn-0-sentence-1280.png`.
5. The label "Rilke's German: the last sentence" (fault 7) would fit
   one line at 320 if it were shorter. The label is the poet's.

I found no fact, mark or caption that the pictures show to be wrong.

## Looked at and right as it stands

- `count`, 1280, all three tabs: two columns under their labels, the
  caption under both, the six pairs of the German tab numbered at both
  ends. `turn`, 1280, Sentence and Figure: the caption under the
  shorter German.
- No mark sits on a word, no label is cut off and no arc crosses the
  text, at any of the four widths. Two marks lie on one another only
  in fault 5.
- Type: prose 20 px on a phone, verse 16.5 px (the kit's floor); the
  smallest thing is the rhyme letter (fault 6).
- `panther`, 360 and 320: row 3.1 turns at its own full stop and the
  pause mark of Beat stands at the end of the first part. A turned line
  of five beats shows its dots as 2 + 3, 3 + 2 or 1 + 4, so at 320 the
  last line's four must be counted.
- `count`, 390: a line of prose ends at the dash inside word 281, and
  the rule of one phrase ends there and the next begins on the line
  after. It reads well. `rilke-count-0-sentence-390.png`.
- The two Figure tabs (`count`, `turn`) are as they were: the seventh
  mending's new rules for strokes change nothing on them.
- No row of the piece is cut at a dash, so the sixth mending's change
  to such rows shows nothing here. The head of the page now reads "The
  passages".
- The head of the page, "What Auden said", "Read on" and the sources,
  at all four widths, but for the small things above.

## To see a proposal again

`remake/works/rilke/look/trial.mjs` changes the built copy only.
`probe.mjs`, `shape.mjs` and `width.mjs` in the same folder print how a
plate has laid itself out, in numbers and never in words:

```
node remake/works/rilke/look/trial.mjs panther.beside=true 'panther.turn={"1.3":3,"2.0":2,"2.1":1}'
node build/tools/shoot.mjs rilke --out <dir> --plate panther --widths 1280,390,360,320
node remake/works/rilke/look/probe.mjs 320 panther 3
node build/pieces.mjs rilke
```

The last line writes the built copy again from the reading.

