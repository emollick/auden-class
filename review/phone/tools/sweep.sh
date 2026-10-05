#!/bin/sh
# Photographs every piece (each plate under each tab, and the whole page in slices) at the given widths.
#   sh sweep.sh <site dir> <out dir> <widths>
cd "$(dirname "$0")/../../.." || exit 1
SITE="$1"; OUT="$2"; W="$3"
mkdir -p "$OUT"
: > "$OUT/sweep.log"
for id in $(node -e "const fs=require('fs');for(const f of fs.readdirSync('site/data/pieces').sort()){if(f!=='index.json')console.log(f.replace('.json',''))}"); do
  mkdir -p "$OUT/$id"
  timeout 600 node build/tools/shoot.mjs "$id" --site "$SITE" --out "$OUT/$id" --widths "$W" --page > "$OUT/$id/shoot.log" 2>&1
  echo "$id exit $? $(tail -n 1 "$OUT/$id/shoot.log" | cut -c1-80)" >> "$OUT/sweep.log"
done
echo "done $(date -u +%H:%M:%S)" >> "$OUT/sweep.log"
