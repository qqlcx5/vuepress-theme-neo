<script setup lang="ts">
// @ts-ignore
import TOC from '@theme/TOC.vue'
// @ts-ignore
import PageMeta from '@vuepress/theme-default/components/PageMeta.vue'
// @ts-ignore
import PageNav from '@vuepress/theme-default/components/PageNav.vue'
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
<style lang="scss" scoped>
// 有侧边栏的情况下，大于1200px在页面右侧添加toc容器
.theme-container:not(.no-sidebar).has-toc .page {
    @media (min-width: 1200px) {
        padding-right: 12rem;
    }
}
</style>
