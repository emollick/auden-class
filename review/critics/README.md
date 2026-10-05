# The critics' reports

Before the site was published, every word written for it was read by critics in three rounds. The critics were Claude agents. Each was given a brief and one part of the text, and reported in a file of its own. The reports are in this folder as they were written. The text the critics read is `review/all-prose.md`, which the build writes from the content files, so it always holds every authored word of the site.

- `round1/` has 24 reports. The text was cut into eight parts, and each part was read three times: for facts, for LLM-speak, and as a student would read it.
- `round2/` has 36 reports, made after the first revision. Every part was read again for LLM-speak and from the student's side. Checkers compared the page citations and the paraphrases with scans of the sources. The Sources page and the book notes were fact-checked. Two testers used the site in a browser, one as a new student and one as a student late in the term and at the examination.
- `round3/` has 33 reports, on what the second revision had changed and nothing else. The files that begin with L are the last read of the changed sentences, F the sources checked again, G the Latin, French and German word lists, UX3 the two browser testers again, and C a closing read of the sentences changed in applying this round's own findings.
- `briefs/` holds what each kind of critic was told, round by round.

Nearly every finding marked "must" or "should" was applied. A few were set aside, where a source checker had passed the same sentence against the scan or where two reports disagreed.

Three faults were fixed after the reports that name them were written. UX3-1 leaves one open: the home page, the week page and Progress did not follow a part marked as read in a second tab. They now do. UX3-2 describes one that it does not count: when an examination was handed in from a second tab, the first tab could show the result from part-way down the page. It now opens at the head. C-C has one finding, a sentence on the home page that pointed to a figure the header does not show during an examination. It has been reworded.

The reports name files in a scratch folder that is gone. Paths that begin `/home/user/auden-course` are this project.
