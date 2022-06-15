# padStart填充左侧字符

如果`string`字符串长度小于 `length` 则在左侧填充字符。 如果超出`length`长度则截断超出的部分。

```js
padStart(str, n = 0, maskChar = " ")
```

**参数**
1. `[str='']`: 要填充的字符串。
2. `[n=0]`: 填充的长度。
3. `[maskChar=' ']`: 填充字符。

**返回**
返回填充后的字符串。

**例子**

```js
padStart('abc', 6);
// => '   abc'
 
padStart('abc', 6, '*');
// => '***abc'
 
padStart('abc', 3);
// => 'abc'
```

**源码**

```js
const padStart = (str, n = 0, maskChar = ' ') => String(str).slice(0, n).padStart(n, maskChar)
```