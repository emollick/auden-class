# Agamemnon: the artist's record

Piece `agamemnon`. Three plates (`yoke`, `cloth`, `net`), ten lenses. One
shape lens to draw: plate `net`, lens 1, labelled "Play".

No line of the play is copied here. Places are given as part, block and
row, and words by their number in the row, counted from 0 as the checker
counts them. Where one marked word is named, it is a word the reading
itself marks.

What I hand in:

- `site/js/pieces/agamemnon.js`, the drawing (section 2);
- no stylesheet: the kit's classes did the job;
- in `reading.json`, by small exact edits: two additions to the facts of
  the shape lens (section 3), and one heading, three joins and one `turn`
  (section 4);
- this file;
- the pictures in `remake/works/agamemnon/shots/` (section 8).

Two things I was not able to do are told in section 8: one run of the
checker, and a `turn` for the plate `cloth`.

## 1. Every screen, and what became of each fault

`node build/pieces.mjs agamemnon` and
`node build/tools/shoot.mjs agamemnon --out remake/works/agamemnon/shots --page`
were first run at 04:42 UTC, before any drawing, and many times after,
because the kit and the reading were both being mended while I worked. I
opened every picture at 1280 and at 390 after the first run, after each
round of the kit's mending, and after the last run (section 8). A fault
that is gone is struck through. What is not gone is in section 5.

| picture | what was wrong | now |
| --- | --- | --- |
| `agamemnon-net-1-play-1280.png`, `-390.png` | ~~The shape lens was the kit's plain table: one cell held all nine places run together, two columns ran off the side, and part and row addresses were printed for the reader.~~ | Gone: this is the lens I drew (section 2). |
| `agamemnon-yoke-2-rhyme-390.png` | ~~The bracket joining two rhymes ran off the right edge of the plate.~~ | Gone: mended in the kit. |
| `agamemnon-yoke-*-390.png`, all four tabs | ~~Four of the twelve lines turned over and left one word alone on the second line.~~ ~~After the kit balanced the turn, row 39.7 turned between a possessive and its noun and row 39.8 between an article and its noun.~~ | Gone: the first by the kit, the second by a `turn` I set (section 4). |
| `agamemnon-yoke-0-figure-390.png`, heading | ~~The heading left its last word alone on a second line at 375 px, and its last two at 360 px.~~ | Gone: a shorter heading (section 4); the kit now balances a plate's title as well. |
| `agamemnon-yoke-0-figure-1280.png`, `-390.png` | ~~The strokes joined the wrong parts: first one bracket under one of two lines built alike, then a stroke from the first act to the second.~~ | Gone: a `join` I set (section 4). |
| `agamemnon-yoke-1-metaphor-1280.png`, `-390.png` | ~~A stroke with a dot at each end ran from the fourth word of row 40.0 to a word of row 40.1 that the caption does not join it to.~~ | Gone: a `join` I set (section 4). The color of that fourth word is still the harness's (section 7). |
| `agamemnon-yoke-*`, all tabs, both widths | ~~Rows 39.6 to 39.15 and rows 40.0 to 40.1 are two blocks of verse, and the plate set them as one run.~~ | Gone: mended in the kit. Row 40.0 now stands half a line lower. |
| `agamemnon-cloth-0-figure-1280.png`, `-390.png` | ~~The lens asks for a chain and no link was drawn.~~ The links, now drawn, run through the speakers' names. | The first is gone. The second is in section 5. |
| `agamemnon-net-2-word-1280.png`, `-390.png` | ~~At 1280, a gloss set a step lower came down onto the tall letters of the line under it.~~ At 390 it still does. | Gone at 1280. At 390 it is in section 5. |
| `agamemnon-net-0-figure-1280.png`, `-390.png` | ~~The sign of the simile was joined to the net that has none, and no net to what it catches.~~ | Gone: a `join` I set (section 4). |
| `agamemnon-page-390-0.png` | ~~The site's name left "1941" alone on a line. The italic line under the title left its last word alone.~~ | Gone: mended in the kit. |
| `agamemnon-page-390-4.png` | ~~The title under "Read on" left its last word alone.~~ It now turns after its article. | The first is gone. The second is in section 5. |
| `agamemnon-page-390-3.png`, `-4.png` | ~~Under three of Auden's passages the page number stood alone on a line.~~ | Gone: mended in the kit. |
| `agamemnon-page-390-4.png`, `-5.png` | ~~In the sources a range of line numbers was cut in two at its dash, and the two initials of a name were parted.~~ | Gone: mended in the kit. |
| `agamemnon-page-390-5.png`, `-1280-4.png` | ~~The sources named "plates" twice and printed a path inside the project. Two folded sections were missing.~~ | Gone: mended by the examiner. |
| the folded section "What each caption stands on" | ~~A heading with a colon of its own gave two colons in a row.~~ | Gone: mended in the kit. |
| `agamemnon-yoke-3-word-390.png`, `-cloth-2-word-390.png`, `-net-2-word-390.png` | ~~The glosses were 11 px on a phone.~~ | Gone: 12 px now. |
| `agamemnon-yoke-*-390.png`, `agamemnon-cloth-*-390.png` | ~~On a phone the passage is 754 px tall on plate `yoke` and 889 px on plate `cloth`, so a mark and its caption are never on one screen.~~ | Struck: the lead's note on the second mending says a long plate is long on a phone and leaves it. |
| `agamemnon-net-1-play-1280.png`, `-390.png` | ~~A blank band stood between the drawing and its key.~~ It now stands under the key. | Moved, not gone: section 5. |

The other screens were sound at both widths from the first look: `cloth`
Sentence and Word, `yoke` Word and Rhyme at 1280, the head of the page,
"More from Auden", the sources.

## 2. The drawing: `net` / Play

File: `site/js/pieces/agamemnon.js`, lens `net:shape`. No stylesheet of my
own was needed.

### What it is

The lens's `what` names three things: where a net is named in the play, who
names it, and who is caught. The drawing gives one direction of the page to
the first and a row to each of the others.

- **Left to right is the play**, from its first line of verse to its last,
  to scale and from zero (`verseLines`). A place stands at its own line.
- **Who names it, and in what words**: one hairline for each speaker, in
  the order the speakers first name a net. A dot stands where each place
  is, and the words the translation uses there (the `words` of the place)
  are set over the dot.
- **Who is caught**: one hairline for each one the facts say is caught, in
  the order they first come, with a dot at the same place across. So a
  reader looks down from a word to see whom it catches.
- **The play**: an ink line under both, cut by a tick at the end of each of
  the six parts the play is printed in here, numbered 1 to 6. Under it the
  six headings run in a line, each a link to its part in the reader.
- **At the right** of every line, how many places it holds, under the small
  heading "places"; at the right of the play's line, how many in all. These
  are the caption's nine places and four speakers, and the count for each
  one caught.
- **Red** is the place that falls inside this passage's own lines
  (`thisPlate`), with its words in red. Everything else is ink and
  hairline.
- **A ring** in place of a dot is a place where the facts give no Greek
  word for a net (the caption's "eight of them in the Greek too"). The key
  says so.
- **Two places too close to stand side by side** (here the seventh and the
  eighth, eight lines apart, less than a dot's width at any size) stand one
  under the other, each still at its own line across, so the scale stays
  honest. The words of the upper one stand over the line and those of the
  lower one under it.
- **The key** names the red dot (with the passage's lines), the ink dot,
  the ring and the play's line.
- **The figures**, folded away under the key: a table of the nine places
  (line, who names it, the words, who is caught, the Greek and its line),
  a table of the six parts (lines from and to, and how many places), and
  the list of what was not counted, as the facts give it. Each line number
  opens that place in the reader and each part opens its part.
- **The pointer**, or a tap, adds one sentence under the key (the line, the
  speaker, the words, who is caught; for a part, its lines and how many
  places) and dims the other places. The two dots of a place and its words
  stay dark together. A second tap, or a tap on bare paper, lets go.
  Nothing depends on it.

### Why this form

A list of nine places is a table, and the kit's table is what stood here
before. What the caption asks the reader to see is a turn in time: the first
two nets are thrown over Troy, and every later one is said of the king or
of Cassandra, down to the passage of this plate and the lament after it. A
turn in time wants time as an axis. With the play laid out to scale the
reader sees at a glance that nothing is named in the first fifth of the
play, that the two victories come first and far apart, that six of the nine
crowd into the last two parts, and that the dots step down from Troy's line
to the lines of the two who die. The division into parts puts the murder on
the page without a word of mine: part 6 opens at line 1,549 with the king's
first cry, and the red dot is 42 lines after it.

I did not draw anything that looks like a net, a thread or a web: the brief
forbids dressing a drawing in its subject. I did not join a speaker's dot to
its dot below with a rule, because nine uprights would strike through the
words and because the two dots already stand in one column. I did not write
the line numbers on the drawing: nine four-figure numbers would crowd out
the words, and each number is one tap or one row of the table away.

The drawing is one idea in two small bands under two `dg-lab` headings, as
the kit's sixth rule asks, and it is short: 334 px tall at 1280 and 368 px
at 390. On a phone the drawing's own head, the drawing and its key together
are 518 px. With the plate's heading, the place and the tabs over them, the
key ends 657 px down the plate at 390, 375 and 360 px, and 622 px down at
414. It was 42 px less at 390 before the third mending put the place of
the passage, two lines here, under the heading (section 6). A phone
390 px wide is 844 px tall, so the drawing and its key are still on one
screen, with less to spare.

### The words of mine that it prints

Only labels, each of which names a fact: the two headings ("who names it,
and in what words", "who is caught"), "places", "the play", "lines" after
the count of lines, the four lines of the key, the heads of the tables
("line", "who names it", "the words", "who is caught", "the Greek, and its
line", "part", "lines", "places", "not counted"), "The figures", and the
pointer's sentences, which are built from the facts ("Line 1,591 of 1,965"
and so on). Every name, every word of the translation, every Greek word and
every number comes from the facts. The head of the drawing is the lens's
`what`, set by the kit.

### What it reads, and what it does when a fact is missing

Everything printed comes from `lens.facts` when the page runs:
`verseLines`; for each of `places` its `line`, `speaker`, `words`, `caught`,
`greek` and `read`; the numbers in `thisPlate.lines`; for each of `parts`
its `part`, `name`, `lines` and `read`; and the strings of `notCounted`.
The counts at the right are counted from the places themselves, so they
cannot disagree with the dots. When the examiner changed who is caught at
the third place to "no one", the drawing grew a fourth line for it at the
next build with no change to the script.

- No `places` or no `verseLines`: the script throws and the kit's plain
  table stands in.
- `parts` missing, or not adding up to `verseLines`: the play's line is
  drawn whole, without ticks or names, and the key says "the play, from its
  first line to its last".
- No `thisPlate`: no red, and the key says "a place where a net is named".
- No `greek`: the table has four columns and there is no ring. A ring is
  drawn only where a place's `greek` begins with the word none (or no). A
  key of its own for this, true or false, would be firmer than reading the
  word (section 7).
- A place with no `words`: its dot is drawn and no words are set by it.
- More places, or places closer together: a dot that would touch the one
  before it hangs under it; words that cannot stand over or under their
  own dot without touching other words, or without standing over a dot
  elsewhere on the line, are left out of the drawing and stay in the
  pointer's sentence and the table. I tried this with sixteen made-up
  places, eight of them on one line, served to the page in flight and
  saved nowhere in the project.

### How it draws itself

The hairlines and the play's line draw first; then the places appear in the
order of the play, each speaker's dot and words a little before the dot of
the one caught. The last mark begins to appear at about 2.1 seconds and is
fully there by 2.7. With reduced motion, and on a resize, everything is
simply there. If the figures are open when the page is redrawn they stay
open.

### Widths looked at

The drawing was photographed in windows of 1600, 1280, 1024, 768, 390,
375, 360 and 320 px, where it gets 607, 607, 506, 659, 334, 319, 304 and
264 px. No words touch at any of them. At 320 one word of the elders' line
stands under its line and not over it, and the heading "places" moves down
beside the second heading, because the first heading fills the width.

The run of the six headings under the play's line was measured at thirteen
window widths from 1600 to 320. No line of it ends with an article, a
preposition or "and", and none begins with the point that parts two
headings: a number keeps to its heading, a word of three letters or fewer
keeps to the word after it, the last two words of a heading keep together,
and the point stays with the heading before it. It takes two lines at 1280,
four at 390 and five at 320, where the drawing is 401 px tall.

In the tables the columns stand 18 px apart, as the kit sets them, or
closer, down to 12 px, where that keeps every cell on one line: the script
measures the table and chooses. At 1280 the table of places stands at 16 px
and no cell or heading of it turns over. Columns of numbers are set right
with the kit's own class. The last column keeps no room to its right, so at
1280 each sentence of what was not counted takes one line. A cell or a
heading that must turn over turns into even lines; a sentence of what was
not counted turns as prose does, and at no width I looked at does one
leave a single word on its last line. On a page narrower than
440 px the table of places sets the Greek under the words of its own place,
so that no column runs off the side; the tables and the list fit the page
down to 320.

I kept one page open and changed the window from 1280 to 390, 1024, 320 and
back: the drawing was made again at each width, the open figures stayed
open, and the browser reported nothing. With a touch screen at 390 a tap on
a place spoke its sentence and lit its four marks, a second tap let go, and
a tap on bare paper let go.

## 3. What I added to the reading's facts, and how it was counted

Two additions to the facts of plate `net`, lens 1, by small exact edits.
No key that was there was changed.

1. `parts`: the six parts this site prints the play in, each with its
   number, its heading, its count of verse lines and a `read` place. The
   play has no acts; the division and the headings are the site's own (the
   note in `site/data/texts/agamemnon/index.json` says so). Counted with:

   ```
   node -e "
   const fs=require('fs');
   const idx=JSON.parse(fs.readFileSync('site/data/texts/agamemnon/index.json','utf8'));
   let n=0;
   const parts=idx.parts.map((p)=>{ const part=JSON.parse(fs.readFileSync('site/data/texts/agamemnon/'+p.id+'.json','utf8')); const lines=part.blocks.reduce((s,b)=>s+(b.k==='v'?b.lines.length:0),0); const m=p.label.match(/^(\d+)\.\s+(.*)$/); const o={part:+m[1],name:m[2],lines,read:'agamemnon/'+p.id}; n+=lines; return o; });
   console.log(JSON.stringify(parts)); console.log('sum of lines',n);"
   ```

   Result: 310, 285, 335, 254, 364 and 417 verse lines, which add up to
   1,965, the reading's `verseLines`. The same six figures are in the
   poet's notes. Part 6 begins at verse line 1,549. Its first verse block
   (block 2) is one line, and the speaker's name before it is the voice of
   the king, so the boundary between parts 5 and 6 is the murder.

2. `read` in each of the nine `places`: the part and block of the place's
   first row, taken from the place's own `at` (which the build strips).
   A second script counted every place's line from its `at` and compared it
   with the reading's `line`:

   ```
   places 1 to 9: given 422, 949, 1004, 1200, 1278, 1469, 1583, 1591, 1737
                counted 422, 949, 1004, 1200, 1278, 1469, 1583, 1591, 1737   (all nine agree)
   thisPlate: given "1589 to 1593 of 1965", counted 1589 to 1593
   the refrain's second time (part 6, row 65.3): line 1765, as the note says
   ```

   The reads: p2:40, p4:2, p4:9, p5:4, p5:51, p5:129, p6:35, p6:35, p6:60.

A working note beside them, `partsNote`, says the same in the reading; the
build strips it (its name ends in Note). After these edits
`node build/tools/check-reading.mjs agamemnon` ended as it had before them,
"no problems" and "no warnings".

## 4. What else I changed in the reading

Five small edits, each of a kind `remake/ARTIST.md` gives the artist. No
caption, mark, tag, label, fact or source was touched.

### One heading

Plate `yoke`: "The king at Aulis, as the elders sing it" is now
"At Aulis, as the elders sing it". Two words were cut and none added.

Measured in the page, in the plate's small capitals: the old heading is
328 px wide. It took one line at 390 px, where the plate gives it 334 px.
At 375 px it broke as 307 px and 16 px, its last word alone on a second
line, and at 360 px as 268 px and 56 px. The new heading is 252 px and
takes one line down to 320 px. The king is named in the paragraph above the
plate and in the first words of each caption.

Since then the kit has come to balance a plate's title. The poet's heading
would now stand in two even lines on a narrow phone, so the reason for my
change is gone and the poet's words could be put back (section 7).

No lens label was changed.

### Three joins

The lead gave the artists the figure lens's `join` after the second
mending, to set right the strokes I had reported. A stroke says "these two
belong together", so each join below stands on a sentence of its caption.
The checker was run after each of the three edits and ended each time "no
problems", "no warnings", "the printed notes are fit to print".

1. Plate `yoke`, lens 0, tab Figure: `"join": [[0, 2], [1, 3]]`.
   Part 0 is the word at the head of row 39.6 and part 2 the first act on
   that row; part 1 is the word again on row 39.7 and part 3 the second
   act on that row. Stands on the caption's first sentence, which begins
   "The king names two acts and gives one word to both". Drawn: one squared
   stroke under row 39.6 from the word to its act, and one like it under
   row 39.7, so the two lines are seen to be built alike
   (`agamemnon-yoke-0-figure-1280.png`, `-390.png`).
   Not joined: the word to its return, which the figure is named for. That
   stroke would start where the first squared stroke starts and cross it,
   and the two are already one color under one row of the key ("one word,
   again"). The two woes of row 39.10 are one color under "the pair again"
   and need no stroke.

2. Plate `yoke`, lens 1, tab Metaphor: `"join": [[0, 2], [0, 3]]`.
   Part 0 is the harness, the fourth word of row 40.1; parts 2 and 3 are
   the first and third words of that row, labelled "what compels". Stands
   on the caption's fourth sentence, "The yoke is Fate's and it is
   compelling." Drawn: two arcs under row 40.1, from each of the two words
   to the harness (`agamemnon-yoke-1-metaphor-1280.png`, `-390.png`).
   Not joined: "his act" on row 40.0. The caption's fifth sentence sets it
   against the force with "Yet", and does not say which of them it belongs
   with, so its own color tells it. The fourth word of row 40.0 is left
   with no stroke: the caption joins it to nothing.

3. Plate `net`, lens 0, tab Figure: `"join": [[0, 1], ["net", "catch"]]`.
   Part 0 is the simile's sign and part 1 the first net, both on row
   35.13. The tags `net` and `catch` have two parts each, one of each on
   row 35.13 and one of each on row 35.14. Stands on the caption's third
   sentence, which begins "First a simile, a likeness said outright with
   as" and goes on to the net and the shoal it hems in, and on its fourth,
   which begins "Then a metaphor, the thing called by another's name" and
   goes on to the one trapped and the hunter's nets. Drawn: on row 35.13 an
   arc from the sign to the first net and an arc from that net to its
   catch; on row 35.14 one arc between the second net and its catch
   (`agamemnon-net-0-figure-1280.png`, `-390.png`).
   Not joined: the thing itself, on row 35.15. The caption says only the
   third line gives the plain noun, and it stands there alone in its own
   color. A stroke could reach it from the second net only, not from the
   first, which is two rows above, and half of that likeness drawn would
   say less than none.

On plate `cloth`, tab Figure, I set no join. The usual way of a chain joins
there what the caption and the labels say belong together: the word taken
up to its answer, one king to the pronoun that stands for him, the three
names for other people, the four words for winning. What is wrong there is
the path of the strokes, which is the kit's (section 5).

### One turn

Plate `yoke`: `"turn": { "39.7": 5, "39.8": 4 }`.

On a phone the page's own choice turned row 39.7 after its seventh word,
between a possessive and its noun, and row 39.8 after its sixth word,
between an article and its noun. Row 39.7 now turns after its sixth word,
at the comma, and row 39.8 after its fifth, before the article. Measured in
the page after the build: row 39.7 turns where the reading says at 414,
390, 375, 360 and 320 px and row 39.8 at 390, 375, 360 and 320 px (it does
not turn at 414); no row is left free; at 768 px and wider no line turns.
The other rows that turn on a phone (39.12, 39.13 and 39.14) turn at a
comma or before a new phrase by the page's own choice, and I left them.
Pictures: all four `agamemnon-yoke-*-390.png`.

The checker has not been run by me since this last edit: see section 8.

## 5. Still there after the second mending

Worst first. Each was seen again in the last pictures (section 8), which
were taken after the third mending too, and each was measured again in the
page at 07:21 UTC. The third mending mended none of them.

**S1. The strokes of a chain run through the speakers' names.** Plate
`cloth`, tab Figure, at 1280 and at 390: `agamemnon-cloth-0-figure-1280.png`,
`agamemnon-cloth-0-figure-390.png`; on the page, `agamemnon-page-1280-1.png`,
`agamemnon-page-390-1.png` and `agamemnon-page-390-2.png`. The lens is
`draw: "chain"` with twelve parts in five tags. A speaker's name stands
between every two lines of this passage. Each of the seven strokes goes
straight from under the end of one part to over the start of the next, and
a name can stand in its way. Measured in the page at 07:01 UTC, and the
same to the pixel at 07:21:

- at 1280, the stroke from the eighth word of row 23.0 ("another king") to
  the first word of row 25.0 runs through the name AGAMEMNON over row
  25.0, from 65 to 93 px across;
- at 390, the same stroke runs through that name from 44 to 93 px across,
  which is more than half of it; the stroke from the third word of row
  15.0 to the third word of row 17.0 runs through the last letter of the
  name over row 17.0; and the stroke from the first word of row 33.0 to
  the third word of row 35.0 runs through the name CLYTEMNESTRA over row
  35.0, from 67 to 82 px across;
- at a window of 1024 px the first and the last of those three do; at 768
  the first; at 375 and at 360 all three (row 23.0 has turned there, and
  the stroke that leaves it crosses the name from 23 to 41 px across).

A stroke that ends over a word at the head of a line has to cross the name
above that line unless it bends round it or stops short of it. The joins
themselves are right (section 4), so `join` cannot mend this: `"none"`
would take the chain away with the fault.

**S2. A gloss set a step lower stands on the letters of the line under
it.** Plate `net`, tab Word, at 390: `agamemnon-net-2-word-390.png`. In row
35.14 the fifth and sixth words both have glosses. At 1280 the second now
moves along its line and both stand on one level. At 390 there is no room
to move along (the second gloss is 119 px wide and would run off the side
of the passage), so the second, "nets · from a word for cloth", is set a
step lower. Its box runs from 328 to 342 px down the plate and the boxes of
the words of row 35.15 begin at 337 px, so it touches the tall letters of
the sixth and seventh words of row 35.15. The same at 414 px (317 to 331
against 325), at 375 px (325 to 339 against 333), at 360 px (321 to 335
against 329) and at 320 px (412 to 426 against 421). These figures are of
07:21 UTC; they are 42 px further down the plate than the ones I gave
before, because the place now stands under the heading, and the overlap is
what it was. The glosses are larger now, 12 px, which is right, and makes
this a little tighter than it was. A row that carries a second step of
glosses needs that much more room under it. In the last row of the plate
the lowered gloss has room, because nothing stands under it.

**S3. An empty band under the key of a drawing.** Plate `net`, tab Play,
most seen at 390: `agamemnon-net-1-play-390.png`, also
`agamemnon-net-1-play-1280.png`. The line that speaks for the pointer now
stands under the key, so the key no longer moves. Its room is kept while
nothing is pointed at: 64 px of bare paper between the key and "The
figures" at 390, where the room is two lines, and 43 px at 1280. On a phone
it looks as if something were missing there. The room could be given when
the first sentence is spoken and kept from then on.

**S4. The title under "Read on" turns after its article.** The page at 390:
`agamemnon-page-390-4.png`. The title is the play's name, a comma, and the
part's heading, "1. The Watchman; the Elders". It is balanced now, and the
turn falls between "The" and "Watchman". A space that does not break after
a word of three letters or fewer at the head of a part's heading would keep
them together. Small.

Three things for the kit that no picture of this piece shows:

- The last column of a table of facts keeps 18 px of room to its right
  (`.facts th` and `.facts td` in the stylesheet). Nothing uses that room,
  and a table as wide as its drawing loses it. My script takes it away in
  its own tables. `.facts th:last-child, .facts td:last-child
  {padding-right:0}` would do it for the kit's plain table and every piece.
- `turn` takes whole word numbers. On plate `cloth` at 320 px row 15.0
  turns after its fourth word, which is two words joined by a dash, and the
  turn that reads well is at the dash. A number such as 3.1, as the marks
  already take, would let a reading say so.
- At a window of 320 px the four tabs of plate `yoke` take two lines, and
  the last tab, "Word", stands alone on the second. At 340 px and wider
  they take one line. The plates with three tabs keep to one line at 320.
  Small, and only at the narrowest width.

## 6. What the kit's keeper and the examiner mended while I worked

For the record, so that nobody looks for them again: the bracket off the
edge on plate `yoke`, tab Rhyme, at 390; the one-word second lines of
turned verse; the site's name leaving "1941" alone; the chain not drawn at
all on plate `cloth`; the lowered gloss on plate `net`, tab Word, at 1280;
the space between two stanzas on plate `yoke` (row 40.0 stands 11.7 px
lower at 1280 and 8.3 px at 390); the balance of a plate's title, of the
italic line under the page's title, of the title under "Read on" and of the
head of a drawing; the page numbers left alone under Auden's passages; the
range of lines cut at its dash and the initials parted in the sources; the
doubled colon in "What each caption stands on"; the glosses at 11 px. The
examiner mended the sources, added the two folded sections, took the
addresses out of `notCounted`, and corrected who is caught at the third
place.

The third mending (the kit's files changed from 07:09 to 07:15 UTC) did two
things to this piece, both sound. All sixteen pictures at 390 changed with
it, and I opened all sixteen; the fifteen at 1280 are the same files as
before.

- On a phone the place of the passage now stands in italic under each
  plate's heading. On plates `yoke` and `cloth` it is one line at every
  width from 414 to 320 px. On plate `net` it is one line at 414 and two
  at 390, 375, 360 and 320, and the turn falls after the semicolon of the
  part's heading, which is where it reads best. Each plate is that much
  taller on a phone: 42 px on plate `net` at 390, measured on the glosses
  of its Word tab, and about 23 px where the place is one line.
- Two glosses that would touch now stand side by side before one goes
  lower. That is what set the gloss right at 1280 on plate `net`, tab Word.
  At a phone's width there is no room for it (section 5, S2).

## 7. Things in the reading I think are wrong, or would change

These are for the lead, the poet or the examiner. I changed none of them.

**R1. Plate `cloth` wants a `turn` too, which I could not set (section
8).** At 390 no line of the plate turns. Narrower, the page's own choice
splits a phrase:

- at 375 and at 360 px, row 23.0 turns after its fifth word, between a
  possessive and its noun;
- at 320 px, also row 17.0 after its fifth word, which is "and"; row 19.0
  after its fifth word, between "this" and its noun; row 21.0 after its
  fifth word, inside the first two words of a clause; and row 27.0 after
  its fifth word, between an article and its noun.

Proposed: `"turn": { "17.0": 3, "19.0": 3, "21.0": 3, "23.0": 2, "27.0": 3 }`
on the plate `cloth`. Each row then turns at its comma, or before the
phrase the page now splits. I tried it served to the page in flight and
saved nowhere in the project, on all three tabs at 390, 375, 360 and 320:
every one of the five rows turns where proposed, none is left free, the
marks follow, and at 390 nothing changes. The five numbers are inside the
checker's rule (rows 17.0 to 27.0 have ten, nine, nine, nine and nine
words). The other rows that turn at 320 turn well by themselves.

**R2. The poet's heading for plate `yoke` could be put back.** "The king at
Aulis, as the elders sing it". The kit now balances a plate's title, so the
one-word second line that made me shorten it cannot come back (section 4).

**R3. Plate `yoke`, tab Metaphor: a neck keyed as the harness.** Part 1,
the fourth word of row 40.0, has the tag `picture` and no label, so it is
underlined in the harness's red and the key's red row says only "the
harness". The caption does not call it part of the harness. A tag and a
label of its own would set it apart; listed last, it would leave the other
colors as they are. Tags and labels are not mine to change.

**R4. A firmer mark for the place where the Greek has no net.** The sixth
place has `greek: "none (1275–1276)"`. The drawing makes that place a ring
by reading the word none. If the word is ever changed the ring will quietly
become a dot. A key such as `inGreek: false` would hold.

I found nothing wrong in the numbers of the shape lens. My own count of
the nine line numbers, of the passage's lines and of the six parts agrees
with the reading (section 3), and `bySpeaker` and `byCaught` agree with the
places as they now stand (3, 3, 2 and 1; 2, 1, 4 and 2).

## 8. The last check, and two things I could not do

The two commands of step 1 were run a last time at 07:19 UTC, after the
last change to the kit (the stylesheet and the plate's script, 07:15:10, in
the third mending), to the build (07:13), to the reading (the `turn`,
06:52) and to my script (07:14, a comment only).

- `node build/pieces.mjs agamemnon` printed its list of the pieces with a
  reading and no problem.
- `node build/tools/shoot.mjs agamemnon --out remake/works/agamemnon/shots --page`
  ended with the line `nothing reported; now look at the pictures`.

`shots/` holds 31 pictures: the ten tabs of the three plates at 1280 and at
390, and the whole page in five slices at 1280 and six at 390. I ran the
two commands at 06:36 and opened all 31. The kit went on changing, so I ran
them again at 06:55 (after the joins and the turn), at 07:04, at 07:08, at
07:15 (after the third mending) and at 07:19, compared the files of each
run with the run before, and opened every picture that had changed: sixteen
at 06:55, one at 07:04, none at 07:08, the sixteen at 390 at 07:15, none at
07:19. So the 31 files of the last run are the same, byte for byte, as
pictures I have opened. I also opened the two folded sections at the foot
of the page at both widths, the figures of the drawing at 1280, 1024, 390
and 320, and the head of each plate at 360, 340 and 320.

What the tool cannot see and the last pictures show is section 5: strokes
through speakers' names (S1), a lowered gloss on the line under it at 390
(S2), the empty band under the key of the drawing (S3), and the turn after
an article under "Read on" (S4).

**Not done: one run of the checker.** After the `turn` edit I asked for the
checker again, in one command with a look at the plate `cloth` in
`reading.json`, which I meant to edit next. The permission system of my
session refused that command, giving "Modify Shared Resources" as its
reason. I did not run it again in parts or by another way, and I made no
further edit to `reading.json`. So:

- The checker ran clean after each of the three joins, and has not been run
  by me since the `turn` on plate `yoke`. One run of
  `node build/tools/check-reading.mjs agamemnon` by the lead will settle
  it. What I can say without it: the checker's rule for `turn`, which I had
  read, asks for a line of verse of the passage and a whole number from the
  row's first word to its last but one; rows 39.7 and 39.8 are lines of
  verse of the plate with words 0 to 10 and 0 to 9, and the numbers are 5
  and 4; the build ran clean after the edit; and the page turns both rows
  where the reading says (section 4).
- The `turn` for plate `cloth` is a proposal only (section 7, R1), and the
  poet's heading was not put back (R2).
