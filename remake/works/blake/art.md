# The artist's notes for the piece "blake"

Written by the artist on 2026-10-03, while an examiner was at work on
the same piece and the lead was mending the kit. These notes give the
state after the seventh mending (`remake/KIT-CHANGES.md`, 10:13 to
10:40 UTC, and its one later mend of 11:06, which touches only two
words joined by a dash; this piece has none). Every picture named
here was taken after 10:40, and all but those of the motion run
after 11:06. The times of the last build and the last pictures are
at the foot, under "The last run". Words of the work are never typed
out here: a place is named by plate, tab, width, and the row and word
number that
`node build/tools/words.mjs blake marriage <block>` prints (`12.0 w4`
is word 4 of row 12.0, counted from 0; `p:16.0` is a row of the second
passage of the first plate).

## Found last, from 12:00 to 12:35 UTC, between a phone and 1280

None of these is at a width that was asked for, and no mending made
them: the lines of the kit they rest on stand unchanged in the lead's
copy of 07:37. Each is told in full under "Lesser" or "Reports" below.

- All three plates, windows from 552 to 916 px, a tablet held upright
  (kit): under the passage a long key stands beside its caption in a
  column a third of the plate wide, and the paper under the caption
  is bare for 250 to 736 px. It is so under Answer, Beat and the
  three Words tabs. `shots/try/blake-proverbs-3-words-600-asis.png`.
- sentence, windows from 917 to 981 px (kit): the plate goes to two
  columns before its two lines fit beside the caption, so one or both
  turn, and the passage has more screen lines under Beat than under
  the other tabs. `shots/try/blake-sentence-0-beat-960-asis.png`.
- creed, windows from 917 to 978 px: the caption stands beside the
  passage before the two passages stand side by side, so the errors
  stand over the contraries at 26 px. It reads, and may be left.
  `shots/try/blake-creed-0-answer-960-asis.png`.
- proverbs, 820 to 916 and 1100, where a browser sets letters in whole
  pixels as the picture browser does: row 34.20 is 1 to 13 px wider
  than its column. `shots/try/blake-proverbs-0-frame-900-asis.png`.

## Still there after the second mending

Worst first, but for G, which was found last and ranks after C. "Kit"
means the fault is the lead's to mend; nothing was changed in `site/`
or `build/`. "New" means a mend made it. A picture named without a
folder is in `shots/` and is one of the 32 of the last run. The phone
widths 360 and 320 were looked at as well as 390, every tab, in
`shots/try/` (the pictures that end in `-360-asis.png` and
`-320-asis.png`). The seventh mending mended none of the faults
below: each was seen again in a picture, or measured again, after it.

### A. sentence, all tabs, 390: row 32.0 turns one word early, and the reading's `turn` key is not set

Where a verse line must turn, the kit turns it after the comma or
stop nearest its middle, and balances the two parts of a line that has
none there (`plate.js`, the note over `const stop`). Since the seventh
mending it also keeps a small leading word (an article, a preposition)
with the word after it. The rows below have no stop near the middle,
and the words at their turns are not of that kind, so the balance
still parts words that belong together. The kit lets a reading say
where a line turns, so the mend is in the reading.

- sentence, all tabs, 390 (the same at 414, 375, 360 and 320): 32.0
  turns after w5, seven syllables and seven. The caption and remark 2
  of the Beat tab say that the old long line broke after its eighth
  syllable, which is after w6, and the red 2 that marks the place
  stands at the head of the turned part. The turn also parts w6, a
  noun, from w5, the word that goes with it. Under Question the
  bracket of the subject is cut there: one word on the first screen
  line and six on the second. (32.1 turns at its comma, eight and
  six.) Pictures: `blake-sentence-0-beat-390.png`,
  `blake-sentence-1-question-390.png`, and
  `shots/try/blake-sentence-0-beat-360-asis.png` and `-320-asis.png`.
- proverbs, Frame, 320 to 326 (not a width that was asked for): all
  four rows of the frame turn, 34.21 and 34.24 before their verb,
  34.22 and 34.23 after it. Like parts no longer stand under each
  other, and one stroke is left, from the verb of 34.21 to the verb of
  34.22. Picture: `shots/try/blake-proverbs-0-frame-320-asis.png`.
  (Under Yoke and Cross the same rows turn at the same places, but
  they carry no marks there and stand close, so it tells less.)

The keys that mend both (they are in `try/turn.json`):

    plate "sentence":  "turn": { "32.0": 6 }
    plate "proverbs":  "turn": { "34.21": 4, "34.22": 4,
                                 "34.23": 4, "34.24": 3 }

Of the four keys of the proverbs, the second and third change a turn.
The first and last say what the kit does now, and are there so that
the four rows keep together whatever the balance does later.

They are not in the reading. The artist put the first in at about
06:51 UTC and took it out again at once. This session's permission
system refused the command that must follow any edit of the reading
(`node build/tools/check-reading.mjs blake`), so the edit could not be
checked, and an unchecked edit was not left in a file the examiner is
working on. `reading.json` stands as the examiner left it. The keys
are for the lead or the examiner to add.

Tried without touching the reading: `look.mjs --patch try/turn.json`
lays the keys over the built piece as that tool serves it.

- 32.0 turns after w6 from 320 to 414. At 390 its screen lines are 228
  and 141 px of 334, the red 2 stands at the end of the first, and the
  phone shows the two lines as four, eight and six twice, which is
  what the caption says they became. Under Question the bracket of
  the subject is then cut after its noun and not before it.
- At 320 and 325 the four rows of the frame turn before their verb,
  the like parts stand under each other, and no stroke is left over.
- No other row turns anywhere but where it turns without the keys
  (looked at 1024, 960, 600, 480, 414, 390, 375, 360, 325 and 320; at
  1280 none turns).
- `measure` and `page` with the patch print line for line what they
  print without it at 1280, 1024, 390, 360 and 320. `ends` differs
  only in the two rules of 32.0 that are parted at its turn, and each
  part still ends with its words.

All of this was run again after the seventh mending. Pictures, in
`shots/try/`: `blake-sentence-0-beat-390-turn.png` (and
`-1-question-`, `-2-words-`, and the same three at 360 and 320),
`blake-proverbs-0-frame-320-turn.png` (and `-1-yoke-`, `-2-cross-`,
`-3-words-`). The same tabs without the keys end in `-asis.png`.

### B. sentence, all tabs, 390: the passage stands at the smallest size though it turns anyway (kit)

On a phone the two lines of this plate are set at 16.5 px, over a
caption of 15 px. The creed above them is at 20 px. So the sentence
the piece is named for is the smallest passage on the page and hardly
larger than its own caption. `fit()` in `plate.js` first tries to keep
each line whole, finds at its floor of 16.5 px that it cannot, and lets
the lines turn without making the type larger again. Under Beat, the
widest tab, the four screen lines are 196, 178, 213 and 184 px in a
column of 334: none fills two thirds of it.

At 360 and 320 the type and the four lines are the same, in columns
of 304 and 264 px.

Pictures: `blake-sentence-0-beat-390.png`, `-1-question-390.png`,
`-2-words-390.png`, and in the page `blake-page-390-2.png`.

Tried (`try/size.css`, in place from the first load): the same plate
at 22 px. The lines turn at the same words, the screen lines are 262,
230, 278 and 241 px of 334, the passage grows from 225 to 250 px, and
`measure` reports nothing new. With the turn of fault A as well
(`try/size-turn.css` with `--patch try/turn.json`) they are 303, 183,
278 and 241 px. Pictures: `shots/try/blake-sentence-0-beat-390-size.png`
and `-size-turn.png`, and the same two for the other two tabs.

For the kit: when the lines of a verse plate must turn, take the
largest size at which no more rows turn than turn at the floor and no
part of a turned row is wider than the column, up to about 22 px on a
phone. Here that gives 22 px. The proverbs would keep 16.5 px: five of
their six rows stand whole there, the longest filling 295 of 334 px,
and the Frame tab needs them whole. One thing to know for that mend:
the kit lets a row turn freely (`free`) when a part of it measures too
long while the plate is set up, and at 22 px it measures the first
part of 32.0 so, though the part fits when drawn (303 px, and 309
with its red number). The trial style sheet overrides that.

The same rule tried at the other phone widths, under Beat: at 360 it
gives 22 px (the longest part 278 px of 304), or 21.5 px with the
turn of A (295 px); at 320 it gives 20 px (257 px of 264), or 18.5 px
with that turn (253 px). Nothing is wider than the window in any of
the four.

### C. Three tabs, both widths: the end of a bracket touches the comma after its last word (kit, new)

A rule now stops under the last letter of its span, so its closing
tick rises between that letter and the point after it. Where the point
is a comma or a semicolon, the top of the tick meets its tail.

- creed, Grammar: the blue bracket that ends at 13.0 w9, under the
  semicolon. 0.3 px apart at 1280, 1.2 px at 390.
- sentence, Question: the plum bracket that ends at 32.1 w5, under the
  comma. 0.5 px at 1280, 0.2 px at 390.
- proverbs, Yoke: the red bracket that ends at 34.20 w6, under the
  comma. 1.4 px at 1280, 0.2 px at 390.

Pictures, six times enlarged: `shots/close/zoom/tick-grammar-1280.png`,
`tick-question-390.png`, `tick-yoke-390.png`, and the other width of
each beside them. In the plates: `blake-creed-1-grammar-1280.png`,
`blake-sentence-1-question-390.png`, `blake-proverbs-1-yoke-390.png`.
`look.mjs measure` prints the distances, and `POINT=6 look.mjs measure`
prints every stroke within 6 px of a point: no other is nearer than
2.3 px, and where a bracket ends before a full stop or a question mark
its tick is 2.5 px or more clear.
With the letters set by fractions of a pixel, as a phone sets them
(`CHROME_ARGS=--font-render-hinting=none`), the three are 0.3 and more
than 1.5 px, 0.5 and 0.8 px, and 0.5 and 0.2 px. At 360 and 320 the
three stand as at 390 (1.2 or 1.0, 0.2 and 0.2 px). The seventh
mending changed none of these figures.

Cause: `lens-sentence.js`, `y = ln.b + 3 + s.level * 8` with ticks
4 px tall. The tick reaches 1 px above the foot of the word's box,
where the tail of a comma ends. Mend: rule 3 px lower
(`ln.b + 6 + s.level * 8`). The tick then ends 3 px under the tail, and
the lower rule of a nested pair stands 14 px under its line, inside a
band of 30 px.

### D. Three keys, both widths: two names joined by a comma read as one (kit, or the reading; new)

The key of a sentence tab now has one row for each color. Where a
reading gives one kind two labels, the row prints both with a comma
between them (`lens-sentence.js`, `names.join(', ')`). The seventh
mending parts such labels with a semicolon where one of them holds a
comma, but in the key of a Figure tab only, and none of these three
labels holds one.

- proverbs, Yoke, first row: the label of the first half of 34.20 and
  the label of the second half. They say opposite things of the two
  halves, and with a comma between them they read as one description
  of one thing.
- creed, Grammar, first row: the labels of the two heads, 11.0 and
  p:15.0.
- sentence, Question, fifth row: the labels of 32.1 w1 to w5 and of
  32.1 w6 to w10.

Pictures: `blake-proverbs-1-yoke-1280.png` and `-390.png`,
`blake-creed-1-grammar-1280.png`, `blake-sentence-1-question-1280.png`.
Mend in the kit: part the names with the raised dot that already parts
the two senses of a gloss, or set the second name on a line of its own
under the first. Mend in the reading: give the two things two kinds.
There are eight colors now; each of these three lenses has five kinds,
and the checker warns above five.

### E. creed, Answer, pointer: two nouns of the caption light only some of their places (kit, new)

A word named in a caption now lights only the places where a mark of
the tab begins, and the places no mark covers. The Answer caption says
that the contraries keep four nouns of the errors, and names the four
in bold. `look.mjs refs` gives what each lights:

- the first lights 3 of its 5 places: 12.0 w10, p:16.0 w4 and p:16.0
  w12. It stays dark at 13.0 w9 and p:17.0 w10, where it is the last
  word of a tie and not the first;
- the third lights 3 of its 4 places, and stays dark at p:17.0 w20;
- the second and the fourth light every place they stand in (5 and 2).

So a reader who points at a noun that the caption says was kept is
shown only some of the places it was kept in. Under Grammar the same
rule does what was wanted: the bold first word lights four words and
the two italic verbs one and five, the counts the caption states.
Mend: keep the rule for tabs whose marks have kinds, and on a compare
tab let a word light every place it stands in.

### F. 390: the line over the title turns after its dot (kit, new)

The author's name and the title of the work are each kept whole now,
so at 390 the line turns between them, and the raised dot that parts
them is left at the end of the first line, after the name. Picture:
`blake-page-390-0.png`, and closer `shots/close/zoom/page-390-head.png`.
Mend: where the line turns there, leave the dot out.

### G. sentence, all tabs, with motion on: the marks are placed before the letters have come to rest (kit; seen when the page is slow)

The picture tool asks the browser for reduced motion, so its pictures
cannot show this. For a reader who has not asked for that, the letters
of the Beat tab change weight over 350 ms when the tab is opened or
left, and the kit places the marks of the new tab 430 ms after the tap
(`plate.js`, `setLens`, the last line: `setTimeout(() => draw(run),
same || still() ? 20 : 430)`). If the page is slow in that half second
the letters are still on their way at 430 ms. The marks are measured
against them, the letters move on, and the marks stay where they were
put until the window is resized.

Seen after the seventh mending, with nothing done to slow the page:
in the run of `look.mjs motion` from 11:05 to 11:11 the rules of
Question stood 1 to 2 px from their words at 1280 (five rules) and
1 px off at 390 (three rules), while the letters were the same as in
the still picture. The run of 09:55 to 10:02 showed the same, pixel
for pixel, and a run at 09:24 showed none. The machine was busy with
other work each time, as a slow phone is busy with its own.

Measured: `look.mjs probe` opens a tab with motion on and reads the
width of row 32.0 just before the marks are placed and again at rest.
`STALL=290` keeps the page busy for 290 ms from 150 ms after the tap,
as a slow device would be. With the kit as it is, from 11:12 to 11:23:

- Question opened after Beat, 1280, nothing done to slow the page:
  6 runs of 6 ended rules 1 to 2 px from their words. The machine
  itself was slow then (400 to 480 ms between two frames). The row
  was 543.16 or 546.16 px wide when the marks were placed and 544.16
  at rest.
- The same with `STALL=290`: 3 runs of 6.
- Question opened after Beat, 390: 2 runs of 4 with `STALL=290`,
  rules 1 px from their words (the row 193.89 px when the marks were
  placed, 192.89 at rest). None of 4 with nothing done, when the page
  kept up (19 and more frames in the first 700 ms in three of them).
- Earlier, from 09:12 to 09:35, and not run again since (the line of
  the kit is the same): Words opened after Beat, 1280, 3 runs of 6,
  underlines up to 4 px to the right of their words; Beat opened
  after Question, 1280, 5 runs of 6, dots up to 2.5 px from the
  middle of their syllables.

Pictures: a run that went wrong with nothing done to slow it, and one
that went right, `shots/motion/blake-sentence-1-1280-probe-free1-off.png`
and `-probe-3-right.png`; the first line of both enlarged, right
above and wrong below, `shots/close/zoom/motion-question-1280.png`;
a wrong run at 390 and a right one,
`shots/motion/blake-sentence-1-390-probe-1-off.png` and
`-probe-free1-right.png`; the two pictures of the motion run,
`shots/motion/blake-sentence-1-question-1280-moved.png` and
`-still.png` (and the same two at 390).

It will be the same on any plate of the site that has a Beat tab: no
other lens changes the weight of letters.

Mend, tried: `look.mjs probe --mend` serves `plate.js` to its own
browser with that one line changed. At 430 ms it looks whether a
letter is still changing weight, and waits 40 ms more while one is:

    timers.push(setTimeout(function wait() {
      const busy = !!root.getAnimations
        && root.getAnimations({ subtree: true }).some((a) =>
          a.transitionProperty === 'font-weight'
          && a.playState === 'running');
      if (busy) timers.push(setTimeout(wait, 40)); else draw(run);
    }, same || still() ? 20 : 430));

From 11:15 to 11:23, 14 runs of 14 then ended every rule with its
words: 4 at 1280 and 3 at 390 with `STALL=290`, and 4 at 1280 and 3
at 390 with nothing done, on the same slow machine. In nine of them
the row was still 1 or 2 px from its resting width at 430 ms.
Picture: `shots/motion/blake-sentence-1-1280-probe-mendfree2-right.png`.
One of the 14 was photographed, 3 seconds after the tap, with its
last rule still drawing itself: with the mend the marks begin later
on a slow page, and they end where they should. Counting the trials
before this mending, the changed line has ended every rule with its
words in 49 runs of 49. Nothing in `site/` was changed for this
trial.

### Lesser

- sentence, Beat, 390: under the caption, the name of the measure and
  its one line now stand above the four numbered remarks and the
  samples of its marks below them, so the remarks part the key in two.
  Picture: `blake-sentence-0-beat-390.png`. The remarks before the
  whole key, or after it, would keep it together.
- creed, Answer and Words, 1280: the six remarks and the eight notes
  stand under the caption in three columns (under Answer since the
  sixth mending; they stood beside the caption before). The caption
  is 646 px wide in a plate of 1057, so a field of 411 by 179 px is
  bare at its right on both tabs. Pictures:
  `blake-creed-0-answer-1280.png`, `blake-creed-2-words-1280.png`.
  It reads as a margin and may be left.
- proverbs, Words, 1280 (new with the larger notes): the eight notes
  stand under the passage in two columns, 353 px tall, and the caption
  stands alone beside them, 255 px tall in a column 391 px wide. Under
  it that column is bare for 498 px. Across the plate in three
  columns, as on the first plate, the notes would leave nothing bare
  and the plate would be shorter. Picture:
  `blake-proverbs-3-words-1280.png`. (Under Frame, Yoke and Cross the
  same column is bare for 257, 208 and 218 px, which is the look as it
  was settled.) In a window less tall than the plate (913 px) less of
  this is seen: the kit holds the caption in sight while the page is
  scrolled, and it then stands beside the notes. One screen 700 px
  tall: `shots/try/blake-proverbs-3-words-1280-screen-notes-700.png`.
- sentence, 1280: the two lines stand at 24.52 px in the left column,
  as before. Nothing is bare, and this is left as it is.
- sentence, windows from 917 to 981 px (960 is half of a screen of
  1920; not asked for; kit): at 916 the plate is one column and both
  lines stand whole at 31.9 px. At 917 it goes to two columns, the
  type drops to its floor of 20 px, and the lines begin to turn. Under
  Beat both turn from 917 to 934 (32.0 after w5, as in fault A), and
  from 935 to 981 32.0 stands whole and 32.1 turns at its comma. Under
  Question 32.0 stands whole and 32.1 turns from 917 to 943, and both
  stand whole from 945 (Words was asked at 918, 940 and 960, and does
  as Question does). So the passage is four screen lines under Beat
  and three under the other tabs from 917 to 934, three under every
  tab from 935 to about 944, and three under Beat and two under the
  others from 945 to 981. From 982 it is two on every tab. (With
  letters set by fractions of a pixel, as most readers' browsers set
  them, the edges move by a few pixels and the band is the same.) The
  kit could keep one column until both lines stand whole beside the
  caption on every tab. Pictures, at 960:
  `shots/try/blake-sentence-0-beat-960-asis.png`,
  `blake-sentence-1-question-960-asis.png`.
- creed, all tabs, windows from 917 to 978 px (960 among them; not
  asked for): the plate is wide enough for the kit to set the caption
  beside the passage (880 px of plate) and not yet wide enough for it
  to set the two passages side by side (940 px). The errors stand
  over the contraries in the left column at 26 px, 1302 px tall, and
  the two ends of ties 1 to 6 are 586, 650, 650, 778, 778 and 778 px
  apart, farther than on a phone. The caption and its key stand at
  the right, and the kit holds them in sight while the page is
  scrolled, so a reader at the contraries has the caption beside
  them. A picture of the whole plate shows that column bare for about
  530, 810 and 300 px under the three tabs, which is not what a
  screen shows. At 916 the plate is one column at 24 px, and at 979
  the two passages stand side by side at 22 px with level rows. It
  reads well enough to be left. If each error should stand beside its
  contrary wherever the caption stands beside the passage, the two
  could go side by side from 880 px of plate. Pictures:
  `shots/try/blake-creed-0-answer-960-asis.png` (and `-1-grammar-`,
  `-2-words-`), and one screen of 960 by 900 scrolled to the
  contraries, `blake-creed-0-answer-960-screen-contraries.png`.
- All three plates, windows from 552 to 916 px (a tablet held
  upright, or half of a laptop's screen; not asked for; kit): the
  plate is one column, and under the passage the caption takes two
  thirds of the width and the key one third. A long key then runs far
  below its caption in a narrow column and leaves the paper under the
  caption bare. At 768 that field is 406 px wide, and it is 250 px
  tall under Answer, 562 under the Words of the first plate, 407
  under Beat, 343 under the Words of the second plate and 586 under
  the Words of the third. At 600 it is 313 px wide and 315, 654, 492,
  402 and 736 px tall, and the eight notes of the third plate stand
  in a column 173 px wide and 989 px tall, four or five words to the
  line. Nothing holds the caption in sight at these widths: on a
  screen of 600 by 900 scrolled to that caption, the paper under it
  is bare for about 630 px. The other five tabs have short keys and
  read well. The kit has the mend already for a plate of two passages
  at 1280 (`keys-wide` in `arrange()`: a key much taller than its
  caption goes under the caption, across the plate), and the same
  test would serve a plate of one column. Pictures, in `shots/try/`:
  `blake-proverbs-3-words-600-asis.png`,
  `blake-proverbs-3-words-600-screen-foot.png`,
  `blake-sentence-0-beat-600-asis.png`,
  `blake-creed-2-words-768-asis.png`,
  `blake-proverbs-3-words-768-asis.png`. In the page, as the picture
  tool takes it at 768: `shots/tablet/blake-page-768-1.png` (Answer)
  and `-2.png` (Beat). The rest of the page reads well at 768.
- proverbs, Frame, 360 (windows from 352 to 363 px; kit): the lowest
  tick of the spine ends 2.0 px from the full stop of 34.24 (3.7 px at
  362, 5.7 at 364, 7.0 from 366 and at 390). The row is 295 px long
  and the spine is held 2 px inside a column of 304. It does not
  touch, but it is the nearness that was mended at 390. For the kit:
  count the spine and its ticks in the room a row of the figure needs,
  so that the rows turn before the spine is pressed against them, or
  let the tick of a row that reaches it be shorter. Picture:
  `shots/try/blake-proverbs-0-frame-360-asis.png`, and enlarged
  `shots/close/zoom/spine-360.png`.
- proverbs, Frame, windows from 327 to 351 px (not asked for; kit):
  some rows of the frame turn and the others stand whole. From 351 to
  346 only 34.24 turns, from 345 to 342 it and 34.21, from 341 to 327
  those two and 34.23, and 34.22 stands whole down to 327. Like parts
  then do not stand under each other, and the strokes slant from a
  turned part to a whole row. No `turn` key mends this: a key says
  where a row turns and not whether it does. At 352 and wider all
  four stand whole. For the kit: where a figure sets its rows under
  each other (`align`), turn all of its rows as soon as one of them
  must turn. Picture: `shots/try/blake-proverbs-0-frame-340-asis.png`
  (and `-340-turn.png`, with the keys of A: the same fault).
- Other widths: at 768 and 1024 the passages of the first plate read
  well (one column at 768; two columns with level rows at 1024). What
  is wrong under the passage at 768 is in the point on windows from
  552 to 916. At 360 and 320
  every tab was photographed and looked at: nothing is wider than the
  window, no mark lies on a word, the crossing of Cross is drawn whole
  (two arcs at 360, two crossed strokes at 320), and `measure` reports
  at 360 only what it reports at 390. What is wrong at those widths is
  under A, B and C and in the two points above this one.

## Left as they are by the lead

`KIT-CHANGES.md` says these belong to the thing itself, so they are
not counted as faults. The figures are kept in case they are wanted.

- creed, all tabs, 390 (fault 4 of the list before): the errors
  (506 px) stand over the contraries (557 px), and the two ends of
  ties 1 to 6 are 482, 535, 535, 642, 642 and 642 px apart on a screen
  of 664. With the last line of the caption at the foot of the screen,
  34% of the passage is in sight
  (`shots/phone/blake-phone-creed-0-answer.png`).
- The height of a plate changes with its tab (creed at 1280: 1079,
  935 and 1164 px since the sixth mending).
- Since the seventh mending a turned line of verse that the tab does
  not mark keeps its two parts close. On the third plate at 390 the
  passage is 316 px tall under Frame and Cross and 344 px under Yoke
  and Words, which mark 34.20, so the five rows under it move 28 px
  when the tab changes. `KIT-CHANGES.md` says so of this mend.
  Pictures: `blake-proverbs-0-frame-390.png`,
  `blake-proverbs-1-yoke-390.png`. The first proverb reads better for
  it: its two parts now stand together as one saying.

## Gone since the second mending

Each of these was a numbered fault or a lesser point of the list
before. It is struck because the new pictures show it gone and the
check named here was run again on the last build.

- ~~1. proverbs, Frame, both widths: a dot stood on a letter.~~ A join
  now ends over the word. `look.mjs dots`: the foot of every dot is
  4.4 px (1280) or 3.8 px (390) above the letter under it, or more.
  `blake-proverbs-0-frame-1280.png`, `-390.png`.
- ~~2. sentence, Question and Words: wide gaps after the four numbered
  words.~~ The room for a number is given under Beat only.
  `blake-sentence-1-question-1280.png`, `-390.png`.
- ~~3. creed and sentence, Words: a gloss on a second level crowded the
  line under it.~~ Glosses that would touch stand side by side, and
  none is on a second level. `NEAR=7 look.mjs measure` finds no label
  within 7 px of the line under it. `blake-creed-2-words-1280.png`,
  `-390.png`, `blake-sentence-2-words-1280.png`.
- ~~5. creed, 1280: the first pair did not stand level.~~ Each numbered
  contrary begins level with its error. `look.mjs page`: the two ends
  of ties 2 to 6 are level; tie 1 joins the last line of one head to
  the first line of the other. `blake-creed-0-answer-1280.png`.
- ~~7. sentence, Beat, 390: the key named a pause that was not drawn.~~
  It is drawn at the end of the first part of 32.1.
  `blake-sentence-0-beat-390.png`.
- ~~8. creed, Grammar, and proverbs, Yoke: a bracket inside another
  touched it.~~ The inner bracket is ruled 8 px lower and stands
  clear. `blake-creed-1-grammar-1280.png`,
  `blake-proverbs-1-yoke-1280.png`. (Fault C is a different meeting.)
- ~~9. Three keys: two rows in one color.~~ One row for each color.
  (Fault D came with it.)
- ~~10. More from Auden: the couplet turned before its slash.~~ It
  turns at the slash at both widths. `blake-page-1280-2.png`,
  `blake-page-390-3.png`.
- ~~11. proverbs, Frame, 390: a tick of the spine ended 2 px from a
  full stop.~~ `look.mjs spine`: 7.0 px at both widths.
  `blake-proverbs-0-frame-390.png`.
- ~~12. proverbs, Frame, 1280: the key was split one row and four.~~
  Name and meaning stand at the left, the five colors at the right.
  `blake-proverbs-0-frame-1280.png`.
- ~~13. creed, Words, 1280: bare paper under the caption.~~ The notes
  stand under the caption, across the plate. (See the lesser points.)
- ~~14. creed, Grammar: words of the caption lit more than they
  name.~~ They light four, one and five words. (Fault E came with it.)
- ~~Lesser: a gloss was 11 px at 390.~~ It is 12 px.
- ~~Lesser: the red rule under a noted word touched the tails of its
  letters.~~ It is ruled 2 px under, and `measure` no longer reports
  it.
- ~~Lesser: Sources, 390, the fifteenth entry left its last word
  alone.~~ `blake-page-390-6.png`.
- ~~Lesser: "pp." ended a line and its page numbers began the next.~~
  `blake-page-1280-2.png`, `blake-page-390-3.png`, `-4.png`.
- ~~Lesser: the book's title stood in the head of each plate.~~ A head
  prints the plate's heading only.
- ~~Lesser: at 390 the numbered remarks came after the key.~~ They
  come before its samples now (and see the lesser points above).

- ~~Lesser, found after the second mending: two glosses moved side by
  side stood 10 px apart and read as one run of words (creed, Words,
  13.0 w2 and w3; sentence, Words, 32.1 w5 and w6 at 1280, w6 and w9
  at 390).~~ Since the fifth mending a hairline stands between two
  glosses that are within 18 px of each other.
  `blake-creed-2-words-1280.png`, `-390.png`,
  `blake-sentence-2-words-1280.png`, `-390.png`.
- ~~Found after the second mending, and listed under A until 08:30:
  proverbs, all tabs, 480, 600, 960 and 1024: 34.20 turned one word
  before its comma, and on Yoke the red bracket of its first half was
  broken in two.~~ Gone: a verse line now turns after the comma
  nearest its middle. The row turns at its comma at every width where
  it turns (320 to 480, 600, 960 and 1024), and the bracket of each
  half is whole. `shots/try/blake-proverbs-1-yoke-1024-asis.png`,
  `blake-proverbs-1-yoke-390.png`.

Fault 4 and the changing height of a plate are under "Left as they
are". Faults 6 and 6b are A and B above.

## Mended before the second mending

Found in the first pass, before 05:08 UTC, and mended by the lead
then. Listed so that nobody looks for them again: marks and glosses
that lay on the words of a second version set small under the first;
the contraries set small, italic and gray; ties drawn half as strokes
and half as numbers; the key of the Words tab in another order than
the plate; seven kinds of span on six colors; a red number on the
first letter of the next word at 390; two or three words left alone
on a turned line; bare paper under the two lines of the second plate;
the two arcs of the Cross tab 3 px apart; "Read on" naming the book
twice; the year alone on a line of the top bar at 390; numbers of
9.5 px; sources that printed paths of this project; a page with no
list of where it may be wrong.

## What this piece asked of the artist

The piece has no shape lens, so there was no drawing to make and none
was invented: there is no `site/js/pieces/blake.js` and no style sheet
of the piece's own. The work was steps 1 and 3 of `ARTIST.md`: every
tab of every plate photographed at both widths, each picture opened
and looked at, and each fault written down here for the lead.

The ten tabs, and what is still wrong on each (letters as above):

| plate | tab | kind | still there |
| --- | --- | --- | --- |
| creed | Answer | compare | E; lesser (bare field at 1280; bare paper at 552 to 916) |
| creed | Grammar | sentence | C, D |
| creed | Words | word | lesser (bare field at 1280; bare paper at 552 to 916) |
| sentence | Beat | beat | A and B at 390; G; lesser (key parted; bare paper at 552 to 916; turns at 917 to 981) |
| sentence | Question | sentence | A and B at 390; C, D, G; lesser (a turn at 917 to 944) |
| sentence | Words | word | A and B at 390; G; lesser (bare paper at 552 to 916; a turn at 917 to 944) |
| proverbs | Frame | figure, align | nothing at 1280 or 390; lesser at 352 to 363 and at 327 to 351; A at 320 to 326 |
| proverbs | Yoke | sentence | C, D |
| proverbs | Cross | figure, cross | nothing at 1280 or 390 |
| proverbs | Words | word | nothing at 390; lesser at 1280 (bare paper under the caption) and at 552 to 916 (the same, and more of it) |

The four things the lead asked to be looked at hardest:

- **Marks clear of the words.** They are, at both widths, but for the
  three ticks of fault C and, with motion on a slow page, fault G. No
  dot, rule, arc, spine, number or gloss lies on a letter
  (`look.mjs measure`, and the close-ups in `shots/close/`).
- **Long prose lines turning over.** The prose of the first plate
  turns well at 1280, 390, 360 and 320: no row ends in a word alone,
  and the numbered rows of the two passages begin level at 1280.
  Since the seventh mending a word of one letter keeps with the word
  after it, so at 1280 the article w9 of row 12.0 goes down with the
  ruled phrase it belongs to, and no line of the plate ends on such a
  word at any of the four widths. The one bad turn on the page at the
  phone widths is the verse line 32.0 (fault A).
- **A passage and its caption seen together.** On a phone screen of
  390 by 664 the second and third plates show the whole passage with
  the caption under it, on every tab; the first shows 34% of its
  passage (left as it is by the lead). The pictures are in
  `shots/phone/`. At 1280 the first plate's two columns and the
  caption under them are 781 px tall together under Answer, so a
  window less tall than that shows the caption with the foot of the
  columns. On the other two plates the caption stands beside the
  passage, and the taller of the two is 255 and 363 px. Where a
  caption stands beside its passage the kit holds it in sight while
  the page is scrolled (seen with `look.mjs screen`). From 552 to 916
  px it stands under the passage with its key beside it, and a long
  key leaves bare paper under it (see the lesser points).
- **The page from top to bottom at 390.** It reads in order and
  nothing is wider than the window (`look.mjs page`). The faults are A
  and B (the second plate), F (the line over the title) and the long
  first plate.

No `join` was set. On Frame the strokes join each of the first four
parts of a line to the same part of the next line and a spine joins
the fifth, which is what the caption says of the four lines. On Cross
the two arcs join the first idea to its return and the second to its
return, one inside the other, as the caption and the key say.

No heading and no label was changed. The three headings and the ten
tab names are short, tell the plates and the tabs apart, and the four
tabs of the third plate fit their bar at 390.

## How it was looked at

    node build/pieces.mjs blake
    node build/tools/shoot.mjs blake --out remake/works/blake/shots --page

The second command makes 32 pictures: ten tabs at two widths, and the
page in five slices at 1280 and seven at 390. After each run every
picture was compared, pixel for pixel, with the same picture of the
run before, and every one that had changed was opened. (All 32 were
opened in the first runs, and again after the last.) That tool tests
only for marks outside their plate and for
labels on labels, so the artist wrote `look.mjs` (in this folder; its
head lists what it does). It serves `site/` on a port of its own and
changes nothing there. What it adds:

- `measure`: every stroke walked in steps of 1.5 px against the ink of
  every letter and point; labels on or near words; rows wider than
  their column; heights of plate, passage, caption and key; type sizes.
- `dots`, `spine`, `ends`, `refs`, `page`: the dots of a figure, the
  ticks of a spine, the two ends of every rule, what a bold or italic
  word of a caption lights, and whether anything is wider than the
  window.
- `close` and `zoom`: close-ups three and six times enlarged, in
  `shots/close/`. `fold`: the folded lists under Sources, opened.
- `phone`: a screen of 390 by 664 with the last line of the caption at
  its foot, in `shots/phone/`.
- `motion`: each tab as a reader sees it who has not asked for reduced
  motion, after the marks have drawn themselves, beside the still
  picture the picture tool takes; in `shots/motion/`.
- `probe`: with motion on, whether the letters have come to rest when
  the marks of a newly opened tab are placed (fault G). With `KEEP` it
  keeps a picture of the stage as the run left it.
- `ask`: a question put to the page at any list of widths. The table
  of where each verse row turns from 320 to 1280, and the check that
  no prose line ends on a word of one letter, were made with it.
- `screen`: one screen of a window that is not a phone, scrolled to a
  place of a plate, in `shots/try/`. It says where the caption's
  column then stands, because on a wide plate the kit holds that
  column in sight, and a picture of the whole plate does not show it.
- `--css`, `--patch` and `--mend`: a trial style sheet, a trial key of
  a plate, or a trial of one changed line of `plate.js`, laid over the
  page as that tool serves it. Nothing on disk changes.

## The reading: what seems wrong, and is not the artist's to change

- The plate `sentence` wants the `turn` key of fault A, which is
  seen at 390. The plate `proverbs` wants its four only for windows of
  326 px and less. `ARTIST.md` lets the artist set them, but an edit
  of the reading could not be checked in this session, so they are
  left to the lead or the examiner.
- One kind carries two labels in three sentence lenses, and the key
  now prints the two in one row (fault D): `frame` in Grammar, `what`
  in Question, `half` in Yoke. Two kinds for the two things would mend
  it in the reading.
- The line under the title (`where`) begins with the name of the book,
  which the line over the title has just given, so the head of the
  page names the book twice. The three parts alone would say what the
  line is there to say.
- No title is marked between asterisks, so the titles named in the
  prose stand in roman: one in `about`, one in `view.says`, three in
  `auden[1].says`, two in `auden[2].says` and three in
  `auden[7].says` (entries counted from 0). The source lines under
  them and the list of Sources set the same titles in italics.

Nothing else in the reading looked wrong from the page. Its facts were
not tested here: that is the examiner's work (`exam.md`).

## Proposed for the reading

For the lead, the examiner or the critic. The artist wrote none of it
into `reading.json`.

- Plate `sentence`: `"turn": { "32.0": 6 }` (fault A). It tells at
  414, 390, 375, 360 and 320.
- Plate `proverbs`: `"turn": { "34.21": 4, "34.22": 4, "34.23": 4,
  "34.24": 3 }` (fault A, second point). It tells only in windows of
  326 px and less.
- No speaker's name stands over a speech on this piece, so no
  `speakers` is proposed.
- Since the sixth mending a word named as a word in a numbered remark
  or a word's note can be marked to stand upright. None is marked
  yet. The places where a remark or a note names a word as a word:
  Answer, remarks 2, 4 and 6; Beat, remarks 1 and 3; the Words notes
  that give a Latin word (first plate, note 2; second plate, note 3;
  third plate, notes 5 and 8). This is the critic's to do. Since the
  seventh mending a gloss under a word can carry the same mark; no
  gloss of this piece names a word as a word, so none needs it.
- Titles named in `about`, `view.says` and three entries of `auden`
  could be marked between asterisks (see the section before this
  one).

## What the artist changed

- In `reading.json`: nothing. The key `turn` was put in and taken out
  again (fault A), and the file stands as the examiner left it. No
  heading and no label was changed.
- In `site/` and `build/`: nothing.
- Written in this folder: `art.md`, `look.mjs`, the three trial files
  in `try/`, and the pictures: `shots/` (the 32 of the picture tool),
  `shots/close/` with `shots/close/zoom/`, `shots/phone/`,
  `shots/try/`, `shots/motion/` and `shots/tablet/` (the picture
  tool's page at 768).

## Reports that were looked at and are not faults

- `measure` says that the blue bracket of creed, Grammar crosses the
  ink of 13.0 w9 letter 4, and the green one that of p:17.0 w20 letter
  6, at both widths. Each is the last letter of its word, with a tail
  that swings left under the word. The box of its ink reaches the
  tick; the ink does not. Pictures, six times enlarged:
  `shots/close/zoom/tick-grammar-1280.png`, `tick-energy-1280.png`.
- In the 390 pictures the letters stand unevenly inside some words
  (34.20 w4 and 34.23 w7 on the third plate, for two). The picture
  browser sets each letter a whole number of pixels wide: by
  `look.mjs letters`, 78 steps from letter to letter at 390 differ
  from the same steps at 1280 by more than 0.025 of the type size.
  With `CHROME_ARGS=--font-render-hinting=none` it sets letters by
  fractions, as a phone does, and none differs. `measure` and `ends`
  then report the same faults and no others.
- `measure` at 820, 900, 916 and 1100 (not widths that were asked
  for): row 34.20, the longest of the page, is 1.6 to 12.3 px wider
  than its column on all four tabs of the third plate, and at 900 its
  last word stands 12 px past the rules of the plate
  (`shots/try/blake-proverbs-0-frame-900-asis.png`). This too comes
  from the picture browser's whole pixels: the kit measures the row
  at its largest size and scales it down, and letters set in whole
  pixels do not scale evenly. With
  `CHROME_ARGS=--font-render-hinting=none` no row is wider than its
  column at any of the four. A reader whose browser sets letters as
  the picture browser does would see it. The kit could measure the
  fitted row once more and step the size down if it is still too
  wide.
- `look.mjs motion` (11:05 to 11:11): but for fault G, the moved
  picture of every tab is the still picture, or differs from it by a
  shade only: 281 pixels along one rule of creed, Grammar at 390, 41
  and 45 along the strokes of Cross at 1280 and 390, and 1 to 4
  pixels on the three Words tabs and on Yoke at 1280. None of these
  pixels differs by more than three tenths of the way from black to
  white, and nothing is seen of them. The hairline that crosses the
  Beat tab takes about 13 seconds, so a moved picture taken sooner
  shows it on its way; taken after 16 seconds, the Beat tab is the
  still picture, pixel for pixel, at both widths.
- The picture tool's own last line is "nothing reported": it tests
  for marks outside their plate and labels on labels, and there are
  none.

## What was found good

- Each plate says one thing and its tabs are few. A stranger can read
  any tab from its marks, its key and its caption without the others.
- Color is used to tell kinds apart and nowhere else: five kinds at
  most on a tab, and six numbered pairs under Answer, where the same
  number in the same color stands at the two ends of a pair.
- At 1280 every numbered contrary begins level with its error, and the
  caption stands under both.
- On Frame the four lines read as one frame at a glance: five colors
  in five places, strokes from place to place, a spine for the fifth.
- Under Sources the entries hang, titles are in italics, and the two
  folded lists open cleanly at both widths
  (`shots/close/blake-sources-open-1280.png`, `-390.png`).
- Nothing on the page is wider than its window from 320 to 1280, and
  with motion reduced no mark lies on a letter.
- Since the seventh mending the first of the six proverbs keeps its
  two parts close where a tab does not mark it, and on a phone the
  whole third plate and its caption stand on one screen under every
  tab (`shots/phone/blake-phone-proverbs-0-frame.png`).

## The last run

- The kit: the seventh mending ended at 10:40 UTC and its one later
  mend came at 11:06. The newest files of the kit when the last
  pictures were taken were `site/css/atlas.css` and
  `site/js/kit/plate.js`, both of 11:05:49. `reading.json` is of
  06:52:32 and was not changed by the artist.
- `node build/pieces.mjs blake` at 12:36:04 UTC. The built piece is
  the same, byte for byte, as every build of it since 09:27.
- `node build/tools/shoot.mjs blake --out remake/works/blake/shots
  --page` from 12:36:04 to 12:36:38 UTC: 32 pictures, taken last of
  all. The last line it printed:

      nothing reported; now look at the pictures

- These 32 are the same, pixel for pixel, as the 32 of 11:43 and as
  the 32 taken from 10:44 to 10:46, the first set after the seventh
  mending. Seventeen of that set differed from the set before the
  mending and were opened one by one then; the other fifteen are the
  same pictures that were opened one by one after the sixth mending.
  (The picture tool itself was changed at 12:35:46; its pictures of
  this piece did not change.) All 32 of this last run were opened
  once more, one by one, after it: each shows what these notes say
  of it.
- Taken after 11:06 and before the 32, on the same kit and the same
  built piece: in `shots/try/`, 46 trial pictures from 11:38 to 11:40
  (every tab at 360 and 320, the trials of A and B, 340 and 1024) and
  39 from 11:58 to 12:30 (every tab at 600, 768 and 960, the third
  plate at 900, and five single screens); the ten phone screens
  (11:40); the enlarged places in `shots/close/zoom/` (11:40 to
  11:42; the head of the page was cut from the 390 picture of 11:43);
  the 52 close-ups in `shots/close/` (11:42 to 11:43); and the page
  at 768 in `shots/tablet/` (12:34). Every picture in `shots/try/`
  and `shots/tablet/`, and every other picture named in these notes,
  was opened from these sets.
- The motion run is of 11:05 to 11:11 and the probes of fault G are
  of 11:12 to 11:23. The kit's change of 11:05:49 fell inside the
  motion run; it touches only two words joined by a dash, and the
  page has no such word (asked of the page: none of its 206 words).
- Run on this built piece from 11:43 to 11:50, with the same output
  as right after the mending: `measure`, `ends` and `page` at 1280,
  1024, 390, 360 and 320; `refs`, `dots` and `spine`; the table of
  turns at fourteen widths from 320 to 1280; `letters`. They were not
  run again after 12:36, because neither the kit nor the built piece
  had changed and the machine was busy with other work.
- Run from 12:03 to 12:33, for the windows between a phone and 1280:
  `measure` at fourteen widths from 480 to 1100 (it reports the three
  ticks of fault C, the two tails named under "Reports", and the long
  row named there, and nothing else); `page` at 552, 600, 768, 820,
  916, 960, 1440 and 1920 (nothing is wider than its window; from
  1440 the plates are as at 1280); the table of turns under each tab
  of the second plate from 917 to 1000.
