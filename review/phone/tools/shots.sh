#!/bin/sh
# Takes the pictures the critic of the pass for phones looks at: the changed places of the front page, the class
# page and the reader as a window 390 px wide shows them (and three at 1280), into review/phone/shots/.
#   sh review/phone/tools/shots.sh [site dir] [out dir]
cd "$(dirname "$0")/../../.." || exit 1
SITE="${1:-site}"; OUT="${2:-review/phone/shots}"
V="node review/phone/tools/view.mjs"
mkdir -p "$OUT"
shot() { name="$1"; shift; printf '%s  ' "$name"; $V "$@" --site "$SITE" --out "$OUT/$name" | cut -c1-150; }
shot home-top home --screens 2
shot home-list home --click '.home-intro a[href="#/works"]' --stay --screens 2
shot home-1280 home --width 1280 --height 800 --scale 1
shot class-top class --screens 2
shot class-scene-three class --at '#scene-three' --before 380
shot class-scene-othello class --at '#scene-othello' --before 380
shot class-scene-papers class --at '#scene-papers' --before 380
shot class-up class --click '#scene-love .scene-up' --stay
shot class-1280-scene-love class --width 1280 --height 800 --scale 1 --at '#scene-love' --before 300
shot read-tempest read/tempest/a1s2 --screens 2
shot read-moby read/moby-dick/c001 --screens 2
shot read-hamlet-foot read/hamlet/a1s1 --at '.read-turn' --before 500
shot read-phedre-o read/o-phedre/a1s3 --screens 2
shot read-dante read/dante-longfellow/inf-03 --screens 2
