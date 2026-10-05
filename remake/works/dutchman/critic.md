# The Flying Dutchman (Senta's ballad): the critic's record

Piece `dutchman`. Critic at work on 3 October 2026, from 07:30 UTC,
after the examiner (`exam.md`) and the artist (`art.md`). Words of the
libretto are pointed at by passage, tab, row and word number and never
typed out. "Old" and "new" below are the site's own sentences.

In short: nineteen sentences reworded or cut, fifteen titles set in
italics, two of eight entries taken out of the list of what Auden
said. The
checker ends with no problems, no warnings, and the printed notes
fit to print. What is left for the lead is listed at the foot.

## 1. What was read, and with what

- `remake/BRIEF.md`, `remake/CRITIC.md` (all of it), "The printed
  notes" in `remake/EXAMINER.md`, `remake/KIT-CHANGES.md`.
- `reading.json`, `exam.md`, `art.md`, `notes.md` of this piece, the
  script `site/js/pieces/dutchman.js`, and the proof that
  `node build/tools/check-reading.mjs dutchman --print` prints.
- The page as a reader sees it: the 34 pictures the artist took at
  07:22 UTC (the whole page and every tab at 1280 and 390 px). No file
  the page is built from had changed between that round and my start
  (checked by date: the reading at 07:03, the kit at 07:15, the
  script at 07:10), so I read those pictures first and kept the
  picture tool for the page after my changes. The phone pictures were
  cut into slices in my scratch folder and read at full size.
- `review/remake/prose/dutchman.md`, made again at 07:31 with
  `node build/tools/prose.mjs dutchman` (the copy on disk was older
  than the examiner's changes): read once from top to bottom before
  anything was marked, then sentence by sentence.
- The speeches around each place the Scene drawing names, in the
  English printed here (`dutchman/act-2`, blocks 0 to 24, 52 to 92
  and 120 to 166) and in the German libretto the passages are cut
  from, for the three things the artist raised.
- To judge whether a paraphrase says more than Auden did: the scans
  of *The Dyer's Hand*, pp. 48 and 470 to 473, *Forewords and
  Afterwords*, pp. 253 to 255, *The Enchafèd Flood*, pp. 5 and 12 to
  13, and the research notes on his note of 1941 and his chart of
  1943. No fact was checked again beyond that; the examiner's record
  stands.

## 2. Every change of wording

All in `reading.json`, each by one exact edit. Nothing was touched in
a `quote`, a `grounds`, a `facts`, a mark, a number, a name, a page
reference or a `turn` (there is no `turn` in the file; I set none). A
path-by-path comparison with the copy I took before starting shows 34
paths that differ, and every one is accounted for in this section,
in section 3 or in section 4 (eight of the 34 are the sources after
the one taken out, which only moved up a place).

Passage 1 (`tale`)

1. Rhyme, caption, sentence 2.
   - Old: "A handbook of English verse calls four beats rhymed this
     way closely similar to the ballad stanza, and Wagner heads the
     song <i>Ballade</i>."
   - New: "A handbook of English verse calls four-beat lines rhymed
     this way closely similar to the ballad stanza, and Wagner heads
     the song <i>Ballade</i>."
   - Fault: loose term. Beats are not rhymed, lines are; the ground
     (Baum, chapter 4) speaks of quatrains of four-beat lines.
2. Word, caption, the sentence on Acts 1 and 2.
   - Old: "… in Act 2 he asks Senta whether her troth will bring the
     long-desired <i>Ruh</i>."
   - New: "… in Act 2 he asks Senta whether her faithfulness will
     bring the long-desired <i>Ruh</i>."
   - Fault: a term left unexplained. "Troth" is the page's word for
     the German noun of the third passage and is first explained in
     a remark on the second; here, a passage earlier, it is only
     quaint. The `why` of the tab still says troth; it is not
     printed and still fits.
3. English, caption, the sentence that gives Auden's objection.
   - Old: "… Wagner in English sounds intolerable, and would even as
     a better poem, because the new syllables do not suit the pitch
     and pace of the notes."
   - New: "… Wagner in English sounds intolerable, and would even if
     the translation were the better poem, because the new syllables
     do not suit the pitch and pace of the notes."
   - Fault: a clipped phrase that has to be read twice. The new
     words say what Auden says on p. 473 and no more.

Passage 2 (`refrain`)

4. English, caption, the sentence on the condition.
   - Old: "Twice here Wagner names the condition: a woman true
     <i>bis in den Tod</i>, until death."
   - New: "Twice here Wagner names the condition of the Dutchman’s
     rescue: a woman true <i>bis in den Tod</i>, until death."
   - Fault: "the condition" of what? A reader who opens this tab
     first has not been told. "The condition of his rescue" is the
     page's own name for it (third passage, Word, caption and side
     note), and this caption's last sentence says what it is a
     condition of (only such a woman can free him), so nothing is
     added.
5. Figure, caption, sentence 2.
   - Old: "Its third line addresses him, <b>du</b>, you, pale
     seaman; a direction of Wagner’s, printed after this refrain,
     has her turn to his picture toward the end of the stanza."
   - New: "Its third line addresses him, <b>du</b>, you, pale
     seaman; a stage direction that Wagner’s own edition prints
     after this refrain has Senta turn to his picture toward the end
     of the stanza."
   - Fault: two. "Her" had no one to point to (the caption had named
     only the refrain and its lines); and "printed after this
     refrain" sent the reader to look for a direction that this page
     does not print (the passage stops at the refrain's last line).
     The ground says where it stands: in Wagner's 1871 edition.
6. Scene, caption, sentence 1: cut.
   - Old: "The table follows the refrain through the first two
     scenes of Act 2, with Wagner’s stage directions."
   - Fault: a caption the page does not bear out (the figure is a
     drawing of lanes and dots, no table), and working words in
     print; it also repeated the line printed over the drawing. The
     one thing it carried, that the directions are Wagner's, went
     into change 7. This is the third point of `art.md`.
7. Scene, caption, the sentence on the curtain.
   - Old: "At the curtain Senta is sunk in dreamy contemplation of
     the picture."
   - New: "When the curtain rises Wagner’s stage direction has Senta
     sunk in dreamy contemplation of the picture."
   - Fault: stage shorthand ("at the curtain" can mean the fall as
     well as the rise), and with sentence 1 gone the reader must
     still be told whose words these are.
8. Scene, caption, the sentence on what follows the ballad.
   - Old: "Afterward she has heard nothing and starts like one
     waking, …"
   - New: "Afterward she has heard nothing of what was said and
     starts like one waking, …"
   - Fault: bare "nothing" reads as deafness. The row of the drawing
     it rests on says what she has not heard: what was said.

Passage 3 (`oath`)

9. Rhyme, caption, the sentence that brings Auden in.
   - Old: "He says he has sought death, and Auden’s Wagner hero
     roars for it."
   - New: "He says he has sought death, and in Auden’s lines the
     Wagner hero roars for it."
   - Fault: "Auden’s Wagner hero" is a noun heap that only a reader
     who has just read the head of the page can undo.
10. Rhyme, caption, last sentence.
    - Old: "After the last <b>Tod</b> the direction has her leap
      into the sea and his ship sink at once."
    - New: "After the last <b>Tod</b> the stage direction has her
      leap into the sea and his ship sink at once."
    - Fault: "the direction" is theatre shorthand at its first use
      on this tab.
11. Word, the side note on the compound (row 0.1, word 3), last
    sentence.
    - Old: "Neither dictionary has the compound."
    - New: "The compound is in neither of the dictionaries used
      here."
    - Fault: "neither dictionary" supposes the reader knows which
      two are meant; the note itself names none.

What Auden said (the list under "More from Auden")

12. Entry 2 (*The Enchafèd Flood*, pp. 12–13), the sentence on what
    happens at sea.
    - Old: "What is decisive happens at sea, the choice that counts
      forever, temptation, fall and redemption, and life on shore is
      always trivial."
    - New: "What is decisive happens at sea: the choice that counts
      forever, temptation, fall and redemption. Life on shore is
      always trivial."
    - Fault: a list run into the main clause by commas, so that the
      last clause reads at first as one more item of the list.
13. Entry 3 (the essay of 1969), sentence 1.
    - Old: "… freaks, which have to be listened to in a way unlike
      most operas."
    - New: "… freaks, which have to be listened to differently from
      most operas."
    - Fault: "a way unlike most operas" compares a way with operas.
14. Entry 3, the sentence on what Wagner paints.
    - Old: "No one else paints what is unreasoning, sick, cranky and
      bent on its own ruin in people as it really is, with its spell
      on it."
    - New: "No one else paints what in people is unreasoning, sick,
      cranky and bent on its own ruin as it really is, with its
      spell on it."
    - Fault: "its own ruin in people" reads as one phrase. Same
      words, one of them moved.

Five more: 15 to 18 found when the prose sheet was read through
again after the first fourteen were in, 19 in the pictures taken
after those

15. Passage 1, Beat, caption, the sentence on the call.
    - Old: "The two wind lines end on the call <b>Johohe</b>, marked
      here as the printed tune has it: two short notes, then a long
      one."
    - New: "The two lines about the wind end on the call
      <b>Johohe</b>, marked here as the printed tune has it: two
      short notes, then a long one."
    - Fault: "wind lines" is the writer's own label for two lines,
      and on this tab the reader has no English beside the German to
      tell which lines have wind in them. Said in plain words.
16. Passage 1, Rhyme, caption, sentence 3.
    - Old: "The two wind lines end on the same call."
    - New: "The two lines about the wind end on the same call."
    - Fault: the same label.
17. Passage 3, Rhyme, caption, the sentence on Senta's lines.
    - Old: "In Senta’s lines <b>Tod</b> ends the phrase until death,
      the term of her <b>Treue</b>, troth, and the two words begin
      alike."
    - New: "In Senta’s lines <b>Tod</b> ends the phrase that means
      until death, the limit of her <b>Treue</b>, troth, and the two
      words begin alike."
    - Fault: had to be read twice. "Ends the phrase until death"
      runs on as if "until death" said how long; and "term", next to
      "phrase" and a German word, is taken first for "word". The
      `why` of the tab keeps "term"; it is not printed.
18. What Auden said, entry 5 ("Notes on Music and Opera," p. 473),
    sentence 1.
    - Old: "… a librettist’s verses are meant for the composer and
      not for the public, as a private letter is, and that, …"
    - New: "… a librettist’s verses are meant, like a private
      letter, for the composer and not for the public, and that, …"
    - Fault: the comparison hung after "not for the public" and
      could be read for a moment as its opposite. Auden's own
      sentence calls the verses a private letter to the composer.
19. Passage 3, Word, the same side note as in change 11, its first
    sentence.
    - Old: "Gebot is a command, and the word for each of the Ten
      Commandments; it is kin to English bid."
    - New: "Gebot is a command; it is kin to English bid."
    - Fault: padding. The eleven words cut are, word for word, the
      first sentence of the caption that stands a few lines above
      the note at both widths. The caption keeps them.

Nineteen sentences changed: one cut whole (change 6), one cut in
part (change 19), seventeen reworded. Captions after the changes run
from 99 to 115 words (limit 120). The `why` and `stands` of every tab
were read again against its caption and none needed trimming.

## 3. Titles marked

Asterisks only; no word changed, nothing inside a `quote`. Fourteen
titles in eleven fields, and one in a caption.

- `where`: the opera's title.
- `view.says`: *New Year Letter*.
- `view.source`: *Forewords and Afterwords*, *New Year Letter*, *The
  Collected Poetry of W. H. Auden*.
- `auden[0].says`: *The Enchafèd Flood*; `auden[0].source` and
  `auden[1].source`: the same.
- `auden[2].source`: *Forewords and Afterwords*.
- `auden[3].says`: *New Year Letter* and the *Ring*;
  `auden[3].source`: *New Year Letter*.
- `auden[4].source` and `auden[5].source`: *The Dyer's Hand*.
- Passage 1, Rhyme, caption, last sentence: "for his Siegfried"
  became "for his <i>Siegfried</i>". Captions take `<i>`, not
  asterisks; the list of sources already sets this title in italics.

Left bare on purpose: "the ballad of the Flying Dutchman" in `about`
and "the Flying Dutchman" in the first entry of the list and in the
Word caption of passage 1 name the man of the legend, not the opera.
The essays ("The Greatest of the Monsters", "Notes on Music and
Opera") already stood in curly quotation marks.

In the pictures taken after the change the titles stand upright in
the italic lines (under the heading, under the view, under each
entry) and in italics in the running text, as the kit sets them. This
was the second point of `art.md`.

## 4. Taken out of the list of what Auden said

The list had eight entries and now has six. Two came out. Neither is
leaned on by a caption, a `grounds` item or a `stands` (searched for
the page numbers, the titles and the word chart: nothing is left but
one line of `open`). `view` was not touched.

`CRITIC.md` says to move such entries to the end of `notes.md`. The
launch of this run let me write only `reading.json`, `critic.md` and
`shots/`, so they are kept here instead, whole and in the form the
piece "hamlet" uses. Whoever may write `notes.md` can move this
section there as it stands.

Two entries, true as far as they were checked, and kept in case they
are wanted. They are given as they stood, before any title was
marked.

- **“Making, Knowing and Judging,” in The Dyer’s Hand (1962), p. 48**
  Of all the critical studies of one artist that he knew, Auden ranked
  Nietzsche’s The Case of Wagner highest. However fierce the attack,
  he says, Nietzsche keeps Wagner’s genius and the importance of his
  music before the reader. This book, he adds, was what first taught
  him how to hear Wagner; until then his ideas about him had been
  silly and formed in advance.
  Checked: read in the scan, research/auden/dh.txt, lines 2523–2534,
  on 2026-10-03, between the running heads of pp. 48 and 49.
  (No `quote`.)
  Why it came out: the lecture is on another subject (how a poet
  learns to judge), it names neither this opera nor any passage shown,
  it is not of 1941, and what it adds for this page, that Nietzsche
  was his guide to Wagner, the view at the head already says from the
  essay of 1969. One of two that say the same thing.

- **a chart of 1943, as reproduced in Edward Mendelson, Early Auden,
  Later Auden: A Critical Biography (2017), p. 555**
  On a chart Auden made at Swarthmore College in 1943, the words
  Flying Dutchman appear to stand under the heading The Tragic
  Hero-Outlaw. The chart was read for this page in a reproduction,
  where it is not always clear which column an entry belongs to.
  Checked: read only in the research notes,
  remake/research/C_auden_on_works.md, section 29; the chart was not
  seen in this session.
  (No `quote`.)
  Why it came out: it only shows that he wrote the name down, two
  years after the course; half of the entry is an apology for not
  being sure where on the chart the name stands; and no one in these
  sessions has seen the chart. It read as "everything that was
  found".

What followed from taking them out, all in `reading.json`:

- `sources`: the entry for *The Dyer's Hand* lost the words
  "“Making, Knowing and Judging,” p. 48; " and keeps "“Notes on Music
  and Opera,” pp. 470–73". The entry "W. H. Auden, a chart of 1943,
  as reproduced in Edward Mendelson, *Early Auden, Later Auden: A
  Critical Biography* (2017), p. 555. Not seen in full." is gone
  (sixteen sources before, fifteen now).
- `caveats`, the last one: its second sentence, "His chart of 1943
  was read in a reproduction, and the column in which *Flying
  Dutchman* stands there is not certain.", is cut, because the page
  no longer speaks of the chart. The first sentence stands.
- No entry had to be renamed: the two taken out were the last two,
  and "In the same book" (entry 2) and "In the same notes" (entry 6)
  still follow the entries that name the book and the notes.
- Not changed, for the lead: `open` still has the line that says his
  note of 1941 and the Swarthmore chart were read only in the
  research notes. `open` is not printed.

The six that stay, and why: entries 1 and 2 (*The Enchafèd Flood*,
pp. 5 and 12–13) and entry 5 (*The Dyer's Hand*, p. 473) are leaned on
by captions of passage 1; entry 3 is the essay of 1969 behind the
view; entry 4 is his own note of 1941 to the lines quoted at the
head; entry 6 (opera as willfulness, the characters carried away)
bears on the Scene tab, where a direction has Senta carried away.

## 5. The three things the artist raised, weighed

**The row "Just after" of the Scene drawing, where the cell for who
sings says "no one".** The artist is right, and it is worse on the
page than in the file.

- Against the text. Between Senta's own three lines (the English
  printed here, `dutchman/act-2`, block 62) and her next words (block
  74) five speeches stand, blocks 64 to 72: the nurse with all the
  girls, Erik, the girls, the nurse, Erik. The German libretto the
  passages are cut from has the same five at that place. The last of
  them is the news that her father is coming, which the row's own
  stage direction names.
- Against the drawing. "No one" would be true if the column meant
  "who sings the refrain" (the working `grounds` put it so), but rows
  1, 2 and 8 give singers of other things, so a reader takes the
  column as "who sings", and then the row is false.
- As a reader. Every direction is printed without its subject (the
  column is headed with Senta's name). Under "no one" the italic line
  that begins with a verb reads on from it, and the row says that no
  one stayed standing and no one heard.

The cell is in `facts`, which I may not touch. What I would print
there is in section 6.

**Titles in what Auden said that had no asterisks.** Right; marked.
Section 3.

**The Scene caption called the figure "The table".** The artist
offered two ways: drop the script so that the kit's plain table
returns, or keep the word. Neither was needed. The sentence said
nothing that the line printed over the drawing does not say, so it is
cut (change 6) and the caption now begins with what the first row
shows. The drawing stays as the artist made it.

## 6. The words the Scene drawing prints

`site/js/pieces/dutchman.js` types no word of the opera. Apart from
the four phrases of its key, everything it prints is taken from the
`facts` of the tab: the cell "when" as the name of the moment (a
link), the cells "who sings" and "what is sung" joined by a colon,
and the longest remaining cell in italics. I read them in the
pictures of 08:00 and 08:12 UTC at both widths. Neither the script
nor the facts were touched. Rows are counted from 1.

Should change (all in `facts`):

- **Row 7, "Just after": "no one".** For the reasons in section 5.
  Words the text bears out, and which the script draws without a new
  lane: who sings, "the girls, the nurse and Erik"; what is sung,
  "cries of alarm, then the news that her father is coming". The
  script takes the words before the first comma as the voice, so the
  dot falls on the lane of the girls and the thread, now broken
  between rows 6 and 8, runs through. I would keep a semicolon out of
  that cell: a clause after one that began with Erik's name would
  draw the ring of "joins in" on his lane, and he joins nothing
  there. The direction under it can stay as it is.
- **The line over the drawing: "who sings it each time".** "It" is
  the refrain, which fits five rows of nine. If row 7 is given its
  singers, "who sings each time" is the truer line. It is wording and
  would have been mine, but as long as row 7 says "no one" the word
  "it" is all that keeps that row from being flatly false, so the two
  must change together.
- **Row 9, "The end of Scene 2": "Senta, alone, softly: the close of
  the refrain".** The name of the moment is a link to block 162 of
  the English printed here. What a reader finds there in Senta's
  mouth is the two-line question the girls sang after the third
  stanza (block 60); the German libretto the passages are cut from
  gives the first words of that same question and "etc." The row
  follows the libretto of 1901, as `stands` says; the second
  caveat says only that the last return "differs by edition", and the
  detail is in `open`, which is not printed. A reader who follows the
  link will think the page mistaken. Either the cell says whose text
  it follows, or the caveat is given the detail that `open` has.

May stay, though I stopped at each:

- Row 4 prints "Senta; the girls softly join in the closing rhyme:
  the refrain". Set on one line, the colon reads for a moment as if
  the closing rhyme were the refrain. The caption beside it says the
  same thing clearly.
- Row 2 holds in its column of directions, in brackets, what the
  nurse then says. It says so itself ("in her own lines"). It is the
  one place where that column is not a direction.
- The key ("Senta sings", "another sings", "joins in", "from one
  singer to the next") and the three column names set as a legend
  over the rows are plain and need nothing.

## 7. What recurs, with counts

Counted in the page as it now stands: ten captions of 65 sentences,
26 small notes (two numbered remarks on Beat, eleven on the two
English tabs, thirteen side notes on the two Word tabs), six entries
under "More from Auden".

- **Auden brought into a caption: 6 of 10.** Passage 1 Word and
  English; passage 2 Figure, Verbs and Scene; passage 3 Rhyme. In
  four he is the close (passage 1 Word and English, passage 2 Figure
  and Scene); in the other two a sentence about the text follows
  him. Four captions do without him. The frames differ: "Auden
  sets", "Auden's objection … lies elsewhere", "Nietzsche, Auden's
  best guide", "In Auden's lines on Wagner" twice, "in Auden's lines
  the Wagner hero" once (by my change 9). By the count of
  `CRITIC.md` that is the method and no tic. One thing a reader of every tab will notice: the same two
  lines of 1941 are the reason given on three tabs (Verbs, Scene,
  passage 3 Rhyme). Each takes a different word of them (the verb,
  "passive as in dreams", the hero who roars for death), so I let all
  three stand.
- **Things said twice on one tab, in the caption and in the small
  notes under it.** Passage 1, Word: the three nouns of the close are
  explained in the caption and again, in other words and with the
  dictionary's examples, in three side notes. Passage 2, English:
  "is to win his love and share his treasures" stands in the caption
  and in remark 3, and the English line it renders is printed beside
  them. Passage 3, Word: one sentence stood word for word in both
  (cut from the note, change 19). The rest I left: the small notes
  belong to single words or pairs and the caption makes the point,
  so each has a use; but on those tabs the poet could let the notes
  say only what the caption does not.
- **"until death": 7 in captions, 3 in small notes.** It is the
  phrase the piece is about and stands three times in the passages.
- **The pair "the Dutchman states the condition in Act 3 / Senta's
  last line repeats it": closes 2 captions** (passage 2 English,
  passage 3 Word). Different passages, and each needs it.
- **"troth": 3 in captions, 3 in small notes, 1 in a caveat** (4 in
  captions before change 2). Explained in remark 4 of passage 2 and
  in a side note of passage 3.
- **"The English" beginning the second half of a remark: 8 of the 11
  remarks** on the two English tabs. That is what those tabs are
  for, and what follows varies.
- **Colons: 20 in the 65 caption sentences** (four each in Figure,
  Verbs and passage 3 Word; none in Scene and passage 3 Rhyme).
  Nearly all are the frame "statement: the German word, its
  English". It is how a caption points at a word; I found none that
  could go without loss.
- **"kin" for a related word: 4**, all in small notes. Short, and
  clearer than the term of the trade.
- **"Hui imitates": 3**, once on each of three tabs, any one of
  which a reader may open alone.
- **"he writes" 5, "he says" 2**: six of the seven are in the list,
  which is how a paraphrase marks itself.
- **Sentence openers:** "In Act 1/2/3" 5 (the matter of passage 3),
  "After the" 3.
- **Not found:** any word from the lists of stock or inflated words;
  "not X but Y" (the one contrast of that shape, syllables and not
  words, is Auden's own); a question or a "we"; working words in what
  is printed. The checker printed no warnings before or after.

## 8. Sentences I doubted and did not change

1. **Passage 2, Figure, caption, sentence 2: "toward the end of the
   stanza".** The English tab of the same passage says the refrain is
   "sung after the first stanza", so there a stanza ends before its
   refrain. Here the sentence needs Wagner's sense, in which the
   stanza takes in the refrain; the `grounds` item says so in
   brackets and the caption does not. A reader may fairly ask how she
   can turn "toward the end of the stanza" at a line that comes after
   it. To say it would add a clause from the grounds to the caption
   (and take it past 120 words), so it is the poet's or the lead's.
2. **The same caption, last sentence.** It repeats the head of the
   page nearly word for word (Nietzsche the best guide; one theme in
   opera after opera; someone wants to be saved). On this tab it is
   the reason given for Senta's "I", so it does work. "Auden's best
   guide" can also be read as "the best guide Auden had"; the two
   come to the same here.
3. **Passage 2, Verbs, caption, last sentence** (her wish form
   becomes "am" in the last scene). A short sentence at the close,
   which is where I was told to look. It is a fact of the text with
   its page in `stands`, and it draws no moral. But the line it
   speaks of is not among the passages shown (the third passage has
   the last couplet, where that word does not occur), so the reader
   cannot see it. Left.
4. **The same caption, sentence 1.** After its colon the sentence
   has to carry two German words and three English glosses, with
   five commas, before it can finish. It is the page's way of
   glossing and I found no order that reads better.
5. **Passage 2, Figure, caption: "in his oath".** The oath is in the
   second stanza, which the page does not show; only `stands` says
   where. Left because the sentence itself says the word was used
   "once before", that is, elsewhere in the ballad.
6. **Passage 1, English, caption, sentence 5: "Auden's objection to
   opera in translation lies elsewhere."** A signpost by its form.
   Kept because it tells the reader something needed at that point:
   the losses just listed are not what Auden objected to.
7. **The same caption, last sentence, and entry 5 of the list.** The
   paraphrase follows Auden's sentence on p. 473 in his order and
   keeps runs of three and four of his words (on Wagner in English,
   and on the new syllables). No run comes near the brief's limit
   of 25 and his own short sentence is quoted with its page, so I
   left both; the lead should know how close they run. My change 3
   shares three more plain words in a row with his sentence ("the
   translation were"); change 18 shares none that were not there.
8. **Second caveat: the English given for the line as Wagner printed
   it in 1871.** It pairs "I" with "her troth", which reads as a
   slip. The German has a clause in the third person there, so "let
   me be the one who redeems you through her troth" would keep it
   without the clash. It renders a line of the work, so it is not
   mine to reword. `open` has the same English.
9. **Passage 1, Beat, caption, last sentence** (what the arrow line
   says). Eight words at the close. It is what the line says and it
   leaves the reader to connect it with the quick notes before it;
   that is rule two done without a verdict. Left.

No tab pays nothing. Each of the ten leaves the reader with one thing
about how the lines are made and what it does there. The one I
weighed longest is passage 1, Rhyme: its last sentence (Wagner in
1851 on end rhyme) is set beside the lines without a word on what it
has to do with them. The reader can make the step (the tie by first
letter is the kind of rhyme he later chose), and to say more would
be to pronounce. Left.

## 9. What on the page got in the way of reading

The faults of the kit that `art.md` lists are not repeated here.
These are what else stopped me, as a reader.

- **The side notes on the two Word tabs at 1280 px.** The word in
  bold and then its note in grey italics, the smallest and faintest
  running text on the page: 13 px in the kit's stylesheet (the rule
  for everything set beside a passage), lines 18 px apart in the
  picture against 25 for the caption above them. I read them with
  effort. They hold what the dictionaries say, which is the evidence
  of those tabs, and the numbered remarks on the English tabs are
  set the same way. On a phone the same type is larger in proportion
  and reads well. This is the kit's and holds for every piece.
- **The points of omission before the last two words of the first
  stanza.** As a reader I took them to mean that words of the line
  had been left out. `open` explains that only a dash is missing; a
  reader has no way to know that.
- **The row "Just after" of the Scene drawing**, which reads on from
  "no one" into the direction under it (sections 5 and 6).
- **"More from Auden" was long for a phone**: eight entries, about
  three screens of 844 px. With six it is about two and a half
  (2,108 px in the picture of 08:12), and each entry now bears on
  something shown above it.
- **Order.** Nothing is in the wrong order. The first tab of each
  passage is the right one to open on, and the page can be read from
  the top without opening a second tab.

## 10. Tools run, and how the work stands

- `node build/tools/check-reading.mjs dutchman --print`: before any
  change, after each of the three rounds of changes, and twice more
  while this record was finished (six runs). Each ended the same
  way; the last three lines of the last run, at 08:15 UTC, with
  `reading.json` as it has stood since 08:08:

  ```
  no problems
  no warnings
  the printed notes are fit to print
  ```

- `node build/pieces.mjs dutchman`: after each round; the last at
  08:09 UTC, after the last change to `reading.json` (08:08).
- `node build/tools/prose.mjs dutchman`: at 07:31 (before), and after
  each round; the sheet in `review/remake/prose/dutchman.md` is of
  the final text (4,397 words).
- `node build/tools/shoot.mjs dutchman --out
  remake/works/dutchman/shots --page`: twice, as allowed. At 07:59,
  after changes 1 to 18; at 08:12, after change 19, so that the 34
  pictures in `shots/` show the page as it now stands. Both ended
  "nothing reported; now look at the pictures". The whole page at
  1280, the Scene tab at both widths, and the tabs whose captions
  changed were opened and read. The artist's three test pictures in
  `shots/` were left as they were.
- Nothing was refused by the permission system of this run.
- Not done, by the rules of this run: `notes.md` was not written
  (section 4 holds what would go there); no `turn` was set or
  changed; `site/js/pieces/dutchman.js` and the `facts` were not
  touched; nothing in `view` but the asterisks of section 3, and
  nothing in any `quote`, `grounds` or mark.

Left for the lead to decide:

1. The row "Just after" of the Scene drawing and, with it, the word
   "it" in the line over the drawing (section 6).
2. The last row of the drawing against the text the page prints, or
   a fuller second caveat (section 6).
3. Whether the two entries taken out should stay out, and moving
   them to `notes.md`; the line of `open` that still names the chart
   (section 4).
4. "Toward the end of the stanza" in the Figure caption (section 8,
   item 1), and the English of the line in the second caveat
   (section 8, item 8).
5. How close two paraphrases run to Auden's sentence on p. 473
   (section 8, item 7).
6. The size of the side notes at 1280 px (section 9).
