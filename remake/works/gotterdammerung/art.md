# Götterdämmerung: the artist's record

3 October 2026. The reading, `notes.md` and `exam.md` in this folder were
read and not touched. Nothing of the libretto is typed here or in the
script: places are given by row and word number as the checker prints
them (`p:` marks a row of Armour's English; words are counted from 0).

What I made: `site/js/pieces/gotterdammerung.js`, one drawing (plate
`brand`, tab "Told"). No stylesheet of the piece's own was needed. The
permission system refused one command, a removal of old pictures; what
it was, and the times of the last build and the last pictures, are in
section 6.

1. The drawing
2. Faults in my own drawing, mended
3. Faults that are the kit's, worst first
4. Proposed for the reading
5. The reading: nothing of fact; three things for the critic
6. Pictures, times, and the picture tool's last line

## 1. The drawing: plate `brand`, tab "Told"

**What the lens asks for.** Its `what`: where in the libretto each end
is told before it comes. Its facts: the length of the libretto in lines
of verse, its four parts, two ends (each with the lines at which it is
told, who tells it, and the line at which it comes), and the three
passages of this page.

**What the reader should see at a glance.** Both ends are told many
times, by many mouths, from the first hundred lines on. The end of the
gods is told early (the Prelude, Act 1, the first lines of Act 2); the
death of Siegfried is told all through Act 2 and into Act 3. Each end
comes only at the foot.

**The form: a line of marks, set upright.**

- The libretto is one ink line running down the page, its lines of
  verse to scale, the first at the top. A hairline crosses where each of
  the four parts begins, with the part's name in small capitals at its
  right-hand end.
- Left of the line stands every place where the first end is told;
  right of it, every place where the second is told. The name of each
  end heads its side. So the two are told apart by where they stand,
  not by color.
- A telling is a short ink tick, with its line number and the speaker's
  name. Where an end comes, the tick is heavier and red, and so are its
  number and name. Red is used for nothing else.
- The three passages shown on the page are short beads on the line
  itself, as long as the passage is (never under 2.4 px, or they would
  not show). The first bead holds the first telling; the last holds
  the red tick of the end of the gods.
- Under the foot of the line: the count of lines of verse.
- A key of three rows, and folded under it "Line by line": line,
  speaker and what is said, for all fourteen marks.

**Why upright.** What a mark has to say is who speaks. Along the page,
fourteen names would need leaders and a second story of labels: four
marks of Act 2 fall within 185 lines, which is 24 px of a line 264 px
long. Upright, every mark has a row of its own at every width from
264 px to 607 px, in one and the same layout, and the eye goes down
the page as the opera goes on. The poet's note asked for one line with
two rows of marks, the two ends in red and the passages as short
spans; this is that, turned a quarter.

**Scale, and where it gives way.** A tick leaves the line at its true
height: line number over all lines, times the length of the line
(460 px; 410 px where the drawing is narrower than 420 px). A label
stands at its tick's height unless two labels would touch. Then the
labels of that group are set 14.5 px apart about the middle of their
marks, they stay inside their own part of the opera (their middles
8 px from its hairlines), and a tick bends to reach a label that has
moved more than 3 px. That happens twice: at lines 79 and 111 (7 px
apart), and at lines 1,251 and 1,263 (3 px apart).

**Width.** Where both sides have room, the line stands half-way
across. Where they have not, it moves off the middle; where they still
have not (264 px), the ticks shorten, to no less than 5 px. Where the
name of one end needs two lines (304 and 264 px), the other takes two
as well, so that the pair matches. (If the facts ever hold a name too
long for all that, it is cut short with three points: section 2. None
is cut now.) Measured in the browser at 264, 304, 334 and 607 px
(windows of 320, 360, 390 and 1280): no label leaves the drawing; the
leftmost begins 1.5, 25.5, 20.5 and 156.5 px in. Pictures:
`shots/gotterdammerung-brand-2-told-1280.png`, `-390.png`, `-360.png`,
`-320.png`.

**What the pointer adds.** Pointing at a mark, or touching it, says
under the key what is said there (the fact's `says`, or `what` for an
end), and keeps dark every mark of the same speaker on both sides:
Hagen has three tellings on the right and the red tick there;
Brünnhilde has a telling on each side and the red tick on the left
(`shots/close/told-1280-pointer.png`). A click on a mark, a bead or a
part's name opens that place in the book printed on this site (the
fact's `read`). Under a finger the touch only asks, and the line that
answers carries the link (`shots/close/told-390-touch.png`). The folded
table is in `shots/close/told-1280-table.png`.

**Motion.** Where motion is allowed, the marks draw themselves once,
from the top of the opera down, in about two seconds. Where it is
not, they stand at once. Nothing loops.

**Read at run time.** All of it: `lines`; `parts` (`name`, `lines`,
`read`); `ends` (`name`; `told` with `line`, `who`, `says`, `read`;
`comes` with `line`, `who`, `what`, `read`); `passages` (`name`,
`first`, `last`, `read`). No name, number or word of the opera is in
the script, so if the critic changes a `says` or a name the drawing
follows. If a key is missing, or the parts do not add up to the lines,
the script throws `facts: ...` and the kit shows its table. I added no
key to `facts` and counted nothing.

The script's own words on the page are labels and no more: "lines of
verse"; the key ("the end is told", "the end comes", "the passages
shown on this page"); "Line by line"; and, in the line that speaks,
"line", "lines ... to ...", "shown on this page".

## 2. Faults in my own drawing, mended

Seen in close pictures as I worked (scratch pictures, not kept):

- The names of the parts were ruled under, because the page rules under
  every link. A name in a drawing is not ruled under now; the pointer's
  hand says it opens.
- A hairline that stopped short beside a label read as a mistake. Each
  label now keeps inside its own part, and the hairlines run whole.
- The foot of the line was crowded (a bead, the red tick, a foot tick
  and a rule). The rule and the foot tick are gone.
- In the folded table a speaker's name of two words broke over two
  lines. Names keep to one line.
- At 264 px a label overran the drawing by half a pixel. The line is
  now set on a whole pixel inside the room the two sides leave.
- A label stood 2 px under a part's hairline (line 866, 33 lines into
  its act). It now stands 3 px clear; its tick is still straight.
- At 304 px one end's name stood on one line and the other's on two.
  They now match.
- What if the critic changes a name, or the lead adds a telling? Tried
  from 11:24 to 11:31 with the facts changed in the built copy only (a
  speaker with a very long name on each side, three marks within
  twenty lines, a mark six lines from the end, no passages; built
  again after). At 264 px the picture tool then reported twelve labels
  outside the plate. Mended: a name that has no room is cut short
  with three points, and a name on the right stops short of a part's
  name at the end of its hairline; the whole name is still in the
  line that speaks and in the table. The same trial then ended
  "nothing reported". With the facts as they stand no name is cut at
  any width, and the drawing is the same picture, byte for byte, as
  before this mend (compared at 264, 304, 334 and 607 px).

## 3. Faults that are the kit's, worst first

All seen on the page as the reading sets it (the three plates line
under line), after the seventh mending and its mend of 11:06 UTC. The
seventh mending took nothing off this list: its changes to where lines
turn and to the strokes of a Figure tab do not touch this page (no row
turns; the pairs of Against cannot be joined alike, so none is drawn,
as before). None can be mended from the piece's script, and I did not
work round any.

1. **`rhine`, tab English, every width: a thread's strokes run from
   one language into the other.** The r thread goes from row 5.0 w0
   down to p:97.0 w0, on to row 6.0 w1, and on to p:97.1 w3; the g
   thread from row 7.0 w2 to p:97.2 w1 and w2, and on to row 8.0 w2.
   The reading lists each thread's German places first and its English
   places after them; the kit joins the places in the order they stand
   on the plate, and line under line an English row lies between two
   German rows. The stroke from a German word to the English word
   under it says what the caption says (the same letter kept). The
   stroke on from that English word to the next German line says
   nothing, and the whole reads as one chain through both languages.
   Ask: join a thread inside one passage only (row to row, `p:` to
   `p:`), and leave the color to tie the two languages. The examiner
   left this for an artist (exam.md, section 3). Pictures:
   `shots/gotterdammerung-rhine-2-english-1280.png`, `-390.png`,
   `-360.png`, `-320.png`. With `beside` on the plate it is gone
   (section 4), but see fault 8.
2. **`norn`, tab Stave, and `rhine`, tab Against, every width: nothing
   joins one German line to the next.** Stave: the key says of four
   sounds that they come back "from line to line" (row 1.0 w0 with
   2.0 w1; 1.0 w2 with 2.0 w0; 3.0 w0 with 4.0 w0; 3.0 w2 with
   4.0 w2), and the caption's point is that the lines pair off. On the
   plate each is a dot or three points under its letters, and only the
   colors pair the lines. Against: the reading names three joins
   (`join`: rows 3.0 and 4.0, 5.0 and 6.0, 8.0 and 9.0) and none is
   drawn. The rule is the kit's own (no stroke across a line of type;
   color tells), and the two tabs do read by their colors. But it
   means that on any plate set line under line a mark that ties two
   lines of the original is never drawn. One mend would serve every
   translated piece: from 940 px, set a version that has as many rows
   beside its original, rows level, as `beside` does now, and keep line
   under line below 940. Pictures:
   `shots/gotterdammerung-norn-0-stave-1280.png`, `-390.png`;
   `shots/gotterdammerung-rhine-0-against-1280.png`, `-390.png`. The
   same tabs with the joins drawn: `shots/trial-beside/`, same names.
3. **Five tabs of eight name Armour, and the plates never say who she
   is** (`norn` Dawn; `rhine` Knowing and English; `brand` Now and
   English). Line under line, the plate's two labels ("Wagner",
   "Armour") are shown nowhere: `plate.js` sets them only over two
   blocks. The italic line under each German line carries no name, the
   head of the page does not name a translator, and who she is is said
   only under Sources, at the foot of the page. Either the kit shows
   the two labels on a line-under-line plate too (beside the heading,
   say), or the words do it (section 5). Pictures:
   `shots/gotterdammerung-norn-1-dawn-1280.png`, `-390.png`;
   `shots/gotterdammerung-page-1280-0.png`.
4. **`norn` and `rhine`, phone widths: the verse is set smaller than
   the third plate's, for the letter of a rhyme that neither has.**
   The seventh mending keeps this room on every plate with a Rhyme tab
   "so that the plates of a piece agree". Here it is why they do not:
   `brand` has no Rhyme tab. And both Rhyme tabs of this piece are
   threads only (staves: no rhyme at a line's end, so no letter and no
   arc there). Type size, measured:

   | window | `norn` | `rhine` | `brand` |
   |---|---|---|---|
   | 390 | 23.8 px | 21.0 px | 28.4 px |
   | 360 | 21.3 px | 18.8 px | 25.8 px |
   | 320 | 18.0 px | 16.5 px | 22.4 px |

   With the Rhyme tab taken out of the built copy (a trial; built
   again after): `norn` 27.3, 24.8 and 21.5 px; `rhine` 24.0, 21.9 and
   18.9 px. At 320 `rhine` is now at the floor of 16.5 px and takes
   the class `turns`, though no row turns; the German there is hardly
   larger than the English under it (14.5 px), so the two are told
   apart by the italic alone. Ask: keep the room only where a Rhyme
   tab of the plate has a rhyme at a line's end. Pictures:
   `shots/gotterdammerung-rhine-0-against-390.png` and `-320.png`
   beside `shots/gotterdammerung-brand-0-now-390.png` and `-320.png`.
5. **Word tabs, every width: two kinds of gray italic English under
   one line** (`norn` Dawn, `rhine` Knowing, `brand` Now): the glosses
   of single words, then Armour's line close under them, saying
   different things. Under row 6.0 of `rhine` there are three (a
   gloss, her line, and the gloss of two of her words). It reads,
   because a gloss is smaller and stands under its word; small. The
   artist of Horace reports the same. Pictures:
   `shots/gotterdammerung-rhine-1-knowing-1280.png`, `-390.png`.
6. **The fourth thread's color, every width: its letters look faded,
   not colored.** A plate's fourth thread takes the kit's slate
   (`--slate`, #5c6672), which on a letter is about as dark as the
   gray italic of the English under it. On `rhine` English that
   thread is the vowel stave of rows 3.0 w0 and 4.0 w1, the first
   pair the caption names; on `norn` Stave it is the stave of rows
   3.0 w2 and 4.0 w2. Its three points in the key are the faintest
   row there. Small; a darker slate would mend it for every piece.
   Pictures: `shots/gotterdammerung-rhine-2-english-1280.png`,
   `-390.png`; `shots/close/rhine-english-1280-row-3.png`.
7. **Long plates.** For the record only, since the kit holds that a
   long plate is long. In a window of 390 the plates are 1,301 and
   1,358 px (`norn`), 1,638, 1,841 and 1,718 px (`rhine`), 1,911,
   1,779 and 1,072 px (`brand`); on the passage tabs the caption
   begins about 1,230 px down on `rhine` and 1,300 px down on `brand`,
   so only the marks of the last two or three rows can share a screen
   with it. At 1280 those tabs are 1,528 px, and beside rows 4.0 to
   10.0 the column under the caption is bare paper, about 1,000 px of
   it on Against. Every row keeps room for marks on its English line,
   because one tab of each plate marks the English.
8. **Only if `beside` is set** (section 4):
   - `rhine`, English, 1280: the arc of the b thread runs on from the
     German line into the English line level with it, from row
     2.0 w3 across the gutter to p:93.4 w2: about 410 px of dotted
     line under words it does not mark. Two level rows of two columns
     are taken for one line. Picture:
     `shots/trial-beside/gotterdammerung-rhine-2-english-1280.png`.
   - On a phone the version stays between the marked German and its
     caption also on the tabs that mark nothing in it (Stave, Against).
     The README says a version in another language goes after the
     caption on such tabs; `plate.js` does that only where `beside` is
     not set. The artists of Horace and Rilke report the same.
     Pictures: `shots/trial-beside/gotterdammerung-norn-0-stave-390.png`,
     `shots/trial-beside/gotterdammerung-rhine-0-against-390.png`.

Looked for and not found, at 1280, 390, 360 and 320: a row that turns
(none does on any tab, so no `turn` is wanted for the page as it is);
a mark on a word; a label or an arc outside its plate; a page wider
than its window; a heading or a tab that wraps badly. The glosses of
the three Word tabs, the five numbered ties of `brand` English, and
the head and foot of the page are clean at both widths.

## 4. Proposed for the reading

I changed nothing in `reading.json`. Each of these was tried in the
built copy only (`site/data/pieces/gotterdammerung.json`), photographed
after the seventh mending and again after its mend of 11:06 UTC, and
the built copy was then written again from the reading. The poet's
note 12 left the question to the pictures: whether color alone is
enough for a tab whose point is that a stave binds two lines.

### 4.1 Plate `norn`: set Armour beside Wagner, and one turn

```json
"beside": true,
"turn": { "p:19.14": 2 }
```

Why (as the page is: `shots/gotterdammerung-norn-*`; with the setting:
`shots/trial-beside/gotterdammerung-norn-*`, same names):

- **Stave**, the plate's first tab. Its point is that the lines pair
  off. With the setting the four staves that bind two lines are drawn
  as strokes from line to line (rows 1.0 to 2.0 twice, rows 3.0 to 4.0
  twice), which line under line they cannot be (fault 2). See
  `-norn-0-stave-1280.png` and `-390.png` in both folders.
- At 1280 the plate is 846 px (Stave) and 892 px (Dawn) for 1,054: the
  seven lines, both versions, the caption and the key in one window.
- The two labels, "Wagner" and "Armour", stand over their blocks
  (fault 3 is gone on this plate).
- **Dawn.** The glosses stand under the German alone, and Armour's
  one marked phrase in her own block (fault 5 is gone on this plate).
- On a phone the German stands whole, with every stroke, in about
  360 px; Armour's seven lines follow, then the caption.

The turn. With the setting, row p:19.14 (seven words, the longest of
either version) does not fit in a window of 320. The kit balances it
and turns after w4, which parts an adjective from its noun
(`shots/trial-beside/gotterdammerung-norn-0-stave-320.png`). Turned
after w2 the second part is the whole subject
(`shots/trial-beside-turn/gotterdammerung-norn-0-stave-320.png`). At
360 and wider the row stays whole, with or without the turn. If
`beside` is not set, no turn is wanted.

What it costs, measured (Stave / Dawn):

| window | plate now | with `beside` | type now | with `beside` |
|---|---|---|---|---|
| 1280 | 1,054 / 1,054 | 846 / 892 | 38.0 px | 27.4 px |
| 390 | 1,301 / 1,358 | 1,374 / 1,431 | 23.8 px | 18.6 px |
| 360 | 1,345 / 1,379 | 1,406 / 1,441 | 21.3 px | 16.7 px |
| 320 | 1,379 / 1,432 | 1,486 / 1,539 | 18.0 px | 16.5 px |

- On a phone the plate is 60 to 110 px longer, and the German is set
  smaller, because the two blocks share one size, fitted to row
  p:19.14 (and to the room of fault 4).
- On a phone, on Stave, Armour's seven unmarked lines stand between
  the marked German and its caption (fault 8, second part). The
  English is no longer under each German line; with seven short lines
  the eye finds its place by counting.

My judgment: set both. The tab the plate opens on then shows what its
caption says, at every width.

### 4.2 Plate `rhine`: set Armour beside Wagner

```json
"beside": true
```

Why (`shots/gotterdammerung-rhine-*` against
`shots/trial-beside/gotterdammerung-rhine-*`):

- **Against.** The three joins the reading names are drawn, at every
  width (`-rhine-0-against-1280.png`, `-390.png`, `-320.png`).
- **English.** Each language's staves are joined inside their own
  block, and the same colors tie the two: fault 1 is gone at every
  width (`-rhine-2-english-390.png`, `-320.png`). At 1280 one arc is
  wrong in a new way (fault 8, first part).
- At 1280 the plate is 1,202 px (Against, English) and 1,331 px
  (Knowing) for 1,528, with no bare paper, and the two labels stand
  over their blocks.
- Two stage directions of Armour's text, which the line-under-line
  form leaves out, stand over rows p:95.0 and p:97.0; the German
  column keeps a gap level with each.
- No row turns at 390, 360 or 320, so no `turn` goes with it.

What it costs, measured (Against / Knowing / English):

| window | plate now | with `beside` | type now | with `beside` |
|---|---|---|---|---|
| 1280 | 1,528 each | 1,202 / 1,331 / 1,202 | 34.0 px | 29.7 px |
| 390 | 1,638 / 1,841 / 1,718 | 1,832 / 2,035 / 1,912 | 21.0 px | 20.1 px |
| 360 | 1,668 / 1,851 / 1,729 | 1,835 / 2,018 / 1,896 | 18.8 px | 18.0 px |
| 320 | 1,684 / 1,922 / 1,745 | 1,857 / 2,095 / 1,917 | 16.5 px | 16.5 px |

- On a phone every tab is 165 to 195 px longer.
- On a phone, on Against, about 600 px of unmarked English stand
  between the marked German and its caption (fault 8, second part).
  And a reader with no German loses the English under each colored
  half, which now tells him what is set against what; he must take it
  from the caption, which does give all four in order.
- The caption of the English tab begins by saying where each version
  stands (Wagner's above, Armour's beneath). That stays true on a
  phone and is not true at 1280; the critic would have to reword that
  one sentence.

My judgment: set it. A wide window gains on all three tabs, and both
things the examiner left open on this plate (no stroke on Against, the
zigzag on English) are answered. The phone pays about 180 px a tab. If
the lead weighs the phone more, leave the plate as it is; fault 1 is
then the kit's to mend.

### 4.3 Plate `brand`: tried, and nothing proposed

Tried with `beside` at 10:21 UTC (scratch pictures, not kept) and
measured again at 11:38 under the present kit. Nothing on this plate
ties one German line to the next, so setting Armour under Wagner
breaks nothing up. And on a phone the five pairs of its English tab
are joined by a stroke from a word to the word under it; as two blocks
they would stand a screen apart, tied by number and color only. The
plate would be 174 px longer at 390, 148 at 360 and 113 at 320, and
its German smaller (25.5 px for 28.4 at 390). At 1280 it would be
shorter (1,301 px on Now and 1,227 on English, for 1,528). So this
plate would differ in form from the other two. I think that is right,
because the form follows what each plate marks; the lead may weigh the
sameness of the three plates above it.

### 4.4 Nothing else

No `heading`, `label`, `speakers` or `join` is proposed. The three
headings and the eight tab names read and wrap well at 1280, 390, 360
and 320 (at 320 the first heading takes two lines and breaks before
its verb). The `join` of Against ties the two halves of the second,
third and fourth statements, as the caption does; the first statement
has a line between its halves and is told by color. No `turn` is
wanted for the page as it is.

## 5. The reading

I found nothing of fact that I think is wrong. The facts of the Told
tab agree with each other: the four parts add up to the 2,026 lines;
each of the fourteen line numbers falls in the part that its `read`
names; the three passages are 7, 11 and 11 lines long, as the plates
have rows; the first telling (line 79) and the end of the gods (line
2,002) fall inside the first and the third passage, where the plates
mark them. The caption of Told fits the drawing: a line, marks on it,
the two places it names last in red. This was a check of the numbers
against each other, not a count; the examiner's counts stand.

Three things of wording, for the critic and not for me:

1. **Who Armour is** (fault 3). If the kit does not show the plate's
   two labels, one clause would do it, in "The passages" at the head
   of the page or in the first caption that names her (`norn`, Dawn):
   that the English under each line is Margaret Armour's, of 1911, as
   Sources has it.
2. **`rhine`, English: the caption's first sentence** says where each
   version stands. It holds only while the plate is set line under
   line (see 4.2).
3. **`brand`, Told: the `says` of line 1,263 holds a colon.** The line
   that speaks under the drawing is built as speaker, line number,
   colon, then the `says`; so that one line has two colons. A comma or
   a "that" in the `says` would mend it. The script leaves the words
   of the facts alone.

The key rows of the two Rhyme tabs say of several sounds that they
come back "from line to line" where no stroke from line to line is
drawn (fault 2). Those words are the kit's.

## 6. Pictures, times, and the picture tool's last line

All times are 3 October 2026, UTC (`date -u`).

- The kit's seventh mending was finished at 10:40, and a fault of it
  was mended at 11:06 (the lead's two notices). The kit's files were
  last changed at 11:05:49 (`plate.js`, `atlas.css`) and had not
  changed again at 11:42. Every picture in `shots/` is later than that.
- **Last build:** 11:39:52, `node build/pieces.mjs gotterdammerung`.
  The built copy is the reading's: all three plates line under line,
  no `beside`, no `turn`. No trial was made after it.
- **Last pictures:** 11:39:52 to 11:41:12, after that build and after
  my last change to the script (11:27:59):
  `node build/tools/shoot.mjs gotterdammerung --out remake/works/gotterdammerung/shots --page`
  and the same with `--widths 360,320` in place of `--page`.
- **The picture tool's last line, both times:**
  `nothing reported; now look at the pictures`
- I looked at them again. In the last run: every tab at 1280 and at
  390, and the head of the page at both widths. At 360 and 320 I
  looked in the runs of 11:14 and 11:31, under this same kit (at 320
  the Told, Stave, Dawn, Against, Now and the two English tabs; at
  360 Told and `brand` English); those pictures have the same heights,
  to the pixel, in the last run, and the Told drawing in the last
  build is the same picture, byte for byte, at all four widths. The
  heights also agree with the measures of sections 3 and 4.
- The lead's notice of 11:06 asks for new pictures of any plate with a
  dash inside a line of verse or a marked run. This piece has one: row
  p:317.9 of `brand`, whose first token joins two words with a dash;
  the mark of pair 5 on the English tab begins after that dash. In
  the last pictures the row stands whole, with its mark, at all four
  widths. Rows 0.0 and 6.0 of `norn` end in a dash; they stand whole
  too.
- **The checker,** 11:41:
  `node build/tools/check-reading.mjs gotterdammerung` ends "no
  problems", "no warnings", "the printed notes are fit to print".
  `reading.json` was last changed at 09:04:29, by the examiner.

What is in `shots/`:

- 32 pictures of the tabs, `gotterdammerung-<plate>-<n>-<tab>-<width>.png`:
  eight tabs at 1280, 390, 360 and 320.
- 16 pictures of the page, `gotterdammerung-page-1280-0.png` to `-6.png`
  and `gotterdammerung-page-390-0.png` to `-8.png`.
- `close/`, taken at 11:41 with a scratch tool of mine at twice the
  size: `told-1280-pointer.png` (the pointer on one of Hagen's marks),
  `told-390-touch.png` (a touch on one of Brünnhilde's, with the link
  in the line that speaks), `told-1280-table.png` (the table open);
  and, at three times the size, `rhine-english-1280-row-3.png` (the
  slate letters of fault 6).
- `trial-beside/`, taken 11:10 to 11:11: the plates `norn` and `rhine`
  with `"beside": true` in the built copy, every tab at 1280, 390 and
  320 (15 pictures; section 4).
- `trial-beside-turn/`, 11:11: `norn` with `beside` and the turn of
  4.1, both tabs at 320.

Trials on the built copy, each followed by a build from the reading:
`beside` on all three plates (10:21, scratch pictures only); `beside`
on `norn` and `rhine`, and the turn; the Rhyme tabs taken out, to
measure the type of fault 4; the facts of Told changed, to try the
drawing (section 2); `beside` on `brand` alone, to measure it (4.3).
None of them touched `reading.json`.

Scratch tools of mine (in the scratchpad, not handed in; they only
read the page): one takes a close picture of one tab, with the pointer
on a mark or a touch; one prints, for each tab and width, the plate's
height, its type size, and the rows that stand on two lines. The
measures in sections 3 and 4 are from the second, run at 10:42 to
10:47 and run again at 11:09 (the trial), 11:12 (the page as it is)
and 11:13 (the Rhyme tabs out), after the kit's last change: every
number came out the same.

**Refused by the permission system:** once, at 11:00. A command that
began by removing the three older pictures in `shots/close/` (an `rm`
with a shell variable in its path) was stopped by a built-in safety
check before any of it ran. I did not remove them in any other way.
The pictures were then taken again under the same names, which
overwrites the old ones, so the three in `close/` are the new ones.
Nothing else was refused.

