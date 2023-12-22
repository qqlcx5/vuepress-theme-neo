---
title: 插件介绍
date: 2023-06-06 09:24:49
categories: 
  - config
  - plugins
tags: 
  - 
columns: 
  - 
---

## 插件说明
以下插件来着hope，大约 3 分钟配置插件配置主题配置介绍

---

`vuepress-theme-hope` 会调用很多 VuePress 插件。

- 一些插件会自动启用，如果你不需要，可以在主题选项中将其禁用;
- 一些插件只有你在进行必要配置后才会启用。

注

作为 [VuePress Orgopen in new window](https://github.com/orgs/vuepress/people) 的成员之一，Mr.Hope 开发了很多 VuePress 插件。

`vuepress-theme-hope` 调用的所有插件均为官方插件或托管在 `vuepress-theme-hope` 仓库下由 Mr.Hope 自己开发的插件。

- 官方插件的文档详见 [VuePress2 官网 open in new window](https://vuejs.press/zh/)
- Mr.Hope 自己开发的插件也全部拥有自己的文档，可以搭配其他主题使用。

## 插件选项

主题提供 `plugins` 选项向对应的插件传递所需选项。

插件选项名称

所有的配置键名均为插件名称的驼峰式 (camelCase) 版本，并去除名称中可能存在的数字 2 结尾。

例如:

- `vuepress-plugin-copy-code2` 的配置键名为 `copyCode`。
- `vuepress-plugin-md-enhance` 的配置键名为 `mdEnhance`

## 插件列表

### Mr.Hope 提供的插件

- [vuepress-plugin-auto-catalog](https://vuepress-theme-hope.github.io/v2/auto-catalog/zh/): VuePress2 的目录自动生成插件
- [vuepress-plugin-blog2](https://vuepress-theme-hope.github.io/v2/blog/zh/): VuePress2 的博客插件
- [vuepress-plugin-comment2](https://vuepress-theme-hope.github.io/v2/comment/zh/): 提供评论与浏览量功能
- [vuepress-plugin-components](https://vuepress-theme-hope.github.io/v2/components/zh/): 提供一些开箱即用的插件
- [vuepress-plugin-copy-code2](https://vuepress-theme-hope.github.io/v2/copy-code/zh/): 提供一键复制代码块功能。
- [vuepress-plugin-copyright2](https://vuepress-theme-hope.github.io/v2/copyright/zh/): 在用户复制时追加版权信息，或禁用站点的复制与选择。
- [vuepress-plugin-feed2](https://vuepress-theme-hope.github.io/v2/feed/zh/): Feed 支持
- [vuepress-plugin-md-enhance](https://vuepress-theme-hope.github.io/v2/md-enhance/zh/): 提供更多 Markdown 语法
- [vuepress-plugin-photo-swipe](https://vuepress-theme-hope.github.io/v2/photo-swipe/zh/): 基于 Photo Swipe 的图片浏览插件
- [vuepress-plugin-pwa2](https://vuepress-theme-hope.github.io/v2/pwa/zh/): 增强的 PWA 支持
- [vuepress-plugin-reading-time2](https://vuepress-theme-hope.github.io/v2/reading-time/zh/): 阅读时间与字数统计
- [vuepress-plugin-sass-palette](https://vuepress-theme-hope.github.io/v2/sass-palette/zh/): 面向全部插件和主题的 Sass 配置插件
- [vuepress-plugin-seo2](https://vuepress-theme-hope.github.io/v2/seo/zh/): SEO 增强插件
- [vuepress-plugin-sitemap2](https://vuepress-theme-hope.github.io/v2/sitemap/zh/): Sitemap 插件

提示

这里还有一些其他没有被主题捆绑的插件，你可以根据自己的需求自行启用。

- [vuepress-plugin-lightgallery](https://vuepress-theme-hope.github.io/v2/lightgallery/zh/): 基于 lightgallery 图片浏览插件
- [vuepress-plugin-redirect](https://vuepress-theme-hope.github.io/v2/redirect/zh/): 重定向插件
- [vuepress-plugin-remove-pwa](https://vuepress-theme-hope.github.io/v2/remove-pwa/zh/): 移除 PWA 插件
- [vuepress-plugin-search-pro](https://vuepress-theme-hope.github.io/v2/search-pro/zh/): 客户端搜索插件

### 官方插件

- [@vuepress/plugin-active-header-linksopen in new window](https://vuejs.press/zh/reference/plugin/active-header-links.html): 自动更新路由 Hash
- [@vuepress/plugin-containeropen in new window](https://vuejs.press/zh/reference/plugin/container.html): 自定义容器
- [@vuepress/external-link-iconopen in new window](https://vuejs.press/zh/reference/plugin/external-link-icon.html): 为 Markdown 的外部链接添加外部链接图标。
- [@vuepress/plugin-gitopen in new window](https://vuejs.press/zh/reference/plugin/git.html): 基于 Git 的信息插件
- [@vuepress/plugin-nprogressopen in new window](https://vuejs.press/zh/reference/plugin/nprogress.html): 进度条
- [@vuepress/plugin-prismjsopen in new window](https://vuejs.press/zh/reference/plugin/prismjs.html): 基于 prism.js 的代码高亮插件
- [@vuepress/plugin-theme-dataopen in new window](https://vuejs.press/zh/reference/plugin/theme-data.html): 主题配置的 Composition API 插件

[

下一页

博客配置

](https://vuepress-theme-hope.github.io/v2/zh/config/plugins/blog.html)
