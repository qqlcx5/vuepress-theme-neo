import type { SlotsType, VNode } from "vue";
import "../styles/common-wrapper.scss";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Extra class of container
     *
     * 容器额外类名
     */
    containerClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Whether disable navbar
     *
     * 是否禁用导航栏
     */
    noNavbar: BooleanConstructor;
    /**
     * Whether disable sidebar
     *
     * 是否禁用侧边栏
     */
    noSidebar: BooleanConstructor;
    /**
     * Whether disable toc
     */
    noToc: BooleanConstructor;
}>, () => VNode, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Extra class of container
     *
     * 容器额外类名
     */
    containerClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Whether disable navbar
     *
     * 是否禁用导航栏
     */
    noNavbar: BooleanConstructor;
    /**
     * Whether disable sidebar
     *
     * 是否禁用侧边栏
     */
    noSidebar: BooleanConstructor;
    /**
     * Whether disable toc
     */
    noToc: BooleanConstructor;
}>> & Readonly<{}>, {
    containerClass: string;
    noNavbar: boolean;
    noSidebar: boolean;
    noToc: boolean;
}, SlotsType<{
    default: () => VNode[] | VNode | null;
    navScreenTop?: () => VNode[] | VNode | null;
    navScreenBottom?: () => VNode[] | VNode | null;
    sidebar?: () => VNode[] | VNode;
    sidebarTop?: () => VNode[] | VNode | null;
    sidebarBottom?: () => VNode[] | VNode | null;
}>, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=CommonWrapper.d.ts.map