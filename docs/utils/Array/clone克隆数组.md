---
title: clone 拷贝数组 sticky 2
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
tags: 
  - clone
sticky: 2
---
# clone 拷贝数组

浅拷贝一份数组副本

**参数**

- `array`要复制的数组

**例子**

```js
clone([1, 24])
// => [1, 24]
```

**源码**

```js
// ES6 ...
const clone = arr => [...arr]

// ES6 Array.from
const clone = arr => Array.from(arr)

// concat()
const clone = arr => [].concat(arr)

// map()
const clone = arr => arr.map(x => x)

clone([1, 24]) // [1, 24]
```
