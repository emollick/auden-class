#!/bin/sh
# Every check of the site, one after another: the tests, the loading checks, every earlier browser check, the
# packed private page built from this working copy, and the loading checks on an older copy of the site.
#   sh review/router/tools/battery.sh <a folder outside the project, for the packed page> [<an older site/>]
# Each step's output goes to review/router/out/<step>.txt and ends "exit N". A step whose output is whole and
# newer than review/router/out/.stamp is not run again, so the battery can be taken up where it was cut off.
# Remove the stamp to run everything anew.
cd "$(dirname "$0")/../../.." || exit 2
[ -n "$1" ] || { echo "usage: sh review/router/tools/battery.sh <folder for the packed page> [<an older site/>]"; exit 1; }
SNAP=$1; OLD=$2
O=review/router/out
mkdir -p "$O"
[ -f "$O/.stamp" ] || touch "$O/.stamp"
run() {
  name=$1; shift
  if [ -f "$O/$name.txt" ] && [ "$O/$name.txt" -nt "$O/.stamp" ] && tail -1 "$O/$name.txt" | grep -q '^exit [0-9]'; then echo "== $name: kept ($(tail -1 "$O/$name.txt"))"; return; fi
  echo "== $name: $* ($(date -u +%H:%M:%S))"
  ( "$@" > "$O/$name.txt" 2>&1; echo "exit $?" >> "$O/$name.txt" )
  tail -3 "$O/$name.txt" | cut -c1-200
}
echo "== begun $(date -u +%H:%M:%S)"
run npm-test npm test
run faults node review/router/tools/faults.mjs
run walk-site node review/remake/last-pass/tools/walk-site.mjs site "$O/walk"
run back-390 node review/phone/tools/back.mjs --width 390
run back-1280 node review/phone/tools/back.mjs --width 1280
run keys node review/phone/tools/keys.mjs
run refs node review/phone/tools/refs.mjs
run wide-all node review/phone/tools/wide-all.mjs --tabs
echo "== the site done $(date -u +%H:%M:%S)"
run snapshot sh build/tools/snapshot.sh "$SNAP"
run walk2 node review/remake/last-pass/tools/walk2.mjs "$SNAP/site" "$O/walk2"
run walk2-sandbox node review/remake/last-pass/tools/walk2.mjs "$SNAP/site" "$O/walk2s" --sandbox
run back-packed-390 node review/phone/tools/back.mjs --site "$SNAP/site" --page local.html --width 390
run faults-packed node review/router/tools/faults.mjs --site "$SNAP/site" --page local.html
[ -n "$OLD" ] && run before node review/router/tools/faults.mjs --site "$OLD"
echo "== done $(date -u +%H:%M:%S)"
