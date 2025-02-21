import type { ComputedRef } from "vue";
import type { EncryptStatus } from "./typings.js";
export interface PathEncrypt {
    status: ComputedRef<EncryptStatus>;
    getStatus: (path: string) => EncryptStatus;
    validate: (token: string, keep?: boolean) => void;
}
export declare const usePathEncrypt: () => PathEncrypt;
//# sourceMappingURL=usePathEncrypt.d.ts.map