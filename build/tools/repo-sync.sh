#!/bin/sh
# Brings a clone of the git repository in step with the working copy.
#
#     sh build/tools/repo-sync.sh <path to the clone>      (from the project's root)
#
# Copies every file that repo-list.sh names into the clone, and takes out of the clone the
# tracked files the list no longer names. It stages nothing and commits nothing: look at
# `git status` in the clone, then add, commit and push by hand.
# It refuses to run if a file on the list is larger than 20 MB or is not a regular file.
set -e
clone=$1
[ -n "$clone" ] && [ -d "$clone/.git" ] || { echo "usage: sh build/tools/repo-sync.sh <clone>"; exit 2; }
[ -f build/tools/repo-list.sh ] || { echo "run it from the project's root"; exit 2; }
list=$(mktemp)
trap 'rm -f "$list" "$list.have" "$list.gone"' EXIT
sh build/tools/repo-list.sh > "$list"
while IFS= read -r f; do
  [ -f "$f" ] && [ ! -L "$f" ] || { echo "not a regular file: $f"; exit 1; }
  [ "$(stat -c %s "$f")" -le 20971520 ] || { echo "larger than 20 MB: $f"; exit 1; }
done < "$list"
tar -cf - -T "$list" | (cd "$clone" && tar -xf - --no-same-owner --no-same-permissions)
(cd "$clone" && git ls-files) | sort > "$list.have"
comm -23 "$list.have" "$list" > "$list.gone"
while IFS= read -r f; do rm -f "$clone/$f"; done < "$list.gone"
echo "$(wc -l < "$list") files on the list; $(wc -l < "$list.gone") tracked files taken out of the clone"
