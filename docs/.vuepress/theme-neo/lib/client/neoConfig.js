import { defineClientConfig } from 'vuepress/client';
// import { NeoIcon, NeoFontIcon, NeoNavCard } from './components/global/neoIndex.js';
import { setupPageData } from './composables/neoIndex.js';
import NeoLayout from './layouts/NeoLayout.vue';
import NeoNotFound from './layouts/NeoNotFound.vue';
import './styles/neo-index.scss';
export default defineClientConfig({
    enhance({ app, router }) {
        // app.component('NeoIcon', NeoIcon);
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
