# The Flying Dutchman (Senta's ballad): the artist's record

Begun 3 October 2026, 06:12 UTC. Words of the libretto are pointed at
by row and word number. Nothing of the opera's text is copied here
beyond single words that the reading itself names.

Handed in: `site/js/pieces/dutchman.js` (the Scene drawing), this file,
and the pictures in `shots/`. No stylesheet of the piece's own. Nothing
in `reading.json` is changed (section 4 says what I propose and why it
is not in the file).

## 1. What I drew, and why that form

One shape lens: plate "refrain", tab 4 "Scene". Its `what`: the refrain
through the first two scenes of Act 2, who sings it each time, and what
Wagner's stage directions say of Senta. Its `facts` are nine rows in
order, each with `when`, `who sings`, `what is sung`, the direction
about Senta, and a `read` place in the English libretto.

The caption begins "The table follows the refrain", so the drawing had
to stay a table that a reader would call one. It is the reading's
table with one column drawn:

- **One row to a moment, top to bottom, in the order of `facts`.**
  The thing shown is an order, so the form is a line of marks along an
  order. Nothing is to scale and nothing claims to be: the rows are
  steps, as tall as their words.
- **The column "who sings" is drawn as lanes.** One hairline lane to
  each voice, named at its head (the names stand like steps, each over
  its own lane, so that three narrow lanes can carry three names at
  330 px). A dot where that voice sings; a ring, tied to the dot by a
  short stroke, where a second voice joins in; a thread from each
  singer to the next. The thread breaks where a row has nothing sung.
  This is what the reader is meant to see at a glance: the refrain
  leaves Senta's lane, goes to her hearers, and comes back.
- **Red is Senta**, the person the caption follows and the directions
  describe: her name, her dots. Everything else is ink and hairline.
  Where the red is missing from a row she does not sing, and the
  direction beside that row says what she is doing.
- **Beside each row, three kinds of line**, each in a kit class: the
  moment in small capitals (`dg-lab`); who sings and what is sung,
  upright, joined by a colon as a speaker's name is in a libretto
  (`dg-n`); the stage direction in italic (`d.note`), which is how
  stage directions are printed. A legend in the top right corner gives
  the three column names of the reading in those three styles. Where
  a line of the row must turn, it turns after a colon or a comma if it
  can and is evened out if it cannot, so that no word stands alone.
- **Two layouts from `d.w`.** From 520 px the moments stand in a column
  of their own left of the lanes, right-aligned to them. Below 520 px
  the lanes go to the left edge and the moment heads its row.
- **The moment is a link** to its `read` place in the libretto printed
  on the site, with the kit's hairline underline (red under the
  pointer). A private preview without the book gets no links. The
  hosted English has no stage directions in Act 2, so the link opens
  the nearest speech, as the reading's `open` list says.
- **It draws in from the top**, a row every 200 ms, done in under
  three seconds; with reduced motion it is simply there.

Every word and name comes from `lens.facts` when the page runs. The
voices are not typed into the script: a voice is whoever leads a row in
which something is sung (the words of `who sings` before the first
comma); a later clause that begins with a voice's name is that voice
joining in; the person of the directions is the first word of that
column's own name. The column of directions is found as the one that
is none of `when`, `who sings`, `what is sung`, `read`. If the rows,
the two named columns or the column of directions are missing the
script throws and the kit shows its plain table.

Words of my own on the page, all in the key: "sings", "another sings",
"joins in", "from one singer to the next". The legend's second line
joins two of the reading's column names with a colon.

No number was needed that `facts` does not hold, so no key was added.

### Tested with the facts changed (in the browser only, no file touched)

With a scratch copy of the picture tool that alters the piece's data on
its way to the page:

- a fourth voice with a long name, a row with no direction, two rows
  with no `read`: four lanes, the legend moves under the names where
  they would collide, the two rows are not links;
- the column of directions renamed after a person who never sings: no
  red anywhere, and the key drops "another";
- the column of directions removed: the plain table, and a warning in
  the console.

Widths looked at: 320, 360, 390, 600, 820, 1024, 1280 px (the drawing
is 264 px wide in a window of 320 and 607 px in one of 1280).

## 2. Faults seen

Rounds of pictures: 06:13 and 06:38 UTC (before the second mending of
the kit), 06:48 and 07:11 (after `remake/KIT-CHANGES.md`), and the last
round named in section 6. The picture tool gives a tab one file name
through every round, so a struck fault names the picture in which it is
now seen mended. Everything in this section is the kit's unless it says
"mine".

### Before the second mending; struck where gone

- ~~tale / Beat / both widths: no room after the number of the remark on
  row 1.0 word 1, and a doubled space at that word on the other three
  tabs.~~ Gone: `dutchman-tale-0-beat-1280.png`,
  `dutchman-tale-1-rhyme-1280.png`.
- ~~tale / Beat, Rhyme, Word / 390: the English block stood between the
  German with its marks and the caption.~~ Gone: it follows the caption
  and the key, `dutchman-tale-0-beat-390.png`.
- ~~tale / Rhyme / both: nothing joined the R of row 1.6 to the R of
  row 1.7, and the key did not say that the sound comes back from line
  to line.~~ Gone: `dutchman-tale-1-rhyme-1280.png` (what is left of
  this thread is fault 5 below).
- ~~tale / Beat, Rhyme, Word / 1280: the English, the caption and the
  key in the right column ran far below the German.~~ Gone on Rhyme
  only (`dutchman-tale-1-rhyme-1280.png`); Beat and Word are fault 6.
- ~~tale / English / 1280 and 390: the numbers 1, 2 and 3 under the
  English rows touched the row below.~~ Gone:
  `dutchman-tale-3-english-1280.png`, `dutchman-tale-3-english-390.png`.
- ~~tale / English / 390: the turned last word of English row 54.7
  began at the margin.~~ Gone, it hangs indented (it still stands
  alone: fault 7).
- ~~refrain / heading / 390: the heading turned with one word alone.~~
  Gone: `dutchman-refrain-0-english-390.png`.
- ~~refrain / every passage tab: no space before Senta's own three
  lines (row 7.0), which begin a new stanza.~~ Gone:
  `dutchman-refrain-0-english-1280.png`.
- ~~refrain / Scene / 390: the line over the drawing ended on one
  word.~~ Gone: `dutchman-refrain-3-scene-390.png`.
- ~~oath / both tabs: the signs of lines left out stood between the
  wrong rows.~~ Gone with the examiner's new rows:
  `dutchman-oath-0-rhyme-1280.png`.
- ~~oath / Word / 390: glosses of 11 px, hard to read.~~ Gone:
  `dutchman-oath-1-word-390.png`.
- ~~Mine, refrain / Scene: each moment had two underlines, the page's
  dark one for a link and my hairline.~~ Mended in the script (the
  page's is switched off on those links).
- ~~Mine, refrain / Scene: a direction could end with one word on a
  line of its own.~~ Mended (the notes are balanced).
- ~~Mine, refrain / Scene / 390: "who sings: what is sung" turned in
  the middle of a phrase (in the rows "After the third stanza" and
  "Then").~~ Mended: a line now turns after a colon or a comma where
  that fits, and is evened out where it does not.

### Still there after the second mending

Worst first. Words are numbered as the checker's proof numbers them,
from 0. Pictures are of the last round.

1. **refrain / English, Figure, Verbs / 1280 and 390: a small English
   line stands as near the next German line as its own.**
   `dutchman-refrain-0-english-1280.png`: from the foot of a German
   line to the top of its English is 34 px, from the foot of that
   English to the top of the next German line 29 px (rows 2.0 to 2.2
   and all after). Nothing but the size of the type says which line a
   small line belongs to. `dutchman-refrain-0-english-390.png`: where a
   German line has turned, its second part stands 49 px under the
   first, the English 48 px under that, the next German line 46 px
   under the English, so three kinds of line follow at one pitch (rows
   2.0, 2.1, 6.0, 6.1). Wanted: the English close under its own line
   and the wider space after it; a turned part closer to its first part
   than the English is. This would also shorten the plate on a phone.
2. **tale / English / 1280: the pairs do not stand level.**
   `dutchman-tale-3-english-1280.png`: the German rows are 65 px apart
   and the English rows 46 px. Pair 1 is nearly level; pair 2 (row 1.3
   words 3 to 5, English row 54.4) stands 48 px higher on the right
   than on the left, pair 3 (row 1.4, row 54.5) 68 px, pairs 4 and 5
   (row 1.6, row 54.7) 107 px. The versions answer line for line (rows
   1.0 to 1.6 against 54.1 to 54.7; row 1.7 is the end of 1.6 carried
   over), but the kit sets rows level only for `beside` with as many
   rows each, and here there are 8 and 7. Wanted: on a compare tab both
   blocks at one pitch. `tested-beside-tale-3-english-1280.png` shows
   it (see section 4 for why `beside` is not set).
3. **refrain / every passage tab / 390 and 360: a line turns inside
   the phrase the caption quotes.** `dutchman-refrain-0-english-390.png`:
   row 2.1 turns after word 7 and row 6.1 after word 7, so the phrase
   of words 5 to 8, printed in italic in the caption, is cut in two and
   the underline of pair 1 (words 5 to 9) and of pair 3 (words 5 to 11)
   is in two pieces; row 6.0 turns after word 6, between a genitive and
   its noun. At 360 px rows 2.2 and 7.0 turn inside the words of pairs
   2 and 4 as well. This one a plate's `turn` mends; what I propose,
   and why it is not in `reading.json`, is in section 4.
4. **refrain / English / both widths: the remarks are numbered 1 to 6
   and nothing on the passage carries a number.**
   `dutchman-refrain-0-english-1280.png`: line under line the pairs are
   joined by strokes, and a remark is tied to its pair only by the
   color of a small numeral; 4 (green) and 6 (teal) are close. On tale
   / English the same remarks have numbers at both ends. Wanted: the
   number at the German end of each pair here too.
5. **tale / Rhyme / both widths: the three places of one sound are
   marked three ways.** `dutchman-tale-1-rhyme-1280.png`,
   `dutchman-tale-1-rhyme-390.png`: under the R of row 1.3 word 5, two
   faint specks (by its own note the rhyme script means three points
   there, so that the place does not read as a speck; two specks are
   what shows); under the R of row 1.6 word 10, one dot; at the R of
   row 1.7 word 2, a dot above and a dot below. The dotted line joins only the last two. A lesser
   thing on the same tab: the point that stands for a line with no
   rhyme, after row 1.7 and at the end of the scheme, is not in the key
   and reads as a speck.
6. **tale / Beat and Word / 1280: bare paper under the German.**
   `dutchman-tale-0-beat-1280.png`: the German with its marks ends 655
   px down the plate; the right column (English, caption, key, remarks)
   ends at 983 px, so the lower left is empty for 328 px. Word: 321 px,
   `dutchman-tale-2-word-1280.png`. The key of the marks would sit well
   under the passage it explains.
7. **A turned English line leaves one word alone.** tale / all four
   tabs / 390, `dutchman-tale-3-english-390.png`: English row 54.7
   turns before its last word (word 8), and on the English tab that
   cuts the English end of pair 5 (words 7 and 8) in two. At 360 px the
   same happens to English row 55.2 on plate refrain. `turn` cannot be said for a row of the second
   version (the checker refuses it), so this is the kit's.
8. **tale / Beat / 390: two hairlines with nothing between.**
   `dutchman-tale-0-beat-390.png`: the word "Again" is as wide as the
   plate there and ruled under; 26 px below comes the rule over the
   English block.
9. **Page / 1280: the title of the record turns with one word alone,**
   and the opera's title is split by the turn.
   `dutchman-page-1280-4.png`. At 390 it turns well.
10. **refrain / heading / about 600 px** (not one of the two widths):
   the heading turns before its last word, and the source line runs on
   after that word. Not photographed by the picture tool.

## 3. The two plates that set the German with an English version

**tale** (8 German rows, 7 English, so two blocks). At 1280 the blocks
stand side by side and the caption under the shorter one; on Beat,
Rhyme and Word the English is plain and unmarked, which is right, since
the poet's notes say it is a free singing version and never a gloss
(the Word tab has its own glosses). On a phone the English follows the
caption on those three tabs and stands under the German on the English
tab. It reads well at both widths but for faults 2, 6, 7 and 8.

**refrain** (10 rows each, so line under line; the caption says "The
small lines are the libretto's English"). At 1280 every line is whole
and the strokes of the six pairs are clear. On a phone four of the ten
German lines turn; the passage is 1,173 px tall and its caption begins
1,351 px down the plate: long, but it belongs to the thing. What can be
mended is the spacing (fault 1) and where the lines turn (fault 3).

## 4. What I left alone, and why

Nothing in `reading.json` is changed by me.

**`"beside": true` on plate tale: tested, not set.** With a scratch
copy of the picture tool I set it in the browser only. The English tab
at 1280 is then at its best (every pair level:
`tested-beside-tale-3-english-1280.png`). But a plate with `beside`
keeps its second passage in place on every tab and at the German pitch,
so on a phone the unmarked English, about 540 px of it, stands between
the German with its beats, rhymes or glosses and their caption on three
tabs out of four; and the two would be set as passages of equal
standing, which the poet's notes say they are not. One tab's gain at
one width did not pay for that. The mend belongs in the kit (fault 2).

**`turn` on plate refrain: proposed, not set.** Fault 3 is what `turn`
is for. Tested in the browser only at 390 and 360 px
(`proposed-turn-refrain-0-english-390.png`,
`proposed-turn-refrain-0-english-360.png`):

```
"turn": { "2.1": 3, "2.2": 2, "6.0": 3, "6.1": 3, "7.0": 3 }
```

on the plate whose id is refrain. Rows 2.1, 6.0 and 6.1 then turn at
their comma, so the relative clause is whole on the second part, the
quoted phrase is unbroken, and each pair has one underline standing
just over its English. Rows 2.2 and 7.0 fit whole at 390 and turn only
on a narrower phone, 2.2 before the words of pair 2 and 7.0 after its
first sentence. At 1280 nothing changes (measured: no row turns, the
plate keeps its height). At 320 px the second parts are too long and
the page turns the lines its own way, as now. Row 2.0 turns well by
itself (after word 4) and tale row 1.6 turns where Wagner's own edition
divides the line (after word 6), so neither needs saying.

Why it is not in the file: I put those seven lines in with one exact
edit and went to run `node build/tools/check-reading.mjs dutchman`, as
ARTIST.md asks after any edit. The permission system of my session
refused that command twice (its reason: a change to a shared resource),
so I could not show "no problems", and I took the lines out again with
one exact edit. `reading.json` is as the examiner left it. By the
checker's own rules the five rows are lines of verse and each number is
inside its row, so I expect it to pass. It is for the lead or the
examiner to add.

**Headings and tab names: unchanged.** All three headings stand on one
line at 1280; at 390 the long one is balanced over two lines. The tab
names are one word each.

**`join` on refrain / Figure: not set.** The figure's parts are
underlined in five colors, one to a person, and no strokes are drawn.
Nothing in the caption or the labels says that two parts belong
together more than the others, so there is nothing to join.

**No new key in `facts`, and no stylesheet.** The drawing needs no
number the facts lack, and the kit's five classes of type did the job.

## 5. What I think is wrong in the reading (not mine to change)

- **refrain / Scene, the row "Just after": `who sings` is "no one".**
  The first and eighth rows show that the column is not kept to the
  refrain (a spinning song, a dream). In the English printed here
  (dutchman/act-2, blocks 63 to 72) five speeches stand at that
  moment: the nurse with all the girls, Erik, the girls, the nurse,
  Erik. So "no one" is true only of the ballad and its refrain. The
  drawing shows the facts as given (no dot, the thread broken). The
  examiner may want the cell to say who is heard there, or the `when`
  to say what the row marks.
- **Titles inside `says`.** The kit now sets a title between asterisks
  in italic. In Auden's view the name of his poem of 1941 has no
  asterisks, and in "More from Auden" neither have his book of 1950,
  Nietzsche's book on Wagner, or the name of Wagner's cycle, so they
  print upright while the source lines under them are italic. The list
  of sources has the asterisks.
- **The caption of Scene calls the drawing "The table".** That fixed
  the form: it is drawn as a table with one column made into marks. If
  the poet meant the plain table, the script can be dropped and the
  kit's table returns; if not, the word may stay, since a reader will
  still call this a table.

## 6. The last round

3 October 2026, 07:22 UTC, after the kit's third mending:

```
node build/pieces.mjs dutchman
node build/tools/shoot.mjs dutchman --out remake/works/dutchman/shots --page
```

Last line printed: `nothing reported; now look at the pictures`.

All 34 pictures were opened (the phone ones cut into slices and read at
full size). They are the same, byte for byte, as those of the rounds of
07:11 and 07:17, so nothing moved under the last look. Faults 1 to 9
above were each seen again in them.

Three more pictures in `shots/` are not the picture tool's. They come
from my scratch copy of it, which can alter the piece's data on its way
to the browser and touches no file of the site:

- `tested-beside-tale-3-english-1280.png`: plate tale with `beside`,
  for fault 2;
- `proposed-turn-refrain-0-english-390.png` and
  `proposed-turn-refrain-0-english-360.png`: plate refrain with the
  five turns of section 4.

Not done, and why: `node build/tools/check-reading.mjs dutchman` was
last run by me at 06:56 (no problems, no warnings), before the edit
told of in section 4. After that edit the permission system refused the
command, and since the edit is taken out again there is nothing of mine
in `reading.json` for it to check.
