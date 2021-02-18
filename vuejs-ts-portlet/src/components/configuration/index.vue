<template>
  <div class="configuration__wrapper">
    <scene />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Scene from './scene.vue'

export default Vue.extend({
  name: 'configuration',
  components: {
    Scene
  }
})
</script>
