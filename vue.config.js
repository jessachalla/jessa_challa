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
    public: 'localhost:3330',
    disableHostCheck: true,
    https: false,
    port: 3330
  }
}
