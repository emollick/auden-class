# Notes on the reading of *The Education of Henry Adams*

Piece `adams`. Three plates, eleven lenses. `node build/tools/check-reading.mjs adams`
ends with "no problems" and "no warnings" (run on 2026-10-03, after the last change).

## How the piece is built, and why it changed

A first draft was written before rule three was added to BRIEF.md and POET.md
(the files changed at 02:18 to 02:20 UTC while this session was at work). That
draft put the first sentence first and called the piece a life told as "he".
When the new rules were read, the reading was taken apart and rebuilt:

- `view` was added. It is Auden's judgment in "The Virgin & The Dynamo" (The
  Dyer's Hand, pp. 61-63), read in the scan at lines 3095-3194.
- The plates were put in the order in which they bear on that view: the dynamo
  chapter first (the prayer to the machine is the fact Auden's judgment turns
  on), then the sister's death thirty years earlier (a force of nature given a
  woman's face), then the first sentence and the shape of the book, which is
  also where `next` sends the reader.
- Every caption was gone through a sentence at a time and each lens was given
  `grounds`. Sentences that stood on nothing were cut. The chief ones cut:
  that a storyteller who says "he" may choose what to show while one who says
  "I" would be seen keeping it back; that a lesson "has to hold for anyone",
  so the learner is "one"; that the double senses of the words for Nature keep
  the passage's "even voice"; that the comfort spoken at funerals is "handed
  to Society as its dress"; that Adams "is parting power from its usual signs";
  that the habit of doubt "has already been met, in a verb"; and a remark that
  the Virgin is measured by "a thing no one yet understood".
- A word lens on the dynamo plate was dropped, because its reason repeated the
  compare lens. Its two best facts (the date and naming of X-rays; the Latin
  root of sentiment) went into two ties of the compare lens. In its place is a
  shape lens that counts the word force through the book.

No lens is of kind `beat` or `rhyme`: the work is prose, and there was no
scansion to be unsure of.

The role files changed a second time at 02:51 UTC ("What the model itself got
wrong" in EXAMINER.md). The reading was gone through once more against its
five faults:

- General statements. Every "only", "never", "first", "once" and "every" in a
  caption was counted against the proof or the text. Changed as a result:
  "three abstract nouns do the acting" became "are given deeds to do" (the
  commonplaces and the horror also have verbs); "the frame shows what
  differs: a prefix, and the verbs" now names the subjects too; "religion was
  never real to him" became "was not real" (the text speaks of the boy); "the
  rise begins in this chapter" became "the jump comes in this chapter"
  (chapter 22 already has the word ten times); "the book has Adams pray"
  became "the book says pray of Adams". Left standing after counting: runs is
  the only present tense in the first sentence (its finite verbs are runs,
  ran, was born, christened); the man's verbs in the second plate are all of
  taking in (heard, read, seen, knew, felt, seen); ten proper names stand
  before his own; winning in the sense charming comes twice in the book.
- What Auden's words cover. "Tend to" was restored in the sentence about
  faces put on powers. "Adams's Venus" became "Venus", since Auden's sentence
  is about Venus and is said against Adams. "The count bears out Auden's
  reading" became "fits": a count of a word cannot prove worship.
- Glosses. Each was read again in the entry itself (see the lists below).
- Paraphrase and grammar. "Could hardly have been more distinctly branded"
  dropped the condition the sentence hangs on (had he been born elsewhere),
  so the caption now says only that the paragraph speaks of the child as
  branded.
- Page numbers. In the scan of The Dyer's Hand the running head stands at the
  top of its page. The head of p. 62 is at line 3126 and that of p. 63 at
  line 3175, so the two real worlds are on pp. 61-62, the two illusions and
  the paragraph on faces on p. 62, and the judgment on Adams on p. 63. In
  "American Poetry" the heads of pp. 358 and 359 are at lines 16841 and
  16885: the paragraph on European nature begins on p. 357, the quotation
  from Adams runs from p. 358 to p. 359, and Auden's reason is on p. 359.

## Plate 1, `dynamo`: adams/c25, block 2, words 101-204, with block 8, words 64-105 beside it

Why this passage. It is the centre of the chapter Auden answered, and it holds
the sentence in which Adams says he began to pray to the machine. The passage
set beside it is the one Auden himself copied out twice (in the notes to New
Year Letter in 1941, and in "American Poetry", The Dyer's Hand, pp. 358-59).
The two stand six paragraphs apart in one chapter and use the same two words,
force and felt, so they can be compared word against word.

Other passages weighed for this plate: block 5 (the long sentence on the
sequences of history that ends with the historian on the floor of the Gallery
of Machines), which is famous but shows nothing of the Virgin; block 13 (he
turns from the Virgin to the Dynamo), which states the comparison and so
leaves less to see; block 9 (the goddess called the animated dynamo), which is
cited in the grounds.

Word numbers. Three tokens in these rows are two words joined by a dash in the
hosted text and count as one word each: word 158 and word 171 of row 2.0, and
word 93 of row p:8.0. The spans and ties were set with that in mind; the proof
shows each mark on the word intended.

Where each fact was read:

- The simile and the prayer: on the plate. What a simile is: Silva Rhetoricae,
  simile (fetched in this session).
- The boy who prays and to whom religion was never real: adams/c02, block 19.
- "The book says pray of Adams only one other time": every pray, prayed,
  prayer and praying in the hosted text was listed by script and read. There
  are seven places. Adams is the subject of the verb in two: c02 block 19 and
  c25 block 2. The others are the phrase "attitude of prayer" (c07 block 16,
  c09 block 23), a quoted speech (c32 block 2), the donors in the glass
  (c32 block 15) and the soldiers of Saint Louis (c33 block 20). Note for the
  examiner: in c32 block 15 Adams imagines "the student" kneeling before the
  Virgin's window in an empty faith; the verb pray is not used, and the
  caption claims only what the count shows.
- The dynamo's value lying in its hidden mechanism, and the fiat in
  electricity as in faith: adams/c25, block 3. The senses of occult and fiat:
  Online Etymology Dictionary (fetched in this session).
- The one measure, and "translating rays into faith": adams/c25, block 7.
- Adams treating Venus and the Virgin as one force: adams/c25, blocks 8, 9,
  11 and 19 (and c32, block 13).
- X-rays named in 1895 with the X of algebra; sentiment from Latin sentire:
  Online Etymology Dictionary, X-ray and sentiment (fetched in this session).
- The count of force. A script went over every paragraph, verse and block
  quotation of the hosted text and counted the word-forms force and forces
  (regular expression `\bforces?\b`, capital or small). Forced, forcing and
  enforce are not counted; the verb "to force" is. Totals: 2 in the two
  prefaces, 58 in chapters 1 to 20, 272 in chapters 21 to 35, 332 in all.
  Cut at the dynamo chapter instead: 78 in chapters 1 to 24 (131,569 words,
  5.9 in every ten thousand) and 252 in chapters 25 to 35 (42,794 words,
  58.9 in every ten thousand). The sums of the chapter rows were checked
  against these totals by script.
  The same pass counted Virgin (37), dynamo or dynamos (24) and Venus (9).
  Chapter word counts are the `words` of site/data/texts/adams/index.json.
- The theory in which forces capture man: adams/c33, block 1.

## Plate 2, `sister`: adams/c19, block 9, words 0-95

Why this passage. It is the best-known page of the first half of the book, and
in ninety-six words it has four things that can be seen: abstract nouns that do
all the acting, a matched pair of sentences, Nature turned into a woman, and
a run of words with two senses. It also bears on Auden's view. Thirty years
before the dynamo, Adams puts a woman's face on a force of nature, and in the
next paragraph he calls what he saw an insanity of force and denies that God
can be a Person.

The plate stops at word 95. The paragraph runs on for another hundred words
(the Tuscan summer, the sick-room); the hosted text there has the plural
"women" at word 154, where the sense of the next sentence points to one
woman. I did not check a printed copy. It is one more reason to stop early.

Other passages weighed: c19 block 8 (the telegram and the ten days), which
tells the facts but has less to show; c19 block 10 (the collapse of the
"stage-scenery"), which is cited in the grounds; c21 block 24 (the visit to
the bronze figure at Rock Creek), which is about the wife the book never
names and would have needed facts from outside the text to be read at all.

Where each fact was read:

- Who acts and who takes in, and what the man is called: on the plate.
- One as the pronoun for anyone, and as a stand-in for a first-person
  pronoun: Merriam-Webster, one (pronoun), senses 2a and 2b (fetched).
- "The last lesson": adams/c19, block 8.
- Antithesis: Silva Rhetoricae, antithesis (fetched).
- Saint Paul's phrase: King James Bible, 1 Corinthians 15:53 (biblehub.com).
  The chapter as the lesson at burials: The Book of Common Prayer (1662), The
  Order for the Burial of the Dead, rubric before the lesson (fetched). The
  American prayer books of Adams's day were not opened; see `open`.
- The usual comforts become "evident artifice", the "insanity of force", and
  God not a Person: adams/c19, block 10.
- Personification: Silva Rhetoricae, personification (fetched). Its wording
  has "as though"; the plain gloss in the reading avoids that phrase.
- Auden on faces put on powers: The Dyer's Hand, p. 62 (scan lines 3158-3170).
  Auden on Venus as a disguise: p. 63 (scan lines 3189-3194).
- Word histories: Online Etymology Dictionary, feature, charm, smother,
  victim, winning (each fetched twice in this session, the second time to
  check the dates); Merriam-Webster, smother.
- Winning used of the Virgin: adams/c32, block 18. All five uses of the word
  in the book were listed by script; three are of winning stakes, ground or a
  game (c22 block 8, c23 block 9, c24 block 0), and the two in the sense
  charming are c19 block 9 and c32 block 18.

## Plate 3, `born`: adams/c01, block 0 (the whole first sentence)

Why this passage. It is the door of the book and the first lead in
pieces.json (the life written as "he"). One sentence of eighty-two words shows
the method: place, church and creed come first, the child arrives at word 56
in the passive, and his name is the last thing said. The next paragraph says
in plain words what the names are doing, so the reason for the order stands
on the text.

Not used: the comparison in the next paragraph between the child's christening
and a birth in Jerusalem. It would have made a pair for the plate, but the
caption can cite the paragraph without setting that sentence large, and the
sentence needs more care than a caption has room for.

Where each fact was read:

- The order of the sentence, the passives, the ten proper names (eight before
  the child, two more before his own name): on the plate.
- The names listed again as a nest of associations crowding on the baby, and
  the child branded: adams/c01, block 1. Five names recur: the First Church,
  the Boston State House, Beacon Hill, John Hancock, Mount Vernon Street.
- Correctio: Silva Rhetoricae, correctio (fetched).
- Written in 1905, privately printed, published 1918: adams/editors-preface,
  blocks 0, 5 and 7; Encyclopaedia Britannica, "Henry Adams" (fetched).
- Hancock Avenue. Wikipedia, "Hancock Manor" (fetched): the marble extension
  of the State House to the west, in 1916, did away with Hancock Avenue, a
  footway between Beacon and Mount Vernon streets. A local-history page
  (buildingsofnewengland.com, on the Brewer and Beebe houses) says the State
  House extension took the neighboring houses in 1916 and they were razed by
  1917. So the street still ran when Adams wrote in 1905 and was gone before
  the book was published. No primary record was seen; see `open`.
- The list of qualities that begins with the habit of doubt: adams/c01,
  block 6.
- The manikin, and the young man as a form of energy: adams/preface, blocks 3
  to 5.
- The gap. Chapter 20 is dated 1871 and chapter 21 is dated 1892 in their
  titles; no chapter is dated between. What the book says of the gap:
  adams/c21, blocks 0 and 1.
- The first person. A script walked every paragraph and tracked double
  quotation marks. The word I comes 94 times: 64 inside quotation marks, 20 in
  block quotations (letters and memoirs of others), and 10 that are numerals
  or street names (kings and emperors numbered I, I Street, one volume
  number). Me, my, myself and mine: 35 inside quotation marks, 14 in block
  quotations and quoted verse, none in the storyteller's own sentences. The
  64 and the 35 were listed and read; all are speech or quoted writing,
  including Adams's own words when he is quoted as a character.
- "Henry Adams" in full: 103 times in the thirty-five chapters.
- The marriage and the death: Encyclopaedia Britannica, "Henry Adams" (his
  wife of thirteen years, Marian Hooper, killed herself in 1885); Wikipedia,
  "Marian Hooper Adams" (married 27 June 1872; died 6 December 1885) and "The
  Education of Henry Adams" (the book leaves both out). The hosted text was
  searched for wife, wives, married, marriage, marry, widow, bride, husband,
  wedding, honeymoon, suicide, Hooper, Marian and Clover: sixty places, each
  read with its context, none about Adams's own wife.

## Auden

- Everything in `view` and in the first three entries of `auden` was read in
  the scan of The Dyer's Hand in this session: "The Virgin & The Dynamo",
  lines 3095-3194 (pp. 61-63), and "American Poetry", lines 16827-16898
  (pp. 357-59).
- The piece quotes Auden twice and no more: nine words in `view`, eight words
  in the first `auden` entry. Captions, ties and grounds give him in
  paraphrase.
- Care taken not to go beyond him. He says three things of Adams: that Adams
  took Venus and the Virgin of Chartres for the same person; that Venus is the
  Dynamo in disguise, a sign for impersonal natural force; and that it was
  the Dynamo Adams worshiped, his liking for Chartres over Chicago being
  aestheticism. His remarks about faces put on powers, and about the two
  illusions, are general, and the reading gives them as general. The reading
  does not say that Auden called Adams's theory of history "mechanized
  history" or the storyteller's "he" an example of anything: he did not.
- In the scan, on p. 62, the words a person wishes to say run "someone else,
  stranger than I"; this is probably the scanner's misreading of "stronger".
  The paraphrase leaves the adjective out. On p. 63 the scan prints "Adam's".
- From 1941 itself there is only the bare quotation in the notes to New Year
  Letter, which I did not see; it is given from the research notes, and said
  so in `checked` and in `open`.

## Looked for and not found

- Anything Auden said about this book in the classroom: nothing in
  remake/research/C_auden_on_works.md section 20, and no mention of Adams in
  the scan of Pearce's memoir, in Forewords and Afterwords or in The Enchafed
  Flood (all four scans searched for "Adams").
- Whose hand wrote "Omit" beside the title on the reading list.
- A primary record of the closing of Hancock Avenue.
- Any place in the book where Adams names his wife or his marriage.

## Warnings

The checker gives none. Two things it cannot see are answered here: the three
dash-joined tokens named above, and the fact that the pair on the first plate
is a second passage of the same text and not a translation (the `compare`
lens ties two passages of one chapter, as POET.md allows for a plate with a
`pair`).

## Taken out of the list of what Auden said

(The critic, 3 October 2026.)

One sentence, the last of the fourth entry under "More from Auden"
(`auden[3]`), with the part of the entry's source and record that went
with it. It names Adams in passing, in a piece of 1946 on another
subject; it bears on no passage shown and was not said in 1941. The rest
of the entry stays in the list. True as far as it was checked, and kept
here in case it is wanted.

- **says** (the sentence taken out): In 1946 he named Adams in a list of
  important American writers of the past.
- **quote**: none.
- **source** (the part taken out of `auden[3].source`): The Complete
  Works of W. H. Auden: Prose, Volume II, 1939–1948, ed. Edward
  Mendelson (Princeton, 2002), pp. 280–81
- **checked** (the part taken out of `auden[3].checked`, with what
  exam.md, section 4, says of it): seen by the examiner only in a
  full-text search snippet of the scanned copy at archive.org
  (prosetravelbooks0000aude; the item is this volume, whatever its
  catalog title says: its title page reads Volume II, 1939-1948).
  Running head "ESSAYS AND REVIEWS 1946 281"; the list runs over
  pp. 280-81. No full page was seen. The research notes have the same
  (C_auden_on_works.md, section 20 and its appendix).

Taken out with it, since nothing else on the page uses them:

- from `sources`, the fourth entry: "W. H. Auden, *Prose, Volume II:
  1939–1948*, ed. Edward Mendelson (Princeton: Princeton University
  Press, 2002), pp. 280–81. Not seen in full: read in a search snippet
  of a scanned copy."
- from the first of the `caveats`, the words "and his list of 1946"
  (the caveat had "Auden’s note of 1941, the list of sources in *The
  Double Man* and his list of 1946 were read only ..."; it now has
  "Auden’s note of 1941 and the list of sources in *The Double Man*
  were read only ...").

Not changed: the second entry of `open` still speaks of the 1946 list.
`open` is the lead's.

## The finisher's changes after the critic (3 October 2026, 13:01 UTC)

The last hand on the piece, after `critic.md`. Begun 12:36, by `date -u`.
Words of the book are pointed at by place; nothing of Auden's is quoted.
"Was" and "now" are the site's own sentences.

In short: 14 points set, 15 left as they are, 6 passed up. The checker
ends with no problems, no warnings, and the printed notes fit to print.
The permission system refused nothing.

### What was opened in this run

- The text printed here, with `build/tools/show.mjs`: the author's
  preface (blocks 0 to 6); the editor's preface (blocks 0 to 7);
  chapter 25, blocks 2 to 9; chapter 19, blocks 8 to 10; chapter 32,
  blocks 16 to 18, and every place with the adjective of the Word tab
  (five: c19 b9, c22 b8, c23 b9, c24 b0, c32 b18); chapter 1, blocks 0
  and 1; chapter 21, blocks 0 and 1. With `words.mjs`: chapter 25,
  block 8 (106 words, so words 64 to 105 are its end).
- The scan of *The Dyer's Hand* (`research/auden/dh.txt`): lines 3090
  to 3200, which are pp. 61 to 63 (the head of p. 62 is line 3126, of
  p. 63 line 3175), and lines 16822 to 16900, pp. 357 to 359 (heads at
  16841 and 16885).
- `build/tools/runs.py` against that scan, on the view, on all five
  entries under "More from Auden", and on every caption with its
  numbered remarks; and at the end the same test, by its method, over
  every printed sentence of the reading as it is left.

### Set

1. **born / Book, the caption's third sentence** (the critic's first
   doubt). Was: "The preface gives the reason." The preface says what
   has become of the self since Rousseau and what the tailor's figure
   is for. It never says that this is why the book says *he*: that step
   was the caption's, given as the preface's. Now: the sentence is cut,
   and the next one names its speaker ("Since Rousseau, the preface
   says, the self has drawn back ..."). The caption sets the preface's
   own account straight after the counts and concludes nothing. `why`:
   "so Adams is he throughout" is now "and Adams is he throughout".
   Ground: the author's preface, blocks 3 to 5. Block 3 has the Ego
   tending to efface itself since Rousseau and to become, as a model, a
   figure for showing whether the dress of education fits, and says
   that the dress is what is studied; block 4 has the five italic words
   of the caption. Neither speaks of the pronoun. The caption is 116
   words.
2. **sister / Word, the caption's last sentence** (the second doubt).
   Was: "Auden says Adams took the Virgin and Venus for the same
   person." It stood straight after the adjective that these lines use
   of Nature and chapter 32 uses of the Virgin, and so read as if the
   adjective proved it. Nature in chapter 19 is not Venus, and Auden's
   sentence (p. 63, scan lines 3189 to 3194) is about Adams, Venus and
   the Virgin of Chartres, with no word on this chapter or this
   adjective. Now: cut. The caption ends on chapter 32, in the book's
   own four words. Taken out with it: the `grounds` item of kind
   `auden` (p. 63) and the last clause of the folded note. Nothing is
   lost to the page: the same statement of Auden's stands at the head
   and in the first numbered remark of Level. Ground for what stays:
   chapter 32, blocks 17 and 18, read; the five places counted again.
   The caption is 105 words.
3. **dynamo / Level, the caption's third sentence** (the third doubt).
   Was: "So the machine is likened to the Cross and the Virgin's force
   to X-rays." Now: "The machine is likened to the Cross, and the
   Virgin's force to X-rays." The first likeness is in block 2 of
   chapter 25, the reason in block 7, the second likeness in block 8,
   so the opening word made the reason the cause of a likeness drawn
   five paragraphs before it. Without it the sentence says what the
   marks show. The comma is new, so that the two likenesses read as
   two. `why`: "because he measures both" is now "and measures both".
4. **The view, third sentence** (the sixth doubt). Was: "Praying to the
   first is the religion of an illusion." The reader had not been told
   which illusion. Now: "Treating the first as the second is an
   illusion; its religion prays to the Dynamo." Ground: *The Dyer's
   Hand*, p. 62, scan lines 3138 to 3143: the first of his two
   chimerical worlds is made by the illusion that looks on the world of
   masses as a world of faces, and the sentence the first entry quotes
   gives that illusion's religion. The new sentence shares no run of
   four words with the scan. Written into `view.checked`. The view is
   now 75 words, which is the limit.
5. **Under "The passages", first sentence** (the seventh doubt). Was:
   "... in 1905, at sixty-seven, and had a hundred copies printed
   privately." It read as printed in 1905. Now: "... and by 1907 had a
   hundred copies printed privately." Ground: the editor's preface,
   block 0 (written in 1905; a hundred copies privately printed in
   1906) and block 5 (published as it was printed in 1907); the
   author's preface is dated February 1907 (block 6). "By 1907" is true
   of all three. 89 words.
6. **The Book drawing, the second red line** (critic, section 7, script
   line 97). The script turns the colon after the year into a full
   stop, so the line began with a small letter after a full stop.
   Mended by the string, as the lead set out:
   `facts.theGap.outsideTheBook[1]` now has a capital after the year.
   It prints "1885. She takes her own life", under "1872. Adams marries
   Marian Hooper". Line 97 is as it was. That the string is printed
   nowhere else: a search of `site/` and `build/` finds one reader,
   script lines 92 to 97; the kit's plain table of facts
   (`lens-shape.js`) stands only where a piece has no drawing of its
   own, and a capital after the colon is right there too.
7. **Script line 55, the key of Force.** Was: "the other chapters, by
   number". Now: "the other chapters". The tail spoke of the row of
   numbers under the bars, which shows itself (critic, section 7;
   artist, 1a, fault 7).
8. **Script line 110, the key of Book.** Was: "a chapter, laid along
   the years in its title". Now: "a chapter, drawn across the years in
   its title". The critic called the old wording a little mannered and
   named the artist's as plainer. The artist's stands in
   `adams-proposed.js`, which is not to be copied in whole or in part,
   so these are my words, for the drawing as it stands.
   Of 7 and 8: strings only, by `edit-exact.py`. `node --check` passes,
   and a diff against the copy kept (`finisher/adams.before.js`) shows
   lines 55 and 110 and nothing else. The comment at line 4, which is
   not printed, still has the old two words.
9. **"More from Auden", entry 1: runs of five words shared with his
   text, in two sentences.** FINISHER.md, rule 2, allows no run of five
   outside a quotation; the examiner had tested for seven. `runs.py`
   found five such runs in three entries, three of them here. Both
   sentences on the illusions had "treats the world of ... as a world
   of ...". Now: "takes the world of masses for a world of faces" and
   "takes the world of faces for one of masses". Nothing claimed has
   changed (p. 62, lines 3138 to 3149).
10. **Entry 2: one run.** "The pagan gods of nature" is now "The pagan
    nature gods" (p. 62, lines 3167 to 3169).
11. **Entry 3: one run.** "was on the whole friendly" is now "was
    friendly on the whole" (p. 357, lines 16827 to 16830).
    After 9 to 11 the longest run that any printed sentence shares
    with the scan is four words (the view, the lines under "The
    passages", the five entries, every caption, remark, word note and
    caveat, tested again on the reading as it is left). The runs of
    four are his terms for the two worlds, names, and common phrases.
12. **`open`, the second entry** (critic, section 8). It still spoke of
    the list of 1946. Now it speaks of the note of 1941 and the list of
    sources only, and says where the sentence on 1946 is kept (the
    section above this one).
13. **`open`, the rest.** The entry on the book's three dates says what
    the page now prints. The entry on the hosted text also says that it
    spells the title of chapter 27 without its umlaut and was not
    compared with the Modern Library edition (exam.md, section 12). A
    new last entry names the six things passed up below (four at
    first; the other two added at 13:12). Eleven entries.
14. **The critic's change that was in no picture** (sister / Nature,
    change 6b). Photographed at both widths and read: the one word that
    replaced five is there, and the caption fits its place.

### The critic's changes that went past wording, tested (rule 9)

All kept.

- 6b, the one word for a God who cannot be thought of: chapter 19,
  block 10, says that such an idea cannot be held at all.
- 8 and 9, the avenue's name for "the passage": the name is in the
  lines shown (chapter 1, block 0).
- 11, "It calls the young man": the preface says it, in block 4.
- 12, the Latin verb: the lens's own ground has it.
- 14, "for anyone" where Auden has a first person plural: a paraphrase,
  and the house style has no "us" (p. 63, lines 3177 to 3180).
- 15 and 16, entry 3: he does give the reason for what Adams could
  write, and the two causes are his (p. 359, lines 16895 to 16898).
- 17, entry 4: the sentences under The Virgin are the end of their
  paragraph (words 64 to 105 of 106).
- The word written in the margin, set in italic in entry 5: a word
  named as a word, and the second caveat already had it so.

### Left as they are

1. **dynamo / Force, "Force is Auden's word too"** (the fourth doubt).
   True at p. 63, scan line 3191: the word stands in his sentence on
   Adams, in the phrase the caption goes on to give. The sentence
   claims only that he uses it.
2. **dynamo / Likeness, the short last sentence** (the fifth doubt).
   The lines shown do report the prayer (chapter 25, block 2), and this
   is where the passage meets Auden's verdict. It draws no moral.
3. **born / Book, the short last sentence** (the fifth doubt). A fact
   the search bears out (59 places, none about his own marriage).
4. **dynamo / Level, remark 5, first sentence** (the eighth doubt). It
   says what the mark on the left stands on, the last four words of
   the passage, and the second sentence needs it for its contrast.
5. **"More from Auden", entry 1, its opening** (the ninth doubt). Which
   essay is said at the head of the page and in the source line under
   the entry.
6. **Force and Nature end on the same eight words.** Both give one
   phrase of Auden's (p. 63, line 3191). To vary one for the sake of
   variety would move it away from what he wrote, and the two tabs
   belong to different passages.
7. **The verdict on the Dynamo comes at the head, in Likeness and in
   Force.** Each tab has to stand alone, and each meets the verdict
   with a different thing in the lines. With the cut in Word, his
   statement on Venus and the Virgin now comes twice, not three times.
8. **"The next paragraph says"**: five remain, in four captions. It is
   the method: rule two sends a caption to the book's own word.
9. **The key label "the hinge"** (Likeness): the caption and the line
   under the figure's name both say which word it is.
10. **"the Book of Common Prayer"**, roman in the Pair caption and its
    folded note, italic in `sources`: prayer books are commonly set in
    roman in a sentence, and `sources` cites an edition.
11. **The lists of headwords in `sources`**, bare: as other pieces
    print them.
12. **The facts the script does not read** (`chapters1to24`,
    `chapters25to35`, the three `read` places, `wife`, and others):
    nothing prints them, they are the record of the counts, and a
    drawing could link the three places. No harm in them.
13. **A link from the caption's word for the tailor's figure** to the
    preface (artist, part 4, 11): the folded note links the preface.
14. **The examiner's seven doubts** (exam.md, section 12): none changes
    a sentence. Two are caveats on the page. For the noun that can be
    read two ways, the gloss and the caption give both senses. For the
    amended verb, the caption says only that both tenses stand. The
    year the house came down, the dictionaries used and the edition not
    compared are in `open`, the last put there by me.
15. **The comment at script line 4**: not printed.

### For the lead

Passed up, worst first.

1. **The two flags of the Force drawing (script line 51).** Where the
   drawing is 520 px wide or less they are the bare figures 42 and 71;
   on a wide screen a title, a comma and a figure. The caption speaks
   of chapter 33, and the row under the bars numbers only 1, 5, 10 and
   so on. What I would have them print: narrow, "chapter 25: 42 times"
   and "chapter 33: 71 times"; wide, "Chapter 25, The Dynamo and the
   Virgin: 42 times" and "Chapter 33, A Dynamic Theory of History: 71
   times". In the script's terms: `chapter ${c[0]}: ${c[4]} times` and
   `Chapter ${c[0]}, ${c[1]}: ${c[4]} times`, and the narrow flag would
   then want the italic class too. Reckoned and not drawn, from the
   script's own numbers and from the present flag in the picture at
   1280 (163 px for its 31 characters): the narrow flag would be about
   105 px long and start some 75 px in (chapter 25) and 130 px in
   (chapter 33) in the narrowest drawing, 264 px wide; the wide one
   would be about 250 px long and start 120 px in or more; no bar to
   the left of either reaches its height (10 against 42, and 42 against
   71).
2. **Four words named as words, in two lines the kit sets as bare
   type** (critic, section 4). The kit's scripts are as they were at
   11:05:49, so the reading is unchanged. When `what` and `plain` are set as the notes
   are, the strings want to be, for Force, `what`:
   `How often the word *force*, or *forces*, comes in each of the thirty-five chapters`
   and for Likeness, `plain`:
   `a likeness stated outright, often with *as* or *like*`.
   Two things for whoever mends the kit: the
   drawing's `aria-label` is made from the same `what`
   (`kit/diagram.js`, the line that makes the svg), so the asterisks
   would be read out unless they are taken off there; and a key's
   labels are bare type too, where three more named words stand:
   *one* and *man* (Likeness, parts 7 and 10) and *being* (Pair, parts
   2 and 3).
3. **The blue row of the Order key** reads as if the passage were the
   second subject. The comma is the kit's join in a sentence lens's key
   (artist, A1). If the kit keeps that comma, cut the last two words of
   `plates[2].lenses[0].spans[1].label`: the caption's second sentence
   says them. I left the label, since under another join it is sound
   and tells more.
4. **The tab "Level"** (critic, section 6; artist, part 4, 8): its word
   does not say what the tab shows, and the caption never uses it. A
   tab's label is not mine. If another is wanted, "Felt" is the word
   the two passages share and the measure Adams names between them,
   and it would stand beside the tab "Force".
5. **Two numbers of the Force caption are not in its drawing**: the
   lengths of the two stretches in words (artist, 1a, fault 2). They
   are in `facts` (`chapters1to20.words`, `chapters21to35.words`). A
   matter of the drawing.
6. **The hosted text spells the title of chapter 27 without its
   umlaut**, in the title and five times in the chapter. The Force
   facts follow it, and the title is printed when that bar is pointed
   at. If the hosted text is mended, `facts.chapters[26][1]` wants the
   same.

To know, not to do:

- The view is at 75 words. POET.md asks for 70 at most; FINISHER.md
  and the checker allow 75.
- `adams-proposed.js` was read, to know its strings, and nothing was
  taken from it or drawn to match it. The cut at line 55 leaves the
  lead's own first three words, which happen to be what the proposed
  file prints for that key. If that file is ever allowed, it prints
  the words of `outsideTheBook` after the year, and the capital suits
  it too.

### The checker and the pictures

`node build/tools/check-reading.mjs adams --print`, run after the last
change to anything printed (12:58:52), and again at 13:06, 13:10 and
13:12 with the same output to the letter, the last after one late edit
to the `open` list (13:12:22), ends:

```
no problems
no warnings
the printed notes are fit to print
```

It gave no warning at any point (run after each batch of edits; the
outputs are in `finisher/`, the last as `check-final.txt`). Another
hand changed the checker itself at 13:04; the three later runs are
after that. Built at 12:59 and, after the late edit, at 13:12: the
built page is the same to the byte, since the `open` list is not
carried into it, so the pictures stand. The printed words went from
3,558 to 3,540.

Pictures, all in `shots/finisher/`, each opened and read: sister,
"Nature" and "Word"; dynamo, "Level" and "Force"; born, "Book" (the 2
and 3 in the file names are the tool's, which counts tabs from 0);
each at 1280 and 390, one tab to a run; and the
page in slices (five at 1280, seven at 390), taken at 12:57:59, after
the last change to anything printed. Every run of the picture tool
ended "nothing reported". In them: each changed caption reads as given
above and fits its place; the second red line of Book begins with a
capital; the two keys read as in 7 and 8, each on one line at 390; the
head shows the new sentences under "The passages" and "What Auden
said"; the list shows entries 1 to 3 as reworded. The folded notes
cannot be opened by the picture tool: the folded note of Word was read
in the built page and in `review/remake/prose/adams.md`. Before any
change I also opened the critic's pictures of Book, Force (both
widths), Level, Word, Order and the head of the page.

Written by me: `reading.json` (21 exact edits in four batches) and
`site/js/pieces/adams.js` (2), with `build/tools/edit-exact.py`; this
section; `finisher/` (the edit lists, the copies kept, a word counter,
the checker's outputs, a log); `shots/finisher/`. The build and the
prose tool wrote their own files. Nothing was installed, published,
uploaded, pushed or sent, and no other agent was started.

Two slips, both mended. For the test of shared runs I wrote fourteen
small files of the site's own printed sentences into the session's
scratch folder, which is outside the places I may write; and at 13:10
I sent one run of the checker's output to a file there. All fifteen
are removed, and none is left.

After the last change I read the whole page again in
`review/remake/prose/adams.md` (3,540 words), and opened two more
places for captions I had not changed: chapter 2, block 19 (Likeness:
the boy, the religion that was not real to him, the instinct that had
vanished) and chapter 33, blocks 0 and 1 (Force: the italic phrase and
the theory). Both hold. I did not go through the other unchanged
captions against the text again: that was the examiner's work
(`exam.md`).

Finished 13:14 UTC, by `date -u`.

## The lead after the finisher (3 October 2026, 13:17 UTC)

Read: the finisher's result and record. Looked at: the third tab of the
first passage at 1280 and the Force drawing at 390 (`shots/finisher/`).

- **Accepted as it stands**, with one change of my own.
- **The third tab of the first passage is now called "Felt"** and no
  longer "Level", as the finisher proposed: it is the word the two
  passages share and the measure Adams names between them, and the
  caption has it in bold. The copy before is `lead/before.json`.
- **The two flags of the Force drawing** print bare figures on a phone.
  With the drawing's title over them and the caption's "42 times" under
  them they can be read. Left, and nothing of the artist's redrawing is
  taken: that file stays as it is until the person the site is for
  says.
- The title of chapter 27 keeps the spelling of the text printed here.
- For the kit, sent to the eighth mending: words named as words in a
  drawing's title, in a figure's plain line and in key labels.
- Every printed paragraph was tested against the four scans: one run
  of five small words is left.
- The checker: no problems, no warnings, fit to print. The piece is
  through every stage.

## The lead in the last pass (3 October, 16:31 UTC)

**One phrase loosened.** Mendelson's biography went to `runs-sweep.py` as
a fifth scan. Five words of the last clause of the second entry of the
list stood inside a quotation of Auden's there, so the clause is said
again: nature "is seen to be a world of masses, responsible for no
one". His four-word term stays; nothing is claimed that was not
claimed. The run in `about` is small words in an unrelated passage and
stands. The edit is `lead/edits-grams.json`, the reading before
`lead/before-grams.json`. Checker: no problems, no warnings, fit to
print. Built. The sweep finds no run in the entry now.

## The lead in the last pass: one wording for each figure (3 October, 19:55 UTC)

Each Figure tab says in one line under the figure’s name what the figure is. Laid side by
side, the 82 tabs gave the 17 figures that stand on more than one page a different line
on nearly every page. Each figure now has one line, with a tab’s own tail after “; here”;
anaphora, epistrophe, anadiplosis, parallelism and asyndeton keep one sentence whose number
and unit are fitted to the passage. No name, mark, caption or claim changed in this step.
Why and how: `review/remake/last-pass/RECORD.md`, “One wording for each figure”; the table
of lines is `review/remake/last-pass/figures/lead/lead_lists.py`.

Lines changed here (2):

- `plates[0].lenses[0].plain`, the plate `dynamo`, the tab Likeness (simile):
  was “a likeness stated outright, often with as or like”;
  now “a comparison that says one thing is like another”.
- `plates[1].lenses[1].plain`, the plate `sister`, the tab Pair (antithesis):
  was “opposed words or ideas set side by side, often in matching frames”;
  now “two opposed things set side by side, often in phrases of the same build”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.

## The lead after the word critic of the last pass (4 October, 00:08 UTC)

A critic read the lines written after the pieces' critics had read: the
figures' lines, the measures and the front page's cards. Its report is
`review/remake/critics/last-pass-words.md`; what the lead did with each
point is in `review/remake/last-pass/RECORD.md`. In this reading, exact
edits, each proved to change only the leaf it names (the file before is
`lead/before-last-pass-words.json`):

- `being with an adjective`
  became `*being* with an adjective` (2 labels)
- `who prays: one, and then man`
  became `who prays: *one*, and then *man*` (2 labels)

The checker says what it said before.

## The lead, 4 October, 21:10 to 23:20 UTC: the two drawings redrawn

The owner said yes on 4 October (21:02 UTC) to the two diagrams the
artist had proposed. `site/js/pieces/adams.js` is `adams-proposed.js`,
and the two files are kept the same. The reading is untouched.

After the last readers (`review/phone/critic-words-2.md`, X2 and X3;
`review/phone/critic-draw-2.md`, faults 1 and 5), in the script:

- the line a touched bar of Force speaks says "twice" for two, and
  keeps "not once" and each count with its word on one line;
- the line a touched bar of Book speaks has the same shape as Force's:
  the chapter, its years in brackets, then the words;
- the label over the band stands 2 px higher, clear of the band.

At 320 px the two chapters beside the band keep their numbers alone.
A title without its year, straight over the note on the marriage,
could be read as a remark on it; the year is what marks it as a title.

The table under Force lost its last column at 320 px; that was the
stylesheet's (less paper between columns on a narrow plate), not the
script's. Copy of the script before: `lead/adams-script-before-last-readers.js`.
Record: `review/phone/RECORD.md`.
