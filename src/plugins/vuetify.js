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
        primary: '#F26B6B',
        secondary: '#DADADA',
        text: '#3E3E3E',
        orange: '#FFA400',
        blue: '#009FFD'

      }
    }
  }
})
