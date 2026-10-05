# The site's own pages: the critic by word

Front page, about page, shelf, and the reader. Nothing was edited.

## How it was read

- `review/remake/prose/site.md`, gathered again on 2026-10-03 at 15:50 UTC
  (`node build/tools/prose.mjs`; with the word `site` after it the tool writes
  no site file). Read once whole, then sentence by sentence.
- Pictures in `review/remake/site-shots/`: `home`, `about`, `shelf`,
  `read/tempest`, `read/tempest/epilogue` (verse), `read/dante-temple`,
  `read/dante-temple/inf-03` (prose), each at 1280 and 390 px. All 75 opened.
  The site changed under the reading, so four of the seven were taken
  again and opened again: the shelf and the two pages of the *Divine
  Comedy* at 16:42 UTC, the front page at 16:51. The pictures in the folder
  are the later ones. The about page and the two pages of *The Tempest*
  are of 15:51.
- Places are given as `site.md` names them. Where a sentence is not in
  `site.md` the file that holds it is named.

Three things `site.md` does not hold, and that a reader meets:

1. The note at the head of each book's contents page in the reader
   (`site/data/texts/<book>/index.json`, field `note`, kept in
   `build/texts/<book>.mjs`). The tool skips them. Two of the worst faults
   are in one of these notes (A1, A2 below).
2. The small words on the front page's cards (the measure, the name of a
   figure, the key of colors, the labels of two versions). They are cut from
   the pieces, but on the front page they stand side by side and on shorter
   passages, and some no longer fit (B8 below).
3. Half of two sentences of the front page, where a script joins the words
   to a title in italics. They are read here from `site/js/home.js`.

The picture tool stops at 15,000 px. At 390 px that cuts off the end of the
front page (half of the last card, the list of works and the foot) and the
end of the shelf (the books of criticism). Those were read at 1280 px only.

The house style holds everywhere in these pages: no dash inside a sentence,
no "we", no question asked for effect, no "not X but Y", none of the stock
words. The faults are of other kinds.

## The five things that most need mending

1. **The rejected course site still speaks in the reader, and still stands
   in the folder that is published.** The contents page of the prose
   *Divine Comedy*, the first book on the shelf, says that twelve cantos were
   checked, "including the four that every student learns for the
   examination". This site has no student and no examination. The same note
   points to a label, "Versions", that the page does not have. In Works
   cited, the Swarthmore entry names three exercises that no page now
   mentions. And `site/first.html`, with its scripts, its data and its Doré
   plates, is still in `site/`, which `netlify.toml` publishes as it stands.
   (A1 to A4.)
2. **The front page explains itself, and says it twice.** The key to the
   beat marks is given in the note on the first card and again, four
   sentences for four, one screen lower. The two paragraphs under the first
   card tell the reader what the site is and how the page is laid out, and
   all three of their matters are told again on the about page. One short
   paragraph would carry all of it. (B1, B2, B7.)
3. **What the pages say of the site is not what the site does.** "One
   passage" (page description) and "a passage or two" (front page, about
   page): 34 of the 35 pieces show three. "Each work below is shown under
   one of them": *The Family Reunion* has no card and *The Tempest* has two.
   The keys for Word and Sentence promise a dictionary and a main clause
   that most cards under them do not show. On the Goethe card the English
   under each German line belongs to the other line. (B2, B3, B5, B6, B8,
   C2, C3.)
4. **Who made the site is said four times on the about page.** In the first
   paragraph, in "How a page is made", in "Who made this", and in the foot
   that stands directly under "Who made this" with the same two sentences.
   "No Auden scholar has checked it" is there three times. The paragraph on
   the making counts four passes where the project had more. (E and C1.)
5. **One thing has several names, and one name several things.** A work's
   page is "the works", "piece" (8 times, never explained), "page", "Opened
   at" and "Drawn in". "The list" is Auden's reading list 27 times and, once,
   as a heading, this site's own index. "Opened at" and "Drawn in" label one
   link on one page, and "Drawn in" makes the reader's page say that
   Prospero's Epilogue is drawn in Ariel's song. "On the record" and "The
   records" head two sections of one page and mean documents and
   gramophone discs. (Labels, 1 to 4, and D1.)

## The sentences marked, worst first

Each has its place, the sentence as it stands, the fault, and what to put.
The groups are in order of harm: A, what is left from the first version;
B, the front page; C, the about page; D, the shelf and the reader.

### A. Left from the first version

**A1.** Place: the note on the contents page of the prose *Divine Comedy*
(`site/data/texts/dante-temple/index.json`, `note`, kept in
`build/texts/dante-temple.mjs`; not in `site.md`). Picture:
`read-dante-temple-page-1280-0.png`.
As it stands: "Twelve cantos, including the four that every student learns
for the examination, were read through against the scans."
Fault: the old site's student and examination. It is also a claim about
the course that the about page does not make: there the witnesses give
five, six, four or eight cantos.
Put: "Twelve cantos were read through against the scans."

**A2.** Place: the same note, two sentences on.
As it stands: "Only the English is taken from them here, so the Italian
listed under Versions comes from another source."
Fault: names a label the page does not carry. The label is "Printed here
in".
Put: "Only the English is taken from them here, so the Italian printed here
comes from another source."

**A3.** Place: `[about.sections[8].sources[11]]`.
As it stands: "Swarthmore College Libraries, W. H. Auden at Swarthmore, an
exhibit on the web. Its page “Auden as a professor (1942-1945)” gives the
examination question, the poems with words left out and the day written
backward."
Fault: "the examination question", "the poems", "the day" point at things
this site no longer has. No piece cites the exhibit, and no other line of
the about page does. It is the only entry in Works cited that nothing
cites.
Put: cut the entry. A build alone will not drop it. `build/shelf.mjs`
(lines 74 to 85) keeps an entry while the site cites it, and the key it
looks for here is the bare word "Swarthmore" (`citedBy` in
`content/about.mjs`). Five pieces name Swarthmore College as the place of
a talk, a seminar or a broadcast, so the entry stays until it is cut by
hand or its key is made the exhibit's own name.

**A4.** Not a sentence, and not in the words, but a reader can reach it.
The first version is still in the folder that is published:
`site/first.html` (its title is "English 135"; its description ends "laid
out as a term you can take: the reading, the cantos to learn by heart, the
exercises and the examination"), `site/js/app.js`, `site/js/views/`,
`site/js/lib/`, `site/css/main.css`, `site/data/course.json`,
`site/data/ui.json`, and the 19 pictures in `site/plates/` (7.4 MB). No
script or page of the remade site uses any of them. `netlify.toml`
publishes `site/` as it stands, and its comment still reads "English 135
on Netlify" and names the old build command. Neither `remake/LEAD-LIST.md`
nor `remake/LAST-PASS.md` speaks of it. I did not open `first.html` in a
browser.

The book in `site/data/texts/poems/` is half of the same kind. Its title is
still "Poems for the exercises". The Rilke piece takes one poem from it for
its third passage, so the file stays, but the title should go ("Four
poems" would be true), and so might the three poems that no piece uses.
The book answers at `#/read/poems`; no link leads there.

### B. The front page

**B1.** Place: `[front.hero.note]` and `[site/js/home.js]`, the key beside
"Beat". Pictures: `home-page-1280-0.png`, `home-page-1280-1.png`.
As it stands, the note: "The rule under each line is its measure, with a
long stroke at each beat. The dots are the stresses of the speaking voice.
The red dot under Full is a stress where the measure has no beat. The red
ring under Of is a beat that the voice passes over."
As it stands, the key: "Under each line is its measure, the pattern the
line is written to. In English verse that is a rule with a long stroke at
each beat. Under the measure are dots for the stresses of the speaking
voice. A red dot is a stress the measure did not call for, and a red ring
is a beat the voice passes over."
Fault: the same four things twice on one page, in four sentences each.
"Measure" is put in plain words at its second use and not at its first.
The red dot is worded two ways here, and a third way in the legend on the
pieces ("a stress off the beat"). "In English verse" stands over six cards
of which two are German and one French. In the note the two words of the
song are not set apart, so "under Of is" trips the eye.
Put, the note: "The rule under each line is its measure, the pattern the
song is written to, with a long stroke at each beat. The dots are the
stresses of the speaking voice. The red dot under *Full* is a stress where
the measure has no beat. The red ring under *Of* is a beat that the voice
passes over." (The note is printed as plain text, so `home.js` has to be
changed before the two words can stand in italic.)
Put, the key: "The measure of a line is drawn under it. In English and
German verse it has a long stroke at each beat. The dots are the stresses
of the speaking voice, and red marks a place where the voice leaves the
measure."

**B2.** Place: `[site/js/home.js]`, the two paragraphs under the first
card. Picture: `home-page-1280-0.png`.
As it stands, the first: "In the fall of 1941 Auden taught a course at the
University of Michigan called Fate and the Individual in European
Literature. Its reading list names thirty-three works, nine of them
operas. Here each work is opened at a passage or two, and the way the
passage is made is drawn on its lines. What Auden said about the work
stands at the head of its page."
As it stands, the second: "Auden once set out the curriculum of a college
for poets as he would have it. Three courses were required of every
student: prosody, rhetoric and comparative philology (*The Dyer’s Hand*,
p. 77). They are the three ways of looking used here. Each work below is
shown under one of them, and its own page looks at it in the others."
Faults, in order of weight:
- The last two sentences of each paragraph tell the reader what the site
  is and how the page is laid out. The card above them has just shown it.
- "a passage or two": 34 of the 35 pieces show three.
- "Each work below is shown under one of them": *The Family Reunion* is on
  no card, and *The Tempest* is on two (the first card, and one under
  Rhyme).
- "its own page looks at it in the others": it does not. A page has the
  tabs its passages bear. 23 of the 103 passages have no Word tab.
- "Three courses were required": see the claims, below.
- "ways of looking" are three here. On the about page, and in the label of
  the tabs ("Ways of reading this passage"), the ways are the six.
- All of it is said again on the about page (its first paragraph, and
  paragraphs 2 and 3 of "Where the method comes from").
Put, one paragraph for the two: "In the fall of 1941 Auden taught a course
at the University of Michigan called Fate and the Individual in European
Literature. Its reading list names thirty-three works to be read, nine of
them operas. The three headings below are courses he would have required
of every student in a college for poets: prosody, rhetoric and comparative
philology (*The Dyer’s Hand*, p. 77)."

**B3.** Place: `[site/index.html]`, the description of the page (the line a
search engine or a shared link shows).
As it stands: "The books W. H. Auden set his class at the University of
Michigan in 1941, each opened at one passage, with its beat, its rhymes,
its figures and its words drawn on the lines."
Fault: "one passage" (three). "Set his class" is more than the list bears:
two entries are marked "Omit" and one offers a choice of two. Nine of the
"books" are operas. "Its" four times, for a passage that seldom has all
four.
Put: "The works on W. H. Auden’s reading list at the University of
Michigan in 1941, each opened at three passages, with the beat, the rhymes,
the figures and the words drawn on the lines." (One piece prints no
passage. If "three" is too exact for that, "a few".)

**B4.** Place: `[site/js/home.js]`, the heading "The list" and the line
under it. Picture: `home-page-1280-7.png`.
As it stands: "The list" / "Every work, in the order of Auden’s reading
list. The list itself, and the books to read, are on the shelf."
Fault: one name for two things. The heading names this site's own index;
the line under it says "the list itself" is somewhere else. On the about
page and the shelf "the list" is Auden's, 27 times.
Put: heading "All the works"; under it "In the order of Auden’s reading
list. The list itself, and the books to read, are on the shelf."

**B5.** Place: `[site/js/home.js]`, the key beside "Word". Pictures:
`home-page-1280-5.png`, `-6.png`.
As it stands: "A word is underlined where its history, or what it meant
when the line was written, bears on the line. The sense is set under it,
from a dictionary."
Fault: the cards do not bear it out. Two of the four give senses from a
dictionary (*Hamlet*, *Moby-Dick*). One gives places in the Bible and "no
source given" (Kierkegaard). One puts two German lines into English,
phrase by phrase (*The Magic Flute*). (Four cards as the page stood at
16:51 UTC. An hour earlier there were five, and the fifth, *La Traviata*,
gave the English of Italian phrases.)
Put: "A word or a phrase is underlined, and a note under it gives what it
meant when the line was written, where it is taken from, or what it says
in English." Or keep the key and choose cards that fit it.

**B6.** Place: `[site/js/home.js]`, the key beside "Sentence". Picture:
`home-page-1280-4.png`.
As it stands: "The parts of a sentence are ruled under, each kind in a
color of its own, so that the main clause can be told from what hangs on
it."
Fault: promises what none of the six cards shows. Their keys are a
question and a command; God's acts and his answers; an act in the past and
what still holds; "if" and what is written; one verb and "as if"; the
things in a list. None marks a main clause. "Ruled under" here is
"underlined" in the three other keys, for the same stroke.
Put: "The parts of a sentence are underlined, each kind in a color of its
own."

**B7.** Place: `[site/js/home.js]`, the key beside "Figure".
As it stands: "The parts of a figure of speech are underlined, like with
like in one color, and joined the way the figure joins them. Each figure
is named, and the name is put in plain words."
Fault: the second sentence tells the reader what the cards show, and
recites a rule of the house.
Put: cut the second sentence.

**B8.** The small words on the cards. They are the pieces' own words
(`site/data/front.json`, cut by `remake/front.json`), and each was right
on its piece. On a card of two lines, or beside another card, some are
not. `remake/front.json` gives the first card a note of its own; the same
is wanted here. Picture for (a) to (d): `home-page-1280-1.png` and `-2`.
Three cards were moved while this was read (see the notes). What follows
is the page as built at 16:48 UTC and photographed at 16:51.

(a) Goethe, *Faust, Part I*, under Beat: the English under each German
line. Fault: Bayard Taylor turned these two lines round. The English
under the first German line is his version of the second, and the English
under the second is his version of the first. A reader without German is
told the wrong sense twice. Put: show the German alone on this card, or
cut the card from two lines that Taylor kept in their order.

(b) The same card, after "The measure": "four beats to a line for the
archangels; five beats, then six, for Mephistopheles; each beat comes
after an off-beat". Fault: written for the whole passage. The card has two
lines of the archangels and none of Mephistopheles. Put: "four beats to
the line, each after a lighter syllable".

(c) Rimbaud, under Beat: "five counted syllables, the accent on the last;
the fourth line has three". Fault: the card has two lines. Put: "five
counted syllables, the accent on the last".

(d) Wagner, *Tristan und Isolde*, under Beat: "short lines of one or two
beats: four syllables in the questions, then six, six, five, four, and
four lines of three". Fault: the card has two lines. Put: "short lines of
one or two beats".

(e) Rilke, under Sentence (`home-page-1280-4.png`, `-5`): the key "the
eleven things". Fault: the card shows part of the sentence, and four of
the things are underlined. Put: "things in the list".

(f) "antithesis" is put in plain words two ways on two of the six cards
under Figure: "contrasting words set against each other, often in phrases
of the same build" (*Henry IV, Part 2*) and "opposed words or ideas set
side by side, often in matching frames" (Adams). Fault: one name, two
wordings, a few inches apart. Put: one of the two on both cards.

(g) The plain words under a figure's name: four of the six begin with a
small letter and end without a period; two (Pascal, Gluck) begin with a
capital and end with one. Gluck's runs to a second sentence, about the
passage, that is a caption's work. Put: one style; the small letter and
no period suit a gloss.

(h) The syllable between beats has three names on four cards under Beat:
"a lighter syllable" (*Othello*, Blake), "an off-beat" (Goethe), "light
syllables" (Ibsen). The legend on the pieces says "off-beat". Put: one
name. "A lighter syllable" needs no explaining. (The lead's last pass has
the name of the measure in hand; this belongs with it.)

(i) Under Two versions the Horace card says "Conington, 1865". The shelf
and the reader date his translation 1863; the piece used the third
edition. Put: "Conington, 1863" on the card, the edition in the piece's
sources.

(j) Under Two versions, the label over the original says the author again
under the card's own head ("Dante" under "Dante"; "Horace, Odes I.3, lines
21 to 24" under "Horace, *Odes*"), and no two of the five labeled cards
build their labels alike: a name; a name, a book and its lines; a name and
a year; "Okey’s prose, 1901"; a clause with a colon (Verdi, below). On the
Baudelaire card the English stands first, under "Shipley"; the other five
put the original first. Put: over the English, the translator and the
year; over the original, the language.

(k) Verdi, *La Traviata*, under Two versions (`home-page-1280-7.png`):
"Piave’s libretto, as first printed: Alfredo, then Violetta" over the
Italian, and "The English libretto: a free version in rhymes of its own"
over the English. Fault: written for the whole passage, where Alfredo's
lines come first and Violetta's after. The card shows two lines, both
from his part of the duet by the piece's own account, so "Alfredo, then
Violetta" reads as the singer of each line. The second label is a
caption's remark set as a label. At 390 px each of the two runs to two
lines of small capitals. Put: "Piave’s libretto" and "The English
libretto".

**B9.** Counted and not marked. The 35 titles in the list of works, read
down the column: 8 are "X and Y", 3 are lists of three, 6 are a possessive
and a noun, 3 begin "Three". Each title is its piece's own and most have
the pair in the matter. Read together they are near a habit; no change is
asked.

### C. The about page

**C1.** Place: `[about.sections[1].paras[4]]`.
As it stands: "The readings were made by Claude, in four passes for each
work. The first chose the passages and wrote the reading. The second
checked every mark, gloss and page against the sources and cut what it
could not find. The third set the reading on the page and made the
drawing, where the piece has one. The fourth read every sentence and took
out what did not help a reader. Mistakes will remain."
Fault: three things. It names the maker again (see E). It counts four
passes; the project's own papers give each work five hands (`remake/`:
poet, examiner, artist, critic, finisher) and then a reading across all
the works. And "every mark, gloss and page" and "every sentence" claim
more than a careful person would, with "Mistakes will remain" left to take
it back. "Page" here means a page number, in a section whose heading uses
the word for a page of the site.
Put: "Each reading was made in five passes. The first chose the passages
and wrote the reading. The second checked the marks, the glosses and the
page numbers against the sources and cut what it could not find. The
third set the reading on the page and made the drawing, where there is
one. The fourth read each sentence and took out what did not help a
reader. The fifth settled what the fourth had left open. Mistakes will
remain." (The lead knows the true count; the point is that it be true.)

**C2.** Place: `[about.lede]`.
As it stands: "This site takes the works on its reading list one at a
time, opens each at a passage or two, and draws on the lines how the
passage is made. What Auden said about the work stands at the head of
each. The site was made by Claude, an AI system, and no Auden scholar has
checked it."
Fault: "a passage or two" (three, in 34 of 35). The last sentence is the
short form of what "Who made this" says in full; it leaves out "made by
Anthropic" (see E).
Put: "This site takes the works on its reading list one at a time, opens
each at three passages, and draws on the lines how each passage is made.
What Auden said about the work stands at the head of each." For the last
sentence see E.

**C3.** Place: `[about.sections[0].paras[3]]`.
As it stands: "This site does the same for a few words of each passage."
Fault: larger than the fact, twice. Auden's class listed every meaning of
every word of a poem; the site gives one sense for a few words. And not
"of each passage": 23 of the 103 passages have no tab for words.
Put: "This site does a small part of that. For a few words of the passages
it shows, it gives what the word meant when the line was written."

**C4.** Place: `[about.sections[0].paras[0]]`.
As it stands: "That work follows what Auden said elsewhere about how poems
are read and how poets should be taught."
Fault: larger than what the next three paragraphs give, which is how he
read a poem, what he would have a college for poets require, and one
exercise he set. "How poems are read" and "should be taught" make laws of
them.
Put: "That work follows what Auden said elsewhere about how he read a poem
and how he would have poets taught."

**C5.** Place: `[about.sections[0].paras[2]]`.
As it stands: "Three courses would be required of everyone: prosody,
rhetoric and comparative philology (p. 77). The three subjects of the
front page are those three."
Fault: "Three courses would be required" reads as the whole of what was
required (see the claims). "Three" three times in two sentences.
Put: "Everyone would have to take prosody, rhetoric and comparative
philology (p. 77). They are the three headings of the front page."
The same paragraph is on the lead's list for two runs of five words that
it shares with the book: the lines got by heart, and the one critical
exercise. A wording that turns both round: "Its students would learn
poetry by heart, thousands of lines of it. Its library would hold no
criticism, and parody would be the one exercise in criticism." With the
two sentences above, `build/tools/runs.py` finds no run of five words
between the paragraph and the scan of the book. It finds two runs of
four: "thousands of lines of", and the names of the three courses.

**C6.** Place: `[about.sections[1].paras[0]]`.
As it stands: "Each piece begins with what Auden said about the work, in
this site’s words, with the book and the page."
Fault: half the truth. On 32 of the 34 pages that have this head, a
sentence of Auden's own stands first and the site's account comes under
it. "Piece" is the workshop's word (C7).
Put: "Each page begins with what Auden said about the work: most often a
sentence of his own, then an account in this site’s words, with the book
and the page."

**C7.** Place: `[about.sections[6].paras[4]]`, and seven other sentences.
As it stands: "Where a plate shows a passage in the language it was
written in, that text also comes from an edition in the public domain,
which the piece names among its sources."
Fault: "plate" and "piece" are working words. A reader has met "page" for
the same thing on the front page, in this page's own heading "How a page
is made", and at the foot of every work ("Where this page may be wrong").
"Piece" stands 8 times here and is never explained: `sections[1].paras[0]`
(twice), `paras[1]`, `paras[2]`, `paras[4]`; `sections[6].paras[0]` and
`paras[4]`; `sections[8].after[0]`.
Put: "Where a passage is shown in the language it was written in, that
text also comes from an edition in the public domain, which the page names
among its sources." And "page" for "piece" in the other seven.

**C8.** Place: `[about.sections[6].paras[3]]`, sentences 4 to 7.
As it stands: "Each canto of the prose Dante was compared with machine
readings of other copies of the same translation. Where the copies
disagreed, the reading was settled from the scan or, if the machine had
plainly garbled the word, from the agreement of the other copies. In eight
places the fault was in the printing itself, such as a dropped letter or
period or a word printed twice, and there the reading was taken from
another printing of the same book. Twelve cantos of the prose Dante were
then read through against the scans."
Fault: said twice. The note on that book's contents page tells the same
four things, the second sentence word for word. Four sentences of eight
in this paragraph go to one text of nine.
Put: "The prose Dante was compared canto by canto with other copies of the
same translation, and twelve of its cantos were then read through against
the scans. Its contents page says how."

**C9.** Place: `[about.sections[2].table.rows[7][1]]`.
As it stands: "Pearce, Miller and Chapman each give a different reason, and
Carpenter repeats Chapman’s. In Miller’s account, Auden said the class
would be quizzed on what they thought about the books and not on what he
said."
Fault: promises three reasons and gives one.
Put: "In Miller’s account, Auden said the class would be quizzed on what
they thought about the books and not on what he said. Pearce and Chapman
give other reasons, and Carpenter repeats Chapman’s." Or give all three.

**C10.** Place: `[about.sections[5].paras[1]]`.
As it stands: "It leaves out *The Family Reunion*, which is not printed
here, and it counts only the third of *Fear and Trembling* that is."
Fault: ends on "that is" and leaves the reader to find the verb.
Put: "It leaves out *The Family Reunion*, which is not printed here, and
of *Fear and Trembling* it counts only the third that is printed."

**C11.** Place: `[about.sections[1].paras[3]]`.
As it stands: "Scansion is partly a matter of ear. The marks show one way
of saying a line, and where a line can honestly be heard in two ways the
caption says so."
Fault: "scansion" is a word of the trade, used once in these pages and
not put in plain words. "Honestly" pleads.
Put: "Marking the beats of a line is partly a matter of ear. The marks
show one way of saying a line, and where a line can be heard in two ways
the caption says so."

**C12.** Place: `[about.sections[1].paras[2]]`.
As it stands: "At the foot of each piece, “What each caption stands on”
lists them, and “Where this page may be wrong” says what a reader should
doubt."
Fault: "them" has nothing to point at. The sentence before it is about
what a source may be.
Put: "At the foot of each page, “What each caption stands on” gives the
ground of each caption, and “Where this page may be wrong” says what a
reader should doubt."

**C13.** Place: `[about.sections[6].paras[0]]`, and four notes on the
shelf (`[shelf.works[3].copy]`, `[4]`, `[13]`, `[16]`).
As it stands: "Where the translation the list names is still in copyright,
or no proofread text of it could be found, another translation is printed,
and the shelf says which."
Fault: "proofread text" is the trade's word for a copy typed out and
checked against the book. It is used five times and explained nowhere. A
reader may wonder why a book that has been scanned was not used.
Put, here: "Where the translation the list names is still in copyright, or
no text of it could be found that had been checked against the printed
book, another translation is printed, and the shelf says which." The four
notes on the shelf can then say "No checked text of it was found".

**C14.** Place: `[about.sections[7].paras[0]]`.
As it stands: "Each was published long enough ago to be in the public
domain in the United States, and each names the transfer it was taken
from. The files are those transfers made over as single-channel MP3s of
modest size, and nothing else was done to the sound."
Fault: "transfer" is a word of the trade (twice here, in all nine record
notes on the shelf) and is not explained. "Made over as single-channel
MP3s of modest size" is the workshop talking.
Put: "Each was published long enough ago to be in the public domain in the
United States, and each names the transfer, the copy made from the disc,
that it was taken from. The files are those transfers, brought down to one
channel and a small size, and nothing else was done to the sound."

**C15.** Place: `[about.sections[2].table.rows[6][1]]` and
`[about.sections[2].after[0]]`.
As it stands: "Search results quote Chapman as giving an enrollment of
twenty-two, but the page the figure is on could not be read for this
site." And: "Those for the other witnesses, the biographies and Auden’s
collected prose were worked out from scanned copies and search results, so
any of them may be off by a page."
Fault: light. The admission is right and should stay. "Search results" is
the workshop's word and does not say what was searched.
Put: "Summaries returned by a web search have Chapman giving an enrollment
of twenty-two, but the page the figure is on could not be read for this
site." And: "... were worked out from scanned copies and from the
summaries a search returns, so any of them may be off by a page." The
research note (`remake/research/A_michigan_course.md`) calls these search
summaries; the lead knows which searches, and the words should say.

**C16.** Place: `[about.sections[3].paras[0]]`.
As it stands: "The cantos began with *Inferno* III and V, continued with
some from the *Purgatorio* (Pearce names only XXVIII) and ended with
*Paradiso* XXXIII."
Fault: Roman figures, where the pieces and the front page now give cantos
in Arabic (the lead's list has this waiting on this report).
Put: "The cantos began with *Inferno* 3 and 5, continued with some from
the *Purgatorio* (Pearce names only canto 28) and ended with *Paradiso*
33." The sentence is kept in `content/pages.mjs` (line 85), which the
about page draws on. The lead's list names `content/ui.mjs` too (line
484, the same four cantos). That file is printed only by the first
version (A4), so it needs no change if the first version goes.

**C17.** Place: `[about.sections[8].sources[5]]`.
As it stands: "Alan Jacobs, “Auden’s Syllabus”, October 1, 2012." (the
title is a link, and the comma falls outside the closing mark).
Fault: the other entries put the comma inside ("“Auden in Ann Arbor,”").
Put: the comma inside the quotation mark, in the link or before it.

### D. The shelf and the reader

**D1.** Place: `[shelf.read.here]` and `[shelf.read.piece]`. Picture:
`read-tempest-epilogue-page-1280-0.png`; the contents page is
`read-tempest-page-1280-0.png`.
As it stands: "The passage drawn in {piece} begins here." and "Drawn in
{piece}", where {piece} is the title of the work's page.
Fault: the title is read as the name of a passage. Over Prospero's
Epilogue the page says "The passage drawn in Ariel’s song begins here."
On the contents page of *The Tempest* "Drawn in Ariel’s song" stands
beside three parts, two of which are not Ariel's song. It will happen
with every title that names one passage ("Senta’s ballad", "The last
canto", "Leonore’s answer").
Put: "This passage is drawn on the page “{piece}”." and, in the contents,
"Drawn on “{piece}”". See also "Opened at" in the labels, below: the two
should be one.

**D2.** Place: `[shelf.works[32].record.performers]`, its last sentence.
It was added after the prose file was gathered and is not in `site.md`.
Pictures, taken again at 16:42 UTC: `shelf-page-1280-6.png` (at the foot),
`shelf-page-390-10.png`.
As it stands: "As sung, to judge by old librettos, the song has other
words in six of its eight lines than the libretto shown on this page."
Fault: written for the work's page. On the shelf, where the same line
prints under "A record", no libretto is shown. "Other words" waits six
words for its "than".
Put: "To judge by old librettos, six of the eight lines as she sings them
have other words than the libretto printed here."

**D3.** Place: `[shelf.works[0].copy]`, second sentence.
As it stands: "That translation is printed here, and it is the one Auden’s
class learned by heart."
Fault: larger than the witnesses. On the about page it is Pearce alone who
names the version the cantos were to be written out in; the other four
accounts name none.
Put: "That translation is printed here. Donald Pearce, who took the
course, names it as the version in which the cantos were to be written
out from memory."

**D4.** Place: `[shelf.works[14].copy]`.
As it stands: "No complete translation is out of copyright."
Fault: flat where the about page is careful ("this site found no complete
translation that is out of copyright").
Put: "No complete translation that is out of copyright was found."

**D5.** Place: `[shelf.works[15].borrow]`.
As it stands: "A later edition of it (Marcel Rodd, 1947), which has an
introduction by Auden, can be borrowed from the Internet Archive with a
free account."
Fault: "it" follows two sentences about Shipley's translation and means
Isherwood's.
Put: "A later edition of Isherwood’s translation (Marcel Rodd, 1947),
which has an introduction by Auden, can be borrowed from the Internet
Archive with a free account."

**D6.** Place: `[shelf.kinds.required.intro[0]]`, last sentence.
As it stands: "All twenty-four works are opened on this site."
Fault: the paragraph began with twenty-three entries, and the reader is
left to do the sum. "Opened" is said of a work here and, higher on the
page, of a book ("A spine opens its book"): one word, two acts.
Put: "That makes twenty-four works, and each has a page on this site."

**D7.** Place: `[shelf.works[0].copy]`, last sentence.
As it stands: "Longfellow’s verse translation and the Italian are printed
alongside the prose translation."
Fault: "alongside" promises the three side by side. They are three books,
reached one at a time.
Put: "Longfellow’s verse translation and the Italian are printed here as
well."

**D8.** Place: the line under the note on the contents page of the prose
*Divine Comedy* (`site/data/texts/dante-temple/index.json`, `source.name`,
printed in the frame `[shelf.read.source]`). Picture:
`read-dante-temple-page-1280-0.png`.
As it stands: "The text is from The Temple Classics (J. M. Dent, London),
from scans at the Internet Archive of the printings of 1904 (the first and
second volumes) and 1910 (the third)."
Fault: says again what the first sentence of the note above it has just
said, volumes, scans and years. "From … from".
Put: "The text is from The Temple Classics (J. M. Dent, London)."

**D9.** Place: `[shelf.case.note]` and `[shelf.case.label]`. Picture:
`shelf-page-1280-0.png`.
As it stands, the note: "Each spine is as thick as its book is long in the
copy printed here, at 350 words or 35 lines of verse to the page. The
short spines are the opera libretti. Together the copies come to about
4,800 pages. A spine opens its book."
Fault: light. The wide spines carry a bare number (314, 999, 502) that the
note does not name.
Put: after the first sentence, "The number on a spine is its pages by that
count."
As it stands, the label (heard by a screen reader, not seen): "The required
books and the libretti, each as thick as it is long".
Fault: a riddle when heard alone.
Put: "The required books and the libretti as spines, each as thick as its
book is long".

## Labels and small words

Two labels for one thing, or one label for two. In order of weight.

1. **The page of a work has four names, and the set of them a fifth.**
   "The works" (the menu and the link on the page for a wrong address,
   both leading to the front page);
   "piece" (about page, 8 times); "page" (front page, the about page's
   heading "How a page is made", the foot of every work); "Opened at" (the
   shelf, 33 times, and the head of a book's contents); "Drawn in" (the
   contents of a book and the marker in its text). "Opened at" and "Drawn
   in" stand on one contents page over links to the same place. Put:
   "page" for the thing. One label for the link to it, "Its page" ("Its
   pages" for Dante), on the shelf and at the head of a book. For the
   marker and the contents, see D1.
2. **"The list"** is this site's index once (front page heading) and
   Auden's reading list everywhere else. See B4.
3. **"Open"** is what the site does to a work ("each work is opened at",
   "All twenty-four works are opened on this site", "Opened at") and what
   a reader does to a book ("A spine opens its book"). With "Its page" and
   D6 it is left with one sense on the shelf.
4. **"On the record" and "The records"**, two headings of the about page
   (`sections[2].h`, `sections[7].h`). The first means what the witnesses
   wrote, the second the gramophone discs. "On the record" is also the
   idiom for speaking officially. Put, for the first: "What is known of
   the course". "Record" then means a disc wherever the site uses it.
5. **"Word" and "Words"** name the same tab: "Word" on 36 passages,
   "Words" on 30. No piece mixes them, and every one of the 66 gives at
   least two words. The front page heading is "Word". Put: one of them
   throughout. (Tabs named for what they show, "Sources", "Greek", are
   another matter and are fine.)
6. **"Printed here in"** (`[shelf.read.versions]`) stands before
   "Carlyle, Okey and Wicksteed", "Longfellow", "Italian". "In" fits a
   language and not a translator. Put: "Versions here". The note of A2
   would then be right as it stands; mend one or the other.
7. **"Before" and "Next"** at the foot of a page of a book
   (`shelf.json`, `read.prev` and `read.next`; one-word labels, so not in
   `site.md`). They are not a pair. Put: "Previous" and "Next".
8. **"Ways"** are three on the front page and six on the about page
   (`sections[1].paras[1]`) and in the label of the tabs that a screen
   reader speaks ("Ways of reading this passage"). B2 takes the word off
   the front page.
9. **"The measure" and "the meter".** The front page and the label on
   every Beat tab say "the measure". The legend under the same tab says
   "the meter: beat, off-beat" (`site/js/kit/lens-beat.js`; the legends
   begin with a small letter, so `site.md` does not hold them). Put:
   "the measure: beat, lighter syllable", or whatever the last pass
   settles for the name of the syllable (B8 h).
10. **Two works have two titles.** Rimbaud's book is *Une Saison en Enfer*
    on the shelf and *A Season in Hell* on the front page and in the list
    of works. Gluck's opera is *Orpheus* on the shelf and *Orpheus and
    Eurydice* on the front page. The notes on the shelf give the other
    title in each case; the front page gives no hint of it. Light. Put:
    one title for each as the heading, and what the list typed under "The
    list names".
11. **"A record"** (shelf) and **"A record of it"** (the page of a work)
    head the same thing. Put: "A record" on both.
12. **"The book"** (`[shelf.labels.copy]`) is used for one entry, *The
    Family Reunion*, where the others have "Printed here". What follows it
    is why the book is not printed. Put: "Not printed here", and the note
    under it then begins "In copyright in the United States until 2035."
13. **The site's name and the menu.** "Fate and the Individual" with
    "Auden’s course of 1941" under it; "The works", "The shelf", "About".
    Plain and true. Keep.

Labels that are right and should not be touched: "The list names" and
"Printed here" as a pair; "Who says so" over the second column of the
table; "What each caption stands on"; "Where this page may be wrong";
"Marked “Omit” on the list"; "Not printed here, and not drawn to scale";
"The measure" before the line that says it; "There is no page at this
address."

## E. How the site says who made it

Nothing hides it, nothing dresses it up, and no person is named. The
fault is that the about page says it four times. As a reader meets them
(pictures `about-page-1280-0.png`, `-1`, `-6`):

1. `[about.lede]`, last sentence: "The site was made by Claude, an AI
   system, and no Auden scholar has checked it."
2. `[about.sections[1].paras[4]]`: "The readings were made by Claude, in
   four passes for each work."
3. `[about.sections[9].paras[0]]`, under "Who made this": "This site was
   researched, written and built in October 2026 by Claude, an AI system
   made by Anthropic. No Auden scholar has checked it. Where it reports a
   fact about Auden or the course, it names the source so that you can
   check the fact yourself."
4. `[site/js/main.js]`, the foot of every page: "This site was made by
   Claude, an AI system made by Anthropic. No Auden scholar has checked
   it." with the link "About the site and its sources".

Faults:

- Claude is named four times on one page, and "No Auden scholar has
  checked it" is there three times.
- The foot stands a few lines under "Who made this" and says its first two
  sentences over again.
- On this page the foot's link, "About the site and its sources", leads
  to the page the reader is on.
- The first of the four is the only one that leaves out "made by
  Anthropic". If one statement is to be short of the others it should not
  be the one a reader meets first.
- "Who made this" is the last of ten sections, under twenty-four works
  cited. Nothing is hidden, since every page has the foot, but the one
  full statement is the last thing on the page.

What to put:

- Keep the paragraph under "Who made this" as it stands. It is the best
  form of the statement: who, when, that no scholar has checked it, and
  what a reader can do about that.
- Move that section up, to stand after the first paragraph or after "How
  a page is made", and put the paragraph on the passes (C1) into it. The
  passes then need no name: "Each reading was made in five passes."
- Cut the last sentence of `[about.lede]`.
- On the about page leave the line and the link out of the foot. On every
  other page keep the foot as it is. It is how a reader who lands on any
  page is told.

The about page then says it once, in full, near the top, under a plain
heading. If the lead would sooner keep it in the first paragraph, the
sentence there needs "made by Anthropic", and "Who made this" should then
give the month, the passes and the type and not the name again.

## Every claim about Auden or the course, with its place

Listed, not checked. **MARK** is put on a claim that reads as larger than
a careful person would make.

### The front page and the shell

1. `[site/js/home.js]`, head and byline: the two sentences in large type
   are his, on the first of the two questions that interested him most
   when he read a poem; *The Dyer’s Hand* (1962), p. 50.
2. `[site/js/home.js]`, first paragraph: in the fall of 1941 he taught a
   course at the University of Michigan called Fate and the Individual in
   European Literature.
3. The same: its reading list names thirty-three works, nine of them
   operas. **MARK**, light: the list also names eighteen books of
   criticism (B2).
4. The same: what Auden said about the work stands at the head of its
   page. On one page, Gluck's, it stands under the passages and the head
   has none.
5. `[site/js/home.js]`, second paragraph: he once set out the curriculum
   of a college for poets, in which "three courses were required of every
   student: prosody, rhetoric and comparative philology" (p. 77).
   **MARK.** The past tense makes a real college of what the about page
   gives as a wish ("as he would have it", "would be required"). "Three
   courses" reads as all that was required; the research note
   (`remake/research/B_pedagogy.md`, 2.1) has each student choosing three
   more from a list of eight.
6. `[site/js/home.js]`, under "The list": the works stand in the order of
   Auden's reading list.
7. `[site/index.html]`: "Auden’s course of 1941".
8. `[site/index.html]`, the description: "The books W. H. Auden set his
   class". **MARK** (B3).

### The shelf and the reader

9. `[shelf.where]`: the reading list is of 1941.
10. `[shelf.intro[0]]`: a mimeographed list survives; Bloomfield and
    Mendelson describe it as two sheets; Alan Jacobs published a picture
    of the first in 2012 with the permission of Auden's estate.
11. `[shelf.intro[1]]`: what is typed on it: the number and title; first
    semester, two hours of credit, Thursdays four to six, 2215 Angell
    Hall; who might take it, by permission of Professor Arno Bader; the
    instructor as "W. Auden"; no year; the bibliography's dating to the
    fall semester of 1941.
12. `[shelf.kinds.required.intro[0]]`: twenty-three entries of required
    reading; one a choice between two Greek plays; "Omit" written by hand
    beside *Faust* and *The Education of Henry Adams*; the writer not
    recorded.
13. `[shelf.kinds.opera.intro[0]]` and `[1]`: nine opera libretti assigned
    as reading; no editions named; Pearce remembers a phonograph and
    records in class.
14. `[shelf.kinds.critical.intro[0]]` and `[1]`: eighteen books of
    criticism recommended; the first sheet ends after the eighth; the
    other ten known from Charles Miller's memoir; three authors' names
    wrong on the list, and slips in Miller's copy.
15. `[shelf.works[n].set]`, sixteen entries (n = 0 to 4, 10, 13, 15 to
    23): the edition or the translator the list names for that book.
16. `[shelf.works[0].copy]`: the Modern Library volume reprinted the
    Temple Classics prose translation, and "it is the one Auden’s class
    learned by heart". **MARK** (D3).
17. `[shelf.works[15].borrow]`: the edition of 1947 has an introduction by
    Auden.
18. `[shelf.works[21].copy]`: the list names the Norton edition of 1930.
19. `[shelf.case.keys.omit]`, `[shelf.labels.omit]`: two books are marked
    "Omit" on the list.
20. The note on the contents of the prose *Divine Comedy* (A1): four
    cantos "that every student learns for the examination". **MARK.** No
    page of this site says so; the about page gives five accounts that
    disagree.

### The about page

21. `[about.lede]`: fall 1941, English 135, the title, Michigan.
22. `[about.sections[0].paras[0]]`: what the surviving accounts describe
    (lectures, diagrams and charts, records, questions, papers, cantos by
    heart) and that they describe no close work on single lines. Then:
    "what Auden said elsewhere about how poems are read and how poets
    should be taught". **MARK** (C4).
23. `[about.sections[0].paras[1]]`: his inaugural lecture at Oxford in
    1956; the two questions; pp. 50–51.
24. `[about.sections[0].paras[2]]`: the college for poets: thousands of
    lines by heart, no criticism in the library, parody the one critical
    exercise, three courses required of everyone (p. 77). **MARK**, light,
    on "three courses" (C5).
25. `[about.sections[0].paras[3]]`: in spring 1942 the class listed from
    the *Oxford English Dictionary* every meaning of each word of
    "Lycidas" (Pearce, p. 154). Then, of the site: "does the same".
    **MARK** (C3).
26. `[about.sections[1].paras[0]]`: much of what he wrote about these
    books dates from after 1941.
27. `[about.sections[2].paras[0]]`: who the witnesses are, and which of
    them took the course.
28. `[about.sections[2].paras[1]]`: a second course in spring 1942,
    English 136, on the analysis of poetry.

29. `[about.sections[2].table.rows[0]]` to `[18]`, each with its witness
    in the second column:
    - 0: what the first sheet shows (number, title, room, the required
      books, the nine operas, the first eight books of criticism).
    - 1: the other ten books of criticism, from the second sheet.
    - 2: students admitted on a sample of writing and an interview.
    - 3: given in the fall semester of 1941.
    - 4: the first class in early October, in 2215 Angell Hall.
    - 5: when the class met (the list and two witnesses differ).
    - 6: how many took it (twenty-two at second hand, a limit of
      twenty-five, fourteen or fifteen in the room).
    - 7: he asked the class to take no notes.
    - 8: Pearce wrote down what he could after class; Millar kept notes.
    - 9: diagrams, lists and charts on the blackboard; diagrams for
      *Othello*.
    - 10: a chart of the themes of the course near the end of term.
    - 11: a phonograph and records in class.
    - 12: a book assigned with questions tying it to books already read.
    - 13: the lectures on love and what he assigned for them.
    - 14: cantos of the *Divine Comedy* learned by heart.
    - 15: papers written and graded; Millar's and Pearce's.
    - 16: students at his house on Friday evenings.
    - 17: a poem translated from a language not studied; which course is
      not stated.
    - 18: long passages learned by heart, and "try it first"; which
      course is not stated.
30. `[about.sections[3].paras[0]]`: Pearce "wrote the fullest account of
    the course", more than forty years later, from his notes. **MARK**,
    light: a superlative with no witness. Then his account: the
    examination announced in December; three hours, after the Christmas
    vacation; seven cantos in the prose version, cut to five; the drive to
    California and the telephone; five blue books.
31. `[about.sections[3].paras[1]]`: Miller (six cantos, or four, set at
    the first meeting as an exercise); Farnan (six, for the final, letter
    perfect); Nolan (any six, in place of a final).
32. `[about.sections[3].paras[2]]`: Chapman took both courses and printed
    in 1978 what classmates remembered: eight cantos still by heart; the
    note "Time."; Auden's telephone call.
33. `[about.sections[3].paras[3]]`: the sum: two who were in the class say
    the cantos were written out at a timed examination; five, six, six or
    four, and eight cantos.
34. `[about.sections[4].paras[0]]`: the list gives no dates; he did not
    keep to its order; the sequence of lectures in Pearce's notes.
35. `[about.sections[5].paras[0]]`: the course "is often said" to have
    required six thousand pages; the figure is not on the list; the
    earliest uses found are of February 2013.
36. `[about.sections[6].paras[1]]`: his prose and the students' accounts
    are in copyright.
37. `[about.sections[8].sources[12]]` to `[20]`, the notes on his books:
    *New Year Letter* and its American title; *Secondary Worlds* as the
    Eliot lectures of 1967; *The Prolific and the Devourer* written in
    1939 and left unfinished; *Lectures on Shakespeare* reconstructed from
    notes taken at the New School in 1946 and 1947; the third appendix of
    *Prose, Volume II* on the two Michigan courses, the list in the
    university's library (pp. 465–466) and the examination of May 21, 1942
    (pp. 467–470).
38. `[about.sections[8].sources[11]]`: what the Swarthmore exhibit's page
    gives (A3).

Nine marks in all: six (5, 8, 16, 20, 22, 25) and three light ones (3, 24,
30). The table "What / Who says so" carries no mark: where the witnesses
differ it says so, row by row.

## What recurs, counted

"Tic" means it gets in a reader's way. "The matter" means the thing said
has to be said that often.

### The front page

| What | Times | |
|---|---|---|
| The key to the beat marks, in full | 2 | tic (B1) |
| Wordings of the red dot (note, key, legend on the pieces) | 3 | tic |
| "Ariel’s song": first card, a card under Rhyme, the list | 3 | one work twice among the cards |
| Works with no card | 1 | *The Family Reunion* |
| Sentences that tell what the site is or how the page is laid out | 5 | 4 in the two paragraphs, 1 in the Figure key |
| Keys that open "The parts of a … are" | 2 of 6 | no harm |
| Glosses under the three headings built "A, and B." | 3 of 3 | the matter: each heading has two ways |
| Measure notes that speak of lines not on the card | 3 of 6 | B8 b to d |
| Names for the syllable between beats, on four cards | 3 | B8 h |
| Wordings of "antithesis", on two cards | 2 | B8 f |
| Labels over two versions written for the whole passage | 1 of 5 | B8 k |
| Cards under Beat, Rhyme, Figure, Sentence, Word, Two versions | 6, 6, 6, 6, 4, 6 | as built at 16:48 UTC; 6, 6, 5, 6, 5, 6 an hour before |
| Titles in the list: "X and Y" | 8 of 35 | B9 |
| Titles in the list: three things | 3 | |
| Titles in the list: a possessive and a noun | 6 | |
| Titles in the list: opening "Three" | 3 | |

### The front page and the about page together

| What | Times | |
|---|---|---|
| Matters told on both (the course and what the site does; the college for poets; the two questions) | 3 | B2 |
| "What Auden said … stands at the head" (front page; about, first paragraph; about, "Each piece begins with") | 3 | once is enough on the about page |
| "a passage or two" | 2 | untrue |
| "one passage" | 1 | untrue |

### The about page

| What | Times | |
|---|---|---|
| Claude named (three in the text, once in the foot) | 4 | E |
| "No Auden scholar has checked it" | 3 | E |
| "This site" or "this site" | 13 | high; "here" would do for some |
| "piece" or "pieces" | 8 | C7 |
| "plate" | 1 | C7 |
| Paragraphs of "Where the method comes from" that close on a short sentence tying Auden to the site | 3 of 4 | the section's business; C3 and C5 vary two of them |
| "every", said of the site's own care | 3 | C1 keeps one |
| "says so" closing a clause | 3 | no harm |
| "the list", meaning Auden's | 12 | the matter |
| "by heart" | 5 | the matter |
| Admissions (mistakes will remain; off by a page; misread words; read only in part; could not be read) | 5 | keep every one |
| "search results" | 2 | C15 |

### The shelf

| What | Times | |
|---|---|---|
| Notes that say "is printed here" or "are printed here", under the label "Printed here" | 14 of 25 | a refrain the label makes; no one note is at fault |
| Entries headed "Printed here" | 32 | the matter |
| Entries headed "Opened at" | 33 | labels, 1 |
| Entries headed "The list names" | 16 | the matter |
| Notes that open "The … volume" or "The … volumes" | 9 | the matter |
| "No proofread text … was found, so" | 4 | C13 |
| Libretto notes that open "The English version" | 8 of 9 | the matter |
| "borrowed from the Internet Archive with a free account" | 5 | the matter |
| "transfer", in the record notes | 9 of 9 | C14 |
| "the standard bibliography", in two paragraphs side by side | 2 | name it the second time: "Bloomfield and Mendelson" |
| "who took the course" | 2 | no harm |
| "the list", meaning Auden's | 15 | the matter |
| Criticism: "In copyright" 10, "Out of copyright" 6 | 16 of 18 | the matter |

### The reader

| What | Times | |
|---|---|---|
| "Drawn in Ariel’s song" on one contents page | 3 | D1 |
| Book notes with "gives neither translator nor date" | 6 of 18 | one to a book; no harm |
| "This text was read by machine from a scan." | 4 | the same |
| "It was then read through against the scan, but some misread words may remain." | 5 | the same |

No dash inside a sentence, no "we", no question asked for effect, no "not
X but Y", and none of the stock words, in any of the four pages.

## What is best, so that it is kept

1. **The byline under the head of the front page.** "W. H. Auden, on the
   first of the two questions that interested him most when he read a
   poem." It says whose words they are and why they are there, and stops.
2. **The two sentences of the first card's note that name the marks by
   the words they stand under** ("The red dot under Full …", "The red ring
   under Of …"). A reader looks from the sentence to the mark and has
   learned to read the drawing. Nothing else on the front page teaches so
   much in so few words.
3. **The glosses under Prosody, Rhetoric and Philology**, and the key
   beside Rhyme. Each says what is drawn and no more.
4. **About, "Where the method comes from", first paragraph**: "They do not
   describe the close work on single lines that this site does." The site
   says of itself what it is not, before anyone asks.
5. **The table "What / Who says so."** Above all the rows that are a
   question and not an answer: "When the class met", "How many took the
   course". The disagreement is set down and left.
6. **"The examination: five accounts."** Told as what each witness says,
   with the blue books, the telephone and the note "Time." The last
   paragraph adds up and concludes nothing more.
7. **"Six thousand pages."** It traces a figure everyone repeats to where
   it first appears, says that nobody says how it was counted, and then
   gives its own count with its terms.
8. **The admissions**: "Mistakes will remain." "Any of them may be off by
   a page." "Chapman’s article could be read only in part." "Misread words
   may remain." They are plain, and each stands where the doubt is.
9. **On the shelf, the two paragraphs on what is typed on the list**, and
   "Who wrote it is not recorded." "Where an entry names no translator,
   the libretto names none."
10. **"The list names" and "Printed here"**, side by side on every entry.
    The whole honesty of the shelf is in that pair.
11. **"A spine opens its book."** Five words, and the bookcase needs no
    other instruction.
12. **In the reader**, the red rule and the line that marks where a drawn
    passage begins (once D1 mends its wording), and the note over a part
    that was read by machine.
13. **The plain refusals**: "There is no page at this address." "There is
    no such book or part on this shelf." And the line for a browser
    without scripts, which says what the site does and what to do.
14. **The last sentence under "Who made this"**: "Where it reports a fact
    about Auden or the course, it names the source so that you can check
    the fact yourself."

## Notes

- **What changed while this was read.** The prose file is of 15:50 UTC
  and the first pictures of 15:51. After that, by other hands: the
  reader's cantos were put into Arabic figures; one sentence was added to
  the shelf (D2); and between 16:45 and 16:48 three cards of the front
  page were moved. *Fidelio* went from Two versions to Figure and *La
  Traviata* from Word to Two versions; the *Tristan* card went to Word
  for a minute and came back to Beat. So Figure has six cards and Word
  four. B5, B8 and the counts are written for the page as
  built at 16:48. A check at 16:53 found the built words of the about
  page, the shelf and the first card's note the same as `site.md` but for
  the sentence of D2. If the cards move again, B5 and B8 f, g, j and k
  want reading again; the rest does not hang on them.
- **What the pictures do not show.** At 390 px the tool stops at 15,000
  px: the lower half of the last card, the list of works and the foot of
  the front page, and the books of criticism on the shelf, were read at
  1280 px only.
- **What `site.md` does not hold**, and a critic of these pages needs: the
  notes on the books' contents pages (18 books have one); the small words
  of the front page's cards; labels of one word (`Before`, `Next`,
  `Contents`, `What`); the legends of the tabs, which begin with a small
  letter. `build/tools/prose.mjs` could gather all four.
- **Outside these pages, seen in passing.** The legend of the Beat tab
  says "the meter" where its label says "The measure" (labels, 9). The
  sentence for a work on which nothing of Auden's was found
  (`site/js/piece.js`) is printed on no page as the site stands: the one
  page without a head note has an entry lower down.
- **What was run.** `node build/tools/prose.mjs` once, with no argument,
  and `node build/tools/shoot.mjs` twelve times, one at a time: the seven
  addresses, then the shelf and the two pages of the *Divine Comedy*
  again, then the front page twice (the first of the two caught the cards
  half moved, and the second replaced it). Neither build script was run.
  Nothing was edited but this file.
- **The sentences proposed here, against the scans.** The 39 sentences
  this report proposes were held against the four scans and the
  biography, by the rule of `build/tools/runs.py` (it prints places and
  never the book's text). No run of five words is left but names, titles
  and small words: the course's title, "at the University of Michigan",
  "is partly a matter of". Two proposals were reworded to get there (C5,
  D3).
- **Refused by the permission system:** nothing.
