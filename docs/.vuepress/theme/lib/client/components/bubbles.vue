<template>
    <canvas
        ref="canvasRef"
        style="position: absolute;top: 0;left: 0;"
    />
</template>
<script>
import { throttle, copyObj } from 'comutils'
import { onMounted, onUnmounted, computed, ref } from 'vue'
export default {
    name: 'bubblesEffect',
    props: {
        options: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    setup(props) {
        let canvasRef = ref(null)
        let requestAniId = ref(null)

        const opts = computed(() => {
            return copyObj({}, {
                color: 'rgba(225,225,225,0.5)',
                radius: 15,
                densety: 0.2,
                clearOffset: 0.3
            }, props.options)
        })
        onMounted(() => {
            let width, height, canvas, ctx, circles = [], settings = opts
            initContainer()

            function initContainer() {
                width = window.innerWidth
                height = window.innerHeight
                canvas = canvasRef.value
                canvas.width = width
                canvas.height = height
                ctx = canvas.getContext('2d')
                for (let x = 0; x < width * settings.value.densety; x++) {
                    let c = new Circle()
                    circles.push(c)
                }
                console.log(circles, 'circles');
                animate()
            }

            function animate() {
                cancelAnimationFrame(requestAniId)
                console.log('requestAniId1', requestAniId);
                ctx.clearRect(0, 0, width, height)
                for (let i in circles) {
                    circles[i].draw()
                }
                requestAniId = requestAnimationFrame(animate)
                console.log('requestAniId2', requestAniId);

            }
            const resize = (calback, delay = 200) => {
                window.addEventListener('resize', throttle(calback, delay));
            }
            function Circle() {
                let pos = {}
                let alpha = 0
                let scale = 0
                let speed = 0
                let color = 0
                init()

                function init() {
                    pos.x = Math.random() * width
                    pos.y = height + Math.random() * 100
                    alpha = 0.1 + Math.random() * settings.value.clearOffset
                    scale = 0.1 + Math.random() * 0.3
                    speed = Math.random()
                    color = settings.value.color === 'random' ? randomColor() : settings.value.color
                }

                this.draw = function () {
                    console.log('draw');
                    if (alpha <= 0) {
                        init();
                    }
                    pos.y -= speed
                    alpha -= 0.0005
                    ctx.beginPath()
                    ctx.arc(pos.x, pos.y, scale * settings.value.radius, 0, 2 * Math.PI, false)
                    ctx.fillStyle = color
                    ctx.fill()
                    ctx.closePath()
                };
            }

            resize(() => {
                ctx.clearRect(0, 0, width, height);
                width = window.innerWidth;
                height = window.innerHeight;
                canvas = null
                canvas = canvasRef.value
                canvas.width = width;
                canvas.height = height;
                ctx = canvas.getContext('2d')
            })
        })
        function randomColor() {
            let r = Math.floor(Math.random() * 255)
            let g = Math.floor(Math.random() * 255)
            let b = Math.floor(Math.random() * 255)
            let alpha = Math.random().toPrecision(2)
            let rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`
            return rgba
        }
        onUnmounted(() => {
            cancelAnimationFrame(requestAniId)
        })
        return { canvasRef }
    }

}
</script>