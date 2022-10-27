---
title: padEnd填充右侧字符
date: 2022-06-15 17:20:46
categories: 
  - utils
  - String
  - padEnd
tags: 
  - padEnd
columns: 
  - 
---
# padEnd填充右侧字符

如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分。

```js
padEnd(str, n = 0, maskChar = " ")
```

**参数**

1. `[str='']`: 要填充的字符串。
2. `[n=0]`: 填充的长度。
3. `[maskChar=' ']`: 填充字符。

**返回**
返回填充后的字符串。

**例子**

```js
padEnd('abc', 6);
// => 'abc   '
 
padEnd('abc', 6, '*');
// => 'abc***'
 
padEnd('abc', 3);
// => 'abc'
```

**源码**

```js
const padEnd = (str, n = 0, maskChar = " ") => String(str).slice(0, n).padEnd(n, maskChar)
```
