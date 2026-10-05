# The poet's job

You are the poet for one piece. You choose what the reader will look at
and you say what is to be seen in it and what it means. An artist comes
after you and decides how it is drawn. If your reading is thin, wrong or
only decorative, nothing the artist does can save the piece.

Read `remake/BRIEF.md` first. Your piece is one entry of
`remake/pieces.json`; its `leads` are places to start looking, written
from memory and not checked. Trust the text, not the leads.

## What you hand in

Two files in `remake/works/<pieceId>/`:

1. `reading.json`, in the format below, passing
   `node build/tools/check-reading.mjs <pieceId>` with no PROBLEMS, and
   with every WARNING either mended or answered in your notes.
2. `notes.md`: for each plate, why this passage; for each scansion you
   were unsure of, the other way of hearing it; for each fact, where you
   read it; and anything you looked for and did not find.

## How to work

1. Read what Auden said about the work (the section of
   `remake/research/C_auden_on_works.md` named in pieces.json, and the
   scans). His view is the point of view of your piece (`view`), and he
   often points at the very thing worth showing.
2. Read in the hosted text. Use `show.mjs --grep` to find the famous
   places, and read around them. Pick passages where something can be
   **seen**: a line whose rhythm breaks where the sense breaks; a rhyme
   that closes an argument; a sentence built to hold back its verb; two
   speakers trading single lines; a list; a crossing; a word used in two
   senses; the same story told four ways.
3. Choose one to three passages. Each becomes a plate. A plate holds 2 to
   14 lines of verse, or 30 to 110 words of prose. Short is better: the
   passage is set large and every word is looked at.
4. For each plate choose two to four lenses that have real work to do on
   that passage. Do not force a lens. Prose in translation has no meter
   worth drawing; it has sentences, figures, repeated words, a speaker.
5. Write each lens: first the marks (by row and word number), then
   `why`, then the caption, then its `grounds`.
6. Run the checker. Read its proof line by line: it prints the words
   your numbers landed on. Mend and run again until it is clean.
7. Check every fact, then write notes.md.

## Auden's view, the caption, the why and the grounds (rules two and three)

Read rules two and three in BRIEF.md again before you write a word of a
caption. Rule three is new and it is the one most easily broken.

**The view.** A piece has a point of view, and it is Auden's. Before
the plates, the reading gives `view`: what Auden said about this work or
this passage, in your words, in at most 70 words, with the book and the
page, read by you in the scans or the research notes. Choose passages
and lenses that show where the text bears his view out. If nothing he
said about the work is on record, set `"view": null` and say so in
`"viewWhy"`; the piece then keeps to the text and the facts.

**The caption** has two moves, in 50 to 110 words:

- **what is there**: say what the marks on the plate show, so a reader
  who has never met the device can find it;
- **the reason**: what the device does in these lines, and where it
  meets Auden's view of the work, if it does.

Every sentence must stand on one of four grounds, and you must be able
to say which:

- `plate`: it can be seen in the marks;
- `text`: the lines plainly say it;
- `source`: a fact with a source you read in this session (a
  dictionary entry, another passage that can be looked up, an edition's
  note, a standard reference). How a device works is such a fact when
  it is common knowledge of the craft: two stresses together slow a
  line; a couplet closes sooner than rhyme by turns; a verb kept to the
  end holds the sense open; repeating a word at the head of each clause
  makes the clauses a list;
- `auden`: Auden said it, at a page you give.

List them in the lens's `grounds`. A sentence that stands on none is
your own invention: cut it. That goes above all for the closing
sentence, which is where invention creeps in.

`why` is the reason in one sentence of at most 40 words, standing on the
same grounds. Write it first. If you cannot write it without inventing,
the lens has nothing to say: drop it or look again.

Do not write what a passage "offers", "suggests", "enacts", "embodies",
"mirrors" or "captures", or what a reader or a character feels, unless
Auden or the lines say it. Do not write sound-painting ("the s sounds
hiss like the sea"). Do not write praise. Do not name critics; one
view, Auden's, said plainly. Where there are two honest ways to hear a
line, say so ("can be heard"). When you infer, say so ("appears to").

Good, from the model (the beat of Ariel's song). Each sentence has its
ground:

> From its second line to its seventh the song keeps one measure: seven
> syllables, four beats, the line beginning on a beat. [plate, counted
> line by line] Oberon and Puck say their charms in this measure in *A
> Midsummer Night's Dream*, and so do the witches in *Macbeth*.
> [source: those scenes, read] Auden called this song a magic spell,
> and this is the measure of those spells. [auden, with the page]
> [...] At **sea-change** two stresses fall together, which slows the
> voice on a word that was new. [plate; source: a handbook of verse;
> source: the dictionary]

Not good, because it only observes: "In the first line two beats go
unanswered and one stress falls between beats."

Not good, because it is made up. This sentence stood in the model until
the person this is for asked whether it was true. It was not: "The
disturbance is brief and ends in order, and that is the comfort offered
to a son about his drowned father." Nothing in the text says so, no
source says so, and Auden says the opposite.

Before you hand in, read "What the model itself got wrong" and "Sources
you can open from here" in `remake/EXAMINER.md`. Count every line that
an "all", "only", "alone" or "always" covers; say exactly what Auden's
words cover; take each gloss from an entry you have opened.

## Whose verse it is

Say whose craft a lens is showing. In Shakespeare, Jonson, Blake,
Melville, Adams it is the author's. In a verse translation (Morshead's
Aeschylus, Storr's Sophocles, Conington's Horace, Boswell's Racine,
Taylor's Goethe, the Archers' Ibsen, Longfellow's Dante, the opera
translations) the meter and rhyme are the translator's. Where the
author's own craft is the point (Dante's chained rhyme, Horace's word
order, Racine's twelve-syllable line, Goethe's shifting meters, Wagner's
alliteration, an Italian aria's verse), show the original and set the
hosted English beside it as the `pair`. Italian, Latin, French and
German originals are hosted or on hand (see pieces.json and
`node build/tools/original.mjs list`). The reader knows no other
language: every foreign word the caption leans on is glossed.

## The format of reading.json

The model is `remake/works/tempest/reading.json`. Fields:

    piece     the id from pieces.json
    title     the name of the piece: a few plain words ("Ariel's song")
    where     work and place ("The Tempest, Act 1, Scene 2")
    about     2 to 4 sentences: who speaks, to whom, what has just
              happened. No analysis.
    view      Auden's view of the work or the passage, which the piece
              is built to show: { "says": your paraphrase, at most 70
              words, "quote": at most 25 of his words (optional),
              "source": book, year, page, "checked": where you read it }.
              Or null, with "viewWhy", if he left nothing on this work.
    plates    one to three, each:
        id        a short name
        heading   optional, a few words
        text      "textId/partId" of the passage
        rows      what to show: ["225.0-225.6", "227.0-227.1"]. For prose,
                  part of a paragraph: ["12.0[35-80]"] is words 35 to 80.
        pair      optional second version shown beside the first:
                  { "label": "Longfellow", "text": "dante-longfellow/inf-05",
                    "rows": ["33.0-33.2"] }, and give the plate a "label"
                  for the first ("Dante"). Rows of the pair are named with
                  "p:" in front: "p:33.0".
        beside    optional, true: set the two versions as two blocks, each
                  under its own label, and not line under line. Use it when
                  the second is not a translation of the first but another
                  passage of equal standing (a speech and its answer), so
                  that each keeps its own order.
        turn      optional: where a long line of verse turns on a narrow
                  screen, if the place the page chooses reads badly:
                  { "49.0": 4 } turns row 49.0 after its word 4
        noText    true, with "noTextWhy", only for a work that cannot be
                  shown (The Family Reunion)
        lenses    two to four, each with "kind", "label" (one word shown on
                  the tab), "caption", "why", "grounds", and the fields
                  of its kind. "grounds" lists what the caption stands on:
                  [{ "claim": the claim in a few words,
                     "kind": "plate" | "text" | "source" | "auden",
                     "source": the dictionary entry, passage, book and
                               page (needed for "source" and "auden") }]
                  and "stands": the same grounds said in one to four
                  sentences for a reader (see the note below)
    auden     what else he said about the work or the passage, each:
              { "says": paraphrase in your words, "quote": at most 25 of
                his words (optional), "source": book, year, page,
                "checked": where you read it yourself }
    next      "textId/partId:block" where the reader should start reading
              the work itself
    sources   every source used, each entered as a reader would look
              it up
    caveats   at most five sentences a reader should have before
              trusting the page; [] if nothing
    open      what you could not verify, plainly, for the lead; [] if
              nothing

The page prints five of these for a reader, as they stand:
"view.source", each "auden[].source", "sources", each lens's "stands"
and "caveats". Write them as "The printed notes" in
`remake/EXAMINER.md` sets out: no file names, no block or row numbers,
no mention of this project's research notes or of how you worked; a
place in a book printed here is given as a link,
`[Act 3, Scene 1](#/read/hamlet/a3s1:46)`. Your working record (each
ground's "source", "checked", "open", notes.md) is not printed and can
be as exact as you like. Nothing printed, the captions included, calls
a part of the page a plate or a lens: say "the second passage", or
name it by its heading. The checker lists what is left under PRINTED
NOTES.

A word number is a whole number, or names one of two words that a dash
joins with no space: the checker lists such a word as `6:... [6.1 ...,
6.2 ...]`, and 6.1 is what stands before the dash, 6.2 what stands
after. Use the part wherever a mark means one of the two (a clause that
ends at the dash, a gloss on the word after it): `"w": [6.2, 6.2]`,
`"from": ["13.0", 365.2]`. A beat lens still marks the whole word as one
group.

### kind "beat"

    "meterName"  the pattern in plain words ("five beats, rising")
    "scan"       for each row scanned:
       "225.4": { "meter": "/x/x/x/", "voice": "x x /x x //" }

`meter` is the pattern the line is measured against, one mark a
syllable: `/` a beat, `x` an off-beat. `voice` is how the line is spoken,
one group for each word, one mark for each syllable of the word: `/`
stressed, `x` unstressed. (So "x x /x x //" is five words; the third has
two syllables, stressed then unstressed.) The plate draws the meter as a
rule and the voice as dots, and shows where they part. If the checker
says a word divides differently from your marks, give the division:
`"div": { "2": "suf|fer" }` (word number, then the word exactly as it
stands with `|` between syllables).

Other measures use the same two strings. Latin and Greek quantity: `-`
long, `u` short. For hosted Latin do not scan by hand and do not write a
line out to scan it: `node build/tools/latin.mjs` (its head says how)
divides the words by the Latin rules, finds the syllables that run into
the next word, tests the row against the pattern of its stanza, and
prints the row's `scan` entry in two forms: the voice by length, or the
voice as the stress of each word (`/` and `x`) over a meter of longs
and shorts, which shows a reader that the pattern is made of lengths
while the stresses fall where the words put them. French and Italian lines counted by syllables: `x` or
`.` for a counted syllable, `/` for the fixed accents, and `~` on a
syllable that is not counted because it is elided or runs into the next
word (`<` where it runs into the syllable before it: the arc is then
drawn back to that syllable). A pause inside the line is ` | ` set between two groups of
`voice`. You must scan every row you list; leave out rows you do not
want marked. Optional `points`: `[{ "at": ["225.0", 0, 2], "say": "..." }]`
pins a short remark to words 0 to 2 of a row.

### kind "rhyme"

    "ends"     { "225.0": "a", "225.1": "b", ... } the rhyme letter of each row
    "tails"    { "225.4": 4 } how many final letters of the row's last word
               carry the rhyme
    "threads"  sounds repeated inside lines:
               [{ "sound": "f", "at": [["225.0", 0, 0, 1], ...] }]
               each place is [row, word, first letter, how many letters]

### kind "figure"

    "name"    the term of rhetoric ("chiasmus", "anaphora", "antithesis",
              "hendiadys", "zeugma", "metaphor", "simile", "apostrophe",
              "stichomythia", "oxymoron", "periphrasis", "litotes" ...)
    "plain"   the term in plain words, at most 30
    "draw"    how the parts relate: "cross" (A B B A), "pair" (A against B),
              "align" (the same words stacked), "chain" (each links to the
              next), "map" (one thing said in terms of another), "list",
              "frame" (a speaker inside a speaker), or "other"
    "parts"   [{ "row": "225.1", "w": [2, 2], "tag": "A", "label": "the man" }]
              w is [first word, last word]; parts with the same tag belong
              together; label is optional and at most three words
    "join"    optional: which parts a stroke joins, where the usual way of
              "draw" would join the wrong ones. "none": underlines only.
              "within": the parts of each tag, each to the next.
              [["net", "catch"]]: the first part tagged net to the first
              tagged catch, the second to the second; where one of the two
              tags has a single part, it is joined to each of the other's.
              [[0, 3], [1, 4]]: two parts by their place in "parts",
              counted from 0. A stroke is drawn only between parts on one
              line or on two lines that follow each other; parts further
              apart are told by their color. A stroke says "these two
              belong together": join only what the caption says does.

One figure to a lens. A plate may have two figure lenses.

### kind "word"

    "notes"   [{ "row", "w": [a, b], "gloss": at most 6 words, set under
                 the word, "note": one sentence (optional), "source" }]

For the history of a word give the dictionary (the Oxford English
Dictionary's public pages, an etymological dictionary, Lewis and Short
for Latin, Littré for French, Grimm for German) and read the entry
yourself in this session.

### kind "sentence"

    "spans"   [{ "from": ["12.0", 35], "to": ["12.0", 52], "tag": "main",
                 "label": "the main clause" }]

for how a sentence is built: where its main clause is, what is hung on
it, where it runs over the line end, where the verb is kept back.

### kind "compare"

    "ties"    [{ "a": ["33.0", 2, 3], "b": ["p:33.0", 4, 4], "say": "..." }]

for a plate with a `pair`: which words answer which, and what the
translator kept, lost or added.

### kind "shape"

    "what"    the thing the diagram shows ("the hundred cantos",
              "who speaks verse and who speaks prose in this scene")
    "facts"   the names and numbers the diagram is drawn from, as data you
              have counted or looked up, with where each comes from.
              Where a number comes from goes under a key named
              "counted", "source", "where" or "note": those stay in
              the reading. Every other string in the facts may be
              printed by the drawing, so write it for a reader.

for the build of a scene, a book or the whole work. The artist draws it;
you supply what is true. Count things with the tools; do not estimate.

## Your answer to the lead

When you finish, answer in a few lines: the passages chosen, the lenses,
whether the checker is clean, and what is in `open`. Do not paste the
reading.

## The scans of Auden's own books

They are listed at the end of `remake/EXAMINER.md` ("The scans"), with
the rule for using them. Check there every sentence you attribute to
Auden; the page is in the running head nearest the passage.
