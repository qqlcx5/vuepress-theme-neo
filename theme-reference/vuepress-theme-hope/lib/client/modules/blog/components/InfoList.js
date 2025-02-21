import { entries } from "@vuepress/helper/client";
import { defineComponent, h, ref } from "vue";
import { DropTransition } from "@theme-hope/components/transitions/index";
import ArticlesInfo from "@theme-hope/modules/blog/components/ArticlesInfo";
import CategoriesInfo from "@theme-hope/modules/blog/components/CategoriesInfo";
import TagsInfo from "@theme-hope/modules/blog/components/TagsInfo";
import TimelineList from "@theme-hope/modules/blog/components/TimelineList";
import { ArticleIcon, CategoryIcon, TagIcon, TimelineIcon, } from "@theme-hope/modules/blog/components/icons";
import { useBlogLocaleData } from "@theme-hope/modules/blog/composables/index";
import "../styles/info-list.scss";
const buttons = {
    article: ArticleIcon,
    category: CategoryIcon,
    tag: TagIcon,
    timeline: TimelineIcon,
};
export default defineComponent({
    name: "InfoList",
    setup() {
        const blogLocale = useBlogLocaleData();
        const activeType = ref("article");
        return () => h("div", { class: "vp-blog-infos" }, [
            h("div", { class: "vp-blog-type-switcher" }, entries(buttons).map(([key, Icon]) => h("button", {
                type: "button",
                class: "vp-blog-type-button",
                onClick: () => {
                    activeType.value = key;
                },
            }, h("div", {
                class: [
                    "vp-blog-type-icon-wrapper",
                    { active: activeType.value === key },
                ],
                "aria-label": blogLocale.value[key],
                "data-balloon-pos": "up",
            }, h(Icon))))),
            h(DropTransition, () => activeType.value === "article"
                ? h(ArticlesInfo)
                : activeType.value === "category"
                    ? h(CategoriesInfo)
                    : activeType.value === "tag"
                        ? h(TagsInfo)
                        : h(TimelineList)),
        ]);
    },
});
//# sourceMappingURL=InfoList.js.map