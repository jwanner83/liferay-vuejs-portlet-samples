import Vue from 'vue/dist/vue.common'
import App from './components/index.vue'
import './css/index.scss'

export default function main({portletNamespace, contextPath, portletElementId, configuration}) {
	new Vue({
		el: `#${portletElementId}`,
		data: {
			portletNamespace, contextPath, portletElementId, configuration
		},
		components: {
			App
		},
		render: h => h(App, {
			props: {
				configuration
			}
		})
	})
}