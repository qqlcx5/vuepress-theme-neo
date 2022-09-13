---
title: getLineSize计算两点之间的距离
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Number
  - getLineSize
tags: 
  - getLineSize
---
# `getLineSize`计算两点之间的距离

勾股定理计算两点之间的距离

```js
getLineSize = (x1, y1, x2, y2)
```

**参数**

- `x1 y1 x2 y2`坐标点

**例子**

```js
getLineSize(0, 0, 3, 4)
// => 5
```

**源码**

```js
const getLineSize = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
```
