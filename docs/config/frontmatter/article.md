---
title: Frontmatter 文章配置
icon: neo-meibi
order: 2
comment: false
article: false
collapsible: false
---

# Frontmatter 文章配置

假设这是你的 Markdown 文件所处的目录结构：

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

## foo/README.md

### title

- 类型：`string`

定义侧边栏标题，未定义则取当前文件夹名。

文章中`# Title`标题描述可以更详细，在目录页优先展示，避免Frontmatter title标题过长在侧边栏展示不美观又在目录页展示有过短问题。

### order

- 类型：`number`
- 默认：`null`

文章在侧边栏显示的顺序，从小到大。

### icon

- 类型：`string`

定义侧边栏的图标。

### iconSize

- 类型：`number`

定义侧边栏的图标大小。

### comment

- 类型：`boolean`
- 默认：true

是否开启页面评论功能。

### article

- 类型：`boolean`
- 默认：true

是否是文章页，否的话在分类、标签页和归档、专题页等中不显示。
