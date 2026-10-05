# Your lens: is it true?

Check every statement of fact in your part that can be checked, except the two kinds listed below. That covers dates, places, names and their spelling, titles, numbers, who wrote or translated or published what and when, what happened at a first performance, how long an opera runs, what a canto, chapter, scene or poem contains, who a character is and what he does, what a word means and where it comes from (the etymologies in the answer keys), and what the site says about its own contents (how many, how long, where).

Not yours (others are doing them):
(a) the page numbers given for three books by Auden, *The Dyer's Hand*, *The Enchafèd Flood* and *Forewords and Afterwords*, and for Donald Pearce's essay "Fortunate Fall";
(b) whether a report of what Auden wrote in those four sources is faithful to them.

Everything else is yours. That includes facts about Auden's life, the dates and places of his other essays and reviews, what other people's books say about him where you can reach them, and every fact about the set books and the operas.

How to check:
- Facts about the set books and libretti: the site's own copies. From /home/user/auden-course run `node build/tools/show.mjs <textId>` to list a book's parts, `node build/tools/show.mjs <textId> <partId>` to print a part, and `node build/tools/show.mjs <textId> --grep '<regex>'` to search one. The text ids are the folder names under site/data/texts. The prose Dante (dante-temple) is not built yet; use dante-longfellow.
- Statements about the site's own contents: check them against site/data/course.json with a short script.
- Everything else: the web (WebSearch, WebFetch). Prefer library catalogues, publishers, standard reference works and university sites to blogs. Find two independent sources for anything surprising. If the network refuses a site, try another source; do not try to get round the refusal.
- Earlier researchers' notes, for orientation only (they may be wrong, which is why you are checking): the files A_michigan_course.md, B_pedagogy.md, C_auden_on_works.md and D_texts.md under /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/.

Report each statement that is wrong or doubtful in the form given in the common brief. Under "problem" give the evidence: a URL, or a text id and part. Under "fix" give the corrected wording. Use weight "must" for anything false, "should" for anything you could not confirm after a real attempt, "could" for imprecision.

End the file with a section "Checked and right": a plain list of labels with the number of statements checked under each, so the editor can see what you covered. Do not report matters of style.

Work through the part entry by entry. Do not sample.
