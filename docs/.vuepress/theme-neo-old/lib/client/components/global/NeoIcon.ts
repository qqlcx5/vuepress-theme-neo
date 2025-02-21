import { isLinkHttp } from '@vuepress/shared';
import type { FunctionalComponent } from 'vue';
import { h, resolveComponent } from 'vue';
import { withBase } from 'vuepress/client';
const isString = (val: unknown): val is string => typeof val === 'string';
const startsWith = (str: unknown, prefix: string): boolean => isString(str) && str.startsWith(prefix);
const isAbsoluteUrl = (test: unknown): boolean => startsWith(test, '/');

export interface NeoIconProps {
  icon?: string | undefined;
  color?: string | undefined;
  iconColor?: string | undefined;
  size?: string | number | undefined;
  iconSize?: string | number | undefined;
  rotate?: number | undefined;
  iconRotate?: number | undefined;
  spin?: boolean | number | undefined;
  iconSpin?: boolean | number | undefined;
}

const NeoIcon: FunctionalComponent<NeoIconProps> = props => {
  let { icon = '', color, iconColor, size, iconSize, rotate, iconRotate, spin, iconSpin } = props;
  color = color || iconColor || '';
  size = size || iconSize || '';
  rotate = rotate || iconRotate || 0;
  spin = spin || iconSpin || false;
  const style: Record<string, string> = {};

  if (color) style['color'] = color;
  if (size) style['height'] = Number.isNaN(Number(size)) ? <string>size : `${size}px`;
  if (rotate) style['transform'] = `rotate(${rotate}deg)`;
  if (spin) {
    const spinSeconds = typeof spin === 'boolean' ? 2 : spin;
    style['animation'] = `neo-spin ${spinSeconds}s linear infinite`;
  }
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
    : h(resolveComponent('NeoFontIcon'), props);
};

NeoIcon.displayName = 'NeoIcon';

export default NeoIcon;
