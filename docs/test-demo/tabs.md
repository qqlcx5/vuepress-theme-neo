---
title: 选项卡
date: 2022-07-03 00:19:42
permalink: /test-demo/tabs
categories:
  - test-demo
tags:
  - 
---
# 选项卡

::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

安装 VuePress Theme Hope:

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope@next
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope@next
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope@next
```

:::

安装 VuePress Plugin Markdown Enhance:

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-plugin-md-enhance@next
```

@tab yarn

```bash
yarn add -D vuepress-plugin-md-enhance@next
```

@tab:active npm

```bash
npm i -D vuepress-plugin-md-enhance@next
```

:::

::: vue-demo 一个使用浏览器不支持解析语言 Demo

```md
# 标题

十分强大
```

```ts
const message: string = "VuePress Theme Hope";

document.querySelector("h1").innerHTML = message;
```

```scss
h1 {
  font-style: italic;

  + p {
    color: red;
  }
}
```

:::
