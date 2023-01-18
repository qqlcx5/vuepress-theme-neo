---
title: 快速上手
date: 2023-01-17 17:50:00
order: 20
comment: false
toc: false
categories:
  - 快速上手
tags:
  - 
columns:
  - 
---

# 快速上手

## 安装和启动

```bash
# 下载项目
git clone --depth 1 https://github.com/qqlcx5/vuepress-theme-neo.git

# 选择项目
cd vuepress-theme-neo

# 安装项目依赖
npm install # or yarn install

# 运行
npm run dev # or yarn dev
```

::: tip 注意
Node推荐使用v14.17.x或以上
:::

## 引用主题

```js
// config.js
import neoTheme from 'vuepress-theme-neo'

export default neoTheme({
    // ...
})
```
