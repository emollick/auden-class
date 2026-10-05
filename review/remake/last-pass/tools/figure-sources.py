# One wording for each figure of speech (the last pass, 3 October), the follow-up: on six pages a
# Figure tab's new line said more than the handbook its `stands` line named, so the handbook that
# carries the rest is named there and in the page's list of sources; and on the Faust page one
# sentence of a caption and the tab's line are made to say the figure the same way.
#
#   python3 review/remake/last-pass/tools/figure-sources.py            write the lists and say what they hold
#   python3 review/remake/last-pass/tools/figure-sources.py --apply    apply them with build/tools/edit-exact.py
#   ... --only a,b                                                     those pieces only
#
# The Horace line also drops "’s grammar" (the page's other lines name the book the same way), to
# stay within the 70 words a line of sources may have.
#
# Each list is kept at remake/works/<piece>/lead/edits-figure-sources.json and the reading as it
# stood at lead/before-figure-sources.json. Proved before anything is written: every `old` and
# every anchor occurs exactly once in the raw text. Proved after: the reading still parses, and
# the only leaves that changed are `stands`, `plain` or `caption` of a lens whose kind is
# `figure`, and entries of `sources`. Why: review/remake/last-pass/RECORD.md, "One wording for
# each figure".
import json, os, subprocess, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..', '..'))
SILVA = '*Silva Rhetoricae* (rhetoric.byu.edu), under '
EDITS = {
    'antigone': [
        {'old': 'Antithesis as the Online Etymology Dictionary gives it.',
         'new': 'Antithesis as the Online Etymology Dictionary and *Silva Rhetoricae* give it.'},
        {'old': '"' + SILVA + '*polyptoton*."',
         'new': '"' + SILVA + '*antithesis* and *polyptoton*."'},
    ],
    'horace': [
        {'old': 'antithesis as Allen and Greenough’s grammar defines it (section 641)',
         'new': 'antithesis as Allen and Greenough (section 641) and *Silva Rhetoricae* define it'},
        {'before': '"Online Etymology Dictionary: transgress, providence, prudent, hubris."',
         'line': '  "' + SILVA + '*antithesis*.",'},
    ],
    'augustine': [
        {'old': 'The marks on the passage, and the lines themselves. Augustine’s Latin in Pusey’s edition of 1838,',
         'new': 'The marks on the passage, and the lines themselves. Antithesis as *Silva Rhetoricae* defines it. Augustine’s Latin in Pusey’s edition of 1838,'},
    ],
    'pascal': [
        {'old': 'The marks on the passage, and what the fragment says. The French of fragment 278 in Brunschvicg’s edition.',
         'new': 'The marks on the passage, and what the fragment says. Antithesis as *Silva Rhetoricae* defines it. The French of fragment 278 in Brunschvicg’s edition.'},
    ],
    'baudelaire': [
        {'old': 'What a metaphor is: Online Etymology Dictionary, under *metaphor*.',
         'new': 'What a metaphor is: Online Etymology Dictionary and *Silva Rhetoricae*, under *metaphor*.'},
        {'after': '"Online Etymology Dictionary (etymonline.com), under *dandy*, *infinitive*, *metaphor*, *oxymoron*, *sang-froid*, *simile* and *vertigo*.",',
         'line': '    "' + SILVA + '*metaphor*.",'},
    ],
    'carmen': [
        # the line was at its limit of 70 words, so three sentences give up a word or two each
        {'old': '*Silva Rhetoricae* under *anadiplosis*. W. H. Fraser and J. Squair, *High School French Grammar* (1900), sections 274 and 275, for the tenses after *if*. The stage directions before and after the song are in [Act 1](#/read/carmen/act-1:104). What José says when alone is in the spoken French',
         'new': '*Silva Rhetoricae* and the Online Etymology Dictionary under *anadiplosis*. The tenses after *if*: W. H. Fraser and J. Squair, *High School French Grammar* (1900), sections 274 and 275. The stage directions before and after the song: [Act 1](#/read/carmen/act-1:104). What José says when alone: the spoken French'},
        {'after': '"' + SILVA + '*isocolon* and *anadiplosis*.",',
         'line': '    "Online Etymology Dictionary (etymonline.com), under *anadiplosis*.",'},
    ],
    'faust': [
        {'old': '"plain": "the same words at the head of line after line"',
         'new': '"plain": "the same word at the head of line after line"'},
        {'old': 'A word repeated at the beginning of successive lines is anaphora',
         'new': 'A word repeated at the head of line after line is anaphora'},
    ],
}


def leaves(v, p=()):
    if isinstance(v, dict):
        for k, x in v.items():
            yield from leaves(x, p + (k,))
    elif isinstance(v, list):
        for i, x in enumerate(v):
            yield from leaves(x, p + (i,))
    else:
        yield p, v


APPLY = '--apply' in sys.argv[1:]
ONLY = set(sys.argv[sys.argv.index('--only') + 1].split(',')) if '--only' in sys.argv else None
for piece, edits in EDITS.items():
    if ONLY and piece not in ONLY:
        continue
    path = os.path.join(ROOT, 'remake', 'works', piece, 'reading.json')
    lead = os.path.join(os.path.dirname(path), 'lead')
    lst, kept = os.path.join(lead, 'edits-figure-sources.json'), os.path.join(lead, 'before-figure-sources.json')
    raw = open(path, encoding='utf-8').read()
    for i, e in enumerate(edits):
        key = e.get('old') or e.get('before') or e.get('after')
        n = raw.count(key)
        assert n == 1, '%s edit %d: occurs %d times' % (piece, i, n)
    if not APPLY:
        print('%s: %d edits, each found once' % (piece, len(edits)))
        continue
    assert not os.path.exists(kept) and not os.path.exists(lst), kept
    os.makedirs(lead, exist_ok=True)
    json.dump(edits, open(lst, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    subprocess.run([sys.executable, os.path.join(ROOT, 'build', 'tools', 'edit-exact.py'), path, lst, kept], check=True)
    before, after = json.loads(raw), json.load(open(path, encoding='utf-8'))
    la, lb = dict(leaves(before)), dict(leaves(after))
    gone, come = sorted(set(la) - set(lb), key=str), sorted(set(lb) - set(la), key=str)
    assert not gone and all(p[0] == 'sources' for p in come), (piece, gone, come)
    n_src = len(after['sources']) - len(before['sources'])
    changed = [p for p in la if p[0] != 'sources' and la[p] != lb[p]]
    for p in changed:
        ok = len(p) == 5 and p[0] == 'plates' and p[2] == 'lenses' and p[4] in ('stands', 'plain', 'caption')
        ok = ok and before['plates'][p[1]]['lenses'][p[3]].get('kind') == 'figure'
        assert ok, '%s: an edit reaches %s' % (piece, '.'.join(str(x) for x in p))
    src_changed = sorted(set(after['sources']) - set(before['sources']))
    assert set(before['sources']) - set(after['sources']) <= {s for s in before['sources'] if 'Silva' in s}, piece
    print('%s: %s; sources: %d more, %d new or reworded' % (
        piece, ', '.join('%s/%s %s' % (before['plates'][p[1]]['id'], before['plates'][p[1]]['lenses'][p[3]].get('label'), p[4]) for p in changed),
        n_src, len(src_changed)))
