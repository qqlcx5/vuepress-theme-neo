import { isString } from "@vuepress/helper/client";
import { computed, defineComponent, h } from "vue";
import { usePageFrontmatter, useSiteLocaleData, withBase, } from "vuepress/client";
import AutoLink from "@theme-hope/components/AutoLink";
import { DropTransition } from "@theme-hope/components/transitions/index";
import "../styles/hero-info.scss";
export default defineComponent({
    name: "HeroInfo",
    slots: Object,
    setup(_props, { slots }) {
        const frontmatter = usePageFrontmatter();
        const siteLocale = useSiteLocaleData();
        const isFullScreen = computed(() => frontmatter.value.heroFullScreen ?? false);
        const info = computed(() => {
            const { heroText, tagline } = frontmatter.value;
            return {
                text: heroText ?? (siteLocale.value.title || "Hello"),
                tagline: tagline ?? siteLocale.value.description,
                isFullScreen: isFullScreen.value,
            };
        });
        const logo = computed(() => {
            const { heroText, heroImage, heroImageDark, heroAlt, heroImageStyle } = frontmatter.value;
            return {
                image: heroImage ? withBase(heroImage) : null,
                imageDark: heroImageDark ? withBase(heroImageDark) : null,
                imageStyle: heroImageStyle,
                alt: heroAlt ?? heroText ?? "",
                isFullScreen: isFullScreen.value,
            };
        });
        const bg = computed(() => {
            const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;
            return {
                image: isString(bgImage) ? withBase(bgImage) : null,
                imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
                bgStyle: bgImageStyle,
                isFullScreen: isFullScreen.value,
            };
        });
        const actions = computed(() => frontmatter.value.actions ?? []);
        return () => h("header", { class: ["vp-hero-info-wrapper", { fullscreen: isFullScreen.value }] }, [
            slots.bg?.(bg.value) ?? [
                bg.value.image
                    ? h("div", {
                        class: ["vp-hero-mask", { light: bg.value.imageDark }],
                        style: [
                            { "background-image": `url(${bg.value.image})` },
                            bg.value.bgStyle,
                        ],
                    })
                    : null,
                bg.value.imageDark
                    ? h("div", {
                        class: "vp-hero-mask dark",
                        style: [
                            {
                                "background-image": `url(${bg.value.imageDark})`,
                            },
                            bg.value.bgStyle,
                        ],
                    })
                    : null,
            ],
            h("div", { class: "vp-hero-info" }, [
                slots.logo?.(logo.value) ??
                    h(DropTransition, { appear: true, type: "group" }, () => {
                        const { image, imageDark, imageStyle, alt } = logo.value;
                        return [
                            image
                                ? h("img", {
                                    key: "light",
                                    class: ["vp-hero-image", { light: imageDark }],
                                    style: imageStyle,
                                    src: image,
                                    alt: alt,
                                })
                                : null,
                            imageDark
                                ? h("img", {
                                    key: "dark",
                                    class: "vp-hero-image dark",
                                    style: imageStyle,
                                    src: imageDark,
                                    alt: alt,
                                })
                                : null,
                        ];
                    }),
                slots.info?.(info.value) ??
                    h("div", { class: "vp-hero-infos" }, [
                        info.value.text
                            ? h(DropTransition, { appear: true, delay: 0.04 }, () => h("h1", { id: "main-title", class: "vp-hero-title" }, info.value.text))
                            : null,
                        info.value.tagline
                            ? h(DropTransition, { appear: true, delay: 0.08 }, () => h("p", {
                                id: "main-description",
                                innerHTML: info.value.tagline,
                            }))
                            : null,
                        actions.value.length
                            ? h(DropTransition, { appear: true, delay: 0.12 }, () => h("p", { class: "vp-hero-actions" }, actions.value.map((action) => h(AutoLink, {
                                class: [
                                    "vp-hero-action",
                                    action.type ?? "default",
                                    "no-external-link-icon",
                                ],
                                config: action,
                            }))))
                            : null,
                    ]),
            ]),
        ]);
    },
});
//# sourceMappingURL=HeroInfo.js.map