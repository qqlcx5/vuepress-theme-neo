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
        let requestAniId = ref(null)

        onMounted(() => {
            let width, height, canvas, ctx, bubbles = []
            handleInitCanvas()

            function handleInitCanvas() {
                canvas = canvasRef.value
                resizeRef()
                ctx = canvas.getContext('2d')
                //建立泡泡
                var num = width * 0.06;//气泡数量
                for (let x = 0; x < num; x++) {
                    var c = new Bubble();
                    bubbles.push(c);
                }
                animate();
            }
            function animate() {
                cancelAnimationFrame(requestAniId)
                ctx.clearRect(0, 0, width, height);
                for (let i = 0; i < bubbles.length; i++) {
                    bubbles[i].draw();
                }
                requestAniId = requestAnimationFrame(animate);
            }
            function resizeRef() {
                width = window.innerWidth
                height = window.innerHeight
                canvas.width = width;
                canvas.height = height;
                console.log('resizeRef', width, height);
            }

            window.onresize = () => {
                resizeRef();
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

        })
        onUnmounted(() => {
            cancelAnimationFrame(requestAniId)
        })
        return { canvasRef }
    }

}
</script>