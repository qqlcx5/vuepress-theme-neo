# `min`数组中最小值

过滤原数组中所有的非假值元素，返回数组中的最小值

```js
min(array)
```

**参数**

-   `array`待处理的数组

**例子**

```js
min([0, -1, -2, -3, false])
// => -3
```

**源码**

```js
const min = arr => Math.min(...arr.filter(v => Boolean(v) || v === 0))
```