# othello: Shakespeare, Othello

- Source: Project Gutenberg no. 1531 (https://www.gutenberg.org/ebooks/1531), cached as `.cache/texts/pg1531_othello.txt` ("most recently updated September 19, 2025"; a fresh download on 2 Oct 2026 was byte for byte the same). Gutenberg's own modern-spelling text; it names no printed edition.
- meta: `translator` null, `verse` false, `year` 1604: the first recorded performance (at court, 1 November 1604). First printed 1622.
- Dropped: the title and author lines, the Contents, the Dramatis Personæ, the two-line "SCENE:" note under it, and the marks of the plain-text file.
- Parts: one a scene, `a1s1` to `a5s2`. 5 acts, 15 scenes (3, 3, 4, 3, 2); the script throws on anything else. The place line of each scene is the first `d` block.
- Counts: 15 parts, 27,674 words, 98 pages; 1,180 speeches, 2,928 lines of verse in 1,007 blocks, 231 paragraphs of prose, 225 stage directions. Largest part `a3s3`, 4,068 words.
- Speakers: 26 labels as printed (one joint: DUKE and SENATORS).
- Two cries from off stage are printed with "Within" and no speaker's name (`a2s1` blocks 34 and 72). Each is one `d` block that holds the cry, since there is nobody to give it to.
- Cut by the same code as Hamlet: see `notes/hamlet.md` for how lines, verse, prose and one-line speeches are read, and for the checks. The word-for-word check against the source passes; check-text has no problems and no warnings.
- One-line speeches or pieces of speeches: 688 (541 settled as verse, 147 as prose).

## Doubts

- One-line speeches where verse and prose meet. Against my own reading: `a1s1` 70; `a2s1` 116, 120, 122 (the questions put to Iago between his rhymes, which most editions print as prose) and 136; `a2s3` 13; `a4s1` 45 and 224.
- `a4s1` 147: a short prose speech the source sets as two lines, kept as two lines.
