from pathlib import Path
import os
import shutil

source = Path("D:/data/archiv/napravy/Krivky/PN3/JSON")
dest = Path("D:/data/archiv/napravy/Krivky/PN3/json-temp")

files = os.listdir(str(source))
print(len(files))

# for f in files:
#     path = Path(source / f)
#     if path.suffix != ".py" and ".txt.txt" in str(path):
#         new_name = path.name.split(".txt")[0] + ".txt"
#         shutil.move(str(source), str(dest / new_name))
