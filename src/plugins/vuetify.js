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
        main: '#7d9962',
        primary: '#2f4d29',
        secondary: '#BB4430'
      }
    }
  }
})
