<template>
    <div class="tags-wrapper dark-shadow">
        <RouterLink to="/tags/" class="tags-title" title="标签">
            标签
        </RouterLink>
        <div class="tags">
            <template v-for="(item, index) in tags" :key="item.key">
                <router-link :to="`/tags/?tag=${encodeURIComponent(item.key)}`" :style="tagStyleList[index]" :class="{ active: item.key === tag }">{{ item.key }} {{ item.length }}</router-link>
            </template>
            <router-link to="/tags/" v-if="length !== 'all' && tagsData.length > length">更多...</router-link>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue'
export default {
    props: {
        tag: {
            type: String,
            default: ''
        },
        tagsData: {
            type: Array,
            default: []
        },
        length: {
            type: [String, Number],
            default: 'all'
        }
    },
    setup(props) {
        const tagBgColor = ref(['#11a8cd', '#F8B26A', '#67CC86', '#E15B64', '#F47E60', '#849B87'])
        const tagStyleList = ref([])

        const tags = computed(() => {
            return props.length === 'all' ? props.tagsData : props.tagsData.slice(0, props.length)
        })
        onMounted(() => {
            for (let i = 0, tagH = tags.value.length; i < tagH; i++) {
                tagStyleList.value.push(getTagStyle())
            }
        })
        function getTagStyle() {
            const useColorRandom = tagBgColor.value[Math.floor(Math.random() * tagBgColor.value.length)]
            return `background: ${useColorRandom}; --c-random: ${useColorRandom};`
        }
        return {
            tags,
            tagStyleList
        }
    }
}
</script>

<style lang="scss" scoped>
.tags-wrapper {
    .tags-title {
        padding: 0.68rem 0.68rem 0.68rem 0.95rem;
        color: var(--c-text);
        font-size: 1rem;
        border-bottom: 1px solid var(--c-border);
        display: flex;
        align-items: center;
    }
    .tags {
        padding: 0.5rem;
        color: var(--c-bg);
        transition: transform 0.25s ease-in-out 0.08s, opacity 0.25s ease-in-out 0.04s;
        transform: translateY(0px);
        transition: transform 0.25s ease-in-out 0.04s, opacity 0.25s ease-in-out 0.04s;
        // justify-content: flex-start;
        text-align: justify;
        a {
            opacity: 0.8;
            display: inline-block;
            padding: 0.26rem 0.46rem;
            transition: all 0.4s;
            background-color: var(--textColor);
            color: var(--c-bg);
            border-radius: 6px;
            // margin: 0 0.5rem 0.8rem 0;
            margin: 0.3rem;
            min-width: 2rem;
            height: 1.1rem;
            line-height: 1.1rem;
            font-size: 0.8rem;
            text-align: center;
            text-decoration: none;
            &:hover {
                opacity: 1;
                transform: scale(1.1);
                box-shadow: 0 5px 10px -5px var(--c-random, rgba(0, 0, 0, 0.15));
            }
            &.active {
                box-shadow: 0 5px 10px -5px var(--c-random, rgba(0, 0, 0, 0.15));
                transform: scale(1.2);
                opacity: 1;
            }
        }
    }
}
</style>
