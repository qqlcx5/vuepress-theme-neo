import { dateSorter } from "@vuepress/helper";
import { ArticleInfo } from "../shared/index.js";
export const getSlides = ({ path = "/slides/", locales = {}, }) => ({
    key: "slides",
    filter: ({ frontmatter }) => frontmatter.layout === "SlidePage",
    sorter: (pageA, pageB) => {
        const prevKey = pageA.frontmatter.sticky;
        const nextKey = pageB.frontmatter.sticky;
        if (prevKey && nextKey && prevKey !== nextKey)
            return Number(nextKey) - Number(prevKey);
        if (prevKey && !nextKey)
            return -1;
        if (!prevKey && nextKey)
            return 1;
        return dateSorter(pageA.routeMeta[ArticleInfo.date], pageB.routeMeta[ArticleInfo.date]);
    },
    path,
    layout: "BlogType",
    frontmatter: (localePath) => ({
        title: locales[localePath] ?? "Slides",
        dir: { index: false },
        index: false,
        feed: false,
        sitemap: false,
    }),
});
//# sourceMappingURL=getSlides.js.map