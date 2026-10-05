# The first version, kept

This folder holds the first version of the site, "English 135": a term of
fifteen weeks with tests, work by heart, exercises and a final examination.
It was deployed on 2 October 2026 at 20:59 UTC and was live at
auden-english-135.netlify.app until 4 October at 05:36 UTC, when the remade
site replaced it. The owner rejected it at 21:16 UTC on 2 October and on
3 October asked for the site to be torn down and remade. The remade site is
in `site/`.

The files were moved here on 3 October so that `site/`, the folder Netlify
publishes, holds only the remade site. Nothing was deleted, and the move did
not touch the deploy.

## What is here

- `site/first.html`: the first version's page. It was `site/index.html`
  when it was deployed.
- `site/js/app.js`, `site/js/lib/`, `site/js/views/`: its scripts.
- `site/css/main.css`, `site/css/fonts.css`: its stylesheets.
- `site/fonts/`: its two typefaces, Source Serif 4 and Courier Prime, with
  their licenses.
- `site/plates/`: its nineteen pictures.
- `site/data/course.json`, `site/data/ui.json`: the course and its wording,
  as built.
- `site/data/texts/poems/`: the book of four short poems as the first
  version printed it. The remade site prints two of the four, the two by
  Rilke, at the same address.
- `content/`: the sources that only the first version reads (`course.mjs`,
  `door.mjs`, `pages.mjs`, `pieces.mjs`, `plates.mjs`, `ui.mjs`, `units/`).
  `works.mjs` and `records.mjs` are copies made on 3 October, before the
  first version's sentences were taken out of the two files of those names
  that the remade site reads in `content/`.
- `build/build.mjs`, `build/lib/meetings.mjs` and `build/tools/`: its
  builder and the tools that only it used (`preview.mjs`, `check-part.mjs`,
  `apply-edits.py`, `check-links.mjs`).
- `tests/`: its eight tests. They import its scripts from `site/js/` at the
  project's root, so they run only in a scratch copy set up as below. The
  one test that the remade site still uses, of the typesetting of the
  books, stays in `tests/` at the root.

## What is not here

- The records (`site/records/`) and the books (`site/data/texts/`) are
  shared with the remade site and stay in `site/`. Some of the books have
  been cut again since.
- These files are not the deploy. They were built again between 21:30 UTC
  on 2 October and 00:15 UTC on 3 October, during a rework of the opening
  and the first week that the owner was never shown. What was live was the
  build of 20:59 UTC, which Netlify keeps among its deploys. A zip of that
  build, made at 20:41 UTC, is kept with the project's files
  (`deploy/english-135-site.zip`) and is not in the git repository.
- The first version's prose, gathered for its critics, is
  `review/all-prose.md`, and their reports are in `review/critics/`.

## To look at it again

In a scratch copy of the project, never in place, copy the contents of
`first-version/site/` over `site/` and open `first.html`. To build it again
the builder would need its paths set: it expects to stand at
`build/build.mjs` with its sources in `content/` and the rest of
`build/lib/` beside it. The tests expect to stand in `tests/` at the root.
