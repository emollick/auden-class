# The class page, by eye

Critic by eye for `#/class`. I looked and judged; I edited nothing.

## How I looked

- The pictures I was given: `review/class/shots/` (folds shut), `shots-open/` (folds open),
  `shots-home/` (the front page). They were taken at 07:38–07:39 UTC. Every scene at 1280 px
  and at 390 px, the tall ones in their cut pieces.
- Pictures I took, all with the tools in the brief unless marked:
  - `shots-pick-Iago/`, `shots-pick-Othello/`, `shots-pick-Emilia/`: one name followed across the six schemes.
  - `shots-bar4/`: one bar of the reading list pressed.
  - `shots-mid/`: every scene at 768 and 1024 px.
  - `shots-zoom/`: enlargements cut out of the given pictures.
  - `shots-view/` (my own short script, pictures only): the first four screens at each width as a
    reader meets them (`view-*-screen0..3.png`), the whole page in strips 5,000 px tall (`strip-*`),
    and the two small scenes side by side (`small-pair-1280.png`). `strip-1280-04.00..03.png` are
    pieces cut later from a strip I already had.
  - `shots-motion/` (my own short script, 1280 only): the boards with motion on at 0.15, 0.7, 1.5 and
    3 s after the page comes to them; a bar and a name under the pointer and under the keyboard; the
    record playing.
  - `shots-piece/`: the plates of the Othello piece on its own page (`build/tools/shoot.mjs`), to see
    whether a fault on a card is the card's or the plate's.
- **The page changed while I looked.** `site/data/class.json` was rebuilt at 07:43 and again at 07:49.
  The given pictures are of the 07:38 build. The pictures I took are of later builds: the words differ
  in places (the strip of facts, the first afternoon, the two small scenes) and the page is taller.
  Where a fault is only in one build I say which. Until 08:04 the styles and scripts did not change
  (they were of 07:28–07:30).
- **Then the mending began, and I took no more pictures.** Shortly after 08:00 the lead told me that
  the head and the first scenes were being mended from this report and that I should take no new
  pictures. Everything from scene 7 on is judged from pictures I already had. By 08:18 the scripts
  and the styles had changed in many places that this report names. I read those files (I did not
  touch them) and say under "The worst, first" which faults they now seem to meet. I have not seen
  any of those mends in a picture, so each wants looking at.
- What I could not see: the blackboards are written on a line at a time as the page comes to them
  (`writeOn` in `site/js/class-figures.js`). The picture tool turns motion off, so every picture shows
  the board already written. I say what I saw of the motion in its own section, lower down.
- Sizes of type are read from `site/css/atlas.css`, not guessed from the pictures. The Garamond for
  running words has a small body, so 15.5 px looks like 13 in a picture.

## The worst, first

The faults as I judged them in the pictures (builds of 07:38 to 07:49), worst first. After each,
what I can read in the site's files as they stood at 08:18. "Met in the files" means that a script
or a style has been changed to meet the fault. It does not mean I have seen it right: I have no
picture of any of it. "Open" means I can find no change.

**Open, and most in need of mending:**

1. BROKEN in a small way. On the Othello card a drawn link crosses a speaker's name and another
   stops in the air; the piece's own page does the same (scene 6, item 7). Open: it is the plate's.
2. POOR. The work that was set and has no shape: the papers, the exercise in translation, the
   project of the next course. They are the hardest things on the page to find, and they are what
   he asked for by name (scenes 11 to 13; "Where design would repay most", 1). Open.
3. POOR. One measure. At 1280 a short run of prose is 90 px wider than the column over it and
   stands beside a bare half page, about ten times down the page ("One measure", where the mend is
   written out for the lead). Open.
4. POOR. The folds do not look as if they open: 12 px grey capitals like the labels, the sign at
   the far edge, and a second sign at the end of the page ("The folds"). Open in the styles. The
   fold beside a single card now stands open on a wide page.
5. POOR. On the front page the way in reads as a fourth heading with nothing under it, where the
   paragraph above has promised three, and it stands in the second screen at both widths ("The
   front page and the menu"). Open.

**Open, and after those:**

6. POOR. The first afternoon reads as a report: ten page references inside its running words.
   Scenes 7 and 8 read as digests ("An account of the room, or a course site", 2 and 3). Open.
7. COULD BE BETTER. Nineteen sheets of one make, and every scene built the same way ("Beautiful,
   or tidy"). Open. A choice of design, for the lead to weigh.
8. COULD BE BETTER. Three cards are puzzles without their pages: Wagner, Kierkegaard, Melville.
   Glosses of 12 px ("The cards"). Open: the plates'.
9. COULD BE BETTER. On a phone the six schemes still stand one under another, and what he said of
   a followed name comes under all six (scene 6, item 3). The row of names is now at the head.
   Whether that is enough I cannot say without a picture.
10. COULD BE BETTER. Two marks for the keyboard: a red one on the bars, the browser's blue one on
    the names ("Hover, focus and motion"). The red one is now square. The names: open.

**Met in the files since, and not seen:**

11. BROKEN. The word "null" printed in the Othello figure for three of the seven names (scene 6,
    item 1). The empty value is now dropped before it is written.
12. POOR. The bars of the reading list could not be pressed on a phone, and two kinds of bar had no
    key (scene 2, items 1 and 2). Now a finger slides along the strip, two arrows step from work to
    work, the bars are of one height, and the longest works are named over their bars. The one
    dashed bar still has no key.
13. POOR. At 390 the chart showed three pairs of nine and looked whole (scene 9). Now it is fitted
    whole where it nearly fits, and elsewhere cut through a column under a line that says it runs on.
14. POOR. The head: a strip of facts and a dated list of sessions before the first scene. The strip
    is gone; the contents are titles only, in three columns, and one folded line on a phone.
15. POOR. The names to follow did not look as if they could be pressed, and the page jumped (scene
    6, items 2 and 4). Now: a lead-in in italics, names in ink over a rule, the row at the head of
    the board, the names on the board pressable, and the room one answer has taken kept for the
    next. The first press will still move the page.
16. POOR. The table as a form at the narrow widths; doubled rules; a rule on a card's edge (scenes
    3 and 4). Now the three lines stand first and each case once, and the styles for the rows
    under the cards have changed so that one rule should stand where two did.
17. POOR. The afternoon with no record was the barest band (scene 4, item 3). The record he played
    is now set as a title, with the note under it. In scene 5 the name now comes before the note.
18. COULD BE BETTER. Lines of sources turning inside a reference; labels leaving a word alone; a
    title split in a question; rows of two cards uneven; the names under the six quotations in
    bold; the sentence set large with no label over it; the dashes and the feet of the cantos.
    All have a change in the files that answers them.

**What to do first when the mending stops:** take the pictures again and look at 390. Four of the
six figures had their chief fault there, all four have been rebuilt for it, and none has been seen.

**What must be kept through all of it** is listed scene by scene under "Best, to keep", and in one
place under "Beautiful, or tidy".

## The head of the page

Pictures: `head-*.png`, `lede-*.png`, `facts-*.png`, `toc-*.png`, and `shots-view/view-1280-screen0.png`,
`view-1280-screen1.png`, `view-390-screen0.png`, `view-390-screen1.png`.

**What the eye goes to first.** The two words of the title, then the two paragraphs under it. That is
right. At 1280 the first screen is title and lede and nothing else: calm, and the best first screen on
the site after the front page. Keep the centered head and the lede at this size.

Faults, worst first:

1. POOR, both widths. **Too much stands between the lede and the first afternoon.** At 390 the first
   scene starts 2,200 px down: five ruled facts, then fourteen ruled entries of contents, nineteen
   label-and-value rows in a row (`view-390-screen1.png`, `facts-390.png`, `toc-390.00.png`,
   `toc-390.01.png`). At 1280 it starts 1,400 px down. This is the first place the page reads as a
   course site: a row of key facts and a dated list of sessions, before anything has happened in the
   room. Mend: let the lede run straight into the first scene. Cut the strip of facts (see 2). Keep the
   contents but make them small: at 390 one folded line ("The afternoons", opening to the list), at
   1280 the titles only, run in three columns without the line of date over each, or moved to the end
   of the page where a book keeps such a list.
2. POOR, both widths. **The strip of facts is a dashboard row, and it says nothing the page does not
   say elsewhere.** Five tiles, each a tiny label over a value (`facts-1280.png`). The room and the hour
   are in the lede two inches above; the count of students is in the Kierkegaard scene; the list is in
   the figure of the first afternoon; the cantos are the examination. The tiles are also uneven: one
   line in the first, three in the third and fifth (`facts-1280.png`), and in the 07:49 build the middle
   tile holds two sentences and runs to five lines beside a tile of one
   (`shots-view/view-1280-screen0.png`, bottom; `view-390-screen1.png`, top). Mend: cut it. If it
   stays, no tile longer than two lines, and drop the two that repeat the lede.
3. POOR, 1280. **The hairlines of the contents do not line up across the three columns** in rows 4 and
   5 (`toc-1280.png`). Two labels turn onto a second line, each leaving one word alone: the last word
   of the label over the fourth entry in column 1, and the last word of the label over the fifth entry
   in column 2. The entry under each sits 17 px lower than its neighbors. The same two words stand
   alone at 390 (`toc-390.00.png`, fourth and tenth entries). Mend: shorten those two labels in the
   contents (the scene head can keep the long form), or drop the second half after the dot.
4. POOR, 390. **The lede stands 4 px inside everything else.** Its words start at 20 px from the edge;
   the rules, the contents and every scene start at 16 px (`view-390-screen0.png`: lede at x=40 of the
   doubled picture, the rule of the facts at x=32). The sources and the two links at the foot do the
   same (`end-390.png`, `on-390.png`). Mend: one side margin for the whole page at phone width.
5. COULD BE BETTER, both. Two weights of rule meet with no reason the eye can find: ink rules over
   the five facts, pale hairlines over the contents directly below (`facts-390.png` above
   `toc-390.00.png`). If the strip goes, this goes with it.

Sizes: the labels of the facts are 10.5 px and the labels in the contents 11 px. Both are at the
lower limit and both are letterspaced capitals, so they hold. Do not go lower.

Best here, to keep: the title; the lede's measure and size at 1280; the titles of the contents in
the display Garamond, which read like the contents of a book of essays once the dates are off them.

## Scene by scene

In each scene the faults are listed worst first. "Given" means the pictures of 07:38.
A fault that shows in many scenes is written once in full, where it first shows, and named after that.

### 1. A card on an office door (`door-1280.png`, `door-390.00.png`, `door-390.01.png`)

The eye goes to the two lines of the title, then across to the five questions. That is right: the
questions are what a reader can do something with, and they are set as the largest thing after the
title. At 390 the order is title, prose, questions, and it reads well.

- At 1280 the two columns end level, within 10 px (`door-1280.png`, foot). Nothing to mend.
- COULD BE BETTER, 768 (`shots-mid/door-768.png`). The prose keeps a measure of 648 px and the list
  under it runs the full 736: two right edges, 90 px apart. Let the list take the measure of the prose
  below 980 px.
- Nothing is crowded and nothing overlaps. The labels are 11.5 and 12 px.

Best, to keep: the five questions between hairlines in the display Garamond. This is the model for
everything he asked on the page: plain, large, one to a line, with the witness and page at the right
of the label. The second question turns well at 390.

### 2. The first afternoon (`first-1280.png`, `first-390.00–03.png`, `shots-bar4/`, `shots-motion/bar-hover-1280.png`)

The eye goes to the title, then to the six numbered propositions on the right, then drops to the
black bars at the foot. The first two are right. The bars pull harder than they have earned (see the
figure, below).

1. POOR, 390; COULD BE BETTER, 1280. **The bars of the reading list cannot be pressed on a phone.**
   Measured in the page: at 390, 24 of the 33 bars are under 8 px wide and the narrowest are 2.5 px;
   only two are wider than 24 px (`first-390.02.png`, the strip; `shots-bar4/first-390.02.png`). The line
   under the strip tells the reader to choose a bar. A finger cannot. At 1280 eight bars are under 8 px
   and the narrowest 4.5 px. Mend: let the strip be read by sliding along it (the name under the finger
   follows the finger, as it does under a mouse), and give two small arrows at the ends of the name
   line to step to the bar before and the bar after. Or, at phone width, break the strip into three
   rows so each bar is three times as wide.
2. POOR, both. **Two kinds of bar have no key.** The bars of the last nine works are lower than the
   rest, and one bar is a dashed outline (`first-1280.png`, right end of the strip, x=1045–1150). The
   key under the strip explains black, open and hatched and stops. A reader sees five kinds and is
   told three. Mend: add the two to the key, or draw all bars at one height and say in the note that
   the last nine are operas.
3. POOR, 1280, given build. **The second run of prose stands alone at a measure of its own beside a
   bare half page** (`first-1280.png`, y=800–1130). The paragraphs above it sit in a column 560 px wide;
   these run 648 px, so their right edge meets nothing, and the right half is empty for 330 px. In the
   07:49 build this run is long enough to be set in two columns and the hole is gone
   (`shots-view/strip-1280-00.png`). The same fault is still in every scene where a run is short: see
   "One measure" under the whole page.
4. POOR, both. **The line of sources turns in the middle of a page reference.** The balance that is
   set on the line breaks it after the first page number of the second witness and starts the next
   line with "and" (`first-1280.png`, top right; `first-390.00.png`, under the title). Mend: no-break
   spaces inside each witness's reference, so a line can turn only after a semicolon. The same in
   scene 14 (`since-1280.png`, `since-390.00.png`) and, in the 07:49 build, in both small scenes.
5. COULD BE BETTER, both. The pressed bar is ringed in red with rounded corners
   (`shots-bar4/first-1280.fig.png`). It is the one mark on the page that looks like a browser's focus
   ring and not like the marks drawn on the verse. Mend: a short red rule under the bar and a hairline
   from it down to the name, in the manner of the marks on the cards.
6. COULD BE BETTER, 1280. The key has grown to a sentence in the 07:49 build and the three keys now
   fill the width (`shots-motion/bar-hover-1280.png`). Cut the first key to four or five words; the
   count can go in the note.

Best, to keep: the six propositions, numbered in small figures with the text in the display face
(`first-390.01.png` is as good as a page of a printed commonplace book); the black, open and hatched
bars, which look engraved and not like a chart from a spreadsheet; the name of the work arriving under
the strip in the same line where the instruction stood.

### 3. Kierkegaard's three (`three-1280.png`, `three-390.00–03.png`, `shots-open/three-*`, `shots-mid/three-768.00.png`)

The eye goes to the title and then straight to the three large lines in the first column of the
table. Right: those are the blackboard, and the size says so.

1. POOR, 390 and 768. **A doubled rule with nothing between** at the head of the table: a hairline
   under the heading of the figure, a gap of about 16 px, and a second hairline over the first row
   (`three-390.01.png`, y=665–702; `shots-mid/three-768.00.png`, y=822–843). The row of column heads is
   hidden at this width and its rule is left behind. Mend: no top rule on the first row when the
   table is stacked.
2. POOR, 1280. **The fold stands under the wrong heading, and beside a hole.** The label "On this
   site" and its rule run the full width; under it, left, the card; right, the fold about what Auden
   wrote three years later, which is not on this site at all (`three-1280.png`, y=1170–1260). Shut, the
   fold is one line and the right half under it is bare for 360 px. Open, the pair is balanced and
   looks finished (`shots-open/three-1280.png`). Mend: at 980 px and wider, where one card stands
   beside one fold, show the fold open; and stop the rule of "On this site" at the card's column.
   The same in scene 7 (`falstaff-1280.png`, y=1000–1465).
3. POOR, 1280. A run of three lines of prose after the table at its own measure, right half bare
   (`three-1280.png`, y=1030–1110). See "One measure".
4. POOR, 390. The label over the title turns and leaves its last word alone on a line
   (`three-390.00.png`, top). Mend: at phone width drop the part after the dot, or let the dot start
   the second line so two words stand there.
5. COULD BE BETTER, 1280. The three subjects of the three lines are set as tiny labels (11.5 px
   capitals) and their predicates at 30 px (`three-1280.png`, y=690–910). The eye reads three
   sentences without their first word. Mend: set the subject in the display face too, in italic at
   about 20 px, so that the line on the board reads as a line.
6. COULD BE BETTER, 1280. The label of the figure and the head of its first column say the same
   three words (`three-1280.png`, y=580 and y=632). Drop the column head; the note at the right
   already says which column is the blackboard.
7. COULD BE BETTER, 768. The table is stacked although the three columns would fit
   (`shots-mid/three-768.00.png`). Stacked, each case label is printed three times and the figure
   reads as a filled-in form. Mend: keep the table down to about 600 px of board.
8. COULD BE BETTER, both. The card is a small puzzle: its marks show one thing (a phrase that comes
   back, and where the teller breaks in) and the two lines under them talk of another (which book is on
   the list). A reader cannot tell why this passage stands under this afternoon.

Best, to keep: the first column at 1280. Three lines in large type between hairlines, with the two
cases in small type beside them and the one empty cell said in italics. It reads at a glance as
what was chalked, and what was said about it.

### 4. Augustine, Descartes, Kafka (`ego-1280.00–01.png`, `ego-390.00–05.png`, `shots-open/ego-*`, `shots-zoom/ego-linkrow-1280.png`)

The eye goes to the title, then to the sheet headed "For Tuesday": four questions in the italic
display face, numbered. Right, and the best thing in the scene. A reader sees at once that something
was asked of the class and what.

1. POOR, 1280. **A rule lies on the edge of a card.** The top hairline of the plain link to the
   Augustine piece sits flush on the bottom edge of the Melville card and runs on to the right
   (`ego-1280.01.png`, y=214; enlarged in `shots-zoom/ego-linkrow-1280.png`). The card looks as if its
   foot had been drawn across the page. Mend: the same gap above that row as between two cards.
2. POOR, both. **A doubled rule** between that link row and the first fold: 16 px apart at 1280, 11 px
   at 390 (`ego-1280.01.png`, y=266–283; `ego-390.03.png`, y=1043–1065). Mend: one rule.
3. POOR, both. **The afternoon with the record is the barest place in the scene.** At 1280 the left
   column holds four paragraphs and the right column one grey italic sentence saying that no record can
   be given; under it 450 px of nothing (`ego-1280.01.png`, y=480–1000). The eye finds no record, only
   the place where a player would be. See "The records" below for what I would put there.
4. POOR, 1280. **Three kinds of row are stacked and only a small sign at the far right tells them
   apart**: a link to another page (an arrow), then two folds (a plus), each a full-width ruled line
   (`ego-1280.01.png`, y=215–372). The folds hold what two students wrote and what Auden wrote: the
   pay for reading the four questions. They are the quietest thing in the scene: 12 px grey capitals,
   the sign 1,100 px away. A reader can pass them without knowing they open. Mend: see "The folds"
   under the whole page.
5. POOR, 1280, folds open. The body of the first fold breaks a grade at its hyphen: the letter and
   its hyphen end one line and the rest starts the next (`shots-open/ego-1280.01.png`, y=400–430).
   Mend: a no-break hyphen.
6. COULD BE BETTER, 1280. Three cards in two columns: the right column ends 175 px above the left,
   and the link row then crosses the full width (`ego-1280.00.png` foot, `ego-1280.01.png` head). It
   holds, but it is the most crowded stretch of the page: sheet, three cards, a link, two folds, with no
   running words between them for 1,000 px.
7. COULD BE BETTER, 1280. The two columns of prose break in the middle of a parenthesis
   (`ego-1280.00.png`, y=497, foot of column 1). See "One measure".
8. COULD BE BETTER, both. In the first question the title of the poem is split over two lines
   (`ego-1280.00.png`, y=660–695; `ego-390.01.png`, y=345–395). A no-break space inside the title.
9. COULD BE BETTER. The last paragraph, on the recess, stands alone after a wide gap at its own
   measure (`ego-1280.01.png`, y=1060–1140). It reads as a caption that lost its picture.

Cards: Kafka and Dante can be read without their pages. The Melville card carries three colors,
a term, a gloss of the term and three keys under two lines of prose; it is the nearest to a puzzle.
At 390 its drawn arcs are gone and the colors do the work alone, which is clearer (`ego-390.02.png`).

Best, to keep: the sheet "For Tuesday" at both widths. The numbers in small figures, the questions in
italic, the titles upright inside them, the witness and page at the head. `ego-390.01.png` is the
best single phone screen on the page.

### 5. Romantic love (`love-1280.png`, `love-390.00–03.png`, `shots-motion/record-playing-*.png`)

The eye goes to the title, then down the left, and finds the round play button on the right about a
screen in. Right enough; the button is the only round thing on the page and it draws the eye as it
should.

1. POOR, both. **The first thing in the record's column is a sentence about what the record is not**
   (`love-1280.png`, y=572; `love-390.01.png`, y=1010). The name of what can be played comes second.
   Mend: the name of the record first, in the display face; the button; the performers; and the
   sentence about the duet last, with the credits.
2. COULD BE BETTER, 1280. The two cards of the row end 40 px apart, so their two link lines stand at
   two heights (`love-1280.png`, y=1244 and y=1287). Mend: where a row holds exactly two cards, set
   them as a grid of two so both are as tall as the taller and the links line up. The same in scenes 6
   and 8.
3. COULD BE BETTER, both. On the Wagner card each of the four lines carries the letter d and
   nothing says why (`love-1280.png`, y=975–1140; enlarged in `shots-zoom/love-wagner-1280.png`). On
   its page the passage is longer and the letter is the fourth rhyme. Cut out, it is a riddle. Mend:
   letter the card's rhymes from a, or leave the letters off the card and keep the brace.
4. COULD BE BETTER, both. The glosses under single words on the Bizet card are 12 px italic
   (`shots-zoom/love-bizet-1280.png`). One size up would be read with ease. This is the plate's own
   setting, so it is a matter for the pieces; I note it because the card is small.
5. COULD BE BETTER, 1280. The columns of prose break in the middle of a sentence (`love-1280.png`,
   y=448, foot of column 1).

Best, to keep: the player. A ring, a hairline, and when it plays a black disc, a dot on the line and
the time in small figures (`shots-motion/record-playing-1280.png`). It is the right weight for this
page. Keep the credits in italic under it.

### 6. *Othello* on the blackboard (`othello-1280.00–01.png`, `othello-390.00–06.png`, `shots-pick-*`, `shots-mid/othello-768.00.png`)

The eye goes to the title, then to the six headed lists. Right. This is the scene the page exists
for, and at 1280 the board reads at a glance as six small tables copied into a book.

1. BROKEN, both widths, current build. **The word "null" is printed in the figure.** Follow
   Emilia, Roderigo or Lodovico: under the italic line that says the witness records nothing more of
   this one, the page prints `null` in the type of running words (`shots-pick-Emilia/othello-1280.fig.png`,
   y=775; `shots-pick-Emilia/othello-390.02.png`, y=1230). Three of the seven names do it. Cause, for
   the lead: `class-figures.js` line 109 hands an empty value to `replaceChildren`, which prints it.
2. POOR, both. **The names to follow do not look as if they can be pressed, and the word "Follow"
   looks like one of them.** All eight are the same grey spaced capitals in one row
   (`othello-1280.00.png`, y=1132; `othello-390.02.png`, y=800–865; `shots-zoom/othello-follow-1280.png`).
   The page then has to say in a sentence what to do. Mend: "Follow" in lower-case italic as a lead-in,
   the seven names in ink with a hairline under each (the red rule replaces it when chosen). Then the
   sentence of instruction can go.
3. POOR, 390. **On a phone the row of names stands under two screens of schemes.** A name is pressed
   and what it does, one name lit in six lists, happens out of sight above (`othello-390.00–02.png`:
   the board runs from y=1010 of piece 00 to y=1065 of piece 02, about 1,750 px of page). The summary
   under the name saves it, but the figure's point is lost. Mend: at phone width set the six schemes
   two to a row with smaller heads (the lists are short), or put the row of names at the head of the
   board.
4. POOR, both. **The page jumps when a name is chosen.** The board grows by 50 to 160 px according
   to the name, and everything under it moves (page height 22,085 px with no name, 22,246 px with
   Othello). Shut, the board ends in a blank band where the answer will go (`othello-1280.00.png`,
   y=1185–1245). Mend: keep the room for the longest answer, or let the answer stand to the right of
   the row of names at 1280, where the board is empty.
5. POOR, 1280. What Auden said of the chosen name runs 820 px wide, about 110 letters to a line
   (`shots-pick-Iago/othello-1280.fig.png`, y=740–840). Mend: the measure of the prose, or two columns.
6. POOR, 1280. **The opening prose stands at half width beside a bare half page**
   (`othello-1280.00.png`, y=260–480, right). See "One measure".
7. BROKEN in a small way, both widths, and in the piece itself. **On the Othello card a link runs
   through a speaker's name.** The upright stroke under the word at the head of Iago's line crosses
   the label over the next speech, between its letters, and ends in a dot under it; the slanted
   stroke above ends in the air beside the label "Iago", 40 px short of the word it is for
   (`shots-zoom/othello-card-1280.png`; `othello-390.04.png`, y=1150–1360). The
   plate on the piece's own page does the same (`shots-piece/othello-echo-0-figure-1280.png`), so the
   fault is the plate's and the card inherits it. If the strokes are meant to point at the speaker,
   they should stop above the label; if at the word, they should reach it.
8. COULD BE BETTER. With a name chosen the commas between names in scheme I stay black while the
   names fade (`shots-pick-Iago/othello-1280.fig.png`, first two lines of scheme I), and the fading
   takes the board down to about a third of its ink. Fade the commas with the names, and fade less.
9. COULD BE BETTER, 390. A pale rule under the heading and the ink rule of scheme I 17 px below it
   read as a doubled rule (`othello-390.00.png`, y=1140–1175).

Best, to keep: everything about the six schemes at 1280 and at 768. Ink rule, roman numeral, head
in the display face, the two sides in italic, the names in the text face, the one name set apart
between two dashes. And the answer when a name is chosen: the name large in red, the six places in one
line of italics with their numerals, then what he said (`shots-pick-Othello/othello-1280.fig.png`).
The second sheet of questions and the two lines under the cards that say when each was answered
(`othello-1280.01.png`, y=1155–1255) are the best piece of the page's telling: the reader is sent on
to the next meeting as the class was.

*From here on I took no new pictures: the lead began mending the head and the first three scenes, so
the styles were changing. Scenes 7 to 14 and the end are judged from the given pictures and from the
ones I had already taken (`shots-mid/`, `shots-view/`, `shots-motion/`).*

### 7. Falstaff and the Prince (`falstaff-1280.png`, `falstaff-390.00–02.png`, `shots-open/falstaff-1280.png`)

The eye goes to the title, then to the one sentence set large in italics under it, then to the
prose. Right. The sentence is the lecture's first, and for the first time on the page the room is
heard before it is described.

1. POOR, 1280. **The card stands beside a shut fold and a bare half page** (`falstaff-1280.png`,
   y=1050–1465, right). As in scene 3. Open, the pair is whole (`shots-open/falstaff-1280.png`).
2. POOR, both. **This is the longest unbroken run of words on the page**: six paragraphs, 560 px of
   two columns at 1280 (`falstaff-1280.png`, y=340–900) and about 1,400 px at 390
   (`falstaff-390.00–02.png`), with no board, no sheet and no second sentence set out. It is where the
   page reads most like a digest of a lecture. I have no mend that does not need words the witness
   may not give. If he gives another sentence word for word, set it out like the first.
3. COULD BE BETTER, both. The title at 80 px and the sentence at 58 px stand 75 px apart with nothing
   between; the line that says whose words they are comes after, small (`falstaff-1280.png`,
   y=60–270). Mend: put that line above the sentence as a small label, so a label always stands
   between a title and a sentence set large. It matters more in scene 8.

The card is the clearest on the page: three colors, three keys, each key a plain phrase, and the
lines so marked that the key is hardly needed (`falstaff-390.02.png`). The columns of prose break
between paragraphs here, the only scene where they do.

Best, to keep: the sentence set large; the card.

### 8. *The Tempest* (`tempest-1280.00–01.png`, `tempest-390.00–04.png`)

The eye goes to the title and the sentence under it together, and that is the fault.

1. POOR, 1280; COULD BE BETTER, 390. **The title and the sentence he opened on are both in large
   italics, one over the other, and read as one heading in two lines** (`tempest-1280.00.png`,
   y=50–240). In scene 7 the title is upright and the two are told apart at once. At 390 the line of
   sources falls between them and helps (`tempest-390.00.png`). Mend: as in scene 7, the line that
   says whose words they are goes above the sentence as a label; and a little more room.
2. POOR, 1280. Two paragraphs after the board at their own measure beside a bare half page
   (`tempest-1280.00.png`, y=1215–1465). See "One measure".
3. COULD BE BETTER, 1280. The two cards end 50 px apart (`tempest-1280.01.png`, y=448 and y=500).
   Both carry the same author and title at the head, so the eye has only the link lines to tell
   them apart, and those stand at two heights.
4. COULD BE BETTER. The glosses under the words of the second card are 12 px italic
   (`tempest-390.03.png`, y=1355 and y=1470). As on the Bizet card.
5. COULD BE BETTER, 1280. The columns break in the middle of a sentence (`tempest-1280.00.png`,
   y=847, foot of column 1).

Best, to keep: the three numbered lines on the board (see the figures); the Ariel card, where the
crossing is drawn as two strokes that cross and nothing more.

### 9. A chart the width of the room (`chart-1280.png`, `chart-390.png`, `shots-mid/chart-768.png`, `shots-mid/chart-1024.png`)

The eye goes to the title and then to the chart. Right. At 1280 the chart is as wide as its sheet
and the title is made good.

1. POOR, 390. **On a phone the chart looks whole and is a third of itself.** Three pairs are in
   sight; the right edge of the screen falls exactly on the rule between the third column and the
   fourth, so no word is cut and nothing says there are six pairs more (`chart-390.png`, right edge).
   Measured: 358 px in sight of 1,044. Mend: under the label, one line in italics that says how many
   pairs there are and that the chart runs on to the right; set the columns so that the fourth is cut
   through its words; let the two ink rules run off the right edge of the screen itself.
2. POOR, 768 and 1024. **The last column in sight is cut through its words** (`shots-mid/chart-768.png`,
   right edge, seventh column; `shots-mid/chart-1024.png`, ninth). At 1024 only 45 px of chart are out
   of sight, and it looks like a slip. I am not sure how much of this is the picture: the tool hides
   scroll bars, and a desk browser may draw a thin one under the chart. A phone draws none until the
   chart is touched. Mend at 1024: narrow the columns by 6 px each and the chart fits whole.
3. POOR, 1280. One paragraph at its own measure beside a bare half page (`chart-1280.png`,
   y=260–400). See "One measure".

Best, to keep: the chart itself. Ink rules above and below, hairlines between the columns and the
two rows, the words in the display face, no heads and no key, because the witness records none. It is
the plainest figure on the page and the most like a page of a well-made book.

### 10. The examination (`exam-1280.png`, `exam-390.00–03.png`)

The eye goes to the title, skims the two columns, and lands on the four stacks of strokes with
their red lines. Right. This is the most beautiful figure on the page.

1. POOR, 390. **Under each canto the names of the passages turn back under their red dash**
   (`exam-390.02.png`, y=800–880; `exam-390.03.png`, y=260–410). The second line of a name starts at
   the edge, under the dash, and not under the first word. Mend: hang the dash in its own column.
2. COULD BE BETTER, both. The four stacks end at heights 9 to 20 px apart, so the four lines of
   word counts stand on four levels (`exam-1280.png`, y=1132–1151; `exam-390.02.png`, y=770 and
   y=788). The difference is too small to read as scale and reads as a slip. Mend: set the four
   counts on one line; the stacks keep their own lengths above it.
3. POOR, 1280. The last paragraph, three lines, at its own measure beside a bare half page
   (`exam-1280.png`, y=1440–1510). See "One measure".
4. POOR, 390. The label over the title turns and leaves its last word alone (`exam-390.00.png`,
   top). The same word stands alone in the contents.
5. COULD BE BETTER. Nothing shows that a stack of strokes can be pressed. It is a link to the canto
   in the reader, and so is "Read it." under it, so nothing is lost. Leave it.

Best, to keep: all of the figure. Four cantos as four small pages, a stroke to a paragraph, the lines
this site opens in red, the count of words under each and the way in. A reader sees what was to be got
by heart, can open any of it, and is asked nothing. It is the page's best answer to what he asked for.

### 11 and 12. The two small scenes: Papers; At 1223 Pontiac Trail (`papers-1280.png`, `friday-1280.png`, `papers-390.png`, `friday-390.png`, `shots-view/small-pair-1280.png`)

The given pictures show each alone. The only picture of the two side by side is mine, of the 07:49
build, in which the first has a longer title and two paragraphs more.

Do they hold together? Yes. Two ink rules, two labels, two titles at 38 px, two columns of the same
width with the page's gutter between. They read as two notices, a step down from the afternoons,
and the eye takes the left before the right. They end 95 px apart and need not end level.

1. POOR, both. **What was set through the term is in the plainest place on the page.** The papers
   that set one work against another, the exercise of putting a poem into English that came in with
   the 07:49 build, and the book he recommended are four paragraphs under a 38 px title, with no
   sheet and no card (`small-pair-1280.png`, left column, y=260–730; `papers-390.png`). The questions
   for Tuesday have a sheet at 29 px and the cantos have a figure. The owner named "the assignments
   that survive", and these are the hardest of them to find. See "Where design would repay most".
2. COULD BE BETTER, both. The lines of sources turn inside a reference. In the given build the title
   of the memoir is split (`friday-390.png`, y=165–205). In the 07:49 build both lines do it
   (`small-pair-1280.png`, y=205–235, left and right). Mend: tie each reference so that a line turns
   only after a semicolon.
3. COULD BE BETTER, 1280, 07:49 build. A hyphened word breaks at its hyphen at the end of the first
   paragraph (`small-pair-1280.png`, left column, y=405–433). Mend: a hyphen that does not break.

Best, to keep: the pair as a pair, and the step down in the title.

### 13. The next course (`after-1280.png`, `after-390.00–01.png`, `shots-view/strip-1280-04.00.png`)

The eye goes to the title and finds nothing else to go to.

1. POOR, both. **The barest full scene: a title at 80 px over 330 px of prose** (`after-1280.png`,
   whole). The title is as large as that of any afternoon and the scene holds least. And the one
   thing in it that was set to a class, the project for the term, stands in the middle of the first
   paragraph (`after-1280.png`, left column, y=220–370; `after-390.00.png`, y=390–730). Mend, the
   small one: make it the third small scene. The better one is under "Where design would repay most".
2. COULD BE BETTER, 1280. The columns break in the middle of a sentence (`after-1280.png`, foot of
   column 1; the same in the 07:49 build, `strip-1280-04.00.png`, y=861).
3. COULD BE BETTER, 1280, 07:49 build. The last line but one ends on the first word of a book's
   title, inside a parenthesis (`strip-1280-04.00.png`, right column, y=800–830).

Best, to keep: the last paragraph, the one place where the page says what the site's own notes on
single words come from.

### 14. What they said of it (`since-1280.png`, `since-390.00–02.png`, `shots-mid/since-768.png`)

The eye goes to the title, then past the prose to the six quotations. Right.

Do the six hold together? Yes. One label, one hairline, six sayings of four to ten words in the
display italic, each with a name, a few words of who and when, and a page. Three to a row at 1280,
two at 768, one under another at 390, and no saying is cut at any width. Not all six are praise,
and that keeps the row from being a wall of praise. It is a good ending.

1. POOR, 1280. **Three paragraphs at their own measure beside the largest bare half on the page**
   (`since-1280.png`, y=180–530, right; 350 px by 540). See "One measure".
2. COULD BE BETTER, both. The line of sources turns inside a reference to two pages
   (`since-1280.png`, top right, y=75–100; `since-390.00.png`, y=180–225). As in scenes 2, 11, 12.
3. COULD BE BETTER, both. **A name in semi-bold with two grey lines under a large quotation is the
   form of the praise on a publisher's site** (`since-1280.png`, y=740–800; `since-390.01.png`, whole).
   Mend: set the name in the spaced small capitals the cards use for an author, in ink, and drop the
   bold. Keep the two lines under it.
4. COULD BE BETTER, 1280. In the first row the middle saying is one line and its neighbors two, so
   the middle name stands 36 px above the other two (`since-1280.png`, y=712 and y=748). Leave it, or
   set the names of a row on one line.

Best, to keep: the six, their size, and the choice of them.

### The end of the page (`end-1280.png`, `end-390.png`, `shots-open/end-1280.png`, `shots-open/end-390.00–01.png`, `on-1280.png`, `on-390.png`, `shots-view/strip-1280-04.02.png`)

The sources are a short list in a centered column 680 px wide, with hanging indents, under a small
label and a hairline. The head and the lede of the page stand in the same centered column, so the
page is narrow at its two ends and wide in the body. That frame is good. Keep it.

1. COULD BE BETTER, both. **Two signs for one thing.** The fold here has a small triangle; the folds
   in the scenes have a plus at the far right (`end-1280.png`, y=372; compare `ego-1280.01.png`).
   Mend: one sign for every fold on the page. See "The folds".
2. COULD BE BETTER, 390. The sources and the two links at the foot begin 4 px inside the edge the
   scenes keep (`end-390.png` and `on-390.png`, left edge at 20 px; `since-390.00.png`, 16 px). The
   lede does the same. Mend: one gutter for the page.
3. COULD BE BETTER, 1280. Open, the fold runs at about a hundred letters to a line
   (`shots-open/end-1280.png`, y=395–890). It is a list of notes and can bear it. Leave it.

Open, the fold reads as the notes at the back of a book: the same type as the sources, the same
hanging indent, no boxes (`shots-open/end-1280.png`; `shots-open/end-390.01.png`). It is the right
form for what it holds, and it is the right thing to keep shut.

The two links at the foot are the site's own rows, name on the left and a label with an arrow on the
right, the label under the name at 390 (`on-1280.png`, `on-390.png`). Nothing to mend.

## The figures, one by one

The faults are under the scenes. Here each figure is put to the three questions of the brief: does
it read as something written on a blackboard and copied into a well-made book; is it clear what can
be pressed and what then happens; does anything look like a dashboard or a form.

**The table of three lines and two cases (scene 3).** A book's table at 1280, and the best thing in
it is done by type alone: what was chalked is large and in the display face, what was said about
it is small and in the text face. Nothing can be pressed and nothing looks as if it could. At 768
and 390, stacked, it turns into a form: three blocks, each printing the two case labels again in
small capitals over a sentence (`three-390.01–02.png`). Mend for the phone: the three lines first,
together, as they stood on the board; then each case once, with its three answers under it.

**The six schemes and the names to follow (scene 6).** The figure that best answers the first
question. Six small headed lists under six ink rules look like what a careful student copied and a
printer then set. Pressing is the weak part: the names in the row do not look like things to press,
and the names on the board itself, which is where a hand goes first, cannot be pressed at all
(`shots-zoom/othello-follow-1280.png`). Mend: let a name on the board choose itself too. What
happens when a name is chosen is clear and is the page's best moment of use: one name stands in red
in the six lists while the rest fade, and under the board come the name, its six places and what he
said. Nothing in it looks like a dashboard. The six places in one italic line are the nearest thing
to a row of tags, and they have no boxes, so they pass.

**The three numbered lines (scene 8).** Right as it stands. Numbers small and grey in parentheses,
the lines in the display face at about 26 px, nothing else on the board. At 390 each line turns twice
on a hanging indent and still reads as one line (`tempest-390.02.png`, y=290–790). The column for the
numbers is 47 px wide at 390 and could give 12 px to the words. Nothing to press.

**The chart in two rows (scene 9).** At 1280 the most book-like figure on the page: two ink rules,
hairlines, eighteen entries, no heads, no key (`chart-1280.png`, y=540–725). Nothing to press. Its one
fault is at the narrow widths, where a reader is not shown that it runs on (scene 9, items 1 and 2).

**The reading list as bars (scene 2).** The figure nearest to a dashboard, and it is saved by its
drawing: black, open and hatched bars with square corners on one base line look engraved
(`first-1280.png`, y=1255–1325). Three things pull it the other way. The key is a chart's legend,
three swatches each with a phrase (`shots-bar4/first-1280.fig.png`, y=242). Thirty-three bars say
nothing until one is pressed, so at first sight the figure is a bar code. And the pressed bar wears
a browser's ring. Mend: write the names of the five or six longest works over their own bars in
small italics, as a map names its largest towns, so that the strip can be read before it is touched;
then the legend can shrink to a line of words. What can be pressed is said in a sentence under the
strip, which a figure should not need; with names on the bars it would not. What happens on
pressing is clear and good: the name, the length and the way to the piece arrive on one line.

**The four cantos as strokes (scene 10).** The best figure on the page and the furthest from a
dashboard: it shows a quantity, the length of what was to be got by heart, and no reader will take
it for a chart. Four small pages of grey strokes, the opened lines in red. What can be pressed is
plain where it is underlined, and the strokes, which can be pressed too, lose nothing by not saying
so. It is not a blackboard and does not pretend to be one. Its sheet is headed as what was to be
written out, which is true to it.

**All six together.** Each stands on the same sheet of tinted paper with a small label, a source at
the right and a hairline under both. That is consistent, and it is also the page's most-repeated
shape: six boards, two sheets of questions and eleven cards are nineteen panels of one make. See
"Beautiful, or tidy" under the whole page.

## The cards

**Do the cards of one row sit well together?** Not quite, where there are two. They are set as two
columns that fill by height, so each card is as tall as its own lines and the two feet stand apart:
40 px in scene 5, 90 px in scene 6, 50 px in scene 8 (`love-1280.png`, y=1275 and y=1317;
`othello-1280.01.png`, y=1046 and y=1137; `tempest-1280.01.png`, y=448 and y=500). The difference is
too small to look meant. Mend: a row of exactly two as a grid, both cards the height of the taller,
the line that opens the piece at the foot of each. Three cards (scene 4) can stay as they are. At
390 cards stack and the question does not arise. In scene 6 the two cards stand 22 px under the
sheet of questions and 22 px apart: three panels in a block, close but in order.

**Is any card a puzzle without its page?** Three are, in this order.

1. The Wagner card (scene 5). Four lines of German with no English under them, beside a card that
   has English under every line; a letter at the end of each line that nothing explains; a brace.
   The line of note under them says what the passage is and not what the marks show
   (`shots-zoom/love-wagner-1280.png`). Mend, if the plates allow: the English under each line as on
   its neighbor, and the letters off.
2. The Kierkegaard card (scene 3). The marks show one thing and the note says another (scene 3,
   item 8). A reader cannot tell why this passage stands under this afternoon.
3. The Melville card (scene 4). Three colors, a drawn arc, a term, its gloss and three keys under
   two lines of prose (`ego-1280.01.png`, y=0–215). It can be worked out. It is the most to work out.

The others read at once: the two with Falstaff (scenes 6 and 7), the two from *The Tempest*, Kafka,
Dante, Bizet. The Othello card reads at once but for the stroke through a speaker's name (scene 6,
item 7).

**Small type on the cards.** The glosses under single words are 12 px italic (Bizet, the second
*Tempest* card). They are the smallest words on the page that a reader is meant to read. One size
up, if the plates' own critics agree.

## The records

There are two places. In scene 5 a record can be played. In scene 4 a record is named and none can
be played.

**Is it clear which is which?** Yes, by the plainest sign: one has a round button and the other has
none. Nobody will press for a record in scene 4. What is less clear is what the reader is being
given in each.

- Scene 5 (`love-1280.png`, y=560–760; `shots-motion/record-playing-1280.png`, `-390.png`). The
  column opens with a sentence in grey italics saying that the record is not the one he played.
  Then the name of what it is, the button, the performers. The disclaimer is read first and the
  thing itself second (scene 5, item 1). The player is right: keep it exactly.
- Scene 4 (`ego-1280.01.png`, y=430–1000). Under the same label, the left column tells the record
  he played and what he told the class to hear in it; the right column is one grey italic sentence
  about why no record is here, and then nothing for 450 px. The place where a record is named looks
  like a place where something failed to load.

Mend for scene 4, within the look: set the record he played as a record. In the right column, in
the display face, the composer and work, the movement, the players, as the label of a disc or an
entry in a catalogue of the time would give them; all of it is already in the page's own prose at
the left. Under it, small, the sentence that no record so old can be given. Then the column holds a
thing, the two afternoons with music look alike, and the difference between them is the button.
A further step, if the lead wants one, is under "Where design would repay most".

## The page as a whole

Judged from the whole page in strips (`shots-view/strip-1280-00..04.png`, `strip-390-00..06.png`, the
07:49 build) and from the scenes. In that build the page is 22,900 px tall at 1280 and 34,200 px at
390: about twenty-eight screens on a desk and forty on a phone.

### An account of the room, or a course site

For most of its length it is an account. A reader is in a room with a man who stands half turned
to the windows, chalks six lists, plays a record and calls out work as the class breaks up. That
comes from these things, which are to be kept whatever else changes:

- The head of every scene. The small label says when in the room's own terms (the same afternoon,
  the next meeting, an afternoon before a weekend) and never a week or a number. The title names a
  thing in the room. The witness stands at the right, small.
- The two sentences set large in scenes 7 and 8. The room is heard.
- The two sheets of questions, and under the second the line in small italics on how he left the
  room (`othello-1280.01.png`, y=536).
- The two rows under the cards of scene 6 that say when each question was answered and take the
  reader down to that meeting (`othello-1280.01.png`, y=1155–1255).
- The boards, and the record that plays.

It slips toward a course site, a syllabus or a report in these places, worst first:

1. **The head** (given and 07:49 builds): a row of key facts and a dated list of fourteen sessions
   before anything happens. Said in full above. The lead is mending it as I write.
2. **The first afternoon reads as a report with apparatus.** Ten page references in parentheses
   stand inside its running words and notes, with the line of sources at the head, a source over
   the list and a source over the figure besides (`shots-view/strip-1280-00.png`, y=2300–3100). The
   whole page has thirty such references (counted in the page's data at 08:09) and a third of them
   are here; the last scene has four in three short paragraphs. The rule that every fact has its
   witness and page is the owner's and stays. The mend is to the look: set a reference inside a
   sentence a size smaller and in the grey of the labels, so the sentence is read through and the
   page is there for whoever wants it.
3. **Scenes 7 and 8 are digests.** Six paragraphs each, in two columns, almost every sentence
   beginning with what he said, called or read (`falstaff-1280.png`, y=340–900; `tempest-1280.00.png`,
   y=340–850). This is where the page is most like notes handed round after a lecture. The sentence
   set large at the head is what keeps each a scene. I can see no mend by design alone.
4. **The end of six scenes is one module**: a label, a rule, one or two cards, a ruled line that
   opens. By the third time the reader sees a template (`strip-1280-01.png`, y=330–770 and
   y=4700–5000; `strip-1280-02.png`, y=4100–4530; `strip-1280-03.png`, y=2130–2820). It is what a
   site does at the foot of each article. The cards are worth their place. The mend is to stop them
   looking added on: see "The folds", and item 2 of scene 3.
5. **The three plain scenes near the end** (11, 12, 13): from the examination to the six
   quotations nothing is shown, only told. On a phone that is about three screens of words. This
   is also where the surviving work is hardest to find.

### Exploring what the class was set

**Is the reader set a task anywhere?** No. There is no box to type in, no score, nothing to tick,
and no sentence that tells the reader to try. The only orders on the page are the ones Auden gave
the class, and two short lines that say how to work a figure (under the bars of scene 2 and under
the names of scene 6). Both lines could go if the figures showed by their look what can be pressed.

**Can it be explored?** Yes, and at its best very well:

- The questions for Tuesday and for next time (scenes 4, 6): each on a sheet, the passages they are
  about on cards under it, the answers folded or a jump away. This is the page doing what he asked.
- The four cantos (scene 10): the length of the task can be seen, and each canto opened.
- The five questions of the interview and the six definitions (scenes 1, 2): large, plain, at the side.
- The reading list (scene 2): good on a desk. On a phone, in the builds I saw, it could not be used.

**What is hard to find:**

1. The papers, the exercise of putting a poem into English, and the project of the next course.
   They are in running words in the two smallest scenes and in scene 13, with no sheet, no list and
   no card. A reader who came for the work will pass all three.
2. What two of the class wrote, and what Auden wrote later, about the questions. The folds that hold
   them are the quietest lines on the page (scene 4, item 4).
3. The way from the reading list to the list itself. It is one line of small grey italics at the
   top right of the figure (`shots-bar4/first-1280.fig.png`, y=55, right). The link at the foot of
   the page and the menu both lead there, so nothing is lost; it is only late.
4. No thread joins the things that were asked. Seven of the fourteen scenes hold one (1, 2, 4, 6,
   10, 11, 13) and nothing marks which. I would not add a list of assignments: that is the course
   site again. The better thread is the same two forms for everything set to the class, so that a
   reader learns them at scenes 1 and 4 and knows them on sight after: see "Where design would
   repay most".

**The phone.** In the builds I saw, four of the six figures had their chief fault at 390: the table
turned into a form, the six schemes ran two screens with the names beneath, the chart showed a third
of itself, the bars could not be pressed. The lines and the cantos were right there. The figures
were drawn for a desk, and the phone had had less care than the desk.

### Beautiful, or tidy

**Beautiful**, and worth protecting through any mend: the heads of the scenes; the sheets of
questions in the italic display face; the six schemes; the four cantos; the chart at 1280; the two
sentences set large; the six quotations; the player. Any of these could be a page of a printed book.

**Merely tidy:**

1. **Nineteen sheets of one make.** A blackboard, a sheet of questions and a passage cut from a
   book all stand on the same tinted paper with the same rounded corner, the same label and the same
   hairline. Each is well made. Together they make every scene the same shape, and the eye stops
   telling what was on the wall in 1941 from what this site has opened. What I would try: take the
   paper away from the six boards and let each stand on the page between its own rules, under its
   label. The chart then runs the whole width of the page, as its title says. The paper then means
   one thing, something handed to the reader: a sheet of questions, a passage. And at 390 a board
   gains 36 px of width, which the schemes and the table need.
2. **Every scene is built the same way**: rule, title, two columns, a panel, a short run, cards, a
   fold. No scene is composed for what it holds. Scene 6 could open on its board. Scene 9 is a
   single thing and could be nothing but its title and the chart.
3. **The bare half pages at 1280.** About ten of them, each beside a short run or a single card
   (see "One measure"). They are the page's most common sight after the sheets.
4. The head as it was, the folds, the afternoon with no record, the two small scenes and scene 13.
   Each is said in its place.

### Small type

Read from the styles, not from the pictures. No running words on the page are under 15 px: the
prose is 17.5 to 19.5 px and the notes under figures 15.5 px. The lines of sources are 14 to
17.5 px in italic. The labels in spaced capitals are 11.5 and 12 px, and the smallest are 10.5 px (the heads
of the table's columns, and the labels of the strip of facts while it stood): at the floor, and
they hold because they are capitals with room between them. The numerals beside the questions and
the definitions are 13 px. The one thing under the floor is on the cards: the glosses under single
words, 12 px italic lower case. Nothing on the page itself needs to grow.

### One measure

The fault. At 1280 the long runs of prose are set in two columns, each 558 px wide, with a gutter
of 64 px. A short run is set as one block up to 648 px wide. So a short run is 90 px wider than the
column over it, its right edge runs past the gutter and lines up with nothing, and the half page
beside it is bare. It is the commonest fault of the page at 1280.

**The mend, for the lead.** At 980 px and wider give running words one width everywhere on the
page: the width of one column of the two-column setting, so that the right edge of every run falls
on the left edge of the gutter that the columns, the cards and the side lists already keep. A short
run of two paragraphs or more is set in the two columns like the long runs; a short run of one
paragraph stays in the left column. The same right edge holds for the words inside an opened fold,
for what he said of a followed name, and for the notes under the figures, which now run 715 to
820 px wide.

Where it shows, in the pictures I have (x is of the 1,220 px picture; the gutter is x=578–642):

- `first-1280.png`, y=800–1130 (given build only; the 07:49 build sets this run in two columns).
- `three-1280.png`, y=1030–1110: one paragraph. Left column.
- `ego-1280.01.png`, y=1060–1140: one paragraph, the recess. Left column.
- `othello-1280.00.png`, y=260–480: two paragraphs. Two columns.
- `tempest-1280.00.png`, y=1215–1465: two paragraphs. Two columns.
- `chart-1280.png`, y=260–400: one paragraph. Left column.
- `exam-1280.png`, y=1440–1510: one paragraph. Left column.
- `since-1280.png`, y=180–530: three paragraphs. Two columns.
- Opened folds: `shots-zoom/love-open-fold-1280.png` and `tempest-open-fold-1280.png`, body 715 px wide.
- The followed name: `shots-pick-Iago/othello-1280.fig.png`, y=740–840, 820 px wide.
- Notes under figures: `shots-bar4/first-1280.fig.png`, y=295–380, and `exam-1280.png`, y=1275–1340,
  both 745 px wide. Inside a sheet the note should end on the same line of the page, x=578.
- Below 980 px, one thing: `shots-mid/door-768.png`, where the prose keeps 648 px and the list under
  it runs to 736. Let the list take the measure of the prose.

Of the ten bare half pages at 1280, that mend fills three, and in four more it leaves one paragraph
that ends where the column above it ends. Two are filled when a fold beside a single card stands
open (see "The folds"). The last is the afternoon with no record (see "The records").

**The breaks between the two columns.** I marked each place where the columns break inside a
sentence (scenes 4, 5, 8, 10, 13). Taken together I would leave them. A book in two columns breaks
inside sentences on every page, and in none of these places is a single line of a paragraph left
alone at the head or the foot of a column. Mend one only if a later change of words leaves a line
alone.

### The folds

There are seven in the scenes and one at the end. They hold the best reward on the page: what two
of the class wrote, where a remark came back, what Auden wrote of the same work years later.

1. POOR, both. **They do not look as if they open.** A fold shut is one line of 12 px grey
   capitals between two hairlines, with a small plus at the far right, up to 1,100 px from the words
   (`ego-1280.01.png`, y=283–372; `tempest-1280.01.png`, y=517–560). The labels of the page ("On this
   site", "On the blackboard") are in the same capitals and open nothing. The rows that do something,
   the link to a piece and the jump to a later meeting, are in the display face at 22 px with their
   sign at the right (`ego-1280.01.png`, y=215–266; `othello-1280.01.png`, y=1155–1255). Mend: set
   a fold as those rows are set, in the display face, in italic to tell it from a link, with the
   plus where their arrows stand. Then the page has three rows of one family and three signs: an
   arrow across for a piece, an arrow down for a later meeting, a plus for what opens here.
2. POOR, 1280. **A fold beside a single card should stand open** at 980 px and wider (scenes 3 and
   7). Shut, it leaves a hole; open, the pair is the best-balanced foot of any scene
   (`shots-open/falstaff-1280.png`, y=960–1470).
3. COULD BE BETTER. **One sign.** A plus in the scenes, a triangle at the end of the page.
4. COULD BE BETTER, 1280. Open, the body of a fold is 715 px wide. See "One measure".

Inside, a fold is right: running words at the size of the prose and the source in small italics
under them (`shots-zoom/love-open-fold-1280.png`). Keep that.

### Where design would repay most

Two places. In both the page has the facts and has not yet given them a form.

**1. The work that was set and has no shape: the papers, the exercise in translation, the project
of the next course (scenes 11 and 13).** He asked for "the assignments that survive", and these
three are the ones a reader will not find. What I would do, in the forms the page already has:

- "Papers and exercises" keeps its place in the pair. Under its opening paragraph, in the same
  column, goes a list between hairlines in the display face, as the five questions of scene 1 are
  set: one line to each thing that survives, each with its witness at the right in small italics.
  Nothing is added to the record. What now lies in the middle of paragraphs is set out.
- Under the line for the one paper whose two works are known, two rows that open those two works
  on this site, the same two pieces whose cards stand in scene 4. A reader can then hold the two
  together, which is what the paper asked.
- "The next course" is set as scene 1 is: the prose at the left, and at the right, under a small
  label, the project of the term as one line in the display face with its witness, and under that
  one card of a single word from a piece on this site. The scene's last paragraph already says
  that the site's notes on words are a small part of that exercise. A reader sees one word done
  and knows what doing every word of a poem would be. The scene is no longer a title over prose.
- Then everything set to the class stands in one of two forms, the list or the sheet, both in
  the display face, and a reader who has seen scenes 1 and 4 knows the rest on sight. No list of
  assignments is needed and nothing is asked of the reader.

Where the words of a task are not on record as his, the line stays in the upright display face, as
the list of scene 1 is. The italic of the two sheets reads as his voice and should be kept for it.

**2. The afternoon of the record that cannot be played (scene 4, `ego-1280.01.png`, y=430–1000).**
This is the passage the page itself calls the nearest thing on record to what the title of the
course meant, and it is the barest band on the page. The small mend is under "The records": set
the record as a record. The larger one, which needs work from the score and is for the lead to
weigh: draw what he told the class to listen for. The movement is short and its two parties, the
orchestra and the piano, take turns almost throughout. Two rows of strokes along its length, one
row for each, a stroke for each bar in which that party plays, would show them apart and then
together at the close, in the manner of the four cantos. It would be this site's drawing from the
printed score and would say so in its label, as the cantos figure does. It makes no sound and is no
scenery. It gives the reader's eye what the class was given for the ear.

If only one can be done, do the first.

## The front page and the menu

Pictures: `shots-home/home-1280-0.png`, `home-1280-1.png`, `home-390-0.00.png`, `home-390-0.01.png`
(taken 07:39; the script of the front page changed at 07:50, and the styles of the band read the
same at 08:18 as they look in the pictures).

**The menu.** Clear at both widths. "The class" is the first of four items, in the same spaced
capitals as the rest, and darker when the reader is on that page (`shots-view/view-1280-screen0.png`,
top right; `view-390-screen0.png`, second line). At 390 the four fit on one line under the name of
the site. Nothing to mend.

**The way in on the front page.** It is a band the width of the page: an ink rule, the label "The
class", one line in the display face at 64 px, two lines of grey italics, a small arrow at the far
right, a hairline (`home-1280-0.png`, y=1322–1500; `home-390-0.01.png`, y=650–1090). The whole band
is the link, which is right.

1. POOR, both. **It reads as a heading with nothing under it, and the reader has just been told
   to expect three.** The paragraph above it speaks of the three headings below. The next thing is
   this band, which has exactly the form of those headings: ink rule, small label, large line,
   italic line (compare `home-1280-1.png`, y=144–260). Then a gap, and the first of the three. The
   only sign that the band goes somewhere is an arrow of 22 px at the far right edge, 440 px beyond
   the end of the title and 60 px below it at 1280 (`home-1280-0.png`, x=1218, y=1478). Mend: put
   the arrow at the end of the large line, in the display face and at its size, as the rows that
   open a piece have it; and let the large line take the red, or a rule under it, when the pointer
   is on the band.
2. POOR, both. **Its place.** It is 1,320 px down at 1280 and about 1,035 px down at 390: in the
   second screen at both, under the hero and the paragraph. He asked for "an intro page about the
   class"; on the front page the class comes after the first work and after the account of the
   works. Mend: move the band up to stand directly under the hero card and above the paragraph.
   Then the paragraph is followed by its three headings, and the class is the first thing a reader
   meets after the one passage.
3. COULD BE BETTER, 1280. The right half of the band is bare (`home-1280-0.png`, x=800–1200,
   y=1340–1500). It could hold a few of the afternoons by title, small, in the display face, so
   that a reader sees there are scenes behind the door. Not a picture and not a card.

Does it sit well? In its type, yes, at both widths. The rule and the label stand on the page's
edges, the large line turns into two balanced lines at 390, and the italics are the size of the
italics under the three headings. Keep the type. Change the place and the sign.

## Hover, focus and motion

What I saw with motion on, before I stopped taking pictures (`shots-motion/`, my own short script,
1280 only):

- **The six schemes are written on one after another** when the page comes to them. At 0.7 s the
  first is coming up pale; at 1.5 s three are written and the fourth is coming; by 3 s all six stand
  (`schemes-t0700.png`, `schemes-t1500.png`, `schemes-t3000.png`). The board keeps its full height
  from the start, so nothing moves. It is quiet, it follows the witness's numbers, and it is
  within the look: no chalk, no sound. Keep it.
- COULD BE BETTER. While the six come on, the row of names and the line of instruction already
  stand under an empty board (`schemes-t0700.png`, y=690–770). Bring the row on last. (In the
  files at 08:18 the row stands at the head of the board, so this may no longer arise.)
- The three lines of scene 8 were all written by 0.7 s (`lines-t0700.png`). Of the table and the
  chart I saw nothing: in every frame I can use they are already written. The first frame of each
  series (`*-t0150.png`) was taken while the page was still moving to its place and shows nothing
  I can judge.
- **The record playing** (`record-playing-1280.png`, `record-playing-390.png`): the ring fills to a
  black disc with two bars, a dot moves on the hairline, the time stands at the right in small
  figures. Clear at both widths.
- COULD BE BETTER. **Two marks for one thing.** A bar of the reading list under the pointer or the
  keyboard wears a red ring with rounded corners (`bar-hover-1280.png`, `bar-focus-1280.png`). A name
  of the six schemes under the keyboard wears a blue ring with square corners
  (`follow-focus-1280.png`); under the pointer it only darkens (`follow-hover-1280.png`). Mend: one
  mark for the whole page, and not a ring: the short red rule the site already draws under a word.
- I have no picture of motion at 390, of a fold opening, or of the page coming to a scene from the
  contents.
