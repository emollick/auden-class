# What you are reviewing

A web site that gives W. H. Auden's 1941 University of Michigan course, "Fate and the Individual in European Literature" (English 135), as a working term of fifteen weeks. A student enrolls, reads the required books in the site's reader, learns cantos of Dante by heart and is checked on them, takes a weekly test on the reading, fills in missing words in a passage, does a weekly exercise (a translation from a word-list, a parody, a chart, a passage with changed words to put right), writes a paper on a question, and at the end takes the examination: five cantos written out from memory in three hours. After the student hands in a paper, the site shows what Auden himself wrote or said on the matter, and the student writes a reply.

The person who commissioned the site asked for this before it is published: "have critics scour every word you write for LLM-speak or other writing that would get in the way of your message." He also said the site must not be "a cheesy simulation." You are one of those critics.

This is the second round. The text was written by an AI, read by a first round of critics, and revised. The revision cured many faults and may have made new ones: sentences joined that should have stayed apart, a verb of saying wedged into every sentence, a pointer cut loose from its noun, the same repair made the same way thirty times. Read what is on the page now. Be hard on it. A finding that is only a matter of taste wastes the editor's time, and a real fault you pass over will be published.

# The voice the text is meant to have

A plain course handbook speaking to a student: second person, imperative for instructions, declarative sentences of ordinary length, concrete numbers, no salesmanship. It reports what is documented and names the source, and it says so when something is the site's own choice. American English. It does not imitate Auden's voice and does not pretend to be him.

House rules the text is supposed to keep. Report any breach. Do not ask for a change that would break one.

1. No em-dashes in the site's own prose. En-dashes only between numbers (pp. 134–135). No exclamation marks. No rhetorical questions. (The questions put to the student are real questions.)
2. No "not X but Y" turned for effect where nobody supposed X. A plain contrast with "but", "though" or "although" is allowed and wanted.
3. No reflex groups of three. No hedging ("perhaps", "a kind of", "in some sense"). No hype. No colon used to stage a reveal.
4. American classroom words. Books and questions are assigned or required; Auden gave the class a question or put it to the class. An examination is taken. The site checks; a person grades. "Paper" is the weekly essay only.
5. Auden is named before he is "he" in every block of paragraphs that is shown by itself.
6. A judgment of Auden's has a verb of saying in its own sentence or the one before, so the reader always knows who holds the opinion. A reading that is the site's own is marked as the site's.
7. The paraphrase never borrows Auden's "I", "we" or "one". Words inside quotation marks are his and stay as they are.
8. No run of three or more short sentences of one shape. No short sentence set at the end of a paragraph for the beat. No sentence that only announces the next one.
9. Titles of books, plays, operas, long poems and periodicals are italic (shown here between asterisks). Titles of essays, lectures and short poems are in curly double quotes.
10. Every "this", "it", "there", "the same" has one clear owner nearby.
11. A person or book is introduced in a few words at its first mention in each week.
12. A person in general is "a person", "people" or "they", never "a man" or "he", except in quotation or where the argument is about men.
13. Dates in American form (February 10, 1941). American spelling.
14. Quotations are short: a line or two at most. Everything else from Auden and from Donald Pearce is reported in the site's own words.

# How to read the labels

The bold label over each entry says where the words stand in the site.

- `ui:…` The app's own wording: a button, heading, instruction or message. Words in braces, such as {n} or {date}, are filled in by the program. A bar | separates the singular form from the plural.
- `page:syllabus…` and `page:about…` The page that prints Auden's reading list, and the page that says what is on record about the course and what the site supplied.
- `work:<book>…` A book on the list: its name, the note on the edition printed, where to find a copy.
- `text:<book>` and `text:<book>.note` What stands at the head of a book in the site's reader.
- `weekN.title`, `.sub`, `.intro.k` A week's heading and opening paragraphs.
- `weekN.reading…` The reading for the week. `.items.k.label` is a line in the list of what to read. `.paras.k` is the note printed with an opera. `.auden.paras.k` reports what Auden wrote about that opera.
- `weekN.words…` A passage from a required book with words left out for the student to supply. The passage is not shown to you. `.setting` introduces it, `.where` and `.cite` say where it is from, `.after.k` is shown when the student has finished.
- `weekN.test.items.k…` The weekly test on the reading. `.ask` or `.q` is the question. `.a` and `.speaker` list the answers the program accepts; the student does not read them as prose. `.where` is shown after the student answers.
- `weekN.questions.k.text` A question for a paper. `.gloss.k` is a hint printed under it. `.auden.paras.k` are paragraphs shown only after the student has handed the paper in. `.auden.sources.k` are their sources.
- `weekN.making.k…` The week's exercise. `.title`; `.short`, a one-line description used in lists; `.brief.k`, what the exercise is; `.rules.k`, the instructions; `.table…`, a chart to fill in, of which `.key…` is shown afterward; `.translate.glossary…`, the word-list given for a translation; `.reflect`, a question asked when the student has finished; `.source.k`, where the exercise comes from.

Passages printed from the required books are the authors' words and are not in your file.

# How to report

Write your findings to the one file named in your task. Change nothing else. One finding per entry, in this form:

    ### <label of the entry, copied from its bold line>
    - where: <up to ten consecutive words copied from the passage, enough to find the place>
    - problem: <one or two sentences>
    - fix: <the replacement wording, written out in full; or "cut"; or "flag only" with what the editor must decide>
    - weight: must | should | could

Keep them in the order of the text. End the file with a section "Patterns": the faults that recur, most frequent first, each with a count and two labels where it can be seen. If an entry is clean, say nothing about it. If your whole part is clean, say so and stop: an honest short report is worth more than a padded one.

"must" means a reader would be misled, stopped, or would wince. "should" means it is plainly worse than the fix. "could" means a judgment call; use it sparingly.

Rules for your own writing. They matter, because a report that breaks them is discarded by a filter and your work is lost:
- Never copy out more than ten words in a row from the text under review.
- Never copy out words that the text has inside quotation marks. Those are quotations from Auden and others and are in copyright. Point to them by label and a few neighboring words. If your replacement wording keeps a quotation, write [quotation kept] in its place.
- Your fixes are your own sentences and may be any length. A fix must not commit a fault from the house rules.
- Write the report file in pieces, and keep every piece short. No single message or tool call of yours may carry more than about 1,200 words: a longer one is cut off and everything in it is lost. Create the file with your first five or six findings, then append five or six at a time (for example with a shell here-document and `>>`). Do the same with your thinking: do not plan the whole report in one long passage before you write.
- Do not edit any other file. Do not call any tool whose name begins mcp__hearthbot__. Do not install anything.
- When you have finished, reply with at most twelve lines: the number of findings by weight, the three worst, and the main patterns. The detail belongs in the file.
