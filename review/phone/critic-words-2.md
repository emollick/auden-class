# The pass for phones, second round: the critic by word

Read where a reader meets them: the pictures of `review/phone/shots2/`, the files named in each
place, and four pictures of my own in `review/phone/words2/` (four runs of `view.mjs`, the four
allowed; the other pictures there are cuts). I also read the open tables in the drawing critic's
`draw2/fold-*.png`, and printed titles and facts from the data with scripts that write nothing.
No other file was written, and nothing was refused.

Three things are marked. X1 should be mended before this goes live. X2 and X3 are light, and their
words are older than this pass.

## Marked, worst first

**X1. The credit: his words hang on the aside about Claude.**
- Place: `content/about.mjs`, line 53, the first sentence under "Who made this"; `about-390-0`,
  `about-1280-0`.
- As it stands: "This site was researched, written and built in October 2026 by Claude, an AI
  system made by Anthropic, supervised and prompted by Ethan Mollick."
- Fault: the phrase can be read of the wrong thing.
  - The sentence has just written three things in a row with no comma before "and": "researched,
    written and built". A few words on, "made by Anthropic, supervised and prompted by Ethan
    Mollick" has the same shape and is read the same way: three things said of the AI system.
    Read so, it says who makes Claude and who supervises it in general. It is meant to say who
    stood over the making of this site.
  - At both widths the line turns in the one place that makes this worse. At 390 px the third
    line of the paragraph is "Anthropic, supervised and prompted by Ethan". At 1280 px the second
    line begins "Anthropic, supervised and prompted by Ethan Mollick."
  - "by" stands three times in twenty-four words, and the sentence carries six participles.
- Put, his words untouched, in a sentence of their own with their true subject:
  "This site was researched, written and built in October 2026 by Claude, an AI system made by
  Anthropic. Claude was supervised and prompted by Ethan Mollick. No Auden scholar has checked the
  site. Where it reports a fact about Auden or the course, it names the source so that you can
  check the fact yourself."
  - The first sentence is then the one that stood live before this pass, to the letter.
  - "checked it" must become "checked the site". After a sentence about Claude, "it" would be
    Claude.
- The other way, if one sentence should carry both names. It changes two commas and nothing else:
  "This site was researched, written and built in October 2026 by Claude (an AI system made by
  Anthropic), supervised and prompted by Ethan Mollick." The aside is shut, so the row of three
  cannot form, and "No Auden scholar has checked it" stays as it is.
- Not "The work was supervised": on this site "the work" is a book on Auden's list. Not "It was
  supervised": "it" could be the site, the system or Anthropic.
- With either wording, bind his two names with a no-break space. At 390 px the line now parts
  them: "Ethan" ends one line and "Mollick." begins the next.

**X2. The line the Book drawing speaks** (light; older than this pass).
- Place: `site/js/pieces/adams.js`, line 187; `words2/book-say-0.png`, where chapter 20 is lit.
- As it stands: "Chapter 20: 1871, 5,486 words"
- Fault: a year and a count stand side by side, and the count has a comma of its own. Three
  numbers run together.
- Put: "Chapter 20 (1871): 5,486 words", and for a chapter of several years "Chapter 1 (1838 to
  1848): 7,129 words". The Force drawing's line has this shape already: "Chapter 1, Quincy (1838
  to 1848): 7 times in 7,129 words" (`words2/force-say-0.png`).

**X3. The line the Force drawing speaks** (light; older than this pass).
- Place: `site/js/pieces/adams.js`, line 91.
- (a) As it stands at 390 px, for chapter 13 (`words2/force-say13-line.png`): the first line ends
  "(1864): not" and the second begins "once in 4,886 words". Fault: "not once" is parted. Put: a
  no-break space in "not once". The kit ties neither that pair nor a count to its word ("42
  times", "3,991 words"; I ran `keep()` on the lines). Chapter 13 is the one line I saw parted.
  The other lines long enough to turn, chapters 14, 25 and 33 among them, I did not see.
- (b) As it stands, for chapters 2, 6, 7 and 20 (by the code and the facts): "2 times in 5,833
  words". Fault: the line says "not once" and "once" in words, then counts two in a figure. Put:
  "twice in 5,833 words".

## The sentence under each drawing

**It reads rightly on a phone. A phone does not show the words that are in the pictures.**
- The kit asks whether the device has a pointer that can rest on a thing (`site/js/kit/diagram.js`,
  lines 94 and 95). Where it has none, the line is "Touch a mark to read what it stands for."
- Every plate in `shots2/` was photographed by a browser with a mouse, at 320 and 390 px too. So
  all of them show "Point at a mark to read what it stands for." `words2/force-touch-0.png` is the
  same plate as a phone shows it, with "Touch".
- "Touch" is right. "Tap" is the commoner word on a phone, but "touch" is plain, is true of what
  the finger does, and pairs with "point at". Leave it.
- "a mark" is the site's word for anything drawn on a plate, and the key just over the line shows
  two of them.
- It is a sentence about the page, and it passes the first critic's test for one: the page cannot
  show that a bar answers a finger.
- For whoever keeps the kit: the test is `(hover: none)` alone. `site/js/pieces/pascal.js`,
  line 85, also asks `(any-pointer: coarse)`. A phone that reports a pointer it does not have is
  told to point.

## Right as they stand

- **"Contents" on the class page** (`class-scene-othello-0`, `class-up-0`, `class-up-1280-0`):
  right. One word from one string for the way back, the fold's heading and the list's label. The
  reader taps "Contents" and lands on "Contents". No "On this page" is left in the page's words.
- **The front page's paragraph** (`home-intro-390-0`, `-375-0`, `-1280-0`): right. The name stands
  in its own paragraph now. Thirty-three works and nine operas agree with `remake/pieces.json`
  (thirty-five pages, the *Comedy* in three).
- **"Read on"** (`readon-*`): right. "Antigone, part 1: ..." and "Agamemnon, part 1: ...", and at
  390 px each title turns after "part 1:". I built all thirty-five titles from the data by the
  page's own rule. Only these two began with a number and a point, and no other title is changed.
  The small "p" is right: "Chapter", "Act" and "Book" in the other titles are the books' own
  divisions, and this one is the site's. "Read it here" and "At archive.org" are as they were.
- **The class page's two closing links** (`class-end-0`): right. No arrow in the words, and both
  lines are true.
- **The heading of `yoke`** (`words2/yoke-390-head.png`, `words2/yoke-320-head.png`): right. "The
  king at Aulis, as the elders sing it". The two words put back say whose speech opens the
  passage. One line at 390 px, and at 320 px it turns at its comma. It pairs with the third
  plate's "The queen over the body". The built page has it.
- **The new words of the two Adams drawings** (`plates/adams-dynamo-3-force-*`,
  `plates/adams-born-2-book-*`, at 320, 390 and 1280): right. Each is a name, a number or a
  plain label, and each agrees with `facts`.
  - Force: the two chapters named over their bars with 71 and 42 times; 1, 20, 21, 25 and 33
    under the line, and 35 where it has room; "1838 to 1871", "58 times", "in 108,876 words";
    "1892 to 1905", "272 times", "in 65,487 words". I added the thirty-five rows again: all four
    sums agree. The key. "The count, chapter by chapter", with its four heads and thirty-five
    rows.
  - Book: 1838, 1871, 1872, 1885, 1892 and 1905 down the side; "chapter 1" and "chapter 35";
    "chapter 20, Failure (1871)" and "chapter 21, Twenty Years After (1892)", in two lines at
    390 px and without the titles at 320 px; "1872 to 1891", "no chapter", which is the twenty
    years of the head line; "Adams marries Marian Hooper" and "She takes her own life"; "In the
    storyteller's own sentences" over 0, 0, 0 and 102; the key, with "not in the book"; "The
    chapters and their years", with its three heads.
  - `remake/works/adams/reading.json` is the same file, to the byte, as before this pass. The
    head lines and the captions are the ones already live.

## The first critic's mends

All six were made as proposed, and none was made badly. W1: "Contents", from one string. W2:
"courses Auden would have required". W3: "part 1:" by a rule in `site/js/piece.js`, line 128, that
touches two titles and no others. W4: the two closing links without their arrows. W5: "near the
foot of this page" (`content/about.mjs`, line 78). W6: "Contents: The class" (`site/js/home.js`,
line 108). The built data has each of them.

One thing under W3, which shows nowhere. The kit ties "Chapter 1" so that a line cannot turn
inside it, and it does not tie "part 1" (I ran `tie()` on both titles). On a phone the two words
open the title and cannot be parted. If the kit's list of such words is opened again, "part"
belongs in it.

## Weighed and left

- "Failure (1871)" stands just over "Adams marries Marian Hooper" at 390 px, and could be taken
  for a remark on the marriage. It is Adams's own title, its chapter's number stands over it, and
  its year marks it as a title. At 320 px the title is dropped.
- The head "times" in the Force table is bare. The drawing has just said "58 times in 108,876
  words", and a row of the table reads the same way. If it is ever to say more, the word counted
  is the head, as Augustine's table heads its count "a word for Thou".
- The head line of Force names the word *force* without setting it apart from the italic around
  it. No head line of a drawing on the site sets a named word apart (Augustine's "Thou", the
  Castle's "K."). One form across the site, and not for this pass.
- "a chapter, set against the years in its title". "Set against" can mean opposed to. Beside a
  scale of years it is read as placed along it.
- "The Journal of My Other Self, Part One, 1" under "Read on" ends in a bare number. Here the
  number is the part's whole name, and the reader lands on a page headed the same way.
- On Agamemnon's page one part is "1. The Watchman; the Elders" under the first plate's heading
  and "part 1: ..." under "Read on". Alone on its line the number reads as a number. After the
  play's name and a comma it did not.
- "No Auden scholar has checked it" now follows his name. It is a plain fact about the site, and
  it is as true with his name before it.
- The foot of every page names Claude and not him. He gave his words for the about page.

## Seen in passing, not words

- `view.mjs` takes `--touch`, which the brief's line on the tool does not list. The pictures of
  `shots2/` were taken without it.
- In `class-up-0` one title in the list is red, two rows under the red point. It is the picture's
  pointer resting on a link. There is one mark.
- On a phone the Force drawing gives a finger about 9 px to each of its thirty-five bars. "Touch a
  mark" is kept only roughly there, and the table under the drawing is the sure way to a chapter's
  count. That is for the critic of the drawings.
- Chapter 27 is "Teufelsdrockh" in the table, as in the text printed here. As I remember the
  printed book, the name has its umlaut. Not checked here. It would change in the book's label,
  the facts and the table together, and it is not for this update.
