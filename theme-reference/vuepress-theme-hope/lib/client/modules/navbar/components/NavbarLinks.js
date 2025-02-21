import { defineComponent, h } from "vue";
import AutoLink from "@theme-hope/components/AutoLink";
import NavbarDropdown from "@theme-hope/modules/navbar/components/NavbarDropdown";
import { useNavbarItems } from "@theme-hope/modules/navbar/composables/index";
import "../styles/navbar-links.scss";
export default defineComponent({
    name: "NavbarLinks",
    setup() {
        const navbarConfig = useNavbarItems();
        return () => navbarConfig.value.length
            ? h("nav", { class: "vp-nav-links" }, navbarConfig.value.map((config) => h("div", { class: "vp-nav-item hide-in-mobile" }, "children" in config
                ? h(NavbarDropdown, { config })
                : h(AutoLink, { config, iconSizing: "height" }))))
            : null;
    },
});
//# sourceMappingURL=NavbarLinks.js.map