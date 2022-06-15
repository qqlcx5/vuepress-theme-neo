import { handleTyped } from './typed'
import { onMounted, ref } from 'vue'

export default {
    setup() {
        let timer = ref(null)
        let loop = ref(10)
        let options = TYPED_OPTIONS
        onMounted(() => {
            querySelector()
            function querySelector() {
                timer = setTimeout(() => {
                    try {
                        handleTyped(options)
                    } catch (error) {
                        if (--loop >= 0) this.querySelector()
                        else console.error(error)
                    }
                },500)
            }
        })
        // beforeUnmount(() => {
        //     clearTimeout(timer)
        //     timer = null
        // })
    }
}
