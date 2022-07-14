<script setup lang="ts">
// @ts-ignore
import PageMeta from '@vuepress/theme-default/lib/client/components/PageMeta.vue'
// @ts-ignore
import PageNav from '@vuepress/theme-default/lib/client/components/PageNav.vue'
import TOC from './TOC.vue';
</script>

<template>
  <main class="page">
    <slot name="top" />
    <!-- 右侧目录 -->
    <TOC /> 
    <div class="theme-default-content">
      <slot name="content-top" />

      <Content />

      <slot name="content-bottom" />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />
  </main>
</template>
<style lang="scss">
@import '../styles/_variables';
// 没有侧边栏的情况下，大于MQNarrow在页面右侧添加toc容器
.theme-container.no-sidebar .page {
    @media (min-width: $MQMobile) {
        padding-left: 0;
    }
    @media (min-width: $MQNarrow) {
        padding-right: 13rem;
    }
}
// 有侧边栏的情况下，大于1380px在页面右侧添加toc容器
.theme-container .page {
    @media (min-width: 1380px) {
        padding-right: 16rem;
    }
}
</style>
