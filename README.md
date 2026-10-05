# Fate and the Individual

The source of <https://auden-english-135.netlify.app>.

In the fall of 1941 W. H. Auden taught English 135, "Fate and the Individual
in European Literature", at the University of Michigan. The site opens the
works on his list a passage at a time: thirty-five pieces, a page on the
class, and a shelf of the books. Its about page says who made it, from what
sources, and what it leaves out.

## What is here

| Folder | What it holds |
|---|---|
| `site/` | The site as it is served. Netlify publishes this folder as it stands and builds nothing. |
| `content/` | The words of the class page, the shelf and the about page, and the lists of works and records. |
| `remake/` | The plan of the pieces (`pieces.json`) and the front page (`front.json`). For each work, its reading (`works/<work>/reading.json`) and four sets of notes: `notes.md` by its poet, `art.md` by its artist, `exam.md` by its examiner, `critic.md` by its critic. The briefs those roles worked from. `KIT-CHANGES.md`, the changes to the scripts every piece shares. `LEAD-LIST.md`, what is left for a later pass. |
| `build/` | The scripts that write `site/data` from the readings and the content, and the tools that cut and typeset the hosted texts. |
| `tests/` | The tests that `npm test` runs. |
| `review/` | The critics' reports and the record of each pass, with the tools the checks were made with. |
| `deploy/` | For each deploy of the remade site, a list of checksums of every file as it went live. |
| `first-version/` | The first version of the site, live from 2 to 4 October 2026, with a README of its own. |

## Build and check

```sh
node build/pieces.mjs    # writes site/data from remake/ and content/
npm test
```

It was built with Node 22. `package.json` lists no packages to install.

To look at the site, serve `site/` with any static server, for example
`python3 -m http.server 8135 --directory site`.

The tools that open a browser use Playwright, and they import it from the
path it had on the machine they were written on
(`/opt/node22/lib/node_modules/playwright/index.mjs`). They are
`review/remake/last-pass/tools/walk-site.mjs`, which opens every piece and
presses every tab, the tools in `review/phone/tools/`, and
`build/tools/shoot.mjs`. Change that path to use them elsewhere.

## Deploy

The live site is the Netlify project `auden-english-135`. `netlify.toml`
tells Netlify to publish `site/`. Every deploy so far was an upload of a zip
of `netlify.toml` and `site/`, made with
`review/remake/last-pass/tools/deploy-zip.py`. After each one, every live
file was compared with the build (`live-compare.py`, in the same folder).

This repository is not connected to Netlify. A push here changes nothing on
the live site.

## What is not here

The working copy this repository was filled from is far larger. Left out:

- The pictures taken while checking, about five gigabytes of them. The
  reports name them, and the tools can take them again.
- The research notes on Auden and the course, except
  `remake/research/D_texts.md`. They quote books in copyright at length. The
  scanned books they were checked against are left out too, so the tools
  that read those scans have nothing to read here.
- Pages fetched from other sites while facts were checked, and the downloads
  the hosted texts were cut from. The cut texts are in `site/data/texts`.
- The zips uploaded to Netlify, and the source audio of the ten records. The
  records as served are in `site/records`.
- Earlier states of files, and the working copies of the site made while its
  shared scripts were mended.

`build/tools/repo-list.sh` names every file that belongs here.
`build/tools/repo-sync.sh` copies those files from a working copy into a
clone.

## Texts, records and typefaces

`remake/research/D_texts.md` and the site's shelf say where each hosted text
comes from. The `credit` lines in `content/records.mjs` say where each record
comes from. The licenses of the two typefaces are beside them in
`site/fonts/`.
