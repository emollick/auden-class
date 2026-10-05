# What changed in the kit: the second mending (3 October, 06:45 UTC)

For the artists. The lead mended the kit from your second reports. Every
plate is drawn differently in some way now, so before your next round:

1. Read again "How a plate lays itself out" in `site/js/kit/README.md`
   (rewritten) and "What you may change in `reading.json`" in
   `remake/ARTIST.md` (two new things you may set: `turn` and `join`).
2. Run `node build/pieces.mjs <pieceId>` and photograph every tab again
   at both widths. Pictures taken before this file was written show the
   old page and prove nothing.
3. In `art.md`, strike each fault that is gone, and list under the
   heading "Still there after the second mending" each one that is not,
   with the new picture that shows it.

## What is different

**Two passages on one plate**
- Rows that answer each other begin level: line for line in two
  passages of equal standing with as many rows each, and stanza for
  paragraph where a prose version has a paragraph for each stanza.
- The caption stands under both, or under the shorter of the two where
  one is much the shorter. A short second passage whose marks answer
  the last lines of the first stands at the foot of its column.
- Another passage of the same work (same language, not `beside`) shows
  only on the tabs that mark it. A version in another language always
  shows; on a phone it goes after the caption on tabs that do not mark
  it, and is then set as plain prose.
- The pairs of a compare tab are numbered in the order their words
  stand in the first passage, and the remarks follow that order.

**Lines**
- Each row is set by its own kind: a line of prose among verse runs on.
- Stanzas that follow each other are parted by a little space.
- You may say where a line turns on a phone: `turn` (see ARTIST.md).
- A chapter's first word, in capitals in the edition, is in ordinary case.

**Marks**
- Figure: the strokes follow the figure's `draw`, or the lens's `join`
  where you or the examiner set one; a stroke ends over a word, not on
  its letters; the key has one row for each color; a list numbers the
  kind that has the most items; a spine stands clear of the lines.
- Sentence: a rule stops under the last letter, not the comma; a span
  inside another is ruled lower; the key has one row for each color.
- Word: notes come in the order of the passage; two glosses that would
  touch stand side by side before one goes lower; glosses are larger.
- Beat: the room for a remark's number is there on the Beat tab only;
  a pause where a line has turned is drawn at the end of the first part.
- Rhyme: a rhyme that reaches past other lines is a bracket in the
  margin; a sound inside the lines is dotted from line to line too, and
  never takes a color that a rhyme of the plate has.
- A word named in a caption lights only the places the tab marks, where
  it marks any.

**A drawing of your own (`kit/diagram.js`)**
- `d.hot(node, words, mark)`: `mark` is a node or a list of nodes (a
  label, a figure) that stay dark with `node`. A tap lights it; a second
  tap, or a tap on bare paper, lets go.
- The line that speaks stands under the key now, so the key does not move.
- `d.keys`: a new mark, `open` (a box in outline); line samples are thicker.
- `TINT` (from `kit/draw.js`): a pale ground. Use it, not ink with opacity.
- A line that draws itself no longer flashes whole before it is drawn.
- `d.figures` and the plain table show names, numbers and short lists
  only, with numbers set right; a key named `read` is never shown.
- A drawing gets 334 px in a window of 390, 304 in 360, 264 in 320,
  and about 607 beside its caption in a window of 1280.

**The page**
- In "The passage", the line under the title and "What Auden said", a
  title between asterisks is set in italics (the words are the
  examiner's and the critic's to mark, not yours).
- A quoted pair of verse lines breaks at the stroke between them.
- The picture tool takes the pointer off the page before each picture.

Not changed, because it belongs to the thing itself: a long plate is
long on a phone; the height of a plate changes with its tab; two
passages of equal standing stand one under the other on a phone.

## The third mending (3 October, 07:10 UTC)

Small, from Peer Gynt's last report. You do not need to photograph
again for these; the lead has looked at them.

- On a phone, a tab that marks only the second passage (another passage
  of the same work) shows only that passage.
- On a phone, the place of the passage (act and scene) stands under the
  plate's heading. It was hidden.
- The number of a pair on a compare tab is larger.
- Where more than one person speaks in a second passage set as a block,
  each is named over the first line they speak.
- A hosted libretto that prints the speaker's name in capitals at the
  head of each speech: the name is set over the row, not in it.

## The fourth mending (3 October, 07:40 to 08:25 UTC)

From six artists' reports. If your final pictures are older than
08:25 UTC, take them again.

**The passage**
- A short run of words that a tab marks as one thing (a part of a
  figure, a noted phrase, one end of a compare pair, a short span of a
  sentence) is not parted where a line turns. See the fifth mending for
  how long a run may be.
- A stroke from one line to the next keeps clear of a speaker's name, a
  stage direction and the three points of a gap. In a chain it leaves
  from the part nearest to where it is going.
- A gloss of a phrase that has turned stands under the wider part.
  A gloss that goes a level lower gets room under its row.
- A sound that returns: every place has a dot; a thread joined nowhere
  has three points under each place.
- On the Beat tab the three points of a gap stand clear of the marks
  over them. In Latin the key says "the break in the line".
- A stage direction just before a line of a second passage is shown
  over it; a speaker's name in another language may carry its English.
- On a phone, two passages of one work under their own labels: the one
  the tab does not mark gives way to the one it does.
- A second passage in verse on a compare tab is set at the pitch of
  the first, and the pair numbers are larger.

**A drawing**
- The words of a note, a key and the line that speaks may mark a title
  with asterisks. `keys` and `note` still take a node.
- The line that speaks keeps to the foot of the window while its mark
  is out of sight above it, and the hint says how to ask.
- The button under a Beat key reads "Draw it again".

**The page**
- A plate with no passage (`noText`) says why at its foot
  (`noTextWhy`).
- A work that is not printed here has, under "Read on", a note and
  links out (`nextNote`, `nextLinks`).

## The fifth mending (3 October, 08:35 to 08:55 UTC)

From the reports on Henry IV, Rimbaud, the Tempest and Volpone. If your
final pictures are older than 08:55 UTC, take them again, the phone
widths above all.

**Where a line turns**
- A line of verse that must turn on a narrow plate, and whose reading
  sets no `turn`, now turns after the stop or the comma nearest its
  middle, if one stands in the middle two fifths of the line and
  outside every held run. It turns there on every tab. A line with no
  such stop is balanced as before. So propose a `turn` only where this
  rule gives a bad one: look at 360 and 320 as well as 390.
- A held run is at most four words, and at most 26 letters in verse or
  14 in prose. (A longer run held whole in prose ended the line before
  it far short of the measure.)
- A paragraph of prose among lines of verse is never set larger than a
  passage of prose is, and on a tab that does not mark it its lines
  stand close.

**Figure**
- `cross` with no `join`: the first two kinds that have two parts each
  are crossed, and the crossing is drawn whole or not at all. More than
  one crossing: name them in `join`, two joins to a crossing, and each
  is drawn whole or not at all.
- A chain's stroke from one line to the next is left out where it
  would run far along between the lines (more than about two fifths of
  the plate) or cross a stroke already drawn. Color tells those.
- `list`: a part whose label is only its own number has no row in the
  key.

**Rhyme**
- Eight colors before one comes round again (it was six).
- The row of letters in the key opens, with three small points, where
  lines are left out between two that are shown.
- A thread's stroke to the next line leaves from the place nearest to
  where it goes.

**Word, Sentence, Beat**
- Two glosses that stand within 18 px of each other on one line have a
  hairline between them.
- In a key, the names of a line's marks come before those of the
  version set under it.
- Beat remarks are numbered in the order they are listed. The checker
  now warns when that is not the order of the passage.

**The plate**
- A caption that stands over a short second passage at the foot of its
  column (`pair-low`) keeps in view as the reader goes down to it.

## The sixth mending (3 October, 09:20 to 09:52 UTC)

From three critics, who each found the same three things hard to read,
and from the last reports on Volpone, The Castle and The Family
Reunion. If your final pictures are older than 09:52 UTC, take them
again, the phone widths above all.

**The small notes beside a passage**
- The numbered remarks of a Beat or a compare tab and the notes of a
  Word tab are a little larger on a wide plate (up to 14.5 px; 13 px on
  a phone, as before) and darker. The lines of a key stay small and
  quiet.
- A word named as a word in one of those notes can be marked:
  `*word*` in the `say` of a `points` or `ties` entry, or in the
  `note` of a `notes` entry. The notes are italic, and the marked
  word stands upright in them. Titles in those notes are marked the
  same way.

**The passage**
- A row cut short at a dash, or at another point with no word in it,
  prints the dash itself and no points of omission.
- A reading may gloss a speaker's name that stands over a speech:
  `"speakers": { "NAME AS PRINTED": "who that is" }` on the plate. The
  build refuses a name that no speaker shown on the plate carries.

**Rhyme**
- Where lines turn, on a plate that has a rhyme tab, they stop short of
  the plate's edge by the room a rhyme's letter and its arc need. (At
  320 a line that just filled the measure left its arc outside the
  plate.) So on a phone a line or two more may turn than did before.

**A drawing's table**
- A count that a script sets with its comma (`num(1188)`) is a number
  to `d.table` and stands to the right like the others.

**The page**
- The summary at the head of a piece is headed "The passages", "The
  passage" where one is shown, or what the reading sets as
  `aboutHead`.

## The seventh mending (3 October, 10:13 to 10:40 UTC)

From the last reports on Othello, Moby-Dick, Pascal, the Purgatorio
and Augustine. If your final pictures are older than 10:40 UTC, take
them again at every width: where lines turn, and which strokes a
Figure tab draws, have both changed.

**Where a line turns**
- Two words joined by a dash are still one token (6.1, 6.2), but
  where lines turn the two may part after the dash. What stands
  before the dash stays with the first word; a quotation mark after it
  goes with the second. A marked run of words still keeps whole.
- In a line of verse a dash inside a token counts as a stop: the line
  may turn after it, if it is the stop nearest the middle.
- A word of one letter is not left at the end of a line: it keeps with
  the word after it, in prose and in verse. In a line of verse a short
  word that leads to the next keeps with it too (an article, a
  preposition, "and"; in English, Italian, French, German and Latin),
  unless a stop parts them. So a turned line no longer ends its first
  part on "the" or "of". A `turn` set in the reading still wins.
- A turned line of verse that the tab showing does not mark keeps its
  two parts close (as a paragraph of prose among verse does), with the
  room for marks after the second. A line that has not turned stands
  exactly where it did. So a plate of turned lines is shorter on a
  phone, and its height may change from tab to tab.
- A speech of a few words that its edition sets as prose, among lines
  of verse, keeps the size of the verse.

**Figure**
- The strokes of one figure are of one kind. A crossing (`draw:
  cross`) is two arcs that nest under one line, or two strokes that
  cross between two lines. Where it can be neither (its parts fall on
  three lines, or one pair would get an arc and the other a stroke),
  no stroke is drawn and each part takes a small letter in its color
  under its first word, in the order they are said: a, b, b, a.
- The pairs of an antithesis (`draw: pair`) that the reading does not
  join by name are joined all alike: all under their own lines, or all
  from one line to the next with none running far between the lines.
  Where they cannot be alike, none is drawn and the two colors tell.
  A pair named in `join` is drawn wherever a way is clear, as before.
- A stroke from one speech to the next no longer stops for the
  speaker's name between them: it passes behind the name, broken
  where the name stands.
- In the key, labels of one color that hold a comma are parted by
  semicolons.

**Word**
- A gloss under a word takes `*word*` like the notes: the gloss is
  italic and the marked word stands upright in it.

**Small things**
- The notes, remarks and key rows beside a passage, and a drawing's
  notes, are set like a caption: a last word is not left alone on its
  line.
- On the smallest phones (under about 350 px) the tabs stand a little
  closer, so that four keep to one row.
- The three points of a gap in a second passage are the size of those
  in the first.
- In "What each caption stands on", two passages under one heading are
  told apart by their place (the act and scene, the canto).
- `d.table` takes a count set by `num()` for a number whatever its
  size (`"91"` as well as `"1,667"`).

**Not changed, and why**
- The room kept at the end of the longest line for a rhyme's letter
  and arcs is the same on every plate with a Rhyme tab, so that the
  plates of a piece agree; a plate with long lines is set smaller.
- A long plate is long on a phone.
- The table that stands in for a drawing is seen only if a script
  fails; it is left plain.

**A fault of this mending, found and mended at 11:06 UTC**
- From 10:40 to 11:06 a line of verse holding two words joined by a
  dash could turn after the dash on a plate wide enough to keep it
  whole, and the plate's type was then set too large (seen on the
  second passage of Othello and of Peer Gynt at desktop width). The
  same fault could part a marked run of words after such a dash. Both
  are mended: the line is whole wherever it fits, and a marked run
  stays whole.
- If a plate of yours has a dash inside a line of verse, or inside a
  marked run, photograph it again: pictures taken between 10:40 and
  11:06 UTC may show it wrongly.

## The eighth mending (3 October, 13:00 to 22:40 UTC)

From the reports on Baudelaire, Orpheus, Rilke, Fidelio, the Inferno,
Adams, Götterdämmerung, Phèdre, Kierkegaard, Karamazov, Hamlet, Horace
and Faust, and from Blake, Don Giovanni, the Magic Flute and Carmen.
If your final pictures are older than 22:40 UTC, take them again at
every width. The strokes of Figure and Rhyme tabs have changed where a
version stands between the lines; so have the key of every Beat tab,
the head of every passage set line under line, the size of type where
lines turn, and where a key stands on a tablet. The approved plate,
the song of the Tempest, is the same at 1280 px but for one label of
its Beat key.

**Figure**
- Where a version is set under each line, a stroke now runs from one
  line of the original to the next: clear of the version's words where
  it can, or behind them and broken where they stand, if less than a
  third of it would be hidden. (It used to be left out, and color alone
  told.) A named `join` is drawn the same way.
- The joins of a `map` that names no `join`, and those of an `align`
  that are not its spine, are all alike or none, as the pairs of an
  antithesis are since the seventh mending. Where only some could be
  drawn, none is now, and the colors tell. A `join` in the reading
  brings a stroke back.
- A spine keeps clear of the version's lines as well as of the lines
  it joins.

**Rhyme**
- A sound that returns inside the lines (a thread) keeps to one
  passage: nothing joins the original to the version any more. With a
  version between the lines, a thread now runs from line to line of
  the original.
- A place that a stroke reaches has a dot; a place none reaches has
  three points, place by place. The key says only what is drawn: the
  sound "coming back inside the line", "from line to line", or both,
  and, where some places are joined to none, a second row, "the same
  sound, by itself". A sound of more than one letter stands upright
  in the key.
- A letter that belongs both to a rhyme and to a thread shows the
  rhyme's color. In a line that has turned, the stroke between two
  places of the line now meets the dot at its end.
- No join stands outside the plate on a phone. Where the room at the
  edge is short the joins close up, all by one measure; an arc that
  would still swing out is drawn as a bracket; two brackets that pass
  the same lines stand a lane apart. A line of the version that the
  joins pass stops a few pixels short of the edge.
- A turned line keeps its two parts close on a Rhyme tab too, unless
  a thread has a place in it: the letter of its rhyme stands after the
  line and needs no room under it. Such a tab is much shorter on a
  phone.
- The room at the end of the lines for a rhyme's letter is kept only
  where a line ends on a rhyme. A Rhyme tab that shows only sounds
  inside the lines keeps none, and of two passages in one type
  (`beside`) only the one whose lines carry letters keeps it. Such
  plates are set larger, and fewer of their lines turn.

**Beat**
- The key's words: "the measure: a long stroke is a beat, a short one
  an off-beat"; in verse measured by count, "the count: one stroke a
  syllable, a long one where the measure has an accent" and "a stress
  in the voice, on an accent of the measure". The other rows keep
  their words.
- The key has a row for each kind of dot the lines carry and none for
  a kind they do not: a small dot is "a light stress", a small red one
  "a light stress off the beat". In verse measured by length the dot
  is "the accent of the word".
- A syllable that is not counted keeps its tie where the line turns
  after it: the first half is drawn, a short hook past the end of the
  part, and a pause there stands clear of the hook.
- A new mark in `voice`: `<` is a syllable that is not counted and
  runs into the one before it (`~` runs into the next). The arc is the
  same, drawn backward; the key then says "it runs into the one beside
  it". No reading uses it yet, and the checker must come to know it.
- In verse measured by length every long mark of a plate is one
  length, and the bar of a pause keeps 3.5 px clear of the marks beside
  it. In such verse a tie ends just short of the next syllable's mark.

**Sentence**
- A rule stands 6 px under the foot of its line (it stood 3 px), so
  the closing tick no longer runs into a comma after the last word.
- In the key, labels of one color are parted by semicolons where one
  of them holds a comma or a colon, as in the key of a Figure tab (a
  colon counts there too now).

**Word**
- On a plate set line under line, the version's line stands lower on
  a Word tab (at least 36 px under the foot of the line above, 30 on a
  phone), so that a gloss and the version read as two things. The
  lines of that tab stand a little further apart than on the others.

**How a plate lays itself out**
- A passage set line under line begins with one line that names both
  texts, where the reading gives labels: the first in small capitals,
  the second in the quiet italic of the version's lines. Every such
  plate begins 27 px lower on every tab (about 44 px where the line
  takes two rows on a phone; 20 px where a speaker's name is the
  first row).
- On a narrow plate, two passages of equal standing in two languages
  (`beside`) now do what a version does: on a tab that marks only one
  of them, the other goes after the caption.
- Four tabs or more keep to one row on the smallest phones: a row that
  would break stands a little closer, and only that row. Four names of
  up to 28 letters keep to one row at 320 px; longer ones will not.
- Two passages side by side, the caption under the shorter: where the
  key would run on far below the longer passage, it goes under both
  passages, across the plate, if the plate is 120 px shorter for it.
  Remarks that stand alone under a short passage are set in two
  columns.
- A plate of one column between 520 and 879 px wide (a tablet held
  upright): a key much taller than its caption goes under the caption
  in two columns, as it does under two passages at 1280. About a third
  of all tabs are shorter there, and no paper is bare under a caption.
- Where lines must turn anyway (a phone), the type no longer stays at
  its floor: it is set as large as it can be, up to 22 px, while no
  line turns that did not turn at the floor. The size is the same on
  every tab of the plate. It holds at every width: at 1280 one plate
  is at its floor, the elders' song of Antigone, whose six lines stand
  whole but leave less than the room kept for a rhyme's letter; it is
  set in 22 px for 20, the lines whole as before.
- More short words keep with the word after them in a line of verse:
  the pointing words in English (this, that, these, those), the
  possessives in French and German, and French "si".
- A row cut short at its end keeps the kit's points with its last
  word, so that word is not left alone with them on the last line.
  Where the last word shown ends in the edition's own points of
  omission, the kit's are left off.
- Two passages in one type that stand side by side begin level even
  where one label takes two lines and the other one: the shorter
  label is given the height of the taller. (No plate has such labels
  today.)
- With motion on, the marks of a tab wait until the letters have come
  to rest (a slow phone could place them 2 px off).

**A stop that the edition sets after a space**
- Some editions set a space before ! ? ; and : (Carmen, Phèdre, the
  libretto of Orpheus). The kit now sets such a stop close against its
  word: in a French passage with a narrow no-break space before
  ! ? ; : and none before a comma, elsewhere with none. The stop was
  always the tail of its word, so word numbers, marks and the checker
  see what they saw; it only no longer looks as if it stood alone.
- A plate whose longest line lost its spaces is set a little larger.
  Left as the edition has them: a dash after a space, points of
  omission after a space, and guillemets with their spaces.

**Running words, headings and small things**
- Pairs a printer keeps on one line are kept in the notes, sources and
  folded sections of a page, and now in a caption too (in its words
  outside bold and italic; six captions are set anew for it on a
  phone and three at 1280, and one is a line longer, the Mountain tab
  of the Purgatorio's `love`): "Act", "Chapter", "Appendix" and
  the like with their number (in small letters too), "p." and its
  number, a book of the Bible with chapter and verse, a day with its
  month, a month with its year, a pair of initials, and the two ends
  of a range of figures or of small roman numerals.
- A heading keeps those too and does not end a line on a short word:
  the quotation at the head of a page and the labels of "Read on".
  The quotation may turn elsewhere than it did, and on a small phone
  some take a line more. The title of a page is set as before. In
  the line over the title the point keeps to the author's
  name. At the foot, heading and tab are joined by a raised point,
  and the heading "A record of it" is "A record".
- `*word*` now stands upright wherever the kit sets bare type that
  names a word: the `plain` of a Figure, `what` (which takes a link
  too), a label of a key, and the cells and folded sentences of the
  plain table. A drawing's label for a screen reader is given without
  the marks.
- An italic run that ends in ? or ! has a hair of room after it in a
  caption and in the sources, so that the mark does not lean on the
  next word.
- A label over a passage is balanced, so that it does not leave one
  word alone; the key under a drawing (`d.keys`) is set like a caption.
- A link in a drawing has no underline: the kit's stylesheet sees to
  it. A script that turned it off by hand may keep or drop that rule.

**Not changed, and why**
- A long plate is long on a phone; the room between a line and the
  version under it stays on every tab, so that lines keep their place;
  on a phone the caption comes first on every tab, then the key and
  the remarks.
- The sizes of a rhyme's letter, of a gloss and of a note, and the
  eight colors, are settled. The row of letters in a Rhyme key does not
  open where a stanza ends.
- A pair's number can still stand close over the name of the next
  speaker in a second passage (Don Giovanni, Fidelio, Phèdre). It is
  the first thing for the next mending.
- On a compare tab in two columns the version keeps the pitch of the
  original even where no pair can stand level, and two versions can
  stand half a band out of register.
- A turned line of a version that the tab does not mark keeps its two
  parts a row apart where the version is a block of its own or stands
  line under line.
- Of two stops equally near the middle of a line, the first is where
  it turns. A line of a second passage in one type turns where the
  browser balances it, and the checker does not take a `turn` for it.
- A line may turn on the Beat tab only, by a pixel or two (heavier
  syllables, and the room for a remark's number).
- A line of three points still stands before a row that itself opens
  with points of omission.
- A short phrase in bold may break between two lines of a caption.
- On a compare tab, a word named in the caption lights only the places
  where a mark begins.
- The ticks of a spine on the left end 2 px from the first letters.
- A key set across the plate may break its columns between two rows
  that belong together.
- A word of one letter may end a line of a caption or of a note.

## After the eighth mending: the lead (3 October, 22:38 UTC)

Made in the live kit at the merge, on top of the eighth mending.

- **A key goes under a short passage only where no tab is much longer
  for it** (`kit/plate.js`, `layout()`, where `low` is decided). The
  eighth mending gave the Beat key a row, 22 px, and on the second
  passage of Moby-Dick (`rails`) that tipped the old measure (shorter
  than the tallest caption with its key by more than 200 px, and under
  three quarters of it): the key went under the passage on every tab,
  the plate grew from 945 px to 1,087, and the paper stood bare under
  the caption. The measure still decides which plates are tried. Each
  tab that has a key is then laid out both ways, and the key stays
  beside the passage where sending it under would make any tab more
  than 140 px longer. At 1280 seven plates are tried: `rails` would
  grow by 142, 133 and 182 px and keeps its key beside the passage;
  of the other six the one that grows most (the third passage of
  Baudelaire) grows by 107 px and stays as it was. At 1024 six are
  tried and none changes. Scanned at 900, 1024, 1280, 1440 and 1680:
  no other plate changes its layout or its height
  (`node build/tools/scan.mjs <width> build/tools/probes/low.js --first`).
- **The front page** (`css/atlas.css`, `js/home.js`,
  `build/front.mjs`; not the kit, said here because the stylesheet is
  shared). The cards of a kind run down one column and then down a
  second (`.specs` is columns, not a grid), so a short card leaves no
  bare paper beside a tall one. `remake/front.json` may give a kind an
  `order`; `review/remake/last-pass/tools/front-order.py` proposes one
  from the cards' heights. A key's label and a figure's plain line on a
  card take `*word*`, as on a plate; `.spec-term>i` is the figure's
  name and `.spec-k>i` the swatch of a key. `.home-intro` has its own
  rule and the inline style is gone. An empty `.foot` is not shown
  (the page about the site empties it).
- **Tools.** `build/tools/scan.mjs` (the eighth mender's scanner, with
  `--site`) and three probes in `build/tools/probes/`;
  `build/tools/shoot.mjs --open` opens the folded notes before a page
  is photographed; `build/tools/kit-copy.sh` makes a working copy for a
  mender.

Decided by the lead on the eighth mender's points, so that no one asks
again: the measure of 2d stays at 120 px (at 80 a tab of Fidelio stood
1 px from it); the larger type that blake B gives the first passage of
Antigone at 1280 stays (22 px for 20, every line whole); the quotation
at the head of a page stays tied, though some heads are less even for
it; the title of a page is not tied.

## The ninth mending: the rows (3 to 4 October, 22:51 to 01:25 UTC)

From the reports on La Traviata, Fidelio, Don Giovanni, Phèdre,
Kierkegaard, Karamazov, Baudelaire, Carmen, Tristan and Rilke. If your
final pictures are older than this mending, take them again where your
piece has a second passage beside the first (names, directions and
numbers stand differently there), and on every English or Versions tab
at 1280 px. The approved plate, the song of the Tempest, is the same
to the pixel.

**New in a reading: five things you can now say on a plate**

- **A name or a direction that the edition prints in the line may stay
  there.** `"stage"` took names and directions out of the line and set
  them over it. With `"inline": true` they stay where the edition has
  them, in the small capitals of a name and the small italic of a
  direction:

      "stage": { "1.0": { "name": 1, "dir": [3, 4], "inline": true } }

  `"inline": "name"` or `"inline": "dir"` leaves only that one in the
  line. Such words are no words of the verse: do not scan them, give
  them no rhyme, and set no part, span, pair or sound on them (the
  build and the checker refuse it, by row and word number). A note of
  a Word tab and a numbered remark may stand on them. The words keep
  their numbers. A direction after the verse is left out of the
  reckoning of the type's size; on a phone the line turns before it
  and it stands in under its line. Where the line ends on a rhyme,
  leave `inline` out for that row: the letter of the rhyme stands
  where the direction would.
- **A row that is nothing but a heading** of the edition ("Aria", the
  name of a number) can be shown as one: `"0.0": { "dir": [0, 0],
  "inline": true }` on a row of one word sets it small and italic
  among the lines. Its gloss and its remark keep their places.
- **Rows set deeper in**, as the edition sets them:
  `"indent": ["5.0-5.3"]` (a row, or a run of rows; `"p:270.7-270.10"` in the
  second passage).
- **A stanza's space where the hosted text shows none**:
  `"stanza": { "17.0": true }` sets it before row 17.0. The kit knows a
  stanza only by a block of the hosted text, so where each line is a
  block of its own you must say. `false` takes away a space the kit
  sets where no stanza ends. The build refuses the key where a name, a
  direction or a line of three points already stands before the row.
- **A place line of your own**: `"place": "Piave, *La Traviata*, Act 3"`
  replaces the line beside the plate's heading, which the kit takes
  from the label of the hosted part. Use it where that label says your
  heading again, or names more than the passage shows. `"place": ""`
  leaves the line out. A title between asterisks stands upright in the
  italic line; the kit cannot find a title by itself, so a place line
  that holds one needs this key.

The checker prints a line of proof for each (`indent:`, `stanza:`,
`place:`, and one line for every row that `stage` touches).

**Names and directions beside a passage**

- A direction that the edition prints before a speaker's name now
  stands before that name, under the speech it belongs to. It used to
  stand under the name and read as the new speaker's. If your label or
  caption explains which speech a direction goes with, it need not.
- The heading that a libretto prints over a number (its kind, a full
  stop, and the first words of the number) is no longer shown as a
  direction. A direction that stands before lines your plate leaves
  out is no longer shown over the first line it does show.
- A name, a direction or a line of three points that follows a row
  with a pair's number or a gloss under it stands clear of that mark.
  They used to touch and read as one.
- A stanza's space stands over the speaker's name, not between the
  name and the speech. Where the kit moves a row down to stand level
  with the line it answers, the name moves with it.
- A row of a second passage that opens with points of omission no
  longer has a line of three points before it as well.

**An English or Versions tab at 1280 px**

- Where the kit can set no pair of rows level (the version has more
  rows than the original, or the pairs cross), the version no longer
  keeps the original's pitch: it is set at its own, as on a tablet,
  and the plate is shorter. Where pairs do stand level nothing has
  changed. A short second passage that stands at the foot of its
  column, beside the last lines it answers, keeps the pitch where a
  row of it stands level with its line (the Tempest's epilogue,
  Fidelio's scene) and goes to its own where none does (Peer Gynt's
  two sayings, 103 px shorter).

**Already so, and still asked about**

- A `turn` on a row of the second passage (`"p:91.1": 2`) is taken by
  the checker and honored by the page.
- A label over a passage is balanced where it turns, since the eighth
  mending; its last word is not left alone.

**Not mended this time**: the lighting of a caption's words (an
italic title that lights a name, a word joined by an apostrophe, a tap
on a phone); a turned line of a version that the tab does not mark;
the height of a row set line under line at 1280 px.

## The ninth mending: the lenses (3 October, 22:51, to 4 October, 01:05 UTC)

The part of the mender of the lenses (`remake/kit9b/`). For the artists.
The other half of this section, the rows, is the other mender's.
If a picture of yours shows one of the tabs named here, take it again
after the merge.

**Figure**
- A figure drawn as `align` may now carry a list in `join`. The spines
  stay, and the joins you name are drawn in place of the loose ones
  (the strokes between parts that stand inside their lines). A join
  named by two numbers between two parts of one kind takes that kind's
  color; a join between two kinds is grey, as on every other figure.
  `"join": "none"` still means underlines only.
- In an `align`, a loose stroke is no longer drawn behind a speaker's
  name, a direction or the points of a gap. Loose strokes are all
  alike or none, so where one would pass behind a name none is drawn,
  and color tells. The strokes of a `chain` still pass from speech to
  speech behind the name, broken where it stands.

**Word**
- A note stands under a bold head, the words of its row. Where the
  note itself opens with a word of that head marked `*word*`, the word
  is printed once: the note's own word is the head, and the words of
  the row are not printed before it. Thirty-eight notes on twenty
  plates change. A note that opens with its word unmarked, or in
  another form (the dictionary's), is printed as before: mark the
  word, or reword the note, if it reads twice.
- A gloss under a word is tidied as running words are (see "Running
  words" below).

**Compare**
- A pair with no remark (`say`) is tied by its color and carries no
  number. The numbers count the remarks, 1, 2, 3, with none left out,
  on the plate and in the list. So you may add a pair only to show
  that two phrases answer each other, or to set two rows level, and
  say nothing of it. (Where no pair at all has a remark, as on the
  cards of the front page, every pair is numbered as before.)

**Beat**
- A pause may fall inside a word that a dash joins. In `voice`, put
  `|` between the marks of its two parts: `/|/`. The bars stand under
  the dash; where the line turns at the dash they stand at the end of
  the first part. (The checker does not know this mark yet and will
  report the row: wait for the lead's word before you use it.)
- Under a tie (a syllable that is not counted) the two bars of a pause
  begin 2.5 px clear of the tie, so the two no longer read as one mark.

**Rhyme**
- The letter of a row that is cut short stands after its points of
  omission, not on them.

**Running words**
- A range of figures has one form wherever words run: the longer
  stroke between its two ends, whichever way it was typed. "3:18-19"
  in a gloss, a note, a remark, a source or a heading is set as
  "3:18–19", and the two ends keep to one line. Figures joined by
  more strokes than one (a date written 2026-10-03) are left as they
  are. You may go on typing a hyphen in a caption, a gloss or a note.
- The place of a passage beside a plate's heading, and "Read on", take
  the same stroke where the label of a part of the hosted book holds a
  range of years with a hyphen. The book's data is not changed.

**The page**
- The quotation at the head of an entry ("What Auden said", "More
  from Auden") takes marks: a title inside it is put between
  asterisks in `quote` and stands upright in the italic block.
- A quotation that ends in a quoted phrase keeps that phrase's closing
  mark, and the page adds its own after it. Two closing marks then
  stand together: single marks round the inner phrase read better.

**Small things**
- A word marked in an italic sentence among the folded numbers of a
  drawing (`.dg-facts p`) stands upright.
- The heads of a table of facts stand on one foot line: a head of one
  line beside a head of two or three stands at the foot, not at
  mid-height.

**Not changed, and why**
- The last lines of a caption may end short of the measure. The
  stylesheet asks that no last word stand alone (`text-wrap: pretty`),
  and the browser pays for it by ending the lines above a little
  short. The only cure is to drop that for every caption, which would
  set anew many captions that have no fault. The measures are in the
  record (`remake/kit9b/RECORD.md`, item 8).
- A short phrase in bold may still be parted between two lines of a
  caption (don-giovanni 12; phedre 2.11). A rule that kept such a
  phrase on one line was tried and taken back: where a caption ended
  on such a phrase, the browser set its last lines anew, in captions
  that had no fault. If the break troubles a caption of yours, reword
  the sentence so that the phrase does not fall at the turn. The
  record's item 9 has what was tried.

## After the ninth mending: the lead (4 October, 01:19 to 01:24 UTC)

**The merge.** The rows (`remake/kit9a`) and the lenses (`remake/kit9b`) were
merged at 01:18:53 by `<scratch>/merge9.sh`, which first proved that every
live file still equalled both copies' `orig`, that neither mender had
changed a file of the other's list, and that nothing outside the lists
differed. `plate.js`, `build/pieces.mjs` and `build/tools/check-reading.mjs`
are the rows'; `draw.js`, the five lens scripts they changed, `piece.js` and
`rich.js` are the lenses'; `atlas.css` and this kit's README were changed by
both and merged with `git merge-file` against `orig`, with no conflict. The
files before are in `.cache/before-merge9/`.

**Two changes each mender asked of the other's files.** The checker takes
`|` inside a group of `voice` (a pause at the dash inside two words joined
by one) and does not count it as a syllable. `placeOf()` in `piece.js`
follows a plate's `place`, without its asterisks, in the list of what each
caption stands on.

**Set in the readings** (exact edits, a copy before in each piece's `lead/`,
tools `review/remake/last-pass/tools/plate-keys-apply.py` and
`words-apply.py`): traviata (`stage` with names and directions inside the
line on `end`; `stage`, `stanza`, the whole of row 10.7 and a `place` on
`cabaletta`; `indent`, a `place`, the `join` list and a ninth pair on
`refrain`), fidelio `scene` (two headings, a stanza's space), baudelaire
(three empty `place` lines), tristan (three `place` lines with the title
marked), hamlet (the pause mark), magic-flute (two titles marked in a
quotation). Not set: rilke `panther`'s `place` (a poem's title alone in the
line needs no mark).

**The front page** (`site/js/home.js`, not in either mender's list). A card's
key names every label a color carries on the card, as the piece's page does;
the Beat explanation begins "The rule under each line is its measure." The
Othello card shows three rows (`remake/front.json`), so that the word its
title speaks of is said twice on it and two whole lines show the measure.

**After the build** (01:20, "35 pieces with a reading", no problems): the
Tempest's 24 pictures at 1280 and 390 are the same as before the merge but
for two pixels on `epilogue`, Rhyme. Looked at: the front page's Prosody and
Rhetoric cards, traviata `end` (Shared) and `refrain` (Refrain), fidelio
`scene` (Beat).

**Left.** The spine of a Figure tab does not reach rows set in (traviata
`refrain`): its ticks stop at the margin. The rows' items 6, 9 and 11 and
the lenses' 8c and 9 were not done; each record says why. About 26 place
lines hold a title and have no `place` yet.

## After the critic by eye: the lead (4 October, built 02:21 UTC, tested 02:24 to 02:28)

The critic by eye's report is `review/remake/critics/site-eye.md`. What was taken from it and what was left is in `review/remake/last-pass/RECORD.md`, "The critic by eye, applied". The files as they stood before are in `.cache/before-eye/`.

- `site/js/kit/plate.js`, the legend of a plate that has a version under each line: where the plate has no label of its own and the version's label does not already say "under", the label is printed as "Under each line: <label>", with a leading "The" lowered. Six cards of the front page changed: "Under each line: Bayard Taylor, 1870", "the English libretto", "Maggioni's English", "Longfellow, 1867", "the English libretto, about 1910", "Armour, 1911".
- A card of the front page opens its own plate and tab. `build/front.mjs` gives each card `at: { plate, lens }`. `site/js/home.js` links the card to `#/<piece>/<plate>/<lens>` when `at` is there. `site/js/main.js` has a route for `<piece>/<plate>[/<tab from 0>]`, after the route of a piece. `site/js/piece.js`: `renderPiece(main, id, site, at)` passes `lens` in the plate's options and brings the plate to the top of the window twice, after two frames and after 700 ms. Setting the tab after the plate was mounted did not hold: the plate's own start, once the fonts are in, set the first tab again. Proved by `review/remake/last-pass/tools/deeplink.mjs`: `#/carmen/cartes/2` shows the third tab pressed, `#/fidelio/name/0` the first.
- `site/css/atlas.css`: the rule that hid an empty foot is gone, so the about page ends with space and a rule again; the rule that took the underline from a book's title in the shelf's list is gone; the spans of the opening quotation are blocks with balanced lines (`.home-q span`).
- After every change the Tempest's 24 pictures were compared with those before: plate `song` is the same to the pixel.

The scripts the tests need were only in the session's scratch folder. Copies are now in `review/remake/last-pass/tools/`: `walk2.mjs` (the walk through every page), `deeplink.mjs`, `merge9.sh`.

## At the deploy: the lead (4 October, 05:27 to 05:36 UTC)

- `build/lib/printed.mjs`, `lensForSite`: a note of a lens goes to the site without its `source`. The gloss and its note are printed; the source (where the sense was checked) is a working note and stays in the reading. Before this, 705 such strings were in `site/data/pieces/*.json`, unprinted. Nothing in the kit reads the key.
- `site/index.html`: four `meta` lines after the description, for link previews (`og:type`, `og:title`, `og:description` with the description's own sentence, `twitter:card`).
- New tools in `review/remake/last-pass/tools/`: `walk-site.mjs` (walks the folder that is deployed, or a live address, and prints a mark of the words of each piece so that two walks can be compared), `deploy-zip.py` (makes the zip and the list of checksums), `live-compare.py` (fetches every file from the live address and compares).

The record of the deploy is in `review/remake/last-pass/RECORD.md`, last section.

## The pass for phones: the lead (4 October, 19:55 to 21:00 UTC; live since 00:21 UTC, 5 October)

Asked for by nobody in so many words: the owner asked "anything else we should add or change?" and was told that phones came first. What a phone shows was taken from the critic by eye's report (`review/remake/critics/site-eye.md`, Part 1 no. 3, Part 2 fault 3, Part 4 fault 2, Part 5 nos. 1 and 5, Part 6) and from the first reader of the class page. The record is `review/phone/RECORD.md`. The files as they stood before are in `.cache/before-phone/`.

- `site/js/kit/plate.js`, `arrange()`: on a plate under 880 px wide the English of a passage in another language (`english`: the pair's language is English and the passage's is not) no longer goes after the caption on the tabs that do not mark it. It stays under the passage on every tab, and the caption and key follow both. 24 plates in 13 pieces, 68 tabs. An English passage with its original as the second (baudelaire `evening`, rilke `count` and `turn`) is as it was. Nothing changes at 880 px and over.
- `site/css/atlas.css`, narrow plates (under 520 px): the tabs always take a row of their own under the heading and the place (`.plate-tabs{flex-basis:100%}`), so that the head is three rows on every plate; the numbered remarks and the notes on words are 14 px (they were 13).
- `site/css/atlas.css`, the row "Read on" of a piece: on a phone "Read it here" stands under the title on every piece; from 620 px it keeps the right of the row and a long title turns beside it.
- `site/css/atlas.css`, the reader: under 480 px a page of a book is set at 16.5 to 17.5 px by the window's width (it was 18.5) with 16 px at the sides (20), and a book's title in the line over the heading is not parted at its hyphen.
- `site/css/atlas.css`, the menu: each word has a finger's room around it (an empty `::after`).
- `site/js/home.js`, `site/js/main.js`: the opening paragraph of the front page ends with a link to the list of all the works at its foot; the link comes to the list without drawing the page again, and the address `#/works` opens the front page there.
- `site/js/class.js`: over the rule of each afternoon but the first, at the right, the words of the contents ("On this page") with an arrow: a way back to the list, which it opens. Moves made by a tap inside the class page are instant where the reader has asked for less motion.
- Both walks (`review/remake/last-pass/tools/walk-site.mjs`, `walk2.mjs`) know the address `#/works`, try the link to the list, and try every way back.


## The pass for phones, second part: the lead (4 October, 21:05 to 22:40 UTC; live since 00:21 UTC, 5 October)

After the owner's yes of 21:02 UTC (the held changes, the credit, and leave to put the update live once it is made and checked) and the two critics' reports on the first part (`review/phone/critic-words.md`, `review/phone/critic-eye.md`). The files as they stood before this part are in `.cache/before-held/` and `.cache/before-eye/`. The record of the whole pass is `review/phone/RECORD.md`.

- `site/js/places.js` (new) and `site/js/main.js`: the reader's place. Every page is drawn by script, so Back came to the top of the page and not to the place the reader left; and a move within a page (the link to the list of all the works, the way back on the class page, a scene opened from the contents) left no step for Back to undo. Now each step of the history carries a number, and the place the reader stood at that step is kept under it: how far down the page, and what stood at the window's top, so that the place is found again where the page above it has grown (the class page's list, opened by the way back). `arriving()` and `arrived()` stand around the router's drawing; `stepTo(href)` makes a step for a move within a page; a step back within the front page or the class page draws nothing again. A page says what it wants done once it stands at its top (`leave.after`: a piece comes to the plate its card showed, the class to the scene in the address, the reader to a passage): the router leaves that out when the reader is coming back to a kept place. The bundler of the private page takes no circular imports, so the module imports nothing.
- `site/js/kit/plate.js`, `keyUp()`: on a narrow plate (under 520 px) the key of the tab that is showing goes straight under the passage it marks, all of it but the numbered remarks and the notes on words: the name of the measure, the rows that say what a stroke, a dot or a color is, the scheme of the rhymes, a figure's name and plain words, and the button "Draw it again". It stands under the second passage where the tab marks that one. The remarks and notes stay after the caption; a key with nothing left takes no room there (`.aside[hidden]`). On a wider plate nothing moves: `fit()` puts every key back whole before it measures. Before this, the first part of the pass had put the English between the marks and their key, and the button stood 840 to 1,270 px under the last marked line on five plates the critic measured.
- `site/js/kit/plate.js`, `ctx.replay` ("Draw it again"): where the head of the passage stands above the window, the passage is brought to the window's top first (`.stage{scroll-margin-top:14px}`), and the marks are drawn when the page has come to rest (`scrollend`, or 700 ms).
- `site/js/kit/plate.js` and the stylesheet: on a narrow plate the tabs stand again at the plate's foot (`.plate-tabs-foot`, shown under 520 px only, hidden in print). A press opens the way and brings the plate's head to the window's top (`.plate{scroll-margin-top:10px}`). `setLens()` keeps the two rows of tabs saying the same.
- `site/js/kit/plate.js`, `arrange()`: on a Word tab that sets the sense under every line of the first passage, or every line but one (`sensed()`), an English version that is not the passage's equal goes after the notes again, as before the pass: ten tabs (don-giovanni `duet`; dutchman `tale`; fidelio `answer`, `scene`, `name`; rimbaud `stanza`; traviata `cabaletta`, `end`; tristan `work`, `names`). Two passages of equal standing (Horace, the Magic Flute's weddings, Don Giovanni's close) keep the English under the original on every tab.
- `site/css/atlas.css`: under the first passage, a second of equal standing that the tab does not mark keeps its type and gives up the room for marks (`.is-twin.pair-idle:not(.two-col) .beside .pr`, line-height 1.36): the Panther's English was a whole window of bare lines at the pitch of marked ones.
- `site/js/kit/plate.js`, `bound()`: "Scene 2" and the like keep together in the labels over the passages too, as they did in the place line.
- `site/css/atlas.css`, narrow plates: 12 px between two notes on words and between two numbered remarks (8 and 5 before).
- `site/css/atlas.css`, the menu: each entry keeps whole. Under 390 px the row stands closer (gap 13 px, letters .14em), under 370 px closer again and half a pixel smaller (12 px, .1em, 11.5 px), so that the four keep one row down to a window 336 px wide; under that the row turns between two entries. Before, the three entries of two words were each parted on any phone under 380 px.
- `site/css/atlas.css`, the reader on a phone: the bar beside a drawn passage stands 8 px left of the text (it was 2 px from the window's edge); the line over the passage is 14 px (it had shrunk to 13.65 and 12.9); the two small ways at the foot and the book's name over the heading have a finger's room (an empty `::after`) and stand 30 px apart; the titles under "Previous" and "Next" begin level (`align-content:start`).
- `site/js/shelf.js`, `site/js/class-figures.js`: a point between two names keeps to the name before it (` ·`), so that it never begins a line.
- `site/js/piece.js`: under "Read on" a part the site has numbered itself is named "part 1: …"; two names joined by "and" keep together where the title turns (five titles).
- `site/js/class.js`, `site/css/atlas.css`: the way back says "Contents" (the contents' own heading, changed with it in `content/class.mjs`); after it, a red point marks in the list the afternoon the reader came up from (`li.from`, `aria-current="location"`). The two closing links have no arrow in their small words.
- `site/js/home.js`, `site/css/atlas.css`: the link to the list of all the works has a line in the labels' color (the hairline of the site's other links could not be seen).
- `site/js/pieces/adams.js`: the two drawings as proposed (`remake/works/adams/adams-proposed.js`), with numbers on the bars and the years down the page.
- `site/data/texts/o-dutchman`, `o-fidelio`, `o-gotterdammerung`, `o-magic-flute`: the printers' apostrophe for the typewriter's, 31 in all in six files (`review/phone/tools/apostrophes.mjs`; `build/lib/typeset.mjs` already said that every single mark in these texts is an apostrophe, and `original.mjs cut` had not set them). Four pieces' data differ from before by those characters only (20, 4, 2 and 4 places). Every one of the 31 stands inside a word or at a word's end. `o-rilke` was set too at first and put back: its only two single marks stand around a play's title, so they are quotation marks, and the table in `typeset.mjs` was wrong to call them apostrophes. The entry is taken out of the table with a note, the tool now leaves that text alone, and the passage is as the transcription gives it and as it is live.
- Tools: `review/phone/tools/back.mjs` (21 checks of Back and Forward at one width), `keys.mjs` (every plate under every tab: the key's rows all there and none twice, the foot's tabs, "Draw it again"), `menu.mjs`, `wide-all.mjs`.

## The pass for phones, the last readers: the lead (4 October, 22:20 to 23:30 UTC; live since 00:21 UTC, 5 October)

After three last readers (`review/phone/BRIEF-2.md`; `critic-words-2.md`, `critic-draw-2.md`, `critic-eye-2.md`). The files as they stood before this part are in `.cache/before-eye/`, named `*.r2`.

- **A fault that was live since the class page went up (17:20 UTC).** `site/css/atlas.css` had a rule `.ref{font-size:.86em;color:var(--quiet);white-space:nowrap}` for a page reference inside a sentence of the class page. `refer()` in `kit/plate.js` marks with the same class every word of a caption that lights its place in the passage, and rows of a key. So on every piece those words were small, grey and could not turn, and many key rows were 11.2 px. The class page's span is now `page-ref` (`site/js/class.js`, `refs()`), and the rule with it. `review/phone/tools/refs.mjs` looks at every marked word and row on the plates: 0 set unlike their neighbors. Three pieces (33 plates) photographed at 1280 are the same, to the byte, as the first deploy of the remade site.
- `site/js/kit/plate.js`, `keyUp()`: a key under the passage that ends the stage has the class `key-last` on the plate, and 6 px more under it (`.key-last .near-key`), so that it stands 16 px over the rule that follows, as it does over a second passage.
- `site/css/atlas.css`, narrow plates: `.facts th,.facts td{padding-right:10px}` (18 px on a wide plate). The folded table under Adams's Force lost its last column at 320 px; it stands whole now, and so do the tables of Antigone `quarrel` and Hamlet `readiness`. `review/phone/tools/tables.mjs` opens every folded table (93) at 320, 360 and 390. Left for a later pass, as they are live: Agamemnon `net` (wider than its room by 54 px at 320 and 14 px at 360), Paradiso `end` (28 px at 320), Kierkegaard `greater` (14 px at 320). Each can be pushed sideways.
- `site/js/pieces/adams.js` (and `remake/works/adams/adams-proposed.js`, kept the same): the line a touched bar speaks says "twice" for two, keeps "not once" and a count with its word together, and the Book's line has the Force's shape, "Chapter 20 (1871): 5,486 words". The label over the band stands 2 px higher. At 320 px the two chapters beside the band keep their numbers alone: a title without its year, straight over the note on the marriage, could be read as a remark on it.
- `remake/works/agamemnon/reading.json`: `cloth` turns row 25.0 after its word 4 (it turned inside its verb at 320 and 360); the heading of `yoke` has a no-break space before its last word, which would stand alone at 364 to 384 px where a browser does not balance a heading.
- `site/js/piece.js`: "part" keeps to its number under "Read on".
- `content/about.mjs`: the credit in a sentence of its own, "Claude was supervised and prompted by Ethan Mollick.", the two names kept together.
- `build/lib/typeset.mjs`: `o-rilke` is out of the table of texts whose single marks are all apostrophes (its two stand around a play's title); the passage is as it was.
- Tools: `review/phone/tools/refs.mjs`, `tables.mjs`, `cut.mjs` (a part of a tall picture); `keys.mjs --wide 844` (a phone held sideways); `back.mjs --page local.html` (the packed private page).

## How the pages are loaded: the lead (5 October, 06:40 to 09:35 UTC; live since 09:36 UTC)

After a reader's review of the code, which the owner passed on at 06:35 UTC (three faults in the router), with the word a minute later that the fixes go live once made and tested. Two critics then read the change (`review/router/code-review.md`, `review/router/words.md`). The record is `review/router/RECORD.md`. The scripts as they stood before are in the repository's first commit.

- `site/js/main.js`, `go()`: every asking for a page has a number (`turn`), and a page is put before the reader only if its number is still the last. A page's script is handed an object where it had `main` and calls `main.show(page, title)`, which puts the page into the document and sets the title at once, at the moment the script used to do it (a plate starts only if it stands in the document when the faces are in). The foot, the mark in the menu and the reader's place follow only for the page asked for last. Before this a slower page came up over the page chosen after it, or "Not found" did where the slower page failed.
- `site/js/main.js`, addresses: `clean()` gives null for an address that cannot be decoded, and an address of more than 120 letters has no route. No route shows the notice "Not found", with its own title and no mark in the menu. Before this such an address gave a blank page or left the page before standing.
- `site/js/main.js`, `notLoaded()`: a page that did not come shows "Not loaded: This page could not be loaded." and a button, "Try again". For a file of data the try is made in place, of the page asked for last (`asked`); for a script the site is loaded anew, since the browser keeps a failed `import()`; in a host's frame it is always made in place. After a failed try in place the line reads "It still could not be loaded." The button takes one press and reads "Trying again" until the answer comes. A notice is an alert; after a try from the keyboard the focus stays on the button, or goes to `main` when the page comes.
- `site/js/main.js`, `ROUTES`: a third entry names the page that moves within itself (`home`, `class`). It was worked out from the address before, and `#/class/x/1` was taken for the class page.
- `site/js/piece.js`, `getJSON()`: what it throws carries the server's `status` and `data: true`. `absent()` is true only of what a script has found missing (`none()`), no longer of every 404.
- `site/js/piece.js`, `renderPiece()`: asks the list of the pieces (`data/pieces/index.json`) beside the piece's own file; a name that is not on the list is not found, and anything else that fails is not loaded. A piece whose own script fails is not loaded (it was drawn without it).
- `site/js/shelf.js`: a book is missing when the server has no contents for it (404), a part when its book does not list it; both show the reader's notice. A listed part that fails, and a book's contents that fail in any other way, go to the router as not loaded. The reader's own words for a book that failed are gone (`content/shelf.mjs`, `read.failed`).
- `site/js/home.js`, `site/js/class.js`: a step within the page is not taken once the reader has asked for another page (`main.left`); the link is followed as a link.
- `site/js/places.js`, `stepTo()`: files no place while a page is being drawn.
- `site/js/about.js`: shows its page through `main.show`.
- `site/css/atlas.css`: `.notice .retry` (a button set as a link is, with a finger's room; no underline while a try is out) and `.notice .keep` (the button and its period turn the line together).
- `build/preview.mjs`: the packed private page carries the list of the pieces.
- Tools: `review/router/tools/faults.mjs` (serves the site, holds back, spoils or drops chosen answers, and says what the reader is shown), `review/router/tools/battery.sh` (every check of the site in turn; it can be taken up where it was cut off).
