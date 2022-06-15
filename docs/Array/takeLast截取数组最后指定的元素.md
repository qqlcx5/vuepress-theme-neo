# `takeLast`截取数组末尾元素

从 array 数组的最后一个元素开始提取 n 个元素

```js
takeLast(array, n)
```

**参数**

-   `array`要检索的数组。
-   `n=`要提取的元素`n`个数。

**例子**

```js
take([2, 3, 1], 2)
// => [3, 1]
```

**源码**

```js
const takeLast = (arr, n = 1) => arr.slice(0, -n)
```
