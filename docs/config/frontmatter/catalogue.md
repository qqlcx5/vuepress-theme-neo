---
title: Frontmatter 目录配置
icon: fa-solid fa-file
order: 1
comment: false
article: false
collapsible: false
---
# Frontmatter 目录配置

假设这是你的 Markdown 文件所处的目录结构：

```text
doc
├─ README.md
├─ foo/
│   ├─ README.md
│   ├─ one.md
│   └─ two.md
└─ bar/
│    ├─ README.md
│    ├─ three.md
│    └─ four.md
└─ multi
  ├─ README.md
  ├─ AAA/
  │   ├─ README.md
  │   ├─ one.md
  │   └─ two.md
  └─ BBB/
      ├─ README.md
      ├─ three.md
      └─ four.md
```

`doc/README.md` 关于首页配置 可以 [默认主题 > Frontmatter 参考](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#%E9%A6%96%E9%A1%B5)

## 单级目录配置 `doc/foo/`

### title

- 类型：`string`

定义侧边栏标题，未定义则取当前文件夹名。

### icon

- 类型：`string`

定义侧边栏的图标。

### iconSize

- 类型：`number`

定义侧边栏的图标大小。

### catalogue

- 类型：`boolean`
- 默认：false

开启目录页，枚举`doc/foo/`的所有md页面。通常是在`doc/xxx`目录中下配置才会生效。

### collapsible

- 类型：`boolean`
- 默认：true

是否在侧边栏中开启目录展开和收缩。

## 多级目录配置 `doc/multi/`

以上配置在多级目录也一样适用。

### order

- 类型：`number`
- 默认：`null`

子目录在侧边栏显示的顺序，从小到大。

例如 `AAA/`和 `BBB/`目录下`README.md`中`order`定义 `2 1`，那么`BBB/`会在侧边栏先展示。

默认情况下，侧边栏会按照文件名的标题文字按照当前语言排序，你可以通过 order 来控制它们的排序方式，
当你设置为正数时，它们会出现在分组最前方，越小的越靠前，也可以是为负数时，会出现在分组最前方:

- 目录页面 -> order: 1
- 目录页面 -> order: 2
- 目录页面 -> order: 3

含有 order 的页面在此处会根据 order 大小排序.

不含有 order 选项的目录在order后面然后按照文件名的标题文字排序。
