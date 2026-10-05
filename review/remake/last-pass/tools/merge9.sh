#!/bin/sh
# The merge of the ninth mending: rows from remake/kit9a, lenses from remake/kit9b.
#   sh merge9.sh check | do
set -e
cd /home/user/auden-course
A=remake/kit9a; B=remake/kit9b
ROWS="site/js/kit/plate.js build/pieces.mjs build/tools/check-reading.mjs"
LENS="site/js/kit/draw.js site/js/kit/lens-beat.js site/js/kit/lens-compare.js site/js/kit/lens-figure.js site/js/kit/lens-rhyme.js site/js/kit/lens-word.js site/js/piece.js site/js/rich.js"
BOTH="site/css/atlas.css site/js/kit/README.md"
bad=0
for f in $ROWS $LENS $BOTH; do
  cmp -s "$f" "$A/orig/$f" || { echo "live differs from orig: $f"; bad=1; }
  cmp -s "$A/orig/$f" "$B/orig/$f" || { echo "the two origs differ: $f"; bad=1; }
done
for f in $ROWS; do cmp -s "$B/$f" "$B/orig/$f" || { echo "lenses changed a rows file: $f"; bad=1; }; done
for f in $LENS; do cmp -s "$A/$f" "$A/orig/$f" || { echo "rows changed a lenses file: $f"; bad=1; }; done
# nothing else of the kit differs in either copy
for d in site/js site/css build; do
  for C in $A $B; do
    diff -rq "$C/$d" "$C/orig/$d" 2>/dev/null | grep -v 'Only in' | sed 's/^Files //; s/ and .*//' | while read g; do
      rel=${g#$C/}; case " $ROWS $LENS $BOTH " in *" $rel "*) ;; *) echo "changed and not in the lists: $g";; esac
    done
  done
done
mkdir -p /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/merge9
for f in $BOTH; do
  n=$(basename $f)
  if git merge-file -p "$A/$f" "$A/orig/$f" "$B/$f" > /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/merge9/$n 2>/tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/merge9/$n.err; then echo "merged clean: $f ($(wc -l < /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/merge9/$n) lines)"; else echo "CONFLICT in $f"; bad=1; fi
done
[ $bad = 0 ] || { echo "not merged"; exit 1; }
[ "$1" = "do" ] || { echo "checked; nothing copied"; exit 0; }
mkdir -p .cache/before-merge9
for f in $ROWS $LENS $BOTH; do mkdir -p ".cache/before-merge9/$(dirname $f)"; cp "$f" ".cache/before-merge9/$f"; done
for f in $ROWS; do cp "$A/$f" "$f"; done
for f in $LENS; do cp "$B/$f" "$f"; done
for f in $BOTH; do cp /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/merge9/$(basename $f) "$f"; done
for f in $ROWS $LENS; do case $f in *.js|*.mjs) node --check "$f";; esac; done
echo "merged $(date -u +%H:%M:%S)"
