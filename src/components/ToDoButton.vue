<template>
    <button @click="action.call()">{{text}}</button>
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
    }
  }
}

</script>

<style lang="scss">

</style>
