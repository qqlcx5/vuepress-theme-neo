import { computed } from "vue";
import { useThemeData } from "@theme-hope/composables/index";
export const useEncryptConfig = () => {
    const themeData = useThemeData();
    return computed(() => themeData.value.encrypt);
};
//# sourceMappingURL=useEncryptConfig.js.map