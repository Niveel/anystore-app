import re
import os
print(os.listdir("."))
for i in os.listdir("."):
    if i.endswith(".js"):
        with open(i, "r") as f:
            if re.search("Provider",f.read()):
                print(i)