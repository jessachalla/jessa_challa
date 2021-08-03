import Vue from 'vue'
import Vuetify from 'vuetify/lib'
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  options: {
    customProperties: true
  },
  theme: {
    themes: {
      light: {
        primary: '#4da1a8',
        secondary: '#6fc6c3',
        highlight: '#c1e5d9',
        text: '#1e1e24',
        red: '#92140c'

      }
    }
  }
})
