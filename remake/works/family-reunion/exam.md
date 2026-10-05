# The Family Reunion: the examiner's record

Piece `family-reunion`. Examined on 2026-10-03, from 06:08 UTC. The
marker `examiner.txt` was made by the lead for this examiner.

No line of the play and no sentence of Eliot's or Auden's prose is copied
in this file. Places are given by page, by tab, and by the key in
`reading.json`.

Verdict: **mended**. The checker ends with no problems, no warnings, and
the printed notes fit to print. The changes are listed in section 9 and
what is still doubtful in section 10.

## 0. What could not be done, said first

`count.mjs` could not be run. It needs the open scan of the play fetched
from the Internet Archive, and in this session that fetch was refused by
the permission system of the machine. I did not try to get the play's
text by any other road. So I have not opened the play. Every statement
that rests on the play alone (the chorus word counts, the syllables of
the first speech, the page numbers, who says what) stands on the poet's
record and on what I know of the play, and is marked "poet's record"
below. Section 1 says which counts I could make again.

A second fetch was refused later: the text of the open scan of Eliot's
lecture, which I wanted again for a machine test of shared wording. I
had already read the lecture page by page (section 2), so what is given
to Eliot was checked at its page; the machine test against the lecture
was not made, and I did not look for another way to make it.

What I could still open: the two dictionaries and the Greek lexicon
(public pages), the search-inside snippets of Auden's *Prose* III and
*Secondary Worlds*, the catalogue records of the two library copies of
the play (records only, no text), and everything on this machine.

## 1. The proof and the counts

Checker, first run: no problems, no warnings, printed notes fit to print.

Counted again by my own script, from `reading.json` alone:

- The two quoted lines: 7 words and 7 syllables; 8 words and 12
  syllables (the site's syllable tool gives 1 for each of the seven
  words, and 1,2,1,1,2,2,1,2 for the eight). The marks in `voice` agree
  word for word. Stresses 3 and 4; with the fifth, 5. The stressed words
  listed are the words at those numbers. Pause after word 3 and word 4;
  two stresses before and one after; two before and two (or three) after.
- First speech: twelve numbers, least 8, most 16, as the reading says.
- Chorus: at each of the five places the four single speeches add up to
  `wordsApart` (60, 53, 56, 0, 71); totals 916 and 240; eight passages
  spoken together, which is the seven headed Chorus and the one headed
  All; the five places fall inside the page spans of their scenes; the
  scenes hold 2, 0, 1, 1, 0 and 1 of them.
- The Greek tab's working note that 17 of the 528 blocks of the
  Agamemnon printed here name Argos or the Argives: counted again from
  the site's own data. It is 17 of 528.
- Persons: 4 who see, 5 who do not, 3 of whom nothing is said, 2 who
  never arrive. That is the twelve speaking persons and the two absent
  brothers.

- Page numbers, tested against one another: each of the 41 page
  numbers in the facts (who sees, what is said of John, the two
  showings, the two lines, the five chorus places) falls inside one of
  the six scenes, and in each case the persons named are on stage in
  that scene by the scene table. The remark on John's knock on the head
  (p. 84) comes after the news of his accident (p. 81), and Amy's last
  line (p. 126) before the last chorus (pp. 127 to 129). The six scenes
  run on without a gap except pp. 69 and 70, where by the poet's notes
  the heading of the second part stands, and end at p. 131, the length
  the research notes give.
  This shows the record is consistent with itself, not that it is
  right.

Not counted again (the play not opened): the word counts themselves, the
twelve syllable counts, the pages, and the count of the name Eumenides.

## 2. Eliot and Auden, each found at its page

### Eliot, *Poetry and Drama* (Faber, 1951)

Opened in the open Internet Archive copy `poetryanddrama029231mbp`
(title page seen: the Theodore Spencer Memorial Lecture, Harvard,
21 November 1950; first published 1951). The page number stands at the
foot of each page. What the reading gives him, and what the page says:

| in the reading | page | found |
| --- | --- | --- |
| next time he would work the chorus more closely into the play; he wanted to learn to do without prose | 25 | yes, both, said of the play after *Murder in the Cathedral* |
| for this play his first concern was the verse: a rhythm near to the speech of the day, the stresses where a speaker would put them | 27 | yes |
| the line: varying length and varying number of syllables, one caesura, three stresses, one stress on one side of the caesura and two on the other | 27 | yes. He says "varying", not "any" length: the facts said "a line of any length". Mended |
| four minor persons as parts and as chorus: not very satisfactory, too much to ask of actors, a trick of use in no other play | 28 | yes |
| the deepest flaw: the Greek story and the modern situation not adjusted to each other; he should have kept closer to Aeschylus or taken far more liberty | 30 | yes. His word is "situation"; the facts said "household". Mended |
| the Furies to be left out of the cast in future, seen by some characters and not by the audience | 30 | yes |
| progress toward a verse that needs no prose and passes without a break between intense speech and relaxed talk | 31 | yes. He reports this as progress made, so the caption now gives it as what he judged, not only what he wanted |

His account of this play runs from p. 27 to p. 31, and p. 25 gives the
two resolves. Nothing is used from p. 24, which is about the earlier
play. The sources entry said "pp. 24–31: his own account of the play".
Mended to pp. 25–31.

### Auden, "Eliot on Eliot" (1951), *Prose* III

Not on this machine and not in the research notes. Read by me, as by the
poet, in search-inside snippets of the Internet Archive copy
`trent_0116405823828`, chained one to the next. The contents page gives
p. 257. The page head 258 falls before the passage on the play and the
page head 259 after it, so p. 258 is right.

In the order it stands: Eliot decided on a subject of his own day, a
verse rhythm close to speech, and the characters as commentators. Then a
sentence, in Auden's voice, that in this play Eliot came a long way
toward solving the problem of versification. Then the line "according to
him", of three stresses and a marked caesura. Auden is baffled. Opening
the play at random he reads five printed lines (the doctor's two, then
Harry's three), blames his own ear, and says he cannot read any of them
with fewer than four stresses, and that line three sounds like five.
Then the remark on prosody. Then: with other sides of the play Eliot
was less satisfied, and the characters as commentators had proved more
artificial than an open chorus.

Found wrong:

- **Auden made to judge more than he says.** The reading had "Auden
  judged that in this play Eliot went far toward a verse for the modern
  stage" (view), "Auden thought the verse a real advance" (why of the
  Line tab) and "Auden grants" (first entry under what Auden said). The
  sentence stands inside his summary of Eliot's own account, and the
  next paragraph begins by saying that Eliot was less satisfied with
  other sides of the play. It is not a verdict Auden argues for. All
  three now say that Auden wrote it, following Eliot's account, and
  none calls it a judgment or an advance.
- The remark on prosody was given as "each poet trusts only his own
  ear". What he says is that it is a matter on which nobody is right
  but oneself. Mended.

Found right: the test at random; fewer than four; five for his line
three; the report of Eliot's verdict on the chorus.

**Which line is his third.** The snippets show the lines he quotes, run
together. A capital begins each printed line. Harry's answer opens with
four words that complete the doctor's short second line. Counted as
verse lines the passage has four, and the third is the line the piece
quotes. Counted as printed lines the third would be those four words,
which cannot hold five stresses. So the poet's inference is sound, and
"appears to be" is the right strength. Kept as it was.

### Auden, "T. S. Eliot So Far" (1953), *Prose* III

Read in snippets of the same copy, chained. The contents page gives
p. 352; the page head 355 falls inside the sentence on the chosen
persons; the date line (The Griffin, March 1953, the month and year in
the editor's square brackets) is followed by the head of p. 356. So the
passage used is on p. 355. Found, in order: the chosen persons of the
plays, Becket, Harry and Celia, take their pain as a means of grace and
a pointer to a special vocation; the snobbish note is a matter of
technique; Eliot put off the problem of convention and took over
unchanged that of English high comedy, from Congreve to Coward, with
aristocratic decor and chief persons; that serves while the subject is
worldly, wealth and breeding being fit symbols for gifts and virtues;
when the theme is spiritual election the symbolism breaks down; he is
certain Eliot did not mean Harry to be called and John not because John
is stupid, though the convention is bound to make it look so. The last
sentence is also in the research notes (section 24, H2, H15), from
Mendelson, *Early Auden, Later Auden*, p. 473 n.

The reading keeps to this. One thing narrowed: the Sight caption said
"the play borrows the wrong convention". Auden says the convention
serves worldly subjects and that its symbolism breaks down for this
theme. The caption now says that.

The date line of "Eliot on Eliot" (The Observer, 28 October 1951) was
seen at the end of that piece.

### Auden, *Secondary Worlds* (1968), Foreword

The sentence is in the research notes (H11), which give pp. 11–12. In
snippets of the Internet Archive copy `secondaryworldse00aude` (New
York, Random House, 1968, by its catalogue record) the contents page
puts the Foreword at p. 11, and the page turns two sentences after the
one on Harry. So p. 11, as the poet has it. The paraphrase keeps to the
sentence. One word mended in the facts: "could end in martyrdom" is
now "may well end", which is his strength of statement.

### Auden, *The Enchafèd Flood*

On this machine (`research/auden/ef.txt`, lines 4521 to 4548). The four
numbered points on Orestes are as the reading gives them.

- **A wrong edition for the page numbers.** The reading cited "New
  York: Random House, 1950, pp. 109–10". The scan on this machine is the
  Vintage Books edition of September 1967 (its title page says so), and
  109 and 110 are that edition's pages. The other pieces cite it as
  "(1950; Vintage Books edition, 1967)". Mended in the entry under what
  Auden said, in the sources, in the facts and in the grounds.
- "a duty that his father's death lays on him" went a step past the
  page, which says a duty imposed through his duty to his father.
  Mended.
- The Greek caption set this remark and the one on Harry in a single
  sentence, as if Auden had weighed the two men against each other. He
  did not: one is from 1950 and is not about Eliot's play, the other
  from 1968. The caption now gives only the remark on Orestes, and the
  remark on Harry stays in the facts and under what Auden said.

### Nothing from 1941

The research notes (section 24, and the list of works with no record of
a class) agree with the poet: nothing before 1951.

## 3. The ear: the stress marks on the two lines

I marked each line by word number before looking at the poet's marks.
Words are numbered from 0, as in the facts.

- `lines[0]` (p. 126, seven words). I hear stresses on words 1, 3 and 6
  and a pause after word 3. The poet's `voice` says the same. The pause
  can also be heard after word 1 (the poet's own note). Either way there
  are three stresses, two on one side of the pause and one on the
  other, so the line keeps Eliot's rule on any hearing I can find.
- `lines[1]` (p. 78, eight words). Words 1, 4, 5 and 7 have two
  syllables each, accented on the first, and the full stop after word 4
  is the pause. That is four stresses, two and two. Word 6 takes a
  fifth if the speaker answers the doctor's hope, and word 3 could take
  one instead if it is set against the doctor's possessive. The poet
  marks the four, gives word 6 as a possible fifth, and leaves word 3
  to a working note. I agree. To get Eliot's three a speaker must pass
  lightly over one of the four accents, most easily word 1.

The stated measure is Eliot's own account (section 2, p. 27), not a
measure the page claims to have found. The page tests it on two lines.

**What the page claimed for these marks.** Eliot scans no line of the
play in the lecture: I read pp. 23 to 31 through, and the only verse he
quotes there is two lines of Shakespeare. Auden gives counts and no
positions. So every mark is the page's own. Before, the page said so
only in `open`, which is never printed. Now it says so where a reader
meets the marks:

- the tab's `what`: "marked as this page hears them";
- the caption: a sentence saying the marks are the page's hearing and
  not Eliot's, and "By them" before the verdict on the first line;
- both `sides` strings begin "as marked here,";
- `stands`: "whose stress marks are this page's own hearing";
- a twelfth ground, with what I read to establish it;
- the third caveat, which also says each line can be heard another way.

The caption leans on no doubtful syllable. It says the second line has
four accented words, which is the accent of four words in ordinary
speech (Baum's sense of accent), and that word 6 "may take" a fifth.
It does not say the second line breaks the rule; the facts carry
`keepsTheRule: false`, from which the drawing prints only that the rule
asks three. That is safe, and it is reported to the lead in `open`.

**What Auden's count allows.** He says he can read none of the lines
with fewer than four stresses and that his third sounds like five. The
page says exactly that, with "appears to be" for which line is his
third (section 2). It does not say Auden heard four in the line shown,
or where he put any stress.

## 4. The words of the play that the page prints

I could not test this by machine (section 0). I read every one of the
315 strings the page prints (listed with `build/lib/printed.mjs`), and
the 343 strings the site carries for the piece, against the poet's
page-by-page notes and what I know of the play.

**Quoted as the play's words: 19.**

| where | words |
| --- | --- |
| `lines[0].quote`, Line tab | 7 |
| `lines[1].quote`, Line tab | 8 |
| the word in italics in the Sight caption (Harry's own word, p. 111) | 1 |
| the phrase in italics in the Greek caption (Agatha's, p. 101) | 3 |

**The same words shown again, not new ones.** The eight `word` entries
under `stressed` and `mayBeStressed` (single words of the two lines,
set under the marks); the one word of line two in italics in the Line
caption; `lines[0].id`, which is a word of line one and is carried by
the site but not drawn; the Sight word again in `election.word`, in the
Sight `why` and as a dictionary headword in `stands`; the last word of
the Greek phrase as a dictionary headword in `stands`.

**Names, which are not quotation.** The fourteen persons (the twelve
who speak and the two absent brothers) and the family name; the house;
Eumenides (list of persons and stage directions); Argos; the heading
Chorus; part and scene numbers.

**Plain words the paraphrase shares with the play**, as far as I can
tell: the nouns of kinship and calling in the roles (sister, son,
cousin, servant, chauffeur, doctor, sergeant, parlourmaid); drawing
room, library, window; curse; chosen; afraid; lost; pushed; dreamed;
sin; and pursuers, which the page uses throughout as its own plain word
for the figures Harry sees and which is also one of the names he gives
them. None stands in a run taken from the play that I know of.

**What I put into my own words**, because it reported a speech in
diction that leaned on the play's:

- Chorus: all five `together` summaries and all sixteen `about` notes;
  in the caption, the three states of the chorus and the three private
  matters; `apartSay` of the third place.
- Greek: `pairs[4].play`, `pairs[6].play`, `name.inThePlay` (the list
  of Harry's five names for his pursuers is gone; so is the pair that
  Agatha sets against her phrase); the caption's account of the two
  killings.
- Sight: both `shown[].what`; the `say` of Downing, Gerald, Violet and
  John; `election.say`; all five things said of John, and the caption's
  three adjectives for him.
- Line: `mayBeStressed[0].say`, which had the doctor's words.
- The two scene settings in the Chorus facts, which were the play's own
  scene headings (five and four words). They now give the room and the
  time of day in my words.
- Downing's role had its two nouns in what I take to be the order of
  the list of persons. They now stand the other way round.

The poet listed, in `open`, "single words and four short phrases". Of
that list the page now gives as the play's one word and one phrase. It
keeps the name Eumenides, and it uses pursuers as said above. The other
three phrases and the other three single words are gone (searched for
in the printed strings: none found).

The working record that is never printed and never sent to the site
(`grounds`, `open`, `notes.md`) still holds a few two- and three-word
phrases of the play as pointers to the place. I left them: they are how
the next person finds the line.

**So the page stays a matter of a few words**: the two lines, one word
and one three-word phrase. Whether any paraphrase still shares a run of
two or three words with the play by accident can only be settled with
the play's text open, and that test is asked for in `open`.

## 5. The words and the other sources, each opened

- **Online Etymology Dictionary, *election*.** Opened today. It gives
  the theological sense as God's choice of someone for eternal life,
  from the late 14th century. The facts had only "God's choice of a
  person"; `election.means` now has the whole sense. The sense was
  current long before 1939.
- **Online Etymology Dictionary, *expiation*.** Opened today: the act
  of making satisfaction or reparation for an offence, atonement; early
  15th century; the Latin verb is to make amends for, to atone for. The
  caption's "amends for a sin" and the `why`'s "atoning for it" keep to
  that.
- **Liddell and Scott (Perseus), *Eumenides*.** Opened today: the
  gracious goddesses, a euphemism for the Erinyes or Furies, and the
  name of the play by Aeschylus. `name.means` is that, with a plain
  gloss of "euphemism" added.
- **Baum, *Principles of English Versification*** (on this machine).
  The glossarial index gives Accent as the greater emphasis that normal
  speech puts on one syllable, Caesura as the classical term for a
  pause, and Stress as the comparative emphasis that sets a sound off
  from others. The caption's glosses ("the syllables a speaker leans
  on", "a pause, a caesura", "accented words") keep to these.
- **Aeschylus in Morshead's translation** (Project Gutenberg 8604, a
  copy in the poet's working folder, and the Agamemnon printed on this
  site). Read for each Greek fact:
  - the Agamemnon, part 5, block 75: Cassandra says a choir of Furies
    sits within the house and never departs. As the facts say.
  - the end of *The Libation-Bearers*: Orestes says Apollo bade him;
    he sees them and tells the chorus that they cannot; he leaves; the
    closing chorus counts three blows on the line of Atreus, the second
    being the king cut down in the bath. As the facts say.
  - *The Furies*: Athena rules that equal votes acquit; the votes fall
    half and half; Orestes says he is given back to his father's hall;
    the Furies are led down to a cave under the Areopagus and Athena
    calls them gracious powers. As the facts say.
  - The working note that 17 of the 528 blocks of the Agamemnon printed
    here name Argos or the Argives: counted again, 17 of 528.
- **The course reading list.** The research notes on the course give
  the publisher against this play as Harcourt Brace, and the notes on
  the texts record the renewal of the copyright in 1966, which keeps
  the play in copyright in the United States through 2034. The
  catalogue record of the lending copy linked from the sources is New
  York, Harcourt, Brace and Co., 1939.

## 6. The reason and its ground, caption by caption

Each sentence of each caption and `why`, and what it stands on. "Poet's
record" means a statement about the play that I could not open (section
0); I checked it against notes.md and against what I know of the play,
and found nothing that disagrees.

**Line.** (1) Eliot wanted a rhythm near the speech of his day: lecture,
p. 27. (2) The line by his account, with the range of syllables: lecture
p. 27; the range is a count (poet's record; least and greatest of the
twelve numbers confirmed). (3) The marks are the page's: section 3.
(4) and (5) What the marks show: the marks. (6) Auden's test: *Prose*
III, p. 258; which line is his third is an inference, said as one.
`why`: Eliot's reason and Auden's count. It said Auden "thought the
verse a real advance"; cut (section 2).

**Chorus.** (1) Four relations with parts of their own, five places:
list of persons and the count (poet's record). (2) Each speaks alone at
all but the fourth: the counts in the facts, which add up. (3) What they
say together and (4) alone: poet's record, pp. 21 to 22, 42, 66 and 127
to 129. (5) Eliot's resolve: lecture, p. 25. (6) His verdict and Auden's
report of it: lecture p. 28; *Prose* III p. 258. The caption gave the
verdict only at second hand, through Auden. Eliot's own words on p. 28
are that the device is not very satisfactory, so the caption now gives
that as his and keeps "more artificial than an outright chorus" as
Auden's report. "Each then says a line alone" became "speaks briefly
alone": the facts give 12 to 21 words to each, and I could not see that
each is one line. (7) The two scenes with no chorus are the two in which
the Eumenides are shown: the scene table in the facts. I let this
stand as a plain statement of what is there. It gives no cause.

**Greek.** (1) Aeschylus's story lies under the play: Eliot, p. 30.
(2) The frame kept and (3) the killings changed: Aeschylus, read, and
the poet's record of the play. (4) The trial: *The Furies*, read.
(5) Agatha's phrase and Harry's following: poet's record, pp. 101, 106
and 110 to 111; the gloss from the dictionary. (6) Auden on Orestes:
*The Enchafèd Flood*, pp. 109 to 110, read. (7) Eliot's judgment: p. 30.
Two inventions cut. The caption set Orestes against Harry in Auden's
name, in one sentence (section 2); and the `why` said that Eliot "put
a calling where the trial was", which is the page's own summing up and
no one's statement. The caption also said that Aeschylus "ends with" the
court that frees Orestes; the trilogy goes on to the settling of the
Furies, so it now says only that a court tries him and frees him. The
`why` now states what is there: no trial; Agatha's words; Harry
follows; Eliot's judgment of the fit. The fact `pairs[6].turn`
keeps "a trial becomes a calling" as the label of its row. I let it
stand there because it only names the two cells beside it, and
"calling" is grounded: Agatha tells Harry he is chosen (p. 102), and
Auden's words for him are called and vocation (*Prose* III, p. 355).
What it may not do is say that Eliot meant the exchange, and no
sentence on the page now says so.

**Sight.** (1) to (3) Who sees and who does not: poet's record, and the
stage directions as the poet reports them. I changed "So do" to "see
them too", since the chauffeur is not said to see them at the window.
(4) Harry's word, glossed: p. 111, p. 102, the dictionary. (5) What is
said of John: poet's record. (6) to (8) Auden: *Prose* III, p. 355,
read. Three things mended here: "the wrong convention" (section 2);
"Harry is called because his brother is stupid" left out the half of
Auden's sentence that makes the point, and now reads "Harry, not John,
is called because John is stupid"; and wealth and breeding "can stand",
since he says it of worldly subjects. The `why` said "and Harry
follows them", which nothing in this tab grounds; it now gives Harry's
word instead.

**The view** is Auden's on this play, from the two reviews, and the
Line and Sight tabs bear on its two halves.

Every "all", "only", "never", "first" and "last" was looked at:

| statement | stands on |
| --- | --- |
| each speaks alone at all but the fourth place | the counts in the facts: 60, 53, 56, 0, 71 |
| the two scenes without a chorus are the two showings | the scene table: 2, 0, 1, 1, 0, 1 |
| the brothers never arrive | poet's record; agrees with the list of who is on stage |
| no one speaks the name Eumenides, no one says Furies | the poet's count, not made again |
| the chorus names Argos once | the poet's count, not made again |
| Amy's first speech; her last words | poet's record |
| Harry first sees them at the house | poet's record, p. 24 |
| Auden could read no line with fewer than four | of the lines he tried; the `why` now says "no line he tried" |

## 7. The prose and the rules

- The checker finds no dash, no stock word and none of the words it
  warns against in any printed string. I read the four captions, the
  four `why` lines, the view and the four entries under what Auden said
  for rhetorical questions and for closing sentences that sum up what
  the play "means". Two were found and cut (section 6, Greek).
- Lengths, by my count: captions 110, 108, 110 and 110 words; `why` 32,
  40, 36 and 34; the view 70; what Auden said 110, 110, 67 and 76; the
  summary of the play 82.
- **Nothing in copyright is quoted past 25 words.** Of the play, the 19
  words of section 4. Of Auden, no quotation marks are used; a test of
  every printed string against the sources on this machine (his
  *Enchafèd Flood*, the research notes that hold his sentences,
  Morshead, Baum) finds no run of his own words longer than seven
  ("... through his duty to his father", which I chose on purpose to
  keep his meaning). Of Eliot's lecture, nothing is in quotation marks;
  two phrases follow his wording closely because the poet's had changed
  his sense ("the Greek story and the modern situation", "far more
  liberty with the myth"). The machine test against the lecture could
  not be made (section 0).
- There is no passage: the plate has no text, and says why.
- The model's faults, looked for here. A general statement that one
  case breaks: "the whole family" on stage in the first scene, when two
  brothers never come; mended to the persons who are there. Auden made
  to say more than he said: three places (section 2). A paraphrase that
  changes the grammar: the call "because his brother is stupid"
  (section 6). A page number one off: none found; a wrong edition for
  the page numbers of one book (section 2).

## 8. The printed notes

Read as a reader would meet them.

- `view.source` and the four `auden[].source`: article or book, year,
  page, and nothing else. Where each was read is in `checked`, with my
  own note added to each.
- `sources`: eleven entries, beginning with the play and saying that it
  is not printed here and where it can be borrowed. Three mended: the
  page numbers are those of the printing read; the lecture's pages are
  25 to 31; *The Enchafèd Flood* is cited in the edition whose pages
  are given.
- `stands`, one for each tab, each under 70 words: what was counted and
  in what, the pages of the play, each source by short name, Auden by
  book and page. The Greek one links to the place in the Agamemnon
  printed here. The Line one no longer cites pp. 25 and 31 of the
  lecture, which the caption no longer uses; the Greek one no longer
  cites *Secondary Worlds*, for the same reason; the Sight one gained
  the pages for the brothers and for p. 102.
- `caveats`, five, each under 50 words, rewritten:
  1. everything of Auden's is from 1950 to 1968, his remark on Orestes
     is not about this play, and nothing is on record from the class;
  2. his two reviews and his foreword were read in short passages of
     scanned copies, not in full;
  3. the stress marks are the page's own, each line can be heard another
     way, and which line Auden heard with five is inferred;
  4. the play was read in a later printing, and the page numbers are
     that printing's;
  5. how the words of the chorus and the syllables of the first speech
     were counted.
- Nothing printed names a file, a tool, a block number or this
  project's notes, and nothing says plate or lens. The checker agrees.

## 9. Every change, and why

All made as small exact edits to `reading.json`; no key was renamed or
reshaped, so the artist's drawing follows by itself.

**The view and what Auden said**

1. `view.says`: "Auden judged" became "Following Eliot's account, Auden
   wrote"; "chosen" and "passed over" became his own "called" and "is
   not"; "sure" became "certain". Section 2.
2. `auden[0].says`: "Auden grants" became "he writes"; the remark on
   prosody corrected; cut to 110 words.
3. `auden[1].says`: "money" became "wealth", his word.
4. `auden[2].says` and the fact `auden.harry`: "could end" became "may
   well end"; the fact now dates the remark.
5. `auden[3].says`, `auden[3].source`, the sources entry, the Greek
   facts and grounds: the duty comes through his duty to his father;
   the page numbers are those of the Vintage edition of 1967.
6. `checked`, on the view and on all four entries: what I saw, added
   after the poet's.

**Line**

7. `what`, caption, both `sides`, `stands`, a new ground: the marks are
   the page's own hearing (section 3).
8. Caption: "no fixed length" became "varies in length", Eliot's word;
   "for easy talk and intense speech alike" came out, since p. 31 gives
   that as progress made and not as the aim of this line.
9. `why`: "Auden thought the verse a real advance" came out.
10. `rule.say`: "any length" became "varying length and a varying
    number of syllables", and the stresses as well as the pause "may
    fall almost anywhere", as Eliot says.
11. `lines[0].speaker` and `mayBeStressed[0].say`: in my words, without
    the play's.
12. `stands`: the lecture at p. 27 only.

**Chorus**

13. Caption: Eliot's verdict from his own page, Auden's report kept as
    a report; "the next play" for the resolve of p. 25; the play's
    phrases in my words; "speaks briefly" for "says a line".
14. Facts: every `together` and `about` in my words; the third
    `apartSay`; who is on stage in the first scene; the two scene
    settings.
15. `stands` cut to 65 words; three grounds reworded to match.

**Greek**

16. Caption and `why`: the two inventions cut and the rest narrowed
    (section 6); the phrase of the play set in italics as the play's.
17. `stands`: the edition of *The Enchafèd Flood*; *Secondary Worlds*
    dropped.
18. Facts: `pairs[4].play`, `pairs[6].play`, `name.inThePlay` in my
    words; `eliot.say` with "situation" for the poet's "household" and
    "far more liberty with the myth" for "gone much further from him".
19. Grounds: the edition; the remark on Harry marked as in the facts.

**Sight**

20. Caption: "see them too"; Auden's sentence given whole; "can
    stand"; "the wrong convention" gone; the three words for John and
    Harry's not knowing why, in my words.
21. `why`: Harry's word in place of "Harry follows them".
22. `stands`: pages added.
23. Facts: both `shown[].what`; the `say` of Downing, Gerald, Violet
    and John; `election.means` (the whole sense) and `election.say`;
    the five things said of John; `audience.later` ("not by the
    audience", his word, for "never"); `auden.say` (the half sentence
    restored); Downing's role.
24. Grounds: three claims reworded to match the caption.

**Notes**

25. `sources`: three entries (section 8).
26. `caveats`: all five rewritten (section 8).
27. `open`: the poet's eight entries left as they were; six added, each
    beginning "From the examiner:".

Nothing was removed whole. No tab failed: each still has a true reason
standing on a source or on Auden.

## 10. Still doubtful

1. **The play itself was not opened by me.** Every count made on it and
   every page number is the poet's. The poet's `count.mjs` should be run
   by someone whose session can fetch the scan, and its numbers set
   beside the facts.
2. **The total of the play's words (19) is my reading, not a machine's.**
   A test for runs of two or more shared words needs the play's text.
3. **Which printing was read.** The catalogue record of the open scan
   gives the publisher as Harcourt, Brace & World, the firm's name from
   1960; the poet reports the title page as Harcourt, Brace and Company.
   Either way it is a later printing, and the printed notes say so. The
   first printing's pages were not compared.
4. **Auden's third line.** Inferred from his count (section 2). The
   page says "appears to be".
5. **Auden's reviews and foreword** were read in chained snippets, not
   in full. The sentences used are continuous in the snippets, with
   what comes before and after each, but a qualification elsewhere in
   either review would not have been seen.
6. **The paraphrases of speeches** are mine, made from the poet's
   paraphrases and from memory of the play, without the play open. I
   kept each to what the poet's notes record and added nothing; where a
   first attempt of mine said more than the notes bear, I took it back
   (three places in the Chorus facts).
7. **The title** says Furies, a word no one in the play uses, and
   "drawing room", where one of the two showings is. Left for the lead.
