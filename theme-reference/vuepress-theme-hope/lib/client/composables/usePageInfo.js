import { getDate } from "@vuepress/helper/client";
import { useReadingTimeData, useReadingTimeLocale, } from "@vuepress/plugin-reading-time/client";
import { computed, inject } from "vue";
import { usePageData, usePageFrontmatter } from "vuepress/client";
import { getAuthor, getCategory, getTag } from "vuepress-shared/client";
import { useAuthorInfo } from "./useAuthorInfo.js";
import { useThemeLocaleData } from "./useThemeData.js";
export const usePageAuthor = () => {
    const frontmatter = usePageFrontmatter();
    const authorInfo = useAuthorInfo();
    return computed(() => {
        const { author } = frontmatter.value;
        if (author)
            return getAuthor(author);
        if (author === false)
            return [];
        return getAuthor(authorInfo.value, false);
    });
};
export const usePageCategory = () => {
    const frontmatter = usePageFrontmatter();
    const categoryMap = __VP_BLOG__
        ? inject(Symbol.for("categoryMap"))
        : null;
    return computed(() => getCategory(frontmatter.value.category ?? frontmatter.value.categories).map((name) => ({
        name,
        path: categoryMap?.value.map[name]?.path ?? "",
    })));
};
export const usePageTag = () => {
    const frontmatter = usePageFrontmatter();
    const tagMap = __VP_BLOG__ ? inject(Symbol.for("tagMap")) : null;
    return computed(() => getTag(frontmatter.value.tag ?? frontmatter.value.tags).map((name) => ({
        name,
        path: tagMap?.value.map[name]?.path ?? "",
    })));
};
export const usePageDate = () => {
    const frontmatter = usePageFrontmatter();
    const page = usePageData();
    return computed(() => {
        const date = getDate(frontmatter.value.date);
        if (date)
            return date;
        const { createdTime } = page.value.git ?? {};
        if (createdTime)
            return new Date(createdTime);
        return null;
    });
};
export const usePageInfo = () => {
    const themeLocale = useThemeLocaleData();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const author = usePageAuthor();
    const category = usePageCategory();
    const tag = usePageTag();
    const date = usePageDate();
    const readingTimeData = useReadingTimeData();
    const readingTimeLocale = useReadingTimeLocale();
    const info = computed(() => ({
        author: author.value,
        category: category.value,
        date: date.value,
        localizedDate: page.value.localizedDate,
        tag: tag.value,
        isOriginal: frontmatter.value.isOriginal ?? false,
        readingTime: readingTimeData.value,
        readingTimeLocale: readingTimeLocale.value,
        pageview: frontmatter.value.pageview ?? true,
    }));
    const items = computed(() => frontmatter.value.pageInfo ?? themeLocale.value.pageInfo ?? null);
    return { info, items };
};
//# sourceMappingURL=usePageInfo.js.map