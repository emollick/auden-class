# The pass for phones: brief for its critics

The site "Fate and the Individual" is live. The person it was made for
asked, on 4 October 2026, "anything else we should add or change?" The
lead answered that nothing was wrong enough to hold the link, and that
the first thing worth another pass was the site as a phone shows it.
This is that pass. Nothing in it is live or published yet.

Read `remake/BRIEF.md` first (his words, the three rules, the house
style). The standing brief of the critics of the site's pages is
`remake/CRITIC-SITE.md`; its standards hold here. What he said of the
first version is the thing to keep in mind on a phone, where a page is
one long column:

> "it feels like a brutal slog through the most boring webpages"

> "design, design, design! Show me visually things, make me understand trophes and rhythm and rhyme. use this as a jumping off point for people to love poetry."

> "This is a labor of love, not a love of labor"

The look is settled and approved (paper, ink, two Garamonds, marks
drawn on the lines). You are not asked for a different look.

## What was changed

1. **The English under the original.** A plate that shows a passage in
   another language with its English as a second passage used to put
   the English after the caption and the key on a narrow plate, on
   every tab that does not mark the English. Now the English stays
   straight under the original on every tab, and the caption follows
   both. 24 plates in 13 pieces, 68 tabs. Where the English is the
   first passage and the original the second (Baudelaire `evening`,
   Rilke `count` and `turn`) nothing moved.
2. **A way down the front page.** The front page is about 19,000 px
   tall on a phone and the list of all the works stands near its foot.
   The paragraph under the class's block now ends with one new
   sentence whose first three words are a link to that list. The
   address `#/works` opens the front page at the list.
3. **A way back on the class page.** The class page is about 37,000 px
   tall on a phone. Over the rule each scene begins under, at the
   right, stand the words of the contents' own label and an arrow up:
   a link that goes to the contents and opens the list. The first
   scene has none.
4. **The reader's verse.** On a phone the reader's type is a little
   smaller (between 16.5 and 17.5 px, following the window) and its
   side margins are 16 px, so that far fewer lines of verse turn.
5. **"Read on"** at the foot of a piece: one shape at each width. On a
   wide page the title is at the left and the small words at the right
   of one row; on a phone the small words stand under the title.
6. **Plate heads on a phone**: the tabs always take a row of their own
   under the title and the place. Before, they stood beside a short
   title and under a long one.
7. **Notes on a narrow plate** (the notes on words and the points) are
   14 px, up from 13.
8. Small things: more room for a finger around the menu's words; a
   book's title in the reader's small heading is not broken at a
   hyphen; the front page's side margin on a phone is 16 px like the
   other pages.

## The pictures

All in `review/phone/shots/`. A picture named `...-390...` or with no
width in its name is a window 390 px wide and 844 px tall at twice the
size; `1280` in the name is a desk window 1280 by 800.

- `home-top-0`, `home-top-1`: the front page's first two screens.
- `home-intro-0`, `home-intro-1280-0`: the paragraph with the new
  sentence and link, on a phone and on a desk.
- `home-list-0`, `home-list-1`: where the link lands.
- `class-top-0`, `class-top-1`: the class page's top and its contents.
- `class-scene-three-0`, `class-scene-othello-0`, `class-scene-papers-0`:
  the end of one scene and the head of the next, with the way back.
- `class-up-0`: where the way back lands, the list opened.
- `class-1280-scene-love-0`: a scene's head on a desk.
- `read-tempest-0`, `-1`; `read-dante-0`, `-1`: verse in the reader.
- `read-moby-0`, `-1`: prose in the reader.
- `read-hamlet-foot-0`: the foot of a page of the reader.
- `read-phedre-o-0`: a passage in its own language in the reader.
- `plates/`: twenty plates and two piece pages as they are now, each a
  whole plate at 390. `plates-before/`: the same plates before the pass.
  The first twelve are plates where the English moved (change 1); the
  next two are plates where it did not; the rest show the heads and the
  notes (changes 6 and 7).
- `readon/`: "Read on" on four pieces and the class page's last links,
  on a phone and on a desk, with two of them as they were before.

For a closer look, `node review/phone/tools/view.mjs <address> --out
review/phone/<your folder>/<name> [--width 390] [--at <css selector>]
[--before 80] [--screens 2] [--click <css selector>] [--stay]` takes a
window's picture anywhere on the site (addresses: `home`, `works`,
`class`, `shelf`, `about`, a piece's id, `read/<text>/<part>`). Run it
at most eight times.

## What is asked of each critic

Your prompt says which job is yours. You do not edit anything but your
own report.

**The critic by eye.** Open every picture. For each of the eight
changes say whether it is better than before, and name what is still
wrong in that place on a phone: a line that turns badly, a word left
alone on a line, a label that touches something, a link too small or
too faint to find, type under 13 px for running words or 10.5 px for a
label, two things that belong together standing apart, anything the
change has made worse. Say whether the way back on the class page and
the link on the front page read as part of the page or as something
bolted on. Name each fault by the picture and the place in it, worst
first, with a line on what would mend it. Say what should be kept.

**The critic by word.** The pass added one sentence to the site and
used one label a second time. Read the new sentence in its paragraph
(`site/js/home.js`, the section `home-intro`; pictures `home-intro-0`
and `home-intro-1280-0`) against section 2 of `remake/CRITIC.md` and
the standing brief's fault "a page that explains itself". Read the
label of the way back in the pictures of the class page. Then read the
small words these changes touch: the words of the menu, "Read on", the
small words beside each title in `readon/`, the two closing links of
the class page. For each thing you mark give the place, the words, the
fault in a few words, and the words you would put (or "cut"). If the
new sentence should go and the link stand another way, say how.

## Your answer to the lead

A few lines: what most needs mending, and the path of your report.
Keep each file write under about 120 lines.
