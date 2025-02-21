import { computed, inject, provide } from "vue";
import { usePageFrontmatter, useRouteLocale, useRoutePath, } from "vuepress/client";
import { useThemeLocaleData } from "@theme-hope/composables/index";
import { resolveSidebarItems } from "../utils/index.js";
export const sidebarItemsSymbol = Symbol(__VUEPRESS_DEV__ ? "sidebarItems" : "");
/**
 * Create sidebar items ref and provide as global computed in setup
 */
export const setupSidebarItems = () => {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const routeLocale = useRouteLocale();
    const routePath = useRoutePath();
    // Get sidebar options from frontmatter > themeConfig
    const sidebarOptions = computed(() => frontmatter.value.home
        ? false
        : (frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure"));
    const headerDepth = computed(() => frontmatter.value.headerDepth ??
        themeLocale.value.headerDepth ??
        2);
    const sidebarItems = computed(() => resolveSidebarItems({
        config: sidebarOptions.value,
        headerDepth: headerDepth.value,
        routeLocale: routeLocale.value,
        routePath: routePath.value,
    }));
    provide(sidebarItemsSymbol, sidebarItems);
};
/**
 * Inject sidebar items global computed
 */
export const useSidebarItems = () => {
    const sidebarItems = inject(sidebarItemsSymbol);
    if (!sidebarItems)
        throw new Error("useSidebarItems() is called without provider.");
    return sidebarItems;
};
//# sourceMappingURL=setupSidebarItems.js.map