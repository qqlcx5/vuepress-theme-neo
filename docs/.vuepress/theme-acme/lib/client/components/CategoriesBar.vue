<template>
    <div class="categories-wrapper card-box">
        <RouterLink
            to="/categories/"
            class="categories-title"
            title="全部分类"
        >
            <a-icon
                name="acmefenlei1"
                size="1.3rem"
                use-svg
            />
            <span>&nbsp;&nbsp;{{ length === 'all' ? '全部分类' : '文章分类' }}</span>
        </RouterLink>
        <div class="categories">
            <RouterLink
                :to="`/categories/?category=${encodeURIComponent(item.key)}`"
                v-for="(item, index) in categories"
                :key="index"
                :class="{ active: item.key === category }"
            >
                {{ item.key }}
                <span class="categories__num">{{ item.length }}</span>
            </RouterLink>
            <RouterLink
                to="/categories/"
                v-if="length !== 'all' && length < categoriesData.length"
                class="more"
            >更多 ...</RouterLink>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: {
        category: {
            type: String,
            default: ''
        },
        categoriesData: {
            type: Array,
            default: []
        },
        length: {
            type: [String, Number],
            default: 'all'
        }
    },
    setup(props) {
        const categories = computed(() => {
            return props.length === 'all' ? props.categoriesData : props.categoriesData.slice(0, props.length)
        })
        return { categories }
    }
}
</script>

<style lang='scss'>
.categories-wrapper {
    padding: 0.75rem 0;
    .categories-title {
        padding-left: 0.95rem;
        color: var(--c-text);
        font-size: 1.1rem;
        .acme-colour {
            vertical-align: -0.21em;
        }
    }
    .categories {
        margin-top: 0.3rem;
        a {
            display: block;
            opacity: 0.8;
            color: var(--c-text);
            padding: 8px 0.95rem 7px 0.95rem;
            font-size: 0.95rem;
            line-height: 0.95rem;
            position: relative;
            transition: all 0.2s;
            border-left: 2px solid transparent;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            &:not(.active):hover {
                background-color: var(--c-bg-lighter);
                color: var(--c-brand-light);
                border-color: var(--c-brand-light);
            }
            &.active {
                background-color: var(--c-bg-lighter);
                padding-left: 0.8rem;
                border-radius: 2px;
                border-color: transparent;
            }
        }
        &__num {
            float: right;
            background-color: var(--c-bg-light);
            color: var(--c-text);
            border-radius: 8px;
            padding: 0 0.13rem;
            min-width: 1rem;
            height: 1rem;
            line-height: 1rem;
            font-size: 0.6rem;
            text-align: center;
            opacity: 0.6;
            transition: opacity 0.3s;
        }
    }
}
</style>
