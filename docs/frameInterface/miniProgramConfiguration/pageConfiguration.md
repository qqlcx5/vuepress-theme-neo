---
title: 页面配置
date: 2024-02-01 15:21:03
tags: []
order: 30
source: https://www.finclip.com/mop/document/develop/frameInterface/config/project.html
author: null
categories: 
  - frameInterface
  - miniProgramConfiguration
columns: 
  - 
---

# 页面配置 
---
## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE) 页面配置

`app.json`中的部分配置，也支持对单个页面进行配置，可以在页面对应的`.json`文件来对本页面的表现进行配置。

页面中配置项在当前页面会覆盖`app.json`中相同的配置项（样式相关的配置项属于`app.json`中的 window 属性，但这里不需要额外指定 window 字段），具体的取值和含义可参考全局配置文档中说明。

文件内容为一个 JSON 对象，有以下属性：

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#%E9%85%8D%E7%BD%AE%E9%A1%B9) 配置项

| 属性 | 类型 | 默认值 | 描述 | 最低版本 |
| --- | --- | --- | --- | --- |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如 #000000 |  |
| navigationBarTextStyle | string | white | 导航栏标题颜色，仅支持 black / white |  |
| navigationBarTitleText | string |  | 导航栏标题文字内容 |  |
| navigationBarTitleFixed | boolean | false | 是否不使用web-view的title，默认为false；当设置为true时，只会显示navigationBarTitleText |  |
| navigationStyle | string | default | 导航栏样式，仅支持以下值：1. default（默认样式）, 2. custom（自定义导航栏，只保留右上角胶囊按钮，对 web-view 组件无效）, 3.customV2（自定义导航栏，只保留右上角胶囊按钮）, 4.hide（隐藏导航栏和右上角胶囊按钮） |  |
| backgroundColor | HexColor | #ffffff | 窗口的背景色 |  |
| backgroundTextStyle | string | dark | 下拉 loading 的样式，仅支持 dark / light |  |
| backgroundColorTop | string | #ffffff | 顶部窗口的背景色，仅 iOS 支持 |  |
| backgroundColorBottom | string | #ffffff | 底部窗口的背景色，仅 iOS 支持 |  |
| enablePullDownRefresh | boolean | false | 是否开启当前页面下拉刷新。详见 Page.onPullDownRefresh |  |
| pageOrientation | string | portrait | 屏幕旋转设置，支持 auto / portrait / landscape 详见 响应显示区域变化 | 2.4.0 (auto) / 2.5.0 (landscape) |
| usingComponents | Object | 否 | 页面自定义组件配置 | 1.6.3 |
| initialRenderingCache | string |  | 页面初始渲染缓存配置，支持 static / dynamic | 2.10.1 |
| style | string | default | 启用新版的组件样式 | 2.11.1 |
| onReachBottomDistance | number | 50 | 页面上拉触底事件触发时距页面底部距离，单位为px。详见 Page.onReachBottom | 2.12.8 |
| disableScroll | boolean | false | 设置为 true 则页面整体不能上下滚动。只在页面配置中有效，无法在 app.json 中设置 | 2.40.7 |

| 名称 | 功能说明 |
| --- | --- |
| singlePage | Object |
| restartStrategy | string |

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B) 配置示例
