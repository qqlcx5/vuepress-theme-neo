import { resolveRoute } from "vuepress/client";
import { PageInfo } from "../../shared/index.js";
/**
 * Resolve AutoLink props from string
 *
 */
export const resolveLinkInfo = (item, preferFull = false, currentPath) => {
    const { meta, path, notFound } = resolveRoute(item, currentPath);
    return notFound
        ? { text: path, link: path }
        : {
            text: !preferFull && meta[PageInfo.shortTitle]
                ? meta[PageInfo.shortTitle]
                : meta[PageInfo.title] || path,
            link: path,
            ...(meta[PageInfo.icon] ? { icon: meta[PageInfo.icon] } : {}),
        };
};
//# sourceMappingURL=resolveLinkInfo.js.map