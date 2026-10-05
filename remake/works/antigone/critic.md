# Antigone: the critic's report

Piece `antigone`. 3 October 2026; times are UTC. No words of the play
are typed here beyond the single words and short phrases the captions
already name; places are given by passage, tab, row and word number.

Begun 09:40, handed in 10:45. In short: 29 sentences changed in 23
places (3 of them cut, 2 captions put in a new order), 26 words marked
in the small notes, 1 title marked, 1 entry of 5 taken out of the list.
What waits on the lead is in sections 3, 5 and 7, and in changes 8 and
16 of section 1.

## 0. What was run

    node build/pieces.mjs antigone
    node build/tools/shoot.mjs antigone --out remake/works/antigone/shots --page
    node build/tools/prose.mjs antigone

The picture tool was run twice and no more: at 09:40 on the page as I
found it, and at 10:28 after the last change to `reading.json` (10:26)
and a new build. Its last line both times: `nothing reported; now look
at the pictures`. The 32 pictures in `shots/` are those of 10:28 and
show the page as it now stands.

## 1. Every change to `reading.json`

Each was a small exact edit of the text of the file. (The entry taken
out of the list, with its three sources, was cut as text by a short
script that checked itself; a line by line comparison with my copy of
the file as found shows no change but those listed here.)
"Passage 1, 2, 3" are the plates `elders`, `answer` and `quarrel`. No
quotation, number, page, mark, ground or fact was touched, and no
`turn`, `join`, `heading` or tab `label`. One name was added to a
caption (change 16).

### Wording

1. **The passages** (`about`), second sentence.
   Old: "The first passage ends a song the city’s elders sing before they
   know who did it."
   New: "The first passage ends a song that the chorus, the city’s elders,
   sing before they know who did it."
   Fault: a term never tied to its people. The page says "elders" twelve
   times and "the chorus" four (the Song caption, twice in the list, a
   caveat), the Play drawing has a row "Chorus", and nowhere did it say
   they are the same. The text printed here bears it out: the part
   is headed with the Elders of Thebes, the speaker is CHORUS, and they
   call themselves the king's elders.
   To pay for the three words, in the first sentence:
   Old: "... orders that one of them lie unburied on pain of death; ..."
   New: "... orders that one lie unburied on pain of death; ..."
   The summary is 90 words, which is all the checker allows it.

2. **Passage 1, Greek**, first sentence of the caption.
   Old: "The glosses give Sophocles’ words."
   New: cut.
   Fault: a signpost. It says what the small notes are, and each of them
   says Greek or gives a Greek word, under a tab named Greek. "Glosses"
   is also a word of the trade. The caption now opens on what the elders
   name, and is 105 words.

3. **Passage 1, Greek**, the note on the last five words of the third line.
   Old: "... Jebb takes it as the justice a man has sworn by the gods to
   uphold; the revised translation at Perseus, as the gods’ justice, to
   which he is bound by oath. The State is Storr’s word."
   New: "... The editor Jebb takes it as the justice a man has sworn by
   the gods to uphold; the Perseus revision of his translation takes it as
   the gods’ justice, to which he is bound by oath."
   Faults: (a) a name met for the first time with nothing to say who he
   is: this is the first place on the page that names Jebb; (b) "the
   revised translation" did not say whose translation was revised, and
   its clause had no verb; (c) the last sentence was padding: the caption
   beside it has already said that the State is what Storr calls it, and
   the three words given one by one show that none of them is State.
   Cutting it paid for (a) and (b): the checker allows such a note 45
   words, and it is 44, as it was. That Jebb edited the play and that
   Perseus gives his translation revised are in the page's own Sources.

4. **Passage 1, Greek**, the note on the one-word gloss in the fourth line
   (the word for a man without a city).
   Old: "... of this line it gives no true citizen, the opposite of ..."
   New: "... for this line it gives another, no true citizen, the
   opposite of ..."
   Fault: "it gives no true citizen" is read first as "it does not give".

5. **Passage 1, Beat**, the caption: one word, and the order of its last
   two sentences.
   Old: "... four of the six have a stop after the third. ... Twice Storr
   sets half against half: ... a man with none. The beat is Storr’s: Auden
   notes that ... share nothing but rhythm."
   New: "... four of the six have a pause after the third. ... The beat is
   Storr’s: Auden notes that ... share nothing but rhythm. Twice Storr
   sets half against half: ... a man with none."
   Faults: (a) the key under the passage calls the double bar "a pause";
   the caption called it a stop, which in American use is not the common
   word for a comma. (b) Eight of the ten captions closed on Auden
   (section 2). Here his sentence is a note on whose verse this is, and
   the caption gains by ending on what the reader can see in the lines,
   which is also where its `why` ends. But for that one word, no
   sentence was reworded.

6. **Passage 1, Beat**, the first numbered remark.
   Old: "... and the line has no stop inside it."
   New: "... and the line has no pause inside it."
   Fault: as 5 (a).

7. **Passage 1, Song**, fourth sentence of the caption.
   Old: "Only for death has he found no cure."
   New: "For death alone he has found no cure."
   Fault: an inverted, antique turn. Old and new alike keep close to
   the words that end the third stanza as printed here (six words are
   Storr's), and "alone" is what the ground gives for the Greek. That
   stanza is not on the plate, so the caption has no way to mark them.

8. **Passage 1, Song**, sixth sentence of the caption.
   Old: "In the Greek the last two stanzas each set two opposites side by
   side at the same point: ..."
   New: "In the Greek the last two stanzas each set two opposites side by
   side: ..."
   Fault: a phrase the page does not bear out, and one that reads two
   ways. This is the first of the artist's three questions: section 7.
   The caption is now 106 words. Its `why` and `stands` never leaned on
   the phrase and are as they were. The fifth ground still records where
   the pairs stand in the Greek; I may not touch a ground, and it claims
   nothing the caption now denies.

9. **Passage 2, Knowing**, the figure in plain words (`plain`).
   Old: "... here knew and know in one line; ..."
   New: "... here “knew” and “know” in one line; ..."
   Fault: two words spoken of, not used, with nothing to show it. This
   line is set as plain text and cannot carry the mark the notes now can.

10. **Passage 2, Greek**, second sentence of the caption.
    Old: "Two lines earlier he called his order a thing proclaimed."
    New: "Two lines earlier, before the passage begins, he called his
    order a thing proclaimed."
    Fault: the reader looks two lines above Creon's line and finds the
    top of the passage. His question stands just above it (the Knowing
    tab says so, and its printed note links to it). 112 words.

11. **Passage 2, Greek**, the note on the seventh word of the third line
    (the word Storr gives as ordained).
    Old: "Her verb is the herald’s: it was not Zeus who had this cried."
    New: cut. The word keeps the small note set under it.
    Fault: padding. It said again, a few lines lower on the same screen,
    what the caption's third sentence says in the same words.

12. **Passage 2, Greek**, the note on the last word of the fifth line of
    her speech (override).
    Old: "Creon’s verb is step over and hers is run over or beyond,
    outrun; of this line the dictionary gives prevail against."
    New: "Creon’s verb means to step over; hers means to run over or
    beyond, to outrun, and in this line, the dictionary says, to prevail
    against."
    Fault: meanings set down as if they were the verbs, and "gives
    prevail against" has to be read twice.

13. **Passage 2, Sides**, sixth sentence of the caption.
    Old: "Auden’s Antigone of 1941 has to choose between the law and her
    duty to her brother."
    New: "As Auden saw her in 1941, Antigone has to choose between the
    law and her duty to her brother."
    Fault: with a year after it the possessive reads as the name of a
    work, an *Antigone* that Auden made in 1941. The possessive frame
    stood in three captions (section 2); it now stands in two. 112 words.

14. **Passage 3, Exchange**, the last four sentences of the caption.
    Old: "... Sophocles has all three. The first line here asks about
    Antigone. By the seventh Creon claims the State is his who rules it.
    Four lines past the last shown, his son says he spurns what is due to
    the gods. Auden held that her part in the play is to reveal Creon’s
    hubris toward the gods."
    New: "... Sophocles has all three. Auden held that Antigone’s part in
    the play is to reveal Creon’s hubris toward the gods. The first line
    here asks about her. By the seventh Creon claims the State is his who
    rules it. Four lines past the last shown, Haemon tells him that he
    spurns what is due to the gods."
    Faults: (a) "his son says he spurns": the reader has to work out
    which of the two men "he" is; (b) "her part" stood three sentences
    after the name it leans on; (c) the closing on Auden (section 2).
    With his sentence first, the three lines that follow are what bears
    it out, in the order they are spoken, and the caption ends on a line
    of the play. Nothing was added: "tells him" is the caption's own
    phrase on the next tab for the same exchange. 111 words.

15. **Passage 3, Play**, first words of the caption.
    Old: "In Storr’s text Creon speaks 339 of the play’s 1,279 lines ..."
    New: "In Storr’s English Creon speaks 339 of the play’s 1,279 lines ..."
    Fault: a term that points two ways. Elsewhere on the page Storr's
    text is the Greek he printed ("Storr’s Greek text" in a note of
    passage 2, "his Greek text" in the Sources), and the Greek has other
    counts, which the third caveat gives. The caveat's own words are
    "Storr’s English".

16. **Passage 3, Play**, second sentence of the caption.
    Old: "... come 396 more: a prophet warns Creon, he gives way too
    late, ..."
    New: "... come 396 more: the prophet Teiresias warns Creon, he gives
    way too late, ..."
    Fault: the caption points at a man the drawing shows only by name.
    The first bars to the right of the red rule stand in the row
    "Teiresias", and nothing on the page said he is the prophet. This
    adds a name, so the lead should know where it stands: the ground for
    this clause gives Teiresias as the speaker of the prophet's warning,
    and the examiner passed it. If a name is more than wording, put "a
    prophet" back. 108 words. (The same could be done for "his wife’s"
    and the row "Eurydice", eight lines; no ground names her as his wife,
    so I left it: section 3.)

17. **More from Auden**, first entry (1967), last sentence.
    Old: "... would in time have brought it out and a like punishment on
    him."
    New: "... would in time have brought it out and brought a like
    punishment on him."
    Fault: one verb made to serve two objects in two senses ("brought it
    out" and "brought ... on him"), so the reader hears "brought out a
    like punishment".

18. **More from Auden**, second entry (1948), fourth sentence.
    Old: "To be placed so is the sign of another guilt, hubris."
    New: "Such a position is the sign of another guilt, hubris."
    Fault: a mock-antique turn ("placed so"). The new words say what
    Auden says there: that the hero finds himself in such a situation is
    the sign. 109 words.

19. **More from Auden**, third entry (1948, pp. 19–20): three sentences
    made one.
    Old: "He goes on to name the model. What each citizen of the
    democracy ought to aim at being is a moderate man who keeps the law
    and has no wish to outdo everyone else in strength or fame. The
    Homeric hero is not that model."
    New: "He goes on to say what each citizen of the democracy ought to
    aim at being: a moderate man who keeps the law and has no wish to
    outdo everyone else in strength or fame, and not the Homeric hero."
    Faults: a signpost for a first sentence (it announces what the next
    one says), and a short last sentence set apart for effect. "Model"
    was the paraphrase's word and went with them; Auden's contrast is
    kept. 40 words, where there were 45.

20. **More from Auden**, last entry (1948, pp. 5–7), second sentence.
    Old: "... Greek verse is quantitative and unrhymed; Greek, being
    inflected, does not depend on word order for its sense, as English
    does; ..."
    New: "... Greek verse is unrhymed and measured by syllable length;
    Greek shows by the forms of its words what English shows by their
    order; ..."
    Fault: two terms of the trade left unexplained. "Measured by syllable
    length" is the Beat caption's own wording for the first. For the
    second I looked at the page of Auden the entry cites: he says that
    Greek is an inflected language, in which the sense does not depend
    on where the words stand in the sentence, as it does in English. The
    new clause says that and no more. The entry was 104 words and is
    106; the checker allows 110.

21. **Passage 1, Beat**, the note at the foot (`stands`), first sentence.
    Old: "The marks on the passage, scanned by ear."
    New: "The marks on the passage, placed by ear."
    Fault: a word of the trade. The fourth caveat says the same thing as
    "marked by ear".

22. **Where this page may be wrong**, fifth item (`caveats[4]`).
    Old: "Two Greek readings behind the glosses are editors’ corrections
    of the manuscripts, ..."
    New: "Two of the Greek readings followed here are editors’
    corrections of the manuscripts, ..."
    Fault: "glosses" is a working word for the small notes under the
    words. With the sentence cut in change 2, this was the last place
    the page used it. The new words are also truer: the first of the two
    readings lies behind a word of Storr's and behind no small note.

23. **Where this page may be wrong**, second item (`caveats[1]`).
    Old: "Auden’s sentences of 1941 and 1967 about the play, and his
    remarks of 1942, 1945 and 1946, were read here only in snippets ..."
    New: "Auden’s sentences of 1941 and 1967 about the play were read
    here only in snippets ..."
    Not a fault of wording: the remarks of 1942, 1945 and 1946 left the
    page with the entry taken out of the list (below).

Items 13, 16 and 21 were found on a last reading and are out of the
order of the page.

### Words marked in the small notes

No wording changed. 26 words or short phrases in 18 notes now stand
upright in the italic. The rule I kept to: a word of the passage named
as a word, and a Greek or other foreign word, are marked; a meaning or
a dictionary's sense is left in the italic of the sentence, and so is
anything in a `gloss`.

- Passage 1, Greek (5 notes): *nomoi*; *high* and *city*; *hypsipolis*;
  *bold*; *parestios*.
- Passage 1, Beat (2 remarks): *Now* and *man*; *City* and *cityless*.
- Passage 2, Greek (6 notes): *tolma*; *nomoi* (twice, in two notes);
  *laws*; *kerygmata* and *a breath*; *nomima*.
- Passage 3, City (5 notes): *homoptolis leos*; *mob* and *mobile*;
  *State*; *archois monos*, *monarch*, *monos* and *arkhein*;
  *a desert*.

The second pictures show them upright at both widths. The line of a
figure in plain words (`plain`) is set as plain text and takes no mark,
which is why change 9 uses quotation marks.

### Titles marked

One. `where`: "Antigone: the elders’ song ..." is now "*Antigone*: the
elders’ song ...". Every other title in `about`, `view`, the list and
the notes at the foot was marked already. "Antigone" elsewhere in those
fields is the woman, not the play.

### Taken out of the list of what Auden said

One entry of five, the fourth as the page stood. It began "From 1942
Auden used Antigone as an example of the Greek hero whose choice lies
between two wrongs" and gave three later mentions: a sentence in the
"Lecture Notes" of 1942, one in "The Christian Tragic Hero" of 1945,
and one in a New York lecture of November 1946 on *Romeo and Juliet*.

Why: each names the play in passing, in a piece on something else, and
all three say again what the page already has twice: the view at the
head (1941: she cannot do both) and the second entry of the list (1948:
every course open to the hero is wrong, with Antigone as an example).
None was said in 1941, none bears on a line shown that those two do not
bear on, and no caption, ground or `stands` leaned on it. The list is
four entries: 1967 on the play, and three from "The Greeks and Us".

What went with it:

- the entry is whole (source, paraphrase, `checked`; it had no quote)
  at the end of `notes.md`, under "Taken out of the list of what Auden
  said". That is the one thing I wrote in `notes.md`;
- three lines of `sources` that nothing else on the page used. Sources
  are 15 where they were 18. They stood after the line for “The Greeks
  and Us”, in this order, and are given here word for word in case the
  entry goes back:

        W. H. Auden, “Lecture Notes” (signed Didymus), the third of five installments, *The Commonweal*, 20 November 1942, in *Prose*, vol. II, pp. 165–67; the sentence on Antigone is on p. 166. Not seen in full.
        W. H. Auden, “The Christian Tragic Hero,” *The New York Times Book Review*, 16 December 1945, as reprinted in R. W. Corrigan, ed., *Tragedy: Vision and Form* (San Francisco: Chandler, 1965), pp. 143–47. Not seen in full.
        W. H. Auden, *Lectures on Shakespeare*, reconstructed and edited by Arthur Kirsch (Princeton, 2000), p. 44. Not seen in full.

- the clause on those remarks in the second caveat (change 23).

The entry after it begins "On reading the Greeks in English, Auden
held", so it needed no name put back. Two items of `open` (the first,
and the examiner's long one on the pages) still speak of the remarks of
1942, 1945 and 1946 and of "the fourth entry". `open` is not printed and
is the record of how they were checked, so I left it.

## 2. What recurs, with counts

**The faults mended, by kind** (the numbers are those of section 1):

- a term, a name or a person pointed at with nothing to say what it
  is: 7 places (1, 3, 15, 16, 20, 21, 22);
- a sentence that had to be read twice, for a loose pronoun, a verb
  doing two jobs or a phrase that reads two ways: 7 places (3, 4, 8,
  10, 12, 14, 17);
- padding or a signpost: 4 (2, 3, 11, 19);
- an antique or mannered turn: 4 (7, 13, 18, 19);
- a word that did not match the page's own key: 2 (5, 6);
- the same close on Auden, varied: 2 (5, 14);
- a word spoken of with no mark to show it: 1 sentence (9), and the 26
  marks.

I found no sentence that pronounces a feeling or a meaning, no close on
an aphorism of the writer's own (City ends on Haemon's line about the
city, which is the play's), and none of the stock words. The nearest
thing to a verdict is "The stanza asks for law and justice together" in
the Greek caption of passage 1; the two things are named in the lines
beside it, and I left it. The checker printed no
warning on the piece as I found it, and prints none now. (Midway it
warned four times of length, each time of a first draft of mine: the
summary, the note of change 3 and two entries of the list. Changes 1, 3,
18 and 20 are those drafts cut to fit.)

**Where Auden stands in a caption.** As found, eight of the ten
captions ended on him; City has no Auden and Play had him fourth and
fifth of six. Now six of ten end on him (the Greek, Rhyme and Song tabs
of passage 1; all three tabs of passage 2). I left those six: in each
his sentence is the reason, the caption goes from what is there to the
reason, and the words that bring him in are different every time
("Auden’s Antigone owes", "Auden puts it almost as a rule", "Auden
wrote that", "As Auden saw her in 1941", "In Auden’s account of 1941",
"For Auden the decree"). It is the order that recurs, and the rule asks
for that order.

**The same few sentences of his.** Nine captions give a reason from
Auden, and the nine reasons are five thoughts of his:

- that she cannot serve both duties and chooses (1941, and the clause
  of 1948 that names her): the head of the page twice, in his words and
  in the paraphrase, and then three captions (Greek of passage 1,
  Sides, Knowing);
- Creon's hubris toward the gods (1967): the head, two captions (Greek
  of passage 2, Exchange), the first entry of the list;
- that for Sophocles the chief figure is Creon (1967): the head, the
  Play caption, and his own words at the top of the list;
- the tragic hero as a warning, and the moderate citizen (1948): Song,
  Play, the second and third entries;
- what is lost in English (1948): Beat, Rhyme, the last entry.

A reader who opens every tab meets the two duties at the head and in
three captions. I count it and do not call it a fault: it is all he
said of the play, and the page does not make him say more.

**Names and frames.**

- "Storr": 24 times in everything printed, 11 of them in captions; "is
  Storr’s" 4 times. It is the method of the page: each time it parts
  what is the translator's from what is Sophocles'.
- "Sophocles has": 11 times; 7 of the 21 notes on words begin with it.
  5 begin "Creon", and 4, with one Beat remark, begin "The dictionary".
  A reader takes these notes one at a time, with a finger on a word,
  and the one form helps there. Left.
- "the dictionary": 10 times, for three books: Liddell and Scott in
  the Greek notes, Merriam-Webster for the stress of one word (the
  fourth remark of the Beat tab, the fourth caveat), the *Century
  Dictionary* for stichomythia (the Exchange caption). Each is plain
  where it stands, and the Sources name all three.
- "as a rule": 3 times, once in the Beat caption and twice in the Rhyme
  caption, where it means two things (section 3).
- "Auden’s" with a person after it: 3 captions as found, 2 now (Greek
  of passage 1, Play).
- The colon: 24 in ten captions, 4 of them in the six sentences of
  City. The house style bars the dash, so the colon carries every list
  and every reason. Most of them open a list of words from the
  passage.

**Length.** As found, every caption had between 106 and 110 words; now
they run from 105 to 112. None is short because its tab has less to
say. I cut what was padding and found no more to cut, but ten captions
of nearly one length is a thing a reader of the whole site may come to
feel.

## 3. Sentences doubted and not changed

No sentence on the page reads to me as made up, and no tab pays
nothing. What I stopped at and left:

1. **Passage 1, Rhyme**, the last sentence: "Auden puts it almost as a
   rule: the more a version succeeds as English poetry, the less it
   resembles the Greek." Two things. "It" has nothing to point at but
   Storr's principle in the sentence before, so a reader may take Auden
   to be speaking of Storr. And the caption's second sentence already
   has "as a rule" in its other sense, of what is usual (the examiner's
   hedge, which I may not weaken). Left because the sentence keeps his
   hedge: he says that one can almost say it. Every plainer frame I
   tried dropped the "almost", turned it into "almost always", or ran
   on his own words. If the lead wants one: "Auden thought it almost a
   rule that the more a version succeeds as English poetry, the less it
   resembles the Greek."

2. **Passage 3, Play**, the general set beside the particular. "The
   messenger says Creon was a man to envy and now all is gone. Auden’s
   Greek tragic hero is honored and fortunate when the play begins and
   in exceptional suffering when it ends." On that page of 1948 Auden
   is describing the hero of Greek tragedy in general, and the one
   person of this play he names there is Antigone. The caption does not
   say he meant Creon, and its next sentence (1967) is about Creon, so
   I think it stands; but it is the one place where the reader is led
   to fit a sentence of Auden's to a man he did not name in it. The
   Song caption does a milder thing of the same kind with the elders
   and his moderate citizen. The lead should read both with the
   owner's question in mind.

3. **Passage 3, Play**, the last sentence: "Of the single speakers
   Creon has the most lines". Beside the drawing the hedge is puzzling:
   Creon's 339 is the largest number there, the chorus included. It is
   there because by the Greek line numbers the chorus has four more
   than he does, which only the third caveat says. True, and the
   examiner's; left.

4. **Passage 3, Play**: "his wife’s". The drawing has a row "Eurydice"
   of eight lines, and the page never says who she is, nor who Ismene
   is. If the lead wants the row tied as change 16 ties the prophet's:
   "and news comes of her death, his son’s and that of his wife,
   Eurydice" (111 words). It needs someone to vouch for the name, which
   no ground gives.

5. **Passage 1, Greek**, the last words: "and must break one". One
   breaks a law or a promise; a duty is failed or violated, and
   "violate" is Auden's verb here. Left: it is understood at once, and
   it is short.

6. **Passage 1, Beat**: "the song leaves that line". "Line" is the
   five-beat measure here and a row of verse in the sentence before.
   Left: the rest of the sentence makes it plain.

7. **Passage 1, Rhyme**: "four short ones rhymed by turns". The usual
   word is "alternately". Left: the dotted strokes and the arcs show
   it.

8. **Passage 3, City**, the note on the word that Storr gives as mob.
   It says again what the caption says (Creon's word is the city; slang
   of the 1680s for the rabble) and adds that the word was shortened
   from *mobile*, which it does not explain. I cut one note of this
   kind (change 11) and kept this one because it adds something. If the
   lead would rather it went, the word keeps its small note, "Greek
   polis: the city".

9. **Passage 1, Song**: the caption says "resourceless" and the drawing
   under the third stanza "without resource". The same sense. Left: with
   "cityless" after it, "-less" twice lets the reader hear that the two
   pairs are built alike, which is all that is left on the page of how
   they answer each other (section 7).

10. **The head of the page** (`view.says`): "made Antigone his instance
    of the hero who accepts a tragic choice". "His instance" is stiff.
    The view is not mine to touch.

11. **Passage 2, Greek**: "Laws she says once". The object comes first.
    Left: it is set against "three times" in the sentence before, and
    the turn is how one says that aloud.

## 4. What on the page got in the way of reading

The faults of the kit are the artist's to report and I leave them out.
Of the words:

1. On the Song tab the stanza is not in view: the drawing stands where
   the passage stood. The caption there begins "This stanza", the red
   row is named "... shown here" and the key says "this passage". A
   reader who came by the other three tabs knows which stanza is meant;
   one who opens Song first has to work it out from the red. Dropping
   ", shown here" (section 7) takes away the one phrase that is false
   to what the tab shows.
2. The Play drawing has ten names. The page explains six of them
   (Creon, Antigone, Haemon, the chorus, the prophet, the guard) and two
   say what they are (the messengers). Ismene and Eurydice are names
   only. The caption cannot carry them all; it is where a reader new to
   the play stops.
3. The quotation that heads "More from Auden" (for Sophocles the
   principal figure is Creon) stands over an entry whose paraphrase is
   about other things: the martyr, the decree, the hubris. The sentence
   it quotes is paraphrased at the head of the page and in the Play
   caption. Nothing is wrong, but the eye looks under the quotation
   for its sense and does not find it there.
4. The list is not in the order of time (1967, then 1948 three times),
   where the view at the head goes from 1941 to 1967. The third entry,
   "He goes on to say", leans on the second and would be lost if the
   order changed.
5. The first passage speaks three times of "the second passage" (the
   Greek caption and two of its notes) before the reader has seen it.
   The passages carry no numbers on the page; the summary at the head
   is what says which is second. It was enough for me.

## 5. The printed words of the two drawings

`site/js/pieces/antigone.js` was read and not edited.

**Play** (plate `quarrel`). One string I would change:

- line 84, the first row of the key: `'a turn to speak, as long as its
  lines'`. "As long as" is read first as "provided that", and "its
  lines" has to be worked out. My wording: `'a turn to speak, from its
  first line to its last'`. It says what the mark is on the scale under
  it, and it matches the other string of the same row (`'from a
  speaker’s first line to the last'`), which the drawing uses when it
  has no turns to draw.

The rest read well and I would leave them: the line that speaks for a
row (line 75: name, lines, turns, first and last line, and "; in the
Greek, N"), the line for what follows (line 80, "After line 883: 396
lines, to line 1,279; in the Greek, 410"), the two red rows of the key
(lines 85 and 86), "the play" (112), "lines" (116), "line 1" (142) and
"396 lines after Antigone’s last line" (151). The heading over the
drawing (`what`) says exactly what it shows.

**Song** (plate `elders`). The script's own strings read well: "Greek
lines" (line 212) and the three rows of the key (lines 252 to 254). The
heading (`what`), the six summaries (`tells`) and the heading
"opposites side by side in the Greek", which is a key of `facts`, read
well too. What I would change is in the names of four parts, which are
`facts`: section 7.

## 6. Left as I found it, and not mine

- `turn` on the first passage (rows 73.0, 73.4 and 73.5) was already in
  `reading.json` when I came to it: the examiner set it (`exam.md`,
  change 18). I did not set, change or remove it, nor any `join`,
  `heading` or tab `label`. Whether it stays is the owner's.
- `view`, every `quote`, every number, page, mark, `grounds`, `facts`
  and `why`: untouched. One `stands` was reworded (change 21). No
  caption lost a sentence that its `why` or `stands` leans on, so none
  of those needed trimming.
- The permission system refused nothing in this session.
- In the project I wrote in four places only: `reading.json`, this
  file, the end of `notes.md` (the one entry), and `shots/` (by the
  picture tool). The build and the prose tool wrote what they always
  write. My working files (a word counter, a copy of the reading as I
  found it, the script that moved the entry, the checker's outputs) are
  in the session's scratchpad under `crit/`, outside the project.

## 7. The artist's three questions on the Song tab (`art.md`, section 6)

**1. "At the same point", which the drawing cannot show.** Cut from the
caption (change 8). My reasons:

- the phrase read two ways: the two pairs at the same point as each
  other, or each pair's two words at one point, which "side by side"
  has just said;
- by itself it gives the reader nothing to see or use. Where a pair
  stands matters only to someone who knows that the fourth stanza
  answers the third in the same measure, and the page never says so. So
  the caption had to say both things or neither. Neither is the smaller
  change and adds no claim;
- what is left is borne out by the drawing, which sets each pair under
  its stanza beneath the words "opposites side by side in the Greek".

What is lost: the page no longer says that the two pairs stand at the
same place in two stanzas that answer each other. It is true, the
examiner counted it, and the fifth ground of the tab still records it.

If the lead wants it said, it has to be said whole. A sixth sentence
that would do it: "In the Greek the fourth stanza answers the third in
the same measure, and each sets two opposites side by side at the same
place: all-inventive and resourceless, high-citied and cityless." The
caption would be 117 words. "Answers the third" is in the fifth
ground's own words for its source; "in the same measure" goes a step
past them and is a claim for the examiner, which is why I did not write
it in.

I would not print the examiner's fact ("place of the pair": that it
opens the fourth of the stanza's six lines in the Greek text). Under the
third stanza it would stand beside five strokes, because that stanza has
five lines as printed here, and a reader would count the strokes
against it.

**2. The edition's labels (Str. 1, Ant. 1, Str. 2, Ant. 2).** Take them
out of the names. They shorten two terms the page never uses or
explains; in this play "Ant." is read as the heroine's name; and with
the caption as it now stands nothing on the page leans on them. A
reader who follows the link lands on the stanza itself, under the
edition's heading, and needs no label to know it.

**3. ", shown here".** Take it out. The red strokes, the red name, the
red line numbers and the key ("the 6 lines of this passage") all say
it; on this tab the stanza is not shown (section 4); and the shorter
name answers the artist's point about a narrow window. Where the
drawing cannot be made and the page falls back on a table, the
caption's first sentence ("This stanza is the last of four") says which
row is the passage.

**My wording for the facts** (`plates[0].lenses[3].facts`, the key
`part`):

| entry | now | my wording |
|---|---|---|
| `facts[1]` | first stanza (Str. 1) | first stanza |
| `facts[2]` | second stanza (Ant. 1) | second stanza |
| `facts[3]` | third stanza (Str. 2) | third stanza |
| `facts[4]` | fourth stanza (Ant. 2), shown here | fourth stanza |

The script needs no change for this: it knows a part of the song by the
word "stanza" in its name (line 204) and the stanza of the passage by
its `read` (line 209). The labels can go even if the lead takes the
fuller sentence above, since the caption would then say in words what
they shorten.

One loose end follows. The Sources line for the *Online Etymology
Dictionary* lists "antistrophe" and "strophe". The fifth ground still
cites both, so I left the line. Whether a page that prints neither word
should list them is the lead's to say.

## 8. The checker, at the end

    node build/tools/check-reading.mjs antigone --print
    node build/pieces.mjs antigone
    node build/tools/prose.mjs antigone

The checker's last three lines:

    no problems
    no warnings
    the printed notes are fit to print
