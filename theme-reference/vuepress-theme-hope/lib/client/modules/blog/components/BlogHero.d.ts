import type { SlotsType, VNode } from "vue";
import "../styles/blog-hero.scss";
export interface HeroInfoData {
    text: string | null;
    tagline: string | null;
    image: string | null;
    imageDark: string | null;
    alt: string;
    imageStyle: string | Record<string, string> | undefined;
    isFullScreen: boolean;
}
export interface HeroBackgroundData {
    image: string | null;
    bgStyle: string | Record<string, string> | undefined;
    isFullScreen: boolean;
}
declare const _default: import("vue").DefineComponent<{}, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, SlotsType<{
    bg?: (props: HeroBackgroundData) => VNode[] | VNode | null;
    info?: (props: HeroInfoData) => VNode[] | VNode | null;
}>, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=BlogHero.d.ts.map