<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'

/* -------------------------------- neoTheme -------------------------------- */
import { ref } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'
import NeoCatalogue from '@theme/NeoCatalogue.vue'
import NeoToc from '@theme/NeoToc.vue'
import { useSidebarItems } from '../composables/neoIndex.js'
const frontmatter = usePageFrontmatter()
const sidebarItems = useSidebarItems()
const isCatalogue = ref(false)
frontmatter.value.catalogue && (isCatalogue.value = true)
/* -------------------------------- neoTheme -------------------------------- */
defineSlots<{
  'top'?: (props: Record<never, never>) => any
  'bottom'?: (props: Record<never, never>) => any
  'content-top'?: (props: Record<never, never>) => any
  'content-bottom'?: (props: Record<never, never>) => any
}>()
</script>

<template>
    <main class="page">
        <slot name="top" />
        <!-- 右侧目录 -->
        <NeoToc />
        <div class="theme-default-content">
            <slot name="content-top" />

            <Content />
            <!-- 目录页 -->
            <NeoCatalogue v-if="isCatalogue" :list="sidebarItems" />

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