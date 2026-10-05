# volpone: Ben Jonson, Volpone

- Source: Project Gutenberg no. 4039 (https://www.gutenberg.org/ebooks/4039), cached as `.cache/texts/pg4039_volpone.txt` ("most recently updated February 16, 2010"; a fresh download on 2 Oct 2026 was byte for byte the same). The file names no edition. Its scenes are divided by place, as Gifford divided them (Jonson's own Folio begins a new scene at each entrance), and the introduction and glossary look to be those of the Everyman's Library Jonson of 1910 (F. E. Schelling's). That is my inference, not something the file says.
- meta: `title` "Volpone", `translator` null, `verse` false, `year` 1606: the first performance (the Folio's "acted in the year 1605" is old style). Printed in quarto in 1607; the Epistle is dated 11 February 1607.
- Dropped: the title and author lines, the editor's introduction with its list of books, the Dramatis Personae, the line "SCENE: VENICE.", and the Glossary after the play. The script finds each by its heading and throws if they are not in that order.
- Kept before the play, each a part with no group:
  - `epistle`, label `The Epistle`: Jonson's dedication to the two universities. Five paragraphs of prose and the one line of Horace as a `q` block. The inscription over it and the place and date under it are printed a phrase to a line; each is given as one paragraph.
  - `argument`, label `The Argument`: the acrostic of seven lines. The source sets each first letter off from its word by a space; the space is closed, and the script throws if the letters do not spell the name.
  - `prologue`, label `Prologue`: 36 lines of verse, no speaker named.
- Parts of the play: one a scene, `a1s1` to `a5s8`. 5 acts, 20 scenes: 1, 3, 6, 2, 8 (the whole first act is one scene). The script throws on anything else. Each scene opens with two `d` blocks: the place, then who enters.
- There is no Epilogue heading. Volpone's closing address to the audience is the end of `a5s8`.
- Counts: 23 parts, 30,510 words, 118 pages; 1,408 speeches, 3,796 lines of verse in 1,478 blocks, 20 paragraphs of prose (5 in the Epistle, 15 in 2.1, all Volpone's as the mountebank) and the 1 quotation, 321 stage directions. Largest part `a1s1`, 5,405 words.
- Speakers: 34 labels as the source prints them, which is short, in capitals, with a colon (the colon is dropped): VOLP, MOS, VOLT, CORB, CORV, BON, CEL, SIR P, LADY P, PER, NAN, AND, CAS, 1 AVOC to 4 AVOC, 1 MER to 3 MER, NOT, COM, SERV, WOM, MOB, ALL, and a few joint ones. The source is not consistent: NANO beside NAN, COR once for Corvino (`a2s1` 227), VOLPONE in full over the closing address. One speech of Mosca's is headed "B:" in the source, which is nobody; the script reads it as MOS (its one change to the source's words).
- Stage directions: the source sets them in capitals (its way of showing the italics of the printed book), most of them in square brackets; five are in small letters. They are given in ordinary letters: a capital for the first word and for the names of persons and places (the list is in the script) and no other change; the script throws if anything but capitals differs. Taking one marked line out of the script puts the capitals back. A direction printed inside a speaker's label follows the `s` block as a `d` block.
- Verse and prose: everything in the play is set in five spaces and prose is wrapped at about 70 columns. Read by the same code as the Shakespeare plays (`plays/speech.mjs`; see `notes/hamlet.md`), except that a speech of one line is verse unless the speaker's own speeches near it are prose (785 one-line blocks: 783 verse, 2 prose, both Volpone's in 2.1). Three verse lines that the source turns over onto a second line are joined again.
- Checks: the words of the output, in order, are the words of the source from the Epistle to the Glossary heading (the list of persons apart); the script throws at the first difference. check-text has no problems and no warnings.

## Doubts

- The speakers' labels are the source's short forms, kept because the task says to give the name as the source prints it. If full names are wanted on the page, it is a table of 34 entries to add to the script.
- The directions' change from capitals to ordinary letters (above). Words that are not names (the officers, the merchants, a clarissimo) have small letters.
- `a1s1` 215: two words in square brackets in a verse line are the editor's fillings, not directions. They stay in the line with their brackets.
- `a4s1` 114: a direction with the hyphen of "Politick Would-be" in the wrong place, kept as printed.
- `a4s2` 36: a verse line that the source breaks in two round directions stays as two lines.
- The year (see above).
