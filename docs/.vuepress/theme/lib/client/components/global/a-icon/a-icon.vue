<template>
    <svg v-if="useSvg_" class="acme-colour" aria-hidden="true" :style="[iconStyle_]">
        <use :xlink:href="`#${name}`"></use>
    </svg>
    <i  v-else
        class="a-icon acme"
        :class="[name]"
        :style="[iconStyle_]"
    />
</template>
<script>
import { defineComponent, computed } from 'vue'
import './colour-iconfont/iconfont.js'

export default defineComponent({
    name: 'AIcon',
    props: {
        name: {
            type: String,
            default: ''
        },
        // 颜色
        color: {
            type: [String, Boolean],
            default: 'inherit'
        },
        // 彩色展示
        useSvg: {
            type: [String, Boolean],
            default: false
        },
        // icon 大小
        size: {
            type: [Number, String],
            default: 20
        },
        // 偏转角度
        rotate: {
            type: [String, Boolean],
            default: false
        },
        // 旋转
        spin: {
            type: Boolean,
            default: false
        },
        spinSpeed: {
            type: [Number, String],
            default: 1.5
        }

    },
    emits: ['click'],
    setup(props, { emit }) {
        // 通用的事件句柄
        const handleClick = (e) => {
            emit('click', e, false)
        }
        // 偏转角度
        const rotate_ = computed(() => {
            return String(props.rotate) !== 'false' && props.rotate
        })
        const useSvg_ = computed(() => {
            return String(props.useSvg) !== 'false'
        })
        function addUnit(unit) {
            // 如果没有单位，默认为px
            return parseInt(unit) === unit ? unit += 'px' : unit
        }
        const iconStyle_ = computed(() => {
            const fontSize = addUnit(props.size)
            // 组件样式
            const styleObj = { fontSize, width: fontSize, height: fontSize }
            String(props.color) !== 'false' && (styleObj.color = props.color)
            // 组件动画
            rotate_.value && (styleObj.transform = isNaN(props.rotate) ? `rotate(${props.rotate})` : `rotate(${props.rotate}deg)`)
            props.spin && (styleObj.animation = `a-spin ${props.spinSpeed}s linear infinite`)
            return styleObj
        })
        return {
            useSvg_,
            iconStyle_,
            handleClick
        }
    }
})
</script>
<style lang="scss">
@import '//at.alicdn.com/t/font_1678482_4tbhmh589x.css'; // vdoing iconfont字体
@import './iconfont/iconfont.css';

.a-icon {
    position: relative;
    display: inline-block;
    font-size: inherit;
    text-rendering: auto;
    // vertical-align: -0.15em;
    -webkit-font-smoothing: antialiased;
}
.acme-colour {
    width: 20px;
    height: 20px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

// 旋转动画
@keyframes a-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>