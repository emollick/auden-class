#!/bin/sh
# Compares the before and after sweeps at one width, piece by piece, for the pieces the after sweep has finished.
#   sh review/phone/tools/sweep-diff.sh <sweep folder> <width>
# The sweep folder holds before-<width>/ and after-<width>/ as review/phone/tools/sweep.sh writes them; the answers go to
# <sweep folder>/diff-<width>/<id>.txt, with each differing pair saved as one picture (before over after) in crop-<id>/.
cd "$(dirname "$0")/../../.." || exit 1
S="$1"; W="$2"; A="$S/before-$W"; B="$S/after-$W"; D="$S/diff-$W"
mkdir -p "$D"
for id in $(grep ' exit ' "$B/sweep.log" | cut -d' ' -f1); do
  [ -s "$D/$id.txt" ] && continue
  timeout 300 node build/tools/pixdiff.mjs "$A/$id" "$B/$id" 700 "$D/crop-$id" > "$D/$id.txt" 2>&1
done
n=0; for f in "$D"/*.txt; do n=$((n+1)); done
echo "compared $n pieces at $W"
grep -h '^same ' "$D"/*.txt | awk '{s+=$2; t+=$NF} END {print "same " s " of " t " pictures"}'
