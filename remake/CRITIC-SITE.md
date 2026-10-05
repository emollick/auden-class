# The critics of the site's own pages

Every piece has had its own critic. You read what stands around the
pieces: the front page, the page about the site, the shelf, and the
reader in which a whole book opens. Read `remake/BRIEF.md` first (the
words of the person this is for, the three rules, the house style) and
then sections 2 and 3 of `remake/CRITIC.md`: the faults listed there
are the faults you are looking for here.

He asked for critics before anything else was built:

> "have critics scour every word you write for LLM-speak or other writing that would get in the way of your message."

And of the first version of this site he said:

> "it feels like a brutal slog through the most boring webpages"

> "you seem to be aiming for a page which is just a boring website"

> "design, design, design! Show me visually things, make me understand trophes and rhythm and rhyme. use this as a jumping off point for people to love poetry."

Your prompt says which of the two jobs below is yours.

## Look first

```
node build/pieces.mjs && node build/front.mjs
node build/tools/shoot.mjs home  --out review/remake/site-shots --page
node build/tools/shoot.mjs about --out review/remake/site-shots --page
node build/tools/shoot.mjs shelf --out review/remake/site-shots --page
node build/tools/prose.mjs
```

The picture tool serves the site itself and photographs it at 1280 and
390 px. It takes any address of the site, so a book in the reader is
`read/<text>` (its contents) or `read/<text>/<part>` (a page of it):
`node build/tools/show.mjs` lists the texts and `node build/tools/show.mjs
<text>` the parts of one. Open every picture. `review/remake/prose/site.md` holds every
sentence these pages print, each with the place it is kept.

## The critic by word

Go through `review/remake/prose/site.md` sentence by sentence, with the
pictures open so that you read each sentence where a reader meets it.

- The faults of `remake/CRITIC.md`, section 2, all of them.
- **A page that explains itself.** A front page should show a line of
  verse with its marks and let that do the asking. Mark every sentence
  that tells the reader what the site is, how to use it, or what they
  will find, where the page could simply show it.
- **The same thing said twice** on one page, or on the front page and
  again on the page about the site.
- **A claim about Auden or the course** in these pages is a fact like
  any other. You do not check it, but list each one with the place it
  stands, so that the lead can see every one has its source in
  `content/about.mjs` or the research notes. Mark any that reads as
  larger than a careful person would claim.
- **Labels and small words**: the names of the tabs, the headings, the
  words on links and buttons, the lines under the cards. Each should be
  the plainest word that is true. Mark a label that needs explaining,
  two labels for one thing, and one label for two things.
- **How the site says who made it.** It was made by Claude, an AI
  system made by Anthropic, and the page about the site says so once,
  plainly. It names no person. Mark anything that hides this, repeats
  it, or dresses it up.

You do not edit. The words of these pages are kept in `content/*.mjs`
and in scripts; the lead applies what you find. For each sentence you
mark, give the place, the sentence, the fault in a few words, and the
sentence you would put (or "cut").

Hand in `review/remake/critics/site-words.md`.

## The critic by eye

You judge the pages as a person who loves books and well-made things
would, on a desk screen and on a phone. The look is settled and was
approved: paper, ink, two Garamonds, marks drawn on the lines, nothing
dressed up in the subject of a work, no sound, no scenery, no games.
You are not asked for a different look. You are asked where this one
is not yet carried through.

Of each page, at each width, say:

- what the eye goes to first, and whether that is the right thing;
- where the page is crowded, where it is bare, and where two things
  that belong together stand apart;
- every line that turns badly, every word left alone on a line, every
  label that touches or overlaps something, every mark that does not
  sit on its word;
- where the type is too small to read with ease (under about 13 px for
  running words, 10.5 px for a label);
- on the front page: whether each card shows something a reader can
  see at a glance, whether any card is a puzzle without its page, and
  whether the cards of one row sit well together;
- on the shelf: whether the bookcase reads as a bookcase, and whether
  it is clear what can be opened;
- in the reader (open two books from the shelf, one of verse and one
  of prose): whether a page of the book is a pleasure to read, and
  whether it is always clear where you are and how to get back;
- anything that looks like a template, a dashboard or a course
  website, since that is what he rejected.

You do not edit. Name each fault by the picture it is in and where in
the picture, worst first, and for each say in a line what would mend
it. Say also what is best on each page, so that it is kept.

Hand in `review/remake/critics/site-eye.md`.

## Your answer to the lead

A few lines: the five things that most need mending, and the path of
your report. Keep each answer and each file write short (under about
150 lines at a time); an answer that is too long is lost.
