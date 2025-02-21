import type { CSSProperties, PropType, VNode } from "vue";
import "./hitokoto-blog-hero.scss";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /** Hero text */
    text: {
        type: StringConstructor;
        required: true;
    };
    /** Hero image */
    image: {
        type: StringConstructor;
        default: null;
    };
    /** Hero image dark */
    imageDark: {
        type: StringConstructor;
        default: null;
    };
    /** Hero image alt */
    alt: {
        type: StringConstructor;
        required: true;
    };
    /** Hero image style */
    imageStyle: {
        type: PropType<string | CSSProperties>;
        default: null;
    };
}>, () => VNode[], {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Hero text */
    text: {
        type: StringConstructor;
        required: true;
    };
    /** Hero image */
    image: {
        type: StringConstructor;
        default: null;
    };
    /** Hero image dark */
    imageDark: {
        type: StringConstructor;
        default: null;
    };
    /** Hero image alt */
    alt: {
        type: StringConstructor;
        required: true;
    };
    /** Hero image style */
    imageStyle: {
        type: PropType<string | CSSProperties>;
        default: null;
    };
}>> & Readonly<{}>, {
    image: string;
    imageDark: string;
    imageStyle: string | CSSProperties;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=HitokotoBlogHero.d.ts.map