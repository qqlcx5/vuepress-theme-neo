import type { PropType, SlotsType, VNode } from "vue";
import type { PageInfoProps } from "@theme-hope/modules/info/components/PageInfo";
import type { ArticleInfoData, PageInfoData } from "../../../../shared/index.js";
import "../styles/article-item.scss";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Article information
     *
     * 文章信息
     */
    info: {
        type: PropType<PageInfoData & ArticleInfoData>;
        required: true;
    };
    /**
     * Article path
     *
     * 文章路径
     */
    path: {
        type: StringConstructor;
        required: true;
    };
}>, () => VNode, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Article information
     *
     * 文章信息
     */
    info: {
        type: PropType<PageInfoData & ArticleInfoData>;
        required: true;
    };
    /**
     * Article path
     *
     * 文章路径
     */
    path: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{}>, {}, SlotsType<{
    cover?: (props: {
        cover: string | undefined;
    }) => VNode[] | VNode | null;
    title?: (props: {
        title: string;
        isEncrypted?: boolean;
        type: string;
    }) => VNode[] | VNode | null;
    excerpt?: (props: {
        excerpt: string | undefined;
    }) => VNode[] | VNode | null;
    info?: (props: {
        info: PageInfoProps;
    }) => VNode[] | VNode | null;
}>, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=ArticleItem.d.ts.map