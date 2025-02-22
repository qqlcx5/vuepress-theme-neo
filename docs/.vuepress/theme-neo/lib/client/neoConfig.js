import { defineClientConfig } from 'vuepress/client';
import { Icon } from './components/global/index.js';
import { setupPageData } from './composables/neoIndex.js';
import NeoLayout from './layouts/NeoLayout.vue';
import NeoNotFound from './layouts/NeoNotFound.vue';
import './styles/neo-index.scss';
export default defineClientConfig({
    enhance({ app, router }) {
        app.component('NeoIcon', Icon);
        // app.component('NeoFontIcon', NeoFontIcon);
        // app.component('NeoNavCard', NeoNavCard);
    },
    setup() {
        setupPageData();
    },
    layouts: {
        Layout: NeoLayout,
        NotFound: NeoNotFound,
    },
});
