<script setup lang="ts">
import NavbarBrand from '@theme/NavbarBrand.vue'
import NavbarItems from '@theme/NavbarItems.vue'
import ToggleColorModeButton from '@theme/ToggleColorModeButton.vue'
import ToggleSidebarButton from '@theme/ToggleSidebarButton.vue'
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useThemeLocaleData } from '../composables/index.js'
import { useRouter } from "vue-router";

defineEmits(['toggle-sidebar'])

// custom acme theme
defineProps({
  isSidebar: {
    type: Boolean,
    default: true
  }
});
// custom acme theme

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

// custom acme theme
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

const handleInvert = () => {
  let invert = false; 
      invert = true;
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

  // custom acme theme
  handleInvert();
  unregisterRouterHook = router.afterEach(() => {
    handleInvert();
  });

  window.addEventListener("scroll", handleScroll);
  // custom acme theme
})

// custom acme theme
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  unregisterRouterHook();
});
// custom acme theme

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ]
  const num = Number.parseInt(val, 10)
  return Number.isNaN(num) ? 0 : num
}
</script>

<template>
  <header ref="navbar" class="navbar" 
    :class="{
      'is-fixed': isFixed || isSidebar,
      'is-visible': isVisible || isSidebar,
      invert: isInvert
    }">
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
