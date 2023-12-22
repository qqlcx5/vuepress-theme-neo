---
title: min 数组中最大值
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
  - min
tags: 
  - min
sticky: 10
columns: 
  - null
---

# min 数组中最大值

过滤原数组中所有的非假值元素，返回数组中的最小值

```js
min(array)
```

**参数**

- `array`待处理的数组

**例子**

```js
min([0, -1, -2, -3, false])
// => -3
```

**源码**

```js
const min = arr => Math.min(...arr.filter(v => Boolean(v) || v === 0))
```
