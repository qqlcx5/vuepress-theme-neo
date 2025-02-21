import { defineComponent, h, nextTick, onMounted, onUnmounted, ref, watch, } from "vue";
import { DropTransition } from "@theme-hope/components/transitions/index";
import "./hitokoto-blog-hero.scss";
export default defineComponent({
    name: "HitokotoBlogHero",
    inheritAttrs: false,
    props: {
        /** Hero text */
        text: {
            type: String,
            required: true,
        },
        /** Hero image */
        image: { type: String, default: null },
        /** Hero image dark */
        imageDark: { type: String, default: null },
        /** Hero image alt */
        alt: { type: String, required: true },
        /** Hero image style */
        imageStyle: {
            type: [String, Object],
            default: null,
        },
    },
    setup(props) {
        const text = ref("");
        const display = ref("");
        const author = ref("");
        let isMounted = false;
        const getHitokoto = () => fetch("https://v1.hitokoto.cn")
            .then((res) => res.json())
            .then(({ from, hitokoto }) => {
            text.value = hitokoto;
            author.value = from;
        });
        onMounted(() => {
            isMounted = true;
            watch(text, () => {
                display.value = "";
                let index = 0;
                const renderNextWord = () => {
                    display.value += text.value[index];
                    index += 1;
                    return nextTick().then(() => {
                        if (index < text.value.length)
                            setTimeout(() => {
                                void renderNextWord();
                            }, 150);
                        else if (isMounted)
                            setTimeout(() => {
                                void getHitokoto();
                            }, 3000);
                    });
                };
                void renderNextWord();
            });
            void getHitokoto();
        });
        onUnmounted(() => {
            isMounted = false;
        });
        return () => [
            h(DropTransition, { appear: true, type: "group", delay: 0.04 }, () => [
                props.image
                    ? h("img", {
                        key: "light",
                        class: ["vp-blog-hero-image", { light: props.imageDark }],
                        style: props.imageStyle,
                        src: props.image,
                        alt: props.alt,
                    })
                    : null,
                props.imageDark
                    ? h("img", {
                        key: "dark",
                        class: "vp-blog-hero-image dark",
                        style: props.imageStyle,
                        src: props.imageDark,
                        alt: props.alt,
                    })
                    : null,
            ]),
            h(DropTransition, { appear: true, delay: 0.08 }, () => props.text
                ? h("h1", { class: "vp-blog-hero-title" }, props.text)
                : null),
            h("div", { class: "hitokoto" }, [
                h("p", { class: "hitokoto-text" }, h("span", display.value)),
                h("p", {
                    class: "hitokoto-author",
                    style: { opacity: display.value.length > 4 ? 1 : 0 },
                }, `——「${author.value}」`),
            ]),
        ];
    },
});
//# sourceMappingURL=HitokotoBlogHero.js.map