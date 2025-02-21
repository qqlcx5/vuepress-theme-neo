import noopComponent from "@vuepress/helper/noopComponent";
import { isSupported } from "@vuepress/plugin-comment/pageview";
import { defineComponent, h, resolveComponent } from "vue";
import { usePure } from "@theme-hope/composables/index";
import AuthorInfo from "@theme-hope/modules/info/components/AuthorInfo";
import CategoryInfo from "@theme-hope/modules/info/components/CategoryInfo";
import DateInfo from "@theme-hope/modules/info/components/DateInfo";
import OriginalInfo from "@theme-hope/modules/info/components/OriginalInfo";
import PageViewInfo from "@theme-hope/modules/info/components/PageViewInfo";
import ReadingTimeInfo from "@theme-hope/modules/info/components/ReadingTimeInfo";
import TagInfo from "@theme-hope/modules/info/components/TagInfo";
import WordInfo from "@theme-hope/modules/info/components/WordInfo";
import "balloon-css/balloon.css";
import "../styles/page-info.scss";
export default defineComponent({
    name: "PageInfo",
    components: {
        AuthorInfo,
        CategoryInfo,
        DateInfo,
        OriginalInfo,
        PageViewInfo: isSupported ? PageViewInfo : noopComponent,
        ReadingTimeInfo: __VP_READING_TIME__ ? ReadingTimeInfo : noopComponent,
        TagInfo,
        WordInfo: __VP_READING_TIME__ ? WordInfo : noopComponent,
    },
    props: {
        /**
         * Article information to display
         *
         * 待展示的文章信息
         */
        items: {
            type: [Array, Boolean],
            default: () => [
                "Author",
                "Original",
                "Date",
                "PageView",
                "ReadingTime",
                "Category",
                "Tag",
            ],
        },
        /**
         * Article information
         *
         * 文章信息配置
         */
        info: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const isPure = usePure();
        return () => props.items
            ? h("div", { class: "page-info" }, props.items.map((item) => h(resolveComponent(`${item}Info`), {
                ...props.info,
                isPure: isPure.value,
            })))
            : null;
    },
});
//# sourceMappingURL=PageInfo.js.map