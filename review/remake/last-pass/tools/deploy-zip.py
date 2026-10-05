#!/usr/bin/env python3
"""Make the zip that is sent to Netlify: netlify.toml and the folder site/, as they stand.

    python3 review/remake/last-pass/tools/deploy-zip.py <out.zip>

Run it from the project's root, after `node build/pieces.mjs` and a walk of site/.
Left out of the zip: site/js/kit/README.md (notes for whoever mends the kit, not part of the site).
It also writes <out.zip>.list, one line for each file of the site as it will be served:
"<sha1>  <path under site/>", which live-compare.py reads after the deploy.
"""
import hashlib
import os
import re
import sys
import zipfile

LEFT_OUT = {'site/js/kit/README.md'}
STORED = {'.mp3', '.woff2', '.png', '.jpg'}  # already packed: stored as they are

out = sys.argv[1]
files = []
for root, dirs, names in os.walk('site'):
    dirs.sort()
    for n in sorted(names):
        p = os.path.join(root, n)
        if os.path.islink(p):
            sys.exit(f'a symbolic link in site/: {p}')
        if p in LEFT_OUT:
            continue
        files.append(p)
odd = [p for p in files if not re.fullmatch(r'[A-Za-z0-9._/-]+', p)]
if odd:
    sys.exit('paths with characters an address would have to escape: ' + ', '.join(odd[:5]))
total = 0
with zipfile.ZipFile(out, 'w') as z, open(out + '.list', 'w', encoding='utf-8') as lst:
    z.write('netlify.toml', 'netlify.toml', zipfile.ZIP_DEFLATED)
    for p in files:
        data = open(p, 'rb').read()
        total += len(data)
        kind = zipfile.ZIP_STORED if os.path.splitext(p)[1] in STORED else zipfile.ZIP_DEFLATED
        z.write(p, p, kind)
        lst.write(f'{hashlib.sha1(data).hexdigest()}  {p[len("site/"):]}\n')
with zipfile.ZipFile(out) as z:
    bad = z.testzip()
    names = z.namelist()
if bad:
    sys.exit(f'the zip is broken at {bad}')
print(f'{len(files)} files of site/ ({total} bytes) and netlify.toml: {len(names)} entries, zip of {os.path.getsize(out)} bytes')
print('left out:', ', '.join(sorted(LEFT_OUT)))
