---
title: 主题YAML配置
order: 5
comment: false
collapsible: false
categories: 
  - config
  - theme
tags: 
  - null
columns: 
  - null
date: 2023-01-28 17:25:25
---

# 主题YAML配置

当你没有给`.md`文件的[front matter](https://v2.vuepress.vuejs.org/zh/guide/page.html#frontmatter)指定标题(`title`)、时间(`date`)、分类(`categories`)、标签(`tags`)、专题(`columns`)，在运行开发服务`npm run dev`或打包`npm run build`时将自动为你写入这些数据，你也可以自己手动设置这些数据，当你手动设置之后，相应的数据就不会再自动写入。

## 生成示例

```text
---
title: 主题YAML配置
categories:
- config
- theme
tags:
-
columns:
-
---
```

### title

- 类型: `string`

- 默认：取`.md`文件中#的名称

当前页面的标题。

### date

- 类型: `string`
- 格式：`YYYY-MM-DD HH:MM:SS`
- 默认：`.md`文件在系统中创建的时间

当前页面的创建时间，如需手动添加或修改该字段时请按照格式添加或修改

### categories

- 类型: `array`
- 默认：
  - `.md`所在的文件夹名称。
  - 如果`.md`文件所在的目录是`三级目录`，则会有两个分类值，分别是`二级目录`和`一级目录`的文件夹名称。
  - 如果在 `config.js`设置了`category: false` 将不会自动生成该字段

当前页面的分类。

### tags

- 类型: `array`
- 默认：空数组
- 如果在 `config.js` 设置了`tag: false` 将不会自动生成该字段

当前页面的标签，默认值是空数组，自动生成该字段只是为了方便后面添加标签值。

### columns

- 类型: `array`
- 默认：空数组
- 如果在 `config.js` 设置了`columns: false` 将不会自动生成该字段

当前页面的专题，默认值是空数组，自动生成该字段只是为了方便后面添加专题。

<!-- ### archives
- 类型: `array`
- 默认：空数组
- 如果在 `config.js` 设置了`archives: false` 将不会自动生成归档页 -->
