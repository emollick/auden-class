# hamlet: Shakespeare, Hamlet

- Source: Project Gutenberg no. 1524 (https://www.gutenberg.org/ebooks/1524), cached as `.cache/texts/pg1524_hamlet.txt`; the file says "most recently updated September 19, 2025", and a fresh download on 2 Oct 2026 was byte for byte the same. It is Gutenberg's own modern-spelling text and names no printed edition: acts, scenes and place headings as in the usual nineteenth-century texts, a conflated text (it has the passages found only in the second quarto and those found only in the Folio).
- meta: `translator` null, `verse` false, `year` 1603: the year the play was first printed (the first quarto, a short text). No first performance is recorded. If the date of writing usually given is wanted instead, it is about 1600-01; the fuller second quarto is 1604-05.
- Dropped: the title and author lines, the Contents, the Dramatis Personæ, the line "SCENE. Elsinore.", and the marks of the plain-text file (underscores for italics, square brackets round directions).
- Parts: one a scene, `a1s1` to `a5s2`, label `Act 1, Scene 1`, group `Act 1`. 5 acts, 20 scenes (5, 2, 4, 7, 2); the script throws on anything else. The place line of each scene is the first `d` block of its part.
- Counts: 20 parts, 31,657 words, 108 pages; 1,137 speeches, 2,980 lines of verse in 776 blocks, 447 paragraphs of prose, 268 stage directions. Largest part `a2s2`, 4,895 words.
- Speakers: 43 labels, as the source prints them without the full stop. The source is not consistent about capitals (ALL and All, BOTH and Both, DANES and Danes) or about joint speakers (ROSENCRANTZ and GUILDENSTERN, and so on); all are kept as printed. The script holds the list and throws on a name in capitals that is not on it.
- Stage directions: paragraphs that are one bracket, or begin Enter / Re-enter, or are on a short list in the script, and every bracket inside a speech. A speech broken by a direction goes on in a new block without the speaker's name. The dumb show (one italic paragraph) is one `d` block.
- Check in the script: the words of the output, in order, are the words of the source from ACT I to the end marker (headings apart); the script throws at the first difference. It also throws on a speaker with no speech, on a part that opens with speech, and on leftover brackets or underscores.
- check-text: no problems, no warnings.

## How the speeches are read (the same code cuts Othello, The Tempest and Henry IV Part 2)

Code: `build/texts/plays/pg-shakespeare.mjs` (the layout of these Gutenberg files) and `build/texts/plays/speech.mjs` (verse or prose); they are in a folder of their own because they are not book scripts.

- The source wraps prose at 71 columns and sets verse line for line. A line break is a wrap if the next word would not have fitted, or the next line begins with a small letter; otherwise it is a real break. Wrapped lines are joined into `p` blocks; lines with real breaks between them are `v` blocks. Songs and letters (italic or set in) are kept in blocks of their own. No space is put in where a line ends with a dash, since the source never has one there.
- A verse line with a direction in the middle of it becomes two one-line blocks, one each side of the `d` block: the contract has no way to put a direction inside a line. Counts of verse lines are a little high for that reason.
- A dozen or so short prose speeches across the four plays are set by the source as two or three separate lines (it starts a new line where the speaker turns to someone else). They come out as lines of verse, as printed. In Hamlet: `a2s2` blocks 142 and 342, `a3s2` 14, `a5s1` 97.
- A speech of one line looks the same as verse and as prose in the source. It is settled from what stands round it (the speeches before and after, the same speaker's speeches near it, entrances and exits): see the long comment in `speech.mjs`. In scenes that are all verse or all prose this cannot go wrong. Where verse and prose meet it is right about nine times in ten: against 201 such speeches that I read in their places and marked, 15 differ, all at the turn from one to the other, where editions differ too; a fresh sample of 105 others gave 2 clearly wrong and 17 that could be either. `node build/texts/plays/single-lines-check.mjs` reruns the comparison. Hamlet has 692 one-line speeches or pieces of speeches (400 settled as verse, 292 as prose), about 190 of them near a turn.
- Matter in italics or set in (songs, letters, verses read out) is kept in blocks of its own. A piece of it one line long is always a line of verse, since it is nearly always sung.
- For whoever cuts passages by block number: a rebuild gives the same blocks (checked by building twice, byte for byte). If the weights in `speech.mjs` are changed, block numbers stay but some one-line blocks change between `v` and `p`. `content/units/04.mjs` already cuts 16 passages from Hamlet by block number; all resolve against this build.
- The lib and the tools: nothing found wrong. One thing to know: `writeText` empties a text's folder before it writes, so a cut made in the moment of a rebuild can fail.

## Doubts

- The year (see above).
- One-line speeches at a turn between verse and prose, as above. Known ones against my reading: `a4s2` 13, `a4s5` 25.
- `a3s2` 14-22: the source sets the first of these speeches as two lines, so the short speeches after it are read as verse; most editions print the passage as prose.
- `a2s2` 56: a one-line piece of the letter Polonius reads comes out as a line of verse (see above, matter in italics).
