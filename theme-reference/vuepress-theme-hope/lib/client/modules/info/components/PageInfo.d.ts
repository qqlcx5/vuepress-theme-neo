import type { ReadingTime, ReadingTimeLocale } from "@vuepress/plugin-reading-time/client";
import type { PropType, VNode } from "vue";
import type { AuthorInfo as AuthorInfoType } from "vuepress-shared/client";
import type { PageCategory, PageTag } from "@theme-hope/modules/info/utils/index";
import type { PageInfoType } from "../../../../shared/index.js";
import "balloon-css/balloon.css";
import "../styles/page-info.scss";
export interface PageInfoProps {
    /**
     * Authors of article
     *
     * 文章作者
     */
    author?: AuthorInfoType[];
    /**
     * Categories of article
     *
     * 文章分类
     */
    category?: PageCategory[];
    /**
     * Tags of article
     *
     * 文章标签
     */
    tag?: PageTag[];
    /**
     * Writing Date
     *
     * 写作日期
     */
    date?: Date | null;
    /**
     * Writing Date
     *
     * 写作日期
     */
    localizedDate?: string | null;
    /**
     * Whether the article is original
     *
     * 文章是否原创
     */
    isOriginal?: boolean;
    /**
     * Whether enable pageview
     *
     * If the value is a string, it will use as search id
     *
     * 是否启用访问量
     *
     * 如果值为字符串，会用做查询 id
     */
    pageview?: string | boolean;
    /**
     * ReadingTime info
     *
     * 阅读时间
     */
    readingTime?: ReadingTime | null;
    /**
     * ReadingTime Locales
     *
     * 阅读时间多语言
     */
    readingTimeLocale?: ReadingTimeLocale | null;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Article information to display
     *
     * 待展示的文章信息
     */
    items: {
        type: PropType<PageInfoType[] | false>;
        default: () => PageInfoType[];
    };
    /**
     * Article information
     *
     * 文章信息配置
     */
    info: {
        type: PropType<PageInfoProps>;
        required: true;
    };
}>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Article information to display
     *
     * 待展示的文章信息
     */
    items: {
        type: PropType<PageInfoType[] | false>;
        default: () => PageInfoType[];
    };
    /**
     * Article information
     *
     * 文章信息配置
     */
    info: {
        type: PropType<PageInfoProps>;
        required: true;
    };
}>> & Readonly<{}>, {
    items: false | PageInfoType[];
}, {}, {
    AuthorInfo: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        author: {
            type: PropType<AuthorInfoType[]>;
            required: true;
        };
    }>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        author: {
            type: PropType<AuthorInfoType[]>;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CategoryInfo: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        category: {
            type: PropType<PageCategory[]>;
            required: true;
        };
    }>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        category: {
            type: PropType<PageCategory[]>;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    DateInfo: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        date: {
            type: PropType<Date | null>;
            default: null;
        };
        localizedDate: {
            type: StringConstructor;
            default: string;
        };
    }>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        date: {
            type: PropType<Date | null>;
            default: null;
        };
        localizedDate: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        date: Date | null;
        localizedDate: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    OriginalInfo: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        isOriginal: BooleanConstructor;
    }>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        isOriginal: BooleanConstructor;
    }>> & Readonly<{}>, {
        isOriginal: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    PageViewInfo: import("vue").FunctionalComponent<{}, {}, any, {}> | import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        pageview: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
    }>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        pageview: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
    }>> & Readonly<{}>, {
        pageview: string | boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ReadingTimeInfo: import("vue").FunctionalComponent<{}, {}, any, {}> | import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        readingTime: {
            type: PropType<ReadingTime | null>;
            default: () => null;
        };
        readingTimeLocale: {
            type: PropType<ReadingTimeLocale | null>;
            default: () => null;
        };
    }>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        readingTime: {
            type: PropType<ReadingTime | null>;
            default: () => null;
        };
        readingTimeLocale: {
            type: PropType<ReadingTimeLocale | null>;
            default: () => null;
        };
    }>> & Readonly<{}>, {
        readingTime: ReadingTime | null;
        readingTimeLocale: ReadingTimeLocale | null;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    TagInfo: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        tag: {
            type: PropType<PageTag[]>;
            default: () => never[];
        };
    }>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: PropType<PageTag[]>;
            default: () => never[];
        };
    }>> & Readonly<{}>, {
        tag: PageCategory[];
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    WordInfo: import("vue").FunctionalComponent<{}, {}, any, {}> | import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        readingTime: {
            type: PropType<ReadingTime | null>;
            default: () => null;
        };
        readingTimeLocale: {
            type: PropType<ReadingTimeLocale | null>;
            default: () => null;
        };
    }>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        readingTime: {
            type: PropType<ReadingTime | null>;
            default: () => null;
        };
        readingTimeLocale: {
            type: PropType<ReadingTimeLocale | null>;
            default: () => null;
        };
    }>> & Readonly<{}>, {
        readingTime: ReadingTime | null;
        readingTimeLocale: ReadingTimeLocale | null;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=PageInfo.d.ts.map