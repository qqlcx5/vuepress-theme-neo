---
title: 主题布局选项
order: 4
comment: false
article: false
collapsible: false
---

# 主题布局选项

## navbar 导航栏 <Badge text="推荐" type="warning" />

```js
interface NavbarItem  {
    /**
     * 文字
     */
    text: string

    /**
     * 图标
     */
    icon?: string
    /**
     * 图标大小
     */
    iconSize?: string | number
    /**
     * 当前页面路由路径
     */
    link: string
    /**
     * 该元素在当前路由路径是 /config/ 开头时激活支持正则表达式
     */
    activeMatch: '^/config/'
}
```

## sidebar 侧边栏 <Badge text="推荐" type="warning" />

比如，你的文档为下述的目录结构：

```js
doc
├─ README.md
├─ foo/
│   ├─ README.md
│   ├─ one.md
│   └─ two.md
└─ bar/
    ├─ README.md
    ├─ three.md
    └─ four.md
```

如果你想自动生成侧边栏菜单的数据，可以进行以下配置。或者在`[]`中手动配置。

```js
export default neoTheme({
  sidebar: {
    '/bar/': 'structure' | []
    '/foo/': 'structure' | []
  }
})
```

你将会得到以下生成侧边栏数据。

```js
export default neoTheme({
    sidebar: [
      {
        text: "foo",
        children: [
          "one" /* /foo/one.html */,
          "two" /* /foo/two.html */,
        ],
      },
      {
        text: "Bar",
        children: [
          "three" /* /bar/three.html */,
          "four" /* /bar/four.html */,
        ],
      },
    ],
  }),
```

其中 `README.md` 可以定义配置项 `ItemConfig` 排序或者定义`icon`等。
