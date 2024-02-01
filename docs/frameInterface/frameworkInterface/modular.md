---
title: 模块化
date: 2024-02-01 15:24:56
tags: []
order: 40
source: https://www.finclip.com/mop/document/develop/frameInterface/config/project.html
author: null
categories: 
  - frameInterface
  - frameworkInterface
columns: 
  - 
---

# 模块化 
---
## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#%E6%A8%A1%E5%9D%97%E5%8C%96) 模块化

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_1-required) 1. required

引入模块。返回模块通过 module.exports 或 exports 暴露的接口。

**参数**

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| path | string | 需要引入模块文件相对于当前文件的相对路径，或npm模块名，或npm模块路径。不支持绝对路径 |

**示例代码**

```
<span>// common.js</span>
<span>function</span> <span>sayHello</span><span>(</span><span>name</span><span>)</span> <span>{</span>
  console<span>.</span><span>log</span><span>(</span><span><span>`</span><span>Hello </span><span><span>${</span>name<span>}</span></span><span> !</span><span>`</span></span><span>)</span>
<span>}</span>
<span>function</span> <span>sayGoodbye</span><span>(</span><span>name</span><span>)</span> <span>{</span>
  console<span>.</span><span>log</span><span>(</span><span><span>`</span><span>Goodbye </span><span><span>${</span>name<span>}</span></span><span> !</span><span>`</span></span><span>)</span>
<span>}</span>

module<span>.</span>exports<span>.</span>sayHello <span>=</span> sayHello
exports<span>.</span>sayGoodbye <span>=</span> sayGoodbye
```

```
<span>var</span> common <span>=</span> <span>require</span><span>(</span><span>'common.js'</span><span>)</span>
<span>Page</span><span>(</span><span>{</span>
  <span>helloMINA</span><span>:</span> <span>function</span><span>(</span><span>)</span> <span>{</span>
    common<span>.</span><span>sayHello</span><span>(</span><span>'MINA'</span><span>)</span>
  <span>}</span><span>,</span>
  <span>goodbyeMINA</span><span>:</span> <span>function</span><span>(</span><span>)</span> <span>{</span>
    common<span>.</span><span>sayGoodbye</span><span>(</span><span>'MINA'</span><span>)</span>
  <span>}</span>
<span>}</span><span>)</span>
```

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_2-module) 2. module

当前模块对象

**属性**

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| exports | Object | 模块向外暴露的对象，使用require引用该模块时可以获取 |

**示例代码**

```
<span>// common.js</span>
<span>function</span> <span>sayHello</span><span>(</span><span>name</span><span>)</span> <span>{</span>
  console<span>.</span><span>log</span><span>(</span><span><span>`</span><span>Hello </span><span><span>${</span>name<span>}</span></span><span> !</span><span>`</span></span><span>)</span>
<span>}</span>
<span>function</span> <span>sayGoodbye</span><span>(</span><span>name</span><span>)</span> <span>{</span>
  console<span>.</span><span>log</span><span>(</span><span><span>`</span><span>Goodbye </span><span><span>${</span>name<span>}</span></span><span> !</span><span>`</span></span><span>)</span>
<span>}</span>

module<span>.</span>exports<span>.</span>sayHello <span>=</span> sayHello
exports<span>.</span>sayGoodbye <span>=</span> sayGoodbye
```

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_3-exports) 3. exports

module.exports 的引用  


**示例代码**

```
<span>// common.js</span>
<span>function</span> <span>sayHello</span><span>(</span><span>name</span><span>)</span> <span>{</span>
  console<span>.</span><span>log</span><span>(</span><span><span>`</span><span>Hello </span><span><span>${</span>name<span>}</span></span><span> !</span><span>`</span></span><span>)</span>
<span>}</span>
<span>function</span> <span>sayGoodbye</span><span>(</span><span>name</span><span>)</span> <span>{</span>
  console<span>.</span><span>log</span><span>(</span><span><span>`</span><span>Goodbye </span><span><span>${</span>name<span>}</span></span><span> !</span><span>`</span></span><span>)</span>
<span>}</span>

module<span>.</span>exports<span>.</span>sayHello <span>=</span> sayHello
exports<span>.</span>sayGoodbye <span>=</span> sayGoodbye
```
