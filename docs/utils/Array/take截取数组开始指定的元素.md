# `take`截取数组开始指定的元素

从 array 数组的最开始一个元素开始提取 n 个元素

```js
take(array, n)
```

**参数**

-   `array`要检索的数组。
-   `n=1`要提取的元素`n`个数。

**例子**

```js
take([2, 3, 1], 2)
// => [2, 3]
```

**源码**

```js
const take = (arr, n = 1) => arr.slice(0, n)
```
