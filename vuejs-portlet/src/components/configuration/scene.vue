<template>
  <div class="wrapper-configuration-view">
    <p class="wrapper-configuration-view-system">System: {{ $root.$data.configuration.system.title }}</p>
    <p class="wrapper-configuration-view-instance">Instance: {{ $root.$data.configuration.portletInstance.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'scene'
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
