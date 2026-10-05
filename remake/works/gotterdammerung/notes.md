# Götterdämmerung: the poet's notes

Written on 3 October 2026 for the examiner, the artist and the lead. The
reading is `reading.json` in this folder. `node build/tools/check-reading.mjs
gotterdammerung --print` ends with "no problems", "no warnings" and "the
printed notes are fit to print".

Nothing of the libretto is typed out here. Words are pointed at by row and
word number as the checker prints them (`p:` marks a row of Armour's
English), or named singly. What Auden wrote is given in my words; the piece
has its two quotations (`view.quote`, 24 words, and `auden[0].quote`, 17
words) and takes no more.

## 1. What the piece is built to show

Auden's view, from his lecture of 1940: the people of the *Ring* know
beforehand that their mistakes are mistakes; they explain what is coming
and act against what they know. His own example is the burning of Valhalla
with wood of the World Ash Tree.

The three passages follow that:

1. **norn** (Prelude): the third Norn foretells exactly that fire, and the
   end of the gods, in the two words of the opera's title.
2. **rhine** (Act 3, Scene 1): the Rhinemaidens' verdict on Siegfried,
   sung just after they have told him he will be killed that day. It is
   made of words for knowing, and it says he has the signs and does not
   read them.
3. **brand** (Act 3, Scene 3): Brünnhilde with the torch. The Norn's
   sentence comes back in its own words, with the word for "now" where she
   sang "then" and "forever".

The leads in `remake/pieces.json` were: Wagner's alliteration in place of
end-rhyme, and how the translator kept it (taken up in the Stave tab of the
first passage and the two English tabs); "the Norns, or Brünnhilde's last
scene" (both are here); and the record, which is the funeral march and has
no words (so no passage is tied to it; see `open`).

Every place Auden himself pointed at is somewhere on the page: the fire
(first and third passages), the oath on the spear (the Told drawing and its
caption), Waltraute's scene with Brünnhilde (the whisper in the Now tab; a
mark in the Told drawing), Siegfried and the Rhinemaidens (second passage).

## 2. Where Auden was read, and how sure the pages are

Two of his books are on this machine as scans (`dh.txt`, `fa.txt`). The
rest could be read only through archive.org's full-text search, which
returns one short snippet for a phrase. I "chained" snippets: each search
began from the last words of the snippet before, so that a page was read
through in order. The scripts are `heads.py` and `chain3.py` in the scratch
folder (section 13), and the chained text is saved there. The page-image
and "search inside" services refused these items (401/403), so no page was
seen as an image. Page numbers come from running heads, foot numbers,
footnotes and indexes that turn up inside the snippets. The scans on this
machine can be cited by line; these books cannot, so the `checked` fields
of the reading give, in single quotation marks, the few words that find
each place again in the full-text search.

**"Mimesis and Allegory"** (*Prose*, vol. II, pp. 78–87). archive.org item
`prosetravelbooks0000aude`; its catalogue title is that of vol. I, but the
text is vol. II (its index has Wagner at 78, 115, 503 and *Die Walküre* at
503). By the editor's note to p. 78, Auden gave the lecture at Columbia
University on 14 September 1940, at the English Institute's second annual
conference, in the section on literary criticism (saved: `note78.txt`).

- p. 80: he takes Wagner for his case because he thinks him the greatest
  of modern artists and the one most typical of them.
  Inferred page: the sentence stands before a list of what the age owes to
  Wagner, and that list runs over the running head of p. 81.
- p. 81: a passage quoted from Nietzsche on Wagner as the complete
  decadent; the paradox (an allegorical plot treated as realistically as
  opera allows; recitative made into a melody that keeps to the speaking
  voice); the historian's reading (nobility, bourgeoisie, proletariat, the
  hero and the emancipated woman); the sentence quoted in `auden[0]`. The
  page ends in the middle of the sentence about the characters' behavior;
  at its foot stands the footnote to the passage from Nietzsche (*The Case
  of Wagner*, translated by Thomas Common, p. 50) (saved: `ma_p81.txt`,
  `ma_p81b.txt`).
- p. 82: that sentence goes on (they know beforehand); the contrast with
  *Oedipus Rex*; the sentence quoted in `view`; Valhalla and the World Ash,
  and his questions about Wotan; Schopenhauer; the psychoanalytic reading,
  which he says goes vague in this opera too (one would expect the pair to
  grow up and marry elsewhere; the libretto makes that infidelity by magic,
  fatal to both). The page ends just before the running head "Essays and
  Reviews 1940 83" (saved: `ma_p82gap.txt`).
- p. 83: suffering as what Wagner could express; the illogical behavior
  explained by the music he was good at; the list of sufferings, with
  Brünnhilde for betrayed love; the monologues; a footnote to *The Case of
  Wagner*, p. 34; Luther and Hitler (saved: `ma_p83b.txt`).

Each sentence used was searched for across the volume and found once.

**The research notes are wrong here.** `remake/research/C_auden_on_works.md`
(section 31 and H17c) gives this whole passage to "James Joyce and Richard
Wagner" (*Common Sense*, March 1941; *Prose* II, pp. 115–19). I chained
that essay too (saved: `joyce_wagner_1.txt` to `_7.txt`, `note115.txt`): it
is mainly about Joyce and does not contain the passage. So the date of the
view is 1940. Other pieces that take the passage from the notes (the other
Wagner pieces, Joyce if there is one) should be checked. This is the first
item of `open`.

**New Year Letter** (Faber, 1941), item `newyearletter0000aude`. The verse
on Wagner begins at line 1432, the line the note is keyed to; the note
stands at pp. 143–44 (saved: `nyl_note.txt`, `nyl_note2.txt`). In this
edition the page number stands at the foot: the last line of the Letter is
followed by 75 and then by the heading of the Notes, the pages before *The
Quest* and the Epilogue end with 160 and 182, and the contents page gives
Notes 77, *The Quest* 161, Epilogue 183. The number 143 falls in the middle
of the sentence about mistakes, so the note begins on p. 143 and its second
half (knowing beforehand, Oedipus, the fire) is on p. 144. The number 65
falls two lines before line 1432, so the verse is at the top of p. 66. The
note runs close to the lecture, and adds that what these people do
contradicts what they know, which he calls nonsense even as a study of
minds. The research notes say the note opens with a quotation from *The
Case of Wagner*; I did not chain that opening. The note's last sentence, sending
the reader to Mozart for happiness and requited love, is left out of the
piece.

**Program notes for a broadcast of *Die Walküre*** (*Prose* II, Appendix VI,
pp. 503–5; saved: `walk_note.txt`, `walk_text.txt`, `walk_act2.txt`,
`walk_act3.txt`, `walk_end.txt`, `walk_end2.txt`). The editor's headnote:
Swarthmore, spring 1944; an undergraduate, H. C. Robbins Landon, was in
charge of music at the college's radio station and got teachers to write
notes for its evening concerts; he read Auden's out himself, before the
broadcast and between the acts; the printed text follows the manuscript in
the Berg Collection. The running head of p. 503 stands just before the
title, that of p. 504 after the opening paragraphs, that of p. 505 near
the end of the summary of Act 2; Appendix VII begins after the summary of
Act 3. Used: the sentence on the meter and its old and
embarrassing expressions (p. 503), the list of beings with the Norns as
Fates (p. 503), and what the later operas hold for Siegfried, with Hagen
named as Alberich's son (p. 505). Not used: his reading of the myth as
psychology (he takes Valhalla for consciousness, and the river and the
caves for what lies beneath it), and his remark that *Die Walküre* is
perhaps the best of the four. Not in the research notes.

**Alan Ansen, *The Table Talk of W. H. Auden*** (1991), item
`tabletalkofwhaud0000anse` (saved: `tt.txt`, `tt_wagner.txt`, `tt_note.txt`,
`tt_page.txt`). p. 16: the three Wagner operas he likes from end to end; his
order within the *Ring*; the oath on the spear; the duet. The next words
carry the running head of p. 17. p. 44 (the head of p. 45 follows about
150 words later): Wagner meant little to him before he read *The Case of
Wagner*; the editor's note says he read it soon after he arrived in the
United States in 1939. The piece gives that from *The Dyer's Hand*, his own
text. Which acts the oath and the duet are in is my addition, from the
libretto.

**"History, Feigned and Real"** (*Prose*, vol. III, Appendix V; the index
gives the talk at p. 686), item `trent_0116405823828`, whose title page
reads *Prose*, Volume III: 1949–1955, Princeton University Press, 2008
(saved: `p3_note.txt`, `p3_lead.txt`, `p3_ring.txt`, `p3_ring2.txt`,
`p3_ring3.txt`). The editor's note: a talk on *The Return of the King*,
recorded by Auden, broadcast in the BBC Third Programme on 16 November
1955; the printed text follows a transcript kept at the BBC Written
Archives Centre. The running head of p. 689 stands before the comparison
with Wagner; the head of p. 690 stands between the sentence on Sauron's
mistakes and the sentence on Alberich's curse. So Wotan and the two rings are on p. 689, the curse
and Siegfried on p. 690. Not in the research notes.

***The Dyer's Hand*** (`dh.txt`). Lines 2527–2534, "Making, Knowing and
Judging", under the head of p. 48 (lines 2504–2507; the next head is at
line 2553). Lines 22276–22288, "Notes on Music and Opera", under the head of
p. 473 (line 22253; the head of p. 474 is at line 22301). In this scan the
head stands at the top of its page. He says "Wagner or Strauss"; the piece
says only Wagner.

**Charles H. Miller, *Auden: An American Friendship*** (1983), item
`audenamericanfri00mill`, read in snippets only (saved: `miller_list.txt`
and `miller_heads.txt`). Miller was in the class.
After his sentence on the required books and the libretti he writes that
a list of recommended reading went with them, and gives eighteen titles;
Nietzsche's *The Case of Wagner* stands between Eliot's *Selected Essays*
and Mann's *Past Masters*. Just before, he has Auden tell the class that
he recommends other books as well. The page is 27: the index gives
"Tristan and Isolde, 27, 75", and the sentence that names that opera
stands immediately before the list. `remake/research/A_michigan_course.md`
(section 1.5) has the same list from the same page, verified there in the
scan, with the heading of the sheet ("Recommended Critical Reading") and
the entry in Bloomfield and Mendelson's bibliography that shows the sheet
had two leaves. This was added last, to the sixth entry of the list: it is
what makes Nietzsche's book part of the work as Auden taught it.

***Forewords and Afterwords*** (`fa.txt`), "The Greatest of the Monsters",
pp. 244–55. The pages are fixed at both ends: foot numbers 244, 247, 248 at
lines 11715, 11867, 11917; after them running heads that alternate (the
title on odd pages, his name on even); and the contents page gives the next
essay at p. 256, so the last head of this essay (line 12209) is p. 255.
The book's own list of first printings (lines 25005–25007) gives *The New
Yorker*, 4 January 1969, a review of Robert Gutman's life of Wagner.

- p. 251 (from line 12035): the theory of *Opera and Drama* in five points.
- p. 252 (to line 12095): the works that keep to it; Shaw on this opera and
  *Un ballo in maschera*. The list of drinks, conspirators and chorus is in
  quotation marks in Auden's sentence, after a passage quoted from Gutman;
  whose words they are I did not trace.
- p. 255 (lines 12227–12253): Wagner's achievement other than his
  intention; what his heroes and heroines are; how to listen. Used in
  `auden[8]`.
- Read and kept out of the list, as passing mentions: p. 249 (lines
  11941–11945), Wagner should be taken fast, and a very slow performance of
  this opera under Knappertsbusch; p. 253 (line 12114), a sentence quoted
  from Gutman about two bars of this opera's prelude; p. 253 (line 12144),
  he ranks Nietzsche first among guides to Wagner and quotes *The Case of
  Wagner* at length.

## 3. The text

**The German** is the sung text: zeno.org, from Richard Wagner, *Die
Musikdramen* (Hamburg, 1971), on this machine as
`.cache/originals/wagner_goetterdaemmerung_de_zeno.txt`.
`remake/research/D_texts.md` (line 521) lists it as out of copyright in the
United States. The three passages were cut with `node
build/tools/original.mjs cut` into `site/data/texts/o-gotterdammerung/`:
norn, file lines 219–231; rhine, lines 4347–4351, 4355–4357, 4361–4363,
4367–4369, 4373–4375 (only speakers' names and directions lie between);
brand, lines 5381–5401. The file has an empty line after every line of
verse, so each line became a block of one row: the rows are 0.0, 1.0, 2.0
and so on. The kit sets no stanza space between blocks of one row.

**The English** is Margaret Armour's (1911, Project Gutenberg no. 49507),
the hosted text `gotterdammerung`. D_texts.md calls it a reading
translation in verse. Rows: prelude block 19, rows 9–15; act-3 block 93,
rows 2–4, block 95, rows 0–1, block 97, rows 0–5; act-3 block 317, rows
0–10. Each plate has as many English rows as German, so the kit sets it
line under line.

**The poem as Wagner printed it** (*Gesammelte Schriften und Dichtungen*,
vol. 6, Leipzig: Fritzsch, 1872; two Bavarian State Library scans, saved as
`gsd6_11121452bsb.txt` and `gsd6_11723064bsb.txt`):

- first passage, pp. 254–55 (the head of p. 255 falls after row 3.0): the
  same words, except another word for "once" at row 0.0, word 4, and a
  colon where row 4.0 ends in a comma. Row 4.0, word 0 is the same word as
  in the sung text.
- second passage, p. 340 (the next head is p. 341's): rows 0.0–2.0 differ.
  The poem has "strong" before "wise", the plain verb without its prefix,
  no word for "the hero", and no word 5 in row 2.0. Rows 3.0–10.0 have the
  same words, with dashes and semicolons for the commas and exclamation
  marks. The poem gives the whole verdict to the Rhinemaidens together.
- third passage, pp. 360–61 (the head of p. 361 falls after row 3.0 in the
  second scan): the same words, with small differences of spelling in rows
  1.0, 3.0 and 4.0, and a dash after row 9.0, word 0.

**Armour appears to follow the poem**, not the sung text: her p:93.2 has
the poem's order (her word for "strong", then "wise"), she has no word for
"the hero", and her p:317.9 has a dash after its first word, where the poem
has one and the sung text has none. This is an inference (`open`, and the
first caveat). It touches one mark: the stave on w at the head of the
second passage is in both versions (the last ground of the English tab).

The sung readings were confirmed earlier in this session only in OCR of
vocal scores and later librettos found by archive.org search, not in a
score seen page by page. One American libretto found that way printed a
different word, beginning with z, at row 4.0, word 0 of the first passage;
the poem of 1872 and the zeno text agree on the word shown. I did not go
back to that libretto.

## 4. First passage: the third Norn (plate `norn`)

**Why this passage.** It is Auden's own example, said by a character in
advance: the logs of the World Ash round the hall, the fire, the end. And
its last two lines hold the two halves of the opera's title. Seven short
lines, so every word can be looked at.

**No beat tab.** Wagner's short lines have two or three stresses and a
free number of light syllables. There is no fixed measure to rule under
them, and a count of lifts would be mine alone. What binds the lines is the
stave, and that is what is drawn.

### Stave (rhyme, threads only)

Marks: br (1.0 w0, 2.0 w1); h (1.0 w2, 2.0 w0 and w3); s (3.0 w0, 4.0 w0
and w3); gl (3.0 w2, 4.0 w2); a vowel opening the word (5.0 w1 and w3,
6.0 w1 and w3). Every marked syllable carries the stress of its word; 6.0
w3 is the separable half of the verb at 6.0 w0 and takes the stress at the
end of the clause.

Other ways of hearing:

- Row 0.0, words 1 and 2 share w. Word 2 is the past of "to be" and weak;
  left unmarked, and said in the fifth caveat. The caption's "after the
  first" keeps clear of it.
- Row 6.0, words 0 and 2 share d. Word 2 is a light adverb; unmarked.
- Rows 5.0 and 6.0: three of the four vowel-staves begin with the same
  vowel. Ellis's note says the old rule wanted different vowels; the
  caption says only that vowels count as alike, which is Wagner's own
  statement.

Where each fact was read:

- What a stave is: Grimm under Stabreim (vol. X,II,I, col. 377; saved
  `dwb_stabreim.html`); Baum, chapter V
  (`.cache/handbooks/baum-versification-pg21342.txt`, lines 5830–5842).
- Wagner on end-rhyme and on this verse: *A Communication to My Friends*,
  in Ellis, *Prose Works*, vol. 1, the foot of p. 375 and p. 376 (Cornell
  copy of the second edition, 1895, saved `ellis_cu31924022322485.txt`,
  lines 17360 and 17376–17381). His note there names the poem as
  *Siegfrieds Tod*. Ellis's preface to vol. 8 (1899; saved
  `ellis_cu31924022322550.txt`) describes that poem, drafted in 1848, as
  the earlier version of this opera. Ellis's own note on Stabreim, vol. 1,
  pp. 132–33 (lines 6456–6520): the *Ring* uses this verse almost
  throughout, and the stave marks the accented root.
- Vowels as staves, and the one image: *Opera and Drama*, part II, chapter
  vi, in Ellis, vol. 2, p. 227 (Google scan of the second edition, 1900,
  saved `ellis_v2.txt`, lines 10515–10522). Opposites: part III, p. 291
  (lines 13253–13256). Wagner speaks there of roots of opposite *feeling*
  (his examples are joy and sorrow, weal and woe). That "eternal" and
  "end" are such a pair is my application: Grimm defines the adjective as
  the endless. The caption says "here" and no more.
- Auden on the meter: *Prose* II, p. 503 (section 2).
- Row 4.0 w0: Grimm under sehren (vol. X,I, col. 164; `dwb_sehren.html`):
  to wound, to hurt; the written language lost the word early and keeps it
  in a compound. I first wrote "a verb"; Grimm says "the word", and so does
  the caption now.
- Rows 5.0 w1 and w3: Grimm under ewig, the adjective (vol. III, col.
  1200) and Ende (vol. III, col. 447). On dwds.de the column printed after
  an entry is that entry's own; a page with several entries prints several
  (the adverb ewig is col. 1203, not 1202 as I first had it).

### Dawn (word)

Notes on 0.0 w1; 5.0 w1; 5.0 w2–3; 6.0 w0; 6.0 w1; 6.0 w3; p:19.15 w1–2.

- The title word is not sung: `grep -c -i` for it in the German file gives
  0, headings included.
- Grimm under Götterdämmerung (vol. IV,I,V, col. 1156;
  `dwb_gotterdammerung.html`): on record since 1772 among the bardic poets;
  a false loan-translation of the Old Norse for the darkening of the gods,
  which had been confused with the Old Norse for their fate. Etymonline
  under Gotterdammerung and Ragnarok has the same two Norse words.
- Grimm under Dämmerung (vol. II, col. 712): morning and evening twilight.
  Under aufdämmern (vol. I, col. 631): to rise dawning, to break; a morning
  that dawns is among the examples.
- The forms of the verb in the libretto, by line of the German file: with
  its second half, lines 65 (the second Norn's question, the second sung
  line of the opera), 231 (this passage) and 5397 (the third passage);
  without it, line 247, where the first Norn asks again, sixteen file
  lines after this passage, whether day is dawning or the fire is shining.
  The noun is sung once, of evening (line 2043, Act 1). The caption leans
  only on line 65 and the answer to it (hosted prelude, blocks 4 and 6:
  fire round the rock; it is night). Line 247 is not answered in the text,
  so the caption does not use it.
- "Here too the dawn comes with fire" rests on rows 1.0–6.0: the end
  dawns when the wood burns and its glow scorches the hall. The scene
  sets daylight against firelight twice, before this passage and after it
  (lines 65 and 247 of the German file). The sentence was added last, so
  that the caption says outright what the daybreak verb makes the lines
  mean; before, it stopped at "fire is what the Norn foretells". I first
  wrote "the dawn foretold here is fire too" and drew back to what the
  lines say: the dawn comes with the fire. That the dawn *is* the fire
  would be my reading, not the text's.
- 6.0 w1 "forever": Grimm, the adverb ewig (col. 1203).
- 5.0 w1: Armour's word in this place is p:19.14 w4, which is not
  "eternal"; the note says so.
- p:19.15 w1–2 has nothing answering it in rows 5.0–6.0.
- 0.0 w1: the second Norn's account of the felling is hosted prelude,
  block 16; the spear cut from the ash, block 12.

## 5. Second passage: the verdict (plate `rhine`)

**Why this passage.** Auden's charge is that these people deny what they
know. Here the three Rhinemaidens say that of the hero in his hearing (they
speak of him, not to him), in words for
knowing, a few lines after telling him the day of his death (act-3, block
82), and he keeps the ring (blocks 84 and 90). In 1955 Auden spoke of this
very scene (section 2). It is also the plainest place I found to show what
the stave is for: in two matched sentences it ties the thing he has to the
thing he fails to do.

The passage is cut at a semicolon. After row 10.0 the sentence runs on
(Armour's block 97, rows 6–7: the ring, which is to be his death, he means
to keep). The caption therefore says "four times, each in two halves" and
not "four sentences". In the poem of 1872 the continuation is two lines,
like Armour's. If the sung text also gives it two lines, the plate could
take them and stay line under line (13 rows each); I did not check the row
count, and left the passage as it is.

### Against (figure: antithesis, drawn as pairs)

Parts: A 0.0 w1–3, B 2.0 w1–3; A 3.0 w0–2, B 4.0 w1–3; A 5.0 w0–2, B 6.0
w1–3; A 7.0 w0–2 and 8.0 w0–2, B 9.0 w0–2 and 10.0 w0–2. `join` asks for
three strokes: 3.0 to 4.0, 5.0 to 6.0, and 8.0 to 9.0 (the turn of the
fourth). The first pair cannot be joined, because row 1.0 lies between.

- The name: *Silva Rhetoricae* under antithesis (saved
  `silva_antithesis.html`). I also read its pages for isocolon,
  parallelism and epistrophe. The two middle sentences are of matched
  length and end on the same two words, so those names would fit them, but
  a tab takes one figure and the opposition is what all four share.
- "Three words then four": rows 3.0 and 5.0 have three words, rows 4.0 and
  6.0 four, and both of those end on the same two words.
- "To his credit" is loose for the first sentence, where the credit is his
  own opinion of himself; the caption's second sentence says that plainly.
- Auden: *Prose* II, p. 82 (they deny their own knowledge); *Prose* III,
  p. 690 (Siegfried and the ring). The caption and the `why` both say
  the third sentence is "close to" what Auden says, and no more: the
  verdict is the Rhinemaidens', and Auden did not comment on it.

### Knowing (word)

Notes on 0.0 w1; 1.0 w0–1; 5.0 w0; 5.0 w1; 6.0 w1; 10.0 w0–2; p:97.1 w2–3.

- Etymonline, saved as `ety_*.html`: wise (adj.) and wit (v.), one root
  meaning to have seen, with the German forms given there; read (v.), old
  senses to advise and to interpret, German cognate, the link to "riddle";
  rede (n.), with the Century Dictionary's remark on the old spelling.
- Grimm: Rune (vol. VIII, col. 1518): a secret, secret talk, secret
  counsel, a character of the Germanic secret and magic writing. raten
  (vol. VIII, col. 173). wähnen (vol. XIII, col. 650): to expect, suppose,
  believe, assume falsely. verwähnen (vol. XII,I, col. 2073), sense 2: to
  suppose, in the written language only in older times.
- The gloss on 1.0 w0–1, "wrongly thinks himself", takes "wrongly" from
  the line after it and from Grimm's last sense of the simple verb; Grimm
  gives the compound only as "suppose". If that is too much, "thinks
  himself" is safe.
- Brünnhilde's runes: hosted prelude, block 51 (rows 8–11), block 53,
  block 70.
- Hagen's question before the spear-thrust: German file lines 4861–4863;
  hosted act-3, block 213. The verb there is a compound of the verb at
  6.0 w1, and the noun for the ravens' sound is from the verb at row 1.0,
  word 0 of the third passage.
- "Armour's cannot is her own": row 6.0 has no modal verb, in the sung text
  or in the poem (vol. 6, p. 340).

### English (rhyme, threads in both languages)

Marks: w (0.0 w1; 1.0 w0, on its root; 9.0 w2, on its root; 10.0 w0); b
(2.0 w1, on its root; 2.0 w3; p:93.4 w2 and w6); f (p:93.4 w5 and w7;
p:97.3 w0; p:97.4 w1); a vowel (3.0 w0; 4.0 w1); r (5.0 w0; 6.0 w1;
p:97.0 w0; p:97.1 w3); g (7.0 w2; 8.0 w2, on its root; p:97.2 w1 and w2).

Other ways of hearing:

- Row 8.0 w0 begins with w and could be heard with the w of rows 9.0 and
  10.0; it is a weak auxiliary, unmarked.
- p:97.4 w3 begins with f. It is a preposition; I marked it at first and
  took the mark off.
- p:95.1 w2 begins with f and stands alone in its pair of lines; unmarked.
  p:95.1 w1 and w5 share w, the first of them weak; unmarked. p:93.2 w3
  and p:97.5 each have a w with no partner. So "she lets the w go" holds:
  no pair of her lines is bound on w.
- p:93.4 holds two staves that cross (b, f, b, f).

Facts: Wagner on the one image, Ellis vol. 2, p. 227; the shared words,
Etymonline under blind, bind, bound, rune, read, rede; the oldest English
verse, Baum, chapter V.

## 6. Third passage: Brünnhilde with the torch (plate `brand`)

**Why this passage.** The Norn's sentence returns. The phrase at 7.0 w2–3
is sung twice in the whole libretto (German file lines 229 and 5395), each
time with the same verb in the next line. Set beside the first passage it
shows what changed: no adjective, "now" for "forever, then", and "I throw"
where the Norn's second prophecy had the god throw. Auden's sentence about
the pair who make no new world and burn with the old is about this moment.

### Now (word)

Notes on 1.0 w0; 7.0 w2–3; 8.0 w0; 8.0 w1; 9.0 w1–2; 9.0 w4.

- The word at 6.0 w2 of the first passage. I first glossed it "there". It
  follows the Norn's when-clause and means "then": Armour's p:19.14 begins
  with her words for "and then", and Grimm gives the adverb that answers a
  clause before it (vol. II, col. 646) and the adverb of time (col. 656;
  `dwb_da.html`). Caption, note, ground and `why` were mended.
- The Norn's second prophecy: German file lines 293–307; the fire-brand at
  line 299, the thrower at line 303. Hosted prelude, block 28: Armour's
  row 6 names no thrower.
- 1.0 w0: Grimm under raunen (vol. VIII, col. 294): to murmur, whisper;
  the noun under the verb is the one that is rune. Waltraute's account:
  German file line 1849 has the same verb; hosted act-1, block 290, rows
  58–65 (Armour's row 61 has "whispered"); the ravens, rows 41–42.
- 9.0 w4: Grimm under Brand (vol. II, col. 294): the burning piece or log.
  Etymonline under brand (n.).
- "Come true": rows 7.0–10.0, and the stage directions in act-3, blocks
  318 and 324.
- Auden: *Prose* II, p. 81.

### English (compare)

Ties: 1.0 w0 with p:317.1 w0; 2.0 w3 with p:317.2 w6; 7.0 w3 with p:317.8
w3; 8.0 w0–2 with p:317.7 w4; 9.0 w1–2 with p:317.9, the second half of
its first word and word 1. The first word of p:317.9 is two words joined by
a dash; the tie uses the part number 0.2.

- What returns in her English: between p:19.14–19.15 and p:317.7–317.8 the
  only words in common are the article and her word for the gods. The
  caption said at first that nothing came back but a stave on d; it now
  names the one word.
- Etymonline under raven and Rhine.
- This tab is about the translator's craft and stands on the plates and on
  the hosted text alone. Auden does not speak of Armour. His view of
  Wagner in English (*The Dyer's Hand*, p. 473) is about singing, and is
  kept to the list under the plates.

### Told (shape)

The drawing is the artist's. The facts:

- `lines`: 2026 lines of verse in the hosted text, every row of every
  verse block of the four parts, counted by script over
  `site/data/texts/gotterdammerung/*.json`: prelude 256, act-1 577, act-2
  635, act-3 558. Lines are numbered from 1 through the whole libretto
  (act-1 begins after 256, act-2 after 833, act-3 after 1468).
- A telling is a place where a character says that the end will come, or
  how. Its line is the line of the decisive words; block and row are under
  each mark's `where`.
- The end of the gods: 79, 111, 644, 754, 866; it comes at 2002 (the brand
  is thrown; the hall burns in the last direction, after line 2026).
- The death of Siegfried: 896, 1251, 1263, 1363, 1436, 1564, 1656; it
  comes after line 1791 (the direction at act-3, block 214).
- The three passages: lines 74–80, 1605–1615, 1993–2003.
- Places left unmarked because they only hint or call for the end are
  listed under `counted`. Which lines count is a judgment, and the fourth
  caveat says so. 644 (Waltraute) reports preparations and not a prophecy;
  it is kept because it tells how, and because the last stage direction of
  the opera refers back to her speech.
- "The earliest is the third Norn's, at line 79": I read lines 1–78 for an
  earlier telling and found none.

## 7. More from Auden: why each entry is there

EXAMINER.md keeps an entry if it bears on a passage shown, on the work as
he taught it, or was said in 1941.

0. The two allegorical readings, both failing in this opera (1940): about
   this work by name; holds the sentence the Now tab stands on.
1. Why Wagner, the paradox, the composer's suffering, the monologues
   (1940): his explanation of the view.
2. *New Year Letter*: 1941.
3. The radio notes of 1944: the Stave tab stands on the first sentence;
   the Norns; Siegfried's end told in advance by Auden himself.
4. *Table Talk*: his liking for this opera; the oath (Told); the duet.
5. The BBC talk of 1955: the Against tab stands on it.
6. *The Case of Wagner* and *The Dyer's Hand*: Nietzsche's book was on
   the course's own list of recommended reading (Miller, p. 27) and is
   quoted twice in the lecture, so it belongs to the work as he taught
   it; and two tabs compare Wagner with his English translator, so a
   reader should know what Auden thought of Wagner in English. Left out
   to make room: that he calls his earlier notions of Wagner silly.
7. The review of 1969, the theory and Shaw's comparison: names this work;
   the theory is the one behind the Stave tab.
8. The close of the same review: on Wagner's heroes and heroines at large,
   not this work by name. Kept because it is his last word on the people
   the three passages show, and because it answers the question the
   lecture of 1940 says he cannot settle (whether such a work is good).
   If the list is too long at nine, this is the entry to cut, or to fold
   into the seventh in a sentence; no caption leans on it. The Dutchman
   piece carries the same passage.

## 8. Looked for and not found

- Anything by Auden on the Norns' scene, on the verdict, or on Brünnhilde's
  last speech as such.
- *Secondary Worlds* (`secondaryworldse00aude`), *A Certain World*
  (`certainworldcomm00aude`) and *Lectures on Shakespeare*
  (`lecturesonshakes00aude`), searched for the title and for the names of
  its people: no mention of this opera found.
- `ef.txt` and `pearce.txt`: nothing on Wagner's *Ring*.
- "Opera Addict" (*Prose* II, p. 400; saved `oa.txt`): names this opera in
  a list of performances, no more.
- A preface or note by Armour on how she translated: none found or used.
- The score, to confirm the sung text page by page: not seen.
- The opening of the note in *New Year Letter*, which the research notes
  say is a quotation from Nietzsche: not chained.
- A whole page of Miller's memoir, to see p. 27 as printed: only snippets
  could be had.
- Which libretto or translation of this opera the class of 1941 was given,
  or any account of a class on it: `remake/research/A_michigan_course.md`
  has neither (it says no account of a class was found for most of the
  operas). The page uses the English hosted here.

## 9. Considered and left out

- **The oath on the spear** (act-2, blocks 273–279) as a plate of its own.
  Auden praised it, and Siegfried names there the weapon that kills him.
  Three plates are the limit, and the three chosen answer one another. If
  the examiner finds the verdict the weakest plate, the oath is the
  passage to put in its place: German file, Act 2, Scene 4; Siegfried's
  oath and Brünnhilde's on the same spear-point are built alike.
- **A thread of "throwing"** through the libretto: the Norns throw the
  rope; the god is to throw the fire; Siegfried, just before the verdict,
  throws a clod of earth behind him as he says how lightly he holds his
  life (the direction at act-3, block 91); the verdict's 9.0 w2 is a
  compound of the same verb; then 9.0 w1 of the third passage. Left out
  for want of room, and because what the "highest good" is that he threw
  away (it is usually taken to be Brünnhilde) the libretto does not say in
  that line.
- **More old words** to bear out Auden's sentence of 1944. Grimm (vol. II,
  col. 439) says the adjective at 2.0 w1 of the first passage is used
  almost only in the last three senses of its noun; I took those to be the
  figurative ones, did not open the noun's entry, and so kept the word out
  of the caption. Grimm also says the verb at 1.0 w0 of the second passage
  belongs to the older written language; that is in a note's source. Only
  the word at 4.0 w0 of the first passage is in a caption.
- **Auden's reading of the myth as psychology** (1940, p. 82; 1944,
  p. 503): the piece is about the words, and he himself says that reading
  goes vague here.

## 10. Things mended along the way (so the examiner need not find them again)

- Paraphrases of Auden that kept too near his sentences were rewritten.
- "Forever there" became "forever, then" (section 6).
- The adverb's column in Grimm, 1202, became 1203.
- A note said nineteenth-century poets brought back the old spelling at
  p:97.1 w3. Etymonline says that of the noun; the Century Dictionary,
  quoted there, says of the verb's old spelling only that archaizing poets
  were fond of it. The note now says that.
- "Rope of fate" in `about` became "golden rope", the words of the hosted
  stage direction.
- "The verb is sung three times" was true only of the verb with its second
  half; the ground now gives every line (section 4).
- "Secrets and the signs that keep them" was my own turn; the caption now
  has the dictionary's two senses.
- A passing remark of 1969 about a slow performance was moved out of the
  list; the close of that review was read and put in.
- The date of that review was taken at first from the research notes,
  where it is marked as recalled; it is now from the book's own list.
- The research notes do have *The Dyer's Hand*, p. 48 (under the critical
  list in part four); `open` said they lacked it and was corrected.
- A last pass with `overlap.py` (section 13) found working fields that
  kept too near a source's own sentence: one ground gave Auden's sentence
  of 1955 on Siegfried nearly word for word; two `checked` fields followed
  the editor's headnotes; a note's source followed the Online Etymology
  Dictionary. All were put in my own words. Three grounds that repeated
  the two quotations now paraphrase them and point to where the quotation
  stands.
- The Dawn caption now says outright that the dawn foretold comes with
  the fire (section 4).
- The sixth entry of the list now begins with the course's own list of
  recommended reading (Miller, p. 27).
- The title in `where` is between asterisks.
- Read against `remake/CRITIC.md` (information for a later hand, but it
  says what the prose is judged by): five of the eight captions closed on
  a sentence with Auden for its subject, which that file would count as a
  tic. Two were turned so that they close on the passage (Knowing, Told);
  the tag "The third sentence says the like" went; the last tie of the
  third passage's English tab no longer trails after its point. The
  Stave caption now says "staves, or alliteration", so that "alliterative
  verse" two sentences later has been explained.

## 11. What could not be done

- **The page was not seen.** A poet may write only in this folder, and the
  build writes elsewhere. I tried to make a private copy of the site in
  the scratch folder so as to build and photograph this piece there; the
  permission system refused it, and I did not pursue it. Everything about
  how the page will look comes from reading the kit's code.
- One command that read the lines after the verdict in the German file
  together with hosted blocks 92–99 was also refused, once. I did not
  repeat it, so the row count of the continuation (section 5) is unchecked.

## 12. For the examiner and the artist

- **Line under line.** All three plates have as many English rows as
  German, which is how POET.md wants a translation set (`beside` is for
  two passages of equal standing). In `site/js/kit/plate.js` (read again
  at 07:45 UTC; the kit files had changed at 07:38–07:44) each row's
  English is entered in the plate's row list just before its German, so
  two German rows that follow each other are two places apart. The figure
  tab (`near` in `lens-figure.js`) and the thread of a rhyme tab
  (`lens-rhyme.js`, about line 138) join one line to the next only where
  the rows are one place apart, or the gap is no more than the band plus 8
  px, and only where the stroke crosses no line of type. If I read that
  rightly, the three strokes of the Against tab will not be drawn, and a
  stave that binds two short lines will show by the color of its letters
  and by points under them (three points where no place of the thread is
  joined), with no dotted join. The kit's own rule covers this: parts that
  cannot be joined are told by their color. The photographs will tell
  whether that is enough for the Stave tab, whose point is that the stave
  binds two lines. Other pieces with a line-under-line original (Faust,
  Rilke, Horace) would have the same question.
- **Colors.** With no end-rhymes on a plate the kit now gives each thread
  one of eight colors, so the six threads of the English tab of the second
  passage are six colors. If that is too many, drop the f thread and the
  caption's last clause.
- **Words lit by the caption.** Bold and italic words in a caption light
  where they stand in the passage. In the English tab of the third passage
  the italic word for the gods should light at p:317.7 w2.
- **Trailing dashes.** In the first passage, rows 0.0 and 6.0 end in a
  dash that is part of the last token, so an underline on 6.0 w3 runs
  under the dash as well.
- **The Told drawing** needs `site/js/pieces/gotterdammerung.js`. Keys:
  `lines`; `parts[]` (`name`, `lines`, `read`); `ends[]` (`name`; `told[]`
  of `line`, `who`, `says`, `read`; `comes` of `line`, `who`, `what`,
  `read`); `passages[]` (`name`, `first`, `last`, `read`). `counted` and
  each `where` are working notes. One line for the libretto, two rows of
  marks (the gods, Siegfried), the two ends in red, the three passages as
  short spans, is what the caption describes.
- **Italics.** Titles in `where`, `about`, `view` and the list of what
  Auden said are between asterisks. `site/js/piece.js` sets `where` with
  the same call as `about`, and the pieces that have been through the
  examiner (the two Dante pieces, the Dutchman) have their titles marked
  there in the same way. The build also copies `where` into the index of
  pieces; I found no page that prints it from there. Titles inside the
  captions are in `<i>` tags.

## 13. Where the saved sources are on this machine

`/tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/gd-poet/`

- `heads.py`, `chain3.py`: the archive.org full-text search and the
  chaining of snippets. `dwb.py`: fetches an entry of Grimm from dwds.de.
- `ma_*.txt`, `note78.txt`, `note115.txt`, `joyce_wagner_*.txt`,
  `walk_*.txt`, `oa.txt`: *Prose* II. `p3_*.txt`: *Prose* III.
  `nyl_note*.txt`: *New Year Letter*. `tt*.txt`: *Table Talk*.
  `miller_*.txt`: Miller's memoir.
- `overlap.py`: lists the longest runs of words that the reading and
  these notes share with the saved sources, the two scans, the libretto in
  both languages and the handbooks. At the end the only runs of seven
  words or more shared with Auden's texts were the two quotations, two
  titles, and one search phrase in a `checked` field.
- `dwb_*.html`: Grimm. `ety_*.html`: Etymonline. `silva_*.html`: *Silva
  Rhetoricae*.
- `ellis_cu31924022322485.txt` (vol. 1), `ellis_v2.txt` (vol. 2),
  `ellis_cu31924022322550.txt` (vol. 8): Ellis's Wagner.
- `gsd6_11121452bsb.txt`, `gsd6_11723064bsb.txt`: the poem of 1872.

The scans of Auden's two books are in
`/tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/auden/`.

## Taken out of the list of what Auden said

- **source:** “The Greatest of the Monsters,” in *Forewords and Afterwords* (1973), pp. 251–52

  **says:** Reviewing a life of Wagner in 1969, Auden sets out the theory of *Opera and Drama* (1851): the words matter as much as the music, or more; nobody sings together with anybody else; no word is said twice; regular meter, and even rhyme, are to be left alone. Only *Das Rheingold* and Acts 1 and 2 of *Die Walküre*, he says, obey it. *Götterdämmerung*, for its drugged cups, its plotters and its big chorus, he sets beside Verdi’s *Un ballo in maschera*, as he says Bernard Shaw rightly did.

  **quote:** (none: the entry had no quotation)

  **checked:** Read on 2026-10-03 in the scan of Forewords and Afterwords, research/auden/fa.txt: lines 12030-12096 (the theory, p. 251; the works that keep to it and Shaw's remark, p. 252). The page numbers are fixed at both ends: the foot numbers 244, 247 and 248 stand at lines 11715, 11867 and 11917, the running heads alternate after them (the essay's title on odd pages, the author's name on even), and the contents page gives the next essay at p. 256, so the last head of this one (line 12209) is p. 255. The list of poisoned drinks, conspirators and chorus stands in quotation marks in Auden's sentence; whose words they are was not traced (the sentence follows a passage quoted from Gutman). The date is from the book's own list of first printings (fa.txt, lines 25005-25007): a review of Robert Gutman's Richard Wagner: The Man, His Mind, and His Music, The New Yorker, 4 January 1969; the contents page gives the essay at p. 244. Left out of the piece and kept in the notes: on p. 249 (lines 11936-11945) he says Wagner should be taken fast and recalls sitting through a very slow performance of this opera under Knappertsbusch; on p. 253 he quotes Gutman on two bars of this opera's prelude where a love theme from Die Walküre goes with Brünnhilde's devotion to her horse.

## The finisher's changes after the critic (3 October 2026, 13:16 UTC)

Begun 12:52 UTC; this section was written from 13:16 on, as the changes
were made. Nothing of the libretto and nothing of Auden's prose is typed
out here. Places in the passages are given by row and word number as the
checker prints them (`p:` marks a row of Armour's English); places in the
scans by line. The sentences quoted are the page's own.

Read before anything was changed: `remake/BRIEF.md`, `remake/FINISHER.md`,
`remake/CRITIC.md` and "The scans" and "The printed notes" in
`remake/EXAMINER.md`; `critic.md`, `art.md`, `exam.md`, `reading.json` and
these notes, whole; the prose sheet (`node build/tools/prose.mjs`); and
`remake/works/dutchman/reading.json`, which was read and not touched.
Two other pages were looked into for one entry each, and not touched:
Tristan (`auden[10]`) and Orpheus (its ground for a gloss).

How the reading was changed: by `build/tools/edit-exact.py` only, with the
seven lists `finisher/edits-1.json` to `edits-7.json`. The reading as the
critic left it is `finisher/before.json`. A comparison of the two, key by
key, shows these and no others changed: three captions, the grounds and
the line on what the caption stands on for those three tabs, two strings in
the facts of the Told tab, three fields each of `auden[3]` and `auden[7]`,
`auden[1].checked`, `auden[5].checked`, three lines of `sources`, and
`open`. No mark, row, `turn`, `join`, `heading`, `speakers`, `beside`,
`label` or quotation was touched, no number or place among the facts, and
nothing in `view`, `about`, `where` or `caveats`. One name was put for a
pronoun (item 6). The script `site/js/pieces/gotterdammerung.js` was not
edited (`finisher/before.js` is a copy of it, unchanged).

### What was set

**1. The list: which entry from the review of 1969 stays** (critic.md,
section 4; the lead's first point).

- What was there: the critic kept the close of the review (`auden[7]`,
  p. 255: what Wagner's heroes and heroines are, and how to listen) and
  took out the entry on pp. 251–52.
- What the Dutchman page reports: its `auden[2]`, from pp. 253 and 255 of
  the same review, gives the same last two paragraphs, point for point:
  what Wagner expected of his heroes and heroines, what he in fact shows
  and with what skill, and the two things a listener must do at once.
  The two pages said the same thing. So the swap was made as the critic
  set it out, and the poet's choice (section 7 above) stands.
- What it says now: `auden[7]` is the entry on pp. 251–52, reworded in
  three places; `sources[7]` ends "pp. 251–52"; the close is whole below,
  under "Taken out of the list". The list is eight entries.
- The ground, opened in this run: the scan of *Forewords and Afterwords*,
  `fa.txt`. The theory in five numbered points, lines 12035–12059; the
  works that conform and Shaw's remark, lines 12066–12095. The pages were
  settled from the scan and not from the research notes: the contents
  page (lines 114–115) gives the essay at 244 and the next at 256; foot
  numbers 244, 247 and 248 stand at lines 11715, 11867 and 11917; seven
  running heads follow, at lines 11921, 11967, 12012, 12063, 12110, 12158
  and 12209, which are pp. 249 to 255. So the theory is on p. 251 and the
  rest on p. 252. The year and the book reviewed: lines 25005–25007.
- The three places reworded, each because the entry as the poet wrote it
  failed rule 1 or rule 2 against the scan:
  1. It shared a run of five words with Auden's sentence on meter and
     rhyme (`build/tools/runs.py`, words 40 to 44 of the old entry). That
     clause now reads "regular meter is to be left alone, and rhyme too".
     The entry as it stands shares no run of five with the scan; the two
     runs of four are a common phrase and the title of Verdi's opera.
  2. "Only … obey it" said more than the page. Auden says the theory is at
     bottom an attack on opera made for singers, that Wagner stayed true
     to that, and that only two works conform to what he calls its
     positive dogmas (lines 12066–12071). The entry now says they "keep
     its rules".
  3. The list of what this opera has (the drinks, the plotters, the
     chorus) was given as Auden's own reason, with "for". In his sentence
     it stands in quotation marks, after a passage he quotes from Gutman
     (lines 12092–12093); whose words they are is not said there and was
     not traced. The entry now says "in a phrase he quotes" and keeps to
     the phrase's own first word for the drinks. It also said that Auden
     "sets" the opera beside Verdi's; the remark is Shaw's, and Auden's
     part is that Shaw was quite right (lines 12094–12095). The entry now
     says so.
- Two words in the entry are not in Auden's two pages. "Wagner’s" before
  the title of the book: line 12035 says whose book it is. "Verdi’s":
  Auden does not name the composer in that sentence; the next essay of
  the same book, on Verdi's letters, names the opera among his (line
  12312).
- `checked` under the entry was written again from this reading, with the
  lines above. The two passing mentions it keeps out of the piece were
  seen too (lines 11940–11945, p. 249; lines 12113–12114, the head of
  p. 253).

**2. The entry on the radio notes of 1944: two sentences cut** (critic.md,
section 4; the lead's third point).

- What was wrong: its third and fourth sentences only showed that he
  named things: that he lists the Norns among the beings of the *Ring*,
  and that he tells his listeners the plot of the later operas. No
  caption, ground or line on what a caption stands on leans on either.
  The second was also the poet's own turn on the page's title (section 7
  above: the end "told in advance by Auden himself"), which the page
  nowhere says.
- What it says now: the two sentences that are left, on the broadcast and
  on the meter, 44 words. `auden[3].source` ends "p. 503", and
  `sources[4]` likewise.
- The ground, and what I could not do. The lead asked that the scan be
  opened before the page was changed. *Prose*, vol. II is not among the
  scans on this machine (they are *The Dyer's Hand*, *Forewords and
  Afterwords*, *The Enchafèd Flood* and Pearce), and no copy of the notes
  of 1944 is in the project, so I could not read the page myself. The
  page was narrowed on the record already in the reading: the poet's
  `checked` puts the sentence on the meter in the opening paragraphs, on
  p. 503, and the sentence on the later operas after the running head of
  p. 505; the examiner found both again (exam.md, section 5, List 4);
  and the Stave tab already cites p. 503 for the sentence on the meter.
  No page is named that was not named before. `checked` says all this.
  If the lead would rather have the sentences back until the volume can
  be opened, they are whole below and in `finisher/before.json`.

**3. "Against": the last sentence of the caption cut** (critic.md,
section 6, doubt 1; the lead's fifth point).

- Where: `plates[1].lenses[0]`: the sixth sentence of the caption, the
  last two items of `grounds`, and `stands`.
- What was there: Auden's remark of 1955 that the ring does not corrupt
  Siegfried, who is told what it is, takes no interest in it and nearly
  gives it back. The examiner had set it there in place of a worse link
  (exam.md, section 6).
- The test, under rule 1. The tab shows a figure: four statements, each
  of two halves. The remark is about what the ring does to its owners.
  No source ties the one to the other: as the poet and the examiner
  read him (I could not open *Prose*, vol. III), Auden makes the remark
  of Wagner's ring and Tolkien's, and not of this verdict. The lines do
  not bear the link out either. The eleven rows on the plate never name the
  ring. It comes only after the semicolon at which the passage stops
  (Act 3, block 97, rows 6 and 7, read again in the hosted text), and
  there it is the one thing he will not give up, so what the fourth
  statement says he threw away is something else. The tab's `why` never
  used the remark.
- What it says now: the caption ends on Auden's sentence of 1940, that
  the people of the *Ring* deny their own knowledge; 87 words. `stands`
  names *Prose*, vol. II, p. 82 only and no longer links to the offer of
  the ring. The two grounds that served the cut sentence (the remark,
  p. 690; the scene of the offer) are gone from this tab.
- Nothing of Auden's is lost to the page. The remark is whole in the
  list (`auden[5]`), and its `checked` now holds the place in the scene,
  which I read again: Act 3, blocks 71 to 79 (he says he would give the
  ring, calls the three back and holds it up; they tell him to keep it;
  he puts it on again).
- No new claim, so no new ground.

**4. "Stave": two words cut from the last sentence** (critic.md,
section 6, doubt 3; the lead's fifth point).

- Where: `plates[0].lenses[0]`: the caption's last sentence;
  `grounds[6]`; `stands`; and `sources[10]`.
- What was wrong: the sentence said that Wagner held a stave to make one
  image of the words it joins, "opposites too", and then named the two
  words of row 5.0 that the vowel stave joins (words 1 and 3). That a
  stave couples opposites is Wagner's, on p. 291 of Ellis's second
  volume, but his examples there are of opposite feelings. That the
  words for eternal and for end are such a pair was the poet's own
  application (section 4 of these notes says so). No source makes it.
- What it says now: "Wagner held that a stave makes one image of the
  words it joins: here", and then the two words with their glosses. The
  first half is his general statement (p. 227, as before). The second
  half says only what the marks show: the arc under row 5.0 joins words
  1 and 3 (seen in the new pictures at both widths). The glosses are
  Grimm's (`grounds[7]`, as before).
- What went with the two words: p. 291 is gone from `stands` and from
  `sources[10]`, since nothing printed leans on it now; `grounds[6]`
  keeps the page in its record of what was cut and why.
- No new claim. I could not open Ellis (see "For the lead"), and did not
  need to: the sentence now claims less, and what it keeps was read by
  the poet and again by the examiner (exam.md, section 6).
- The tab's `why` ends "here it joins eternal to end", which is the
  same and no more. It was left.

**5. The second passage's "English": that vowels count as alike**
(critic.md, section 7; the lead's fourth point).

- Where: `plates[1].lenses[2]`: a new third sentence in the caption, "In
  this verse vowels count as alike."; a new ground, `grounds[2]`; and
  "and on vowels" in `stands`.
- Why a reader of this tab alone needs it: the second sentence names
  first a stave that ties row 3.0, word 0, to row 4.0, word 1. The two
  words open on two different vowels, and the letters are marked in one
  color. The key under the caption says only "the sound of a vowel that
  opens the word, coming back from line to line". Nothing on the tab
  said that one vowel answers another, so the first pair the caption
  names looked like a mistake.
  Only the "Stave" caption of the first passage said it.
- What it says now: seven words more. The caption is 120 words, which
  is the limit; anyone who adds to it must take something out.
- The ground. The lead asked for the ground the first passage's lens
  already gives, and the new item gives it: Wagner, *Opera and Drama*,
  in Ellis's translation, vol. 2, p. 227, and Ellis's note, vol. 1,
  p. 132 (`plates[0].lenses[0].grounds[5]`). I could not open Ellis from
  here. So that the sentence should not rest only on a page I had not
  seen, I opened a dictionary: *A New English Dictionary on Historical
  Principles*, vol. I (Oxford; the preface is dated April 1888), p. 236,
  under Alliteration, sense 2 (the scan `ned_oed01arch.txt`, lines
  99192–99196; the page number stands at line 99177). It defines the
  alliteration of Old English and Germanic verse as accented syllables
  that begin with the same consonant or group of consonants, or with
  different vowel sounds. The new ground names both.
- The dictionary is named in the ground and not in the printed lines
  (`stands`, `sources`): the printed ground is Wagner's page, which the
  page already cited for the same rule.

**6. Two strings in the facts of "Told"** (critic.md, section 1, point
3; the lead's second point).

- `plates[2].lenses[2].facts.ends[1].told[2].says` (line 1,263,
  Brünnhilde). What was wrong: the script prints the speaker, the line
  number and a colon, and then this string, which had a colon of its
  own. A comma now stands for that colon: "on the same spear-point, may
  its sharpness kill him". Read in the hosted text: Act 2, block 279,
  rows 3 to 9.
- `…told[3].says` (line 1,363, Hagen). What was wrong: "only his back"
  came straight after Hagen's name and read for a moment as Hagen's
  back. It now says "only Siegfried’s back". Read in the hosted text:
  Act 2, blocks 305 to 321. Blocks 305 and 313 name the man they are
  speaking of; block 319 is her answer and block 321 his line.
- No number, place or line changed, and no `who`, `line`, `read` or
  `where`. The one name put in stands for a pronoun, and is the name
  the lines give.
- The script was not edited; it reads the facts when the page runs. The
  new picture of the tab at 1280, with the pointer on the mark of line
  1,263, shows the line under the drawing with one colon, and the table
  "Line by line" shows both strings.

**7. `open` brought up to date** (rule 7).

- `open[0]`: which entry from the review of 1969 is in the list now,
  and where the other is kept.
- `open[3]`: the shape has its drawing, and the script reads the facts
  when the page runs.
- `open[4]`: the page has since been built and photographed; what was
  found on each of the poet's three points; that `beside` on the first
  two plates is the lead's to decide.
- `open[6]`: the examiner's first item now says that the remark of 1955
  has left the "Against" caption.
- `open[7]`, new: what the finisher changed and what is still open.

### The critic's additions, tested (rule 9)

The critic lists 28 changes of wording. Most only reword. These add
words that the poet did not write, and each was tested as a new
sentence would be. All were kept.

- Change 1, `where`: "with the English of Margaret Armour (1911)". The
  site's own record of the text gives the translator and the year
  (`site/data/texts/gotterdammerung/index.json`), as `sources[0]` does.
- Change 4, "Dawn": "the answer is that". Prelude, blocks 2 to 6, read
  again: two questions about the light, and the third Norn's answer.
- Change 9, "Now": "Here the gods are not called eternal". Row 7.0 of
  the third passage has no adjective on the gods; row 5.0 of the first
  has one.
- Change 13, the remark on row 8.0 of the third passage's "English":
  "so in her English the verb does not come back". Rows p:317.7 and
  p:317.8, against p:19.15.
- Change 17, "Told": "down the page". The drawn line runs down the page
  at both widths (the new pictures).
- Change 21, `auden[1]`: "recitative, sung speech,". A gloss of a term
  of the trade. No volume of the dictionary with the letter R is among
  those I may read (the eight at hand were searched for the word: it
  is defined in none), so I could not open a ground for it myself. It
  is the ordinary sense of the word and it claims nothing about Auden.
  The Orpheus page prints the same gloss on a ground that its own
  finisher opened today (Treccani, under recitativo). Left, and said
  here and in `auden[1].checked` (`finisher/edits-7.json`).
- Change 25, `auden[6]`: "unbearable to hear". The scan of *The Dyer's
  Hand*, lines 22281–22282 (p. 473): his sentence is about how it
  sounds.
- Changes 26 to 28 were to the close of the review, which is now out of
  the list. It is kept below as the critic left it.

### What was left, and why

Seven points. In each case the sentence stands as the critic left it.

1. **`…facts.ends[1].told[0].says`** (line 896, Hagen; critic.md,
   section 1): "through him". Every `says` in that list puts its speaker
   in the third person, and the name stands just before the colon. To
   put the name in would say it twice in one short line, and no turn of
   the sentence is rid of the pronoun without the name (Act 2, block
   25, rows 0 and 1, read again: the string says what they say). The
   critic says it can be read, and so it can.
2. **Doubt 2**, "Against", sentence 4: "A highest good". It follows the
   German of row 7.0, which has the same article and the same degree.
   "The highest good" would say there is one only, and "a great good"
   would lose the degree. Armour's smoother line stands with it on the
   plate.
3. **Doubt 4**, "Now", sentence 1: "come true". It is what the stage
   does after the passage: the directions in Act 3, blocks 318 and 324,
   read again (she throws the brand; at the last the hall of the gods
   is seen with the flames taking hold of it). The next four sentences
   of the caption show it word by word.
4. **Doubt 5**, the third passage's "English", sentence 4: "a stave on
   <i>d</i>". The words can be read on both plates at the places the
   critic gives (p:19.14 w6, p:19.15 w0 and w2; p:317.7 w4, p:317.8
   w3). That tab sets one version against the other with numbered
   remarks and has no mark for a sound, so to show the stave would take
   a new kind of mark on it, which is the kit's. The sentence says only
   what the lines show.
5. **Doubt 6**, `view.says`, sentence 2: "the actors". It is Auden's
   word, and it stands in the quotation printed just over the sentence.
   Another word in the paraphrase would leave the reader to wonder
   whether the quotation and the paraphrase speak of the same people.
   The sentence before says "the people of the *Ring*", which tells him
   who they are.
6. **Doubt 7**, `auden[2].says`, sentence 3: the heresy of cause and
   logic. It keeps to Auden's own terms. *New Year Letter* is not among
   the scans, so I could not read his note, and a plainer wording from
   me would be a guess at his meaning.
7. **Doubt 8**, "Told", the words over the drawing: "each end". The two
   headings directly under them name the two ends.

Also left, from what the critic counted in its section 5: the sentence
on what a stave does is still in two captions, on two passages, and
that vowels count as alike is now said in two as well (item 5 above).
Each tab has to stand for a reader who opens only that one, which was
the lead's test for adding it.

### Taken out of the list of what Auden said, by the finisher

The entry kept under the critic's heading of the same name, above, is
the entry on pp. 251–52 as the poet wrote it. It is back in the list
as `auden[7]`, reworded in three places (item 1). What follows is what
this run took out, whole, as it stood in `finisher/before.json`. It was
set down here by a script from that file, not typed again.

**The close of the review of 1969.** It was `auden[7]`. Taken out
because the Dutchman page reports the same two paragraphs (item 1).

- **source:** “The Greatest of the Monsters,” in *Forewords and Afterwords* (1973), p. 255

  **says:** Reviewing a life of Wagner in 1969, Auden closes on Wagner’s people. What Wagner achieved, the review says, is not what he intended: he expected his heroes and heroines to be admired, and what he shows, with a skill no one else has, is the irrational and self-destroying in human nature as it is, with all its power to enchant. A listener gets the good of the operas, Auden adds, by recognizing himself in what is on the stage and by holding it off as the thing he must get the better of.

  **quote:** (none: the entry had no quotation)

  **checked:** Read on 2026-10-03 in the scan of Forewords and Afterwords, research/auden/fa.txt, lines 12227-12253: the last two paragraphs of the essay, under the running head at line 12209, which is p. 255 (the next essay begins on p. 256 by the contents page). He compares Wagner with Milton there, as an artist who did something different from what he set out to do. On p. 253 (line 12144 and after) he ranks Nietzsche first among guides to Wagner, and quotes The Case of Wagner at length. Not in the Götterdämmerung section of remake/research/C_auden_on_works.md; H19 there quotes the sentence on Nietzsche and one on the operas as freaks.

**Two sentences of the entry on the radio notes of 1944.** They were
the third and fourth sentences of `auden[3]`, whose source then ended
"pp. 503 and 505" (item 2). By the entry's `checked`, the first is on
p. 503 and the second on p. 505.

- **cut:** He lists the three Norns, whom he calls Fates, among its beings. And he tells his listeners what the later operas hold for the hero not yet born: he will take the ring from the dragon, court Brünnhilde and be false to her, and Hagen, the son of Alberich, will kill him.

### For the lead

Worst first.

1. **The notes of 1944 were cut without the volume open.** The lead's
   third point said to open the scan before changing the page. *Prose*,
   vol. II is not on this machine; the poet and the examiner read it in
   search snippets that I may not fetch. I cut the two sentences and
   narrowed the page to p. 503 on their record (item 2). If a page may
   change only on a page seen in the same run, put the two sentences
   back from the record above and make `auden[3].source` and
   `sources[4]` end "pp. 503 and 505" again.
2. **The printed ground for the vowels is a page I did not open.**
   "In this verse vowels count as alike" prints Wagner, p. 227, as its
   ground, as the lead asked: it is the ground the first passage
   already gives. Ellis's volumes are not among the scans I may read.
   What I opened myself is the dictionary (item 5), and it is named
   only in the unprinted ground. If the printed line should name what
   was opened in this run, `stands` of that tab and `sources` each
   want a line for *A New English Dictionary*, vol. I, under
   Alliteration.
3. **"Stave", last sentence: a judgment the lead may want to overrule.**
   I cut "opposites too" and kept the sentence: Wagner's general
   statement, then the two words that the arc joins. It still puts the
   statement and the pair side by side. I read the lead's test as
   allowing that, since the second half says only what the mark shows.
   If the lead reads it as the poet's application still, the whole
   sentence goes, with `grounds[6]` and `grounds[7]`, the last two
   headwords in `stands`, and the last clause of that tab's `why`
   (p. 227 stays in `stands`: the rule for vowels is on it too).
4. **The Tristan page gives three of the rules of 1851** from the same
   two pages of the review (its `auden[10]`, last sentence, in one
   clause). Before the swap a reader of this page and the Dutchman's
   met a whole entry twice; now a reader of this page and Tristan's
   meets one clause twice. What this page's entry says of this opera
   and of the works that keep the rules is on no other page.
5. **`beside` on the plates `norn` and `rhine` is undecided** and was
   not touched. Every sentence set or kept in this run holds either
   way: the prose sheet was searched again for above, beneath, below,
   under, over, beside, left and right, and none is said of the two
   versions.
6. **Pictures in `shots/` that no longer show the page:** "Stave",
   "Against" and the second passage's "English" at every width, the
   page slices, and the pointer and the table of "Told" in
   `shots/close/`. "Dawn" and "Now" there still show notes that the
   critic cut after its last pictures. The new ones are in
   `shots/finisher/`, at 1280 and 390 only.
7. **The second passage's "English" caption is 120 words**, the limit.
8. **`remake/research/C_auden_on_works.md` still gives Auden's main
   passage on the *Ring* to the wrong essay** (`open[0]`). It is
   outside this piece, so it was not corrected. Its page for Shaw's
   remark in the review of 1969 (p. 252) agrees with the scan as I
   counted it (item 1).
9. **The kit, seen again in the new pictures.** On the second passage's
   "English" the dotted strokes of two sounds run from Wagner's word to
   Armour's and on, so the two languages zigzag (the artist's fault 1).
   The captions of "Now" and of the third passage's "English" compare
   with the first passage, which is two passages up the page (the
   critic's section 7). New, and small: at 1280 the last four lines of
   the shortened "Against" caption break short of the measure, one
   after another.
10. **The list is 756 words to the captions' 854** (it was 800 to 872).
    The entry on the notes of 1944 is now 44 words.
11. **The gloss "sung speech" in `auden[1]`** is the critic's, and I
    could open no ground for it (no volume with R). It was kept as the
    plain sense of the word; the Orpheus page grounds the same gloss in
    Treccani. If a gloss inside a report of Auden is unwelcome, take
    the two words out.

### The checker

`node build/tools/check-reading.mjs gotterdammerung --print`, run after
each list of edits and a last time at 13:36 UTC, after the seventh
list, on the reading as it stands, exit 0. Its last three lines:

```
no problems
no warnings
the printed notes are fit to print
```

It printed no warnings before the changes or after (the two proofs are
`finisher/proof-before.txt` and `finisher/proof-after.txt`, the second
from the last run). `node build/pieces.mjs gotterdammerung` built the
page at 13:16:46, after the sixth list (13:15:36), the last to change
anything printed. The seventh list (13:36) added one line to
`auden[1].checked`, which is not printed; the page was built again at
13:36:21, and the built file is the same byte for byte (its checksum
was taken before and after), so the pictures show the page as it now
stands. The limits as they stand: captions
111, 111, 87, 108, 120, 111, 93 and 113 words; list entries 105, 110,
106, 44, 72, 110, 108 and 101; `view.says` 65; `about` 89; five
caveats; two quotations (24 and 17 words). The returned entry was
tested with `build/tools/runs.py` against the scan: two runs of four
words, none of five.

### The pictures

All in `shots/finisher/`, taken between 13:16:52 and 13:19:46 UTC,
after the build. Each run of `build/tools/shoot.mjs` ended "nothing
reported; now look at the pictures". Every one was opened and looked at.

- `gotterdammerung-norn-0-stave-1280.png`, `-390.png`: the caption ends
  on the two words of row 5.0, without "opposites too"; the arc under
  that row joins them at both widths.
- `gotterdammerung-norn-1-dawn-1280.png`, `-390.png`: not changed by
  me; taken again as the lead asked. Three notes stand with the
  caption (for row 0.0 and twice for row 5.0). The two that the critic
  cut are gone, and their glosses still stand under the words.
- `gotterdammerung-rhine-0-against-1280.png`, `-390.png`: the caption
  ends on Auden's sentence of 1940. At 1280 its last four lines break
  unevenly (For the lead, 9).
- `gotterdammerung-rhine-2-english-1280.png`, `-390.png`: the new
  sentence stands third. The caption fits beside the lines at 1280 and
  under them at 390.
- `gotterdammerung-brand-0-now-1280.png`, `-390.png`: not changed by
  me; taken again as the lead asked. Five notes stand with the
  caption, without the one the critic cut; its gloss stands under row
  7.0.
- `gotterdammerung-brand-2-told-1280-table.png`, `-390-table.png`: the
  whole tab with "Line by line" opened, and at 1280 the pointer on the
  mark of line 1,263. The line under the drawing has one colon; the
  table shows the two mended strings. These two were taken with a
  small script of my own, `finisher/shoot-told.mjs`, made after the
  pattern of `build/tools/shoot.mjs`: the picture tool does not open a
  folded table or point at a mark, and the two strings show nowhere
  else. It only reads the built site, as the tool does.
- `gotterdammerung-page-1280-0.png` to `-6.png` and
  `gotterdammerung-page-390-0.png` to `-8.png` (`--page --plate none`):
  the head is as it was; the list shows the entry of 1944 in two
  sentences with p. 503, and the returned entry last, with pp. 251–52;
  the sources show p. 503, pp. 251–52 and Ellis without p. 291. The
  last slice at 390 is the bare foot of the page.

Nothing looked worse than in the pictures before, apart from the uneven
break noted. No mark was moved, so none had to be put back.

Finished 13:38 UTC, 3 October 2026. The permission system refused
nothing.

## The lead after the finisher (3 October, 15:15 UTC)

Read: the finisher's record above (what was left, what was taken
out, the eleven points for the lead), and the head, every caption,
the list and the caveats as `prose.mjs` prints them. Looked at:
Stave, Against and the second passage's English at 1280
(`shots/finisher/`). Nothing set.

- **For the lead, 1.** The entry on the notes of 1944 stays as cut:
  it says less than the examiner's record of the two pages, and its
  one page is the one that record gives for it.
- **2.** The printed ground for the vowels stays Wagner, p. 227, which
  the examiner opened; the dictionary stays in the unprinted ground.
- **3, the last sentence of Stave.** It stands: Wagner's own statement
  about his staves, then the two words this stave joins, with nothing
  said of them.
- **4, 7, 10.** Nothing to do.
- **5, `beside` on `norn` and `rhine`.** Decided: not set. Each
  German line keeps its English under it; on these short lines that
  reads better than two blocks, and nothing printed speaks of where
  the versions stand.
- **6.** Old pictures: at the last cleanup.
- **8.** The research notes already carry the correction (their list
  of corrections, second line).
- **9, the kit's.** The threads of sound that cross from Wagner's
  words to Armour's are mended in the eighth mending (threads keep to
  one language); photograph the second passage's English again after
  the merge. The short last lines of the Against caption at 1280 are
  the browser balancing the paragraph's end; on the lead's list to
  look at with the kit.
- **11.** The gloss "sung speech" stays: it is the plain sense of the
  word, and the Orpheus page grounds the same gloss.

The snippet test (`build/tools/grams.py`) is running for this piece
with the others (six of its sources are known here only in snippets);
what it finds is set by the lead afterwards.

The piece is through every stage.

## The lead in the last pass (3 October, 16:08 UTC)

The snippet test (`build/tools/grams.py`) found three runs with
*Prose*, vol. II. The first entry of the list ran five words with
Auden's sentence on the two marriages: loosened, no change of claim
(`lead/edits-grams.json`, before in `lead/before-grams.json`; checker
clean; tested again, no run). The work's title with three small words
before it, twice, stands. One source, *Prose*, vol. III, is in no item
at archive.org and could not be searched. The record is `review/remake/grams/LEAD.md`.

A dictionary's headword after "under" in the folded notes and the sources is in
italics now wherever it stood bare in lower case, or is a word of another
language (item 2 of the last pass, 16:20 UTC; with it, a dictionary's name set as
the rest of the site sets it). Type only: no word changed. Edits in
`lead/edits-headwords.json`, the reading before in
`lead/before-headwords.json`; checker as before. The record is `review/remake/last-pass/RECORD.md`.

## The lead in the last pass: three phrases loosened (3 October, 16:42 UTC)

The snippet test (`build/tools/grams.py`) did not know that *Prose*,
vol. III has an item at archive.org, though this piece's sixth entry
was checked in it (`trent_0116405823828`). With the item named in the
tool the piece was run again and three runs of five words were found:
in the fourth entry of the list (the notes of 1944: the words that
begin the sentence reported, with the cycle's title), in the first
caption of the first passage (the same words) and in the sixth entry
(the talk of 1955: how Wotan behaves). Each is said in other words; no
claim changed. Edits: `lead/edits-grams-2.json`; the reading before:
`lead/before-grams-2.json`. Checker: no problems, no warnings, fit to
print. Built; the test run again finds no run; the caption was
photographed at 1280 (`review/remake/last-pass/shots/grams/`).
Mendelson's biography as a fifth scan: the runs it shares with this
piece are small words in unrelated passages and stand
(`review/remake/grams/LEAD.md`).

## The lead in the last pass: one form for the books many pages cite (3 October, 18:48 UTC)

Printed lines only, and no page number, year or title changed (the tool proves the page
numbers of every line are what they were): `review/remake/last-pass/tools/cite-forms.py`.
The forms: under an entry, `*Prose*, vol. II (2002), pp. …`; in a `stands` line, `*Prose*,
vol. II, p. …`; in the list of sources, `*Prose*, vol. II: 1939–1948, edited by Edward
Mendelson (2002)` the first time and the short form after; and wherever a page of it is
cited under an entry or in the list, `*The Enchafèd Flood* (1950; Vintage Books edition,
1967)`, since every page number of that book on the site is the Vintage edition's (the
one scan all the pieces were written from; its own front matter says so).

Lines changed here (6): `auden[0].source`, `auden[1].source`, `auden[3].source`, `auden[5].source`, `sources[4]`, `view.source`.

The checker says of the piece what it said before. Copy before:
`lead/before-cite-forms.json`.

## The lead in the last pass: one wording for each figure (3 October, 19:55 UTC)

Each Figure tab says in one line under the figure’s name what the figure is. Laid side by
side, the 82 tabs gave the 17 figures that stand on more than one page a different line
on nearly every page. Each figure now has one line, with a tab’s own tail after “; here”;
anaphora, epistrophe, anadiplosis, parallelism and asyndeton keep one sentence whose number
and unit are fitted to the passage. No name, mark, caption or claim changed in this step.
Why and how: `review/remake/last-pass/RECORD.md`, “One wording for each figure”; the table
of lines is `review/remake/last-pass/figures/lead/lead_lists.py`.

Lines changed here (1):

- `plates[1].lenses[0].plain`, the plate `rhine`, the tab Against (antithesis):
  was “two opposed things set side by side, often in phrases built alike”;
  now “two opposed things set side by side, often in phrases of the same build”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.

## The lead after the word critic of the last pass (4 October, 00:08 UTC)

A critic read the lines written after the pieces' critics had read: the
figures' lines, the measures and the front page's cards. Its report is
`review/remake/critics/last-pass-words.md`; what the lead did with each
point is in `review/remake/last-pass/RECORD.md`. In this reading, exact
edits, each proved to change only the leaf it names (the file before is
`lead/before-last-pass-words.json`):

- `Armour`
  became `Armour, 1911` (3 labels)

The checker says what it said before.
