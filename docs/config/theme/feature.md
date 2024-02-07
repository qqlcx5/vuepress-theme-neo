---
title: 主题功能选项
order: 1
comment: false
article: false
iconSpin: true
iconColor: "#f0db4f"
collapsible: false
---

# 主题功能选项

## 作者信息

### author

### 类型

- 类型: `string | object`
- 默认值: `none`

文章作者信息。

### 类型定义

```ts
interface Author {
  /**
   * 作者姓名
   */
  name: string

  /**
   * 作者网站
   */
  url?: string
}
```

## 站点信息

访问量和浏览量是基于不蒜子统计。

### bolgCreateAt

- 类型: `string`
- 默认值: `2023-01-01`

记录网站已运行时间。

## 博主选项

### blog.name

- 类型: `string`
- 默认值: `author`

博主姓名。

### blog.avatar

- 类型: `string`
- 默认值: `logo`

博主头像。

### blog.description

- 类型: `string`
- 必填: 否

介绍语。

### blog.intro

- 类型: `string`
- 必填: 否

博主的个人介绍地址。

> 注: 填写后将可以点击“博主信息”中的头像或姓名进入个人介绍页。

### blog.roundAvatar

- 类型: `boolean`
- 默认值: `false`

是否剪裁头像为圆形形状。
