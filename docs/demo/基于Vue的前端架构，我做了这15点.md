---
title: 基于Vue的前端架构，我做了这15点 - 掘金
date: 2022-11-09 14:09:55
categories: 
  - 架构
tags: 
  - 架构
columns: 
  - Vue3
author: codexu
source: https://juejin.cn/post/6901466994478940168
---

# 基于Vue的前端架构，我做了这15点 - 掘金

> ## Excerpt
>
> 本篇文章针对于 vue2，目前正在基于 vue3 做一个开源的脚手架，如果有感兴趣的同学，可以来这里贡献代码。 考虑到后续招人和现有人员的技术栈，选择 Vue 作为框架。 公司主要业务是 GIS 和 BIM，通常开发一些中大型的系统，所以 vue-router 和 vuex 都…

---

本篇文章针对于 vue2，目前正在基于 vue3 做一个开源的脚手架，如果有感兴趣的同学，可以来[这里](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fcode-device%2Fx-build "https://github.com/code-device/x-build")贡献代码。

## 1.分解需求

### 技术栈

- 考虑到后续招人和现有人员的技术栈，选择 Vue 作为框架。

- 公司主要业务是 GIS 和 BIM，通常开发一些中大型的系统，所以 vue-router 和 vuex 都是必不可少的。

- 放弃了 Element UI 选择了 Ant Design Vue（最近 Element 好像复活了，麻蛋）。

- 工具库选择 lodash。

### 建立脚手架

- 搭建 NPM 私服。

- 使用 Node 环境开发 CLI 工具，参考我自己写过的一篇 -【 [搭建自己的脚手架—“优雅”生成前端工程](https://juejin.cn/post/6844903607855235079 "https://juejin.cn/post/6844903607855235079")】。

- 基于 @vue/cli 搭建基础的模板（大家都比较了解，节省开发时间，远胜于从零开始搭建）。

- 根据业务需求定义各种开发中可能用到的功能（组件库、状态管理、过滤器、指令、CSS内置变量、CSS Mixins、表单验证、工具函数等）。

- 性能优化，例如对 Ant Design Vue 组件库的优化。

### 开发规范

- 对代码风格、命名规则、目录结构进行统一规范。

- 静态资源的使用规范。

- 单元测试、提交线上测试规范。

- Git 提交记录和多人协作规范。

## 2.样式

### CSS 预处理器的选择

- Sass/Scss ✅
- Less ✅
- Stylus ⭕

为什么选择了两个？因为公司团队跟倾向于使用 scss 开发，less 是为了覆盖 ant design vue 的样式，stylus 只有我自己喜欢这种风格。

### 局部样式与全局样式

#### 局部样式

一般都是使用 scoped 方案：

```scss
<style lang="scss" scoped>
  ...
</style>

```

#### 全局样式

全局样式 目录：@/styles

variable.scss: 全局变量管理 mixins.scss: 全局 Mixins 管理 global.scss: 全局样式

其中 variable.scss 和 mixins.scss 会优先于 global.css 加载，并且可以不通过 import 的方式在项目中任何位置使用这些变量和 mixins。

```json
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '@/styles/variable.scss';
        @import '@/styles/mixins.scss';
        `,
      },
    },
  },
}

```

### 体验优化

#### 页面载入进度条

使用 [nprogress](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Frstacruz%2Fnprogress "https://github.com/rstacruz/nprogress") 对路由跳转时做一个伪进度条，这样做在网络不好的情况下可以让用户知道页面已经在加载了：

```js
import NProgress from 'nprogress';

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});


```

#### 美化滚动条

一直用 Mac 做前端，突然发现同事的 Windows 上出现了十分丑陋的滚动条，为了保持一致：

```scss
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  width: 6px;
  background: rgba(#101F1C, 0.1);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(#101F1C, 0.5);
  background-clip: padding-box;
  min-height: 28px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(#101F1C, 1);
}

```

#### 静态资源加载页面

首次加载页面时，会产生大量的白屏时间，这时做一个 loading 效果看起来会很友好，其实很简单，直接在 public/index.html 里写一些静态的样式即可。

### 移动端 100vh 问题

在移动端使用 100vh 时，发现在 Chrome、Safari 浏览器中，因为浏览器栏和一些导航栏、链接栏导致不一样的呈现：

你以为的 100vh === 视口高度

实际上 100vh === 视口高度 + 浏览器工具栏（地址栏等等）的高度

#### 解决方案

安装 vh-check `npm install vh-check --save`

```js
import vhCheck from 'vh-check';
vhCheck('browser-address-bar');
```

定义一个 CSS Mixin

```scss
@mixin vh($height: 100vh) {
  height: $height;
  height: calc(#{$height} - var(--browser-address-bar, 0px));
}
```

之后就是哪里不会点哪里。

## 3.组件库

因为 Element UI 长期没更新，并且之前使用过 React 的 Ant Design（重点），所以组件库选择了Ant Design Vue。

### 覆盖 Ant Design Vue 样式

设计师眼中的 Ant Design === '丑'（心酸）。

#### 1.使用 .less 文件

Ant Design Vue 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，所以需要安装了 less、less-loader，在 `@/styles/antd-theme.less` 可以覆盖默认样式。

**优点是：**

方便快捷，可以修改 class，覆盖默认变量。

**缺点是：**

必须引入 `@import '~ant-design-vue/dist/antd.less';` ，引入后会将所有的组件样式全部引入，导致打包后的 css 体积达到 500kb 左右。

#### 2.使用 JavaScript 对象

通过 JavaScript 对象的方式可以修改内置变量，需要对 Less 进行配置：

```js
// vue.config.js
const modifyVars = require('./src/styles/antdTheme.js');

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars,
        },
      },
    },
  },
}

```

这一步还可以继续优化，通过 babel-plugin-import 使 Ant Design Vue 的组件样式可以按需加载：

```js
// babel.config.js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true },
    ],
  ],
};

```

**优点是：**

可以按需引入，打包后的 CSS 体积取决于你引用了多少个组件。

**缺点是：**

不能使用 class 进行样式覆盖。

### 干掉无用的图标

Ant Design Vue 把所有的 Icon 一次性引入（不管你因用了多少个组件），这使得体积打包后图标所占的体积竟然有几百 kb 之多。这些图标大多数不会被设计师所采纳，所以部分图标都应该被干掉：

创建一个 icons.js 来管理 Ant Design Vue 图标，这里以一个 Loading 图标为例：

```js
// @/src/assets/icons.js
export { default as LoadingOutline } from '@ant-design/icons/lib/outline/LoadingOutline';

```

**如何知道你要加载的图标在什么路径下？**

在 @ant-design/icons/lib 目录下有三种风格的图标，分别是 fill、outline、twotone，这里面内部的文件并不是 svg 格式，而是 js 和 ts 格式，这就是为什么我们可以这么引入图标的关键所在了。

下一步是通过配置 vue.config.js 将这个文件引入进来：

```js
// vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/assets/icons.js'),
      },
    },
  },
}

```

### 解决 Moment 多国语

解决到这之后，Ant Design Vue 居然还很大，这是因为 moment 是 Ant Design Vue 中有强依赖该插件，所以使用 webpack 插件减小打包体积，这里我们只保留 zh-cn 语言包：

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('ContextReplacementPlugin')
      .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/]);
  },
}

```

### 部分组件需要在页面内引用

Ant Design Vue 中部分体积较大的组件，例如 `DatePicker`，根据业务需求，应考虑在页面中进行加载，尽量保证首屏加载的速度：

```
<script>
import { DatePicker } from 'ant-design-vue';
export default {
  components: {
    ADatePicker: DatePicker,
  },
}
</script>

```

## 4.静态资源与图标

### 静态资源

所有的静态资源文件都会上传到 阿里云 OSS 上，所以在环境变量上加以区分。

`.env.development` 与 `.env.production` 的 `VUE_APP_STATIC_URL` 属性分别配置了本地的静态资源服务器地址和线上 OSS 的地址。

本地的静态资源服务器是通过 pm2 + http-server 创建的，设计师切完直接扔进来就好了。

### 自动注册 Svg 图标

在日常的开发中，总是会有着大量的图标需要使用，这里我们直接选择使用 SVG 图标。但是如果每次使用图标还需要通过路径找到这张图标岂不是很麻烦？

下面这种才是我想要的方案（直接 name 等于 文件名即可）：

```vue
<template>
<svg name="logo" />
</template>

```

而且最后打包后需要合并成一张雪碧图。

首先需要对 `@/assets/icons` 文件夹下的 svg 图标进行自动注册，需要对 webpack 和 svg-sprite-loader 进行了相关设置，文件全部打包成 svg-sprite。

```
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end();

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader');
  },
}

```

写一个全局用的 Vue 组件 `<m-svg />`:

// @/components/m-svg/index.js

```js
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('@/assets/icons', false, /\.svg$/);
requireAll(req);

```

@/components/m-svg/index.vue

```vue
<template>
  <svg class="mw-svg" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
export default {
  name: 'm-svg',
  props: {
    name: { type: String, default: '' },
  },
  computed: {
    iconName() {
      return `#${this.name}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.mw-svg {
  width: 1.4em;
  height: 1.4em;
  fill: currentColor;
  overflow: hidden;
  line-height: 1em;
  display: inline-block;
}
</style>

```

参数 name

- 类型：String
- 默认值：null
- 说明：放置在 `@/assets/icons` 文件夹下的文件名

样式

- 图标的大小可以通过 width + height 属性改变。
- 通过改变 font-size 属性改变，宽高 = font-zise \* 1.4

## 5.异步请求

### 封装 Axios

在 `@/libs/request.js` 路径下对 Axios 进行封装，封装了请求参数，请求头，以及错误提示信息、 request 拦截器、response 拦截器、统一的错误处理、baseURL 设置等。

废话不说直接贴代码：

```
import axios from 'axios';
import get from 'lodash/get';
import storage from 'store';
// 创建 axios 实例
const request = axios.create({
 // API 请求的默认前缀
 baseURL: process.env.VUE_APP_BASE_URL,
 timeout: 10000, // 请求超时时间
});

// 异常拦截处理器
const errorHandler = (error) => {
 const status = get(error, 'response.status');
 switch (status) {
   /* eslint-disable no-param-reassign */
   case 400: error.message = '请求错误'; break;
   case 401: error.message = '未授权，请登录'; break;
   case 403: error.message = '拒绝访问'; break;
   case 404: error.message = `请求地址出错: ${error.response.config.url}`; break;
   case 408: error.message = '请求超时'; break;
   case 500: error.message = '服务器内部错误'; break;
   case 501: error.message = '服务未实现'; break;
   case 502: error.message = '网关错误'; break;
   case 503: error.message = '服务不可用'; break;
   case 504: error.message = '网关超时'; break;
   case 505: error.message = 'HTTP版本不受支持'; break;
   default: break;
   /* eslint-disabled */
 }
 return Promise.reject(error);
};

// request interceptor
request.interceptors.request.use((config) => {
 // 如果 token 存在
 // 让每个请求携带自定义 token 请根据实际情况自行修改
 // eslint-disable-next-line no-param-reassign
 config.headers.Authorization = `bearer ${storage.get('ACCESS_TOKEN')}`;
 return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response) => {
 const dataAxios = response.data;
 // 这个状态码是和后端约定的
 const { code } = dataAxios;
 // 根据 code 进行判断
 if (code === undefined) {
   // 如果没有 code 代表这不是项目后端开发的接口
   return dataAxios;
 // eslint-disable-next-line no-else-return
 } else {
   // 有 code 代表这是一个后端接口 可以进行进一步的判断
   switch (code) {
     case 200:
       // [ 示例 ] code === 200 代表没有错误
       return dataAxios.data;
     case 'xxx':
       // [ 示例 ] 其它和后台约定的 code
       return 'xxx';
     default:
       // 不是正确的 code
       return '不是正确的code';
   }
 }
}, errorHandler);

export default request;

```

- 通过 VUE\_APP\_BASE\_URL 区分线上与开发环境的 API 地址。
- code 起到一个比较关键的作用，例如 token 过期时的验证。
- 使用了一个叫 sotre 的包作为本地储存的工具用来存储 token。

### 跨域问题

跨域问题一般情况直接找后端解决了，你要是不好意思打扰他们的话，可以用 devServer 提供的 proxy 代理：

```
// vue.config.js
devServer: {
  proxy: {
    '/api': {
      target: 'http://47.100.186.132/your-path/api',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}

```

### Mock 数据

一个很常见的情况，后端接口没出来，前端在这干瞪眼。

Mock 数据功能是基于 [mock.js (opens new window)](https://link.juejin.cn/?target=http%3A%2F%2Fmockjs.com%2F "http://mockjs.com/")开发，通过 webpack 进行自动加载 mock 配置文件。

#### 规则

- 所有的 mock 配置文件均应放置在 `@/mock/services` 路径内。
- 在 `@/mock/services` 内部可以建立业务相关的文件夹分类存放配置文件。
- 所有的配置文件应按照 `***.mock.js` 的命名规范创建。
- 配置文件使用 ES6 Module 导出 `export default` 或 `export` 一个数组。

#### 入口文件

```
import Mock from 'mockjs';

Mock.setup({
  timeout: '500-800',
});

const context = require.context('./services', true, /\.mock.js$/);

context.keys().forEach((key) => {
  Object.keys(context(key)).forEach((paramKey) => {
    Mock.mock(...context(key)[paramKey]);
  });
});

```

#### 示例模板

```
import Mock from 'mockjs';

const { Random } = Mock;

export default [
  RegExp('/example.*'),
  'get',
  {
    'range|50-100': 50,
    'data|10': [
      {
        // 唯一 ID
        id: '@guid()',
        // 生成一个中文名字
        cname: '@cname()',
        // 生成一个 url
        url: '@url()',
        // 生成一个地址
        county: Mock.mock('@county(true)'),
        // 从数组中随机选择一个值
        'array|1': ['A', 'B', 'C', 'D', 'E'],
        // 随机生成一个时间
        time: '@datetime()',
        // 生成一张图片
        image: Random.dataImage('200x100', 'Mock Image'),
      },
    ],
  },
];

```

## 6.路由

### Layout

布局暂时分为三大类：

- frameIn：基于 `BasicLayout`，通常需要登录或权限认证的路由。

- frameOut：不需要动态判断权限的路由，如登录页或通用页面。

- errorPage：例如404。

### 权限验证

通过获取当前用户的权限去比对路由表，生成当前用户具的权限可访问的路由表，通过 router.addRoutes 动态挂载到 router 上。

- 判断页面是否需要登陆状态，需要则跳转到 /user/login
- 本地存储中不存在 token 则跳转到 /user/login
- 如果存在 token，用户信息不存在，自动调用 vuex '/system/user/getInfo'

在路由中，集成了权限验证的功能，需要为页面增加权限时，在 meta 下添加相应的 key：

#### auth

- 类型：Boolean
- 说明：当 auth 为 true 时，此页面需要进行登陆权限验证，只针对 frameIn 路由有效。

#### permissions

- 类型：Object
- 说明：permissions 每一个 key 对应权限功能的验证，当 key 的值为 true 时，代表具有权限，若 key 为 false，配合 `v-permission` 指令，可以隐藏相应的 DOM。

在这里贴一下路由跳转时权限验证的代码：

```
import router from '@/router';
import store from '@/store';
import storage from 'store';
import util from '@/libs/utils';

// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const loginRoutePath = '/user/login';
const defaultRoutePath = '/home';

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach(async (to, from, next) => {
  // 进度条
  NProgress.start();
  // 验证当前路由所有的匹配中是否需要有登录验证的
  if (to.matched.some((r) => r.meta.auth)) {
    // 是否存有token作为验证是否登录的条件
    const token = storage.get('ACCESS_TOKEN');
    if (token && token !== 'undefined') {
      // 是否处于登录页面
      if (to.path === loginRoutePath) {
        next({ path: defaultRoutePath });
        // 查询是否储存用户信息
      } else if (Object.keys(store.state.system.user.info).length === 0) {
        store.dispatch('system/user/getInfo').then(() => {
          next();
        });
      } else {
        next();
      }
    } else {
      // 没有登录的时候跳转到登录界面
      // 携带上登陆成功之后需要跳转的页面完整路径
      next({
        name: 'Login',
        query: {
          redirect: to.fullPath,
        },
      });
      NProgress.done();
    }
  } else {
    // 不需要身份校验 直接通过
    next();
  }
});

router.afterEach((to) => {
  // 进度条
  NProgress.done();
  util.title(to.meta.title);
});

```

### 页面开发

- 根据业务需要划分，按照路由层级在 views 中创建相对应的页面组件，以文件夹的形式创建，并在文件夹内创建 index.vue 文件作为页面的入口文件。
- 页面内的组件：在页面文件夹下创建 components 文件夹，在其内部对应创建相应的组件文件，如果是复杂组件，应以文件夹的形式创建组件。
- 工具模块：能够高度抽象的工具模块，应创建在 @/src/libs 内创建 js 文件。

## 7、构建优化

### 包分析工具

构建代码之后，到底是什么占用了这么多空间？靠直觉猜测或者使用 webpack-bundle-analyzer。

```
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');

module.exports = {
  chainWebpack: (config) => {
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(WebpackBundleAnalyzer.BundleAnalyzerPlugin);
    }
  },
};

```

### 开启 Gzip

对，这这么一句话，后端就得支持你的 .gz 文件了，而你只需要坐着等老板夸：

```
chainWebpack: (config) => {
  config
    .plugin('CompressionPlugin')
    .use(CompressionPlugin, []);
},

```

### 路由懒加载

这块 @vue/cli 已经帮忙处理好了，但也需要了解一下他的原理和如何配置。

```
{
  path: 'home',
  name: 'Home',
  component: () => import(
    /* webpackChunkName: "home" */ '@/views/home/index.vue'
  ),
},

```

webpackChunkName 这条注释还是很有必要加的，至少你打包后知道又是哪个页面变得又臭又大。

### Preload & Prefetch

不清楚这两个功能的去 @vue/cli 补课，这两个功能非常有助于你处理加载的性能。

## 8.测试框架

直接使用了官方提供的 Vue Test Utils，这东西可以对组件进行测试，很不错。

写单元测试在团队里其实很难推进，不知道大家怎么看。

## 9.组件库

对于很多第三方的工具，我坚持认为二次封装成 vue 插件并没有多少开发成本，反而让你在后续的开发中变得很灵活。

我对以下库进行了 vue 插件的封装，并提交到 npm 私服：

- 数字动画
- 代码高亮
- 大文件上传（切片、断点续传、秒传）需要与后端配合
- 图片预览
- Excel 导入导出
- 富文本编辑器
- Markdown 编辑器
- 代码编辑器

> 大文件上传有兴趣的可以留言，我后续单独拎出来详细的写一下这块。

## 10.Vuex

内置一些功能，主要是对以下这些功能做了一些封装：

- 用户信息管理（储存信息、对 token 进行操作等）

- 登陆（调接口）

- 菜单管理（储存路由信息，生成菜单，模糊查询等功能）

- UA信息

- 全屏操作

- Loading

- 日志管理（消息提醒、日志留存、日志上报）

## 11.过滤器

过滤器是 Vue 提供的一个很好用的功能，听说 vue3 没了？

```
{{ message | capitalize }}

```

我写了几个常用的过滤器：

- 日期时间
- 剩余时间
- 区分环境的链接（主要针对本地静态资源服务器和 OSS ）
- 文件大小
- 数字金额
- 浮点型精度

## 12.指令

自定义指令可以提供很好的帮助：

- 组件权限验证
- 文本复制
- 快捷键绑定
- 滚动至指定位置
- 图片懒加载
- 焦点

## 13.开发规范

### ESLint

不管是多人合作还是个人项目，代码规范都是很重要的。这样做不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。

这里我们采用了 [Airbnb JavaScript Style Guide](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fairbnb%2Fjavascript "https://github.com/airbnb/javascript")。

这套规范给我的感觉就是 **很严谨**！

### CSS 规范

#### 降低选择器复杂性

浏览器读取选择器，遵循的原则是从选择器的右边到左边读取。

```
#block .text p {
color: red;
}

```

- 查找所有 P 元素。
- 查找结果 1 中的元素是否有类名为 text 的父元素
- 查找结果 2 中的元素是否有 id 为 block 的父元素

#### 选择器优先级

> 内联 > ID选择器 > 类选择器 > 标签选择器

- 选择器越短越好。
- 尽量使用高优先级的选择器，例如 ID 和类选择器。
- 避免使用通配符 \*。

#### 使用 flexbox

在早期的 CSS 布局方式中我们能对元素实行绝对定位、相对定位或浮动定位。而现在，我们有了新的布局方式 flexbox，它比起早期的布局方式来说有个优势，那就是性能比较好。不过 flexbox 兼容性还是有点问题，不是所有浏览器都支持它，所以要谨慎使用。 各浏览器兼容性：

- Chrome 29+
- Firefox 28+
- Internet Explorer 11
- Opera 17+
- Safari 6.1+ (prefixed with -webkit-)
- Android 4.4+
- iOS 7.1+ (prefixed with -webkit-)

#### 动画性能优化

在 CSS 中，transforms 和 opacity 这两个属性更改不会触发重排与重绘，它们是可以由合成器（composite）单独处理的属性。

#### 属性值

- 当数值为 0 - 1 之间的小数时，建议省略整数部分的 0。
- 当长度为 0 时建议省略单位。
- 建议不使用命名色值。
- 建议当元素需要撑起高度以包含内部的浮动元素时，通过对伪类设置 clear 或触发 BFC 的方式进行 clearfix。尽量不使用增加空标签的方式。
- 除公共样式之外，在业务代码中尽量不能使用 !important。
- 建议将 z-index 进行分层，对文档流外绝对定位元素的视觉层级关系进行管理。

#### 字体排版

- 字号应不小于 12px（PC端）。
- font-weight 属性建议使用数值方式描述。
- line-height 在定义文本段落时，应使用数值。

### Vue 代码规范

#### 常规

- 当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数 `data() { return {...} }`。

- prop 的定义应该尽量详细，至少需要指定其类型。

- 布尔类型的 attribute， 为 true 时直接写属性值。

- 不要在computed中对vue变量进行操作。

- 应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或改变 prop。

- 在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态。

- v-if 和 v-for 不能同时使用

- 公共方法尽量不要挂到原型上, 可以写在 utils 文件，也可以使用 mixin 文件。不要将业务公共组件注册到全局。

- 不要将任何第三方插件挂载到 vue 原型上。

- 具有高度通用性的方法，要封装到 libs、全局组件或指令集里。

- 为组件样式设置作用域。

- 尽量使用指令缩写。

#### vuex

[State (opens new window)](https://link.juejin.cn/?target=https%3A%2F%2Fvuex.vuejs.org%2Fzh%2Fguide%2Fstate.html "https://vuex.vuejs.org/zh/guide/state.html")为单一状态树，在 state 中需要定义我们所需要管理的数组、对象、字符串等等，只有在这里定义了，在 vue 的组件中才能获取你定义的这个对象的状态。

- 修改 `state` 中数据必须通过 `mutations`。
- 每一个可能发生改变的 `state` 必须同步创建一条或多条用来改变它的 `mutations`。
- 服务端获取的数据存放在 `state` 中，作为原始数据保留，不可变动。

[Getters (opens new window)](https://link.juejin.cn/?target=https%3A%2F%2Fvuex.vuejs.org%2Fzh%2Fguide%2Fgetters.html "https://vuex.vuejs.org/zh/guide/getters.html")有点类似 vue.js 的计算属性，当我们需要从 store 的 state 中派生出一些状态，那么我们就需要使用 getters，getters 会接收 state 作为第一个参数，而且 getters 的返回值会根据它的依赖被缓存起来，只有 getters 中的依赖值（state 中的某个需要派生状态的值）发生改变的时候才会被重新计算。

- 通过 `getters` 处理你需要得到的数据格式，而不是通过修改 `state` 原始数据。

- 组件内不强制使用 `mapGetters`，因为你可能需要使用 `getter` 和 `setter`。

- 改变 `state` 的唯一方法就是提交 [mutations (opens new window)](https://link.juejin.cn/?target=https%3A%2F%2Fvuex.vuejs.org%2Fzh%2Fguide%2Fmutations.html "https://vuex.vuejs.org/zh/guide/mutations.html")。

- 组件内使用 `mapMutations` 辅助函数将组件中的 `methods` 映射为 `store.commit` 调用。

- 命名采用 `大写字母` + `下划线` 的规则。

- 定义 `CLEAR`，以确保路由切换时可以初始化数据。

Actions

- 页面重的数据接口尽量在 [actions (opens new window)](https://link.juejin.cn/?target=https%3A%2F%2Fvuex.vuejs.org%2Fzh%2Fguide%2Factions.html "https://vuex.vuejs.org/zh/guide/actions.html")中调用。
- 服务端返回的数据尽量不作处理，保留原始数据。
- 获取到的数据必须通过调用 `mutations` 改变 `state`。

Modules

- 通常情况下按照页面划分 [modules (opens new window)](https://link.juejin.cn/?target=https%3A%2F%2Fvuex.vuejs.org%2Fzh%2Fguide%2Fmodules.html "https://vuex.vuejs.org/zh/guide/modules.html")。
- 默认内置了 `system` 保证了脚手架的基础功能。
- 每个页面模块或页面的子模块添加属性 `namespaced: true`。

## 14.完成详细的使用文档

不论是功能还是组件库等等的工具，都需要完善的文档提供查阅，即使是轮子的构建者，也抵不住时间长了会忘记许多细节。

这里我使用 vuepress 构建文档，方便快捷。

参考【[拯救懒癌文档君 - VuePress + Travis CI + Github Pages 自动线上生成文档](https://juejin.cn/post/6844903869558816781 "https://juejin.cn/post/6844903869558816781")】

## 15.Git 多人协作流程

公司使用内部搭建的 GitLab 托管代码

### Root 仓库

项目启动时，由项目管理者搭建起最原始的仓库，称为 Root 仓库（源仓库）。

源仓库的有个作用 :

- 汇总参与该项目的各个开发者的代码。
- 存放趋于稳定和可发布的代码。
- 向 Master 分支提交 Merge Requests 可以触发测试环境构建（CI/CD）。
- 源仓库是受保护的，开发者不可直接对其进行开发工作。

### 开发者仓库

任何开发者都没有权限对 Root 仓库进行直接的操作，源仓库建立以后，每个开发者需要做的事情就是把源仓库的 Fork 一份，作为自己日常开发的仓库。

- 每个开发者所Fork的仓库是完全独立的，互不干扰。
- 每个开发者提交到代码到自己的仓库中，开发工作完成以后，开发者可以向源仓库发送 Pull Request ，本地仓库先合并源仓库，解决冲突。
- 发起 Merge Request 请求管理员把自己的代码合并到源仓库中的 master 或 其他分支。

### Git 流程

![](./_media/基于Vue的前端架构，我做了这15点/d69d8098ee5d48da903d5dfe8248896d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

- 前端项目会在 `Root` 仓库下创建 `dev` 分支，用于代码的拉取和合并，如果有多个不同的测试环境，按照测试环境创建分支。
- 在本地的仓库中创建你的 `dev` 分支和其他功能性的分支。
- 开发过程中不允许直接在 `master` 分支上开发，创建一个新的分支进行开发，`git checkout –b {branch_name}`。
- 规范且详细的书写 `commit` ，推荐使用 `git-cz` 工具进行提交。
- 完成开发后将相应的分支合并到自己仓库的 `master` 分支。
- 将 `master` 分支 `push` 到自己的远程仓库（Fork仓库）。
- 向 `Root` 仓库 `dev` 分支提交 `Merge Requests`。
- 提醒前端负责人审查代码、解决冲突或测试环境上线。
- 解决冲突后 `git pull upstream dev` 拉取解决后的最新代码。
