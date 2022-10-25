<script>
import { usePageData } from "@vuepress/client";
import { defineComponent, h, onMounted, watch, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
export default defineComponent({
    name: "TOC",
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        headerDepth: {
            type: Number,
            default: 2,
        },
    },
    setup(props) {
        const route = useRoute();
        const page = usePageData();
        const toc = ref(null);
        const scrollTo = (top) => {
            toc.value?.scrollTo({ top, behavior: "smooth" });
        };
        const renderHeader = ({ title, level, slug }) => h(RouterLink, {
            to: `#${slug}`,
            class: ["toc-link", `level${level}`],
        }, () => title);
        const isActiveLink = (route, slug) => {
            return route?.hash === slug
        }
        const renderChildren = (headers, headerDepth) => {
            const route = useRoute();
            return headers.length && headerDepth > 0
                ? h("ul", { class: "toc-list" }, headers.map((header) => [
                    h("li", {
                        class: [
                            "toc-item",
                            { active: isActiveLink(route, `#${header.slug}`) },
                        ],
                    }, renderHeader(header)),
                    renderChildren(header.children, headerDepth - 1),
                ]))
                : null;
        };
        onMounted(() => {
            // scroll to active toc item
            watch(() => route.hash, (hash) => {
                if (toc.value) {
                    // get the active toc item DOM, whose href equals to the current route
                    const activeTocItem = document.querySelector(`#toc a.toc-link[href$="${hash}"]`);
                    if (!activeTocItem) return;
                    // get the top and height of the toc
                    const { top: tocTop, height: tocHeight } = toc.value.getBoundingClientRect();
                    // get the top and height of the active toc item
                    const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
                    // when the active toc item overflows the top edge of toc
                    if (activeTocItemTop < tocTop)
                        // scroll to the top edge of toc
                        scrollTo(toc.value.scrollTop + activeTocItemTop - tocTop);
                    // when the active toc item overflows the bottom edge of toc
                    else if (activeTocItemTop + activeTocItemHeight >
                        tocTop + tocHeight)
                        // scroll to the bottom edge of toc
                        scrollTo(toc.value.scrollTop +
                            activeTocItemTop +
                            activeTocItemHeight -
                            tocTop -
                            tocHeight);
                }
            });
        })
        return () => {
            const tocHeaders = props.items.length
                ? renderChildren(props.items, props.headerDepth)
                : page.value.headers
                    ? renderChildren(page.value.headers, props.headerDepth)
                    : null;
            return tocHeaders
                ? h("div", { class: "toc-place-holder" }, [
                    h("aside", { id: "toc" }, [
                        h("div", { class: "toc-header" }, '此页内容'),
                        h("div", { class: "toc-wrapper", ref: toc }, [tocHeaders]),
                    ]),
                ])
                : null;
        };

    }
})
</script>

<style lang="scss" scoped>
$headings: (2, 3, 4, 5, 6);

.toc-place-holder {
    position: sticky;
    top: calc(var(--navbar-height) + 2rem);
    z-index: 10;
    max-width: var(--content-width);
    margin: 0 auto;
}

#toc {
    position: absolute;
    left: calc(100% + 1rem);
    display: none;
    min-width: 10rem;
    max-width: 15rem;

    @media (min-width: 1200px) {
        .has-toc & {
            display: block;
        }
    }

    .toc-header {
        margin: 0 0 0.75rem 0.5rem;
        font-weight: 600;
        font-size: 0.875rem;
    }

    .toc-wrapper {
        position: relative;

        overflow-x: hidden;
        overflow-y: auto;
        max-height: 75vh;
        margin: 0 0.5rem;
        padding-left: 8px;

        text-overflow: ellipsis;
        white-space: nowrap;
        scroll-behavior: smooth;
        &::-webkit-scrollbar {
            width: 4px;
            height: 4px;
        }
    }

    .toc-list {
        // override ul default margin
        margin: 0;
        // override ul default padding
        padding: 0;
        position: relative;
        &::before {
            content: ' ';
            position: absolute;
            top: 0;
            bottom: 0;
            left: -0.5rem;
            z-index: -1;
            width: 2px;
            background: var(--c-border);
        }
    }

    .toc-link {
        position: relative;

        display: block;

        overflow: hidden;

        max-width: 100%;

        color: var(--c-text-light);

        line-height: inherit;
        text-overflow: ellipsis;
        white-space: nowrap;

        @each $heading in $headings {
            &.level#{$heading} {
                padding-left: ($heading * 8 - 16) * 1px;
                font-size: (16 - $heading) * 1px;
            }
        }
    }

    .toc-item {
        position: relative;
        box-sizing: border-box;
        height: 1.7rem;
        padding: 0 0.5rem;
        list-style: none;
        line-height: 1.7rem;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: -8px;
            z-index: 2;
            width: 2px;
            background: transparent;
        }

        &:hover {
            > .toc-link {
                color: var(--c-brand);
            }
        }

        &.active {
            > .toc-link {
                color: var(--c-brand);
                font-weight: bold;
            }

            &::before {
                background: var(--c-brand);
            }
        }
    }
}
</style>
