import urllib.request
req=urllib.request.Request('https://arxiv.org/e-print/2603.19201', method='HEAD')
r=urllib.request.urlopen(req, timeout=30)
print(r.status)
print(r.headers)
