# pip install beautifulsoup4 requests
from bs4 import BeautifulSoup

# 假设html_content是你的HTML内容，你可以从文件、网络请求等方式获取
html_content = """
 
"""

# 使用BeautifulSoup解析HTML
soup = BeautifulSoup(html_content, 'html.parser')

# 提取信息
users = []  # 用于存储所有用户信息的列表
for div in soup.find_all("div", class_="QxZvDLx8"):
    user_info = {}
    user_info['nickname'] = div.find("span", class_="j5WZzJdp").text.strip()
    user_info['avatar'] = div.find("img")['src']
    user_info['profile_url'] = div.find("a")['href']

    description_div = div.find("div", class_="GX4mmsDi")
    if description_div is not None:
        user_info['description'] = description_div.text.strip()
    else:
        user_info['description'] = "No description"  # 或者你可以选择其他默认值

    extra_description = div.find_next_sibling("div")
    if extra_description:
        user_info['extra_description'] = extra_description.text.strip()
    else:
        user_info['extra_description'] = None
    users.append(user_info)

# 打印提取的信息
with open('users.txt', 'w', encoding='utf-8') as f:
    for user in users:
        f.write(str(user) + '\n')
