# `difference`

创建一个具有唯一`array`值的数组，每个值不包含在其他给定的数组中。

假设有 A 和 B 两个数组，返回 A 数组中的集合不包含 B 数组中的集合。

返回

**参数**

- `array1` 要检查的数组
- `array2`要排除的数组

**例子**

```js
difference([1, 2, 6, 7], [1, 2, 9, 5])
// => [ 6, 7 ]
```

**源码**

```js
const difference = (a, b) => {
  const s = new Set(b)
  let arr = a.filter(x => !s.has(x))
  return arr
}
```
