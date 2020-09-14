import Vue from 'vue/dist/vue.common'
import App from './components/index'

import HelperMixin from './mixin'

import './style/styles.scss'

/**
 * This ist the main entry point of the portlet
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param portletNamespace
 * @param contextPath
 * @param portletElementId
 * @param configuration
 */
export default function main ({ portletNamespace, contextPath, portletElementId, configuration }) {
  const helperData = new Map()
  helperData.set('portletNamespace', portletNamespace)
  helperData.set('contextPath', contextPath)
  helperData.set('portletElementId', portletElementId)
  helperData.set('configuration', configuration)

  // helper mixin for runtime variables
  Vue.mixin(new HelperMixin(helperData).getMixin())

  new Vue({
    el: `#${portletElementId}`,
    components: {
      App
    },
    render: h => h(App)
  })
}
