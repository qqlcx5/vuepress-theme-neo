import { computed, defineComponent, h, nextTick, ref } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import PageTitle from "@theme-hope/components/PageTitle";
import { useThemeLocaleData } from "@theme-hope/composables/index";
import { LockIcon } from "./icons.js";
import "../styles/password-modal.scss";
export default defineComponent({
    name: "PasswordModal",
    props: {
        /**
         * Password hint
         */
        hint: {
            type: String,
            default: "",
        },
        /**
         * Whether is fullscreen
         *
         * 是否是全屏
         */
        full: Boolean,
        /**
         * Whether to show title
         *
         * 是否显示标题
         */
        showTitle: Boolean,
    },
    emits: ["verify"],
    setup(props, { emit }) {
        const frontmatter = usePageFrontmatter();
        const themeLocale = useThemeLocaleData();
        const password = ref("");
        const hasTried = ref(false);
        const remember = ref(false);
        const locale = computed(() => themeLocale.value.encryptLocales);
        let hintHandler = null;
        const verify = () => {
            // Clear previous handler
            if (hintHandler)
                clearTimeout(hintHandler);
            hasTried.value = false;
            emit("verify", password.value, remember.value);
            void nextTick().then(() => {
                hasTried.value = true;
                hintHandler = setTimeout(() => {
                    hasTried.value = false;
                }, 1000);
            });
        };
        return () => h("div", {
            class: [
                "vp-decrypt-layer",
                { expand: props.full || frontmatter.value.home },
            ],
        }, [
            props.showTitle ? h(PageTitle) : null,
            h("div", { class: "vp-decrypt-modal" }, [
                h("div", { class: ["vp-decrypt-hint", { tried: hasTried.value }] }, hasTried.value
                    ? locale.value.errorHint
                    : h(LockIcon, { "aria-label": locale.value.iconLabel })),
                props.hint
                    ? h("div", { class: "vp-decrypt-hint" }, props.hint)
                    : null,
                h("div", { class: "vp-decrypt-input" }, [
                    h("input", {
                        type: "password",
                        value: password.value,
                        placeholder: locale.value.placeholder,
                        onInput: ({ target }) => {
                            password.value = target.value;
                        },
                        onKeydown: ({ key }) => {
                            if (key === "Enter")
                                verify();
                        },
                    }),
                ]),
                h("div", { class: "vp-remember-password" }, [
                    h("input", {
                        id: "remember-password",
                        type: "checkbox",
                        value: remember.value,
                        onChange: () => {
                            remember.value = !remember.value;
                        },
                    }),
                    h("label", { for: "remember-password" }, locale.value.remember),
                ]),
                h("button", {
                    type: "button",
                    class: "vp-decrypt-submit",
                    onClick: () => {
                        verify();
                    },
                }, "OK"),
            ]),
        ]);
    },
});
//# sourceMappingURL=PasswordModal.js.map