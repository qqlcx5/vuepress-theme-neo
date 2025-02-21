import type { SlotsType, VNode } from "vue";
import "../styles/hero-info.scss";
export interface HeroInfoData {
    text: string | null;
    tagline: string | null;
    isFullScreen: boolean;
}
export interface HeroImageData {
    image: string | null;
    imageDark: string | null;
    imageStyle: string | Record<string, string> | undefined;
    alt: string;
    isFullScreen: boolean;
}
export interface HeroBackgroundData {
    image: string | null;
    bgStyle: string | Record<string, string> | undefined;
    isFullScreen: boolean;
}
declare const _default: import("vue").DefineComponent<{}, () => VNode, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, SlotsType<{
    bg?: (props: HeroBackgroundData) => VNode[] | VNode | null;
    logo?: (props: HeroImageData) => VNode[] | VNode | null;
    info?: (props: HeroInfoData) => VNode[] | VNode | null;
}>, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=HeroInfo.d.ts.map