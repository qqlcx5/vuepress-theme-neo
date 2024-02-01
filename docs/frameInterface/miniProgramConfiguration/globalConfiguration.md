---
title: 全局配置
date: 2024-02-01 15:19:31
tags: []
order: 20
source: https://www.finclip.com/mop/document/develop/frameInterface/config/project.html
author: null
categories: 
  - frameInterface
  - miniProgramConfiguration
columns: 
  - 
---
 
# 全局配置 
---
## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE) 全局配置

小程序根目录下的`app.json`文件用来对小程序进行全局配置。文件内容为一个 JSON 对象。

扩展功能

可以创建一个`app.ext.json`文件。 该文件会和`app.json`合并，优先使用`app.ext.json`中的配置(页面、组件同理)

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_1-%E9%85%8D%E7%BD%AE%E9%A1%B9) 1. 配置项

| 属性 | 类型 | 必填 | 描述 | 最低版本 |
| --- | --- | --- | --- | --- |
| entryPagePath | string | 否 | 小程序默认启动首页 |  |
| pages | string\[\] | 是 | 页面路径列表 |  |
| window | Object | 否 | 全局的默认窗口表现 |  |
| tabBar | Object | 否 | 底部 tab 栏的表现 |  |
| debug | boolean | 否 | 是否开启 debug 模式，默认关闭 |  |
| subpackages | Object\[\] | 否 | 分包结构配置 | 2.10.1 |
| plugins | Object | 否 | 使用到的插件 | 2.11.1 |
| preloadRule | Object | 否 | 分包预下载规则 | 2.11.1 |
| resizable | boolean | 否 | PC 小程序是否支持用户任意改变窗口大小（包括最大化窗口）；iPad 小程序是否支持屏幕旋转。默认关闭 | 2.3.0 |
| usingComponents | Object | 否 | 全局自定义组件配置 |  |
| style | string | 否 | 指定使用升级后的weui样式 | 2.11.1 |
| useExtendedLib | Object | 否 | 指定需要引用的扩展库 | 2.12.2 |
| darkmode | boolean | 否 | 小程序支持 DarkMode | 2.11.8 |
| themeLocation | string | 否 | 指明 theme.json 的位置，darkmode为true为必填 | 2.11.8 |
| networkTimeout | Object | 否 | 网络超时时间 |  |
| requiredBackgroundModes | Object | 否 | 需要在后台使用的能力，如「音乐播放」 |  |

| 名称 | 功能说明 |
| --- | --- |
| entranceDeclare | 微信消息用小程序打开 |
| functionalPages | 是否启用插件功能页，默认关闭 |
| permission | 小程序接口权限相关设置 |
| sitemapLocation | 指明 sitemap.json 的位置 |
| workers | Worker 代码放置的目录 |
| lazyCodeLoading | 配置自定义组件代码按需注入 |
| singlePage | 单页模式相关配置 |
| supportedMaterials | 聊天素材小程序打开相关配置 |
| serviceProviderTicket | 定制化型服务商票据 |
| embeddedAppIdList | 半屏小程序 appId |
| halfPage | 视频号直播半屏场景设置 |

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#entrypagepath) entryPagePath

指定小程序的默认启动路径（首页），如果不填，将默认为 pages 列表的第一项。不支持带页面路径参数。

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#pages) pages

用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。文件名不需要写文件后缀，框架会自动去寻找对应位置的 .json, .js, .fxml, .ftss 四个文件进行处理。

未指定 entryPagePath 时，数组的第一项代表小程序的初始页面（首页）。

小程序中新增/减少页面，都需要对 pages 数组进行修改。

如开发目录为：

则需要在 app.json 中写

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#window) window

用于设置小程序的状态栏、导航条、标题、窗口背景色。

| 属性 | 类型 | 默认值 | 描述 | 最低版本 |
| --- | --- | --- | --- | --- |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如 #000000 |  |
| navigationBarTextStyle | string | white | 导航栏标题颜色，仅支持 black / white |  |
| navigationBarTitleText | string |  | 导航栏标题文字内容 |  |
| navigationStyle | string | default | 导航栏样式，仅支持以下值：1. default（默认样式）, 2. custom（自定义导航栏，只保留右上角胶囊按钮，对 web-view 组件无效）, 3.customV2（自定义导航栏，只保留右上角胶囊按钮）, 4.hide（隐藏导航栏和右上角胶囊按钮） |  |
| navigationBarHideCloseButton | Boolean | false | 隐藏胶囊关闭按钮 |  |
| navigationBarHideMoreButton | Boolean | false | 隐藏胶囊菜单按钮 |  |
| backgroundColor | HexColor | #ffffff | 窗口的背景色 |  |
| backgroundTextStyle | string | dark | 下拉 loading 的样式，仅支持 dark / light |  |
| backgroundColorTop | string | #ffffff | 顶部窗口的背景色，仅 iOS 支持 |  |
| backgroundColorBottom | string | #ffffff | 底部窗口的背景色，仅 iOS 支持 |  |
| enablePullDownRefresh | boolean | false | 是否开启全局的下拉刷新。详见 Page.onPullDownRefresh |  |
| pageOrientation | string | portrait | 屏幕旋转设置，支持 auto / portrait / landscape 详见 响应显示区域变化 | 2.4.0 (auto) / 2.5.0 (landscape) |
| initialRenderingCache | string |  | 页面初始渲染缓存配置，支持 static / dynamic | 2.10.1 |
| onReachBottomDistance | 页面上拉触底事件触发时距页面底部距离，单位为 px。详见 Page.onReachBottom | 2.12.8 |  |  |

| 名称 | 功能说明 |
| --- | --- |
| restartStrategy | 重新启动策略配置 |
| visualEffectInBackground | 切入系统后台时，隐藏页面内容，保护用户隐私。支持 hidden / none |

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#tabbar) tabBar

tabBar 用来配置小程序底部或者顶部的 tab 导航栏的样式以及跳转的页面等。

详细配置项如下：

| 属性 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| color | HexColor | 是 |  | tab 上的文字默认颜色 |
| selectedColor | HexColor | 是 |  | tab 上的文字选中时的颜色 |
| backgroundColor | HexColor | 是 |  | tab 的背景色 |
| borderStyle | String | 否 | black | tabbar上边框的颜色， 仅支持 black、white |
| list | Array | 是 |  | tab 的列表，详见list 属性说明，支持2-5个tab选项 |
| position | String | 否 | bottom | tabBar的位置，仅支持两个值： bottom、top |

其中 list 是数组类型，只能配置最少2个、最多5个 tab。

tab 按数组的顺序排序，每个项都是一个独立的对象，其可配置值如下：

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pagePath | String | 是 | 页面路径，必须在 pages 数组中先定义 |
| text | String | 是 | tab 上按钮文字 |
| iconPath | String | 否 | 图片路径，icon 大小限制为40kb，建议尺寸为 81px \* 81px，不支持网络图片。当 postion 为 top 时，不显示 icon。 |
| selectedIconPath | String | 否 | 选中时的图片路径，要求同 iconPath |

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#networktimeout) networkTimeout

各类网络请求的超时时间，单位均为毫秒。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| request | number | 否 | 60000 | wx.request 的超时时间，单位：毫秒。 |
| connectSocket | number | 否 | 60000 | wx.connectSocket 的超时时间，单位：毫秒。 |
| uploadFile | number | 否 | 60000 | wx.uploadFile 的超时时间，单位：毫秒。 |
| downloadFile | number | 否 | 60000 | wx.downloadFile 的超时时间，单位：毫秒。 |

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#debug) debug

布尔类型，当配置为true时，扫码后，小程序中会增加一个信息查看按钮 vconsole，方便开发者查看日志(已废弃)

可以通过:

1、通过调用小程序api(ft.setEnableDebug)来开启Debug模式。

2、非线上版本(比如体验版、审核版、开发版、预览版)可在 更多菜单中通过【打开调试】开启Debug模式。

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#subpackages) subpackages

启用分包加载时，声明项目分包结构。

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#plugins) plugins

声明小程序需要使用的插件。

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#preloadrule) preloadRule

声明分包预下载的规则。

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#resizable) resizable

在 iPad 上运行的小程序可以设置支持屏幕旋转。

在 PC 上运行的小程序，用户可以按照任意比例拖动窗口大小，也可以在小程序菜单中最大化窗口

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#usingcomponents) usingComponents

在`app.json`中声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。

注意：全局声明的自定义组件会视为被所有页面依赖，会在所有页面启动时进行初始化，且会占用主包大小。只被个别页面或分包引用的自定义组件应尽量在页面配置中声明。

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#style) style

由于微信客户端 7.0 开始，UI 界面进行了大改版。小程序也进行了基础组件的样式升级。app.json 中配置 "style": "v2"可表明启用兼容微信新版的组件样式。

本次改动涉及的组件有

-   button
-   icon
-   radio
-   checkbox
-   switch
-   slider

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#useextendedlib) useExtendedLib

指定需要引用的扩展库。目前支持以下项目：

指定后，相当于引入了对应扩展库相关的最新版本的 npm 包，同时也不占用小程序的包体积。用法如下：

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#darkmode) darkmode

SDK 2.35.1 版本正式支持 DarkMode，可通过配置"darkmode": true表示当前小程序可适配 DarkMode，所有基础组件均会根据系统主题展示不同的默认样式，navigation bar 和 tab bar 也会根据开发者的配置自动切换。

配置后，自行完成基础样式以外的适配工作。

目前 android 是通过反色实现的，在使用前请做好测试。

具体表现为：暗黑模式下基础库部分组件样式与ios不一致，WXSS无法使用prefers-color-scheme，其余功能正常。

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#themelocation) themeLocation

自定义`theme.json`的路径，当配置`"darkmode":true`时，当前配置文件为必填项。

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_2-%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B) 2. 配置示例
