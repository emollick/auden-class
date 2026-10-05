# F-w15-a: week 15, the opening, the opera and the first question, checked against the sources

Part checked: `review/r3/wave3/w15.md`, as printed at 17:42. Share: the entries whose labels begin `week15.intro.`, `week15.reading.` and `week15.questions.1.`. They hold 76 marked spans, which make 73 marked sentences and source lines. Three are split across two spans: the first sentence of `week15.questions.1.auden.paras.3`, the sentence of `week15.questions.1.auden.paras.5`, and the source line `week15.questions.1.auden.sources.1`.

No sentence of a source is written out here, and none of the site's quotations is repeated. A place in a source is a file and line numbers. For `pearce.txt` it is a line and a character offset (`L3@n`, `L5@n`). "C" is `research/C_auden_on_works.md`. "The 1941 file" is `edit2/w15/src/nr_1941-02-10.txt`. A sentence of the site is named by its label and its first words.

## Findings

None of weight "must" or "should".

Every marked sentence in this share agrees with its source. Every quotation in a marked sentence matches its source letter for letter. Every plain fact in a marked sentence has support. No marked sentence shares seven words in a row with the source it reports.

The live file was saved again after the part was printed, and six of the marked sentences read differently in it now. The new wording was checked too and is right (see "The live file" below).

## The sentences that only the editor had compared with the source

### week15.questions.1.auden.paras.3, "The goal of a"

Right. The 1941 file, lines 3426–3429, in Auden's own voice, before the speech he gives to Kafka. The review says that the Kafka hero's goal is once again, like the goals of the older quests, well defined and acknowledged by all, and it names three things that all people want, one for each of the three novels. The third is the one about the Castle. The site keeps that one and says which book it belongs to, which is plainly so. Longest run of the review's words: four.

### week15.questions.1.auden.paras.3, "On this account Faust"

Right. Lines 3455–3460, inside the speech that the review puts into Kafka's mouth, which opens at line 3435 and closes at line 3460. Both halves are there, each with its reason: Faust's ease, and the peril to K.'s faith. The site leaves out two things, that K.'s difficulties have no end and that what he may come to deny is a necessity beyond his understanding. Neither omission changes the sense. "On this account" ties the sentence to the speech and not to Auden's own voice, which is correct. Longest run: four words.

The last two sentences of the paragraph ("By that measure," and "They stand for") are at lines 3439–3441, earlier in the same speech than the sentence on becoming reflective (3452–3454). The site puts them after it and joins them with "By that measure". The link is an inference, and it is the one the second-round checker proposed. The speech bears it out, because at 3440 it makes the two men stand for the many who do not reflect.

### week15.questions.1.auden.paras.6, the first sentence (the goal in the essay of 1962)

Right on both sides. `dh.txt` 7805–7806, p. 162: in a typical story the goal belongs to the hero alone and nobody competes with him for it. Lines 7789–7797 of the same page say of the traditional quest what the review of 1941 had said of Kafka: the goal is one that all can see to be worth having and all would like to reach. So the essay does reverse the review on this point (the 1941 file, 3426–3427), and the editor was right to give both. The site does not say that Auden remarked on the change, and he does not. Longest run against either text: four words.

### week15.questions.1.auden.paras.6, "He is not tempted,"

Right. `dh.txt` 7839–7840, p. 163. The essay explains the word by an apposition: to be tempted is to have good and evil to choose between. The site turns the apposition into a reason with "since", which is fair. Longest run: four words, a stock phrase. The essay's second denial, that K. is not carefree either, is left out and nothing depends on it.

### week15.questions.1.auden.paras.6, "K. is sure that" and "When his guess is"

Right. `dh.txt` 7841–7843 and 7843–7845, p. 163. The essay does not say in so many words that K. can only guess. Its next sentence begins by supposing that he guesses wrong, so the words are implied. The second sentence has consequences and responsibility, as the essay has, and no longer guilt.

### week15.questions.1.auden.sources.4

Right. The running heads in `dh.txt` stand at 7682 (p. 160), 7731 (p. 161), 7778 (p. 162, damaged but legible), 7831 (p. 163) and 7882 (p. 164). The passage on the goal is on p. 162. Everything else reported in the sixth and seventh paragraphs is on p. 163 (lines 7834–7864), and the eighth paragraph is on pp. 159–160 (lines 7664–7666 and 7690–7697). Nothing in this block is taken from p. 161.

## The closeness test

Scripts: `tmp-F-w15-a/close.py` (each marked sentence against every source on disk), `close2.py` (the same, allowing one damaged word in a scan), `close3.py` (whole entries) and `close4.py` (each marked sentence against the passage it reports). They print lengths and positions only. Words inside the site's quotation marks are left out of the count. Sources tried: `dh.txt`, `fa.txt`, `pearce.txt`, C, the 1941 file, `F_work/mendelson2017.txt`, `A_michigan_course.md`, the Kafka volume in `.cache/texts`, and the libretto printed on the site.

Result: no marked sentence shares seven words in a row with the source it reports.

- Against the passage reported, the longest runs are five words, in three sentences: `week15.questions.1.auden.paras.1` "As soon as he" (two proper names joined by "and", `pearce.txt` L3@8045), `week15.questions.1.auden.paras.5` (a five-word clause, C 1190) and `week15.questions.1.auden.paras.8` "A critic can help" (a five-word phrase naming two kinds of work, `dh.txt` 7694). All the other marked sentences that report a source stand at four words or fewer.
- One run of eight words turns up in `week15.questions.1.auden.paras.1` "He then played the". It is the name of the Beethoven movement, and it matches the researchers' own wording in two notes (C 913 and `A_michigan_course.md` 428, outside their quotation marks). Against Pearce's text the name is broken by a word and the run is four. Not a finding.
- The instruction "While you listen, notice" (`week15.reading.3.paras.4`), repeated in `week15.reading.3.auden.paras.7`, shares six common words with the note on Wagner (C 1117). It reports nothing, and six is under the mark.
- With one damaged word allowed, nothing new reaches seven against a reported source.
- Whole entries: the only long run is the question itself (`week15.questions.1.text`), which is quoted from Pearce on purpose.

## The live file

`content/units/15.mjs` was saved at 18:24, after the part was printed. When I began, all 35 strings of my share were the same in the part and in the live file. At the end, four entries differed, in six sentences. Each of the six was a marked sentence. The new wording is right in every case:

- `week15.reading.3.auden.paras.3`, second and third sentences. The sentence on Oedipus now gives the play its English title and says that it is not on the list. Both are so: the lecture names the play by its Latin title (C 1210), and the list has one tragedy by Sophocles, a different one (`content/works.mjs` 28; no other in `research/A_michigan_course.md`). The next sentence has "by contrast", and the lecture has a phrase of contrast at that point. Longest runs against the extract: two and three words.
- `week15.reading.3.auden.paras.7`, second sentence. The pointer now reads "under this heading" for "above". The third and fifth paragraphs under the heading are still the right ones.
- `week15.questions.1.auden.paras.1`, second and third sentences. The pointer now names the third question of week 14, which is where the remark on Dante's poem is reported (`content/units/14.mjs` 68–75). The question is now said to be "at the top of this page", and the page does print it as its heading (`site/js/views/question.js` 47).
- `week15.questions.1.auden.paras.3`, the sentence "Auden then gives what". It now begins with a clause on what faith is. The speech does begin there (the 1941 file, 3435–3437, where having faith is defined as acknowledging something as necessary). The addition also gives an owner to "his faith" two sentences later. Longest run: three words.

The other 31 strings were unchanged at 18:37 and again at 18:53, when I compared them for the last time. The live file then carried the save time 18:24.

## Sources used

On disk: `auden/dh.txt`, `auden/fa.txt`, `auden/pearce.txt`; C; `A_michigan_course.md`, `D_texts.md`, `F_rilke.md`, `F_work/mendelson2017.txt`; the 1941 file; the site's copies of *The Castle* and of the libretto (through `build/tools/show.mjs` and two small scripts that print block numbers, speakers and at most three lines); `content/units/06.mjs`, `13.mjs`, `14.mjs`, `15.mjs`, `content/works.mjs`, `content/ui.mjs`, `site/js/views/term.js` and `question.js`.

Nothing in this share rests on a note marked as recalled. The extracts used from C are under headings that say they were read in scans by full-text search (C 1115 for the notes to the poem, C 1167 for the essay of 1946, C 1194 for the collected prose).

One thing in the notes is filed wrongly, and the site is right where the note is wrong. C 1208–1210 puts the extract on the *Ring* under the heading of the article on Joyce and Wagner (which begins on p. 115 of *Prose, Volume II*, C 1372). The site gives it to the lecture of September 1940, pp. 81–82. A search inside *Prose, Volume II* at Google Books for the two heroes' names together returns pp. 81, 82 and 505 and no page from 115 to 119, which bears out the site and the second-round checker.

From the web, October 2, 2026:

- Wikipedia, "Der Ring des Nibelungen" and "Der Ring des Nibelungen: composition of the text": the text for a single opera on Siegfried's death, late 1848, later this opera; the verse texts of the other three written in reverse order of the story; the four first given together at Bayreuth, August 13 to 17, 1876.
- Wikipedia, "Un ballo in maschera" (first performed in Rome, February 17, 1859), "George Bernard Shaw" (music critic from 1889 to 1894), "The Family Reunion" (first staged March 21, 1939; the year of publication is in `D_texts.md` 399–404).
- Internet Archive, the record of the item `englishinstitute0000unse_a1s5`: *English Institute Annual 1940*, dated 1941.
- Google Books, search inside volume `e3nmUfYCvUwC`, page numbers only.

Two requests were refused with HTTP 403 and were not repeated: the Internet Archive's search-inside server, and a college library catalogue that I tried for the title of the essay of 1946. The title is settled without it by `F_rilke.md` 25, 215 and 281 (*Prose, Volume II* prints it with no period after the letter).

## Checked and right

Marked sentences only. "S" is a statement compared with a source, "Q" a quotation compared letter for letter, "C" a citation checked for title, date and page, "F" a plain fact or a fact about a book printed here. The number after # is the place of the marked sentence in its entry.

The opening

- week15.intro.1 #1 (In this last week): F 1. Chapters 7 to 18 come to 183 of the site's pages (`node build/tools/show.mjs castle`, parts c07 to c18).
- week15.intro.2 #1 (If you did not): F 1. Week 14 tells the student to get the play (`content/units/14.mjs` 12).
- week15.intro.2 #2 (The note under the): F 1. The week page prints the work's note under its reading table, and the note carries the lending link (`site/js/views/term.js` 254; `content/works.mjs` 157).
- week15.intro.2 #3 (The play runs to): F 1. The figure is the one in the reading list (`content/units/15.mjs` 26), in the site's own page of 350 words or 35 lines (`content/ui.mjs` 128). The book the link lends has 131 printed pages and 20,606 words (`D_texts.md` 404). The sentence gives the site's count, as the opening does for *The Castle*.
- week15.intro.2 #4 (It was published in): F 2. Published 1939 (`D_texts.md` 399–404); no required book is newer.
- week15.intro.3 #1 (Wagner’s opera): F 1. Agrees with week15.reading.3.paras.1.

The notes on the opera

- week15.reading.3.paras.2 #1 (closes the cycle): F 2. Three operas by Wagner on the list, one from the cycle (`A_michigan_course.md` 131–133).
- week15.reading.3.paras.2 #2 to #4 (Wagner wrote the words; He began in 1848; All four were first): F 5. See "Sources used".
- week15.reading.3.paras.3 #1 (You are reading only): F 5. Libretto: the Norns and the rope, prelude [9] to [19]; Waltraute speaks in act-1 [255] to [313] and is called sister at [257] and [262]; her speech at [290] has the Valkyries, Wotan, battle and heroes, and the only daughters it names are the Rhine's; Siegfried's account, act-3 [175] to [182].
- week15.reading.3.paras.4 #1 (While you listen, notice): an instruction.

What Auden wrote about the opera

- week15.reading.3.auden.paras.1 #1 (the lecture, the old order): S 1, Q 1 (the title), F 3. C 1210, first sentence of the extract. The date, `F_work/mendelson2017.txt` 43227–43228; the place, C 1379; printed 1941, the Archive's record.
- week15.reading.3.auden.paras.1 #2 (A historian, he says,): S 1. C 1210, second sentence: the three classes and the three kinds of being, paired as the site pairs them.
- week15.reading.3.auden.paras.1 #3 (the parenthesis, In this opera): F 4, the site's own. No god speaks in the libretto; the hall and the gods are seen in the last stage direction, act-3 [324]; Alberich speaks in act-2 [3] to [39]; Hagen names his mother at act-1 [4] and Gunther calls him half-brother at act-1 [6].
- week15.reading.3.auden.paras.2 #1 (The audience is led): S 1. C 1210, the sentence after the one quoted.
- week15.reading.3.auden.paras.3 #1 to #4 (Auden also says that; Oedipus, the king in; The characters of the; They go on predicting): S 4, Q 1 (five words, with its period). C 1210, last three sentences.
- week15.reading.3.auden.paras.4 #1, #2 and #5 (Auden ranks Wagner highest; The reason he gives; Of all the characters): S 3, Q 1 (eight words), F 2. C 1117, first two sentences of the extract; the poem's two editions of March and May 1941, C 1115; Fricka is named at act-2 [0] and [146] and has no part.
- week15.reading.3.auden.paras.4 #3 and #4 (As this site reads; On that reading, characters): marked as the site's own.
- week15.reading.3.auden.paras.5 #1 and #2 (Another note says that; A tribulation is a): S 3, F 1. C 1123: who drew the distinction first, as far as Auden knew, and both definitions, each with where the trouble comes from and what is to be done about it. Week 6 assigns the book (`content/units/06.mjs` 21).
- week15.reading.3.auden.paras.5 #3 and #4 (The note on Wagner; Taken as dramatic plots,): S 3. C 1117, third and fourth sentences; the same reason in the lecture, C 1210.
- week15.reading.3.auden.paras.6 #1 (In a review of): S 1, F 2. `fa.txt` 12035–12037, p. 251; the review is dated at 25005–25007.
- week15.reading.3.auden.paras.6 #2 (It allowed no duets): S 3. `fa.txt` 12046, 12050 and 12052–12053, p. 251: the second, third and fourth of the four points. The first point is left out.
- week15.reading.3.auden.paras.6 #3 (Auden agrees with Bernard): S 2, F 2. `fa.txt` 12092–12095, p. 252. The review says in its own voice that Shaw was right. The drinks and the conspirators stand first in a list of four that the review prints inside quotation marks. The w15 notes have no entry for this paragraph, so all three sentences were read from the scan.
- week15.reading.3.auden.paras.7 #1 to #3 (Before you listened you; Compare what you noticed; You do not need): an instruction; two pointers, both right.
- week15.reading.3.auden.sources.2: C 1. Both note headings are in the Faber edition (C 1117, C 1123), and both lines fall in Part III.

The first question

- week15.questions.1.gloss.1 #1 (These are Auden’s own): S 2. The question is in Pearce at `pearce.txt` L3@7368–7500, p. 135, in the lecture that assigns the book (L3@6540–6700). How he made his notes: L3@3150–3500, p. 134.
- week15.questions.1.auden.paras.1 #1 (Pearce’s notes give no): S 1. Read through L3@6270–8935 (the end of the lecture, the assignment, the questions, the phonograph and the music). Auden does not say there what K. or Dante is after. The other places where Pearce names Kafka or the book do not say it either: L3@2153 (a list of authors), L3@3992 (the subject of the lecture; from there to L3@6270, searched by word, neither K. nor the book is named), L5@3270–3450 (an essay of Pearce's own) and L5@4890–5330, p. 155 (the remark of the next spring, on another matter). The pages missing from the main scan, 138 to 145, are in `research/A_pearce_gap2.txt` and name neither Kafka nor the book.
- week15.questions.1.auden.paras.1 #2 (In assigning the book,): S 2, one pointer. L3@6790–7020, p. 135. Pearce has the two books set against the culture of their centuries, and has Auden ask the class to bear Dante's poem in mind while reading. The site's shorter wording adds nothing.
- week15.questions.1.auden.paras.1 #3 (As soon as he): S 3. L3@7512–7980 (he goes to the phonograph at that point and speaks while he gets the record on); L3@7975–8120 (the two pairs, as the relation of a person to fate).
- week15.questions.1.auden.paras.1 #4 (He then played the): S 1, one pointer. L3@8215–8340 for the movement and the concerto; L3@8700–8800 for the record being started. Week 13 has the concerto (`content/units/13.mjs` 10 and 49).
- week15.questions.1.auden.paras.2 #1 (In February 1941 Auden): S 2, Q 1 (the title). The 1941 file: the date at line 10, the title at 3300, the three books at 3356–3364, the signature at 3558. One of the three is a miscellany of Kafka's writings with essays on him, which catalogues enter under his name.
- week15.questions.1.auden.paras.2 #2 (Later heroes are marked): S 2. Lines 3410–3413, after the fairy tale (3327), the Grail knight (3340–3350) and Bunyan's pilgrim (3354, 3376).
- week15.questions.1.auden.paras.2 #3 (Faust and Peer Gynt): S 1. Lines 3413–3417.
- week15.questions.1.auden.paras.2 #4 (As this site reads): marked as the site's own.
- week15.questions.1.auden.paras.3 #1 and #2 (Auden calls K.): S 1, Q 1 (four words). Lines 3419–3421. The review goes on with a comma where the site has a period, as the second-round report noted for the editor's one decision.
- week15.questions.1.auden.paras.3 #3 (The goal of a): S 2. See above.
- week15.questions.1.auden.paras.3 #4 and #5 (For the heroes before; K. is exceptional without): S 2. Lines 3429–3434.
- week15.questions.1.auden.paras.3 #6 (Auden then gives what): S 2. Line 3435 (the speech is put into Kafka's mouth) and 3452–3454.
- week15.questions.1.auden.paras.3 #7 (On this account Faust): S 2. See above.
- week15.questions.1.auden.paras.3 #8 and #9 (By that measure, the; They stand for the): S 2. Lines 3439–3441, with the review's doubt whether such a person is still to be found.
- week15.questions.1.auden.paras.5 #1 and #2 (In an essay of): S 1, Q 2 (the title; sixteen words with the period), F 1. C 1190 for the reason given for K.'s failure; C 603, marked there as verified, for the words quoted; `F_rilke.md` 215 for the title and for the book's date, November 2, 1946.
- week15.questions.1.auden.paras.6 #1 (the first sentence): S 2, Q 1 (the title), F 1. See above.
- week15.questions.1.auden.paras.6 #2 and #3 (The essay puts the; The hero of every): S 2, Q 1 (four words). `dh.txt` 7834–7835 and 7839, p. 163.
- week15.questions.1.auden.paras.6 #4 (Homer’s Odysseus, for one,): S 1. `dh.txt` 7835–7836, the first of three examples.
- week15.questions.1.auden.paras.6 #5 to #7 (He is not tempted,; K. is sure that; When his guess is): S 4. See above.
- week15.questions.1.auden.paras.7 #1 and #2 (The hero of the; K. starts as an): S 3, Q 2 (the one-letter word, twice). `dh.txt` 7853–7857, p. 163.
- week15.questions.1.auden.paras.7 #3 and #4 (In *The Castle*, Auden; K. wants a self): S 2, Q 1 (nine words). `dh.txt` 7861–7864, p. 163. The gloss is Auden's own, as "he explains" says.
- week15.questions.1.auden.paras.8 #1 and #2 (He wrote parables, and; A critic can help): S 3, Q 1 (four words, with its period). `dh.txt` 7664–7666, p. 159, and 7690–7697, p. 160.
- week15.questions.1.auden.paras.9 #1 to #4 (Take the paragraphs above; This site chose them; On Ahab and on; In your reply, compare): the site's own. The third is true of the eight paragraphs above it: Ahab and Dante come up only in the first, and only in what Auden said in the lecture that assigned the book.
- week15.questions.1.auden.sources.1: C 1. Page markers in `pearce.txt`: 134 at L3@4964, 135 at L3@7534, 136 at L3@9987. The question and the remark on Dante's poem lie before the second marker. The phonograph is first named in the last line of p. 135, and Auden's going to it, the remark and the music lie after the marker.
- week15.questions.1.auden.sources.4: C 1. See above.

Totals: S 65, Q 13, C 3, F 35, in 73 marked sentences and source lines. Twelve of the 73 are instructions or are marked as the site's own and had nothing in a source to be compared with: week15.intro.2 #1 apart from its one fact, week15.reading.3.paras.4, the three of week15.reading.3.auden.paras.7, #3 and #4 of week15.reading.3.auden.paras.4, #4 of week15.questions.1.auden.paras.2, and the four of week15.questions.1.auden.paras.9 apart from the one statement checked.

Marked sentences checked: 73 (76 marked spans). Findings: 0 "must", 0 "should".
