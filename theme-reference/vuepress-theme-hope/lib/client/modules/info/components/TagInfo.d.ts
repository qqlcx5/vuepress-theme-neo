import type { PropType, VNode } from "vue";
import type { PageTag } from "@theme-hope/modules/info/utils/index";
import "../styles/tag-info.scss";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Tag information
     *
     * 标签信息
     */
    tag: {
        type: PropType<PageTag[]>;
        default: () => never[];
    };
}>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Tag information
     *
     * 标签信息
     */
    tag: {
        type: PropType<PageTag[]>;
        default: () => never[];
    };
}>> & Readonly<{}>, {
    tag: import("@theme-hope/modules/info/utils/index").PageCategory[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=TagInfo.d.ts.map