import { defineComponent, h } from "vue";
import CommonWrapper from "@theme-hope/components/CommonWrapper";
import SkipLink from "@theme-hope/components/SkipLink";
import { useWindowSize } from "@theme-hope/composables/index";
import BloggerInfo from "@theme-hope/modules/blog/components/BloggerInfo";
import InfoList from "@theme-hope/modules/blog/components/InfoList";
import "../styles/page.scss";
export default defineComponent({
    name: "BlogWrapper",
    slots: Object,
    setup(_props, { slots }) {
        const { isMobile } = useWindowSize();
        return () => [
            h(SkipLink),
            h(CommonWrapper, { noSidebar: true, noToc: true }, {
                default: () => slots.default(),
                navScreenBottom: () => h(BloggerInfo),
                sidebar: isMobile.value
                    ? () => h(InfoList)
                    : null,
            }),
        ];
    },
});
//# sourceMappingURL=BlogWrapper.js.map