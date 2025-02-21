<script setup lang="ts">
import VPNavbarBrand from '@theme/VPNavbarBrand.vue'
import VPNavbarItems from '@theme/VPNavbarItems.vue'
import VPToggleColorModeButton from '@theme/VPToggleColorModeButton.vue'
import VPToggleSidebarButton from '@theme/VPToggleSidebarButton.vue'
import { useThemeLocaleData } from '@theme/useThemeData'
import { DeviceType, useUpdateDeviceStatus } from '@theme/useUpdateDeviceStatus'
import { hasGlobalComponent } from '@vuepress/helper/client'
import { usePageFrontmatter, useRouter } from 'vuepress/client';
import type { VNode } from 'vue'
import { computed, ref, resolveComponent, useTemplateRef, onMounted, onBeforeUnmount } from 'vue'



// defineEmits<(e: 'toggle-sidebar') => void>()
defineEmits<{
  toggleSidebar: []
}>()

defineSlots<{
  before?: (props: Record<never, never>) => VNode | VNode[] | null
  after?: (props: Record<never, never>) => VNode | VNode[] | null
  isSidebar?: (props: Record<never, never>) => any
}>()

const SearchBox = hasGlobalComponent('SearchBox')
  ? resolveComponent('SearchBox')
  : (): null => null

const themeLocale = useThemeLocaleData()

const navbar = useTemplateRef<HTMLElement | null>('navbar')
const navbarBrand = useTemplateRef<HTMLElement | null>('navbar-brand')

const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {}
  }
  return {
    maxWidth: `${linksWrapperMaxWidth.value}px`,
  }
})

const getCssValue = (el: HTMLElement | null, property: string): number => {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument.defaultView?.getComputedStyle(el, null)[
    property as keyof CSSStyleDeclaration
  ]

  const num = Number.parseInt(val as string, 10)

  return Number.isNaN(num) ? 0 : num
}

useUpdateDeviceStatus(
  DeviceType.Mobile,
  (mobileDesktopBreakpoint: number): void => {
    // avoid overlapping of long title and long navbar links
    const navbarHorizontalPadding =
      getCssValue(navbar.value, 'paddingLeft') +
      getCssValue(navbar.value, 'paddingRight')
    if (window.innerWidth < mobileDesktopBreakpoint) {
      linksWrapperMaxWidth.value = 0
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth -
        navbarHorizontalPadding -
        (navbarBrand.value?.offsetWidth ?? 0)
    }
  },
)


/* -------------------------------- neoTheme -------------------------------- */
defineProps({
  isSidebar: {
    type: Boolean,
    default: true
  }
});
const router = useRouter();
const previousTop = ref(0);
const isFixed = ref(false);
const isVisible = ref(false);
const isInvert = ref(true);
const handleScroll = () => {
  const currentTop = window.pageYOffset;

  if (currentTop < previousTop.value) {
    // Scrolling up
    if (currentTop > 0 && isFixed.value) isVisible.value = true;
    else {
      isVisible.value = false;
      isFixed.value = false;
    }
  } else {
    // Scrolling down
    isVisible.value = false;
    if (navbar.value && currentTop > navbar.value!.offsetHeight)
      isFixed.value = true;
  }
  previousTop.value = currentTop;
};

const frontmatter = usePageFrontmatter();
const handleInvert = () => {
  let invert = false;
  if (frontmatter.value.home) invert = true;
  isInvert.value = invert;
};
// handle navbar color invert after navigation
let unregisterRouterHook;

// avoid overlapping of long title and long navbar links
onMounted(() => {
  // TODO: migrate to css var
  // refer to _variables.scss
  const MOBILE_DESKTOP_BREAKPOINT = 719
  const navbarHorizontalPadding =
    getCssValue(navbar.value, 'paddingLeft') +
    getCssValue(navbar.value, 'paddingRight')
  const handleLinksWrapWidth = (): void => {
    if (window.innerWidth < MOBILE_DESKTOP_BREAKPOINT) {
      linksWrapperMaxWidth.value = 0
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth -
        navbarHorizontalPadding -
        (navbarBrand.value?.offsetWidth || 0)
    }
  }
  handleLinksWrapWidth()
  window.addEventListener('resize', handleLinksWrapWidth, false)
  window.addEventListener('orientationchange', handleLinksWrapWidth, false)

  handleInvert();
  unregisterRouterHook = router.afterEach(() => {
    handleInvert();
  });

  window.addEventListener("scroll", handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  unregisterRouterHook();
});
/* -------------------------------- neoTheme -------------------------------- */
</script>

<template>
  <header ref="navbar" class="vp-navbar" :class="{ 'is-fixed': isFixed || isSidebar, 'is-visible': isVisible || isSidebar, invert: isInvert }" vp-navbar>
    <VPToggleSidebarButton @toggle="$emit('toggleSidebar')" />

    <span ref="navbar-brand">
      <VPNavbarBrand />
    </span>

    <div class="vp-navbar-items-wrapper" :style="linksWrapperStyle">
      <slot name="before" />
      <VPNavbarItems class="vp-hide-mobile" />
      <slot name="after" />
      <VPToggleColorModeButton v-if="themeLocale.colorModeSwitch" />
      <SearchBox />
    </div>
  </header>
</template>

<style lang="scss">
@use '../styles/variables' as *;

.vp-navbar {
  --navbar-line-height: calc(
    var(--navbar-height) - 2 * var(--navbar-padding-v)
  );

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;

  box-sizing: border-box;
  height: var(--navbar-height);
  padding: var(--navbar-padding-v) var(--navbar-padding-h);
  border-bottom: 1px solid var(--vp-c-border);

  background-color: var(--vp-navbar-c-bg);

  line-height: var(--navbar-line-height);

  transition:
    background-color var(--vp-t-color),
    border-color var(--vp-t-color);

  @media screen and (max-width: $MQMobile) {
    padding-left: 4rem;
  }
}

.vp-navbar-items-wrapper {
  position: absolute;
  top: var(--navbar-padding-v);
  right: var(--navbar-padding-h);

  display: flex;

  box-sizing: border-box;
  height: var(--navbar-line-height);
  padding-left: var(--navbar-padding-h);

  font-size: 0.9rem;
  white-space: nowrap;
}
</style>
