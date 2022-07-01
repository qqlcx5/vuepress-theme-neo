<template>
    <div class="custom-page categories-page">
        <main class="archives-wrapper">
            <h1 class="title">
                {{ $page.title }}
                <div class="title-count"> 总共 <i>{{ $sortPostsByDate.length }}</i> 篇文章 </div>
            </h1>
            <Timeline></Timeline>
        </main>
    </div>
</template>

<script>
import MainLayout from './MainLayout.vue'
import Timeline from './Timeline.vue'
import { inject } from 'vue'

export default {
    components: { MainLayout, Timeline },
    setup() {
        const $sortPostsByDate = inject('$sortPostsByDate').value
        return { $sortPostsByDate }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_variables';

.archives-wrapper {
    max-width: $MQNarrow;
    padding: 0.9rem;
    margin: 0 auto;
    .title {
        padding-left: 0.5em;
        &-count {
            font-size: 0.85rem;
            margin-top: 1.4rem;
            opacity: 0.8;
            float: right;
        }
    }
}
</style>
