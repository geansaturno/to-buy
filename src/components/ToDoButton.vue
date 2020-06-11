<template>
    <button :class="`button-${this.btnStyle}`" @click="action.call()">{{text}}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    action: {
      type: Function,
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
