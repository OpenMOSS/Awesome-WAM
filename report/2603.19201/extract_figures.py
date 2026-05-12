import os, pathlib, shutil
from PIL import Image
import fitz
src=pathlib.Path(os.environ['TEMP'])/'arxiv_source_2603.19201'
out=pathlib.Path('Report')/'2603.19201'
figout=out/'figures'
figout.mkdir(parents=True, exist_ok=True)
for p in sorted((src/'fig').iterdir()):
    name=p.stem+'.png'
    dest=figout/name
    if p.suffix.lower()=='.png':
        shutil.copy2(p,dest)
    elif p.suffix.lower()=='.pdf':
        doc=fitz.open(str(p)); page=doc.load_page(0)
        pix=page.get_pixmap(matrix=fitz.Matrix(2,2), alpha=False)
        pix.save(str(dest)); doc.close()
    elif p.suffix.lower() in ['.jpg','.jpeg']:
        im=Image.open(p); im.save(dest)
    print(dest)
