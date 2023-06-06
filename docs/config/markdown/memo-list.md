---
title: Markdown 备忘清单
date: 2023-06-06 09:22:19
categories:
  - config
  - markdown
tags:
  - 
columns:
  - 
---
### 标题 (atx 风格)

```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

### 标题 (setext 风格)

```
Header 1
========
```

```
Header 2
--------
```

### 块引用

```
> 这是一个
> 块引用
>
> > 嵌套
> > 块引用
```

### 无序列表

```
* Item 1
* Item 2
    * item 3a
    * item 3b
```

或者

```
- Item 1
- Item 2
```

或者

```
+ Item 1
+ Item 2
```

或者**任务**列表

```
- [ ] Checkbox off
- [x] Checkbox on
```

### 有序列表

```
1. Item 1
2. Item 2
    a. item 3a
    b. item 3b
```

### 链接

```
[link](http://google.com)

[link][google]
[google]: http://google.com

<http://google.com>
```

### 强调

```
*斜体*    _斜体_    **粗体**   __粗体__

`内联代码`  ~~删除~~
```

### 水平线

### 换行

```
在当前行的结尾加 2 个空格··
这行就会新起一行\
反斜杠也可以换行
```

尾部添加两个空格，或者添加 `\` 反斜杠

### 代码

````

```javascript
console.log("This is a block code")
````

````

```markdown
~~~css
.button { border: none; }
~~~
````

```
    4 空格缩进做一个代码块
```

#### 内联代码

```
`Inline code` 周围有反引号
```

### 表格

```
| 左栏     | 中间栏   | 右栏  |
| -------- | -------- | ----- |
| 单元格 1 | 居中     | $1600 |
| 单元格 2 | 单元格 3 | $12   |
```

简单的风格

```
左栏     | 中间栏   | 右栏  
-------- | -------- | -----
单元格 1 | 居中     | $1600
单元格 2 | 单元格 3 | $12 
```

增加 `:` 改变文字对齐方式

```
左栏     |  中间栏  |   右栏 
:------- | :------: | -----: 
左对齐   |   居中   | 右对齐
```

Markdown 表格生成器：[tableconvert.com](https://tableconvert.com/)

### 脚注 (Footnotes)

```
这是一个简单的脚注[^1]。

一个脚注也可以有多行[^2]。

你也可以使用文字，更贴合你的写作风格[^note]。

[^1]：我的参考。
[^2]：每个新行都应以 2 个空格为前缀。
  这允许你有一个多行的脚注。
[^note]：
    推荐使用数字命名脚注，但文本更容易识别和链接。
    脚注使用了不同的语法，使用 4 个空格作为新行。
```

### 图片

```
![图片名称](http://图片网址/images/logo.png)

![替代文字](url)
```

#### 带链接的图片

```
[![GitHub Logo](/images/logo.png)](https://github.com/)

[![替代文字](image_url)](link_url)
```

#### 参考风格

```
![替代文字][logo]

[logo]: /images/logo.png "Logo Title"
```

### 反斜杠转义

| 字符 | 转义 | 描述 |
| --- | --- | --- |
| \\ | \\\\ | backslash 反斜杠 |
| \` | \\\` | backtick 反引号 |
| \* | \\\* | asterisk 星号 |
| \_ | \\\_ | underscore 下划线 |
| {} | \\{} | curly braces 花括号 |
| \[\] | \\\[\] | square brackets 方括号 |
| () | \\() | parentheses 圆括号 |
| # | \\# | hash mark 哈希标记 |
| + | \\+ | plus sign 加号 |
| \- | \\- | minus sign (hyphen) 减号(连字符) |
| . | \\. | dot 点 |
| ! | \\! | exclamation mark 感叹号 |

### 行内 HTML 元素

```
目前只支持部分段内 HTML 元素效果，包括 <kbd>, <b>, <i>, <em>, <sup>, <sub>, <br>
```