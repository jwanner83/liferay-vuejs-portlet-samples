<template>
  <ul class="list-group configuration">
    <li class="configuration__item list-group-item d-flex justify-content-between align-items-center">
      System
      <span class="configuration__badge badge bg-primary rounded-pill">{{ system }}</span>
    </li>
    <li class="configuration__item list-group-item d-flex justify-content-between align-items-center">
      Instance
      <span class="configuration__badge badge bg-primary rounded-pill">{{ instance }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'scene',
  data () {
    return {
      placeholder: 'undefined'
    }
  },
  computed: {
    system (): string {
      return this.$root.$data.configuration.system.title || this.placeholder
    },
    instance (): string {
      return this.$root.$data.configuration.portletInstance.title || this.placeholder
    }
  }
})
</script>

<style lang="scss" scoped>
.configuration {
  &__item {
    font-weight: bold;
    margin-bottom: 0;
  }

  &__badge {
    color: var(--white);
    font-size: 12px;
    font-weight: bold;
    padding: 4px 8px;
  }
}
</style>
