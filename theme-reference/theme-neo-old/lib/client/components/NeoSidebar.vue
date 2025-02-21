<script setup lang="ts">
import NavbarItems from '@theme/NavbarItems.vue'
import NeoSidebarItems from '@theme/NeoSidebarItems.vue'

defineSlots<{
  top?: (props: Record<never, never>) => any
  bottom?: (props: Record<never, never>) => any
}>()
</script>

<template>
  <aside class="sidebar">
    <NavbarItems />
    <slot name="top" />
    <NeoSidebarItems />
    <slot name="bottom" />
  </aside>
</template>
