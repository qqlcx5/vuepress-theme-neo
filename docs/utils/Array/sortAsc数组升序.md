# `sortAsc`数组升序

返回升序后的新数组

> sort()方法会改变原数组，默认按 unicode 码顺序排列

```js
sortAsc(array)
```

**参数**

- `array` 要检查的排序数组

**例子**

```js
sortAsc([3, 2, 3, 4, 1])
// => [ 1, 2, 3, 3, 4 ]
```

**源码**

```js
// 通过ES6 ...展开运算符浅拷贝一份新数组
const sortAsc = arr => [...arr].sort((a, b) => a - b)
```
