
import os, urllib.request, pathlib, sys
arxiv_id='2604.14732'
proxy='http://127.0.0.1:33210'
os.environ['HTTP_PROXY']=proxy
os.environ['HTTPS_PROXY']=proxy
handlers=[urllib.request.ProxyHandler({'http':proxy,'https':proxy})]
opener=urllib.request.build_opener(*handlers)
urls={
 'source': f'https://arxiv.org/e-print/{arxiv_id}',
 'pdf': f'https://arxiv.org/pdf/{arxiv_id}',
 'html': f'https://arxiv.org/html/{arxiv_id}',
 'abs': f'https://arxiv.org/abs/{arxiv_id}',
}
outs={
 'source': pathlib.Path(f'arxiv_source_{arxiv_id}.tar.gz'),
 'pdf': pathlib.Path(f'arxiv_{arxiv_id}.pdf'),
 'html': pathlib.Path(f'arxiv_html_{arxiv_id}.html'),
 'abs': pathlib.Path(f'arxiv_abs_{arxiv_id}.html'),
}
for k,u in urls.items():
    print('download', k, u, '->', outs[k])
    req=urllib.request.Request(u, headers={'User-Agent':'Mozilla/5.0'})
    try:
        with opener.open(req, timeout=120) as r:
            data=r.read()
        outs[k].write_bytes(data)
        print(k, len(data), data[:32])
    except Exception as e:
        print('FAILED', k, repr(e))
        if k in ('source','pdf','abs'):
            raise
