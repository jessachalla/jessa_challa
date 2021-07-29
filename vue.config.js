module.exports = {
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
