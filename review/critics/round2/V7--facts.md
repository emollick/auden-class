# V7, facts: the reading-list page, the Sources page, the notes on books and editions, the notes at the head of each book

Second-round check. The site's own contents were read from the prebuild copies (course.json, ui.json, texts/<id>/index.json). Findings follow in the order of the text.

## Findings

### page:syllabus.kinds.required.intro.1
- where: in ink beside two others
- problem: The only published picture of the sheet (Jacobs's post; saved as research/ayjay_syllabus.png) is a black-and-white copy. It shows the word written by hand beside Goethe and Henry Adams, but a copy cannot show whether the hand used ink or pencil, and the post (https://blog.ayjay.org/audensyllabus/) says nothing about the handwriting.
- fix: For the two words about ink read: by hand. The rest of the sentence stands.
- weight: should

### page:syllabus.kinds.critical.intro.1
- where: Where one can be read free online, the table
- problem: False for eight of the entries that the table leaves without a link. Each of these has an unrestricted scan at the Internet Archive, not a lending copy: Benedict (dli.ernet.5987, the London edition of 1935), Crossman (in.ernet.dli.2015.173699), Cochrane (christianityclas00incoch, a reprint of 1957), C. S. Lewis (allegoryofloveby0000csle, a reprint of 1958), Eliot (dli.ernet.475910), Empson (englishpastoralp00emps), the second volume of Valéry (varieteii0000paul) and James (dli.ernet.3493). Most are scans of books that the table itself calls in copyright, which is a good reason to leave them unlinked, but then the sentence promises more than the table does.
- fix: Where a book is out of copyright in the United States and a free copy of it was found, the table links to that copy. The second volume of Valéry, a book of 1930, meets that test, so its entry can add: and the second is at the [Internet Archive](https://archive.org/details/varieteii0000paul).
- weight: must

### page:about.sections.1.paras.1
- where: his biographers Tom Nolan and Michael Kreyling describe
- problem: Only Nolan wrote a biography. Kreyling's *The Novels of Ross Macdonald* is a critical study of the novels, as its title in the site's own Works cited shows (catalogue record: https://archive.org/details/novelsofrossmacd0000krey).
- fix: End the second sentence after the pen name, and begin a new one: His biographer Tom Nolan and the critic Michael Kreyling describe his part in the course.
- weight: should

### page:about.sections.1.table.rows.7.2
- where: the page the figure is on could not be read
- problem: Chapman's whole article is online in the University of Michigan's own archive of the *Review*: https://quod.lib.umich.edu/m/mqrarchive/act2080.0017.004/92:14?page=root;rgn=full+text;size=100;view=text . The archive refused this checker's fetch (HTTP 403), so the page was not read here, but a web search that reads it reports from the article's first page an enrollment of twenty-two in English 135 and twenty-one in the spring course, with four students in both.
- fix: flag only. Open the archive page in a browser. If p. 507 shows the figure, begin the entry: Chapman, p. 507, gives an enrollment of twenty-two. Then cut the last sentence of the note under this table, which says his article was read only in part, and check the other Chapman pages against the archive.
- weight: should

### page:about.sections.1.table.rows.8.2
- where: Each account gives a different reason
- problem: Four accounts are cited but they give three reasons. Carpenter (p. 319) repeats the reason that Chapman prints on pp. 508–509 from a classmate's recollection; Pearce (p. 129) and Miller (p. 26) each give another. Checked in the lending copies at the Internet Archive (whaudenbiography0000carp) and in Google Books' search of the *Michigan Quarterly Review* volume (id uDDiAAAAMAAJ).
- fix: Replace that one sentence with: The accounts give three different reasons, because Carpenter repeats Chapman's. The rest of the entry stands.
- weight: must

### page:about.sections.1.table.rows.9.1
- where: in an empty room nearby
- problem: Pearce says only that he went to a nearby classroom after a lecture (research/auden/pearce.txt, line 2, about character 34,000, which is p. 134). The word for empty occurs nowhere in the scan or in the recovered pages (research/A_pearce_gap2.txt).
- fix: For the five words after the comma read: in a classroom nearby. The rest stands.
- weight: should

### page:about.sections.1.table.rows.9.2
- where: Pearce, pp. 133–134
- problem: The whole passage (the hours of the class, the notebook, the nearby classroom) stands on p. 134. In the scan text the folio of p. 133 is at character 33,199 and that of p. 134 at 35,684, and the passage lies between them; Google Books' search of the volume (id g05aAAAAMAAJ) also labels it p. 134. Row 6 of the same table already cites p. 134 for the hours. Kreyling's pages could not be confirmed: full-text search of the lending copy (novelsofrossmacd0000krey) shows that he cites Millar's class notes, but it gives no page numbers, and Google Books has no searchable copy.
- fix: Pearce, p. 134; Kreyling, pp. 39–40. The Kreyling pages are still to be checked against the book itself.
- weight: should

### page:about.sections.1.table.rows.12.2
- where: Pearce, p. 135
- problem: The sentence about the phonograph begins at the foot of p. 135 (character 38,232, just before the folio at 38,254) and runs over; the records he played are named on p. 136 (character 39,048).
- fix: Pearce, pp. 135–136
- weight: could

### page:about.sections.2.paras.1
- where: in the prose translation of Carlyle, Okey and Wicksteed
- problem: The sentence reports Pearce, and Pearce names only Carlyle and Wicksteed (pearce.txt, character 61,260, p. 153). Okey's name and the Modern Library volume are this site's identification, which is right but is not in the source.
- fix: From memory the class would write out seven cantos in what Pearce calls the Carlyle and Wicksteed prose version. That is the translation of the Modern Library volume named on the list, by Carlyle, Okey and Wicksteed.
- weight: could

### page:about.sections.2.paras.4
- where: and four of the five cantos
- problem: Pearce names four cantos of the seven first announced (*Inferno* III and V, *Purgatorio* XXVIII as an example, *Paradiso* XXXIII; pearce.txt, characters 61,217–61,560, p. 153). He then says the number was cut to five and does not say which two were dropped, so he does not name four of the five.
- fix: In the second sentence, for the last six words read: and any of the cantos. Then add: He names four of the seven first announced, and this site keeps those four. The last sentence stands.
- weight: should

### page:about.sections.4.table.rows.4.3
- where: He put five of them to this class
- problem: Four of the five were given to the class. The one on Prospero was not: in Pearce's notes of the lecture on *The Tempest* Auden asks it and answers it himself in the next sentence (pearce.txt, character 52,968, p. 150). The note under the week 5 question says correctly that he asked it in his lecture.
- fix: Six questions on this site are Auden's. Pearce records five of them in this class. Four were given to the class to think about: the one on Iago and Falstaff (week 4, worded by this site), the one on a movement of a Beethoven concerto (week 13) and the two on *The Castle* (weeks 14 and 15). The one on Prospero (week 5) he asked in his lecture and answered at once himself. [the sentence on the Swarthmore question stands]
- weight: could

### page:about.sections.4.table.rows.6.3
- where: Angelyn Stevens, who attended both Michigan courses
- problem: The source cited says only that she audited Auden's class and came regularly (Farnan, p. 74, by Google Books' search of the volume, id rUFaAAAAMAAJ); Carpenter, p. 320, has her attending informally. Neither says she attended both courses, and the one report that might (a 1973 *Michigan Daily* article at the Bentley Library) could not be opened and is not in Works cited. In the same entry the piece by Campion is called a song; it is a poem from his treatise on verse, and the note at the head of the site's own poems calls it a poem.
- fix: Two changes, and the rest stands. For the clause about her attendance read: Angelyn Stevens, who audited the Michigan course, listed. In the second sentence read: a poem of Campion's.
- weight: should

### page:about.sections.5.list.7
- where: Each names its source and gives its date
- problem: False when this part was printed, and repaired since in the weeks. Of the 43 blocks in course.json (units, questions, auden), three then carried no year in their paragraphs or their source line: week 1, question 2, and week 3, question 2, which draw on an essay in *The Dyer's Hand*, and week 13, question 2, which reports Pearce. In the prebuild copy as it stood at 16:07 all 43 give a year, and week 14, question 4, dates its second source by saying how many years later it appeared.
- fix: flag only. No change is needed on this page as long as the dates added to weeks 1, 3 and 13 are kept.
- weight: could

### page:about.sections.5.list.8
- where: the paragraph says so
- problem: This sentence also depends on the weeks, and it could not be confirmed here. The critics who compared the weeks with Auden's writings report paragraphs that carry an idea of his over to a book without saying that the step is this site's: two in week 9 (week9.reading.2.auden.paras.3 and week9.questions.1.auden.paras.4, in V4--faithful.md) and others in weeks 11 to 13 (V5--faithful.md, the first pattern). In the prebuild copy of 16:07 both week 9 blocks carry the mark. The others were not rechecked.
- fix: flag only. Let the sentence stand once those findings have been applied.
- weight: should

### page:about.sections.7.paras.2
- where: Editors’ introductions and notes have been removed
- problem: One part of the reader looks like an exception. The first part of *The Education of Henry Adams* is headed as the editor's preface and signed by Henry Cabot Lodge (texts/adams/index.json; build/texts/notes/adams.md says it was kept on purpose). Adams wrote it himself and sent it to Lodge to sign (for example https://cliffsnotes-v1.prod.webpr.hmhco.com/literature/e/the-education-of-henry-adams/about-the-education-of-henry-adams), so keeping it is right, but a reader who meets it will think this sentence wrong. Translators' notes were removed too (Trotter's, the Archers', Hollander's, Conington's), which the sentence does not say.
- fix: The introductions and notes of editors and translators have been removed. The one preface headed as an editor's that remains, in *The Education of Henry Adams*, was written by Adams himself for Henry Cabot Lodge to sign.
- weight: could

### page:about.sections.8.sources.18
- where: (Ecco Press, 1993)
- problem: The catalogues disagree about the year. The Library of Congress record gives Hopewell, NJ: Ecco Press, [1994] (https://www.loc.gov/item/93002409/), and Open Library and the Internet Archive's record of the scan also give 1994, as the first trade edition. The Auden Society's list gives 1993 (https://audensociety.org/books.html). The prebuild copy of 16:25 has 1994 here and in the source lines of weeks 6 and 8.
- fix: flag only. Keep 1994 in all three places, on the strength of the Library of Congress record.
- weight: could

### page:about.sections.8.sources.19
- where: (Random House, 1968)
- problem: The Random House edition carries a 1968 copyright line, but the standard bibliography that this page cites dates the editions Faber, 1968, and Random House, 1969 (Bloomfield and Mendelson, by full-text search of whaudenbibliogra0000bloo), and the Auden Society's list of his books also gives 1969 for the American edition (https://audensociety.org/books.html). Week 15 cites the book in the same form.
- fix: W. H. Auden, *Secondary Worlds* (Faber and Faber, 1968), the T. S. Eliot Memorial Lectures of 1967, cited here from the Random House edition of 1969. In week 15 read: *Secondary Worlds* (Random House, 1969).
- weight: could

### work:dante.copy
- where: with a few alterations by the Temple editor
- problem: The site's own text of the *Inferno* has 210 bracketed places, in every one of its 34 cantos (seven in canto III and ten in canto V, two of the cantos set for the examination; counted in texts/dante-temple). The Editorial Note of the Temple volume speaks of certain alterations and does not call them few (the page named inferno00dant_3_0415.djvu in .cache/temple/inferno00dant_3_djvu.xml). In the same entry, the statement that the reprint has no free scan was confirmed only for the Internet Archive, where all ten scans are lending copies; HathiTrust refused the check.
- fix: Cut the two words that say the alterations are few, and add after that sentence: There are about two hundred of them. In the third sentence, for the clause of reason read: since no free scan of the Modern Library reprint was found by this site.
- weight: should

### work:antigone.find
- where: The list names the translation of 1939 by Dudley
- problem: The list's own wording differs slightly. On the picture the entry says, in parentheses, that the play is translated by Dudley Fitts or Fitzgerald (research/ayjay_syllabus.png). There was only the one translation, made by the two together (Harcourt, Brace, 1939), so the site reads the entry rightly, but work:antigone.set, in the column for the edition on the list, gives the corrected form as if the list had it.
- fix: After the two translators' names add, in parentheses: the list joins the two names with “or”. The rest stands.
- weight: could

### work:horace.copy
- where: No free text of Bennett’s translation was found
- problem: A free scan of the Loeb volume with Bennett's translation is at the Internet Archive (https://archive.org/details/odesandepodes01horagoog, not a lending copy). What was not found is a proofread text, which is the reason this site gives for the Loeb Augustine and the Everyman *Faust* and *Peer Gynt*, and the reason the Sources page states.
- fix: For the first three words of the second sentence read: No proofread text. The rest stands.
- weight: could

### work:cochrane.copy
- where: 1940. In copyright.
- problem: The second statement could not be confirmed. The book was first published at Oxford in 1940. No renewal of an American copyright appears under the author's name or the title in the Copyright Office's renewal lists for 1965 to 1968 (as transcribed at Project Gutenberg, nos. 11831–11838), and the University of Florida, having reviewed its copy of the New York reprint of 1957, marks it out of copyright (https://archive.org/details/christianityclas00incoch). A copyright restored to a British book by the act of 1994 may still apply, so the statement may be right, but this check could not establish it.
- fix: flag only. Keep the statement if the editor relies on the restored copyright. Otherwise write: 1940. Treated on this site as in copyright.
- weight: should

### work:nietzsche.copy
- where: The English translation of 1911 is at
- problem: The linked text is Anthony M. Ludovici's translation in its third edition, which is what the title page dates 1911 (https://www.gutenberg.org/ebooks/25012). The translation is therefore older than 1911, and it was not the first in English (Thomas Common's appeared in 1896).
- fix: 1888. [Project Gutenberg](https://www.gutenberg.org/ebooks/25012) has the English translation by Anthony M. Ludovici, third edition, 1911.
- weight: could

### work:empson.copy
- where: of *Some Versions of Pastoral*. In copyright.
- problem: The last statement could not be confirmed, for the same reasons as with Cochrane. No renewal appears under Empson's name or either title in the renewal lists for 1965 to 1968 (Project Gutenberg, nos. 11831–11838), and the University of Florida marks its copy of the Norton edition out of copyright (https://archive.org/details/englishpastoralp00emps). As a British book of 1935 it may still be protected by a restored copyright.
- fix: flag only. Keep the statement if the editor relies on the restored copyright. Otherwise write: 1938. The American title of *Some Versions of Pastoral* (London, 1935). Treated on this site as in copyright.
- weight: should

### text:dante-temple
- where: Translated by John Aitken Carlyle, Thomas Okey and Philip
- problem: In the reader this line ends with a year that the entry above does not show. texts/dante-temple/index.json has the field year set to 1899–1901, and reader.js (line 51) prints a year after the translators' names. Those are the years of the Temple volumes. Carlyle's translation dates from 1849, and work:dante.copy itself says the *Inferno* follows his second edition of 1867, so the line misdates his part.
- fix: Remove the year field from texts/dante-temple/index.json, so that the line carries no date, as it does for the undated libretti. The line that names the text's source already gives the years of the printings.
- weight: must

### text:dante-temple.note
- where: the reading was settled from the printed page or
- problem: The note leaves out one kind of correction. The record lists eight places where the printing followed is itself defective (a stop, a letter or a word dropped, a word printed twice) and the reading was taken from another printing of the series: two in the *Paradiso* and six in the *Purgatorio*, one of them a full stop in canto XXVIII, which every student learns (build/texts/temple/REPORT.md, the list of readings taken from another printing, and its totals: 936 corrections, of which 8 are of this kind). The same sentence stands in page:about.sections.7.paras.3.
- fix: Add after that sentence, here and on the Sources page: In eight places a stop, a letter or a word has dropped out of those printings, and it is supplied from another printing of the same volumes.
- weight: could

## Patterns

1. A general statement (each, every, where one, no) that holds for most cases and fails, or was not tested, for the rest (7). See page:about.sections.1.table.rows.8.2 and page:syllabus.kinds.critical.intro.1. The others are page:about.sections.5.list.7, page:about.sections.5.list.8, page:about.sections.7.paras.2, work:horace.copy and the clause about scans in work:dante.copy.
2. A detail given on a source's authority that the source does not give (7). See page:about.sections.2.paras.4 and page:about.sections.1.table.rows.9.1. The others are the ink in page:syllabus.kinds.required.intro.1, Okey's name in page:about.sections.2.paras.1, the Prospero question in page:about.sections.4.table.rows.4.3, the attendance of Angelyn Stevens in page:about.sections.4.table.rows.6.3 and the two translators' names in work:antigone.find.
3. A year attached to the wrong thing: an edition's year given to a translation, or a copyright year to a publication (4). See text:dante-temple and work:nietzsche.copy. The others are page:about.sections.8.sources.19 and page:about.sections.8.sources.18.
4. A statement that could not be confirmed because the source would not open (3). See page:about.sections.1.table.rows.7.2 (Chapman's first page, in an archive that refused the fetch) and page:about.sections.1.table.rows.9.2 (Kreyling's pages). The third is the 1973 newspaper report behind page:about.sections.4.table.rows.6.3.
5. Copyright status stated flatly where the record is mixed (2). See work:cochrane.copy and work:empson.copy.
6. A page reference to Pearce one page too wide or too narrow (2). See page:about.sections.1.table.rows.9.2 and page:about.sections.1.table.rows.12.2.

Notes on the things the brief named first.

- The prose Dante. What the two pages and the two notes say of how the text was made agrees with build/texts/temple/REPORT.md (printings of 1904, 1904 and 1910; two or more other copies compared for each canto; twelve cantos read whole, the four examination cantos among them) and with the Editorial Note (second edition of 1867; Oelsner; square brackets). The exceptions are the three findings on work:dante.copy, text:dante-temple and text:dante-temple.note.
- Page counts. Every figure agrees with course.json: 4,593 for the required books with one Greek play, both omitted books and no libretti; 4,916 with the other play and the libretti; 4,240 for the term; 282.7 a week.
- Quotation marks and hyphens. No straight quotation mark and no double hyphen remains in any of the 38 texts (1,069 part files searched).
- Machine reading. Nine texts come from scans; six were read through; the Rilke and *Fidelio* were corrected only where in doubt; all nine carry the warning and a link. This agrees with build/texts/notes.
- The first-round corrections (B--facts.md) were each applied correctly. Only its optional suggestion to cite Miller's magazine article was not taken up.

The site while this report was being written. The editors were revising the two pages and the notes as these findings were added, so the prebuild copy no longer matches this part. As course.json and the index files stood at 16:25:

- Applied or settled already, 18 of the 25 findings: page:syllabus.kinds.required.intro.1; page:syllabus.kinds.critical.intro.1; page:about.sections.1.paras.1; rows 8.2, 9.1 and 12.2 of the first table; page:about.sections.2.paras.1 and paras.4; rows 4.3 and 6.3 of the second table; page:about.sections.5.list.7; page:about.sections.7.paras.2; page:about.sections.8.sources.18; work:dante.copy; work:horace.copy; work:nietzsche.copy; text:dante-temple; text:dante-temple.note.
- Still open, 7: page:about.sections.1.table.rows.7.2 (Chapman's article in the archive); Kreyling's pages in page:about.sections.1.table.rows.9.2; page:about.sections.5.list.8 (now the eleventh item of that list); page:about.sections.8.sources.19 (two places in course.json still give Random House, 1968); work:antigone.find; work:cochrane.copy; work:empson.copy.
- The new wording was checked as well. 78 entries of this part now read differently, and the paragraphs on the page count have become a table. Every new statement that could be checked is right: the operas are in Italian, German or French; the Saturday classes were for students taking the lectures for credit (*Lectures on Shakespeare*, p. 321); Mandelbaum taught philosophy at Swarthmore and Spears wrote a book on the poetry; the lectures on love were several (Pearce, p. 137); the questions of weeks 5, 13, 14 and 15 are in the words Pearce records (pp. 135, 136 and 150); the three totals of the new table; only the twelve checked cantos can be chosen in the prose version (views/heart.js, line 162), and the other two versions are offered (lib/course.js, line 6); the examination of May 1942 runs past p. 468, as the new range says; Trotter's translation dates from 1904; J. S. Watson, Jr. was an owner of *The Dial*; the chapter of *A Season in Hell* quotes seven poems; a loan from the Internet Archive needs a free account; the tests of weeks 2 and 6 quote the translations printed here; the only editor's preface left in the reader is the one in *The Education of Henry Adams*.
- One place outside this part repeats the fault found under text:dante-temple. In ui.json the entry cantos.version.temple puts the years 1899–1901 after the three translators' names.

## Checked and right

The number after each label counts the statements checked and found right. Where an entry also has a finding above, the count leaves that statement out. Notes in parentheses say how the check was made or what stays open.

- page:syllabus.intro.1: 5 (the bibliography's two leaves; Jacobs's post of October 1, 2012, and the estate's permission; the link)
- page:syllabus.intro.2: 11 (every term of the heading read on the picture; the year from the bibliography)
- page:syllabus.intro.3: 2 (order of the tables against the picture; the columns in views/syllabus.js)
- page:syllabus.kinds.required.intro.1: 7 (23 entries; the two marked books; no test item or required paper on either)
- page:syllabus.kinds.opera.intro.1: 4 (nine libretti; Pearce, pp. 135–136; the running times given in the weeks)
- page:syllabus.kinds.opera.intro.2: 3 (seven of the nine are Rullman's; six libretti name no translator)
- page:syllabus.kinds.critical.intro.1: 2
- page:syllabus.kinds.critical.intro.2: 5 (eight titles on the picture; the three wrong names)
- page:about.lede: 3
- page:about.sections.1.paras.1: 5
- page:about.sections.1.table.rows.1.1 and 1.2: 2
- page:about.sections.1.table.rows.2.1 and 2.2: 2
- page:about.sections.1.table.rows.3.1 and 3.2: 1
- page:about.sections.1.table.rows.4.1 and 4.2: 3
- page:about.sections.1.table.rows.5.1 and 5.2: 2 (Miller, p. 26, by Google Books' search of the volume)
- page:about.sections.1.table.rows.6.1 and 6.2: 3
- page:about.sections.1.table.rows.7.1 and 7.2: 3 (Farnan, p. 73; Pearce, p. 129)
- page:about.sections.1.table.rows.8.1 and 8.2: 5 (the four page references and Miller's reason)
- page:about.sections.1.table.rows.9.1: 2
- page:about.sections.1.table.rows.9.2: 1 (Pearce's page; Kreyling's pages open)
- page:about.sections.1.table.rows.10.1 and 10.2: 4 (p. 131 by full-text search and Google Books' page labels, since the scan text begins partway down that page; pp. 139–140 in research/A_pearce_gap2.txt)
- page:about.sections.1.table.rows.11.1 and 11.2: 2
- page:about.sections.1.table.rows.12.1: 1
- page:about.sections.1.table.rows.13.1 and 13.2: 3
- page:about.sections.1.table.rows.14.1 and 14.2: 5
- page:about.sections.1.table.rows.15.1 and 15.2: 6
- page:about.sections.1.table.rows.16.1 and 16.2: 4
- page:about.sections.1.table.rows.17.1 and 17.2: 2
- page:about.sections.1.table.rows.18.1 and 18.2: 4
- page:about.sections.1.table.rows.19.1 and 19.2: 5
- page:about.sections.1.after.1: 3
- page:about.sections.2.paras.1: 15 (each step of Pearce's account, pp. 153–154, placed by character offset in the scan text)
- page:about.sections.2.paras.2: 9 (Miller, pp. 26–27; Farnan, pp. 73 and 76; Nolan, p. 53)
- page:about.sections.2.paras.3: 5 (Chapman, p. 509; that he took both courses rests on a search engine's reading of his first page)
- page:about.sections.2.paras.4: 5
- page:about.sections.3.paras.1: 3 (282.7 pages a week by the figures in course.json)
- page:about.sections.3.paras.2: 10 (the order of Pearce's lectures by offset in the scan; the day and the two authors named with the assignment, p. 135)
- page:about.sections.4.paras.1: 3 (six questions from Auden in course.json: weeks 4, 5, 10, 13, 14, 15)
- page:about.sections.4.paras.2: 4
- page:about.sections.4.table.rows.1.1 and 1.3: 1
- page:about.sections.4.table.rows.2.1 and 2.3: 8
- page:about.sections.4.table.rows.3.1 and 3.3: 4 (the bulletin of March 1962, read on the page images in research/swat_spears.pdf)
- page:about.sections.4.table.rows.4.1 and 4.3: 10 (Spears, p. 4, read on the page image)
- page:about.sections.4.table.rows.5.1 to 5.3: 4
- page:about.sections.4.table.rows.6.1 to 6.3: 7
- page:about.sections.4.table.rows.7.1 and 7.3: 3
- page:about.sections.4.table.rows.8.1 and 8.3: 4
- page:about.sections.4.table.rows.9.1 and 9.3: 5
- page:about.sections.4.table.rows.10.1 and 10.3: 3
- page:about.sections.4.table.rows.11.1 and 11.3: 5
- page:about.sections.4.table.rows.12.1 and 12.3: 5
- page:about.sections.4.table.rows.13.1 to 13.3: 9
- page:about.sections.4.table.rows.14.1 to 14.3: 7
- page:about.sections.5.list.1: 1
- page:about.sections.5.list.2: 1
- page:about.sections.5.list.3: 2
- page:about.sections.5.list.4: 5 (the rule as coded in lib/text.js and lib/heart.js)
- page:about.sections.5.list.5: 1
- page:about.sections.5.list.6: 1
- page:about.sections.5.list.7: 3
- page:about.sections.6.paras.1: 5 (the *Daily News* blog of February 27, 2013; Open Culture's headline of that month)
- page:about.sections.6.paras.2: 6 (4,593 and 4,916 in course.json)
- page:about.sections.6.paras.3: 3 (3,954 and 286 make 4,240)
- page:about.sections.7.paras.1: 5
- page:about.sections.7.paras.2: 3 (the script over the 38 texts)
- page:about.sections.7.paras.3: 9 (against build/texts/notes and build/texts/temple/REPORT.md)
- page:about.sections.8.sources.1: 5 (Internet Archive catalogue record)
- page:about.sections.8.sources.2: 5 (first edition; the scan used for the weeks is Faber's of 1991)
- page:about.sections.8.sources.3: 4
- page:about.sections.8.sources.4: 6 (volume, number, season and pages from the journal's archive, by search)
- page:about.sections.8.sources.5: 4
- page:about.sections.8.sources.6: 4 (the post's own date)
- page:about.sections.8.sources.7: 4
- page:about.sections.8.sources.8: 6
- page:about.sections.8.sources.9: 4
- page:about.sections.8.sources.10: 4
- page:about.sections.8.sources.11: 4
- page:about.sections.8.sources.12: 7 (the last folio of the essay in the scan is 157)
- page:about.sections.8.sources.13: 4 (title and date on the page images)
- page:about.sections.8.sources.14: 5 (the exhibit's pages as saved in the research folder)
- page:about.sections.8.sources.15: 7 (the Vintage edition is of September 1967; the Faber printing is of 1974)
- page:about.sections.8.sources.16: 5 (the weeks cite the notes by line number)
- page:about.sections.8.sources.17: 8 (Appendix III; pp. 465–468)
- page:about.sections.8.sources.18: 3 (the year is under a finding)
- page:about.sections.8.sources.19: 2
- page:about.sections.8.sources.20: 4
- page:about.sections.8.sources.21: 5
- page:about.sections.9.paras.1: 2
- work:*.author and work:*.title, all 51 books: 102 (names, spellings and titles; the three names the list has wrong are corrected)
- work:*.set, 16 entries: 15 (each edition as typed on the picture of the list; the sixteenth is under work:antigone.find above)
- work:*.textLabels, 19 entries: 19 (each names the translator or language of the text it opens)
- work:dante.copy: 8
- work:agamemnon.copy and .find: 6 (the lending copy is Faber's of 1936)
- work:antigone.copy and .find: 5 (copyright renewed May 23, 1966; the lending copy is Harcourt's of 1939)
- work:horace.copy: 6 (the four odes, from build/texts/notes)
- work:augustine.copy: 4
- work:pascal.copy: 2
- work:phedre.copy: 3
- work:faust.copy: 3
- work:kierkegaard.copy and .find: 5 (Lowrie's copyright of December 10, 1941, was renewed March 26, 1969; no free scan of a complete translation at the Internet Archive)
- work:baudelaire.copy and .find: 10 (no free scan of Isherwood's translation at the Internet Archive)
- work:peer-gynt.copy: 4
- work:karamazov.copy: 2
- work:rimbaud.copy: 8 (Schwartz's copyright renewed January 11, 1967)
- work:rilke.copy: 5
- work:castle.copy: 3
- work:family-reunion.copy and .find: 3 (copyright of 1939, renewed 1967)
- work:orpheus.copy: 3
- work:don-giovanni.copy: 4 (week 6 has no test item or question on the opera)
- work:magic-flute.copy: 3
- work:fidelio.copy: 1
- work:dutchman.copy: 1
- work:tristan.copy: 4
- work:gotterdammerung.copy: 2
- work:carmen.copy: 3 (1910 is the Internet Archive's catalogue date)
- work:traviata.copy: 2
- work:benedict.copy: 2 (copyright of October 11, 1934, renewed October 31, 1961)
- work:mead.copy: 3 (the part of 1935 was renewed in 1962 and the new matter of 1939 in 1967)
- work:lynd.copy: 3 (the scan is Harcourt's of 1929 and is free to read)
- work:chadwick.copy: 3
- work:ker.copy: 3
- work:crossman.copy: 2 (London, 1937; the American copyright of 1939 was renewed January 17, 1967)
- work:cochrane.copy: 1
- work:lewis.copy: 2 (a British book of 1936, so the status rests on the restored copyright)
- work:wicksteed.copy: 3 (the scan is Dent's of 1913 and is free to read)
- work:wyndham-lewis.copy: 3 (the scan is Harper's of 1927 and is free to read)
- work:eliot-essays.copy: 2 (copyright of September 15, 1932, renewed January 6, 1960)
- work:nietzsche.copy: 2
- work:mann.copy: 2 (the one scan at the Internet Archive is a lending copy)
- work:empson.copy: 2
- work:valery.copy: 3
- work:james.copy: 3 (the copyright in the introduction was renewed July 19, 1962)
- work:rougemont.copy: 2 (copyright of August 15, 1940, renewed October 23, 1967)
- work:lawrence.copy: 3
- text:adams: 3 (each Project Gutenberg number in this group was opened and names the book and translator given)
- text:agamemnon: 4
- text:agamemnon.headings: 1 (six parts, in the order of the play)
- text:antigone: 4
- text:antigone.headings: 1 (five parts, in the order of the play)
- text:augustine: 4
- text:baudelaire: 4
- text:blake: 3
- text:carmen: 3
- text:carmen.note: 6 (build/texts/notes/carmen.md)
- text:castle: 4 (the Standard Ebooks page answers)
- text:dante-italian: 3
- text:dante-longfellow: 4
- text:dante-temple: 5 (the three translators; Dent; the printings of 1904, 1904 and 1910)
- text:dante-temple.note: 10 (the three scans answer; the comparison with other copies; the twelve cantos; what the volumes print; Oelsner and the brackets)
- text:don-giovanni: 3
- text:don-giovanni.note: 6
- text:dutchman: 3
- text:dutchman.note: 3 (the libretto's own title page names the publisher and the opera house)
- text:faust: 4
- text:fidelio: 3
- text:fidelio.note: 4 (1903 is in the owning library's shelf mark)
- text:gotterdammerung: 4
- text:hamlet: 3
- text:henry-iv-2: 3
- text:horace: 4
- text:horace-la: 3
- text:karamazov: 4
- text:kierkegaard: 4
- text:magic-flute: 3
- text:magic-flute.note: 6 (the title page names an opera house in London and one in New York)
- text:moby-dick: 3
- text:orpheus: 4
- text:orpheus.note: 4
- text:othello: 3
- text:pascal: 4
- text:peer-gynt: 4
- text:peer-gynt.note: 2
- text:phedre: 4
- text:poems: 5
- text:poems.note: 11 (the three title pages at Project Gutenberg: Harper, 1876, printed 1883; Clarendon Press, 1900, impression of 1931, poem no. 169; Tobias A. Wright, 1918)
- text:poems.headings: 4 (Lemont's two titles as in her book)
- text:rilke: 5 (the scan is free to read)
- text:rilke.note: 2
- text:rilke-de: 4
- text:rilke-de.note: 3 (both title pages give Leipzig, Insel-Verlag, 1920)
- text:rimbaud: 3
- text:rimbaud.note: 5
- text:rimbaud-fr: 3
- text:tempest: 3
- text:traviata: 3
- text:traviata.note: 5
- text:tristan: 3
- text:tristan.note: 6 (build/texts/notes/tristan.md: 59 lines in two passages, each read on the page of the other libretto)
- text:volpone: 3

In the reader each of these lines ends with a year where the index file has one. The sixteen years printed after a translator's name were checked as well: fifteen are right (1881, 1912, 1838, 1919, 1930, 1867, 1870, 1911, 1863, 1912, 1923, 1904, 1892, 1890, 1930) and the sixteenth is the finding on text:dante-temple.
