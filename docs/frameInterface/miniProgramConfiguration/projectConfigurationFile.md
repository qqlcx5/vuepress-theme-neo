---
title: 项目配置文件
date: 2024-02-01 15:19:14
tags: []
order: 10
source: https://www.finclip.com/mop/document/develop/frameInterface/config/project.html
author: null
categories: 
  - frameInterface
  - miniProgramConfiguration
columns: 
  - 
---


# 项目配置文件 
---
## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6) 项目配置文件

项目根目录中的 `project.config.json`文件可以对项目进行配置。

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_1-%E9%85%8D%E7%BD%AE%E9%A1%B9) 1. 配置项

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| miniprogramRoot | Path String | 指定小程序源码的目录(需为相对路径) |
| pluginRoot | Path String | 指定插件项目的目录(需为相对路径) |
| compileType | String | 编译类型 |
| appid | String | 项目的 appid |
| projectname | String | 项目名字 |
| packOptions | Object | 打包配置选项 |
| setting | Object | 项目设置 |

| 名称 | 功能说明 |
| --- | --- |
| qcloudRoot | 指定腾讯云项目的目录(需为相对路径) |
| cloudbaseRoot | 云开发代码根目录(需为相对路径) |
| cloudfunctionRoot | 云函数代码根目录(需为相对路径) |
| cloudfunctionTemplateRoot | 云函数本地调试请求模板的根目录(需为相对路径) |
| cloudcontainerRoot | 云托管代码根目录(需为相对路径) |
| libVersion | 基础库版本 |
| debugOptions | 调试配置选项 |
| watchOptions | 文件监听配置设置 |
| scripts | 自定义预处理 |
| staticServerOptions | 仅在小游戏项目中有效 |
| editorSetting | 指定自动生成的文件的 tabIndent 和 tabSize |
| skeletonConfig | 骨架屏相关设置 |

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#compiletype) compileType

编译类型作用于开发工具的以下设置

| 名字 | 说明 |
| --- | --- |
| miniprogram | 当前为普通小程序项目 |
| plugin | 当前为小程序插件项目 |
| game | 当前为小游戏项目 |

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#packoptions) packOptions

`packOptions` 用以配置项目在打包过程中的选项。打包是预览、上传时对项目进行的必须步骤。

目前可以指定 `packOptions.include` 字段，用以配置打包时需要强制带上的文件（仅限后缀名白名单内）或者文件夹，匹配的这些文件或文件夹将一定会出现在预览或上传的结果内。（该字段的优先级高于 `packOptions.ignore`）

同时可以指定 `packOptions.ignore` 字段，用以配置打包时对符合指定规则的文件或文件夹进行忽略，以跳过打包的过程，这些文件或文件夹将不会出现在预览或上传的结果内。如果`packOptions.ignore`设置了使用到的页面文件，那么在编译的过程中就会报错，无法进行后续的预览和上传。

`packOptions.ignore` 和 `packOptions.include` 为一对象数组，对象元素类型如下：

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| value | string | 路径或取值 |
| type | string | 类型 |

其中，`type` 可以取的值为 `folder、file、suffix、prefix、regexp2、glob2`，分别对应文件夹、文件、后缀、前缀、正则表达式、Glob 规则。所有规则值都会自动忽略大小写。

注: value 字段的值若表示文件或文件夹路径，以小程序目录 (miniprogramRoot) 为根目录。

示例配置如下。

注: 这部分设置的更改可能需要清除缓存才能生效。

### [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#setting) setting

项目的额外设置，可以指定以下设置。

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| loginUUID | string | 设置 ft.login 接口所用到 UUID , 用于获取 code，可在项目详情中设置 |
| skipCompileWatch | Boolean | 设置 IDE 是否会在修改文件时触发 watch 热更新 |
| es6 | Boolean | 编译时是否启用 es6 转 es5 |
| enhance | Boolean | 是否打开增强编译 |
| postcss | Boolean | 上传代码时样式是否自动补全 |
| minified | Boolean | 上传代码时是否自动压缩脚本文件 |

以下字段是开发者工具的隐式设置

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| useCompilerPlugins | String\[\] 或 false | 编译插件配置 |
| packNpmManually | Boolean | 是否手动配置构建 npm 的路径 |
| packNpmRelationList | Array | 仅 packNpmManually 为 true 时生效，详细参考构建 npm 文档 |
