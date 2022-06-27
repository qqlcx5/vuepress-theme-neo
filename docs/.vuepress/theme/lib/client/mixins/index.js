// import { ref, computed } from "vue";

export default function () {
    const randomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min
    return {
        randomNumber
    }
}
