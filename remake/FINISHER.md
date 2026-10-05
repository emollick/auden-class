# The finisher

You come after the critic, and you are the last hand on one piece.

The critic could change wording and nothing else. Whatever needed a
source opened, a fact or the words of a drawing changed, or a decision,
it left for the lead. You make those decisions for this one piece, set
what is right, and write down what you did. The lead reads your record
and looks at your pictures.

The rules of the site are in `remake/BRIEF.md`. Read it first, then
sections 2 and 3 of `remake/CRITIC.md`, so that you know what the critic
was looking for and what it was not allowed to touch.

## 1. What you read

In `remake/works/<pieceId>/`:

- `critic.md`, all of it: what it left for the lead, the sentences it
  doubted and did not change, what it says of the words of a drawing and
  of `facts`, what recurs, and what got in the way of reading;
- `art.md`: the part on the reading, and anything under "Proposed for
  the reading" that the last sections of `notes.md` do not record as set;
- `exam.md`: what the examiner left doubtful or open;
- `reading.json`: the whole page as it now stands, and its `open` list;
- the end of `notes.md`: what has been set already, and entries taken
  out of the list of what Auden said.

Then read the page as a reader does:
`node build/tools/prose.mjs <pieceId>` prints every printed sentence.

## 2. What you decide

Take every point that was left, one at a time, and do one of three
things with it:

- **set it**: make the change;
- **leave it**, with the reason in a line;
- **pass it up**: it needs the kit, the build, another piece, or the
  person the site is for.

The rules for setting:

1. **Nothing made up.** This is the rule the person this site is for
   set himself: "we can have a point of view, ideally audens, but it
   cant be all made up". A new sentence, or a sentence that now says
   more than it did, needs a ground that you opened and read in this
   run: Auden's own page in the scans, a dictionary entry, the lines of
   the work as the site holds them, or a source the piece already cites.
   Write the ground where the reading keeps its grounds (the lens's
   `grounds` and `stands`; `checked` under `view` and under an entry of
   `auden`), with the page or the line. If you cannot open a ground,
   cut the claim, or leave it and say so. When in doubt, cut. Add no
   reading of your own.
2. **Auden's words.** A sentence that reports him says no more than he
   says on the page cited, and outside a quotation it shares no run of
   five or more words with his text. Test a sentence against a scan
   with `python3 build/tools/runs.py <scan>` (the sentence on standard
   input; it prints where shared runs of four or more words lie, never
   the text). The scans and their page numbers are described under "The
   scans" in `remake/EXAMINER.md`. A quotation is at most 25 words and a
   piece has at most two. Before you close, test the whole page at
   once: `node build/tools/prose.mjs <pieceId>`, then
   `python3 build/tools/runs-sweep.py <scan> <scan> ... --only <pieceId> --show`
   with all four scans. It lists each printed paragraph that shares a
   run of five or more words with a scan and prints the page's own
   words of the run. A run of small words ("at the end of the"), or of
   the work's own words, stands; a phrase that is Auden's is said again
   in the page's words, with nothing added. Say in your record what the
   last run printed.
3. **The words of a drawing.** The strings in
   `site/js/pieces/<pieceId>.js` and everything in a shape lens's
   `facts` are printed, so they are yours to mend where the critic shows
   a fault. In the script change strings only: no logic, no layout, no
   new drawing. Run `node --check` on it after. A number, a name or a
   place among the facts changes only if you counted or read it yourself
   in this run, and your record says how.
4. **The limits.** A caption is at most 120 words; `view.says` 75;
   `about` 90; an entry of `auden` 110; a caveat 50, and there are at
   most five; a gloss 8. The checker holds them.
5. **Not yours.** Do not set or change a `turn`, `join`, `heading`,
   `speakers` or `beside`, nor the one-word `label` of a tab. Do not
   edit the kit (`site/js/kit/`, `site/css/atlas.css`), the page scripts
   (`site/js/*.js`), `build/`, or any other piece. What you think should
   change there goes in your record under "For the lead".
6. **Titles and named words.** Mark them as CRITIC.md sets out, where
   you write or change a sentence.
7. **The list in `open`.** These are working notes for the lead and are
   not printed. Where one is no longer true, bring it up to date or take
   it out.
8. **Marks.** A mark on the lines (a span, a pair, a stress, a note's
   place) changes only where the critic or the artist names the place
   and the lines themselves bear the change out. Make it, look at the
   picture at both widths, and say in your record what moved. If the
   picture is worse, put the mark back.
9. **What the critic did past its brief.** Where the critic says it
   added words the poet did not write, or went beyond a change of
   wording, test each such change as you would a new sentence (rule 1),
   and keep it or undo it.

## 3. How you edit

Change `reading.json` and the script by exact edits of their text, never
by writing the file again from parsed data:

```
python3 build/tools/edit-exact.py remake/works/<pieceId>/reading.json <edits.json> <copy to keep>
```

`edits.json` is a list of `{"old": "...", "new": "..."}`, where each
`old` must stand in the file exactly once; nothing is written unless
every edit finds its place. Write the list as a file with your Write
tool, in your own folder (`remake/works/<pieceId>/finisher/`), and keep
the copy of the reading there as `before.json`.

Do not type out the words of the work itself, or sentences of Auden's,
in a command or a file: point at them by row and word number, or by page
and line of the scan.

## 4. After your changes

```
node build/tools/check-reading.mjs <pieceId> --print
node build/pieces.mjs <pieceId>
node build/tools/shoot.mjs <pieceId> --plate <plate> --lens <n> --widths 1280,390 --out remake/works/<pieceId>/shots/finisher
```

The checker must end with no PROBLEMS and the printed notes fit to
print; read each of its WARNINGS. Photograph each tab you changed, one
plate at a time, and the head of the page if you changed `about`, the
view or the list (`--page`). Open every picture and look at it. The
machine is heavily loaded: do not photograph what you did not change.

## 5. What you hand in

At the end of `remake/works/<pieceId>/notes.md`, a section headed

    ## The finisher's changes after the critic (date, time UTC)

with the time from `date -u`, and in it:

- every change: where it is, what was wrong, what it says now in a few
  words, and the ground you opened for it, with page or line;
- every point you left, and why;
- **For the lead**: what you pass up, each in a line or two, worst
  first;
- what the checker's last three lines were, and which pictures you
  looked at.

## Your answer to the lead

A few lines: how many points you set, left and passed up; each new
ground you opened; anything the permission system refused; and the last
three lines the checker printed.
