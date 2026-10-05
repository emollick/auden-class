# The reader who has to use this: findings

Read as a new visitor at 1280 by 850, in the order the site gives things: the opening, week 1, the first meeting, a canto in the reader, the nine lines, the second meeting, Your book, the term page, the front page. Every step was done with my own words and answers, and the other branches were then seen from the same saved state. Findings are in the order a reader meets them. Quotations from the site are short and only there to locate the fault.

## The opening (#/)

### #/ step 1, `door.spreads[0].steps[0].lead[1]`, `meet.gaps.show`, `meet.gaps.result`
- where: "the word you think the poet used" / "Show the writer’s words" / "Your word is the writer’s in 1 of the 6 gaps."
- problem: One person has two names on one screen. In week 1 it becomes three: the lead says "Longfellow", the button and the tally say "the writer", and there "the writer" could as easily be Dante.
- fix: Take the person out of the two shared strings. `meet.gaps.show`: "Show the missing words". `meet.gaps.result`: "In {same} of the {total} gaps your word is the one that was taken out."
- weight: should

### #/ step 1 after the reveal, `meet.gaps.result`
- where: "Your word is the writer’s in 1 of the 6 gaps." (bold, first thing in the column)
- problem: The line before the button said nothing depends on being right, and the first thing given back is a score in bold. A reader who filled one gap is told "0 of the 6", as if five had been tried and missed.
- fix: Set it in ordinary weight after the six notes, not before them, and count only the gaps the reader filled: "You filled {n} gaps. In {same} your word is the one that was taken out."
- weight: could

### #/ step 1, `door.spreads[0].steps[0].notes.0`
- where: "the one thing the sea grows that looks like bone: white, hard and branching"
- problem: The coral a reader pictures, and the coral of Shakespeare’s own sonnet about his mistress’s lips, is red, so "white" stops the reader at the first note. "The one thing the sea grows" is also more than the note can know.
- fix: "Coral is hard and branching, the nearest thing in the sea to bone. The body in this song does not rot. The sea makes something of it." (A reader checking facts should confirm the color before "white" is kept in any form.)
- weight: should

### #/ step 1, `door.spreads[0].steps[0].notes.2`
- where: "The rhyme with *made* gives this one away."
- problem: I had written "decay". To a reader who missed it, "gives this one away" says the gap was easy, on the first page and two lines after being told nothing depends on being right.
- fix: "The rhyme is with *made*. *Fade* is a word for flowers and dyes, and a long way from *rot*."
- weight: should

### #/ step 1, `door.spreads[0].steps[0].notes.3`
- where: "The other sense is still in the word: the change is done to him."
- problem: "The other sense" is never named, and the words after the colon explain the first sense (to undergo) and not the second (to feel pain). I read it three times.
- fix: "In Shakespeare’s English *suffer* could mean no more than *undergo*, and that is its sense here: the change is done to him. The sense of pain is still in the word."
- weight: should

### #/ step 1, `door.spreads[0].steps[0].notes.4`
- where: "a word Shakespeare seems to have made for this song. The *Oxford English Dictionary* has no earlier example"
- problem: The gap is "strange", and two of the note’s three sentences are about a different word, one of them a dictionary citation. I had left this gap blank and wanted the word, not the reference shelf.
- fix: "*Strange* in Shakespeare’s English also meant foreign, come from somewhere else. Its rhyme is *sea-change*, a word not found before this song."
- weight: should

### #/ step 2, `door.spreads[0].steps[1].options` and `options[2].reply[0]`
- where: "The truth, but about something else." and its reply, "That is where Auden went with it."
- problem: The third choice is the answer in disguise. Nothing on the page lets a reader pick it for a reason (true of what?), it is the only choice with no reply of its own, and the first choice carries a fact not yet given ("to lead him somewhere"). Week 1 repeats the shape ("Both, and Dante knows it."), so by the second question the reader knows which button the site wants.
- fix: Offer the two answers a reader can reach from the page, "A lie." and "A comfort.", each with its present reply, and let the last paragraph of the panel bring the third answer as news. If a third choice is kept, make it one a reader could hold and give it a reply: label "True in some way, though the king is alive."; reply "Auden took it so, and he said what it is true of."
- weight: must

### #/ step 2, `door.spreads[0].steps[1].options[1].reply[0]`
- where: "Ferdinand takes it so. Just before the song he says that the music crept past him"
- problem: What he says before the song cannot show how he takes the song. The reader has to guess that "the music" is some earlier music the page has not mentioned.
- fix: "Ferdinand has already taken Ariel’s music so. Just before this song he says that it crept past him on the water and calmed both the storm and his grief."
- weight: should

### #/ panel "What Auden said in class", `door.spreads[0].steps[2].paras[0]`
- where: "By his notes Auden took two lines of this song as the subject of the whole play"
- problem: The song is printed beside the panel and the reader is not told which two lines. "By his notes Auden" also reads for a moment as Auden’s notes.
- fix: "According to Pearce, Auden took two lines of this song, the two beginning *…*, as the subject of the whole play:" What is missing: which two lines Pearce gives on p. 148.
- weight: should

### #/ panel "What Auden said in class", `door.spreads[0].steps[2].paras[1]` and `sources[0]`
- where: "The change in the play is not only in bones and eyes. It comes over the minds and lives"
- problem: No verb of saying. The source line marks only "the last sentence" as the site’s, so this paragraph should be Auden’s as Pearce reports him, yet it reads as the site’s own claim. "The last sentence" is also unclear when the panel’s last paragraph is one sentence long and the paragraph before it ends on another.
- fix: If it is Pearce’s report: "The change, Auden said, is not only in bones and eyes. It comes over the minds and lives of the people in the play. They arrive on the island as one thing and leave as another, Prospero most of all." Source line: "The last paragraph is this site’s." If the second paragraph is the site’s too, say "The last two paragraphs are this site’s."
- weight: should

### #/ panels, `meet.turn.sources`
- where: "Sources: Donald Pearce, “Fortunate Fall: W. H. Auden at Michigan,”"
- problem: The label is plural and every panel in the opening and week 1 gives one source.
- fix: "Source:" when one work is listed.
- weight: could

### #/ last panel, `door.spreads[0].steps[3].title`
- where: "That was one of his classes, in small"
- problem: "In small" is not a phrase most readers own. I stopped on it, and it reads as period flavor, which the site says it does not put on.
- fix: "That was one of his classes in miniature"
- weight: could

### #/ last panel, `door.spreads[0].steps[3].paras[2]`
- where: "This site goes through his course in that way." / "and a move of your own"
- problem: "In that way" has two things it could point to, the two questions or the page just finished. "A move of your own" is the builder’s word; the reader has only filled gaps and picked an answer.
- fix: "This site goes through his course as this page went through the song. Each week begins with a passage from a book you have not opened yet and something for you to do with it. Then you see what the writer wrote and what Auden made of it, and then you read the book."
- weight: could

### `door.blurb` (not found on any page)
- where: "Ariel’s song, and what Auden said it was about."
- problem: I could not find this string anywhere in the running site. If it is ever shown beside a link to the opening, it names the singer before the gaps are filled, which the opening takes care not to do.
- fix: Cut it, or "A song with six words missing, and what Auden said it was about."
- weight: could

## Week 1 (#/unit/1)

### #/unit/1 head, `w1.intro[0]`
- where: "and he kept it in front of the class all term"
- problem: "It" can be the list or the poem, and the list is the nearer subject. The next sentence settles it after the reader has guessed.
- fix: "Auden’s list begins with Dante’s *Divine Comedy*, and he kept the poem in front of the class all term."
- weight: should

### #/unit/1 head, `w1.intro[1]`
- where: "sixty-seven cantos, in the prose translation he assigned or in Longfellow’s verse"
- problem: "Canto" is explained nowhere on the site, the size of the reading is given only as a count of them, and Longfellow arrives as a bare surname. A reader who has not read Dante cannot tell whether this is an evening or a month.
- fix: "This week is Hell and the mountain of Purgatory, the first two of the poem’s three parts. They are sixty-seven cantos, short chapters of about ten minutes each. You can read them in the prose translation Auden assigned or in the verse translation the American poet Henry Wadsworth Longfellow published in 1867."
- weight: should

### #/unit/1 picture, `plates[0].caption` (also `plates[1]`, `plates[2]`)
- where: "Gustave Doré, the dark wood of *Inferno* I (1861)."
- problem: The reader has not opened the poem, so "the dark wood" names nothing yet, and Doré is a bare name. The same credit of some 25 words then follows each of the three Doré pictures in week 1.
- fix: "Dante in the dark wood where the poem begins (*Inferno* I). Engraving after a drawing by Gustave Doré, 1861." Give the edition and the scan once, on the Sources page, and link each caption to it.
- weight: could

### #/unit/1 "The opera", `w1.operas.orpheus.paras[1]`
- where: "Recordings of both are in three acts. The libretto printed here is in four"
- problem: Three sentences of edition history stand between the reader and the record. They matter only to someone following the libretto with a complete recording, and that reader is on the libretto’s page.
- fix: Move the paragraph to the head of the libretto. If one sentence must stay: "The libretto printed here is in four acts, and recordings are in three."
- weight: should

### #/unit/1 second card, `w1.meetings[1].blurb`
- where: "and a record of 1922 to listen to"
- problem: The record’s own label, higher on the same page, says "made about 1922". Two dates for one disc.
- fix: "Seven of the damned to place in Hell, seven terraces to sort on the mountain, and a record made about 1922."
- weight: should

### #/unit/1 "The book" and the front page, `unit.reading.parts`
- where: "Inferno 1 of 34 read"
- problem: After one canto the week page and the front page both tell me thirty-three are outstanding. It is the ledger of pages owed, in small.
- fix: Show nothing beside the title, or only the place: "you stopped at canto V".
- weight: could

### #/unit/1 cards after a meeting, `unit.meet.again`
- where: "Go through it again"
- problem: The button opens the meeting with my words and answers still in place. Nothing is gone through again.
- fix: "Look at it again"
- weight: could

## The first meeting (#/unit/1/meet/1)

### step 1, `w1.meetings[0].spreads[0].steps[0].lead[0]`
- where: "Write in each gap the word you think Longfellow used."
- problem: This is the first instruction of week 1, and the reader came by a button marked "Begin with Dante". Nothing has said who Longfellow is or that the lines are a translation, so for the length of the step they look like a poem by Longfellow.
- fix: "This is Dante in the English verse of Henry Wadsworth Longfellow (1867), with nine words taken out. Write in each gap the word you think Longfellow used. Do it before you open the book. Nothing depends on being right."
- weight: should

### step 1, `…steps[0].notes.2`
- where: "You will meet the word again on the mountain, where Virgil calls love the seed"
- problem: A reader who has not opened the poem does not know there is a mountain or who Virgil is. Virgil is named twice more in this meeting and is never introduced.
- fix: "He appeals to their breeding: remember the stock you come from. You will meet the word again in the *Purgatorio*, where Virgil, the Roman poet who is Dante’s guide, calls love the seed of every virtue and of every act that deserves punishment (canto XVII)."
- weight: should

### step 1, `…steps[0].notes.3`
- where: "Men on one side, beasts on the other, and nothing between."
- problem: I had written "beasts", surely the commonest guess, and the note uses my word and not the poet’s. It gives no reason why the line has "brutes", so the comparison of my word with his pays nothing.
- fix: "Men on one side, brutes on the other, and nothing between. A brute is an animal thought of as lacking reason, and reason is what he is appealing to. It flatters them. It also leaves out everyone who stays at home and is not a brute." (The second sentence wants a check against a dictionary.)
- weight: should

### step 1, `…steps[0].after[0]`
- where: "Ulysses is Homer’s Odysseus. In Homer he gets home."
- problem: The line set above the passage has already said that Ulysses is Homer’s Odysseus under his Latin name. The reader is told twice on one screen.
- fix: "In Homer, Ulysses gets home. This last voyage is found in no earlier poet and seems to be Dante’s own invention."
- weight: should

### step 2, `…steps[1].options[2]` and its reply
- where: "Both, and Dante knows it." / "That is nearest to what Auden said. His reading is on the board below."
- problem: The shape of the opening again: two answers that get "yes, but" and a third that is Auden’s and gets one line. What Dante knows is not something a reader of 37 lines can judge. And "the board below" is not below. The next thing is the step about lines to find, and nothing has told the reader that the dark panel is called a board.
- fix: Offer "Yes. …" and "No. …" as they stand and let the panel bring "both". If the third stays: label "Both."; reply "Auden said something close to that. His reading comes after the next step."
- weight: should

### step 2, `…steps[1].options[1].reply[0]`
- where: "He is in the eighth circle, with those who used the gift of speech to deceive"
- problem: The circles of Hell have not been mentioned. They are explained in the second meeting, after the book.
- fix: "That is the charge against him. Dante’s Hell goes down in nine circles, and he is in the eighth, with those who used the gift of speech to deceive. This speech is the gift at work: men who had come through *a hundred thousand perils* are dead within the page."
- weight: should

### step 2, `…steps[1].options[0].reply[1]`
- where: "Auden grants the likeness."
- problem: No likeness has been drawn yet and nothing Auden said has been reported. The sentence can be understood only after the panel two steps on.
- fix: "Auden agrees that Dante’s Ulysses behaves like Tennyson’s hero. But look at where Dante has put him."
- weight: should

### step 3, `…steps[2].ask`
- where: "Somewhere in his speech to the crew an older tempter is speaking."
- problem: The question is a riddle, and it states as fact a reading that the panel afterward gives to Auden. A reader who has just answered "Yes" is told by a voice with no name that Ulysses is a tempter.
- fix: "Auden heard an older tempter in the speech to the crew. Mark the lines where you think he heard him."
- weight: should

### step 3, `…steps[2].hit[0]` and `nearby[0]`
- where: "You heard him." / "Close."
- problem: These are "Right" and "Nearly" in costume. The step does not need to give a mark before it says where the lines are.
- fix: Hit: "He is in the three lines that begin *Consider ye*. In Genesis …" Near: "Those lines hold out the knowledge. The three after them, beginning *Consider ye*, …"
- weight: could

### panel "What Auden made of Ulysses", `w1.meetings[0].spreads[1].steps[0].paras[0]`
- where: "and Tennyson made him one"
- problem: Tennyson is introduced only in the reply to "Yes". A reader who answered "No" or "Both" meets him here as a bare name, and "made him one" takes a second reading to find what "one" is.
- fix: "Dante’s Ulysses, he says, behaves as the sea-going hero of the Romantic writers does, and Tennyson, in his poem “Ulysses” (1842), made a Romantic hero of him."
- weight: should

### panel "What Auden made of Ulysses", `…steps[0].paras[2]`
- where: "Dante looks down at the strait once more"
- problem: "Once more" says he has looked at it before, and the reader knows of no earlier look. The sentence before it repeats the note on "mad" from the first step almost word for word.
- fix: "The poem keeps both readings open. Dante, as you saw, uses Ulysses’ word *folle* of his own journey. The mountain that Ulysses drowned in sight of is taken by nearly every commentator to be the one Dante climbs in the *Purgatorio*. And from high in Paradise Dante looks down at the strait and sees “the mad track of Ulysses” (*Paradiso* XXVII). Ulysses went where Dante goes, and went without being sent."
- weight: should

### last step, `meet.next.label` and `w1.meetings[0].spreads[1].steps[1].title`
- where: "For next time" / "Read the *Inferno* and the *Purgatorio*"
- problem: A homework heading over an order. There is no "next time" on a site with no calendar, and the front page calls the same block "Now the book". This is the first place where the old assignment sheet shows through.
- fix: `meet.next.label`: "Now the book". Title: "The *Inferno* and the *Purgatorio*".
- weight: should

### last step, `…steps[1].paras[0]`
- where: "A canto takes about ten minutes."
- problem: The sentence does not say how many cantos there are, so the reader cannot see that the reading is about eleven hours. For anyone who came straight from the opening, "canto" is still unexplained.
- fix: "The two parts are sixty-seven cantos of about ten minutes each, some eleven hours in all. Read in the prose translation Auden assigned, by Carlyle, Okey and Wicksteed, or in Longfellow’s verse, which you have just been reading."
- weight: should

### last step, `…steps[1].paras[1]`
- where: "You have been there before."
- problem: A wink set at the end of the paragraph. It is also no longer a secret, since the panel just above says that Ulysses’ mountain is the one Dante climbs.
- fix: "When you reach the first canto of the *Purgatorio*, look at the shore, and at what is said there about the men who have sailed those waters. It is the shore of the mountain Ulysses saw."
- weight: should

### last step, `…steps[1].carry`
- where: "No one in Dante’s Hell asks to be let out. Watch for anyone who does."
- problem: The label over it says "A question" and there is none. The second sentence contradicts the first. The front page, the term page and the second meeting all give it in another form, ending "Why not?"
- fix: "No one in Dante’s Hell asks to be let out. Why not?"
- weight: should

## A canto in the reader (#/read/dante-longfellow/inf-05)

### the bar that answers a selection, `reader.keep.long`, `reader.keep`, `reader.kept`
- where: "That is too long to keep. Select a shorter passage." with the button "Keep them" beside it
- problem: With 45 lines selected the bar says the passage is too long and still offers "Keep them". Pressing it answers "Kept.", and the lines are in my book. After any keep the bar reads "Kept." with "Keep them" still beside it and nothing left to keep. The script sets the button hidden and the page shows it all the same. The message also names no limit; I found it by trial between 30 and 45 lines of verse.
- fix: Make the hiding take effect in both states. Then say the limit: "That is too long to keep. Select forty lines or fewer." (The code allows 1,800 characters.)
- weight: must

### hint above the text, `reader.keep.hint` (with `reader.keep.ask`, `reader.keep`, `home.kept.title`)
- where: "To keep a line in your book, select it."
- problem: The hint says "a line" and "it". The bar says "these lines" and "them" whether one line or half a line is selected, the front page heads two kept lines "The last line you kept", and in the prose translation there are no lines.
- fix: Hint: "To keep a passage in your book, select it." Bar: "Keep this in your book?" Button: "Keep it". Front page: "Last kept". By heart: "select a passage and choose “Keep it.”"
- weight: could

## By heart (#/heart) and the nine lines (#/heart/gate)

### #/heart intro and "What Auden asked of the class", `heart.intro[0]`, `heart.cantos.intro[0]`
- where: "still claiming to have eight cantos" / "Most accounts say six cantos. Donald Pearce, who sat the examination, says seven, brought down to five"
- problem: Four numbers of cantos on one page: eight, six, seven and five. The second passage spends four sentences weighing its sources before the reader learns what there is to do, and "eight" is never squared with the rest.
- fix: First paragraph: "…found classmates who said they still had their cantos." Under the heading: "The final examination of the course was cantos of Dante, written out from memory in three hours. By the account of Donald Pearce, who took it, Auden asked for seven and came down to five when the class protested. Pearce names four of them, and the fifth is yours to choose." Leave "most accounts say six" to the Sources page.
- weight: should

### #/heart intro, `heart.intro[1]`
- where: "He never set out his reasons at length."
- problem: The last man named is Robert Chapman, so "He" is Chapman for a moment.
- fix: "Auden never set out his reasons at length."
- weight: should

### #/heart and #/heart/gate, `heart.cantos.intro[0]`, `heart.cantos.intro[1]`, `heart.rule[1]`, `heart.marked.title`, `heart.changed.more`, `pieces[0].why[0]`, `heart.intro[2]`
- where: "who sat the examination" / "the examination can be sat" / "how Auden marked the examination" / "Your script, marked" / "the cantos Auden set" / "turned round"
- problem: The voice is meant to be plain American, and elsewhere the site says "the translation he assigned". Here it turns English and exam-room. An American reader takes "script" for a screenplay and "marked" for annotated, and this is the nearest the site comes to putting on Auden’s accent.
- fix: "who took the examination"; "you can take the examination whenever you like"; "how Auden graded the examination"; heading "What you wrote, with the changes shown" and "…shown in your text below"; "one of the cantos Auden assigned"; "turned around". In the second meeting, "for ever" to "forever".
- weight: should

### #/heart/gate head, `pieces[0].why[0]`
- where: "They are also the opening of one of the cantos Auden set."
- problem: The nine lines are in Longfellow’s verse. The cantos listed on By heart are in the prose translation unless the reader changes it, and there the same nine lines run in other words. A reader who goes on from the gate to *Inferno* III finds that nothing learned carries over, on a page that warns that work in one version does not count toward another.
- fix: "They are also the opening of *Inferno* III, one of the cantos Auden assigned. If you mean to go on to the whole canto, choose Longfellow’s verse for the cantos first, on the By heart page."
- weight: should

### #/heart/gate, Learn, `heart.learn.stretch`, `heart.learn.part`, `heart.how[1]`
- where: "Stretch 1 of 1 · lines 1–9" (and, for lines of my own, "Part 1 of 1")
- problem: By heart says a piece comes a few lines at a time. The nine lines come all at once, 61 words to be written three times before anything is given back. My own kept lines are a "part" in the heading and a "stretch" in every sentence and button under it.
- fix: Divide the nine lines in three, as the note above them already does. Say "stretch" in `heart.learn.part`, and show no "1 of 1".
- weight: should

### #/heart/gate, Write out, `heart.write.field`
- where: the box’s label for a screen reader, "The canto, from memory"
- problem: The box is named for a canto when the piece is nine lines.
- fix: "The lines, from memory"
- weight: should

### #/heart/gate, Write out, `heart.write.intro[0]`
- where: "Leave the text alone until you have pressed"
- problem: The text is not on this tab, so there is nothing to leave alone. I took it for a moment to mean "do not edit".
- fix: "Write all of it from memory. Line breaks do not matter. Do not look at the text again until you have pressed “Compare with the text.”"
- weight: could

### #/heart/gate, after Compare, `heart.changed.intro[0]`
- where: "At each of these places the writer did something you did not expect."
- problem: Not at each. When I wrote one of my own kept lines in another order, the list paired words that have nothing to do with each other ("no" with "did", "in" with "read") and told me to ask what the writer’s word does that mine does not. "The writer" is Longfellow here and Dante to the reader. And the question is left hanging: no box, and no word from the site on the two words in the nine lines that a memory is likeliest to change.
- fix: "Struck through is what you wrote, and after it the word in the text. Where one word has taken the place of another, ask what the text’s word does that yours does not." List only one-for-one changes. For the nine lines add a note of the site’s own on *dolent* and *eterne*, which is the payoff this page has to give.
- weight: should

### #/heart/gate, after Compare with no slips, `heart.verdict.once`, `heart.record.clean`
- where: "Every word as the text has it." followed by "That is near enough to count."
- problem: A copy with no word wrong is not near enough. It is exact, and the table under Read repeats the phrase beside a zero.
- fix: With no slips: "Every word as the text has it. Write it again on another day and you can call it known." In the table: "counts".
- weight: should

## The second meeting (#/unit/1/meet/2)

### step 1, `w1.meetings[1].spreads[0].steps[0].ask` with `meet.verdict.lead[0]`
- where: "Before anything else: did you like it?"
- problem: The question asks for like or dislike, and the next sentence reports Auden saying that a reader who can answer only in those words has not left the nursery. The reader is asked a question and told off for its terms in one breath.
- fix: "First, what do you make of it?" (the shared string, `meet.verdict.ask`, already asks it this way)
- weight: should

### step 1, `…steps[0].after[0]`
- where: "Auden’s own verdict is on record."
- problem: The sentence only announces the next one, and what follows is not one of the five verdicts but a fact about a poem, the same whichever verdict I chose.
- fix: "In *New Year Letter*, the long poem he published in 1941, Auden imagines himself on trial before the dead poets he most admires, and Dante is the first of the judges."
- weight: could

### step 3, `meet.write.min`
- where: "A few sentences will do: at least 10 words."
- problem: A few sentences are thirty words or more, and the floor is ten. The two halves name different amounts, so I did not know how much was wanted.
- fix: "A sentence or two will do, ten words at least."
- weight: should

### steps 3 and 5, the two panels headed "What Auden made of it" (not in the prose file; seen in the running meeting)
- where: "No essay by Auden on the *Comedy* itself has been found, but he touches on this question in his introduction to" / "Auden does not himself apply the lines to the question. This site does"
- problem: These panels are what the button "Set it down and see what Auden said" delivers. Each opens with where the site looked and what it did not find, and reports Auden at second hand in the old site’s voice. After forty words of my own I was reading about a selection from Kierkegaard. This is the place in week 1 where the complaint about the first version still holds in full.
- fix: Rewrite both as the three new panels are written: what Auden said, with a verb of saying, in three short paragraphs, the site’s own step marked in the source line, and the hunt for sources left out. The first could open: "Auden says that the English writer Walter Savage Landor was right: the people in the *Inferno* do not want to get out." Then his reason, then the site’s step from it.
- weight: must

### steps 3 and 5, `meet.write.reply.note`
- where: "Say where you and Auden differ, and what in the book decides it."
- problem: It assumes we differ, and it sets a second piece of written work the moment the first is handed in. Under the second question it follows a panel which says Auden did not address the question.
- fix: "If you and Auden differ, say where, and what in the book decides it. Your reply is saved as you write and kept in your book."
- weight: could

### the blackboard, `w1.meetings[1].spreads[1].steps[0].lead[0]`
- where: "on the terraces below him and on his own" / "You have read on, and you can."
- problem: "On his own" reads first as "by himself", and I went back to find the terrace. The last sentence stops on "can" for effect and leaves the reader to supply the verb.
- fix: "He names what is purged on the terraces below him and on the one where he is standing. Of the three above he says only that Dante must find them out for himself. You have read on, so you can place all seven."
- weight: should

### the blackboard, `…steps[0].bins[1]`
- where: "Too little" (nothing under it; the other two headings each have a smaller line)
- problem: Too little of what. "A bad object" and "Too much" are each finished by the line beneath, and the middle heading is left for the reader to finish.
- fix: Add `bins[1].sub`: "love of the good, and slow to act on it".
- weight: should

### the blackboard, `meet.sort.compare`, `meet.sort.result`, `meet.sort.hint`
- where: "Compare with the board" / "6 of your 7 cards are where the board has them."
- problem: The hint has just called the surface I am putting cards on "the board" ("A card already on the board can be moved"). So I am asked to compare the board with the board. In the first meeting "the board" was the dark panel of what Auden said.
- fix: Keep "board" for what the reader sorts on. Button: "See how Virgil has them". Result: "6 of your 7 cards are where Virgil has them." (As shared strings: "Compare", and "{same} of your {total} cards are in the same place.")
- weight: should

### the blackboard, `…steps[0].after[0]`
- where: "nobody on the mountain loved nothing, and nobody in Hell did either"
- problem: Two negatives and a third by ellipsis. I had to work out that it means everyone loved something. Donald Pearce is also back with no word on who he is, a meeting and a book after the opening.
- fix: "At the first meeting of the Michigan class Auden read out a list of definitions, and Donald Pearce, a student in the class, kept a few of them. One was “Every evil is a former good.” Virgil’s speech says the same thing at length: everyone on the mountain loved something, and so did everyone in Hell."
- weight: should
