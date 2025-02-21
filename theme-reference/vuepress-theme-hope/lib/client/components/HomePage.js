import { isArray } from "@vuepress/helper/client";
import { computed, defineComponent, h } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import FeaturePanel from "@theme-hope/components/FeaturePanel";
import HeroInfo from "@theme-hope/components/HeroInfo";
import HighlightPanel from "@theme-hope/components/HighlightPanel";
import MarkdownContent from "@theme-hope/components/MarkdownContent";
import { DropTransition } from "@theme-hope/components/transitions/index";
import "../styles/home-page.scss";
export default defineComponent({
    name: "HomePage",
    slots: Object,
    setup(_props, { slots }) {
        const frontmatter = usePageFrontmatter();
        const features = computed(() => {
            const { features } = frontmatter.value;
            return isArray(features) ? features : null;
        });
        const highlights = computed(() => {
            const { highlights } = frontmatter.value;
            if (isArray(highlights))
                return highlights;
            return null;
        });
        return () => h("main", {
            id: "main-content",
            class: "vp-page vp-project-home",
            "aria-labelledby": frontmatter.value.heroText === "" ? "" : "main-title",
        }, [
            slots.top?.(),
            h(HeroInfo),
            highlights.value?.map((highlight) => "features" in highlight
                ? h(FeaturePanel, highlight)
                : h(HighlightPanel, highlight)) ??
                (features.value
                    ? h(DropTransition, { appear: true, delay: 0.24 }, () => 
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    h(FeaturePanel, { features: features.value }))
                    : null),
            slots.center?.(),
            h(DropTransition, {
                appear: true,
                delay: 0.32,
            }, () => h(MarkdownContent)),
            slots.bottom?.(),
        ]);
    },
});
//# sourceMappingURL=HomePage.js.map