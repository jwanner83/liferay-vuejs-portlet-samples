<template>
  <div class="wrapper-configuration-view">
    <p class="wrapper-configuration-view-system">System: {{ configuration.system.title }}</p>
    <p class="wrapper-configuration-view-instance">Instance: {{ configuration.portletInstance.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'scene',
  props: {
    configuration: {
      type: Object,
      default: () => {}
    }
  },
  created () {
    console.log('configuration', this.configuration)
  }
}
</script>

<style lang="scss" scoped>
.wrapper-configuration-view {
  p {
    margin-bottom: 0;
    font-weight: bold;
  }
}
</style>