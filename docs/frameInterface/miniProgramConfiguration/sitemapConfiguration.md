---
title: sitemap 配置
date: 2024-02-01 15:21:24
tags: []
order: 40
source: https://www.finclip.com/mop/document/develop/frameInterface/config/project.html
author: null
categories: 
  - frameInterface
  - miniProgramConfiguration
columns: 
  - 
---

# sitemap 配置

---

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#sitemap-%E9%85%8D%E7%BD%AE) sitemap 配置

目前已开放小程序内搜索，开发者可以通过配置`sitemap.json`来配置其小程序页面是否允许索引。其会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_1-sitemap-%E9%85%8D%E7%BD%AE) 1. sitemap 配置

小程序根目录下的`sitemap.json`文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个`JSON`对象，如果没有`sitemap.json`，则默认为所有页面都允许被索引，`sitemap.json`有以下属性：

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_1-1-%E9%85%8D%E7%BD%AE%E9%A1%B9) 1.1 配置项

| 属性  | 类型       | 必填 | 描述         |
| ----- | ---------- | ---- | ------------ |
| rules | Object\[\] | 是   | 索引规则列表 |

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_1-2-rules) 1.2 rules

rules 配置项指定了索引规则，每项规则为一个 JSON 对象，属性如下所示：

| 属性   | 类型   | 必填 | 默认值  | 取值                | 取值说明                            |
| ------ | ------ | ---- | ------- | ------------------- | ----------------------------------- |
| action | string | 否   | "allow" | "allow"、"disallow" | 命中该规则的页面是否能被索引        |
| page   | string | 是   |         | "\*"、页面的路径    | \* 表示所有页面，不能作为通配符使用 |

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_2-%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B) 2. 配置示例

- `path/to/page1` => 不被索引
- `path/to/page2` => 不被索引
- 其他页面都会被索引

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_3-%E7%89%B9%E6%AE%8A%E6%83%85%E5%BD%A2%E8%AF%B4%E6%98%8E) 3. 特殊情形说明

1.  没有`sitemap.json`则默认所有页面都能被索引；
2.  `{"action": "allow", "page": "*"}`是优先级最低的默认规则，未显式指明 `"disallow"`的都默认被索引；
3.  `sitemap.json`文件内容最大为`5120`个`UTF8`字符；
4.  当存在不便于被平台收录的页面，开发者也可利用`sitemap.json`声明处理。

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_4-%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E) 4. 免责声明

如因开发者未遵循 声明 对于开发者使用本设置作出的提示和指引进行功能配置，导致用户的个人信息被展示披露、未经授权被访问或泄露，一切法律责任应由开发者承担。

如出现用户信息被不当展示等情形，我们可能根据程度采取包括但不限于要求开发者限期整改等措施，以保障用户信息安全。
