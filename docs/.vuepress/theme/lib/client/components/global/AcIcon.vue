<template>
    <i
        class="ac-icon acme"
        :class="[name]"
        :style="[iconStyle_]"
    />
</template>
<script>
import { defineComponent, computed } from 'vue'
export default defineComponent({
    name: 'AcIcon',
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
            return String(props.rotate) === 'false' ? false : props.rotate
        })
        function addUnit(unit) {
            // 如果没有单位，默认为px
            return parseInt(unit) === unit ? unit += 'px' : unit
        }
        const iconStyle_ = computed(() => {
            const fontSize = addUnit(props.size)
            console.log(fontSize, 'fontSize');
            // 组件样式
            const styleObj = { fontSize }
            String(props.color) !== 'false' && (styleObj.color = props.color)
            // 组件动画
            rotate_.value && (styleObj.transform = isNaN(props.rotate) ? `rotate(${props.rotate})` : `rotate(${props.rotate}deg)`)
            props.spin && (styleObj.animation = `ac-spin ${props.spinSpeed}s linear infinite`)
            return styleObj
        })
        return {
            iconStyle_,
            handleClick
        }
    }
})
</script>
<style lang="scss">
.ac-icon {
    position: relative;
    display: inline-block;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}

// 旋转动画
@keyframes ac-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>