<script setup lang="ts">
import { ref } from 'vue'
import { usePageFrontmatter } from '@vuepress/client';
// @ts-ignore
import TOC from '@theme/TOC.vue'
// @ts-ignore
import PageMeta from '@vuepress/theme-default/components/PageMeta.vue'
// @ts-ignore
import PageNav from '@vuepress/theme-default/components/PageNav.vue'
// @ts-ignore
import Catalogue from '@theme/Catalogue.vue'
import { useSidebarItems } from '../composables/index.js'
const frontmatter = usePageFrontmatter();

// custom acme theme 
let isCatalogue = ref(false)
const sidebarItems = useSidebarItems()
frontmatter.value.catalogue && (isCatalogue.value = true)
// custom acme theme 
</script>

<template>
    <main class="page">
        <slot name="top" />
        <!-- 右侧目录 -->
        <TOC />
        <div class="theme-default-content">
            <slot name="content-top" />
            
            <Content />
            <!-- 目录页 -->
            <Catalogue v-if="isCatalogue" :list="sidebarItems" />

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
        padding-right: 16rem;
    }
}
</style>
