# UX-2: the student late in the term, and at the examination

Tester's report. Desktop viewport 1200 by 900 and phone viewport 390 by 844, Chromium through Playwright, against http://localhost:8135/ on 2 October 2026. Screenshots are in ../ux2/ (the folder r2/ux2). The main student enrolled by the form with a first day of 24 July 2026, so that today falls in week 11; other students were made in separate browsers where a test would have spoiled that record.

## Findings

### #/ (home, enrolled ten weeks late)
- did: enrolled by the form: first day 24 July 2026, one semester, nothing read
- saw: three different figures for one debt. Header and tile: 3,043 pages behind. A sentence on the same page: 2,840 pages from earlier weeks unread. The Progress table's overdue rows (weeks 1 to 10) add up to 3,014. The 2,840 is false: home.js takes the prorated "behind" (3,014 plus one day's 29 of this week) and subtracts all 203 of this week's unread pages.
- want: the earlier-weeks sentence should give the unread pages of weeks already ended (3,014 here). Same fault at the slower paces: 1,168 shown where 1,433 is true; 457 shown where 470 is true.
- kind: bug
- weight: must
- shot: 02-after-enroll.png, 03-ledger-behind.png

### #/ (home, first minute of the term)
- did: enrolled a second, throwaway student with today's date, at each of the three lengths
- saw: the header at once says, in red, "Week 1 of 15 · 32 pages behind" (16 at two semesters, 9 at a year), and keeps saying it on every page. The count treats today's share as owed before the day is over. At the year's pace the same page says 9 behind and 10 a day.
- want: count as behind only what was due by the end of yesterday; on day one show nothing, or "32 pages for today" in the ordinary colour. Nobody should open the course already in arrears.
- kind: design
- weight: must
- shot: 05-fresh-semester-today.png, 05-fresh-year-today.png

### #/ and #/ledger (the late student's way out)
- did: read both pages as the student ten weeks behind
- saw: the debt is stated in plain numbers with no scolding, which is right. But the only mention that the calendar can be moved is on the enrollment form, which is gone once you enroll. The control itself is a closed disclosure at the very foot of Progress.
- want: when the arrears pass a week's reading, one line on the home page: the calendar can be moved, with a link to that control.
- kind: design
- weight: should
- shot: 02-after-enroll.png

### #/ledger (Change the calendar)
- did: saved a new length twice, a new first day, an empty date, then put it back
- saw: all work; nothing done is lost; an empty date is refused by the browser. After saving, the disclosure shuts and the sentence giving the term's dates changes, but nothing says the change was saved and keyboard focus falls to the page body.
- want: a short "Calendar saved" beside the dates, and focus left on the disclosure.
- kind: design
- weight: could
- shot: 04b-ledger-two.png

### #/ledger (Dates column at the slower paces)
- did: read the table after choosing two semesters and a year
- saw: ranges that reach 2027 are written three ways: "Dec 25 to Jan 7, 2027", "Jan 8–21, 2027", "Jan 22, 2027 to Feb 4, 2027".
- want: the year once in each range.
- kind: wording
- weight: could
- shot: 04b-ledger-two.png

### #/term
- did: read the list of fifteen weeks to learn the shape of the course
- saw: the order and weight of the reading are clear: title, dates, books and pages for each week, each row a link. But the list shows only books. The nine operas are absent, so nothing says which weeks carry one; nothing says which cantos fall due when, what kind of exercise a week sets, or that the examination ends the term. The six parts are described once, below the list.
- want: on each row a short second line of the work: the opera if there is one, the canto due, the kind of exercise. A sixteenth row for the examination.
- kind: design
- weight: should
- shot: 07-term.png

### #/term and #/ledger (what red means)
- did: compared the two lists of weeks
- saw: on The term the one red thing is the number of the current week. On Progress red marks the weeks that are overdue and the current week is grey. One colour, two meanings, on two lists of the same fifteen rows.
- want: keep red for arrears. Mark the current week with words ("this week") or weight.
- kind: design
- weight: should
- shot: 07-term.png, 03-ledger-behind.png

### #/unit/10/making and #/unit/14/making (how many lines)
- did: tried to finish the French with three lines and the German with two, nine, ten and eleven
- saw: the instructions ask for twenty-four lines and for twelve. The refusal says the version "needs at least 22 lines" and "at least 10 lines". Ten or eleven lines of the German pass. The count under the box is of words, though the rule is about lines. Stanzas and line length, which the instructions also ask for, are not checked and nothing says so.
- want: one number. Either hold to 24 and 12, or say in the refusal what is being counted: "The French has 24 lines; yours has 3." Count lines under the box. Add a sentence that only the number of lines is checked.
- kind: wording
- weight: should
- shot: 19a-u14-toofew.png

### #/unit/10/making and #/unit/14/making (empty box)
- did: opened each exercise and looked for how to finish
- saw: the finishing button is greyed and gives no reason until something has been typed; then the reason appears beside it, below the whole word-list, several screens down from where the poem and the box begin.
- want: show the requirement beside the button from the start.
- kind: design
- weight: could
- shot: 09-u10-making.png, 11a-u10-toofew-button.png

### #/unit/10/making (after finishing)
- did: finished, read the closing note, answered the question about the Latin word, reloaded
- saw: sound: the page says honestly that the magazine printed no English, so there is nothing to compare; the answer survives a reload; Reopen works. Two small gaps: the note sends you back to the chapter but gives no link to it, and nothing says the answer typed in the last box is kept.
- want: link the chapter (#/read/rimbaud/s5); a word under the box that it is saved as you type.
- kind: design
- weight: could
- shot: 17-u10-yourversion-done.png

### #/unit/11/making (after the version of the cantos is changed)
- did: finished the exercise in the prose version (marked 7 of the 10, restored 5), then on #/cantos chose Longfellow, then the Italian, and reopened the exercise each time
- saw: the page still says "Done on October 2" but now prints the passage in the new version with the result "You marked 0 of them and restored 0 exactly", every row "not marked", and all ten answers for that version laid out in the table and in the restored passage. A false record, and the exercise in the new version is given away before it is tried. The real result is hidden until the version is changed back. Reopen in one version also un-finishes the other (week page goes from "done" to "begun").
- want: keep "done" per version, as the examination already does: its record holds the version it was taken in, and its result still reads rightly after the same change. If the exercise was done in another version, show that result and say in which version it was done; or offer the exercise fresh in the new version with nothing revealed.
- kind: bug
- weight: must
- shot: 26b-u11-longfellow.png, 27a-u11-italian.png

### #/unit/11/making (which version, and why)
- did: looked, before starting, for which version of Dante I was being tested in and why
- saw: the introduction says the passage is "in the version you chose for the cantos". I had chosen nothing; the site had set the prose version. The translator is named only in small type under the passage. The reason (it is the version Auden assigned) is on #/cantos, and this page has no link there.
- want: "in the version set for your cantos, Carlyle's prose", with a link to #/cantos. Do not say "you chose" unless the student did.
- kind: wording
- weight: should
- shot: 20-u11-emend.png

### #/unit/11/making (the result)
- did: finished with five right corrections, two wrong, three changes missed, and one sound word altered
- saw: the count is right and the tone is right: the sentence about knowing a canto by its drift is the best line on the page. But rule 4 promises that an altered sound word is "counted and shown"; it is counted in a sentence and not named anywhere. In the passage all eight of my corrections are the same red, right or wrong. In the table a right answer differs from a wrong one only by bold type.
- want: a line naming each sound word altered ("You changed … which was sound"). In the passage and the table, mark right and wrong differently, with a word as well as a weight.
- kind: design
- weight: should
- shot: 22-u11-result.png, 28-u11-result-table.png

### #/unit/11/making (caption under the restored passage)
- did: read the section headed as the passage in the book's own words
- saw: its caption repeats the caption of the altered passage and ends "with ten words changed". Under this passage that is untrue. Same in all three versions.
- want: under the restored passage, the source alone.
- kind: wording
- weight: should
- shot: 22-u11-result.png

### #/unit/13/making (Auden's chart, shown after finishing)
- did: filled fourteen boxes, finished, read the chart that is shown for comparison, at 1200 by 900
- saw: the comparison chart is 760 px wide in a box 722 px wide, so its last column, which holds Auden's entries, is sliced at the right edge in mid-word on every row. The box scrolls sideways but shows no scrollbar. My own chart above it uses the full 1,064 px, and there are 340 px of empty page to the right of the cut.
- want: set the comparison chart in the same wide column as the student's chart, or let its columns shrink to the box.
- kind: layout
- weight: must
- shot: 31-u13-auden-chart-1200.png, 30b-u13-done.png

### #/unit/15/making (the rule of ten books)
- did: filled fourteen boxes with the same play and the same four-word reason, then pressed the finishing button
- saw: accepted without a word. Rule 3 asks for at least ten different books; only the number of filled boxes is counted (a single letter fills a box, here and in week 13). Nothing on the page says which rules the site checks.
- want: one sentence under the rules: the site counts the boxes and leaves the ten books to you. Or count distinct titles from the reading list and say how many it found.
- kind: design
- weight: should
- shot: 33b-u15-onebook.png

### #/unit/13/making (small things)
- did: read the instructions against the table
- saw: rule 1 asks what answer the Pequod gets; the column is headed with what the ship knows of the whale. Two names for one box. The footnote before finishing is a bare title and page numbers; that it is a book by Auden is said only after finishing.
- want: head the column with the words of rule 1. In the footnote give the author and the year with the title and pages, and add that the exercise is this site's.
- kind: wording
- weight: could
- shot: 29-u13-chart.png

### #/unit/9/making (the rule about the last line)
- did: wrote eight one-word lines with a full stop after the eighth, then eight lines of fourteen syllables that rhyme
- saw: both pass. The number of lines is held to exactly eight (seven and nine are refused, with a cross and the count). Syllables are counted line by line in a table, and the note under it is a model of plain dealing: the count is rough, nothing depends on it, go by your own ear. But rule 4, no full stop at the end of line eight, is the one rule a machine can check for certain, and it is not checked. Nothing is said of stress or rhyme, which it cannot check.
- want: check the last character and refuse a full stop with the reason. Add to the note: the site cannot hear stress or rhyme.
- kind: design
- weight: should
- shot: 36b-u9-period.png, 37-u9-lines-line.png

### #/unit/6/making (which line is too long; forms of a barred word)
- did: broke each rule in turn: nine lines, eleven, one line of seventeen words, a barred word, all seven barred words
- saw: each refusal says what is wrong: the line count against ten, how many lines are within fifteen words, and the barred words by name. Words that only contain a barred word are rightly let through. Two gaps. The long-line message gives a tally (9 of 10) and not the line. A barred noun in the plural passes, as do the adjectives of barred nouns, while a possessive is caught.
- want: name the line that is over and its count. Say whether the bar covers plurals; if it does, catch them.
- kind: design
- weight: could
- shot: 43d-u6-all.png

### #/unit/12/making (word count and dashes)
- did: gave 299, 300, 600 and 601 words, then 300 words of which half were joined by unspaced dashes
- saw: the limits hold at both ends and the message gives the count and the range. Two words joined by an unspaced dash count as one, so a chapter written with Melville's dashes is undercounted. The rules about three Books, two Chapters in each and the one-word title are not checked, which the list of checks makes plain enough.
- want: count across a dash as two words.
- kind: bug
- weight: could
- shot: 40a-u12-299.png

### #/unit/15/question/1, #/unit/13/question/1, #/unit/14/question/3 (the paragraph under "Your reply")
- did: handed in a paper in each of weeks 13, 14 and 15 and read what follows it
- saw: the same sentence stands under every response. It begins "Unless the paragraphs above ask for something else" and then asks where I and Auden differ and which of us is right. In week 15 the paragraph just above it tells me to set the two readings side by side without trying to settle who is right. In week 13 the paragraph above has already asked its own question for the reply. In week 14 the site has just said that no answer of Auden's to this question has been found. So the student reads two instructions an inch apart and must work out which governs; in week 15 they say opposite things. The "Unless" clause is a template showing through.
- want: where the response gives its own instruction for the reply, print nothing under "Your reply" but the note that it is saved as you write. Keep the general instruction only for responses that give none, and drop the "Unless" clause from it.
- kind: wording
- weight: should
- shot: 58-u15-q1-last.png, 52c-u13-handed-full.png

### #/unit/13/question (how a question is chosen)
- did: opened the list of four questions to choose one
- saw: nothing on the page looks like a control. Each question is a link with no underline until the mouse is over it; on a phone there is no hint at all. The instruction says to choose one and does not say how.
- want: "Open a question to answer it", or a visible "Answer this one" under each.
- kind: design
- weight: should
- shot: 47-u13-question.png

### #/unit/7 and #/unit/15 (the opera)
- did: read the opera section in both weeks, ticked the listening box in week 7, unticked and ticked it again
- saw: clear. Read the libretto, find a recording because the site has none, listen with the libretto open, tick the box; what Auden said then appears, with sources, and goes away if the box is unticked. Each opera has a note on what to listen for and its length. The tick can be faked, and that only cheats the student. Two gaps: no word on where a complete recording may be found, and the tick is recorded nowhere but on the week's page.
- want: one line of practical help (a public library, a streaming service; any complete recording will do). Show operas heard on Progress.
- kind: design
- weight: could
- shot: 45b-u7-opera-after.png

### #/cantos (a fifth canto chosen in one version, then the version changed)
- did: in Longfellow chose Inferno XIII as the fifth canto, then went back to the prose version
- saw: in the prose version the page allows only eight cantos, and says why: the others have not been read against the printed book and may hold a misread word. That is clear and honest, and a closed cell says so on hover. But the canto chosen in Longfellow stays chosen: its cell is filled though closed, the foot of the page names it, and By heart and the examination then set it in the prose text the page has just called unfit to learn from. Nothing is said at the change.
- want: on changing to the prose version with a closed canto chosen, clear the choice and say so, or refuse the change until another canto is chosen.
- kind: bug
- weight: should
- shot: 61-cantos-prose-13-view.png

### #/examination (the result: a script that is short or approximate)
- did: wrote the first three stanzas of one canto exactly and the opening of another in my own approximate words, handed in, opened the comparison for each
- saw: the words I wrote for the first two stanzas of the last canto are matched against the whole canto, so some are shown struck through eight stanzas further on, where I wrote nothing. A canto left empty, or broken off, is printed entire in red with an underline and a caret before every one of a thousand words. The marking is exact for a slip in a full script and unreadable for a partial one.
- want: match a short script against the part of the canto it covers. Print an unwritten stretch plainly, with one note of its length.
- kind: design
- weight: should
- shot: 70b-exam-par33-open.png, 70a-exam-inf3-open.png

### #/examination, #/heart, #/ledger (an empty box recorded as written out)
- did: left three of the five boxes empty and handed in
- saw: all five cantos now stand as "written out; over the limit", with 1 in the Written out column, on Progress, on By heart and on the examination page. Three of them were never written.
- want: a box left empty should leave the canto's standing as it was; in the result call it "not written".
- kind: bug
- weight: should
- shot: 71a-ledger-after.png

### #/examination (the result: figures and words)
- did: read the summary lines
- saw: the figure of wrong words has no comma and the total beside it has one ("5243 words wrong in 5,323", and so in each canto's line). "Wrong" also covers words never written, so a canto with 57 right words and nothing else reads "909 wrong in 966". The tone is right throughout: a pass is the one word "passed" in black, a failure is a count and an instruction, with no cheering and no scolding.
- want: commas in both figures. For each canto say how many words were written, then how many were wrong or missing.
- kind: wording
- weight: should
- shot: 69c-exam-result-top.png

### #/examination (when the time runs out)
- did: in a throwaway copy, set the start so that fourteen seconds remained, and kept typing; in another, let the three hours end with the browser shut, and came back
- saw: at zero the boxes vanish in mid-word and the result appears. The time is given as 180 minutes; nothing says that the time was up and the script was taken in. The clock gives no sign that the end is near; the header had rounded fourteen seconds up to "1 minute left". The other case is handled as it should be: on return the header says the time is up, and the page says in two plain sentences that the three hours ended while it was closed and that the script will be checked as it stands, with a button to see the result.
- want: say as much when the time ends under the student's hands: a line at the head of the result that time was up and what was written was handed in. A change in the clock for the last five minutes.
- kind: design
- weight: should
- shot: 72a-exam-last-seconds.png, 72b-exam-timeup.png, 109b-away-exam.png

### #/examination (pasting, and small things while the clock runs)
- did: pressed Ctrl+V in a box; dropped text on it; left the page for By heart, Progress and home, and came back
- saw: the writing and the clock survive a reload and a new browser window, and the header keeps a red link back with the minutes left: sound. A paste is swallowed with no word, and the running page does not repeat the rule; dropped text is not stopped. The line before the clock button says the three hours start now, before they do. While the clock runs, By heart shows each canto in full one click away, and Progress says the examination is "Not yet taken".
- want: a short notice when a paste is refused. "The three hours start when you press the button." Cover the canto pages during a sitting, or say plainly that the book is to stay shut. On Progress: "in progress".
- kind: design
- weight: could
- shot: 67a-exam-paste.png

### #/unit/11/making at 390 by 844 (the table of what was changed)
- did: marked and corrected words on the phone, finished, read the result
- saw: marking is workable: every word is a target 41 px high, though one-letter words are only 7 to 9 px wide. The result is harder. At this width the table's header row is hidden and its cells carry no labels, so each changed word becomes three bare words stacked: the printed word, the book's, and mine, with nothing to say which is which. The week 13 chart at the same width does label its stacked cells.
- want: label each stacked cell as the chart does: printed, the book has, you wrote.
- kind: layout
- weight: should
- shot: 81d-phone-emend-table.png

### #/examination at 390 by 844 (the list of attempts)
- did: took the examination on the phone, handed in, came back to the page
- saw: while the clock runs the page is good on a phone: a bar with the time stays at the top, each box is the width of the screen, the type is 18 px. Once there is an attempt, its table is 505 px wide and is not set in a scrolling box, so the whole page becomes 523 px wide on a 390 px screen and slides sideways. The columns for words wrong and cantos passed are off the edge.
- want: stack the cells with labels at this width, or set the table in a scrolling box as Progress does.
- kind: layout
- weight: should
- shot: 83i-phone-exam-attempts.png

### #/ledger at 390 by 844 (three tables)
- did: read Progress on the phone
- saw: each of the three tables is 648 px wide in a box of 354 px that scrolls sideways, with no bar and no hint. What shows is the week and its dates; the canto and its lines; the date and the time taken. Pages read is cut in half. The columns for the test, the paper, the exercise, the standing of each canto and the words wrong are off the screen. A student could take the page for a calendar.
- want: at this width stack each row with labels, or drop the dates and narrow the table until the record fits.
- kind: layout
- weight: should
- shot: 84-phone-ledger.png

### #/read/hamlet/a3s1 at 390 by 844 (verse in a play)
- did: read a scene of a play and a chapter of a novel on the phone
- saw: the novel reads well: 18 px type, about 43 characters to the line, the controls for marking a chapter read and moving on at its foot. In the play each speaker's name already stands on a line of its own, yet every speech is also set in by 47 px, so 106 of the scene's 153 lines of verse turn over to carry one or two words. The turned lines are indented as they should be, so it can be read, but two lines in three are broken.
- want: at this width drop the indent of the speeches; if lines still turn, set verse one size smaller.
- kind: layout
- weight: should
- shot: 86-reader-hamlet-mid.png, 85-reader-moby-mid.png

### #/papers (the record of what was written)
- did: read the page with eight exercises, three papers and a reply on it; saved a copy; took the plain-text file; restored the copy in a fresh browser; offered it a wrong file
- saw: everything written is here in the order of the term, with dates; the copy restores exactly in another browser; a wrong file is refused in plain words; replacing asks first. Two blemishes. The charts of weeks 13 and 15 are printed as flat lists, with the long column headings repeated on every row. After a restore nothing says that it was done; the page simply fills.
- want: print a chart as the table it was made in. One line after a restore: what was restored, and of what date.
- kind: design
- weight: could
- shot: 76c-papers-ships.png, 78e-after-restore.png

### #/read/moby-dick/c999 and #/heart/canto%3Atemple%3Ainf-99 (a chapter or canto that does not exist)
- did: opened addresses the site does not have: #/nonsense, #/unit/99, #/unit/0, #/unit/16, #/unit/abc, #/unit/13/question/9, then a chapter, a book and a canto that do not exist
- saw: a wrong page, week or question gets a plain "No such page" and a pointer to the menu, on desktop and phone: sound. A wrong chapter, book or canto gets the other message: the page could not be shown, load it again. Loading again can never help, and no way back is offered.
- want: where the file is simply not there, say "No such page" as elsewhere, with a link to the book's contents. Keep the load-again message for a failed connection.
- kind: wording
- weight: could
- shot: 90-odd-4.png, 90-odd-2.png

### #/unit/8/question/1 (a very long paste, and a save that fails)
- did: in a throwaway copy pasted 5,000, 50,000 and 300,000 words into a paper, reloaded, handed the longest in; then pasted a million words, more than the browser will store
- saw: up to 300,000 words everything holds: saved, back after a reload, handed in, shown on Papers. The counter drops its commas ("300000 words"). The million words are not saved, which no site could help; but the page goes on saying the draft is saved as you write, and a reload brings back the older text without a word. The site has a notice for a browser that is not saving, and in a browser that refuses storage altogether it appears, clearly; but only the home page shows it.
- want: show that notice on the page where the save failed (a paper, an exercise, the examination), and take it down when a save succeeds.
- kind: bug
- weight: could
- shot: 97a-quota-viewport.png, 95-setItem-throws-after.png

### #/ (home: the last-day tile)
- did: looked at the four figures under the week, at 1200 by 900
- saw: the last day of term is set in the large figure type in a tile 181 px wide and does not fit: the month stands on one line and the day alone on the next; when the term ends in another year, the year falls to a second line. The four tiles sit in the narrow column with 450 px of empty page beside them.
- want: set the date a size smaller, or shorten the month, so that it holds on one line.
- kind: layout
- weight: could
- shot: 99-home-top.png

### #/heart/canto%3Atemple%3Ainf-03 (words in square brackets)
- did: read the first canto to be learned, in the prose version, as a student about to learn it
- saw: seven words or phrases stand in square brackets. What they are (the Temple editor's alterations) is said on the Reading list and on the contents page of that version, and nowhere on By heart or the examination. The comparison strips the brackets and counts the words, so they must be written; the student is not told.
- want: one line on the canto's page: the brackets are the book's, and the words in them count.
- kind: wording
- weight: could
- shot: 64-heart-inf3.png

### #/ and #/ledger (after the examination is passed)
- did: in a throwaway copy wrote all five cantos exactly, handed in, and looked round the site; then moved that student's calendar so that the term was over
- saw: the result is right: five of five, no words wrong, and one sentence saying the examination is passed, with no cheering. Nothing else on the site knows it. Progress shows the pass only as figures in the last row of a table of attempts. When the term is over, the home page tells this student, as it tells one who failed, that the examination can still be taken.
- want: on Progress a line in words: examination passed, and the date. On the home page after the term, for a student who has passed, say that in place of the invitation.
- kind: wording
- weight: should
- shot: 103a-exam-fullpass.png, 105-endedpassed-home.png

### #/read/augustine/book-10 (keeping one's place in a long page)
- did: on the phone scrolled two-fifths of the way down the page, reloaded; again, opened By heart from the menu and pressed Back. The same on the desktop in a chapter of Moby-Dick
- saw: each time the page reopened at its first line. The reader records only that a whole part has been read. A new page rightly opens at its top, but Back does too. The longest pages are long: this one is some 16,000 words, 75 screens on the phone, with no headings inside it; two sections of Pascal run to nearly 14,000 words, and chapters of Karamazov and The Castle to nine and ten thousand. A phone that reloads the tab after a call puts the student back at the beginning.
- want: remember the place in each part and return to it on reload and on Back; failing that, break the longest pages at the book's own section numbers.
- kind: design
- weight: should
- shot: 114-phone-augustine-after-reload.png

## What works

- Every week sets work that is held to stated rules: translation from a word-list, the changed words, the charts, the parodies. Refusals say plainly what is wrong, and the week 9 note says what its syllable count is worth.
- Papers: a floor of 150 words, a warning before handing in, then what Auden wrote or said, in the site's words with references. Where nothing of his is known, the page says so.
- The examination is real and restrained: a three-hour clock that survives a reload and a shut browser, comparison word by word, a pass given in one sentence. No cheering and no scolding anywhere.
- Nothing was lost in any ordinary test: reloads, two tabs, a saved copy restored in a fresh browser, a paste of 300,000 words. Dates follow the student's own clock (tested late at night in Michigan and on the day the clocks change). Wrong addresses get a plain message. No console errors on any real page.
- On a phone the chart exercise, the running examination and a chapter of a novel all work and read well.

## Verdict against the brief

- Not static. The site sets work each week, checks what it can, keeps a dated record, and ends in an examination that can be failed.
- Not cheesy. No role-play, no voice put into Auden's mouth, no badges or praise. He appears only as reported, with sources, and the site says where it supplies something of its own.
- It does make the student work as the sources say he taught: cantos by heart, emendation, charts, parody, translation, a paper against a question.
- What stands between it and publication is bookkeeping and fit, not conception: the arrears figures, the week 11 record after a change of version, and tables that do not fit (week 13 on the desktop; Progress, the attempts and the week 11 result on a phone).
