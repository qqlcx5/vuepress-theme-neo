# `unique`数组去重

创建一个去重后的 array 数组副本

**参数**

- `array` 要去重的数组

**例子**

```js
unique([1, 2, 2, 3, 4, 4, 5])
// => [ 1, 2, 3, 4, 5 ]
```

**源码**

```js
const unique = (...arr) => [...new Set(arr)]

const unique = (...arr) => Array.from(new Set(arr))
```
