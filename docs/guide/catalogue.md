---
title: 目录结构
date: 2023-01-17 17:50:00
categories:
  - guide
order: 30
comment: false
toc: false
tags:
  - 
columns:
  - 
---
# 目录结构

```js
.
├── .github (可选，GitHub 相关文件)
│   ├── workflows
│   │   └── doc.yml (可选，自动部署)
├── docs (必须，不推荐改文件名)
│   ├── .vuepress
│   ├── @pages (可选，自动生成的文件夹，存放分类页、标签页、归档页)
│   ├── ... 存放项目文档目录
│   └── README.md (首页)
│   │
├── deploy.sh (可选，部署命令脚本)
│
└── package.json
```
- `docs` 文件夹名称请不要修改

- `docs/.vuepress` 用于存放全局的配置、样式、静态资源等

- `docs/@pages` 此文件夹是自动生成的，存放分类页、标签页、归档页和专题页对应的.md文件

- `docs/README.md` 首页

::: warning 注意
请注意 VuePress 对目录大小写敏感。
:::