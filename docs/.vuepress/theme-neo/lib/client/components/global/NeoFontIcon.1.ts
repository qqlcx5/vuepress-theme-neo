import type { VNode } from 'vue';
import { computed, defineComponent, h } from 'vue';
import { keys } from 'vuepress-shared/client';
import { useThemeLocaleData } from '../../composables/index.js'
import { getIconInfo } from '../../utils/neoFontIcon.js';
declare const FONT_ICON_TYPE: string;
declare const FONT_ICON_PREFIX: string;
export default defineComponent({
  name: 'FontIcon',

  props: {
    /**
     * Icon class
     *
     * 图标类名
     */
    icon: { type: String, default: '' },
    /**
     * Icon color
     *
     * 图标颜色
     */
    color: { type: String, default: '' },

    /**
     * Icon size
     *
     * 图标大小
     */
    size: {
      type: [String, Number],
      default: '',
    },
  },

  setup(props) {
    const themeLocale = useThemeLocaleData()
    console.log(`🚀 - themeLocaleData:`, themeLocale)
    const { assets, prefix } = themeLocale.value?.fontIcon || {};
    const { type, prefix: iconPrefix } = getIconInfo(assets, prefix);
    const FONT_ICON_TYPE = type;
    const FONT_ICON_PREFIX = iconPrefix;
    const isIconify = FONT_ICON_TYPE === 'iconify';
    const isFontAwesome = FONT_ICON_TYPE === 'fontawesome';
    const classNames = computed(() => {
      const classList = ['font-icon icon'];
      const iconClass = `${FONT_ICON_PREFIX}${props.icon}`;

      if (isFontAwesome) classList.push('fa-fw fa-sm');

      if (isFontAwesome) classList.push(props.icon.includes(' ') ? props.icon : iconClass);
      else if (!isIconify) classList.push(iconClass);

      return classList;
    });

    const style = computed(() => {
      const styleObject: Record<string, string> = {};

      if (props.color) styleObject['color'] = props.color;

      if (props.size) styleObject['font-size'] = Number.isNaN(Number(props.size)) ? <string>props.size : `${props.size}px`;

      return keys(styleObject).length ? styleObject : null;
    });

    return (): VNode | null =>
      props.icon
        ? h(isIconify ? 'iconify-icon' : 'span', {
            key: props.icon,
            class: classNames.value,
            style: style.value,
            ...(isIconify
              ? {
                  mode: 'style',
                  inline: '',
                  icon: `${FONT_ICON_PREFIX}${props.icon}`,
                  width: '1em',
                  height: '1em',
                }
              : {}),
          })
        : null;
  },
});
