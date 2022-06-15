# `aboutEqual`两个值是否约等于

传入两个数字是否大致相等，误差在可接受范围内

```js
aboutEqual(n1, n2, epsilon)
```

**参数**

-   `n1 n2` 要比较的数字
-   `epsilon` 误差可接受范围内

**例子**

```js
aboutEqual(25, 2, 0.06)
// => true
```

**源码**

```js
const aboutEqual = (n1, n2, epsilon = 0.001) => Math.abs(n1 - n2) < epsilon
```