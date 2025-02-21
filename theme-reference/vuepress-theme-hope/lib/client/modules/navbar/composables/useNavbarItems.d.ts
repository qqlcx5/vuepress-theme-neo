import type { ComputedRef } from "vue";
import type { NavbarGroupOptions, NavbarLinkOptions } from "../../../../shared/index.js";
import type { NavbarItem } from "../utils/index.js";
export declare const resolveNavbarItem: (item: NavbarLinkOptions | NavbarGroupOptions | string, prefix?: string) => NavbarItem;
export declare const useNavbarItems: () => ComputedRef<NavbarItem[]>;
//# sourceMappingURL=useNavbarItems.d.ts.map