# F, weeks 10 to 12: facts

Lens: is it true. Checked against the site's own copies of the books (text id and part given), site/data/course.json, and the web. Findings are in the order of the text. Each fix gives only the words to change; what is not mentioned stands.

## Week 10

### week10.intro.1
- where: The longest week of the term
- problem: False by the site's own page counts. Run through site/js/lib/schedule.js, course.json gives week 10 as 322 pages (Karamazov 282, Rimbaud 24, Fidelio 16). Week 7 is 394 and week 5 is 353.
- fix: For the first sentence read: A long week, about three hundred and twenty pages. Only weeks 5 and 7 ask for more.
- weight: must

### week10.reading.3.paras.3
- where: between the two scenes of the second act
- problem: Right by the usual reckoning, which counts settings. But the libretto in the site's reader (fidelio, act-2) numbers the act in Scenes 1 to 8, in the French way, and the change of setting, to a hall in the castle, falls before its Scene 7. A student who looks there for two scenes will not find them.
- fix: After those eight words add: (in the libretto printed here, before Scene 7).
- weight: could

### week10.test.items.10.a
- where: Katerina Verhovtsev
- problem: Garnett never prints this surname. It is in no part of the site's copy (karamazov, searched whole), nor in the Project Gutenberg text of her translation (ebook 28054). The program already passes any reply that contains the first name (answerMatches in site/js/lib/text.js), so the entry does no work.
- fix: cut
- weight: could

### week10.questions.1.auden.paras.1
- where: Swarthmore College between 1942 and 1945
- problem: True but looser than the source the site cites. The Swarthmore page (https://archive.swarthmore.edu/auden/professor.html) says he joined the faculty in 1942 and taught the Elizabethan course during his first year.
- fix: For the last four words read: in his first year there, 1942–43.
- weight: could

### week10.questions.1.auden.sources.1
- where: *W. H. Auden at Swarthmore*, the page
- problem: The name given for the page is not the page's own. At https://archive.swarthmore.edu/auden/professor.html the heading has the indefinite article before its last word, sets that word in lower case, and adds the years (1942-1945). Site title and publisher are right.
- fix: Inside the quotation marks, insert "a" before the last word, put that word in lower case, and add "(1942-1945)".
- weight: could

### week10.questions.2.auden.paras.2
- where: Dorothy Farnan was a student at Michigan that year.
- problem: True, but she was not in the class and says so on her p. 73: as a graduate student she was not allowed to take it. The two sentences that follow read as the report of a witness.
- fix: Dorothy Farnan was a graduate student at Michigan that year. She was not in the class, and reports what she heard from those who were.
- weight: could

### week10.questions.2.auden.paras.3
- where: an interviewer asked how he would teach poetry
- problem: That was not the question. The interviewer asked whether he had ever taught writing. Auden said no, and went on of his own accord to what he would do if he had to teach poetry. Evidence: the interview as reprinted in *Poets at Work* (archive.org item poetsatworkparis0000unse_w6x3, full-text search). The Paris Review's own site refused the request.
- fix: For those eight words read: an interviewer asked whether he had ever taught writing. Begin the next sentence: He said that he never had, and that if he had to teach poetry he would keep to
- weight: must

### week10.questions.2.auden.paras.4
- where: sat the examination on the cantos in January 1942
- problem: The month is not on record. The research notes (A_michigan_course.md, 2.3) cite the Regents' Proceedings for an examination period of January 28 to February 4, 1942, and Pearce for a paper four or five weeks after the Christmas vacation. Either fits early February as well as late January. I could not see the Proceedings or the Michigan Daily myself (quod.lib.umich.edu and digital.bentley.umich.edu both refused), and the Registrar's report for the year gives no dates.
- fix: For "in January 1942" read "at the end of the first semester, in late January or early February 1942".
- weight: should

### week10.questions.2.auden.sources.1
- where: (Simon and Schuster, 1984), pp. 73–74
- problem: The pages cover only half of what is cited. Her remark on memory work as training is at the foot of p. 73 and runs on to p. 74. The sentence quoted in paras.2 is on p. 77: in the scan (archive.org item audeninlove0000farn, full-text search) the running head of p. 77 stands two sentences before it. Publisher and year are right.
- fix: For "pp. 73–74" read "pp. 73–74 and 77".
- weight: must

### week10.making.1.brief.2
- where: Rimbaud quotes seven of his own poems
- problem: Seven, and this one sixth, is the count of the French editions. The site's reader does not show it. In rimbaud, part s5, only two of the seven have headings; the second poem follows the first with no gap (blocks 6 to 14), and the poem of the wolf follows the one headed Faim in the same way (blocks 29 to 35). *The Dial* parts that pair by a wide gap (p. 18 of the scan), which the reader has lost. A student who counts there finds five passages of verse, and this is the fourth.
- fix: After the third sentence add: As the chapter is printed here it is the fourth of five passages of verse. (Or restore the magazine's gaps between the poems in the reader.)
- weight: could

### week10.making.1.brief.2
- where: It follows the sentence in which he says
- problem: One sentence stands between. In *The Dial*, p. 19, and in the reader (rimbaud, s5, block 36) the paragraph has two sentences: the one about the sky, then one about the comic expression he put on. The poem follows the second. In the French (rimbaud-fr, s5, blocks 36 and 37) they are two paragraphs.
- fix: For "the sentence" read "the paragraph".
- weight: could

### week10.making.1.translate.cite
- where: printed here as *The Dial* gave it
- problem: Checked word for word against the scan of pp. 19–20 (https://archive.org/details/sim_dial_1920-07_69): wording, accents, punctuation and the dashes of the last stanza all agree. One difference: the magazine sets the Latin word of line 14 in italic, and the site's line does not. The italic is the magazine's own signal that the word is not French.
- fix: flag only: set the last word of line 14 in italic in the poem as displayed, so that the statement holds exactly.
- weight: could

## Week 11

### week11.questions.1.text
- where: he kneels with Queequeg before a wooden idol
- problem: The book has no kneeling. In moby-dick, c010, block 8, he lights the shavings, helps to prop the idol up, offers it burnt biscuit, salaams before it two or three times and kisses its nose. The rest of the sentence is right: the idol is wood, the reasoning is one paragraph, and he calls himself a Presbyterian born and bred.
- fix: For "kneels with Queequeg before" read "joins Queequeg in the worship of".
- weight: should

### week11.questions.1.auden.paras.3
- where: Kneeling to the idol is the act
- problem: The same slip, and here it is laid at Auden's door. The novel has no kneeling (see the entry above), and the passage of *The Enchafèd Flood* that this paragraph reports speaks of joining in the worship of the idol (archive.org item enchafedflood0000whau, full-text search).
- fix: For "Kneeling to" read "Joining in the worship of".
- weight: should

### week11.questions.2.gloss.1
- where: come in the last pages of the sermon
- problem: False for the first of the two. The sentence on obeying God and disobeying ourselves closes the opening paragraph of the sermon (moby-dick, c009, block 10 of 27), before the story of Jonah is told. Only the sentence on delight comes at the end (block 25). A student sent to the last pages will not find the first.
- fix: Chapter 9. The first sentence closes the opening paragraph of the sermon, before Jonah's story begins. The second comes near the end.
- weight: must

### week11.making.1.brief.2
- where: in the version you learned
- problem: The exercise holds the passage in two versions only, Longfellow's and the Italian (course.json, unit 11, making, emend.versions). The site offers the cantos in three, and the prose version is the default (site/js/lib/course.js). A student who learned the prose is given Longfellow's lines (site/js/views/emend.js falls back to the first version). Both passages as printed are sound: I checked the ten right words of each against Longfellow and against the Italian.
- fix: flag only: add the prose version of the passage when that text is built, or say here that the passage is given in Longfellow's verse or in Italian.
- weight: could

### week11.making.1.source.1
- where: is printed in *Prose, Volume II*, pp. 467–469
- problem: One page short. The paper is headed on p. 467, and its last question, a list of quotations for an essay, runs to the foot of p. 470; p. 471 opens a new item on the teaching of English (archive.org item prosetravelbooks0000aude, which holds this volume under a wrong title; running heads of pp. 468 to 471 read by full-text search). The date, the course number and the two changed words cited from the paper all check.
- fix: For "pp. 467–469" read "pp. 467–470".
- weight: must

## Week 12

### week12.reading.3.auden.paras.1
- where: Auden left nothing in print about this opera.
- problem: Too absolute, and paras.4 of this same note reports him quoting Nietzsche on this very opera. The review cited there names the opera a second time, in a sentence on Wagner's copyrights. I searched *The Dyer's Hand*, *The Enchafèd Flood*, *Forewords and Afterwords*, *Secondary Worlds*, the 1941 *New Year Letter* and *Prose, Volume II* and found no discussion of it, but six books cannot prove a negative for all he printed.
- fix: Auden left no account of this opera in print.
- weight: should

### week12.reading.3.auden.paras.1
- where: He names its hero once, as a type.
- problem: More than once. Besides the passage reported here, his essay on Poe in *Forewords and Afterwords* says that the enemies of respectability hailed Poe as a doomed romantic figure, and gives that figure this same name, out of a dream of Whitman's (archive.org item forewordsafterwo0000aude, full-text search). The count cannot stand.
- fix: He names its hero only in passing, as a type.
- weight: must

### week12.questions.1.gloss.1
- where: Read the last paragraph of each twice.
- problem: Right for Chapter 60, wrong for Chapter 68. In moby-dick, c068, the lesson and the address to the reader are in the next to last paragraph (block 6). The last (block 7) is two sentences on how hopeless it is to teach such things. A student who obeys the hint misses the passage the question is about.
- fix: Keep the two chapter titles. For the second sentence read: Read the last paragraph of the first twice, and the last two paragraphs of the second.
- weight: should

### week12.questions.1.auden.paras.5
- where: was in the class of 1941
- problem: Ambiguous. In American usage the phrase means the students who graduated in 1941. What is meant, and what Miller reports, is that he sat in Auden's course in the fall of 1941.
- fix: For "was in the class of 1941" read "took the course in the fall of 1941".
- weight: could

### week12.questions.1.auden.sources.2
- where: (Scribner, 1983), pp. 27–28
- problem: Wrong pages for the sentence quoted. Pages 27–28 are the account of the class. The remark quoted comes in a later, domestic passage: Miller says there that Auden never discussed Melville, gives the remark, and goes straight on to what Auden said of Verga. The book's own index puts Verga on p. 135 only, and Melville on 27–29, 35, 98, 104 and 135 (archive.org item audenamericanfri00mill, full-text search). Publisher and year are right.
- fix: For "pp. 27–28" read "p. 135".
- weight: must

### week12.questions.2.auden.paras.3
- where: In February 1941 he wrote an essay
- problem: Imprecise twice. The piece is a book review, of Kafka's *Amerika*, and February 10, 1941 is the day it was printed, not when he wrote it (*Prose, Volume II*, pp. 110–113, by full-text search of archive.org item prosetravelbooks0000aude). The footnote and its page are right.
- fix: For "wrote an essay on" read "published a review of Kafka's *Amerika*, an essay on".
- weight: could

## Patterns

1. A source's facts tidied in the retelling: the question that was asked, a date, the standing of a witness, the kind of piece (5). See week10.questions.2.auden.paras.3 and week12.questions.2.auden.paras.3. Also week10.questions.1.auden.paras.1, week10.questions.2.auden.paras.2 and week10.questions.2.auden.paras.4.
2. What the site says of its own contents against what the site holds: page counts, the scenes of a libretto, the layout of the reader, the versions of a canto (4). See week10.intro.1 and week11.making.1.brief.2. Also week10.reading.3.paras.3 and week10.making.1.brief.2.
3. Page references that do not reach the words quoted (3). See week10.questions.2.auden.sources.1 and week12.questions.1.auden.sources.2. Also week11.making.1.source.1. Each was found by looking the quotation up in a scan. The page numbers that the brief leaves to other critics deserve the same test.
4. Pointers into a set book that miss the place (3). See week11.questions.2.gloss.1 and week12.questions.1.gloss.1. Also the second entry for week10.making.1.brief.2.
5. Flat counts and superlatives that the evidence does not bear (3). See week10.intro.1 and week12.reading.3.auden.paras.1, which has two.
6. An action the novel does not have (2). See week11.questions.1.text and week11.questions.1.auden.paras.3.

The three weekly tests (42 items, each question against its accepted answers and its place in the book) and the word-list for the French poem (49 entries) came through with one small note between them, the surname at week10.test.items.10.a.

## Checked and right

The number after each label is the count of statements checked there and found right. Where a label also appears among the findings, the count covers the rest of the entry.

Week 10
- week10.title, week10.sub: 2
- week10.intro.1 (how the novel ends): 4
- week10.intro.2: 5
- week10.reading.1.items.1 to 3.label: 3
- week10.reading.2.items.1 to 9.label: 9
- week10.reading.3.paras.1: 1
- week10.reading.3.paras.2: 7
- week10.reading.3.paras.3 (the practice itself): 1
- week10.reading.3.auden.paras.1 (one remark only in that book): 1
- week10.words.cite, .where, .setting: 5
- week10.test.items.1 to 14 (question, accepted answers, place): 14 items
- week10.questions.1.text, .gloss.1: 2
- week10.questions.1.auden.paras.1: 3
- week10.questions.1.auden.paras.2: 4
- week10.questions.1.auden.paras.4: 2
- week10.questions.1.auden.sources.1 (site title, publisher): 2
- week10.questions.1.auden.sources.2: 3
- week10.questions.2.text, .gloss.1: 3
- week10.questions.2.auden.paras.2 (the remark, the quotation): 2
- week10.questions.2.auden.paras.3 (when he said it, what he answered): 2
- week10.questions.2.auden.paras.4 (the interval of years): 1
- week10.questions.2.auden.sources.1 (publisher, year): 2
- week10.questions.2.auden.sources.3: 3
- week10.questions.3.text, .gloss.1: 4
- week10.questions.3.auden.paras.1: 2
- week10.questions.3.auden.paras.2 (the interval of years): 1
- week10.questions.3.auden.paras.3 (the sentence in the last chapter): 1
- week10.questions.3.auden.paras.4 (the year): 1
- week10.questions.3.auden.sources.1: 2
- week10.making.1.short, .brief.1: 4
- week10.making.1.brief.2 (seven by the editions' count, all left in French, this one sixth): 3
- week10.making.1.rules.1 to 3: 3
- week10.making.1.translate.cite (the poem against the scan): 24 lines
- week10.making.1.translate.glossary, lines 1 to 24: 49 entries
- week10.making.1.translate.after.1: 1
- week10.making.1.source.1: 2

Week 11
- week11.title, week11.sub: 2
- week11.intro.1: 4
- week11.intro.2: 3
- week11.intro.3: 2
- week11.reading.1.items.1 to 4.label, week11.reading.2.items.1.label: 5
- week11.words.cite, .where, .setting: 4
- week11.test.items.1 to 14 (question, accepted answers, speaker, place): 14 items
- week11.questions.1.text (his church, the idol's material, the one paragraph): 3
- week11.questions.1.gloss.1: 2
- week11.questions.1.auden.paras.1 and 2 (what happens in the novel): 4
- week11.questions.2.text (both sentences are in the sermon, one in each of its two strands): 2
- week11.questions.2.auden.paras.3 (the speech in the play, the week it was read): 2
- week11.questions.3.text, .gloss.1: 4
- week11.questions.3.auden.paras.1: 5
- week11.questions.3.auden.paras.2: 4
- week11.questions.3.auden.paras.3 (the interval of years): 1
- week11.questions.3.auden.paras.4 (what Ahab admits late in the novel): 1
- week11.questions.3.auden.sources.1: 2
- week11.making.1.short, .brief.1: 8
- week11.making.1.brief.2, .rules.3 (the place in the canto, ten words, seven needed): 3
- week11.making.1.emend.versions (the right words against Longfellow and the Italian, the two cites): 22
- week11.making.1.emend.after.1: 4
- week11.making.1.source.1 (date, course number): 2

Week 12
- week12.title, week12.sub: 2
- week12.intro.1: 3
- week12.intro.2: 2
- week12.reading.1.items.1 to 4.label, week12.reading.2.items.1.label: 5
- week12.reading.3.paras.1: 2
- week12.reading.3.paras.2: 4
- week12.reading.3.auden.paras.1 (the one mention in the book reported): 1
- week12.reading.3.auden.paras.2 (the oath in the ballad, Senta's last words): 2
- week12.reading.3.auden.paras.3: 4
- week12.reading.3.auden.paras.4 (when): 1
- week12.reading.3.auden.sources.2: 3
- week12.words.cite, .where, .setting: 3
- week12.test.items.1 to 14 (question, accepted answers, place): 14 items
- week12.questions.1.text: 3
- week12.questions.1.auden.paras.2 and 3 (the owners, the two endings, nine ships, next week's chart): 4
- week12.questions.1.auden.paras.5 (the winter, the remark, how often): 3
- week12.questions.1.auden.sources.2 (publisher, year): 2
- week12.questions.2.text, .gloss.1: 4
- week12.questions.2.auden.paras.2 (what happens in the novel): 2
- week12.questions.2.auden.paras.3 (the footnote and what it says): 2
- week12.questions.2.auden.paras.4: 3
- week12.questions.2.auden.sources.2: 3
- week12.questions.2.auden.sources.3: 2
- week12.making.1.brief.2: 4
- week12.making.1.rules.2 and 4 (how the chapter begins and ends): 2
- week12.making.1.model.gap, .model.cite: 2

Not checked, as the brief directs: the page numbers given for *The Dyer's Hand*, *The Enchafèd Flood*, *Forewords and Afterwords* and Pearce's essay, and whether the reports of those four are faithful.

Sources that refused and were left alone: theparisreview.org (the interview was read in a reprint), digital.bentley.umich.edu and quod.lib.umich.edu (see week10.questions.2.auden.paras.4), and the page images of the lending copies on archive.org, where I worked from the search service's snippets and the running heads in them.
