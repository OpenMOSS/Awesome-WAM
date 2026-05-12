import os, urllib.request
url='https://arxiv.org/e-print/2603.19201'
out=os.path.join(os.environ['TEMP'],'arxiv_source_2603.19201.tar.gz')
os.environ['HTTP_PROXY']='http://127.0.0.1:33210'
os.environ['HTTPS_PROXY']='http://127.0.0.1:33210'
os.environ['ALL_PROXY']='http://127.0.0.1:33210'
req=urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=120) as r, open(out,'wb') as f:
    f.write(r.read())
print(out, os.path.getsize(out))
