<template>
    <i
        class="acme"
        :class="[`icon-${name}`]"
    >
    </i>
</template>
<script>
export default {
    props: {
        name: String,
        default: ''
    },
    setup(props) {
        return {}
    }
}
</script>
<style lang="scss">
</style>