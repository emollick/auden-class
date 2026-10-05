# The pass for phones: the critic by word

Read where a reader meets them: the paragraph (`site/js/home.js`, lines 113 to 116) in `home-top-0`,
`-1`, `home-intro-0`, `home-intro-1280-0`, and its landing in `home-list-0`, `-1`; the class page's
seven pictures; `readon/`; the reader's foot in `read-hamlet-foot-0`. Three pictures of my own are in
`review/phone/words/` (three runs of `view.mjs` of the four allowed). Nothing else was written or run.

## The three questions

**1. The new sentence stays, as worded.** "All the works are listed at the foot of this page."
- By the letter it is a sentence about the page, and it comes near nos. 3 and 6 of section 2 (a
  signpost; a clause that tells the reader what they will find). By the standing brief's own test,
  "where the page could simply show it", it passes. The page cannot show here a list that stands
  some eighteen screens down, and a link that leaps that far owes the reader the place it lands.
- It carries a fact. The cards show 34 of the 35 pages. *The Family Reunion* has no card, so the
  foot is the one place on the page where every work stands. "All" is exact.
- A label in its place would say less. "All the works ↓" over the rule of "I Prosody" would likely
  be read as the name of the cards under it, which are the works too.
- The wording is the plainest that is true: ten words, and the link's three words are the three
  words of the heading where it lands (`home-list-0`).
- "At the foot of this page" is right. The list is the last of the page's matter. After it come one
  rule and the two lines that close every page (`words/home-foot-390-0.png`). The class page uses
  the same words for its last fold, which also has links and those two lines after it
  (`class-scene-papers-0`). One phrase, one kind of place.

**2. It still reads as one paragraph.** The three sentences go down the page in the page's own
order: the list, the headings below, the foot. The third takes up the noun of the first ("works").
At 390 px it falls on a line of its own, where the link is easy to find. Nothing is now said twice
on the front page: the sentence says nothing the page says elsewhere, and "All the works" as link
and as heading is one name for one place. Two sentences of the three now point at the page
("below", "at the foot of this page"). That is the limit: no third. The paragraph leans on the
block above it for "that course" and "he", as it did before (W2).

**3. Labels.** One label for two things: none. Two labels for one thing: W1, W5 and W6 below.
- "The works" (the menu, the class page's closing link, the page for a wrong address) is the front
  page. "All the works" (link and heading) is the list at its foot. Two things, two names.
- The address `#/works` opens the list, and the menu's "The works" opens `#/`. A reader meets the
  address only in a copied link, where it opens the same page with "The works" marked. Leave.

## Marked, worst first

**W1. The way back on the class page.** The one thing here that needs mending.
- Place: over the rule of 13 of the 14 scenes. The string `contents` in `content/class.mjs`,
  line 22, which `site/js/class.js` also gives to the fold's heading and to the label of the list.
- As it stands: "On this page ↑"
- Fault: a heading's phrase used as a name.
  - On a desk the heading is not shown (`site/css/atlas.css`, line 821, from 760 px up). The label
    repeats words the reader has never met, and lands on three columns with nothing over them
    (`class-1280-scene-love-0`, `words/class-top-1280-0.png`, `words/class-up-1280-0.png`).
  - On a phone, a reader who came down from the top will know it: the arrow says up, and the same
    words stand over the opened list where it lands (`class-up-0`). A reader who opens the page at
    a scene has not seen them. Mid-page the phrase names nothing, since all that stands around it
    is on this page. In `class-scene-papers-0` "this page" stands three times in one window.
  - A screen reader hears "On this page, link" thirteen times. The arrow is hidden from it.
  - The reader's foot calls the same kind of way back "Contents: Hamlet", in small capitals like
    its own (`read-hamlet-foot-0`; `content/shelf.mjs`, line 58).
- Put: "Contents". The one string changes the fold's heading, the label and the way back
  ("Contents ↑") together. Not "The afternoons": the list also holds the examination, the papers,
  the next course and what the students said (`review/class/critic2-words-a.01.md`, W4).

**W2. `site/js/home.js`, line 115, the paragraph's second sentence** (older than this pass; light).
- As it stands: "courses he would have required"
- Fault: "he" has no name in its own paragraph. The name stands in the block above, across a rule.
- Put: "courses Auden would have required"

**W3. The title under "Read on" on *Antigone* and *Agamemnon*** (`readon/antigone-390-0`; the
second by the data; `site/js/piece.js`, line 126; light).
- As it stands: "Antigone, 1. Antigone and Ismene; the Elders of Thebes"; "Agamemnon, 1. The
  Watchman; the Elders"
- Fault: a number from a list, set after a comma. On a phone the first line reads "Antigone, 1.
  Antigone".
- Put: "Antigone, part 1: Antigone and Ismene; the Elders of Thebes"; "Agamemnon, part 1: The
  Watchman; the Elders" (as "Chapter 1:" stands on *The Education of Henry Adams*).

**W4. The class page's two closing links** (`readon/class-390-0`; `site/js/class.js`, lines 244
and 245; light).
- As it stands: "A page for every work on the list →"; "The list, and the books that can be read
  here →"
- Fault: the arrow is typed into the words. The other rows of this shape have small words without
  one ("Read it here", "At archive.org"), and elsewhere the arrow is kept apart from the words and
  hidden from a screen reader.
- Put: the same words without the arrow, or the arrow in a span of its own as on the cards.

**W5. "Foot" and "bottom"** (light).
- As it stands: "at the foot of this page" (the front page; `content/class.mjs`, line 536) and
  "near the bottom of this page" (`content/about.mjs`, line 78).
- Fault: two words for one place.
- Put, on the page about the site: "near the foot of this page"

**W6. `site/js/home.js`, line 107** (heard by a screen reader, not seen; light).
- As it stands: the list of scenes beside the class's block is labeled "The afternoons".
- Fault: the class page labels the same list otherwise, and "afternoons" is not true of all of it.
- Put, with W1: "Contents: The class", in the form the reader's foot uses.

## Weighed and left

- "are listed". The earlier critic took "The list" off this heading because "the list" is Auden's
  everywhere else (`review/remake/critics/site-words.md`, B4). A verb is not the name, the line
  under the heading says where "the list itself" is, and no other verb is as plain and as true.
- The sentence's place. Set after the first sentence it would join "works" to "works", but two
  pointers would then stand together and the link would fall mid-line. Leave it last.
- "Read on" over "Read it here": "read" twice in three lines on a phone. "Read it here" is the
  site's one phrase for a link into the reader. Leave.

## Right, keep

- The link's words are the heading's words, on both pages: the reader lands on what was tapped.
- "All the works", the line under it, and "The works" marked in the menu at both addresses.
- The menu's four words. "Read on", "Read it here", "At archive.org".
- The words of the class page's two closing links. They are true, and "The works" there is the
  menu's name for the same place.
- The way back's make: named for the place it goes to, an arrow for the direction, the list opened
  where it lands. Only the name needs changing.

## Seen in passing, not words

By the code (`site/js/home.js`, lines 154 to 161; not tried in a browser), the link "All the works"
moves the page and leaves no step for Back. A reader who taps it and then presses Back leaves the
front page instead of returning to the paragraph.
