# Volpone: the artist's record

Begun 3 October 2026, 07:28 UTC. Words of the play are pointed at by
row and word number, as the checker's proof prints them. Pictures are
in `remake/works/volpone/shots/`; a name ending `-1280` or `-390` is
the window's width.

State when I began: the build had no problems and the picture tool
ended "nothing reported; now look at the pictures". There was no
`site/js/pieces/volpone.js`: the Names tab showed the kit's plain
table, with the names of the keys for a reader to see.

The kit was being mended while I worked (its files changed from 07:38
UTC on, and were still changing when I took the last pictures). Every
fault below was looked at again in the last pictures; what had gone by
then is not reported.

## 1. What I drew, and why in that form

**Plate `close`, tab Names.** Script: `site/js/pieces/volpone.js`. No
stylesheet was needed.

The lens holds no magnitudes. Its facts are five names, what a
dictionary says each name means, what three of the five bring, and
what a court gives all five; the one number is how many are sentenced.
Bars or a line of time would have had to invent a measure. What the
facts do hold is two relations, and those are what is drawn:

- **Many to one.** Three bring gifts and one takes them. An ink line
  leaves each gift, the three run into one line, and it ends in a dot
  at the Fox's name.
- **One to many.** One court sentences five. A red line comes down
  from the words "the court gives", with a red dot at each sentence.
  Red is kept for the court because the court's sentence is the
  passage of this plate. The dots are one size: nothing in the facts
  says one sentence is more than another.

Each of the five has a row. The name stands in the display face with
the creature after it in italics (the fact `short`), as a dictionary
sets a headword and its sense; under it, quiet, how the list of
persons has him (`listed`). The two who bring nothing come first, the
Fox and his fly, with their part in the scheme (`part`) where the
others have a gift (`brings`); the gift line passes the fly's row
without a stroke to it, and that is the point of the row.

- **Wide** (the drawing 540 px or more): the three things stand side
  by side on each row: names, gifts, sentences.
- **Narrow** (a phone, and a window of about 1024 where the caption
  stands beside a drawing of about 506 px): two small drawings, one
  over the other, as rule 6 of the kit asks. First the names with
  their gifts, the gift line down the left edge; then the court's line
  with the five names again and their sentences.

Under the rows, after a hairline, the bestiary's sentence with its
book inside the stop, as a citation stands. The caption names it.

Labels on the drawing: "the name means"; "brings the Fox" (the last
two words are the fact `called.as` of the one who brings nothing, as
far as its first comma); "the court gives". The key: an ink line for a
gift, a red dot for a sentence, with the count from `sentenced`. The
script checks that count against the sentences the facts give; if they
differ it stops, and the kit shows its plain table (tested by changing
the number in the browser: the table appeared).

Every name, word and number is read from `lens.facts` when the tab is
drawn. Keys used: `creatures` (`who`, `short`, `nameMeans`, `listed`,
`called`, `part`, `brings`, `sentence`), `sentenced`, `theHope`,
`theGiftsCounted`, `bestiary`, `others`, `volponeSays`.

### What the pointer adds

- On a name, on the red mark of his sentence, or (narrow) on the name
  where it stands a second time: the name, the role, the dictionary's
  words in full (`nameMeans`) and what the play calls him (`called`).
  His row, his gift line and his red dot stay dark.
- On the gift line, or on the label "brings the Fox" (a finger finds a
  label sooner than a line): the hope the gifts are brought in
  (`theHope`). The three who bring and the Fox stay dark.
- On the dot at the Fox's name: the gifts as he counts them
  (`theGiftsCounted`).
- In the drawing the words that lead a fact, as far as its first comma
  or semicolon, open its place in the play (`read`). Whole facts
  underlined made a column of underlines.

### Folded under it: "The facts in full"

One table: the five, each with his role, the dictionary's words in
full and what the play calls him; what each does and what the court
gives, as the drawing has them (for a reader who wants a table, and
for one who cannot see the drawing); the other persons (`others`); the
hope, the gifts counted, and the three things Volpone says
(`volponeSays`), each headed by the words of its key. Every fact with
a place in the play opens it.

All the words, in the drawing and in the table, are set by the kit's
own `d.note`, so that an act and its number stay on one line.

### Tested

Windows of 320, 360, 390, 600, 640, 800, 1024 and 1280 px (the drawing
264 to 774 px wide); a touch screen at 390; a window made narrower and
wider with the tab open; the drawing-in with motion on (all marks
there within three seconds: the last begins at 2.2 s). The picture
tool reported nothing at any of them.

## 2. Faults of the kit, worst first

All seen in the last pictures of the whole piece (08:27 UTC). The kit
changed again after them, so three tabs were photographed once more at
08:41 UTC (`song` Rhyme, `close` Word, `gold` Sentence): 2.1, 2.2, 2.4,
2.5 and 2.6 still stood. None is worked around in my script. What
`KIT-CHANGES.md` says is not to be changed is left out.

**2.1 The thread of a returning sound tangles, and its strokes do not
reach its dots.** Plate `song`, tab Rhyme, 1280 and 390, rows 106.14
to 106.16. Pictures: `volpone-song-0-rhyme-1280.png`,
`volpone-song-0-rhyme-390.png`.
- Under row 106.14 two dotted strokes share one strip of paper: the
  stroke from word 2 to word 6, and the stroke that leaves word 6 for
  word 2 of row 106.15. They cross, and for about half their length
  they lie 3 to 6 px apart. They read as one smudged stroke.
- A stroke that goes to the next row ends over the word it goes to
  (row 106.15 word 2; row 106.16 word 5), but that word's dot stands
  under the word. Stroke and dot never meet, and the last dot of the
  thread (under row 106.16 word 5) stands alone like a stray point.

**2.2 Two glosses side by side read as one phrase.** Word tabs, 1280
and 390. The gap between two neighboring glosses is 10 to 13 px, not
much more than a word space, and a gloss already uses a point between
its own two senses, so nothing tells the eye where one gloss ends.
- `close`, row 269.5, words 2 and 3 (`volpone-close-2-word-1280.png`,
  `-390.png`).
- `gold`, row 5.0, word 0 and words 2 to 3: here the second gloss also
  stands to the left of its words (`volpone-gold-0-word-1280.png`,
  `-390.png`).
- `song`, row 106.6, words 4 and 6; at 390 the first gloss is pushed
  left until it begins two words before its own. Row 106.9, words 0
  and 2, at 390
  (`volpone-song-1-word-1280.png`, `-390.png`).

**2.3 A speaker is named by the edition's short form, and a reading
cannot say who he is.** Plate `close`, the three passage tabs, 1280
and 390, the name over row 265.0: "1 AVOC". The captions call him the judge. A
reader has no way to join the two. (The name is the hosted text's; the
way a word tab can give a name its English works only for a name that
stood at the head of a line.) Pictures: `volpone-close-0-rhyme-1280.png`
and the other tabs of the plate.

**2.4 A stage direction that takes two lines has no room under it.**
Plate `gold`, tabs Word, Sentence and Beat, 390 (and 360, 320): the
direction between rows 3.1 and 5.0. Its second line stands about 8 px
over row 5.0, with three times that above its first line, so the line
of small italic reads as part of the verse line under it. On the Beat
tab the direction is also pressed between the beat marks of row 3.1
and row 5.0, at 1280 as well. Pictures: `volpone-gold-0-word-390.png`,
`volpone-gold-1-sentence-390.png`, `volpone-gold-2-beat-390.png`,
`volpone-gold-2-beat-1280.png`.

**2.5 The seventh rhyme has the first rhyme's color.** Plate `song`,
tab Rhyme, 1280 and 390: rows 106.16 and 106.17 (letter i) are in the
ochre of rows 106.0 and 106.1 (letter a). The plate has seven rhymes
and the kit six colors. Pictures as 2.1.

**2.6 The row of letters does not show that lines are left out.**
Plate `song`, tab Rhyme, 1280 and 390, the key under the caption: the
letters run from the fifth pair to the sixth with no space or points,
though four lines are left out there and the passage shows three
points. Only the jump from e to h tells it. Pictures as 2.1.

**2.7 On a Beat tab the three points of a gap stand further in.**
Plate `song`, tab Beat, 1280 and 390, the gap between rows 106.9 and
106.14: the points stand about 40 px (1280) and 26 px (390) to the
right of where they stand on the other three tabs, so they jump when
the tab changes. Pictures: `volpone-song-3-beat-1280.png` against
`volpone-song-1-word-1280.png`.

Not a fault on any screen, for the lead to weigh: a piece that sets
words of its own outside the drawing (my folded table, with its links)
has no plain way to have them tidied as a caption is. I make each run
of words with `d.note` and move it into its cell. The drawing's facts
are set with `d.note` too, in ink (one line, `p.style.color = INK`),
since here the words are the drawing's matter and the note's gray is
for remarks; a class for that would be the better home.

Also for the lead to weigh, since `turn` mends it one row at a time:
at 320, fourteen of the nineteen rows of this piece that turn end
their first part on a small word (sixteen of twenty on the Beat tab),
though a stop or the end of a phrase stands one or two words away
(section 4.2 has the rows). A balance that would rather end on a
stop near the middle would spare each reading its list of turns.

## 3. Faults of my own drawing, found in its pictures and mended

- Every fact was a link from end to end: thirteen underlined
  paragraphs. Now only the head of each opens its place.
- A hairline between the two who bring nothing and the three who bring
  was crossed by the gift line. Taken out; a little space parts them.
- The folded table had three columns and ran off the paper at 390 (it
  had to be pushed sideways). On a narrow sheet the third column now
  stands under the second, and a fact that stands alone stands under
  its name.
- An act and its number were parted at a line's end (at 320 in the
  fly's part; at 1280 in the table). The words are now set by the kit.
- The bestiary's book stood after the stop, in brackets, beginning
  with a small letter. It now stands inside the stop.
- On a phone the hope could be read only by touching the gift line,
  a strip 10 px wide. The label over the gifts now says it too; the
  name where it stands again, and the red mark of each sentence,
  answer as the name does.
- With the line of the gifts lit, the names went pale with everything
  else. Those who bring and the one brought to now stay dark.
- The drawing-in ran to 3.2 s. The last mark now begins at 2.2 s.

## 4. Proposed for the reading

Nothing below is set in `reading.json`. Each was tested in the browser
only (the piece's data changed as the page received it) and
photographed.

**4.1 Headings: say the act and scene once.** The kit sets the place
beside each heading (under it on a phone), so each plate now gives its
act and scene twice. Pictures (present above or at left, proposed
below or at right): `proposed-headings-1280.png`,
`proposed-headings-390.png`.

- plate `gold`: `"heading": "Volpone to his gold: the first lines of the scene"`
- plate `song`: `"heading": "Volpone’s song to Celia: lines 1 to 10 and 15 to 18"`
- plate `close`: `"heading": "The court’s last words and the Fox’s"`

At 390 the third heading goes from two lines to one.

**4.2 Turns: where the page's own choice strands a word.** The page
balances a turned line, and here that leaves a small word (a joining
word, an article, a possessive, a preposition) at the end of the first
part on most rows that turn. Each number below is the word the row
would turn after; each first part then ends on a stop or at the end of
a phrase. Tested on every passage tab of both plates at 320, 360 and
390: every row turned where set, none took three lines, and a row that
fits on one line stayed whole (1280 as well).

- plate `gold`:
  `"turn": { "3.0": 4, "3.1": 2, "5.0": 5, "5.1": 2, "5.3": 3, "5.4": 2, "5.5": 5, "5.8": 4, "5.10": 2 }`
- plate `close`:
  `"turn": { "265.1": 5, "265.2": 5, "265.3": 3, "265.4": 6, "269.1": 3, "269.2": 3, "269.3": 2 }`

What turns now, and after which word (the page's own choice):
- 390: `close` 265.1 after 4. Picture `proposed-turn-close-390.png`.
- 360: `gold` 5.0 after 4; `close` 265.1, 265.2 and 265.4 after 4.
  Picture `proposed-turn-360.png`.
- 320: `gold` 3.1 after 3, 5.0 after 4, 5.1 after 3, 5.3 after 4, 5.4
  after 3, 5.5 after 4, 5.8 after 3, and on the Beat tab 3.0 after 3
  and 5.10 after 3; `close` 265.1 to 265.4 and 269.1 to 269.3 after 4.
  Pictures `proposed-turn-gold-320.png`, `proposed-turn-close-320.png`.

The rows the page already turns well are left alone (`gold` 5.2 and
5.6; `close` 265.5 and 269.4); `gold` 3.0 is named because the Beat
tab turns it one word early. With 265.4 turned after its word 6 the
two marked words of the simile stand together on the turned line, and
the Figure tab's stroke to row 265.5 becomes short and upright.

One row could go either way. `gold` 5.3 has a comma after its word 1,
and a turn there would set the verb and its subject alone on the first
part, as the Sentence caption speaks of them; but at 320 the second
part then fills the line to within about 5 px (tested: it fits on all
three tabs). I propose 3, which is safe, and name 1 for the lead to
choose.

If the lead wants the least: `"turn": { "265.1": 5 }` on `close` mends
the one row that turns badly at 390, and `"5.0": 5` on `gold` with
`"265.2": 5, "265.4": 6` on `close` mends 360.

**4.3 The song's figure: one stroke, from the act to being found
out.** Plate `song`, the Figure lens (the third lens of the plate):

`"join": [["act", "found"]]`

Now the lens draws no stroke at all: its `draw` is "pair", its tags
are act (one part), found (three) and verdict (two), and the usual way
of a pair joins nothing when the first two tags have one part and
three. The caption says the act is set against being found out, and
the label of each tag says the same, so this is a join the caption
makes. The kit draws the one stroke it can: from the act (row 106.14,
words 3 to 6) to the first of the three ways of being found out (row
106.15, words 1 to 5), which is on the next line; the two parts on row
106.16 are told by their color, as now. Pictures (present at left):
`proposed-join-song-figure-1280.png`; proposed at 390:
`proposed-join-song-figure-390.png`. The present state is in
`volpone-song-2-figure-1280.png`.

This is the least needed of the four: the three colors tell the figure
without it. I would set it, because the stroke falls on the turn of
the two lines, where the antithesis is.

**4.4 A new key in the facts of Names: whose dictionary.** Plate
`close`, the Names lens, in `facts`:

`"dictionary": { "what": "The meanings are from John Florio’s Italian and English dictionary, *Queen Anna’s New World of Words* (1611)." }`

(The words are the reading's own, from the working note `source` of
the same facts, which the page does not get.)

Why: the drawing's first label is "the name means", and nothing on the
tab says who says so. The caption has "an Italian dictionary of
Jonson's day"; the one fact that names Florio (`nameMeans` of the
fourth creature) names him in passing, as if the reader had met him.
With the key, the drawing sets the sentence under the rows, over the
bestiary's, as a second note of the same kind. Pictures:
`proposed-dictionary-names-1280.png`, `proposed-dictionary-names-390.png`.

Without the key (as now) the drawing leaves that note out and nothing
else changes; the script reads the key only if it is there. A `book`
key beside `what`, as `bestiary` has, would be set in brackets inside
the stop.

Not proposed: `beside` (no plate has two versions); any lens's
`label` (each is one word and fits); any other key. The script takes
the one the gifts are brought to to be the first creature who brings
nothing; that holds for the facts as they are.

## 5. In the reading, what I think is wrong

None of this is the drawing's to mend, and I have changed none of it.

- **Three titles are not marked.** `view.says` names three of Jonson's
  plays (two others, and this one) with no asterisks, so "What Auden
  said" sets them like any other words, while the line of sources
  under it sets its titles apart. Picture: `volpone-page-1280-0.png`.
  The words are the examiner's and the critic's to mark.
- **One more title, in a note.** Plate `song`, the Word lens, the note
  on row 106.15: Virgil's poem is named with no asterisks. Picture:
  `volpone-song-1-word-1280.png`, the fifth note. (If a note takes
  asterisks.)
- **A name met before it is given.** In the facts of Names, the
  `nameMeans` of the fourth creature says how Florio spells the word.
  Florio is nowhere else on the tab. Either the key proposed in 4.4,
  or "the dictionary spells it" in that fact.
- **The headings** give the act and scene that the page already gives
  beside them (4.1).
- **The first speaker of the last plate** is "1 AVOC" (2.3). If the
  kit is not to be changed for it, the reading has no key that would
  mend it; the hosted text's name for the speaker would have to be
  written out.

Looked at and found right: each `read` in the facts of Names opens the
block it says (the four blocks of the sentences were checked by the
names and things they hold; the fourth and fifth creatures share one
block because the judge sentences them in one speech). The caption of
Names and the facts agree, gift for gift and name for name.

## 6. Refused by the permission system

Nothing was refused.

## 7. The picture tool's last line

Build: `node build/pieces.mjs volpone`, no problems. Whole piece,
`node build/tools/shoot.mjs volpone --out remake/works/volpone/shots
--page`, 08:27 UTC:

    nothing reported; now look at the pictures

I looked at all of them again, both widths, every tab and the page
from top to foot; what I saw is in sections 2 and 5. The same line
ended every run of one tab, at 320, 360, 600, 640, 800 and 1024 as
well. `node build/tools/check-reading.mjs volpone` still ends "no
problems", "no warnings": the reading is as the examiner left it.

## Pictures kept

- `volpone-<plate>-<n>-<tab>-<width>.png`, `volpone-page-<width>-<n>.png`:
  the picture tool's, taken 08:27 UTC (four tabs again by 08:47).
- `proposed-headings-1280.png`, `proposed-headings-390.png` (4.1)
- `proposed-turn-close-390.png`, `proposed-turn-360.png`,
  `proposed-turn-gold-320.png`, `proposed-turn-close-320.png` (4.2)
- `proposed-join-song-figure-1280.png`, `proposed-join-song-figure-390.png` (4.3)
- `proposed-dictionary-names-1280.png`, `proposed-dictionary-names-390.png` (4.4)
