<template>
  <div class="wrapper-vuex-action">
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'action',
  methods: {
    hans () {
      console.log('markus')
      return 'sdf'
    },
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style lang="scss" scoped>
.wrapper-vuex-action {
  margin-top: 10px;

  .btn + .btn {
    margin-left: 10px;
  }
}
</style>
