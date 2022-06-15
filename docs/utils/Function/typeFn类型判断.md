# `typeFn`类型判断

判断是否是 `Array` `Object` `String` `Number`类型

```js
typeFn.type(value)
```

**参数**

-   `type` 数据类型
-   `value`要检验的值

**例子**

```js
typeFn.String('1')
typeFn.Number(1)
typeFn.Boolean(false)
typeFn.Null(null)
typeFn.Array([1, 2])
typeFn.Object({ a: 1 })
typeFn.Function(() => {})

// => true
```

**源码**

```js
let typeFn = {}
const curring = (fn, arr = []) => {
    let len = fn.length
    return (...args) => {
        arr = arr.concat(args)
        if (arr.length < len) {
            return curring(fn, arr)
        }
        return fn(...arr)
    }
}

function isType(type, content) {
    return Object.prototype.toString.call(content) === `[object ${type}]`
}
;['String', 'Number', 'Boolean', 'Null', 'Array', 'Object', 'Function'].forEach(type => {
    typeFn[type] = curring(isType)(type)
})
```
