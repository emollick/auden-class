# Don Giovanni: the examiner's record

Begun 3 October 2026, 09:41 UTC, and finished the same day. One examiner
(`examiner.txt`). This is a working record and is not printed.

Words of the libretto and of the English beside it are pointed at by row
and word number, as the proof prints them. Where one Italian word is
named, it is a word the reading glosses. Auden is paraphrased; no
sentence of his is copied here.

Verdict: **mended**. The three passages stand (the count and the close
of Leporello's catalogue, and the duet of the Don and Zerlina), and so
do all twelve tabs. No tab was removed. Two tabs were rebuilt because
what they said was not so (the English tab of the second passage, the
Voices tab of the duet). All twelve reasons (`why`) were rewritten so
that each clause stands on a mark, a line, a source or a page of Auden;
ten of the twelve captions were changed, four of them only by a word or
a sentence.
The notes the page prints were rewritten for a reader. The changes are
numbered under "What I changed", and the numbers are used below.

## 1. The proof

`node build/tools/check-reading.mjs don-giovanni`, as I found the piece:
no problems, no warnings, the printed notes fit to print. So the checker
had nothing to say, and everything below was found by reading.

I read every line of the proof against the rows. Each mark sits on the
words it is meant for: the beats and the syllables left out of the
count in eight rows, the six remarks, the rhyme ends and their tails in
three tabs, the one thread, the seven parts of the figure, the 38
glossed places (5, 13 and 20), the spans of the Voices tab (14 as I
found it, 16 now), the 22 ties (6, 7 and 9), and the rows set beside
each passage.

The checker lets a caption run to 120 words. The brief says 110. I
counted each caption myself, with the marks for bold taken out, and
held every one to 110 (the longest, the Figure tab and the Voices tab,
are 110).

To look at the page I built the piece into a scratch copy of the site
(a copy of `build/`, with links to `site/` and `remake/`, under the
scratchpad at `dgx/shadow`), so that nothing was written outside this
piece's folder, and photographed every tab at 1280 and at 390, and the
whole page (`dgx/shots2`). The browser reported nothing. The pictures
show what the captions say.

At the end: no problems, no warnings, fit to print.

## 2. The ear

Only the first passage has a Beat tab. I scanned its eight rows before I
looked at the poet's marks.

- Every row is a line of ten syllables by the Italian count, with the
  accents on the third, sixth and ninth. Rows 3.0 and 4.3 stop on the
  ninth. My count and the poet's agree in every row: the accents, the
  syllables that are not counted, and the places where two vowels
  inside a word are taken as one (as in row 4.2 word 4, which the fifth
  remark names).
- A vowel that ends a word is counted with the vowel that begins the
  next thirteen times: 2, 2, 3, 0, 1, 1, 2 and 2 by row. The first
  remark's "thirteen times in these eight lines" holds.
- The four rows of totals (4.0 to 4.3) have twelve accents. Eleven fall
  on a country or a figure, and one on the word for already (row 4.3
  word 4). The first accent falls on a country in all four rows and the
  last on the end of a number in all four. So "always" and "only" in
  the caption hold, line by line. Row 4.2 word 0 has a light stress
  outside the three accents, and row 4.3 word 5 a stress of its own on
  the seventh syllable. Both are marked, and remarks 5 and 6 say so.
- Row 1.0, words 3 and 4. The verb is stressed on its last syllable,
  the sixth of the line, and the article after it is counted with that
  syllable. The poet marked the article as the syllable not counted,
  which is right. But the kit ties such a syllable to the one after it
  (`site/js/kit/lens-beat.js`, line 112), so the picture ties the
  article to the noun. Marking it the other way would set the accent on
  the article. I left the marks and made the second remark say where
  the tie belongs (change 4). This is in `open` for the lead.
- The close has no Beat tab, but I counted it because its readings
  differ from the usual text. Rows 7.0 and 8.0 to 9.2 have eight
  syllables, row 9.3 stops on its seventh, and row 7.1 as printed here
  has nine: this printing has the full form of the word for pleasure
  (word 1), where the Italian column of the Rullman libretto and
  Treccani's quotation have the clipped form. The note on that word now
  says so (change 15).
- The English beside the first passage. Rows 243.2 to 243.7 have three
  beats each. In rows 243.2 and 243.5 to 243.7 the stress falls on the
  third, sixth and ninth of ten syllables, as in the Italian. Row 243.4
  stops on its ninth, like the Italian row it stands for (3.0). Row
  243.3 lacks
  one syllable at its head. Row 243.1 can be said with three beats.
  Row 243.8 says its first word twice, as the Rullman Italian column
  does in that line. Rows 243.1 to 243.3 and 243.5 to 243.6 end on
  rhymes or near rhymes of two syllables, and rows 243.4 and 243.9
  rhyme. So "appears to be made for singing", "its full lines keep
  three beats" and "rhyme on two syllables where they can" all hold.

## 3. The terms, and what the page joins

- The line of ten syllables is described and not named, in the caption
  and in the measure printed under it. The description fits the count.
  A line is named by the place of its last accent (Ciociola,
  "Versificazione"), so the two rows that stop on the ninth are still
  lines of ten. The third remark is right.
- Two vowels counted as one across two words. Bozzola and Romito
  ("Sinalefe") say that neither vowel is dropped when the line is said
  and that the rule holds across a pause marked by a comma. The first
  remark had "counts two such vowels as one where the measure needs
  it", which is loose. It is exact now (change 3).
- Anaphora (the Figure tab). Three clauses in a row begin with the same
  two words (row 9.0 words 3 and 4, row 9.1 words 0 and 1, row 9.1
  words 3 and 4). The definition in Silva Rhetoricae fits, and so does
  the plain gloss printed under the name.
- Couplet (the Rhyme tab of the close). "The close runs in couplets"
  was broken by its last four rows, which rhyme x c c x, with a rhyme
  inside row 9.0. The caption now says that the first four lines are
  two couplets (change 20). The last row rhymes with row 5.5 of the
  same cut, outside the passage; the page draws it as a line that
  rhymes with none, and the caption says where its rhyme is.
- A rhyme inside the line, at the end of a half-line: Ciociola, "Rima".
  Row 9.0 words 2 and 5.
- The duet's rhymes: a b a b, c d c d, e e, f f, g g d. "By turns",
  "each of hers rhymes with his line before it" and "takes the rhyme
  of" her two words are all so.
- What the page joins. The strokes of the Figure tab join the three
  repeated heads in order, which is what the caption joins. I looked at
  the tab at both widths. In the Voices tab the span where both sing
  now carries the color of the Don's orders (change 23), and the
  caption says that both sing his kind of verb, so color and caption
  agree. No other drawing joins what a caption does not.

## 4. The words

I fetched each entry from treccani.it myself (copies in the scratchpad,
`dgx/v_*.txt`, `g_*.txt`, `t_*.txt`, `m_*.txt`).

**First passage.** *Madama* (the pet form; a title of respect from
French). *Catalogo*: sense 1a is an ordered list of objects of one
kind, such as books, works of art, or goods; sense 1b is the book or
register that holds it. A catalogue of stamps is one of the examples
under 1b. It is a modern example, and the caption had used it to meet
Auden's stamps; that sentence is out (change 9). *Bella* as a noun
(senses 1a and 1b). *Già* (sense 1a). For the note on the word for I
(row 2.0 words 4 to 6), Treccani's *La grammatica italiana* under
soggetto: a pronoun subject can be left unsaid; set after the verb it
is brought out; and, in a note on the history, older literary Italian
often set the subject after the verb. The poet's note gave only the
second of these. The third weakens it, so the note now gives all three
(change 10).

**Second passage.** *Vecchio*; *conquista* (Treccani's *Thesaurus*,
senses 1 and 4, and its quotation of four of these lines); *piacere*
(the noun, 1a and 2a); *lista* (1a and 2); *passione* (etymology and
4a); *predominante*; *principiante*; *giovine*; *piccarsi* (1 and 2);
*ricco*; *brutto*; *bello*; *purché*; *gonnella*; *fare* (8a).

- Row 9.1 words 3 to 5 were glossed "whether she is pretty", from the
  entry for the noun. The word is the adjective, sense 1a, and the
  entry for *brutto* calls it the direct contrary. Pretty is the
  English libretto's word, which the English tab then sets against it.
  The gloss, the figure's label and two captions now say beautiful
  (change 16).
- Row 8.0 was glossed "but his ruling passion". The row has no word for
  his. This printing begins the line with the word for but, and so does
  Treccani's quotation; the Rullman Italian column begins it with the
  word for his. The gloss follows the row and the note tells the reader
  (change 14).
- Row 7.1: see section 2 and change 15.
- Row 9.3 is this printing's own last line. The Rullman Italian column
  ends the song on other words, which say that the lady knows what he
  does. The poet's note said so already; it now also says what those
  words say.

**Third passage.** *Là*, *mano*, *sì*, *lontano*, *bene*, *qui*,
*tremare*, *burlare*, *ancora* (in *Sinonimi e Contrari*, which gives
the clipped form), *diletto*, *pietà*, *cangiare*, *sorte* (1 and 2),
*presto* (2a and 2b), *forte* (the *Thesaurus*), *ristorare* (2),
*pena* (2a), *innocente* (1 and 2a), *casino* (1).

- *Presto* (row 3.3 word 1) was glossed "quick", from sense 2b alone.
  The dictionary gives 2a first: soon, in a short time. The gloss is
  now "quick, or soon", the note gives both, and the fifth caveat tells
  the reader (change 26).
- *Sorte* (row 3.2 word 4). The caption called it "a word for what no
  human will can alter". That is sense 1, the force. What the Don says
  he will change is her lot, sense 2: what that force deals to each
  person, whatever the person wills. The sentence is out of the
  caption, and the note gives the two senses in order (change 25).
- The house (row 0.4 of the cut, before the passage). The reading had
  "little house". The word is a diminutive of *casino*, which the
  dictionary gives (sense 1) for a gentleman's house in the country.
  It is now "a small country house" wherever it comes (changes 1, 24
  and 28). The hosted English has only "house".
- The verb forms of the Voices tab. I opened the paradigms under
  *dare*, *dire*, *vedere*, *venire*, *volere*, *essere*, *potere*,
  *andare*, *partire* and *cangiare*, and the grammar under imperativo
  and troncamento. The forms are what the reading says they are.

These are common words in their standard senses, and for *conquista*
the dictionary's own example is Da Ponte's couplet. The one place where
a modern example was doing the work, the catalogue of stamps, is cut.

**The measure and the devices.** Treccani's *Enciclopedia on line* under
Decasillabo (the three accents; very catchy); the *Enciclopedia
Italiana* of 1931 under Decasillabo (its regular cadence makes it
monotonous but effective); Ciociola's "Versificazione" (its marked
rhythm suits verse for music, with an aria of Mozart's *Figaro* as the
example; a line is named by its last accent); Bozzola and Romito's
"Sinalefe", with its section on two vowels inside a word; Ciociola's
"Rima" (two lines rhyme when they are the same from the last stressed
vowel on; rhyme inside the line); De Roberto's "Futuro", sections
3.1.2 and 3.1.3 (a future can state what the speaker means to do, and
one said to somebody can carry an order); Sgroi's "Condizionale" (the
present conditional in a main clause gives a wish or a request in
softened form, and the article's example is the very verb of row 2.0);
Silva Rhetoricae and Ferrari's "Anafora"; Baum, chapter 4, on the short
couplet (`.cache/handbooks/baum-versification-pg21342.txt`, lines 3204
to 3211: a rhyme that returns quickly makes the couplet felt as a
unit). All say what the reading says. The third thing the reference
books say of this line, that it suits verse to be sung, was in the
poet's source and not in the caption; it bears on a song, so it is in
the caption now (change 5).

## 5. Auden

I found each thing he is said to have said in the scans, at its page.

- *The Dyer's Hand*: p. 118 (the motto); p. 119 (the chosen end; the
  three lines he quotes, which are rows 9.0 to 9.2; the Duke; the
  sentence quoted at the head of the page, exact and 22 words; the
  neutral looks; stamps); p. 120 (understood only with Leporello; the
  joke that turns round; who keeps the list; who is seen to enjoy it;
  the newest name); p. 121 (a figure of myth; no such man in life;
  stamps again); p. 183 (the true home; no name on the list); p. 184
  (time; the descent); p. 274 (the second quotation, exact and 16
  words); p. 392 (will and calling; fondness; the unbeliever; Byron's
  five; the thousand and three); p. 469 (Shaw, and the answer); p. 470
  (willfulness; character; the great roles); p. 473 (a letter to the
  composer; the verses spared; syllables; against opera in
  translation); p. 484 (they translated this libretto); p. 485 (the
  rhythm as sung); p. 488 (rhymes of two syllables); p. 493 (what a
  librettist's verses have to do; the conventions before Wagner).
- *Forewords and Afterwords*: p. 23 (the two myths); p. 24 (a man
  nobody notices; a triumph of will; the class of women; the list; the
  first lover; the endless series; time the enemy); p. 25 (repetition;
  first and once; Christianity; sicknesses of the imagination).
- *The Enchafèd Flood*, p. 107. Pearce, p. 133.
- "Eros and Agape" (1941): only the extracts in the research notes
  (section 26 and appendix H17j). No full copy could be opened.

What was wrong:

- **Two page numbers.** The three things the ninth entry reports from
  "Notes on Music and Opera" all stand on p. 473, not pp. 472–73 (the
  running head of p. 473 is at line 22253 of the scan). Pearce's
  sentence is on p. 133, not pp. 132–33: his page number stands at the
  foot, and the sentence lies between the foot numbers 132 and 133
  (changes 33 and 34).
- **Paraphrase that went past him.** "The dark twin of the saint"
  (he says a demonic image that is the reverse of the saint); time as
  "a sum that never ends" (he says a series without beginning, ended
  only when Heaven steps in); opera's people who "will not let go of
  what they feel"; "a lady of fashion" for Shaw's lady; "generally
  doubts the worth" of opera in translation, where he is against it;
  the conventions of opera verse joined to the sentence about inspiring
  the composer, which he says of any librettist; and Pearce, who has
  him name scores as well as libretti (changes 30 to 32).
- **Which Don.** Three of his sentences are about the Don Juan of
  legend and not about this opera: the first lover (FA pp. 24–25), the
  class of women (FA p. 24), giving up love (DH p. 392). The poet's
  captions mostly said so. Three places did not: the Words caption of
  the first passage gave the sentence on fondness as said of the Don;
  the `why` of the Words tab of the close ran the opera's Don and the
  legend's into one; and the Figure caption's last sentence ("He adds
  that no such man is met in life") joined an essay of 1962 to a
  sentence from another book. All three are mended (changes 9, 13 and
  17), and the fourth caveat tells the reader.
- **"Auden points out".** The Rhyme caption of the first passage gave
  it as a fact that the Don is never shown looking at the list. Later
  in the act (lines 840 to 843 of the source file) the Don himself
  calls the list his and orders ten names added by morning. The poet
  knew this and kept it in `notes.md`. The caption now says "Auden
  writes", and the third caveat gives both places that sit against him
  (changes 7 and 37).
- **His words unquoted.** The piece has its two quotations, so nothing
  else may run in his words. I tested every printed field, and every
  ground, for runs of four words or more shared with the scans, and
  read the rest by eye. In printed text I changed a six-word name for
  the legendary Don, a five-word run about the number on the list, the
  four words about the latest name, three words about once being
  enough, a run of two adjectives and a noun about the atheist, four of
  Shaw's words, three nouns of Auden's answer to Shaw, a four-word run
  about the advantage of comic rhymes, and seven of Pearce's words. In
  the grounds, which are not printed, eight claims gave a line of his
  nearly word for word, one of them fifteen words long. They are
  paraphrases now, with the page kept (change 35).

The view at the head is his view of this opera's Don (DH pp. 119–20),
and each passage bears on it: the count on the arithmetic, the close on
the very lines he quotes, the duet on the seduction. The list under the
passages has twelve entries. Each bears on a passage shown, or on the
work as he taught it, or was said in 1941. "Infernal Science" names the
opera only in passing, in a note on the Devil, but what it names is the
last total of the count (row 4.3), so it stays.

## 6. The reason and its ground

Each caption and each `why`, a sentence at a time.

**The count, Beat.** The caption stood. Its `why` did not: "a line with
every accent fixed lets the count itself be the thing heard" is an
effect no source bears, and "Auden says the count is what the Don
wants" is more than the page says. The new `why` keeps to the marks
(the accents never move; in the totals all but one fall on a country or
a figure), to the reference books (the regular cadence) and to Auden's
one word (change 6). No woman is named in the whole song: I read lines
333 to 365 of the source file and the English, blocks 243 and 244.

**The count, Rhyme.** The marks are right. The old `why` said the tally
"is heard as the work of its keeper", which nothing bears. The new one
says where the rhymes fall and what Auden says of the keeper (change
8). "The figures appear to be chosen for the verse" is the poet's
inference and is hedged. It rests on the fact that three of the four
rows of totals end on a rhyme word, and on the totals' not agreeing
with the number Leporello gives earlier. I kept it and wrote that into
the ground.

**The count, Words.** Mended as in section 4 and section 5. One more
thing: the caption and `about` said "the book". In this printing's
recitative Leporello says list (lines 328 to 330 of the source file);
the hosted English, block 241, says a large book. The reading now says
list where the Italian does, and the printed note says what the English
has (changes 1 and 9). The new `why` says only what the lines do
(names promised, totals read) and what Auden writes of the legend.

**The count, English.** The caption stood: each sentence is on the
page or in the essay. The five totals come to 2,065, and Leporello's
eighteen hundred is at line 268 (English block 177). The old `why`
called the change "fair to a list whose own figures appear to be
fitted to the verse", which is a judgment and stands on an inference.
The new one says what is kept and changed and what Auden and Kallman
ask of a translation (change 11).

**The close, Words.** The caption stood but for one phrase ("the entry
in the book"). The `why` is mended as in section 5 (changes 12 and 13).

**The close, Figure.** "The repeated head makes the three one list of
things that make no difference" stood on no handbook: anaphora does not
by itself make a list. What makes the list is in the lines: all three
clauses hang on the verb at the head of row 9.0, which says he is not
particular. The caption now says that, and has a ground for it (change
17). The old `why` ("strips the women of every quality but one") said
more than three clauses do.

**The close, Rhyme.** The closing sentence, "Rhyme joins the winning to
the writing down", summed up with nothing under it, and the `why`
ended "so the winning is heard as an entry in his book". Both are out.
What stands is Baum on the couplet, the same rhyme at lines 235 to 237
of the source file (English block 152), and Auden on who keeps the list
(changes 20 and 21).

**The close, English.** This was the worst fault. The caption said that
these eight Italian lines have no word for love, that the English
"credits the Don with the love that Auden says he must give up", and
that "the Italian is the text for Auden's reading". The tie on the last
row said the same. But the second line of the song (row 1.0 of the cut,
word 3, shown in the first passage) has the verb for loved, in
Leporello's own mouth. And the last Italian row is this printing's own,
so a contrast drawn from it does not hold for the text as sung. The tab
does have a true thing to show: the first couplet (rows 7.0 and 7.1)
gives the pleasure of the list as the reason, which is what Auden says
satisfies the Don, and the English (rows 244.7 and 244.8) puts praise
of his talk there and has no list. The caption, the `why`, two ties,
the grounds and the printed note are rewritten on that, and the caption
now says that Leporello says loved too (change 22).

**The duet, Rhyme.** The caption stood. The `why` began "Da Ponte lets
the rhyme do the persuading", which is the poet's. The new one says
what her lines do and what Auden says of the legend (change 27).

**The duet, Voices.** "His verbs are futures and orders" and "her verb
is the conditional" are general statements that a count breaks. He has
seven finite verbs: three futures (rows 1.0, 1.1, 3.2), three orders or
urgings (rows 1.2 word 0, 1.3, 3.0) and one present (row 1.2 word 2).
She has eight: three conditionals (row 2.0 twice, row 2.2) and five
presents (rows 2.1, 2.2 word 1, 2.3, 3.1, 3.3). Two of these verbs had
no mark. "Da Ponte keeps her would to one stanza" was the poet's
reading of an intention. And the sentence of Auden's it leaned on (that
music has no room for what is only possible or passive) is about
character as a novel shows it, not about the mood of a verb. I added
the two marks, wrote the counts into the caption, and tied the tab to
the sentence on the same page that names Don Giovanni first among the
great roles, each a state of passion and will. The brackets: this
printing sets asides in round brackets (lines 268, 272, 273, 275 to 276
and 295 of the source file); her stanza stands in them, and row 3.1
opens one that is not closed, so the caption now speaks only of her
stanza (change 23).

**The duet, Words.** The first four sentences stood. Then came *sorte*
and *Presto* (section 4) and Auden's sentence on time, which was tied
to the passage only by the word quick. I cut those and put in what the
act itself gives: Elvira's speech (lines 280 to 294; English block
195), where she says he called her his wife and left after three days,
and Auden's sentence about this very Don in *The Enchafèd Flood*, that
a single time is enough for him (change 24). The old `why` spoke of
"words of place and haste"; one word that may mean soon is not haste.

**The duet, English.** The caption stood, with *Presto* mended. The
`why` said the English explains Zerlina by "powers outside her, where
Da Ponte gives only what she feels", and brought in Auden on feelings
insisted on at any cost. Neither stands: her lot is in the Italian too
(his word, row 3.2), and Auden's sentence is not about translation.
The new `why` says what the marks show (duty and fate where the Italian
has pity and failing strength; each new word is the answering half of a
rhyme of two syllables) and what Auden and Kallman say of such rhymes
(change 28).

## 7. The prose

Read against the house style after the mending. No dashes inside
sentences, no rhetorical questions, no "we", none of the stock words.
"She speaks of him, not to him" states a fact of row 2.3 (the third
person) and stays. Legend and myth are both Auden's words for the same
thing on p. 392; the captions now say legend throughout, and myth is
kept in the list only where he calls the opera's Don a figure of myth
and where he names the two myths.

## 8. The rules

- Words of the libretto in captions are single words or short phrases;
  the longest phrase of the English is five words.
- Two quotations from Auden, 22 and 16 words, both exact. No third: see
  section 5 on his words unquoted.
- The passages are 8, 8 and 15 rows.
- Lengths by my count: captions 104 to 110 words; each `why` one
  sentence of 30 to 40 words; each printed note of what a caption
  stands on at most 69 words and four sentences; glosses at most six
  words; five caveats of 45 to 50 words.

## 9. The printed notes

- `view.source` and every `auden[].source` had no italics; the page
  prints them with the book titles set off now (change 29).
- Links were labelled "Act 1" only. They now give the scene, as the
  hosted English numbers it (change 36). From the wedding on the
  English is one behind the Italian (Italian scenes vii, viii, ix and x
  are English scenes 6, 7, 8 and 9), so the duet, which the label of
  the cut rightly calls Scene 9, is in the English Scene 8. Two printed
  notes say "as the English numbers it", and the fifth caveat tells the
  reader. The poet had chosen to give no scene numbers for this reason;
  the lead may prefer that, and it is in `open`.
- "By the extracts seen for this page" stood inside what Auden is said
  to have said in 1941. It is in `checked`, in the sources ("not seen
  in full") and in the fourth caveat now (change 32).
- The sources gave page ranges wider than what was used (pp. 469–73,
  pp. 484–93). They give the pages now (change 38).
- The caveats were rewritten for a reader (change 37): the printing and
  its two readings that matter; the stanza breaks and the accents as
  read aloud; the two places in the act that sit against Auden; which
  of his sentences are about the legend, his own doubt that opera verse
  is heard as verse, and the review read in extracts; the English
  version, its scene numbers, and the two senses of *Presto*.
- `open`: the poet's nine entries are left as they were. Seven are
  added, each beginning "From the examiner".

## What I changed

At the head of the page

1. `about`: "the book in which he lists" is now "the list he keeps
   of"; "his little house nearby" is now "a small country house of
   his".
2. `view.checked` extended. The view and its quotation are unchanged.

The count

3. Beat, remark 1: says that both vowels are still said and that the
   rule holds across a comma.
4. Beat, remark 2: says the article is counted with the stressed
   syllable before it and that the tie belongs on that side.
5. Beat, caption: the reference books' third point (fit for verse to be
   sung) added; ground and printed note extended.
6. Beat, `why` rewritten.
7. Rhyme, caption: "the book" is now "the catalogue"; "Auden points
   out" is now "Auden writes".
8. Rhyme, `why` rewritten; one ground extended.
9. Words, caption: the stamp catalogue out; "shows Elvira the list and
   says it is full of their names"; Auden's sentence on fondness given
   as said of the legend; `why`, grounds and printed note rewritten.
10. Words, the note on row 2.0 words 4 to 6, and the note on row 0.0
    word 2.
11. English: `why` rewritten; tie 1 says list.

The close

12. Words, caption: "the entry in the book" is now "the listing
    itself".
13. Words, `why` rewritten; the two Auden grounds say which Don.
14. Words, row 8.0: gloss and note.
15. Words, row 7.1 words 0 and 1: the note says the full form makes the
    line a syllable too long.
16. Beautiful for pretty: the gloss of row 9.1 words 3 to 5, the
    figure's label, the Figure and Rhyme captions.
17. Figure, caption: the list now stands on the one verb; the sentence
    on no such man moved to its own essay; `why` rewritten; a text
    ground added.
18. Words, row 9.3: the note says what the usual last line says.
19. Words, grounds: the ground on this printing's readings adds the
    first word of row 8.0.
20. Rhyme, caption: "the first four lines are two couplets"; the
    closing sentence replaced by what Auden says of the keeper.
21. Rhyme, `why` and printed note rewritten.
22. English: caption, `why`, ties 5 and 7, grounds and printed note
    rewritten (section 6).

The duet

23. Voices: two spans added (row 1.2 words 1 and 2; row 2.2 words 1 and
    2); labels renamed; the span where both sing given the tag of the
    Don's orders and its own label, so that there are five kinds of
    mark; caption, `why`, grounds and printed note rewritten.
24. Words: caption from its fifth sentence on, `why`, grounds and
    printed note rewritten.
25. Words, the note on row 3.2.
26. Words, row 3.3 word 1: gloss and note; tie 8 of the English tab and
    its caption follow.
27. Rhyme, `why` rewritten.
28. English: `why` rewritten; the ground on willfulness out, a ground
    on the answering rhymes in; tie 3 and the printed note say "a small
    country house"; the sentence on the rhymes says which word answers
    which.

What Auden said, the sources, the caveats

29. Italics in `view.source`, every `auden[].source`, and the titles in
    four entries.
30. Entries 4, 6 and 8: paraphrase brought back to what he says
    (time; the saint's reverse; Shaw's three people, willfulness, and
    the clause on character that the old entry left out).
31. Entries 9 and 10: against opera in translation; the two things
    said of a librettist's verses set apart.
32. Entry 11 (the review of 1941): the note on extracts moved out; the
    legend "reaches its height" in the opera; the present moment added
    from the same extract.
33. Entry 9: p. 473.
34. Entry 12 and the sources: Pearce, p. 133; what Pearce reports made
    exact.
35. His words unquoted: nine places in printed text and eight grounds
    reworded (section 5).
36. Links name the scene.
37. The five caveats rewritten.
38. Sources: the pages used in *The Dyer's Hand*; "not seen in full"
    for the review; *forte* added to the *Thesaurus* entries.
39. `open`: seven entries added.

## What I looked at and left

- The scan marks of the first passage, every rhyme mark, the figure's
  parts and strokes, the pairs of rows.
- The captions of the Beat tab (but for change 5), the English tab of
  the first passage and the Rhyme tab of the duet.
- The gloss of the direction before the last three rows of the duet
  (both together), which rests on the two libretti and not on a
  dictionary; the poet's `open` says so.
- Auden's remark (FA p. 24) that ugly and old women serve the legendary
  Don as well as beautiful and young ones fits rows 7.0 and 9.1
  closely. It is in the Figure tab's ground and not in the caption,
  which is full.

## Still doubtful

- The tie in row 1.0 of the first passage is drawn on the wrong side,
  and a remark says so. That is the kit's.
- "Eros and Agape" was not seen in full.
- No libretto of 1787 or 1788 and no score was opened. "The one usually
  sung" and "the Italian printed with the English" rest on the Italian
  column of the Rullman libretto, and for three lines on Treccani's
  quotation.
- Whether the brackets round Zerlina's stanza are Da Ponte's or the
  printer's is not known. The caption says only that this printing has
  them and uses them elsewhere for asides.
- The ties to Auden in two tabs of the duet are mine (DH p. 470 for
  Voices, EF p. 107 for Words). Both are sentences about this opera's
  Don, read at the page. The lead may want to look at them.
- The Voices tab has one color for the Don's orders and for the line
  both sing. A sixth kind of mark would set the shared line apart, at
  the cost of a warning.
- The scene numbers in the printed links follow the English and differ
  by one from the label over the duet.
- In the scan of p. 119 the third line Auden quotes begins with another
  word than the libretto's. The printed page was not seen. The reading
  says nothing of it. This is the poet's entry in `open`, and it
  stands.
