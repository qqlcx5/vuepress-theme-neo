import { isActiveLink } from "vuepress-shared/client";
import { isActiveItem } from "../../../utils/isActiveItem.js";
export const isActiveSidebarItem = (route, item) => "children" in item
    ? (Boolean(item.prefix) && isActiveLink(route, item.prefix)) ||
        item.children.some((child) => isActiveSidebarItem(route, child))
    : isActiveItem(route, item);
//# sourceMappingURL=isActiveSidebarItem.js.map