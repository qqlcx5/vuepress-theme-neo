---
title: FXML 介绍
date: 2024-02-01 16:02:58
tags: []
source: https://www.finclip.com/mop/document/develop/frameInterface/config/project.html
author:
---

# FXML 介绍

---

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#fxml-%E4%BB%8B%E7%BB%8D) FXML 介绍

FXML（ Markup Language）是框架设计的一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。

用以下一些简单的例子来看看 FXML 具有什么能力：

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_1-%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A) 1. 数据绑定

```
<span>&lt;!--fxml--&gt;</span>
<span><span><span>&lt;</span>view</span><span>&gt;</span></span> {{message}} <span><span><span>&lt;/</span>view</span><span>&gt;</span></span>
// page.js
Page({
  data: {
    message: 'Hello World!'
  }
})
```

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_2-%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93) 2. 列表渲染

```
<span>&lt;!--fxml--&gt;</span>
<span><span><span>&lt;</span>view</span> <span><span>wx:</span>for</span><span><span>=</span><span>"</span>{{array}}<span>"</span></span><span>&gt;</span></span> {{item}} <span><span><span>&lt;/</span>view</span><span>&gt;</span></span>
// page.js
Page({
  data: {
    array: [1, 2, 3, 4, 5]
  }
})
```

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_3-%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93) 3. 条件渲染

```
<span>&lt;!--fxml--&gt;</span>
<span><span><span>&lt;</span>view</span> <span><span>wx:</span>if</span><span><span>=</span><span>"</span>{{view == 'WEBVIEW'}}<span>"</span></span><span>&gt;</span></span> WEBVIEW <span><span><span>&lt;/</span>view</span><span>&gt;</span></span>
<span><span><span>&lt;</span>view</span> <span><span>wx:</span>elif</span><span><span>=</span><span>"</span>{{view == 'APP'}}<span>"</span></span><span>&gt;</span></span> APP <span><span><span>&lt;/</span>view</span><span>&gt;</span></span>

// page.js
Page({
  data: {
    view: 'APP'
  }
})
```

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_4-%E6%A8%A1%E6%9D%BF) 4. 模板

```
<span>&lt;!--fxml--&gt;</span>
<span><span><span>&lt;</span>template</span> <span>name</span><span><span>=</span><span>"</span>staffName<span>"</span></span><span>&gt;</span></span>
  <span><span><span>&lt;</span>view</span><span>&gt;</span></span>
    FirstName: {{firstName}}, LastName: {{lastName}}
  <span><span><span>&lt;/</span>view</span><span>&gt;</span></span>
<span><span><span>&lt;/</span>template</span><span>&gt;</span></span>

<span><span><span>&lt;</span>template</span> <span>is</span><span><span>=</span><span>"</span>staffName<span>"</span></span> <span>data</span><span><span>=</span><span>"</span>{{...staffA}}<span>"</span></span><span>&gt;</span></span><span><span><span>&lt;/</span>template</span><span>&gt;</span></span>
<span><span><span>&lt;</span>template</span> <span>is</span><span><span>=</span><span>"</span>staffName<span>"</span></span> <span>data</span><span><span>=</span><span>"</span>{{...staffB}}<span>"</span></span><span>&gt;</span></span><span><span><span>&lt;/</span>template</span><span>&gt;</span></span>
<span><span><span>&lt;</span>template</span> <span>is</span><span><span>=</span><span>"</span>staffName<span>"</span></span> <span>data</span><span><span>=</span><span>"</span>{{...staffC}}<span>"</span></span><span>&gt;</span></span><span><span><span>&lt;/</span>template</span><span>&gt;</span></span>
```

```
<span>// page.js</span>
<span>Page</span><span>(</span><span>{</span>
  <span>data</span><span>:</span> <span>{</span>
    <span>staffA</span><span>:</span> <span>{</span><span>firstName</span><span>:</span> <span>'Alex'</span><span>,</span> <span>lastName</span><span>:</span> <span>'Wang'</span><span>}</span><span>,</span>
    <span>staffB</span><span>:</span> <span>{</span><span>firstName</span><span>:</span> <span>'Yuran'</span><span>,</span> <span>lastName</span><span>:</span> <span>'Wu'</span><span>}</span><span>,</span>
    <span>staffC</span><span>:</span> <span>{</span><span>firstName</span><span>:</span> <span>'Arron'</span><span>,</span> <span>lastName</span><span>:</span> <span>'Liu'</span><span>}</span>
  <span>}</span>
<span>}</span><span>)</span>
```

具体的能力以及使用方式可在本目录中各章节查看。
