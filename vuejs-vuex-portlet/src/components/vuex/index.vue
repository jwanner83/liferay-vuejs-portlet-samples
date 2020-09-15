<template>
  <div class="wrapper-vuex">
    <scene />
    <action />
  </div>
</template>

<script>
import Scene from './scene'
import Action from './action'
export default {
  name: 'vuex',
  components: {
    Action,
    Scene
  }
}
</script>

<style lang="scss" scoped>
.wrapper-vuex {
  background-color: white;
  padding: 20px;
}
</style>
