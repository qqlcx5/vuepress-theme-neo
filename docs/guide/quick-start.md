---
title: 快速上手
date: 2023-01-17 17:50:00
order: 2
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

直接在这项目基础上进行更改岂不是更快。

::: tip 注意
Node.js 推荐版本 v16+ 你可以使用 corepack 来启用 pnpm
:::

## 引用主题

```js
// .vuepress/config.js
import neoTheme from 'vuepress-theme-neo'

export default {
  // 站点选项
  // ...

  theme: neoTheme({
    // 主题选项
    // ...
  }),
};
```
