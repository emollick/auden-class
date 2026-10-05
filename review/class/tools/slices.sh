#!/usr/bin/env bash
# Cuts a tall picture into pieces short enough to be read one at a time.
#   review/class/tools/slices.sh <picture.png> [height of a piece, default 1500]
# The pieces overlap by 80 px so that no line is lost at a cut. Prints the names of the pieces.
set -euo pipefail
in="$1"; h="${2:-1500}"
H=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of csv=p=0 "$in")
W=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$in")
base="${in%.png}"; n=0; y=0
if [ "$H" -le $((h + 200)) ]; then echo "$in (whole: ${W}x${H})"; exit 0; fi
while [ "$y" -lt "$H" ]; do
  hh=$h; if [ $((y + hh)) -gt "$H" ]; then hh=$((H - y)); fi
  out="$base.$(printf %02d $n).png"
  ffmpeg -loglevel error -y -i "$in" -vf "crop=$W:$hh:0:$y" "$out"
  echo "$out"
  n=$((n + 1)); y=$((y + h - 80))
  if [ $((H - y)) -le 80 ]; then break; fi
done
