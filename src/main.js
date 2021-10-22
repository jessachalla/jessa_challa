// Main Vue infrastructure
import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import App from './App.vue'
import '@/scss/app.scss'

Vue.config.productionTip = false
Vue.use(vuetify, VueAxios, axios)

window.app = new Vue({
  vuetify,
  VueRouter,
  render: h => h(App)
}).$mount('#app')
