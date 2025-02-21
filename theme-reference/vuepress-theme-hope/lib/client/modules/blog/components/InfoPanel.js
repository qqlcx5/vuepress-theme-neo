import { h } from "vue";
import { DropTransition } from "@theme-hope/components/transitions/index";
import BloggerInfo from "@theme-hope/modules/blog/components/BloggerInfo";
import InfoList from "@theme-hope/modules/blog/components/InfoList";
import "../styles/info-panel.scss";
const InfoPanel = () => h("aside", { class: "vp-blog-info-wrapper" }, [
    h(DropTransition, () => h(BloggerInfo)),
    h(DropTransition, { delay: 0.04 }, () => h(InfoList)),
]);
InfoPanel.displayName = "InfoPanel";
export default InfoPanel;
//# sourceMappingURL=InfoPanel.js.map