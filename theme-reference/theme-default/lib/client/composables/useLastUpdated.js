import { useData } from '@theme/useData';
import { computed } from 'vue';
export const useLastUpdated = () => {
    const { frontmatter, page, themeLocale } = useData();
    return computed(() => {
        const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
        if (!showLastUpdated)
            return null;
        if (!page.value.git?.updatedTime)
            return null;
        const updatedDate = new Date(page.value.git.updatedTime);
        return updatedDate.toLocaleString();
    });
};
