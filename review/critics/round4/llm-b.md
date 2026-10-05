# LLM-speak and dead prose, part B: line 153 to the end of prose-r4.md

Scope: the note on the nine lines, the pictures and the record, and the app's own words. Every string was read in the file and then looked at where it stands: the door, #/term, #/unit/1 (and #/unit/2 and #/unit/6 for labels week 1 does not use), both meetings of week 1 done as a reader, #/heart, #/heart/gate (Read; Learn through all three coverings; Write out with slips, clean, and again on a later day), #/book empty and full, #/read/dante-longfellow/inf-03 with lines kept, the front page in four states, and the marking step at phone width. No console errors. The record plays.

What does not occur in this part: em-dashes, exclamation marks, rhetorical questions, "not X but Y", the stock words of the lens list, and any message that cheers, jokes or apologizes. None scolds; the nearest are the minimums ("Fill at least one gap first.", "Answer at least two.", "at least 10 words"). The faults are of other kinds: one thing under several names, templates that do not fit the case in front of the reader, and the vocabulary of a quiz.

Where the commissioner's complaint still holds in this part: every exercise in week 1 opens its payoff with a bold score; "For next time", "Open the exercise", "Check", "at least 10 words", "best so far" and "1 of 34 read" are the class website; and the chart of Hell is seven drop-down menus.

Findings, in the order of the file.

### `pieces[0].cite` (kicker of #/heart/gate; row on #/heart)
- where: "Dante, Inferno III, lines 1 to 9"
- problem: The title is roman here and italic a few rows lower in the list of cantos (house rule 6). On #/book the cite of the gapped passage loses its italics the same way ("Dante, Inferno XXVI").
- fix: `Dante, *Inferno* III, lines 1 to 9, in Longfellow’s translation`. On #/book print the cite with its italics.
- weight: should

### `pieces[0].why[0]` (#/heart/gate, under the title)
- where: "The gate speaks for itself, in the first person."
- problem: "Speaks for itself" is the idiom for needing no comment, and "in the first person" then gives the literal sense a second time. The rest is an inventory of the nine lines with no reason to learn them, though the site holds one: Auden's remark on this inscription, reported in the second meeting. "Set" is British for assigned.
- fix: "The gate is the speaker. Its first three lines begin with the same four words, and the next three say that divine power, the highest wisdom and love made it. Auden’s comment on that claim is reported in the second meeting of week 1. The ninth line is the best known in the poem, and the nine together open one of the cantos he assigned for the examination."
- weight: should

### `plates[0].caption` (#/unit/1 and the front page)
- where: "Gustave Doré, the dark wood of *Inferno* I (1861)."
- problem: The first picture a reader meets shows a hooded man alone, and the caption does not say that he is Dante. Its form also differs from the other two Doré captions, which keep canto and year together in the parentheses.
- fix: "Gustave Doré, Dante alone in the dark wood (*Inferno* I, 1861)."
- weight: should

### `home.then.title` (#/ after the first meeting)
- where: "When you have read it"
- problem: The card directly under this heading carries the kicker "Second meeting · when you have read it". The reader sees the same words twice in three lines.
- fix: Cut the heading. The kicker says it.
- weight: should

### `home.links.term` (foot of #/)
- where: "All fifteen weeks"
- problem: One page has three names: "The term" (menu, breadcrumb, and a button on this same screen at the end of the term), "All fifteen weeks" (this link) and "See the fifteen weeks" (`door.term`).
- fix: "The term". `door.term` can stay, because the paragraph above it has just counted the weeks.
- weight: should

### `home.links.door`, `book.door.title`
- where: "The song at the door"
- problem: "The door" is the builders' name for the opening. The word is nowhere on that page, which is headed "A song with six words missing". A reader who began at week 1 cannot tell what the link is.
- fix: "Ariel’s song" in both.
- weight: should

### `home.end.title`, `home.end[0]` (#/ after the two meetings of week 1)
- where: "You have been through the term"
- problem: The front page says this as soon as week 1 is done, because no other week has meetings yet. It is false, and it is what the commissioner will see when he returns to the front page after week 1. In the wording, the first sentence of the body repeats the heading.
- fix: Until the other weeks have meetings, show week 2 or the term list here. When it is true, keep the heading and make the body "What you wrote in the meetings is in your book."
- weight: must

### `term.intro[0]` (#/term)
- where: "Start with any week. Nothing is locked."
- problem: "Locked" is the word of a game with levels, and it denies what no reader of a book list supposes. It is also a short sentence closing the paragraph for the beat (house rule 3). "Start with any week" has said it.
- fix: Cut "Nothing is locked."
- weight: should

### `term.state.old` (#/term, fourteen rows)
- where: "not yet rebuilt"
- problem: The site is talking about its own construction. Only the commissioner knows there was an earlier build.
- fix: Right for the preview. If an old week is still public at launch: "in its first form".
- weight: could

### `unit.reading` (h2 on every week page)
- where: "The book" (on #/unit/6 it stands over six books)
- problem: The singular is fixed in the label. The same singular is in `home.read.title`, `unit.meet.before`, `unit.meet.after`, `meet.next.carry`, `meet.gaps.lead[0]`, `meet.spot.lead[0]`, `meet.match.compare` and `term.intro[0]`, so the weeks still to be rebuilt inherit it.
- fix: "The book|The books"; "Now the book|Now the books"; "A question to carry into the book|A question to carry into the books"; in the meeting kickers and in `term.intro[0]`, "before you read" and "when you have read".
- weight: should

### `unit.reading.parts` (#/unit/1, under "The book")
- where: "Inferno 1 of 34 read"
- problem: A count of parts done is the ledger of pages owed in small. It tells the reader how much is left and does not tell him where he is.
- fix: Give the place: "read as far as {part}", for example "read as far as Inferno III".
- weight: could

### `unit.test.best` (tile "Who says it?" on the week page)
- where: "best so far: {right} of {total}"
- problem: A high score kept on the week's page is a quiz app's line.
- fix: "you placed {right} of {total}", or nothing.
- weight: should

### `meet.gaps.show` (the door and the first meeting)
- where: "Show the writer’s words"
- problem: The lead above the button says "the poet" at the door and "Longfellow" in week 1. The button and the result say "the writer", and `words.after[0]` says "the book’s word". In week 1 "the writer" could be Dante or Longfellow.
- fix: "Show the missing words". It matches the label "Missing words" above it and fits any passage.
- weight: should

### `meet.gaps.result`
- where: "Your word is the writer’s in 4 of the 9 gaps." (bold, first line of the reveal)
- problem: The lead has just said that nothing depends on being right, and the first thing the reveal prints, in bold, is a score. "Is the writer’s in" also has to be read twice.
- fix: Cut it, since the passage already shows each of the reader's words beside the word that was there. If it stays, ordinary weight, after the notes: "In {same} of the {total} gaps you wrote the word that was there."
- weight: should

### `meet.gaps.yours`, `meet.sort.yours`
- where: "you wrote last" (first meeting, seventh gap); "you put this under Too much" (second meeting, the blackboard)
- problem: What the page fills in is set in the same italic as the label and runs into it. "You wrote last" reads as a remark about time, and "under Too much" as one phrase.
- fix: "you wrote “{word}”" and "you put this under “{bin}”".
- weight: should

### `meet.choose.label`
- where: "A question" (kicker over "Is this man a hero?")
- problem: The label tells the reader only what the next line shows by its question mark. It appears three times in the rebuilt pages. `meet.kind.choose` and `meet.kind.write` share the name too, so it cannot tell two kinds of step apart.
- fix: Print no label over a choice. Keep "Your answer first" over a written answer, and make `meet.kind.write` "A written answer".
- weight: should

### `meet.mark.hint`
- where: "Click or tap the lines in the passage, 3 at most."
- problem: "Click or tap" is the interface hedging about the reader's device. On a phone the bar over the passage says "Tap the lines you mean" as well. One act gets three verbs in three lines: mark, click or tap, tap.
- fix: "Mark it in the passage.|Mark them in the passage, {n} at most."
- weight: should

### `meet.mark.done`
- where: "Those are the lines" (button)
- problem: The button is the reader speaking of lines just marked, and a speaker says "these" of what is in hand. "Those" is what the page would say back.
- fix: "This is the line|These are the lines".
- weight: could

### `meet.mark.legend.yours`, `meet.mark.legend.key`
- where: "your mark" · "the lines in question" (under the passage)
- problem: "In question" is a stock phrase, and beside a step that asks a question it muddles. "Your mark" is singular for up to three marks, and the step's label ("A line to find") is singular in the same way.
- fix: "your mark|your marks"; "the line to find|the lines to find"; label "A line to find|Lines to find".
- weight: should

### `meet.sort.compare` (second meeting, the blackboard)
- where: "Compare with the board"
- problem: The reader has been putting cards on the board, the hint calls that "the board", and the button then tells him to compare with "the board". One word names his arrangement and the answer.
- fix: Button "Compare with the book", as in the chart step. Result: "{same} of your {total} cards are where the book has them." Hint: "A card you have placed can be moved in the same way." Where a later board is Auden's own, let the step name it.
- weight: should

### `meet.match.label`
- where: "A chart" (over seven drop-down menus)
- problem: Nothing on the screen is a chart, and in this meeting "chart" already names two other things: the exercise "A chart of Hell" and the chart Auden drew on the blackboard. Seven menus reading "Choose" are also the nearest thing in week 1 to a school form.
- fix: Label "From memory", which is what the lead asks and what "Compare with the book" completes. `meet.kind.match` the same.
- weight: should

### `meet.match.result`, `meet.spot.result`
- where: "6 of 7 as the book has them." · "3 of 4 placed." (both bold)
- problem: Verbless tallies in bold are a quiz's score lines. With `meet.gaps.result` and `meet.sort.result`, every exercise in week 1 opens its payoff with one.
- fix: Ordinary weight and whole sentences: "{same} of your {total} are where the book has them." "You placed {right} of the {total}."
- weight: should

### `meet.write.min`
- where: "A few sentences will do: at least 10 words."
- problem: Two measures that disagree, since ten words is one sentence. The word minimum is the school form showing.
- fix: "Write a sentence or two, ten words at least."
- weight: should

### `meet.write.set`, `meet.turn.title`
- where: "Set it down and see what Auden said" (button); "What Auden made of it" (the panel that opens)
- problem: The button and the note under it promise "what Auden said". The panel that opens has another name, and elsewhere "made of" heads a panel on a named passage ("What Auden made of Ulysses").
- fix: Make the default `meet.turn.title` "What Auden said".
- weight: should

### `meet.write.sealed`
- where: "What Auden said is shown when your own answer is set down."
- problem: The sentence repeats the button above it, in the passive. What the reader needs is in the second sentence.
- fix: "Once set down, your answer stays as you wrote it, and you can reply to Auden’s."
- weight: should

### `meet.verdict.lead[0]`
- where: "a grown reader has five verdicts to choose from"
- problem: "Grown reader" is a storybook word where the ordinary one would do.
- fix: "an adult reader".
- weight: could

### `meet.two.label`
- where: "His second question" (kicker over "Who lives in {author}’s book?")
- problem: Nothing before the kicker names Auden, and the heading under it names another man, so "his" reads as the author's.
- fix: "Auden’s second question".
- weight: should

### `meet.spot.check`, `heart.learn.check`
- where: "Check" (four buttons in "Who says it?"; one under Learn)
- problem: "Check" is the quiz word. The site's own verb for this act is "Compare with": the board, the book, the text. Under Learn the button is "Check" and under Write out, for the same act, "Compare with the text".
- fix: "Compare with the book" and "Compare with the text".
- weight: should

### `meet.make.open`
- where: "Open the exercise" (under the kicker "Something to make")
- problem: The kicker calls it something to make. The button calls it an exercise, the classroom word the kicker avoided.
- fix: "Begin", as on the meeting cards. It pairs with "Look at what you made".
- weight: should

### `meet.next.label`
- where: "For next time" (over "Read the *Inferno* and the *Purgatorio*" and over "Next week: Paradise")
- problem: It is the phrase a teacher gives homework with. Over "Next week: Paradise" it says the heading twice. The front page calls the same step "Now the book".
- fix: "Now the book" over the reading step. No label over a title that begins "Next week".
- weight: should

### `meet.next.carry`
- where: "A question to carry into the book" (first meeting)
- problem: In the first meeting the text under this label is a statement and an instruction ("Watch for anyone who does"), with no question in it. On the week page and the front page the same box holds the question.
- fix: Put the question in the meeting's box as well, or make the label there "Something to carry into the book".
- weight: should

### `book.intro[0]` (#/book)
- where: "your answers beside Auden’s"
- problem: The page shows the reader's answers and replies. Nothing of Auden's is beside them, and a reader will look for it.
- fix: "…the words you put into the gaps beside the writers’ own, your answers and your replies to Auden, your verdicts, and what you made." Or print a line from Auden's panel under each answer and keep the sentence.
- weight: should

### `book.empty`
- where: "Nothing is in it yet. It fills as you go."
- problem: The second sentence explains the obvious and is there for the cadence.
- fix: "Nothing is in it yet."
- weight: could

### `test.intro[0]`, `test.intro[1]` (not rebuilt)
- where: "Book and speaker count as separate answers." "…names must be spelled correctly." "…your best score is kept."
- problem: Six sentences of examination rules and a high score. The page is the class website at its plainest, and week 1 links to it twice.
- fix: When it is rebuilt: "Do this without the books. A name or a few words is enough." Cut `test.intro[1]`.
- weight: could

### `heart.kicker` (#/heart, first words)
- where: "One of his ways into a poem"
- problem: "His" has no antecedent. Auden is first named in the paragraph under the title.
- fix: "One of Auden’s ways into a poem".
- weight: should

### `heart.intro[0]`
- where: "One of them, Angelyn Stevens, pinned typed pages" … "still claiming to have eight cantos"
- problem: The nearest plural before "them" is "cantos", so for a moment a canto is called Angelyn Stevens. "Claiming to have" is elliptical and makes the classmates sound doubtful. "Eight" is unexplained beside the five, six and seven of the section below.
- fix: "One student, Angelyn Stevens, pinned…" and "…found classmates who said they still had eight cantos by heart." If eight is Chapman's own figure, a clause should say so. I do not have the source.
- weight: should

### `heart.intro[2]`
- where: "It is the missing-word sheet turned round, with every word missing."
- problem: The paragraph closes on a turn of phrase, and the figure is wrong: nothing is turned round, the same sheet has more gaps. "Turned round" is also British. The first sentence of the paragraph only announces the second.
- fix: "Learn a few lines and write them out from memory, and the page shows you each place where your memory put in a word of its own." If the link back to the door is wanted, add: "It is the missing-word sheet again, with every word missing."
- weight: should

### `heart.cantos.intro[0]`, `heart.cantos.intro[1]`
- where: "who sat the examination" · "the examination can be sat whenever you like"
- problem: British usage in a voice meant to be American, where an examination is taken. The same slip is in "how Auden marked the examination" (`heart.rule[1]`), "on the day" (`heart.own.intro[0]`), "script" (below) and "set" (above).
- fix: "who took the examination"; "can be taken whenever you like"; "how Auden graded the examination"; "Auden added a second part on the day of the examination".
- weight: should

### `heart.cantos.version`, `heart.cantos.version.note`
- where: "You are learning them in the prose translation by Carlyle, Okey and Wicksteed."
- problem: It tells a reader who has begun nothing that he is learning the cantos, under five rows marked "not begun" and a paragraph that says "They are here if you want them". The note that follows ("work done in one does not count toward another") is ledger talk.
- fix: "The cantos are given here in {version}. Choose your version before you begin, because what you learn in one is not carried over to another."
- weight: should

### `heart.record.clean` (Read tab, "Times written out")
- where: "near enough to count" (beside a row with 0 wrong)
- problem: Beside a perfect copy the phrase is illogical. See `heart.verdict.once` below.
- fix: "counted".
- weight: should

### `heart.learn.stretch`, `heart.learn.part`
- where: "Stretch 1 of 1 · lines 1–9", with "Previous stretch" and "Skip this stretch" under it
- problem: The template shows. A piece of one stretch is numbered "1 of 1" and has two dead buttons for moving between stretches. For lines the reader kept, the kicker says "Part 1 of 1" while the instructions on the same screen say "stretch" five times.
- fix: When a piece is one stretch, print "Lines 1–9" and hide the two buttons. Make `heart.learn.part` "Stretch {k} of {n}".
- weight: should

### `heart.write.field`
- where: "The canto, from memory" (the name a screen reader gives the box under Write out)
- problem: The box has this name for the nine lines and for lines the reader kept, which are not cantos.
- fix: "From memory".
- weight: should

### `heart.verdict.once` (Write out, after a perfect copy)
- where: "Every word as the text has it." then "That is near enough to count."
- problem: This is the payoff for writing the nine lines out without a slip, and the page answers a perfect copy with "near enough". The sentence was written for a canto, where slips are allowed. Here it is wrong, and it deflates the one moment By heart has to give.
- fix: When nothing is wrong: "Write it out again on another day and you can call it known." Keep the present wording for a canto written out within its allowance.
- weight: must

### `heart.changed.intro[0]`
- where: "At each of these places the writer did something you did not expect."
- problem: It tells the reader what happened in his own head, and it is not true of every slip: mine included a dropped word and a stray one. "The writer" here is also the translator.
- fix: "Struck through is what you wrote, and after it the word in the text. Some of these will be plain slips. Where your word makes sense, ask what the text’s word does that yours does not."
- weight: should

### `heart.marked.title`, `heart.changed.more`
- where: "Your script, marked" · "marked in the script below"
- problem: "Script" for what an examinee wrote is British. An American reader thinks of a screenplay.
- fix: "What you wrote, marked" and "marked below in what you wrote".
- weight: should

### `reader.keep`, `reader.kept`, `reader.keep.long` (#/read/dante-longfellow/inf-03)
- where: "Kept." beside a live "Keep them" button; "That is too long to keep. Select a shorter passage." beside the same button
- problem: The button stays on the bar after the lines are kept and when the passage is too long (the script hides it and the style sheet shows it again). The words then contradict each other, in the feature being shown.
- fix: Hide the button in both states. The second message could give the limit: "That is too long to keep. A passage can be about forty lines of verse."
- weight: must

## Patterns

Most frequent first. Labels in parentheses are two places where each can be seen.

1. **One thing under several names: 11 sets.** The word that was there is "the poet", "Longfellow", "the writer", "the book’s word" and "the text" (`meet.gaps.show`, `words.after[0]`). The term page has three names (`home.links.term`, `door.term`). The others: the opening (`home.links.door`, `book.door.title`); the act of seeing how you did, which is Show, Compare with, Check and "Those are the lines" (`meet.spot.check`, `meet.mark.done`); Auden's panel, "said" and "made of" (`meet.write.set`, `meet.turn.title`); stretch and part (`heart.learn.stretch`, `heart.learn.part`); leaving a step, which is "Leave this for now", "for later" and "Skip this stretch" (`meet.skip`, `meet.foot.left`); the reading step (`meet.next.label`, `home.read.title`); "Something to make" and "the exercise" (`meet.make.label`, `meet.make.open`); mark, click or tap, tap (`meet.mark.hint`, `meet.mark.bar`); "Who says it?", "Who says it" and "Who speaks?" (`meet.spot.label`, `meet.spot.field`). Three words do the reverse and each name more than one thing: "chart", "board", and "place" (to put the damned in a circle; to name a passage's speaker).

2. **Templates that do not fit the case on the screen: 14.** (`heart.learn.stretch`, `heart.write.field`.) Also `heart.verdict.once`, `heart.record.clean`, `unit.reading`, `home.end.title`, `heart.cantos.version`, `meet.gaps.yours`, `meet.sort.yours`, `meet.mark.legend.yours`, and four small ones not entered above: `meet.mark.label` ("A line to find" for three lines), `home.kept.title` ("The last line you kept" over three lines), `meet.turn.sources` ("Sources:" before a single source, twice in week 1), `notebook.reset.body` ("your record of the cantos", which now also holds the nine lines and the lines the reader kept).

3. **The vocabulary of a quiz or a marking scheme: 19 strings.** Six tallies (`meet.gaps.result`, `meet.spot.result`). "Count" or "counts" eleven times in eight strings, nearly all in By heart (`heart.rule[0]`, `heart.cantos.version.note`). "Check" twice, a word minimum, "For next time", "Open the exercise".

4. **Singular "the book" fixed in labels that must serve weeks with several books: 9.** (`unit.reading`, `unit.meet.before`.)

5. **British usage in an American voice: 8.** "Sat" twice, "script" twice, "marked", "set", "on the day", "turned round" (`heart.cantos.intro[0]`, `heart.marked.title`).

6. **The same thing said twice within a few lines: 8.** (`home.then.title`, `meet.next.label`.) Also `meet.write.sealed`, `meet.choose.label`, `pieces[0].why[0]`, `home.end[0]`, `unit.words.what` (repeats the kicker above it) and `heart.marked.key` (repeats the first sentence of `heart.changed.intro[0]`, four lines higher).

7. **"Nothing…" as reassurance: 5 here, 2 more in the other part.** (`term.intro[0]`, `heart.cantos.intro[1]`.) Also `unit.omit`, `meet.gaps.lead[0]`, `book.empty`. Once is a kindness, and the gap lead is the place for it. Elsewhere: cut "Nothing is locked."; in `unit.omit`, "The week can be done without it."; in `heart.cantos.intro[1]`, "They are here if you want them, and the examination can be taken whenever you like."

8. **A pronoun before its noun: 3.** (`heart.kicker`, `meet.two.label`.) Also "One of them" in `heart.intro[0]`.

9. **A short sentence closing for the beat: 3.** (`term.intro[0]`, `book.empty`.) Also `heart.intro[2]`.

Triples: five in this part, and each is a real enumeration (the three ways of writing a stretch, the three kinds of slip). None is a reflex.

Worth keeping as they are: "your word too", "If you had said otherwise", "Leave this for now" and "Take it up", "Your memory changed 5 words of 61.", "You know it by heart.", "Someone wrote “Omit” beside this book", "Read it anyway", "Take it out", "Now the book", and the messages for a wrong address and for a browser that is not saving.
