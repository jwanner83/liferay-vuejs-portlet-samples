<template>
  <div class="wrapper">
    <h1 class="wrapper-title">Vuejs Vuex Portlet</h1>
    <vuex />
    <configuration />
  </div>
</template>

<script>
import Vuex from './vuex/index'
import Configuration from './configuration/index'

export default {
  name: 'Parent',
  components: {
    Configuration,
    Vuex
  }
}
</script>

<style lang="scss" scoped>
.wrapper-title {
  margin-bottom: 20px;
  color: white;
}
</style>
