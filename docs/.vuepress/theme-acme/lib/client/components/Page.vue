<script setup lang="ts">
// @ts-ignore
import PageMeta from '@vuepress/theme-default/lib/client/components/PageMeta.vue'
// @ts-ignore
import PageNav from '@vuepress/theme-default/lib/client/components/PageNav.vue'
</script>

<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <slot name="content-top" />

      <Content />

      <slot name="content-bottom" />
    </div>

    <PageMeta />

    <PageNav />

    <CommentService />

    <slot name="bottom" />
  </main>
</template>
