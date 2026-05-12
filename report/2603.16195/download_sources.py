
import os, urllib.request, pathlib
arxiv_id='2603.16195'
proxy='http://127.0.0.1:33210'
os.environ['HTTP_PROXY']=proxy
os.environ['HTTPS_PROXY']=proxy
opener=urllib.request.build_opener(urllib.request.ProxyHandler({'http':proxy,'https':proxy}))
items=[('source',f'https://arxiv.org/e-print/{arxiv_id}',pathlib.Path(f'arxiv_source_{arxiv_id}.tar.gz'),120),('abs',f'https://arxiv.org/abs/{arxiv_id}',pathlib.Path(f'arxiv_abs_{arxiv_id}.html'),60),('pdf',f'https://arxiv.org/pdf/{arxiv_id}',pathlib.Path(f'arxiv_{arxiv_id}.pdf'),120)]
for name,url,out,timeout in items:
    print('download',name,url,'->',out,flush=True)
    req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
    try:
        with opener.open(req,timeout=timeout) as r:
            data=r.read()
        out.write_bytes(data)
        print('ok',name,len(data),data[:24],flush=True)
    except Exception as e:
        print('failed',name,repr(e),flush=True)
        if name=='source': raise
