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

<style>
.wrapper-child {
  background-color: red;
}
</style>