import { isActiveLink } from "vuepress-shared/client";
export const isActiveItem = (route, item) => "activeMatch" in item
    ? new RegExp(item.activeMatch, "u").test(route.path)
    : isActiveLink(route, item.link);
//# sourceMappingURL=isActiveItem.js.map