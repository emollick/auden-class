# Orpheus: the artist's record

Work began 2026-10-03 at 08:48 UTC with a first build and a first set
of pictures. Those pictures are gone, and so are three later sets.
Every picture now in `shots/` was taken at the end, between 11:10 and
11:17 UTC, after a fresh build: that is after the seventh mending of
the kit (its notes date it 10:13 to 10:40 UTC), after the fault of
that mending was itself mended (11:06 UTC), and after the examiner had
finished (09:34 UTC). The times are in part 5.

Words of the libretto are never written in this file. Places are given
by plate, tab, row and word number (rows and words counted from 0, as
the reading counts them).

What I wrote: `site/js/pieces/orpheus.js` (the two drawings), this
file, and the pictures in `shots/`. No style sheet was needed. I
changed nothing in `reading.json`, `notes.md` or `exam.md`, nothing in
the kit and nothing in the build.

## 1. What I drew

Two shape tabs had no drawing when I began. The page printed their
facts as a bare table with the lists left empty.

### Plate `aria`, tab "Rondo": the aria bar by bar

**The form.** One line runs across the drawing: the 70 bars of the
aria, to scale, from bar 1 at the left edge to bar 70 at the right. A
tick stands where each section begins and at the end, with the number
of the bar under it.

- **On the line** stand the two opening lines, a red block each time
  the score has them: three blocks. Over the first is its label in red
  (the section's `lines` and `name`). Over the line run the tempo marks
  as a score has them: the first tempo at bar 1, and the return to it
  over the second and third blocks.
- **Under the line**, each in a row of its own and at its own bars,
  stands what comes between: the plea, then the last three lines. A
  block is solid while the first pace holds and in outline from the bar
  where the slower tempo is marked. Two upright strokes after it mark
  the pause it ends on. Its lines and name stand over it, its tempo
  mark and its ending under it.
- **At the foot**, a heavy rule at each end marks the bars where the
  orchestra plays alone, with those words beside each.
- **The key** gives red its meaning and, with it, the three counts the
  reading has for the opening lines: times in the score, bars out of
  the whole, times in the libretto. A box in outline is named by the
  slower tempo.
- **Folded under it** ("The numbers"): a row for each section with its
  lines, first bar, last bar and count of bars, and its tempo on a wide
  plate.
- **Pointing at a section** makes the line under the key say its bars,
  its lines and name, its tempo, how it ends, and for the last three
  lines what the reading says of the flats.

**Why this form.** The caption says three things: the two lines come
three times, they take about half of the 70 bars, and each thing
between them slows, stops and gives way to them. All three are about
time and proportion, so the drawing is a line of time to scale. Only
what returns stands on the line, so the eye reads red, gap, red, gap,
red, and the three reds can be weighed against the whole line. Each gap
is filled from below by the thing that takes it. The outline begins
where the slowing begins, the two strokes stand where the pause is, and
the next red block begins exactly over them: slows, stops, gives way.

**What I did not choose.** A list of sections from top to bottom shows
neither the proportion nor the return. One strip with every section in
it, labelled above, looks like a bar code and its labels collide under
334 px. Arcs from return to return would add ink and say nothing that
color and level do not already say.

**How it keeps to the facts.** Nothing is typed in the script: every
number, name and tempo is read from `lens.facts` when the page runs.
Three things are worked out from the facts and are worth knowing:

- A section's first bar is not in the built facts. The reading gives
  it under the key `from`, which the build treats as a working note and
  leaves out. The script takes it as `to - bars + 1`. The seven
  sections then follow each other from bar 1 to bar 70 with no gap.
- The bar where a section slows is read out of its `tempo` (a word,
  then "from bar", then a number). If the examiner rewords a tempo so
  that this cannot be read, that block is drawn solid and the words
  still stand under it.
- The two strokes are drawn where `ends` has the word "pause".

If `sections` is missing, or a section has no `to` or no `bars`, the
script throws and the kit shows the plain table.

**At each width.** 607 px: as described. 334, 304 and 264 px: the same
drawing, 3.8 px to a bar at the narrowest. A label that would run off
the right edge is moved left until it fits (on a phone, the words
under the second of the two blocks under the line). The bar numbers
are dropped where two would touch; none is dropped at these widths.

**Drawing in.** Sections appear from left to right, 190 ms apart. The
whole is there in 2.4 seconds, 2.8 with the row proposed below.

### Plate `song`, tab "Strophes": three strophes side by side

**The form.** Three small drawings of the same size stand side by
side, one to a strophe, at every width.

- In each, **a stroke to each of the six lines**, as long as its count
  of syllables in the facts (seven, seven, five, and again). The verb
  that begins the strophe is set at the head of its first stroke and
  the word that ends it at the end of its last. Over each stands its
  number, the words "shown here" for the strophe the plate prints, and
  the verb's English.
- Under each, **what answers**, in red: the one thing that changes.
- Under that, **the recitative** that follows the strophe: under each
  column on a wide plate, as a list of three on a phone.
- Then, under a heading that is the key's own name, **every place
  where the libretto has the verb**: five places in order on a line of
  dots, the place in italic and who answers or orders in ink.
- **The key** names the stroke and gives the counts, and after them
  what the examiner's key says of how the sevens are counted, so that
  a reader who counts six syllables in a line on the Rhyme tab is told
  why the stroke is a seven.
- **Folded under it**: everything the reading says of every strophe.
- **Pointing at a strophe** gives its verb and English, its setting,
  what it says and its rhymes.

**Why this form.** The caption says the strophes are built alike, begin
with the same line but for the verb, and end on the same word. Three
equal shapes show "alike" before a word is read. The only words set in
them are the two the caption names, so the eye finds three different
verbs at one place and one word three times at another. Red is kept for
what answers, which is the lens's own subject (`what`). The list under
it carries the caption's last sentence: its last row is the aria.

**What I did not choose.** The table says the same things and shows
none of them. One strophe drawn large with the other two as notes hides
that they are alike. Rhyme arcs would be a second idea, and the Rhyme
tab already draws them for the strophe shown.

**At each width.** 607 px: columns of 184 px, the two words in the
display face. 334, 304 and 264 px: columns of 103, 93 and 80 px, the
words in italic at 13 px. Where one of the three answers has no room
beside its label, all three go under their labels, so the red words
stay level (304 and 264 px). On a wide plate the place and what is said there
share a line; on a phone they take two.

**Drawing in.** One strophe after another, 400 ms apart, then the
list. The whole is there in 2.7 seconds.

**Words of my own on the page.** Only joining words: "lines", "bars",
"ends", "of the", "answers:", "recitative:", "after", "shown here",
"a line, as long as its count of syllables", "the sevens count", and
in the pointer lines "Strophe", "Setting:", "Rhymes:", "Bars a to b".
The folded table of the Rondo heads two columns "from bar" and "to
bar". Most are the names of the facts' own keys. Every name, number,
tempo and word of the libretto comes from the facts.

With the key proposed in part 2, and only then, three more things
stand on the page: the key's own name as a heading; in the pointer
line of a printed group, "Lines a to b, as the libretto prints them:
in the score, bars c to d"; and in the pointer line of a sung section
that the printed order leaves over, "The libretto does not print the
lines here." The last is the caption's own claim, said of the one
block it is true of.

## 2. Proposed for the reading

I changed nothing in `reading.json`. Two things are proposed: a new
key, which the script already draws when it is there, and a clearer
name for a list.

### A new key in the facts of plate `aria`, tab "Rondo"

Exactly this, beside `sections` and `the opening lines`:

```json
"the libretto prints": ["1 to 4", "5 to 7", "1 and 2"]
```

**What it says.** The groups of lines as the libretto prints the aria,
in the order it prints them, each written the way a section's `lines`
is written ("1 and 2", "5 to 7").

**Its ground.** The libretto of 1879, p. 20 (the image kept at
`remake/works/orpheus/.src/p21_small.jpg`, which I looked at twice,
the second time just before the last pictures). The page sets the first
line of a group further left than
the lines after it. Read that way it prints line 1 with lines 2 to 4
set in under it, then line 5 with lines 6 and 7 set in, then line 1
again with line 2 set in. The examiner's record reads the page the same
way (`exam.md`, the last item of the part on the two shape tabs) and
adds that lines 3 and 4 are not a printed group of their own, which is
why I do not propose four groups. The fact agrees with one the reading
already has: `the opening lines` gives 2 for "times in the libretto",
and two of the three groups hold lines 1 and 2.

**Why the picture needs it.** The caption says: the libretto prints
the two lines twice, so the middle return is the score's. Without the
key the drawing shows three red blocks and the key under it says "2
times in the libretto", but nothing shows which of the three the
libretto lacks. See `shots/orpheus-aria-3-rondo-1280.png` (as the
reading stands) beside `shots/trial-libretto-prints-1280.png` (with the
key).

**What the script draws from it.** Under the score, on the same scale
of bars and under a heading that is the key's own name, a stroke for
each printed line, set under the bars that sing it: red for the opening
lines, ink for the others. A bracket under each printed group carries
its lines by number. The middle red block has nothing under it, and
that bare place is the caption's point. Pointing at the middle block
adds to its line: "The libretto does not print the lines here."
Pointing at a group gives the bars that set it and keeps those bars
dark.

How a printed line finds its bars: the script goes through the printed
lines in order and gives each to the next section of the score that
has that line. A sung section that is left over is the score's own.
With these facts the first group goes to bars 7 to 29, the second to
bars 40 to 48, the third to bars 49 to 63, and bars 30 to 39 are left
over.

**The pictures of the trial.** For these the key was put into the
built copy `site/data/pieces/orpheus.json` only, and the build was run
again straight after, so the built copy is the reading's again.

- `shots/trial-libretto-prints-1280.png`, `-390.png`, `-360.png`,
  `-320.png`: the whole tab, taken with the picture tool.
- `shots/trial-libretto-prints-pointer-middle-1280.png`: the pointer
  on the middle return.
- `shots/trial-libretto-prints-pointer-group-390.png`: the pointer on
  the first printed group.

**If the lead would rather not set it.** Nothing breaks. Without the
key the row is not drawn and the rest of the drawing is the same. A
list of four (lines 1 and 2, 3 and 4, 5 to 7, 1 and 2) would draw as
well, with four brackets, but it would say more than the page does.

### A clearer name for one list (plate `song`, tab "Strophes")

The drawing sets the name of the facts' list of places over that list
as its heading: it prints "the verb in the libretto". Just above it
stand three strophes that each begin with a different verb, and the
caption says "its verb" of those. The list is about another verb, the
one that ends each strophe. A stranger has to read the rows to learn
which verb is meant (`shots/orpheus-song-1-strophes-1280.png`).

I would rename the key, and change nothing in its five entries:

```json
"the verb for answering in the libretto": [ ...the same five entries... ]
```

The script does not know this list by its name. It takes the list of
entries that each have a `place`, and prints whatever the list is
called. So the heading follows a new name by itself, and takes two
lines where one is too long (320). Trial, made from a private copy of
the built data: `shots/trial-verb-heading-1280.png` and
`shots/trial-verb-heading-320.png`. If the name stays, nothing breaks.

### Nothing else is proposed

- **`turn`**: none. I looked at every tab at 360 and 320 as well as
  390, in the pictures taken after the seventh mending, which changed
  where lines turn. No line of `aria` or `song` turns at any width. On
  `terms` two lines turn, and the kit's rule turns both in the right
  place:
  second passage, row p:0.1, after word 5 (at 360 and 320), and first
  passage, row 1.0, after word 5 (at 320). Each is the stop after the
  six words that the Return tab marks as one thing, so that run stays
  whole (`shots/orpheus-terms-1-return-320.png`). The one cost is on
  the Measure tab and is the kit's: see the second of the kit's faults
  in part 3.
- **`heading`, `beside`, `label`**: none. `terms` already stands its
  two passages side by side on a wide plate, and that is right for it.
- **`join`**: none. "Calls" has `join: "none"`, and two colors with a
  key say what it has to say without strokes.
- **`speakers`** (new with the sixth mending): none. No speaker's name
  stands over a row on this piece. The labels of the two passages of
  `terms` say who speaks.

## 3. Faults

Every picture named in this part was taken after the seventh mending
of the kit and after the mend of its own fault (11:06 UTC), and every
measure given here was taken again in the page between 11:17 and 11:21
UTC. The times are in part 5. The seventh mending mends none of the
faults below: I looked for each again in the new pictures and found
each as before. Nothing here is worked round in the script.

No line of this piece holds a dash, inside a marked run or outside
one, so the fault that stood from 10:40 to 11:06 could not touch these
plates. I checked the built text for one, and the pictures bear it out:
57 of the 68 pictures are the same, byte for byte, as the set I took
at 10:44. Ten of the 11 that differ are the ones my own last change to
the script touches. The eleventh is `orpheus-aria-1-endings-1280.png`,
which comes out in one of two states from take to take: I took it
three more times and compared, and the two states differ in one pixel,
by 5 parts in 255.

### The kit's, worst first

**1. The labels of a passage and of its version are dropped when the
version is set line under line.**
Where: `aria` and `song`, every passage tab, every width.
The reading gives each of these plates a `label` for the passage (the
librettist's Italian) and a `label` for the pair (the translator's
English). Neither is anywhere on the plate. I checked the page itself
and not only the pictures: on every tab, at 1280 and at 390, the two
labels are not in the plate. On `terms`, whose two passages stand side
by side, both labels show. In `kit/plate.js` the two labels are set
only where the second passage stands as a block.
What a stranger loses: small italic English stands under every line
and nothing says whose it is. It is the translator's version for
singing, and it moves the sense in places. The English tab of `song`
says so in its caption; the `aria` plate never does, and a reader may
take the English for this site's own.
Pictures: `orpheus-aria-2-calls-1280.png`, `orpheus-aria-0-count-390.png`,
`orpheus-song-0-rhyme-1280.png`.

**2. On the Beat tab, a line that turns where vowels run together
across the stop loses that mark.**
Where: `terms`, tab "Measure". At 360 and 320: second passage, row
p:0.1, which turns after word 5. At 320 also: first passage, row 1.0,
which turns after word 5.
- Row p:0.1: at 390 the line is whole and has three arcs under it.
  Turned, it has two: the arc from word 5 to word 6 is gone. Remark 4
  says the vowels run together across the first two exclamation marks.
  Only the second still shows it.
- Row 1.0: remark 1 says three vowels meet across the semicolon and
  count as one syllable. Turned, the first of the three is at the end
  of the upper part with no mark of the count under it, and the arc
  under words 6 and 7 hangs to the left of the lower part's rule.
The count itself is still right (six marks and five). The turn is the
right one for the sense and for the Return tab, so I propose no `turn`.
Pictures: `orpheus-terms-2-measure-360.png`, `orpheus-terms-2-measure-320.png`;
closer, `close-terms-measure-turn-360.png` and `close-terms-measure-turn-320.png`
beside `close-terms-measure-whole-390.png`.

**3. A key set across the plate breaks its columns inside a group.**
Where: `terms`, tab "Measure", 1280.
The key runs in three columns under the caption. The four rows that
say what the marks mean are split two and two between the first column
and the second, and the four numbered remarks two and two between the
second and the third. The red dot's meaning heads the middle column,
away from the black dot's. A break between the marks and the remarks
would read as two lists.
Picture: `orpheus-terms-2-measure-1280.png`.

**4. The key shows a mark the plate does not have.**
Where: `aria`, tab "Count", every width.
The key's sample for "a light stress" is a small black dot. The plate
has six light stresses and every one is a small red dot (rows 0.0, 1.0,
2.1, 3.0 and twice in 3.1), because each falls off the two fixed
places. No small black dot is on the plate. I counted the dots in the
page: six small red, fourteen large black, one large red. A reader has
to put two rows of the key together to read the commonest small mark.
Pictures: `orpheus-aria-0-count-1280.png`; closer,
`close-aria-count-light-stress-1280.png` and `close-aria-count-key-1280.png`.

**5. Bare room under every line on the tabs that do not use it.**
Where: `aria`, tabs "Endings" and "Calls", every width.
Every tab keeps the room that the Count tab's rule and dots need
between a line and its English: 41 px at 1280 and 31 px at 390, from
the foot of the letters to the top of the English. On Count the marks
fill it. On Endings and Calls it is bare, the English stands almost as
far from its own line as from the next (about 55 px at 1280), and the
plate is 1,291 px tall at 1280 on all three tabs, taller than a laptop
window. On `song`, which has no Beat tab, the English is 18 px under
its line at 390 and reads as one with it.
On a wide plate the caption and the key stand beside the first lines
and do not follow the reader down: by the fifth line the right half of
the plate is bare and the caption is out of sight
(`orpheus-page-1280-1.png`, the foot of the plate on Count).
This may be meant: the lines keep their place when the tab changes. I
report it because the aria is the first plate and the tallest.
Pictures: `orpheus-aria-1-endings-1280.png`, `orpheus-aria-2-calls-390.png`.

**6. The key under a drawing leaves its last word alone.**
Where: `song`, tab "Strophes", 390.
The key under my drawing is one row of 41 words. At 390 it takes four
lines and the fourth holds one word. (At 1280 it breaks 27 and 14, at
360 the last line has four words, at 320 nine.) The seventh mending
sets the notes of a drawing like a caption, and the style sheet does
the same for its pointer line; the key of a drawing (`.dg-keys`, made
by `d.keys`) is not among them. The words are the facts' own, so I did
not shorten them, and I did not bind the last two words in the script.
Measured in the page: no note and no caption on this piece ends on a
single word at any of the four widths, and this key does.
Pictures: `orpheus-song-1-strophes-390.png`; closer,
`close-strophes-numbers-open-390.png`.

**7. A passage's label turns and leaves its last word alone.**
Where: `terms`, all three tabs, 360.
The label over the second passage has eight words. At 390 it keeps to
one line. At 360 it takes two, and the second holds one word. (At 320
two words go down, which reads well enough.) The seventh mending sets
notes, remarks and key rows so that no last word stands alone; a
passage's label is not among them.
Pictures: `orpheus-terms-0-words-360.png`, `orpheus-terms-1-return-360.png`,
`orpheus-terms-2-measure-360.png`.

**8. On a tab that marks only the lower part of a turned line, the
upper part still keeps the room of a mark.** Small, and may be meant.
Where: `terms`, tab "Words", second passage, row p:0.1, at 360 and 320.
The line turns after word 5. On this tab only word 6, in the lower
part, has a gloss. The upper part has none, yet the lower part stands
57 px under it, which is the step from one line to the next (56 px).
Only the set-in says the two are one line. The seventh mending brings
the parts of a turned line close where the tab does not mark the line;
it could do the same for a part that the tab does not mark.
Pictures: `orpheus-terms-0-words-360.png`, `orpheus-terms-0-words-320.png`.

**9. A caption parts "Act" from its number.** The smallest.
Where: `song`, tab "Strophes", 390.
In the caption's last sentence a line ends on the word "Act" and the
next begins with its figure. The kit binds such a word to its number
in a plate's subtitle; a caption is not treated so. I looked for the
same in every caption, note and key of the piece at four widths and
found this one place.
Picture: `orpheus-song-1-strophes-390.png`.

### Struck since my first pictures

- `aria`, "Endings": two sounds that return in rows 0.0 and 1.0 have
  three points under each place and no stroke from line to line. The
  key now shows the three points and says what they mean. Mark and key
  agree (`orpheus-aria-1-endings-1280.png`).

### Mine, found in my own pictures and mended in the script

None of these is left. They are listed so that the lead knows what was
looked for.

- The two shape tabs were bare tables with their lists left empty. Now
  drawn.
- Pointing at a section made its block stay dark while its label went
  pale with the rest. A section's label, tempo mark and words now stay
  dark with it, and the whole of its label answers the pointer, not
  only the block.
- The words "orchestra alone" stood once, in the middle of their row,
  under nothing. They now stand beside each of the two rules.
- At 320 one strophe's answer fell to a second row and the other two
  did not. All three now go under their labels together.
- When the examiner added a long entry to "every strophe", the key
  grew to five lines. The key now gives the counts and how the sevens
  are counted, and the rest is folded under "The numbers".
- The drawing-in ran past three seconds. It is now under 2.9.
- An answer too long for its column would have run into the next
  strophe, a tempo mark too long for its place into the next mark, and
  a heading too long for a phone off the plate. Tried with made-up
  facts in a private copy: the answer takes more lines, the mark is
  left to the pointer line and the table, the heading takes two lines.
- In the Rondo's key a line ended on a bare figure, parted from the
  words it counts (at 390 after the last of the three counts' figures,
  at 360 and 320 inside the second count). Each count now keeps with
  its name, so the key turns only between counts
  (`orpheus-aria-3-rondo-390.png`, `-360.png`, `-320.png`). In the key
  of the Strophes the six counts of syllables keep together (at 320
  they stood three and three on two lines), and in the pointer lines a
  run of bars keeps whole. This is care for my own words. The last
  word left alone in a key is another matter and the kit's: see the
  sixth of its faults.

## 4. The reading

I found nothing in the captions or the facts that the pictures or the
libretto page contradict. The bars add up (70, of which 36 are the
opening lines), every section follows the one before, and the page of
the libretto prints what the reading says it prints. Four smaller
things, for the lead to weigh:

**1. A caption's last claim has no mark yet.** `aria`, "Rondo": that
the libretto prints the two lines twice, so that the middle return is
the score's. The proposed key in part 2 draws it.

**2. A list whose name does not say which verb.** `song`, "Strophes":
see part 2.

**3. A caption's first claim is marked for two of its three words.**
`aria`, "Endings": the caption opens with three lines that stop on a
word cut short (the last words of rows 1.0, 2.1 and 3.2). Rows 2.1 and
3.2 carry the color of their rhyme. The last word of row 1.0 carries
only the small point of a line that rhymes with none, so at rest the
plate shows two cut words, not three. All three light when their words
in the caption are pointed at, so nothing is false. A reader on a
phone has to touch the caption to see the third
(`shots/orpheus-aria-1-endings-390.png`).

**4. The type of the Italian as it is hosted** (the text, not the
captions; I did not touch it). Seen at 38 and 42 px on a wide plate:
- A word space stands before some stops and not before others of the
  same kind. With a space: `aria` row 0.0 word 3 and row 2.0 word 0;
  `terms` row 1.0 word 5, second passage rows p:0.0 word 4 and p:0.1
  words 5, 7 and 9; `song` row 0.0 word 4 and row 1.0 word 4. Without:
  `aria` row 1.0 word 5 and row 2.0 words 2 and 3. In `song` row 0.0
  the space stands before a comma and looks like a slip
  (`shots/orpheus-song-0-rhyme-1280.png`). The print of 1879 is itself
  uneven on p. 20, with a space before some of these stops and none
  before others, so the hosted text may only be following it.
- The apostrophe is the typewriter's straight one in `terms`, second
  passage, row p:0.3 word 1 (and so at the head of that word's note),
  and in `song` row 0.2 word 1 and row 1.1 word 0, where a space
  follows it. `aria` row 3.0 word 3 is the same word as the first of
  these and has the curved one (`shots/orpheus-terms-0-words-1280.png`
  beside `shots/orpheus-aria-2-calls-1280.png`).

I checked both lists against the built text by row and word number
after the last pictures (about 11:25 UTC): every place named is as
said.

## 5. The last run

**What stood when I took the pictures.** The reading was last changed
at 09:30:53 UTC, the kit at 11:05:49 UTC (`atlas.css` and `plate.js`,
the mend of the seventh mending's fault), and my script at 11:09:37
UTC. All times are from `date -u` on 2026-10-03.

**The commands, in order, from `/home/user/auden-course`.**

1. `node --check site/js/pieces/orpheus.js`, then
   `node build/pieces.mjs orpheus`. Begun 11:10:57.
2. The trial of the proposed key. The key was put into the built copy
   `site/data/pieces/orpheus.json` and nowhere else, then
   `node build/tools/shoot.mjs orpheus --out <my scratch folder>
   --widths 1280,390,360,320 --plate aria --lens 3`, and its four
   pictures were copied into `shots/` under the names
   `trial-libretto-prints-<width>.png`. Then
   `node build/pieces.mjs orpheus` again. The built copy was compared
   with one kept from step 1 (`cmp`): the same, at 11:11:31. The built
   copy is the reading's.
3. `node build/tools/shoot.mjs orpheus --out
   remake/works/orpheus/shots --widths 360,320`.
4. `node build/tools/shoot.mjs orpheus --out
   remake/works/orpheus/shots --page`, the command ARTIST.md names.
   Begun 11:12:40, done 11:13:54.
5. The closer pictures and the pictures with the pointer on a mark,
   taken with a script of my own that opens the same site folder in
   the same browser as the picture tool. Done 11:16:24. The two named
   `trial-verb-heading` were made from a private copy of the built
   data with the list renamed; that copy was never in the site.

**What the picture tool printed.** The last line of each of its three
runs (steps 2, 3 and 4) was:

    nothing reported; now look at the pictures

**After the pictures.** Between 11:17 and 11:22 I measured in the page
what part 3 gives in figures, and took `aria` at 1280 three more times
into my scratch folder to learn why one picture differs by a pixel.
None of that wrote into the site or into `shots/`. At 11:30, when I
handed in, the kit, the reading and the build were as they stood for
the pictures, and the built copy was still the reading's, with no
trial key in it.

**The pictures: 68, all in `shots/`.**
- 40 named `orpheus-<plate>-<n>-<tab>-<width>.png`: the ten tabs at
  1280, 390, 360 and 320.
- 11 named `orpheus-page-<width>-<n>.png`: the whole page at 1280
  (five) and at 390 (six).
- 8 named `trial-…`: the two things proposed in part 2.
- 9 named `close-…`: the pointer on a mark of each drawing, "The
  numbers" unfolded under each, and the closer views that the faults
  of part 3 name.

**Refused by the permission system.** Nothing was refused.

**Not done, and why.** I did not change `reading.json`, `notes.md`,
`exam.md`, the kit, the style sheet or the build. I wrote no style
sheet of my own: none was needed.
