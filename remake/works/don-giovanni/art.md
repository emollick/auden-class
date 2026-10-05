# Don Giovanni: the artist's record

Piece `don-giovanni`. Begun 2026-10-03, 11:40 UTC, after the seventh
mending of the kit and its mend of 11:06 UTC. Working record, not
printed. The last state is at the foot, under "The last pictures".

Words of the libretto and of the English beside it are pointed at by
plate, row and word number. None is typed out here.

Read before starting: BRIEF.md, ARTIST.md, the kit's README, all seven
sections of KIT-CHANGES.md (with the paragraph of 11:06 UTC), adams.js,
and this piece's reading.json, notes.md and exam.md.

## What there was to do

- Three plates, four tabs each, each with a second passage (the
  English libretto):
  - `count` (The catalogue: the count): Beat, Rhyme, Words, English.
    Eight Italian rows, ten English: two blocks.
  - `close` (The catalogue: the close): Words, Figure, Rhyme, English.
    Eight rows each, set side by side in one type (`beside`).
  - `duet` (The duet): Rhyme, Voices, Words, English. Fifteen Italian
    rows, fourteen English with the singers' names over the speeches.
- No shape lens. Nothing was drawn. No script was written
  (`site/js/pieces/don-giovanni.js` does not exist) and no stylesheet.
- I did not edit `reading.json`, `notes.md` or `exam.md`. What I would
  set is under "Proposed for the reading".
- Trials were never made in the site. Each was a copy of the built
  file kept in my scratch folder and served from there for a picture.
  `site/data/pieces/don-giovanni.json` was written only by the build.
- Known already and not reported again: on the Beat tab of `count`,
  row 1.0, the tie of the syllable that is not counted is drawn to the
  syllable after it (the second remark of the tab tells the reader).

## Log (UTC)

- 11:40: files read.
- 11:41: `node build/pieces.mjs don-giovanni`; `check-reading` says no
  problems and no warnings. Then one plate at a time at 1280 and 390:
  "nothing reported" for each.
- 11:45 to 12:05: the same at 1024, 768, 360 and 320, and the page in
  slices at 1280 and 390, with every folded note opened once. Every
  picture was opened; the phone ones were read in enlarged crops.
- 12:05 to 12:15: trials of the Figure tab's `join` (four ways) and of
  `close` without `beside`.
- 12:17: KIT-CHANGES.md, the kit and the reading were unchanged since
  I began (kit 11:05, reading 11:20).
- 12:17 to 12:41: a window of 1280 by 800 scrolled down the long
  plates; a sweep at 1920, 1600, 1100, 900 and 600 ("nothing reported"
  for each plate); a trial of a gloss on the English speaker's name.
- 12:42 to 12:47: the last build and the last pictures (see "The last
  pictures" at the foot).
- 12:50 to 12:55: the three plates once more at 960, to see the form
  between one column and two ("nothing reported" for each; pictures
  kept in my scratch folder, not in `shots/`).

## The page as it stands

### How it was looked at

Eight window widths: 1280, 1024, 900, 768, 600, 390, 360, 320. From
1280 up the plate is 1,180 px wide and does not change (1600 and 1920
gave the same pictures as 1280). The plate has three forms:
- at 1024 and wider (a plate of 940 px or more) the two passages stand
  side by side and the caption under them, or under the shorter;
- at about 920 to 980 (a plate of 880 to 940 px; seen at 960) the
  English stands under the Italian on the left and the caption with
  its key on the right. On the tabs that do not mark the English this
  form serves all three plates well: the caption and the key stand
  beside the marks. On the English tab the two passages are then one
  over the other, as on a phone;
- at 900 and narrower, one column.

The picture tool reported nothing at any width. What follows was
found by looking, and by measuring in the page.

### Type, in px, on the tab that opens first

| window | `count` | `close` (both passages) | `duet` | second passage |
|---|---|---|---|---|
| 1280 | 28.1 | 24.2 | 34.0 | 19.0 |
| 1024 | 22.6 | 20.0 | 31.0 | 19.0 |
| 900 | 38.0 | 38.0 | 34.0 | 18.6 |
| 768 | 34.5 | 33.0 | 34.0 | 17.4 |
| 600 | 25.6 | 24.4 | 34.0 | 16.0 |
| 390 | 17.2 | 16.5 | 23.5 | 16.0 |
| 360 | 16.5 | 16.5 | 21.1 | 16.0 |
| 320 | 16.5 | 16.5 | 17.8 | 16.0 |

Lines that turn: none at 390 or wider. At 360 two English lines of
`close` (rows p:244.7 and p:244.10). At 320 three English lines of
`close`, and row 4.2 of `count`, after its comma. Every turn falls at
a comma or leaves two fair halves, so no `turn` is asked for.

### What is right and should be left alone

- No mark runs through a word, a gloss or another mark on any tab at
  any of the eight widths (the nearest thing to it is fault 6).
  Glosses, pair numbers, rhyme letters and arcs are all legible; two
  glosses that stand close have their hairline.
- `count`, Rhyme and Words; `close`, Rhyme and English; `duet`, Rhyme
  and Voices: nothing a stranger would stumble on at 1280 or at 390.
- `duet`, Rhyme: the rhymes that cross are drawn as arcs at 1280 and
  320 and as squared brackets at 390 and 360; none passes through a
  word. The crossings are those of alternate rhyme itself.
- `duet` at 1280 (the plate is 1,331 px tall): on a window 800 px tall
  the side column with the English, the caption and the key keeps in
  view while the reader goes down the fifteen lines.
- `duet`, English, 1280: all nine pairs stand level. `close`, English,
  1280: five pairs level; pairs 5 and 6 are one line apart because the
  English says those things a line earlier, and the picture says so
  truly.
- The three headings break well at every width, the place of each
  passage stands under its heading on a phone, and the four tabs keep
  to one row down to 320.
- The page: the title in two lines, the summary, the folded notes and
  the foot read well at 1280 and 390. In "What each caption stands on"
  the entries are named by plate and tab and are easy to find.

## Proposed for the reading

The lead sets these; I have set nothing. Each was tried on a copy of
the built file in my scratch folder, and the trial pictures are in
`shots/` under names that begin `try-`.

### 1. Plate `close`, the figure lens (tab "Figure"): no strokes

Set

    "join": "none"

in place of

    "join": [[0, 1], [1, 2]]

Why. The join as it stands is drawn in two kinds of stroke for one
chain: a straight grey stroke with a dot at each end, slanting from
row 9.0 words 3-4 down to row 9.1 words 0-1, and then a grey arc with
no dots under row 9.1, from words 0-1 to words 3-4. A stranger reads
two different signs and looks for two meanings. The slanted stroke
also crosses the space between the lines at a shallow angle and looks
like an accident. The kit's own rule since the seventh mending is
that the strokes of one figure are of one kind, or there are none; a
numbered join is drawn as it is asked, so the remedy is in the reading.

With no strokes the three repeated heads are underlined in one color,
the three qualities after them in a second, and the condition of row
9.2 in a third. The run of colors (first, second; first, second,
first, second; then the third alone) shows the repetition at a glance,
and the key under the caption names each color. Nothing the caption
says is lost: it speaks of three clauses that begin alike and of one
condition, and all of that is in the colors.

The join as it stands is not wrong. It joins what the caption joins
and the examiner passed it. This is a judgment of the look only.

Pictures:
- as it stands: `shots/don-giovanni-close-1-figure-1280.png` and
  `-390.png`;
- with `"join": "none"`: `shots/try-join-none-1280.png` and
  `shots/try-join-none-390.png`;
- the three side by side at 1280, `shots/try-join-compare-1280.png`:
  left, as it stands; middle, `"join": "none"`; right, with no `join`
  at all (the kit then chains each color by itself: two slanted
  strokes and two arcs that cross under row 9.1, which is worse).

Also tried and not proposed: `"join": "within"` (the same tangle as no
`join`); `"join": [["A", "B"]]` (a small arc from each head to its
quality: tidy, but it says only that the two stand side by side).

### 2. Plate `duet`: say who the English libretto's first speaker is

Offered, not pressed. Add to the plate

    "speakers": { "JUAN": "Don Giovanni" }

Why. The English beside the duet names its first speaker by the
Spanish form of his name, in capitals over the speech. The heading,
the captions and the Italian tags call him otherwise. A stranger can
work it out from the plate's label, but the kit has a place for
exactly this since the sixth mending: the gloss stands once, in small
italic after the name, the first time the name is shown. It costs no
room and moves no line. Picture: `shots/try-speaker-1280.png` (top of
the right column). If the lead thinks the name plain enough, leave it.

## Looked at and left as it is

- **`beside` on `close` stays.** Without it the kit sets the English
  line under line, since both passages have eight rows. Tried
  (`shots/try-close-under-0-1280.png`, the Words tab): each Italian
  line then has two layers of small italic English under it, the
  reading's gloss and the libretto's line, and they say different
  things. Worse, in the last four lines the English says things a
  line earlier than the Italian, so the line set under row 9.1 is not
  its version, and under row 9.2 neither. On the English tab the ties
  then run aslant between the lines (`shots/try-close-under-3-1280.png`).
  Side by side the reader compares two wholes, which is what the
  caption of the English tab does.
- **What `beside` costs on a narrow plate** (not a fault to report:
  KIT-CHANGES says two passages of equal standing stand one under the
  other on a phone, on purpose). On the Words, Figure and Rhyme tabs
  the eight English lines, which those tabs do not mark, stand between
  the marked Italian and its caption, in the verse's own type and at
  the pitch kept for marks: 391 px of them at 390, 509 px at 600,
  639 px at 900. At 390 the marks end about 550 px down the plate and
  the caption begins at 1,016. I found no setting of the reading that
  avoids this without the worse fault above. See also fault 5 below,
  which makes this plate smaller than it need be.
- **No `beside` for `count` or `duet`.** Their English has another
  count of rows (ten to eight, fourteen to fifteen), it is the lesser
  text on those plates, and as it is the kit sets it small and, on a
  narrow plate, after the caption on the tabs that do not mark it.
- **Headings.** "The catalogue: the count", "The catalogue: the
  close", "The duet": each is short, says what the plate holds, and
  keeps to one line down to 320.
- **Tab labels.** All one word. "Voices" on the `duet` is right: the
  tab sets his verbs against hers, and the key names each color by
  the singer. (A reader who knows the grammar term may think for a
  moment of active and passive. The key corrects that at once.
  "Verbs" would be exact and duller; I would not change it.)
- **`turn`.** None needed: see "Lines that turn" above.

## Faults, worst first

None of these is mine: I drew nothing and set nothing. Each is the
kit's (`site/js/kit/`, `site/css/atlas.css`), the build's or the
page script's, as said. Pictures are in `shots/`; the names that begin
`detail-` are crops of the last pictures, cut to show the fault.

**1. `duet`, every tab, every width: in the Italian the singers' names
stand in the verse as words of the line. (The build's.)**
Word 0 of rows 2.0, 3.0, 3.1, 3.2 and 3.3 is the printing's short form
of a singer's name, and words 0-1 of row 4.0 are its direction that
both sing. They are set in the verse's own type (34 px at 1280) as if
they were sung. Beside them the English has the names lifted in small
capitals over the speeches. The kit's rule (README, "A speaker's
name") lifts only a name printed in capitals; the poet's notes say
the tool that cuts the text does not parse these.
What it costs the reader:
- On Voices, a tab about who sings which verb, the singer is told by
  a word inside the line. Her name is shortened two ways (rows 2.0 and
  3.3 one way, row 3.1 another), and rows 1.0-1.3 carry no name.
- The direction in row 4.0 is a sign only a reader of scores knows.
  It is glossed on the Words tab and nowhere else.
- The tags make the longest lines longer: at 390 row 3.3 is 292 px of
  which its tag is 44, and row 4.0 is 291 px of which its tag is 33.
  Without them the longest line would be 258 px and the type on a
  phone about a ninth larger (26.6 px for 23.5 at 390; 20.2 for 17.8
  at 320).
What would mend it: a way for a reading to say that the first word or
two of a row is a speaker's tag, so that the build lifts it as it
lifts a name in capitals (the words keeping their numbers).
Pictures: `don-giovanni-duet-1-voices-1280.png`, `-390.png`;
`detail-duet-tags-1280.png`.

**2. `count`, Beat, 1280 and 1024: the key and its six remarks stand
far from the marks, with bare paper under the passage. (The kit's.)**
The Italian ends 742 px down the plate. The right column (English,
caption, the measure, the key, six remarks) runs to 1,328. Under the
Italian lie 586 px by 551 px of bare paper at 1280, and 706 px of it
at 1024. From the word a remark numbers to the foot of that remark is
626 to 869 px at 1280, and 739 to 915 px at 1024. So on a window
700 px tall four of the six remarks cannot be read with their place
on the screen at 1280, and none can at 1024. This is the first tab of
the first plate.
Cause: `low` (the key under a short passage) is never used on a plate
with a second passage (`plate.js`, in `fit()`: not when the plate has
`is-beside`). With the remarks under the Italian the two columns
would be about 1,100 and 990 px tall and each remark near its place.
At 960, where the English stands under the Italian and the caption
with its key beside them, this same tab is well balanced.
Pictures: `don-giovanni-count-0-beat-1280.png`, `-1024.png`.

**3. A long key or list of notes beside the caption, 600 to 900: a
thin column and bare paper. (The kit's.)**
From 520 px of plate up to two columns, the block beside the caption
takes 34% of the plate (`atlas.css`: `.pane` in a container of 520 px
or more), however long it is. Where it is long it runs far below the
caption and leaves the paper under the caption bare:

| tab | window | column | longer than the caption by |
|---|---|---|---|
| `count`, Beat | 600 | 173 px | 947 px |
| `count`, Beat | 768 | 224 px | 801 px |
| `count`, Beat | 900 | 263 px | 676 px |
| `close`, Words | 600 | 173 px | 795 px |
| `close`, Words | 768 | 224 px | 669 px |
| `close`, Words | 900 | 263 px | 582 px |
| `duet`, Words | 768 | 224 px | 598 px |
| `count`, Words | 768 | 224 px | 278 px |

At 600 the six remarks of `count`, Beat are set four or five words to
a line for 891 px. On a plate of two columns the kit already has the
remedy (`keys-wide`: a key much taller than its caption goes under the
caption, across the plate, in columns); it is not used on a plate of
one column. Short keys (Rhyme, Figure, Voices) sit well in the 34%.
Pictures: `don-giovanni-count-0-beat-600.png`, `-768.png`, `-900.png`;
`don-giovanni-close-0-words-600.png`, `-768.png`.

**4. `duet`, the English, every tab and width: a stanza's space falls
between a singer's name and the speech. (The build's and the
stylesheet's.)**
The names over rows p:359.0 and p:361.0 stand 14 px over their own
speech and 10 px under the speech before (12 and 10 at 390); every
other name stands 4 px over its own. The row carries the class
`stanza`, so its space is inside the row, under the lifted name. The
two names float between two speeches, a little nearer the wrong one.
On the English tab at 1280 those two stand 33 px under the speech
before and 31 px over their own; the other names, 33 and 17.
Pictures: `don-giovanni-duet-0-rhyme-1280.png` (right column);
`detail-duet-names-1280.png`.

**5. `close` (two passages in one type), every tab: the room for a
rhyme's letter is kept at the end of the English lines too, which
carry no letter. (The kit's.)**
KIT-CHANGES leaves the size of that room alone on purpose, and I do
not ask for it to change. This is about where it is kept. The Rhyme
tab marks the Italian only; its letters and arcs stand at the end of
the Italian lines. But the plate's type is reckoned from the longest
line of both passages less the room (`fit()` takes 80 px from the
narrower column, 46 on a phone), and the English lines are the long
ones. So:
- at 1280 the pair is set in 24.2 px where 28.8 would fit; at 1024 in
  20.0, the floor, where 24.9 would fit. The verse is then barely
  larger than its 17 px caption;
- at 360 the English rows p:244.7 (292 px) and p:244.10 (289 px) turn
  in a measure of 304 px only because 18 px is kept at their end
  (`--end`); at 320 three English lines turn.
Pictures: `don-giovanni-close-2-rhyme-1280.png`, `-1024.png`,
`don-giovanni-close-0-words-360.png`.

**6. `duet`, English, 320 to 960 (wherever the English is not beside
the Italian): a pair's number stands on the next singer's name. (The
kit's.)**
Pairs 5 and 6 end, in the English, on the last line of a speech
(rows p:359.3 and p:363.0) and their numbers stand at the left edge
under it. The next thing down is the name of the next singer, also at
the left edge, about 5 px below the number's ink; at 900 the two
boxes overlap by 3.5 px. Number and name read as one thing. Number 8
stands as close over the three points of the gap. Fault 4 makes it
worse under pair 5: the name there stands hard under the number and
12 px away from its own speech, so it reads as a name signed under
the speech before. At 1280 number and name are 13 px apart and it is
clear.
Pictures: `don-giovanni-duet-3-english-390.png`, `-900.png`;
`detail-duet-english-numbers-390.png`.

**7. The page, "More from Auden", every width: a quotation ends with
one mark too few. (The page script's, or the reading's.)**
The quotation set large in that section opens with a double mark,
opens a second inside it before its last phrase, and closes only one.
`quoted()` in `site/js/piece.js` takes any closing mark off the end
of a quotation before it adds its own, so a quotation that ends in a
quoted phrase loses that phrase's mark. The remedy in the reading is
under "In the reading" below. Pictures: `don-giovanni-page-1280-4.png`, near its
head; `detail-page-quote-1280.png`.

**8. The row of letters in a Rhyme key: cramped where the lines are
many, and it does not open where a stanza ends. (The kit's.)**
`duet`, Rhyme, every width: fifteen letters stand 13 px apart in a
row 186 px wide, in a column of 460 px at 1280, with arcs 3 to 8 px
high over and under them. The row never grows past 186 px
(`lens-rhyme.js`: the step is 186 over the count of lines, 33 at
most). The passage is four stanzas (4, 4, 4, 3 rows) and the caption
speaks by stanza, but the letters run on evenly; the same on `count`
(4, 4) and `close` (2, 2, 4). A small opening where a stanza ends
would let the reader find "her stanza" without counting letters.
Pictures: `don-giovanni-duet-0-rhyme-1280.png`;
`detail-duet-rhyme-key-1280.png` (enlarged three times).

**9. `count`, Beat, 320 only: a tie is lost where the line turns.
(The kit's.)**
Row 4.2 turns after word 2, at its comma, which is the right place.
The tie that joins the last syllable of word 2 to word 3 is then not
drawn at all: neither end of it. The first remark says such joins
happen thirteen times in these lines, and twelve are shown. At 360
and wider the line is whole and all thirteen are there.
Pictures: `don-giovanni-count-0-beat-320.png`;
`detail-count-beat-320-row42.png`.

**10. `count`, English, 1280 and 1024: the English keeps the
Italian's pitch though no pair can stand level. (The kit's.)**
Ten English rows answer eight Italian, so the kit rightly gives up
setting the pairs level (their numbers stand 59 to 152 px apart).
But the English is still set at the Italian's pitch, 75 px a row at
1280, in its own 19 px type. It looks loose and ends 154 px below the
Italian (896 px down against 742). At its own pitch with the room
its numbers need (45 px a row, as it has at 900) it would be some
460 px tall and end above the Italian's last line.
Picture: `don-giovanni-count-3-english-1280.png`.

**11. `duet`, Voices, every width: in the key, two names of one color
are parted by a comma though each holds a colon. (The kit's.)**
The second row of the key holds the labels "he: orders and urgings"
and "both: his kind of urging", joined by a comma, and reads as one
list. The Figure key parts such labels by semicolons since the
seventh mending; the Sentence key joins them with a comma whatever
they hold (`lens-sentence.js`, in `aside`).
Picture: `don-giovanni-duet-1-voices-1280.png`.

**12. `close`, Figure, 390 only: the caption breaks a short phrase in
bold between two lines. (The kit's.)**
The first sentence names two words of the passage in bold (six
letters in all); one ends the caption's first line and the other
begins the second. At 360, 320 and 600 they keep together by chance.
A bold phrase of two or three short words could be kept whole.
Picture: `don-giovanni-close-1-figure-390.png`.

## In the reading: what I think is wrong

Small things, and none of them a matter of what the reading says.
They are not mine to change.

1. **`auden`, the fifth entry, its `quote`.** The quotation ends with
   a phrase that is itself in double marks (an opening mark at
   character 78 and a closing mark at character 111, the last,
   counting from 0). The page sets the whole in double marks and so
   prints two opening marks and one closing (fault 7). Make the inner
   pair single marks, as is usual for a quotation inside a quotation:
   U+2018 for the mark at 78 and U+2019 for the mark at 111. The page
   then prints it whole. (Or the page script could be mended; either
   will do.)
2. **Plate `count`, Words, the first note (row 0.0, word 0).** It
   names an Italian word as a word (the form the pet form comes
   from). It is not marked, so it stands italic like the sentence
   round it. Marked with asterisks it would stand upright, which is
   the kit's way since the sixth mending. No other note of this
   reading names a word as a word in that way; the notes on the
   English tabs name senses, not words, and read well as they are.
3. **Plate `duet`, the English speaker's name.** See the second
   proposal under "Proposed for the reading".

Nothing in the captions, the notes or the remarks reads wrongly to a
stranger. The remarks of the Beat tab and the notes of each tab are
in the order of the passage.

## What was refused

Nothing was refused by the permission system. Four times the
session's safety check of a shell command timed out ("temporarily
unavailable"). The message says to wait and try again; I did, and the
command ran, or I made the same change to my own file with the
editing tool. Nothing was done by a way round a refusal.

## The last pictures

All times UTC, 3 October 2026, from `date -u`.

- 12:42:31: `node build/pieces.mjs don-giovanni`. The built file was
  written at that second. `node build/tools/check-reading.mjs
  don-giovanni`: no problems, no warnings, the printed notes are fit
  to print.
- 12:42:39 to 12:46:17: the three plates, one at a time (`--plate
  count`, then `close`, then `duet`), each with `--widths
  1280,1024,900,768,600,390,360,320 --out
  remake/works/don-giovanni/shots`. The last line of each run:
  "nothing reported; now look at the pictures".
- 12:46:35 to 12:46:48: the page in slices at 1280 and 390 (`--plate
  none --page`). Its last line, the last the picture tool printed:
  "nothing reported; now look at the pictures".
- The one command of ARTIST.md step 3 that takes every plate at once
  was not run, because the lead asked for one plate at a time on a
  loaded machine. The four runs above take all that it takes, and six
  widths more.
- At 12:51 the kit (11:05; its README 11:08), KIT-CHANGES.md (11:07),
  the page script (10:33) and the reading (11:20) were as they were
  when I began. So the last pictures show the page I had been looking
  at all along: the 24 pictures of the sweep at 900 and 600 and the
  last ones at those widths are the same pixel for pixel (one differs
  by two pixels). Every fault listed above is in the last pictures.
- Looked at again after the last run: all twelve tabs at 1280, 1024,
  768, 390, 360 and 320 in sheets (those at 900 and 600 are the same
  as the sweep's, already read), and in full every picture named
  under "Faults". On the Beat tab of `count` the page draws 13 ties at 360,
  390 and 1280 and 12 at 320 (fault 9).

What is in `shots/` (125 files):
- 96 pictures of the plates: `don-giovanni-<plate>-<n>-<tab>-<width>.png`,
  twelve tabs at eight widths;
- 17 slices of the page: `don-giovanni-page-1280-0` to `-6`,
  `don-giovanni-page-390-0` to `-9`;
- 6 trials, not of the page as it stands: `try-join-none-1280`,
  `try-join-none-390`, `try-join-compare-1280`,
  `try-close-under-0-1280`, `try-close-under-3-1280`,
  `try-speaker-1280`;
- 6 crops of the last pictures: `detail-duet-tags-1280`,
  `detail-duet-names-1280` (twice the size),
  `detail-duet-english-numbers-390`, `detail-count-beat-320-row42`,
  `detail-duet-rhyme-key-1280` (three times the size),
  `detail-page-quote-1280`.
