import { defineComponent, h, toRef } from "vue";
import { RouteLink, useRouter, withBase } from "vuepress/client";
import { SlideIcon, StickyIcon, } from "@theme-hope/modules/blog/components/icons";
import { useArticleInfo } from "@theme-hope/modules/blog/composables/index";
import { LockIcon } from "@theme-hope/modules/encrypt/components/icons";
import PageInfo from "@theme-hope/modules/info/components/PageInfo";
import { ArticleInfo, PageInfo as PageInfoEnum, PageType, } from "../../../../shared/index.js";
import "../styles/article-item.scss";
export default defineComponent({
    name: "ArticleItem",
    props: {
        /**
         * Article information
         *
         * 文章信息
         */
        info: {
            type: Object,
            required: true,
        },
        /**
         * Article path
         *
         * 文章路径
         */
        path: { type: String, required: true },
    },
    slots: Object,
    setup(props, { slots }) {
        const articleInfo = toRef(props, "info");
        const { info: pageInfo, items } = useArticleInfo(props);
        const router = useRouter();
        return () => {
            const { [PageInfoEnum.title]: title, [ArticleInfo.type]: type, [ArticleInfo.isEncrypted]: isEncrypted = false, [ArticleInfo.cover]: cover, [ArticleInfo.excerpt]: excerpt, [ArticleInfo.sticky]: sticky, } = articleInfo.value;
            const info = pageInfo.value;
            return h("div", {
                class: "vp-article-wrapper",
                onClick: (event) => {
                    if (event.target?.matches("summary"))
                        return;
                    event.preventDefault();
                    void router.push(props.path);
                },
            }, h("article", {
                class: "vp-article-item",
                vocab: "https://schema.org/",
                typeof: "Article",
            }, [
                slots.cover?.({ cover }) ??
                    (cover
                        ? [
                            h("img", {
                                class: "vp-article-cover",
                                src: withBase(cover),
                                alt: "",
                                loading: "lazy",
                            }),
                            h("meta", {
                                property: "image",
                                content: withBase(cover),
                            }),
                        ]
                        : []),
                sticky ? h(StickyIcon) : null,
                h(RouteLink, { to: props.path }, () => slots.title?.({ title, isEncrypted, type }) ??
                    h("header", { class: "vp-article-title" }, [
                        isEncrypted ? h(LockIcon) : null,
                        type === PageType.slide ? h(SlideIcon) : null,
                        h("span", { property: "headline" }, title),
                    ])),
                slots.excerpt?.({ excerpt }) ??
                    (excerpt
                        ? h("div", {
                            class: "vp-article-excerpt",
                            innerHTML: excerpt,
                        })
                        : null),
                h("hr", { class: "vp-article-hr" }),
                slots.info?.({ info }) ??
                    h(PageInfo, {
                        info,
                        ...(items.value ? { items: items.value } : {}),
                    }),
            ]));
        };
    },
});
//# sourceMappingURL=ArticleItem.js.map