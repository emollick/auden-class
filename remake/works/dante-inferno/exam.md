# Examination of dante-inferno

Examiner's marker: `examiner.txt`, written Sat Oct 3 08:03:20 UTC 2026. No marker was there before.

Read first: BRIEF.md, POET.md, EXAMINER.md, the model (tempest/reading.json), then the poet's reading.json and notes.md.

Result: **mended**. The three passages and all twelve tabs stand. Nothing had to be cut. Fifteen small things were mended (section 10). The checker ends with no problems, no warnings, and printed notes fit to print (section 12).

Words of the poem are pointed at here by row and word number (row 33.0 w4 is the fifth word of the first line of block 33), as the brief asks. A line number in a canto is three times the block number, plus the row, plus one.

## 1. The proof

`node build/tools/check-reading.mjs dante-inferno` at 08:05 UTC, before any change: no problems, no warnings, the printed notes fit to print. It was run again after every change (section 12).

Every mark was read against the word it lands on in the proof.

- **Rhyme (gate).** Twelve line ends, letters a b a, b c b, c d c, d e d. Each letter was checked against the sound of the line end, and each tail (3 or 4 letters) against the letters that carry the rhyme. Right. The last middle sound (row 3.1, letter e) has no partner on the passage; it is answered at lines 13 and 15 of the canto (dante-italian/inf-03, block 4, rows 0 and 2), which was read. Right.
- **Anaphora (gate).** Parts A are w0-3 of rows 0.0, 0.1 and 0.2: the same four words three times. Parts B are the rest of each of those lines. Part C is row 2.2 w3-4. Right.
- **Word (gate).** Eight notes; each lands on the word glossed (rows 1.1 w3; 1.2 w2; 1.2 w5-6; 2.1 w5; 2.1 w6; 2.2 w0; 3.0 w3-4; 3.2 w7).
- **Compare (gate).** Five ties; each joins the Italian word to the English word that stands for it in Longfellow (p:0.0 w8; p:0.1 w7; p:2.2 w0-2; p:2.1 w5; p:3.2 w6).
- **Sentence (Francesca).** Thirteen spans. The subject is w0 of rows 33.0, 34.0 and 35.0. The two clauses in the present are w1-5 of rows 33.0 and 34.0. The acts in the past are 33.1 w0-1, 34.1 w0-1 and 35.0 w1-5, with the object inside each (33.1 w1, 34.1 w0, 35.0 w2). The two clauses on what still holds are 33.2 w4-8 and 34.2 w3-5. Right.
- **Polyptoton (Francesca).** Row 34.0, w0, w3 and w4: noun, participle, infinitive of one root. Right.
- **Beat (Francesca).** See section 2.
- **Word (Francesca).** Ten notes, each on its word.
- **Antithesis, Metaphor, Word (Ulysses).** Each part and note on its word (39.1 w4-6 against 39.2 w2-5, hinged on 39.1 w1 and 39.2 w0; 41.1 w1, w3, w6 and w5).
- No word on these three passages is two words joined by a dash, so no mark needed a part number.

## 2. The ear

The three scanned lines are rows 33.0, 34.0 and 35.0 of dante-italian/inf-05 (lines 100, 103 and 106). I marked each by the rules of the Italian line before looking at the poet's strings: count the syllables with vowel run into vowel between words, find the word accents, see that the tenth syllable is accented and the line has eleven.

- **Row 33.0.** No two vowels meet between words. Eleven syllables. Word accents fall on the 2nd (w0), 4th (w2), 6th (w3), 7th (w4) and 10th (w5). The poet's string agrees.
- **Row 34.0.** The last vowel of w2 runs into the first of w3, and the last of w3 into the first of w4. Eleven syllables. Accents on the 2nd, 4th, 6th, 8th and 10th. The poet's string agrees, with the two uncounted vowels marked. The second point ("seven written syllables count as five", w2 to w4) is right: 2 + 3 + 2 written, two of them lost.
- **Row 35.0.** The vowel that ends w2 and the vowel that begins w3 stay apart. The line needs it: run together, the line would have ten syllables. Accents on the 2nd, 4th, 6th, 8th and 10th. The poet's string agrees.
- **The stated measure** ("eleven syllables; the last accent always on the tenth, and in these lines a main accent on the sixth") is true of all three.
- **The rule the caption leans on** (an accent set right beside a main accent often brings out its word) is the Enciclopedia Dantesca's, under *endecasillabo*, section 6, with examples of an accent after the sixth. It was read again. That the rule applies to row 33.0 is the poet's own step; the third caveat tells the reader so, and the caption says "often". In that line w3 and w4 both carry a word accent, so the meeting of accents on the 6th and 7th does not rest on a doubtful syllable.
- The picture of the tab was looked at (section 3): the bold syllables and the dots are where the strings put them.

## 3. The terms, and what the page joins

- **Anaphora**: the same words at the start of three lines running. It is what the name says (Silva Rhetoricae, "anaphora"; the Enciclopedia Dantesca under *anafora* gives this very opening as its example; the notes of Bosco and Reggio and of Chiavacci Leonardi on line 1 use the word).
- **Polyptoton**: Silva Rhetoricae defines it as repeating a word in another form, or using a word of the same root close by, and gives *paregmenon* as the wider name. On row 34.0 a noun and two forms of the verb of one root stand in one line, so the name holds in Silva's sense. The plain gloss said "one word repeated in different grammatical forms". The noun and the verb are two words of one root. **Mended** to "one root repeated in different forms", which is also what the caption says. No commentary on line 103 names the figure (the Dartmouth Dante Project was searched at that line, in any commentary, for four names of it: nothing).
- **Antithesis**: two contrary things in matching form, on *not* and *but*. Right (Enciclopedia Dantesca, *antitesi*; Silva Rhetoricae).
- **Metaphor**: one thing called by the name of another. Right.

**What the page joins.** The artist's pictures of 08:53 UTC were looked at (all twelve tabs, 1280 px), and after the mend the piece was built and photographed again in a copy outside the project.

- Anaphora: a bracket joins the three A parts, another the three B parts; C stands alone. The caption joins them so. No change.
- Polyptoton: a chain joins the three forms. Right.
- Antithesis: underlines only. Nothing wrong is joined.
- **Metaphor: mended.** The page drew a stroke from oars (41.1 w1) to wings (w3) and another from oars to flight (w6). The caption says oars are made wings; it does not say oars are a flight. It says the flight is the voyage, and that the word mad (w5) stands on the flight. `join` is now `[[0, 1], [3, 2]]`: oars to wings, mad to flight. The new picture shows those two strokes and no other.

- **Journeys: the artist's drawing.** When the examination began this tab had no drawing. The artist wrote one while it went on (`site/js/pieces/dante-inferno.js`; read as it stood at 09:17 and again at 09:25 UTC). It was photographed in the outside build at 1280 and 390 px with the reading as mended. It shows the hundred cantos as one line in three parts (cantos 1 to 34, 35 to 67, 68 to 100; 5, 3 and 6 times), a dot with a flag at each of the four journeys (cantos 2, 8, 26 in red, and 94), and ten short strokes for the other places (cantos 12 and 19; 46, 47 and 54; 72, 75, 84, 86 and 89). Each flag gives the place, who says it and of what, and the first and last say "the first of the 14 times" and "the last of the 14 times". All of it agrees with the facts and with the caption; a stem joins each dot to its own flag and to nothing else. The script reads the fact keys `parts` (part, cantos) and `places` (place, canto of 100, said by, said of, a journey, in this passage, read). I renamed and reshaped none. The table folded under the drawing prints the places with the column heads place, canto of 100, said by, said of, a journey and in this passage (the kit leaves out `read` and `note`): all are a reader's words.

A note on where the pictures were built: the rule of this run is to write only inside this piece's folder, and `node build/pieces.mjs` writes into `site/data/pieces/`. So the build was run on a copy of `build/`, `site/` and `content/` in the session's scratch folder, and the pictures taken from there. Nothing was written under `site/` by me. The artist's builds in place picked up the mends as they were made. The one of 09:26 UTC was compared field by field with a build of the reading as it then stood: it differed only in the first caveat, reworded at 09:28 UTC. One more mend followed, in the Beat caption, at 09:37 UTC, and the artist built again at 09:37:34 UTC. That build was compared field by field with a build of the final reading: **no difference**. So the copy under `site/data/pieces/` has every mend, and needs building again only if the reading changes after that time.

## 4. The words (each dictionary entry opened again in this session)

Enciclopedia Dantesca at treccani.it (each entry is a page of its own):

| word (row) | what the entry says | verdict |
|---|---|---|
| *durare* (2.1 w6) | cites line 8; to last | holds |
| *duro* (3.2 w7) | the place "long discussed", between hard to understand and painful; cites John 6:61 | holds |
| *oscuro* (3.0 w4) | most take it as black letters; Momigliano, Sapegno, Pagliaro and others as dark threats | holds, in the entry's own order |
| *dolente* (0.0 w7) | sorrowing | holds |
| *lasciare* (2.2 w0) | gives lines 9 and 14 together, sense of abandoning | holds; the note did not cite it and now does |
| *fattore* | quotes Vita Nuova 29.3 on three and the Trinity | holds |
| *gentile* (33.0 w3) | line 100 echoes Guinizzelli's famous line, cited in Convivio 4.20.7 | holds |
| *apprendere* (33.0 w5) | quotes Guinizzelli's line on the fire of love and names Dante's sonnet | holds |
| *ratto* (33.0 w4) | at once, quickly; cites line 100 | holds |
| *persona* (33.1 w5) | the body; an emblem word of the chivalric and sensual idea of love and beauty; cites line 101 | holds |
| *ancora* (33.2 w7, 34.2 w3) | sense 1, even now, lists lines 102 and 105 | holds |
| *perdonare* (34.0 w5) | the only use in the Inferno; kin to sparing a life | holds |
| *piacere* (34.1 w4) | beauty, what pleases | holds |
| *spegnere* (35.1 w6) | from life as a flame, to kill; cites line 107 | holds |
| *semenza* (39.0 w3) | origin, the human kind | holds |
| *virtù* (39.2 w3) | in line 120 an impulse to act, and so courage; "anticipated, by antithesis, at line 22" | holds, and backs the caption's link to line 22; added to the grounds |
| *acuto* (40.0 w6) | eager, ready; base sense sharp | holds |
| *orazione* (40.1 w2) | a term of rhetoric, a complete speech; exhortation here | holds |
| *folle* (41.1 w5) | the fourteen places; the four journeys set together | holds |
| *mancino* (41.2 w4) | left, toward the south-west | holds |

Lewis and Short at Perseus: *duro* (from *durus*; to make hard; to hold out; to last), *follis* (bellows, a bag blown up with air), *virtus* (from *vir*; manliness, courage, worth, virtue). All hold. Treccani *Vocabolario*: *folle* (1), from Latin *follis*, which took the sense of an empty head; sense 1b quotes this very line; *folle* (2), a bellows. Holds. Online Etymology Dictionary: *fool* (Latin *follis*, bellows, leather bag; a windbag), *doleful* (Middle English *dole*, grief, now archaic). Wiktionary: *dolent* (archaic, sad; Latin *dolens*), *dole* (archaic, grief). All hold. Each sense is the fourteenth-century one, since the Enciclopedia Dantesca glosses Dante's own lines.

Not opened: the Oxford English Dictionary (the poet could not open it either; the two public dictionaries agree with each other).

## 5. Auden (each place found again)

| what the reading says | where it was read | verdict |
|---|---|---|
| The view: the wrath of God; the gate's lines; Landor's remark | fa.txt, the page ending in 176 | exact; the quotation is 16 words and exact. He quotes the gate's fifth and sixth lines only. |
| The Enchafèd Flood on Ulysses | ef.txt, pp. 9–10 | exact; the quotation is 13 words and exact. Every sentence of the entry is in the passage. |
| The Dyer's Hand on Purgatorio 17 | dh.txt, the foot of p. 130; the head of p. 131 follows | holds. He quotes three lines, 94 to 96. **One note under a caption said he quotes lines 91 to 96: mended.** |
| "Eros and Agape", The Nation, 28 June 1941 | the text of the issue at archive.org | holds: Purgatorio 17.104-105 in Italian as what Eros is |
| The note in New Year Letter | search snippets of the scanned Faber edition | holds: the prose of Purgatorio 17, signed, before the note to line 1432 |
| The Prolific and the Devourer (1939) | search snippets of the scanned Prose, vol. 2 | holds word for word in paraphrase (gates always open; the lost free to leave; they know why they do not; that knowledge is Hell's flame) |
| "Red Lizards and White Stallions" (1946) | the same scan | holds; the date line reads 22 April 1946 there, not a Saturday, so "April 1946" is the prudent form |
| "Vocation and Society" (1943) | both scans | holds. The page in Prose, vol. 2 (180) is worked out from the head of p. 181, which falls inside the passage of Nietzsche that follows; the head of p. 180 was not found by search. |
| Lecture on Romeo and Juliet (1946) | search snippets of the scanned Lectures on Shakespeare | holds: romance and love; the warning; the quotation that begins with the three sentences shown and runs to the canto's end |
| "The Essence of Dante" (1947) | search snippets of Prose, vol. 2, read twice | holds: p. 324 for the sentences used; the date; Binyon's version judged the best so far. In the sentence used twice here, "the latter" is the Italian, for whom parting Dante's matter from the form is unthinkable, and "the former" is the reader of English, disturbed by what a scarcity of rhymes forces on even the most brilliant attempt to keep the form. The passage of Eliot is called unrhymed tercets. The sentence on not having to choose ends p. 324. |
| Pearce on the examination | pearce.txt, the page ending in 153 | exact: seven cantos, the prose version, beginning with Inferno 3 and 5, cut to five |
| Miller: six cantos | search snippets of the scanned memoir | holds |
| The Nation, 24 December 1938 (the earlier form of Landor's remark, with his doubt) | the text of the issue at archive.org, p. 689 | holds |

**The view** is his view of a passage shown (the gate's lines), and the first passage shows the lines he quotes. Right.

**The list under the passages.** Eight entries. Seven bear on a passage shown or on the course of 1941. The eighth, the talk of 1943, bears on the canto of the first passage and not on its lines: he applies the souls just inside the gate to a student without passion and quotes two lines about them in the course's translation. It is more than a passing mention, and it shows the canto in his hands a year after the course, so it stays. The four passing mentions the poet moved to notes.md belong there.

**Said of this?** One place needs the reader's care. In the second tab on the gate the sentence from 1939 is about Hell's gates and the lost in general. He names the Inferno two sentences later, and the caption gives the words as his without saying he wrote them of Dante's gate; the second caveat says he does not name it. It stays. If the lead wants a sentence that is squarely of this gate, the review of 1946 has one (the words over the gate are misread when Hell is pictured as a penalty laid on people without their consent).

## 6. The reason and its ground

Each caption and each `why` was taken a sentence at a time. Sources read again for this test, besides those above:

- Dartmouth Dante Project, each note fetched in this session: Singleton on Inferno 3.5-6, 3.8, 3.12, 5.100-108, 5.102, 5.104, 32.58; Bosco and Reggio on 3.1-15, 3.1-9, 3.1-3, 3.5, 3.7-8, 3.10-11, 5.97-107, 5.100-107, 5.103, 5.105, 26.100-123, 26.112-120, 26.118-120; Chiavacci Leonardi on 3.1-9, 3.1, 3.5-6, 3.9, 3.12, 5.103, 5.104, 26.125; Sapegno on 5.102, 5.103; Hollander on 5.100-106, 5.102, 5.103, 26.118-120, 26.124-126; Grandgent on 5.107; Longfellow on 3.1.
- Enciclopedia Dantesca: *terzina* (sections 1, 2, 6), *anafora*, *rima* (2.6), *endecasillabo* (4, 6), *sinalefe*, *dialefe*, *metafora*, *antitesi*, and the sonnet's entry.
- Henry Peacham, The Garden of Eloquence (1593), at Perseus: Epanaphora and Paregmenon, with "The use of this figure" under each.
- Silva Rhetoricae: anaphora, polyptoton, paregmenon, antithesis, metaphor.
- Guinizzelli's song on Italian Wikisource (first line; line 11).
- The Vulgate at Perseus: Genesis 3:4-5; John 6:61. Virgil, Aeneid 6.14-19, at Perseus.
- Samuel Longfellow, Life, vol. 3 (the scan's title page: vol. 14 of the Works, Houghton, Mifflin, copyright 1891): the journal for 7 May 1864 on p. 35; the letter to Ferguson of 8 May 1867 on p. 88.
- Baum, chapter 4. Wikipedia on Binyon. Italian Wikipedia on the Enciclopedia Dantesca (for its years).
- The hosted texts: Inferno 2 (blocks 10-11), 3 (block 4), 5 (block 12), 8 (blocks 27-30), 26 (blocks 6-7, 28-29, 33-38), 32 (block 19); Purgatorio 17 (blocks 30-34), 22 (block 3); Paradiso 27 (blocks 26-27); and the ten other places of the count (below).

What was found, tab by tab.

**The gate, Rhyme.** Every sentence stands (the marks; Enciclopedia Dantesca, *terzina*; Auden 1947). "Every group open to the next" is the dictionary's claim about the form, and it is true of the four groups shown. No change.

**The gate, Figure.** Two faults.
1. "Many cities of Dante's time had verses over their gates." Neither note says that. Bosco says many cities of his time bore an inscription over the gate. Chiavacci Leonardi says the nine lines are made in the likeness of the verse inscriptions on the gates of medieval cities. The sentence joined "many" from one to "verses" from the other. **Mended** to what Chiavacci Leonardi says; the ground now gives each note its own claim.
2. "The ninth line alone turns to anyone." The passage has twelve lines, and in the twelfth the traveler speaks to Virgil by title. A general statement that one line breaks. **Mended**: "In the writing only the ninth line turns to anyone." Chiavacci Leonardi's note on line 9 says the same of the inscription.

**The gate, Word.** Two faults.
1. "The middle lines name the gate's maker as the three persons." The passage has twelve lines; the lines meant are the fifth and sixth, and those two are the ones Auden quotes. **Mended**: "The fifth and sixth lines". ("These lines" and "the senses" were shortened to "them" to keep the count at 110.)
2. Not a fault: "from the Latin for hard" for the verb at 2.1 w6. The verb is Latin *durare*, which Lewis and Short derive from *durus*; the note at the word gives both steps.

**The gate, Compare.** Every sentence stands (the two versions; Longfellow's journal and letter; Auden 1947; his note on line 1). The twelve English line ends were read: none rhymes. No change.

**Francesca, Sentence.** One fault and one gap.
1. "In these eight lines": the passage has nine, and the ninth is the narrator's. **Mended**: "In her eight lines here". The same in the note under the caption and in the last entry of the sources. The count was made again: eleven verbs with a subject of their own, none of them I or we.
2. The caption calls the two clauses in the present "laws" and its reason is that Love is put as the cause. The poet grounded the reason on Peacham's general rule and on the count. The commentaries say it of these very lines: Singleton speaks of two laws of love and of Francesca excusing herself, Bosco and Reggio of one build of sentence in the three groups and of responsibility moved to Love, Hollander of blame laid on Love. **A ground was added** with the three notes. The caption was left as it is: the brief asks for one view and no pile of critics, and the caption says nothing the lines and the count do not bear.

**Francesca, Figure.** Every sentence stands (Peacham under Paregmenon, almost word for word; Enciclopedia Dantesca, *perdonare*; Purgatorio 22.10-12; Bosco and Reggio call it Dante's correction). Only the plain gloss was mended (section 3).

**Francesca, Beat.** One fault, found when the picture of the tab was set beside the caption. "The rule under each line shows the count": the passage has nine lines and only the three scanned lines have a rule under them. **Mended** by moving the sentence after the one that says which lines are scanned: "The three lines that begin with Amor, Love, are scanned: the rule under each shows the count, and the dots show the voice's accents." The rest stands (section 2). The rule on meeting accents was read once more in the dictionary (*endecasillabo*, section 6): it is a rule of "often", as the caption has it, and it is the word under the added accent that is brought out; the dictionary's own examples of an accent after the sixth follow the rule.

**Francesca, Word.** One fault. "Auden ... ended it with her speech." The lecture ends with a long quotation of the scene, which begins at her three sentences and runs through the narrator's words and her second speech to the end of the canto. **Mended**: "ended by quoting this scene". The rest stands: Guinizzelli's phrase and verb; the sonnet; Purgatorio 17; Inferno 5.37-39.

**Ulysses, Antithesis.** One fault. "These three lines end the speech ... The last two set ...": the passage has nine lines. **Mended**: "The first three lines end the speech ... Its last two lines set ...". The last sentence puts two checked facts side by side (what the Serpent promises in Genesis 3:5; the last word of the speech) and does not say Auden made the link himself; it stands. (Hollander's note on these lines reports the same echo.)

**Ulysses, Metaphor.** Every sentence stands (Enciclopedia Dantesca, *metafora*, on this line; Chiavacci Leonardi on line 125 for Virgil's phrase used in reverse; Aeneid 6.19; the Vocabolario). Only the strokes were mended (section 3).

**Ulysses, Word.** Every sentence stands. Counts made again on the hosted Italian: the word of 39.2 w3 comes twice in canto 26 (lines 22 and 120); the word for little comes at lines 8, 102, 114 and 122, three of them in Ulysses's telling within twenty-one lines. A ground was added: the Enciclopedia Dantesca under *virtù* itself sets line 22 against line 120.

**Ulysses, Journeys.** The count was made again with a script of my own on all hundred parts of the hosted Italian: eighteen words hold the letters *foll*; fourteen are the adjective (Inferno 5, Purgatorio 3, Paradiso 6). All fourteen places in the facts were read in their lines, in the Italian and in Longfellow: line number, who speaks, of what, and the canto's number out of a hundred. All right. The sentence that draws the reason ("one word on both journeys, first and last in the traveler's own voice") stands on the count, on the Enciclopedia Dantesca under *folle*, and on Chiavacci Leonardi's note on line 125, which says the word's sense comes out from the places where Dante uses it of his own life and that the Paradiso gives it to Ulysses's voyage again. That note was added as a ground.

## 7. The prose

Every printed string was searched for dashes inside sentences, question marks, "we", "not X but Y", stock words, British spellings, and the words plate and lens. Found: nothing to mend. "Us" and "we" appear only as glosses of words in the lines; "not and but" names the hinge of the antithesis; "Counsellor" is Auden's spelling inside his quotation.

Each "all", "every", "only", "alone", "always", "first" and "no" in a caption was counted against the lines it covers. Three failed and are mended (the ninth line "alone"; "these eight lines"; the rule "under each line" in the Beat caption). The rest hold. "Each line changes only where the way leads", in the second tab on the gate, is said of the three lines the caption has just named and the marks bracket; it is true of them and was left.

Word counts after the mends: captions 103 to 110, each `why` 36 to 40, the view 70, each note under a caption 42 to 70, each caveat 43 to 50.

## 8. The rules

- No line of the poem is typed in the reading. Captions name single words or phrases of at most four words.
- Two quotations of Auden, of 16 and 13 words. Nothing else in copyright is quoted; the commentaries and the dictionary are paraphrased.
- Each passage is nine or twelve lines.
- Rule one: nothing on the page is dressed in the subject.

## 9. The printed notes

Read as a reader would. Mended:

- **Sources**: the Enciclopedia Dantesca was dated 1970. It came out from 1970 to 1978 (the site dates every entry 1970). Now "1970–78". The working `source` of each ground keeps "(1970)", which is the label the site prints and how the next person finds the page.
- **The note under Francesca's words** said Auden quotes Purgatorio 17, lines 91 to 96. He quotes 94 to 96; line 93 is where the poem names the mind's love. Now says so.
- **Caveat 1**: Landor's remark "is not found" in Landor. A search found nothing; that is "has not been found". And "he calls her story a warning" went past the report of his words, which is that the tale holds a warning; now "he says her story holds a warning", as the caption has it.
- **Caveat 3**: "the first line of Francesca's speech" and "her sixth line". Her speech begins twelve lines before the passage. Now "the first of Francesca's lines here" and "the sixth".
- **Caveat 5**: the sentence on the examination's seven cantos repeated what the entry on Pearce already tells the reader. In its place: Auden's list named an English prose translation, and the page shows the Italian with Longfellow's verse. EXAMINER.md asks for that warning, and none was there.

Every link in the notes was opened in the hosted text and lands on the lines it names. One lands a block early by design: the link for *Purgatorio* 17 opens at lines 91 to 93, so that line 93, which names the mind's love, is in view with the three lines Auden quotes just under it.

Last, the whole page was built in the outside copy with both folded notes opened, and its text read through as a reader gets it (the view, the eight entries under "More from Auden", the 22 sources, the twelve notes on what each caption stands on, the five caveats). Italics and links come out as written. Nothing printed names a file, a tool, a block number or a research note.

## 10. Everything that was changed in reading.json

1. Gate, Figure, caption: the sentence on city gates; the sentence on the ninth line.
2. Gate, Figure, grounds: the claim on city gates, split by commentator.
3. Gate, Word, caption: "The fifth and sixth lines"; two words shortened.
4. Gate, Word, the note at 2.2 w0: its source now cites the dictionary entry it stands on.
5. Francesca, Sentence, caption and the note under it: "her eight lines here".
6. Francesca, Sentence, grounds: one ground added (three commentaries on these lines).
7. Francesca, Figure: `plain`; the claim of the ground on the name of the figure.
8. Francesca, Word, caption: "ended by quoting this scene".
9. Francesca, Word, the note under it and one ground: lines 94 to 96, and line 93.
10. Ulysses, Antithesis, caption: "The first three lines", "Its last two lines".
11. Ulysses, Metaphor: `join`.
12. Ulysses, Word and Journeys, grounds: one ground added to each.
13. Sources: the years of the Enciclopedia Dantesca; "Francesca's eight lines here".
14. Caveats 1, 3 and 5.
15. Francesca, Beat, caption: the sentence on the rule and the dots now follows the one that names the three scanned lines.

And `open`: three entries added for the lead (section 11); the poet's entries are as they were. Two of the three were rewritten at the end, when the artist's drawing and builds had overtaken what they first said. Nothing else was touched. The artist's fields (headings, labels, the facts of the Journeys tab) are as they were.

## 11. Still doubtful

- The sentence of 1939 in the gate's second tab is of Hell's gates in general (section 5).
- The page of the 1943 sentence in Prose, vol. 2, is worked out, not seen.
- Six things of Auden's were read only in search snippets of restricted scans. They were read again the same way, and agree; no full copy was seen by the poet or by me.
- No published scansion of the three lines was found. The scansion follows the word accents, and I reached it independently.
- The entry of 1943 in the list under the passages bears on the canto of the first passage and not on its lines (section 5). It stays, and the lead may judge otherwise.
- The artist was still at work when the examination ended (09:40 UTC). The drawing was checked as it stood at 09:25 UTC; a later change to the script was not seen. If the script should fail, the kit falls back to a plain table of the facts, whose first row would be headed `wholePoem`, which is not a reader's word. The key was left as it is so that nothing the drawing may come to read is renamed under it.
- The built piece under `site/data/pieces/` was made by the artist, not by me. Its state of 09:37:34 UTC has every mend (section 3); the `open` entries added after that are not part of a build.

## 12. The checker, last run

`node build/tools/check-reading.mjs dante-inferno --print`, run at 09:40 UTC on 3 October 2026, after the last change to the reading (an entry in `open`). Its 171 lines were read through (the proof of every mark, and under each tab the list of what it stands on). The last three:

    no problems
    no warnings
    the printed notes are fit to print
