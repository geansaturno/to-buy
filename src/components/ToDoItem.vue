<template>
    <div class="to-do-item">
        <div class="to-do-item-shoping">
            <to-do-buttom :text="'OK'" @click="$emit('shop')"/>
        </div>

        <div class="to-do-item-remove">
            <to-do-buttom :text="'X'" @click="$emit('remove')"/>
        </div>

        <div class="to-do-item-name">{{name}}</div>
    </div>
</template>

<script>
import ToDoButtom from '@/components/ToDoButton.vue'

export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    components: {
        ToDoButtom
    }
}
</script>

<style>

</style>
