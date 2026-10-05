# L-ui-3 (the app's own words, from ui:heart to the end, and the page shell), last read: both lenses, and against the code

Share: `review/r3/wave3/ui.md` from the first `ui:heart.` entry to the end. 51 entries are marked NEW. Each marked string was found in `site/js` (`views/heart.js`, `reader.js`, `final.js`, `ledger.js`, `notebook.js`, `frame.js`, `making.js`; `lib/text.js`, `lib/heart.js`, `lib/store.js`), read with what stands on the screen beside it, and looked at on the built site in Chromium with records made for the purpose: a canto not begun, over the limit, within the limit once and known; an examination begun, pasted into, handed in, run out with the page open and with it closed, and passed; a copy restored from a good file, an undated one and a wrong one.

Findings are in the order of the text. In a fix, [quotation kept] stands for words that the string already has inside quotation marks (the name of a button) and that stay as they are.

State of the source. The source was changed while this read was going on, so I read the share a second time as `content/ui.mjs` stood at 18:30 UTC on October 2. Four of the five findings below (all but ui:ledger.before) are already in `content/ui.mjs` and `site/data/ui.json`, word for word as given here. I read each of the four again in its place on the built site, and they stand. Three strings have been added to this share since the part file was made: ui:exam.shut, ui:heart.state.once.late and ui:ledger.before. I read them in the same way. The first two are sound, and the third is the finding that is still open.

### ui:heart.write.intro.1, with ui:heart.write.allowed
- where: if more words are wrong than the limit allows
- problem: The figure printed on this tab after a comparison, and the column of the canto's record, now count words "wrong or missing". The two sentences above the box that state the limit still say only "wrong": this one, and the unmarked line printed under it (ui:heart.write.allowed). The count is one number in the code (`result.slips`), and it has two names within four lines of the screen. Worker A's notes list the same leftover in ui:heart.learn.slips, and that one was changed afterward; these two were not.
- fix: ui:heart.write.intro.1 in full: "Write all of it from memory. Line breaks do not matter. Do not look at the text until you have pressed [quotation kept] Each comparison is recorded, and if more words are wrong or missing than the limit allows, the canto comes due again." Here [quotation kept] is the name of the comparing button with its period, as now. ui:heart.write.allowed in full: "{words} words. No more than {n} may be wrong or missing."
- weight: should

### ui:final.rules.4
- where: spellings of a word pass as the same
- problem: This list is where passing is defined. The sentence before says when a canto passes, and the next rule says when the student passes. Between them "pass" is used in a second sense. The same rule is worded "are taken as the same" on the By heart page (ui:heart.rule.1) and in the rules of the week 11 exercise, so one rule now has two wordings.
- fix: "A canto passes if no more than one word in a hundred is wrong, left out or put in. Spelling counts, but the British and American spellings of a word are taken as the same. Capitals, punctuation, accents and line breaks do not count."
- weight: should

### ui:final.begin.confirm
- where: start when you press the button
- problem: The sentence appears in the place of the button the student has just pressed ("Begin the examination"), which did not start the time, and two controls stand after it, "Start the clock" and "Not now". "The button" does not say which is meant. Every other instruction in this share that sends the student to a button gives the button's name (ui:heart.how.4, ui:heart.write.intro.1, ui:heart.unverified, ui:notebook.keep.2).
- fix: The three hours start when you press “Start the clock.”
- weight: should

### ui:ledger.before
- where: due before today
- problem: This string is not in the part file. It was added afterward, and it is the one finding not yet applied. On the Progress page, in the row of the week that is running, it stands in red under the pair of pages read and pages set. The number the code puts in it is `r.behind - r.earlier`: the pages of this week that were due before today and are still unread. The label gives only the first half of that. With a record made for the purpose (the fourth day of week 3, 31 of 319 pages read) the cell says that 107 were due before today. By the calendar 138 were due, 31 of them are read, and 107 is what is left. A student who has read part of the week takes the number for the whole of what was due and cannot make it agree with the pair above it. The figure at the top of the same page and the line at the top of every page call these pages "behind", and the front page gives both halves in a full sentence (ui:home.week.before).
- fix: "{pages} behind". The cell then uses the word of the figure it adds up to: the red rows above and this number make the pages behind at the top of the page. I tried the longer label that gives both halves as the front page does, and at a window about 1,030 pixels wide it makes the table scroll sideways. The short label fits at every width.
- weight: should

### ui:notebook.keep.2
- where: with what is in the file
- problem: The paragraph is about two files, and the revision has left the first with three names. The first sentence calls the saved copy "one file" and then "the file", the third calls it "the saved copy", and the last has "the file" again, where the text read "the copy" before the revision. Between them stands the unmarked sentence about the plain-text file. It now comes directly after the words "the file can be restored later", so for a moment it seems to describe that same file, and "the file" in the last sentence has two possible owners. The page has three buttons under this paragraph and the paragraph names only two of them.
- fix: Name the third button in the second sentence and go back to "the copy" in the last, so that the whole string reads: "[quotation kept] downloads one file that holds everything you have done here, and the file can be restored later. “Download your work as plain text” gives a second file, which is for reading and printing only. To move to another device, carry the saved copy there, open this page and choose [quotation kept] Restoring replaces everything now in that browser with what is in the copy." The first [quotation kept] is the name of the saving button and the second the name of the restoring button with its period, both as now. The quoted words that are new are the label of the third button (ui:notebook.text). "The copy" is also what the confirming question under the buttons calls it (ui:notebook.restore.confirm).
- weight: should

## Patterns

1. One thing under two names where two hands revised neighboring strings: 4. See ui:heart.write.intro.1 (with ui:heart.write.allowed), ui:final.rules.4 (against ui:heart.rule.1), ui:ledger.before (against the figure of pages behind on the same page) and ui:notebook.keep.2.
2. A control pointed at and not named: 1. See ui:final.begin.confirm.

No other track of a revision turned up in the marked sentences: no broken grammar, no pronoun without an owner, no name of a page or a button that the page or button does not carry, no breach of the house rules. Every singular and plural form reads rightly with the number the code puts in, and every date, title and count in braces is filled.

## The two things checked with special care

The examination. I set side by side every sentence that says what is asked, how long it lasts, what passes, what is closed while the clock runs and what a result means: ui:heart.intro.1, ui:final.title, ui:final.intro.1 and .2, the five rules, ui:final.begin.confirm, ui:final.sitting.intro.1, ui:final.paste, ui:final.hand.confirm, ui:final.over.body, the eleven ui:final.result strings, ui:heart.exam.running, ui:ledger.final.running and ui:ledger.final.passed, and from the other shares ui:home.what.1, ui:home.how.after.1, ui:home.after.passed.1, ui:term.exam.sub and the three ui:standing.exam lines. They agree with each other and with `final.js`:

- What is asked: five cantos, one box each, in the order of the poem.
- How long: three hours from the press of the starting button (`DURATION`), and the clock runs on with the page closed.
- What passes: a canto with no more than one word in a hundred wrong, left out or put in (`allowedSlips` and `passes` in `lib/text.js`). A box left empty is "not written" and does not pass. The examination is passed when all five pass (`passedOn`).
- When the time runs out, the script is collected as it stands, and the result says so both when the page was open and when it was closed.
- A paste or a drop is refused in the words of rule 2.
- While a sitting is open, ui:heart.exam.running stands in place of the text on the By heart pages of a canto, on every canto in the reader and on the passage of the week 11 exercise. It reads rightly in all three places.
- The new ui:exam.shut stands, while a sitting is open, on the Missing words page of week 1, on the tests of weeks 1 and 2 and on the terza rima exercise of week 2 (`words.js`, `test.js`, `making.js`). What it says of the page is true in each place, and its link goes to the examination. On the exercise page the heading, the brief and the rules stay in view above it, and the sentence still reads rightly there.
- No other page prints a canto while the clock runs. I opened all 131 pages of the course, once without an examination and once with the clock running, in each of the three versions, and compared the words on each page with the words of the cantos (`tmp-L-ui-3/look18.mjs`). The 131 are the front page, the reading list, the term, By heart, the cantos, the examination, Progress, Written work, Sources, the contents of the three versions of Dante, and for each of the fifteen weeks the week itself, its Missing words, its test, its papers and its exercises. Without an examination five of them print a passage of a canto: the four that now carry ui:exam.shut and the week 11 exercise. With the clock running none does. The pages of the other books in the reader are not in the count.
- The figure named "wrong or missing" is the same number in all six strings that carry it, and it is the count that the rule calls wrong, left out or put in.

The sentence about British and American spellings (ui:final.rules.4 and ui:heart.rule.1). The program takes a fixed list of pairs as the same (`SPELLINGS` in `lib/text.js`), so the sentence is true only as far as the list reaches. When I first looked, three words of Longfellow’s verse were outside it ("baptisers", "moult", "foetus"), and the list now has all three. I then made a wider scan. It takes every word of the cantos that can be learned in English (the twelve prose cantos that have been read through, and the hundred of Longfellow) and tries the usual British and American changes on it in both directions. These pairs are still outside the list, and a student who writes the other spelling loses a word for each:

- "nought", for which an American writes "naught". In the prose it is in *Inferno* XXXIV, in *Paradiso* XXXI (twice) and in two of the four set cantos, *Purgatorio* XXVIII and *Paradiso* XXXIII. Longfellow has "naught" in 14 cantos and "nought" in two.
- "behoves", "behoved" and "behoveth", which an American writes with a double o. In the prose they are in *Inferno* XXXIV, and in Longfellow in 28 cantos, none of them one of the four set cantos.
- In Longfellow only: "draught" (*Purgatorio* XXXIII), "sulphur" (*Paradiso* VIII), "inquire" and its forms, which a British student may begin with an e (five cantos), and two verbs in -ize whose stems the list does not have ("bestialized" in *Purgatorio* XXVI, "subtilizes" in *Paradiso* XIX).

This is a matter for the list and not for the wording. The sentence can stand as it is once the list takes these pairs. I did not count forms that differ in sound as well as in spelling (toward and towards, among and amongst, learnt and learned, burnt and burned), because the sentence does not promise them. The scan is `tmp-L-ui-3/spell3.mjs` and `spell4.mjs`.

Texts read by machine. The four strings (ui:heart.unverified, ui:reader.unverified, ui:cantos.unverified.note, ui:cantos.unverified.title) all say "read through against the scan of the book" and all say "misread words". The cantos note has "may still contain misread words", which is the wording of the contents note of the prose Dante. Nothing in this share still says "printed page", "printed book" or "wrong word". The strings agree with `heart.js`: the note on the cantos page is shown only in the prose version, and the grid there closes exactly the cantos that the build marks as not read through (88 of the 100).

## Outside the wording, for the editor to know

These are not findings on the wording. The first three are settled, and the fourth is the editor’s to decide.

- The notice shown without JavaScript. My part file prints this notice as it stood before the second round. `site/index.html` now has the two sentences that a second-round critic proposed (the site needs JavaScript to keep and check the work; turn it on and load the page again), and the part does not mark them. I read them as marked. They are sound.
- A date that has gone by. An earlier state of this report said here that ui:heart.state.once could name a day already past. The source now has ui:heart.state.once.late for that case (`standingText` in `views/heart.js`). I read it with a canto nine days late on the By heart page, on the Progress page and in the list on the examination page. It is sound, and on the day itself the label still says "on" and the canto is counted as due.
- Pages that print cantos while the clock runs. The earlier state of this report named two (the Missing words page of week 1 and the tests of weeks 1 and 2). They are shut now, and so is the terza rima exercise of week 2. See ui:exam.shut under the examination, above.
- The time between the end of the three hours and the result. If the time runs out while the student is on another page, or with the site closed, the sitting stays open until the student goes to the examination page and presses the button that asks for the result. Until then the line at the top of every page says that the time is up, and under it three sentences still say that the examination is in progress: ui:heart.exam.running, ui:exam.shut and ui:ledger.final.running. The link in each goes to the page that asks for the result, so the student is not stranded and the texts stay shut, as they should. To make the three exact in that state the code needs a second case (`timeLeft` is exported from `final.js`), with a sentence of its own that says the three hours are up and sends the student to the result. No change of the present wording will do it.

Marked sentences read: 67 between the marks, in 51 marked entries (one of them the entry marked as reordered), the two sentences of the no-JavaScript notice as the site now has it, and the three strings added to the share since the part was made. Findings: 5 (0 must, 5 should). Four are already in the source, and ui:ledger.before is open.
