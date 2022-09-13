---
title: intersection数组交集
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
  - intersection
tags: 
  - intersection
sticky: 1
---
# `intersection`数组集合

创建一个共有的`array`值的数组，每个值包含在其他给定的数组中。

**参数**

- `array` 要检查的数组
- `array2`要包含的数组

**例子**

```js
intersection([1, 2, 6, 7], [1, 2, 9, 5])
// => [ 1, 2 ]
```

**源码**

```js
const intersection = (a, b) => {
    const s = new Set(b)
    return a.filter(x => s.has(x))
}
// ES6 includes
const intersection = (arr, values) => arr.filter(v => values.includes(v))
```
