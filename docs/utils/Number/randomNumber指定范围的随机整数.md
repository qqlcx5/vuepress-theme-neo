# `randomNumber`指定范围的随机整数

```js
randomNumber(min, max)
```

**参数**

-   `min` 指定范围最小值
-   `max` 指定范围最大值

**例子**

```js
randomNumber(0, 10)
// => 7
// => 2
```

**源码**

```js
const randomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min
```