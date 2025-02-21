import { defineComponent, h } from "vue";
import { usePure } from "@theme-hope/composables/index";
import { WordIcon } from "@theme-hope/modules/info/components/icons";
import { useMetaLocale } from "@theme-hope/modules/info/composables/index";
export default defineComponent({
    name: "ReadTimeInfo",
    inheritAttrs: false,
    props: {
        /**
         * Reading time information
         *
         * 阅读时间信息
         */
        readingTime: {
            type: Object,
            default: () => null,
        },
        /**
         * Reading time locale
         *
         * 阅读时间语言环境
         */
        readingTimeLocale: {
            type: Object,
            default: () => null,
        },
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        const isPure = usePure();
        return () => props.readingTimeLocale?.words
            ? h("span", {
                class: "page-word-info",
                "aria-label": `${metaLocale.value.words}${isPure.value ? "" : "🔠"}`,
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            }, [
                h(WordIcon),
                h("span", props.readingTimeLocale.words),
                h("meta", {
                    property: "wordCount",
                    content: props.readingTime?.words,
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=WordInfo.js.map