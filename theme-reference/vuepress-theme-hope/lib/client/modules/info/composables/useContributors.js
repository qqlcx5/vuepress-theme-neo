import { computed } from "vue";
import { usePageData, usePageFrontmatter } from "vuepress/client";
import { useThemeLocaleData } from "@theme-hope/composables/index";
export const useContributors = () => {
    const themeLocale = useThemeLocaleData();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    return computed(() => {
        const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
        if (!showContributors)
            return null;
        return page.value.git?.contributors ?? null;
    });
};
//# sourceMappingURL=useContributors.js.map