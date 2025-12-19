import glob
import re

def remove_emojis(text):
    # Matches Main Emojis, Pictographs, Transport/Map, Misc Symbols, Dingbats
    emoji_pattern = re.compile(
        u'[\U0001F000-\U0001FAFF'
        u'\U00002600-\U000027BF'
        u'\U00002300-\U000023FF' 
        u'\U00002B50-\U00002B55]' 
        , flags=re.UNICODE
    )
    return emoji_pattern.sub(r'', text)

files = glob.glob('docs/components/*.md')

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = remove_emojis(content)
    
    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned {file_path}")
    else:
        print(f"No emojis in {file_path}")
