---
title: PasswordInput 密码输入框
date: 2023-02-16 10:33:41
categories:
  - UI
tags:
  - 组件
columns:
  - 
---

# PasswordInput 密码输入框

## 代码演示

<ClientOnly>
  <PasswordInput />
  <!-- <password-input /> -->

</ClientOnly>

## Input.TextArea

```vue
<template>
  <div class="password-input">
    <div class="password-input-box">
      <input
        class="password-input-input"
        v-model="password"
        :maxlength="length"
        type="text"
      />
      <div class="password-input-item" v-for="i in length" :key="i">
        <div
          :class="{ 'password-input-item--active': password.length >= i }"
        ></div>
        <div
          :class="{ 'password-input-item--line': password.length + 1 === i }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    length: {
      type: Number,
      default: 6,
    },
  },
  // 方式一 你输入完密码外面校验完做了清空你里面就不会生效
  // data() {
  //   return {
  //     password: this.value,
  //   };
  // },
  // methods: {
  //   handleInput() {
  //     this.$emit("input", this.password);
  //   },
  // },
  // 方式二
  computed: {
    password: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes flicker {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.password-input {
  height: 48px;
  &-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
  }
  &-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
  }
  &-item {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(240, 242, 245, 1);
    &--active {
      width: 16px;
      height: 16px;
      color: rgba(48, 49, 51, 100);
      background-color: #333;
      border-radius: 50%;
    }
    &--line {
      width: 2px;
      height: 50%;
      background-color: rgba(48, 49, 51, 100);
      animation: flicker 0.8s infinite;
    }
  }
}
</style>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框内容 | string | - |
| placeholder | 输入框占位文本 | string | - |
| disabled | 是否禁用状态，默认为 false | boolean | false |
| size | 输入框尺寸，可选值为 large、small、default 或者不设置 | string | default |
| prefix | 输入框头部图标 | string | - |
| suffix | 输入框尾部图标 | string | - |
| onPressEnter | 按下回车的回调 | function(e) | - |
| onChange | 输入框内容变化时的回调 | function(e) | - |
| onFocus | 输入框聚焦时的回调 | function(e) | - |
| onBlur | 输入框失去焦点时的回调 | function(e) | - |
| onSearch | 点击搜索图标时的回调 | function(value) | - |
| onClear | 点击清除图标时的回调 | function(value) | - |
| onVisibleChange | 点击切换密码可见状态时的回调 | function(visible) | - |
| onPaste | 粘贴事件 | function(e) | - |
| onCopy | 复制事件 | function(e) | - |
| onCut | 剪切事件 | function(e) | - |
| onCompositionStart | 中文输入开始时的回调 | function(e) | - |
| onCompositionUpdate | 中文输入中的回调 | function(e) | - |
| onCompositionEnd | 中文输入结束时的回调 | function(e) | - |
| onContextMenu | 右键点击时的回调 | function(e) | - |
| onDoubleClick | 双击鼠标时的回调 | function(e) | - |
| onDrag | 拖拽时的回调 | function(e) | - |
| onDragEnd | 拖拽结束时的回调 | function(e) | - |
| onDragEnter | 拖拽进入目标元素时的回调 | function(e) | - |
| onDragExit | 拖拽离开目标元素时的回调 | function(e) | - |
| onDragLeave | 拖拽离开目标元素时的回调 | function(e) | - |
| onDragOver | 拖拽在目标元素上方时的回调 | function(e) | - |
| onDragStart | 拖拽开始时的回调 | function(e) | - |
| onDrop | 拖拽元素放在目标元素上方时的回调 | function(e) | - |
| onMouseDown | 鼠标按下时的回调 | function(e) | - |
| onMouseEnter | 鼠标进入目标元素时的回调 | function(e) | - |
| onMouseLeave | 鼠标离开目标元素时的回调 | function(e) | - |
| onMouseMove | 鼠标在目标元素上方移动时的回调 | function(e) | - |
| onMouseOut | 鼠标离开目标元素时的回调 | function(e) | - |
| onMouseOver | 鼠标进入目标元素时的回调 | function(e) | - |
| onMouseUp | 鼠标松开时的回调 | function(e) | - |
| onWheel | 滚轮事件 | function(e) | - |
| onInput | 输入事件 | function(e) | - |
| onInvalid | 输入无效时的回调 | function(e) | - |
| onKeyDown | 键盘按下时的回调 | function(e) | - |
| onKeyPress | 键盘按下时的回调 | function(e) | - |
| onKeyUp | 键盘松开时的回调 | function(e) | - |
| onAbort | 当音频/视频的加载已放弃时 | function(e) | - |
| onCanPlay | 当浏览器可以播放音频/视频时 | function(e) | - |
| onCanPlayThrough | 当浏览器可在不因缓冲而停顿的情况下进行播放时 | function(e) | - |
| onDurationChange | 当音频/视频的时长已更改时 | function(e) | - |
| onEmptied | 当目前的播放列表为空时 | function(e) | - |
| onEncrypted | 当媒体已被加密时 | function(e) | - |
| onEnded | 当目前的播放列表已结束时 | function(e) | - |
| onError | 当在音频/视频加载期间发生错误时 | function(e) | - |
| onLoadedData | 当浏览器已加载音频/视频的当前帧时 | function(e) | - |
| onLoadedMetadata | 当浏览器已加载音频/视频的元数据时 | function(e) | - |
| onLoadStart | 当浏览器开始查找音频/视频时 | function(e) | - |
| onPause | 当音频/视频已暂停时 | function(e) | - |
| onPlay | 当音频/视频已开始或不再暂停时 | function(e) | - |
| onPlaying | 当音频/视频在已因缓冲而暂停或停止后已就绪时 | function(e) | - |
| onProgress | 当浏览器正在下载音频/视频时 | function(e) | - |
| onRateChange | 当音频/视频的播放速度已更改时 | function(e) | - |
| onSeeked | 当用户已移动/跳跃到音频/视频中的新位置时 | function(e) | - |
| onSeeking | 当用户开始移动/跳跃到音频/视频中的新位置时 | function(e) | - |
| onStalled | 当浏览器尝试获取媒体数据，但数据不可用时 | function(e) | - |
| onSuspend | 当浏览器刻意不获取媒体数据时 | function(e) | - |
| onTimeUpdate | 当目前的播放位置已更改时 | function(e) | - |
| onVolumeChange | 当音量已更改时 | function(e) | - |
| onWaiting | 当视频由于需要缓冲下一帧而停止 | function(e) | - |
| onToggle | 点击切换密码可见状态时的回调 | function(visible) | - |
| onToggleVisible | 点击切换密码可见状态时的回调 | function(visible) | - |
| onTogglePasswordVisible | 点击切换密码可见状态时的回调 | function(visible) | - |
