import { isString } from "@vuepress/helper/client";
import { computed, defineComponent, h, shallowRef } from "vue";
import { usePageFrontmatter, useSiteLocaleData, withBase, } from "vuepress/client";
import { DropTransition } from "@theme-hope/components/transitions/index";
import { SlideDownIcon } from "@theme-hope/modules/blog/components/icons";
import "../styles/blog-hero.scss";
const DEFAULT_HERO = "//theme-hope-assets.vuejs.press/hero/default.jpg";
export default defineComponent({
    name: "BlogHero",
    slots: Object,
    setup(_props, { slots }) {
        const frontmatter = usePageFrontmatter();
        const siteLocale = useSiteLocaleData();
        const hero = shallowRef();
        const isFullScreen = computed(() => frontmatter.value.heroFullScreen ?? false);
        const info = computed(() => {
            const { heroText, heroImage, heroImageDark, heroAlt, heroImageStyle, tagline, } = frontmatter.value;
            return {
                text: heroText ?? (siteLocale.value.title || "Hello"),
                tagline: tagline ?? "",
                image: heroImage ? withBase(heroImage) : null,
                imageDark: heroImageDark ? withBase(heroImageDark) : null,
                alt: heroAlt ?? heroText ?? "",
                imageStyle: heroImageStyle,
                isFullScreen: isFullScreen.value,
            };
        });
        const bg = computed(() => {
            const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;
            return {
                image: isString(bgImage)
                    ? withBase(bgImage)
                    : bgImage === false
                        ? null
                        : DEFAULT_HERO,
                imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
                bgStyle: bgImageStyle,
                isFullScreen: isFullScreen.value,
            };
        });
        return () => frontmatter.value.hero === false
            ? null
            : h("div", {
                ref: hero,
                class: [
                    "vp-blog-hero",
                    {
                        fullscreen: isFullScreen.value,
                        "no-bg": !bg.value.image,
                    },
                ],
            }, [
                slots.bg?.(bg.value) ?? [
                    bg.value.image
                        ? h("div", {
                            class: ["vp-blog-mask", { light: bg.value.imageDark }],
                            style: [
                                {
                                    background: `url(${bg.value.image}) center/cover no-repeat`,
                                },
                                bg.value.bgStyle,
                            ],
                        })
                        : null,
                    bg.value.imageDark
                        ? h("div", {
                            class: "vp-blog-mask dark",
                            style: [
                                {
                                    background: `url(${bg.value.imageDark}) center/cover no-repeat`,
                                },
                                bg.value.bgStyle,
                            ],
                        })
                        : null,
                ],
                slots.info?.(info.value) ?? [
                    h(DropTransition, { appear: true, type: "group", delay: 0.04 }, () => {
                        const { image, imageDark, imageStyle, alt } = info.value;
                        return [
                            image
                                ? h("img", {
                                    key: "light",
                                    class: ["vp-blog-hero-image", { light: imageDark }],
                                    style: imageStyle,
                                    src: image,
                                    alt: alt,
                                })
                                : null,
                            imageDark
                                ? h("img", {
                                    key: "dark",
                                    class: "vp-blog-hero-image dark",
                                    style: imageStyle,
                                    src: imageDark,
                                    alt: alt,
                                })
                                : null,
                        ];
                    }),
                    h(DropTransition, { appear: true, delay: 0.08 }, () => info.value.text
                        ? h("h1", { class: "vp-blog-hero-title" }, info.value.text)
                        : null),
                    h(DropTransition, { appear: true, delay: 0.12 }, () => info.value.tagline
                        ? h("p", {
                            class: "vp-blog-hero-description",
                            innerHTML: info.value.tagline,
                        })
                        : null),
                ],
                info.value.isFullScreen
                    ? h("button", {
                        type: "button",
                        class: "slide-down-button",
                        onClick: () => {
                            window.scrollTo({
                                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                top: hero.value.clientHeight,
                                behavior: "smooth",
                            });
                        },
                    }, [h(SlideDownIcon), h(SlideDownIcon)])
                    : null,
            ]);
    },
});
//# sourceMappingURL=BlogHero.js.map