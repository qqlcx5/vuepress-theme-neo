import { useThemeLocaleData } from '@theme/useThemeData';
import { getHeaders } from '@vuepress/helper/client';
import { injectLocal, provideLocal, watchImmediate } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';
import { usePageFrontmatter, useRoutePath } from 'vuepress/client';
export const headersSymbol = Symbol('headers');
/**
 * Inject headers
 */
export const useHeaders = () => {
    const headers = injectLocal(headersSymbol);
    if (!headers) {
        throw new Error('useHeaders() is called without provider.');
    }
    return headers;
};
export const setupHeaders = () => {
    const headersRef = ref([]);
    const routePath = useRoutePath();
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const levels = computed(() => frontmatter.value.sidebarDepth ?? themeLocale.value.sidebarDepth ?? 2);
    const updateHeaders = () => {
        if (levels.value <= 0) {
            headersRef.value = [];
            return;
        }
        headersRef.value = getHeaders({
            levels: [2, levels.value + 1],
            ignore: ['.vp-badge'],
        });
    };
    provideLocal(headersSymbol, headersRef);
    onMounted(() => {
        watchImmediate([levels, routePath], updateHeaders);
    });
};
