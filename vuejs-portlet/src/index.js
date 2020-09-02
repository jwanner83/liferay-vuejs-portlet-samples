import Vue from 'vue/dist/vue.common'
import App from './index.vue'

export default function main({portletNamespace, contextPath, portletElementId, configuration}) {
	new Vue({
		el: `#${portletElementId}`,
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