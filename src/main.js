// Main Vue infrastructure
import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import '@/scss/app.scss'

Vue.config.productionTip = false
Vue.use(vuetify)

window.app = new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
