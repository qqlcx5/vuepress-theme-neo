---
title: 快速上手
date: 2023-01-17 17:50:00
order: 2
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
Node.js 推荐版本 v16+ 你可以使用 corepack 来启用 pnpm。
:::

## 引用主题

::: tabs

@tab npm

```sh
npm install -D vuepress-theme-neo
```

@tab yarn

```sh
yarn add -D vuepress-theme-neo
```

:::

请确保你使用的是最新版本的 VuePress（2.0.0-beta.60）和主题。

参考 VuePress 文档搭建目录结构。建议在 `package.json` 的 `dev` 和 `build script` 里添加 `--clean-cache`，即：

```js
{
  "scripts": {
    "docs:dev": "vuepress dev docs --clean-cache",
    "docs:build": "vuepress build docs --clean-cache"
  }
}
```

然后在 `.vuepress/config.js` 或 `.vuepress/config.ts`（如果你在使用 TypeScript 的话）中指定主题：

```js
// .vuepress/config.js
import neoTheme from 'vuepress-theme-neo';

export default {
  // 站点选项
  // ...

  theme: neoTheme({
    // 主题选项
    // ...
  }),
};
```
