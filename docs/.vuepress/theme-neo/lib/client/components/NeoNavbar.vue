<script setup lang="ts">
import NavbarBrand from '@theme/VPNavbarBrand.vue'
import NavbarItems from '@theme/VPNavbarItems.vue'
import ToggleColorModeButton from '@theme/VPToggleColorModeButton.vue'
import ToggleSidebarButton from '@theme/VPToggleSidebarButton.vue'
import { usePageFrontmatter } from '@vuepress/client';
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useRouter } from "vue-router";
import {
  DeviceType,
  useThemeLocaleData,
  useUpdateDeviceStatus,
} from '../composables/neoIndex.js'


defineEmits<(e: 'toggle-sidebar') => void>()

defineSlots<{
  before?: (props: Record<never, never>) => any
  after?: (props: Record<never, never>) => any
  isSidebar?: (props: Record<never, never>) => any
}>()

const themeLocale = useThemeLocaleData()

const navbar = ref<HTMLElement | null>(null)
const navbarBrand = ref<HTMLElement | null>(null)

const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {}
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + 'px',
  }
})

useUpdateDeviceStatus(
  DeviceType.MOBILE,
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
        (navbarBrand.value?.offsetWidth || 0)
    }
  },
)

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ]
  const num = Number.parseInt(val, 10)
  return Number.isNaN(num) ? 0 : num
}

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
  <header ref="navbar" class="navbar" :class="{ 'is-fixed': isFixed || isSidebar, 'is-visible': isVisible || isSidebar, invert: isInvert }">
    <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />

    <span ref="navbarBrand">
      <NavbarBrand />
    </span>

    <div class="navbar-items-wrapper" :style="linksWrapperStyle">
      <slot name="before" />
      <NavbarItems class="can-hide" />
      <slot name="after" />
      <ToggleColorModeButton v-if="themeLocale.colorModeSwitch" />
      <NavbarSearch />
    </div>
  </header>
</template>
