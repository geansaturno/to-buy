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
    color: tokens.$light-color;
    @include tokens.lightBorderRadius;
    @include tokens.lightBorders;

    &-primary {
        background-color: lighten(tokens.$color-primary, 10%);
        border-color: tokens.$color-primary;
    }

    &-danger {
        background-color: lighten(tokens.$color-danger, 10%);
        border-color: darken(tokens.$color-danger, 10%);
    }
}
</style>
