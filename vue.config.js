const path = require('path')

module.exports = { // 自动化导入
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: path.resolve(__dirname, './src/assets/css/var.scss'),
        })
        .end()
    })
  }
}