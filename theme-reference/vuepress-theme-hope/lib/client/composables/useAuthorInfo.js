import { computed } from "vue";
import { useThemeLocaleData } from "@theme-hope/composables/index";
export const useAuthorInfo = () => {
    const themeLocale = useThemeLocaleData();
    return computed(() => themeLocale.value.author);
};
//# sourceMappingURL=useAuthorInfo.js.map