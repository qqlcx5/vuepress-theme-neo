<template>
    <div class="tags-wrapper card-box">
        <router-link
            to="/tags/"
            class="title iconfont icon-biaoqian1"
            title="全部标签"
        >{{ length === 'all' ? '全部标签' : '热门标签' }}</router-link>
        <div class="tags">
            <template
                v-for="(item, index) in tags"
                :key="item.key"
            >
                <router-link
                    :to="`/tags/?tag=${encodeURIComponent(item.key)}`"
                    :style="tagStyleList[index]"
                    :class="{ active: item.key === tag }"
                >{{item.key}} {{item.length}}</router-link>
            </template>
            <router-link
                to="/tags/"
                v-if="length !== 'all' && tagsData.length > length"
            >更多...</router-link>
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

<style lang='scss'>
@import '../styles/_variables';

.tags-wrapper {
    padding: 0 0.95rem;
    .title {
        color: var(--textColor);
        opacity: 0.9;
        font-size: 1.2rem;
        &::before {
            margin-right: 0.3rem;
        }
    }
    .tags {
        text-align: justify;
        padding: 0.8rem 0.5rem 0.5rem 0.5rem;
        margin: 0 -0.5rem -0.5rem -0.5rem;
        color: var(--c-bg);
        a {
            opacity: 0.8;
            display: inline-block;
            padding: 0.2rem 0.4rem;
            transition: all 0.4s;
            background-color: var(--textColor);
            color: var(--c-bg);
            border-radius: 3px;
            margin: 0 0.3rem 0.5rem 0;
            min-width: 2rem;
            height: 1rem;
            line-height: 1rem;
            font-size: 0.8rem;
            text-align: center;
            text-decoration: none;
            @media (max-width: $MQMobile) {
                font-weight: 400;
            }
            &:hover {
                opacity: 1;
                transform: scale(1.1);
                box-shadow: 0 5px 10px -5px var(--c-random, rgba(0, 0, 0, 0.15));
            }
            &.active {
                box-shadow: 0 5px 10px -5px var(--c-random, rgba(0, 0, 0, 0.15));
                transform: scale(1.22);
                opacity: 1;
            }
        }
    }
}
</style>
