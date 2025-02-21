
import { useThemeData, useThemeLocaleData } from './useThemeData.js'
import { computed } from 'vue'
export const useThemeBlogOptions = () => {
    const themeData = useThemeData()
    const themeLocale = useThemeLocaleData()

    return computed(() => ({
        ...themeData.value.blogOptions,
        ...themeLocale.value.blogOptions
    }))
}