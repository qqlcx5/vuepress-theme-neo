import type { PropType, SlotsType, VNode } from "vue";
import type { AutoLinkOptions } from "../../shared/index.js";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Autolink config
     */
    config: {
        type: PropType<AutoLinkOptions>;
        required: true;
    };
    /**
     * Whether icon should not fix width
     */
    iconSizing: {
        type: PropType<"height" | "width" | "both">;
        default: string;
    };
}>, () => VNode, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "focusout"[], "focusout", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Autolink config
     */
    config: {
        type: PropType<AutoLinkOptions>;
        required: true;
    };
    /**
     * Whether icon should not fix width
     */
    iconSizing: {
        type: PropType<"height" | "width" | "both">;
        default: string;
    };
}>> & Readonly<{
    onFocusout?: (...args: any[]) => any;
}>, {
    iconSizing: "height" | "width" | "both";
}, SlotsType<{
    before?: () => VNode[] | VNode | null;
    after?: () => VNode[] | VNode | null;
    default?: () => VNode[] | VNode;
}>, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=AutoLink.d.ts.map