<script setup lang="ts">
import NeoBlog from '@theme/NeoBlog.vue'
import NeoArticlesPage from '@theme/NeoArticlesPage.vue'
import NeoCategoriesPage from '@theme/NeoCategoriesPage.vue'
import NeoTagsPage from '@theme/NeoTagsPage.vue'
import NeoArchivesPage from '@theme/NeoArchivesPage.vue'
import NeoColumnsPage from '@theme/NeoColumnsPage.vue'
import NeoPage from '@theme/NeoPage.vue'
import NeoNavbar from '@theme/NeoNavbar.vue'
import NeoSidebar from '@theme/NeoSidebar.vue'
import { useScrollPromise } from '@theme/useScrollPromise'
import { useSidebarItems } from '@theme/useSidebarItems'
import { useThemeLocaleData } from '@theme/useThemeData'
import type { VNode } from 'vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { usePageData, usePageFrontmatter, useRouter } from 'vuepress/client'
import type { DefaultThemePageFrontmatter } from '../../shared/index.js'

defineSlots<{
  'navbar'?: (props: Record<never, never>) => VNode | VNode[] | null
  'navbar-before'?: (props: Record<never, never>) => VNode | VNode[] | null
  'navbar-after'?: (props: Record<never, never>) => VNode | VNode[] | null
  'sidebar'?: (props: Record<never, never>) => VNode | VNode[] | null
  'sidebar-top'?: (props: Record<never, never>) => VNode | VNode[] | null
  'sidebar-bottom'?: (props: Record<never, never>) => VNode | VNode[] | null
  'page'?: (props: Record<never, never>) => VNode | VNode[] | null
  'page-top'?: (props: Record<never, never>) => VNode | VNode[] | null
  'page-bottom'?: (props: Record<never, never>) => VNode | VNode[] | null
  'page-content-top'?: (props: Record<never, never>) => VNode | VNode[] | null
  'page-content-bottom'?: (
    props: Record<never, never>,
  ) => VNode | VNode[] | null
}>()

const page = usePageData()
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const themeLocale = useThemeLocaleData()

// navbar
const shouldShowNavbar = computed(
  () =>
    frontmatter.value.navbar !== false && themeLocale.value.navbar !== false,
)

// sidebar
const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}
const touchStart = { x: 0, y: 0 }
const onTouchStart = (e: TouchEvent): void => {
  touchStart.x = e.changedTouches[0].clientX
  touchStart.y = e.changedTouches[0].clientY
}
const onTouchEnd = (e: TouchEvent): void => {
  const dx = e.changedTouches[0].clientX - touchStart.x
  const dy = e.changedTouches[0].clientY - touchStart.y
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      toggleSidebar(true)
    } else {
      toggleSidebar(false)
    }
  }
}
/* -------------------------------- neoTheme -------------------------------- */
const enableToc = computed(
  () =>
    frontmatter.value.toc ||
    (themeLocale.value.toc !== false && frontmatter.value.toc !== false)
);
const enableCatalogue = computed(() => frontmatter.value.catalogue);
/* -------------------------------- neoTheme -------------------------------- */

// external-link-icon
const enableExternalLinkIcon = computed(
  () =>
    frontmatter.value.externalLinkIcon ??
    themeLocale.value.externalLinkIcon ??
    true,
)

// classes
const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length || enableCatalogue.value,
    'sidebar-open': isSidebarOpen.value,
    'external-link-icon': enableExternalLinkIcon.value,
    'has-toc': enableToc.value,
  },
  frontmatter.value.pageClass,
])

// close sidebar after navigation
let unregisterRouterHook: () => void
onMounted(() => {
  const router = useRouter()
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false)
  })
})
onUnmounted(() => {
  unregisterRouterHook()
})

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
</script>

<template>
  <div
    class="vp-theme-container theme-neo-container"
    :class="containerClass"
    vp-container
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <slot name="navbar">
      <NeoNavbar v-if="shouldShowNavbar" :isSidebar="!!sidebarItems.length" @toggle-sidebar="toggleSidebar">
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </NeoNavbar>
    </slot>

    <div class="vp-sidebar-mask" @click="toggleSidebar(false)" />

    <slot name="sidebar">
      <NeoSidebar v-if="!frontmatter.catalogue">
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </NeoSidebar>
    </slot>

    <slot name="page">
      <!-- 首页 -->
      <NeoBlog v-if="frontmatter.home" />
      <!-- 文章 -->
      <NeoArticlesPage v-else-if="frontmatter.articlesPage" />
      <!-- 标签 -->
      <NeoTagsPage v-else-if="frontmatter.tagsPage" />
      <!-- 分类 -->
      <NeoCategoriesPage v-else-if="frontmatter.categoriesPage" />
      <!-- 归档 -->
      <NeoArchivesPage v-else-if="frontmatter.archivesPage" />
      <!-- 专栏 -->
      <NeoColumnsPage v-else-if="frontmatter.columnsPage" />

      <Transition
        v-else
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <NeoPage :key="page.path">
          <template #top>
            <slot name="page-top" />
          </template>
          <template #content-top>
            <slot name="page-content-top" />
          </template>
          <template #content-bottom>
            <slot name="page-content-bottom" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </NeoPage>
      </Transition>
    </slot>
  </div>
</template>

<style lang="scss">
@use '../styles/variables' as *;

.vp-sidebar-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  display: none;

  width: 100vw;
  height: 100vh;
}

.vp-theme-container {
  // navbar is disabled
  &.no-navbar {
    .vp-sidebar {
      top: 0;

      @media (max-width: $MQMobile) {
        padding-top: 0;
      }
    }

    .vp-page {
      padding-top: 0;
    }

    // adjust heading margin and padding;
    [vp-content] {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 1.5rem;
        padding-top: 0;
      }
    }
  }

  &.no-sidebar {
    // hide sidebar
    .vp-sidebar {
      display: none;

      // show sidebar on mobile because it has navbar links
      @media (max-width: $MQMobile) {
        display: block;
      }
    }

    .vp-page {
      padding-left: 0;
    }
  }

  &.sidebar-open {
    @media (max-width: $MQMobile) {
      // show sidebar
      .vp-sidebar {
        transform: translateX(0);
      }

      // show sidebar mask
      .vp-sidebar-mask {
        display: block;
      }
    }
  }
}

/**
 * fade-slide-y transition
 */
.fade-slide-y {
  &-enter-active {
    transition: all 0.2s ease;
  }

  &-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
