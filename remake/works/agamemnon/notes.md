# Agamemnon: the poet's notes

Piece `agamemnon`. Text shown: E. D. A. Morshead's verse translation (1881),
hosted as `agamemnon`, parts p1 to p6. The reading has three plates and ten
lenses. `node build/tools/check-reading.mjs agamemnon` ends with "no problems"
and "no warnings".

The lines of the play are never copied here. Places are given as part, block
and row, and words by their number in the row, as the tools print them.

## The view the piece is built on

Auden's fullest statement about this play is one paragraph of "The Greeks and
Us" (Forewords and Afterwords, p. 19). It makes three claims that can be
looked for in the text, and each plate is the place where the text bears one
of them out.

1. The tragic situation is one where either course is wrong, and his first
   example is Agamemnon at Aulis. Plate `yoke` is the king's speech at Aulis.
2. The hero's guilt is hubris, and sometimes he shows it in an act; his first
   example is Agamemnon walking on the purple cloth. Plate `cloth` is the
   thirteen lines in which he is brought to do it.
3. The hero begins in glory and ends in suffering, and the chorus watches the
   fall. Plate `net` is the queen over the body, and its `shape` lens follows
   one image from the victory song to the lament.

Rule three (added while this piece was being made) changed the captions more
than the choice of passages. Every caption sentence now stands on the marks,
on the lines, on a source opened in this session, or on Auden at a page. A
first set of drafts had closing sentences of my own (that the play "can hold
him guilty", that the surrender "is heard in the grammar", that he is "caught
in what he owned"). They were cut. One later sentence inferred what Aeschylus
meant by repeating two words ("appears to"); it was cut too, and the two
facts it joined now stand side by side without it.

## Why these passages

### Plate `yoke`: agamemnon/p1, rows 39.6 to 39.15 and 40.0 to 40.1

The elders sing what the king said at Aulis ten years before (p1, row 11.0
gives the ten years), and then say in two short lines what he did. It is the
passage Auden points at first. Things that can be seen in it:

- Rows 39.6 and 39.7 open on the same adjective (word 0 of 39.6, word 1 of
  39.7). In Smyth's Greek, lines 206 and 207 both begin with the same word,
  so the figure is Aeschylus's. In Morshead a conjunction stands before the
  second (word 0 of row 39.7). I still call it anaphora: the repeated word is
  the first word of the clause's sense, and in the Greek it is first outright.
  An examiner who wants a stricter use of the term should keep the Greek
  fact and rename the English one "repetition".
- Row 39.10 is the line of the two woes. The Greek there (line 211) is a
  question asking which of the two courses is without evils. I give that in
  my own words in the caption and as a gloss under the row.
- Rows 40.0 and 40.1 are the yoke. Marks: what compels (words 0 and 2 of
  40.1), the picture (word 3 of 40.0, word 3 of 40.1), the act (words 4 to 5
  of 40.0). The Greek of line 218 has the same two sides: a verb of putting
  on, with the king as subject, and the strap of a yoke that belongs to
  Necessity.
- The rhyme is Morshead's: a b a b c d d e e c in the speech, then a pair for
  the elders. The pair kept apart longest is rows 39.10 and 39.15, which are
  also the two six-syllable lines of the speech.

The plate cuts block 40 after its second row, at a semicolon. Rows 40.2 to
40.5 go on to say that his spirit then turned reckless, and they name frenzy
and sin. I left them off the plate to keep it to twelve lines; no caption
leans on them.

### Plate `cloth`: agamemnon/p4, rows 15.0 to 39.0

Thirteen single lines, blocks 15 to 39 (the odd numbers; the even blocks are
the speakers' names, which the range skips). Clytemnestra has blocks 15, 19,
23, 27, 31, 35, 39 and Agamemnon the six between. This is the lead "speakers
trading single lines", and it is the act Auden names.

- Just before, in block 12 (rows 12.9 to 12.13), the king refuses the cloths
  as an honor fit for gods and says he fears such pride. Just after, in block
  41 (rows 41.14 to 41.15), he says his will bows to hers and goes in on the
  purple. So the change happens inside the plate.
- Inside it the gods are named once (row 19.0, words 7 to 8). After that the
  marked words are a second king (23.0 word 7, 25.0 word 0), other people
  (27.0 words 5 to 8, 29.0 words 4 to 7, 31.0 word 3) and winning (33.0 word
  0, 35.0 word 2, 37.0 word 3, 39.0 word 7).
- The kinds of sentence. Hers: order, question, question, order, order,
  statement, order. His: five statements and one question. Row 17.0 begins
  with an imperative (word 0) that only introduces his refusal; the span for
  that row starts at word 1 and the caption says so. In block 12 the orders
  were his (rows 12.5, 12.9, 12.13).

### Plate `net`: agamemnon/p6, rows 35.11 to 35.15

The lead "the net: count where it comes". The murder speech is where the
figure becomes a thing: Morshead's own stage direction (p6, block 33) has the
body lying wrapped in a long robe. Rows 35.13, 35.14 and 35.15 name that robe
three ways, the plain noun last. I first meant to show rows 35.9 to 35.15 and
cut the first two, which no lens marks.

## Passages considered and left out

- The watchman's opening speech (p1, blocks 2 to 8). A fine speech, and the
  lead names it. Auden says nothing that bears on it, and what could be shown
  is a sentence held open through a simile, which is Morshead's blank verse.
  The reader is sent to it by `next` (agamemnon/p1:0).
- Cassandra (p5). She is in the net count twice (rows 4.1, 51.0 to 51.1,
  129.21) but has no plate. Her scene is long, its force is in the alternation
  of song and speech over a hundred lines, and a plate of fourteen lines
  would show little of that. Nothing Auden says is about her.
- The elders on the war dead and the god of war as a dealer in gold (p2,
  block 44). A strong metaphor, but off the line of Auden's view.
- A beat lens. None is given. The verse is Morshead's, regular rising lines
  of three, four and six beats in the chorus and five in the speeches, and I
  found no line where the measure does work a reader needs shown. The only
  metrical fact used is line length, which the plate shows by itself: rows
  39.10 and 39.15 are the short lines of the speech.
- A second version beside the first (`pair`). No Greek is hosted, and
  `original.mjs fetch` writes outside this piece's folder, so no Greek plate
  was made. Every Greek word the captions lean on is glossed in English.

## Rhyme: what is doubtful

- Rows 40.0 and 40.1 (letter f) are a near-rhyme: the vowels differ.
  Morshead does this elsewhere in the same stanza (rows 40.3 and 40.5). The
  caption does not lean on this pair.
- Rows 39.13 and 39.14 (letter e) rhyme fully only if the last word of 39.14
  is said the old way, to rhyme with "kind". The Online Etymology Dictionary
  (wind, n.1) says that was the regular older pronunciation and that poets
  rhymed it so. Read with the modern short vowel it is an eye-rhyme. Either
  way the two lines are a pair.
- Tails are marked at two or three letters; for rows 39.11 and 39.12 one
  letter carries the sound.

## Where each fact was read (all in this session)

The hosted text: `show.mjs`, `words.mjs` and the checker's proof.

The Greek: Aeschylus, Agamemnon, ed. and trans. H. W. Smyth (1926), at the
Perseus Digital Library (Greek text 1999.01.0003, English 1999.01.0004),
fetched as XML and read by line number. Lines used:

| claim | Greek lines |
| --- | --- |
| the two clauses begin with the same word, "heavy" | 206-207 |
| the line of the two woes is a question about which course is free of evils | 211 |
| "deserter of the fleet" | 212 |
| the army's wish is "themis" | 214-217 |
| the prayer that ends the speech names no god (Morshead adds one at row 39.15, word 0) | 217 |
| he put on the yoke-strap of Necessity | 218 |
| no end rhyme in the song | 205-217 |
| thirteen single lines, alternating, hers first and last | 931-943 |
| her orders | 931, 937, 943 |
| her lines about fear and envy are statements in Smyth | 933, 939 |
| battle, the fortunate, be conquered, victory, fight | 940-942 |
| obey, of your own will, mastery | 943 |
| the king says no one bears a slave's yoke willingly (same word as 943) | 953 |
| "I am subdued" behind row 41.14 | 956 |
| garment, of the cloths | 921, 960, 963 |
| wealth, of what he fears to waste | 948-949 |
| net first, then "as of fish", then "evil wealth of garment" | 1382-1383 |
| the Greek word at each net place | 358, 361, 822, 868, 1048, 1115-1116, 1375, 1382, 1492, 1516 |
| no net word behind Morshead's at p5 row 129.21 | 1275-1276 |
| the nets of Justice, where Morshead has an ambush | 1611 |

Greek dictionaries, both at Perseus:

- Liddell-Scott-Jones (1940): ananke (force, constraint, necessity); lepadnon
  (the strap from yoke to neck; cites line 218); themis (what is laid down,
  right by custom); liponaus (deserting the fleet; cites line 212); hekon;
  amphiblestron (casting-net; "of the garment thrown like a net over
  Agamemnon", citing line 1382); apeiros B (of garments one is entangled in
  past escape, citing line 1382); katastrepho (citing line 956); arkys (a
  hunter's net, citing line 1116); heima (garment; "rug, carpet" for lines
  921 and 963); poikilos (many-colored, of woven stuffs; cites lines 923, 926,
  936).
- Liddell and Scott, Intermediate Lexicon (1889): barys, ker (quotes line
  206), agalma, dyo (to get into, put on, of clothes and armor), kratos,
  deris, peitho (imperative "listen, comply"; "obey"), mache, nikao, olbios,
  hekon (willing, of free will), gnome, diktyon, gangamon, page, agreuma ("of
  the net thrown over Agamemnon"), hyphasma, ploutos (quotes "wealth of
  garment" from Aeschylus), arachne, herkos, peristichizo.

English words: Online Etymology Dictionary, entries anaphora, metaphor,
simile, stichomythia (it quotes the Century Dictionary on speakers repeating
each other's words), yoke, recreant (adj. and n.), wind (n.1), appanage,
prevail, yield, trammel, toil (n.2), inextricable, baffle, fate. Merriam-Webster,
appanage (senses 1b and 2 give "something due" and "a rightful adjunct",
which is Morshead's use in row 31.0).

Terms: Encyclopaedia Britannica online, "anaphora", "stichomythia" (it names
this play), "couplet", "rhyme".

Counts: the nine net places were found with `show.mjs --grep` over all six
parts and each was read in its block. Line numbers out of 1,965 were counted
from the hosted JSON (310, 285, 335, 254, 364 and 417 verse lines in the six
parts).

## What Auden said, and where I read it

- "The Greeks and Us", Forewords and Afterwords, pp. 19 to 21: read in the
  scan `fa.txt` (lines 936 to 970 for p. 19, 986 to 991 for p. 20, 1032 to
  1037 and 1061 to 1062 for p. 21). The scan has the page number at the foot
  of each page; p. 21 has no number in the scan and is placed by the running
  heads on either side. The one quotation (the view's, 16 words) has no
  punctuation inside it, so the scan's loss of punctuation does not touch it.
- "The Globe", The Dyer's Hand, pp. 173 to 174: read in the scan `dh.txt`
  (lines 8158 to 8162 and 8234 to 8238). The running head for p. 174 is
  missing in the scan; the passage lies between the heads for 173 and 175.
  The second quotation of the piece (17 words) is from here.
- "The Christian Tragic Hero" (1945) and the introduction to Baudelaire's
  Intimate Journals (1947): not in the scans. Taken from the research notes
  (C section 2, blocks H4 and H17s), which mark the wording as seen in
  snippets and the newspaper date as recalled. Used once in a caption (the
  word lens of the first plate, for "necessity") and in two `auden` entries,
  each marked as not seen.
- Also read and not used: The Dyer's Hand p. 148 (in Greek tragedy the
  audience knows the truth and the actors do not) and pp. 198 to 199 (Greek
  tragedy is about what gods do to men); The Enchafed Flood on Orestes;
  Forewords and Afterwords p. 173 on Oedipus.
- Pearce's memoir of the 1941 class has nothing on this play.

The piece has two quotations from work in copyright, which is the limit.
Everything else of Auden's is paraphrase.

## Things an examiner should know

- Whose craft. The repeated word, the yoke, the thirteen-line count, the war
  words, the order net-then-garment and the two words shared with the door
  scene are in the Greek and are called Aeschylus's. The rhyme, the words
  recreant, Fate, trammel, toils and baffling, and two of the queen's
  sentence-kinds (rows 19.0 and 31.0) are Morshead's and are called his.
  Morshead may have translated a Greek text that punctuated line 933 as a
  question; the caption therefore says only what Smyth prints.
- Row 35.0 of the second plate: "victors" is Morshead's. The Greek has "the
  fortunate". The caption's point (her argument is his good fortune) holds
  for both, and the gloss says which word is whose.
- The Greek noun for the cloths and for the robe is the same (heima), but the
  dictionary files the door scene under "rug, carpet". The caption says the
  noun is the same and the gloss reports the dictionary's sense. I do not say
  the cloths were garments and not carpets.
- "Auden's first example": in both lists on p. 19 Agamemnon comes first of
  several. The captions say "first example", not "the example".
- The net count leaves out three near things and says so in the lens's facts:
  the "new-trapped" beast (p5 row 12.2), the woven robes of the Furies (p6
  row 79.4) and the place where the Greek has nets and Morshead has not (p6
  row 79.43). With them the count would be ten, eleven or twelve; the shape
  of it, Troy first and the king after, does not change.
- The yoke comes back too (p3 row 4.0, p4 row 41.11, p5 rows 2.6 and 104.3,
  p6 row 91.7). I use only the return at p4 row 41.11, in a gloss on the
  second plate, because it shares a Greek word with the plate's last line.

## Looked for and not found

- The Oxford English Dictionary's public pages: the site returned only a
  login redirect, so no entry was read. Etymonline and Merriam-Webster were
  used for English words.
- A Greek lexicon entry for the noun "victory" would not load at Perseus; the
  gloss on row 37.0 rests on Smyth's translation of line 942 and on the entry
  for the verb.
- Anything by Auden on Clytemnestra, Cassandra or the watchman: nothing in
  the scans or the research notes.
- A statement by Auden about the net: none. The `shape` lens ties the count
  to what he does say, that the hero begins in glory and ends in suffering.


## Taken out of the list of what Auden said

Moved here by the lead on 3 October from the critic's record (critic.md, section 1), where the critic kept it whole because the launch let the critic write only reading.json and critic.md. Why it came out is in critic.md, section 5. Nothing on the page leans on it.

- **Introduction to Charles Baudelaire, Intimate Journals (1947), in The Complete Works of W. H. Auden: Prose, vol. II (2002), pp. 309–10**
  In 1947 he set Agamemnon beside Abraham. The Greek king gives up his
  daughter for his army and suffers for it. Abraham, whose faith is being
  tested, is commanded to give up his son; he obeys and tells no one, and
  the son is spared.
  Checked: not seen in a full copy. The wording is in the research notes,
  remake/research/C_auden_on_works.md, section 2 and appendix block H17s.
  The examiner found the sentence again on 2026-10-03 through the Internet
  Archive’s full-text search, both in the 1947 volume itself (item
  intimatejournals0000char_k2x1) and in Prose II (item
  prosetravelbooks0000aude, which the catalogue mislabels). The page
  numbers are the research notes’ reading of the running heads (the
  passage runs over pages 309 and 310, the sentence on Agamemnon on 310);
  the search does not give them. The examiner reworded the paraphrase,
  which had run nine words together in Auden’s own order

The entry of `sources` that nothing else on the page used, taken out with it:

- W. H. Auden, introduction to Charles Baudelaire, *Intimate Journals*
  (1947), in *The Complete Works of W. H. Auden: Prose*, vol. II (2002), pp.
  309–10. Not seen in full.

## Words marked in the small notes by the lead (3 October 2026, 10:07 UTC)

After the sixth mending of the kit a word between asterisks in a remark or a word's note stands upright in the italic. The lead marked the words these notes name as words (words of the passage, words of the original, Latin and Old English forms) and the titles in them. No wording was changed. Checker after: no problems.

## Phrases loosened that ran close to Auden's or Pearce's wording (3 October 2026, 13:11 UTC)

The lead, after the piece was through every stage. A test of every
printed paragraph of every piece against the four scans
(`python3 build/tools/runs-sweep.py`, which prints the page's own words
and never the scan's) found sentences here that shared a run of five or
more words with Auden's text or with Pearce's memoir. Each was said
again in other words; no claim was added or taken away. The edits, 1
of them, are in `lead/edits-runs.json`, and the reading before them is
`lead/before-runs.json`. The runs that are left are small words ("at
the end of the") or the words of the work itself. The checker after the
change ends as it did before.

## The lead in the last pass (3 October, 16:20 UTC)

A dictionary's headword after "under" in the folded notes and the sources is in
italics now wherever it stood bare in lower case, or is a word of another
language (item 2 of the last pass, 16:20 UTC; with it, a dictionary's name set as
the rest of the site sets it). Type only: no word changed. Edits in
`lead/edits-headwords.json`, the reading before in
`lead/before-headwords.json`; checker as before. The record is `review/remake/last-pass/RECORD.md`.

## The lead in the last pass: hidden runs (3 October, 17:04 UTC)

Two faults in the tests of closeness were mended today (`review/remake/grams/LEAD.md`, "Two faults in
the tests"): the sweep passed over a run that began inside a chain of chance words, and it cannot see
through a misprint in a scan (`build/tools/runs-tolerant.py` now can). One phrase of this page is loosened: in
the head, Auden's example of the act that shows hubris ("Agamemnon treading the purple carpet"; his
sentence has the verb and the same four words after it). Read at the scan's line and let stand: four
words of the first entry on the hero's suffering, and four of the second passage's caption, where
the sentence matched is another one of his, on pride. Edits: `lead/edits-hidden.json`; the reading before: `lead/before-hidden.json`. No claim changed.
Checker as before. Built. Both sweeps run again: no run of five in what was changed.

## The lead in the last pass: one wording for each figure (3 October, 19:55 UTC)

Each Figure tab says in one line under the figure’s name what the figure is. Laid side by
side, the 82 tabs gave the 17 figures that stand on more than one page a different line
on nearly every page. Each figure now has one line, with a tab’s own tail after “; here”;
anaphora, epistrophe, anadiplosis, parallelism and asyndeton keep one sentence whose number
and unit are fitted to the passage. No name, mark, caption or claim changed in this step.
Why and how: `review/remake/last-pass/RECORD.md`, “One wording for each figure”; the table
of lines is `review/remake/last-pass/figures/lead/lead_lists.py`.

Lines changed here (4):

- `plates[0].lenses[0].plain`, the plate `yoke`, the tab Figure (anaphora):
  was “the same word at the head of clauses that follow one another”;
  now “the same word at the head of clause after clause”.
- `plates[0].lenses[1].plain`, the plate `yoke`, the tab Metaphor (metaphor):
  was “one thing called by the name of another”;
  now “one thing spoken of as another”.
- `plates[1].lenses[0].plain`, the plate `cloth`, the tab Figure (stichomythia):
  was “talk in single alternating lines: two speakers answer each other a line at a time, often taking up each other’s words”;
  now “two speakers answer each other a line at a time, often taking up each other’s words”.
- `plates[2].lenses[0].plain`, the plate `net`, the tab Figure (metaphor):
  was “a thing called by the name of another thing: a robe called a net. With “as” in front it is a simile, a likeness said outright.”;
  now “one thing spoken of as another; here a robe called a net, after a simile that says it is like one”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.

## The lead, 4 October, 21:10 to 23:20 UTC: the held changes and the pass for phones

The owner said yes on 4 October (21:02 UTC) to the small changes that
had been held back. Made in the reading, by exact text:

- `yoke`: the heading is "The king at Aulis, as the elders sing it"
  again, with a no-break space before its last word (the critic of the
  drawings, `review/phone/critic-draw-2.md`, fault 2: where a browser
  does not balance a heading, the last word would stand alone at 364
  to 384 px).
- `cloth`: `turn` for rows 17.0, 19.0, 21.0, 23.0 and 27.0 (the held
  change), and for row 25.0 after its word 4 (the same critic, fault
  3: the row turned inside its verb at 320 and 360 px). Seen at 320,
  360 and 390.

The checker says: no problems, no warnings, fit to print. Copies
before: `lead/before-held-changes.json`,
`lead/before-phone-last-readers.json`. Record: `review/phone/RECORD.md`.
