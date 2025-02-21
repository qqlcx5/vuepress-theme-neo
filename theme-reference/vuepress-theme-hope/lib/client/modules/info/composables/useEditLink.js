import { computed } from "vue";
import { usePageData, usePageFrontmatter } from "vuepress/client";
import { useThemeLocaleData } from "@theme-hope/composables/index";
import { resolveEditLink } from "@theme-hope/modules/info/utils/index";
export const useEditLink = () => {
    const themeLocale = useThemeLocaleData();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    return computed(() => {
        const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "", } = themeLocale.value;
        const showEditLink = frontmatter.value.editLink ?? editLink ?? true;
        if (!showEditLink)
            return null;
        if (!docsRepo)
            return null;
        const link = resolveEditLink({
            docsRepo,
            docsBranch,
            docsDir,
            editLinkPattern,
            filePathRelative: page.value.filePathRelative,
        });
        if (!link)
            return null;
        return {
            text: themeLocale.value.metaLocales.editLink,
            link,
        };
    });
};
//# sourceMappingURL=useEditLink.js.map