<template>
  <div class="wrapper">
    <h1 class="wrapper-title">Vuejs Portlet</h1>
    <configuration :configuration="configuration" />
  </div>
</template>

<script>
  import Configuration from "./configuration/index";

  export default {
    name: 'Parent',
    components: {
      Configuration
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
.wrapper-title {
  margin-bottom: 20px;
  color: white;
}
</style>