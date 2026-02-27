#!/usr/bin/env python3
import os
import json
import re
from bs4 import BeautifulSoup
from pathlib import Path

def extract_names_from_html(filepath):
    """Extract names and meanings from an HTML file."""
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        soup = BeautifulSoup(f, 'html.parser')
    
    names = []
    # Find all tables with names
    tables = soup.find_all('table')
    for table in tables:
        rows = table.find_all('tr')
        for row in rows:
            tds = row.find_all('td')
            if len(tds) >= 2:
                name = tds[0].get_text(strip=True)
                meaning = tds[1].get_text(strip=True)
                
                # Only add if name is not empty and doesn't look like navigation
                if name and len(name) > 1 and not name.startswith('['):
                    names.append({
                        'name': name,
                        'meaning': meaning if meaning else ''
                    })
    
    return names

def main():
    html_dir = '/workspaces/anbuTamil/old_html_files'
    
    boy_names = []
    girl_names = []
    
    # Process boy names files
    for filename in sorted(os.listdir(html_dir)):
        if filename.startswith('BoyNames') and filename.endswith(('.htm', '.html')):
            filepath = os.path.join(html_dir, filename)
            print(f"Processing: {filename}")
            names = extract_names_from_html(filepath)
            boy_names.extend(names)
        
        elif filename.startswith('GirlNames') and filename.endswith(('.htm', '.html')):
            filepath = os.path.join(html_dir, filename)
            print(f"Processing: {filename}")
            names = extract_names_from_html(filepath)
            girl_names.extend(names)
        
        # Special files
        elif 'Thiruppaavai' in filename and 'Boy' in filename:
            filepath = os.path.join(html_dir, filename)
            print(f"Processing: {filename}")
            names = extract_names_from_html(filepath)
            boy_names.extend(names)
        
        elif 'Thiruppaavai' in filename and 'Girl' in filename:
            filepath = os.path.join(html_dir, filename)
            print(f"Processing: {filename}")
            names = extract_names_from_html(filepath)
            girl_names.extend(names)
    
    # Remove duplicates while preserving order
    def remove_duplicates(names_list):
        seen = set()
        unique = []
        for item in names_list:
            if item['name'] not in seen:
                seen.add(item['name'])
                unique.append(item)
        return unique
    
    boy_names = remove_duplicates(boy_names)
    girl_names = remove_duplicates(girl_names)
    
    # Create output structure
    output = {
        'boys': boy_names,
        'girls': girl_names
    }
    
    # Save to JSON
    output_path = '/workspaces/anbuTamil/frontend/public/names.json'
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print(f"\n✓ Extracted {len(boy_names)} boy names")
    print(f"✓ Extracted {len(girl_names)} girl names")
    print(f"✓ Saved to {output_path}")

if __name__ == '__main__':
    main()
