// The two pages of plain prose: the reading list, and the sources.

const jacobs = 'https://blog.ayjay.org/audensyllabus/';
const swat = 'https://archive.swarthmore.edu/auden';

export default {
  syllabus: {
    kicker: 'English 135',
    title: 'The reading list',
    intro: [
      `A mimeographed reading list survives from the course. The standard bibliography of Auden, by Bloomfield and Mendelson, describes it as two sheets. Alan Jacobs, a scholar of Auden, published a picture of the first sheet in 2012 with the permission of Auden’s estate, and [it can be seen on his site](${jacobs}).`,
      'The list is headed English 135, Fate and the Individual in European Literature. Under the title it gives the particulars: first semester, two hours of credit, Thursdays from four to six in 2215 Angell Hall, open to juniors, seniors and graduate students who have the written permission of Professor Arno Bader. The instructor’s name is typed as “W. Auden.” The list carries no year, and the standard bibliography puts it in the fall semester of 1941.',
      'The three tables below keep the order of the list. For every required book and opera they give the edition (where the list names one), the text this site prints, and the week you read it in.',
    ],
    kinds: {
      required: {
        title: 'Required reading',
        intro: [
          'The list has twenty-three entries of required reading. One entry offers a choice between *Agamemnon* and *Antigone*, and you pick one when you reach week 2. On the published sheet someone has written “Omit” by hand beside two others, *Faust* and *The Education of Henry Adams*. Who wrote it is not recorded. This site prints both books but does not require them. It leaves them out of the weekly page count and the tests, and you never have to write a paper on either.',
        ],
      },
      opera: {
        title: 'Opera libretti',
        intro: [
          'The list assigns nine opera libretti as reading. Donald Pearce, who took the course, remembers that Auden brought a phonograph and records to class. On this site you read each libretto and then listen to the whole opera with the libretto open. The site has no recordings, so you will need to find a complete recording of each opera, and a public library or a streaming service is the likely place to look. The shortest of the nine runs about an hour and a half and the longest about four and a half hours.',
          'The list names no editions of the libretti. Most of the texts printed here are the English versions from the bilingual libretti that Fred Rullman of New York published. Where the table names no translator, the libretto names none. The operas themselves are in Italian, German or French. Unless your recording is sung in English, you will hear one of those languages and follow the sense in the text printed here.',
        ],
      },
      critical: {
        title: 'Recommended critical reading',
        intro: [
          'The list recommends eighteen books of criticism. Nothing assigned on this site depends on them, and none of them is printed here. Where one is out of copyright in the United States and this site found a free copy online, the table links to it.',
          'The first sheet ends after the eighth of them, so the published picture shows only those eight. The other ten are known from Charles Miller, who took the course and prints the list in his memoir. The list gets three of the authors’ names wrong, and Miller’s copy has slips of its own. This site corrects both kinds of error.',
        ],
      },
    },
    col: { work: 'Book', set: 'Edition on the list', copy: 'On this site', note: 'Published', week: 'Week' },
    or: 'or',
    omit: 'marked “Omit”',
    here: 'Read it here',
  },

  about: {
    kicker: 'Sources',
    title: 'What is on record and what this site supplied',
    lede: 'What is known of English 135 comes from the reading list, from notes that two students, Donald Pearce and Kenneth Millar, made in 1941, and from accounts that students wrote many years later. Whatever on this site does not come from them is reconstruction. The site was made by Claude, an AI system, and no Auden scholar has checked it.',
    sections: [
      {
        h: 'On the record',
        paras: [
          'Three students who took the course wrote about it later: Donald Pearce, Charles Miller and Robert Chapman. A fourth, Kenneth Millar, went on to write detective novels as Ross Macdonald. Tom Nolan’s biography of Millar and Michael Kreyling’s study of the novels describe his part in the course. Dorothy Farnan was a graduate student at Michigan who knew people in the class. Humphrey Carpenter wrote a biography of Auden, and B. C. Bloomfield and Edward Mendelson compiled the standard bibliography of his writings. Mendelson also edited Auden’s collected prose, the second volume of which is cited here as *Prose, Volume II*. The accounts are cited below by the author’s surname and the page, and Works cited, near the bottom of this page, gives each reference in full.',
          'In the spring of 1942 Auden gave a second course at Michigan, English 136, on the analysis of poetry. The last two rows of the table below report work that the sources do not assign to one course or the other.',
        ],
        table: {
          head: ['What', 'Who says so'],
          rows: [
            ['The course number and title, the room, the required books, the nine operas and the first eight books of criticism', `The first sheet of the list, in the picture [published by Alan Jacobs](${jacobs})`],
            ['The other ten books of criticism, from the second sheet', 'Miller, p. 27, prints them. Chapman, p. 508, gives the count of eighteen.'],
            ['Students were admitted on a sample of their writing and an interview with Auden', 'Chapman, p. 508'],
            ['The course was given in the fall semester of 1941', 'Bloomfield and Mendelson, item K7; Carpenter, p. 318; *Prose, Volume II*, p. 465'],
            ['The first class met in early October in 2215 Angell Hall', 'Miller, p. 26'],
            ['When the class met', 'The list says Thursdays from four to six, and Miller, p. 30, also puts the class on Thursdays, but Pearce, p. 134, says it met on Tuesdays and Thursdays from 3:30 to 5:30 in the afternoon.'],
            ['How many took the course', 'Search results quote Chapman as giving an enrollment of twenty-two, but the page the figure is on could not be read for this site. Farnan, p. 73, says the class was limited to twenty-five. Pearce, p. 129, counted fourteen or fifteen in the room one Thursday late in October.'],
            ['Auden asked the class to take no notes', 'Pearce, p. 129; Miller, p. 26; Chapman, pp. 508–509; Carpenter, p. 319. Pearce, Miller and Chapman each give a different reason, and Carpenter repeats Chapman’s. In Miller’s account, Auden said the class would be quizzed on what they thought about the books and not on what he said.'],
            ['Before long Pearce was writing down what he could after a class, in a classroom nearby. Millar kept notes as well.', 'Pearce, p. 134; Kreyling, pp. 39–40'],
            ['Auden covered the blackboard with diagrams, lists and charts, and used diagrams to argue his reading of *Othello*', 'Pearce, pp. 131 and 139–140; Miller, p. 29'],
            ['Near the end of the term he wrote a chart of the themes of the course across the blackboard', 'Pearce, p. 153'],
            ['He brought a phonograph and records to class', 'Pearce, pp. 135–136'],
            ['He assigned a book for the next meeting together with questions that tied it to books already read', 'Pearce, pp. 135 and 143'],
            ['For his lectures on love that semester he assigned the libretti of *Carmen* and *Tristan und Isolde*; *Romeo and Juliet*, which is not on the list; and Denis de Rougemont’s *Love in the Western World*, which the list only recommends', 'Pearce, p. 137'],
            ['Students learned cantos of the *Divine Comedy* by heart', 'Pearce, pp. 153–154; Miller, pp. 26–27; Chapman, p. 509; Farnan, pp. 73 and 76; Nolan, p. 53. They differ on the number of cantos and on how the cantos were examined, as the next section explains.'],
            ['Papers were written and graded. Millar compared the *Divine Comedy* with *The Castle* in one of his, and Pearce wrote one on *The Castle*.', 'Nolan, p. 53; Pearce, p. 155'],
            ['Auden had students to his house on Friday evenings', 'Miller, pp. 29–30'],
            ['In one of his two Michigan courses, students translated a poem from German, French or Latin with a dictionary and nothing else, each from a language they had not studied', 'Chapman, p. 509; Carpenter, p. 319. Neither says which course.'],
            ['He made his Michigan students learn long passages of poetry by heart, and those who objected were told to try it first', 'Chapman, p. 509; Carpenter, p. 319. The one poem Carpenter names is Milton’s “Lycidas,” which belongs to the spring course.'],
          ],
        },
        after: [
          'Pearce’s page numbers were read from a scan of the book. Those for the other witnesses, the biographies and Auden’s collected prose were worked out from scanned copies and search results, so any of them may be off by a page. Chapman’s article could be read only in part.',
        ],
      },
      {
        h: 'The examination: five accounts',
        paras: [
          'Donald Pearce wrote the fullest account of the course more than forty years later, with his notes from 1941 in front of him. He says that in December, four or five weeks before the examination, Auden told the class what it would be. The examination would last three hours and would come after the Christmas vacation. The class would write out, from memory, seven cantos in the prose version that Pearce calls Carlyle and Wicksteed’s. That is the translation by Carlyle, Okey and Wicksteed in the Modern Library volume named on the list. The cantos began with *Inferno* III and V, continued with some from the *Purgatorio* (Pearce names only XXVIII) and ended with *Paradiso* XXXIII. A committee of students called the task impossible. Auden cut the seven cantos to five, and said that if he could not learn the five himself on his drive to California he would telephone and cancel the examination. He did not telephone, and Pearce wrote for three hours and filled five blue books.',
          'Charles Miller, also in the class, remembers the cantos being assigned at the first meeting as an exercise: six, or four for those who could not manage six. Dorothy Farnan, who had the story from friends in the class, says six, assigned on the first day for the final examination and to be learned letter perfect. Tom Nolan, in his biography of Kenneth Millar, says that in place of a final Auden had the students memorize “any six Dante cantos.”',
          'Robert Chapman took both of Auden’s Michigan courses, and in 1978 he printed what his classmates remembered. Some of them claimed that they still had eight cantos by heart. One ran out of time at the final examination for the fall course before she had written out all her Dante, and left the note “Time.” Auden telephoned to ask whether that was the truth, accepted that it was, and did not penalize her.',
          'So two people who were in the class, Pearce and Chapman, say that the cantos were written out at a timed examination. The number of cantos is given as five by Pearce, six by Farnan and Nolan, six or four by Miller, and eight by some of Chapman’s classmates. This site follows Pearce, the only one to name the translation, the length of the examination and any of the cantos. He names four of the seven that Auden first asked for but does not say which two were dropped, so the site keeps those four and you choose the fifth yourself on the [By heart](#/heart) page.',
        ],
      },
      {
        h: 'The order of the books',
        paras: [
          'The list gives no dates. This site takes the books in the order of the list and divides them among fifteen weeks. Counting one Greek play and the nine libretti, and leaving out the two books marked “Omit,” the reading comes to about {perWeek} pages a week.',
          'Auden did not keep to the order of the list, but the order he followed is known only in part, so this site could not follow it. Pearce’s notes, as far as they go, give this sequence of lectures: Augustine and Kafka; romantic love, with *Tristan und Isolde* and *Carmen*; *Othello*; *Henry IV*; and in December *The Tempest*. In the first of those lectures Auden introduced Kafka and assigned *The Castle* for the following Tuesday, telling the class to read it with Dante and Melville in mind. The class had a week at most to read it; this site allows two weeks.',
        ],
      },
      {
        h: 'The kinds of work',
        paras: [
          'No week-by-week record of the course has been published. Auden is known to have given a class most of the kinds of work on this site, at Michigan or elsewhere, and the table below says where. The two exceptions are the charts and the parody, and the table explains each. The particular passages and exercises, and all but six of the questions, were chosen by this site.',
          'Auden taught for four weeks in 1939 at St. Mark’s School in Massachusetts. After Michigan he taught at Swarthmore College from 1942 to 1945, and in 1946 and 1947 he lectured on Shakespeare at the New School in New York.',
        ],
        table: {
          head: ['Work', 'Weeks', 'Where Auden gave it'],
          rows: [
            ['Cantos by heart', 'all', 'Michigan, in this course, as the final examination.'],
            ['Missing words', 'all', `Michigan, in the spring course that followed this one. Its examination of May 1942 printed lines of Milton’s “Lycidas” with words left out, one word to a gap (*Prose, Volume II*, p. 467). At Swarthmore Auden mimeographed poems the class did not know, with words left out, and had the students fill the gaps ([Swarthmore College](${swat}/professor.html); Maurice Mandelbaum, who taught philosophy there). At St. Mark’s School, instead of leaving gaps, he had replaced the key words of a poem with odd ones and had the boys find the right words (Carpenter, p. 264).`],
            ['The test: passages to identify and questions of fact', 'all', 'Swarthmore. Monroe Spears, a critic and the author of a book on Auden’s poetry, wrote in the college’s bulletin in 1962 that Auden’s examinations there “ran mostly to spot quotations and specific factual questions.”'],
            ['The question, answered in a paper', 'all', 'Michigan, in this course (Nolan, p. 53; Pearce, p. 155). Six of the questions on this site come from Auden, and Pearce records five of them in this class. Auden put four to the class: on Iago and Falstaff (week 4), on a movement of a Beethoven concerto (week 13), and two on *The Castle* (weeks 14 and 15). The fifth, on Prospero (week 5), he asked in a lecture and answered himself. The question of week 4 is in this site’s words, but the other four are in the words Pearce wrote down. “Explain why the devil is (a) sad and (b) honest” (week 10) was asked in an examination in Elizabethan literature at Swarthmore (Spears, p. 4), and the college’s exhibit says that it was the whole of the final.'],
            ['A poem translated from a language you have not studied', '2, 10, 14', 'Michigan, in one of his two courses of 1941–42 (Chapman, p. 509; Carpenter, p. 319). Neither source says which.'],
            ['Verse in a set form', '2, 9', 'The New School. On Saturdays Auden met the students who were taking his Shakespeare lectures for credit. One Saturday he gave them a poem by Thomas Campion with two of its stanzas taken out and had them write the two that were missing (Alan Ansen’s notes of the class, printed in *Lectures on Shakespeare*, pp. 321–340). Angelyn Stevens, who audited Auden’s class at Michigan, listed verse written to a set scansion among the work (her notebooks, quoted by Farnan, p. 73). The terza rima of week 2 is this site’s choice.'],
            ['The day written backward', '3', `Swarthmore, in a composition course (Spears; [Swarthmore College](${swat}/professor.html)).`],
            ['Dictionary work', '4', 'Michigan, in the spring course. The class looked up every word of “Lycidas” in the *Oxford English Dictionary* and wrote down each sense the word had had by 1637 (Pearce, p. 154).'],
            ['A play planned as an opera', '5', 'The New School. One project Auden offered the Saturday class was to make an opera libretto out of a comedy or a tragedy, which meant deciding how to distribute the voices. For the comedy he suggested *Love’s Labour’s Lost* (Ansen’s notes, in *Lectures on Shakespeare*, pp. 321–340).'],
            ['An essay in which every sentence is a lie', '7', 'St. Mark’s School. One of the boys remembered it as the first thing Auden asked of his class (Carpenter, p. 264).'],
            ['A passage put into plain prose', '8', 'Swarthmore. Auden and Mandelbaum taught composition to a Navy unit at the college, and their aim was to have the men write simple prose and retell what they had read (Mandelbaum, pp. 119–122).'],
            ['Words to be put right', '11', 'Michigan, in the examination of May 1942. It printed the last eight lines of “Lycidas” with about a dozen words changed, under the instruction “Emend the following” (*Prose, Volume II*, pp. 467–468). The exercise at St. Mark’s School, described above under Missing words, was of the same kind.'],
            ['Charts', '1, 13, 15', `Auden drew them himself: at Michigan on the blackboard (Pearce, pp. 131, 139–140 and 153; Miller, p. 29), and at Swarthmore, where a chart he made for a seminar in 1943 survives and [the college has published it](${swat}/romanticism.html). No source shows him asking students to draw one.`],
            ['Parody', '6, 12', 'No class on record. In “The Poet & the City,” an essay in *The Dyer’s Hand* (1962), Auden describes the college for poets he would like to see. Its library has no criticism, and “the only critical exercise required of students would be the writing of parodies” (p. 77).'],
          ],
        },
      },
      {
        h: 'Supplied by this site',
        list: [
          'The division of the books among fifteen weeks.',
          'The pairing of each opera with a week.',
          'The rule that you listen to the whole of each opera. The list assigns the libretti as reading.',
          'The passages, the tests, the particular exercises, and all the questions but the six named above.',
          'The charts and the parody as exercises. No record has been found of Auden assigning either to a class.',
          'The rule for passing a canto. You write the canto out from memory on two different days, and each time no more than one word in a hundred may be wrong, left out or put in. Little is recorded of how Auden graded the examination. Dorothy Farnan, who was not in the class, says the cantos had to be letter perfect (p. 73). Chapman reports that Auden did not penalize a student who ran out of time (p. 509).',
          'The rule that you choose the fifth canto yourself.',
          'The choice of version for the cantos. Pearce says the class learned the prose translation, but this site also lets you learn the cantos in Longfellow’s verse or in the Italian.',
          'The count of pages.',
          'The paragraphs you are shown after you hand in a paper. They report, in this site’s words, what Auden wrote about the book and, where Pearce’s notes cover it, what Auden said in class. Each names its source and gives its date, because much of what Auden wrote about these books dates from after 1941.',
          'Explanations of Auden’s ideas, wherever they stand: after a paper or an opera, in an exercise, or at the head of a week. Where a paragraph applies an idea of his to a book he is not known to have applied it to, the paragraph says so.',
        ],
      },
      {
        h: 'Six thousand pages',
        paras: [
          'The course is often said to have required six thousand pages of reading. The figure is not on the list. The earliest uses of it that this site found date from February 2013, when [the books blog of the New York *Daily News*](https://www.nydailynews.com/2013/02/27/w-h-audens-syllabus-will-make-your-college-courses-look-like-a-piece-of-cake/) said that the list required more than six thousand pages and the website Open Culture put the figure in a headline. Neither says how the pages were counted.',
          'This site made its own count, taking a page as 350 words of prose or 35 lines of verse, which is roughly a page of the editions the list names. The table below gives three totals, because the total changes with what is counted.',
        ],
        table: {
          head: ['What is counted', 'Pages'],
          rows: [
            ['The required books without the libretti, counting one Greek play and the two books marked “Omit”', 'about {pages}'],
            ['The required books and the nine libretti, counting both Greek plays and the two books marked “Omit”', 'about {pagesAll}'],
            ['The term as laid out here: the required books and the nine libretti, counting one Greek play and leaving out the two books marked “Omit”', '{pagesSet}, or about {perWeek} a week'],
          ],
        },
      },
      {
        h: 'The books',
        paras: [
          'A book is printed here only if it is in the public domain in the United States. A translated book must be out of copyright as a translation, whatever the age of the original. Where the translation the list names is still in copyright, or no proofread text of it could be found, another translation is printed, and the table on the [reading list](#/syllabus) page says which. One book, T. S. Eliot’s play *The Family Reunion*, cannot be printed here at all until 2035. Buy it, find it in a library, or [borrow it from the Internet Archive](https://archive.org/details/familyreunionpla00elio), which lends books to anyone who has a free account there. Another book, Kierkegaard’s *Fear and Trembling*, is printed only in part, because this site found no complete translation that is out of copyright. The text here is L. M. Hollander’s selection of 1923, about a third of the book. The test and questions of week 6 can be done from it, and the page for that week links to a complete translation that can be borrowed in the same way.',
          'The texts come from Project Gutenberg, Standard Ebooks and the Internet Archive, and each book names its source. Editors’ and translators’ introductions and notes have been removed. The one exception is the editor’s preface to *The Education of Henry Adams*, which Adams wrote himself for Henry Cabot Lodge to sign. Typewriter quotation marks and double hyphens in the sources have been replaced with printers’ quotation marks and dashes.',
          'Nine of the texts were read by machine from scans of printed pages: the prose Dante, the Rilke, the Rimbaud in English, and the libretti of *Orpheus*, *Don Giovanni*, *The Magic Flute*, *Fidelio*, *Carmen* and *La Traviata*. Six of them, the Rimbaud and five of the libretti, were then read through against the scans. The Rilke and *Fidelio* were corrected against the scans only where the machine’s reading was in doubt. Each canto of the prose Dante was compared with machine readings of other copies of the same translation. Where the copies disagreed, the reading was settled from the scan or, if the machine had plainly garbled the word, from the agreement of the other copies. In eight places the fault was in the printing itself, such as a dropped letter or period or a word printed twice, and there the reading was taken from another printing of the same book. Twelve cantos, among them the four that every student writes at the examination, were then read through against the scans, and in the prose version only those twelve can be learned by heart. Misread words may remain in any of the nine texts. The contents page of each says so and links to the scan.',
        ],
      },
      {
        h: 'Works cited',
        sources: [
          'Alan Ansen, *The Table Talk of W. H. Auden*, edited by Nicholas Jenkins (Ontario Review Press, 1990).',
          'B. C. Bloomfield and Edward Mendelson, *W. H. Auden: A Bibliography, 1924–1969*, second edition (University Press of Virginia, 1972).',
          'Humphrey Carpenter, *W. H. Auden: A Biography* (Houghton Mifflin, 1981).',
          'Robert L. Chapman, “Auden in Ann Arbor,” *Michigan Quarterly Review*, vol. 17, no. 4 (Fall 1978), pp. 507–520.',
          'Dorothy J. Farnan, *Auden in Love* (Simon and Schuster, 1984).',
          `Alan Jacobs, [“Auden’s Syllabus”](${jacobs}), October 1, 2012.`,
          'Michael Kreyling, *The Novels of Ross Macdonald* (University of South Carolina Press, 2005).',
          'Maurice Mandelbaum, “Swarthmore,” in *W. H. Auden: A Tribute*, edited by Stephen Spender (Macmillan, 1975), pp. 119–122.',
          'Edward Mendelson, *Early Auden, Later Auden: A Critical Biography* (Princeton University Press, 2017).',
          'Charles H. Miller, *Auden: An American Friendship* (Scribner, 1983).',
          'Tom Nolan, *Ross Macdonald: A Biography* (Scribner, 1999).',
          'Donald Pearce, “Fortunate Fall: W. H. Auden at Michigan,” in *W. H. Auden: The Far Interior*, edited by Alan Bold (Vision Press and Barnes and Noble, 1985), pp. 129–157.',
          'Monroe K. Spears, “W. H. Auden at Swarthmore,” *Swarthmore College Bulletin*, March 1962.',
          `Swarthmore College Libraries, [W. H. Auden at Swarthmore](${swat}/), an exhibit on the web. Its page “Auden as a professor (1942-1945)” gives the examination question, the poems with words left out and the day written backward.`,
          'W. H. Auden, *New Year Letter* (Faber and Faber, 1941). The American edition is called *The Double Man* (Random House, 1941). The notes to the poem are cited by the number of the line they are attached to.',
          'W. H. Auden, *The Enchafèd Flood* (Random House, 1950), cited here from the Vintage Books edition of 1967.',
          'W. H. Auden, *The Dyer’s Hand* (Random House, 1962).',
          'W. H. Auden, *Secondary Worlds* (Random House, 1968), the T. S. Eliot Memorial Lectures of 1967.',
          'W. H. Auden, *Forewords and Afterwords* (Random House, 1973), cited here from the Faber and Faber printing of 1974.',
          'W. H. Auden, *The English Auden: Poems, Essays and Dramatic Writings, 1927–1939*, edited by Edward Mendelson (Faber and Faber, 1977).',
          'W. H. Auden, *The Prolific and the Devourer* (Ecco Press, 1994), written in 1939 and left unfinished.',
          'W. H. Auden, *Lectures on Shakespeare*, reconstructed and edited by Arthur Kirsch (Princeton University Press, 2000), from notes taken by Alan Ansen and others at the New School in 1946 and 1947.',
          'W. H. Auden, *Prose, Volume II, 1939–1948*, edited by Edward Mendelson (Princeton University Press, 2002), a volume of *The Complete Works of W. H. Auden*. Its third appendix records the two courses he gave at Michigan. It says that a mimeographed reading list for the first is in the university’s library (pp. 465–466) but does not print it. It prints the final examination of the second, dated May 21, 1942 (pp. 467–470).',
        ],
      },
      {
        h: 'Who made this',
        paras: [
          'This site was researched, written and built in October 2026 by Claude, an AI system made by Anthropic. No Auden scholar has checked it. Where it reports a fact about Auden or the course, it names the source so that you can check the fact yourself.',
        ],
      },
    ],
  },
};
