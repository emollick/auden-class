# The kit: how a plate is drawn, and how a piece draws something of its own

## What is on the page

A piece (`site/js/piece.js`) is a title, two short paragraphs ("The
passage", "What Auden said"), and one to three **plates**. A plate
(`kit/plate.js`) is a passage set large, with tabs. Each tab is a
**lens**: one way of reading the passage, drawn on its words, with a
caption beside it and a small key under the caption.

The data comes from `site/data/pieces/<id>.json`, which
`node build/pieces.mjs` cuts from `remake/works/<id>/reading.json` and
the hosted texts. Nothing on the page is typed into the script.

| kind | file | what it draws |
| --- | --- | --- |
| beat | lens-beat.js | the measure as a rule under the line, the voice as dots |
| rhyme | lens-rhyme.js | rhyme letters in color, arcs from rhyme to rhyme, threads of sound |
| figure | lens-figure.js | the parts of a figure underlined and joined |
| sentence | lens-sentence.js | the parts of a sentence ruled under |
| word | lens-word.js | a word underlined, its sense set under it |
| compare | lens-compare.js | two versions, words that answer each other |
| shape | lens-shape.js | the build of a scene, a book or the whole work |

The first six are drawn by the kit and you do not touch them (what a
reading can set about them is described below: `turn`, `stage`,
`indent`, `stanza` and `place` on a plate, `join` on a figure).
**Shape**
is different: the kit can only set its facts out as a table. A piece
draws its own.

## The look, which is settled

Paper, ink and two Garamonds, like a finely made annotated book. The
colors are named in `site/css/atlas.css` and used by name from
`kit/draw.js`: `INK`, `QUIET` (labels), `HAIR` (hairlines), and eight
for marks: `RED`, `BLUE`, `OCHRE`, `GREEN`, `PLUM`, `TEAL`, `UMBER`,
`SLATE`. Red is the one that says "this, here": the chapter of the
passage, the stress off the beat, the thing the caption points at. Use
the others only to tell classes of thing apart, in the order `PARTS`
gives. Most of a drawing is ink and hairline. A reader holds about
four kinds at once: the checker warns above five and refuses above
eight.

Nothing is dressed in the subject of the work: no sea for a sea poem,
no flames for Hell, no stage for a play. No pictures, textures, shadows
or icons. No sound. Nothing loops and nothing moves once it has drawn
itself. The pointer may add a detail; it must not be needed.

## How a plate lays itself out

The kit decides these from the reading and the width; a piece's script
does not set them.

- **A second version** (`pair`) with as many rows as the first is set
  line under line, small and italic. If any lens marks its words, every
  row of it is given room for the marks (`pair-marked`). Where the
  reading gives labels, the passage begins with one line that names
  both (`legend`): the first label in small capitals, the second in the
  quiet italic of the version's lines.
- **Two passages** (a pair with a different number of rows, or
  `"beside": true` on the plate) stand as two blocks, each under its
  label: side by side from 940 px (`two-col`), one under the other
  below that. With `beside` both are set in one type (`is-twin`).
  - Rows that answer each other begin level: line for line where two
    passages of equal standing have as many rows as each other, and
    stanza for paragraph where a prose version has one paragraph for
    each stanza. On a compare tab the rows that hold the two ends of
    a pair begin level, where the pairs keep their order in both
    passages and no row has to move far; a version in verse is then
    set at the pitch of the lines it answers. Where no pair can be
    set level (`unlevel`), the version keeps its own pitch, as it has
    below 940 px.
  - The caption goes under both. Where one of the two is much the
    shorter (200 px or more), the caption stands under that one
    (`side-in`). A short second passage whose marks answer the last
    lines of the first stands at the foot of its column, beside those
    lines, with the caption over it (`pair-low`). There the pitch is
    what sets its rows level with those lines: it keeps the pitch if
    a row of it stands within 10 px of the line it answers, and goes
    to its own pitch (`unlevel`) if none does.
  - A second passage that is another passage of the same work (not
    `beside`, the same language) is shown only on the tabs that mark
    it (`pair-off`). A passage in another language always shows, with
    `beside` or without. On a narrow plate (under 880 px) the English
    of a passage in another language stays straight under the passage
    on every tab, and the caption follows both: most readers read the
    passage by its English. (One case apart: on a Word tab that sets
    the sense under every line of the first passage, or every line but
    one, the reader has the sense already, and an English version set
    without `beside` goes after the notes.) The other way about (an
    English passage with its original as the second), the original
    goes after the caption on the tabs that do not mark it
    (`pair-after`). Without `beside` a second passage that the tab
    does not mark is set as plain prose; with `beside`, under the
    first passage (a plate under 940 px), it keeps its type and gives
    up the room for marks.
  - Under two passages, a key much taller than its caption goes under
    the caption, across the plate (`keys-wide`). Where the caption
    stands under the shorter passage and its key would end more than
    120 px below the longer one, the key goes under both passages,
    across the plate, if the plate is at least 120 px shorter for it
    (`keys-under`).
  - Two passages in one type are each fitted to their own column. The
    room for a rhyme's letter is kept only for a passage whose lines
    end on a rhyme. Side by side they begin level: where one label
    takes more lines than the other, the shorter label is given the
    height of the taller.
  - On a narrow plate, where the two stand one under the other, a tab
    that marks only the second passage (another passage of the same
    work) shows only that one (`main-off`): the reader is not made to
    scroll past lines the tab says nothing of.
  - Where more than one person speaks in a second passage that stands
    as a block, each speaker is named over the first line they speak
    (the build sets `who` on the row).
- **The pairs of a compare lens** are numbered in the order their words
  stand in the first passage, whatever order the reading lists them in,
  and the remarks follow. Side by side, the two ends of a pair carry
  the same number in the same color; line under line, a stroke joins
  them. A pair with no remark (`say`) has its two rules in one color
  and no number: the numbers count the remarks, 1, 2, 3, with none
  left out (where no pair at all has a remark, as on a card of the
  front page, every pair is numbered). The notes of a word lens are
  ordered the same way.
- **A short passage** beside a long caption would leave bare paper
  under it. Its key and numbered remarks then stand under the passage,
  key at left and remarks at right, and the caption stands alone beside
  it (`low`); remarks with no key stand in two columns there. The kit
  measures this at every resize.
- **A plate of one column that is wide enough to set the key beside the
  caption** (520 to 879 px) gives the key a third of the width. A key
  much taller than its caption goes under the caption there too, in
  two columns (`keys-wide`).
- **On a narrow plate** (under 520 px), where the passage, the caption
  and the key stand one under another, the key of the tab that is
  showing stands straight under the passage it marks, with the button
  that draws the marks again: the name of the measure, the rows that
  say what a stroke, a dot or a color is, the scheme of the rhymes, a
  figure's name and plain words (`.near-key`; `keyUp()` in plate.js).
  It stands under the second passage where the tab marks that one. The
  numbered remarks and the notes on words, which are running words,
  stay after the caption, 12 px apart. On a wider plate nothing moves.
  A key that is the last thing before a rule stands 16 px over it, as
  it does over a second passage (`key-last` on the plate).
- **The class `ref` is the kit's.** `refer()` puts it on every word of
  a caption that lights its place in the passage, and on rows of a
  key. A page outside the kit that wants a class for a reference takes
  another name (the class page's is `page-ref`): a rule for `.ref`
  written for the class page once set these words small and grey on
  every piece (4 October, mended the same day; `review/phone/tools/
  refs.mjs` tests it).
- **"Draw it again"** draws where the marks can be watched: where the
  head of the passage stands above the window, the passage is brought
  to the window's top first.
- **The tabs stand again at the foot** of a narrow plate, which is read
  downward and may be three windows tall. A press there opens the way
  and brings the plate's head to the window's top.
- **Four tabs or more** that would take a second row (a small phone)
  stand a little closer, so that they keep to one (`close`), and a
  hair closer still where even that row would break (`closer`: four
  names of 28 letters keep to one row at 320 px).
- **Verse** is fitted to the width so that a line stays whole. Where
  it cannot (a phone), a line turns with a hanging indent. It turns
  after the stop or the comma nearest its middle, if one stands in the
  middle two fifths of the line and outside every held run, and it
  turns there on every tab (a dash that joins two words counts as a
  stop, and the line may turn after it); a line with no such stop is
  balanced, so that no word is left alone. A reading may say where a
  line turns instead: `"turn": { "49.0": 4 }` on the plate turns row
  49.0 after its word 4. Where lines must turn anyway the type does
  not stay at its floor: it is set as large as it can be, up to 22 px,
  while no line turns that does not turn at the floor and no part of
  a line set to turn at a stop is too long (the same size on every
  tab). A turned line that the tab showing does not
  mark keeps its two parts close, with the room for marks after the
  second; a line that has not turned stands where it did on every tab.
  (On a Rhyme tab a line is marked under its words only where a sound
  inside the lines has a place in it: the letter of its rhyme stands
  after the line.)
  Each row is set by its own kind, so a line of prose among verse runs
  on as prose: it is never set larger than a passage of prose is, and
  on a tab that does not mark it its lines stand close. A speech of a
  few words set as prose among verse keeps the size of the verse.
- **A short run of words that a tab marks as one thing** (a part of a
  figure, a noted phrase, one end of a compare pair, a short span of a
  sentence) is not parted where a line turns: at most four words, and
  at most 26 letters in verse or 14 in prose (counted as the tokens
  stand, with their points and the spaces between them).
- **A small word is not left at the end of a line.** A word of one
  letter keeps with the word after it. In a line of verse so does a
  short word that leads to the next (an article, a preposition,
  "and"; in English, Italian, French, German and Latin; a pointing
  word in English, a possessive in French and German), unless a
  stop parts the two.
- **Stanzas** that follow each other with nothing between them are
  parted by a little space (the build knows a stanza by the row's
  block: rows 12.0, 12.1, 12.2 are one stanza). Where the hosted text
  sets each line as a block of its own the kit sees no stanza, and a
  reading may ask for the space: `"stanza": { "17.0": true }` on the
  plate sets it before row 17.0; `false` takes away one the kit would
  set. A row of the second passage is `p:<row>`. The build refuses the
  key where a name, a direction or a sign of omission already stands
  before the row. Beside a passage, a stanza's space stands over the
  speaker's name, where the row has one, and not between the name and
  the speech.
- **Rows set deeper in**, as the edition sets them:
  `"indent": ["5.0-5.3"]` on the plate (a row, or a run of rows from
  one to another; `p:<row>` in the second passage). They stand in by
  twice the size of the type, and the size of the verse is reckoned
  with that room.
- **A name or a direction that the edition prints in the line.**
  `"stage": { "3.1": { "name": 1, "dir": [4, 6] } }` on the plate says
  that the first word of row 3.1 is the speaker's name and words 4 to
  6 a direction; they are taken out of the line and set over it, as
  names and directions are everywhere. With `"inline": true` they
  stay in the line where the edition has them (`"inline": "name"` or
  `"dir"`: only that one stays), in the small capitals of a name and
  the small italic of a direction. They are no words of the verse: no
  tab scans them or sets a rhyme, a part, a span or a pair on them (the
  build refuses it); a note of a Word tab and a numbered remark may
  stand on them. A direction after the verse is not reckoned in the
  size of the type; it keeps whole and the line turns before it, the
  turned part standing in. A row that is nothing but a direction
  (`"dir": [0, 0], "inline": true` on a row of one word) is set as a
  small heading among the lines. Where a line ends on a rhyme, take the
  direction out of the line (no `inline`): the letter stands there.
- **A direction in the second passage** stands where the edition has
  it: one printed before a speaker's name is set before that name
  (it goes with the speech above, and the name stands further under
  it than a name stands under a speech), one printed after it under
  the name. The edition's heading of a number (one word and a full stop,
  then the first words of the line under it) is left out, and so is a
  direction before a block whose first rows the plate does not show.
- **A name keeps clear of a mark above it.** Beside a passage, where a
  row carries the number of a pair or a note under it and a speaker's
  name or a direction follows at once, the name stands lower by what
  the mark takes (`hung`), so the two do not read as one.
- **Lines left out are shown once.** A row that begins late begins
  with points of omission, and they are the sign: no line of three
  points is set before it, in either passage. (In the first passage
  none is set after a row cut short at its end either.)
- **A name moves with its speech.** Where a row of the second passage
  is set level with the line it answers, the room goes over what
  stands first over the row (the points of a gap, a direction, the
  speaker's name), not between the name and the speech.
- **A word that carries a numbered remark** has a little room after it
  for the number, on the Beat tab only (`numd`).
- **Two words joined by a dash** with no space are one word to the
  row, but each is wrapped (`.wp`), and a word number may name one of
  them: 6.1 before the dash, 6.2 after it. `ctx.words(row, a, b)` and
  `ctx.text(row, a, b)` take such numbers. Where lines turn, the two
  may part after the dash: the dash stays with the first, a quotation
  mark after it goes with the second. (`ctx.words` gives such a token
  as its two parts, each with its points, so a mark under the whole
  token is drawn on each line it stands on.) The place where the two
  may part is a `wbr`, and a browser honors a `wbr` even inside
  `white-space: nowrap`: the stylesheet shows it only where lines may
  turn, and never inside a marked run. `fit()` measures every line
  whole before it lets one turn after a dash.
- **Lines left out** between two rows of a plate are shown by three
  points on a line of their own (the build finds them; a row that is
  itself cut short already ends in points). A row cut short at a dash,
  or at another point with no word in it, prints that point and no
  points of omission. The kit's points keep to the last word shown,
  and are left off where that word ends in the edition's own points.
- **A stop that the edition sets after a space** (! ? ; : or a comma)
  is set close against its word. In a French passage a narrow
  no-break space stands before ! ? ; : and nothing before a comma.
  The stop was always the tail of its word: word numbers do not change.
- **A speaker's name** that a hosted libretto prints in capitals at the
  head of each speech is taken off the row and set over it, as the
  speakers of a play are. The words of the row keep their numbers: the
  name is still word 0, and is not shown.
  A reading may gloss a name that stands over a speech: `"speakers":
  { "NAME AS PRINTED": "who that is" }` on the plate.
- **The place of a passage** (act and scene, canto, chapter) stands
  beside the plate's heading, and under it on a phone. The kit takes
  it from the label of the hosted part. Where that label says the
  heading again, or too little, a reading gives the line in its own
  words: `"place": "Wagner, *Tristan und Isolde*, Act 2, Scene 1"` on
  the plate (`""` for no place line). The line is italic; a title set
  between asterisks stands upright in it, here and in a label. The kit
  cannot know a title by itself: a work's title is often its hero's
  name.
- **A gloss under a word** keeps inside the column its word stands in.
  Two glosses that would touch: the later one moves along to the right,
  and only where it cannot does it go a line lower. Two that stand
  within 18 px of each other on one line have a hairline between them.
  The gloss of a phrase that has turned stands under its wider part.
  A gloss is italic; a word marked `*word*` in it stands upright.
  On a Word tab of a plate set line under line, the version's line
  stands at least 36 px under the foot of the line above (30 px on a
  narrow plate), on every row, so that gloss and version read apart.
- **The parts of a figure** are underlined, one color to a tag, and
  joined as its `draw` says: `cross` nests two arcs in one line, or
  crosses two strokes between two lines (the first two kinds that have
  two parts each); `pair` joins A to B with a squared stroke; `map`
  joins one thing to each of several; `chain` joins each to the next;
  `align` stands a spine in the margin; `list` numbers the items. A
  reading can say which parts are joined instead (`join`: see POET.md;
  in a `cross`, two joins make a crossing). In an `align` a list of
  joins keeps the spines: the joins it names are drawn in place of the
  loose ones (those between parts that stand inside their lines), and
  a join between two parts of one kind takes that kind's color;
  `"join": "none"` still means underlines only. A stroke is drawn only
  between parts on one line of type or on two that follow each other,
  and only where its way is clear of other lines; behind a speaker's
  name or a direction it is broken. Where a version is set under each
  line, the next line of the original is the line that follows: the
  stroke runs clear of the version's words where it can, or behind
  them, broken where they stand, if less than a third of it is hidden.
  A spine keeps clear of the version's lines too. The strokes of one
  figure are of one kind:
  - a crossing that can be neither two arcs nor two strokes (its parts
    fall on three lines, or one pair would get an arc and the other a
    stroke) is not drawn, and each part takes a small letter in its
    color, in the order they are said: a, b, b, a;
  - the pairs of a `pair` that the reading does not join by name are
    all joined under their own lines, or all from one line to the
    next with none running far between the lines, or none is drawn
    and the two colors tell; so are the joins of a `map` with no
    `join`, and those of an `align` that are not a spine (and a loose
    join of an `align` is never drawn behind a speaker's name, a
    direction or the points of a gap: where one would be, none is);
  - in a chain, a stroke to the next line leaves from the part nearest
    to where it goes, and is left out where it would run far along
    between the lines or cross a stroke already there: color tells
    those.
  The key has one row for each color, with the labels of its parts in
  the order they stand, parted by commas (by semicolons where a label
  holds a comma or a colon; the key of a Sentence tab does the same);
  a part of a list whose label is only its number has none.
- **A rhyme** that reaches past a line it does not rhyme with is drawn
  as a bracket in the margin; if one rhyme of a plate needs a bracket,
  all its far rhymes take one. There are eight colors before one
  comes round again. Where lines turn, on a plate whose Rhyme tab has
  a rhyme at a line's end, they stop short of the plate's edge by the
  room a letter and its arc need (a Rhyme tab that shows only sounds
  inside the lines keeps none). The joins never stand outside the
  plate: where the room at its edge is short they close up, all by one
  measure; an arc that would still swing out is a bracket; two
  brackets that pass the same lines stand a lane apart. The row of
  letters in the key opens, with three small points, where lines are
  left out. A sound that returns inside the lines (a thread) is dotted
  from place to place along a line, and from one line to the next
  where a line holds a single place. A thread keeps to one passage: a
  place of the original is never joined to a place of the version.
  Where a version is set under each line, the stroke to the next line
  of the original runs as a Figure's does (clear, or broken behind the
  version's words). A place that a stroke reaches has a dot; a place
  none reaches has three points. The key says only what is drawn, and
  is written again at each width. A letter that is both in a rhyme
  and in a thread shows the rhyme's color. The letter of a row that
  is cut short stands after its points of omission, not on them.
- **Beat.** A syllable that is not counted is tied to the next (`~` in
  `voice`) or to the one before it (`<`). Where the line turns between
  the two, half the tie is drawn, as a short hook at the end of the
  part (or at the start of the next, for `<`). In verse measured by
  length every long mark of a plate is one length, and the bar of a
  pause keeps 3.5 px clear of the marks beside it. The key has one row
  for each kind of dot the lines carry, and none for a kind they do
  not. A pause is a lone `|` between two words; inside a word that a
  dash joins it is a `|` between the marks of the two (`/|/`), and its
  bars stand under the dash. Under a tie the two bars of a pause begin
  2.5 px clear of it.
- **The rules of a Sentence tab** stand 6 px under the foot of their
  line, so that a closing tick does not run into the comma after the
  last word.
- **The marks of a tab** are placed 430 ms after it is opened, or as
  soon after that as no letter is still changing weight (two seconds
  at most).
- **A word named in a caption** (in bold or italic) lights where it
  stands in the passage. Where the tab's own marks begin on some of
  those places, only those light.
- **The small notes beside a passage** (the numbered remarks of a Beat
  or a compare tab, the notes of a Word tab) are italic, 13 px on a
  phone and up to 14.5 px on a wide plate, in the darker of the two
  greys; the lines of a key stay small and quiet. A word named as a
  word in one of them is marked `*word*` in the reading and stands
  upright. Like a caption, they do not leave a last word alone on its
  line. A note of a Word tab stands under a head in bold, the words of
  its row. Where the note itself opens with a word of that head,
  marked `*word*`, the head is not said twice: the note's own word is
  set as the head, and the words of the row are not printed before it.
  `*word*` is read in the same way in a label of a key, in the
  `plain` of a Figure, in `what`, and in the cells and the folded
  sentences of a plain table; `what` takes a link too.
- **In "What each caption stands on"** each entry is named by its
  plate's heading and its tab, with a raised point between them; two
  plates under one heading are told apart by their place.
- **Pairs a printer keeps on one line** are kept wherever the kit sets
  running words (`keep()` in `draw.js`; `tidy()` and `rich()` use it):
  "p." or "Act" and its number, "Appendix" and its numeral, "line",
  "chapter", "book" and the like in small letters and their number, a
  pair of initials, a book of the Bible and its chapter and verse, a
  day and its month, a month and its year, and the two ends of a range
  of figures or of small roman numerals. A range of figures has one
  form wherever words run: the longer stroke between its two ends,
  whichever stroke it was typed with ("3:18-19" is set as "3:18–19";
  figures joined by more strokes than one, a date written 2026-10-03,
  are not a range and stay as typed). A gloss under a word is tidied
  the same way, and so is the place of a passage where the label of
  its part in the hosted book holds such a range (`piece.js` hands the
  plate the place to print; the book's data is not changed). A caption comes from the
  build as HTML; its words outside bold and italic are kept the same
  way (`kept()` in `rich.js`). A heading (`tie()`) keeps
  those and does not end a line on a short word or on the pronoun of
  one letter: the quotation at the head of a page, the labels of
  "Read on", the title of a record. The title of a page is not tied
  (it is set as written and balanced: tied, a title of four or five
  words takes a third line on a phone). An italic run that ends in ? or ! has a hair of room
  after it in a caption and in the sources (`lean`).
- **The quotation at the head of an entry** ("What Auden said", "More
  from Auden"; `quote` in the reading) is set between double marks,
  in italics. A title named in it is marked `*title*` and stands
  upright there. Marks of its own round the whole quotation come off
  before the page adds its pair; a mark that closes a phrase quoted
  inside it, at its end, stays.

## A drawing of a piece's own

Put it in `site/js/pieces/<pieceId>.js`. The build notices the file and
the piece page loads it. It exports the lenses it draws, keyed by plate
and lens:

```js
import { RED, INK } from '../kit/draw.js';
import { sheet, lin, num } from '../kit/diagram.js';

const force = {
  name: 'Force',
  stage: 'own',                      // the drawing takes the place of the passage
  draw(ctx, lens, run) {             // called when the tab opens, and again on every resize (run = false)
    const d = sheet(ctx, lens, run, (w) => 250);
    // ... draw with d, from lens.facts
  },
};

export default { lenses: { 'dynamo:shape': force } };   // '<plateId>:<kind>', or '<plateId>:<lens number from 0>'
```

`site/js/pieces/adams.js` is the worked example: a bar for each chapter,
and a book's chapters laid along the years. Read it before you start.

`sheet(ctx, lens, run, height)` clears the stage, sets `lens.what` at
its head (with its `*word*` upright, its links, and a number kept with
its word, as in running words), and gives back a drawing `d` that is
`d.w` px wide (the width the plate has now) and as tall as you asked
(`height` may be a function of the width). All coordinates are px. Then:

| call | draws |
| --- | --- |
| `d.rule(x1, y1, x2, y2, { stroke, width, dash, at })` | a line; a hairline if you say nothing |
| `d.path('M…', { stroke, width, fill, dash, at })` | any line or shape |
| `d.bar(x, y, w, h, { fill, r, at })` | a box |
| `d.dot(x, y, r, { fill, stroke, at })` | a dot, or a ring with `fill: 'none'` and a stroke |
| `d.text(x, y, words, { cls, anchor, fill, turn, at })` | one line of words |
| `d.note(x, y, width, words, { cls, align, at })` | words that may wrap, set over the drawing |
| `d.hot(node, words, mark)` | while the pointer is on `node`, a line under the key says `words`, and the other marks that answer the pointer go pale; `mark` (optional) is a node or a list of nodes, such as its label, that stay dark with it. A tap does the same; a second tap, or a tap on bare paper, lets go |
| `d.keys([{ mark, color, text }])` | the key under the drawing; `mark` is bar, open (a box in outline), line, dash, dot or ring |
| `d.figures(rows)` | the numbers the drawing is made from, folded away under it |

`at` is when the mark appears, in ms after the tab opens. Lines draw
themselves; everything else fades in. Leave `at` out and the mark is
simply there. Keep the whole drawing-in under three seconds.

The key under a drawing (`d.keys`) is set like a caption: a last word
is not left alone on its line. A link inside a drawing has no
underline: the kit's stylesheet sees to it, and a piece's script need
not.

For a pale ground (a band behind a group of marks, a field) use `TINT`
from `kit/draw.js`. Do not make a paler color by setting an opacity on
ink: where two such marks overlap, the overlap shows.

Words in a drawing take one of five classes (`cls`): `dg-it` (an italic
note, the default), `dg-lab` (small capitals, for a heading inside the
drawing), `dg-n` (figures), `dg-name` (a name, in the display face),
`dg-big` (one large figure). `anchor` is start, middle or end. No other
sizes or faces.

`lin(d0, d1, r0, r1)` makes a scale (`const y = lin(0, max, bottom, top)`),
and `num(n)` writes 5154 as 5,154.

### Rules for a drawing

1. **It shows what the caption says can be seen.** Read the lens's
   `what`, `caption` and `why`. A reader should be able to find every
   number the caption names somewhere in the drawing.
2. **Every number comes from `lens.facts` when the page runs.** Type no
   count, name or date into the script. If the examiner corrects a
   fact, the drawing must follow by itself. Read the facts by key. If
   a key you need is missing, `throw new Error('facts: no chapters')`;
   the kit then shows the plain table in the drawing's place.
   Some keys of the facts are working notes and never reach the page:
   `counted`, `source`, `sources`, `from`, `where`, `at`, `block`,
   `blocks`, `row`, `rows`, `checked`, `note`, `notes`, `method`, `key`,
   and any key ending in Key, Source or Note. Do not draw from those.
   To send the reader from a mark to its place in the book printed
   here, the facts may carry a key named `read`, such as
   `"read": "hamlet/a3s1:46"` (book, part, block): link to
   `#/read/` followed by it.
3. **It works from 264 px to 610 px.** A drawing gets 334 px in a
   window of 390, 304 px in one of 360 and 264 px in one of 320, and
   about 607 px beside its caption in a window of 1280. Lay it out from
   `d.w`. Labels must not run into each other or off the edge at either
   width: shorten, drop to figures, or move them into `d.keys` or
   `d.note`.
4. **Label it on the drawing.** A reader should not have to move the
   pointer to learn what a mark is. Axes get a few figures, not a grid.
5. **Scale honestly.** Lengths and heights in proportion to the
   numbers, from zero. If a part is not to scale, say so in the key.
6. **One drawing, one idea.** If the lens holds two things, stack two
   small drawings under two `dg-lab` headings rather than crowd one.

A piece may also bring `site/css/pieces/<pieceId>.css`, with every rule
beginning `[data-piece="<pieceId>"]`. It is rarely needed.

## Seeing it

```
node build/pieces.mjs <pieceId>
node build/tools/shoot.mjs <pieceId> --out remake/works/<pieceId>/shots --page
```

The second command photographs every plate under every tab at 1280 px
and at 390 px, and the whole page in slices, and prints what the
browser complained of: script errors, a page wider than its window,
marks that stand outside their plate, labels that overlap. Then open
the pictures and look at them. `--plate <id> --lens <n>` photographs
one tab only.
