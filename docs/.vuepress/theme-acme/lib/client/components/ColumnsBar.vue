<template>
    <div class="columns-wrapper dark-shadow">
        <RouterLink to="/columns/" class="columns-title" title="栏目">
            栏目
        </RouterLink>
        <div class="columns">
            <RouterLink :to="`/columns/?column=${encodeURIComponent(item.key)}`" v-for="(item, index) in columns" :key="index" :class="{ active: item.key === column }">
                {{ item.key }}
                <span class="columns__num">{{ item.length }}</span>
            </RouterLink>
            <RouterLink to="/columns/" v-if="length !== 'all' && length < columnsData.length">更多 ...</RouterLink>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: {
        column: {
            type: String,
            default: ''
        },
        columnsData: {
            type: Array,
            default: []
        },
        length: {
            type: [String, Number],
            default: 'all'
        }
    },
    setup(props) {
        const columns = computed(() => {
            return props.length === 'all' ? props.columnsData : props.columnsData.slice(0, props.length)
        })
        return { columns }
    }
}
</script>

<style lang="scss" scoped>
.columns-wrapper {
    padding-bottom: 0.5rem;
    .columns-title {
        padding: 0.68rem 0.68rem 0.68rem 0.95rem;
        color: var(--c-text);
        font-size: 1rem;
        border-bottom: 1px solid var(--c-border);
        display: flex;
        align-items: center;
    }
    .columns {
        // padding: 0.3rem 0;
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
