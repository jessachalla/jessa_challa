module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/jessa_challa/' : '/',
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.module.rules.delete('eslint')
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/_variables.scss";
        `
      }
    }
  },
  devServer: {
    public: 'localhost:8800',
    disableHostCheck: true,
    https: false,
    port: 8800
  }
}
