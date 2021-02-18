<template>
  <div class="portlet__wrapper container-fluid-1280 main-content-body">
    <div class="portlet sheet">
      <h1 class="portlet__title">Vue.js TypeScript Portlet</h1>
      <p class="portlet__version">Version: {{ version }}</p>
      <configuration />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Configuration from './configuration/index.vue'

export default Vue.extend({
  name: 'Parent',
  components: {
    Configuration
  },
  computed: {
    version (): string {
      return '1.0.0'
    }
  }
})
</script>

<style lang="scss" scoped>
.portlet {
  margin-bottom: 20px;
}
</style>
