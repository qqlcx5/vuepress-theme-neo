import { computed, defineComponent, h } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import MarkdownContent from "@theme-hope/components/MarkdownContent";
import { DropTransition } from "@theme-hope/components/transitions/index";
import ArticleList from "@theme-hope/modules/blog/components/ArticleList";
import BlogHero from "@theme-hope/modules/blog/components/BlogHero";
import InfoPanel from "@theme-hope/modules/blog/components/InfoPanel";
import ProjectPanel from "@theme-hope/modules/blog/components/ProjectPanel";
import { useArticles } from "@theme-hope/modules/blog/composables/index";
import "../styles/home.scss";
export default defineComponent({
    name: "BlogHomePage",
    setup() {
        const articles = useArticles();
        const frontmatter = usePageFrontmatter();
        const projects = computed(() => frontmatter.value.projects ?? []);
        return () => h("div", { class: "vp-page vp-blog-home" }, [
            h(BlogHero),
            h("div", { class: "blog-page-wrapper" }, [
                h("main", { id: "main-content", class: "vp-blog-main" }, [
                    projects.value.length
                        ? h(DropTransition, { appear: true, delay: 0.16 }, () => h(ProjectPanel, { items: projects.value }))
                        : null,
                    h(DropTransition, { appear: true, delay: 0.24 }, () => h(ArticleList, { items: articles.value.items })),
                ]),
                h(DropTransition, { appear: true, delay: 0.16 }, () => h(InfoPanel, { key: "blog" })),
            ]),
            h(DropTransition, { appear: true, delay: 0.28 }, () => h(MarkdownContent)),
        ]);
    },
});
//# sourceMappingURL=BlogHomePage.js.map