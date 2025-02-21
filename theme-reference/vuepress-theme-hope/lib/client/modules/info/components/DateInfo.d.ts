import type { PropType, VNode } from "vue";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
        type: PropType<Date | null>;
        default: null;
    };
    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
        type: StringConstructor;
        default: string;
    };
}>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
        type: PropType<Date | null>;
        default: null;
    };
    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    date: Date | null;
    localizedDate: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=DateInfo.d.ts.map