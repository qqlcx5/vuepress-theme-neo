# `average`求平均值

```js
average(value1, value2, value3)
```

**参数**

-   `value` 数字

**例子**

```js
average(...[1, 2, 3])
average(1, 2, 3)
// => 2
```

**源码**

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length
```