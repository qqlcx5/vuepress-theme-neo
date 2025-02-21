import type { PropType, SlotsType, VNode } from "vue";
export declare const DropTransition: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @description Transition type
     */
    type: {
        type: PropType<"single" | "group">;
        default: string;
    };
    /**
     * @description Transition delay
     */
    delay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description Transition duration
     */
    duration: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description appear
     */
    appear: BooleanConstructor;
}>, () => VNode, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @description Transition type
     */
    type: {
        type: PropType<"single" | "group">;
        default: string;
    };
    /**
     * @description Transition delay
     */
    delay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description Transition duration
     */
    duration: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description appear
     */
    appear: BooleanConstructor;
}>> & Readonly<{}>, {
    delay: number;
    type: "single" | "group";
    duration: number;
    appear: boolean;
}, SlotsType<{
    default: () => VNode[] | VNode;
}>, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
//# sourceMappingURL=DropTransition.d.ts.map