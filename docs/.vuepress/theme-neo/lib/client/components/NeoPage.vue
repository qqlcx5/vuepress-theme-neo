<script setup lang="ts">
import VPPageMeta from '@theme/VPPageMeta.vue'
import VPPageNav from '@theme/VPPageNav.vue'
import type { VNode } from 'vue'
import { Content } from 'vuepress/client'
/* -------------------------------- neoTheme -------------------------------- */
import { ref } from 'vue'
import { usePageFrontmatter } from 'vuepress/client'
import NeoCatalogue from '@theme/NeoCatalogue.vue'
import NeoToc from '@theme/NeoToc.vue'
import { useSidebarItems } from '../composables/neoIndex.js'
const frontmatter = usePageFrontmatter()
const sidebarItems = useSidebarItems()
const isCatalogue = ref(false)
frontmatter.value.catalogue && (isCatalogue.value = true)
/* -------------------------------- neoTheme -------------------------------- */
defineSlots<{
  'top'?: (props: Record<never, never>) => VNode | VNode[] | null
  'bottom'?: (props: Record<never, never>) => VNode | VNode[] | null
  'content-top'?: (props: Record<never, never>) => VNode | VNode[] | null
  'content-bottom'?: (props: Record<never, never>) => VNode | VNode[] | null
}>()
</script>

<template>
  <main class="vp-page">
    <slot name="top" />
    <!-- 右侧目录 -->
    <NeoToc />
    <div vp-content>
      <slot name="content-top" />

      <Content />
      <!-- 目录页 -->
      <NeoCatalogue v-if="isCatalogue" :list="sidebarItems" />

      <slot name="content-bottom" />
    </div>

    <VPPageMeta />

    <VPPageNav />

    <slot name="bottom" />
  </main>
</template>

<style lang="scss">
@use '../styles/mixins';
@use '../styles/variables' as *;

.vp-page {
  display: block;

  // leave space for navbar
  padding-top: var(--navbar-height);
  padding-bottom: 2rem;

  // leave space for sidebar
  padding-left: var(--sidebar-width);

  // narrow desktop / iPad
  @media (max-width: $MQNarrow) {
    // leave space for sidebar
    padding-left: var(--sidebar-width-mobile);
  }

  // wide mobile
  @media (max-width: $MQMobile) {
    // sidebar is collapsed
    padding-left: 0;
  }

  [vp-content] {
    @include mixins.content-wrapper;

    & {
      padding-top: 0;
    }
  }
  // 有侧边栏的情况下，大于1200px在页面右侧添加toc容器
  [vp-content]:not(.no-sidebar).has-toc .page {
      @media (min-width: 1200px) {
          padding-right: 16rem;
      }
  }
}
</style>
