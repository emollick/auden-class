# Your lens: is the report of the source faithful?

Your part reports what W. H. Auden wrote or said, and what Donald Pearce, a student in the 1941 class, recorded. Nearly all of it is paraphrase, with a few short quotations. The paraphrases were reworded in a revision, and rewording is where a report drifts from its source. An editor has checked them once. You are the independent second check. Go through every such statement in your part and compare it with the source.

What to check, entry by entry: every `.auden.paras.k` and `.auden.sources.k` (under questions and under operas), and every `.intro.k`, `.gloss.k`, `.brief.k`, `.key…`, `.after.k` and `.source.k` that says what Auden or Pearce wrote, said or did.

For each statement:

1. Find the passage in the source (see "Sources" below).
2. Quotations. Words inside curly double quotes that are given to Auden, Pearce or another writer must match the source letter for letter, with its punctuation. Do not write the quotation out. If it matches, count it in your coverage list. If it differs, say which word or mark differs, by position ("the fourth word", "the comma after the second word").
3. Paraphrase. Does the source say this? Report: (a) anything the source does not say; (b) a judgment given to Auden that belongs to another writer, to Pearce, or to the site; (c) a statement made stronger, weaker or broader than the source; (d) a changed detail (who, where, when, which chapter, which character); (e) an order of events or of argument that the source does not have, where the order matters.
4. Closeness. Where the paraphrase follows the source's own wording for seven or more words in a row outside quotation marks, report it, giving the label and the first three words only. The site must report in its own words.
5. Citation. Is the title right, the date right, the page right? For a range of pages, does the passage fall inside it?
6. Whose point it is. Where the site applies Auden's point to the question or to a book he was not writing about, is the application marked as the site's?
7. The books themselves. Where one of these paragraphs states a fact about a required book (which chapter, who speaks, what happens), check it in the site's copy: from /home/user/auden-course run `node build/tools/show.mjs <textId>` to list a book's parts, `node build/tools/show.mjs <textId> <partId>` to print one, and `node build/tools/show.mjs <textId> --grep '<regex>'` to search. Text ids are the folder names under site/data/texts.

Do not report style. Other critics are reading for that.

# Sources

Four scans are on disk under /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/auden/ :

- `dh.txt`: *The Dyer's Hand* (1962). The page number is in the running head at the top of a page, and the text after a head belongs to that page.
- `ef.txt`: *The Enchafèd Flood* (the Vintage paperback, paged as the site cites it). The page number is at the foot, and the text before a number belongs to that page.
- `fa.txt`: *Forewords and Afterwords* (1973). The page number is at the foot.
- `pearce.txt`: Donald Pearce, "Fortunate Fall: W. H. Auden at Michigan" (1985). The file is three very long lines. The page number stands at the foot and runs straight into the running title of the next page. Pages 138 to 145 are missing from the scan.

Two earlier audits explain exactly how to read page numbers off these files, with line numbers for damaged places. Read their sections headed "How pages were read off the scans" before you start: /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/review/page-audit-01-08.md and page-audit-09-15.md in the same folder. Their findings were acted on, so do not repeat a finding of theirs unless the fault is still in the text.

Use `grep -n` with a distinctive word or two to find a passage, then read a few lines round it with `sed -n`. These files are large. Never print more than about forty lines at a time.

Sources that are not on disk in full (Auden's collected *Prose*, *Lectures on Shakespeare*, *New Year Letter*, *The Prolific and the Devourer*, *Secondary Worlds*, single reviews and essays, Charles Miller's memoir, Monroe Spears): the researchers' notes record what was seen of each and where. They are under /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/ : `C_auden_on_works.md` (by book, the main one), `A_michigan_course.md`, `B_pedagogy.md`, `E_pd_pearce.md`, `F_rilke.md`. In the folder `F_work/` are scans of the two issues of *The New Republic* with Auden's reviews of Rilke (`nr_1939-09-06.txt`, `nr_1940-07-08.txt`). The notes mark what was seen in a scan and what was only recalled. A statement on the site that rests on something only recalled is a finding (weight "should"). If the notes do not settle a point, you may try the web (WebSearch, WebFetch; load them with ToolSearch if they are not in your tool list). If a site refuses, do not try to get round it. Report what you could not check as "could not check", weight "should".

# Extra rules for your own writing

All of these sources are in copyright. A report that prints them is discarded by a filter and your work is lost.

- Never print a sentence of a source, in a message, in your thinking, in a tool call or in the report. Not one full sentence.
- Give evidence as a file name and line numbers, with a description in your own words of what the source says there.
- Do not print the site's quotations either. Refer to them by label and position.
- When a command prints source text to you, do not repeat it. Note what you needed in a sentence of your own.

End the report with a section "Checked and right": each label you covered with the number of statements and quotations checked under it, so the editor can see the coverage. Do not sample. Do every entry.
