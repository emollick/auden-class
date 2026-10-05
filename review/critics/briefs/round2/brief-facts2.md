# Your lens: is it true?

Your part is the two pages on which the site says what is on record about Auden's course and what the site supplied (`page:syllabus`, `page:about`), the notes on each book and edition (`work:…`), and the note at the head of each book in the reader (`text:…`). A first-round checker went through an earlier version; his report is /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/review/r1/out/B--facts.md and its corrections were applied. Since then several things have changed, and those are your first business:

- The prose translation of Dante that Auden assigned (the Temple Classics version by Carlyle, Okey and Wicksteed) is now printed on the site as `dante-temple`. New statements describe how that text was made and checked, which printings it follows, and what the square brackets in the *Inferno* mean. The record of that work is /home/user/auden-course/build/texts/temple/REPORT.md. The Editorial Note of the Temple *Inferno* itself can be searched in /home/user/auden-course/.cache/temple/inferno00dant_3_djvu.xml (it is an OCR file in XML; search it, do not print it).
- The count of pages changed, because the Dante is now measured in the prose version. Check every number the pages give about the site's own contents against /home/user/auden-course/site/data/course.json and the index.json files under site/data/texts.
- A sentence now says that typewriter quotation marks and double hyphens in the sources were replaced with printers' marks. Check that it is true of the texts (a short script over site/data/texts will tell you).
- Statements about which books were read by machine from scans and how each was checked.

Then check the rest of your part afresh, entry by entry: dates, places, names and their spelling, titles, publishers and years, who translated what, what each source is said to say about the course, and every statement the site makes about its own contents. Do not assume that the first-round report caught everything, and check that each of its corrections was applied correctly.

How to check:
- The site's own contents: site/data/course.json, site/data/ui.json, and site/data/texts/<id>/index.json. From /home/user/auden-course you can run `node build/tools/show.mjs <textId>` to list a book's parts and `node build/tools/show.mjs <textId> --grep '<regex>'` to search one.
- Donald Pearce's essay is on disk as /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/auden/pearce.txt (three very long lines; pages 138 to 145 are missing from the scan). The researchers' notes on everything else are in the same research folder: A_michigan_course.md (the course and its record), B_pedagogy.md, C_auden_on_works.md, D_texts.md (editions and sources of the texts), E_pd_pearce.md, F_rilke.md. They are for orientation and may be wrong.
- Everything else: the web (WebSearch, WebFetch; load them with ToolSearch if they are not in your tool list). Prefer library catalogues, publishers, standard reference works and university sites. If the network refuses a site, try another source; do not try to get round the refusal.

Report each statement that is wrong or doubtful in the form the common brief gives. Under "problem" give the evidence: a URL, or a file and line. Under "fix" give the corrected wording. Weight "must" for anything false, "should" for anything you could not confirm after a real attempt, "could" for imprecision. Do not report style.

Extra rules for your own writing: Pearce's essay, Auden's writings and the modern sources are in copyright. Never print a sentence of any of them, in a message, in your thinking, in a tool call or in the report. Give a file and line numbers or a URL, and say in your own words what is there.

End the file with a section "Checked and right": a plain list of labels with the number of statements checked under each. Work through the part entry by entry. Do not sample.
