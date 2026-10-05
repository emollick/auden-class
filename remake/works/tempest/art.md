# The Tempest: the artist's notes

3 October 2026. Times are UTC. Words of the play are pointed at by line
and named one word at a time. Nothing of the play is typed out here.

Handed in:

- `site/js/pieces/tempest.js`: the drawing for the Scene tab of the second passage.
- `remake/works/tempest/reading.json`: one new key in the facts of that tab (section 2). Nothing else in it is mine, and nothing in the plate "song". The examiner, at work at the same time, changed other things, three of them in the plate "song" (section 4).
- `remake/works/tempest/scene-order.mjs`: the count behind the new key, kept so that it can be run again.
- `remake/works/tempest/shots/`: the pictures (section 5).
- No stylesheet. The kit's classes were enough.

One thing is left for the lead to do by hand, because I was stopped
from doing it: one line of the second passage turns in the wrong place
on a phone, and a `turn` of one number mends it (3.1, B).

The kit was still being changed when I finished. The last change I saw
was at 08:25; the pictures are of 08:30.

## 1. What I drew, and why that form

The piece has one shape lens: the second passage ("Caliban on the
island's noises"), tab Scene, lens 3. Its heading is "who speaks verse
and who speaks prose in Act 3, Scene 2". Its caption counts the scene's
speeches, says that the butler and the jester keep to prose, that
Caliban's first five speeches are prose and his other fifteen verse,
that Ariel has the other four, and that the two men say *monster*
seventeen times.

**The form: the scene set out speech by speech.** There is a row for
each speaker, in the order the facts give them. Along each row the
scene's 66 speeches have 66 equal places, in the order they are spoken,
so a speech stands in its speaker's row at its place in the scene. A
speech in prose is an open bar. A speech in verse is a solid bar.
Ariel's four speeches, which the facts count as neither, are small
dots. All bars are one size, because the caption counts speeches and
not their length. The two speeches of the passage on this plate
(Caliban's speech and Stephano's reply, the 60th and 61st) are red, and
nothing else is. The last row stands on an ink line that numbers the
speeches: 1, 10, 20 and so on, and "66 speeches" at its end.

**Why this form.** The caption makes two kinds of claim: counts (66,
42, 20, 5, 15, 54, 4), and an order (Caliban's *first* five, then the
*other* fifteen). Bars for totals would show the counts and lose the
order. A line of marks in the order of the scene shows both. The eye
takes in two rows of open bars over a row that begins open and turns
solid, which is the caption's sentence about the servants and the
slave, seen at once. Every number the caption names can be read off the
drawing:

| on the drawing | where it comes from in `facts` |
| --- | --- |
| each name, and the words after it ("a drunken butler") | `speaker`, `listed as` |
| "28 speeches", "14 speeches", "20 speeches", "4 speeches" | `speeches` |
| "together 42, all in prose; 2 lines sung", under the two rows that are all prose | the sum of `speeches` of the speakers who stand together and keep to one form; the sum of `lines sung` in their `speech by speech` |
| "5 in prose" and "15 in verse, 54 lines", on brackets under Caliban's row | the runs of `form` in his `speech by speech`, with the sum of `lines`; checked against `in prose`, `in verse` and `lines of verse` |
| "66 speeches", and the figures 1, 10, 20 and so on | the sum of `speeches`; the numbers under `speech` |
| which two bars are red | the speeches whose `read` place holds the rows of this plate |
| "Says *monster*, 17 times in all", and 11, 6, 0, 0 over the names | `says monster`, and its sum |

The second small drawing (how often each speaker says the word) stands
under a hairline and a heading in small capitals, as the README's rule
6 asks. It takes the form the worked example uses for a few counts:
large figures with the names under them. The word counted is in
italics in the heading, as it is in the caption.

**The key** names the four marks: a speech in prose, a speech in verse,
a speech not counted as either, the two speeches of this passage. Its
samples are the kit's marks `open`, `bar` and `dot`, cut to the size of
the marks on the drawing. The last entry is worded from the number of
speeches found, and shows them as they are marked, one solid red bar
and one open one, in the order of the scene. So it stays right if the
passage changes.

**The pointer.** Over a mark, the line under the key says which speech
it is: its number, its speaker, its form, and its lines if it is verse
("Speech 41: Caliban, in verse, 17 lines"). Nothing the caption says
depends on this. A click with a mouse opens the play in the reader at
that speech, through the `read` place of each speech (rule 2 of the
README). A finger only calls up the line and does not leave the page; a
second tap, or a tap on bare paper, lets go.

Two things about that line are the kit's, and new since 07:44. While
nothing is pointed at, it says how it is made to speak: "Point at a
mark to read what it stands for.", and "Touch a mark" on a screen that
has no pointer. And where the line's own place is below the window, it
stands at the window's foot while it speaks, over a hairline. I tried
it: in a window 390 by 664 the whole drawing, its key and the line are
in sight together and nothing moves; in one of 320 by 568 the line
stands at the foot and covers the last row of the key until the reader
comes down 13 px (`extra/noises-3-scene-320x568-a-mark-touched.png`).

**The drawing-in.** The names, the lines and the figures are there at
once. The 66 marks then appear in the order of the scene, one every 20
ms, the last at 1.45 s. Each bracket under Caliban's row draws itself
once the last mark of its run is there. The sum under the first two
rows and the second drawing follow. All of it has begun by 2.3
seconds. By the kit's own times (a line takes 1.1 s to draw itself, a
mark 0.6 s to appear) the second bracket is whole at 2.57 s and the
last name is there at 2.83 s. Measured in the browser, in four runs,
the bracket was whole between 2.8 and 3.0 s after the click that opens
the tab. With reduced motion, or on a resize, everything is simply
there.

**Widths.** Every speech gets the same room, a whole number of the
screen's own dots, so every mark is equally sharp. On the two widths
the picture tool uses, the room is 9 px (a 607 px drawing, marks 6 px
wide) and 5 px (a 334 px drawing, marks 4 px wide). With a scratch
script I also measured the drawing in windows 280, 320, 360, 375, 390,
412, 430, 540, 600, 768, 820, 1024, 1100, 1280, 1440 and 1920 px wide,
the narrow ones at two and at three dots to the pixel, and did so again
after each change to the kit's tools for a drawing, the last time at
08:25: the drawing is 384 px tall at every width, no label touches
another or leaves the drawing, the key is one line at 1280, two in the
middle widths and three on a phone, and the page is never wider than
its window. In a window narrower than 320 px there is no room for a
name, its description and its count on one line, and the descriptions
are dropped from all four rows together. The caption gives them too.

Because the room is a whole number of dots, the marks can end short of
the column's right edge: by 5 px at 390 and by 16 px at 1280, and at
the worst I measured by 49 px, in a window 600 px wide on a screen of
one dot to the pixel. The counts at the right of each row, the rules
and the last figure are all set to the last mark, so the drawing keeps
a clean right edge of its own. I chose even marks over a filled column.

**If the facts change.** The drawing reads every name and number when
the page runs. If the list of speeches and the counts beside it stop
agreeing (a speaker's `speeches`, `in prose`, `in verse` or `lines of
verse` against his `speech by speech`, or the speeches not numbered 1
to the last), it draws nothing and throws, and the kit shows the plain
table of the counts, as the README asks. I tried this with a wrong
count, the last time at 08:27: the table stands in the drawing's place
at both widths and the page is no wider. Run `node
remake/works/tempest/scene-order.mjs` to see which side is wrong.

**Forms I set aside.**

- Bars as tall as each speech is long (lines, or words). The caption
  counts speeches. Most of Caliban's verse speeches are one to three
  lines and one is seventeen, so at 5 px a speech the short ones would
  all but vanish and the drawing would become a picture of one long
  speech.
- Totals as lengths side by side (28, 14, 20, 4). It shows who speaks
  most, which the caption does not claim, and hides the turn from prose
  to verse.
- Red for all the verse. Red is kept for "this, here": the passage.
  Verse against prose is carried by solid against open, in ink.
- A mark on each speech in which the word *monster* is said. The
  caption speaks only of the totals, and a third kind of mark on the
  rows would crowd the one idea they show.
- The folded table of figures (`d.figures`). Every number is already on
  the drawing, and on a phone the table hides its last columns (3.1, D).
- A label where Caliban's first verse speech follows Ariel's first
  interruption. The poet's notes say this was seen and not claimed, so
  the drawing shows the two marks and says nothing.

## 2. What I added to the facts

The facts gave the counts for each speaker. The order of the speeches
was only in the working lists under `where`, which the build takes out
before the page sees them. The drawing needs the speeches one by one,
so each of the four speakers now has a new last key, `"speech by
speech"`: a list with one entry for each of that speaker's speeches, in
order.

    { "speech": 20, "form": "verse", "lines": 3, "read": "tempest/a3s2:42" }
    { "speech": 51, "form": "prose", "lines sung": 2, "read": "tempest/a3s2:106" }
    { "speech": 19, "form": "", "read": "tempest/a3s2:40" }

`speech` is its number among the scene's speeches. `form` is prose or
verse, and empty for Ariel, as the poet's count has it. `lines` is the
lines of a verse speech, and `lines sung` the lines of verse inside a
prose speech. The drawing uses both, for "54 lines", "2 lines sung",
the line under the pointer, and its checks. `read` is the speech's
place in the copy printed here, which the checker tests as a link. No
key already there was touched.

The key is made by script from the poet's working lists. The script
first counts the scene afresh from the hosted text, and refuses to
write if the count and the lists disagree, or if anything but the new
key would change:

    node remake/works/tempest/scene-order.mjs            (count and check; writes nothing)
    node remake/works/tempest/scene-order.mjs --write    (add the key, and nothing else)

The rule of the count is the poet's: a speech is one turn under a
speaker's name; verse and prose are as the hosted text
(`site/data/texts/tempest/a3s2.json`) prints them; a speech is what its
first block is; lines of verse inside a prose speech are lines sung.
What it printed with `--write` at 04:52:

    tempest/a3s2: 66 speeches
      STEPHANO: 28 speeches; 28 printed as prose, 0 as verse (0 lines); 2 lines sung; says monster 11 times
          1p 3p 5p 7p 9p 15p 17p 21p 23p 25p 27p 31p 33p 35p 38p 40p 42p 44p 46p 48p 51p+2 sung 53p 55p 57p 59p 61p 63p 65p
      TRINCULO: 14 speeches; 14 printed as prose, 0 as verse (0 lines); 0 lines sung; says monster 6 times
          2p 4p 6p 8p 11p 13p 22p 32p 36p 45p 54p 56p 64p 66p
      CALIBAN: 20 speeches; 5 printed as prose, 15 as verse (54 lines); 0 lines sung; says monster 0 times
          10p 12p 14p 16p 18p 20v3 24v4 26v1 28v2 30v5 37v1 39v2 41v17 43v2 47v2 50v3 52v1 58v1 60v9 62v1
      ARIEL: 4 speeches; 1 printed as prose, 3 as verse (3 lines); 0 lines sung; says monster 0 times
          19v1 29v1 34p 49v1

    the facts of the Scene tab against the count
      ok  the speakers' speeches add up to 66
      ok  Stephano: 28 speeches
      ok  Stephano: 28 in prose, 0 in verse
      ok  Stephano: lines of verse "2, sung"
      ok  Stephano: says monster 11 times
      ok  Stephano: the working list has each speech's number, first block, form, words, lines and lines sung as counted
      ok  Trinculo: 14 speeches
      ok  Trinculo: 14 in prose, 0 in verse
      ok  Trinculo: lines of verse 0
      ok  Trinculo: says monster 6 times
      ok  Trinculo: the working list has each speech's number, first block, form, words, lines and lines sung as counted
      ok  Caliban: 20 speeches
      ok  Caliban: 5 in prose, 15 in verse
      ok  Caliban: lines of verse 54
      ok  Caliban: says monster 0 times
      ok  Caliban: the working list has each speech's number, first block, form, words, lines and lines sung as counted
      ok  Ariel: 4 speeches
      ok  Ariel: no speech is given a form
      ok  Ariel: says monster 0 times
      ok  Ariel: the working list has each speech's number, first block, form, words, lines and lines sung as counted
      ok  put together, the four lists number the speeches 1 to 66 with none missing and none twice
      the passage of the plate is speeches 60 (CALIBAN, verse) and 61 (STEPHANO, prose)

    the reading does not yet hold the key "speech by speech" as counted
    added "speech by speech" to the four speakers of the Scene tab

Run again without `--write` at 05:13, 05:31, 05:53, 06:07, 07:26 and
08:24, it printed the same count and the same 21 lines of "ok", and
then `the reading holds the key "speech by speech" as counted`. At
08:24 I compared the file with the copy I kept from before the write:
the facts of the Scene tab differ by the new key under each of the
four speakers and by nothing else; no heading and no tab name has
changed; no `turn`, `beside` or `join` is set; the plate "song"
differs in three places, all the examiner's (section 4). His record
says that his own count of the scene agrees with my list in every
entry (`exam.md`, section 6). `node build/tools/check-reading.mjs
tempest` printed "no problems" and "the printed notes are fit to
print" before the write, after it, and at 07:26 and 08:24, when it
also printed "no warnings".

## 3. Faults on the other screens

I photographed every screen twenty times: at 04:33, before the drawing
was made (kept in `shots/before/`), and at 05:15, 05:31, 05:37, 05:43,
05:49, 06:03, 06:06, 06:15, 06:22, 06:31, 06:42, 06:47, 07:18, 07:43,
07:49, 07:57, 08:06, 08:20 and 08:30. While I worked the lead mended
the kit three times (05:08 to 05:43; 06:11 to 06:44, "the second
mending"; 07:09 to 07:15, "the third") and from 07:38 went on changing
it, a fourth round that KIT-CHANGES.md does not list yet and that had
not stopped when I finished: the last change I saw was at 08:25. The
examiner changed the reading (05:34 to 06:09, and 06:58). Most of what
I had written down is gone. What follows is the page as it stands in
the pictures of 08:30. Sizes are in px of the page, measured in the
browser the picture tool uses.

I changed no heading and no tab name: all of them read well and none
wraps.

**What the fourth round changed on this piece.** I list it because the
file of changes does not yet. From 07:18 on I compared each round with
the one before, dot for dot, and looked at what differed.

- 07:44, the Scene tab: the line under a drawing's key says how it is
  made to speak while it has nothing to say (section 1).
- 07:44, and for the Sentence tab 08:15: a short run of words that a
  tab marks as one thing is no longer parted where a line turns (3.3).
- 07:52, the Beat tabs on a phone: the button under the key stands at
  the left again (3.3).
- 07:52, the Pardon tab at 1280: the lines of the second passage keep
  the pitch of the lines they answer (3.1, A).
- 08:02 to 08:08, the Scene tab: while it speaks, the line under the
  key stays in sight at the window's foot (section 1).
- 08:16, the Beat tabs: the button reads "Draw it again". It read
  "Again" (3.1, C).

Everything else in the 37 pictures is as it was at 07:18, dot for dot,
but for two dots at the edge of one letter.

### 3.1 Still there after the second mending

Worst first.

**A. Last passage, tab Pardon, at 1280: the caption stands at the head
of the plate and everything it speaks of at the foot.**
`tempest-epilogue-3-pardon-1280.png`, and as a window 1280 by 720
shows it: `extra/epilogue-3-pardon-1280-window-720-head.png` and
`extra/epilogue-3-pardon-1280-window-720-foot.png`.

The second mending did what I asked for: the two lines spoken to
Caliban show only in this tab, and stand at the foot of their column.
Since 07:52 they also keep the pitch of the lines they answer, so each
stands level with a line of the Epilogue: pair 1 is beside pair 1 and
pair 3 beside pair 3. But the caption and its three numbered remarks
are still at the head of that column. Measured from the top of the
plate: the caption runs from 114 to 318 px and the remarks from 359 to
461; then 414 px of bare paper, down to the hairline over the second
passage at 875; its two lines stand from 917 to 1,069, and the two
marked lines of the first passage from 915 to 1,067. A window has to
show 710 px of the plate to hold the first remark and the marks
together, and 955 px to hold the caption with them. In a window 720 px
high the reader who opens the tab sees the caption, the remarks and
eight lines with no mark on them; when he has gone down to the marks,
the caption is out of sight and only the end of the third remark is
left.

What would mend it: on this tab set the caption and its remarks at
the foot of the column as well, straight over the second passage (the
README's own words for this layout are "with the caption over it").
Then the caption, the three remarks and both sets of marks stand
together in about 580 px.

On a phone this tab is right (`tempest-epilogue-3-pardon-390.png`):
the second passage stands under the two marked lines, and the caption
under that.

**B. Second passage, tabs Word, Sentence and Beat, on a phone: line 2
turns in the wrong place.**
`tempest-noises-0-word-390.png`, `tempest-noises-1-sentence-390.png`,
`tempest-noises-2-beat-390.png`, and at 375
`extra/noises-1-sentence-375-as-it-is.png`.

The second mending set this passage as verse (3.3, old 3.1), and on a
phone a line that is too long now turns with a hanging indent, at the
place that leaves its two parts most alike in length. For line 2 that
place is wrong, from 390 down and in Beat from 414: it turns after its
fifth word, *that*. The word that opens a clause is left at the end of
the first part and the clause goes on in the second. The turn belongs
one word earlier, after the comma, at *airs,*.

The other lines that turn at 375, 360 and 320 turn well enough: lines
4, 6 and 8 at their pauses, where one span ends and the next begins;
line 5 before its last three words, which are a phrase; line 3 before
its last two; and line 7, since 08:15, after its third word (3.3).

What mends it is the new `turn`, on the plate "noises":

    "turn": { "127.1": 3 }

ARTIST.md lets the artist set this. I set it at 06:52, with a second
number for line 7 that the kit has since made needless, and the
checker took it. My next command, which held the build, was refused by
this session's permission check as a change to things that are shared.
I do not go round a refusal, so at 06:53 I took the lines out again.
The file was then the same, byte for byte, as before the edit; only
its time changed. It is the lead's to set, or to tell me to.

To see what the number does without touching the site, I had a scratch
server hand the page a copy of the piece's data with it added:
`extra/noises-1-sentence-375-with-the-turn.png` and
`extra/noises-2-beat-390-with-the-turn.png` (these two pictures show a
page that does not yet exist). Line 2 turns after the comma at 390,
375, 360 and 320, and in Beat at 414, with the figure of the first
remark at the end of its first part. Neither part is ever too long for
the plate, so the kit never has to let the line go free. Where the
line has room it stays whole. The plate is exactly as tall as before
at each of those widths.

**C. First passage: three things on the approved plate are not as
they were approved.** They are the kit's doing, and the lead's to keep
or to take back. Each is set out in 3.2 with its picture. Under the
Beat tab the button reads "Draw it again" where it read "Again", at
both widths, since 08:16. On a phone the Beat tab's two remarks stand
before its key, where the key came first, since 06:31. On a phone the
place, "Act 1, Scene 2", stands on a line of its own under the
heading, in all four tabs, since the third mending.

**D. Small.**

- Second passage, Word, Sentence and Beat, both widths: the two lines
  of the prose reply stand a whole verse row apart, 73 px at 1280 for
  type of 27 px and 56 px at 390 for type of 16.5 px
  (`tempest-noises-0-word-1280.png`, `tempest-noises-0-word-390.png`).
  In Sentence a rule stands in that room. In Word and Beat nothing
  does, and the reply looks like two lines, not one sentence running
  on.
- The plain table that stands in for a drawing that fails: on a phone
  its last two columns of seven are out of sight to the right and
  nothing says that the table goes on. Since 07:44 the fifth column
  ends flush with the plate's edge, so the table looks whole. It can
  be slid sideways. I saw it only by forcing my drawing to fail, so
  there is no picture of it among the tool's.
- The size of the type is not the same from one load to the next.
  Under the Pardon tab at 1280, in one window of 1280 by 720, the kit
  set the last passage at 28.91 px in two loads and at 29.12 px in six
  (the first line 399 or 405 px wide, the plate 1,131 or 1,134 px
  tall). No reader will see it. It matters to whoever compares two
  pictures dot for dot. My guess, which I did not test: the lines are
  sometimes measured while the letters still have the weights of the
  Beat tab.
- In "More from Auden" seven titles of works are not in italics. The
  kit does its part since the second mending; the words are not marked
  in the reading, and that is the examiner's or the critic's (section
  4, point 7).

### 3.2 The first passage (the approved one)

All four tabs at both widths: I changed nothing, and no mark is out of
place. But the plate is not in every point as it was approved. The
first three things below are ones a reader would notice. This is all
that differs from the pictures of the first round (`shots/before/`),
and none of it is my doing:

- **Beat, both widths, since 08:16:** the button under the key reads
  "Draw it again". It read "Again" (`tempest-song-0-beat-1280.png`,
  `tempest-song-0-beat-390.png`). The Beat tabs of the other two
  passages have the same new words.
- **Beat, on a phone, since the round of 06:31** (second mending):
  under the caption the two numbered remarks stand before the key,
  where the key came first (the two feet side by side in
  `extra/song-0-beat-390-foot-first-round-left-now-right.png`). The
  Beat tabs of the other two passages have the same new order on a
  phone. At 1280 the order is as it was.
- **All four tabs, on a phone, since the third mending:** the place,
  "Act 1, Scene 2", stands on a line of its own between the heading
  and the tabs, where the first round had no such line, and the plate
  is 24 to 28 px taller for it (`tempest-song-0-beat-390.png` and the
  other three).
- Beat, both widths: the two small red figures of the remarks, at the
  ends of lines 1 and 9, are a touch larger and stand 1 px further
  from the word (first mending).
- Figure, both widths: the two strokes that cross now end about 3 px
  over the words of the lower line, whose letters they used to touch
  (second mending, 06:28).
- Word, both widths: the gloss under the last of the six glossed
  words, in the seventh line, was reworded by the examiner (05:34; his
  record says why). The other glosses and the underlines have moved by
  less than a pixel.
- Rhyme: on a phone the two samples in the key are a touch heavier. At
  1280 nothing differs that can be seen.

At 1280 the four pictures differ from the first round's in 630, 0,
1,470 and 5,304 dots of about a million, counting a dot where one of
its three colors differs by more than 6 in 255: the two figures and
the button's words; nothing; the ends of the two strokes; the glosses.

One thing a careful eye catches, and I leave alone because the plate
is approved: at 1280 the Beat caption parts the title of the other
play from its first word at the end of a line
(`tempest-song-0-beat-1280.png`).

### 3.3 Gone

Each of these stood in these notes, at 06:06 under the number given or
at 07:30 under the letter given.

- ~~3.1 A passage of verse with a prose reply is set as prose.~~ Gone
  with the second mending. The kit decides row by row: the nine lines
  are set as verse and fitted to the width, and the reply runs on as
  prose. On a phone the plate is 1,343 px tall in Word, 1,280 in
  Sentence and 1,532 in Beat, with the new line under the heading; it
  was 1,730, 1,666 and 1,914. What is left is B, and the first small
  point of D.
- ~~3.2 The second text of the last passage.~~ Gone from Beat, Rhyme
  and Word, where it now does not show, and in Pardon it stands by the
  lines it answers. What is left is A.
- ~~3.3 On a phone the figure of a note is wedged between two words.~~
  Gone. The room is measured for the figure: at 390 it has 4.1 px of
  air after it in both passages, where the last passage had 1.6; at
  1280 it has 5.1 and 6.1.
- ~~3.4 The room kept for a figure shows as a hole in the other
  tabs.~~ Gone. The room is there on the Beat tab only. In the other
  tabs the space after such a word is the same as any word space.
- ~~3.5 In Beat the points for the lines left out look like beats.~~
  Gone with the third mending. In Beat the three points are set in
  from the left edge and stand lower, about 47 px under the row of
  dots and about 37 px over the capitals of the next line at 1280
  (`tempest-epilogue-0-beat-1280.png`, `-390.png`).
- ~~3.6 The kit's tools for a drawing~~: ~~a line told to appear late
  is seen first~~; ~~after a tap the drawing stays dimmed~~; ~~the key
  has no open bar~~; ~~a tapped link keeps the browser's ring~~; ~~the
  plain table prints a list in full~~; ~~the heading of a drawing
  begins with a small letter~~. All gone at 06:30. I took my own ways
  round them out of the script: the brackets draw themselves, the key
  uses the kit's `open` mark, and the script no longer hides its list
  from the table or turns off the ring. What is left of ~~the plain
  table is wider than a phone~~ is the second small point of D.
- ~~3.7 The page outside the plates~~: ~~the line under the title
  leaves its last word alone at 390~~ (it is two even lines now,
  `tempest-page-390-0.png`); ~~a source line breaks after "pp."~~ (the
  number stays with it now, `tempest-page-390-0.png`, `-4.png`,
  `-5.png`). The titles in "More from Auden" are the last small point
  of D.
- ~~B, in part: line 7 turns between the two words that the Sentence
  tab rules as one span.~~ Gone at 08:15. The kit now keeps a short
  span of a sentence together, as since 07:44 it keeps the parts of a
  figure, a noted phrase and the ends of a compare tab's pair. At 375,
  360 and 320 line 7 turns after its third word, and the rule under
  the two words is whole (`extra/noises-1-sentence-375-as-it-is.png`).
- ~~C, in part: on a phone the button under the Beat tab's key stands
  in the middle over a hairline across the plate.~~ Gone at 07:52. It
  is at the left over its short rule again, as it was approved.
- ~~D, in part: on the Scene tab at 390, 60 px stay empty between the
  key and the caption until a mark is touched.~~ Gone at 07:44. The
  room holds the line that says how the marks are made to speak
  (`tempest-noises-3-scene-390.png`).
- Gone before 06:06 (old 3.9): a sound that came back once in a line
  was drawn as stray dots (the examiner took that thread out of the
  last passage's Rhyme tab; the README now says a sound is dotted
  from line to line where a line holds one place); the key of the
  Sentence tab had seven rows, two of one color (five rows in five
  colors now); nothing showed where eight lines are left out; the
  figure of a remark ran into the next word; at 390 the line under the
  site's name broke before its last word.

## 4. What in the reading I think is wrong

None of this is mine to change. In the reading I added the one key
and nothing more. The examiner read these notes while he worked and
met the first two points, the fourth and the sixth (`exam.md`, "What I
changed"). The lead has decided the fifth (`exam.md`, "The lead's
decisions", 07:00). The seventh is new and open.

1. **Met at 05:46. The caption of the Scene tab left four speeches
   unexplained.** It gave 66 speeches, 42 to the two men and 20 to
   Caliban. The caption now says that Ariel has the other four. The
   drawing needed no change: his row and "4 speeches" were there.
2. **Met at 05:46. Seventeen counts the word inside compounds.** The
   note of what the tab stands on now says so. For the record: of the
   seventeen, three are in one compound and one in another (speeches
   1, 2, 3 and 5), and all seventeen are said of Caliban.
3. **42 and seventeen are sums.** The facts hold 28 and 14, 11 and 6.
   The drawing adds them when the page runs, so both follow a
   correction.
4. **Met. The Sentence tab had more kinds of span than a reader can
   hold.** One cost: the verbs of custom and the past verbs are one
   kind now, so the caption tells them apart and the marks do not.
   The lead has looked at this on the mended page and keeps it.
5. **Decided. The title of the piece names only the first passage.**
   It stays: the page was approved under that name, and the line under
   the title names all three.
6. **Met at 06:05. The Pardon caption began with the word "Beside".**
   It now begins "Set against", which holds on a phone and at 1280.
7. **Open. Seven titles of works under "More from Auden" are not
   marked, so they print in roman** while the captions, the source
   lines and the list of sources set titles in italics: two plays in
   the first paragraph, three in the second (two of them new with the
   examiner's change of 06:58), the book in the fourth and the opera
   in the sixth (`tempest-page-1280-2.png`, `-3.png`; on a phone
   `tempest-page-390-3.png`, `-4.png`, `-5.png`). On a phone the first
   of the three in the second paragraph is also parted between its two
   words at the end of a line, which italics would make easier to read
   as one title (`tempest-page-390-4.png`). KIT-CHANGES.md says the
   kit sets a title between asterisks in italics and that the marking
   is the examiner's or the critic's.

**The plate "song".** I changed nothing in it. At 08:24 it differed
from the copy I kept from before my write in three places, all the
examiner's and all in his record: the gloss under one word of the Word
tab, and the scene of the other play in the Beat tab's working ground
and in its note of what it stands on. No caption of that plate and no
other mark was changed. Only the gloss shows on the plate.

## 5. The pictures

- `shots/tempest-noises-3-scene-1280.png` and `-390.png`: the drawing.
- `shots/tempest-<plate>-<n>-<tab>-<width>.png`: every tab of every
  passage at 1280 and 390, the round of 08:30.
- `shots/tempest-page-<width>-<n>.png`: the whole page in slices, the
  same round.
- `shots/extra/`: seven pictures of my own making, taken at 08:22 and
  named in section 1, 3.1 and 3.2. Two show the second passage at 375
  and at 390 as it would stand with the turn set, and their names say
  so. One shows it at 375 as it is. Two show the Pardon tab as a
  window 1280 by 720 holds it. One sets the foot of the first
  passage's Beat tab on a phone from the first round beside the
  present one. One shows the drawing in a window 320 by 568 with a
  mark touched.
- `shots/before/`: the first round, taken at 04:33 before the drawing
  was made and before the kit and the reading were changed. The Scene
  tab there is the plain table.
- `shots/example/`: the worked example (adams), photographed as the
  task asked.

## 6. The picture tool's report

    node build/pieces.mjs tempest
    node build/tools/shoot.mjs tempest --out remake/works/tempest/shots --page

Last line of the second, in every round from 05:15 to 08:30 and in
every run for a single tab between them: `nothing reported; now look
at the pictures`. The round of 06:22 fell in the middle of a change to
the kit. Its pictures showed the last passage broken at 1280 (the key
and the remarks squeezed into a column about 40 px wide), the tool
reported nothing of it, and the next round did not show it; I recorded
no fault from that round.

I ran the build before every round up to 06:47. After the refusal of
06:53 (3.1, B) I did not run it again. The rounds from 07:18 on were
taken from the data the lead built at 07:13, after the last change to
the reading (06:58); I checked that the title, the paragraphs, every
heading, tab name and caption and the facts of the Scene tab are in
that data as the reading has them. The build's script has changed
twice since (08:01, 08:25), for things this piece does not have.

I looked at every picture of the first round, and at every picture of
the rounds of 06:47 and 07:18. From 07:18 on each round was compared
with the one before, dot for dot, and I looked at what differed: the
Scene tab at both widths (07:49), the Beat tab on a phone and the
Pardon tab at 1280 (07:57), the Beat tab at both widths (08:20). The
rounds of 07:43, 08:06 and 08:30 showed nothing new.
