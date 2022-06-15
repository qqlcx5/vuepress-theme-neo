# `uniqueBy`数组对象去重

创建一个去重后的 array 数组对象副本

```js
uniqueBy(array)
```

**参数**

-   `array` 要去重的数组
-   `key` 要去重的对象属性值

**例子**

```js
const responseList = [
    { id: 1, a: 1 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
]

uniqueBy(responseList, 'id')

// => [ { id: 1, a: 1 }, { id: 2, a: 2 }, { id: 3, a: 3 } ]
```

**源码**

```js
const uniqueBy = (arr, key) => {
    return arr.reduce((acc, cur) => {
        const ids = acc.map(item => item[key])
        return ids.includes(cur[key]) ? acc : [...acc, cur]
    }, [])
}
```