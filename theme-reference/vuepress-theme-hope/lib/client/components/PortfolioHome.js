import { computed, defineComponent, h } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import MarkdownContent from "@theme-hope/components/MarkdownContent";
import PortfolioHero from "@theme-hope/components/PortfolioHero";
import { DropTransition } from "@theme-hope/components/transitions/DropTransition";
import "../styles/portfolio-home.scss";
export default defineComponent({
    name: "PortfolioHome",
    setup() {
        const frontmatter = usePageFrontmatter();
        const content = computed(() => frontmatter.value.content ?? "portfolio");
        return () => h("main", {
            id: "main-content",
            class: "vp-page vp-portfolio-home",
            "aria-labelledby": "main-title",
        }, [
            h(PortfolioHero),
            content.value === "none"
                ? null
                : h("div", {}, h(DropTransition, { appear: true, delay: 0.24 }, () => h(MarkdownContent, {
                    class: {
                        "vp-portfolio-content": content.value === "portfolio",
                    },
                }))),
        ]);
    },
});
//# sourceMappingURL=PortfolioHome.js.map