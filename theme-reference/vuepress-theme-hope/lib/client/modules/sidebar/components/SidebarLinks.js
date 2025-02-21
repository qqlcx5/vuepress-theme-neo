import { defineComponent, h, ref, watch } from "vue";
import { useRoute } from "vuepress/client";
import SidebarChild from "@theme-hope/modules/sidebar/components/SidebarChild";
import SidebarGroup from "@theme-hope/modules/sidebar/components/SidebarGroup";
import { isActiveSidebarItem } from "@theme-hope/modules/sidebar/utils/index";
import "../styles/sidebar-links.scss";
export default defineComponent({
    name: "SidebarLinks",
    props: {
        /**
         * Sidebar links config
         *
         * 侧边栏链接配置
         */
        config: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const route = useRoute();
        const openGroupIndex = ref(-1);
        const toggleGroup = (index) => {
            openGroupIndex.value = index === openGroupIndex.value ? -1 : index;
        };
        watch(() => route.path, () => {
            const index = props.config.findIndex((item) => isActiveSidebarItem(route, item));
            openGroupIndex.value = index;
        }, { immediate: true, flush: "post" });
        return () => h("ul", { class: "vp-sidebar-links" }, props.config.map((config, index) => h("li", "children" in config
            ? h(SidebarGroup, {
                config,
                open: index === openGroupIndex.value,
                onToggle: () => {
                    toggleGroup(index);
                },
            })
            : h(SidebarChild, { config }))));
    },
});
//# sourceMappingURL=SidebarLinks.js.map