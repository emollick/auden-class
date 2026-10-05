# F-w15-b: week 15, questions 2 to 4 and the exercise, checked against the sources

Share: the marked sentences in the entries whose labels begin `week15.questions.2.`, `week15.questions.3.`, `week15.questions.4.` and `week15.making.`. Sources are pointed to by file and line. Nothing is quoted. Only "must" and "should" are reported.

What was read. My part file is the copy made at 17:42. While I worked, `content/units/15.mjs` was changed at least three times (18:12, 18:24 and 18:54), and all five findings below were taken up in it as they were written here. Each finding says how the live file has it. The section "The live file" gives a last pass over every sentence of my share that differs there from the part file.

File names are those under `research/` in the scratchpad unless a path is given. "The Kafka file" is `/home/user/auden-course/.cache/texts/se_kafka_castle_muir.txt`, "the 1941 file" is `edit2/w15/src/nr_1941-02-10.txt`, "C" is `C_auden_on_works.md`, and places in `auden/pearce.txt` are given as line and character offset. Scripts are in `review/r3/out/tmp-F-w15-b/`; they print numbers only.

## Findings, in the order of the text

### week15.questions.2.auden.paras.3
- where: and they inspire fear (the clause after the last quotation)
- problem: Closeness, and a drift made in the last revision. Every word of this clause is Heller's: the verb, the three nouns and the small words all stand in his sentence, which Auden prints (`auden/dh.txt` 7760–7761). Only the order of the two halves is changed, so the longest run is 3 words and the strict test passes. The second-round text had two words of its own in the clause; the revision took them out and so moved the clause nearer to the source. The words stand outside the quotation marks, straight after a quotation from the same passage.
- fix: The Castle’s officers, Heller says, [quotation kept] and they arouse dread and disgust but no reverence.
- weight: should
- live file: taken up as written (18:54). The quotation before the clause is still letter for letter.

### week15.questions.3.auden.paras.2
- where: The note is about (the second sentence)
- problem: Broader than the source. The note is about American literature as a whole: it lists six writers, of whom Eliot is the last, gives the tradition the character that the site quotes, and goes on to Melville and Henry James and to American novels as parables (C 1125). Eliot is named once and nothing is said of him singly, so "about the kind of writer Eliot is" promises more than the note holds.
- fix: The note is about American literature as a whole and does not mention the play. (The next sentence, which stands, then says how Eliot comes into it.)
- weight: should
- live file: taken up as written.

### week15.questions.3.auden.paras.3 (first of two)
- where: Auden grants that a (the first sentence)
- problem: Two things. (1) No snippet covers this sentence. Its only support on file is Mendelson's note (`F_work/mendelson2017.txt` 23951–23953; the two plays are named in Mendelson's square brackets at 23955–23956), and the editor's notes list no place for it. (2) Mendelson reports that Auden objected to the note. "Grants" makes the objection a concession to someone else's charge, and nothing on file shows such a charge.
- fix: Reviewing Eliot’s collected poems and plays in 1953, Auden hears a snobbish note now and then in this play and in another of Eliot’s plays, *The Cocktail Party* (1949), and he puts it down to technique.
- weight: should
- live file: taken up as written.

### week15.questions.3.auden.paras.3 (second of two)
- where: had been working at (the second sentence)
- problem: Could not check in full. The first snippet (cache file ending `187f…`) opens in the middle of the review's sentence. It shows what Eliot was after (a stage verse free of artiness) and the main clause (he has postponed settling on a convention for his plays and has simply adopted those of high comedy as they stood). The words that say what Eliot was doing about the verse lie before the cut, so "had been working at the problem of" is the editor's reconstruction, and the one detail that can be seen, what kind of verse it was to be, is left out. The rest of the sentence agrees with the snippets (long-standing: the review dates the conventions from a Restoration dramatist to a living one; setting and main characters aristocratic).
- fix: Eliot, he says, wanted a verse for the stage that would not be arty, and he had put off the problem of a dramatic convention by keeping, just as he found them, the long-standing conventions of English high comedy, in which the scene and the leading characters belong to the aristocracy.
- weight: should
- live file: taken up, divided into two sentences. Both agree with the snippets.

### week15.questions.4.auden.paras.2
- where: She has to choose (the sentence after the one that names Antigone)
- problem: Closeness. No run reaches seven words, so by the strict test this passes, but the sentence is the article's own sentence with three words changed and one added: 19 of its 25 words stand in the article in the same order, in runs of 5, 5 and 4 words that follow one on another (C 1209, words 124–156 of that line; scripts `lcs.py` and `wlcs.py`). That is 76 percent. It is the closest marked sentence in my share by a wide margin: the next stands at 59 percent with no run longer than 4 words, and most stand between 25 and 45 percent. The second round read the same wording and let it pass under the seven-word rule. The matter is right.
- fix: She cannot both keep the law and do what she owes her brother, and knowing this she makes her choice and wills her death. (Measured the same way, this stands at 38 percent, with no run longer than 4 words.)
- weight: should
- live file: taken up as written (18:54).

## The first check in full: week15.questions.3.auden.paras.3 against the snippets

What the cache holds. Four files in `edit2/w15/src/gbcache/` carry five snippets. One (the first result in the file ending `e290…`) is from p. 206, another piece of the book, and bears on nothing here. The other four are all from p. 228 and overlap end to start, so together they give one unbroken stretch of about 150 words. In page order: the file ending `187f…`, the second result of `e290…`, the file ending `853f…`, the file ending `587a…`. The stretch begins in the middle of the review's sentence about verse and convention and stops a few words into the sentence the site quotes.

Verdict by sentence of the part file (six sentences, five marked):

- Sentence 1 ("Reviewing Eliot's collected poems"): NOT in the snippets. Supported, except its verb, by Mendelson's note. Finding above.
- Sentence 2 ("Eliot, he says, had"): in the snippets except its first clause. Finding above.
- Sentence 3 ("While the subject is"): supported (second result of `e290…`, and `853f…`). Each part is there: a worldly kind of subject, with sexual love as the example; values of a social kind; the convention judged fully adequate; wealth and breeding as tokens of talents and merits. The "because" is the site's reading of a semicolon and is fair.
- Sentence 4 ("They fail, Auden says"): supported (`587a…`). The review names the two religious themes the site names, in the same order, and says of them that the symbols just described stop working. "They fail" puts the conventions where the review has the symbols; the sentence before makes the sense plain, so no change is asked. The words in parentheses are the site's gloss and are set off as such.
- Sentence 5 (unmarked, the two quotations): both are in `F_work/mendelson2017.txt` 23954–23956, letter for letter. The last snippet breaks off after the first few words of that sentence.
- Sentence 6 ("But the convention of"): not in the snippets, which stop before it. Supported by `mendelson2017.txt` 23957–23958 and C 1063. No change.

Closeness (script `runs.py`). Against the snippets the longest shared runs outside quotation marks are 2, 5, 4, 2 and 2 words for the five marked sentences. The run of five is the name of the kind of comedy with its head noun. Against Mendelson's note the longest is 3 words (the title of Eliot's book). Nothing reaches seven, and none of the five stands above 43 percent on the in-order measure.

The page. All four snippets carry the page number 228, which lies inside the range the source line gives.

## The live file

At 18:58 the live `content/units/15.mjs` (last changed 18:54) differs from my part file in sixteen sentences of my share. I checked each against the same places.

- questions.2.auden.paras.2, first sentence (unmarked in the part file): now says that the remark was made at the lecture where the book was assigned. Right (`auden/pearce.txt` L3@6500–6970: the assignment and the remark stand together).
- The same paragraph, two pointers: "the second question of week 13" and "the fourth question of week 14". Both right (`13.mjs` line 57 under `q13b`; `14.mjs` line 95 under `q14d`).
- questions.2.auden.paras.3, clause after the last quotation: my fix.
- questions.2.auden.paras.4, second sentence: turned round, same sense.
- questions.3.gloss.1, sentence on the Furies: adds that Orestes is Agamemnon's son and is hunted for killing his mother. Right (Encyclopaedia Britannica, "Oresteia").
- questions.3.auden.paras.2, second sentence: my fix.
- questions.3.auden.paras.3: sentence 1 is my fix. Sentence 2 is my fix divided in two, and both halves agree with the snippets. Sentence 3 now opens with four words that are the review's own opening of that sentence, where the part file had the site's "While"; the longest run is still under the mark (4 words), so this is noted and not listed. Sentence 4 has lost "Auden says", and the sentence before it now carries those words. Longest shared runs of the live paragraph against the snippets: 2, 3, 5, 4, 2, 2 (script `liveruns.py`).
- questions.3.auden.paras.5, second sentence: lengthened. It is an instruction and reports nothing.
- questions.4.auden.paras.2, sentence on Antigone's choice: my fix.
- questions.4.auden.paras.4, pointer: "the third question of week 11". Right (`11.mjs` line 67 under `q11c`). The pointer for the concerto still reads "(see week 13)" where the second question's block has "(see the second question of week 13)". Both lead to the same place (`13.mjs` line 49, `q13b`).
- making.1.brief.2, first sentence: now says that Pearce did not have to remember the chart because he copied it down. Right (L3@29775–29800).

The pointers were opened again at 19:00, after `06.mjs`, `13.mjs` and `14.mjs` had been changed (last at 18:55, 18:21 and 18:53). All still hold. The live `15.mjs` passes `node --check`.

## Patterns

Five findings, so there is little to call a pattern. The kinds are these.

1. A paragraph resting on thinner evidence than its source line suggests (2): both in week15.questions.3.auden.paras.3. One sentence rests on Mendelson's note alone, and one clause on words that lie outside the snippet.
2. A report framed more broadly than its source (1): week15.questions.3.auden.paras.2.
3. The source's wording kept outside quotation marks, under the seven-word mark (2): week15.questions.4.auden.paras.2 and week15.questions.2.auden.paras.3. Neither is caught by a test of words in a row. Both show on a count of how many of the sentence's words are the source's.

Not counted, and already with the editor from the second round: the stop inside a closing quotation mark is the site's in week15.questions.2.auden.paras.1 and in the third quotation of week15.questions.2.auden.paras.3, where the source has a period and the site a comma.

## Checked and right

Every marked sentence of the share was read against its source. "S" is the number of marked sentences, "Q" the number of quotations in them compared letter for letter (script `quotes.py`, which prints yes or no), "F" a plain fact checked outside the scans. All eight quotations in marked sentences match (one of them is the single word written on the reading list), and so do the five in unmarked sentences of the same paragraphs. No marked sentence shares seven words in a row with the source it reports. The longest run is 6 words, in week15.making.1.brief.1, and four sentences have a run of 5; each is named below. I also ran every marked sentence, and every live sentence of the share, against each source file whole. Two runs of seven or more came up and neither is a finding: seven common words in the third sentence of week15.questions.3.auden.paras.3 (a stock phrase for sexual love) meet a place in another book, `auden/fa.txt` 1096, and not the review; and the name of the Beethoven movement, in an unmarked sentence of week15.questions.4.auden.paras.4, stands in C 913.

The second question

- week15.questions.2.gloss.1: S 2. Brod all but equates the Castle with grace in the theologians' sense (the Kafka file, line 750, words 236–269 of that paragraph). The three parts of the definition (the steering of people's fate; the source of rewards and penalties; not to be earned or attained) are Brod's, in that order (line 750, words 270–293); longest run 4 words. The comparison (unmarked, checked because asked): Brod likens the episode with Sortini to the book by Kierkegaard, and sets what the official demands of the girl, which he judges immoral on its face, beside what God demanded of Abraham, which he judges criminal (line 766, words 18–100). Brod speaks of the episode and not of the letter by name; the demand is made in the letter, so the site's wording is fair.
- week15.questions.2.auden.title: S 1. The block reports both what Auden said (Pearce) and what he wrote (the essay of 1962).
- week15.questions.2.auden.paras.1: S 3, Q 1, F 2. The Kafka file prints Muir's note under a heading that names the first American edition (lines 66–86) and Brod's note at the end (lines 740–774); the site's reader has the eighteen chapters only (`node build/tools/show.mjs castle`); `D_texts.md` 391–392 gives 1930 and Knopf. What Muir proposes is as the site has it: he offers, tentatively, the reading of the book as a modern counterpart of Bunyan's as the best way in (line 76, words 77–95), and "proposes reading it as" keeps that degree. His statement about the subject is made of two novels together, this one and *The Trial* (line 76, words 1–76), so it holds of this one. Bunyan's first part appeared in 1678 and the work is an allegory (Encyclopaedia Britannica, "The Pilgrim's Progress", britannica.com/topic/The-Pilgrims-Progress).
- week15.questions.2.auden.paras.2: S 3. Pearce's account of the lecture was read from end to end (`auden/pearce.txt` L3@6500–8795). The novel is named only at L3@6562–8111 and L5@3290–5027; the pages missing from that scan are in `A_pearce_gap2.txt`, which does not name it. Nowhere is the Castle given a meaning in theology. The remark on Ahab and K. comes after the questions (L3@7875–8115, p. 136; the foot of p. 135 is at L3@7534); longest run 5 words, the two names. The remark of the next spring has both halves (L5@4860–5100, p. 155), longest run 5 words (the village with its gloss, once the dots in Pearce's text are dropped); Pearce places the visit in the semester after the course (L5@1700–1940), which `content/pages.mjs` line 52 dates to the spring of 1942.
- week15.questions.2.auden.paras.3: S 6, Q 1; one finding, on the clause after the last quotation. The essay rejects the reading (`auden/dh.txt` 7744–7749, p. 161). Facts of the author's life as a help against false readings: 7713–7719, p. 160; longest run 4 words. Who describes the Czech novel: the essay says that the describing is Brod's, in his biography as newly reissued (7721–7723, p. 160) and then gives the plot from Brod, so the site is right to give the account to Brod and the report of it to Auden. Nothing in the essay says that Kafka knew the novel. The village, the kind duchess and the bad go-betweens: 7723–7724 and 7734–7745, pp. 160–161; longest run 4 words. "Takes this to suggest" is no stronger than the essay (7746–7749). Heller's words: 7757–7758.
- week15.questions.2.auden.paras.4: S 2. The essay names neither Amalia nor Sortini (no hit in `dh.txt` 7651–8035, nor for Abraham or Kierkegaard).

The third question

- week15.questions.3.gloss.1: S 3, F 1. The sentence of the review that has the word is at `F_work/mendelson2017.txt` 23954–23956; Mendelson describes the matter as vocation in the Christian understanding (23954), and the review names its theme as spiritual election (cache file ending `587a…`). Three plays by Aeschylus, *Agamemnon* the first, the Furies made kindly goddesses at the end of the third, and that as the meaning of the name: Encyclopaedia Britannica, "Oresteia", britannica.com/topic/Oresteia. Week 2 offers a choice of two tragedies (`content/units/02.mjs` line 8).
- week15.questions.3.auden.paras.1: S 1. Agrees with the researchers' summary (C 614).
- week15.questions.3.auden.paras.2: S 4, Q 1; one finding. The poem was published in 1941 and the note stands under line 1566 (C 1125). Six names with Eliot's, the degree "much", and the quotation (C 1125, words 34–61 of that line); longest run 4 words, the names. The last sentence is an instruction, and its one fact agrees with the question.
- week15.questions.3.auden.paras.3: S 5; two findings. See the first check. Longest run 5 words, the name of the kind of comedy with its head noun.
- week15.questions.3.auden.paras.4: S 1. The passage is in the Foreword, pp. 11–12, and the book is that of the memorial lectures of October 1967 (C 34, 618 and 1163–1165).
- week15.questions.3.auden.paras.5: S 2. Instructions; "the one that Auden rules out" agrees with the paragraph above.
- week15.questions.3.auden.sources.2: S 2, F 6. Title of the review and the magazine: a bookseller's entry for the issue, found by web search, gives the same title and says the piece is on Eliot's collected volume; the month is in `mendelson2017.txt` 23958. The reprint, its editor, publisher and year: Open Library (openlibrary.org, search for the title). The passage is on p. 228 (all four snippets). The first page, 225, rests on the second-round checker's reading of the contents page (`review/r2/out/V6--faithful.md`, lines 121–125); I was told not to fetch more of that book and did not see it again. Mendelson's publisher and year: the publisher's page (press.princeton.edu). His note begins at the foot of p. 472 (line 23902) and runs over; the part with the two phrases is on p. 473 (23950–23958, above the head of p. 474 at 23961).
- week15.questions.3.auden.sources.3: S 1, F 1. Random House, 1968: C 34 and Open Library. Foreword, pp. 11–12: C 618.

The fourth question

- week15.questions.4.auden.paras.1: S 1, Q 1. Miller was a student in the class (`A_michigan_course.md` 25); the words are from the first class (C 1140); he wrote forty years on, pp. 26–27 (C 912).
- week15.questions.4.auden.paras.2: S 5, Q 1; one finding (longest run 5 words, twice). The other four sentences are right (C 1208–1209). The magazine's issue is that of March 1941. The article puts all four terms in its first contrast, as the site now does. The sentence on heroes and the price of heroism agrees. The article names the play as Sophocles's, and week 2 offers it as one of two (`content/units/02.mjs` line 8).
- week15.questions.4.auden.paras.3: S 5, Q 2, F 2. The review speaks of the Grail story of the Middle Ages and of the single knight who reaches the Grail (the 1941 file, 3340–3350), names Bunyan's book beside *Faust* (3376), and sets these two heroes apart as better in morals than ordinary people (3410–3412). Faust and Peer Gynt the other way, and the quotation: 3408–3413. K., with "in what way": 3429–3434; longest run 4 words. That Galahad achieves the Grail in Arthurian romance, and that Bunyan's first part is of 1678 with Christian as its pilgrim: Encyclopaedia Britannica, "Galahad" and "The Pilgrim's Progress". The three books stand on the list in that order and *Faust* carries the handwritten mark (`A_michigan_course.md` 103, 106, 112). On the site: `06.mjs` lines 11 and 20, `07.mjs` line 5, `14.mjs` lines 5–6.
- week15.questions.4.auden.paras.4: S 5. Each pointer was opened. The concerto: `auden/pearce.txt` L3@8330–8795, p. 136, and `13.mjs` line 49 (`q13b`). The article of 1945: C 104, and `11.mjs` line 67 (`q11c`); the year is confirmed in the first round's fact check from Mendelson's note in *Prose, Volume II* (`review/r1/out/G--facts.md` 93); longest run 4 words, the article's own term. The essay of 1948: `02.mjs` line 30 (`q02a`), `04.mjs` line 48 (`q04b`) and line 65 (`q04c`), which are the first question of week 2 and the second and third of week 4. The last two sentences are instructions, and the clause they point to is the last clause of the question.

The exercise

- week15.making.1.brief.1: S 2, Q 1. Pearce has the remarks on *The Tempest*, then the chart, then the announcement of the examination, in that order (`auden/pearce.txt` L3@28700–30420, pp. 152–153; the foot of p. 152 is at L3@29113, so the chart itself is on p. 153, as the source line says). The chart was one Auden had made for the class and copied onto the board (L3@29330–29570). Pearce gives the quoted words as what Auden said the chart was (L3@29640–29760). Longest run 6 words: six of the commonest words, which meet a place in another part of Pearce's essay (L3@26576) and not the passage reported.
- week15.making.1.brief.2 (reordered, no marked sentence): the three sentences still agree with Pearce. He copied the chart as it was written (L3@29775–29800), prints the eighteen terms (L3@29869–30185) and goes straight on to the examination with no word of explanation (L3@30175).
- week15.making.1.rules.1, rules.2, rules.3: S 4. Instructions of the site's own, which report no source. Their numbers agree with the table (nine pairs, eighteen boxes).
- week15.making.1.table.after.1: S 1. Pearce gives no key (as under brief.2).

Marked sentences checked: 59. Findings: 5, all "should", none "must". All five are already in the live file as of 18:54, and the live text of the share was checked again after that.
