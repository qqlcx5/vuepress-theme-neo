<template>
    <div class="max-width">
        <PasswordInput v-model="password" />
    </div>
</template>

<script>
import PasswordInput from './CmpPasswordInput.vue'

export default {
    name: 'PasswordInputDemo',
    components: {
        PasswordInput
    }
}
</script>
<style lang="scss" scoped>
.max-width {
    max-width: 360px;
    margin: 20px auto 0;
}
</style>
