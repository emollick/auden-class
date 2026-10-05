# Notes for dante-paradiso ("The last canto")

Poet's notes for the examiner and the artist. The reading is built by a script
(scratchpad `paradiso/build_v2.py`); every mark points at a row and a word
number, and the checker's proof was read line by line. The last run of
`node build/tools/check-reading.mjs dante-paradiso` ends "no problems" and
"no warnings".

## What happened while I worked

Rule three (nothing made up; every lens lists its grounds; the piece has a
`view`) was added after I had started. A first version passed the checker but
had been drafted before I had re-read the rules. I then went through it as an
examiner would, sentence by sentence, and rebuilt it. What changed:

- The figure of plate 1 was named "oxymoron". Only one of the three pairs is
  strictly that, and none of the commentaries I read uses the word. It is now
  "paradox" (the
  Silva Rhetoricae definition fits all three; Sapegno, quoting Benvenuto, says
  each pair is contradictory "by nature" and true on the plane of faith;
  Hollander's note to line 1 speaks of Dante's "paradoxical expressions").
- Plate 2 ran from line 85. The rhyme of lines 85 and 87 begins at line 83, so
  the plate now runs from line 82 and the rhyme lens shows the whole triple.
- Sentences that were mine and stood on nothing were cut: that Bernard "takes"
  the pairs from the liturgy (the commentaries say only that such pairs were
  already a liturgical formula); that the pairs "are not riddles"; that the
  book image "answers" the Sibyl's leaves (it is now a fact in a word note:
  the earlier passage is twenty lines back, and one commentary sets the two
  together); that a stress on the ninth syllable is rare in general (my source
  says it only of one type of line, see below).
- "Always" and "every" were counted. The tenth syllable is stressed in all
  seven lines; "as a rule the fourth or the sixth" replaced "always", because
  the Treccani article says lines without either occur in the Comedy.
- Things attributed to Auden were re-read at the page and re-worded so that
  only two quotations remain in the piece (the one in the view, the one in the
  first item of the Auden list). Ground claims paraphrase him too.
- The Auden list lost an item on Purgatorio 17 (it belongs to the Purgatorio
  piece) and gained New Year Letter.

## The view

Auden left no essay on the Comedy (research notes C, section 1). Two things he
wrote bear on this canto and I read both in the scan of Forewords and
Afterwords (`research/auden/fa.txt`):

- "George Macdonald" (1954), p. 269, lines 12831-12840: dream literature has
  two dangers, incoherence and mechanical allegory; Dante, the master of the
  dream, has at once an inexhaustible flow of images and a logical and
  mathematical structure that dictates even the number of verses.
- Introduction to The Protestant Mystics (1964), p. 68, lines 3238-3244:
  Beatrice stays with Dante until the moment he turns to "the eternal
  fountain"; the Vision of Eros (defined at lines 2984-2988 as the revelation
  of the glory of one human being) is, for Dante, not the first rung of a long
  ladder; one step; Eros transfigured, not annihilated.

Page numbers. In this scan the number follows the text of its page (the essay
"George Macdonald" begins on p. 268 by the contents, and its first page lies
between the numbers 267 and 268; The Protestant Mystics begins on p. 49 and
its first numbered page is 50). So the passages are on pp. 269 and 68.
EXAMINER.md's warning about running heads at the top holds for The Dyer's
Hand, where the number stands in the head.

The scan drops most punctuation and prints "is" in capitals in the sentence I
quote; I take that for an italic and set it in lower case. This is in `open`.

The plates were chosen to show where the canto bears these two remarks out:
maker and creature in the prayer (plate 1), an image and then logic for one
thing (plate 2), the last line that the rhyme requires and the counts of the
whole poem (plate 3).

## Plate 1, "prayer": lines 1 to 9, with Wicksteed's prose

Why this passage. It is the opening of the canto the class learned by heart
(Pearce), the lead in pieces.json points at it, and three things can be seen
in nine lines: the three pairs of lines 1 and 2, the chain rhyme at work on
the words for maker and thing made, and what an English prose version keeps
and loses. The pair is Wicksteed's prose because Pearce says that was the
version the class wrote out; it is hosted as dante-temple.

Figure (paradox).
- The three pairs, contradictory by nature and true in faith; liturgical
  formula: Sapegno on 33.1-2; Singleton on 33.1-3; Bosco and Reggio on 33.1
  (three antitheses; the second pair "developed in the next two tercets";
  not a literary play on words); Chiavacci Leonardi on 33.1 (the antitheses
  "are a fact" in Christian faith); Hollander on 33.1. All read at the
  Dartmouth Dante Project, dante.dartmouth.edu (search by commentary, canto
  and line).
- Paradox: Silva Rhetoricae, rhetoric.byu.edu/Figures/P/paradox.htm. I also
  read its pages for oxymoron and antithesis before choosing.
- Lines 4 to 6 as the event the pairs point to: the lines themselves;
  Singleton (all three point to the Incarnation); the Temple Classics note to
  line 6.
- The third pair. A woman can be lowly and exalted without contradiction in
  everyday speech, so I did not write that no woman can be both things in
  each pair. The caption says what Sapegno says: by the measure of nature the
  terms of each pair contradict each other.

Rhyme.
- Rhyme groups counted by script from the hosted Italian (scratchpad
  `paradiso/facts.mjs`, `rhymes.mjs`): lines 1 and 3; 2, 4, 6; 5, 7, 9.
- Terza rima and Dante: Treccani, Vocabolario, "terzina" (used for the first
  time by Dante); Britannica, "terza rima" (first to use it for a long poem; a
  similar form had been used by the troubadours). The caption says "for a
  long poem", which both bear out.
- fattura, fattore: Treccani, Vocabolario, "fattura" sense 3 (the thing made,
  set against fattore, so a synonym of creatura; it cites these lines) and
  "fattore" (Latin factor, from facere). Enciclopedia Dantesca, "fattura"
  (the play fattore, fattura here and at Purgatorio 17.102).
- The link to Auden is his sentence on p. 68. The rhyme of maker with love is
  on the plate; that the two "are joined" by him is his sentence. I say no
  more than that.

Compare.
- Ties checked in the proof. The one I weighed longest is farsi and "become":
  Treccani, "fare²", gives Latin facere and, under sense 10, farsi as
  divenire. The remark that become "lets go" the verb inside fattore and
  fattura is a fact about the two words on the plate.
- The flower is the rose of the blessed: Treccani, "germinare", cites this
  very line and says so; the rose is at Paradiso 30.117 and 31.1.
- Auden on translation: The Dyer's Hand, "Writing", pp. 23-24, read in
  `dh.txt` lines 1470-1496. He names images, similes and metaphors as what can
  cross "to some degree". The three pairs of line 1 are not images; they cross
  because they do not depend on sound, which is the other half of his
  sentence. The caption says "what does not rest on the words themselves".
- The class: Pearce pp. 153-54, read in `pearce.txt` (in Pearce the number
  stands at the foot). Kind "auden" in the grounds because the claim is what
  Auden told the class, as the model does with Pearce.

## Plate 2, "book": lines 82 to 90, with Longfellow

Why this passage. It is the first thing Dante reports of the vision
(Chiavacci Leonardi on 85-87; Bosco and Reggio on 85-90), it is one of the
famous images of the poem, and it shows Auden's two things side by side: an
image (the bound book) and then the same thing in the terms of logic
(substance and accident). The rhyme does visible work. Longfellow is the pair
because his version goes line for line, so a reader with no Italian can
follow each row.

Figure (metaphor).
- Silva Rhetoricae, metaphor. The three book words: Treccani "legare¹" 2a
  (of books: to sew the sheets and give them a cover), "squadernare" 3 (to
  unsew a book into its quires; then a gloss of these very lines: created
  things gathered in unity, which in the universe are divided and scattered
  like the separate sheets of a volume), "quaderno" 2a (four sheets folded in
  two, set one inside another and sewn: eight leaves, sixteen pages),
  "volume". Enciclopedia Dantesca, "squadernarsi" (used once; "dispersed and
  fragmentary like the separate quires of a book") and "volume".
- I did not call squadernarsi a coinage. The Enciclopedia Dantesca's article
  "neologismi" does not list it.

Word.
- s'interna: Treccani "internare" (from interno; sense 2a, poetic, "to be
  contained within", citing this line). Enciclopedia Dantesca, "internarsi":
  used twice in rhyme; Landino and Tommaseo hear "makes itself three";
  Casini and Barbi reject it. The note gives the second sense as disputed.
- volume: Lewis and Short, "volumen" (a thing rolled or wound up; hence a
  roll of writing, a book; from volvo), at Perseus. Treccani "volume"
  (etymology; sense 3, Dante's use for the turning heavens; sense 4, the roll
  and so the book). Enciclopedia Dantesca "volume": the heavens at Paradiso
  23.112 and 28.14; Virgil's book at Inferno 1.84. The rhyme with lume in
  Inferno 1 (lines 80, 82, 84) is in the hosted text.
- The Sibyl's leaves: Paradiso 33.64-66 in the hosted text; the Temple
  Classics note to 65-66; Chiavacci Leonardi sets the two passages together.
- sustanze, accidenti, costume: Singleton on 88-90 (a substance subsists in
  itself; an accident subsists as a quality in a substance; "relationships"),
  Sapegno on 88 (the old commentators read costume as natural workings; he
  takes it as mutual relations), Chiavacci Leonardi on 88 (their mutual
  relation), Bosco and Reggio on 88-90. Longfellow's word follows the old
  reading.
- conflati: Lewis and Short, "conflo": to blow together; I, of fire, to
  kindle; II, by metonymy of cause for effect, to melt and fuse metals.
  Treccani "conflato".
- semplice: Treccani "semplice¹": Latin simplex, from a root for "one" and a
  root found in plicare, to fold; sense 1, made of one element; sense 4a,
  "only, nothing but", for which it cites lines 88-90. Singleton ("the
  vaguest glimpse") and Bosco and Reggio ("barely a glimmer of the truth")
  read it so; Longfellow and Wicksteed give one simple light and one simple
  flame. The caption gives both readings and decides nothing.
- That lines 88-90 say again in philosophical terms what 85-87 say in an
  image is Bosco and Reggio's note. They also say the tercet renews the
  statement that his words fall short, which is why the caption ends on line
  55 (Paradiso 33.55-57, read in the hosted text).

Rhyme.
- The triple of lines 83, 85, 87 and that of 86, 88, 90: counted by script.
- "Verbs of opposite sense": Treccani's own gloss of these lines sets
  gathered in unity against divided and scattered.
- That rhyme makes the line end stand out: Baum, The Principles of English
  Versification, chapter 3 (file lines 1790-1792).
- lume inside volume, and un before each, are letters on the plate. I say
  that the rhyme "has" lume inside volume and nothing about what Dante meant
  by it.
- A thing I saw and left out of the caption: every time volume is a rhyme
  word in the poem (Inferno 1, Paradiso 15, 28 and 33, by my script) one of
  its rhymes is lume. I checked Inferno 1 by eye and not the other two.

## Plate 3, "end": lines 139 to 145, with Longfellow

Why this passage. It is the end of the poem and of what the class wrote out;
the leads point at the last line; and four things can be shown: a line whose
stresses meet where it says his power gave out, a sentence that keeps its
subject for the last line, the one line the rhyme scheme adds, and the
counts of the whole poem.

Beat. The scansion is mine, by the rules, and nobody else's that I could
find. Rules read: Treccani, Enciclopedia dell'Italiano, "endecasillabo"
(C. Ciociola, 2010: eleven metrical syllables, obligatory stress on the
tenth; in the prevailing type a main stress on the fourth or the sixth;
forms without either are found "also in Dante's Comedy"); Treccani,
Vocabolario, "sinalefe", "dialefe", "sineresi". Line by line, with the other
way of hearing each doubtful place:

- 139: stresses 3, 6, 8, 10. The second syllable (non) can take the first
  stress instead of the third.
- 140: stresses 3, 6, 10. The first stress can be heard on the second
  syllable; I put it on che, as in the single word sennonché.
- 141: stresses 4, 8, 10, with da and un counted apart and sua as one
  syllable. The other count (da and un run together, sua as two syllables)
  gives 3, 6, 8, 10. I chose the first because this edition prints a
  diaeresis where it counts two syllables (süa four times and süo three
  times elsewhere in the poem) and prints none here, and because Inferno
  13.32 needs da and un apart.
- 142: stresses 2, 6, 7, 9, 10. Fantasia counts three syllables inside the
  line. Qui (7) can be heard without stress. The ninth and tenth are not in
  doubt: mancò is stressed on its last syllable and possa on its first.
- 143: stresses 2, 4, 8, 10; disio is three syllables and its last runs into
  the two little words that follow. Mio (6) can take a light stress.
- 144: stresses 2, 4, 8, 10. Sì can be stressed, which would set stresses on
  1 and 2; igualmente has a lighter stress on its second syllable (7).
- 145: stresses 2, 4, 6, 8, 10; two vowels run together twice.

The caption leans only on the end of line 142 and on line 145.

What the caption says about stresses, and where it stands:
- Stresses tend to fall every two syllables in Italian: Luca Zuliani, "Sulla
  cesura dell'endecasillabo" (2021), p. 173, read in the PDF at
  examenapium.it/cs/biblio/Zuliani2021.pdf. On the same page he says that a
  stress struck next to another puts emphasis on the word.
- Verse tends to avoid two in a row: Bruno Germano, Il solfeggio dei versi
  (Fondazione Natalino Sapegno, 2018), p. 24, at
  sapegno.it/wp-content/uploads/2018/12/Solfeggio-in-versi.pdf. On p. 27 he
  adds that a further stress seldom falls on the ninth syllable, for the same
  reason, but he says it of lines whose main stresses are the fourth and the
  tenth; line 142 has the sixth and the tenth. So the caption does not say
  that a ninth-syllable stress is rare.
- A list of lines with stresses on the ninth and tenth (one from Inferno 6
  built like this one, a verb stressed on its last syllable before the final
  word): Luca Storti, "Il ritmo dell'endecasillabo" (2013), copy at
  examenapium.it/cs/biblio/Storti2013.pdf. It shows the pattern has a name in
  Italian metrics (ribattuta) and occurs in Dante; it says nothing of its
  effect.
- Stresses together slow a line: this is BRIEF.md's own example of a fact of
  the craft, and Baum, chapter 5 (file lines 6972-6984), says a line
  overweighted with stress is markedly retarded. Baum writes of English
  verse. I found no Italian handbook that says it outright; this is in
  `open`.
- What line 142 says: Chiavacci Leonardi on 33.142 (power fails the fantasy,
  that is, the possibility of seeing; the phrase says both that he saw no
  more and that he could tell no more) and Singleton on 33.142 (fantasy is
  the faculty that receives images). The caption says "his power to see gave
  out".

Sentence.
- Singleton on 33.143: the subject of volgeva is withheld until the final
  line, where it is love. Bosco and Reggio and Chiavacci Leonardi on 143-145
  read the sentence the same way (love turns his desire and will).
- Singleton adds that English versions which keep "stars" as the last word
  must make the sentence passive. Wicksteed does (dante-temple/par-33, block
  47). Longfellow, on the plate, keeps Dante's order and still ends on stars.
- Periodic sentence: Silva Rhetoricae, rhetoric.byu.edu/Figures/P/period.htm
  (the site has no page under "hirmus"; this is the page). Anastrophe, for a
  verb set before its subject: Figures/A/anastrophe.htm.
- "No verb has Dante for its subject" was counted: the seven verbs of lines
  139 to 145 have as subjects his wings, his mind, its wish, power, love, a
  wheel, and love again.
- Auden: "K.'s Quest" (1946), pp. 47-48, as copied in research notes C
  (section 1 and appendix H12). The link is his: the vision is not attained
  by any act of the dreamer. I do not say Dante built the sentence to show
  this; the caption sets the two facts side by side.
- The meaning of disio and velle is disputed (Singleton: desire of the
  intellect, and will; Chiavacci Leonardi: natural desire and deliberate
  will). The reading says only desire and will.

Rhyme.
- The closing line of a chain of tercets: Treccani "terzina" (the series
  closes with a line that rhymes with the second line of the last tercet).
- velle: Treccani "velle" (the Latin infinitive used by old poets for the
  will; cites these lines); Enciclopedia Dantesca "velle" (twice in the
  Paradiso, both times in rhyme with stelle). Counted: Paradiso 4.25 and
  33.143.
- mossa and move: Treccani "muovere".
- Auden's remark about the number of verses is general. That the single
  closing line is an instance is my application; the caption states his
  remark and the fact about the rhyme as two things. This is in `open`.

Shape.
- All counts by script from the hosted Italian (`paradiso/facts.mjs`):
  100 cantos; 4,720, 4,755 and 4,758 lines; 14,233 in all; every canto is a
  run of three-line groups and one closing line; shortest 115 lines (Inferno
  6 and 11), longest 160 (Purgatorio 32); canto 33 has 145 lines, 48 groups
  of three and 49 rhyme sounds. The builder asserts these again.
- 1 + 33 + 33 + 33: Britannica, "The Divine Comedy" (33 cantos in each part,
  plus one in the Inferno that introduces the whole poem).
- The end of the Purgatorio (33.136-141), the last lines of the three parts
  (Inferno 34.139, Purgatorio 33.145, Paradiso 33.145) and the first line of
  the Paradiso were read in the hosted text.

## The Auden list: where each was read

1. "K.'s Quest": research notes C, section 1 and appendix H12 (the passage is
   copied there from search snippets of a restricted scan). I saw the same
   sentences in snippets, never the page whole. In `open`.
2. New Year Letter, Part 1: only in research notes C (appendix, marked
   verified there, with the pages of the 1945 Collected Poetry). In `open`.
3. Pearce pp. 153-54: `pearce.txt`. The other witnesses on the number of
   cantos: research notes A, section 3.1.
4. "Writing", The Dyer's Hand pp. 23-24: `dh.txt` lines 1470-1496.
5. "D. H. Lawrence", p. 277: `dh.txt` lines 13096-13109 (the head of p. 278
   follows the passage).
6. "Making, Knowing and Judging", pp. 43-44: `dh.txt` lines 2283-2311 (the
   head of p. 44 falls inside the passage); the date in the note at line
   1705.
7. The Nation, 24 December 1938: the Internet Archive's text of the issue
   (item sim_nation_1938-12-24_147_3834); the page number 689 is from
   webfacts.md, not from a page image I saw.

## Looked for and not found

- A commentary or study that scans lines 139 to 145 or remarks on the
  rhythm of line 142. I read the notes to 142 and to 143-145 in about ten
  commentaries at the Dartmouth Dante Project and searched the web.
- An Italian handbook that says stresses side by side slow a line.
- A general statement that a ninth-syllable stress is rare (see above).
- Anything by Auden on this canto beyond the sentence about the eternal
  fountain (Forewords and Afterwords p. 68) and what Pearce reports.
- A scan of "K.'s Quest" or of New Year Letter that I could read whole.
- A dictionary of early Italian with a fourteenth-century example of legare
  said of a book. The sense in the reading is the Treccani dictionary's, and
  the commentaries (Chiavacci Leonardi on 85-87, the Enciclopedia Dantesca
  under "volume" and "squadernarsi") read the line as quires bound into one
  volume, so the book sense of the three words together is not in doubt.

## Passages and lenses set aside

- Paradiso 33.133-138, the geometer and the circle, with s'indova, which the
  Enciclopedia Dantesca lists as a word Dante made. It answers the lead on
  coined words, but plate 3 already has four lenses and the simile needs a
  plate of its own.
- Paradiso 1.70-72 (trasumanar, another coined word), 3.85-87 and 17.55-60:
  well known, but the piece is about the canto the class learned.
- A compare lens on plate 2 (Longfellow's "in leaves" for the verb of line
  87, "operations" for costume): it would have repeated the point of plate 1.
  The two facts are in the word notes.
- Chaucer's version of the prayer in the Second Nun's Tale (Singleton
  mentions it): a second English beside Wicksteed would crowd the plate.
- Auden's use of Purgatorio 17: it belongs to the Purgatorio piece.

## For the artist

- Plate 1 figure: three pairs, tags pair-1, pair-2, pair-3; draw "pair".
- Plate 2 figure: tag "book" marks the three bookbinder's terms, tag "meant"
  what each is said of (the things of the universe, love, the depth of the
  light); draw "map".
- Plate 3 sentence: every subject is tagged "subject" and every verb "verb";
  the thing to bring out is the last statement, rows 47.1 to 48.0, where the
  order is verb, object, comparison, subject.
- Plate 3 shape: `facts` holds the line count of each of the 100 cantos, the
  table of how many cantos have each length, and the last word of each part.

## Taken out of the list of what Auden said

(Moved here by the lead from critic.md, section 3, on 3 October: the critic took these three entries out of the list and could not write this file.)


The list had seven entries and now has four. Each of the four bears on
something the page shows: "K.'s Quest" (the Sentence tab of the third
passage leans on it), *New Year Letter* (his portrait of Dante, printed
in 1941, the year of the course), Pearce on the examination (the work
as he taught it; the English tab leans on it), and "Writing" (the
English tab leans on it).

The three taken out each name Dante or the *Paradiso* once, in passing,
in an essay on something else. No caption, `grounds` item or `stands`
leans on any of them (I searched the reading for each source). None of
them was followed by an entry that began "In the same book", so no
other entry needed a name put back. None has a `quote`.

- "D. H. Lawrence": one sentence at the opening of an essay on
  Lawrence, where Dante is the example of an artist whose beliefs his
  readers have already met. Of the three this is the one the page
  could want back, since it says how Auden thought Dante is read; but
  it bears on no passage shown, and two thirds of the entry are about
  artists and apostles.
- "Making, Knowing and Judging": a canto of the *Paradiso* is one of
  his examples of what lies next to what in a young poet's memory. It
  says nothing of the poem.
- The *Nation* essay of 1938: the *Paradiso* is named in one clause,
  beside *Brave New World*, as a utopia; the rest of the entry is about
  utopias and morality. It is from 1938, not 1941.

**Where they are.** CRITIC.md says to move such entries to the end of
`notes.md`. The rules of this launch let me write only `reading.json`,
`critic.md` and `shots/`, so I did not open `notes.md` for writing.
The three stand here whole (`source` in bold, then `says`, then
`checked`), copied by a script from the reading before the edit, ready
for the lead to move under the same heading in `notes.md`. The titles
in them are bare, as they were.

- **“D. H. Lawrence,” in The Dyer’s Hand (1962), p. 277**
  Writing on D. H. Lawrence, Auden ranks the artist below the apostle, the
  bringer of a message, in what each matters to the world. An artist has
  beliefs like anyone, he goes on, but they are seldom his own invention,
  and readers, knowing this, judge the work apart from them. Dante is the
  example: readers go to him for the poetry, since they have met the
  theology in other places.
  Checked: read in the scan of The Dyer's Hand, research/auden/dh.txt, lines
  13096-13109; the head of page 278 follows at line 13115

- **“Making, Knowing and Judging,” in The Dyer’s Hand (1962), pp. 43–44**
  In his inaugural lecture at Oxford in 1956 Auden describes what a literary
  historian would find if he could look into a young poet’s memory. Books
  are stored there as experiences among other experiences, and a book’s
  nearest neighbor is seldom another book. One of his examples is a canto of
  the Paradiso lodged beside the memory of an unusually good dinner.
  Checked: read in the scan of The Dyer's Hand, research/auden/dh.txt, lines
  2283-2311 (the head of page 44 stands at line 2295); the lecture's date,
  11 June 1956, is in the note at line 1705

- **“Living Philosophies, VII: Morality in an Age of Change,” The Nation, 24 December 1938, p. 689**
  In 1938 Auden named Dante’s Paradiso beside Huxley’s Brave New World as a
  utopia. Utopias do not move, he wrote, so all they can picture is natural
  good or natural evil. There can be morality only where the world goes on
  changing and new choices keep arriving.
  Checked: read in the Internet Archive's text of the issue (item
  sim_nation_1938-12-24_147_3834); the page number is from
  remake/research/webfacts.md. Examiner: in that text the paragraph stands
  in the left column of the page headed 689


## Words marked in the small notes by the lead (3 October 2026, 10:07 UTC)

After the sixth mending of the kit a word between asterisks in a remark or a word's note stands upright in the italic. The lead marked the words these notes name as words (words of the passage, words of the original, Latin and Old English forms) and the titles in them. No wording was changed. Checker after: no problems.

## Phrases loosened that ran close to Auden's or Pearce's wording (3 October 2026, 13:11 UTC)

The lead, after the piece was through every stage. A test of every
printed paragraph of every piece against the four scans
(`python3 build/tools/runs-sweep.py`, which prints the page's own words
and never the scan's) found sentences here that shared a run of five or
more words with Auden's text or with Pearce's memoir. Each was said
again in other words; no claim was added or taken away. The edits, 2
of them, are in `lead/edits-runs.json`, and the reading before them is
`lead/before-runs.json`. The runs that are left are small words ("at
the end of the") or the words of the work itself. The checker after the
change ends as it did before.

## The lead in the last pass (3 October, 16:08 UTC)

The hosted books now label a canto by its number, so the place line
beside each passage reads "Paradiso 33", not the Roman figure (item 5
of the last pass: one way for the three Dante pages). Nothing in the
reading changed. The record is `review/remake/last-pass/RECORD.md`.

The snippet test, the same day (16:09 UTC): one run, five words in the
last sentence of the Sentence caption of the third passage, with
Auden's essay in *The Kafka Problem*. Loosened, no change of claim
(`lead/edits-grams.json`, before in `lead/before-grams.json`; checker
clean). The record is `review/remake/grams/LEAD.md`.

A dictionary's headword after "under" in the folded notes and the sources is in
italics now wherever it stood bare in lower case, or is a word of another
language (item 2 of the last pass, 16:20 UTC; with it, a dictionary's name set as
the rest of the site sets it). Type only: no word changed. Edits in
`lead/edits-headwords.json`, the reading before in
`lead/before-headwords.json`; checker as before. The record is `review/remake/last-pass/RECORD.md`.

## The lead in the last pass: the measure's wording and the Word tab (3 October, 18:06 UTC)

One wording for the measure of a line, after Ariel's song, from the reader who went through every Beat tab (`review/remake/last-pass/measure/`; the lead's amendments are in `lead-apply.py` there, and the reasons in `review/remake/last-pass/RECORD.md`, item 1). A measure of stresses is named by its beats, by its syllables where the count matters, and by "the line beginning off the beat" or "on a beat". In verse measured by count an accent is a place the count fixes and a stress is what the voice does. "Light syllable", "weak", "the pattern", "the meter" and "scanned" give way to "unstressed", "where the measure has no beat", "the measure" and "marked".

Changed here: `end`, tab Measure (was Beat): meterName, caption. The edits: `lead/edits-measure.json`; the reading before: `lead/before-measure.json`. The checker says what it said before. No mark changed, and the new sentences were held against the five scans: no run of five.

The tab is named Measure, as on the other two Dante pages.

## The lead in the last pass: one wording for each figure (3 October, 19:55 UTC)

Each Figure tab says in one line under the figure’s name what the figure is. Laid side by
side, the 82 tabs gave the 17 figures that stand on more than one page a different line
on nearly every page. Each figure now has one line, with a tab’s own tail after “; here”;
anaphora, epistrophe, anadiplosis, parallelism and asyndeton keep one sentence whose number
and unit are fitted to the passage. No name, mark, caption or claim changed in this step.
Why and how: `review/remake/last-pass/RECORD.md`, “One wording for each figure”; the table
of lines is `review/remake/last-pass/figures/lead/lead_lists.py`.

Lines changed here (2):

- `plates[0].lenses[0].plain`, the plate `prayer`, the tab Figure (paradox):
  was “a statement that contradicts itself on its face and is true all the same”;
  now “a statement that contradicts itself on the surface and is still meant as true”.
- `plates[1].lenses[0].plain`, the plate `book`, the tab Figure (metaphor):
  was “a comparison made by calling one thing by the name of another”;
  now “one thing spoken of as another”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.
