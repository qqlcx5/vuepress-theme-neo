---
title: Page
date: 2024-02-01 15:23:29
tags: []
order: 20
source: https://www.finclip.com/mop/document/develop/frameInterface/config/project.html
author: null
categories: 
  - frameInterface
  - frameworkInterface
columns: 
  - 
---

# Page 
---
## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#page) Page

注册小程序中的一个页面。接受一个 Object 类型参数，其指定页面的初始数据、生命周期回调、事件处理函数等。

扩展功能：可以创建一个xxx.ext.json文件。 该文件会和页面json文件合并，优先使用xxx.ext.json中的配置(组件同理)

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_1-%E5%8F%82%E6%95%B0) 1. 参数

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| data | Object |  |  | 页面的初始数据 |
| onLoad | function |  |  | 生命周期回调—监听页面加载 |
| onShow | function |  |  | 生命周期回调—监听页面显示 |
| onReady | function |  |  | 生命周期回调—监听页面初次渲染完成 |
| onHide | function |  |  | 生命周期回调—监听页面隐藏 |
| onUnload | function |  |  | 生命周期回调—监听页面卸载 |
| onPullDownRefresh | function |  |  | 监听用户下拉动作 |
| onReachBottom | function |  |  | 页面上拉触底事件的处理函数 |
| onTabItemTap | function |  |  | 当前是 tab 页时，点击 tab 时触发 |
| onShareAppMessage | function |  |  | 用户点击右上角转发 |
| onPageScroll | function |  |  | 页面滚动触发事件的处理函数 |
| 其他 | any |  |  | 开发者可以添加任意的函数或数据到 Object 参数中，在页面的函数中用 this 可以访问 |

#### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#onshareappmessage) onShareAppMessage

监听用户点击右上角菜单“转发”按钮的行为，并自定义转发内容。

**参数**

| 参数 | 类型 | 说明 | 最低版本 |
| --- | --- | --- | --- |
| title | String |  | 1.0.0 |
| desc | String |  | 1.0.0 |
| imageUrl | String |  | 1.0.0 |
| path | String |  | 1.0.0 |
| from | String | 目前只有'menu'值 | 1.0.0 |
| webViewUrl | String | 页面中包含 WebView 组件时，返回当前 WebView 的url | 1.0.0 |

此事件处理函数需要 return 一个 Object，用于自定义转发内容。返回数据最终透传给宿主app。

开发者通过onShareAppMessage返回以上数据之后，宿主app接收到的数据格式如下：

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_2-data) 2. data

data 是页面第一次渲染使用的初始数据。

页面加载时，data 将会以JSON字符串的形式由逻辑层传至渲染层，因此data中的数据必须是可以转成JSON的类型：字符串，数字，布尔值，对象，数组。

渲染层可以通过 WXML 对数据进行绑定。

**示例代码**

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_3-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0) 3. 生命周期回调函数

#### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#onload-object-query) onLoad(Object query)

页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。

#### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#onshow) onShow()

页面显示/切入前台时触发。

#### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#onready) onReady()

页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。

#### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#onhide) onHide()

页面隐藏/切入后台时触发。 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等。

#### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#onunload) onUnload()

页面卸载时触发。如 redirectTo或 navigateBack到其他页面时。

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_4-%E9%A1%B5%E9%9D%A2%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0) 4. 页面事件处理函数

#### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#onpulldownrefresh) onPullDownRefresh()

监听用户下拉刷新事件。

-   需要在app.json的window选项中或页面配置中开启enablePullDownRefresh。
-   可以通过ft.startPullDownRefresh触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
-   当处理完数据刷新后，ft.stopPullDownRefresh可以停止当前页面的下拉刷新。

#### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#onreachbottom) onReachBottom()

监听用户上拉触底事件。

-   可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
-   在触发距离内滑动期间，本事件只会被触发一次。

#### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#onpagescroll-object-object) onPageScroll(Object object)

监听用户滑动页面事件。

**参数** **Object object**

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| scrollTop | Number | 页面在垂直方向已滚动的距离（单位px） |

注意

-   请只在需要的时候才在 page 中定义此方法，不要定义空方法。以减少不必要的事件派发对渲染层-逻辑层通信的影响。
-   请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作。尤其是每次传输大量数据，会影响通信耗时。

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_5-%E7%BB%84%E4%BB%B6%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0) 5. 组件事件处理函数

Page 中还可以定义组件事件处理函数。在渲染层的组件中加入事件绑定，当事件被触发时，就会执行 Page 中定义的事件处理函数。

**示例代码**

#### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#page-route) Page.route

到当前页面的路径，类型为String。

#### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#page-prototype-setdata-object-data-function-callback) Page.prototype.setData(Object data, Function callback)

setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）。

**参数说明**

| 字段 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| data | Object | 是 | 这次要改变的数据 |
| callback | Function | 否 | setData引起的界面更新渲染完毕后的回调函数 |

Object 以 key: value 的形式表示，将 this.data 中的 key 对应的值改变成 value。  
其中 key 可以以数据路径的形式给出，支持改变数组中的某一项或对象的某个属性，如 array\[2\].message，a.b.c.d，并且不需要在 this.data 中预先定义。  


注意

1.  直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
2.  仅支持设置可 JSON 化的数据。
3.  单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
4.  请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题。



**示例代码**

#### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#pageobject-getcurrentpages) PageObject\[\] getCurrentPages()

获取当前页面栈。数组中第一个元素为首页，最后一个元素为当前页面。

注意

1.  不要尝试修改页面栈，会导致路由以及页面状态错误。

2.  不要在 App.onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。