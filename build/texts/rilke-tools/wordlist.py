# Build word lists from the proofread books already on this machine:
# english.txt (word<TAB>count), french.txt, german.txt.
# usage: python3 wordlist.py outdir
import collections, glob, os, re, sys
from ocrxml import CACHE

RESEARCH = '/tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/texts'
FRENCH = ('baudelaire_journaux_intimes_fr', 'rimbaud_saison_en_enfer_fr', 'pg56668_rimbaud_saison')
GERMAN = ('faust_german', 'rilke_malte_german', 'wagner_fliegende_hollaender_27769', 'wagner_goetterdaemmerung_de_zeno', 'wagner_tristan_und_isolde_de_zeno')
OTHER = ('dante_italian', 'horace_latin_anthon', 'pg46938_horace_latin_anthon', 'rilke_journal', 'ia_rilke', '_ia_ocr', 'temple_', 'rilke-')

def words(path):
    text = open(path, encoding='utf8', errors='replace').read()
    a = text.find('*** START OF')
    b = text.find('*** END OF')
    if a >= 0 and b > a:
        text = text[a:b]
    text = text.replace('’', "'").replace('‘', "'")
    return re.findall(r"[A-Za-zÀ-ÖØ-öø-ÿŒœ]+(?:'[A-Za-zÀ-ÖØ-öø-ÿ]+)*", text)

def main(out):
    os.makedirs(out, exist_ok=True)
    lists = {'english': collections.Counter(), 'french': collections.Counter(), 'german': collections.Counter()}
    seen = set()
    for folder in (CACHE, RESEARCH):
        for path in sorted(glob.glob(os.path.join(folder, '*.txt'))):
            base = os.path.basename(path)
            size = os.path.getsize(path)
            if any(o in base for o in OTHER) or (base.split('.')[0], size) in seen:
                continue
            key = 'french' if any(f in base for f in FRENCH) else 'german' if any(g in base for g in GERMAN) else 'english'
            if size in {s for (_, s) in seen}:
                continue          # the same file under another name
            seen.add((base.split('.')[0], size))
            for w in words(path):
                lists[key][w] += 1
    if os.path.exists('/usr/share/dict/words'):
        for w in open('/usr/share/dict/words', encoding='utf8', errors='replace'):
            lists['english'][w.strip()] += 1
    for key, c in lists.items():
        with open(os.path.join(out, key + '.txt'), 'w', encoding='utf8') as f:
            for w, k in sorted(c.items()):
                f.write('%s\t%d\n' % (w, k))
        print(key, len(c), 'forms,', sum(c.values()), 'words')

if __name__ == '__main__':
    main(sys.argv[1])
