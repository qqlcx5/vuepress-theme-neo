---
title: 侧边栏
date: 2024-01-17 18:18:28
icon: neo-sidebar
categories:
  - guide
tags:
  - 
columns:
  - 
---
# 侧边栏

在 `docs/.vuepress/config/sidebar.js` 中，你可以为每个页面指定侧边栏，或者禁用侧边栏。

`README.md` **通常用来定义和继承目录和文件`front matter`配置**，所以我会禁用它在侧边栏在展示。如果通过 index: false，它总会在排序中成为第一项。但是你还是可以通过 link 来访问它。

`README.md` 特有的配置
- `showSidebar` 是否显示当前目录在侧边栏展示，对第一级目录不生效（没必要）。
- `catalogue` 是否显示目录页 默认不展示
- `collapsible` 是否可折叠 默认可折叠
- `icon` 侧边栏图标，如果配置`icon`，子文件没有单独定义其他`icon`，会采用当前`icon`。

## 指定侧边栏

### 假设的目录结构

```js
docs/
├── README.md
├── guide/
│   ├── README.md
│   ├── getting-started.md
│   ├── advanced/
│   │      └── README.md
│   │      └── frontmatter.md
│   ├── sidebar.md
│   └── advanced-usage.md
└── api/
    ├── README.md
    └── reference.md
````

### 配置

你可以在 `docs/.vuepress/config/sidebar.js` 来配置侧边栏。

```js
export default {
  '/guide/': 'structure',
  '/api/': 'structure',
};
```

### 生成的侧边栏示例数据

```js
{
  '/guide/': [
    {
      title: 'advanced',
      collapsable: true,
      children: [
        {
            text: 'frontmatter',
            link: '/guide/advanced/frontmatter.md'
        }
      ]
    },
    {
        text: 'advanced-usage',
        link: '/guide/advanced-usage.md'
    },
    {
        text: 'getting-started',
        link: '/guide/getting-started.md'
    },
    {
        text: 'sidebar',
        link: '/guide/sidebar.md'
    }
  ],
  '/api/': [
    {
      title: 'API',
      collapsable: true,
      children: [
        {
            text: 'reference',
            link: '/api/reference.md'
        }
      ]
    }
  ]
}
```

### 排序规则

默认情况下，侧边栏会按照文件名的标题文字按照当前语言排序，你可以通过 `front matter` `order`配置选项来覆盖默认的排序。

含有正数order的项会被放在前面，不含order的项会按标题排序，含有负数order的项会被放在后面。


- 含有正数 order 的页面在此处会根据 order 大小排序
- 页面 -> order: 1
- 页面 -> order: 2
- 页面 -> order: 3
- ===================
- 不含有 order 选项的页面在此处会根据标题排序
- 不含有 order 选项的页面 -> 标题: 1
- 不含有 order 选项的页面 -> 标题: 2
- 不含有 order 选项的页面 -> 标题: a
- 不含有 order 选项的页面 -> 标题: z
- ===================
- 含有负数 order 的页面在此处会根据 order 大小排序
- 页面 -> order: -3
- 页面 -> order: -2
- 页面 -> order: -1


### 原理

`structure` 我定义一个函数处理，生成的对象就是侧边栏的配置，这样可以更灵活的配置。不影响默认主题的配置。

如果有什么不明白的，或者想这个基础上魔改，可以看源码，或者微信联系我。
