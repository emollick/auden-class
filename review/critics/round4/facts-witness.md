# Facts: Auden and the witnesses (review 4)

Checked: every statement in `prose-r4.md` that says what Auden wrote, said or did, or what a witness of his teaching recorded. Nothing was sampled. No sentence of any source is printed here. Evidence is a file and line numbers, or the address of a scan.

## How the sources were read

- `dh.txt`, `ef.txt`, `fa.txt`: by line number. Pages from the running head (dh) or the foot number (ef, fa), as in the two earlier audits.
- `pearce.txt`: three long lines, cited as `L1@n`, `L3@n`, `L5@n` (line and character offset). The foot number of a page runs into the next page's running title, so the text before number n is p. n. Numbers used: L1@1765 (131), L1@3933 (132), L3@2479 (133), L3@4964 (134), L3@7534 (135), L3@9987 (136), L3@16956 (147), L3@19382 (148), L3@21908 (149), L3@24344 (150), L3@29113 (152), L5@531 (153), L5@2991 (154). Pages 129 to 130 and 137 to 145 were read in the other captures in `research/` (`A_tr_out1.txt`, `A_pearce_gap2.txt`).
- Books not on disk: the researchers' notes (`A_michigan_course.md`, `B_pedagogy.md`, `C_auden_on_works.md`), then the scans themselves through the Internet Archive's full-text search and Google Books' search inside a volume. Each such check names the scan. One request was refused (the University of Michigan's copy of Chapman's article, HTTP 403) and was not retried.
- The typed reading list was read on the picture `research/auden-syllabus2.png`.

Findings are numbered and grouped by weight. An `evidence` line is added to the usual form.

## Must

### 1. `w1.intro[0]`
- where: "When they came to Kafka, three months later, he told them to keep Dante in mind"
- problem: Pearce puts *The Castle* early. It is set in the first lecture of which he has connected notes, and he says that the next few meetings after it were on Shakespeare, the last of them in December. Three months from the start of October is January. The figure is this site's week 14, and `term.note[0]` says Auden did not keep to that order.
- evidence: pearce.txt L3@3876 (his earliest connected notes, on Augustine and Kafka, p. 134); L3@6661 to 7000 (*The Castle* set for the next Tuesday, to be read with the *Comedy* in mind, p. 135); `A_pearce_gap2.txt` char 1614 (the next few meetings were on Shakespeare, p. 139); pearce.txt L3@18941 (the lecture on *The Tempest*, December, p. 148).
- fix: "When he set Kafka’s *The Castle*, he told them to keep the *Divine Comedy* in mind as they read."
- weight: must

### 2. `heart.own.intro[0]`
- where: "At the end of his Shakespeare course at the New School, in January 1947"
- problem: January 1947 was the end of the fall term, not of the course. The lectures ran from 2 October 1946 to 14 May 1947, and the paper is headed as the fall term's final examination. The rest of the sentence is right.
- evidence: *Lectures on Shakespeare*, ed. Kirsch, Appendix II (p. 341) and the note of the Saturday class dated 11 January 1947 in Appendix I; the editor's dates for the first and last lectures. Seen in the scan at archive.org/details/lecturesonshakes00aude (searches: "Final Examination", "spot passages", "14 May 1947"). `B_pedagogy.md`, entries 1.N1 and 1.N3.
- fix: "At the end of the first term of his Shakespeare course at the New School, in January 1947, Auden added a second part to the examination on the day: write out twenty lines from memory, from anything read that term."
- weight: must

### 3. `door.spreads[0].steps[2].sources[0]`
- where: "edited by Alan Bold (1985), p. 148."
- problem: The quoted sentence and everything reported in the second paragraph are on p. 149. Only the date of the lecture is on p. 148. Week 5 of the site cites pp. 148–152 for the same lecture.
- evidence: pearce.txt line 3: foot number 148 at char 19382, foot number 149 at char 21908. The theme is named at 21301, the quoted sentence starts at 21377, the remark on Prospero is at 21870. "December 1941" is at 18941.
- fix: "Donald Pearce, “Fortunate Fall: W. H. Auden at Michigan,” in *W. H. Auden: The Far Interior*, edited by Alan Bold (1985), pp. 148–49. The last sentence is this site’s."
- weight: must

### 4. `heart.intro[1]`
- where: "Asked near the end of his life how he would teach poetry, he named prosody"
- problem: He was not asked that. The interviewer asked whether he had ever taught writing. He said he had not, and went on unasked to say what he would keep to if he had to teach poetry. The four things named are right. The sentence also gives no source, so a reader cannot tell who asked.
- evidence: the *Paris Review* interview with Michael Newman as reprinted in *Poets at Work* (Viking Penguin, 1989), pp. 287–88; scan at archive.org/details/poetsatworkparis0000unse_w6x3 (search "taught writing"). The reprint dates the interview 1973, the year he died. `B_pedagogy.md`, entry 2.10, reports the question correctly; entry 2.17 does not.
- fix: "In an interview for the *Paris Review* near the end of his life he was asked whether he had ever taught writing. He said he had not, and that if he had to teach poetry he would keep to prosody, rhetoric, philology and getting poems by heart."
- weight: must

### 5. `meet.verdict.lead[0]`
- where: the two phrases in curly quotes after "a reader who can only say"
- problem: Neither phrase is Auden's wording. His two nursery verdicts put the object first: three words, then four. In the first the site's opening pronoun stands where he has a demonstrative, and the site's third word is not in his text. The second is two words on the site and four in the book. The book, the year, the nursery and the five verdicts are right, and the five options keep his sense without copying him.
- evidence: *A Certain World* (Viking, 1970), the entry "Nursery Library, My", pp. 291–92: the nursery sentence ends p. 291 and the five verdicts open p. 292. Scan at archive.org/details/certainworldcomm00aude (search "verdicts"). `B_pedagogy.md`, entry 2.3(e).
- fix: drop the quotation marks: "In *A Certain World* (1970) Auden says that a grown reader has five verdicts to choose from, and that a reader who can say only that he likes a book or does not like it has not left the nursery. Choose yours. You can change it."
- weight: must

## Should

### 6. `door.spreads[0].steps[0].lead[0]`
- where: "copied out with words missing and no poet’s name on the sheet"
- problem: No source says the sheets carried no poet's name. The two witnesses say only that the poems were ones the class did not know. Could not confirm. "Poems like this one" also sits badly with that, since this song is among the best known in English. (The nameless printing that is on record is in the school anthology he edited in 1935, where the names are kept for the index.)
- evidence: Swarthmore College Libraries, archive.swarthmore.edu/auden/professor.html, third paragraph (fetched; copy in the working folder as `swat_professor.txt`, line 31). Maurice Mandelbaum in *W. H. Auden: A Tribute* (1975), pp. 119–22; scan at archive.org/details/whaudentribute0000unse_k3n8 (search "mimeographed"; a search for the poet's or author's name finds nothing in his essay). `B_pedagogy.md`, entries 1.K1, 1.W1 and 2.5.
- fix: "Auden gave his classes poems they did not know, copied out with words missing, and had them fill the gaps."
- weight: should

### 7. `door.spreads[0].steps[2].paras[0]`
- where: "Auden took two lines of this song as the subject of the whole play"
- problem: Stronger than Pearce's notes. There the words from the song are the central theme of the sea scenes of two plays, *Pericles* and this one. A page later Auden names a different theme for the play itself, the giving up of unusual powers for ordinary life.
- evidence: pearce.txt L3@21301 (the song's words as the central theme "in both", p. 149); L3@23101 (the other theme, p. 150).
- fix: "By his notes Auden found the central theme of the play’s sea scene in two lines of this song, and said:" followed by the quotation as it stands.
- weight: should

### 8. `door.spreads[0].steps[3].title`
- where: "That was one of his classes, in small"
- problem: No class of this shape is on record. In the Michigan course he lectured, by Pearce's account from the window, and the class took no notes. The sheets with words missing are recorded at Swarthmore from 1942, and gaps were printed in the examination of his spring course at Michigan. The page joins two things he did in different places, and the title says he did them together.
- evidence: `A_tr_out1.txt` chars 593 to 1300 (Pearce, p. 129); pearce.txt L3@2992 to 3760 (p. 134); the Swarthmore page as in finding 6; `content/pages.mjs` line 108 (the site's own table gives the same places).
- fix: "The course that lecture belonged to"
- weight: should

### 9. `door.spreads[0].steps[3].paras[1]`
- where: "He asked two questions of any poem."
- problem: Set straight after the account of the class of 1941, this reads as something he asked that class. It comes from his inaugural lecture at Oxford of 11 June 1956, where he gives them as the two questions that interest him most when he reads a poem. The quotation matches, but it has no source beside it.
- evidence: dh.txt 2639 to 2650 (the first question at the foot of p. 50, the second across pp. 50–51; heads at 2600 and 2645); dh.txt 1705 to 1706 (the date of the lecture).
- fix: "Fifteen years later, lecturing at Oxford, he said that two questions interested him most when he read a poem." Then the two sentences that follow, as they stand. Add a source line: "“Making, Knowing and Judging” (1956), in *The Dyer’s Hand* (1962), pp. 50–51."
- weight: should

### 10. `w1.meetings[0].spreads[0].steps[2].ask`, with `.hit[0]`, `.nearby`, `.miss`
- where: "Somewhere in his speech to the crew an older tempter is speaking."
- problem: The step states a reading as fact and marks the reader right or wrong by it, with no verb of saying. The reading is Auden's, and he is not named until the next spread. He says that the words to the crew echo the Serpent's, and the only words of that speech he quotes are these three lines. The verse of Genesis, and "the same offer: knowledge, and a higher rank", are this site's.
- evidence: ef.txt 494 to 497 (the three lines quoted) and 503 to 506 (the echo), p. 10.
- fix: ask: "Auden heard an older tempter in this speech to the crew. Mark the lines where you hear him." In `hit[0]`, after "He is in the three lines that begin *Consider ye*", add: "They are the only lines of the speech that Auden quotes." In `miss[0]`: "Auden quotes the three lines beginning *Consider ye*, now marked in the passage." Add to the source line of the next spread: "The verse of Genesis is supplied by this site."
- weight: should

### 11. `heart.intro[0]`
- where: "Thirty-six years later Robert Chapman, who took the course, found classmates"
- problem: Could not confirm the count. The article is in the fall 1978 number, thirty-seven years after the fall of 1941 by the site's own dates (the Sources page says "in 1978"). Thirty-six holds only if counted from the examination of early 1942, or to the year before publication, when by the article's opening words Chapman began. The page that would date the classmates' replies (p. 507) could not be read: the University of Michigan's copy refused the request and Google Books does not search that page. The eight cantos are confirmed.
- evidence: *Michigan Quarterly Review* 17:4 (Fall 1978), p. 509, in Google Books volume `uDDiAAAAMAAJ` (search "eight cantos"; the contents page gives the article at p. 507); `A_gb_chap_a.txt`.
- fix: "In 1978 Robert Chapman, who took the course, reported that some of his classmates still claimed to have eight cantos by heart."
- weight: should

### 12. `heart.intro[1]`
- where: "He never set out his reasons at length."
- problem: A flat negative that the research cannot carry. The researcher's note says only that no essay arguing the case was found. One reason is on record at second hand: Dorothy Farnan says he believed in memory work as a training of the mind.
- evidence: `B_pedagogy.md`, entry 2.17, last line. Farnan, *Auden in Love*, p. 73; scan at archive.org/details/audeninlove0000farn (search "memory work"). The three books on disk have no argument for it (dh.txt 764, 3830 and 9904 are the only mentions of knowing anything by heart).
- fix: "No place has been found where he sets out his reasons at length."
- weight: should

### 13. Sources not named: `door.spreads[0].steps[3]`, `heart.intro`, `heart.own.intro[0]`, `meet.two.lead[0]`, `w1.meetings[1].spreads[1].steps[0].after[0]`, `w1.meetings[1].spreads[3].steps[0].lead[0]`
- where: for example "One student remembered him adding" and "One of them, Angelyn Stevens, pinned typed pages"
- problem: These reports name no source in place, and the Sources page has no entry for six of them: *A Certain World*, the lecture of 1956, the *Paris Review* interview, Stevens at the sink, the definitions, and the New School paper's thirty-five passages and twenty lines.
- fix: when the Sources page is rebuilt, add the following, each confirmed in this check. No notes: Pearce, p. 129. The student who remembered the addition: Charles Miller, *Auden: An American Friendship* (1983), p. 26. The two questions: *The Dyer’s Hand*, pp. 50–51. The definitions: Pearce, pp. 131–32. The phonograph: Pearce, pp. 135–36. The chart, the examination and the four cantos: Pearce, pp. 153–54. Stevens: Miller, pp. 77–78. Chapman: p. 509. The college for poets: *The Dyer’s Hand*, p. 77. The interview: as in finding 4. The five verdicts: *A Certain World*, pp. 291–92. The New School paper: *Lectures on Shakespeare*, Appendix I under 11 January 1947 and Appendix II, pp. 341 and after.
- weight: should
