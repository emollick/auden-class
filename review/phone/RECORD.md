# The pass for phones: record

4 October 2026, 19:55 UTC onward. The lead's own pass. When this record
was begun nothing in it was to go live until the owner said so. At
21:02 UTC he said so ahead of time (see "The owner's answer" below).

## What was asked

The owner wrote in the project chat at 19:43 UTC: "anything else we
should add or change?" He was answered in one reply: nothing should
hold the link; if there is to be one more pass, phones come first (the
front page runs about eighteen screens of cards before the list of all
the works, with no link down to it; in the operas the English comes
only after the caption and the key; a scene of the class page has no
way back to its contents). He was told the pass was starting and that
the live site changes only on his word. Two other things were put to
him and are his to answer: the small changes refused to agents
(`remake/LEAD-LIST.md`), and whether the site should carry his name
and a place to write.

What a phone shows was taken from the critic by eye's report on the
whole site (`review/remake/critics/site-eye.md`: Part 1 no. 3, Part 2
fault 3, Part 4 fault 2, Part 5 nos. 1 and 5, Part 6) and from the
first reader of the class page (`review/class/critic2-reader.04.md`,
line 13).

## What was changed

The files as they stood before are in `.cache/before-phone/` (with
their checksums). The kit's side of it is also in
`remake/KIT-CHANGES.md`, last section.

1. **The English under the original** (`site/js/kit/plate.js`,
   `arrange()`). On a plate under 880 px wide the English of a passage
   in another language stays under the passage on every tab; the
   caption and the key follow both. Before, it went after the caption
   and the key on every tab that did not mark it. 24 plates in 13
   pieces, 68 tabs: carmen `la-bas`; dante-paradiso `prayer`;
   dante-purgatorio `garden`, `love`, `share`; don-giovanni `close`,
   `count`, `duet`; dutchman `tale`; fidelio `answer`, `name`, `scene`;
   horace `crossing`; magic-flute `weddings`; phedre `names`, `sight`,
   `slip`; rilke `panther`; rimbaud `stanza`; traviata `cabaletta`,
   `end`, `refrain`; tristan `names`, `work`. Where the English is the
   first passage (baudelaire `evening`, rilke `count` and `turn`)
   nothing moved. Nothing changes at 880 px and over.
2. **A way down the front page** (`site/js/home.js`, `site/js/main.js`,
   `site/css/atlas.css`). The paragraph under the class's block ends
   with a new sentence, "All the works are listed at the foot of this
   page.", whose first three words are a link. A tap comes to the list
   without drawing the page again and gives its heading the focus; the
   address `#/works` opens the front page at the list, and the menu
   marks "The works" for it.
3. **A way back on the class page** (`site/js/class.js`,
   `site/css/atlas.css`). Over the rule of each scene but the first, at
   the right, the contents' own label and an arrow up (the label was
   "On this page" when the critics saw it, and is "Contents" since the
   word critic's report).
   It goes to the contents, opens the list, and gives it the focus. It
   stands in the space between two scenes and takes no room: the page
   is as tall as it was. Hidden in print.
4. **The reader on a phone** (`site/css/atlas.css`). Under 480 px a
   page of a book is set at 16.5 to 17.5 px by the window's width
   (`clamp(16.5px,4.5vw,17.5px)`; it was 18.5) with 16 px at the sides
   (it was 20). A book's title in the small line over the heading is
   not parted at a hyphen.
5. **"Read on"**: one shape at each width. From 620 px the title keeps
   the left and the small words the right of one row, and a long title
   turns beside them; under 620 px the small words stand under the
   title. Before, the shape depended on the title's length.
6. **Plate heads on a narrow plate** (under 520 px): the tabs always
   take a row of their own.
7. **Notes on a narrow plate**: the notes on words and the numbered
   points are 14 px (they were 13).
8. The menu's words have a finger's room around them; the front page's
   side margin on a phone is 16 px like the other pages.

## What was measured

Tools in `review/phone/tools/`, their answers in `review/phone/measures/`.

- **Order on a narrow plate** (`pair-measure.mjs`; `pairs-before-390.txt`,
  `pairs-after-390.txt`, `pairs-after-wide.txt`): on all 68 tabs the
  order is now original, English, caption, key. At 880 px and over the
  order is as it was.
- **The front page** at 390 px: 19,002 px tall before, 19,029 after
  (the new sentence). The link lands with the list's heading 14 px
  under the window's top (scroll 15,394). A reader who scrolls while
  the page settles is not pulled back (`works-link.mjs`).
- **The class page** at 390 px: 37,212 px before, 37,210 after; at
  1280 px 24,538 before and after. Thirteen ways back for fourteen
  scenes; each has 40 px of clear paper over it at 390 and 105 px at
  1280; the tap area is 131 by 37 px (`class-up2.mjs`).
- **Verse in the reader** (`verse-fit.mjs`, `verse-turns.mjs`;
  `verse-turns-after.txt`). Seven scenes, 1,891 lines, with letters
  placed by fractions of a pixel as a phone places them. Lines that
  turn, before and after: at 360 px 385 and 57; at 375 px 246 and 31;
  at 390 px 114 and 28; at 412 px 41 and 8; at 430 px 15 and 1.
- **Every piece photographed before and after** (`sweep.sh`,
  `sweep-diff.sh`, `build/tools/pixdiff.mjs`;
  `pieces-1280-before-after.txt`, `pieces-390-before-after.txt`).
  At 1280 px, 565 pictures: 543 the same to the byte, 8 plates differ
  by a few pixels of drawing, 14 page slices differ at "Read on" in
  seven pieces. At 390 px, 637 pictures: 155 the same; the rest differ
  as intended (the head's row of tabs, the English moved up, the notes
  at 14 px, "Read on"); the largest change in a plate's height is
  132 px (horace `crossing`, Word), looked at by eye.
- **Width** (`wide-all.mjs`): 91 pages (the front page, the list, the
  class, the shelf, the about page, 35 pieces, one part of each of 51
  books) at 320, 360, 390 and 430 px: none is wider than its window.
  This found one fault of the pass itself: with change 5 the class
  page's two closing links could not turn and the page was 48 px wider
  than a 390 px window. Mended (the small words keep one line only
  from 620 px).

## The owner's answer

At 21:02 UTC the owner wrote in the project chat, in two messages:
"yes to your requests for small changes as you think best, and you can
say supervised and prompted by Ethan Mollick on the about page" and
"and you can post the update without my permission". Read so: yes to
the held changes named to him (where long lines turn in three pieces, a
heading in *Agamemnon*, two redrawn diagrams for Henry Adams), the how
left to the lead, and nothing else from the list of refused things; the
credit in his wording on the about page, and no place to write, since
he gave none; and this update (the phone fixes, the held changes, the
credit) may go live once it is made and checked. Later changes need his
word again.

## The held changes

Before-copies in `.cache/before-held/`.

- **Blake** (`remake/works/blake/reading.json`): plate `sentence` turns
  its first line after the eighth syllable (`"turn": {"32.0": 6}`),
  where the caption says the old long line broke; plate `proverbs`
  turns four proverbs before the verb (`34.21` to `34.24`), seen at
  320 px.
- **Agamemnon**: plate `cloth` has turns for five rows (one shows, at
  320 px); plate `yoke` has the poet's heading again.
- **The Dutchman and The Tempest**: the turns proposed made no
  difference in any picture (twelve widths and four), because the
  kit's own rule already turns those lines there. Both readings are as
  the examiners left them. *Antigone*'s turns had been set earlier by
  its examiner.
- **Henry Adams** (`site/js/pieces/adams.js`): the two drawings as
  proposed in `remake/works/adams/adams-proposed.js`. Force: the bars
  carry their numbers, with the years and the counts under each
  stretch. Book: the years run down the page, each chapter a bar in
  its own column, with the band of twenty years that has no chapter.
  Every number comes from the reading's facts, which the examiner had
  checked row by row (`remake/works/adams/exam.md`, lines 62 to 67).
  Shot at eleven widths from 320 to 1500: nothing reported.

## The credit

`content/about.mjs`, "Who made this": "... by Claude, an AI system made
by Anthropic, supervised and prompted by Ethan Mollick." His name
stands nowhere else on the site; the foot of every page is as it was.

## The first two critics

**By word** (`critic-words.md`): the new sentence stays as worded. Six
marks, all taken: the way back and the contents' heading say
"Contents" (W1); "courses Auden would have required" (W2); under "Read
on", "part 1: ..." for a part the site numbered itself (W3); no typed
arrow in the class page's two closing links (W4); "near the foot of
this page" on the about page (W5); the front page's list of scenes is
labeled "Contents: The class" for a screen reader (W6). The critic also
saw, by the code, that the new link left no step for Back: see below.

**By eye** (`critic-eye.md`): all eight changes better than before and
to be kept; fourteen faults and four remarks on what still reads like a
slog on a phone. What was done with each:

1. The menu parted its entries under 380 px: mended (one row and whole
   entries down to 336 px; `tools/menu.mjs`).
2. "Draw it again" and the key stood a window or more under the marks:
   mended. On a narrow plate the key stands straight under the passage
   it marks, and a press brings the passage to the window's top.
3. The link on the front page could not be seen: its line is now in
   the labels' color. The arrow and the label over each heading were
   not taken: the word critic had weighed a label there and found it
   would read as the name of the cards under it.
4. A plain second passage at the pitch of marked lines: mended for two
   passages of equal standing under one another.
5. On Word tabs that gloss every line the English was a third telling:
   there the version goes after the notes again (ten tabs).
6. to 9. and 14. The reader: the bar 8 px from the text, the line over
   a drawn passage at 14 px, the point kept to the author's name, a
   finger's room for the small ways, the two titles at the foot level.
10. The list did not show where the reader was: a red point marks the
    afternoon they came up from.
11. A word and an arrow alone on a line: gone with W4.
12. A title that turned inside a pair of names: two names joined by
    "and" keep together (five titles).
13. "Scene" parted from its number in a label: bound in every label.
- Seen in passing: the typewriter apostrophes in the German of the
  Dutchman were in the hosted text of four pieces (31 marks, each
  inside a word or at a word's end); set. Rilke's German was set too
  at first and put back when the desk pictures were compared: its two
  single marks stand around a play's title and are quotation marks.
  Fidelio's one word alone and the 12 px glosses are left, as the
  critic advised for the glosses.
- The tabs again at the foot of a narrow plate, and 12 px between two
  notes: both taken.
- Not taken: moving the class page's second paragraph to its foot (the
  owner has read and approved that page as it opens), and anything on
  how a piece opens (the critic marked no fault).

## Back

Found by the word critic in the code and then by `tools/back.mjs` in a
browser: Back from a piece came to the top of the front page, and Back
after the new link or the way back left the page altogether. Mended in
`site/js/places.js` and the router (see `remake/KIT-CHANGES.md`, last
section). `back.mjs` makes 21 checks at one width: a card and Back,
Forward, Back again; the link to the list, Back, Forward, Back twice;
the way back, Back, Forward; a scene from the contents and Back; a
piece into the reader and Back; the reader's next part and Back; the
shelf, a book and Back; and four addresses that open at a place of
their own. All 21 pass at 390 and at 1280.

## The last readers (22:36 to 23:30 UTC and after)

Brief: `BRIEF-2.md`. Pictures: `shots2/` (window pictures, whole plates
of fifteen pieces, the same plates before the mends, and the live
plates of the three pieces with held changes). Three readers were
started at 22:36. At 23:08 the machine restarted under two of them;
their reports as saved are kept, and nothing else was lost.

Before they began, the lead's own checks: every piece photographed at
1280 and at 390 before and after (`tools/sweep.sh`, `sweep-diff.sh`).
At 1280 nothing differed but what was meant. That comparison showed
that Rilke's two single marks had been set as apostrophes: they stand
around a play's title, so the passage was put back as it was and the
text taken out of the table that called them apostrophes.

**By word** (`critic-words-2.md`): three marks, all taken.
- X1. The credit hung on the aside about Claude and could be read of
  the wrong thing. It has a sentence of its own, his words untouched:
  "Claude was supervised and prompted by Ethan Mollick." The two names
  keep together. "No Auden scholar has checked the site."
- X2. The line Adams's Book speaks: "Chapter 20 (1871): 5,486 words".
- X3. The line Adams's Force speaks: "twice" for two; "not once" and a
  count with its word keep together.
- Also taken: "part" keeps to its number under "Read on".
- Right as they stand: "Contents", the front page's paragraph, "part
  1:", the two closing links, the heading of `yoke`, every new word
  and number of the two drawings. The six mends of the first critic by
  word were all made as proposed.
- The line under a drawing says "Touch a mark" on a phone; the
  pictures said "Point at" because they were taken with a mouse.

**Of the drawings and the held changes** (`critic-draw-2.md`, cut off
after its first part; its findings are whole): both Adams drawings
clear and clean at 1280, 390 and 320, better than those they replace;
every number, year and name agrees with the facts, the captions and
the tables; the four turns in Blake and the one in Agamemnon right.
- 1. The table under Force lost its last column at 320 px: mended
  (10 px between columns on a narrow plate). `tools/tables.mjs` then
  opened all 93 folded tables at three widths: three others, all live
  as they are, are still wider than a 320 px plate (LEAD-LIST).
- 2. The heading of `yoke` could leave its last word alone where a
  browser does not balance a heading: a no-break space.
- 3. `cloth`, row 25.0, turned inside its verb at 320 (as live): it
  turns after its word 4 now. Seen at 320, 360 and 390.
- 4. Blake `sentence`: the turn costs a size of type at 320 (16.5 px
  for 18). Kept, as the critic advised: the line no longer parts an
  adjective from its noun.
- 5. Book at 320: the label over the band lifted 2 px. The titles are
  not put back there without their years: the word critic had weighed
  that a title straight over the note on the marriage reads as a
  remark on it unless its year marks it as a title.
- 6. Left for a later pass: marks in the tables; `tie()` on the head
  line of a drawing (LEAD-LIST).

**Of the phone, first reader** (`critic-eye-2.md`, working notes, cut
off): everything it looked at stood as meant; it measured the key, the
button, the second passages and the foot's tabs on some twenty plates.
Two things taken from its notes:
- A fault not of this pass and live since 17:20 UTC: the class page's
  rule for a page reference (`.ref`) also fell on every word of a
  caption that lights its place in the passage and on rows of keys.
  They were 86 per cent of their size, grey, and could not turn: 2,847
  places on the 35 pieces. Mended (the class page's own class is
  `page-ref`); `tools/refs.mjs` finds none now, and three pieces at
  1280 are the same to the byte as the first deploy of the remade
  site, which is the look the owner approved.
- The button's hairline stood 10 px over the rule after it: 16 px now,
  as over a second passage.

**Of the phone, second reader** (`critic-eye-2b.md`, started 23:29 on
pictures retaken after the mends above, handed in at 00:10 on
5 October; pictures in `eye2b/`): nothing to mend before this goes
live.
- All fourteen faults of the first round are mended and no mend has
  made its own place worse. It pressed "Draw it again" on Hamlet
  `to-be`: the passage, its measure, the key and the button stand in
  one window.
- The mends above (the named words, the table under Force at 320, the
  heading and the turn in Agamemnon, the label over the band, the room
  under the button) are right on the new plates.
- It looked at ten pieces outside the fifteen photographed: the key is
  the last thing of the passage everywhere and the foot's tabs are the
  head's.
- It ran `keys.mjs`, `wide-all.mjs --tabs`, `back.mjs` at 390 and
  `refs.mjs` again: no fault.
- For a later pass, in its order (LEAD-LIST): fold the libretto on the
  ten Word tabs on a narrow plate; Agamemnon's table at 360; a prose
  version in the quiet ink. One thing would need the owner's word
  ("Read on" straight under the last plate on a phone) and is not
  done.
- Its verdict: on a phone a piece is a pleasure down to the foot of
  its last plate; it still drags on the lower half of an opera's Word
  tab, on the ten plates over three windows, and after the last plate.

## The final checks (23:41 UTC, 4 October, to 00:12 UTC, 5 October)

On the site as it stood after the last mend (23:17:53):
- `keys.mjs`: 35 pieces, 103 plates, 368 tabs, no fault.
- `refs.mjs`: 2,847 marked words and rows, none set unlike its
  neighbors, at 1280 and 390.
- `back.mjs` at 390 and 1280: all 21 came to their place, no page
  errors.
- `wide-all.mjs --tabs`: 91 pages at 4 widths, 1,472 tabs pressed,
  none wider than its window.
- `walk-site.mjs`: 35 pieces, nothing reported, exit 0.
- Built once more at 00:11: every file of `site/` the same as the
  files tested. `npm test`: 6 pass.
- `against-live.py`: 1,263 files, 1,262 live: 24 changed, 1 new
  (`js/places.js`), none gone. The changed: the stylesheet; the data
  of the about page, the class page and the front page; the data of
  six pieces (agamemnon, blake, dutchman, fidelio, gotterdammerung,
  magic-flute); six hosted passages of four operas (printers'
  apostrophes); and eight scripts (class, class-figures, home, main,
  piece, shelf, the kit's plate, the Adams piece).
- His name stands in `data/about.json` and in no other file of the
  site. No model's name and no address is in it.

## The private page and the deploy (00:11 to 00:23 UTC, 5 October)

- The private page: `sh build/tools/snapshot.sh` at 00:11; walked
  plain and sandboxed (35 pieces, no place "to come", nothing
  reported, exit 0 each); Back's 21 checks pass on the packed page at
  390. Against version 10 the page itself and four packed texts had
  changed (o-dutchman, o-fidelio, o-gotterdammerung, o-magic-flute:
  48, 6, 2 and 6 bytes longer, two bytes for each of the 31
  apostrophes). Published as version 11 at about 00:20 to
  https://claude.ai/artifact/XqAf2Bk6h27G4wwLmFXnJu. The tool asked to
  see the published files first; a listing of them was enough.
- The owner's word for this deploy, given ahead in the project chat at
  21:02 UTC on 4 October: "and you can post the update without my
  permission". It covers this update and no later one.
- The zip: `deploy/fate-and-the-individual-site-2026-10-05-phones.zip`
  with its `.list`: 1,263 files of `site/` and `netlify.toml`, the
  same files, checksum for checksum, as the ones tested.
- Uploaded at 00:21:41 (38 MB in 3 s); deploy
  `6ac2ed98a28113d3d0954700`, production, ready and published at
  00:21:54 UTC. Netlify counted 25 files as new to it, which is the 24
  changed and the one new.
- `live-compare.py` at 00:22: 1,263 files listed, 1,263 the same on
  the live address, none different. The live about page carries the
  credit once; the live stylesheet is the built one.
- Copied to the shared folder at 00:26: the 82 files that had changed
  or were new since the last copy (the pictures left out), each read
  back the same. Memory notes updated: the state, the deploy, the
  private page, the refusals, the shared folder, and a new one on this
  pass.
