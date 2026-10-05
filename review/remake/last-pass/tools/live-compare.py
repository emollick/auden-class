#!/usr/bin/env python3
"""Compare every file of the live site with the folder it was made from.

    python3 review/remake/last-pass/tools/live-compare.py <out.zip>.list <https://address/> <folder to fetch into>

Reads the list deploy-zip.py wrote, fetches every path from the live address with curl
(eight at a time), and compares each file's sha1 with the list. Prints counts only, then
the content type the address gives one file of each kind, and the two headers of netlify.toml.
"""
import hashlib
import os
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor

lst, base, into = sys.argv[1:4]
base = base.rstrip('/') + '/'
want = [line.rstrip('\n').split('  ', 1) for line in open(lst, encoding='utf-8') if line.strip()]
os.makedirs(into, exist_ok=True)


def fetch(item):
    sha, path = item
    dest = os.path.join(into, path)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    for attempt in range(3):
        r = subprocess.run(['curl', '-sS', '--fail', '--max-time', '120', '-o', dest, base + path], capture_output=True, text=True)
        if r.returncode == 0:
            got = hashlib.sha1(open(dest, 'rb').read()).hexdigest()
            return path, ('same' if got == sha else 'DIFFERENT')
    return path, 'NOT FETCHED: ' + r.stderr.strip()[:120]


with ThreadPoolExecutor(8) as pool:
    results = list(pool.map(fetch, want))
same = [p for p, s in results if s == 'same']
rest = [(p, s) for p, s in results if s != 'same']
print(f'{len(want)} files listed; the same on the live address: {len(same)}; not the same: {len(rest)}')
for p, s in rest[:20]:
    print('  ', s, p)

seen = {}
for sha, path in want:
    seen.setdefault(os.path.splitext(path)[1], path)
for ext, path in sorted(seen.items()):
    r = subprocess.run(['curl', '-sS', '-I', '--max-time', '60', base + path], capture_output=True, text=True)
    head = {k.strip().lower(): v.strip() for k, v in (line.split(':', 1) for line in r.stdout.splitlines() if ':' in line)}
    print(f'{ext or "(none)"}: {head.get("content-type", "no content type")}')
r = subprocess.run(['curl', '-sS', '-I', '--max-time', '60', base], capture_output=True, text=True)
head = {k.strip().lower(): v.strip() for k, v in (line.split(':', 1) for line in r.stdout.splitlines() if ':' in line)}
print('status line:', (r.stdout.splitlines() or ['none'])[0].strip())
for k in ('x-content-type-options', 'referrer-policy', 'cache-control'):
    print(f'{k}: {head.get(k, "not sent")}')
