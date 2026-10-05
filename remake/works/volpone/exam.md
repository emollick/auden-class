# Volpone: the examiner's record

Begun 2026-10-03, 05:58 UTC (see `examiner.txt`). Words of the play are
pointed at by part, block, row and word number in the text printed on
the site (`node build/tools/show.mjs volpone <part> <first> <last>`).
Nothing of the play is written out here beyond a word or a short phrase.

Result: **mended**. The reading was careful and almost all of it stood.
What was changed in `reading.json` is listed in section 7. The checker
ends with no problems, no warnings, and the printed notes fit to print.

## 0. State when I began

- `node build/tools/check-reading.mjs volpone`: no problems, no
  warnings, printed notes fit to print.
- Three passages: `a1s1` 3.0 to 3.1 and 5.0 to 5.10; `a3s6` 106.0 to
  106.9 and 106.14 to 106.17; `a5s8` 265.0 (words 5 to 7), 265.1 to
  265.5 and 269.0 to 269.5. Eleven tabs.
- No `site/js/pieces/volpone.js` exists yet, so no drawing reads the
  facts of the Names tab. Key names and shapes were kept all the same.

## 1. The proof

Read through in full. Every mark lands on the word it is meant for:
the thirteen glosses of the first passage, the eleven of the second and
the eleven of the third, the seven spans of the sentence, the parts of
both figures, the rhyme tails, the four letters of the thread. Nothing
was a row or a word off. No word on any passage is joined to the next
by a dash, so no mark needed a part number.

## 2. The ear (my own scansion, made before I looked at the poet's)

I marked the thirteen rows of the first passage and the fourteen rows
of the song from the tool's syllable print, by word number, then set
mine beside the poet's.

- First passage. The meter is blank verse, as stated. Twelve rows have
  ten syllables and one (5.9) has eleven, with the light syllable last:
  "one line adds a light eleventh syllable" holds. My marks agree with
  the poet's except on syllables that can honestly go either way: 3.0
  word 0 (an actor could stress it), 5.0 word 9 and 3.1 word 4 (light in
  speech, on a beat in the measure), 5.9 word 1 (I hear its first
  syllable as a lighter stress than its third; the poet marks both as
  stressed, which the measure also does). The captions lean on none of
  these. What they lean on is firm: the greeting at 3.0 words 0 to 4 has
  six syllables with three light ones in a row (words 1, second
  syllable, 2 and 3); the greeting at 5.0 words 0 to 5 has six syllables
  and four stresses (words 0, 2, 3, 5), the first against the measure,
  and words 2 and 3 side by side; in 5.3 the first beat falls on word 1.
- The song. The measure is seven syllables and four beats with the beat
  first, as stated; 106.2 and 106.3 add a light syllable and no other
  row shown does. In rows 106.0 to 106.9 every stress can sit on a
  beat (I checked each row place by place). In 106.15 words 2 and 3
  are both stressed and word 3 stands in a light place: that is not in
  doubt, since word 3 is the noun of the phrase. 106.16 has two
  stresses, on word 2 and word 5. In 106.14 words 1 and 3 can be heard
  either way; the caption does not lean on them, and a caveat says so.

## 3. The terms

- Simile (third passage): the sentence at 265.4 word 7 to 265.5 has
  the word of likeness at 265.5 word 0. It is a simile. The plain gloss
  is right.
- Antithesis (the song's last four rows): no sin at 106.14 words 1 to
  2 is set against the word at 106.17 word 2, and the verb at 106.14
  word 6 against the verb at 106.15 word 5, in neighboring clauses. The
  dictionary's definition (Antithesis, sense 1) fits, and the plain
  gloss follows it.
- Blank verse, the short couplet, the feminine ending: as Baum uses the
  terms (chapter 4).

## 4. The words: every entry opened

The poet's saved volumes of *A New English Dictionary* (the first
edition of the Oxford dictionary, in OCR) were read entry by entry.
Each gloss is in the entry named, and each sense has examples from
Jonson's time or before it. Entries that cite this play: Shrine 5c
(rows 3.0 to 3.1 of the first passage, dated 1605), Shamble 4 (the
words at `a1s1` 9.4 to 9.5, dated 1605, cited as I. i), Chequeen (a
line at `a1s1` block 215, cited as I. iii of the folio of 1616, p. 457).

Two faults, both mended:

- **Shamble.** The Figure caption of the third passage glossed the word
  at `a1s1` 9.5 as "the meat market" (the dictionary's sense 3). The
  dictionary quotes those very words under sense 4, "the place where
  animals are killed for meat; a slaughter-house". This is the model's
  fault of a gloss from memory where an entry cites the line. Now "the
  slaughterhouse", which is also what the caption's own argument needs.
- **Plate.** The sense for utensils of silver or gold is 15, not 16.
  The scan prints "16." twice running; the first stands between 14
  (bullion) and the heraldic sense, and the cross-reference under
  Plate fleet gives bullion as 14. Corrected in the printed list of
  sources, in the ground and in the facts' working note.

Smaller things, mended:

- Shrine. The note said the dictionary quotes the lines "for the word
  used of a thing idolized". Its words are: figurative, "in contexts
  referring to the veneration or idolizing of some person or thing".
  The note now says so. Sense 2 (the casket of a saint's relics) is a
  fair gloss for a thing that is opened to show a saint; a caveat
  already tells the reader how the dictionary files the lines.
- Aries. The note gave the 21st of March as plain fact. That is the
  dictionary's date, by the modern calendar. The note now says "in
  March: on the 21st, by the dictionary's reckoning".
- Reward, v. The scan prints sense 5 as "6."; the poet's "6b and 7"
  are right (6b, to requite a service or merit; 7, to requite for
  evil-doing, to punish).
- Fare, v., sense 8 is "to be entertained with food; to feed (well,
  ill, sumptuously)": the construction of 269.5 words 2 to 3. The gloss
  stands. That Jonson meant the feeding sense is still an inference,
  and a caveat says so.
- Bleed, sense 2: "to lose blood from severe or fatal wounds ... or die
  by bloodshed". The gloss stands.
- Morality 4b, Hail and Hail Mary, Soul (the soul of the world), Sol,
  Saint, Relic, Sacred, Blessed, Adoration, Adore, Teeming, Chaos,
  Centre, Prove, Loose, Toy, Take 8, Crime, Mischief, Seasoning, Fact
  1c, Censure, Doubtful, Jovial, Antithesis, Simile: as reported.

Other dictionaries and texts:

- Lewis and Short at Perseus: furtum (II.B.2, "stolen or secret love,
  intrigue (mostly in plur.)", with the poets cited), rumor, as, crimen,
  sol, lux, nox, brevis, perpetuus: as reported.
- Catullus 5 in Merrill's text at Perseus, read whole and set beside
  the song: lines 1 to 6 are the song's source as stated; the count of
  kisses follows; the song's last four rows have no counterpart in it.
- Virgil, *Georgics* 4.345 to 346 (Greenough's text at Perseus): the
  phrase is there.
- Florio, *Queen Anna's New World of Words* (1611), the facsimile
  columns at pbm.com/~lindahl/florio, read as images: Volpone, Mosca,
  Voltore, Corbacchio, Corvino, Bonario and Berlina are as the reading
  gives them.
- The glossary and the list of persons of Project Gutenberg no. 4039:
  Berlina, Censure, Chequin, Fact, Fame and the eight roles are as
  given. The file has Schelling's introduction.
- The Aberdeen Bestiary, folio 16r, at abdn.ac.uk/bestiary/ms24/f16r:
  the fox's trick is as the reading tells it. The site's About page
  says the book was written and illuminated in England around 1200, so
  "medieval" stands; the date was added to the list of sources.
- Baum, *The Principles of English Versification*, chapters 4 and 5:
  blank verse and the feminine ending; the short couplet (the quick
  return of the rhyme makes the couplet a unit; the repeated short unit
  gives "the effect of hurry"; a couplet may be divided so that its
  second line belongs to a new sentence); alliteration; lines short of
  stress "force attention on the important words"; a stressed
  monosyllable pressed into a light place brings "a very marked
  retardation of the tempo". All there.
- Abbott, *A Shakespearian Grammar* (1870), paragraph 515, pp. 428 to
  429: "Rhyme was often used as an effective termination at the end of
  the scene." There.
- Abbott, *How to Write Clearly* (Boston, 1883): rule 30 (suspense,
  and the emphasis it throws on the words waited for), rule 31 (a long
  suspense is tolerable at the opening of a poem), rule 33 (suspense is
  gained by setting an adjective that qualifies the subject before the
  subject). Rule 33 is the build of the sentence at 5.0 to 5.3 and the
  reading did not cite it. Now cited.
- Strunk, rule 18, and Wikipedia, "Periodic sentence": say what the
  ground says.
- Wikipedia, "Catullus 5", and the text of *The Forest* at
  anthony.sogang.ac.kr: poem 5 of *The Forest* is this song, and the
  article says Jonson drew on Catullus for it.

## 5. Auden

- *The Dyer's Hand*, p. 173 (the morality play with a deadly sin as
  hero), p. 177 (classical and Christian comedy; the 24 words quoted
  are exact), p. 252 (the situation of a Jonson comedy): read in the
  scan at the pages given. The paraphrases keep to what he says. On p.
  177 he says two things in two sentences, that Jonson's comedies are
  classical and that in classical comedy the characters are exposed
  and punished; one caption ran them into one statement about Jonson's
  comedies, and now keeps them apart.
- *Forewords and Afterwords*, p. 30: read; the paraphrase is close and
  adds nothing.
- **The Table Talk.** The poet had the remark on the play only from
  the research notes, with no page and a loose date ("between November
  1946 and January 1947"). I found it in a scanned copy at the Internet
  Archive (`tabletalkofwhaud0000anse`: Alan Ansen, *The Table Talk of W.
  H. Auden*, edited by Nicholas Jenkins, London: Faber and Faber, 1991,
  xv + 119 pp.). The scan is lent, so it cannot be opened as pages; its
  full-text search returns short extracts. In them: he is especially
  fond of two other plays of Jonson, finds this one really too
  unpleasant, and says his favorites are now the masques; the running
  head of p. 18 stands before the passage with no other running head
  between; the heading January 15, 1947 follows at once; the entry is
  the one headed January 8, 1947, talk on the way home after a lecture.
  The view, its source line, the list of sources and a caveat were
  rewritten to say this. Late in the work a further search of that scan
  was refused by the harness, and I did not go round the refusal; so
  the place of the entry's heading was looked at once, not twice. That
  is said in `open`.
- "One remark ... is on record" claimed the whole record. The research
  notes say only that nothing else was found. Now "was found".
- The view is his view of Jonson's comedies and his one remark on this
  play; the three passages bear on it (a hero who worships money; a
  rule that only being found out is a crime, sung by a man who is then
  unmasked; an ending that exposes and punishes). No caption says that
  Auden applied his statements to these lines, and a caveat says he did
  not.

## 6. The reason and its ground, caption by caption

Every sentence of every caption and `why` was set against the proof,
the scene, the source or the page. What I read in the play for this:
`a1s1` blocks 0 to 9, 19 to 22, 81 to 94, 137 to 140, 183 to 186, 213
to 216, 225 to 232, 341 to 348, 389 to 406, 514 to 518, 533 to 546,
606 to 612, 640 to 646; `a2s3` 94 to 99; `a3s2` 155 to 161; `a3s6` 0
to 28, 76 to 133, 165 to 171, 250 to 258; `a4s2` 94 to 97 and 382 to
388; `a5s1` 74 to 81, 130 to 174, 267 to 270, 283 to 287; `a5s3` 15 to
27; `a5s5` 12 to 18 and 40 to 45; `a5s7` 0 to 8; `a5s8` 0 to 6 and
183 to 269; the Epistle, the Argument and the Prologue whole.

First passage
- Word. "Volpone's words for his gold are words of Christian worship"
  was a general statement that two of his names for the gold break
  (5.0 words 2 to 3 is the philosophers' term, 5.7 words 5 to 7 the
  alchemists'). Now: he "addresses his gold in words of Christian
  worship", which the seven words marked bear out. The sentence on
  5.9 to 5.10 changed the grammar of the lines (it made the rest of
  the hoard both relic and treasure; the lines speak of each relic of
  the treasure). Rewritten to follow the lines. The closing sentence
  stands on the text: 5.9 word 1, and row 19 of the same speech, where
  he names riches a god.
- Sentence. All of it stands. "Three lines later" is right (5.0 to
  5.3). The comparison's subject, the sun, is at 5.1 word 7 and comes
  back at 5.3 word 7, as marked.
- Beat. Stands; see section 2.

Second passage
- Rhyme. Nine rhymed pairs in block 106; "twice a pair is split" is
  right by the caption's own test (the pair of rows 4 and 5 and the
  pair of rows 14 and 15; the pair of rows 8 and 9 holds two sentences
  but its second starts nothing that runs on). Exactly four words of
  rows 14 to 17 begin with the thread's letter.
- Word. Stands. The four rows left out (10 to 13) say what the caption
  says they say.
- Figure. Stands. Corvino's question is at `a3s6` 24.2; Bonario's
  entrance at 127 to 128; the cry at 131.2; the disguise thrown off at
  `a5s8` 189 to 190.
- Beat. Stands; see section 2.

Third passage
- Rhyme. The speech at block 265 ends its six rows unrhymed, unrhymed,
  unrhymed, unrhymed, then the pair. Acts 2 and 3 do end on a rhymed
  pair (`a2s3` 98.11 to 98.12; `a3s6` 254 and 257); Acts 1 and 4 do
  not, so the caption is right to name two acts and no more. One
  phrase played on a word of the passage ("hands the case" beside the
  hands of 269.5). Now "puts his case".
- Figure. Stands once the gloss of the word at `a1s1` 9.5 is right.
  The earlier uses are where the reading says: `a1s1` 9.4 to 9.5 and
  83.1 to 83.3; `a5s7` 3.6.
- Word. "Words of the kitchen" rested on one sure word (269.0 word 1)
  and one inferred (269.5 word 2). Now "words of the table and of the
  court", with the second word's two senses stated as the dictionary
  gives them. "A fact was a crime" is now "a deed, most often a
  crime", which is what the entry says. "To censure was to pass
  sentence" is now "could mean", since the word also meant simply to
  judge. The note at 269.3 said the lawyer calls "the charge against
  Celia" by that word; at `a4s2` 96.25 he uses it of the adultery he
  alleges. The Epistle says what the caption reports (block 3).
- Names. "Five persons have creatures' names" is a count of the whole
  cast that I could not stand behind: the list of persons has other
  names that may be creatures' too (the traveller's and the knight's
  short name), and the dictionary of 1611 only sends the first of them
  to another entry, which I did not follow. The caption now says "the
  five persons the court sentences", which is true whatever those two
  names mean. Every fact of the tab was checked at its block: the five
  names and roles, what each is called and where, each gift, each
  sentence, the three places where Volpone names his visitors, the hope
  (block 21) and the count of gifts (block 610, after Mosca has gone
  out at 609). All right. The play never names the metal of Voltore's
  gift; "silver or gold ware" rests on the dictionary's sense of the
  word. Said in the facts' working note and in `open`.

Nothing in the captions tells a reader what to feel, and none ends on
a summing-up of what the passage "means". No lens had to be removed.

## 7. What was changed in reading.json, and why

1. `view.says`: "is on record ... between November 1946 and January
   1947" to "was found ... noted down under January 8, 1947" (68
   words).
2. `view.source`: now two plain citations, book, year, page. The words
   "the page was not seen" are gone because the page was found.
   `view.checked` says how and where.
3. Shrine note (first passage): the dictionary's own description of
   the sense under which it quotes the lines.
4. Saint note: Bonario calls the treasure dross and Volpone's idol
   (`a3s6` 128.5); the note said he "calls the gold" the idol.
5. Ram note: the date given as the dictionary's.
6. First Word caption: first sentence and the sentence on 5.9 to 5.10
   (section 6).
7. Sentence tab: Abbott's rule 33 added in `stands`, the ground and
   the list of sources.
8. Third Rhyme caption: "hands the case" to "puts his case".
9. Third Figure caption and its ground: meat market to slaughterhouse,
   with the entry that cites the line. Its sentence on `a5s7` 3.6 said
   that he and Mosca "may" bleed dead; the line is conditional (unless
   the vein is closed), and the caption now says that.
10. Third Word caption (table for kitchen; fact; censure; Auden's two
    statements kept apart) and the note on fact.
11. Names: the caption's first sentence; "sense 16" to "sense 15" in
    three places; two words trimmed to keep the caption at 110.
12. Printed notes: the Ansen entry (London: Faber and Faber, 1991, p.
    18, the entry for January 8, 1947; not seen in full); the bestiary's
    date; the caveat on the Table Talk rewritten; in the `stands` of
    the third Rhyme tab, the directions between the two speeches are
    now a link to where they stand (`a5s8` block 266).
13. `open`: the item on the Table Talk and the item on Voltore's gift
    brought up to date, and one item added (the Names caption and the
    names not looked up). The poet's other items are as the poet left
    them.

The checker was run after each group of changes. Nothing in the poet's
`notes.md` was changed. Where the notes list a second way of hearing a
line I agree that it is a fair one, and that no caption leans on it.
The notes say that "Five persons have creatures' names" was meant as
"five do", not "only five do"; a reader could take it either way, so
the sentence was made exact.

## 8. The prose, the rules, the printed notes

- House style: no dash inside a sentence, no rhetorical question, no
  "we" outside a phrase of the song, no stock words. One of my own
  mends tripped the checker ("speaks to", meant literally) and was
  reworded.
- Lengths after the mends: view 68 words, quotation 24; captions 106
  to 110; every `why` 36 to 40; every `stands` 42 to 68; five caveats
  of 39 to 50 words; glosses of six words or fewer; no note over 45.
- Words of the play: no run of more than six words of the play stands
  anywhere in the reading. The longest are two six-word phrases in the
  captions of the first passage. One quotation from a book in
  copyright (Auden, 24 words); the Table Talk and the bestiary's
  translation are paraphrased.
- Passages: 13, 14 and 12 rows.
- Printed notes: `view.source` and the three `auden[].source` lines
  are book, year and page. `sources` are entered as a reader would look
  them up. Every `stands` names its grounds and links into the copy
  printed here; every link was opened as a block and holds what is
  said. Every `read` address in the facts of the Names tab was opened
  too. Nothing printed uses the two words the page does not use for
  its parts, which is why Voltore's gift is "silver or gold ware".

## 9. Still doubtful

- The page and date of the Table Talk remark rest on search extracts
  of a lent scan (section 5). Someone with the book should confirm p.
  18, and whether a printing of 1990 is paged the same.
- That the feeding sense of the word at 269.5 word 2 and the
  wrongdoer sense of the word at 265.4 word 7 were meant is an
  inference; the captions state the senses and a caveat says so.
- The scansion has syllables that can go another way (section 2). No
  caption leans on one.
- The Names tab has no drawing yet.
- The current Oxford dictionary online was not opened; every sense is
  from the first edition, read in machine-read page text. Two sense
  numbers are misprinted there (Plate 15 and Reward 5 both stand as
  "16." and "6."); the true number was settled each time by the senses
  on either side.

## 10. The last run

`node build/tools/check-reading.mjs volpone --print` ended:

    no problems
    no warnings
    the printed notes are fit to print
