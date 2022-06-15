# `sortDesc`数组降序

返回降序后的新数组


**参数**

-   `array` 要检查的排序数组

**例子**

```js
sortDesc([3, 2, 3, 4, 1])
// => [ 1, 2, 3, 3, 4 ]
```

**源码**

```js
const sortDesc = arr => [...arr].sort((a, b) => b - a)
```