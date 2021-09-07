module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = `Von Denorte's Portfolio`
      return args
    })
  },
}
