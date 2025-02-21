import type { ComputedRef, Ref } from "vue";
import type { AuthorInfo } from "vuepress-shared/client";
import type { PageInfoProps } from "@theme-hope/modules/info/components/PageInfo";
import type { PageCategory, PageTag } from "@theme-hope/modules/info/utils/index";
import type { ArticleInfoData, PageInfoType } from "../../../../shared/index.js";
export type AuthorRef = ComputedRef<AuthorInfo[]>;
export declare const useArticleAuthor: (info: Ref<ArticleInfoData>) => AuthorRef;
export type CategoryRef = ComputedRef<PageCategory[]>;
export declare const useArticleCategory: (info: Ref<ArticleInfoData>) => CategoryRef;
export type TagRef = ComputedRef<PageTag[]>;
export declare const useArticleTag: (info: Ref<ArticleInfoData>) => TagRef;
export type DateRef = ComputedRef<Date | null>;
export declare const useArticleDate: (info: Ref<ArticleInfoData>) => DateRef;
export declare const useArticleInfo: (props: {
    info: ArticleInfoData;
    path: string;
}) => {
    info: ComputedRef<PageInfoProps>;
    items: ComputedRef<PageInfoType[] | false | undefined>;
};
//# sourceMappingURL=useArticleInfo.d.ts.map