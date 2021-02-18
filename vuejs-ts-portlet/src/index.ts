// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Vue from 'vue/dist/vue.common'
import App from './components/index.vue'

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
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export default function main ({ portletNamespace, contextPath, portletElementId, configuration }) {
  new Vue({
    el: `#${portletElementId}`,
    data: {
      portletNamespace,
      contextPath,
      portletElementId,
      configuration
    },
    components: {
      App
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    render: h => h(App)
  })
}
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
