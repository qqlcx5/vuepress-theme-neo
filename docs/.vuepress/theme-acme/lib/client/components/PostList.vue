<template>
    <div class="post-list">
        <TransitionGroup name="fade-slide-y" tag="div">
            <div class="post dark-shadow" :class="[`effect-border-${random(1, 5)}`]" v-for="(item, index) in sortPosts" :key="index">
                <AcmeIcon
                    v-if="item.frontmatter.sticky"
                    name="acme-tuding"
                    size="20"
                    :customStyle="{
                        position: 'absolute',
                        top: '0.4rem',
                        right: '0.4rem',
                        color: 'var(--c-brand)'
                    }"
                />
                <div class="title-wrapper">
                    <h2>
                        <router-link :to="item.path">
                            {{ item.title }}
                            <span class="title-tag" v-if="item.frontmatter.titleTag">
                                {{ item.frontmatter.titleTag }}
                            </span>
                        </router-link>
                    </h2>
                    <div class="article-info">
                        <a title="作者" target="_blank" v-if="item.author?.name && item.author?.url" :href="item.author.url">
                            <AcmeIcon name="acme-yonghu1" class="acme-mr-4" />
                            {{ item.author.name }}
                        </a>
                        <span v-else-if="item.author" title="作者">
                            <AcmeIcon name="acme-yonghu1" class="acme-mr-4" />
                            {{ item.author }}
                        </span>

                        <span title="创建时间" v-if="item.frontmatter.date">
                            <AcmeIcon name="acme-shijian1" class="acme-mr-4" />
                            {{ item.frontmatter.date.split('T')[0] }}
                        </span>
                        <span v-if="themeData.category !== false && item.frontmatter.categories">
                            <AcmeIcon name="acme-pingtai" class="acme-mr-4" />
                            <span title="分类">
                                <router-link :to="`/categories/?category=${encodeURIComponent(c)}`" v-for="(c, index) in item.frontmatter.categories" :key="index">{{ c }}</router-link>
                            </span>
                        </span>
                        <span v-if="themeData.tag !== false && item.frontmatter.tags && item.frontmatter.tags[0]">
                            <AcmeIcon name="acme-biaoqian" class="acme-mr-4" />
                            <span title="标签" class="tags">
                                <router-link :to="`/tags/?tag=${encodeURIComponent(t)}`" v-for="(t, index) in item.frontmatter.tags" :key="index">{{ t }}</router-link>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="excerpt-wrapper" v-if="item.excerpt">
                    <div class="excerpt" v-html="item.excerpt"></div>
                    <router-link :to="item.path" class="readmore">
                        阅读全文
                        <AcmeIcon name="acme-youxiangshuangjiantou" size="20" />
                    </router-link>
                </div>
            </div>
        </TransitionGroup>
    </div>
</template>

<script>
import { onMounted, ref, inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useThemeData } from '../composables/index.js'
export default {
    props: {
        // 分类关键字
        category: {
            type: String,
            default: ''
        },
        // 标签关键字
        tag: {
            type: String,
            default: ''
        },
        column: {
            type: String,
            default: ''
        },
        article: {
            type: [String, Boolean],
            default: false
        },
        currentPage: {
            type: Number,
            default: 1
        },
        perPage: {
            type: Number,
            default: 10
        },
        offsetTop: {
            type: Number,
            default: 0
        }
    },

    setup(props, { emit }) {
        let sortPosts = ref([])
        const groupPostsSymbol = inject('groupPostsSymbol').value
        const sortPostsSymbol = inject('sortPostsSymbol').value
        const themeData = useThemeData().value
        const route = useRoute()
        const router = useRouter()
        onMounted(() => {
            handleSetPosts()
        })
        // 当前页
        watch(
            () => props.currentPage,
            currentPage => {
                if (route.query.p != currentPage) {
                    router.push({ query: { ...route.query, p: currentPage } })
                }
                setTimeout(() => {
                    window.scrollTo({ top: props.offsetTop }) // behavior: 'smooth'
                }, 0)
                handleSetPosts()
            }
        )
        // 分类和标签
        watch([() => props.category, () => props.tag, () => props.column], ([category, tag, column], [prevCategory, prevTag, prevColumn]) => {
            handleSetPosts()
        })
        function handleSetPosts() {
            const currentPage = props.currentPage
            const perPage = props.perPage
            const [category, tag, column] = [props.category, props.tag, props.column]
            const type = (category && 'categories') || (tag && 'tags') || (column && 'columns')
            const queryKeyword = category || tag || column || ''
            // 文章全部展示 分类和标签隐藏数据
            let postsData = queryKeyword && type ? groupPostsSymbol[type][queryKeyword] : sortPostsSymbol
            sortPosts.value = postsData.slice((currentPage - 1) * perPage, currentPage * perPage)
        }
        const random = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min
        return { themeData, sortPosts, random }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';
.post-list {
    margin-bottom: 4rem;
    :deep(.acme-colour) {
        vertical-align: -0.2em;
    }
    .fade-slide-y-enter-active {
        transition: all 0.6s ease;
    }

    .fade-slide-y-leave-active {
        transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .fade-slide-y-enter-from,
    .fade-slide-y-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }
    .post {
        position: relative;
        padding: 1rem 1.5rem;
        margin-bottom: 0.9rem;
        .title-wrapper {
            a {
                color: var(--c-text);
                &:hover {
                    color: var(--c-brand);
                }
            }
            h2 {
                margin: 0.5rem 0;
                font-size: 1.4rem;
                border: none;
                .title-tag {
                    height: 1.2rem;
                    line-height: 1.2rem;
                    border: 1px solid var(--c-brand);
                    color: var(--c-brand);
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
            border-top: 1px solid var(--c-border);
            margin-top: 0.5rem;
            overflow: hidden;
            .excerpt {
                // margin-bottom: 0.3rem;
                font-size: 0.9rem;
                :deep(h1, h2) {
                    display: none;
                }
                :deep(p) {
                    display: flex;
                    margin: 0.5rem 0;
                }
                :deep(img) {
                    font-size: 0;
                    max-height: 180px;
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
