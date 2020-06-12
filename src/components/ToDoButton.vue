<template>
    <button :class="`button-${this.btnStyle}`" @click="$emit('click')">{{text}}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        btnStyle: {
            type: String,
            default: 'primary'
        }
    }
}

</script>

<style lang="scss">

</style>
