<template>
  <div class="vuex-action">
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'action',
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style scoped lang="scss">
.vuex-action {
  margin-top: 10px;

  .btn + .btn {
    margin-left: 10px;
  }
}
</style>
