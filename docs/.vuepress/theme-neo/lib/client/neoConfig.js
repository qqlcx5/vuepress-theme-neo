import { defineClientConfig } from '@vuepress/client';
import { NeoIcon, NeoNavCard } from './components/global/neoIndex.js';
import { setupPageData } from './composables/neoIndex.js';
import NeoLayout from './layouts/NeoLayout.vue';
import NeoNotFound from './layouts/NeoNotFound.vue';
import './styles/neoIndex.scss';
export default defineClientConfig({
    enhance({ app, router }) {
        /* -------------------------------- neoTheme -------------------------------- */
        app.component('NeoIcon', NeoIcon);
        app.component('NeoNavCard', NeoNavCard);
        /* -------------------------------- neoTheme -------------------------------- */
    },
    setup() {
        /* -------------------------------- neoTheme -------------------------------- */
        setupPageData();
        /* -------------------------------- neoTheme -------------------------------- */
    },
    layouts: {
        Layout: NeoLayout,
        NotFound: NeoNotFound,
    },
});
