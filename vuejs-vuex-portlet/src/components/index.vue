<template>
  <div class="portlet__wrapper container-fluid-1280 main-content-body">
    <div class="portlet sheet">
      <h1 class="portlet__title">Vue.js Vuex Portlet</h1>
      <p class="portlet__version">Version: {{ version }}</p>
      <vuex />
      <configuration />
    </div>
  </div>
</template>

<script>
import Configuration from './configuration/index.vue'
import Vuex from './vuex'

export default {
  name: 'Parent',
  components: {
    Vuex,
    Configuration
  },
  computed: {
    version () {
      return '1.1.0'
    }
  }
}
</script>

<style scoped lang="scss">
.portlet {
  margin-bottom: 20px;
}
</style>
