<template>
  <div class="portlet__wrapper container-fluid-1280 main-content-body">
    <div class="portlet sheet">
      <h1 class="portlet__title">Vue.js Portlet</h1>
      <p class="portlet__version">Version: {{ version }}</p>
      <configuration />
    </div>
  </div>
</template>

<script>
import Configuration from './configuration/index.vue'

export default {
  name: 'Parent',
  components: {
    Configuration
  },
  computed: {
    version () {
      return '1.1.0'
    }
  }
}
</script>

<style lang="scss" scoped>
.portlet {
  margin-bottom: 20px;
}
</style>
