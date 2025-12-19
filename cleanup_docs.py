import os
import re

docs_path = r'c:\Users\LAPTOP LAB\Desktop\ba-book\docs\components'

# Regex to match headers containing "Installation" (e.g., ## Installation, ## Installation / Import)
# and everything following it up to the next double-hash header.
pattern = re.compile(r'## .*Installation.*?\n(.*?)(?=\n## )', re.DOTALL | re.IGNORECASE)

def clean_docs():
    for filename in os.listdir(docs_path):
        if filename.endswith('.md') or filename.endswith('.mdx'):
            file_path = os.path.join(docs_path, filename)
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove the Installation section including the header itself
            new_content = re.sub(r'## .*Installation.*?(?=\n## |\Z)', '', content, flags=re.DOTALL | re.IGNORECASE)
            
            # Clean up extra redundant newlines that might be left behind
            new_content = re.sub(r'\n{3,}', '\n\n', new_content)
            
            if content != new_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Cleaned: {filename}")
            else:
                print(f"No changes for: {filename}")

if __name__ == "__main__":
    clean_docs()
