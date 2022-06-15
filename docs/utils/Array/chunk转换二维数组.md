# `chunk`转换二维数组

将数组（array）拆分成多个子数组，并将这些子数组组成一个新数组。

**参数**

- `array`

- `count = 8`子数组需要的长度

**例子**

```js
chunk([1, 2, 3, 4, 5, 6, 7], 2)
=> [[1, 2], [3, 4], [5, 6], [7]]

chunk(['a', 'b', 'c', 'd'], 3)
=> [['a', 'b', 'c'], ['d']]
```

**源码**

```js
function chunk(array, count = 8) {
    let pages = []
    array.forEach((item, index) => {
        const page = Math.floor(index / count)
        if (!pages[page]) pages[page] = []
        pages[page].push(item)
    })
    return pages
}
```
