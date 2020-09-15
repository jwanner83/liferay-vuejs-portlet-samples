<template>
  <p class="wrapper-vuex-view">
    Count: <span class="wrapper-vuex-view-count">{{ count }}</span>
  </p>
</template>

<script>
export default {
  name: 'scene',
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-vuex-view {
  font-style: italic;

  &-count {
    font-weight: bold;
  }
}
</style>
