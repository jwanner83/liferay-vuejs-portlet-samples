<template>
  <div class="wrapper">
    <i>Version: <b>58</b></i>
    <h1 class="wrapper-parent">Parent Title Configuration: {{ configuration.system.parentTitle }}</h1>
    <child :title="configuration.portletInstance.childTitle" />
  </div>
</template>

<script>
  import Child from './Child'

  export default {
    name: 'Parent',
    components: {
      Child
    },
    props: {
      configuration: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss">
.wrapper {
  background-color: black;
}
</style>