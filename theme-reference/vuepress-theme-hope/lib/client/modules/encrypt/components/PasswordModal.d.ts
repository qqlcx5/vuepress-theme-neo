import type { VNode } from "vue";
import "../styles/password-modal.scss";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Password hint
     */
    hint: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Whether is fullscreen
     *
     * 是否是全屏
     */
    full: BooleanConstructor;
    /**
     * Whether to show title
     *
     * 是否显示标题
     */
    showTitle: BooleanConstructor;
}>, () => VNode, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "verify"[], "verify", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Password hint
     */
    hint: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Whether is fullscreen
     *
     * 是否是全屏
     */
    full: BooleanConstructor;
    /**
     * Whether to show title
     *
     * 是否显示标题
     */
    showTitle: BooleanConstructor;
}>> & Readonly<{
    onVerify?: (...args: any[]) => any;
}>, {
    hint: string;
    full: boolean;
    showTitle: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=PasswordModal.d.ts.map