<template>
  <div class="wrapper-configuration">
    <scene />
  </div>
</template>

<script>
import Vue from 'vue'
import Scene from './scene'

export default Vue.extend({
  name: 'configuration',
  components: {
    Scene
  }
})
</script>

<style lang="scss" scoped>
.wrapper-configuration {
  background-color: white;
  padding: 20px;
}
</style>
