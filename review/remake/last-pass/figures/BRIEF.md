# One wording for each figure of speech, across the site

You are proposing exact changes of wording. You change no reading and no
file of the site. The lead reads your proposals and applies them.

## The site, in a paragraph

"Fate and the Individual" opens thirty-five works from W. H. Auden's 1941
reading list at a few passages each. A passage has tabs; a Figure tab
underlines the parts of one figure of speech in the lines, names the figure
and says it in plain words. The site's owner asked to be made to understand
tropes, and he set three rules: no games or scenery; every observation gives
its reason; nothing made up (what a page says stands on the lines, on a
source that was opened, or on Auden). Each piece was written by one agent
and checked by others, a piece at a time. Nobody has yet read the Figure
tabs side by side.

## The fault

There are 82 Figure tabs. Seventeen figures stand on more than one tab (69
tabs), and almost every tab says its figure in different words: antithesis
thirteen times in twelve wordings, anaphora ten times in ten. The words are
shuffled synonyms (opposed, contrary, contrasting, contrasted; side by side,
against each other, close against each other). A reader who goes from page
to page cannot tell whether a difference is meant. One figure should be said
one way wherever it stands, as a book by one hand would say it.

`review/remake/last-pass/figures/TABS.md` lists every Figure tab: where it
is in its reading, the name as printed, the plain-words line (`plain`), and
the line at the foot of the page that says what the tab stands on
(`stands`). It was made by script from the readings at about 18:50 UTC on
3 October 2026.

## What to hand in

All in `review/remake/last-pass/figures/`:

1. `REPORT.md`
   - For each of the 17 figures: the one wording you propose, one or two
     sentences of why, and what each named source says of the figure **in
     your own words** with its address and the date you opened it.
   - A table: tab, wording now, wording proposed, tail kept (see below).
   - "For the lead": anything you could not settle, worst first, each with
     what you would do.
   - What the permission system refused you, if anything.
2. `<piece>.json` for every piece you propose to change: a list of
   `{"old": "...", "new": "..."}`. Each `old` is raw text of
   `remake/works/<piece>/reading.json` that occurs **exactly once** in that
   file (take in the key, as in `"plain": "..."`, and more of the line if it
   is needed to make it single). The readings use the typographic apostrophe
   and quotation marks: copy them from the file, do not retype them.
3. `check_lists.py`: proves, for every list, that each `old` occurs exactly
   once, that the file still parses as JSON after all the edits of its list,
   and that nothing but the fields you meant has changed. Run it and put its
   last lines in the report.

## How to choose a wording

1. **The approved page leads.** The owner approved the Tempest page as the
   pattern for the rest. Its first passage has a Figure tab (chiasmus).
   Where the Tempest has the figure, its wording stands and the other tabs
   follow it. Do not propose any change to `remake/works/tempest/`.
2. Otherwise prefer a wording that is already on the site to a new one, and
   the plainest of those: words a reader of fourteen could follow. No
   handbook words ("juxtaposition", "successive", "syntactic"), no stock
   phrases, nothing clever. Begin with a small letter and end without a full
   stop, as the tabs do now.
3. **True to the sources.** The `stands` line of each tab names where its
   definition comes from (most often *Silva Rhetoricae*, rhetoric.byu.edu;
   sometimes *A New English Dictionary*, the Century Dictionary,
   Merriam-Webster, Littré, the Online Etymology Dictionary). Open the entry
   and see that your wording says no more than it does. If two tabs of one
   figure stand on sources that define it differently, say so in the report
   and choose the wording that is true by both.
4. **Not the source's own sentence.** *Silva Rhetoricae* and the modern
   dictionaries are in copyright. Your wording must not share a run of five
   or more words with a source's definition. Say in the report that you
   compared them.
5. **True of every passage it stands on.** Each tab marks parts of the
   lines (`parts`, `spans`, `ties` in the lens, with rows and word numbers;
   the lines are in `site/data/texts/<book>/<part>.json` and the built piece
   is `site/data/pieces/<piece>.json`). A wording that says "line after
   line" is false of prose; one that says "the same word" is false where
   three words come back. Read what is marked on every tab of the figure
   before you fix its wording.
6. **The name's sense.** Some tabs open with what the name means ("a
   crossing:", "a doubling back:", "a turning away:", "the long way
   round:"). For one figure, all its tabs open that way or none does. All,
   if a source the tabs already name gives that sense; then say where. The
   Tempest's chiasmus has it, so chiasmus keeps it everywhere.
7. **Tails.** Many tabs end by saying what this passage does ("here, three
   times, a missing motive and the deed"). A tail is the piece's own and
   stays in its own words. Join every tail the same way: the definition, a
   semicolon, then "here ...". If a tab has no tail, do not write one.
8. **Families.** Chiasmus and antimetabole; metaphor, extended metaphor and
   simile; anaphora, epistrophe and anadiplosis: the wordings of a family
   should fit together (the same nouns for the same things), so that a
   reader can see how one figure differs from its neighbour. The thirteen
   figures that stand on one tab are in the list for this. Propose a change
   to one of them only where it jars with its family or breaks the form in
   2 above (one of them is two sentences long).
9. **Captions.** A caption sometimes says the definition again in its own
   sentence. Leave captions alone. If a caption contradicts the wording you
   propose, put it under "For the lead".
10. **The front page.** `remake/front.json` pins a card to a tab and can
    override its small words (`say.plain`). Six cards show a figure
    (henry-iv-2, pascal, adams, orpheus, don-giovanni, fidelio). Say in the
    report what each card's `plain` would be after your changes, and which
    overrides the lead must change or can drop. Do not edit that file.

## Rules of the house

- Do not type out lines of the works, or sentences of a handbook or of
  Auden, in anything you write: the report, the lists, commands, your
  hand-back. Point at rows and words by number. A single word named as a
  word, and the site's own captions and definitions, may be written out.
  Have scripts print counts, labels and positions, not passages.
- Work only in `review/remake/last-pass/figures/`. Edit nothing else:
  no reading, no file under `site/`, `build/`, `remake/` or `content/`.
- Do not run `node build/pieces.mjs` or any other build. Reading files and
  running your own scripts is all you need. `python3
  build/tools/edit-exact.py` is what the lead will apply your lists with;
  you may read it, not run it on a reading.
- Begin every shell command with `cd /home/user/auden-course` and stay
  there. `sleep` is blocked. Take any time you write from `date -u`.
- Install nothing. Do not write under `/mnt/project-files`.
- Do not call any `mcp__hearthbot__` tool. You do not speak to the owner.
- If the permission system refuses you something, do not try another way
  and do not ask the lead to do it for you. Say what was refused in the
  report and go on.
- If a source cannot be opened, say so; do not define the figure from
  memory and call it the source's.

## Hand-back

When you are done, reply with: the 17 wordings, the count of edits and of
pieces, the last lines of `check_lists.py`, and the "For the lead" list.
Short. In your own words.
