<template>
    <div class="post-list">
        <transition-group
            name="post"
            tag="div"
        >
            <div
                class="post card-box"
                :class="[`effect-border-${random(2, 5)}`, (item.frontmatter.sticky && 'iconfont icon-zhiding')]"
                v-for="item in sortPosts"
                :key="item.key"
            >
                <div class="title-wrapper">
                    <h2>
                        <router-link :to="item.path">
                            {{ item.title }}
                            <span
                                class="title-tag"
                                v-if="item.frontmatter.titleTag"
                            >
                                {{ item.frontmatter.titleTag }}</span>
                        </router-link>
                    </h2>
                    <div class="article-info">
                        <a
                            title="作者"
                            target="_blank"
                            v-if="item.author.name && item.author.url"
                            :href="item.author.url"
                        >
                            <AIcon name="acme-yonghu" />
                            {{ item.author.name }}
                        </a>
                        <span
                            v-else-if="item.author.name"
                            title="作者"
                        >
                            <AIcon name="acme-yonghu" />
                            {{ item.author.name }}
                        </span>

                        <span
                            title="创建时间"
                            v-if="item.frontmatter.date"
                        >
                            <AIcon name="acme-riqi" />
                            {{ item.frontmatter.date.split('T')[0] }}
                        </span>
                        <span v-if="$themeConfig.category !== false && item.frontmatter.categories">
                            <AIcon name="acme-wenjianjia" />
                            <span title="分类">
                                <router-link
                                    :to="`/categories/?category=${encodeURIComponent(c)}`"
                                    v-for="(c, index) in item.frontmatter.categories"
                                    :key="index"
                                >{{ c }}</router-link>
                            </span>
                        </span>
                        <span v-if="$themeConfig.tag !== false && item.frontmatter.tags && item.frontmatter.tags[0]">
                            <AIcon name="acme-tag" />
                            <span
                                title="标签"
                                class="tags"
                            >
                                <router-link
                                    :to="`/tags/?tag=${encodeURIComponent(t)}`"
                                    v-for="(t, index) in item.frontmatter.tags"
                                    :key="index"
                                >{{ t }}</router-link>
                            </span>
                        </span>
                    </div>
                </div>
                <div
                    class="excerpt-wrapper"
                    v-if="item.excerpt"
                >
                    <div
                        class="excerpt"
                        v-html="item.excerpt"
                    ></div>
                    <router-link
                        :to="item.path"
                        class="readmore"
                    >
                        <AIcon
                            name="acme-yuedu"
                            size="20"
                        />
                        阅读全文
                    </router-link>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
import { onMounted, ref, inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'

export default {
    props: {
        category: {
            type: String,
            default: ''
        },
        tag: {
            type: String,
            default: ''
        },
        currentPage: {
            type: Number,
            default: 1
        },
        perPage: {
            type: Number,
            default: 10
        }
    },

    setup(props, { emit }) {
        let sortPosts = ref([])
        let postListOffsetTop = ref(0)
        const $groupPosts = inject('$groupPosts').value
        const $sortPosts = inject('$sortPosts').value
        const $themeConfig = useThemeData().value
        const $route = useRoute()
        const $router = useRouter()
        onMounted(() => {
            handleSetPosts()
        })
        watch(() => props.currentPage, (currentPage) => {
            if ($route.query.p != currentPage) {
                $router.push({ query: { ...$route.query, p: currentPage } })
            }
            setTimeout(() => {
                window.scrollTo({ top: postListOffsetTop }) // behavior: 'smooth'
            }, 0)
            handleSetPosts()
        })
        watch([() => props.category, () => props.tag], ([category, tag], [prevCategory, prevTag]) => {
            handleSetPosts()
        })
        function handleSetPosts() {
            const currentPage = props.currentPage
            const perPage = props.perPage
            let type = props.category ? 'categories' : 'tags'
            let typeValue = props.category || props.tag
            let posts = typeValue ? $groupPosts[type][typeValue] : $sortPosts
            sortPosts.value = posts.slice((currentPage - 1) * perPage, currentPage * perPage)
        }
        const random = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min
        return { $themeConfig, sortPosts, random }
    }

}
</script>

<style lang='scss'>
@import '../styles/_variables';
.post-list {
    margin-bottom: 4rem;
    .post {
        position: relative;
        padding: 1rem 1.5rem;
        margin-bottom: 0.9rem;
        transition: all 0.3s;
        &.post-leave-active {
            display: none;
        }
        &.post-enter {
            opacity: 0;
            transform: translateX(-100px);
        }
        // &::before {
        //     position: absolute;
        //     top: -1px;
        //     right: 0;
        //     font-size: 2.5rem;
        //     color: $activeColor;
        //     opacity: 0.85;
        // }
        .title-wrapper {
            a {
                color: var(--textColor);
                &:hover {
                    color: $accentColor;
                }
            }
            h2 {
                margin: 0.5rem 0;
                font-size: 1.4rem;
                border: none;
                .title-tag {
                    height: 1.2rem;
                    line-height: 1.2rem;
                    border: 1px solid $activeColor;
                    color: $activeColor;
                    font-size: 0.8rem;
                    padding: 0 0.35rem;
                    border-radius: 0.2rem;
                    margin-left: 0rem;
                    transform: translate(0, -0.15rem);
                    display: inline-block;
                }
                a {
                    display: block;
                    @media (max-width: $MQMobile) {
                        font-weight: 400;
                    }
                }
            }
            .article-info {
                > a,
                > span {
                    opacity: 0.7;
                    font-size: 0.8rem;
                    margin-right: 1rem;
                    cursor: pointer;
                    &::before {
                        margin-right: 0.3rem;
                    }
                    a {
                        margin: 0;
                        &:not(:first-child) {
                            &::before {
                                content: '/';
                            }
                        }
                    }
                }
                .tags a:not(:first-child)::before {
                    content: '、';
                }
            }
        }
        .excerpt-wrapper {
            border-top: 1px solid var(--borderColor);
            margin: 0.5rem 0;
            overflow: hidden;
            .excerpt {
                margin-bottom: 0.3rem;
                font-size: 0.92rem;
                h1,
                h2,
                h3 {
                    display: none;
                }
                img {
                    max-height: 280px;
                    max-width: 100% !important;
                    margin: 0 auto;
                }
            }
            .readmore {
                float: right;
                line-height: 1rem;
            }
        }
    }
}
</style>
