#!/bin/sh
# Copy the project to the shared folder.
#   sh build/tools/sync.sh         the source, the wording, the remake's briefs
#                                  and readings (quick)
#   sh build/tools/sync.sh --all   also the built books, the fonts, and the
#                                  downloaded source files the book scripts read
#
# The copy only adds and replaces. A file moved or removed in the source stays in the
# shared copy, so the list of such files (build/tools/shared-stale.txt) is written first
# and travels with the copy: a working copy made from the shared folder is cleaned with
# `python3 build/tools/sync-moved.py --restored <dir>` before anything else is done in it.
set -e
SRC="$(cd "$(dirname "$0")/../.." && pwd)"
DST="/mnt/project-files/auden-course"
mkdir -p "$DST"
cd "$SRC"
python3 build/tools/sync-moved.py --manifest || echo "the list of stale paths was not written"
copy() { (cd "$DST" && tar -xf - --no-same-owner --no-same-permissions); }
# The shared folder cannot hold symbolic links, and one that fails stops the copy with an
# error, so they are left out (a working copy of the kit links to the site's data and fonts).
find . -type l -not -path './.cache/*' -not -path './.git/*' -not -path './node_modules/*' |
  tar --exclude=./.cache --exclude=./.git --exclude=./node_modules --exclude=./site/data/texts --exclude=./site/fonts -X - -cf - . | copy
if [ "$1" = "--all" ]; then
  tar -cf - ./site/data/texts ./site/fonts | copy
  # the source files only, not the page images kept beside them
  find ./.cache/texts -maxdepth 1 -type f -print0 | tar --null -T - -cf - | copy
  # the originals set beside the translations, and the handbooks the captions lean on
  for d in ./.cache/originals ./.cache/handbooks; do [ -d "$d" ] && tar -cf - "$d" | copy; done
fi
echo "synced $(date -u +%H:%M:%S)"
