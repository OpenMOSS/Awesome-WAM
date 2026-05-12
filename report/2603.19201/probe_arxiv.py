import urllib.request
url='https://arxiv.org/abs/2603.19201'
print(urllib.request.urlopen(url, timeout=30).status)
print(urllib.request.urlopen(url, timeout=30).read(200))
