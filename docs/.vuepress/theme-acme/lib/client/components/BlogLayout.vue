<template>
    <main class="acme-page">
        <div class="acme-blog-wrapper">
            <div class="content-left">
                <slot name="content-left" />
            </div>
            <aside class="content-right">
                <slot name="content-right">
                    <BloggerInfo />
                    <ArticleBar />
                </slot>
            </aside>
        </div>
    </main>
</template>
<script>
import ArticleBar from '@theme/ArticleBar.vue'
import BloggerInfo from '@theme/BloggerInfo.vue'
export default {
    components: { BloggerInfo, ArticleBar },
}
</script>
<style lang="scss">
@import '../styles/_variables';
.acme-page {
    padding-top: calc(var(--navbar-height) + 0.75rem);
    padding-bottom: 2rem;
    .acme-blog-wrapper {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 0 2rem;
        margin: 0 auto;
        .content-left {
            max-width: var(--content-width);
            flex: 1;
        }
        .content-right {
            position: sticky;
            top: calc(var(--navbar-height) + 0.75rem);
            flex: 0 0 300px;
            height: auto;
            max-height: calc(100vh - 6rem);
            margin-top: 0;
            margin-left: 0.75rem;
            margin-bottom: 0.75rem;
            transition: all 0.3s;
        }
    }
    // 移动端
    @media (max-width: $MQNarrow) {
        .acme-blog-wrapper {
            padding: 0 1rem;
        }
        .content-right {
            display: none;
        }
    }
}
</style>
