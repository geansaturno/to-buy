<template>
    <div class="to-buy-item">
        <div class="to-buy-item-shoping">
            <to-buy-buttom :icon="'shopping-cart'" @click="$emit('shop')"/>
        </div>
        <div class="to-buy-item-name">{{name}}</div>
        <div class="to-buy-item-remove">
            <to-buy-buttom :icon="'x'" :btnStyle="'danger'" @click="$emit('remove')"/>
        </div>
    </div>
</template>

<script>
import ToBuyButtom from '@/components/ToBuyButton/ToBuyButton.vue'

export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    components: {
        ToBuyButtom
    }
}
</script>

<style lang="scss">
@use '@/assets/scss/tokens.scss' as tokens;

.to-buy-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: tokens.$lightBorder;

    &-name {
        font-family: 'Balsamiq Sans', cursive;
        font-size: 20px;
    }
}
</style>
