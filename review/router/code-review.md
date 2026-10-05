# Code review of the router change

5 October 2026. Reviewed by reading, in two passes. The first read the change as it stood at 08:14. The change went
on while that was being written up: the scripts were saved again at 08:18 and 08:34, the tool four times from 08:27.
The second pass read all of it again. Line numbers are of the files as last saved: main.js and places.js at 08:34,
piece.js, shelf.js, home.js and class.js at 08:18, tools/faults.mjs at 08:41.
Read: site/js/main.js (as it stands and as it is live), places.js, piece.js, shelf.js, home.js, class.js, about.js,
kit/plate.js, kit/draw.js, kit/player.js, class-figures.js, the .notice rules in css/atlas.css, build/preview.mjs,
review/router/tools/faults.mjs, review/phone/tools/back.mjs, and the saved outputs under review/router.
No browser, no server and no tool under review/ or build/ was run. Short Node snippets read files or modelled the
order of promise jobs; they wrote nothing. `node --check` passes on the nine scripts.

## In short

For a navigation that passes through go(), the three reported faults are mended, and I found no way back to any of
them. The first pass had ten findings. The forms saved since mend six of them and most of a seventh; each mend is
read through below and found sound. What stands: one check that still proves nothing, and runs that do not yet
cover the files as they are (1); a request that never answers (2); one new thing in how a piece is found (3); one
failure made worse on purpose (4); and notes.

## Findings that stand, by severity

### 1. Medium. The checks and the saved runs (review/router/tools/faults.mjs)
- "A slow piece, then Back" (153-157) is still `ok` on the live scripts with the tool as it stands (before-2.txt,
  line 10), as it was in before.txt. It is no evidence of the mend, and the tool's note on it (51-53) is not borne
  out: the page is now asked something every fifth of a second and the held piece still does not come, though by
  reading the live router would show it. The likeliest cause: this browser gives a pending request up when the
  history moves. Let the tool's server say whether the browser closed the held request before its answer went out.
  If so, no check of this kind can race here, and the note should say that; and two things are then worth a check
  each. A script given up in that way is kept as failed while the page is open (RECORD.md), so "the shelf, its
  script slow; Back; the shelf again" may say "Not loaded" until the reload. And a request given up fails at about
  the moment of the step back: see that no notice is put up for an instant (main.js 131-141) before the page gone
  back to is drawn.
- The run on the live scripts stops at line 311 with a time-out: the live notice has no button to focus. Its last
  six checks and its count are missing. Guard that block with `if (s.again)`, as at 263.
- No run of the tool as saved at 08:41 on the present scripts is kept. out/faults-3.txt (08:40, the tool of 08:35):
  86 checks, 1 failed, and that one was the tool's own (a request dropped once, which the browser asked for again
  by itself; line 327 now says so).
- back.mjs, keys.mjs, walk-site.mjs, refs.mjs and wide-all.mjs last ran on the first form (the battery ended at
  08:01). Changed since: the two click handlers back.mjs presses (home.js 154-163, class.js 255-281), stepTo()
  (places.js 101), how every piece is loaded (piece.js 68-75), where the focus goes (main.js 118-120). Run the
  battery again on the scripts as they stand before they go live.
- "A slow piece that is not there, then a second piece" (134) is no longer a race: the list answers at once, and
  "Not found" stands before the second page is asked for. To race a late "Not found", hold data/pieces/index.json
  and ask for the shelf second, which needs no list.
- The packed page (`--page local.html`) has no saved run in any form, and it must now carry the list of the pieces
  (preview.mjs 129-130). By reading it is sound.

### 2. Low. A request that never answers (piece.js 27; not new)
getJSON sets no time limit. A stalled connection, the commonest trouble on a phone, neither fails nor comes: the page
before stands, its plates already taken down (main.js 109), under the new address, with no notice and no retry, and
`settling` stays true. A later visit to the same file waits on the same promise. The later forms help a little: the
standing page's own links now draw it again (`left`). They add one case: a press of "Try again" that stalls leaves
"Trying again" standing for good (main.js 79-81). Change: a time limit of some 20 s on the request, its failure
marked `data`, so that it ends in "Not loaded".

### 3. Low. The list alone settles whether a piece is there (piece.js 68-75; new in the second form)
- The list is kept for as long as the page is open. Should a piece be added, it is "Not found" in every tab opened
  before, with no retry, though its file would come.
- A listed piece whose file comes as JSON that is no piece is "Not found" (75), though the list has it.
- The first piece of a visit now waits for a second file, of 18 KB.
Change: show the piece when its own file comes and is a piece; ask the list only when it does not, to tell "not on
the list" (not found) from the rest (not loaded). The answers stay the same wherever the file does not come. (The
check "the list of the pieces dropped", 283, would then need the piece's file to fail as well.)

### 4. Low. One failure is reported worse than before, on purpose (piece.js 77)
A piece whose own script cannot be had at all (missing from a deploy, or a browser that cannot read it) had a page
with the kit's drawings; now it has "Not loaded" and a button that reloads to the same notice. For a passing failure
the new way is right. Change, if wanted: after a second failure draw the page with the kit's drawings and say so.
No other failure is worse: a book that did not load had words of its own, no retry and a stale title.

### 5. Note. Tabs open across the deploy
The router and the page scripts change shape together. A tab opened before the deploy keeps the old main.js and
piece.js; a page script it has not yet loaded comes new, and the old router answers "Not found" (shelf.js asks
piece.js for `absent`; about.js, class.js and home.js call main.show on the element). A reload mends it. Nothing to
change.

### 6. Small things
- The reader's own notice, "no such book or part" (shelf.js 129-131), is shown as a page, so it is not told as the
  router's two notices now are. An alert role on its paragraph would match them.
- versions() (shelf.js 138) still swallows the failure of another version's contents: the page stands without its
  row of versions and says nothing. Not new.
- #// shows the front page (clean() strips one slash at each end, main.js 60). Harmless.
- The one-piece page (data-only) is not `frame`, so a failure there offers a reload inside the host's wrapper, and
  any other address there now says "Not loaded" (no list is asked, piece.js 70). All its data and scripts are in
  the page, so only a fault in the scripts could bring either up.

## Findings of the first pass, mended since (each mend read through)

- A step inside the standing page while another page is in flight (was 1, Medium). The script is handed `left`
  (main.js 108, 114); the two handlers return on it (home.js 156, class.js 257), the link is followed as a link,
  and the router drops the page in flight. stepTo() files no place while a page is being drawn (places.js 101), so
  a link followed in a frame no longer files the standing page's place under the step in flight. Walked: a card,
  then "All the works"; a card, then a scene, and then the way back to the contents; the same in a frame; Back
  within the page (main.js 105 leaves `left` alone). A page with `left` set stands only while another is coming.
- The notice for a reader who cannot see it (was 3, Medium). It is an alert when put up (138). After a failed try
  from the keyboard the focus goes to the new button, described by the new words (136-140). A try under way says
  "Trying again", is marked aria-disabled, and takes no second press (79-81; atlas.css 99). When a try brings the
  page the focus goes to <main> (118-120). A reader whose press did not focus the button is told by the alert.
- "Try again" tries the page asked for last, `asked` (was 4; main.js 30, 83, 100).
- The page that moves within itself is named by the route that matched (was 5; main.js 42-48, 104), and "Not
  found" marks no entry of the menu (130, 144).
- The wrong notice (was 6). A 404 by itself no longer makes a page absent (piece.js 27): the piece's script asks
  the list, a book's contents take 404 as "no such book" (shelf.js 127), anything else is "Not loaded". An address
  over 120 letters has no route (main.js 57, 101); the longest real one in the data has 40.
- The checks (was 2, in most of its parts). The tool waits on the server's record that a held answer went out
  (58), compares page, title, mark and foot with the page opened fresh, and the height (100, 128), counts the
  requests a try makes (59, 264-267, 322), and has checks for each finding above, for two slow pages of which the
  older comes first, for a link followed before a try returns, and for 404s of files the address does not name.
  All of these fail on the live scripts (before-2.txt) but for those the stopped run did not reach.
- #/Tempest (was among 10) is "Not found" by the list, whatever the host does with the case of a name.

## Checked and found sound

1. Fault 1. A dropped navigation changes nothing: show() does nothing for it (main.js 116), its failure is only
   logged (124), and title, foot, mark, `showing`, `leave`, scroll and arrived() all come after the test at 125.
   Its out() runs inside try/catch and touches only its own plates, MediaQueryList and timers. Only put() (111)
   writes the page or the title. Outside it a script reaches the document only through a plate's resize and
   fonts listeners, which destroy() removes.
2. arrived() is called exactly once on each path that is still current (105, 147) and never on the dropped one (125).
3. No page script has an `await` after main.show, nor between mounting a plate and main.show (piece.js 77, 113, 190;
   home.js 85, 165; class.js 212, 283; shelf.js 224, 243; about.js 10, 25). Between show() and the rest of go() only
   promise jobs run. Modelled in Node: the plates' font callbacks run after show() and before the rest of go(), as
   before the change, and an older page's callbacks find it out of the document.
4. Fault 2. null from clean() for a bad escape; no route gives "Not found" at once, with the title, the foot, the
   top of the page and no mark. Read through: #, #/, a trailing slash, empty segments, %2F, a query, a second #,
   :block and tab numbers out of range, index as a piece and as a part, __proto__ and constructor as a piece, a
   book and a part (packed too), class/a/b, and the frame's handler with #/% (go(null) is "Not found").
5. Fault 3. Dropped, 4xx, 5xx and spoiled data are "Not loaded" with a retry in place; a piece not on the list, a
   book the server does not have and a part its book does not list are "Not found" or the reader's own notice; a
   script that did not come offers a reload. The retry in place makes no new step of the history, opens the page
   at its top or its own place, and is dropped like any navigation if the reader goes on. Nothing retries by itself.
6. getJSON's shared error: the cache's own catch is the first reaction on the promise, so the entry is gone before
   any caller runs; `data` and `status` are set once; renderPiece's early request cannot go unhandled (69).
7. Regressions: none found. Against the live scripts the title strings are the same for every kind of page and
   for "no such book". Foot, mark, `showing`, `leave` and `leave.after`, the frame's scroll to .top, the pausing of
   audio and SITE.only are as before on success. All 35 piece files are on the list, which is the live one; all
   1,100 part files are listed in their books; shelf.json differs from the live file only by read.failed.
8. The bundler. Its text rules, applied in memory to all 48 modules as they stand: no import or export form it
   does not know, every packed module parses, every imported name is given. The packed page is given the list.
