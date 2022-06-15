# `flattenDeep`指定层级扁平化数组

将多层嵌套数组（array）拆分成指定层级数组.

**参数**

- `array`多层嵌套数组 `depth = 1` 减少的嵌套层级数

**例子**

```js
flattenDeep([1, [2, [3, [4]], 5]], 1)
// => [1, 2, [3, [4]], 5]
```

**源码**

```js
const flattenDeep = (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), [])

// ES6方法 `flat(depth)`
// [1, [2, [3, [4]], 5]].flat(1)
// => [1, 2, [3, [4]], 5]
```
