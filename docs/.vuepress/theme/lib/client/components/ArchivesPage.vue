<template>
    <div class="custom-page archives-page">
        <div class="theme-vdoing-wrapper">
            <h1>
                <img
                    :src="currentBadge"
                    v-if="$themeConfig.titleBadge === false ? false : true"
                />
                {{ $page.title }}
            </h1>
            <div class="count">
                总共 <i>{{ $sortPostsByDate.length }}</i> 篇文章
            </div>
            <ul>
                <template
                    v-for="(item, index) in postsList"
                    :key="index"
                >
                    <li
                        class="year"
                        v-if="(year = getYear(index)) !== getYear(index - 1)"
                        :key="index + $sortPostsByDate.length"
                    >
                        <h2>
                            {{ year }}
                            <span>
                                <i>{{ countByYear[year] }}</i> 篇
                            </span>
                        </h2>
                    </li>
                    <li>
                        <router-link :to="item.path">
                            <span class="date">{{ getDate(item) }}</span>
                            {{ item.title }}
                            <span
                                class="title-tag"
                                v-if="item.frontmatter.titleTag"
                            >
                                {{ item.frontmatter.titleTag }}
                            </span>
                        </router-link>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
import { debounce } from 'lodash'
import { type } from '../utils'

import TitleBadgeMixin from '../mixins/titleBadge'
import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'

import { reactive, ref, onMounted, inject } from 'vue'
export default {
    mixins: [TitleBadgeMixin],
    setup(props) {
        let postsList = ref([]) // 当前页面的文章数据
        let countByYear = reactive({}) // 根据年份统计的文章数
        let perPage = ref(80)   // 每页长度
        let currentPage = ref([])   // 当前页面
        const $sortPostsByDate = inject('$sortPostsByDate').value
        const $themeConfig = useThemeData().value

        getPageData()
        for (let i = 0; i < $sortPostsByDate.length; i++) {
            const { frontmatter: { date } } = $sortPostsByDate[i];
            if (date && type(date) === 'string') {
                const year = date.slice(0, 4)
                if (!countByYear[year]) {
                    countByYear[year] = 0
                }
                countByYear[year] = countByYear[year] + 1
            }
        }
        // countByYear = countByYear
        onMounted(() => {
            window.addEventListener('scroll', debounce(() => {
                if (postsList.value.length < $sortPostsByDate.length) {
                    const docEl = document.documentElement
                    const docBody = document.body
                    const scrollTop = docEl.scrollTop || docBody.scrollTop;
                    const clientHeight = docEl.clientHeight || docBody.clientHeight;
                    const scrollHeight = docEl.scrollHeight || docBody.scrollHeight;

                    if (scrollHeight > clientHeight && scrollTop + clientHeight >= scrollHeight - 250) {
                        loadmore()
                    }
                }

            }, 200))
        })

        function getPageData() {
            postsList.value = postsList.value.concat($sortPostsByDate.slice((currentPage.value - 1) * perPage.value, currentPage.value * perPage.value))
        }

        function loadmore() {
            currentPage.value += 1
            getPageData()
        }
        function getYear(index) {
            const item = postsList[index]
            if (!item) return
            const { frontmatter: { date } } = item
            if (date && type(date) === 'string') {
                return date.slice(0, 4)
            }
        }

        function getDate(item) {
            const { frontmatter: { date } } = item
            if (date && type(date) === 'string') {
                return date.slice(5, 10)
            }
        }
        return {
            postsList,
            countByYear,
            getYear,
            getDate,
            $sortPostsByDate,
            $themeConfig
        }
    }
}
</script>

<style lang='scss'>
@import '../styles/wrapper.scss';
@import '../styles/_variables';

.archives-page {
    .theme-vdoing-wrapper {
        @extend ._vdoing-wrapper;
        position: relative;
        @media (min-width: $contentWidth + 80) {
            margin-top: 1.5rem !important;
        }
        .count {
            text-align: right;
            margin-top: -2.5rem;
            font-size: 0.85rem;
            opacity: 0.8;
        }
        ul,
        li {
            margin: 0;
            padding: 0;
        }
        ul {
            margin-top: 2rem;
        }
        li {
            list-style: none;
            &.year {
                position: sticky;
                top: $navbarHeight;
                background: var(--mainBg);
                z-index: 1;
            }
            &.year:not(:first-child) {
                margin-top: 3.5rem;
            }
            h2 {
                margin-bottom: 0.8rem;
                font-weight: 400;
                padding: 0.5rem 0;
                span {
                    font-size: 0.85rem;
                    font-weight: 300;
                    float: right;
                    margin-top: 1rem;
                }
            }
            a {
                display: block;
                color: var(--textColor);
                transition: padding 0.3s;
                padding: 0.5rem 2rem;
                line-height: 1.2rem;
                &:hover {
                    padding-left: 2.5rem;
                    color: $accentColor;
                    background: #f9f9f9;
                }
                @media (max-width: $contentWidth + 80) {
                    padding: 0.5rem 1rem;
                    font-weight: normal;
                    &:hover {
                        padding-left: 1.5rem;
                    }
                }
                span.date {
                    opacity: 0.6;
                    font-size: 0.85rem;
                    font-weight: 400;
                    margin-right: 0.3rem;
                }
                .title-tag {
                    // height 1.1rem
                    // line-height 1.1rem
                    border: 1px solid $activeColor;
                    color: $activeColor;
                    font-size: 0.8rem;
                    padding: 0 0.35rem;
                    border-radius: 0.2rem;
                    margin-left: 0rem;
                    transform: translate(0, -0.05rem);
                    display: inline-block;
                }
            }
        }
        .loadmore {
            text-align: center;
            margin-top: 1rem;
            opacity: 0.5;
        }
    }
}
</style>
