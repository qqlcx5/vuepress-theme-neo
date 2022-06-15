# `thousands`数字每隔三位数加分号

```js
thousands(number, chars=',')
```

**返回**
返回填充后的字符串。

**参数**

1. `number` 数字或者浮点数
2. `chars` 填充字符

**例子**

```js
thousands(12255552323)
// => 12,255,552,323

thousands(12255552323, '、')
// => 12、255、552、323
```

**源码**

```js
const thousands = (num, chars=',') => String(num).replace(String(num).indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g, `$1${chars}`)
```