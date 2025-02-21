import type { ComputedRef } from "vue";
import type { EncryptStatus } from "./typings.js";
export interface GlobalEncrypt {
    status: ComputedRef<EncryptStatus>;
    validate: (token: string, keep?: boolean) => void;
}
export declare const useGlobalEncrypt: () => GlobalEncrypt;
//# sourceMappingURL=useGlobalEncrypt.d.ts.map