# Working notes: every kit fault of the reports, and what became of it

(Mender's notes for "Not changed, and why". Not a hand-in. Words of works are never typed here.)

(19:30: these notes were kept while reading. The last word on every fault is in `RECORD.md`: what is marked
WEIGH here was either mended under "Changes" or is listed under "Not changed, and why". blake and
don-giovanni were weighed straight into the record and have no list here.)

## baudelaire ("Still there after the seventh mending", 1 to 7, and observations)
- 1 evening, unmarked French between English and caption on a phone: MENDED, 2a.
- 2 place line repeats words of the heading (evening, warning; budget names one journal of two): WEIGH (plate.js place line).
- 3 warning 1280, a date in the passage parted before its year (prose, a held run over 14 letters): NOT (the limit of a held run is the fifth mending's; a date rule for passages needs month names in every language).
- 4 evening Delay 360/320, a key row breaks after a numeral that begins a name: WEIGH (lens-figure key: tie the numeral to its name).
- 5 Sources, a range in small roman numerals breaks at its dash: 3a.
- 6 a held run at its limit leaves a line short at 320/360: NOT (the price of holding a run; narrowest phones only).
- 7 warning Words 1280 (191 px bare under the passage), budget Words 1280 (228 px): NOT (under the measure of `low`; see 2d).
- obs: a stroke 164 px long at 360 (reads); notes 13 px and glosses 12 px on a phone (settled sizes); a caption turns inside a quoted word at its hyphen; the maxim (prose) turns one word after a comma; evening French 1280 remarks run 119 px past the caption (under 2d's 120).

## orpheus ("The kit's, worst first", 1 to 9)
- 1 labels of passage and version dropped when set line under line: MENDED, 2b.
- 2 Beat, a turned line loses the tie across the stop: MENDED, 1f.
- 3 terms Measure 1280: a key set across the plate breaks its columns inside a group (mark rows two and two): WEIGH (css, `.k + .k` break-before avoid).
- 4 key shows a dot no line has: MENDED, 1h.
- 5 aria Endings/Calls: the Beat room stays under every line on tabs that do not use it: NOT (the brief: the room between a line and its English stays; lines keep their place from tab to tab).
- 6 `.dg-keys` leaves its last word alone: 3e.
- 7 a passage's label turns and leaves a word alone (terms 360): 3e (`.beside-l`).
- 8 upper part of a turned line keeps a mark's room when only the lower part is marked: NOT (small, may be meant; the parts of a marked line keep one pitch).
- 9 a caption parts "Act" from its number (song Strophes 390): captions are html from the build and never pass tidy(): WEIGH (tidy the text nodes of a caption, outside bold).

## rilke ("Faults that are the kit's", 1 to 8; a, b)
- 1 phone, unmarked passage between marks and caption (count, turn): MENDED, 2a.
- 2 turn Word 1280, bare paper under the English: MENDED, 2d (keys-under).
- 3 no labels line under line: MENDED, 2b.
- 4 panther Beat phone, dots of the voice right over the English line: the plate is `beside` now (the reading); elsewhere NOT (room between a line and its English: the brief).
- 5 panther Rhyme 320, a bracket on the edge, two uprights on one another: gone with `beside` (look in the 320 sweep).
- 6 rhyme letter 13.5 px beside verse of 27: NOT (size settled; KIT-CHANGES leaves it on purpose). Threads as points, key "from line to line": MENDED 1b. Slate/umber, umber beside ochre hard to tell: NOT (eight colors, settled).
- 7 turn 320, label of the German leaves a word alone: 3e.
- 8 small: first word of a ruled phrase alone at a line's end (prose; NOT); Figure key repeats one sample per numbered step (NOT: each step is a row of the key; one design for all figures); kicker dot: 3b; panther 360 row 3.2 turns on Beat only (NOT: weights; within a pixel); a turned line marked in one part keeps room under both (NOT, as orpheus 8).
- b (beside): room for a rhyme letter taken from English lines that carry none: = don-giovanni 5, WEIGH/MEND. Middle-stop rule only for rows of the first passage, checker refuses `turn` for p: rows: WEIGH (plate.js loop) / the checker is the lead's. Demonstratives: LEADS.

## fidelio (K1 to K7)
- K1 names and headings of the German as rows of verse: the lead's (build).
- K2 answer Versions 1280/390, a pair's number runs into the speaker's name under it (prose row, shorter line): = don-giovanni 6. WEIGH (lens-compare: where a number hangs).
- K3 answer, third English name further from its speech (stanza space between name and speech): = don-giovanni 4, the lead's.
- K4 scene English, a turned line of a block version that the tab does not mark keeps its parts a row apart: WEIGH-low (`plain` for rows of a block; must keep whole lines to the pixel).
- K5 answer 390, labels leave a word alone: 3e.
- K6 the cut (eight rows one block): the lead's.
- K7 long plates on a phone: NOT (the brief).

## dante-inferno (K1 to K9)
- K1 ulysses Antithesis, the stroke never drawn (English between): MENDED, 1a.
- K3 four tabs on two rows 320 to 375: MENDED, 2c (`close` wherever the last tab stands lower).
- K9 the closer letters lose to the later rule: MENDED, 2c.
- K2 gate Rhyme 320, two brackets run together: MENDED, 1e (see the record).
- K4 gate Figure, the left spine's ticks end 2 px from the first letters (every width): WEIGH (lens-figure spine: tick and distance on the left).
- K5 quotation at the head ends a line on a short word: 3b.
- K6 a folded table of many columns scrolls sideways on a phone with nothing to show it: NOT (its artist gives a narrow sheet fewer columns; a sign that a table scrolls would be a new mark).
- K7 the stand-in table prints a working key: answered by the seventh mending (seen only if a script fails).

## adams (A1 to A10)
- A2 map and align, strokes for some pairs and not others: MENDED, 1c.
- A1 key rows joined by commas: sentence key 3d. A row of ONE name that holds a comma still reads as two: NOT (nothing joins there; the name is the reading's).
- A4 dynamo 320, four tabs on two rows: 2c (check adams dynamo at 320 with tabs.mjs: it was not among the nine).
- A6 caption far below the marks on a phone; 53 px a line on every tab: NOT (the brief).
- A7 a range of years with a hyphen (the data: not the kit); lowercase "chapter": 3a; kicker dot: 3b.
- A8 no call for a link in a drawing (`d.link`): NOT (a new call; scripts are the pieces' own; for the lead). Link underline: 3e. `dg-lab` 10.5 px: NOT (settled).
- A9 small type on a phone (12 and 13 px): NOT (settled).
- A10 600 to 900 px, remarks in a narrow column beside the caption: = blake 7 / don-giovanni 3, WEIGH. A one-letter word ends a caption line (born Book 390): NOT unless captions are tidied (then weigh).

## gotterdammerung (1 to 8)
- 1 a thread runs from one language into the other: MENDED, 1b.
- 2 nothing joins one German line to the next (English between): MENDED, 1a and 1b.
- 3 the labels are never shown: MENDED, 2b.
- 4 room for a rhyme letter that neither plate has: MENDED ("4, taken here").
- 5 Word tabs, two kinds of gray italic under one line: MENDED, 2e.
- 6 slate on a letter looks faded: NOT (the eight colors are settled; a darker slate is the lead's to decide).
- 7 long plates: NOT (the brief).
- 8 (if beside) an arc from the German into the English level with it: 1b; phone order: 2a.

## phedre (2.1 to 2.11)
- 2.1 Beat key shows dots no line has: MENDED, 1h.
- 2.2 English tabs wide, the two versions out of register by half the band (slip, names; 1280, 1024): WEIGH with don-giovanni 10: the common pitch (css line 249) only where level() has set rows level.
- 2.3 names English one column, tie numbers on a speaker's name: = don-giovanni 6 / fidelio K2, WEIGH (lens-compare).
- 2.4 wide, caption and key under the English, the French column bare: MENDED where the gain is 120 px or more, 2d.
- 2.5 a long key in three columns parts its own lists: = orpheus 3, WEIGH (css).
- 2.6 a tie sits on the pause (arc meets the top of the two bars): WEIGH/MEND (lens-beat: the bars begin at the rule where a tie passes over them).
- 2.7 Break at 390, one of the reading's two joins drawn: NOT (what is drawn is true; whether a phone should say less is the lead's; the reading can set `join`).
- 2.8 English lines of a version turn off their stops; on English their halves stand a line apart: WEIGH (stop rule for rows of a block version; `plain` for them) = rilke b, fidelio K4.
- 2.9 a line turns on the Beat tab only: NOT (bold syllables and the room of remark numbers; it turns at its cut).
- 2.10 Rhyme, one long sweep where only the first line of a pair turns: NOT (small, touches nothing).
- 2.11 a bold quotation in a caption breaks at its hyphen: WEIGH with don-giovanni 12 (hold a short bold phrase).

## kierkegaard (K1 to K8)
- K1 weaning, rows of a refrain begin at two places (the first paragraph flush, the others indented): NOT (a first paragraph is set flush as a book sets it; changing it moves every plate of prose; the lead's).
- K2 weaning, a line of three points before rows that begin with points of omission (the gap shown twice; uneven pitch at 1280): WEIGH (plate.js: the gap line where the row itself opens with points).
- K3 window, the edition's own points and the kit's after them (six points): WEIGH/MEND (makeRow: no cut mark after a last word that ends in points).
- K4 lines that stop far short on a phone (a hyphened word or a marked run may not turn): NOT (the rule of held runs; listed for the lead to weigh).
- K5 greater 320, four tabs on two rows: MENDED, 2c.
- K6 kicker dot at 320: 3b.
- K7 a gloss runs on under the next word: NOT (a hairline parts two glosses; little left).
- K8 sources: a book's number parted from its name, a book from chapter and verse: 3a; a day parted from its month: 3a (added: day and month).

## karamazov (1 to 6)
- 1 Read on parts "Chapter" from its number: 3b.
- 2 cry 390/360, the label over the passage leaves a word alone: 3e (`.beside-l`).
- 3 cry 320, four tabs on two rows: MENDED, 2c.
- 4 cry Earlier 390, kiss Again 360: a paragraph cut short leaves its last word alone with the points of omission: WEIGH/MEND (the points keep to the last word with a no-break space).
- 5 `.dg-keys` not set like a caption: 3e.
- 6 a link in a drawing takes the page's underline: 3e.

## hamlet (1 to 8)
- 1 to-be Beat, no pause mark inside a dash-joined word: the lead's.
- 2 seems Naming 320, align joins two of three lines: MENDED, 1c.
- 3 seems 320, four tabs on two rows: MENDED, 2c.
- 4 the kit's own choice of a turn: (a) of two stops equally near the middle the first wins though the second is heavier: WEIGH (plate.js, the middle-stop rule); (b) leading words not in the list: LEADS (the lead's list only; longer prepositions and clause words NOT).
- 5 Appendix, paragraph, chapter, a Gospel and its verse parted: 3a.
- 6 seems Rhyme, a word both thread and rhyme; stroke and dot do not meet at a turn: MENDED, 1e.
- 7 readiness Words 320, a second level of sense 2 to 3 px above the next line: WEIGH (lens-word: room for the lower level).
- 8 small: the browser evens last lines in the sources (NOT); a marked run of prose longer than a held run parts (NOT).

## horace (1 to 13, and the Measure notes)
- 1 Measure on a phone, the key comes last (after the remarks): NOT (the brief: the order stays).
- 2 the key names the marks and does not say what they mean (length is time; no row for the heavy letters): the dot's label MENDED, 1i; the rest is wording: the lead's (the artist proposes "a long syllable: twice the time of a short one").
- 3 the hairline keeps an even pace and lifts the accents: NOT (a change of motion; the lead's).
- 4 crossing English 1280, a bare quarter: MENDED, 2d.
- 5 crossing Words, glosses and version read as one text: MENDED, 2e.
- 6 the bar stands on the mark beside it: MENDED, 1g.
- 7 bee row 6.2, the tie touches the short mark: MENDED, 1f.
- 8 dashes of seven to ten lengths: MENDED, 1g.
- 9 crossing Order, one stroke where four colors join: MENDED, 1a.
- 10 bee 320, four tabs on two rows: MENDED, 2c.
- 11 head of the page, a line ends on a word of one letter (quotation; title at 320): 3b.
- 12 (if beside) the version between the Latin and the caption on a phone: 2a.
- 13 a line of the version turns after a pointing word: LEADS.

## faust (1 to 9)
- 1 no plate says who speaks; the gap not shown (line under line): the lead's (the build carries them up).
- 2 whose the English is: MENDED, 2b.
- 3 heaven Rhyme, strokes outside the plate on phones: MENDED, 1e.
- 4 heaven Parody, the spine through four English lines: MENDED, 1d.
- 5 a turned line of English (line under line) stands as two lines on tabs that do not mark it (320, 340): WEIGH (with fidelio K4, phedre 2.8: `plain` for a turned row of the version that the tab does not mark).
- 6 the English floats between two lines on every tab but Beat: NOT (the brief).
- 7 the heading of a drawing parts "Part" from "I": 3c.
- 8 twelve lines two screens tall: NOT (the brief).
- 9 small: wheel English pair 4, a stroke at 390 and numbers at 1280 (NOT: both read); two tiers of gray italic (2e); wheel Anaphora, the spine 7 px from the lines and 5 px from the plate's edge on a phone (clear; see dante-inferno K4); heaven Parody 360/320 row 1.0 marked in one part keeps room under both (NOT, as orpheus 8); wheel 320 tabs: 2c.

## magic-flute (1 to 12; one of the three added by the lead)
- 1 Rhyme on a phone, the parts of a turned line far apart: MENDED ("With 1e").
- 2 weddings 1280/1024, a long place pushes the tabs under the heading, at the left: NOT (the label of the hosted part is the lead's; tabs to the right when they drop is a choice of look).
- 3 weddings, two passages side by side do not begin level (one label takes two lines): WEIGH (arrange: one height for the two labels in two columns).
- 4 German possessives: LEADS.
- 5 glosses 12 px on a phone: NOT (settled; the artist tried 13 px and found no collision on this piece).
- 6 a remark's number stands after a hanging dash: NOT (needs measuring inside the tail of a word; small).
- 7 weddings List, the left spine's ticks end 2 px from the first letters: WEIGH with dante-inferno K4.
- 8 a label leaves its last word alone: 3e.
- 9 speakers' names 2 px closer in a second passage: NOT (seen only with a ruler).
- 10 the foot joins heading and tab with a comma: the lead's list (piece.js).
- 11 a one-letter word ends a line under the record: NOT (tidy() has no rule for it; not asked; it would re-wrap notes everywhere. For the lead).
- 12 a line may turn on the Beat tab only (fractional): NOT (as phedre 2.9).

## carmen (1 to 7; added by the lead)
- 1 habanera Figure, a named join not drawn: MENDED, 1a.
- 2 cartes Rhyme, a thread as three specks, the key: MENDED, 1b.
- 3 cartes Count 360/320, a turned line loses the arc: MENDED, 1f (the hook). It turns on Count only at 360: NOT (as phedre 2.9).
- 4 French leading words: LEADS.
- 5 the place beside a heading says the heading again (habanera, cartes): WEIGH with baudelaire 2 (the place line in plate.js).
- 6 cartes 320, four tabs: 2c (check with tabs.mjs).
- 7 la-bas Word 1280, the notes run 290 px below the French: 2d moved it at 1024; check 1280 with the probe.
- small: la-bas English 1280, uneven distances where rows are set level (NOT); the rhyme letter the size of a gloss (NOT, settled).
