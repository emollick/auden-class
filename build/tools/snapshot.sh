#!/bin/sh
# A private preview of the pieces that are ready, built in a copy of the
# tree so that work in hand is neither shown nor disturbed.
#
#   sh build/tools/snapshot.sh <dir> id id id ...
#   sh build/tools/snapshot.sh <dir>              every piece that has a reading
#
# <dir>/tree is the copy (without the pieces that are not named), and
# <dir>/site is what build/preview.mjs --site makes of it: index.html, the
# packed books, the records and files.json. A work that is not named is
# listed on the front page as "to come". Nothing here publishes anything.
set -e
SRC="$(cd "$(dirname "$0")/../.." && pwd)"
[ -n "$1" ] || { echo "usage: sh build/tools/snapshot.sh <dir> [pieceId ...]"; exit 1; }
mkdir -p "$1"
DIR="$(cd "$1" && pwd)"
shift
case "$DIR" in "$SRC"|"$SRC"/*) echo "the copy must stand outside the project"; exit 1;; esac
rm -rf "$DIR/tree" "$DIR/site"
mkdir -p "$DIR/tree"
cd "$SRC"
tar --exclude=./.cache --exclude=./.git --exclude=./node_modules --exclude=./review --exclude=./first-version --exclude=./remake/works --exclude=./remake/research --exclude='./remake/kit[0-9]*' --exclude=./site/data/pieces -cf - . | (cd "$DIR/tree" && tar -xf -)
mkdir -p "$DIR/tree/remake/works" "$DIR/tree/site/data/pieces"
if [ "$#" -eq 0 ]; then
  set -- $(for f in remake/works/*/reading.json; do basename "$(dirname "$f")"; done)
fi
for id in "$@"; do
  [ -f "remake/works/$id/reading.json" ] || { echo "no reading for $id"; exit 1; }
  mkdir -p "$DIR/tree/remake/works/$id"
  cp "remake/works/$id/reading.json" "$DIR/tree/remake/works/$id/"
done
# a piece's own drawing and style go with it only if the piece is shown
for f in "$DIR"/tree/site/js/pieces/*.js "$DIR"/tree/site/css/pieces/*.css; do
  [ -e "$f" ] || continue
  id="$(basename "$f")"; id="${id%.*}"
  keep=no
  for want in "$@"; do [ "$want" = "$id" ] && keep=yes; done
  [ "$keep" = yes ] || rm -f "$f"
done
cd "$DIR/tree"
node build/pieces.mjs
node build/preview.mjs --site "$DIR/site"
echo "preview of $# pieces in $DIR/site"
