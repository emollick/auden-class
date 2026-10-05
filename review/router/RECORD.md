# How the site loads its pages: three faults mended (5 October 2026)

At 06:35 UTC the owner put a reader's review of the code into the project chat:
three "definite implementation errors" in the router, `site/js/main.js`. A
minute later came the word that the fixes should go live as soon as they
were made and tested.
This is the record of what was found, what was changed, what two critics
found in the change, and how it was tried.

## What was reported, and what the live site did

`tools/faults.mjs` serves the site and holds back, spoils or drops the
answers to chosen requests, then looks at what the reader is shown. Run on
the scripts as they were live, 40 of its first 49 checks failed
(`before-first.txt`). The tool as it stands now makes 87 checks. On the
live scripts it can make 75 of them, and 63 fail (`before.txt`); the other
twelve press "Try again" while a page still fails, and the live notice has
no button. All three reports were true.

1. **A slower page took the place of the page chosen after it.** The reader
   asks for The Tempest and at once for Hamlet; The Tempest's data comes
   late. The page showed The Tempest, with The Tempest's title, under
   Hamlet's address. Where the slow page failed in the end, "Not found"
   stood over the page chosen after it. The same with a slow script, with a
   slow part of a book, and with a step Back: the piece came up over the
   front page.
2. **An address that names no page gave a blank or the page before.**
   `#/%` and other addresses that cannot be decoded threw an error no one
   caught. `#/not/a/real-page` matched no route and drew nothing. Opened
   fresh, each gave an empty page; come to from a piece, each left the
   piece standing, with its title, under the new address.
3. **A page that failed to load was said not to exist.** A dropped
   connection, a 503 from the server and a spoiled file each gave "There is
   no page at this address." The reader of the books had words of its own
   for a book that failed ("The book could not be loaded. Try again in a
   moment.") and nothing to try again with.

## What was changed

- **Who puts a page before the reader.** Each page's script used to put
  its page into the document and set the title itself. Now it is handed a
  small object in place of the page and calls `main.show(page, title)`
  where it called `main.replaceChildren(page)`; `show` does both things at
  once, and only if the page is still the one asked for. `go()` checks
  again before it does the rest (the foot, the mark in the menu, the
  reader's place) and before it shows either notice. Scripts changed:
  `main.js`, `piece.js`, `home.js`, `class.js`, `shelf.js`, `about.js`.
- **A first form of this was wrong, and an old test caught it.** The first
  form had the router put the page into the document after the script
  returned. A plate starts when the faces are in and only if it stands in
  the document (`kit/plate.js`, at its end), and once the faces are loaded
  that moment comes before the router's turn. So on every page after the
  first the plates did not start. `review/phone/tools/back.mjs` failed 3
  of its 21 checks; `faults.mjs` had passed. The page now goes into the
  document at the moment the script shows it, as it always did, and
  `faults.mjs` has a check for it (a piece reached by a link stands as it
  does when opened at its address).
- **Addresses.** `clean()` gives null for an address that cannot be
  decoded. An address with no route shows "Not found" at once, under the
  title "Not found · Fate and the Individual", with no entry of the menu
  marked. An address of more than 120 letters has no route and is never
  sent to the server as the name of a file (the longest real address has
  40; the live host answers a name of 9,000 letters with 414).
- **Missing or not loaded.** A 404 alone does not make a page missing: the
  live host answers 404 for any file it does not have, and so it would for
  a file lost from a deploy. A piece is missing when it is not on the list
  of the pieces (`data/pieces/index.json`, which the piece's script now
  asks for beside the piece's own file). A book is missing when the server
  has no contents for it, and a part when its book does not list it. Each
  of these is "Not found", or the reader's own notice for a book. Anything
  else that fails is "Not loaded": "This page could not be loaded." and a
  button, "Try again". After a second failure in place the line reads "It
  still could not be loaded." The reader's words for a book that failed
  are gone (`content/shelf.mjs`); that case goes to the router like any
  other.
- **What "Try again" does.** For data it asks again where the reader
  stands (`getJSON` forgets a failed request), and it tries the page asked
  for last, which may not be the page the notice was put up for. For a
  script it loads the site anew at the same address: Chromium 141 keeps a
  failed `import()` for as long as the page is open (tried: after one
  failure, three later imports of the same address failed with no request
  made). In a host's frame, where the scripts are in the page, it always
  asks again in place. A press is taken once: the button reads "Trying
  again" and is marked `aria-disabled` until the answer comes.
- **A reader who does not see the page.** A notice is an alert when it is
  put up. After a try from the keyboard that failed, the focus is on the
  new button, which is described by the new line (`aria-live`). When a try
  brings the page, the focus goes to `main`.
- **A step within a page while another page is on its way.** The front
  page and the class page move within themselves (to the list of all the
  works, to an afternoon). Such a step, taken while a page the reader had
  asked for was still coming, used to move the standing page and leave
  the new one to come up under it. The page's script is now told when the
  reader has asked for another page (`main.left`); from then on its links
  are followed as links, and `stepTo()` in `places.js` files no place
  while a page is being drawn.
- **Which page moves within itself** is said by its route (the third entry
  of a row in `ROUTES`) and no longer worked out from the address, so
  `#/class/x/1`, which names no page, is not taken for the class page.
- **Two things found on the way.** A piece whose own script failed to load
  was drawn without it and looked whole (27 of the 35 pieces have one); it
  now counts as not loaded. And two addresses name a file of another kind,
  `#/index` (the list of the pieces) and `#/read/<book>/index` (a book's
  contents). Both said "Not found" on the live site only because every
  failure did; they say it now because no piece and no part has that name.
- **The private page.** `build/preview.mjs` packs the list of the pieces
  with the rest, since a piece now asks for it.
- **The setting.** `site/css/atlas.css`: the button is set as a link is,
  with a finger's room, and it and its period turn the line together
  (`.notice .keep`). In the scripts, the link of each notice ("The works",
  "The shelf") has a no-break space between its two words.

## What two critics found in the change

`code-review.md` is a reading of the change in two passes, with no browser.
Its first pass had ten findings. Mended since, each with a check in the
tool: the step within a page while another is on its way; a notice a
screen reader was not told of; "Try again" that tried the notice's page
after the reader had gone on; the class page's mark on an address that
names no page; a 404 of a file the address does not name, and an address
far too long, both told as the wrong notice; and checks in the tool that
proved less than they said.

`words.md` reads the notices' seven strings and keeps them all. From it:
the period kept to the button, the no-break spaces in the two links, and
"Trying again" while a try is out.

## How it was tried

- `tools/faults.mjs` on the site: 87 checks, 0 failed (`after.txt`). On
  the packed private page, which follows its own links as in a host's
  frame and carries its pieces with it: 37 checks, 0 failed
  (`after-packed.txt`). On the scripts as they were live: 75
  checks, 63 failed (`before.txt`). The twelve that pass there are what
  the live site already did (a piece, a book or a part that is not there
  says so; a piece reached by a link stands whole; Back from an address
  that names no page shows the page before) and two checks of things the
  live scripts never do: they drew a piece without its own script, and
  they never asked for the list of the pieces.
- `tools/battery.sh` runs these and every earlier check of the site in
  turn, on the files as they went live: `npm test` (6 tests); the walk of
  every piece and tab (`walk-site.mjs`); Back and Forward at 390 and 1280
  px (`back.mjs`, 21 checks each); every key under every tab (`keys.mjs`);
  the marked words (`refs.mjs`); every page at four widths
  (`wide-all.mjs`); then the packed page: both walks, Back at 390 px, and
  the loading checks. Every step passed. Each step's output is written to
  `out/`, which the repository does not keep; the runs of the loading
  checks are kept beside this record.
- **The check of going Back was wrong twice.** It asks for a piece whose
  data is held, steps back, and looks for the front page. It passed on the
  live scripts, which have the fault. The first reading was that the
  browser put the page's work off after a step back; the tool was made to
  ask the page something every fifth of a second, and the check still
  passed. The true cause, found with a profile of the page: the step back
  draws the front page again, which keeps the page busy for a second or
  two on this machine, and the held answer waits its turn. The tool looked
  one second after the answer went out, which was too early. It now waits
  until the page asks for the piece's own script, which a page does once
  it has read the piece's data. The check fails on the live scripts (the
  piece stands under the front page's address) and passes on the mended
  ones.
- Two things learned about the browser the checks run in (Chromium 141,
  without a window). It keeps a failed `import()` for the life of the
  page. And when a connection is cut it asks once more by itself, so a
  rule that drops one request lets the page through.

## Left as it is

- **A request that never answers.** `getJSON` sets no time limit. On a
  stalled connection the page before stays on the screen, its plates
  already taken down, under the new address, until the browser gives the
  request up. A press of "Try again" that stalls leaves "Trying again"
  standing as long. Not new, and a time limit could cut off a long part of
  a book on a slow line, so it was not added.
- **A piece whose own script can never be had** (lost from a deploy, or a
  browser that cannot read it) used to be drawn with the kit's drawings
  alone; now it says "Not loaded", and trying again loads the site anew to
  the same notice. For a failure that passes the new way is right. Every
  deploy is compared file by file with the build.
- **The list alone says whether a piece is there.** The first piece of a
  visit waits for the list as well as its own file (18 KB, asked for at the
  same moment). A tab opened before a piece was added to the site would
  say "Not found" for it until the page is loaded anew.
- **Tabs open across this deploy.** A tab opened before it keeps the old
  router; a page script it has not yet loaded comes new, and the old
  router then says "Not found". Loading the page anew mends it.
- A page that is slow to come leaves the page before on the screen until
  it comes, as before. Nothing says that a page is on its way, and a
  screen reader is told nothing when a page comes by a link, as everywhere
  on the site.
- The reader's own notice for a book or a part that is not on the shelf is
  shown as a page and is not an alert. The row of a book's other versions
  is left out, with no word, where another version's contents fail to
  load.
- `#/class/<a scene that is not there>`, `#/<piece>/<a plate that is not
  there>` and a passage number past a part's end open the page at its top.
- If the site's first scripts fail to load (`main.js` and what it brings
  in), there is no script to say so.

## Live

The zip `deploy/fate-and-the-individual-site-2026-10-05-loading.zip` (its
list of checksums is beside it) went up at 09:36 UTC as Netlify deploy
`6ac36f8b5077d6208984c7d3`, the sixth of the remade site. Nine files
changed against the deploy before: seven scripts, the stylesheet and
`data/shelf.json`. Between 09:37 and 09:38 every one of the 1,263 files
was fetched from the live address and compared with the build: all the
same.

## Found after the deploy, by a second check

A second session checked the live scripts on its own after the deploy
and reported at 10:35 UTC. It bore out the three mends. It also named
four smaller things. Two are already above, under "Left as it is": a
request has no time limit, and a page that is slow to come leaves the
page before on the screen with its plates taken down. Two are new. Both
were read in the script and neither is mended, since a change the owner
did not ask for waits for the owner's word.

- **A piece's file of the wrong shape.** If a listed piece's file comes
  as sound JSON that is not a piece, the page says "Not found", with no
  "Try again" (`site/js/piece.js`, line 75). The loader keeps an answer
  that parsed, so the notice stays until the page is loaded anew. A file
  cut short does not parse and says "Not loaded", as it should. Every
  deploy is compared file by file with the build, so the case needs a
  fault between the server and the reader that still yields sound JSON.
- **A piece's own stylesheet** would be added to the document before the
  router has checked that the reader is still on that page
  (`site/js/piece.js`, line 78). No piece names a stylesheet today, so
  nothing shows.
