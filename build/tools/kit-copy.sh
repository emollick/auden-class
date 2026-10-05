#!/bin/sh
# A working copy of the kit and the build for a mender, inside the project.
#
#   sh build/tools/kit-copy.sh remake/kit9a
#
# <dir>/site     the site's scripts and stylesheet (copies, to change), the built data of the
#                pieces (a copy, which the copy's own build writes), and links to the books,
#                the fonts and the records
# <dir>/build    the build and its tools (copies, to change)
# <dir>/remake   pieces.json, front.json and every reading (copies)
# <dir>/content  a link
# <dir>/orig     the same again, never to be touched: "before" for pictures, and the base of
#                the lead's merge
#
# In the copy, `node <dir>/build/pieces.mjs [id]` reads the copy's readings and writes the
# copy's data; `node <dir>/build/tools/check-reading.mjs <id>` reads the copy's reading;
# `node <dir>/build/tools/shoot.mjs <piece> --out <folder>` photographs the copy, and with
# `--site <dir>/orig/site` the copy as it was; `node <dir>/build/tools/scan.mjs <width> <probe.js>`
# asks every plate of the copy a question (probes in <dir>/build/tools/probes). Nothing in the copy
# writes to the live site.
# The private site's snapshot and the sync leave the links out; the snapshot leaves the
# whole copy out.
set -e
SRC="$(cd "$(dirname "$0")/../.." && pwd)"
[ -n "$1" ] || { echo "usage: sh build/tools/kit-copy.sh <dir inside the project>"; exit 1; }
D="$SRC/$1"
[ -e "$D" ] && { echo "$D is there already"; exit 1; }
copy() {
  mkdir -p "$1/site/css" "$1/site/data" "$1/build/tools" "$1/remake/works"
  cp "$SRC/site/index.html" "$1/site/"
  cp -R "$SRC/site/js" "$1/site/js"
  cp "$SRC/site/css/atlas.css" "$1/site/css/"
  if [ -d "$SRC/site/css/pieces" ]; then cp -R "$SRC/site/css/pieces" "$1/site/css/pieces"; fi
  cp -R "$SRC/site/data/pieces" "$1/site/data/pieces"
  cp "$SRC"/site/data/*.json "$1/site/data/"
  ln -s "$SRC/site/data/texts" "$1/site/data/texts"
  ln -s "$SRC/site/fonts" "$1/site/fonts"
  ln -s "$SRC/site/records" "$1/site/records"
  ln -s "$SRC/content" "$1/content"
  cp "$SRC"/build/*.mjs "$1/build/"
  cp -R "$SRC/build/lib" "$1/build/lib"
  cp "$SRC"/build/tools/*.mjs "$SRC"/build/tools/*.py "$1/build/tools/"
  if [ -d "$SRC/build/tools/probes" ]; then cp -R "$SRC/build/tools/probes" "$1/build/tools/probes"; fi
  cp "$SRC/remake/pieces.json" "$SRC/remake/front.json" "$1/remake/"
  for f in "$SRC"/remake/works/*/reading.json; do
    id="$(basename "$(dirname "$f")")"
    mkdir -p "$1/remake/works/$id"
    cp "$f" "$1/remake/works/$id/"
  done
}
copy "$D"
copy "$D/orig"
echo "a working copy in $1 (and $1/orig as it was), taken $(date -u +%H:%M:%S) UTC"
