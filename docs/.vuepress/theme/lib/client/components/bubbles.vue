<template>
    <canvas
        ref="canvasRef"
        style="position: absolute;top: 0;left: 0;"
    />
</template>
<script>
import { onMounted, onUnmounted, computed, ref } from 'vue'
export default {
    name: 'bubblesEffect',
    props: {
        options: {
            type: Object,
            default: () => {
                return {}
            }
        },
        selectRef: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        let canvasRef = ref(null)
        let frameTimer = ref(null)
        let width = 0, height = 0, canvas, ctx, bubbles = []
        let opts = computed(() => {
            return Object.assign({}, {
                color: 'rgba(225,225,225,0.5)',
                densety: 0.1, // 密度
                clearOffset: 0.2
            }, props.options)
        })
        onMounted(() => {
            handleInitCanvas()
        })
        function handleInitCanvas() {
            canvas = canvasRef.value
            resizeRef()
            ctx = canvas.getContext('2d')
            //建立泡泡
            var num = width * opts.value.densety;//气泡数量
            for (let x = 0; x < num; x++) {
                var c = new Bubble();
                bubbles.push(c);
            }
            animate();
        }
        function animate() {
            cancelAnimationFrame(frameTimer)
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < bubbles.length; i++) {
                bubbles[i].draw();
            }
            frameTimer = requestAnimationFrame(animate);
        }
        // const debounce = (function () {
        //     const timer = {}
        //     return function (func, wait = 500) {
        //         console.log('onresize', func);
        //         const context = this // 注意 this 指向
        //         const args = arguments // arguments中存着e
        //         const randomText = String(args[0]).replace(/[\r\n]|\s+/g, '')
        //         const name = 'debounce' + randomText
        //         if (timer[name]) clearTimeout(timer[name])
        //         timer[name] = setTimeout(() => {
        //             console.log(func);
        //             func && func.apply(context, args)
        //         }, wait)
        //     }
        // })()

        // const resizeRef = (calback, delay) => {
        //     window.addEventListener('resize', () => {
        //         console.log('resizeRef');
        //         debounce(calback(), delay)
        //     });
        // }
        // resizeRef(() => {
        //     console.log('resizeRef');
        //     const target = props.selectRef && document.querySelector(props.selectRef)
        //     width = target?.offsetWidth ?? (window.innerWidth || 0)
        //     height = target?.offsetHeight ?? (window.innerHeight || 0)
        //     canvas.width = width;
        //     canvas.height = height;
        // })
        function resizeRef() {
            console.log('resizeRef');
            const target = props.selectRef && document.querySelector(props.selectRef)
            width = target?.offsetWidth ?? (window.innerWidth || 0)
            height = target?.offsetHeight ?? (window.innerHeight || 0)
            canvas.width = width;
            canvas.height = height;
        }

        function Bubble() {
            var _this = this;
            (function () {
                _this.pos = {};
                init();
            })();
            function init() {
                _this.pos.x = Math.random() * width;
                _this.pos.y = height + Math.random() * 100;
                _this.alpha = 0.1 + Math.random() * 0.3;//气泡透明度
                _this.alpha_change = 0.0002 + Math.random() * 0.0005;//气泡透明度变化速度
                _this.scale = 0.2 + Math.random() * 0.5;//气泡大小
                _this.scale_change = Math.random() * 0.002;//气泡大小变化速度
                _this.speed = 0.1 + Math.random() * 0.4;//气泡上升速度
            }
            //气泡
            this.draw = function () {
                if (_this.alpha <= 0) {
                    init();
                }
                _this.pos.y -= _this.speed;
                _this.alpha -= _this.alpha_change;
                _this.scale += _this.scale_change;
                ctx.beginPath();
                ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
                ctx.fill();
            };
        }
        onUnmounted(() => {
            cancelAnimationFrame(frameTimer)
        })
        return { canvasRef }
    }

}
</script>