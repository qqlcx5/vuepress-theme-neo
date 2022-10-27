---
title: shuffle 打乱数组 sticky 12
date: 2022-06-15 17:20:46
categories: 
  - utils
  - Array
  - shuffle
tags: 
  - shuffle
sticky: 12
columns: 
  - 
---
# shuffle 打乱数组

创建一个打乱的数组，使用`Fisher-Yates`算法打乱数组的元素

```js
shuffle(array)
```

**参数**

- `array` 要打乱的数组

**例子**

```js
shuffle([2, 3, 1])
// => [3, 1, 2]
```

**源码**

```js
const shuffle = ([...arr]) => {
    let m = arr.length
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]]
    }
    return arr
}
```
