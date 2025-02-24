import { useData } from '@theme/useData';
import { computed } from 'vue';
export const useContributors = () => {
    const { themeLocale, page, frontmatter } = useData();
    return computed(() => {
        const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
        if (!showContributors)
            return null;
        return page.value.git?.contributors ?? null;
    });
};
