<template>
    <div class="categories-wrapper card-box">
        <RouterLink
            to="/categories/"
            class="categories-title"
            title="全部分类"
        >
            <ac-icon
                name="acme-24gf-folderStar"
                size="1.4rem"
            />
            <span>&nbsp;&nbsp;{{ length === 'all' ? '全部分类' : '文章分类' }}</span>
        </RouterLink>
        <div class="categories-item">
            <RouterLink
                :to="`/categories/?category=${encodeURIComponent(item.key)}`"
                v-for="(item, index) in categories"
                :key="index"
                :class="{ active: item.key === category }"
            >
                {{ item.key }}
                <span class="categories-item__num">{{ item.length }}</span>
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
@import '../styles/_variables';
.categories-wrapper {
    .categories-title {
        color: var(--c-text);
        font-size: 1rem;
        opacity: 0.9;
        padding-left: 0.95rem;
        display: flex;
        align-items: center;
    }
    .categories-item {
        margin-top: 0.6rem;
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
                background: #f5f5f5;
                color: var(--c-border-accent);
                border-color: var(--c-border-accent);
            }
            &.active {
                background: var(--c-border-accent);
                padding-left: 0.8rem;
                border-radius: 2px;
                border-color: transparent;
            }
        }
        &__num {
            float: right;
            background-color: var(--c-bg-lighter);
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
