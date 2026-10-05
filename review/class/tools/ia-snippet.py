#!/usr/bin/env python3
"""One full-text query against one Internet Archive item; snippets go to the screen only.

    python3 review/class/tools/ia-snippet.py "phrase one" ["phrase two" ...] [--item ID] [--raw]

Each phrase is sent inside double quotes; several phrases are ANDed and each gets its own
snippet. Nothing of what comes back is written to disk. The only thing kept is a count of
queries made and the time of the last one (in the session's scratch folder), so that requests
stay more than five seconds apart and the report can say how many were made.
A 403 or 407 from the proxy means the host is not allowed: the script stops and says so.
"""
import json, os, sys, time, urllib.parse, urllib.request, urllib.error

ITEM = 'whaudenfarinteri0000bold'
args = sys.argv[1:]
raw = False
if '--raw' in args:
    args.remove('--raw'); raw = True
if '--item' in args:
    i = args.index('--item'); ITEM = args[i + 1]; del args[i:i + 2]
if not args:
    sys.exit(__doc__)

STATE = os.environ.get('IA_STATE', '/tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/ia-count.json')
os.makedirs(os.path.dirname(STATE), exist_ok=True)
try:
    st = json.load(open(STATE))
except Exception:
    st = {'count': 0, 'last': 0}
wait = 6.5 - (time.time() - st['last'])
if wait > 0:
    time.sleep(wait)

q = ' '.join('"%s"' % a for a in args)
url = ('https://archive.org/services/search/beta/page_production/?service_backend=fts&user_query='
       + urllib.parse.quote(q) + '&hits_per_page=20&page=1&filter_map='
       + urllib.parse.quote(json.dumps({'identifier': {ITEM: 'inc'}})))
st['count'] += 1; st['last'] = time.time()
json.dump(st, open(STATE, 'w'))
try:
    with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=60) as r:
        body = r.read().decode('utf-8', 'replace'); code = r.status
except urllib.error.HTTPError as e:
    print('HTTP', e.code, '(query no. %d)' % st['count'])
    if e.code in (403, 407):
        print('refused: do not retry')
    sys.exit(1)
except Exception as e:
    print('failed:', type(e).__name__, e, '(query no. %d)' % st['count']); sys.exit(1)
print('HTTP', code, '(query no. %d)' % st['count'])
if raw:
    print(body[:3000]); sys.exit(0)
try:
    d = json.loads(body)
except Exception:
    print(body[:500]); sys.exit(1)
hits = (((d.get('response') or {}).get('body') or {}).get('hits') or {}).get('hits') or []
if not hits:
    print('no hits (the phrases are ANDed: one of them does not stand as typed)')
for h in hits:
    hl = h.get('highlight') or {}
    for k, v in hl.items():
        for s in (v if isinstance(v, list) else [v]):
            print('  ~', s.replace('{{{', '[').replace('}}}', ']'))
