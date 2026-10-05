# Art notes: baudelaire

Piece `baudelaire`, "The dandy's warning". Three plates (`evening`,
`warning`, `budget`), ten tabs. The piece has no shape lens, so nothing
was drawn: there is no script in `site/js/pieces/` and no stylesheet.
The work was steps 1 and 3 of ARTIST.md. Begun 3 October, 05:57 UTC;
this text is of 11:29 UTC and replaces every earlier one. Words of the
passages are named by row and word number, never typed out.

## In short

- What I changed in `reading.json`, all at 06:14: `"beside": true` on
  `evening` and on `budget`; the heading of `budget`; no-break spaces
  inside the date of `warning`'s heading. Nothing else. No tab is
  renamed and no join is mine. There is no `turn`, because every row
  of the three passages is prose. No speaker's name stands over any
  passage, so I propose no `speakers`.
- The pictures in `shots/` are from the project's tool, taken between
  11:09:18 and 11:12:02 UTC: after the seventh mending (done at
  10:40), after the fault of that mending which the lead mended at
  11:06, and after I had read both in KIT-CHANGES.md. Each run ended
  `nothing reported; now look at the pictures`. All 55 are the same
  to the byte as those I took between 10:41:37 and 10:44:18, and I
  looked at every one of those.
- They show the reading as it stands. The page's data was last built
  at 11:07:28 (not by me: see "The build"). I compared it with
  `reading.json` field by field at 11:12: no difference in anything
  the page shows, on any of the ten tabs.
- The checker at 11:24: no problems, no warnings, the printed notes
  are fit to print.
- Still wrong, and the kit's, worst first. Each is set out under
  "Still there after the seventh mending".
  1. `evening` on a phone, three tabs of four: the French, which the
     tab does not mark, stands between the marked English and its
     caption.
  2. Every plate: the place line repeats the journal's name that two
     headings already hold, and names one journal of two on the third.
  3. `warning` at 1280: the date in the passage is parted before its
     year.
  4. `evening`, Delay, 360 and 320: the key breaks after a numeral.
  5. Sources: a page range in roman numerals breaks at its dash.
  6. 320 and 360: a held run leaves the line before it short.
  7. `warning` and `budget`, Words, 1280: the notes run past the
     passage and leave paper under it.
- The seventh mending took two things off my list: at 320 the four tab
  names of `evening` keep to one row, and at 390 the Delay key no
  longer ends a line on a numeral. A third, the long stroke of a named
  join at 360, is the kit's stated rule, so I have moved it to the
  observations.

## What I changed in reading.json (06:14 UTC)

Three things, all within what an artist may change.

1. `evening`: added `"beside": true`.
2. `budget`: added `"beside": true`, and the heading
   "My Heart Laid Bare, LXXIX, beside Rockets, XIII" became
   "The budget beside the maxim".
3. `warning`: the heading keeps its words; the two spaces inside the
   date are now no-break spaces, written as the JSON escape
   backslash-u-00a0 (six characters), so that they can be seen in the
   file.

All three stand in the file as I made them (looked at 10:22; the file
has not changed since 08:46:42). I touched nothing else: no caption,
mark, fact, source, label of a block, or tab name. One edit I made and
took back is told under "The joins".

## The build

ARTIST.md says to build again before the last pictures. I could not,
so here is what happened.

- From 05:57 to 06:48 I built and photographed as step 1 says, and
  made the three edits above.
- At 06:54 the permission system of this session refused me the
  build: its reason was that the command would modify shared resources
  (the build also rewrites the index of every piece). I ran no build
  after that. At 08:11, as I made ready a private preview (the build's
  own script with its writes turned into my scratch folder), it
  refused that as a way round the first refusal. I dropped the preview
  unrun and emptied its script.
- The lead built the data at 07:13:47. The examiner mended the reading
  from 07:34 to 08:46 (exam.md lists what), and its rules forbid it the
  build too. So for two hours the page was behind its reading.
- At 09:37:34 the data was built again by another hand, with the sixth
  mending; at 10:37:26 and 10:39:26, with the seventh; and at
  11:07:28, after the mend of 11:06. Since 09:37 the page and the
  reading agree: `reading.json` was last changed at 08:46:42.
- I photographed after each change of the kit: at 09:43 and 09:56
  (sixth mending; the two sets the same to the byte), at 10:29 (the
  kit had changed at 10:14), at 10:41 (the kit changed until 10:36:51,
  and the lead's word was that the seventh mending was done at 10:40),
  and at 11:09 (plate.js and atlas.css changed at 11:05:49).
- The lead's word on the mend of 11:06 was to photograph again any
  plate with a dash inside a line of verse or inside a marked run.
  This piece has no verse. It has dashes inside marks. In `budget`,
  266.0 holds two tokens with a dash (words 2 and 8): the first pair
  of Maxim and the first span of Verbs both run from word 2.2, the
  half after the first dash, to word 11, over the second, and Words
  marks word 2.2 alone. In `evening`, 126.0 holds two (words 85 and
  88), both inside the second numbered span of Delay and the second
  pair of French, whose French half holds one more. I photographed
  all three plates again, at every width, and not one picture
  changed.

If the reading changes again, someone who may build must build and
photograph again.

## Seen built for the first time

The examiner changed marks, labels, captions, the line under the title
and the sources while the page stood still. All of it is in the
pictures, and I found nothing wrong in how it came out:

- `evening`, Likeness: six parts where there were five. The first is
  126.0 word 36 alone, a rule one letter wide; a new part runs under
  words 107 to 115 over a turn of the line; the key has a third row.
  No join is named, so the kit joins the parts of the man only where
  two stand on neighboring lines: at 1280 one straight stroke of
  90 px from the part at word 116 down to word 129, clear of the new
  part's rule (`baudelaire-evening-0-likeness-1280.png`), and none at
  390, 360 or 320.
- `evening`, Delay: the fourth numbered span begins at word 96, and
  the caption sets all six describing words in bold.
- `warning`, Wing: the reading names one join, `[[2, 3]]`, and the
  kit draws that one stroke and nothing else: an arc of 148 px under
  the last line at 1280, an arc of 115 px at 390, a straight stroke
  of 164 px at 360 and one of 62 px at 320.
- `warning`, Time: five key rows; the last holds one name where it
  held two.
- `budget`: the three marks that began under the last word of the
  leaf's heading now begin after the dash, at 266.0 word 2.2, on
  Maxim, Verbs and Words. Verbs has six spans in four kinds. On a
  phone the gloss on word 2.2 stands clear of the gloss beside it at
  390, 360 and 320 (`baudelaire-budget-2-words-320.png`).
- The line under the title names four notes and marks its three
  titles. At 390 it takes two lines and turns after the semicolon, so
  both journals' names are whole (`baudelaire-page-390-0.png`). The
  summary beside it is headed "The passages".
- Since the seventh mending no line of a passage ends on a word of one
  letter, and no note, remark, caption or key row leaves its last word
  alone: so by eye in the pictures, and by measure at 1280, 390, 360
  and 320 on every tab (11:22).

## `evening`: the two versions as two blocks

Without `beside` the kit sets the French under the English as one
paragraph of small grey italic, with no label over either, and the
caption beside the English. I photographed the plate both ways in the
browser (see "How I tried things") and measured both. The figures are
of 11:12 to 11:23, on the page as it is built now.

With `beside`, at 1280 px (`baudelaire-evening-3-french-1280.png`):

- the two versions are two columns in one type (22 px) under the labels
  SHIPLEY and BAUDELAIRE. The reading holds those labels, and without
  `beside` the page does not show them: a stranger is now told whose
  words each column is;
- each column runs eleven lines and the two keep step. On the French
  tab pairs 1, 3, 4 and 5 stand on the same line across the gutter and
  pair 2 one line (60 px) apart. Without `beside` the two halves of a
  pair stand 327 to 521 px apart, one over the other. The caption's
  first sentence says the translator keeps the order phrase for
  phrase; now the plate shows it;
- the plate is 1,028, 1,054, 1,201 and 1,178 px on the four tabs,
  against 1,151 px on every tab.

What it costs:

- at 1280 the English is 22 px where it would be 26, and the caption
  stands under the two columns, 829 px below the head of the plate,
  not beside the passage. A window 800 px high cannot hold the head of
  the plate and the caption together: moved down 240 px it shows the
  whole caption with lines 3 to 11 of both columns. Every mark of
  Delay, Words and French lies in lines 5 to 11; the first two marks
  of Likeness (lines 1 and 2) go out of view;
- at 390 the plate is 535 or 536 px longer on every tab (2,344,
  2,368, 2,522 and 2,527 px against 1,809, 1,833, 1,986 and 1,992),
  because the French is in the type of the English: its block is
  877 px. The caption begins 1,929 px below the head of the plate
  (1,394 without `beside`). On the French tab the two halves of a
  pair are 908 to 961 px apart (498 to 670 without);
- narrower is longer still: at 360 the caption begins 2,089 px down
  (1,484 without) and at 320, 2,461 px down (1,770 without).

Why I chose it all the same:

- the other form tells a stranger nothing about the grey paragraph, at
  either width: no label, the faintest type on the page, and it is
  Baudelaire's own text;
- at 1280 the gain is the whole point of the fourth tab;
- three of the four captions name French words (Likeness, Words,
  French), so the French is wanted on most tabs, and in a type that
  can be read;
- eleven plates of other pieces are set this way in their readings
  (looked at 10:18), so the piece keeps the settled look.

KIT-CHANGES.md says that two passages of equal standing stand one
under the other on a phone, and its seventh part says again that a
long plate is long on a phone. So the phone cost is the price of my
choice, and I name it in my answer so that the lead can weigh it. One
condition in the kit would take most of it away on three of the four
tabs: fault 1 below. Taking the one line `"beside": true` out of
`evening` gives the other plate
(`shots/trial/trial-evening-without-beside-french-1280.png`,
`...-french-390.png` and `...-words-1280.png`, taken at 11:20).

## `budget`: two notes in one type

The two notes have a different number of rows, so the kit sets them as
two blocks either way. Without `beside` the budget is 26 px display
type and the maxim is small text type at the head of the right-hand
column. With `beside` both notes are in one display type (22 px at
1280, 20 px on a phone), each under its label, and at 1280 the caption
stands in the right-hand column under the maxim
(`baudelaire-budget-0-maxim-1280.png`).

Why I chose it:

- the first caption starts from Auden setting the two notes side by
  side as one man's, before and after. With `beside` the plate shows
  two notes of equal standing. Without it the maxim reads as a
  footnote to the budget;
- at 1280 the maxim stands on every tab, the plate holds still between
  Maxim and Verbs, and the heading, which names both notes, is true on
  every tab;
- at 1280 the plate is 777 px on Maxim and Verbs and 1,004 px on
  Words, against 888, 883 and 1,026. On Maxim and Verbs a window
  800 px high holds the whole plate: both notes, every mark, the
  caption and the key.

What it costs: the budget is in 22 px type where the `warning` plate
above it is 26 px; on Verbs at 1280 the maxim, which that tab does not
mark, stays over the caption (146 px); at 390 the plate is 83 px longer
on Maxim and on Words (1,465 and 1,771 px against 1,382 and 1,688).

On a phone the kit leaves the maxim out on Verbs, with `beside` or
without (1,184 px at 390; `baudelaire-budget-1-verbs-390.png`). So on a
phone, on that one tab, the heading names two notes and the plate
shows one. I would keep the heading: the other two tabs show both. The
plate without `beside` is in
`shots/trial/trial-budget-without-beside-maxim-1280.png` and
`...-verbs-1280.png` (11:20).

## The headings and the tab names

- `warning`. When I began, the heading wrapped at 390 px with the year
  alone on the second line, and at 360 px it split the date after the
  day. The no-break spaces mended that. Since 06:26 the kit balances
  every plate heading, and on a phone this one now breaks after the
  journal's name and puts the entry number and the date together on
  the second line, with or without my spaces. I left the spaces in:
  they cost nothing, and in a browser that does not balance headings
  they still keep the date whole. No word changed.
- `budget`. The old heading named the two notes by journal and number.
  The two block labels printed directly under it say the same thing,
  so the reader met both names twice within 60 px. The new heading
  uses the reading's own names for the two notes (the first caption
  calls them the maxim and the budget) and says what the plate does
  with them. It is one line at every width from 320 px, and the
  checker passes it. One small cost: the folded list "What each
  caption stands on" prints heading, comma, tab name, so its first
  entry for this plate ends with the same word twice.
- `evening`. Left as it was: it names the note and the figure the
  plate starts from, and is one line down to 320 px.
- Tab names. All ten left as they were. Each is one plain word, and
  every caption opens by saying what its tab shows. Since the seventh
  mending the four names of `evening` keep to one row at 320 too.

## Faults that are gone

Each was the kit's, or the reading's where it says so. Seen in pictures
taken between 05:57 and 10:31; gone in the pictures now in `shots/`.

- ~~`budget`, 1280, a window 800 px high: the caption squeezed under
  the left column, the remarks one word to a line.~~
- ~~`budget`, 1280, every tab: bare paper down the right-hand column
  under the two lines of the maxim.~~ The caption stands there.
- ~~`budget`, Words, 1280: nine notes in a column 315 px wide.~~
- ~~`evening`, French: the pairs numbered 3, 5, 4, 2, 1 down the
  passage.~~ Numbered 1 to 5 down the passage.
- ~~`evening`, Delay, 1280: the key row broke between a numeral and
  its name.~~ One line at 1280.
- ~~`warning`, 390: the heading wrapped with the year alone.~~
- ~~"More from Auden" and Sources, 1280: a page range in figures broken
  at its dash; a line ending on "pp.".~~ One range in roman numerals
  still breaks (fault 5).
- ~~"What each caption stands on": two colons in a row of bold.~~
- ~~`budget`, Words, 390: the third gloss of the first line went a
  level lower and stood 2 px over the next line of the passage.~~
  Every gloss on the three Words tabs stands under its word, one level
  deep, at all four widths, and two that come close have a hairline
  between them (`baudelaire-warning-2-words-320.png`).
- ~~`budget`, Verbs, 390: the unmarked maxim between the marked note
  and its caption.~~ The kit leaves the maxim out there.
- ~~`warning`, Wing, 1280: three straight strokes of 232, 332 and
  440 px, almost level, under the seventh line.~~ The reading names
  the one join the caption makes, and the kit draws one arc
  (`baudelaire-warning-1-wing-1280.png`; see "The joins").
- ~~The line under the title, 390: the turn fell inside the second
  journal's name.~~ It turns after the semicolon
  (`baudelaire-page-390-0.png`).
- ~~The reading (examiner's mendings, exam.md): three marks of `budget`
  began under the last word of the leaf's heading; the fourth span of
  Delay began one word early; Verbs had six kinds of mark; the Delay
  caption set one describing word of six in italics.~~ All four are
  right in the pictures.

Gone with the seventh mending:

- ~~`evening`, 320: the row of four tab names took two lines, the
  fourth name alone on the second.~~ One row
  (`baudelaire-evening-0-likeness-320.png`), and the plate is 30 px
  shorter there on every tab.
- ~~`evening`, Delay, 390: the key row that joins six numbered names
  broke after the numeral 6.~~ The sixth numeral and its name now
  begin the second line together
  (`baudelaire-evening-1-delay-390.png`). At 360 and 320 the row still
  breaks after the 5 (fault 4).

Taken off the list, though nothing changed:

- ~~`warning`, Wing, 360: a join the reading names is drawn however
  far it must run.~~ KIT-CHANGES.md now says, of an antithesis, that
  a pair named in `join` is drawn wherever a way is clear, as before;
  the comment in lens-figure.js says the same of any stroke the
  reading names. So the straight stroke of 164 px at 360 is the kit's
  rule. It is under the observations.

## Still there after the seventh mending, worst first

Each is the kit's. Each is in a picture now in `shots/`.

1. `evening`, Likeness, Delay and Words, every phone width
   (`baudelaire-evening-0-likeness-390.png`, `...-1-delay-390.png`,
   `...-2-words-390.png`, and the same at 360 and 320). These tabs
   mark nothing in the French, yet its block (877 px at 390, 983 at
   360, 1,143 at 320) stands between the marked English and the
   caption, which begins 1,929, 2,089 and 2,461 px down. No mark
   shares a screen with its caption. My `beside` added 535 px of this
   at 390.

   KIT-CHANGES.md lists, under what the seventh mending did not
   change, that a long plate is long on a phone. I take that to be
   about the length, which is the price of my choice. What I report
   is the order, and it hangs on one condition. On a narrow plate the
   kit sets a version that the tab does not mark after the caption,
   but not on a `beside` plate: in plate.js, in `arrange`, the line
   that sets `after` holds the condition `!twin`. Tried in the browser
   with that one condition left out (11:14, the present kit and
   data): on the three tabs the caption begins 1,021 px down at 390
   (1,075 at 360, 1,287 at 320), straight under the English, and the
   French follows under its label; the plate is 10 px longer; the
   French tab, which marks both, is as now; at 1280 nothing moves;
   `budget` is unchanged; no page errors
   (`shots/trial/trial-evening-second-after-caption-likeness-390.png`).
   I tried it on this piece only, and eleven plates of other pieces
   are set `beside`. If the lead's line is meant for this too, strike
   the fault: the pictures show what it costs.
2. Every plate, every tab, every width: the place line. The kit
   prints the name of the part of the hosted book after a plate's
   heading (on the same line at 1280, on a line of its own under the
   heading on a phone) and leaves it out only where a book has one
   part. In this piece it is the journal's name, and that sits badly
   with all three headings:
   - `evening`: the heading begins with the journal's name, so the
     name stands twice, one line under the other on a phone and on
     one line at 1280 (`baudelaire-evening-0-likeness-390.png`,
     `...-1280.png`);
   - `warning`: the same. On a phone the heading takes two lines, the
     name is the first of them, and it comes again as the third
     (`baudelaire-warning-0-time-390.png`);
   - `budget`: the plate holds a note from each journal and the line
     names only the first; the first block's label, just under it,
     begins with the same name (`baudelaire-budget-0-maxim-390.png`).

   The line costs each plate 23 or 24 px on a phone. In the data as
   built at 10:18, 3 plates of 103 on the whole site hold their place
   line inside their heading: these two and one of `rimbaud`. Two ways
   to mend it:
   - in the kit: leave the place out where the heading already holds
     its words, and where the plate's second passage is from another
     part of the book. This mends all three plates and keeps the
     poet's headings. The heads then look as in
     `shots/trial/trial-evening-no-place-line-390.png`,
     `trial-warning-no-place-line-390.png` and
     `trial-budget-no-place-line-390.png` (11:21);
   - in the reading: drop the journal's name from two headings, so
     that `evening` is headed by its number and the three words after
     the colon, and `warning` by its number and the date
     (`shots/trial/trial-evening-shorter-heading-1280.png`,
     `...-390.png`, `trial-warning-shorter-heading-1280.png`,
     `...-390.png`; `warning` is then 16 px shorter at 390). The cost:
     a heading that begins with a bare numeral, with the journal's
     name after it, and entries in "What each caption stands on" that
     no longer name the journal. It does nothing for `budget`.

   A heading is mine to change, and I left these two as the poet
   wrote them. I would choose the first way, which keeps them; and I
   could not have seen a change of mine built (see "The build").
3. `warning`, 1280, all three tabs
   (`baudelaire-warning-0-time-1280.png` and the two beside it). The
   date in the passage is parted before its year: the sixth line ends
   after 239.0 word 17, 92 px short of a measure of 607 px, and word
   18, which needs about 55 px, begins the seventh (measured again at
   11:22). On Time the one mark that the key calls "one day" is in two
   pieces on two lines, on the plate whose heading is that date. It
   came with the fifth mending: a held run in prose may have 14
   letters at most, the four words of that mark come to more, and
   prose is set with `text-wrap: pretty`, which chose that turn. At
   390, 360 and 320 the date is whole. I cannot mend it: `turn` is for
   verse. In the kit, the day of a date could be tied to its year, and
   the month to the day, whatever the length.
4. `evening`, Delay, 360 and 320
   (`baudelaire-evening-1-delay-360.png`, `...-320.png`). The key row
   that joins six numbered names breaks after the numeral 5: the
   numeral ends one line and its name begins the next. At 390 the row
   is right since the seventh mending, but only because a key row now
   keeps its last two words together; one name earlier nothing holds
   the numeral. In the kit, a numeral that begins a name in a key
   could be tied to the word after it, as a word of one letter now is
   in a passage. (A no-break space inside each of the six labels would
   do it too, but a span's label is not on the list of what an artist
   may change.)
5. Sources, 1280 and 390 (`baudelaire-page-1280-4.png`,
   `baudelaire-page-390-7.png`). In the entry of the Viking Book the
   page range in small roman numerals breaks at its dash, at both
   widths: the first numeral and the dash end one line and the second
   numeral begins the next. The same range is whole in the last
   citation of "More from Auden", and ranges in figures no longer
   break.
6. A held run at its limit is long for a narrow plate. At 320 the
   second line of the English of `evening` ends 110 px short of a
   measure of 264 px, on every tab, because the four words of the
   second part of Likeness (126.0 words 38 to 41, 14 letters with
   their spaces) may not be parted
   (`baudelaire-evening-0-likeness-320.png`). On `warning` the line
   before 239.0 words 26 to 28 ends 76 px short of 304 at 360
   (`baudelaire-warning-0-time-360.png`), and the line before words 34
   and 35 ends 102 px short of 264 at 320
   (`baudelaire-warning-1-wing-320.png`). Small, and only on the
   narrowest phones. Two more lines at 320 end a quarter short with no
   held run after them: the fourth line of 238.0 (71 px;
   `baudelaire-warning-0-time-320.png`) and the first two lines of
   267.0 in `budget` (84 px each;
   `baudelaire-budget-0-maxim-320.png`). There the browser evens the
   last lines of a paragraph so that it does not end on one word (the
   kit sets prose with `text-wrap: pretty`), and that is no fault. At
   390 and 1280 no line of the piece ends a quarter short (measured
   11:16).
7. `warning`, Words, 1280 (`baudelaire-warning-2-words-1280.png`). The
   caption and its seven notes run 704 px beside a passage of 513 px,
   so the plate grows from 667 to 858 px on this tab and 191 px of
   paper stand empty under the passage. `budget`, Words, 1280 has the
   same under the budget: 228 px, the plate 1,004 px against 777
   (`baudelaire-budget-2-words-1280.png`). The notes are larger since
   the sixth mending, which adds to both. `evening`, Words, 1280 does
   not have it: there the notes run in three columns under the two
   passages.

Observations more than faults:

- `warning`, Wing, 360 (`baudelaire-warning-1-wing-360.png`). The
  third part ends the eleventh line and the fourth begins the twelfth,
  so the one stroke of the tab is straight and 164 px long, running
  back between the two lines. The kit leaves out a stroke of a chain
  that would run that far (lens-figure.js, `far`: 140 px, or 0.42 of
  the plate's width where that is more), but draws a stroke the
  reading names wherever a way is clear: the comment in the script
  says so, and KIT-CHANGES.md says it of an antithesis. It still
  reads: one stroke, both ends dotted, nothing else drawn; and at
  1280, 390 and 320 it is short.
- Type. The word notes and the numbered remarks are 14.5 px at 1280
  and read well there. On a phone they are 13 px, the key names
  13 px, and the glosses under the words and the pair numbers 12 px.
  That is the smallest running type on the page, and on the three
  Words tabs it is where most of the facts stand. The captions are
  17 px at 1280 and 15 px on a phone.
- `warning`, Time, 1280 and 390: the caption turns inside a quoted
  word, at its hyphen (the word at 239.0 word 15;
  `baudelaire-warning-0-time-1280.png`, caption lines 2 and 3). At 360
  and 320 the word is whole.
- `budget`, Maxim, 390 and 360: the maxim turns one word after each of
  its two commas, so pairs 2 and 3 each begin with one word at a
  line's end (`baudelaire-budget-0-maxim-390.png`). At 320 the first
  two pairs each begin a line and it reads better. The maxim is
  prose, so no `turn` can move it.
- `evening`, French, 1280: the five remarks beside the caption run
  119 px past its foot, so that much paper stands under the caption
  (`baudelaire-evening-3-french-1280.png`). On Words at 1280 the
  caption keeps a measure of 646 px, and 411 px beside it stand empty
  over the three columns of notes
  (`baudelaire-evening-2-words-1280.png`).

## What I think is wrong in the reading (not mine to change)

No fact and no mark. The four things I listed at 07:20 the examiner
has mended, and they are right in the pictures (see "Faults that are
gone"). What is left:

- "More from Auden" runs to ten entries. I say it in case the lead
  wants the page shorter; the examiner notes for the critic that no
  caption leans on two of them.
- The six labels of Delay that begin with a numeral: at 360 and 320
  the key breaks after one of the numerals (fault 4). If the kit is
  not to tie them, a no-break space in each label would do it.
- For the critic, from the sixth and seventh mendings: nothing in this
  piece marks a word that it names as a word. The eight remarks of the
  two compare tabs, the 22 notes of the three Words tabs and their 22
  glosses name French and English words in many places (14 of the
  glosses open by naming a language or a person), and every one
  stands in the same italic as the words around it
  (`baudelaire-evening-3-french-390.png`,
  `baudelaire-warning-2-words-390.png`). Counted at 11:01: no `*` in
  any of the 52.
- The examiner's note in `open` that begins with the marks changed
  after the pictures of 07:13 is out of date (it is a working note
  and is not printed). It says no change has been seen in a build and
  that the page should be built and photographed again: both are done
  (built at 09:37:34 and three times since, the last at 11:07:28, and
  photographed after each). The 372 px
  and 82 px it quotes from my trial of the join on Likeness were of
  the data of 07:13; on the page as built now they are 357 px and
  96 px (see "The joins"). The same holds for the first line of
  "Still doubtful" in exam.md.

Nothing to propose under "Proposed for the reading": the piece has no
speakers, and no line of verse to turn.

## The joins

ARTIST.md lets an artist set a figure lens's `join`. The piece has two
figure tabs. I set neither; the trials below are of 11:18, in the
browser, with only the value of `join` changed.

- `warning`, Wing (`draw` "map"). The reading holds `"join": [[2, 3]]`.
  With no join named the kit joins each of the three parts tagged
  picture to the one part tagged thing: an arc and two straight
  strokes of 216 and 316 px at 1280, a fan of three at 360
  (`shots/trial/trial-warning-wing-no-join-named-1280.png`,
  `...-360.png`). The caption says something narrower: the thing
  stays two steps off, and the last step is from the third part
  (239.0 words 31 to 33) to the thing itself (words 34 and 35). Only
  the join of part 2 to part 3 says that. I tried it in the browser
  and recommended it here at 07:20, and the examiner set it before
  08:00. I would keep it. The four pictures
  `shots/trial/trial-warning-wing-join-2-3-1280.png`, `...-390.png`,
  `...-360.png` and `...-320.png`, which exam.md cites, now show the
  tab as it is built.
- `evening`, Likeness (`draw` "chain"). No join is named. The examiner
  set `"join": [[0, 1]]` at 08:10, because the caption's first
  sentence joins the two terms of the simile, and took it out at 08:45
  after my trial of it. On the page as built now that join draws, at
  1280, one straight stroke 357 px long that falls 27 px, from the
  end of the first line back to the start of the second, under words
  the tab does not mark
  (`shots/trial/trial-evening-likeness-join-0-1-1280.png`); at 390 and
  360 an arc of 96 px that reads well (`...-390.png`); at 320 a
  straight stroke of 72 px. A named stroke is drawn however far it
  runs, by the kit's rule, so the join cannot be had on a phone
  without the long stroke at 1280, where the two colors already stand
  side by side. I would leave the tab with no join named.

One edit of my own, made and taken back. At 06:54 I added the join to
Wing, and the checker passed it. The permission system then refused my
next command, which would have built the site's data. At 06:58 I took
the lines out again, so that the reading was byte for byte what had
been built and photographed. It was the examiner who set the join for
good.

## How I tried things

Nothing was tried by editing the reading. Scripts of my own, kept in
the session's scratch folder and not in the project, opened the built
page in a browser and changed one thing on its way in: a plate with
and without `beside`, a heading, the value of one `join`, one rule of
style that hides the place line; and for one trial, one condition in
one line of the kit's plate script. With them I photographed each
choice at 320, 360, 390 and 1280 px and measured where the two halves
of each numbered pair fell, how long each line ran, and what a window
800 px high shows of each plate. Nothing on disk in the project is
changed by a trial, and none is a build. Every figure in these notes
was measured after the seventh mending, between 10:45 and 11:05, and
again after the mend of 11:06, between 11:12 and 11:23: the same
figures both times, and the trial pictures the same to the pixel.

## The pictures

`shots/` holds two runs of the project's picture tool, 55 pictures,
all taken between 11:09:18 and 11:12:02 UTC on 3 October, after the
seventh mending (KIT-CHANGES.md: 10:13 to 10:40) and the mend of its
fault at 11:06:

- `node build/tools/shoot.mjs baudelaire --out
  remake/works/baudelaire/shots --page`: ten tabs at 1280 px, ten at
  390 px, and the page in slices at both widths (six and nine);
- the same with `--widths 360,320` and no `--page`: ten tabs at each.

The last line of each run:

    nothing reported; now look at the pictures

All 55 are the same to the byte as those I took between 10:41:37 and
10:44:18. I looked at every picture of that set, the long phone
pictures in slices at full size. They show the data built at
11:07:28, which is the reading as it stands, under the kit as it has
stood since 11:05:49. No file of the kit that this page loads, and
neither the reading nor the built data, has changed since the pictures
were taken (looked at 11:29).

The checker, `node build/tools/check-reading.mjs baudelaire`, at
11:24 (its script was changed at 11:16:50; this is the new one, and
the one before it said the same at 11:12):

    no problems
    no warnings
    the printed notes are fit to print

`shots/trial/` holds 21 pictures from my scripts, all taken between
11:14 and 11:23 on the page as it is built now, each with one thing
changed in the browser (the four of the Wing join change nothing):

- `trial-evening-second-after-caption-likeness-390.png`: fault 1, the
  one condition left out of the kit's plate script;
- `trial-evening-without-beside-french-1280.png`, `...-french-390.png`,
  `...-words-1280.png`, `trial-budget-without-beside-maxim-1280.png`,
  `...-verbs-1280.png`: the two plates without my `beside`;
- `trial-evening-no-place-line-390.png`,
  `trial-warning-no-place-line-390.png`,
  `trial-budget-no-place-line-390.png`: the three heads without the
  place line (fault 2, the first way);
- `trial-evening-shorter-heading-1280.png`, `...-390.png`,
  `trial-warning-shorter-heading-1280.png`, `...-390.png`: the two
  heads with the journal's name dropped (fault 2, the second way);
- `trial-warning-wing-no-join-named-1280.png`, `...-360.png`: Wing as
  the kit would draw it if the reading named no join;
- `trial-warning-wing-join-2-3-1280.png`, `...-390.png`, `...-360.png`,
  `...-320.png`: Wing as it is built, under the names exam.md cites;
- `trial-evening-likeness-join-0-1-1280.png`, `...-390.png`: Likeness
  with the join the examiner set and took out.

## The page at 08:25

exam.md and the reading's `open` cite a section of this name. It stood
in an earlier text of these notes, written at 08:36, when the page was
still the data of 07:13 under the kit of that hour. What they take
from it is my trial of `"join": [[0, 1]]` on Likeness: at 1280 a
straight stroke 372 px long, at 390 an arc of 82 px. The same trial on
the page as it is built now gives 357 px and 96 px, and the same
judgment (see "The joins"). Everything else that section said is
either struck under "Faults that are gone" or carried, with the
figures of today's page, under "Still there after the seventh
mending".
