# Peer Gynt: the artist's notes

Piece `peer-gynt`. Artist at work on 2026-10-03, while the examiner was
mending the same reading and the lead the kit. Words of the work are
pointed at by plate, tab, row and word number, never typed out. Times
are this machine's clock.

## 1. What is wrong on the page, and whose it is

Every screen was looked at at 1280 px and at 390 px: before I drew
anything (section 3), when the drawing stood, after each change of the
kit that I noticed, and last after the second mending of the kit
(`remake/KIT-CHANGES.md`), in the pictures now in `shots/` (section 5
gives their time). Before that last look I read again "How a plate lays
itself out" in the kit's README and "What you may change in
`reading.json`" in ARTIST.md, and built again.

### What I set in the reading after the second mending

ARTIST.md now lets the artist set a plate's `turn` and a figure lens's
`join`. I set three things, each by a small exact edit. After them
`node build/tools/check-reading.mjs peer-gynt` says "no problems" and
"no warnings".

- **Plate "two-sayings": `"turn": { "49.0": 3 }`.** On a phone the
  page's own choice turned row 49.0 after its word 4, which left that
  word alone at the end of the first part, parted from the words it
  leads. The line now turns one word earlier, at the comma after the
  word in quotation marks. Under Beat each part has its two beats.
  (The kit's README gives `{ "49.0": 4 }` as its example of the form;
  word 4 is where the page turned the line already, and that was the
  fault.) `peer-gynt-two-sayings-0-figure-390.png` and the other three
  tabs at 390 px.
- **Plate "answer": `"turn": { "224.1": 4 }`.** The page's own choice
  turned row 224.1 after its word 6, between two words of one phrase.
  It now turns after word 4, at the second comma, and every phrase of
  the line stands whole. Under Beat each part has its two beats.
  `peer-gynt-answer-0-figure-390.png` and the other three tabs at
  390 px.
- **Plate "onion", tab "Figure": `"join": [[0, 1], [2, 3], [4, 5],
  [6, 7]]`.** The lens is `"draw": "map"` with four parts of one kind
  and eight of the other, and for those the kit's "map" draws no
  stroke, though the caption says that the marks pair each coat with
  its man. The four pairs are the ones the caption names, in its
  order: the man and the onion in row 5.1 (words 4 and 9); the first
  coat (row 7.0, words 3 to 4) and its man (row 7.1, words 2 to 3);
  the second man and coat in row 7.2 (words 2 and 3); the third coat
  and man in row 7.4 (words 0 to 1 and 4 to 5). The four onion words
  from row 9.0 on are joined to nothing, as the caption says they
  stand alone. The strokes are back at both widths, as they were
  before the kit's change of 06:10.
  `peer-gynt-onion-0-figure-1280.png`, `...-390.png`.

At 1280 px the two lines with a `turn` stand whole, so nothing changes
there: the eight pictures of those two plates at 1280 px are the same,
pixel for pixel, before and after the edit.

### Gone

Each of these was in an earlier report of mine.

- ~~Onion, Figure, both widths: the strokes that pair each coat with
  its man were gone.~~ Back, by the `join` above.
- ~~Two-sayings, all four tabs, 390 px: row 49.0 turned inside a
  phrase.~~ Mended by the `turn` above.
- ~~Answer, all four tabs, 390 px: row 224.1 turned inside a
  phrase.~~ Mended by the `turn` above.
- ~~Onion, Figure, Word and Beat, 390 px: row 7.1 turned badly.~~ The
  kit's balanced turn now falls after word 3, between the two halves
  of the line. Nothing to set.
- ~~Two-sayings and answer, 390 px: the second passage made the plate
  long under every tab.~~ The kit now shows a second passage only
  under the tabs that mark it (Word and Return in "two-sayings",
  Ending in "answer").
- ~~The kit's plain table, which stands in for a drawing that fails,
  printed a `read` column.~~ The kit leaves it out.
- The faults of the first look that went away earlier are in section 3.

### Still there after the second mending

Worst first. None is mine to mend.

1. **Answer, Ending, 390 px: the tab opens on lines it does not
   mark.** Every mark of this tab is in the second passage. At 1280 px
   the two passages stand side by side and it reads well. At 390 px
   the first passage stands first with no mark on it (about 450 px),
   and the marked lines come after. The kit now takes a second passage
   away under tabs that do not mark it; a first passage that a tab does
   not mark still stands first. The kit's or the reading's.
   `peer-gynt-answer-3-ending-390.png`.
2. **Two-sayings, Return, both widths: the numbers under the
   underlines are small.** 12.5 px at 1280 px and 10.5 px at 390 px, in
   old-style figures, so a 1 or a 2 stands about 6 px tall at 1280 px.
   They can be read, and their colour ties each to its underline. The
   kit's. `peer-gynt-two-sayings-3-return-1280.png`, `...-390.png`.
3. **Onion, Figure, Word and Beat, 390 px: row 11.1 turns one word
   late.** Its word 3 is two words joined by a dash. The page turns the
   line after the whole of it, so the second of the two stands at the
   end of the first part, away from the words it begins. The pause is
   at the dash, and `turn` cannot name that place: the checker asks
   for a whole number, and the kit reads 3.1 as 3 (I tried both on the
   way to the page, touching no file). Turning after word 2 would be
   worse: it parts three words that belong together and leaves one
   beat over three. So I set nothing. The kit's: let `turn` name the
   first of two joined words. `peer-gynt-onion-0-figure-390.png`,
   `...-2-word-390.png`, `...-3-beat-390.png`.
4. **Onion, Beat, both widths: the three points for lines left out
   stand under the dots of the voice.** After row 5.2 and after row
   7.5, about 26 px under the dots of the line before at 1280 px and
   22 px at 390 px. They are smaller, grey, and at the left margin;
   under a tab where a dot is a stress a reader may still take them
   for marks. Small. The kit's.
   `peer-gynt-onion-3-beat-1280.png`, `...-390.png`.
5. **All three plates, 390 px: the head of the plate does not say
   where in the play the passage stands.** At 1280 px it says "Act 5,
   Scene 5"; where a plate is narrower than 520 px the kit hides it.
   In "two-sayings" the labels of the two passages give the acts; in
   "onion" and "answer" nothing on the plate names the scene (under
   Layers the key of my drawing does). The kit's, and meant; a reader
   on a phone may want it. `peer-gynt-onion-0-figure-390.png`,
   `peer-gynt-answer-0-figure-390.png`.

Not a fault, by the lead's note that a long plate is long on a phone,
and given for the record. At 390 px the caption begins, measured from
the top of the plate: in "two-sayings" 856 px down under Figure and
Beat and 1,245 px under Word and Return; in "onion" 1,172 px under
Figure, Word and Beat and 1,156 px under Layers; in "answer" 534 px
under Figure, Beat and Word and 892 px under Ending.

### The page

Nothing. Title, the two columns under it, "More from Auden", "Read on",
the sources and the two folds at the foot (opened, at both widths) are
in order.

No heading, tab name or title wraps badly at either width, so I have
changed no heading and no label.

## 2. The drawing: plate "onion", tab "Layers"

`site/js/pieces/peer-gynt.js`. No stylesheet of the piece's own was
needed.

### What it is

A chart with a row to each coat and the play across the top.

- **Down the page: the order.** The rows are the coats in the order Peer
  strips them: 1 to 9, then the row the reading calls "then several at
  once", then "the middle". Each row prints what the reading's table
  holds for it: what Peer calls the coat (ink), the part he played
  (grey), and where that part is seen or told.
- **Across the page: the play, scene by scene.** A rule with one step to
  each scene, in five groups for the five acts (3, 8, 4, 13 and 10
  scenes). Under it every row has a hairline of its own, and on that
  hairline a mark at the scene or scenes the row names: a heavy stroke
  where the part is seen on the stage, a ring where it is only told, and
  a broken stroke or broken ring where the row itself says "it appears"
  (coats 5 and 9, as the table stands). The words for the place stand
  beside the mark and are a link to that place in the book printed on
  the site.
- **In red: this passage.** The scene the passage is taken from (Act 5,
  scene 5) is the one red step on the rule. A red rule in the margin
  runs beside the coats whose lines the passage holds, and their
  numbers are red. The last key gives the count: 3 of the 9 coats, 6 of
  the 18 lines of the speech; its last two words are a link to the
  whole speech in the book.

Because the rows go down in the order of the stripping and the marks
are set by scene, the marks and their words make a stair from the upper
right to the lower left: that is the caption's point that the staged
coats come off last scene first, seen. The first three acts stay empty
in every row: that is its point that no name he gives belongs to Acts 1
to 3. The broken stroke of coat 5 stands on the last step of Act 4,
where the caption puts the madhouse.

### Why this form

The lens holds two orders (the order of the coats and the order of the
scenes) and says that one runs against the other. Two orders are shown
by setting one down the page and the other across it. A list or a table
shows only the first; the reader would have to work the second out from
the words "Act 4, scene 13", "Act 4, scenes 11 and 12". Here it is a
slope.

It is not a picture of an onion. I did not draw rings one inside
another, though the count of coats would allow it: rings would be the
thing itself, drawn, and they would show a nesting that the speech does
not state (it states an order and, at the end, that there is no
kernel). The last two rows carry empty hairlines, and that is all the
drawing says of "the middle". There is no scenery: rules, strokes,
rings, numbers and the reading's own words.

One step of the rule is one scene, whatever its length; the key says
so, because a reader may take the rule for the length of the play.

### The numbers the table did not hold

The table had no number of scenes and no count of lines. Both were
counted by a script over the text printed on the site, and added to the
lens's `facts` under new keys. The keys that were there are untouched.

    node remake/works/peer-gynt/counts.mjs

It printed, on 2026-10-03 (numbers and places only):

    scenes in each act: [3,8,4,13,10] (38 in all, 38 parts in the book)
      the reading has [3,8,4,13,10]: the same
    coat 1: rows 0 to 1 of block 7: 2 lines, 2 of them in the passage; the reading has the same
    coat 2: rows 2 to 3 of block 7: 2 lines, 2 of them in the passage; the reading has the same
    coat 3: rows 4 to 5 of block 7: 2 lines, 2 of them in the passage; the reading has the same
    coat 4: rows 6 to 7 of block 7: 2 lines, 0 of them in the passage; the reading has the same
    coat 5: rows 8 to 9 of block 7: 2 lines, 0 of them in the passage; the reading has the same
    coat 6: rows 10 to 10 of block 7: 1 line, 0 of them in the passage; the reading has the same
    coat 7: rows 11 to 13 of block 7: 3 lines, 0 of them in the passage; the reading has the same
    coat 8: rows 14 to 15 of block 7: 2 lines, 0 of them in the passage; the reading has the same
    coat 9: rows 16 to 17 of block 7: 2 lines, 0 of them in the passage; the reading has the same
    the nine coats: 18 lines in block 7 of a5s5, which has 18 lines; the rows run on without a gap: true
    in the passage: 6 lines, giving 3 coats; left out: 12 lines, giving 6 coats
      the reading sends the reader to peer-gynt/a5s5:7 for the speech: the same block

and, for every place a row sends the reader to, that the place is in
the book. The rows of each coat are read from that coat's own `source`
note, so the script counts what the poet pointed at.

The new keys:

- on each of the nine numbered coats, `"lines"`: how many lines of the
  speech give that coat (2, 2, 2, 2, 2, 1, 3, 2, 2);
- on eight of them, `"read"`: the place in the book where the part is
  first seen or told (coat 4 is named nowhere else, so it has none).
  Each is the first place named in the coat's own `source` note; I
  looked at each with `build/tools/show.mjs`;
- one new entry at the end of the list, which is not a coat:
  `"scenes in each act": [3, 8, 4, 13, 10]` and
  `"the speech": { "read": "peer-gynt/a5s5:7" }`, the block of the
  scene that holds the eighteen lines.

Which lines stand in the passage is not stored: the script of the page
works it out, each time it runs, from the rows the plate shows and from
`lines`. So if the poet or the examiner shows more of the speech, the
red rule, the red numbers and the counts in the key follow.

`node build/tools/check-reading.mjs peer-gynt` says "no problems" and
"no warnings" with the keys in.

The script types in no number and no name of the play. It reads the
four columns by the names the reading gives them ("coat", "Peer calls
it", "the part he played", "seen or told in"), and prints three of those
names as the heads of its columns. It finds the scenes of a row by
reading the row's own words ("Act 4, scenes 6 to 8"; "told in ...";
a whole act if no scene is named). It takes a part for uncertain if the
row gives it with a word of doubt, and the key prints that word as the
row has it ("it appears"), so the key says no more than the table does.
The name of the passage's scene comes from the page's own list of
texts.

### The examiner's changes, which the drawing followed by itself

While I was at work the examiner changed this lens several times
(exam.md, the second passage, Layers). The row "then several at once"
lost its "Acts 1 to 3" and then its part; coat 9 gained "it appears".
After `node build/pieces.mjs peer-gynt` the drawing showed each change
without a change to the script: the broken stroke across the first
three acts was gone, the ring of coat 9 was drawn broken, and the row
with no part printed one line fewer. I had given the row "then several
at once" a `read` to Act 1, scene 1; with nothing left to link from, I
took that one key of mine out again.

The caption used to say how many lines the passage leaves out. It no
longer does. The drawing still shows which coats the passage holds, and
its last key gives the counts, worked out as above. I kept that because
the plate's heading says "three of nine coats shown", and this is where
a reader can see which three.

### Smaller choices, and what I mended in my own work

- **Two layouts.** From 540 px the words of a row stand at the left and
  the play at the right, on one line. Below that (a phone, and a
  desktop window so narrow that the drawing gets less than 540 px
  beside its caption) the words stand over the play. In both, the words
  for the place stand on the row's hairline, before the mark if there
  is room, after it if not, and under it if neither.
- **The margin.** At first I set one dot before each coat's number for
  each of its lines, red if the line is in the passage. In the picture
  the dots read as punctuation before the number (a colon, a bullet).
  Mended: a red rule in the margin and red numbers, and the count in
  words in the key.
- **"The passage", not "the passage above".** Under this tab the lines
  of the passage are not on the screen (they stand under the plate's
  other tabs), so the key and the pointer's line say "in the passage".
- **The key for the broken marks** first gave a reason of my own. A
  label must state a fact from the table, so it now says only that the
  row says "it appears", in the row's own words.
- **The drawing-in.** The rows come one after another, 0.15 s apart;
  all is there in under three seconds. Nothing moves after that.
- **The pointer.** On a numbered row the kit's line under the key gives
  the count in words ("Coat 7: 3 lines of the speech, left out of the
  passage"), and that row's number and marks stay dark while the other
  rows' grow faint. It is done with the kit's own `hot` and nothing of
  mine: when the kit changed how a touch lets go (06:30), I took my
  own listeners out so that a second tap lets a row go as it does in
  every other drawing. Tried at 1280 px with the pointer and at 390 px
  with a finger: a tap lights a row, a second tap lets it go. Nothing
  is learned only there.
- **If the facts lose what the drawing needs** (say, the count of
  scenes), the kit would set out its plain table, and that table would
  print my working column `lines` and the entry that holds the count of
  scenes. So the script catches its own failure and sets out the four
  columns of words only, under the head "The table". I tried it at both
  widths by taking the count of scenes out on the way to the page.
- **In a private preview of one piece** there is no book to open, and
  the drawing makes no links.
- **`remake/works/peer-gynt/look.mjs`** is my own tool for looking
  closer than the picture tool does (other widths, the pointer on a
  row, motion on, every link followed, the folds opened). It writes
  nothing into the project. With it, after the second mending: no word
  of the drawing stands outside it at window widths of 320, 360, 390,
  414, 560, 700, 900, 1024, 1070, 1100, 1160, 1280, 1440 and 1920 px;
  each of the nine links lands on a block that is in the book.

The drawing is 607 by 577 px at 1280 px, 334 by 793 px at 390 px,
304 by 810 px at 360 px and 264 by 860 px at 320 px: the widths the
kit's README says a drawing gets.

## 3. The first look, and what went away under me

Before drawing, `node build/tools/shoot.mjs peer-gynt --out
remake/works/peer-gynt/shots --page` ended "nothing reported; now look
at the pictures", and I found sixteen things in those pictures. The
lead and the examiner were both at work on what I was looking at, and
this happened to them:

- A mark that covered two words joined by a dash (two-sayings, Figure
  and Word, row 42.7, word 6; onion, Figure, row 11.1, word 3): mended
  by the kit, which now divides such a word at its dash.
- A point's number set in the space between two words, so that it read
  as part of the next word (two-sayings Beat, point 4; answer Beat,
  points 2 and 3): mended by the kit in two steps. It first kept room
  after the word under every tab, which mended 1280 px, left the number
  touching the next word at 390 px, and showed as a double space under
  Figure, Word, Return and Ending. At about 06:12 it kept the room
  under Beat only and made it at least 6 px: the double spaces are gone
  and the numbers stand clear at both widths.
- A line turned over on a phone with one word left alone, and in Beat a
  lone tick under that word (two-sayings row 49.0; onion rows 7.1 and
  11.1; answer row 224.1): the kit balanced the turn, and after the
  second mending a reading may say where a line turns (section 1).
- A gloss that hung out to the left of the column (two-sayings Word,
  1280 px, under the last Act 5 line): gone.
- Nothing to show where twelve lines are left out of the onion speech:
  the kit now sets three points there (and after row 5.2, where one
  line is left out). See 1, "Still there", 4 for how they look under
  Beat.
- The address of the Oslo edition running past the column at 390 px,
  and two sources with working words in them: gone; the examiner
  rewrote the sources.
- The plain table under Layers, 870 px tall at 1280 px and about
  1,700 px at 390 px: now the drawing (577 px and 793 px).
- The small numbers under Return and the marks of Ending all standing
  in the second passage: as they were (section 1, "Still there", 2
  and 1).

Changes of the kit that I saw in the pictures and did not ask for:

- **The plates with two passages** ("two-sayings" and "answer"). From
  about 06:18 the kit set the second passage beside the first; for
  eight minutes its script was ahead of its stylesheet and both plates
  were broken; I waited, and it was mended at 06:26. After the second
  mending the second passage shows only under the tabs that mark it.
  At 1280 px it stands at the head of the right column under Word, at
  the foot of that column, beside the lines it answers, under Return,
  and beside the first passage under Ending, with the caption under
  both. At 390 px it follows the first passage.
- **The line that answers the pointer** now stands under the key of a
  drawing, with room kept for it (two lines at 390 px), so a blank
  band shows between the key and the caption there. The kit's, and
  meant: the key does not move when the line appears.

## 4. What I think is wrong, or thin, in the reading

Nothing that is false. Three things I had written here are mended: the
caption's first sentence under Layers, which gave every coat a scene
where Peer "was that man" though two coats are never staged and one is
only told, now says where the play shows or tells each part (the
examiner); the row "then several at once", which said one thing under
two heads, now has no part (the examiner); and under the onion's
Figure tab the caption's "the marks pair each coat with its man" is
true of the page again (the `join` of section 1).

What is left:

- **Nothing in the Layers caption now speaks of the lines left out**,
  though the plate's heading says "three of nine coats shown" and the
  grounds still hold the count (twelve lines, six coats). The drawing
  shows which coats are in the passage and gives the counts in its key.
  If the caption had a clause to spare, this is the tab where it
  belongs. Thin, not wrong.
- **Plate "answer", tab "Ending"** marks only the last six lines of the
  play, which the plate sets as its second passage, so on a phone the
  tab opens on the passage it does not mark (section 1, "Still there",
  1). For the lead: the kit could let the first passage step back
  there, or the reading could make the ending a plate of its own.

## 5. The last check

After the second mending (`remake/KIT-CHANGES.md`, 06:45; the kit's
last change after it, to its stylesheet, 06:47) and after my three
edits to the reading (06:49), on 2026-10-03 from 07:04 to 07:05:

    node build/pieces.mjs peer-gynt
    node build/tools/check-reading.mjs peer-gynt      "no problems", "no warnings"
    node remake/works/peer-gynt/counts.mjs            "the same" on each of its 11 lines
    node --check site/js/pieces/peer-gynt.js          parses
    node build/tools/shoot.mjs peer-gynt --out remake/works/peer-gynt/shots --page

The last line the picture tool printed:

    nothing reported; now look at the pictures

`shots/` holds 36 pictures: the 24 of the three plates (four tabs
each, at 1280 px and 390 px), five slices of the page at 1280 px and
seven at 390 px. I opened every one of the set taken at 06:50, after
the mending and the edits; the set of 07:05 is the same as that one,
pixel for pixel, in all 36. Sections 1 and 4 are written from them.

Beyond the picture tool, with `look.mjs` and at the same state of the
kit: the Layers drawing at fourteen window widths from 320 to 1920 px
(no word outside it); the pointer on a row at 1280 px and a finger at
390 px; motion left on (the drawing is whole within three seconds);
the private preview (no links); the facts with the count of scenes
taken out (the table of words stands in, at both widths, and the
browser's console has the reason); every one of the nine links
followed into the book; the two folds at the foot of the page opened
at both widths.
