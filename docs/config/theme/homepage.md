---
title: 主题首页配置
order: 3
comment: false
article: false
collapsible: false
---

# 主题首页配置

## 首页大图

### homeHeaderInfo

- 类型: `object`
- 默认值: `none`

首页内容信息。

### homeHeaderImages

- 类型: `array`
- 默认值: `[]`

首页图片配置。

```js
// .vuepress/config.js

export default neoTheme({
    homeHeaderInfo: {
        name: 'vuepress-theme-neo',
        avatar: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.png',
        description: '🚀一款个性化的 VuePress2.x 主题✨'
    },
    homeHeaderImages: [
        // 图 1
        {
            path: '/img/home-bg/1.jpg',
            mask: 'rgba(40, 57, 101, .4)'
        },
        // 图 2
        {
            path: '/img/home-bg/2.jpg',
            mask: 'rgb(251, 170, 152, .2)'
        }
    ]
})
```
