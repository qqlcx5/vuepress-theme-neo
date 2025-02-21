import { defineComponent, h } from "vue";
import NavbarDropdown from "@theme-hope/modules/navbar/components/NavbarDropdown";
import { I18nIcon } from "@theme-hope/modules/navbar/components/icons/index";
import { useNavbarLanguageDropdown } from "@theme-hope/modules/navbar/composables/index";
export default defineComponent({
    name: "LanguageDropdown",
    setup() {
        const dropdown = useNavbarLanguageDropdown();
        return () => dropdown.value
            ? h("div", { class: "vp-nav-item" }, h(NavbarDropdown, { config: dropdown.value }, {
                title: () => h(I18nIcon, {
                    "aria-label": dropdown.value?.ariaLabel,
                    style: {
                        width: "1rem",
                        height: "1rem",
                        verticalAlign: "middle",
                    },
                }),
            }))
            : null;
    },
});
//# sourceMappingURL=LanguageDropdown.js.map