# The card for links: record

What was asked (Ethan, 4 October 2026, 17:09 UTC, in the project chat): "and also do a nice card for when
people post it online". It came two minutes after "post it, create", on which the class page went live.

## What was made

- `site/card-1.png`, 1200 by 630: the site's name, the line "W. H. Auden's course at the University of
  Michigan, fall 1941", a hairline, the author and the work, and the two lines the front page opens on,
  with their measure drawn under them. Every site that shows a card reads it as `og:image`.
- `site/card-x-1.png`, the same card set for X, which reads `twitter:image` first. X lays a dark box with
  the page's title over the picture's foot, and the box does not shrink with the picture. On this card
  the name is a small head, the lines are a little larger, and the last dots end at 76 percent of the
  height, so the box lies on nothing at any width from 280 px up.
- The tags in `site/index.html`: `og:url`, a fuller `og:title`, `og:image` with its type, size and alt
  text, `twitter:card` asking for the large picture, `twitter:image` with the same alt text. The
  description (twice in the page) was written again.
- `build/card.mjs` draws both pictures with the site's own stylesheet, faces and kit from
  `site/data/front.json`, so a card shows what the front page shows and no line of verse is typed
  anywhere. It also writes the alt text into the page from the same data, and it stops with PROBLEMS if
  a mark stands too low, if anything is cut off, if a face did not load, if the alt text is longer than
  X takes (420 characters), or if the page does not name the two pictures.
- Pictures for looking at: `final/` (the two cards, the general one small, X's with the box drawn at its
  true place and size on a phone and on a desk screen) and `first/` (the first card, which the first
  round of readers saw).

A link to any page of the site shows the same card, because the part of an address after "#" never
reaches a server.

## The first round: a reader who knew nothing, and a critic

Reports: `stranger.md` and `critic-a.md`. What each said, and what was done.

The reader who saw the card cold (two pictures and the text under them, nothing else):
- The card works and the reader would open it. The heavy letters read as stresses and the rule with its dots as
  the beat, without a key. Nothing sounds like an advertisement or like a machine.
- At chat size nothing says whose lines these are. Done in part: the line that names the author and the
  work is larger on both cards, and the alt text names Shakespeare. At 300 wide it still cannot be read.
- "recorded" was heard as sound recordings. Done: "as his students wrote them down".
- "the figures and the words drawn on the lines" could not be taken. Done: "the figures of speech".
- The description says again what the title says. Left: the same sentence stands alone under the bare
  name in a search result, and there it has to say whose course, where and when.
- "course" after "Fate" can be heard for a moment as the course of a life. Left: the site's own header
  has the words, and the line on the picture puts it right.
- No name stands behind the site, and nothing says how much there is. Left: the owner's name does not go
  on the site.
- The red marks do not explain themselves. Left on the picture, where they made the reader look twice.
  The alt text says what they are.

The critic (fifteen findings):
- 1 and 2, sure: on a phone X's box covers the dots and the ring under the second line, and with the
  page's title in it the box runs nearly the width of the card. Checked here with pictures at 310 and 280
  wide and found so. Done: X has a picture of its own (above). The guard in the script now measures the
  marks themselves.
- 3: what is read at 506 and at 300. Nothing to do. (LinkedIn shows an ordinary post's picture small
  whatever the tags say.)
- 4, taste: the line under the title is the faintest full line and carries Auden's name. Done: it is set
  in the darker of the site's two greys and a little larger.
- 5: the middle square loses the left of every line. Left: mending it would spoil the full card.
- 6, taste: the shading at the edges was twice as deep as on the site. Done: halved.
- 9, sure: the year was given three ways. Done: the description says "in the fall of 1941", as the
  site's prose does.
- 10a, sure: "each opened at a few passages" is untrue of one work, which has no passage. Done:
  "passages from the works on his reading list".
- 10b and 10c: as the reader's two points above. Done.
- 12, likely: the alt text left out the words that are in the picture and the red marks, and "over"
  could be heard as "on top of". Done: the script writes it. It gives the name, the line under it, the
  two lines, what is drawn under them, and the two red marks in the words of the site's own key. The
  lines are joined by a space, since each ends with a stop: it is written to be heard.
- 13: the tab's title and the card's title differ, with a reason. Left.
- 14: the tags agree and none is missing. No `og:site_name`, on purpose. Left.
- 14c: sites keep what they fetched, so where the address was posted before, the old plain box shows
  for a time. Said to Ethan with the result.
- 14d: Slack may show no icon, since the site's icon is inside the page. Left.
- 15: the script did not check the alt text. Done, as under 12.

## The second round: a second critic

Report: `critic-b.md`, with a foot "After the mending". Verdict both times: it can go up as it is.

- X's card on the smallest phones: the last dots stood 3.5 px over X's box and looked nearly as if they
  rested on it, and a phone that cut the picture to two to one would have made them touch. Done: the card
  was set again with more room (the title at 34, the passage at 41, 23 over the title and 48 at the
  sides). The dots now end at 73 percent, 7.5 px over the box at 280 wide and 4 px if the picture is cut.
- Under about 310 px X cuts the title in its box and the year goes. Left: what remains still says whose
  course it is.
- The general card, the description and the tags: nothing wrong.
- "as his students wrote them down" may make a careful reader expect the students' own pages. Left.
- The alt text did not say where the two red marks stand, and X's limit left no room to say it. Done for
  the other sites: `og:image:alt` ends with two sentences that say it (456 characters), and the script
  checks them against the data. X's text is as it was (411 of 420).
- A slash between two lines is spoken as "slash" by some screen readers. Done, for a later passage: the
  script puts a comma where a line does not end in a stop.
- Slack may read `twitter:image` first and show X's card with no box on it. Nothing to do: the card
  stands up bare.

## Checks before the upload

- `node build/card.mjs`: no problems. Drawn twice, the pictures came out the same to the byte.
- `node build/pieces.mjs` changed no file of `site/`. `npm test`: 6 of 6. The walk of every page and tab
  (`review/remake/last-pass/tools/walk-site.mjs`): 35 pieces, nothing reported, run again after the last
  change to the page.
- Against the site as it was live: two files added (`card-1.png`, `card-x-1.png`) and one changed
  (`index.html`, in lines 7 and 9 to 19 of its head and nowhere else).
- The tests against wording too close to Auden's were not run again: the new words report nothing of
  his.

## The upload

Ethan's words for it: "post it, create" and, two minutes later, "and also do a nice card for when people
post it online" (4 October 2026, 17:07 and 17:09 UTC). The reply of 17:20 UTC told him that the card
would go up as soon as it was made and checked.

- 18:50:15 UTC: `deploy/fate-and-the-individual-site-2026-10-04-card.zip` (1,262 files of `site/` and
  `netlify.toml`) was sent through the address the Netlify connector gave. Deploy
  `6ac29fe7121ce87000419f8b`, production, ready at 18:50:24 UTC: "3 new files uploaded".
- Afterwards: all 1,262 files on https://auden-english-135.netlify.app compared the same as the build.
  Both pictures answer there as `image/png`, 1200 by 630. The page a card reader fetches carries the new
  tags, and the same page answers with `?1` after the address.
- Not done, because it wants an account at each site: asking Facebook's Sharing Debugger and LinkedIn's
  Post Inspector to fetch the page again. Where the address was posted before 18:50 UTC the old plain
  box may show for some days. A link with `?1` after it counts as a new address and shows the new card.
- A changed card takes the next number in its name (`card-2.png`, `card-x-2.png`), set in `CARDS` in
  `build/card.mjs` and in the two tags of `site/index.html`. The address in the tags is written out in
  full: a new address for the site would need the tags changed.
