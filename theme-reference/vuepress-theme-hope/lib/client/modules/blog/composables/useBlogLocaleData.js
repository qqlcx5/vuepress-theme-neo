import { computed } from "vue";
import { useThemeLocaleData } from "@theme-hope/composables/index";
export const useBlogLocaleData = () => {
    const themeLocale = useThemeLocaleData();
    return computed(() => themeLocale.value.blogLocales);
};
//# sourceMappingURL=useBlogLocaleData.js.map