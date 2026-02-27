import os
from bs4 import BeautifulSoup
import json

base_dir = 'old_html_files'

result = {'boys': [], 'girls': []}

for fname in os.listdir(base_dir):
    if not fname.lower().endswith('.htm'):
        continue
    path = os.path.join(base_dir, fname)
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        soup = BeautifulSoup(f, 'html.parser')
    # guess if boy or girl by filename
    key = None
    if 'boy' in fname.lower():
        key = 'boys'
    elif 'girl' in fname.lower():
        key = 'girls'
    else:
        # skip non-name pages
        continue
    for tr in soup.find_all('tr'):
        tds = tr.find_all('td')
        if len(tds) >= 2 and 'bynm' in tds[0].get('class', []) and 'bymn' in tds[1].get('class', []):
            name = tds[0].get_text().strip()
            meaning = tds[1].get_text().strip()
            result[key].append({'name': name, 'meaning': meaning})

with open('names.json', 'w', encoding='utf-8') as out:
    json.dump(result, out, ensure_ascii=False, indent=2)

print(f"Extracted {len(result['boys'])} boy names and {len(result['girls'])} girl names")
