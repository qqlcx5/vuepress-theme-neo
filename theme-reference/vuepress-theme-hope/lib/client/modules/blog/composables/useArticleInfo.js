import { getDate } from "@vuepress/helper/client";
import { getReadingTimeLocale, useReadingTimeLocaleConfig, } from "@vuepress/plugin-reading-time/client";
import { computed, toRef } from "vue";
import { getAuthor, getCategory, getTag } from "vuepress-shared/client";
import { useThemeLocaleData } from "@theme-hope/composables/index";
import { useBlogOptions } from "./useBlogOptions.js";
import { useCategoryMap } from "./useCategoryMap.js";
import { useTagMap } from "./useTagMap.js";
import { ArticleInfo } from "../../../../shared/index.js";
export const useArticleAuthor = (info) => {
    const themeLocale = useThemeLocaleData();
    return computed(() => {
        const { [ArticleInfo.author]: author } = info.value;
        if (author)
            return getAuthor(author);
        if (author === false)
            return [];
        return getAuthor(themeLocale.value.author, false);
    });
};
export const useArticleCategory = (info) => {
    const categoryMap = useCategoryMap();
    return computed(() => getCategory(info.value[ArticleInfo.category]).map((name) => ({
        name,
        path: categoryMap.value.map[name].path,
    })));
};
export const useArticleTag = (info) => {
    const tagMap = useTagMap();
    return computed(() => getTag(info.value[ArticleInfo.tag]).map((name) => ({
        name,
        path: tagMap.value.map[name].path,
    })));
};
export const useArticleDate = (info) => computed(() => {
    const { [ArticleInfo.date]: timestamp } = info.value;
    return getDate(timestamp);
});
export const useArticleInfo = (props) => {
    const articleInfo = toRef(props, "info");
    const blogOptions = useBlogOptions();
    const author = useArticleAuthor(articleInfo);
    const category = useArticleCategory(articleInfo);
    const tag = useArticleTag(articleInfo);
    const date = useArticleDate(articleInfo);
    const readingTimeLocaleConfig = useReadingTimeLocaleConfig();
    const info = computed(() => ({
        author: author.value,
        category: category.value,
        date: date.value,
        localizedDate: articleInfo.value[ArticleInfo.localizedDate] ?? "",
        tag: tag.value,
        isOriginal: articleInfo.value[ArticleInfo.isOriginal] ?? false,
        readingTime: articleInfo.value[ArticleInfo.readingTime] ?? null,
        readingTimeLocale: articleInfo.value[ArticleInfo.readingTime] &&
            readingTimeLocaleConfig.value
            ? getReadingTimeLocale(articleInfo.value[ArticleInfo.readingTime], readingTimeLocaleConfig.value)
            : null,
        pageview: props.path,
    }));
    const items = computed(() => blogOptions.value.articleInfo);
    return { info, items };
};
//# sourceMappingURL=useArticleInfo.js.map