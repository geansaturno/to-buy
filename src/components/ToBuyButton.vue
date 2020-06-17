<template>
    <button :class="`button-${this.btnStyle} ${icon ? 'button-icon' : ''}`" class="button" @click="$emit('click')">
        {{text}}
        <i v-if="icon" :data-feather="icon" />
    </button>
</template>

<script>
import feather from 'feather-icons'

export default {
    props: {
        text: {
            type: String
        },
        btnStyle: {
            type: String,
            default: 'primary'
        },
        icon: {
            type: String
        }
    },
    mounted () {
        feather.replace()
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

    &-icon {
        padding: 10px 13px;
        border-radius: 50%;
    }

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
