# Augustine, Confessions: the examiner's record

Piece `augustine`. Examined on 2026-10-03, starting from the poet's
`reading.json` and `notes.md` as they stood at 04:37 UTC. Verdict:
**mended**. The piece was sound in its marks, its counts (one number
apart), its Latin and its pages. What was wrong was smaller: one count,
one paraphrase that changed the grammar, one general statement that a
place in Book IX qualifies, one clause about a figure that no source
says, one sentence of Auden's laid on a passage he did not say it of,
one comparison given as the poet's that Auden in fact made himself, a
few loose words, and the printed notes, which were still working notes.
All of it is mended in `reading.json` by small edits; the list is in
section 10, and what is still doubtful in section 12.

The words of the works are not written out here. Places are given by
book, block and word number as the tools print them.

## 0. State at the start

- `node build/tools/check-reading.mjs augustine --print`: no problems, no
  warnings, 28 PRINTED NOTES (no `stands` on any of the twelve lenses, no
  `caveats`, the word "plate" in three captions or notes and in one fact,
  working words in six `sources`).
- Three plates, twelve lenses: prose in translation, so no beat and no rhyme.

## 1. The proof (test 1)

Read line by line. Every mark sits on the word it is meant for.

- Opening, Address: thirteen words for Thou in words 0 to 84 (2, 12, 15,
  19, 28, 45, 53, 59, 61, 67, 70, 74, 84), counted again in the proof. No
  first-person singular word in the 85; the first is word 86 of the
  paragraph. Build: the eleven spans begin and end on clause boundaries;
  the two psalm spans are 0-9 and 10-17, the verse of James 45-48.
- Pears, Itself: three `but` (211, 238, 257) and no fourth in words 189 to
  260; each B part is the noun with `itself` (212-214, 239-241, 258-260).
  Loved: `I loved` three times (219, 222, 226); the first stands after
  `and` (218), which does not unmake the figure.
- Late: the crossing is words 44, 47, 49, 53, with `with` at 46 and 52 and
  `not` at 51; the five sense-sentences are 70-77, 78-84, 85-96, 97-102,
  103-111; six verbs in -st in the first two (71, 73, 75, 79, 80, 82).

## 2. The ear (test 2)

No scansion in the piece. Nothing to test.

## 3. Counts made again (shape lenses)

All counted again on the text printed on the site, with the site's own
word-splitter, by a script of my own (not the poet's, not the artist's).
The artist's `counts.mjs`, run afterwards, prints the same numbers.

- Whole work: 111,772 words; 455 prose paragraphs and 6 quotations set as
  verse; capitalized Thou, Thee, Thy, Thine, Thyself 2,889 times; one in
  38.7. Each book's words and Thou-words as the facts give them. Parts:
  I to IX 63,157 and 1,570; X 16,315 and 380; XI to XIII 32,300 and 939.
- Of the 2,889, only 76 open a sentence, so only those could owe their
  capital to their place. Read one by one: one of the 76 is not said to God
  (Book VIII, block 18, to his own tongue), and one more stands after an
  opening quotation mark (Book IV, block 10, a poet's words of his friend).
  So the count is high by two at least. This is now the fifth caveat.
- The ring: 82 words stand before the verb in Book I, block 0; 111,507
  before it in Book XIII, block 49. Both right.
- Book II: 3,781 words in 18 paragraphs; 46 question marks; the sections
  91 / 78 (three sentences) / 20 / 72 / 1,853, with 1,667 before; 1,945
  words after the story (51.4 in 100) with 33 question marks; the list of
  46 places. All right.
- WRONG: `loveVerbs.inTheBook` 29. That is the number of the word-forms
  love, loved, loves, lovest. Six of them are nouns (block 0 words 31, 34
  and 121; block 1 words 21 and 61; block 12 word 80). The verbs are 23
  (love 10, loved 12, lovest 1). No caption and no drawing uses the number.
  Mended in the facts; the key and its shape are kept.
- INCOMPLETE: the ring. The caption said the verb of the first paragraph
  returns in the third paragraph from the end. It does. But a search of
  the whole Latin edition for that verb joined to `in te` finds three
  places, not two: I.1.1, IX.3.5 and XIII.36.51. In Book IX (block 4,
  word 228; 55,540 words stand before it) the verb is in the past tense,
  of the weeks at a friend's country house after his conversion: a rest
  already had. The English there has the same verb Pusey uses on the
  first page. (The same English words in Book II, block 7, are another
  thing: hopes placed in God, with another Latin verb. The last paragraph
  of Book XIII has the verb once more, with God's hallowing as the
  place.) The caption now says this in one sentence, and the facts carry
  the place under a new key, `ringBetween`, in the shape of a `ring`
  entry. The artist has since taken the key into the drawing and into
  `counts.mjs`, which confirms 55,540.

## 4. The terms (test 3)

Each figure's definition opened at Silva Rhetoricae (rhetoric.byu.edu).

- apostrophe: a turning of one's speech from one audience to another.
  The term usually names a turn inside a speech. Calling a whole work one
  rests on Augustine's own words in Book II, block 4 (he tells it before
  God to his own kind). Kept; the stretch is said in the fourth caveat.
- antithesis: contrasting words or ideas set side by side, often in
  parallel structure. The three clauses deny one thing and affirm
  another in matching words. Kept. (Correctio would also describe them.)
- anaphora: the same word or words at the head of successive clauses.
  Right. The poet's caption added that the repeated words "turn the
  clauses into a list". Silva gives the definition and nothing about a
  list, and no other source was cited: the clause stood on nothing and
  is cut.
- chiasmus: repetition in inverted order. The two persons are named in
  the order A B, B A. Right, and it is in the Latin (six words).
- enumeration (enumeratio): a subject divided into its parts. Right.
- The plain-words glosses are right.

## 5. The words (test 4)

Every Latin word the reading names was found in Pusey's Latin edition
(Project Gutenberg no. 33849), in the chapter given, and every gloss in
Lewis and Short at Perseus. English senses at Webster (1828) and the
Online Etymology Dictionary.

- Book I, chapter 1: `vult` twice, in the same words; `excitas`; `ad te`;
  `inquietum`; `requiescat`. The first sentence is in italics there, with
  Ps. 144, 3 and 146, 5 in the margin (Psalms 145:3 and 147:5 in the King
  James numbering), and James 4:6 and 1 Peter 5:5 for words 45 to 48.
  Lewis and Short: `excito` (rouse, wake); `inquietus` (restless,
  unquiet); `requiesco` (to rest, repose); `quies`; `ad` (first sense:
  direction toward); `volo` (to wish, want).
- Book XI, chapter 1: `excito`, of his own telling; the margin there
  names Ps. 95, 4, a verse with the same Latin words as the one at the
  head of Book I. The Address caption said "the psalm verse this page
  begins with"; it now says "the psalm words".
- Book II, chapter 4: `gratis`; `causa` (with `nisi`); `foeda`; `amavi`
  four times where Pusey has the verb three times; `defectum` and
  `deficiebam`; `ipsum` once where Pusey has `itself` three times;
  `firmamento`; `dedecore` and `dedecus`. Chapter 5: the heading that no
  one sins without a cause; Sallust's phrase for Catiline, which Pusey
  gives as two adjectives after `gratuitously`. The note on word 204
  said "bad for nothing"; it now says "evil and cruel for nothing".
  Chapter 6: the prisoner and his likeness of freedom. Chapter 7:
  `gratia` twice and `gratuitum facinus`. Chapter 8: the theft was
  nothing. Chapter 10: the knot.
  Lewis and Short: `gratia` (with `gratiis`, contracted `gratis`:
  without recompense, for nothing); `gratuitus` (cites Sallust, Catiline
  16, 3); `causa`; `foedus` (adjective); `defectus` (I. defection,
  revolt; II. a failing, lack); `deficio`; `firmamentum` (a support,
  prop; late, the sky, citing Augustine); `dedecus`.
  Etymonline: gratis, grace, gratuitous, fault (first sense a
  deficiency). Webster 1828, fault, sense 3: defect, want, absence,
  marked as no longer used.
- Book X, chapter 27: `sero`; `amavi`; `intus`; `foris`; `formosa`;
  `deformis`; the six-word crossing; and three present tenses at the
  end, `anhelo`, `esurio`, `sitio`. The copy printed here has a past
  tense at word 94 where the Latin has the first of the three; Pusey's
  first edition (Oxford, 1838; Internet Archive) has the present there.
  The poet had this in `open` only. It is now in the Verbs caption and in
  the third caveat. Lewis and Short: `serus` (late; too late); `amo`;
  `intus`; `foris` (out of doors, abroad); `deformis`; `formosus`;
  `forma`; `anhelo`. Webster 1828, abroad: out of the walls of a house
  comes before foreign countries.
- Chapter 26: no place. Chapter 28 (block 38): the burden. Chapter 29
  (block 39): the prayer. Chapter 3 (block 3): what he is now. Chapter 6
  (block 7): the five senses of the inner man, sight first; the word
  that struck his heart; the deaf ears.
- Book XIII, chapter 36: `requiescamus in te`, of the Sabbath of eternal
  life. Chapter 38: the five-word phrase on God's rest.
- Retractations II.6, at the head of the Latin edition: thirteen books,
  the first ten about himself, three on Scripture from the opening of
  Genesis to the Sabbath rest. The poet's ground said the preface to
  Pusey's translation quotes this too. It does not: it quotes only the
  first sentences of the chapter. The ground is corrected. That the
  Retractations are a late work (about 426 to 427): Wikipedia,
  "Bibliography of Augustine of Hippo", added to `sources`.
- The Oxford English Dictionary was not opened (it asks for a login).

## 6. Auden (test 5)

Each thing found again, at its page.

- `view`: the gratuitous act, foreign to Greek thought, first comes up in
  the Confessions with the pear tree. Lectures on Shakespeare, p. 197: in
  research notes C, and seen by me in full-text snippets of the Internet
  Archive copy. The lecture then quotes Book II, block 8, from about its
  thirtieth word to word 241, so words 189 to 241 of the second plate are
  the words Auden read out, and the plate's last sentence (242 to 260) is
  beyond his quotation. The next page begins after it. The editor's note
  keyed to 197 cites Pusey's translation (London: Dent, 1932), so the
  English Auden read is the translation printed here. The book is a
  reconstruction, chiefly from Alan Ansen's notes (second caveat).
- The 1944 essay, in the scan of Forewords and Afterwords. Page numbers
  stand at the foot of the page there. Love as a relation that goes both
  ways: foot of p. 35 to p. 36. Nothing evil in matter; man created and
  fallen; flesh and spirit: p. 36. Ethics begins with the gratuitous act:
  last line of p. 36 to p. 37. The quoted sentence: p. 37, 23 words,
  exact (compared by script with the scan, the scanner's slips set
  right). The date and the book reviewed (C. N. Cochrane, Christianity
  and Classical Culture): the list of first printings at the back of the
  same book. The poet's pages are all right.
- The Dyer's Hand, p. 430 (running head of 431 follows): why many
  gratuitous acts are crimes. Right. P. 140: the first serious analysis
  of time. Right.
- Forewords and Afterwords, p. 229: the Tennyson essay quotes Book IV on
  the friend's death. Right.
- Pearce, p. 134: read again in the scan. In this book the numbers are
  at the foot of the page, so the passage is p. 134 and the poet is right
  against research notes B and C (133). The seven quoted words are exact.
  The paraphrase keeps within what Pearce wrote down.
- New Year Letter, line 1684 and the note to Book X: in research notes C,
  and seen by me in snippets of the Faber edition (1941) and of The
  Double Man (1941), where the note stands against 1684.
- The course sheet: seen in the image Alan Jacobs reproduces
  (blog.ayjay.org, 2012). The row reads Augustine, Confessions, Loeb. The
  same sheet recommends Cochrane's book, the one the 1944 essay reviews,
  and the essay's first sentence says Auden had read it many times since
  1940. Added to `auden[6]`, because it ties the essay the piece leans
  on to the year of the course.
- Miller: the first class, with the Divine Comedy named first and the
  Confessions second, seen in a snippet; the book's index gives Augustine
  at 26 only. The page is corrected from 26-27 to 26.
- FOUND AND ADDED: "Squares and Oblongs" (Poets at Work, 1948), pp.
  167-68. There Auden says why so many gratuitous acts are crimes and
  gives Augustine's act as the example; the clause on disobeying a law
  runs from p. 167 to p. 168 (the running heads are inside the snippets).
  The poet found this, by way of the editor's note in Lectures on
  Shakespeare, and kept it out because it is in neither research notes C
  nor the scans. I saw the sentences myself in snippets of the Internet
  Archive copy. It turns the one comparison in the piece that was the
  poet's own ("Auden gives a like reason") into Auden's link. It is
  flagged for the lead in `open`, with how to take it out again.

Is the view his view of this work, and do the plates bear on it? Yes.
The second plate is the passage he quoted for it. The first and third
show the other of the two loves his summary names.

## 7. The reason and its ground (test 6), lens by lens

Opening
- Address. What: every sentence to one hearer, thirteen times in 85
  words, no first person yet. Why: Augustine's own two reasons (Book II,
  block 4; Book XI, block 0). Both read; both say what the caption says.
  Passes. One word changed (verse to words, section 5).
- Build. What: borrowed praise, the wish, three things man is, the wish
  again, who woke it. Why: what man is set against what he wants, with
  God as the cause of the wanting. On the plate. The Auden sentence is
  given as a likeness ("two parts like these") and is true to p. 36.
  Passes.
- Word. The Latin is right. FAULT: the caption and the why said the
  heart is made toward God. The line says it of `us` (word 72); the
  heart comes in the next clause. A paraphrase that changed the grammar.
  Mended: God made us toward himself, and the heart is restless until it
  rests in him. Also "names one thing twice ... then as where it ends"
  now reads "names rest twice: first as what the heart is without, then
  as what it comes to in God", which is what the two Latin words do.
  That `ad te` could be taken as "for" is the fourth caveat.
- Whole. Counts right. FAULT: the ring, as in section 3. Mended in the
  caption. The sentence that the life he tells stops in Book IX was true
  and is dropped to make room; `parts` still says it for the drawing.

Pears
- Itself. What: three turns on `but`, the noun returning. Why: the place
  of the motive is empty; `causa`; the rule two paragraphs on (block 10);
  Auden's name for such an act. All read. Passes.
- Loved. FAULT: the clause about a list (section 4), cut. "On the next
  plate" is now "in the passage from Book X". The why said Auden's
  summary "knows only these two loves", which made the theft's love and
  Auden's self-love one thing without saying so; it now says "two loves,
  of self and of God", which is his sentence on p. 37.
- Word. FAULT, small: the caption had God's grace "forgiving a man who
  loved" a gratuitous crime. In block 14 Augustine ascribes two things to
  grace, his pardon and the evil he did not do, and the clause about the
  crime hangs on the second. Mended to say both. The pair `gratia` and
  `gratuitum` is in the Latin of that chapter, and Pusey loses it there,
  as the caption says.
- Book. Counts right. FAULT: "Auden gives a like reason" was the poet's
  comparison. Auden made the link himself (section 6). Mended, with the
  ground flagged. Pearce's report is given as what Auden told the class;
  the second caveat says whose notes they are.

Late
- Word. "On the second plate" twice, now "in the passage from Book II".
  FAULT, small: "what he has become". The line has an adjective and no
  becoming; now "what he is". Otherwise passes: the pairs are in the
  Latin, Pusey keeps the second, and the Auden sentence (nothing in
  matter evil) is his, p. 36, said of the doctrine and given as that.
- Crossing. Passes. The love as a relation that goes both ways is Auden
  on the doctrine (pp. 35-36) and the caption says so.
- Senses. FAULT: the last two sentences. "So the love of God is told in
  the terms of the body. Auden notes that in Augustine the dividing line
  does not run between body and mind." Auden's sentence is about flesh
  and spirit and is not said of this passage, and the paragraph the
  caption leans on (block 7) itself sets the inner man's five against
  the body's. Auden made to say more than he said. Cut, and replaced by
  two grounds in Book X: block 7 again (heaven and earth speak to deaf
  ears unless God has mercy, which answers the deafness of word 77), and
  blocks 40 to 52, where three paragraphs after the passage he begins
  on what still tempts him and takes the senses in turn (sex and dreams,
  eating and drinking, smells, the ear, the eyes; block 53 calls these
  the delight of all senses). The why now gives Augustine's own reason
  for hearing first and the place of the five senses in the book.
- Verbs. Passes, with the present tense of word 94 added (section 5).

## 8. The prose and the rules (tests 7 and 8)

- American spelling, present tense, no dashes inside sentences, no
  rhetorical questions, no "we", no stock words: nothing found. The
  checker's lint is silent.
- Lengths after mending: captions 104 to 110 words; whys 33 to 39;
  `view.says` 69; the longest `auden` entry 95.
- Quotations from Auden: the 23 words of `view.quote`, and seven words of
  his as Pearce reports them. Nothing else of his is quoted; the new
  sentences in `auden[2]` and `auden[6]` are paraphrase.
- Phrases from the Confessions in captions are six words at most.
- Third plate: 112 words where the guide says about 30 to 110. One whole
  paragraph. Left.
- `about`: the years of writing (397 to 400), his birth (354) and his
  age at the conversion (31) are as Wikipedia gives them, so "in his
  forties" is right; the night, the pear tree and the hogs are in Book
  II, block 8, words 91 to 168; his mother's death is in Book IX.
- The places counted in paragraphs were counted again: two, five and six
  paragraphs on from the second passage are blocks 10, 13 and 14; the
  paragraph before the third passage, two and three paragraphs after it
  and thirty before it are blocks 36, 39, 40 and 7; the third paragraph
  from the end of Book XIII is block 49 of 0 to 51.

## 9. The printed notes (step 9)

Written for a reader, and the checker passes them.

- `stands` on all twelve lenses, each under 70 words, with links into
  the copy printed here for every other place in the book.
- `sources`: the text first; no file names, no project words; what was
  not seen in full is marked so.
- `caveats`, five: what Auden's 1944 essay is and is not about; what was
  read only in snippets or is known from listeners' notes; the edition
  the course set, and `panted`; `ad te` and the stretch of the term
  apostrophe; what the counts count.
- "Plate" was in two captions, one note, one `auden` entry and one fact;
  all five now name the passage.
- `open` is left as the poet wrote it, with the examiner's entries
  added after it.

## 10. What was changed in reading.json

1. `loveVerbs.inTheBook` 29 to 23, and its `forms` rewritten for a reader.
2. `sections[4].what`: "the passage on the plate" to "the passage shown
   here".
3. Opening, Word: caption, why and one ground (us, not the heart; rest
   named twice).
4. Opening, Whole: caption (the place in Book IX; one sentence dropped),
   two grounds, the new fact `ringBetween`, and the source of the plan.
5. Opening, Address: "verse" to "words", and the ground's source.
6. Pears, Loved: caption (the list clause cut; no "plate"), why, one
   ground.
7. Pears, Word: caption and ground for Book II, chapter 7; the note on
   word 204.
8. Pears, Book: caption, why, and a new ground ("Squares and Oblongs").
9. Late, Word: caption, why and one note.
10. Late, Senses: caption, why and grounds rewritten on Book X alone.
11. Late, Verbs: caption, a new ground for the present tense, the ground
    for New Year Letter.
12. `auden[2]` (the 1948 essay added), `auden[3]` (no "plate"),
    `auden[6]` (Cochrane on the sheet), `auden[7]` (p. 26), and
    `checked` on these and on `view`.
13. `stands` on twelve lenses; `caveats`; `sources` rewritten; `open`
    added to.

## 11. Sources opened by the examiner

The copy printed on the site (all thirteen books, by the tools). Pusey's
Latin edition, Project Gutenberg no. 33849. Pusey's first edition of
the translation (Oxford, 1838), Internet Archive. The scans of
Forewords and Afterwords, The Dyer's Hand and Pearce's essay. Internet
Archive full-text snippets of Lectures on Shakespeare, Poets at Work,
New Year Letter, The Double Man and Miller's memoir, and the catalog
records of those books and of the Loeb Confessions. The image of the
course sheet. Lewis and Short at Perseus, each entry named in section
5. Webster 1828 (abroad, fault). Online Etymology Dictionary (fault,
grace, gratis, gratuitous). Silva Rhetoricae (anaphora, antithesis,
apostrophe, chiasmus, enumeratio). The King James Bible (Psalms 96:4,
145:3, 147:5; James 4:6; 1 Peter 5:5). Wikipedia (Augustine of Hippo;
Confessions (Augustine); Bibliography of Augustine of Hippo).

## 12. Still doubtful

- Four of Auden's things were seen only in snippets of scanned copies:
  the Othello lecture, "Squares and Oblongs", New Year Letter, and
  Miller's memoir. The pages agree with the books' own running heads,
  indexes or editor's notes as far as the snippets show them. A full
  copy would settle them.
- "Squares and Oblongs" is beyond research notes C and the scans. The
  lead decides whether it stays (see `open`).
- Which printing of Pusey the copy here follows at word 94 of the third
  plate was not traced.
- No Latin plate. The Latin is not among the originals, and bringing it
  in is not the examiner's to do. A pair beside the first or the third
  passage would show what three captions now have to say in words.
- The Thou-count is of capitalized forms. Two are known not to be said
  to God; the other 2,813 that do not open a sentence were not read one
  by one.
- The Oxford English Dictionary was not opened.
- The drawing: the artist's page was not looked at in a browser by the
  examiner. The facts the drawing reads kept their keys and shapes; the
  one new key is `ringBetween`.
