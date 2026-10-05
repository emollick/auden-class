# Your lens: is the report of Auden and of the witnesses faithful?

Your business is every statement in the prose file that says what W. H. Auden wrote, said or did, or what a witness of his teaching recorded (Donald Pearce, Angelyn Stevens, Robert Chapman, Charles Miller, the editor of his Shakespeare lectures). Nearly all of it is paraphrase with a few short quotations, and paraphrase is where a report drifts from its source. Go through every such statement and compare it with the source. Do not sample.

Where they are (labels in the prose file; search it for more, because this list may not be complete):

- The door: `door.spreads[0].steps[0].lead[0]` (he handed classes poems with words missing and no poet's name); `…steps[2]` (the lecture on *The Tempest* of December 1941 as Pearce recorded it, with one quotation, and its source line); `…steps[3]` (the course: its name, thirty-two books and operas, fifteen weeks, Dante to Eliot; no notes; what one student remembered him adding; his two questions of any poem, one quoted).
- Week 1: `w1.intro[0]` (Dante kept before the class; what he said when they reached Kafka); the reply `…options[0].reply[1]` ("Auden grants the likeness"); "What Auden made of Ulysses" with its source line (*The Enchafèd Flood*, p. 10); `w1.meetings[1]…steps[0].after[0]` (*New Year Letter*: on trial before dead poets, Dante the first judge); the definitions read out at the first meeting and the one quoted; the nine operas, the portable phonograph and the records played in class; "What Auden said about suffering in opera" with its quotation and source line ("Notes on Music and Opera," *The Dyer's Hand*, pp. 468 and 470–71: pin the page of each of the two things reported); the New School examination of January 1947 (thirty-five passages, the quoted rubric); the chart of the course drawn across the blackboard; the class learning the last canto of the *Paradiso* by heart.
- The app's words: `meet.verdict.lead` and `meet.verdict.options` (the five verdicts and the nursery, given to *A Certain World*, 1970: check the book and the year, the sense of each of the five, and that the options do not copy his wording at length); `meet.two.lead` and `meet.two.prompts` (his second question and its four parts: check against "Making, Knowing and Judging" in *The Dyer's Hand*, sense and closeness); `book.intro` (*A Certain World* as a commonplace book); `heart.intro` (Stevens at the kitchen sink; Chapman and the classmates with eight cantos, and whether "thirty-six years later" is the right count; the college for poets daydreamed in *The Dyer's Hand* and its thousands of lines; what he said near the end of his life about teaching poetry, and to whom); `heart.cantos.intro` and `cantos.intro` (the final examination: three hours, six cantos by most accounts, Pearce's seven brought down to five, the four he names); `heart.own.intro` (the second part added to the New School examination on the day: twenty lines from memory); `heart.rule[1]`; `term.note`; `unit.omit`.

For each statement:

1. Find the passage in the source.
2. Quotations. Words inside curly double quotes given to Auden or a witness must match the source letter for letter, with its punctuation. Do not write the quotation out. If it matches, count it. If it differs, say which word or mark differs, by position.
3. Paraphrase. Report: (a) anything the source does not say; (b) a judgment given to Auden that belongs to someone else or to the site; (c) a statement made stronger, weaker or broader than the source; (d) a changed detail (who, where, when, how many); (e) a date or count that does not agree with another place on the site.
4. Closeness. Where the site follows a source's own wording for seven or more words in a row outside quotation marks, report it, giving the label and the first three words only.
5. Citation. Title, date and page right? Does the passage fall on the page cited?
6. Whose point it is. Where the site applies Auden's point to a passage he was not writing about, is that marked as the site's?

Do not report style.

# Sources

Four scans are under /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/auden/ :

- `dh.txt`: *The Dyer's Hand* (1962). The page number is in the running head at the top of a page; the text after a head belongs to that page.
- `ef.txt`: *The Enchafèd Flood* (the Vintage paperback, paged as the site cites it). The page number is at the foot; the text before a number belongs to that page.
- `fa.txt`: *Forewords and Afterwords* (1973). Page number at the foot.
- `pearce.txt`: Donald Pearce, "Fortunate Fall: W. H. Auden at Michigan" (1985). Three very long lines. The page number stands at the foot and runs into the running title of the next page. Pages 138 to 145 are missing from the scan.

Two earlier audits explain how to read page numbers off these files; read their sections headed "How pages were read off the scans" first: /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/review/page-audit-01-08.md and page-audit-09-15.md.

Use `grep -n` (or a short Python script for pearce.txt) with a distinctive word or two to find a passage, then read a few lines round it. Never print more than about forty lines at a time.

For what is not on disk in full (*A Certain World*, *Lectures on Shakespeare* edited by Arthur Kirsch, *New Year Letter*, the *Paris Review* interview, Charles Miller's memoir, Chapman's letter or article), the researchers' notes record what was seen and where: `A_michigan_course.md`, `B_pedagogy.md`, `C_auden_on_works.md` and `E_pd_pearce.md` under /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/ . Files beside them whose names begin A_ or B_ are the pages the researchers saved. The notes mark what was seen in a scan and what was only recalled; a statement on the site that rests on something only recalled is a finding (weight "should"). Where the notes do not settle a point you may try the web (WebSearch, WebFetch; load them with ToolSearch). If a site refuses, do not try to get round it; report "could not check", weight "should".

# Extra rules for your own writing

These sources are in copyright. A report that prints them is discarded by a filter and your work is lost.

- Never print a sentence of a source, in a message, in your thinking, in a tool call or in the report. Not one full sentence.
- Give evidence as a file name and line numbers, or a URL, with a description in your own words of what is there.
- Do not print the site's quotations either. Refer to them by label and position.
- When a command prints source text to you, do not repeat it.

Weight "must" for anything false or misattributed, "should" for anything you could not confirm after a real attempt, "could" for imprecision. End the report with a section "Checked and right": each label you covered with the number of statements and quotations checked under it.
