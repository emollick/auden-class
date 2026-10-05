# A (app wording): facts

Findings in the order of the text. Evidence is cited as: notes A = research/A_michigan_course.md; notes B = research/B_pedagogy.md; site files by path.

### ui:standing.during
- where: Week {unit} of {units}
- problem: The program cuts the term into fifteen equal parts whatever length the student chose (site/js/lib/schedule.js, `calendar`): 7 days each on the 15-week setting, 14 on the 30-week, about 24 on the 52-week. On the two longer settings this line calls a stretch of two or three and a half weeks a week. The same false count is in ui:term.title, ui:home.week.title, ui:home.week.read, ui:home.week.open, ui:home.before.look and ui:unit.short.
- fix: flag only. The editor must choose: call the divisions parts in all these lines ("Part {unit} of {units}"; "Fifteen parts"; "this part's {pages} pages"; "until the part ends"; "Open part {n}"), or keep "week" and give the longer terms their true week numbers.
- weight: must

### ui:home.lede
- where: on Thursday afternoons in the fall of 1941
- problem: Stated as settled, but the sources disagree, and the site's own Sources page (page:about.sections.1.table.rows.5.1) puts Tuesday and Thursday afternoons, 3:30 to 5:30, on the record from Pearce, p. 134, with the sheet's Thursday four to six as the variant. The sheet and Miller, p. 30, support Thursday alone (notes A, 2.4). The home page and the Sources page now contradict each other.
- fix: Replace the first sentence with: "In the fall of 1941 W. H. Auden taught English 135, for the only time. About two dozen students took it. The course sheet sets it on Thursday afternoons from four to six; one student remembered Tuesdays as well."
- weight: should

### ui:home.lede
- where: to a class of about two dozen
- problem: The size of the class is not settled, and the Sources page gives no figure for it. Chapman (MQR 1978, known only at second hand) reports twenty-two enrolled; Miller and Farnan say twenty-five; Pearce counted fourteen or fifteen in the room one afternoon in late October (notes A, 2.5). The phrase is a fair middle of the two enrollment figures.
- fix: flag only. Keep the phrase, and add a row to the Sources table: "Twenty-two were enrolled by Chapman's count; Miller and Farnan say twenty-five; Pearce saw fourteen or fifteen in the room one afternoon in October."
- weight: could

### ui:home.lede
- where: the kinds of work he set
- problem: Coming after "This is that course", the phrase claims the weekly work for English 135. What is on record for that course is essays comparing two books, comparisons set by word of mouth, and the Dante paper; the notes found no mention of a test or a weekly exercise (notes A, 3.2 and 3.3). The site's kinds are documented elsewhere: the missing words and the tests at Swarthmore (ui:words.intro.2, ui:test.intro.2), the dictionary work in his other Michigan course, English 136, and the translation in a course the witnesses do not identify (notes A, 2.8 and 3.2).
- fix: Replace the second sentence with: "This is that course, laid out to be taken. The reading list and the final examination are his. The weekly work was made for this site, most of it of kinds he set other classes."
- weight: could

### ui:home.what.1
- where: because they would be examined on their own thinking
- problem: This turns one witness's wording into the reason for the rule. In Miller's reconstruction (p. 26) the two remarks stand side by side with no "because". Pearce (p. 129) has Auden give a different reason: a person keeps only what matters to him, and note-taking gets in the way. Chapman (p. 509), followed by Carpenter (p. 319), reports a third: nothing specific can pass from one person to another (notes A, 3.7).
- fix: "He told the class to take no notes. One student remembered him adding that the examination would be on their own thoughts about the books, not on his words."
- weight: should

### ui:home.what.1
- where: he gave them three hours to write out cantos
- problem: The three hours rest on Pearce alone (pp. 153–154). Chapman (p. 509) confirms a timed final on which the Dante was written out; Miller calls the memorizing an exercise, and Nolan says it stood in place of a final (notes A, 3.1). The Sources page says the site follows Pearce; the home page gives his version as settled fact.
- fix: "By the fullest account, the final was three hours of writing out cantos of the *Divine Comedy* from memory."
- weight: could

### ui:home.what.2
- where: shown what Auden himself wrote about the book
- problem: Not always, by the site's own headings. Nine of the forty-one blocks shown after a paper are headed as what Auden said or told the class, most of them from Pearce's notes (the first questions of weeks 4, 5 and 6; both questions of week 14), and others open by saying that Auden wrote nothing on the book or the point (week 1, first question; week 8, second; week 15, third). ui:home.how.list.5 and ui:question.intro.2 make the same promise.
- fix: Change "what Auden himself wrote about the book" to "what Auden wrote or said on the matter, with its source". In the other two entries change "wrote about the same book" to "wrote or said on the same matter".
- weight: must

### ui:home.how.list.1
- where: A passage from the week's reading with words taken out
- problem: Not so in week 3. Its passage is from Gray's "Elegy", a poem that is not on the list, and the week's own setting line says as much (week3.words.setting; site/data/course.json, units[2].words.cite). The other fourteen passages are from the week's reading.
- fix: Change the second sentence to: "A passage with words taken out, from the week's reading in every week but one."
- weight: could

### ui:term.intro.1
- where: How he divided them among his Thursdays is not recorded
- problem: Part of it is recorded, and the site's own Sources page says so (page:about.sections.3.paras.2): Pearce's notes show Auden did not follow the list. He set *The Castle* early, beside Augustine, then took romantic love with *Tristan* and *Carmen*, then *Othello*, *Henry IV* and, in December, *The Tempest* (Pearce, pp. 134–152; notes B, 1.P). The sentence also repeats the Thursday-only meeting that the Sources page disputes.
- fix: "The books are read in the order in which the list gives them. That order is this site's choice: Donald Pearce's notes show that Auden did not keep to it, and no full schedule of his survives. The division into weeks is this site's as well."
- weight: should

### ui:term.intro.1
- where: leaves the last week light for the examination
- problem: False by the site's own figures. In site/data/course.json week 15 carries 316 pages (*The Castle* 183, *The Family Reunion* 75, *Götterdämmerung* 58), more than ten of the other fourteen weeks; the mean is 289. The light weeks are 11, 12 and 13 (203, 227 and 197 pages).
- fix: Cut the clause and say what is true: "It keeps each book whole where it can. The weeks are not equal: they run from about 200 pages to about 400." Or lighten week 15 and keep the wording.
- weight: must

### ui:unit.omit
- where: on the surviving copy of the list
- problem: More than one copy survives. Kreyling (*The Novels of Ross Macdonald*, 2005, p. 39; checked in the scan at archive.org, novelsofrossmacd0000krey) describes Kenneth Millar's own copy, with Millar's marks on it, and Mendelson (*Prose, Volume II*, p. 465) records a copy in the University of Michigan Library. The marked sheet is the one in the picture Alan Jacobs published; where that copy is kept is not known (notes A, 1.5, 2.9, 4.3).
- fix: Replace the first sentence with: "Someone wrote [quotation kept] beside this book on the copy of the list that has been published."
- weight: must

### ui:unit.omit
- where: no test or question depends on it
- problem: True of the tests, not quite of the questions. This line is shown under both marked books, and the fourth question of week 13 (course.json, q13d) is written for readers of Henry Adams. It is optional, since the student answers one of four.
- fix: End the entry: "no test depends on it, and there is always a question that does not."
- weight: could

### ui:unit.opera.after
- where: What Auden wrote about this opera is shown
- problem: Not so for three of the nine operas, by the site's own notes. For Gluck's opera (week 1) the note says that nothing by him about it has been found, and for *The Flying Dutchman* (week 12) that he left nothing in print about it. For *Tristan* (week 7) the note is headed as what he said in class (site/data/course.json, units 1, 12 and 7, `reading[].auden`).
- fix: "What Auden wrote that bears on this opera is shown when you have heard it."
- weight: must

### ui:test.intro.1
- where: then answer the questions of fact
- problem: The order promised is not the order given. In all fifteen tests the passages and the questions of fact are mixed, in most weeks turn and turn about (site/data/course.json, units[].test.items, kinds "spot" and "fact"; site/js/views/test.js prints them in that order). Week 15 opens with a question of fact.
- fix: "Passages from the reading are mixed with questions of fact. Under each passage, answer what is asked. Do it without the books."
- weight: could

### ui:question.intro.1
- where: He told the class they would be tested
- problem: This is one witness's reconstruction of Auden's speech forty years on (Miller, p. 26; wording checked at archive.org, audenamericanfri00mill). Pearce and Chapman, who also report the no-notes rule, give other reasons for it and, in what could be read of them, not this remark (notes A, 3.7). Here it is stated as plain fact.
- fix: "One of the class remembered him saying that they would be tested on their own thinking."
- weight: could

### ui:making.syll.note
- where: A machine miscounts words like
- problem: The site's counter does not miscount the two words given. site/js/lib/text.js (`SYLL_ODD`) fixes each of them at two syllables, which is the ordinary count. What it cannot do is hear when a poet runs such a word into one.
- fix: "The count is rough. A machine gives each word its dictionary count and cannot hear when a poet makes one syllable of two, as in [quotation kept]. Trust your ear and your fingers."
- weight: could

### ui:heart.intro.2
- where: Auden made his classes learn long poems whole
- problem: The sources say less. Carpenter (p. 319; wording checked at archive.org, whaudenbiography0000carp), following Chapman (p. 509), has him insist on long stretches of poetry and names one poem learned whole, Milton's "Lycidas". The Dante was cantos, not a whole poem.
- fix: Replace the first sentence with: "Auden made his Michigan classes learn long stretches of poetry by heart, among them the whole of “Lycidas.”"
- weight: could

### ui:heart.cantos.intro.1
- where: three weeks to each
- problem: True only on the 15-week setting. The program gives each canto a fifth of the term (site/js/lib/heart.js, `weekPortion`): six weeks on the 30-week term, about ten on the 52-week. ui:cantos.fifth.intro.1 repeats the three weeks.
- fix: "They are listed in the order you learn them, a fifth of the term to each." In ui:cantos.fifth.intro.1: "you will live with your choice for a fifth of the term."
- weight: must

### ui:heart.how.2
- where: or six to nine lines of verse
- problem: The program does not cut stretches of those sizes. Run over all hundred cantos, site/js/lib/heart.js (`stretches`) gives the same result in Longfellow and in the Italian: six lines 2,283 times, four lines 55 times and seven lines 45 times, and never eight or nine. The four and the seven are a canto's last stretch (four in Inferno III and V and Purgatorio XXVIII). In prose it gives three paragraphs, with a last stretch of two or four.
- fix: Replace the first sentence with: "Take one stretch: three paragraphs of the prose, or six lines of verse. The last stretch of a canto may be a little shorter or longer."
- weight: should

### ui:heart.rule.1
- where: Spelling counts.
- problem: With exceptions the entry does not give. The comparison takes British and American spellings as one word, ignores accents, and lets a hyphened word match its two halves (site/js/lib/text.js: `SPELLINGS`, `normWord`, `align`).
- fix: "Spelling counts, except that British and American spellings are taken as the same word. Capitals, punctuation, accents and line breaks do not."
- weight: could

### ui:heart.rule.2
- where: How Auden marked the papers is not recorded
- problem: Nearly so, but two scraps are on record. Farnan, who was not in the class, says the cantos were to be learned letter perfect (*Auden in Love*, p. 73; phrase checked at archive.org, audeninlove0000farn). Chapman (p. 509) reports that a student who ran out of time was not penalized (notes A, 3.1). The site's rule is looser than Farnan's report.
- fix: flag only. The editor may add Farnan's report to this line: she was not a member of the class, and she gives the standard as letter-perfect cantos. The Sources page of the 11:05 build now carries it.
- weight: could

### ui:heart.unverified
- where: from a scan of the 1899–1901 edition
- problem: The copies scanned are later printings. build/texts/temple/extract.py takes the text from archive.org scans inferno00dant_3 and purgatorioofdant00dant_0, both printed in 1904, and paradisoofdantea00dant, a reprint of November 1910 that the catalogue dates 1899 (build/texts/temple/collate.py, `PRINTING`). The edition was first published in 1899–1901.
- fix: Change the phrase to: "from scans of the Temple Classics edition (first published 1899–1901; the copies scanned are reprints of 1904 and 1910)".
- weight: could

### ui:cantos.intro.1
- where: Auden first asked for seven and came down to five
- problem: This is Pearce's account alone, and the sentence gives it as settled. Miller has six, or four for those who could not manage six; Farnan and Nolan have six; Chapman's classmates claimed eight (notes A, 3.1). Pearce also names his four cantos for the paper as first announced, the Purgatorio canto as an example of several, and does not say which two were dropped (pp. 153–154; text checked in the scan at archive.org, whaudenfarinteri0000bold).
- fix: "Donald Pearce, who sat the examination, says Auden first asked for seven cantos and came down to five when students protested. For the seven he names four: Inferno III and V, Purgatorio XXVIII and Paradiso XXXIII. This site keeps those four and leaves the fifth to you."
- weight: should

### ui:final.source.1
- where: Two other accounts give other numbers of cantos
- problem: More than two do. Besides Miller and Nolan, whom the Sources page discusses, Farnan gives six and Chapman reports classmates who claimed eight (notes A, 3.1).
- fix: Change "Two other accounts" to "Other accounts".
- weight: could

### ui:notebook.intro.1
- where: there is nowhere here to take any
- problem: The site does keep notes of the student's own. The missing-words page has a field labeled as a note (ui:words.note.label), each exercise asks for a written reflection, and this page lists both under that label (ui:notebook.note; site/js/views/notebook.js, `collect`). Nor is the page everything written: cantos written out and examination papers are not listed on it.
- fix: "Your papers and exercises, and the notes you made on them, in term order. What you have written out from memory is under By heart, and the examination paper under Examination."
- weight: could

## Note on the build

The text I was given is a copy of the app's wording taken at about 10:15 UTC. The site's own file, site/data/ui.json, was rebuilt from wording last edited at 11:05 UTC (content/ui.mjs), and 115 of the 400 entries now read differently. I checked it again at 11:40 UTC. The findings above are on the text as given. Checked against the build of 11:05, they stand as follows.

Already cured there (13): ui:home.lede (the Thursday; the kinds of work), ui:home.what.2, ui:home.how.list.1, ui:term.intro.1 (both), ui:unit.opera.after, ui:test.intro.1, ui:heart.cantos.intro.1, ui:heart.rule.1, ui:heart.unverified, ui:final.source.1, ui:notebook.intro.1.

Answered another way (1): ui:standing.during. The line is unchanged, but the term page and the enrollment page now say that a week of the course lasts two calendar weeks on the 30-week term and about three and a half on the 52-week term. That settles it if the editor accepts the usage.

Still standing (11): ui:home.lede (the size of the class), ui:home.what.1 (both; the lede now says the examination is as one student remembered it, but this paragraph still gives the reason for the no-notes rule and the three hours as plain fact), the entry on the two marked books (both findings), ui:question.intro.1, ui:making.syll.note (it now says outright that the site miscounts the two words, which its table counts correctly), ui:heart.intro.2, ui:heart.how.2, ui:heart.rule.2, ui:cantos.intro.1.

Three statements that are new in the 11:05 build and not in the text I was given. They are not counted in the findings.

- home.how.list.2 now says that every required book but Eliot's play is printed on the site. One more is printed only in part: the Kierkegaard is Hollander's selection, about a third of the book by the site's own note (site/data/course.json, works, kierkegaard, `copy`). Suggested: "All but one are printed here, one of them in a selection."
- home.how.list.6 now says there is one exercise a week. Week 2 has two (course.json, units[1].making). Suggested: "One a week, or two".
- test.intro.1 now says the book must be named in any week that has more than one book. The program asks for the book only when the passages come from more than one (site/js/views/test.js, `askWork`). Weeks 10 and 15 each have two books and take all their passages from one. Suggested: "Where the passages come from more than one book, name the book as well."

## Patterns

1. The wording describes the site wrongly: it promises more than the data and the scripts deliver, or something other. 10 findings. See ui:term.intro.1 (the last week called light when it is among the heavier) and ui:heart.how.2 (stretch lengths the program never cuts). The others are ui:home.what.2, ui:home.how.list.1, the entry on the two marked books (second finding), ui:unit.opera.after, ui:test.intro.1, ui:making.syll.note, ui:heart.rule.1 and ui:notebook.intro.1.
2. One witness's account, or one of several figures that conflict, is given as settled fact. 6 findings. See ui:home.what.1 (both findings) and ui:cantos.intro.1. The others are ui:home.lede (the Thursday; the size of the class) and ui:question.intro.1.
3. Loose statements about the sources themselves: what is and is not recorded, how many copies or accounts there are, which printing was scanned. 5 findings. See ui:term.intro.1 (first finding) and ui:heart.rule.2. The others are the entry on the two marked books (first finding), ui:heart.unverified and ui:final.source.1.
4. The app's wording says one thing and the site's own Sources page another. 3 findings, all counted above. See ui:home.lede (the Thursday) and ui:term.intro.1 (first finding); the third is ui:home.what.1 (the three hours).
5. "Week" used for a fifteenth of a term that is not fifteen weeks long. 2 findings, 9 entries. See ui:standing.during and ui:heart.cantos.intro.1.
6. What Auden did in other courses is stated loosely or credited to this one. 2 findings. See ui:home.lede (the kinds of work) and ui:heart.intro.2.

## Checked and right

Every one of the 400 entries and the five lines of the page shell was read. Entries that state no fact (buttons, headings, column heads, bare instructions) are not listed. The number after each label is the count of statements checked and found right; statements that have a finding above are not counted here. 124 in all.

- ui:site.title: 1
- ui:colophon.1: 2
- ui:colophon.2: 2 (every text printed is out of copyright in the United States in 2026; storage is the browser's own and nothing is sent)
- ui:home.kicker: 2
- ui:home.title: 1
- ui:home.lede: 2
- ui:home.what.1: 4 (the sheet has 23 numbered entries, one of them a choice between two plays, and nine libretti; it runs from Dante to Eliot)
- ui:home.what.2: 2
- ui:home.fig.works, ui:home.fig.pages, ui:home.fig.weeks, ui:home.fig.cantos: 4 (32 works; 4,333 pages, which is 4,047 for the books and 286 for the libretti; 15; 5)
- ui:home.how.1: 1
- ui:home.how.list.2: 2
- ui:home.how.list.3: 1
- ui:home.how.list.4: 2
- ui:home.how.list.5: 2 (150 words is the program's minimum)
- ui:home.how.list.6: 4 (three translations, four charts, one page of dictionary work, two parodies)
- ui:home.how.after.1: 2
- ui:enrol.intro.2: 2
- ui:enrol.pace.semester.note, ui:enrol.pace.two.note, ui:enrol.pace.year.note: 3 (15, 30 and 52 weeks; classes in 1941 began on September 29 and examinations on January 28, which with the vacation gives about fifteen weeks of teaching)
- ui:term.intro.1: 2
- ui:term.note.1: 4 (350 words and 35 lines are the build's figures; against the Modern Library, Norton and Knopf volumes whose scans I measured, "about a page" is rough but fair)
- the entry on the two marked books, under ui:unit: 2 (the mark stands beside *Faust* and beside Henry Adams on the published sheet; both are left out of the page counts)
- ui:words.intro.2: 1 (Mandelbaum in Spender's *Tribute*; Carpenter)
- ui:test.intro.1: 1 (all 108 passages are from the week's reading)
- ui:test.intro.2: 2 (the quotation is exact: Monroe K. Spears, *Swarthmore College Bulletin*, alumni issue, March 1962)
- ui:question.intro.1: 1
- ui:question.intro.2: 2
- ui:question.confirm: 1
- ui:question.choose.intro.1: 1
- ui:making.rhyme.note: 1
- ui:making.emend.how, ui:making.emend.result: 2
- ui:heart.intro.1: 2
- ui:heart.intro.2: 1 (Carpenter, p. 319: those who objected were told to try it first)
- ui:heart.cantos.intro.1: 1 (the order of learning is Inferno III, Inferno V, the fifth, Purgatorio XXVIII, Paradiso XXXIII)
- ui:heart.fifth.what: 1 (the fifth canto is third in that order, so its turn begins with week 7)
- ui:heart.how.3, ui:heart.how.4, ui:heart.how.5: 4 (the intervals in the program are 1, 3, 7, 21 and 60 days)
- ui:heart.rule.1: 3
- ui:heart.rule.2: 1
- ui:heart.write.allowed, ui:heart.verdict.once, ui:heart.verdict.known: 3
- ui:heart.marked.key: 3
- ui:cantos.intro.1: 2
- ui:cantos.version.temple, ui:cantos.version.temple.note, ui:cantos.cite.temple: 4 (Carlyle the *Inferno*, Okey the *Purgatorio*, Wicksteed the *Paradiso*; Temple Classics, 1899 to 1901; one paragraph to a tercet)
- ui:cantos.version.longfellow.note, ui:cantos.cite.longfellow: 3
- ui:cantos.unverified.note: 2 (checked against the scripts only: the prose version is not yet built, and no canto of it is yet marked as verified)
- ui:final.title: 1
- ui:final.intro.1: 8 (compared with the scan of Pearce's essay at archive.org, whaudenfarinteri0000bold; the page numbers are another critic's)
- ui:final.intro.2: 2
- ui:final.paper.date: 1
- ui:final.rules.1, ui:final.rules.2, ui:final.rules.3, ui:final.rules.4: 5 (three hours; pasting is blocked; one word in a hundred)
- ui:final.sitting.intro.1: 2
- ui:final.over.body: 1
- ui:final.source.1: 3 (London: Vision Press; Totowa, N.J.: Barnes & Noble, 1985)
- ui:ledger.calendar.change.note.1: 2
- ui:notebook.intro.1: 1
- ui:notebook.keep.1: 3
- ui:notebook.reset.body: 1
- ui:store.warning: 1
- index.html (the description): 3
- index.html (the line shown without JavaScript): 1
