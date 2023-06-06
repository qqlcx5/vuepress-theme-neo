import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { defineComponent, h } from "vue";
import HopeIcon from "@theme-hope/components/HopeIcon";
import { usePageInfo, useThemeLocaleData } from "@theme-hope/composables/index";
import PageInfo from "@theme-hope/modules/info/components/PageInfo";
import "../styles/page-title.scss";
export default defineComponent({
    name: "PageTitle",
    setup() {
        const page = usePageData();
        const frontmatter = usePageFrontmatter();
        const themeLocale = useThemeLocaleData();
        const { info, items } = usePageInfo();
        return () => h("div", { class: "vp-page-title" }, [
            h("h1", [
                themeLocale.value.titleIcon === false
                    ? null
                    : h(HopeIcon, { icon: frontmatter.value.icon }),
                page.value.title,
            ]),
            h(PageInfo, {
                info: info.value,
                ...(items.value === null ? {} : { items: items.value }),
            }),
            h("hr"),
        ]);
    },
});
//# sourceMappingURL=PageTitle.js.map