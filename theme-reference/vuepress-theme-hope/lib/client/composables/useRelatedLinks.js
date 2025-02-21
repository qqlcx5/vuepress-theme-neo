import { isPlainObject, isString } from "@vuepress/helper/client";
import { computed } from "vue";
import { resolveRoute, usePageFrontmatter, useRoute } from "vuepress/client";
import { useSidebarItems } from "@theme-hope/modules/sidebar/composables/index";
import { resolveLinkInfo } from "@theme-hope/utils/index";
import { useThemeLocaleData } from "./useThemeData.js";
const resolveFromFrontmatterConfig = (config, currentPath) => config === false
    ? config
    : isPlainObject(config)
        ? {
            ...config,
            link: resolveLinkInfo(config.link, true, currentPath).link,
        }
        : isString(config)
            ? resolveLinkInfo(config, true, currentPath)
            : null;
/**
 * Resolve `prev` or `next` config from sidebar items
 */
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
    const linkIndex = sidebarItems.findIndex((item) => item.link === currentPath);
    if (linkIndex !== -1) {
        if (!sidebarItems[linkIndex + offset])
            return null;
        const targetItem = sidebarItems[linkIndex + offset];
        if (targetItem.link)
            return targetItem;
        if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound)
            return {
                ...targetItem,
                link: targetItem.prefix,
            };
        return null;
    }
    for (const item of sidebarItems)
        if ("children" in item) {
            const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
            if (childResult)
                return childResult;
        }
    const prefixIndex = sidebarItems.findIndex((item) => "prefix" in item && item.prefix === currentPath);
    if (prefixIndex !== -1) {
        if (!sidebarItems[prefixIndex + offset])
            return null;
        const targetItem = sidebarItems[prefixIndex + offset];
        if (targetItem.link)
            return targetItem;
        if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound)
            return {
                ...targetItem,
                link: targetItem.prefix,
            };
        return null;
    }
    return null;
};
export const useRelatedLinks = () => {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const sidebarItems = useSidebarItems();
    const route = useRoute();
    const prevLink = computed(() => {
        const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev, route.path);
        return prevConfig === false
            ? null
            : (prevConfig ??
                (themeLocale.value.prevLink === false
                    ? null
                    : resolveFromSidebarItems(sidebarItems.value, route.path, -1)));
    });
    const nextLink = computed(() => {
        const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next, route.path);
        return nextConfig === false
            ? null
            : (nextConfig ??
                (themeLocale.value.nextLink === false
                    ? null
                    : resolveFromSidebarItems(sidebarItems.value, route.path, 1)));
    });
    return {
        prevLink,
        nextLink,
    };
};
//# sourceMappingURL=useRelatedLinks.js.map