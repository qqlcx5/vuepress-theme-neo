import { withBase } from '@vuepress/client';
import { isLinkHttp } from '@vuepress/shared';
import type { FunctionalComponent } from 'vue';
import { h, resolveComponent } from 'vue';

const isString = (val: unknown): val is string => typeof val === 'string';
const startsWith = (str: unknown, prefix: string): boolean => isString(str) && str.startsWith(prefix);
const isAbsoluteUrl = (test: unknown): boolean => startsWith(test, '/');

export interface NeoIconProps {
  icon?: string | undefined;
  color?: string | undefined;
  size?: string | number | undefined;
  rotate?: number | undefined; // 新增旋转角度属性
}

const NeoIcon: FunctionalComponent<NeoIconProps> = props => {
  const { icon = '', color, size, rotate } = props;
  const style: Record<string, string> = {};

  if (color) style['color'] = color;
  if (size) style['height'] = Number.isNaN(Number(size)) ? <string>size : `${size}px`;
  if (rotate) style['transform'] = `rotate(${rotate}deg)`; // 应用旋转样式

  return isLinkHttp(icon)
    ? h('img', { class: 'icon', src: icon, 'no-view': '', style })
    : isAbsoluteUrl(icon)
    ? h('img', {
        class: 'icon',
        src: withBase(icon),
        'aria-hidden': '',
        'no-view': '',
        style,
      })
    : h(resolveComponent("NeoFontIcon"), props);
};

NeoIcon.displayName = 'NeoIcon';

export default NeoIcon;
