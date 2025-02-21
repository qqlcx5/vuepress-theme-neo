import type { ComputedRef } from 'vue';
import type { DefaultThemePageData } from '../../shared/index.js';
export declare const useContributors: () => ComputedRef<Exclude<DefaultThemePageData["git"], undefined>["contributors"] | null>;
