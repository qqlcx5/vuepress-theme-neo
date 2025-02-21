import { Transition, TransitionGroup, defineComponent, h } from "vue";
export const DropTransition = defineComponent({
    name: "DropTransition",
    props: {
        /**
         * @description Transition type
         */
        type: {
            type: String,
            default: "single",
        },
        /**
         * @description Transition delay
         */
        delay: { type: Number, default: 0 },
        /**
         * @description Transition duration
         */
        duration: { type: Number, default: 0.25 },
        /**
         * @description appear
         */
        appear: Boolean,
    },
    slots: Object,
    setup(props, { slots }) {
        const setStyle = (el) => {
            el.style.transition =
                `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
            el.style.transform = "translateY(-20px)";
            el.style.opacity = "0";
        };
        const unsetStyle = (el) => {
            el.style.transform = "translateY(0)";
            el.style.opacity = "1";
        };
        return () => {
            const attrs = {
                name: "drop",
                appear: props.appear,
                onAppear: setStyle,
                onAfterAppear: unsetStyle,
                onEnter: setStyle,
                onAfterEnter: unsetStyle,
                onBeforeLeave: setStyle,
            };
            const children = () => slots.default();
            return props.type === "group"
                ? h(TransitionGroup, attrs, children)
                : h(Transition, attrs, children);
        };
    },
});
//# sourceMappingURL=DropTransition.js.map