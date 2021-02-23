<template>
  <div class="portlet__wrapper container-fluid-1280 main-content-body">
    <div class="portlet sheet">
      <h1 class="portlet__title">jsPDF Portlet</h1>
      <p class="portlet__version">Version: {{ version }}</p>
      <button class="btn btn-primary" @click="print">Print</button>
      <configuration />
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf'
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
  },
  methods: {
    print () {
      // eslint-disable-next-line new-cap
      const doc = new jsPDF()
      doc.html(document.body)
      doc.autoPrint()
      doc.output('dataurlnewwindow')
    }
  }
}
</script>

<style lang="scss" scoped>
.portlet {
  margin-bottom: 20px;
}
</style>
