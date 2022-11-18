<template>
    <main class="acme-page">
        <div class="acme-blog-wrapper">
            <div class="content-left">
                <slot name="content-left" />
            </div>
            <aside class="content-right">
                <slot name="content-right">
                    <BloggerInfo />
                    <BlogType />
                    <SiteInfo />
                </slot>
            </aside>
        </div>
    </main>
</template>
<script>
import SiteInfo from '@theme/SiteInfo.vue'
import BlogType from '@theme/BlogType.vue'
import BloggerInfo from '@theme/BloggerInfo.vue'
export default {
    components: { SiteInfo, BloggerInfo, BlogType },
}
</script>
<style lang="scss" scoped>
@import '../styles/_variables';
.acme-page {
    padding-top: var(--navbar-height);
    .acme-blog-wrapper {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 0.75rem;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 0.75rem;
        box-sizing: border-box;
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
            margin-left: 0.75rem;
            transition: all 0.3s;
        }
    }
    // 移动端
    @media (max-width: $MQNarrow) {
        .acme-blog-wrapper {
            padding-top: 0.75rem;
            padding-left: 1rem;
            padding-right: 1rem;
            padding-bottom: 0.75rem;
        }
        .content-right {
            display: none;
        }
    }
}
</style>
