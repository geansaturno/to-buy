<template>
    <button :class="`button-${this.btnStyle}`" class="button" @click="$emit('click')">{{text}}</button>
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
@use '@/assets/scss/tokens.scss' as tokens;

.button {
    padding: 10px 30px;

    &-primary {
        @include tokens.lightBorderRadius;
        @include tokens.lightBorders;
        background-color: lighten(tokens.$color-primary, 10%);
        border-color: tokens.$color-primary;
    }
}
</style>
