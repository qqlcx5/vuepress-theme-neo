# vuePress 打字效果插件

## 快速开始

### 使用`npm`安装

```bash
$ npm i vuepress-plugin-typed
```

### 开始使用和配置

> 基础使用方法

```js
// config.js
 plugins: [
    ['typed',{
      // 对应的标签选择器
      selector: '.banner-content .hero .description',
      // 打字内容
      strings: ["苦难磨炼一些人，也毁灭另一些人。——富勒", "一个不注意小事情的人，永远不会成就大事业。——卡耐基", "内外相应，言行相称。——韩非", "阅读一切好书如同和过去最杰出的人谈话。——笛卡儿"],
      typeSpeed: 80, // 打字速度
      backSpeed: 50, // 回退速度
      showCursor: false, //关闭光标
      }
    ],
  ],
```

## 更多配置(来自 typed 说明)

> 配置使用了 typed 的全部配置
> [typed](https://github.com/mattboldt/typed.js/#customization)

### 1.战术暂停

> 您可以通过包含转义字符在字符串中间暂停给定的时间。

```js
{
    strings: ['First ^1000 sentence.', 'Second sentence.']
}
```

### 2.全部`Api`

```js
{
  /**
   * @property {array} 显示文字的内容 一组
   * @property {string} 显示文字的内容 单个
   */
  strings: [
    'These are the default values...',
    'You know what you should do?',
    'Use your own!',
    'Have a great day!'
  ],
  stringsElement: null,

  /**
   * @property {number} 打字输入的速度(ms)
   */
  typeSpeed: 0,

  /**
   * @property {number} 延迟开始打字(ms)
   */
  startDelay: 0,

  /**
   * @property {number} 退格删除的速度(ms)
   */
  backSpeed: 0,

  /**
   * @property {boolean} 聪明退格 退格是会识别文字是否相同 相同时不退格相同内容
   */
  smartBackspace: true,

  /**
   * @property {boolean} 混淆
   */
  shuffle: false,

  /**
   * @property {number} 延迟开始退格(ms)
   */
  backDelay: 700,

  /**
   * @property {boolean} 淡出效果
   * @property {string} 淡出的animation类型
   * @property {boolean} 淡出的延迟
   */
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,

  /**
   * @property {boolean} 循环播放
   * @property {number} 循环次数 Infinity为无限
   */
  loop: false,
  loopCount: Infinity,

  /**
   * @property {boolean} 显示光标
   * @property {string} 光标内容
   * @property {boolean} 自动插入css
   */
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,

  /**
   * @property {string} 打字属性
   * Ex: 输入占位符、值或仅 HTML 文本
   */
  attr: null,

  /**
   * @property {boolean} 赋值输入聚焦事件
   * Ex：如果 el 是文本输入，则绑定到焦点和模糊
   */
  bindInputFocusEvents: false,

  /**
   * @property {string} 当前类型 'html' 或 'null' 文本
   */
  contentType: 'html',

  /**
   * 开始打字的回调
   * @param {Typed} self
   */
  onBegin: (self) => {},

  /**
   * 全部打字内容完成的回调
   * @param {Typed} self
   */
  onComplete: (self) => {},

  /**
   * 在输入每个字符串之前的回调
   * @param {number} arrayPos
   * @param {Typed} self
   */
  preStringTyped: (arrayPos, self) => {},

  /**
   * 在输入每个字符串之后的回调
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStringTyped: (arrayPos, self) => {},

  /**
   * 在循环期间，在输入最后一个字符串之后的回调
   * @param {Typed} self
   */
  onLastStringBackspaced: (self) => {},

  /**
   * 暂停时的回调
   * @param {number} arrayPos
   * @param {Typed} self
   */
  ontypedPaused: (arrayPos, self) => {},

  /**
   * 停止后又开始的回调
   * @param {number} arrayPos
   * @param {Typed} self
   */
  ontypedResumed: (arrayPos, self) => {},

  /**
   * 重置时的回调
   * @param {Typed} self
   */
  onReset: (self) => {},

  /**
   * 停止时的回调
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStop: (arrayPos, self) => {},

  /**
   * 开始时的回调
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStart: (arrayPos, self) => {},

  /**
   * 移除时的回调
   * @param {Typed} self
   */
  onDestroy: (self) => {}
}
```

## 最后

-   刚开始想做一个打字效果文字时`style`调整了一段时间感觉并不理想
-   改用`javascript`使用库[typed.js](https://mattboldt.com/demos/typed-js/)实现起来非常容易,但需要配置`vuepress`的 enhanceApp.js
-   但是目前没有 vuepress 的打字效果插件于是... 有了此插件
