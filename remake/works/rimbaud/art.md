# rimbaud: the artist's notes

Written 3 October, 06:55 to 08:30 UTC. Nothing of the work is typed out
in this file: words are pointed at by row and word number, as the
checker's proof prints them. Pictures are in `shots/`; the ones in
`shots/before/` show a tab as it stood before I changed anything, or
(the two named `no-join`) as it stands without my change.

## 1. What was looked at

All twelve tabs at 1280 px and at 390 px, and the whole page in slices:
first at 06:57 UTC (after the second mending of the kit), and again at
07:42, 07:58, 08:06, 08:10, 08:14, 08:19 and 08:28 UTC (after the
third mending, and after the kit files changed again at 07:52, 08:02,
08:08, 08:12, 08:15 and 08:25 while I worked). Each of the last four
runs was compared dot for dot with the one before, and every picture
that had changed was looked at again: at 08:19 that was all of
"hallucination" and "adieu" and the phone pictures of "stanza",
because the kit had come to keep a short marked run of words on one
line (K7); at 08:28 nothing had changed. The phone
pictures are tall, so each was cut into slices and read slice by slice.
The drawing was also looked at in windows of 360 and 320 px (304 and
264 px of drawing) and of 600, 820 and 1000 px, with the pointer on a
mark, with a finger on a mark, with "The figures" open, and while it
draws itself in. Every fault below was looked for again in the
pictures of 08:19, which are those of 08:28.

## 2. The drawing: plate "stanza", tab 3, "Chapter"

`site/js/pieces/rimbaud.js`, key `'stanza:shape'`. No stylesheet.
Pictures: `shots/rimbaud-stanza-3-chapter-1280.png` and `-390.png`;
the plain table it replaces is in `shots/before/`.

**What it shows.** The chapter in the order it is printed, a row to
each run of prose with the poem or poems that follow it: six rows. In
each row the prose stands left of a column and the poems right of it,
and in the column stands what the prose ends on, as a sign: a full
stop, a colon, an exclamation mark. A paragraph is a box in outline, a
stanza a solid box, and every box is as long as its words, on one
scale. The poems carry their numbers, 1 to 7. Over the two sides stand
the totals: 663 words of prose in 23 paragraphs, 518 words of verse in
7 poems and 113 lines. What this page prints is red, and named in red
over its row: three paragraphs of the second run are "the first
passage"; the last paragraph of the fourth run and the first stanza of
poem 6 are "this passage".

**Why that form.** The lens asks how the seven poems stand in the
prose, and the caption's one claim about the build is that three times
the prose stops on a colon and a poem follows. With the prose set
flush right against the place where it stops, the six stops stand under
each other and can be counted: three colons, each with one poem after
it; a full stop and an exclamation mark, each with two; a full stop
with nothing. A single band of thirteen parts was weighed first: at
264 px a paragraph of seven words would be under 2 px, and the stops
would have nowhere to stand. Rows keep one honest scale (about 0.55 px
a word at 264 px, 1.3 at 607) and still leave room to label. The red
boxes of this plate meet at the column: sentence, colon, stanza, which
is what the plate's other three tabs show.

**Every number is read from `facts` when the page runs.** The script
checks them against each other first (the words of the paragraphs or
stanzas of a part add up to its words; the parts add up to the totals;
23 paragraphs, 7 poems, 113 lines) and throws if they do not, so that
the kit shows the plain table. I tried it with one figure made wrong
on its way to the page: the table came up. Which boxes are red is
worked out from where each part begins (`read`) and from the rows of
the plates of this page, not typed.

**Numbers that were missing, counted by script.** The facts gave the
words of each part but not of each paragraph and stanza. Command:

    node remake/works/rimbaud/chapter-count.mjs

It reads the hosted French (`site/data/texts/rimbaud-fr/s5.json`) with
the site's own word-splitter and prints numbers only. Result, part by
part in the order of the chapter (prose in words to a paragraph, a
poem in words to a stanza):

    prose   7, 24, 40, 34, 48, 17        = 170
    poem 1  27, 31, 32, 8                =  98
    poem 2  19, 16, 18, 21, 23           =  97
    prose   12, 49, 9, 36, 12            = 118
    poem 3  9, 21, 9, 18, 9              =  66
    prose   30, 44, 18                   =  92
    poem 4  24, 15, 20                   =  59
    poem 5  21, 18, 21                   =  60
    prose   22, 11                       =  33
    poem 6  11, 15, 13, 11, 11, 10       =  71
    prose   38, 46, 22, 53, 61, 21       = 241
    poem 7  9, 9, 10, 11, 11, 4, 9, 4    =  67
    prose   9                            =   9

Every sum is the figure the facts already held, and the script's last
line is "every part agrees with the facts". The lists are in the facts
under two new keys, `"words in each paragraph"` and `"words in each
stanza"`, one in each of the thirteen parts; no key that was there is
touched. The script also prints which paragraphs and stanzas the two
plates show (second run of prose: its paragraphs 2, 3, 4; fourth run:
its paragraph 2; poem 6: its stanza 1), which is what the drawing
works out for itself and colors red.

**The pointer and the finger.** On a part, the line under the key
gives its figures and, where the facts have it, what the prose says:
for the first run, "6 paragraphs, 170 words (the story of one of his
follies; at first it was a study), ending on a full stop." A click
goes to the part's place in the French printed here; a finger only
asks. The longest line is one line of type at 607 px and two at
334 px. Nothing needs the pointer.

**The key and the figures.** The key has three entries: a box in
outline, the signs, a solid box. The kit's `d.keys` has no sample for
a sign, so the script changes the sample of that one entry for the
signs themselves, in the face and size the drawing uses for them
(tempest.js cuts its samples to its marks in the same way). It still
does so after the kit's key was rebuilt while I worked; if it ever
cannot, a dot stands there. "The figures" lists the thirteen parts with their
words and the words in each paragraph or stanza, then the four totals;
a wide drawing adds two columns, how many paragraphs or lines and what
the prose ends on. A resize does not shut it.

**Left out on purpose.** Two of the facts' `here` lines say "above"
(section 5), so the drawing names the red boxes with the plates' own
names and does not print those lines. The return of the stanza as the
last stanza of poem 6 is not red: the plate prints the first.

## 3. Faults that are the kit's, worst first

K1 is mended on this page by a `join` (section 4); the rest stand in
the pictures of 08:28 UTC. The lead was mending the kit while I worked,
and two things I had listed were mended by then: they are at the end
of K8.

**K1. A figure drawn `align` in prose: the strokes cross each other
and the lines.** Plate "adieu", tab 0 "Figure", both widths.
`shots/before/rimbaud-adieu-0-figure-1280.png`: in the Dial's English
(row p:3.0) strokes of four colors fill the gap between its first two
lines and cross each other; a green one runs almost the whole width,
from word 44 at the end of the first line back to word 46 near the
start of the second.
`shots/before/rimbaud-adieu-0-figure-390.png`: in the French (row 3.0)
the strokes from words 31, 32 and 36-37 on the first line to words 42,
43 and 39-40 on the second cross in an X between the two lines; in the
English a long red arc runs under the two ochre ones on the first
line, and between the second and third lines a green stroke and a blue
one cross under the green arcs.
Cause (lens-figure.js, the `align` branch): where the parts of a tag do
not stand at the head or the end of their rows, each part is joined to
the next of its tag. In prose the next part is often past a turn, far
to the left, so the stroke is a long slant; and which parts get a
stroke changes with the width. In prose a color to each tag says all
that the strokes say. The kit might draw no stroke for `align` in a
row of prose, or only between parts on one line of type.
Tried again at 08:20 UTC, after the kit's changes of 08:12
(lens-figure.js) and 08:15 (K7), with the `join` taken out on its way
to the page
(`shots/before/rimbaud-adieu-0-figure-1280-no-join-0820.png` and
`-390-no-join-0820.png`): the French is better, the English is not. At
1280 the strokes still fill the gap between the first two lines of the
English, cross each other and run through the words of the second. At
390 a red arc runs the width of the first line of the English and down
into the type of the second, and a blue stroke and a green one cross
between the second and third. In the French a green stroke still runs
back across half the measure, from words 45-46 to words 48-49. So the
`join` stays.

**K2. The key of a sentence tab on a passage with a second version
runs the two versions' labels together, the second version first.**
Plate "hallucination", tab 0 "Tense"; plate "adieu", tabs 1 "Time" and
2 "Sentence"; both widths (`shots/rimbaud-adieu-1-time-1280.png`,
beside the caption; `-390.png`, at the foot). The labels of one color
are joined by commas, though the labels hold commas and colons
themselves, and the Dial's label comes before the French one: the
third row under "Time" reads "the Dial: future, future", the first
runs three labels into one line. Cause: plate.js registers the pair's
row before the row it stands under (`rows.set(p.id, p)` comes before
`rows.set(row.id, row)`), so "the order they stand in" puts the second
version first in lens-sentence.js. The same order shows in the key of
the figure on "adieu", tab 0, whose third row gives the English label
before the French. The first passage's label should come first, and
the second version's after a semicolon or on a line of its own.

**K3. The key of a list repeats each number.** Plate "hallucination",
tab 1 "List", both widths (`shots/rimbaud-hallucination-1-list-1280.png`).
Six rows of one color read "1 1", "2 2" and so on to "6 6": the reading
labels each item with its number, and the kit, which numbers a list
itself, prints its number and then the label. The key has nine rows and
six say nothing. The kit might drop a label that is only the item's
number and give the six one row; or the labels might come out of the
reading (section 5).

**K4. A sentence of prose over a stanza is set in the stanza's type
and given the room of marked verse.** Plate "stanza", tabs 0 "Count"
and 1 "Rhyme", where row 37.0 carries no mark
(`shots/rimbaud-stanza-0-count-390.png`, `-1-rhyme-390.png`): on a
phone the sentence is three lines of the large type 81 px apart, 243 px
of the first screen before the first line of verse (until 08:15 it was
four lines and 324 px: `shots/before/rimbaud-stanza-0-count-390.png`).
At 1280 it is two lines 90 px apart. On tab 2 "Frame" the row carries
glosses and needs the room. A row of prose with no mark on the tab
could keep the leading of prose.

**K5. A gloss that goes a line lower touches the next line of type.**
Plate "hallucination", tab 3 "Innocence", 390
(`shots/rimbaud-hallucination-3-innocence-390.png`). Three words on one
line carry glosses (row 18.0 words 22.1, 23 and 25). The gloss of word
23 runs on under word 25, so the gloss of word 25 goes a line lower:
its box ends 4 px inside the box of the next line of type, and its
descenders meet the tall letters of words 30 and 31, over which it
stands. The kit does give room for a gloss that goes lower, but under
the last line of the paragraph (row 18.0 has 14 px more at its foot),
not under the line the gloss hangs from; in prose that room is in the
wrong place.

**K6. Glosses side by side read as one line.** They stand 10 px
apart, less than the space of two words. Plate "hallucination", tab 3
"Innocence", 1280 (`shots/rimbaud-hallucination-3-innocence-1280.png`):
the glosses of row 18.0 words 22.1, 23 and 25, three in a row. Tab 2
"Judgment", both widths (`shots/rimbaud-hallucination-2-judgment-1280.png`,
`-390.png`): the glosses of row 18.0 words 4 and 6, and at 1280 those
of row 17.0 words 3 and 4. A point between two glosses, or a wider
gap, would part them.

**K7. Prose turns early to keep a marked run of words whole, and a
short line inside a paragraph reads as a break.** New with the kit of
08:15 (plate.js: a short run that any tab marks is "not parted where a
line turns"). Plate "adieu", every tab, 390
(`shots/rimbaud-adieu-3-english-390.png`): in row 3.0 the second line
stops on the full stop of word 41 at about three fifths of the
measure, and the third begins flush left with a capital, as a new
paragraph might; in row 4.0 the second line stops after word 12 at
three fifths, and the paragraph is five ragged lines where it was
four. Plate "hallucination", 1280: the first line of row 16.0 stops at
its colon (word 4), at two thirds of the measure. The runs are held on
every tab, so a line is short on tabs that mark nothing there. The kit
might hold a run only where the line before it stays nearly full.

**K8. Smaller things.**
- Plate "stanza", tab 2 "Frame", 390: the caption and the notes speak
  of the Dial's wording four times, and the Dial's sentence stands
  under them, at the foot of the plate. On a narrow plate a version
  that the notes name might stay over the caption.
- Plate "hallucination", tab 3 "Innocence", 1280: the glosses under
  the last line of the French paragraph (row 18.0 words 28 and 30)
  stand 32 px over the first line of the English, in the same italic
  and the same color, a little smaller.
- Plate "stanza", 1280: its heading and place fill the first row of
  the head, so its four tabs stand on a second row at the left, where
  the other two plates have theirs at the right of the heading. I left
  the heading as it is written: it reads well.
- In a drawing, words set inside a link (an svg `a`) are underlined by
  the page's rule for links. My drawing keeps its words outside its
  links; a rule for `.dg a` would settle it for every piece.
- "The figures" prints a number as it stands: the last row here reads
  1188, where a drawing's `num` would write 1,188. If the script handed
  over the number as words, its column would no longer be set to the
  right (lens-shape.js, `table`); the table could write its numbers
  with `num` itself.
- The plates are long on a phone: 1,744 to 2,024 px ("hallucination"),
  1,286 to 1,618 ("stanza", and 902 under "Chapter"), 1,833 to 2,181
  ("adieu"). KIT-CHANGES.md says this belongs to the thing.
- Seen mended between 07:42 and 07:58. Plate "adieu", tab 3 "English",
  1280: seven pairs carried their number at both ends and the eighth
  (row 6.0 words 9-10, row p:6.0 words 11-14) only a stroke, with no 8
  on the passage; now the 8 stands under the French and the stroke
  runs on to the English (`shots/rimbaud-adieu-3-english-1280.png`).
  Plate "stanza", tab 0 "Count", 390: the rule under "Again" ran the
  full width, 27 px over the next hairline; now it is as long as its
  words, which are "Draw it again".

## 4. What was changed in reading.json

Two things, by small exact edits. The checker after each:
"no problems / no warnings / the printed notes are fit to print".

1. Plate "stanza", the shape lens: thirteen new keys in `facts`, one in
   each part: `"words in each paragraph"` in the six runs of prose and
   `"words in each stanza"` in the seven poems (section 2). Nothing
   that was there is changed.
2. Plate "adieu", the figure lens: `"join": "none"`. The figure has
   five tags and twenty-eight parts in two versions of one paragraph of
   prose, and drawn `align` its strokes crossed (K1). The caption says
   which words repeat; a color to each tag shows that at any width.
   Before and after: `shots/before/rimbaud-adieu-0-figure-1280.png`
   and `shots/rimbaud-adieu-0-figure-1280.png`, and the same at 390.
   If the kit comes to draw `align` well in prose, the `join` can come
   out.

No heading, label, `beside` or `turn` is changed. The stanza's four
short lines stay whole on a phone, and the rest is prose.

## 5. Anything in the reading that looks wrong

Nothing in a caption or a mark. Three things for the poet or the
examiner, none of them mine to change:

- Shape lens, `facts`: two `here` lines say "above" ("its last sentence
  stands above the stanza", "the stanza above is its first and its
  last"). Under "Chapter" the drawing stands where the passage stood
  and nothing is above it, so the drawing does not print them; they
  would show only if the plain table came back. "Of this plate" would
  be true on every tab.
- Plate "hallucination", the figure drawn as a list: its six items are
  labelled "1" to "6", which the kit prints after the number it gives
  each item itself (K3). The labels could come out, or say what each
  item is.
- Shape lens, poem 6: by the rule the facts state (a word is whatever
  stands between two spaces) the stanza has 11 words where it first
  stands and 10 where it comes back, because the second time a dash
  joins two words of its second line. The figures are right by the
  rule and the drawing follows them; I note it in case a reader asks
  why the same stanza has two lengths under "The figures".

## 6. The picture tool's last line

    node build/pieces.mjs rimbaud
    node build/tools/shoot.mjs rimbaud --out remake/works/rimbaud/shots --page

run again at 08:28 UTC, after my last change and two minutes after
the kit files last changed (08:25). Last line:

    nothing reported; now look at the pictures
