import { isLinkHttp } from '@vuepress/shared';
import type { FunctionalComponent } from 'vue';
import { h, resolveComponent } from 'vue';
import { withBase } from '@vuepress/client';
const isString = (val: unknown): val is string => typeof val === 'string';
const startsWith = (str: unknown, prefix: string): boolean => isString(str) && str.startsWith(prefix);
const isAbsoluteUrl = (test: unknown): boolean => startsWith(test, '/');

export interface NeoIconProps {
  icon?: string | undefined;
  color?: string | undefined;
  size?: string | number | undefined;
  rotate?: number | undefined;
  animateRotate?: boolean | number | undefined;
}

const NeoIcon: FunctionalComponent<NeoIconProps> = props => {
  const { icon = '', color, size, rotate, animateRotate } = props;
  rotate && console.log(`🚀 - rotate:`, rotate);
  const style: Record<string, string> = {};

  if (color) style['color'] = color;
  if (size) style['height'] = Number.isNaN(Number(size)) ? <string>size : `${size}px`;
  if (rotate) style['transform'] = `rotate(${rotate}deg)`;
  if (animateRotate) {
    const animateSeconds = typeof props.animateRotate === 'boolean' ? 2 : props.animateRotate;
    style['animation'] = `neo-spin ${animateSeconds}s linear infinite`;
  }
  // 更新props，特别是style属性，以确保rotate值被传递到FontIcon组件
  const updatedProps = { ...props, style };
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
    : h(resolveComponent('NeoFontIcon'), updatedProps);
};

NeoIcon.displayName = 'NeoIcon';

export default NeoIcon;
