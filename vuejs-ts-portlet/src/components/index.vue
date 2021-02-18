<template>
  <div class="wrapper">
    <h1 class="wrapper-title">Vuejs Portlet</h1>
    <configuration />
  </div>
</template>

<script>
import Vue from 'vue'
import Configuration from './configuration/index'

export default Vue.extend({
  name: 'Parent',
  components: {
    Configuration
  }
})
</script>

<style lang="scss" scoped>
.wrapper-title {
  margin-bottom: 20px;
  color: white;
}
</style>
