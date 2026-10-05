# The Family Reunion: the artist's notes

Piece `family-reunion`. One plate, `play`, with four tabs, all of kind
`shape`. No passage is printed (the play is in copyright), so the page
rests on four drawings, all in `site/js/pieces/family-reunion.js`, keyed
`play:0` to `play:3`. No stylesheet was needed. No word of the play is
typed in this file or in the script: the two quoted lines are read from
the facts when the page runs, as is every name and every number.

Nothing in `reading.json` was changed: the heading ("Four views of the
play") and the four labels (Line, Chorus, Greek, Sight) read and wrap
well at every width, and no drawing needed a number the facts did not
hold, so no key was added.

Pictures are in `shots/`, taken last at 07:52 UTC on 3 October, at
1280, 390, 360 and 320 px: after the kit's third mending, and after a
further change to the kit at 07:44 that KIT-CHANGES.md does not yet
list (the line under the key now says how it is made to speak).

## 1. What the page looked like before any drawing

First pictures, about 06:10, with the kit's plain tables in place (those
pictures are replaced by the present ones).

- Every tab was the plain table of its facts: 3,100 to 5,900 px tall at
  1280 px with columns cut off at the right, 3,500 to 6,400 px tall at
  390 px, the caption never on screen with what it speaks of. Mended by
  the four drawings (section 2).
- No "Read on" at the foot of the page. The kit's or the reading's:
  section 3, still there.
- The plate's `noTextWhy` printed nowhere. The kit's: section 3, still
  there.

## 2. The drawings

### Line (tab 1)

What the reader should see at once: a rule of three stresses and one
pause; one line that keeps it and one that does not; lines of no fixed
length. Form, from the top:

- the rule in its two figures (`rule.stresses`, `rule.pauses`), with the
  reading's account of it beside them (`rule.say`), under them on a phone;
- the two quoted lines (`lines[].quote`), each under its speaker, scene
  and page, both in one size of type, the stressed syllables heavy as on
  every other plate of the site. Under each a hairline as long as the
  line, parted by two short strokes where the pause falls, a dot on it
  under each stress (`voice`), and a red ring under the stress that can
  also be heard (`voiceWithAFifth`). Under that the reading's own count:
  syllables, stresses, `sides`, and "It keeps the rule." or "The rule
  asks 3." (`keepsTheRule`, `stressesByTheRule`);
- the lines of the first speech (`lengths.syllables`), each a row of
  dashes, a dash to a syllable, from one margin, so that the ragged
  right edge is the varying length. The shortest and the longest are red
  and carry their figures, the two the caption names.

Why this form: the two lines are the only passage the plate has, so they
are set as a passage and marked as the Beat lens marks one. There is no
meter to rule under them, so the rule under each is the line itself.
Syllables are divided by the kit's `syllables()`; where its division and
the marks disagree, the word is marked whole from `stressed`.

The second line is not labelled as the one Auden heard five in: the
reading says only that it "appears to be". The drawing says "4 stresses
or 5" and leaves Auden to the caption.

The pointer on a line says where it stands in the play (`inThePlay`),
and on the red ring what the reading says of that stress
(`mayBeStressed[].say`); on a line of the speech, its number and its
syllables.

Narrow pages: the type is fitted to the width (24 px at most, 17 at
least). At 360 and 320 px the second line turns, at the pause; the part
after the turn hangs in, as the kit sets a turned line, and the pause
strokes stand at the end of the first part, as on the Beat lens. What
the pointer says of the two lines is also folded under the drawing
("The lines in the play").

### Chorus (tab 2)

What the reader should see at once: four persons; five places in a play
of six scenes; much said together and a little said alone; two scenes
with no chorus, and a red ring in each. Form:

- the four by name, with what the list of persons says of each
  (`members`);
- the play page by page as one line, a rule to each scene (`scenes`),
  the two parts named; a numbered stroke where each chorus begins
  (`choruses[].page`), a red ring where the stage directions show the
  Eumenides (`eumenidesPage`);
- a row to each place, all five on one scale: a solid bar as long as the
  words spoken together, then a box in outline to each of the four, as
  long as the words he or she speaks alone (`apart[].words`); the order
  of the voices under it (`order`); the two figures at the right;
- the totals in one line (`totals`);
- what is said at each place, in the reading's paraphrase, folded away
  under the drawing at every width (some 2,000 characters: too much to
  stand in the rows without burying the bars).

Why rows of bars and not columns standing on the page line: the words
alone run from 12 to 21 to a speaker against as many as 286 together,
and only side by side on one scale do the small boxes stay legible. The
numbers on the strokes tie the two parts of the drawing together.

The solid bar is the total of `wordsTogether`. At three places the four
speak together twice, before and after the single voices; the facts hold
only the total, so the bar is one piece and the order is given in words.

The pointer on a scene says its place and who is on the stage (`place`,
`onStage`), which the drawing has no room for. On a row, or on its
numbered stroke, it says the figures of the place with the words of
each single voice, and the row and its stroke stay dark together. On a
box it says who speaks and of what (`about`); on a solid bar, where the
page is wide, what the four say together (`together`).

Narrow pages: scenes are named by `id` (I.i) in place of their names.

### Greek (tab 3)

What the reader should see at once: eight points of one story, four kept
and four changed, and what each change is. Form: two columns, the Greek
story and the play, a row to each point (`pairs`), joined across the
gutter by a rung: whole and in ink where the play keeps the point,
parted and in red, the far half a step lower, where it changes it. Over
the play's column the row says "kept", or in red what the change is
(`turn`). Each account stands close under its own head (`greek`,
`play`). The point that has `read` is a link to its place in the
Agamemnon printed on this site. Under the rows the name the play gives
the pursuers (`name`): the word, its meaning, and its two counts as
large figures (`timesSpoken`, `timesInStageDirections`), then where the
name stands in the play (`inThePlay`).

Why this form: it is ARTIST.md's "two columns joined by lines for what
answers what", and the break in a rung is the change itself.

Narrow pages: there is no room for two columns of prose, so a row is the
point, its rung at the right, and "kept" or the turn in red under the
point. The glance (four whole rungs, four parted, each with its turn)
fits one screen. The two accounts of each point, the link and the note
on the name are folded under the drawing ("The two stories, point by
point").

### Sight (tab 4)

What the reader should see at once: who sees and who does not, as two
lists side by side. Form: the four lists of the facts (`sees`,
`doesNotSee`, `notSaid`, `neverArrive`), two and two, each under its
head with its count. A filled dot for one who sees, a ring for one who
does not, no mark where the play does not say, a short broken stroke
for the two who never arrive. After a name, a small red ring for each
time the Eumenides are shown while that person is on the stage
(`shown[].onStage`): the same red ring as on the Chorus tab. Under each
name what the list of persons says (`role`) and, where the page is
wide, what the play shows (`say`). Then, each under a hairline:

- the two sentences on the audience (`audience`), which is the one fact
  of this tab the caption does not speak of and which says what the red
  rings are;
- Harry's word with its page, its meaning and what he says of it
  (`election`);
- what is said of John, a row to each saying: who, on what page, and
  what (`john`).

Narrow pages: the lists keep their two columns down to 304 px. At 264 px
(a window of 320) the longest name has no room in half the width, so the
four lists stand one under the other. What the play shows of each
person, and the sentences on the audience, are folded under the drawing
("What the play shows of each").

### Common to the four

- One plate, one grammar. A red ring is a thing shown or heard on the
  stage (a stress that can be heard, the Eumenides shown); ink dots and
  bars are counts; hairlines divide; red otherwise marks only what the
  caption singles out (the shortest and longest line, the changes).
- Words follow the kit's five classes. Three things are set otherwise,
  each for a reason: the two quoted lines are in the kit's own verse
  type (`tx`, syllables `sy s0/s1/s2`), because they are the passage and
  must be able to turn on a phone; a heading that may have to turn over
  is an HTML note set exactly as `dg-lab`; and the paraphrases that are
  to be read as prose (Greek, Sight, John) are upright in the body
  color at the kit's note size, as other pieces set theirs.
- What the pointer says is kept short: a scene's place and persons, a
  row's figures with the words of each single voice, what one voice
  says alone, where a quoted line stands in the play, the pages for a
  person. On a phone, where a tap speaks far from the mark (section 3),
  each tab has a fold under its key that holds the same prose. Only two
  short things are left to the tap alone there: a scene's place and
  persons (Chorus) and the number of a line of the speech (Line).
- Every drawing lays itself out from `d.w` and was looked at at 264,
  304, 334, 607 and 705 px (windows of 320, 360, 390, 1280 and 820).
  Drawing in takes under three seconds; with reduced motion everything
  is simply there.
- If a fact the drawing cannot do without is missing (`rule`, `lines`,
  `scenes`, `choruses`, `pairs`, every list of persons), the script
  throws and the kit shows the plain table. Everything else is optional
  and is left out without a gap.

## 3. Faults, and whose they are

### Seen in my own drawings, and mended

1. Sight, 390 px: the head of the third list ran into its count.
   Heads that may turn over are now set as notes; the two heads of a
   pair stand level.
2. Sight, 320 px: the longest name ran into the next list's mark. The
   lists stand in one column where the longest name has no room in half
   the width (264 px); with a narrower gutter on a phone they keep two
   columns at 304 px.
3. Line, 360 and 320 px: the second line turned with no hanging indent
   and stood too far under its note. Set as the kit sets a turned line.
4. Greek, 1280 px: where the turn runs to two lines (points 4 and 8) the
   Greek account stood a line away from its head. Each account now
   stands under its own head.
5. Chorus: a numbered stroke on the line of the play lay over the scene
   that answers the pointer and answered nothing itself. The strokes
   let the pointer through, and each has a place of its own that says
   the figures of its chorus and lights its row.
6. All tabs: what the pointer said ran to five lines at 1280 px and to
   eight on a phone, and moved everything under the key. It now says
   short things (two lines at most at 1280 px, three for two long
   paraphrases on the Chorus bars; three at most on a phone). The long
   prose is in the drawing or in the fold. A Greek row on a phone no
   longer answers a tap: all it could say is in the fold.
7. A fold left open on one tab opened the next tab's fold. Each fold
   now remembers only itself, and stays open when the page is redrawn.
8. Drawing in ran past three seconds. Each tab is now whole about 2.8 s
   after the click, at 1280 and at 390 px (measured with motion on).
9. A label on the second quoted line said that Auden heard five there.
   The reading does not go so far; the label is gone.
10. Names and number words had crept into the script (a head, five keys,
    some comments).
    The name of the pursuers is read from `name.word` wherever the
    plate holds it; the rest are gone.
11. Two things I had done in the script in place of the kit, taken out
    when the lead said a kit fault is not mine to work around: the
    drawing printed the plate's `noTextWhy` under the first tab, and it
    thinned the kit's line samples in the key.

### Gone with the kit's mendings

- ~~The key had no sample for a box in outline, which the Chorus tab
  needs.~~ Gone: `mark: 'open'`
  (`family-reunion-play-1-chorus-1280.png`, the box in the key).
- ~~A tap lit a mark and could not let go of it.~~ Gone: a second tap,
  or a tap on bare paper, lets go (tested at 390 px with touch).
- ~~The line that speaks stood over the key and moved it.~~ Gone: it
  stands under the key on every tab.
- ~~On a phone the room kept for the line that speaks stood empty, a
  blank band of two lines between the key and the fold.~~ Gone with
  the kit's change of 07:44: the room now says "Point at a mark to read
  what it stands for." (`family-reunion-play-0-line-390.png`,
  `family-reunion-play-1-chorus-390.png`). The Greek tab, where no mark
  answers, rightly has no such line.

### Still there after the second mending

Worst first. All were looked for again in the last pictures.

1. **The page never says, on the plate, why no passage is shown.**
   `noTextWhy` is built into the page's data and printed nowhere, on
   every tab at every width: `family-reunion-play-0-line-1280.png`,
   `family-reunion-play-0-line-390.png`. A reader who has seen a
   passage on every other piece meets four drawings and no text. Only
   the first entry of Sources, at the foot of the page, says the play is
   not printed here, and nothing says that its two lines are quoted for
   study, which `noTextWhy` does. The kit's. This is the only piece
   with `noText`.
2. **On a phone the line that speaks is out of sight.** It stands under
   the key. Measured at 390 px: on Sight 939 px below the first name
   that answers (drawing 876 px, then its key); on Chorus 507 px below
   the first scene; on Line 459 px below the first quoted line. On
   Sight a tap on any name of the upper lists pales the other marks and
   seems to say nothing: the words are below the foot of the screen. On
   Chorus and Line they are in sight only when the mark is near the top
   of the screen.
   `family-reunion-play-3-sight-390.png`,
   `family-reunion-play-1-chorus-390.png`,
   `family-reunion-play-0-line-390.png`. The kit's. I have not worked
   round it: the taps still speak there. What the drawings do for
   themselves is keep the prose a tap would say in a fold as well, and
   give a Greek row on a phone nothing to say. The kit's new hint under
   the key tells the reader that the marks answer; it does not bring
   the answer into sight.
3. **No "Read on".** The page ends with Sources:
   `family-reunion-page-1280-2.png`, `family-reunion-page-390-3.png`.
   The reading has `next: null` and, in its place, `nextNote` and
   `nextLinks` (borrow the 1939 edition; the place in the Agamemnon
   printed here). POET.md defines neither key, `build/pieces.mjs`
   carries neither and `site/js/piece.js` prints only `next`. Either
   the kit prints them or the reading drops them; both links do stand
   in Sources (entries 1 and 7). The lead's to settle.
4. **Words set in a drawing are not tidied as captions are.** `d.note`
   and `d.text` set their words as given, without the page's `tidy`
   (`site/js/rich.js`), so "pp." can be parted from its number. Greek,
   1280 px, sixth point, the play's column: a line ends "(pp." and the
   next begins with the page numbers
   (`family-reunion-play-2-greek-1280.png`). A search of every note of
   the four drawings at 1280, 820, 390, 360 and 320 px found this one
   place. The kit's.

## 4. Anything in the reading I think is wrong

Nothing that the drawings show is wrong by the reading's own figures. I
tested the built facts against each other (07:20): each line's
`syllables` and `stresses` equal the marks of its `voice`; `shortest`
and `longest` are the least and greatest of `lengths.syllables`; the
words together and alone add up to `totals` (916 and 240), and each
place's `wordsApart` to its four voices; each chorus's page lies in its
scene, and each scene's `choruses` is the number of places in it; the
two pages on which the Eumenides are shown agree between the Chorus and
Sight tabs; four points kept and four changed make the eight `pairs`;
the four lists hold fourteen persons, and the four of the chorus are all
among those who do not see. The play itself I cannot test: it is not on
this site.

Things for the examiner or the critic to look at:

1. `nextNote` and `nextLinks` are not keys POET.md knows, and nothing
   reads them (section 3, still there, 3).
2. Three and two. The Greek tab shows in large figures that the name
   stands 3 times in the stage directions (`name.timesInStageDirections`,
   and `name.inThePlay` gives pages 60 and 106 for the three). The Sight
   tab has two showings on those two pages (`shown`, and
   `audience.in1939` says "twice"), and the Chorus tab two red rings.
   Both may be right, three directions at two showings, but a reader
   going from tab to tab meets 3 and then 2 with no word between them.
3. Sight, `doesNotSee`: the `say` under Ivy is what Harry tells the
   whole family, not anything of hers, and those under Charles and
   Violet are about the end of the play and not about seeing. The
   drawing prints them as they are given.
4. Line: `lines[1].stressesAudenHeard` is 5, while `auden.say` says the
   line only "appears to be" the one Auden meant. The drawing does not
   use the first of these.
5. Sight: the caption does not speak of the audience, though the facts
   do (`audience`). The drawing prints the two sentences, since they
   say what its red rings are. If that is more than the lens should
   show, it is one block to take out.
6. "More from Auden": the title of another play of Eliot's stands
   unmarked in the second and third paragraphs, and no title is marked
   in the four source lines, while the Chorus caption marks one. The
   kit sets a marked title in italics; the marking is the examiner's.

## 5. What was run

- `node build/pieces.mjs family-reunion`, then
  `node build/tools/shoot.mjs family-reunion --out remake/works/family-reunion/shots --page --widths 1280,390,360,320`:
  last line "nothing reported; now look at the pictures". Every tab
  picture at 1280 and 390 px was opened and looked at, and those at 360
  and 320 px, and the page in slices at 1280 and 390 px.
- `node build/tools/check-reading.mjs family-reunion`: no problems, no
  warnings, the printed notes are fit to print.
- The facts changed nine ways, as an examiner might change them (a
  `voice` taken out, a word cut from a quoted line, `lengths` gone, the
  chorus without members, totals, single voices or order, pairs without
  a turn, the name or the link, Sight without showings, the word, John
  or the third list): every drawing still stood, at 1280 and 390 px.
  With `rule`, `scenes`, `pairs` or all the lists gone, the kit's plain
  table took the drawing's place, as it should.
- The window changed from 390 to 1280, 820, 320, 700 and 390 px on each
  tab: the drawing is made again for each width, the page is never
  wider than the window, and an open fold stays open from one width to
  the next that has it.
- Every mark that answers the pointer was pointed at (1280 px) and
  tapped (390 px): each says its words in the line under the key; a
  second tap, or a tap on bare paper, lets go.
- The script holds no name and no number of the play (searched), and no
  word of its text.
