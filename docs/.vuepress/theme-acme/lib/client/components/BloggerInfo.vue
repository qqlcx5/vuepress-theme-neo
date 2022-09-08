<script>
import { useSiteLocaleData, withBase } from '@vuepress/client'
import { computed, defineComponent, inject, h } from 'vue'
import { useThemeLocaleData, useThemeBlogOptions, useNavigate } from '../composables/index.js'

export default defineComponent({
    name: 'BloggerInfo',
    setup() {
        const blogOptions = useThemeBlogOptions()
        const siteLocale = useSiteLocaleData()
        const themeLocale = useThemeLocaleData()
        const navigate = useNavigate();
        const bloggerName = computed(() => blogOptions.value.name || themeLocale.value?.author?.name || themeLocale.value?.author || siteLocale.value.title)
        const bloggerAvatar = computed(() => blogOptions.value.avatar || themeLocale.value.logo)
        const intro = computed(() => blogOptions.value.intro)
        const locale = computed(() => themeLocale.value.blogLocales)
        const sortPostsSymbol = inject('sortPostsSymbol').value
        const categoriesAndTagsSymbol = inject('categoriesAndTagsSymbol').value
        const sortPostsByDateSymbol = inject('sortPostsByDateSymbol').value

        return () =>
            h(
                'div',
                {
                    class: 'blogger-info dark-shadow',
                    vocab: 'https://schema.org/',
                    typeof: 'Person'
                },
                [
                    h(
                        'div',
                        {
                            class: 'blogger',
                            ...(intro.value
                                ? {
                                    style: { cursor: 'pointer' },
                                    'aria-label': locale.value.intro,
                                    'data-balloon-pos': 'down',
                                    role: 'navigation',
                                    onClick: () => navigate(intro.value)
                                }
                                : {})
                        },
                        [
                            bloggerAvatar.value
                                ? h('img', {
                                    class: [
                                        'blogger-avatar',
                                        {
                                            round: blogOptions.value.roundAvatar
                                        }
                                    ],
                                    src: withBase(bloggerAvatar.value),
                                    property: 'image',
                                    alt: 'Blogger Avatar'
                                })
                                : null,
                            bloggerName.value
                                ? h(
                                    'div',
                                    {
                                        class: 'blogger-name',
                                        property: 'name'
                                    },
                                    bloggerName.value
                                )
                                : null,
                            blogOptions.value.description
                                ? h('div', {
                                    class: 'blogger-description',
                                    innerHTML: blogOptions.value.description
                                })
                                : null,
                            intro.value
                                ? h('meta', {
                                    property: 'url',
                                    content: withBase(intro.value)
                                })
                                : null
                        ]
                    ),
                    h('div', { class: 'num-wrapper' }, [
                        h('div', { onClick: () => navigate('/') }, [h('div', { class: 'num' }, sortPostsSymbol.length), h('div', locale.value.article)]),
                        h('div', { onClick: () => navigate('/categories/') }, [h('div', { class: 'num' }, categoriesAndTagsSymbol?.categories?.length), h('div', locale.value.category)]),
                        h('div', { onClick: () => navigate('/tags/') }, [h('div', { class: 'num' }, categoriesAndTagsSymbol?.tags?.length), h('div', locale.value.tag)]),
                        h('div', { onClick: () => navigate('/archives/') }, [h('div', { class: 'num' }, sortPostsByDateSymbol.length), h('div', locale.value.timeline)])
                    ]),
                ]
            )
    }
})
</script>
<style lang="scss">
.blogger-info {
    // padding: 0.1rem;
    overflow: hidden;
    margin-bottom: 0.9rem;
    .blogger {
        padding: 0.5rem;
        text-align: center;
    }

    .blogger-avatar {
        width: 8rem;
        height: 8rem;
        margin: 0 auto;

        &.round {
            border-radius: 50%;
        }
    }

    .blogger-name {
        margin: 1rem auto;
        font-size: 22px;
    }

    .blogger-description {
        margin: 1rem auto;
        font-size: 14px;
    }

    .num-wrapper {
        width: 80%;
        display: flex;
        margin: 0 auto 1rem;
        justify-content: center;

        > div {
            width: 25%;
            font-size: 13px;
            padding: 0 0.2rem;
            text-align: center;
            cursor: pointer;
            overflow: hidden;

            &:hover {
                color: var(--c-text-accent);
            }

            // stylelint-disable selector-max-compound-selectors
            .num {
                position: relative;
                margin-bottom: 0.5rem;
                font-weight: 600;
                font-size: 20px;
            }
            // stylelint-enable selector-max-compound-selectors
        }
    }
}
</style>
