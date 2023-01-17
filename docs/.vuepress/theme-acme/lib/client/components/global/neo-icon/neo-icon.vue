<template>
    <svg
        v-if="useSvg_ && name"
        class="neo-colour"
        aria-hidden="true"
        :style="[iconStyle_]"
    >
        <use :xlink:href="`#${name}`"></use>
    </svg>
    <i
        v-else-if="name"
        class="neo neo-icon"
        :class="[name]"
        :style="[iconStyle_]"
    />
</template>
<script>
import { defineComponent, computed } from 'vue'
export default defineComponent({
    name: 'neoIcon',
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
        useSvg: {
            type: [String, Boolean],
            default: true
        },
        // icon 大小
        size: {
            type: [Number, String],
            default: 16
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
            default: 2
        },
        customStyle: {
            type: [Object, Boolean],
            default: () => {
                return {}
            }
        },

    },
    emits: ['click'],
    setup(props, { emit }) {
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
        const isNumeric = (val) => typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);

        function addUnit(value, unit = 'px') {
            return isNumeric(value) ? value + unit : String(value);
        }
        const iconStyle_ = computed(() => {
            const fontSize = addUnit(props.size)
            const styleObj = { fontSize, width: fontSize, height: fontSize }
            String(props.color) !== 'false' && (styleObj.color = props.color)
            // 组件动画
            rotate_.value && (styleObj.transform = isNaN(props.rotate) ? `rotate(${props.rotate})` : `rotate(${props.rotate}deg)`)
            props.spin && (styleObj.animation = `neo-spin ${props.spinSpeed}s linear infinite`)
            return Object.assign(styleObj, props.customStyle)
        })
        return {
            useSvg_,
            iconStyle_,
            handleClick
        }
    }
})
</script>
<style>
/* 旋转动画 */
@keyframes neo-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
<style lang="scss" scoped>
.neo-icon {
    position: relative;
    display: inline-block;
    font-size: inherit;
    text-rendering: auto;
    vertical-align: -0.08em;
    -webkit-font-smoothing: antialiased;
}
.neo-colour {
    width: 18px;
    height: 18px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}
</style>