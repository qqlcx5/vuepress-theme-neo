# `debounce`函数防抖

在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。

```js
debounce(fn, wait)
```

**参数**

-   `fn` 要防抖动的函数
-   `wait=500`需要延迟的毫秒数

**例子**

```
debounce(()=> { console.log('debounce') }, 1000)
// => 1秒后打印'debounce'
```

**源码**

```js
/** *
 * 防抖
 * @parmas fn 回调函数
 * @parmas time 规定时间
 */
const debounce = (function () {
    let timer = {}
    return function (func, wait = 500) {
        let context = this // 注意 this 指向
        let args = arguments // arguments中存着e
        let name = arguments[0].name || 'arrow' //箭头函数
        if (timer[name]) clearTimeout(timer[name])
        timer[name] = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
})()
```