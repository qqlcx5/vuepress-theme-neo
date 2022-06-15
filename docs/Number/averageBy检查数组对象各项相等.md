# `averageBy`检查数组对象各项相等

```
averageBy(array, fn)
```

**参数**

-   `array` 要迭代的数组
-   `fn` 迭代函数

**例子**

```js
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n)
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')
// => 5
```

**源码**

```js
const averageBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length
```