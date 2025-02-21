import type { PropType, VNode } from "vue";
import type { ArticleInfoData, PageInfoData } from "../../../../shared/index.js";
import "../styles/article-list.scss";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Articles
     *
     * 文章项目
     */
    items: {
        type: PropType<{
            path: string;
            info: PageInfoData & ArticleInfoData;
        }[]>;
        default: () => never[];
    };
}>, () => VNode, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Articles
     *
     * 文章项目
     */
    items: {
        type: PropType<{
            path: string;
            info: PageInfoData & ArticleInfoData;
        }[]>;
        default: () => never[];
    };
}>> & Readonly<{}>, {
    items: {
        path: string;
        info: PageInfoData & ArticleInfoData;
    }[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=ArticleList.d.ts.map