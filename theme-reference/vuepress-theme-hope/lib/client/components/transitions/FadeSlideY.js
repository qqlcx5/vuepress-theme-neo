import { Transition, h } from "vue";
import { scrollPromise } from "@theme-hope/utils/index";
import "../../styles/fade-slide-y.scss";
export const FadeSlideY = (_props, { slots }) => h(Transition, {
    name: "fade-slide-y",
    mode: "out-in",
    // Handle scrollBehavior with transition
    onBeforeEnter: scrollPromise.resolve,
    onBeforeLeave: scrollPromise.pending,
}, () => slots.default());
FadeSlideY.displayName = "FadeSlideY";
//# sourceMappingURL=FadeSlideY.js.map