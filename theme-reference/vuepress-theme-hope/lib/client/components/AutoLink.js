import { defineComponent, h, resolveComponent } from "vue";
import { AutoLink } from "vuepress/client";
export default defineComponent({
    name: "AutoLink",
    props: {
        /**
         * Autolink config
         */
        config: {
            type: Object,
            required: true,
        },
        /**
         * Whether icon should not fix width
         */
        iconSizing: {
            type: String,
            default: "both",
        },
    },
    emits: ["focusout"],
    slots: Object,
    setup(props, { emit, slots }) {
        return () => {
            const { icon } = props.config;
            return h(AutoLink, {
                ...props, // Class needs to be merged manually
                onFocusout: () => {
                    emit("focusout");
                },
            }, {
                default: slots.default,
                before: slots.before ??
                    (icon
                        ? () => h(resolveComponent("VPIcon"), {
                            icon,
                            sizing: props.iconSizing,
                        })
                        : null),
                after: slots.after,
            });
        };
    },
});
//# sourceMappingURL=AutoLink.js.map