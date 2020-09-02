<template>
  <h1 class="wrapper-child">Child Title Configuration: {{ title }}</h1>
</template>

<script>
  export default {
    name: 'Child',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
.wrapper {
  &-child {
    background-color: red;
    margin-bottom: 0;
  }
}
</style>