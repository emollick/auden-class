# Two records Auden played in class: the search

Written October 4, 2026. In the project I wrote only this file and the
contents of `review/class/records/`. My search scripts, cached catalogue
pages and analysis scripts are in the session scratch folder, outside the
project.

## In short

1. **Tristan, the love duet.** Four records made before 1926 that hold part
   of the duet for soprano and tenor have transfers at the Internet Archive.
   All four were published before 1926. Two are prepared:
   - `review/class/records/tristan-love-duet-kraus-denera-1915.mp3`
     (two sides joined, 7:57). **Recommended**, with one thing for you to
     decide: the only transfer is from a compact disc set of 2004.
   - `review/class/records/tristan-love-duet-sedlmair-schmedes-1903.mp3`
     (one side, 4:15). The fallback: a collector's transfer straight from the
     disc, from the same collection as the Leider record already on the site.

   No transfer was found of any record that holds the **last** part of the
   duet. The furthest any of these goes is the end of the passage that begins
   “So stürben,” where the two voices take up one melody in turn and then
   sing together.
2. **Beethoven, Concerto No. 4, second movement.** A recording from before
   1926 does exist (York Bowen, Vocalion, 1925, the first recording of the
   concerto), but no transfer of it was found. Nothing was prepared and
   nothing was substituted.

I cannot listen to sound. Everything said below about what a side contains
comes from labels, discographies and a numerical comparison of the recordings
with one another (see “How I know what each side holds”).

## What the nine records on the site look like

`ffprobe` on the nine files named in `content/records.mjs`: MP3, one channel,
44,100 Hz, constant 96 kb/s, no tags except the encoder stamp `Lavf60.16.100`
(the ffmpeg 6.1.1 installed here). Their loudness differs a good deal from
one to the next (mean level from about 10 to about 30 dB below full scale),
so no levelling was done to them and I did none. The two prepared files
match: MP3, one channel, 44,100 Hz, 96 kb/s, the same encoder stamp and
nothing else.

## The rule applied

A sound recording counts as public domain in the United States in 2026 only if
it was first published before January 1, 1926, and only if a discography or a
library page shows that it was issued by then. For each record the evidence is
stated exactly.

---

## (1) Tristan und Isolde, Act 2, the love duet

### Every record of the duet from before 1926 that I could document

| Singers | Record | Made | Language | Transfer found? |
|---|---|---|---|---|
| Sophie Sedlmair, Erik Schmedes | G&T 044039 | Vienna, 1903 | German | **Yes** (candidate A) |
| Cecilia David, Emanuele Ischierdo | Gramophone 054183 (matrix 1316c) | Milan, 1907 or 1908 | Italian | No |
| Elsa Bland, Erik Schmedes | Gramophone 2-44412 and 2-44411 | Vienna, 1908 | German | **Yes**, from a CD (candidate D) |
| Thila Plaichinger, Jacques Urlus | Pathé 15727 | Berlin, about 1910 | German | **Yes** (candidate B) |
| Thila Plaichinger, Jacques Urlus | Pathé 15725 (“So stürben”) | Berlin, about 1910 | German | No |
| Alessandrovich, Francesco Viñas | Fonotipia 69097 and 69098 | Milan, October 7, 1912 | Italian | No (in a collector's table, never uploaded) |
| Erna Denera, Ernst Kraus | Gramophone 044278 and 044277 | Berlin, early 1915 | German | **Yes**, from a CD (candidate C) |
| Florence Austral, Tudor Davies | HMV D 736 and D 737, four parts | London, May 1923 | English | No |
| Frida Leider, Fritz Soot | Polydor matrices 788 az and 893 az | Berlin, 1925 | German | Not published at the time. **Does not qualify.** |
| Nordica, Anthes and others | Mapleson cylinders | New York, 1901 to 1903 | German | Private recordings from the stage, first sold years later. **Do not qualify.** |

Sources for the table:

- Robert Johannesson's discographies of historical singers, 27 files at the
  Internet Archive (`artista_201908`, `artistd`, `artistk` and so on), all
  read for entries from this opera.
- Roberto Bauer, *The New Catalogue of Historical Records 1898-1908/09*
  (1947), `https://archive.org/details/in.ernet.dli.2015.177987`.
- The 78rpm Opera Collection's own table,
  `https://archive.org/download/78-opera/opera.csv`.
- *The Gramophone*, October 1923, January 1926, November 1926, May 1927.
- The HMV General Catalogue for 1924, `https://archive.org/details/hmv1924`.
- *The American Record Guide*, December 1944,
  `https://archive.org/details/sim_american-record-guide_1944-12_11_4`.

Only HMV D 737 is known to hold the last part of the duet. A letter in *The
Gramophone* for January 1926 follows the four HMV parts through the vocal
score: Part III runs from “O sink” to the end of Brangäne's warning, and
Part IV from “Soll ich” to the end of the scene. I found no transfer of either
record anywhere I looked.

### Candidate C. Denera and Kraus, 1915. PREPARED. Recommended.

- **Performers:** Erna Denera, soprano (Isolde), and Ernst Kraus, tenor
  (Tristan), with orchestra. The conductor is given as Bruno Seidler-Winkler
  by the notes of the 2004 compact disc set only. I saw no other source for
  his name.
- **Label and numbers:** Gramophone (Deutsche Grammophon, Berlin), two
  12-inch sides. 044278, matrix 817 m, is the first part (“O sink”). 044277,
  matrix 818 m, is the second part (“Doch unsre”). The catalogue numbers run
  against the order of the music. Sold back to back as 65267 and later as
  ES 192.
- **Date recorded:** Berlin, early 1915. The notes of the 2004 set say January
  or February 1915, and the track names on the item page say February 1915.
  Johannesson's list for Denera says January or February 1915. His list for
  Kraus says March 1915 with a question mark.
- **Date issued, and the evidence:** by 1925 at the latest, most likely 1915
  or soon after. I found no page that prints the month of first issue.
  1. Bennett and Wimmer, *A catalogue of vocal recordings from the 1898-1925
     German catalogues of the Gramophone Company Limited, Deutsche Grammophon
     A.-G.* (Greenwood Press, 1978; Internet Archive item
     `catalogueofvocal0000gram`) lists both numbers under Denera and Kraus,
     each with its title. The book can only be borrowed there, so I saw these
     lines in the Archive's full-text search results, not on the page.
  2. Johannesson's discographies give the catalogue numbers and both
     back-to-back numbers and do not mark either side unpublished, as they
     do mark unissued takes: Kraus, entries 91 and 92
     (`https://archive.org/details/artistk`), and Denera, entries 108 and 109
     (`https://archive.org/details/artistd`).
  3. *The Gramophone*, May 1927 (Vol. 4, No. 12,
     `https://archive.org/details/sim_gramophone_1927-05_4_12`), names the
     second part as a record by Denera and Kraus and says that it falls
     between Parts 3 and 4 of the HMV set. (It prints the number 044278 for
     it. The discographies give that number to the first part.)
- **Item page:**
  `https://archive.org/details/100-jahre-bayreuth-auf-schallplatte-CD04`,
  the tracks numbered 72 and 73 (the sixth and seventh tracks of the fourth
  disc of the set). The set's notes are at
  `https://archive.org/details/9-0020-100-jahre-bayreuth-auf-schallplatte-12-cd-box-gebhardt-jgcd-0062-12-beiheft-2004`.
- **Rights and access on that page, in my words:** the page carries the
  Creative Commons Public Domain Mark 1.0, put there by the person who
  uploaded it in July 2025, and the files can be downloaded by anyone. The
  description says plainly that this is a copy of a 12-disc set, *100 Jahre
  Bayreuth auf Schallplatte*, published by Gebhardt in 2004 (JGCD 0062-12)
  and put together by German collectors. The uploader's collection says of
  itself that its sound comes from long-playing records and other later
  issues, not from original 78s. The set's own notes credit the sound
  restoration to Christian Zwarg and carry the publisher's notice for 2004
  (the P and C marks of Gebhardt Musikvertrieb). The same uploader put the
  notes themselves under a different mark, one that forbids commercial use
  and changes. So the public domain mark is the uploader's statement, not
  the publisher's. **This is the one point that needs your decision.** The
  1915 recording itself is in the public domain in the United States.
  Whether the publisher of the 2004 set has any claim on its cleaned-up
  transfer I cannot settle.
- **Length:** first side 4:10 as the CD track (4:08 of sound), second side
  3:50 (3:47 of sound). Prepared file 7:57.
- **What the music is:** the first side is the first section of the duet
  proper, from “O sink” to the point where that section closes. In the opera
  Brangäne's warning follows without a break; it is not on the record. The
  second side begins later, at Isolde's “Doch unsre,” runs through the
  exchange that follows, and then holds the whole passage that begins
  “So stürben”: the tenor sings the melody through, the soprano takes it up,
  the two answer each other line by line, and they finish it together. That
  close is where the side ends. In the prepared file the second side starts
  at 4:09, “So stürben” at about 6:08, the soprano's entry with the same
  melody at about 6:58, and the music ends at 7:55.
- **State of the sound:** a cleaned transfer. Almost nothing above 4,000 Hz
  remains, surface noise is low, and each track fades to digital silence. It
  is quiet (peaks at about 7 dB below full scale); I did not raise it. Its
  pitch agrees with two of the other three transfers to within about a fifth
  of a semitone, and the opening sits in A flat, as written.
- **Another transfer of the first side only:** track 06 of
  `https://archive.org/details/03-ernst-kraus-meistersinger-1908`, a copy of
  the long-playing record Court Opera Classics CO 361. It is filtered as
  heavily, plays about a fifth of a semitone lower, and has no rights
  statement. Downloaded for comparison, not used.
- **Command run** (exactly):

  ```
  ffmpeg -hide_banner -nostdin -y -i /home/user/auden-course/review/class/records/src/kraus-denera-gram-044278-mx817m_ia-bayreuth-cd04-track72.flac -i /home/user/auden-course/review/class/records/src/kraus-denera-gram-044277-mx818m_ia-bayreuth-cd04-track73.flac -filter_complex "[0:a]atrim=end_sample=10962527,asetpts=PTS-STARTPTS[a];[1:a]atrim=end_sample=10053569,asetpts=PTS-STARTPTS[b];[a][b]concat=n=2:v=0:a=1[out]" -map "[out]" -ac 1 -ar 44100 -c:a libmp3lame -b:a 96k -map_metadata -1 /home/user/auden-course/review/class/records/tristan-love-duet-kraus-denera-1915.mp3
  ```

  What the two `atrim` numbers do: each CD track ends in pure digital silence
  put there by the maker of the disc, 2.017 seconds after the first side and
  3.001 seconds after the second. Each was cut down to exactly one second.
  Nothing else was cut. The two channels of the source are identical sample
  for sample, so making one channel changes nothing. The sides are joined in
  the order of the music, 044278 first.
- **Prepared file:** `tristan-love-duet-kraus-denera-1915.mp3`, 5,719,607
  bytes, 476.6 seconds.

### Candidate A. Sedlmair and Schmedes, 1903. PREPARED. The fallback.

- **Performers:** Sophie Sedlmair, soprano, and Erik Schmedes, tenor, with
  piano. The pianist is not named.
- **Label and numbers:** Gramophone & Typewriter (G&T), black label, 12-inch,
  single-sided, 044039 (the item page prints 44039), matrix 55 Hp.
- **Date recorded:** Vienna, August 1903. So say the notes of the Hamburger
  Archiv's Schmedes edition (Vol. 1, disc 1, track 23: “08/1903”) and, with a
  question mark, Johannesson's Schmedes list (entry 24). The item page and
  the collection's table say 1904.
- **Date issued, and the evidence:** 1904 at the latest.
  1. Bauer's catalogue of 1947 (address above) has 044039 in both singers'
     entries (“SEDLMAIR, Sophie” and “SCHMEDES, Erik”) among the black label
     G&T records from Vienna, under the year 1904.
  2. The item page gives the publisher as G&T, the place as Vienna, the
     matrix as 55Hp and the date as 1904, and the collection's table calls
     the disc a single-sided black label G&T. The company used that name only
     until about 1907.
  3. *The American Record Guide*, December 1944, says in a postscript that
     the two recorded part of the duet in 1903 (the catalogue number printed
     there, 043004, is not this one and looks like a slip). *The Gramophone*,
     September 1942
     (`https://archive.org/details/sim_gramophone_1942-09_20_232`), writes of
     044039 as part of the love duet with Schmedes.

  This is the earliest record of any part of the duet that I found.
- **Item page:** `https://archive.org/details/78_osinkhernieder_058_04`
- **Rights and access on that page, in my words:** the page has no license or
  rights line at all. The item belongs to the Internet Archive's “78rpm Opera
  Collection,” was put up by one of the Archive's own staff accounts in
  November 2019, and can be played and downloaded by anyone. The page notes
  the stylus size and that the disc was played at 74 revolutions a minute.
  The Leider record already on the site comes from this same collection.
- **Length:** 4:15.
- **What the music is:** the first section of the duet proper, from “O sink”
  to its close. It is the same stretch of music as the first side of
  candidate C; the two match from end to end.
- **State of the sound:** an untouched transfer from the disc. Surface noise
  throughout and up to the top of the range, two loud passages that strain
  the old recording (near 1:45 and 3:15), piano in place of the orchestra.
  One thing to know: this transfer sounds about three quarters of a semitone
  higher than the other three, which agree with one another. The likeliest
  cause is that 74 turns a minute is about 4 percent too fast for this disc.
  The Hamburg edition's transfer of the same side runs 4:27 against 4:15
  here, the same 4 to 5 percent. I did **not** correct it, since the rule is
  that nothing else is done to the sound. Slowing it by that amount would be
  a single filter if you want it.
- **The other file on the same page** (the raw capture, 4:29) opens with a
  modern spoken announcement and was not used.
- **Command run** (exactly):

  ```
  ffmpeg -hide_banner -nostdin -y -i /home/user/auden-course/review/class/records/src/sedlmair-schmedes-gt-044039_ia-78opera_finished.flac -ac 1 -ar 44100 -c:a libmp3lame -b:a 96k -map_metadata -1 /home/user/auden-course/review/class/records/tristan-love-duet-sedlmair-schmedes-1903.mp3
  ```

  Nothing was trimmed: there is no silence longer than two seconds at either
  end.
- **Prepared file:** `tristan-love-duet-sedlmair-schmedes-1903.mp3`,
  3,061,073 bytes, 255.1 seconds.

### Candidate D. Bland and Schmedes, 1908. Not prepared.

- **Performers:** Elsa Bland, soprano, and Erik Schmedes, tenor, both of the
  Vienna Court Opera, with orchestra (the 1908 advertisement cited below says
  that every vocal record in its list was made with orchestra).
- **Label and numbers:** Gramophone, black label, two 10-inch sides. 2-44412,
  matrix 13157 u, is the first part (“O sink”). 2-44411, matrix 13156 u, is
  the second part (“So stürben”). The second part was recorded first, so
  here too the numbers run against the order of the music. Later numbered
  ER 216.
- **Date recorded:** Vienna, 1908.
- **Date issued, and the evidence:** September 1908.
  1. A Kraków daily, *Głos Narodu*, 1908, No. 406 (September 5, 1908), page
     8, at
     `https://archive.org/details/jbc.bj.uj.edu.pl.NDIGCZAS000046_1908_406_PP`
     (a Jagiellonian Library scan, marked public domain), carries the
     Gramophone Company's list of records just out, new that September, from
     its agent Józef Weksler. Under records for several voices it names
     Schmedes and Bland in the duet from this opera and brackets two numbers
     as the two sides of one ten-inch record: 2-44411, and a second number
     printed as 2-44413, which must be a slip for 2-44412, since 2-44413 is
     the next record in the list. I read this on the page image itself.
  2. Bauer's catalogue lists both numbers in Bland's entry, black label,
     Vienna, 1908.
  3. *The American Record Guide*, December 1944, calls them the first records
     of parts of the duet (its postscript then adds candidate A) and remarks
     on the reversed numbers.
- **Item page:** `https://archive.org/details/schmedes-2`. The sound is not
  listed on the page. It is track 3 of the second disc inside the file
  `Vol.2.rar`, which the Archive lets one open file by file.
- **Rights and access on that page, in my words:** no license or rights line.
  It is a private person's upload, in December 2023, of a three-disc set
  published by the Hamburger Archiv für Gesangskunst (*Erik Schmedes, Vol. 2,
  recordings of 1906 to 1912*), packed as one archive file with scans of the
  booklet. The page's own summary of the set leaves this opera out, which is
  why it took a long time to find.
- **Length:** 5:42 as the CD track; the music ends at about 5:32.
- **What the music is:** the two sides are already joined on the disc, with
  about seven seconds of near silence between them. First side (to 2:58): the
  opening of “O sink” for about forty seconds, then a cut of about a minute
  of the music, then on to the close of the first section, the same close as
  A and C. Second side (from about 3:07): a lead-in of about thirteen
  seconds and then the whole “So stürben” passage (from about 3:20; the
  second time through from about 4:20), taken more slowly than by Kraus and
  Denera and ending at the same place as their second side.
- **State of the sound:** a cleaned transfer, nothing above about 4,000 Hz,
  nine and a half seconds of silence at the end.
- **Why not prepared:** it holds the same later passage as candidate C but
  less of the duet (the first section is cut and the “Doch unsre” exchange is
  missing), and it has the same doubt about a compact disc source without
  even an uploader's rights statement. If you want it, this command was
  tested (output not kept) and gives a file of 5:36 and about 4.0 MB:
  `ffmpeg -i src/bland-schmedes-gram-2-44412-2-44411_ia-schmedes-2-cd2-track03.flac -af atrim=end_sample=14822690 -ac 1 -ar 44100 -c:a libmp3lame -b:a 96k -map_metadata -1 tristan-love-duet-bland-schmedes-1908.mp3`
  (it keeps one second of the closing silence and leaves the seven-second
  pause between the sides as the disc has it).

### Candidate B. Plaichinger and Urlus, about 1910. Not prepared.

- **Performers:** Thila Plaichinger, soprano, and Jacques Urlus, tenor. The
  item page says piano. The notes of the 2004 set give an orchestra for the
  record on the other face of the same disc. I could not tell which is right.
- **Label and numbers:** Pathé 15727, matrix 51693, an 11-inch vertical-cut
  disc with etched label, double-sided, backed with 15625.
- **Date recorded:** Berlin, 1909 or 1910 (Johannesson, Plaichinger list,
  entry 5; 1910 with a question mark in his Urlus list; 1910 on the item
  page).
- **Date issued, and the evidence:** about 1910, but this is the weakest
  case. The evidence is Johannesson's discography, which gives the Pathé
  catalogue number and does not mark it unpublished; the item page (Pathé,
  Berlin, 1910); and the fact that two pressed copies are in collections (the
  collector's here, and one at the Saxon State and University Library in
  Dresden, according to the page of the item named next). I found no dated
  catalogue or advertisement. By your rule a record made about 1910 and sold
  on a commercial label of the time is normally safe.
- **Item page:** `https://archive.org/details/78_osinkhernieder_335_14`. The
  Dresden library's own transfer, an MP3, is track 06 of
  `https://archive.org/details/pathe-slub-02`.
- **Rights and access, in my words:** the first page has no rights line (same
  collection and same kind of upload as candidate A). The second carries the
  Public Domain Mark, put there by its uploader, who says he took the files
  in 2016 and 2017 from the Dresden library's public sound archive.
- **Length:** 3:05.
- **What the music is:** the first section of the duet proper with about a
  minute cut from the middle, ending at the same close as the others.
- **State of the sound:** an untouched transfer from the disc, played at 88
  turns a minute; at the same pitch as candidate C; low in level, with more
  surface noise than candidate A.
- **Why not prepared:** same music as candidate A but with a cut, and the
  thinnest evidence of issue. The plain command works on it (tested, output
  not kept; 3:05, about 2.2 MB):
  `ffmpeg -i src/plaichinger-urlus-pathe-15727_ia-78opera_finished.flac -ac 1 -ar 44100 -c:a libmp3lame -b:a 96k -map_metadata -1 tristan-love-duet-plaichinger-urlus-1910.mp3`

### Which I recommend, and why

**Candidate C, Denera and Kraus**, if a transfer taken from a compact disc
set of 2004 is acceptable to you.

- *Which part of the duet.* It is the longest stretch of the duet on any
  record found, eight minutes, and with candidate D it is one of only two
  that reach the “So stürben” passage, where the two voices take the same
  melody in turn and then close it together. That is as near to the place
  Auden was pointing to as these old records come. It is not the end of the
  duet. No transfer of the end was found.
- *The state of the sound.* With orchestra, at the right pitch, and the
  quietest surfaces of the four.
- *The catch.* The sound was cleaned for a commercial disc in 2004 and
  reached the Internet Archive as someone's copy of that disc. Every one of
  the nine records now on the site credits a library's or a collector's own
  transfer from the disc.

**If that catch rules it out, use candidate A, Sedlmair and Schmedes.** It is
the cleanest source (the same collection as the Leider record), the best
documented as published, and the earliest. Against it: only the opening
section of the duet, a piano instead of the orchestra, more noise, and a
transfer that runs a little fast and sharp.

### Credit lines in the manner of content/records.mjs

For candidate C (file `tristan-love-duet-kraus-denera-1915.mp3`):

```js
title: 'Two stretches of the love duet in the second act of Wagner’s *Tristan und Isolde*: its opening, “O sink,” and the later passage from “Doch unsre” through “So stürben”',
plain: 'The love duet from Tristan und Isolde',
performers: 'Erna Denera, soprano, and Ernst Kraus, tenor, with orchestra conducted by Bruno Seidler-Winkler. Gramophone records 044278 and 044277, made in Berlin early in 1915. Eight minutes.',
credit: `From the compact disc set *100 Jahre Bayreuth auf Schallplatte* (Gebhardt, 2004), with the sound restored by Christian Zwarg, in a copy of the set at the [Internet Archive](${IA}100-jahre-bayreuth-auf-schallplatte-CD04).`,
```

(The conductor's name rests on the notes of that set alone. Write “with
orchestra.” if you want only what is certain.)

For candidate A (file `tristan-love-duet-sedlmair-schmedes-1903.mp3`):

```js
title: 'The opening of the love duet, “O sink,” in the second act of Wagner’s *Tristan und Isolde*',
plain: 'The opening of the love duet from Tristan und Isolde',
performers: 'Sophie Sedlmair, soprano, and Erik Schmedes, tenor, with piano. Gramophone and Typewriter record 044039, made in Vienna in 1903. Four minutes.',
credit: `A collector’s transfer from the disc, at the [Internet Archive](${IA}78_osinkhernieder_058_04).`,
```

(“Made in Vienna in 1903 or 1904” is the cautious form: the month of
recording, August 1903, comes from the Hamburg edition's notes, and the item
page says 1904.)

For candidate D (no file prepared):

```js
title: 'Two stretches of the love duet in the second act of Wagner’s *Tristan und Isolde*: its opening, “O sink,” shortened, and the later passage “So stürben”',
plain: 'The love duet from Tristan und Isolde',
performers: 'Elsa Bland, soprano, and Erik Schmedes, tenor, with orchestra. Gramophone records 2-44412 and 2-44411, made in Vienna in 1908. Five and a half minutes.',
credit: `From the compact disc set *Erik Schmedes, Vol. 2* of the Hamburger Archiv für Gesangskunst, in a copy at the [Internet Archive](${IA}schmedes-2).`,
```

For candidate B (no file prepared):

```js
title: 'The opening of the love duet, “O sink,” in the second act of Wagner’s *Tristan und Isolde*, shortened by about a minute',
plain: 'The opening of the love duet from Tristan und Isolde',
performers: 'Thila Plaichinger, soprano, and Jacques Urlus, tenor. Pathé record 15727, made in Berlin about 1910. Three minutes.',
credit: `A collector’s transfer from the disc, at the [Internet Archive](${IA}78_osinkhernieder_335_14).`,
```

### How I know what each side holds

I have no way to hear a recording. What I did instead:

1. Took each side's own title from its label, as the item pages and the
   discographies give it. That fixes where each side begins.
2. Measured every transfer against the others. ffmpeg computed a spectrum
   for each quarter second; a short script of mine reduced each to the
   strength of the twelve pitch classes (in thirds of a semitone, because old
   discs are transferred at differing speeds) and then looked for the
   stretches two recordings have in common, at every transposition. As a
   test, the two transfers of the Kraus and Denera first side (the 2004 disc
   and the long-playing record) matched from start to finish, as they should.
3. Results.
   - The Sedlmair side and the first Kraus and Denera side match from start
     to finish at the same pace, so they hold the same music.
   - The Pathé side matches the Sedlmair side up to 1:53 and again from 2:52
     to the end. It skips the minute between.
   - The first Bland side matches the Sedlmair side for its first forty
     seconds or so, skips about a minute, and matches it again from about
     1:52 to the end.
   - All four first sides end at the same place.
   - The last two minutes of the second Kraus and Denera side match the
     whole second Bland side, which is slower by a fifth.
   - In that stretch the same music comes twice in succession, on both
     records. On the Kraus and Denera side each of the two matches the
     opening of the Liebestod already on the site
     (`tristan-liebestod-gadski-1915.mp3`, read only, not changed). That is
     as it should be: the Liebestod begins with the melody of “So stürben,”
     and in the duet that melody is sung through twice, first by the tenor
     and then by the two voices in turn.
4. What this cannot tell me: the exact bar at which a side stops, whether
   some small cut is shared by all four first sides, who is singing at a
   given moment, or anything about how well it is sung. That the tenor
   begins the “So stürben” passage and that the two voices sing its last
   lines together is from the score as I know it, not from the comparison.

### Sides with one singer only (listed, as asked; none prepared)

- **Brangäne's warning (“Einsam wachend”):**
  - Laura Hilgermann with piano, Odeon 38114, matrix Vx 571, Vienna, about
    1905, 2:36, `https://archive.org/details/78_einsamwachend_249_06`.
  - Sigrid Onegin, contralto, with orchestra, Polydor 043371, matrix 355 as,
    about 1922, 4:00, `https://archive.org/details/78_einsamwachend_326_13`.
  - Margarete Arndt-Ober, Gramophone 043243, matrix 351 al, 1913, on a copy
    of a long-playing record,
    `https://archive.org/details/margarete-arndt-ober-preiser-co-305-side-b`.
  - Eleonora de Cisneros, Pathé 11513, dated 1916 on its page, a collector's
    upload,
    `https://archive.org/details/eleonora-de-cisneros-richard-wagner-tristan-und-isolde-wacht-lied-pathe-perfect-11513`.
  - Emmi Leisner's Polydor record of it is from 1928 and does not qualify.
- **Tristan alone, from the end of the act (“Wohin nun”):** Ernst Kraus,
  1905, on the same 2004 set (disc 4, track 75); Otto Briesemeister on disc
  11 of that set (track 240); Jacques Urlus for Pathé, track 08 of
  `pathe-slub-02`.
- **Library of Congress National Jukebox:** Edoardo Ferrari-Fontana, tenor, a
  solo from this opera in Italian, recorded February 20, 1914,
  `https://www.loc.gov/item/jukebox-649748/`. The other five items there from
  this opera are all the Liebestod (Fremstad 1913, Gadski 1915, and three
  orchestral).

### Seen and set aside because they do not qualify

- **Leider and Soot, Polydor, 1925** (matrices 788 az and 893 az). Both
  Johannesson's Leider list and the page of the long-playing record that
  carries them (`https://archive.org/details/sootpreiserlv143sidea`) mark
  them unpublished.
- **Leider, Melchior, Albert Coates.** One item in the 78rpm Opera Collection
  (its address ends in `_190_03`) gives the date September 13, 1924. That is
  a slip for 1929. The collection's table shows RCA Victor 7273 with matrices
  CLR 5612 and 5613, and Johannesson dates those matrices September 13, 1929.
- **Later sets seen:** Ljungberg and Widdop (1927), Larsén-Todsen and Graarud
  (1928), Bäumer and Kirchhoff (1931), Flagstad and Melchior (1939), Bäumer
  and Seider (1943), Traubel and Ralf (1947).
- **Mapleson cylinders** of 1901 to 1903, with fragments of the duet from the
  stage of the Metropolitan Opera: private recordings, first sold as discs
  years later by a collectors' club (*The American Record Guide* for December
  1944 names two of those discs).

---

## (2) Beethoven, Piano Concerto No. 4 in G major, Op. 58, second movement

**Your guess needs one correction: a recording from before 1926 does exist.
But no transfer of it was found, so there is nothing to prepare.**

- **The earliest recording of the concerto I can document:** York Bowen,
  piano, with the Aeolian Orchestra conducted by Stanley Chapple. Vocalion
  A-0237 to A-0240, four 12-inch records, the whole concerto, recorded by the
  old horn process, with Bowen's own cadenzas. **Published in 1925.** The
  second movement, Andante con moto, is on A-0239 together with the first
  part of the Rondo.
- **Evidence that it was issued in 1925:** *The Gramophone*, September 1925
  (Vol. 3, No. 4), reviews it at length under a heading that names this
  concerto, gives the numbers A.0237 to 40 and the price, names the players
  and the conductor, and congratulates Vocalion on its first concerto
  (`https://archive.org/details/sim_gramophone_1925-09_3_4`). The October
  1925 issue speaks of it again. The Vocalion catalogue at
  `https://archive.org/details/vocalionrecords1925` lists the four records
  with their contents.
- **So it would qualify** (first published before January 1, 1926). I found
  no transfer of any side of it at the Library of Congress or at the Internet
  Archive. The Discography of American Historical Recordings could not be
  reached, and it does not cover British Vocalion in any case.
- **The next recordings** are electrical and later: Karol Szreter for
  Parlophone (listed beside Bowen's in *The Phonograph Monthly Review*,
  February 1928, `https://archive.org/details/PMR_2_5`), then Schnabel with
  the London Philharmonic under Sargent in 1933. As instructed I did not
  fetch Schnabel's, and I did not substitute any other piece.
- Closest thing at the National Jukebox: Frank La Forge, piano, in an
  “Adagio” from the Fifth Concerto, recorded October 2, 1912, with no
  orchestra named (`https://www.loc.gov/item/jukebox-132182/`). Not the piece
  and not offered.

---

## Not found

What I looked for and did not find, with the searches. Where a search used
more than two words of the text of the opera I describe it instead of
printing it.

**Any transfer of the last part of the duet** (“Soll ich,” “O ew'ge”), in any
language, from before 1926. The one record known to hold it is HMV D 737,
Part IV, Austral and Davies, in English. The Internet Archive's copy of the
King's College London transfers has other HMV sides by these two singers
(fifteen and eighteen items) but not D 736 or D 737.

**Transfers of the other documented duet records:** Pathé 15725; the Italian
Gramophone record of David and Ischierdo; the Fonotipia pair of Alessandrovich
and Viñas (listed in the opera collection's table as tape 292, items 13 and
14, but no such item was ever uploaded).

**A direct transfer from the disc** of the Kraus and Denera sides or of the
Bland and Schmedes sides. Only copies of compact discs and of a long-playing
record turned up.

**An orchestral arrangement of the duet without voices** from before 1926.
Orchestral records of this opera from those years are all the Prelude or the
Liebestod. The search for arrangements of the love music (nine hits) found
nothing from before 1926.

**Any transfer of the 1925 Vocalion set of the Beethoven concerto.**

### Searches run

**Library of Congress National Jukebox**
(`https://www.loc.gov/collections/national-jukebox/?q=…&fo=json`), 26
searches. Hits in parentheses.
Tristan und Isolde (6); Isolde (6); Tristano (0); Tristan and Isolde (6);
love duet Wagner (0); the opening words of the duet (0); the words that
follow them (0); Brangäne (0); Brangaene (0); Einsam wachend (0);
Liebesnacht (0); Liebesduett (0); duetto d'amore (0); Isotta (0); Wagner duet
(4, none from this opera); Liebesnacht Tristan (0); Tristan duet (0);
Beethoven concerto (1); Beethoven piano concerto (1); concerto G major
Beethoven (1); Andante con moto (3, none Beethoven); Beethoven op. 58 (0);
fourth concerto (0); concerto no. 4 (9, none Beethoven); York Bowen (0);
Bowen Beethoven (0).

**Internet Archive, item search** (`advancedsearch.php`), about 70 searches.
The main ones, with hits:

- titles with “tristan” in the 78 rpm collections (51; 18 dated before 1927)
- titles with the duet's opening words (2: candidates A and B)
- titles with Liebesduett or Liebesnacht (10, all later recordings)
- this opera with duet, duett, duo, duetto (20); with any of about thirty
  singers' names (86)
- all Wagner in the 78rpm Opera Collection (247); that collection by opera
  name (15); by “love duet” (15); its Fonotipia Wagner (10); items numbered
  like tape 292 (0)
- the King's College London collection for this opera (68, no duet); for
  Austral (15); for Tudor Davies (18); for catalogue numbers 730 to 738 on
  HMV (0); for “love duet” and like titles (4)
- the collections of the uploader of the 2004 set, for this opera (45); the
  discs of that set (11 of the 12 are there)
- Denera with Kraus (3); the catalogue numbers 044278, 044277, 044039 (4);
  65267 or ES 192 (0); the opening words of the second side (2)
- the words “So stürben” in several spellings (3, all later recordings);
  Bland with Schmedes (0); Schmedes (53); Elsa Bland (11); Plaichinger (7);
  Urlus (81); Ischierdo or Cecilia David (9); Alessandrovich (0); Viñas with
  this opera (1); the numbers 2-44411, 2-44412, ER 216, 054183, 69097, 69098
  (17, none relevant)
- this opera's name in Italian, French, Polish, Swedish, Danish, before 1927
  (1); in English with the names of English singers (3)
- this opera with “love music,” Nachtgesang, Liebesszene, “love scene” and
  like words (9, none before 1926)
- Cisneros with this opera (1, the item listed above)
- for the concerto: York Bowen (15, none of it); Bowen with Beethoven (0);
  Bowen with Vocalion, Aeolian or Chapple (1, not it); “Aeolian Orchestra”
  (42, none of it); Chapple with Beethoven or Vocalion (0); Vocalion in the
  King's College London collection (43 sides, none of this set); Beethoven
  concerto titles in the 78 rpm collections (10, none of this concerto before
  1926); Beethoven concerto titles dated 1900 to 1925 (2, neither this
  concerto); the record numbers A-0237 to A-0240 (228, all unrelated)

**Internet Archive, full-text search** of scanned books and magazines, about
20 searches (catalogue numbers with singers' names, “Love Duet” with Austral
and Davies and D.736, York Bowen with Vocalion and Chapple, Szreter with
Parlophone). These found the printed evidence cited above.

**Read in full or in part:** the 27 Johannesson discography files; Bauer's
catalogue; *The Gramophone* for October 1923, September and October 1925,
January and November 1926, May 1927; the HMV General Catalogue 1924; the
Vocalion catalogue of 1925; *The American Record Guide*, December 1944; the
notes of the 2004 Bayreuth set; the booklet scans of the two Hamburg Schmedes
volumes; the track lists of the eleven discs of the Bayreuth set that are at
the Archive; page 8 of the Kraków newspaper of September 5, 1908.

The full log of searches, with addresses and counts, is `searchlog.txt` in
the scratch folder.

## Refused or out of reach

- **Discography of American Historical Recordings** (`adp.library.ucsb.edu`):
  answered 403, “Request blocked,” from its own content network on two tries
  (the proxy itself let the connection through). I did not try again or look
  for another way in.
- **Internet Archive, search inside one lending-only book**
  (`catalogueofvocal0000gram`): answered 403, “Item not available.” I stopped
  and used only the snippets that the Archive's public full-text search
  shows.
- The proxy never answered 403 or 407 for any host. The permission system
  refused nothing.

## Noticed while finishing

At 07:58 UTC on October 4, 2026, while I was checking this report, a copy of
`tristan-love-duet-sedlmair-schmedes-1903.mp3` appeared in `site/records/`
and an entry for it in `content/records.mjs`. Another session did that. I
did not, and I changed nothing in `site/` or `content/`. The copy is
identical to the prepared file (same checksum).

## Files

Prepared, in `review/class/records/`:

| File | Bytes | Length | md5 |
|---|---|---|---|
| `tristan-love-duet-kraus-denera-1915.mp3` | 5,719,607 | 7:57 | 64e76ddcc7d39b930a806c08354f0ff4 |
| `tristan-love-duet-sedlmair-schmedes-1903.mp3` | 3,061,073 | 4:15 | 3d3fe5aeb651746affe54b79dbd46e1c |

Downloads, in `review/class/records/src/` (FLAC, 44,100 Hz, 16 bit). The
first seven were checked against the checksums the Internet Archive
publishes. The last was drawn from inside an archive file, for which the
Archive publishes none; its size matches the Archive's listing.

| File | Bytes | Length | md5 | From |
|---|---|---|---|---|
| `kraus-denera-gram-044278-mx817m_ia-bayreuth-cd04-track72.flac` | 6,209,157 | 4:10 | 3f5ad15d090be88ee6d809f6ff56afff | `100-jahre-bayreuth-auf-schallplatte-CD04`, track 72. **Used.** |
| `kraus-denera-gram-044277-mx818m_ia-bayreuth-cd04-track73.flac` | 5,735,299 | 3:50 | ab9f6faa7b13517343087f2efd841a15 | the same item, track 73. **Used.** |
| `sedlmair-schmedes-gt-044039_ia-78opera_finished.flac` | 14,927,197 | 4:15 | 70785dbc86f40e0d41de4f2bfb99c55a | `78_osinkhernieder_058_04`, the finished transfer. **Used.** |
| `sedlmair-schmedes-gt-044039_ia-78opera_raw.flac` | 15,411,751 | 4:29 | 46657df874e8eeffff5f558a160087be | the same item, the raw capture with a spoken announcement. Not used. |
| `plaichinger-urlus-pathe-15727_ia-78opera_finished.flac` | 11,403,875 | 3:05 | dd397684ab1c21265c74f72d21e8239c | `78_osinkhernieder_335_14`, the finished transfer. Candidate B. |
| `plaichinger-urlus-pathe-15727_ia-78opera_raw.flac` | 11,816,998 | 3:20 | ede6a2264aa43df679f8eebc1a00814b | the same item, the raw capture. Not used. |
| `kraus-denera-gram-044278_ia-preiser-co361-track06.flac` | 9,455,822 | 4:13 | 055a202cb723f689c566c3c6a3af9ce8 | `03-ernst-kraus-meistersinger-1908`, track 06. Comparison only. |
| `bland-schmedes-gram-2-44412-2-44411_ia-schmedes-2-cd2-track03.flac` | 9,977,443 | 5:42 | 38144b97f29627725c462b5953b63362 | `schmedes-2`, inside `Vol.2.rar`, second disc, track 3. Candidate D. |
