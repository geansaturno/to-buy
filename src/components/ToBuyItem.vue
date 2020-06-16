<template>
    <div class="to-buy-item">
        <div class="to-buy-item-shoping">
            <to-buy-buttom :text="'OK'" @click="$emit('shop')"/>
        </div>

        <div class="to-buy-item-remove">
            <to-buy-buttom :text="'X'" @click="$emit('remove')"/>
        </div>

        <div class="to-buy-item-name">{{name}}</div>
    </div>
</template>

<script>
import ToBuyButtom from '@/components/ToBuyButton.vue'

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

<style>

</style>
