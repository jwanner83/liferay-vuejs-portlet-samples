<template>
  <div class="wrapper-configuration">
    <scene :configuration="configuration" />
  </div>
</template>

<script>
import Scene from './scene';
export default {
  name: 'configuration',
  components: {
    Scene
  },
  props: {
    configuration: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-configuration {
  background-color: white;
  padding: 20px;
}
</style>