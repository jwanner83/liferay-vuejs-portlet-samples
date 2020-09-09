<template>
  <div class="wrapper-child">
    <h1 class="wrapper-child">Child Title Configuration: {{ title }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
  export default {
    name: 'Child',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
    }
  }
</script>

<style lang="scss">
.wrapper {
  &-child {
    margin-bottom: 0;
  }
}
</style>