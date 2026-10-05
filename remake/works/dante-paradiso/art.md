# dante-paradiso: the artist's notes

Second artist on this piece. The first was lost (an answer cut off) and
left only pictures in `shots/`. This file was begun in the first
minutes and added to as the work went.

## Log

- Read BRIEF.md, ARTIST.md, the kit README, adams.js, then the reading,
  notes.md and exam.md. Built, shot every screen, listed faults.
- Drew plate "end", lens 3 ("Whole") in
  `site/js/pieces/dante-paradiso.js`. Looked at it from 300 to 1280 px,
  with the pointer on a bar and on a column of squares, with taps on a
  phone, and while it draws itself in (done 2.6 s after it starts).
- The kit was mended twice while I worked. After the lead's note of the
  second mending (`remake/KIT-CHANGES.md`) I read the two rewritten
  sections again, built, and shot every tab again at both widths. Every
  fault below was checked against those new pictures.
- The third mending (07:10 UTC) asked for no new pictures; I took them
  all the same, so that every picture in `shots/` shows the page as it
  now is, and looked at each again.
- Last full run, 07:13 UTC: `node build/tools/check-reading.mjs
  dante-paradiso` ("no problems / no warnings / the printed notes are
  fit to print"), `node build/pieces.mjs dante-paradiso`, then
  `node build/tools/shoot.mjs dante-paradiso --out
  remake/works/dante-paradiso/shots --page`. Its last line:
  "nothing reported; now look at the pictures".
- The kit's files changed once more after that (07:13 to 07:15 UTC,
  with no note yet), so I ran the three commands again at 07:25 UTC:
  the same last lines, and every one of the 33 pictures came out the
  same size to the byte as at 07:13, so what is said below of the
  07:13 pictures holds for the page as it stood at 07:25.
- Tried the drawing with facts taken away in flight (nothing written):
  without `thisCanto` and `passage` the upper drawing stands alone with
  one row of key; without `plan` and with the flag false there is no
  sum, no canto set apart and no sentence under the strip; without
  `parts` the script throws and the kit shows its plain table (see the
  last fault below).

## What I drew

Plate "end", lens 3, "Whole". Its `what` promises three things: how many
lines each of the hundred cantos has, how every canto ends, and the last
word of each part. Its `why` says each canto and the whole poem are
built as threes with one over. So two small drawings stand one under
the other (kit rule 6), and the two say the same thing at two sizes:
1 + 33 + 33 + 33 cantos, and 48 x 3 + 1 lines.

A. The hundred cantos. A thin ink bar to a canto, as tall as its lines,
   from zero, one scale for all. A row to each part. The canto that
   opens the whole stands apart at the left of the first row, and the
   other 33 of the Inferno stand over the 33 of the Purgatorio and the
   33 of the Paradiso, column for column, so the sum in the heading is
   seen: one bar by itself and three rows of one length. Each row has
   its name, its count of lines, the numbers of its first and last
   cantos, and at its end the last word of the part and what its last
   line says. The shortest cantos, the longest and the canto of this
   passage carry their figure; the canto of this passage is the one red
   bar. Form: bars for counts along an order, which is what these facts
   are. I looked at the forms the other artists chose and took none.
B. The canto of this passage, line by line. A small square to a line;
   the three lines of a group in one column, the closing line a column
   of one. The reader sees three full rows and one square over. The
   lines of the passage on this plate are red. Under it stands the
   reading's own sentence that every canto is built so (`cantoShape`),
   shown only if `everyCantoIsTercetsPlusOne` is true.

Forms tried for B and set aside (on a scratch page): blocks three units
long (a group could not be seen to be three lines); three short strokes
one under another (read as three long dashed rules); three upright
strokes (read as hatching). I also tried the sentence beside the strip,
in the column where the last words stand: five short lines, and its
first ran on from the label "1 closing line". Under the strip is better.

### As built

- Every count, name and word is read from `lens.facts` by key when the
  page runs: `cantos`, `lines`, `plan`, `parts[]` (`name`, `lines`,
  `linesPerCanto`, `lastCanto`, `lastLine`, `lastWord`, `lastLineSays`),
  `shortest`, `longest`, `thisCanto`, `passage`, `cantoShape`,
  `everyCantoIsTercetsPlusOne`. Nothing is typed. If `parts` is missing
  the script throws `facts: no parts` and the kit shows the plain table.
- How many cantos stand apart is the first term of the sum at the head
  of `plan`, used only if that sum agrees with the parts' own counts.
  The size of a group is (lines - closingLine) / groupsOfThree of
  `thisCanto`; if that is not a whole number, B is left out.
- Scale: one px to a group of lines, from zero, so equal steps of three
  lines are equal steps on the screen.
- Layout. Where the squares can stand 9 px apart beside a column of
  names and a column of last words (the drawing about 582 px wide or
  more: 607 px at a window of 1280) the sheet has three columns, all on
  whole pixels, and the squares of B end exactly where the bars of A
  end. Narrower (334 px at a window of 390), the name and its lines
  stand over the bars, the last word under them at the right, and both
  drawings fill the width. On a screen whose pixels are coarse the
  squares keep to whole pixels, so the drawing may stop a little short
  of its column. A figure at the right edge ends where its bar ends.
  Where the heading's two halves do not fit on one line the second
  goes under the first.
- Key: an ink bar is a canto; red is this passage. Folded away under
  it: the lines of every canto, part beside part, and the totals.
- Drawing in: each row's bars come up as the line under them draws
  itself, and the row's last number and last word come when its last
  bar is up; then the squares. All of it is done 2.6 s after it starts.
- The pointer (or a tap) adds: on a bar, its canto, its lines and how
  they divide, as "Inferno 6: 115 lines (38 x 3 + 1)"; on the first
  canto, what `plan` says after its colon; on a part's last canto, the
  line and word it ends on; on a column of squares, its line numbers.
  None of it is needed to read the drawing.
- No stylesheet of my own was needed.

## What I changed in the reading

Two small exact edits to `reading.json`. After both,
`node build/tools/check-reading.mjs dante-paradiso` ends "no problems /
no warnings / the printed notes are fit to print".

### 1. A new fact key, `passage`, in the shape lens's `facts`

The strip marks the lines of this passage in red and the facts did not
hold their numbers. They were counted on the hosted text and added
between `thisCanto` and `stelle`; no key that was there is touched.

Command, from the project root (it takes the plate's own rows from the
reading and counts rows of verse in
`site/data/texts/dante-italian/par-33.json`):

    node -e "const fs=require('fs');const part=JSON.parse(fs.readFileSync('site/data/texts/dante-italian/par-33.json','utf8'));const r=require('./remake/works/dante-paradiso/reading.json');const plate=r.plates.find(p=>p.id==='end');const m=plate.rows[0].match(/^(\d+)\.(\d+)-(\d+)\.(\d+)$/).slice(1).map(Number);const n=b=>b.k==='v'?b.lines.length:0;const before=(b,row)=>part.blocks.slice(0,b).reduce((t,x)=>t+n(x),0)+row;console.log(before(m[0],m[1])+1,before(m[2],m[3])+1,part.blocks.reduce((t,x)=>t+n(x),0))"

Result: `139 145 145` (rows 46.0 to 48.0 are lines 139 to 145 of the
145; run again at 06:57 UTC with the same result). The hosted canto has
49 blocks, 48 of three rows and one of one row.

Added: `"passage": { "firstLine": 139, "lastLine": 145 }`.

A second script checked the facts against themselves: the three lists
of `linesPerCanto` hold 34, 33 and 33 numbers and add up to the three
`lines`; together 100 cantos and 14,233 lines; every one of the hundred
is a multiple of three plus one; `howManyCantosOfEachLength` agrees.

### 2. `"join": [[2, 3]]` on the figure lens of plate "book"

Allowed since the second mending (ARTIST.md). The lens is
`draw: "map"` with two tags: "book" (the three bookbinder's terms) and
"meant" (three). The kit's `map` joins the first part of one tag to the
first of the other in the order the reading lists them, and the reading
lists the "meant" parts last row first. So the one stroke it drew
joined row 28.1 words 1 to 2 with row 28.1 words 3 to 5 (labels "with
love" and "in one volume"), which neither the caption nor the labels
say belong together. Its other two pairs stood on different rows and
got no stroke, and one of them ("lies in quires" with "in its depth")
is no pair at all.

The caption says one pairing plainly: the things of the universe are
spoken of as the loose quires of a book. Those are parts 3 and 2 as the
reading lists them from 0 (row 28.2 words 0 to 3, and words 4 to 5),
and they stand on one line. The stroke now joins those two and no
others. The caption also says the same things are seen bound, in one
volume; those terms stand on the row above, where the kit draws no
stroke across the English line, so they are told by their color.

If the poet or the examiner reads the pairs otherwise, the pairs should
be listed in `join`; `"join": "none"` (underlines only) is the safe
form, and I looked at it on a scratch picture: it is clean.

Pictures: `dante-paradiso-book-0-figure-1280.png`, `-390.png`.

Nothing else in the reading was changed: no heading, no label, no
`beside`, no `turn`. Every line of verse stays whole at 390, 360 and
320 px, so no `turn` was called for.

## Faults seen: the first list, and what became of each

Rows and words are numbered as the checker's proof prints them. A fault
struck through is gone in the pictures of the last run (07:13 UTC).

1. ~~prayer / Figure, both widths: `pair` joined the first word of the
   first pair to the first of the second, and the third pair had no
   join.~~ Gone: each pair has its own squared stroke in its own color
   (`dante-paradiso-prayer-0-figure-1280.png`, `-390.png`).
2. ~~book / Word, 1280: the gloss of row 28.3 word 2 stood a line lower,
   on the English line.~~ Gone at 1280, where the three glosses now
   share one line. Not gone at 390: see below.
3. ~~end / Sentence and end / Rhyme: a double space after row 47.0
   word 3, the room kept for the Beat tab's number.~~ Gone.
4. ~~end / Rhyme, 1280: one join of four was a squared bracket among
   curves.~~ Gone: four curves at 1280, four brackets at 390.
5. ~~Threads of sound: two places on different lines were never joined,
   a place of one syllable was a single stray dot, and the key said
   "coming back inside the line" of every thread.~~ Gone: a dotted
   stroke joins places on lines that follow each other, a place too far
   off is ruled under with three points, and the key says "from line
   to line". Two small things are left: see below.
6. ~~prayer at 390, Figure and Rhyme: the prose stood between the verse
   and its caption.~~ Gone: caption and key stand right under the
   verse, and the prose stands at the foot as plain prose.
7. ~~prayer at 1280: some 370 px of bare paper under the prose, and its
   three rows not level with their tercets.~~ Gone: see "The prayer
   plate" below.
8. ~~book / Figure: one of three `map` joins was not drawn.~~ The joins
   were wrong in another way; mended in the reading (`join`, above).
9. ~~Plate headings turned leaving one figure alone at 360 px.~~ Gone:
   the turn is balanced. One small thing is left: see below.

### The prayer plate (nine lines of verse, three rows of prose)

It sits well now at both widths.

At 1280 (`dante-paradiso-prayer-0-figure-1280.png`, `-1-rhyme-`,
`-2-english-`): verse at the left, prose at the right, and each
paragraph of the prose begins level with the first line of its tercet,
so the eye finds what answers what without a mark. The tercets are
parted by a little space. The prose is shorter than the verse, so there
is paper under each paragraph, but it now reads as the measure of the
difference between the two and not as a hole. Caption and key stand
under both. On the English tab the eight pairs are numbered in the
order of the Italian and each number is easy to find on both sides.

At 390 (`dante-paradiso-prayer-0-figure-390.png`, `-1-rhyme-`,
`-2-english-`): on Figure and Rhyme the verse comes first, its caption
and key right under it, and the prose last, as plain prose. On English
the prose follows the verse with its marks, then the caption and the
eight remarks. The plate is long (about 1,280 to 1,530 px), which is
the nine lines themselves. No line of verse turns at 390, 360 or 320.
Since the third mending the place ("Paradiso XXXIII") stands under the
heading on a phone, and the numbers of the pairs are larger; both read
well.

## Still there after the second mending

Worst first. Each was seen in the pictures of the last run (07:13 UTC)
or, where it says so, in scratch pictures taken after it: all of them
after the third mending too.

1. book / Word, 390 (`dante-paradiso-book-1-word-390.png`). Under row
   28.3 three glosses do not fit on one line, so the gloss of word 2
   ("qualities that exist in things") goes a line lower, and there it
   stands on Longfellow's line for that row: the tails of its letters
   touch the heads of the letters below. The row needs the height of a
   second line of glosses before its English line. At 1280 all is well.
2. end / Whole, and any drawing of a piece's own that gives marks to
   `d.hot`, with motion on
   (`dante-paradiso-end-3-whole-1280-pointer-while-drawing.png`, taken
   again at 07:26 UTC, 0.8 s into the drawing with the pointer on a
   bar). Every mark that has not yet appeared shows at once, pale: the
   bars of all three rows and all the squares stand there before their
   names, rules and headings (230 marks of 394, by a count in the
   browser). Cause, in `site/css/atlas.css`:
   `.dg:has(.dg-on) .dg-hot:not(.dg-on){opacity:.45}` outranks
   `.fade{opacity:0}`. And `.dg-hot{transition:opacity .2s}` comes after
   `.fade{transition:opacity .6s}`, so a mark that answers the pointer
   fades in three times as fast as one that does not. Two rules would
   mend both: `.dg:has(.dg-on) .dg-hot.fade:not(.in){opacity:0}` and
   `.fade.dg-hot{transition:opacity .6s}`. I tried both in the browser
   only, with nothing written to the kit, and they do what is wanted
   (no mark of 230 shows early). The second also slows the pointer's
   own dimming of those marks to .6 s; written as
   `.dg:not(:has(.dg-on)) .fade.dg-hot{transition:opacity .6s}` it
   keeps the pointer at .2 s, and I tried that form too. The third
   mending gave a hot line that draws itself a rule of its own
   (`.draw.dg-hot`); a hot mark that fades in wants the same care.
   I did not work round it in the script: it calls
   `d.hot(node, words, marks)` plainly.
3. prayer / Rhyme, both widths (`dante-paradiso-prayer-1-rhyme-1280.png`,
   `-390.png`). The thread of the sound the key names: its second place
   (row 1.2, last word) carries two dots, one over the word, where the
   dotted stroke from row 1.1 arrives, and one under the word, which
   nothing leads to and which reads as a speck. In `lens-rhyme.js` the
   last loop puts a dot under every place of a joined line; a place
   reached from the line above already has its dot over it.
4. end / Sentence, both widths (`dante-paradiso-end-1-sentence-1280.png`,
   `-390.png`). The key's blue row strings seven labels and says
   "subject:" four times over ("subject: my own wings, subject: my
   mind, subject: its wish, subject: power, the subject, last: the
   love, that moves sun and stars"); at 390 it takes three lines. The
   labels are the poet's. The kit could print once a lead-in that
   labels of one color share, or the labels could drop it, since the
   color already says "subject".
5. book / Rhyme and end / Rhyme, both widths
   (`dante-paradiso-book-2-rhyme-1280.png`,
   `dante-paradiso-end-2-rhyme-1280.png`). Where a thread's places are
   too far apart to be joined, each is ruled under with three small
   points, but the key's sample for the thread is two round dots joined
   by a dotted curve, a mark that stands nowhere on these two tabs.
   The sample should be the three points where no place is joined.
6. book, at 360 and 320 px (scratch pictures, taken again at 07:15
   UTC; the standard 390 is well): the heading takes two balanced
   lines and turns in the middle of its phrase, after its fifth word.
   The colon is the place to turn, and the "end" heading happens to
   turn there. The kit could keep the words after a heading's colon
   together. I did not reword the heading for the sake of a narrow
   phone.
7. prayer, at 768 and 1024 px (scratch pictures, taken again at 07:15
   UTC): two of the three prose paragraphs end with one word alone on
   the last line. The kit has the rule for it, but only for two
   passages of equal standing (`.is-twin .beside .pr.k-p`); this plate
   is verse with a prose version beside it, and its paragraphs are set
   with plain wrapping. `.beside .pr.k-p{text-wrap:pretty}` mends it:
   tried in the browser only, every last line then has two words at
   768 and 1024, and nothing moves at 1280 or 390.
8. end / Whole, 390 (`dante-paradiso-end-3-whole-390.png`): the room
   kept for the line the pointer speaks (two lines on a phone) stands
   empty between the key and "The figures", about 75 px. It is the
   price of the key not moving, and I only note that on a phone it
   reads as a gap.
9. end / Whole, only if the script fails (scratch pictures, made by
   taking `parts` out of the facts in flight; no reader sees it while
   the script runs). The kit's plain table then prints every fact of
   the lens: the keys as they are spelled in the file
   ("everyCantoIsTercetsPlusOne", "howManyCantosOfEachLength"), whole
   sentences set in a column some 90 px wide, and a column for each
   length of canto, so that the table is 1,542 px wide in a column of
   607 (334 on a phone) and most of it is reached only by scrolling
   sideways. KIT-CHANGES says the plain table shows names, numbers and
   short lists only; for these facts it does not.
   Least of the nine, since it needs a failure first; but a script can
   fail in a browser none of us tried.

## The reading

I think nothing in the captions, the marks, the facts or the sources is
wrong. Three notes for the poet or the examiner:

- book / Figure: the "meant" parts are listed last row first and the
  "book" parts first row first, so `map` paired them by accident. I set
  `join` to the one pair the caption states (above). If another pairing
  is meant, it should be listed there.
- end / Sentence: the part labels read badly once the key strings them
  (fault 4).
- end / Whole: the caption and `cantoShape` say every canto is groups
  of three and one line over. The drawing shows it for Paradiso 33 and
  prints `cantoShape` under it; the figures bear it out for all hundred.
