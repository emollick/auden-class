#!/bin/sh
# Prints the files of the working copy that belong in the git repository, one path a line.
#
#     sh build/tools/repo-list.sh            (from the project's root)
#
# The working copy holds far more than the repository: some six gigabytes of pictures taken
# while checking, pages and scans fetched from other sites, zips, and earlier states of
# files. This list names what goes in; everything else stays out. README.md at the root,
# "What is not here", says what is left out and why. repo-sync.sh uses this list.
#
# Never add to this list: .cache/ (scanned books in copyright), remake/research/ other than
# D_texts.md (long quotations from books in copyright), any folder named src or .src
# (pages fetched from other sites), pictures, audio outside site/records, zips.
{
  # the site as served, and what builds, tests and deploys it
  for f in README.md .gitignore netlify.toml package.json; do [ -f "$f" ] && echo "$f"; done
  find site content tests -type f
  find build -type f ! -path '*/__pycache__/*' ! -name '*.pyc'
  find deploy -maxdepth 1 -type f -name '*.list'

  # the plan of the pieces, the readings, each work's four sets of notes, the briefs
  find remake -maxdepth 1 -type f \( -name '*.md' -o -name '*.json' -o -name '*.mjs' \)
  find remake/class remake/prompts remake/kit9 -type f -name '*.md'
  find remake/kit8 remake/kit9a remake/kit9b -maxdepth 1 -type f -name '*.md'
  find remake/works -mindepth 2 -maxdepth 2 -type f \
    \( -name 'reading.json' -o -name '*.md' -o -name '*.mjs' -o -name 'adams-proposed.js' \)
  find remake/research -maxdepth 1 -type f -name 'D_texts.md'

  # the record: reports, briefs, and the tools the checks were made with
  find review -type f \( -name '*.md' -o -name '*.mjs' -o -name '*.py' -o -name '*.sh' \) \
    ! -path '*/__pycache__/*'
  find review/remake/grams review/class -maxdepth 1 -type f \( -name '*.txt' -o -name '*.json' \)
  find review/phone/measures -type f -name '*.txt'

  # the first version, as kept
  find first-version -type f
} | sed 's|^\./||' | sort -u
