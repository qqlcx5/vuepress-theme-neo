import { defineComponent, h } from "vue";
import { usePageLang } from "vuepress/client";
import { usePure } from "@theme-hope/composables/index";
import { CalendarIcon } from "@theme-hope/modules/info/components/icons";
import { useMetaLocale } from "@theme-hope/modules/info/composables/index";
export default defineComponent({
    name: "DateInfo",
    inheritAttrs: false,
    props: {
        /**
         * Date information
         *
         * 日期信息
         */
        date: {
            type: Object,
            default: null,
        },
        /**
         * Localized date text
         *
         * 本地化的日期文字
         */
        localizedDate: {
            type: String,
            default: "",
        },
    },
    setup(props) {
        const lang = usePageLang();
        const metaLocale = useMetaLocale();
        const isPure = usePure();
        return () => props.date
            ? h("span", {
                class: "page-date-info",
                "aria-label": `${metaLocale.value.date}${isPure.value ? "" : "📅"}`,
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            }, [
                h(CalendarIcon),
                h("span", { "data-allow-mismatch": "text" }, props.localizedDate ||
                    props.date.toLocaleDateString(lang.value)),
                h("meta", {
                    property: "datePublished",
                    // ISO Format Date string
                    content: props.date.toISOString() || "",
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=DateInfo.js.map