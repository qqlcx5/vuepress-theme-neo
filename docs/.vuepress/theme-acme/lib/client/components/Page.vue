<script setup lang="ts">
// @ts-ignore
import TOC from '@theme/TOC.vue'
// @ts-ignore
import PageMeta from '@vuepress/theme-default/components/PageMeta.vue'
// @ts-ignore
import PageNav from '@vuepress/theme-default/components/PageNav.vue'
// @ts-ignore
import Catalogue from '@theme/Catalogue.vue'
import { ref } from 'vue'
import { usePageFrontmatter } from '@vuepress/client';
import { useThemeLocaleData } from '../composables/index.js'
const frontmatter = usePageFrontmatter();
const themeLocale = useThemeLocaleData()

// custom acme theme Catalogue 
let isCatalogue = ref(false)
let CatalogueList = ref([])
frontmatter.value.catalogue && (isCatalogue.value = true)
CatalogueList.value = themeLocale.value.sidebar[`/${frontmatter.value.catalogue}/`] || []
// custom acme theme Catalogue 
</script>

<template>
    <main class="page">
        <slot name="top" />
        <!-- 右侧目录 -->
        <TOC />
        <div class="theme-default-content">
            <slot name="content-top" />
            
            <!-- 目录页 -->
            <Catalogue v-if="isCatalogue" :list="CatalogueList" />
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
        padding-right: 16rem;
    }
}
</style>
