---
title: 自定义组件
date: 2024-02-01 15:24:35
tags: []
order: 30
source: https://www.finclip.com/mop/document/develop/frameInterface/config/project.html
author: null
categories: 
  - frameInterface
  - frameworkInterface
columns: 
  - 
---

# 自定义组件 
---
## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6) 自定义组件

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_1-component) 1. Component

创建自定义组件，接受一个 Object 类型的参数。

扩展功能：可以创建一个xxx.ext.json文件。 xxx.ext.json中的配置

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#)

| 定义段 | 类型 | 是否必填 | 描述 | 最低版本 |
| --- | --- | --- | --- | --- |
| properties | Object Map | 否 | 组件的对外属性，是属性名到属性设置的映射表 |  |
| data | Object | 否 | 组件的内部数据，和 properties 一同用于组件的模板渲染 |  |
| observers | Object | 否 | 组件数据字段监听器，用于监听 properties 和 data 的变化 | 2.0.11 |
| methods | Object | 否 | 组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用 |  |
| behaviors | String Array | 否 | 类似于mixins和traits的组件间代码复用机制 |  |
| created | Function | 否 | 组件生命周期函数-在组件实例刚刚被创建时执行，注意此时不能调用 setData |  |
| attached | Function | 否 | 组件生命周期函数-在组件实例进入页面节点树时执行 |  |
| ready | Function | 否 | 组件生命周期函数-在组件布局完成后执行 |  |
| detached | Function | 否 | 组件生命周期函数-在组件实例被从页面节点树移除时执行 |  |
| methods | Object | 否 | 组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用 |  |
| relations | Object | 否 | 组件间关系定义，参见 组件间关系 |  |
| options | Object Map | 否 | 一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举） |  |
| externalClasses | String Array | 否 | 组件接受的外部样式类 |  |
| lifetimes | Object | 否 | 组件生命周期声明对象 |  |
| pageLifetimes | Object | 否 | 组件所在页面的生命周期声明对象，参见 组件生命周期 | 2.0.4 |

生成的组件实例可以在组件的方法、生命周期函数和属性 observer 中通过 this 访问。组件包含一些通用属性和方法。

| 属性名 | 类型 | 描述 | 最低版本 |
| --- | --- | --- | --- |
| is | String | 组件的文件路径 | 2.1.5 |
| id | String | 节点id | 2.1.5 |
| dataset | String | 节点dataset | 2.1.5 |
| data | Object | 组件数据，包括内部数据和属性值 | 2.1.5 |
| properties | Object | 组件数据，包括内部数据和属性值（与 data 一致） | 2.1.5 |

| 方法名 | 参数 | 描述 | 最低版本 |
| --- | --- | --- | --- |
| setData | Object newData | 设置data并执行视图层渲染 |  |
| triggerEvent | String name, Object detail, Object options | 触发事件，参见 组件间通信与事件 |  |
| createSelectorQuery |  | 创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内 | 1.5.28 |
| createIntersectionObserver |  | 创建一个 IntersectionObserver 对象，选择器选取范围为这个组件实例内 | 1.3.7 |
| selectComponent | String selector | 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象 | 1.5.29 |
| selectAllComponents | String selector | 使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组 | 1.5.29 |
| getRelationNodes | String relationKey | 获取这个关系所对应的所有关联节点，参见 组件间关系 | 1.5.38 |
| hasBehavior | Object behavior | 检查组件是否具有 behavior （检查时会递归检查被直接或间接引入的所有behavior） | 2.1.5 |
| getPageId |  | 返回页面标识符（一个字符串），可以用来判断几个自定义组件实例是不是在同一个页面内 | 2.1.5 |

**代码示例**

注意

在 properties 定义段中，属性名采用驼峰写法（propertyName）；在 FXML 中，指定属性值时则对应使用连字符写法（component-tag-name property-name="attr value"），应用于数据绑定时采用驼峰写法（attr=""）。

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_2-properties) 2. properties

| 定义段 | 参数 | 是否必填 | 描述 | 最低版本 |
| --- | --- | --- | --- | --- |
| type |  | 是 | 属性的类型 |  |
| value |  | 否 | 属性的初始值 |  |
| observer | Function | 否 | 属性值变化时的回调函数 |  |

**代码示例**

属性的类型可以为 String Number Boolean Object Array 其一，也可以为 null 表示不限制类型。  
多数情况下，属性最好指定一个确切的类型。这样，在 FTML 中以字面量指定属性值时，值可以获得一个确切的类型，如：

此时，由于自定义组件的对应属性被规定为 Number 类型， min 和 max 会被赋值为 1 和 5 ，而非 "1" 和 "5" ，即：

提示

-   使用 this.data 可以获取内部数据和属性值；但直接修改它不会将变更应用到界面上，应使用 setData 修改。
-   属性名应避免以 data 开头，即不要命名成 dataXyz 这样的形式，因为在 FXML 中， data-xyz="" 会被作为节点 dataset 来处理，而不是组件属性。
-   在一个组件的定义和使用时，组件的属性名和 data 字段相互间都不能冲突（尽管它们位于不同的定义段中）。

## [#](https://www.finclip.com/mop/document/develop/frameInterface/config/project.html#_3-behavior) 3. Behavior

注册一个 behavior，接受一个 Object 类型的参数。  


**参数** **Object object**

| 定义段 | 类型 | 是否必填 | 描述 | 最低版本 |
| --- | --- | --- | --- | --- |
| properties | Object Map | 否 | 同组件的属性 |  |
| data | Object | 否 | 同组件的数据 |  |
| methods | Object | 否 | 同自定义组件的方法 |  |
| behaviors | String Array | 否 | 引入其它的 behavior |  |
| created | Function | 否 | 生命周期函数 |  |
| attached | Function | 否 | 生命周期函数 |  |
| ready | Function | 否 | 生命周期函数 |  |
| detached | Function | 否 | 生命周期函数 |  |

**代码示例**
