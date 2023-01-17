<template>
    <BlogLayout>
        <template #content-left>
            <div class="archives-page dark-shadow">
                <div class="archives-wrapper">
                    <h1 class="title">
                        {{ $page.title }}
                        <div class="title-count"> 总共 <i>{{ sortPostsByDateSymbol.length }}</i> 篇文章 </div>
                    </h1>
                    <Timeline></Timeline>
                </div>
            </div>
        </template>
    </BlogLayout>

</template>

<script>
import BlogLayout from '@theme/BlogLayout.vue'
import Timeline from '@theme/Timeline.vue'
import { inject } from 'vue'

export default {
    components: { BlogLayout, Timeline },
    setup() {
        const sortPostsByDateSymbol = inject('sortPostsByDateSymbol').value
        return { sortPostsByDateSymbol }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_variables';
.archives-page {
    padding-right: 1.2em;
    overflow: hidden;
    .archives-wrapper {
        // max-width: $MQNarrow;
        // padding: 0.9rem;
        // margin: 0 auto;
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
