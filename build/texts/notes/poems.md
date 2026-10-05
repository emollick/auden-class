# poems

Four short poems for the exercises, each cut by `build/texts/poems.mjs` from a Project Gutenberg file. `author: 'Various'`, `translator: null`, `verse: true`, no `year`. `source` is the Gray (the main source, no. 30357); `note` on the index names the three editions in one sentence. The script throws unless every poem has the stanzas and lines given below, the title page of each file names the edition, and each poem begins and ends as expected.

## gray-elegy: Thomas Gray, Elegy Written in a Country Churchyard

- Source: Project Gutenberg no. 30357, *Select Poems of Thomas Gray*, edited with notes by William J. Rolfe (New York: Harper & Brothers; entered 1876, this printing 1883). Cache: `pg30357_gray_rolfe.txt`. Rolfe says in his preface that he collated the text line by line with Gray's own edition of 1768 and took no later reading. So this is the poem as Gray left it, not as first printed in 1751.
- Counts: 32 stanzas of 4 lines, 128 lines, 984 words. 33 blocks: stanzas at 0 to 28, the heading at 29, the three stanzas of the Epitaph at 30 to 32.
- The heading: the file prints `THE EPITAPH.` in capitals; it is kept as an `h` block, level 3, "The Epitaph".
- Dropped: the title (it is the label; it stands twice in the file, on a half-title and over the poem); 16 `[Illustration]` marks between stanzas; 25 line numbers in the margin (on every fifth line; the script checks each against the count); the setting-in of the second and fourth lines.
- Kept as the file has them: the straight quotation marks of the old man's speech (stanzas 25 to 29: one where it opens, one at the head of each stanza after, one where it closes), and Rolfe's spelling. He writes out several of Gray's shortened words (tower, wandering, Even, Heaven, Misery) and has "plowman" and "forever".
- Second source: Project Gutenberg no. 11254, *Poetical Works of Johnson, Parnell, Gray, and Smollett*, edited by George Gilfillan (Edinburgh, 1855). Five differences of wording, Rolfe first: line 35 Awaits / Await; line 94 these / those; line 102 roots / root; line 109 custom'd / accustom'd; line 125 farther / further. Fifteen more lines differ in spelling or hyphens only.
- Which is better: Rolfe, and it is followed. In all five places Rolfe's reading is also that of the two other texts read (below), and his notes give "Awaits" and "custom'd" as the readings of 1768. Both editions have "wind" in line 2.
- Also read against the Oxford Book of English Verse (no. 453 in Project Gutenberg no. 66619): no difference of wording; 24 lines differ in spelling (it keeps Gray's shortened forms).
- Also read against the first edition, *An Elegy Wrote in a Country Church Yard* (London: Dodsley, 1751), in the facsimile that is Project Gutenberg no. 15409. It has the same 128 lines, printed without spaces between stanzas, and differs in wording in ten lines: 2 (winds), 11 (sacred for secret), 20 (wake for rouse), 27 (a word printed twice in that file), 37 and 38 (the earlier form of the couplet), 47 (reins for rod), 92 (the earlier form of the line), 96 (hidden for kindred), 105 (frowning for smiling). These are the first printing's readings and misprints, which Gray changed afterwards.

## campion-laura: Thomas Campion, Rose-cheeked Laura

- Source: Project Gutenberg no. 66619, *The Oxford Book of English Verse, 1250-1900*, chosen and edited by Arthur Quiller-Couch (Oxford: Clarendon Press; first edition 1900, impression of 1931), no. 169, where the poem is headed "Laura". Cache: `pg66619_oxford_book_english_verse.txt`. Project Gutenberg has no edition of Campion that I could find by its search; the whole poem is in this anthology (and in no. 1304, an older transcription of the same anthology), and Alden's *English Verse*, no. 32262, quotes half of it. The spelling is modernised by the editor and the stops are his.
- Counts: 4 stanzas of 4 lines, 16 lines, 68 words. 4 blocks.
- Dropped: the number and title (the label is the one the task gave), the italic marks round the name in the first line, the setting-in of the lines.
- Kept as the file has them: curly apostrophes, the grave accent in line 6, and the word divided between lines 15 and 16 with its hyphen, as Campion printed it in 1602.
- Second source: *The Works of Dr. Thomas Campion*, edited by A. H. Bullen (London: privately printed at the Chiswick Press, 1889), p. 254, in modern spelling (archive.org `worksofdrthomasc00camp`). Third: *Campion's Works*, edited by Percival Vivian (Oxford: Clarendon Press, 1909), pp. 50-51, in the spelling of the *Observations* of 1602 (archive.org `campionsworks00camp`). Both are texts read by machine from the page, so I also looked at the three page images. Fourth, for the first two stanzas: Alden, as above.
- Differences of wording: none. The four agree word for word; they differ in spelling (Heav'n for Heaven, renewed for renew'd) and stops. The oddities the collation prints for Bullen and Vivian (in lines 5, 6 and 11 of Bullen; lines 2, 4, 7, 9, 13 and 14 of Vivian) are misreadings by the machine: the pages have the words we have. Bullen sets the poem without spaces between the stanzas; Vivian and the Oxford Book space them.

## herbsttag-en, panther-en: Rilke in Jessie Lemont's English

- Source: Project Gutenberg no. 38594, Rainer Maria Rilke, *Poems*, translated by Jessie Lemont, with an introduction by H. T. (New York: Tobias A. Wright, 1918; "Copyright 1918, by Jessie Lemont", "Published December, 1918"). Cache: `pg38594_rilke_lemont.txt`. Published in the United States before 1931. Labels as the task asked: "Rainer Maria Rilke: Autumnal Day, translated by Jessie Lemont (1918)" and "Rainer Maria Rilke: The Panther, translated by Jessie Lemont (1918)"; the titles are the book's, checked against its contents and the capitals over each poem.
- Autumnal Day (Herbsttag): 12 lines in 3 stanzas of 3, 3 and 6 lines (Rilke's are 3, 4 and 5), 96 words.
- The Panther: 12 lines in 3 stanzas of 4, 98 words. Lemont gives no second line to the title.
- Dropped: the titles and the setting-in. Nothing else stands with these poems in the file.
- Second source: two copies of the book of 1918 on archive.org, `cu31924026255822` (Cornell) and `poems00rilk` (Brigham Young), as read by machine, and the page images of the Cornell copy (pp. 22 and 44). Differences of wording: none.
- One stop differs: both copies of the printed book end The Panther with a semicolon; the Gutenberg file has a full stop. The file is followed.
- The "Acknowledgment" in the Gutenberg file, which names anthologies of the later 1920s, is not printed in the book of 1918: it is a leaf written by hand in the Brigham Young copy (I looked at the page image), the copy the file was evidently made from. The machine reading of the Cornell copy shows no such leaf. It does not touch the poems.

## Reading against the other editions

`node -e "import('./build/texts/poems.mjs').then(m => m.collate())"` reads every poem against the texts named above and prints, line by line, the words that differ. It is not part of the build. It uses seven more cache files, each fetched by `fetchText` from the address in the script: `pg11254_gray_gilfillan.txt`, `pg15409_gray_1751.txt`, `pg32262_alden_english_verse.txt`, `ia_worksofdrthomasc00camp_djvu.txt`, `ia_campionsworks00camp_djvu.txt`, `ia_cu31924026255822_djvu.txt`, `ia_poems00rilk_djvu.txt` (and the Oxford Book again, for the Gray).

## Check-text, and what is doubtful

- `check-text poems`: no problems, no warnings. 4 parts, 1,246 words, 5 pages.
- Every line of every part was compared with the cache file it came from: all are there in order, unchanged but for the margin numbers (Gray) and the italic marks in one line (Campion).
- English Wikisource has the Campion only in its pages of the Oxford Book, so it is not a second edition. Its search (api.php) answered 429, too many requests, to my second query, and I left it alone. No host answered 403 or 407.
- Line numbers in the reader fall on every third line: that is the reader's default, and `index.every`, which would change it, is not in the contract and is not set here.
- Doubtful: nothing in the wording. The spelling of the Gray is Rolfe's and of the Campion Quiller-Couch's, as said above.
