import App from './App'

// 引入scss

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
Vue.config.productionTip = false
const pinia = createPinia()
App.mpType = 'app'
const app = new Vue({
	...App,
	pinia
})


app.$mount()
// #endif


// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import {
	createPinia
} from 'pinia'


export function createApp() {
	const pinia = createPinia()
	const app = createSSRApp(App)
	app.use(pinia)
	return {
		app
	}
}
// #endif