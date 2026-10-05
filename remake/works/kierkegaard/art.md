# Kierkegaard, *Fear and Trembling*: the artist's record

Piece "kierkegaard". Artist started 2026-10-03 08:33 UTC. Sections 1
to 4 were written as the work went; section 5 is the list of faults as
it stands in the last pictures, and section 6 says when those were
taken and what the picture tool printed.

Rules this run works under, beyond ARTIST.md: `reading.json`, `notes.md`
and `exam.md` are not edited by the artist; anything the artist would
set in the reading is written under "Proposed for the reading"; kit
faults are reported, not worked round.

## 1. First look (08:34 UTC)

`node build/pieces.mjs kierkegaard`, then
`node build/tools/shoot.mjs kierkegaard --out remake/works/kierkegaard/shots --page`.
Last line: "nothing reported; now look at the pictures". The pictures of
this first look are kept in `shots/first/` (the three shape tabs are
still tables in them).

Every picture was opened, 1280 and 390. What was seen (file names are
those in `shots/first/`; the list is checked again against the last
pictures in section 5):

- F1. `weaning`, every tab, both widths
  (`kierkegaard-weaning-0-refrain-1280.png`, `-390.png`). In the first
  block the first row begins at the margin and rows two to four begin
  with a paragraph's indent, so the four openings that the Refrain tab
  shows to be the same do not begin at the same place; the spine's
  ticks for rows two to four stop short of their words.
- F2. `weaning`, every tab, 1280. The rows of the first block are parted
  by 92, 57 and 93 px: where the levelling with the second block leaves
  no slack (after row two, which runs to three lines), the next
  paragraph's opening follows at the pitch of lines inside one row. At
  390 nothing parts the four rows of the first block at all but the
  indent, while the rows of the second block are parted by three points.
- F3. `weaning`, every tab, both widths. In the second block three
  points stand on a line of their own over rows two, three and four,
  and each of those rows itself begins with points of omission: the
  omission is shown twice. The first block, where as much is left out
  between rows, has no such line.
- F4. `window`, tabs Yet and Words, both widths
  (`kierkegaard-window-0-yet-1280.png`, `-1-words-390.png`). The last
  word shown (row 21.0, word 160) ends in the edition's own three
  points, and the build's points for a row cut short follow them: six
  points at the end of the passage.
- F5. `greater`, tab Paradox. The stroke that joins a pair standing on
  two lines is a long slant: at 1280 the fourth pair (words 305 and
  308-311), where it runs 380 px across and close under the squared
  stroke of the third pair; at 390 the second and third pairs. Two
  pairs are squared and two slanted, though all four are one kind.
- F6. `window`, tabs Yet and Words, 390. Row 21.0, words 96-99: a line
  ends early, 100 px short of the measure, because the word joined by
  two hyphens (word 100) is not allowed to turn at a hyphen.
- F7. Every plate at 390 is long: `weaning` about 2,000 px under
  Refrain, Turn and Words, `greater` 1,270 to 1,520 px, `window` 1,370
  to 1,610 px. The marks of the first lines and the caption are never
  on a phone's screen together. KIT-CHANGES says this belongs to the
  thing itself; it is listed so that it is not lost.
- F8. The numbered remarks of a compare tab and the notes of a word tab
  (`kierkegaard-weaning-1-turn-1280.png`, `-3-words-1280.png`,
  `kierkegaard-greater-2-sources-1280.png`) are set smaller than the
  caption they stand beside, in italic. They can be read, with effort.
- F9. `weaning`, tab Words, 1280, second block, first row: the second
  gloss (under words 60-61) has moved right to clear the first and now
  stands mostly under word 62, which is not marked.
- The three shape tabs were tables: seven narrow columns for Tellings,
  cut off at the right on a phone (`kierkegaard-weaning-2-tellings-390.png`).

Tab names, headings and the title read and wrap well at both widths.

At 08:54 UTC the lead's fifth mending of the kit was read
(`remake/KIT-CHANGES.md`, the fourth and fifth parts). The list above
was made before it. Section 5 says which of F1 to F9 are still there in
pictures taken after 08:55 UTC.

## 2. The three drawings (`site/js/pieces/kierkegaard.js`)

Each drawing reads its lens's `facts` by key when the page runs: no
count, name or sentence of the reading is typed in the script, and a
head or a label on a drawing is the key its fact stands under. If a key
a drawing needs is missing it throws, and the kit shows the plain table
(tried with a key taken out of each, in the air: the table stood in).
All three were looked at from 1280 down to 320 (sheets of 607 to
264 px); the tool reported nothing at any width.

### Tellings (`weaning`, third tab)

What is to be seen: one story and four tellings of it, and that the
story ends in a blessing and no telling does; and, after each telling,
the paragraph on weaning that this plate prints.

The form: five rows, one to a story, each with two statements side by
side under heads that are the facts' own keys, what Abraham does and
how it ends. The poet's note said this lens "may be best left close to
a table", and it is: the facts are sentences, not counts, so nothing is
joined or plotted. What the table could not do is let the five endings
be read one after another. Here they stand in one column, the right
one. Each telling also has a bar as long as its words, all four to one
scale from zero, and after it in red a bar for the paragraph on weaning
that follows, with both counts beside it; what that paragraph says (the
mother, and who is called happy) stands under the telling under red
heads. Genesis 22 has no bar, because the facts hold no count for it,
and an ink rule parts it from the tellings. A telling's name opens it
in the reader. On a sheet under 300 px the two statements stand one
under the other. There is no table of numbers under it: every fact is
already on the drawing. (If the fact of proposal 3b is set, the words
all four tellings open with stand apart at the head of each bar.)

### Speech (`greater`, fourth tab)

What is to be seen: how far the speech runs before it says the name,
and that every paragraph after that says it.

The form: one ruled line for the whole speech, from its first word to
its last, with a stretch to each paragraph as long as its words. Over
each paragraph stands a dot for every time it says the name, stacked up
from the line; a stack of more than four has its figure over it. The
stretch before the name is tinted (the kit's `TINT`) and its length in
words is written over it. Paragraph 3, whose close is the passage of
the plate, is red: its stretch, its number and its one dot. The five
parts of the speech are bracketed under the line. The poet's note asked
for "a bar for each paragraph with the count of the name". The bars are
laid end to end instead of side by side, because then the lengths add
up to the speech and the place of the first naming is a distance from
its head, which is what the caption says. Pointing at a paragraph says
its part, what it is about, its words and its count, and a click opens
it in the reader; a finger's tap asks, and the answer carries the link.
The numbers are folded under the drawing.

### Day (`window`, third tab)

What is to be seen: that the portrait walks through one day to the
window, paragraph by paragraph, and that at each stop the narrator
likens the man to someone, twelve times in all; the passage is the
last stop.

The form: five stations down one line, in order, because the thing
itself is five steps in order. Each has a ring (a red dot for the
paragraph of the passage), its time as the name, which opens the
paragraph in the reader, what the man does there, and the people he is
likened to, numbered through from 1, so that the caption's count can be
checked by eye. On a sheet of 480 px or more (a window of about 600 and
wider) the likenesses have a column of their own; on a narrower one
they stand under each station. Nothing is to scale, since no length is
the point here; the words of each paragraph are in the folded table
only. Where a list of likenesses and its count do not agree, the list
is shown whole with the range of its numbers.

No stylesheet was needed: the kit's classes do all of it.

## 3. Proposed for the reading

Two things, for the lead to set. `reading.json` was not touched. Both
are new keys in a shape lens's `facts`; the script reads each where it
is there and does without it where it is not, so the page is whole
either way. Each picture was taken with the key put into the built copy
in the air (nothing on disk was changed).

### 3a. Speech: where the name is first said

Plate `greater`, the lens of kind `shape`. In the row whose `paragraph`
is 3, add, leaving every key that is there as it is:

```
"words before the name": 749
```

Why. The caption says that the last sentence of the third paragraph is
the first to say the name, and gives the place: 749 words in. The
facts hold a count for each paragraph and no place inside one. So the
drawing as it stands can tint only the two paragraphs that never say
the name, and writes their 477 words over them
(`shots/kierkegaard-greater-3-speech-1280.png`): the caption's number
is nowhere on the drawing. With the key, the tint runs to the 749th
word, the figure over it is the caption's, and the one dot of
paragraph 3 stands at its place, at the paragraph's end
(`shots/proposed-speech-749-1280.png`, `shots/proposed-speech-749-390.png`).
The script accepts the number only if it falls inside the first
paragraph that says the name.

The count, by a script over the hosted text, with the site's own
word-splitter (the script is in this folder and changes nothing):

```
$ node remake/works/kierkegaard/count-speech.mjs
the name counted: Abraham (from the key "names Abraham")
paragraphs 18, words 3375
words in each paragraph: 250 227 312 221 129 143 145 217 15 107 434 42 160 39 400 95 153 286
the name in each paragraph: 0 0 1 2 2 2 2 5 1 2 12 1 3 2 8 2 3 3 (in all 51)
first said in paragraph 3; words before it, from the head of the speech: 749
other forms holding the name: 0
the facts of the lens agree with this count, paragraph by paragraph
```

### 3b. Tellings: the words all four open with

Plate `weaning`, the lens of kind `shape`. In each of the four rows
that hold `words` (the rows whose `story` is the first, the second, the
third and the fourth telling), add, leaving every key that is there as
it is:

```
"opening words in common": 6
```

Why. The caption begins by saying that the four tellings open on the
same six words. The facts hold that only in the working note `counted`
of the first row, which the build takes out, so the drawing cannot show
it. With the key, the first six words stand apart at the head of each
telling's bar, to the bar's own scale, and the key under the drawing
says what the small block is: four bars that begin alike and then run
to four lengths (`shots/proposed-tellings-6-1280.png`,
`shots/proposed-tellings-6-390.png`). Without it the bars are whole, as
in `shots/kierkegaard-weaning-2-tellings-1280.png`. The script accepts
the number only on a row that has its words counted, and only if it is
smaller than them.

The count (the script is in this folder, prints numbers only and
changes nothing; it takes the blocks from the working note `where` of
each row):

```
$ node remake/works/kierkegaard/count-tellings.mjs
First telling: blocks 5 and 6; words 343, then 70 on weaning; the facts say 343 and 70 (agree)
Second telling: blocks 8 and 9; words 149, then 39 on weaning; the facts say 149 and 39 (agree)
Third telling: blocks 11, 12 and 13; words 191, then 77 on weaning; the facts say 191 and 77 (agree)
Fourth telling: blocks 15, 16 and 17; words 145, then 27 on weaning; the facts say 145 and 27 (agree)
words, from the first, that all 4 tellings open with in common: 6
of these, the same letter for letter and stop for stop: 5
```

(The sixth word is the same word in all four; the stop after it is not
the same in all four, which is why the last line says 5.)

This one is the lesser of the two. If the lead would rather keep the
facts as they are, the drawing loses nothing it has now.

### 3c. Nothing else is proposed

- `heading` and `label`: the three headings and the eleven tab names
  read well and are one word each. In a window of 320 px the four tabs
  of `greater` still take two rows, the fourth alone on the second
  (section 5, K5). They are 0.9 px too wide for the row, which is the
  kit's to mend. A tab named `Name` in place of `Speech` would fit, but
  `Speech` says what the line of the drawing is, so no label is
  proposed.
- `beside`: `weaning` has it already, and needs it.
- `turn`: the passages are prose; there is no line of verse to turn.
- `join`: the spine of Refrain joins the four openings, which is what
  its caption says. The Paradox tab has drawn no strokes since the
  seventh mending: two colors tell the pairs, and the caption does not
  ask for more. No `join` is proposed.
- `speakers`: no speaker's name stands over any passage of this piece.

## 4. The reading: what I think is wrong in it

Nothing. The numbers the drawings stand on were counted again over the
hosted text with the site's word-splitter, and all agree: the four
tellings and their paragraphs on weaning (343 and 70, 149 and 39, 191
and 77, 145 and 27 words), the five paragraphs of the portrait (130,
213, 231, 79 and 180 words), and the eighteen paragraphs of the speech
(the listings in section 3). The likenesses add up to the twelve of the
Day caption, and the 51 namings are the one of paragraph 3 and the
fifty more of the Speech caption.

Three things a caption says that the facts under it do not hold, so
that no drawing can show them. None is an error:

- Speech: the place of the first naming, 749 words in. Proposal 3a
  would put it on the drawing.
- Tellings: the six words all four tellings open with. Proposal 3b
  would put it on the drawing.
- Tellings: that every telling names Sarah and Genesis 22 never does.
  Only the working note of the first row holds the count. The first
  half was counted over the hosted text at 11:32 UTC: the name stands
  once in the first telling and twice in each of the other three, and
  in none of the paragraphs on weaning. Genesis 22 is not among the
  texts hosted here, so the artist cannot count the second half and
  proposes nothing (exam.md says the examiner read the chapter for
  it). The drawing does without it.

At the first look three titles of books in "More from Auden" stood in
roman type. They are in italics in the last pictures
(`shots/kierkegaard-page-1280-3.png`, `-1280-4.png`): someone has
marked them since, and nothing is left to say.

## 5. The faults as they stand in the last pictures

Every picture named here is in `shots/` and was taken between 11:11
and 11:17 UTC, after the kit's seventh mending and the mend of 11:06
UTC that followed it (section 6). All eleven tabs were looked at again
at 1280, 390, 360 and 320, the whole page at the same four widths, and
the three drawings at 1024, 820, 600 and 480 as well. Words are pointed
at by row and word number, as the checker's proof numbers them.

### 5a. Mine

Nothing is left that I know of. The three shape tabs, tables at the
first look, are drawn, and each was checked against its caption:

- Tellings (`kierkegaard-weaning-2-tellings-1280.png`, `-390.png`,
  `-320.png`): the five endings read down one column; the four bars are
  to one scale from zero.
- Speech (`kierkegaard-greater-3-speech-1280.png`, `-390.png`,
  `-320.png`): eighteen stretches, 51 dots, the two paragraphs without
  the name tinted. A paragraph too thin for its number goes without it
  (9, 12 and 14 at 1280, more on a phone); pointing at it says it.
- Day (`kierkegaard-window-2-day-1280.png`, `-390.png`, `-320.png`):
  five stations, the likenesses numbered 1 to 12.

Two numbers of two captions are not on the drawings, because the facts
do not hold them: section 3 proposes both.

### 5b. The kit's to mend, worst first

- K1 (was F1). `weaning`, first block, tabs Refrain, Turn and Words,
  every width. Row 6.0 begins at the margin; rows 9.0, 13.0 and 17.0
  begin a paragraph's indent further in (29 px at 1280, 26 px on a
  phone). The Refrain tab rules the opening of each row in red and
  joins the four with a spine, to say they are one refrain: they begin
  at two places, and the spine's ticks for rows two to four stop short
  of their first word by the indent. At 320 the indent also changes
  where they turn: row 6.0 keeps its words 0-6 on one line, rows 13.0
  and 17.0 turn after word 5. Four rows that are each the opening of a
  paragraph should all take the indent, or none.
  `kierkegaard-weaning-0-refrain-1280.png`, `-390.png`, `-320.png`.
- K2 (was F2 and F3). `weaning`, both blocks, the same three tabs.
  Every width: in the second block a line of three spaced points stands
  before rows p:9.0, p:13.0 and p:17.0, and each of those rows itself
  begins with points of omission, so the gap is shown twice, three
  times over. The first block, whose rows end in points of omission and
  leave out as much between them, has no such line.
  At 1280, where the two blocks are set level row by row, this parts
  the rows of the first block unevenly: from the last line of row 6.0
  to the first of row 9.0 is 93 px, from 9.0 to 13.0 it is 58 px, which
  is the pitch of the lines inside a row, and from 13.0 to 17.0 it is
  93 px again (measured 11:25 UTC). Rows 9.0 and 13.0 read as one
  paragraph but for the indent. On a phone nothing parts the rows of
  the first block but the indent (51 px from line to line, inside a row
  and from row to row), and a line of points parts those of the second
  (83 px).
  `kierkegaard-weaning-0-refrain-1280.png`,
  `kierkegaard-weaning-3-words-1280.png`,
  `kierkegaard-weaning-1-turn-390.png`.
- K3 (was F4). `window`, tabs Yet and Words, every width. Row 21.0 is
  shown as far as its word 160, which ends in the edition's own three
  points; the kit's points for a row cut short follow them: six
  points at the end of the passage. Where the last word shown already
  ends in points of omission, the kit's own could be left off (the
  sixth mending did as much for a row cut short at a dash).
  `kierkegaard-window-0-yet-1280.png`, `-390.png`,
  `kierkegaard-window-1-words-390.png`.
- K4 (was F6, and one more). Lines that stop far short of the measure
  on a phone, because a run of words may not turn:
  `window`, Yet and Words, 390: the line of row 21.0, words 96-99, ends
  120 px short of the 334 px measure, since word 100, joined by two
  hyphens and 121 px wide, may not turn at a hyphen
  (`kierkegaard-window-0-yet-390.png`, `-1-words-390.png`; at 360 the
  line is full). The same at 320: the line of words 71-75 ends 87 px
  short of 264 px before word 76, which has one hyphen
  (`kierkegaard-window-0-yet-320.png`).
  `weaning`, Refrain, Turn and Words, 320: the first line of row 9.0
  holds its words 0-2 and ends 117 px short of 264 px. Words 3-5, which
  only the Refrain tab marks, are kept as one run under every tab; it
  is 113 px wide and with the space before it does not fit, though two
  of its three words would
  (`kierkegaard-weaning-3-words-320.png`, `-0-refrain-320.png`). This
  follows from the kit's rule that a marked run keeps whole; it is
  listed so that the lead can weigh the rule against the hole.
  All three measured again at 11:20 UTC.
- K5. `greater`, every tab, 320. The four tabs take two rows, the
  fourth alone on the second. They need 264.9 px (45.8, 69.7, 64.7 and
  54.7 px, and three gaps of 10 px) and the row is 264 px wide: they
  miss by 0.9 px (measured 11:26 UTC; in a window of 324 px they fit).
  The tabs of `weaning` (257.9 px) keep to one row, as the seventh
  mending meant. `kierkegaard-greater-0-build-320.png`,
  `-1-paradox-320.png`, `-2-sources-320.png`, `-3-speech-320.png`,
  `kierkegaard-page-320-2.png`.
- K6. The head of the page, 320. The line over the title turns after
  its point, and the point is left at the end of the first line
  (`kierkegaard-page-320-0.png`). At 360 and wider it is one line.
- K7 (was F9). `weaning`, tab Words, second block, row p:6.0, every
  width. The gloss of words 60-61 begins under them and runs on under
  word 62 and past it. At 1280 the two words stand from 697 to 760 px
  and their gloss from 745 to 849 px, while word 62 stands from 765 to
  825 px; the gloss of word 59 (634 to 692 px) runs from 614 to 735 px,
  so most of what stands under words 60-61 is the end of the gloss
  before theirs. On a phone the same: the two words at 88 to 144 px,
  their gloss at 126 to 216 px (measured 11:28 UTC). A hairline now
  parts the two glosses, so they read as two. Little is left of this
  (`kierkegaard-weaning-3-words-1280.png`, `-390.png`).
- K8, the least. The foot of the page on a phone: a figure is parted
  from the word it belongs to where a line turns. In the list of
  sources, in the entry for the Bible, the number of a book stands at a
  line's end and the book's name begins the next (390 and 360; at 320
  the other of the two numbers), and at 390 a book's name is parted
  from its chapter and verse (`kierkegaard-page-390-6.png`,
  `kierkegaard-page-360-7.png`, `kierkegaard-page-320-7.png`). At 360
  a date in a citation under "More from Auden" is parted between its
  day and its month (`kierkegaard-page-360-5.png`). The kit could keep
  a figure with the word beside it in these lists, as it now keeps a
  word of one letter in a passage; or the entries could carry no-break
  spaces, which is the critic's to set, not mine.

### 5c. Mended since the first look, and struck from the list

- F5, the strokes of Paradox. No stroke is drawn now at any width
  looked at (1280, 1024, 820, 390, 360, 320): the pairs are told by
  their two colors (`kierkegaard-greater-1-paradox-1280.png`,
  `-820.png`, `-390.png`). Mended by the seventh mending.
- F8, the small remarks and notes beside a passage: larger and darker
  at 1280 since the sixth mending
  (`kierkegaard-weaning-1-turn-1280.png`,
  `kierkegaard-greater-2-sources-1280.png`).
- The four tabs of `weaning` at 320 keep to one row
  (`kierkegaard-weaning-0-refrain-320.png`); those of `greater` do not
  yet (K5).
- A line now turns after a dash that joins two words: at 360 the
  passage of `window` is set without a hole
  (`kierkegaard-window-0-yet-360.png`).
- A word marked `*so*` in a note or a remark stands upright in the
  italic (`kierkegaard-window-1-words-390.png`,
  `kierkegaard-weaning-1-turn-390.png`).
- The three titles in "More from Auden" are in italics (section 4).

### 5d. What belongs to the thing itself

F7. Every plate is long on a phone, and KIT-CHANGES says that is not
to be changed. So that it is not lost, the heights in the last
pictures, at 390 and at 320: `weaning` Refrain 1,753 and 2,076 px,
Turn 1,778 and 2,096, Tellings 1,570 and 1,934, Words 1,794 and 2,191;
`greater` Build 1,295 and 1,658, Paradox 1,377 and 1,740, Sources
1,523 and 1,981, Speech 850 and 985; `window` Yet 1,393 and 1,673,
Words 1,613 and 1,951, Day 1,259 and 1,400. Of my three, Speech is
whole on one screen of a phone with the head of its caption; Tellings
and Day are lists and are read down, a telling or a station at a time,
each with its own heads.

## 6. The last pictures

Taken on 3 October 2026 between 11:11:36 and 11:17:28 UTC (`date -u`
at the start and at the end of the two runs below). They are later
than everything that could change them: the kit's last change is of
11:05:49 UTC (`plate.js` and `atlas.css`, the mend of 11:06 UTC that
the lead announced; its README is of 11:08:08), the reading's of
10:13:44 UTC, the script's of 10:28:21 UTC. Checked once more at 11:30
UTC: none of these had changed, a fresh build was the same as the copy
photographed, and the checker, which had itself been changed at 11:16
UTC, still said "no problems", "no warnings". At 11:58 UTC, just
before handing in, nothing in the kit, the stylesheet, the page's
scripts, the build or the reading was newer than the pictures, and a
fresh build was again the same as the copy photographed.

Four sets came before them. Those of 09:28, 09:43 and 10:06 UTC were
replaced as the kit and the reading moved. The fourth, of 10:40 to
10:46 UTC, was taken after the seventh mending and looked through
picture by picture. The lead then said that pictures of 10:40 to 11:06
UTC might be wrong where a dash stands in a marked run, and all were
taken again. The new set was compared with the fourth, picture by
picture: 92 of the 93 are the same pixel for pixel, and the last
(`kierkegaard-weaning-3-words-1280.png`) differs in two pixels at the
end of a gloss. So what was seen in the fourth set holds for this one.
The new set itself was then opened as well: every tab at 1280, 390,
360 and 320, the drawings at the four middle widths, the four pictures
of the proposals and the slices of the page.

Run one, 11:11:36 to 11:14:37 UTC:

```
node build/pieces.mjs kierkegaard
node build/tools/check-reading.mjs kierkegaard
    no problems
    no warnings
    the printed notes are fit to print
node --check site/js/pieces/kierkegaard.js
node build/tools/shoot.mjs kierkegaard \
  --out remake/works/kierkegaard/shots --page --widths 1280,390,360,320
```

The picture tool printed 45 lines: the 44 pictures of the tabs, and
last of all

```
nothing reported; now look at the pictures
```

Run two, 11:14:49 to 11:17:28 UTC: the same tool with `--plate` and
`--lens` for the three drawings at 1024, 820, 600 and 480 and for
Paradox at 1024 and 820. Each of the four calls ended on the same
line, "nothing reported; now look at the pictures". Then the four
pictures of the proposals, made by a script of my own outside the
project that serves the site and puts the proposed key into the built
copy as it is sent to the browser. Nothing on disk is changed by it.
At the end the piece was built once more and compared with the copy
the pictures were taken from: the same.

What is in `shots/` (93 pictures, and the 34 of the first look in
`shots/first/`):

- `kierkegaard-<plate>-<n>-<tab>-<width>.png`: the eleven tabs at
  1280, 390, 360 and 320 (44); the three drawings also at 1024, 820,
  600 and 480 (12); Paradox also at 1024 and 820 (2).
- `kierkegaard-page-<width>-<n>.png`: the whole page in slices at
  1280 (6), 390 (8), 360 (8) and 320 (9).
- `proposed-speech-749-1280.png`, `-390.png`,
  `proposed-tellings-6-1280.png`, `-390.png`: section 3.

Also tried in a browser on the kit as it stood after 11:06 UTC, at
1280 and at 390: a click on a telling's name, on a paragraph of the
speech and on a station of the day opens its place in the reader
(`#/read/kierkegaard/p2:8`, `p3:1`, `p4:21`); with a key taken out of
its facts in the air each drawing gives way to the kit's plain table,
and the console says which fact was missing; with the two proposed
keys put in, both drawings draw.

In this folder beside the pictures: `count-speech.mjs` and
`count-tellings.mjs`, the two counts of section 3. They read the
reading and the hosted text, print numbers and write nothing.

Nothing was refused by the permission system. Twice, at about 10:19
and 11:31 UTC, a command was not run because the session's safety
check timed out, with the advice to wait and try again; each time the
same command ran when tried again a little later.
