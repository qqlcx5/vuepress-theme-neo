import type { SlotsType, VNode } from "vue";
import type { PortfolioMedia } from "../../shared/index.js";
import "../styles/portfolio-hero.scss";
export interface PortfolioAvatar {
    avatar: string | null;
    avatarDark: string | null;
    alt: string;
    avatarStyle: string | Record<string, string> | undefined;
}
export interface PortfolioInfo {
    name: string;
    welcome: string;
    title: string;
    titles: string[];
    medias: PortfolioMedia[] | null;
}
export interface PortfolioBackground {
    image: string | null;
    imageDark: string | null;
    bgStyle: string | Record<string, string> | undefined;
}
declare const _default: import("vue").DefineComponent<{}, () => VNode, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, SlotsType<{
    avatar?: (props: PortfolioAvatar) => VNode[] | VNode | null;
    info?: (props: PortfolioInfo) => VNode[] | VNode | null;
    bg?: (props: PortfolioBackground) => VNode[] | VNode | null;
}>, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=PortfolioHero.d.ts.map