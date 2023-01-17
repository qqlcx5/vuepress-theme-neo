<script setup lang="ts">
import { reactive, toRefs } from 'vue'
// @ts-ignore
import Catalogue from '@theme/Catalogue.vue'
const props = defineProps({
    list: {
        type: Array,
        defalut: () => []
    }
})
const toggleObj = reactive({})
const toggleClick = (index: number) => {
    toggleObj[index] = !toggleObj[index]
    console.log(toggleObj)
}
const scrollTag = (index: number) => {
    const activeEl = document.querySelector(`#catalogue-title-${index}`)
    const ElRect = document.querySelector('.catalogue-rect')?.getBoundingClientRect()?.height
    const anchorRect = document.querySelector('.anchor-rect')?.getBoundingClientRect()?.top
    const top = activeEl?.getBoundingClientRect().top - ElRect / 2 - anchorRect
    window?.scrollTo({ top, behavior: 'smooth' })
}
</script>

<template>
    <div class="neo-pl-0">
        <!-- 这个锚点是为了解决目录跳转时，标题被遮挡的问题 -->
        <div class="anchor-rect"></div>
        <!-- 这里的list是一个嵌套对象才展示 -->
        <div v-show="list.length > 1 && list[0]?.children" class="neo-flex neo-flex-wrap catalogue-rect">
            <div class="cursor-pointer" v-for="(item, p) in list" :key="p" @click="scrollTag(p)">
                {{ item.text }}
            </div>
        </div>
        <ul class="neo-pl-0">
            <li v-for="(item, index) in list" :key="item" class="neo-ptb-4">
                <template v-if="item.children?.length">
                    <div :id="`catalogue-title-${index}`" class="neo-pb-4 cursor-pointer" @click.stop="toggleClick(index)">
                        <NeoIcon :name="item.icon || 'neo-wenjianlan'" class="neo-mr-4" />
                        <span class="catalogue-title">{{ item.text }} 目录</span>
                        <NeoIcon :name="toggleObj[index] ? 'neo-xiangxiajiantou' : 'neo-xiangshangjiantou'" class="neo-mr-4" />
                    </div>
                    <Transition name="fade-slide-y" mode="out-in">
                        <Catalogue v-show="!toggleObj[index]" :list="item.children" />
                    </Transition>
                </template>

                <RouterLink v-else :to="item.link" :title="item.text">
                    <NeoIcon :name="item.icon || 'neo-md'" class="neo-mr-4" />
                    {{ index + 1 }}.{{ item.fullTitle ||item.text }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
ul ul {
    margin-bottom: 16px;
    display: flex;
    flex-wrap: wrap;
    background-color: var(--c-bg);
    transform: background-color 0.3s ease;
    // background-color: rgba(var(--c-brand-rgb), 0.08);
    // border-radius: 6px;
    // box-shadow: var(--a-box-shadow);

    li {
        // width: 50%;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:nth-of-type(even) {
            background-color: rgba(var(--c-brand-rgb), 0.04);
        }
        &:nth-of-type(odd) {
            background-color: rgba(var(--c-brand-rgb), 0.09);
        }
        // 1 4 5 8 9 12 13 16 17 20 21 24 25 28 29 32 33 36 37 40 41 44 45 48 49 52 53 56 57 60 61 64 65 68 69 72 73 76 77 80 81 84 85 88 89 92 93 96 97 100
        // &:nth-of-type(4n) {
        //     background-color: rgba(var(--c-brand-rgb), 0.07);
        // }
        // &:nth-of-type(4n + 1) {
        //     background-color: rgba(var(--c-brand-rgb), 0.07);
        // }
        // 2 3 6 7 10 11 14 15 18 19 22 23 26 27 30 31 34 35 38 39 42 43 46 47 50 51 54 55 58 59 62 63 66 67 70 71 74 75 78 79 82 83 86 87 90 91 94 95 98 99
        // &:nth-of-type(4n - 1) {
        //     background-color: rgba(var(--c-brand-rgb), 0.09);
        // }
        // &:nth-of-type(4n + 2) {
        //     background-color: rgba(var(--c-brand-rgb), 0.09);
        // }

        a {
            color: var(--c-text-light);
            font-weight: normal;
            &:hover {
                text-decoration: none;
            }
        }
    }
}
.catalogue-rect {
    z-index: 2;
    position: sticky;
    top: calc(var(--navbar-height));
    background-color: var(--c-bg-navbar);
    .cursor-pointer {
        padding: 8px 16px;
        border-radius: 16px;
        vertical-align: middle;
        background-color: var(--c-bg-light);
        margin: 6px;
    }
}
.catalogue-title {
    color: var(--c-text);
    font-weight: 500;
}

li {
    list-style: none;
}
</style>
