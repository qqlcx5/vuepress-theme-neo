import { computed } from "vue";
import { useThemeData } from "./useThemeData.js";
export const usePure = () => {
    const themeData = useThemeData();
    return computed(() => Boolean(themeData.value.pure));
};
//# sourceMappingURL=usePure.js.map