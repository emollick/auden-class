# the runs of words a sentence shares with a scan; prints lengths and where in the sentence, never the scan's text
#   python3 build/tools/runs.py <scan>        (the sentence on standard input)
# A run is counted only where its words stand together in the scan, in that order.
# For every printed sentence of a piece at once: python3 build/tools/runs-sweep.py <scan> ... --only <pieceId> --show
import sys,re
scan=re.sub(r'[^a-z\s]',' ',open(sys.argv[1],encoding='utf8',errors='ignore').read().lower()).split()
whole=' '+' '.join(scan)+' '
text=sys.stdin.read()
words=re.sub(r'[^a-z\s]',' ',text.lower().replace('’',"'")).split()
N=4
idx=set(' '.join(scan[i:i+N]) for i in range(len(scan)-N+1))
def longest(run):
    # the longest stretch of a chain of four-word matches that stands whole in the scan
    for n in range(len(run),N-1,-1):
        for a in range(0,len(run)-n+1):
            if ' '+' '.join(run[a:a+n])+' ' in whole: return n,a
    return 0,0
i=0; best=[]
while i<=len(words)-N:
    if ' '.join(words[i:i+N]) in idx:
        j=i+N
        while j<len(words) and ' '.join(words[j-N+1:j+1]) in idx: j+=1
        n,off=longest(words[i:j])
        if n: best.append((n,i+off))
        i=j-N+1   # not i=j: a run that begins inside a chain of chance words was passed over (mended 3 October)
    else: i+=1
print('words:',len(words),'runs of 4 or more shared with the scan:', [(n,f'words {a+1}-{a+n}') for n,a in best] or 'none')
