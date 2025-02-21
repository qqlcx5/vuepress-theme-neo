import type { PropType, VNode } from "vue";
import type { SidebarGroupItem } from "../utils/index.js";
import "../styles/sidebar-group.scss";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Sidebar group item config
     *
     * 侧边栏分组配置
     */
    config: {
        type: PropType<SidebarGroupItem>;
        required: true;
    };
    /**
     * Whether current group is open
     *
     * 当前分组是否展开
     */
    open: {
        type: BooleanConstructor;
        required: true;
    };
}>, () => VNode, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "toggle"[], "toggle", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Sidebar group item config
     *
     * 侧边栏分组配置
     */
    config: {
        type: PropType<SidebarGroupItem>;
        required: true;
    };
    /**
     * Whether current group is open
     *
     * 当前分组是否展开
     */
    open: {
        type: BooleanConstructor;
        required: true;
    };
}>> & Readonly<{
    onToggle?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=SidebarGroup.d.ts.map