#!/bin/sh
# Takes the second set of pictures of the pass for phones, after the critics' findings were mended and the held
# changes made: window pictures of the changed places into review/phone/shots2/, and whole plates (every tab) of
# the pieces named below into review/phone/shots2/plates/, at 390 px (and three pieces at 320 and at 1280).
#   sh review/phone/tools/shots2.sh [site dir] [out dir]
cd "$(dirname "$0")/../../.." || exit 1
SITE="${1:-site}"; OUT="${2:-review/phone/shots2}"
V="node review/phone/tools/view.mjs"
mkdir -p "$OUT" "$OUT/plates"
shot() { name="$1"; shift; printf '%s  ' "$name"; $V "$@" --site "$SITE" --out "$OUT/$name" | cut -c1-150; }
# the menu on four phones
for w in 320 360 375 390; do shot menu-$w about --width $w; done
# the front page: the paragraph with the link, and where it lands
shot home-intro-390 home --at '.home-intro' --before 120
shot home-intro-375 home --width 375 --at '.home-intro' --before 120
shot home-intro-1280 home --width 1280 --height 800 --scale 1 --at '.home-intro' --before 200
shot home-list home --click '.home-intro a[href="#/works"]' --stay
# the class page: a scene's head with the way back, where the way back lands, the closing links
shot class-scene-othello class --at '#scene-othello' --before 380
shot class-up class --click '#scene-falstaff .scene-up' --stay
shot class-up-1280 class --width 1280 --height 800 --scale 1 --click '#scene-falstaff .scene-up' --stay
shot class-1280-scene-love class --width 1280 --height 800 --scale 1 --at '#scene-love' --before 300
shot class-end class --at '.class-on' --before 420
# the reader
shot read-moby read/moby-dick/c001
shot read-phedre-o read/o-phedre/a1s3
shot read-phedre-o-360 read/o-phedre/a1s3 --width 360
shot read-hamlet-foot read/hamlet/a1s1 --at '.read-turn' --before 500
shot read-dutchman-o read/o-dutchman/ballad
# the about page: who made this
shot about-390 about --at '.about > .sec' --before 60
shot about-1280 about --width 1280 --height 800 --scale 1 --at '.about > .sec' --before 60
# "Read on" at the foot of five pieces
for id in antigone agamemnon blake kierkegaard family-reunion; do shot readon-$id-390 $id --at '.readon' --before 420; done
shot readon-antigone-1280 antigone --width 1280 --height 800 --scale 1 --at '.readon' --before 420
# whole plates, every tab
plates() { id="$1"; w="$2"; printf '%s at %s  ' "$id" "$w"; node build/tools/shoot.mjs "$id" --site "$SITE" --out "$OUT/plates" --widths "$w" | tail -n 1 | cut -c1-80; }
for id in dutchman rilke traviata tristan horace baudelaire don-giovanni phedre othello carmen magic-flute fidelio blake agamemnon adams; do plates $id 390; done
for id in adams blake agamemnon; do plates $id 320; done
for id in adams dutchman; do plates $id 1280; done
echo "done $(date -u +%H:%M:%S)"
