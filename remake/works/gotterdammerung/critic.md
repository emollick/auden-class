# Götterdämmerung: the critic's record

3 October 2026, 11:53 to 12:46 UTC.

Nothing of the libretto and nothing of Auden's prose is typed out here.
Words of the passages are pointed at by row and word number, as the
checker prints them (`p:` marks a row of Armour's English; words are
counted from 0). The sentences quoted below are the page's own captions,
notes and paraphrases. Where one of them carries more than a word or two
of a passage, the place is given and the words are not repeated.

## 0. What was read, and how

- `remake/BRIEF.md` and `remake/CRITIC.md`, whole. `exam.md`, `art.md`
  and `notes.md` in this folder, whole. "The printed notes" in
  `remake/EXAMINER.md`. The drawing's script,
  `site/js/pieces/gotterdammerung.js`, for the words it prints.
- The page was built and its prose printed at 11:53 (3,891 words), and
  `review/remake/prose/gotterdammerung.md` was read through once before
  anything was marked. The pictures first read were the artist's of
  11:39 to 11:41 in `shots/`: the page in slices at 1280 and 390, all
  eight tabs, and the close pictures of the drawing with the pointer on
  a mark and with "Line by line" open. The kit's files were last
  changed at 11:05:49 and `reading.json` at 09:04:29, so those pictures
  showed the page as it stood when I began.
- After the changes: the checker with `--print`, the build and the
  prose tool again (last at 12:40; 3,770 words), and the picture tool
  twice, at 12:26 and 12:32, which is all the lead allows. Each run
  printed "nothing reported". In the new pictures I read the head at
  1280 and 390, all eight tabs at 1280 (the first of them in the slice
  of the page that holds it), two tabs at 390, and the slices that hold
  the list and the sources.
- **The pictures now in `shots/` are of 12:32. Two notes were cut after
  that** (changes 6 and 11 below), so the lists beside "Dawn" and "Now"
  in those pictures each show one note that the page no longer prints.
  Nothing else differs. A note cut earlier in the same way (change 5)
  is in the pictures: the gloss stays under its words and the list
  beside the passage is one entry shorter.
- Nothing was refused by the permission system. Once, at 12:22, the
  check that passes each command timed out and said to try again; the
  same command, unchanged, went through the second time.
- The script was not edited, and nothing in `facts`, `grounds`, `view`,
  a quotation, a mark, or any `turn`, `join`, `heading`, `speakers`,
  `beside` or `label`. A comparison of the file with the copy I took
  before I began shows 31 places changed, every one a caption, a note,
  a remark, a paraphrase in the list, `where`, one line of `sources`
  or one caveat. The anchors the checker prints are the same, line for
  line, as before.
- Nothing was written in `notes.md` but the entry taken out of the
  list (section 4).

## 1. The three points of wording the artist left (art.md, section 5)

1. **Who Armour is.** The page named her in five tabs and said who she
   is only under its sources. The line under the title now ends "with
   the English of Margaret Armour (1911)" (`where`), as the Castle page
   names its translators there. `about` stands at 89 words of 90 and
   was left alone. The new words hold whichever way the two versions
   are set. If the kit comes to show the names of the two versions
   over them, "Armour" there will already have been explained.
2. **Where the English stands.** The first sentence of the caption of
   the second passage's "English" tab said the staves were Wagner's
   "above" and Armour's "beneath". It now says "Wagner’s in the German
   and Armour’s in the English". One numbered remark in the third
   passage said "two lines up"; it now says "two lines earlier", which
   is the order of reading and not of the page. No other printed
   sentence says above, beneath, beside or under of the two versions
   (searched in the prose sheet).
3. **Two colons in one printed line.** The key is
   `plates[2].lenses[2].facts.ends[1].told[2].says` (line 1,263,
   Brünnhilde; line 781 of `reading.json`). The script (its line 217)
   prints the speaker, the line number, a colon and then `says`, and
   this `says` has a colon of its own. `facts` is not mine to edit.
   The smallest mend is a comma for that colon: "on the same
   spear-point, may its sharpness kill him". Or, in the form of
   Siegfried's line just before it (line 1,251): "let the sharpness of
   the same spear-point kill him".

   Two more in the same list, for the lead or the artist:
   - `…ends[1].told[3].says` (line 1,363, Hagen; line 788 of the file):
     "only his back" follows "Hagen, line 1,363:" and reads for a moment
     as Hagen's back. Proposed: "only Siegfried’s back".
   - `…ends[1].told[0].says` (line 896, Hagen; line 767 of the file):
     "through him" is Hagen, by the list's habit of putting the speaker
     in the third person. It can be read, and I only note it.

   The lines I propose to change, and those round them, were read
   against the hosted text when the page was first read (Act 2, blocks
   25, 276, 279, 319 to 321 and 377; Act 3, block 130), and none says
   more than its line. The script's own strings (the key, "lines of
   verse", "Line by line", "shown on this page") need nothing.

## 2. Every change of wording

Old, then new, then the fault. "…" stands for words left as they were.
Sentences are counted from 1 within their caption or entry.

**The head**

1. `where`. Old: "*Götterdämmerung*, the Prelude and Act 3". New: the
   same, then ", with the English of Margaret Armour (1911)". A name
   used in five tabs and never introduced.

**First passage (`norn`)**

2. "Stave", caption, sentence 4. Old: "Auden, in 1944, called the
   <i>Ring</i>’s text alliterative verse … is a word written German
   lost early." New: "… called the text of the <i>Ring</i> alliterative
   verse … is a word that written German lost early." Misread twice at
   first: a possessive hung on a title, and "a word written German"
   taken as "a word written".
3. "Dawn", caption, sentence 3. Old: "… came of confusing two Old Norse
   names …". New: "… came from confusing …". A quaint turn where the
   ordinary one serves.
4. "Dawn", caption, sentence 6. Old: "… whether day is dawning; the
   light is fire." New: "… whether day is dawning; the answer is that
   the light is fire." A gnomic clause: the reader could not tell that
   it was the third Norn's answer. The line on what the caption stands
   on already says so.
5. "Dawn", the note under p:19.15 w1–2 (`notes[6].note`). Old: "Armour
   keeps the dawn and adds the darkness." Cut. It was the fifth
   sentence of the caption beside it over again, a word different. The
   gloss under the words says what is needed and stays, with its
   `source`.
6. "Dawn", the note under 6.0 w0 (`notes[3].note`). Old: "*Dämmerung*
   is twilight, of morning or of evening; with *auf*, the last word of
   the line, the verb means to dawn, to rise in half-light." Cut. The
   third and fourth sentences of the caption say all of it, and the
   glosses under 6.0 w0 and w3 stay.

**Second passage (`rhine`)**

7. "English", caption, sentence 1. Old: "The colored letters are
   staves, Wagner’s above and Armour’s beneath." New: "… Wagner’s in
   the German and Armour’s in the English." Tied to one way of setting
   the page (section 1).
8. "English", caption, last sentence. Old: "She lets go his <b>w</b>
   …". New: "She drops his <b>w</b> …". A literary turn where the
   ordinary word serves.

**Third passage (`brand`)**

9. "Now", caption, sentence 4. Old: "Here the adjective is gone and
   the word is <b>nun</b>, now." New: "Here the gods are not called
   eternal, and the word is <b>nun</b>, now." A grammar word that sent
   the reader back to find which adjective; the plain fact is shorter
   to take in.
10. "Now", caption, sentence 6. Old: "She sends his ravens home … for
    the wish Wotan whispered." New: "She sends Wotan’s ravens home …
    for the wish he whispered." "His" came before the man was named,
    after two sentences about the Norn's god.
11. "Now", the note under 7.0 w2–3 (`notes[1].note`). Old: "Sung twice
    in the libretto: by the third Norn, who called the gods eternal,
    and here." Cut. The second and third sentences of the caption say
    all of it. The gloss stays, with its `source`.
12. "English", the remark on row 2.0 (`ties[0].say`). Old: "… two
    lines up …". New: "… two lines earlier …". Tied to one way of
    setting the page.
13. "English", the remark on row 8.0 (`ties[3].say`). Old: "… here the
    gods are drawing near, and the verb that came back is gone." New:
    "… here the gods are *drawing near*, so in her English the verb
    does not come back." "Came back is gone" stopped me; it did not say
    in which language the verb came back.
14. "English", caption, sentence 3. Old: "What her English hardly
    shows is the return." New: "Her English hardly shows that the
    Norn’s sentence returns." A sentence turned round for effect, with
    "the return" of something not yet named.
15. "English", caption, sentence 4. Old: "… so of the Norn’s sentence
    only <i>Gods</i> comes back, with a stave on d." New: "… so of that
    sentence only <i>Gods</i> and a stave on <i>d</i> come back." The
    trailing phrase could be taken for a stave that the one word
    carries. The letter is now set as the <i>f</i> is in the other
    "English" caption. The words on d stand in both passages (p:19.14
    w6, p:19.15 w0 and w2; p:317.7 w4, p:317.8 w3); neither plate marks
    them.
16. "English", caption, sentence 5. Old: "Both her throws name no
    thrower, <i>is thrown</i> there and <i>thrown be</i> here." New:
    "In both places her English names no thrower: <i>is thrown</i>
    there and <i>thrown be</i> here." "Her throws" is shorthand the
    reader has to undo.
17. "Told", caption, sentence 1. Old: "The line is the libretto: …".
    New: "The line down the page is the libretto: …". On a page about
    lines of verse the reader needs to be told that this is the drawn
    one. It runs down the page at both widths.
18. "Told", caption, sentence 5. Old: "The Rhinemaidens give him the
    day …". New: "The Rhinemaidens tell him the day …". "Give him the
    day" has another meaning in English.

**More from Auden**

19. `auden[0].says`, sentence 1. Old: "In the same lecture Auden tries
    …". New: "In the lecture of 1940 Auden tries …". "The same" pointed
    back over three passages to the head of the page.
20. `auden[1].says`, sentence 1. Old: "… because he held him to be the
    greatest modern artist …". New: "… because he thought him the
    greatest modern artist …". Stiff.
21. `auden[1].says`, sentence 2. Old: "… turning recitative into an
    unending melody …". New: "… turning recitative, sung speech, into
    an unending melody …". A word of the trade left unexplained.
22. `auden[1].says`, sentences 3 and 4. Old: "His explanation of the
    illogic is the composer. Suffering was what Wagner’s art could
    express, and the characters act against sense so that he can keep
    writing the music he did best." New: "His explanation of the
    characters’ illogic is the composer: suffering was what Wagner’s
    art could express, and they act against sense so that he can keep
    writing the music he did best." A short sentence set down for
    effect, and "the illogic" of no one named. Joined to the sentence
    that explains it. The entry is still 110 words.
23. `auden[6].says`, sentence 2. Old: "In *The Dyer’s Hand* he says
    this book first opened his ears …". New: "… he says Nietzsche’s
    book first opened his ears …". "This book" stood next to the title
    of another book.
24. `auden[6].says`, sentence 3. Old: "In the same book he is mostly
    against opera sung in translation …". New: "Elsewhere in *The
    Dyer’s Hand* Auden is mostly against …". After a sentence on
    Nietzsche's book, "the same book" and "he" could be that book and
    Nietzsche.
25. `auden[6].says`, sentence 4. Old: "Wagner in English is not to be
    borne, he says …". New: "Wagner in English is unbearable to hear,
    he says …". Mock-antique. Auden's own sentence is about how it
    sounds (the scan of *The Dyer's Hand*, lines 22281 and 22282), so
    "to hear" adds nothing to him.
26. `auden[7].says` (it was `auden[8]`), sentence 1. Old: "The same
    review closes on Wagner’s people." New: "Reviewing a life of Wagner
    in 1969, Auden closes on Wagner’s people." The entry before it,
    which named the review, is gone (section 4).
27. The same entry, sentence 2. Old: "What Wagner achieved, Auden says,
    is not what he meant to: …". New: "What Wagner achieved, the review
    says, is not what he intended: …". The clause ended on a bare "to".
    "Auden" is now in the sentence before, so it is not said twice
    running.
28. The same entry, sentence 3. Old: "… the operas, he adds, by
    recognizing himself …". New: "… the operas, Auden adds, by
    recognizing himself …". "He" had been Wagner all through the
    sentence before.

**Sources**

29. `sources[7]`. Old: "… pp. 251–52 and 255." New: "… p. 255." Pages
    251 and 252 were used only by the entry taken out.

That is 28 changes of wording to 29 printed sentences: 26 reworded
(two of them joined into one) and 3 notes cut. None is a quotation,
and none changes what a sentence says is so. No caption sentence was
cut, so each lens's `why` and its line on what the caption stands on
fit as before. The longest caption is 113 words.

## 3. Marks added, with no change of wording

In the small italic notes a word named as a word now stands between
asterisks, so that it is set upright.

- First passage, "Dawn": the note under 5.0 w1 (Armour's one word for
  it).
- Second passage, "Knowing": the notes under 0.0 w1 (the two German
  words), 1.0 w0–1 (the simple verb), 6.0 w1 (English *read*) and
  p:97.1 w2–3 (*Rede*, *read*, *does not*, *cannot*).
- Third passage, "Now": the notes under 1.0 w0 (the noun *rune*), 8.0
  w0 (the verb's last word), 8.0 w1 (the two words of the Norn's
  line), 9.0 w1–2 (the Norn's four words) and 9.0 w4 (English
  *brand*).
- Third passage, "English": all five numbered remarks (the words of
  the two versions that each remark names, and the letter *r*).
- `caveats[0]`: *strong*, *wise* and *once*, as the fifth caveat
  already marks its two German words.

That is 10 notes, 5 remarks and 1 caveat. In the new pictures the
marked words stand upright in the notes ("Dawn", "Knowing", "Now" and
"English" at 1280; "English" at 390). No gloss names a word of another
language, so no gloss was marked. Every title in `about`, `where`,
`view.says`, the list and the sources was already marked. The
headwords that follow "under" in the lines on what each caption stands
on were left bare, as in the Tempest piece.

## 4. The list under "More from Auden"

There were nine entries, and the examiner kept all nine. Above eight,
CRITIC.md asks of each whether the page would miss it. Six cannot go.
Captions lean on four: the lecture's two readings ("Now"), the radio
notes of 1944 ("Stave"), Ansen's record ("Told") and the talk of 1955
("Against"). The verse and note of *New Year Letter* were printed in
1941. The second entry gives Auden's own reason for the oddness that
the head of the page reports. Nothing on the page leans on any of the
other three.

**Taken out:** the first of the two entries from the review of 1969
(it was `auden[7]`; its source was pp. 251–52). It set out the rules
of Wagner's *Opera and Drama*, said which operas keep them, and put
this opera beside one of Verdi's, as Shaw had. My reasons:

- It is the entry made most of other people's views: Wagner's theory
  and Shaw's comparison. The person the site is for asked not to be
  bogged down in exegesis and critics.
- Its first half says of the verse what the "Stave" caption already
  gives from Wagner's own writing: no end-rhyme, the accents of
  speech.
- Its second half is about drugged drinks, plotters and the chorus,
  and none of the three passages shown is one of those scenes.
- The entry's own `checked` says that the list of those features
  stands in quotation marks in Auden's sentence and that whose words
  they are was not traced. The paraphrase gave them as his.

What followed from it: the entry went whole (`source`, `says` and
`checked`; it had no `quote`) to the end of `notes.md`, under "Taken
out of the list of what Auden said"; `sources[7]` lost pp. 251–52
(change 29); and the entry after it, which began "The same review",
was given the name it lacked (changes 26 to 28).

**Kept, and for the lead to weigh:**

- **The poet chose the other way.** The poet's notes (section 7) say
  that if nine is too many the one to cut is the last, the close of
  the same review: it speaks of Wagner's heroes at large, and the
  Dutchman page gives the same paragraph (its `auden[2]`). The entry I
  took out names this opera. I kept the close because it finishes what
  the head of the page begins. It is Auden's own judgment of the people
  the three passages show, twenty-nine years after the lecture, and the
  only entry that says what a listener is to do with them; what the
  other entry says of this opera is about scenes the page does not
  show. But a reader of both pages meets the close twice. The Tristan
  page (`auden[10]`) gives the rules of 1851 from pp. 251–52, so half
  of the entry I took out is said there as well. If the lead prefers
  the poet's choice, the entry is whole in `notes.md`: put it back as
  the last entry, take out the close, and make `sources[7]` end
  "pp. 251–52".
- The entry on Nietzsche and on opera in translation stays as the only
  one tied to the course as it was taught (the reading list) and to
  the English printed with every line.
- The entry on the radio notes of 1944 has two sentences that only
  show he named things: that he lists the Norns, and that he tells his
  listeners the plot of the later operas. No caption leans on them.
  To cut them I would have had to change the entry's page reference
  (p. 505 is theirs), which is not mine to touch, so they stand.
- The list is now eight entries and 800 words. The eight captions
  together are 872.

## 5. What recurs, with counts

Counted in the file as it now stands: 8 captions of 53 sentences and
872 words; 8 entries in the list; 18 notes and remarks.

- **Auden in the captions.** He is named 7 times, in 6 of the 8
  captions (neither "English" caption names him). Three captions close
  on him ("Dawn", "Against", "Now"). The sentence quoted at the head of
  the page is paraphrased in three captions ("Against", "Knowing",
  "Told"), two of them on one passage. I left these. Each tab has to
  give its reason to a reader who opens only that tab, the three
  paraphrases are worded differently, and his other five remarks in
  the captions are five different ones. But the lecture of 1940 is
  drawn on in the head, in five captions and in two entries of the
  list, and a reader who goes through every tab will feel it.
- **Sentences said twice.** "Wagner held that a stave makes one image
  of the words it joins": 2 captions (first passage "Stave", second
  passage "English"). "The colored letters are staves": in the same 2.
  "Sung twice in the libretto": it was 3 times and is now 2 (a note on
  the first passage, the caption of "Now"). Left: they are on
  different passages.
- **Notes that say the caption again.** There were 21 notes and
  remarks. Three said nothing that the caption beside them had not
  said, and were cut (changes 5, 6 and 11). Of the 18 left, 13 still
  say again in part something in their caption: 4 of 5 under
  "Knowing", 4 of 5 under "Now", and all 5 remarks under the third
  passage's "English". Each of those adds something of its own (a
  dictionary's wording, a place in Act 1, the German words, where in
  the line a word stands), so I left them. The remarks cannot go: they
  are the key to the numbered marks.
- **Colons.** 17 in the 53 sentences of the captions and 10 in the
  list. In the captions each one brings in the words of the passage
  that the sentence points at.
- **Semicolons.** 7 in the captions, 7 in the 18 notes. None changed.
- **"Here".** 8 times in the captions, each time for "in this
  passage".
- **The faults in the 28 changes.** A pronoun, "the same" or "the"
  with no clear owner: 8 (changes 9, 10, 19, 22, 23, 24, 26, 28).
  Plainness pressed too far, or a quaint or stiff turn: 12 (2, 3, 4,
  8, 13, 14, 15, 16, 18, 20, 25, 27). A note that only repeats: 3 (5,
  6, 11). Something not introduced or explained: 3 (1, 17, 21). Words
  tied to one way of setting the page: 2 (7, 12).
- **Not found:** a dash inside a sentence, a question, "we", "not X
  but Y", a word from the brief's list of stock words, praise offered
  as fact. The checker printed no warnings before my changes or after.

## 6. Sentences doubted and not changed

1. "Against", caption, last sentence (the ring does not corrupt
   Siegfried). It is Auden's and true to him, but it is about the
   ring's effect and the tab is about a figure of two halves; the
   sentence before it already gives the reason. A `grounds` item and
   the line on what the caption stands on both lean on it, and the
   examiner rewrote it, so it is not mine to cut.
2. "Against", caption, sentence 4, its first three words. "A" before a
   superlative reads as a slip in English; it follows the German of
   7.0. A rendering of the passage is not mine to change.
3. "Stave", caption, last sentence. That a stave makes one image of
   opposites is Wagner's (the grounds give the pages). That the two
   words named after "here" are such a pair is the poet's own
   application: notes.md, section 4, says so, and says Wagner's
   examples are of opposite feelings. It is the one place where a
   caption applies a source to the lines and does not only report it.
   The examiner passed it.
4. "Now", caption, sentence 1 ("… is the third Norn’s, come true"). The
   voice of a verdict in two words. Kept, because the next four
   sentences show it word by word and "come true" is what happens on
   the stage.
5. The third passage's "English", caption, sentence 4: "a stave on
   <i>d</i>". The words are there to be read in both passages (change
   15 gives the places), but no mark on either plate shows them. The
   reader has to find them.
6. `view.says`, sentence 2: "here the actors know as well". "Actors"
   is Auden's word for the people of the story and stands in the
   quotation beside it; a reader may take it for the singers. `view`
   is not mine to touch.
7. `auden[2].says`, sentence 3: "the Romantic heresy of setting the
   necessity of cause above the necessity of logic". The hardest
   phrase on the page. It keeps to Auden's own terms, and his note was
   read only in snippets, so a plainer wording from me would be a guess
   at what he meant.
8. "Told", the words over the drawing: "each end", before the reader
   has been told there are two. The two heads just under it say which.

No tab only names things: each says how its passage is made and gives
a reason from Wagner, from Auden or from the lines. No paraphrase of
Auden read to me as saying more than a man would say in passing; the
nearest was in the entry taken out (section 4).

## 7. What on the page got in the way of reading

The artist has reported the faults of the kit, and they are left out.

- The second passage's "English" caption names first a stave on two
  different vowels (3.0 w0 and 4.0 w1) and does not say that any vowel
  staves with any other. Only the first passage's "Stave" caption says
  so. A reader who opens this tab first will not see why those two
  letters are a pair. The caption has room for the five words, but
  they would be a claim added to it, so I leave them to the lead.
- The captions of "Now" and of the third passage's "English" set this
  passage against the first, which is two passages up the page. They
  give the words, so nothing is missing, but the comparison cannot be
  seen.
- The list under the passages is nearly as long as all the captions
  together (section 4).

## 8. Left for the lead to decide

1. Which of the two entries from the review of 1969 stays (section 4).
2. The three strings in `facts` (section 1, point 3).
3. Whether the last two sentences of the entry on the radio notes of
   1944 stay (section 4).
4. Whether the second passage's "English" caption should say that
   vowels count as alike (section 7).
5. The doubts in section 6, above all 1 and 3.

## 9. The checker's last lines

`node build/tools/check-reading.mjs gotterdammerung --print`, run at
12:40 UTC after the last change and again at 12:45, exit 0 both times:

```
no problems
no warnings
the printed notes are fit to print
```

`node build/pieces.mjs gotterdammerung` then built the page, exit 0
(last at 12:45).
