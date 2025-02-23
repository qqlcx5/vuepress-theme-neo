const THEMEPLUGINS = {
    icon: true
}
/**
 * Assign default options
 */
export const extraThemePluginsOptions = localeOptions => {
    const themePlugins = localeOptions.themePlugins
    localeOptions.themePlugins = themePlugins ? Object.assign(THEMEPLUGINS, blogLocales) : THEMEPLUGINS
}
