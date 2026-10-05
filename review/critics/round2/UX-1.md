# UX-1: the new student

Tester's report on http://localhost:8135/ , driven in Chromium through Playwright, desktop 1200 by 900 and phone 390 by 844. Enrolled through the form on 2026-10-02 at the ordinary pace. Screenshots are in the ux1 folder beside this report's parent.

The served files did not change during the test: every finding is against the site folder as built by 13:35 on 2026-10-02. The content sources were edited after that time and are not covered. The three "must" items were measured again at the end and still stand.

## Findings

### #/read/dante/inf-01 (and every canto of the prose Dante)
- did: opened Inferno I from week 1 at a window 1200 wide, then tried widths from 760 to 1440.
- saw: the line numbers hang to the left of the text and the window cuts them off. From about 840 to about 1400 wide, only the last 12 pixels of each number show: line 100 reads as "00", 124 as "24", and two-digit numbers lose half a digit. At 1440 and at 800 they are whole. Longfellow and the Italian are indented and are not affected.
- want: room for the numbers at every width (indent the prose as the verse is indented, or give the column a left margin of 3em). The by-heart work is set by line number, so these numbers are used.
- kind: layout
- weight: must
- shot: 07-reader-foot.png, 08-linenos-1440.png (for comparison)

### #/ (home, straight after enrolling)
- did: pressed "Begin the term" with today's date and one semester.
- saw: the masthead says, in red, "32 pages behind", and a tile repeats it. I had been enrolled for one second on the first day.
- want: count a day's pages as owed when the day is over, or say "32 pages due today" on the day itself. Red "behind" before the student has had a chance to open a book is a small scold, and it is not true.
- kind: design
- weight: should
- shot: 04-home-enrolled.png

### #/read/dante/inf-01 → Longfellow → Italian
- did: scrolled to the middle of the canto, clicked "Longfellow's verse", then "the Italian".
- saw: each version opens at the top of the canto. To compare one tercet in three versions I had to find my line again three times.
- want: keep the reader at the same line when the version changes (all three carry line numbers).
- kind: design
- weight: should
- shot: 90-version-switch-top.png

### #/unit/1 (the small box beside "Inferno", "Purgatorio", "The libretto")
- did: marked cantos I to III as read one at a time in the reader, came back, ticked the box beside "Inferno" and then unticked it.
- saw: the tick marked all 34 cantos read (104 pages, "72 pages ahead") with no question asked. The untick cleared all 34, my own three among them, with their dates: "0 of 34 read". The box has no visible label, sits half-filled when part is read, and is 13 pixels square.
- want: unticking should put back what was marked before the tick, or the box should ask before it clears marks it did not make. Give it a visible label ("mark all 34 as read").
- kind: bug
- weight: must
- shot: 12-week-purg-ticked.png

### #/heart/canto:temple:inf-03/learn (returning to a stretch already done)
- did: finished stretch 2 with the text covered, left, came back through the Learn tab.
- saw: the stretch is headed "done", and the only way forward is the link "Skip this stretch". The button "Next stretch" shows only in the moment after a clean check.
- want: on a stretch that is done, label the forward control "Next stretch". "Skip" tells the student he is dodging work he has finished.
- kind: wording
- weight: should
- shot: 90-learn-done-stretch.png

### #/heart/canto:temple:inf-03/learn (status line)
- did: wrote stretch 1 right with the text covered.
- saw: the line under the title still read "not begun". It changed to "being learned" only after a reload.
- want: update the status when the check passes.
- kind: bug
- weight: could
- shot: 21-covered-right.png

### #/heart/canto:temple:inf-03/write
- did: wrote 18 lines of the 136, all right, and pressed "Compare with the text".
- saw: "846 words wrong in 966", then "Not yet. The limit is 9." The 846 were not wrong; they were not written. The key to the red marks comes after the whole marked canto, four screens down.
- want: "846 of 966 words wrong or missing", and the key above the marked text. The tone is right as it is: no scolding.
- kind: wording
- weight: could
- shot: 25-writeout-few.png

### #/heart
- did: learned two stretches (18 lines) with the text covered, then opened By heart.
- saw: the tile says "0 lines known". Week 1's row says "2 of 5 stretches", so the site knows.
- want: count the lines of stretches done with the text covered, or drop the tile; as it stands it stays at 0 for three weeks and then jumps by a whole canto.
- kind: design
- weight: could
- shot: 26-heart-after.png

### #/unit/1/making (after "Finish and compare")
- did: filled 17 of 20 boxes, finished, read "The chart, from the poem" at a window 1200 wide.
- saw: the right edge of the answer chart is cut off. The table is 760 wide inside a box 722 wide, so the last 38 pixels of the fourth column are hidden: line ends lose their last letters in six rows. The box scrolls sideways but shows no scrollbar. My own chart, just above, is given 1064.
- want: set the answer chart in the wide column like the student's chart, or drop its minimum width.
- kind: layout
- weight: must
- shot: 39-chart-clip.png

### #/unit/1/making (the last question)
- did: typed an answer under "Choose one circle…".
- saw: no button and no word about what happens to it. It is in fact saved as typed and survives a reload. The Missing words page tells the student this in one sentence under its note box (the note is "saved as you write", and the sentence names the page where it is kept); this page says nothing.
- want: the same sentence here, under the box.
- kind: wording
- weight: should
- shot: 90-chart-last-question.png

### #/unit/1/making (the gate before the answers)
- did: put a single "?" in one box.
- saw: it counted toward the sixteen. Sixteen question marks would open the answers.
- want: count a box only when it holds two or three words. The gate cannot be made proof, but one keystroke a box is no gate.
- kind: design
- weight: could
- shot: 37-chart-early3.png (the gate, before the sixteen)

### #/unit/1/words (after "Show the book's words")
- did: filled six gaps, left three, pressed the button.
- saw: the page says a differing word "is struck through". The line through it is drawn in pale beige (207, 200, 182) on a cream page, lighter than the grey word under it. At normal size no line can be seen; I found it at three times magnification.
- want: draw the line in the colour of the word.
- kind: layout
- weight: should
- shot: 29-words-zoom.png, 31-words-zoom3x.png

### #/unit/1/words (the passage)
- did: read the passage.
- saw: it closes with a double quotation mark that was never opened; the excerpt begins in the middle of the speech.
- want: drop the closing mark or open the excerpt with one.
- kind: wording
- weight: could
- shot: 28-words-shown.png

### #/unit/1/test (coming back after a sitting)
- did: marked the test (9 of 14), read the line under the score that sends me back to the books for the items I missed, left, came back.
- saw: a blank test and "Last time: 9 out of 14, on October 2." Which five I missed is no longer shown anywhere. A blank answer is also marked "Wrong."
- want: on return, name the items missed last time (the site stores them). Mark a blank "No answer."
- kind: design
- weight: should
- shot: 35-test-return.png

### #/unit/1/question/1 (after handing in)
- did: handed in 201 words, read "What Auden wrote", went to "Your reply".
- saw: the instruction opens with an exception, "Unless the paragraphs above ask for something else", and only then tells me what to write: where I differ from Auden. The paragraphs above asked for nothing, so I went back to look for a request that was not there. It reads as a line written once for every paper.
- want: where the paragraphs ask nothing, begin at "Say where you and Auden differ". Keep the "unless" only on the papers whose paragraphs do set a task.
- kind: wording
- weight: should
- shot: 45-paper-response.png

### #/ledger
- did: read the week table after doing all six parts of week 1.
- saw: columns for pages, test, paper and exercise. Missing words has no column, and the week's by-heart portion ("2 of 5 stretches" on the week page) is not shown; the By heart table below counts only whole cantos written out.
- want: a column for Missing words and one for the week's stretches, so the record covers the six parts the home page names.
- kind: design
- weight: could
- shot: 48-ledger.png

### #/unit/2/words (the one button)
- did: opened week 2's Missing words and pressed "Show the book's words" with every gap empty.
- saw: "Words that match the book: 0 of 10", the gaps are fixed for good, and the week page marks the part "done". The instruction at the head of the page does warn that the button fixes the words, but the button is live from the start, one stray click ends the exercise, and there is no "Reopen" as the chart has. The paper, which is also final, asks first ("cannot be changed once it is handed in", then "Hand it in" or "Not yet").
- want: keep the button off until some gaps are filled, and ask once before fixing the words, as the paper does. The note under the answers can be left empty with no effect on "done"; say on the week page whether the note was written.
- kind: design
- weight: should
- shot: 62-words2.png (before the press: every gap empty, the button live)

### #/unit/2/making/2 (what is checked)
- did: wrote thirteen lines with every tercet ending on a full stop, against rule 3, and with one rhyme broken.
- saw: the page checks the number of lines, lists my line-endings under a, b, c, d, e, and says plainly that it cannot hear rhyme, which is honest and useful. It says nothing about rule 3 or about the ten syllables, and "Mark it done" lit up.
- want: rule 3 can be checked by rule (do lines 3, 6, 9 and 12 all end in a stop?), so check it; or add one sentence saying the run-on and the syllables are left to the student.
- kind: design
- weight: should
- shot: 60-terza-14.png

### #/unit/1/test and #/unit/2/test ("Take it again")
- did: marked a test, pressed "Take it again" (mouse, then keyboard).
- saw: the test is cleared but the page stays where it was, at the foot: I was looking at the last item and "Check my answers", five screens below the first question. With the keyboard, focus falls to the page body.
- want: go to the top of the test and put focus on its heading, as the site already does when a page opens.
- kind: bug
- weight: should
- shot: 71-after-again-mouse.png

### #/unit/2/making (the published version)
- did: finished my version of the ode and read the published one.
- saw: its fifth line begins with a four-letter word set in full capitals. It looks like small capitals or italics flattened by a plain-text source.
- want: check the 1863 page and set the word as the book has it.
- kind: wording
- weight: could
- shot: 57-translation-done.png

### #/read/horace/o1-01
- did: opened an ode from week 2.
- saw: no "Versions" line. The reading list says the Latin is printed with Conington, and Dante's pages link their three versions at the head of every canto, but from an ode there is no way to its Latin.
- want: the same "Versions" line on each ode, linking the Latin of that ode.
- kind: design
- weight: should
- shot: 63-horace.png

### #/cantos (the fifth canto, after a change of version)
- did: in the prose version chose Inferno I for the fifth canto. Switched to Longfellow, chose Inferno II, switched back to the prose.
- saw: the page says that in the prose only a canto checked against the printed book can be chosen, and greys out the other 92. After the switch back, Inferno II is still the fifth canto in the prose: its square is dark and disabled, the line under the grid names it, and By heart lists it among the five in the prose translation. So the student can end up learning, and being examined on, a text that the same page says may hold a misread word.
- want: when the version changes, drop a fifth canto that the new version does not allow and say so in one line; or keep it and hold the "Done" link until another is chosen.
- kind: bug
- weight: should
- shot: 78-back-to-prose.png, 78-heart-after-switch.png

### #/unit/1 (and any long page reached with the browser's Back)
- did: scrolled the week page down to the Purgatorio line, opened the canto, read down it, pressed Back, then Forward.
- saw: Back shows the week page from its top, not from the place I left; Forward shows the canto from its top too. A week page is three or four screens long on a desktop and more on a phone, and the student comes back to it after each of the week's six parts, so the place is lost six times a week or more.
- want: on Back and Forward, put the page where it was (keep the scroll position with each history entry). Keep the jump to the top for links.
- kind: bug
- weight: should
- shot: 82-after-back.png

### #/papers (after restoring a copy)
- did: chose a saved copy and pressed "Replace" at the question that follows. Did it three times in all: twice into an empty or erased browser and once over existing work.
- saw: the question and its two buttons vanish and nothing takes their place. No word says that the copy is now in use, or which day's copy it was. Over existing work that looks much the same, I could not tell whether anything had happened until I compared the stored record with the copy by hand (it matched each time). A wrong file does get a plain sentence saying it is not a saved copy, so only success is silent.
- want: one line after a restore, saying that the copy was restored and the date it was saved.
- kind: wording
- weight: should
- shot: 87-after-replace.png

## What works

- Enrolment and the calendar: the dates, the three paces and the pages a day are right, and the calendar can be moved later with nothing lost.
- The reader: three versions of Dante in clear type on desktop and phone; read-marks hold across versions and reloads.
- By heart: text open, first letters, text covered, then the whole canto. Marking is word by word, lenient on spelling variants and punctuation, strict on words, and it states the limit without comment.
- Tests, Missing words, the chart and the papers keep every answer behind the student's attempt. A paper is met with what Auden wrote, source named, and the site's own inferences are marked as the site's.
- Save, erase and restore gave back an identical record; two tabs did not overwrite each other; no console errors on any page; no sideways scroll at 390 wide; a whole test can be done from the keyboard.

## Verdict against the brief

- Static? No. Five of a week's six parts hold their answers back until the student has made an attempt, and three of them (by heart, the paper, the exercise) will not take an empty one. The record persists and can be carried to another device.
- Cheesy? No. There is no role-play, no invented voice for Auden, no badge and no cheering. The one false note is the red "behind" a second after enrolling.
- Does the student learn as the sources say Auden taught? Yes: cantos by heart and written out, missing words restored, tests on matters of fact, papers, translation from a word-list, verse in set forms. Each is tied to a named source and the site's own additions are marked as its own.
- What can be faked: reading marks (one box marks a whole cantica), the chart's gate (one keystroke a box), Missing words (the button works on empty gaps), a blank test. These weaken the record more than the course; the memory work and the papers cannot be faked.
- Fix the three "must" items before publishing. They are two layout faults and one loss of marks, not faults of conception.
