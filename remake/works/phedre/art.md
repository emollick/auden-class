# Phèdre: the artist's record

Piece `phedre`, "Racine's line". Three plates (`names`, `sight`, `slip`),
ten tabs, no shape lens. So I drew nothing: there is no script and no
stylesheet of mine. The job was steps 1 and 3 of ARTIST.md: look at every
screen of every tab and report.

Nothing in this file writes out a line of the play, of Boswell's English
or of Auden. Words are pointed at by row and word number, as
`node build/tools/check-reading.mjs phedre` prints them (`p:` marks a row
of the English; words count from 0). "The cut" is the place after the
sixth syllable of a French line. In the names of my enlarged pictures a
row is counted from 1 down the passage (`row-5` of `names` is row 1.1).

I did not edit `reading.json`, `notes.md` or `exam.md`, and I edited no
file of the kit or the build. What I would set in the reading stands in
section 5, "Proposed for the reading".

One command was refused: a wait (`sleep`) set before a check of file
times. I did not try it another way; I went on with other work and looked
at the times later. Nothing else was refused. Once, at 11:36, the session
could not judge a measuring command for a moment and said to try it
again; I ran the measuring again and it went through.

## 0. When, and how I looked

- I started at 08:25 UTC on 3 October, as the fourth mending of the kit
  ended. The kit was mended three times more while I worked: the fifth
  mending (08:35 to 08:55), the sixth (09:20 to 09:52) and the seventh
  (10:13 to 10:40, with a fault of its own mended at 11:06). I read the
  new part of `remake/KIT-CHANGES.md` after each (at 08:54, 09:43, 10:40
  and 11:09), as the lead's messages asked, and after each I built again,
  took every picture again and measured again.
- The reading was changed under me by other hands: at 09:11 (a `join` on
  the Break tab, the examiner's change 14), at 09:18 (a `turn` on each
  plate, the examiner's change 15; see section 5), and at 09:46, 09:51
  and 10:18 (marks in the remarks and under "What Auden said", one
  caption). It has not changed since 10:18:35.
- Every picture named in this file was taken after the last change to
  the kit (11:05:49) and to the reading. The times are in section 7.
  Pictures from before were thrown away, and I report no fault that I do
  not still see in the last pictures.
- The fault mended at 11:06 (a line turning after a dash that joins two
  words) could not touch this piece: no word of its three passages, in
  French or English, is two words joined by a dash. I took everything
  again all the same, and the pictures came out the same to the byte as
  those of 10:41 to 10:48.
- The standard set: `node build/tools/shoot.mjs phedre --out
  remake/works/phedre/shots --page` (1280 and 390), then the same with
  `--widths 320,360,375,1024`, `--widths 980 --plate slip` (the width at
  which the two columns begin) and `--widths 600 --plate slip --lens 0`.
- Scripts of my own, kept in my scratch folder, which read the served
  page as `shoot.mjs` does and write nothing into the project but
  pictures in `shots/`: one lists after which word each line turns, on
  every tab, at 320, 340, 360, 375, 390, 412 and 430; one samples every
  stroke of a tab against the box of every word and can photograph a
  part of a plate enlarged (`zoom-...`); one measures the baselines of
  the two versions and the bare paper under them; one sets two pictures
  side by side (`trial-...`).
- Trials were made in the built copy `site/data/pieces/phedre.json`
  only, photographed (`trial-...`, two states side by side), and undone
  each time by `node build/pieces.mjs phedre`. The last build is from the
  reading alone; I checked that it holds exactly the reading's `turn`
  and `join`.

## 1. What I drew

Nothing. The piece has no shape lens, and ARTIST.md says not to invent
one. All ten tabs are the kit's own lenses: three Beat tabs ("Count",
"Halves", "Ear"), three Figure tabs ("Figure" twice, "Break"), one Rhyme,
one Word ("Words") and two compare tabs ("English").

## 2. Faults that are the kit's to mend, worst first

Each was seen in the last pictures (section 7).

### 2.1 The key of a Beat tab shows two dots that are on no line

All three Beat tabs (`names` "Count", `sight` "Halves", `slip` "Ear"), at
every width. On the lines there are two dots only: a large black one on
the sixth and twelfth syllables, and a small red one on each lighter
accent. The key has three rows of dots: a large black one ("a stress in
the voice, where the accent must fall"), a large red one ("a stress
somewhere else") and a small black one ("a light stress"). No large red
dot and no small black dot is drawn anywhere on these three plates, and
the small red dot that is drawn has no row. A reader who matches by eye
finds nothing.

- Pictures: `zoom-names-count-1280-key.png` (the key) beside
  `zoom-names-count-1280-rows-1-2.png` (the dots as drawn). The same in
  `phedre-sight-1-halves-390.png` and `phedre-slip-0-ear-1280.png`.
- Why: `lens-beat.js` draws a light stress off the fixed accents small
  and red (size says how strong, color says where); its key gives "red"
  a row at full size and "small" a row in black.
- To mend: where every stress off the accent is a light one, give the
  key one row with the dot as it is drawn, small and red.
- A doubt for the lead, since the words are the kit's: red is the kit's
  color for a stress off the pattern. In this measure only the sixth and
  the twelfth are fixed (the Count caption says so), so the lighter
  accents break nothing. "Somewhere else" in red reads as a fault.

### 2.2 On the English tabs, wide, the two versions are out of register

`slip` "English" at 1280 and 1024. The eight French rows and the ten
English rows are set at one pitch (65.5 px at 1280), and every English
row stands 21 px lower than a French row (at 1024 too): French baselines
at 149.5 px and every 65.5 after, English at 170.5 px and every 65.5
after. On the other three tabs of the plate the two first lines are
2 px apart. Two columns at one pitch, a third of a line apart, look like
a slip, and this is the tab whose whole matter is one version against the
other.

`names` "English" at 1280 and 1024: the first three English rows stand
24 px lower than the first three French. Tie 2 joins French row 0.2 to
English row
p:12.2, 24 px apart; tie 3 joins rows 39 px apart. Near level, not
level.

- Pictures: `phedre-slip-3-english-1280.png`,
  `phedre-names-2-english-1280.png`, and the two at 1024.
- Why: on a compare tab an English row is given a tall line (type and
  band together) with the words in the middle of it; a French row keeps
  its words at the top and the band beneath. Half the band is the 21 px.
- To mend: set the English rows as the French are, band beneath, so the
  first lines are level. The kit has the setting already: in a trial
  with `"beside": true` on the plate (both versions in one type) the
  rows of the two columns stand level, line for line
  (`trial-beside-slip-english-1280.png`, right). It is the plain
  version beside, as on these three plates, that lacks it. I do not
  propose `beside` itself: section 5.4.

### 2.3 `names` "English" in one column: tie numbers on a speaker's name

At 768 and under. The numbers 1 and 2 under English row p:12.2 stand
0.4 px over the small capitals of the second speaker's name, which
follows that row. They read as part of the name's line. Measured at 390,
360 and 320 (0.4 px), at 768 (0.5 px) and at 600 (1.7 px); at 1280 there
are 15 px between.

- Picture: `zoom-names-english-390-speaker.png`; whole in
  `phedre-names-2-english-390.png`, `-360` and `-320`.
- To mend: a speaker's name that follows a row with marks under it keeps
  the room for marks above it.

### 2.4 Wide: the caption and key stand under the English, and the French column is bare below

On `sight` and `slip`, at 1280 and (for `slip`) 1024, the caption and the
key stand under the English, the shorter column (`side-in`). The key of a
Beat tab is long (six marks, four remarks), so the right column runs far
below the French. Bare paper under the French:

| tab | 1280 | 1024 |
|---|---|---|
| `slip` Ear | 480 px | 595 px |
| `sight` Halves | 414 px | (caption below both) |
| `sight` Words | 312 px | |
| `sight` Figure | 274 px | |
| `slip` Break | 249 px | 322 px |
| `slip` Rhyme | 224 px | 277 px |

On `slip` "Ear" at 1280 the right column is 1094 px tall and the French
614. This is ARTIST.md's "a key ... beside the caption that is longer
than the passage", and the key to the marks stands a screen away from the
marks.

- Pictures: `phedre-slip-0-ear-1280.png`, `phedre-slip-0-ear-1024.png`,
  `phedre-sight-1-halves-1280.png`.
- To mend: where caption and key under the second version overrun the
  first by more than about 200 px, set the marks' key and the numbered
  remarks under the first version, as `low` does for a passage alone.

### 2.5 A long key poured into three columns parts its own lists

`names` "Count" at 1280 and 1024, `sight` "Halves" at 1024
(`keys-wide`). The six marks of the key fall three and three over the
first two columns. The numbered remarks follow in the second column and
break into the third: after the third remark (`names` at 1280), after
the second (`names` at 1024), after the first (`sight`), where remark 1
stands alone at the foot of the second column and remarks 2 to 4 at the
head of the third. The caption above them fills the left three fifths
of the plate, and the rest of that band is bare.

At 600 (`slip` "Ear") the same key stands in a column about 175 px wide
beside the caption, some 640 px tall against a caption of 270.

- Pictures: `zoom-names-count-1280-key.png`,
  `phedre-sight-1-halves-1024.png`, `phedre-slip-0-ear-600.png`.
- To mend: let a column break fall before the first numbered remark,
  never among the marks or among the remarks.

### 2.6 A tie that sits on the pause

Where a final *e* is dropped at the cut, the tie under the two syllables
(a small arc) meets the top of the pause's double stroke, and the two
read as one mark like a small anchor.

- `names` row 1.1, words 3 and 4, wherever the row is whole (1280,
  1024, 390): `zoom-names-count-1280-row-5.png`,
  `zoom-names-count-390-row-5.png`.
- `slip` row 0.1, words 2 and 3, and row 0.6, words 5 and 6, at 1280 and
  1024: `zoom-slip-ear-1280-row-2.png`, `zoom-slip-ear-1280-row-7.png`.
- Where such a row turns at its cut (these two of `slip` at 390 and
  under, `names` 1.1 at 340 and under) the two syllables stand on two
  lines and no tie is drawn, so the dropped *e* there has no mark at
  all. I see no way to draw it; I name it so that it is known.
- Why: the pause begins 4 px above the count's rule, and the lowest
  point of a tie is 4.5 px above it.
- To mend: begin the pause at the rule where a tie stands over it.

### 2.7 "Break" at 390 and under: one of the reading's two joins is drawn

The reading joins part 1 to part 2 and part 3 to part 4 (the four forms
of one verb, two and two, as the caption pairs them). At 412 and wider
both strokes are drawn. At 390 and under row 0.1 turns at its cut, part 2
stands at the head of the turned half, and only the second stroke is
drawn. The examiner's record says the same and leaves it to the lead.

- Pictures: `phedre-slip-2-break-1280.png` (two strokes),
  `phedre-slip-2-break-390.png` (one), `trial-break-join-430.png` and
  `trial-break-join-390.png` (as it stands, left; with no join, right).
- What is drawn is true at every width, and both strokes are clean: see
  section 4. Whether the plate should say less on a phone is for the
  lead; section 5 gives the setting that makes every width alike.

### 2.8 The English lines turn off their stops, and on "English" their halves stand a line apart

`slip`, at 320 and 340. Four English lines turn at 320 (rows p:91.1 to
p:91.4), two at 340 (p:91.1 and p:91.4). Those two turn badly at both
widths:

- p:91.1 turns after word 3. Word 2 ends a sentence; word 3, the
  conjunction that opens the next, is left alone at the end of the
  first part.
- p:91.4 turns after word 2, between an adjective and its noun; the
  noun, which ends the sentence, then heads the second part.

The rule of the fifth mending (turn at the stop nearest the middle) is
applied to the lines of the first passage only. A line of a version set
beside it is left to the browser's balance. Applied to these lines the
rule would turn p:91.1 after word 2 and p:91.4 after word 3 (their
stops stand at 0.40 and 0.58 of the line), and it would move no other
English line of this piece to a worse place.

On the "English" tab there is a second thing. The English stands at an
open pitch there, and the second part of a turned line stands 39 px
under its first, exactly as far as the next line: only the indent
tells. In the French above it, since the seventh mending, a turned
line that the tab does not mark keeps its two parts 21 px apart, with
the room after. The four English lines that turn are not marked
either.

- Pictures: `phedre-slip-3-english-320.png`;
  `trial-turn-slip-english-320.png` (as it stands, left; with the two
  turns set, right).
- To mend: let the stop rule, and the close setting of the seventh
  mending, hold for the lines of verse of a version beside
  (`is-beside`) as they do for the first passage. Section 5 gives the
  `turn` that would do the first by hand, and why it cannot be set now.

### 2.9 A line that turns on the Beat tab and on no other

At one width a row is whole on the other tabs and turned on the Beat
tab, where bold syllables and the room for remark numbers make it wider:
`names` row 1.0 at 375 ("Count" only), `sight` row 0.2 at 375 ("Halves"
only), `slip` rows 0.6 and 0.7 at 390 ("Ear" only). Each turns at its
cut, so nothing is spoiled, but the line moves as the reader changes
tab. Pictures: `phedre-slip-0-ear-390.png` beside
`phedre-slip-2-break-390.png`.

### 2.10 Rhyme: one long sweep where only the first line of a pair turns

Small, and inside the plate. Where the first line of a pair has turned
and the second is whole, the join is a long curve from the end of the
short half across to the far end of the next line; every other pair has
an arc or a bracket. Pair b (rows 0.2 and 0.3) at 360 and 375:
`phedre-slip-1-rhyme-360.png`, `-375`. Pair c (rows 0.4 and 0.5) at 980:
`phedre-slip-1-rhyme-980.png`. It touches nothing.

### 2.11 A quoted phrase in a caption breaks at its hyphen

Small. `slip` "Break" at 390: the first French phrase the caption
quotes in bold, a verb and its pronoun joined by a hyphen, ends the
caption's second line at the hyphen and goes on in the third. The
examiner's record has it from 380 to 390. Picture:
`phedre-slip-2-break-390.png`. To mend: do not let a short bold
quotation break at a hyphen.

## 3. Seen while I worked, and gone from the last pictures

Not faults now. I name them so that the lead knows they were looked for.

- **Rhyme on phones.** From 08:56 to 09:46 the arcs of `slip` "Rhyme"
  left the plate at 360, 375 and 390 and the letters stood in the
  margin (the picture tool counted them). After the change of 09:46 the
  lines stop short of the edge. At 320, 340, 360, 375, 390, 412 and 430
  no arc and no letter now stands outside the passage's column by more
  than 4 px, and none outside the plate: `phedre-slip-1-rhyme-390.png`,
  `-375`, `-360`, `-320`.
- **Lines turning off the cut.** At 320 to 360 five rows turned a word
  or two before or after the cut, and on a Beat tab the count then
  showed five and seven, or seven and five. The reading now holds a
  `turn` for each (section 5), and every French row that turns, at every
  width from 320 to 430, on every tab, turns at its cut.
- **`names` row 0.0** turned after word 3 on "Count" at 390 before the
  fifth mending. It now turns after word 4, at the full stop, on every
  tab.
- **A play's name upright** (this play's, where it is the play and not
  the woman, and once the Greek play's): in the paragraph under "What
  Auden said" at the head, and in the
  second, fifth and eighth entries of the longer account below
  (`auden[1]`, `auden[4]`, `auden[7]`). All four are marked now and
  stand in italics: `phedre-page-1280-0.png`, `-3` and `-4`.

## 4. What I looked at hardest, and how it stands

### 4.1 The French and its English

- **Wide (980 and up).** Two blocks side by side, each under its label,
  French at left. At 1280 the French is 25.5 px (`names`), 27.2 px
  (`sight`) and 20.3 px (`slip`); the English is 19 px. They are not
  line for line and cannot be: five French rows to six English, six to
  seven, eight to ten. On the eight tabs that do not mark the English it
  stands close-set at the head of the right column, a crib; the caption
  stands under it on `sight` and `slip` (2.4) and under both columns on
  `names`. On the two "English" tabs it opens to the pitch of the French
  (and there 2.2 applies).
- **One column (under 980).** On the eight tabs that do not mark it the
  English follows the caption and the key; the caption, which glosses
  every French word it quotes, stands between. On the two "English"
  tabs the English stands straight under the French, above the caption.
  At 390 on `slip` "English" the three tied French rows and the five
  tied English rows lie within 640 px of each other: one screen of a
  tall phone, only just. Each tie's number stands under its rule and
  clear of the line below (`zoom-slip-english-390-rows-7-10.png`),
  but for 2.3.
- **Speakers.** The French shows no speaker's name; the heading of
  `names` gives the two, and a wider gap after row 0.2 marks the change.
  The English shows both names. The head of the page says who each is,
  so I propose no `speakers` gloss. In the English column the label of
  the version and the first speaker's name are two lines of small
  capitals, one under the other and nearly alike; a stranger may take
  them for one label (`phedre-names-1-figure-1280.png`). Small; the
  kit's.
- **Where an English line turns**, at 320 and 340: 2.8 and section 5.

### 4.2 The three Beat tabs

Twelve syllables to a line, so twelve ticks, two large dots, two or
three small ones, a pause, and up to two ties under each line. I tested
every stroke (a point every 1.5 px) and every remark number against the
box of every word, at 1280, 1024, 768, 390, 360 and 320, on all three
tabs: no mark of one line touches a word of another, or of its own. The
foot of the lowest mark stands 13 to 15 px over the tallest letters of
the next line, at 1280, at 390 and at 320 alike.

- A line that turns carries its pause at the end of its first half and
  a rule under each half; with the reading's turns every such half is
  six syllables (`trial-turn-sight-halves-320.png`, right).
- The remark numbers stand after their words, clear of the dots of the
  line above.
- What is wrong is the key (2.1), the tie on the pause (2.6) and where
  the key stands (2.4, 2.5).
- On a phone the syllables without stress are grey, at 16.5 px, the
  kit's smallest. They are the faintest type on the page; I can read
  them in the pictures, and would not go smaller.

### 4.3 Rhyme

At 1280 four arcs in four colors stand to the right of the lines, the
rhyming letters colored in the words, 118 px short of the English
column; at 1024 they end 30 px short of it, at 980 48 px. On phones
every arc, bracket and letter is inside the plate (section 3). The
key's row of letters matches the passage.

### 4.4 The two Figure tabs, and "Break"

- **`names` "Figure"** (`pair`). No stroke at any width, before the
  seventh mending and after it, and that is right. The description
  (row 0.2) and the name (row 1.1) stand two lines apart, and the kit
  joins a pair only on one line or the next. Color and the key tell the
  four kinds; the two parents' names carry a second underline under the
  first. Nothing touches.
- **`sight` "Figure"** (`list`). The three clauses of row 0.0 are
  numbered 1 to 3; the two verbs of row 0.3 have their own color and
  their own row in the key. No strokes, none wanted. In the key each
  of the three rows begins with its number and then the English, which
  begins with the pronoun: the figure 1 and the capital I stand side by
  side in italic. I can read it; a point after the number would part
  them. The kit's, and small.
- **`slip` "Break"** (`chain`, with the reading's `join`). The strokes
  join the right words: parts 1 and 2 are the two forms in the sentence
  about Thésée, parts 3 and 4 the two that are hers, as the caption
  pairs them. Each runs from under one form to over the next through
  the band between the lines. Sampled at 1280, 1024, 430 and 390,
  neither passes through a word: each keeps 5 px or more from the
  lowest letters of the line above it and from the tallest of the line
  below (`zoom-slip-break-1280-rows-1-2.png`,
  `zoom-slip-break-1280-rows-6-7.png`,
  `zoom-slip-break-390-rows-6-7.png`). They cross no other stroke. For
  the widths, see 2.7.

### 4.5 "Words"

Glosses are 13.5 px at 1280 and 12 px on a phone. Where two fall close
a hairline parts them, and the pair is centred under its two words. No
gloss overlaps a word or another gloss at 1280, 390 or 320. At 320 five
of the six lines turn. The three that carry glosses keep the band
under each half, as their glosses need, so their halves stand as far
apart as two lines and only the indent tells; the two that carry none
stand close since the seventh mending (`phedre-sight-2-words-320.png`).

A thing in the reading, for the critic: section 6.

### 4.6 Headings, tab names, length

- The three headings and the ten tab names read well and stay on one
  line at every width. Only the line that gives the place wraps, at 320,
  after the act. I propose no change to any.
- Length on a phone. At 390 the French of `slip` is 641 px tall on
  "Rhyme" and "Break", 753 px on "Ear", where five of the eight lines
  turn, and 572 px on "English", where two of the three turned lines
  carry no mark and now stand close. The whole plate is 1920 px on
  "Ear". The passage alone fills a screen, so its first lines are never
  on screen with the caption; its last four are. Three lines turn at
  390 on every tab of this plate, to keep room for the rhyme marks;
  that is the price of 3's first item, and I think it worth paying.
- At 320 the French of `slip` is 922 px on "Ear" and "Rhyme", 818 on
  "Break" and 748 on "English"; that of `sight` is 502, 641 and 572 on
  its three tabs. So the caption moves up or down by as much as 174 px
  as the reader changes tab. The kit's list says the seventh mending
  does this by design, and each tab alone reads better for it; I name
  the figures and do not count it a fault.

## 5. Proposed for the reading

I set nothing in `reading.json`. This is what I would set, with the
picture that shows why. Each trial was made in the built copy only and
undone by a build.

### 5.1 `turn`: the five the reading has, and no more

```
names   "turn": { "0.1": 4 }
sight   "turn": { "0.1": 2, "0.4": 2 }
slip    "turn": { "0.2": 3, "0.3": 2 }
```

These came into the reading at 09:18 as the examiner's change 15. They
are the same five rows and the same words that I had found and tried
before I saw them there: each word ends the sixth syllable of its line.
I would set exactly these.

Why, tried again with the kit as it stands after 11:06 (every `turn`
taken out of the built copy, pictures, then a build):

| row | the cut falls after word | with no `turn` the page turns after word | at |
|---|---|---|---|
| `names` 0.1 | 4 | 3 | 320, 340 |
| `sight` 0.1 | 2 | 3 | 320 |
| `sight` 0.4 | 2 | 4 | 320 |
| `slip` 0.2 | 3 | 4 | 320, 340, 360 |
| `slip` 0.3 | 2 | 2, the same | 320, 340 |

- On a Beat tab a line that turns off its cut shows five and seven, or
  seven and five, with the pause inside a half, on plates whose captions
  say that every line rests after the sixth. Pictures, without the
  turns at left and as the reading stands at right:
  `trial-turn-names-count-320.png` (row 0.1),
  `trial-turn-sight-halves-320.png` (rows 0.1 and 0.4),
  `trial-turn-slip-ear-320.png` and `trial-turn-slip-ear-360.png`
  (row 0.2).
- `slip` 0.3: since the seventh mending the page turns this row at its
  cut of itself, so its `turn` changes nothing now. I would leave it.
  It costs nothing, and it holds the line if the rule changes again.
- No other row needs one. With these five, every French row that
  turns, on every tab, at 320, 340, 360, 375, 390, 412 and 430, turns
  at its cut; the other fourteen rows do so by the page's own choice or
  do not turn.

### 5.2 `turn` for two lines of the English: what I would set if the checker took it

```
slip    "turn": { "0.2": 3, "0.3": 2, "p:91.1": 2, "p:91.4": 3 }
```

- Why: 2.8. At 320 and 340 English row p:91.1 ends its first part on a
  conjunction that belongs to the next sentence, and p:91.4 parts an
  adjective from its noun. With the two turns each line turns at its
  full stop. Picture: `trial-turn-slip-english-320.png` (as it stands at
  left, with the two set at right).
- It cannot be set as the tools stand. The page honors a `turn` on a
  `p:` row (the trial shows it), and the build passes it through, but
  `build/tools/check-reading.mjs` refuses it, at its line 312: "the
  passage has no row p:91.1". The examiner's record says the same.
- So one of two things is the lead's to do: let the checker take a
  `p:` row, and these two are set; or let the kit's own stop rule reach
  the lines of a version beside (2.8), and nothing need be set. The
  second is the better mend, since it serves every piece.
- Until then nothing is to be set. The fault shows only under about
  350 px.

### 5.3 `join` on "Break": leave it

```
slip, lens 2 ("Break")   "join": [[1, 2], [3, 4]]     as it stands
```

- The two pairs are the caption's own: the two forms of the verb in
  the sentence about Thésée, and the two that are hers. Both strokes
  are drawn at 412 and wider, the second alone at 390 and under (2.7).
  What is drawn is true at every width and crosses nothing.
- The other setting, if the lead wants every width alike, is
  `"join": "none"`. Color alone then ties the four forms at every
  width, and the key's one blue row names them. Pictures, as it stands
  at left and with `"none"` at right: `trial-break-join-1280.png`,
  `-430`, `-390`, `-320`.
- I would keep the join. At a desk the two strokes show the pairing
  that the caption makes in words; a phone loses one stroke and shows
  nothing false. No setting gives both strokes on a phone: part 2
  stands at the head of the turned half of row 0.1, the kit draws no
  stroke across a turned half, and that row must turn at its cut.

### 5.4 Nothing else

- `heading`: the three read well and stay on one line at every width.
  No change.
- `label`: ten tab names, each one word, none alike on one plate. No
  change.
- `beside`: I would not set `"beside": true`. The three plates already
  stand as two blocks, each under its label, because the English has
  more lines than the French. `beside` would add one thing: both
  versions in one type, as equals. I tried it. At a desk it mends 2.2
  (the rows stand level) and 2.4 (the caption goes under both):
  `trial-beside-slip-english-1280.png`. But Boswell's English is the
  crib here and not a second passage, and as an equal it costs more
  than it mends. On a phone, on the eight tabs that do not mark it,
  the English then stands large and open between the French and its
  caption, and the caption ends 438 px lower on `names` "Count" at 390
  and 664 px lower on `slip` "Ear": `trial-beside-names-count-390.png`.
  At a desk the French is set smaller to make room (23.4 px for 25.5
  on `names`). And two English lines of `slip` then turn badly at 390
  as well (2.8). So 2.2 and 2.4 are the kit's to mend.
- `speakers`: no gloss. The French shows no speaker's name; the
  English shows two, in Boswell's spelling, plainly the two French
  names of the plate's heading, and the head of the page says who each
  is.

## 6. In the reading, for the critic and the lead

Not mine to change. I changed none of it.

- **`sight` "Words", the first note.** It says that the dictionary
  quotes this line "under the sense", and stops. The sense stands only
  as the gloss under the word, across the plate at a desk and a screen
  above on a phone; in the list of notes the sentence lacks its end.
  The second note leans on it ("here too"). The caption of `slip`
  "English" says the same kind of thing whole: it names the sense. The
  first note could do so too, or say "under this sense":
  `phedre-sight-2-words-1280.png`, `-390`.
- **The Beat key's red row.** The words are the kit's and not the
  reading's, but the doubt touches what the three Beat captions say:
  2.1, last item.
- **Nothing else.** I read every caption, key, note and remark in the
  pictures against the marks beside it. Each caption speaks of what its
  tab shows: the line it calls the third is the third, the pairs it
  names are the pairs marked, the rhyme words it gives are the colored
  ones, and the numbered remarks stand in the order of the passage. I
  did not check a fact or a count; that is the examiner's.

## 7. The last pictures

All times are UTC on 3 October. The last change to the kit was at
11:05:49 (`plate.js`, `atlas.css`), the last to the reading at 10:18:35.

- **Trials**, 11:39:51 to 11:42:59: the built copy was changed and put
  back four times (no turns; two English turns; no join; `beside`).
  The eleven `trial-...` pictures were written at 11:43.
- **The checker**, at 11:43: `node build/tools/check-reading.mjs phedre`
  ends "no problems", "no warnings", "the printed notes are fit to
  print".
- **A fresh build**, `node build/pieces.mjs phedre`, at 11:44:05. The
  built copy holds the reading's `turn` and `join` and nothing of mine.
- **The final pictures, taken last**: the standard set (`--page`, 1280
  and 390) from 11:44:06 to 11:44:41; 320, 360, 375 and 1024 to
  11:45:49; 980 (`slip`) to 11:45:58; 600 (`slip` "Ear") to 11:46:03;
  the eleven enlarged parts from 11:46:03 to 11:47:10.
- At 11:47:31 and at 11:50:00 I looked again: no file of the kit and
  nothing in `remake/works/phedre/` but mine had changed since
  11:05:49, and the built copy was still the one of 11:44:05.
- **The picture tool's last line**, each of the four times it ran:
  "nothing reported; now look at the pictures".

The same ninety pictures had been taken at 10:41 to 10:48 and again at
11:09 to 11:16. All ninety of the last run are the same to the byte as
those of both earlier runs, so what I looked at then is what stands
now. I looked at every tab at 1280, 1024, 390 and 320, and at 360,
375, 600 and 980 wherever this file cites them; the rest at 360 and
375 I tested by measure (where each line turns, and every mark against
every word).

In `shots/`, 101 pictures:

- `phedre-page-1280-0.png` to `-5` and `phedre-page-390-0.png` to `-7`:
  the whole page, a screen at a time.
- `phedre-<plate>-<n>-<tab>-<width>.png`: each of the ten tabs at 1280,
  390, 320, 360, 375 and 1024; the four of `slip` at 980;
  `phedre-slip-0-ear-600.png`.
- Enlarged parts: `zoom-names-count-1280-key.png`,
  `zoom-names-count-1280-rows-1-2.png`,
  `zoom-names-count-1280-row-5.png`, `zoom-names-count-390-row-5.png`,
  `zoom-names-english-390-speaker.png`, `zoom-slip-ear-1280-row-2.png`,
  `zoom-slip-ear-1280-row-7.png`, `zoom-slip-break-1280-rows-1-2.png`,
  `zoom-slip-break-1280-rows-6-7.png`,
  `zoom-slip-break-390-rows-6-7.png`,
  `zoom-slip-english-390-rows-7-10.png`.
- Trials, two states side by side, each under its own caption:
  `trial-turn-names-count-320.png`, `trial-turn-sight-halves-320.png`,
  `trial-turn-slip-ear-320.png`, `trial-turn-slip-ear-360.png`,
  `trial-turn-slip-english-320.png`, `trial-break-join-1280.png`,
  `-430`, `-390`, `-320`, `trial-beside-slip-english-1280.png`,
  `trial-beside-names-count-390.png`.

Nothing of mine is in the project but this file and `shots/`.
