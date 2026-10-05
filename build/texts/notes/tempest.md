# tempest: Shakespeare, The Tempest

- Source: Project Gutenberg no. 1540 (https://www.gutenberg.org/ebooks/1540), cached as `.cache/texts/pg1540_tempest.txt` ("most recently updated September 19, 2025"; a fresh download on 2 Oct 2026 was byte for byte the same). Gutenberg's own modern-spelling text; it names no printed edition.
- meta: `translator` null, `verse` false, `year` 1611: the first recorded performance (at court, 1 November 1611). First printed 1623, in the Folio.
- Dropped: the title and author lines, the Contents, the Dramatis Personæ, the "SCENE:" line under it, and the marks of the plain-text file.
- Parts: one a scene, `a1s1` to `a5s1`, then `epilogue` (label `Epilogue`, no group). 5 acts, 9 scenes (2, 2, 3, 1, 1) and the Epilogue; the script throws on anything else. The place line of each scene is the first `d` block.
- Counts: 10 parts, 17,323 words, 62 pages; 646 speeches, 1,847 lines of verse in 474 blocks, 213 paragraphs of prose, 152 stage directions. Largest part `a1s2`, 4,300 words.
- The Epilogue: the source prints PROSPERO over it as speaker, so the part is that name, 20 lines of verse and the exit.
- Speakers: 21 labels as printed. Two are not plain names: ARIEL’S SONG (printed as the name over one of the songs in 1.2) and the joint FERDINAND, MIRANDA.
- The cries of the wreck in 1.1, which the source prints as one italic paragraph beginning "A confused noise within" and gives to no speaker, are one `d` block (`a1s1` 64).
- Two burdens of Ariel's songs in 1.2 are printed without brackets in the source, a third with them. The script puts the brackets on the two (its only changes to the source's lines), so that all three are `d` blocks and the burden itself is a sung line.
- Eight lines that the source breaks in two, the second part beginning with a small letter, are joined into one line: five lines of verse turned over (four of them where a direction takes up room in the line), a line of the catch in 3.2, Caliban's cry after his song in 2.2 (it comes out as prose, `a2s2` 109), and a piece of Stephano's prose after a direction.
- Cut by the same code as Hamlet: see `notes/hamlet.md` for how lines, verse, prose and one-line speeches are read, and for the checks. The word-for-word check against the source passes; check-text has no problems and no warnings.
- One-line speeches or pieces of speeches: 281 (145 settled as verse, 136 as prose). This play has the most of them near a turn between verse and prose (the lords' banter in 2.1; Caliban's verse among Stephano's and Trinculo's prose).

## Doubts

- One-line speeches where verse and prose meet. Against my own reading: `a2s1` 5, 219, 221. Caliban's and Ariel's shortest speeches among the prose of 2.2 and 3.2 fall now one way, now the other; editions differ there too.
- Short prose speeches the source sets as two lines, kept as lines: `a1s1` 14, `a2s1` 109, `a2s2` 13, `a4s1` 133.
