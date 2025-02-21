import { isPlainObject, keys, startsWith } from "@vuepress/helper/client";
import { useSessionStorage, useStorage } from "@vueuse/core";
import { computed } from "vue";
import { usePageData } from "vuepress/client";
import { isTokenMatched } from "@theme-hope/modules/encrypt/utils/index";
import { useEncryptConfig } from "./useEncryptConfig.js";
const STORAGE_KEY = "VUEPRESS_HOPE_PATH_TOKEN";
export const usePathEncrypt = () => {
    const page = usePageData();
    const encryptData = useEncryptConfig();
    const localTokenConfig = useStorage(STORAGE_KEY, {});
    const sessionTokenConfig = useSessionStorage(STORAGE_KEY, {});
    const getPathMatchedKeys = (path) => isPlainObject(encryptData.value.config)
        ? keys(encryptData.value.config)
            .filter((key) => startsWith(decodeURI(path), key))
            .sort((a, b) => b.length - a.length)
        : [];
    const getStatus = (path) => {
        const { config = {} } = encryptData.value;
        const matchedKeys = getPathMatchedKeys(path);
        if (matchedKeys.length > 0) {
            const firstKeyWithHint = matchedKeys.find((key) => config[key].hint);
            return {
                isEncrypted: true,
                isLocked: matchedKeys.some((key) => (localTokenConfig.value[key]
                    ? config[key].tokens.every((token) => !isTokenMatched(localTokenConfig.value[key], token))
                    : true) &&
                    (sessionTokenConfig.value[key]
                        ? config[key].tokens.every((token) => !isTokenMatched(sessionTokenConfig.value[key], token))
                        : true)),
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                hint: firstKeyWithHint ? config[firstKeyWithHint].hint : "",
            };
        }
        return {
            isEncrypted: false,
            isLocked: false,
            hint: "",
        };
    };
    const status = computed(() => getStatus(page.value.path));
    const validate = (inputToken, keep = false) => {
        const { config = {} } = encryptData.value;
        const matchedKeys = getPathMatchedKeys(page.value.path);
        // Some of the tokens matches
        for (const hitKey of matchedKeys)
            if (config[hitKey].tokens.some((token) => isTokenMatched(inputToken, token))) {
                (keep ? localTokenConfig : sessionTokenConfig).value[hitKey] =
                    inputToken;
                break;
            }
    };
    return {
        status,
        getStatus,
        validate,
    };
};
//# sourceMappingURL=usePathEncrypt.js.map