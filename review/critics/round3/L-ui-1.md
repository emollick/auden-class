# L-ui-1 (the app's own words, from ui:site to ui:question), last read: both lenses, and against the code

Four findings: two "must", two "should". Every other marked sentence in my share is sound.

How I read. For every marked string I found the place in `site/js` that prints it, read what stands on the screen with it, and worked out from the code what goes into each pair of braces. Where the code left a doubt I opened the built page in Chromium and read the string there: the front page in eight states, The term, weeks 1, 4 and 6, Missing words, the test, the questions, and the masthead in the last minutes of the examination. The counts the strings give were checked against the built course data, and the part file was checked against `content/ui.mjs` as it stood while I read (saved at 17:04, no difference).

Findings are in the order of the file. In a fix, [quotation kept] stands for words that the string has inside quotation marks and that stay as they are.

### ui:home.after.passed.1
- where: You passed the examination on {passed}.
- problem: The paragraph is three short sentences of one build, each a subject, a verb and a date or an object, and the heading over it ("Term is over") makes a fourth. That is the run house rule 8 rules out. The paragraph shown to a student who has not passed (ui:home.after.body.1) has two sentences of different builds and does not read this way.
- fix: The term ended on {date}, and you passed the examination on {passed}. The Progress page shows any reading left unread.
- weight: should

### ui:unit.omit
- where: The book is left out of the week’s page count
- problem: This is true only while the box under the note is empty. When the student checks that box (the one whose label begins "Read it anyway"), the program adds the book's pages to the week, and the note stays on the page. I did it in week 6 as a student in that week with nothing read: the line over the list went from "0 of 285 pages read" to "0 of 421 pages read", the masthead went from 1,474 pages behind to 1,494, and the note directly above the checked box still said the book was left out of the count. (`term.js` prints the note for any book marked for omission, checked or not; `schedule.js` counts the book as soon as the box is checked.)
- fix: Keep the first sentence and replace the second, so that the whole string reads: "Someone wrote [quotation kept] beside this book on the published copy of the list. No test depends on the book, and no question on it is required. Its pages are added to the week’s page count only if you check the box below." Here [quotation kept] is the one quoted word of the first sentence.
- weight: must

### ui:words.source
- where: where he taught from 1942 to 1945, Auden gave
- problem: "he" comes six words before the name it belongs to, in a note that is shown as a block by itself (house rule 5). The note stands under a passage and a setting that are about other men (in week 1, Ulysses and Hercules), so for those six words "he" has the wrong owner. The wording came in with a second-round fix. The sister note under the test (ui:test.source) puts the name first.
- fix: At Swarthmore College, where Auden taught from 1942 to 1945, he gave his classes poems they had not seen, copied with words left out, and had them fill the gaps. See [Sources](#/about).
- weight: should

### ui:test.none
- where: No answer.
- problem: The program prints this on every missed item in which nothing entered was wrong (`test.js`, `verdict`), and that is more than the items left empty. In the six weeks where a passage asks for the book and the speaker (weeks 2, 4, 5, 6, 7 and 14), an item with one of the two given and right gets it too. I took the week 2 test in the browser. The right speaker typed with the menu left unchosen, and the right book chosen with the speaker's box empty, were both marked with these two words, and both answers were counted in the score (16 right out of 20). A student who is unsure of the book will often leave the menu alone, and is then told that an answer the program accepted was not given.
- fix: Left blank.
- note for the editor: "Left blank." is true in all three cases (the menu left alone, the box left empty, both), and it is the name the Missing words page already gives an empty gap (ui:words.empty). A message of its own for the half-answered item would need a change in `test.js`, and I am not asking for one.
- weight: must

## Patterns

1. One string printed in two states of a page and true in only one of them: 2. See ui:unit.omit (the box under it unchecked, then checked) and ui:test.none (an item left empty, and an item half answered). Neither can be seen by reading the strings alone, and both were found in the code and confirmed in the browser.
2. A track of the last revision: 2. A second-round fix that put the pronoun ahead of the name (ui:words.source), and a worker's new paragraph that nobody had read as prose (ui:home.after.passed.1).

What was checked and holds. The counts in the marked strings agree with the built data: nine weeks have an opera, every week has from two to five questions, the least length of a paper is 150 words in the code, the five cantos come to between 686 and 731 lines according to the fifth chosen, every passage has 9 or 10 gaps, and all nine libretti are printed. Every control that a marked string names is on the page under that name: the button that opens week 1, the button that shows the book’s words, the button that saves a copy on the Written work page, the control that changes the calendar with its first day and its length, the menu labeled Book, and the pages Progress and Written work. No pointer to the old name of the Written work page is left in `content/` or `site/js`. Each string with a bar was read in both forms with the number the code gives it, and the dates, titles in italics and times that fill the braces read rightly. In the marked sentences I found no em-dash, exclamation mark, rhetorical question, hedge or staged colon, and nothing that scolds, cheers or jokes.

Afterword, 17:56. While this report was being finished, `content/ui.mjs` was saved again (17:54) with the four strings above changed to the wording given here. I read each one again on the rebuilt site: the note under *Faust* in week 6 with the box unchecked and checked, the week 2 test with half-answered items, the front page of a student who passed after the term, and the note under Missing words in week 1. All four now say what the program does and read rightly in their places. No other string in my share was changed by that save.

Marked sentences read: 60, in 45 entries (a string with a bar counted once, both forms read). Findings: 4 (2 must, 2 should).
