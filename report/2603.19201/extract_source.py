import tarfile, pathlib, shutil
root=pathlib.Path('Report/2603.19201/source')
root.mkdir(parents=True, exist_ok=True)
p=pathlib.Path('Report/2603.19201/arxiv_source_2603.19201.tar.gz')
print('exists', p.exists(), 'size', p.stat().st_size if p.exists() else 0)
with tarfile.open(p, 'r:gz') as t:
    t.extractall(root)
print('done')
