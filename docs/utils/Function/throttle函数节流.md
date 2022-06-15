# `throttle`函数节流

规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

```js
throttle(fn, wait)
```

**参数**

-   `fn` 要节流的函数
-   `wait=500`需要延迟的毫秒数

**例子**

```js
throttle(() => {
    console.log('throttle')
}, 1000)
// 1秒多次触发打印一次`throttle`
```

**源码**

```js
/** *
 * 节流(规定的时间才触发)
 * @parmas fn 结束完运行的回调
 * @parmas delay 规定时间
 */
export const throttle = (function () {
    let timeout = null
    return function (func, wait) {
        let context = this
        let args = arguments
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                func.apply(context, args)
            }, wait)
        }
    }
})()

throttle(fn, 300)
```