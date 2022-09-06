<template>
    <div class="archives-page">
        <main class="archives-wrapper">
            <h1 class="title">
                {{ $page.title }}
                <div class="title-count"> 总共 <i>{{ _sortPostsByDate.length }}</i> 篇文章 </div>
            </h1>
            <Timeline></Timeline>
        </main>
    </div>
</template>

<script>
import Layout from '@theme/TwoColumnLayout.vue'
import Timeline from '@theme/Timeline.vue'
import { inject } from 'vue'

export default {
    components: { Layout, Timeline },
    setup() {
        const _sortPostsByDate = inject('_sortPostsByDate').value
        return { _sortPostsByDate }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_variables';
.archives-page {
    padding-top: calc(var(--navbar-height) + 0.75rem);

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
}
</style>
