import { handleTyped } from './typed'
import { onMounted, onBeforeUnmount, ref } from 'vue'

export default {
    setup() {
        let timer = ref(null)
        let loop = ref(10)
        let options = TYPED_OPTIONS
        onMounted(() => {
            querySelector()
        })
        function querySelector() {
            timer = setTimeout(() => {
                try {
                    handleTyped(options)
                } catch (error) {
                    if (--loop >= 0) querySelector()
                    else console.error(error)
                }
            }, 200)
        }
        onBeforeUnmount(() => {
            clearTimeout(timer)
            timer = null
        })
    }
}
