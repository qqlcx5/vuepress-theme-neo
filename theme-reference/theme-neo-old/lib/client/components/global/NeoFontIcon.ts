import { keys } from 'vuepress-shared/client';
import type { VNode } from 'vue';
import { computed, defineComponent, h } from 'vue';
import { useThemeLocaleData } from '../../composables/index.js';

import { getIconInfo } from '../../utils/neoFontIcon.js';

import "../../styles/neo-font-icon.scss";

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
    iconColor: { type: String, default: '' },
    /**
     * Icon size
     *
     * 图标大小
     */
    size: {
      type: [String, Number],
      default: '',
    },
    iconSize: {
      type: [String, Number],
      default: '',
    },
    rotate: {
      type: Number,
      default: 0,
    },
    iconRotate: {
      type: Number,
      default: 0,
    },
    spin: {
      type: [Boolean, Number],
      default: false,
    },
    iconSpin: {
      type: [Boolean, Number],
      default: false,
    },
  },

  setup(props) {
    const themeLocale = useThemeLocaleData();
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
      let { color, iconColor, size, iconSize, rotate, iconRotate, spin, iconSpin } = props;
      color = color || iconColor || '';
      size = size || iconSize || '';
      rotate = rotate || iconRotate || 0;
      spin = spin || iconSpin || false;

      if (color) styleObject['color'] = color;
      if (size) styleObject['font-size'] = Number.isNaN(Number(size)) ? <string>size : `${size}px`;
      if (rotate) styleObject['transform'] = `rotate(${rotate}deg)`;
      if (spin) {
        const spinSeconds = typeof spin === 'boolean' ? 2 : spin;
        styleObject['animation'] = `neo-spin ${spinSeconds}s linear infinite`;
      }
      return keys(styleObject).length ? styleObject : null;
    });

    return (): VNode | null =>
      props.icon
        ? h(isIconify ? 'iconify-icon' : 'span', {
            key: props.icon,
            class: classNames.value,
            style: style.value,
            ...(isIconify ? {
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
