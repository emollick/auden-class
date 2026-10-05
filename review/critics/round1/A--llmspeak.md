# Part A, the app's own wording: writing that reads as machine-made

All 405 entries were read. Where the placing of a line mattered, I read the code that draws it. Entries not listed here were read and passed.

32 findings: 3 must, 23 should, 6 could.

### ui:home.lede
- where: "This is that course, laid out to be taken"
- problem: A slogan. The two demonstratives are there for the ring, nobody says a course is "laid out to be taken", and the claim is larger than the colophon's, which says reconstruction. The list after the colon has the only serial comma in this part.
- fix: Replace the words before the colon with "This site lays the course out as a term you can take" and drop the comma before "and".
- weight: should

### ui:home.what.1
- where: "names twenty-three set books"
- problem: The house rule is American English, but the classroom words in this part are British. Books, cantos, work and the examination are "set" (12 entries), the examination is "sat" (7), and work is "marked" (6, and the noun twice more). The Sources page says the same things in American: Pearce "took the course", papers were "graded", "the required books". ui:home.what.2 has "grades". Read together, the British words sound like an accent put on for the subject, on a site that says it does not imitate Auden. "Mark" also means ticking a book as read (7 entries), so "your marks" in ui:enrol.intro.2 can be taken either way.
- fix: flag only. The editor must decide, once and for the whole site, whether these words are the site's vocabulary or a breach. If a breach: "required books" for set books; "assigned" for what Auden set; "take, took, taken" for sit and sat ("Taken on {date}", "Not yet taken.", and "Attempts" for ui:final.record.title); "check" where the site does the marking (ui:home.how.list.4, ui:test.mark, ui:final.over.body, ui:final.over.mark); "grade" where a person would (ui:question.intro.2, ui:heart.rule.2).
- weight: should

### ui:home.what.1
- where: "on their own thinking and not on his"
- problem: The contrast looks added for balance. The Sources page and ui:question.intro.1 report the same remark without it.
- fix: flag only. If the source does not have the contrast, cut "and not on his".
- weight: could

### ui:home.what.1
- where: "cantos of the Divine Comedy from memory"
- problem: House rule: the title of a book goes in italics. It is in roman here, in ui:heart.intro.1 and in ui:final.intro.1. The Sources page has it in italics.
- fix: *Divine Comedy*, in all three entries.
- weight: should

### ui:home.what.2
- where: "No part of this site imitates Auden"
- problem: The paragraph opens by denying two things no student has supposed, which reads as the site answering its commissioner. Next comes a sentence that tells the student nothing ("You read the books and do the work"), then a mirrored pair. Every sentence is shaped for effect, and this is the paragraph that has to explain how the site works.
- fix: "The site checks the cantos you write from memory and your answers on matters of fact. It does not grade your papers. When you hand one in, it shows you what Auden wrote about the same book." If the point about imitation has to stay, put it last and as a fact: "What it shows is a report of his writing, with the source named."
- weight: must

### ui:home.how.list.5
- where: "When you have handed your paper in"
- problem: The front page has said this a few lines above, in ui:home.what.2, in nearly the same words.
- fix: Cut the sentence, so that the item ends at the word count. Or keep it here and cut it there. Say it once.
- weight: should

### ui:home.how.after.1
- where: "five cantos, from memory, in three hours"
- problem: The two commas are there for the drum roll. The fact has already been given in ui:home.what.1.
- fix: "The term ends with the examination: five cantos written out from memory in three hours."
- weight: could

### ui:home.week.read
- where: "pages are unread: {daily} a day"
- problem: Outside my lens, but it will be seen. The entry has no singular form, so with one page left it prints "1" and then a plural verb.
- fix: flag only. Add a singular form after a bar, as ui:home.week.arrears has, and have the program choose by the number left.
- weight: could

### ui:home.after.body.1
- where: "The examination remains"
- problem: A solemn verb for a status line. The sentence is also shown to every student once the term is over, including one who has passed the examination, and for that student it is not true.
- fix: "The term ended on {date}. You can still take the examination, and the ledger shows any reading left unread."
- weight: should

### ui:enrol.pace.semester.note
- where: "as he gave it"
- problem: "He" is Auden. On the front page he is last named several paragraphs above this form. The same form is shown again on the Ledger page, where he is not named at all. This is the first of five entries with the bare pronoun (see Patterns).
- fix: "{weeks} weeks, as Auden gave it: about {daily} pages a day."
- weight: should

### ui:term.intro.1
- where: "How he divided them among his Thursdays"
- problem: Auden is named nowhere on this page, so "he" and "his Thursdays" depend on the reader remembering the front page. The pronoun standing alone for the master is a mannerism.
- fix: Change "he" to "Auden" and "his Thursdays" to "the Thursday meetings". Leave the rest.
- weight: should

### ui:term.note.1
- where: "the editions he named"
- problem: The same bare pronoun, in a note at the foot of the same page.
- fix: Change "he named" to "Auden named".
- weight: should

### ui:test.intro.2
- where: "By one account Auden's own examinations at Swarthmore"
- problem: "By one account" withholds a source that the Sources page names in full, and the voice is meant to name its sources. "Own" contrasts with nothing.
- fix: "Monroe Spears reports that Auden's examinations at Swarthmore [quotation kept]"
- weight: should

### ui:question.intro.1
- where: "He told the class they would be tested"
- problem: "He" comes one paragraph before Auden is named on this page.
- fix: Begin the sentence "Auden told the class".
- weight: should

### ui:making.check.each
- where: "within the limit of {limit} words each"
- problem: A fault of assembly, seen only when the line is drawn. In week 6 the program fills {limit} with a symbol and a number, and the student reads "the limit of ≤ 15 words each". The line also never says what is being counted.
- fix: "{have} of {want} lines are within the limit of {limit} words." Have the program pass the bare number.
- weight: should

### ui:making.rhyme.note
- where: "Whether they rhyme is for your ear."
- problem: Two clipped sentences that set the machine against the ear and close on a turn of phrase. The same contrast ends ui:making.syll.note and shapes ui:home.what.2.
- fix: "The site groups your line-endings by the letters of the rhyme scheme. It cannot hear whether they rhyme, so check each group by ear."
- weight: could

### ui:making.syll.note
- where: "Trust your ear and your fingers."
- problem: Three short sentences ending on a maxim. The note leaves out the one thing the student needs to know, that the count decides nothing.
- fix: "The count is rough, and nothing depends on it. The site miscounts words such as [quotation kept] and [quotation kept]. Where its count and yours differ, go by yours."
- weight: should

### ui:heart.intro.1
- where: "five cantos of the Divine Comedy"
- problem: The title is in roman, against the house rule. See the third finding under ui:home.what.1.
- fix: *Divine Comedy*
- weight: should

### ui:heart.intro.2
- where: "to try it before they complained"
- problem: The Sources page reports the same remark as "told to try it first". The sharper ending here looks like the writer's, added for the snap.
- fix: flag only. If the source says no more than the Sources page does, end the sentence "were told to try it first."
- weight: could

### ui:heart.set.intro.1
- where: "Not examined."
- problem: Two words standing as a whole introduction: plainness as a pose. No piece is listed under this heading at present, so the line is not yet shown to anyone.
- fix: "These are learned in the same way. They are not part of the examination."
- weight: could

### ui:heart.how.5
- where: "What is not repeated is lost"
- problem: A maxim offered as a reason. It states a general truth with nothing behind it and gives the last step a sententious close.
- fix: Keep the first sentence. Replace the second with: "After that the canto comes due again at lengthening intervals, so that you still know it on the day of the examination."
- weight: should

### ui:heart.unverified
- where: "taken by machine from a scan"
- problem: A roundabout way of saying the text is an uncorrected scan. "Taken by machine" and "read against the printed page" step round the ordinary words, and the stepping round shows. Apart from the wording: the Sources page says the prose Dante was read against the page images and corrected, and this note says most of its cantos were not (88 of 100 carry it). The two should agree.
- fix: "The text of this canto comes from an uncorrected scan of the 1899–1901 edition. It may contain misread words."
- weight: should

### ui:heart.record
- where: "Writings-out"
- problem: A coined plural that stops the reader. The verb "write out" is the site's own and works. The noun made from it does not.
- fix: "Times written out"
- weight: should

### ui:heart.write.field
- where: "Your writing-out"
- problem: The same coinage as ui:heart.record, here as the name of the box the student writes in.
- fix: "Written from memory"
- weight: should

### ui:cantos.version.italian.note
- where: "For those who have it."
- problem: Coy. To "have" a language is a don's idiom and is not American usage. Since the site prints the Italian text, a student can also take the line to mean owning a copy.
- fix: "For those who read Italian."
- weight: must

### ui:cantos.unverified.note
- where: "came from the scan by machine"
- problem: The same circumlocution as ui:heart.unverified, in a clause that has to be read twice. The sentence then closes on a contrast that is plainer said outright.
- fix: First two sentences: "In the prose version you can choose only the cantos that have been proofread against the printed page. The others come from an uncorrected scan and may contain misread words, so they are offered for reading and cannot be chosen for learning." Keep the last sentence.
- weight: should

### ui:final.intro.1
- where: "No call came."
- problem: A documented event told as a yarn: a run of short sentences, a slide into "He would", and a three-word curtain line. The Sources page tells the same events plainly. The title is in roman, and the examination is called a "paper", which on the rest of the site is the weekly essay.
- fix: Keep the first sentence, with *Divine Comedy* in italics and "written examination" for "written paper". Replace the rest with: "The class called it impossible, and he cut the seven to five. He promised to learn the five himself on the journey to Los Angeles for Christmas, and to telephone and cancel the examination if he could not. He did not telephone, and the examination was held."
- weight: should

### ui:final.paper.title
- where: "The paper"
- problem: On the rest of the site a paper is the weekly essay (14 entries, and the name of a page). On this page and in ui:heart.rule.2 the same word means the examination (9 entries). That is also the British use of the word.
- fix: Heading: "The five cantos". In the other entries say "examination". ui:final.rules.3: for "the paper" read "what you have written". ui:final.hand.confirm: "Hand in the examination now?" ui:final.over.body, second sentence: "What you have written will be checked as it stands." ui:final.over.mark: "Check the examination". ui:final.result.pass: "You have passed the examination." ui:final.result.fail, second sentence: "Relearn it and take the examination again." (plural: "Relearn them and take the examination again."). ui:heart.rule.2, both sentences as one, in the form ui:term.intro.1 already uses: "How Auden graded the examination is not recorded, so this rule is the site's."
- weight: should

### ui:final.about.title
- where: "The examination he set"
- problem: "He" in a heading, printed above the paragraph that names Auden.
- fix: "Auden's examination"
- weight: should

### ui:ledger.kicker
- where: "The reckoning"
- problem: Mock-solemn. Over a table of pages and dates it is a costume word, and with "Ledger" beneath it the antique note is struck twice. It is the program's internal name for the page count, let through to the page.
- fix: "Your record"
- weight: must

### ui:notebook.intro.1
- where: "there is nowhere here to take any"
- problem: A quip at the site's own expense, and not quite true: the site has boxes for notes, and this page lists what is written in them. The third sentence then says the first again.
- fix: Keep the first sentence. Cut the second and third.
- weight: should

### index.html
- where: "set again as a working term"
- problem: "A working term" is a coinage, and the reader has to guess what it means. This sentence is what a search result or a shared link shows, so it should be the plainest on the site.
- fix: For those words read "laid out as a term you can take". For "the lines to learn by heart" read "the cantos to learn by heart".
- weight: should

## Patterns

1. British classroom words where the house rule asks for American English: about 30 entries. "Set" for assigned, 12. "Sit" and "sat" for an examination, 7. "Mark" for grading, 6, and the noun in 2 more. "Paper" for the examination, 9, in a site where a paper is otherwise the weekly essay (14). Seen at ui:cantos.intro.1 and ui:final.result.fail. The Sources page has "took", "graded" and "required" for the same things, so the site is not consistent with itself.
2. A line written for effect: a slogan, a maxim, a curtain line, a quip, a clipped fragment. 10 entries. Seen at ui:final.intro.1 and ui:making.syll.note. The others: ui:home.lede, ui:home.what.2, ui:home.how.after.1, ui:home.after.body.1, ui:making.rhyme.note, ui:heart.set.intro.1, ui:heart.how.5, ui:notebook.intro.1. In four of them it is the closing line of the entry.
3. An antique, donnish or roundabout word where an ordinary one exists: 6 entries. Seen at ui:ledger.kicker and ui:heart.unverified. The others: ui:cantos.version.italian.note, ui:heart.record, ui:heart.write.field, ui:cantos.unverified.note.
4. Auden called "he" with no name before it on the page: 5 entries. Seen at ui:term.intro.1 and ui:question.intro.1. The others: ui:enrol.pace.semester.note, ui:term.note.1, ui:final.about.title.
5. "Machine" for the program: 5 entries. In three it is set against the student's ear or judgment, which is a figure and not information. Seen at ui:making.rhyme.note and ui:home.what.2. The fixes above say "the site", as the disclosures already do.
6. One fact told twice on the front page: 4 pairs. What happens to a paper (ui:home.what.2 and ui:home.how.list.5). The examination (ui:home.what.1 and ui:home.how.after.1). The pointer to Sources (ui:home.how.after.2 and ui:colophon.1). Where the work is kept (ui:enrol.intro.2 and ui:colophon.2). Only the first pair is close enough to word for word to need a cut.
7. The title of a book in roman: 3 entries. Seen at ui:home.what.1 and ui:final.intro.1.
8. Faults that come from the program and not from the wording: 3 entries. An internal name on the page (ui:ledger.kicker), a symbol inside a sentence (ui:making.check.each), a missing singular (ui:home.week.read).
9. A remark of Auden's given an edge that the Sources page's report of it does not have: 2 entries, ui:home.what.1 and ui:heart.intro.2.
10. The site talking about itself beyond the student's need: 2 entries, ui:home.what.2 and ui:notebook.intro.1. The four entries that say what is the site's own (ui:colophon.1, ui:home.how.after.2, ui:term.intro.1, ui:heart.rule.2) are doing their job and are not counted.

What this part does not have. No em-dashes, no exclamation marks, no rhetorical questions: the three question marks are one real prompt and two confirmations. None of the inflated verbs and adjectives on the list. No hedging beyond honest approximation. The instructions, buttons and status lines, which are most of the 405 entries, are clear, and I have left them alone.

Seen in the program, outside the text supplied, for the editor to weigh:
- The ledger table prints an em-dash in an empty cell, and the missing-words result prints one for a gap left blank (site/js/views/ledger.js lines 71 to 73, site/js/views/words.js line 55). The house rule bars em-dashes.
- Every {date} is filled with the month and day and no year (site/js/lib/dates.js, the function named medium). A term can run a year, and the saved text file is headed with the same short date.
