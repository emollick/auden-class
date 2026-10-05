# What you are reviewing

A web site that sets W. H. Auden's 1941 University of Michigan course, "Fate and the Individual in European Literature" (English 135), as a working term of fifteen weeks. A student enrolls, reads the set books in the site's reader, learns cantos of Dante by heart and is checked on them, takes a weekly test on the reading, fills in missing words in a passage, does an exercise in making (a translation, a parody, a chart, a canto to emend), writes on set questions, and at the end sits the examination. After the student hands in a paper, the site shows what Auden himself wrote about the book.

The person who commissioned the site asked for this before it is published: "have critics scour every word you write for LLM-speak or other writing that would get in the way of your message." He also said the site must not be "a cheesy simulation." You are one of those critics. The text was written by an AI. Be hard on it. A finding that is only a matter of taste wastes the editor's time. A real problem you pass over will be published.

# The voice the text is meant to have

A plain course handbook, speaking to a student: second person, imperative where it gives instructions, declarative sentences, concrete numbers, no salesmanship. It reports what is documented and names the source, and it says so when something is the site's own choice. American English. It does not imitate Auden's voice and does not pretend to be him.

House rules the text is supposed to keep. Report any breach:
- No em-dashes. En-dashes only in ranges of numbers (pp. 134–135).
- No exclamation marks. No rhetorical questions. (The set questions put to the student are real questions and are allowed.)
- No "not X but Y" turned for effect. No groups of three by reflex. No hedging words. No hype.
- Dates in American form (February 10, 1941).
- Titles of books, plays, operas and periodicals in italics. Titles of essays and poems in curly double quotes.

# How to read the labels

The bold label over each entry says where the words stand in the site.

- `ui:…` The app's own wording: a button, heading, instruction or message.
- `page:syllabus…` and `page:about…` The page that prints Auden's reading list, and the page that says what is on record about the course and what the site supplied.
- `work:<book>…` A book on the list: its name, the note on the edition printed, where to find a copy.
- `text:<book>` and `text:<book>.note` What stands at the head of a book in the site's reader.
- `weekN.title`, `.sub`, `.intro.k` A week's heading and opening paragraphs.
- `weekN.reading…` The reading set that week. `.items.k.label` is a line in the list of what to read. `.paras.k` is the note printed with an opera. `.auden.paras.k` reports what Auden wrote about that opera.
- `weekN.words…` A passage from a set book with words left out for the student to supply. The passage is not shown to you. `.setting` introduces it, `.where` and `.cite` say where it is from, `.after.k` is shown when the student has finished.
- `weekN.test.items.k…` The weekly test on the reading. `.ask` or `.q` is the question. `.a` and `.speaker` list the answers the program accepts; the student does not read them as prose. `.where` is shown after the student answers and says where the passage is from.
- `weekN.questions.k.text` A question set for a paper. `.gloss.k` is a hint printed under it. `.auden.paras.k` are paragraphs shown only after the student has handed the paper in; they report what Auden wrote on the matter. `.auden.sources.k` are their sources.
- `weekN.making.k…` The week's exercise. `.title`; `.short`, a one-line description used in lists; `.brief.k`, what the exercise is; `.rules.k`, the instructions; `.table…`, a chart to fill in, of which `.key…` is shown afterwards; `.translate.glossary…`, the word-list given for a translation, each entry a word and then its meanings; `.reflect`, a question asked when the student has finished; `.source.k`, where the exercise comes from.

# How to report

Write your findings to the one file named in your task. Change nothing else. One finding per entry, in this form:

    ### <label of the entry, copied from its bold line>
    - where: <up to ten consecutive words copied from the passage, enough to find the place>
    - problem: <one or two sentences>
    - fix: <the replacement wording, written out in full; or "cut"; or "flag only" with what the editor must decide>
    - weight: must | should | could

Keep them in the order of the text. End the file with a section "Patterns": the faults that recur, most frequent first, each with a count and two labels where it can be seen.

"must" means a reader would be misled, stopped, or would wince. "should" means it is plainly worse than the fix. "could" means a judgment call; use it sparingly.

Rules for your own writing. They matter, because a report that breaks them is discarded by a filter and your work is lost:
- Never copy out more than ten words in a row from the text under review.
- Never copy out words that the text has inside quotation marks. Those are quotations from Auden and others and are in copyright. Point to them by label and a few neighboring words. If your replacement wording keeps a quotation, write [quotation kept] in its place.
- Your fixes are your own sentences and may be any length.
- Write the report file in pieces, and keep every piece short. No single message or tool call of yours may carry more than about 1,200 words: a longer one is cut off and everything in it is lost. Create the file with your first five or six findings, then append five or six at a time (for example with a shell here-document and `>>`). Do the same with your thinking: do not plan the whole report in one long passage before you write.
- Do not edit any other file. Do not call any tool whose name begins mcp__hearthbot__. Do not install anything.
- When you have finished, reply with at most twelve lines: the number of findings by weight, the three worst, and the main patterns. The detail belongs in the file.
