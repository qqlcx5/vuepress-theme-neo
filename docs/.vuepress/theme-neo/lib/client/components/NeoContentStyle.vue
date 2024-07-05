<template>
    <div class="neo-content-style" :class="bgClass" :style="contentStyle">
        <div v-if="bgImageMask" class="neo-content-style-mask" :style="{ background: bgImageMask }" />
        <div class="neo-content-style-content">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

import { withBase } from "@vuepress/client";
import { computed, onMounted, ref } from "vue";
import { useThemeLocaleData } from "../composables";
// 根据主题配置的内容样式，设置背景
// 如果color，则使用主题配置的背景颜色
// 如果image，则使用主题配置的背景图片
// 如果 class-style 则使用 class 样式
// 根据数组随机切换背景图片，如果只有一个数组，则不切换
const themeLocale = useThemeLocaleData();

const contentStyle = computed(() => {
    const { contentStyle, contentBackground, contentImages } = themeLocale.value;
    switch (contentStyle) {
        case 'color':
            return { background: contentBackground };
        case 'image':
            return { backgroundImage: `url(${withBase(contentImages[bgImageID.value]?.path)})` };
        default:
            return {};
    }
});

const bgClass = computed(() => {
    return themeLocale.value.contentStyle === 'class-style' ? `bg-style-${bgImageID.value + 1}` : '';
});

const contentImages = computed(() => themeLocale.value.contentImages || []);
const bgImageID = ref(0);

const updateBackgroundImage = () => {
    if (contentImages.value.length > 1) {
        bgImageID.value = (bgImageID.value + 1) % contentImages.value.length;
    }
};

onMounted(() => {
    if (contentImages.value.length > 1) {
        setInterval(updateBackgroundImage, 120000);
    }
});

const bgImageMask = computed(() => contentImages.value[bgImageID.value]?.mask || null);
</script>

<style lang="scss" scoped>
.neo-content-style {
    position: relative;
    // margin: 0 auto;
    // box-sizing: border-box;
    height: 100vh;
    // overflow: hidden;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // text-align: center;
    // overflow: hidden;
    background-position: center;
    background-size: cover;
    --linesColor: rgba(50, 0, 0, 0.05);

    &.bg-style-1 {
        // 方格
        background-image: linear-gradient(90deg, var(--linesColor) 3%, transparent 3%), linear-gradient(0deg, var(--linesColor) 3%, transparent 3%);
        background-position: center center;
        background-size: 20px 20px;
    }

    &.bg-style-2 {
        // 横线
        background-image: repeating-linear-gradient(0, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%);
        background-size: 30px 30px;
    }

    &.bg-style-3 {
        // 竖线
        background-image: repeating-linear-gradient(90deg, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%);
        background-size: 30px 30px;
    }

    &.bg-style-4 {
        // 左斜线
        background-image: repeating-linear-gradient(-45deg, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%);
        background-size: 20px 20px;
    }

    &.bg-style-5 {
        // 右斜线
        background-image: repeating-linear-gradient(45deg, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%);
        background-size: 20px 20px;
    }

    &.bg-style-6 {
        // 点状
        background-image: radial-gradient(var(--linesColor) 1px, transparent 1px);
        background-size: 10px 10px;
    }

    &-mask {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    &-content {
        z-index: 2;
    }
}
</style>