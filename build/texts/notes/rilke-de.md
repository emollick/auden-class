# rilke-de

Two poems of Rilke in German, for the translation exercise, each cut by `build/texts/rilke-de.mjs` from a Project Gutenberg file. `author: 'Rainer Maria Rilke'`, `title: 'Zwei Gedichte'`, `translator: null`, `verse: true`, `lang: 'de'`, no `year`. `source` names both files and links to the first; `note` on the index names the two books in one sentence. The script throws unless each poem has the stanzas and lines given below, each title page names the edition, and each poem begins and ends as expected.

## herbsttag: Herbsttag

- Source: Project Gutenberg no. 34521, *Das Buch der Bilder* (Leipzig: Insel-Verlag, MCMXX, that is 1920). Cache: `pg34521_rilke_buch_der_bilder.txt`. The book first came out in 1902 (the date the task gives); this is a later printing by Rilke's publisher, in his lifetime. I have not checked in which edition of the book the poem first stood: the earliest printing read is the second edition, of 1906 (below).
- Counts: 12 lines in 3 stanzas of 3, 4 and 5 lines, 87 words. 3 blocks.
- Second source: German Wikisource, page "Herbsttag", from *Das Buch der Bilder*, second, much enlarged edition (Berlin: Axel Juncker, 1906), p. 48, read against the scan and marked finished there. Cache: `dews_rilke_herbsttag.txt`.
- Differences of wording: none. Spelling and stops differ: in line 5 the 1906 edition has the older spelling of the first word (gieb for gib); it gives the possessive in line 2 a capital; and it has no commas at the ends of lines 2 and 5 or inside lines 8, 9 and 12. The 1920 printing is followed, as the file has it.

## panther: Der Panther

- Source: Project Gutenberg no. 33863, *Neue Gedichte* (Leipzig: Insel-Verlag, MCMXX, that is 1920). Cache: `pg33863_rilke_neue_gedichte.txt`. The book is of 1907.
- Counts: 12 lines in 3 stanzas of 4, 90 words. 4 blocks: a heading at 0, the stanzas at 1 to 3.
- The heading: the poem has a second line to its title, the place where the panther was seen. The file prints it in capitals under the title and, in ordinary letters and in brackets, in the list of contents. It is kept as an `h` block, level 3, in the ordinary letters of the contents; the script checks that the two agree. (`cut` passes over headings, so a passage cut from blocks 0 to 3 is the twelve lines.)
- Second source: German Wikisource, page "Der Panther", from *Neue Gedichte*, first edition (Leipzig: Insel-Verlag, 1907), p. 37, read against the scan and marked finished there. Cache: `dews_rilke_der_panther.txt`.
- Differences of wording: none, and the second line of the title is the same. The only difference is the dash in lines 10 and 11: a spaced dash on Wikisource, two hyphens without a space in the Gutenberg file. The file is followed.

## What was kept and dropped

- Kept exactly: every letter of each line as the file has it, with its umlauts and ß. The lines are not passed through `clean`; the script stops at any character that is not a letter, a space, a stop or a hyphen, and it counts the umlauts and ß of each poem (Herbsttag: ä 2, ü 3, ß 3; Der Panther: ä 6, ö 1, ü 2, ß 2), each a single letter. Every line was also compared with the cache file it came from: all twelve of each poem are there in order, byte for byte.
- Dropped: the titles in capitals (they are the labels, in the letters of each book's list of contents). Nothing else stands with these poems in the files.
- The dash is two hyphens, as in the files.

## Reading against Wikisource

`node -e "import('./build/texts/rilke-de.mjs').then(m => m.collate())"` reads both poems against the Wikisource pages (raw text, `index.php?title=...&action=raw`) and prints the words that differ. It is not part of the build.

## Check-text, and what is doubtful

- `check-text rilke-de`: no problems, no warnings. 2 parts, 177 words, 1 page.
- zeno.org was not needed. No host answered 403 or 407.
- An English verse translation of each poem was found and is in `poems` (`herbsttag-en`, `panther-en`): Jessie Lemont, 1918. See `poems.md`.
- Doubtful: nothing in the wording. The year of the printing followed (1920) is not the year of the poems (1902 and 1907), and its spelling in one word of Herbsttag is the later one, as said above.
