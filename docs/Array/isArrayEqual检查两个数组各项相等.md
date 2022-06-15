# `isArrayEqual`检查两个数组各项相等

比较两个数组内的各项值是否相等，返回一个`Boolean`值

**参数**

- `array` 要检查的数组
- `array` 要检查的数组

**例子**

```js
isArrayEqual([6, 5, 2, 4, 1, 3], [1, 2, 3, 4, 5, 6])
// => true

isArrayEqual([6, 5, 2, 7, 1, 3], [1, 2, 3, 4, 5, 6])
// => false
```

**源码**

```js
const isArrayEqual = (a, b, has = true) => {
  if (a.length !== b.length) return (has = false)
  const s = new Set(b)
  if (a.find(x => !s.has(x))) return (has = false)
  return has
}
```
