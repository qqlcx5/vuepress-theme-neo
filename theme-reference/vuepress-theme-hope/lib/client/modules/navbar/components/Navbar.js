import { hasGlobalComponent } from "@vuepress/helper/client";
import noopComponent from "@vuepress/helper/noopComponent";
import { computed, defineComponent, h, ref, resolveComponent } from "vue";
import { useThemeLocaleData, useWindowSize, } from "@theme-hope/composables/index";
import LanguageDropdown from "@theme-hope/modules/navbar/components/LanguageDropdown";
import NavScreen from "@theme-hope/modules/navbar/components/NavScreen";
import NavbarBrand from "@theme-hope/modules/navbar/components/NavbarBrand";
import NavbarLinks from "@theme-hope/modules/navbar/components/NavbarLinks";
import RepoLink from "@theme-hope/modules/navbar/components/RepoLink";
import ToggleNavbarButton from "@theme-hope/modules/navbar/components/ToggleNavbarButton";
import ToggleSidebarButton from "@theme-hope/modules/navbar/components/ToggleSidebarButton";
import OutlookButton from "@theme-hope/modules/outlook/components/OutlookButton";
import "../styles/navbar.scss";
export default defineComponent({
    name: "NavBar",
    emits: ["toggleSidebar"],
    slots: Object,
    setup(_props, { emit, slots }) {
        const themeLocale = useThemeLocaleData();
        const { isMobile } = useWindowSize();
        const showScreen = ref(false);
        const autoHide = computed(() => {
            const { navbarAutoHide = "mobile" } = themeLocale.value;
            return (navbarAutoHide !== "none" &&
                (navbarAutoHide === "always" || isMobile.value));
        });
        const navbarLayout = computed(() => themeLocale.value.navbarLayout ??
            {
                start: ["Brand"],
                center: ["Links"],
                end: ["Language", "Repo", "Outlook", "Search"],
            });
        const navbarComponentMap = {
            Brand: NavbarBrand,
            Language: __VP_MULTI_LANGUAGES__ ? LanguageDropdown : noopComponent,
            Links: NavbarLinks,
            Repo: RepoLink,
            Outlook: OutlookButton,
            Search: hasGlobalComponent("SearchBox")
                ? resolveComponent("SearchBox")
                : noopComponent,
        };
        const getNavbarComponent = (component) => navbarComponentMap[component] ??
            (hasGlobalComponent(component)
                ? resolveComponent(component)
                : noopComponent);
        return () => [
            h("header", {
                key: "navbar",
                id: "navbar",
                class: ["vp-navbar", { "auto-hide": autoHide.value }],
                "vp-navbar": "",
            }, [
                h("div", { class: "vp-navbar-start" }, [
                    h(ToggleSidebarButton, {
                        onToggle: () => {
                            if (showScreen.value)
                                showScreen.value = false;
                            emit("toggleSidebar");
                        },
                    }),
                    navbarLayout.value.start?.map((item) => h(getNavbarComponent(item))),
                ]),
                h("div", { class: "vp-navbar-center" }, [
                    navbarLayout.value.center?.map((item) => h(getNavbarComponent(item))),
                ]),
                h("div", { class: "vp-navbar-end" }, [
                    navbarLayout.value.end?.map((item) => h(getNavbarComponent(item))),
                    h(ToggleNavbarButton, {
                        active: showScreen.value,
                        onToggle: () => {
                            showScreen.value = !showScreen.value;
                        },
                    }),
                ]),
            ]),
            h(NavScreen, {
                show: showScreen.value,
                onClose: () => {
                    showScreen.value = false;
                },
            }, {
                before: slots.screenTop,
                after: slots.screenBottom,
            }),
        ];
    },
});
//# sourceMappingURL=Navbar.js.map