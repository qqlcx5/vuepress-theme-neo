import type { PropType, SlotsType, VNode } from "vue";
import type { PageHeader } from "vuepress/client";
import "../styles/toc.scss";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * TOC items config
     *
     * TOC 项目配置
     */
    items: {
        type: PropType<PageHeader[]>;
        default: () => never[];
    };
    /**
     * Max header nesting depth
     *
     * 最大的标题嵌套深度
     */
    headerDepth: {
        type: NumberConstructor;
        default: number;
    };
}>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * TOC items config
     *
     * TOC 项目配置
     */
    items: {
        type: PropType<PageHeader[]>;
        default: () => never[];
    };
    /**
     * Max header nesting depth
     *
     * 最大的标题嵌套深度
     */
    headerDepth: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    headerDepth: number;
    items: import("@mdit-vue/types").MarkdownItHeader[];
}, SlotsType<{
    before?: () => VNode[] | VNode | null;
    after?: () => VNode[] | VNode | null;
}>, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=TOC.d.ts.map