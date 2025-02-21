<template>
    <main class="neo-page">
        <div class="neo-blog-wrapper">
            <div class="content-left">
                <slot name="content-left" />
            </div>
            <aside class="content-right">
                <slot name="content-right">
                    <NeoBloggerInfo />
                    <NeoBlogType />
                    <NeoSiteInfo />
                </slot>
            </aside>
        </div>
    </main>
</template>
<script>
import NeoSiteInfo from '@theme/NeoSiteInfo.vue'
import NeoBlogType from '@theme/NeoBlogType.vue'
import NeoBloggerInfo from '@theme/NeoBloggerInfo.vue'
export default {
    components: { NeoSiteInfo, NeoBlogType, NeoBloggerInfo },
}
</script>
<style lang="scss" scoped>
@use '../styles/variables' as *;;
.neo-page {
    padding-top: var(--navbar-height);
    .neo-blog-wrapper {
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
        .neo-blog-wrapper {
            display: flex;
            flex-direction: column-reverse;
            padding-top: 0.75rem;
            padding-left: 1rem;
            padding-right: 1rem;
            padding-bottom: 1rem;
            .content-left, .content-right {
                width: 100%;
                margin: 0 auto;
            }
            .content-right {
                position: relative;
                top: 0;
                margin-bottom: 1rem;
                max-width: var(--content-width);
            }
        }
    }
}
</style>
