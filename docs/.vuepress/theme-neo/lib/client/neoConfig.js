import { defineClientConfig } from '@vuepress/client';
import { h } from 'vue';
import { Badge, CodeGroup, CodeGroupItem, NeoIcon, NeoNavCard } from './components/global/neoIndex.js';
import { setupDarkMode, setupSidebarItems, useScrollPromise, setupPageData } from './composables/neoIndex.js';
import NeoLayout from './layouts/NeoLayout.vue';
import NeoNotFound from './layouts/NeoNotFound.vue';
import './styles/neoIndex.scss';
export default defineClientConfig({
    enhance({ app, router }) {
        /* -------------------------------- neoTheme -------------------------------- */
        app.component('NeoIcon', NeoIcon)
        app.component('NeoNavCard', NeoNavCard)
        /* -------------------------------- neoTheme -------------------------------- */
        app.component('Badge', Badge);
        app.component('CodeGroup', CodeGroup);
        app.component('CodeGroupItem', CodeGroupItem);
        // compat with @vuepress/plugin-external-link-icon
        app.component('AutoLinkExternalIcon', () => {
            const ExternalLinkIcon = app.component('ExternalLinkIcon');
            if (ExternalLinkIcon) {
                return h(ExternalLinkIcon);
            }
            return null;
        });
        // compat with @vuepress/plugin-docsearch and @vuepress/plugin-search
        app.component('NavbarSearch', () => {
            const SearchComponent = app.component('Docsearch') || app.component('SearchBox');
            if (SearchComponent) {
                return h(SearchComponent);
            }
            return null;
        });
        // handle scrollBehavior with transition
        const scrollBehavior = router.options.scrollBehavior;
        router.options.scrollBehavior = async (...args) => {
            await useScrollPromise().wait();
            return scrollBehavior(...args);
        };
    },
    setup() {
        setupDarkMode();
        setupSidebarItems();
        /* -------------------------------- neoTheme -------------------------------- */
        setupPageData();
        /* -------------------------------- neoTheme -------------------------------- */
    },
    layouts: {
        Layout: NeoLayout,
        NotFound: NeoNotFound,
    },
});
