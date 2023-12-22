---
title: 主题额外选项
order: 2
comment: false
collapsible: false
date: 2023-01-19 11:32:56
categories: 
  - config
  - theme
tags: 
  - null
columns: 
  - null
---

# 主题额外选项

## 是否开启分类、标签、归档、专题页

### category

- 类型：`boolean`
- 默认：true

是否打开分类功能。 如打开，会做的事情有：

1. 自动生成的front matter包含分类字段
2. 页面中显示与分类相关的信息和模块
3. 自动生成分类页面（在@pages文件夹）

如关闭，则反之。

### tag

- 类型：`boolean`
- 默认：true

是否打开标签功能。 如打开，会做的事情有：

1. 自动生成的front matter包含标签字段
2. 页面中显示与标签相关的信息和模块
3. 自动生成标签页面（在@pages文件夹）

如关闭，则反之。

### archive

- 类型：`boolean`
- 默认：true

是否打开归档功能。 如打开，会做的事情有：

1. 自动生成归档页面（在@pages文件夹）

如关闭，则反之。

### column

- 类型：`boolean`
- 默认：true

是否打开专题功能。 如打开，会做的事情有：

1. 自动生成专题页面（在@pages文件夹）

如关闭，则反之。

当你打开了分类、标签、归档功能，可以通过以下路径访问相关页面

- 分类页: `/categories/`
- 标签页: `/tags/`
- 归档页: `/archives/`
- 专题页: `/columns/`
