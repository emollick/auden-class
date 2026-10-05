# faust: the artist's record

Begun 2026-10-03, 08:18 UTC. This file is added to as the work goes on.

The piece has three plates (heaven, name, wheel), each a German passage
with Bayard Taylor's English set under each line, and two shape lenses:
the tab Names of the plate `name` and the tab Measures of the plate
`wheel`. Those two are drawn in `site/js/pieces/faust.js`. Every other
tab is the kit's; for those this file reports what is wrong.

`remake/works/faust/reading.json` was not edited. What I would set in it
stands under "Proposed for the reading".

Words of the passages are pointed at by row and word number. No line is
written out here.

## First look (08:19 UTC, before any drawing was made)

`node build/pieces.mjs faust`, then
`node build/tools/shoot.mjs faust --out remake/works/faust/shots --page`.
The tool's last line: `1 thing to look at` (the Rhyme tab of `heaven` at
390 px: `path.arc draw "" stands outside the plate`).

The kit was mended again and again while I worked (the fourth mending
to 08:25, the fifth to 08:55, the sixth to 09:52, the seventh to 10:40
and a fault of the seventh at 11:06 UTC). I took what I meant to be the
final pictures nine times: four sets were overtaken by the kit and four
by small last changes of my own to the script. Every fault below
was looked for again in the last set and measured again after it; what
a later mending mended is struck out and said so. The times stand at
the end, under "Final pictures".

## What I drew

### Names (plate `name`, tab 4): a ledger with a lane for each mouth

The caption says that the name printed over his speeches is spoken by
nobody, and that what is spoken is a string of other names, by several
mouths, most of them his own. So the drawing is a ledger down the play:
one row for each thing he is called or comes as, under the three
headings the facts give (`kind`), each heading's rows in the order of
their lines. At the left stands a lane for each value of `who says it`,
in the order in which they first speak, with its head set as a step of a
stair so that six heads fit in the width of a phone. A row has a dot in
the lane of whoever says it. The row of the name over his speeches has
no line and so no dot: every lane passes it empty. The lane of
"he himself" carries the most dots, which is the caption's point.

Red is for the rows said in the lines of this passage. The drawing finds
them itself: a row is red when its `read` names the part of the book the
plate's English is taken from and one of the blocks its rows come from.

Wide (460 px and more) the line number has a column of its own between
lanes and words; narrow, it begins the English. Each number opens its
place in the book printed here. Pointing at a lane (or touching it)
keeps its dots dark and says how many rows under each heading are its.

One thing it does not do well: on a phone the drawing is taller than
the screen (1079 px at 390), so the heads of the lanes are out of sight
by the time the lower rows are read, and a reader must touch a lane to
be told whose it is. I kept the lanes because the other ways cost more:
a name on every row says the same six names sixteen times and takes the
width the German needs, and heads repeated under each heading would
make three small charts of what is one count.

Keys of `facts` it reads: `kind`, `German`, `in English`, `who says it`,
`line`, `read`. The words over the lanes and over the columns are the
names of those keys; the headings are the values of `kind`. If a row
holds one number under a key of its own, the drawing sets that many
strokes under the row with the number and the key's name (see
"Proposed for the reading"). The words that are mine: the two lines of
the key under the drawing ("in the lines of this passage", "elsewhere
in the play") and the "of" in what a lane says ("a name, 5 of 10").

Why not a table: sixteen rows of five cells hide the one thing the
caption turns on, which is who does the naming. Why not one lane chart
on a true scale of line numbers: five of the rows fall within sixteen
lines of each other and would lie on top of one another.

### Measures (plate `wheel`, tab 4): one line of each measure, in the Beat tab's marks

The caption says the verse keeps changing: five beats, four, lines of
four, five and six, six with a break, three, five, two, and prose. So
each of the nine rows carries a specimen of one line of its measure,
drawn with the marks the Beat tab uses on every plate of this piece: a
rule as long as the line's beats, a stroke down for each beat, the
number at its end, and the Beat tab's pause mark where the line has a
break. All specimens begin at one left edge and are drawn to one scale
from zero, so the column reads as a stanza of lines of changing length.
Madrigal verse has three rules (four, five and six beats). Prose has
none: there are no beats to draw, and the empty place says so. Rows
stand in the order of their lines.

Red is for the measure of this passage: the row whose `read` names the
part of the book the plate's English is taken from (the two-beat line).

Wide (460 px and more) the place has a column at the left: the scene,
which opens its place in the book printed here, its lines, and who
speaks. Narrow, those three stand in one line under the plain words,
and a line turns only between two of them. A row with one of the three
empty leaves that place empty, and a row with no lines stands last
(tried in the built copy).

One thing it does not do well: the column takes its width from the
scenes and the lines, so that one long `who speaks` cannot push the
specimens to the right. Two rows name two speakers joined by "and";
the second name alone nearly fills the column, so from 540 px up that
cell turns after the "and" and ends on one word.

Keys of `facts` it reads: `measure`, `in plain words`, `scene`, `lines`,
`who speaks`, `read`; and `beats` and `break after` where a row has
them. Without `beats` it reads the number written in words before
"beat" in `in plain words`, or failing that in `measure` (that is where
it finds the two of the two-beat line); without `break after` it takes
the words "break in the middle" of a line of an even number of beats to
mean a pause after half of them. The heads of the columns are the names
of the keys. The words that are mine: "beats in a line" over the
specimens, and the two lines of the key ("the measure of this
passage", "one line of the measure, a stroke down for each beat").

Both drawings throw `facts: no ...` when a key they need is missing from
every row, and the kit then shows the plain table. I tried this in the
built copy: it does.

Both read a title marked inside the facts' own words, `*so*` or
`<i>so</i>`, and set it upright in the grey italic of its note, as the
kit does in a remark. I tried both marks in the built copy, in `who
speaks` of Measures and `in English` of Names, at 1280 and 390 px: the
two give the same picture, pixel for pixel. Only what the drawing
itself adds (a place that opens, a run of line numbers) is set in ink.

Both were looked at from 300 to 1600 px wide (the drawing itself from
244 to 659 px) with a script that lists words outside the drawing and
labels whose boxes touch: none at any width.

## Proposed for the reading

I did not edit `reading.json`. Each of these was tried in the built copy
`site/data/pieces/faust.json`, photographed, and the piece built again
from the reading (`node build/pieces.mjs faust`), so nothing of them is
left in the built copy (I compared it, byte for byte, with the copy
built before the trial). The pictures are in `shots/` under names that
begin `proposed-`; the time they were taken stands under "Final
pictures".

The build sends every key of `facts` to the site except the ones it
takes for working notes (`counted`, `source`, `note`, `from`, `where`,
`at`, `key` and a few more: `workingKey` in `build/lib/printed.mjs`). I
asked it: `speeches under it`, `beats` and `break after` are all sent.

### 1. Plate `name`, lens 4 (Names), `facts`, first row: the number of speeches

Add one key to the row whose `kind` is "the name over his speeches":

    "speeches under it": 255

Picture: `shots/proposed-names-count-1280.png`, `-390.png`, `-320.png`.
The caption's first fact is that the name stands over more than 250
speeches and nobody speaks it. As the facts stand the drawing can show
only the second half: a row with no dot. With the number it sets 255
strokes in tens under the name, the number and the key's name beside
them, and every lane still passes the row empty: printed 255 times,
said by no one. The drawing already reads such a key (any one number on
a row, under any key name; the key's name is the label).

The count, in the English printed here (run 09:10 UTC):

    node -e 'const fs=require("fs"),d="site/data/texts/faust/";let n=0,m=0;
    for(const f of fs.readdirSync(d)){if(f==="index.json")continue;
    for(const b of JSON.parse(fs.readFileSync(d+f)).blocks){if(b.k!=="s")continue;
    if(/^MEPHISTOPHELES\.?$/.test(b.text.trim()))n++;else if(/MEPHISTO/.test(b.text))m++}}
    console.log(n,m)'

It prints `255 1`: 255 speech headings that are the name alone, and one
heading he shares with two other speakers. The same search over the
lines themselves finds the full name in no line of verse or prose, and
the short form once (faust/s21, block 173), which is the row the facts
already have. The row's working note `counted` (which stays in the
reading) gives 253 for the German text and 255 for the English printed
here. I propose 255 because it is the book a reader can open from this
page; if 253 is preferred, the drawing draws 253. The label is the
key's own name, so whoever sets the key chooses the words a reader sees
after the number.

### 2. Plate `wheel`, lens 4 (Measures), `facts`: the beats as numbers

Add to each row that is in verse a key `beats`, and to the alexandrine
`break after`:

    ottava rima              "beats": 5
    the archangels' stanza   "beats": 4
    madrigal verse           "beats": [4, 5, 6]
    Knittelvers              "beats": 4
    the alexandrine          "beats": 6, "break after": 3
    a song stanza            "beats": 3
    blank verse              "beats": 5
    the two-beat line        "beats": 2
    prose                    (no key)

Picture: `shots/proposed-measures-facts-1280.png`, `-390.png`,
`-320.png`. The specimens are the same as in the final pictures, and
that is the point: today the drawing has to find each number in the
English of `in plain words` ("five-beat", "four, five and six beats"),
and the two of the two-beat line in the name of the measure. If the
examiner rewords a row the specimen may vanish. With the keys it cannot.
(I checked by rewording every row in the built copy so that no number
stood before "beat": the keys alone drew the same picture.)

### 3. The same lens, the row of the song stanza: mark the title

    "who speaks": "Gretchen, singing <i>The King of Thule</i>"

Picture: the sixth row of `shots/proposed-measures-facts-1280.png` and
of `-390.png`. The drawing sets these words through the kit's `note`,
which sets a marked title upright among the italics. The captions of
this reading mark their titles with `<i>`, so I write it so here;
asterisks give the same picture (the trial for the pictures used
them). One caution: the kit's plain table shows the marks as they are
typed. The seventh mending says that table is seen only if a script
fails and is left plain, so the marks would be seen in that one case
and no other.

### 4. The same lens, `what`: keep "Part I" together

    "what": "nine of the measures of Part I, each with a place to read it"

The space between "Part" and "I" is a no-break space (U+00A0; in JSON
it may be typed `Part\u00a0I`). Picture: the heading of
`shots/proposed-measures-facts-390.png` against the heading of
`shots/faust-wheel-3-measures-390.png`. The kit balances this heading
over two lines, and at every width from 300 to 430 px it parts "Part"
from "I". This is the kit's to mend (fault 7 below); the no-break
space is what the reading can do meanwhile. The heading of Names holds
"Part I" too and does not part it at any width from 300 to 1600 px,
but only by the luck of where its lines fall.

### 5. Plate `heaven`: `"turn": { "1.6": 4 }`

Picture: `shots/proposed-turn-heaven-beat-390-320.png` (four panels,
left to right: 390 px as it is, 390 as proposed, 320 as it is, 320 as
proposed). Row 1.6 has six beats and a pause after its fifth word,
which is what the fourth Beat remark says. With no `turn`, and no stop
inside the line, the kit turns it after the sixth word at every width
from 430 to 320 px: the pause mark then stands inside the first part
with one more word after it. Turned after the fifth word (word 4 as
the checker's proof numbers them, from 0), the first part ends on the
third beat with the pause at its end, and the second part holds the
other three. Row 1.7, the other six-beat line, already turns at its
pause at 360, 340 and 320 px and fits whole from 375 px up. This is the
one proposal for a turn that the seventh mending leaves standing.

### 6. Withdrawn: plate `name`, `"turn": { "1.1": 4 }`

I had proposed this for the same case on plate `name`: row 1.1 has six
beats and its pause after the fifth word (the third Beat remark), and
until the seventh mending the kit turned it after the sixth, so the
conjunction hung at the end of the first part, after the pause mark.
That mending keeps a short word that leads on with the word it leads
to, and the kit now turns this row after its fifth word by itself, at
375, 360,
340 and 320 px (it fits whole from 390 up). Each part is one half of
the line with three beats, and the pause mark ends the first
(`shots/faust-name-0-beat-360.png`, `-320.png`). On the Antithesis tab
the strokes that join the matching words of the two halves now lean,
all three alike, and none crosses
(`shots/faust-name-1-antithesis-360.png`). Nothing is left to set, and
the trial pictures for it are taken out of `shots/`.

### Not proposed

No `heading`, `label`, `beside` or `join` is proposed. The headings and
tab labels read and wrap well at every width I looked at. `"beside":
true` would bring back the speakers' names (see the first fault below)
but would take the English from under its lines, which three tabs of
each plate depend on. The strokes of the three figure tabs join what
their captions say belongs together.

No `speakers` gloss is proposed either (the sixth mending allows one).
No plate of this piece shows a speaker's name at all (fault 1), so there
is no name on the page to gloss. If the kit comes to show the speakers
of a plate set line under line, one name will need it: the English
prints the archangels' last four lines under the name `THE THREE`, and
plate `heaven` should then have
`"speakers": { "THE THREE": "the three archangels" }`. I could not try
it: today it would change nothing a reader sees.

## Faults seen, worst first

Every one of these is the kit's to mend (or the hosted text's): none is
in the two drawings, and none could be mended from `faust.js`. Each is
seen in the final pictures and was measured after them with a script in
a browser at the width named (the measures are CSS px). Rows are named
as the reading names them; words are counted from 1. What the seventh
mending mended is not in this list any more; the end of the list says
what was struck.

### 1. No plate says who speaks, and `heaven` does not show its gap

`heaven` and `name`, every tab that shows the passage, every width
(`shots/faust-heaven-0-beat-1280.png`, `shots/faust-name-0-beat-1280.png`
and the rest). On `wheel` one voice speaks and the heading names her.
I asked the page itself after the final pictures: on no tab of either
plate, at 1280 or 390 px, does a speaker's name stand in the passage.

- `heaven`: rows 0.0 to 0.3 are the three archangels and rows 1.0 to 1.7
  Mephistopheles. No name stands over either. Between row 0.3 and row
  1.0 four lines are left out (the heading says lines 267 to 270 and 275
  to 282); the plate shows a stanza's space there (11 px more than
  between two lines at 1280 px, 9 px at 390) and no three points, and
  the row of letters in the Rhyme key does not open there either.
- `name`: four speeches by two speakers in turn (rows 0.0 to 0.1, then
  1.0 to 1.1, then 2.0, then 3.0 to 3.6) with no name anywhere. Rows
  0.1 and
  1.0 are the two halves of one six-beat line shared between the two
  speakers, which is the point of the second Beat remark; they stand as
  two lines flush left with a stanza's space between them.
- Only the numbered Beat remarks point at the line where the speaker
  changes. On the five other tabs of these two plates that show the
  passage nothing on the passage does; their captions name the speakers
  in passing.

Why: the built plate knows all of it, but on the English rows (`who` on
p:9.0, p:11.4, p:33.3, p:35.0, p:37.0 and p:39.0; `gapBefore` on
p:11.4). `plate.js` shows a second passage's `who`, `dir` and gap only
when it stands as a block of its own; set line under line they are
dropped. The German cuts (`o-faust/himmel`, `studierzimmer`, `gretchen`)
hold no speakers and no mark of the gap. Either mend would do: the kit
shows the pair's speaker and gap in the line-under-line layout too, or
the German cuts are given their speakers and the gap.

### 2. No plate says whose the English is

All three plates, every tab, every width. Each plate has `label`
"Goethe, 1808" and its pair has `label` "Bayard Taylor, 1870". The kit
shows the two labels only when the passages stand as two blocks; line
under line it shows neither (asked of the page after the final
pictures: neither label is on any tab). On the plates the translator
is named only in the captions of the two English tabs (`heaven` tab 4,
`wheel` tab 3); on plate `name` no tab names him at all. The Sources
at the foot of the page do.

### 3. `heaven`, Rhyme, phone widths: strokes outside the plate

`shots/faust-heaven-1-rhyme-390.png`, `-360.png`, `-320.png`. These are
the picture tool's complaints: one at 390 px, two at 360, one at 320.
Measured after the final pictures:

- 390 px: the stroke joining row 0.3 to row 1.6 stands 3 px outside the
  plate's right edge.
- 360 px: the same stroke, 9 px outside; the stroke joining rows 1.1
  and 1.3, 3 px outside.
- 340 px: row 0.3 to row 1.6, 7 px outside. 320 px: 2 px. 300 px:
  12 px, and rows 1.1 and 1.3, 2 px.
- None at 375, 414 or 430 px.

The plate pictures are cut at the plate's edge, so in them the strokes
run off the paper. On the page they are drawn whole, on the page's
ground between the plate and the edge of the window: beside the plate,
not on it. Three strokes stand one outside the other at that place
(rows 1.0 and 1.2, rows 1.1 and 1.3, and round both the one from row
0.3 to row 1.6), and the room kept at the right is not enough for the
third, nor at 360 px for the second.

### 4. `heaven`, Parody, 350 px and narrower: a stroke through four English lines

`shots/faust-heaven-2-parody-320.png` (rows 1.2 to 1.5). The upright
stroke at the right, which joins the closing words of row 0.3 to those
of row 1.7, runs through the last word of the English under row 1.2
(its word 7), row 1.3 (word 7), row 1.4 (word 9) and row 1.5 (word 8),
from 5 to 14 px into each. So it is at 320, 340 and 350 px; at 340 and
350 it also touches the end of the English under row 1.6 (word 10). At
300 px it runs through two of them (under rows 1.3 and 1.4). At 360 px
it touches the end of the English under row 1.1 (word 9, by 1 px:
`shots/faust-heaven-2-parody-360.png`). At 375 px it stands 8 px clear
of every word, and at 390 px and wider 12 px.

Why: at these widths the German lines turn and are narrow. The stroke
is set clear of the German (it stands at one place, 236 to 241 px from
the plate's left edge, at 300, 320, 340 and 350 px alike), but the
English lines under them run further right and the stroke is not set
clear of those.

This is the only place where a mark of one line touches the words of
another. I tested it with a script that follows every stroke of every
tab along its length and asks whether it enters the letters of a word,
at 300, 320, 340, 360, 375, 390, 414, 430, 600, 768, 1024 and 1280 px:
of the 120 tabs-at-a-width, 116 are clean, and the four are this tab at
300, 320, 340 and 360 px.

### 5. A turned line of English on `heaven` stands as two lines

`heaven`, every tab, 340 px (the English under row 1.1) and 320 px
(under rows 1.1 and 1.6): `shots/faust-heaven-2-parody-320.png`,
`shots/faust-heaven-0-beat-320.png`. The English under these rows
turns, and its second part stands 41 px under its first, which is the
pitch of two lines. On plate `name`, whose English no tab marks, the
two parts of a turned English line stand 18 or 19 px apart and read as
one. On the English tab of `heaven` the room under row 1.1 holds a
pair's number; on Beat, Rhyme and Parody it holds nothing.

The seventh mending mended the like fault in the German: a turned
German line that the showing tab does not mark now keeps its parts
21 px apart (56 before). That makes this one plainer. On Parody at
320 px a row now goes: part, part (21 px lower), English (51), English
(41), next line (62). The German reads as one line and its English as
two.

### 6. The English floats between two lines on every tab but Beat

All three plates, every width. On every tab the English stands 41 to
43 px under the words of its line and 54 to 56 px over the next line
(1280 px); 31 or 32 px and 41 to 43 px at 390, 360 and 320. On Beat the
room over it holds the meter and the stresses. On Rhyme, Parody and
English (`heaven`), Antithesis and Words (`name`), Anaphora and English
(`wheel`) it is empty, and the page reads as upright and italic lines
at an almost even pitch: the English is three quarters as far from its
own line as from the next. Under a turned line it is 50 or 51 px below
the second part and 62 px over the next line
(`shots/faust-name-1-antithesis-390.png`, top).

### 7. The heading of a drawing parts "Part" from "I"

`wheel`, Measures, every width from 300 to 430 px; from 480 px up the
heading is one line (`shots/faust-wheel-3-measures-390.png`,
`-360.png`, `-320.png`). `sheet()` in
`kit/diagram.js`, and the plain table in `kit/lens-shape.js`, set
`lens.what` as plain text, so the no-break space that `tidy()` (in
`site/js/rich.js`) puts after "Part" everywhere else on the page is
missing, and the balanced heading turns between the two. (Proposal 4
above is the reading's way round it.)

### 8. Twelve lines of verse are two screens tall

All three plates, every tab that shows the passage. With the English
under each line and room kept for marks on every tab, the plates stand
1915 px (`heaven`), 1957 px (`name`) and 2076 px (`wheel`) tall at
1280 px, about 160 px to a row; from 1919 px (`name`, Antithesis) to
2300 px (`heaven`, Beat) at 390 px; and up to 2877 px (`heaven`, Beat)
at 320 px, where eight of its twelve lines turn. `wheel` is the
plainest case: its lines are two to four words long and are set large,
so the left half of a wide plate is mostly bare paper, and on a phone
the caption of a tab is nearly three screens under the first line it
speaks of. The seventh mending says a long plate is long on a phone; I
put the numbers here because this piece has three of them. Faults 5
and 6 are part of the same thing: the room kept under each line on
tabs that put nothing in it.

### 9. Small things

- `wheel`, English, pair 4 (the one word of row 1.1 against words 3 and
  4 of the English under row 1.0): at 390 px it is a stroke from the
  English down to the German word, at 1280 px it is a number at each
  end with no stroke. Both can be read; they are not the same picture.
- `name`, Words, every width: under one German line stand two tiers of
  small grey italic English, the glosses of single words and then the
  English line. They are told apart only by size and place.
- `wheel`, Anaphora: the upright stroke in the left margin stands 7 px
  from the lines at every width, and on a phone 5 px from the plate's
  left edge. Clear, but only just.
- `heaven`, Parody, 360 and 320 px: row 1.0 turns and the tab marks two
  words of its second part, so its parts are kept 56 px apart while
  the unmarked turned lines round it stand 21 or 22 px apart. The room
  is under the first part, where nothing is drawn, and the row looks
  looser than its neighbours.
- `wheel`, 320 px: the fourth tab stands alone on a second row. On the
  other two plates the seventh mending brought four tabs into one row.

### Struck or changed after the seventh mending

- Struck: a turned German line's two parts stood 56 px apart on every
  tab, so that the second part read as a line of its own (it was the
  end of fault 6). On tabs that do not mark the line they now stand
  21 px apart.
- Struck: `heaven`, Parody, 390 px and wider, the upright stroke stood
  7 px from the nearest word (it was among the small things). It stands
  12 px clear now.
- Withdrawn: proposal 6. The kit now turns `name` row 1.1 at its pause.
- Changed, and not for the better: fault 4 was at 320 px and narrower;
  it is now at 350 px and narrower, with a touch at 360. Fault 3 at
  360 px was three strokes (14, 8 and 2 px outside) and is two (9 and
  3 px).
- The fault of the seventh mending that was mended at 11:06 UTC (a line
  turning after a dash) did not show on this piece: no German line
  holds a dash; the English under rows 3.4 and 3.5 of `name` does, and
  the pictures taken before and after that mend are the same, byte for
  byte.

## Looked at and found right

- No mark of one line touches the words of another on any Beat tab, at
  any width from 300 to 1280 px, on any of the three plates (by eye at
  1280, 390, 360 and 320, and by the script of fault 4 at twelve
  widths). Where a line turns, each part carries its own marks under
  it. On the other tabs the one stroke that meets words is fault 4.
- A line and its English stand well together on the three Beat tabs:
  the meter and the stresses fill the room between them and tie the
  English to its own line.
- On a phone four of the five lines that have a pause turn at it, with
  the pause mark at the end of the first part: `name` row 0.0 (from
  414 px down), row 1.1 (from 375) and row 3.1 (340 and 320), `heaven`
  row 1.7 (from 360). The fifth is proposal 5.
- A pair whose English end stands under another line carries a number at
  each end and no stroke across a line of words (`heaven` English, pairs
  1 and 5).
- On the Antithesis tab from 375 px down the two halves of row 1.1
  stand one over the other, and three strokes of one slant join each
  word to its match; none crosses another. It is the best picture of
  that figure at any width.
- The headings and tab labels fit. At 320 px `heaven` and `name` keep
  their four tabs in one row. The heading of `heaven` takes two lines
  at 360 and 320 px and that of `wheel` at 320, each turning before a
  short word that leads on, and both read well.
- No caption, numbered remark, word note, key or plate heading ends on
  one word alone, on any of the twelve tabs at 1280, 390, 360 or 320 px
  (asked of the page by a script after the final pictures).

## In the reading (not mine to change)

Seen in the built copy made from the reading for the final pictures.
The reading itself was last changed at 08:17 UTC, before I began.

1. No title is marked as a title outside the captions and the sources.
   I searched the built copy: `where`, `view.says`, `view.source` and
   all seven `auden[].says` and `auden[].source` hold no mark of a
   title, neither `<i>` nor asterisks, though the page reads both in
   every one of them (`para()` in `site/js/rich.js`); the captions of
   this piece mark their titles with `<i>` and its sources with
   asterisks. What a reader sees: in `view.says` the first word after
   "Auden thought" is the title of the work and is set upright like a
   man's name, while the Measures caption has the same title in italics.
   `view.source` and the seven `auden[].source` lines are italic
   throughout, so nothing sets the titles of the books off in them. In
   `where` the title heads the line. In `auden[0].says` the work and a
   book of Bunyan's are unmarked, in `auden[4].says` the play Auden was
   lecturing on, in `auden[5].says` the work with its part and scene.
   (In `auden[6].says` the two names can be read as the heroes.)
   Proposal 3 above is one more.
2. The German cuts give no speakers and no gap (fault 1). If the kit is
   not to be changed, this is the place to mend it.
3. The working note `counted` of the first Names row (in the reading;
   the build keeps it from the site) gives two numbers, 253 for the
   German and 255 for the English printed here, and the caption says
   "more than 250". All three are true. If proposal 1 is taken, the
   number set is one of the two and the note already says which book
   each counts.
4. Nothing else. I did not find a caption that says what its tab does
   not show, and the two drawings draw every row of their facts.

## Final pictures

All times are UTC, 3 October 2026.

- Kit as photographed: its code last changed at 11:05:49 (`plate.js`,
  `atlas.css`: the mend of 11:06), its README at 11:08:08, and
  `KIT-CHANGES.md` (304 lines, ending with that mend) at 11:07:44.
  `reading.json` last changed at 08:17:13.
- Proposal pictures (`shots/proposed-*`, seven files): 12:13:55 to
  12:14:45. The built copy was then written again from the reading and
  is byte for byte the copy built before the trial.
- The piece built afresh: 12:14:45.
- Every tab of every plate and the whole page at 1280 and 390 px:
  12:14:45 to 12:15:25. The tool's last line: `1 thing to look at`
  (`heaven`, Rhyme, 390 px: a stroke outside the plate, fault 3).
- Every tab at 360 and 320 px: 12:15:25 to 12:16:06. The tool's last
  line: `3 things to look at` (the same tab: two at 360, one at 320).
- 72 pictures in `shots/`: 48 of tabs, 17 of the page in slices, 7 of
  proposals.
- Every measure in this file was taken again from 12:16:19 to 12:19:29
  with the same kit and is as written here. `faust.js` is the file that
  was photographed (compared after the measures).

The sets before this one, back to 10:49 (10:49 to 10:52, before the
mend of 11:06; 11:10 to 11:14; 11:38 to 11:40; 11:53 to 11:55; 12:05
to 12:06), hold the same 65 pictures of tabs and page, byte for byte,
with two exceptions: Measures at 320 px changed at 11:53, when I bound
the last two words of a key so that the last does not stand alone, and
one pixel of `name`, Beat, 1280 px differs in the last set. So the mend
of 11:06 changed nothing on this piece, and neither did my other last
changes to the script: a title marked in the reading's own words keeps
the grey of its note at every width, an empty fact leaves no stray
mark, and two spaces that could not be seen in the source are written
as escapes.

## Refused by the permission system

Nothing was refused on its merits. Twice (about 11:24 and 11:36 UTC) a
command was not run because the checker that passes commands was
itself not answering, and its message said to wait and try again. The
first was a small script that changed three paragraphs of this file; I
made the same three changes with the editing tool. The second was a
crop of two pictures in the scratch directory; I gave the same command
again and it ran.
