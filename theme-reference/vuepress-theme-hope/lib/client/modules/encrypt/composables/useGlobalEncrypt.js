import { useSessionStorage, useStorage } from "@vueuse/core";
import { compareSync } from "bcrypt-ts/browser";
import { computed } from "vue";
import { useEncryptConfig } from "./useEncryptConfig.js";
const STORAGE_KEY = "VUEPRESS_HOPE_GLOBAL_TOKEN";
export const useGlobalEncrypt = () => {
    const encryptData = useEncryptConfig();
    const storageToken = useStorage(STORAGE_KEY, "");
    const sessionToken = useSessionStorage(STORAGE_KEY, "");
    const status = computed(() => {
        const { global = false, admin } = encryptData.value;
        // Is globally encrypted
        const isEncrypted = global && Boolean(admin?.tokens.length);
        const isLocked = 
        // Valid token exists
        isEncrypted
            ? storageToken.value
                ? // None of the token matches
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    encryptData.value.admin.tokens.some((hash) => compareSync(storageToken.value, hash))
                : // None of the token matches
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    encryptData.value.admin.tokens.some((hash) => compareSync(sessionToken.value, hash))
            : false;
        return {
            isEncrypted,
            isLocked,
            hint: admin?.hint ?? "",
        };
    });
    const validate = (inputToken, keep = false) => {
        (keep ? storageToken : sessionToken).value = inputToken;
    };
    return {
        status,
        validate,
    };
};
//# sourceMappingURL=useGlobalEncrypt.js.map