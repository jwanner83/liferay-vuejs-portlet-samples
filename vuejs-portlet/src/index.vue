<template>
  <div class="wrapper">
    <i>Version: <b>48</b></i>
    <h1 class="wrapper-parent">Parent Title Configuration: {{ configuration.system.parentTitle }}</h1>
    <child :title="configuration.portletInstance.childTitle" />
  </div>
</template>

<script>
  import Child from './components/Child'
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

<style>
.wrapper {
  background-color: black;
}
</style>