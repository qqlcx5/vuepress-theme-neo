# `accum`数组中值总和

```js
accum(value1, value2, value3)
```

**参数**

-   `value1 value2 value3`要迭代的数字

**例子**

```js
accum(1, 2, 3, 4)
accum(...[1, 2, 3, 4])
// => 10
```

**源码**

```js
const accum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0)
```