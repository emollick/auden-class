# The class page: what is being made, and the rules for it

Read `remake/BRIEF.md` first: the owner's words, his three rules, the house
style and the rules for every agent all hold here. This file adds what is
particular to one new page of the site, "The class" (`#/class`).

## What he asked for

The remade site went live on 4 October 2026: thirty-five pieces (one for each
major work on Auden's list), a front page that sorts them, a shelf of the
books, a reader, an about page. He looked at it and wrote:

> "beautiful, but i do think we need an intro page about the class that offers this material as guide to what it would have been like to think through the class. i still want you to keep the works and shelf, but there is no class that tries to recreate the experience of being there (including the assignments that survive, though you do not have to do brutal tests or memorizations, just let people explore what they would have been expected to do)"

## What follows from his words

1. The works and the shelf stay as they are. What is added is the class: one
   page that goes through the afternoons the students recorded and uses the
   pieces already on the site as what the class was reading.
2. "The experience of being there": the page is made of **scenes**. A scene
   is one recorded afternoon (or one recorded thing: the interview in
   September, the examination, the Friday evenings). It says what Auden said,
   shows what he put on the blackboard, names what he played on the
   phonograph, and gives what he asked for by the next meeting.
3. "The assignments that survive": only what a witness recorded. The questions
   he set for the next meeting, the papers, the cantos to be written out. No
   assignment is invented and none is rounded out.
4. "Just let people explore": **nothing on this page is asked of the reader.**
   No test, no quiz, no box to type in, no score, no memorizing, no "now you
   try". Where the class was set a question, the page gives the question, opens
   the passages on the site that it is about, and gives, folded shut, what
   Auden answered when the class met again, what two of the students wrote,
   and what he wrote himself later.
5. The first version of this site was a fifteen-week course site and he threw
   it out ("too much a class website", "no joy or interpretation, just
   assignments", "a brutal slog through the most boring webpages"; "the 14
   weeks is the most uninteresting way though"). So: no weeks, no syllabus
   table, no schedule. The order is the order in which the chief witness tells
   the afternoons. It must be a pleasure to read and to look at.
6. His three rules hold. Rule one: no scenery and no games. No mock blackboard
   in green with chalk dust, no sound effects, no cartoon classroom. What Auden
   drew is redrawn in the site's own look (paper, ink, Garamond, hairlines, the
   site's colors), as a figure in a finely made book would be. Rule two: a
   figure or a remark comes with its reason where one is on record. Rule three:
   **nothing is made up.** Every fact has its witness and page. Where the
   record is silent the page says so in a few words and moves on.

## The witnesses, and what each is good for

- **Donald Pearce**, "Fortunate Fall: W. H. Auden at Michigan", in *W. H.
  Auden: The Far Interior*, ed. Alan Bold (1985), pp. 129–57. A student in the
  class. The first few meetings are almost a blank in his notes; after those he
  wrote down what he could remember within an hour or so of a lecture, in a
  classroom near by (p. 134). Nearly all that is known of what Auden said in
  class comes from him. His words for
  Auden are his own reconstruction: the page reports them in its own words and
  says they are Pearce's. Page numbers follow the number at the **foot** of the
  printed page (text standing before the number n is on page n).
  The kept scan, `.cache/research/auden/pearce.txt`, holds the end of p. 131
  to p. 136 and p. 146 to p. 157. **Pages 129–130 and 137–145 are not in it**:
  they were read by a researcher in search snippets
  (`remake/research/E_pd_pearce.md`, whose section 0 gives the method).
  `python3 review/class/tools/pearce-page.py --map` prints the page breaks of
  the scan; given a file of lines `label<TAB>phrase` it prints the page each
  phrase stands on, without printing the scan.
  `remake/research/B_pedagogy.md` gives Pearce's pages one too low in several
  places; `A_michigan_course.md` and `E_pd_pearce.md` are right.
- **Charles H. Miller**, *Auden: An American Friendship* (1983): shared a
  house with Auden that year; the first class, the at-homes, the list.
- **Robert L. Chapman**, "Auden in Ann Arbor", *Michigan Quarterly Review* 17:4
  (Fall 1978), pp. 507–20: in the class; in 1978 he printed what his classmates
  remembered, from both of Auden's courses that year.
- **Kenneth Millar** (Ross Macdonald), through Nolan, *Ross Macdonald* (1999),
  pp. 53–54, and Kreyling, *The Novels of Ross Macdonald* (2005), pp. 39–40.
- **Angelyn Stevens**, an auditor, through Farnan, *Auden in Love* (1984), p. 73.
- **The reading list** itself, in the picture published by Alan Jacobs.
- **Auden's own prose**, for what he wrote about the same works: the pieces on
  this site already carry it with pages (`site/data/pieces/<id>.json`, keys
  `view` and `auden`), and `remake/research/C_auden_on_works.md` has more.

All of this is gathered, with pages, in `remake/research/A_michigan_course.md`
(the course), `B_pedagogy.md` (how he taught), `E_pd_pearce.md` (Pearce
pp. 129–31 and 137–46) and `C_auden_on_works.md` (Part Four: the idea of the
course). The about page (`content/about.mjs`) already sets out the record as a
table and sets the five accounts of the examination side by side. The class
page must not contradict it.

## How the page is written

- The house style of `remake/BRIEF.md`, with one change: **the past tense for
  what happened in 1941**, the present for what a source says now ("Pearce
  says", "Chapman remembered" are both in use; keep each natural).
- Every paragraph can be traced: the scene's `src` line names witness and
  pages, and a fact from another witness carries its own citation in the
  sentence.
- Pearce, Miller, Chapman and the rest are in copyright, and so is Auden's
  prose. Say it in the site's own words. A quotation is a line at most, there
  are few of them, and each is word for word. The blackboards are the
  exception that the page is for: they are given as the witness copied them.
- A sentence of the page that shares a run of five or more words with a
  sentence of its source is too close and gets loosened.
- No sentence tells the reader what to feel, sums up a scene with a moral, or
  explains what the page is doing where the page could simply do it.

## Where things are

- `content/class.mjs`: everything the page says, and the data of its figures.
- `build/class.mjs`: checks it, cuts the passages from the built pieces,
  counts the list and the cantos, writes `site/data/class.json`. It runs at
  the end of `node build/pieces.mjs`.
- `site/js/class.js` and `site/js/class-figures.js`: the page and its figures.
  Styles are in `site/css/atlas.css`, under the heading "The class".
- `review/class/`: reports, tools, screenshots. Nothing here is published.

## Rules for agents on this page

The rules for every agent in `remake/BRIEF.md` hold, with these changes: your
launch prompt names the files you may write, and you write no others. Do not
type out sentences of Pearce, Miller, Chapman or Auden in anything you write;
point at them by page and say what they say in your own words. A few words in
quotation marks are allowed where the wording itself is the point. Save early
and write files in pieces of under about 120 lines.

## For the critics of this page

Read also `remake/CRITIC-SITE.md` (the two jobs: by word, by eye) and section
2 of `remake/CRITIC.md` (the faults of writing). Your launch prompt says which
job is yours and which file you hand in.

```
node build/pieces.mjs                 # builds the site and this page; must print no PROBLEMS
node build/tools/prose.mjs            # writes review/remake/prose/class.md: every word of the page, in reading order, each with its place
node review/class/tools/shoot-class.mjs --out review/class/shots            # every scene at 1280 and 390 px
node review/class/tools/shoot-class.mjs --out review/class/shots --open     # the same with every fold open
node review/class/tools/shoot-class.mjs --out review/class/shots --only othello --pick Iago   # one name followed across the six schemes
node review/class/tools/shoot-class.mjs --out review/class/shots --only first --bar 4         # one bar of the reading list pressed
node review/class/tools/shoot-class.mjs --out review/class/shots-home --route home            # the front page, with the way in to the class
bash review/class/tools/slices.sh review/class/shots/othello-390.png 2200                    # cuts a tall picture into pieces that can be read
```

The phone pictures are tall: cut them with `slices.sh` and read the pieces,
or a picture is shrunk until nothing in it can be judged. The words set in
the page's scripts (labels such as "Follow", the line under the bars) are in
`review/remake/prose/site.md` under `site/js/class.js` and
`site/js/class-figures.js`. The words of the way in from the front page are
in `content/class.mjs` under `home`, and class.md gives them after the head
of the page. Run `slices.sh` with `bash`, not `sh`.

The lines of a blackboard (`rows[].board`, `schemes`, `lines`, `pairs`) and
everything inside quotation marks are a witness's words: they are not to be
changed, only reported if they look wrong. The cards are cut from the pieces
and were read by the pieces' own critics.

