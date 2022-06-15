# `calcFn`加减乘除运算

因为 JavaScript 遵循 IEEE 754 数学标准，使用 64 位浮点数进行运算。在进行十进制运算时会导致精度丢失。

```js
calcFn.add(value1, value2, value3)
```

**参数**

-   `add`、`sub`、`mul`、`div`运算符
-   `value`要计算的值

**例子**

```js
解决 0.1+0.2 !== 0.3 问题
//加法
calcFn.add(0.1, 0.2) // 0.3

//减法
calcFn.sub(0.1, 0.2) // 0.1

//乘法
calcFn.mul(0.2, 0.3) // 0.06

// 乘法
calcFn.add(0.1, 0.2) // 0.5
```

**源码**

```js
const calcFn = {
  add() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accAdd(total, num);
      });
  },
  sub() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accAdd(total, -num);
      });
  },
  mul() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accMul(total, num);
      });
  },
  div() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accDiv(total, num);
      });
  }
}

function accAdd(arg1, arg2) {
  let r1, r2, m;
  try {
      r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
      r1 = 0;
  }
  try {
      r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
      r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}

function accMul(arg1, arg2) {
  let m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
  try {
      m += s1.split(".")[1].length;
  } catch (e) {}
  try {
      m += s2.split(".")[1].length;
  } catch (e) {}
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

function accDiv(arg1, arg2) {
  let t1 = 0,
      t2 = 0,
      r1, r2;
  try {
      t1 = arg1.toString().split(".")[1].length;
  } catch (e) {}
  try {
      t2 = arg2.toString().split(".")[1].length;
  } catch (e) {}
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}
```