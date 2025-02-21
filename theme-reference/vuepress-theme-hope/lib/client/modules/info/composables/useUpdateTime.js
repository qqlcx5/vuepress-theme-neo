import { computed } from "vue";
import { usePageData, usePageFrontmatter, useSiteLocaleData, } from "vuepress/client";
import { useThemeLocaleData } from "@theme-hope/composables/index";
export const useUpdateTime = () => {
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    return computed(() => {
        const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
        if (!showLastUpdated)
            return null;
        if (!page.value.git?.updatedTime)
            return null;
        const updatedDate = new Date(page.value.git.updatedTime);
        return updatedDate.toLocaleString(siteLocale.value.lang);
    });
};
//# sourceMappingURL=useUpdateTime.js.map