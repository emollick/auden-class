# Examination of "rimbaud"

Examiner started 2026-10-03 05:24 UTC (examiner.txt). Result: **mended**. Three
passages and twelve tabs stand, none removed. Words of the works are pointed at by
row and word number; single words are named where the point needs them.

`reading.json` was changed by small exact edits only. The poet's builder script in
the scratchpad (rimbaud-poet/build2.py) would undo these mends if it were run again.

## 1. The proof

`node build/tools/check-reading.mjs rimbaud` at the start: no problems, no warnings,
printed notes fit to print. Every mark was read against the words it lands on, in the
proof and in `node build/tools/words.mjs` for the three passages (rimbaud-fr/s5 rows
16.0 to 18.0; rows 37.0 and 38.0 to 38.3; rimbaud-fr/s9 rows 3.0 words 31 to 80, 4.0
and 6.0; and the Dial's English beside them).

One mark moved. Row 18.0 word 22 is two words joined by a dash (the proof lists it as
22.1 and 22.2). The gloss in "Innocence" is on the first of them only, so its mark is
now `[22.1, 22.1]`. No other mark on the three passages lands on a dash-joined word.

## 2. The ear

Scanned before the poet's marks were looked at, by the rules in Kastner, chapter 2
(pp. 4–5: a mute e at the end of a line is never counted; a mute e not followed by
-s or -nt is elided before a vowel).

- Row 38.0: five. The mute e of word 0 runs into word 1; the last e is not counted.
- Row 38.1: five. Word 0 can carry its own accent with a pause after it. This is a
  judgment of the ear, and the caveats say so.
- Row 38.2: five. A reader may also lean on word 2. Nothing leans on it.
- Row 38.3: three.

The poet's marks agree, and the stated measure (five counted syllables, the accent on
the last; the fourth line three) is the measure of the stanza.

The rest of the poem was scanned as well, because the caption needed it (blocks 39 to
43 of rimbaud-fr/s5). Rows 39.0 to 39.3 count five each. Rows 40.0 to 40.3 count five
each (in 40.3 the mute e of word 1 stands before a consonant and is counted). Rows
41.0, 41.1 and 41.3 count five; row 41.2 counts four or five according to how its two
nouns are said. Rows 42.0 and 42.1 count five, row 42.2 three, row 42.3 four. Block 43
repeats the stanza of the plate. So the fourth line has five syllables in the second,
third and fourth stanzas, and the fifth stanza has two short lines as this book prints
it. In the printing of 1886 every line of the poem counts five.

## 3. The terms

- Asyndeton ("List"): Littré under *asyndète* (a kind of ellipsis that cuts away the
  joining conjunctions; a synonym of *disjonction*) and *disjonction*, sense 2 (the
  conjunctions are dropped to gain speed). Row 16.0 has no *et* (counted: none). The
  six items and their boundaries are as marked. True.
- Anaphora ("Figure"): Littré under *anaphore* (the same word repeated at the head of
  sentences or of parts of sentences). Three sentences begin at words 31, 42 and 57 of
  row 3.0 with the same word; inside them one word comes three times and another four
  times. True.
- Past definite, imperfect, past indefinite ("Tense", "Time"): Noël and Chapsal
  no. 118 (pp. 31–32) and nos. 480 and 481 (pp. 146–47) say what the reading says.
  The verbs are in the tenses claimed, by their endings. One form (row 18.0 word 1) is
  the same in the present and the past definite; this is now in the caveats.
- Masculine and feminine rhyme ("Rhyme"): Kastner, chapter 3, p. 39. True of the
  three line-ends.

## 4. The words

Every Littré entry the reading names was fetched again from littre.org and read:
hallucination, franchement, sophisme, magique, sacré, désordre, oisif, asyndète,
disjonction, salon, calèche, vaudeville, épouvante, félicité, bête, chenille,
représenter, limbes, taupe, vieillerie, bouffon (noun and adjective), égaré,
égarement, possible, expression, retrouver, éternité, mêlé, étude, saluer, mage,
anaphore, rugueux, dispenser, rendu, sol (second entry), paysan, étreindre, devoir
(the noun), morale, embrasser, emporter, aller, maudit. The dictionary is of 1863–77,
so each sense was current when the book was written.

Found and mended:

- *désordre* was glossed from sense 1 (want of order). Sense 5 gives the very phrase
  of row 18.0 (the word with "of mind"): the state of a mind ill regulated. Gloss,
  note, caption and ground now give sense 5; the note keeps sense 1 for the Dial's
  word.
- *sacré* was glossed from sense 2 (set apart for a spiritual use, of persons and
  things in a church). The sense that fits a thing found sacred is 8: said of things
  that deserve to be venerated and never violated. Gloss, note, caption and ground
  changed.
- *bête*: the reading said "the entry adds that the beast lacks reason." It is the
  first example printed under sense 1, not part of the definition. Caption, note and
  ground now say so.
- *limbes*: the reason called limbo "the place of the unbaptized." Littré says the
  just of the Old Testament waited there and that *some* theologians put unbaptized
  children there. The reason now keeps "some."

The other glosses say what the entries say. *mage* sense 3 is marked by Littré as out
of use; *dispenser* sense 4 has the fast as its example; *devoir* is defined by law or
*morale*, and *morale* sense 1 by duties; *rendu* sense 4 is "brought back to," of
persons; *sol* sense 2 is the top layer of farmland.

## 5. Auden

Read in the scans, at the pages given:

- The Enchafèd Flood (Vintage Books, 1967; page number at the foot of the page):
  pp. 18, 25, 94, 96–97, 100–102, 108, 146–50. The view (pp. 147–49) is his view of
  this book: he quotes rows 16.0 to 18.0 in French on pp. 148–49 as holding for all
  his Romantic artists, and rows 4.0 and 6.0 of "Adieu" in English on pp. 149–50. The
  quotation in `view` is exact and has 25 words (p. 148). The quotation in `auden[0]`
  is exact and has 20 words (p. 149). These are the piece's two quotations.
- The Dyer's Hand: pp. 53–54 (the lecture of 1956) and p. 297.
- Collected Poetry (1945), in the poet's scan: pp. 121–22 (the sonnet) and 269–70
  (New Year Letter).
- "Heretics" (1939), the introduction to Baudelaire (1947) and the note to line 195
  of New Year Letter: only in remake/research/C_auden_on_works.md (lines 495–507,
  1059, 1120, 1239). Not opened. The reading says so in `checked`, `sources`,
  `caveats` and `open`.

Found and mended:

- "Innocence" cited p. 147 for a sentence whose subject is set on p. 146. The section
  "The Artist as Don Quixote" opens on p. 146 by naming the Romantic identification of
  sin with consciousness; the question about a longing for innocence (p. 147) refers
  back to it. The caption and ground now give both, at pp. 146–47, and report the
  question as a question. This is closer to the passage (beasts without reason,
  limbo, sleep) than the bare sentence was.
- Several paraphrases ran so close to Auden's wording that they were quotation without
  marks, which would have taken the piece past two quotations: in `auden[1]` (three
  sentences), `auden[5]` (both sentences, known only from the notes), `auden[6]`,
  `auden[7]`, one clause of `view.says`, and the ground claims that repeated the
  sentence quoted in `view`. All are now in other words.
- `auden[0]`: he asks his readers to remember the courage of the voyagers, not "the
  courage of those voyages."
- `auden[3]`: the sonnet says the drinks were bought by a weak friend who was a lyric
  poet, and that he was estranged from the lyre and from weakness. The paraphrase had
  dropped the friend and made it "from poetry."
- `auden[4]`: the hands are red, not "reddened."
- `auden[2]`: "the exceptional man" is now "exceptional" (his word is hero).
- "Time": the sentence about Auden now says what he says (the book is where Rimbaud
  spoke of himself before he took leave of art).
- `auden[0]` and `auden[4]` trimmed to under 110 words after these changes.

`auden[0]`'s "outcast son of Abraham in Genesis" is Auden's own account (pp. 96–97).

## 6. The reason and its ground, tab by tab

**Tense** (first passage). Each sentence stands: the marks; the grammar; the first
line of the chapter (rimbaud-fr/s5 block 0); Auden p. 148. Passed. Only the ground
that repeated Auden's sentence was reworded.

**List.** Stands as written. The English renderings of row 16.0 ran to seven and nine
words and were nearly the Dial's. The anchor is now shown by the five French words
that carry it (row 16.0 words 10 to 14), and the other items are in shorter words of
the page's own.

**Judgment.** The caption sorted the six words into "one kind judges" and "the other
keeps what he held then," and the reason said the recorder and the man recorded
"share one sentence." No ground carries the sorting: only row 18.0 says outright that
he *found* the disorder sacred, and he may have called it disorder then as well.
What stands is kept: the three nouns are, by Littré, words for something gone wrong;
beside them stand *sincerely*, *of magic*, *worthy of veneration*; the chapter's
first line calls the story one of his follies (block 0, a ground added); block 46;
Auden pp. 148–49. The plate ground no longer asserts two "kinds."

**Innocence.** Stands, with the mends of sections 4 and 5. The link to "Night in
Hell" is two things the book says (rimbaud-fr/s3 block 3; row 18.0) set side by side;
the caption draws no conclusion from them.

**Count** (second passage). The fault of the piece. The caption and its reason set
the short unrhymed last line beside a note in Kastner (chapter 12, p. 309) on a short
rimeless line that closes each section of certain Old French epics, and beside
Rimbaud's remark (block 15) that old poetic stuff had a share in his alchemy. No
source says the stanza has anything to do with the epics, and the poet's own notes
grant it. The parallel also fails on the facts: the line lacks a rhyme in the 1886
printing too, where it has five syllables. Cut, with its two grounds and its line in
`stands` and `sources`. Nothing was put in its place that the sources do not say. The
caption now gives: the count (plate); that the fourth line of each of the next three
stanzas has five (counted, section 2); that the line has five in the printing of
1886; and what Rimbaud says in this chapter of his verse (block 4: he prided himself
on inventing a poetic language with instinctive rhythms), with the fact that this is
one of the seven poems he gives. The caption does not say the short line is meant.
The 1886 poem is on pp. 85–86, not p. 86 (the stanza opens it on p. 85 and closes it
on p. 86); corrected in the ground, `stands` and `sources`.

**Rhyme.** Stands. "Only the first and third rhyme" is now "can rhyme together,"
which is what the rule says. The pair is an ordinary rhyme on a bare ending; Kastner
(p. 48) says a richer rhyme is almost compulsory for so common an ending. The caption
does not go into it; noted in `open`.

**Frame.** "Before it the prose has passed judgment" and the close of the reason
("the man who records judges first, and the words of the man he was come second")
stood on nothing. Cut. The true reason was half there: the word in row 37.0 word 5
means a look and a wording, and the sentence ends on a colon. Noël and Chapsal,
nos. 670 and 672 (p. 203), say a colon follows a clause that announces a quotation and
precedes one that clears up what went before. That ground was opened and added, and
the caption and reason now end on it and say no more. A ground was added for the
stanza being his own.

**Chapter.** Recounted with a script of my own over site/data/texts/rimbaud-fr/s5.json
using the site's word-splitter: 23 prose paragraphs, 663 words; 7 poems, 113 lines,
518 words; 2 titles, 7 words; 1188 in all; the same for each run of prose and each
poem. The three colons are at the ends of blocks 19, 37 and 49. The first edition on
French Wikisource has six rules; two of them (after the sixth and seventh poems) were
not in the facts and are now in their `note`. The reason's close ("the thing made in
the experiment set inside its record, Auden's two parts") is now a plain statement of
what the Dial's translator and Auden say. The translator's sentence was reworded so
that it is not his nine words in a row.

**Figure** (third passage). Stands as written.

**Time.** Stands; one sentence about Auden mended (section 5).

**Sentence.** Stands. The main clause does begin at the fourteenth word (row 4.0
word 13). "Bad Blood" (rimbaud-fr/s2 block 3) says what is claimed.

**English.** Stands. The English Auden quotes (pp. 149–50) has the magus and the
duty; the Dial's other renderings are at rimbaud/s8 block 2 and rimbaud/s2 block 22.

## 7. The prose

American English, present tense, no dash inside a sentence, no stock words, no
rhetorical question, no "we." The checker's lint is silent. The contrasts that remain
("not men of action," "and not, as Coleridge did") are Auden's own and are reported
as his.

## 8. The rules

No phrase from the book in a caption runs past six words (the longest are five). The
English that stands for the stanza is the page's own paraphrase, in reported speech;
the Dial prints the poems in French. Two quotations from work in copyright, of 25 and
20 words. The passages are short enough for a plate.

## 9. The printed notes

`view.source`, each `auden[].source`, `sources`, each `stands` and the five `caveats`
were read as a reader would read them. Changed: Kastner's entry (chapter 12 out;
chapter 3, p. 39); the 1886 pages; Noël and Chapsal's entry (the colon added); Auden's
pages (146 added); `stands` for "Count," "Judgment," "Innocence" and "Frame"; the
fifth caveat, which now warns that the form in row 18.0 word 1 could be a present.
In the facts of "Chapter" the keys a drawing may print hold no block numbers or file
names; `blocks`, `note` and `counted` are working keys that the build takes out.
site/js/pieces/rimbaud.js did not exist during the examination, and no key was
renamed.

## Sources read by the examiner

- The hosted texts: rimbaud-fr and rimbaud, parts s2, s3, s5, s8, s9.
- Auden: the scans named in section 5; remake/research/C_auden_on_works.md, section 19
  and appendix.
- Émile Littré, Dictionnaire de la langue française, at littre.org (fetched 2026-10-03).
- Noël and Chapsal, Nouvelle grammaire française (Philadelphia: Moss, 1863), Internet
  Archive, nouvellegrammair00noe: nos. 118, 480–481, 670–672.
- L. E. Kastner, A History of French Versification (Oxford, 1903), the poet's copy:
  pp. 1–2, 4–5, 13, 39–41, 48, 151–52, 309.
- French Wikisource: Une saison en enfer (1873), "Alchimie du verbe" and "Adieu";
  Les Illuminations (1886), pp. 85 and 86, both marked as validated.
- Encyclopaedia Britannica (1911), "Rimbaud": born 20 October 1854.
- The Dial, July 1920: the translator's note, p. 2, in the scan's text.
- remake/research/D_texts.md, for the two hosted texts.

## Still doubtful

- Whether the short fourth line is meant. The page does not say it is.
- The fifth stanza of the poem also has short lines in this book (rows 42.2, 42.3);
  the page does not speak of them. In `open`.
- Row 18.0 word 1 could be a present tense. In the caveats.
- "Heretics," the Baudelaire introduction and the note to line 195: not seen.
- The 1950 first edition of The Enchafèd Flood and the Schwartz translation: not
  seen. Whose English Auden quotes on pp. 149–50 is not known.
- No record of the 1941 class on Rimbaud.
- The Dial's text is a machine reading of a scan.

## The checker at the end

`node build/tools/check-reading.mjs rimbaud --print`, last three lines:

    no problems
    no warnings
    the printed notes are fit to print
