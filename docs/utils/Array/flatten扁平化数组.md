# `flatten`扁平化数组

将多层嵌套数组（array）拆分成一个数组。

**参数**

- `array`多层嵌套数组

**例子**

```js
flatten([1, [2], [3], [4, 5]])

=> [1, 2, 3, 4, 5]
```

**源码**

```js
// 扁平化  Map 方法
const flatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? flatten(v) : v)))

// 扁平化  reduce 方法
// const flatten = arr => arr.reduce((a, c) => a.concat(Array.isArray(c) ? flatten(c) : c), [])
```
